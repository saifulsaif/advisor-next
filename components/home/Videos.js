import React from "react";

function Videos() {
  return (
    <div>
      <section className="video-wrapper overflow-hidden pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-12">
              <div className="video-cw-left">
                <iframe
                  width="100%"
                  height={400}
                  src="https://www.youtube.com/embed/wkkFduYHQlQ"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                />
              </div>
            </div>
            <div className="col-md-4 col-sm-6 col-12">
              <div className="video-cw-right">
                <iframe
                  width="100%"
                  height={200}
                  src="https://www.youtube.com/embed/r0NmS1SSqtk"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                />
                <iframe
                  width="100%"
                  height={200}
                  src="https://www.youtube.com/embed/NaXdabDunbA"
                  title="YouTube video player"
                  frameBorder={0}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Videos;
