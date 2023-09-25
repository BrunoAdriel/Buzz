import UseAsyncMock from "../Hook/UseAsyncMock";
import Marcas from "../Mocks/Marcas.json"

const Categorias = () =>{
const {data, loading} = UseAsyncMock(Marcas)
    
    if(loading) return (<div className="spinner-border text-secondary" role="status"></div>)

    return (
        <div>
        Marcas
        {
            data.map((prod)=>{
                return(
                    <div key={prod.id} className="card" style={{width: "18rem"}}>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">{prod.marca}</li>
                        </ul>
                    </div>
                )
            })
        }
        </div>
    );
}

export default Categorias;