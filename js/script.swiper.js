
const swiper = new Swiper('.swiper', {
    
   
    autoplay: {
        delay: 3500
    },
    loop: true,
    speed: 600,
    // effect: "cube",
    pagination: {
      el:  '.swiper-pagination',
      type: 'progressbar'
    },

 
    navigation: {
        nextEl: '.home-slider__next',
        prevEl: '.home-slider__prev',
    },

});


swiper.on('slideChange', function (swiper) {
    document.querySelectorAll('.mask').forEach(item => {
        item.classList.remove('anim');
        item.style.animation = 'none';
        item.offsetHeight; /* trigger reflow */
        item.style.animation = null; 
        item.classList.add('anim')
    })
    document.querySelectorAll('.timer').forEach(item => {
        item.classList.remove('t-anim');
        item.style.animation = 'none';
        item.offsetHeight; /* trigger reflow */
        item.style.animation = null; 
        item.classList.add('t-anim')
    })

} )