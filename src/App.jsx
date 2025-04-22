import Navbar from "./components/Navbar/Navbar";
import Home from "./Pages/Home/Home.jsx";
import Video from "./Pages/Video/Video.jsx";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import SearchResults from "./components/SearchResults/SearchResult.jsx";
import Recommended from "./components/Recommended/Recommended.jsx";
// import Search from './pages/Search';


function App() {
  const [sidebar, setSidebar] = useState(true);
  const [data ,setData]  = useState([])
  

  // const []

  return (
    <div>
      <Navbar setSidebar={setSidebar} searchDataMethod={setData}/>
      <Routes>
        <Route path="/" element={<Home sidebar={sidebar} />} />
        <Route path="/video/:categoryId/:videoId" element={<Video />} />
        <Route path="/search" element={<SearchResults searchData={data} />}/>
        <Route path="*" element={<h1>Page not found</h1>} /> {/* Fallback route */}
      </Routes>
    </div>
  );
}

export default App;
