var app = angular.module("app", []);
app.controller("myCtrl", function($scope, $http) {
  // $http.jsonp("").success(function(res){
  $scope.user = {
    "avatar":"http://media.kitty.live/upload/b499c89571b24f88914a0604c8608750.jpe",
    "nickname":"王美丽",
    "des":"我是一个很爱说话还不黏人的小妖精"
  }
  $scope.list = [{
    "date": "4-47",
    "text": "天气不错",
    "avatar": "http://media.kitty.live/upload/12bccf3c0ee1409fae61897c526dcef5.jpg"
  }, {
    "date": "4-47",
    "avatar": "http://media.kitty.live/upload/b499c89571b24f88914a0604c8608750.jpe"
  }, {
    "date": "4-46",
    "text": "天气不错",
  }, {
    "date": "4-45",
    "avatar": "http://media.kitty.live/upload/b499c89571b24f88914a0604c8608750.jpe"
  }];
  // })
  var status = 0;
  var popStatus = false;
  var h = document.documentElement.clientHeight;
  document.addEventListener("touchmove", function(e) {
    if (popStatus) {
      e.preventDefault();
    }
  });
  $scope.big = function(i) {
    $(".pop img").attr("src", $scope.list[i].avatar);
    $(".pop").show();
    status = 1;
    popStatus = true;
    // var n = Math.floor((h - parseInt($(".pop img").css("height"))) / 2);
    // $(".pop img").css("margin-top", n + "px");
    console.log(n);
  }
  $(".pop").click(function() {
    $(".pop").hide();
    status = 0;
    popStatus = false
  })
  $(".user_img").click(function() {
    $(".pop img").attr("src", $(".user_img img").attr("src"));
    $(".pop").show();
    status = 1;
    popStatus = true;
  })
  $(".notice").click(function() {
    $(this).css("opacity", "0");
    // $.ajax({
    //   url: '',
    //   crossDomain: true,
    //   xhrFields: {
    //     withCredentials: true
    //   },
    //   type: 'post',
    //   dataType: "json",
    //   data: JSON.stringify({
    //       //  key: value
    //   }),
    //   success: function(dataPost) {
    //      //  ...撩成功
    //   }
    // })
  })
  $(".nickname a").click(function() {
    $(this).addClass("voiceAni");
    setTimeout(function() {
      $(".nickname a").removeClass("voiceAni");
    }, 1100);
  })
  $(window).scroll(function() {
    console.log(h);
    if ($(this).scrollTop() >= ($(".counter").offset().top - h + $(".counter").height())) {
      console.log("哇哦");
      $scope.list.push({
        "date": "4-47",
        "avatar": "http://media.kitty.live/upload/b499c89571b24f88914a0604c8608750.jpe"
      });
      $scope.$digest();
    }
  })
})
