const wrapper = document.querySelector(".burger_wrapper")
const button = document.querySelector(".burger_button")
const burger_close = document.querySelector(".burger_close_zone")
const burg_button = document.querySelector(".burger_button_close")

button.addEventListener('click',()=>{
    wrapper.style.display = 'block';
})

burger_close.addEventListener('click',()=>{
    wrapper.style.display = 'none';
})

burg_button.addEventListener('click',()=>{
    wrapper.style.display = 'none';
})


