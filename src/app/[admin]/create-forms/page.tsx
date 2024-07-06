"use client";
import { firebaseConfig } from "@jarbas/config/FirebaseConfig";
import { collection, getFirestore, addDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IFormInputInterface } from "@jarbas/interfaces/IFormInputInterface";
import { IFormInterface } from "@jarbas/interfaces/IFormInterface";

const database = getFirestore(firebaseConfig);

async function onSubmit(data: any) {
  try {
    const collectionRef = collection(database, 'formDomains');

    const docRef = await addDoc(collectionRef, {
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
      const collectionRef = collection(database, 'formInputs');

      const inputsSnapshot = await getDocs(collectionRef);

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
      const collectionRef = collection(database, 'formDomains');

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
