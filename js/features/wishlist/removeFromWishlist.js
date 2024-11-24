

function removeFromWishlist(product){
    let wishlist=JSON.parse(localStorage.getItem("wishlist"));

    if(wishlist.length>0){
        wishlist=wishlist.filter(item=>item.id!==product.id);

        // update localstorage
        localStorage.setItem("wishlist",JSON.stringify(wishlist));
    }

}

export default removeFromWishlist;