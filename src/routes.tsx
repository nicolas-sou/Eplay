import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Categories from './pages/Categories'
import Product from './pages/Product'
import Checkout from './pages/Checkout'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home></Home>} />
    <Route path="/categorias" element={<Categories></Categories>} />
    <Route path="/product/:id" element={<Product></Product>} />
    <Route path="/checkout" element={<Checkout></Checkout>} />
  </Routes>
)

export default Rotas
