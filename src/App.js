import React, { Component } from 'react';
import MyHeader from './components/Header';
import Card from './components/Card';
import './App.css';
import Header from './components/Header';


class App extends Component {
  // Setting the component's initial state
  state = {
    score: 0,
    topScore: 0,
    message: "Click an image to begin!",
    cards: [
      { id: 1, file: './assets/images/1.jpg', clicked: false },
      { id: 2, file: './assets/images/2.jpg', clicked: false },
      { id: 3, file: './assets/images/3.jpg', clicked: false },
      { id: 4, file: './assets/images/4.jpg', clicked: false },
      { id: 5, file: './assets/images/5.jpg', clicked: false },
      { id: 6, file: './assets/images/6.jpg', clicked: false },
      { id: 7, file: './assets/images/7.jpg', clicked: false },
      { id: 8, file: './assets/images/8.jpg', clicked: false },
      { id: 9, file: './assets/images/9.jpg', clicked: false },
      { id: 10, file: './assets/images/10.jpg', clicked: false },
      { id: 11, file: './assets/images/11.jpg', clicked: false },
      { id: 12, file: './assets/images/12.jpg', clicked: false }
    ]
  };

  handleCardClick = (event) => {
    let state = this.state;
    let id = parseInt(event.target.id);
    console.log(id);
    state.cards.forEach(card => {
      if (card.id === id) {
        console.log(card);
        if (!card.clicked) {
          card.clicked = true;
          this.shuffleCards();
          this.setState({ score: state.score + 1 });
        } else {
          if (state.score > state.topScore) this.setState({ topScore: state.score });
          this.reset();
        }
      }
    });
  }

  shuffleCards = () => {
    let newCards = shuffleArray(this.state.cards);
    this.setState({ cards: newCards });
  }


  reset = () => {
    let newCards = shuffleArray(this.state.cards);
    newCards.forEach(card => {
      card.clicked = false;
    });
    this.setState({ score: 0, cards: newCards });


  }

  renderCards = () => {
    return this.state.cards.map(card => {
      return <Card src={card.file} id={card.id} key={card.id} CardClicked={this.handleCardClick} />
    })
  }
  render() {
    return (
      <div id="app">
        <Header score={this.state.score} topScore={this.state.topScore} />
        <div id="cardsDiv">
          {this.renderCards()}
        </div>

      </div>
    );
  }
}

export default App;

function shuffleArray(arr) {
  console.log("Before: " + arr.length);
  let newArr = [];
  let indexes = [];
  for (let i = 0; i < arr.length; i++)indexes.push(i);
  console.log(indexes);
  for (let x = 0; x < arr.length; x++) {
    let i = Math.floor(Math.random() * (indexes.length));
    let randomIndx = indexes[i];
    newArr.push(arr[randomIndx]);
    indexes.splice(i, 1);
  }
  console.log(indexes);
  console.log("After: " + newArr.length);
  return newArr;
}