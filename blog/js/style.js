bg();
$(".goIn").click(function() {
  $(".kuang").fadeIn();
  $(".goIn").fadeOut();
  $("#coverBlack").remove();
  $("canvas").remove();
  $("body").css("overflow", "auto").css("overflow-x", "hidden");
});
var arrowClick = 0;

function prev() {
  if (arrowClick >= 0) {
    arrowClick--;
    if (arrowClick == -1) {
      arrowClick = 2;
    }
    $("section .group").eq(arrowClick).show();
    $("section .group").eq(arrowClick).siblings().hide();
  }
}

function next() {
  if (arrowClick <= $(".group").length - 1) {
    arrowClick++;
    if (arrowClick == $(".group").length) {
      arrowClick = 0;
    }
    $("section .group").eq(arrowClick).show();
    $("section .group").eq(arrowClick).siblings().hide();
  }
  console.log(arrowClick);
}

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
app.controller("homeCtrl", function() {
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
});
app.controller("timuCtrl", function() {
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
});
app.controller("jiqiaoCtrl", function() {
  // js常用小技巧
  var bool = 1;
  var fBool = !bool,
    ffBool = !!bool;
  $(".runBtn a").eq(0).click(function() {
    $(".runBtn span").eq(0).html("" + fBool + "");
  })
  $(".runBtn a").eq(1).click(function() {
    $(".runBtn span").eq(1).html("" + ffBool + "");
  });
})
// ///////////////////
