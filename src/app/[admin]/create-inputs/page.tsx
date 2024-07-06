"use client";
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import { firebaseConfig } from '@jarbas/config/FirebaseConfig';
import { useForm } from "react-hook-form";

export default function CreateInputs() {
  const database = getFirestore(firebaseConfig);

  const collectionRef = collection(database, 'formInputs');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: any) {
    try {
      const docRef = await addDoc(collectionRef, data);
      console.log(docRef);
    }
    catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder='Título do Input' {...register('title')} />
      <input type="text" placeholder='Descrição do Input' {...register('placeholder')} />
      <select {...register('type')}>
        <option value='text'>Texto</option>
      </select>
      <button type="submit">Criar Input</button>
    </form>
  );
}

