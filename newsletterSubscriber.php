<?php

require __DIR__ . '/vendor/autoload.php';

$MailChimp = new \Drewm\MailChimp('4889cdcd18bb41740f6da6029cc0ec8d-us10');

$result = $MailChimp->call('lists/subscribe', array(
    'id' => '0a33f76495',
    'email' => array('email' => $_POST['email']),
    'double_optin' => false
));

if ($result['email']) {
    $data = array('type' => 'success', 'message' => "Thank you for subscribing to our newsletter");
    header('HTTP/1.1 200 OK');
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($data);
    die();
} elseif ($result['error']) {
    $data = array('type' => 'error', 'message' => $result['error'], 'code' => $result['code']);
    header('HTTP/1.1 500 Internal Server Error');
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($data);
    die();
} else {
    $data = array('type' => 'error', 'message' => 'undefined error', 'code' => '0');
    header('HTTP/1.1 500 Internal Server Error');
    header('Content-Type: application/json; charset=UTF-8');
    echo json_encode($data);
    die();
}