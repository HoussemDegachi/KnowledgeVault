const lastDay = new Date(2023 , 1 , 17)
const today = new Date()
const daysLeft = ~~((lastDay - today) / (1000*60*60*24))

function setDaysLeft(){
    let daysHtmlSrc = document.querySelector(".discount__deal")
    daysHtmlSrc.innerHTML = "Up to 80% discount | Ends in "+ daysLeft +" Days"
}

setDaysLeft()