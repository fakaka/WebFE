/**
 * Created by mj on 2016/11/15.
 */



window.onload = function () {
    info = document.getElementById("info")

    // map.setMapStyle("light");


    var click = document.getElementById("get");

    click.addEventListener("click", function () {
        getLocation()
    })
}
function getLocation() {
    if (navigator.geolocation) {
        console.log("geolocation 可用")
        navigator.geolocation.getCurrentPosition(showPosition, showError)
    }
    else {
        info.innerHTML = "该浏览器不支持获取地理位置。";
    }
}

function showPosition(position) {
    console.log("success")
    var latitude = position.coords.latitude
    var longitude = position.coords.longitude
    console.log("纬度: " + latitude + "<br>经度: " + longitude)
    var map = new AMap.Map('container', {
        zoom: 10,
        center: [longitude, latitude]
    });
    /*    coords.latitude	十进制数的纬度
     coords.longitude	十进制数的经度
     coords.accuracy	位置精度
     coords.altitude	海拔，海平面以上以米计
     coords.altitudeAccuracy	位置的海拔精度
     coords.heading	方向，从正北开始以度计
     coords.speed	速度，以米/每秒计
     timestamp 响应的日期/时间*/

}

function showError(error) {
    console.log("error")
    switch (error.code) {
        case error.PERMISSION_DENIED:
            info.innerHTML = "用户拒绝对获取地理位置的请求。"
            break;
        case error.POSITION_UNAVAILABLE:
            info.innerHTML = "位置信息是不可用的。"
            break;
        case error.TIMEOUT:
            info.innerHTML = "请求用户地理位置超时。"
            break;
        case error.UNKNOWN_ERROR:
            info.innerHTML = "未知"
            break;
    }
}
