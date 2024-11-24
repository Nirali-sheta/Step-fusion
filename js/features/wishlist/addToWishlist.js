
function addToWishlist(product,wishlistIcon){
    let wishlist=JSON.parse(localStorage.getItem("wishlist")) || [];

    // check if product is already exists or not
    const exists=wishlist.find(item=>item.id===product.id);

    if(!exists){
        wishlist.push(product);
        // change color of icon by adding class
        wishlistIcon.classList.add("added");

        // save product to localstorage
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
        alert(`${product.name} added to wishlist`);
    }
    else{
        // if user reclick on icon the product is removed from wishlist
        wishlist=wishlist.filter(item=>item.id!==product.id);

        wishlistIcon.classList.remove("added");
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
        alert(`${product.name} removed from wishlist`);
    }
}

export default addToWishlist;