import React from 'react'
import Play from '../../components/Play/Play'
import Recommended from '../../components/Recommended/Recommended'
import { useParams } from 'react-router-dom'

const Video = () => {
const {videoId , categoryId} = useParams()

  return (
    <div className='bg-[#f9f9f9] lg:md:pl-[2%] lg:md:pr-[2%] pl-[5%] pr-[5%] pt-[20px] pb-[20px] flex flex-wrap justify-between'>
      <Play videoId={videoId}/>
      <Recommended categoryId={categoryId} />
    </div>
  )
}

export default Video