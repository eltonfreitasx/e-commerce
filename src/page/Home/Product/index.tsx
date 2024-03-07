import { useState } from "react";
import { ModalProduct, ProductContainer } from "./styles"
import { AiFillCloseCircle, AiFillEye, AiFillHeart } from "react-icons/ai"

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
    const [modal, setModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<number | null>(null)

    const [cart, setCart] = useState<ProductType[]>([])
    const [liked, setLiked] = useState<boolean>(false)

    function openModal(EyeProduct: number) {
        setSelectedProduct(EyeProduct);
        setModal(true)
    }

    function closeModal() {
        setSelectedProduct(null)
        setModal(false)
    }

    const handleClickLike = (obj: ProductType) => {
        const element = cart.find((e) => e.id === obj.id)
        if (element) {
            const arrFilter = cart.filter((e) => e.id != obj.id)
            setCart(arrFilter)
            setLiked(true)
        } else {
            setCart([...cart, obj])
            setLiked(false)
        }
    }



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
                                            <button onClick={() => openModal(curElm.id)} className="icon_box">
                                                <AiFillEye />
                                            </button>
                                            {
                                                cart.some((itemLike) => itemLike.id === curElm.id) ? (
                                                    <button 
                                                onClick={() => handleClickLike(curElm)} 
                                                className={liked ? "icon_box" : "icon_box_add"}>
                                                <AiFillHeart />
                                            </button>
                                                ): (
                                                    <button 
                                                onClick={() => handleClickLike(curElm)} 
                                                className="icon_box">
                                                <AiFillHeart />
                                            </button>
                                                )
                                            }
                                        </div>
                                    </div>
                                    <div className="info">
                                        <h3>{curElm.Name}</h3>
                                        <p>${curElm.price}</p>
                                        <button className="btn">Add to cart</button>
                                    </div>
                                </div>
                                {modal && selectedProduct === curElm.id && (
                                    <ModalProduct>
                                        <div>
                                            <div>
                                                <img src={curElm.image} alt={curElm.Name} />
                                            </div>
                                            <button onClick={() => closeModal()}>
                                                <AiFillCloseCircle />
                                            </button>
                                        </div>
                                    </ModalProduct>
                                )}
                            </>
                        )
                    })
                }
            </div>
        </ProductContainer>
    )
}
