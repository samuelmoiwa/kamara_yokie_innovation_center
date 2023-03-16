import React, { useState } from "react";
import ImagePopup from "./ImagePopup";
import kyic_3 from "../images/kyic_3.png";

const Gallery = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowPopup(true);
  };

  const images = [
    "https://placeimg.com/640/480/animals",
    "https://placeimg.com/640/480/arch",
    "https://placeimg.com/640/480/nature",
    "https://placeimg.com/640/480/people",
    "https://placeimg.com/640/480/animals",
    "https://placeimg.com/640/480/arch",
    "https://placeimg.com/640/480/nature",
    "https://placeimg.com/640/480/people",
    "https://placeimg.com/640/480/animals",
    "https://placeimg.com/640/480/arch",
    "https://placeimg.com/640/480/nature",
    "https://placeimg.com/640/480/people",
  ];

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
          <h1 className="text-white text-5xl font-bold ">Image Gallery</h1>
        </div>
      </div>

      <section class="bg-white border-b py-8">
        <div class="container max-w-5xl mx-auto m-8">
          <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Photos of our activities
          </h2>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-10/12 sm:w-1/2 p-6 ">
              <p class="text-gray-600 mb-8">

                The Kamara Yokie Innovation Centre (KYIC) photo gallery showcases the vibrant and
                innovative work that takes place at our centre. From community events and educational
                workshops to entrepreneurial ventures and cutting-edge research, the gallery captures
                the energy and passion of our community. <br /> <br />

                Our gallery features a wide range of high-quality images that highlight the diverse range
                of activities that take place at KYIC. Whether you're interested in technology and innovation,
                social entrepreneurship, or community development, our gallery has something for everyone.
              </p>
            </div>
            <div class="w-full sm:w-1/2 p-6 ">
              <p class="text-gray-600 mb-8">

                At KYIC, we believe that visual storytelling is a powerful tool for inspiring change
                and creating impact. We hope that our photo gallery will not only showcase the incredible
                work that takes place at our centre but also inspire others to get involved and make a
                difference in their communities. <br /> <br />

                We invite you to explore our photo gallery and experience the KYIC community for yourself.
                Thank you for your interest in our work, and we look forward to connecting with you soon.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto py-8">
        <div className="flex flex-wrap justify-center items-center -mx-4">
          {images.map((imageSrc, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 p-4 cursor-pointer hover:opacity-75 transition duration-300 ease-in-out"
              onClick={() => handleImageClick(imageSrc)}
            >
              <img
                className="w-full rounded-lg shadow-lg"
                src={imageSrc}
                alt={`Image ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {showPopup && (
          <ImagePopup
            imageSrc={selectedImage}
            closePopup={() => setShowPopup(false)}
          />
        )}
      </div>
    </>
  );
};

export default Gallery;
