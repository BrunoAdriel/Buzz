import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar'


function App() {
  const greeting="¡¡Bienvenidos a Buzz!!🚀"
  return(
    <>
      <Navbar/>
      <ItemListContainer greeting={greeting} />
    </>
)
}

export default App;
