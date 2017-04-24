function jump(index) {
    $(".example li").eq(index).addClass("exampleLiAni");
    setTimeout(function() {
        $(".example li").eq(index).removeClass("exampleLiAni");
    }, 1200)
    $(".example_pop").show();
    console.log(index);
    $(".pop_inner .code").eq(index).show();
    $(".pop_inner .code").eq(index).siblings().hide();
}

function popClose() {
    $(".example_pop").hide();
}
$(document).scroll(function() {
    $(".back").show();
})
window.onload = function() {
    setInterval(function() {
        var date = new Date();
        var year = date.getFullYear(); //获取当前年份
        var mon = date.getMonth() + 1; //获取当前月份
        var da = date.getDate(); //获取当前日
        var day = date.getDay(); //获取当前星期几
        var h = date.getHours(); //获取小时
        var m = date.getMinutes(); //获取分钟
        var s = date.getSeconds(); //获取秒
        var d = document.getElementById('time');
        d.innerHTML = year + '年' + mon + '月' + da + '日' + "," + '星期' + day + ',' + h + ':' + m + ':' + s;
    }, 1000)
}

function aa() {
    d = setInterval("yan()", 200);
}
aa();
var a = 0;

function yan() {
    var arr = new Array("手", "扎", "记");
    var sun = document.getElementsByClassName("title")[0];
    sun.innerHTML += arr[a];
    a++;
    if (a > 2) {
        clearInterval(d);
    }

}

//禁止右键和f12
// function click(e) {
//     if (document.all) {
//         if (event.button == 2 || event.button == 3) {
//             alert("你要干嘛");
//             oncontextmenu = 'return false';
//         }
//     }
//     if (document.layers) {
//         if (e.which == 3) {
//             oncontextmenu = 'return false';
//         }
//     }
// }
// if (document.layers) {
//     document.captureEvents(Event.MOUSEDOWN);
// }
// document.onmousedown = click;
// document.oncontextmenu = new Function("return false;")
// document.onkeydown = document.onkeyup = document.onkeypress = function() {
//     if (window.event.keyCode == 123) {
//         window.event.returnValue = false;
//         return (false);
//     }
// }
