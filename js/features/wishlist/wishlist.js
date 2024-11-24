
import removeFromWishlist from "./removeFromWishlist.js";

function displayProductIntoWishlist(){
    const wishlist=JSON.parse(localStorage.getItem("wishlist"))||[];
   

    const wishlistContainer=document.querySelector(".wishlist-container");

    if(wishlist.length<=0){
        wishlistContainer.innerHTML="<p>Your wishlist is empty!!</p>";
        return;
    }

    wishlist.forEach(product=>{
        const productCard=document.querySelector(".product-card").cloneNode(true);
        productCard.querySelector(".product-image img").src='/html/src/'+product.imageUrls[0];
        productCard.querySelector(".product-image img").alt=product.name;
        productCard.querySelector(".product-info h3").textContent=product.name;

        

        const removebtn=productCard.querySelector(".remove-btn");

        removebtn.addEventListener("click",function(){
            removeFromWishlist(product);
            productCard.remove();
            if(wishlistContainer.children.length===0){
                wishlistContainer.innerHTML="<p>Your wishlist is empty!!</p>";
            }
           
        });
        
        // const cart=productCard.querySelector(".cart-btn");
        // cart.addEventListener("click",function(){
        //     addToCart(product);
        // })
        wishlistContainer.appendChild(productCard);
       
    })
    document.querySelector(".product-card").remove();
    

}

displayProductIntoWishlist();