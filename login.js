// #############################################################################
// #### RÉCUPÉRATION DES DONNÉES ###############################################
// #############################################################################

function getAuthLogin(username, password) {
	// Vérification de l'identité de l'administrateur
	var url = "../models/users.php";
	var vars = {
		action: "login",
		username: username,
		password: password
	};

	$.ajax({
		url: url,
		method: "POST",
		data: vars,
		datatype: "json"
	})
		.done(function (data) {
			console.log("______ data : ", data);

			if (typeof data !== "undefined" && data !== null && data !== "0") {
				var inputUsername = $("input#input_username").val();
				if (inputUsername.value !== "") {
					localStorage.username = username;
				} else {
					localStorage.username = "";
				}
				// window.location.href = "index.php";
			} else {
				$("#message")
					.html("Attention : Identifiants non valides !")
					.removeClass("invisible animate__bounceOut")
					.addClass("visible animate__bounceIn");
				$("#input_password").val("");
			}
		})
		.fail(function (jqXHR, textStatus, errorThrown) {
			errorAlert(jqXHR, textStatus, errorThrown);
		});
}

// #############################################################################
// #### ACTIONS ################################################################
// #############################################################################

$(document).ready(function () {
	// ==== Buttons ============================================================

	// ---- On Submit ----------------------------------------------------------
	$(document).on("submit", "#form_login", function (event) {
		event.preventDefault();

		var username = $("#input_username").val();
		var password = $("#input_password").val();

		if (
			typeof username !== "undefined" &&
			username !== null &&
			typeof password !== "undefined" &&
			password !== null
		) {
			getAuthLogin(username, password);
		} else {
			$("#message")
				.html("Merci de saisir un code valide !")
				.addClass("visible animate__bounceIn")
				.removeClass("invisible animate__bounceOut");
		}
	});

	// ---- On Blur ------------------------------------------------------------
	$(document).on("blur", "#form_login", function (event) {
		event.preventDefault();
		$("#message")
			.addClass("invisible animate__bounceOut")
			.queue(function () {
				$(this).removeClass("visible animate__bounceIn");
				$(this).dequeue();
			});
	});
}); //____ END - (document).ready ______________________________________________
