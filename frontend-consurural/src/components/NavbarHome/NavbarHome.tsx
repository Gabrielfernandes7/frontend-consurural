import "./NavbarHome.css";

const NavbarHome = () => {
    return (
        <div>
            <nav className="nav">
                <ul className="navbar-items">
                    <li>Inicio</li>
                    <li>Orçamentos</li>
                    <li>Depoimentos</li>
                    <li>Recomendações</li>

                    <button className="button-consulting">
                        CONSULTORIA
                    </button>
                </ul>
                    <img src="/src/assets/icons/icon.png" 
                        className="nav-icon w-8 md:w-16"
                    />
            </nav>

        </div>
    )
}

export default NavbarHome;