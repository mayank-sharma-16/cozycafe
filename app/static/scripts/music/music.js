// import {database} from "../firebase_init.js";
import {load_components} from "./music_events.js";
import {increaseUserCount, setupCheckout} from "../util/user_verification.js";
import {setupChatListen} from "../util/data_listen.js";

setupChatListen("dev_room");
setupCheckout();
increaseUserCount();
load_components();

