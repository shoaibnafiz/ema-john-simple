import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
    const loadedProducts = await fetch('products.json')
    const products = await loadedProducts.json();

    const storedCart = getShoppingCart();
    const savedCart = [];
    // get id of the addedProduct
    for (const id in storedCart) {
        // get product from products state by using id
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            // add quantity
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            // add the addedProduct to the savedCart
            savedCart.push(addedProduct);
        }
    }

    return savedCart;
}

export default cartProductsLoader;