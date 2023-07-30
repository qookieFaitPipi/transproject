import React, {useEffect} from "react";

// components
import Header from "../../multComponents/Header/Header";

import VacancyReducer from "./VacancyReducer/VacancyReducer";
import FeedbackForm from "./FeedbackForm/FeedbackForm";
import Footer from "../../multComponents/Footer/Footer";

const VacancyPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  
  return(
    <section>
      <Header />
      <VacancyReducer />
      <FeedbackForm />
      <Footer />
    </section>
  );
}

export default React.memo(VacancyPage);