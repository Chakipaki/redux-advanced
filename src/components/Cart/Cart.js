import { useSelector } from "react-redux";

import classes from './Cart.module.css';

// Components
import Card from '../UI/Card';
import CartItem from './CartItem';

const Cart = (props) => {
    const cartItems = useSelector(state => state.cart.items);

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {cartItems.map(item => (
                    <CartItem
                        key={item.itemId}
                        item={{
                            id: item.itemId,
                            total: item.totalPrice,
                            quantity: item.quantity,
                            price: item.price,
                            title: item.title
                        }}
                    />
                ))}
            </ul>
        </Card>
    );
};

export default Cart;
