// fetching product based on subcategory

import footwear from "../const.js";


const params=new URLSearchParams(window.location.search);

const category=params.get('category');
const subcategory=params.get('subcategory');

function displayProduct(category,subcategory){
    const container=document.getElementById("container");
    const products=footwear[category][subcategory].products;

    if(products){
        products.forEach(product => {
            const productContainer=document.createElement("div");
            productContainer.textContent=product.name;
            container.appendChild(productContainer);
        });
    }
}

displayProduct(category,subcategory);
