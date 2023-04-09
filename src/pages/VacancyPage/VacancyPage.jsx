import React, {useEffect} from "react";

// components
import Header from "../../multComponents/Header/Header";
import VacancyList from "./VacancyList/VacancyList";
import Footer from "../../multComponents/Footer/Footer";
const VacancyPage = () => {
  useEffect(() => {
    window.scrollTo(0,0);
  }, [])
  return(
    <section>
      <Header />
      <VacancyList />
      <Footer />
    </section>
  );
}

export default React.memo(VacancyPage);