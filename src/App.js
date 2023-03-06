import React from "react";

// react-router-dom
import {Routes, Route} from 'react-router-dom';


// pages
import IndexPage from "./pages/IndexPage/IndexPage";
import NewsPage from "./pages/NewsPage/NewsPage";
import ObjectPage from "./pages/ObjectsPage/ObjectPage";

function App() {
  return (
    <>
      <Routes>
        <Route index path="/" element={<IndexPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/objects" element={<ObjectPage />} />
      </Routes>
    </>
  );
}

export default App;
