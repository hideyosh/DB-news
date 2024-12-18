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
        "#hotNewsContainer, #latestNewsContainer, #recomendNewsContainer, #categoryNewsContainer, #searchNewsContainer, #technologyNewsContainer, #sportsNewsContainer, #politicsNewsContainer, #entertainmentNewsContainer, #othersNewsContainer"
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
    hotNewsContainer.innerHTML = ""; 
    

    // Tampilkan berita utama pertama (Hot News)
    const headline = newsData[0]; // Ambil berita utama pertama
    const oneNewsHTML = `
            <div>
                <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 border-primary-default">HOT NEWS</h1>
                <a href="${headline.link}" class="block font-semibold font-serif text-2xl sm:text-3xl lg:text-2xl text-dark mb-2 w-full lg:w-10/12 hover:underline" target="_blank">${headline.title}</a>
                <a href="#" class="block capitalize font-medium font-flex text-base text-primary-default w-full sm:w-10/12 tracking-wide mb-5">${headline.category || "General"}</a>
                <div class="relative group">
                    <a href="${headline.link}" target="_blank">
                    <img class="w-full h-96 object-cover rounded-lg"
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
            <a class="block font-semibold font-serif text-lg sm:text-2xl lg:text-lg text-dark mb-2 hover:underline w-full lg:w-10/12 tracking-wide text-justify lg:text-start"
              href="${news.link}" target="_blank">${news.title}</a>
            <p class="font-medium font-roboto text-sm sm:text-lg lg:text-sm text-dark mb-2 w-full lg:w-9/12 capitalize text-justify lg:text-start">${truncateText(news.description, 10)}</p>
            <a href="#" class="block capitalize font-medium font-flex text-base sm:text-lg lg:text-base text-primary-default tracking-wide w-full sm:w-10/12 mb-3">${news.category || "General"}</a>
          </div>
          <!-- Bagian Gambar -->
          <div class="relative group mr-12 w-full lg:w-56 h-56 sm:h-80 lg:h-32">
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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-24 lg:gap-10 bg-white px-5 sm:px-11 py-10 mb-12">
            <!-- Science -->
            <div class="col-span-2">
                <!-- Title -->
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">SCIENCE</h1>
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
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">SPORTS</h1>
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
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
    displayKosong();

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

    technologyNewsContainer.innerHTML += `
      <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
        <div class="flex justify-between">
            <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">TECHNOLOGY</h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
    sportsNewsContainer.innerHTML = ""; 
    displayKosong();

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

    sportsNewsContainer.innerHTML += `
      <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
        <div class="flex justify-between">
            <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">SPORTS</h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
    politicsNewsContainer.innerHTML = ""; 
    displayKosong();

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

    politicsNewsContainer.innerHTML += `
      <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
        <div class="flex justify-between">
            <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">POLITICS</h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
    entertainmentNewsContainer.innerHTML = ""; 
    displayKosong();

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

    entertainmentNewsContainer.innerHTML += `
      <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
        <div class="flex justify-between">
            <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">ENTERTAINMENT</h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
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
    othersNewsContainer.innerHTML = ""; 
    displayKosong();

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

    othersNewsContainer.innerHTML += `
      <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
        <div class="flex justify-between">
            <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">OTHERS</h1>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            ${othersNewsHTML}
        </div>
      </div>
    `;
};