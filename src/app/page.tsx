import Image from "next/image";
import logo from "../../public/download-removebg-preview.png";
import { Input } from "postcss";
import pic1 from "../../public/market-be57f30bfb32b297a04a00e2cf2f1adbaecfbde7a8816827f1d8f2a219727bea.svg";
import pic2 from "../../public/pic2.svg";
import pic3 from "../../public/pic3.svg";
import pic4 from "../../public/pic4.svg";
import l1 from "../../public/l1.svg";
import l2 from "../../public/l2.svg";
import l3 from "../../public/l3.svg";
import l4 from "../../public/l4.svg";
import l5 from "../../public/l5.svg";
import l6 from "../../public/l6.svg";
import l7 from "../../public/l7.svg";
import l8 from "../../public/l8.svg";
import l9 from "../../public/l9.svg";
import l10 from "../../public/l10.svg";
import { Plus } from "lucide-react";
import Lower from "./components/lower/page";
import Middle from "./components/middle/page";



export default function Home() {
 
  return (
    <div className="bg-gradient-to-b from-sky-300 to-white h-96 ">
      <div className="  ">
        <div className="text-3xl   font-extrabold flex justify-center items-center pt-5">
          <Image src={logo} alt="logo" width={100} className="translate-x-5" />
          <i>shopify</i>
        </div>
        <div className="">
          <h1 className=" font-bold flex justify-center text-center mt-10 text-5xl flex-wrap  lg:text-7xl mx-5 lg:mx-60">
            Bring your ideas to life for $1/month
          </h1>
        </div>
        <p className="text-lg lg:text-2xl text-center flex justify-center mt-10 lg:mx-24 mx-5 ">
          The future of business is yours to shape. Sign up for a free trial and
          enjoy 3 months of Shopify for $1/month on select plans.
        </p>
        <div className="flex justify-center  mt-10">
          <div className="flex justify-evenly h-auto w-auto rounded-full p-2 text-lg outline outline-2 flex-wrap">
            <input
              className="bg-transparent outline-0 ml-5  "
              placeholder="Enter your email address "
            ></input>
            <button className="bg-black font-extrabold w-44 h-12 p-1 text-lg text-white rounded-full  ">
              Start free trail
            </button>
          </div>
        </div>
      </div>
      <Middle />
      <Lower/>
    </div>
  );
}

