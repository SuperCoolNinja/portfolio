import { LogosGithubIcon, LogosLinkedinIcon, LogosYoutubeIcon } from "../icons"

export const Socials : React.FunctionComponent  = () => 
{
  return <div>
      <ul className="flex items-center gap-5"> 
        <li title={"Github"} >
          <a href="https://github.com/SuperCoolNinja?tab=repositories" target="_blank">
            <LogosGithubIcon />
          </a>
        </li>

        <li title={"Linkedin"} >
          <a href="https://www.linkedin.com/in/samir-baatour/" target="_blank">
            <LogosLinkedinIcon />
          </a>
        </li>


        <li title={"Youtube"} >
          <a href="https://www.youtube.com/channel/UCGxZ3qgSIVzU-eU2Whe7FHw/" target="_blank">
            <LogosYoutubeIcon />
          </a>
        </li>
      </ul>
  </div>
}