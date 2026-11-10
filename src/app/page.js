//import Image from "next/image";
"use client";
import {  useState } from "react";
import Alumno from "./alumno";
import { alumnos } from "./datos";

export default function Home() {
  const [mensaje, setMensaje] = useState('');
  const [busqueda, setBusqueda] = useState('');

  const alumnosFiltrados = alumnos.filter((a) =>
    a.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );
  
  return (
    <div>
    <h1>Alumnos</h1>
    
    <section>
    <h2>Agrega alumno:</h2>
    <label htmlFor="nombre">Nombre de alumno:</label>
    <input id="nombre"/>
    <label htmlFor="apellido">Apellido de alumno:</label>
    <input id="apellido"/>
    <label htmlFor="carrera">Carrera de alumno:</label>
    <input id="carrera"/>
    <label htmlFor="estatus">estatus de alumno:</label>
    <input id="estatus"/>
    </section>

    <section>
    <h2>Buscar alumno:</h2>
    <input
      type="text"
      placeholder="Buscar por nombre..."
      value={busqueda}
      onChange={(e) => setBusqueda(e.target.value)}
    />
    </section>

    <h2>Alumnos Presentes</h2>
    <table id="alumnosPresentes">
    <thead>
    <tr>
    <th>
    Nombre
    </th>
    <th>Apellido</th>
    <th>Carrera</th>
    <th>Calificación</th>
    </tr>
    </thead>
    
    <tbody>
    {
      alumnosFiltrados
        .filter((a) => a.activo)
        .map((a, index) => (
          <Alumno key={index} alumno={a} />
        ))
    }
    </tbody>
    </table>

    <h2>Alumnos Ausentes</h2>
    <table id="alumnosAusentes">
      <thead>
    <tr>
    <th>
    Nombre
    </th>
    <th>Apellido</th>
    <th>Carrera</th>
    <th>Calificación</th>
    </tr>
    </thead>
    <tbody>
    {
      alumnosFiltrados
        .filter((a) => !a.activo)
        .map((a, index) => (
          <Alumno key={index} alumno={a} />
        ))
    }
    </tbody>
    </table>
    </div>
  );
}
