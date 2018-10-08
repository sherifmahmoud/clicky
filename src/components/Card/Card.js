import React from 'react';
import './Card.css';

const Card = props => {
    return (
        <div className="card" >
            <img src={props.src} alt='' id={props.id} onClick={props.CardClicked}></img>
        </div>
    );
}

export default Card;