import React from "react";

function Services() {
  return (
    <div>
      <section className="service-column-wrapper overflow-hidden bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <div className="single-service-c-wrap position-relative d-flex gap-3 mb-3 mb-sm-0 align-items-center justify-content-sm-start justify-content-center">
                <img
                  src="https://beraterstar.com/assets/new-theme-assets/img/icon/free-user.svg"
                  alt=""
                />
                <h5 className="text-white mb-0">Kostenlos für alle Nutzer</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="single-service-c-wrap position-relative d-flex gap-3 mb-3 mb-sm-0 align-items-center justify-content-sm-start justify-content-center">
                <img
                  src="https://beraterstar.com/assets/new-theme-assets/img/icon/win-flag.png"
                  alt=""
                />
                <h5 className="text-white mb-0">Finde unabhängige Berater</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="single-service-c-wrap position-relative d-flex gap-3 mb-3 mb-sm-0 align-items-center justify-content-sm-start justify-content-center">
                <img
                  src="https://beraterstar.com/assets/new-theme-assets/img/icon/verified.png"
                  alt=""
                />
                <h5 className="text-white mb-0">Nur verfizierte Bewertungen</h5>
              </div>
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <div className="single-service-c-wrap position-relative d-flex gap-3 mb-3 mb-sm-0 align-items-center justify-content-sm-start justify-content-center">
                <img
                  src="https://beraterstar.com/assets/new-theme-assets/img/icon/verified.png"
                  alt=""
                />
                <h5 className="text-white mb-0">
                  Weltweit digital beraten lassen
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
