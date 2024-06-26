import { Bio } from "../bio";
import { FullName } from "../fullname";
import { Img_Logo } from "../img_logo";
import { Socials } from "../socials";

export const ProfilSide: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col mt-20 mx-14  ">
      <div className="flex flex-col justify-center items-center gap-5 ">
        <Img_Logo />
        <FullName />
        <Socials />

        <div className="w-2/3 h-[0.1rem] bg-[#fc5c26] transition-all mb-10 duration-300 ease-in-out group-hover:w-full group-hover:left-0 group-hover:-translate-x-0"></div>
      </div>

      <div className="lg:mb-20">
        <Bio />
      </div>

      <p className="text-center font-semibold text-[1rem] text-[#000] pb-10">
        © 2024 SuperCoolNinja
      </p>
    </div>
  );
};
