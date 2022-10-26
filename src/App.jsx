import Banner from './components/Atomos/Banner';
import NavBar from './components/Organismos/NavBar';
import Skills from './components/Organismos/Skills';
import Sobre from './components/Organismos/Sobre';


function App() {

  return (
    <div>
      <SlowAndFast/>
    </div>
  )
}

export default App

const SlowAndFast = () => (
  <>
  <Banner/>
  <div style={{
    background: "rgba(255, 255, 255, 0) linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 6, 16, 0.1) 40%, rgba(0, 6, 16, 0.1) 75%, rgba(0, 6, 16, 1) 100%) repeat scroll 0 0",
    position: "relative",
    marginTop: "-200px",
    height: "200px",
  }}>
    
  </div>
  <img src='./lamp.png' alt='lamp' style={{
    
    position: "relative",
    marginTop: "-200px",
    height: "4%",
    width: "10%"
  }}></img>
    {/* <NavBar/>

    
<Sobre/>*/}
    <Skills/> 
  </>
);