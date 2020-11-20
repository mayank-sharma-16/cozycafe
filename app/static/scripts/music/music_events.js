import {play_pause_song, restart_song} from './music_controls.js';
import {add_message_to_chat} from '../util/data_write.js';

var zero_chatbox = function(chatbox){
    chatbox.value = "";
    chatbox.style.fontWeight = "";
    chatbox.style.fontStyle = "";
};

var default_chatbox = function(chatbox){
    chatbox.value = "Click here to chat...";
    chatbox.style.fontWeight = "600";
    chatbox.style.fontStyle = "normal";

}

var load_default_chatbox_text = function(){

    var chatbox = document.getElementById('chatbox').getElementsByTagName('input')[0];
    chatbox.value = "Click here to chat...";
    var default_on = true;

    chatbox.style.fontWeight = "600";
    chatbox.style.fontStyle = "normal";

    chatbox.addEventListener('focus', function(){
        if(default_on == true){
            zero_chatbox(chatbox);
            default_on = false;
        }
    });

    chatbox.addEventListener('blur', function(){
        if(default_on == false && chatbox.value == ""){
            default_chatbox(chatbox);
            default_on = true;
        }
    });

    chatbox.addEventListener('keypress', function(event){
        if(event.key == "Enter"){
            add_message_to_chat("dev_room", chatbox.value);
            zero_chatbox(chatbox);
        }
    });
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

export var load_components = function(){
    load_default_chatbox_text();
    control_panel_setup();
}