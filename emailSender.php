<?php

require_once 'swiftmailer/lib/swift_required.php';
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$completeName = "$firstName $lastName";
$email = $_POST['email'];
$message = $_POST['message'];

$transport = Swift_SmtpTransport::newInstance('smtp.gmail.com', 465, 'ssl')
    ->setUsername('contact@veruscript.com')
    ->setPassword('(ND57lzK45)yv1w9_98B');

$mailer = Swift_Mailer::newInstance($transport);

$message = Swift_Message::newInstance()
    ->setSubject('Contact request from ' . $completeName)
    ->setFrom(array('contact@veruscript.com'))
    ->setTo(array('contact@veruscript.com'))
    ->setBody("
    name: $completeName
    email: $email
    message: $message
    ");

if (!$mailer->send($message, $failures)) {
    echo "Failures:";
    echo($failures);
}
