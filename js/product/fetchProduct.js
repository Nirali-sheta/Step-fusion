import footwear from "../const.js";


// used to fetch params from url
const Params=new URLSearchParams(window.location.search);

const category=Params.get('category');


function displayProductByCategory(category){
    const productResult=document.getElementById('container');

    
    
    const products=footwear[category];
    
    if(products){

        products.forEach(product=>{
            const productContainer=document.createElement("div");
            productContainer.classList.add('product')
            productResult.appendChild(productContainer);

            const name=document.createElement('h3');
            name.textContent=product.name;
            productContainer.appendChild(name);
        });
    }

}

displayProductByCategory(category);

