import ListServiceTitle from '../../components/ListService/Title';
import ListService from '../../components/ListService/ListService';
import Pagination from '../../components/Pagination/Pagination';
function ServiceIntroPage() {
    return (
        <>
            <ListServiceTitle></ListServiceTitle>
            <ListService></ListService>
            <Pagination></Pagination>
        </>
    );
}
export default ServiceIntroPage;