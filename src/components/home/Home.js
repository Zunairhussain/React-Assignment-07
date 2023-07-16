import img1 from "../img/home1-img.png"
import img2 from "../img/home2-img.png"
import img3 from "../img/home3-img.png"

function Home() {
    return (
      <section className="home container" id="home">
  <div className="swiper home-swiper">
    <div className="swiper-wrapper">
      {/* HOME SLIDER 1 */}
      <section className="swiper-slide">
        <div className="home__content grid">
          <div className="home__group">
            <img src={img1} alt="" className="home__img" />
            <div className="home__indicator" />
            <div className="home__details-img">
              <h4 className="home__details-title">The Labu “Reiza”</h4>
              <span className="home__details-subtitle">The Living Pumpkin</span>
            </div>
          </div>
          <div className="home__data">
            <h3 className="home__subtitle">#1 Top Scariest Ghost</h3>
            <h1 className="home__title">
              UOOOO <br /> TRICK OR <br /> TREAT!!
            </h1>
            <p className="home__description">
              Hi, I'm Reiza, people call me "El Labu". I am currently trying to
              learn something new, building my own bike with parts made only in
              Malaysia.
            </p>
            <div className="home__buttons">
              <a href="#" className="button">
                Book Now
              </a>
              <a href="#" className="button--link button--flex">
                Track Record{" "}
                <i className="bx bx-right-arrow-alt button__icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* HOME SLIDER 2 */}
      <section className="swiper-slide">
        <div className="home__content grid">
          <div className="home__group">
            <img src={img2} alt="" className="home__img" />
            <div className="home__indicator" />
            <div className="home__details-img">
              <h4 className="home__details-title">Adino &amp; Grahami</h4>
              <span className="home__details-subtitle">
                No words can describe them
              </span>
            </div>
          </div>
          <div className="home__data">
            <h3 className="home__subtitle">#2 top Best duo</h3>
            <h1 className="home__title">
              BRING BACK <br /> MY COTTON <br /> CANDY
            </h1>
            <p className="home__description">
              Adino steals cotton candy from his brother and eats them all in
              one bite, a hungry beast. Grahami can no longer contain his anger
              towards Adino.
            </p>
            <div className="home__buttons">
              <a href="#" className="button">
                Book Now
              </a>
              <a href="#" className="button--link button--flex">
                Track Record{" "}
                <i className="bx bx-right-arrow-alt button__icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* HOME SLIDER 3 */}
      <section className="swiper-slide">
        <div className="home__content grid">
          <div className="home__group">
            <img src={img3} alt="" className="home__img" />
            <div className="home__indicator" />
            <div className="home__details-img">
              <h4 className="home__details-title">Captain Sem</h4>
              <span className="home__details-subtitle">
                Veteran Spooky Ghost
              </span>
            </div>
          </div>
          <div className="home__data">
            <h3 className="home__subtitle">#3 Top Scariest Ghost</h3>
            <h1 className="home__title">
              RESPAWN <br /> THE SPOOKY <br /> SKULL
            </h1>
            <p className="home__description">
              In search for cute little puppy, Captain Sem has come back from
              his tragic death. With his hogwarts certified power he promise to
              be a hero for all of ghostkind.
            </p>
            <div className="home__buttons">
              <a href="#" className="button">
                Book Now
              </a>
              <a href="#" className="button--link button--flex">
                Track Record{" "}
                <i className="bx bx-right-arrow-alt button__icon" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div className="swiper-pagination" />
  </div>
</section>

    )
}
export default Home;