import { IoIosArrowForward } from "react-icons/io";
import logo from './img/logo.png';
import style from './Header.module.css';
import { useState } from 'react';
import { LangSelector } from "../langselector/LangSelector";


export function Header({ langDropdownHide, updateLangDropDownHide }){
    const [EmailPlaceholder, setEmailPlaceholder] = useState('Email address');
    const [subscribeLabelHide, setSubscribeLabelHide] = useState('none');
    const [emailInputClassName, setEmailInputClassName ] = useState(style.subscribeInputIdle);
    const [emailInputValue, setEmailInputValue] = useState('');
    
    function emailGotFocus(){
        setEmailPlaceholder('');
        setSubscribeLabelHide('flex')
        setEmailInputClassName(style.subscribeInputActive);
    }
    function emaillLostFocus(){
        if (emailInputValue === ''){
            setEmailPlaceholder('Email address' );
            setSubscribeLabelHide('none')
            setEmailInputClassName(style.subscribeInputIdle);
        }
        
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
        <div className={style.header}>
            <div className={style.headerContent}>
                <div className={style.menuTop}>
                    <div className={style.logoContainer}>
                        <img className={style.logo} src={logo} alt='bitflix logo'/>
                    </div>
                    <div className={style.menu}>
                        <LangSelector  langDropdownHide={langDropdownHide} updateLangDropDownHide={updateLangDropDownHide} />
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