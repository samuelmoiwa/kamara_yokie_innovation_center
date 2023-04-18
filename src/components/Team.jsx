import React from "react";
import TeamMember from "../components/TeamMember";
import teamData from "../components/teamData";
import kyic_3 from "../images/kyic_3.png";

function Team() {
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
          <h1 className="text-white text-5xl font-bold ">Meet Our Team</h1>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Welcome to the "Meet Our Team" section of our webpage! Here, we would
              like to introduce you to the individuals who make up our organization
              and who are passionate about our mission. <br />< br />

              Our team is comprised of experienced and dedicated individuals,
              each bringing their unique set of skills and expertise to the table.
              From our founders to our board members and senior staff, every member
              of our team plays a crucial role in driving our organization forward.
            </p>
          </div>
          <div className="mt-16 grid gap-16 lg:grid-cols-3 lg:max-w-none">
            {/* Map through teamData to create TeamMember components */}
            {teamData.map((member) => (
              <div key={member.id} className="flex flex-col items-center">
                <div className="relative">
                  <img
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                    src={member.imageUrl}
                    alt={member.name}
                  />
                  <div className="absolute inset-0 bg-gray-800 bg-opacity-25"></div>
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-lg font-medium text-gray-900">
                    {member.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {member.education}
                  </p>
                  <p className="mt-2 text-sm text-gray-500">{member.role}</p>
                  <ul className="mt-4 flex justify-center space-x-2">
                    {member.skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-sm font-medium text-gray-500"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                  <ul className="mt-4 flex justify-center space-x-2">
                    {member.socialHandles.map((social) => (
                      <li key={social.name}>
                        <a
                          className="text-gray-500 hover:text-gray-600"
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {social.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Team;
