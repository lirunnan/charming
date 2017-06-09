$("body").prepend("<div id='stars'></div><div id='stars2'></div><div id='stars3'></div>");

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
if (document.getElementById("time")) {
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
}

//  opacity linear
var div = document.getElementsByTagName("div"),
  num = 0,
  j = setInterval(function() {
    if (num < div.length) {
      div[num].style.opacity = 1;
      num++;
    } else {
      clearInterval(j);
    }
  }, 200);

// 禁止f12 右键
function click(e) {
  if (document.all) {
    if (event.button == 2 || event.button == 3) {
      oncontextmenu = 'return false';
      alert("你要干嘛");
    }
  }
  if (document.layers) {
    if (e.which == 3) {
      oncontextmenu = 'return false';
      alert("你要干嘛");
    }
  }
}
if (document.layers) {
  document.captureEvents(Event.MOUSEDOWN);
}
document.onmousedown = click;
document.oncontextmenu = new Function("return false;")
document.onkeydown = document.onkeyup = document.onkeypress = function() {
  if (window.event.keyCode == 123) {
    window.event.returnValue = false;
    return (false);
  }
}
// timu.html demo show
// 闭包
var right = document.getElementsByClassName("right");
if (right.length > 0) {
  var a = right[0].getElementsByTagName("a");
  for (var i = 0; i < a.length; i++) {
    a[i].onclick = (function(i) {
      return function() {
        alert(i + 1);
      }
    })(i)
  }
}
var show = document.getElementsByClassName("show");
var run = document.getElementsByClassName("showRun");
// 数组去重
var arr = [9, 9, 111, 2, 3, 4, 4, 5, 7];
var sortedArr = arr.sort();
var results = [];
for (var i = 0; i < arr.length; i++) {
  if (sortedArr[i + 1] != sortedArr[i]) {
    results.push(sortedArr[i]);
  }
}
// console.log(results);

// 数组排序
var brr = [1, 11, 2, 22, 33, 4, 3, 44, 5];
var brrSort = brr.sort(function(a, b) {
  return a - b;
})
// console.log(brrSort);
var showTotal = {
  "0": results,
  "1": brrSort
};
for (var i = 0; i < run.length; i++) {
  run[i].onclick = (function(i) {
    return function() {
      show[i].innerHTML = "[" + showTotal[i] + "]";
    }
  })(i);
}
// js常用小技巧
var bool = 1;
var fBool = !bool,
  ffBool = !!bool;
$(".runBtn a").eq(0).click(function() {
  $(".runBtn span").eq(0).html("" + fBool + "");
})
$(".runBtn a").eq(1).click(function() {
  $(".runBtn span").eq(1).html("" + ffBool + "");
})
