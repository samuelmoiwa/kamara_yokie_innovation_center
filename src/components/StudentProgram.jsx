/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/style-prop-object */
import { React } from "react";
import { FaCheck } from "react-icons/fa";

export default function StudentPrograms() {
  const services = [
    {
      title: "Service 1",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. ",
    },
    {
      title: "Service 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. ",
    },
    {
      title: "Service 3",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at porttitor sem. Aliquam erat volutpat. ",
    },
  ];

  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h2 className="text-base font-semibold text-blue-600 uppercase tracking-wide">
              What we do
            </h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Services
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
    </>
  );
}
