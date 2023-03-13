import React, { useRef, useState } from 'react'
import {BsChevronRight} from 'react-icons/bs'
import {TfiWorld} from 'react-icons/tfi'
import './Home.css'
import { Link } from 'react-router-dom'


function Home ()  {
 
    const [email ,setEmail] = useState("")

    const emailRef = useRef()
    
    const handleStart = () => {
        emailRef.current.select();

    }

    const emailref = useRef()
    const handlestart = () => {
        emailref.current.select();

    }

  return (
    <>

   
    <header className='header-nav-home'>
        <div className='bg-image'>
    <nav className='header-home-nav'>
        
        <nav className='container-fluid'>

        <a className='navbar-brand' href="https://www.freepnglogos.com/pics/netflix-logo-png" title="Image from freepnglogos.com">
            <img className='nav_logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix logo" /></a>
            <div className='navbar'>
                <form  className='d-flex' >
                    <select className='header-home-language'><TfiWorld/>
                        <option>İngilizce</option>
                        <option>Türkçe</option>
                    </select>
                 
                </form>
         <Link  to  ="/account"><button className='header-home-sigin'>Oturum aç</button> </Link>
            </div>
        </nav>

    </nav>
    
    <h1 className='header-title-home'>Sınırsız film, TV şovu ve daha fazlası.</h1>
    <br/>
    <h2 className='header-title-home-2'>Her yerde izleyin. İstediğiniz zaman iptal edin.</h2>
    <br/>
    <h2 className='header-title-home-3'>İzlemeye hazır mısınız? Üyeliğinizi oluşturmak veya yeniden başlatmak için e-postanızı girin.</h2>

  
         <div className='home-header-buttons'>
         <input  ref={emailRef}  placeholder='E-posta adresini girin' className='header-home-input-1' />
         <button  className='header-home-button-2' onClick={handleStart}>Başlayın <BsChevronRight  className='home-header-icon'  /></button>
      </div>


    
     </div>
     </header>
     <div className='banner'>
     <div className='banner-1'>
        <div className='banner-contents'>
            <h1 className='banner_title'> Televizyonunuzda <br/> izleyebilirsiniz.</h1>
             <br/>

            <h2>Akıllı TV, PlayStation, Xbox, Chromecast,<br/> Apple TV, Blu-ray oynatıcılar ve daha <br/>fazlasında seyredin.</h2>

            </div>
        <img alt="" class="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img"></img>
       
        </div>

        <div className="banner-2">
        <img alt="" class="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="our-story-card-img"></img>
        <div className='banner-contents'>
          <h1 className='banner_title'>Çevrimdışı izlemek için <br/> içerikleri indirin.</h1>
          <br/>
          <h2>En sevdiğiniz içerikleri kolayca kaydedin ve her <br/> zaman izleyecek bir şeyleriniz olsun.</h2>
          </div>
          </div>

          <div className='banner-3'>
        <div className='banner-contents'>
            <h1 className='banner_title'>İstediğiniz her yerde <br/> izleyin.</h1>
             <br/>

            <h2>Ekstra ücret ödemeden telefonda, tablette,<br/>  bilgisayarda, televizyonda sınırsız film ve dizi izleyin.</h2>

            </div>

            <img alt="" class="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png" data-uia="our-story-card-img"></img>
        
       
        </div>

        <div className='banner-4'>
        <img alt="" class="our-story-card-img" src="https://occ-0-7290-2773.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABZpQ03cQAEG5HLu54H2Ag6iPklqG1BkV9l9ch1GiCxnlyY5l3TWwns7586c4Jey8K72BrTkBSPfDU_Ym9ENf9XZsnQvnws-pfVSs.png?r=8f0" data-uia="our-story-card-img"></img>
        <div className='banner-contents'>
            <h1 className='banner_title'>Çocuklarınız için <br/> profiller oluşturun.</h1>
             <br/>

            <h2>Üyeliğinize dâhil olan bu ücretsiz deneyim sayesinde <br/>  çocuklarınız, sadece onlara özel bir alanda en <br/>  sevdikleri karakterlerle maceralara atılabilir.</h2>

            </div>

     
        </div>

        <div className='banner-5'>
          <h1 className='banner_title1'>Sıkça sorulan sorular</h1>
          <br/>
          
          <form className='form'>
            
          <select class="form-control-1 form-control-lg">
          <option>Netflix nedir?</option>
           </select>
           <select class="form-control-1 form-control-lg">
       <option>Netflix maliyeti nedir?</option>
           </select>
           <select class="form-control-1 form-control-lg">
       <option>Nerde izleyebilirim?</option>
           </select>
           <select class="form-control-1 form-control-lg">
       <option>Nasıl iptal ederim?</option>
           </select>
           <select class="form-control-1 form-control-lg">
       <option>Netflix'te ne izleyebilirim?</option>
           </select>
           <select class="form-control-1 form-control-lg">
       <option>Netflix çocuklar için uygun mudur?</option>
           </select>
    
              
          </form>

          <h1 className='text-1'>İzlemeye hazır mısınız? Üyelik oluşturmak  veya üyeliğinize erişmek için e‑posta adresinizi girin.</h1>

          <div className='home-header-buttons'>
        <input ref={emailref} placeholder='E-posta adresini girin' className='header-home-input-1'></input>
        <button  className='header-home-button-3' onClick={handlestart}>Başlayın <BsChevronRight  className='home-header-icon'/></button>
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
    <Link to="securty"><a className='footer-banner-link-1'>Gizlilik</a></Link> 
    <Link to="contactus"><a className='footer-banner-link-1'>Bize Ulaşın</a></Link>
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


     </div>
     </>
  )
}

export default Home;