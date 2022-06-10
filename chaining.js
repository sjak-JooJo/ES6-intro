// declare varible based on the name of an object porpoerty

const myObject = {x:2, y:50, z: 600, a:25, b:68 };
const {x, b} = myObject;
console.log(b);

// destructuring array

const [p,q] = [45, 37];
console.log(p,q);

const {sky, color, money} = {sky: 'blue', soil:'mati', color:'red', money: 500}
 

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
const {second, third} = company.web.tech;
console.log(company?.web?.tech?.third);