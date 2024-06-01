import { SyntheticEvent, useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import downArrow from "./assets/down arrow.png";

const Faq = () => {
  const faqRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const [clickedFaq, setClickedFaq] = useState<number>(0);

  //this function handles toggling the clicked faqNumber
  const toggleFaq = (e: SyntheticEvent) => {
    e.preventDefault();

    const faqNum = e.currentTarget.getAttribute("data-value");

    setClickedFaq((prevNum) => {
      let newNum = prevNum;

      if (faqNum === "1") {
        newNum = 1;
      } else if (faqNum === "2") {
        newNum = 2;
      } else if (faqNum === "3") {
        newNum = 3;
      } else if (faqNum === "4") {
        newNum = 4;
      } else if (faqNum === "5") {
        newNum = 5;
      } else if (faqNum === "6") {
        newNum = 6;
      }

      return newNum;
    });
  };

  //this useEffect handles the visual toggling of the faq after the clickedFaq number changes
  useEffect(() => {
    console.log(clickedFaq);

    faqRefs.forEach((element, id) => {
      const faq = element.current;

      if (id + 1 === clickedFaq) {
        faq?.classList.toggle("hiddenAnswer");
      } else if (id + 1 !== clickedFaq) {
        faq?.classList.add("hiddenAnswer");
      }
    });
  }, [clickedFaq]);

  return (
    <section className="relative">
      <div className="flex flex-col md:flex-row items-start lg:justify-between gap-10 lg:gap-20 ">
        <div>
          <h1 className="capitalize text-3xl font-bold">
            Frequently Asked Questions
          </h1>

          <p className="mt-3">
            Find answers to commonly asked questions about our platform services
            and features.
          </p>
        </div>

        <div className="faqGrp">
          <div className="faq">
            <div className="faqHeading" onClick={toggleFaq} data-value={1}>
              <h1 className="font-bold">
                What is your platform’s primary focus?
              </h1>
              <img src={downArrow} alt="down arrow" />
            </div>

            <div className="faqAnswer hiddenAnswer" ref={faqRefs[0]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium eaque officia perferendis ad, expedita adipisci
              quisquam aspernatur facere reiciendis est. Sequi nesciunt expedita
              nemo dolor, quae illum quasi amet iusto!
            </div>
          </div>

          <div className="faq">
            <div className="faqHeading" onClick={toggleFaq} data-value={2}>
              <h1 className="font-bold">
                How does automatic expense tracking work?
              </h1>
              <img src={downArrow} alt="down arrow" />
            </div>

            <div className="faqAnswer hiddenAnswer" ref={faqRefs[1]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium eaque officia perferendis ad, expedita adipisci
              quisquam aspernatur facere reiciendis est. Sequi nesciunt expedita
              nemo dolor, quae illum quasi amet iusto!
            </div>
          </div>

          <div className="faq">
            <div className="faqHeading" onClick={toggleFaq} data-value={3}>
              <h1 className="font-bold">
                How does portfolio diversification benefit me?
              </h1>
              <img src={downArrow} alt="down arrow" />
            </div>

            <div className="faqAnswer hiddenAnswer" ref={faqRefs[2]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium eaque officia perferendis ad, expedita adipisci
              quisquam aspernatur facere reiciendis est. Sequi nesciunt expedita
              nemo dolor, quae illum quasi amet iusto!
            </div>
          </div>

          <div className="faq">
            <div className="faqHeading" onClick={toggleFaq} data-value={4}>
              <h1 className="font-bold">
                Is my financial data secure on your platform?
              </h1>
              <img src={downArrow} alt="down arrow" />
            </div>

            <div className="faqAnswer hiddenAnswer" ref={faqRefs[3]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium eaque officia perferendis ad, expedita adipisci
              quisquam aspernatur facere reiciendis est. Sequi nesciunt expedita
              nemo dolor, quae illum quasi amet iusto!
            </div>
          </div>

          <div className="faq">
            <div className="faqHeading" onClick={toggleFaq} data-value={5}>
              <h1 className="font-bold">
                What support options are available to users?
              </h1>
              <img src={downArrow} alt="down arrow" />
            </div>

            <div className="faqAnswer hiddenAnswer" ref={faqRefs[4]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium eaque officia perferendis ad, expedita adipisci
              quisquam aspernatur facere reiciendis est. Sequi nesciunt expedita
              nemo dolor, quae illum quasi amet iusto!
            </div>
          </div>

          <div className="faq">
            <div className="faqHeading" onClick={toggleFaq} data-value={6}>
              <h1 className="font-bold">
                Can i upgrade or downgrade my subscription plan?
              </h1>
              <img src={downArrow} alt="down arrow" />
            </div>

            <div className="faqAnswer hiddenAnswer" ref={faqRefs[5]}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium eaque officia perferendis ad, expedita adipisci
              quisquam aspernatur facere reiciendis est. Sequi nesciunt expedita
              nemo dolor, quae illum quasi amet iusto!
            </div>
          </div>
        </div>
      </div>

      <div className="getStartedSection">
        <motion.h1
          className="md:text-4xl text-lg font-bold w-1/2  md:w-[412px]"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{
            opacity: 1,
            y: 0,
            transition: { delay: 0.15, duration: 0.5 },
          }}
        >
          Your Money, Your Rules; Powerful Insights Awaits.
        </motion.h1>

        <button className="px-4 py-2 rounded-lg hover:scale-110 transition ease-in-out duration-150 bg-[#938888]">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Faq;
