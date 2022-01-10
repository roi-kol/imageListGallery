import React, { useState } from 'react';
import { Checkbox } from 'primereact/checkbox';
import { SpeedDial } from 'primereact/speeddial';
import { itemsShare } from "../itemData";
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';



const GetShortDate = (date) => {
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
}
const ImageItem = ({ img, index, toggleCheck, checked, typeTab }) => {
    const [displayDialog, setDisplayDialog] = useState(false);
    const onHideDialog = () => {
        setDisplayDialog(false);
    }
    const onShowDialog = () => {
        setDisplayDialog(true)
    }

    return (
        <React.Fragment>
           
            <figure className="figure" key={img.id + '_' + index} >
                <div className='wrapShare'>
                    <SpeedDial model={itemsShare} radius={120} direction="down-left" type="quarter-circle"
                        showIcon="pi pi-share-alt" hideIcon="pi pi-times"
                        buttonClassName="p-button-outlined" />
                </div>
                { typeTab === "videos" &&
                    <div className='video'>
                        <Button icon="fa fa-3x fa-play-circle" iconPos="left" tooltip="play" className="p-button-rounded p-button-secondary playVideoBtn" onClick={onShowDialog} />
                    </div>
                }
                <div className="p-field-checkbox">
                    <Checkbox inputId={"check_" + img.id} id={"check_" + img.id} name={img.title} value={"check_" + img.id}
                        onChange={() => toggleCheck('check_' + img.id, "Images")}
                        checked={checked['check_' + img.id]}
                    />
                    <label htmlFor={"check_" + img.id}>
                        <img alt={img.title} src={img.imgFileName} className="figure-img img-fluid rounded" loading="lazy" />
                    </label>
                </div>
                <figcaption className="figure-caption" ><a download={img.title + ".png"} href={img.link}>{img.title}</a></figcaption>
                <div className="imgDate" > {GetShortDate(new Date(img.date))}
                    <i className="imgInfo fa fa-info-circle" data-toggle="tooltip" data-placement="top" title={img.code} style={{ cursor: 'pointer' }} ></i>
                </div>
                {/* The hidden dowmload element: */}
                <a style={{ display: "none" }}
                    download={img.title + ".png"}
                    href={img.img}
                    target="_blank"
                    rel="noreferrer"
                    id={"img_" + img.id}
                //  ref={e=>this.dofileDownload = e}
                >download {img.title}</a>
            </figure>


            <Dialog header="Video" visible={displayDialog} style={{ width: '70vw' }} onHide={onHideDialog}>
                <iframe width="560" height="315" src={img.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </Dialog>
        </React.Fragment>
    );
};

export default ImageItem;