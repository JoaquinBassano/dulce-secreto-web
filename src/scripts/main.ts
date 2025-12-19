// Main client-side scripts

// Smooth scroll to products section
const heroCtaContainer = document.getElementById('hero-cta-container');
if (heroCtaContainer) {
  heroCtaContainer.addEventListener('click', () => {
    const productsSection = document.getElementById('products');
    productsSection?.scrollIntoView({ behavior: 'smooth' });
  });
}

// Event delegation for WhatsApp buttons
document.addEventListener('click', (e) => {
  const target = e.target as HTMLElement;
  const whatsappBtn = target.closest('.whatsapp-btn') as HTMLElement;

  if (whatsappBtn) {
    const { product: productName, whatsapp: whatsappNumber } =
      whatsappBtn.dataset;

    if (productName && whatsappNumber) {
      const message = encodeURIComponent(
        `Hola! Me interesa pedir: ${productName}`
      );
      window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    }
  }
});

// Intersection Observer for fade-in animations on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all product cards
const productCards = document.querySelectorAll('.product-card');
productCards.forEach((card) => observer.observe(card));
