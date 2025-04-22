import React, { useEffect, useState } from "react";
import like from "../../assets/like.png";
import dislike from "../../assets/dislike.png";
import share from "../../assets/share.png";
import save from "../../assets/save.png";

import "./Play.css";
import { API_KEY, valueConverter } from "../../data";
import moment from "moment";
import { useParams } from "react-router-dom";

const Play = () => {

   const {videoId} = useParams() 
  const [apiData, setApiData] = useState(null);
  const [channelData, setChannelData] = useState(null);
  const [commentData, setCommentData] = useState([]);

  const fetchVideoData = async () => {
    const videoDetails_url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
    await fetch(videoDetails_url)
      .then((res) => res.json())
      .then((data) => setApiData(data.items[0]));
  };

  const fetchChannelData = async () => {
    const channelDetails_url = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData.snippet.channelId}&key=${API_KEY}`;
    await fetch(channelDetails_url)
      .then((res) => res.json())
      .then((data) => setChannelData(data.items[0]));
  };

  const fetchCommentData = async () => {
    const commentDetails_url = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${API_KEY}`;
    await fetch(commentDetails_url)
      .then((res) => res.json())
      .then((data) => setCommentData(data.items));
  };
  useEffect(() => {
    fetchVideoData();
  }, [videoId]);

  useEffect(() => {
    fetchChannelData();
  }, [apiData]);


  useEffect(()=>{
fetchCommentData();
  },[videoId])


  return (
    <div className="lg:md:basis-[69%] basis-[100%]">
      <iframe
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        className="w-full lg:md:h-[37vw] h-[50vh]"
      ></iframe>
      {/* <video className='w-[100%]' src={video1} controls autoPlay></video> */}
      <h3 className="mt-[10px] font-medium text-[22px]">
        {apiData ? apiData.snippet.title : "Title here"}
      </h3>
      <div className="flex items-center justify-between flex-wrap mt-[10px] text-[14px] text-[#5a5a5a]">
        <p>
          {apiData ? valueConverter(apiData.statistics.viewCount) : "25k"} views
          &bull;{" "}
          {apiData
            ? moment(apiData.snippet.publishedAt).fromNow()
            : "2 days ago"}
        </p>
        <div className="flex play-video-info ">
          <span>
            <img src={like} alt="like" />
            {apiData ? valueConverter(apiData.statistics.likeCount) : 125}
          </span>
          <span>
            <img src={dislike} alt="dislike" />
          </span>
          <span>
            <img src={share} alt="" />
            Share
          </span>
          <span>
            <img src={save} alt="" />
            Save
          </span>
        </div>
      </div>
      <hr className="border-0 h-[1px] bg-[#ccc] my-[10px] mx-[0]" />
      <div className="flex items-center mt-[20px] ">
        <img
          className="w-[40px] rounded-full mr-[15px]"
          src={
            channelData
              ? channelData.snippet.thumbnails.default.url
              : "img here"
          }
          alt="jack"
        />
        <div className="flex-[1] leading-[18px]">
          <p className="text-[#000] font-bold text-[18px]">
            {apiData ? apiData.snippet.channelTitle : "title here"}
          </p>
          <span className="text-[13px] font-medium text-[#5a5a5a]">
            {channelData
              ? valueConverter(channelData.statistics.subscriberCount)
              : "2M"}{" "}
            Subscribers
          </span>
        </div>
        <button className="bg-[red] text-[#fff] py-[8px] px-[30px] border-0 outline-0 cursor-pointer rounded-[4px]">
          Subscribe
        </button>
      </div>
      <div className="lg:md:pl-[55px] pl-[0] my-[15px] mx-[0]">
        <p className="text-[14px] mb-[5px] text-[#5a5a5a]">
          {apiData
            ? apiData.snippet.description.slice(0, 250)
            : "Description here"}
        </p>
        <hr />
        <h4 className="text-[14px] font-bold mt-[15px] text-[#5a5a5a]">
          {apiData ? valueConverter(apiData.statistics.commentCount) : 130}{" "}
          Comments
        </h4>
        {commentData.map((comment, idx) => {
          return (
            <div key={idx} className="comment">
              <img src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} alt="user_profile" />
              <div>
                <h3>
                  {comment.snippet.topLevelComment.snippet.authorDisplayName} <span>3 days ago</span>
                </h3>
                <p>
                 {comment.snippet.topLevelComment.snippet.textDisplay}
                </p>
                <div className="comment-action">
                  <img src={like} alt="like" />
                  <span>{valueConverter(comment.snippet.topLevelComment.snippet.likeCount)}</span>
                  <img src={dislike} alt="dislike" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Play;
