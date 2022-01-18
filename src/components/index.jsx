import Header from './header';
import CardData from './card-data';
import ModalAddCharacter from './modal-add-character';
var React = require('react');


class Index extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            showModal: false
        }

        this.showModalAddCharacter = this.showModalAddCharacter.bind(this)
    }

    componentDidMount(){
        var self = this;
        self.setState({
            showModal: false
        });
    }

    showModalAddCharacter(ev){
        console.log("Show modal")
        var self = this;
        self.setState({
            showModal: ev
        });
    }

    render(){
        var self = this;
        return(
            <div id='main-container' style={{width: '100%', heigh: '500px'}}>
                <Header showModalAddCharacter={this.showModalAddCharacter}></Header>
                <div className='mb-5' id='title-container'>
                    <label className='text-white h1 font-HarryPoter'>Harry Potter</label>
                    <label className='text-white h1'>Selecciona tu filtro</label>
                </div>
                <div className='mb-5' id='filter-container'>
                    <button className='btn-filter'>ESTUDIANTES</button>
                    <button className='btn-filter'>STAFF</button>
                </div>
                <div id='cards-container'>
                    
                    <CardData></CardData>
                    <CardData></CardData>
                    <CardData></CardData>
                    <CardData></CardData>
                </div>
                <ModalAddCharacter showModal={self.state.showModal} showModalAddCharacter={this.showModalAddCharacter}></ModalAddCharacter>
            </div>
            
        );
    }
}

export default  Index;