import CountUp from '../../components/CountUp/CountUp';
import ServiceCare from '../../components/ServiceCare/ServiceCare';
import ComboService from '../../components/ServiceCare/ComboService';
import CarePoints from '../../components/CarePoints/CarePoints';
import Blogs from '../../components/ListService/ListService';
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
      <ComboService></ComboService>
      <CarePoints></CarePoints>
      <Staffs></Staffs>
      <ClientsSay></ClientsSay>
      <Blogs></Blogs>
    </>
  );
}

export default HomePage;
