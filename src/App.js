import { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from "./components/UI/Notification";

// Store
import { sendCartData } from "./store/cart-slice";

let initial = true;

function App() {
    const dispatch = useDispatch();
    const isCartVisible = useSelector(state => state.ui.isCartVisible);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {
        if (initial) {
            initial = false;
            return;
        }

        dispatch(sendCartData(cart));
    }, [cart]);

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
