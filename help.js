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
            const targetId = e.target.getAttribute('data-target');
            const details = document.getElementById(targetId);

            if (details.classList.contains('show')) {
                details.classList.remove('show');
            } else {
                document.querySelectorAll('.help-details.show').forEach(detail => {
                    detail.classList.remove('show');
                });

                details.classList.add('show');
                setTimeout(() => {
                    details.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 10000);
            }
        });
    });
});