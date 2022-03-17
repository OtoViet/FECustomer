import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

function ComboService() {
    return (
        <FormControl className="d-flex ">
            <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
            >
                <div className="price">
                    <div className="container">
                        <div className="section-header text-center">
                            <p>Gói combo</p>
                            <h2>Chọn gói phù hợp với bạn</h2>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="price-item">
                                    <div className="price-header">
                                        <h3>Gói làm sạch cơ bản</h3>
                                        <h2><span>$</span><strong>25</strong><span>.99</span></h2>
                                    </div>
                                    <div className="price-body">
                                        <ul>
                                            <li><i className="far fa-check-circle"></i>Rửa yên xe</li>
                                            <li><i className="far fa-check-circle"></i>Hút chân không</li>
                                            <li><i className="far fa-check-circle"></i>Làm sạch bên ngoài</li>
                                            <li><i className="far fa-times-circle"></i>Làm sạch bên trong</li>
                                            <li><i className="far fa-times-circle"></i>Lau kính xe</li>
                                        </ul>
                                    </div>
                                    <div className="price-footer">
                                        <FormControlLabel value="combo1"
                                            className="btn btn-custom"
                                            control={<Radio checkedIcon={<CheckCircleOutlineIcon />} />}
                                            label="Đặt ngay" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="price-item featured-item">
                                    <div className="price-header">
                                        <h3>Gói làm sạch premium</h3>
                                        <h2><span>$</span><strong>35</strong><span>.99</span></h2>
                                    </div>
                                    <div className="price-body">
                                        <ul>
                                            <li><i className="far fa-check-circle"></i>Rửa yên xe</li>
                                            <li><i className="far fa-check-circle"></i>Hút chân không</li>
                                            <li><i className="far fa-check-circle"></i>Làm sạch bên ngoài</li>
                                            <li><i className="far fa-check-circle"></i>Làm sạch bên trong</li>
                                            <li><i className="far fa-times-circle"></i>Lau kính xe</li>
                                        </ul>
                                    </div>
                                    <div className="price-footer">
                                        <FormControlLabel value="combo2"
                                            className="btn btn-custom"
                                            control={<Radio checkedIcon={<CheckCircleOutlineIcon />} />}
                                            label="Đặt ngay" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="price-item">
                                    <div className="price-header">
                                        <h3>Gói làm sạch toàn bộ</h3>
                                        <h2><span>$</span><strong>49</strong><span>.99</span></h2>
                                    </div>
                                    <div className="price-body">
                                        <ul>
                                            <li><i className="far fa-check-circle"></i>Rửa yên xe</li>
                                            <li><i className="far fa-check-circle"></i>Hút chân không</li>
                                            <li><i className="far fa-check-circle"></i>Làm sạch bên ngoài</li>
                                            <li><i className="far fa-check-circle"></i>Làm sạch bên trong</li>
                                            <li><i className="far fa-check-circle"></i>Lau kính xe</li>
                                        </ul>
                                    </div>
                                    <div className="price-footer">
                                        <FormControlLabel value="combo3"
                                            className="btn btn-custom"
                                            control={<Radio checkedIcon={<CheckCircleOutlineIcon />} />}
                                            label="Đặt ngay" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RadioGroup>
        </FormControl>
    );
}
export default ComboService;