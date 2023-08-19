import { ICard } from "../../interfaces/ICard";

export const Card: React.FunctionComponent<ICard> = ({
  title,
  subtitle,
  description,
  image,
  stacks,
}) => {
  return (
    <div className="mb-6 lg:mb-20 w-full">
      <div className="hover:shadow-lg hover:cursor-pointer transition-all duration-300 ease-in-out rounded-lg">
        <div className="w-full h-52 lg:h-60 rounded-lg ">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={image}
            alt={title}
          />
        </div>

        <div className="flex flex-col items-start justify-between p-3 lg:p-4 min-h-[10rem] lg:min-h-[15rem]">
          <div className="flex flex-col gap-1 lg:gap-2">
            <h3 className="font-bold text-lg lg:text-xl">{title}</h3>
            <h4 className="font-semibold text-[#4b9fff] text-sm lg:text-base">
              {subtitle}
            </h4>
            <p className="text-sm lg:text-[1rem]  lg:leading-6 lg:font-semibold text-[#1a191985] pb-5">
              {description}
            </p>
          </div>

          <div>
            <ul className="flex flex-wrap gap-2 text-[#ff0000ad] font-bold text-xs lg:text-[0.8rem] underline ">
              {stacks.map((v, i) => (
                <li key={i}>{v}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
