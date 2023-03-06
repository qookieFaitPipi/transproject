import React from "react";

// components
import Header from "../../multComponents/Header/Header";
import FullPageWall from "./FullPageWall/FullPageWall";
import AboutCompany from "./AboutCompany/AboutCompany";
import Tools from "./Tools/Tools";
import Workers from "./Workers/Workers";
import Partners from "./Partners/Partners";
import Components from "./Components/Components";
import Footer from "../../multComponents/Footer/Footer";

const IndexPage = () => {
  return(
    <section>
      <Header />
      <FullPageWall />
      <AboutCompany />
      <Tools />
      <Workers />
      <Partners />
      <Components />
      <Footer />
    </section>
  );
}

export default React.memo(IndexPage);