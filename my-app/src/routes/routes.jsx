// import { Routes, Route } from 'react-router'
import { Routes, Route } from "react-router-dom";

import Layout from "../layout/Grid/Layout";
import Home from "../pages/Home";
import Monografos from "../pages/Card";
import Digrafos from "../pages/CardDigrafos";
import Germinados from "../pages/CardGerminados.jsx";
import Cores from "../pages/cardColor";
import MemoryGame from "../pages/MemoryGame.jsx";
import Particulas from "../pages/Particulas.jsx";
import ParticulaGame from "../pages/ParticulaGame.jsx";
import QuizGame from "../pages/Quiz.jsx";
import Cards from "../pages/gameCards/index.jsx"
const Rotas = () => (
  <Layout>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/monografos" element={<Monografos />} />
      <Route path="/digrafos" element={<Digrafos />} />
      <Route path="/germinados" element={<Germinados />} />
      <Route path="/cores" element={<Cores />} />
      <Route path="/game" element={<MemoryGame />} />
      <Route path="/particula" element={<Particulas />}></Route>
      <Route path="/particula-game" element={<ParticulaGame />}></Route>
      <Route path="/quiz-game" element={<QuizGame />}></Route>
    </Routes>
  </Layout>
);

export default Rotas;
