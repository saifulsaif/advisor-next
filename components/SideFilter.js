import React from "react";

function SideFilter() {
  return (
    <div>
      <section className="search-wrapper overflow-hidden mb-2">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-content search-content-wrap">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <button
                      className="event-filter bg-warning text-dark border-0"
                      id="nav-consultants-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#nav-consultants"
                      type="button"
                      role="tab"
                      aria-controls="nav-consultants"
                      aria-selected="false"
                    >
                      Event finden
                    </button>
                  </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                  <div
                    className="tab-pane fade show active"
                    id="nav-consultants"
                    role="tabpanel"
                    aria-labelledby="nav-consultants-tab"
                    tabIndex={0}
                  >
                    <div className="nav-consultants-wrap p-4 shadow">
                      <form
                        className="w-100"
                        action="https://beraterstar.com/filter-berater"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          defaultValue="3nfZT79uTHO8fhTY9Tlq5NqrKidslSG4EaOdNIko"
                        />{" "}
                        <div className=" flex-wrap gap-2">
                          <div className="">
                            <label
                              htmlFor=""
                              className="form-label d-flex gap-2 align-items-center text-dark"
                            >
                              <img
                                src="https://beraterstar.com/assets/new-theme-assets/img/icon/1.png"
                                alt=""
                              />{" "}
                              Berater{" "}
                            </label>
                            <input
                              id="advisor_filter_key"
                              name="name"
                              className="form-control p-2"
                              type="text"
                              placeholder="Berater Name"
                            />
                          </div>
                          <div className="">
                            <label
                              htmlFor=""
                              className="form-label d-flex gap-2 align-items-center text-dark"
                            >
                              <img
                                src="https://beraterstar.com/assets/new-theme-assets/img/icon/2.png"
                                alt=""
                              />{" "}
                              Branche auswählen{" "}
                            </label>
                            <select
                              name="specialist"
                              className="form-control p-2"
                            >
                              <option value={0}> Branche auswählen </option>
                              <option value={25}> Baufinanzierung </option>
                              <option value={1}> Beziehungsberatung </option>
                              <option value={24}> Buchexperte </option>
                              <option value={22}> Closer </option>
                              <option value={2}> Coaching </option>
                              <option value={26}> Crypto </option>
                              <option value={3}> E-Commerce-Agentur </option>
                              <option value={4}> Energieberatung </option>
                              <option value={21}> Ernährungsberatung </option>
                              <option value={5}> Finanzberatung </option>
                              <option value={6}> Fitnesstraining </option>
                              <option value={7}> Fotografie-Agentur </option>
                              <option value={20}> Hypnose </option>
                              <option value={8}> Immobilienvermittlung </option>
                              <option value={9}> Karriereberatung </option>
                              <option value={10}> Marketingagentur </option>
                              <option value={11}> Marketingberatung </option>
                              <option value={12}> Meditation </option>
                              <option value={13}> PR-Beratung </option>
                              <option value={14}> Rechtsberatung </option>
                              <option value={15}> Social-Media-Agentur </option>
                              <option value={16}> Steuerberatung </option>
                              <option value={17}> Unternehmensberatung </option>
                              <option value={23}> Verkaufstraining </option>
                              <option value={18}>
                                {" "}
                                Versicherungsberatung{" "}
                              </option>
                              <option value={19}>
                                {" "}
                                Video-Produktionsagentur{" "}
                              </option>
                            </select>
                          </div>
                          <div className="">
                            <label
                              htmlFor=""
                              className="form-label d-flex gap-2 align-items-center text-dark"
                            >
                              <img
                                src="https://beraterstar.com/assets/new-theme-assets/img/icon/3.png"
                                alt=""
                              />{" "}
                              Stadt{" "}
                            </label>
                            <select
                              id="city-filter"
                              className="form-control p-2 select2-hidden-accessible"
                              name="city"
                              tabIndex={-1}
                              aria-hidden="true"
                            />
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              style={{ width: "242.109px" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-labelledby="select2-city-filter-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-city-filter-container"
                                  >
                                    <span className="select2-selection__placeholder">
                                      Stadt auswählen
                                    </span>
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div className="">
                            <label
                              htmlFor=""
                              className="form-label d-flex gap-2 align-items-center text-dark"
                            >
                              <img
                                src="https://beraterstar.com/assets/new-theme-assets/img/icon/4.png"
                                alt=""
                              />{" "}
                              Postleizahl{" "}
                            </label>
                            <input
                              type="text"
                              min={1}
                              id="postcode"
                              name="post_code"
                              className="form-control p-2"
                              placeholder="Postleizahl"
                            />
                          </div>
                          <div className="">
                            <label
                              htmlFor=""
                              className="form-label d-flex gap-2 align-items-center text-dark"
                            >
                              <img
                                src="https://beraterstar.com/assets/new-theme-assets/img/icon/5.png"
                                alt=""
                              />{" "}
                              Bundesland{" "}
                            </label>
                            <select
                              id="state-filter"
                              className="form-control p-2 select2-hidden-accessible"
                              name="state"
                              tabIndex={-1}
                              aria-hidden="true"
                            />
                            <span
                              className="select2 select2-container select2-container--default"
                              dir="ltr"
                              style={{ width: "242.109px" }}
                            >
                              <span className="selection">
                                <span
                                  className="select2-selection select2-selection--single"
                                  role="combobox"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                  tabIndex={0}
                                  aria-labelledby="select2-state-filter-container"
                                >
                                  <span
                                    className="select2-selection__rendered"
                                    id="select2-state-filter-container"
                                  >
                                    <span className="select2-selection__placeholder">
                                      Bundesland auswählen
                                    </span>
                                  </span>
                                  <span
                                    className="select2-selection__arrow"
                                    role="presentation"
                                  >
                                    <b role="presentation" />
                                  </span>
                                </span>
                              </span>
                              <span
                                className="dropdown-wrapper"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between flex-wrap mt-3">
                          <div className="">
                            <button
                              type="submit"
                              className="primary-button d-block w-100"
                            >
                              <i className="fa-solid fa-magnifying-glass" />{" "}
                              Suchen{" "}
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="nav-event"
                    role="tabpanel"
                    aria-labelledby="nav-event-tab"
                    tabIndex={0}
                  >
                    <div className="nav-consultants-wrap p-4 shadow">
                      <form
                        className="w-100"
                        action="https://beraterstar.com/filter-events"
                        method="post"
                      >
                        <input
                          type="hidden"
                          name="_token"
                          defaultValue="3nfZT79uTHO8fhTY9Tlq5NqrKidslSG4EaOdNIko"
                        />{" "}
                        <div className="d-flex flex-wrap gap-2">
                          <div className="-event">
                            <label
                              htmlFor=""
                              className="form-label d-flex gap-3 align-items-center text-dark"
                            >
                              <img
                                src="https://beraterstar.com/assets/new-theme-assets/img/icon/1.png"
                                alt=""
                              />{" "}
                              Event Name{" "}
                            </label>
                            <input
                              id="filter_key"
                              name="name"
                              className="form-control p-2"
                              type="text"
                              placeholder="Event Name"
                            />
                          </div>
                          <div className="-event">
                            <label
                              htmlFor=""
                              className="form-label d-flex gap-2 align-items-center text-dark"
                            >
                              <img
                                src="https://beraterstar.com/assets/new-theme-assets/img/icon/2.png"
                                alt=""
                              />{" "}
                              Industry{" "}
                            </label>
                            <select
                              name="specialist"
                              className="form-control p-2"
                            >
                              <option value={0}> Branche auswählen </option>
                              <option value={25}> Baufinanzierung </option>
                              <option value={1}> Beziehungsberatung </option>
                              <option value={24}> Buchexperte </option>
                              <option value={22}> Closer </option>
                              <option value={2}> Coaching </option>
                              <option value={26}> Crypto </option>
                              <option value={3}> E-Commerce-Agentur </option>
                              <option value={4}> Energieberatung </option>
                              <option value={21}> Ernährungsberatung </option>
                              <option value={5}> Finanzberatung </option>
                              <option value={6}> Fitnesstraining </option>
                              <option value={7}> Fotografie-Agentur </option>
                              <option value={20}> Hypnose </option>
                              <option value={8}> Immobilienvermittlung </option>
                              <option value={9}> Karriereberatung </option>
                              <option value={10}> Marketingagentur </option>
                              <option value={11}> Marketingberatung </option>
                              <option value={12}> Meditation </option>
                              <option value={13}> PR-Beratung </option>
                              <option value={14}> Rechtsberatung </option>
                              <option value={15}> Social-Media-Agentur </option>
                              <option value={16}> Steuerberatung </option>
                              <option value={17}> Unternehmensberatung </option>
                              <option value={23}> Verkaufstraining </option>
                              <option value={18}>
                                {" "}
                                Versicherungsberatung{" "}
                              </option>
                              <option value={19}>
                                {" "}
                                Video-Produktionsagentur{" "}
                              </option>
                            </select>
                          </div>
                          <div className="-event">
                            <label
                              htmlFor=""
                              className="form-label d-flex gap-2 align-items-center text-dark"
                            >
                              <img
                                src="https://beraterstar.com/assets/new-theme-assets/img/icon/3.png"
                                alt=""
                              />{" "}
                              Period{" "}
                            </label>
                            <select
                              name="duration"
                              id="event_period_id"
                              className="form-control p-2"
                            >
                              <option value="all"> Alle</option>
                              <option value="today"> Heute</option>
                              <option value="week"> Diese Woche</option>
                              <option value="next_week"> Nächste Woche</option>
                              <option value="month"> Diesen Monat</option>
                              <option value="next_month">
                                {" "}
                                Nächsten Monat
                              </option>
                            </select>
                          </div>
                          <div className="-event">
                            <label
                              htmlFor=""
                              className="form-label d-flex gap-2 align-items-center text-dark"
                            >
                              <img
                                src="https://beraterstar.com/assets/new-theme-assets/img/icon/4.png"
                                alt=""
                              />{" "}
                              Previous / Next{" "}
                            </label>
                            <select
                              name="type"
                              id="event_period_id"
                              className="form-control p-2"
                            >
                              <option value="all">Alle </option>
                              <option value="upcoming">Bevorstehend </option>
                              <option value="passed">Vergangen </option>
                            </select>
                          </div>
                        </div>
                        <div className="d-flex justify-content-between flex-wrap mt-3">
                          <div className="">
                            <button
                              type="submit"
                              className="primary-button d-block w-100"
                            >
                              <i className="fa-solid fa-magnifying-glass" />{" "}
                              Search{" "}
                            </button>
                          </div>
                        </div>
                      </form>
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

export default SideFilter;
