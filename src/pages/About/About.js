import CountUp from '../../components/CountUp/CountUp';
import Staffs from '../../components/Staffs/Staffs';
import About from '../../components/About/About';
import AboutTitle from '../../components/About/Title';

function AboutPage() {
    return (
        <>
            <AboutTitle></AboutTitle>
            <About></About>
            <CountUp></CountUp>
            <Staffs></Staffs>
        </>
    );
}

export default AboutPage;