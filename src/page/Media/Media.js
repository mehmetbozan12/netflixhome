import React from 'react'
import './Media.css'

const Media = () => {
  return (
    <div>
      {/* 
      HEADER MEDİA
      -----------------------------------------------------------------------------------------------------------------------------------------------------------------------
      */}
      <div className='bc-image'>
    <div className="header-media">
    <a className="logo-media">
   <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" width="130" alt="netflix logo" /></a>
   <h3 className='title-header-media'> Medya Merkezi</h3>
   <div className='buton-media-header'>
    <button className='btn-header-media'>Türkçe</button>
    <button className='btn-header-media'>Türkiye</button>
    <button className='btn-header-media'>Haber Merkezi</button>
    <button className='btn-header-media'>Kaynaklar</button>
    <button className='btn-header-media-1'>Başvur</button>
    <button className='btn-header-media-2'>Basın İçin Oturum Açma</button>
   </div>
</div>

<div className='menu-media'>
<h1 className='title-media'>Türkiye ile paylaşabileceğiniz  <br/>hikâyeleri ve deneyimleri<br/> keşfedin.</h1>
<input className='input-media' placeholder='Netflix içeriklerini ve haberlerini arayın'></input>
</div>
</div>



{/**
 LİST-MEDİA
 ----------------------------------------------------------------------------------------------------------------------------------------
 */}


<div className='list-media'>
  <>
 <button className='buton-media'>Şubat</button>
 <h2 className='title-1-media'> ayında yayınlanan içeriklerle ilgileniyorum</h2>
</>
<div className='buton-2-media'>
<button className='buton1-media'>Film</button>
<button className='buton2-media'>Dizi</button>
<button className='buton3-media'>Belgesel</button>
<button className='buton4-media'>Çocuk</button>
<button className='buton5-media'>Reality</button>
<button className='buton6-media'>Stand-up Komedisi</button>
<button className='buton7-media'>Oyun</button>
</div>
</div>
<hr/>


{/*
  MENU  MEDİA
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/}
<div className='menu-1-media'>

   <a  className='link-media' href='#'>
    <img className='picture-media' src='media-picture/picture-1.jpg' alt="" ></img>
    <p className='prgrf-media'>1 Mart 2023</p>
    </a>
    <a className='link-media' href='#'>
    <img className='picture-media' src='media-picture/picture-2.jpg'></img>
    <p className='prgrf-media'>2 Mart 2023</p>
    </a>
    <a className='link-media' href='#'>
    <img className='picture-media' src='media-picture/picture-3.jpg'></img>
    <p className='prgrf-media'>3 Mart 2023</p>
    </a>
    <a className='link-media' href='#'>
    <img className='picture-media' src='media-picture/picture-4.jpg'></img>
    <p className='prgrf-media'>4 Mart 2023</p>
    </a>
    <a className='link-media' href='#'>
    <img className='picture-media' src='media-picture/picture-5.jpg'></img>
    <p className='prgrf-media'>5 Mart 2023</p>
    </a>
    <a className='link-media' href='#'>
    <img className='picture-media' src='media-picture/picture-6.jpg'></img>
    <p className='prgrf-media'>6 Mart 2023</p>
    </a>
    <a className='link-media' href='#'>
    <img className='picture-media' src='media-picture/picture-7.jpg'></img>
    <p className='prgrf-media'>7 Mart 2023</p>
    </a>
    <a className='link-media' href='#'>
    <img className='picture-media' src='media-picture/picture-8.jpg'></img>
    <p className='prgrf-media'>8 Mart 2023</p>
    </a>
    <a className='link-media' href='#'>
    <img className='picture-media' src='media-picture/picture-8.jpg'></img>
    <p className='prgrf-media'>9 Mart 2023</p>
    </a>
    <a className='link-media' href='#'>
    <img className='picture-media' src='media-picture/picture-8.jpg'></img>
    <p className='prgrf-media'>10 Mart 2023</p>
    </a>

    </div>

    <div className=' btn-media'>
      <a href="#">
      <button className='button-media'>Mart ayından 13  içerik  daha göster</button>
      </a>
    </div>

<hr className='hr-media'/>

{/*
CONTAİNER MEDİA
------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 */}

<div className='container-media'>
<div className='news-media'>
  <h className="title-news-media">En son haberler</h>

  <div className='containers'>
    
   <div className='container-media-1'>  
   <h4 className='h4-media-1'> Tüm Dünya</h4>
   <h3 className='container-title-media-1'>20 Şubat Haftası Top 10: <br/>
     Yoksullar - "Outer Banks" Bu <br/>
     Hafta En Çok İzlenen İçerik <br/>
      Olurken "Meşhur Hayalet Ernest"<br/>
      İngilizce Filmler Listesinin <br/> 
      Zirvesine Oturdu</h3>
      <div className='container-media-btn-1'>
    <a href='#'>
    <button className='container-media-inpt-1' >Daha fazlasını okuyun</button>
    </a>
   </div>
     </div>
     <div className='hr-news-media'></div>

     <div className='container-media-2'> 
     <h4 className='h4-media-2'>Tüm Dünya, Japonya</h4> 
   <h3 className='container-title-media-2'>Netflix ve The Pokémon <br/>
   Company, yeni stop- motion dizisi <br/>
    Pokémon Concierge için iş birliği <br/>
     yapacak</h3>
     <div className='container-media-btn-1'>
    <a href='#'>
    <button className='container-media-inpt-1' >Daha fazlasını okuyun</button>
    </a>
   </div>
     </div>
     <div className='hr-news-media'></div>

     <div className='container-media-3'> 
     <h4 className='h4-media-2'>Tüm Dünya, Güney Kore</h4> 
   <h3 className='container-title-media-3'>Fiziği Mükemmel Kılan Şey  <br/>
   Nedir? Güçlü Olanın Ayakta  <br/>
   Kaldığı, Kore Yapımı Sevilen <br/>
   Reality Dizisi "En Güçlü 100"e <br/>
   Göre Yağsız Vücut En <br/>
   İyisi</h3>
     
   <div className='container-media-btn-1'>
    <a href='#'>
    <button className='container-media-inpt-1' >Daha fazlasını okuyun</button>
    </a>
   </div>
     </div>
     <div className='container-media-btn-2'>
    <a href='#'>
    <button className='container-media-inpt-2' >Daha fazla haberi haber Merkezinde okuyun</button>
    </a>
   </div>
   </div>

</div>
</div>

<div className='menu-media-1'>
  <h1 className='menu-media-h1'>Marka görsellerini mi arıyorsunuz?</h1>
  <p className='menu-media-p'>Netflix'le ilgili daha fazla görsel ve bilgiye kurumsal sitemizden ulaşabilirsiniz.</p>

  <div className='menu-media-btn'>
    <a href='#'>
    <button className='menu-media-inpt' >Netflix Hakkında'ya git</button>
    </a>
   </div>
</div>

 {/* 
  FOOTER MEDİA
 ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  */}
 <div className='footer-media'>
  <div className='institutional-media' >
    <h1 className='title-footer-media'>Kurumsal</h1>
    <div className='link-footer-media'>
    <a className='link-footer-media-1' href="#">Netflix Hakkında</a>
    <a className='link-footer-media-1' href="#">Haber Merkezi</a>
    <a className='link-footer-media-1' href="#">Marka Görselleri</a>
    <a className='link-footer-media-1' href="#">İzlemeye başlayın</a>
    </div>
  </div>


 <div className='content-media' >
    <h1 className='title-footer-media'>İletişim</h1>
    <div className='link-footer-media'>
    <a className='link-footer-media-1' href="#">Bizimle İletişime  Geçin</a>
    <a href="#">
      <img src=""></img>
    </a>
    <a href="#">
      <img src=""></img>
    </a>
    <a href="#">
      <img src=""></img>
    </a>
    </div>
  </div>
  
  <div className='legal-media' >
    <h1 className='title-footer-media'>Yasal Hükümler</h1>
    <div className='link-footer-media'>
    <a className='link-footer-media-1' href="#">Hüküm ve Koşullar</a>
    <a className='link-footer-media-1' href="#">Gizlilik</a>
    <a className='link-footer-media-1' href="#">Çerez Tercihleri</a>
    </div>
  </div>

 </div>
 </div>

  )
}

export default Media