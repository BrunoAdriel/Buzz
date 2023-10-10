const ProductoInfo = ({ product, open, setOpen }) =>{
    
    const {img, marca, name, price} = product

    const handleClose = ( ) =>{
        setOpen(prev => !prev)
    }

    return(<>
    <div className="modal" tabIndex="-1" open={open} onClose={handleClose}>
            <div className="modal-dialog" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{marca} {name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div>{img}</div>
                        <div>{price}</div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Mas Info</button>
                    </div>
                </div>
            </div>
    </div>
    </>)
}

export default ProductoInfo