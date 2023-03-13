import React from 'react'
import './Usegiftcard.css'
import { Link } from 'react-router-dom'
import {TfiWorld} from 'react-icons/tfi'

const Usegiftcard = () => {
  return (
    <>
    
 
    <div className='usegiftcard-home'>
    <div className='bg-image-use'>

          
    <div className='header-usegift'>
            <img className='usegift-logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix logo" />
            
         <Link  to  ="/account"><button className='header-home-sigin'>Oturum aç</button> </Link>
        
         </div>
        <h1 className='usegift-title'>Hediyenizi kullanın</h1>
        <p className='usegift-paragraph'>Başlamak için, kodu aşağıya girin.</p>
        <div className='usegift-btn'>
        <input className='usegift-input' placeholder='Kod veya Pin'></input>
        <button className='usegift-button'>Kullan</button>
        </div>
         <div className='usegift-links'>
         <a className='usegift-link' href='#'>Hediye kartları hakkında yardım ister misiniz?</a>
         <p className='usegift-link-paragraph'>Bu sayfa robot olmadığınızı kanıtlamak için Google <br/>
          reCAPTCHA tarafından korunuyor.  <a className='link-information' href='#'>Daha fazlasını öğrenin.</a></p>
         </div>
       
       </div>
    
       
    
    </div>
    <div className='footer-banner'>
  <div className='title-banner'>    
    <h3  className='title-footer-banner' >Sorularınız mı var? 0850-390-7444 numaralı telefonu arayın</h3>
   </div>
   <div className='footer-banner-links'>
    <div className='footer-banner-link'>
      <Link to="sss"><a className='footer-banner-link-1'>SSS</a></Link>
      <Link to="account"><a className='footer-banner-link-1'>Hesap</a></Link>
      <a className='footer-banner-link-1'>İş İmkanları</a>
      <Link to="termsofuse"><a className='footer-banner-link-1'>Kullanım Koşulları</a></Link>
      <Link to="corporateinformation"><a className='footer-banner-link-1'>Kurumsal Bilgiler</a></Link> 
      <Link to="legalprovision"><a className='footer-banner-link-1'>Yasal Hükümler</a></Link>  

       
    </div>
    <div className='footer-banner-link'>
    <Link to="giftcards"><a className='footer-banner-link-1'>Hediye Kartı Koşulları</a></Link>
    <Link to="media"><a className='footer-banner-link-1'>Medya Merkezi</a></Link> 
    <Link to="usegiftcard"><a className='footer-banner-link-1'>Hediye Kartı Kullan</a></Link> 
        <a className='footer-banner-link-1'>Gizlilik</a>
        <a className='footer-banner-link-1'>Bize Ulaşın</a>
        <a className='footer-banner-link-1'>Sadece Netflix'te</a>
    </div>

    <div className='footer-banner-link'>
        <a className='footer-banner-link-1'>Yardım Merkezi</a>         
        <a className='footer-banner-link-1'>Yatırımcı İlişkileri</a>
        <a className='footer-banner-link-1'>İzleme Yolları</a>
        <a className='footer-banner-link-1'>Çerez Tercihler</a>
        <a className='footer-banner-link-1'>Hız Testi</a>
 
  
    </div>
</div>
  

</div>

<select className='header-home-language-1'><TfiWorld/>
                        <option>İngilizce</option>
                        <option>Türkçe</option>
                    </select>
  <h4 className='footer-banner-title-4'>Netflix Türkiye</h4>
 <br/>
 <br/>


   
    </>
  )
}

export default Usegiftcard