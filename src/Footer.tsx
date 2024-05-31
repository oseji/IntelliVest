type footerProp = {
  logo: string;
};

const Footer = (props: footerProp) => {
  return (
    <footer className="px-5 md:px-20 pt-24 pb-5 bg-[#1D1C1C]">
      <div className="logoGrp">
        <img src={props.logo} alt="finGenius logo" />
        <h1 className="font-semibold text-xl">FinGenius</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-0 mt-10 border-b border-slate-500 pb-10 text-white">
        <div className="flex flex-row gap-10 flex-wrap">
          <div className="footerCol w-1/3 md:w-auto">
            <h1 className="colHeading">About</h1>

            <p className="colText">In-depth guide</p>
            <p className="colText">Video tutorial</p>
            <p className="colText">Case studies</p>
            <p className="colText">Blog</p>
            <p className="colText">Community</p>
            <p className="colText">FAQs</p>
          </div>

          <div className="footerCol  w-1/3 md:w-auto">
            <h1 className="colHeading">features</h1>

            <p className="colText">Privacy & Security</p>
            <p className="colText">Portfolio Diversification</p>
            <p className="colText">Expense Tracking</p>
            <p className="colText">Recommendation</p>
            <p className="colText">AI Technology</p>
          </div>

          <div className="footerCol  w-1/3 md:w-auto">
            <h1 className="colHeading">contact</h1>

            <p className="colText">@fingeniusask.net</p>
            <p className="colText">+81 00 99 77 0</p>
            <p className="colText">+91 55 77 00 1</p>
          </div>
        </div>

        <div>
          <h1 className="font-semibold mb-2">Get 7 Days Free Trial</h1>

          <p className="font-light text-sm w-[300px]">
            Sign up and get access to 7 days trial to the premium plan
          </p>

          <form className="mt-5 flex flex-row items-center gap-3">
            <input
              type="email"
              className="w-[224px] border border-slate-500 bg-transparent rounded-lg p-2 placeholder:font-light"
              placeholder="Email Address"
            />
            <button className="px-4 py-2 rounded-lg bg-[#938888] hover:scale-105 transition ease-in-out duration-150">
              Get started
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between pt-5 gap-3 md:gap-0 text-white">
        <p className="font-light text-sm">
          Copyright @2022 All Rights Reserved
        </p>

        <div className="flex flex-row items-center justify-between md:justify-end gap-5">
          <p className="font-light text-sm">FAQs</p>
          <p className="font-light text-sm">Terms & Conditions</p>
          <p className="font-light text-sm">Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
