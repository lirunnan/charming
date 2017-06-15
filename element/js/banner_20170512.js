var state;
$.ajax({
  url: 'http://testapi.kitty.live/v1/activity/element/current/stage',
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  },
  type: 'get',
  dataType: "jsonp",
  success: function(data) {
    // console.log(data);
    var basestate = data.current_stage;
    basestate = 3;
    if (basestate == 1 || basestate == 2) {
      state = 1;
    } else if (basestate == 3 || basestate == 4) {
      state = 2;
    } else if (basestate == 5 || basestate == 6 || basestate == 7 || basestate == -1) {
      state = 3;
    } else {
      state = 0;
    }
    $(".header").eq(state - 1).show();
    $(".header").eq(state - 1).siblings().hide();
    if (state == 2 || state == 3) {
      $(".rankPanel").hide();
    }
    if (state == 1 || state == 2) {
      $(".content").eq(0).show();
      $(".content").eq(1).hide();
    } else if (state == 3) {
      $(".content").eq(0).hide();
      $(".content").eq(1).show();
      step3();
    } else {
      $(".content").hide();
    }
    if (state == 1 || state == 2 || state == 3) {
      $(".container").show();
      $('.soon').hide();
    } else {
      $(".soon").show();
      $(".container").hide();
    }
    if (state == 2) {
      step2();
    }
  }
})

function tog(index) {
  $(".toggle a").eq(index).css("color", "#000").addClass("togBg");
  $(".toggle a").eq(index).siblings().css("color", "#F0C859").removeClass("togBg");
  if (state == 3) {
    console.log("ok");
    switch (index) {
      case 0:
        $(".content").eq(1).show();
        $(".listpkUser").hide();
        break;
      case 1:
        $(".content").eq(1).hide();
        $(".listpkUser").show();
        break;

    }
  } else {
    switch (index) {
      case 0:
        $(".content").eq(0).show();
        $(".listpkUser").hide();
        break;
      case 1:
        $(".content").eq(0).hide();
        $(".listpkUser").show();
        break;

    }
  }
}
// var pop = document.getElementsByClassName("pop")[0];
// pop.addEventListener("touchmove", function(e) {
//     e.preventDefault();
// });
function popShow() {
  $(".rules").css("box-shadow", "0 0 3rem #F0C859");
  setTimeout(function() {
    $(".rules").css("box-shadow", "0 0 0 #F0C859");
  }, 1000)
  setTimeout(function() {
    $(".pop").show();
  }, 1500)
}

function popClose() {
  $(".pop").hide();
}

function alertClose() {
  $(".alert").hide();
}
//user
$.ajax({
  // url: 'http://testapi.kitty.live/v1/activity/element/rank/list?rank_type=2',
  url: 'http://localhost:3030/list',
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  },
  type: 'get',
  dataType: "jsonp",
  success: function(data) {
    // console.log(data);
    var listpkUser = document.getElementsByClassName("listpkUser");
    var html_user = juicer(document.getElementById("tpl_user").innerHTML, data);
    listpkUser[0].innerHTML = html_user;
  }
})
// step1
$.ajax({
  url: 'http://testapi.kitty.live/v1/activity/element/rank/list',
  crossDomain: true,
  xhrFields: {
    withCredentials: true
  },
  type: 'get',
  dataType: "jsonp",
  success: function(data) {
    var tpl = document.getElementById('tpl').innerHTML;
    var list = document.getElementsByClassName("list");
    var html = juicer(tpl, data);
    list[0].innerHTML = html;
  }
})
// step 2
function step2() {
  var num = Math.floor(Math.random() * 5),
    elementDeg = 0;
  // get
  $.ajax({
    url: 'http://testapi.kitty.live/v1/activity/element/turntable/number',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    type: 'get',
    dataType: "jsonp",
    success: function(data) {
      // console.log(data);
      var chioceElementImg = ["http://media.kitty.live/upload/12a98073f6464d2c9f1ec02df89683b1.png",
        "http://media.kitty.live/upload/372b5b85c6e74a699e88caee028f041f.png",
        "http://media.kitty.live/upload/ebad08264b8a435ca2b2a7f1ffbc1131.png",
        "http://media.kitty.live/upload/ea789a8052a64ad4a408301d3e35e4a7.png",
        "http://media.kitty.live/upload/26e2e70427f544b68626a25e87acfa2a.png"
      ];
      if (data.turntable) {
        for (var i = 0; i < data.turntable.length; i++) {
          chioceImg = data.turntable[i].element;
          if (chioceImg == "soil") {
            chioceNum = 0;
          } else if (chioceImg == "thunder") {
            chioceNum = 2;
          } else if (chioceImg == "fire") {
            chioceNum = 4;
          } else if (chioceImg == "wind") {
            chioceNum = 3;
          } else if (chioceImg == "water") {
            chioceNum = 1;
          }
          $(".element").eq(chioceNum).prepend("<img onclick='go(" + data.turntable[i].streamer_id + ")' src='" + data.turntable[i].avatar + "'/>");
          $(".element").eq(chioceNum).find("img").eq(1).addClass("elementImgBian");
        }
      }
      var elChioce = data.element;
      if (elChioce) {
        if (elChioce == "soil") {
          Img = "http://media.kitty.live/upload/12a98073f6464d2c9f1ec02df89683b1.png";
        } else if (elChioce == "thunder") {
          Img = "http://media.kitty.live/upload/ebad08264b8a435ca2b2a7f1ffbc1131.png"
        } else if (elChioce == "fire") {
          Img = "http://media.kitty.live/upload/26e2e70427f544b68626a25e87acfa2a.png"
        } else if (elChioce == "wind") {
          Img = "http://media.kitty.live/upload/ea789a8052a64ad4a408301d3e35e4a7.png";
        } else if (elChioce == "water") {
          Img = "http://media.kitty.live/upload/372b5b85c6e74a699e88caee028f041f.png"
        }
        $(".spin").css("font-size", "1rem").html("Daily Element Is: <img src='" + Img + "'/>");
      } else {
        $(".spin").html("spin");
      }
      var clickStatus = data.status;
      clickStatus = 1;
      if (clickStatus == -1) {
        $(".spin").css("font-size", "1.1rem").html("Elements All Settled");
      } else {
        //post
        $(".spin").click(function() {
          switch (clickStatus) {
            case 0:
              $(".alert").show().html("Not Ready Yet");
              break;
            case 1:
              // console.log("ok");
              $(".lightning").css("height", "15rem");
              setTimeout(function() {
                $(".element_group").css("box-shadow", "0 0 7rem #F0C859");
                $(".element").css("background-size", "80%");
                $(".lightning").hide();
              }, 1500);
              setTimeout(function() {
                // $.ajax({
                //   url: 'http://testapi.kitty.live/v1/activity/element/turntable/number',
                //   crossDomain: true,
                //   xhrFields: {
                //     withCredentials: true
                //   },
                //   type: 'post',
                //   dataType: "json",
                //   success: function(dataPost) {
                console.log(dataPost);
                var dataPost = {
                  "element": "fire"
                }
                var ele = dataPost.element;
                if (ele == "soil") {
                  elementDeg = 0;
                  Img = "http://media.kitty.live/upload/12a98073f6464d2c9f1ec02df89683b1.png";
                } else if (ele == "water") {
                  elementDeg = 72;
                  Img = "http://media.kitty.live/upload/372b5b85c6e74a699e88caee028f041f.png"
                } else if (ele == "wind") {
                  elementDeg = 144;
                  Img = "http://media.kitty.live/upload/ea789a8052a64ad4a408301d3e35e4a7.png"
                } else if (ele == "fire") {
                  elementDeg = 216;
                  Img = "http://media.kitty.live/upload/26e2e70427f544b68626a25e87acfa2a.png";
                } else if (ele == "thunder") {
                  elementDeg = 288;
                  Img = "http://media.kitty.live/upload/ebad08264b8a435ca2b2a7f1ffbc1131.png"
                } else {
                  elementDeg = 0;
                }
                clickStatus = dataPost.status;
                var zhuanNum = elementDeg + (360 * (num + 1));
                $(".element_group").css("transform", "rotate(" + zhuanNum + "deg)")
                $(".element").css("transform", "rotate(-" + zhuanNum + "deg)")
                setTimeout(function() {
                  $(".element_group").css("box-shadow", "0 0 0rem #F0C859");
                  $(".element").css("background-size", "100%");
                  $(".lightning").css("height", 0).show();
                  $(".spin").css("font-size", "1rem").html("Daily Element Is: <img src='" + Img + "'/>");
                }, 2500)
                // }
                //   })
              }, 2500)
              break;
            case 2:
              $(".alert").show().html("Times Up");
              break;
          }
        })
      }
    }
  })
}
// liu xing
setInterval(function() {
  $(".lightDesire").addClass("liuxing");
  setTimeout(function() {
    $(".lightDesire").removeClass("liuxing");
  }, 1500)
}, 5000)
// step3
function step3() {
  $.ajax({
    url: 'http://testapi.kitty.live/v1/activity/element/rank/list',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    type: 'get',
    dataType: "jsonp",
    success: function(data) {
      var listData = data.rank_list;
      var tplPkVj = document.getElementById('tplPkVj').innerHTML;
      var listPkVj = document.getElementById("listPkVj");
      var html_vj = juicer(tplPkVj, data);
      var ImgArr = [];
      listPkVj.innerHTML = html_vj;
      for (var i = 0; i < listData.length; i++) {
        for (var j = 0; j < 2; j++) {
          var element = listData[i][j].element;
          console.log(element);
          if (element == "soil") {
            ImgArr.push("http://media.kitty.live/upload/12a98073f6464d2c9f1ec02df89683b1.png");
          } else if (element == "thunder") {
            ImgArr.push("http://media.kitty.live/upload/ebad08264b8a435ca2b2a7f1ffbc1131.png");
          } else if (element == "fire") {
            ImgArr.push("http://media.kitty.live/upload/26e2e70427f544b68626a25e87acfa2a.png");
          } else if (element == "wind") {
            ImgArr.push("http://media.kitty.live/upload/ea789a8052a64ad4a408301d3e35e4a7.png");
          } else if (element == "water") {
            ImgArr.push("http://media.kitty.live/upload/372b5b85c6e74a699e88caee028f041f.png");
          }
        }
      }
      console.log(ImgArr);
      for (var i = 0; i < ImgArr.length; i++) {
        console.log(i);
        $(".elImg img").eq(i).attr("src", ImgArr[i]);
      }
    }
  });
  // table
  $.ajax({
    url: 'http://testapi.kitty.live/v1/activity/element/final/rank',
    crossDomain: true,
    xhrFields: {
      withCredentials: true
    },
    type: 'get',
    dataType: "jsonp",
    success: function(data) {
      // console.log(data);
      var total = data.total_score;
      var daily = data.daily_score;
      // console.log(daily);
      var finalEl = ["wind", "thunder", "soil", "water", "fire"];
      for (var i = 0; i < 5; i++) {
        $(".finalTotal td").eq(i + 1).html(total[finalEl[i]]);
      }
      if (daily["1"]) {
        for (var i = 0; i < 5; i++) {
          $(".finalTab tr").eq(1).find("td").eq(i + 1).html(daily["1"][finalEl[i]]);
        }
      }
      if (daily["2"]) {
        for (var i = 0; i < 5; i++) {
          $(".finalTab tr").eq(2).find("td").eq(i + 1).html(daily["2"][finalEl[i]]);
        }
      }
      if (daily["3"]) {
        for (var i = 0; i < 5; i++) {
          $(".finalTab tr").eq(3).find("td").eq(i + 1).html(daily["3"][finalEl[i]]);
        }
      }
    }
  })
}
var clicked = false;

function go(user_id) {
  if (clicked) return;
  clicked = true;
  setTimeout(function() {
    clicked = false
  }, 2000);
  location.href = 'kitty://com.kitty/dynamic_user?user_id=' + user_id;
}
