import MainPhoto from './Main/Main';
import MainOffer from './Main/MainOffer';
import MainPhoto2 from './Main/MainPhoto2';
import NewCollection from './Main/NewCollection';
import Header from '../Layout/Header/Header';
import Slider1 from '../Sliders/Slider1';
import Slider2 from '../Sliders/Slider2';
import ContactInfo from '../Layout/Footer/ContactInfo';
import Footer from '../Layout/Footer/Footer';
import Web from './Main/Web';


function Page1() {
  return (
    <>
      <MainPhoto />
      <MainOffer />
      <Slider1 />
      <MainPhoto2 />
      <NewCollection />
      <Slider2 />
      <Web/>
      <ContactInfo/>
      <Footer/>
    </>
  );
}

export default Page1;