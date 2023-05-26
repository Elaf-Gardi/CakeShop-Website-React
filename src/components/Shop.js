import React from "react";
import "./shop.css";
import img1 from "../img/iced-tea-cupcake.jpg";
import img2 from "../img/chicken-donuts.jpg";
import img3 from "../img/monsters-macarons.jpg";
import img4 from "../img/chocolate-and-orange-vanilla-cake.jpg";
import img5 from "../img/frozen-coconut-coffee.jpg";
import img6 from "../img/ice-cream-cats.jpg";
import img7 from "../img/lemon-roll-cake.jpg";
import img8 from "../img/peach-strawberry-juice.jpg";
import img9 from "../img/strawberry-cake.jpg";
import img10 from "../img/vanilla-croissant.jpg";
import img11 from "../img/carrots-macarons.jpg";

export default function Shop() {
  return (
    <section className="shop">
      <div className="sales-content">
        <h2>BEST SELLERS</h2>
        <h5>This week customer's choice's</h5>
      </div>
      <div className="imgs-container">
        <div className="img-box">
          <img src={img1} alt="iced tea cupcake" />
          <p>iced tea cupcake</p>
          <p>1.75&#x24;</p>
          <a>buy</a>
        </div>
        <div className="img-box">
          <img src={img2} alt="chicken donuts" />
          <p>chicken donuts</p>
          <p>3.50&#x24;</p>
          <a>buy</a>
        </div>
        <div className="img-box">
          <img src={img3} alt="monsters macarons" />
          <p>monsters macarons</p>
          <p>2.75&#x24;</p>
          <a>buy</a>
        </div>
      </div>
      {/**********************************************************************/}
      {/**********************************************************************/}
      <div className="container">
        <h3>ALL MENU</h3>
        <hr className="h"></hr>
        <div className="me-container">
          <div className="menu-container">
            <div className="img-box">
              <img src={img4} alt="chocolate-and-orange-vanilla-cake" />
              <p>chocolate & orange vanilla cake</p>
              <p>15.75&#x24;</p>
              <a>buy</a>
            </div>
            <div className="img-box">
              <img src={img5} alt="frozen-coconut-coffee" />
              <p>frozen coconut coffee</p>
              <p>7.50&#x24;</p>
              <a>buy</a>
            </div>
            <div className="img-box">
              <img src={img6} alt="ice-cream-cats" />
              <p>ice cream cats</p>
              <p>2.75&#x24;</p>
              <a>buy</a>
            </div>
            <div className="img-box">
              <img src={img7} alt="lemon-roll-cake" />
              <p>lemon roll cake</p>
              <p>9.25&#x24;</p>
              <a>buy</a>
            </div>
            <div className="img-box">
              <img src={img8} alt="peach-strawberry-juice" />
              <p>peach strawberry juice</p>
              <p>5.75&#x24;</p>
              <a>buy</a>
            </div>
            <div className="img-box">
              <img src={img9} alt="strawberry-cake" />
              <p>strawberry cake</p>
              <p>12.75&#x24;</p>
              <a>buy</a>
            </div>
            <div className="img-box">
              <img src={img10} alt="vanilla-croissant" />
              <p>vanilla croissant</p>
              <p>6.50&#x24;</p>
              <a>buy</a>
            </div>
            <div className="img-box">
              <img src={img11} alt="carrots-macarons" />
              <p>carrots macarons</p>
              <p>3.75&#x24;</p>
              <a>buy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
