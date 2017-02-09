import React from 'react';

const FilterInput = (props) => {
  return (
    <form className="form-group" style={{marginTop: '20px'}}>
      <input onChange={props.handleChange} />
    </form>
  );
}

export default FilterInput;
