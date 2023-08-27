import { Cards } from "../cards";
import { ProfilSide } from "../profil_side";
import { Title } from "../shared/title";
import { cards } from "./data";

export const App: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Left side */}
      <div className="w-full lg:w-1/3 h-full mb-20 lg:mb-0 lg:p-0 p-10 lg:h-screen bg-[#f9f9f9] border-[#00000015] md:border-r-2 border-b-2 flex">
        <ProfilSide />
      </div>

      {/* Right side */}
      <div className="w-full bg-[#fff] lg:overflow-auto">
        <div className="flex flex-col h-screen">
          <Title title={"Projects"} />
          <Cards cards={cards} />
          <Title title={"Skills"} />
          
        </div>
      </div>
    </div>
  );
};
