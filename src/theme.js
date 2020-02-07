"use strict";
!(function() {
  var t = document.querySelectorAll("[data-countdown]");
  function o(t, e) {
    var a = t - new Date().getTime(),
      o = Math.floor(a / 864e5);
    o = o < 10 ? "0" + o : o;
    var n = Math.floor((a % 864e5) / 36e5);
    n = n < 10 ? "0" + n : n;
    var l = Math.floor((a % 36e5) / 6e4);
    l = l < 10 ? "0" + l : l;
    var i = Math.floor((a % 6e4) / 1e3);
    (i = i < 10 ? "0" + i : i),
      (e.querySelector("[data-days]").innerHTML = o),
      (e.querySelector("[data-hours]").innerHTML = n),
      (e.querySelector("[data-minutes]").innerHTML = l),
      (e.querySelector("[data-seconds]").innerHTML = i);
  }
  t.length &&
    [].forEach.call(t, function(t) {
      !(function(t) {
        var e = t.dataset.date,
          a = new Date(e).getTime();
        o(a, t),
          setInterval(function() {
            o(a, t);
          }, 1e3);
      })(t);
    });
})(),
  (Flickity.defaults.pageDots = !1),
  (Flickity.defaults.prevNextButtons = !1),
  (Flickity.defaults.imagesLoaded = !0),
  (Flickity.defaults.initialIndex = 0),
  (Flickity.defaults.wrapAround = !0),
  (Flickity.defaults.cellAlign = "left"),
  $('[data-toggle="flickity"]').on("click", function() {
    var t = $(this),
      e = t.data("slide"),
      a = t.data("target");
    $(a).flickity("select", e, !0, !0);
  }),
  (function() {
    var a,
      o = !1;
    document.body.addEventListener("touchstart", function(t) {
      t.target.closest(".flickity-slider")
        ? ((o = !0), (a = { x: t.touches[0].pageX, y: t.touches[0].pageY }))
        : (o = !1);
    }),
      document.body.addEventListener(
        "touchmove",
        function(t) {
          if (o && t.cancelable) {
            var e = {
              x: t.touches[0].pageX - a.x,
              y: t.touches[0].pageY - a.y
            };
            7 < Math.abs(e.x) && t.preventDefault();
          }
        },
        { passive: !1 }
      );
  })(),
  (function() {
    var t = $('[data-toggle="card-collapse"]'),
      e = $(".card-collapse");
    t.on({
      mouseenter: function() {
        $(this)
          .find(".card-collapse")
          .collapse("show");
      },
      mouseleave: function() {
        var t = $(this).find(".card-collapse");
        t.hasClass("collapsing")
          ? setTimeout(function() {
              t.collapse("hide");
            }, 350)
          : t.collapse("hide");
      }
    }),
      e.on({
        "show.bs.collapse": function() {
          var t = $(this),
            e = t.closest(".card-collapse-parent"),
            a = t.outerHeight(!0);
          e.css({
            "-webkit-transform": "translateY(-" + a + "px)",
            transform: "translateY(-" + a + "px)"
          });
        },
        "hide.bs.collapse": function() {
          $(this)
            .closest(".card-collapse-parent")
            .css({ "-webkit-transform": "", transform: "" });
        }
      });
  })(),
  (function() {
    var t = document.querySelectorAll('[data-toggle="form-caption"]');
    [].forEach.call(t, function(a) {
      a.addEventListener("change", function() {
        var t = document.querySelector(a.dataset.target),
          e = a.value;
        t.innerHTML = e;
      });
    });
  })(),
  (function() {
    var t = document.querySelectorAll(".img-comp-input");
    [].forEach.call(t, function(e) {
      "input change".split(" ").forEach(function(t) {
        e.addEventListener(t, function() {
          !(function(t) {
            var e = t.parentElement.querySelector(".img-comp-front"),
              a = t.parentElement.querySelector(".img-comp-handle");
            (e.style.maxWidth = t.value + "%"), (a.style.left = t.value + "%");
          })(e);
        });
      });
    });
  })(),
  (function() {
    var t = '[data-toggle="smooth-scroll"]';
    "undefined" != typeof SmoothScroll &&
      new SmoothScroll(t, {
        header: ".navbar.fixed-top",
        offset: function(t, e) {
          return e.dataset.offset ? e.dataset.offset : 0;
        }
      });
  })(),
  (function() {
    var n = $(".dropright"),
      l = $(".dropdown-menu"),
      o = $('[data-toggle="collapse"]'),
      e = $(".navbar-collapse"),
      t = $(".navbar .dropdown"),
      a = $('.navbar .nav-link[data-toggle="smooth-scroll"]');
    $('.navbar .dropdown-menu .dropright [data-toggle="dropdown"]').on(
      "click",
      function(t) {
        t.preventDefault(), t.stopPropagation();
        var e = $(this),
          a = e.closest(n).find(l),
          o = e
            .closest(l)
            .find(l)
            .not(a);
        a.toggleClass("show"), o.removeClass("show");
      }
    ),
      t.on("hide.bs.dropdown", function() {
        var t = $(this),
          e = t.find(n).find(l),
          a = t.find(o);
        e.removeClass("show"),
          a.each(function() {
            var t = $(this);
            ($(t.attr("href")) || $(t.data("target"))).collapse("hide");
          });
      }),
      a.on("click", function(t) {
        $(this)
          .closest(e)
          .collapse("hide");
      });
  })(),
  $('.collapse[data-toggle="simplebar"]').on({
    "shown.bs.collapse": function() {
      var t = $(this),
        e = $(t.data("target"));
      "undefined" != typeof SimpleBar && new SimpleBar(e.get(0));
    },
    "hidden.bs.collapse": function() {
      var t = $(this),
        e = $(t.data("target"));
      "undefined" != typeof SimpleBar &&
        SimpleBar.instances.get(e.get(0)).unMount();
    }
  }),
  $('[data-toggle="lists"]').each(function() {
    var t = $(this),
      e = t.data("options");
    "undefined" != typeof List && new List(t.get(0), e);
  }),
  (function() {
    var o = $(".rating"),
      n = $(".rating-form");
    $(".rating-input").on("change input", function() {
      var t = $(this),
        e = t.closest(n).find(o),
        a = t.val();
      e.attr("data-value", a);
    });
  })(),
  $('[data-toggle="vote"]').on("click", function(t) {
    t.preventDefault();
    var e = $(this),
      a = e.attr("data-count");
    e.attr("data-count", ++a);
  }),
  $(function() {
    $('[data-toggle="popover"]').popover();
  }),
  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  }),
  $('[data-toggle="collapse"][data-action]').on("click", function(t) {
    t.stopPropagation();
    var e = $(this),
      a = e.data("action"),
      o = e.data("target");
    $(o).collapse(a);
  }),
  (function() {
    var t = document.querySelectorAll('[data-toggle="map"]');
    t &&
      [].forEach.call(t, function(t) {
        var e = parseInt(t.getAttribute("data-zoom")),
          a = JSON.parse(t.getAttribute("data-markers")),
          o = { lat: a[0].position[0], lng: a[0].position[1] },
          l = new google.maps.Map(t, {
            center: o,
            zoom: e,
            disableDefaultUI: !0
          }),
          i = new google.maps.LatLngBounds();
        a.forEach(function(t, e) {
          var a = { lat: t.position[0], lng: t.position[1] },
            o = new google.maps.InfoWindow({ content: t.info }),
            n = new google.maps.Marker({ position: a, map: l });
          n.addListener("click", function() {
            o.open(l, n);
          }),
            i.extend(a);
        }),
          e || l.fitBounds(i);
      });
  })(),
  (function() {
    var t = document.querySelectorAll(".highlight");
    "undefined" != typeof hljs &&
      t &&
      [].forEach.call(t, function(t) {
        hljs.highlightBlock(t);
      });
  })(),
  (function() {
    var o = $(".navbar-collapse");
    $(".navbar-nav .dropdown, .navbar-nav .dropright").on(
      "mouseenter mouseleave",
      function(t) {
        if (!o.hasClass("show")) {
          var e = $(this),
            a = e.find('[data-toggle="dropdown"]');
          "mouseenter" === t.type
            ? (e.addClass("hovered"), a.dropdown("show"))
            : (a.dropdown("hide"), a.blur());
        }
      }
    );
  })();
