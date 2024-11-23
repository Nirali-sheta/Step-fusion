// fetching product based on subcategory

import products from "../data/product.js";

const params=new URLSearchParams(location.search);

const subcategory=params.get('subcategory');

function fetchProductBySubcategory(subcategory){

    // filtering products based on subcategoryId
    const filteredProducts=products.filter(product=>{
        return product.subcategoryId==subcategory;
    })
    displayProduct(filteredProducts);
}

function displayProduct(products){
    const productList=document.querySelector("body");

    products.forEach(product => {
        const productCard=document.querySelector(".product-card").cloneNode(true);
        
        productCard.querySelector(".product-image img").src="/html/src/"+product.imageUrls[0];
        // productCard.querySelector(".product-image img").alt=product.name;

        productCard.querySelector(".product-info h3").textContent=product.name;
        productCard.querySelector(".product-info p").textContent=product.description;

        const wishlist=productCard.querySelector(".product-buttons .wishlist-btn");
        console.log(wishlist)
        wishlist.addEventListener("click",function(){
            addToCart(product);
        })
        productList.appendChild(productCard);
    
    });
    document.querySelector(".product-card").remove();
}



fetchProductBySubcategory(subcategory);


