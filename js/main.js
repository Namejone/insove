// mobile-nav
const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcon = document.querySelector('.mnav__close-btn-icon');

// Define classes
const navOpendClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

// Toggle navigation
closeBtn.addEventListener('click', () => {
  if (mobileNav.classList.contains(navClosedClass)) {
    // Open nav: Add `left-0` and remove `-left-[300px]`
    mobileNav.classList.remove(navClosedClass);
    mobileNav.classList.add(navOpendClass);

    // Update icon
    closeBtnIcon.classList.remove(arrowRightClass);
    closeBtnIcon.classList.add(arrowLeftClass);
  } else {
    // Close nav: Add `-left-[300px]` and remove `left-0`
    mobileNav.classList.remove(navOpendClass);
    mobileNav.classList.add(navClosedClass);

    // Update icon
    closeBtnIcon.classList.remove(arrowLeftClass);
    closeBtnIcon.classList.add(arrowRightClass);
  }
});

// testimonial-slider
const swiper = new Swiper('.testimonial__active', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// team-slider
const swiperTeam = new Swiper('.team__slider', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
