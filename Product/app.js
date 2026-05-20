const url="http://dummyjson.com/products";
fetch(url).then((res)=>{
    return res.json();
}).then((data)=>{
    let body=document.querySelector("body");
    // console.log(data.products[0]);
    data.products.map((a)=>{

        console.log(a);

        body.innerHTML+=`<div style="border:1px solid black;
        padding:20px;
        margin:20px;
        width:300px;
        border-radius:24px">

        <img src="${a.thumbnail}" width="100px">
        <h2>${a.title}</h2>
        <h2>${a.brand}</h2>

        <button>add</button>

        </div>
        `

    })
    
})