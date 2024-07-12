"use client";

import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple } from "@fortawesome/free-brands-svg-icons";
import { JarbasAuth } from "@jarbas/libs/firebase";

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmitEmailAndPassword(data: any) {
    try {
      await createUserWithEmailAndPassword(
        JarbasAuth,
        data.email,
        data.password
      );
    } catch (error) {
      alert('Erro ao Realizar Autenticacão');
    }
  }

  async function onSubmitGoogle() {
    try {
      const provider = new GoogleAuthProvider();

      await signInWithPopup(JarbasAuth, provider);
    } catch (error) {
      alert('Erro ao Realizar Autenticacao');
    }
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/background_login.png')" }}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl p-8 h-4/5">
        <div className="text-white md:mr-8 mb-8 md:mb-0 max-w-md">
          <h1 className="text-7xl font-bold mb-40" style={{ color: "#EAB308" }}>
            Dr. Jarbas
          </h1>
          <p className="text-lg mt-20" style={{ color: "#A3A3A3" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
            bibendum lacus, in semper lorem. Proin arcu leo, maximus eu sagittis
            eget, egestas nec leo.
          </p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full py-8">
          <form
            onSubmit={handleSubmit(onSubmitEmailAndPassword)}
            className="space-y-4 py-8 "
          >
            <div className="py-2">
              <label className="block text-sm font-medium text-gray-700 ">
                Endereço de Email
              </label>
              <input
                type="text"
                {...register("email", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="seu@email.com"
              />
              {errors.email && (
                <span className="text-red-500 text-sm">
                  Email é obrigatório
                </span>
              )}
            </div>
            <div className="py-2">
              <label className="block text-sm font-medium text-gray-700">
                Senha de Acesso
              </label>
              <input
                type="password"
                {...register("password", { required: true })}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
                placeholder="********"
              />
              {errors.password && (
                <span className="text-red-500 text-sm">
                  Senha é obrigatória
                </span>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white py-2 rounded-md shadow-sm hover:bg-yellow-600"
            >
              Entrar
            </button>
          </form>
          <div className="mt-6 py-8">
            <button
              type="button"
              onClick={onSubmitGoogle}
              className="w-full bg-white text-black py-2 rounded-md shadow-sm border flex items-center justify-center space-x-2 hover:bg-gray-100"
            >
              <FontAwesomeIcon icon={faGoogle} className="w-5 h-5" />
              <span>Login com Google</span>
            </button>
            <div className="text-center text-gray-500 mt-2">Ou</div>
            <button
              type="button"
              className="w-full bg-black text-white py-2 rounded-md shadow-sm flex items-center justify-center space-x-2 hover:bg-gray-800"
            >
              <FontAwesomeIcon icon={faApple} className="w-5 h-5" />
              <span>Login com Apple</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
