// nav
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('js-nav-toggle');
    const menu = document.getElementById('js-menu');
  
    navToggle.addEventListener('click', function() {
      menu.classList.toggle('active');
    });
  
    window.addEventListener('scroll', function() {
      if (window.scrollY > 0) {
        document.querySelector('nav').classList.add('scrolled');
      } else {
        document.querySelector('nav').classList.remove('scrolled');
      }
    });
  });
  
  document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector('nav');
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  });
  
  // navBarToggle
  let mainNav = document.getElementById("js-menu");
  let navBarToggle = document.getElementById("js-navbar-toggle");
  
  navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
  });

// help
document.addEventListener('DOMContentLoaded', () => {
  const helpItems = document.querySelectorAll('.help-item');

  helpItems.forEach(item => {
      item.addEventListener('click', (e) => {
          const targetId = e.currentTarget.getAttribute('data-target');
          const details = document.getElementById(targetId);
          const icon = e.currentTarget.querySelector('i');

          if (details.classList.contains('show')) {
              details.classList.remove('show');
              icon.classList.remove('fa-circle-minus');
              icon.classList.add('fa-circle-plus');
          } else {
              document.querySelectorAll('.help-details.show').forEach(detail => {
                  detail.classList.remove('show');
              });

              document.querySelectorAll('.help-item i').forEach(ic => {
                  ic.classList.remove('fa-circle-minus');
                  ic.classList.add('fa-circle-plus');
              });

              details.classList.add('show');
              icon.classList.remove('fa-circle-plus');
              icon.classList.add('fa-circle-minus');
              
              setTimeout(() => {
                  details.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }, 10000);
          }
      });
  });
});