import { Banners, HomeContainer, NavLink, NewsLetter, ProductType, ShowMore, Trending } from "./styles";
import { LogoFacebook, LogoTwitter, LogoInstagram, LogoYoutube } from './styles'
import { Homeproduct } from "../../utils/home.product";
import { Product } from "./Product";
import { useEffect, useState } from "react";
import T1 from './../../assets/T1.avif';
import MultiBanner1 from './../../assets/Multi-Banner-1.avif';
import MultiBanner2 from './../../assets/Multi-banner-2.avif';
import MultiBanner3 from './../../assets/Multi-Banner-3.webp';
import MultiBanner4 from './../../assets/Multi-banner-4.avif';
import MultiBanner5 from './../../assets/Multi-Banner-5.webp';
import { AiFillEye, AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";

export function Home() {
  const [newProduct, setNewProduct] = useState<Array<{
    id: number;
    Name: string;
    price: string;
    image: string;
    cat: string;
    type: string;
  }>>([]);
  const [featuredProduct, setFeaturedProduct] = useState<Array<{
    id: number;
    Name: string;
    price: string;
    image: string;
    cat: string;
    type: string;
  }>>([]);
  const [topProduct, setTopProduct] = useState<Array<{
    id: number;
    Name: string;
    price: string;
    image: string;
    cat: string;
    type: string;
  }>>([]);

  const [trendingProduct, setTrendigProduct] = useState(Homeproduct)

  const filtercate = (item: string) => {
    const filterproduct = Homeproduct.filter((curElm) => {
      return curElm.type === item
    })
    setTrendigProduct(filterproduct)
  }

  const filtercateAll = (item: string) => {
    const filterproduct = Homeproduct.filter((curElm) => {
      return curElm.cat === item
    })
    setTrendigProduct(filterproduct)
  }

  useEffect(() => {
    productcategory()
  })

  // New Product
  const productcategory = () => {
    const newcategory = Homeproduct.filter((x) => {
      return x.type === 'new'
    })
    setNewProduct(newcategory)

    // Featured Product
    const featuredcategory = Homeproduct.filter((x) => {
      return x.type === 'featured'
    })
    setFeaturedProduct(featuredcategory)

    //Top Product
    const topcategory = Homeproduct.filter((x) => {
      return x.type === 'top'
    })
    setTopProduct(topcategory)
  }

  return (
    <HomeContainer>
      <div className="top_banner">
        <div className="contant">
          <h3>silver aluminum</h3>
          <h2>Apple Watch</h2>
          <p>30% off at your first odder</p>
          <NavLink to="/shop">Shop now</NavLink>
        </div>
      </div>
      <Trending className="trending">
        <div className="container">
          <div className="left_box">
            <div className="header">
              <div className="heading">
                <h2>trending product</h2>
              </div>
              <div className="cate">
                <h3 onClick={() => filtercateAll('')}>All</h3>
                <h3 onClick={() => filtercate('new')}>New</h3>
                <h3 onClick={() => filtercate('featured')}>Featured</h3>
                <h3 onClick={() => filtercate('top')}>top selling</h3>
              </div>
            </div>
            <Product trendingProduct={trendingProduct} />
            <ShowMore>Show more</ShowMore>
          </div>
          <div className="right_box">
            <div className="right_container">
              <div className="testimonial">
                <div className="head">
                  <h3>our testmonial</h3>
                </div>
                <div className="detail">
                  <div className="img_box">
                    <img src={T1} alt="img_box" />
                  </div>
                  <div className="info">
                    <h3>Stephan robot</h3>
                    <h4>web designer</h4>
                    <p>Duis faucibus enim vita nunc moles, lorem ipsiu oinlinda to onlineNavista</p>
                  </div>
                </div>
              </div>
              <NewsLetter>
                <div className="head">
                  <h3>newsletter</h3>
                </div>
                <div className="form">
                  <p>join our malling list</p>
                  <input
                    type="email"
                    placeholder="exemplo@gmail.com"
                    autoComplete="off"
                  />
                  <button>subscribe</button>
                  <div className="icon_box">
                    <div className="icon">
                      <LogoFacebook />
                    </div>
                    <div className="icon">
                      <LogoTwitter />
                    </div>
                    <div className="icon">
                      <LogoInstagram />
                    </div>
                    <div className="icon">
                      <LogoYoutube />
                    </div>
                  </div>
                </div>
              </NewsLetter>
            </div>
          </div>
        </div>
      </Trending>
      <Banners>
        <div className="banners_container">
          <div className="left_box">
            <div className="box">
              <img src={MultiBanner1} alt="banner1" />
            </div>
            <div className="box">
              <img src={MultiBanner2} alt="banner2" />
            </div>
          </div>
          <div className="right_box">
            <div className="top">
              <img src={MultiBanner3} alt="banner3" />
              <img src={MultiBanner4} alt="banner4" />
            </div>
            <div className="bottom">
              <img src={MultiBanner5} alt="banner5" />
            </div>
          </div>
        </div>
      </Banners>
      <ProductType>
        <div className="productype">
          <div className="box">
            <div className="header">
              <h2>New Product</h2>
            </div>
            {
              newProduct.map((curElm) => {
                return (
                  <>
                    <div className="product_box">
                      <div className="img_box">
                        <img src={curElm.image} />
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className="icon">
                          <button><AiFillEye/></button>
                          <button><AiFillHeart/></button>
                          <button><AiOutlineShoppingCart/></button>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
          <div className="box">
            <div className="header">
              <h2>Featured Product</h2>
            </div>
            {
              featuredProduct.map((curElm) => {
                return (
                  <>
                    <div className="product_box">
                      <div className="img_box">
                        <img src={curElm.image} />
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className="icon">
                          <button><AiFillEye/></button>
                          <button><AiFillHeart/></button>
                          <button><AiOutlineShoppingCart/></button>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
          <div className="box">
            <div className="header">
              <h2>Top Product</h2>
            </div>
            {
              topProduct.map((curElm) => {
                return (
                  <>
                    <div className="product_box">
                      <div className="img_box">
                        <img src={curElm.image} />
                      </div>
                      <div className="detail">
                        <h3>{curElm.Name}</h3>
                        <p>$ {curElm.price}</p>
                        <div className="icon">
                          <button><AiFillEye/></button>
                          <button><AiFillHeart/></button>
                          <button><AiOutlineShoppingCart/></button>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </div>
        </div>
      </ProductType>
    </HomeContainer>
  )
}
