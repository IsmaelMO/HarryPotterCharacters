
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBookmark, faUserPlus } from '@fortawesome/free-solid-svg-icons'; 
var React = require('react');

class Header extends React.Component{
    constructor(props) {
        super(props);
    }

    showModalAddCharacter(){
        var self = this;
        self.props.showModalAddCharacter(true)
    }

    render(){
        return(
            <div className='nav-bar nav-bar-actions '>
                <button className='btn-header btn-left'>Favoritos xd &nbsp;
                    <FontAwesomeIcon icon={faBookmark}/>
                </button>
                <button className='btn-header btn-right' onClick={(e) => this.showModalAddCharacter()}>Agregar &nbsp;
                    <FontAwesomeIcon icon={faUserPlus}/>
                </button>
                
            </div>
        );
    }
}

export default  Header;