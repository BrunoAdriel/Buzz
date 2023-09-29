import ProdSelec  from "../Categorias/prodSelecc";
import { Link } from "react-router-dom";



const ProductDetail = ({product, children})=>{



    const {id, name, price, img, marca} = product


    return(
        //Formato de la carta


        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card">
                    <img src={img} className="card-img-top" alt={name}/>
                    <div className="card-body">
                        <h5 className="card-title">{marca}  {name}</h5>
                        <p className="card-text">$: {price}</p>
                    </div>
                    <Link to={`/Producto/${id}`}>
                    <ProdSelec></ProdSelec >
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;