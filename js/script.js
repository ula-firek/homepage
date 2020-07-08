console.log("Witajcie dobrzy ludzie. Fani BSB :)")

let changeColorButton = document.querySelector(".button--changeBackground");
let container = document.querySelector(".container");

changeColorButton.addEventListener("click", () => {
    container.classList.toggle("orangeBackground");

});

changeColorButton.addEventListener("click", () => {
    if (changeColorButton.innerText === "Włącz pomarańczowy kolor tła") {
        changeColorButton.innerText = "Wyłącz pomarańczowy kolor tła";
    } else if (changeColorButton.innerText === "Wyłącz pomarańczowy kolor tła") {
        changeColorButton.innerText = "Włącz pomarańczowy kolor tła";
    }
});