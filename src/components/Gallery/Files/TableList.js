import React from "react";
import { Checkbox } from 'primereact/checkbox';
import "./TableList.css";
const TableList = ({ itemData, toggleCheck, checked, typeTab }) => {
    const GetShortDate = (date) => {
        return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
    }
    return (
        <React.Fragment>
            <div className="tableList">
                {itemData.map((itm, index) =>
                    <React.Fragment key={"row_" + index}>
                        <div className="row ">

                            <div className="col col-md-1 d-none d-md-block">
                                <div className="p-field-checkbox">
                                    <Checkbox inputId={"check_" + itm.id} id={"check_" + itm.id} name={itm.title} value={"check_" + itm.id}
                                        onChange={() => toggleCheck('check_' + itm.id, "Table")}
                                        checked={checked['check_' + itm.id]}
                                    />
                                </div>
                            </div>
                            <div className="col col-md-1 col-sm-2 ">
                                <img alt={itm.title} src={itm.imgFileName} className="imgTable figure-img img-fluid rounded" />
                            </div>
                            <div className="col col-md-1 d-none d-md-block">
                                <label htmlFor={"check_" + itm.id}>
                                    {itm.title}
                                </label>
                            </div>
                            <div className="col col-md-1 d-none d-md-block" >{itm.date} </div>
                            <div className="col d-none d-md-block">
                                <div className="text-wrap">{itm.description}</div>
                            </div>
                            <div className="col col-md-1 d-none d-md-block">
                                <i className="fa fa-download"></i>
                            </div>
                            <div className="col col-md-1 d-none d-md-block">
                                <i className="fa fa-share-alt"></i>
                            </div>
                            <div className="col d-md-none">
                                <div className="row">
                                    <label className="col titleItmMobile" htmlFor={"checMobile_" + itm.id}>
                                        {itm.title}
                                    </label>
                                    <div className="p-field-checkbox checMobile col">
                                        <Checkbox inputId={"checMobile_" + itm.id} id={"checMobile_" + itm.id} name={itm.title} value={"check_" + itm.id}
                                            onChange={() => toggleCheck('check_' + itm.id, "Table")}
                                            checked={checked['check_' + itm.id]}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col textMobileDesc">{itm.description}</div>
                                </div>
                                <div className="row">
                                    <div className="col codeMobile">{itm.code}</div>
                                    <div className="col imgDateMobile" > {GetShortDate(new Date(itm.date))}</div>
                                </div>

                            </div>

                        </div>

                    </React.Fragment>
                )}
            </div>
        </React.Fragment>
    );

};
export default TableList;
