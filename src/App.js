import React from "react";

// react-router-dom
import {Routes, Route} from 'react-router-dom';


// pages
import IndexPage from "./pages/IndexPage/IndexPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import ObjectPage from "./pages/ObjectsPage/ObjectPage";
import VacancyPage from "./pages/VacancyPage/VacancyPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";

function App() {
  return (
    <>
      <Routes>
        <Route onUpdate={() => window.scrollIntoView({align: {top: 0}})} index path="/" element={<IndexPage />} />
        <Route onUpdate={() => window.scrollIntoView({align: {top: 0}})} path="/news" element={<NewsPage />} />
        <Route onUpdate={() => window.scrollIntoView({align: {top: 0}})} path="/objects" element={<ObjectPage />} />
        <Route onUpdate={() => window.scrollIntoView({align: {top: 0}})} path="/vacancy" element={<VacancyPage />} />
        <Route onUpdate={() => window.scrollIntoView({align: {top: 0}})} path="/contacts" element={<ContactsPage />} />
      </Routes>
    </>
  );
}

export default App;
