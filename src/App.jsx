import NavBar from './components/NavBar';
import Sobre from './components/Sobre';


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
  </>
);