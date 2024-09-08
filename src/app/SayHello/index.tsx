import Link from "next/link";
import React from "react";

const SayHello = () => {
  return (
    <div className="say__hello__section h-screen bg-black  flex flex-row justify-center items-center">
      <Link href={"/ContactUs"}>
        <button
          id="say__hello__btn"
          className="say__hello__btn border-white hover:bg-red-600 hover:border-opacity-10 border-opacity-35 border h-[300px] w-[300px] md:h-[400px] md:w-[400px] lg:h-[400px] lg:w-[400px] rounded-full flex flex-col justify-center items-center"
        >
          <>
            <p className="text-center text-white font-thin text-2xl md:text-4xl lg:text-7xl">
              Say
            </p>
            <p className="text-center text-white font-thin text-2xl md:text-4xl lg:text-7xl">
              Hello
            </p>
          </>
        </button>
      </Link>
    </div>
  );
};

export default SayHello;
