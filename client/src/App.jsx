import { data } from "autoprefixer";
import React from "react";

import { useForm } from "react-hook-form";
const App = () => {
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const demo = (data) => {
    console.log(data);
    
  };
  return (
    <>
      <div className=" w-full  bg-black">
        <div className="container mx-auto  min-h-screen flex items-center justify-center">
          <form
            onSubmit={handleSubmit(demo)}
            className=" w-full max-w-lg py-8 px-12 rounded-xl shadow-lg shadow-red-800   flex flex-col gap-8"
          >
            <h2 className="text-white  text-center text-4xl tracking-wide font-extralight">
              Register Form
            </h2>
            <input
              id="name"
              {...register("name", {
                required: true,
                minLength: 2,
                maxLength: 16,
                pattern: /^[A-Za-z]+$/i
                
              })}
              className="border  py-2 px-4  text-white w-full  bg-transparent outline-none text-2xl border-gray-800 transition-all hover:rounded-md  focus:border-rose-950"
              type="text"
              placeholder="Enter name..."
            />
            {errors.name && errors.name.type === "required" && (
              <span className="text-white"> Ad hissesini daxil edin</span>
            )}
            {errors.name && errors.name.type === "minLength" && (
              <span className="text-white">Minimum 2 simvol daxil edin</span>
            )}
            {errors.name && errors.name.type === "maxLength" && (
              <span className="text-white"> Max 16 simvol daxil edin</span>
            )} 
            {errors.name && errors.name.type === "pattern" && (
              <span className="text-white"> Yalnız heriflerden isdifade edin</span>
            )} 
            <select
            id="gender" 
           
            {...register("name", {
              required: true,
            })}
            className="border  py-2 px-4  text-white w-full  bg-transparent outline-none text-2xl border-gray-800 transition-all hover:rounded-md  focus:border-rose-950"

            >
              <option value="">Choose Gender</option>
              <option value="male">Male</option>
              <option value="famale">Famale</option>

            </select>
            {errors.gender && errors.gender.type === "required" && (
              <span className="text-white"> Gender qeyd edin</span>
            )} 

            <input
            id="email"
            {...register("email", {
              required: true,
              minLength: 5,
              maxLength: 30,
              pattern: /\S+@\S+\.\S+/
            })}
            className="border  py-2 px-4  text-white w-full  bg-transparent outline-none text-2xl border-gray-800 transition-all hover:rounded-md  focus:border-rose-950"
            type="text"
            placeholder="Enter email..."
          />
          {errors.email && errors.email.type === "required" && (
            <span className="text-white"> Ad hissesini daxil edin</span>
          )}
          {errors.email && errors.email.type === "minLength" && (
            <span className="text-white">Minimum 5 simvol daxil edin</span>
          )}
          {errors.email && errors.email.type === "maxLength" && (
            <span className="text-white"> Max 30 simvol daxil edin</span>
          )}
          {errors.email && errors.email.type === "pattern" && (
            <span className="text-white"> Email sintaksisine uyğun yazın</span>
          )}
          <input
            id="age"
            {...register("age", {
              required: true,
              min: 18,
              max: 100,
              pattern: /^[0-9]+$/i,
            })}
            className="border  py-2 px-4  text-white w-full  bg-transparent outline-none text-2xl border-gray-800 transition-all hover:rounded-md  focus:border-rose-950"
            type="text"
            placeholder="Enter age..."
          />
          {errors.age && errors.age.type === "required" && (
            <span className="text-white"> Ad hissesini daxil edin</span>
          )}
          {errors.age && errors.age.type === "minLength" && (
            <span className="text-white">Minimum  18 yaş olmalıdı</span>
          )}
          {errors.age && errors.age.type === "maxLength" && (
            <span className="text-white"> Max 100 yaş olmalıdır</span>
          )}
          {errors.age && errors.age.type === "pattern" && (
            <span className="text-white"> age sintaksisine uyğun yazın</span>
          )}
           <input
            id="password"
            {...register("password", {
              required: true,
              minLength: 8,
              maxLength: 20,
            })}
            className="border  py-2 px-4  text-white w-full  bg-transparent outline-none text-2xl border-gray-800 transition-all hover:rounded-md  focus:border-rose-950"
            type="text"
            placeholder="Enter password..."
          />
          {errors.password && errors.password.type === "required" && (
            <span className="text-white"> Password hissesini daxil edin</span>
          )}
          {errors.password && errors.password.type === "minLength" && (
            <span className="text-white">Minimum 8 simvol daxil edin</span>
          )}
          {errors.password && errors.password.type === "maxLength" && (
            <span className="text-white"> Max 20 simvol daxil edin</span>
          )} <input
          id="resetPassword"
          {...register("resetPassword", {
            required: true,
            validate: (value) => value === watch("password")
          })}
          className="border  py-2 px-4  text-white w-full  bg-transparent outline-none text-2xl border-gray-800 transition-all hover:rounded-md  focus:border-rose-950"
          type="text"
          placeholder="Enter password..."
        />
        {errors.resetPassword && errors.resetPassword .type === "required" && (
          <span className="text-white"> Tekrar parolu daxil edin</span>
        )}
        {errors.resetPassword  && errors.resetPassword .type === "validate" && (
          <span className="text-white"> Tekrar parol düzgün deyil </span>
        )}
            <button
              type="submit"
              className=" text-white bg-rose-700 py-2 text-xl uppercase font-bold tracking-wider transition-all duration-300 hover:rounded-lg"
            >
              Submit{" "}
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default App;
