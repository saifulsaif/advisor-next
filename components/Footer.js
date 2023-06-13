import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="footer-wrapper overflow-hidden bg-dark py-5">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="footer-top-wrap d-flex gap-3 flex-wrap justify-content-around align-items-center">
          <a
            className=" footer-item navbar-brand"
            href="https://beraterstar.com"
          >
            <img src="https://beraterstar.com/img/Logo.png" alt="" />
          </a>
          <div className=" footer-item single-f-box d-flex gap-2 align-items-center">
            <img
              src="https://beraterstar.com/assets/new-theme-assets/img/footer/call.png"
              alt=""
            />
            <div className="single-f-b-text">
              <h6 className="text-white">Telefonisch: </h6>
              <span className="text-white">+49 341 58193401</span>
            </div>
          </div>
          <div className=" footer-item single-f-box d-flex gap-2 align-items-center">
            <img
              src="https://beraterstar.com/assets/new-theme-assets/img/footer/Message.png"
              alt=""
            />
            <div className="single-f-b-text">
              <h6 className="text-white">E-Mail: </h6>
              <span className="text-white">kontakt@beraterstar.de</span>
            </div>
          </div>
          <div className=" footer-item single-f-box d-flex gap-2 align-items-center">
            <img
              src="https://beraterstar.com/assets/new-theme-assets/img/footer/location.png"
              alt=""
            />
            <div className="single-f-b-text">
              <h6 className="text-white">Standort: </h6>
              <span className="text-white">Leipzig </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-mid-wrap py-4 mt-5">
      <div className="row">
        <div className="col-xl-8 col-lg-7 col-md-6 col-sm-12 col-12">
          <div className="footer-mid-left d-flex justify-content-around gap-3 flex-wrap  mb-4 mb-sm-0">
            <div className="single-f-m-box">
              <h5 className="text-white">Plattform</h5>
              <ul className="mb-0 list-unstyled">
                <li>
                  <a className="text-decoration-none text-white" href="login">
                    Login
                  </a>
                </li>
                <li>
                  <a
                    className="text-decoration-none text-white"
                    href="register"
                  >
                    Registrieren
                  </a>
                </li>
                <li>
                  <a
                    className="text-decoration-none text-white"
                    href="https://beraterstar.com/preise"
                  >
                    Preise
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-white" href="#">
                    Magazine
                  </a>
                </li>
              </ul>
            </div>
            <div className="single-f-m-box">
              <h5 className="text-white">Über</h5>
              <ul className="mb-0 list-unstyled">
                <li>
                  <a
                    className="text-decoration-none text-white"
                    href="datenschutz"
                  >
                    Datenschutz
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-white" href="agb">
                    AGB
                  </a>
                </li>
                <li>
                  <a
                    className="text-decoration-none text-white"
                    href="impressum"
                  >
                    Impressum
                  </a>
                </li>
                <li>
                  <a className="text-decoration-none text-white" href="#">
                    Magazine
                  </a>
                </li>
              </ul>
            </div>
            <div className="single-f-m-box">
              <h5 className="text-white">Kontakt</h5>
              <ul className="mb-0 list-unstyled">
                <li>
                  <a
                    className="text-decoration-none text-white"
                    href="termin-buchen"
                  >
                    Beratungsgespräch vereinbaren
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12">
          <div className="footer-mid-right p-4">
            <h5 className="text-white">Newsletter abonnieren</h5>
            <span className="text-white">
              Alle Neuigkeiten zu Beraterstar sichern!
            </span>
            <div className="subscribe-from-wrap mt-4">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  id="subs_email"
                  placeholder="Gib deine E-Mail ein"
                  aria-label="Recipient's username"
                  aria-describedby="button-addon2"
                />
                <button
                  className="btn btn-outline-secondary px-2 submit_newsletter"
                  type="button"
                  id="subscribe_button"
                >
                  Jetzt sichern!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <hr className="white-hr mt-4" />
    <div className="footer-bottom-wrap d-flex gap-3 flex-wrap justify-content-between align-items-center">
      <p className="mb-0 text-white">
        Copyright <span className="text-primary-color">©beraterstar.de</span> |
        Designed by
        <a
          className="text-primary-color"
          href="https://www.digitale-neukunden.de"
        >
          Digitale-Neukunden.de
        </a>
      </p>
      <div className="footer-bottom-right-text d-flex align-items-center flex-wrap gap-3">
        <span className="text-white">Follow :</span>
        <ul className="social-list mb-0 list-unstyled d-flex gap-3">
          <ul className="social-list mb-0 list-unstyled d-flex gap-3">
            <li className="text-white">
              <a target="_blank" href="https://www.facebook.com/beraterstar">
                {" "}
                <i className="fa-brands fa-facebook  text-white" />{" "}
              </a>
            </li>
            <li className="text-white">
              <a target="_blank" href="https://www.instagram.com/beraterstar/">
                <i className="fa-brands fa-instagram text-white" />
              </a>
            </li>
            <li className="text-white">
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCbNrg77nmg_M0EzDzSrYnNg"
              >
                <i className="fa-brands fa-youtube text-white" />
              </a>
            </li>
          </ul>
        </ul>
      </div>
    </div>
  </div>
</footer>

        </div>
    )
}

export default Footer
