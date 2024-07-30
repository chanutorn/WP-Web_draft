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
  let mainNavMain = document.getElementById("js-menu");
  let navBarToggleMain = document.getElementById("js-navbar-toggle");

  navBarToggleMain.addEventListener("click", function() {
      mainNavMain.classList.toggle("active");
  });

  let mainNav770 = document.getElementById("js-menu-770");
  let navBarToggle770 = document.getElementById("js-navbar-toggle-770");

  navBarToggle770.addEventListener("click", function() {
      mainNav770.classList.toggle("active");
  });

  window.addEventListener('scroll', function() {
    const nav = document.getElementById('nav-770');
    if (window.scrollY > 100) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
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