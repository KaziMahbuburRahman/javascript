const circle = document.getElementById("circle")
// console.log(circle)
const observer = new IntersectionObserver((items)=>{
    items.forEach((item)=>{
        if(item.isIntersecting){
            console.log(items[0].target.id + " is visible")
        } else{
            console.log(items[0].target.id + " is not visible")
        }
    })
},{
    threshold: 0.5
})

observer.observe(circle)