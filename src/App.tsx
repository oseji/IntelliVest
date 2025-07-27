import { useEffect, useRef, useState } from "react";
import HeroSection from "./HeroSection";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Faq from "./Faq";
import Footer from "./Footer";
import logo from "./assets/Logo.svg";
import menu from "./assets/menu.svg";
import closeMenu from "./assets/close.svg";

function App() {
  const [menuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [menuIcon, setMenuIcon] = useState<string>(menu);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const [lastY, setLastY] = useState<number>(0);

  const navBarRef = useRef<HTMLElement>(null);

  const toggleMenu = () => {
    setIsMenuToggled((prevValue) => {
      const newValue = !prevValue;

      setMenuIcon(newValue ? closeMenu : menu);

      return newValue;
    });

    const navBar = navBarRef.current;

    !menuToggled
      ? navBar?.classList.remove("hideNav")
      : navBar?.classList.add("hideNav");
  };

  const handleStickyHeader = () => {
    window.scrollY > lastY ? setShowHeader(false) : setShowHeader(true);
    setLastY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyHeader);
  }, [lastY]);

  return (
    <div className="App">
      <header
        className={`${showHeader ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="flex flex-row justify-between w-full lg:w-auto z-10">
          <div className="logoGrp">
            <img src={logo} alt="finGenius logo" />
            <h1 className="font-bold">IntelliVest</h1>
          </div>

          <img
            src={menuIcon}
            className="h-6 lg:hidden"
            alt="menu icon"
            onClick={toggleMenu}
          />
        </div>

        <nav className="hideNav" ref={navBarRef}>
          <ul className="navList">
            <li className="navText">
              <a href="#about">about</a>
            </li>
            <li className="navText">
              <a href="#features">features</a>
            </li>
            <li className="navText">
              <a href="#aiSolutions">AI solutions</a>
            </li>
            <li className="navText">
              <a href="#pricing">pricing</a>
            </li>
          </ul>

          <div className="signInGrp">
            <button className="navBtn border border-black">log in</button>

            <button className="navBtn bg-[#938888] ">sign up</button>
          </div>
        </nav>
      </header>

      <HeroSection />
      <Section2 />
      <Section3 />
      <Faq />
      <Footer logo={logo} />
    </div>
  );
}

export default App;
