$(function() {

    //input-field focus event listener
    document.getElementById("subscribe").onfocus=function(){
        document.getElementById("subscribe").parentNode.classList.add('input--filled');
    };
    document.getElementById("subscribe").onblur=function(){
        if (document.getElementById('subscribe').value=="") document.getElementById("subscribe").parentNode.classList.remove('input--filled');
    };

    //overlay menu event listener
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
});