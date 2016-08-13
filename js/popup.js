

var login = document.querySelector(".login"),
    popup = document.querySelector(".modal_content"),
    closePopup = document.querySelector(".modal_content-close"),
    overlay = document.querySelector(".overlay");

login.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal_content-show");
    overlay.classList.add("overlay-show");

});


closePopup.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal_content-show");
    overlay.classList.remove("overlay-show");
});

