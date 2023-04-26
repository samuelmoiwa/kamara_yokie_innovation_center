/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/style-prop-object */
import { React } from "react";
import ProgramsCardList from "./StudentProgramCard";
import JoinStudentProgramForm from "./JoinOurStudentProgramForm";
import kyic_3 from "../images/kyic_3.png";
import join_our_student_program from "../images/join_our_program.svg";

export default function StudentPrograms() {
  return (
    <div className="">
      <div className="bg-gray-100 w-full">
        <div
          className="
        w-full bg-cover bg-no-repeat h-96
        align-middle justify-center
        flex-col
        flex items-center text-center"
          style={{ backgroundImage: `url(${kyic_3})` }}
        >
          <h1 className="text-white text-5xl font-bold ">Student Programs</h1>
        </div>
      </div>

      {/* <!--Container--> */}
      <section class="bg-white border-b py-8">
        <div class="container max-w-5xl mx-auto m-8">
          <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Promoting STEM Education
          </h2>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-10/12 sm:w-1/2 p-6 ">
              <h3 class="text-2xl text-gray-800 font-bold leading-none mb-3">
                Engaging with students for the advancement of STEM
              </h3>
              <p class="text-gray-600 mb-8 text-justify">
                The Kamara Yokie Innovation Center (KYIC) is a youth-led center
                in Sierra Leone that is committed to promoting STEM education
                and developing young entrepreneurs in Sierra Leone and across
                Africa. The center is actively engaging with students to advance
                STEM education through a variety of programs and initiatives.{" "}
                <br />
                <br />
                One of the primary ways that KYIC is engaging with students is
                through its STEM education program. This program is designed to
                provide students with hands-on experience in science,
                technology, engineering, and mathematics. Students are
                introduced to the fundamentals of these subjects and are
                encouraged to explore their interests and passions.
                <br />
                <br />
                The STEM education program includes a range of activities,
                including workshops, seminars, and mentorship sessions. These
                activities are designed to provide students with the knowledge
                and skills they need to excel in STEM subjects. The program also
                includes practical activities, such as building robots and
                conducting experiments, to help students apply what they have
                learned.
                <br />
                <br />
                KYIC is also engaging with students through its entrepreneurship
                program. This program is designed to help students develop the
                skills and knowledge they need to become successful
                entrepreneurs. Students are introduced to the basics of
                entrepreneurship and are encouraged to think creatively and
                innovatively.
                <br />
                <br />
              </p>
            </div>
            <div class="w-full sm:w-1/2 p-6 ">
              <p class="text-gray-600 mb-8 text-justify">
                The entrepreneurship program includes workshops, seminars, and
                mentorship sessions. These activities are designed to help
                students develop their business ideas and turn them into viable
                ventures. The program also provides students with practical
                skills, such as marketing, financial management, and business
                planning. <br />
                <br />
                In addition to its STEM education and entrepreneurship programs,
                KYIC is also engaging with students through its outreach
                initiatives. These initiatives are designed to promote STEM
                education and entrepreneurship in local schools and communities.
                KYIC is partnering with schools and community organizations to
                provide access to its programs and resources. <br />
                <br />
                KYIC is also engaging with students through its online platform,
                which provides access to a range of resources, including
                educational videos, tutorials, and interactive activities. The
                online platform is designed to be accessible to students across
                Africa, providing them with the opportunity to learn and grow
                regardless of their location. <br />
                <br />
                The Kamara Yokie Innovation Center (KYIC) is actively engaging
                with students to advance STEM education in Sierra Leone and
                across Africa. Through its STEM education and entrepreneurship
                programs, outreach initiatives, and online platform, KYIC is
                providing students with the knowledge, skills, and resources
                they need to succeed in the 21st century. <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white border-b py-6">
        <div class="container max-w-7xl mx-auto m-8 p-6">
          <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 mb-10">
            Student Programs
          </h2>
          <ProgramsCardList />
        </div>
      </section>

      <section class="bg-white border-b py-8 bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${join_our_student_program})` }}
      >
        <div class="container max-w-5xl mx-auto m-8">
          <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800 mb-10">
            Sign up for our student program
          </h2>
          <JoinStudentProgramForm />
        </div>
      </section>
    </div>
  );
}
