

let str="javascript   "

console.log(str.length);
console.log(str.trim());
console.log(str.toLowerCase);
console.log(str.toUpperCase);
console.log(str.includes("i"));    //search karta hea
console.log(str.indexOf("p"));
console.log(str.substring(1,4),"substring");   //kanha se kanha tak
console.log(str.substr(1,4),"substr");  //kanha se kitna 
console.log(str.split("a"));



// let user1={
//     name:"manish",

//     add:{
//         city:"jabalpur"
//     }
// }

// let user2=structuredClone(user1)  ///deep copy
// let user2=(user1)                 //shalow copy
// user2.add.city="banaras";

// console.log(user1.add.city);
// console.log(user2.add.city);
// // let obj={
//     id:6,
//     // name:"manish yadav",
//     firstName:"manish",
//     lastName:"yadav",
//     fullName:function(city,age){
//         console.log(this.firstName+this.lastName+" "+city+" "+age);
//     }

// }

// let userOne={
//     id:10,
//     firstName:"cockroch",
//     lastName:"janta party",

// }

// // obj.fullName.call(userOne);
// obj.fullName.apply(userOne,["delhi",4]);

// const questions = [
//     {
//       question: "HTML ka full form kya hai?",
//       options: [
//         "Hyper Text Markup Language",
//         "High Text Machine Language",
//         "Hyper Tabular Markup Language",
//         "Home Tool Markup Language"
//       ],
//       answer: 0   
//     },]
    // // console.log(questions[0].options);
    
    // // for(let i in questions){
    // //     console.log(questions.call)
    // // }


    // const questions = [
    // {
    //   question: "HTML ka full form kya hai?",
    //   options: [
    //     "Hyper Text Markup Language",
    //     "High Text Machine Language",
    //     "Hyper Tabular Markup Language",
    //     "Home Tool Markup Language"
    //   ],
//       answer: 0   
//     },
//     {
//       question: "CSS me color change karne ke liye kaunsi property use hoti hai?",
//       options: ["font-color", "text-color", "color", "background"],
//       answer: 2
//     },
//     {
//       question: "JavaScript me variable declare karne ke liye kaunsa keyword use hota hai?",
//       options: ["var", "int", "string", "declare"],
//       answer: 0
//     },
//     {
//       question: "Kaunsa HTML tag sabse bada heading banata hai?",
//       options: ["<h6>", "<heading>", "<h1>", "<head>"],
//       answer: 2
//     },
//     {
//       question: "JavaScript me array ki length kaise pata karte hain?",
//       options: ["array.size()", "array.length", "array.count", "length(array)"],
//       answer: 1
//     }
//   ];

//   for(let i in questions){
//     console.log(questions[i].options[1]);
//   }