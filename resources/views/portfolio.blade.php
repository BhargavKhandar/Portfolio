<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dinesh Nakum | Portfolio</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            scroll-behavior: smooth;
        }

        section {
            padding: 80px 0;
        }

        nav a.nav-link {
            color: white;
            margin-right: 15px;
        }

        nav {
            background-color: #111;
        }

        .hero {
            height: 100vh;
            background: #000;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        .section-title {
            font-size: 2rem;
            margin-bottom: 30px;
        }

        footer {
            background-color: #111;
            color: #fff;
            text-align: center;
            padding: 20px 0;
        }
    </style>
</head>

<body>

    <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container">
            <a class="navbar-brand text-white" href="#">Dinesh Nakum</a>
            <div class="collapse navbar-collapse">
                <ul class="navbar-nav ms-auto">
                    <li><a class="nav-link" href="#home">Home</a></li>
                    <li><a class="nav-link" href="#about">About</a></li>
                    <li><a class="nav-link" href="#skills">Skills</a></li>
                    <li><a class="nav-link" href="#projects">Projects</a></li>
                    <li><a class="nav-link" href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Home Section -->
    <section id="home" class="hero">
        <h1>Hello, I’m Dinesh Nakum</h1>
        <p class="lead">Backend Developer | Laravel & PHP Expert</p>
    </section>

    <!-- About Section -->
    <section id="about" class="container">
        <h2 class="section-title">About Me</h2>
        <p>I am a Backend Developer with a strong command of Laravel, PHP, MySQL, and API integrations. I build scalable
            and high-performance web applications with clean code practices.</p>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="bg-light">
        <div class="container">
            <h2 class="section-title text-center">Skills</h2>
            <div class="row text-center">
                <div class="col-md-3"><strong>PHP</strong></div>
                <div class="col-md-3"><strong>Laravel</strong></div>
                <div class="col-md-3"><strong>MySQL</strong></div>
                <div class="col-md-3"><strong>Vue.js</strong></div>
            </div>
        </div>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="container">
        <h2 class="section-title">Projects</h2>
        <div class="row">
            <div class="col-md-4">
                <h5>Text-to-Image Generator</h5>
                <p>Laravel app that converts user input text into dynamic images using a third-party API.</p>
            </div>
            <div class="col-md-4">
                <h5>Data Import Optimization</h5>
                <p>Enhanced Laravel app by implementing bulk insert and transaction handling for Excel import.</p>
            </div>
            <div class="col-md-4">
                <h5>Photo Studio Website</h5>
                <p>Custom website for a photo studio with admin panel for photo uploads and bookings.</p>
            </div>
        </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="bg-light">
        <div class="container">
            <h2 class="section-title text-center">Contact Me</h2>
            <form class="row g-3" action="#" method="POST">
                @csrf
                <div class="col-md-6">
                    <input type="text" name="name" class="form-control" placeholder="Your Name" required>
                </div>
                <div class="col-md-6">
                    <input type="email" name="email" class="form-control" placeholder="Your Email" required>
                </div>
                <div class="col-12">
                    <textarea name="message" class="form-control" placeholder="Your Message" rows="4" required></textarea>
                </div>
                <div class="col-12 text-center">
                    <button type="submit" class="btn btn-dark">Send Message</button>
                </div>
            </form>
        </div>
    </section>

    <footer>
        <p>© {{ date('Y') }} Dinesh Nakum. All rights reserved.</p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
