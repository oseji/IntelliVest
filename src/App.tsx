import HeroSection from "./HeroSection";
import Section2 from "./Section2";
import Section3 from "./Section3";
import logo from "./assets/Logo.png";

function App() {
  return (
    <div className="App">
      <header>
        <div className="logoGrp">
          <img src={logo} alt="finGenius logo" />
          <h1>FinGenius</h1>
        </div>

        <nav>
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
        </nav>

        <div className="signInGrp">
          <button className="capitalize px-4 py-2 rounded-lg border border-slate-500">
            log in
          </button>
          <button className="capitalize px-4 py-2 rounded-lg border border-slate-500">
            sign up
          </button>
        </div>
      </header>

      <HeroSection />
      <Section2 />
      <Section3 />
    </div>
  );
}

export default App;
