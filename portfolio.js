// Typing effect
const roles = ["Web Developer", "UI Designer", "Freelancer"];
let i = 0, j = 0, current = '', isDeleting = false;

function type() {
  const typingElement = document.querySelector('.typing');
  if (!typingElement) return;

  if (i < roles.length) {
    if (!isDeleting && j <= roles[i].length) {
      current = roles[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      current = roles[i].substring(0, j--);
    }

    if (j === roles[i].length) isDeleting = true;
    if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % roles.length;
    }

    typingElement.textContent = current;
    setTimeout(type, isDeleting ? 50 : 120);
  }
}
type();

// AOS init
AOS.init({
  duration: 1000,
  once: true
});