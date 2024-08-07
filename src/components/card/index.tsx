import { ICard } from "../../interfaces/ICard";
import { IconParkPreviewOpen, LogosGithubIcon, LogosVIcon } from "../icons";

export const Card: React.FunctionComponent<ICard> = ({
  title,
  subtitle,
  description,
  image,
  stacks,
  source_code,
  v_mod,
  demo,
}) => {
  return (
    <div className="mb-6 lg:mb-20 w-full">
      <div className="bg-[#fff] shadow-lg hover:cursor-pointer hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out rounded-lg">
        <div className="w-full h-52 lg:h-60 rounded-lg ">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={image}
            alt={title}
          />
        </div>

        <div className="flex flex-col justify-between p-3 lg:p-4 min-h-[10rem] lg:min-h-[15rem]">
          <div className="flex flex-col gap-1 lg:gap-2">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg lg:text-xl text-[#000]">
                {title}
              </h3>

              <ul className="flex items-center gap-3">
                {demo && (
                  <li>
                    <a href={demo} target="_blank">
                      <IconParkPreviewOpen fill={"#30a52c"} />
                    </a>
                  </li>
                )}

                {v_mod && (
                  <li>
                    <a href={v_mod} target="_blank">
                      <LogosVIcon fill={"#30a52c"} />
                    </a>
                  </li>
                )}

                {source_code && (
                  <li>
                    <a href={source_code} target="_blank">
                      <LogosGithubIcon fill={"#fff"} />
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <h4 className="font-bold text-[#fc5c26] text-sm lg:text-base ">
              {subtitle}
            </h4>
            <p className="text-sm lg:text-[1rem]  lg:leading-6 lg:font-semibold text-[#000] pb-5">
              {description}
            </p>
          </div>

          <div>
            <ul className="flex flex-wrap gap-2">
              {stacks.map((v, i) => (
                <li
                  className="text-[#000] font-semibold text-xs lg:text-[0.7rem] bg-[#ddd]  p-2 rounded-full"
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
