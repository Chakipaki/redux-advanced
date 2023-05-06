import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";

// Store
import { fetchCartData, sendCartData } from "./store/cart-actions";

function App() {
    const dispatch = useDispatch();
    const isCartVisible = useSelector(state => state.ui.isCartVisible);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {
        dispatch(fetchCartData());
    }, []);

    useEffect(() => {
        if (!cart.changed) {
            return;
        }

        dispatch(sendCartData(cart));
    }, [cart, dispatch]);

    return (
        <Fragment>
            {notification && <Notification {...notification} />}

            <Layout>
                {isCartVisible && <Cart/>}
                <Products/>
            </Layout>
        </Fragment>
    );
}

export default App;
