import React, { useState } from "react";
import menu_icon from "../../assets/menu.png";
// import logo from "../../assets/logo.png";
import search_icon from "../../assets/search.png";
import upload_icon from "../../assets/upload.png";
import more_icon from "../../assets/more.png";
import notification_icon from "../../assets/notification.png";
import profile_icon from "../../assets/jack.png";
import { Link } from "react-router-dom";
import { API_KEY } from "../../data";
import logo2 from '../../assets/logo2.png'

const Navbar = ({ setSidebar, searchDataMethod }) => {
  const [input, setInput] = useState("");

  const fetchVideos = async () => {
    const search_url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${input}&key=${API_KEY}`;
    const response = await fetch(search_url);
    const apiData = await response.json();

    searchDataMethod(apiData.items);
  };

  return (
    <div className="flex py-[10px] px-[2%] items-center justify-between shadow bg-[#fff] sticky top-0 z-10">
      <div className="flex items-center">
        <img
          className="h-[16px] w-[22px] mr-[25px] lg:md:block hidden"
          src={menu_icon}
          alt="menu"
          onClick={() => setSidebar((prev) => (prev === false ? true : false))}
        />
        <Link to={`./`}>
          <img
            className="lg:md:h-[55px] h-[60px] w-[180px] lg:md:w-[180px]"
            src={logo2}
            alt="logo"
          />
        </Link>
      </div>
      <div className="flex">
        <div className="flex items-center border border-[#ccc] mr-[15px] py-[0px] px-[12px] rounded-[25px]">
          <input
            className="input-search lg:md:w-[400px] border-0 py-[8px] outline-0 bg-transparent w-[100px]"
            type="text"
            value={input}
            placeholder="Search here..."
            onChange={(e) => setInput(e.target.value)}
          />
          <Link to={"search"}>
            <button
              className=" w-[15px] h-[15px] text-xs font-medium text-[#5a5a5a] cursor-pointer"
              type="submit"
              onClick={fetchVideos}
            >
              <img src={search_icon} alt="search" />
            </button>
          </Link>
        </div>
      </div>
      <div className="lg:md:flex  items-center hidden">
        <img
          className="w-[25px] h-[25px] mr-[25px] "
          src={upload_icon}
          alt="upload"
        />
        <img
          className="w-[25px] h-[25px] mr-[25px]"
          src={more_icon}
          alt="more"
        />

        <img
          className="w-[25px] h-[25px] mr-[25px]"
          src={notification_icon}
          alt="notification"
        />
        <img
          className="w-[35px]  rounded-[50%] h-[35px] mr-[25px]"
          src={profile_icon}
        />
      </div>
    </div>
  );
};

export default Navbar;
