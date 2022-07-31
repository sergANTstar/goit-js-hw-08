
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const player = new Player(document.querySelector('iframe'));
    const throttle = require('lodash.throttle');
    
    player.on('timeupdate', throttle((data) =>{
    const time = data.seconds;
    localStorage.setItem("videoplayer-current-time", time)
    }, 1000));
    const onTime = localStorage.getItem("videoplayer-current-time");

    player.setCurrentTime(onTime).then(function(seconds) {
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;
            default:
                break;
        }
    });