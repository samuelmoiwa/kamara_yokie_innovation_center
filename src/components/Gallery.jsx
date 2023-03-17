import React, { useState } from "react";
import ImagePopup from "./ImagePopup";
import kyic_3 from "../images/kyic_3.png";
import kyic1 from "../gallery/kyic1.jpg";
import kyic2 from "../gallery/kyic2.JPG";
import kyic3 from "../gallery/kyic3.JPG"
import kyic4 from "../gallery/kyic4.JPG"
import kyic5 from "../gallery/kyic5.JPG"
import kyic6 from "../gallery/kyic6.JPG"
import kyic7 from "../gallery/kyic7.JPG"
import kyic8 from "../gallery/kyic8.JPG"
import kyic9 from "../gallery/kyic9.JPG"
import kyic10 from "../gallery/kyic10.JPG"
import kyic11 from "../gallery/kyic11.JPG"
import kyic12 from "../gallery/kyic12.JPG"
import kyic13 from "../gallery/kyic13.JPG"
import kyic14 from "../gallery/kyic14.JPG"
import kyic15 from "../gallery/kyic15.JPG"
import kyic16 from "../gallery/kyic16.jpg"
import kyic17 from "../gallery/kyic17.JPG"
import kyic18 from "../gallery/kyic18.JPG"
import kyic19 from "../gallery/kyic19.JPG"
import kyic20 from "../gallery/kyic20.JPG"
import kyic21 from "../gallery/kyic21.JPG"
import kyic22 from "../gallery/kyic22.JPG"
import kyic24 from "../gallery/kyic24.JPG"
import kyic25 from "../gallery/kyic25.JPG"
import kyic26 from "../gallery/kyic26.JPG"
import kyic27 from "../gallery/kyic27.JPG"
import kyic28 from "../gallery/kyic28.JPG"
import kyic29 from "../gallery/kyic29.JPG"
import kyic30 from "../gallery/kyic30.jpg"
import kyic31 from "../gallery/kyic31.jpg"
import kyic32 from "../gallery/kyic32.jpg"
import kyic33 from "../gallery/kyic33.jpg"
import kyic34 from "../gallery/kyic34.jpg"
import kyic35 from "../gallery/kyic35.jpg"
import kyic36 from "../gallery/kyic36.jpg"
import kyic37 from "../gallery/kyic37.jpg"
import kyic38 from "../gallery/kyic38.jpg"
import kyic39 from "../gallery/kyic39.jpg"
import kyic40 from "../gallery/kyic40.jpg"
import kyic41 from "../gallery/kyic41.jpg"
import kyic42 from "../gallery/kyic42.jpg"
import kyic43 from "../gallery/kyic43.jpg"
import kyic44 from "../gallery/kyic44.jpg"
import kyic45 from "../gallery/kyic45.jpg"
import kyic46 from "../gallery/kyic46.jpg"
import kyic47 from "../gallery/kyic47.jpg"
import kyic48 from "../gallery/kyic48.jpg"
import kyic49 from "../gallery/kyic49.jpg"
import kyic50 from "../gallery/kyic50.jpg"
import kyic51 from "../gallery/kyic51.jpg"
import kyic53 from "../gallery/kyic53.jpg"
import kyic54 from "../gallery/kyic54.jpg"
import kyic55 from "../gallery/kyic55.jpg"
import kyic56 from "../gallery/kyic56.jpg"


const Gallery = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setShowPopup(true);
  };

  const images = [
    kyic1,
    kyic2, kyic3, kyic4, kyic5, kyic6, kyic7, kyic8, kyic9, kyic10, kyic11, kyic12,
    kyic13, kyic14, kyic15, kyic16, kyic17, kyic18, kyic19, kyic20, kyic21, kyic22, kyic24,
    kyic25, kyic26, kyic27, kyic28, kyic29, kyic30, kyic31, kyic32, kyic33, kyic34,
    kyic35, kyic36, kyic37, kyic38, kyic39, kyic40, kyic41, kyic42, kyic43, kyic44,
    kyic45, kyic46, kyic47, kyic48, kyic49, kyic50, kyic51, kyic53, kyic54,
    kyic55, kyic56,
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
