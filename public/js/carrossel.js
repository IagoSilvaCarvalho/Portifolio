const carrossel = document.querySelector('.glider');

new Glider( carrossel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: '.dots',
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    scrollLock: true,
    
  });
  