import React, {useEffect} from "react";

// components
import Header from "../../multComponents/Header/Header";
import MapComponent from "./MapComponent/MapComponent";
import ObjectsReducer from "./ObjectsReducer/ObjectsReducer";
import Footer from "../../multComponents/Footer/Footer";

const ObjectPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return(
    <section>
      <Header />
      <MapComponent />
      <ObjectsReducer />
      <Footer />
    </section>
  );
}

export default React.memo(ObjectPage);