    $(document).ready(function(){
        var btt = $('.back-to-top');
        btt.on('click', function(e){
            $('html, body').animate({
                scrollTop: 0
            }, 500);
            e.preventDefault();
        });
$(window).on('scroll', function(){
    var sel=$(window),
    height=sel.height();
    top=sel.scrollTop();
    if(!top>height){
        if(btt.is(':visible')){
            btt.hide();
            
        }
    }else{
        btt.show();
    }
});
    });