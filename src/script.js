// Variabel
const technologyDesktopBtn = document.getElementById("technologyDesktop");
const technologyMobileBtn = document.getElementById("technologyMobile");
const sportsDesktopBtn = document.getElementById("sportsDesktop");
const sportsMobileBtn = document.getElementById("sportsMobile");
const politicsDesktopBtn = document.getElementById("politicsDesktop");
const politicsMobileBtn = document.getElementById("politicsMobile");
const entertainmentDesktopBtn = document.getElementById("entertainmentDesktop");
const entertainmentMobileBtn = document.getElementById("entertainmentMobile");
const othersDesktopBtn = document.getElementById("othersDesktop");
const othersMobileBtn = document.getElementById("othersMobile");
const newsQuery = document.getElementById("newsQuery");
const searchBtn = document.getElementById("searchBtn");

// Variabel API
const API_KEY = "pub_599507fcede71316cb2a4e05400921bf9cfc1";
const COUNTRY = "id";
const HOT_NEWS = `https://newsdata.io/api/1/news?apikey=${API_KEY}&country=${COUNTRY}&language=${COUNTRY}`;
const LATEST_NEWS = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&country=${COUNTRY}&language=${COUNTRY}`;
const RECOMEND_NEWS = `${HOT_NEWS}&q=rekomendasi`;
const SCIENCE_NEWS = `${HOT_NEWS}&category=science`;
const SPORT_NEWS = `${HOT_NEWS}&category=sports`;

const TECHNOLOGY_NEWS = `${HOT_NEWS}&category=technology`;
const SPORTS_NEWS = `${HOT_NEWS}&category=sports`;
const POLITICS_NEWS = `${HOT_NEWS}&category=politics`;
const ENTERTAINMENT_NEWS = `${HOT_NEWS}&category=entertainment`;
const OTHERS_NEWS = `${HOT_NEWS}&category=other`;
const SEARCH_NEWS = `${HOT_NEWS}&q=`;


// onclick event
technologyDesktopBtn.addEventListener("click", function () {
    fetchTechnologyNews();
});
technologyMobileBtn.addEventListener("click", function () {
    fetchTechnologyNews();
});
sportsDesktopBtn.addEventListener("click", function () {
    fetchSportsNews();
});
sportsMobileBtn.addEventListener("click", function () {
    fetchSportsNews();
});
politicsDesktopBtn.addEventListener("click", function () {
    fetchPoliticsNews();
});
politicsMobileBtn.addEventListener("click", function () {
    fetchPoliticsNews();
});
entertainmentDesktopBtn.addEventListener("click", function () {
    fetchEntertainmentNews();
});
entertainmentMobileBtn.addEventListener("click", function () {
    fetchEntertainmentNews();
});
othersDesktopBtn.addEventListener("click", function () {
    fetchOthersNews();
});
othersMobileBtn.addEventListener("click", function () {
    fetchOthersNews();
});


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
            hotNewsContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${error.message}</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
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
            hotNewsContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${error.message}</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
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
            hotNewsContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${error.message}</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
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
            sessionStorage.setItem('scienceNews', JSON.stringify(dataScience)); // Simpan data ke cache
            sessionStorage.setItem('sportsNews', JSON.stringify(dataSports)); // Simpan data ke cache

            sessionStorage.setItem('lastFetchedDate', today);

            displayCategoryNews(dataScience, dataSports);
        } catch (error) {
            console.error("Failed to fetch hot news:", error);
            categoryNewsContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${error.message}</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
        }
    }
};

// Search News
const fetchSearchNews = async () => {
    // Jika data belum ada, ambil dari API
    try {
        await delay(5000); // Delay 5 detik antara permintaan

        const response = await fetch(`${SEARCH_NEWS}${encodeURIComponent(newsQuery.value)}`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const data = await response.json();
        displaySearchNews(data);
    } catch (error) {
        console.error("Failed to fetch hot news:", error);
        hotNewsContainer.innerHTML = `
        <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
            <div class="flex justify-between">
                <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${error.message}</h1>
                ${displayKosong()}
            </div>
        </div>
        `;
    }
};

// Technology News
const fetchTechnologyNews = async () => {
    // Cek apakah berita sudah ada di localStorage
    const cachedTechnologyNews = sessionStorage.getItem('technologyNews');
    const lastFetched = sessionStorage.getItem('lastFetchedDate'); // Tanggal terakhir data di-fetch
    const today = new Date().toDateString(); // Tanggal hari ini dalam format string

    if (cachedTechnologyNews && lastFetched === today) {
        // Jika data sudah ada di cache, langsung tampilkan
        const data = JSON.parse(cachedTechnologyNews);
        displayTechnologyNews(data);
    } else {
        // Jika data belum ada, ambil dari API
        try {
            await delay(5000); // Delay 5 detik antara permintaan

            const response = await fetch(TECHNOLOGY_NEWS);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            sessionStorage.setItem('technologyNews', JSON.stringify(data)); // Simpan data ke cache
            sessionStorage.setItem('lastFetchedDate', today);

            displayTechnologyNews(data);
        } catch (error) {
            console.error("Failed to fetch hot news:", error);
            hotNewsContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${error.message}</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
        }
    }
};

// Sports News
const fetchSportsNews = async () => {
    // Cek apakah berita sudah ada di localStorage
    const cachedSportsNews = sessionStorage.getItem('sportsNews');
    const lastFetched = sessionStorage.getItem('lastFetchedDate'); // Tanggal terakhir data di-fetch
    const today = new Date().toDateString(); // Tanggal hari ini dalam format string

    if (cachedSportsNews && lastFetched === today) {
        // Jika data sudah ada di cache, langsung tampilkan
        const data = JSON.parse(cachedSportsNews);
        displaySportsNews(data);
    } else {
        // Jika data belum ada, ambil dari API
        try {
            await delay(5000); // Delay 5 detik antara permintaan

            const response = await fetch(SPORTS_NEWS);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            sessionStorage.setItem('sportsNews', JSON.stringify(data)); // Simpan data ke cache
            sessionStorage.setItem('lastFetchedDate', today);

            displaySportsNews(data);
        } catch (error) {
            console.error("Failed to fetch hot news:", error);
            hotNewsContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${error.message}</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
        }
    }
};

// Politics News
const fetchPoliticsNews = async () => {
    // Cek apakah berita sudah ada di localStorage
    const cachedPoliticsNews = sessionStorage.getItem('politicsNews');
    const lastFetched = sessionStorage.getItem('lastFetchedDate'); // Tanggal terakhir data di-fetch
    const today = new Date().toDateString(); // Tanggal hari ini dalam format string

    if (cachedPoliticsNews && lastFetched === today) {
        // Jika data sudah ada di cache, langsung tampilkan
        const data = JSON.parse(cachedPoliticsNews);
        displayPoliticsNews(data);
    } else {
        // Jika data belum ada, ambil dari API
        try {
            await delay(5000); // Delay 5 detik antara permintaan

            const response = await fetch(POLITICS_NEWS);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            sessionStorage.setItem('politicsNews', JSON.stringify(data)); // Simpan data ke cache
            sessionStorage.setItem('lastFetchedDate', today);

            displayPoliticsNews(data);
        } catch (error) {
            console.error("Failed to fetch hot news:", error);
            hotNewsContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${error.message}</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
        }
    }
};

// Entertainment News
const fetchEntertainmentNews = async () => {
    // Cek apakah berita sudah ada di localStorage
    const cachedEntertainmentNews = sessionStorage.getItem('entertainmentNews');
    const lastFetched = sessionStorage.getItem('lastFetchedDate'); // Tanggal terakhir data di-fetch
    const today = new Date().toDateString(); // Tanggal hari ini dalam format string

    if (cachedEntertainmentNews && lastFetched === today) {
        // Jika data sudah ada di cache, langsung tampilkan
        const data = JSON.parse(cachedEntertainmentNews);
        displayEntertainmentNews(data);
    } else {
        // Jika data belum ada, ambil dari API
        try {
            await delay(5000); // Delay 5 detik antara permintaan

            const response = await fetch(ENTERTAINMENT_NEWS);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            sessionStorage.setItem('entertainmentNews', JSON.stringify(data)); // Simpan data ke cache
            sessionStorage.setItem('lastFetchedDate', today);

            displayEntertainmentNews(data);
        } catch (error) {
            console.error("Failed to fetch hot news:", error);
            hotNewsContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${error.message}</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
        }
    }
};

// Others News
const fetchOthersNews = async () => {
    // Cek apakah berita sudah ada di localStorage
    const cachedOthersNews = sessionStorage.getItem('othersNews');
    const lastFetched = sessionStorage.getItem('lastFetchedDate'); // Tanggal terakhir data di-fetch
    const today = new Date().toDateString(); // Tanggal hari ini dalam format string

    if (cachedOthersNews && lastFetched === today) {
        // Jika data sudah ada di cache, langsung tampilkan
        const data = JSON.parse(cachedOthersNews);
        displayOthersNews(data);
    } else {
        // Jika data belum ada, ambil dari API
        try {
            await delay(5000); // Delay 5 detik antara permintaan

            const response = await fetch(OTHERS_NEWS);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();
            sessionStorage.setItem('othersNews', JSON.stringify(data)); // Simpan data ke cache
            sessionStorage.setItem('lastFetchedDate', today);

            displayOthersNews(data);
        } catch (error) {
            console.error("Failed to fetch hot news:", error);
            hotNewsContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${error.message}</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
        }
    }
};

// perpendek desc berita
const truncateText = (text, maxWords) => {
    if (!text) return "No description available.";
    const words = text.split(" ");
    if (words.length > maxWords) {
        return words.slice(0, maxWords).join(" ") + "...";
    }
    return text;
};

// Display kosoong
const displayKosongAll = () => {
    // Pilih hanya div dengan ID tertentu
    const specificDivs = document.querySelectorAll(
        "#hotNewsContainer, #latestNewsContainer, #recomendNewsContainer, #categoryNewsContainer, #technologyNewsContainer, #navbarDesktop, #navbarMobile"
    );

    // Kosongkan isi dari setiap div yang dipilih
    specificDivs.forEach(div => {
        div.innerHTML = ""; // Kosongkan isi dari div
    });
};
const displayKosong = () => {
    // Pilih hanya div dengan ID tertentu
    const specificDivs = document.querySelectorAll(
        "#hotNewsContainer, #latestNewsContainer, #recomendNewsContainer, #categoryNewsContainer, #technologyNewsContainer"
    );

    // Kosongkan isi dari setiap div yang dipilih
    specificDivs.forEach(div => {
        div.innerHTML = ""; // Kosongkan isi dari div
    });
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
                <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 border-primary-default">HOT NEWS</h1>
                <a href="${headline.link}" class="block font-semibold font-serif text-2xl text-dark mb-2 w-full sm:w-10/12 hover:underline" target="_blank">${headline.title}</a>
                <a href="#" class="block capitalize font-medium font-flex text-base text-primary-default w-full sm:w-10/12 tracking-wide mb-5">${headline.category || "General"}</a>
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
        <div class="flex flex-col lg:flex-row lg:pl-14 mb-12 lg:mb-6 mt-8 lg:mt-0">
          <!-- Bagian Teks -->
          <div class="flex-1">
            <a class="block font-semibold font-serif text-lg sm:text-2xl lg:text-lg text-dark mb-2 hover:underline w-full sm:w-10/12 tracking-wide"
              href="${news.link}" target="_blank">${news.title}</a>
            <p class="font-medium font-roboto text-sm sm:text-lg lg:text-sm text-dark mb-2 w-11/12 sm:w-9/12">${truncateText(news.description, 10)}</p>
            <a href="#" class="block capitalize font-medium font-flex text-base sm:text-lg lg:text-base text-primary-default tracking-wide w-full sm:w-10/12 mb-3">${news.category || "General"}</a>
          </div>
          <!-- Bagian Gambar -->
          <div class="relative group mr-12 h-56 sm:h-80 lg:h-32">
            <a href="${news.link}" target="_blank">
              <img class="w-full lg:w-56 h-56 sm:h-80 lg:h-32 object-cover rounded-lg"
                src="${news.image_url || './assets/img/404.jpg'}" alt="${news.title}">
              <div class="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-35 rounded-lg transition-opacity"></div>
            </a>
          </div>
        </div>
      `).join('');

    // Tambahkan ke kolom kedua (Other News)
    hotNewsContainer.innerHTML += `
        <div class="bg-secondary grid grid-cols-1 lg:grid-cols-2 gap-4 px-7 sm:px-11 lg:ps-11 lg:pe-0 py-12 shadow-md mb-7">
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
    const latestNews = latestNewsData.slice(6, 11); // Ambil berita kedua hingga keempat
    const latestNewsHTML = latestNews.map(news => `
            <div>
                <div class="relative group">
                    <a href="${news.link}">
                        <img class="rounded-lg w-full h-60 sm:h-48 object-cover" src="${news.image_url || './assets/img/404.jpg'}"
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
      <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
        <div class="flex justify-between">
            <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">LATEST NEWS</h1>
            <a href="#"
                class="hidden sm:flex font-roboto font-medium text-primary-default items-center transform transition-transform duration-300 hover:scale-110">
                See All
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                class="bi bi-arrow-right cl ml-2" fll viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
            </a>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

    // Hot News Headline
    const headlineHotNews = recomendNewsData[0];
    const oneHotNewsHTML = `
        <div class="grid grid-cols-1">
            <div class="relative group">
                <a href="${headlineHotNews.link}" class="bg-[url('./assets/img/hi-res-42500494c29628884236755b8b91d0b5_crop_north.jpg')] rounded-lg bg-cover bg-center h-full lg:h-104 w-full flex lg:items-end pt-60 pb-3 px-3 lg:py-9 lg:px-9">
                    <div class=" bg-black w-full lg:w-11/12 text-light bg-opacity-40 py-3 px-4 lg:py-5 lg:ps-5 lg:pe-2 rounded-lg">
                        <h1 class="font-serif font-semibold text-xl lg:text-2xl tracking-wide mb-2">${headlineHotNews.title}</h1>
                        <p class="font-roboto text-base lg:text-lg font-medium w-11/12 mb-3">${truncateText(headlineHotNews.description, 10)}</p>
                    </div>
                    <div class="absolute inset-0 bg-gray-300 opacity-0 group-hover:opacity-35 rounded-lg transition-opacity"></div>
                </a>
            </div>
        </div>
    `;

    // Tampilkan Latest News
    const recomendNews = recomendNewsData.slice(1, 5); // Ambil berita kedua hingga keempat
    const recomendNewsHTML = recomendNews.map(news => `
            <div>
                <div class="relative group">
                    <a href="${news.link}">
                        <img class="rounded-lg w-full h-60 sm:h-48 object-cover" src="${news.image_url || './assets/img/404.jpg'}"
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
    <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
        <div class="flex justify-between">
            <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">RECOMMENDATION</h1>
            <a href="#"
                class="hidden sm:flex font-roboto font-medium text-primary-default items-center transform transition-transform duration-300 hover:scale-110 ">
                See All
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                class="bi bi-arrow-right cl ml-2" fll viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>
            </a>
        </div>
     <div class="grid grid-rows-1 gap-10">
        ${oneHotNewsHTML}
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 bg-white px-5 sm:px-11 py-10 mb-12">
            <!-- Science -->
            <div class="col-span-2">
                <!-- Title -->
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5">SCIENCE</h1>
                    <a href="#"
                    class="hidden sm:flex font-roboto font-medium text-primary-default items-center transform transition-transform duration-300 hover:scale-110 ">
                    See All
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                        class="bi bi-arrow-right cl ml-2" fll viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                    </a>
                </div>

                <!-- Content -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    ${scienceNewsHTML}
                </div>
            </div>

            <!-- Sports -->
            <div class="col-span-2">
                <!-- Title -->
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5">SPORTS</h1>
                    <a href="#sport"
                    class=" hidden sm:flex font-roboto font-medium text-primary-default items-center transform transition-transform duration-300 hover:scale-110 ">
                    See All
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor"
                        class="bi bi-arrow-right cl ml-2" fll viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                    </svg>
                    </a>
                </div>

                <!-- Content -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-10">
                    ${sportsNewsHTML}
                </div>
            </div>
        </div>
    `;
};

// Search Display
const displaySearchNews = (data) => {
    const searchNewsData = data.results;

    const searchNewsContainer = document.getElementById('searchNewsContainer'); // Pastikan elemen ini ada di HTML
    searchNewsContainer.innerHTML = ""; // Reset kontainer
    displayKosong();

    // Tampilkan Latest News
    const searchNews = searchNewsData.slice(0, 10); // Ambil berita kedua hingga keempat
    const searchNewsHTML = searchNews.map(news => `
            <div>
                <div class="relative group">
                    <a href="${news.link}">
                        <img class="rounded-lg w-full h-60 sm:h-48 object-cover" src="${news.image_url || './assets/img/404.jpg'}"
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

    searchNewsContainer.innerHTML += `
      <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
        <div class="flex justify-between">
            <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">SEARCH: ${encodeURIComponent(newsQuery.value)}</h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            ${searchNewsHTML}
        </div>
      </div>
    `;
};

// Technology Display
const displayTechnologyNews = (data) => {
    const technologyNewsData = data.results;

    const technologyNewsContainer = document.getElementById('technologyNewsContainer'); // Pastikan elemen ini ada di HTML
    const navbarDesktop = document.getElementById('navbarDesktop');
    const navbarMobile = document.getElementById('navbarMobile');
    technologyNewsContainer.innerHTML = ""; // Reset kontainer
    navbarDesktop.innerHTML = ""; // Reset kontainer
    navbarMobile.innerHTML = ""; // Reset kontainer
    displayKosongAll();

    // Tampilkan Latest News
    const technologyNews = technologyNewsData.slice(0, 10); // Ambil berita kedua hingga keempat
    const technologyNewsHTML = technologyNews.map(news => `
            <div>
                <div class="relative group">
                    <a href="${news.link}">
                        <img class="rounded-lg w-full h-60 sm:h-48 object-cover" src="${news.image_url || './assets/img/404.jpg'}"
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

    navbarDesktop.innerHTML += `
        <a id="technologyDesktop" href="#teknologi"
            class="rounded-full bg-primary-default px-5 py-2 text-base font-medium text-light"
            aria-current="page">
            Technology
        </a>
        <a id="sportsDesktop" href="#sport" 
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full">
            Sports
        </a>
        <a id="politicsDesktop" href="#politik"
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full">
            Politics
        </a>
        <a id="entertainment" href="#entertemen"
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full">
            Entertainment
        </a>
        <a id="othersDesktop" href="#more"
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full">
            More
        </a>    
    `;

    navbarMobile.innerHTML += `
        <a id="technologyMobile" href="#teknologi"
          class="block rounded-md px-3 py-2 text-base font-medium bg-primary-default text-light">Techonlogy</a>
        <a id="sportsMobile" href="#sport" onclick="fetchSportsNew()"
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">Sports</a>
        <a id="politicsMobile" href="#politik"
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">Politics</a>
        <a id="entertainmentMobile" href="#entertemen"
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">Entertainment</a>
        <a id="othersMobile" href="#more"
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">More</a>
    `;

    technologyNewsContainer.innerHTML += `
      <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
        <div class="flex justify-between">
            <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">TECHNOLOGY</h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            ${technologyNewsHTML}
        </div>
      </div>
    `;
};

// Sports Display
const displaySportsNews = (data) => {
    const sportsNewsData = data.results;

    const sportsNewsContainer = document.getElementById('sportsNewsContainer'); // Pastikan elemen ini ada di HTML
    const navbarDesktop = document.getElementById('navbarDesktop');
    const navbarMobile = document.getElementById('navbarMobile');
    sportsNewsContainer.innerHTML = ""; // Reset kontainer
    navbarDesktop.innerHTML = ""; // Reset kontainer
    navbarMobile.innerHTML = ""; // Reset kontainer
    displayKosongAll();

    // Tampilkan Latest News
    const sportsNews = sportsNewsData.slice(0, 10); // Ambil berita kedua hingga keempat
    const sportsNewsHTML = sportsNews.map(news => `
            <div>
                <div class="relative group">
                    <a href="${news.link}">
                        <img class="rounded-lg w-full h-60 sm:h-48 object-cover" src="${news.image_url || './assets/img/404.jpg'}"
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

    navbarDesktop.innerHTML += `
        <a id="technologyDesktop" href="#teknologi"
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full"
            aria-current="page">
            Technology
        </a>
        <a id="sportsDesktop" href="#sport"  
            class="rounded-full bg-primary-default px-5 py-2 text-base font-medium text-light">
            Sports
        </a>
        <a id="politicsDesktop" href="#politik" 
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full">
            Politics
        </a>
        <a id="entertainment" href="#entertemen" 
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full">
            Entertainment
        </a>
        <a id="othersDesktop" href="#more"
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full">
            More
        </a>    
    `;

    navbarMobile.innerHTML += `
        <a id="technologyMobile" href="#teknologi"
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">Techonlogy</a>
        <a id="sportsMobile" href="#sport" 
          class="block rounded-md px-3 py-2 text-base font-medium bg-primary-default text-light">Sports</a>
        <a id="politicsMobile" href="#politik" 
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">Politics</a>
        <a id="entertainmentMobile" href="#entertemen" 
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">Entertainment</a>
        <a id="othersMobile" href="#more"
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">More</a>
    `;

    sportsNewsContainer.innerHTML += `
      <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
        <div class="flex justify-between">
            <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">SPORTS</h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            ${sportsNewsHTML}
        </div>
      </div>
    `;
};

// Politics Display
const displayPoliticsNews = (data) => {
    const politicsNewsData = data.results;

    const politicsNewsContainer = document.getElementById('politicsNewsContainer'); // Pastikan elemen ini ada di HTML
    const navbarDesktop = document.getElementById('navbarDesktop');
    const navbarMobile = document.getElementById('navbarMobile');
    politicsNewsContainer.innerHTML = ""; // Reset kontainer
    navbarDesktop.innerHTML = ""; // Reset kontainer
    navbarMobile.innerHTML = ""; // Reset kontainer
    displayKosongAll();

    // Tampilkan Latest News
    const politicsNews = politicsNewsData.slice(0, 10); // Ambil berita kedua hingga keempat
    const politicsNewsHTML = politicsNews.map(news => `
            <div>
                <div class="relative group">
                    <a href="${news.link}">
                        <img class="rounded-lg w-full h-60 sm:h-48 object-cover" src="${news.image_url || './assets/img/404.jpg'}"
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

    navbarDesktop.innerHTML += `
        <a id="technologyDesktop" href="#teknologi"
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full"
            aria-current="page">
            Technology
        </a>
        <a id="sportsDesktop" href="#sport"  
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full">
            Sports
        </a>
        <a id="politicsDesktop" href="#politik" 
            class="rounded-full bg-primary-default px-5 py-2 text-base font-medium text-light">
            Politics
        </a>
        <a id="entertainment" href="#entertemen" 
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full">
            Entertainment
        </a>
        <a id="othersDesktop" href="#more"
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full">
            More
        </a>    
    `;

    navbarMobile.innerHTML += `
        <a id="technologyMobile" href="#teknologi"
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">Techonlogy</a>
        <a id="sportsMobile" href="#sport" 
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">Sports</a>
        <a id="politicsMobile" href="#politik" 
          class="block rounded-md px-3 py-2 text-base font-medium bg-primary-default text-light">Politics</a>
        <a id="entertainmentMobile" href="#entertemen" 
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">Entertainment</a>
        <a id="othersMobile" href="#more"
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">More</a>
    `;

    politicsNewsContainer.innerHTML += `
      <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
        <div class="flex justify-between">
            <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">POLITICS</h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            ${politicsNewsHTML}
        </div>
      </div>
    `;
};

// Entertainment Display
const displayEntertainmentNews = (data) => {
    const entertainmentNewsData = data.results;

    const entertainmentNewsContainer = document.getElementById('entertainmentNewsContainer'); // Pastikan elemen ini ada di HTML
    const navbarDesktop = document.getElementById('navbarDesktop');
    const navbarMobile = document.getElementById('navbarMobile');
    entertainmentNewsContainer.innerHTML = ""; // Reset kontainer
    navbarDesktop.innerHTML = ""; // Reset kontainer
    navbarMobile.innerHTML = ""; // Reset kontainer
    displayKosongAll();

    // Tampilkan Latest News
    const entertainmentNews = entertainmentNewsData.slice(0, 10); // Ambil berita kedua hingga keempat
    const entertainmentNewsHTML = entertainmentNews.map(news => `
            <div>
                <div class="relative group">
                    <a href="${news.link}">
                        <img class="rounded-lg w-full h-60 sm:h-48 object-cover" src="${news.image_url || './assets/img/404.jpg'}"
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

    navbarDesktop.innerHTML += `
        <a id="technologyDesktop" href="#teknologi"
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full"
            aria-current="page">
            Technology
        </a>
        <a id="sportsDesktop" href="#sport"  
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full">
            Sports
        </a>
        <a id="politicsDesktop" href="#politik" 
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full">
            Politics
        </a>
        <a id="entertainment" href="#entertemen" 
            class="rounded-full bg-primary-default px-5 py-2 text-base font-medium text-light">
            Entertainment
        </a>
        <a id="othersDesktop" href="#more"
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full">
            More
        </a>    
    `;

    navbarMobile.innerHTML += `
        <a id="technologyMobile" href="#teknologi"
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">Techonlogy</a>
        <a id="sportsMobile" href="#sport" 
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">Sports</a>
        <a id="politicsMobile" href="#politik" 
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">Politics</a>
        <a id="entertainmentMobile" href="#entertemen" 
          class="block rounded-md px-3 py-2 text-base font-medium bg-primary-default text-light">Entertainment</a>
        <a id="othersMobile" href="#more"
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">More</a>
    `;

    entertainmentNewsContainer.innerHTML += `
      <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
        <div class="flex justify-between">
            <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">ENTERTAINMENT</h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            ${entertainmentNewsHTML}
        </div>
      </div>
    `;
};

// Entertainment Display
const displayOthersNews = (data) => {
    const othersNewsData = data.results;

    const othersNewsContainer = document.getElementById('othersNewsContainer'); // Pastikan elemen ini ada di HTML
    const navbarDesktop = document.getElementById('navbarDesktop');
    const navbarMobile = document.getElementById('navbarMobile');
    othersNewsContainer.innerHTML = ""; // Reset kontainer
    navbarDesktop.innerHTML = ""; // Reset kontainer
    navbarMobile.innerHTML = ""; // Reset kontainer
    displayKosongAll();

    // Tampilkan Latest News
    const othersNews = othersNewsData.slice(0, 10); // Ambil berita kedua hingga keempat
    const othersNewsHTML = othersNews.map(news => `
            <div>
                <div class="relative group">
                    <a href="${news.link}">
                        <img class="rounded-lg w-full h-60 sm:h-48 object-cover" src="${news.image_url || './assets/img/404.jpg'}"
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

    navbarDesktop.innerHTML += `
        <a id="technologyDesktop" href="#teknologi"
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full"
            aria-current="page">
            Technology
        </a>
        <a id="sportsDesktop" href="#sport"  
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full">
            Sports
        </a>
        <a id="politicsDesktop" href="#politik" 
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full">
            Politics
        </a>
        <a id="entertainment" href="#entertemen" 
            class="px-5 py-2 text-base font-medium text-primary-default hover:bg-primary-default hover:text-light rounded-full">
            Entertainment
        </a>
        <a id="othersDesktop" href="#more"
            class="rounded-full bg-primary-default px-5 py-2 text-base font-medium text-light">
            More
        </a>    
    `;

    navbarMobile.innerHTML += `
        <a id="technologyMobile" href="#teknologi"
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">Techonlogy</a>
        <a id="sportsMobile" href="#sport" 
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">Sports</a>
        <a id="politicsMobile" href="#politik" 
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">Politics</a>
        <a id="entertainmentMobile" href="#entertemen" 
          class="block rounded-md px-3 py-2 text-base font-medium text-dark hover:bg-primary-default hover:text-light hover:rounded-full">Entertainment</a>
        <a id="othersMobile" href="#more"
          class="block rounded-md px-3 py-2 text-base font-medium bg-primary-default text-light">More</a>
    `;

    othersNewsContainer.innerHTML += `
      <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
        <div class="flex justify-between">
            <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">OTHERS</h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            ${othersNewsHTML}
        </div>
      </div>
    `;
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