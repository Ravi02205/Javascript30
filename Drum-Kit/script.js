function playSound(e){
    let key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}
function removeTransition(e){
    if(e.propertyName != 'transform') return;
    this.classList.remove('playing');
}
document.querySelectorAll('.key').forEach((item)=>{
    item.addEventListener('transitionend',removeTransition)
});
document.body.addEventListener('keydown',playSound);