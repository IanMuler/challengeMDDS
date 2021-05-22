const API = "http://api.mediastack.com/v1/news?access_key=d00c9272adf7c8b7cc4230e03f54b22d&keywords=tennis"
const body = document.getElementById('body');

fetch(API)
.then(response => response.json())
.then(data => printHTML(data))

function printHTML(data){
    const APIdata = data.data
    
    let count = 1;

    APIdata.map( data => { //crear un elemento por cada dato
    const news = document.createElement('ul'); 
    news.setAttribute("id", `${count++}`);
    news.innerHTML = `
    <li class="li_img"><img src="${data.image}"></li>
    <li class="li_title">${data.title}</li>
    <li class="li_description">${data.description}</li>
    <li>${data.author}</li>
    <li>${data.published_at.split("T")[0]}</li> 
    <li><button><a href="${data.url}">Visit</a></button></li>    
    `;
    body.appendChild(news)
})
}

// buttons functions

const btnPrevious = document.getElementById('btn_previous')
const btnNext = document.getElementById('btn_next')

btnPrevious.addEventListener('click', () => {
    listHeight = body.offsetHeight;
    if(window.scrollY > 0){
        window.scrollY -= listHeight
    } else {
        window.scrollY = body.scrollHeight - listHeight;
    }
    window.scroll(0, window.scrollY)
})

btnNext.addEventListener('click', () => {
    listHeight = body.offsetHeight;
    if(window.scrollY < body.scrollHeight - listHeight){
        window.scrollY += listHeight
    } else {
        window.scrollY = 0;
    }
    window.scroll(0, window.scrollY)
})
