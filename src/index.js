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


 const form = document.querySelector('#contact-form') 
 const Name = document.getElementById("name")
 const mail =document.getElementById("email")
 const phone =document.getElementById("phone")
 const subject =document.getElementById("subject")
 const message = document.getElementById("message")

function sendEmail(){
   const emailBody = `name : ${Name.value}<br> Email : ${mail.value}<br>phone : ${phone.value}<br>
                               message:${message.value}`
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "obay.kadour999@gmail.com",
    Password : "0EBC399EC76FFE26756C155651D7A86FE596",
    To : 'obay.kadour999@gmail.com',
    From : "obay.kadour999@gmail.com",
    Subject : subject.value,
    Body : emailBody
  }).then(message => {
    if (message == "OK") {
      let messageDiv = createMessageDiv("Email sent successfully!", "green");
      document.body.appendChild(messageDiv);

    } else {
      let messageDiv = createMessageDiv("Error in sending the email", "red");
      document.body.appendChild(messageDiv);

    }
  });
}
form.addEventListener("submit",(e)=>{
  e.preventDefault()
  sendEmail()
})



  function createMessageDiv(message, color) {
    const div = document.createElement('div');
    div.className = 'message';
    div.style.backgroundColor = color;
    div.textContent = message;
    return div;
}

