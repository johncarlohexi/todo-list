const getValueBtn = document.getElementById("getValue")
const removeAllBtn = document.getElementById("removeValue")
let getDiv = document.querySelector(".elements")

const getValueText = document.getElementById("valueText")


getValueBtn.addEventListener("click", () => {
    let newDiv = document.createElement("div")
    let removeBtn = document.createElement("button")
    removeBtn.innerHTML = "Remove"
    removeBtn.style.height = "100%"
    removeBtn.style.width = "100%"

    getContent = getValueText.value
    newDiv.textContent = getContent
    newDiv.appendChild(removeBtn)
    getDiv.appendChild(newDiv)

    removeBtn.addEventListener("click", () => {
        newDiv.remove()
    })

    removeAllBtn.addEventListener("click", () => {
        newDiv.remove("div")
    })

})