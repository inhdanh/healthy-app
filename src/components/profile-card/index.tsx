import React from "react";

interface ProfileCardProps {
  src: string;
  title: string;
  description: string;
}

const ProfileCard = ({ src, title, description }: ProfileCardProps) => {
  return (
    <button className="w-72 h-72 bg-primary/300 p-6 relative">
      <div className="w-full h-full bg-gray/400">
        <img
          className="w-full h-full object-cover grayscale"
          src={src}
          alt="card"
        />
      </div>
      <div className="absolute h-full left-0 right-0 m-auto top-0 bottom-0 flex items-center justify-center flex-col">
        <h3 className="text-[25px] text-primary/300 font-sans font-normal">
          {title}
        </h3>
        <p className="bg-primary/400 text-sm text-light font-light min-w-[160px] h-6 flex items-center justify-center">
          {description}
        </p>
      </div>
    </button>
  );
};

export default ProfileCard;
