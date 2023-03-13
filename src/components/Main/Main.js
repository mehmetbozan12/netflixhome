import React, { useEffect, useState } from 'react'
import { GrPlayFill} from 'react-icons/gr'
import {MdErrorOutline} from 'react-icons/md'
import './Main.css'
import requests from '../Requests/Requests'
import axios from 'axios';

const  Main = () => {
  
  const [movies , setMovies] = useState([])
  
  const movie = movies[Math.floor(Math.random()*movies.length)]


  useEffect(()=>{
    axios.get(requests.requestPopular).then((response)=>{
     setMovies(response.data.results)
    })

  },[])
  return (
    <div className='main'>
   <div className='bg-image'>
    <div className='main-hover'></div>
    <img className='bg-img' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}></img>
    
 <div className='main-title-1'>
    <h1 className='main-title-2'>{movie?.title}</h1>
    </div>
    <div className="main-paragraf">
    <p className='main-prgrf'>{movie?.overview}</p>
    </div>
    <div className='main-button'>
    <div className='play-btn'>
      <button className='main-btn-1 ' ><GrPlayFill className='gr-play'/> 
        Oynat</button>
      </div>

      <div className='buton'>
      <button className='main-btn-2'> <MdErrorOutline className='md-more'/>
      Daha Fazla Bilgi</button>
     </div>

</div>
  </div>

  <div className='age-btn'> 
      <button className='age-button'>18+</button></div>

    </div>
  )
}

export default Main