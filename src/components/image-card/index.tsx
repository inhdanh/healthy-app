import React from "react";

interface Props {
  src: string;
  title: string;
}

const ImageCard = ({ src, title }: Props) => {
  return (
    <div className="relative cursor-pointer">
      <img className="w-[234px] h-[234px] object-cover" src={src} />
      <div className="bottom-0 absolute w-[120px] h-8 bg-primary/300 flex items-center p-2 font-sans text-[15px] text-light">
        {title}
      </div>
    </div>
  );
};

export default ImageCard;
