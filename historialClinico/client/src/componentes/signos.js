import React, {Component} from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import FormLabel from '@material-ui/core/FormLabel';
const host = "http://localhost:3000";


export default class Signos extends Component {

constructor(props) {
   
    super(props);
    this.state = { 
      nombre: '',
      fecha: '',
      temperatura: '',
      pulso:'',
      respiracion:'',
      TA:'',
      enfermera:'',
      observacion:'',
      dieta:'',

      pasador: true,
      date:'',
      mensaje: '',
      error:false
      };
    }


myChangeHandler = (event) => {
    let name = event.target.name;
    let val = event.target.value;
    this.setState({[name]: val});  
    }

mySubmitHandler = (event) => {

      axios.post(`${host}/paciente`, {
        "nombre": this.state.nombre,
        "fecha":this.state.fecha,
        "temperatura":this.state.temperatura,
        "pulso": this.state.pulso,
        "respiracion":this.state.respiracion,
        "TA":this.state.TA,
        "enfermera":this.state.enfermera,
        "observacion":this.state.observacion,
        "dieta":this.state.dieta,
        })
        .then( (response)=> {

        })
        .catch( (error)=> {
            if (error.status === 500) {
                alert("error con el servidor es posible que la cedula ya este en la base de datos checke los datos insertados");
            }
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


render(){
 

  return (
    <form autoComplete="off" onSubmit={this.mySubmitHandler}>

<Grid container spacing={2}>
        <Grid item xs={8}>
            <TextField style={{margin:5}} fullWidth onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="Nombre del paciente" />
        </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid item xs={4}>
        <TextField style={{margin:5}}  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="Fecha" />
    </Grid>
    <Grid item xs={4}>
        <FormLabel style={{marginTop:15}}>Fecha</FormLabel>
    </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid item xs={4}>
        <TextField style={{margin:5}}  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="Hora" />
    </Grid>
    <Grid item xs={4}>
        <FormLabel style={{marginTop:15}}>Hora</FormLabel>
    </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid item xs={4}>
        <TextField style={{margin:5}}  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="Pulso" />
    </Grid>
    <Grid item xs={4}>
        <FormLabel style={{marginTop:15}}>Pulso</FormLabel>
    </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid item xs={4}>
        <TextField style={{margin:5}}  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="respiracion" />
    </Grid>
    <Grid item xs={4}>
        <FormLabel style={{marginTop:15}}>Respiracion</FormLabel>
    </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid item xs={4}>
        <TextField style={{margin:5}}  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="T.A" />
    </Grid>
    <Grid item xs={4}>
        <FormLabel style={{marginTop:15}}>T.A</FormLabel>
    </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid item xs={4}>
        <TextField style={{margin:5}}  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="Enfermera" />
    </Grid>
    <Grid item xs={4}>
        <FormLabel style={{marginTop:15}}>Enfermera</FormLabel>
    </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid item xs={4}>
        <TextField style={{margin:5}}  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="Observacion" />
    </Grid>
    <Grid item xs={4}>
        <FormLabel style={{marginTop:15}}>Observacion</FormLabel>
    </Grid>
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


