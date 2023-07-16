import img1 from "../img/new1-img.png"
import img2 from "../img/new3-img.png"


function ArrivalsCard() {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                <div className="swiper new-swiper">
      <div className="swiper-wrapper">
        <div className="new__content swiper-slide">
          <div className="new__tag">New</div>
          <img src={img1} alt="" className="new__img" />
          <h3 className="new__title">Haunted House</h3>
          <span className="new__subtitle">Accessory</span>
          <div className="new__prices">
            <span className="new__price">$14.99</span>
            <span className="new__discount">$29.99</span>
          </div>
          <button className="button new__button">
            <i className="bx bx-cart-alt new__icon" />
          </button>
        </div>
       </div>
       </div>    
                 </div>
                <div className="col-md-6"> <div className="swiper-wrapper">
        <div className="new__content swiper-slide">
          <div className="new__tag">New</div>
          <img src={img2} alt="" className="new__img" />
          <h3 className="new__title">Haunted House</h3>
          <span className="new__subtitle">Accessory</span>
          <div className="new__prices">
            <span className="new__price">$14.99</span>
            <span className="new__discount">$29.99</span>
          </div>
          <button className="button new__button">
            <i className="bx bx-cart-alt new__icon" />
          </button> </div>
        </div>
        </div>
        </div>
        </div>
    )
}
export default ArrivalsCard;