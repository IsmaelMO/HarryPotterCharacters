import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'; 
var React = require('react');

class CardData extends React.Component{
    render(){
        return(
            <div className='card-data-container mb-5'>
                <div className='img-profile-container hogwarts-house-gryffindor'>
                    <div className='img-profile'></div>
                </div>
                <div className='data-character-container pl-2'> 
                    <div className='data-top'>
                        <label className='text-uppercase'>Vivo / Estudiante</label>
                        <button className='border-0 bg-transparent '><FontAwesomeIcon icon={faBookmark}/></button>
                    </div>
                    <div className='data-bottom mb-2 pl-2'>
                        <label className='name-character h3'>Harry Potter</label>
                        <div>
                            <label className='h6'>Cumpleaños: </label>&nbsp;
                            <label>31-07-1980</label>
                        </div>
                        <div>
                            <label className='h6'>Género: </label>&nbsp;
                            <label>31-07-1980</label>
                        </div>
                        <div>
                            <label className='h6'>Color de ojos: </label>
                            <label>31-07-1980</label>
                        </div>
                        <div>
                            <label className='h6'>Color de pelo: </label>
                            <label>31-07-1980</label>
                        </div>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default  CardData;