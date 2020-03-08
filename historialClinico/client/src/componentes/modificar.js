import React, { Component } from "react";
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Add from '@material-ui/icons/Add';
const host = "http://localhost:3000";

export default class Modificar extends Component{

  constructor(props) {
    super(props);
    this.state = { 
      hospital: '',
      nombre: '',
      direccion: '',
      cedula: '',
      sexo:'',
      fecha_nacimiento:'',
      telefono_celular:'',
      servicio:'',
      pais:'',
      estado:'',
      avisarA:'',
      telefono_emergencia:'',
      motivo_admision:'',
      fecha_creacion:'',
      mensaje:'',
      lock: true
      };
    }

   

  myChangeHandler = (event) => {
    // console.log("!!!!!!!",event.target.valueTracker);
    let name = event.target.name;
    let val = event.target.value;
    this.setState({[name]: val});
    }

  actualizar= (id, data)=>{

      axios.patch(`${host}/pacienteunique/${id}`, {    
        "hospital":  this.state.hospital,
        "nombre_paciente":this.state.nombre,
        "direccion":this.state.direccion,
        "cedula":this.state.cedula,
        "sexo":this.state.sexo,
        "fecha_nacimiento":this.state.fecha_nacimiento,
        "telefono_celular":this.state.telefono_celular,
        "servicio":this.state.servicio,
        "pais":this.state.pais,
        "estado":this.state.estado,
        "avisarA":this.state.avisarA,
        "telefono_emergencia":this.state.telefono_emergencia,
        "motivo_admision":this.state.motivo_admision,
        "fecha_creacion":this.state.fecha_creacion,
      })

      .then((res) => {
        console.log(res);
      })
      .catch(function(error) {
        console.log('Hubo un problema con la petición Fetch:' + error.message);
      });
    }


    


          

    render(props){
      // console.log(this.props);
      const data = this.props;
    return (
      <form>

    {/* ----------------------------------------------------------------------------------------------------- */}
      <Typography style={{textAlign:"center"}}>
            DATOS DEL PACIENTE
        </Typography>
        <Divider style={{marginBottom:20}}  />
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <input style={{borderRadius:4, color:"black"}} placeholder="HOSPITAL" type='text'name="hospital" defaultValue={this.props.paciente.hospital} onChange={this.myChangeHandler}/>
                <input style={{borderRadius:4, color:"black"}} placeholder="NOMBRE COMPLETO" type='text'name="nombre" defaultValue={this.props.paciente.nombre_paciente} onChange={this.myChangeHandler}/>
                <input style={{borderRadius:4, color:"black"}} placeholder="DIRECCION" type='text'name="direccion" defaultValue={this.props.paciente.direccion} onChange={this.myChangeHandler}/>
                <input style={{borderRadius:4, color:"black"}} placeholder="CI" type='text'name="cedula" defaultValue={this.props.paciente.cedula} onChange={this.myChangeHandler}/>
                <input style={{borderRadius:4, color:"black"}} maxLength="1" placeholder="SEXO M O F" type='text'name="sexo" defaultValue={this.props.paciente.sexo} onChange={this.myChangeHandler}/>
                <input style={{borderRadius:4, color:"black"}} placeholder="FECHA DE NACIMIENTO" type='text'name="fecha_nacimiento" defaultValue={this.props.paciente.fecha_nacimiento} onChange={this.myChangeHandler}/>
                </Grid>
                <Grid item xs={6}>
                <input style={{borderRadius:4, color:"black"}} placeholder="CELULAR" type='text'name="telefono_celular" defaultValue={this.props.paciente.telefono_celular} onChange={this.myChangeHandler}/>
                <input style={{borderRadius:4, color:"black"}} placeholder="SERVICIO O TRATAMIENDO" type='text'name="servicio" defaultValue={this.props.paciente.servicio} onChange={this.myChangeHandler}/>
                <input style={{borderRadius:4, color:"black"}} placeholder="PAIS" type='text'name="pais" defaultValue={this.props.paciente.pais} onChange={this.myChangeHandler}/>
                <input style={{borderRadius:4, color:"black"}} placeholder="En caso de emergencia avisar a:" type='text'name="avisarA" defaultValue={this.props.paciente.avisarA} onChange={this.myChangeHandler}/>
                <input style={{borderRadius:4, color:"black"}} placeholder="TELEFONO DE EMERGENCIA" type='text'name="telefono_emergencia" defaultValue={this.props.paciente.telefono_emergencia} onChange={this.myChangeHandler}/>
                <input style={{borderRadius:4, color:"black"}} placeholder="Motivo de la admision" type='text'name="motivo_admision" defaultValue={this.props.paciente.motivo_admision} onChange={this.myChangeHandler}/>
            </Grid>
        </Grid>
    
        <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
              fullWidth
              name="anotacion"
              id="outlined-multiline-static"
              label="Anotacion"
              multiline
              rows="4"
              cols="8"
              variant="outlined"
              required
            />
            </Grid>
        </Grid>
    
    
          <Divider style={{margin:20}}  />
          <Button style={{backgroundColor:"#3382BE"}} variant="contained" color="primary" startIcon={<Add />}  
          type="submit" onClick={() =>this.actualizar(this.props.paciente._id, data.paciente)}>guardar
          </Button>
          <span style={{color: "green"}}> {this.state.mensaje}</span>
        </form>
        )
    }
}






