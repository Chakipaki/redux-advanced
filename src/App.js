import {Fragment, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";

// Components
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

// Store
import { uiActions } from "./store/ui-slice";
import Notification from "./components/UI/Notification";

let initial = true;

function App() {
    const dispatch = useDispatch();
    const isCartVisible = useSelector(state => state.ui.isCartVisible);
    const cart = useSelector(state => state.cart);
    const notification = useSelector(state => state.ui.notification);

    useEffect(() => {
        const putCart = async () => {
            dispatch(uiActions.showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data'
            }));

            const response = await fetch('https://react-http-1-a181a-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify(cart)
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed!');
            }

            const data = response.json();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success',
                message: 'Sent cart data successfully'
            }));
        }

        if (initial) {
            initial = false;
            return;
        }

        putCart().catch(e => {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: e.message
            }))
        })
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
