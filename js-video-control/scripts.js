// get our Elements
const player =document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress= player.querySelector('.progress');
const progressBar= player.querySelector('.progress__filled');
const toggle= player.querySelector('.toggle');
const skipButtons=player.querySelectorAll('[data-skip]');
const ranges= player.querySelectorAll('.player__slider');




//build out our functions
function togglePlay()
{
video[video.paused ? 'play' : 'pause']();
}

function updateToggleIcon()
{
    toggle.textContent=this.paused ? '►' : '⏸️';

}

function skip(){
video.currentTime +=parseFloat(this.dataset.skip);
}

function handleRange()
{
video[this.name]=this.value;
}

function handleProgress()
{
    let percent = (video.currentTime / video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}

function scrub(e)
{
    const scrubTime = (e.offsetX / progress.offsetWidth)*video.duration;
     video.currentTime=scrubTime;
}
//hook up the event Listeners

video.addEventListener('click',togglePlay);
video.addEventListener('play',updateToggleIcon);
video.addEventListener('pause',updateToggleIcon);
video.addEventListener('timeupdate',handleProgress)
toggle.addEventListener('click',togglePlay);
skipButtons.forEach(button=>button.addEventListener('click',skip)) ;
ranges.forEach(range=>range.addEventListener('change',handleRange));
ranges.forEach(range=>range.addEventListener('mousemove',handleRange));
let mousedown = false;
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove',(e)=> mousedown && scrub(e));
progress.addEventListener('mousedown',()=>mousedown=true);
progress.addEventListener('mouseup',()=>mousedown=false);