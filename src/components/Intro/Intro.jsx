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
                Vive cada día como si fueran vacaciones <span className="light-300">En Lomas de Angelópolis</span>
              </h2>
              <p>
              Lomas de Angelópolis es un proyecto urbanístico de clase mundial, ubicado en la ciudad de Puebla, sobresale por su arquitectura innovadora, excelente diseño vial y su modernidad, cuanta con equipamientos y servicios como:
              </p>
            </div>
          </div>
        </div>
              <div className="row align-items-center">
              <div>
                <div><span className="material-symbols-outlined">school</span> Escuelas </div>
                <div><span className="material-symbols-outlined">local_mall</span> Centros comerciales </div>
                <div><span className="material-symbols-outlined">medication</span> Hospitales </div>
                <div><span className="material-symbols-outlined">work</span> Corporativos </div>
                <div><span className="material-symbols-outlined">bedroom_parent</span> Hoteles </div>
                <div><span className="material-symbols-outlined">nature</span> 30 parques </div>
                <div><span className="material-symbols-outlined">forest</span> 100 hectáreas de áreas verdes </div>
                <div><span className="material-symbols-outlined">pedal_bike</span> 17 km de ciclopista </div>
                <div><span className="material-symbols-outlined">sports_soccer</span> 30 canchas deportivas </div>
                <div><span className="material-symbols-outlined">brush</span>Espacios artísticos</div>
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
