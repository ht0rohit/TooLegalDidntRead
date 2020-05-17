(window.webpackJsonp = window.webpackJsonp || []).push([
  [10],
  {
    "48fX": function (e, t, o) {
      var r = o("qhzo");
      e.exports = function (e, t) {
        if ("function" !== typeof t && null !== t)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (e.prototype = Object.create(t && t.prototype, {
          constructor: { value: e, writable: !0, configurable: !0 },
        })),
          t && r(e, t);
      };
    },
    H0SL: function (e, t, o) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return o("cMU6");
        },
      ]);
    },
    T0f4: function (e, t) {
      function o(t) {
        return (
          (e.exports = o = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          o(t)
        );
      }
      e.exports = o;
    },
    YFqc: function (e, t, o) {
      e.exports = o("cTJO");
    },
    cMU6: function (e, t, o) {
      "use strict";
      o.r(t);
      var r = o("q1tI"),
        a = o.n(r),
        n = o("wx14"),
        i = o("Ff2n"),
        l = (o("17x9"), o("iuhU")),
        c = o("pdwK"),
        d = o("TLZQ"),
        s = o("KmP9"),
        p = o("1AYd"),
        u = o("ByqB"),
        f = o("H2TA"),
        h = o("NqtD"),
        b = o("ucBr"),
        m = o("4hqb"),
        v = r.forwardRef(function (e, t) {
          var o = e.children,
            a = e.classes,
            c = e.className,
            d = e.color,
            s = void 0 === d ? "primary" : d,
            p = e.component,
            f = void 0 === p ? "div" : p,
            v = e.disabled,
            g = void 0 !== v && v,
            y = e.error,
            x = void 0 !== y && y,
            O = e.fullWidth,
            S = void 0 !== O && O,
            w = e.hiddenLabel,
            j = void 0 !== w && w,
            C = e.margin,
            k = void 0 === C ? "none" : C,
            E = e.required,
            z = void 0 !== E && E,
            R = e.size,
            T = e.variant,
            L = void 0 === T ? "standard" : T,
            P = Object(i.a)(e, [
              "children",
              "classes",
              "className",
              "color",
              "component",
              "disabled",
              "error",
              "fullWidth",
              "hiddenLabel",
              "margin",
              "required",
              "size",
              "variant",
            ]),
            N = r.useState(function () {
              var e = !1;
              return (
                o &&
                  r.Children.forEach(o, function (t) {
                    if (Object(b.a)(t, ["Input", "Select"])) {
                      var o = Object(b.a)(t, ["Select"]) ? t.props.input : t;
                      o && Object(u.a)(o.props) && (e = !0);
                    }
                  }),
                e
              );
            }),
            I = N[0],
            q = N[1],
            F = r.useState(function () {
              var e = !1;
              return (
                o &&
                  r.Children.forEach(o, function (t) {
                    Object(b.a)(t, ["Input", "Select"]) &&
                      Object(u.b)(t.props, !0) &&
                      (e = !0);
                  }),
                e
              );
            }),
            W = F[0],
            M = F[1],
            B = r.useState(!1),
            _ = B[0],
            V = B[1];
          g && _ && V(!1);
          var $ = r.useCallback(function () {
              M(!0);
            }, []),
            U = {
              adornedStart: I,
              setAdornedStart: q,
              color: s,
              disabled: g,
              error: x,
              filled: W,
              focused: _,
              fullWidth: S,
              hiddenLabel: j,
              margin: ("small" === R ? "dense" : void 0) || k,
              onBlur: function () {
                V(!1);
              },
              onEmpty: r.useCallback(function () {
                M(!1);
              }, []),
              onFilled: $,
              onFocus: function () {
                V(!0);
              },
              registerEffect: void 0,
              required: z,
              variant: L,
            };
          return r.createElement(
            m.a.Provider,
            { value: U },
            r.createElement(
              f,
              Object(n.a)(
                {
                  className: Object(l.a)(
                    a.root,
                    c,
                    "none" !== k && a["margin".concat(Object(h.a)(k))],
                    S && a.fullWidth
                  ),
                  ref: t,
                },
                P
              ),
              o
            )
          );
        }),
        g = Object(f.a)(
          {
            root: {
              display: "inline-flex",
              flexDirection: "column",
              position: "relative",
              minWidth: 0,
              padding: 0,
              margin: 0,
              border: 0,
              verticalAlign: "top",
            },
            marginNormal: { marginTop: 16, marginBottom: 8 },
            marginDense: { marginTop: 8, marginBottom: 4 },
            fullWidth: { width: "100%" },
          },
          { name: "MuiFormControl" }
        )(v),
        y = o("28cb"),
        x = o("EHdT"),
        O = r.forwardRef(function (e, t) {
          var o = e.children,
            a = e.classes,
            c = e.className,
            d = e.component,
            s = void 0 === d ? "p" : d,
            p =
              (e.disabled,
              e.error,
              e.filled,
              e.focused,
              e.margin,
              e.required,
              e.variant,
              Object(i.a)(e, [
                "children",
                "classes",
                "className",
                "component",
                "disabled",
                "error",
                "filled",
                "focused",
                "margin",
                "required",
                "variant",
              ])),
            u = Object(x.a)(),
            f = Object(y.a)({
              props: e,
              muiFormControl: u,
              states: [
                "variant",
                "margin",
                "disabled",
                "error",
                "filled",
                "focused",
                "required",
              ],
            });
          return r.createElement(
            s,
            Object(n.a)(
              {
                className: Object(l.a)(
                  a.root,
                  ("filled" === f.variant || "outlined" === f.variant) &&
                    a.contained,
                  c,
                  f.disabled && a.disabled,
                  f.error && a.error,
                  f.filled && a.filled,
                  f.focused && a.focused,
                  f.required && a.required,
                  "dense" === f.margin && a.marginDense
                ),
                ref: t,
              },
              p
            ),
            " " === o
              ? r.createElement("span", {
                  dangerouslySetInnerHTML: { __html: "&#8203;" },
                })
              : o
          );
        }),
        S = Object(f.a)(
          function (e) {
            return {
              root: Object(n.a)(
                { color: e.palette.text.secondary },
                e.typography.caption,
                {
                  textAlign: "left",
                  marginTop: 3,
                  margin: 0,
                  "&$disabled": { color: e.palette.text.disabled },
                  "&$error": { color: e.palette.error.main },
                }
              ),
              error: {},
              disabled: {},
              marginDense: { marginTop: 4 },
              contained: { marginLeft: 14, marginRight: 14 },
              focused: {},
              filled: {},
              required: {},
            };
          },
          { name: "MuiFormHelperText" }
        )(O),
        w = o("cVXz"),
        j = { standard: c.a, filled: d.a, outlined: s.a },
        C = r.forwardRef(function (e, t) {
          var o = e.autoComplete,
            a = e.autoFocus,
            c = void 0 !== a && a,
            d = e.children,
            s = e.classes,
            u = e.className,
            f = e.color,
            h = void 0 === f ? "primary" : f,
            b = e.defaultValue,
            m = e.disabled,
            v = void 0 !== m && m,
            y = e.error,
            x = void 0 !== y && y,
            O = e.FormHelperTextProps,
            C = e.fullWidth,
            k = void 0 !== C && C,
            E = e.helperText,
            z = e.hiddenLabel,
            R = e.id,
            T = e.InputLabelProps,
            L = e.inputProps,
            P = e.InputProps,
            N = e.inputRef,
            I = e.label,
            q = e.multiline,
            F = void 0 !== q && q,
            W = e.name,
            M = e.onBlur,
            B = e.onChange,
            _ = e.onFocus,
            V = e.placeholder,
            $ = e.required,
            U = void 0 !== $ && $,
            D = e.rows,
            H = e.rowsMax,
            A = e.select,
            X = void 0 !== A && A,
            K = e.SelectProps,
            J = e.type,
            Y = e.value,
            Q = e.variant,
            Z = void 0 === Q ? "standard" : Q,
            G = Object(i.a)(e, [
              "autoComplete",
              "autoFocus",
              "children",
              "classes",
              "className",
              "color",
              "defaultValue",
              "disabled",
              "error",
              "FormHelperTextProps",
              "fullWidth",
              "helperText",
              "hiddenLabel",
              "id",
              "InputLabelProps",
              "inputProps",
              "InputProps",
              "inputRef",
              "label",
              "multiline",
              "name",
              "onBlur",
              "onChange",
              "onFocus",
              "placeholder",
              "required",
              "rows",
              "rowsMax",
              "select",
              "SelectProps",
              "type",
              "value",
              "variant",
            ]);
          var ee = {};
          "outlined" === Z &&
            (T && "undefined" !== typeof T.shrink && (ee.notched = T.shrink),
            I &&
              (ee.label = r.createElement(r.Fragment, null, I, U && "\xa0*"))),
            X &&
              ((K && K.native) || (ee.id = void 0),
              (ee["aria-describedby"] = void 0));
          var te = E && R ? "".concat(R, "-helper-text") : void 0,
            oe = I && R ? "".concat(R, "-label") : void 0,
            re = j[Z],
            ae = r.createElement(
              re,
              Object(n.a)(
                {
                  "aria-describedby": te,
                  autoComplete: o,
                  autoFocus: c,
                  defaultValue: b,
                  fullWidth: k,
                  multiline: F,
                  name: W,
                  rows: D,
                  rowsMax: H,
                  type: J,
                  value: Y,
                  id: R,
                  inputRef: N,
                  onBlur: M,
                  onChange: B,
                  onFocus: _,
                  placeholder: V,
                  inputProps: L,
                },
                ee,
                P
              )
            );
          return r.createElement(
            g,
            Object(n.a)(
              {
                className: Object(l.a)(s.root, u),
                disabled: v,
                error: x,
                fullWidth: k,
                hiddenLabel: z,
                ref: t,
                required: U,
                color: h,
                variant: Z,
              },
              G
            ),
            I &&
              r.createElement(p.a, Object(n.a)({ htmlFor: R, id: oe }, T), I),
            X
              ? r.createElement(
                  w.a,
                  Object(n.a)(
                    {
                      "aria-describedby": te,
                      id: R,
                      labelId: oe,
                      value: Y,
                      input: ae,
                    },
                    K
                  ),
                  d
                )
              : ae,
            E && r.createElement(S, Object(n.a)({ id: te }, O), E)
          );
        }),
        k = Object(f.a)({ root: {} }, { name: "MuiTextField" })(C),
        E = o("ye/S"),
        z = o("VD++"),
        R = r.forwardRef(function (e, t) {
          var o = e.children,
            a = e.classes,
            c = e.className,
            d = e.color,
            s = void 0 === d ? "default" : d,
            p = e.component,
            u = void 0 === p ? "button" : p,
            f = e.disabled,
            b = void 0 !== f && f,
            m = e.disableElevation,
            v = void 0 !== m && m,
            g = e.disableFocusRipple,
            y = void 0 !== g && g,
            x = e.endIcon,
            O = e.focusVisibleClassName,
            S = e.fullWidth,
            w = void 0 !== S && S,
            j = e.size,
            C = void 0 === j ? "medium" : j,
            k = e.startIcon,
            E = e.type,
            R = void 0 === E ? "button" : E,
            T = e.variant,
            L = void 0 === T ? "text" : T,
            P = Object(i.a)(e, [
              "children",
              "classes",
              "className",
              "color",
              "component",
              "disabled",
              "disableElevation",
              "disableFocusRipple",
              "endIcon",
              "focusVisibleClassName",
              "fullWidth",
              "size",
              "startIcon",
              "type",
              "variant",
            ]),
            N =
              k &&
              r.createElement(
                "span",
                {
                  className: Object(l.a)(
                    a.startIcon,
                    a["iconSize".concat(Object(h.a)(C))]
                  ),
                },
                k
              ),
            I =
              x &&
              r.createElement(
                "span",
                {
                  className: Object(l.a)(
                    a.endIcon,
                    a["iconSize".concat(Object(h.a)(C))]
                  ),
                },
                x
              );
          return r.createElement(
            z.a,
            Object(n.a)(
              {
                className: Object(l.a)(
                  a.root,
                  a[L],
                  c,
                  "inherit" === s
                    ? a.colorInherit
                    : "default" !== s && a["".concat(L).concat(Object(h.a)(s))],
                  "medium" !== C && [
                    a["".concat(L, "Size").concat(Object(h.a)(C))],
                    a["size".concat(Object(h.a)(C))],
                  ],
                  v && a.disableElevation,
                  b && a.disabled,
                  w && a.fullWidth
                ),
                component: u,
                disabled: b,
                focusRipple: !y,
                focusVisibleClassName: Object(l.a)(a.focusVisible, O),
                ref: t,
                type: R,
              },
              P
            ),
            r.createElement("span", { className: a.label }, N, o, I)
          );
        }),
        T = Object(f.a)(
          function (e) {
            return {
              root: Object(n.a)({}, e.typography.button, {
                boxSizing: "border-box",
                minWidth: 64,
                padding: "6px 16px",
                borderRadius: e.shape.borderRadius,
                color: e.palette.text.primary,
                transition: e.transitions.create(
                  ["background-color", "box-shadow", "border"],
                  { duration: e.transitions.duration.short }
                ),
                "&:hover": {
                  textDecoration: "none",
                  backgroundColor: Object(E.c)(
                    e.palette.text.primary,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                  "&$disabled": { backgroundColor: "transparent" },
                },
                "&$disabled": { color: e.palette.action.disabled },
              }),
              label: {
                width: "100%",
                display: "inherit",
                alignItems: "inherit",
                justifyContent: "inherit",
              },
              text: { padding: "6px 8px" },
              textPrimary: {
                color: e.palette.primary.main,
                "&:hover": {
                  backgroundColor: Object(E.c)(
                    e.palette.primary.main,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
              textSecondary: {
                color: e.palette.secondary.main,
                "&:hover": {
                  backgroundColor: Object(E.c)(
                    e.palette.secondary.main,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
              outlined: {
                padding: "5px 15px",
                border: "1px solid ".concat(
                  "light" === e.palette.type
                    ? "rgba(0, 0, 0, 0.23)"
                    : "rgba(255, 255, 255, 0.23)"
                ),
                "&$disabled": {
                  border: "1px solid ".concat(
                    e.palette.action.disabledBackground
                  ),
                },
              },
              outlinedPrimary: {
                color: e.palette.primary.main,
                border: "1px solid ".concat(
                  Object(E.c)(e.palette.primary.main, 0.5)
                ),
                "&:hover": {
                  border: "1px solid ".concat(e.palette.primary.main),
                  backgroundColor: Object(E.c)(
                    e.palette.primary.main,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
              outlinedSecondary: {
                color: e.palette.secondary.main,
                border: "1px solid ".concat(
                  Object(E.c)(e.palette.secondary.main, 0.5)
                ),
                "&:hover": {
                  border: "1px solid ".concat(e.palette.secondary.main),
                  backgroundColor: Object(E.c)(
                    e.palette.secondary.main,
                    e.palette.action.hoverOpacity
                  ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
                "&$disabled": {
                  border: "1px solid ".concat(e.palette.action.disabled),
                },
              },
              contained: {
                color: e.palette.getContrastText(e.palette.grey[300]),
                backgroundColor: e.palette.grey[300],
                boxShadow: e.shadows[2],
                "&:hover": {
                  backgroundColor: e.palette.grey.A100,
                  boxShadow: e.shadows[4],
                  "@media (hover: none)": {
                    boxShadow: e.shadows[2],
                    backgroundColor: e.palette.grey[300],
                  },
                  "&$disabled": {
                    backgroundColor: e.palette.action.disabledBackground,
                  },
                },
                "&$focusVisible": { boxShadow: e.shadows[6] },
                "&:active": { boxShadow: e.shadows[8] },
                "&$disabled": {
                  color: e.palette.action.disabled,
                  boxShadow: e.shadows[0],
                  backgroundColor: e.palette.action.disabledBackground,
                },
              },
              containedPrimary: {
                color: e.palette.primary.contrastText,
                backgroundColor: e.palette.primary.main,
                "&:hover": {
                  backgroundColor: e.palette.primary.dark,
                  "@media (hover: none)": {
                    backgroundColor: e.palette.primary.main,
                  },
                },
              },
              containedSecondary: {
                color: e.palette.secondary.contrastText,
                backgroundColor: e.palette.secondary.main,
                "&:hover": {
                  backgroundColor: e.palette.secondary.dark,
                  "@media (hover: none)": {
                    backgroundColor: e.palette.secondary.main,
                  },
                },
              },
              disableElevation: {
                boxShadow: "none",
                "&:hover": { boxShadow: "none" },
                "&$focusVisible": { boxShadow: "none" },
                "&:active": { boxShadow: "none" },
                "&$disabled": { boxShadow: "none" },
              },
              focusVisible: {},
              disabled: {},
              colorInherit: { color: "inherit", borderColor: "currentColor" },
              textSizeSmall: {
                padding: "4px 5px",
                fontSize: e.typography.pxToRem(13),
              },
              textSizeLarge: {
                padding: "8px 11px",
                fontSize: e.typography.pxToRem(15),
              },
              outlinedSizeSmall: {
                padding: "3px 9px",
                fontSize: e.typography.pxToRem(13),
              },
              outlinedSizeLarge: {
                padding: "7px 21px",
                fontSize: e.typography.pxToRem(15),
              },
              containedSizeSmall: {
                padding: "4px 10px",
                fontSize: e.typography.pxToRem(13),
              },
              containedSizeLarge: {
                padding: "8px 22px",
                fontSize: e.typography.pxToRem(15),
              },
              sizeSmall: {},
              sizeLarge: {},
              fullWidth: { width: "100%" },
              startIcon: {
                display: "inherit",
                marginRight: 8,
                marginLeft: -4,
                "&$iconSizeSmall": { marginLeft: -2 },
              },
              endIcon: {
                display: "inherit",
                marginRight: -4,
                marginLeft: 8,
                "&$iconSizeSmall": { marginRight: -2 },
              },
              iconSizeSmall: { "& > *:first-child": { fontSize: 18 } },
              iconSizeMedium: { "& > *:first-child": { fontSize: 20 } },
              iconSizeLarge: { "& > *:first-child": { fontSize: 22 } },
            };
          },
          { name: "MuiButton" }
        )(R),
        L = o("YFqc"),
        P = o.n(L),
        N = o("h7RS"),
        I = a.a.createElement;
      t.default = function () {
        var e = Object(r.useState)(!1);
        e[0], e[1];
        return I(
          N.a,
          null,
          I("h1", null, "TooLegalDidntRead"),
          I(
            "p",
            null,
            " ",
            I(k, {
              multiline: !0,
              fullWidth: !0,
              label: "Enter text here",
              placeholder: "terms of service",
            })
          ),
          I(
            "p",
            null,
            I(
              P.a,
              { href: "/analyze" },
              I(T, { variant: "contained", color: "primary" }, "Analyze")
            )
          )
        );
      };
    },
    cTJO: function (e, t, o) {
      "use strict";
      var r = o("/GRZ"),
        a = o("i2R6"),
        n = o("tCBg"),
        i = o("T0f4"),
        l = o("48fX");
      function c() {
        if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
        if (Reflect.construct.sham) return !1;
        if ("function" === typeof Proxy) return !0;
        try {
          return (
            Date.prototype.toString.call(
              Reflect.construct(Date, [], function () {})
            ),
            !0
          );
        } catch (e) {
          return !1;
        }
      }
      var d = o("AroE"),
        s = o("7KCV");
      (t.__esModule = !0), (t.default = void 0);
      var p,
        u = s(o("q1tI")),
        f = o("QmWs"),
        h = o("g/15"),
        b = d(o("nOHt"));
      function m(e) {
        return e && "object" === typeof e ? (0, h.formatWithValidation)(e) : e;
      }
      var v = new Map(),
        g = window.IntersectionObserver,
        y = {};
      function x() {
        return (
          p ||
          (g
            ? (p = new g(
                function (e) {
                  e.forEach(function (e) {
                    if (v.has(e.target)) {
                      var t = v.get(e.target);
                      (e.isIntersecting || e.intersectionRatio > 0) &&
                        (p.unobserve(e.target), v.delete(e.target), t());
                    }
                  });
                },
                { rootMargin: "200px" }
              ))
            : void 0)
        );
      }
      var O = (function (e) {
        l(d, e);
        var t,
          o =
            ((t = d),
            function () {
              var e,
                o = i(t);
              if (c()) {
                var r = i(this).constructor;
                e = Reflect.construct(o, arguments, r);
              } else e = o.apply(this, arguments);
              return n(this, e);
            });
        function d(e) {
          var t;
          return (
            r(this, d),
            ((t = o.call(this, e)).p = void 0),
            (t.cleanUpListeners = function () {}),
            (t.formatUrls = (function (e) {
              var t = null,
                o = null,
                r = null;
              return function (a, n) {
                if (r && a === t && n === o) return r;
                var i = e(a, n);
                return (t = a), (o = n), (r = i), i;
              };
            })(function (e, t) {
              return { href: m(e), as: t ? m(t) : t };
            })),
            (t.linkClicked = function (e) {
              var o = e.currentTarget,
                r = o.nodeName,
                a = o.target;
              if (
                "A" !== r ||
                !(
                  (a && "_self" !== a) ||
                  e.metaKey ||
                  e.ctrlKey ||
                  e.shiftKey ||
                  (e.nativeEvent && 2 === e.nativeEvent.which)
                )
              ) {
                var n = t.formatUrls(t.props.href, t.props.as),
                  i = n.href,
                  l = n.as;
                if (
                  (function (e) {
                    var t = (0, f.parse)(e, !1, !0),
                      o = (0, f.parse)((0, h.getLocationOrigin)(), !1, !0);
                    return (
                      !t.host ||
                      (t.protocol === o.protocol && t.host === o.host)
                    );
                  })(i)
                ) {
                  var c = window.location.pathname;
                  (i = (0, f.resolve)(c, i)),
                    (l = l ? (0, f.resolve)(c, l) : i),
                    e.preventDefault();
                  var d = t.props.scroll;
                  null == d && (d = l.indexOf("#") < 0),
                    b.default[t.props.replace ? "replace" : "push"](i, l, {
                      shallow: t.props.shallow,
                    }).then(function (e) {
                      e && d && (window.scrollTo(0, 0), document.body.focus());
                    });
                }
              }
            }),
            (t.p = !1 !== e.prefetch),
            t
          );
        }
        return (
          a(d, [
            {
              key: "componentWillUnmount",
              value: function () {
                this.cleanUpListeners();
              },
            },
            {
              key: "getPaths",
              value: function () {
                var e = window.location.pathname,
                  t = this.formatUrls(this.props.href, this.props.as),
                  o = t.href,
                  r = t.as,
                  a = (0, f.resolve)(e, o);
                return [a, r ? (0, f.resolve)(e, r) : a];
              },
            },
            {
              key: "handleRef",
              value: function (e) {
                var t = this;
                this.p &&
                  g &&
                  e &&
                  e.tagName &&
                  (this.cleanUpListeners(),
                  y[this.getPaths().join("%")] ||
                    (this.cleanUpListeners = (function (e, t) {
                      var o = x();
                      return o
                        ? (o.observe(e),
                          v.set(e, t),
                          function () {
                            try {
                              o.unobserve(e);
                            } catch (t) {
                              console.error(t);
                            }
                            v.delete(e);
                          })
                        : function () {};
                    })(e, function () {
                      t.prefetch();
                    })));
              },
            },
            {
              key: "prefetch",
              value: function (e) {
                if (this.p) {
                  var t = this.getPaths();
                  b.default.prefetch(t[0], t[1], e).catch(function (e) {
                    0;
                  }),
                    (y[t.join("%")] = !0);
                }
              },
            },
            {
              key: "render",
              value: function () {
                var e = this,
                  t = this.props.children,
                  o = this.formatUrls(this.props.href, this.props.as),
                  r = o.href,
                  a = o.as;
                "string" === typeof t &&
                  (t = u.default.createElement("a", null, t));
                var n = u.Children.only(t),
                  i = {
                    ref: function (t) {
                      e.handleRef(t),
                        n &&
                          "object" === typeof n &&
                          n.ref &&
                          ("function" === typeof n.ref
                            ? n.ref(t)
                            : "object" === typeof n.ref && (n.ref.current = t));
                    },
                    onMouseEnter: function (t) {
                      n.props &&
                        "function" === typeof n.props.onMouseEnter &&
                        n.props.onMouseEnter(t),
                        e.prefetch({ priority: !0 });
                    },
                    onClick: function (t) {
                      n.props &&
                        "function" === typeof n.props.onClick &&
                        n.props.onClick(t),
                        t.defaultPrevented || e.linkClicked(t);
                    },
                  };
                return (
                  (!this.props.passHref &&
                    ("a" !== n.type || "href" in n.props)) ||
                    (i.href = a || r),
                  u.default.cloneElement(n, i)
                );
              },
            },
          ]),
          d
        );
      })(u.Component);
      t.default = O;
    },
    qXWd: function (e, t) {
      e.exports = function (e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      };
    },
    tCBg: function (e, t, o) {
      var r = o("C+bE"),
        a = o("qXWd");
      e.exports = function (e, t) {
        return !t || ("object" !== r(t) && "function" !== typeof t) ? a(e) : t;
      };
    },
  },
  [["H0SL", 0, 2, 1, 3, 4, 5]],
]);
