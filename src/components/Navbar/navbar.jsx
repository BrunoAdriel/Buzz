import { Link } from 'react-router-dom';
import logo from '../../imgs/logo.png'
import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css'


const Navbar = () =>{
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link to="/">
            <img src={logo} className='logo' alt='Imagen logo de la empresa'></img>
            <a className="navbar-brand" >Buzz</a>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <Link to="/Productos">
                    <li className="nav-item">
                        <a className="nav-link" aria-current="page" >Productos</a>
                    </li>
                </Link>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page">Lo nuevo</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page">Ingreso</a>
                </li>
                </ul>
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
        <Link to="/Cart">
            <CartWidget/>
        </Link>
    </nav>
    );
}

export default Navbar;