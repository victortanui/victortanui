
    const nextBtn = document.querySelector('.swiper-button-next');
    const prevBtn = document.querySelector('.swiper-button-prev');
     nextBtn.addEventListener('click', () => {
      swiper.slideNext();
    });
     prevBtn.addEventListener('click', () => {
      swiper.slidePrev();
    });
    
    //swiper slider
       
    const pagination = document.querySelector('.swiper-pagination');
     pagination.addEventListener('click', (event) => {
      if (event.target.classList.contains('swiper-pagination-bullet')) {
        const index = event.target.getAttribute('data-swiper-slide-index');
        swiper.slideTo(index);
       }
    });

    
    // swiper
    var swiper = new Swiper(".mySwiper",{
      slidesPerView: 1,
      spaceBetween: 50,
      loop:true,
      grabCursor:true,
      pagination: {
        el:".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextE1: ".swiper-button-next",
        prev1: ".swiper-button-prev",
      }
    });