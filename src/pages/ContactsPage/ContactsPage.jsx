import React from "react";

// components
import Header from "../../multComponents/Header/Header";
import Contacts from "./Contacts/Contacts";
import Location from "./Location/Location";
import Footer from "../../multComponents/Footer/Footer";

const ContactsPage = () => {
  return(
    <section>
      <Header />
      <Contacts />
      <Location />
      <Footer />
    </section>
  );
}

export default React.memo(ContactsPage);