import React from 'react';
import PropTypes from 'prop-types';

// 関数Component
const App = () => {
  const profiles = [
    { name: "taro", age: 1241 },
    { name: "Hanako", age: 1000 },
    { name: "Melinda", age: 3 },
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
User.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number.isRequired
}

export default App;
