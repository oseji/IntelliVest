import { useState, useRef } from "react";
import HeroSection from "./HeroSection";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Faq from "./Faq";
import Footer from "./Footer";
import logo from "./assets/Logo.png";
import menu from "./assets/menu.svg";

function App() {
  //const [menuToggled, setMenuToggled] = useState<boolean>(false);
  const navBarRef = useRef(null);

  const toggleMenu = () => {
    const navBar = navBarRef.current;
    navBar.classList.toggle("hideNav");
  };

  return (
    <div className="App">
      <header>
        <div className="flex flex-row justify-between w-full lg:w-auto">
          <div className="logoGrp">
            <img src={logo} alt="finGenius logo" />
            <h1>FinGenius</h1>
          </div>

          <img
            src={menu}
            className="h-6 lg:hidden"
            alt="menu icon"
            onClick={toggleMenu}
          />
        </div>

        <nav className="hideNav" ref={navBarRef}>
          <ul className="navList">
            <li className="navText">
              <a href="#">about</a>
            </li>
            <li className="navText">
              <a href="#">features</a>
            </li>
            <li className="navText">
              <a href="#">AI solutions</a>
            </li>
            <li className="navText">
              <a href="#">pricing</a>
            </li>
          </ul>

          <div className="signInGrp">
            <button className="capitalize px-4 py-2 rounded-lg border border-slate-500">
              log in
            </button>

            <button className="capitalize px-4 py-2 rounded-lg border border-slate-500">
              sign up
            </button>
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
