import { useState } from "react";


const ProductDetail = (product, children)=>{

    const {id, name, price, img, marca} = product
    const [isSelected, setIsSelected] = useState(false);

    return(
        //Grid container 
        <div className="container text-center">
            <div className="row">
                <div className="col">

                <div className="card" style={{width: "18rem"}}>
                    <img src={img} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{marca}{name}</h5>
                            <p className="card-text">{price}</p>
                        </div>
                </div>


                </div>
            </div>
        </div>
    );
}

export default ProductDetail;