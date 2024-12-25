import products from "../data/product.js";
import addToWishlist from "../features/wishlist/addToWishlist.js";
import addTocart from "../features/cart/addToCart.js";

const trending=document.querySelector(".trending");
const card=document.querySelector('.product-card');

function renderProducts(products){
    products.forEach(product => {
        const productCard=card.cloneNode(true);
       
        productCard.querySelector('.product-image img').src="/html/src/"+product.imageUrls[0];
        productCard.querySelector('.product-image a').href = `/html/productInfo/productDetails.html?product=${product.id}`;
        productCard.querySelector(".product-image img").alt = product.name;
        productCard.querySelector(".product-info h3").textContent = product.name;

        const wishlistbtn=productCard.querySelector(".product-buttons .wishlist-btn i");
        const cartbtn=productCard.querySelector(".product-buttons .cart-btn");
    
        wishlistbtn.addEventListener('click',()=>{
            addToWishlist(product,wishlistbtn);
        })
        const user=localStorage.getItem('loggedInUser');
        cartbtn.addEventListener('click',()=>{
            if(user){
                addTocart(product);
            }
            else{
                location.href='/html/forms/login.html';
            }
        })
        trending.appendChild(productCard);
        
        card.remove();
    });
}

const randomProducts=products.sort(()=>Math.random()-0.5).slice(0,12);
renderProducts(randomProducts);