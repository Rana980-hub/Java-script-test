let products = [
    {id: 1, price: 100, discount: 0.10},
    {id: 2, price: 200, discount: 0.10},
    {id: 3, price: 300, discount: 0.10},
    {id: 4, price: 400, discount: 0.10},
    {id: 5, price: 500, discount: 0.05},
];
let cart = [];
function addToCart(cart, product) {
    // Find if the product is already in the cart
    let check = cart.find(item => item.id == product.id); //find return whole element (object) of array if condition met
    if(check) {
        // If product exists in the cart, update it
        // cart = cart.map(item => 
        //     item.id === product.id 
        //         ? {...item, Quality: item.Quality + 1, total: item.total + (product.price - (product.discount * product.price))}
        //         : item
        // );
    cart = cart.map(items=> {
        let cp;
        if(items.id==product.id)
        {
           return cp = {...items, Quality: items.Quality + 1, total: items.total + (product.price - (product.discount * product.price))};
        }
        else
        {
            return items;
        }
    })
    } else {
        // If product is not in the cart, add it with initial Quality 1
        cart.push(     //push the object to cart
            {...product, Quality: 1, total: product.price - (product.discount * product.price)}
        );
    }
    return cart;
}
function removeFromCart (cart, product)
{
    let index = cart.findIndex(x => x.id == product.id);
    if (index != -1)
    // let fill = cart.find(item => item.id==product.id);
    // if (fill)
    {
        cart = cart.filter(cp => cp.id!= product.id);
    }
    return cart;
}
function incrementCart(cart, product) 
{
   let rel = cart.findIndex(test => test.id==product.id)
   if(rel != -1 )
    {
        cart = cart.map(ex => {
            if(ex.id == product.id)
            {
                ex.Quality++;
            }
            return ex;
        });
    } 
    return cart;  
}
function decrementCart(cart, product) 
{
   let rel = cart.findIndex(test => test.id==product.id)
   if(rel != -1 )
    {
        cart = cart.map(ex => {
            if(ex.id == product.id && ex.Quality > 0)
            {
                ex.Quality--;
            }
            return ex;
        });
        cart = cart.filter(y => y.Quality>0);
    } 
    return cart;  
}
let product = products[2];
cart = addToCart(cart, product); // Adding product with id 3
console.log(cart);
product = products[4];
cart = addToCart(cart, product); // Adding product with id 5
console.log(cart);
product = products[2];
cart = addToCart(cart, product); // Adding product with id 3 again
console.log(cart);
product = products[2];
cart = addToCart(cart, product); // Adding product with id 3 again
console.log(cart);
product = products[4];
cart = addToCart(cart, product); // Adding product with id 5
console.log(cart);
product = products[3];
cart = addToCart(cart, product); // Adding product with id 5
console.log(cart);
product = cart[2];
cart = removeFromCart(cart, product);
console.log(cart);
product = cart[0];
cart = incrementCart(cart, product);
console.log(cart);
product = cart[0];
cart = decrementCart(cart, product);
console.log(cart);
product = cart[0];
cart = decrementCart(cart, product);
console.log(cart);
product = cart[0];
cart = decrementCart(cart, product);
console.log(cart);
