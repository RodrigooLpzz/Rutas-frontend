//import Image from "next/image";
"use client";
import {  useState } from "react";
import Alumno from "./alumno";

export default function Home() {
  const [mensaje, setMensaje] = useState('');
  const [busqueda, setBusqueda] = useState('');
  
  let alumnos = [
    {
      nombre: "Carlos Hector", 
      apellido: "Leal Delgado",
      carrera: "LCC",
      activo : true,
      calificacion: 85
    },
    {
      nombre: "Alexis Felipe",
      apellido: "Elorza Obregon",
      carrera: "LCC",
      activo : false,
      calificacion: 65
    },
    {
      nombre: "Axel Gabriel",
      apellido: "Gutierrez Ruano",
      carrera: "LCC",
      activo: true,
      calificacion: 92
    },
    {
      nombre: "Eder Abraham",
      apellido: "Sampayo Gonzalez",
      carrera: "LCC",
      activo: true,
      calificacion: 78
    },
    {
      nombre: "Edgar Aurelio",
      apellido: "Santiago Santiago",
      carrera: "LCC",
      activo: false,
      calificacion: 54
    },
    {
      nombre: "Carlos Hector", 
      apellido: "De Leon Saucedo",
      carrera: "LCC",
      activo: true,
      calificacion: 95
    },
    {
      nombre: "Mayela Mayte",
      apellido: "Lopez Cerino",
      carrera: "LCC",
      activo: false,
      calificacion: 60
    },
    {
      nombre: "Rodrigo",
      apellido: "Lopez Escobedo",
      carrera: "LMAD",
      activo: true,
      calificacion: 88
    },
    {
      nombre: "Emiliano",
      apellido: "Chacon Alvarez",
      carrera: "LCC",
      activo: false,
      calificacion: 70
    }
  ];

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
