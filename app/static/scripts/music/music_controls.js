
export var play_pause_song = function(audio, play_button){
    
    if(audio.paused){
        audio.play();
        play_button.src = "../static/images/pause.png";
    }
    else{
        audio.pause();
        play_button.src = "../static/images/play.png";
    }
}

export var restart_song = function(audio){
    audio.currentTime = 0;
}