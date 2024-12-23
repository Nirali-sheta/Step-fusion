import products from "../data/product.js";
import addTocart from "../features/cart/addToCart.js";

const params=new URLSearchParams(location.search);
const productId=params.get('product');

// find product with product id

function fetchProductDetails(){
    const product=products.find(product=>product.id==productId);
    console.log(product);

    document.querySelector('img').src="/html/src/"+product.imageUrls[0];
    document.querySelector('img').alt=product.name;
    document.querySelector('.details h1').textContent=product.name;
    document.querySelector('.description').textContent=product.description;
    document.querySelector(".brand strong").parentNode.append(product.brand);
    document.querySelector(".category strong").parentNode.append(product.category);
    document.querySelector(".material strong").parentNode.append(product.material);
    document.querySelector(".price").append(product.price);
    document.querySelector(".size strong").parentNode.append(product.sizes);
    document.querySelector(".rate").parentNode.append();
    document.querySelector(".review strong").parentNode.append(product.reviews);

    const cartBtn=document.querySelector('.btn.cart');
    const user=localStorage.getItem('loggedInUser');
    cartBtn.addEventListener('click',()=>{
       if(user){
           addTocart(product);
       }
       else{
            location.href='/html/forms/login.html';
       }
    });

}
fetchProductDetails();

