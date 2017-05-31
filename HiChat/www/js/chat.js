var socket = io.connect();
var arr = [],
  brr = [],
  prr = [],
  nrr = [];
setTimeout(function() {
  $(".welcome p").eq(0).hide();
  $(".welcome p").eq(1).show();
}, 1300);
setTimeout(function() {
  $(".welcome").hide();
  $(".login").show();
}, 2800);
$(".login-inner input").bind("input propertychange", function() {
  if ($(this).val() != "") {
    $(".login-inner a").html("多多指教");
  } else {
    $(".login-inner a").html("这位上神，请留下大名");
  }
})
$(".login-inner a").click(function() {
  if ($(".login-inner input").val() != "") {
    socket.emit('nickname', $(".login-inner input").val());
    nameToDisplay = document.createElement('i');
    nameToDisplay.style.color = 'red';
    document.getElementById("nameKuang").appendChild(nameToDisplay);
    var nametxtN = document.getElementsByTagName("i");
    nametxtN[0].innerHTML = $(".login-inner input").val() + " come";
    $(".login").hide();
  } else {
    $(".login-inner a").html("这位上神，请留下大名");
  }
})
$(".postMes a").click(function() {
  socket.emit('postMsg', $(".postMes textarea").val());
  prr.push($(".postMes textarea").val());
  var container = document.getElementById('mesinfo'),
    msgToDisplay = document.createElement('h4');
  msgToDisplay.style.color = 'pink';
  container.appendChild(msgToDisplay);
  var txtH = container.getElementsByTagName("h4");
  for (var i = 0; i < txtH.length; i++) {
    txtH[i].innerHTML = $(".login-inner input").val() + ":" + prr[i];
  }
  $(".postMes textarea").val("");
})
var e = event || window.event;
$(".postMes textarea").keyup(function(e) {
  if (e && e.keyCode == 13) {
    socket.emit('postMsg', $(".postMes textarea").val());
    prr.push($(".postMes textarea").val());
    var container = document.getElementById('mesinfo'),
      msgToDisplay = document.createElement('h4');
    msgToDisplay.style.color = 'pink';
    container.appendChild(msgToDisplay);
    var txtH = container.getElementsByTagName("h4");
    for (var i = 0; i < txtH.length; i++) {
      txtH[i].innerHTML = $(".login-inner input").val() + ":" + prr[i];
    }
    $(".postMes textarea").val("");
  }
})
//
socket.on("name", function(nicknameData) {
  console.log(nicknameData);
  brr.push(nicknameData);
  nameToDisplay = document.createElement('span');
  nameToDisplay.style.color = 'red';
  document.getElementById("nameKuang").appendChild(nameToDisplay);
  var nametxt = document.getElementsByTagName("span");
  for (var i = 0; i < nametxt.length; i++) {
    nametxt[i].innerHTML = brr[i] + " come";
  }
})
//
socket.on('system', function(data) {
  arr.push(data);
  console.log(arr);
  var container = document.getElementById('mesinfo'),
    msgToDisplay = document.createElement('p');
  msgToDisplay.style.color = 'blue';
  container.appendChild(msgToDisplay);
  container.scrollTop = container.scrollHeight;
  var txt = container.getElementsByTagName("p");
  for (var i = 0; i < txt.length; i++) {
    for (var j = 0; j < brr.length; j++) {
      txt[i].innerHTML = brr[j] + ":" + arr[i];
    }
  }
})
