import img1 from "../img/logo.png"
import img2 from "../img/footer1-img.png"
import img3 from "../img/footer2-img.png"


function Footer() {
    return(
        <footer className="footer section">
  <div className="footer__container container grid">
    <div className="footer__content">
      <a href="#" className="footer__logo">
        <img src={img1} alt="" className="footer__logo-img" />
        Halloween
      </a>
      <p className="footer__description">
        Enjoy the scariest night <br /> of your life.
      </p>
      <div className="footer__social">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="footer__social-link"
        >
          <i className="bx bxl-facebook" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          className="footer__social-link"
        >
          <i className="bx bxl-instagram-alt" />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          className="footer__social-link"
        >
          <i className="bx bxl-twitter" />
        </a>
      </div>
    </div>
    <div className="footer__content">
      <h3 className="footer__title">About</h3>
      <ul className="footer__links">
        <li>
          <a href="#" className="footer__link">
            About Us
          </a>
        </li>
        <li>
          <a href="#" className="footer__link">
            Features
          </a>
        </li>
        <li>
          <a href="#" className="footer__link">
            News
          </a>
        </li>
      </ul>
    </div>
    <div className="footer__content">
      <h3 className="footer__title">Our Services</h3>
      <ul className="footer__links">
        <li>
          <a href="#" className="footer__link">
            Pricing
          </a>
        </li>
        <li>
          <a href="#" className="footer__link">
            Discounts
          </a>
        </li>
        <li>
          <a href="#" className="footer__link">
            Shipping mode
          </a>
        </li>
      </ul>
    </div>
    <div className="footer__content">
      <h3 className="footer__title">Our Company</h3>
      <ul className="footer__links">
        <li>
          <a href="#" className="footer__link">
            Blog
          </a>
        </li>
        <li>
          <a href="#" className="footer__link">
            About us
          </a>
        </li>
        <li>
          <a href="#" className="footer__link">
            Our mision
          </a>
        </li>
      </ul>
    </div>
  </div>
  <span className="footer__copy">In this regard © All rigths reserved by M.Zunair HUssain Developer</span>
  <img src={img2} alt="" className="footer__img-one" />
  <img src={img3} alt="" className="footer__img-two" />
</footer>

    )
}
export default Footer;