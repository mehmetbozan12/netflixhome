import React from 'react'
import './Securty.css'
import { Link } from 'react-router-dom'
import {WiDirectionLeft} from 'react-icons/wi'
const Securty = () => {
  return (
    <>
           <div className="header-securty">
          <a className="logo">
         <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" width="100" alt="netflix logo" /></a>
      <div className="help">
         
      <a class="help1-securty" href="/tr">Yardım Merkezi</a>
         
      </div>
      <div className="button-securty">
      <button  className="sign-securty">NETFLiX'E KATILIN</button>
      <Link to="/account"> <button className="sign-1-securty" >OTURUM AÇ</button></Link>
      </div>
  </div>

   <div className='menu-securty'>
    <div className='menu-help-write'>
    <a href='#' className='menu-link'><p className='securty-paragraph'><WiDirectionLeft className='menu-direcction'/>Yardım Ana Sayfasına Geri Dön</p></a>
    <button className='securty-btn'>YAZDIR</button>
    </div>

   </div>

   <div className='securty-menu'>
    <h1 className='securty-menu-title'>Gizlilik Bildirimi</h1>
    <br/>
    <br/>
    <p className='securty-menu-paragraph'>Bu Gizlilik Bildirimi; kişisel bilgileriniz dâhil olmak üzere belli bazı bilgilerin Netflix hizmetiyle ilişkili olarak toplanması, kullanılması ve ifşasına dair seçeneklerinizi ve <br/>
     uygulamalarımızı açıklar.</p>
     <br/>
     <br/>
     <h3 className='securty-menu-h3'>Bize Ulaşın</h3>
     <br/>
     <p className='securty-menu-paragraph'>Hesabınız ile ilgili genel sorularınız varsa veya yardım almak için müşteri hizmetleri ile iletişim kurmak istiyorsanız lütfen 
      help.netflix.com adresindeki çevrimiçi yardım<br/> merkezimizi ziyaret edin. Özellikle bu Gizlilik Bildirimi ile veya kişisel bilgilerinizin, çerezlerin veya benzer teknolojilerin tarafımızdan kullanımı ile ilgili sorularınız için, lütfen <br/>
      Veri Koruma Sorumlumuz/Gizlilik Ofisi ile privacy@netflix.com e-posta adresi üzerinden iletişime geçin.</p>
      <br/>
      <p  className='securty-menu-paragraph'>Kişisel bilgilerinizin veri sorumlusu Netflix International B.V.dir. Yardım alma amacıyla bizimle irtibata geçmeniz hâlinde, iki tarafın da güvenliği adına talebinizi karşılamadan <br/>
       önce kimliğinizi doğrulamamız gerekebileceğini lütfen dikkate alınız.</p>
       <br/>
       <br/>

       <h3 className='securty-menu-h3'>Blgilerin Toplanması</h3>
       <br/>
       <p className='securty-menu-paragraph'>Sizden bazı bilgileri elde etmekte ve saklamaktayız, örneğin:</p>
       <br/>
       <ul>
        <li className='menu-li'>
        <strong>Bize sağladığınız bilgiler</strong>: Aşağıdakiler dâhil olmak üzere bize verdiğiniz bilgileri topluyoruz:   
        </li>
        <br/>
        <li className='menu-li'>
        adınız, e-posta adresiniz, ödeme yönteminiz/yöntemleriniz, telefon numaranız ve kullandığınız diğer tanımlayıcılar (örneğin oyun içinde kullanılan ad). Bu <br/>
        bilgiler çeşitli yöntemlerle toplanmaktadır. Hizmetimizi kullanırken sunmanız, müşteri hizmetleri birimimizle etkileşime girmeniz ya da anket veya pazarlama <br/>
         amaçlı tanıtım etkinliklerine dâhil olmanız gibi durumlar bu yöntemler arasında sayılabilir.

        </li>
        <br/>
        <li className='menu-li'>
        Puanlama yapmayı tercih etmeniz hâlinde sunduğunuz bilgiler, kişisel tercihleriniz, hesap ayarları, (web sitemizin "Hesap" kısmında ayarlanan tercihler de <br/>
         dâhil olmak üzere) ya da hizmetimiz aracılığıyla veya başka yerde bize sunduğunuz diğer bilgiler de bu kapsamdadır.
        </li>
        <br/>
        <li className='menu-li'>
         <strong>Otomatik olarak topladığımız bilgiler:</strong> Sizin hakkınızda ve hizmetimizi kullanımınızla ilgili, bizimle ve reklamlarımızla girdiğiniz etkileşimler hakkında, hizmetimize <br/>
         erişmek için kullandığınız bilgisayar, ağ, ağ cihazları ya da kullanabileceğiniz Netflix uyumlu diğer cihazlara (oyun konsolları, akıllı televizyonlar, mobil cihazlar, alıcı <br/>
         kutuları ve diğer yayın izleme cihazları) dair bilgi topluyoruz. Bu bilgiler aşağıdaki unsurları kapsamaktadır:
        </li>
        <br/>
        <li className='menu-li'>
        Netflix hizmeti üzerinde gerçekleştirdiğiniz içerik seçimleri, izlemiş olduğunuz programlar, arama sorgularınız ve Netflix Games'deki etkinliğiniz gibi <br/>
         işlemler;
        </li>
       <br/>
       <li className='menu-li'>
       e-posta ve kısa mesajlarımız yoluyla ve anlık bildirimler ve çevrimiçi mesajlaşma kanalları aracılığıyla gönderdiğimiz mesajlar vasıtasıyla gerçekleştirdiğiniz <br/>
        etkileşimler;
       </li>
       <br/>
       <li className='menu-li'>
       müşteri hizmetlerimiz ile girdiğiniz etkileşimlere dair bize ulaştığınız tarih, saat ve ulaşma sebebiniz, birimle aranızda geçen konuşmaların dökümleri gibi <br/>
        ayrıntılar ve bizi aramanız hâlinde telefon numaranız ve çağrı ses kayıtları;
       </li>
       <br/>
       <li className='menu-li'>
       ağ cihazlarınız (örneğin yönlendiriciniz) dâhil cihaz kimlikleri veya diğer benzersiz tanımlayıcılar ve ağınızdaki Netflix uyumlu cihazlar;
       </li>
       <br/>
       <li className='menu-li'>
       mobil cihazlarda, tabletlerde ve bu tür tanımlayıcılar içeren yayın izleme cihazları gibi cihazlardaki sıfırlanabilir cihaz tanımlayıcıları (reklam kimlikleri olarak da <br/>
        bilinir) (daha fazla bilgi almak için aşağıdaki "Çerezler ve İnternet Reklamcılığı" kısmına göz atın);
       </li>
       <br/>
       <li className='menu-li'>
       cihaz ve yazılım nitelikleri (cihaz türü ve yapılandırması gibi), bağlantı türü (Wi-Fi, mobil) dâhil bağlantı bilgisi, sayfa görüntüleme istatistikleri, yönlendirme  <br/>
       bağlantıları (örneğin, yönlendirme URL'leri), IP adresi (bize bulunduğunuz şehir, eyalet/il ve posta kodunuz gibi genel konumunuz hakkında bilgi vermek için <br/>
        kullanılabilir), tarayıcı ve standart web sunucusu log bilgisi;
       </li>
       <br/>
       <li className='menu-li'>
       reklam bilgileri de (reklamların mevcudiyeti ve gösterimine dair bilgiler, site adresi, aynı zamanda tarih ve saat gibi) dâhil olmak üzere çerezler, web <br/>
       işaretçileri ve diğer teknolojiler kullanımı aracılığıyla toplanan bilgiler. (Daha ayrıntılı bilgiler için "Çerezler ve İnternet Reklamcılığı" bölümümüze bakın.)

       </li>
       <br/>
       <li className='menu-li'>
       <strong> İş ortaklarından alınan bilgiler:</strong> Bir ilişkiniz olan diğer şirketlerden de bilgi alıyoruz (“İş Ortakları”). Bu İş Ortakları (hangi hizmetleri kullandığınıza bağlı olarak)  <br/>
      şunları içerebilir: televizyon veya internet servis sağlayıcınız veya cihazlarında bizim hizmetlerimizi sunan diğer yayın izleme cihazı sağlayıcıları; cep telefonu <br/>
       operatörleri veya size servis sağlayan ve bize iletilmek üzere Netflix hizmeti ödemesi tahsil eden veya Netflix hizmeti için ön ödemeli promosyonlar sunan diğer <br/>
        şirketler ve sesli komutlar vasıtasıyla hizmetimizle etkileşimi mümkün kılan sesli yardımcı platformu sağlayıcıları. İş Ortaklarının bize sağladığı bilgiler, İş Ortaklarının  <br/>
         hizmetlerinin yapısına bağlı olarak farklılık gösterir ve şunları içerebilir:
       </li>
       <br/>
       <li className='menu-li'>
       İş ortağı cihazları veya sesli yardımcı platformları vasıtasıyla yaptığınız, Netflix ile ilgili arama sorguları ve verdiğiniz komutlar;
       </li>
       <br/>
       <li className='menu-li'>
       e-posta adresiniz veya diğer iletişim bilgileri gibi hizmet etkinleştirme bilgileri;
       </li>
       <br/>
       <li className='menu-li'>
       Kullanıcı kimliği doğrulamayı, Netflix hizmetine kaydolma deneyimini, İş ortağı ödeme işlemini, Netflix içeriğinin size İş ortağı kullanıcı arayüzünün bir <br/>
        kısmında sunulmasını destekleyen IP adresleri, cihaz kimlikleri veya diğer benzersiz tanımlayıcıların yanı sıra ilgili ön ödemeli promosyonlar, faturalama ve <br/>
     kullanıcı ara yüzü bilgisi.
       </li>
       <br/>
        <li className='menu-li'>
       <strong> Diğer kaynaklardan alınan bilgiler:</strong> Ayrıca başka kaynaklardan da bilgiler alıyoruz. Bu bilgileri, işbu Gizlilik Bildirimi'nde açıklanan uygulamaların yanı sıra, söz<br/>
         konusu bilginin kaynağı tarafından getirilen her türlü ek kısıtlama uyarınca koruyoruz. Bu kaynaklar zaman içinde değişmekle birlikte, şunları içerebilir:
      </li>
      <br/>
       <li className='menu-li'>
       hizmetimizi kişiselleştirmemiz ve bu Gizlilik Bildirimi ile tutarlı diğer kullanımlar için, IP adresinize göre bir konumu tespit etmemize yardımcı olan hizmet <br/>
        sağlayıcılar;
       </li>
       <br/>
       <li className='menu-li'>
       sistemlerimizi güvence altına almak, sahtekarlığı önlemek ve Netflix hesaplarının güvenliğini korumamıza yardımcı olmak için bize bilgi sağlayan güvenlik <br/>
        hizmeti sağlayıcıları;
            </li>
           <br/>
            <li className='menu-li'>
            sizinle ilişkilerine bağlı olarak bize ödeme ya da bakiye bilgilerini veya bu bilgilere dair güncellemeleri sunan ödeme hizmeti sağlayıcıları;
         </li>
           <br/>
           <li className='menu-li'>
           sosyal medya platformlarındaki herkese açık gönderiler gibi herkesçe erişilebilir kaynaklar ve IP adreslerini internet servis sağlayıcıları (İSS) ile ilişkilendiren <br/>
            genele açık veri tabanları üzerinden erişilebilen bilgiler;
          </li>
          <br/>
             <li className='menu-li'>
             çok oyunculu oyun oynama, skor tablosu ve oyun kaydetme seçenekleri gibi Netflix Games kapsamındaki işlevleri sağlayan ve oturum açtığınız üçüncü <br/>
              taraf hizmetler.
            </li>
          <br/>



       </ul>
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

export default Securty