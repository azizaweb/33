document.addEventListener("DOMContentLoaded", function () {
    let passwordInput = document.getElementById("Password");
    let eyeIcon = document.querySelector(".eye");
    let confirmButton = document.querySelector("button");
    let passportInput = document.getElementById("Ota-onaman");

    // Функция для переключения видимости пароля
    eyeIcon.addEventListener("click", function () {
        if (passwordInput.type === "password") {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
    });

    // Функция для активации кнопки
    function updateButtonState() {
        if (passwordInput.value.trim() !== "" && passportInput.value.trim() !== "") {
            confirmButton.style.backgroundColor = "#F0400F"; // Новый цвет кнопки
            confirmButton.style.border = "1px solid #F0400F";
            confirmButton.disabled = false;
        } else {
            confirmButton.style.backgroundColor = "#F69E86"; // Исходный цвет кнопки
            confirmButton.style.border = "1px solid #F69E86";
            confirmButton.disabled = true;
        }
    }

    // Отслеживание ввода в полях
    passportInput.addEventListener("input", updateButtonState);
    passwordInput.addEventListener("input", updateButtonState);
});