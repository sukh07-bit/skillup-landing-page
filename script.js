document.addEventListener("DOMContentLoaded", () => {

  // Smooth scrolling for nav links
  document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', function(e){
      const href = this.getAttribute('href');
      if(href.startsWith("#") && href !== "#cta"){ // exclude CTA link
        e.preventDefault();
        const target = document.querySelector(href);
        if(target) target.scrollIntoView({behavior: "smooth"});
      }
    });
  });

  // CTA alert
  const ctaButton = document.querySelector('#ctaBtn');
  if(ctaButton) {
    ctaButton.addEventListener('click', (e) => {
      e.preventDefault(); // prevent jump
      alert('Welcome to SkillUp! 🚀');
    });
  }

});
