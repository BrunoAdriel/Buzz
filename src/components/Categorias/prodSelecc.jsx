import { useState } from "react";

function ProdSelec() {
    const [mostrarProducto, setMostraarProduct] = useState(false);


    const mostrar = () => {
    setMostraarProduct(true);
};

    return (
        <div>
            <button onClick={mostrar}>Mostrar Producto</button>

            {mostrarProducto && (
                <div>
                    <h2>Producto Específico</h2>
                    <p>Descripción del producto...</p>
                    <img src="imagen-del-producto.jpg" alt="Producto" />
                </div>
            )}
        </div>
);
}

export default ProdSelec;
