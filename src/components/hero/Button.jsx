import React from 'react'

export const Button = ({onClick, children, type = "button" }) => {
  return (
    <button>
        {children}
    </button>
    
  );
};
