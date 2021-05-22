const API = "https://cors-anywhere.herokuapp.com/http://api.mediastack.com/v1/news?access_key=d00c9272adf7c8b7cc4230e03f54b22d&keywords=tennis"
// https://cors-anywhere.herokuapp.com/ => hace que la API sea tomada en GitHub pages como HTTPS

const body = document.getElementById('body');
const loading = document.getElementById('loading')
const btnPrevious = document.getElementById('btn_previous')
const btnNext = document.getElementById('btn_next')

fetch(API)
.then(response => response.json())
.then(data => printHTML(data))

function printHTML(data){
    const APIdata = data.data.filter(news => (news.image)? true : false) // filtra noticias sin imagen
    loading.remove()
    let count = 1;

    APIdata.map( data => { //crear un elemento por cada dato

    const shortDescription = data.description.split(' ').splice(0, 20).join(' ') //recorta descripción a n palabras

    const news = document.createElement('ul'); 
    news.setAttribute("id", `${count++}`);
    news.innerHTML = `
    <li class="li_img"><img src="${data.image}" alt="News image"></li>
    <li class="li_title">${data.title}</li>
    <li class="li_description">${shortDescription}[...]</li>
    <li>${data.author}</li>
    <li>${data.published_at.split("T")[0]}</li> 
    <li><button><a href="${data.url}">Visit</a></button></li>    
    `;
    body.appendChild(news)
})
}

// buttons functions (vista TABLET-MOBILE)

window.addEventListener('resize', () => { // listener para acomodar el scroll cuando pasa a vista TABLET o menor
    if(body.offsetWidth <= 800) window.scroll(0,0) 
    }) 

btnPrevious.addEventListener('click', () => {
    const listHeight = body.offsetHeight;  // height de cada lista

    if(window.scrollY > 0){
        window.scrollY -= listHeight // valor para hacer scroll una lista atrás
    } else {
        window.scrollY = body.scrollHeight - listHeight; // valor para hacer scroll hasta la última lista
    }
    window.scroll(0, window.scrollY)
})

btnNext.addEventListener('click', () => {
    const listHeight = body.offsetHeight;

    if(window.scrollY < body.scrollHeight - listHeight){
        window.scrollY += listHeight
    } else {
        window.scrollY = 0;
    }
    window.scroll(0, window.scrollY)
})
