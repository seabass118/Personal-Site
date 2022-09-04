import './App.css';
import Banner from './components/banner/Banner';
import Header from './components/header/Header.js';
import About from './components/panels/About';
import Ethereum from './components/panels/Ethereum';
import Skills from './components/panels/Skills';
import Projects from './components/panels/Projects';
import Contact from './components/panels/Contact';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <div className='Content-wrapper'>
                <div className='Panels-wrapper'>
                    <div className='Panels-top'>
                        <About />
                        <Skills />
                    </div>
                    <div className='Panels-bottom'>
                        <Ethereum />
                        <Projects />
                        <Contact />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;
