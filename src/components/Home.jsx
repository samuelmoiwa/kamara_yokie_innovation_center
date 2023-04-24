import { React } from "react";
import kyic_1 from "../images/kyic_1.jpg";
import kyic_2 from "../images/kyic_2.jpg";
import stem_1 from "../images/stem_1.png";
import { FaCheck } from "react-icons/fa";

export default function Home() {
  const services = [
    {
      title: "Coding classes",
      description:
        "Our coding classes are designed to teach students the basics of coding and software development. ",
    },
    {
      title: "Robotics workshops",
      description:
        "Our robotics workshops are designed to teach students the fundamentals of robotics and engineering. ",
    },
    {
      title: "Biotechnology labs",
      description:
        "Our biotechnology labs are designed to provide students with hands-on experience in biotechnology. ",
    },
    {
      title: "Entrepreneurship programs",
      description: `Our entrepreneurship programs are designed to provide students with the skills and knowledge needed
        to start and run a successful business. `,
    },
    {
      title: "Outreach Programs",
      description: `Our outreach programs that help bring STEM education and opportunities to underserved
        communities and schools in Sierra Leone. `,
    },
    {
      title: "Workshops and Seminars",
      description: `KYIC centers also offer workshops and seminars for students, educators, and professionals to
        learn more about various STEM topics. `,
    },
  ];

  return (
    <div className="sm:px-6">
      <section class="bg-blue-900 text-white">
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div class="mx-auto max-w-3xl text-center">
            <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Kamara Yokie.
              <span class="sm:block"> Innovation Center. </span>
            </h1>

            <p class="mx-auto mt-4 max-w-xl sm:text-xl sm:leading-relaxed">
              In the bid of promoting Science, Technology, Engineering and
              mathematics in Sierra Leone and Africa continent, the Kamara Yokie
              Innovation Center is a non-profit organization that aims to
              provide a platform for young people to learn and develop.
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="/get-started"
              >
                Donate
              </a>

              <a
                class="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="/aboutUs"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!--Container--> */}
      <section class="bg-white border-b py-8">
        <div class="container max-w-5xl mx-auto m-8">
          <h2 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
            Why STEM
          </h2>
          <div class="w-full mb-4">
            <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
          </div>
          <div class="flex flex-wrap">
            <div class="w-10/12 sm:w-1/2 p-6 ">
              <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
                STEM Education at KYIC
              </h3>
              <p class="text-gray-600 mb-8 text-justify">
                The Kamara Yokie Innovation Centre (KYIC) is a free innovation
                centre that is led by youth to promote science, technology,
                engineering, and mathematics (STEM) education. Our centre is
                open to everyone, regardless of age, gender, or background. We
                believe that everyone should have access to the resources and
                mentorship needed to succeed in STEM fields.
                <br />
                <br />
                At KYIC, we recognize the critical role that STEM education
                plays in the development of society. We are dedicated to
                providing opportunities for young people to develop their skills
                in these fields. Through our various programs and initiatives,
                we aim to inspire and equip the next generation of innovators,
                inventors, and problem-solvers.
                <br />
                <br />
                KYIC is equipped with state-of-the-art facilities, including
                labs, classrooms, and co-working spaces. Our facilities provide
                a safe, stimulating environment for students to learn and
                experiment. We offer a range of programs and initiatives,
                including coding classes, robotics workshops, biotechnology
                labs, and entrepreneurship programs. <br />
                <br />
              </p>
              <img class="w-full rounded shadow-md" src={kyic_1} alt="image" />
            </div>
            <div class="w-full sm:w-1/2 p-6 ">
              <img class="w-full rounded shadow-md" src={kyic_2} alt="image" />
              <p class="text-gray-600 mb-8 text-justify">
                Our mission is to create a vibrant ecosystem that fosters
                creativity, innovation, and entrepreneurship. We believe that by
                providing access to resources, mentorship, and education, we can
                empower young people to pursue their passions and turn their
                ideas into reality. We strive to create an environment that is
                conducive to learning, experimentation, and collaboration.
                <br />
                <br />
                We are committed to promoting diversity and inclusion in
                everything we do. We believe that everyone should have an equal
                opportunity to succeed, regardless of their background. We
                strive to create an environment that is welcoming, supportive,
                and respectful of everyone's unique perspectives and
                experiences. We are dedicated to providing opportunities for
                women, minorities, and other underrepresented groups in STEM
                fields.
                <br />
                <br />
                The Kamara Yokie Innovation Centre (KYIC) is a free innovation
                centre that is led by youth to promote science, technology,
                engineering, and mathematics (STEM) education. Our mission is to
                create a vibrant ecosystem that fosters creativity, innovation,
                and entrepreneurship. We believe that by providing access to
                resources, mentorship, and education, we can empower young
                people to pursue their passions and turn their ideas into
                reality. We invite you to join us on this exciting journey of
                discovery and innovation.
                <br />
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div class="container w-full h-auto mx-auto m-8">
          <img class="w-full rounded " src={stem_1} alt="image" />
        </div>
      </section>

      <div className="bg-gray-100 pb-24 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-10">
          <div className="text-center py-16">
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What we do
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white overflow-hidden shadow rounded-lg"
              >
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                      <FaCheck className="h-6 w-6 text-white" />
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dt className="text-lg font-medium leading-6 text-gray-900">
                        {service.title}
                      </dt>
                      <dd className="mt-2 text-base text-gray-500">
                        {service.description}
                      </dd>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
