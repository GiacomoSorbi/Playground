<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Veruscript</title>

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script src="https://use.typekit.net/zbv4fek.js"></script>
    <script>try {
        Typekit.load({async: true});
    } catch (e) {
    }</script>

    <script type='text/javascript' src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script type='text/javascript' src="https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js"></script>
    <script type='text/javascript' src="js/prefixfree.min.js"></script>

    <script type='text/javascript' src="js/functions.js"></script>

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
    <link rel="stylesheet" href="https://raw.githubusercontent.com/daneden/animate.css/master/animate.min.css">

    <link rel="stylesheet" href="style.css">

</head>
<body>

<div class="page" id="top">

    <div id="page-header">
        <nav id="main-nav" class="scrolling">


            <div class="full-wrapper relative">

                <div id="nav-logo-wrap">
                    <a href="index.html"><img src="images/logo-veruscript-white.svg" alt="Veruscript"></a>
                </div>

                <div id="nav-menu-wrap">
                    <div id="nav-page-section">
                        <ul>
                            <li><a href="#">Journal</a></li>
                            <li class="active"><a href="about.html">About</a></li>
                        </ul>
                    </div>
                    <div class="separator-menu"></div>

                    <!-- [end #nav-section] -->
                    <div id="nav-tools-section">
                        <ul>
                            <li><a href="#" class="submit-btn-nav">Submit a paper</a></li>
                            <li><a href="#" class="signin-btn-nav">Sign in</a></li>
                            <li><a href="#" class="register-btn-nav">Register for free</a></li>
                        </ul>
                    </div>

                    <!-- [end #nav-tools-section] -->
                </div>


                <a href="#">
                    <div class="button-user"><i class="ion-person"></i></div>
                </a>


                <!-- humber menu & overlay menu-->
                <div class="button_container" id="toggle">
                    <span class="top"></span>
                    <span class="middle"></span>
                    <span class="bottom"></span>
                </div>


                <div class="overlay" id="overlay">
                    <nav class="overlay-menu">
                        <ul>
                            <li><a href="#">Journal</a></li>
                            <li><a href="about.html">About</a></li>
                            <li><a href="#">Submit a Paper</a></li>
                            <li>
                                <a class="short" href="#">Sign in</a>
                                <span style="font-size: 27px; font-weight: 100">/</span>
                                <a class="short" href="#">Register</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="clear"></div>

            </div>

        </nav>

        <div class="container">

            <div class="row">
                <div class="col-md-12">
                    <h1>About Veruscript</h1>
                </div>
            </div>
        </div>

        <div class="hero"></div>
    </div>


    <section class="page-section animated bkg-white" id="about">
        <div class="container">

            <div class="intro-body">
                <h2 class="linebottom">VERUSCRIPT SUPPORT THE ENTIRE RESEARCH COMMUNITY</h2>

                <p>Veruscript, in our view, makes publishing cost efficient and high quality. It leaves authors in
                    control of their paper.It shares revenues with the academic community which produced the content.
                    It opens its costs and editorial processes toscrutiny. It encourages maximum dissemination of the
                    content, and of course upholds the highest editorial standards</p>
            </div>

        </div>
    </section>
    <section class="page-section animated bkg-gray" id="contact">

        <div class="container">

            <div class="intro-contact">
                <h2 class="linebottom">CONTACT US</h2>

                <p>Veruscript, in our view, makes publishing cost efficient and high quality. It leaves authors in
                    control of their paper.</p>
            </div>


            <div class="row" id="contact-us">

                <div id="input-contact" class="col-md-10 col-md-offset-1">

                    <form id="contact_us" class="input input-contact input--yoshiko" role="form"
                          action="emailSender.php" method="post">

                        <div class="col-md-3 single-input-contact">
                            <input class="input__field input__field--yoshiko" type="text" id="firstName">
                            <label class="input__label input__label--yoshiko" for="firstName">
                                <span class="input__label-content input__label-content--yoshiko"
                                      data-content="Your Name">Your Name</span>
                            </label>

                            <div id="messagemessage" style="display: none"><i class="fa fa-check-circle"></i> Thank you
                                for subscribing to our
                                newsletter
                            </div>
                        </div>

                        <div class="col-md-3 single-input-contact">
                            <input class="input__field input__field--yoshiko" type="text" id="lastName">
                            <label class="input__label input__label--yoshiko" for="lastName">
                                <span class="input__label-content input__label-content--yoshiko"
                                      data-content="Your Last Name">Your Last Name</span>
                            </label>
                        </div>

                        <div class="col-md-3 single-input-contact">
                            <input class="input__field input__field--yoshiko" type="text" id="email">
                            <label class="input__label input__label--yoshiko" for="email">
                                <span class="input__label-content input__label-content--yoshiko"
                                      data-content="Your email">Your email</span>
                            </label>
                        </div>

                        <div class="clear"></div>

                        <textarea class="input__field input__field--yoshiko" rows="5" cols="60"
                                  placeholder="Write your message" id="message"></textarea>

                        <!--<button class="btn-sent-form" type="submit" onclick="submitNewsletter()" for="subform">-->
                            <!--Sent a message-->
                        <!--</button>-->
                        <input type="submit" value="invia" />

                    </form>


                    <div class="result">
                        <div id="submessage" style="display: none"><i class="fa fa-check-circle"></i> Thank you for
                            subscribing to our
                            newsletter
                        </div>

                    </div>
                </div>

            </div>
    </section>
    <!-- [end .page-section] -->


    <!-- Footer -->
    <footer class="bkg-gray footer">
        <div class="container">

            <div class="row">

                <div class="col-md-3 mini-about">

                    <figure id="logo-footer">
                        <img src="images/logo-veruscript-black.svg" alt="Veruscript logo">
                    </figure>

                    <p>Eiusmod labore velit duis culpa mollit nostrud eiusmod dolor. Id ullamco nostrud esse id ullamco
                        sunt. Id laboris ea quis cillum ex<br/>
                        <a class="more-information">Read more...</a>
                    </p>
                </div>

                <div class="col-md-1"></div>

                <div class="col-md-2 footer-menu">
                    <h4>About</h4>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="about.html">About us</a></li>
                        <li><a href="about.html#contact">Contact</a></li>
                    </ul>
                </div>

                <div class="col-md-2 footer-menu">
                    <h4>Help</h4>
                    <ul>
                        <li><a href="privacy.html">Privacy Policy</a></li>
                        <li><a href="terms.html">Terms &amp; Conditions</a></li>
                        <li><a href="copyright.html">Copyright Notice</a></li>
                    </ul>
                </div>

                <div class="col-md-1"></div>

                <div class="col-md-3 contact-information">
                    <h4>Contact us</h4>

                    <p>124-128 Barbly Road, Pall Mall Deposit 41<br/>
                        W106BL, London, UK<br/>
                        <i class="fa fa-phone"></i> +44 (0)20 7183 1173 <br/>
                        <i class="fa fa-envelope"></i> <a href="mailto:info@veruscript.com">info@veruscript.com</a>
                    </p>
                </div>

            </div>


        </div>
        <div class="footer-close">
            <p>© VERUSCRIPT 2015 - AGC Partners LTD.</p>
        </div>

    </footer>


</div>
<!-- [end page] -->


<!-- [scrolling page] -->
<script type='text/javascript' src="http://cferdinandi.github.io/smooth-scroll/dist/js/smooth-scroll.js"></script>
<script type='text/javascript'>
    smoothScroll.init({
        speed: 1500, // Integer. How fast to complete the scroll in milliseconds
        easing: 'easeInOutCubic' // Easing pattern to use
    });
</script>


</body>
</html>
