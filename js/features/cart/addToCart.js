
function addTocart(product){
    let cart=JSON.parse(localStorage.getItem("cart"))||[];
    const isExist=cart.find(item=>item.id===product.id);
    if(!isExist){
        cart.push(product);

        localStorage.setItem("cart",JSON.stringify(cart));
        alert("Product added to cart!");
    }
    else{
        alert("Product already in your cart!");
    }
}

export default addTocart;