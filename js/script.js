const $ = document;

// Active class for nav links
const links = document.querySelectorAll(".nav-link");

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    links.forEach((link) => {
      link.classList.remove('active');
    });
    e.target.classList.add('active');
  });
});

// fixing header on the top when scrolling
const navigation = $.querySelector("nav")  

window.addEventListener("scroll" , function(){
   if(window.scrollY > 50){
     navigation.classList.add("fixedd")
   }else if (window.scrollY < 50){
    navigation.classList.remove("fixedd")
   }
})

// Responsive Btn 
const btn = $.querySelector("#res-btn");
const mobileLinks = $.querySelector("#mobile-links");
const closeBtn = $.querySelector("#close-btn");

btn.addEventListener("click", () => {
  mobileLinks.classList.remove("hidden");
  mobileLinks.classList.add("flex");
  mobileLinks.classList.add("slide-in");
});

closeBtn.addEventListener("click", () => {
  mobileLinks.classList.remove("slide-in");
  mobileLinks.classList.add("slide-out");
  setTimeout(() => {
    mobileLinks.classList.add("hidden");
    mobileLinks.classList.remove("flex");
    mobileLinks.classList.remove("slide-out");
  }, 500);
});

//Animation for main
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
      const desc = document.querySelector('.desc');
      const lottie = $.querySelector(".lottie");
      const aboutUs = $.querySelector(".about-us");
      const skills = $.querySelector(".skills")
      desc.style.opacity = '1';
      lottie.style.opacity = '1'
      aboutUs.style.opacity = '1'
      skills.style.opacity = '1'
      desc.style.transform = 'translateY(0)';
      lottie.style.transform = 'translateY(0)'
      aboutUs.style.transform = 'translateX(0)'
      skills.style.transform = 'translateX(0)'
    }, 500);
  });
  