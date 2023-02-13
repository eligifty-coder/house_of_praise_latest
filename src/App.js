import { useEffect, useContext } from 'react';
import './App.css'
import Nav from './components/Nav/Navbar';
import About from './components/about/About';
import Connect from './components/connect/Connect';
import Improve from './components/improve/Improve'
import Program from './components/programs/Program'
import Event from './components/events/Event';
import Giving from './components/giving/Giving';
import Ministry from './components/ministry/Ministry';
import Live from './components/Live/Live';
import Leadership from './components/leadership/Leadership';
import Footer from './components/footer/Footer';
import HopProvider from './context/HopProvider'
import HopContext from './context/hopContext';
function App() {
  const ctx = useContext(HopContext)
  useEffect(() => {
    window.scroll({
      top: ctx.scrollVal,
      behavior: 'smooth'
    })
  }, [ctx.scrollVal])

  return (
    <HopProvider>
      <div className="App">
        <Nav />
        <About />
        <Connect />
        <Ministry />
        <Program />
        <Improve />
        <Event />
        <Giving />
        
        <Live />
        <Leadership />
        <Footer />
      </div>
    </HopProvider>
  );
}

export default App;
