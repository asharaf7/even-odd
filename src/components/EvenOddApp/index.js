import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {isEven: true, count: 0}

  onIncrement = () => {
    this.setState(prevState => {
      const {count} = prevState
      const num = count + Math.ceil(Math.random() * 100)

      let numType

      if (num % 2 === 0) {
        numType = true
      } else {
        numType = false
      }

      return {isEven: numType, count: num}
    })
  }

  render() {
    return (
      <div className="container">
        <h1 className="heading">Count{count}</h1>
        <p className="description">Count is Even</p>
        <button className="button" type="button" onClick={this.onIncrement}>
          Increment
        </button>
        <p className="bottom-text">
          Increase By Random Number Between 0 to 100
        </p>
      </div>
    )
  }
}

export default EvenOddApp
