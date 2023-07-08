import React from "react";
import Filter from "@/components/Filter";
import SideFilter from "@/components/SideFilter";

function page() {
  return (
    <>
      <section className="event-banner-wrapper overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-b-content-wrap py-3 py-sm-5">
                <span className="text-white">Startseite &gt; Events</span>
                <h1 className="text-white">
                  All <span className="text-active"> Online Events</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="advisor-list mt-3 mb-4">
        <div className="container">
          <main className="row justify-center">
            <div className="col-md-6">
              <div className="section-heading">
                <h1>Finde den richtigen Berater, Coach oder Experten</h1>
              </div>
            </div>
            <div className="col-md-6">
              <div className="section-sorting d-flex">
                <p className="w-50">Event Sorting</p>
                <select className="form-control w-50">
                  <option>Latest</option>
                  <option>Oldest</option>
                </select>
              </div>
            </div>

            <div className="col-md-3">
              <SideFilter />
            </div>
            <div className="col-md-9 card">
              <div className="p-3 mt-2 mb-2 border-2 rounded-3">
                <div className="row g-0">
                  <div className="single-advisor evnt-image-section col-md-6 col-lg-4 overflow-hidden">
                    <img
                      src="https://beraterstar.com/img/rund.jpg"
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
              <div className="p-3 mt-2 mb-2 border-2 rounded-3">
                <div className="row g-0">
                  <div className="single-advisor evnt-image-section col-md-6 col-lg-4 overflow-hidden">
                    <img
                      className="w-100 img-fluid rounded-start berater-image"
                      src="https://beraterstar.com/event_image/download.jpg"
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
                                    <b>New online event</b>
                                  </h5>
                                </div>
                                <div className="advistor-media w-50">
                                  <div className="advisor-links text-right d-flex flex-wrap gap-3">
                                    <a
                                      href="https://beraterstar.com/event/41"
                                      className="btn btn-warning px-4 py-2"
                                      type="button"
                                    >
                                      <i
                                        className="fa fa-calendar"
                                        aria-hidden="true"
                                      />{" "}
                                      2023-05-19
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
                            <i className="fa-solid fa-clock" /> Uhrzeit: 18:05
                            Uhr - 19:02 Uhr{" "}
                          </div>
                          <p>
                            Erstellt vor: <b>5 months ago</b>
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
                            href="https://beraterstar.com/berater-profile/41"
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
              <div className="pagination mt-3 justify-content-center" />
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default page;
