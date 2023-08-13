import logo from '../../assets/logo.svg'
import { Bio } from '../bio';
import { FullName } from '../fullname';
import { Socials } from '../socials';


export const ProfilSide: React.FunctionComponent = () => {
  return (
    <div className='container flex flex-col justify-center items-center m-10 gap-5 '>
      <img width={150} src={logo} alt="logo" />
      <FullName/>
      <Socials/>
      <Bio/>
    </div>
  );
};
