// [45, 65, 45, 98]

const shoppingCard = [
    {name: 'shoe', price: 1200},
    {name: 'shirt', price: 2200},
    {name: 'pant', price: 3700},
    {name: 'belt', price: 600},
];

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products[i];
        sum = sum + product.price;
        // console.log(product);
    }
    return sum;
}

const expense = totalCost(shoppingCard);
console.log('Total expense today', expense);



// const shoppingCard =[
//     {name: 'pant', price: 3000},
//     {name: 'shirt', price: 1500},
//     {name: 'shose', price: 1000},
//     {name: 'belt', price: 500},
// ];

// function totalPrice(products){
//     for(let i = 0; i < products.length; i++){
//         const product = products[i];
//         console.log(product);
//     }
// }

// const expensive = totalPrice(shoppingCard);
// console.log(expensive);


// const totalPrice = [
//     {name: 'alu', price: 40},
//     {name: 'patol', price: 50},
//     {name: 'begun', price: 30},
//     {name: 'tamato', price: 60},
//     {name: 'piaz', price: 55},
// ];

// function shoppingCard(products){
//     for(let i = 0; i < products.length; i++){
//         const product = products[i];
//         console.log(product);
//     }
// }

// const expensive = shoppingCard(totalPrice);
// console.log(expensive);