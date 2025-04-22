import React, { useEffect } from "react";
import "./Recommended.css";
import { API_KEY, valueConverter } from "../../data";
import { useState } from "react";
import { Link } from "react-router-dom";

const Recommended = ({ categoryId }) => {
  const [data, setData] = useState([]);

   const fetchData = async () => {
    const relatedVideo = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=45&regionCode=US&videoCategoryId=${categoryId}&key=${API_KEY}`;
    await fetch(relatedVideo)
      .then((res) => res.json())
      .then((data) => setData(data.items));
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <div  className="lg:md:basis-[30%] basis-[100%] ">
      {data.map((res, idx) => {
        return (
          <Link to={`/video/${res.snippet.categoryId}/${res.id}`} key={idx} className="side-video-list">
            <img src={res.snippet.thumbnails.medium.url} alt="thumbnail1" />
            <div className="vid-info">
              <h4>{res.snippet.title}</h4>
              <p>{res.snippet.channelTitle}</p>
              <p>{valueConverter(res.statistics.viewCount)} views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Recommended;
