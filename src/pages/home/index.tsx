import React from "react";
import mainPhoto from "../../assets/images/main_photo.png";
import mainPhotoText from "../../assets/images/main_photo_text.png";
import mainGraph from "../../assets/images/main_graph.png";
import iconKnife from "../../assets/icons/icon_knife.svg";
import iconCup from "../../assets/icons/icon_cup.svg";
import Hex from "../../components/hex";
import ImageCard from "../../components/image-card";
import m01 from "../../assets/images/m01.jpg";
import m02 from "../../assets/images/m02.jpg";
import m03 from "../../assets/images/m03.jpg";
import l01 from "../../assets/images/l01.jpg";
import l02 from "../../assets/images/l02.jpg";
import l03 from "../../assets/images/l03.jpg";
import d01 from "../../assets/images/d01.jpg";
import d02 from "../../assets/images/d02.jpg";
import Button from "../../components/button";

const LIST_IMG = [
  { src: m01, title: "05.21.Morning" },
  { src: m02, title: "05.21.Lunch" },
  { src: m03, title: "05.21.Dinner" },
  { src: l01, title: "05.21.Snack" },
  { src: l02, title: "05.20.Morning" },
  { src: l03, title: "05.20.Lunch" },
  { src: d01, title: "05.20.Dinner" },
  { src: d02, title: "05.21.Snack" },
];

const HomePage = () => {
  return (
    <div>
      <div className="flex">
        <div className="relative w-[40%]">
          <img
            className="w-full h-[316px] object-cover"
            src={mainPhoto}
            alt="main-photo"
          />
          <img
            className="absolute top-0 left-0 bottom-0 m-auto right-0 w-44 h-44]"
            src={mainPhotoText}
            alt="main-photo-text"
          />
        </div>
        <div className="w-[60%] bg-chart pt-3 pl-14">
          <img className="object-cover" src={mainGraph} alt="graph" />
        </div>
      </div>
      <div className="flex gap-[84px] justify-center mt-5">
        <Hex icon={iconKnife} text="Morning" />
        <Hex icon={iconKnife} text="Lunch" />
        <Hex icon={iconKnife} text="Dinner" />
        <Hex icon={iconCup} text="Snack" />
      </div>
      <div className="grid grid-cols-4 mt-[25px] mx-auto gap-2 w-[960px]">
        {LIST_IMG.map((item, index) => (
          <ImageCard key={index} src={item.src} title={item.title} />
        ))}
      </div>
      <div className="flex mt-7 justify-center mb-16">
        <Button>記録をもっと見る</Button>
      </div>
    </div>
  );
};

export default HomePage;

//path to image: src\asset\image\main_photo.png
