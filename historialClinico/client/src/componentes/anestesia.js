import React, {Component} from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import FormLabel from '@material-ui/core/FormLabel';
import { Checkbox } from 'react-desktop/macOs';
const host = "http://localhost:3000";


export default class Anestesia extends Component {

constructor(props) {
   
    super(props);
    this.state = { 
      nombre: '',
      fecha: '',
      hora:'',
      temperatura: '',
      pulso:'',
      respiracion:'',
      TA:'',
      enfermera:'',
      observacion:'',
      dieta:'',

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

<Grid container spacing={2}>
        <Grid item xs={8}>
            <TextField style={{margin:5}} fullWidth onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="NOMBRE" />
        </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid item xs={4}>
        <TextField style={{margin:5}}  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="DIAGNOSTICO" />
    </Grid>
    <Grid item xs={4}>
        <FormLabel style={{marginTop:15}}></FormLabel>
    </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid item xs={4}>
        <TextField style={{margin:5}}  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="OPERACION PROPUESTA" />
    </Grid>
    <Grid item xs={4}>
        <FormLabel style={{marginTop:15}}></FormLabel>
    </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid item xs={4}>
        <TextField style={{margin:5}}  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="CIRUJANO" />
    </Grid>
    <Grid item xs={4}>
        <FormLabel style={{marginTop:15}}></FormLabel>
    </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid item xs={4}>
        <TextField style={{margin:5}}  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="ANESTESIOLOGO" />
    </Grid>
    <Grid item xs={4}>
        <FormLabel style={{marginTop:15}}></FormLabel>
    </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid item xs={4}>
        <TextField style={{margin:5}}  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="TECNICA" />
    </Grid>
    <Grid item xs={4}>
        <FormLabel style={{marginTop:15}}></FormLabel>
    </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid item xs={4}>
        <TextField style={{margin:5}}  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="Nombre del paciente" />
    </Grid>
    <Grid item xs={4}>
        <FormLabel style={{marginTop:15}}></FormLabel>
    </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid item xs={4}>
        <TextField style={{margin:5}}  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="Nombre del paciente" />
    </Grid>
    <Grid item xs={4}>
        <FormLabel style={{marginTop:15}}></FormLabel>
    </Grid>
    </Grid>

    <Grid container style={{backgroundColor:"#", justifyContent:"space-around"}} item xs={6}>
        <h5>RIESGO : </h5>
        <Checkbox
        label="I"
        onChange={(e) => console.log(e.target.value)}
        defaultValue="HEMATOLOGIA COMPLETA"
        />
        <Checkbox
        label="II"
        onChange={(e) => console.log(e.target.value)}
        defaultValue="HB HEMATOCRITO"
        />
        <Checkbox
        label="III"
        onChange={(e) => console.log(e.target.value)}
        defaultValue="C BLANCA Y FORMULA"
        />
        <Checkbox
        label="IV"
        onChange={(e) => console.log(e.target.value)}
        defaultValue="RETICULOCITOS"
        />
        <Checkbox
        label="V"
        onChange={(e) => console.log(e.target.value)}
        defaultValue="RETICULOCITOS"
        />
        <Checkbox
        label="VI"
        onChange={(e) => console.log(e.target.value)}
        defaultValue="RETICULOCITOS"
        />
  </Grid>


      <Divider style={{margin:20}}  />
        <Button style={{ marginRight:200}}
                type="submit"
                variant="contained"
                color="primary"
                startIcon={<Add />}
                >
                 Signos paciente
        </Button>
    </form>
  );
}
}


