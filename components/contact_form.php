<?php

$tname = $_POST['tname1'];
$toontype = $_POST['toontype1'];
$returnaddr = $_POST['returnaddr1'];
$message = $_POST['message1'];

$returnaddr = filter_var($returnaddr, FILTER_SANITIZE_EMAIL);
if (filter_var($returnaddr, FILTER_VALIDATE_EMAIL)) {
    $subject = $tname;
    $headers = 'MIME-Version: 1.0' . "rn";
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "rn";
    $headers .= 'From:' . $returnaddr. 'rn';
    $headers .= 'Cc:' . $returnaddr. 'rn';
    $template = '<div style="padding:50px; color:white;">Hello ' . $tname . ',<br/>'
        . '<br/>Thank you...! For Contacting Spike.<br/><br/>'
        . 'Toon Name:' . $tname . '<br/>'
        . 'Toon Species:' . $toontype . '<br/>'
        . 'Email:' . $returnaddr . '<br/>'
        . 'Message:' . $message . '<br/><br/>'
        . 'This is a Contact Confirmation mail.'
        . '<br/>'
        . 'Spike will contact You as soon as possible .</div>';
    $sendmessage = '<div style="background-color:#7E7E7E; color:white;">' . $template . '</div>';
    $sendmessage = wordwrap($sendmessage, 70);
    mail("spikes.rewritten.guide@gmail.com", $subject, $sendmessage, $headers);
    echo "Your message has been recieved! I will reach back very soon!";
} else {
    echo "<span>* invalid email *</span>";
}
?>