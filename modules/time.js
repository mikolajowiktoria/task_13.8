function activTime (uptime) {
    var hours = Math.floor(uptime / 3600);
    uptime %= 3600;
    var minutes = Math.floor(uptime / 60);
    var seconds = (uptime % 60).toFixed(0);
    
    return hours + ' hours and ' + minutes + ' minutes and ' + seconds + ' seconds.';
}

exports.print = activTime;