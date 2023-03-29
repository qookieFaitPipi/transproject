import React from "react";

// components
import Header from "../../multComponents/Header/Header";
import VacancyList from "./VacancyList/VacancyList";
import Footer from "../../multComponents/Footer/Footer";
const VacancyPage = () => {
  return(
    <section>
      <Header />
      <VacancyList />
      <Footer />
    </section>
  );
}

export default React.memo(VacancyPage);