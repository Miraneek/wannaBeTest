function onMouseOver(){
    let obrazeky = document.querySelectorAll(".fortnite")
    
    obrazeky.forEach((obrazek) => {
        obrazek.addEventListener("mouseover", () =>{
            console.log("dcfvbhn")
            obrazek.style.width = "400px"
            obrazek.style.filter = "blur(0px)"
        })
        obrazek.addEventListener("mouseout", () =>{
            obrazek.style.width = "200px"
            obrazek.style.filter = "blur(2px)"
        })
    })

}

onMouseOver()