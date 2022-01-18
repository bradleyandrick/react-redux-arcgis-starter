import React from "react";
import "./SelectedFeatureInfo.css";
// import redux stuff
import { useSelector } from "react-redux";

const SelectedFeatureInfo = () => {
  // set up useSelector to get value from store for selectedID
  const selectedID = useSelector((state) => state.mainSlice.selectedID);
  return (
    <div className="selectedFeatureInfo">
      <h4>Selected ID:</h4>
      <div>{selectedID}</div>
      <p className="anotherComponentText">(another component)</p>
    </div>
  );
};

export default SelectedFeatureInfo;
