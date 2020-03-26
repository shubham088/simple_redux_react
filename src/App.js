import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

//import {useSelector, useDispatch} from 'react-redux';
import {increment, decrement, loginToggle} from './actions'
import { connect } from "react-redux";

//const counter = useSelector(state => state.counter);
//const user_log = useSelector(state => state.islogged);
//const dispatch = useDispatch();

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>

          <h1>Counter : {this.props.count}</h1>
          <button onClick={this.props.increment}>+</button>
          {'    '}
          <button onClick={this.props.decrement}>-</button>
         {this.props.log_info ? <div><h3>Logged In..</h3>
              <button onClick={this.props.loginToggle}>Sign out</button></div>
                : <div><h3>Do Sign In..</h3><button onClick={this.props.loginToggle}>Login</button></div>}

        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  count: state.counter,
  log_info : state.islogged
});

const mapDispatchToProps = dispatch => {
  return {
    increment : () =>{
      dispatch(increment())
    },
    decrement : () =>{
      dispatch(decrement())
    },
    loginToggle : () => {
      dispatch(loginToggle())
    }
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);

//export default App;
