const wrapper = document.querySelector(".burger_wrapper")
const button = document.querySelector(".burger_button")
const burger_close = document.querySelector(".burger_close_zone")

button.addEventListener('click',()=>{
    wrapper.style.display = 'block';
})

burger_close.addEventListener('click',()=>{
    wrapper.style.display = 'none';
})