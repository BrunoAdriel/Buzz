import UseAsynMock from "../Hook/UseAsyncMock";
import ProductDetail from "../products/ProductDetail";
import productos from "../Mocks/Products.json"

const ProductList = () => {

    const {data, loading} = UseAsynMock(productos)
    
    if(loading) return (<div className="spinner-border text-secondary" role="status"></div>)

    return(
        <div> 
            <h1 className="display-1">Nuestros Productos</h1>

                    {
                        data.map((product) => {
                            return(
                                <ProductDetail key={product.id} product={product}>

                                </ProductDetail>
                            )
                        })
                        }

        </div>
    )
}


export default ProductList;