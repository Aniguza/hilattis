import { Inicio } from "./componentes/Inicio.jsx";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './componentes/Navbar'; 
import { About } from './componentes/About.jsx';


function App() {

  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="About" element={<About />} />

      </Routes>
      
    </Router>
      
    </>
  )
}

export default App
