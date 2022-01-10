import React from "react";
import ImageItem from "./ImageItem";
import "./ImageList.css";

const ImageList = ({ itemData, toggleCheck, checked, itemsShare, typeTab }) => {
  return (
    <React.Fragment>
      <div key={typeTab} className="container imageList" >
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {itemData.map((img, index) =>
            <div key={"key_" + index} className="col imgItm">
              <ImageItem img={img} index={index} toggleCheck={toggleCheck} checked={checked} typeTab={typeTab} />
            </div>
          )}
        </div>
      </div>
      <div className="itmShr">
        {itemsShare}
      </div>
    </React.Fragment>
  );
};
export default ImageList;