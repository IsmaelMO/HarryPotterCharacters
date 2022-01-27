import { Modal } from 'react-bootstrap'
import axios from 'axios';
var React = require('react');

const strApiCharacter = "http://localhost:5000/characters";

class ModalAddCharacter extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            firstname: '',
            birthday: '',
            eyecolor: '',
            haircolor: '',
            house: '',
            alive: 'true',
            gender: '',
            position:'',
            pic:''
            
        }
        this.validateFormModal = this.validateFormModal.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleModal(){
        var self = this;
        self.props.showModalAddCharacter(false)
    }

    postData(){

        
        /*test post */
        var requestBody = {
            "name":"Harry PotterXD",
            "species":"humanxd",
            "gender":"malessss",
            "house":"Gryffindor xd",
            "dateOfBirth":"31-07-1980",
            "yearOfBirth":1980,
            "ancestry":"half-bloodxd",
            "eyeColour":"greenxd",
            "hairColour":"blackxd",
            "wand":{
                "wood":"holly",
                "core":"phoenix feather",
                "length":11
            },
            "patronus":"stag",
            "hogwartsStudent":true,
            "hogwartsStaff":false,
            "actor":"Daniel Radcliffe",
            "alive":true,
            "image":"http://hp-api.herokuapp.com/images/harry.jpg"
        };

        let config = {
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        };

        var options = {
            body: requestBody,
            headers: {"content-type": "application/json"}
        }
        

       
         axios.post(strApiCharacter,requestBody)
            .then(response => {
                console.log(response)
            })
            .catch(error => console.error(error));
    }
    submitDataForm(){
        this.validateFormModal()
    }

    validateFormModal(evt){
        var self = this;

        evt.preventDefault();

        console.log(self.state)
       
        var requestBody = {
            "name": self.state.firstname,
            "species":"human",
            "gender": self.state.gender,
            "house":"Gryffindor",
            "dateOfBirth": self.state.birthday,
            "yearOfBirth":1980,
            "ancestry":"half-blood",
            "eyeColour":self.state.eyecolor,
            "hairColour":self.state.haircolor,
            "hogwartsStudent": self.state.position == "student" ? true : false,
            "hogwartsStaff": self.state.position == "staff" ? true : false,
            "actor":"Desconocido",
            "alive":true,
            "image":self.state.pic
        };
        
    }

    handleChange(evt){
        console.log(evt)
        const {name, value} = evt.target
        this.setState({[name]: value})
    }

    renderModalPopUp() {
        
        return (
          <div className='mymodal-container'>
            <Modal show={this.props.showModal} onHide={()=>this.handleModal()} dialogClassName={"my-modal"}>
              <Modal.Header closeButton>
                <Modal.Title>Agrega un personaje</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div className='modal-containter'>
                        <form name='formDataHP' onSubmit={this.validateFormModal} >
                            <div className='row'>
                                <div className='col-6 mb-3'>
                                    <label className='lbl-form text-uppercase'>Nombre</label>
                                    <input className='input-modal' type="text" name="firstname" onChange={this.handleChange} required/>
                                </div>
                                <div className='col-6 mb-3'>
                                    <label className='lbl-form text-uppercase'>Cumpleaños</label>
                                    <input className='input-modal' type="date" name="birthday" onChange={this.handleChange} required/>
                                </div>
                                <div className='col-6 mb-3'>
                                    <label className='lbl-form text-uppercase'>Color de ojos</label>
                                    <input className='input-modal' type="text" name="eyecolor" onChange={this.handleChange} required/>
                                </div>
                                <div className='col-6 mb-3'>
                                    <label className='lbl-form text-uppercase'>Color de pelo</label>
                                    <input className='input-modal' type="text" name="haircolor" onChange={this.handleChange} required/>
                                </div>
                                <div className='col-6 mb-3'>
                                    <label className='lbl-form text-uppercase'>Casa</label>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="house"  value="Gryffindor" onChange={this.handleChange} required/>
                                            <label className="form-check-label" >Gryffindor</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="house"  value="Slytherin" onChange={this.handleChange} required/>
                                            <label className="form-check-label" >Slytherin</label>
                                        </div>
                                    </div>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="house"  value="Ravenclaw" onChange={this.handleChange} required/>
                                            <label className="form-check-label" >Ravenclaw</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="house"  value="Hufflepuff" onChange={this.handleChange} required/>
                                            <label className="form-check-label" >Hufflepuff</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6 mb-3'>
                                    <label className='lbl-form text-uppercase'>Vivo</label>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="alive"  value="true" onChange={this.handleChange} required/>
                                            <label className="form-check-label" >Si</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="alive"  value="false" onChange={this.handleChange} required/>
                                            <label className="form-check-label" >No</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6 mb-3'>
                                    <label className='lbl-form text-uppercase'>Género</label>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gender"  value="female" onChange={this.handleChange} required/>
                                            <label className="form-check-label" >Mujer</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gender"  value="male" onChange={this.handleChange} required/>
                                            <label className="form-check-label" >Hombre</label>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='col-6 mb-3'>
                                    <label className='lbl-form text-uppercase'>Posición</label>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="position"  value="student" onChange={this.handleChange} required/>
                                            <label className="form-check-label" >Estudiante</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="position"  value="staff" onChange={this.handleChange} required/>
                                            <label className="form-check-label" >Staff</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6 mb-3'>
                                    <label className='lbl-form text-uppercase'>Fotografía </label>
                                    <input className='' type="file" accept=".png, .jpg, .jpeg" name='pic' onChange={this.handleChange} required/>
                                </div>

                            </div>
                            <div className={"d-flex justify-content-center"}>
                                <button type="submit" className={"text-uppercase save-character"} >Guardar </button>
                            </div>
                            
                        </form>
                    </div>
              </Modal.Body>
              
            </Modal>
          </div>
        );
      }
    
    render(){
        return(
            <div id='modal-add-character'>
                {this.renderModalPopUp()}
            </div>
        );
    }
}

export default  ModalAddCharacter;