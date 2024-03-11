let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        // Make sure to include "#" in the query selector to select id
        document.querySelector('header nav ul li a[href*="#' + id + '"]').classList.add('active');
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


let navbarLinks = document.querySelectorAll(".navbar a");
// Assuming 'navLinks' is your NodeList of anchor tags as defined previously
navbarLinks.forEach(link => {
  link.addEventListener('click', function() {
    // Remove 'active' class from all links
    navbarLinks.forEach(link => {
      link.classList.remove('active');
    });
    // Add 'active' class to the clicked link
    this.classList.add('active');
  });
});



document.addEventListener('scroll', function() {
  var header = document.querySelector('header');
  var scrolled = window.scrollY > 0;

  // Toggle the 'scrolled' class based on scroll position
  header.classList.toggle('scrolled', scrolled);
});



