import React, { useState } from 'react'
import { CiSearch,  } from "react-icons/ci";
import { FiBell, FiChevronDown  } from "react-icons/fi";
import './Header.css'

function Header() {
    const [scrolled , setScrolled] = useState(false);
    window.onscroll = () => {
        setScrolled(window.pageYOffset === 0 ? false:  true);
        return () => (window.onscroll=null); 
    }

  return (
    <>
    <div className='header-home'>
        <div className='header-home-left'>
          
        <a className="header-logo-1" href="https://www.freepnglogos.com/pics/netflix-logo-png">
            <img className='header-logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix logo" /></a>
        
                <div>
                    <ul className='header-links'>
                      <a href='#'className='header-link'><li>Anasayfa</li></a>
                      <a href='#'className='header-link'><li>Diziler</li></a>
                      <a href='#'className='header-link'><li>Filmler</li></a>
                      <a href='#'className='header-link'><li>Yeni ve Popüler</li></a>
                      <a href='#'className='header-link'><li>Listem</li></a>
                      <a href='#'className='header-link'><li>Dile Göre Göz At</li></a>
                    </ul>
                </div>

        
            
            </div> 
        <div className='header-home-right'>
          <CiSearch  className='icon'/>
            <FiBell className='icon'/>
                <img className='header-img' src='https://cdn1.img.sputniknews.com.tr/img/07e6/0c/01/1064052640_0:0:760:429_1920x0_80_0_0_f6ec803ed4c89d861a389b240e309a17.png.webp'></img>

               
         <div className='profile'>
            <FiChevronDown  className='icon'/>
          <div className='options'>
          <span className='aa'>Profil Yönetimi</span>
          <span className='aa'> Profili Aktar</span>
          </div>
        
          </div>
         </div>
    </div>
  
    </>
  )
}

export default Header;