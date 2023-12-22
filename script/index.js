const submitHandler = () => {
    const error         = [];
    const errorMessage  = document.querySelector(".main__contact__form__error");

    const form          = document.querySelector(".main__contact__form");

    const firstName     = document.querySelector("#contact-input-first-name").value;
    const lastName      = document.querySelector("#contact-input-last-name").value;
    const email         = document.querySelector("#contact-input-email").value;
    const phone         = document.querySelector("#contact-input-phone").value;
    const message       = document.querySelector("#contact-input-message").value;

    if (firstName.trim().length === 0) {
        error.push("First name must be filled");
    }

    if (email.trim().length === 0 || email.includes("@") === false) {
        error.push("Please enter a valid email");
    }

    if (phone.trim().length === 0 || /[^0-9]/g.test(phone.trim()) === true) {
        error.push("Please enter a valid phone number");
    }

    if (message.trim().length === 0) {
        error.push("Please provide a message");
    }

    if (error.length === 0) {
        errorMessage.innerHTML = "";
        alert("Success sending form");
        form.reset();
    }
    else {
        errorMessage.innerHTML = error;
    }
}

const submitButton = document.querySelector(".main__contact__form__button");
submitButton.addEventListener("click", submitHandler);