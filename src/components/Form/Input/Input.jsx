import React from "react";

const Input = ({ type, checked,placeholder = "", name = "", id ,onChange,value,errValidation,errorStates}) => {

  
  return (
    <div className="flex flex-col gap-1">
     
      <div>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          name={name}
          onChange={onChange}
          className="px-3 py-2 w-full rounded-[5px] border-solid border-2"
          value={value}
          checked={checked}
        />
       <p className="text-red-600">{errValidation?errValidation:""}</p>
      </div>
    </div>
  );
};

export default Input;
