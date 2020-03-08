import React from "react";

const Historial =(props)=>(

      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>CEDULA</th>
            <th>HOSPITAL</th>
            <th>STATUS</th>
            <th>FECHA/HORA</th>
            <th>ID USUARIO</th>
        

          </tr>
        </thead>
        <tbody>
        {props.historia.length > 0 ? (
          console.log(props),
          props.historia.map((usuario, key) => (
            <tr key={key}>
                <td>{usuario.nombre_paciente}  </td>
                <td>{usuario.cedula}  </td>          
                <td>{usuario.hospital}         </td>
                <td>{usuario.status}         </td>
                <td>{usuario.fecha_creacion}         </td>
                <td>{usuario._id}         </td>

            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={8}>No hay pacientes</td>
          </tr>
        )}
        </tbody>
      </table>
    )

export default Historial;

