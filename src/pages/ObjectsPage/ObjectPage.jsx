import React, {useEffect, useState} from "react";

// components
import Header from "../../Universal/Header/Header";
import Invisible from "../../Universal/Invisible/Invisible";
import MapComponent from "./MapComponent/MapComponent";
import SearchField from "./SearchField/SearchField";
import ObjectsReducer from "./ObjectsReducer/ObjectsReducer";
import Footer from "../../Universal/Footer/Footer";

const ObjectPage = () => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return(
    <section>
      <Header />
      <Invisible />
      <MapComponent />
      <SearchField 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ObjectsReducer searchValue={searchValue}/>
      <Footer />
    </section>
  );
}

export default React.memo(ObjectPage);