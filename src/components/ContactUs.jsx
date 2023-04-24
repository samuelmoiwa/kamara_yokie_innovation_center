import React from "react";
import { useForm } from "react-hook-form";
import { HiUserCircle, HiMail, HiOutlinePencilAlt } from "react-icons/hi";
import { IoIosSend } from "react-icons/io";
import { AiOutlineLoading } from "react-icons/ai";
import kyic_3 from "../images/kyic_3.png";

const ContactUs = () => {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    // Send form data to backend or API
    // Show success message
    reset();
  };

  const loading = watch("loading");

  return (
    <>
    <div className="bg-gray-100 w-full">
        <div
          className="
        w-full bg-cover bg-no-repeat h-96
        align-middle justify-center
        flex-col
        flex items-center text-center"
          style={{ backgroundImage: `url(${kyic_3})` }}
        >
          <h1 className="text-white text-5xl font-bold ">Contact Us</h1>
        </div>
      </div>

    <div className="w-full max-w-lg mx-auto pt-10 pb-10 py-2 sm:py-10">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiUserCircle className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className={`${
                errors.name ? "border-red-500" : ""
              } appearance-none border rounded-lg w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:border-blue-500`}
              type="text"
              placeholder="John Doe"
              {...register("name", { required: true })}
            />
          </div>
          {errors.name && (
            <p className="text-red-500 text-xs mt-1">Name is required</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <HiMail className="h-5 w-5 text-gray-400" />
            </div>
            <input
              className={`${
                errors.email ? "border-red-500" : ""
              } appearance-none border rounded-lg w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:border-blue-500`}
              type="email"
              placeholder="johndoe@example.com"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
          </div>
          {errors.email && (
            <p className="text-red-500 text-xs mt-1">Invalid email address</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Message <span className="text-red-500">*</span>
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 pt-3 flex items-start pointer-events-none">
              <HiOutlinePencilAlt className="h-5 w-5 text-gray-400" />
            </div>
            <textarea
              className={`${errors.message ? "border-red-500" : ""} appearance-none border rounded-lg w-full py-2 px-3 pl-10 text-gray-700 leading-tight focus:outline-none focus:border-blue-500`}
              placeholder="Write your message here"
              rows="6"
              {...register("message", { required: true })}
            />
          </div>
          {errors.message && (
            <p className="text-red-500 text-xs mt-1">Message is required</p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            className={`${
              loading ? "bg-blue-500 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-500"
            } text-white font-bold py-2 px-4 rounded-lg flex items-center focus:outline-none`}
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="mr-2">Loading</span>
                <AiOutlineLoading className="animate-spin h-5 w-5 text-white" />
              </>
            ) : (
              <>
                <span>Submit</span>
                <IoIosSend className="ml-2 h-5 w-5" />
              </>
            )}
          </button>
        </div>
        <input type="hidden" value={loading} {...register("loading")} />
      </form>
    </div>
    </>
  );
};

export default ContactUs;
