const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h3>F</h3>
            </div>
            <ul>
            <li><a href="/" className="navbar-link">Inicio</a></li>
            <li><a href="/productos" className="navbar-link">Productos</a></li>
            <li><a href="/contacto" className="navbar-link">Contacto</a></li>
            </ul>
        </nav>
        );
    };
    
export default Navbar;