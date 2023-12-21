window.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper', {
    loop: true, //бесконечная прокрутка слайдов
    centeredSlides: true, //слайд центрируется в контейнере
    spaceBetween: 30, //расстояние между слайдами 30px
    slidesPerView: 1.4, //видимость слайда 1шт и еще чуть-чуть
    initialSlide: 1, //начало с 1 слайда
    autoplay: {
      delay: 1500, //слайды листаются с задержкой в 1,5 сек
      disableOnInteraction: false //если вручную переключать слайдер, autoplay не остановится
    }
  });
})

