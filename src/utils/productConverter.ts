import { IProduct } from "../models/apiModels";
import { ICartProduct } from "../store/slices/CartSlice";

function productConverter(product: IProduct, props?: Object): ICartProduct {
    const cartProduct: ICartProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        color: product.color[0],
        size: product.size[0],
        available: product.available,
        category: product.category,
        brand: product.brand,
        img_url: product.img_url
    }
    
    return cartProduct
}

export default productConverter