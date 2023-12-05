 
document.addEventListener('DOMContentLoaded', () => {
    // Select Carousel and Slides Div
    const carouselSlide = document.querySelector('.carousel-slides');
    const carouselImages = document.querySelectorAll('.carousel-slides img');

    // Buttons
    const prevBtn = document.querySelector('#arrowLeft');
    const nextBtn = document.querySelector('#arrowRight');
    let counter = 0;
    let size = carouselImages[0].clientWidth;

    // Ensure images are loaded to get the correct size
    window.addEventListener('load', () => {
        size = carouselImages[0].clientWidth;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });


    // Button listeners
    nextBtn.addEventListener('click', () => {
        if(counter > carouselImages.length - 1)
         return 
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter++;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    prevBtn.addEventListener('click', () => {
        if(counter <= 0)
         return
        carouselSlide.style.transition = 'transform 0.4s ease-in-out';
        counter--;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    });

    carouselSlide.addEventListener('transitionend',()=>{
        if(carouselImages[counter].id === 'lastClone'){
            carouselSlide.style.transition = "none"
            counter = carouselImages.length - 2;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }

        if(carouselImages[counter].id === 'firstClone'){
            carouselSlide.style.transition = "none"
            counter = carouselImages.length - counter - 1;
            carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
        }
    })

});
