document.addEventListener('DOMContentLoaded', function() {
  const cpuSelect = document.getElementById('cpu');
  const gpuSelect = document.getElementById('gpu');
  const ramSelect = document.getElementById('ram');
  const storageSelect = document.getElementById('storage');
  const totalSpan = document.getElementById('total');
  
  const selects = [cpuSelect, gpuSelect, ramSelect, storageSelect];
  
  selects.forEach(select => {
    select.addEventListener('change', calculateTotal);
  });
  
  function calculateTotal() {
    let totalPrice = 0;
    selects.forEach(select => {
      totalPrice += parseInt(select.value);
    });
    totalSpan.textContent = totalPrice;
  }
});
