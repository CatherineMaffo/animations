const message = document.querySelector('.message');
const btnToogle = document.querySelector('.btnToogle');


btnToogle.addEventListener('click',()=>{
    message.classList.toggle("open");
})

