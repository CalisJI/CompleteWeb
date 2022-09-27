let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('active')
}
window.onscroll = ()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('active');
}

const scrl = ScrollReveal({
    distance:'80px',duration:2000,reset:true
})
scrl.reveal('.home-text',{delay:100,origin:'left'})
scrl.reveal('.about',{delay:100,origin:'right'})
scrl.reveal('.services',{delay:100,origin:'left'})
scrl.reveal('.portfolio',{delay:100,origin:'right'})
scrl.reveal('.blog',{delay:100,origin:'left'})
scrl.reveal('.contact',{delay:100,origin:'right'})
scrl.reveal('.copyright',{delay:100,origin:'left'})

