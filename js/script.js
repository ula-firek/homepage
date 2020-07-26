{
    const welcome = () => {
        console.log("Witajcie dobrzy ludzie. Fani BSB :)");
    }

    const toggleBackground = () => {
        const container = document.querySelector(".js-body");
        const changeColorButton = document.querySelector(".js-changeBackroundButton");

        container.classList.toggle("body--orange");
        if (changeColorButton.innerText === "Włącz pomarańczowy kolor tła") {
            changeColorButton.innerText = "Wyłącz pomarańczowy kolor tła";
        } else if (changeColorButton.innerText === "Wyłącz pomarańczowy kolor tła") {
            changeColorButton.innerText = "Włącz pomarańczowy kolor tła";
        }

        changeColorButton.addEventListener("click", toggleBackground);
    }

    welcome();
    toggleBackground()
};



