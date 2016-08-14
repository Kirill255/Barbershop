
var loginEnter = document.querySelector(".login"),

    popup = document.querySelector(".modal_content"),
    closePopup = document.querySelector(".modal_content-close"),

    login = popup.querySelector("[name=login]"),
    password = popup.querySelector("[name=password]"),

    overlay = document.querySelector(".overlay"),

    storage = localStorage.getItem("login"),
    loginForm = popup.querySelector(".login_form"),

    popupMapLink = document.querySelector(".way"),
    popupMap = document.querySelector(".modal_content-map"),
    popupMapClose = popupMap.querySelector(".modal_content-close");

        // Открытие окна авторизации пользователя
    loginEnter.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.add("modal_content-show");
    overlay.classList.add("overlay-show");
    if (storage) {
        login.value=storage;
        password.focus();
    } else {
        login.focus();
    }
});

        // Проверка формы на заполнение обязательных полей
loginForm.addEventListener("submit", function (event) {
    if (!login.value || !password.value) {
        event.preventDefault();
        popup.classList.add("error");
    } else {
        localStorage.setItem("login", login.value);
    }
});

        // Закрытие окна авторизации при клике на крестик
closePopup.addEventListener("click", function (event) {
    event.preventDefault();
    popup.classList.remove("modal_content-show");
    overlay.classList.remove("overlay-show");
    popup.classList.remove("error");
});

        // Открытие карты
popupMapLink.addEventListener("click", function (event) {
    event.preventDefault();
    popupMap.classList.add("modal_content-map-show");
    overlay.classList.add("overlay-show");
});

        // Закрытие карты при клике на крестик
popupMapClose.addEventListener("click", function (event) {
    event.preventDefault();
    popupMap.classList.remove("modal_content-map-show");
    overlay.classList.remove("overlay-show");
});

        // Закрытие окна авторизации нажатием на Esc
window.addEventListener("keydown", function (event) {
    if (event.keyCode === 27) {
        if (popup.classList.contains("modal_content-show")) {
            popup.classList.remove("modal_content-show");
            overlay.classList.remove("overlay-show");
            popup.classList.remove("error");
        } if (popupMap.classList.contains("modal_content-map-show")){
            popupMap.classList.remove("modal_content-map-show");
            overlay.classList.remove("overlay-show");
        }
    }});
        // Закрытие окна авторизации или карты при клике по оверлею
overlay.addEventListener("click", function (event) {
    if (popup.classList.contains("modal_content-show")) {
        popup.classList.remove("modal_content-show");
        overlay.classList.remove("overlay-show");
    } if (popupMap.classList.contains("modal_content-map-show")) {
        popupMap.classList.remove("modal_content-map-show");
        overlay.classList.remove("overlay-show");
    }
});