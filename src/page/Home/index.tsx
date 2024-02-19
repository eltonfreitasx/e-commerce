import { HomeContainer, NavLink, Trending } from "./styles";
import { Product } from "./Product";
import { Homeproduct } from "../../utils/home.product";
import { useState } from "react";

export function Home() {
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
          </div>
          <div className="right_box">
                 {/* asdsad    VIDEO 1:13:31 */}
          </div>
        </div>
      </Trending>
    </HomeContainer>
  )
}
