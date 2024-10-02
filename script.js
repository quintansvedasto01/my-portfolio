AOS.init();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting and reloading the page

    let params = {
        from_name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_v0e6mnv', 'template_eui6x9j', params)
        .then(() => {
            alert("Your message has been successfully sent!");
            document.getElementById('contactForm').reset(); // Fix the typo here
        })
        .catch((error) => {
            console.error('Error:', error);
            alert("Something went wrong. Please try again!");
        });
});


const sideBarMenu = document.querySelector('#mobile-menu');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');


menuBtn.addEventListener('click', () => {
    sideBarMenu.classList.toggle('left-0');
});
closeBtn.addEventListener('click', () => {
    sideBarMenu.classList.remove('left-0');
});

