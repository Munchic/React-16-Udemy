import React from 'react';

const UserInput = (props) => {
  const style = {
    width: '80%',
    margin: 'auto',
    border: '1px solid rgb(200, 200, 200)',
    boxShadow: '3px 4px rgb(230, 230, 230)',
  }

  return (
    <div>
      <form style={style}>
        <p>Enter value:</p>
        <input
          type='text'
          onChange={props.changed}
          value={props.value}
        />
      </form>
    </div>
  );
}

export default UserInput;
