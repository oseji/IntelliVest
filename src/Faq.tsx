import { SyntheticEvent, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import downArrow from "./assets/down arrow.png";

gsap.registerPlugin(ScrollTrigger);

const Faq = () => {
  const textRef = useRef(null);
  const faqRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const toggleFaq = (e: SyntheticEvent) => {
    e.preventDefault();

    const faqNum = Number(e.currentTarget.getAttribute("data-value"));

    faqRefs.forEach((element, id) => {
      const faq = element.current;

      if (id + 1 === faqNum) {
        faq?.classList.toggle("hiddenAnswer");
      } else if (id + 1 !== faqNum) {
        faq?.classList.add("hiddenAnswer");
      }
    });
  };

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 150 },
      {
        y: 0,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          end: "top 70%",
          scrub: 3,
        },
      }
    );
  }, []);

  return (
    <section className="relative mt-10 xl:mt-16">
      <div className="flex flex-col lg:flex-row items-start lg:justify-between gap-10 lg:gap-20 ">
        <div>
          <h1 className="capitalize mx-auto text-2xl md:text-3xl xl:text-4xl font-bold">
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
        <h1
          className="md:text-4xl text-lg font-bold w-1/2  md:w-[412px]"
          ref={textRef}
        >
          Your Money, Your Rules; Powerful Insights Awaits.
        </h1>

        <button className="px-4 py-2 rounded-lg hover:scale-110 transition ease-in-out duration-150 bg-[#938888]">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Faq;
