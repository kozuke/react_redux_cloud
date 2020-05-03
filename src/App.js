import React, { Component } from 'react';

// クラスComponent
// class App extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <lable htmlFor="foo">foo</lable>
//         <input type="text" onChange={() => {console.log("I am clicked!")}}/>
//       </React.Fragment>
//     )
//   }
// }

// 関数Component
const App = () => {
  return (
    <React.Fragment>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  )
}

const Cat = () => {
  return <div>Meow!</div>
}

export default App;
