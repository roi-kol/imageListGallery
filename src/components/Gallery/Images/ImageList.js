import React  from "react";
import ImageItem from "./ImageItem";
import "./ImageList.css";

const ImageList = ({ itemData, toggleCheck, checked, itemsShare }) => {
  const images = itemData.map((img, index) => {
    return (
      <React.Fragment>
        <div key={"key_" + index} className="col imgItm">
          <ImageItem img={img} index={index} toggleCheck={toggleCheck} checked={checked}  />
        </div>
      </React.Fragment>
    );
  });

  return (
    <React.Fragment>
      <div className="container imageList" >
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {images}
        </div>
      </div>
      <div className="xxxx">
        {itemsShare}</div>
    </React.Fragment>
  );

};
export default ImageList;