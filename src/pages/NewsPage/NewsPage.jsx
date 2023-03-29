import React, { useState } from "react";

// components
import Header from "../../multComponents/Header/Header";
import NewsReducer from "./NewsReducer/NewsReducer";
import Footer from "../../multComponents/Footer/Footer";

const NewsPage = () => {
  return(
    <section>
      <Header />
      <NewsReducer />
      <Footer /> 
    </section>
  );
}

export default React.memo(NewsPage);