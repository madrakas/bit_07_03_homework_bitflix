import { useState } from 'react';
import style from './LangSelector.module.css';
import { IoLanguageSharp } from 'react-icons/io5';
import { RxTriangleDown } from "react-icons/rx";

export function LangSelector({langDropdownHide, updateLangDropDownHide}){
    const [language, setlanguage] = useState('English');

    console.log(langDropdownHide);

     function langDropdownclick(){
        updateLangDropDownHide(langDropdownHide.includes('hidden') ? '' : ' ' + style.hidden);
        // updateLangDropDownHide('');
        console.log('Langselector click: ', langDropdownHide);
    }

    function changeLang(lang){
        setlanguage(lang);
    }
    

        return(
        <>
            <div onClick={langDropdownclick} className={style.comboBox + ' langSelect'}>
                <div className='langSelect'><IoLanguageSharp className='langSelect'/></div>
                <div className='langSelect'>{language}</div>
                <div className='langselect'><RxTriangleDown /></div>
            </div>
            <div className={style.langDropdown + ' ' + langDropdownHide}>
                <div className={style.langRow} onClick={() => changeLang('English')}>English</div>
                <div className={style.langRow} onClick={() => changeLang('Lithuanian')}>Lithuanian</div>
            </div>
        </>
    );
}