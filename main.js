'strict use'
const allInputs = document.querySelectorAll("input")
const fontColorSwitchButtons = document.getElementsByClassName("fontColorSwitch");
const backgroundColorSwitchButtons = document.getElementsByClassName("backgroundColorSwitch");
const textLayoutSwitchButtons = document.getElementsByClassName("textLayoutSwitch");
const textFormatSwitchButtons = document.getElementsByClassName("textFormatSwitch");
const formatReset = document.querySelector(".randomBackgorundSwitch")
const fontSelect = document.querySelector("select")
const quoteContainer = document.querySelector("#quote-container")
const randomQuoteButton = document.getElementById("randomQuoteButton")
const showSettingsButton =document.getElementById("settingsButton")
const settingsContainer = document.querySelector(".settings-container")
const closeSettingsImg = document.querySelector("#close-settings-img")
const showSettingsButtonText = document.querySelector("#settingsTitle")

// functions
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
    for (let input of allInputs) {
        input.checked = false;
    }
}

const selectFont = (event) => {
    quoteContainer.style.fontFamily = event.target.value;
}

const changeFontColor = (event) => {
    quoteContainer.style.color = event.target.title
}

const toggleSettings = () => {
    // showSettingsButton.classList.toggle("hidden")
    settingsContainer.classList.toggle("hidden")
    if (showSettingsButtonText.innerText === "Show Settings") {
        showSettingsButtonText.innerText = "Hide Settings"
    } else {
        showSettingsButtonText.innerText = "Show Settings"
    }
}









// API fatching
const quoteTitle = document.getElementById("quote-title")
const quoteText = document.getElementById("quote-text")
const quoteAuthor = document.getElementById("quote-author")
const quoteElements = document.getElementsByClassName("flex-item")
let randomQuoteIndex = () => {
    return Math.floor((Math.random() * 9) + 1)
}
let randomPageIndex = () => {
    return Math.floor((Math.random() * 5000) + 1)
}


// start up fetch
fetch("https://quote-garden.herokuapp.com/api/v3/quotes")
    .then((Response) => Response.json())
    .then((data) => {
        let Startindex = randomQuoteIndex()
        // console.log(data.data[0].quoteText)
        quoteText.innerText = data.data[Startindex].quoteText
        quoteAuthor.innerText = data.data[Startindex].quoteAuthor

        for (let element of quoteElements) {
            element.style.visibility = "visible"
        }

    })

const getRandomQuote = () => {
    let page = randomPageIndex()
    let index = randomQuoteIndex()

    // console.log(page)

    fetch(
        `https://quote-garden.herokuapp.com/api/v3/quotes?page=${page}`
        )
        .then((Response) => Response.json())
        .then((data) => {
            // console.log("index: ", index)
            // console.log("page: ",data.pagination.currentPage)
            // console.log("lenght: ", data.data.length)
            // console.log(data.data[index].quoteText)
            // console.log("-----------------")
            quoteText.innerText = data.data[index].quoteText
            quoteAuthor.innerText = data.data[index].quoteAuthor
        })



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

randomQuoteButton.addEventListener("click", getRandomQuote)

closeSettingsImg.addEventListener("click", toggleSettings)
showSettingsButton.addEventListener("click", toggleSettings)
