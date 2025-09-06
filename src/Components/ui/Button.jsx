import React from 'react';

const Button = ({ 
  message = 'Demo', 
  style = 'px-6 py-3 rounded-xl text-md font-semibold' 
}) => {
  return (
    <button
      className={`
        relative overflow-hidden cursor-pointer text-white bg-green-custom shadow-xl group
        ${style}
      `}
    >
      {/* Sliding red background */}
      <span
        className="
          absolute inset-0 bg-red-custom translate-x-[-95%]
          group-hover:translate-x-0 transition-transform duration-500 ease-in-out
        "
      />

      {/* Button text */}
      <span className="relative z-10">{message}</span>
    </button>
  );
};

export default Button;
