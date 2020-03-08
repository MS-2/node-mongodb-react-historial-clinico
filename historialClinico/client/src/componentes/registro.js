import React, {Component} from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// import Radio from '@material-ui/core/Radio';
// import Box from '@material-ui/core/Box';
// import Select from '@material-ui/core/Select';
// import SvgIcon from '@material-ui/core/SvgIcon';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
const host = "http://localhost:3000";

// const edades = [0,1,2,3,4,5,6,7,8,9];


export default class Registro extends Component {

constructor(props) {
   
    super(props);
    this.state = { 
      hospital: '',
      nombre: '',
      direccion:'',
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
      pasador: true,
      date:'',
      mensaje: '',
      error:false
      };
    }


myChangeHandler = (event) => {
    if (event.target.value<3) {
        this.setState({error: true});  
    }
    let name = event.target.name;
    let val = event.target.value;
    this.setState({[name]: val});  
    }

mySubmitHandler = (event) => {
    if (!this.validate()) {
        return;
      }
      event.preventDefault();
      axios.post(`${host}/paciente`, {
        "hospital": this.state.hospital,
        "nombre_paciente":this.state.nombre,
        "direccion":this.state.direccion,
        "cedula": this.state.cedula,
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
        .then( (response)=> {
            console.log(response.data);
            console.log(response.response);
            console.log(response.request);
            console.log(response.config);
            console.table(response);
            if (response.status === 500) {
                alert("error con el servidor es posible que la cedula ya este en la base de datos checke los datos insertados");
                console.log(response);
                console.table(response);
            }
          console.log(response);
          console.table(response);
        })
        .catch( (error)=> {
            if (error.status === 500) {
                alert("error con el servidor es posible que la cedula ya este en la base de datos checke los datos insertados");
            }
            console.table(error);
          console.log(error);
          console.log(error.response);
          console.log(error.request);
          console.log(error.config);
          console.table(error);
        });
        window.location.replace('');
    }

obtenerFecha =()=>{
    var that = this;
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1; 
    var year = new Date().getFullYear().toString().substr(-2); 
    var hours = new Date().getHours(); 
    var min = new Date().getMinutes(); 
    min = min > 9 ? min : '0' + min;
    that.setState({ fecha_creacion: date + '/' + month + '/' + year + '/' + hours + ':' + min }); 
    }
componentDidMount(){
    this.obtenerFecha();
    }

save=()=>{
    if (!this.validate()) {
        return;
    }
    this.setState({mensaje: "paciente guardado correctamente"})
    }

validate=()=>{
    if (this.state.cedula === '') {
        this.setState({mensaje: "complete el formulario"})
        return false;
    }
    this.obtenerFecha();
    return true;
    }

render(){
 

  return (
    <form autoComplete="off" onSubmit={this.mySubmitHandler}>
    <Typography style={{textAlign:"center"}}>
    CENTRO HOSPITALARIO
    </Typography>
    <Divider style={{margin:20}}/>
        <Grid container spacing={2} justify="center">
            <Grid item xs={5}>
            HOSPITAL DR AMERICO BABO  <input type="radio" name="hospital" value="HOSPITAL DR AMERICO BABO" onChange={this.myChangeHandler}/>
            </Grid>
            <Grid item xs={3}>
            CLINICA PIAR  <input type="radio" name="hospital" value="CLINICA PIAR" autoFocus  onChange={this.myChangeHandler} />
            </Grid>
            <Grid item xs={3}>
            CLINICA PALUA <input type="radio" name="hospital" value="CLINICA PALUA"  onChange={this.myChangeHandler} />
            </Grid>
        </Grid>
    <Divider style={{margin:20}} />
{/* ----------------------------------------------------------------------------------------------------- */}
    <Typography style={{textAlign:"center"}}>
        DATOS DEL PACIENTE
    </Typography>
    <Divider style={{marginBottom:20}}  />
    <Grid container spacing={2}>
        <Grid item xs={8}>
            <TextField onChange={this.myChangeHandler} required error={this.state.error} inputProps={{ maxLength: 40, minLength:3 }} name="nombre" id="outlined-required" fullWidth size="small" variant="outlined" placeholder="NOMBRE COMPLETO" />
        </Grid>
    </Grid>

    <Grid container spacing={2}>
        <Grid item xs={8}>
            <TextField onChange={this.myChangeHandler} required error={this.state.error} inputProps={{ maxLength: 60, minLength:8 }} name="direccion" id="outlined-basic" fullWidth size="small" variant="outlined" placeholder="DIRECCION ACTUAL COMPLETA" />
        </Grid>
        <Grid item xs={4}>
            <TextField onChange={this.myChangeHandler} required inputProps={{ maxLength: 8, minLength:6 }} name="cedula" id="outlined-required" size="small" variant="outlined" placeholder="CEDULA DE IDENTIDAD" />       
        </Grid>
    </Grid>


    <Grid container spacing={2}>
        <Grid item xs={2} >
            HOMBRE   <input type="radio" name="sexo" value="M" onChange={this.myChangeHandler}/>
        </Grid>
        <Grid item xs={2}>
            MUJER    <input type="radio" name="sexo" value="F" onChange={this.myChangeHandler}/>
        </Grid>
        <Grid item xs={4}>
            <TextField
            onChange={this.myChangeHandler}
            name='fecha_nacimiento'
            variant="outlined"
            label="FECHA DE NACIMIENTO"
            type="date"
            defaultValue={this.state.fecha_creacion}
            InputLabelProps={{
            shrink: true,
            }}
            />
        </Grid>
        <Grid item xs={3}>
            <TextField onChange={this.myChangeHandler} required error={this.state.error} inputProps={{ maxLength: 15, minLength:11 }} type="number" name='telefono_celular' id="outlined-required" size="small" variant="outlined" placeholder="TELEFONO CELULAR" />       
        </Grid>
    </Grid>

    <Grid container spacing={2}>
        <Grid item xs={8}>
            <TextField onChange={this.myChangeHandler} required error={this.state.error} inputProps={{ maxLength: 40, minLength:3 }} name='servicio' id="outlined-required" fullWidth size="small" variant="outlined" placeholder="SERVICIO" />
        </Grid>
        <Grid item xs={4}>
            <TextField defaultValue="Venezuela" onChange={this.myChangeHandler} name='pais' id="outlined-required" required size="small" variant="outlined" placeholder="PAIS" />
        </Grid>
    </Grid>

    <Grid container spacing={2}>
        <Grid item xs={8}>
            <TextField onChange={this.myChangeHandler} readOnly id="outlined-required" name='fecha_creacion' value={this.state.fecha_creacion} fullWidth size="small" variant="outlined" placeholder="HORA Y FECHA DE LA ADMISION" />
        </Grid>
        <Grid item xs={4}>
            <TextField defaultValue="Bolivar" onChange={this.myChangeHandler} name='estado' id="outlined-required" required size="small" variant="outlined" placeholder="ESTADO" />
        </Grid>
    </Grid>

    <Grid container spacing={2}>
        <Grid item xs={8}>
            <TextField onChange={this.myChangeHandler} required  inputProps={{ maxLength: 25, minLength:3 }} name='avisarA' id="outlined-required" fullWidth size="small" variant="outlined" placeholder="AVISAR EN CASO DE EMERGENCIA A:"  />
        </Grid>
        <Grid item xs={4}>
            <TextField onChange={this.myChangeHandler} required  inputProps={{ maxLength: 15, minLength:11 }} type="number" name='telefono_emergencia' id="outlined-required" size="small" variant="outlined" placeholder="TELEFONO EMERGENCIA" />
        </Grid>
    </Grid>

    <Grid container spacing={2}>
        <Grid item xs={8}>
        <TextField
        onChange={this.myChangeHandler} 
        name='motivo_admision'
        fullWidth
          id="outlined-multiline-static"
          label="Motivo de la admision"
          multiline
          rows="4"
          cols="8"
          placeholder="Nota al ser admitido el paciente debe firmar su entrada, describa brevemente de las dolencias o padecimientos"
          variant="outlined"
        />
        </Grid>
    </Grid>


      <Divider style={{margin:20}}  />
        <Button style={{float:"right", marginRight:200}}
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<Add />}
                >
                 Registrar Paciente
        </Button>
    </form>
  );
}
}


