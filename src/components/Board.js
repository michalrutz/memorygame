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
  
class Board extends Component {
    render(){ 
        return (
            <div>
                {randomCards.map((symbol, index)=>(
                        <Card key={index+symbol.symbol} 
                            symbol={symbol.symbol}
                            symbolId={symbol.id}
                            index={index}
                            />))}
            </div>)
    }
}

export default Board;