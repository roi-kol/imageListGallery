import React, { useState, useEffect } from "react";
import { Checkbox } from 'primereact/checkbox';
import "./FilterList.css";
import { Calendar } from 'primereact/calendar';
import { Button } from 'primereact/button';

const FilterList = ({ itemData, toggleCheck, checked,handleFilterClick, handleClearFilterClick}) => {
    const [fromDate1, setFromDate1] = useState(null);
    const [toDate1, setToDate1] = useState(null);
      
    return (
        <React.Fragment>
           
            <div className="container filterList">

                <fieldset className="fldStFilter"  >
                    <legend className="txtFilterForm legendTxt">Search by Date</legend>

                    <div className="row calcRow">
                        <div className="col-12  col-lg-2 txtFilterForm">
                            Date
                        </div>
                        <label htmlFor="fromDate1" className="col-6 col-sm-6 col-md-2 col-lg-1 col-form-label txtFilterForm" aria-labelledby="fromDate1">
                            From
                        </label>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
                            <Calendar id="fromDate1" value={fromDate1} onChange={(e) => setFromDate1(e.value)} dateFormat="dd/mm/yy" locale="en" showIcon monthNavigator yearNavigator yearRange="1973:1974" />
                        </div>
                        <label htmlFor="toDate1" className="col-6 col-sm-6 col-md-2 col-lg-1 col-form-label txtFilterForm" aria-labelledby="toDate1">
                            To
                        </label>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 ">
                            <Calendar id="toDate1" value={toDate1} onChange={(e) => setToDate1(e.value)} dateFormat="dd/mm/yy" locale="en" showIcon monthNavigator yearNavigator yearRange="1973:1974" />
                        </div>
                        <div className="col-12 col-sm-4 col-md-3 col-lg-2"></div>
                    </div>
                    <div className="row ">
                        <div className="col-2 col-md-6 col-lg-5 "></div>
                        <div className="col-12 col-md-6 ">
                            <Button label="Cencel" className="filterBtn p-button-outlined" onClick={handleClearFilterClick} />
                            <Button label="Filter" className="filterBtn p-button-raised"onClick={() => handleFilterClick(fromDate1,toDate1)} />
                        </div>

                    </div>
                </fieldset>
            </div>
        </React.Fragment>
    );

};
export default FilterList;
