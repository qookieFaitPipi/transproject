import React, {useEffect} from "react";

// components
import Header from "../../multComponents/Header/Header";
import IndexHeader from "./IndexHeader/IndexHeader";

import FullPageWall from "./FullPageWall/FullPageWall";
import AboutCompany from "./AboutCompany/AboutCompany";
import Tools from "./Tools/Tools";
import Workers from "./Workers/Workers";
import Partners from "./Partners/Partners";
import Components from "./Components/Components";
import Footer from "../../multComponents/Footer/Footer";

const IndexPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return(
    <section>
      <IndexHeader />
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