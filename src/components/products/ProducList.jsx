import UseAsynMock from "../Hook/UseAsyncMock";
import ProductDetail from "../products/ProductDetail";
import productos from "../Mocks/Products.json"

const ProductList = () => {

    const {data, loading} = UseAsynMock(productos)
    
    if(loading) return (<div className="spinner-border text-secondary" role="status"></div>)

    return(
        <div className="container"> 
            <h1 className="display-1">Nuestros Productos</h1>
            <div className="container text-center">
                <div className="row">
                    <div className="col"> 
                    {
                        data.map((prod) => {
                            return(
                                <ProductDetail key={prod.id} prod={prod}>

                                </ProductDetail>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProductList;