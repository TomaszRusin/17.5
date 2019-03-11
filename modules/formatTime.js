
function formatTime (timeS) {
    var time = timeS + 's'
    if (timeS>60) {
        var time = Math.floor(timeS / 60) + 'm ' + timeS % 60 + 's';
    }if(timeS>3600){
        var time = Math.floor((timeS/60)/60) + 'h ' + (Math.floor(timeS / 60))%60 + 'm ' + timeS % 60 + 's';
    }
    return time
};

exports.time = formatTime;