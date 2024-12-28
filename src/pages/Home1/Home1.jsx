import Header from '../../components/Header/Header';
import MainSlider from './components/MainSlider/MainSlider';
// import slideBackground from '../../assets/slBg.png';
import CoreServices from './components/CoreServices/CoreServices';
import AboutUs from './components/AboutUs/AboutUs';
import ProfessionalTeams from './components/ProfessionalTeams/ProfessionalTeams';
import ContactUs from './components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';

export default function Home1() {
  return (
    // <div
    //   className="bg-cover bg-no-repeat bg-left-top"
    //   style={{
    //     backgroundImage: `url(${slideBackground})`,
    //   }}
    // >
       <>
        <Header />
        <MainSlider />
        <CoreServices />
        <AboutUs/>
        <ProfessionalTeams/>
        <ContactUs/>
        <Footer/>
       </>
    
    // </div>
  );
}