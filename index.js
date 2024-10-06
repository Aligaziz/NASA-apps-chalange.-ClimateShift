const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');
const totalSlides = slides.length;
let currentIndex = 0;

function autoSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;

    slider.scrollTo({
        left: currentIndex * slider.clientWidth,
        behavior: 'smooth'
        });
    }
        
setInterval(autoSlide, 3000);
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); 
      }
    });
  }
  
  let observer = new IntersectionObserver(handleIntersection);
  
 
  let elements = document.querySelectorAll('.animate');
  elements.forEach(el => observer.observe(el));