angular.module("app", []).controller("myCtrl", ["$scope", "$http", function(sco, http) {
    // pao
    var $flake = $('<div class="pao"/>').css({
            'position': 'fixed',
            'bottom': '-50px',
            'z-index': 1000
        }).html("<img src ='http://media.kitty.live/upload/a0af37f3a16b49da8034bdc1de3905be.png'/>"),
        documentHeight = $(document).height(),
        documentWidth = $(document).width(),
        defaults = {
            minSize: 4,
            maxSize: 6,
            newOn: 1000
        },
        options = $.extend({}, defaults, options);
    var interval = setInterval(function() {
        var startPositionLeft = Math.random() * documentWidth,
            startOpacity = 0.5 + Math.random(),
            sizeFlake = options.minSize + Math.random() * options.maxSize,
            endPositionBottom = "20.51rem",
            endPositionLeft = Math.random() * (documentWidth / 2),
            durationFall = documentHeight * 10 + Math.random() * 500
        // rotate_num = Math.floor(Math.random() * 360);
        $flake.clone().appendTo('body').css({
            left: startPositionLeft,
            opacity: startOpacity,
            width: sizeFlake + "%",
            // transform: "rotate(" + rotate_num + "deg)"
        }).animate({
            bottom: endPositionBottom,
            left: endPositionLeft,
            opacity: 0.2,
        }, durationFall, 'linear', function() {
            $(this).remove();
        });
    }, options.newOn);
    // 取消冒泡
    // var wrap = document.getElementById("wrap");
    // wrap.addEventListener('touchmove', function(event) {
    //     event.preventDefault();
    // });
    // tog
    sco.tog = function(index) {
        $(".footer li").eq(index).find(".cover_pop").show();
        $(".footer li").eq(index).siblings().find(".cover_pop").hide();
        $(".footer li").eq(index).find("p").css("color", "#fff");
        $(".footer li").eq(index).siblings().find("p").css("color", "rgb(187,116,2)");
        $(".inner").eq(index).show();
        $(".inner").eq(index).siblings().hide();
    }
    // leaf
    setTimeout(function() {
        $(".leaf").show();
        $(".num_max").show();
    }, 3500);
    // list
    http.jsonp("https://testapi.kitty.live/v1/activity/diving/rank/list?callback=JSON_CALLBACK&rank_type=1").success(function(res) {
        sco.list = res.rank_list;
        var num = sco.list[0].points;
        if (num) {
            $(".group").show();
            $(".soon").hide();
        }
        if (num <= 5000) {
            $("body").css("background-image", "url('http://media.kitty.live/upload/b0a32c9345954775bc133d18eeb65654.png')");
            $(".title img").attr("src", "http://media.kitty.live/upload/1c5328f07fc4487988ae0f751dc93691.png");
            $(".grass").removeClass("grass_ani_land").addClass("grass_ani");
            $(".leaf").removeClass("leaf_ani_land").addClass("leaf_ani");
            $(".num_max").removeClass("num_max_ani_land").addClass("num_max_ani");
        } else if (num > 5000 & num <= 10000) {
            $(".title img").attr("src", "http://media.kitty.live/upload/cc879a235a864ca29d8fed307a293d89.png");
            $(".num_max").html(10000);
            $(".num_min").html(5000).css("fontSize", "0.7rem");
            $(".title").css("top", "-8rem");
            $("#wrap").removeClass("body_tog").addClass("body_tog");
            $(".grass").removeClass("grass_ani_land").addClass("grass_ani");
            $(".leaf").removeClass("leaf_ani_land").addClass("leaf_ani");
            $(".num_max").removeClass("num_max_ani_land").addClass("num_max_ani");
            setTimeout(function() {
                $("body").css("background-image", "url('http://media.kitty.live/upload/8a81e4af5d5a44a3a2cf5e416af89042.png')");
            }, 1000)
        } else if (num > 10000) {
            $(".title").hide();
            $(".num_max").html(15000);
            $(".num_min").html(10000).css("fontSize", "0.7rem");
            $(".top_land").show(100);
            $("#wrap").removeClass("body_tog").addClass("body_tog");
            $(".grass").removeClass("grass_ani").addClass("grass_ani_land");
            $(".leaf").removeClass("leaf_ani").addClass("leaf_ani_land");
            $(".num_max").removeClass("num_max_ani").addClass("num_max_ani_land");
            setTimeout(function() {
                $("body").css("background-image", "url('http://media.kitty.live/upload/c9f9d79987ac4828bcb30533020009de.png')");
            }, 1000)
        }
        console.log(sco.list);
    })
    http.jsonp("https://testapi.kitty.live/v1/activity/diving/rank/list?callback=JSON_CALLBACK&rank_type=2").success(function(res) {
        sco.list_user = res.rank_list;
        console.log(sco.list_user);
        if (sco.list_user[0].user_id) {
            $(".group").show();
            $(".soon").hide();
        }
    })
    //
    var trans = document.getElementsByClassName("group")[0];

    function scroll(wrap) {
        var child = wrap.children[0];
        console.log(wrap, child)
        cssTransform(child, "translateZ", 0.00001);
        var startpoint = 0;
        var startY = 0;
        var minY = wrap.clientHeight - child.offsetHeight;
        console.log(wrap.clientHeight, child.offsetHeight)
        var flag = 1;
        var lastDis = 0;
        var lastTime = 0;
        var disVal = 0;
        var disTime = 0;
        var Tween = {
            backOut: function(t, b, c, d, s) {
                if (s == undefined) s = 1.70158;
                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
            },
            easeOut: function(t, b, c, d) {
                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
            },
        }
        wrap.addEventListener("touchstart", function(ev) {
            clearInterval(child.clerTime);
            startpoint = ev.changedTouches[0].clientY;
            startY = cssTransform(child, "translateY");
            lastDis = startpoint;
            lastTime = new Date().getTime();
            disVal = 0;
            disTime = 1;

        });

        wrap.addEventListener("touchmove", function(ev) {
            var nowpoint = ev.changedTouches[0].clientY;
            var dis = nowpoint - startpoint;
            var translateY = startY + dis;
            var nowTime = new Date().getTime();
            if (translateY > 0) {
                flag = 0.6 - translateY / (wrap.clientHeight * 2);
                translateY = translateY * flag;
            }
            if (translateY < minY) {
                var over = minY - translateY;
                flag = 0.6 - over / (wrap.clientHeight * 2);
                translateY = minY - over * flag;
            }

            disVal = nowpoint - lastDis;
            disTime = nowTime - lastTime;
            lastDis = nowpoint;
            lastTime = nowTime;
            cssTransform(child, "translateY", translateY);
        });
        wrap.addEventListener("touchend", function() {
            var speed = disVal / disTime;
            var translateY = cssTransform(child, "translateY");
            console.log('---' + translateY)
            var traget = translateY + speed * 300;

            var time = Math.abs(traget * 12);
            time = time < 300 ? 300 : time;

            var bessel = "easeOut";
            if (traget > 0) {
                traget = 0;
                console.log('0_traget', traget)
                bessel = "backOut";
            }
            if (traget < minY) {

                traget = minY;

                bessel = "backOut";
            }

            move(traget, time, bessel);
        });

        function move(traget, time, type) {
            console.log(traget)
            var t = 0;
            var b = cssTransform(child, "translateY");
            var c = traget - b;
            var d = Math.round(time / 20);
            clearInterval(child.clerTime);
            child.clerTime = setInterval(
                function() {
                    t++;
                    if (t > d) {
                        clearInterval(child.clerTime);
                    } else {
                        var top = Tween[type](t, b, c, d);

                        cssTransform(child, "translateY", top);
                    }
                }, 20
            );
        }
    }
    scroll(trans);
    //
    sco.popS = function() {
        $(".pop").show();
        setTimeout(function() {
            $(".pop_inner").show();
        }, 2200)
    }
    sco.popH = function() {
        $(".pop").hide();
        $(".pop_inner").hide();
    }
    //
    var clicked = false;
    sco.go = function(user_id) {
        if (clicked) return;
        clicked = true;
        setTimeout(function() {
            clicked = false
        }, 2000);
        location.href = 'kitty://com.kitty/dynamic_user?user_id=' + user_id;
    }
}])
