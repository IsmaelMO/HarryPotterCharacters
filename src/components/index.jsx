import Header from './header';
import CardData from './card-data';
import ModalAddCharacter from './modal-add-character';
import axios from 'axios';
var React = require('react');
var aux = false;

class Index extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            showModal: false,
            dataCharacters: []
        }

        this.showModalAddCharacter = this.showModalAddCharacter.bind(this)
    }

    componentDidMount(){
        var self = this;
        self.setState({
            showModal: false
        });

        this.getData();
    }

     getData(){
        var self = this;
        let APIurl = "http://localhost:5000/characters";
        
         let headers = {
                 'Content-Type': 'application/json',
                 'Accept' : "*/*"
             };
 
         var result = {};
 
          axios.get(APIurl, headers)
         .then(response => {
             console.log(response)
             var self = this;
             console.log(self)
            self.setState({
                dataCharacters: response.data
            });
         })
         .catch(error => console.error(error));
         
     }

    showModalAddCharacter(ev){
        console.log("Show modal")
        var self = this;
        self.setState({
            showModal: ev
        });
    }
    renderCardsCharacter(){
        if(this.state.dataCharacters.length){
            return this.state.dataCharacters.map(function (item) {
                { console.log(item)}
                return <CardData dataCard={item}></CardData>
             })
        }
    }
    

    render(){
        var self = this;
        console.log("valor state")
        console.log(self.state.dataCharacters)
        return(
            
            <div id='main-container' style={{width: '100%', heigh: '500px'}}>
                <Header showModalAddCharacter={this.showModalAddCharacter}></Header>
                <div className='mb-5' id='title-container'>
                    <label className='text-white h1 font-HarryPoter'>Harry Potter</label>
                    <label className='text-white h1'>Selecciona tu filtro</label>
                </div>
                <div className='mb-5' id='filter-container'>
                    <button className='btn-filter' onClick={(e) => this.renderStudents()}>ESTUDIANTES</button>
                    <button className='btn-filter' onClick={(e) => this.renderStaff()}>STAFF</button>
                </div>
                <div id='cards-container'>
                    {self.renderCardsCharacter()}
                </div>
                <ModalAddCharacter showModal={self.state.showModal} showModalAddCharacter={this.showModalAddCharacter}></ModalAddCharacter>
            </div>
            
        );
    }
}

export default  Index;