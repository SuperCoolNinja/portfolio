import { ProfilSide } from "../profil_side";
import { Title } from "../shared/title";


export const App: React.FunctionComponent = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3 h-auto mb-20 lg:mb-0 lg:p-0 p-10 lg:h-screen bg-[#f7f7f7] border-[#00000015] md:border-r-2 border-b-2 flex">
        <ProfilSide />
      </div>
    
      <div className="w-full bg-[#fafafa]">
        <Title title={"Skills"}/>
      </div>
    </div>
  );
};