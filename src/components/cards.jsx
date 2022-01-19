import CardData from './card-data';
var React = require('react');

class Cards extends React.Component{

    constructor(props){
        super(props)
    }



    renderCardsCharacter(){
        if(this.props.dataCards.length){
            return this.props.dataCards.map(function (item) {
                return <CardData dataCard={item}></CardData>
             })
        }
    }

    render(){
        var self = this;
        return(
            
            <div id='cards-container'>
                    {self.renderCardsCharacter()}
            </div>
            
        );
    }
}

export default  Cards;