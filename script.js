// Smooth scroll for navigation
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form interaction
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    form.innerHTML = '<div class="thank-you">Thank you for reaching out! We will get back to you soon.</div>';
  });
}

// Contact form close button functionality
const closeBtn = document.querySelector('.contact-close-btn');
const contactCard = document.querySelector('.contact-card');
if (closeBtn && contactCard) {
  closeBtn.addEventListener('click', function() {
    contactCard.style.transition = 'opacity 0.3s, transform 0.3s';
    contactCard.style.opacity = '0';
    contactCard.style.transform = 'scale(0.96) translateY(20px)';
    setTimeout(() => {
      contactCard.style.display = 'none';
    }, 300);
  });
}

// Contact modal open/close logic
function openContactModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) {
    modal.style.display = 'block';
    setTimeout(() => { modal.classList.add('active'); }, 10);
    document.body.classList.add('modal-open');
  }
}
function closeContactModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) {
    modal.classList.remove('active');
    setTimeout(() => { modal.style.display = 'none'; }, 300);
    document.body.classList.remove('modal-open');
  }
}
// Open modal on button click
const openBtns = document.querySelectorAll('.open-contact-btn');
openBtns.forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    openContactModal();
  });
});
// Close modal on close button or backdrop click
const modal = document.getElementById('contact-modal');
if (modal) {
  modal.addEventListener('click', function(e) {
    if (e.target.classList.contains('contact-close-btn') || e.target.classList.contains('contact-modal-backdrop')) {
      closeContactModal();
    }
  });
} 