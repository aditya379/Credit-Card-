import React from "react";

const Cards = ({ cardname, cardnumber, month, year, cvc }) => {
  return (
    <main className="cards z-10  absolute md:mt-24 mt-16 md:ml-16 sm:ml-[200px] ml-10 top-0">
      <div className="cardimg gap-2 absolute  flex md:flex-col flex-col-reverse md:gap-6">
        <div className="md:w-[350px] z-10 relative w-[280px] md:h-[200px] h-[150px]">
          <img src="./images/bg-card-front.png" alt="Front" />
          <div className="logo mt-5 ml-4">
            <img
              src="./images/card-logo.svg"
              alt="logo"
              className="w-[50px] absolute top-4 md:w-[80px]"
            />

            <div className="numbers absolute  md:top-28 top-16 w-[85%] text-white md:p-0 p-5 tracking-widest flex flex-col gap-2">
              <p className="md:text-2xl text-xl">{cardnumber}</p>
              <div className="names  flex justify-between">
                <p>{cardname}</p>
                {month && year && (
                  <p>
                    {month}/{year}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-[350px] md:left-16 right-8 md:top-0 top-10 z-0 relative  w-[280px] md:h-[200px] h-[150px]">
          <img src="./images/bg-card-back.png" alt="Back" />
          <div className="cvc absolute md:top-[83px] top-16 md:right-2 right-0">
          <p className="mr-10 text-white">{cvc}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cards;
