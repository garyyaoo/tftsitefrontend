
var x = 1;

export function startCollecting() {
    var CronJob = require('cron').CronJob;
    var job = new CronJob('* * * * * *', 
        () => {
            x++;
            console.log(x);
        }, 
        null, true, 'America/Los_Angeles');
    job.start();
}
