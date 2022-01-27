import './App.css';
import './style.css';
import Header from './components/Header/Header';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import GoToTop from './components/GoToTop/GoToTop';
// import Payment from './components/Forms/Payment';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <Footer></Footer>
      <GoToTop></GoToTop>
      <Loader></Loader>
      {/* <Payment></Payment> */}
    </div>
  );
}

export default App;
