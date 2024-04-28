import {CartView} from "./components/CartView"
import { CatalogView } from "./components/CatalogView"


export const CartApp = () => {



    return (
        <>
            <div className="container">
                <h3>CartApp</h3>
                <CatalogView />
                <div className="my-4 w-50">
                    <CartView />
                </div>
            </div>
        </>
    )
}