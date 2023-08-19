import { ICard } from "../../interfaces/ICard";
import { LogosGithubIcon } from "../icons";

export const Card: React.FunctionComponent<ICard> = ({
  title,
  subtitle,
  description,
  image,
  stacks,
  source_code,
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
            <div className="flex justify-between">
              <h3 className="font-bold text-lg lg:text-xl">{title}</h3>

              {source_code && (
                <a href={source_code} target="_blank">
                  <LogosGithubIcon fill={"#5e5b5b"} />
                </a>
              )}
            </div>
            <h4 className="font-semibold text-[#4b9fff] text-sm lg:text-base">
              {subtitle}
            </h4>
            <p className="text-sm lg:text-[1rem]  lg:leading-6 lg:font-semibold text-[#1a191985] pb-5">
              {description}
            </p>
          </div>

          <div>
            <ul className="flex flex-wrap gap-2">
              {stacks.map((v, i) => (
                <li
                  className="text-[#000000ad] font-black text-xs lg:text-[0.6rem] bg-[#f9f9f9] p-2 rounded-full"
                  key={i}
                >
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
