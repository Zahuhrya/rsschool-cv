const circles = document.querySelectorAll(".circle")
const circle_strokes = document.querySelectorAll(".circle_stroke")
const prices = document.querySelectorAll(".price")
const input = document.querySelector(".PaF_input")
const wrapper = document.querySelector(".burger_wrapper")
const button = document.querySelector(".burger_button")
const burger_close = document.querySelector(".burger_close_zone")
circles.forEach(element => element.addEventListener('click',(event)=>{
    let ind = Number(element.id);
    for(var i = 0; i < circles.length; i++){
        circle_strokes[i].classList.remove('active_stroke');
        prices[i].classList.remove('active');
    }
    if(screen.width > 1599){
        prices[ind].classList.add("active");
        let values = prices[ind].textContent;
        input.value = values;
    } else if(screen.width < 1599 && screen.width > 999){
        prices[ind+1].classList.add("active");
        let values = prices[ind+1].textContent;
        input.value = values;
    } else if(screen.width < 999) {
        prices[ind+3].classList.add("active");
        let values = prices[ind+3].textContent;
        input.value = values;
    }
    circle_strokes[element.id].classList.add("active_stroke")
}));

input.addEventListener('input',()=>{
    for(elements of prices){
        if(String(elements.textContent) === String("$"+input.value)){
            for(var i = 0; i < circles.length; i++){
                circle_strokes[i].classList.remove('active_stroke');
                prices[i].classList.remove('active');
            }
            let index = Number(elements.id);
            if(screen.width > 1599){
                prices[index].classList.add("active")
                circle_strokes[Number(elements.id)].classList.add("active_stroke")
                let value = prices[index].textContent;
            }else if(screen.width < 1599 && screen.width>999){
                prices[index+1].classList.add("active")
                circle_strokes[Number(elements.id)-1].classList.add("active_stroke")
            } else if(screen.width < 999) {
                prices[index].classList.add("active")
                circle_strokes[Number(elements.id)-3].classList.add("active_stroke")
            }
        }
    }
})

button.addEventListener('click',()=>{
    wrapper.style.display = 'block';
})

burger_close.addEventListener('click',()=>{
    wrapper.style.display = 'none';
})
