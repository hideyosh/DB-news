// Variabel
const technologyBtn = document.getElementById("technology");
const sportsBtn = document.getElementById("sports");
const politicsBtn = document.getElementById("politics");
const entertainmentBtn = document.getElementById("entertainment");
const searchBtn = document.getElementById("searchBtn");

// Variabel API
const API_KEY = "pub_61131e87fc5896caa0a8f3e2a9132ebe7db7c";
const COUNTRY = "id";
const HOT_NEWS = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=${COUNTRY}&language=id`;
const LATEST_NEWS = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=${COUNTRY}&language=${COUNTRY}`;
const RECOMEND_NEWS = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=${COUNTRY}&language=${COUNTRY}&q=rekomendasi`;
const SCIENCE_NEWS = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=${COUNTRY}&language=${COUNTRY}&category=science`;
const SPORT_NEWS = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=${COUNTRY}&language=${COUNTRY}&category=sports`;


// Fungsi untuk menunda eksekusi permintaan
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

// Hot News
const fetchHotNews = async () => {
    // Cek apakah berita sudah ada di sessionStorage
    const cachedNews = sessionStorage.getItem('hotNews');
    const lastFetched = sessionStorage.getItem('lastFetchedDate'); // Tanggal terakhir data di-fetch
    const today = new Date().toDateString(); // Tanggal hari ini dalam format string

    if (cachedNews && lastFetched === today) {
        // Jika data ada dan tanggal sama dengan hari ini, tampilkan data dari cache
        const data = JSON.parse(cachedNews);
        displayNews(data);
    } else {
        // Jika data belum ada atau sudah berganti hari, ambil dari API
        try {
            await delay(5000); // Delay 5 detik antara permintaan

            const response = await fetch(HOT_NEWS);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            sessionStorage.setItem('hotNews', JSON.stringify(data)); // Simpan data ke sessionStorage
            sessionStorage.setItem('lastFetchedDate', today); // Simpan tanggal hari ini

            displayNews(data);
        } catch (error) {
            console.error("Failed to fetch hot news:", error);
            hotNewsContainer.innerHTML = `<h5>Error: ${error.message}</h5>`;
        }
    }
};

// Latest News
const fetchLatestNews = async () => {
    // Cek apakah berita sudah ada di localStorage
    const cachedLatestNews = sessionStorage.getItem('latestNews');
    const lastFetched = sessionStorage.getItem('lastFetchedDate'); // Tanggal terakhir data di-fetch
    const today = new Date().toDateString(); // Tanggal hari ini dalam format string

    if (cachedLatestNews && lastFetched === today) {
        // Jika data sudah ada di cache, langsung tampilkan
        const data = JSON.parse(cachedLatestNews);
        displayLatestNews(data);
    } else {
        // Jika data belum ada, ambil dari API
        try {
            await delay(5000); // Delay 5 detik antara permintaan

            const response = await fetch(LATEST_NEWS);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            sessionStorage.setItem('latestNews', JSON.stringify(data)); // Simpan data ke cache
            sessionStorage.setItem('lastFetchedDate', today);

            displayLatestNews(data);
        } catch (error) {
            console.error("Failed to fetch hot news:", error);
            hotNewsContainer.innerHTML = `<h5>Error: ${error.message}</h5>`;
        }
    }
};

// Recomendation News
const fetchRecomendNews = async () => {
    // Cek apakah berita sudah ada di localStorage
    const cachedRecomendNews = sessionStorage.getItem('recomendNews');
    const lastFetched = sessionStorage.getItem('lastFetchedDate'); // Tanggal terakhir data di-fetch
    const today = new Date().toDateString(); // Tanggal hari ini dalam format string

    if (cachedRecomendNews && lastFetched === today) {
        // Jika data sudah ada di cache, langsung tampilkan
        const data = JSON.parse(cachedRecomendNews);
        displayRecomendNews(data);
    } else {
        // Jika data belum ada, ambil dari API
        try {
            await delay(5000); // Delay 5 detik antara permintaan

            const response = await fetch(RECOMEND_NEWS);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            sessionStorage.setItem('recomendNews', JSON.stringify(data)); // Simpan data ke cache
            sessionStorage.setItem('lastFetchedDate', today);

            displayRecomendNews(data);
        } catch (error) {
            console.error("Failed to fetch hot news:", error);
            hotNewsContainer.innerHTML = `<h5>Error: ${error.message}</h5>`;
        }
    }
};

// Science and sports news
const fetchCategoryNews = async () => {
    const cachedScienceNews = sessionStorage.getItem('scienceNews');
    const cachedSportsNews = sessionStorage.getItem('sportsNews');
    const lastFetched = sessionStorage.getItem('lastFetchedDate'); // Tanggal terakhir data di-fetch
    const today = new Date().toDateString(); // Tanggal hari ini dalam format string

    if (cachedScienceNews && cachedSportsNews && lastFetched === today) {
        // Jika data sudah ada di cache, langsung tampilkan
        const dataScience = JSON.parse(cachedScienceNews);
        const dataSports = JSON.parse(cachedSportsNews);
        displayCategoryNews(dataScience, dataSports);
    } else {
        // Jika data belum ada, ambil dari API
        try {
            await delay(5000); // Delay 5 detik antara permintaan

            const responseScience = await fetch(SCIENCE_NEWS);
            const responseSports = await fetch(SPORT_NEWS);
            if (!responseScience.ok) throw new Error(`HTTP error! status: ${responseScience.status}`);
            if (!responseSports.ok) throw new Error(`HTTP error! status: ${responseSports.status}`);

            const dataScience = await responseScience.json();
            const dataSports = await responseSports.json();
            sessionStorage.setItem('cachedScienceNews', JSON.stringify(dataScience)); // Simpan data ke cache
            sessionStorage.setItem('cachedSportsNews', JSON.stringify(dataSports)); // Simpan data ke cache
            sessionStorage.setItem('lastFetchedDate', today);

            displayCategoryNews(dataScience, dataSports);
        } catch (error) {
            console.error("Failed to fetch hot news:", error);
            categoryNewsContainer.innerHTML = `<h5>Error: ${error.message}</h5>`;
        }
    }
};

// Fungsi untuk menampilkan berita
const displayNews = (data) => {
    const newsData = data.results;

    const hotNewsContainer = document.getElementById('hotNewsContainer'); // Pastikan elemen ini ada di HTML
    hotNewsContainer.innerHTML = ""; // Reset kontainer

    // Tampilkan berita utama pertama (Hot News)
    const headline = newsData[0]; // Ambil berita utama pertama
    const oneNewsHTML = `
            <div>
                <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5">HOT NEWS</h1>
                <a href="${headline.link}" class="block font-semibold font-serif text-2xl text-dark mb-2 w-10/12 hover:underline" target="_blank">${headline.title}</a>
                <a href="#" class="block capitalize font-medium font-flex text-base text-primary-default w-10/12 tracking-wide mb-5">${headline.category || "General"}</a>
                <div class="relative group">
                    <a href="${headline.link}" target="_blank">
                    <img class="w-full h-96 object-cover rounded-lg"capitalize
                        src="${headline.image_url || './assets/img/404.jpg'}" alt="${headline.title}">
                    <div class="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-35 rounded-lg transition-opacity"></div>
                    </a>
                </div>
            </div>
      `;

    // Tampilkan 3 berita lainnya (Other News)
    const otherNews = newsData.slice(1, 4); // Ambil berita kedua hingga keempat
    const otherNewsHTML = otherNews.map(news => `
        <div class="flex items-start pl-14 mb-6">
          <!-- Bagian Teks -->
          <div class="flex-1">
            <a class="block font-semibold font-serif text-lg text-dark mb-2 hover:underline w-10/12 tracking-wide"
              href="${news.link}" target="_blank">${news.title}</a>
            <p class="font-medium font-roboto text-sm text-dark mb-2 w-9/12 text-balance">${news.description || "No description available."}</p>
            <a href="#" class="block capitalize font-medium font-flex text-base text-primary-default tracking-wide w-10/12 mb-3">${news.category || "General"}</a>
          </div>
          <!-- Bagian Gambar -->
          <div class="relative group mr-12">
            <a href="${news.link}" target="_blank">
              <img class="w-56 h-32 object-cover rounded-lg"
                src="${news.image_url || './assets/img/404.jpg'}" alt="${news.title}">
              <div class="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-35 rounded-lg transition-opacity"></div>
            </a>
          </div>
        </div>
      `).join('');

    // Tambahkan ke kolom kedua (Other News)
    hotNewsContainer.innerHTML += `
        <div class="bg-secondary grid grid-cols-2 gap-4 ps-11 py-12 shadow-md mb-7">
            ${oneNewsHTML}
            <div>
                ${otherNewsHTML}
            </div>
        </div>
    `;
};

// Fungsi untuk menampilkan Latest News
const displayLatestNews = (data) => {
    const latestNewsData = data.results;

    const latestNewsContainer = document.getElementById('latestNewsContainer'); // Pastikan elemen ini ada di HTML
    latestNewsContainer.innerHTML = ""; // Reset kontainer

    // Tampilkan Latest News
    const latestNews = latestNewsData.slice(0, 4); // Ambil berita kedua hingga keempat
    const latestNewsHTML = latestNews.map(news => `
            <div>
                <div class="relative group">
                    <a href="${news.link}">
                        <img class="rounded-lg w-full h-48 object-cover" src="${news.image_url || './assets/img/404.jpg'}"
                        alt="${news.title}">
                        <div class="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-35 rounded-lg transition-opacity">
                        </div>
                    </a>
                </div>
                <div class="mt-3">
                    <a href="${news.link}" class="block w-full font-serif font-semibold text-lg text-dark hover:underline">${news.title}</a>
                    <a href="#" class="block capitalize font-medium font-flex text-base text-primary-default tracking-wide mt-2">${news.category || "General"}</a>
                </div>
            </div>
      `).join('');

    latestNewsContainer.innerHTML += `
      <div class="bg-white px-11 py-10 mt-7 mb-5">
        <div class="flex justify-between">
            <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5">LATEST NEWS</h1>
            <a href="#"
                class="flex font-roboto font-medium text-primary-default items-center transform transition-transform duration-300 hover:scale-110 ">
                See All
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                class="bi bi-arrow-right cl ml-2" fll viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
            </a>
        </div>
        <div class="grid grid-cols-4 gap-10">
            ${latestNewsHTML}
        </div>
      </div>
    `;
};

// Fungsi untuk menampilkan Recomend News
const displayRecomendNews = (data) => {
    const recomendNewsData = data.results;

    const recomendNewsContainer = document.getElementById('recomendNewsContainer'); // Pastikan elemen ini ada di HTML
    recomendNewsContainer.innerHTML = ""; // Reset kontainer

    // Tampilkan Latest News
    const recomendNews = recomendNewsData.slice(0, 4); // Ambil berita kedua hingga keempat
    const recomendNewsHTML = recomendNews.map(news => `
            <div>
                <div class="relative group">
                    <a href="${news.link}">
                        <img class="rounded-lg w-full h-48 object-cover" src="${news.image_url || './assets/img/404.jpg'}"
                        alt="${news.title}">
                        <div class="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-35 rounded-lg transition-opacity">
                        </div>
                    </a>
                </div>
                <div class="mt-3">
                    <a href="${news.link}" class="block w-full font-serif font-semibold text-lg text-dark hover:underline">${news.title}</a>
                    <a href="#" class="block capitalize font-medium font-flex text-base text-primary-default tracking-wide mt-2">${news.category || "General"}</a>
                </div>
            </div>
      `).join('');

    //   const recomendHeaderHTML = recomendNews.

    recomendNewsContainer.innerHTML += `
      <div class="bg-white px-11 py-10 mt-7 mb-5">
        <div class="flex justify-between">
            <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5">RECOMMENDATION</h1>
            <a href="#"
                class="flex font-roboto font-medium text-primary-default items-center transform transition-transform duration-300 hover:scale-110 ">
                See All
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                class="bi bi-arrow-right cl ml-2" fll viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
            </a>
        </div>
       <div class="grid grid-rows-1 gap-10">
        <div class="grid grid-cols-1">
        <div>
          <div class="relative group">
            <a href="#" class="bg-[url('./assets/img/hi-res-42500494c29628884236755b8b91d0b5_crop_north.jpg')] rounded-lg bg-cover bg-center h-104 w-full flex items-end p-9">
              <div class="bg-black w-11/12 text-light bg-opacity-40 py-5 ps-5 pe-2 rounded-lg">
                <h1 class="font-serif font-semibold text-2xl tracking-wide mb-2">Pemerintah Jepang Siapkan Kebijakan Ramah Lingkungan untuk Hadapi Perubahan Iklim</h1>
                <p class="font-roboto text-lg font-medium w-11/12 mb-3">Dalam upaya menanggulangi dampak perubahan iklim, Pemerintah Jepang mengumumkan serangkaian kebijakan ramah lingkungan yang akan diterapkan dalam beberapa tahun ke depan.</p>
                <p class="font-flex text-base font-medium tracking-wide">Internasional</p>
              </div>
              <div class="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-35 rounded-lg transition-opacity"></div>
            </a>
          </div>
        </div>
      </div>
            <div class="grid grid-cols-4 gap-10">
                ${recomendNewsHTML}
            </div>
        </div>
      </div>
    `;
};

// Fungsi untuk menampilkan Science and Sports News
const displayCategoryNews = (dataScience, dataSports) => {
    const scienceNewsData = dataScience.results;
    const sportsNewsData = dataSports.results;

    const categoryNewsContainer = document.getElementById('categoryNewsContainer'); // Pastikan elemen ini ada di HTML
    categoryNewsContainer.innerHTML = ""; // Reset kontainer

    // Science
    const scienceNews = scienceNewsData.slice(0, 2);
    const scienceNewsHTML = scienceNews.map(newsScience => `
            <div>
                <div class="relative group">
                    <a href="${newsScience.link}">
                    <img class="rounded-lg w-full h-48 object-cover" src="${newsScience.image_url || './assets/img/404.jpg'}"
                        alt="${newsScience.title}">
                    <div class="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-35 rounded-lg transition-opacity">
                    </div>
                    </a>
                </div>
                <div class="mt-3">
                    <a href="${newsScience.link}" class="block w-full h-25 font-serif font-semibold text-lg text-dark hover:underline">${newsScience.title}</a>
                    <a href="#" class="block capitalize font-medium font-flex text-base text-primary-default tracking-wide mt-2">${newsScience.category || "General"}</a>
                </div>
            </div>
    `).join('');

    // Sports
    const sportsNews = sportsNewsData.slice(0, 2);
    const sportsNewsHTML = sportsNews.map(newsSports => `
            <div>
                <div class="relative group">
                    <a href="${newsSports.link}">
                    <img class="rounded-lg w-full h-48 object-cover" src="${newsSports.image_url || './assets/img/404.jpg'}"
                        alt="${newsSports.title}">
                    <div class="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-35 rounded-lg transition-opacity">
                    </div>
                    </a>
                </div>
                <div class="mt-3">
                    <a href="${newsSports.link}" class="block w-full font-serif font-semibold text-lg text-dark hover:underline">${newsSports.title}</a>
                    <a href="#" class="block capitalize font-medium font-flex text-base text-primary-default tracking-wide mt-2">${newsSports.category || "General"}</a>
                </div>
            </div>
    `).join('');

    categoryNewsContainer.innerHTML += `
        <div class="grid grid-cols-4 gap-10 bg-white px-11 py-10 mb-12">
            <!-- Science -->
            <div class="col-span-2">
                <!-- Title -->
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5">SCIENCE</h1>
                    <a href="#"
                    class="flex font-roboto font-medium text-primary-default items-center transform transition-transform duration-300 hover:scale-110 ">
                    See All
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                        class="bi bi-arrow-right cl ml-2" fll viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                    </a>
                </div>

                <!-- Content -->
                <div class="grid grid-cols-2 gap-10">
                    ${scienceNewsHTML}
                </div>
            </div>

            <!-- Sports -->
            <div class="col-span-2">
                <!-- Title -->
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5">SPORTS</h1>
                    <a href="#"
                    class="flex font-roboto font-medium text-primary-default items-center transform transition-transform duration-300 hover:scale-110 ">
                    See All
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                        class="bi bi-arrow-right cl ml-2" fll viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                    </a>
                </div>

                <!-- Content -->
                <div class="grid grid-cols-2 gap-10">
                    ${sportsNewsHTML}
                </div>
            </div>
        </div>
    `;
};


// Panggil fungsi saat halaman dimuat
window.onload = function () {
    fetchHotNews();
    fetchLatestNews();
    fetchRecomendNews();
    fetchCategoryNews();
};