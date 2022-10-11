const circles = document.querySelectorAll(".circle")
const circle_strokes = document.querySelectorAll(".circle_stroke")
const prices = document.querySelectorAll(".price")
const input = document.querySelector(".PaF_input")
circles.forEach(element => element.addEventListener('click',()=>{
    let ind = Number(element.id);
    for(var i = 0; i < circles.length; i++){
        circle_strokes[i].classList.remove('active_stroke');
        prices[i].classList.remove('active');
    }
    if(screen.width > 1599){
        prices[ind].classList.add("active")
        let value = prices[ind].textContent;
        input.placeholder = value;
    }else if(screen.width < 1599 && screen.width>999){
        prices[ind+1].classList.add("active")
        let value = prices[ind+1].textContent;
        input.placeholder = value;
    } else if(screen.width < 999) {
        prices[ind+3].classList.add("active")
        let value = prices[ind+3].textContent;
        input.placeholder = value;
    }

    circle_strokes[element.id].classList.add("active_stroke")

}));