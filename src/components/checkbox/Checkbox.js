import React from "react";

const Checkbox = ({ id, label, value, onChange, fontSize }) => {
    return (
      <div>
        <input 
          id={id} 
          type="checkbox" 
          checked={value} 
          onChange={onChange}
          fontSize={fontSize} 
        />
        <label htmlFor={id}>{label}</label>
      </div>
    );
  };
  
  export default Checkbox;