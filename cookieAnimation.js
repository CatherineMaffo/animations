const cardTwo = document.querySelector('.cardTwo');
const text1 = document.querySelector('.t1')
const text2 = document.querySelector('.t2');
const btn = document.querySelector('.btn');
const img = document.querySelector('.image');

btn.addEventListener('click',()=>{
    cardTwo.classList.add("bgAnimation")
    text1.classList.add("t1Animation");
    text2.classList.add("t2Animation");
    btn.classList.add("btnAnimation");
    img.classList.add("imageAnimation");
})