import React, {useEffect} from "react";

// react-router-dom
import {Routes, Route} from 'react-router-dom';

// pages
import IndexPage from "./Pages/IndexPage/IndexPage";
import NewsPage from "./Pages/NewsPage/NewsPage";
import ObjectPage from "./Pages/ObjectsPage/ObjectPage";
import VacancyPage from "./Pages/VacancyPage/VacancyPage";
import ContactsPage from "./Pages/ContactsPage/ContactsPage";

function App() {
  useEffect(() => {
    if(window.location.origin === 'http://tpe.su' || window.location.origin === 'http://www.tpe.su') {
      window.location = 'https://tpe.su';
    }
  }, [])
  return (
    <Routes>
      <Route onUpdate={() => window.scrollIntoView({align: {top: 0}})} index path="/" element={<IndexPage />} />
      <Route onUpdate={() => window.scrollIntoView({align: {top: 0}})} path="/news" element={<NewsPage />} />
      <Route onUpdate={() => window.scrollIntoView({align: {top: 0}})} path="/objects" element={<ObjectPage />} />
      <Route onUpdate={() => window.scrollIntoView({align: {top: 0}})} path="/vacancy" element={<VacancyPage />} />
      <Route onUpdate={() => window.scrollIntoView({align: {top: 0}})} path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
}

export default App;
