const slider = document.getElementById("slider");
let pressed = false;
let last;
let current;
let translate;

function animate() {
  translate = (current - last);
  last += translate / 10;
  console.log(current, last, slider.getBoundingClientRect().x);
  // x += (lFollowX - x) * friction;
  slider.style.transform = `translateX(${last}px)`;
  requestAnimationFrame(animate);
}

window.addEventListener("mousedown", (e) => {
  pressed = true;
  // last = current - slider.getBoundingClientRect().x;
  last = current;
});

window.addEventListener("mousemove", (e) => {
  e.preventDefault();
  if (pressed) current = e.pageX - slider.getBoundingClientRect().x;
});

window.addEventListener("mouseup", (e) => {
  pressed = false;
});

animate();