import FooterBG from "./assets/FooterBG.png";
import BottomBG from "./assets/BottomBG.png";
import FooterLogo from "./assets/FooterLogo.svg";
import PagesInfor from "./dataPages";
import InformationsInfor from "./dataInformations";
import caretright from "./assets/caretright.svg";
import { Link } from "react-router-dom";
import socialMedia from "./dataContact";
import ToTopButton from "./assets/ToTopButton.svg";
import { useEffect, useState } from "react";
export default function Footer() {
    const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="relative w-full overflow-hidden pt-[4.3125rem]">
      <div className="relative w-full h-[44.08375rem]">
        <img src={FooterBG} alt="Footer BG" className="w-full h-[44.08375rem] object-cover relative z-10" />
        <img src={BottomBG} alt="Bottom BG" className="w-full h-auto object-cover absolute bottom-0 left-0 z-0" />
        <div className="absolute z-10 inset-0 lg:pt-[14.1875rem] md:pt-[9.375rem] pt-[5rem]">
        <div className=" max-w-[74.25rem] md:pl-[1.5rem] md:pr-[1.5rem] pl-[1rem] pr-[1rem] mx-auto flex flex-wrap justify-center gap-[1.875rem] xl:flex-row xl:justify-between ">
          <div className="xl:pt-[0.9375rem] pt-0 lg:text-left text-center">
          <div className="flex justify-center xl:justify-start">
              <Link to="/">
                  <img src={FooterLogo} alt="Footer Logo" />
          </Link>
          </div>
            <div className="xl:pt-[2.0625rem] xl:pl-[1.9375rem] pt-[0.3125rem] pl-0">
                <p className="text-base tracking-tight text-textFooter"><span className="text-base tracking-tight text-textFooter font-bold">Beautice</span> is a Beauty Clinic WordPress Theme.</p>
                <p className="italic text-small tracking-tight text-textFooter pt-[1.375rem]">Baker Steet 101, NY, United States.</p>
                <div className="max-w-[21.5rem]  flex justify-between pt-[0.3125rem] mx-auto lg:mx-0 ">
                    <p className="italic text-small tracking-tight text-textFooter font-medium">+521 569 8966.</p>
                    <p className="italic text-small tracking-tight text-textFooter font-medium underline">mail@company.com.</p>
                </div>
            </div>
          </div>
         <div className="flex flex-row gap-[1.875rem]">
         <div className="sm:min-w-[17.1875rem] max-w-[9.1875rem]">
            <h3 className="text-fontH3Footer font-semibold tracking-tight text-white">Pages</h3>
            <ul className="pt-[1.75rem] space-y-[0.6875rem]">
              {PagesInfor.map((page) => (
                <>
                <div className="flex gap-[0.53125rem]">
                <img src={caretright} alt="Caretright" className="inline-block" />
                <li key={page.id}>
                  <Link to={page.linkTo} className="text-base tracking-tight text-textFooter hover:text-white">{page.page}</Link>
                </li>
                </div>
                </>
              ))}
              </ul>
          </div>
          <div className="sm:min-w-[13.4375rem] max-w-[13.4375rem]">
            <h3 className="text-fontH3Footer font-semibold tracking-tight text-white">Informations</h3>
            <ul className="pt-[1.75rem] space-y-[0.6875rem]">
              {InformationsInfor.map((imformation) => (
                <>
                <div className="flex gap-[0.5625rem]">
                <img src={caretright} alt="Caretright" className="inline-block" />
                <li key={imformation.id}>
                  <Link to={imformation.linkTo} className="text-base tracking-tight text-textFooter hover:text-white">{imformation.page}</Link>
                </li>
                </div>
                </>
              ))}
              </ul>
          </div>
         </div>
        </div> 

        {showButton && (
        <div className="fixed bottom-0 right-0 lg:mb-[10.625rem] lg:mr-[4.0625rem] mb-[10.625rem] mr-[1rem]">
          <img src={ToTopButton} alt="ToTop Button" onClick={scrollToTop} className="cursor-pointer" />
        </div>
      )}
      <div className="mx-auto max-w-[74.25rem] md:pl-[1.5rem] md:pr-[1.5rem] pl-[1rem] pr-[1rem] lg:pt-[8.75rem] pt-[3.125rem] gap-[1.875rem] flex flex-col md:flex-row justify-center md:justify-between items-center">
    <div className="flex gap-[2.8125rem] ">
        {socialMedia.map((item) => (
            <div key={item.url}>
                <img src={item.url} alt="Social Media Icon" />
            </div>
        ))}
    </div>
    <div>
        <p className="text-base text-textFooter tracking-tight text-center">
            © AltDesain Studio 2021 - All right reserved.
        </p>
    </div>
</div>

</div>
       
      </div>

      
      
    </div>
  );
}