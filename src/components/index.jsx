import Header from './header';
import Cards from './cards';
import ModalAddCharacter from './modal-add-character';
import axios from 'axios';
var React = require('react');

const strApiCharacter = "http://localhost:5000/characters";
const strApiStudents = "http://localhost:5001/students";
const strApiStaff = "http://localhost:5002/staff";



class Index extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            showModal: false,
            dataCards: [],
            dataCharacters: [],
            dataStudents: [],
            dataStaff: []
        }

        this.showModalAddCharacter = this.showModalAddCharacter.bind(this)
    }

    componentDidMount(){
        var self = this;
        self.setState({
            showModal: false
        });

        this.getData(strApiCharacter,"characters");
      
        this.renderCards();
    }

    getData(strApiurl, strFilterData){
        let APIurl = strApiurl;
        let headers = {
                 'Content-Type': 'application/json',
                 'Accept' : "*/*"
                };
 
        axios.get(APIurl, headers)
         .then(response => {
            var self = this;
            self.setState({
                dataCards: response.data
            });
            
         })
         .catch(error => console.error(error));
         
    }

    showModalAddCharacter(ev){
        var self = this;
        self.setState({
            showModal: ev
        });
    }

    setDataStudents(){
        this.getData(strApiStudents,"students");
    }

    setDataStaff(){
        this.getData(strApiStaff,"staff");
    }

    renderCards(){
        if(this.state.dataCards.length){
            return <Cards dataCards={this.state.dataCards}></Cards>
        }
    }

    render(){
        var self = this;
        return(
            
            <div id='main-container' style={{width: '100%', heigh: '500px'}}>
                <Header showModalAddCharacter={this.showModalAddCharacter}></Header>
                <div id='sub-container'>
                    <div className='mb-5' id='title-container'>
                        <label className='text-white h1 font-HarryPoter'>Harry Potter</label>
                        <label className='text-white h1'>Selecciona tu filtro</label>
                    </div>
                    <div className='mb-5' id='filter-container'>
                        <button className='btn-filter' onClick={(e) => this.setDataStudents()}>ESTUDIANTES</button>
                        <button className='btn-filter' onClick={(e) => this.setDataStaff()}>STAFF</button>
                    </div>
                    <div id='cards-containerr'>
                        {self.renderCards()}
                    </div>
                    <ModalAddCharacter showModal={self.state.showModal} showModalAddCharacter={this.showModalAddCharacter}></ModalAddCharacter>
                </div>
                
            </div>
            
        );
    }
}

export default  Index;