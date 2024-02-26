<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    $db_host = 'localhost:8889';
    $db_user = 'root';
    $db_pass = 'root';
    $db_name = 'portfolio_d';

    $connection = mysqli_connect($db_host, $db_user, $db_pass, $db_name);
    $errors = array();

    $fullname = mysqli_real_escape_string($connection, $_POST['fullname']);
    if ($fullname == NULL) {
        $errors[] = "This field is empty.";
    }

    $email = $_POST['email'];
    if ($email == NULL) {
        $errors[] = "Email field is empty.";
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "\"" . $email . "\" is not a valid email address.";
    }

    $message = mysqli_real_escape_string($connection, $_POST['message']);
    if ($message == NULL) {
        $errors[] = "This field is empty.";
    }

    $errcount = count($errors);
    if ($errcount > 0) {
        $errmsg = array();
        for ($i = 0; $i < $errcount; $i++) {
            $errmsg[] = $errors[$i];
        }
        echo json_encode(array("errors" => $errmsg));
    } else {
        $querystring = "INSERT INTO tbl_users(user_id,user_fullname,user_email,user_message) VALUES(NULL,'" . $fullname . "','" . $email . "','" . $message . "')";
        $qpartner = mysqli_query($connection, $querystring);
        echo json_encode(array("message" => "Thank you for reaching out!"));
    }
?>