import React, {useEffect, useState} from "react";

// components
import Header from "../../multComponents/Header/Header";
import MapComponent from "./MapComponent/MapComponent";
import SearchField from "./SearchField/SearchField";
import ObjectsReducer from "./ObjectsReducer/ObjectsReducer";
import Footer from "../../multComponents/Footer/Footer";

const ObjectPage = () => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return(
    <section>
      <Header />
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