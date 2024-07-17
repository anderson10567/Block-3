
 var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1.3,
   pagination: {
       el: ".swiper-pagination",
       clickable: true,
   },
  

 });




  function toggleVisibility() {
    
    var links = document.querySelectorAll('.Noswiper .noswiper__link');
    var lastThreeLinks = Array.from(links).slice(-3); 
    
    
    var button = document.querySelector('.my-button__menu');
    var downArrow = document.querySelector('.arrow__down');
    var upArrow = document.querySelector('.arrow__up');

    
    var areHidden = lastThreeLinks.every(link => link.classList.contains('hidden'));

    
    lastThreeLinks.forEach(link => {
        link.classList.toggle('hidden');
    });

    
    if (areHidden) {
        button.textContent = 'Скрыть ';
        downArrow.style.display = 'none';
        upArrow.style.display = '';
    } else {
        button.textContent = 'Показать все';
        downArrow.style.display = '';
        upArrow.style.display = 'none';
    }
}




   

  


  