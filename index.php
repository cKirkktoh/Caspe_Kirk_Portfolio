<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <title>Projects Gallery</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    <link href="css/grid.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
</head>
<body>
    
<?php
require_once('connect.php');

try {
    $pdo = new PDO("mysql:host=localhost;dbname=portfolio_d", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $stmt = $pdo->prepare("SELECT * FROM projects");
    $stmt->execute();

    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

        echo "<div>";
        echo "<h2>" . $row['proj_title'] . "</h2>";
        echo "<p>" . $row['proj_desc'] . "</p>";
        echo "<p>" . $row['URL'] . "</p>";
        echo "<p>" . $row['date_started'] . "</p>";
        echo "<p>" . $row['date_completed'] . "</p>";
        echo "<p>" . $row['client'] . "</p>";
        echo "</div>";
    }
} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}
?>

</body>
</html>