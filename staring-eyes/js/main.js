const eyes = document.getElementById("eyes");
let eyesRadiusDefault = 20;
const face = document.getElementById("face");
let oldScrollY = 0;
document.addEventListener("scroll", (e) => {
     let scrollY = this.scrollY;
     if (scrollY > oldScrollY && scrollY < window.innerHeight)
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
     oldScrollY = scrollY;
});

document.addEventListener("mousemove", (e) => {
     const mousex = e.clientX;
     const mousey = e.clientY;

     const rect = face.getBoundingClientRect();
     const faceX = rect.x + rect.width / 2;
     const faceY = rect.y + rect.height / 2;
     const m = (mousey - faceY) / (mousex - faceX);
     const d = Math.sqrt((faceX - mousex) ** 2 + (faceY - mousey) ** 2);
     let a,
          a1,
          a2,
          b,
          b1,
          b2,
          eyesRadius = eyesRadiusDefault;
     if (d < eyesRadius) {
          eyesRadius = d;
     }
     a1 = faceX + Math.sqrt(eyesRadius ** 2 / (1 + m ** 2));
     a2 = faceX - Math.sqrt(eyesRadius ** 2 / (1 + m ** 2));
     b1 = faceY - m * (faceX - a1);
     b2 = faceY - m * (faceX - a2);
     d1 = Math.sqrt((b1 - mousey) ** 2 + (a1 - mousex) ** 2);
     d2 = Math.sqrt((b2 - mousey) ** 2 + (a2 - mousex) ** 2);
     if (d1 < d2) {
          a = a1;
          b = b1;
     } else {
          a = a2;
          b = b2;
     }

     eyes.style.translate = `${a - faceX}px ${b - faceY}px`;
});

// formu
