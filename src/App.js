import './App.css';
import { AdSection } from './components/ads/AdSection';
import { Faq } from './components/faq/Faq';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';

function App() {
  return (
    <div className="App">
     <Header />
     <AdSection />
     <Faq />
     <Footer />
    </div>
  );
}

export default App;
