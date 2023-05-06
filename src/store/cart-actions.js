// Actions
import { uiActions } from "./ui-slice";
import { cartActions}  from "./cart-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-1-a181a-default-rtdb.firebaseio.com/cart.json');

            if (!response.ok) {
                throw new Error('Get cart data failed!');
            }

            return await response.json();
        }

        try {
            const cartData = await fetchData();
            dispatch(cartActions.replaceCart(cartData));
        } catch (e) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: e.message
            }))
        }
    }
}

export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data'
        }));

        const sendRequest = async () => {
            const response = await fetch('https://react-http-1-a181a-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity
                })
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed!');
            }
        }

        try {
            await sendRequest();

            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success',
                message: 'Sent cart data successfully'
            }));
        } catch (e) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error',
                message: e.message
            }))
        }
    }
}
