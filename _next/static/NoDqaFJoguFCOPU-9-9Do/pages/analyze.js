(window.webpackJsonp = window.webpackJsonp || []).push([
  [9],
  {
    "5Puu": function (n, t, e) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/analyze",
        function () {
          return e("gH/j");
        },
      ]);
    },
    "gH/j": function (n, t, e) {
      "use strict";
      e.r(t);
      var i = e("q1tI"),
        a = e.n(i),
        u = function (n, t) {
          void 0 === n && (n = 1e12), void 0 === t && (t = 0);
          var e = Object(i.useState)(0),
            a = e[0],
            u = e[1];
          return (
            Object(i.useLayoutEffect)(
              function () {
                var e,
                  i,
                  a,
                  o = function () {
                    var t = Math.min(1, (Date.now() - a) / n);
                    u(t), r();
                  },
                  r = function () {
                    e = requestAnimationFrame(o);
                  },
                  c = setTimeout(function () {
                    (i = setTimeout(function () {
                      cancelAnimationFrame(e), u(1);
                    }, n)),
                      (a = Date.now()),
                      r();
                  }, t);
                return function () {
                  clearTimeout(i), clearTimeout(c), cancelAnimationFrame(e);
                };
              },
              [n, t]
            ),
            a
          );
        },
        o = e("nOHt"),
        r = e.n(o),
        c = e("h7RS"),
        s = a.a.createElement;
      t.default = function (n) {
        var t = n.rs,
          e = u(1e4);
        Object(i.useEffect)(function () {
          1 === e && r.a.push("/results");
        });
        var a = t.get_analyze_progress(100 * e);
        return s(
          "div",
          {
            style: {
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
            },
          },
          s(
            c.a,
            null,
            s(
              "p",
              null,
              s("img", {
                src:
                  "https://cdn.jsdelivr.net/gh/team-delta-v/material-spinner/spinner.svg",
                alt: "Loading",
                style: { height: "3em", verticalAlign: "middle" },
              })
            ),
            s("p", null, a)
          )
        );
      };
    },
  },
  [["5Puu", 0, 2, 1, 3, 4]],
]);
