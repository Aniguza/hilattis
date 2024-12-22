import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./componentes/Navbar";
import { Inicio } from "./componentes/Inicio";
import { About } from "./componentes/About";
import { Contacto } from "./componentes/Contacto";
import { RutasProtegidas } from "./componentes/RutasProtegidas";

function App() {
  const [canAccess, setCanAccess] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio setCanAccess={setCanAccess} />} />
        <Route
          path="/About"
          element={
            <RutasProtegidas isAllowed={canAccess}>
              <About />
            </RutasProtegidas>
          }
        />
        <Route
          path="/Contacto"
          element={
            <RutasProtegidas isAllowed={canAccess}>
              <Contacto />
            </RutasProtegidas>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
