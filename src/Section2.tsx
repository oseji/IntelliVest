import chartImg from "./assets/chart image.png";
import chartImg2 from "./assets/chart2.png";
import chartImg3 from "./assets/chart 3.png";
import lock from "./assets/lock effect.png";

const Section2 = () => {
  return (
    <section className="min-h-screen90">
      <h1 className="sectionHeading" id="aiSolutions">
        Simplify your finances with AI
      </h1>

      <p className="sectionSubHeading">
        Empower your finance with Artificial Intelligence. Seamlessly track
        expenses and investment.
      </p>

      <img className="mt-5 md:w-3/4 mx-auto" src={chartImg} alt="charts" />

      <div
        className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-0 pt-20"
        id="features"
      >
        <div className="md:w-1/2">
          <h1 className="capitalize text-2xl md:text-3xl font-bold mb-3">
            personalized investment recommendation
          </h1>

          <p className=" lg:w-2/3">
            Stay ahead of the market with our data-driven recommendations to
            help you navigate the market with confidence and precision with
            low-risk picks, achieving your investment objectives and to enhance
            your portfolio’s performance.
          </p>
        </div>

        <img className="md:w-1/2" src={chartImg2} alt="cards" />
      </div>

      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-0 pt-20">
        <img className="md:w-1/2" src={chartImg3} alt="cards" />

        <div className="md:w-1/3">
          <h1 className="md:w-[200px] capitalize text-2xl md:text-3xl font-bold">
            portfolio diversification
          </h1>

          <p>
            Optimize your investment portfolio with strategic diversification.
            Our expertly crafted approach spreads risk across various asset
            classes, ensuring stability and maximizing returns tailored to your
            financial goals and risk tolerance.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0 pt-20">
        <div className="md:w-1/3">
          <h1 className="capitalize text-3xl font-bold mb-3">
            Security & Privacy
          </h1>

          <p className="">
            Your security and privacy are our top priorities. Rest assured
            knowing that our platform employs state-of-the- art encryption,
            stringent security protocols. and strict privacy measures to
            safeguard your sensitive financial data and information.
          </p>
        </div>

        <img className="md:w-1/2" src={lock} alt="lock effect" />
      </div>
    </section>
  );
};

export default Section2;
