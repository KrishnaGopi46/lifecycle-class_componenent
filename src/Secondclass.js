import React, { Component } from 'react'

let interval;
export class Secondclass extends Component {

    componentDidMount(){
        interval=setInterval(()=>{
            console.log("componentDidMount child");
        },2000);
    }

    componentWillUnmount(){
        console.log("componentWillUnmount child");
        clearInterval(interval);
    }

  render() {
    console.log("render child")
    return (
      <div>Secondclass
                    
      </div>
    )
  }
}

export default Secondclass