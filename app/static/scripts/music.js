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

load_default_chatbox_text();