import img1 from "../img/discount-img.png"


function Discount() {
    return(
        <section className="section discount">
  <div className="discount__container container grid">
    <div className="discount__data">
      <h2 className="discount__title">
        50% Discount <br /> On New Products
      </h2>
      <a href="#" className="button">
        Go to new
      </a>
    </div>
    <img src={img1} alt="" className="discount__img" />
  </div>
</section>

    )
}
export default Discount;