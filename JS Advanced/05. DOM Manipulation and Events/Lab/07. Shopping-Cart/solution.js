function solve() {
   let shoppingArea = document.querySelector('div.shopping-cart')
   shoppingArea.addEventListener('click', addToCart);
   let textArea = document.querySelector('textarea');
   let total = 0;
   let cart = new Set;

   function addToCart(event) {
      if (event.target.nodeName == 'BUTTON' && event.target.className.includes('add-product')) {
         let product = event.target.parentElement.parentElement;
         let name = product.querySelector('.product-title').textContent;
         let price = Number(product.querySelector('.product-line-price').textContent);
         cart.add(name);
         total += price;
         textArea.textContent += `Added ${name} for ${price.toFixed(2)} to the cart.\n`;
      }else if (event.target.nodeName == 'BUTTON' && event.target.className.includes('checkout')) {
         textArea.textContent += `You bought ${[...cart].join(', ')} for ${total.toFixed(2)}.`;
         shoppingArea.removeEventListener('click', addToCart);
      }
   }
}