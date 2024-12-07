const square = document.querySelectorAll("div")

// console.log(square)

const observer = new IntersectionObserver((squares)=>{
    squares.forEach((square)=>{
        if (square.isIntersecting) {
            // console.log(square)
           square.target.classList.add("visible")
        } else {
            square.target.classList.remove("visible")
        }
    })
})

// observer.observe()

square.forEach((square)=>observer.observe(square))