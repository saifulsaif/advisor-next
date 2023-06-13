import React from "react";

function Subscribe() {
  return (
    <div>
      <section className="subscribe-wrapper overflow-hidden mb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="subscribe-content-wrap flex-wrap">
                <h4 className="mb-0 mt-4">
                  <b>Sichere dir jetzt den Newsletter!</b>
                </h4>
                <div className="subscribe-from-wrap mt-4">
                  <div className="input-group">
                    <input
                      type="text"
                      id="subs_email"
                      className="form-control"
                      placeholder="Gib deine E-Mail ein"
                      aria-label="Recipient's username"
                      aria-describedby="button-addon2"
                    />
                    <button
                      className="btn btn-outline-secondary px-4 submit_newsletter"
                      type="button"
                      id="subscribe_button"
                    >
                      Jetzt sichern{" "}
                    </button>
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

export default Subscribe;
