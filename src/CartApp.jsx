import { useEffect, useReducer, useState } from "react"
import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"
import { itemsReducer } from "./reducer/itemsReducer";

const initialCartItems = JSON.parse(sessionStorage.getItem('cart')) || [];

export const CartApp = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer, initialCartItems);

    const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id);
        if (hasItem) {

            dispatch(
                {
                    type: 'UpdateQuantityProductCart',
                    payload: product,
                }
            )
        } else {

            dispatch(
                {
                    type: 'AddProductCart',
                    payload: product,
                }
            )
        }

    }

    const handlerDeleteProductCart = (id) => {
        dispatch(
            {
                type: 'DeleteProductCart',
                payload: id,
            }
        )
    }


    return (
        <>
            <div className="container my-4">
                <h3>CartApp</h3>
                <CatalogView handler={handlerAddProductCart} />
                {cartItems?.length <= 0 || (

                    <div className="my-4 w-50">
                        <CartView handlerDelete={handlerDeleteProductCart} items={cartItems} />
                    </div>
                )}
            </div>
        </>
    )
}