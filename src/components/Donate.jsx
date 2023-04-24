import React from "react";
import { useState } from "react";
import axios from "axios";

function Donate() {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/donate", { amount, message });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
      <div className="max-w-2xl mx-auto text-center">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Donate
          </h2>
            <p className="mt-4 text-lg text-gray-500">
            At Kamara Yokie Innovation Centre (KYIC), we empower young people to unlock their potential
            through innovation and creativity. As a free youth-led innovation centre, we rely on your
            donations to provide resources, training and support to help young people succeed.
            Invest in the future of our community by donating to KYIC today.
            </p>
          </div>
        <div>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="amount" className="sr-only">
                Amount
              </label>
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm"
                placeholder="Leave a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-blue-500 group-hover:text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.02 5.407A1 1 0 012 4.828V3a1 1 0 011-1h14a1 1 0 011 1v1.828a1 1 0 01-.02.579l-7 12a1 1 0 01-.899.577h-.204a1 1 0 012-.577l-7-12zM3 5.236l6.65 11.568a1 1 0 00.7.432h.204a1 1 0 00.7-.432L17 5.236V4H3v1.236z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Donate
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Donate;
