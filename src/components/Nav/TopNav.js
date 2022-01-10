import React from "react";

import { SelectButton } from 'primereact/selectbutton';
import { SplitButton } from 'primereact/splitbutton';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import { SpeedDial } from 'primereact/speeddial';
import "./TopNav.css";
const TopNav = React.memo((props) => {

    const viewBtnTemplate = (option) => {
        return <li className="nav-item"><i className={option.icon}></i></li>;
    }

    const ViewOptions = [
        { icon: 'fa fa-th', value: 'Images' },
        { icon: 'pi pi-align-justify', value: 'Table' }
    ];



    return (
        <React.Fragment>
            <nav className="navbar  navbar-expand navbar-light bg-light">

                <div className="navbar-collapse collapse w-100 order-0 order-md-0 dual-collapse2">
                    <div className="navbar-nav me-auto">
                        <div className="selectViewMenu">
                            <SelectButton value={props.viewValue} options={ViewOptions} onChange={(e) => props.setViewValue(e.value)} itemTemplate={viewBtnTemplate} model={props.defaultView} />
                        </div>
                        <Button icon="fa fa-filter" iconPos="left" tooltip="Filter" className={`filterBun ${props.filtered ? "active" : ""}`} onClick={props.toggleFilter} />
                    </div>
                </div>
                {/* <div className="mx-auto order-0">
                    center
                </div> */}
                <div className="navbar-collapse collapse w-100 order-1 dual-collapse2">

                    <ul className="navbar-nav ms-auto">

                        <li className="nav-item d-none d-md-block">
                            <div className="p-field-checkbox warpSelectAll">
                                <label className="txtSelectAll" htmlFor="selectAll"> Select All</label>
                                <Checkbox inputId="selectAll" name="selectAll" checked={props.checkedAll}
                                    onChange={(event) => props.selectAll(event.target.checked)} />
                            </div>
                        </li>


                        <li className="nav-item btns d-none d-md-block">
                            <SplitButton label="Share" className="shareBtn" icon="fa fa-share-alt shareBtnIcon" model={props.itemsShare}></SplitButton>
                        </li>
                        <li className="nav-item speedDialBtn btns  d-md-none">
                            <SpeedDial model={props.itemsShare} direction="down" type="button"
                                showIcon="pi pi-share-alt" hideIcon="pi pi-times"
                                buttonClassName="p-button-outlined" />
                        </li>

                        <li className="nav-item btns">
                            <button className="p-button p-component p-splitbutton-defaultbutton downloadBtn" type="button" >
                                <i className="fa fa-cloud-download" /><span className=" d-none d-md-block"> Download</span>
                            </button>
                        </li>

                    </ul>
                </div>


            </nav>
            <div className="d-none d-sm-block d-md-none">
                <div className="p-field-checkbox warpSelectAll ">
                    <label className="txtSelectAll" htmlFor="selectAll"> Select All</label>
                    <Checkbox inputId="selectAll" name="selectAll" checked={props.checkedAll}
                        onChange={(event) => props.selectAll(event.target.checked)} />
                </div>
            </div>

        </React.Fragment>
    );
});
export default TopNav;
