'strict use'

const fontColorSwitchButtons = document.getElementsByClassName("fontColorSwitch");
const backgroundColorSwitchButtons = document.getElementsByClassName("backgroundColorSwitch");
const textLayoutSwitchButtons = document.getElementsByClassName("textLayoutSwitch");
const textFormatSwitchButtons = document.getElementsByClassName("textFormatSwitch");
const randomBackgorundSwitchButton = document.querySelector(".randomBackgorundSwitch")
const fontSelect = document.querySelector("select")
const quoteContainer = document.querySelector("#quote-container")



// console.log(fontColorSwitchButtons)
// console.log(backgroundColorSwitchButtons)
// console.log(textLayoutSwitchButtons)
// console.log(textFormatSwitchButtons)
// console.log(randomBackgorundSwitchButton)
// console.log(fontSelect)


const changeBGColor = (event) => {
    quoteContainer.style.backgroundColor = event.target.title
    if (event.target.title == "black") {
        quoteContainer.style.color = "white"
    }
    if (event.target.title == "white") {
        quoteContainer.style.color = "black"
    }
}

const changeTextFormat = (event) => {
    const direction = event.target.title
    console.log(direction)
    quoteContainer.classList.remove("right", "left", "center")
    quoteContainer.classList.toggle(direction)
    console.log(quoteContainer.style.alignItems)
}
















for (let button of textLayoutSwitchButtons) {
    button.addEventListener("click", changeTextFormat)
 }


 for (let button of backgroundColorSwitchButtons) {
    button.addEventListener("click", changeBGColor)
 }