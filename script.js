
hamburger.addEventListener('click', () => {
  nav.classList.toggle('open');
  hamburger.classList.toggle('open');
});


/* ---- SMOOTH SCROLL TO SECTIONS ---- */
document.querySelectorAll('header nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    nav.classList.remove('open');
    hamburger.classList.remove('open');
  });
});


/* ---- CONTACT FORM VALIDATION ---- */
const contactForm = document.querySelector('#contact form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = contactForm.querySelector('input[name="name"]') || contactForm.querySelector('#name');
    const email = contactForm.querySelector('input[name="email"]') || contactForm.querySelector('#email');
    const message = contactForm.querySelector('textarea[name="message"]') || contactForm.querySelector('#message');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      alert('Please fill out all fields.');
      return;
    }

    // simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      alert('Please enter a valid email address.');
      return;
    }

    // success message
    alert(`Thank you, ${name.value}! Your message has been sent.`);
    contactForm.reset();
  });
}


/* ---- DYNAMIC FOOTER YEAR ---- */
const yearSpan = document.createElement('span');
yearSpan.textContent = new Date().getFullYear();
const footer = document.querySelector('footer');
if (footer) {
  const p = footer.querySelector('p');
  if (p) {
    p.textContent = `© ${yearSpan.textContent} BON VOYAGE – All rights reserved.`;
  } else {
    footer.insertAdjacentHTML('beforeend', `<p>© ${yearSpan.textContent} BON VOYAGE – All rights reserved.</p>`);
  }
}
