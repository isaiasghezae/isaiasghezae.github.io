// I want links with target="_blank" to be opened in a new tab
document.addEventListener("DOMContentLoaded", function() {
  var anchors = document.getElementsByTagName("a");
  for (var i = 0; i < anchors.length; i++) {
    if (!anchors[i].hasAttribute("target")) {
      anchors[i].setAttribute("target", "_blank");
      anchors[i].setAttribute("rel", "noopener noreferrer");
    }
  }
});
