document.addEventListener('DOMContentLoaded', function () {
    // инициализация слайдера
    let slider = new SimpleAdaptiveSlider('.sl1', {
        autoplay: false,
        interval: 5000,
        swipe: true,
    });
    let slider2 = new SimpleAdaptiveSlider('.sl2', {
        autoplay: false,
        interval: 5000,
        swipe: true,
    });

    let array = document.getElementsByClassName("nav__link");

    array[0].addEventListener('click', function (){
        let target = document.querySelector(".overview");
        target.scrollIntoView();
    })
    array[1].addEventListener('click', function (){
        let target = document.querySelector(".events");
        target.scrollIntoView();
    })
    array[2].addEventListener('click', function (){
        let target = document.querySelector(".about-us");
        target.scrollIntoView();
    })
    array[3].addEventListener('click', function (){
        let target = document.querySelector(".contact-us");
        target.scrollIntoView();
    })
    array[4].addEventListener('click', function (){
        let target = document.querySelector(".find-us");
        target.scrollIntoView();
    })
});