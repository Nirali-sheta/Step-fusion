function displayProductInCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length <= 0) {
        document.body.innerHTML = "<p>Your Cart is empty!!</p>";
        return;
    }

    const cartContainer = document.querySelector('.cart-page');
    const totalMRP = document.getElementById('total-mrp');
    const totalAmount = document.getElementById('total-amt');
    const discount=document.getElementById('discount');
    const couponValue = 10;
    const taxValue = 50;

    let totalMRPValue = 0;
    let totalDiscount = 0;
    let totalAmountValue = 0;

    cart.forEach((product, index) => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <input type="checkbox" class="select-item">
            <img src="/html/src/${product.imageUrls[0]}" alt="${product.name}" class="product-image">
            <div class="product-details">
                <h4 class="product-name">${product.name}</h4>
                <p class="description">${product.description}</p>
                <p class="product-size">Size: ${product.sizes[0]}</p>
                <p class="product-color">Color: White</p>
                <p class="product-price">&#8377;${product.price}</p>
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

        const qtyInput = cartItem.querySelector('.quantity-input');
        const totalPrice = cartItem.querySelector('.product-total');
        const decreaseBtn = cartItem.querySelector('.quantity-decrease');
        const increaseBtn = cartItem.querySelector('.quantity-increase');

        // update the total price for this product
        function updateProductTotal() {
            const qty = parseInt(qtyInput.value);
            if (qty >= 1) {
                totalPrice.innerHTML = `&#8377;${(product.price * qty).toFixed(2)}`;
                updateTotalAmt();
            } else {
                qtyInput.value = 1; 
            }
        }

        // increasing and decreasing qty
        qtyInput.addEventListener('input', updateProductTotal);
        decreaseBtn.addEventListener('click', () => {
            let qty = parseInt(qtyInput.value);
            if (qty > 1) {
                qtyInput.value = qty - 1;
                updateProductTotal();
            }
        });
        increaseBtn.addEventListener('click', () => {
            let qty = parseInt(qtyInput.value);
            qtyInput.value = qty + 1;
            updateProductTotal();
        });       
    });


function updateTotalAmt() {
    totalMRPValue = 0;  

    // Calculate the total MRP for all products in the cart
    const qtyInputs = cartContainer.querySelectorAll('.quantity-input');
    qtyInputs.forEach((input, idx) => {
        const productQty = parseInt(input.value);
        if (productQty >= 1) {
            totalMRPValue += cart[idx].price * productQty;
        }
    });    
    // Calculate discount based on total MRP
    if (totalMRPValue >= 5000) {
        totalDiscount = totalMRPValue * 0.22;
    } else if (totalMRPValue >= 3000) {
        totalDiscount = totalMRPValue * 0.15;
    } else if (totalMRPValue >= 1500) {
        totalDiscount = totalMRPValue * 0.07;
    } else {
        totalDiscount = 0;
    }

    // Calculate the total amount
    totalAmountValue = totalMRPValue - totalDiscount - couponValue + taxValue;
    console.log(totalAmountValue);
    // Update the displayed values
    totalMRP.innerHTML='&#8377;'+(totalMRPValue).toFixed(2);
    discount.innerHTML='&#8377;'+(totalDiscount).toFixed(2);
    totalAmount.innerHTML='&#8377;'+(totalAmountValue).toFixed(2);
}
    updateTotalAmt();
}

displayProductInCart();
