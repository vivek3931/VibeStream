import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./SearchResults.css";
import { API_KEY, valueConverter } from "../../data";
import moment from "moment";
import { useEffect } from "react";
import { useState } from "react";
const SearchResults = ({ searchData }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    if (!searchData?.length) return;
    const videoIds = searchData.map((item) => item.id.videoId);
    const relatedVideo = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIds}&key=${API_KEY}`;
    await fetch(relatedVideo)
      .then((res) => res.json())
      .then((data) => setData(data.items));
  };
useEffect(() => {
    fetchData();
}, [searchData]);

// const  api = `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=CHANNEL_ID&q=hello&type=video&key=${API_KEY}`




return (
    <div className="search-results">
        <div className="results-grid">
            {searchData?.map((result, idx) => (
                <Link
                    to={`/video/${data[idx]?.snippet?.categoryId}/${result.id.videoId}`}
                    key={idx}
                    className="result-card"
                >
                    <img
                        src={result.snippet?.thumbnails?.medium?.url}
                        alt={result.snippet?.title}
                        className="thumbnail"
                    />
                    <div className="video-info">
                        <h3>{result.snippet?.title}</h3>
                        <p>{result.snippet?.channelTitle}</p>
                        <span>
                            {valueConverter(data[idx]?.statistics?.viewCount || "0")} views
                            &bull; {moment(result.snippet?.publishedAt).fromNow()}
                        </span>
                    </div>
                </Link>
            ))}
        </div>
    </div>
);
};

export default SearchResults;
