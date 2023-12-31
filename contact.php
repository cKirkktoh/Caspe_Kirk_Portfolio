<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="initial-scale=1.0, width=device-width">
    <title>Kirk Portfolio</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@300&family=Open+Sans:wght@300&display=swap" rel="stylesheet">
    <link href="css/grid.css" rel="stylesheet">
    <link href="css/main.css" rel="stylesheet">
    <link href="css/contact.css" rel="stylesheet">
</head>
<body>
    <header>
        <div class="header-container">
            <div class="left-nav">
                <ul class="nav">
                    <li><a href="index.html">Home</a></li>
                    <li><a href="about.html">About Me</a></li>
                </ul>
            </div>
            <img class="logo" src="images/logo_white.svg" alt="Kirk Caspe Logo">
            <div class="right-nav">
                <ul class="nav">
                    <li><a href="works.html">Works</a></li>
                    <li><a href="#">Contact Me</a></li>
                </ul>
            </div>
        </div>
    </header>

    <div class="contact-section">
        <div class="contact-left">
          <div class="contact-title fade-in">CONTACT</div>
          <div class="contact-text">
            <p>I hope you enjoyed strolling around my Portfolio Site!<br>
                Please do reach out to me if you're interested in <br>
            working together!</p>
          </div>
          <div class="profile-picture fade-in"></div>
        </div>
        <div class="contact-right">
          <div class="work-together fade-in">Let's Work Together!</div>
          <form class="contact-form" action="sendmail.php" method="post">
            <div class="form-group fade-in">
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" required>
            </div>
            <div class="form-group fade-in">
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" required>
            </div>
            <div class="form-group fade-in">
              <label for="message">Message:</label>
              <textarea id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
    </div>

    <footer class="footer-section">
        <div class="footer-container">
            <div class="upper-footer">
                <h1>Wanna Work Together?</h1>
                <button class="contact-button">Contact Me</button>
                <hr class="footer-line">
            </div>

            <div class="lower-footer">
                <div class="left-section">
                    <div class="circle"></div>
                    <p>Kirk Caspe</p>
                </div>

                <div class="center-section">
                    <img class="logo-footer" src="images/logo_white.svg" alt="Kirk Caspe Logo">
                </div>

                <div class="right-section">
                    <div class="navigation-section">
                        <h2>Navigations</h2>
                        <nav>
                            <ul>
                                <li><a href="#">Home</a></li>
                                <li><a href="#">About Me</a></li>
                                <li><a href="#">Works</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div class="social-media-section">
                    <h2>Social Media</h2>
                    <nav>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">Twitter</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </footer>

</body>
<script src="js/main.js"></script>
</html>