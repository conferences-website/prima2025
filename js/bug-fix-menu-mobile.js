document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.navbar-collapse .nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.innerWidth < 992) { // only for mobile
          new bootstrap.Collapse(navbarCollapse).hide();
        }
      });
    });
  });