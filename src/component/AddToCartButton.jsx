import { useCartContext } from "../context/cart-context";

export const AddToCartButton = (prod, key) => {
    const {PostCart, DeleteCart , cart, UpdateQuantity } = useCartContext()
    return (
        <div key={key} className="btn border-radius-sm btn-primary w-100 margin-none text-align-center addtocart w-100"
            onClick={() => {
                PostCart(prod);
            }}
        >
            Add to cart
        </div>
    );
};
