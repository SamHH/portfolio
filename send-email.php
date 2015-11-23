<?php

// Include the Autoloader - must be at top of file
require 'vendor/autoload.php';

use Mailgun\Mailgun;

$dotenv = new Dotenv\Dotenv(__DIR__);
$dotenv->load();

if ($_POST) {

  // Instantiate the client
  $mgClient = new Mailgun($_ENV['MAILGUN_API_KEY']);
  $domain = $_ENV['MAILGUN_DOMAIN'];

  // Make the call to the client
  $result = $mgClient->sendMessage("$domain",
    [
      'from'    => 'Mailgun Sandbox <postmaster@' . $_ENV['MAILGUN_DOMAIN'] . '>',
      'to'      => 'Sam A. Horvath-Hunt <work@samhh.com>',
      'subject' => 'samhh.com form submission: ' . $_POST['subject'],
      'html'    => 'From: ' . $_POST['name'] . ' (' . $_POST['email'] . ')<br><br>' . 'Message: ' . $_POST['message']
    ]);

    if ($_POST['ajax'] == 'yes') {
      echo 'success';
    } else {
      header('Location: index.php');
    }

}
