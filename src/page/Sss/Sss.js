import { Link } from 'react-router-dom';
import './Sss.css'
const SSS = () => {
    return (
      <div className="container">
  
          {/* Header kısmı 
   --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
          */}
  
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
  
  
  
  
   {/* Menu  anasayfa kısmı
   --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
   
   */}
  
  <div className="menu">
      <h1 className="title">Netflix nedir ?</h1>
      <img class="image" src="https://help.nflxext.com/43e0db2f-fea0-4308-bfb9-09f2a88f6ee4_what_is_netflix_1_en.png"
       alt="Farklı cihazlarda Netflix üzerinden içerik izleme"></img>
  
       <p className="paragraf">Netflix, üyelerimizin internete bağlı bir cihazda dizi ve film izlemelerini sağlayan abonelik tabanlı bir <br/> <a href="">streaming hizmetidir.</a> </p>
  
  <p className="paragraf">Planınıza bağlı olarak iOS, Android veya Windows 10 cihazınıza dizileri ve filmleri indirebilir ve internet <br/> bağlantısı olmadan izleyebilirsiniz.</p>
  
  <p className="paragraf">Zaten üyeyseniz ve Netflix'in kullanımı hakkında daha fazla bilgi almak istiyorsanız Netflix'e başlarken <br/> sayfasını ziyaret edin.</p>
  <br/>
  <br/>
  <hr className="hr"/>
  <br/>
  <br/>
  
  <h1 className="title">Diziler ve Filmler</h1>
  <img src="https://help.nflxext.com/396a2a39-8d34-4260-b07a-6391fe04ded5_what_is_netflix_2_en.png" class="image_inline"
   alt="Netflix'te yayınlanan farklı dizi ve filmleri belli bir açıdan gösteren görseller içeren satırlar"></img>
   <p className="paragraf">Netflix içeriği bölgelere göre farklılık gösterir ve zamanla değişebilir. Değişik türlerde ödüllü Netflix orijinal içerikleri,<br/> diziler, filmler, belgeseller ve daha fazlasını izleyebilirsiniz. </p>
   <p className="paragraf">Siz izledikçe dizi ve film önerme konusunda Netflix'in başarısı artacaktır.</p>
   <br/>
  <br/>
  <hr className="hr"/>
  <br/>
  <br/>
  <h1 className="title">Desteklenen Cihazlar</h1>
  <img src="https://help.nflxext.com/7ac9b493-ae69-431a-923d-3cb8a79d7e63_what_is_netflix_3_en.png" class="image_inline" alt=""></img>
  <p className="paragraf">Netflix'i; akıllı TV'ler, oyun konsolları, medya oynatıcılar, alıcı kutuları, akıllı telefonlar ve tabletler gibi<br/>
   Netflix uygulamasına sahip internete bağlı herhangi bir cihazdan izleyebilirsiniz. Ayrıca bilgisayarınızda bir <br/>
    internet tarayıcısı kullanarak da Netflix izleyebilirsiniz. Web tarayıcısı uyumluluğu için sistem <br/>
   gereksinimlerini inceleyebilir ve en iyi performansı elde etmek için internet hızı önerilerimizi gözden<br/>
    geçirebilirsiniz.</p>
  
    <p className="paragraf">NOT: Cihazların küçük bir yüzdesi tüm planlar tarafından desteklenmiyor olabilir.</p>
  
    <p className="paragraf">Kurulum için yardım ister misiniz? Kullandığınız cihazın üreticisini Yardım Merkezimizde arayın.</p>
  
    <p className="paragraf">NOT: Netflix uygulaması, bazı cihazlarda önceden yüklenmiş olarak gelebilir veya Netflix uygulamasını cihazınıza <br/>
     indirmeniz gerekebilir. Netflix uygulamasının özellikleri cihazdan cihaza farklılık gösterebilir.</p>
  
  <br/>
  <br/>
  <hr className="hr"/>
  <br/>
  <br/>
  
  <h1 className="title">Planlar ve Ücretler</h1>
  
  <img src="https://help.nflxext.com/b3e9e3a3-20ff-4974-87d4-162e0a547768_what_is_netflix_4_en.png" class="image_inline" alt=""></img>
  <p className="paragraf">Her Netflix planı Netflix'i aynı anda izleyebileceğiniz cihaz sayısını ve içerikleri Yüksek Çözünürlükte (HD), <br/>
  Tam Yüksek Çözünürlükte (FHD) veya Ultra Yüksek Çözünürlükte (UHD) izleyip izleyemeyeceğinizi <br/> belirler.</p>
  <p className="paragraf">Planınızı değiştirebilir veya istediğiniz zaman üyeliğinizi çevrimiçi olarak iptal edebilirsiniz.
  </p>
  <br/>
  <br/>
  <hr className="hr"/>
  <br/>
  <br/>
  <h1 className="title">Başlayın</h1>
  
  <img src="https://help.nflxext.com/0af6ce3e-b27a-4722-a5f0-e32af4df3045_what_is_netflix_5_en.png" class="image_inline" alt=""></img>
  <p className="paragraf">Netflix izlemeye başlamak için:</p>
  <ol className="paragraf">
      <li>netflix.com/signup adresine gidin</li>
      <li>Bir plan seçin.</li>
      <li>E-posta adresinizi girip bir parola belirleyerek hesabınızı oluşturun.</li>
      <li>Bir ödeme yöntemi girin.</li>
      
  </ol>
  <p className="paragraf">Netflix üyesi olduğunuzda sizden her ay kaydolduğunuz tarihte ücret tahsil edilir.</p>
  <hr/>
  <p className="paragraf">Bu makale yardımcı oldu mu?</p>
  <div className="boolen">
  <a  className="true1" href="#">Evet</a>
  <a  className="false1" href="#">Hayır</a>
  </div>
  </div>
  
  
  {/* Footer kısmı 
  --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  
  */}
  
  
  
  
  <div className="footer">
      <h1 className="title1">Daha fazla yardıma mı ihityacınız var?</h1>
      <div className="btn">
       <button className="btn1">Bize Ulaşın</button>
       
       </div>

  <hr className='footer-hr'/>
  
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
  </div>
  
    )
    
  }
  
  export default SSS;