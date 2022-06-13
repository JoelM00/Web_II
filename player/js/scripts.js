const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('.#play')
const prevBtn = document.querySelector('.#prev')
const nextBtn = document.querySelector('.#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')


// Song titles
const songs = ['music']

// Keep track of songs
let songIndex = 0

// Inicially load song ingo DOM
loadSong(songs[songIndex])

// Update song details
function loadSong(song) {
    title.innerHTML = song
    audio.src = `./${song}.mp3`
    cover.src = `./${song}.PNG`
}
