import BlogTitle from '../../components/Blogs/Title';
import Blog from '../../components/Blogs/Blogs';
import Pagination from '../../components/Pagination/Pagination';
function BlogPage() {
    return (
        <>
            <BlogTitle></BlogTitle>
            <Blog></Blog>
            <Pagination></Pagination>
        </>
    );
}
export default BlogPage;