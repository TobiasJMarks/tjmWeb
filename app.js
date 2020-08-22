// Change color
const page = document.querySelector('.title')

page.addEventListener('mousemove', runEvent);

function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  document.getElementById('h1').style.color = `rgb(${e.offsetX}, ${e.offsetY}, 100)`;
}


const para = document.querySelector('.who')

para.addEventListener('mouseover',  gEvent);
function gEvent(e){
  if (event.type == 'mouseover') {
    event.target.style.background = 'pink'
  }
  if (event.type == 'mouseover'*2) {
    event.target.style.background = 'white'
  }

  // Thisis the original code
  // console.log(`EVENT TYPE: ${e.type}`);
  // document.querySelector('.text').style.color = 'rgb(255, 238, 80)';
};


// smooth slideshow
var slides = document.querySelectorAll('#slides .slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextSlide(){
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'slide showing';
}

// smooth scrolling
$('#navbar a, .btn').on('click',function(event){
  if(this.hash!=='') {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate(
          {
              scrollTop: $(hash).offset().top - 100
          },
          800
      );
  }
});

// scroll opacity
window.addEventListener('scroll', function() {
  if (window.scrollY > 150 ){
      document.querySelector('#navbar').style.opacity = 0.9;
  } else {
      document.querySelector('#navbar').style.opacity = 1;
  }
});

