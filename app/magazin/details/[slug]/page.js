import React from "react";

function details({ params }) {
  return (
    <>
      <div className="col-md-9 col-ms-12 card">
        <div className="p-2 border-2 rounded-3">
          <div className="post-detail-page">
            <div className="post-meta">
              {/* <p>Veröffentlicht am <span
                              class="publish-date">20.05.2023</span>
                      </p> */}
              <p>
                Branche: <span className="category-name">{params.slug}</span>
              </p>
            </div>
            <div className="single-magazin w-100">
              <img
                className="w-100"
                src="https://beraterstar.com/megazine/titelbild-magazin-1684578847.jpg"
                alt="Post Image"
              />
              <div className="post">
                <label className="post-date text-dark active-success-label">
                  {" "}
                  Veröffentlicht: 20.05.2023{" "}
                </label>
              </div>
            </div>
            <div className="social-section d-flex">
              <div className="title w-75">
                <h4 className="card-title">
                  <b>
                    Sebastian Billand - Maximale Freiheit mit Kryptowährungen
                  </b>
                </h4>
              </div>
              <div id="social-links" className="text-right w-25">
                <ul className="mt-1 text-right">
                  <li>
                    <a
                      href="https://www.facebook.com/sharer/sharer.php?u=https://beraterstar.com/magazin/berater/sebastian-billand-maximale-freiheit-mit-kryptowahrungen"
                      className="social-button"
                      id=""
                      title=""
                      rel=""
                    >
                      <i className="fa-brands fa-facebook-square" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/sharing/share-offsite?mini=true&url=https://beraterstar.com/magazin/berater/sebastian-billand-maximale-freiheit-mit-kryptowahrungen&title=Sebastian+Billand+-+Maximale+Freiheit+mit+Kryptow%C3%A4hrungen&summary="
                      className="social-button"
                      id=""
                      title=""
                      rel=""
                    >
                      <i className="fa-brands fa-linkedin" />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://wa.me/?text=https://beraterstar.com/magazin/berater/sebastian-billand-maximale-freiheit-mit-kryptowahrungen"
                      className="social-button"
                      id=""
                      title=""
                      rel=""
                    >
                      <i className="fa-brands fa-whatsapp-square" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="short-description py-3">
              <p
                dir="ltr"
                style={{
                  lineHeight: "1.38",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <span
                  style={{
                    fontSize: "14pt",
                    fontFamily: "Arial",
                    color: "rgb(0, 0, 0)",
                    backgroundColor: "transparent",
                    fontWeight: 700,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Freiheit und passives Einkommen durch Kryptowährungen
                </span>
              </p>
              <p>
                <span id="docs-internal-guid-cc66761e-7fff-7029-8089-80bcb0246824">
                  <br />
                </span>
              </p>
              <p
                dir="ltr"
                style={{
                  lineHeight: "1.38",
                  marginTop: "0pt",
                  marginBottom: "0pt",
                }}
              >
                <span
                  style={{
                    fontSize: "14pt",
                    fontFamily: "Arial",
                    color: "rgb(0, 0, 0)",
                    backgroundColor: "transparent",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    textDecoration: "none",
                    verticalAlign: "baseline",
                    whiteSpace: "pre-wrap",
                  }}
                >
                  Sebastian Billand ist ein Kryptoinvestor und Coach, der sich
                  im Bereich der Kryptowährungen einen Namen gemacht hat. Mit
                  seiner Expertise und seinen Erfolgen hat er sich nicht nur
                  eine beeindruckende Position auf dem Kryptomarkt erarbeitet,
                  sondern unterstützt mittlerweile auch andere dabei, ähnliche
                  Erfolge zu erzielen.
                </span>
              </p>
            </div>
            <div className="post-content mt-3 magazin-post-image">
              <h4>
                Mehr über <b>Sebastian Billand</b>
              </h4>
              <div className="img3" style={{ float: "left", paddingRight: 15 }}>
                <a
                  target="_blank"
                  href="https://beraterstar.com/berater-profile/kryptohirn"
                >
                  <img
                    className="img3"
                    src="/storage/profile_img/photo_2023-02-24 10.35.45-1684430880.jpeg"
                    alt="Smiley Face"
                  />
                </a>
                <div>
                  <div className="user_section mt-2">
                    <a
                      target="_blank"
                      href="https://beraterstar.com/berater-profile/kryptohirn"
                    />
                    <div className="user_name">
                      <a
                        target="_blank"
                        href="https://beraterstar.com/berater-profile/kryptohirn"
                      >
                        <b>Sebastian Billand</b>
                      </a>
                    </div>
                    <div className="rating text-center">
                      <span className="text-warning fa-lg d-block text-center">
                        <span className="fa-stack" style={{ width: "1em" }} />
                        <span className="fa-stack" style={{ width: "1em" }} />
                        <span className="fa-stack" style={{ width: "1em" }} />
                        <span className="fa-stack" style={{ width: "1em" }} />
                        <span className="fa-stack" style={{ width: "1em" }} />
                      </span>
                      <span className="d-block text-center">
                        {" "}
                        0.0 ( 0 Bewertungen){" "}
                      </span>
                    </div>
                  </div>
                  <a
                    target="_blank"
                    className="text-decoration-none"
                    href="https://www.kryptohirn.de"
                  >
                    <span>
                      <i className="fa-solid fa-globe" />
                      <b>&nbsp; www.kryptohirn.de</b>
                    </span>
                  </a>
                </div>
              </div>
              <div className="post-details">
                <p
                  dir="ltr"
                  style={{
                    marginTop: "0pt",
                    marginBottom: "0pt",
                    lineHeight: "1.38",
                  }}
                >
                  <span
                    style={{
                      backgroundColor: "transparent",
                      color: "rgb(0, 0, 0)",
                      fontFamily: "Arial",
                      fontSize: "14pt",
                      fontWeight: 700,
                      textAlign: "var(--bs-body-text-align)",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    Das Interview auf unserem Youtube - Kanal von Beraterstar:
                  </span>
                  <br />
                </p>
                <p
                  dir="ltr"
                  style={{
                    marginTop: "0pt",
                    marginBottom: "0pt",
                    lineHeight: "1.38",
                  }}
                >
                  <span id="docs-internal-guid-4421b7a3-7fff-aa4b-3a65-2ef1f197cd7b">
                    <a
                      href="https://www.youtube.com/watch?v=rbd2zMDwsRw&t=3s"
                      target="_blank"
                      style={{ textDecorationLine: "none" }}
                    >
                      <span
                        style={{
                          fontSize: "14pt",
                          fontFamily: "Arial",
                          color: "rgb(255, 255, 255)",
                          backgroundColor: "rgb(32, 18, 77)",
                          fontWeight: 700,
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        Klicke hier, um das Video auf Youtube anzusehen
                      </span>
                    </a>
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    marginTop: "0pt",
                    marginBottom: "0pt",
                    lineHeight: "1.38",
                  }}
                >
                  <span id="docs-internal-guid-4421b7a3-7fff-aa4b-3a65-2ef1f197cd7b">
                    <a
                      href="https://www.youtube.com/watch?v=rbd2zMDwsRw&t=3s"
                      target="_blank"
                      style={{ textDecorationLine: "none" }}
                    >
                      <span
                        style={{
                          fontSize: "14pt",
                          fontFamily: "Arial",
                          color: "rgb(255, 255, 255)",
                          backgroundColor: "rgb(32, 18, 77)",
                          fontWeight: 700,
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        <br />
                      </span>
                    </a>
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    marginTop: "0pt",
                    marginBottom: "0pt",
                    lineHeight: "1.38",
                  }}
                >
                  <iframe
                    frameBorder={0}
                    src="//www.youtube.com/embed/rbd2zMDwsRw?start=3"
                    width={640}
                    height={360}
                    className="note-video-clip"
                  />
                  <span id="docs-internal-guid-4421b7a3-7fff-aa4b-3a65-2ef1f197cd7b">
                    <a
                      href="https://www.youtube.com/watch?v=rbd2zMDwsRw&t=3s"
                      target="_blank"
                      style={{ textDecorationLine: "none" }}
                    >
                      <span
                        style={{
                          fontSize: "14pt",
                          fontFamily: "Arial",
                          color: "rgb(255, 255, 255)",
                          backgroundColor: "rgb(32, 18, 77)",
                          fontWeight: 700,
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        <br />
                      </span>
                    </a>
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    marginTop: "0pt",
                    marginBottom: "0pt",
                    lineHeight: "1.38",
                  }}
                >
                  <span id="docs-internal-guid-4421b7a3-7fff-aa4b-3a65-2ef1f197cd7b">
                    <a
                      href="https://www.youtube.com/watch?v=rbd2zMDwsRw&t=3s"
                      target="_blank"
                      style={{ textDecorationLine: "none" }}
                    >
                      <span
                        style={{
                          fontSize: "14pt",
                          fontFamily: "Arial",
                          color: "rgb(255, 255, 255)",
                          backgroundColor: "rgb(32, 18, 77)",
                          fontWeight: 700,
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        <br />
                      </span>
                    </a>
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    marginTop: "0pt",
                    marginBottom: "0pt",
                    lineHeight: "1.38",
                  }}
                >
                  <span id="docs-internal-guid-4421b7a3-7fff-aa4b-3a65-2ef1f197cd7b">
                    <a
                      href="https://www.youtube.com/watch?v=rbd2zMDwsRw&t=3s"
                      target="_blank"
                      style={{ textDecorationLine: "none" }}
                    >
                      <span
                        style={{
                          fontSize: "14pt",
                          fontFamily: "Arial",
                          color: "rgb(255, 255, 255)",
                          backgroundColor: "rgb(32, 18, 77)",
                          fontWeight: 700,
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        <br />
                      </span>
                    </a>
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    lineHeight: "1.38",
                    marginTop: "0pt",
                    marginBottom: "0pt",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14pt",
                      fontFamily: "Arial",
                      color: "rgb(0, 0, 0)",
                      backgroundColor: "transparent",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontVariant: "normal",
                      textDecoration: "none",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    Sebastian Billand ist ein absoluter Krypto-Enthusiast und
                    leidenschaftlicher Verfechter der Blockchain-Technologie.
                    Seit 2016 taucht er tief in die Welt der Kryptowährungen ein
                    und hat erkannt, welches unglaubliche Potenzial in diesem
                    aufregenden Markt steckt. Nun ist es seine Mission, anderen
                    dabei zu helfen, sich in diesem Bereich weiterzubilden und
                    erfolgreich zu sein.
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    marginTop: "0pt",
                    marginBottom: "0pt",
                    lineHeight: "1.38",
                  }}
                >
                  <span id="docs-internal-guid-4421b7a3-7fff-aa4b-3a65-2ef1f197cd7b">
                    <a
                      href="https://www.youtube.com/watch?v=rbd2zMDwsRw&t=3s"
                      target="_blank"
                      style={{ textDecorationLine: "none" }}
                    >
                      <span
                        style={{
                          fontSize: "14pt",
                          fontFamily: "Arial",
                          color: "rgb(255, 255, 255)",
                          backgroundColor: "rgb(32, 18, 77)",
                          fontWeight: 700,
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        <b
                          id="docs-internal-guid-7a83b6c0-7fff-d218-7e50-6e9675ce22a6"
                          style={{ fontWeight: "normal" }}
                        >
                          <br />
                        </b>
                      </span>
                    </a>
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    lineHeight: "1.38",
                    marginTop: "0pt",
                    marginBottom: "0pt",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14pt",
                      fontFamily: "Arial",
                      color: "rgb(0, 0, 0)",
                      backgroundColor: "transparent",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontVariant: "normal",
                      textDecoration: "none",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    Sebastian bietet eine individuelle 1-zu-1-Ausbildung an, bei
                    der er seine umfassenden Kenntnisse und praktischen
                    Erfahrungen mit seinen Kunden teilt. Dabei geht es nicht nur
                    um das Erlernen technischer Konzepte, sondern auch um die
                    Entwicklung einer klugen Investmentstrategie und die
                    Identifizierung von vielversprechenden Chancen in der
                    Krypto-Welt.
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    marginTop: "0pt",
                    marginBottom: "0pt",
                    lineHeight: "1.38",
                  }}
                >
                  <span>
                    <a
                      href="https://www.youtube.com/watch?v=rbd2zMDwsRw&t=3s"
                      target="_blank"
                      style={{ textDecorationLine: "none" }}
                    >
                      <span
                        style={{
                          fontSize: "14pt",
                          fontFamily: "Arial",
                          color: "rgb(255, 255, 255)",
                          backgroundColor: "rgb(32, 18, 77)",
                          fontWeight: 700,
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        <b style={{ fontWeight: "normal" }}>
                          <br />
                        </b>
                      </span>
                    </a>
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    lineHeight: "1.38",
                    marginTop: "0pt",
                    marginBottom: "0pt",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14pt",
                      fontFamily: "Arial",
                      color: "rgb(0, 0, 0)",
                      backgroundColor: "transparent",
                      fontWeight: 700,
                      fontStyle: "normal",
                      fontVariant: "normal",
                      textDecoration: "none",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    Sebastian Billands umfassender 25-Stunden-Videokurs
                    "Masterplan - Krypto".
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    marginTop: "0pt",
                    marginBottom: "0pt",
                    lineHeight: "1.38",
                  }}
                >
                  <span>
                    <a
                      href="https://www.youtube.com/watch?v=rbd2zMDwsRw&t=3s"
                      target="_blank"
                      style={{ textDecorationLine: "none" }}
                    >
                      <span
                        style={{
                          fontSize: "14pt",
                          fontFamily: "Arial",
                          color: "rgb(255, 255, 255)",
                          backgroundColor: "rgb(32, 18, 77)",
                          fontWeight: 700,
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        <b style={{ fontWeight: "normal" }}>
                          <br />
                        </b>
                      </span>
                    </a>
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    lineHeight: "1.38",
                    marginTop: "0pt",
                    marginBottom: "0pt",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14pt",
                      fontFamily: "Arial",
                      color: "rgb(0, 0, 0)",
                      backgroundColor: "transparent",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontVariant: "normal",
                      textDecoration: "none",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    Sebastian Billand hat sein umfassendes Wissen und seine
                    Expertise in einem bahnbrechenden Videokurs mit einer
                    Gesamtspielzeit von 25 Stunden gebündelt. In diesem Kurs
                    werden die wichtigsten Informationen zur
                    Blockchain-Technologie und den verschiedenen Kryptowährungen
                    zusammengefasst.
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    marginTop: "0pt",
                    marginBottom: "0pt",
                    lineHeight: "1.38",
                  }}
                >
                  <span>
                    <a
                      href="https://www.youtube.com/watch?v=rbd2zMDwsRw&t=3s"
                      target="_blank"
                      style={{ textDecorationLine: "none" }}
                    >
                      <span
                        style={{
                          fontSize: "14pt",
                          fontFamily: "Arial",
                          color: "rgb(255, 255, 255)",
                          backgroundColor: "rgb(32, 18, 77)",
                          fontWeight: 700,
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        <b style={{ fontWeight: "normal" }}>
                          <br />
                        </b>
                      </span>
                    </a>
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    lineHeight: "1.38",
                    marginTop: "0pt",
                    marginBottom: "0pt",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14pt",
                      fontFamily: "Arial",
                      color: "rgb(0, 0, 0)",
                      backgroundColor: "transparent",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontVariant: "normal",
                      textDecoration: "none",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    Der Videokurs von Sebastian ist das Ergebnis von intensiver
                    Forschung, persönlichen Erfahrungen und einem tiefgreifenden
                    Verständnis für den Kryptomarkt. Er hat sich zum Ziel
                    gesetzt, seinen Schülern alle wesentlichen Kenntnisse und
                    Strategien zu vermitteln, die sie benötigen, um in der Welt
                    der Kryptowährungen erfolgreich zu sein.
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    marginTop: "0pt",
                    marginBottom: "0pt",
                    lineHeight: "1.38",
                  }}
                >
                  <span>
                    <a
                      href="https://www.youtube.com/watch?v=rbd2zMDwsRw&t=3s"
                      target="_blank"
                      style={{ textDecorationLine: "none" }}
                    >
                      <span
                        style={{
                          fontSize: "14pt",
                          fontFamily: "Arial",
                          color: "rgb(255, 255, 255)",
                          backgroundColor: "rgb(32, 18, 77)",
                          fontWeight: 700,
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        <b style={{ fontWeight: "normal" }}>
                          <br />
                        </b>
                      </span>
                    </a>
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    lineHeight: "1.38",
                    marginTop: "0pt",
                    marginBottom: "0pt",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14pt",
                      fontFamily: "Arial",
                      color: "rgb(0, 0, 0)",
                      backgroundColor: "transparent",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontVariant: "normal",
                      textDecoration: "none",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    Der Kurs deckt eine breite Palette von Themen ab, darunter
                    die Grundlagen der Blockchain, die Funktionsweise
                    verschiedener Kryptowährungen, sichere Wallets und die
                    besten Investmentstrategien. Sebastian präsentiert die
                    Informationen auf eine klare und verständliche Weise und
                    bietet praktische Beispiele und Tipps, um das Gelernte in
                    die Praxis umzusetzen.
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    marginTop: "0pt",
                    marginBottom: "0pt",
                    lineHeight: "1.38",
                  }}
                >
                  <span>
                    <a
                      href="https://www.youtube.com/watch?v=rbd2zMDwsRw&t=3s"
                      target="_blank"
                      style={{ textDecorationLine: "none" }}
                    >
                      <span
                        style={{
                          fontSize: "14pt",
                          fontFamily: "Arial",
                          color: "rgb(255, 255, 255)",
                          backgroundColor: "rgb(32, 18, 77)",
                          fontWeight: 700,
                          fontVariantNumeric: "normal",
                          fontVariantEastAsian: "normal",
                          verticalAlign: "baseline",
                          whiteSpace: "pre-wrap",
                        }}
                      >
                        <span style={{ fontWeight: "normal" }}>
                          <br />
                        </span>
                      </span>
                    </a>
                  </span>
                </p>
                <p
                  dir="ltr"
                  style={{
                    lineHeight: "1.38",
                    marginTop: "0pt",
                    marginBottom: "0pt",
                  }}
                >
                  <span
                    style={{
                      fontSize: "14pt",
                      fontFamily: "Arial",
                      color: "rgb(0, 0, 0)",
                      backgroundColor: "transparent",
                      fontWeight: 400,
                      fontStyle: "normal",
                      fontVariant: "normal",
                      textDecoration: "none",
                      verticalAlign: "baseline",
                      whiteSpace: "pre-wrap",
                    }}
                  >
                    Mit diesem umfangreichen Videokurs bietet Sebastian Billand
                    seinen Schülern eine einzigartige Gelegenheit, ihr Wissen zu
                    erweitern und sich selbstbewusst in der Welt der
                    Kryptowährungen zu bewegen. Der Kurs ist ideal für Anfänger,
                    die eine solide Grundlage aufbauen möchten, aber auch für
                    Fortgeschrittene, die ihre Kenntnisse vertiefen und ihre
                    Investmentstrategien optimieren wollen.
                  </span>
                </p>
              </div>
              <hr />
            </div>
            <div className="">
              <h4>Impressum: </h4>
              <address className="map-adress fs-5">
                <strong />
                <strong>Kryptohirn</strong>
                <br />
                Baden-Württemberg, Werastrasse 91 <br />
                <br />
                70190 Stuttgart <br />
              </address>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default details;
