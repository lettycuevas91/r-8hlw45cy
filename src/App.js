import React, { Component } from 'react';
import './App.css';

class App extends Component {
constructor(){
  super();
   this.clic = this.clic.bind(this);
   this.state = {clic: false};
}
  render() {
    return (
      <div className="wrapper">
        <label><input type="checkbox" onClick={this.clic}/>Mostrar información importante{this.state.clic ?  <p className="parrafo">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  : ''} </label>
            </div>
    );
  }
  clic() {
    this.setState(prevState => ({clic: !prevState.clic}));
  }
}



export default App;
