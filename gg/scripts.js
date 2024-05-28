document.addEventListener("DOMContentLoaded", function() {
    // Highlight the current page in the navigation menu
    const navMenu = document.getElementById('nav-menu');
    const links = navMenu.getElementsByTagName('a');
    const currentPage = window.location.pathname.split('/').pop();
    for (let link of links) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    }

    // Form validation and price calculation for the order form
    const menuPrices = {
        'samosa': 50,
        'pakora': 60,
        'butter-chicken': 250,
        'palak-paneer': 200,
        'chole': 180,
        'biryani': 220,
        'gulab-jamun': 80,
        'rasgulla': 90,
        'kulfi': 100,
        'jalebi': 70
    };

    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        const menuSelect = document.getElementById('menu');
        const quantityInput = document.getElementById('quantity');
        const totalPriceInput = document.getElementById('total');

        function updateTotalPrice() {
            const selectedItem = menuSelect.value;
            const quantity = parseInt(quantityInput.value) || 1;
            const totalPrice = menuPrices[selectedItem] * quantity;
            totalPriceInput.value = `₹${totalPrice}`;
        }

        menuSelect.addEventListener('change', updateTotalPrice);
        quantityInput.addEventListener('input', updateTotalPrice);
        updateTotalPrice(); // Initialize total price
    }

    // FAQ section interaction
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        
        question.addEventListener('click', () => {
            const isVisible = answer.style.display === 'block';
            faqItems.forEach(i => i.querySelector('.faq-answer').style.display = 'none');
            answer.style.display = isVisible ? 'none' : 'block';
        });
    });
});
