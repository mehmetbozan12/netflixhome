import React, { useState } from 'react'
import './Account.css'
import {TfiWorld} from 'react-icons/tfi'
import { Link , useNavigate } from 'react-router-dom'
import { UserAuth } from '../../context/Auth.Context'




const Account = () => {
  const [email , setEmail] = useState('')
  const [password ,setPassword] = useState('')
  const {user, acount} = UserAuth()
 

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    return password.length >= 8;
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!isValidEmail(event.target.value)) {
      event.target.parentElement.classList.add('isInvalid');
    } else {
      event.target.parentElement.classList.remove('isInvalid');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (!isValidPassword(event.target.value)) {
      event.target.parentElement.classList.add('isInvalid');
    } else {
      event.target.parentElement.classList.remove('isInvalid');
    }
  };
  
  const handleSubmit = async (e) =>{
    e.preventDefault()
    //Login işlemi
   
    try{
      await acount(email , password)

    }
    catch(error){


    }
  }

  return (
    <div className='account'>
    <div className='header-account'> 
    <a className='navbar-brand' href="https://www.freepnglogos.com/pics/netflix-logo-png" title="Image from freepnglogos.com">
            <img className='nav_logo' src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix logo" /></a>
      </div>
         <div  className='sigin-account-menu'>
         <div className='sigin-account'>
            <h1 className='sigin-account-title'>Oturum Aç</h1> 

            <form onSubmit={handleSubmit} className='inputs-account'>
      <div className={`input ${isValidEmail(email) ? "" : "isInvalid"}`}>
        <input
          type='email'
          autoComplete='email'
          onChange={(e) => setEmail(e.target.value)}
          className='input-account-1'
          placeholder='E-posta veya telefon numarası'
        />
      </div>
      <div className={`input ${isValidPassword(password) ? "" : "isInvalid"}`}>
        <input
          type='password'
          autoComplete='current-password'
          onChange={(e) => setPassword(e.target.value)}
          className='input-account-1'
          placeholder='Parola'
        />
      </div>
      <Link to='/netflixhome'>
        <button className='buton-account' disabled={!isValidEmail(email) || !isValidPassword(password)}>Oturum Aç</button>
      </Link>
    </form>

        </div> 
        <div className='help-account'>
            <p className='remember-account'><input type='checkbox'/> Beni Hatırla</p>
            <a className='link-help-account' href="#">
            <h4 className='help-account-1'> Yardım ister misiniz?</h4>
            </a>
        </div>

           <div className='sign-account-titles'>
            <h4 className='sigin-account-title-2'>Netflix'e katılmak ister misiniz?</h4>
            <a className='link-help-account' href='#'>
            <Link to='/'>
            <h4 className='sigin-account-title-3' >Şimdi kaydolun</h4> 
            </Link>
            </a>
           </div>


           <div className='sign-paragraf-account'>
            <p>Bu sayfa, bot olmadığınızdan emin olmak için Google <br/> reCAPTCHA tarafından korunmaktadır. </p>
            <a className='link-help-account' href="#">
              <p className='singin-prgrf-account'>Daha fazla bilgi edin.</p>
            </a>
           </div>
        </div>
        <div className='footer-account'>
          <a className='footer-link-account' href='#'>
          <h3 className='footer-title-account'>Sorularınız mı var? 0850-390-7444 numaralı telefonu arayın</h3>
          </a>
          <div className='footer-links-account'>
            <div className='footer-links-1'>
           <Link to ="/sss"><a className='link-help-account'>SSS</a></Link> 
              <a className='link-help-account' href="#">Çerez Tercihleri</a>
            </div>
            <div className='footer-links-1'>
            <Link to=""><a className='link-help-account'>Yardım Merkezi</a></Link>  
            <Link to="/corporateinformation"><a className='link-help-account' href="#">Kurumsal Bilgiler</a></Link> 
            </div>
            <div className='footer-links-1'>
           <Link to="/termsofuse"><a className='link-help-account'>Kullanım Koşulları</a></Link>   
          </div>
          <div className='footer-links-1'>
              <a className='link-help-account' href="#">Mahremiyet</a>
          </div>
        </div>
        <select className='footer-account-language-1'><TfiWorld/>
                        <option>İngilizce</option>
                        <option>Türkçe</option>
                    </select>
        </div>
        </div>
  )
}

export default Account;