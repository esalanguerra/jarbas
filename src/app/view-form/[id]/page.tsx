"use client";

import { useParams } from "next/navigation";
import {
  JarbasFormDomainsCollections,
  JarbasFormInputsCollections,
} from "@jarbas/libs/firebase";
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { IFormInterface } from "@jarbas/interfaces/IFormInterface";
import { IFormInputInterface } from "@jarbas/interfaces/IFormInputInterface";

interface IForm extends IFormInterface {
  inputsForm?: string[];
}

export default function Page() {
  const [formDomain, setFormDomain] = useState<IForm | null>(null);
  const [inputs, setInputs] = useState<IFormInputInterface[]>([]);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    async function getFormDomain() {
      if (params.id) {
        const docRef = doc(JarbasFormDomainsCollections, params.id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setFormDomain({
            sub: docSnap.id,
            inputsForm: data.inputs,
            title: data.title,
            description: data.description,
          });

          const inputDocs = await Promise.all(
            data.inputs.map(async (input: string) => {
              const inputDocRef = doc(JarbasFormInputsCollections, input);
              const inputDocSnap = await getDoc(inputDocRef);
              if (inputDocSnap.exists()) {
                const inputData = inputDocSnap.data();
                return {
                  sub: inputDocSnap.id,
                  title: inputData.title,
                  type: inputData.type,
                  placeholder: inputData.placeholder,
                };
              }
              return null;
            })
          );

          setInputs(
            inputDocs.filter((input) => input !== null) as IFormInputInterface[]
          );
        } else {
          window.location.href = "/404";
        }
      }
    }

    getFormDomain();
  }, [params.id]);

  function onSubmit() {}

  return (
    <>
      <form onSubmit={onSubmit}>
        <h1>{formDomain?.title}</h1>
        <p>{formDomain?.description}</p>
        {inputs.map((input) => (
          <input
            key={input.sub}
            type={input.type}
            placeholder={input.placeholder}
          />
        ))}
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
