<?php
include_once("database.php");
  $postdata = file_get_contents("php://input");
  if (isset($postdata) && !empty($postdata)) {
    $request = json_decode($postdata);
    $name = trim($request->name);
    $date = mysqli_real_escape_string($mysqli, trim($request->date));
    $address = mysqli_real_escape_string($mysqli, trim($request->address));
    $message = mysqli_real_escape_string($mysqli, trim($request->message));
    $sql = "INSERT INTO birthday_users(name, date, address, message) VALUES ('$name', '$date', '$address', '$message')";
    if ($mysqli->query($sql) === TRUE) {
      $authdata = [
        'name' => $name,
        'date' => $date,
        'address' => $address,
        'message' => $message,
        'Id' => mysqli_insert_id($mysqli)
      ];
      echo json_encode($authdata);
    }
  }

?>
