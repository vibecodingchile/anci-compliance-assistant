"use client";

import { useState } from "react";

export default function EntitiesPage() {
  const [rut, setRut] = useState("");
  const [name, setName] = useState("");

  async function createEntity() {
    await fetch("/api/entities/create", {
      method: "POST",
      body: JSON.stringify({ rut, legalName: name }),
    });
    setRut("");
    setName("");
    alert("Entidad creada 👍");
  }

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold">Crear Entidad (RUT)</h1>

      <input
        value={rut}
        onChange={(e) => setRut(e.target.value)}
        placeholder="Rut"
        className="border p-2 block my-2"
      />

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Nombre legal"
        className="border p-2 block my-2"
      />

      <button
        onClick={createEntity}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Crear
      </button>
    </main>
  );
}
