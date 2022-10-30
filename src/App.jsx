import Banner from './components/Atomos/Banner';
import Contact from './components/Organismos/Contact';
import Skills from './components/Organismos/Skills';
import SoftSkills from './components/Organismos/SoftSkills';


function App() {

  return (
    <div>
      <SlowAndFast />
    </div>
  )
}

export default App

const SlowAndFast = () => (
  <>
    <Banner />
    <a href='#skills'>
      <img src='./lamp.png' alt='lamp' style={{
        position: "relative",
        marginTop: "-200px",
        height: "4%",
        width: "10%"
      }} />
    </a>
    
    <div  ></div>
    <img src='caminho.png' style={{
        paddingLeft: "4.6%",
        width: "5%",
        height: "90px"
      }}/>
    <div id='skills'></div>
    <Skills/>
    <SoftSkills/>
    <Contact/>
  </>
);