import React from "react";
import column1 from "../../assets/images/column-1.jpg";
import column2 from "../../assets/images/column-2.jpg";
import column3 from "../../assets/images/column-3.jpg";
import column4 from "../../assets/images/column-4.jpg";
import column5 from "../../assets/images/column-5.jpg";
import column6 from "../../assets/images/column-6.jpg";
import column7 from "../../assets/images/column-7.jpg";
import column8 from "../../assets/images/column-8.jpg";
import Button from "../../components/button";
import ColumnCard from "../../components/column-card";

const COLUMN_LIST = [
  {
    image: column1,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
    time: "2021.05.17   23:25",
  },
  {
    image: column2,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
    time: "2021.05.17   23:25",
  },
  {
    image: column3,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
    time: "2021.05.17   23:25",
  },
  {
    image: column4,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
    time: "2021.05.17   23:25",
  },
  {
    image: column5,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
    time: "2021.05.17   23:25",
  },
  {
    image: column6,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
    time: "2021.05.17   23:25",
  },
  {
    image: column7,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
    time: "2021.05.17   23:25",
  },
  {
    image: column8,
    title: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
    tags: ["#魚料理", "#和食", "#DHA"],
    time: "2021.05.17   23:25",
  },
];

const LIST_RECOMMEND = [
  { title: "RECOMMENDED COLUMN", description: "オススメ" },
  { title: "RECOMMENDED DIET", description: "ダイエット" },
  { title: "RECOMMENDED BEAUTY", description: "美容" },
  { title: "RECOMMENDED HEALTH", description: "健康" },
];

const ColumnPage = () => {
  return (
    <>
      <div className="grid grid-cols-4 gap-8 mx-auto w-[960px] mt-14">
        {LIST_RECOMMEND.map((item, index) => (
          <button className="w-[216px] h-36 bg-chart px-2 py-6">
            <h1 className="text-center text-primary/300 text-[22px] leading-7">
              {item.title}
            </h1>
            <hr className="mx-20 mt-[10px] text-light" />
            <p className="text-center text-light text-lg mt-2 font-light">
              {item.description}
            </p>
          </button>
        ))}
      </div>
      <div className="mt-14 w-[960px] grid grid-cols-4 gap-2 mx-auto">
        {COLUMN_LIST.map((column, index) => (
          <ColumnCard
            key={index}
            tags={column.tags}
            image={column.image}
            title={column.title}
            time={column.time}
          />
        ))}
      </div>
      <div className="flex mt-[30px] justify-center mb-16">
        <Button>コラムをもっと見る</Button>
      </div>
    </>
  );
};

export default ColumnPage;
