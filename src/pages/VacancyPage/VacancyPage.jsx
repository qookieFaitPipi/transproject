import React, {useEffect} from "react";

// components
import Header from "../../Universal/Header/Header";
import Invisible from "../../Universal/Invisible/Invisible";
import VacancyReducer from "./VacancyReducer/VacancyReducer";
import Feedback from "./Feedback/Feedback";
import Footer from "../../Universal/Footer/Footer";

const VacancyPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  
  return(
    <section>
      <Header />
      <Invisible />
      <VacancyReducer />
      <Feedback />
      <Footer />
    </section>
  );
}

export default React.memo(VacancyPage);