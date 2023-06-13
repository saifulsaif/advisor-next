import React from 'react'

function TopHeader() {
    return (
        <>
            <section className="top-header-wrapper position-relative py-2 py-sm-3 bg-dark">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="d-flex justify-content-between flex-wrap align-items-center">
          <div className="top-h-left-wrap d-flex align-items-center flex-wrap gap-2 gap-sm-3">
            <div className="top-single-info">
              <i className="fa-solid fa-envelope text-white" />
              <span className="text-white">kontakt@beraterstar.de</span>
            </div>
            <div className="top-single-info">
              <i className="fa-solid fa-location-dot text-white" />
              <span className="text-white">Leipzig - Deutschland </span>
            </div>
          </div>
          <div className="top-h-right-wrap d-flex align-items-center flex-wrap gap-3">
            <span className="text-white">Social-Media</span>
            <ul className="social-list mb-0 list-unstyled d-flex gap-3">
              <li className="text-white">
                <a target="_blank" href="https://www.facebook.com/beraterstar">
                  <i className="fa-brands fa-facebook  text-white" />{" "}
                </a>
              </li>
              <li className="text-white">
                <a
                  target="_blank"
                  href="https://www.instagram.com/beraterstar/"
                >
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
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        </>
    )
}

export default TopHeader
