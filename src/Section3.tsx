import { useState } from "react";
import tick from "./assets/system-uicons_check.png";

const Section3 = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(true);

  return (
    <section id="pricing">
      <h1 className="sectionHeading">
        Flexible Pricing Plans To Suit Your Needs.
      </h1>

      <p className="sectionSubHeading">
        Choose from our range of subscription tiers tailored to fit your budget
        and investment goals
      </p>

      <div className="flex flex-row justify-center gap-5 p-2 rounded-lg bg-yellow-700 w-fit mx-auto mt-5">
        <button
          className="px-4 py-2 bg-red-400 rounded-lg"
          onClick={() => setIsMonthly(true)}
        >
          Monthly
        </button>

        <button
          className="px-4 py-2  rounded-lg"
          onClick={() => setIsMonthly(false)}
        >
          Annually (save up to 20%)
        </button>
      </div>

      <div className="priceCardsGrp">
        <div className="priceCard">
          <h1 className="cardHeading">Basic plan</h1>
          <p className="cardSubHeading">
            Basic Plan Essential tools to manage finances efficiently.
          </p>

          <div className="flex flex-row items-end pb-2 border-b border-slate-500">
            <h1 className="cardPrice">{isMonthly ? "$9.99" : "$29.99"}</h1>
            <p className="font-light text-sm">
              {isMonthly ? "/month" : "/year"}
            </p>
          </div>

          <div className="cardTextGrp mt-3">
            <img src={tick} alt="tick" />
            <p className="cardText ">Automatic expense tracking</p>
          </div>
          <div className="cardTextGrp">
            <img src={tick} alt="tick" />
            <p className="cardText ">Access to personalized recommendations</p>
          </div>
          <div className="cardTextGrp">
            <img src={tick} alt="tick" />
            <p className="cardText ">
              Basic portfolio diversification analysis
            </p>
          </div>
          <div className="cardTextGrp">
            <img src={tick} alt="tick" />
            <p className="cardText ">Email support</p>
          </div>
          <div className="cardTextGrp">
            <img src={tick} alt="tick" />
            <p className="cardText ">Monthly financial support</p>
          </div>

          <button className="cardBtn">get started</button>
        </div>

        <div className="priceCard">
          <h1 className="cardHeading">Premium plan</h1>
          <p className="cardSubHeading">Customizable financial management</p>

          <div className="flex flex-row items-end pb-2 border-b border-slate-500">
            <h1 className="cardPrice">{isMonthly ? "$19.99" : "$49.99"}</h1>
            <p className="font-light text-sm">
              {" "}
              {isMonthly ? "/month" : "/year"}
            </p>
          </div>

          <div className="cardTextGrp mt-3">
            <img src={tick} alt="tick" />
            <p className="cardText ">All features of Basic plan</p>
          </div>
          <div className="cardTextGrp">
            <img src={tick} alt="tick" />
            <p className="cardText ">Advanced portfolio diversification</p>
          </div>
          <div className="cardTextGrp">
            <img src={tick} alt="tick" />
            <p className="cardText ">Priority customer support</p>
          </div>
          <div className="cardTextGrp">
            <img src={tick} alt="tick" />
            <p className="cardText ">Quarterly investment webinars </p>
          </div>
          <div className="cardTextGrp">
            <img src={tick} alt="tick" />
            <p className="cardText ">Customizable investment alerts</p>
          </div>

          <button className="cardBtn">start 7 days trial</button>
        </div>

        <div className="priceCard">
          <h1 className="cardHeading">Elite plan</h1>
          <p className="cardSubHeading">
            VIP and pinnacle of financial empowerment...
          </p>

          <div className="flex flex-row items-end pb-2 border-b border-slate-500">
            <h1 className="cardPrice">{isMonthly ? "$29.99" : "$299.99"}</h1>
            <p className="font-light text-sm">
              {isMonthly ? "/month" : "/year"}
            </p>
          </div>

          <div className="cardTextGrp mt-3">
            <img src={tick} alt="tick" />
            <p className="cardText ">All features of premium plan</p>
          </div>
          <div className="cardTextGrp">
            <img src={tick} alt="tick" />
            <p className="cardText ">Unlimited access to financial tools</p>
          </div>
          <div className="cardTextGrp">
            <img src={tick} alt="tick" />
            <p className="cardText ">
              Dedicated financial advisor consultation
            </p>
          </div>
          <div className="cardTextGrp">
            <img src={tick} alt="tick" />
            <p className="cardText ">Exclusive access to premium trends</p>
          </div>
          <div className="cardTextGrp">
            <img src={tick} alt="tick" />
            <p className="cardText ">VIP invitation to annual summit event</p>
          </div>

          <button className="cardBtn">get started</button>
        </div>
      </div>
    </section>
  );
};

export default Section3;
