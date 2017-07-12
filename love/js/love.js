angular.module("app", []).controller("myCtrl", function($scope, $http) {
    list();
    $scope.tog = function(index) {
        $(".content-inner").eq(index).show();
        $(".content-inner").eq(index).siblings().hide();
        switch (index) {
            case 0:
                $(".cover").css("left", 0).removeClass("cover_border_right").addClass("cover_border");
                $(".refresh").show();
                break;
            case 1:
                $(".cover").css("left", "52%").removeClass("cover_border").addClass("cover_border_right");
                $(".refresh").hide();
                break;

        }
    }
    $scope.fresh = function() {
        $(".refresh").addClass("refresh_ani");
        setTimeout(function() {
            $(".refresh").removeClass("refresh_ani");
        }, 1100);
        list();
    }

    function list() {
        $http.jsonp("http://localhost:3030/love_list?callback=JSON_CALLBACK").success(function(res) {
            $scope.list = res;
            if ($scope.list.length != 0) {
                console.log($scope.list);
                $(".content").show();
            }
        })
    }
    // $http.jsonp("http://localhost:3030/love_user?callback=JSON_CALLBACK").success(function(res) {
    //     $scope.user = res;
    // })
    // $http.jsonp("http://localhost:3030/love_money?callback=JSON_CALLBACK").success(function(res) {
    //     $scope.money = res;
    // })
    $(".content").show();
    // 测试用，可删除
    $scope.list = [{
            "id": 1,
            "username": "纯粉小肚兜",
            "headImg": "http://omoppyc8u.bkt.clouddn.com/a1.jpg",
            "voice": "http://omoppyc8u.bkt.clouddn.com/audio02.mp3",
            "profession": "老师",
            "age": 26,
            "scene": "yi'ge一个chang'jing",
            "like": 0,
            "info": "新人，求撩～"
        },
        {
            "id": 2,
            "username": "精神病院院长",
            "headImg": "http://omoppyc8u.bkt.clouddn.com/a2.jpg",
            "voice": "http://omoppyc8u.bkt.clouddn.com/audio03.mp3",
            "profession": "学生",
            "age": 19,
            "scene": "yi'ge一个chang'jing",
            "like": 0,
            "info": "我可以做一些污污污的事情哦"
        },
        {
            "id": 3,
            "username": "小梦儿",
            "headImg": "http://omoppyc8u.bkt.clouddn.com/a3.jpg",
            "voice": "http://omoppyc8u.bkt.clouddn.com/audio04.mp3",
            "profession": "学生",
            "age": 23,
            "scene": "yi'ge一个chang'jing",
            "like": 0,
            "info": "长得帅的来啊！"
        }
    ]
    $scope.user = {
        "nickname": "so well👑",
        "sexName": "男",
        "subscribeTime": 0,
        "country": "中国",
        "city": "昆明",
        "id": 1,
        "province": "云南",
        "headimgurl": "http://wx.qlogo.cn/mmopen/ajNVdqHZLLDptpS2Tcd40sExjaDMCdictSckicOCeMWmWFWWibRlpLR42Dss4BIiaES8icpJPYWXkSlicrQ2tKiaJOTsQ/0"
    }
    $scope.money = {
        "id": 2,
        "balance": 3,
        "used": 0,
        "userId": 1
    }
    var audio = document.querySelector("#voice");
    $scope.play = function(i) {
        $("#voice").attr("src", $scope.list[i].voice);
        audio.play();
        $(".voice").eq(i).addClass("big");
        setTimeout(function() {
            $(".voice").eq(i).removeClass("big");
        }, 800)
    }
})
