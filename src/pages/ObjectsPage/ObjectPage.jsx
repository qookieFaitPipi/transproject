import React, {useEffect, useState} from "react";
import axios from "axios";

// components
import Header from "../../Universal/Header/Header";
import Invisible from "../../Universal/Invisible/Invisible";
import MapComponent from "./MapComponent/MapComponent";
import ControlField from "./ControlField/ControlField";
import ObjectsReducer from "./ObjectsReducer/ObjectsReducer";
import Footer from "../../Universal/Footer/Footer";

const ObjectPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])

  const [objects, setObjects] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    axios.get('https://backend.tpe.su/get_objects').then((response) => {
      setObjects(response.data)
    });
  }, []);
  
  return(
    <section>
      <Header />
      <Invisible />
      <MapComponent />
      <ControlField
        objects={objects}
        setObjects={setObjects}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ObjectsReducer
        objects={objects}
        searchValue={searchValue}
      />
      <Footer />
    </section>
  );
}

export default React.memo(ObjectPage);