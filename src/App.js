import style from './components/langselector/LangSelector.module.css';
import { useState } from 'react';
import './App.css';
import { AdSection } from './components/ads/AdSection';
import { Faq } from './components/faq/Faq';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';

function App() {
  const [langDropdownHide, setLangDropdownHide] = useState(' ' + style.hidden);
  const [langDropdownHide2, setLangDropdownHide2] = useState(' ' + style.hidden);

  console.log(langDropdownHide);

  function appClick(ev){
    if (ev.target.className.length > 0){
      if(!ev.target.className.includes('langSelect')){
        setLangDropdownHide(' ' + style.hidden)
        setLangDropdownHide2(' ' + style.hidden);
      } 
    }
  }

  function updateLangDropDownHide(newValue){
    setLangDropdownHide(newValue);
  }

  function updateLangDropDownHide2(newValue){
    setLangDropdownHide2(newValue);
  }
  


  return (
    <div className="App" onClick={appClick}>
     <Header langDropdownHide={langDropdownHide} updateLangDropDownHide={updateLangDropDownHide}/>
     <AdSection />
     <Faq />
     <Footer langDropdownHide={langDropdownHide2} updateLangDropDownHide={updateLangDropDownHide2}/>
    </div>
  );
}

export default App;
