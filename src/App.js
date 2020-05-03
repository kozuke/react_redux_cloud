import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <lable htmlFor="foo">foo</lable>
        <input type="text" onChange={() => {console.log("I am clicked!")}}/>
      </React.Fragment>
    )
  }
}

export default App;
