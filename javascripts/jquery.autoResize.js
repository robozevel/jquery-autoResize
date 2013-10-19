/**
  * Auto-Resizing Textareas (Zepto/jQuery 1.7+ plugin)
  * Based on: http://phaistonian.pblogs.gr/expanding-textareas-the-easy-and-clean-way.html
  *
  * Usage:
  * // Direct binding
  * $("textarea").autoResize();
  *
  * // Delegated binding
  * $.autoResize("textarea");
  * $(".container").autoResize("textarea");
  *
 **/

;(function($) {
  "use strict";

  var
    MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver,
    observerOptions = { childList: true, subtree: true },
    events = "oninput" in window ? "input" : "keyup keydown";

  function resize() {
    this.style.height = "auto";
    this.style.height = this.scrollHeight + this.offsetHeight - this.clientHeight + "px";
  }

  function initTextarea($element) {
    return $element
      .filter("textarea")
      .attr("rows", 1)
      .css("box-sizing", "border-box")
      .each(resize);
  }

  function observeInserted($element, selector) {
    if (MutationObserver) {
      var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
          initTextarea($(mutation.addedNodes).filter(selector));
        });
      });

      $element.each(function() {
        observer.observe(this, observerOptions);
      });
    } else {
      $element.on("DOMNodeInserted", selector, function(e) {
        initTextarea($(e.target));
      });
    }
  }

  function autoResize(element, selector) {
    var $element = $(element);

    if (typeof selector === "string") {
      // Delegated binding
      initTextarea($element.find(selector));
      observeInserted($element, selector);
    } else {
      // Direct binding
      selector = null;
      $element = initTextarea($element);
    }

    return $element.on(events, selector, resize);
  }

  $.autoResize = function(selector) {
    return autoResize(document, selector);
  };

  $.fn.autoResize = function(selector) {
    return autoResize(this, selector);
  }

}(window.jQuery || window.Zepto));
