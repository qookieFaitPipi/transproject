import React, {useEffect} from "react";

// components
import Header from "../../Universal/Header/Header";
import Invisible from "../../Universal/Invisible/Invisible";
import FullPageWall from "./FullPageWall/FullPageWall";
import AboutCompany from "./AboutCompany/AboutCompany";
import Tools from "./Tools/Tools";
import Founders from "./Founders/Founders";
import Partners from "./Partners/Partners";
import Components from "./Components/Components";
import Footer from "../../Universal/Footer/Footer";

const IndexPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return(
    <section>
      <Header />
      <Invisible />
      <FullPageWall />
      <AboutCompany />
      <Tools />
      <Founders />
      <Partners />
      <Components />
      <Footer />
    </section>
  );
}

export default React.memo(IndexPage);