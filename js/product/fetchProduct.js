// // fetching product based on subcategory

// import products from "../data/product.js";
// import addToWishlist from "../features/wishlist/addToWishlist.js"
// import addTocart from "../features/cart/addToCart.js";

// const params=new URLSearchParams(location.search);

// const subcategory=params.get('subcategory');

// function fetchProductBySubcategory(subcategory){

//     // filtering products based on subcategoryId
//     const filteredProducts=products.filter(product=>{
//         return product.subcategoryId==subcategory;
//     })
//     displayProduct(filteredProducts);
// }
// function displayProduct(products){
//     const productList=document.querySelector(".main");

//     products.forEach(product => {
//         const productCard=document.querySelector(".container").cloneNode(true);
        
//         productCard.querySelector(".product-image img").src="/html/src/"+product.imageUrls[0];
//         productCard.querySelector(".product-image img").alt=product.name;

//         productCard.querySelector(".product-info h3").textContent=product.name;
//         productCard.querySelector(".product-info p").innerHTML=`&#8377;<span>${product.price}</span>`;

//         productCard.querySelector("a").href=`/html/productInfo/productDetails.html?product=${product.id}`;

//         const wishlist=productCard.querySelector(".product-buttons .wishlist-btn i");

//         const wishlistProducts=JSON.parse(localStorage.getItem('wishlist')) || [];
//         const exists=wishlistProducts.find(item=>item.id===product.id);

//         // if product exists in wishlist, add 'added' class to change color of heart
//         if(exists){
//             wishlist.classList.add("added");
//         }
//         wishlist.addEventListener("click",function(){
//             // wishlist parameter is passed to add to cart and remove by clicking icon  
//                 addToWishlist(product,wishlist);
                        
//         })
//         const user=localStorage.getItem('loggedInUser');

//         // Add to Cart
//         const cartbtn=productCard.querySelector(".product-buttons .cart-btn");

//         cartbtn.addEventListener("click",function(){
//             if(user){
//                 addTocart(product);
//             }
//             else{
//             }
//         })
//         productList.appendChild(productCard);
    
//     });
//     document.querySelector(".product-card").remove();
// }



// fetchProductBySubcategory(subcategory);



import products from "../data/product.js";
import addToWishlist from "../features/wishlist/addToWishlist.js";
import addTocart from "../features/cart/addToCart.js";

const params = new URLSearchParams(location.search);
const subcategory = params.get("subcategory");

function fetchProductBySubcategory(subcategory) {
    // Filter products based on subcategoryId
    const filteredProducts = products.filter(product => product.subcategoryId == subcategory);
    displayProduct(filteredProducts);
}

function displayProduct(products) {
    const productList = document.querySelector(".main");

    products.forEach(product => {
        // Create a new product card
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        // Create the product image and link
        const productImage = document.createElement("div");
        productImage.classList.add("product-image");
        const link = document.createElement("a");
        link.href = `/html/productInfo/productDetails.html?product=${product.id}`;
        const img = document.createElement("img");
        img.src = `/html/src/${product.imageUrls[0]}`;
        img.alt = product.name;
        link.appendChild(img);
        productImage.appendChild(link);
        productCard.appendChild(productImage);

        // Create the product info
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
        const title = document.createElement("h3");
        title.textContent = product.name;
        const price = document.createElement("p");
        price.innerHTML = `&#8377;<span>${product.price}</span>`;
        productInfo.appendChild(title);
        productInfo.appendChild(price);
        productCard.appendChild(productInfo);

        // Create the product buttons
        const productButtons = document.createElement("div");
        productButtons.classList.add("product-buttons");

        // Wishlist Button
        const wishlistBtn = document.createElement("button");
        wishlistBtn.classList.add("wishlist-btn");
        const wishlistIcon = document.createElement("i");
        wishlistIcon.classList.add("fas", "fa-heart");
        wishlistBtn.appendChild(wishlistIcon);
        productButtons.appendChild(wishlistBtn);

        // Cart Button
        const cartBtn = document.createElement("button");
        cartBtn.classList.add("cart-btn");
        const cartIcon = document.createElement("i");
        cartIcon.classList.add("fas", "fa-shopping-cart");
        cartBtn.appendChild(cartIcon);
        productButtons.appendChild(cartBtn);

        productCard.appendChild(productButtons);

        // Add product card to the product list
        productList.appendChild(productCard);

        // Add event listeners for Wishlist and Cart
        const wishlistProducts = JSON.parse(localStorage.getItem("wishlist")) || [];
        const exists = wishlistProducts.find(item => item.id === product.id);

        // Check if the product is already in the wishlist
        if (exists) {
            wishlistIcon.classList.add("added");
        }

        // Wishlist Button Click
        wishlistBtn.addEventListener("click", () => {
            addToWishlist(product, wishlistIcon);
        });

        // Cart Button Click
        cartBtn.addEventListener("click", () => {
            addTocart(product);
        });

        // Debugging
        console.log(`Product loaded: ${product.name}`);
    });
}

fetchProductBySubcategory(subcategory);
