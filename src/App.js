import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FirstComponent from './FirstComponent';
import SecondComponent from './SecondComponent';

class App extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      output: {
        email: '',
        password: '',
      }
    }
  }

  render() {
    return (
      <div className="App container">
        <FirstComponent email={ this.state.email }
                        password={ this.state.password }
                        handelUpdateEmail={ 
                          value => {
                            this.setState({
                              email: value
                            })
                          }
                        }
                        handelUpdatePassword={ 
                          value => {
                            this.setState({
                              password: value
                            })
                          }
                        }
                        handelSubmit={
                          () => {
                            this.setState({
                              output: {
                                email: this.state.email,
                                password: this.state.password,
                              }
                            })
                          }
                        }/>
        <SecondComponent email={ this.state.output.email }
                         password={ this.state.output.password }
                         hadelClear={
                          () => {
                            this.setState({
                              output: {
                                email: '',
                                password: ''
                              }
                            })
                          }
                         }/>
      </div>
    );
  }
}

export default App;
