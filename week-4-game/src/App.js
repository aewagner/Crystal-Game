import React, { Component } from 'react';
import Nav from './components/Nav';
import Crystals from './components/Crystals';

class App extends Component {

  state = {
    numberToGuess: null,
    score: 0,
    wins: 0,
    losses: 0,
    crystalValues: [],
    text: ""
  };

  componentDidMount() {
    this.handleGameSetUp();
  }

  handleGameSetUp = () => {
    const randomNumber = 19 + Math.floor(Math.random() * 102);
    const randomNumberArr = [Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1, Math.floor(Math.random() * 12) + 1];
    this.setState({

      score: 0,
      numberToGuess: randomNumber,
      crystalValues: randomNumberArr

    });
  }

  handleScore = (value) => {
    let newScore = this.state.score + value;
    this.setState({ 
      score: newScore,
      text: ""
    })

    this.handleGameLogic(newScore);
  }

  handleGameLogic = (score) => {
    
    let target = this.state.numberToGuess;
    // let newScore = oldScore + value;
    console.log(score);
    console.log(target);

    if (score > target) {
      this.setState({
        losses: this.state.losses + 1,
        text: "You lose..."
      });
      this.handleGameSetUp();
    }

    if (score === target) {
      this.setState({
        wins: this.state.wins + 1,
        text: "You won!"
      });
      this.handleGameSetUp();
    }
    
  }



  render() {
    return (
      <div>
        <Nav
          numberToGuess = {this.state.numberToGuess}
          score={this.state.score}
          text={this.state.text}
          wins={this.state.wins}
          losses={this.state.losses}

        />
        <br></br>
        <Crystals
          handleScore={this.handleScore}
          crystalValues={this.state.crystalValues}

        />
      </div>
    );
  }
}

export default App;
