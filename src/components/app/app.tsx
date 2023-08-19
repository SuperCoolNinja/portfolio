import { Cards } from "../cards";
import { ProfilSide } from "../profil_side";
import { Title } from "../shared/title";
import { cards } from "./data";

export const App: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3 h-auto mb-20 lg:mb-0 lg:p-0 p-10 lg:h-screen bg-[#f9f9f9] border-[#00000015] md:border-r-2 border-b-2 flex">
        <ProfilSide />
      </div>

      <div className="w-full bg-[#fff]">
        <Title title={"Projects"} />

        <Cards cards={cards} />

        <Title title={"Skills"} />
      </div>
    </div>
  );
};
