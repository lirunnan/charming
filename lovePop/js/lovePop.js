var getCheckTime = 60,
  status = 0,
  statusClose = 1,
  click = 0;
var dataList = [];
$(".phoneNum input").bind("input propertychange", function() {
  if ($(this).val() != "") {
    $(".checkNum input").eq(1).css("background-color", "#EBB782").css("borderColor", "#EBB782");
    status = 1;
  } else {
    $(".checkNum input").eq(1).css("background-color", "#A4A4A4").css("borderColor", "#A4A4A4");
    status = 0;
  }
})
$(".checkNum input").eq(0).bind("input propertychange", function() {
  if ($(this).val() != "") {
    $(".confim input").css("background-color", "#EBB782").css("borderColor", "#EBB782").css("box-shadow", "0 0.3rem 0.1rem #EBB782");
    status = 1;
  } else {
    $(".confim input").css("background-color", "#A4A4A4").css("borderColor", "#A4A4A4").css("box-shadow", "0 0.3rem 0.1rem #A4A4A4");
    status = 0;
  }
})
$("#phoneVoice").click(function() {
  $(this).hide();
  $(".pop").show();
  $(".pop-inner").show();
  statusClose = 1;
})
$(".close").click(function() {
  $("#phoneVoice").show();
  $(".pop").hide();
  $(".success").hide();
  $(".error").hide();
  $(".main input").val("");
  $("#getCheckNum").val("接受验证码");
  statusClose = 0;
  status = 0;
  $(".checkNum input").eq(1).css("background-color", "#A4A4A4").css("borderColor", "#A4A4A4");
})

$("#getCheckNum").click(function() {
  click++;
  if (click == 1) {
    console.log(status);
    // $.ajax({
    //     url: '',
    //     crossDomain: true,
    //     xhrFields: {
    //         withCredentials: true
    //     },
    //     type: 'post',
    //     dataType: "json",
    //     data: JSON.stringify({
    //         //  关键字段 手机号码 $(".phoneNum input").val()
    //     }),
    //     success: function(data) {
    //       //  回调
    //     dataList = data;
    //     }
    // })
    //  此处写在回调里面,发送成功,显示倒计时
    if (status == 1) {
      var j = setInterval(function() {
        if (getCheckTime >= 0) {
          $("#getCheckNum").val(getCheckTime);
          getCheckTime--;
        } else {
          clearInterval(j);
          $("#getCheckNum").val("重新发送");
          getCheckTime = 60;
          click = 0;
        }
        if (statusClose == 0) {
          clearInterval(j);
          $("#getCheckNum").val("接受验证码");
          getCheckTime = 60;
          click = 0;
        }
      }, 1000)
    }
  }
})

dataList = {
  "num": 1111
}
$("#confimBtn").click(function() {
  if (dataList.num == $(".checkNum input").eq(0).val()) {
    $(".pop-inner").hide();
    $(".success").show();
    // $.ajax({
    //     url: '',
    //     crossDomain: true,
    //     xhrFields: {
    //         withCredentials: true
    //     },
    //     type: 'post',
    //     dataType: "json",
    //     data: JSON.stringify({
    //         //  关键字段 手机号码 $(".phoneNum input").val()
    //     }),
    //     success: function(data) {
    //       //  回调  $(".success").hide() 接听电话
    //     }
    // })
  } else {
    $(".error").show();
  }
})
