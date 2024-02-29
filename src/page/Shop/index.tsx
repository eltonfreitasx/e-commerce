import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { ContainerShop } from "./styles";
import image from './../../assets/shop_left.avif';
import image2 from './../../assets/shop_top.webp';
import { useState } from "react";
import { Homeproduct } from './../../utils/home.product';
import { AiFillEye, AiFillHeart } from "react-icons/ai";

export function Shop() {
  const [shop, setShop] = useState(Homeproduct);

  const Filter = (x: string) => {
    setShop(Homeproduct.filter((product) => {
      return product.cat === x;
    }));
  }

  const allCateFilter = () => {
    setShop(Homeproduct)
  }

  return (
    <>
      <Nav />
      <ContainerShop>
        <h2># shop</h2>
        <p>Home - shop</p>
        <div className="container">
          <div className="left_box">
            <div className="category">
              <div className="header">
                <h3>all categories</h3>
              </div>
              <div className="box">
                <ul>
                <li onClick={() => allCateFilter ()}># All</li>
                  <li onClick={() => Filter ("phone")}># phone</li>
                  <li onClick={() => Filter ("camera")}># camera</li>
                  <li onClick={() => Filter ("tv")}># tv</li>
                  <li onClick={() => Filter ("clock")}># clock</li>
                  <li onClick={() => Filter ("soundbox")}># soundbox</li>
                  <li onClick={() => Filter ("tablet")}># tablet</li>
                  <li onClick={() => Filter ("eletronics")}># eletronics</li>
                </ul>
              </div>
            </div>
            <div>
              <div className="banner">
                <div className="img_box">
                  <img src={image} alt="img_box" />
                </div>
              </div>
            </div>
          </div>
          <div className="right_box">
            <div className="banner">
              <div className="img_box">
                <img src={image2} alt="imgbox" />
              </div>
            </div>
            <div className="product_box_shop">
              <h2>Shop Product</h2>
              <div className="product_container">
                {shop.map((curElm) => {
                  return (
                    <div className="box">
                      <div className="img_box">
                        <img src={curElm.image} alt={curElm.Name} />
                        <div className="icon">
                            <li><AiFillHeart /></li>
                            <li><AiFillEye /></li>
                        </div>
                      </div>
                        <div className="detail">
                          <h3>{curElm.Name}</h3>
                          <p>$ {curElm.price}</p>
                          <button>Add to card</button>
                        </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </ContainerShop>
      <Footer />
    </>
  )
}
