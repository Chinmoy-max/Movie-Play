var myVideo = document.getElementById('video');

function Play_Pause() {
    if(myVideo.paused){
        return myVideo.play();
    }else{
        return myVideo.pause();
    }
}

