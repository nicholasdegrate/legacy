// // modal
// const contactModal = document.querySelector('#contact-modal');
// const propertyBtn = document.querySelector('.send-message');
// const closeBtn = document.querySelector('.close');

// propertyBtn.addEventListener('click', openModal);
// closeBtn.addEventListener('click', closeModal);
// window.addEventListener('click', outsideClick);

// // Open
// function openModal() {
//     closeModal.style.display = 'block';
// }

// // Close
// function closeModal() {
//     closeModal.style.display = 'none';
// }

// // Close If Outside Click
// function outsideClick(e) {
//     if (e.target == modal) {
//         closeModal.style.display = 'none';
//     }
// }


// properties listing
let products = document.querySelectorAll('.product'); // get all products

for (i = 0; i < products.length; i++) {
    products[i].addEventListener('click', function(){
        showInfo(this.id);
    });
}

function showInfo(id) {
let infos = document.querySelectorAll('.info'); // get all infos
for (x = 0; x < infos.length; x++) {
        if (infos[x].id === 'info-' + id) {
            infos[x].className = 'info propertiesInfo';
        } else {
            infos[x].className = 'info hidden';
        } // Show info for clicked product only
    }
}