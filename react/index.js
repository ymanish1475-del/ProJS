// import data from './app.js'

// console.log(data);
// import {a,sum} from './app.js'
// console.log(a);

// console.log(sum(4,6));

function sum(a){
    return function(b){
        if(b){
            return sum(a+b)
        }
        return a

    }
}
console.log(sum(4)(6)(28)());

