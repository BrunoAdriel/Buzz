import { useParams } from "react-router-dom";
import UseAsynMock from "../Hook/UseAsyncMock";
import productos from "../Mocks/Products.json";
import ProdSelec from "./prodSelecc";

const ItemDetailContainer = () => {
    
    const {idProd} = useParams();
    const {data, loading} = UseAsynMock(productos);
    
    if(loading) return (<div className="spinner-border text-secondary" role="status"></div>)

    const categorySelected = data.filter((item) =>item.id === idProd);

    return (
        <div className="container">{
            categorySelected.map((product)=>{
                return <ProdSelec key={product.id} product={product}/>
            })
            }
        </div>
    )
}



export default ItemDetailContainer