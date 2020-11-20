import {database} from '../firebase_init.js';

export var getUsers = function(){

    return new Promise((resolve) => {
        database.ref('meta/current_users').on('value', function(snapshot){
        var users = snapshot.val();
        resolve(users);
        }); 
    });
};

var checkSpace = function(users){
    if(users == 95){
        alert('Sorry, there are too many users in this room right now. Unfortunately, we cannot add you.');
    }
    else {
        console.log("logged in!");
    }
};

export var validateUsers = async function(){
    
    try {
        const users = await getUsers();
        //console.log(users);
        checkSpace(users);
        return users;
    } catch (e) {
        console.log("error: reporting 95");
        checkSpace(95);
        return 95;
    }
};

export var increaseUserCount = async function(){

    const users = await validateUsers();
    database.ref('meta').set({
        current_users: users + 1
    });

    console.log(await getUsers());
    
};

export var setupCheckout = function(){

    window.onunload = async function() {
        const users = await getUsers();
        database.ref('meta').set({
            current_users: users - 1
        });
    }
}