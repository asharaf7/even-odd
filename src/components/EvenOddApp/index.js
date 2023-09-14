import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="heading">Count</h1>
        <p className="description">Count is</p>
        <button className="button" type="button">
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
