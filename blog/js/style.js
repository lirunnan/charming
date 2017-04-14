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
