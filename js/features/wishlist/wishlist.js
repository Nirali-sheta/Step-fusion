
import removeFromWishlist from "./removeFromWishlist.js";
import addToCart from "../cart/addToCart.js";

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
        productCard.querySelector(".product-info .name").innerHTML=`${product.name}`;
        productCard.querySelector(".product-info .price").innerHTML=`&#8377;${product.price}`;
        productCard.querySelector("a").href=`/html/productInfo/productDetails.html?product=${product.id}`;
        

        const removebtn=productCard.querySelector(".remove-btn");
        const cartbtn=productCard.querySelector(".cart-btn");

        cartbtn.addEventListener("click",()=>{
            addToCart(product);
        })

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