import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {

  constructor(){
    super()
    this.state = {
      sushi: [],
      lowerLimit: 0,
      upperLimit: 4,
      eatenSushi: [],
      budget: 75
    }
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(sushiArray => this.setState({sushi: sushiArray}))
  }

  displayFour = () => {
    let fourSushi = this.state.sushi.slice(this.state.lowerLimit, this.state.upperLimit)
    return fourSushi
  }

  updateFour = () => {
    console.log(this.state.upperLimit)
    if(this.state.upperLimit <= this.state.sushi.length) {
    this.setState({
      lowerLimit: this.state.lowerLimit + 4,
      upperLimit: this.state.upperLimit + 4
    })} else if (this.state.upperLimit > this.state.sushi.length){
      this.setState({
        lowerLimit: 0,
        upperLimit: 4
      })
    }
  }

  handleSushiClick = (sushi) => {
    if (this.state.budget > sushi.price) {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi]
    })
    this.handlePayment(sushi)
    }
  }

  handlePayment = (sushi) => {
    let newBudget = this.state.budget - sushi.price
    this.setState({
      budget: newBudget
    })
  }

  handleWalletSubmit = (funds) => {
    this.setState({
      budget: this.state.budget + parseInt(funds, 10)
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer allSushi={this.state.sushi} displayFour={this.displayFour} updateFour={this.updateFour} handleSushiClick={this.handleSushiClick} eatenSushi={this.state.eatenSushi}/>
        <Table eatenSushi={this.state.eatenSushi} budget={this.state.budget} handleWalletSubmit={this.handleWalletSubmit}/>
      </div>
    );
  }
}

export default App;