import React from 'react';

const ValidationComponent = (props) => {
  const style = {
    color: 'salmon'
  }

  let info = 'Text too short'
  const length = props.length

  if (length >= 5) {
    style.color = 'green'
    info = 'Text long enough'
  }

  return (
    <p style={style}>{info}</p>
  )
}

export default ValidationComponent;
