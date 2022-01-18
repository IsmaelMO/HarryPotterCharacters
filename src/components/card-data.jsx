import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'; 

var React = require('react');


class CardData extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount(){
        console.log("data us")
        console.log(this.props.dataCard)
    }
    

    render(){
        var self = this;
        console.log(self.props.dataCard)
        var hogwartshouse = "hogwarts-house-gryffindor";
        if(self.props.dataCard != undefined){
            if(this.props.dataCard.house == "Slytherin"){
                hogwartshouse = "hogwarts-house-slytherin";
            }else if(this.props.dataCard.house == "Ravenclaw"){
                hogwartshouse = "hogwarts-house-ravenclaw";
            }else if(this.props.dataCard.house == "Hufflepuff"){
                hogwartshouse = "hogwarts-house-hufflepuff";
            }
        }else{ return <div></div>}
        return(
            <div className='card-data-container mb-5'>
                <div className={'img-profile-container ' + hogwartshouse}>
                    
                    <div className='img-profile'>
                        <img className='img-character' src={this.props.dataCard.image} alt="" />
                    </div>
                    
                </div>
                <div className='data-character-container pl-2'> 
                    <div className='data-top'>
                        <label className='text-uppercase'>{this.props.dataCard.alive ? "Vivo": "Finado"} / {this.props.dataCard.hogwartsStudent ? "Estudiante": "Staff"}</label>
                        <button className='border-0 bg-transparent '><FontAwesomeIcon icon={faBookmark}/></button>
                    </div>
                    <div className='data-bottom mb-2 pl-2'>
                        <label className='name-character h3'>{this.props.dataCard.name}</label>
                        <div>
                            <label className='h6'>Cumpleaños: </label>&nbsp;
                            <label>{this.props.dataCard.dateOfBirth}</label>
                        </div>
                        <div>
                            <label className='h6'>Género: </label>&nbsp;
                            <label className='text-capitalize'>{this.props.dataCard.gender}</label>
                        </div>
                        <div>
                            <label className='h6'>Color de ojos: </label>&nbsp;
                            <label className='text-capitalize'>{this.props.dataCard.eyeColour}</label>
                        </div>
                        <div>
                            <label className='h6'>Color de pelo: </label>&nbsp;
                            <label className='text-capitalize'>{this.props.dataCard.hairColour}</label>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default  CardData;