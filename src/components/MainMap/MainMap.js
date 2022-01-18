import React, { useEffect, useRef, useState } from "react";
import "./MainMap.css";
// import the ArcGIS core stuff, add more as needed
// just google what you need and find the import reference from the arcgis js docs
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";

// redux imports!
import { useDispatch } from "react-redux";
// you need to import each action you need to use
import { setview } from "../../redux/slices/mainSlice";
import { setselectedID } from "../../redux/slices/mainSlice";
import { setstoreHighlight } from "../../redux/slices/mainSlice";

const MainMap = () => {
  // if you are setting redux state, call dispatch
  const dispatch = useDispatch();
  // set map ref to itself with useRef
  const mapRef = useRef();
  // set state for cursor hover change
  const [cursor, setCursor] = useState("default");

  useEffect(() => {
    // load map only once when component mounts!
    // this is where you can create the map, add layers, etc.
    // then this is set to the view in your redux store, and can be called anywhere
    // be careful... setting a complex object goes against the redux docs.. but still works
    if (mapRef.current) {
      const map = new Map({
        basemap: "gray-vector",
      });

      const view = new MapView({
        container: mapRef.current,
        map: map,
        center: [-80.84140258200966, 35.226810552804864],
        zoom: 5,
      });

      const featureLayer = new FeatureLayer({
        url: "https://services.arcgis.com/V6ZHFr6zdgNZuVG0/arcgis/rest/services/Landscape_Trees/FeatureServer/0",
        outFields: "*",
      });

      map.add(featureLayer);

      // handle cursor hover in map
      view.on("pointer-move", function (event) {
        view.hitTest(event).then(function (response) {
          if (response.results.length > 0 && response.results[0].graphic.sourceLayer.title === "Landscape Trees") {
            setCursor("pointer");
          } else {
            setCursor("default");
          }
        });
      });

      // handle on feature click and set highlight and selectedID to store
      let highlightSelect;
      view.when(function () {
        view.on("click", function (event) {
          view.hitTest(event).then(function (response) {
            try {
              const feature = response.results[0].graphic;
              if (response.results.length > 0 && response.results[0].graphic.sourceLayer.title === "Landscape Trees") {
                dispatch(setselectedID(feature.attributes.FID));
                let graphic = response.results[0].graphic;
                console.log(graphic);
                view.goTo(graphic);
                if (highlightSelect) {
                  highlightSelect.remove();
                  dispatch(setstoreHighlight(null));
                }
                view.whenLayerView(featureLayer).then((layerView) => {
                  highlightSelect = layerView.highlight(feature);
                  dispatch(setstoreHighlight(highlightSelect));
                });
              } else {
                dispatch(setselectedID("none"));
                if (highlightSelect) {
                  highlightSelect.remove();
                  dispatch(setstoreHighlight(null));
                }
              }
            } catch {}
          });
        });
      });

      // set the view to the store! (only once)
      dispatch(setview(view));
    }
  }, []);

  return <div className="mainMap" ref={mapRef} style={{ cursor: cursor }}></div>;
};

export default MainMap;
