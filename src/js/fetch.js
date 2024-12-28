// Hot News
const fetchHotNews = async () => {
  // Cek apakah berita sudah ada di sessionStorage
  const cachedNews = sessionStorage.getItem("hotNews");
  const lastFetched = sessionStorage.getItem("lastFetchedDate"); // Tanggal terakhir data di-fetch
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
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      sessionStorage.setItem("hotNews", JSON.stringify(data)); // Simpan data ke sessionStorage
      sessionStorage.setItem("lastFetchedDate", today); // Simpan tanggal hari ini

      displayNews(data);
    } catch (error) {
      console.error("Failed to fetch hot news:", error);
      errorContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${
                      error.message
                    }</h1>
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
  const cachedLatestNews = sessionStorage.getItem("latestNews");
  const lastFetched = sessionStorage.getItem("lastFetchedDate"); // Tanggal terakhir data di-fetch
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
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      sessionStorage.setItem("latestNews", JSON.stringify(data)); // Simpan data ke cache
      sessionStorage.setItem("lastFetchedDate", today);

      displayLatestNews(data);
    } catch (error) {
      console.error("Failed to fetch hot news:", error);
      errorContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${
                      error.message
                    }</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
    }
  }
};

// Latest News All
const fetchLatestNewsAll = async () => {
  displayKosong();
  // Cek apakah berita sudah ada di localStorage
  const cachedLatestNews = sessionStorage.getItem("latestNews");
  const lastFetched = sessionStorage.getItem("lastFetchedDate"); // Tanggal terakhir data di-fetch
  const today = new Date().toDateString(); // Tanggal hari ini dalam format string

  if (cachedLatestNews && lastFetched === today) {
    // Jika data sudah ada di cache, langsung tampilkan
    const data = JSON.parse(cachedLatestNews);
    displayLatestNewsAll(data);
  } else {
    // Jika data belum ada, ambil dari API
    try {
      await delay(5000); // Delay 5 detik antara permintaan

      const response = await fetch(LATEST_NEWS);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      sessionStorage.setItem("latestNews", JSON.stringify(data)); // Simpan data ke cache
      sessionStorage.setItem("lastFetchedDate", today);

      displayLatestNewsAll(data);
    } catch (error) {
      console.error("Failed to fetch hot news:", error);
      errorContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${
                      error.message
                    }</h1>
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
  const cachedRecomendNews = sessionStorage.getItem("recomendNews");
  const lastFetched = sessionStorage.getItem("lastFetchedDate"); // Tanggal terakhir data di-fetch
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
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      sessionStorage.setItem("recomendNews", JSON.stringify(data)); // Simpan data ke cache
      sessionStorage.setItem("lastFetchedDate", today);

      displayRecomendNews(data);
    } catch (error) {
      console.error("Failed to fetch hot news:", error);
      errorContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${
                      error.message
                    }</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
    }
  }
};

// Recommendation News All
const fetchRecommendNewsAll = async () => {
  displayKosong();
  // Cek apakah berita sudah ada di localStorage
  const cachedRecomendNews = sessionStorage.getItem("recomendNews");
  const lastFetched = sessionStorage.getItem("lastFetchedDate"); // Tanggal terakhir data di-fetch
  const today = new Date().toDateString(); // Tanggal hari ini dalam format string

  if (cachedRecomendNews && lastFetched === today) {
    // Jika data sudah ada di cache, langsung tampilkan
    const data = JSON.parse(cachedRecomendNews);
    displayRecommendNewsAll(data);
  } else {
    // Jika data belum ada, ambil dari API
    try {
      await delay(5000); // Delay 5 detik antara permintaan

      const response = await fetch(RECOMEND_NEWS);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      sessionStorage.setItem("recomendNews", JSON.stringify(data)); // Simpan data ke cache
      sessionStorage.setItem("lastFetchedDate", today);

      displayRecommendNewsAll(data);
    } catch (error) {
      console.error("Failed to fetch hot news:", error);
      errorContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${
                      error.message
                    }</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
    }
  }
};

// Science and sports news
const fetchCategoryNews = async () => {
  const cachedScienceNews = sessionStorage.getItem("scienceNews");
  const cachedSportsNews = sessionStorage.getItem("sportsNews");
  const lastFetched = sessionStorage.getItem("lastFetchedDate"); // Tanggal terakhir data di-fetch
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
      if (!responseScience.ok)
        throw new Error(`HTTP error! status: ${responseScience.status}`);
      if (!responseSports.ok)
        throw new Error(`HTTP error! status: ${responseSports.status}`);

      const dataScience = await responseScience.json();
      const dataSports = await responseSports.json();
      sessionStorage.setItem("scienceNews", JSON.stringify(dataScience)); // Simpan data ke cache
      sessionStorage.setItem("sportsNews", JSON.stringify(dataSports)); // Simpan data ke cache

      sessionStorage.setItem("lastFetchedDate", today);

      displayCategoryNews(dataScience, dataSports);
    } catch (error) {
      console.error("Failed to fetch hot news:", error);
      errorContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${
                      error.message
                    }</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
    }
  }
};

// Search News
const fetchSearchNews = async () => {
  displayKosong();
  try {
    await delay(5000); // Delay 5 detik antara permintaan

    const response = await fetch(
      `${SEARCH_NEWS}${encodeURIComponent(newsQuery.value)}`
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    displaySearchNews(data);
  } catch (error) {
    console.error("Failed to fetch hot news:", error);
    errorContainer.innerHTML = `
        <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
            <div class="flex justify-between">
                <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${
                  error.message
                }</h1>
                ${displayKosong()}
            </div>
        </div>
        `;
  }
};

// Science News
const fetchScienceNews = async () => {
  displayKosong();
  // Cek apakah berita sudah ada di localStorage
  const cachedScienceNews = sessionStorage.getItem("scienceNews");
  const lastFetched = sessionStorage.getItem("lastFetchedDate"); // Tanggal terakhir data di-fetch
  const today = new Date().toDateString(); // Tanggal hari ini dalam format string

  if (cachedScienceNews && lastFetched === today) {
    // Jika data sudah ada di cache, langsung tampilkan
    const data = JSON.parse(cachedScienceNews);
    displayScienceNews(data);
  } else {
    // Jika data belum ada, ambil dari API
    try {
      await delay(5000); // Delay 5 detik antara permintaan

      const response = await fetch(SCIENCE_NEWS);
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      sessionStorage.setItem("scienceNews", JSON.stringify(data)); // Simpan data ke cache
      sessionStorage.setItem("lastFetchedDate", today);

      displayScienceNews(data);
    } catch (error) {
      console.error("Failed to fetch hot news:", error);
      errorContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${
                      error.message
                    }</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
    }
  }
};

// Technology News
const fetchTechnologyNews = async () => {
  displayKosong();
  // Cek apakah berita sudah ada di localStorage
  const cachedTechnologyNews = sessionStorage.getItem("technologyNews");
  const lastFetched = sessionStorage.getItem("lastFetchedDate"); // Tanggal terakhir data di-fetch
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
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      sessionStorage.setItem("technologyNews", JSON.stringify(data)); // Simpan data ke cache
      sessionStorage.setItem("lastFetchedDate", today);

      displayTechnologyNews(data);
    } catch (error) {
      console.error("Failed to fetch hot news:", error);
      errorContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${
                      error.message
                    }</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
    }
  }
};

// Sports News
const fetchSportsNews = async () => {
  displayKosong();
  // Cek apakah berita sudah ada di localStorage
  const cachedSportsNews = sessionStorage.getItem("sportsNews");
  const lastFetched = sessionStorage.getItem("lastFetchedDate"); // Tanggal terakhir data di-fetch
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
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      sessionStorage.setItem("sportsNews", JSON.stringify(data)); // Simpan data ke cache
      sessionStorage.setItem("lastFetchedDate", today);

      displaySportsNews(data);
    } catch (error) {
      console.error("Failed to fetch hot news:", error);
      errorContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${
                      error.message
                    }</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
    }
  }
};

// Politics News
const fetchPoliticsNews = async () => {
  displayKosong();
  // Cek apakah berita sudah ada di localStorage
  const cachedPoliticsNews = sessionStorage.getItem("politicsNews");
  const lastFetched = sessionStorage.getItem("lastFetchedDate"); // Tanggal terakhir data di-fetch
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
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      sessionStorage.setItem("politicsNews", JSON.stringify(data)); // Simpan data ke cache
      sessionStorage.setItem("lastFetchedDate", today);

      displayPoliticsNews(data);
    } catch (error) {
      console.error("Failed to fetch hot news:", error);
      errorContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${
                      error.message
                    }</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
    }
  }
};

// Entertainment News
const fetchEntertainmentNews = async () => {
  displayKosong();
  // Cek apakah berita sudah ada di localStorage
  const cachedEntertainmentNews = sessionStorage.getItem("entertainmentNews");
  const lastFetched = sessionStorage.getItem("lastFetchedDate"); // Tanggal terakhir data di-fetch
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
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      sessionStorage.setItem("entertainmentNews", JSON.stringify(data)); // Simpan data ke cache
      sessionStorage.setItem("lastFetchedDate", today);

      displayEntertainmentNews(data);
    } catch (error) {
      console.error("Failed to fetch hot news:", error);
      errorContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${
                      error.message
                    }</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
    }
  }
};

// Others News
const fetchOthersNews = async () => {
  displayKosong();
  // Cek apakah berita sudah ada di localStorage
  const cachedOthersNews = sessionStorage.getItem("othersNews");
  const lastFetched = sessionStorage.getItem("lastFetchedDate"); // Tanggal terakhir data di-fetch
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
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);

      const data = await response.json();
      sessionStorage.setItem("othersNews", JSON.stringify(data)); // Simpan data ke cache
      sessionStorage.setItem("lastFetchedDate", today);

      displayOthersNews(data);
    } catch (error) {
      console.error("Failed to fetch hot news:", error);
      errorContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${
                      error.message
                    }</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
    }
  }
};

// Detail News
const fetchDetailNews = async (articleId) => {
  displayKosong();
  const cachedDetailNews = sessionStorage.getItem(`detailNews_${articleId}`);
  const cachedRecomendNews = sessionStorage.getItem("recomendNews");
  const lastFetched = sessionStorage.getItem("lastFetchedDate"); // Tanggal terakhir data di-fetch
  const today = new Date().toDateString(); // Tanggal hari ini dalam format string

  if (cachedDetailNews && cachedRecomendNews && lastFetched === today) {
    // Jika data sudah ada di cache, langsung tampilkan
    const dataRecommendNews = JSON.parse(cachedRecomendNews);
    const detailNews = JSON.parse(cachedDetailNews);
    displayDetailNews(detailNews, dataRecommendNews);
  } else {
    // Jika detailNews belum ada, ambil dari API
    try {
      await delay(5000); // Delay 5 detik antara permintaan

      const responseDetailNews = await fetch(`${DETAIL_NEWS}${articleId}`);
      const responseRecommendNews = await fetch(RECOMEND_NEWS);
      if (!responseDetailNews.ok)
        throw new Error(`HTTP error! status: ${responseDetailNews.status}`);
      if (!responseRecommendNews.ok)
        throw new Error(`HTTP error! status: ${responseRecommendNews.status}`);

      const detailNews = await responseDetailNews.json();
      const dataRecommendNews = await responseRecommendNews.json();
      sessionStorage.setItem("recomendNews", JSON.stringify(dataRecommendNews)); // Simpan data ke cache
      sessionStorage.setItem(
        `detailNews_${articleId}`,
        JSON.stringify(detailNews)
      ); // Simpan detailNews ke cache

      sessionStorage.setItem("lastFetchedDate", today);

      displayDetailNews(detailNews, dataRecommendNews);
    } catch (error) {
      console.error("Failed to fetch hot news:", error);
      errorContainer.innerHTML = `
            <div class="bg-white px-7 sm:px-11 py-10 mt-7 mb-5">
                <div class="flex justify-between">
                    <h1 class="font-bold font-flex text-3xl text-primary-default tracking-widest mb-5 hover:underline sm:hover:no-underline">Error: ${
                      error.message
                    }</h1>
                    ${displayKosong()}
                </div>
            </div>
            `;
    }
  }
};
