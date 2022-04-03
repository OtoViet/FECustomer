import { Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { useState } from 'react';
function ComboService(props) {
    const [value, setValue] = useState("");
    const handleChange = (event) => {
        props.combo(event.target.value);
    };
    let listProductCombo1 = props.listProduct.filter(item => item.combo.includes("combo1"));
    let totalPriceCombo1 = 0;
    listProductCombo1.forEach(item => {
        totalPriceCombo1 += item.price;
    });
    totalPriceCombo1 = totalPriceCombo1*(0.9);
    let listProductCombo2 = props.listProduct.filter(item => item.combo.includes("combo2"));
    let totalPriceCombo2 = 0;
    listProductCombo2.forEach(item => {
        totalPriceCombo2 += item.price;
    });
    totalPriceCombo2 = totalPriceCombo2*(0.85);
    let listProductCombo3 = props.listProduct.filter(item => item.combo.includes("combo3"));
    let totalPriceCombo3 = 0;
    listProductCombo3.forEach(item => {
        totalPriceCombo3 += item.price;
    });
    totalPriceCombo3 = totalPriceCombo3*(0.8);
    const handleClickRadio = (event) => {
        if (event.target.value === value) {
            setValue("");
            props.combo("");
        } else {
            setValue(event.target.value);
            props.combo(event.target.value);
            if(event.target.value === "combo1"){
                props.priceCombo(totalPriceCombo1);
            }
            else if(event.target.value === "combo2"){
                props.priceCombo(totalPriceCombo2);
            }
            else{
                props.priceCombo(totalPriceCombo3);
            }
        }
    };
    return (
        <FormControl className="d-flex ">
            <RadioGroup
                onChange={handleChange}
                value={value}
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
                                        <h2 style={{fontSize:28}}>{totalPriceCombo1.toLocaleString("vi-VN",{
                                            style: "currency",
                                            currency: "VND"
                                        })}</h2>
                                    </div>
                                    <div className="price-body">
                                        <ul>
                                            {
                                                listProductCombo1.map((item, index) => {
                                                    return (
                                                        <li key={index}><i className="far fa-check-circle"></i>{item.productName}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="price-footer">
                                        <FormControlLabel value="combo1"
                                            className="btn btn-custom"
                                            control={<Radio
                                                onClick={handleClickRadio}
                                                checkedIcon={<CheckCircleOutlineIcon />} />}
                                            label="Đặt ngay" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="price-item featured-item">
                                    <div className="price-header">
                                        <h3>Gói làm sạch premium</h3>
                                        <h2 style={{fontSize:28}}>{totalPriceCombo2.toLocaleString("vi-VN",{
                                            style: "currency",
                                            currency: "VND"
                                        })}</h2>
                                    </div>
                                    <div className="price-body">
                                        <ul>
                                            {
                                                listProductCombo2.map((item, index) => {
                                                    return (
                                                        <li key={index}><i className="far fa-check-circle"></i>{item.productName}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="price-footer">
                                        <FormControlLabel value="combo2"
                                            className="btn btn-custom"
                                            control={<Radio
                                                onClick={handleClickRadio}
                                                checkedIcon={<CheckCircleOutlineIcon />} />}
                                            label="Đặt ngay" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="price-item">
                                    <div className="price-header">
                                        <h3>Gói làm sạch spremium</h3>
                                        <h2 style={{fontSize:28}}>{totalPriceCombo3.toLocaleString("vi-VN",{
                                            style: "currency",
                                            currency: "VND"
                                        })}</h2>
                                    </div>
                                    <div className="price-body">
                                        <ul>
                                            {
                                                listProductCombo3.map((item, index) => {
                                                    return (
                                                        <li key={index}><i className="far fa-check-circle"></i>{item.productName}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                    <div className="price-footer">
                                        <FormControlLabel value="combo3"
                                            className="btn btn-custom"
                                            control={<Radio
                                                onClick={handleClickRadio}
                                                checkedIcon={<CheckCircleOutlineIcon />} />}
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