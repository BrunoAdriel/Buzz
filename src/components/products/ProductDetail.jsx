import ItemDetailContainer from "../Categorias/ItemDetailContainer";
import ProdSelec  from "../Categorias/prodSelecc";
import { Link, useParams } from "react-router-dom";




const ProductDetail = ({product, children})=>{



    const {id, name, price, img, marca} = product

    const {idProd} = useParams();


    return(
        //Formato de la carta
        <div className="container text-center">
        <div className="row">
            <div className="col">
                <div className="card" style={{width: '25rem'}}>
                    <img src={img} className="card-img-top" alt={name}/>
                    <div className="card-body">
                        <h5 className="card-title">{marca}  {name}</h5>
                        <p className="card-text">$: {price}</p>
                    </div>
                <Link to={"/Productos/:idProd"} idProd={idProd}>
                    <button className="btn btn-secondary">Mostrar Producto</button>
                </Link>
                </div>
            </div>
        </div>
    </div>
    );
}

export default ProductDetail;