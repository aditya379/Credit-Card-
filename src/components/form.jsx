import React from 'react'
import { useForm } from "react-hook-form";
const form = ({ handleFormData}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
      // Pass form data to parent component
      handleFormData(data);
      
      // Reset form after successful submission
      reset();
    };
  return (
    <form className="form flex z-10 flex-col md:ml-80 ml-0 p-2 gap-8  md:w-[480px] w-[450px]" onSubmit={handleSubmit(onSubmit)}>
    <div className="cardholdername flex flex-col gap-2">
      <label htmlFor="cardname">Cardholder name</label>
      <input
        type="text"
        placeholder="CardHolder Name"
        id="cardname"
        className="md:w-[450px] w-[300px] errorHandle"
        {...register("cardname", { required: "Cardholder name is required", minLength: { value: 3, message: "Please enter atleast 3 characters" },
        pattern: { value: /^[a-zA-Z]/, message: "Please enter a valid character" } })}
      />
      {errors.cardname && <span className="error">{errors.cardname.message}</span>}
    </div>
    <div className=" cardnumber flex flex-col gap-4">
      <label htmlFor="cardnumber">Card Number</label>
      <input
        type="text"
        placeholder="Card Number"
        id="cardnumber"
        className="md:w-[450px] w-[300px] errorHandle"
        {...register("cardnumber", {
          required: "Card number is required",
          pattern: { value: /^([0-9]{16})$/, message: "Please enter a valid card number" },
          maxLength: { value: 16, message: "Please enter a valid length of card number" },
          minLength: { value: 16, message: "Please enter a valid length of card number" }
        })}
      />
      {errors.cardnumber && <span className="error">{errors.cardnumber.message}</span>}
    </div>
    <div className="dates flex items-center gap-5">
      <div className="div flex flex-col gap-1 ">
        <label className="block" htmlFor="mm">
          Exp. Date (MM/YY)
        </label>
        <div className="dates items-center flex gap-2">
          <input
            type="text"
            placeholder="MM"
            id="mm"
            className="w-[80px] errorHandle"
            {...register("month", { required: "Month is required", maxLength: { value: 2, message: "Please enter a valid month" },
            minLength: { value: 2, message: "Please enter a valid month" },
            pattern: { value: /^[0-9]+$/, message: "Please enter a valid number" } })}
          />
          <input
            type="text"
            placeholder="YY"
            id="yy"
            className="w-[80px]  errorHandle"
            {...register("year", { required: "Year is required", maxLength: { value: 2, message: "Please enter a valid year" },
            minLength: { value: 2, message: "Please enter a valid year" },
            pattern: { value: /^[0-9]+$/, message: "Please enter a valid number" } })}
          />
        </div>
        {(errors.month || errors.year) && <span className="error">Enter valid MM and YY</span>}
      </div>
      <div className="errorHandle cvv flex gap-1  flex-col">
        <label htmlFor="cvc">CVC</label>
        <input
          type="text"
          placeholder="e.g. 123"
          id="cvc"
          className="w-[100px] errorHandle"
          {...register("cvc", { required: "CVC is required", maxLength: { value: 3, message: "Please enter a valid CVC" },
          minLength: { value: 3, message: "Please enter a valid CVC" },
          pattern: { value: /^[0-9]+$/, message: "Please enter a valid number" } })}
        />
        {errors.cvc && <span className="error">{errors.cvc.message}</span>}
      </div>
    </div>
    <button type="submit" className="bg-black p-3 rounded-md text-white">
      Confirm
    </button>
  </form>
  )
}

export default form
