'strict use'

const fontColorSwitchButtons = document.getElementsByClassName("fontColorSwitch");
const backgroundColorSwitchButtons = document.getElementsByClassName("backgroundColorSwitch");
const textLayoutSwitchButtons = document.getElementsByClassName("textLayoutSwitch");
const textFormatSwitchButtons = document.getElementsByClassName("textFormatSwitch");
const formatReset = document.querySelector(".randomBackgorundSwitch")
const fontSelect = document.querySelector("select")
const quoteContainer = document.querySelector("#quote-container")




const changeBGColor = (event) => {
    quoteContainer.style.backgroundColor = event.target.title
}

const changeTextFormat = (event) => {
    const direction = event.target.title
    quoteContainer.classList.remove("right", "left", "center")
    quoteContainer.classList.toggle(direction)
}


const changeTextLayout = (event) => {
    const shape = event.target.title
    quoteContainer.classList.remove("format-square", "format-wide", "format-high")
    quoteContainer.classList.toggle(shape)
}


const resetStyles = () => {
    quoteContainer.classList.remove("format-square", "format-wide", "format-high", "right", "left", "center");
    quoteContainer.style = {
        color: "black",
        backgroundColor: "var(--light-green)",
        fontFamily: "'Work Sans', sans-serif"
    }
    fontSelect.options.selectedIndex = 0;
}



const selectFont = (event) => {
    console.log(event.target.value)
    quoteContainer.style.fontFamily = event.target.value;
}

const changeFontColor = (event) => {
    quoteContainer.style.color = event.target.title
}



// Eventlisteners
formatReset.addEventListener("click", resetStyles)

for (let button of textFormatSwitchButtons) {
    button.addEventListener("click", changeTextLayout)
}

for (let button of textLayoutSwitchButtons) {
    button.addEventListener("click", changeTextFormat)
}


for (let button of backgroundColorSwitchButtons) {
    button.addEventListener("click", changeBGColor)
}

for (let button of fontColorSwitchButtons) {
    button.addEventListener("click", changeFontColor)
}

fontSelect.addEventListener("change", selectFont)
