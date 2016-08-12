var login = document.querySelector(".login"),
    popup = document.querySelector(".modal_content"),
    closePopup = document.querySelector(".modal_content-close");

login.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal_content-show");

});


closePopup.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal_content-show");
});