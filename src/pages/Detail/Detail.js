import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import GoToTop from '../../components/GoToTop/GoToTop';
import Detail from '../../components/Details/Detail';
import DetailTitle from '../../components/Details/Title';
function DetailPage() {
    return (
        <>
            <Header></Header>
            <NavBar></NavBar>
            <DetailTitle></DetailTitle>
            <Detail></Detail>
            <Footer></Footer>
            <GoToTop></GoToTop>
            <Loader></Loader>
        </>
    );
}
export default DetailPage;