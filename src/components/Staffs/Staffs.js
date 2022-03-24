import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import useGetAllEmployee from '../../hooks/useGetAllEmployee';
function Staffs() {
    const [loading, employees] = useGetAllEmployee();
    if (loading) return <>
        <h2 style={{ textAlign: "center" }}>Đang tải thông tin</h2>
        <Stack alignItems="center" mt={10} mb={10}>
            <CircularProgress size={80} />
        </Stack>
    </>;
    return (
        <div className="team">
            <div className="container">
                <div className="section-header text-center">
                    <p>Đội ngũ nhân viên của chúng tôi</p>
                    <h2>Danh sách nhân viên</h2>
                </div>
                <div className="row">
                    {employees.map(employee => (
                        <div className="col-lg-3 col-md-6"
                        key={employee._id}>
                            <Card className="team-item">
                                <CardMedia
                                    className="team-img"
                                    component="img"
                                    height="250"
                                    image={employee.image}
                                    alt="anh nhan vien"
                                />
                                    <div className="team-text">
                                        <h2>{employee.fullName}</h2>
                                        <p>Nhân viên</p>
                                        <div className="team-social">
                                            <a href="/"><i className="fab fa-twitter"></i></a>
                                            <a href="/"><i className="fab fa-facebook-f"></i></a>
                                            <a href="/"><i className="fab fa-linkedin-in"></i></a>
                                            <a href="/"><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Staffs;