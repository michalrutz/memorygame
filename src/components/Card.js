import React, {Component} from 'react';
import flipACard from '../functions/flipACard';

let pair = []; 

class Card extends Component {
    checkMatch(e){
        let symbol = e.target.id;
        flipACard(symbol)
        //DISABLE THE CARD
        pair.push(symbol);
        console.log(pair);
        if(pair.length === 2){
            if (pair[0].split("&")[1] === pair[1].split("&")[1]){
                console.log("a match!");
                // ADD DISABLE CARDS
                pair = []
            }}
        else if(pair.length === 3){
                    flipACard(pair[1])
                    flipACard(pair[0])
                    pair = []
                    pair.push(symbol)
            }      
    }
    render(props){
        return (
            <div className="flip-card">
                <div className="flip-inner" id={"inner"+this.props.index+"&"+this.props.symbolId}>
                    <div className="card front" id={this.props.index+"&"+this.props.symbolId} onClick={this.checkMatch}>
                        <p>{this.props.symbol}</p></div>
                    <div className="card back"  id={this.props.index+"&"+this.props.symbolId} onClick={this.checkMatch}>
                        <p>❔</p>
                    </div> 
                </div>
            </div>
    )
    }
}

export default Card;