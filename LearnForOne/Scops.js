// 'use strict'
// const a=10;   //global  declaration

// {
//     console.log(a)

//     let b=78
//     const c =11
// }

// console.log(b)   //not defined

// console.log(c)

// function sum(){
//     let d=67
// }
// console.log(d)  

// if(false){
//     let e=89
// }else{
//     console.log(e)    ///e is not defined
// }

// console.log(e)

//

// let student={
//     id:21,
//     name:"kesh",
//     isTrue:true,
//     sum:function(){
//         // console.log("oooooooo")

//         console.log(this)
//     }
// }

// for(let key in student){
//     console.log(key)
// }
// student.sum()

// console.log(this.student)

// 'use strict '
// var id=69;

// let student={
//     id:21,
//     name:"manish",
//     programmer:true,

//     sum:function(){

//          let su = function(){
//         console.log(this.id)
//        }

//        su()
//     }
    // console.log()

    // sum:function(){

    //     console.log(this.id)

    // }

    // sum:()=>{
    //     console.log(this.id)
    // }
// }
// student.sum()




// let function sum(){

//     id:21,
//     name:"manish",



//     console.log(this);
// }
// sum()

  function sum(){

    name="manish";

    function s(){
        console.log(name)
    }
    return s
}
let a=sum();

a()