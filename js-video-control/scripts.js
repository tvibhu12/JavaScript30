// get our Elements
const player =document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress= player.querySelector('.progress');
const progressBar= player.querySelector('.progress__filled');
const toggle= player.querySelector('.toggle');
const skipButtons=player.querySelectorAll('[data-skip]');
const ranges= player.querySelectorAll('.player__slider');




//build out our functions

//video play or pause
function togglePlay()
{
video[video.paused ? 'play' : 'pause']();
}

//update toggle Icon
function updateToggleIcon()
{
    toggle.textContent=this.paused ? '►' : '⏸️';

}

//skip video in backforward or forward
function skip(){
video.currentTime +=parseFloat(this.dataset.skip);
}

//handle volume  and speed of video
function handleRange()
{
video[this.name]=this.value;
}

//main progress ba rof video
function handleProgress()
{
    let percent = (video.currentTime / video.duration)*100;
    progressBar.style.flexBasis=`${percent}%`;
}

//click to change video's time
function scrub(e)
{
    const scrubTime = (e.offsetX / progress.offsetWidth)*video.duration;
     video.currentTime=scrubTime;
}
//hook up the event Listeners

// Dom  with video
video.addEventListener('click',togglePlay);                               //add click event on video for play or pause video

video.addEventListener('play',updateToggleIcon);                          //add event to change 'play'icon

video.addEventListener('pause',updateToggleIcon);                         //add event to change 'play' icon

video.addEventListener('timeupdate',handleProgress)                       //add event to work volume and speed of video(slow to faster)

toggle.addEventListener('click',togglePlay);                              //add event on toggle icon to play or pause the video

skipButtons.forEach(button=>button.addEventListener('click',skip)) ;      //add click event to skip button for skipping video in backforward or forward

ranges.forEach(range=>range.addEventListener('change',handleRange));      //add click event to work volume and speed of video(slow to faster)

ranges.forEach(range=>range.addEventListener('mousemove',handleRange));   //add mouse move event to work volume and speed of video(slow to faster)

let mousedown = false;

progress.addEventListener('click',scrub);                                 //add click event to work progress bar

progress.addEventListener('mousemove',(e)=> mousedown && scrub(e));       //add click event to work drag function on progress bar

progress.addEventListener('mousedown',()=>mousedown=true);                //check mouse is clicked

progress.addEventListener('mouseup',()=>mousedown=false);                 //check mouse is not clicked