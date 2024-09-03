let login = document.querySelector("#login");
let signup = document.querySelector("#sign-up-btn");
let back = document.querySelector("#back-btn");


document.addEventListener("DOMContentLoaded", () => {
    const visitButtons = document.querySelectorAll(".read-more-btn button"); // Ensure this matches the class in HTML
    const popupOverlay = document.getElementById("popup-overlay");
    const popupDetails = document.getElementById("popup-details");
    const closePopup = document.getElementById("close-popup");
  
    visitButtons.forEach(button => {
      button.addEventListener("click", () => {
        const placeId = button.getAttribute("data-place");
        // Customize content based on placeId or button attributes if needed
        popupDetails.innerHTML = `<h2>Place ${placeId}</h2><p>Details for place ${placeId} go here.</p>`;
        popupOverlay.style.display = "flex";
      });
    });
  
    closePopup.addEventListener("click", () => {
      popupOverlay.style.display = "none";
    });
  
    // Hide the popup when clicking outside the popup content
    popupOverlay.addEventListener("click", (e) => {
      if (e.target === popupOverlay) {
        popupOverlay.style.display = "none";
      }
    });
  });
  console.log("JavaScript loaded"); // Add this line to check if the script is running




if (login) {
    login.addEventListener("click", (e) => {
        location.href = "login.html";
        console.log(e);
    });
}

if (signup) {
    signup.addEventListener("click", (e) => {
        open("signup.html", "_blank");
        console.log(e);
    });
}

if (back) {
    back.addEventListener("click", (e) => {
        location.href = "index.html"; 
        console.log(e);
    });
}
