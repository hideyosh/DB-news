// Fungsi untuk menunda eksekusi permintaan
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// perpendek desc berita
const memotongText = (text, maxWords) => {
    if (!text) return "Deskripsi tidak ada.";
    const words = text.split(" ");
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
};

const menuButton = document.querySelector('[aria-controls="mobile-menu"]');
const mobileMenu = document.getElementById('mobile-menu');

menuButton.addEventListener('click', function() {
  const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', isExpanded ? 'false' : 'true');

  const icons = menuButton.querySelectorAll('svg');
  icons.forEach(icon => {
    icon.classList.toggle('hidden');
    icon.classList.toggle('block');
  });

  if (isExpanded === false) {
    icons[0].classList.add('hidden'); 
    icons[1].classList.remove('hidden'); 
  } else {
    icons[0].classList.remove('hidden'); 
    icons[1].classList.add('hidden');
  }

  if (mobileMenu !== null) {
    if (mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.remove('hidden');
    } else {
      mobileMenu.classList.add('hidden');
    }
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