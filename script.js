$(document).ready(function(){
    let desktopSize = window.matchMedia("(min-width: 1px)");
    if (desktopSize.matches){
        $(".block-3").hide();
        $(".btn").click(function(){
            $(".block-2").hide(0)
            $(".block-3").show(0)
        })
        $(".btn-2").click(function(){
            $(".block-3").hide(0)
            $(".block-2").show(0)
        })
    }
    else {
        
    }
});