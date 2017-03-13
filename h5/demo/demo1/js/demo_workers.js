/**
 * Created by mj on 2016/11/16.
 */
var i = 0;

function timedCount() {
    postMessage(i++);
    setTimeout("timedCount()", 1000);
}
timedCount();