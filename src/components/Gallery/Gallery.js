import React, { useState, useEffect } from "react";
import { SelectButton } from 'primereact/selectbutton';
import { SplitButton } from 'primereact/splitbutton';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
// import { Toast } from 'primereact/toast';
import { itemData, selctedItems, itemsShare } from "./itemData";
import ImageList from "./Images/ImageList";
import TableList from "./Files/TableList";
import FilterList from "./Filter/FilterList";
import "./Gallery.css";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import 'font-awesome/css/font-awesome.css';
import 'fontsource-heebo/index.css'
const Gallery = React.memo((props) => {
    const [checkedAll, setCheckedAll] = useState(false);
    const [checked, setChecked] = useState(selctedItems);
    const [viewValue, setViewValue] = useState(null);
    const [filtered, setFiltered] = useState(false);
    const [orignalItemData, setOrignalItemData] = useState(itemData);
    const [listItemData, setListItemData] = useState(itemData);
    const defaultView = 'Images';
    useEffect(() => {
        let allChecked = true;
        for (const inputName in checked) {
            if (checked[inputName] === false) {
                allChecked = false;
            }
        }
        if (allChecked) {
            setCheckedAll(true);
        } else {
            setCheckedAll(false);
        }
        setViewValue(defaultView);
    }, [checked]);

    const viewBtnTemplate = (option) => {
        return <li className="nav-item"><i className={option.icon}></i></li>;
    }

    const ViewOptions = [
        { icon: 'fa fa-th', value: 'Images' },
        { icon: 'pi pi-align-justify', value: 'Table' }
    ];
 
    const toggleCheck = (inputName, viewValue) => {
        setViewValue(viewValue);
        setChecked((prevState) => {
            const newState = { ...prevState };
            newState[inputName] = !prevState[inputName];
            return newState;
        });

    };
    const toggleFilter = () => {
        setFiltered(!filtered);
    }

    const selectAll = (value) => {
        setCheckedAll(value);
        setChecked((prevState) => {
            const newState = { ...prevState };
            for (const inputName in newState) {
                newState[inputName] = value;
            }
            return newState;
        });
    };
    const handleFilterClick = (from, to) => {
        debugger;
        console.log(from);
        console.log(to);
        const images = orignalItemData.filter(img =>  new Date(img.date) >= from &&  new Date(img.date) <= to)

        setListItemData(images);
    }
    const handleClearFilterClick = () => {
        setOrignalItemData(orignalItemData);
        setListItemData(orignalItemData);
    }
    return (
        <React.Fragment>
            <div className="container warpGalleryNav">
                <div className="row">
                    <div className="col">
                        <header>
                            <h1>Gallery</h1>
                        </header>
                    </div>
                </div>
                <nav className="navbar  navbar-expand-md navbar-light bg-light">
                    <div className="navbar-collapse collapse w-100 order-0 dual-collapse2">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item btns">
                                <button className="p-button p-component p-splitbutton-defaultbutton downloadBtn" type="button" >
                                    <i className="fa fa-cloud-download" /> Download
                                </button>
                            </li>
                            <li className="nav-item btns">                                
                                <SplitButton label="Share" className="shareBtn" icon="fa fa-share-alt" model={itemsShare}></SplitButton>
                            </li>
                            <li className="nav-item">
                                <div className="p-field-checkbox warpSelectAll">
                                    <label className="txtSelectAll" htmlFor="selectAll">Selcet all</label>
                                    <Checkbox inputId="selectAll" name="selectAll" checked={checkedAll}
                                        onChange={(event) => selectAll(event.target.checked)} />
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="mx-auto order-0">
                        {/* center */}
                    </div>
                    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2">
                        <ul className="navbar-nav me-auto">
                            <Button icon="fa fa-filter" iconPos="left" tooltip="Filter" className={`filterBun ${filtered ? "active" : ""}`} onClick={toggleFilter} />
                            <SelectButton value={viewValue} options={ViewOptions} onChange={(e) => setViewValue(e.value)} itemTemplate={viewBtnTemplate} model={defaultView} />

                        </ul>
                    </div>

                </nav>
            </div>
            {filtered &&
                <FilterList itemData={listItemData} toggleCheck={toggleCheck} checked={checked} handleFilterClick={handleFilterClick} handleClearFilterClick={handleClearFilterClick} />
            }
            {viewValue === "Images" &&
                <ImageList itemData={listItemData} toggleCheck={toggleCheck} checked={checked} />
            }
            {viewValue === "Table" &&
                <TableList itemData={listItemData} toggleCheck={toggleCheck} checked={checked} />
            }
        </React.Fragment>

    )
});
export default Gallery;