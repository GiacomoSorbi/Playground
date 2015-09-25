$(function() {

    //input-field focus event listener
    if (document.getElementById("subscribe")) {
        document.getElementById("subscribe").onfocus = function () {
            document.getElementById("subscribe").parentNode.classList.add('input--filled');
            var box = document.getElementById('submessage');
            box.style.display = 'none';
        };
        document.getElementById("subscribe").onblur = function () {
            var msgBox = document.getElementById('subscribe');
            var box = document.getElementById('submessage');
            if (msgBox.value == "") {
                msgBox.parentNode.classList.remove('input--filled');
                box.style.display = 'none';
            }
            else {
                var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                var validMail = re.test(msgBox.value);
                if (!validMail) {
                    box.className = 'error-email';
                    box.innerHTML = '<i class="fa fa-times-circle"></i> Please enter a valid email';
                    box.style.display = 'block';
                }
            }
        };

        //suppressing the return key default behaviour on the newsletter form
        $('#subform').bind("keypress", function (e) {
            if (e.keyCode == 13) {
                var msgBox = document.getElementById('subscribe');
                var box = document.getElementById('submessage');
                var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                var validMail = re.test(msgBox.value);
                e.preventDefault();
                submitNewsletter();
                if (!validMail) {
                    box.className = 'error-email';
                    box.innerHTML = '<i class="fa fa-times-circle"></i> Please enter a valid email';
                    box.style.display = 'block';
                }
                else {
                    submitNewsletter();
                }
            }
        });
    }

    //managing effect on the about page
    if (document.getElementById('contact-us')){
        var box1=document.getElementById('firstmessage');
        var box2=document.getElementById('lastmessage');
        var box3=document.getElementById('emailmessage');
        var box4=document.getElementById('messagemessage');
        var msgBox1 = document.getElementById('firstName');
        var msgBox2 = document.getElementById('lastName');
        var msgBox3 = document.getElementById('email');
        //suppressing the return key default behaviour on the newsletter form
        $('#contact_us').bind("keypress", function(e) {
            box1.style.visibility='hidden';
            box2.style.visibility='hidden';
            box3.style.visibility='hidden';
            box4.style.visibility='hidden';
            if (e.keyCode == 13) {
                e.preventDefault();
                contactUs();
            }
        });
        $('#contact_us').on('submit', function(e){
            e.preventDefault();
        });

        msgBox1.onblur = function () {
            console.log("pippi");
            if (msgBox1.value == "") {
                msgBox1.classList.remove('input--filled');
                box1.style.visibility = 'hidden';
            }
        };

        msgBox2.onblur = function () {
            if (msgBox2.value == "") {
                msgBox2.parentNode.classList.remove('input--filled');
                box2.style.visibility = 'hidden';
            }
        };

        msgBox3.onblur = function () {
            if (msgBox3.value == "") {
                msgBox3.parentNode.classList.remove('input--filled');
                box3.style.visibility = 'hidden';
            }
            else {
                var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                var validMail = re.test(msgBox3.value);
                if (!validMail) {
                    box3.className = 'error-contact';
                    box3.innerHTML = '<i class="fa fa-times-circle"></i> Please enter a valid email';
                    box3.style.visibility = 'visible';
                }
            }
        };
    }



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
            box.className = 'confirm';
            box.innerHTML = '<i class="fa fa-check-circle"></i> Thank you for subscribing to our newsletter';
            box.style.display = 'block';
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

    var ok=true;

    var box1=document.getElementById('firstmessage');
    var msgbox1=document.getElementById('firstName');
    if (msgbox1.value==""){
        ok=false;
        box1.className = 'error-contact';
        box1.innerHTML = '<i class="fa fa-times-circle"></i> Please enter your First Name';
        box1.style.visibility='visible';
    }
    var box2=document.getElementById('lastmessage');
    var msgbox2=document.getElementById('lastName');
    if (msgbox2.value==""){
        ok=false;
        box2.className = 'error-contact';
        box2.innerHTML = '<i class="fa fa-times-circle"></i> Please enter your Surname';
        box2.style.visibility='visible';
    }
    var box3=document.getElementById('emailmessage');
    var msgbox3=document.getElementById('email');
    if (msgbox3.value==""){
        ok=false;
        box3.className = 'error-contact';
        box3.innerHTML = '<i class="fa fa-times-circle"></i> Please enter your valid Email';
        box3.style.visibility='visible';
    }
    var box4=document.getElementById('messagemessage');
    var msgbox4=document.getElementById('message');
    if (msgbox4.value==""){
        ok=false;
        box4.className = 'error-contact textmessage';
        box4.innerHTML = '<i class="fa fa-times-circle"></i> Please write a message';
        box4.style.visibility='visible';
    }
    if (ok){
        $.ajax({
            method: "POST",
            url: "../emailSender.php",
            data: {firstName: $("#firstName").val(), lastName: $("#lastName").val(), email: $("#email").val(), message: $("#message").val()}

        })
            .done(function (msg) {
                var box=document.getElementById('messagemessage');
                if (msg==""){
                    box.className = 'confirm';
                    box.innerHTML = '<i class="fa fa-check-circle"></i> Thank you for contacting us';
                    box.style.visibility='visible';
                }
                else {
                    box.className = 'error-contact';
                    box.innerHTML = '<i class="fa fa-exclamation-triangle"></i> We are sorry, but a problem has occurred; please, try again later';
                    box.style.visibility='visible';
                }
            })
            .fail(function( jqXHR, textStatus ) {
                var box=document.getElementById('messagemessage');
                msg='';
                box.className = 'error-contact';
                box.innerHTML = '<i class="fa fa-exclamation-triangle"></i> We are sorry, but a problem has occurred; please, try again later';
                box.style.visibility='visible';
            });
    }
}