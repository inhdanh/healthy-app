import React from "react";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = (props: React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className="bg-gradient-to-b from-primary/400 to-primary/300 w-[296px] text-lg h-14 text-light rounded"
      {...props}
    >
      {props.children}
    </button>
  );
};

export default Button;
