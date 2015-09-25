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
            var msgBox=document.getElementById('subscribe');
            var box=document.getElementById('submessage');
            var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
            var validMail = re.test(msgBox.value);
            e.preventDefault();
            submitNewsletter();
            if (!validMail){
                box.className = 'error-email';
                box.innerHTML = '<i class="fa fa-times-circle"></i> Please enter a valid email';
                box.style.display = 'block';
            }
            else {
                submitNewsletter();
            }
        }
    });

    //overlay menu event listener
    $('#toggle').click(function() {
        $(this).toggleClass('active');
        $('#overlay').toggleClass('open');
    });
});

function submitNewsletter() {
    //handles the newsletter subcription on the home page
    $.ajax({
        method: "POST",
        url: "https://alpha.veruscript.com/api/newsletter/subscribe",
        data: {email: $("#subscribe").val()}

    })
        .done(function (JSmsg) {
            var box=document.getElementById('submessage');
            var msg='';
            if (error in JSmsg) msg=JSmsg.error.message;
            if (msg.indexOf('List_AlreadySubscribed')!=-1){
                box.className = 'error-already';
                box.innerHTML = '<i class="fa fa-times-circle"></i> Your email is already in our database';
                box.style.display = 'block';
            }
            else{
                box.className = 'confirm';
                box.innerHTML = '<i class="fa fa-check-circle"></i> Thank you for subscribing to our newsletter';
                box.style.display = 'block';
            }
        })
        .fail(function( jqXHR, textStatus ) {
            var box=document.getElementById('submessage');
            console.log(JSON.stringify(jqXHR),textStatus);
            var msg=JSON.stringify(jqXHR);
            if (msg.indexOf('List_AlreadySubscribed')!=-1){
                box.className = 'error-already';
                box.innerHTML = '<i class="fa fa-times-circle"></i> Your email is already in our database';
                box.style.display = 'block';
            }
            else{
                box.className = 'error-sent';
                box.innerHTML = '<i class="fa fa-exclamation-triangle"></i> We are sorry, but a problem has occurred; please, try again later';
                box.style.display = 'block';
            }
        });
}

function contactUs() {
    //handles the newsletter subcription on the home page
    $.ajax({
        method: "POST",
        url: "veruscript.com/api/mailer",
        data: {firstName: $("#firstName").val(), lastName: $("#lastName").val(), email: $("#email").val(), message: $("#message").val()}

    })
        .done(function (msg) {
            var box=document.getElementById('submessage');
            box.className = 'confirm';
            box.innerHTML = '<i class="fa fa-check-circle"></i> Thank you for contacting us';
            box.style.display = 'block';
        })
        .fail(function( jqXHR, textStatus ) {
            var box=document.getElementById('submessage');
            msg='';
            box.className = 'error-sent';
            box.innerHTML = '<i class="fa fa-exclamation-triangle"></i> We are sorry, but a problem has occurred; please, try again later';
            box.style.display = 'block';
        });
}