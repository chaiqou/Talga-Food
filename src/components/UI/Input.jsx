import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center mb-2">
      <label ref={ref} className="mr-4 font-bold" htmlFor={props.input?.id}>
        {props.input.label}
      </label>
      <input
        ref={ref}
        className="w-12 rounded-[5px] pl-2 border-2 border-[#ccc]"
        {...props.input}
      />
    </div>
  );
});

export default Input;
