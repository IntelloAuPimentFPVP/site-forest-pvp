// #############################################################################
// #### IMPORTS ################################################################
// #############################################################################

// ==== FRAMEWORK ==============================================================
// @codekit-prepend quiet "../../node_modules/jquery/dist/jquery.js";
// @codekit-prepend quiet "../../node_modules/@popperjs/core/dist/umd/popper.js";
// @codekit-prepend quiet "../../node_modules/bootstrap/dist/js/bootstrap.js";

// #############################################################################
// #### SYSTEME ################################################################
// #############################################################################

function showAlert(color, title, text) {
	// Affiche une alert en haut de page
	var content = "";
	content +=
		'<div class="alert show-alert alert-' +
		color +
		' fade show animate__animated animate__zoomInDow" role="alert">';
	if (title) {
		content += '<span class="alert-heading">' + title + "</span>";
	}
	content += '<span class="alert-message">' + text + "</span>";
	content +=
		'<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
	content += "</div>";
	$("#alert").show().html(content);
}

function errorAlert(jqXHR, textStatus, errorThrown) {
	// Affiche une alert en haut de page
	// https://www.w3schools.com/tags/ref_httpmessages.asp
	var errorTitle;
	var errorStatus;
	var errorColor;
	var errorText;

	errorTitle =
		textStatus + " [" + jqXHR.status + "] - (" + jqXHR.statusText + ")";

	if (jqXHR.status === 0) {
		errorStatus = "Not connected.\nPlease verify your network connection.";
		errorColor = "info";
	} else if (jqXHR.status == 403) {
		errorStatus = "Forbidden, the server is refusing to respond. [403]";
		errorColor = "danger";
	} else if (jqXHR.status == 404) {
		errorStatus = "The requested page not found. [404]";
		errorColor = "danger";
	} else if (jqXHR.status == 500) {
		errorStatus = "Internal Server Error [500].";
		errorColor = "danger";
	} else if (textStatus === "parsererror") {
		errorStatus =
			"Requested JSON parse failed. <br><br>" +
			jqXHR.responseText +
			"<br>";
		errorColor = "warning";
	} else if (textStatus === "timeout") {
		errorStatus = "Time out error.";
		errorColor = "danger";
	} else if (textStatus === "abort") {
		errorStatus = "Ajax request aborted.";
		errorColor = "danger";
	} else {
		errorStatus = "Uncaught Error.\n" + jqXHR.responseText;
	}

	errorText = errorStatus + "<br>" + errorThrown;
	if (debug == true) {
		showAlert(errorColor, errorTitle, errorText);
	}
}

$(function () {
	$(".toggle").on("click", function () {
		if ($(".item").hasClass("active")) {
			$(".item").removeClass("active");
		} else {
			$(".item").addClass("active");
		}
	});
});

// #############################################################################
// #### ACTIONS ################################################################
// #############################################################################

// setTimeout(() => {
// 	document.querySelector('.preloader').style.display = "none";
// }, 2000);

// $(window).load(function () {
// setTimeout(function () {
// $('.preloader').addClass('show');
// }, 2000);
// });

$(document).ready(function () {
	// $(window).load(function () {
	// 	$('.preloader').fadeOut("1000");
	// });

	setTimeout(function () {
		// $('.preloader').addClass('bg-warning');
		$(".preloader").addClass("hide");
		// $('.preloader').removeClass('show');
		// $('.preloader').show();
		// $('.preloader show').fadeOut();
	}, 900);

	// ==== Buttons ============================================================

	// ---- Debug --------------------------------------------------------------
	$(document).on("dblclick", "#debug", function () {
		$(this).fadeOut("slow");
	});

	// ---- CloseMenu ------------------------------------------------------------
	// $(document).on("click", ".navbar, body", function () {
	// 	$("#navbarSupportedContent").addClass("collapsing");
	// });
}); //____ END - (document).ready ______________________________________________
