import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import {AiOutlineInstagram } from 'react-icons/ai';
import {SlSocialTwitter} from 'react-icons/sl';
import {AiOutlineYoutube} from 'react-icons/ai';
import './Footer.css';

function Footer() {
  return (
    <div className='home-footer'>
         <div className='content-footer'>
              <a className='footer-icon' href="https://www.facebook.com/mehmt.bozan?mibextid=ZbWKwL"><FaFacebook/></a>
              <a className='footer-icon' href="https://instagram.com/mbzn0417?igshid=NmQ2ZmYxZjA="><AiOutlineInstagram/></a>
              <a className='footer-icon' href="https://twitter.com/Mhmnbzn?t=FVmFHvPOl8Sicg32P6u4mw&s=09"><SlSocialTwitter/></a>
              <a className='footer-icon'href="https://www.youtube.com/"><AiOutlineYoutube/></a>
   
         
         </div>
    <div className='footer-home-links'>
         <div className='footer-home-link'>
            <ul className='footer-links'>
               <a className='footer-link' href=''><li>Sesli Betimleme</li></a>
               <a className='footer-link' href=''><li>Yatırımcı İlişkileri</li></a>
               <a className='footer-link' href=''><li>Yasal Hükümler</li></a>
               </ul>
         </div>

         <div className='footer-home-link'>
            <ul  className='footer-links'>
               <a  className='footer-link' href=''><li>Yardım Merkezi</li></a>
               <a  className='footer-link' href=''><li>İş İmkanları</li></a>
               <a  className='footer-link' href=''><li>Çerez Tercihleri</li></a>

            </ul>
         </div>
         <div className='footer-home-link'>
            <ul  className='footer-links'>
               <a  className='footer-link' href=''><li>Hediye Kartları</li></a>
               <a  className='footer-link' href=''><li>Kullanım Koşulları</li></a>
               <a  className='footer-link' href=''><li>Kurumsal  Bilgiler</li></a>

            </ul>
         </div>
         <div className='footer-home-link'>
            <ul  className='footer-links'>
               <a  className='footer-link' href=''><li>Medya Merkezi</li></a>
               <a  className='footer-link'href=''><li>Gizlilik</li></a>
               <a  className='footer-link'href=''><li>Bize ulaşın</li></a>

            </ul>
         </div>
         </div>

         <div className='footer-home-button'>
            <button className='footer-btn'>Hizmet Kodu</button>
         </div>

         <h6 className='footer-title'>© 1997-2023 Netflix ,Inc.</h6>
        </div>
  )
}

export default Footer