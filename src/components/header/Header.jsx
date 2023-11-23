import { IoLanguageSharp } from 'react-icons/io5';
import { IoIosArrowForward } from "react-icons/io";
import { RxTriangleDown } from "react-icons/rx";
import logo from './img/logo.png';
import style from './Header.module.css';
import { useState } from 'react';


export function Header(){
    const [EmailPlaceholder, setEmailPlaceholder] = useState('Email address');
    const [subscribeLabelHide, setSubscribeLabelHide] = useState('none');
    const [emailInputClassName, setEmailInputClassName ] = useState(style.subscribeInputIdle);
    const [emailInputValue, setEmailInputValue] = useState('');
    const [langDropdownHide, setLangDropdonHide] = useState(' ' + style.hidden);
    const [language, setlanguage] = useState('English');


    function emailGotFocus(){
        setEmailPlaceholder('');
        setSubscribeLabelHide('flex')
        setEmailInputClassName(style.subscribeInputActive);
    }
    function emaillLostFocus(){
        if (emailInputValue === ''){
            setEmailPlaceholder('Email address');
            setSubscribeLabelHide('none')
            setEmailInputClassName(style.subscribeInputIdle);
        }
        
    }

    function langDropdownclick(){
        langDropdownHide === ' ' + style.hidden ? setLangDropdonHide('') : setLangDropdonHide(' ' + style.hidden);
    }

    function headerClick(ev){

        if (ev.target.className.length > 0){
            !ev.target.className.includes('langSelect') && setLangDropdonHide(' ' + style.hidden);
        }
     }

     function changeLang(lang){
        setlanguage(lang);
     }
    
    const emailInput = <input className={emailInputClassName} 
                              type='text' 
                              placeholder={EmailPlaceholder} 
                              onFocus={emailGotFocus} 
                              onBlur={emaillLostFocus}
                              onChange={e => setEmailInputValue(e.target.value)}
                              value={emailInputValue}>
                       </input>;

    return(
        <div className={style.header} onClick={headerClick}>
            <div className={style.headerContent}>
                <div className={style.menuTop}>
                    <div className={style.logoContainer}>
                        <img className={style.logo} src={logo} alt='bitflix logo'/>
                    </div>
                    <div className={style.menu}>
                        <div onClick={langDropdownclick} className={style.comboBox + ' langSelect'}>
                            <div className='langSelect'><IoLanguageSharp className='langSelect'/></div>
                            <div className='langSelect'>{language}</div>
                            <div className='langselect'><RxTriangleDown /></div>
                        </div>
                        <div className={style.langDropdown + langDropdownHide}>
                            <div className={style.langRow} onClick={() => changeLang('English')}>English</div>
                            <div className={style.langRow} onClick={() => changeLang('Lithuanian')}>Lithuanian</div>
                        </div>
                        <div className={style.loginBtn}>Sign In</div>    
                    </div>
                    
                </div>

                <div className={style.headerMain}>
                    <div className={style.title}>
                        Unlimited movies, TV shows, and more
                    </div>
                    <div className={style.subtitle}>Watch anywhere. Cancel anytime</div>
                    <div className={style.subscribeIntro}>
                        Ready to watch? Enter your email to createe or restart your membership.
                    </div>
                    <div className={style.subscribeContainer}>
                        <div className={style.inputbox}>
                            <div className={style.subscribeLabel} style={{display: subscribeLabelHide}}>Email address</div>
                            {emailInput}     
                        </div>
                        <div className={style.subscribeBtn}>
                            Get Started <IoIosArrowForward />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}