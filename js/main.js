import { createHeader } from "./components/header.js";
import { createLoginCard } from "./pages/login.js";
import { createAddTransaction } from "./components/addTransaction.js";

const headerContainer = document.querySelector("#header-container");

headerContainer.append(createHeader());

const loginButton = document.querySelector("#login-btn");
const loginContainer = document.querySelector("#login-container");

const addTransactionContainer = document.querySelector("#add-transaction-container")
const analyseTransactionBtn = document.querySelector("#analyse-transaction-btn")
const addTransactionBtn = document.querySelector("#add-transaction-btn")

loginButton.addEventListener("click", () => {
    loginContainer.classList.toggle("active");
});

loginContainer.addEventListener("click", (event) => {
    if (event.target === loginContainer) {
        loginContainer.classList.remove("active");
    }
});


loginContainer.append(createLoginCard("Sign Up"))

analyseTransactionBtn.addEventListener("click", () => {
    addTransactionContainer.append(createAddTransaction())
    addTransactionContainer.classList.toggle("active")
})

addTransactionBtn.addEventListener("click", () => {
    addTransactionContainer.append(createAddTransaction())
    addTransactionContainer.classList.toggle("active")
})

addTransactionContainer.addEventListener("click", (event) => {
    if (event.target === addTransactionContainer) {
        addTransactionContainer.classList.remove("active");
    }
});

