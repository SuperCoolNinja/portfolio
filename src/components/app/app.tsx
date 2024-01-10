import { Cards } from "../cards";
import { ProfilSide } from "../profil_side";
import { Title } from "../shared/title";
import { Skills } from "../skills";
import { cards } from "./data";

export const App: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Left side */}
      <div className="w-full lg:w-1/3 min-h-screen lg:mb-0 lg:p-0 p-10 bg-[#0f172a] border-[#ffffff10] md:border-r-2 border-b-2 flex">
        <ProfilSide />
      </div>

      {/* Right side */}
      <div className="w-full bg-[#0f172a] lg:overflow-auto overflow-y-scroll">
        <div className="flex flex-col min-h-screen">
          <Title title={"Projects"} />
          <Cards cards={cards} />
          <Title title={"Skills"} />
          <Skills />
        </div>
      </div>
    </div>
  );
};
