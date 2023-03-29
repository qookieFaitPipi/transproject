import React from "react";

// components
import Footer from "../../multComponents/Footer/Footer";
import MapComponent from "./MapComponent/MapComponent";
import ObjectsReducer from "./ObjectsReducer/ObjectsReducer";
import Header from "../../multComponents/Header/Header";

const ObjectPage = () => {
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