"use client";
import { firebaseConfig } from "@jarbas/config/FirebaseConfig";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider } from "firebase/auth";
import { useForm } from "react-hook-form";

export default function Login() {
  const auth = getAuth(firebaseConfig);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: any) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );
      console.log(userCredential);
    }
    catch (error) {
      console.error(error);
    }
  }

  async function onSubmitGoogle() {}

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("email")} />
      <input type="password" {...register("password")} />
      <button type="submit">Login</button>
      <button type="button" onClick={onSubmitGoogle}>
        Login with Google
      </button>
    </form>
  );
}
