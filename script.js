// console.log("Hello World!");

let newArray = [];
const apiUrl =
  "https://newsapi.org/v2/top-headlines?country=us&apiKey=fd014e46a2a242e6adf3382fb4091b26";

const displayNews = (reading) => {
  let str = "";

  reading.map((photo) => {
    str += `
    

    <div class="col-md-6 col-lg-3 p-2">

    <a href="${photo.url}" target="_blank">
    <div class="card p-2">
      <img src="${photo.urlToImage}" alt="">
      <h2 class="p-2">${photo.title}</h2>
      <h5>By:${photo.author}</h5>
      <h6>Published:${photo.publishedAt}At</h6>

    </div>
  </a>
  </div>

  
  `;

    document.querySelector("#news").innerHTML = str;
  });

  // let str = " ";

  // reading.map();
};

const fetchNews = (parms) => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      newArray = data.articles;

      displayNews(newArray);
    });
};

fetchNews();
