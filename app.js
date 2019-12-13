const navSlide =() =>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.align');
    const navLink = document.querySelectorAll('.align a');
    const moreLink = document.querySelectorAll('.dropbtn')

    // bring nav in screen
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');


    // Animate links
    navLink.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation=''
        }else{
            link.style.animation = `animateLink 0.5s ease-in forwards ${index/7 +0.2}s`
        }
    })
    moreLink.forEach((link,index)=>{
        if(link.style.animation){
            link.style.animation=''
        }else{
            link.style.animation = `animateLink 0.5s ease-in forwards ${index/7 +0.2}s`
        }
    })

        burger.classList.toggle('toggle')
    })

    
}
navSlide()