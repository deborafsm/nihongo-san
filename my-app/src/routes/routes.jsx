// import { Routes, Route } from 'react-router'
import { Routes, Route } from 'react-router-dom';

import Layout from '../layout/Grid/Layout'
import Home from '../pages/Home'
import Monografos from '../pages/Card'
import Digrafos from '../pages/CardDigrafos'
import Germinados from '../pages/CardGerminados.jsx'
import Cores from '../pages/cardColor'
import MemoryGame from '../pages/MemoryGame.jsx'

const Rotas = () => (
  <Layout>
  
    <Routes>
      <Route path='/home' element={<Home />} />
      <Route path='/monografos' element={<Monografos />} />
      <Route path='/digrafos' element={<Digrafos />} />
      <Route path='/germinados' element={<Germinados />} />
      <Route path='/cores' element={<Cores />} />
      <Route path='/game' element={<MemoryGame />} />
     
    </Routes>
  </Layout>
);

export default Rotas;