<!-- ==== Head ================ -->
<?php require('../assets/inc/head.php'); ?>

<body class="login">

	<a href="index.php" class="retour">
		<i class="fa-solid fa-circle-arrow-left"></i>
		Retour
	</a>

	<div class="center">
		<h1>Sign Up</h1>
		<form action="index.php" method="get">
			<div class="txt_field">
				<input type="text" required>
				<span></span>
				<label>Username</label>
			</div>
			<div class="txt_field">
				<input type="email" required>
				<span></span>
				<label>Email</label>
			</div>
			<div class="txt_field">
				<input type="password" required>
				<span></span>
				<label>Mot De Passe</label>
			</div>
			<div class="txt_field">
				<input type="password" required>
				<span></span>
				<label>Confirmer le Mot De Passe</label>
			</div>
			<!-- <div class="pass">Forgot Password?</div> -->
			<button type="submit">S'enregistrer</button>
		</form>
		<div class="signup_link">
			Tu est déjà membre ?<a href="login.php">Login</a>
		</div>
		</form>
	</div>


	<!-- ==== Scripts ================ -->
	<?php require('../assets/inc/scripts.php');  ?>


</body>


</html>