const numbers = [50, 13, 7, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
//console.log(bigNumbers);

const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price:1500, color: 'black'},
    {name: 'smart watch', price:3000, color: 'black'},
    {name: 'sticky note', price:100, color: 'red'},
    {name: 'water glass', price:10, color: 'white'}

];

const expecsive = products.filter(product => product.price > 100);
//console.log(expecsive);

const blacks = products.filter(product => product.color == 'white');
//console.log(blacks);


const whiteItem = products.find(product => product.color == 'red');
console.log(whiteItem);
