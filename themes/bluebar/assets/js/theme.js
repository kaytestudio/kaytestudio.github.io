// Light/dark toggle. The initial theme is set inline in <head> to avoid a flash.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById("theme-toggle");
  var media = matchMedia("(prefers-color-scheme: dark)");

  function stored() { try { return localStorage.getItem("theme"); } catch (e) { return null; } }
  function apply(t) {
    root.setAttribute("data-theme", t);
    if (btn) btn.setAttribute("aria-label", t === "dark" ? "Switch to light mode" : "Switch to dark mode");
  }

  apply(root.getAttribute("data-theme") === "dark" ? "dark" : "light");

  if (btn) btn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    apply(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  // Follow the OS setting until the visitor picks one explicitly.
  media.addEventListener("change", function (e) {
    var t = stored();
    if (t !== "light" && t !== "dark") apply(e.matches ? "dark" : "light");
  });
})();
