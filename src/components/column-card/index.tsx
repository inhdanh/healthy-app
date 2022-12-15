import React from "react";

interface Props {
  image: string;
  title: string;
  time: string;
  tags: string[];
}

const ColumnCard = ({ tags, image, time, title }: Props) => {
  return (
    <div className="cursor-pointer">
      <div className="relative">
        <img className="h-36 w-full" src={image} alt="column card" />
        <div className="bg-primary/300 text-[15px] text-light font-sans font-light w-fit px-2 bottom-0 absolute">
          {time}
        </div>
      </div>
      <div className="text-dark/500/text text-[15px] font-light leading-5 mt-1">
        {title}
      </div>
      {tags.map((tag) => (
        <a className="text-primary/400 text-xs leading-[22px] mr-2">{tag}</a>
      ))}
    </div>
  );
};

export default ColumnCard;
