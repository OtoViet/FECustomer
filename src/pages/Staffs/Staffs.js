import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import GoToTop from '../../components/GoToTop/GoToTop';
import Staffs from '../../components/Staffs/Staffs';
import StaffsTitle from '../../components/Staffs/Title';
function StaffsPage() {
    return (
        <>
            <Header></Header>
            <NavBar></NavBar>
            <StaffsTitle></StaffsTitle>
            <Staffs></Staffs>
            <Footer></Footer>
            <GoToTop></GoToTop>
            <Loader></Loader>
        </>
    );
}
export default StaffsPage;