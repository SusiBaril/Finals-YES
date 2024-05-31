document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll('.add-cart-button button');
    const cartItem = document.getElementById('cartItem');
    const total = document.getElementById('total');
    const checkoutButton = document.getElementById('checkoutButton');

    let cart = []; // Array to store cart items

    // Attach event listeners to each "Add to Cart" button
    addToCartButtons.forEach(button => {
        button.addEventListener('click', handleAddToCart);
    });

    function updateCart() {
        // Clear cart content before adding new items
        cartItem.innerHTML = '';

        // Check if cart is empty
        if (cart.length === 0) {
            cartItem.textContent = 'Your cart is Empty';
            total.textContent = '₱ 0.00';
            checkoutButton.disabled = true; // Disable checkout button if cart is empty
            return;
        }

        checkoutButton.disabled = false; // Enable checkout button if cart has items

        let totalPrice = 0;
        for (const item of cart) {
            const productBox = document.createElement('div');
            productBox.classList.add('product-box');

            const image = document.createElement('img');
            image.classList.add('product-image');
            image.src = item.imageUrl; // Replace with your image source logic

            const details = document.createElement('div');
            details.classList.add('product-details');

            const title = document.createElement('p');
            title.classList.add('product-title');
            title.textContent = item.title;

            const price = document.createElement('h2');
            price.classList.add('product-price');
            price.textContent = `₱${item.price}`;

            const quantityContainer = document.createElement('div');
            quantityContainer.classList.add('quantity-container');

            const quantityInput = document.createElement('input');
            quantityInput.type = 'text'; // Change input type to text
            quantityInput.value = item.quantity;
            quantityInput.dataset.itemId = item.id; // Add data attribute for item ID

            const addButton = document.createElement('button');
            addButton.textContent = '+';
            addButton.classList.add('quantity-btn', 'add-button'); // Add 'add-button' class
            addButton.dataset.itemId = item.id;

            const minusButton = document.createElement('button');
            minusButton.textContent = '-';
            minusButton.classList.add('quantity-btn', 'minus-button'); // Add 'minus-button' class
            minusButton.dataset.itemId = item.id;

            quantityContainer.appendChild(minusButton);
            quantityContainer.appendChild(quantityInput);
            quantityContainer.appendChild(addButton);

            details.appendChild(title);
            details.appendChild(price);
            details.appendChild(quantityContainer);

            productBox.appendChild(image);
            productBox.appendChild(details);

            cartItem.appendChild(productBox);

            totalPrice += item.price * item.quantity;

            // Add event listeners for quantity buttons
            addButton.addEventListener('click', handleQuantityIncrement);
            minusButton.addEventListener('click', handleQuantityDecrement);
            quantityInput.addEventListener('change', handleQuantityChange);
        }

        total.textContent = `₱${totalPrice.toFixed(2)}`; // Format total price to two decimal places
    }

    function handleAddToCart(event) {
        const button = event.target;
        const productBox = button.closest('.product-boxs');
        const title = productBox.querySelector('.product-title').textContent;
        const price = parseFloat(productBox.querySelector('.product-price').textContent.slice(1)); // Extract price value

        // Add item to cart or update quantity if already exists
        const existingItem = cart.find(item => item.title === title);
        if (existingItem) {
            existingItem.quantity++;
        } else {
            // Replace with your image source logic (assuming 'example.jpg' is a placeholder)
            cart.push({ id: cart.length + 1, title, price, quantity: 1, imageUrl: 'uploads/example.jpg' });
        }

        updateCart();
    }

    function handleQuantityIncrement(event) {
        const button = event.target;
        const itemId = parseInt(button.dataset.itemId);
        const itemIndex = cart.findIndex(item => item.id === itemId);
        cart[itemIndex].quantity++;
        updateCart();
    }

    function handleQuantityDecrement(event) {
        const button = event.target;
        const itemId = parseInt(button.dataset.itemId);
        const itemIndex = cart.findIndex(item => item.id === itemId);
        
        if (cart[itemIndex].quantity > 1) {
            cart[itemIndex].quantity--;
        } else {
            // Remove item if quantity becomes 0
            cart.splice(itemIndex, 1);
        }
        
        updateCart();
    }

    function handleQuantityChange(event) {
        const input = event.target;
        const itemId = parseInt(input.dataset.itemId);
        const newQuantity = parseInt(input.value);

        if (newQuantity > 0) {
            const itemIndex = cart.findIndex(item => item.id === itemId);
            cart[itemIndex].quantity = newQuantity;
        } else {
            // Remove item if quantity becomes 0
            handleRemoveItem({ target: { dataset: { itemId } } }); // Simulate remove button click
        }

        updateCart();
    }

    function handleRemoveItem(event) {
        const button = event.target;
        const itemId = parseInt(button.dataset.itemId);

        // Find the item index in the cart array
        const itemIndex = cart.findIndex(item => item.id === itemId);

        // If item found, remove it from the cart array
        if (itemIndex !== -1) {
            cart.splice(itemIndex, 1);
        }

        updateCart(); // Call updateCart to reflect changes in the UI
    }

    // Initial cart update
    updateCart();
});
