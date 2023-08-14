import { Bio } from '../bio';
import { FullName } from '../fullname';
import { Img_Logo } from '../img_logo';
import { Socials } from '../socials';


export const ProfilSide: React.FunctionComponent = () => {
  return (
    <div className='flex flex-col items-center justify-center m-8 gap-5'>
      <Img_Logo/>
      <FullName/>
      <Socials/>
      <Bio/>
    </div>
  );
};
