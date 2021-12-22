import React from 'react'
import PropTypes from 'prop-types'

export default function MarcoPropsTest() {
  const objectProps = {
    username: 'MARCO IS RICH NOW -december 2021!',
    // age: ,
    // city: 'M'
  }

  return (
    <div>
      <SuperCh {...objectProps} />
    </div>
  )
};

const SuperCh = (props) => {
const {username, age, city} = props;
  return ( 
    <>
      <h1>{username}</h1>
      <h1>{age}</h1>
      <h1>{city}</h1>
    </>
  );
};

SuperCh.propTypes = {
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  city: PropTypes.string.isRequired
}

SuperCh.defaultProps = {
  username: 'Mr Marco is rich now',
  age: 46,
  city: 'Varsovia'
}

