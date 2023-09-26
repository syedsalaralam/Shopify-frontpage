import Image from "next/image";
import pic1 from "../../../../public/market-be57f30bfb32b297a04a00e2cf2f1adbaecfbde7a8816827f1d8f2a219727bea.svg";
import pic2 from "../../../../public/pic2.svg";
import pic3 from "../../../../public/pic3.svg";
import pic4 from "../../../../public/pic4.svg";


const Middle = () => {
  return (
    <div>
      <p className="mt-10 flex justify-center text-center  mx-80">
        Try Shopify free for 3 days, no credit card required. By entering your
        email, you agree to receive marketing emails from Shopify.
      </p>
      <div className="flex justify-center">
        <Image src={pic1} alt="1" className="mt-20" width={500} />
      </div>
      <div className="grid grid-cols-3 mt-10 text-1xl mx-20 ">
        <div>
          <Image src={pic2} alt="2" width={80} />
          <h1 className="text-2xl font-bold my-5 ">Customizable templates</h1>
          <p className="text-lg">
            Free website designs to launch your store quickly and easily.
          </p>
        </div>
        <div>
          <Image src={pic3} alt="3" width={80} />
          <h1 className="text-2xl font-bold my-5">All in one</h1>
          <p className=" text-lg">
            Shopify takes care of everything from marketing and payments to
            secure transactions and shipping.
          </p>
        </div>
        <div>
          <Image src={pic4} alt="4" width={80} />
          <h1 className="text-2xl font-bold my-5">
            A safe and efficient platforms
          </h1>
          <p className="text-lg">
            Millions of users trust Shopify to manage their online stores.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Middle;
