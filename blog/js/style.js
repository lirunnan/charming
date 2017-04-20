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
