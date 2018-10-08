import React from 'react';

const Header = props => {
    return (
        <header>
            <h1>Score: {props.score}</h1>
            <h1>Top Score:{props.topScore}</h1>
        </header>
    );
}

export default Header;