<?php
require_once("../../config.php");
require('../assets/inc/head.php');

if (isset($_SESSION['auth_username'])) {
  session_unset();
  session_destroy();
  redirection($_SESSION["url_out"]);
  exit();
} else {
?>

  <body class="login">

    <a href="index.php" class="retour">
      <i class="fa-solid fa-circle-arrow-left"></i>
      Retour
    </a>

    <div class="center">

      <h1>Login</h1>

      <form id="form_login" action="index.php" method="get">

        <div id="message" class="login_message animate__animated"></div>

        <div class="txt_field">
          <input id="input_username" type="text" required>
          <span></span>
          <label>Username</label>

        </div>

        <div class="txt_field">
          <input id="input_password" type="password" required>
          <span></span>
          <label>Mot De Passe</label>
        </div>

        <!-- <div class="pass">Forgot Password?</div> -->
        <button type="submit"><a href="index.php"></a>Se Connecter</button>
      </form>

      <div class="signup_link">
        Tu n'es pas membre ? <a href="sign-up.php">Sign Up</a>
      </div>

    </div>

    <?php
    $results = getUsers();
    console_log($results);

    // $thisContent = '';

    // foreach ($results as $row) {
    // $thisContent .= '<li class="nav-item" role="presentation">';
    // $thisContent .= '<a id="' . $row['id'] . '" class="nav-link transition" href="' . $row['url'] . '">';
    // $thisContent .= '<i class="' . $row['picto'] . ' fa-fw"></i>';
    // $thisContent .= '<span class="nav-label">' . $row['label'] . '</span>';
    // $thisContent .= '<i class="chevron far fa-chevron-right fa-fw"></i>';
    // $thisContent .= '</a>';
    // $thisContent .= '</li>';
    // }
    // echo "</optgroup>";
    // }
    // echo $thisContent;
    ?>





  <?php } ?>

  <!-- ==== Scripts ================ -->
  <?php require('../assets/inc/scripts.php');  ?>
  <script type="text/javascript" src="../controllers/login.js"></script>

  </body>

  </html>