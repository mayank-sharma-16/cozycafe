import {database} from '../firebase_init.js';

export var add_message_to_chat = async function(room_id, message){
    await new Promise((resolve) => {
        database.ref('rooms/' + room_id).set({
            latest_chat: message
        })
    });
}