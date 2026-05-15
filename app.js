import { productsRef, getDocs } from "./firebase.js";

let cart = [];

async function load(){

const snap = await getDocs(productsRef);

const data = snap.docs.map(d=>d.data());

let box = document.getElementById("products");

box.innerHTML="";

data.forEach((p)=>{

box.innerHTML+=`

<div class="card">

<img src="${p.img}">

<div class="card-body">

<h4>${p.name}</h4>

<p>${p.price} грн</p>

<button onclick="add('${p.name}',${p.price})">Додати</button>

</div>

</div>`;

});

}

window.add = function(name,price){

cart.push({name,price});

document.getElementById("count").innerText =
  }

load();
