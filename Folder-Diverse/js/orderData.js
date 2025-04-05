const scriptURL = 'https://script.google.com/macros/s/AKfycbzWt6lnFU8GzlcJ3mpDUmOm5qDzQKn13U_GtMFAAWwYJXX3CQCPWxMmojkFemkBZ46P/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      if (response.ok) {
        window.location.href = "thanks1.html"; 
      } else {
        console.error('Server error:', response.status);
      }
    })
    .catch(error => console.error('Error!', error.message));
});