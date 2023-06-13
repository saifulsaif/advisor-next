import Filter from "@/components/Filter";
import React from "react";

function page() {
  return (
    <>
      <section className="advisor-banner-wrapper overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-b-content-wrap py-3 py-sm-5">
                <span className="text-white">Startseite &gt; Berater</span>
                <h1 className="text-white">
                  {" "}
                  Alle <span className="text-active"> Berater </span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Filter />
      <section className="advisor-list">
        <div className="container">
          <main className="row justify-center">
            <div className="col-md-12 card">
              <div className="p-3 mb-2 border-2 rounded-3">
                <div className="row g-0">
                  <div className="single-advisor evnt-image-section col-md-6 col-lg-4 overflow-hidden">
                    <img
                      src="https://beraterstar.com/storage/profile_img/eric-benzing_full_1598976689-1679780474.jpg"
                      className="w-100 img-fluid rounded-start"
                      alt=""
                    />
                    <div className="date">
                      <label className="event-past active-danger-label">
                        {" "}
                        Vergangen{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-8 advisor-details">
                    <div className="card-body px-sm-3 pt-sm-0 pt-3 p-0">
                      <div className="d-block">
                        <div>
                          <div className="advisor-title">
                            <div className="advisor-name">
                              <div
                                className="advisor-title"
                                style={{ display: "flex" }}
                              >
                                <div
                                  className="advisor-name"
                                  style={{ width: "50%" }}
                                >
                                  <h5 className="card-title">
                                    <b>Demo Event</b>
                                  </h5>
                                </div>
                                <div className="advistor-media w-50">
                                  <div className="advisor-links text-right d-flex flex-wrap gap-3">
                                    <a
                                      href="https://beraterstar.com/event/47"
                                      className="btn btn-warning px-4 py-2"
                                      type="button"
                                    >
                                      <i
                                        className="fa fa-calendar"
                                        aria-hidden="true"
                                      />{" "}
                                      2023-03-19
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="card-text text-dark">
                            {" "}
                            Category : <b />
                          </p>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="card-body py-0 mb-2">
                            <i className="fa-solid fa-clock" /> Uhrzeit: 14:12
                            Uhr - 15:14 Uhr{" "}
                          </div>
                          <p>
                            Erstellt vor: <b>2 months ago</b>
                          </p>
                        </div>
                        <div className="advisor-offer">
                          <p className="card-text">
                            {" "}
                            Lorem ipsum dolor sit amet consectetur. Nisl ac
                            montes mattis lorem vitae facilisi. Viverra nec
                            eleifend pharetra habitasse sapien aliquet non Lorem
                            ipsum dolor sit amet consectetur. Nisl ac montes
                            mattis lorem vitae facilisi. Viverra nec eleifend
                            pharetra habitasse sapien aliquet non Lorem ipsum
                            dolor...
                          </p>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-lg-start">
                          <a
                            href="https://beraterstar.com/berater-profile/47"
                            className="event-links btn btn-outline-warning px-4 py-2"
                            type="button"
                          >
                            {" "}
                            Details &nbsp;
                            <i
                              className="fa fa-angle-right"
                              aria-hidden="true"
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr className="p-0 m-0" />
              <div className="p-3 mb-2 border-2 rounded-3">
                <div className="row g-0">
                  <div className="single-advisor evnt-image-section col-md-6 col-lg-4 overflow-hidden">
                    <img
                      className="w-100 img-fluid rounded-start berater-image"
                      src="https://beraterstar.com/storage/profile_img/_M7A6237[133]%20-%20Kopie-1683104022.JPG"
                      alt=""
                    />
                    <div className="date">
                      <label className="event-past active-danger-label">
                        {" "}
                        Vergangen{" "}
                      </label>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-8 advisor-details">
                  <div className="card-body px-sm-3 pt-sm-0 pt-3 p-0">
  <div className="d-block">
    <div>
      <div className="advisor-title">
        <div className="advisor-name">
          <div className="advisor-title" style={{ display: "flex" }}>
            <div className="advisor-name" style={{ width: "50%" }}>
              <h5 className="card-title">
                <b>Eric Benzing</b>
              </h5>
            </div>
            <div className="advistor-media w-50">
              {/* <div class="advisor-links text-right d-flex flex-wrap gap-3">
                                                      <span class="text-dark">Folge uns :</span>
                                                      <ul class="social-list mb-0 list-unstyled d-flex gap-2">
                                                          <li><a target="_blank"
                                                                  href="berater-profile/ebenzing?url="><i
                                                                      class=" text-dark fa-brands fa-facebook"></i></a>
                                                          </li>
                                                          <li><a target="_blank"
                                                                  href="berater-profile/ebenzing?url=https://www.linkedin.com/in/eric-benzing-ihr-photovoltaiktechniker-731a75135/"><i
                                                                      class=" text-dark fa-brands fa-linkedin"></i></a>
                                                          </li>
                                                          <li><a target="_blank"
                                                                  href="berater-profile/ebenzing?url="><i
                                                                      class=" text-dark fa-brands fa-instagram"></i></a>
                                                          </li>
                                                                                                                      </ul>
                                                  </div> */}
            </div>
          </div>
        </div>
      </div>
      <p className="card-text text-dark">
        <b>Energieberatung</b>
      </p>
    </div>
    <div className="d-flex align-items-center">
      <span className="me-2 fs-3">5.0</span>
      <div className="d-flex align-items-center">
        <div className="text-warning d-inline-flex">
          <ul className="mb-0 list-unstyled d-flex gap-1">
            <li className="text-warning">
              <i className="fa-solid fa-star" />
            </li>
            <li className="text-warning">
              <i className="fa-solid fa-star" />
            </li>
            <li className="text-warning">
              <i className="fa-solid fa-star" />
            </li>
            <li className="text-warning">
              <i className="fa-solid fa-star" />
            </li>
            <li className="text-warning">
              <i className="fa-solid fa-star" />
            </li>
          </ul>
        </div>
        <span className="ms-1">(1 Bewertungen)</span>
      </div>
    </div>
    <div className="advisor-offer" />
  </div>
  <div className="d-grid gap-2 d-md-flex justify-content-lg-end">
    <a
      href="https://beraterstar.com/berater-profile/ebenzing"
      className="btn btn-warning px-4 py-2"
      type="button"
    >
      <i className="fa-solid fa-id-badge" /> Zum Beraterprofil{" "}
    </a>
  </div>
</div>

                  </div>
                </div>
              </div>
              <hr className="p-0 m-0" />
              <div className="pagination mt-3 justify-content-center" />
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default page;
