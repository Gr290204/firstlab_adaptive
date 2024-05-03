// import Swiper from 'swiper-bundle.mjs';
// import 'swiper/swiper-bundle.css';

var swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});


const featuresItems = document.querySelectorAll('.features__item');

featuresItems.forEach(item => {
  const title = item.querySelector('.features__item-title');

  title.addEventListener('mouseenter', () => {
    featuresItems.forEach(item => {
      item.querySelector('.features__item-title').classList.remove('active');
    });

    title.classList.add('active');
  });
});