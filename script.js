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
      const increment = target / 100;

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
