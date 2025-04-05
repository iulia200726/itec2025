const scriptURL = 'https://script.google.com/macros/s/AKfycby-PbHMuUaQQATdU3_fwN0LEbX_ReqCWWcOnB-uTfSgq1OvxOy7dO75Q9tRh6B5427zoQ/exec';
const form = document.forms['submit-to-google-sheet'];

form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      if (response.ok) {
        window.location.href = "thanks.html"; 
      } else {
        console.error('Server error:', response.status);
      }
    })
    .catch(error => console.error('Error!', error.message));
});