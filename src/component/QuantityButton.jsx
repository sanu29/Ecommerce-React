import { useCartContext } from "../context/cart-context";

export const QuantityButton = (prod, key) => {

    const cartIndex = cart.findIndex((c) => c._id === prod._id);
    const {PostCart, DeleteCart , cart, UpdateQuantity } = useCartContext()
    return (
        <div
            className="d-flex-row justify-content-center align-items-center border-1 border-color-gray padding-none addtocart btn border-radius-sm">

            <button className="quantity-btn btn btn-primary margin-none w-100" onClick={(e) => {

                if (cart[cartIndex].qty > 1) {
                    UpdateQuantity(prod, 'decrement');
                }

                else {
                    DeleteCart(prod);
                }
            }}> - </button>
            <input type="text" value={cart[cartIndex].qty} className="quantity-input" disabled />
            <button className="quantity-btn btn btn-primary margin-none w-100"
                onClick={() => {
                    UpdateQuantity(prod, 'increment');
                }}> + </button>

        </div>
    );
};
