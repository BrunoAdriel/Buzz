import './App.css';
import Categorias from './components/Categorias/categorias';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'
import ProductList from './components/products/ProducList';



function App() {
  const greeting="¡¡Bienvenidos a Buzz!!🚀"
  return(
    <>
      <Navbar/>
      <ItemListContainer greeting={greeting} />
      <Categorias />
<ProductList/>
    </>
)
}

export default App;
