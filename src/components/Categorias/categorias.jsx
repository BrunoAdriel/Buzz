import { Link } from "react-router-dom";
import UseAsyncMock from "../Hook/UseAsyncMock";
import Marcas from "../Mocks/Marcas.json";
import '../../App.css';

const Categorias = () =>{
const {data, loading} = UseAsyncMock(Marcas)
    
    if(loading) return (<div className="spinner-border text-secondary" role="status"></div>)

    return (
        <div  className="ContenedorCategorias">
        Marcas
        {
            data.map((prod)=>{
                return(
                    
                    <div key={prod.id} className="card text-center border-secondary ContenedorCategorias" style={{width: "15rem"}}>
                        <Link to={`/categoria/${prod.marca}`}>
                        <ul className="list-group list-group-flush ">
                        <li className="list-group-item">{prod.marca}</li>
                        </ul>
                        </Link>
                    </div>

                )
            })
        }
        </div>
    );
}

export default Categorias;