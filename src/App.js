import './App.css';
import { AdSection } from './components/ads/AdSection';
import { Faq } from './components/faq/Faq';
import { Header } from './components/header/Header';

function App() {
  return (
    <div className="App">
     <Header />
     <AdSection />
     <Faq />
    </div>
  );
}

export default App;
