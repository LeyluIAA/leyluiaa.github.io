var about = false;
$( "#title-about").click(function() {
	if (about) {
		$("#about").removeClass("about").addClass("hidden");
		about = false;
	} else {
		$("#about").removeClass("hidden").addClass("about");
		about = true;
		if (skills) {
			$("#skills").removeClass("skills").addClass("hidden");
			skills = false;
		}
		if (games) {
			$("#games").removeClass("games").addClass("hidden");
			games = false;
		}
		if (musics) {
			$("#musics").removeClass("musics").addClass("hidden");
			musics = false;
		}
		if (design) {
			$("#design").removeClass("design").addClass("hidden");
			design = false;
		}
	}
});
var skills = false;
$( "#title-skills").click(function() {
	if (skills) {
		$("#skills").removeClass("skills").addClass("hidden");
		skills = false;
	} else {
		$("#skills").removeClass("hidden").addClass("skills");
		skills = true;
		if (about) {
			$("#about").removeClass("about").addClass("hidden");
			about = false;
		}
		if (games) {
			$("#games").removeClass("games").addClass("hidden");
			games = false;
		}
		if (musics) {
			$("#musics").removeClass("musics").addClass("hidden");
			musics = false;
		}
		if (design) {
			$("#design").removeClass("design").addClass("hidden");
			design = false;
		}
	}
});
var games = false;
$( "#title-games").click(function() {
	if (games) {
		$("#games").removeClass("games").addClass("hidden");
		games = false;
	} else {
		$("#games").removeClass("hidden").addClass("games");
		games = true;
		if (about) {
			$("#about").removeClass("about").addClass("hidden");
			about = false;
		}
		if (skills) {
			$("#skills").removeClass("skills").addClass("hidden");
			skills = false;
		}
		if (musics) {
			$("#musics").removeClass("musics").addClass("hidden");
			musics = false;
		}
		if (design) {
			$("#design").removeClass("design").addClass("hidden");
			design = false;
		}
	}
});
var musics = false;
$( "#title-musics").click(function() {
	if (musics) {
		$("#musics").removeClass("musics").addClass("hidden");
		musics = false;
	} else {
		$("#musics").removeClass("hidden").addClass("musics");
		musics = true;
		if (about) {
			$("#about").removeClass("about").addClass("hidden");
			about = false;
		}
		if (skills) {
			$("#skills").removeClass("skills").addClass("hidden");
			skills = false;
		}
		if (games) {
			$("#games").removeClass("games").addClass("hidden");
			games = false;
		}
		if (design) {
			$("#design").removeClass("design").addClass("hidden");
			design = false;
		}
	}
});
var design = false;
$( "#title-design").click(function() {
	if (design) {
		$("#design").removeClass("design").addClass("hidden");
		design = false;
	} else {
		$("#design").removeClass("hidden").addClass("design");
		design = true;
		if (about) {
			$("#about").removeClass("about").addClass("hidden");
			about = false;
		}
		if (skills) {
			$("#skills").removeClass("skills").addClass("hidden");
			skills = false;
		}
		if (games) {
			$("#games").removeClass("games").addClass("hidden");
			games = false;
		}
		if (musics) {
			$("#musics").removeClass("musics").addClass("hidden");
			musics = false;
		}
	}
});