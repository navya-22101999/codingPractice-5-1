// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {
    isClicked: false,
  }

  onButton = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }

  render() {
    const {isClicked} = this.state
    return (
      <div>
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        <button type="button" onClick={this.onButton}>
          {isClicked ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}
export default Welcome
