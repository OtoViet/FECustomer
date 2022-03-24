import ListStores from '../Mapbox/ListStores.js';
import { Stack, CircularProgress } from '@mui/material';
import useGetAllStore from '../../hooks/useGetAllStore.js';

function CarePoints() {
    const [loadingStore, stores] = useGetAllStore();
    if (loadingStore) return <>
        <h2 style={{ textAlign: "center" }}>Đang tải thông tin</h2>
        <Stack alignItems="center" mt={10} mb={10}>
            <CircularProgress size={80} />
        </Stack>
    </>;
    return (
        <div className="location">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-header text-left text-center">
                            <p>Cửa hàng</p>
                            <h2>Địa chỉ cửa hàng OtoViet</h2>
                        </div>
                        <div className="row">
                            {stores.map((store, index) =>
                                <div className="col-md-4" key={index}>
                                    <div className="location-item">
                                        <i className="fa fa-map-marker-alt"></i>
                                        <div className="location-text">
                                            <h3>{store.name}</h3>
                                            <p>{store.address}</p>
                                            <p><strong>Emai:</strong>{store.email}</p>
                                            <p><strong>Liên hệ:</strong>{store.phoneNumber}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="col-md-12 mt-4">
                        <div className="care-point-detail section-header">
                            <h2 className="mb-4 mt-4">Danh sách và địa chỉ chi tiết</h2>
                        </div>
                        <ListStores />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CarePoints;