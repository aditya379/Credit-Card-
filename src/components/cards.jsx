import React from 'react';

const Cards = ({ cardname, cardnumber, month, year, cvc }) => {
  return (
    <main className="cards z-10 absolute mt-12 md:ml-16 sm:ml-[180px] ml-10 top-0">
      <div className="cardimg gap-2 flex md:flex-col flex-col-reverse md:gap-6">
        <div className="md:w-[350px] w-[280px] md:h-[200px] h-[150px] flex flex-col md:p-4 p-0 justify-between bg-center bg-cover rounded-md bg-[url('./images/bg-card-front.png')]">
          <div className="logo mt-5 ml-4">
            <img src="./images/card-logo.svg" alt="logo" className="w-[50px] md:w-[80px]" />
          </div>
          <div className="numbers text-white md:p-0 p-5 tracking-widest flex flex-col gap-2">
            <p className='md:text-2xl text-xl'>{cardnumber}</p>
            <div className="names  flex justify-between">
              <p>{cardname}</p>
              {month && year && <p>{month}/{year}</p>}
            </div>
          </div>
        </div>
        <div className="md:w-[350px]  w-[280px] md:h-[200px] h-[150px]  flex justify-end items-center bg-center md:ml-20 ml-10  bg-cover rounded-md  bg-[url('./images/bg-card-back.png')]">
          <p className='mr-10 text-white'>{cvc}</p>
        </div>
      </div>
    </main>
  );
};

export default Cards;
