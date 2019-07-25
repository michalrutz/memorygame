import React  from 'react';
import flipACard from '../functions/flipACard';
import { disableACard, activateACard } from '../functions/disableACard';
import { connect } from 'react-redux';
import { increment } from '../redux/actions/actions';

let pair = [];

const Card = (props)=>{
      function checkMatch(e){
        let symbol = e.target.id;
        flipACard(symbol)
        disableACard(symbol);
        pair.push(symbol);
        console.log(pair);
        if(pair.length === 2){
            if (pair[0].split("&")[1] === pair[1].split("&")[1]){
                console.log("a match!");
                pair = []
                props.dispatch(increment());
                console.log(props.count.count)
            }}
        else if(pair.length === 3){
                    flipACard(pair[0])
                    flipACard(pair[1])
                    activateACard(pair[0])
                    activateACard(pair[1])
                    pair = []
                    pair.push(symbol)
            }      
    }
        return (
            // <div className ="box-card">                
            <div className="flip-card">
                <div className="flip-inner" id={"inner"+props.index+"&"+props.symbolId}>
                    <div className="card front" id={props.index+"&"+props.symbolId} onClick={checkMatch}>
                        <p>{props.symbol}</p></div>
                    <div className="card back"  id={props.index+"&"+props.symbolId} onClick={checkMatch}>
                        <p>❔</p></div> 
                </div>
                </div>
            // </div>

    )
}

const mapStateToProps = (state) => ({
    count:state.countReducer
})

export default connect(mapStateToProps)(Card);