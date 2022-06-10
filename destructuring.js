const fish = {id: 58, name: 'King Hilsha', price: 9000, phone:'0171555555555', address: 'Chandpur', dress: 'silver'};
console.log(fish.phone);

const {phone, price, dress, id} = fish;

console.log(phone, price);


const company = {name: 'GP',
 ceo:{id:29, name:'ajmol',food:'fuchka'},
 web:{
        work:'website development',
        employee: 22,
        framework:'react',
        tech:{
            first:'html',
            second:'css',
            third: 'js'
            }
    }
};

/* const work = company.web.work;
const framework = company.web.framework; */

const {work, framework} = company.web;
const {food} = company.ceo;
const {second, third} = company.web.tech;
console.log(work, framework, food);
console.log(second, third);