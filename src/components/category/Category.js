import img1 from "../img/category1-img.png"
import img2 from "../img/category2-img.png"
import img3 from "../img/category3-img.png"


function Category() {
    return(
        <section className="section category">
  <h2 className="section__title">
    Favorite Scare <br /> Category
  </h2>
  <div className="category__container container grid">
    <div className="category__data">
      <img
        src={img1}
        alt=""
        className="category__img"
      />
      <h3 className="category__title">Ghosts</h3>
      <p className="category__description">
        Choose the ghosts, the scariest there are.
      </p>
    </div>
    <div className="category__data">
      <img
        src={img2}
        alt=""
        className="category__img"
      />
      <h3 className="category__title">Pumpkins</h3>
      <p className="category__description">
        You look at the scariest pumpkins there is.
      </p>
    </div>
    <div className="category__data">
      <img
        src={img3}
        alt=""
        className="category__img"
      />
      <h3 className="category__title">Witch Hat</h3>
      <p className="category__description">
        Pick the most stylish witch hats out there.
      </p>
    </div>
  </div>
</section>

    )
}
export default Category;