import React from "react";
import { Checkbox } from 'primereact/checkbox';
import "./TableList.css";
const TableList = ({ itemData, toggleCheck, checked }) => {
    return (
        <React.Fragment>
            <div className="container tableList">
                {itemData.map((itm, index) =>
                    <div className="row" key={"row_" + index}>
                        <div className="col col-lg-1">
                            <i class="fa fa-download"></i>
                        </div>
                        <div className="col col-lg-1">
                            <i class="fa fa-share-alt"></i>
                        </div>
                        <div className="col">
                            <div className="text-wrap">{itm.description}</div>
                        </div>
                        <div className="col col-lg-1" >{itm.date} </div>
                        <div class="col col-lg-1">
                            <label htmlFor={"check_" + itm.id}>
                                {itm.title}
                            </label>
                        </div>
                        <div className="col col-lg-1">
                            <img alt={itm.title} src={"images/"+itm.imgFileName} className="imgTable figure-img img-fluid rounded" />
                        </div>
                        <div className="col col-lg-1">
                            <div className="p-field-checkbox">
                                <Checkbox inputId={"check_" + itm.id} id={"check_" + itm.id} name={itm.title} value={"check_" + itm.id}
                                    onChange={() => toggleCheck('check_' + itm.id, "Table")}
                                    checked={checked['check_' + itm.id]}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </React.Fragment>
    );

};
export default TableList;
