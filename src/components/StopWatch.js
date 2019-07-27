import React, { Component } from 'react';

class StopWatch extends Component {

  state = {
    isRunning: false,
    elapsedTime: 0,
    previewsTime: 0
  };

  componentDidMount() {
    //It returns an interval ID which uniquely identifies the interval.
    this.intervalID = setInterval(() => this.tick(), 100);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState( prevState => ({
        previewsTime: now,
        elapsedTime: prevState.elapsedTime + (now - this.state.previewsTime)
      }));
    }
  }

  handleStopWatch = () => {
    this.setState( prevState => ({
        isRunning: !prevState.isRunning
    }));
    if (!this.state.isRunning) {
      this.setState({ previewsTime: Date.now() });
    }
  };

  handleRest = () => {
    this.setState( { elapsedTime: 0 });
  }

  render() {

    const seconds = Math.floor(this.state.elapsedTime / 1000);

    return (
      <div className="stopwatch">
        <h2>Stopwatch</h2>
        <span className="stopwatch-time">{ seconds }</span>
        <button onClick={this.handleStopWatch}>
          {this.state.isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={this.handleRest}>Reset</button>
      </div>
    )
  }
};

export default StopWatch; 