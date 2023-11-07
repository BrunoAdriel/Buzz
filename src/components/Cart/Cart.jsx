import { useCartContext } from "../Context/CartContext";

const Cart = () => {
    const { cart, eliminarCarrito } = useCartContext();

    const total = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);

    const handleEliminarCarrito = (productId) =>{
        eliminarCarrito(productId);
    }

    return (
        <div className="container">
            <h1>Carrito de Compras</h1>

            {cart.items.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Imagen</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            <th scope="col">Total</th>
                            <th scope="col">Eliminar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart.items.map((item) => (
                            <tr key={item.id}>
                                <th scope="row"><img style={{ width: '10%', height: 'auto' }} src={item.img} alt={item.nombre} /></th>
                                <td>{item.name}</td>
                                <td>$ {item.price}</td>
                                <td>$ {item.price * item.quantity}</td>
                                <td><button onClick={()=> handleEliminarCarrito(item.id)}>❌</button></td>
                            </tr>
                        ))}
                        <tr>
                            <th scope="row" colSpan={3}>Total:</th>
                            <td>${total.toFixed(2)}</td>
                        </tr>
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Cart;
