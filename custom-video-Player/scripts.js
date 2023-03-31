const player = document.querySelector('.player');
const video = document.querySelector('.viewer');
const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const playerSlider = document.querySelectorAll('.player__slider');
const progress = document.querySelector('.progress');
const progressFilled = document.querySelector('.progress__filled');

function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateToggle() {
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.innerText = icon;
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function updateRange() {
    video[this.name] = this.value;
}

function handleProgress() {
    video[this.name] = this.value;
}

function updateProgress() {
    let percent = (video.currentTime / video.duration) * 100;
    progressFilled.style.flexBasis = `${percent}%`;
}
function scrub(e) {
    let time = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = time;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateToggle);
video.addEventListener('pause', updateToggle);
video.addEventListener('timeupdate', updateProgress);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach((button) => {
    button.addEventListener('click', skip);
})
playerSlider.forEach((slider) => {
    slider.addEventListener('change', updateRange);
    slider.addEventListener('mousemove', updateRange);
})
let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);