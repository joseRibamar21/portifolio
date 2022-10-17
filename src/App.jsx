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
    <NavBar/>
    <Sobre/>
    <Skills/>
  </>
);