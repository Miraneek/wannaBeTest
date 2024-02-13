let list = document.querySelector("#list")

list.addEventListener("click", (event) => {
    alert(event.target.innerText)
})