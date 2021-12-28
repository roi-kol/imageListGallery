import React  from 'react';
import { Checkbox } from 'primereact/checkbox';
import { SpeedDial } from 'primereact/speeddial';
import {  itemsShare } from "../itemData";

const GetShortDate = (date) => {
    return date.getDate()+'/'+ (date.getMonth()+1)+'/'+ date.getFullYear();
}

const ImageItem = ({ img, index, toggleCheck, checked }) => {
     return (
        <figure className="figure" key={img.id + '_' + index} >
            <div className='wrapShare'>
                <SpeedDial model={itemsShare} radius={120} direction="down-left" type="quarter-circle"
                    showIcon="pi pi-share-alt" hideIcon="pi pi-times"
                    buttonClassName="p-button-outlined" />
            </div>
            <div className="p-field-checkbox">
                <Checkbox inputId={"check_" + img.id} id={"check_" + img.id} name={img.title} value={"check_" + img.id}
                    onChange={() => toggleCheck('check_' + img.id,"Images")}
                    checked={checked['check_' + img.id]}
                />
                <label htmlFor={"check_" + img.id}>
                    <img alt={img.title} src={"images/"+img.imgFileName} className="figure-img img-fluid rounded" />
                </label>
            </div>
            <figcaption className="figure-caption" ><a download="s2.png" href={img.link}>{img.title}</a></figcaption>
            <div className="imgDate" > { GetShortDate(new Date(img.date))}
                <i className="imgInfo fa fa-info-circle" data-toggle="tooltip" data-placement="top" title={img.code} style={{ cursor: 'pointer' }} ></i>
            </div>
            {/* The hidden dowmload element: */}
            <a style={{ display: "none" }}
                download={img.title + ".png"}
                href={img.imgFileName}
                target="_blank"
                rel="noreferrer"
                id={"img_" + img.id}
            >download {img.title}</a>
        </figure>

    );
};

export default ImageItem;