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
const DETAIL_NEWS = `https://newsdata.io/api/1/latest?apikey=${API_KEY}&id=`;

// Add Backend Detail News