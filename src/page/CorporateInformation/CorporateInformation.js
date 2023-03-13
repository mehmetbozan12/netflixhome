import React from 'react'
import './CorporateInformation.css'
import { Link } from 'react-router-dom'
import {WiDirectionLeft} from 'react-icons/wi'

const CorporateInformation = () => {
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

   <div className='menu-corporate'>
    <div className='menu-help-write'>
    <a href='#' className='menu-link'><p className='corporate-paragraph'><WiDirectionLeft className='menu-direcction'/>Yardım Ana Sayfasına Geri Dön</p></a>
    <button className='corporate-btn'>YAZDIR</button>
    </div>

   </div>

  <div className='information-menu'>
    <h4 className='information-menu-title'>Netflix Kurumsal Bilgileri</h4>
    <br/>
    
    <p className='information-menu-paragraph'>Netflix farklı ülkelerde birçok üyeye hizmet vermektedir. Netflix hizmetine erişiminizi sağlayan Netflix tüzel kişisi üye olduğunuz ülkeye göre değişir. Bu bilgi, üyelik veya <br/>
     ödeme onay e-postasında belirtilir. Veri denetleyiciniz olarak nitelenen Netflix tüzel kişisi/kişileri yerel gizlilik bildiriminde yer almaktadır.</p>
     <br/>
     <br/>
     <h4 className='information-menu-h2'>Netflix, Inc.</h4>
     <p className='information-menu-paragraph'>121 Albright Way <br/>Los Gatos, CA 95032, ABD</p>
     <br/>

     <h4 className='information-menu-h2'>Netflix International B.V</h4>
     <p className='information-menu-paragraph'>
     Karperstraat 8-10<br/>
     1075 KZ Amsterdam, Hollanda<br/>
     Ticari Sicil No.: 62266519<br/>
     Vergi No.: NL853746333B01<br/>
     Sermaye: 12.500 Avro
     </p>
     <br/>
    
     <h4 className='information-menu-h2'>Netflix Entretenimento Brasil, Ltda.</h4>
     <p className='information-menu-paragraph'>
     Alameda Xingu, 350 - 14º andar - Alphaville Industrial<br/>
     Barueri, CEP 06455-911 - SP - Brezilya<br/>
     CNPJ: 13.590.585/0002-70
     </p>
     <br/>
    
     <h4 className='information-menu-h2'>Netflix Entertainment Services India LLP.</h4>
     <p className='information-menu-paragraph'>
     Level 11, Godrej BKC, Plot C-68 <br/>
     G Block, BKC- Bandra (East) <br/>
     Mumbai 400051, Hindistan
     </p>
     <br/>
    

     <h4 className='information-menu-h2'>Netflix G.K.</h4>
     <p className='information-menu-paragraph'>
     Tokyo Midtown East 3F <br/>
     9-7-2 Akasaka <br/>
     Minato-ku<br/>
     Tokyo 107-0052 Japonya
     </p>
     <br/>
 
     <h4 className='information-menu-h2'>Netflix Services Korea Ltd.</h4>
     <p className='information-menu-paragraph'>
     20F, Tower A, Centropolis Building<br/>
     26, Ujeongguk-ro, Jongno-gu, Seul, 03161, Kore Cumhuriyeti
     </p>
     <br/>
    
     <h4 className='information-menu-h2'>Netflix Services UK Limited</h4>
     <p className='information-menu-paragraph'>
     100 New Bridge Street, Londra, EC4V 6JA <br/>
     Ticari Sicil No.: 9091899<br/>
     Vergi No.: 623 25810 01805 A
     </p>
     <br/>

     <h4 className='information-menu-h2'>Netflix Pte. Ltd.</h4>
     <p className='information-menu-paragraph'>
     9 Straits View, Marina One West Tower #14-07/12, Singapur 018937 <br/>
    Ticari Sicil No.: 201531197W
     </p>
     <br/>
   
     <h4 className='information-menu-h2'>Netflix Services France S.A.S.</h4>
     <p className='information-menu-paragraph'>
     11 Place Édouard VII, 75009 Paris, Fransa <br/>
     Ticari Sicil No.: 843 655 549 RCS Paris
     </p>
     <br/>
  

     <h4 className='information-menu-h2'>Netflix Servicios de Transmisión España, S.L.</h4>
     <p className='information-menu-paragraph'>
     Paseo de la Castellana 89, 28046 Madrid, İspanya<br/>
     Vergi No.: B88182514  

     </p>
     <br/>
  
     <h4 className='information-menu-h2'>Netflix México S. de R.L. de C.V.</h4>
     <p className='information-menu-paragraph'>
     Paseo de la Reforma 483, Piso 37, Col. Cuauhtémoc, Cuauhtémoc, CDMX, CP 06500<br/>
     Ticari Sicil No.: 112483<br/>
     RFC (vergi no.): NME110513P13
     </p>
     <br/>
  
     <h4 className='information-menu-h2'>Netflix Australia Pty Ltd..</h4>
     <p className='information-menu-paragraph'>

     </p>

     <br/>
  
     <h4 className='information-menu-h2'>Netflix Services Germany GmbH</h4>
     <p className='information-menu-paragraph'>
     Level 19, 181 William Street<br/>
     Melbourne VIC 3000, Avustralya 
     </p>
      
      <br/>

     <h4 className='information-menu-h2'>Netflix Services Italy S.R.L. </h4>
     <p className='information-menu-paragraph'>
      Via Boncompagni no. 8-10, Villino Rattazzi<br/> 
      00187, Roma, İtalya
     </p>
     <br/>

     <h4 className='information-menu-h2'>Netflix Services Canada ULC</h4>
     <p className='information-menu-paragraph'>
     1200 Waterfront Centre, 200 Burrard St <br/>   
     Vancouver BC V7X 1T2, Kanada
     </p>
     
     <br/>
     <p className='update-menu'> <strong>Son Güncelleme</strong>:1 Ocak 2023</p>
  </div>


   <div className="footer-corporate">
  
  <div class="footer-2-corporate">  
            
                  <div class="select-corporate">
                      <select className="select1-corporate">     
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

export default CorporateInformation