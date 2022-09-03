import './App.css';
import Banner from './components/banner/Banner';
import Header from './components/header/Header.js';
import About from './components/panels/About';
import Ethereum from './components/panels/Ethereum';
import Skills from './components/panels/Skills';

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
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
