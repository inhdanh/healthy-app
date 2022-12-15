import React from "react";
import logo from "../../assets/icons/logo.svg";
import iconMemo from "../../assets/icons/icon_memo.svg";
import iconChallenge from "../../assets/icons/icon_challenge.svg";
import iconInfo from "../../assets/icons/icon_info.svg";
import iconMenu from "../../assets/icons/icon_menu.svg";
import iconClose from "../../assets/icons/icon_close.svg";
import Icon from "../icon";
import { useNavigate } from "react-router-dom";

const LIST_MENU = [
  { name: "自分の記録", path: "/my-record" },
  { name: "体重グラフ", path: "/" },
  { name: "目標", path: "/" },
  { name: "選択中のコース", path: "/" },
  { name: "コラム一覧", path: "/column-list" },
  { name: "設定", path: "/" },
];

//if width = 1280px equal to 100%. So width = 234px equal to 18.125%
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navigate = useNavigate();

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setIsOpen(false);
  };

  return (
    <header className="h-16 w-full sticky bg-dark/500/text flex items-center justify-between top-0 z-50">
      <button onClick={() => handleNavigate("/")}>
        <img src={logo} className="ml-[12.5%]" alt="logo" />
      </button>
      <div className="ml-[22.5%] flex">
        <button className="flex items-center p-2 w-40">
          <Icon src={iconMemo} />
          <span className="text-base text-light ml-3">自分の記録</span>
        </button>
        <button className="flex items-center p-2 w-40">
          <Icon src={iconChallenge} />
          <span className="text-base text-light ml-3">チャレンジ</span>
        </button>
        <button className="flex items-center p-2 w-40">
          <Icon src={iconInfo} count={1} />
          <span className="text-base text-light ml-3">お知らせ</span>
        </button>
      </div>
      <div className="relative h-[32px] mr-[12.5%]">
        <button onClick={handleToggleOpen} className="ml-4">
          <Icon src={iconMenu} />
        </button>
        {isOpen && (
          <ul className="absolute top-0 right-0">
            <li className="relative h-8">
              <button
                className="right-0 absolute top-0 bg-dark/500/text"
                onClick={handleToggleOpen}
              >
                <Icon src={iconClose} />
              </button>
            </li>
            {LIST_MENU.map((item, index) => (
              <li
                className="border-b bg-gray/400 border-b-chart border-t border-t-light border-opacity-20 px-8 py-6 min-w-[280px] cursor-pointer hover:bg-dark/500/text text-lg font-light text-light"
                key={index}
                onClick={() => handleNavigate(item.path)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
