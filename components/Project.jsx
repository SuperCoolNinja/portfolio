import { ProjectItems } from "./Project.items.component";

import todo from "../public/assets/projects/todo.jpg";
import paint from "../public/assets/projects/paint.jpg";
import gta_marker from "../public/assets/projects/gta_marker.png";
import gta_gravity from "../public/assets/projects/gta_gravity.png";
import gta_console from "../public/assets/projects/gta_console.png";
import rock_paper from "../public/assets/projects/rock_paper.png";
import ludquiz from "../public/assets/projects/ludquiz.png";

export const Project = ({ t }) => {
  return (
    <div id="project" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="font-bold uppercase">{t("project:projects")}</p>
        <h2 className="pt-2 pb-5">Web</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItems
            title={"Todo List"}
            stack={"React JS"}
            img={todo}
            textAbout={"Demo"}
            link={"https://supercoolninja.github.io/todo-list/"}
          />
          <ProjectItems
            title={"Paint App"}
            stack={"HTML/CSS/JS"}
            img={paint}
            textAbout={"Demo"}
            link={"https://supercoolninja.github.io/Paint-Web-App/"}
          />

          <ProjectItems
            title={"Ludquiz"}
            stack={"PHP/HTML/CSS/JS"}
            img={ludquiz}
            textAbout={"Demo"}
            link={"https://ludquiz.fr/"}
          />

          <ProjectItems
            title={"Rock Paper Scissors"}
            stack={"HTML/CSS/JS"}
            img={rock_paper}
            textAbout={"Demo"}
            link={"https://supercoolninja.github.io/ROCK-PAPER-SCISSORS/"}
          />
        </div>

        <h2 className="pt-32 pb-5">Gaming</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectItems
            title={"GTA V Marker"}
            stack={"CPP"}
            img={gta_marker}
            textAbout={"Read more"}
            link={"https://www.gta5-mods.com/scripts/gta_marker"}
          />
          <ProjectItems
            title={"GTA V Gravity"}
            stack={"CPP"}
            img={gta_gravity}
            textAbout={"Read more"}
            link={"https://www.gta5-mods.com/scripts/ngravitygun-v1"}
          />

          <ProjectItems
            title={"GTA V Console"}
            stack={"CPP"}
            img={gta_console}
            textAbout={"Read more"}
            link={"https://fr.gta5-mods.com/tools/gta_console"}
          />
        </div>
      </div>
    </div>
  );
};
