const box = document.querySelector('.box-lines')
const line1 = document.getElementById('line1');
const line2 = document.getElementById('line2');
const line3 = document.getElementById('line3');
box.addEventListener('click',()=>{
    setTimeout(function() { 
        line2.classList.toggle('line-off')
        line1.classList.toggle('line1-rotate')
        line3.classList.toggle('line3-rotate')
    }, 100);
    
})