import React from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Build from '@material-ui/icons/Build';


const RenderPacientes =(props)=>(

      <table>
        <thead>
          <tr>
            <th>NOMBRE</th>
            <th>CEDULA</th>
            <th>SEXO</th>
            <th>HOSPITAL</th>
            <th>CELULAR</th>
            <th>HORA INGRESO</th>
        
            <th>ACCIONES</th>
          </tr>
        </thead>
        <tbody>
        {props.pacientes.length > 0 ? (
          props.pacientes.map((usuario, key) => (
            <tr key={key}>
                <td>{usuario.nombre_paciente}  </td>
                <td>{usuario.cedula}  </td>
                <td>{usuario.sexo}             </td>
                <td>{usuario.hospital}         </td>
                <td>{usuario.telefono_celular}  </td>
                <td>{usuario.fecha_creacion}   </td>
               
              <td>

                <Button
                onClick={()=> props.onClick(usuario._id)}
                variant="contained"
                color="primary"
                startIcon={<Build />}
                style={{marginRight:2, backgroundColor:"#3382BE"}}
                >
                 modificar
                </Button>

                <Button
                onClick={()=>props.borrar(usuario._id)} 
                variant="contained"
                color="secondary"
                startIcon={<DeleteIcon />}
                >
                 Eliminar
                </Button>
              </td>
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

export default RenderPacientes;

