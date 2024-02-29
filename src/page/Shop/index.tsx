import { Footer } from "../../components/Footer";
import { Nav } from "../../components/Nav";
import { ContainerShop } from "./styles";
import image from './../../assets/shop_left.avif';
import image2 from './../../assets/shop_top.webp';
import { useState } from "react";
import { Homeproduct } from './../../utils/home.product';
import { AiFillEye, AiFillHeart } from "react-icons/ai";


export function Shop() {
  const [shop] = useState(Homeproduct);

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
                  <li># phone</li>
                  <li># camera</li>
                  <li># tv</li>
                  <li># clock</li>
                  <li># soundbox</li>
                  <li># tablet</li>
                  <li># eletronics</li>
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
                        <ul className="icon">
                            <li><AiFillHeart /></li>
                            <li><AiFillEye /></li>
                        </ul>
                      </div>
                        <div className="detail">
                          <h3>{curElm.Name}</h3>
                          <p>{curElm.price}</p>
                          <button>Add to card</button>
                          {/* 2:33:00 */}
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
