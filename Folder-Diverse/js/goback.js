function isPageRefreshed() {
    
    return performance.navigation.type === 1 || performance.navigation.type === 2;
  }
  function redirectToHomePage() {
    
    if (isPageRefreshed()) {
      
      window.history.pushState({}, '', '/Diaconu Stefan/Atestat/Folder-Diverse/index.html');
    
      window.location.href = "/Diaconu Stefan/Atestat/Folder-Diverse/index.html";
    }
  }
  window.onload = redirectToHomePage;