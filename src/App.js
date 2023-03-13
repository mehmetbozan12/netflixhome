import React from 'react';
import Home from './Home.js';
import Account from './page/Account/Account.js'
import { AuthContextProvider } from './context/Auth.Context.js';
import { Route, Routes } from 'react-router-dom';
import NetflixHome from './page/NetflixHome/NetflixHome.js';
import Sss from './page/Sss/Sss.js';
import Media from './page/Media/Media.js';
import TermsofUse from './page/TermsofUse/TermsofUse.js';
import CorporateInformation from './page/CorporateInformation/CorporateInformation.js';
import LegalProvision from './page/LegalProvision/LegalProvision.js';
import Giftcards from './page/GiftCards/Giftcards.js';
import Usegiftcard from './page/UseGiftCard/Usegiftcard.js';
import Securty from './page/Securty/Securty.js';
import Contactus from './page/ContactUs/Contactus.js';



function App() {
  return (
    <>
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/account' element={<Account/>}/> 
        <Route path='/netflixhome' element={<NetflixHome/>}/> 
        <Route path='/sss' element={<Sss/>}/>
        <Route path='/media'element={<Media/>}/>
        <Route path='/termsofuse' element={<TermsofUse/>}/>
        <Route path='/corporateinformation' element={<CorporateInformation/>}/>
        <Route path='/legalprovision' element={<LegalProvision/>}/>
        <Route path='/giftcards' element={<Giftcards/>}/>
        <Route path='/usegiftcard' element={<Usegiftcard/>}/>
        <Route path="/securty" element={<Securty/>}/>
        <Route path="/contactus" element={<Contactus/>}/>
     
        </Routes>
        </AuthContextProvider>
  </>
   
  
   
  
  );
}

export default App;
