import productos from "../Mocks/Products.json"
import ProdSelec from "./prodSelecc";


const ItemDetailContainer = () =>{
    
    const idToFilter = [];

    // Filtrar elementos JSX por su ID
    const filteredItems = productos
    .filter(item => item.id === idToFilter)
    .map(filteredItem => (
        <div key={filteredItem.id}>
        </div>
));

    return(

        <div>
            <ProdSelec>{filteredItems}</ProdSelec>
        </div>
    )
}

export default ItemDetailContainer;

