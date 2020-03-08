import React, {Component} from 'react';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
// import axios from 'axios';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
// const host = "http://localhost:3000";


export default class Radio extends Component {

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
    let name = event.target.name;
    let val = event.target.value;
    this.setState({[name]: val});  
    }

mySubmitHandler = (event) => {
    //   axios.post(`${host}/paciente`, {
    //     "hospital": this.state.hospital,
    //     "nombre_paciente":this.state.nombre,
    //     "direccion":this.state.direccion,
    //     "cedula": this.state.cedula,
    //     "sexo":this.state.sexo,
    //     "fecha_nacimiento":this.state.fecha_nacimiento,
    //     "telefono_celular":this.state.telefono_celular,
    //     "servicio":this.state.servicio,
    //     "pais":this.state.pais,
    //     "estado":this.state.estado,
    //     "avisarA":this.state.avisarA,
    //     "telefono_emergencia":this.state.telefono_emergencia,
    //     "motivo_admision":this.state.motivo_admision,
    //     "fecha_creacion":this.state.fecha_creacion,
    //     })
    //     .then( (response)=> {
    //     })
    //     .catch( (error)=> {
    //     });
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
    <Grid item xs={3}>
            <TextField
            onChange={this.myChangeHandler}
            name='fecha'
            variant="outlined"
            label="Fecha"
            type="date"
            size="small"
            defaultValue={this.state.fecha_creacion}
            InputLabelProps={{
            shrink: true,
            }}
            />
    </Grid>
    <Grid item xs={3}>
        <TextField size="small"  name='fecha' variant="outlined" placeholder="Historia N°" >Fecha</TextField>
    </Grid>
    </Grid>
    <Grid container spacing={2}>
    <Grid item xs={3}>
        <TextField  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre" id="outlined-basic"  size="small" variant="outlined" placeholder="Nombre del paciente" />
    </Grid>
    <Grid item xs={3}>
    <TextField  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="edad" id="outlined-basic"  size="small" variant="outlined" placeholder="Edad" />
    </Grid>
    </Grid>

    <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
              fullWidth
              name="resumen_clinico"
              id="outlined-multiline-static"
              label="Resumen clinico"
              multiline
              rows="4"
              cols="8"
              variant="outlined"
              required

            />
            </Grid>
        </Grid>

        <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
              fullWidth
              name="examen_solicitado"
              id="outlined-multiline-static"
              label="Examen solicitado"
              multiline
              rows="4"
              cols="8"
              variant="outlined"
              required
            />
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


