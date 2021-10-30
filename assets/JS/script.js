const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  'Svezia',
  'Svizzera',
  'Gran Bretagna',
  'Germania',
  'Paradise'
]

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]


// main img scrolling with function

let slideI = 1;
showImg(slideI);

function plusSlides(n) {
  showImg(slideI += n);
}

function currentImage(n) {
  showImg(slideI = n);
}

function showImg(n) {
  let i;
  let slides = document.getElementsByClassName("main-slide");
  let slidesSide = document.getElementsByClassName("layer");
  
  if (n > slides.length) {slideI = 1}    
  if (n < 1) {slideI = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  if (n > slidesSide.length) {slideI = 1}    
  if (n < 1) {slideI = slidesSide.length}
  for (i = 0; i < slidesSide.length; i++) {
      slidesSide[i].style.display = "block";  
  }

  slides[slideI-1].style.display = "block";
  slidesSide[slideI-1].style.display = "none";   
}















