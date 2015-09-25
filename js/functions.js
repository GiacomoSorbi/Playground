$(function() {

    //input-field focus event listener
    document.getElementById("subscribe").onfocus=function(){
        document.getElementById("subscribe").parentNode.classList.add('input--filled');
        var box=document.getElementById('submessage');
        box.style.display = 'none';
    };
    document.getElementById("subscribe").onblur=function(){
        var msgBox=document.getElementById('subscribe');
        var box=document.getElementById('submessage');
        if (msgBox.value==""){
            msgBox.parentNode.classList.remove('input--filled');
            box.style.display = 'none';
        }
        else{
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            var validMail = re.test(msgBox.value);
            if (!validMail){
                box.className = 'error-email';
                box.innerHTML = '<i class="fa fa-times-circle"></i> Please enter a valid email';
                box.style.display = 'block';
            }
        }
    };

    //suppressing the return key default behaviour
    $('form').bind("keypress", function(e) {
        if (e.keyCode == 13) {
            e.preventDefault();
            submitNewsletter();
        }
    });

    //overlay menu event listener
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
});

function submitNewsletter() {
    $.ajax({
        method: "POST",
        url: "https://alpha.veruscript.com/api/newsletter/subscribe",
        data: {email: $("#subscribe").val()}

    })
        .done(function (msg) {
            var box=document.getElementById('submessage');
            box.className = 'confirm';
            box.innerHTML = '<i class="fa fa-check-circle"></i> Thank you for subscribing to our newsletter';
            box.style.display = 'block';
        })
        .fail(function( jqXHR, textStatus ) {
            var box=document.getElementById('submessage');
            msg='';
            if (msg.indexOf('List_AlreadySubscribed')!=-1){
                box.className = 'error-already';
                box.innerHTML = '<i class="fa fa-times-circle"></i> Your email is already in our database';
                box.style.display = 'block';
            }
            else{
                box.className = 'error-sent';
                box.innerHTML = '<i class="fa fa-times-circle"></i> We are sorry, but a problem as occurred; please, try again later';
                box.style.display = 'block';
            }
        });
}