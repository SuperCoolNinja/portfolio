import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ICard } from "../../interfaces/ICard";
import { Card } from "../card";

export const Cards: React.FunctionComponent<{ cards: ICard[] }> = ({
  cards,
}) => {
  const categorizedCards: { [category: string]: ICard[] } = {};

  cards.forEach((card) => {
    if (!categorizedCards[card.category]) {
      categorizedCards[card.category] = [];
    }
    categorizedCards[card.category].push(card);
  });

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      {Object.keys(categorizedCards).map((category, index) => (
        <div
          key={index}
          className="overflow-hidden lg:p-20 p-5"
        >
          <div className="w-[6rem] mb-5 ml-5 mt-20 lg:mt-0">
            <h2 className="text-2xl font-bold uppercase text-[#232423c5] ">
              {category}
            </h2>
            <div className="h-[0.3rem] rounded-xl bg-[#0044ff56]"></div>
          </div>

          <Slider {...settings}>
            {categorizedCards[category].map((v, i) => (
              <div key={i} className="p-5">
                <Card
                  title={v.title}
                  subtitle={v.subtitle}
                  description={v.description}
                  image={v.image}
                  stacks={v.stacks}
                  source_code={v.source_code || ""}
                  demo={v.demo || ""}
                  v_mod={v.v_mod || ""}
                  category={v.category}
                />
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </div>
  );
};
