// "module pattern"
function getCart() {
    // declare private variables and function here
    // cart object's add() and show() are inner function's of getCart()
    // this variable is accessible only to the cart object's add() and show()
    const items = [];

    const cart = {
        // items: [],
        add( item ) {
            items.push( item );
        },
        show() {
            console.log( items );
        }
    };

    return cart;
}

const shoppingCart = getCart();
shoppingCart.add( 'Soap' );
shoppingCart.add( 'Shampoo' );
shoppingCart.add( 'Detergent' );
shoppingCart.show();