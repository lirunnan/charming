angular.module("app",[]).controller("myCtrl",function(e,o){e.tog=function(e){switch($(".content-inner").eq(e).show(),$(".content-inner").eq(e).siblings().hide(),e){case 0:$(".cover").css("left",0).removeClass("cover_border_right").addClass("cover_border");break;case 1:$(".cover").css("left","52%").removeClass("cover_border").addClass("cover_border_right")}},e.fresh=function(){$(".refresh").addClass("refresh_ani"),setTimeout(function(){$(".refresh").removeClass("refresh_ani")},1100)},$(".content").show(),e.list=[{id:1,username:"纯粉小肚兜",headImg:"http://omoppyc8u.bkt.clouddn.com/a1.jpg",voice:"http://omoppyc8u.bkt.clouddn.com/audio02.mp3",profession:"老师",age:26,scene:"yi'ge一个chang'jing",like:0,info:"新人，求撩～"},{id:2,username:"精神病院院长",headImg:"http://omoppyc8u.bkt.clouddn.com/a2.jpg",voice:"http://omoppyc8u.bkt.clouddn.com/audio03.mp3",profession:"学生",age:19,scene:"yi'ge一个chang'jing",like:0,info:"我可以做一些污污污的事情哦"},{id:3,username:"小梦儿",headImg:"http://omoppyc8u.bkt.clouddn.com/a3.jpg",voice:"http://omoppyc8u.bkt.clouddn.com/audio04.mp3",profession:"学生",age:23,scene:"yi'ge一个chang'jing",like:0,info:"长得帅的来啊！"}],e.user={nickname:"so well👑",sexName:"男",subscribeTime:0,country:"中国",city:"昆明",id:1,province:"云南",headimgurl:"http://wx.qlogo.cn/mmopen/ajNVdqHZLLDptpS2Tcd40sExjaDMCdictSckicOCeMWmWFWWibRlpLR42Dss4BIiaES8icpJPYWXkSlicrQ2tKiaJOTsQ/0"},e.money={id:2,balance:3,used:0,userId:1};var c=document.querySelector("#voice");e.play=function(o){$("#voice").attr("src",e.list[o].voice),c.play(),$(".voice").eq(o).addClass("big"),setTimeout(function(){$(".voice").eq(o).removeClass("big")},800)}});