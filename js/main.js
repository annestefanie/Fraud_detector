import { createHeader } from "./components/header.js";
import { createLoginCard } from "./pages/login.js";

const headerContainer = document.querySelector("#header-container");

headerContainer.append(createHeader());

const loginButton = document.querySelector("#login-btn");
const loginContainer = document.querySelector("#login-container");

const body = document.getElementsByTagName('body')

loginButton.addEventListener("click", () => {
    loginContainer.classList.toggle("active");
});

loginContainer.addEventListener("click", (event) => {
    if (event.target === loginContainer) {
        loginContainer.classList.remove("active");
    }
});

loginContainer.append(createLoginCard())