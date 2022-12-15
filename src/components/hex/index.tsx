import React, { ButtonHTMLAttributes } from "react";
import imgHex from "../../assets/images/image_hex.svg";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  text: string;
}

const Hex = ({ icon, text, ...props }: Props) => {
  return (
    <button className="relative" {...props}>
      <img src={imgHex} />
      <img className="absolute top-7 left-0 right-0 mx-auto" src={icon} />
      <span className="absolute top-[83px] left-0 right-0 mx-auto text-[1.25rem] leading-6 font-sans font-normal text-light">
        {text}
      </span>
    </button>
  );
};

export default Hex;
