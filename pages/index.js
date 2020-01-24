import React from 'react';
import DigitalClock from  '../src/DigitalClock';

class Index extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
        time: new Date().toString()
    }
  }

  tick() {

    this.setState( () => {

      return ({
        time: new Date().toString()
      })
    })
  }

  componentDidMount() {
    this.interval = setInterval( () => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <DigitalClock time={this.state.time} />
    )
  }
}

export default Index;