

import Link from "next/link";

export default function Alumno({alumno}){
    return(
         <tr>
          <td key={alumno.nombre}>
             <div className="flexbox flex-row">
              <Link href={`/alumno/${alumno.id}`} className="underline">
                <span>{alumno.nombre}</span>
              </Link>
            </div>
          </td>
          <td>{alumno.apellido}</td>
          <td>{alumno.carrera}</td>
          <td className={alumno.calificacion < 70 ? "invisible" : ""}>{alumno.calificacion}</td>
        </tr>
      
    )
}