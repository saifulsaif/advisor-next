import React from "react";

function Blogs() {
  return (
    <div>
      <section className="customer-wrapper overflow-hidden pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-heading">
                <h2>Mehr Neukunden-Anfragen</h2>
                <p>
                  Als Berater, Coach oder Experte zu mehr neuen Kundenanfragen
                </p>
              </div>
            </div>
          </div>
          <div className="section-content mt-4">
            <div className="row">
              <div className="col-xl-4 col-md-4 col-sm-6 col-12">
                <div className="single-people-box shadow-lg">
                  <div className="single-p-b-img">
                    <img
                      className="w-100"
                      src="https://beraterstar.com/assets/new-theme-assets/img/customer/1.png"
                      alt=""
                    />
                  </div>
                  <div className="single-p-b-text p-3">
                    <h5>Mehr Vertrauen durch echte Kundenbewertungen</h5>
                    <p>
                      {" "}
                      Unser intelligentes Bewertungssystem hilft dir mit wenig
                      Zeitaufwand, noch mehr Kundenbewertungen zu erhalten.{" "}
                    </p>
                    <div className="single-p-b-link w-100">
                      <a
                        href="https://beraterstar.com/kundenbewertungen"
                        className="primary-button w-100 d-block text-center"
                      >
                        {" "}
                        Mehr erfahren{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 col-sm-6 col-12">
                <div className="single-people-box shadow-lg">
                  <div className="single-p-b-img">
                    <img
                      className="w-100"
                      src="https://beraterstar.com/assets/new-theme-assets/img/customer/2.png"
                      alt=""
                    />
                  </div>
                  <div className="single-p-b-text p-3">
                    <h5>Profitiere durch den Netzwerk-Effekt</h5>
                    <p>
                      Komme mit gleichgesinnten Beratern, Coaches und Experten
                      in Kontakt und profitiere durch Weiterempfehlungen.{" "}
                    </p>
                    <div className="single-p-b-link w-100">
                      <a
                        href="https://beraterstar.com/netzwerk"
                        className="primary-button w-100 d-block text-center"
                      >
                        {" "}
                        Mehr erfahren{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-md-4 col-sm-6 col-12">
                <div className="single-people-box shadow-lg">
                  <div className="single-p-b-img">
                    <img
                      className="w-100"
                      src="https://beraterstar.com/assets/new-theme-assets/img/customer/3.png"
                      alt=""
                    />
                  </div>
                  <div className="single-p-b-text p-3">
                    <h5> Verbessere dein Suchmaschinen-Ranking </h5>
                    <p>
                      {" "}
                      Werde besser gefunden und sichtbar. <br /> Jedes Berater,
                      Coach und Experten-Profil ist Suchmaschinen-optimiert und
                      kann dir noch mehr Kundenanfragen bringen.{" "}
                    </p>
                    <div className="single-p-b-link w-100">
                      <a
                        href="https://beraterstar.com/seo-optimiert"
                        className="primary-button w-100 d-block text-center"
                      >
                        {" "}
                        Mehr erfahren{" "}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Blogs;
