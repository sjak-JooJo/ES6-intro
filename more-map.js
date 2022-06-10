const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];

const fLength = friends.map(friend => friend.length);
//console.log(fLength);

const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price:1500, color: 'black'},
    {name: 'smart watch', price:3000, color: 'black'},
    {name: 'sticky note', price:100, color: 'red'},
    {name: 'water glass', price:10, color: 'white'}

]

const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price);

//products.map(product => console.log(product));
//products.forEach(product => console.log(product));
//console.log(productNames);
//console.log(productPrices);