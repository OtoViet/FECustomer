import CountUp from '../../components/CountUp/CountUp';
import ServiceCare from '../../components/ServiceCare/ServiceCare';
import ClientsSay from '../../components/Comments/ClientsSay';
import Staffs from '../../components/Staffs/Staffs';
import About from '../../components/About/About';
import Slider from '../../components/Slider/Slider';
function HomePage() {
  return (
    <>
      <Slider></Slider>
      <About></About>
      <ServiceCare></ServiceCare>
      <CountUp></CountUp>
      <Staffs></Staffs>
      <ClientsSay></ClientsSay>
    </>
  );
}

export default HomePage;
