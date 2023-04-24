import React from "react";
import kyic11 from "../gallery/kyic11.JPG"
import kyic_3 from "../images/kyic_3.png";

const AboutUs = () => {
  return (
    <div>

      <div className="bg-gray-100 w-full">
        <div
          className="
        w-full bg-cover bg-no-repeat h-96
        align-middle justify-center
        flex-col
        flex items-center text-center"
          style={{ backgroundImage: `url(${kyic_3})` }}
        >
          <h1 className="text-white text-5xl font-bold ">About Us</h1>
        </div>
      </div>

      <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center pb-8">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Our Company
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
              OUR STORY
            </h3>
            <p className="text-gray-500 leading-relaxed text-justify">
            The Kamara Yokie Innovation Center (KYIC) is a first of its kind youth-owned and youth-led
            Innovation Center in Africa, which aims to create a safe multi-cultural space where innovators,
            creative minds, and problem solvers come together to create solutions to pressing challenges affecting
            local people. Using a human-centered problem solving approach, the Kamara Yokie
            Innovation Center uses 21st century entrepreneurial leadership and STEM education concepts to harness
            the untapped potentials  of young people.
            </p>
            <br />

            <p className="text-gray-500 leading-relaxed text-justify">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                MISSION
              </h3>
              To be recognized globally for assisting innovators and young people in achieving
              sustainable development and advancing the knowledge economy
              Establishing a working and learning environment where high school students can learn
              about and explore the fields of science, technology, engineering, and math
              Give children the chance to experiment, design, and develop utilizing robotic technology.
            </p>
            <br />

          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">
            IMPACT STATEMENT
            </h3>
            <p className="text-gray-500 leading-relaxed text-justify">
            Our center will foster collaboration and partnerships between educators, industry professionals,
            and community members, helping to bridge the gap between education and real-world applications. <br />
            Our competitions have provided an opportunity for students to develop their skills in problem-solving,
            critical thinking, and teamwork. <br />
            Our conference has provided a platform for attendees to learn about and engage with the latest advances
            in STEM fields. <br />
            The center will serve as a hub for STEM education and innovation in the community, providing access to
            resources and facilities that support hands-on-learning and experimentation. <br />
            </p>
            <br />

          </div>
        </div>




        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center items-center">
            <img
              src={kyic11} alt="image"
              width={500}
              height={500}
              className="rounded-md"
            />

          </div>
          <div>
          <p className="text-gray-500 leading-relaxed text-justify">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ACHIEVEMENTS SO FAR
              </h3>
              We have implemented an annual Conference “STEM for Us By Us” <br />
              Our STEM conferences over the last three years has brought together students,
              STEM educators, and business individuals. <br />
              We have leveraged knowledge and leadership in our pursuit of a strong STEM community by
              inspiring young minds and advancing the kind of science, math, and technology education
              that will assist young people move us to the next phase of realizing our vision. <br />
              We have established STEM clubs in 7 schools and 2 communities within and out of Freetown.
              Our STEM clubs have over 60 girls and 20 boys participating in our STEM programs which features
              coding, robotics etc <br />
              Three of our mentees were selected to represent Sierra Leone at last year’s First Robotics
              Competition In Geneva in which they ranked 110 out of 300 participants. <br />

            </p>
            <br />

            <p className="text-gray-500 leading-relaxed">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                FIVE YEAR PLANS
              </h3>
              In 5 years, we shall have <br />
              (1) a robust and inclusive STEM education program for girls, to increase the
              participation and representation of women in STEM fields. <br />
              (2) partnerships with leading tech companies and universities to provide students
              with access to cutting-edge technology and resources. <br />
              (3) a STEM education program relevant to the local context, cultural sensitivity
              and job market needs. <br />
              (4) a program that encourages and supports STEM entrepreneurship, providing students with the
              skills and resources they need to launch their own businesses. <br />

            </p>
            <br />

          </div>
        </div>
      </div>
    </div>



    </div>
  );
};

export default AboutUs;
