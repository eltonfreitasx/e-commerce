import { createContext, ReactNode, useState } from "react";

interface ProductType {
    id: number;
    Name: string;
    type: string;
    image: string;
    price: string;
    newProduct?: [] 
}

interface ProductProps {
    trendingProduct: ProductType[];
}

interface ProductContextType {
    newProduct: ProductProps []
}

interface ProductProviderProps {
    children: ReactNode
}

export const ProductContext = createContext({} as ProductContextType)

export function ProductProvider({ children }: ProductProviderProps) {
    const [newProduct, setNewProduct] = useState<Array<{
        id: number;
        Name: string;
        price: string;
        image: string;
        cat: string;
        type: string;
      }>>([]);
    
    return (
        <ProductContext.Provider value={{newProduct, setNewProduct}}>
            {children}
        </ProductContext.Provider>
    )
}