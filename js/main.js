$(function(){
    //메뉴
    $(".main > li , .sub_bg").hover(function(){
        $(".sub").stop().show()
        $(".sub, .sub_bg").stop().slideDown(1000)
    },function(){
        $(".sub").stop().hide()
        $(".sub, .sub_bg").stop().slideUp(1000)
    })


    //slick

    $(".move").slick( {
        autoplay:true , dots:true , arrows:false, autoplaySpeed:2000,
        adaptiveHeight:true})
        
})//jq end