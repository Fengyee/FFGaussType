// FFGaussType project page: BibTeX copy button.
// The page remains readable without JavaScript; these only add interaction.

(function () {
  "use strict";

  // Copy buttons.
  document.querySelectorAll("[data-copy]").forEach(function (button) {
    var target = document.querySelector(button.getAttribute("data-copy"));
    if (!target) return;
    var label = button.textContent;
    var done = function (text) {
      button.textContent = text;
      window.setTimeout(function () { button.textContent = label; }, 1600);
    };
    button.addEventListener("click", function () {
      var text = target.textContent;
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(
          function () { done("Copied"); },
          function () { selectText(target); done("Press Ctrl+C"); }
        );
      } else {
        selectText(target);
        done("Press Ctrl+C");
      }
    });
  });

  function selectText(node) {
    var range = document.createRange();
    range.selectNodeContents(node);
    var selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }
})();
