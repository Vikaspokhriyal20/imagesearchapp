const api_key = 'FDCiBdV5GR54z8y2ILrLveG4g7qGf4wsoB2w6PoD23s';

const input_box = document.getElementById('input-box');
const searchBtn = document.getElementById('search-btn');
const search_result = document.getElementById('search-result');
const show_more = document.getElementById('show-more');

// window.addEventListener('load', ()=> fetchImages('good'));

let keyword = '';
let page = 1;

async function fetchImages() {
    keyword = input_box.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${api_key}&per_page=12`;

    if (page === 1) {
        search_result.innerHTML = '';
    }

    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;

    results.map((result) => {
        const image = document.createElement('img');
        image.src = result.urls.small;
        const imageLink = document.createElement('a');
        imageLink.href = result.links.html;
        imageLink.target = '_blank';
         
        // set the image in a tag
        imageLink.appendChild(image);

        // send the image in div
        search_result.appendChild(imageLink)
    })

    show_more.style.display = 'block';
}

show_more.addEventListener('click', () => {
    page++
    fetchImages();
})



searchBtn.addEventListener('click', () => {
    page = 1;
    fetchImages();
})


