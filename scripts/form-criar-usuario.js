const select = (str) = (document.querySelector(str))

const form = select("form")

form.addEventListener("submit", (event) => {
    event.preventDefault()

    alert("Formulário enviado!");
});