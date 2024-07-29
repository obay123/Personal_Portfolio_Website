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
navbarLinks.forEach(link => {
  link.addEventListener('click', function () {
    navbarLinks.forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
});



document.addEventListener('scroll', function () {
  var header = document.querySelector('header');
  var scrolled = window.scrollY > 0;
  header.classList.toggle('scrolled', scrolled);
});


var typingEffect = new Typed(".typedText", {
  strings: ["Web Developer", "Database Administrator", "Video Editor", "Self Learner"],
  loop: true,
  typeSpeed:100,
  backSpeed:80,
  backDelay:2000,
})


const observer = new IntersectionObserver((entries) =>{
  entries.forEach((entry)=>{
  console.log(entry)  
  if(entry.isIntersecting){
    entry.target.classList.add('show')
  }else{
    entry.target.classList.remove('show')
  }

  })
} )

 let skillBar = document.querySelectorAll(".skill-bar")
 let skillPer = document.querySelectorAll(".skill-per")


 
 skillPer.forEach((el)=> observer.observe(el)) 

 

 document.getElementById('contact-form').addEventListener('submit', async function(event) {
  event.preventDefault();

  const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value
  };

  const response = await fetch('/api/send', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
  });

  if (response.ok) {
      alert('Message sent successfully!');
  } else {
      alert('Failed to send the message.');
  }
});
