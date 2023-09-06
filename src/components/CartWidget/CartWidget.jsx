import carro from '../../imgs/carro.png';
import './CartWidget.css'


const CartWidget = () =>{
    return (
        <>
        <img src={carro} className='carroImg' alt='carrito de compras con lista de productos seleccionados'></img>
        <span>(3)</span>
        </>
    )
}

export default CartWidget;