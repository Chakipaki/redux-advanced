import classes from './CartButton.module.css';
import { useDispatch } from "react-redux";

// Store
import { uiActions } from "../../store/ui-slice";

const CartButton = (props) => {
    const dispatch = useDispatch();

    const toggleCartVisible = (e) => {
        dispatch(uiActions.toggle());
    }

    return (
        <button className={classes.button} onClick={toggleCartVisible}>
            <span>My Cart</span>
            <span className={classes.badge}>1</span>
        </button>
    );
};

export default CartButton;
