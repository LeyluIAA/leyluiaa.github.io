var skills = false;
$( "#title-skills").click(function() {
	if (skills) {
		$("#skills").removeClass("skills").addClass("hidden");
		skills = false;
	} else {
		$("#skills").removeClass("hidden").addClass("skills");
		skills = true;
		if (projects) {
			$("#projects").removeClass("projects").addClass("hidden");
			projects = false;
		}
		if (links) {
			$("#links").removeClass("links").addClass("hidden");
			links = false;
		}
		if (design) {
			$("#design").removeClass("design").addClass("hidden");
			design = false;
		}
	}
});
var projects = false;
$( "#title-projects").click(function() {
	if (projects) {
		$("#projects").removeClass("projects").addClass("hidden");
		projects = false;
	} else {
		$("#projects").removeClass("hidden").addClass("projects");
		projects = true;
		if (skills) {
			$("#skills").removeClass("skills").addClass("hidden");
			skills = false;
		}
		if (links) {
			$("#links").removeClass("links").addClass("hidden");
			links = false;
		}
		if (design) {
			$("#design").removeClass("design").addClass("hidden");
			design = false;
		}
	}
});
var links = false;
$( "#title-links").click(function() {
	if (links) {
		$("#links").removeClass("links").addClass("hidden");
		links = false;
	} else {
		$("#links").removeClass("hidden").addClass("links");
		links = true;
		if (skills) {
			$("#skills").removeClass("skills").addClass("hidden");
			skills = false;
		}
		if (projects) {
			$("#projects").removeClass("projects").addClass("hidden");
			projects = false;
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
		if (skills) {
			$("#skills").removeClass("skills").addClass("hidden");
			skills = false;
		}
		if (projects) {
			$("#projects").removeClass("projects").addClass("hidden");
			projects = false;
		}
		if (links) {
			$("#links").removeClass("links").addClass("hidden");
			links = false;
		}
	}
});