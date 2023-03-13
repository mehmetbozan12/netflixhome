import React from 'react'
import './Giftcards.css'
import { Link } from 'react-router-dom'
import {WiDirectionLeft} from 'react-icons/wi'

const GiftCards = () => {
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

   <div className='menu-gift'>
    <div className='menu-help-write'>
    <a href='#' className='menu-link'><p className='menu-cards-paragraph-1'><WiDirectionLeft className='menu-direcction'/>Yardım Ana Sayfasına Geri Dön</p></a>
    <button className='giftcards-btn'>YAZDIR</button>
    </div>

   </div>

   <div className='menu-cards-gift'>
    <h1 className='gift-cards-title'>Netflix Hediye Kartı ve Netflix Bakiyesi Koşulları</h1>
    <br/>
    <br/>
    <p className='menu-cards-paragraph'>
    Burada yer alan Netflix Hediye Kartı ve Netflix Bakiyesi koşulları ("Koşullar"), Hediye Kartlarının ve Netflix Bakiyesinin satın alımı ve kullanımı için geçerlidir.<br/><br/>
    Bu Koşullar kapsamında kullanılan "Hediye Kartı" ibaresi, tek kullanımlık olan ve sabit bir parasal değeri bulunan, kullanılmamış Netflix hediye kartlarını (elektronik kodlar <br/>
    dâhil) ifade eder. "Netflix Bakiyesi" ise kullanılmış Netflix Hediye Kartları ve elektronik hediye kodları dâhil olmak üzere Netflix hizmetine erişim ücretini ödemek için <br/>
    kullanılabilecek her türlü önceden ödenmiş bakiyeyi ifade eder.
    </p>
    <br/>
    <br/>
    <h4 className='menu-giftcards-title'>1. Netflix Hediye Kartının Kullanımı</h4>
    <br/>
    <p className='menu-cards-paragraph'>
    Hediye Kartları, Netflix hizmeti için yalnızca Netflix hizmetinin Hediye Kartı üzerinde belirtilen para biriminde sunulduğu ülkelerde kullanılabilir. Hediye Kartını kullanmak için<br/>
    netflix.com/redeem internet adresine giderek kartın PIN numarasını girin. Bir Hediye Kartını kullanabilmeniz için Netflix üyeliği oluşturmanız veya mevcut ve geçerli bir Netflix<br/>
    üyeliğinizin olması gerekir. Hediye Kartını kullandığınızda, kartın toplam değeri Netflix hesabınıza yansıtılır. Hediye Kartları, üçüncü taraflar üzerinden faturalandırılan hesaplar<br/>
    için kullanılamaz. Hesabınız üçüncü bir taraf üzerinden fatura ediliyorsa Hediye Kartını kullanabilmek için ilk önce Netflix ücretinin ilgili üçüncü taraf üzerinden <br/>
    faturalandırılmasını iptal etmeniz gerekir. Üçüncü tarafın son fatura döneminin sona ermesinin ardından netflix.com/redeem internet adresinde kartınızı kullanmanız gerekir.

    </p>
    <br/>
    <br/>

    <h4 className='menu-giftcards-title'>2. Netflix Bakiyenizin Kullanımı</h4>
    <br/>
    <p className='menu-cards-paragraph'>
    Netflix Bakiyesini, herhangi bir Netflix üyelik planına uygulayabilirsiniz. Netflix Bakiyeniz seçtiğiniz Netflix üyelik planının abonelik ücretinden düşükse ve bize başka bir <br/>
    ödeme yöntemi sunmadıysanız Netflix üyeliğiniz, Netflix Bakiyenizin kalan değeri ile orantılı olacaktır. Bu da, faturalandırma döneminizin süresinin kısalabileceği anlamına<br/>
    gelir. Netflix Bakiyeniz tükendiğinde Netflix hesabınıza daha fazla Netflix Bakiyesi ekleyene veya bize başka bir geçerli ödeme yöntemi sunana kadar Netflix hizmetinin ücretli<br/>
    kısmını kullanamazsınız.
    </p>
    <br/>
    <br/>
    <h4 className='menu-giftcards-title'>3. Ön ödemeli üyeliklerde para iadesi ve iptal</h4>
    <br/>
    <p className='menu-cards-paragraph'>
    Hediye Kartları veya Netflix Bakiyesi için para iadesi yapılmaz veya nakit ya da nakit karşılığı için kullanılamaz. Bu koşulun istisnası, ikamet ettiğiniz ülkenin zorunlu yasaları <br/>
    uyarınca iptal veya uygunsuzluk nedeniyle para iadesi alma hakkına sahip olduğunuz durumlardır. Netflix üyeliğinizi iptal ettiğiniz hâlde Netflix hesabınızda hâlâ Netflix<br/>
    Bakiyesi varsa Netflix üyeliğiniz, Netflix Bakiyenizin tamamen tüketilmesinin ardından iptal edilir.
    </p>
    <br/>
    <br/>

    <h4 className='menu-giftcards-title'>4. Ücret veya Son Geçerlilik Tarihi Yoktur</h4>
    <br/>
    <p className='menu-cards-paragraph'>
    Hediye Kartlarının ve Netflix Bakiyesinin süresi sona ermez ve bunlar herhangi bir ücrete tabi değildir.
    </p>
    <br/>
    <br/>
    <h4 className='menu-giftcards-title'>5. Ek Kısıtlamalar</h4>
    <br/>
    <p className='menu-cards-paragraph'>
    Sahtekârlıkla elde edilmiş Hediye Kartı veya Netflix Bakiyesi, tamamen Netflix'in takdirine bağlı olarak geçersiz veya hükümsüz kılınabilir. Netflix'ten önceden alınmış yazılı<br/>
    izin olmadan Hediye Kartlarının herhangi bir kişiye, web sitesine, işletmeye, ürüne veya hizmete Netflix tarafından destek ya da sponsorluk sağlandığını veya bunların <br/>
    herhangi bir şekilde Netflix ile ilişkili olduğunu belirten veya ima eden bir biçimde kullanımı yasaktır.
    </p>
    <br/>
    <br/>

    <h4 className='menu-giftcards-title'>6. Belgenin Düzenlenme Yeri; Geçerli Kanun</h4>
    <br/>
    <p className='menu-cards-paragraph'>
    Hediye Kartları, Netflix International B.V. tarafından düzenlenmektedir. Bu Koşullar, Hollanda kanunlarına tabidir ve yine Hollanda kanunları kapsamında yorumlanabilir.<br/>
    Ancak bu durum, ikamet ettiğiniz ülkenin emredici yasaları uyarınca sahip olabileceğiniz tüketici koruma haklarını sınırlandırmamaktadır.
    </p>
         <br/>

<p className='gift-cards-update'><strong>Son Güncelleme:</strong> 1 Haziran 2021</p>

   </div>
    
    
   <div className="footer-giftcard">
  
  <div class="footer-2-giftcard">  
            
                  <div class="select-giftcard">
                      <select className="select1-giftcard">     
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

export default GiftCards