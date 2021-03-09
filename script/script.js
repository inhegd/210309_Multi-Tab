$(function(){

    $("button:nth-child(2)").click(function(){
        $("button").css({
            "border":"none",
            "top":"0px"
        });

        $(this).css({
            "border":"1px solid #aaa",
            "border-bottom":"none",
            "top":"1px"
        });

        $("div#tabContent1").css({"display":"none"});
        $("div#tabContent2").css({"display":"block"});

    });


     $("button:nth-child(1)").click(function(){
        $("button").css({
            "border":"none",
            "top":"0px"
        });

        $(this).css({
            "border":"1px solid #aaa",
            "border-bottom":"none",
            "top":"1px"
        });

        $("div#tabContent1").css({"display":"block"});
        $("div#tabContent2").css({"display":"none"});

    });

});
