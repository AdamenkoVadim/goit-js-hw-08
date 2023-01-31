import Player from '@vimeo/player';
import throttle  from "lodash.throttle";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const KEY_LOCAL_STORAGE = "videoplayer-current-time";

player.on('timeupdate', throttle(onPlay,3000)); 

function onPlay(data) {
    localStorage.setItem(KEY_LOCAL_STORAGE,data.seconds)
}

function getTime() {
    const localTime = localStorage.getItem(KEY_LOCAL_STORAGE);
    if(localTime) {
        player.setCurrentTime(localTime)
    }
}
getTime()