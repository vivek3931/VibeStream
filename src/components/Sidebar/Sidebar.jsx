import React from "react";
import "./Sidebar.css";
import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobile from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import tech from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";

const Sidebar = ({ sidebar , category ,setCategory }) => {
  return (
    <div
      className={`bg-[#fff] h-screen w-[15%] fixed top-0 pt-[80px] pl-[2%] duration-300 lg:md:block hidden ${
        sidebar ? "" : "small-sidebar"
      }`}
    >
      <div className="shortcut-links">
        <div className={`side-links ${category===0?"active":""}`} onClick={()=>setCategory(0)}>
          <img src={home} alt="home"/>
          <p>Home</p>
        </div>
        <div className={`side-links ${category===20?"active":""}`} onClick={()=>setCategory(20)}>
          <img src={game_icon} alt="home" />
          <p>Gaming</p>
        </div>
        <div className={`side-links ${category===2?"active":""}`} onClick={()=>setCategory(2)}>
          <img src={automobile} alt="home" />
          <p>Automobiles</p>
        </div>
        <div className={`side-links ${category===17?"active":""}`} onClick={()=>setCategory(17)}>
          <img src={sports} alt="home" />
          <p>Sports</p>
        </div>
        <div className={`side-links ${category===24?"active":""}`} onClick={()=>setCategory(24)}>
          <img src={entertainment} alt="home" />
          <p>Entertainment</p>
        </div>
        <div className={`side-links ${category===28?"active":""}`} onClick={()=>setCategory(28)}>
          <img src={tech} alt="home" />
          <p>Technology</p>
        </div>
        <div className={`side-links ${category===10?"active":""}`} onClick={()=>setCategory(10)}>
          <img src={music} alt="home" />
          <p>Music</p>
        </div>
        <div className={`side-links ${category===22?"active":""}`} onClick={()=>setCategory(22)}>
          <img src={blogs} alt="home" />
          <p>Blogs</p>
        </div>
        <div className={`side-links ${category===25?"active":""}`} onClick={()=>setCategory(25)}>
          <img src={news} alt="home" />
          <p>News</p>
        </div>
        <hr />
      </div>
      <div className="subscribed-list">
        <h3 className="text-[13px] my-[20px] text-[#5a5a5a] font-medium">
          Subscribed
        </h3>
        <div className="side-links">
          <img src={jack} alt="profile1" />
          <p>PewDiePie</p>
        </div>
        <div className="side-links">
          <img src={simon} alt="profile1" />
          <p>MrBeast</p>
        </div>
        <div className="side-links">
          <img src={tom} alt="profile1" />
          <p>Justin Bieber</p>
        </div>
        <div className="side-links">
          <img src={megan} alt="profile1" />
          <p>5-minute Crafts</p>
        </div>
        <div className="side-links">
          <img src={cameron} alt="profile1" />
          <p>Nas Daily</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
