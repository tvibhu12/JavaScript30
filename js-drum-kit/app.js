//Listen key press form keyboard
window.addEventListener('keydown',function(e){
    const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`); //capture audio
    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; // stop the function from running all together;
   audio.currentTime=0;
   audio.play();
   key.classList.add('playing');// add animation class
  
});