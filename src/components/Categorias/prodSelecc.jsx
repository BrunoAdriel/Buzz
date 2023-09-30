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
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel, vero.</p>
                </div>
            )}
        </div>
);
}

export default ProdSelec;
