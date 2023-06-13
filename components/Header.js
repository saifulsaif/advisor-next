import React from 'react'

function header() {
    return (
        <>
            <header className="main-header-wrapper">
                <nav className="navbar navbar-expand-lg py-2 py-sm-3">
                    <div className="container">
                    <a className="navbar-brand" href="https://beraterstar.com">
                        <img src="https://beraterstar.com/img/Logo.png" alt="" />
                    </a>
                    <button
                        className="navbar-toggler bg-warning"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarText"
                        aria-controls="navbarText"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a
                            className="nav-link text-white active "
                            aria-current="page"
                            href="/"
                            >
                            Startseite
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white " href="/berater">
                            Alle Berater
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white " href="/event">
                            Online-Events
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white  " href="/magazin">
                            Magazin
                            </a>
                        </li>
                        </ul>
                        <div className="navbar-button d-flex gap-3 flex-wrap">
                        <a
                            href="https://beraterstar.com/register"
                            className="secondary-button"
                        >
                            Registrieren
                        </a>
                        <a href="https://beraterstar.com/login" className="primary-button">
                            Login
                        </a>
                        </div>
                    </div>
                    </div>
                </nav>
            </header>

        </>
    )
}

export default header
