import React from 'react'

function login() {
    return (
        <div>
            <section className="global-banner-wrapper overflow-hidden">
                <div className="container">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="hero-b-content-wrap py-3 py-sm-5" />
                    </div>
                    </div>
                </div>
            </section>
            <div className="container auth-wrapper">
                <div className="row justify-content-center">
                    <div className="col-md-8 p-5">
                    <div className="card overflow-hidden border-0">
                        <div className="card-header text-center bg-primary-color">
                        <h5 className="card-title mb-0">Login</h5>
                        </div>
                        <div className="card-body">
                        <div className="text-center col-md-12" />
                        <form
                            className="mt-4"
                            method="POST"
                            action="https://beraterstar.com/login"
                        >
                            <input
                            type="hidden"
                            name="_token"
                            defaultValue="f2YrP9TBFpU8ItRVIyL6Sr3hg4TW2ME0Xq5RfNWq"
                            />{" "}
                            <input
                            type="hidden"
                            name="previous_url"
                            defaultValue="https://beraterstar.com/magazin/berater/sebastian-billand-maximale-freiheit-mit-kryptowahrungen"
                            />
                            <div className="row mb-3">
                            <label
                                htmlFor="email"
                                className="col-md-4 col-form-label text-md-end"
                            >
                                E-Mail Adresse:{" "}
                            </label>
                            <div className="col-md-6">
                                <input
                                id="email"
                                type="text"
                                className="form-control"
                                name="email"
                                required=""
                                autoComplete="email"
                                autofocus=""
                                />
                            </div>
                            </div>
                            <div className="row mb-3">
                            <label
                                htmlFor="password"
                                className="col-md-4 col-form-label text-md-end"
                            >
                                Passwort:{" "}
                            </label>
                            <div className="col-md-6">
                                <input
                                id="password"
                                type="password"
                                className="form-control"
                                name="password"
                                required=""
                                autoComplete="current-password"
                                />
                            </div>
                            </div>
                            <div className="row mb-3">
                            <div className="col-md-6 offset-md-4">
                                <div className="form-check">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="remember"
                                    id="remember"
                                />
                                <label className="form-check-label" htmlFor="remember">
                                    {" "}
                                    Passwort merken{" "}
                                </label>
                                </div>
                            </div>
                            </div>
                            <hr />
                            <div className="row mb-0">
                            <div className="col-md-8 offset-md-4 mb-3">
                                <button type="submit" className="btn btn-warning px-2 py-2">
                                {" "}
                                Login{" "}
                                </button>
                                &nbsp;{" "}
                                <a
                                href="https://beraterstar.com/google/login"
                                className="btn btn-success"
                                >
                                <i className="fa-brands fa-google" /> Sign in with Google{" "}
                                </a>
                                <a
                                className="btn btn-link py-2 px-2"
                                href="https://beraterstar.com/password/reset"
                                >
                                {" "}
                                Passwort vergessen?{" "}
                                </a>
                            </div>
                            </div>
                            <div className="text-center">
                            <a
                                className="btn btn-outline-secondary"
                                href="register"
                                role="button"
                            >
                                {" "}
                                Noch keinen Account? Jetzt registrieren{" "}
                            </a>
                            </div>
                        </form>
                        </div>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default login
