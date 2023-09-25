import { useParams } from "react-router-dom";
import UseAsynMock from "../Hook/UseAsyncMock";
import productos from "../Mocks/Products.json"; 
import ProductDetail from "../products/ProductDetail";



const CategoriaProducto = () =>{
    
    const {categoryId} = useParams();
    const {data, loading} = UseAsynMock(productos);
    
    if(loading) return (<div className="spinner-border text-secondary" role="status"></div>)

    const categorySelected = data.filter(marca => marca.marca.toLowerCase() === categoryId.toLocaleLowerCase() );


    return (
        <div className="container">{
            categorySelected.map((product)=>{
                return <ProductDetail key={product.id} product={product}/>
            })
            }
        </div>
    )
}

export default CategoriaProducto