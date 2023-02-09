const lastDay = new Date(2023 , 1 , 17)
const today = new Date()
const daysLeft = ~~((lastDay - today) / (1000*60*60*24))
const hiddenEl = document.querySelectorAll(".hidden")
const observer = new IntersectionObserver((enteries) => {
  enteries.forEach((entery) => {
    if(entery.isIntersecting){
      entery.target.classList.add('show')
    }else{
      entery.target.classList.remove('show')
    }
  })
})

hiddenEl.forEach((el) => observer.observe(el))

function setDaysLeft(){
    let daysEl = document.querySelector(".discount__deal")
    daysEl.innerHTML = "Up to 80% discount | Ends in "+ daysLeft +" Days"
}


setDaysLeft()