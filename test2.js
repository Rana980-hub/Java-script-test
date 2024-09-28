//problem 5

// let products = [
//     {id: 1,name: "Shirt-1", sizes: ["sm", "md", "lg", "xl"], price: 800},
//     { id: 2, name: "Shirt-2", sizes: ["sm", "md", "lg", "xl"], price: 1200}
//     ];
//     // copy and modify the array
//     let cart = [];
//     function addDiscountProperty(products, discount)
//     {
//         // cart = products.filter(item => item.price > 1000);
//         // console.log(cart);
//         cart = products.map(xyz => {
//         if(xyz.price && xyz.price<1000)
//         {
//          return {...xyz};
//         }
//         else if(xyz.price > 1000)
//         {
//         return {...xyz, discount:discount}
//         }
//         })
//         return cart;
//     }
// let prods = addDiscountProperty(products, 0.10);
// console.log(prods);
// prods = addDiscountProperty(products, 0.05);
// console.log(prods);


//problem 6

//"some" and "includes" functions of array used in prob 6
//array.includes(valuetofind , startindex) -> apply to each element of array, not directly
//array.some(element, index) -> extract each element of array for check
let products = [{
    id: 1,
    name: "Shirt-1",
    sizes: ["sm", "md", "lg", "xl"]
    },
    {
    id: 2,
    name: "Shirt-2",
    sizes: ["lg", "xl"]
    },
    {
    id: 3,
    name: "Shirt-3",
    sizes: ["sm", "md"],
    },
    {
    id: 4,
    name: "Shirt-4",
    sizes: ["md", "lg", "xl"]
    },
    ];
    let fill =[]
    function filterProductsBySize(products, sizes)
    {
        if (sizes.length !=0)
        {
          fill = products.filter(item => item.sizes.some(size =>sizes.includes(size)));
        }
        else{
            fill = products.slice();
        }
          return fill;
    }
    
let sizes = ["sm"];
let prods = filterProductsBySize(products, sizes);
console.log(prods);

sizes = ["md", "lg"];
prods = filterProductsBySize(products, sizes);
console.log(prods);

sizes = [];
prods = filterProductsBySize(products, sizes);
console.log(prods);



