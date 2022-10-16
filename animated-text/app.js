const animatedTextElements = document.querySelectorAll("h1");
const observer = new IntersectionObserver((entries) => {
     entries.forEach((eachEntry) => {
          if (eachEntry.isIntersecting) {
               eachEntry.target.classList.add("animate");
          } else {
               eachEntry.target.classList.remove("animate");
          }
     });
});

animatedTextElements.forEach((eachText) => {
     return observer.observe(eachText);
});
