const modal = document.getElementById('modal');
const btnPlay = document.getElementById('btn-play')

const video = document.createElement('div'); 
    video.innerHTML = `
        <iframe 
            src="https://www.youtube.com/embed/uILXl6BCYJ4" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write;  encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>     
        `; // video desde YouTube

btnPlay.addEventListener('click', () => {
    modal.classList.remove('d-none');
    modal.appendChild(video);
} )

modal.addEventListener('click', () => {
    modal.classList.add('d-none');
    video.remove()
} )