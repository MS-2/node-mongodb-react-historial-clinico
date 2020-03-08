import React, {Component} from 'react';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Add from '@material-ui/icons/Add';
import { Checkbox } from 'react-desktop/macOs';
const host = "http://localhost:3000";


export default class Laboratorio extends Component {

constructor(props) {
   
    super(props);
    this.state = { 
      nombre: '',
      nombre_medico: '',
      habitacion:'',
      codigo: '',
      hora:'',
      examenes:[],

      fecha_creacion:'',
      pasador: true,
      date:'',
      mensaje: '',
      error:false
      };
    }


myChangeHandler = (event) => {
  if (event.target.name === "examenes") {
    let val = event.target.value;
    this.setState(prevState => ({
      examenes: [...prevState.examenes, val]
    }))
  }
    let name = event.target.name;
    let val = event.target.value;
    this.setState({[name]: val});  
    }

mySubmitHandler = (event) => {
      axios.post(`${host}/lab`, {
        "nombre": this.state.nombre,
        "nombre_medico":this.state.nombre_medico,
        "habitacion":this.state.habitacion,
        "codigo": this.state.codigo,
        "fecha_creacion":this.state.hora,
        "enfermedades":this.state.examenes
        })
        .then( (response)=> {
          alert(response)
        })
        .catch( (error)=> {
          alert(error)
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
  <Grid item xs={2}>
  <TextField  onChange={this.myChangeHandler} value={this.state.fecha_creacion}size="small" name="fecha_creacion"  label="Fecha de hoy" variant="outlined" InputLabelProps={{shrink: true,}} ></TextField>
  </Grid>
  <Grid container spacing={2}>
  <Grid item xs={6}>
  <TextField  onChange={this.myChangeHandler} fullWidth size="small" variant="outlined" name="nombre" placeholder="Nombre" >Nombre</TextField>
  </Grid>
  <Grid item xs={2}>
  <TextField  onChange={this.myChangeHandler} size="small" variant="outlined" name="habitacion" placeholder="Historia N°" >Habitacion</TextField>
  </Grid>
  </Grid>
  <Grid container spacing={2}>
  <Grid item xs={6}>
  <TextField fullWidth onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="nombre_medico" id="outlined-basic"  size="small" variant="outlined" placeholder="Medico" />
  </Grid>
  <Grid item xs={2}>
  <TextField  onChange={this.myChangeHandler} required inputProps={{ maxLength: 45, minLength:3 }} name="codigo" id="outlined-basic"  size="small" variant="outlined" placeholder="N°" />
  </Grid>
  </Grid>

  <Divider style={{margin:10}}  />
{/* *************************************************************************************** */}
  <Grid container style={{backgroundColor:"#", justifyContent:"space-around",marginRight:-200, marginTop:20}}>
{/* *************************************************************************************** */}


  <Grid container style={{backgroundColor:"#"}} item xs={2} spacing={2}>
  <Grid>
  <Typography style={{color:"#3382BE"}}>QUMICA SANGUINEA</Typography>
  <Checkbox
  label="GLICEMIA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="GLICEMIA"

  />
  <Checkbox
  label="GLUCOSA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="GLUCOSA"
  />
  <Checkbox
  label="UREA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="UREA"

  />
  <Checkbox
  label="CREATINA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="CREATINA"

  />
  <Checkbox
  label="COLESTEROL"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="COLESTEROL"

  />

  <Checkbox
  label="TRIGLICERIDOS"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="TRIGLICERIDOS"

  />
  <Checkbox
  label="LIPIDOS TOTALES"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="RETICULOCITOS"

  />
  <Checkbox
  label="BILIRRUBINA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="RETICULOCITOS"

  />
  <Checkbox
  label="ACIDO URICO"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="RETICULOCITOS"

  />
  <Checkbox
  label="CALCIO"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="CALCIO"

  />
  <Checkbox
  label="FOSFORO"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="FOSFORO"

  />
  <Checkbox
  label="AMILASA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="AMILASA"

  />
  <Checkbox
  label="LIPASA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="LIPASA"

  />
  <Checkbox
  label="DLACTICA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="DLACTICA"

  />
  <Checkbox
  label="TRANSAMINASAS"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="TRANSAMINASAS"

  />
  <Checkbox
  label="FOSFATASAS"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="FOSFATASAS"

  />
  <Checkbox
  label="PROTEINAS"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="PROTEINAS"

  />
  <Checkbox
  label="SODIO"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="SODIO"

  />
  <Checkbox
  label="POTASIO"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="POTASIO"

  />
  <Checkbox
  label="CLORUROS"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="CLORUROS"

  />
  <Checkbox
  label="MAGNESIO"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="MAGNESIO"

  />
  </Grid>
  </Grid>

  <Grid container style={{backgroundColor:"#"}} item xs={2} spacing={2}>
  <Grid>
  <Typography style={{color:"#3382BE"}}>HEMATOLOGIA</Typography>
  <Checkbox
  label="HEMATOLOGIA CP"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="HEMATOLOGIA COMPLETA"

  />
  <Checkbox
  label="HB HEMATOCRITO"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="HB HEMATOCRITO"

  />
  <Checkbox
  label="C BLANCA Y FORMULA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="C BLANCA Y FORMULA"

  />
  <Checkbox
  label="RETICULOCITOS"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="RETICULOCITOS"

  />
  <Checkbox
  label="TEST DE DREPANOCITOS"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="RETICULOCITOS"

  />
  <Checkbox
  label="GRUPO Y RH"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="RETICULOCITOS"

  />
  <Checkbox
  label="COOMBS DIRECTO"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="RETICULOCITOS"

  />
  <Checkbox
  label="COOMBS INDIRECTO"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="RETICULOCITOS"

  />
  <Checkbox
  label="GOTA GRUESA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="RETICULOCITOS"

  />
  <Checkbox
  label="EOSI EN SANGRE"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="EOSINOFILOS EN SANGRE"

  />
  <Checkbox
  label="HIERRO SERICO"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="RETICULOCITOS"

  />
  <Checkbox
  label="CELULAS LE"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="RETICULOCITOS"

  />
  </Grid>
  <Grid>

  <Typography style={{color:"#3382BE"}}>HORMONAS</Typography>
  <Checkbox
  label="PROGESTERONA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="PROGESTERONA"

  />
  <Checkbox
  label="TSH"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="TSH"

  />
  <Checkbox
  label="T4 LIBRE"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="T4 LIBRE"

  />
  <Checkbox
  label="LH"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="LH"

  />
  <Checkbox
  label="ESTRADIOL"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="ESTRADIOL"

  />
  <Checkbox
  label="PROLACTINA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="PROLACTINA"

  />
  <Checkbox
  label="CORTISOL"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="CORTISOL"

  />
  <Checkbox
  label="TESTOSTERONA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="TESTOSTERONA"

  />
  <Checkbox
  label="ANTIGENO AUSTRALIA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="TOXOPLASMA TEST"

  />
  <Checkbox
  label="ANTICORE"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="TOXOPLASMA TEST"

  />

  <Checkbox
  label="DENGUE"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="TOXOPLASMA TEST"

  />

  </Grid>
  </Grid>

  <Grid container style={{backgroundColor:"#"}} item xs={2} spacing={2}>
  <Grid>
  <Typography style={{color:"#3382BE"}}>COAGULACION</Typography>
  <Checkbox
  label="CONTAJE DE PLAQUETAS"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="HEMATOLOGIA COMPLETA"

  />
  <Checkbox
  label="T SANGRIA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="HB HEMATOCRITO"

  />
  <Checkbox
  label="T COAGULACION"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="C BLANCA Y FORMULA"

  />
  <Checkbox
  label="P.T"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="RETICULOCITOS"

  />
  <Checkbox
  label="P.T.T"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="RETICULOCITOS"

  />
  <Checkbox
  label="FIBRINOGENO"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="RETICULOCITOS"

  />

  </Grid>

  <Grid>

  <Typography style={{color:"#3382BE"}}>HECES</Typography>
  <Checkbox
  label="PROGESTERONA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="PROGESTERONA"

  />
  <Checkbox
  label="HECES DIRECTA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="HECES DIRECTA"

  />
  <Checkbox
  label="SANGRE EN HECES"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="SANGRE EN HECES"

  />
  <Checkbox
  label="AZUCARES"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="AZUCARES"

  />
  <Checkbox
  label="CONCENTRACION"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="CONCENTRACION"

  />

  </Grid>
  
  </Grid>

  <Grid container style={{backgroundColor:"#"}} item xs={2} spacing={2}>
  <Grid>
  <Typography style={{color:"#3382BE"}}>INMUNOLOGIA Y SEROLOGIA</Typography>
  <Checkbox
  label="VDRL"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="VDRL"
  />
  <Checkbox
  label="RA TEST"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="RA TEST"
  />
  <Checkbox
  label="MONO TEST"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="MONO TEST"
  />
  <Checkbox
  label="WIDAL"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="WIDAL"
  />
  <Checkbox
  label="ASTO"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="ASTO"
  />
  <Checkbox
  label="TOXOPLASMA TEST"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="TOXOPLASMA TEST"
  />
  <Checkbox
  label="HIV"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="TOXOPLASMA TEST"
  />
  <Checkbox
  label="CHAGA TEST"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="TOXOPLASMA TEST"
  />
  <Checkbox
  label="ANTIGENO AUSTRALIA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="TOXOPLASMA TEST"
  />
  <Checkbox
  label="ANTICORE"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="TOXOPLASMA TEST"
  />

  <Checkbox
  label="DENGUE"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="TOXOPLASMA TEST"
  />



  </Grid>

  <Grid>

  <Typography style={{color:"#3382BE"}}>ORINAS</Typography>
  <Checkbox
  label="ORINA COMPLETA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="orina completa"

  />
  <Checkbox
  label="PROTEINURIAS"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="proteinurias"

  />
  <Checkbox
  label="DEP DE CREATINA"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="depuracion de creatina"

  />
  <Checkbox
  label="TEST EMBARAZO"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="prueba de embarazo"

  />
  <Checkbox
  label="ACIDO URICO"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="acido urico"

  />
  <Checkbox
  label="CITRATO"
  onChange={(e) => console.log(e.target.value)}
  defaultValue="CITRATO"

  />

  </Grid>

  </Grid>




{/* *************************************************************************************** */}
  </Grid>
{/* *************************************************************************************** */}


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


