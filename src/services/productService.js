import { Products } from "../data/products"

export const getProducts = () => {
    return Products;
}

export const calculateTotal = (items) => {
    return items.reduce((accumulator, item) => accumulator + item.product.price * item.quantity
    , 0);
}