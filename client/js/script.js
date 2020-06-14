// Frequently Asked Questions toggle
const faqBtn = document.getElementsByClassName("faq-btn");
for (let i = 0; i < faqBtn.length; i++) {
    faqBtn[i].addEventListener("click", function() {
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
        panel.style.display = "none";
    } else {
        panel.style.display = "block";
    }
});
}


// contact-modal
const modal = document.querySelector('#contact-modal');
const modalBtn = document.querySelector('.header-content-btn');
const closeBtn = document.querySelector('.close');

//homepage
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
    modal.style.display = 'block';
}

// Close
function closeModal() {
    modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}

// hambuger nav
function hamburger() {
    const nav = document.querySelector('#mobile-nav-list');
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
}