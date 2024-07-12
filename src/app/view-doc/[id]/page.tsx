'use client';

export default function Page() {
  function refreshGenrateDocument() {
    alert('Refazendo o Documento');
  }

  function saveDocument() {
    alert('Documento Salvo!');
  }

  function downloadDocument() {
    alert('Baixando o Documento');
  }

  return (
    <>
      <p>Documento</p>
      <br />
      <button onClick={saveDocument}>Salvar</button>
      <br />
      <button onClick={refreshGenrateDocument}>Refazer</button>
      <br />
      <button onClick={downloadDocument}>Baixar</button>
    </>
  );
}
