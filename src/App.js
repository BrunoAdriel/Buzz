import './App.css';
import CategoriaProducto from './components/Categorias/CategoriaProducto';
import Categorias from './components/Categorias/categorias';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'
import ProductList from './components/products/ProducList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/Categorias/ItemDetailContainer'



function App() {
  const greeting="¡¡Bienvenidos a Buzz!!🚀"
  return(
    <>
      <Router>
        <Navbar/>
        <Routes>

{/*          <Route exact path="/" element={<ItemListContainer/>}></Route>*/}
          <Route exact path='/' element={<Categorias/>}></Route>
          <Route exact path='/Productos' element={<ProductList/>}></Route>
          <Route exact path='/Categoria/:categoryId' element={<CategoriaProducto/>}></Route>
          <Route exact path='/Producto/:idProd' element={<ItemDetailContainer/>}></Route>

        </Routes>
      </Router>
    </>
)
}

export default App;
