
import logo from './img/logo.png';
import style from './Header.module.css';
import { LangSelector } from "../langselector/LangSelector";
import { SubscribeForm } from "../subscribeForm/SubscribeForm";


export function Header({ langDropdownHide, updateLangDropDownHide }){

    



    
    

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
                    <SubscribeForm />
                </div>
            </div>
        </div>
    );
}