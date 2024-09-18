import InstaIcon from '../assets/icons/insta.svg';
import LinkedInIcon from '../assets/icons/linkedin.svg';

export const Footer = () => {
  return (
    <footer className="py-5 bg-white border-t border-black/20 w-full">
      <div className="container">
        <div className="flex flex-col gap-5 sm:flex-row sm:justify-between">
          <div className="text-center">
            &copy; Copyright <strong>Entechno</strong>. All Rights Reserved. Designed by 
            <a href="https://www.linkedin.com/in/kaan-berk-duman-7625b3229/" className="text-blue-500"> Kaan Berk Duman</a>
          </div>
          <ul className="flex justify-center gap-2.5">
            <li>
              <a className="text-blue-500" href="https://www.linkedin.com/company/3130893/">
                <LinkedInIcon />
              </a>
            </li>
            <li>
              <a className="text-blue-500" href="https://www.instagram.com/entechno.tr?igsh=MTU0c3QyeHllNWRuaA==">
                <InstaIcon />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};