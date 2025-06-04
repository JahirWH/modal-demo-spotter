function openModal() {
    document.getElementById('modalOverlay').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeModal(event) {
    if (event && event.target !== event.currentTarget) return;
    document.getElementById('modalOverlay').classList.remove('active');
    document.body.style.overflow = 'auto';
}

function submitForm() {
    const form = document.getElementById('contactForm');
    if (form.checkValidity()) {
        alert('Request sent successfully!');
        closeModal();
        form.reset();
    } else {
        form.reportValidity();
    }
}

// Cerrar modal con Escape
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// efecto gooey hover
 const navLinks = document.querySelectorAll('#navLinksAuto li');
 const gooeyBg = document.getElementById('gooeyBgAuto');

 navLinks.forEach((link, index) => {
     link.addEventListener('mouseenter', () => {
         const linkRect = link.getBoundingClientRect();
         const navRect = link.parentElement.getBoundingClientRect();
         
         const leftPosition = linkRect.left - navRect.left;
         const width = linkRect.width;
         
         gooeyBg.style.transform = `translateX(${leftPosition}px)`;
         gooeyBg.style.width = `${width}px`;
         gooeyBg.style.opacity = '1';
     });
 });

 document.getElementById('navLinksAuto').addEventListener('mouseleave', () => {
     gooeyBg.style.opacity = '0';
 });