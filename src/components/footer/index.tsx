import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark/500/text w-full h-32 flex items-center gap-[45px] pl-40">
      <a className="font-light text-[11px] text-light" href="">
        会員登録
      </a>
      <a className="font-light text-[11px] text-light" href="">
        運営会社
      </a>
      <a className="font-light text-[11px] text-light" href="">
        利用規約
      </a>
      <a className="font-light text-[11px] text-light" href="">
        個人情報の取扱について
      </a>
      <a className="font-light text-[11px] text-light" href="">
        特定商取引法に基づく表記
      </a>
      <a className="font-light text-[11px] text-light" href="">
        お問い合わせ
      </a>
    </footer>
  );
};

export default Footer;
