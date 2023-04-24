import React, { useState } from "react";

function JoinStudentProgramForm() {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [about, setAbout] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      firstName,
      middleName,
      lastName,
      schoolName,
      email,
      phone,
      address,
      about,
    });
    // Do something with the form data
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto sm:px-6 lg:px-0">
      <div className="sm:px-4">
        <div className="my-4 mx-2">
          <label
            htmlFor="firstName"
            className="block mb-2 font-medium text-gray-700"
          >
            First Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div className="my-4 mx-2">
          <label
            htmlFor="middleName"
            className="block mb-2 font-medium text-gray-700"
          >
            Middle Name
          </label>
          <input
            type="text"
            id="middleName"
            name="middleName"
            value={middleName}
            onChange={(event) => setMiddleName(event.target.value)}
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div className="my-4 mx-2">
          <label
            htmlFor="lastName"
            className="block mb-2 font-medium text-gray-700"
          >
            Last Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div className="my-4 mx-2">
          <label
            htmlFor="schoolName"
            className="block mb-2 font-medium text-gray-700"
          >
            School Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="schoolName"
            name="schoolName"
            value={schoolName}
            onChange={(event) => setSchoolName(event.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div className="my-4 mx-2">
          <label htmlFor="email" className="block mb-2 font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div className="my-4 mx-2">
          <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div className="my-4 mx-2">
          <label
            htmlFor="address"
            className="block mb-2 font-medium text-gray-700"
          >
            Address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          />
        </div>
        <div className="my-4 mx-2">
          <label htmlFor="about" className="block mb-2 font-medium text-gray-700">
            Tell us something about you <span className="text-red-500">*</span>
          </label>
          <textarea
            id="about"
            name="about"
            value={about}
            onChange={(event) => setAbout(event.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            rows="5"
          ></textarea>
        </div>
        <div className="my-4">
          <button
            type="submit"
            className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default JoinStudentProgramForm;
