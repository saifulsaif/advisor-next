import Link from "next/link";


const Navbar = () => {
    return (
        <>
            <header className="main-header-wrapper">
                <nav className="navbar navbar-expand-lg py-2 py-sm-3">
                    <div className="container">
                    <a className="navbar-brand" href="https://beraterstar.com">
                        <img src="https://beraterstar.com/img/Logo.png" alt="" />
                        </a>
                    <div className=" navbar-collapse" id="navbarText">
                    <ul className="navbar-nav d-flex me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-white active" href="/">Startseite</Link>        
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " href="/berater">Alle Berater</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " href="/events">Online-Events</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white " href="/magazin">Magazin</Link>
                        </li>
                    </ul>

                        <div className="navbar-button d-flex gap-3 flex-wrap">
                            <Link className="nav-link register text-white secondary-button" href="/registration">Registrieren</Link>
                            <Link className="nav-link login text-white primary-button" href="/login">Login</Link>
                        </div>
                    </div>
                    </div>
                </nav>
                
            </header>

        </>
    )
  };
  
  export default Navbar;