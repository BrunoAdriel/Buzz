const ProductoInfo = ({ product, open, setOpen }) =>{
    
    const {img, marca, name, price} = product

    const handleClose = ( ) =>{
        setOpen(prev => !prev)
    }

    return(<>
    <div className={`modal ${open ? 'show' : ''}`} tabIndex="-1" style={{ display: open ? 'block' : 'none' }}>
            <div className="modal-dialog" >
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{marca} {name}</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleClose}></button>
                    </div>
                    <div className="modal-body">
                        <div>{img}</div>
                        <div>$ {price}</div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleClose}>Close</button>
                        <button type="button" className="btn btn-primary">Mas Info</button>
                    </div>
                </div>
            </div>
    </div>
    </>)
}

export default ProductoInfo