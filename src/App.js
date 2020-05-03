import React from 'react';

// 関数Component
const App = () => {
  const profiles = [
    { name: "taro", age: 10 },
    { name: "Hanako", age: 1000 },
    { name: "gomi" },
  ]
  return (
    <React.Fragment>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
      {/* Userに大してnameのpropsを与えている。 */}
      {/* <User name={"Taro"} age={10}/>
      <User name={"Hanako"} age={1000}/> */}
    </React.Fragment>
  )
}

const User = (props) => {
  return <div>Hi, i am {props.name}!, and {props.age} years old!</div>
}

User.defaultProps = {
  age: 1
}

export default App;
