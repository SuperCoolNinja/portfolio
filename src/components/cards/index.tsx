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
        <div key={index} className="overflow-hidden p-5">
          <h2 className="text-xl font-bold m-5 uppercase">{category}</h2>
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
