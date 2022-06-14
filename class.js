class Support{
    name;
    designation = 'support web Dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'start a support session');
    }
}

const aamir = new Support('Amir khan', 'BD');
//console.log(aamir);
const salman = new Support('salman khan', 'Dubai');
//console.log(salman);
aamir.startSession();
salman.startSession();