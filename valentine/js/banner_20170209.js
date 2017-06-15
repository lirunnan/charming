angular.module("app", []).controller("myCtrl", function($scope, $http) {
    rose();

    function hero() {
        $(".no_mes").hide();
        $http.jsonp("http://api.kitty.live/v1/activity/valentine/contribution/rank?callback=JSON_CALLBACK").success(function(res) {
            $scope.hero = res.rank_list;
            if ($scope.hero.length != 0) {
                $(".content").show();
            } else {
                $(".content").hide();
                $(".no_mes").show();
            }
        })
    }

    function VJ() {
        $(".no_mes").hide();
        if ($scope.data.length != 0) {
            $(".content").fadeIn();
            if ($scope.state == 11) {
                $(".ttf").hide();
                $(".line").hide();
            } else {
                $(".ttf").show();
                $(".line").show();
            }
        } else {
            $(".content").hide();
            $scope.state = 10;
        }
        switch ($scope.state) {
            case 10:
                $(".no_mes").show();
                break;
            case 11:
                $scope.winner = $scope.data;
                $("#step_num").html(32);
                break;
            case 12:
                $scope.winner = $scope.data.slice(0, 16);
                $scope.loser = $scope.data.slice(16);
                $scope.num = 17;
                $("#step_num_fr").html(32);
                $("#step_num").html(16);
                break;
            case 13:
                $scope.winner = $scope.data.slice(0, 8);
                $scope.loser = $scope.data.slice(8);
                $scope.num = 9;
                $("#step_num_fr").html(16);
                $("#step_num").html(8);
                break;
            case 14:
                $scope.winner = $scope.data.slice(0, 4);
                $scope.loser = $scope.data.slice(4);
                $scope.num = 5;
                $("#step_num_fr").html(8);
                $("#step_num").html(4);
                break;

        }
    }

    function chocolate() {
        $http.jsonp("http://api.kitty.live/v1/activity/valentine/chocolate/rank?callback=JSON_CALLBACK").success(function(res) {
            $scope.state = res.activity_stage;
            $scope.data = res.rank_list;
            VJ();
        })
    }
    //
    function rose() {
        $http.jsonp("http://api.kitty.live/v1/activity/valentine/rose/rank?callback=JSON_CALLBACK").success(function(res) {
            $scope.state = res.activity_stage;
            $scope.data = res.rank_list;
            VJ();
        })
    }
    $scope.tog = function(index) {
        light();
        switch (index) {
            case 0:
                $(".tog_bg").css("left", 0);
                $(".gift").show();
                $(".group_game").show();
                $(".hero").hide();
                break;
            case 1:
                hero();
                $(".tog_bg").css("left", "43.5%");
                $(".gift").hide();
                $(".group_game").hide();
                $(".hero").show();
                break;

        }
    }
    $scope.gift = function(azhu) {
        light();
        switch (azhu) {
            case 0:
                $(".hide").removeClass("hide_extra_left").addClass("hide_extra_right");
                rose();
                break;
            case 1:
                $(".hide").removeClass("hide_extra_right").addClass("hide_extra_left");
                chocolate();
                break;

        }
    }

    function light() {
        $(".light").show();
        setTimeout(function() {
            $(".light").hide();
        }, 1000);
    }
    // go
    var clicked = false;
    $scope.go = function(user_id) {
        if (clicked) return;
        clicked = true;
        setTimeout(function() {
            clicked = false
        }, 2000);
        location.href = 'kitty://com.kitty/dynamic_user?user_id=' + user_id;
    }
})
