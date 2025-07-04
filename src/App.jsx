import Layout from './components/common/Layout'
import Hero from './components/landing/Hero'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Materias from './pages/Materias';
import Algoritmos from './pages/mates/primero/Algoritmos';
import Algebra from './pages/mates/primero/Algebra';
import Tecnologia from './pages/mates/primero/Tecnologia';
import Poo1 from './pages/mates/primero/Poo1';
import LenguajesForm from './pages/mates/segundo/LenguajesForm';
import AnalisisMat1 from './pages/mates/segundo/AnalisisMat1';
import Poo2 from './pages/mates/segundo/Poo2';
import TeoriaSistemas from './pages/mates/primero/TeoriaSistemas';
import IngSoft1 from './pages/mates/segundo/IngSoft1';
import ComuRedes1 from './pages/mates/segundo/ComuRedes1';
import ComuRedes2 from './pages/mates/tercero/ComuRedes2';
import AnalisisMat2 from './pages/mates/tercero/AnalisisMat2';
import Bbdd2 from './pages/mates/tercero/Bbdd2';
import SistemasOp1 from './pages/mates/segundo/SistemasOp1';
import Landing from './pages/Landing';
import Arquitectura1 from './pages/mates/primero/Arquitectura1';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Landing></Landing></Layout>}/>
        <Route path="/materias" element={<Materias></Materias>}/>
        <Route path="/materias/algoritmos" element={<Layout><Algoritmos></Algoritmos></Layout>}/>
        <Route path="/materias/algebra" element={<Layout><Algebra></Algebra></Layout>}/>
        <Route path="/materias/tecnologia" element={<Layout><Tecnologia></Tecnologia></Layout>}/>
        <Route path="/materias/poo1" element={<Layout><Poo1></Poo1></Layout>}/>
        <Route path="/materias/lenguajes-form" element={<Layout><LenguajesForm></LenguajesForm></Layout>}/>
        <Route path="/materias/analisis-mat1" element={<Layout><AnalisisMat1></AnalisisMat1></Layout>}/>
        <Route path="/materias/poo2" element={<Layout><Poo2></Poo2></Layout>}/>
        <Route path="/materias/teoria-sistemas" element={<Layout><TeoriaSistemas></TeoriaSistemas></Layout>}/>
        <Route path="/materias/ing-soft1" element={<Layout><IngSoft1></IngSoft1></Layout>}/>
        <Route path="/materias/comu-redes1" element={<Layout><ComuRedes1></ComuRedes1></Layout>}/>
        <Route path="/materias/comu-redes2" element={<Layout><ComuRedes2></ComuRedes2></Layout>}/>
        <Route path="/materias/analisis-mat2" element={<Layout><AnalisisMat2></AnalisisMat2></Layout>}/>
        <Route path="/materias/bbdd2" element={<Layout><Bbdd2></Bbdd2></Layout>}/>
        <Route path="/materias/sist-op1" element={<Layout><SistemasOp1></SistemasOp1></Layout>}/>
        <Route path="/materias/arq1" element={<Layout><Arquitectura1></Arquitectura1></Layout>}/>

      </Routes>
    </Router>
  )
}

export default App
