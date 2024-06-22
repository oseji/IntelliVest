import { TypeAnimation } from "react-type-animation";
import leftArrow from "./assets/Group 6415.png";
import rightArrow from "./assets/Group 6416.png";
import logo1 from "./assets/Logo 1.png";
import logo2 from "./assets/Logo 2.png";
import logo3 from "./assets/Logo 3.png";
import logo4 from "./assets/Logo 4.png";
import logo5 from "./assets/Logo 5.png";
import logo6 from "./assets/Logo 6.png";

const HeroSection = () => {
  return (
    <section className="heroSection" id="about">
      <div className=" flex flex-col gap-20">
        <div className=" mt-32">
          <TypeAnimation
            sequence={[
              "revolutionize your investments with AI-powered management",
              1000,
              "revolutionize your investments with us",
              2000,
              "revolutionize your investments with AI-powered management",
            ]}
            className="w-[360px] md:w-10/12 lg:w-[934px] h-[80px] lg:h-[120px] mx-auto text-center font-bold  lg:text-6xl md:text-4xl text-2xl capitalize mt-16 lg:mt-0"
            wrapper="h1"
            speed={20}
            repeat={0}
            cursor={false}
          />

          <p className="text-center mx-auto lg:mt-5 mt-7 ">
            Gain unparalleled insights, optimize investments, achieve your
            wealth goals, and take control of your finances.
          </p>

          <button className="px-[32px] py-[18px] rounded-xl block mx-auto lg:mt-5 mt-7 bg-[#938888] hover:scale-110 transition ease-in-out duration-150">
            Get Started
          </button>
        </div>

        <div>
          <div className="flex flex-row items-center justify-center gap-5 md:gap-5 mt-20">
            <img
              src={leftArrow}
              className="w-16 md:w-32 lg:w-auto"
              alt="left arrow"
            />

            <p className="capitalize text-xs text-center">
              trusted by various top companies
            </p>

            <img
              src={rightArrow}
              className="w-16 md:w-32 lg:w-auto"
              alt="right arrow"
            />
          </div>

          <div className="heroLogoGrp">
            <img src={logo1} alt="brand logo" className="heroLogo" />
            <img src={logo2} alt="brand logo" className="heroLogo" />
            <img src={logo3} alt="brand logo" className="heroLogo" />
            <img src={logo4} alt="brand logo" className="heroLogo" />
            <img src={logo5} alt="brand logo" className="heroLogo" />
            <img src={logo6} alt="brand logo" className="heroLogo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
