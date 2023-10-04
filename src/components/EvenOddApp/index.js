// Write your code here

import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, identity: 'Even'}

  randomIn = () => {
    const ranNumber = Math.floor(Math.random() * 100)
    this.setState(prevState => ({count: prevState.count + ranNumber}))
    const {count, identity} = this.state
    const remainder = count % 2

    if (remainder === 0) {
      this.setState(prevState => ({identity: 'Even'}))
    } else {
      this.setState(prevState => ({identity: 'Odd'}))
    }
  }

  render() {
    const {count, identity} = this.state
    return (
      <div className="bg-container">
        <div className="add-container">
          <h1 className="heading"> Count {count}</h1>
          <p className="number-identity"> Count is {identity}</p>
          <button className="in-btn" onClick={this.randomIn}>
            Increment
          </button>
          <p className="bottom-des">
            Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
