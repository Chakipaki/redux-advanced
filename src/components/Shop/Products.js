import classes from './Products.module.css';

// Components
import ProductItem from './ProductItem';


const DUMMY_PRODUCTS = [
    {
        id: '1',
        title: 'BOOK',
        price: 12,
        description: 'This is a first product - amazing!'
    },
    {
        id: '2',
        title: 'Watch',
        price: 6,
        description: 'This is a first product - amazing!'
    },
    {
        id: '3',
        title: 'Watch',
        price: 32,
        description: 'This is a first book - amazing!'
    }
]

const Products = (props) => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map(item => (
                    <ProductItem
                        key={item.id}
                        {...item}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
