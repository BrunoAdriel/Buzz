import carro from '../../imgs/carro.png';
import { useCartContext } from '../Context/CartContext';
import './CartWidget.css'


const CartWidget = () =>{
    
    const { cart } = useCartContext();
    
    return (
        <>
            <div style={{display: "flex", alignItems: "center"}}>
                <img src={carro} className='carroImg' alt='carrito de compras con lista de productos seleccionados'></img>
                <h3>{cart.items.length}</h3>
            </div>
        </>
    )
}

export default CartWidget;