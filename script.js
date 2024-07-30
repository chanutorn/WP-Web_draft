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
document.addEventListener('DOMContentLoaded', function() {
  // Function to toggle the menu
  function setupMenuToggle(menuId, toggleId) {
    const menu = document.getElementById(menuId);
    const toggle = document.getElementById(toggleId);
    
    if (menu && toggle) {
      toggle.addEventListener('click', function() {
        menu.classList.toggle('active');
      });
    }
  }

  // Setup menu toggles
  setupMenuToggle('js-menu', 'js-navbar-toggle');
  setupMenuToggle('js-menu-770', 'js-navbar-toggle-770');

  // Function to handle scroll event
  function handleScroll() {
    const nav = document.getElementById('nav-770');
    if (nav) {
      if (window.scrollY > 100) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }
  }

  // Initial scroll event
  handleScroll();

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Function to handle resizing for different menu types
  function handleResize() {
    const navMain = document.querySelector('nav.nav-main');
    const nav770 = document.getElementById('nav-770');

    if (window.innerWidth <= 770) {
      if (navMain) navMain.style.display = 'none';
      if (nav770) nav770.style.display = 'flex';
    } else {
      if (navMain) navMain.style.display = 'flex';
      if (nav770) nav770.style.display = 'none';
    }
  }

  // Initial resize event
  handleResize();

  // Add resize event listener
  window.addEventListener('resize', handleResize);
});

// experience
$(document).ready(function () {
  $(".eo-experience").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    variableWidth: true,
  });
});

$(document).ready(function () {
  $(".eo-experience-400").slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    centerMode: true,
    variableWidth: true,
  });
});

// chat
const chatIcon = document.querySelector('.chat-f');
  const chatWindow = document.querySelector('.chat-window');

  chatIcon.addEventListener('click', () => {
    chatWindow.classList.toggle('active');
  });

// stories
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.icon-stats-stories li .stories-num');

  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-target');
      const count = +counter.innerText.replace('+', '').replace(/,/g, '');
      const increment = target / 1000;

      if (count < target) {
        counter.innerText = Math.ceil(count + increment).toLocaleString();
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = '+' + target.toLocaleString();
      }
    };

    updateCount();
  });
});