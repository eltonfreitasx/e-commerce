import { ProductContainer } from "./styles"
import { AiFillEye, AiFillHeart } from "react-icons/ai"

interface ProductType {
    id: number;
    Name: string;
    type: string;
    image: string;
    price: string;
  }

 interface ProductProps {
    trendingProduct: ProductType[]; 
  }

export function Product({ trendingProduct }: ProductProps) {

    return (
        <ProductContainer className="products">
            <div className="container_product">
                {
                    trendingProduct.map((curElm) => {
                        return (
                            <>
                                <div className="box">
                                    <div className="img_box">
                                        <img src={curElm.image} alt="img" />
                                        <div className="icon">
                                            <div className="icon_box">
                                                <AiFillEye />
                                            </div>
                                            <div className="icon_box">
                                                <AiFillHeart />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="info">
                                        <h3>{curElm.Name}</h3>
                                        <p>${curElm.price}</p>
                                        <button className="btn">Add to cart</button>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </ProductContainer>
    )
}
