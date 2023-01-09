import React, { Component } from 'react'
import Secondclass from './Secondclass'


export class Firstclass extends Component {
    constructor(){
        console.log("constructor");
        super();
        this.state={
            productName:"krish",
            productAge:23,
            show:true,
            quantity:1,
        }
    }
    
    updateName(){
        this.setState({productAge:22});
    }
    componentDidMount(){
        console.log("componentDidMount");
    }

    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate",prevState);
        if(prevState.name !== this.state.name){
            console.log("update")
        }
        else{
            console.log("not update")
        }
    }
    componentWillUnmount(){
        console.log("componentWillUnmount parent");
    }

    increment(){
        let quantity=this.state.quantity;
        this.setState({quantity:quantity+1})
    }
    
    decrement(){
        let quantity=this.state.quantity;
        this.setState({quantity:quantity-1})
    }

  render() {
    console.log("render")
    return (
      <div>Firstclass
        <h1>{this.state.productName}{this.state.productAge}</h1><br/>
        <h1>QUANTITY:{this.state.quantity}</h1><br/>
        <button onClick={()=>this.setState({productName:"gopi"})}>update name</button>
        <button onClick={this.updateName.bind(this)}>update age</button>
        <button onClick={()=>this.setState({show:!this.state.show})}>hide/show</button>

        <button onClick={this.increment.bind(this)}>increment</button>
        <button onClick={this.decrement.bind(this)}>decrement</button>

        {this.state.show ? <Secondclass/> : null}

      </div>
    )
  }
}

export default Firstclass