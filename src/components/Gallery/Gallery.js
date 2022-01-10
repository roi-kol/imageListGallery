import React, { useState, useEffect } from "react";
import { imageList, videoList, selctedItems, itemsShare } from "./itemData";
import ImageList from "./Images/ImageList";
import TableList from "./Files/TableList";
import FilterList from "./Filter/FilterList";
import TopNav from "../Nav/TopNav"
import "./Gallery.css";
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
const Gallery = React.memo((props) => {
    const [checkedAll, setCheckedAll] = useState(false);
    const [filtered, setFiltered] = useState(false);
    const [checked, setChecked] = useState(selctedItems);
    const [viewValue, setViewValue] = useState(null);
    const [orignalItemData, setOrignalItemData] = useState( props.type === "images"?  imageList : videoList);
    const [listItemData, setListItemData] = useState( props.type === "images"?  imageList : videoList);
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
        const images = orignalItemData.filter(img =>  new Date(img.date) >= from &&  new Date(img.date) <= to)
        setListItemData(images);
    }
    const handleClearFilterClick = () => {
        setOrignalItemData(orignalItemData);
        setListItemData(orignalItemData);
    }
    return (
        <React.Fragment>
            <div className=" warpGalleryNav">
                <TopNav 
                itemsShare={itemsShare} checkedAll={checkedAll} 
                viewValue={viewValue} toggleFilter={toggleFilter} 
                filtered={filtered} selectAll={selectAll}
                setViewValue={setViewValue} defaultView={defaultView}/>
            </div>
            {filtered &&
                <FilterList itemData={listItemData} toggleCheck={toggleCheck} checked={checked} 
                handleFilterClick={handleFilterClick} handleClearFilterClick={handleClearFilterClick} />
            }
            {viewValue === "Images" &&
                <ImageList itemData={listItemData} toggleCheck={toggleCheck} checked={checked} typeTab={props.type} />
            }
            {viewValue === "Table" &&
                <TableList itemData={listItemData} toggleCheck={toggleCheck} checked={checked} typeTab={props.type}/>
            }
        </React.Fragment>

    )
});
export default Gallery;