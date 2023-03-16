import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const cards = [
  {
    category: "Coding",
    imageUrl: "https://source.unsplash.com/random/480x360/?5",
    title: "Exercitationem nisi iure qui asperiores non possimus",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.",
    time: "12 min ago",
  },
  {
    category: "Coding",
    imageUrl: "https://source.unsplash.com/random/480x360/?5",
    title: "Exercitationem nisi iure qui asperiores non possimus",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.",
    time: "12 min ago",
  },
  {
    category: "Coding",
    imageUrl: "https://source.unsplash.com/random/480x360/?5",
    title: "Exercitationem nisi iure qui asperiores non possimus",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.",
    time: "12 min ago",
  },
  {
    category: "Coding",
    imageUrl: "https://source.unsplash.com/random/480x360/?5",
    title: "Exercitationem nisi iure qui asperiores non possimus",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.",
    time: "12 min ago",
  },
  {
    category: "Coding",
    imageUrl: "https://source.unsplash.com/random/480x360/?5",
    title: "Exercitationem nisi iure qui asperiores non possimus",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.",
    time: "12 min ago",
  },
];

const Card = ({ category, imageUrl, title, description, time }) => {
  return (
    <div className="max-w-lg p-4 shadow-md dark:bg-blue-600 dark:text-gray-100 align-middle justify-center ">
      <div className="flex justify-between pb-4 border-bottom ">
        <div className="flex items-center">
          <a
            rel="noopener noreferrer"
            href="#"
            className="mb-0 capitalize dark:text-white"
          >
            {category}
          </a>
        </div>
      </div>
      <div className="space-y-4 ">
        <div className="space-y-2">
          <img
            src={imageUrl}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 md:h-80 lg:h-96 dark:bg-gray-500"
          />
          <div className="flex items-center text-xs">
            <span>{time}</span>
          </div>
        </div>
        <div className="space-y-2">
          <a rel="noopener noreferrer" href="#" className="block">
            <h3 className="text-xl font-semibold dark:text-violet-400">
              {title}
            </h3>
          </a>
          <p className="leading-snug dark:text-gray-100">{description}</p>
        </div>
      </div>
    </div>
  );
};

const ProgramsCardList = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,

    slidesToShow: 2,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "60px",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="w-full pt-7 pb-7 fle justify-center align-middle">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="px-2">
            <Card {...card} />
          </div>
        ))}
      </Slider>

      <style jsx>{`
        .slick-dots li button:before {
          color: #1C3ED1;
        }

        .slick-prev:before,
        .slick-next:before {
          font-family: "Font Awesome 5 Free";
          font-weight: 500;
          font-size: 24px;
          line-height: 0;
          color: #1c3ed1;
          aline-items: center;
          justify-content: center;
        }

        .slick-prev:before {
          content: "\f053";
        }

        .slick-next:before {
          content: "\f054";
        }

        .slick-dots li button:before {
          color: #1c3ed1;
        }

        .slick-dots li.slick-active button:before {
          color: #fff;
          background-color: #1c3ed1;
        }

        .slick-dots li button {
          background-color: transparent;
          border: 1px solid #1c3ed1;
        }

        @media (max-width: 768px) {
          .slick-prev:before,
          .slick-next:before {
            display: none;
            padding: 0;
          }
        }

      `}</style>

    </div>
  );
};

export default ProgramsCardList;
