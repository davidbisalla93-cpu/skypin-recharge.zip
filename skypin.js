document.getElementById('orderForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const network = document.getElementById('network').value;
  const amount = document.getElementById('amount').value;

  // For now just show message on screen
  document.getElementById('message').innerText =
    `Thank you, ${name}! Your order for ${network} ₦${amount} has been received.`;

  // You could send this to WhatsApp, Email, or Firebase here
});
