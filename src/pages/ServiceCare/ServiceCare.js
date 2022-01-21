import ClientsSay from '../../components/Comments/ClientsSay';
import ServiceCare from '../../components/ServiceCare/ServiceCare';
import ServiceCareTitle from '../../components/ServiceCare/Title';
function ServiceCarePage() {
    return (
        <>
            <ServiceCareTitle></ServiceCareTitle>
            <ServiceCare></ServiceCare>
            <ClientsSay></ClientsSay>
        </>
    );
}
export default ServiceCarePage;