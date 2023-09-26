import Image from "next/image";

import l1 from "../../../../public/l1.svg";
import l2 from "../../../../public/l2.svg";
import l3 from "../../../../public/l3.svg";
import l4 from "../../../../public/l4.svg";
import l5 from "../../../../public/l5.svg";
import l6 from "../../../../public/l6.svg";
import l7 from "../../../../public/l7.svg";
import l8 from "../../../../public/l8.svg";
import l9 from "../../../../public/l9.svg";
import l10 from "../../../../public/l10.svg";

const Lower = () => {
  return (
    <div>
      <div className="flex justify-evenly flex-wrap mx-36 ">
        <Image src={l1} alt="image" className="my-5" />
        <Image src={l2} alt="image" className="my-5" />

        <Image src={l3} alt="image" className="my-5" />

        <Image src={l4} alt="image" className="my-5" />

        <Image src={l5} alt="image" className="my-5" />

        <Image src={l6} alt="image" className="my-5" />

        <Image src={l7} alt="image" className="my-5" />

        <Image src={l8} alt="image" className="my-5" />

        <Image src={l9} alt="image" className="my-5" />

        <Image src={l10} alt="image" className="my-5" />
      </div>
      <div className="border-t-2 border-gray-300 m-10 "></div>
      <h1 className=" font-bold flex justify-center text-center mt-10 flex-wrap  lg:text-5xl ">
        Shopify is better than any other platform we have played with, and we
        have played with them all.
      </h1>
      <p className="text-2xl text-center m-20">
        Jonathon Bayme, CEO of Theory11
      </p>
      <div className="mt-20  bg-emerald-900 ">
        <h1 className="text-5xl flex justify-center pt-20 pb-10 font-bold text-white">
          Build your dream business for $1/month
        </h1>
        <p className="text-2xl text-center text-white">
          Start your free trial and enjoy 3 months of Shopify for $1/month on
          select plans.
        </p>
        <div className="flex justify-evenly h-auto w-auto my-10 p-3 bg-white rounded-full mx-96 text-lg outline outline-2 flex-wrap">
          <input
            className="bg-transparent outline-0 ml-5  "
            placeholder="Enter your email address "
          ></input>
          <button className="bg-black font-extrabold w-44 h-12 p-1 text-lg text-white rounded-full  ">
            Start free trail
          </button>
        </div>
        <p className="flex justify-center text-white mb-10">
          Try Shopify free for 3 days, no credit card required. By entering your
          email, you agree to receive marketing emails from Shopify.
        </p>
        <div className="border-t-2 border-gray-300 mt-20 "></div>
      </div>
      <div>
        <h1 className="text-6xl font-bold mx-28 mt-10">FAQ</h1>
        <div className="mx-56">
          <div>
            <div className="flex justify-between items-end">
              <h1 className="text-3xl font-bold mt-20">
                What is Shopify and how does it work?
              </h1>
              <div className="bg-sky-200 w-10 h-10 rounded-full text-3xl hover:bg-slate-800 flex justify-center items-center">
                +
              </div>
            </div>
            <div className="border-t-2 border-gray-300 mt-10 "></div>
          </div>
          <div>
            <div className="flex justify-between items-end">
              <h1 className="text-3xl font-bold mt-20">
                How much does Shopify cost?
              </h1>
              <div className="bg-sky-200 w-10 h-10 rounded-full hover:bg-slate-800 flex text-3xl justify-center items-center">
                +
              </div>
            </div>
            <div className="border-t-2 border-gray-300 mt-10 "></div>
          </div>
          <div>
            <div className="flex justify-between items-end">
              <h1 className="text-3xl font-bold mt-20">
                Can I use my own domain name with Shopify?
              </h1>
              <div className="bg-sky-200 w-10 h-10 rounded-full hover:bg-slate-800 flex justify-center text-3xl items-center">
                +
              </div>
            </div>
            <div className="border-t-2 border-gray-300 mt-10 "></div>
          </div>
          <div>
            <div className="flex justify-between items-end">
              <h1 className="text-3xl font-bold mt-20">
                Do I need to be a designer or developer to use Shopify?
              </h1>
              <div className="bg-sky-200 w-10 h-10 rounded-full hover:bg-slate-800 flex justify-center items-center text-3xl">
                +
              </div>
            </div>
            <div className="border-t-2 border-gray-300 mt-10 "></div>
          </div>
          <div className="flex justify-evenly m-20">
            <p>
              <button>
                <u>Terms of Service</u>
              </button>
            </p>
            <p>
              <button>
                <u>Privacy Policy</u>
              </button>
            </p>
            <p>
              <button>
                <u>Sitemap</u>
              </button>
            </p>
          </div>
          <div className="border-t-2 border-gray-300 m-10 "></div>
        </div>
      </div>
    </div>
  );
};

export default Lower;
