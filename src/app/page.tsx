"use client";

import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faDownload,
  faBars,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { JarbasDocsCollections } from "@jarbas/libs/firebase";
import { getDocs, Timestamp } from "firebase/firestore";
import { IDocumentsInterface } from "@jarbas/interfaces/IDocumentsInterface";

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [documents, setDocuments] = useState<IDocumentsInterface[]>([]);

  useEffect(() => {
    async function getDocuments() {
      const documents = await getDocs(JarbasDocsCollections);

      const documentsData = documents.docs.map((doc) => {
        const data = doc.data();
        const date =
          data.date instanceof Timestamp
            ? data.date.toDate().toLocaleDateString()
            : data.date;
        return {
          ...data,
          sub: doc.id,
          date: date,
        };
      });

      setDocuments(documentsData);
    };

    getDocuments();
  }, []);

  function downloadDocument() {
    alert("Documento baixado com sucesso!");
  }

  function deleteDocument() {
    alert("Documento excluído com sucesso!");
  }

  function goCreateDocument() {
    window.location.href = "/generate-document";
  }

  return (
    <div className="min-h-screen flex bg-gray-100">
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform ${isMenuOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out`}
      >
        <div className="flex justify-between items-center p-4">
          <h1 className="text-2xl font-bold text-gray-900">Menu</h1>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-gray-700 focus:outline-none"
          >
            <FontAwesomeIcon icon={faTimes} className="w-6 h-6" />
          </button>
        </div>
        <nav className="flex flex-col p-4 space-y-2">
          <a
            href="#"
            className="text-gray-700 hover:bg-gray-200 rounded-lg px-2 py-1"
          >
            Documentos gerados
          </a>
          <a
            href="#"
            className="text-gray-700 hover:bg-gray-200 rounded-lg px-2 py-1"
          >
            Ajuda
          </a>
        </nav>
      </div>
      <div className="flex-1 flex flex-col">
        <header className="bg-white shadow w-full">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-gray-700 focus:outline-none"
            >
              <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Jarbas</h1>
            <img
              src="https://via.placeholder.com/40"
              alt="User avatar"
              className="ml-4 rounded-full"
            />
          </div>
        </header>
        <main className="flex-1 overflow-y-auto p-6">
          <div className="max-w-7xl mx-auto">
            <div className="py-4">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="border-4 border-yellow-500 rounded-lg h-48 flex items-center justify-center">
                    <button
                      onClick={goCreateDocument}
                      className="flex flex-col items-center space-y-2 text-yellow-500 hover:text-yellow-600"
                    >
                      <FontAwesomeIcon icon={faPlus} className="w-8 h-8" />
                      <span className="text-lg">Gerar novo documento</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="py-4">
              <h2 className="text-2xl font-semibold text-gray-700">
                Documentos recentes
              </h2>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {documents.map((doc) => (
                  <div
                    key={doc.sub}
                    className="bg-white shadow rounded-lg overflow-hidden"
                  >
                    <div className="p-4 flex flex-col h-full justify-between">
                      <div className="min-h-[200px] flex items-center justify-center">
                        <p className="text-center text-gray-500">
                          PRÉ-VISUALIZAÇÃO DE DOCUMENTO PADRÃO
                        </p>
                      </div>
                      <div
                        style={{
                          background: "linear-gradient(to right, #333, #000)",
                        }}
                        className="p-4 mt-4 flex flex-col justify-between flex-grow"
                      >
                        <div>
                          <h3 className="text-lg font-semibold text-white">
                            {doc.name}
                          </h3>
                          <p style={{ color: "#A3A3A3" }}>
                            Criado dia {doc.date}
                          </p>
                          <p style={{ color: "#A3A3A3" }}>{doc.type}</p>
                        </div>
                        <div className="flex justify-start items-center mt-5">
                          <button
                            style={{ color: "rgba(234, 179, 8, 1)" }}
                            className="hover:text-red-700 mr-4"
                            onClick={deleteDocument}
                          >
                            Excluir
                          </button>
                          <button
                            onClick={downloadDocument}
                            className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-yellow-600 flex items-center space-x-2"
                          >
                            <FontAwesomeIcon
                              icon={faDownload}
                              className="w-5 h-5"
                            />
                            <span>Download</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                <button className="bg-yellow-500 text-white py-2 px-4 rounded-md shadow-sm flex items-center justify-center hover:bg-yellow-600 cursor-pointer">
                  <span>Todos os documentos gerados</span>
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
