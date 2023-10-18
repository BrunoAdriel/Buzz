import { useCartContext } from "../Context/CartContext";

const Cart = () =>{

    const { cart } = useCartContext();

    return(
            <div className="container">
                <h1>Lista de Productos</h1>

                {cart.item.length === 0 ? (
                    <p>El carrito se encuentra vacio</p>
                ) : (
                <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.item.map ((item) => (
                        
                        <tr key={item.id}>
                            <th scope="row"><img style={{width: '10%', height:'10%'}} src={item.img}></img></th>
                            <td>{item.nombre}</td>
                            <td>$ {item.price}</td>
                            <td>$ {item.price * item.quantity}</td>
                        </tr>
                        ))}
                        <tr>
                            <th scope="row" colSpan={3}>Total: $</th>
                            <td>${cart.item.toFixed(2)}</td>
                        </tr>
                </tbody>
                </table>
                )}
                </div>

);
};
export default Cart;