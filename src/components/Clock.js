import React, { Component } from 'react';

class Clock extends Component {
    constructor(props){
        super(props);
        
        //set the initial state
        this.state = {date: new Date()};
    }

    //mounted
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
          );
    }
  
    //unmounted
    componentWillUnmount() {
        clearInterval(this.timerID);

    }

    //custom methods
    tick() {
        this.setState({
          date: new Date()
        });
      }
    



    render(){
        return (
            <div>
            <h1>Hello, world!</h1>
            <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          </div>


        );
    }

}

export default Clock;