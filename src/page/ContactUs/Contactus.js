import React from 'react'
import { Link } from 'react-router-dom'
import {WiDirectionRight} from 'react-icons/wi'
import {BsChevronRight} from 'react-icons/bs'
import './Contactus.css'
const Contactus = () => {
  return (
    <>
               <div className="header-contactus">
          <a className="logo">
         <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" width="100" alt="netflix logo" /></a>
      <div className="help">
         
      <a class="help1-contactus" href="/tr">Yardım Merkezi</a>
         
      </div>
      <div className="button-contactus">
      <button  className="sign-contactus">NETFLiX'E KATILIN</button>
      <Link to="/account"> <button className="sign-1-securty" >OTURUM AÇ</button></Link>
      </div>
  </div>

   <div className='contactus-menu'>
    <h1 className='contactus-title'>Bize Ulaşın</h1>
    <p className='contactus-paragraph'>Bize daha fazla bilgi verin, sizin için en uygun çözümü bulalım</p>
    <input className='contactus-input' placeholder='Sorununuzu açıklayın'></input>
    <br/>
    <br/>
    <h2 className='contactus-title2'>Hızlı Bağlantılar </h2>
  <div className='contactus-links'>
    <a className='contactus-link' href='#'>Parola sıfırla <BsChevronRight className='direction-icon-1'/></a>
    <hr  className='contactus-hr'/>
    <a className='contactus-link' href='#'>E-postayı güncelle  <BsChevronRight className='direction-icon-2'/></a>
    <hr className='contactus-hr'/>
    <a className='contactus-link' href='#'>Oturum açma yardımı al  <BsChevronRight className='direction-icon-3'/></a>
    <hr className='contactus-hr'/>
    <a className='contactus-link' href='#'>Ödeme yötemini güncelle  <BsChevronRight className='direction-icon-4'/></a>
    <hr className='contactus-hr'/>
    <a className='contactus-link' href='#'>Dizi veya film isteğinde bulunun  <BsChevronRight className='direction-icon-5'/></a>
    </div>
   
   </div>

   <div className="footer-contactus">
  
  <div class="footer-2">  
            
                  <div class="select">
                      <select className="select1">     
                              <option value="id">Türkçe</option>
                              <option value="id">England</option>
                      </select>  
              </div>
          
            
          <ul class="footer-links">
              <li class="links">
              <Link to="/termsofuse"><a className="lnk" >Kullanım Koşulları</a></Link> 
              </li>
              <li class="links">
                  <a   className="lnk" href="/tr">Gizlilik</a>
              </li>
              
              <li class="links">
                  <a className="lnk"  href="/tr">Çerez Tercihleri</a>
              </li>
               
                  <li class="links">
                  <Link to="/corporateinformation"><a className="lnk" >Kurumsal Bilgiler</a></Link>
                  </li>        
          </ul>
      </div>
  
  </div>
   </>
  )
}

export default Contactus