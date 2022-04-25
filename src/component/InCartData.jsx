export function InCartData(cart, dispCart) {
    return <div className="" style={{display:dispCart}}>
        <div className="d-flex w-100 flex-wrap">
            <div className="comodities-cart card-cart w-100 bg-white border-raduis-md padding-16 border-radius-md d-flex-column justify-content-between align-items-center flex-wrap">
                <table className="w-100 bg-white  margin-none padding-none">
                    <tbody>
                    <tr className="table-row bg-white padding-none margin-none">
                        <th>Image</th>
                        <th>Item</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Total</th>
                    </tr>
                    {cart.map((item) => {
                        return (
                            <tr className="table-row" key={item._id}>
                                <td className="text-align-left"><img src={item.image} className="checkout-image" /></td>
                                <td className="text-align-left">{item.title}</td>
                                <td>{item.qty}</td>
                                <td>{item.price}</td>
                                <td>{item.qty * item.price}</td>
                            </tr>

                        );
                    })}

                    <tr className="total-row">
                        <td></td>
                        <td className="font-weight-bold total-data">
                            Grand Total
                        </td>

                        <td className="font-weight-bold total-data"></td>
                        <td></td>
                        <td className="font-weight-bold total-data">
                            {cart.reduce((acc, item) => {
                                return acc + (item.qty * item.price);
                            }, 0)}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>;
}
