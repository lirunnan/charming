// liuxing
setInterval(function() {
  $(".lightDesire").addClass("liuxing");
  setTimeout(function() {
    $(".lightDesire").removeClass("liuxing");
  }, 5000)
}, 6000)
//  main
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

function tog(num) {
  $("section .group").eq(num).show();
  $("section .group").eq(num).siblings().hide();
}
$("#money").click(function() {
  $(".dashang").fadeIn();
})
$(".dashang a").click(function() {
  $(".dashang").fadeOut();
})
//
var share_status = false;

function share() {
  share_status = !share_status;
  if (share_status) {
    $(".wave_group").css("bottom", "4%");
    $(".sns-share").slideDown(1000);
    $("#money").fadeIn();
  } else {
    $(".wave_group").css("bottom", "0");
    $(".sns-share").fadeOut(1000);
  }
}
//
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
$("#money").click(function() {
  ga('send', 'event', 'money', '打赏');
})
// 冒泡子
function maopao(arra) {
  var temp;
  for (var i = 0; i < arra.length; i++) { //比较多少趟，从第一趟开始
    for (var j = 0; j < arra.length - i - 1; j++) { //每一趟比较多少次数
      if (arra[j] > arra[j + 1]) {
        temp = arra[j];
        arra[j] = arra[j + 1];
        arra[j + 1] = temp;
      }
    }
  };
  return arra;
}

var arrry = [85, 24, 63, 17, 31, 17, 86, 50];

var s = maopao(arrry);

console.log(s)
app.controller("homeCtrl", function() {

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
