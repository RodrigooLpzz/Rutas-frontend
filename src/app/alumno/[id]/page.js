import Link from "next/link";
import { alumnos } from "../../datos";

export default async function PerfilAlumno({ params }) {
  const { id } = await params;
  const alumno = alumnos.find((a) => a.id === id);

  if (!alumno) {
    return (
      <div>
        <h1>Alumno no encontrado</h1>
        <Link href="/">Volver a la lista</Link>
      </div>
    );
  }

  return (
    <div>
      <h1>Perfil del Alumno</h1>
      <p><strong>Nombre:</strong> {alumno.nombre}</p>
      <p><strong>Apellido:</strong> {alumno.apellido}</p>
      <p><strong>Carrera:</strong> {alumno.carrera}</p>
      <p><strong>Estatus:</strong> {alumno.activo ? "Presente" : "Ausente"}</p>
      <p><strong>Calificación:</strong> {alumno.calificacion}</p>

      <Link href="/" className="underline">
        ← Volver a la lista de alumnos
      </Link>
    </div>
  );
}
