// Persists the user's light/dark choice in localStorage. Absence of a
// stored value means "no explicit choice yet" and the page falls back to
// the OS preference via the prefers-color-scheme media query in style.css.
(function () {
	var root = document.documentElement;
	var toggle = document.getElementById("theme-toggle");
	if (!toggle) return;

	function currentTheme() {
		var stored = localStorage.getItem("theme");
		if (stored) return stored;
		return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
	}

	toggle.addEventListener("click", function () {
		var next = currentTheme() === "dark" ? "light" : "dark";
		root.setAttribute("data-theme", next);
		localStorage.setItem("theme", next);
	});
})();
