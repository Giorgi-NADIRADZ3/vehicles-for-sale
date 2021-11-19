// NAVBAR ONCLICK STARTER START 
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

// NAVBAR ONCLICK STARTER END

// LOGIN FORM ACTIVE START
document.querySelector('#login-btn').onclick = () =>
{
    document.querySelector('.login-form-container').classList.toggle('active');
}

document.querySelector('#close-login-form').onclick = () =>
{
    document.querySelector('.login-form-container').classList.remove('active');
}

// LOGIN FORM ACTIVE END

// SCROL NAVBAR CLOSE START
window.onscroll = () => {

if(window.scrollY > 0){
    document.querySelector(".header").classList.add('active');
}else{
    document.querySelector('.header').classList.remove('active');
}

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// SCROL NAVBAR CLOSE END

// ONLOAD NAVBAR  START
window.onload = () => {

if(window.scrollY > 0){
    document.querySelector(".header").classList.add('active');
}else{
    document.querySelector('.header').classList.remove('active');
}
}

// ONLOAD NAVBAR END


//home section image mouse moving effect start
document.querySelector('.home').onmousemove = (e) =>{
    document.querySelectorAll('.home-parallax').forEach(elm => {
        let speed = elm.getAttribute('data-speed');

        let x = (window.innerWidth - e.pageX * speed) / 90;
        let y = (window.innerHeight - e.pageY * speed) / 90;

        elm.style.transform = `translateX(${y}px) translateY(${x}px)`
    });
};

document.querySelector('.home').onmouseleave = () =>{
    document.querySelectorAll('.home-parallax').forEach(elm => {
        

        elm.style.transform = `translateX(0px) translateY(0px)`
    });
};
//home section image mouse moving effect end



var swiper = new Swiper(".vechiles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });


  
var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    nav:true,
    grabCursor:true,
    centeredSlides:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });


  var swiper = new Swiper(".reviews-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    nav:true,
    grabCursor:true,
    centeredSlides:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });


