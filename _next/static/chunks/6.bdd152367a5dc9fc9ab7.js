(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    "7tlc": function (t, e, n) {
      (function (t) {
        var r =
            Object.getOwnPropertyDescriptors ||
            function (t) {
              for (var e = Object.keys(t), n = {}, r = 0; r < e.length; r++)
                n[e[r]] = Object.getOwnPropertyDescriptor(t, e[r]);
              return n;
            },
          o = /%[sdj%]/g;
        (e.format = function (t) {
          if (!b(t)) {
            for (var e = [], n = 0; n < arguments.length; n++)
              e.push(c(arguments[n]));
            return e.join(" ");
          }
          n = 1;
          for (
            var r = arguments,
              i = r.length,
              u = String(t).replace(o, function (t) {
                if ("%%" === t) return "%";
                if (n >= i) return t;
                switch (t) {
                  case "%s":
                    return String(r[n++]);
                  case "%d":
                    return Number(r[n++]);
                  case "%j":
                    try {
                      return JSON.stringify(r[n++]);
                    } catch (e) {
                      return "[Circular]";
                    }
                  default:
                    return t;
                }
              }),
              f = r[n];
            n < i;
            f = r[++n]
          )
            g(f) || !m(f) ? (u += " " + f) : (u += " " + c(f));
          return u;
        }),
          (e.deprecate = function (n, r) {
            if ("undefined" !== typeof t && !0 === t.noDeprecation) return n;
            if ("undefined" === typeof t)
              return function () {
                return e.deprecate(n, r).apply(this, arguments);
              };
            var o = !1;
            return function () {
              if (!o) {
                if (t.throwDeprecation) throw new Error(r);
                t.traceDeprecation ? console.trace(r) : console.error(r),
                  (o = !0);
              }
              return n.apply(this, arguments);
            };
          });
        var i,
          u = {};
        function c(t, n) {
          var r = { seen: [], stylize: a };
          return (
            arguments.length >= 3 && (r.depth = arguments[2]),
            arguments.length >= 4 && (r.colors = arguments[3]),
            d(n) ? (r.showHidden = n) : n && e._extend(r, n),
            v(r.showHidden) && (r.showHidden = !1),
            v(r.depth) && (r.depth = 2),
            v(r.colors) && (r.colors = !1),
            v(r.customInspect) && (r.customInspect = !0),
            r.colors && (r.stylize = f),
            l(r, t, r.depth)
          );
        }
        function f(t, e) {
          var n = c.styles[e];
          return n
            ? "\x1b[" +
                c.colors[n][0] +
                "m" +
                t +
                "\x1b[" +
                c.colors[n][1] +
                "m"
            : t;
        }
        function a(t, e) {
          return t;
        }
        function l(t, n, r) {
          if (
            t.customInspect &&
            n &&
            _(n.inspect) &&
            n.inspect !== e.inspect &&
            (!n.constructor || n.constructor.prototype !== n)
          ) {
            var o = n.inspect(r, t);
            return b(o) || (o = l(t, o, r)), o;
          }
          var i = (function (t, e) {
            if (v(e)) return t.stylize("undefined", "undefined");
            if (b(e)) {
              var n =
                "'" +
                JSON.stringify(e)
                  .replace(/^"|"$/g, "")
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"') +
                "'";
              return t.stylize(n, "string");
            }
            if (h(e)) return t.stylize("" + e, "number");
            if (d(e)) return t.stylize("" + e, "boolean");
            if (g(e)) return t.stylize("null", "null");
          })(t, n);
          if (i) return i;
          var u = Object.keys(n),
            c = (function (t) {
              var e = {};
              return (
                t.forEach(function (t, n) {
                  e[t] = !0;
                }),
                e
              );
            })(u);
          if (
            (t.showHidden && (u = Object.getOwnPropertyNames(n)),
            j(n) &&
              (u.indexOf("message") >= 0 || u.indexOf("description") >= 0))
          )
            return s(n);
          if (0 === u.length) {
            if (_(n)) {
              var f = n.name ? ": " + n.name : "";
              return t.stylize("[Function" + f + "]", "special");
            }
            if (w(n))
              return t.stylize(RegExp.prototype.toString.call(n), "regexp");
            if (O(n)) return t.stylize(Date.prototype.toString.call(n), "date");
            if (j(n)) return s(n);
          }
          var a,
            m = "",
            x = !1,
            k = ["{", "}"];
          (y(n) && ((x = !0), (k = ["[", "]"])), _(n)) &&
            (m = " [Function" + (n.name ? ": " + n.name : "") + "]");
          return (
            w(n) && (m = " " + RegExp.prototype.toString.call(n)),
            O(n) && (m = " " + Date.prototype.toUTCString.call(n)),
            j(n) && (m = " " + s(n)),
            0 !== u.length || (x && 0 != n.length)
              ? r < 0
                ? w(n)
                  ? t.stylize(RegExp.prototype.toString.call(n), "regexp")
                  : t.stylize("[Object]", "special")
                : (t.seen.push(n),
                  (a = x
                    ? (function (t, e, n, r, o) {
                        for (var i = [], u = 0, c = e.length; u < c; ++u)
                          z(e, String(u))
                            ? i.push(p(t, e, n, r, String(u), !0))
                            : i.push("");
                        return (
                          o.forEach(function (o) {
                            o.match(/^\d+$/) || i.push(p(t, e, n, r, o, !0));
                          }),
                          i
                        );
                      })(t, n, r, c, u)
                    : u.map(function (e) {
                        return p(t, n, r, c, e, x);
                      })),
                  t.seen.pop(),
                  (function (t, e, n) {
                    if (
                      t.reduce(function (t, e) {
                        return (
                          e.indexOf("\n") >= 0 && 0,
                          t + e.replace(/\u001b\[\d\d?m/g, "").length + 1
                        );
                      }, 0) > 60
                    )
                      return (
                        n[0] +
                        ("" === e ? "" : e + "\n ") +
                        " " +
                        t.join(",\n  ") +
                        " " +
                        n[1]
                      );
                    return n[0] + e + " " + t.join(", ") + " " + n[1];
                  })(a, m, k))
              : k[0] + m + k[1]
          );
        }
        function s(t) {
          return "[" + Error.prototype.toString.call(t) + "]";
        }
        function p(t, e, n, r, o, i) {
          var u, c, f;
          if (
            ((f = Object.getOwnPropertyDescriptor(e, o) || { value: e[o] }).get
              ? (c = f.set
                  ? t.stylize("[Getter/Setter]", "special")
                  : t.stylize("[Getter]", "special"))
              : f.set && (c = t.stylize("[Setter]", "special")),
            z(r, o) || (u = "[" + o + "]"),
            c ||
              (t.seen.indexOf(f.value) < 0
                ? (c = g(n)
                    ? l(t, f.value, null)
                    : l(t, f.value, n - 1)).indexOf("\n") > -1 &&
                  (c = i
                    ? c
                        .split("\n")
                        .map(function (t) {
                          return "  " + t;
                        })
                        .join("\n")
                        .substr(2)
                    : "\n" +
                      c
                        .split("\n")
                        .map(function (t) {
                          return "   " + t;
                        })
                        .join("\n"))
                : (c = t.stylize("[Circular]", "special"))),
            v(u))
          ) {
            if (i && o.match(/^\d+$/)) return c;
            (u = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/)
              ? ((u = u.substr(1, u.length - 2)), (u = t.stylize(u, "name")))
              : ((u = u
                  .replace(/'/g, "\\'")
                  .replace(/\\"/g, '"')
                  .replace(/(^"|"$)/g, "'")),
                (u = t.stylize(u, "string")));
          }
          return u + ": " + c;
        }
        function y(t) {
          return Array.isArray(t);
        }
        function d(t) {
          return "boolean" === typeof t;
        }
        function g(t) {
          return null === t;
        }
        function h(t) {
          return "number" === typeof t;
        }
        function b(t) {
          return "string" === typeof t;
        }
        function v(t) {
          return void 0 === t;
        }
        function w(t) {
          return m(t) && "[object RegExp]" === x(t);
        }
        function m(t) {
          return "object" === typeof t && null !== t;
        }
        function O(t) {
          return m(t) && "[object Date]" === x(t);
        }
        function j(t) {
          return m(t) && ("[object Error]" === x(t) || t instanceof Error);
        }
        function _(t) {
          return "function" === typeof t;
        }
        function x(t) {
          return Object.prototype.toString.call(t);
        }
        function k(t) {
          return t < 10 ? "0" + t.toString(10) : t.toString(10);
        }
        (e.debuglog = function (n) {
          if (
            (v(i) && (i = t.env.NODE_DEBUG || ""), (n = n.toUpperCase()), !u[n])
          )
            if (new RegExp("\\b" + n + "\\b", "i").test(i)) {
              var r = t.pid;
              u[n] = function () {
                var t = e.format.apply(e, arguments);
                console.error("%s %d: %s", n, r, t);
              };
            } else u[n] = function () {};
          return u[n];
        }),
          (e.inspect = c),
          (c.colors = {
            bold: [1, 22],
            italic: [3, 23],
            underline: [4, 24],
            inverse: [7, 27],
            white: [37, 39],
            grey: [90, 39],
            black: [30, 39],
            blue: [34, 39],
            cyan: [36, 39],
            green: [32, 39],
            magenta: [35, 39],
            red: [31, 39],
            yellow: [33, 39],
          }),
          (c.styles = {
            special: "cyan",
            number: "yellow",
            boolean: "yellow",
            undefined: "grey",
            null: "bold",
            string: "green",
            date: "magenta",
            regexp: "red",
          }),
          (e.isArray = y),
          (e.isBoolean = d),
          (e.isNull = g),
          (e.isNullOrUndefined = function (t) {
            return null == t;
          }),
          (e.isNumber = h),
          (e.isString = b),
          (e.isSymbol = function (t) {
            return "symbol" === typeof t;
          }),
          (e.isUndefined = v),
          (e.isRegExp = w),
          (e.isObject = m),
          (e.isDate = O),
          (e.isError = j),
          (e.isFunction = _),
          (e.isPrimitive = function (t) {
            return (
              null === t ||
              "boolean" === typeof t ||
              "number" === typeof t ||
              "string" === typeof t ||
              "symbol" === typeof t ||
              "undefined" === typeof t
            );
          }),
          (e.isBuffer = n("j/1Z"));
        var E = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        function S() {
          var t = new Date(),
            e = [k(t.getHours()), k(t.getMinutes()), k(t.getSeconds())].join(
              ":"
            );
          return [t.getDate(), E[t.getMonth()], e].join(" ");
        }
        function z(t, e) {
          return Object.prototype.hasOwnProperty.call(t, e);
        }
        (e.log = function () {
          console.log("%s - %s", S(), e.format.apply(e, arguments));
        }),
          (e.inherits = n("FfBw")),
          (e._extend = function (t, e) {
            if (!e || !m(e)) return t;
            for (var n = Object.keys(e), r = n.length; r--; ) t[n[r]] = e[n[r]];
            return t;
          });
        var D =
          "undefined" !== typeof Symbol
            ? Symbol("util.promisify.custom")
            : void 0;
        function P(t, e) {
          if (!t) {
            var n = new Error("Promise was rejected with a falsy value");
            (n.reason = t), (t = n);
          }
          return e(t);
        }
        (e.promisify = function (t) {
          if ("function" !== typeof t)
            throw new TypeError(
              'The "original" argument must be of type Function'
            );
          if (D && t[D]) {
            var e;
            if ("function" !== typeof (e = t[D]))
              throw new TypeError(
                'The "util.promisify.custom" argument must be of type Function'
              );
            return (
              Object.defineProperty(e, D, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
              e
            );
          }
          function e() {
            for (
              var e,
                n,
                r = new Promise(function (t, r) {
                  (e = t), (n = r);
                }),
                o = [],
                i = 0;
              i < arguments.length;
              i++
            )
              o.push(arguments[i]);
            o.push(function (t, r) {
              t ? n(t) : e(r);
            });
            try {
              t.apply(this, o);
            } catch (u) {
              n(u);
            }
            return r;
          }
          return (
            Object.setPrototypeOf(e, Object.getPrototypeOf(t)),
            D &&
              Object.defineProperty(e, D, {
                value: e,
                enumerable: !1,
                writable: !1,
                configurable: !0,
              }),
            Object.defineProperties(e, r(t))
          );
        }),
          (e.promisify.custom = D),
          (e.callbackify = function (e) {
            if ("function" !== typeof e)
              throw new TypeError(
                'The "original" argument must be of type Function'
              );
            function n() {
              for (var n = [], r = 0; r < arguments.length; r++)
                n.push(arguments[r]);
              var o = n.pop();
              if ("function" !== typeof o)
                throw new TypeError(
                  "The last argument must be of type Function"
                );
              var i = this,
                u = function () {
                  return o.apply(i, arguments);
                };
              e.apply(this, n).then(
                function (e) {
                  t.nextTick(u, null, e);
                },
                function (e) {
                  t.nextTick(P, e, u);
                }
              );
            }
            return (
              Object.setPrototypeOf(n, Object.getPrototypeOf(e)),
              Object.defineProperties(n, r(e)),
              n
            );
          });
      }.call(this, n("8oxB")));
    },
    FfBw: function (t, e) {
      "function" === typeof Object.create
        ? (t.exports = function (t, e) {
            (t.super_ = e),
              (t.prototype = Object.create(e.prototype, {
                constructor: {
                  value: t,
                  enumerable: !1,
                  writable: !0,
                  configurable: !0,
                },
              }));
          })
        : (t.exports = function (t, e) {
            t.super_ = e;
            var n = function () {};
            (n.prototype = e.prototype),
              (t.prototype = new n()),
              (t.prototype.constructor = t);
          });
    },
    V1kZ: function (t, e, n) {
      "use strict";
      n.r(e),
        n.d(e, "get_logged_in_user", function () {
          return p;
        }),
        n.d(e, "connect_api", function () {
          return y;
        }),
        n.d(e, "create_processor_nlp", function () {
          return d;
        }),
        n.d(e, "set_tensorflow_ml_backend", function () {
          return w;
        }),
        n.d(e, "initialize_tensorflow", function () {
          return m;
        }),
        n.d(e, "get_score", function () {
          return O;
        }),
        n.d(e, "get_analyze_progress", function () {
          return j;
        }),
        n.d(e, "create_network_protocol_engine", function () {
          return _;
        }),
        n.d(e, "DocumentProcessor", function () {
          return k;
        }),
        n.d(e, "DocumentSummary", function () {
          return E;
        }),
        n.d(e, "Law", function () {
          return S;
        }),
        n.d(e, "NetworkProtocol", function () {
          return z;
        }),
        n.d(e, "ThingWithDescription", function () {
          return D;
        }),
        n.d(e, "__wbg_random_d45f566bef640e60", function () {
          return P;
        }),
        n.d(e, "__wbindgen_throw", function () {
          return T;
        });
      var r = n("1OyB"),
        o = n("vuIU"),
        i = n("yIOL"),
        u = new ("undefined" === typeof TextDecoder
          ? n("7tlc").TextDecoder
          : TextDecoder)("utf-8", { ignoreBOM: !0, fatal: !0 });
      u.decode();
      var c = null;
      function f() {
        return (
          (null !== c && c.buffer === i.t.buffer) ||
            (c = new Uint8Array(i.t.buffer)),
          c
        );
      }
      function a(t, e) {
        return u.decode(f().subarray(t, t + e));
      }
      var l = null;
      function s() {
        return (
          (null !== l && l.buffer === i.t.buffer) ||
            (l = new Int32Array(i.t.buffer)),
          l
        );
      }
      function p() {
        try {
          i.q(8);
          var t = s()[2],
            e = s()[3];
          return a(t, e);
        } finally {
          i.f(t, e);
        }
      }
      function y() {
        try {
          i.i(8);
          var t = s()[2],
            e = s()[3];
          return a(t, e);
        } finally {
          i.f(t, e);
        }
      }
      function d() {
        var t = i.k();
        return k.__wrap(t);
      }
      var g = 0,
        h = new ("undefined" === typeof TextEncoder
          ? n("7tlc").TextEncoder
          : TextEncoder)("utf-8"),
        b =
          "function" === typeof h.encodeInto
            ? function (t, e) {
                return h.encodeInto(t, e);
              }
            : function (t, e) {
                var n = h.encode(t);
                return e.set(n), { read: t.length, written: n.length };
              };
      function v(t, e, n) {
        if (void 0 === n) {
          var r = h.encode(t),
            o = e(r.length);
          return (
            f()
              .subarray(o, o + r.length)
              .set(r),
            (g = r.length),
            o
          );
        }
        for (var i = t.length, u = e(i), c = f(), a = 0; a < i; a++) {
          var l = t.charCodeAt(a);
          if (l > 127) break;
          c[u + a] = l;
        }
        if (a !== i) {
          0 !== a && (t = t.slice(a)), (u = n(u, i, (i = a + 3 * t.length)));
          var s = f().subarray(u + a, u + i);
          a += b(t, s).written;
        }
        return (g = a), u;
      }
      function w(t) {
        var e = v(t, i.g, i.h),
          n = g;
        i.v(e, n);
      }
      function m() {
        try {
          i.s(8);
          var t = s()[2],
            e = s()[3];
          return a(t, e);
        } finally {
          i.f(t, e);
        }
      }
      function O() {
        return i.r();
      }
      function j(t) {
        try {
          i.p(8, t);
          var e = s()[2],
            n = s()[3];
          return a(e, n);
        } finally {
          i.f(e, n);
        }
      }
      function _() {
        var t = i.j();
        return z.__wrap(t);
      }
      var x,
        k = (function () {
          function t() {
            Object(r.a)(this, t);
          }
          return (
            Object(o.a)(
              t,
              [
                {
                  key: "free",
                  value: function () {
                    var t = this.ptr;
                    (this.ptr = 0), i.a(t);
                  },
                },
                {
                  key: "get_processed_tweets",
                  value: function () {
                    return i.l(this.ptr);
                  },
                },
                {
                  key: "get_visualizer_data",
                  value: function () {
                    try {
                      i.m(8, this.ptr);
                      var t = s()[2],
                        e = s()[3];
                      return a(t, e);
                    } finally {
                      i.f(t, e);
                    }
                  },
                },
                {
                  key: "inject_twitter_data",
                  value: function () {
                    i.n(this.ptr);
                  },
                },
                {
                  key: "summarize_tos",
                  value: function (t) {
                    try {
                      var e = v(t, i.g, i.h),
                        n = g;
                      i.o(8, this.ptr, e, n);
                      var r = s()[2],
                        o = s()[3];
                      return a(r, o);
                    } finally {
                      i.f(r, o);
                    }
                  },
                },
              ],
              [
                {
                  key: "__wrap",
                  value: function (e) {
                    var n = Object.create(t.prototype);
                    return (n.ptr = e), n;
                  },
                },
              ]
            ),
            t
          );
        })(),
        E = (function () {
          function t() {
            Object(r.a)(this, t);
          }
          return (
            Object(o.a)(t, [
              {
                key: "free",
                value: function () {
                  var t = this.ptr;
                  (this.ptr = 0), i.b(t);
                },
              },
            ]),
            t
          );
        })(),
        S = (function () {
          function t() {
            Object(r.a)(this, t);
          }
          return (
            Object(o.a)(t, [
              {
                key: "free",
                value: function () {
                  var t = this.ptr;
                  (this.ptr = 0), i.c(t);
                },
              },
            ]),
            t
          );
        })(),
        z = (function () {
          function t() {
            Object(r.a)(this, t);
          }
          return (
            Object(o.a)(
              t,
              [
                {
                  key: "free",
                  value: function () {
                    var t = this.ptr;
                    (this.ptr = 0), i.d(t);
                  },
                },
                {
                  key: "decode_server_data",
                  value: function (t) {
                    try {
                      var e = v(t, i.g, i.h),
                        n = g;
                      i.u(8, this.ptr, e, n);
                      var r = s()[2],
                        o = s()[3];
                      return a(r, o);
                    } finally {
                      i.f(r, o);
                    }
                  },
                },
              ],
              [
                {
                  key: "__wrap",
                  value: function (e) {
                    var n = Object.create(t.prototype);
                    return (n.ptr = e), n;
                  },
                },
              ]
            ),
            t
          );
        })(),
        D = (function () {
          function t() {
            Object(r.a)(this, t);
          }
          return (
            Object(o.a)(t, [
              {
                key: "free",
                value: function () {
                  var t = this.ptr;
                  (this.ptr = 0), i.e(t);
                },
              },
            ]),
            t
          );
        })(),
        P =
          "function" == typeof Math.random
            ? Math.random
            : ((x = "Math.random"),
              function () {
                throw new Error("".concat(x, " is not defined"));
              }),
        T = function (t, e) {
          throw new Error(a(t, e));
        };
    },
    "j/1Z": function (t, e) {
      t.exports = function (t) {
        return (
          t &&
          "object" === typeof t &&
          "function" === typeof t.copy &&
          "function" === typeof t.fill &&
          "function" === typeof t.readUInt8
        );
      };
    },
    yIOL: function (t, e, n) {
      "use strict";
      var r = n.w[t.i];
      t.exports = r;
      n("V1kZ");
      r.w();
    },
  },
]);
