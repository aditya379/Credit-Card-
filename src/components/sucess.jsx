import React from 'react';

const sucess = ({ handleSuccessClick }) => {
  return (
    <div className="success flex md:ml-80 ml-0 flex-col gap-5 justify-center items-center w-[500px] h-[300px]">
      <img src="./images/icon-complete.svg" alt="sucess" className='w-[60px]'/>
      {/* Success message content */}
      <h1 className="text-2xl">THANK YOU!</h1>
      <p className='text-sm text-gray-500' >We've added your card details</p>
      <button className="btn bg-black text-white w-[100%] rounded-md p-2" onClick={handleSuccessClick}>
        Continue
      </button>
    </div>
  );
}

export default sucess;