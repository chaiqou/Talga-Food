import React from "react";

const Input = ({ input }) => {
  console.log(input);
  return (
    <div className="flex items-center mb-2">
      <label className="mr-4 font-bold" htmlFor={input?.id}>
        {input.label}
      </label>
      <input
        className="w-12 rounded-[5px] pl-2 border-2 border-[#ccc]"
        {...input}
      />
    </div>
  );
};

export default Input;
