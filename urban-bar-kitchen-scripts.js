document.addEventListener('DOMContentLoaded', () => {
    // Modal Functionality
    const modal = document.getElementById('diningModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDetails = document.getElementById('modalDetails');
    const closeModal = document.querySelector('.modal-close');
  
    const diningDetails = {
      'tapas': {
        title: 'Tapas & Small Plates',
        details: 'Perfect for sharing or snacking, our tasty tapas bring bold flavors to the table, ideal for a casual bite with friends.'
      },
      'mains': {
        title: 'Main Dishes',
        details: 'Indulge in hearty meals like our juicy lamb, crafted for a satisfying dining experience in a vibrant atmosphere.'
      },
      'afternoon-tea': {
        title: 'Seasonal Afternoon Tea',
        details: 'Enjoy an exquisite selection of savouries, sweet bites, and your choice of tea or bubbles in a relaxed setting, perfect for catching up with friends.'
      }
    };
  
    document.querySelectorAll('.details-btn').forEach(button => {
      button.addEventListener('click', () => {
        const dining = button.getAttribute('data-dining');
        modalTitle.textContent = diningDetails[dining].title;
        modalDetails.textContent = diningDetails[dining].details;
        modal.classList.add('active');
      });
    });
  
    closeModal.addEventListener('click', () => {
      modal.classList.remove('active');
    });
  
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  
    // Animation on Scroll
    const animatedElements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
  
    animatedElements.forEach(element => observer.observe(element));
  
   
  });