(window.webpackJsonp = window.webpackJsonp || []).push([
  [11],
  {
    "/uW/": function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n("o0o1"),
        a = n.n(r),
        o = n("MX0m"),
        i = n.n(o),
        s = n("q1tI"),
        l = n.n(s),
        c = n("miPH"),
        d = n.n(c);
      function u() {
        return (
          "undefined" === typeof document ||
          "undefined" === typeof document.visibilityState ||
          "hidden" !== document.visibilityState
        );
      }
      function p() {
        return "undefined" === typeof navigator.onLine || navigator.onLine;
      }
      const f = new Map();
      function m(e) {
        return f.get(e);
      }
      function h(e, t) {
        return f.set(e, t);
      }
      const b = {},
        g = {},
        y = {},
        v = {},
        x = {};
      const w =
          "undefined" !== typeof window &&
          navigator.connection &&
          -1 !== ["slow-2g", "2g"].indexOf(navigator.connection.effectiveType),
        j = {
          onLoadingSlow: () => {},
          onSuccess: () => {},
          onError: () => {},
          onErrorRetry: function (e, t, n, r, a) {
            if (!u()) return;
            if (n.errorRetryCount && a.retryCount > n.errorRetryCount) return;
            const o = Math.min(a.retryCount || 0, 8),
              i = ~~((Math.random() + 0.5) * (1 << o)) * n.errorRetryInterval;
            setTimeout(r, i, a);
          },
          errorRetryInterval: 1e3 * (w ? 10 : 5),
          focusThrottleInterval: 5e3,
          dedupingInterval: 2e3,
          loadingTimeout: 1e3 * (w ? 5 : 3),
          refreshInterval: 0,
          revalidateOnFocus: !0,
          revalidateOnReconnect: !0,
          refreshWhenHidden: !1,
          refreshWhenOffline: !1,
          shouldRetryOnError: !0,
          suspense: !1,
          compare: d.a,
        };
      let O = !1;
      if ("undefined" !== typeof window && window.addEventListener && !O) {
        const e = () => {
          if (u() && p()) for (let e in y) y[e][0] && y[e][0]();
        };
        window.addEventListener("visibilitychange", e, !1),
          window.addEventListener("focus", e, !1),
          (O = !0);
      }
      var C = j;
      const R = new WeakMap();
      let E = 0;
      const k = Object(s.createContext)({});
      k.displayName = "SWRConfigContext";
      var N = k;
      const S = "undefined" === typeof window,
        _ = S ? s.useEffect : s.useLayoutEffect,
        I = (e) => (e ? "err@" + e : ""),
        T = (e) => {
          let t = null;
          if ("function" === typeof e)
            try {
              e = e();
            } catch (n) {
              e = "";
            }
          return (
            Array.isArray(e)
              ? ((t = e),
                (e = (function (e) {
                  if (!e.length) return "";
                  let t = "arg";
                  for (let n = 0; n < e.length; ++n) {
                    let r;
                    null === e[n] || "object" !== typeof e[n]
                      ? (r =
                          "string" === typeof e[n]
                            ? '"' + e[n] + '"'
                            : String(e[n]))
                      : R.has(e[n])
                      ? (r = R.get(e[n]))
                      : ((r = E), R.set(e[n], E++)),
                      (t += "@" + r);
                  }
                  return t;
                })(e)))
              : (e = String(e || "")),
            [e, t]
          );
        },
        L = (e, t, n) => {
          const r = v[e];
          if (e && r) for (let a = 0; a < r.length; ++a) r[a](!1, t, n);
        },
        A = async (e, t, n = !0) => {
          const [r] = T(e);
          if (!r) return;
          if ("undefined" === typeof t)
            return ((e, t = !0) => {
              const [n] = T(e);
              if (!n) return;
              const r = v[n];
              if (n && r) {
                const e = m(n),
                  a = m(I(n));
                for (let n = 0; n < r.length; ++n) r[n](t, e, a, !1);
              }
            })(e, n);
          let a, o;
          if (((x[r] = Date.now() - 1), t && "function" === typeof t))
            try {
              a = await t(m(r));
            } catch (s) {
              o = s;
            }
          else if (t && "function" === typeof t.then)
            try {
              a = await t;
            } catch (s) {
              o = s;
            }
          else a = t;
          "undefined" !== typeof a && h(r, a);
          const i = v[r];
          if (i) for (let l = 0; l < i.length; ++l) i[l](!!n, a, o, !1);
          if (o) throw o;
          return a;
        };
      N.Provider;
      var D = function (...e) {
        let t,
          n,
          r = {};
        e.length >= 1 && (t = e[0]),
          e.length > 2
            ? ((n = e[1]), (r = e[2]))
            : "function" === typeof e[1]
            ? (n = e[1])
            : "object" === typeof e[1] && (r = e[1]);
        const [a, o] = T(t),
          i = I(a);
        (r = Object.assign({}, C, Object(s.useContext)(N), r)),
          "undefined" === typeof n && (n = r.fetcher);
        const l = m(a) || r.initialData,
          c = m(i),
          d = Object(s.useRef)({ data: !1, error: !1, isValidating: !1 }),
          f = Object(s.useRef)({ data: l, error: c, isValidating: !1 }),
          w = Object(s.useState)(null)[1];
        let j = Object(s.useCallback)((e) => {
          let t = !1;
          for (let n in e) (f.current[n] = e[n]), d.current[n] && (t = !0);
          (t || r.suspense) && w({});
        }, []);
        const O = Object(s.useRef)(!1),
          R = Object(s.useRef)(a),
          E = Object(s.useCallback)((e, t) => A(a, e, t), [a]),
          k = Object(s.useCallback)(
            async (e = {}) => {
              if (!a || !n) return !1;
              if (O.current) return !1;
              e = Object.assign({ dedupe: !1 }, e);
              let t = !0,
                s = "undefined" !== typeof b[a] && e.dedupe;
              try {
                let e, l;
                if (
                  (j({ isValidating: !0 }),
                  s
                    ? ((l = g[a]), (e = await b[a]))
                    : (b[a] && (x[a] = Date.now() - 1),
                      r.loadingTimeout &&
                        !m(a) &&
                        setTimeout(() => {
                          t && r.onLoadingSlow(a, r);
                        }, r.loadingTimeout),
                      (b[a] = null !== o ? n(...o) : n(a)),
                      (g[a] = l = Date.now()),
                      (e = await b[a]),
                      setTimeout(() => {
                        delete b[a], delete g[a];
                      }, r.dedupingInterval),
                      r.onSuccess(e, a, r)),
                  x[a] && l <= x[a])
                )
                  return j({ isValidating: !1 }), !1;
                h(a, e), h(i, void 0), (R.current = a);
                const c = { isValidating: !1 };
                "undefined" !== typeof f.current.error && (c.error = void 0),
                  r.compare(f.current.data, e) || (c.data = e),
                  j(c),
                  s || L(a, e, void 0);
              } catch (l) {
                if (
                  (delete b[a],
                  delete g[a],
                  h(i, l),
                  (R.current = a),
                  f.current.error !== l &&
                    (j({ isValidating: !1, error: l }), s || L(a, void 0, l)),
                  r.onError(l, a, r),
                  r.shouldRetryOnError)
                ) {
                  const t = (e.retryCount || 0) + 1;
                  r.onErrorRetry(
                    l,
                    a,
                    r,
                    k,
                    Object.assign({ dedupe: !0 }, e, { retryCount: t })
                  );
                }
              }
              return (t = !1), !0;
            },
            [a]
          );
        if (
          (_(() => {
            if (!a) return;
            O.current = !1;
            const e = f.current.data,
              t = m(a) || r.initialData;
            (R.current === a && r.compare(e, t)) ||
              (j({ data: t }), (R.current = a));
            const n = () => k({ dedupe: !0 });
            let o;
            r.initialData ||
              ("undefined" !== typeof t && !S && window.requestIdleCallback
                ? window.requestIdleCallback(n)
                : n()),
              r.revalidateOnFocus &&
                ((o = (function (e, t) {
                  let n = !1;
                  return (...r) => {
                    n || ((n = !0), e(...r), setTimeout(() => (n = !1), t));
                  };
                })(n, r.focusThrottleInterval)),
                y[a] ? y[a].push(o) : (y[a] = [o]));
            const i = (e = !0, t, o, i = !0) => {
              const s = {};
              let l = !1;
              return (
                "undefined" === typeof t ||
                  r.compare(f.current.data, t) ||
                  ((s.data = t), (l = !0)),
                f.current.error !== o && ((s.error = o), (l = !0)),
                l && j(s),
                (R.current = a),
                !!e && (i ? n() : k())
              );
            };
            v[a] ? v[a].push(i) : (v[a] = [i]);
            let s = null;
            return (
              "undefined" !== typeof addEventListener &&
                r.revalidateOnReconnect &&
                (s = addEventListener("online", n)),
              () => {
                if (((j = () => null), (O.current = !0), o && y[a])) {
                  const e = y[a],
                    t = e.indexOf(o);
                  t >= 0 && ((e[t] = e[e.length - 1]), e.pop());
                }
                if (v[a]) {
                  const e = v[a],
                    t = e.indexOf(i);
                  t >= 0 && ((e[t] = e[e.length - 1]), e.pop());
                }
                "undefined" !== typeof removeEventListener &&
                  null !== s &&
                  removeEventListener("online", s);
              }
            );
          }, [a, k]),
          _(() => {
            let e = null;
            const t = async () => {
              f.current.error ||
                (!r.refreshWhenHidden && !u()) ||
                r.refreshWhenOffline ||
                !p() ||
                (await k({ dedupe: !0 })),
                r.refreshInterval && (e = setTimeout(t, r.refreshInterval));
            };
            return (
              r.refreshInterval && (e = setTimeout(t, r.refreshInterval)),
              () => {
                e && clearTimeout(e);
              }
            );
          }, [r.refreshInterval, r.refreshWhenHidden, r.refreshWhenOffline, k]),
          r.suspense)
        ) {
          if (S)
            throw new Error("Suspense on server side is not yet supported!");
          let e = m(a),
            t = m(i);
          if ("undefined" === typeof e && "undefined" === typeof t) {
            if ((b[a] || k(), b[a] && "function" === typeof b[a].then))
              throw b[a];
            e = b[a];
          }
          if ("undefined" === typeof e && t) throw t;
          return {
            error: t,
            data: e,
            revalidate: k,
            mutate: E,
            isValidating: f.current.isValidating,
          };
        }
        return Object(s.useMemo)(() => {
          const e = { revalidate: k, mutate: E };
          return (
            Object.defineProperties(e, {
              error: {
                get: function () {
                  return (
                    (d.current.error = !0),
                    R.current === a ? f.current.error : c
                  );
                },
              },
              data: {
                get: function () {
                  return (
                    (d.current.data = !0), R.current === a ? f.current.data : l
                  );
                },
              },
              isValidating: {
                get: function () {
                  return (d.current.isValidating = !0), f.current.isValidating;
                },
              },
            }),
            e
          );
        }, [k]);
      };
      new Map();
      var P = D,
        M = n("qM6v"),
        q = n.n(M),
        z = n("wx14"),
        H = n("Ff2n"),
        $ = (n("17x9"), n("iuhU")),
        V = n("As0B"),
        B = Object(V.a)(
          s.createElement("path", {
            d:
              "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z",
          }),
          "Cancel"
        ),
        F = n("H2TA"),
        W = n("ye/S"),
        U = n("bfFb"),
        K = n("NqtD"),
        G = n("VD++"),
        J = s.forwardRef(function (e, t) {
          var n = e.avatar,
            r = e.classes,
            a = e.className,
            o = e.clickable,
            i = e.color,
            l = void 0 === i ? "default" : i,
            c = e.component,
            d = e.deleteIcon,
            u = e.disabled,
            p = void 0 !== u && u,
            f = e.icon,
            m = e.label,
            h = e.onClick,
            b = e.onDelete,
            g = e.onKeyDown,
            y = e.onKeyUp,
            v = e.size,
            x = void 0 === v ? "medium" : v,
            w = e.variant,
            j = void 0 === w ? "default" : w,
            O = Object(H.a)(e, [
              "avatar",
              "classes",
              "className",
              "clickable",
              "color",
              "component",
              "deleteIcon",
              "disabled",
              "icon",
              "label",
              "onClick",
              "onDelete",
              "onKeyDown",
              "onKeyUp",
              "size",
              "variant",
            ]),
            C = s.useRef(null),
            R = Object(U.a)(C, t),
            E = function (e) {
              e.stopPropagation(), b && b(e);
            },
            k = function (e) {
              return "Backspace" === e.key || "Delete" === e.key;
            },
            N = !(!1 === o || !h) || o,
            S = "small" === x,
            _ = c || (N ? G.a : "div"),
            I = _ === G.a ? { component: "div" } : {},
            T = null;
          if (b) {
            var L = Object($.a)(
              "default" !== l &&
                ("default" === j
                  ? r["deleteIconColor".concat(Object(K.a)(l))]
                  : r["deleteIconOutlinedColor".concat(Object(K.a)(l))]),
              S && r.deleteIconSmall
            );
            T =
              d && s.isValidElement(d)
                ? s.cloneElement(d, {
                    className: Object($.a)(d.props.className, r.deleteIcon, L),
                    onClick: E,
                  })
                : s.createElement(B, {
                    className: Object($.a)(r.deleteIcon, L),
                    onClick: E,
                  });
          }
          var A = null;
          n &&
            s.isValidElement(n) &&
            (A = s.cloneElement(n, {
              className: Object($.a)(
                r.avatar,
                n.props.className,
                S && r.avatarSmall,
                "default" !== l && r["avatarColor".concat(Object(K.a)(l))]
              ),
            }));
          var D = null;
          return (
            f &&
              s.isValidElement(f) &&
              (D = s.cloneElement(f, {
                className: Object($.a)(
                  r.icon,
                  f.props.className,
                  S && r.iconSmall,
                  "default" !== l && r["iconColor".concat(Object(K.a)(l))]
                ),
              })),
            s.createElement(
              _,
              Object(z.a)(
                {
                  role: N || b ? "button" : void 0,
                  className: Object($.a)(
                    r.root,
                    a,
                    "default" !== l && [
                      r["color".concat(Object(K.a)(l))],
                      N && r["clickableColor".concat(Object(K.a)(l))],
                      b && r["deletableColor".concat(Object(K.a)(l))],
                    ],
                    "default" !== j && [
                      r.outlined,
                      {
                        primary: r.outlinedPrimary,
                        secondary: r.outlinedSecondary,
                      }[l],
                    ],
                    p && r.disabled,
                    S && r.sizeSmall,
                    N && r.clickable,
                    b && r.deletable
                  ),
                  "aria-disabled": !!p || void 0,
                  tabIndex: N || b ? 0 : void 0,
                  onClick: h,
                  onKeyDown: function (e) {
                    k(e) && e.preventDefault(), g && g(e);
                  },
                  onKeyUp: function (e) {
                    y && y(e),
                      e.currentTarget === e.target &&
                        (b && k(e)
                          ? b(e)
                          : "Escape" === e.key &&
                            C.current &&
                            C.current.blur());
                  },
                  ref: R,
                },
                I,
                O
              ),
              A || D,
              s.createElement(
                "span",
                { className: Object($.a)(r.label, S && r.labelSmall) },
                m
              ),
              T
            )
          );
        }),
        Y = Object(F.a)(
          function (e) {
            var t =
                "light" === e.palette.type
                  ? e.palette.grey[300]
                  : e.palette.grey[700],
              n = Object(W.c)(e.palette.text.primary, 0.26);
            return {
              root: {
                fontFamily: e.typography.fontFamily,
                fontSize: e.typography.pxToRem(13),
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: 32,
                color: e.palette.getContrastText(t),
                backgroundColor: t,
                borderRadius: 16,
                whiteSpace: "nowrap",
                transition: e.transitions.create([
                  "background-color",
                  "box-shadow",
                ]),
                cursor: "default",
                outline: 0,
                textDecoration: "none",
                border: "none",
                padding: 0,
                verticalAlign: "middle",
                boxSizing: "border-box",
                "&$disabled": { opacity: 0.5, pointerEvents: "none" },
                "& $avatar": {
                  marginLeft: 5,
                  marginRight: -6,
                  width: 24,
                  height: 24,
                  color:
                    "light" === e.palette.type
                      ? e.palette.grey[700]
                      : e.palette.grey[300],
                  fontSize: e.typography.pxToRem(12),
                },
                "& $avatarColorPrimary": {
                  color: e.palette.primary.contrastText,
                  backgroundColor: e.palette.primary.dark,
                },
                "& $avatarColorSecondary": {
                  color: e.palette.secondary.contrastText,
                  backgroundColor: e.palette.secondary.dark,
                },
                "& $avatarSmall": {
                  marginLeft: 4,
                  marginRight: -4,
                  width: 18,
                  height: 18,
                  fontSize: e.typography.pxToRem(10),
                },
              },
              sizeSmall: { height: 24 },
              colorPrimary: {
                backgroundColor: e.palette.primary.main,
                color: e.palette.primary.contrastText,
              },
              colorSecondary: {
                backgroundColor: e.palette.secondary.main,
                color: e.palette.secondary.contrastText,
              },
              disabled: {},
              clickable: {
                userSelect: "none",
                WebkitTapHighlightColor: "transparent",
                cursor: "pointer",
                "&:hover, &:focus": { backgroundColor: Object(W.b)(t, 0.08) },
                "&:active": { boxShadow: e.shadows[1] },
              },
              clickableColorPrimary: {
                "&:hover, &:focus": {
                  backgroundColor: Object(W.b)(e.palette.primary.main, 0.08),
                },
              },
              clickableColorSecondary: {
                "&:hover, &:focus": {
                  backgroundColor: Object(W.b)(e.palette.secondary.main, 0.08),
                },
              },
              deletable: {
                "&:focus": { backgroundColor: Object(W.b)(t, 0.08) },
              },
              deletableColorPrimary: {
                "&:focus": {
                  backgroundColor: Object(W.b)(e.palette.primary.main, 0.2),
                },
              },
              deletableColorSecondary: {
                "&:focus": {
                  backgroundColor: Object(W.b)(e.palette.secondary.main, 0.2),
                },
              },
              outlined: {
                backgroundColor: "transparent",
                border: "1px solid ".concat(
                  "light" === e.palette.type
                    ? "rgba(0, 0, 0, 0.23)"
                    : "rgba(255, 255, 255, 0.23)"
                ),
                "$clickable&:hover, $clickable&:focus, $deletable&:focus": {
                  backgroundColor: Object(W.c)(
                    e.palette.text.primary,
                    e.palette.action.hoverOpacity
                  ),
                },
                "& $avatar": { marginLeft: 4 },
                "& $avatarSmall": { marginLeft: 2 },
                "& $icon": { marginLeft: 4 },
                "& $iconSmall": { marginLeft: 2 },
                "& $deleteIcon": { marginRight: 5 },
                "& $deleteIconSmall": { marginRight: 3 },
              },
              outlinedPrimary: {
                color: e.palette.primary.main,
                border: "1px solid ".concat(e.palette.primary.main),
                "$clickable&:hover, $clickable&:focus, $deletable&:focus": {
                  backgroundColor: Object(W.c)(
                    e.palette.primary.main,
                    e.palette.action.hoverOpacity
                  ),
                },
              },
              outlinedSecondary: {
                color: e.palette.secondary.main,
                border: "1px solid ".concat(e.palette.secondary.main),
                "$clickable&:hover, $clickable&:focus, $deletable&:focus": {
                  backgroundColor: Object(W.c)(
                    e.palette.secondary.main,
                    e.palette.action.hoverOpacity
                  ),
                },
              },
              avatar: {},
              avatarSmall: {},
              avatarColorPrimary: {},
              avatarColorSecondary: {},
              icon: {
                color:
                  "light" === e.palette.type
                    ? e.palette.grey[700]
                    : e.palette.grey[300],
                marginLeft: 5,
                marginRight: -6,
              },
              iconSmall: {
                width: 18,
                height: 18,
                marginLeft: 4,
                marginRight: -4,
              },
              iconColorPrimary: { color: "inherit" },
              iconColorSecondary: { color: "inherit" },
              label: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                paddingLeft: 12,
                paddingRight: 12,
                whiteSpace: "nowrap",
              },
              labelSmall: { paddingLeft: 8, paddingRight: 8 },
              deleteIcon: {
                WebkitTapHighlightColor: "transparent",
                color: n,
                height: 22,
                width: 22,
                cursor: "pointer",
                margin: "0 5px 0 -6px",
                "&:hover": { color: Object(W.c)(n, 0.4) },
              },
              deleteIconSmall: {
                height: 16,
                width: 16,
                marginRight: 4,
                marginLeft: -4,
              },
              deleteIconColorPrimary: {
                color: Object(W.c)(e.palette.primary.contrastText, 0.7),
                "&:hover, &:active": { color: e.palette.primary.contrastText },
              },
              deleteIconColorSecondary: {
                color: Object(W.c)(e.palette.secondary.contrastText, 0.7),
                "&:hover, &:active": {
                  color: e.palette.secondary.contrastText,
                },
              },
              deleteIconOutlinedColorPrimary: {
                color: Object(W.c)(e.palette.primary.main, 0.7),
                "&:hover, &:active": { color: e.palette.primary.main },
              },
              deleteIconOutlinedColorSecondary: {
                color: Object(W.c)(e.palette.secondary.main, 0.7),
                "&:hover, &:active": { color: e.palette.secondary.main },
              },
            };
          },
          { name: "MuiChip" }
        )(J),
        X = Object(V.a)(
          s.createElement("path", {
            d:
              "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",
          }),
          "Person"
        );
      var Z = s.forwardRef(function (e, t) {
          var n = e.alt,
            r = e.children,
            a = e.classes,
            o = e.className,
            i = e.component,
            l = void 0 === i ? "div" : i,
            c = e.imgProps,
            d = e.sizes,
            u = e.src,
            p = e.srcSet,
            f = e.variant,
            m = void 0 === f ? "circle" : f,
            h = Object(H.a)(e, [
              "alt",
              "children",
              "classes",
              "className",
              "component",
              "imgProps",
              "sizes",
              "src",
              "srcSet",
              "variant",
            ]),
            b = null,
            g = (function (e) {
              var t = e.src,
                n = e.srcSet,
                r = s.useState(!1),
                a = r[0],
                o = r[1];
              return (
                s.useEffect(
                  function () {
                    if (t || n) {
                      o(!1);
                      var e = !0,
                        r = new Image();
                      return (
                        (r.src = t),
                        (r.srcSet = n),
                        (r.onload = function () {
                          e && o("loaded");
                        }),
                        (r.onerror = function () {
                          e && o("error");
                        }),
                        function () {
                          e = !1;
                        }
                      );
                    }
                  },
                  [t, n]
                ),
                a
              );
            })({ src: u, srcSet: p }),
            y = u || p,
            v = y && "error" !== g;
          return (
            (b = v
              ? s.createElement(
                  "img",
                  Object(z.a)(
                    { alt: n, src: u, srcSet: p, sizes: d, className: a.img },
                    c
                  )
                )
              : null != r
              ? r
              : y && n
              ? n[0]
              : s.createElement(X, { className: a.fallback })),
            s.createElement(
              l,
              Object(z.a)(
                {
                  className: Object($.a)(
                    a.root,
                    a.system,
                    a[m],
                    o,
                    !v && a.colorDefault
                  ),
                  ref: t,
                },
                h
              ),
              b
            )
          );
        }),
        Q = Object(F.a)(
          function (e) {
            return {
              root: {
                position: "relative",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                width: 40,
                height: 40,
                fontFamily: e.typography.fontFamily,
                fontSize: e.typography.pxToRem(20),
                lineHeight: 1,
                borderRadius: "50%",
                overflow: "hidden",
                userSelect: "none",
              },
              colorDefault: {
                color: e.palette.background.default,
                backgroundColor:
                  "light" === e.palette.type
                    ? e.palette.grey[400]
                    : e.palette.grey[600],
              },
              circle: {},
              rounded: { borderRadius: e.shape.borderRadius },
              square: { borderRadius: 0 },
              img: {
                width: "100%",
                height: "100%",
                textAlign: "center",
                objectFit: "cover",
                color: "transparent",
                textIndent: 1e4,
              },
              fallback: { width: "75%", height: "75%" },
            };
          },
          { name: "MuiAvatar" }
        )(Z),
        ee = n("DSFK"),
        te = n("25BE"),
        ne = n("BsWD"),
        re = n("PYwp");
      var ae = n("ODXe"),
        oe = (n("TOwV"), n("dRu9")),
        ie = n("wpWl"),
        se = n("4Hym"),
        le = n("tr08"),
        ce = s.forwardRef(function (e, t) {
          var n = e.children,
            r = e.classes,
            a = e.className,
            o = e.collapsedHeight,
            i = void 0 === o ? "0px" : o,
            l = e.component,
            c = void 0 === l ? "div" : l,
            d = e.in,
            u = e.onEnter,
            p = e.onEntered,
            f = e.onEntering,
            m = e.onExit,
            h = e.onExiting,
            b = e.style,
            g = e.timeout,
            y = void 0 === g ? ie.b.standard : g,
            v = Object(H.a)(e, [
              "children",
              "classes",
              "className",
              "collapsedHeight",
              "component",
              "in",
              "onEnter",
              "onEntered",
              "onEntering",
              "onExit",
              "onExiting",
              "style",
              "timeout",
            ]),
            x = Object(le.a)(),
            w = s.useRef(),
            j = s.useRef(null),
            O = s.useRef(),
            C = "number" === typeof i ? "".concat(i, "px") : i;
          s.useEffect(function () {
            return function () {
              clearTimeout(w.current);
            };
          }, []);
          return s.createElement(
            oe.a,
            Object(z.a)(
              {
                in: d,
                onEnter: function (e, t) {
                  (e.style.height = C), u && u(e, t);
                },
                onEntered: function (e, t) {
                  (e.style.height = "auto"), p && p(e, t);
                },
                onEntering: function (e, t) {
                  var n = j.current ? j.current.clientHeight : 0,
                    r = Object(se.a)(
                      { style: b, timeout: y },
                      { mode: "enter" }
                    ).duration;
                  if ("auto" === y) {
                    var a = x.transitions.getAutoHeightDuration(n);
                    (e.style.transitionDuration = "".concat(a, "ms")),
                      (O.current = a);
                  } else
                    e.style.transitionDuration =
                      "string" === typeof r ? r : "".concat(r, "ms");
                  (e.style.height = "".concat(n, "px")), f && f(e, t);
                },
                onExit: function (e) {
                  var t = j.current ? j.current.clientHeight : 0;
                  (e.style.height = "".concat(t, "px")), m && m(e);
                },
                onExiting: function (e) {
                  var t = j.current ? j.current.clientHeight : 0,
                    n = Object(se.a)({ style: b, timeout: y }, { mode: "exit" })
                      .duration;
                  if ("auto" === y) {
                    var r = x.transitions.getAutoHeightDuration(t);
                    (e.style.transitionDuration = "".concat(r, "ms")),
                      (O.current = r);
                  } else
                    e.style.transitionDuration =
                      "string" === typeof n ? n : "".concat(n, "ms");
                  (e.style.height = C), h && h(e);
                },
                addEndListener: function (e, t) {
                  "auto" === y && (w.current = setTimeout(t, O.current || 0));
                },
                timeout: "auto" === y ? null : y,
              },
              v
            ),
            function (e, o) {
              return s.createElement(
                c,
                Object(z.a)(
                  {
                    className: Object($.a)(
                      r.container,
                      a,
                      {
                        entered: r.entered,
                        exited: !d && "0px" === C && r.hidden,
                      }[e]
                    ),
                    style: Object(z.a)({ minHeight: C }, b),
                    ref: t,
                  },
                  o
                ),
                s.createElement(
                  "div",
                  { className: r.wrapper, ref: j },
                  s.createElement("div", { className: r.wrapperInner }, n)
                )
              );
            }
          );
        });
      ce.muiSupportAuto = !0;
      var de = Object(F.a)(
          function (e) {
            return {
              container: {
                height: 0,
                overflow: "hidden",
                transition: e.transitions.create("height"),
              },
              entered: { height: "auto", overflow: "visible" },
              hidden: { visibility: "hidden" },
              wrapper: { display: "flex" },
              wrapperInner: { width: "100%" },
            };
          },
          { name: "MuiCollapse" }
        )(ce),
        ue = n("kKAo");
      var pe = s.createContext({}),
        fe = n("yCxk"),
        me = s.forwardRef(function (e, t) {
          var n,
            r = e.children,
            a = e.classes,
            o = e.className,
            i = e.defaultExpanded,
            l = void 0 !== i && i,
            c = e.disabled,
            d = void 0 !== c && c,
            u = e.expanded,
            p = e.onChange,
            f = e.square,
            m = void 0 !== f && f,
            h = e.TransitionComponent,
            b = void 0 === h ? de : h,
            g = e.TransitionProps,
            y = Object(H.a)(e, [
              "children",
              "classes",
              "className",
              "defaultExpanded",
              "disabled",
              "expanded",
              "onChange",
              "square",
              "TransitionComponent",
              "TransitionProps",
            ]),
            v = Object(fe.a)({
              controlled: u,
              default: l,
              name: "ExpansionPanel",
            }),
            x = Object(ae.a)(v, 2),
            w = x[0],
            j = x[1],
            O = s.useCallback(
              function (e) {
                j(!w), p && p(e, !w);
              },
              [w, p, j]
            ),
            C = s.Children.toArray(r),
            R =
              ((n = C),
              Object(ee.a)(n) ||
                Object(te.a)(n) ||
                Object(ne.a)(n) ||
                Object(re.a)()),
            E = R[0],
            k = R.slice(1),
            N = s.useMemo(
              function () {
                return { expanded: w, disabled: d, toggle: O };
              },
              [w, d, O]
            );
          return s.createElement(
            ue.a,
            Object(z.a)(
              {
                className: Object($.a)(
                  a.root,
                  o,
                  w && a.expanded,
                  d && a.disabled,
                  !m && a.rounded
                ),
                ref: t,
                square: m,
              },
              y
            ),
            s.createElement(pe.Provider, { value: N }, E),
            s.createElement(
              b,
              Object(z.a)({ in: w, timeout: "auto" }, g),
              s.createElement(
                "div",
                {
                  "aria-labelledby": E.props.id,
                  id: E.props["aria-controls"],
                  role: "region",
                },
                k
              )
            )
          );
        }),
        he = Object(F.a)(
          function (e) {
            var t = { duration: e.transitions.duration.shortest };
            return {
              root: {
                position: "relative",
                transition: e.transitions.create(["margin"], t),
                "&:before": {
                  position: "absolute",
                  left: 0,
                  top: -1,
                  right: 0,
                  height: 1,
                  content: '""',
                  opacity: 1,
                  backgroundColor: e.palette.divider,
                  transition: e.transitions.create(
                    ["opacity", "background-color"],
                    t
                  ),
                },
                "&:first-child": { "&:before": { display: "none" } },
                "&$expanded": {
                  margin: "16px 0",
                  "&:first-child": { marginTop: 0 },
                  "&:last-child": { marginBottom: 0 },
                  "&:before": { opacity: 0 },
                },
                "&$expanded + &": { "&:before": { display: "none" } },
                "&$disabled": {
                  backgroundColor: e.palette.action.disabledBackground,
                },
              },
              rounded: {
                borderRadius: 0,
                "&:first-child": {
                  borderTopLeftRadius: e.shape.borderRadius,
                  borderTopRightRadius: e.shape.borderRadius,
                },
                "&:last-child": {
                  borderBottomLeftRadius: e.shape.borderRadius,
                  borderBottomRightRadius: e.shape.borderRadius,
                  "@supports (-ms-ime-align: auto)": {
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                  },
                },
              },
              expanded: {},
              disabled: {},
            };
          },
          { name: "MuiExpansionPanel" }
        )(me),
        be = s.forwardRef(function (e, t) {
          var n = e.edge,
            r = void 0 !== n && n,
            a = e.children,
            o = e.classes,
            i = e.className,
            l = e.color,
            c = void 0 === l ? "default" : l,
            d = e.disabled,
            u = void 0 !== d && d,
            p = e.disableFocusRipple,
            f = void 0 !== p && p,
            m = e.size,
            h = void 0 === m ? "medium" : m,
            b = Object(H.a)(e, [
              "edge",
              "children",
              "classes",
              "className",
              "color",
              "disabled",
              "disableFocusRipple",
              "size",
            ]);
          return s.createElement(
            G.a,
            Object(z.a)(
              {
                className: Object($.a)(
                  o.root,
                  i,
                  "default" !== c && o["color".concat(Object(K.a)(c))],
                  u && o.disabled,
                  "small" === h && o["size".concat(Object(K.a)(h))],
                  { start: o.edgeStart, end: o.edgeEnd }[r]
                ),
                centerRipple: !0,
                focusRipple: !f,
                disabled: u,
                ref: t,
              },
              b
            ),
            s.createElement("span", { className: o.label }, a)
          );
        }),
        ge = Object(F.a)(
          function (e) {
            return {
              root: {
                textAlign: "center",
                flex: "0 0 auto",
                fontSize: e.typography.pxToRem(24),
                padding: 12,
                borderRadius: "50%",
                overflow: "visible",
                color: e.palette.action.active,
                transition: e.transitions.create("background-color", {
                  duration: e.transitions.duration.shortest,
                }),
                "&:hover": {
                  backgroundColor: Object(W.c)(
                    e.palette.action.active,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
                "&$disabled": {
                  backgroundColor: "transparent",
                  color: e.palette.action.disabled,
                },
              },
              edgeStart: { marginLeft: -12, "$sizeSmall&": { marginLeft: -3 } },
              edgeEnd: { marginRight: -12, "$sizeSmall&": { marginRight: -3 } },
              colorInherit: { color: "inherit" },
              colorPrimary: {
                color: e.palette.primary.main,
                "&:hover": {
                  backgroundColor: Object(W.c)(
                    e.palette.primary.main,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
              colorSecondary: {
                color: e.palette.secondary.main,
                "&:hover": {
                  backgroundColor: Object(W.c)(
                    e.palette.secondary.main,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
              disabled: {},
              sizeSmall: { padding: 3, fontSize: e.typography.pxToRem(18) },
              label: {
                width: "100%",
                display: "flex",
                alignItems: "inherit",
                justifyContent: "inherit",
              },
            };
          },
          { name: "MuiIconButton" }
        )(be),
        ye = s.forwardRef(function (e, t) {
          var n = e.children,
            r = e.classes,
            a = e.className,
            o = e.expandIcon,
            i = e.IconButtonProps,
            l = e.onBlur,
            c = e.onClick,
            d = e.onFocusVisible,
            u = Object(H.a)(e, [
              "children",
              "classes",
              "className",
              "expandIcon",
              "IconButtonProps",
              "onBlur",
              "onClick",
              "onFocusVisible",
            ]),
            p = s.useState(!1),
            f = p[0],
            m = p[1],
            h = s.useContext(pe),
            b = h.disabled,
            g = void 0 !== b && b,
            y = h.expanded,
            v = h.toggle;
          return s.createElement(
            G.a,
            Object(z.a)(
              {
                focusRipple: !1,
                disableRipple: !0,
                disabled: g,
                component: "div",
                "aria-expanded": y,
                className: Object($.a)(
                  r.root,
                  a,
                  g && r.disabled,
                  y && r.expanded,
                  f && r.focused
                ),
                onFocusVisible: function (e) {
                  m(!0), d && d(e);
                },
                onBlur: function (e) {
                  m(!1), l && l(e);
                },
                onClick: function (e) {
                  v && v(e), c && c(e);
                },
                ref: t,
              },
              u
            ),
            s.createElement(
              "div",
              { className: Object($.a)(r.content, y && r.expanded) },
              n
            ),
            o &&
              s.createElement(
                ge,
                Object(z.a)(
                  {
                    className: Object($.a)(r.expandIcon, y && r.expanded),
                    edge: "end",
                    component: "div",
                    tabIndex: null,
                    role: null,
                    "aria-hidden": !0,
                  },
                  i
                ),
                o
              )
          );
        }),
        ve = Object(F.a)(
          function (e) {
            var t = { duration: e.transitions.duration.shortest };
            return {
              root: {
                display: "flex",
                minHeight: 48,
                transition: e.transitions.create(
                  ["min-height", "background-color"],
                  t
                ),
                padding: "0 24px 0 24px",
                "&:hover:not($disabled)": { cursor: "pointer" },
                "&$expanded": { minHeight: 64 },
                "&$focused": { backgroundColor: e.palette.grey[300] },
                "&$disabled": { opacity: 0.38 },
              },
              expanded: {},
              focused: {},
              disabled: {},
              content: {
                display: "flex",
                flexGrow: 1,
                transition: e.transitions.create(["margin"], t),
                margin: "12px 0",
                "&$expanded": { margin: "20px 0" },
              },
              expandIcon: {
                transform: "rotate(0deg)",
                transition: e.transitions.create("transform", t),
                "&:hover": { backgroundColor: "transparent" },
                "&$expanded": { transform: "rotate(180deg)" },
              },
            };
          },
          { name: "MuiExpansionPanelSummary" }
        )(ye),
        xe = s.forwardRef(function (e, t) {
          var n = e.classes,
            r = e.className,
            a = Object(H.a)(e, ["classes", "className"]);
          return s.createElement(
            "div",
            Object(z.a)({ className: Object($.a)(n.root, r), ref: t }, a)
          );
        }),
        we = Object(F.a)(
          { root: { display: "flex", padding: "8px 24px 24px" } },
          { name: "MuiExpansionPanelDetails" }
        )(xe),
        je = n("HR5l");
      function Oe(e, t) {
        var n = l.a.memo(
          l.a.forwardRef(function (t, n) {
            return l.a.createElement(je.a, Object(z.a)({ ref: n }, t), e);
          })
        );
        return (n.muiName = je.a.muiName), n;
      }
      var Ce = Oe(
          l.a.createElement("path", {
            d:
              "M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z",
          })
        ),
        Re = Oe(
          l.a.createElement("path", {
            d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z",
          })
        ),
        Ee = Oe(
          l.a.createElement("path", {
            d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z",
          })
        ),
        ke = n("h7RS"),
        Ne = n("gd/W"),
        Se = Oe(
          l.a.createElement("path", {
            transform: "scale(1.2, 1.2)",
            d:
              "M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z",
          })
        ),
        _e = n("1AYd"),
        Ie = n("cVXz"),
        Te = n("rePB"),
        Le = n("ucBr"),
        Ae = n("MquD"),
        De = n("i8i4"),
        Pe = "undefined" === typeof window ? s.useEffect : s.useLayoutEffect,
        Me = s.forwardRef(function (e, t) {
          var n = e.alignItems,
            r = void 0 === n ? "center" : n,
            a = e.autoFocus,
            o = void 0 !== a && a,
            i = e.button,
            l = void 0 !== i && i,
            c = e.children,
            d = e.classes,
            u = e.className,
            p = e.component,
            f = e.ContainerComponent,
            m = void 0 === f ? "li" : f,
            h = e.ContainerProps,
            b = (h = void 0 === h ? {} : h).className,
            g = Object(H.a)(h, ["className"]),
            y = e.dense,
            v = void 0 !== y && y,
            x = e.disabled,
            w = void 0 !== x && x,
            j = e.disableGutters,
            O = void 0 !== j && j,
            C = e.divider,
            R = void 0 !== C && C,
            E = e.focusVisibleClassName,
            k = e.selected,
            N = void 0 !== k && k,
            S = Object(H.a)(e, [
              "alignItems",
              "autoFocus",
              "button",
              "children",
              "classes",
              "className",
              "component",
              "ContainerComponent",
              "ContainerProps",
              "dense",
              "disabled",
              "disableGutters",
              "divider",
              "focusVisibleClassName",
              "selected",
            ]),
            _ = s.useContext(Ae.a),
            I = { dense: v || _.dense || !1, alignItems: r },
            T = s.useRef(null);
          Pe(
            function () {
              o && T.current && T.current.focus();
            },
            [o]
          );
          var L = s.Children.toArray(c),
            A =
              L.length &&
              Object(Le.a)(L[L.length - 1], ["ListItemSecondaryAction"]),
            D = s.useCallback(function (e) {
              T.current = De.findDOMNode(e);
            }, []),
            P = Object(U.a)(D, t),
            M = Object(z.a)(
              {
                className: Object($.a)(
                  d.root,
                  u,
                  I.dense && d.dense,
                  !O && d.gutters,
                  R && d.divider,
                  w && d.disabled,
                  l && d.button,
                  "center" !== r && d.alignItemsFlexStart,
                  A && d.secondaryAction,
                  N && d.selected
                ),
                disabled: w,
              },
              S
            ),
            q = p || "li";
          return (
            l &&
              ((M.component = p || "div"),
              (M.focusVisibleClassName = Object($.a)(d.focusVisible, E)),
              (q = G.a)),
            A
              ? ((q = M.component || p ? q : "div"),
                "li" === m &&
                  ("li" === q
                    ? (q = "div")
                    : "li" === M.component && (M.component = "div")),
                s.createElement(
                  Ae.a.Provider,
                  { value: I },
                  s.createElement(
                    m,
                    Object(z.a)(
                      { className: Object($.a)(d.container, b), ref: P },
                      g
                    ),
                    s.createElement(q, M, L),
                    L.pop()
                  )
                ))
              : s.createElement(
                  Ae.a.Provider,
                  { value: I },
                  s.createElement(q, Object(z.a)({ ref: P }, M), L)
                )
          );
        }),
        qe = Object(F.a)(
          function (e) {
            return {
              root: {
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                position: "relative",
                textDecoration: "none",
                width: "100%",
                boxSizing: "border-box",
                textAlign: "left",
                paddingTop: 8,
                paddingBottom: 8,
                "&$focusVisible": {
                  backgroundColor: e.palette.action.selected,
                },
                "&$selected, &$selected:hover": {
                  backgroundColor: e.palette.action.selected,
                },
                "&$disabled": { opacity: 0.5 },
              },
              container: { position: "relative" },
              focusVisible: {},
              dense: { paddingTop: 4, paddingBottom: 4 },
              alignItemsFlexStart: { alignItems: "flex-start" },
              disabled: {},
              divider: {
                borderBottom: "1px solid ".concat(e.palette.divider),
                backgroundClip: "padding-box",
              },
              gutters: { paddingLeft: 16, paddingRight: 16 },
              button: {
                transition: e.transitions.create("background-color", {
                  duration: e.transitions.duration.shortest,
                }),
                "&:hover": {
                  textDecoration: "none",
                  backgroundColor: e.palette.action.hover,
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
              secondaryAction: { paddingRight: 48 },
              selected: {},
            };
          },
          { name: "MuiListItem" }
        )(Me),
        ze = s.forwardRef(function (e, t) {
          var n,
            r = e.classes,
            a = e.className,
            o = e.component,
            i = void 0 === o ? "li" : o,
            l = e.disableGutters,
            c = void 0 !== l && l,
            d = e.role,
            u = void 0 === d ? "menuitem" : d,
            p = e.selected,
            f = e.tabIndex,
            m = Object(H.a)(e, [
              "classes",
              "className",
              "component",
              "disableGutters",
              "role",
              "selected",
              "tabIndex",
            ]);
          return (
            e.disabled || (n = void 0 !== f ? f : -1),
            s.createElement(
              qe,
              Object(z.a)(
                {
                  button: !0,
                  role: u,
                  tabIndex: n,
                  component: i,
                  selected: p,
                  disableGutters: c,
                  classes: { dense: r.dense },
                  className: Object($.a)(
                    r.root,
                    a,
                    p && r.selected,
                    !c && r.gutters
                  ),
                  ref: t,
                },
                m
              )
            )
          );
        }),
        He = Object(F.a)(
          function (e) {
            return {
              root: Object(z.a)(
                {},
                e.typography.body1,
                Object(Te.a)(
                  {
                    minHeight: 48,
                    paddingTop: 6,
                    paddingBottom: 6,
                    boxSizing: "border-box",
                    width: "auto",
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  },
                  e.breakpoints.up("sm"),
                  { minHeight: "auto" }
                )
              ),
              gutters: {},
              selected: {},
              dense: Object(z.a)({}, e.typography.body2, { minHeight: "auto" }),
            };
          },
          { name: "MuiMenuItem" }
        )(ze),
        $e = l.a.createElement,
        Ve = function () {
          var e = Object(s.useState)("NJ"),
            t = e[0],
            n = e[1];
          return $e(
            "div",
            { style: { width: "500px", padding: "20px" } },
            $e("h1", null, "Settings"),
            $e(_e.a, null, "Select state"),
            $e(
              Ie.a,
              {
                labelId: "demo-simple-select-label",
                id: "demo-simple-select",
                value: t,
                onChange: function (e) {
                  return n(e.target.value);
                },
              },
              $e(He, { value: "AL" }, "Alabama"),
              $e(He, { value: "AK" }, "Alaska"),
              $e(He, { value: "AZ" }, "Arizona"),
              $e(He, { value: "AR" }, "Arkansas"),
              $e(He, { value: "CA" }, "California"),
              $e(He, { value: "CO" }, "Colorado"),
              $e(He, { value: "CT" }, "Connecticut"),
              $e(He, { value: "DE" }, "Delaware"),
              $e(He, { value: "FL" }, "Florida"),
              $e(He, { value: "GA" }, "Georgia"),
              $e(He, { value: "HI" }, "Hawaii"),
              $e(He, { value: "ID" }, "Idaho"),
              $e(He, { value: "IL" }, "Illinois"),
              $e(He, { value: "IN" }, "Indiana"),
              $e(He, { value: "IA" }, "Iowa"),
              $e(He, { value: "KS" }, "Kansas"),
              $e(He, { value: "KY" }, "Kentucky"),
              $e(He, { value: "LA" }, "Louisiana"),
              $e(He, { value: "ME" }, "Maine"),
              $e(He, { value: "MD" }, "Maryland"),
              $e(He, { value: "MA" }, "Massachusetts"),
              $e(He, { value: "MI" }, "Michigan"),
              $e(He, { value: "MN" }, "Minnesota"),
              $e(He, { value: "MS" }, "Mississippi"),
              $e(He, { value: "MO" }, "Missouri"),
              $e(He, { value: "MT" }, "Montana"),
              $e(He, { value: "NE" }, "Nebraska"),
              $e(He, { value: "NV" }, "Nevada"),
              $e(He, { value: "NH" }, "New Hampshire"),
              $e(He, { value: "NJ" }, "New Jersey"),
              $e(He, { value: "NM" }, "New Mexico"),
              $e(He, { value: "NY" }, "New York"),
              $e(He, { value: "NC" }, "North Carolina"),
              $e(He, { value: "ND" }, "North Dakota"),
              $e(He, { value: "OH" }, "Ohio"),
              $e(He, { value: "OK" }, "Oklahoma"),
              $e(He, { value: "OR" }, "Oregon"),
              $e(He, { value: "PA" }, "Pennsylvania"),
              $e(He, { value: "RI" }, "Rhode Island"),
              $e(He, { value: "SC" }, "South Carolina"),
              $e(He, { value: "SD" }, "South Dakota"),
              $e(He, { value: "TN" }, "Tennessee"),
              $e(He, { value: "TX" }, "Texas"),
              $e(He, { value: "UT" }, "Utah"),
              $e(He, { value: "VT" }, "Vermont"),
              $e(He, { value: "VA" }, "Virginia"),
              $e(He, { value: "WA" }, "Washington"),
              $e(He, { value: "WV" }, "West Virginia"),
              $e(He, { value: "WI" }, "Wisconsin"),
              $e(He, { value: "WY" }, "Wyoming")
            )
          );
        },
        Be = l.a.createElement,
        Fe = function () {
          var e = Object(s.useState)(null),
            t = e[0],
            n = e[1];
          return Be(
            "div",
            null,
            Be(
              ge,
              {
                onClick: function (e) {
                  n(e.currentTarget);
                },
              },
              Be(Se, null)
            ),
            Be(
              Ne.a,
              {
                keepMounted: !0,
                anchorEl: t,
                open: Boolean(t),
                onClose: function () {
                  n(null);
                },
              },
              Be(Ve, null)
            )
          );
        },
        We = l.a.createElement,
        Ue = function (e) {
          var t, r;
          return a.a.async(
            function (o) {
              for (;;)
                switch ((o.prev = o.next)) {
                  case 0:
                    return (o.next = 2), a.a.awrap(q()(e));
                  case 2:
                    return (
                      (t = o.sent),
                      (o.next = 5),
                      a.a.awrap(n.e(6).then(n.bind(null, "V1kZ")))
                    );
                  case 5:
                    return (
                      (r = o.sent),
                      (o.t0 = JSON),
                      (o.t1 = r.create_network_protocol_engine()),
                      (o.next = 10),
                      a.a.awrap(t.text())
                    );
                  case 10:
                    return (
                      (o.t2 = o.sent),
                      (o.t3 = o.t1.decode_server_data.call(o.t1, o.t2)),
                      o.abrupt("return", o.t0.parse.call(o.t0, o.t3))
                    );
                  case 13:
                  case "end":
                    return o.stop();
                }
            },
            null,
            null,
            null,
            Promise
          );
        };
      t.default = function (e) {
        var t,
          n = e.rs;
        (t = n.connect_api()), P(t, Ue, { refreshInterval: 100 });
        var r = n.initialize_tensorflow(4.32, 0.2431, 2.442);
        n.set_tensorflow_ml_backend(r);
        var a = Object(s.useRef)(n.create_processor_nlp()).current;
        console.log(a);
        var o = JSON.parse(a.summarize_tos(""));
        return We(
          ke.a,
          null,
          We(
            "div",
            { style: { display: "flex" }, className: "jsx-881206471 root" },
            We(
              "div",
              { className: "jsx-881206471" },
              We(
                "p",
                { style: { display: "flex" }, className: "jsx-881206471" },
                We(
                  "div",
                  { style: { margin: "auto 0" }, className: "jsx-881206471" },
                  We(Y, {
                    clickable: !0,
                    avatar: We(Q, null, We(Ce, null)),
                    label: n.get_logged_in_user(),
                    color: "primary",
                    deleteIcon: We(Re, null),
                  })
                ),
                We("div", {
                  style: { margin: "auto" },
                  className: "jsx-881206471",
                }),
                We(Fe, null)
              ),
              We(
                "h1",
                { className: "jsx-881206471" },
                "Legal analysis results"
              ),
              We(
                "h2",
                { className: "jsx-881206471" },
                "Legal score:",
                " ",
                We(
                  "span",
                  { style: { color: "orange" }, className: "jsx-881206471" },
                  We("b", { className: "jsx-881206471" }, "B-")
                )
              ),
              We("h2", { className: "jsx-881206471" }, "Your rights"),
              We(
                "ol",
                { className: "jsx-881206471" },
                o.good.map(function (e) {
                  return We(
                    he,
                    {
                      style: {
                        backgroundColor: "hsl(120, 100%, ".concat(
                          60 - e.thing.length / 3,
                          "%)"
                        ),
                      },
                    },
                    We(ve, { expandIcon: We(Ee, null) }, e.thing),
                    We(
                      we,
                      null,
                      We(
                        "p",
                        {
                          style: { whiteSpace: "pre-line" },
                          className: "jsx-881206471",
                        },
                        e.description && e.description.trim()
                      )
                    )
                  );
                })
              ),
              We(
                "h2",
                { className: "jsx-881206471" },
                "Limitations of service"
              ),
              We(
                "ol",
                { className: "jsx-881206471" },
                o.bad.map(function (e) {
                  return We(
                    he,
                    {
                      style: {
                        backgroundColor: "hsl(10, 100%, ".concat(
                          80 - e.thing.length / 3,
                          "%)"
                        ),
                      },
                    },
                    We(ve, { expandIcon: We(Ee, null) }, e.thing),
                    We(
                      we,
                      null,
                      We(
                        "p",
                        {
                          style: { whiteSpace: "pre-line" },
                          className: "jsx-881206471",
                        },
                        e.description && e.description.trim()
                      )
                    )
                  );
                })
              ),
              We(
                "h2",
                { className: "jsx-881206471" },
                "Relevant laws and regulations"
              ),
              We(
                "ol",
                { className: "jsx-881206471" },
                o.law.map(function (e) {
                  return We(
                    "div",
                    { className: "jsx-881206471" },
                    We(
                      ue.a,
                      null,
                      We(
                        "div",
                        {
                          style: { padding: "20px" },
                          className: "jsx-881206471",
                        },
                        We("h3", { className: "jsx-881206471" }, e.name),
                        We(
                          "p",
                          { className: "jsx-881206471" },
                          "Source: ",
                          e.location
                        ),
                        We("p", { className: "jsx-881206471" }, e.description),
                        We("p", { className: "jsx-881206471" }, e.implication)
                      )
                    )
                  );
                })
              )
            )
          ),
          We(i.a, { id: "881206471" }, [
            ".item.jsx-881206471{padding:10px;margin:10px;box-shadow:3px 3px 13px 0 rgba(0,0,0,0.3);border-radius:5px;}",
            ".chips.jsx-881206471>*.jsx-881206471{margin-right:5px;}",
          ])
        );
      };
    },
    miPH: function (e, t, n) {
      "use strict";
      var r = Array.isArray,
        a = Object.keys,
        o = Object.prototype.hasOwnProperty;
      e.exports = function e(t, n) {
        if (t === n) return !0;
        if (t && n && "object" == typeof t && "object" == typeof n) {
          var i,
            s,
            l,
            c = r(t),
            d = r(n);
          if (c && d) {
            if ((s = t.length) != n.length) return !1;
            for (i = s; 0 !== i--; ) if (!e(t[i], n[i])) return !1;
            return !0;
          }
          if (c != d) return !1;
          var u = t instanceof Date,
            p = n instanceof Date;
          if (u != p) return !1;
          if (u && p) return t.getTime() == n.getTime();
          var f = t instanceof RegExp,
            m = n instanceof RegExp;
          if (f != m) return !1;
          if (f && m) return t.toString() == n.toString();
          var h = a(t);
          if ((s = h.length) !== a(n).length) return !1;
          for (i = s; 0 !== i--; ) if (!o.call(n, h[i])) return !1;
          for (i = s; 0 !== i--; ) if (!e(t[(l = h[i])], n[l])) return !1;
          return !0;
        }
        return t !== t && n !== n;
      };
    },
    o0o1: function (e, t, n) {
      e.exports = n("ls82");
    },
    qM6v: function (e, t, n) {
      (function (t) {
        var n;
        (n = function () {
          "use strict";
          const e = {},
            n = (e) =>
              "undefined" !== typeof self && self && e in self
                ? self
                : "undefined" !== typeof window && window && e in window
                ? window
                : "undefined" !== typeof t && t && e in t
                ? t
                : "undefined" !== typeof globalThis && globalThis
                ? globalThis
                : void 0,
            r = [
              "Headers",
              "Request",
              "Response",
              "ReadableStream",
              "fetch",
              "AbortController",
              "FormData",
            ];
          for (const t of r)
            Object.defineProperty(e, t, {
              get() {
                const e = n(t),
                  r = e && e[t];
                return "function" === typeof r ? r.bind(e) : r;
              },
            });
          const a = (e) => null !== e && "object" === typeof e,
            o = "function" === typeof e.AbortController,
            i = "function" === typeof e.ReadableStream,
            s = "function" === typeof e.FormData,
            l = (...e) => {
              let t = {};
              for (const n of e)
                if (Array.isArray(n))
                  Array.isArray(t) || (t = []), (t = [...t, ...n]);
                else if (a(n))
                  for (let [e, r] of Object.entries(n))
                    a(r) && Reflect.has(t, e) && (r = l(t[e], r)),
                      (t = { ...t, [e]: r });
              return t;
            },
            c = ["get", "post", "put", "patch", "head", "delete"],
            d = {
              json: "application/json",
              text: "text/*",
              formData: "multipart/form-data",
              arrayBuffer: "*/*",
              blob: "*/*",
            },
            u = [413, 429, 503],
            p = Symbol("stop");
          class f extends Error {
            constructor(e) {
              super(e.statusText),
                (this.name = "HTTPError"),
                (this.response = e);
            }
          }
          class m extends Error {
            constructor() {
              super("Request timed out"), (this.name = "TimeoutError");
            }
          }
          const h = (e) => new Promise((t) => setTimeout(t, e)),
            b = (e, t, n) =>
              new Promise((r, a) => {
                const o = setTimeout(() => {
                  n && n.abort(), a(new m());
                }, t);
                e.then(r)
                  .catch(a)
                  .then(() => {
                    clearTimeout(o);
                  });
              }),
            g = (e) => (c.includes(e) ? e.toUpperCase() : e),
            y = {
              limit: 2,
              methods: ["get", "put", "head", "delete", "options", "trace"],
              statusCodes: [408, 413, 429, 500, 502, 503, 504],
              afterStatusCodes: u,
            },
            v = (e = {}) => {
              if ("number" === typeof e) return { ...y, limit: e };
              if (e.methods && !Array.isArray(e.methods))
                throw new Error("retry.methods must be an array");
              if (e.statusCodes && !Array.isArray(e.statusCodes))
                throw new Error("retry.statusCodes must be an array");
              return { ...y, ...e, afterStatusCodes: u };
            },
            x = 2147483647;
          class w {
            constructor(t, n = {}) {
              if (
                ((this._retryCount = 0),
                (this._input = t),
                (this._options = {
                  credentials: this._input.credentials || "same-origin",
                  ...n,
                  hooks: l(
                    { beforeRequest: [], beforeRetry: [], afterResponse: [] },
                    n.hooks
                  ),
                  method: g(n.method || this._input.method),
                  prefixUrl: String(n.prefixUrl || ""),
                  retry: v(n.retry),
                  throwHttpErrors: !1 !== n.throwHttpErrors,
                  timeout: "undefined" === typeof n.timeout ? 1e4 : n.timeout,
                }),
                "string" !== typeof this._input &&
                  !(
                    this._input instanceof URL ||
                    this._input instanceof e.Request
                  ))
              )
                throw new TypeError(
                  "`input` must be a string, URL, or Request"
                );
              if (this._options.prefixUrl && "string" === typeof this._input) {
                if (this._input.startsWith("/"))
                  throw new Error(
                    "`input` must not begin with a slash when using `prefixUrl`"
                  );
                this._options.prefixUrl.endsWith("/") ||
                  (this._options.prefixUrl += "/"),
                  (this._input = this._options.prefixUrl + this._input);
              }
              if (
                (o &&
                  ((this.abortController = new e.AbortController()),
                  this._options.signal &&
                    this._options.signal.addEventListener("abort", () => {
                      this.abortController.abort();
                    }),
                  (this._options.signal = this.abortController.signal)),
                (this.request = new e.Request(this._input, this._options)),
                this._options.searchParams)
              ) {
                const t = new URL(this.request.url);
                (t.search = new URLSearchParams(this._options.searchParams)),
                  !(
                    (s && this._options.body instanceof e.FormData) ||
                    this._options.body instanceof URLSearchParams
                  ) ||
                    (this._options.headers &&
                      this._options.headers["content-type"]) ||
                    this.request.headers.delete("content-type"),
                  (this.request = new e.Request(
                    new e.Request(t, this.request),
                    this._options
                  ));
              }
              void 0 !== this._options.json &&
                ((this._options.body = JSON.stringify(this._options.json)),
                this.request.headers.set("content-type", "application/json"),
                (this.request = new e.Request(this.request, {
                  body: this._options.body,
                })));
              const r = async () => {
                  if (this._options.timeout > x)
                    throw new RangeError(
                      `The \`timeout\` option cannot be greater than ${x}`
                    );
                  await h(1);
                  let t = await this._fetch();
                  for (const n of this._options.hooks.afterResponse) {
                    const r = await n(this.request, this._options, t.clone());
                    r instanceof e.Response && (t = r);
                  }
                  if (!t.ok && this._options.throwHttpErrors) throw new f(t);
                  if (this._options.onDownloadProgress) {
                    if ("function" !== typeof this._options.onDownloadProgress)
                      throw new TypeError(
                        "The `onDownloadProgress` option must be a function"
                      );
                    if (!i)
                      throw new Error(
                        "Streams are not supported in your environment. `ReadableStream` is missing."
                      );
                    return this._stream(
                      t.clone(),
                      this._options.onDownloadProgress
                    );
                  }
                  return t;
                },
                a = this._options.retry.methods.includes(
                  this.request.method.toLowerCase()
                )
                  ? this._retry(r)
                  : r();
              for (const [e, o] of Object.entries(d))
                a[e] = async () => {
                  this.request.headers.set(
                    "accept",
                    this.request.headers.get("accept") || o
                  );
                  const t = (await a).clone();
                  return "json" === e && 204 === t.status ? "" : t[e]();
                };
              return a;
            }
            _calculateRetryDelay(e) {
              if (
                (this._retryCount++,
                this._retryCount < this._options.retry.limit &&
                  !(e instanceof m))
              ) {
                if (e instanceof f) {
                  if (
                    !this._options.retry.statusCodes.includes(e.response.status)
                  )
                    return 0;
                  const t = e.response.headers.get("Retry-After");
                  if (
                    t &&
                    this._options.retry.afterStatusCodes.includes(
                      e.response.status
                    )
                  ) {
                    let e = Number(t);
                    return (
                      Number.isNaN(e)
                        ? (e = Date.parse(t) - Date.now())
                        : (e *= 1e3),
                      "undefined" !==
                        typeof this._options.retry.maxRetryAfter &&
                      e > this._options.retry.maxRetryAfter
                        ? 0
                        : e
                    );
                  }
                  if (413 === e.response.status) return 0;
                }
                return 0.3 * 2 ** (this._retryCount - 1) * 1e3;
              }
              return 0;
            }
            async _retry(e) {
              try {
                return await e();
              } catch (t) {
                const n = Math.min(this._calculateRetryDelay(t), x);
                if (0 !== n && this._retryCount > 0) {
                  await h(n);
                  for (const e of this._options.hooks.beforeRetry)
                    if (
                      (await e({
                        request: this.request,
                        options: this._options,
                        error: t,
                        response: t.response.clone(),
                        retryCount: this._retryCount,
                      })) === p
                    )
                      return;
                  return this._retry(e);
                }
                if (this._options.throwHttpErrors) throw t;
              }
            }
            async _fetch() {
              for (const e of this._options.hooks.beforeRequest) {
                const t = await e(this.request, this._options);
                if (t instanceof Request) {
                  this.request = t;
                  break;
                }
                if (t instanceof Response) return t;
              }
              return !1 === this._options.timeout
                ? e.fetch(this.request.clone())
                : b(
                    e.fetch(this.request.clone()),
                    this._options.timeout,
                    this.abortController
                  );
            }
            _stream(t, n) {
              const r = Number(t.headers.get("content-length")) || 0;
              let a = 0;
              return new e.Response(
                new e.ReadableStream({
                  start(e) {
                    const o = t.body.getReader();
                    n &&
                      n(
                        { percent: 0, transferredBytes: 0, totalBytes: r },
                        new Uint8Array()
                      ),
                      (async function t() {
                        const { done: i, value: s } = await o.read();
                        i
                          ? e.close()
                          : (n &&
                              ((a += s.byteLength),
                              n(
                                {
                                  percent: 0 === r ? 0 : a / r,
                                  transferredBytes: a,
                                  totalBytes: r,
                                },
                                s
                              )),
                            e.enqueue(s),
                            t());
                      })();
                  },
                })
              );
            }
          }
          const j = (...e) => {
              for (const t of e)
                if ((!a(t) || Array.isArray(t)) && "undefined" !== typeof t)
                  throw new TypeError(
                    "The `options` argument must be an object"
                  );
              return l({}, ...e);
            },
            O = (e) => {
              const t = (t, n) => new w(t, j(e, n));
              for (const n of c)
                t[n] = (t, r) => new w(t, j(e, r, { method: n }));
              return (
                (t.HTTPError = f),
                (t.TimeoutError = m),
                (t.create = (e) => O(j(e))),
                (t.extend = (t) => O(j(e, t))),
                (t.stop = p),
                t
              );
            };
          return O();
        }),
          (e.exports = n());
      }.call(this, n("yLpj")));
    },
    qdfa: function (e, t, n) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/results",
        function () {
          return n("/uW/");
        },
      ]);
    },
    yLpj: function (e, t) {
      var n;
      n = (function () {
        return this;
      })();
      try {
        n = n || new Function("return this")();
      } catch (r) {
        "object" === typeof window && (n = window);
      }
      e.exports = n;
    },
  },
  [["qdfa", 0, 2, 1, 4, 5]],
]);
