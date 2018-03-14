var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
 var x = parseInt(Math.floor(Math.random() * Math.floor(100)))
 item = { itemName: item, itemPrice: x}
 cart.push(item)
 console.log (item.itemName + 'has been added to your cart.')
}

function viewCart() {
  for (var i = 0, i < cart.length, i++){
    
  }
    
  
}





function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
