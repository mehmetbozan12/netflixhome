import React from 'react'
import './LegalProvision.css'
import { Link } from 'react-router-dom'
import {WiDirectionLeft} from 'react-icons/wi'

const LegalProvision = () => {
  return (
    <>
        <div className="header">
          <a className="logo">
         <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" width="100" alt="netflix logo" /></a>
      <div className="help">
         
      <a class="help1" href="/tr">Yardım Merkezi</a>
         
      </div>
      <div className="button">
      <button  className="sign">NETFLiX'E KATILIN</button>
      <Link to="/account"> <button className="sign-1" >OTURUM AÇ</button></Link>
      </div>
  </div>

   <div className='menu-legal'>
    <div className='menu-help-write'>
    <a href='#' className='menu-link'><p className='legalprovision-paragraph'><WiDirectionLeft className='menu-direcction'/>Yardım Ana Sayfasına Geri Dön</p></a>
    <button className='legal-btn'>YAZDIR</button>
    </div>

   </div>

    
<div className='legalprovision-home'>
    <h1 className='legal-title'>Yasal Hükümler</h1>
    <br/>
    <p className='legal-paragraph'>Netflix hizmeti, hizmet dahilinde sağlanan tüm içerik dahil olmak üzere; telif hakkı, ticari sır ve diğer fikri mülkiyet yasa ve anlaşmaları ile korunmaktadır.</p>
    
    <h4 className='legal-title'>Telif Hakkı</h4>
    <br/>
    <p className='legal-paragraph'>
    Hizmetimiz kapsamında sunduğumuz dizi ve filmlerin telif hakkı, aralarında Netflix Studios, LLC'nin de yer aldığı büyük yapımcılara aittir. Size ya da bir başkasına ait olan telif<br/>
     haklarının Netflix hizmeti aracılığıyla ihlal edildiğini düşünüyorsanız Telif Hakkı İhlali Şikayet Formu'nu (www.netflix.com/copyrights) doldurarak bizimle iletişime geçin.
    </p>
 
    <h4 className='legal-title'>Ticari Markalar</h4>
    <br/>
    <p className='legal-paragraph'>
    Netflix ve N Logosu; Netflix, Inc. şirketine ait ticari markalardır.<br/>

Bizden izin almadıkça, Netflix işaretlerini kendinize aitmiş gibi ya da Netflix'e sponsorluk yaptığınızı veya destek sağladığınızı ima edecek şekilde kullanmayın.<br/>

Netflix adını ya da logosunu taşıyan bir ürün, Netflix'in yansımasıdır. İmtiyaz sahiplerimizden biri olmadığınız müddetçe, diğer kişilerin adımızı ya da logomuzu taşıyan <br/>
herhangi bir şey yapmalarına, satmalarına ya da dağıtmalarına izin vermeyiz.
    </p>

    <h4 className='legal-title'>Patentler</h4>
    <br/>
    <p className='legal-paragraph'>
    Netflix yayın ve DVD hizmetleri patentlerle korunmuştur. Hizmetlerimizle ilişkili patentler hakkında bilgi almak için lütfen www.netflix.com/patents adresini ziyaret edin.
    </p>

    <h4 className='legal-title'>Üçüncü Taraf Bildirimleri</h4>
    <br/>
    <p className='legal-paragraph'>
    Netflix uyumlu cihazlar üzerinde Netflix hizmetini izlemeyi sağlamak için yüklenmiş olan yazılımlar, açık kaynak veya ücretsiz yazılım lisanslarıyla (“Açık Kaynak Yazılım”) <br/>
    sunulan yazılımları ve/veya taraflarca Netflix'e lisanslanmış olan ticari yazılımları (“Ticari Yazılım”) içerebilir. Netflix Kullanım Koşulları, söz konusu Açık Kaynak Yazılım <br/>
     lisansları doğrultusunda sahip olduğunuz hak ve yükümlülüklerde bir değişikliğe neden olmaz. Gerekli onaylar, lisans koşulları ve bildirimleri de dahil olmak üzere Açık Kaynak <br/>
      ve Ticari Yazılımlar hakkında ek bilgilere buradan ulaşabilirsiniz.
    </p>
    <br/>
    
  <p className='legal-paragraph'> <strong>Son Güncelleme:</strong> 11 Mayıs 2018</p>


</div>





   <div className="footer">
  
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

export default LegalProvision