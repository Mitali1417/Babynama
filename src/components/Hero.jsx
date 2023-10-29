import React from "react";
import doctor from "../assets/doctor.svg";
import whatsapp from "../assets/whatsapp.svg";

const Hero = () => {
  return (
    <>
      <div className="flex-1 w-full relative h-full flex flex-col justify-start items-center">
        <div className="w-[70%]  flex flex-col justify-center items-center">
          <div className="sticky mt-[4rem] rounded-t-full z-0 w-[17rem] h-[25rem] bg-gradient-to-tr from-shade2 to-shade1" />
          <img
            src={doctor}
            className="sticky img-shadow -mt-[23rem] z-10 h-[25rem]"
            alt="doctor"
          />
          <div className="sticky z-[10] -mt-[7rem] -ml-[3rem] w-[38rem] h-[10rem] blur-[25px] bg-white " />
        </div>
        <h1 className="text-[3rem] sticky z-[10] -mt-[4rem] font-extrabold font-Varela text-shade4">
          Baby
          <span className="bg-gradient-to-tr from-shade4 via-shade3 to-shade3 bg-clip-text text-transparent">
            nama
          </span>
        </h1>
        <h2 className="text-[1.5rem] my-[0.5rem] text-center font-bold text-shade2 sticky z-[10] font-Roboto ">
          Step into Solids Confidently With{" "}
          <span className="font-extrabold">Dr. Sumitra</span> and{" "}
          <span className="font-extrabold">Shaiphali Goyal</span>
        </h2>
        <p className="text-[0.85rem] font-Inter font-semibold text-shade1 text-center">
          Because the right start matters more than you might know for your
          baby's overall life
        </p>
        <button className="text-[1rem] font-bold font-Roboto bg-gradient-to-tr from-shade2 to-shade1 hover:scale-105 text-white py-[1rem] px-[1.5rem] my-[2rem] rounded-full ">
          Master Solids Now
        </button>
        <div className="fixed whatsapp shadow-2xl z-[20] bottom-[1.5rem] right-[1.5rem] bg-[#67C15E] rounded-full p-[0.5rem] w-[4rem] ">
          <img src={whatsapp} alt="Whatsapp" className=" w-full h-full" />
        </div>
      </div>
    </>
  );
};

export default Hero;
