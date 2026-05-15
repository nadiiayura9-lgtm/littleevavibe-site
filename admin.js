import { productsRef, addDoc } from "./firebase.js";

window.addProduct = async function(){

await addDoc(productsRef,{

name: name.value,

price: Number(price.value),

img: img.value

});

alert("Товар додано 💎");
