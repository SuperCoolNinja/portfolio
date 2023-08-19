import { ICard } from "../../interfaces/ICard";
import { Card } from "../card";

export const Cards: React.FunctionComponent<{ cards: ICard[] }> = ({
  cards,
}) => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap justify-center gap-10 mx-4">
      {cards.map((v, i) => (
        <div key={i} className="w-full lg:w-1/3">
          <Card
            title={v.title}
            subtitle={v.subtitle}
            description={v.description}
            image={v.image}
            stacks={v.stacks}
          />
        </div>
      ))}
    </div>
  );
};
