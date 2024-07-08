"use client";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IFormInputInterface } from "@jarbas/interfaces/IFormInputInterface";
import { IFormInterface } from "@jarbas/interfaces/IFormInterface";
import { JarbasDatabase, JarbasFormDomainsCollections, JarbasFormInputsCollections } from "@jarbas/libs/firebase";

async function onSubmit(data: any) {
  try {
    const docRef = await addDoc(JarbasFormDomainsCollections, {
      ...data,
      inputs: data.inputs || []
    });

    console.log(docRef);
  } catch (error) {
    console.error(error);
  }
}

export default function CreateForms() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [inputs, setInputs] = useState<IFormInputInterface[]>([]);
  const [formDomains, setFormDomains] = useState<IFormInterface[]>([]);

  useEffect(() => {
    async function getInputs() {
      const inputsSnapshot = await getDocs(JarbasFormInputsCollections);

      const inputs = inputsSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          ...data,
          sub: doc.id
        };
      });

      setInputs(inputs);
    }

    async function getFormDomains() {
      const collectionRef = collection(JarbasDatabase, 'formDomains');

      const formDomainsSnapshot = await getDocs(collectionRef);

      const formDomains = formDomainsSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          ...data,
          sub: doc.id
        };
      });

      setFormDomains(formDomains);
    }

    getInputs();

    getFormDomains();
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder='Título do Form' {...register('title')} />
      <input type="text" placeholder='Descrição do Form' {...register('description')} />
      <select multiple {...register('inputs')}>
        {
          inputs.map(input => (
            <option key={input.sub} value={input.sub}>{input.title}</option>
          ))
        }
      </select>
      <select {...register('redirectId')}>
        {
          formDomains.map(formDomain => (
            <option key={formDomain.sub} value={formDomain.sub}>{formDomain.title}</option>
          ))
        }
      </select>
      <button type="submit">Criar Form</button>
    </form>
  );
}
