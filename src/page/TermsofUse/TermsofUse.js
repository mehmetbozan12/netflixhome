import React from 'react'
import './TermsofUse.css'
import { Link } from 'react-router-dom'
import {WiDirectionLeft} from 'react-icons/wi'
 
const TermsofUse = () => {
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

   <div className='menu-termsofuse'>
    <div className='menu-help-write'>
    <a href='#' className='menu-link'><p className='tramsofuse-paragraph'><WiDirectionLeft className='menu-direcction'/>Yardım Ana Sayfasına Geri Dön</p></a>
    <button className='tramsofuse-btn'>YAZDIR</button>
    </div>

   </div>


  <div className='menu-termsofuse-paragraph'>
    <h1 className='menu-title'>Netfilix Kullanım Koşulları</h1>
    <p className='prgrf-1'>Netflix, üyelerimizin internete bağlı televizyon, bilgisayar ve diğer cihazlar ile ("Netflix uyumlu cihazlar") internet üzerinden eğlence içeriklerine ("Netflix içerikleri") <br/>
     erişebilmesini sağlayan, kişiselleştirilmiş bir abonelik hizmeti sunar.
     <br/>
     <br/>
             Netflix hizmeti, sizlere Netflix International B.V. tarafından sunulmaktadır. Bu Kullanım Koşulları, hizmetimizi kullanımınıza ilişkin kuralları belirler. Bu Kullanım Koşulları<br/>
             kapsamında "Netflix hizmeti", "hizmetimiz" ya da "hizmet" ibareleri, Netflix tarafından, Netflix içeriklerinin bulunması ve bu içeriklere erişilmesi için sunulan; tüm özellik ve<br/>
             işlevleri, tavsiye ve incelemeleri, web sitelerimizi, kullanıcı arayüzlerini ve hizmetimizle alakalı tüm içerik ve yazılımları da kapsayan kişiselleştirilmiş hizmeti ifade eder. Bu <br/>
             Kullanım Koşulları'nda "siz" olarak bahsedilen kişi, Netflix hesabını oluşturan ve ödeme yönteminden ücret tahsil edilen üyeyi belirtir.
     
     </p>

     <div className='menu-prgf-2'>
     <h4 className='menu-title-1'>1.Üyelik</h4>
      <p className='menu-paragraph-1'>1.1. Netflix üyeliğiniz, sonlandırılıncaya kadar devam eder. Netflix hizmetini kullanabilmek için İnternet erişimine ve Netflix uyumlu bir cihaza sahip olmalı ve bize bir veya <br/>
            birden fazla Ödeme Yöntemi sunmalısınız. “Ödeme Yöntemi”, zaman zaman güncelleyebileceğiniz ve hesabınız üzerinden bir üçüncü taraf aracılığıyla ödemeyi de <br/>
            içerebilecek, mevcut, geçerli, tanınan bir ödeme yöntemi anlamına gelir. Üyeliğinizi fatura kesim tarihinden önce iptal etmediğiniz sürece, tarafımıza bir sonraki <br/>
            faturalama döneminin üyelik ücretini Ödeme Yöntemi üzerinden tahsil etme yetkisi vermiş olursunuz (bkz. "Üyelik İptali").
         <br/>
         <br/>
            1.2. Üçüncü taraflarca kendi ürünleri veya hizmetleri ile bir arada sunulan üyelikler dâhil olmak üzere, birkaç farklı üyelik planı sunabiliriz. Netflix, bu gibi üçüncü <br/>
            taraflarca sunulan ürünlerden veya hizmetlerden sorumlu tutulamaz. Bazı üyelik planları, kaydolduğunuz sırada veya size sunulan diğer iletişimlerde açıklanacak farklı<br/>
            koşullara ve sınırlandırmalara sahip olabilir. Netflix üyeliğinize dair bilgilere, netflix.com web sitesini ziyaret ederek sayfanın üst kısmında, profil adınızın altında bulunan <br/>
            "Hesap" bağlantısı aracılığıyla erişebilirsiniz.
         
         </p>
         <br/>
         <br/>
         <h4 className='menu-title-1'>2.Promosyon Teklifleri.</h4>
         <p className='menu-paragraph-1'>
             Zaman zaman özel promosyon amaçlı teklifler, planlar veya üyelikler ("Teklifler") sunabiliriz. Teklif kriterleri tamamen Netflix'in takdirine bağlı<br/>
             olarak belirlenir. Kriterlere uymadığınızın saptanması hâlinde bir Teklifi iptal etme ve hesabınızı askıya alma hakkımız saklıdır. Mevcut veya yakın zamanda Netflix üyeliği<br/>
             olan hanelerin üyeleri belirli tanıtım Teklifleri için uygun şartları taşımayabilir. Teklif kriterlerine uygunluğun saptanması amacıyla, mevcutta veya yakın zamanda Netflix <br/>
             üyeliği için kullanılmış cihaz kimliği, ödeme yöntemi ya da hesap e-posta adresi gibi bilgiler kullanılabilir.Uygunluk kriterleri ve diğer sınırlamalar ile koşullar, Teklif için <br/>
             kaydolduğunuzda veya kullanımınıza sunulan diğer iletişimlerde açıklanacaktır.
         </p>
       <br/>
       <br/>
      <h4 className='menu-title-1'>3.Faturalama ve Üyelik İptali</h4> 
      <p  className='menu-paragraph-1' >3.1. Faturalama Dönemleri. Netflix hizmetinin üyelik ücreti ve hizmeti kullanımınıza bağlı ortaya çıkabilecek vergi ve olası işlem ücretleri gibi diğer tüm masraflar, "Hesap" <br/>
            sayfasında belirtilen belli ödeme tarihinde, seçtiğiniz Ödeme Yöntemi üzerinden tahsil edilecektir. Faturalama döneminizin uzunluğu, hizmete kaydolduğunuzda <br/>
            seçtiğiniz abonelik türüne bağlı olacaktır. Ödeme Yönteminizin onaylanamaması, abonelik planınızı değiştirmeniz ya da ücretli üyeliğinizin söz konusu aya dâhil olmayan <br/>
            bir günde başlaması gibi durumlarda ödeme tarihinizde değişiklikler yaşanabilir. Bir sonraki ödeme tarihinizi görmek için netflix.com web sitesini ziyaret edip "Hesap" <br/>
            sayfasındaki "Fatura Ayrıntıları" bağlantısına tıklayın. Üyelik veya hizmetle ilgili ücretler öngördüğümüzde Ödeme Yönteminizi, hesap açtığınız anda yaklaşık bir aya kadar <br/>
            süreyle hizmet almanıza izin vermek de dahil olmak üzere, çeşitli yöntemlerle onaylayabiliriz. Netflix'e kaydolurken Ödeme Yöntemi üçüncü taraf olan hesabınızı <br/>
            kullandıysanız Netflix üyeliğinize ilişkin faturalama bilgilerine ilgili üçüncü tarafta bulunan hesabınıza giderek ulaşabilirsiniz.
            <br/>
            <br/>
            3.2. Ödeme Yöntemleri. Netflix hizmetini kullanabilmek için bir veya birden fazla Ödeme Yöntemi sunmalısınız. Birincil Ödeme Yönteminizin reddedilmesi veya abonelik <br/>
            ücretinizin ödemesi için artık kullanılamaması durumunda, hesabınızla ilişkilendirilmiş herhangi bir Ödeme Yöntemi üzerinden ücret almamız için bize yetki vermiş <br/>
            sayılırsınız. Böyle bir durumda, tahsil edilmeyen tutarlardan sorumlu olmaya devam edersiniz. Ödeme yöntemi geçerlilik tarihinin sona ermesi, yeterli bakiye olmaması<br/>
            veya başka nedenlerden dolayı ödemenin başarıyla gerçekleşmemesi ve hesabınızı iptal etmemeniz halinde, abonelik ücretini geçerli bir Ödeme Yönteminden tahsil <br/>
            edinceye kadar hizmetimize erişiminizi askıya alabiliriz. Bazı Ödeme Yöntemlerini kullanmanız hâlinde sağlayıcı kuruluş, tarafınızdan Ödeme Yönteminizin işlenmesiyle <br/>
            alakalı yabancı işlem ücreti gibi çeşitli masraflar tahsil edebilir. Yerel vergi tutarları kullanılan Ödeme Yöntemine bağlı olarak değişiklik gösterebilir. Ayrıntılı bilgi için <br/>
            Ödeme Yöntemi hizmet sağlayıcınızla görüşün.
            <br/>
            <br/>

            3.3. Ödeme Yöntemlerinizi Güncelleme. Ödeme Yöntemlerinizi "Hesap" sayfasından güncelleyebilirsiniz. Ödeme Yöntemlerinizi, ödeme hizmeti sağlayıcıları tarafından <br/>
            verilen bilgileri kullanarak da güncelleyebiliriz. Herhangi bir güncellemenin ardından, geçerli Ödeme Yöntem(ler)i üzerinden ücret almaya devam etmemiz için bize yetki<br/>
            vermiş sayılırsınız.
            <br/>
            <br/>

            3.4. Üyelik İptali. Netflix üyeliğinizi dilediğiniz zaman iptal edebilir ve faturalama döneminizin sonuna kadar Netflix hizmetinden faydalanmaya devam edebilirsiniz. İlgili <br/>
            yasaların izin verdiği ölçüde ödemelerin iadesi yoktur ve tamamlanmamış üyelik dönemleri ya da kullanılmamış Netflix içerikleri için tarafımızca iade ya da kredi <br/>
            tanımlaması yapılmamaktadır.Üyeliğinizi iptal etmek için, "Hesap" sayfasına gidin ve iptal işlemlerine yönelik talimatları izleyin. Üyeliğinizi iptal etmeniz halinde, hesabınız<br/>
            mevcut faturalama döneminizin sonunda otomatik olarak kapanacaktır. Hesabınızın ne zaman kapanacağını görmek için, "Hesap" sayfasındaki "Faturalama Ayrıntıları"<br/>
            kısmına tıklayın. Hesabınızla Netflix'e üye olurken Ödeme Yöntemi olarak üçüncü tarafları kullandıysanız ve Netflix üyeliğinizi iptal etmek istiyorsanız bu işlemi söz <br/>
            konusu üçüncü taraf aracılığıyla yapmanız gerekebilir: örneğin; söz konusu üçüncü taraf ile hesabınıza erişip otomatik yenilemeyi kapatmak ya da söz konusu üçüncü <br/>
            taraf üzerinden Netflix hizmeti aboneliğini iptal etmek.
            <br/>
            <br/>

            3.5. Ücret ve Abonelik Planı Değişiklikleri. Abonelik planımızda ve hizmetimizin ücretinde zaman zaman değişiklik yapabiliriz. Ancak yapılan herhangi bir ücret değişikliği <br/>
            veya abonelik planınızdaki değişiklikler, tarafınıza bildirim yapılmasını takiben en erken 30 gün sonra geçerli olacaktır. Ücret değişikliğini veya abonelik planınızda yapılan <br/>
            değişikliği kabul etmek istemiyorsanız değişiklik yürürlüğe girmeden önce aboneliğinizi iptal edebilirsiniz.
             </p>
             <br/>
            <br/>

            <h4 className='menu-title-1'>4.Netflix Hizmeti</h4>
            <p  className='menu-paragraph-1'>
            4.1. Netflix hizmetine abone olmak için en az 18 yaşında olmanız veya bulunduğunuz il, bölge veya ülkede geçerli olan reşit olma yaşını doldurmuş olmanız gerekir. Reşit <br/>
            olmayanlar bu hizmeti ancak bir yetişkin gözetiminde kullanabilir.
            <br/>
            <br/>
            4.2. Netflix hizmeti ve hizmet üzerinden erişilen her türlü içerik, sadece kişisel kullanımınıza ve ticari olmayan kullanımlara yöneliktir; abonelik planınızda aksine izin <br/>
            verilmediği sürece hanenizin dışındaki kişilerle paylaşılamaz. Netflix üyeliğiniz boyunca tarafınıza Netflix hizmetine ve Netflix içeriklerine erişmenize müsaade eden <br/>
            sınırlı, münhasır olmayan, devredilemez bir hak sağlamaktayız. Yukarıda belirtilenler haricinde, size hiçbir hak, unvan veya menfaat devredilmeyecektir. Hizmeti kamuya<br/>
            açık işlemelerde kullanmamayı kabul etmiş sayılırsınız.

            <br/>
            <br/>
           
            4.3. Netflix içeriklerine öncelikli olarak hesabınızı oluşturduğunuz ülkede ve yalnızca hizmetimizi sunduğumuz ve söz konusu içeriğin lisansına sahip olduğumuz coğrafi<br/> bölgelerde erişebilirsiniz. Mevcut olabilecek içerik coğrafi
            bölgelere göre farklılık gösterecek ve zaman zaman değişecektir. Aynı anda içerik izlemekte kullanabileceğiniz <br/>
            cihaz sayısı abonelik planınıza bağlıdır ve "Hesap" sayfasında belirtilmektedir.
            <br/>
            <br/>
            4.4. İçerik kitaplığı da dahil olmak üzere Netflix hizmeti sürekli olarak güncellenir. Ayrıca web sitelerimiz, kullanıcı arayüzleri ve tanıtım içerikleri de dâhil olmak üzere <br/>
            hizmetimizin birçok unsurunu devamlı testlere tabi tutmaktayız. Dilediğiniz zaman "Hesap" sayfasını ziyaret edip "Teste Katılım" ayarlarını değiştirerek testlere katılımınızı<br/>
            durdurabilirsiniz.
              <br/>
              <br/>
            4.5. Bazı Netflix içerikleri, çeşitli desteklenen cihazlarda geçici olarak indirilebilir ve çevrimdışı olarak izlenebilir ("Çevrimdışı İçerikler"). Hesap başına Çevrimdışı İçerik<br/>
            sayısı, Çevrimdışı İçerikleri barındırabilecek maksimum cihaz sayısı, Çevrimdışı İçeriklerin izlenmeye başlanması gereken süre ve Çevrimdışı İçeriklerin izlenebilir kalacağı <br/>
            süre gibi hususlar dahil olmak üzere kısıtlamalar mevcuttur. Bazı Çevrimdışı İçerikler, çeşitli ülkelerde görüntülenemeyebilir ve söz konusu Çevrimdışı İçeriği <br/>
            görüntüleyemeyeceğiniz bir ülkede çevrimiçi olmanız hâlinde, bu ülkede bulunduğunuz süre boyunca söz konusu Çevrimdışı İçeriği görüntüleyemezsiniz.
            <br/>
            <br/>
            4.6. Netflix hizmetini, hizmetle ilişkili tüm özellikler ve işlevselliklerle birlikte, geçerli tüm yasa, kural ve yönetmeliklere ya da ilgili hizmet veya içeriğin kullanımına dair <br/>
            diğer kısıtlamalara uygun şekilde kullanmayı kabul etmiş sayılırsınız. Bizim tarafımızdan açık bir şekilde izin verilmediği sürece,<br/>
           (i) Netflix hizmetinde saklanan ya da Netflix hizmetinden ve Netflix hizmeti aracılığıyla edinilen içerik veya bilgileri arşivlemeyeceğinizi, çoğaltmayacağınızı, dağıtımını <br/>
            yapmayacağınızı, değiştirmeyeceğinizi, sergilemeyeceğinizi, işlemeyeceğinizi, yayımlamayacağınızı, lisanslamayacağınızı, türev ürün üretmeyeceğinizi, satışa <br/>
            sunmayacağınızı veya kullanmayacağınızı;
             <br/>
             <br/>
            (ii) grafik kullanıcı arabirimi, telif hakkı uyarıları ve ticari markalar dâhil olmak üzere Netflix hizmetinin içerik korumalarının veya diğer unsurlarının hiçbirini bertaraf <br/>
            etmeyeceğinizi, kaldırmayacağınızı, değiştirmeyeceğinizi, devre dışı bırakmayacağınızı, geriletmeyeceğinizi, engellemeyeceğinizi, gizlemeyeceğinizi veya <br/>
            önlemeyeceğinizi;
            <br/>
            <br/>
            (iii) Netflix hizmetine erişmek için herhangi bir robot, örümcek, kazıyıcı veya başka otomatik araçlar kullanmayacağınızı; Netflix hizmeti üzerinden erişilebilen herhangi bir <br/>
            yazılımı ya da diğer ürünleri veya süreçleri kaynak koda dönüştürmeyeceğinizi, bunlar üzerinde tersine mühendislik yapmayacağınızı veya parçalara ayırmayacağınızı;
            <br/>
            <br/>
            (iv) Netflix hizmetinin içeriğine herhangi bir kod veya ürün yerleştirmeyeceğinizi veya söz konusu içeriği herhangi bir şekilde manipüle etmeyeceğinizi;
            <br/>
            <br/>
            (v) herhangi bir veri madenciliği, veri toplama ya da çıkarma yöntemi kullanmayacağınızı; 
            <br/>
            <br/>
            (vi) her türlü yazılım virüsü ya da herhangi başka bir bilgisayar kodu, dosyaları veya programları dâhil olmak üzere, Netflix hizmeti ile ilişkili herhangi bir bilgisayar yazılımı <br/>
             ya da donanımı veya telekomünikasyon ekipmanının işlevselliğini kesintiye uğratmak, zedelemek veya sınırlandırmak için tasarlanmış herhangi bir materyali <br/>
             yüklemeyeceğinizi, göndermeyeceğinizi, e-posta ile veya başka şekilde göndermeyeceğinizi veya iletmeyeceğinizi kabul etmiş sayılırsınız.
             <br/>
             <br/>
             4.7. Netflix içeriklerinin görüntü kalitesi cihazdan cihaza değişiklik gösterebilir ve konumunuz, İnternet bağlantınızın hızı ve sunduğu bant genişliği gibi çeşitli <br/>
             unsurlardan etkilenebilir. HD, Ultra HD ve HDR seçenekleri İnternet hizmetinizin ve cihazınızın sunduğu imkânlara bağlıdır. Tüm içerikler HD, Ultra HD ya da HDR gibi  <br/>
             tüm formatlarda sunulmamaktadır ve tüm abonelik planları, içerikleri tüm formatlarda izlemenize olanak sağlamamaktadır. HD video kalitesi (720p ya da üstü çözünürlük <br/>
             olarak tanımlanmıştır) için gereken minimum bağlantı hızı yayın başına 3,0 Mbps'dir; bununla birlikte, daha iyi video kalitesi elde etmek için daha yüksek bir bağlantı hızı <br/>
             kullanmanızı tavsiye ediyoruz. Tam HD video kalitesi (1080p ya da üstü çözünürlük olarak tanımlanmıştır) elde etmek için yayın başına en az 5,0 Mbps bağlantı hızına <br/>
             sahip olunması tavsiye edilir. Ultra HD video kalitesi (4K ya da üstü çözünürlük olarak tanımlanmıştır) elde etmek için yayın başına en az 15,0 Mbps bağlantı hızına  <br/>
             sahip olunması tavsiye edilir. Tüm internet erişimi ücretleri sizin sorumluluğunuzdadır. Mevcut internet veri kullanımı ücretleri hakkında bilgi almak için lütfen internet <br/>
             sağlayıcınızla görüşün. Netflix içeriklerini izlemeye başlayabilmek için geçmesi gereken süre; konumunuz, o anki bant genişliği, seçtiğiniz içerik ve Netflix uyumlu <br/>
             cihazınızın yapılandırması gibi çeşitli etkenlere göre değişiklik gösterecektir.
             <br/>
             <br/>
             4.8. Netflix yazılımı Netflix tarafından ya da Netflix için geliştirilmiştir ve Netflix içeriklerinin Netflix uyumlu cihazlar aracılığıyla yetkilendirilmiş olarak izlenebilmesi ve (bu <br/>
             içeriklere) erişilebilmesi için tasarlanmıştır. Bu yazılım, cihaz ve kullanım ortamına göre değişiklik gösterebilir; işlevleri ve özellikleri cihazdan cihaza değişebilir. Hizmeti <br/>
             kullanmak için üçüncü taraf lisanslarına tabi bir üçüncü taraf yazılım kullanımının gerekli olabileceğini kabul etmiş sayılırsınız. Netflix yazılımının ve ilgili üçüncü taraf <br/>
             yazılımlarının güncellenmiş sürümlerini otomatik olarak edinebileceğinizi kabul etmiş sayılırsınız.
             <br/>
             <br/>
             </p>
             <h4 className='menu-title-1'>5.Şifreler ve Hesap Erişimi</h4>
             <p className='menu-paragraph-1' >
             Netflix hesabında gerçekleşen tüm etkinliklerin sorumluluğu sizdedir. Başkalarının hesaba erişmesine izin vererek (buna hesabın izleme <br/>
             etkinliğine dair bilgilere erişim de dâhildir) bu kişilerin sizin adınıza hareket ettiğini ve abonelik planında yapılan değişiklikler dâhil ancak bunlarla sınırlı olmamak üzere <br/>
             onların hesapta gerçekleştirdikleri tüm değişikliklerden yükümlü olduğunuzu kabul edersiniz. Hesap üzerindeki kontrolün sağlanmasına yardımcı olmak ve yetkisiz <br/>
             kullanıcıların hesaba erişmesini engellemek için hizmete erişmekte kullanılan cihazlar üzerinde kontrolü sağlamalı ve hesapla ilişkili parolayı veya Ödeme Yöntemi<br/>
             bilgilerini kimseye açıklamamalısınız. Size hesapla ilgili uyarılar gönderebilmemiz için hesabınızla ilgili geçerli bir e-posta adresi dâhil doğru bilgiler sunmayı ve bu <br/>
             bilgilerin devamını sağlamayı kabul edersiniz. Sizi, Netflix'i veya ortaklarımızı kimlik hırsızlığı veya diğer hileli hareketlerden korumak için, hesabınızı sonlandırabilir veya <br/>  
             hesabınızı askıya alabiliriz.
             <br/>
             <br/>
             </p>
             <h4 className='menu-title-1'>6.Garantiler ve Sorumluluğun Sınırlandırılması</h4>
             <p className='menu-paragraph-1' >
             Netflix hizmeti "olduğu gibi" ve taahhütsüz ya da koşul olmaksızın sunulmaktadır. Özellikle belirtmek gerekirse, hizmetimiz <br/>
             kesintisiz veya hatasız olamaz. Tarafımıza karşı tüm özel, dolaylı ya da bağlı hasarlardan feragat etmiş sayılırsınız. Bu koşullar, feragat edilemeyecek herhangi bir garantiyi <br/>
             veya ikamet ettiğiniz ülkenin zorunlu yasaları uyarınca sahip olabileceğiniz tüketici koruma haklarını sınırlandırmamaktadır.

             </p>

             <br/>
             <br/>

             <h4 className='menu-title-1'>7.Toplu Davadan Feragat</h4>
             <p className='menu-paragraph-1' >
             İLGİLİ KANUN KAPSAMINDA UYGULANABİLDİĞİ HÂLLERDE, NETFLIX VE SİZ, YALNIZCA BİREYSEL OLARAK BİRBİRİNİZE KARŞI <br/>
             TALEPTE BULUNABİLECEĞİNİZİ VE HERHANGİ TOPLU YA DA DELEGELENDİRİLMİŞ DAVANIN DAVACISI YA DA TOPLU DAVA ÜYESİ OLARAK TALEPTE <br/>
             BULUNAMAYACAĞINIZI KABUL ETMİŞ SAYILIRSINIZ. Ayrıca, ilgili kanunlar kapsamında uygulanabildiği hâllerde, aksi Netflix ve tarafınızca kararlaştırılmadığı takdirde <br/>
             mahkeme, birden fazla kişinin talebini sizin talebinizle birleştiremez ve bu hususta herhangi bir toplu davaya hâkimlik edemez.
             </p>
             <br/>
             <br/>

             <h4 className='menu-title-1'>8.Muhtelif Hükümler</h4>
             <p className='menu-paragraph-1' >
             8.1. Geçerli Hukuk. Bu Kullanım Koşulları, Hollanda kanunlarına tabidir ve yine Hollanda kanunları kapsamında yorumlanabilir.
              <br/>
              <br/>
             8.2. Talep Edilmeyen Materyaller. Netflix, Netflix içerikleri için talep edilmeyen materyal ya da fikirleri kabul etmez ve içerik ya da programlarının, herhangi bir ortamda <br/>
             Netflix'e iletilen materyal ya da fikirlerle olan benzerliklerden sorumlu değildir
             <br/>
             <br/>
             8.3. Müşteri Destek. Hizmetimiz ve özellikleri hakkında daha fazla bilgi edinmek istiyorsanız ya da hesabınızla ilgili yardıma ihtiyacınız varsa lütfen netflix.com web sitesi <br/>
             üzerinden erişilebilen Netflix Yardım Merkezi'ni ziyaret edin. Belli durumlarda, Müşteri Hizmetlerinin size en iyi şekilde yardımcı olabilmesi için, bilgisayarınıza tam erişim <br/>
             sahibi olmamızı sağlayan bir uzaktan erişim destek aracı kullanması gerekebilir. Bilgisayarınıza bu şekilde erişmemizi istemiyorsanız, uzaktan erişim aracı üzerinden <br/>
             destek almaya izin vermemelisiniz. Bu durumda, size başka yollardan yardımcı olacağız. Bu Kullanım Koşulları ile Müşteri Destek tarafından verilen veya web sitelerimizin <br/>
             diğer kısımlarında bulunan bilgiler arasında herhangi bir uyuşmazlık olması durumunda, bu Kullanım Koşulları geçerli olacaktır.

             <br/>
             <br/>
             8.4. Sürdürülebilirlik. Bu Kullanım Koşullarının herhangi bir hükmü veya hükümlerinin geçersiz, yasalara aykırı veya uygulanamaz olması durumunda, kalan hükümlerin <br/>
             geçerliliği, yasallığı ve uygulanabilirliği tam olarak yürürlükte kalmaya devam edecektir.

             <br/>
             <br/>

             8.5. Kullanım Koşulları Değişiklikleri ve Devir. Netflix bu Kullanım Koşullarını zaman zaman değiştirebilir. Bu tür değişiklikler sizin için geçerli olmadan en az 30 gün önce <br/>
             sizi bilgilendireceğiz. Değişiklikleri kabul etmek istemiyorsanız değişiklikler yürürlüğe girmeden önce aboneliğinizi iptal edebilirsiniz. Sizinle anlaşmamızı, ilişkili <br/>
             haklarımız ve yükümlülüklerimiz dahil olmak üzere, herhangi bir zamanda bir başka tarafa devredebilir veya temlik edebiliriz ve böyle bir devir veya temlikle ilişkili olarak <br/>
             bizimle iş birliğinde bulunmayı kabul etmiş sayılırsınız.
             <br/>
             <br/>
             8.6. Elektronik İletişimler. Hesabınızla ilgili bilgiler (ödeme izinleri, faturalar, şifre ya da Ödeme Yöntemi değişiklikleri, onay mesajları, bildirimler vb.) tarafınıza yalnızca  <br/>
             elektronik formatta aktarılacaktır. Örneğin; kayıt esnasında e-posta adresinize gönderilen e-postalar aracılığıyla.

             </p>
             <br/>
             <br/>

             <h4 className='menu-title-1'>Son Güncelleme:5 Ocak 2023</h4>



     </div>

  </div>




   <div className="footer-termsof">
  
  <div class="footer-2-termsof">  
            
                  <div class="select-termsof">
                      <select className="select1-termsof">     
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

export default TermsofUse