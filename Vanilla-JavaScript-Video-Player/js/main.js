const video = document.querySelector('.video');
const bluJuc = document.querySelector('.blu-juc');
const btn = document.getElementById('play-pause');


console.log(video.attributes);
console.log(video.getAttribute('.video'));







function togglePlayPause() {
    if(video.paused){
        btn.className = "pause";
        video.play();
    }else{
        btn.className = 'play';
        video.pause();
    }
}
// btn.onclick= function (){
//     alert('play!!!');
// }
btn.addEventListener('click', (e)=>{
    e.preventDefault();
    // alert('play!!!');
    togglePlayPause();
});


video.addEventListener('timeupdate', ()=>{
    const jucPos = video.currentTime / video.duration;
    console.log(jucPos);
    
    bluJuc.style.width = jucPos * 100 + "%";
    if(video.ended){
        btn.className = "play";
    }

})

