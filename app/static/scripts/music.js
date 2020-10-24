var load_default_chatbox_text = function(){

    var chatbox = document.getElementById('chatbox').getElementsByTagName('input')[0];
    chatbox.value = "Click here to chat...";
    var default_on = true;

    chatbox.style.fontWeight = "600";
    chatbox.style.fontStyle = "normal";

    chatbox.addEventListener('focus', function(){
        if(default_on == true){
            chatbox.value = "";
            chatbox.style.fontWeight = "";
            chatbox.style.fontStyle = "";
            default_on = false;
        }
    });

    chatbox.addEventListener('blur', function(){
        if(default_on == false && chatbox.value == ""){
            chatbox.value = "Click here to chat...";
            chatbox.style.fontWeight = "600";
            chatbox.style.fontStyle = "normal";
            default_on = true;
        }
    })
}

var play_pause_song = function(audio, play_button){
    
    if(audio.paused){
        audio.play();
        play_button.src = "../static/images/pause.png";
    }
    else{
        audio.pause();
        play_button.src = "../static/images/play.png";
    }
}

var restart_song = function(audio){
    audio.currentTime = 0;
}

var control_panel_setup = function(){
    var play_button = document.getElementById('play_button');
    var previous_button = document.getElementById('previous_button');

    var audio = new Audio('../static/music/ideals.wav');

    play_button.addEventListener("click", function(){
        play_pause_song(audio, play_button);
    });

    previous_button.addEventListener("click", function(){
        restart_song(audio);
    });
}

load_default_chatbox_text();
control_panel_setup();