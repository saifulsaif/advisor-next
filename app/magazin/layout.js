export default function MagazinLayout({children}) {
  return (
    <section>
      <section className="magazin-banner-wrapper overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="hero-b-content-wrap py-3 py-sm-5">
                <span className="text-white">Startseite &gt; Magazin</span>
                <h1 className="text-white">
                  {" "}
                  Online <span className="text-active"> Magazin</span>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="advisor-list mt-3 mb-3">
        <div className="container">
          <main className="row justify-center">
            <div className="col-md-3 col-ms-12">
              <div className="card p-3">
                <div id="wrapper">
                  <div className="mtt_catagory">
                    <img
                      src="https://beraterstar.com/img/magazin/logo-magazin.png"
                      style={{
                        width: "100%",
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,
                      }}
                    />
                  </div>
                  <div className="mt-4 mb-5 sidebar-filter">
                    <h4>Sortieren nach:</h4>
                    <form
                      className="mb-5"
                      action="https://beraterstar.com/magazin/filter"
                      method="GET"
                    >
                      <input
                        name="filter_key"
                        className="form-control"
                        type="text"
                        placeholder="Durchsuchen..."
                      />
                      <div className="submit-area mb-3">
                        <button type="submit" className="mt-2 btn btn-warning">
                          <i className="fa-solid fa-magnifying-glass" /> Filter
                        </button>
                      </div>
                    </form>
                  </div>
                  <ul className="menu mt-5 mb-5" style={{ marginTop: 3 }}>
                    <li className="item6">
                      <a href="#">
                        <img src="https://beraterstar.com/img/magazin/news.png" />
                        <span className="ttl"> News </span>
                        <span className="ttl_arrow"> &gt;</span>
                      </a>
                      <ul style={{ display: "none" }}>
                        <li className="subitem1">
                          <a className="fs-5 fw-bold" href="#">
                            {" "}
                            Beraterstar
                          </a>
                        </li>
                        <li className="subitem1">
                          <a
                            className="ms-3"
                            href="https://beraterstar.com/magazin/filter?news=tutorials"
                          >
                            {" "}
                            Tutorials
                          </a>
                        </li>
                        <li className="subitem1">
                          <a
                            className="ms-3"
                            href="https://beraterstar.com/magazin/filter?news=updates"
                          >
                            {" "}
                            Updates
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="item7">
                      <a href="#">
                        <img src="https://beraterstar.com/img/magazin/advisor.png" />
                        <span className="ttl"> Berater </span>
                        <span className="ttl_arrow"> &gt;</span>
                      </a>
                      <ul style={{ display: "none" }}>
                        <li className="subitem1">
                          <a href="https://beraterstar.com/magazin/filter?consultant=2">
                            {" "}
                            Coaching <span>1</span>
                          </a>
                        </li>
                        <li className="subitem1">
                          <a href="https://beraterstar.com/magazin/filter?consultant=26">
                            {" "}
                            Crypto <span>1</span>
                          </a>
                        </li>
                        <li className="subitem1">
                          <a href="https://beraterstar.com/magazin/filter?consultant=21">
                            {" "}
                            Ernährungsberatung <span>1</span>
                          </a>
                        </li>
                        <li className="subitem1">
                          <a href="https://beraterstar.com/magazin/filter?consultant=7">
                            {" "}
                            Fotografie-Agentur <span>1</span>
                          </a>
                        </li>
                        <li className="subitem1">
                          <a href="https://beraterstar.com/magazin/filter?consultant=20">
                            {" "}
                            Hypnose <span>1</span>
                          </a>
                        </li>
                        <li className="subitem1">
                          <a href="https://beraterstar.com/magazin/filter?consultant=13">
                            {" "}
                            PR-Beratung <span>1</span>
                          </a>
                        </li>
                        <li className="subitem1">
                          <a href="https://beraterstar.com/magazin/filter?consultant=17">
                            {" "}
                            Unternehmensberatung <span>1</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="item8">
                      <a href="#">
                        <img src="https://beraterstar.com/img/magazin/themen.png" />
                        <span className="ttl"> Themen </span>
                        <span className="ttl_arrow"> &gt;</span>
                      </a>
                      <ul style={{ display: "none" }} />
                    </li>
                  </ul>
                </div>
                <div className="footer-mid-right p-2">
                  <h5 className="text-white">Jetzt sichern!</h5>
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
                        className="btn btn-outline-secondary text-dark px-2 submit_newsletter"
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
            {children}
          </main>
        </div>
      </section>
    </section>
  );
}
