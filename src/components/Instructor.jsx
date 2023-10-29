import React from "react";
import drShaipaliG from "../assets/drShaiphali.webp";
import drSumitraM from "../assets/drSumitraM.webp";

const Instructor = () => {
  return (
    <>
      <div className="flex flex-1 relative w-full h-full">
        <div></div>
        <div className=" sticky z-[10] flex w-full h-full flex-col justify-center items-center">
          <div className="flex justify-center items-center flex-col backdrop-blur-md bg-shade1/50 m-[1rem] p-[2rem] rounded-[1rem] w-full h-full">
            <img
              src={drSumitraM}
              className="w-[50%] rounded-[2rem]"
              alt="drSumitraM"
            />
            <h3 className="font-Roboto mt-[1rem] drop-shadow-2xl font-semibold text-white text-[1.6rem] ">
              Dr. Sumitra Meena
            </h3>
            <h5 className="font-Inter uppercase font-semibold mb-[1rem] ">
              MBBS, MD Paediatrics
            </h5>
            <p className="font-Inter text-shade2 text-[0.85rem] font-semibold ">
              MBBS (Lady Hardinge College, Delhi)
            </p>
            <p className="font-Inter text-shade2 text-[0.85rem] font-semibold ">
              MD Pediatrics (Kalawati Hospital, Delhi)
            </p>
            <p className="font-Inter text-shade2 text-[0.85rem] font-semibold ">
              9 Years Experience
            </p>
            <p className="font-Inter text-shade2 text-[0.85rem] font-semibold ">
              Ex Resident, Safdarjung Hospital Delhi
            </p>
          </div>
          <div className="flex justify-center items-center flex-col backdrop-blur-md bg-shade1/50 m-[1rem] p-[2rem] rounded-[1rem] w-full h-full">
            <img
              src={drShaipaliG}
              className="w-[50%] rounded-[2rem]"
              alt="drShaipaliG"
            />
            <h3 className="font-Roboto mt-[1rem] drop-shadow-2xl font-semibold text-white text-[1.6rem] ">
              Shaiphali Goyal
            </h3>
            <h5 className="font-Inter uppercase font-semibold mb-[1rem] ">
              M.Sc in Food and Nutrition
            </h5>
            <p className="font-Inter text-shade2 text-[0.85rem] font-semibold ">
              Gold Medalist in M.Sc in Food and Nutritiond
            </p>
            <p className="font-Inter text-shade2 text-[0.85rem] font-semibold ">
              Helped thousands of mothers in 9+ years of experienced
            </p>
            <p className="font-Inter text-shade2 text-[0.85rem] font-semibold ">
              Certified IYCF Counsellor and Lactation Managementd
            </p>
            <p className="font-Inter text-shade2 text-[0.85rem] font-semibold ">
              Kalawati Saran Children Hospital (Delhi)d
            </p>
            <p className="font-Inter text-shade2 text-[0.85rem] font-semibold ">
              Worked with UNICEF and many organizations.
            </p>
          </div>
        </div>
        <div className="absolute z-0 bottom-0 w-[10rem] h-[10rem] -left-[4rem] rounded-full bg-shade1 " />
        <div className="absolute z-0 top-[9rem] w-[12rem] h-[12rem] -right-[4rem] rounded-full bg-shade1 " />
      </div>
    </>
  );
};

export default Instructor;
