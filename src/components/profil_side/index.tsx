import { Bio } from "../bio";
import { FullName } from "../fullname";
import { Img_Logo } from "../img_logo";
import { Socials } from "../socials";

export const ProfilSide: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col relative justify-around mt-10 mx-14 gap-10 lg:gap-0">
      <div className="flex flex-col justify-center items-center gap-5">
        <Img_Logo />
        <FullName />
        <Socials />

        <div className="w-2/3 h-[0.1rem] bg-[#2123242a] transition-all mb-10 duration-300 ease-in-out group-hover:w-full group-hover:left-0 group-hover:-translate-x-0"></div>
      </div>

      <div className="lg:mb-52">
        <Bio />
      </div>

      <p className="text-center font-semibold text-[1.2rem] text-[#21232494]">
        ©SuperCoolNinja - 2023.
      </p>
    </div>
  );
};
