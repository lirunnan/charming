var num = 0,
  login_status = false,
  scroll_status = false;
$(".login").click(function() {
  if ($(this).html() == "微信登录后加入") {
    // 扫码 成功返回 true
    alert("login success");
    login_status = true;
    if (login_status) {
      $(this).html("￥58 加入圈子");
    }
  } else if ($(this).html() == "￥58 加入圈子") {
    // 微信支付 成功后返回1
    alert("支付成功");
    scroll_status = true;
    $(this).html("发布消息");
  } else {
    num = 1;
    if (num == 1) {
      window.location.href = "push.html"
    }
  }

});
// $.ajax({
//   url: '',
//   crossDomain: true,
//   xhrFields: {
//     withCredentials: true
//   },
//   type: 'get',
//   dataType: "jsonp",
//   success: function(data) {
//
//   }
// })

var data = {
  "rank_list": [{
    "avatar": "https://file.xiaomiquan.com/user_avatar/148698091699933183.jpg",
    "nickname": "想当画家的小孩",
    "time": "1 分钟前",
    "content": "天气不错,天气不错,天气不错,天气不错",
    "contImg": "https://file.xiaomiquan.com/201706/37d89e730b6bc5a3419789d19ca462b959ef5651c1d05b29e110abdee0b32724_min.jpg"
  }, {
    "avatar": "https://file.xiaomiquan.com/user_avatar/148698091699933183.jpg",
    "nickname": "想当画家的小孩",
    "time": "1 分钟前",
    "content": "天气不错",
    "contImg": "https://file.xiaomiquan.com/201706/e6439fee29dffacac379a839b6c99a048fce743b49772f1453205af8cf6eea00_min.jpg"
  }, {
    "avatar": "https://file.xiaomiquan.com/user_avatar/148698091699933183.jpg",
    "nickname": "想当画家的小孩",
    "time": "1 分钟前",
    "content": "天气不错",
    "contImg": "https://file.xiaomiquan.com/201706/e6439fee29dffacac379a839b6c99a048fce743b49772f1453205af8cf6eea00_min.jpg"
  }]
};
var list = document.getElementsByClassName("list");
var html = juicer(document.getElementById("tpl").innerHTML, data);
list[0].innerHTML = html;
var h = document.documentElement.clientHeight;
$(window).scroll(function() {
  if (scroll_status) {
    if ($(this).scrollTop() >= ($(".add").offset().top - h + $(".add").height())) {
      console.log("哇哦");
      data.rank_list.push({
        "avatar": "https://file.xiaomiquan.com/user_avatar/148698091699933183.jpg",
        "nickname": "想当画家的小孩",
        "time": "1 分钟前",
        "content": "天气不错",
        "contImg": "https://file.xiaomiquan.com/201706/e6439fee29dffacac379a839b6c99a048fce743b49772f1453205af8cf6eea00_min.jpg"
      });
      var html = juicer(document.getElementById("tpl").innerHTML, data);
      list[0].innerHTML = html;
    }
  }
})
