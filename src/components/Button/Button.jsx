import React, { useState } from "react";

function Button({type, onClick,btn,disabled,state,dataCy}) {

const handleClass=(state)=>{
  let temp= "w-[118px] h-[40px] bg-[#1597e4] text-center shadow text-white rounded-md "
  if(state==="primary"){
    // temp="w-[118px] h-[40px] bg-[#ffff] text-center shadow text-white rounded-md"
    temp=" w-[118px] h-[40px] bg-[#1597e4] opacity-25 cursor-no-drop  text-center shadow text-white rounded-md "
  }
  return temp
}
 
  return (
    <div>
      <button type={type} onClick={onClick} disabled={disabled} className={handleClass(state)} data-cy={dataCy}>{btn}
       
      </button>
    </div>
  );
}

export default Button;
