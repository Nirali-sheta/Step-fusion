
function displayProductInCart(){
    const cart=JSON.parse(localStorage.getItem('cart')) || [];
    
    if(cart.length<=0){
        document.body.innerHTML="<p>Your Cart is empty!!</p>";
        return;
    }
    const cartContainer=document.querySelector('.cart-page');
    const totalMRP = document.getElementById('total-mrp');
    const discount = document.getElementById('discount');
    const coupon = document.getElementById('coupon-discount');
    const tax = document.getElementById('Tax');
    const shippingFee = document.getElementById('shipping-fee');
    const totalAmount = document.getElementById('total-amount');

    let totalMRPValue=0;
    let totalDiscount=0;
    let totalAmountvalue=0;
    let couponValue=10;
    let taxValue=50;

   
    cart.forEach(product => {
        console.log(product);
        const cartItem=document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML= `
            <input type="checkbox" class="select-item">
            <img src="/html/src/${product.imageUrls[0]}" alt="${product.name}" class="product-image">
            <div class="product-details">
                <h4 class="product-name">${product.name}</h4>
                <p class="description">${product.description}</p>
                <p class="product-size">Size: ${product.sizes[0]}</p>
                <p class="product-color">Color:White</p>
                <p class="product-price">&#8377;${product.price}</p>
                <br><br>
                <p class="product-delivery">Delivered by Dec 7, Sat | <strong>FREE</strong></p>
            </div>
            <div class="product-quantity">
                <button class="quantity-decrease">-</button>
                <input type="text" value="1" class="quantity-input" min="1">
                <button class="quantity-increase">+</button>
            </div>
            <div class="product-total">
                <p>&#8377;${product.price}</p>
            </div>
        `;


        // Append the cart item to the cart container
        cartContainer.appendChild(cartItem);



        const qtyinput=cartItem.querySelector('.quantity-input');
        const totalprice=cartItem.querySelector('.product-total');

        const decreaseBtn=cartItem.querySelector('.quantity-decrease');
        const increaseBtn=cartItem.querySelector('.quantity-increase');

        


        qtyinput.addEventListener('input', () => {
            const qty = parseInt(qtyinput.value);
            if (qty >= 1) {
                totalprice.innerHTML = `&#8377;${(product.price * qty).toFixed(2)}`;
                updateTotalAmt();
            } else {
                qtyinput.value = 1;
            }
        });

        decreaseBtn.addEventListener('click',()=>{
            if(qtyinput.value>1){
                qtyinput.value=parseInt(qtyinput.value)-1;
                totalprice.innerHTML=`<p>&#8377;${(product.price * qtyinput.value).toFixed(2)}</p>`;
                updateTotalAmt();
            }
        })
        increaseBtn.addEventListener('click',()=>{
                qtyinput.value=parseInt(qtyinput.value)+1;
                totalprice.innerHTML=`<p>&#8377;${(product.price * qtyinput.value).toFixed(2)}</p>`;
                updateTotalAmt();

        })
        function updateTotalAmt(){
            const qty=qtyinput.value;
            console.log(qty);
            totalMRPValue+=product.price*qty;
            if(totalMRPValue>=1500){
                totalDiscount=totalMRPValue*0.07;
            }
            else if(totalMRPValue>=3000){
                totalDiscount=totalMRPValue*0.15;
    
            }
            else if(totalMRPValue>=5000){
                totalDiscount=totalMRPValue*0.22;
    
            }
            else{
                totalDiscount=0;
            }
    
            totalAmountvalue=totalMRPValue-totalDiscount-couponValue+taxValue;
            console.log(totalMRPValue);
    
            totalMRP.textContent=totalMRPValue.toFixed(2);
            
    
        }
        // Dynamic price details
        
    });
    
    
 



}
displayProductInCart();