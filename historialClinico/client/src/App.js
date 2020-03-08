import React, { Component } from 'react';
import { NavPane, NavPaneItem, View } from 'react-desktop/windows';
import RenderPacientes from './componentes/list';
import Modificar from './componentes/modificar';
import Registro from './componentes/registro';
import axios from 'axios';
import Historial from './componentes/historico';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Signos from './componentes/signos';
import Radio from './componentes/radiodiagnostico';
import Laboratorio from './componentes/laboratorio';
import Anestesia from './componentes/anestesia';


const host = "http://localhost:3000";


export default class App extends Component {
  static defaultProps = {
    color: '#3382BE',
    theme: 'light'
  };

  constructor() {
    super();
    this.state = {
      otro: '',
      selected: 'LISTA',
      tabIndex: 0,
      pacientes: [],
      historicos: [],
      paciente: '',
      mensaje: '',
      open: false,
      id: '',
      width: 0,
       height: 0 


    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  

  componentDidMount=()=>{

    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);

    fetch(`${host}/paciente`, {     
    method: "get",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }     
  })
  .then((response) => response.json())
  .then((res) => {
      this.setState({ pacientes: res });
  })
  .catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  });
// --------------------***********----------------------------
  fetch(`${host}/historico`, {     
    method: "get",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    }     
  })
  .then((response) => response.json())
  .then((res) => {
      this.setState({ historicos: res });
  })
  .catch(function(error) {
    console.log('Hubo un problema con la petición Fetch:' + error.message);
  });
}

  buscarPaciente =(id)=>{
    axios.get(`${host}/pacienteunique/${id}`)
    .then( res=> {
    this.setState({paciente:res.data});     
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  borrarPacientes =(id)=>{
    axios.delete(`${host}/paciente`, {
      "data":{id}
    })
      .then( res=> {
        console.log(res)
      })
      .catch(function (error) {
        console.log(error);
      });
      this.handleClose();
      // window.location.href = window.location.href;
      window.location.replace('');
  }

  confirmarBorrar =(id)=>{
    console.log(id);
    this.setState({open:true, id:id});
  }

   handleClickOpen = () => {
    this.setState({open:true});
  };

   handleClose = () => {
    this.setState({open:false});
  };
  

  click=(id)=>{
    this.setState({ selected: "MODIFICAR" });
    this.buscarPaciente(id);
    // this.renderItem("Modificar",<Modif paciente={this.state.paciente}></Modif>)
  }

  save=()=>{
    this.setState({mensaje: "paciente guardado correctamente"})
  }


  render() {
    if (this.state.open) {
      return (
        <Dialog
        open={this.state.open}
        onClose={this.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <DialogTitle style={{color:"red"}} id="alert-dialog-title">{"Desea eliminara al usuario seleccionado!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" style={{color:"black"}} >
           Se eliminara al usuario de la base de datos pero dejara un registro de esta accion permanente en la base de datos
           desea continuar?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={this.handleClose} style={{color:"black", fontWeight:"bold"}}>
            NO!, VOLVER ATRAS
          </Button>
          <Button onClick={()=>this.borrarPacientes(this.state.id)} color="secondary" autoFocus>
            DE ACUERDO
          </Button>
        </DialogActions>
      </Dialog>
    )
    } else {
      return (
        <View>
          <div style={{position: "absolute" ,backgroundColor:"#3382BE", height:48, width:this.state.width, zIndex:1}}></div>
        <NavPane openLength={200} push>
         
          {this.renderItem('LISTA',<RenderPacientes pacientes={this.state.pacientes} onClick={this.click} borrar={this.confirmarBorrar} ></RenderPacientes>)}
          {this.renderItem('REGISTRO',  <Registro></Registro>)}
          {this.renderItem('MODIFICAR', <Modificar paciente={this.state.paciente}></Modificar>)}
          {this.renderItem('HISTORICO', <Historial historia={this.state.historicos}></Historial>)}
          {this.renderItem('SIGNOS PACIENTE', <Signos></Signos>)}
          {this.renderItem('RADIODIAGNOSTICO', <Radio ></Radio>)}
          {this.renderItem('LABORATORIO', <Laboratorio ></Laboratorio>)}
          {this.renderItem('ANESTESIA', <Anestesia ></Anestesia>)}
        </NavPane>
        </View>
      );
    }  
  }

  renderItem(title, content, otro) {
    return (
      <NavPaneItem
        title={title}
        selected={this.state.selected === title}
        onSelect={() => this.setState({ selected: title })}
        padding="10px 20px"
        push
      >
        <div >{content}</div>
      </NavPaneItem>
    );
  }
}

