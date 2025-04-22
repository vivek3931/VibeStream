import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import "./Home.css";
import { useState } from "react";

const Home = ({ sidebar }) => {
   const [category, setCategory] = useState(0)

  return (
    <>
      <Sidebar sidebar={sidebar}  category={category} setCategory={setCategory}/>
      <div
        className={`bg-[#f9f9f9] pl-[5%] lg:md:pl-[17%] pr-[5%]  lg:md:pr-[2%] pt-[20px] pb-[20px] ${sidebar ? "" : "large-container"}`}
      >
        <Feed category={category}/>
      </div>
    </>
  );
};

export default Home;
