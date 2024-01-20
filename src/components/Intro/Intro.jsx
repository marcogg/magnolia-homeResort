const Intro = () => {
  return (
    <>
      <div>
  {/* about section */}
  <section className="about_section layout_padding">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <div className="detail-box">
            <div className="heading_container">
              <h2>
                About Studio
              </h2>
              <p>
                It is a long established fact that a reader will be distracted by the readable content of a page
              </p>
              <a href>
                Read More
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="img-box">
      <div className="play_btn">
        <a href="#">
          <img src="images/play.png" alt />
        </a>
      </div>
      <img src="images/about-img.png" className="about-img" alt />
    </div>
  </section>
  {/* end about section */}
  {/* gallery section */}
  <section className="gallery_section layout_padding-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-5 ml-auto">
          <div className="heading_container">
            <h2>
              Our Gallery
            </h2>
            <p>
              It is a long established fact that a reader will be distracted by the readable content of a page
            </p>
            <a href>
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="gallery_container">
      <div className="gallery_bg">
        <img src="images/gallery-bg.png" alt />
      </div>
      <div className="container">
        <div className="gallery_box">
          <div className="box b1">
            <div className="img-box">
              <img src="images/gallery-1.jpg" alt />
              <h5>
                photography
              </h5>
            </div>
          </div>
          <div className="box b2">
            <div className="img-box">
              <img src="images/gallery-2.jpg" alt />
              <h5>
                photography
              </h5>
            </div>
            <div className="img-box">
              <img src="images/gallery-3.jpg" alt />
              <h5>
                photography
              </h5>
            </div>
          </div>
          <div className="box b3">
            <div className="img-box">
              <img src="images/gallery-4.jpg" alt />
              <h5>
                photography
              </h5>
            </div>
            <div className="img-box">
              <img src="images/gallery-5.jpg" alt />
              <h5>
                photography
              </h5>
            </div>
          </div>
          <div className="box b4">
            <div className="img-box">
              <img src="images/gallery-6.jpg" alt />
              <h5>
                photography
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* end gallery section */}
</div>


    </>
  )
}

export default Intro
