import "./App.css";

import NavHeader from "./components/NavHeader/NavHeader";
import MainMap from "./components/MainMap/MainMap";
import MapControls from "./components/MapControls/MapControls";
import SelectedFeatureInfo from "./components/SelectedFeatureInfo/SelectedFeatureInfo";

function App() {
  return (
    <div className="App">
      <NavHeader></NavHeader>
      <div className="mapHolder">
        <MainMap></MainMap>
        <MapControls></MapControls>
        <SelectedFeatureInfo></SelectedFeatureInfo>
      </div>
    </div>
  );
}

export default App;
