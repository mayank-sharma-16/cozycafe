import {database} from '../firebase_init.js';

export var setupChatListen = function(room_id){
    database.ref('rooms/'+room_id+'/latest_chat').on('value', function(snapshot) {
        console.log(snapshot.val());
        var message = document.getElementById('message1');
        message.innerHTML = snapshot.val();
        console.log(message.value);
    });
}