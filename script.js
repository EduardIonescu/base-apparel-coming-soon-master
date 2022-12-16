const emailInput = document.querySelector("#email");
const errorMessage = document.querySelector(".error-text");
const form = document.querySelector("form");

const emailRegex =
	/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

form.addEventListener("submit", (e) => {
	e.preventDefault();
	errorCheck();
});

const errorCheck = () => {
	const emailValue = emailInput.value;
	if (emailValue == "" || !emailRegex.test(emailValue)) {
		errorMessage.classList.add("active");
		emailInput.classList.add("error");
	} else {
		emailInput.value = "";
		if (errorMessage.classList.contains("active")) {
			errorMessage.classList.remove("active");
			emailInput.classList.remove("error");
		}
	}
};
