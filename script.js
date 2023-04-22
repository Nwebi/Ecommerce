// Script for navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");
 

if(bar){
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close){
    close.addEventListener('click', () => {
        nav.classList.close('active');
    })
}

const removeLinks = document.querySelectorAll('td a');
const cartTable = document.querySelector('#cart table');
const subtotal = document.querySelector('#subtotal table tr:nth-child(1) td:nth-child(2)');
const total = document.querySelector('#subtotal table tr:nth-child(3) td:nth-child(2)');
let cartSubtotal = 0;

removeLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const row = link.parentNode.parentNode;
    const subtotalTd = row.querySelector('td:nth-child(6)' ) ;
    const subtotalAmount = parseFloat(subtotalTd.textContent.replace('$', ''));
    const quantityInput = row.querySelector('input[type="number"]');
    const quantity = parseInt(quantityInput.value);
    cartSubtotal -= subtotalAmount;
    subtotal.textContent = '$ ' + cartSubtotal.toFixed(2);
    total.textContent = '$ ' + cartSubtotal.toFixed(2);
    row.remove();
  });
});

const quantityInputs = cartTable.querySelectorAll('input[type="number"]');

quantityInputs.forEach(input => {
  input.addEventListener('change', () => {
    const row = input.parentNode.parentNode;
    const priceTd = row.querySelector('td:nth-child(4)');
    const subtotalTd = row.querySelector('td:nth-child(6)');
    const quantity = input.value;
    const price = parseFloat(priceTd.textContent.replace('$', ''));
    const prevSubtotalAmount = parseFloat(subtotalTd.textContent.replace('$', ''));
    const subtotalAmount = price * quantity ;
    cartSubtotal = (cartSubtotal - prevSubtotalAmount + subtotalAmount)
    cartSub = cartSubtotal + 339
    subtotal.textContent = '$ ' + cartSub.toFixed(2);
    total.textContent = '$ ' + cartSub.toFixed(2);
    subtotalTd.textContent = '$ ' + subtotalAmount.toFixed(2);
    
  });
});
const subscription = {
    email: 'example@example.com',
    balance: 500, // in dollars
    
  };

const proceedBtn = document.querySelector('#proceed-to-checkout');


proceedBtn.addEventListener('click', () => {
  const total = parseFloat(document.querySelector('#subtotal table tr:nth-child(3) td:nth-child(2)').textContent.replace('$', ''));
 
  checkout = () => {
    const amountDue = total; // in dollars
    if (subscription.balance >= amountDue) {
      subscription.balance -= amountDue;
      window.location.href="https://stripe.com/pay";
      // complete purchase
    } else {
      const amountNeeded = amountDue - subscription.balance;
      alert(`Your subscription balance is not enough. You need to fund your account with ${amountNeeded} dollars.`);
      // redirect user to subscription funding page
    }
  }
});

// New code

 
    

