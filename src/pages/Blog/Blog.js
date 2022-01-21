import Header from '../../components/Header/Header';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';
import GoToTop from '../../components/GoToTop/GoToTop';
import BlogTitle from '../../components/Blogs/Title';
import Blog from '../../components/Blogs/Blogs';
import Pagination from '../../components/Pagination/Pagination';
function BlogPage() {
    return (
        <>
            <Header></Header>
            <NavBar></NavBar>
            <BlogTitle></BlogTitle>
            <Blog></Blog>
            <Pagination></Pagination>
            <Footer></Footer>
            <GoToTop></GoToTop>
            <Loader></Loader>
        </>
    );
}
export default BlogPage;