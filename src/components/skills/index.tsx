import {
  LogosCSharp,
  LogosCss3,
  LogosHtml5,
  LogosJavascript,
  LogosLua,
  LogosSass,
  LogosTypescriptIconRound,
} from "../icons";

export const Skills: React.FunctionComponent = () => {
  return (
    <ul className="flex lg:flex-row flex-wrap lg:flex-nowrap items-center justify-center gap-20 pb-20 w-1/2 mx-auto">
      <li className="rounded hover:scale-125 transition-all duration-300 ease-in-out">
        <LogosCSharp />
      </li>

      <li className="rounded hover:scale-125 transition-all duration-300 ease-in-out">
        <LogosLua />
      </li>

      <li className="rounded hover:scale-125 transition-all duration-300 ease-in-out">
        <LogosTypescriptIconRound />
      </li>

      <li className="rounded hover:scale-125 transition-all duration-300 ease-in-out">
        <LogosJavascript />
      </li>

      <li className="rounded hover:scale-125 transition-all duration-300 ease-in-out">
        <LogosHtml5 />
      </li>

      <li className="rounded hover:scale-125 transition-all duration-300 ease-in-out">
        <LogosCss3 />
      </li>

      <li className="rounded hover:scale-125 transition-all duration-300 ease-in-out">
        <LogosSass />
      </li>
    </ul>
  );
};
