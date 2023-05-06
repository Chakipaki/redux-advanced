import { useDispatch, useSelector } from "react-redux";

import classes from './CartButton.module.css';

// Store
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
    const totalCartQuantity = useSelector(state => state.cart.totalQuantity);
    const dispatch = useDispatch();

    const toggleCartVisible = (e) => {
        dispatch(uiActions.toggle());
    }

    return (
        <button className={classes.button} onClick={toggleCartVisible}>
            <span>My Cart</span>
            <span className={classes.badge}>{totalCartQuantity}</span>
        </button>
    );
};

export default CartButton;
