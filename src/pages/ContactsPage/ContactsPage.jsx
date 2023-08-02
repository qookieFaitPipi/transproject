import React from "react";

// components
import Header from "../../Universal/Header/Header";
import Invisible from "../../Universal/Invisible/Invisible";
import Contacts from "./Contacts/Contacts";
import Location from "./Location/Location";
import Footer from "../../Universal/Footer/Footer";

const ContactsPage = () => {
  return(
    <section>
      <Header />
      <Invisible />
      <Contacts />
      <Location />
      <Footer />
    </section>
  );
}

export default React.memo(ContactsPage);