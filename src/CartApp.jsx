import { useState } from "react"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"

const initialCartItems = [
    // {
    //     product: {},
    //     quantity: 0,
    //     total: 0
    // }
]

export const CartApp = () => {

    
    const [cartItems, setCartItems] = useState(initialCartItems);
    
    const handlerAddProductCart = (product)=>{

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {
            // setCartItems([
            //     ...cartItems.filter((i) => i.product.id !== product.id),
            //     {
            //         product,
            //         quantity: hasItem.quantity + 1,
            //     }
            // ])
            setCartItems(
                cartItems.map((i)=> {
                    if (i.product.id === product.id) {
                        i.quantity = i.quantity + 1;
                    }
                    return i;
                })
            )
        } else {

            setCartItems([...cartItems,
                 {
                    product,
                    quantity: 1,
                 }]);
        }

    }


    return (
        <>
            <div className="container">
                <h3>CartApp</h3>
                <CatalogView handler = {handlerAddProductCart}/>
                <div className="my-4 w-50">
                    <CartView items = { cartItems }/>
                </div>
            </div>
        </>
    )
}