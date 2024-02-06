<!DOCTYPE html>
<?php
require_once('connect.php');

$ProjectID = isset($_GET['id']) ? $_GET['id'] : null;

if (!$ProjectID) {

    header("Location: index.php");
    exit();
}

$query = 'SELECT GROUP_CONCAT(image_filename) AS images, description, title FROM projects, media WHERE projects.id = project_id AND projects.id = :ProjectID';
$stmt = $connection->prepare($query);
$stmt->bindParam(':ProjectID', $ProjectID, PDO::PARAM_INT);
$stmt->execute();
$row = $stmt->fetch(PDO::FETCH_ASSOC);
$images = explode(",", $row['images']);
$stmt = null;
?>
<html lang="en">
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <title><?php echo $row['proj_title']; ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    <link href="css/grid.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
</head>
<body>

<div class="container">
    <h1><?php echo htmlspecialchars($row['proj_title']); ?></h1>

    <p><?php echo htmlspecialchars($row['proj_desc']); ?></p>

    <section class="project-gallery">
        <?php 
        foreach ($images as $image) {
            echo '<img class="portfolio-image" src="images/' . htmlspecialchars($image) . '" alt="Project Image">';
        }
        ?>
    </section>
</div>

</body>
</html>
