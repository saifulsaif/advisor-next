import React from 'react'

function Hero() {
    return (
        <div>
            <section className="hero-banner-wrapper overflow-hidden">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="hero-b-content-wrap py-3 py-sm-5">
          <span className="text-white">
            FÜR MEHR FOKUS AUF DEIN KERNBUSINESS
          </span>
          <h1 className="text-white">
            {" "}
            Wir GEHEN ALL-IN- <br />
            <span className="text-active"> Die Plattform</span> für Berater
            &amp; Coaches{" "}
          </h1>
          <ul className="list-unstyled mt-3 mb-4">
            <li className="text-white">
              <i className="fa-solid fa-circle-check" /> Unabhängige
              verifizierte Top-Berater{" "}
            </li>
            <li className="text-white">
              <i className="fa-solid fa-circle-check" /> Nur verifizierte
              Bewertungen{" "}
            </li>
            <li className="text-white">
              <i className="fa-solid fa-circle-check" /> 100% digital und
              ortsunabhängig{" "}
            </li>
          </ul>
          <div className="hero-b-button-wrap d-flex gap-3">
            <a
              href="http://"
              className="primary-button d-flex align-items-center gap-2"
            >
              {" "}
              Mehr erfahren <i className="fa-solid fa-arrow-right" />
            </a>
            <a className="hero-video-btn" href="">
              <img
                src="https://beraterstar.com/assets/new-theme-assets/img/play-button.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </div>
    )
}

export default Hero
