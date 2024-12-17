// Fungsi untuk menunda eksekusi permintaan
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// perpendek desc berita
const truncateText = (text, maxWords) => {
    if (!text) return "No description available.";
    const words = text.split(" ");
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
};

// JavaScript to handle mobile menu toggle
const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', () => {
  // Toggle the "aria-expanded" attribute
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', !isExpanded);

  // Toggle the visibility of the menu icons
  const icons = menuButton.querySelectorAll('svg');
  icons.forEach(icon => {
    icon.classList.toggle('hidden');
    icon.classList.toggle('block');
  });

  // Ensure hamburger icon shows first when closed, and X icon shows first when open
  if (!isExpanded) {
    icons[0].classList.remove('hidden'); // Hamburger icon
    icons[1].classList.add('hidden');    // X icon
  } else {
    icons[0].classList.add('hidden');   // Hamburger icon
    icons[1].classList.remove('hidden');// X icon
  }

  // Toggle the visibility of the mobile menu
  if (mobileMenu) {
    mobileMenu.classList.toggle('hidden');
  }
});

// Panggil fungsi saat halaman dimuat
window.onload = function () {
    fetchHotNews();
    fetchLatestNews();
    fetchRecomendNews();
    fetchCategoryNews();
};

// update terbaru modular js