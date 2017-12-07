import React from 'react';

const CharComponent = (props) => {
  const style = {
    display: 'inline-block',
    textAlign: 'center',
    borderRadius: '7px',
    margin: '4px',
    border: '1px solid rgb(200, 200, 200)',
    boxShadow: '2px 3px rgb(235, 235, 235)',
    minWidth: '36px',
    width: 'auto',
    padding: '4px'
  }

  const spacebar = <p>&nbsp;</p>

  return (
    <div style={style} onClick={props.clicked}>
      <p style={{fontWeight: 'bold'}}>{props.name === ' ' ? spacebar : props.name}</p>
      <p>{props.positions.length}</p>
    </div>
  )
}

export default CharComponent;
