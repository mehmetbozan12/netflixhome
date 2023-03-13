import React, { useEffect, useState } from 'react'
import './Row.css';
import axios from 'axios';

const Row = ({title,fetchURL}) => {

 const [movies , setMovies] = useState([])  

 useEffect (()=> {
    axios.get(fetchURL).then((response)=>{
     setMovies(response.data.results)
    })}, [fetchURL])

  return (
    <>
    <div className='row'>
    <h2 className='row-title'>{title}</h2>
   <div className='row-link'>
    <div id={'slider'}>
        {movies.map((item ,id) =>(
            <div className='row-links'>  
            <img className='row-image' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt= {item?.title}/>
            <div className='row-paragraf'>
              <p className='row-prgrf' >{item?.title}</p>
               </div>
            
            </div>
        ))}

    </div>
   </div>
  </div>

    </>
  )
}

export default Row