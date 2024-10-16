document.addEventListener('DOMContentLoaded', function() {
    
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

    
    const cartItemsContainer = document.getElementById('cartItems');

    const totalPriceContainer = document.getElementById('totalPrice');

    function renderCartItems() {
        
        cartItemsContainer.innerHTML = '';

       
        let totalPrice = 0;
        cartItems.forEach(function(item, index) {
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cartItem');

            const image = document.createElement('img');
            image.src = item.image; 
            image.alt = item.name;
            image.classList.add('cartItemImage');
            cartItemDiv.appendChild(image);

          
            const itemName = document.createElement('h2');
            itemName.textContent = item.name;

            const itemPrice = document.createElement('p');
            itemPrice.textContent = 'Price: $' + item.price;

            const itemDescription = document.createElement('p');
            itemDescription.textContent = item.description;

            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.addEventListener('click', function() {
               
                cartItems.splice(index, 1);
                
                localStorage.setItem('cartItems', JSON.stringify(cartItems));
                
                renderCartItems();
            });

            cartItemDiv.appendChild(itemName);
            cartItemDiv.appendChild(itemPrice);
            cartItemDiv.appendChild(itemDescription);
            cartItemDiv.appendChild(removeButton);
            

            cartItemsContainer.appendChild(cartItemDiv);

            
            totalPrice += item.price;
        });

        
        totalPriceContainer.textContent = 'Total Price: $' + totalPrice.toFixed(2);
    }

    
    renderCartItems();
});


function removeFromCart(productId) {
   
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    
    
    const index = cartItems.findIndex(item => item.id === productId);
    if (index !== -1) {
        
        cartItems.splice(index, 1);
        
        
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
        
        
        displayCartItems();
    }
}


function displayCartItems() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    

    cartItemsContainer.innerHTML = '';
    
   
    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cartItem');
        
        
        const image = document.createElement('img');
        image.src = item.colors[0].img;
        image.alt = item.title;
        image.classList.add('cartItemImage');
        itemElement.appendChild(image);
        
        
        const details = document.createElement('div');
        details.classList.add('cartItemDetails');
        itemElement.appendChild(details);
        
       
        const title = document.createElement('h3');
        title.textContent = item.title;
        title.classList.add('cartItemTitle');
        details.appendChild(title);
        
       
        const price = document.createElement('p');
        price.textContent = `$${item.price.toFixed(2)}`;
        price.classList.add('cartItemPrice');
        details.appendChild(price);
        
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.classList.add('removeButton');
        removeButton.addEventListener('click', function() {
            removeFromCart(item.id);
        });
        itemElement.appendChild(removeButton);
        
        
        cartItemsContainer.appendChild(itemElement);
    });
}


const cartLogoButton = document.getElementById('cartLogoButton');
cartLogoButton.addEventListener('click', function() {
    displayCartItems();
});


displayCartItems();


