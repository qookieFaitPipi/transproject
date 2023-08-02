import React, {useEffect} from "react";

// components
import Header from "../../Universal/Header/Header";
import Invisible from "../../Universal/Invisible/Invisible";
import NewsReducer from "./NewsReducer/NewsReducer";
import Footer from "../../Universal/Footer/Footer";

const NewsPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return(
    <section>
      <Header />
      <Invisible />
      <NewsReducer />
      
      <Footer /> 
    </section>
  );
}

export default React.memo(NewsPage);