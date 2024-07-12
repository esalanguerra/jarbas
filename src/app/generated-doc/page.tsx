"use client";

export default function Page() {
  function saveDocument() {
    alert("Documento Salvo!");
  }

  async function autoSaveDocument() {
    // Salvar o Documento no Firebase
  }

  function generateDocument() {
    // Gerar o Documento .doc
  }

  return (
    <>
      <p>Documento Gerado!</p>
      <br />
      <a href="/view-doc/1">Visualizar Documento</a>
      <br />
      <button onClick={saveDocument}>Salvar Documento</button>
    </>
  );
}
