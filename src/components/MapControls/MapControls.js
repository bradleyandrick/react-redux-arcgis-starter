import React from "react";
import "./MapControls.css";
// import redux stuff
import { useSelector, useDispatch } from "react-redux";
import { setselectedID } from "../../redux/slices/mainSlice";

const MapControls = () => {
  // call dispach again to be able to set state/update in store
  const dispatch = useDispatch();
  // call useSelector to get the store values to be used by component
  const view = useSelector((state) => state.mainSlice.view);
  const storeHighlight = useSelector((state) => state.mainSlice.storeHighlight);

  // function to zoom to where feature layer is
  function zoomTestButtonClick() {
    var newCenter = {
      center: [-82.4421, 35.6117],
      zoom: 15,
    };
    view.goTo(newCenter);
  }
  // function to set definition expression, also remove selected feature
  function setDefinitionExpressionClick() {
    view.map.layers.items[0].definitionExpression = "FID = 2";
    if (storeHighlight !== null) {
      storeHighlight.remove();
    }
    dispatch(setselectedID("none"));
  }
  // function to clear definition expression
  function clearDefExpressionClick() {
    view.map.layers.items[0].definitionExpression = "";
  }
  // function to clear feature selection from neighbor component button
  function clearSelectionClick() {
    if (storeHighlight !== null) {
      storeHighlight.remove();
    }
    dispatch(setselectedID("none"));
  }

  return (
    <div className="mapControls">
      <h2>Map Controls</h2>
      <button onClick={zoomTestButtonClick}>Zoom To Feature Layer</button>
      <button onClick={setDefinitionExpressionClick}>Set Definition Expression</button>
      <button onClick={clearDefExpressionClick}>Clear Definition Expression</button>
      <button onClick={clearSelectionClick}>Clear Selection</button>
      <h4>(this is a separate component)</h4>
    </div>
  );
};

export default MapControls;
