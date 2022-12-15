import React from "react";
import Footer from "../footer";
import Header from "../header";
import Icon from "../icon";
import iconScroll from "../../assets/icons/icon_scroll.svg";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  //show scroll to top button when scrollY > 100
  const [showScroll, setShowScroll] = React.useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 100) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 100) {
      setShowScroll(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Header />
      <main className="min-h-[calc(100vh-128px-64px)]">{children}</main>
      <Footer />
      {showScroll && (
        <button
          className="fixed bottom-[40%] right-[7%] rounded-full bg-light"
          onClick={scrollTop}
        >
          <img className="w-full h-full" src={iconScroll} alt="icon" />
        </button>
      )}
    </>
  );
};

export default Layout;
