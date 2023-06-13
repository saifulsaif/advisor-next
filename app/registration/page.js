import React from 'react'

function registration() {
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
                    <div className="col-md-8">
                    <form
                        className="advisor_form"
                        method="POST"
                        action="https://beraterstar.com/register"
                    >
                        <input
                        type="hidden"
                        name="_token"
                        defaultValue="f2YrP9TBFpU8ItRVIyL6Sr3hg4TW2ME0Xq5RfNWq"
                        />{" "}
                        <div className="card m-2 text-center overflow-hidden border-0">
                        <h2 className="title text-center p-4 bg-dark text-white">
                            Jetzt kostenlos registrieren
                        </h2>
                        <div className="card-header">
                            Wie möchtest du <b> Beraterstar</b> nutzen?
                        </div>
                        <div className="card-body">
                            <div className="select_area" style={{ height: 280 }}>
                            <div
                                className="d-flex flex-wrap gap-2 justify-content-center"
                                style={{ marginTop: "10rem" }}
                            >
                                <button
                                className="btn-warning registration_button btn"
                                id="customer_button"
                                style={{ padding: 25 }}
                                >
                                <i className="fa fs-3 fa-user text-dark" aria-hidden="true" />
                                &nbsp; Als User registieren{" "}
                                </button>
                                <button
                                className="btn-warning registration_button btn ml-3"
                                id="advisor_button"
                                >
                                <i
                                    className="fa fs-3 fa-user-tie text-dark"
                                    aria-hidden="true"
                                />{" "}
                                &nbsp; Als Berater registieren{" "}
                                </button>
                            </div>
                            </div>
                            <div className="from_body" style={{ display: "none" }}>
                            <div className="row mb-3">
                                <label
                                htmlFor="name"
                                className="col-md-4 col-form-label text-md-end"
                                >
                                Vor und Nachname
                                </label>
                                <div className="col-md-6">
                                <div style={{ display: "flex" }}>
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    placeholder="Vorname"
                                    required=""
                                    autoComplete="name"
                                    autofocus=""
                                    style={{ width: "49%" }}
                                    />
                                    <input
                                    type="text"
                                    className="form-control"
                                    name="last_name"
                                    placeholder=" Nachname"
                                    required=""
                                    style={{ width: "49%", marginLeft: 8 }}
                                    />
                                </div>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label
                                htmlFor="username"
                                className="col-md-4 col-form-label text-md-end"
                                >
                                Benutzername:{" "}
                                </label>
                                <div className="col-md-6">
                                <input
                                    id="username"
                                    placeholder="Wähle einen Benutzername"
                                    type="text"
                                    className="form-control"
                                    name="username"
                                    required=""
                                />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label
                                htmlFor="email"
                                className="col-md-4 col-form-label text-md-end"
                                >
                                E-Mail Addresse:{" "}
                                </label>
                                <div className="col-md-6">
                                <input
                                    id="email"
                                    type="text"
                                    placeholder=" Deine E-Mail Adresse"
                                    className="form-control"
                                    name="email"
                                    required=""
                                    autoComplete="email"
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
                                    autoComplete="new-password"
                                />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <label
                                htmlFor="password-confirm"
                                className="col-md-4 col-form-label text-md-end"
                                >
                                {" "}
                                Passwort wiederholen:{" "}
                                </label>
                                <div className="col-md-6">
                                <input
                                    id="password-confirm"
                                    type="password"
                                    className="form-control"
                                    name="password_confirmation"
                                    required=""
                                    autoComplete="new-password"
                                />
                                </div>
                            </div>
                            <div className="advisor_section" style={{}}>
                                <div className="row mb-3">
                                <p className="card-text">
                                    <small>Wähle eine Branche aus in der du tätig bist: </small>
                                </p>
                                <label
                                    htmlFor="consultingfield"
                                    className="col-md-4 col-form-label text-md-end"
                                >
                                    {" "}
                                    Branche auswählen:{" "}
                                </label>
                                <div className="col-md-6">
                                    <select
                                    id="consultingfield"
                                    name="consultingfield"
                                    className="form-control"
                                    required=""
                                    >
                                    <option hidden="" value={0}>
                                        {" "}
                                        In welche Branche bist du tätig?{" "}
                                    </option>
                                    <option value={25}>Baufinanzierung</option>
                                    <option value={1}>Beziehungsberatung</option>
                                    <option value={24}>Buchexperte</option>
                                    <option value={22}>Closer</option>
                                    <option value={2}>Coaching</option>
                                    <option value={26}>Crypto</option>
                                    <option value={3}>E-Commerce-Agentur</option>
                                    <option value={4}>Energieberatung</option>
                                    <option value={21}>Ernährungsberatung</option>
                                    <option value={5}>Finanzberatung</option>
                                    <option value={6}>Fitnesstraining</option>
                                    <option value={7}>Fotografie-Agentur</option>
                                    <option value={20}>Hypnose</option>
                                    <option value={8}>Immobilienvermittlung</option>
                                    <option value={9}>Karriereberatung</option>
                                    <option value={10}>Marketingagentur</option>
                                    <option value={11}>Marketingberatung</option>
                                    <option value={12}>Meditation</option>
                                    <option value={13}>PR-Beratung</option>
                                    <option value={14}>Rechtsberatung</option>
                                    <option value={15}>Social-Media-Agentur</option>
                                    <option value={16}>Steuerberatung</option>
                                    <option value={17}>Unternehmensberatung</option>
                                    <option value={23}>Verkaufstraining</option>
                                    <option value={18}>Versicherungsberatung</option>
                                    <option value={19}>Video-Produktionsagentur</option>
                                    </select>
                                </div>
                                </div>
                                <div className="text-left flex mb-3">
                                {/* <input v-model="checkAdvisor" type="checkbox">
                                        <label> Beraterprofil erstellen </label> */}
                                </div>
                            </div>
                            <div className="text-center mb-3">
                                <input
                                type="checkbox"
                                id="flexCheckDefault"
                                required=""
                                defaultValue=""
                                />
                                <label htmlFor="flexCheckDefault">
                                {" "}
                                Ich akzeptiere die{" "}
                                <a
                                    href="agb"
                                    target="_blank"
                                    className="text-decoration-none"
                                >
                                    {" "}
                                    Allgemeinen Geschäftsbedingungen
                                </a>
                                </label>
                            </div>
                            <div className="row mb-0">
                                <div
                                className="col-md-12 offset-md-4 mb-3"
                                style={{ textAlign: "left" }}
                                >
                                <button
                                    type="button"
                                    className="back btn btn-secondary"
                                    style={{ marginRight: 3 }}
                                >
                                    <i className="fa fa-back" aria-hidden="true" /> Back
                                </button>
                                <button
                                    type="submit"
                                    className="btn btn-warning customer_reg py-2 px-2"
                                    style={{ display: "none" }}
                                >
                                    {" "}
                                    Registrieren{" "}
                                </button>
                                <button
                                    type="button"
                                    className="btn btn-warning advisor_reg"
                                    style={{}}
                                >
                                    {" "}
                                    Registrieren{" "}
                                </button>{" "}
                                &nbsp;{" "}
                                <a
                                    href="#"
                                    data-url="https://beraterstar.com/google/login"
                                    className="btn btn-primary google_registration"
                                    data-button={1}
                                >
                                    <i className="fa-brands fa-google" /> Sign in with Google
                                </a>
                                </div>
                            </div>
                            <div>
                                <a
                                className="btn btn-outline-secondary"
                                href="login"
                                role="button"
                                >
                                {" "}
                                Ich habe bereits einen Account{" "}
                                </a>
                            </div>
                            </div>
                        </div>
                        </div>
                    </form>
                    </div>
                    <div className="col-sm-4 mt-2">
                    <div className="card registration-right-div text-black">
                        <div className="card-body">
                        {/* <img src="https://beraterstar.com/img/neueslogo.png" class="card-img-top" alt="..."> */}
                        <h5 className="card-title">Die Nr. 1 Beratungsplattform</h5>
                        <p className="card-text">
                            Entdecke unabhängige Berater, Coaches und Experten für jeden
                            Bereich.
                        </p>
                        <div className="card-body">
                            <h5 className="card-title">Für jeden Nutzer</h5>
                            <ul className="list-group list-group-flush reg_div rounded">
                            <li className="list-group-item">
                                <i className="fa-solid fa-circle-check" /> Finde den richtig
                                Berater, Coach oder Experten{" "}
                            </li>
                            <li className="list-group-item">
                                <i className="fa-solid fa-circle-check" /> Lass dich unabhängig
                                beraten{" "}
                            </li>
                            <li className="list-group-item">
                                <i className="fa-solid fa-circle-check" /> Nehme an
                                Online-Events teil{" "}
                            </li>
                            </ul>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">Für Berater, Coaches und Experten</h5>
                            <ul className="list-group list-group-flush reg_div rounded">
                            <li className="list-group-item">
                                <i className="fa-solid fa-circle-check" /> Werde als Berater,
                                Coach und Experte besser wahrgenommen und erhalte mehr
                                Kundenanfragen{" "}
                            </li>
                            <li className="list-group-item">
                                <i className="fa-solid fa-circle-check" /> Erhalte echte
                                Kundenbewertungen für mehr Vertrauen{" "}
                            </li>
                            <li className="list-group-item">
                                <i className="fa-solid fa-circle-check" /> Automatisierung -
                                Buche direkt deine Termin, verwalte deine Events und Kunden{" "}
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default registration
