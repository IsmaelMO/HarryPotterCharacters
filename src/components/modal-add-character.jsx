import { Modal } from 'react-bootstrap'
import axios from 'axios';
var React = require('react');

const strApiCharacter = "http://localhost:5000/characters";

class ModalAddCharacter extends React.Component{

    constructor(props){
        super(props)
    }

    handleModal(){
        var self = this;
        self.props.showModalAddCharacter(false)
    }

    postData(){

        
        /*test post */
        var requestBody = {
            "name":"Harry PotterXD",
            "species":"human",
            "gender":"malessss",
            "house":"Gryffindor xd",
            "dateOfBirth":"31-07-1980",
            "yearOfBirth":1980,
            "ancestry":"half-blood",
            "eyeColour":"green",
            "hairColour":"black",
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
            body: requestBody,
            headers: {
                'Content-Type': 'application/json',
                'Accept' : "*/*"
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

    renderModalPopUp() {
        
        return (
          <div className='mymodal-container'>
            <Modal show={this.props.showModal} onHide={()=>this.handleModal()} dialogClassName={"my-modal"}>
              <Modal.Header closeButton>
                <Modal.Title>Agrega un personaje</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <div className='modal-containter'>
                        <form action="" >
                            <div className='row'>
                                <div className='col-6 mb-3'>
                                    <label className='lbl-form text-uppercase'>Nombre</label>
                                    <input className='input-modal' type="text" />
                                </div>
                                <div className='col-6 mb-3'>
                                    <label className='lbl-form text-uppercase'>Cumpleaños</label>
                                    <input className='input-modal' type="text" />
                                </div>
                                <div className='col-6 mb-3'>
                                    <label className='lbl-form text-uppercase'>Color de ojos</label>
                                    <input className='input-modal' type="text" />
                                </div>
                                <div className='col-6 mb-3'>
                                    <label className='lbl-form text-uppercase'>Color de pelo</label>
                                    <input className='input-modal' type="text" />
                                </div>
                                <div className='col-6 mb-3'>
                                    <label className='lbl-form text-uppercase'>Género</label>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                            <label className="form-check-label" >Mujer</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                                            <label className="form-check-label" >Hombre</label>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div className='col-6 mb-3'>
                                    <label className='lbl-form text-uppercase'>Posición</label>
                                    <div className='d-flex flex-row justify-content-between'>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="position" id="flexRadioDefault1" />
                                            <label className="form-check-label" >Estudiante</label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="position" id="flexRadioDefault2" />
                                            <label className="form-check-label" >Staff</label>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-6 mb-3'>
                                    <label className='lbl-form text-uppercase'>Fotografía </label>
                                    <input className='' type="file" accept=".png, .jpg, .jpeg" />
                                </div>

                            </div>

                        </form>
                    </div>
              </Modal.Body>
              <Modal.Footer className={"justify-content-center"}>
                
                <button variant="primary" className={"text-uppercase save-character"} onClick={(e) => this.postData()}>
                  Guardar
                </button>
              </Modal.Footer>
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