// Background.js
import React from "react";
import Form from "./form";
import Success from "./sucess";

const Background = ({ handleFormData, showSuccess, handleSuccessClick }) => {

  return (
    <>
      <main className="background flex md:flex-row md:gap-0 gap-24 items-center flex-col">
        <section className="color md:w-1/4 w-[100%] ">
          <img
            src="./images/bg-main-desktop.png"
            alt="desktoop-bg"
            className=" h-screen w-[350px] md:block hidden"
          />
          <img
            src="./images/bg-main-mobile.png"
            alt="desktoop-bg"
            className=" md:hidden block imgMobile"
          />
        </section>
        <section className="blank flex justify-center items-center w-1/2">
          {showSuccess ? (
            <Success handleSuccessClick={handleSuccessClick} />
          ) : (
            <Form handleFormData={handleFormData} />
          )}
        </section>
      </main>
    </>
  );
};

export default Background;
