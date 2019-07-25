import React, {Component} from 'react';
import Card from './Card';
import symbols from "../sets/symbols";
import shuffle from '../functions/schuffle';

let randomCards = shuffle(symbols)

function randomId () {
    let id = Math.floor(new Date().getTime()*Math.random())
    return id;
}
randomId();

function createCard(symbol, index) {
    return <Card key={index+symbol.symbol} 
            symbol={symbol.symbol}
            symbolId={symbol.id}
            index={index}/>;
}

var cards = randomCards.map( (symbol, index) => {
    return createCard(symbol, index);
});

class Board extends Component {
    render(){ 
        return (
            <div id="board">
                {cards}
            </div>)
    }
}

export default Board;    

 // {randomCards.map((symbol, index)=>{ return (
                //     <Card key={index+symbol.symbol} 
                //         symbol={symbol.symbol}
                //         symbolId={symbol.id}
                //         index={index}
                //         />)
                //         })}