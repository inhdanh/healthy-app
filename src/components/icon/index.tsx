import React from "react";

interface Props {
  src: string;
  count?: number;
}

const Icon = ({ src, count }: Props) => {
  return (
    <div className="relative h-[32px] w-[32px]">
      <img className="w-full h-full" src={src} alt="icon" />
      {count && (
        <div className="w-4 h-4 bg-primary/500 rounded-[50%] absolute -right-2 top-0 text-[10px] text-light">
          {count}
        </div>
      )}
    </div>
  );
};

export default Icon;
