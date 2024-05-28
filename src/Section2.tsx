import chartImg from "./assets/chart image.png";
import chartImg2 from "./assets/chart2.png";
import chartImg3 from "./assets/chart 3.png";
import lock from "./assets/lock effect.png";

const Section2 = () => {
  return (
    <section className="min-h-screen90">
      <h1 className="sectionHeading">Simplify your finances with AI</h1>

      <p className="sectionSubHeading">
        Empower your finance with Artificial Intelligence. Seamlessly track
        expenses and investment.
      </p>

      <img className="mt-5 w-3/4 mx-auto" src={chartImg} alt="charts" />

      <div className="flex flex-row items-center justify-between pt-20">
        <div className="w-1/2">
          <h1 className="capitalize text-3xl font-bold mb-3">
            personalized investment recommendation
          </h1>

          <p className="font-light w-2/3">
            Stay ahead of the market with our data-driven recommendations to
            help you navigate the market with confidence and precision with
            low-risk picks, acheiving your investment objectives and to enhance
            your portfolio’s performance.
          </p>
        </div>

        <img className="w-1/2" src={chartImg2} alt="cards" />
      </div>

      <div className="flex flex-row items-center justify-between pt-20">
        <img className="w-1/2" src={chartImg3} alt="cards" />

        <div className="w-1/3">
          <h1 className="capitalize text-3xl font-bold">portfolio</h1>
          <h1 className="capitalize text-3xl font-bold mb-3">
            diversification
          </h1>

          <p className="font-light">
            Optimize your investment portfolio with strategic diversification.
            Our expertly crafted approach spreads risk across various asset
            classes, ensuring stability and maximizing returns tailored to your
            financial goals and risk tolerance.
          </p>
        </div>
      </div>

      <div className="flex flex-row items-center justify-between pt-20">
        <div className="w-1/3">
          <h1 className="capitalize text-3xl font-bold mb-3">
            Security & Privacy
          </h1>

          <p className="font-light">
            Your security and privacy are our top priorities. Rest assured
            knowing that our platform employs state-of-the- art encryption,
            stringent security protocols. and strict privacy measures to
            safeguard your sensitive financial data and information.
          </p>
        </div>

        <img className="w-1/2" src={lock} alt="lock effect" />
      </div>
    </section>
  );
};

export default Section2;
