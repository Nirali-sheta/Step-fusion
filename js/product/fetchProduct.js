// fetching product based on subcategory

import products from "../data/product.js";
import addToWishlist from "../features/wishlist/addToWishlist.js"
import addTocart from "../features/cart/addToCart.js";

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
    const productList=document.querySelector(".main");

    products.forEach(product => {
        const productCard=document.querySelector(".container").cloneNode(true);
        
        productCard.querySelector(".product-image img").src="/html/src/"+product.imageUrls[0];
        productCard.querySelector(".product-image img").alt=product.name;

        productCard.querySelector(".product-info h3").textContent=product.name;
        productCard.querySelector(".product-info p").innerHTML=`&#8377;<span>${product.price}</span>`;

        productCard.querySelector("a").href=`/html/productInfo/productDetails.html?product=${product.id}`;

        const wishlist=productCard.querySelector(".product-buttons .wishlist-btn i");

        const wishlistProducts=JSON.parse(localStorage.getItem('wishlist')) || [];
        const exists=wishlistProducts.find(item=>item.id===product.id);

        // if product exists in wishlist, add 'added' class to change color of heart
        if(exists){
            wishlist.classList.add("added");
        }
        wishlist.addEventListener("click",function(){
            // wishlist parameter is passed to add to cart and remove by clicking icon  
                addToWishlist(product,wishlist);
                        
        })
        const user=localStorage.getItem('loggedInUser');

        // Add to Cart
        const cartbtn=productCard.querySelector(".product-buttons .cart-btn");

        cartbtn.addEventListener("click",function(){
            if(user){
                addTocart(product);
            }
            else{
            }
        })
        productList.appendChild(productCard);
    
    });
    document.querySelector(".container").remove();
}


fetchProductBySubcategory(subcategory);
