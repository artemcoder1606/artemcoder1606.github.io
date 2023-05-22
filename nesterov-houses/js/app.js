(() => {
  var e = {
      211: function (e, t) {
        !(function (e) {
          "use strict";
          function t(e) {
            return s(e) && "function" == typeof e.from;
          }
          function s(e) {
            return "object" == typeof e && "function" == typeof e.to;
          }
          function i(e) {
            e.parentElement.removeChild(e);
          }
          function n(e) {
            return null != e;
          }
          function r(e) {
            e.preventDefault();
          }
          function a(e) {
            return e.filter(function (e) {
              return !this[e] && (this[e] = !0);
            }, {});
          }
          function o(e, t) {
            return Math.round(e / t) * t;
          }
          function l(e, t) {
            var s = e.getBoundingClientRect(),
              i = e.ownerDocument,
              n = i.documentElement,
              r = v(i);
            return (
              /webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (r.x = 0),
              t ? s.top + r.y - n.clientTop : s.left + r.x - n.clientLeft
            );
          }
          function c(e) {
            return "number" == typeof e && !isNaN(e) && isFinite(e);
          }
          function d(e, t, s) {
            s > 0 &&
              (h(e, t),
              setTimeout(function () {
                m(e, t);
              }, s));
          }
          function u(e) {
            return Math.max(Math.min(e, 100), 0);
          }
          function p(e) {
            return Array.isArray(e) ? e : [e];
          }
          function f(e) {
            var t = (e = String(e)).split(".");
            return t.length > 1 ? t[1].length : 0;
          }
          function h(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.add(t)
              : (e.className += " " + t);
          }
          function m(e, t) {
            e.classList && !/\s/.test(t)
              ? e.classList.remove(t)
              : (e.className = e.className.replace(
                  new RegExp(
                    "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                    "gi"
                  ),
                  " "
                ));
          }
          function g(e, t) {
            return e.classList
              ? e.classList.contains(t)
              : new RegExp("\\b" + t + "\\b").test(e.className);
          }
          function v(e) {
            var t = void 0 !== window.pageXOffset,
              s = "CSS1Compat" === (e.compatMode || "");
            return {
              x: t
                ? window.pageXOffset
                : s
                ? e.documentElement.scrollLeft
                : e.body.scrollLeft,
              y: t
                ? window.pageYOffset
                : s
                ? e.documentElement.scrollTop
                : e.body.scrollTop,
            };
          }
          function b() {
            return window.navigator.pointerEnabled
              ? { start: "pointerdown", move: "pointermove", end: "pointerup" }
              : window.navigator.msPointerEnabled
              ? {
                  start: "MSPointerDown",
                  move: "MSPointerMove",
                  end: "MSPointerUp",
                }
              : {
                  start: "mousedown touchstart",
                  move: "mousemove touchmove",
                  end: "mouseup touchend",
                };
          }
          function y() {
            var e = !1;
            try {
              var t = Object.defineProperty({}, "passive", {
                get: function () {
                  e = !0;
                },
              });
              window.addEventListener("test", null, t);
            } catch (e) {}
            return e;
          }
          function w() {
            return (
              window.CSS && CSS.supports && CSS.supports("touch-action", "none")
            );
          }
          function S(e, t) {
            return 100 / (t - e);
          }
          function x(e, t, s) {
            return (100 * t) / (e[s + 1] - e[s]);
          }
          function C(e, t) {
            return x(e, e[0] < 0 ? t + Math.abs(e[0]) : t - e[0], 0);
          }
          function E(e, t) {
            return (t * (e[1] - e[0])) / 100 + e[0];
          }
          function T(e, t) {
            for (var s = 1; e >= t[s]; ) s += 1;
            return s;
          }
          function _(e, t, s) {
            if (s >= e.slice(-1)[0]) return 100;
            var i = T(s, e),
              n = e[i - 1],
              r = e[i],
              a = t[i - 1],
              o = t[i];
            return a + C([n, r], s) / S(a, o);
          }
          function A(e, t, s) {
            if (s >= 100) return e.slice(-1)[0];
            var i = T(s, t),
              n = e[i - 1],
              r = e[i],
              a = t[i - 1];
            return E([n, r], (s - a) * S(a, t[i]));
          }
          function L(e, t, s, i) {
            if (100 === i) return i;
            var n = T(i, e),
              r = e[n - 1],
              a = e[n];
            return s
              ? i - r > (a - r) / 2
                ? a
                : r
              : t[n - 1]
              ? e[n - 1] + o(i - e[n - 1], t[n - 1])
              : i;
          }
          var O, k;
          (e.PipsMode = void 0),
            ((k = e.PipsMode || (e.PipsMode = {})).Range = "range"),
            (k.Steps = "steps"),
            (k.Positions = "positions"),
            (k.Count = "count"),
            (k.Values = "values"),
            (e.PipsType = void 0),
            ((O = e.PipsType || (e.PipsType = {}))[(O.None = -1)] = "None"),
            (O[(O.NoValue = 0)] = "NoValue"),
            (O[(O.LargeValue = 1)] = "LargeValue"),
            (O[(O.SmallValue = 2)] = "SmallValue");
          var P = (function () {
              function e(e, t, s) {
                var i;
                (this.xPct = []),
                  (this.xVal = []),
                  (this.xSteps = []),
                  (this.xNumSteps = []),
                  (this.xHighestCompleteStep = []),
                  (this.xSteps = [s || !1]),
                  (this.xNumSteps = [!1]),
                  (this.snap = t);
                var n = [];
                for (
                  Object.keys(e).forEach(function (t) {
                    n.push([p(e[t]), t]);
                  }),
                    n.sort(function (e, t) {
                      return e[0][0] - t[0][0];
                    }),
                    i = 0;
                  i < n.length;
                  i++
                )
                  this.handleEntryPoint(n[i][1], n[i][0]);
                for (
                  this.xNumSteps = this.xSteps.slice(0), i = 0;
                  i < this.xNumSteps.length;
                  i++
                )
                  this.handleStepPoint(i, this.xNumSteps[i]);
              }
              return (
                (e.prototype.getDistance = function (e) {
                  for (var t = [], s = 0; s < this.xNumSteps.length - 1; s++)
                    t[s] = x(this.xVal, e, s);
                  return t;
                }),
                (e.prototype.getAbsoluteDistance = function (e, t, s) {
                  var i,
                    n = 0;
                  if (e < this.xPct[this.xPct.length - 1])
                    for (; e > this.xPct[n + 1]; ) n++;
                  else
                    e === this.xPct[this.xPct.length - 1] &&
                      (n = this.xPct.length - 2);
                  s || e !== this.xPct[n + 1] || n++, null === t && (t = []);
                  var r = 1,
                    a = t[n],
                    o = 0,
                    l = 0,
                    c = 0,
                    d = 0;
                  for (
                    i = s
                      ? (e - this.xPct[n]) / (this.xPct[n + 1] - this.xPct[n])
                      : (this.xPct[n + 1] - e) /
                        (this.xPct[n + 1] - this.xPct[n]);
                    a > 0;

                  )
                    (o = this.xPct[n + 1 + d] - this.xPct[n + d]),
                      t[n + d] * r + 100 - 100 * i > 100
                        ? ((l = o * i), (r = (a - 100 * i) / t[n + d]), (i = 1))
                        : ((l = ((t[n + d] * o) / 100) * r), (r = 0)),
                      s
                        ? ((c -= l), this.xPct.length + d >= 1 && d--)
                        : ((c += l), this.xPct.length - d >= 1 && d++),
                      (a = t[n + d] * r);
                  return e + c;
                }),
                (e.prototype.toStepping = function (e) {
                  return (e = _(this.xVal, this.xPct, e));
                }),
                (e.prototype.fromStepping = function (e) {
                  return A(this.xVal, this.xPct, e);
                }),
                (e.prototype.getStep = function (e) {
                  return (e = L(this.xPct, this.xSteps, this.snap, e));
                }),
                (e.prototype.getDefaultStep = function (e, t, s) {
                  var i = T(e, this.xPct);
                  return (
                    (100 === e || (t && e === this.xPct[i - 1])) &&
                      (i = Math.max(i - 1, 1)),
                    (this.xVal[i] - this.xVal[i - 1]) / s
                  );
                }),
                (e.prototype.getNearbySteps = function (e) {
                  var t = T(e, this.xPct);
                  return {
                    stepBefore: {
                      startValue: this.xVal[t - 2],
                      step: this.xNumSteps[t - 2],
                      highestStep: this.xHighestCompleteStep[t - 2],
                    },
                    thisStep: {
                      startValue: this.xVal[t - 1],
                      step: this.xNumSteps[t - 1],
                      highestStep: this.xHighestCompleteStep[t - 1],
                    },
                    stepAfter: {
                      startValue: this.xVal[t],
                      step: this.xNumSteps[t],
                      highestStep: this.xHighestCompleteStep[t],
                    },
                  };
                }),
                (e.prototype.countStepDecimals = function () {
                  var e = this.xNumSteps.map(f);
                  return Math.max.apply(null, e);
                }),
                (e.prototype.hasNoSize = function () {
                  return this.xVal[0] === this.xVal[this.xVal.length - 1];
                }),
                (e.prototype.convert = function (e) {
                  return this.getStep(this.toStepping(e));
                }),
                (e.prototype.handleEntryPoint = function (e, t) {
                  var s;
                  if (
                    !c(
                      (s = "min" === e ? 0 : "max" === e ? 100 : parseFloat(e))
                    ) ||
                    !c(t[0])
                  )
                    throw new Error("noUiSlider: 'range' value isn't numeric.");
                  this.xPct.push(s), this.xVal.push(t[0]);
                  var i = Number(t[1]);
                  s
                    ? this.xSteps.push(!isNaN(i) && i)
                    : isNaN(i) || (this.xSteps[0] = i),
                    this.xHighestCompleteStep.push(0);
                }),
                (e.prototype.handleStepPoint = function (e, t) {
                  if (t)
                    if (this.xVal[e] !== this.xVal[e + 1]) {
                      this.xSteps[e] =
                        x([this.xVal[e], this.xVal[e + 1]], t, 0) /
                        S(this.xPct[e], this.xPct[e + 1]);
                      var s =
                          (this.xVal[e + 1] - this.xVal[e]) / this.xNumSteps[e],
                        i = Math.ceil(Number(s.toFixed(3)) - 1),
                        n = this.xVal[e] + this.xNumSteps[e] * i;
                      this.xHighestCompleteStep[e] = n;
                    } else
                      this.xSteps[e] = this.xHighestCompleteStep[e] =
                        this.xVal[e];
                }),
                e
              );
            })(),
            M = {
              to: function (e) {
                return void 0 === e ? "" : e.toFixed(2);
              },
              from: Number,
            },
            $ = {
              target: "target",
              base: "base",
              origin: "origin",
              handle: "handle",
              handleLower: "handle-lower",
              handleUpper: "handle-upper",
              touchArea: "touch-area",
              horizontal: "horizontal",
              vertical: "vertical",
              background: "background",
              connect: "connect",
              connects: "connects",
              ltr: "ltr",
              rtl: "rtl",
              textDirectionLtr: "txt-dir-ltr",
              textDirectionRtl: "txt-dir-rtl",
              draggable: "draggable",
              drag: "state-drag",
              tap: "state-tap",
              active: "active",
              tooltip: "tooltip",
              pips: "pips",
              pipsHorizontal: "pips-horizontal",
              pipsVertical: "pips-vertical",
              marker: "marker",
              markerHorizontal: "marker-horizontal",
              markerVertical: "marker-vertical",
              markerNormal: "marker-normal",
              markerLarge: "marker-large",
              markerSub: "marker-sub",
              value: "value",
              valueHorizontal: "value-horizontal",
              valueVertical: "value-vertical",
              valueNormal: "value-normal",
              valueLarge: "value-large",
              valueSub: "value-sub",
            },
            D = { tooltips: ".__tooltips", aria: ".__aria" };
          function B(e, t) {
            if (!c(t)) throw new Error("noUiSlider: 'step' is not numeric.");
            e.singleStep = t;
          }
          function N(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardPageMultiplier' is not numeric."
              );
            e.keyboardPageMultiplier = t;
          }
          function I(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardMultiplier' is not numeric."
              );
            e.keyboardMultiplier = t;
          }
          function q(e, t) {
            if (!c(t))
              throw new Error(
                "noUiSlider: 'keyboardDefaultStep' is not numeric."
              );
            e.keyboardDefaultStep = t;
          }
          function j(e, t) {
            if ("object" != typeof t || Array.isArray(t))
              throw new Error("noUiSlider: 'range' is not an object.");
            if (void 0 === t.min || void 0 === t.max)
              throw new Error("noUiSlider: Missing 'min' or 'max' in 'range'.");
            e.spectrum = new P(t, e.snap || !1, e.singleStep);
          }
          function H(e, t) {
            if (((t = p(t)), !Array.isArray(t) || !t.length))
              throw new Error("noUiSlider: 'start' option is incorrect.");
            (e.handles = t.length), (e.start = t);
          }
          function V(e, t) {
            if ("boolean" != typeof t)
              throw new Error("noUiSlider: 'snap' option must be a boolean.");
            e.snap = t;
          }
          function z(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'animate' option must be a boolean."
              );
            e.animate = t;
          }
          function G(e, t) {
            if ("number" != typeof t)
              throw new Error(
                "noUiSlider: 'animationDuration' option must be a number."
              );
            e.animationDuration = t;
          }
          function F(e, t) {
            var s,
              i = [!1];
            if (
              ("lower" === t ? (t = [!0, !1]) : "upper" === t && (t = [!1, !0]),
              !0 === t || !1 === t)
            ) {
              for (s = 1; s < e.handles; s++) i.push(t);
              i.push(!1);
            } else {
              if (!Array.isArray(t) || !t.length || t.length !== e.handles + 1)
                throw new Error(
                  "noUiSlider: 'connect' option doesn't match handle count."
                );
              i = t;
            }
            e.connect = i;
          }
          function R(e, t) {
            switch (t) {
              case "horizontal":
                e.ort = 0;
                break;
              case "vertical":
                e.ort = 1;
                break;
              default:
                throw new Error("noUiSlider: 'orientation' option is invalid.");
            }
          }
          function W(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'margin' option must be numeric.");
            0 !== t && (e.margin = e.spectrum.getDistance(t));
          }
          function U(e, t) {
            if (!c(t))
              throw new Error("noUiSlider: 'limit' option must be numeric.");
            if (
              ((e.limit = e.spectrum.getDistance(t)), !e.limit || e.handles < 2)
            )
              throw new Error(
                "noUiSlider: 'limit' option is only supported on linear sliders with 2 or more handles."
              );
          }
          function X(e, t) {
            var s;
            if (!c(t) && !Array.isArray(t))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (Array.isArray(t) && 2 !== t.length && !c(t[0]) && !c(t[1]))
              throw new Error(
                "noUiSlider: 'padding' option must be numeric or array of exactly 2 numbers."
              );
            if (0 !== t) {
              for (
                Array.isArray(t) || (t = [t, t]),
                  e.padding = [
                    e.spectrum.getDistance(t[0]),
                    e.spectrum.getDistance(t[1]),
                  ],
                  s = 0;
                s < e.spectrum.xNumSteps.length - 1;
                s++
              )
                if (e.padding[0][s] < 0 || e.padding[1][s] < 0)
                  throw new Error(
                    "noUiSlider: 'padding' option must be a positive number(s)."
                  );
              var i = t[0] + t[1],
                n = e.spectrum.xVal[0];
              if (i / (e.spectrum.xVal[e.spectrum.xVal.length - 1] - n) > 1)
                throw new Error(
                  "noUiSlider: 'padding' option must not exceed 100% of the range."
                );
            }
          }
          function Y(e, t) {
            switch (t) {
              case "ltr":
                e.dir = 0;
                break;
              case "rtl":
                e.dir = 1;
                break;
              default:
                throw new Error(
                  "noUiSlider: 'direction' option was not recognized."
                );
            }
          }
          function K(e, t) {
            if ("string" != typeof t)
              throw new Error(
                "noUiSlider: 'behaviour' must be a string containing options."
              );
            var s = t.indexOf("tap") >= 0,
              i = t.indexOf("drag") >= 0,
              n = t.indexOf("fixed") >= 0,
              r = t.indexOf("snap") >= 0,
              a = t.indexOf("hover") >= 0,
              o = t.indexOf("unconstrained") >= 0,
              l = t.indexOf("drag-all") >= 0;
            if (n) {
              if (2 !== e.handles)
                throw new Error(
                  "noUiSlider: 'fixed' behaviour must be used with 2 handles"
                );
              W(e, e.start[1] - e.start[0]);
            }
            if (o && (e.margin || e.limit))
              throw new Error(
                "noUiSlider: 'unconstrained' behaviour cannot be used with margin or limit"
              );
            e.events = {
              tap: s || r,
              drag: i,
              dragAll: l,
              fixed: n,
              snap: r,
              hover: a,
              unconstrained: o,
            };
          }
          function Q(e, t) {
            if (!1 !== t)
              if (!0 === t || s(t)) {
                e.tooltips = [];
                for (var i = 0; i < e.handles; i++) e.tooltips.push(t);
              } else {
                if ((t = p(t)).length !== e.handles)
                  throw new Error(
                    "noUiSlider: must pass a formatter for all handles."
                  );
                t.forEach(function (e) {
                  if ("boolean" != typeof e && !s(e))
                    throw new Error(
                      "noUiSlider: 'tooltips' must be passed a formatter or 'false'."
                    );
                }),
                  (e.tooltips = t);
              }
          }
          function Z(e, t) {
            if (t.length !== e.handles)
              throw new Error(
                "noUiSlider: must pass a attributes for all handles."
              );
            e.handleAttributes = t;
          }
          function J(e, t) {
            if (!s(t))
              throw new Error("noUiSlider: 'ariaFormat' requires 'to' method.");
            e.ariaFormat = t;
          }
          function ee(e, s) {
            if (!t(s))
              throw new Error(
                "noUiSlider: 'format' requires 'to' and 'from' methods."
              );
            e.format = s;
          }
          function te(e, t) {
            if ("boolean" != typeof t)
              throw new Error(
                "noUiSlider: 'keyboardSupport' option must be a boolean."
              );
            e.keyboardSupport = t;
          }
          function se(e, t) {
            e.documentElement = t;
          }
          function ie(e, t) {
            if ("string" != typeof t && !1 !== t)
              throw new Error(
                "noUiSlider: 'cssPrefix' must be a string or `false`."
              );
            e.cssPrefix = t;
          }
          function ne(e, t) {
            if ("object" != typeof t)
              throw new Error("noUiSlider: 'cssClasses' must be an object.");
            "string" == typeof e.cssPrefix
              ? ((e.cssClasses = {}),
                Object.keys(t).forEach(function (s) {
                  e.cssClasses[s] = e.cssPrefix + t[s];
                }))
              : (e.cssClasses = t);
          }
          function re(e) {
            var t = {
                margin: null,
                limit: null,
                padding: null,
                animate: !0,
                animationDuration: 300,
                ariaFormat: M,
                format: M,
              },
              s = {
                step: { r: !1, t: B },
                keyboardPageMultiplier: { r: !1, t: N },
                keyboardMultiplier: { r: !1, t: I },
                keyboardDefaultStep: { r: !1, t: q },
                start: { r: !0, t: H },
                connect: { r: !0, t: F },
                direction: { r: !0, t: Y },
                snap: { r: !1, t: V },
                animate: { r: !1, t: z },
                animationDuration: { r: !1, t: G },
                range: { r: !0, t: j },
                orientation: { r: !1, t: R },
                margin: { r: !1, t: W },
                limit: { r: !1, t: U },
                padding: { r: !1, t: X },
                behaviour: { r: !0, t: K },
                ariaFormat: { r: !1, t: J },
                format: { r: !1, t: ee },
                tooltips: { r: !1, t: Q },
                keyboardSupport: { r: !0, t: te },
                documentElement: { r: !1, t: se },
                cssPrefix: { r: !0, t: ie },
                cssClasses: { r: !0, t: ne },
                handleAttributes: { r: !1, t: Z },
              },
              i = {
                connect: !1,
                direction: "ltr",
                behaviour: "tap",
                orientation: "horizontal",
                keyboardSupport: !0,
                cssPrefix: "noUi-",
                cssClasses: $,
                keyboardPageMultiplier: 5,
                keyboardMultiplier: 1,
                keyboardDefaultStep: 10,
              };
            e.format && !e.ariaFormat && (e.ariaFormat = e.format),
              Object.keys(s).forEach(function (r) {
                if (n(e[r]) || void 0 !== i[r])
                  s[r].t(t, n(e[r]) ? e[r] : i[r]);
                else if (s[r].r)
                  throw new Error("noUiSlider: '" + r + "' is required.");
              }),
              (t.pips = e.pips);
            var r = document.createElement("div"),
              a = void 0 !== r.style.msTransform,
              o = void 0 !== r.style.transform;
            t.transformRule = o
              ? "transform"
              : a
              ? "msTransform"
              : "webkitTransform";
            var l = [
              ["left", "top"],
              ["right", "bottom"],
            ];
            return (t.style = l[t.dir][t.ort]), t;
          }
          function ae(t, s, o) {
            var c,
              f,
              S,
              x,
              C,
              E = b(),
              T = w() && y(),
              _ = t,
              A = s.spectrum,
              L = [],
              O = [],
              k = [],
              P = 0,
              M = {},
              $ = t.ownerDocument,
              B = s.documentElement || $.documentElement,
              N = $.body,
              I = "rtl" === $.dir || 1 === s.ort ? 0 : 100;
            function q(e, t) {
              var s = $.createElement("div");
              return t && h(s, t), e.appendChild(s), s;
            }
            function j(e, t) {
              var i = q(e, s.cssClasses.origin),
                n = q(i, s.cssClasses.handle);
              if (
                (q(n, s.cssClasses.touchArea),
                n.setAttribute("data-handle", String(t)),
                s.keyboardSupport &&
                  (n.setAttribute("tabindex", "0"),
                  n.addEventListener("keydown", function (e) {
                    return fe(e, t);
                  })),
                void 0 !== s.handleAttributes)
              ) {
                var r = s.handleAttributes[t];
                Object.keys(r).forEach(function (e) {
                  n.setAttribute(e, r[e]);
                });
              }
              return (
                n.setAttribute("role", "slider"),
                n.setAttribute(
                  "aria-orientation",
                  s.ort ? "vertical" : "horizontal"
                ),
                0 === t
                  ? h(n, s.cssClasses.handleLower)
                  : t === s.handles - 1 && h(n, s.cssClasses.handleUpper),
                i
              );
            }
            function H(e, t) {
              return !!t && q(e, s.cssClasses.connect);
            }
            function V(e, t) {
              var i = q(t, s.cssClasses.connects);
              (f = []), (S = []).push(H(i, e[0]));
              for (var n = 0; n < s.handles; n++)
                f.push(j(t, n)), (k[n] = n), S.push(H(i, e[n + 1]));
            }
            function z(e) {
              return (
                h(e, s.cssClasses.target),
                0 === s.dir ? h(e, s.cssClasses.ltr) : h(e, s.cssClasses.rtl),
                0 === s.ort
                  ? h(e, s.cssClasses.horizontal)
                  : h(e, s.cssClasses.vertical),
                h(
                  e,
                  "rtl" === getComputedStyle(e).direction
                    ? s.cssClasses.textDirectionRtl
                    : s.cssClasses.textDirectionLtr
                ),
                q(e, s.cssClasses.base)
              );
            }
            function G(e, t) {
              return (
                !(!s.tooltips || !s.tooltips[t]) &&
                q(e.firstChild, s.cssClasses.tooltip)
              );
            }
            function F() {
              return _.hasAttribute("disabled");
            }
            function R(e) {
              return f[e].hasAttribute("disabled");
            }
            function W() {
              C &&
                (ve("update" + D.tooltips),
                C.forEach(function (e) {
                  e && i(e);
                }),
                (C = null));
            }
            function U() {
              W(),
                (C = f.map(G)),
                me("update" + D.tooltips, function (e, t, i) {
                  if (C && s.tooltips && !1 !== C[t]) {
                    var n = e[t];
                    !0 !== s.tooltips[t] && (n = s.tooltips[t].to(i[t])),
                      (C[t].innerHTML = n);
                  }
                });
            }
            function X() {
              ve("update" + D.aria),
                me("update" + D.aria, function (e, t, i, n, r) {
                  k.forEach(function (e) {
                    var t = f[e],
                      n = ye(O, e, 0, !0, !0, !0),
                      a = ye(O, e, 100, !0, !0, !0),
                      o = r[e],
                      l = String(s.ariaFormat.to(i[e]));
                    (n = A.fromStepping(n).toFixed(1)),
                      (a = A.fromStepping(a).toFixed(1)),
                      (o = A.fromStepping(o).toFixed(1)),
                      t.children[0].setAttribute("aria-valuemin", n),
                      t.children[0].setAttribute("aria-valuemax", a),
                      t.children[0].setAttribute("aria-valuenow", o),
                      t.children[0].setAttribute("aria-valuetext", l);
                  });
                });
            }
            function Y(t) {
              if (t.mode === e.PipsMode.Range || t.mode === e.PipsMode.Steps)
                return A.xVal;
              if (t.mode === e.PipsMode.Count) {
                if (t.values < 2)
                  throw new Error(
                    "noUiSlider: 'values' (>= 2) required for mode 'count'."
                  );
                for (var s = t.values - 1, i = 100 / s, n = []; s--; )
                  n[s] = s * i;
                return n.push(100), K(n, t.stepped);
              }
              return t.mode === e.PipsMode.Positions
                ? K(t.values, t.stepped)
                : t.mode === e.PipsMode.Values
                ? t.stepped
                  ? t.values.map(function (e) {
                      return A.fromStepping(A.getStep(A.toStepping(e)));
                    })
                  : t.values
                : [];
            }
            function K(e, t) {
              return e.map(function (e) {
                return A.fromStepping(t ? A.getStep(e) : e);
              });
            }
            function Q(t) {
              function s(e, t) {
                return Number((e + t).toFixed(7));
              }
              var i = Y(t),
                n = {},
                r = A.xVal[0],
                o = A.xVal[A.xVal.length - 1],
                l = !1,
                c = !1,
                d = 0;
              return (
                (i = a(
                  i.slice().sort(function (e, t) {
                    return e - t;
                  })
                ))[0] !== r && (i.unshift(r), (l = !0)),
                i[i.length - 1] !== o && (i.push(o), (c = !0)),
                i.forEach(function (r, a) {
                  var o,
                    u,
                    p,
                    f,
                    h,
                    m,
                    g,
                    v,
                    b,
                    y,
                    w = r,
                    S = i[a + 1],
                    x = t.mode === e.PipsMode.Steps;
                  for (
                    x && (o = A.xNumSteps[a]),
                      o || (o = S - w),
                      void 0 === S && (S = w),
                      o = Math.max(o, 1e-7),
                      u = w;
                    u <= S;
                    u = s(u, o)
                  ) {
                    for (
                      v = (h = (f = A.toStepping(u)) - d) / (t.density || 1),
                        y = h / (b = Math.round(v)),
                        p = 1;
                      p <= b;
                      p += 1
                    )
                      n[(m = d + p * y).toFixed(5)] = [A.fromStepping(m), 0];
                    (g =
                      i.indexOf(u) > -1
                        ? e.PipsType.LargeValue
                        : x
                        ? e.PipsType.SmallValue
                        : e.PipsType.NoValue),
                      !a && l && u !== S && (g = 0),
                      (u === S && c) || (n[f.toFixed(5)] = [u, g]),
                      (d = f);
                  }
                }),
                n
              );
            }
            function Z(t, i, n) {
              var r,
                a,
                o = $.createElement("div"),
                l =
                  (((r = {})[e.PipsType.None] = ""),
                  (r[e.PipsType.NoValue] = s.cssClasses.valueNormal),
                  (r[e.PipsType.LargeValue] = s.cssClasses.valueLarge),
                  (r[e.PipsType.SmallValue] = s.cssClasses.valueSub),
                  r),
                c =
                  (((a = {})[e.PipsType.None] = ""),
                  (a[e.PipsType.NoValue] = s.cssClasses.markerNormal),
                  (a[e.PipsType.LargeValue] = s.cssClasses.markerLarge),
                  (a[e.PipsType.SmallValue] = s.cssClasses.markerSub),
                  a),
                d = [s.cssClasses.valueHorizontal, s.cssClasses.valueVertical],
                u = [
                  s.cssClasses.markerHorizontal,
                  s.cssClasses.markerVertical,
                ];
              function p(e, t) {
                var i = t === s.cssClasses.value,
                  n = i ? l : c;
                return t + " " + (i ? d : u)[s.ort] + " " + n[e];
              }
              function f(t, r, a) {
                if ((a = i ? i(r, a) : a) !== e.PipsType.None) {
                  var l = q(o, !1);
                  (l.className = p(a, s.cssClasses.marker)),
                    (l.style[s.style] = t + "%"),
                    a > e.PipsType.NoValue &&
                      (((l = q(o, !1)).className = p(a, s.cssClasses.value)),
                      l.setAttribute("data-value", String(r)),
                      (l.style[s.style] = t + "%"),
                      (l.innerHTML = String(n.to(r))));
                }
              }
              return (
                h(o, s.cssClasses.pips),
                h(
                  o,
                  0 === s.ort
                    ? s.cssClasses.pipsHorizontal
                    : s.cssClasses.pipsVertical
                ),
                Object.keys(t).forEach(function (e) {
                  f(e, t[e][0], t[e][1]);
                }),
                o
              );
            }
            function J() {
              x && (i(x), (x = null));
            }
            function ee(e) {
              J();
              var t = Q(e),
                s = e.filter,
                i = e.format || {
                  to: function (e) {
                    return String(Math.round(e));
                  },
                };
              return (x = _.appendChild(Z(t, s, i)));
            }
            function te() {
              var e = c.getBoundingClientRect(),
                t = "offset" + ["Width", "Height"][s.ort];
              return 0 === s.ort ? e.width || c[t] : e.height || c[t];
            }
            function se(e, t, i, n) {
              var r = function (r) {
                  var a = ie(r, n.pageOffset, n.target || t);
                  return (
                    !!a &&
                    !(F() && !n.doNotReject) &&
                    !(g(_, s.cssClasses.tap) && !n.doNotReject) &&
                    !(e === E.start && void 0 !== a.buttons && a.buttons > 1) &&
                    (!n.hover || !a.buttons) &&
                    (T || a.preventDefault(),
                    (a.calcPoint = a.points[s.ort]),
                    void i(a, n))
                  );
                },
                a = [];
              return (
                e.split(" ").forEach(function (e) {
                  t.addEventListener(e, r, !!T && { passive: !0 }),
                    a.push([e, r]);
                }),
                a
              );
            }
            function ie(e, t, s) {
              var i = 0 === e.type.indexOf("touch"),
                n = 0 === e.type.indexOf("mouse"),
                r = 0 === e.type.indexOf("pointer"),
                a = 0,
                o = 0;
              if (
                (0 === e.type.indexOf("MSPointer") && (r = !0),
                "mousedown" === e.type && !e.buttons && !e.touches)
              )
                return !1;
              if (i) {
                var l = function (t) {
                  var i = t.target;
                  return (
                    i === s ||
                    s.contains(i) ||
                    (e.composed && e.composedPath().shift() === s)
                  );
                };
                if ("touchstart" === e.type) {
                  var c = Array.prototype.filter.call(e.touches, l);
                  if (c.length > 1) return !1;
                  (a = c[0].pageX), (o = c[0].pageY);
                } else {
                  var d = Array.prototype.find.call(e.changedTouches, l);
                  if (!d) return !1;
                  (a = d.pageX), (o = d.pageY);
                }
              }
              return (
                (t = t || v($)),
                (n || r) && ((a = e.clientX + t.x), (o = e.clientY + t.y)),
                (e.pageOffset = t),
                (e.points = [a, o]),
                (e.cursor = n || r),
                e
              );
            }
            function ne(e) {
              var t = (100 * (e - l(c, s.ort))) / te();
              return (t = u(t)), s.dir ? 100 - t : t;
            }
            function ae(e) {
              var t = 100,
                s = !1;
              return (
                f.forEach(function (i, n) {
                  if (!R(n)) {
                    var r = O[n],
                      a = Math.abs(r - e);
                    (a < t || (a <= t && e > r) || (100 === a && 100 === t)) &&
                      ((s = n), (t = a));
                  }
                }),
                s
              );
            }
            function oe(e, t) {
              "mouseout" === e.type &&
                "HTML" === e.target.nodeName &&
                null === e.relatedTarget &&
                ce(e, t);
            }
            function le(e, t) {
              if (
                -1 === navigator.appVersion.indexOf("MSIE 9") &&
                0 === e.buttons &&
                0 !== t.buttonsProperty
              )
                return ce(e, t);
              var i = (s.dir ? -1 : 1) * (e.calcPoint - t.startCalcPoint);
              Se(
                i > 0,
                (100 * i) / t.baseSize,
                t.locations,
                t.handleNumbers,
                t.connect
              );
            }
            function ce(e, t) {
              t.handle && (m(t.handle, s.cssClasses.active), (P -= 1)),
                t.listeners.forEach(function (e) {
                  B.removeEventListener(e[0], e[1]);
                }),
                0 === P &&
                  (m(_, s.cssClasses.drag),
                  Ee(),
                  e.cursor &&
                    ((N.style.cursor = ""),
                    N.removeEventListener("selectstart", r))),
                t.handleNumbers.forEach(function (e) {
                  be("change", e), be("set", e), be("end", e);
                });
            }
            function de(e, t) {
              if (!t.handleNumbers.some(R)) {
                var i;
                1 === t.handleNumbers.length &&
                  ((i = f[t.handleNumbers[0]].children[0]),
                  (P += 1),
                  h(i, s.cssClasses.active)),
                  e.stopPropagation();
                var n = [],
                  a = se(E.move, B, le, {
                    target: e.target,
                    handle: i,
                    connect: t.connect,
                    listeners: n,
                    startCalcPoint: e.calcPoint,
                    baseSize: te(),
                    pageOffset: e.pageOffset,
                    handleNumbers: t.handleNumbers,
                    buttonsProperty: e.buttons,
                    locations: O.slice(),
                  }),
                  o = se(E.end, B, ce, {
                    target: e.target,
                    handle: i,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  }),
                  l = se("mouseout", B, oe, {
                    target: e.target,
                    handle: i,
                    listeners: n,
                    doNotReject: !0,
                    handleNumbers: t.handleNumbers,
                  });
                n.push.apply(n, a.concat(o, l)),
                  e.cursor &&
                    ((N.style.cursor = getComputedStyle(e.target).cursor),
                    f.length > 1 && h(_, s.cssClasses.drag),
                    N.addEventListener("selectstart", r, !1)),
                  t.handleNumbers.forEach(function (e) {
                    be("start", e);
                  });
              }
            }
            function ue(e) {
              e.stopPropagation();
              var t = ne(e.calcPoint),
                i = ae(t);
              !1 !== i &&
                (s.events.snap || d(_, s.cssClasses.tap, s.animationDuration),
                Te(i, t, !0, !0),
                Ee(),
                be("slide", i, !0),
                be("update", i, !0),
                s.events.snap
                  ? de(e, { handleNumbers: [i] })
                  : (be("change", i, !0), be("set", i, !0)));
            }
            function pe(e) {
              var t = ne(e.calcPoint),
                s = A.getStep(t),
                i = A.fromStepping(s);
              Object.keys(M).forEach(function (e) {
                "hover" === e.split(".")[0] &&
                  M[e].forEach(function (e) {
                    e.call(Ie, i);
                  });
              });
            }
            function fe(e, t) {
              if (F() || R(t)) return !1;
              var i = ["Left", "Right"],
                n = ["Down", "Up"],
                r = ["PageDown", "PageUp"],
                a = ["Home", "End"];
              s.dir && !s.ort
                ? i.reverse()
                : s.ort && !s.dir && (n.reverse(), r.reverse());
              var o,
                l = e.key.replace("Arrow", ""),
                c = l === r[0],
                d = l === r[1],
                u = l === n[0] || l === i[0] || c,
                p = l === n[1] || l === i[1] || d,
                f = l === a[0],
                h = l === a[1];
              if (!(u || p || f || h)) return !0;
              if ((e.preventDefault(), p || u)) {
                var m = u ? 0 : 1,
                  g = $e(t)[m];
                if (null === g) return !1;
                !1 === g &&
                  (g = A.getDefaultStep(O[t], u, s.keyboardDefaultStep)),
                  (g *=
                    d || c ? s.keyboardPageMultiplier : s.keyboardMultiplier),
                  (g = Math.max(g, 1e-7)),
                  (g *= u ? -1 : 1),
                  (o = L[t] + g);
              } else
                o = h
                  ? s.spectrum.xVal[s.spectrum.xVal.length - 1]
                  : s.spectrum.xVal[0];
              return (
                Te(t, A.toStepping(o), !0, !0),
                be("slide", t),
                be("update", t),
                be("change", t),
                be("set", t),
                !1
              );
            }
            function he(e) {
              e.fixed ||
                f.forEach(function (e, t) {
                  se(E.start, e.children[0], de, { handleNumbers: [t] });
                }),
                e.tap && se(E.start, c, ue, {}),
                e.hover && se(E.move, c, pe, { hover: !0 }),
                e.drag &&
                  S.forEach(function (t, i) {
                    if (!1 !== t && 0 !== i && i !== S.length - 1) {
                      var n = f[i - 1],
                        r = f[i],
                        a = [t],
                        o = [n, r],
                        l = [i - 1, i];
                      h(t, s.cssClasses.draggable),
                        e.fixed &&
                          (a.push(n.children[0]), a.push(r.children[0])),
                        e.dragAll && ((o = f), (l = k)),
                        a.forEach(function (e) {
                          se(E.start, e, de, {
                            handles: o,
                            handleNumbers: l,
                            connect: t,
                          });
                        });
                    }
                  });
            }
            function me(e, t) {
              (M[e] = M[e] || []),
                M[e].push(t),
                "update" === e.split(".")[0] &&
                  f.forEach(function (e, t) {
                    be("update", t);
                  });
            }
            function ge(e) {
              return e === D.aria || e === D.tooltips;
            }
            function ve(e) {
              var t = e && e.split(".")[0],
                s = t ? e.substring(t.length) : e;
              Object.keys(M).forEach(function (e) {
                var i = e.split(".")[0],
                  n = e.substring(i.length);
                (t && t !== i) ||
                  (s && s !== n) ||
                  (ge(n) && s !== n) ||
                  delete M[e];
              });
            }
            function be(e, t, i) {
              Object.keys(M).forEach(function (n) {
                var r = n.split(".")[0];
                e === r &&
                  M[n].forEach(function (e) {
                    e.call(
                      Ie,
                      L.map(s.format.to),
                      t,
                      L.slice(),
                      i || !1,
                      O.slice(),
                      Ie
                    );
                  });
              });
            }
            function ye(e, t, i, n, r, a) {
              var o;
              return (
                f.length > 1 &&
                  !s.events.unconstrained &&
                  (n &&
                    t > 0 &&
                    ((o = A.getAbsoluteDistance(e[t - 1], s.margin, !1)),
                    (i = Math.max(i, o))),
                  r &&
                    t < f.length - 1 &&
                    ((o = A.getAbsoluteDistance(e[t + 1], s.margin, !0)),
                    (i = Math.min(i, o)))),
                f.length > 1 &&
                  s.limit &&
                  (n &&
                    t > 0 &&
                    ((o = A.getAbsoluteDistance(e[t - 1], s.limit, !1)),
                    (i = Math.min(i, o))),
                  r &&
                    t < f.length - 1 &&
                    ((o = A.getAbsoluteDistance(e[t + 1], s.limit, !0)),
                    (i = Math.max(i, o)))),
                s.padding &&
                  (0 === t &&
                    ((o = A.getAbsoluteDistance(0, s.padding[0], !1)),
                    (i = Math.max(i, o))),
                  t === f.length - 1 &&
                    ((o = A.getAbsoluteDistance(100, s.padding[1], !0)),
                    (i = Math.min(i, o)))),
                !((i = u((i = A.getStep(i)))) === e[t] && !a) && i
              );
            }
            function we(e, t) {
              var i = s.ort;
              return (i ? t : e) + ", " + (i ? e : t);
            }
            function Se(e, t, s, i, n) {
              var r = s.slice(),
                a = i[0],
                o = [!e, e],
                l = [e, !e];
              (i = i.slice()),
                e && i.reverse(),
                i.length > 1
                  ? i.forEach(function (e, s) {
                      var i = ye(r, e, r[e] + t, o[s], l[s], !1);
                      !1 === i ? (t = 0) : ((t = i - r[e]), (r[e] = i));
                    })
                  : (o = l = [!0]);
              var c = !1;
              i.forEach(function (e, i) {
                c = Te(e, s[e] + t, o[i], l[i]) || c;
              }),
                c &&
                  (i.forEach(function (e) {
                    be("update", e), be("slide", e);
                  }),
                  null != n && be("drag", a));
            }
            function xe(e, t) {
              return s.dir ? 100 - e - t : e;
            }
            function Ce(e, t) {
              (O[e] = t), (L[e] = A.fromStepping(t));
              var i = "translate(" + we(xe(t, 0) - I + "%", "0") + ")";
              (f[e].style[s.transformRule] = i), _e(e), _e(e + 1);
            }
            function Ee() {
              k.forEach(function (e) {
                var t = O[e] > 50 ? -1 : 1,
                  s = 3 + (f.length + t * e);
                f[e].style.zIndex = String(s);
              });
            }
            function Te(e, t, s, i, n) {
              return (
                n || (t = ye(O, e, t, s, i, !1)), !1 !== t && (Ce(e, t), !0)
              );
            }
            function _e(e) {
              if (S[e]) {
                var t = 0,
                  i = 100;
                0 !== e && (t = O[e - 1]), e !== S.length - 1 && (i = O[e]);
                var n = i - t,
                  r = "translate(" + we(xe(t, n) + "%", "0") + ")",
                  a = "scale(" + we(n / 100, "1") + ")";
                S[e].style[s.transformRule] = r + " " + a;
              }
            }
            function Ae(e, t) {
              return null === e || !1 === e || void 0 === e
                ? O[t]
                : ("number" == typeof e && (e = String(e)),
                  !1 !== (e = s.format.from(e)) && (e = A.toStepping(e)),
                  !1 === e || isNaN(e) ? O[t] : e);
            }
            function Le(e, t, i) {
              var n = p(e),
                r = void 0 === O[0];
              (t = void 0 === t || t),
                s.animate && !r && d(_, s.cssClasses.tap, s.animationDuration),
                k.forEach(function (e) {
                  Te(e, Ae(n[e], e), !0, !1, i);
                });
              var a = 1 === k.length ? 0 : 1;
              if (r && A.hasNoSize() && ((i = !0), (O[0] = 0), k.length > 1)) {
                var o = 100 / (k.length - 1);
                k.forEach(function (e) {
                  O[e] = e * o;
                });
              }
              for (; a < k.length; ++a)
                k.forEach(function (e) {
                  Te(e, O[e], !0, !0, i);
                });
              Ee(),
                k.forEach(function (e) {
                  be("update", e), null !== n[e] && t && be("set", e);
                });
            }
            function Oe(e) {
              Le(s.start, e);
            }
            function ke(e, t, s, i) {
              if (!((e = Number(e)) >= 0 && e < k.length))
                throw new Error("noUiSlider: invalid handle number, got: " + e);
              Te(e, Ae(t, e), !0, !0, i), be("update", e), s && be("set", e);
            }
            function Pe(e) {
              if ((void 0 === e && (e = !1), e))
                return 1 === L.length ? L[0] : L.slice(0);
              var t = L.map(s.format.to);
              return 1 === t.length ? t[0] : t;
            }
            function Me() {
              for (
                ve(D.aria),
                  ve(D.tooltips),
                  Object.keys(s.cssClasses).forEach(function (e) {
                    m(_, s.cssClasses[e]);
                  });
                _.firstChild;

              )
                _.removeChild(_.firstChild);
              delete _.noUiSlider;
            }
            function $e(e) {
              var t = O[e],
                i = A.getNearbySteps(t),
                n = L[e],
                r = i.thisStep.step,
                a = null;
              if (s.snap)
                return [
                  n - i.stepBefore.startValue || null,
                  i.stepAfter.startValue - n || null,
                ];
              !1 !== r &&
                n + r > i.stepAfter.startValue &&
                (r = i.stepAfter.startValue - n),
                (a =
                  n > i.thisStep.startValue
                    ? i.thisStep.step
                    : !1 !== i.stepBefore.step && n - i.stepBefore.highestStep),
                100 === t ? (r = null) : 0 === t && (a = null);
              var o = A.countStepDecimals();
              return (
                null !== r && !1 !== r && (r = Number(r.toFixed(o))),
                null !== a && !1 !== a && (a = Number(a.toFixed(o))),
                [a, r]
              );
            }
            function De() {
              return k.map($e);
            }
            function Be(e, t) {
              var i = Pe(),
                r = [
                  "margin",
                  "limit",
                  "padding",
                  "range",
                  "animate",
                  "snap",
                  "step",
                  "format",
                  "pips",
                  "tooltips",
                ];
              r.forEach(function (t) {
                void 0 !== e[t] && (o[t] = e[t]);
              });
              var a = re(o);
              r.forEach(function (t) {
                void 0 !== e[t] && (s[t] = a[t]);
              }),
                (A = a.spectrum),
                (s.margin = a.margin),
                (s.limit = a.limit),
                (s.padding = a.padding),
                s.pips ? ee(s.pips) : J(),
                s.tooltips ? U() : W(),
                (O = []),
                Le(n(e.start) ? e.start : i, t);
            }
            function Ne() {
              (c = z(_)),
                V(s.connect, c),
                he(s.events),
                Le(s.start),
                s.pips && ee(s.pips),
                s.tooltips && U(),
                X();
            }
            Ne();
            var Ie = {
              destroy: Me,
              steps: De,
              on: me,
              off: ve,
              get: Pe,
              set: Le,
              setHandle: ke,
              reset: Oe,
              __moveHandles: function (e, t, s) {
                Se(e, t, O, s);
              },
              options: o,
              updateOptions: Be,
              target: _,
              removePips: J,
              removeTooltips: W,
              getPositions: function () {
                return O.slice();
              },
              getTooltips: function () {
                return C;
              },
              getOrigins: function () {
                return f;
              },
              pips: ee,
            };
            return Ie;
          }
          function oe(e, t) {
            if (!e || !e.nodeName)
              throw new Error(
                "noUiSlider: create requires a single element, got: " + e
              );
            if (e.noUiSlider)
              throw new Error("noUiSlider: Slider was already initialized.");
            var s = ae(e, re(t), t);
            return (e.noUiSlider = s), s;
          }
          var le = { __spectrum: P, cssClasses: $, create: oe };
          (e.create = oe),
            (e.cssClasses = $),
            (e.default = le),
            Object.defineProperty(e, "__esModule", { value: !0 });
        })(t);
      },
    },
    t = {};
  function s(i) {
    var n = t[i];
    if (void 0 !== n) return n.exports;
    var r = (t[i] = { exports: {} });
    return e[i].call(r.exports, r, r.exports, s), r.exports;
  }
  (() => {
    "use strict";
    function e(e) {
      this.type = e;
    }
    (e.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          s = t.dataset.da.trim().split(","),
          i = {};
        (i.element = t),
          (i.parent = t.parentNode),
          (i.destination = document.querySelector(s[0].trim())),
          (i.breakpoint = s[1] ? s[1].trim() : "767"),
          (i.place = s[2] ? s[2].trim() : "last"),
          (i.index = this.indexInParent(i.parent, i.element)),
          this.оbjects.push(i);
      }
      this.arraySort(this.оbjects),
        (this.mediaQueries = Array.prototype.map.call(
          this.оbjects,
          function (e) {
            return (
              "(" +
              this.type +
              "-width: " +
              e.breakpoint +
              "px)," +
              e.breakpoint
            );
          },
          this
        )),
        (this.mediaQueries = Array.prototype.filter.call(
          this.mediaQueries,
          function (e, t, s) {
            return Array.prototype.indexOf.call(s, e) === t;
          }
        ));
      for (let t = 0; t < this.mediaQueries.length; t++) {
        const s = this.mediaQueries[t],
          i = String.prototype.split.call(s, ","),
          n = window.matchMedia(i[0]),
          r = i[1],
          a = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === r;
          });
        n.addListener(function () {
          e.mediaHandler(n, a);
        }),
          this.mediaHandler(n, a);
      }
    }),
      (e.prototype.mediaHandler = function (e, t) {
        if (e.matches)
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            (s.index = this.indexInParent(s.parent, s.element)),
              this.moveTo(s.place, s.element, s.destination);
          }
        else
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            s.element.classList.contains(this.daClassname) &&
              this.moveBack(s.parent, s.element, s.index);
          }
      }),
      (e.prototype.moveTo = function (e, t, s) {
        t.classList.add(this.daClassname),
          "last" === e || e >= s.children.length
            ? s.insertAdjacentElement("beforeend", t)
            : "first" !== e
            ? s.children[e].insertAdjacentElement("beforebegin", t)
            : s.insertAdjacentElement("afterbegin", t);
      }),
      (e.prototype.moveBack = function (e, t, s) {
        t.classList.remove(this.daClassname),
          void 0 !== e.children[s]
            ? e.children[s].insertAdjacentElement("beforebegin", t)
            : e.insertAdjacentElement("beforeend", t);
      }),
      (e.prototype.indexInParent = function (e, t) {
        const s = Array.prototype.slice.call(e.children);
        return Array.prototype.indexOf.call(s, t);
      }),
      (e.prototype.arraySort = function (e) {
        "min" === this.type
          ? Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? -1
                  : "last" === e.place || "first" === t.place
                  ? 1
                  : e.place - t.place
                : e.breakpoint - t.breakpoint;
            })
          : Array.prototype.sort.call(e, function (e, t) {
              return e.breakpoint === t.breakpoint
                ? e.place === t.place
                  ? 0
                  : "first" === e.place || "last" === t.place
                  ? 1
                  : "last" === e.place || "first" === t.place
                  ? -1
                  : t.place - e.place
                : t.breakpoint - e.breakpoint;
            });
      });
    var t;
    new e("max").init(),
      (t = function () {
        var e = [
          "decimals",
          "thousand",
          "mark",
          "prefix",
          "suffix",
          "encoder",
          "decoder",
          "negativeBefore",
          "negative",
          "edit",
          "undo",
        ];
        function t(e) {
          return e.split("").reverse().join("");
        }
        function s(e, t) {
          return e.substring(0, t.length) === t;
        }
        function i(e, t, s) {
          if ((e[t] || e[s]) && e[t] === e[s]) throw new Error(t);
        }
        function n(e) {
          return "number" == typeof e && isFinite(e);
        }
        function r(e, s, i, r, a, o, l, c, d, u, p, f) {
          var h,
            m,
            g,
            v = f,
            b = "",
            y = "";
          return (
            o && (f = o(f)),
            !!n(f) &&
              (!1 !== e && 0 === parseFloat(f.toFixed(e)) && (f = 0),
              f < 0 && ((h = !0), (f = Math.abs(f))),
              !1 !== e &&
                (f = (function (e, t) {
                  return (
                    (e = e.toString().split("e")),
                    (+(
                      (e = (e = Math.round(
                        +(e[0] + "e" + (e[1] ? +e[1] + t : t))
                      ))
                        .toString()
                        .split("e"))[0] +
                      "e" +
                      (e[1] ? e[1] - t : -t)
                    )).toFixed(t)
                  );
                })(f, e)),
              -1 !== (f = f.toString()).indexOf(".")
                ? ((g = (m = f.split("."))[0]), i && (b = i + m[1]))
                : (g = f),
              s && (g = t((g = t(g).match(/.{1,3}/g)).join(t(s)))),
              h && c && (y += c),
              r && (y += r),
              h && d && (y += d),
              (y += g),
              (y += b),
              a && (y += a),
              u && (y = u(y, v)),
              y)
          );
        }
        function a(e, t, i, r, a, o, l, c, d, u, p, f) {
          var h,
            m = "";
          return (
            p && (f = p(f)),
            !(!f || "string" != typeof f) &&
              (c && s(f, c) && ((f = f.replace(c, "")), (h = !0)),
              r && s(f, r) && (f = f.replace(r, "")),
              d && s(f, d) && ((f = f.replace(d, "")), (h = !0)),
              a &&
                (function (e, t) {
                  return e.slice(-1 * t.length) === t;
                })(f, a) &&
                (f = f.slice(0, -1 * a.length)),
              t && (f = f.split(t).join("")),
              i && (f = f.replace(i, ".")),
              h && (m += "-"),
              "" !== (m = (m += f).replace(/[^0-9\.\-.]/g, "")) &&
                ((m = Number(m)), l && (m = l(m)), !!n(m) && m))
          );
        }
        function o(t, s, i) {
          var n,
            r = [];
          for (n = 0; n < e.length; n += 1) r.push(t[e[n]]);
          return r.push(i), s.apply("", r);
        }
        return function t(s) {
          if (!(this instanceof t)) return new t(s);
          "object" == typeof s &&
            ((s = (function (t) {
              var s,
                n,
                r,
                a = {};
              for (
                void 0 === t.suffix && (t.suffix = t.postfix), s = 0;
                s < e.length;
                s += 1
              )
                if (void 0 === (r = t[(n = e[s])]))
                  "negative" !== n || a.negativeBefore
                    ? "mark" === n && "." !== a.thousand
                      ? (a[n] = ".")
                      : (a[n] = !1)
                    : (a[n] = "-");
                else if ("decimals" === n) {
                  if (!(0 <= r && r < 8)) throw new Error(n);
                  a[n] = r;
                } else if (
                  "encoder" === n ||
                  "decoder" === n ||
                  "edit" === n ||
                  "undo" === n
                ) {
                  if ("function" != typeof r) throw new Error(n);
                  a[n] = r;
                } else {
                  if ("string" != typeof r) throw new Error(n);
                  a[n] = r;
                }
              return (
                i(a, "mark", "thousand"),
                i(a, "prefix", "negative"),
                i(a, "prefix", "negativeBefore"),
                a
              );
            })(s)),
            (this.to = function (e) {
              return o(s, r, e);
            }),
            (this.from = function (e) {
              return o(s, a, e);
            }));
        };
      }),
      "function" == typeof define && define.amd
        ? define([], t)
        : "object" == typeof exports
        ? (module.exports = t())
        : (window.wNumb = t());
    class i {
      constructor(e) {
        let t = {
          logging: !0,
          init: !0,
          attributeOpenButton: "data-popup",
          attributeCloseButton: "data-close",
          fixElementSelector: "[data-lp]",
          youtubeAttribute: "data-youtube",
          youtubePlaceAttribute: "data-youtube-place",
          setAutoplayYoutube: !0,
          classes: {
            popup: "popup",
            popupContent: "popup__content",
            popupActive: "popup_show",
            bodyActive: "popup-show",
          },
          focusCatch: !0,
          closeEsc: !0,
          bodyLock: !0,
          bodyLockDelay: 500,
          hashSettings: { location: !0, goHash: !0 },
          on: {
            beforeOpen: function () {},
            afterOpen: function () {},
            beforeClose: function () {},
            afterClose: function () {},
          },
        };
        (this.isOpen = !1),
          (this.targetOpen = { selector: !1, element: !1 }),
          (this.previousOpen = { selector: !1, element: !1 }),
          (this.lastClosed = { selector: !1, element: !1 }),
          (this._dataValue = !1),
          (this.hash = !1),
          (this._reopen = !1),
          (this._selectorOpen = !1),
          (this.lastFocusEl = !1),
          (this._focusEl = [
            "a[href]",
            'input:not([disabled]):not([type="hidden"]):not([aria-hidden])',
            "button:not([disabled]):not([aria-hidden])",
            "select:not([disabled]):not([aria-hidden])",
            "textarea:not([disabled]):not([aria-hidden])",
            "area[href]",
            "iframe",
            "object",
            "embed",
            "[contenteditable]",
            '[tabindex]:not([tabindex^="-"])',
          ]),
          (this.options = {
            ...t,
            ...e,
            classes: { ...t.classes, ...e?.classes },
            hashSettings: { ...t.hashSettings, ...e?.hashSettings },
            on: { ...t.on, ...e?.on },
          }),
          this.options.init && this.initPopups();
      }
      initPopups() {
        this.popupLogging("Проснулся"), this.eventsPopup();
      }
      eventsPopup() {
        document.addEventListener(
          "click",
          function (e) {
            const t = e.target.closest(`[${this.options.attributeOpenButton}]`);
            if (t)
              return (
                e.preventDefault(),
                (this._dataValue = t.getAttribute(
                  this.options.attributeOpenButton
                )
                  ? t.getAttribute(this.options.attributeOpenButton)
                  : "error"),
                "error" !== this._dataValue
                  ? (this.isOpen || (this.lastFocusEl = t),
                    (this.targetOpen.selector = `${this._dataValue}`),
                    (this._selectorOpen = !0),
                    void this.open())
                  : void this.popupLogging(
                      `Ой ой, не заполнен атрибут у ${t.classList}`
                    )
              );
            return e.target.closest(`[${this.options.attributeCloseButton}]`) ||
              (!e.target.closest(`.${this.options.classes.popupContent}`) &&
                this.isOpen)
              ? (e.preventDefault(), void this.close())
              : void 0;
          }.bind(this)
        ),
          document.addEventListener(
            "keydown",
            function (e) {
              if (
                this.options.closeEsc &&
                27 == e.which &&
                "Escape" === e.code &&
                this.isOpen
              )
                return e.preventDefault(), void this.close();
              this.options.focusCatch &&
                9 == e.which &&
                this.isOpen &&
                this._focusCatch(e);
            }.bind(this)
          ),
          document.querySelector("form[data-ajax],form[data-dev]") &&
            document.addEventListener(
              "formSent",
              function (e) {
                const t = e.detail.form.dataset.popupMessage;
                t && this.open(t);
              }.bind(this)
            ),
          this.options.hashSettings.goHash &&
            (window.addEventListener(
              "hashchange",
              function () {
                window.location.hash
                  ? this._openToHash()
                  : this.close(this.targetOpen.selector);
              }.bind(this)
            ),
            window.addEventListener(
              "load",
              function () {
                window.location.hash && this._openToHash();
              }.bind(this)
            ));
      }
      open(e) {
        if (
          (e &&
            "string" == typeof e &&
            "" !== e.trim() &&
            ((this.targetOpen.selector = e), (this._selectorOpen = !0)),
          this.isOpen && ((this._reopen = !0), this.close()),
          this._selectorOpen ||
            (this.targetOpen.selector = this.lastClosed.selector),
          this._reopen || (this.previousActiveElement = document.activeElement),
          (this.targetOpen.element = document.querySelector(
            this.targetOpen.selector
          )),
          this.targetOpen.element)
        ) {
          if (
            this.targetOpen.element.hasAttribute(this.options.youtubeAttribute)
          ) {
            const e = `https://www.youtube.com/embed/${this.targetOpen.element.getAttribute(
                this.options.youtubeAttribute
              )}?rel=0&showinfo=0&autoplay=1`,
              t = document.createElement("iframe");
            t.setAttribute("allowfullscreen", "");
            const s = this.options.setAutoplayYoutube ? "autoplay;" : "";
            t.setAttribute("allow", `${s}; encrypted-media`),
              t.setAttribute("src", e),
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
                this.targetOpen.element
                  .querySelector(`[${this.options.youtubePlaceAttribute}]`)
                  .appendChild(t);
          }
          this.options.hashSettings.location &&
            (this._getHash(), this._setHash()),
            this.options.on.beforeOpen(this),
            this.targetOpen.element.classList.add(
              this.options.classes.popupActive
            ),
            document.body.classList.add(this.options.classes.bodyActive),
            this._reopen ? (this._reopen = !1) : l(),
            this.targetOpen.element.setAttribute("aria-hidden", "false"),
            (this.previousOpen.selector = this.targetOpen.selector),
            (this.previousOpen.element = this.targetOpen.element),
            (this._selectorOpen = !1),
            (this.isOpen = !0),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            document.dispatchEvent(
              new CustomEvent("afterPopupOpen", { detail: { popup: this } })
            ),
            this.popupLogging("Открыл попап");
        } else
          this.popupLogging(
            "Ой ой, такого попапа нет. Проверьте корректность ввода. "
          );
      }
      close(e) {
        e &&
          "string" == typeof e &&
          "" !== e.trim() &&
          (this.previousOpen.selector = e),
          this.isOpen &&
            o &&
            (this.options.on.beforeClose(this),
            this.targetOpen.element.hasAttribute(
              this.options.youtubeAttribute
            ) &&
              this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ) &&
              (this.targetOpen.element.querySelector(
                `[${this.options.youtubePlaceAttribute}]`
              ).innerHTML = ""),
            this.previousOpen.element.classList.remove(
              this.options.classes.popupActive
            ),
            this.previousOpen.element.setAttribute("aria-hidden", "true"),
            this._reopen ||
              (document.body.classList.remove(this.options.classes.bodyActive),
              l(),
              (this.isOpen = !1)),
            this._removeHash(),
            this._selectorOpen &&
              ((this.lastClosed.selector = this.previousOpen.selector),
              (this.lastClosed.element = this.previousOpen.element)),
            this.options.on.afterClose(this),
            setTimeout(() => {
              this._focusTrap();
            }, 50),
            this.popupLogging("Закрыл попап"));
      }
      _getHash() {
        this.options.hashSettings.location &&
          (this.hash = this.targetOpen.selector.includes("#")
            ? this.targetOpen.selector
            : this.targetOpen.selector.replace(".", "#"));
      }
      _openToHash() {
        let e = document.querySelector(
          `.${window.location.hash.replace("#", "")}`
        )
          ? `.${window.location.hash.replace("#", "")}`
          : document.querySelector(`${window.location.hash}`)
          ? `${window.location.hash}`
          : null;
        document.querySelector(
          `[${this.options.attributeOpenButton}="${e}"]`
        ) &&
          e &&
          this.open(e);
      }
      _setHash() {
        history.pushState("", "", this.hash);
      }
      _removeHash() {
        history.pushState("", "", window.location.href.split("#")[0]);
      }
      _focusCatch(e) {
        const t = this.targetOpen.element.querySelectorAll(this._focusEl),
          s = Array.prototype.slice.call(t),
          i = s.indexOf(document.activeElement);
        e.shiftKey && 0 === i && (s[s.length - 1].focus(), e.preventDefault()),
          e.shiftKey ||
            i !== s.length - 1 ||
            (s[0].focus(), e.preventDefault());
      }
      _focusTrap() {
        const e = this.previousOpen.element.querySelectorAll(this._focusEl);
        !this.isOpen && this.lastFocusEl
          ? this.lastFocusEl.focus()
          : e[0].focus();
      }
      popupLogging(e) {
        this.options.logging && u(`[Попапос]: ${e}`);
      }
    }
    let n = (e, t = 500, s = 0) => {
        e.classList.contains("_slide") ||
          (e.classList.add("_slide"),
          (e.style.transitionProperty = "height, margin, padding"),
          (e.style.transitionDuration = t + "ms"),
          (e.style.height = `${e.offsetHeight}px`),
          e.offsetHeight,
          (e.style.overflow = "hidden"),
          (e.style.height = s ? `${s}px` : "0px"),
          (e.style.paddingTop = 0),
          (e.style.paddingBottom = 0),
          (e.style.marginTop = 0),
          (e.style.marginBottom = 0),
          window.setTimeout(() => {
            (e.hidden = !s),
              !s && e.style.removeProperty("height"),
              e.style.removeProperty("padding-top"),
              e.style.removeProperty("padding-bottom"),
              e.style.removeProperty("margin-top"),
              e.style.removeProperty("margin-bottom"),
              !s && e.style.removeProperty("overflow"),
              e.style.removeProperty("transition-duration"),
              e.style.removeProperty("transition-property"),
              e.classList.remove("_slide");
          }, t));
      },
      r = (e, t = 500, s = 0) => {
        if (!e.classList.contains("_slide")) {
          e.classList.add("_slide"),
            (e.hidden = !e.hidden && null),
            s && e.style.removeProperty("height");
          let i = e.offsetHeight;
          (e.style.overflow = "hidden"),
            (e.style.height = s ? `${s}px` : "0px"),
            (e.style.paddingTop = 0),
            (e.style.paddingBottom = 0),
            (e.style.marginTop = 0),
            (e.style.marginBottom = 0),
            e.offsetHeight,
            (e.style.transitionProperty = "height, margin, padding"),
            (e.style.transitionDuration = t + "ms"),
            (e.style.height = i + "px"),
            e.style.removeProperty("padding-top"),
            e.style.removeProperty("padding-bottom"),
            e.style.removeProperty("margin-top"),
            e.style.removeProperty("margin-bottom"),
            window.setTimeout(() => {
              e.style.removeProperty("height"),
                e.style.removeProperty("overflow"),
                e.style.removeProperty("transition-duration"),
                e.style.removeProperty("transition-property"),
                e.classList.remove("_slide");
            }, t);
        }
      },
      a = (e, t = 500) => (e.hidden ? r(e, t) : n(e, t)),
      o = !0,
      l = (e = 500) => {
        document.documentElement.classList.contains("lock") ? c(e) : d(e);
      },
      c = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let s = document.querySelectorAll("[data-lp]");
          setTimeout(() => {
            for (let e = 0; e < s.length; e++) {
              s[e].style.paddingRight = "0px";
            }
            (t.style.paddingRight = "0px"),
              document.documentElement.classList.remove("lock");
          }, e),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      },
      d = (e = 500) => {
        let t = document.querySelector("body");
        if (o) {
          let s = document.querySelectorAll("[data-lp]");
          for (let e = 0; e < s.length; e++) {
            s[e].style.paddingRight =
              window.innerWidth -
              document.querySelector(".wrapper").offsetWidth +
              "px";
          }
          (t.style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px"),
            document.documentElement.classList.add("lock"),
            (o = !1),
            setTimeout(function () {
              o = !0;
            }, e);
        }
      };
    function u(e) {
      setTimeout(() => {
        window.FLS && console.log(e);
      }, 0);
    }
    function p(e, t) {
      const s = Array.from(e).filter(function (e, s, i) {
        if (e.dataset[t]) return e.dataset[t].split(",")[0];
      });
      if (s.length) {
        const e = [];
        s.forEach((s) => {
          const i = {},
            n = s.dataset[t].split(",");
          (i.value = n[0]),
            (i.type = n[1] ? n[1].trim() : "max"),
            (i.item = s),
            e.push(i);
        });
        let i = e.map(function (e) {
          return (
            "(" +
            e.type +
            "-width: " +
            e.value +
            "px)," +
            e.value +
            "," +
            e.type
          );
        });
        i = (function (e) {
          return e.filter(function (e, t, s) {
            return s.indexOf(e) === t;
          });
        })(i);
        const n = [];
        if (i.length)
          return (
            i.forEach((t) => {
              const s = t.split(","),
                i = s[1],
                r = s[2],
                a = window.matchMedia(s[0]),
                o = e.filter(function (e) {
                  if (e.value === i && e.type === r) return !0;
                });
              n.push({ itemsArray: o, matchMedia: a });
            }),
            n
          );
      }
    }
    const f = document.querySelector(".header");
    new IntersectionObserver(function (e, t) {
      e[0].isIntersecting
        ? f.classList.remove("_scroll")
        : f.classList.add("_scroll");
    }).observe(f);
    let h = (e, t = !1, s = 500, i = 0) => {
      const n = document.querySelector(e);
      if (n) {
        let r = "",
          a = 0;
        t &&
          ((r = "header.header"), (a = document.querySelector(r).offsetHeight));
        let o = {
          speedAsDuration: !0,
          speed: s,
          header: r,
          offset: i,
          easing: "easeOutQuad",
        };
        if (
          (document.documentElement.classList.contains("menu-open") &&
            (c(), document.documentElement.classList.remove("menu-open")),
          "undefined" != typeof SmoothScroll)
        )
          new SmoothScroll().animateScroll(n, "", o);
        else {
          let e = n.getBoundingClientRect().top + scrollY;
          window.scrollTo({ top: a ? e - a : e, behavior: "smooth" });
        }
        u(`[gotoBlock]: Юхуу...едем к ${e}`);
      } else u(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
    };
    class m {
      constructor(e, t = null) {
        if (
          ((this.config = Object.assign({ init: !0, logging: !0 }, e)),
          (this.selectClasses = {
            classSelect: "select",
            classSelectBody: "select__body",
            classSelectTitle: "select__title",
            classSelectValue: "select__value",
            classSelectLabel: "select__label",
            classSelectInput: "select__input",
            classSelectText: "select__text",
            classSelectLink: "select__link",
            classSelectOptions: "select__options",
            classSelectOptionsScroll: "select__scroll",
            classSelectOption: "select__option",
            classSelectContent: "select__content",
            classSelectRow: "select__row",
            classSelectData: "select__asset",
            classSelectDisabled: "_select-disabled",
            classSelectTag: "_select-tag",
            classSelectOpen: "_select-open",
            classSelectActive: "_select-active",
            classSelectFocus: "_select-focus",
            classSelectMultiple: "_select-multiple",
            classSelectCheckBox: "_select-checkbox",
            classSelectOptionSelected: "_select-selected",
          }),
          (this._this = this),
          this.config.init)
        ) {
          const e = t
            ? document.querySelectorAll(t)
            : document.querySelectorAll("select");
          e.length
            ? (this.selectsInit(e),
              this.setLogging(`Проснулся, построил селектов: (${e.length})`))
            : this.setLogging("Сплю, нет ни одного select zzZZZzZZz");
        }
      }
      getSelectClass(e) {
        return `.${e}`;
      }
      getSelectElement(e, t) {
        return {
          originalSelect: e.querySelector("select"),
          selectElement: e.querySelector(this.getSelectClass(t)),
        };
      }
      selectsInit(e) {
        e.forEach((e, t) => {
          this.selectInit(e, t + 1);
        }),
          document.addEventListener(
            "click",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "keydown",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusin",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          ),
          document.addEventListener(
            "focusout",
            function (e) {
              this.selectsActions(e);
            }.bind(this)
          );
      }
      selectInit(e, t) {
        const s = this;
        let i = document.createElement("div");
        if (
          (i.classList.add(this.selectClasses.classSelect),
          e.parentNode.insertBefore(i, e),
          i.appendChild(e),
          (e.hidden = !0),
          t && (e.dataset.id = t),
          i.insertAdjacentHTML(
            "beforeend",
            `<div class="${this.selectClasses.classSelectBody}"><div hidden class="${this.selectClasses.classSelectOptions}"></div></div>`
          ),
          this.selectBuild(e),
          this.getSelectPlaceholder(e) &&
            ((e.dataset.placeholder = this.getSelectPlaceholder(e).value),
            this.getSelectPlaceholder(e).label.show))
        ) {
          this.getSelectElement(
            i,
            this.selectClasses.classSelectTitle
          ).selectElement.insertAdjacentHTML(
            "afterbegin",
            `<span class="${this.selectClasses.classSelectLabel}">${
              this.getSelectPlaceholder(e).label.text
                ? this.getSelectPlaceholder(e).label.text
                : this.getSelectPlaceholder(e).value
            }</span>`
          );
        }
        (e.dataset.speed = e.dataset.speed ? e.dataset.speed : "150"),
          e.addEventListener("change", function (e) {
            s.selectChange(e);
          });
      }
      selectBuild(e) {
        const t = e.parentElement;
        (t.dataset.id = e.dataset.id),
          t.classList.add(
            e.getAttribute("class") ? `select_${e.getAttribute("class")}` : ""
          ),
          e.multiple
            ? t.classList.add(this.selectClasses.classSelectMultiple)
            : t.classList.remove(this.selectClasses.classSelectMultiple),
          e.hasAttribute("data-checkbox") && e.multiple
            ? t.classList.add(this.selectClasses.classSelectCheckBox)
            : t.classList.remove(this.selectClasses.classSelectCheckBox),
          this.setSelectTitleValue(t, e),
          this.setOptions(t, e),
          e.hasAttribute("data-search") && this.searchActions(t),
          e.hasAttribute("data-open") && this.selectAction(t),
          this.selectDisabled(t, e);
      }
      selectsActions(e) {
        const t = e.target,
          s = e.type;
        if (
          t.closest(this.getSelectClass(this.selectClasses.classSelect)) ||
          t.closest(this.getSelectClass(this.selectClasses.classSelectTag))
        ) {
          const i = t.closest(".select")
              ? t.closest(".select")
              : document.querySelector(
                  `.${this.selectClasses.classSelect}[data-id="${
                    t.closest(
                      this.getSelectClass(this.selectClasses.classSelectTag)
                    ).dataset.selectId
                  }"]`
                ),
            n = this.getSelectElement(i).originalSelect;
          if ("click" === s) {
            if (!n.disabled)
              if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTag)
                )
              ) {
                const e = t.closest(
                    this.getSelectClass(this.selectClasses.classSelectTag)
                  ),
                  s = document.querySelector(
                    `.${this.selectClasses.classSelect}[data-id="${e.dataset.selectId}"] .select__option[data-value="${e.dataset.value}"]`
                  );
                this.optionAction(i, n, s);
              } else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectTitle)
                )
              )
                this.selectAction(i);
              else if (
                t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                )
              ) {
                const e = t.closest(
                  this.getSelectClass(this.selectClasses.classSelectOption)
                );
                this.optionAction(i, n, e);
              }
          } else
            "focusin" === s || "focusout" === s
              ? t.closest(
                  this.getSelectClass(this.selectClasses.classSelect)
                ) &&
                ("focusin" === s
                  ? i.classList.add(this.selectClasses.classSelectFocus)
                  : i.classList.remove(this.selectClasses.classSelectFocus))
              : "keydown" === s && "Escape" === e.code && this.selectsСlose();
        } else this.selectsСlose();
      }
      selectsСlose() {
        const e = document.querySelectorAll(
          `${this.getSelectClass(
            this.selectClasses.classSelect
          )}${this.getSelectClass(this.selectClasses.classSelectOpen)}`
        );
        e.length &&
          e.forEach((e) => {
            this.selectAction(e);
          });
      }
      selectAction(e) {
        const t = this.getSelectElement(e).originalSelect,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement;
        s.classList.contains("_slide") ||
          (e.classList.toggle(this.selectClasses.classSelectOpen),
          a(s, t.dataset.speed));
      }
      setSelectTitleValue(e, t) {
        const s = this.getSelectElement(
            e,
            this.selectClasses.classSelectBody
          ).selectElement,
          i = this.getSelectElement(
            e,
            this.selectClasses.classSelectTitle
          ).selectElement;
        i && i.remove(),
          s.insertAdjacentHTML("afterbegin", this.getSelectTitleValue(e, t));
      }
      getSelectTitleValue(e, t) {
        let s = this.getSelectedOptionsData(t, 2).html;
        if (
          (t.multiple &&
            t.hasAttribute("data-tags") &&
            ((s = this.getSelectedOptionsData(t)
              .elements.map(
                (t) =>
                  `<span role="button" data-select-id="${
                    e.dataset.id
                  }" data-value="${
                    t.value
                  }" class="_select-tag">${this.getSelectElementContent(
                    t
                  )}</span>`
              )
              .join("")),
            t.dataset.tags &&
              document.querySelector(t.dataset.tags) &&
              ((document.querySelector(t.dataset.tags).innerHTML = s),
              t.hasAttribute("data-search") && (s = !1))),
          (s = s.length ? s : t.dataset.placeholder),
          this.getSelectedOptionsData(t).values.length
            ? e.classList.add(this.selectClasses.classSelectActive)
            : e.classList.remove(this.selectClasses.classSelectActive),
          t.hasAttribute("data-search"))
        )
          return `<div class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><input autocomplete="off" type="text" placeholder="${s}" data-placeholder="${s}" class="${this.selectClasses.classSelectInput}"></span></div>`;
        {
          const e =
            this.getSelectedOptionsData(t).elements.length &&
            this.getSelectedOptionsData(t).elements[0].dataset.class
              ? ` ${this.getSelectedOptionsData(t).elements[0].dataset.class}`
              : "";
          return `<button type="button" class="${this.selectClasses.classSelectTitle}"><span class="${this.selectClasses.classSelectValue}"><span class="${this.selectClasses.classSelectContent}${e}">${s}</span></span></button>`;
        }
      }
      getSelectElementContent(e) {
        const t = e.dataset.asset ? `${e.dataset.asset}` : "",
          s = t.indexOf("img") >= 0 ? `<img src="${t}" alt="">` : t;
        let i = "";
        return (
          (i += t ? `<span class="${this.selectClasses.classSelectRow}">` : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectData}">`
            : ""),
          (i += t ? s : ""),
          (i += t ? "</span>" : ""),
          (i += t
            ? `<span class="${this.selectClasses.classSelectText}">`
            : ""),
          (i += e.textContent),
          (i += t ? "</span>" : ""),
          (i += t ? "</span>" : ""),
          i
        );
      }
      getSelectPlaceholder(e) {
        const t = Array.from(e.options).find((e) => !e.value);
        if (t)
          return {
            value: t.textContent,
            show: t.hasAttribute("data-show"),
            label: {
              show: t.hasAttribute("data-label"),
              text: t.dataset.label,
            },
          };
      }
      getSelectedOptionsData(e, t) {
        let s = [];
        return (
          e.multiple
            ? (s = Array.from(e.options)
                .filter((e) => e.value)
                .filter((e) => e.selected))
            : s.push(e.options[e.selectedIndex]),
          {
            elements: s.map((e) => e),
            values: s.filter((e) => e.value).map((e) => e.value),
            html: s.map((e) => this.getSelectElementContent(e)),
          }
        );
      }
      getOptions(e) {
        let t = e.hasAttribute("data-scroll") ? "data-simplebar" : "",
          s = e.dataset.scroll
            ? `style="max-height:${e.dataset.scroll}px"`
            : "",
          i = Array.from(e.options);
        if (i.length > 0) {
          let n = "";
          return (
            ((this.getSelectPlaceholder(e) &&
              !this.getSelectPlaceholder(e).show) ||
              e.multiple) &&
              (i = i.filter((e) => e.value)),
            (n += t
              ? `<div ${t} ${s} class="${this.selectClasses.classSelectOptionsScroll}">`
              : ""),
            i.forEach((t) => {
              n += this.getOption(t, e);
            }),
            (n += t ? "</div>" : ""),
            n
          );
        }
      }
      getOption(e, t) {
        const s =
            e.selected && t.multiple
              ? ` ${this.selectClasses.classSelectOptionSelected}`
              : "",
          i =
            e.selected && !t.hasAttribute("data-show-selected") ? "hidden" : "",
          n = e.dataset.class ? ` ${e.dataset.class}` : "",
          r = !!e.dataset.href && e.dataset.href,
          a = e.hasAttribute("data-href-blank") ? 'target="_blank"' : "";
        let o = "";
        return (
          (o += r
            ? `<a ${a} ${i} href="${r}" data-value="${e.value}" class="${this.selectClasses.classSelectOption}${n}${s}">`
            : `<button ${i} class="${this.selectClasses.classSelectOption}${n}${s}" data-value="${e.value}" type="button">`),
          (o += this.getSelectElementContent(e)),
          (o += r ? "</a>" : "</button>"),
          o
        );
      }
      setOptions(e, t) {
        this.getSelectElement(
          e,
          this.selectClasses.classSelectOptions
        ).selectElement.innerHTML = this.getOptions(t);
      }
      optionAction(e, t, s) {
        if (t.multiple) {
          s.classList.toggle(this.selectClasses.classSelectOptionSelected);
          this.getSelectedOptionsData(t).elements.forEach((e) => {
            e.removeAttribute("selected");
          });
          e.querySelectorAll(
            this.getSelectClass(this.selectClasses.classSelectOptionSelected)
          ).forEach((e) => {
            t.querySelector(`option[value="${e.dataset.value}"]`).setAttribute(
              "selected",
              "selected"
            );
          });
        } else
          t.hasAttribute("data-show-selected") ||
            (e.querySelector(
              `${this.getSelectClass(
                this.selectClasses.classSelectOption
              )}[hidden]`
            ) &&
              (e.querySelector(
                `${this.getSelectClass(
                  this.selectClasses.classSelectOption
                )}[hidden]`
              ).hidden = !1),
            (s.hidden = !0)),
            (t.value = s.hasAttribute("data-value")
              ? s.dataset.value
              : s.textContent),
            this.selectAction(e);
        this.setSelectTitleValue(e, t), this.setSelectChange(t);
      }
      selectChange(e) {
        const t = e.target;
        this.selectBuild(t), this.setSelectChange(t);
      }
      setSelectChange(e) {
        if (
          (e.hasAttribute("data-validate") && v.validateInput(e),
          e.hasAttribute("data-submit") && e.value)
        ) {
          let t = document.createElement("button");
          (t.type = "submit"),
            e.closest("form").append(t),
            t.click(),
            t.remove();
        }
        const t = e.parentElement;
        this.selectCallback(t, e);
      }
      selectDisabled(e, t) {
        t.disabled
          ? (e.classList.add(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !0))
          : (e.classList.remove(this.selectClasses.classSelectDisabled),
            (this.getSelectElement(
              e,
              this.selectClasses.classSelectTitle
            ).selectElement.disabled = !1));
      }
      searchActions(e) {
        this.getSelectElement(e).originalSelect;
        const t = this.getSelectElement(
            e,
            this.selectClasses.classSelectInput
          ).selectElement,
          s = this.getSelectElement(
            e,
            this.selectClasses.classSelectOptions
          ).selectElement,
          i = s.querySelectorAll(`.${this.selectClasses.classSelectOption}`),
          n = this;
        t.addEventListener("input", function () {
          i.forEach((e) => {
            e.textContent.toUpperCase().indexOf(t.value.toUpperCase()) >= 0
              ? (e.hidden = !1)
              : (e.hidden = !0);
          }),
            !0 === s.hidden && n.selectAction(e);
        });
      }
      selectCallback(e, t) {
        document.dispatchEvent(
          new CustomEvent("selectCallback", { detail: { select: t } })
        );
      }
      setLogging(e) {
        this.config.logging && u(`[select]: ${e}`);
      }
    }
    const g = { inputMaskModule: null, selectModule: null };
    let v = {
      getErrors(e) {
        let t = 0,
          s = e.querySelectorAll("*[data-required]");
        return (
          s.length &&
            s.forEach((e) => {
              (null === e.offsetParent && "SELECT" !== e.tagName) ||
                e.disabled ||
                (t += this.validateInput(e));
            }),
          t
        );
      },
      validateInput(e) {
        let t = 0;
        return (
          "email" === e.dataset.required
            ? ((e.value = e.value.replace(" ", "")),
              this.emailTest(e) ? (this.addError(e), t++) : this.removeError(e))
            : ("checkbox" !== e.type || e.checked) && e.value
            ? this.removeError(e)
            : (this.addError(e), t++),
          t
        );
      },
      addError(e) {
        e.classList.add("_form-error"),
          e.parentElement.classList.add("_form-error");
        let t = e.parentElement.querySelector(".form__error");
        t && e.parentElement.removeChild(t),
          e.dataset.error &&
            e.parentElement.insertAdjacentHTML(
              "beforeend",
              `<div class="form__error">${e.dataset.error}</div>`
            );
      },
      removeError(e) {
        e.classList.remove("_form-error"),
          e.parentElement.classList.remove("_form-error"),
          e.parentElement.querySelector(".form__error") &&
            e.parentElement.removeChild(
              e.parentElement.querySelector(".form__error")
            );
      },
      formClean(e) {
        e.reset(),
          setTimeout(() => {
            let t = e.querySelectorAll("input,textarea");
            for (let e = 0; e < t.length; e++) {
              const s = t[e];
              s.parentElement.classList.remove("_form-focus"),
                s.classList.remove("_form-focus"),
                v.removeError(s),
                (s.value = s.dataset.placeholder);
            }
            let s = e.querySelectorAll(".checkbox__input");
            if (s.length > 0)
              for (let e = 0; e < s.length; e++) {
                s[e].checked = !1;
              }
            if (g.selectModule) {
              let t = e.querySelectorAll(".select");
              if (t.length)
                for (let e = 0; e < t.length; e++) {
                  const s = t[e].querySelector("select");
                  g.selectModule.selectBuild(s);
                }
            }
          }, 0);
      },
      emailTest: (e) =>
        !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
    };
    var b = s(211);
    const y = document.getElementById("price-slider"),
      w = document.getElementById("term-slider"),
      S = document.getElementById("initial-slider"),
      x = document.getElementById("percent-slider"),
      C = document.getElementById("amounth-of-installment"),
      E = document.getElementById("monthly-payment"),
      T = document.getElementById("term-of-installment"),
      _ = document.getElementById("percent-of-installment"),
      A = document.getElementById("header-cost-val"),
      L = document.getElementById("header-term-val"),
      O = document.getElementById("header-initial-val"),
      k = document.getElementById("header-percent"),
      P = (e = "300000", t = "50000", s = "1", i = "1") => {
        let n,
          r = e - t,
          a = i,
          o = s,
          l = 12 * o;
        0 != o && (n = (r + (((r / 100) * a) / 12) * l) / l);
        const c = Math.round(n);
        if (c < 0) return !1;
        0 != o
          ? ((C.innerHTML = `${r} ₽`), (E.innerHTML = `${c} ₽`))
          : ((C.innerHTML = "0 ₽"), (E.innerHTML = "0 ₽")),
          T && (T.innerHTML = `${s} лет`),
          _ && (_.innerHTML = `${a} %`),
          (A.innerHTML = `${e} ₽`),
          (L.innerHTML = `${s} лет`),
          (O.innerHTML = `${t} ₽`),
          (k.innerHTML = `${i}  % годовых`);
      },
      M = document.querySelectorAll(".range-slider .slider");
    if (0 !== M.length) {
      for (let Xs of M)
        Xs.addEventListener("input", () => {
          P(y.value, S.value, w.value, x.value);
        });
      P();
    }
    const $ = document.querySelectorAll(".range-slider");
    if (0 !== $.length)
      for (let Ys = 0; Ys < $.length; Ys++) {
        const Ks = $[Ys].querySelector(".slider"),
          Qs = $[Ys].querySelector(".slider-thumb"),
          Zs = $[Ys].querySelector(".tooltip"),
          Js = $[Ys].querySelector(".tooltip").innerHTML;
        function ei() {
          const e = Ks.getAttribute("max"),
            t = (Ks.value / e) * 100 + "%";
          (Zs.innerHTML = Ks.value + Js),
            (Qs.style.left = t),
            t > "95" || Ks.value === e
              ? Zs.classList.add("end")
              : Zs.classList.remove("end"),
            console.log("window.innerWidth", window.innerWidth);
        }
        ei(),
          Ks.addEventListener("input", () => {
            ei(), P(y.value, S.value, w.value, x.value);
          });
      }
    const D = document.getElementById("range-square"),
      B = document.getElementById("range-price");
    function N(e) {
      if (null == e) return window;
      if ("[object Window]" !== e.toString()) {
        var t = e.ownerDocument;
        return (t && t.defaultView) || window;
      }
      return e;
    }
    function I(e) {
      return e instanceof N(e).Element || e instanceof Element;
    }
    function q(e) {
      return e instanceof N(e).HTMLElement || e instanceof HTMLElement;
    }
    function j(e) {
      return (
        "undefined" != typeof ShadowRoot &&
        (e instanceof N(e).ShadowRoot || e instanceof ShadowRoot)
      );
    }
    D &&
      b.create(D, {
        start: [20, 80],
        connect: !0,
        tooltips: !0,
        range: { min: 0, max: 100 },
      }),
      B &&
        b.create(B, {
          start: [2e3, 8e3],
          connect: !0,
          tooltips: !0,
          range: { min: 0, max: 1e4 },
        });
    var H = Math.max,
      V = Math.min,
      z = Math.round;
    function G(e, t) {
      void 0 === t && (t = !1);
      var s = e.getBoundingClientRect(),
        i = 1,
        n = 1;
      if (q(e) && t) {
        var r = e.offsetHeight,
          a = e.offsetWidth;
        a > 0 && (i = z(s.width) / a || 1), r > 0 && (n = z(s.height) / r || 1);
      }
      return {
        width: s.width / i,
        height: s.height / n,
        top: s.top / n,
        right: s.right / i,
        bottom: s.bottom / n,
        left: s.left / i,
        x: s.left / i,
        y: s.top / n,
      };
    }
    function F(e) {
      var t = N(e);
      return { scrollLeft: t.pageXOffset, scrollTop: t.pageYOffset };
    }
    function R(e) {
      return e ? (e.nodeName || "").toLowerCase() : null;
    }
    function W(e) {
      return ((I(e) ? e.ownerDocument : e.document) || window.document)
        .documentElement;
    }
    function U(e) {
      return G(W(e)).left + F(e).scrollLeft;
    }
    function X(e) {
      return N(e).getComputedStyle(e);
    }
    function Y(e) {
      var t = X(e),
        s = t.overflow,
        i = t.overflowX,
        n = t.overflowY;
      return /auto|scroll|overlay|hidden/.test(s + n + i);
    }
    function K(e, t, s) {
      void 0 === s && (s = !1);
      var i,
        n,
        r = q(t),
        a =
          q(t) &&
          (function (e) {
            var t = e.getBoundingClientRect(),
              s = z(t.width) / e.offsetWidth || 1,
              i = z(t.height) / e.offsetHeight || 1;
            return 1 !== s || 1 !== i;
          })(t),
        o = W(t),
        l = G(e, a),
        c = { scrollLeft: 0, scrollTop: 0 },
        d = { x: 0, y: 0 };
      return (
        (r || (!r && !s)) &&
          (("body" !== R(t) || Y(o)) &&
            (c =
              (i = t) !== N(i) && q(i)
                ? { scrollLeft: (n = i).scrollLeft, scrollTop: n.scrollTop }
                : F(i)),
          q(t)
            ? (((d = G(t, !0)).x += t.clientLeft), (d.y += t.clientTop))
            : o && (d.x = U(o))),
        {
          x: l.left + c.scrollLeft - d.x,
          y: l.top + c.scrollTop - d.y,
          width: l.width,
          height: l.height,
        }
      );
    }
    function Q(e) {
      var t = G(e),
        s = e.offsetWidth,
        i = e.offsetHeight;
      return (
        Math.abs(t.width - s) <= 1 && (s = t.width),
        Math.abs(t.height - i) <= 1 && (i = t.height),
        { x: e.offsetLeft, y: e.offsetTop, width: s, height: i }
      );
    }
    function Z(e) {
      return "html" === R(e)
        ? e
        : e.assignedSlot || e.parentNode || (j(e) ? e.host : null) || W(e);
    }
    function J(e) {
      return ["html", "body", "#document"].indexOf(R(e)) >= 0
        ? e.ownerDocument.body
        : q(e) && Y(e)
        ? e
        : J(Z(e));
    }
    function ee(e, t) {
      var s;
      void 0 === t && (t = []);
      var i = J(e),
        n = i === (null == (s = e.ownerDocument) ? void 0 : s.body),
        r = N(i),
        a = n ? [r].concat(r.visualViewport || [], Y(i) ? i : []) : i,
        o = t.concat(a);
      return n ? o : o.concat(ee(Z(a)));
    }
    function te(e) {
      return ["table", "td", "th"].indexOf(R(e)) >= 0;
    }
    function se(e) {
      return q(e) && "fixed" !== X(e).position ? e.offsetParent : null;
    }
    function ie(e) {
      for (var t = N(e), s = se(e); s && te(s) && "static" === X(s).position; )
        s = se(s);
      return s &&
        ("html" === R(s) || ("body" === R(s) && "static" === X(s).position))
        ? t
        : s ||
            (function (e) {
              var t =
                -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
              if (
                -1 !== navigator.userAgent.indexOf("Trident") &&
                q(e) &&
                "fixed" === X(e).position
              )
                return null;
              var s = Z(e);
              for (
                j(s) && (s = s.host);
                q(s) && ["html", "body"].indexOf(R(s)) < 0;

              ) {
                var i = X(s);
                if (
                  "none" !== i.transform ||
                  "none" !== i.perspective ||
                  "paint" === i.contain ||
                  -1 !== ["transform", "perspective"].indexOf(i.willChange) ||
                  (t && "filter" === i.willChange) ||
                  (t && i.filter && "none" !== i.filter)
                )
                  return s;
                s = s.parentNode;
              }
              return null;
            })(e) ||
            t;
    }
    var ne = "top",
      re = "bottom",
      ae = "right",
      oe = "left",
      le = "auto",
      ce = [ne, re, ae, oe],
      de = "start",
      ue = "end",
      pe = "viewport",
      fe = "popper",
      he = ce.reduce(function (e, t) {
        return e.concat([t + "-" + de, t + "-" + ue]);
      }, []),
      me = [].concat(ce, [le]).reduce(function (e, t) {
        return e.concat([t, t + "-" + de, t + "-" + ue]);
      }, []),
      ge = [
        "beforeRead",
        "read",
        "afterRead",
        "beforeMain",
        "main",
        "afterMain",
        "beforeWrite",
        "write",
        "afterWrite",
      ];
    function ve(e) {
      var t = new Map(),
        s = new Set(),
        i = [];
      function n(e) {
        s.add(e.name),
          []
            .concat(e.requires || [], e.requiresIfExists || [])
            .forEach(function (e) {
              if (!s.has(e)) {
                var i = t.get(e);
                i && n(i);
              }
            }),
          i.push(e);
      }
      return (
        e.forEach(function (e) {
          t.set(e.name, e);
        }),
        e.forEach(function (e) {
          s.has(e.name) || n(e);
        }),
        i
      );
    }
    var be = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function ye() {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      return !t.some(function (e) {
        return !(e && "function" == typeof e.getBoundingClientRect);
      });
    }
    function we(e) {
      void 0 === e && (e = {});
      var t = e,
        s = t.defaultModifiers,
        i = void 0 === s ? [] : s,
        n = t.defaultOptions,
        r = void 0 === n ? be : n;
      return function (e, t, s) {
        void 0 === s && (s = r);
        var n,
          a,
          o = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, be, r),
            modifiersData: {},
            elements: { reference: e, popper: t },
            attributes: {},
            styles: {},
          },
          l = [],
          c = !1,
          d = {
            state: o,
            setOptions: function (s) {
              var n = "function" == typeof s ? s(o.options) : s;
              u(),
                (o.options = Object.assign({}, r, o.options, n)),
                (o.scrollParents = {
                  reference: I(e)
                    ? ee(e)
                    : e.contextElement
                    ? ee(e.contextElement)
                    : [],
                  popper: ee(t),
                });
              var a = (function (e) {
                var t = ve(e);
                return ge.reduce(function (e, s) {
                  return e.concat(
                    t.filter(function (e) {
                      return e.phase === s;
                    })
                  );
                }, []);
              })(
                (function (e) {
                  var t = e.reduce(function (e, t) {
                    var s = e[t.name];
                    return (
                      (e[t.name] = s
                        ? Object.assign({}, s, t, {
                            options: Object.assign({}, s.options, t.options),
                            data: Object.assign({}, s.data, t.data),
                          })
                        : t),
                      e
                    );
                  }, {});
                  return Object.keys(t).map(function (e) {
                    return t[e];
                  });
                })([].concat(i, o.options.modifiers))
              );
              return (
                (o.orderedModifiers = a.filter(function (e) {
                  return e.enabled;
                })),
                o.orderedModifiers.forEach(function (e) {
                  var t = e.name,
                    s = e.options,
                    i = void 0 === s ? {} : s,
                    n = e.effect;
                  if ("function" == typeof n) {
                    var r = n({ state: o, name: t, instance: d, options: i }),
                      a = function () {};
                    l.push(r || a);
                  }
                }),
                d.update()
              );
            },
            forceUpdate: function () {
              if (!c) {
                var e = o.elements,
                  t = e.reference,
                  s = e.popper;
                if (ye(t, s)) {
                  (o.rects = {
                    reference: K(t, ie(s), "fixed" === o.options.strategy),
                    popper: Q(s),
                  }),
                    (o.reset = !1),
                    (o.placement = o.options.placement),
                    o.orderedModifiers.forEach(function (e) {
                      return (o.modifiersData[e.name] = Object.assign(
                        {},
                        e.data
                      ));
                    });
                  for (var i = 0; i < o.orderedModifiers.length; i++)
                    if (!0 !== o.reset) {
                      var n = o.orderedModifiers[i],
                        r = n.fn,
                        a = n.options,
                        l = void 0 === a ? {} : a,
                        u = n.name;
                      "function" == typeof r &&
                        (o =
                          r({ state: o, options: l, name: u, instance: d }) ||
                          o);
                    } else (o.reset = !1), (i = -1);
                }
              }
            },
            update:
              ((n = function () {
                return new Promise(function (e) {
                  d.forceUpdate(), e(o);
                });
              }),
              function () {
                return (
                  a ||
                    (a = new Promise(function (e) {
                      Promise.resolve().then(function () {
                        (a = void 0), e(n());
                      });
                    })),
                  a
                );
              }),
            destroy: function () {
              u(), (c = !0);
            },
          };
        if (!ye(e, t)) return d;
        function u() {
          l.forEach(function (e) {
            return e();
          }),
            (l = []);
        }
        return (
          d.setOptions(s).then(function (e) {
            !c && s.onFirstUpdate && s.onFirstUpdate(e);
          }),
          d
        );
      };
    }
    var Se = { passive: !0 };
    const xe = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (e) {
        var t = e.state,
          s = e.instance,
          i = e.options,
          n = i.scroll,
          r = void 0 === n || n,
          a = i.resize,
          o = void 0 === a || a,
          l = N(t.elements.popper),
          c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
        return (
          r &&
            c.forEach(function (e) {
              e.addEventListener("scroll", s.update, Se);
            }),
          o && l.addEventListener("resize", s.update, Se),
          function () {
            r &&
              c.forEach(function (e) {
                e.removeEventListener("scroll", s.update, Se);
              }),
              o && l.removeEventListener("resize", s.update, Se);
          }
        );
      },
      data: {},
    };
    function Ce(e) {
      return e.split("-")[0];
    }
    function Ee(e) {
      return e.split("-")[1];
    }
    function Te(e) {
      return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
    }
    function _e(e) {
      var t,
        s = e.reference,
        i = e.element,
        n = e.placement,
        r = n ? Ce(n) : null,
        a = n ? Ee(n) : null,
        o = s.x + s.width / 2 - i.width / 2,
        l = s.y + s.height / 2 - i.height / 2;
      switch (r) {
        case ne:
          t = { x: o, y: s.y - i.height };
          break;
        case re:
          t = { x: o, y: s.y + s.height };
          break;
        case ae:
          t = { x: s.x + s.width, y: l };
          break;
        case oe:
          t = { x: s.x - i.width, y: l };
          break;
        default:
          t = { x: s.x, y: s.y };
      }
      var c = r ? Te(r) : null;
      if (null != c) {
        var d = "y" === c ? "height" : "width";
        switch (a) {
          case de:
            t[c] = t[c] - (s[d] / 2 - i[d] / 2);
            break;
          case ue:
            t[c] = t[c] + (s[d] / 2 - i[d] / 2);
        }
      }
      return t;
    }
    var Ae = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function Le(e) {
      var t,
        s = e.popper,
        i = e.popperRect,
        n = e.placement,
        r = e.variation,
        a = e.offsets,
        o = e.position,
        l = e.gpuAcceleration,
        c = e.adaptive,
        d = e.roundOffsets,
        u = e.isFixed,
        p = a.x,
        f = void 0 === p ? 0 : p,
        h = a.y,
        m = void 0 === h ? 0 : h,
        g = "function" == typeof d ? d({ x: f, y: m }) : { x: f, y: m };
      (f = g.x), (m = g.y);
      var v = a.hasOwnProperty("x"),
        b = a.hasOwnProperty("y"),
        y = oe,
        w = ne,
        S = window;
      if (c) {
        var x = ie(s),
          C = "clientHeight",
          E = "clientWidth";
        if (
          (x === N(s) &&
            "static" !== X((x = W(s))).position &&
            "absolute" === o &&
            ((C = "scrollHeight"), (E = "scrollWidth")),
          (x = x),
          n === ne || ((n === oe || n === ae) && r === ue))
        )
          (w = re),
            (m -=
              (u && x === S && S.visualViewport
                ? S.visualViewport.height
                : x[C]) - i.height),
            (m *= l ? 1 : -1);
        if (n === oe || ((n === ne || n === re) && r === ue))
          (y = ae),
            (f -=
              (u && x === S && S.visualViewport
                ? S.visualViewport.width
                : x[E]) - i.width),
            (f *= l ? 1 : -1);
      }
      var T,
        _ = Object.assign({ position: o }, c && Ae),
        A =
          !0 === d
            ? (function (e) {
                var t = e.x,
                  s = e.y,
                  i = window.devicePixelRatio || 1;
                return { x: z(t * i) / i || 0, y: z(s * i) / i || 0 };
              })({ x: f, y: m })
            : { x: f, y: m };
      return (
        (f = A.x),
        (m = A.y),
        l
          ? Object.assign(
              {},
              _,
              (((T = {})[w] = b ? "0" : ""),
              (T[y] = v ? "0" : ""),
              (T.transform =
                (S.devicePixelRatio || 1) <= 1
                  ? "translate(" + f + "px, " + m + "px)"
                  : "translate3d(" + f + "px, " + m + "px, 0)"),
              T)
            )
          : Object.assign(
              {},
              _,
              (((t = {})[w] = b ? m + "px" : ""),
              (t[y] = v ? f + "px" : ""),
              (t.transform = ""),
              t)
            )
      );
    }
    const Oe = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (e) {
        var t = e.state;
        Object.keys(t.elements).forEach(function (e) {
          var s = t.styles[e] || {},
            i = t.attributes[e] || {},
            n = t.elements[e];
          q(n) &&
            R(n) &&
            (Object.assign(n.style, s),
            Object.keys(i).forEach(function (e) {
              var t = i[e];
              !1 === t
                ? n.removeAttribute(e)
                : n.setAttribute(e, !0 === t ? "" : t);
            }));
        });
      },
      effect: function (e) {
        var t = e.state,
          s = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(t.elements.popper.style, s.popper),
          (t.styles = s),
          t.elements.arrow && Object.assign(t.elements.arrow.style, s.arrow),
          function () {
            Object.keys(t.elements).forEach(function (e) {
              var i = t.elements[e],
                n = t.attributes[e] || {},
                r = Object.keys(
                  t.styles.hasOwnProperty(e) ? t.styles[e] : s[e]
                ).reduce(function (e, t) {
                  return (e[t] = ""), e;
                }, {});
              q(i) &&
                R(i) &&
                (Object.assign(i.style, r),
                Object.keys(n).forEach(function (e) {
                  i.removeAttribute(e);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    const ke = {
      name: "offset",
      enabled: !0,
      phase: "main",
      requires: ["popperOffsets"],
      fn: function (e) {
        var t = e.state,
          s = e.options,
          i = e.name,
          n = s.offset,
          r = void 0 === n ? [0, 0] : n,
          a = me.reduce(function (e, s) {
            return (
              (e[s] = (function (e, t, s) {
                var i = Ce(e),
                  n = [oe, ne].indexOf(i) >= 0 ? -1 : 1,
                  r =
                    "function" == typeof s
                      ? s(Object.assign({}, t, { placement: e }))
                      : s,
                  a = r[0],
                  o = r[1];
                return (
                  (a = a || 0),
                  (o = (o || 0) * n),
                  [oe, ae].indexOf(i) >= 0 ? { x: o, y: a } : { x: a, y: o }
                );
              })(s, t.rects, r)),
              e
            );
          }, {}),
          o = a[t.placement],
          l = o.x,
          c = o.y;
        null != t.modifiersData.popperOffsets &&
          ((t.modifiersData.popperOffsets.x += l),
          (t.modifiersData.popperOffsets.y += c)),
          (t.modifiersData[i] = a);
      },
    };
    var Pe = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function Me(e) {
      return e.replace(/left|right|bottom|top/g, function (e) {
        return Pe[e];
      });
    }
    var $e = { start: "end", end: "start" };
    function De(e) {
      return e.replace(/start|end/g, function (e) {
        return $e[e];
      });
    }
    function Be(e, t) {
      var s = t.getRootNode && t.getRootNode();
      if (e.contains(t)) return !0;
      if (s && j(s)) {
        var i = t;
        do {
          if (i && e.isSameNode(i)) return !0;
          i = i.parentNode || i.host;
        } while (i);
      }
      return !1;
    }
    function Ne(e) {
      return Object.assign({}, e, {
        left: e.x,
        top: e.y,
        right: e.x + e.width,
        bottom: e.y + e.height,
      });
    }
    function Ie(e, t) {
      return t === pe
        ? Ne(
            (function (e) {
              var t = N(e),
                s = W(e),
                i = t.visualViewport,
                n = s.clientWidth,
                r = s.clientHeight,
                a = 0,
                o = 0;
              return (
                i &&
                  ((n = i.width),
                  (r = i.height),
                  /^((?!chrome|android).)*safari/i.test(navigator.userAgent) ||
                    ((a = i.offsetLeft), (o = i.offsetTop))),
                { width: n, height: r, x: a + U(e), y: o }
              );
            })(e)
          )
        : I(t)
        ? (function (e) {
            var t = G(e);
            return (
              (t.top = t.top + e.clientTop),
              (t.left = t.left + e.clientLeft),
              (t.bottom = t.top + e.clientHeight),
              (t.right = t.left + e.clientWidth),
              (t.width = e.clientWidth),
              (t.height = e.clientHeight),
              (t.x = t.left),
              (t.y = t.top),
              t
            );
          })(t)
        : Ne(
            (function (e) {
              var t,
                s = W(e),
                i = F(e),
                n = null == (t = e.ownerDocument) ? void 0 : t.body,
                r = H(
                  s.scrollWidth,
                  s.clientWidth,
                  n ? n.scrollWidth : 0,
                  n ? n.clientWidth : 0
                ),
                a = H(
                  s.scrollHeight,
                  s.clientHeight,
                  n ? n.scrollHeight : 0,
                  n ? n.clientHeight : 0
                ),
                o = -i.scrollLeft + U(e),
                l = -i.scrollTop;
              return (
                "rtl" === X(n || s).direction &&
                  (o += H(s.clientWidth, n ? n.clientWidth : 0) - r),
                { width: r, height: a, x: o, y: l }
              );
            })(W(e))
          );
    }
    function qe(e, t, s) {
      var i =
          "clippingParents" === t
            ? (function (e) {
                var t = ee(Z(e)),
                  s =
                    ["absolute", "fixed"].indexOf(X(e).position) >= 0 && q(e)
                      ? ie(e)
                      : e;
                return I(s)
                  ? t.filter(function (e) {
                      return I(e) && Be(e, s) && "body" !== R(e);
                    })
                  : [];
              })(e)
            : [].concat(t),
        n = [].concat(i, [s]),
        r = n[0],
        a = n.reduce(function (t, s) {
          var i = Ie(e, s);
          return (
            (t.top = H(i.top, t.top)),
            (t.right = V(i.right, t.right)),
            (t.bottom = V(i.bottom, t.bottom)),
            (t.left = H(i.left, t.left)),
            t
          );
        }, Ie(e, r));
      return (
        (a.width = a.right - a.left),
        (a.height = a.bottom - a.top),
        (a.x = a.left),
        (a.y = a.top),
        a
      );
    }
    function je(e) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, e);
    }
    function He(e, t) {
      return t.reduce(function (t, s) {
        return (t[s] = e), t;
      }, {});
    }
    function Ve(e, t) {
      void 0 === t && (t = {});
      var s = t,
        i = s.placement,
        n = void 0 === i ? e.placement : i,
        r = s.boundary,
        a = void 0 === r ? "clippingParents" : r,
        o = s.rootBoundary,
        l = void 0 === o ? pe : o,
        c = s.elementContext,
        d = void 0 === c ? fe : c,
        u = s.altBoundary,
        p = void 0 !== u && u,
        f = s.padding,
        h = void 0 === f ? 0 : f,
        m = je("number" != typeof h ? h : He(h, ce)),
        g = d === fe ? "reference" : fe,
        v = e.rects.popper,
        b = e.elements[p ? g : d],
        y = qe(I(b) ? b : b.contextElement || W(e.elements.popper), a, l),
        w = G(e.elements.reference),
        S = _e({
          reference: w,
          element: v,
          strategy: "absolute",
          placement: n,
        }),
        x = Ne(Object.assign({}, v, S)),
        C = d === fe ? x : w,
        E = {
          top: y.top - C.top + m.top,
          bottom: C.bottom - y.bottom + m.bottom,
          left: y.left - C.left + m.left,
          right: C.right - y.right + m.right,
        },
        T = e.modifiersData.offset;
      if (d === fe && T) {
        var _ = T[n];
        Object.keys(E).forEach(function (e) {
          var t = [ae, re].indexOf(e) >= 0 ? 1 : -1,
            s = [ne, re].indexOf(e) >= 0 ? "y" : "x";
          E[e] += _[s] * t;
        });
      }
      return E;
    }
    function ze(e, t, s) {
      return H(e, V(t, s));
    }
    const Ge = {
      name: "preventOverflow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t = e.state,
          s = e.options,
          i = e.name,
          n = s.mainAxis,
          r = void 0 === n || n,
          a = s.altAxis,
          o = void 0 !== a && a,
          l = s.boundary,
          c = s.rootBoundary,
          d = s.altBoundary,
          u = s.padding,
          p = s.tether,
          f = void 0 === p || p,
          h = s.tetherOffset,
          m = void 0 === h ? 0 : h,
          g = Ve(t, {
            boundary: l,
            rootBoundary: c,
            padding: u,
            altBoundary: d,
          }),
          v = Ce(t.placement),
          b = Ee(t.placement),
          y = !b,
          w = Te(v),
          S = "x" === w ? "y" : "x",
          x = t.modifiersData.popperOffsets,
          C = t.rects.reference,
          E = t.rects.popper,
          T =
            "function" == typeof m
              ? m(Object.assign({}, t.rects, { placement: t.placement }))
              : m,
          _ =
            "number" == typeof T
              ? { mainAxis: T, altAxis: T }
              : Object.assign({ mainAxis: 0, altAxis: 0 }, T),
          A = t.modifiersData.offset
            ? t.modifiersData.offset[t.placement]
            : null,
          L = { x: 0, y: 0 };
        if (x) {
          if (r) {
            var O,
              k = "y" === w ? ne : oe,
              P = "y" === w ? re : ae,
              M = "y" === w ? "height" : "width",
              $ = x[w],
              D = $ + g[k],
              B = $ - g[P],
              N = f ? -E[M] / 2 : 0,
              I = b === de ? C[M] : E[M],
              q = b === de ? -E[M] : -C[M],
              j = t.elements.arrow,
              z = f && j ? Q(j) : { width: 0, height: 0 },
              G = t.modifiersData["arrow#persistent"]
                ? t.modifiersData["arrow#persistent"].padding
                : { top: 0, right: 0, bottom: 0, left: 0 },
              F = G[k],
              R = G[P],
              W = ze(0, C[M], z[M]),
              U = y
                ? C[M] / 2 - N - W - F - _.mainAxis
                : I - W - F - _.mainAxis,
              X = y
                ? -C[M] / 2 + N + W + R + _.mainAxis
                : q + W + R + _.mainAxis,
              Y = t.elements.arrow && ie(t.elements.arrow),
              K = Y ? ("y" === w ? Y.clientTop || 0 : Y.clientLeft || 0) : 0,
              Z = null != (O = null == A ? void 0 : A[w]) ? O : 0,
              J = $ + X - Z,
              ee = ze(f ? V(D, $ + U - Z - K) : D, $, f ? H(B, J) : B);
            (x[w] = ee), (L[w] = ee - $);
          }
          if (o) {
            var te,
              se = "x" === w ? ne : oe,
              le = "x" === w ? re : ae,
              ce = x[S],
              ue = "y" === S ? "height" : "width",
              pe = ce + g[se],
              fe = ce - g[le],
              he = -1 !== [ne, oe].indexOf(v),
              me = null != (te = null == A ? void 0 : A[S]) ? te : 0,
              ge = he ? pe : ce - C[ue] - E[ue] - me + _.altAxis,
              ve = he ? ce + C[ue] + E[ue] - me - _.altAxis : fe,
              be =
                f && he
                  ? (function (e, t, s) {
                      var i = ze(e, t, s);
                      return i > s ? s : i;
                    })(ge, ce, ve)
                  : ze(f ? ge : pe, ce, f ? ve : fe);
            (x[S] = be), (L[S] = be - ce);
          }
          t.modifiersData[i] = L;
        }
      },
      requiresIfExists: ["offset"],
    };
    const Fe = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (e) {
        var t,
          s = e.state,
          i = e.name,
          n = e.options,
          r = s.elements.arrow,
          a = s.modifiersData.popperOffsets,
          o = Ce(s.placement),
          l = Te(o),
          c = [oe, ae].indexOf(o) >= 0 ? "height" : "width";
        if (r && a) {
          var d = (function (e, t) {
              return je(
                "number" !=
                  typeof (e =
                    "function" == typeof e
                      ? e(
                          Object.assign({}, t.rects, { placement: t.placement })
                        )
                      : e)
                  ? e
                  : He(e, ce)
              );
            })(n.padding, s),
            u = Q(r),
            p = "y" === l ? ne : oe,
            f = "y" === l ? re : ae,
            h =
              s.rects.reference[c] +
              s.rects.reference[l] -
              a[l] -
              s.rects.popper[c],
            m = a[l] - s.rects.reference[l],
            g = ie(r),
            v = g ? ("y" === l ? g.clientHeight || 0 : g.clientWidth || 0) : 0,
            b = h / 2 - m / 2,
            y = d[p],
            w = v - u[c] - d[f],
            S = v / 2 - u[c] / 2 + b,
            x = ze(y, S, w),
            C = l;
          s.modifiersData[i] = (((t = {})[C] = x), (t.centerOffset = x - S), t);
        }
      },
      effect: function (e) {
        var t = e.state,
          s = e.options.element,
          i = void 0 === s ? "[data-popper-arrow]" : s;
        null != i &&
          ("string" != typeof i || (i = t.elements.popper.querySelector(i))) &&
          Be(t.elements.popper, i) &&
          (t.elements.arrow = i);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    };
    function Re(e, t, s) {
      return (
        void 0 === s && (s = { x: 0, y: 0 }),
        {
          top: e.top - t.height - s.y,
          right: e.right - t.width + s.x,
          bottom: e.bottom - t.height + s.y,
          left: e.left - t.width - s.x,
        }
      );
    }
    function We(e) {
      return [ne, ae, re, oe].some(function (t) {
        return e[t] >= 0;
      });
    }
    var Ue = we({
        defaultModifiers: [
          xe,
          {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function (e) {
              var t = e.state,
                s = e.name;
              t.modifiersData[s] = _e({
                reference: t.rects.reference,
                element: t.rects.popper,
                strategy: "absolute",
                placement: t.placement,
              });
            },
            data: {},
          },
          {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (e) {
              var t = e.state,
                s = e.options,
                i = s.gpuAcceleration,
                n = void 0 === i || i,
                r = s.adaptive,
                a = void 0 === r || r,
                o = s.roundOffsets,
                l = void 0 === o || o,
                c = {
                  placement: Ce(t.placement),
                  variation: Ee(t.placement),
                  popper: t.elements.popper,
                  popperRect: t.rects.popper,
                  gpuAcceleration: n,
                  isFixed: "fixed" === t.options.strategy,
                };
              null != t.modifiersData.popperOffsets &&
                (t.styles.popper = Object.assign(
                  {},
                  t.styles.popper,
                  Le(
                    Object.assign({}, c, {
                      offsets: t.modifiersData.popperOffsets,
                      position: t.options.strategy,
                      adaptive: a,
                      roundOffsets: l,
                    })
                  )
                )),
                null != t.modifiersData.arrow &&
                  (t.styles.arrow = Object.assign(
                    {},
                    t.styles.arrow,
                    Le(
                      Object.assign({}, c, {
                        offsets: t.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1,
                        roundOffsets: l,
                      })
                    )
                  )),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-placement": t.placement,
                }));
            },
            data: {},
          },
          Oe,
          ke,
          {
            name: "flip",
            enabled: !0,
            phase: "main",
            fn: function (e) {
              var t = e.state,
                s = e.options,
                i = e.name;
              if (!t.modifiersData[i]._skip) {
                for (
                  var n = s.mainAxis,
                    r = void 0 === n || n,
                    a = s.altAxis,
                    o = void 0 === a || a,
                    l = s.fallbackPlacements,
                    c = s.padding,
                    d = s.boundary,
                    u = s.rootBoundary,
                    p = s.altBoundary,
                    f = s.flipVariations,
                    h = void 0 === f || f,
                    m = s.allowedAutoPlacements,
                    g = t.options.placement,
                    v = Ce(g),
                    b =
                      l ||
                      (v === g || !h
                        ? [Me(g)]
                        : (function (e) {
                            if (Ce(e) === le) return [];
                            var t = Me(e);
                            return [De(e), t, De(t)];
                          })(g)),
                    y = [g].concat(b).reduce(function (e, s) {
                      return e.concat(
                        Ce(s) === le
                          ? (function (e, t) {
                              void 0 === t && (t = {});
                              var s = t,
                                i = s.placement,
                                n = s.boundary,
                                r = s.rootBoundary,
                                a = s.padding,
                                o = s.flipVariations,
                                l = s.allowedAutoPlacements,
                                c = void 0 === l ? me : l,
                                d = Ee(i),
                                u = d
                                  ? o
                                    ? he
                                    : he.filter(function (e) {
                                        return Ee(e) === d;
                                      })
                                  : ce,
                                p = u.filter(function (e) {
                                  return c.indexOf(e) >= 0;
                                });
                              0 === p.length && (p = u);
                              var f = p.reduce(function (t, s) {
                                return (
                                  (t[s] = Ve(e, {
                                    placement: s,
                                    boundary: n,
                                    rootBoundary: r,
                                    padding: a,
                                  })[Ce(s)]),
                                  t
                                );
                              }, {});
                              return Object.keys(f).sort(function (e, t) {
                                return f[e] - f[t];
                              });
                            })(t, {
                              placement: s,
                              boundary: d,
                              rootBoundary: u,
                              padding: c,
                              flipVariations: h,
                              allowedAutoPlacements: m,
                            })
                          : s
                      );
                    }, []),
                    w = t.rects.reference,
                    S = t.rects.popper,
                    x = new Map(),
                    C = !0,
                    E = y[0],
                    T = 0;
                  T < y.length;
                  T++
                ) {
                  var _ = y[T],
                    A = Ce(_),
                    L = Ee(_) === de,
                    O = [ne, re].indexOf(A) >= 0,
                    k = O ? "width" : "height",
                    P = Ve(t, {
                      placement: _,
                      boundary: d,
                      rootBoundary: u,
                      altBoundary: p,
                      padding: c,
                    }),
                    M = O ? (L ? ae : oe) : L ? re : ne;
                  w[k] > S[k] && (M = Me(M));
                  var $ = Me(M),
                    D = [];
                  if (
                    (r && D.push(P[A] <= 0),
                    o && D.push(P[M] <= 0, P[$] <= 0),
                    D.every(function (e) {
                      return e;
                    }))
                  ) {
                    (E = _), (C = !1);
                    break;
                  }
                  x.set(_, D);
                }
                if (C)
                  for (
                    var B = function (e) {
                        var t = y.find(function (t) {
                          var s = x.get(t);
                          if (s)
                            return s.slice(0, e).every(function (e) {
                              return e;
                            });
                        });
                        if (t) return (E = t), "break";
                      },
                      N = h ? 3 : 1;
                    N > 0;
                    N--
                  ) {
                    if ("break" === B(N)) break;
                  }
                t.placement !== E &&
                  ((t.modifiersData[i]._skip = !0),
                  (t.placement = E),
                  (t.reset = !0));
              }
            },
            requiresIfExists: ["offset"],
            data: { _skip: !1 },
          },
          Ge,
          Fe,
          {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function (e) {
              var t = e.state,
                s = e.name,
                i = t.rects.reference,
                n = t.rects.popper,
                r = t.modifiersData.preventOverflow,
                a = Ve(t, { elementContext: "reference" }),
                o = Ve(t, { altBoundary: !0 }),
                l = Re(a, i),
                c = Re(o, n, r),
                d = We(l),
                u = We(c);
              (t.modifiersData[s] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: c,
                isReferenceHidden: d,
                hasPopperEscaped: u,
              }),
                (t.attributes.popper = Object.assign({}, t.attributes.popper, {
                  "data-popper-reference-hidden": d,
                  "data-popper-escaped": u,
                }));
            },
          },
        ],
      }),
      Xe = "tippy-content",
      Ye = "tippy-backdrop",
      Ke = "tippy-arrow",
      Qe = "tippy-svg-arrow",
      Ze = { passive: !0, capture: !0 },
      Je = function () {
        return document.body;
      };
    function et(e, t, s) {
      if (Array.isArray(e)) {
        var i = e[t];
        return null == i ? (Array.isArray(s) ? s[t] : s) : i;
      }
      return e;
    }
    function tt(e, t) {
      var s = {}.toString.call(e);
      return 0 === s.indexOf("[object") && s.indexOf(t + "]") > -1;
    }
    function st(e, t) {
      return "function" == typeof e ? e.apply(void 0, t) : e;
    }
    function it(e, t) {
      return 0 === t
        ? e
        : function (i) {
            clearTimeout(s),
              (s = setTimeout(function () {
                e(i);
              }, t));
          };
      var s;
    }
    function nt(e) {
      return [].concat(e);
    }
    function rt(e, t) {
      -1 === e.indexOf(t) && e.push(t);
    }
    function at(e) {
      return e.split("-")[0];
    }
    function ot(e) {
      return [].slice.call(e);
    }
    function lt(e) {
      return Object.keys(e).reduce(function (t, s) {
        return void 0 !== e[s] && (t[s] = e[s]), t;
      }, {});
    }
    function ct() {
      return document.createElement("div");
    }
    function dt(e) {
      return ["Element", "Fragment"].some(function (t) {
        return tt(e, t);
      });
    }
    function ut(e) {
      return tt(e, "MouseEvent");
    }
    function pt(e) {
      return !(!e || !e._tippy || e._tippy.reference !== e);
    }
    function ft(e) {
      return dt(e)
        ? [e]
        : (function (e) {
            return tt(e, "NodeList");
          })(e)
        ? ot(e)
        : Array.isArray(e)
        ? e
        : ot(document.querySelectorAll(e));
    }
    function ht(e, t) {
      e.forEach(function (e) {
        e && (e.style.transitionDuration = t + "ms");
      });
    }
    function mt(e, t) {
      e.forEach(function (e) {
        e && e.setAttribute("data-state", t);
      });
    }
    function gt(e) {
      var t,
        s = nt(e)[0];
      return null != s && null != (t = s.ownerDocument) && t.body
        ? s.ownerDocument
        : document;
    }
    function vt(e, t, s) {
      var i = t + "EventListener";
      ["transitionend", "webkitTransitionEnd"].forEach(function (t) {
        e[i](t, s);
      });
    }
    function bt(e, t) {
      for (var s = t; s; ) {
        var i;
        if (e.contains(s)) return !0;
        s =
          null == s.getRootNode || null == (i = s.getRootNode())
            ? void 0
            : i.host;
      }
      return !1;
    }
    var yt = { isTouch: !1 },
      wt = 0;
    function St() {
      yt.isTouch ||
        ((yt.isTouch = !0),
        window.performance && document.addEventListener("mousemove", xt));
    }
    function xt() {
      var e = performance.now();
      e - wt < 20 &&
        ((yt.isTouch = !1), document.removeEventListener("mousemove", xt)),
        (wt = e);
    }
    function Ct() {
      var e = document.activeElement;
      if (pt(e)) {
        var t = e._tippy;
        e.blur && !t.state.isVisible && e.blur();
      }
    }
    var Et =
      !!("undefined" != typeof window && "undefined" != typeof document) &&
      !!window.msCrypto;
    var Tt = {
        animateFill: !1,
        followCursor: !1,
        inlinePositioning: !1,
        sticky: !1,
      },
      _t = Object.assign(
        {
          appendTo: Je,
          aria: { content: "auto", expanded: "auto" },
          delay: 0,
          duration: [300, 250],
          getReferenceClientRect: null,
          hideOnClick: !0,
          ignoreAttributes: !1,
          interactive: !1,
          interactiveBorder: 2,
          interactiveDebounce: 0,
          moveTransition: "",
          offset: [0, 10],
          onAfterUpdate: function () {},
          onBeforeUpdate: function () {},
          onCreate: function () {},
          onDestroy: function () {},
          onHidden: function () {},
          onHide: function () {},
          onMount: function () {},
          onShow: function () {},
          onShown: function () {},
          onTrigger: function () {},
          onUntrigger: function () {},
          onClickOutside: function () {},
          placement: "top",
          plugins: [],
          popperOptions: {},
          render: null,
          showOnCreate: !1,
          touch: !0,
          trigger: "mouseenter focus",
          triggerTarget: null,
        },
        Tt,
        {
          allowHTML: !1,
          animation: "fade",
          arrow: !0,
          content: "",
          inertia: !1,
          maxWidth: 350,
          role: "tooltip",
          theme: "",
          zIndex: 9999,
        }
      ),
      At = Object.keys(_t);
    function Lt(e) {
      var t = (e.plugins || []).reduce(function (t, s) {
        var i,
          n = s.name,
          r = s.defaultValue;
        n && (t[n] = void 0 !== e[n] ? e[n] : null != (i = _t[n]) ? i : r);
        return t;
      }, {});
      return Object.assign({}, e, t);
    }
    function Ot(e, t) {
      var s = Object.assign(
        {},
        t,
        { content: st(t.content, [e]) },
        t.ignoreAttributes
          ? {}
          : (function (e, t) {
              return (
                t ? Object.keys(Lt(Object.assign({}, _t, { plugins: t }))) : At
              ).reduce(function (t, s) {
                var i = (e.getAttribute("data-tippy-" + s) || "").trim();
                if (!i) return t;
                if ("content" === s) t[s] = i;
                else
                  try {
                    t[s] = JSON.parse(i);
                  } catch (e) {
                    t[s] = i;
                  }
                return t;
              }, {});
            })(e, t.plugins)
      );
      return (
        (s.aria = Object.assign({}, _t.aria, s.aria)),
        (s.aria = {
          expanded:
            "auto" === s.aria.expanded ? t.interactive : s.aria.expanded,
          content:
            "auto" === s.aria.content
              ? t.interactive
                ? null
                : "describedby"
              : s.aria.content,
        }),
        s
      );
    }
    function kt(e, t) {
      e.innerHTML = t;
    }
    function Pt(e) {
      var t = ct();
      return (
        !0 === e
          ? (t.className = Ke)
          : ((t.className = Qe), dt(e) ? t.appendChild(e) : kt(t, e)),
        t
      );
    }
    function Mt(e, t) {
      dt(t.content)
        ? (kt(e, ""), e.appendChild(t.content))
        : "function" != typeof t.content &&
          (t.allowHTML ? kt(e, t.content) : (e.textContent = t.content));
    }
    function $t(e) {
      var t = e.firstElementChild,
        s = ot(t.children);
      return {
        box: t,
        content: s.find(function (e) {
          return e.classList.contains(Xe);
        }),
        arrow: s.find(function (e) {
          return e.classList.contains(Ke) || e.classList.contains(Qe);
        }),
        backdrop: s.find(function (e) {
          return e.classList.contains(Ye);
        }),
      };
    }
    function Dt(e) {
      var t = ct(),
        s = ct();
      (s.className = "tippy-box"),
        s.setAttribute("data-state", "hidden"),
        s.setAttribute("tabindex", "-1");
      var i = ct();
      function n(s, i) {
        var n = $t(t),
          r = n.box,
          a = n.content,
          o = n.arrow;
        i.theme
          ? r.setAttribute("data-theme", i.theme)
          : r.removeAttribute("data-theme"),
          "string" == typeof i.animation
            ? r.setAttribute("data-animation", i.animation)
            : r.removeAttribute("data-animation"),
          i.inertia
            ? r.setAttribute("data-inertia", "")
            : r.removeAttribute("data-inertia"),
          (r.style.maxWidth =
            "number" == typeof i.maxWidth ? i.maxWidth + "px" : i.maxWidth),
          i.role ? r.setAttribute("role", i.role) : r.removeAttribute("role"),
          (s.content === i.content && s.allowHTML === i.allowHTML) ||
            Mt(a, e.props),
          i.arrow
            ? o
              ? s.arrow !== i.arrow &&
                (r.removeChild(o), r.appendChild(Pt(i.arrow)))
              : r.appendChild(Pt(i.arrow))
            : o && r.removeChild(o);
      }
      return (
        (i.className = Xe),
        i.setAttribute("data-state", "hidden"),
        Mt(i, e.props),
        t.appendChild(s),
        s.appendChild(i),
        n(e.props, e.props),
        { popper: t, onUpdate: n }
      );
    }
    Dt.$$tippy = !0;
    var Bt = 1,
      Nt = [],
      It = [];
    function qt(e, t) {
      var s,
        i,
        n,
        r,
        a,
        o,
        l,
        c,
        d = Ot(e, Object.assign({}, _t, Lt(lt(t)))),
        u = !1,
        p = !1,
        f = !1,
        h = !1,
        m = [],
        g = it(U, d.interactiveDebounce),
        v = Bt++,
        b = (c = d.plugins).filter(function (e, t) {
          return c.indexOf(e) === t;
        }),
        y = {
          id: v,
          reference: e,
          popper: ct(),
          popperInstance: null,
          props: d,
          state: {
            isEnabled: !0,
            isVisible: !1,
            isDestroyed: !1,
            isMounted: !1,
            isShown: !1,
          },
          plugins: b,
          clearDelayTimeouts: function () {
            clearTimeout(s), clearTimeout(i), cancelAnimationFrame(n);
          },
          setProps: function (t) {
            0;
            if (y.state.isDestroyed) return;
            $("onBeforeUpdate", [y, t]), R();
            var s = y.props,
              i = Ot(e, Object.assign({}, s, lt(t), { ignoreAttributes: !0 }));
            (y.props = i),
              F(),
              s.interactiveDebounce !== i.interactiveDebounce &&
                (N(), (g = it(U, i.interactiveDebounce)));
            s.triggerTarget && !i.triggerTarget
              ? nt(s.triggerTarget).forEach(function (e) {
                  e.removeAttribute("aria-expanded");
                })
              : i.triggerTarget && e.removeAttribute("aria-expanded");
            B(), M(), x && x(s, i);
            y.popperInstance &&
              (Q(),
              J().forEach(function (e) {
                requestAnimationFrame(e._tippy.popperInstance.forceUpdate);
              }));
            $("onAfterUpdate", [y, t]);
          },
          setContent: function (e) {
            y.setProps({ content: e });
          },
          show: function () {
            0;
            var e = y.state.isVisible,
              t = y.state.isDestroyed,
              s = !y.state.isEnabled,
              i = yt.isTouch && !y.props.touch,
              n = et(y.props.duration, 0, _t.duration);
            if (e || t || s || i) return;
            if (L().hasAttribute("disabled")) return;
            if (($("onShow", [y], !1), !1 === y.props.onShow(y))) return;
            (y.state.isVisible = !0), A() && (S.style.visibility = "visible");
            M(), H(), y.state.isMounted || (S.style.transition = "none");
            if (A()) {
              var r = k(),
                a = r.box,
                l = r.content;
              ht([a, l], 0);
            }
            (o = function () {
              var e;
              if (y.state.isVisible && !h) {
                if (
                  ((h = !0),
                  S.offsetHeight,
                  (S.style.transition = y.props.moveTransition),
                  A() && y.props.animation)
                ) {
                  var t = k(),
                    s = t.box,
                    i = t.content;
                  ht([s, i], n), mt([s, i], "visible");
                }
                D(),
                  B(),
                  rt(It, y),
                  null == (e = y.popperInstance) || e.forceUpdate(),
                  $("onMount", [y]),
                  y.props.animation &&
                    A() &&
                    (function (e, t) {
                      z(e, t);
                    })(n, function () {
                      (y.state.isShown = !0), $("onShown", [y]);
                    });
              }
            }),
              (function () {
                var e,
                  t = y.props.appendTo,
                  s = L();
                e =
                  (y.props.interactive && t === Je) || "parent" === t
                    ? s.parentNode
                    : st(t, [s]);
                e.contains(S) || e.appendChild(S);
                (y.state.isMounted = !0), Q(), !1;
              })();
          },
          hide: function () {
            0;
            var e = !y.state.isVisible,
              t = y.state.isDestroyed,
              s = !y.state.isEnabled,
              i = et(y.props.duration, 1, _t.duration);
            if (e || t || s) return;
            if (($("onHide", [y], !1), !1 === y.props.onHide(y))) return;
            (y.state.isVisible = !1),
              (y.state.isShown = !1),
              (h = !1),
              (u = !1),
              A() && (S.style.visibility = "hidden");
            if ((N(), V(), M(!0), A())) {
              var n = k(),
                r = n.box,
                a = n.content;
              y.props.animation && (ht([r, a], i), mt([r, a], "hidden"));
            }
            D(),
              B(),
              y.props.animation
                ? A() &&
                  (function (e, t) {
                    z(e, function () {
                      !y.state.isVisible &&
                        S.parentNode &&
                        S.parentNode.contains(S) &&
                        t();
                    });
                  })(i, y.unmount)
                : y.unmount();
          },
          hideWithInteractivity: function (e) {
            0;
            O().addEventListener("mousemove", g), rt(Nt, g), g(e);
          },
          enable: function () {
            y.state.isEnabled = !0;
          },
          disable: function () {
            y.hide(), (y.state.isEnabled = !1);
          },
          unmount: function () {
            0;
            y.state.isVisible && y.hide();
            if (!y.state.isMounted) return;
            Z(),
              J().forEach(function (e) {
                e._tippy.unmount();
              }),
              S.parentNode && S.parentNode.removeChild(S);
            (It = It.filter(function (e) {
              return e !== y;
            })),
              (y.state.isMounted = !1),
              $("onHidden", [y]);
          },
          destroy: function () {
            0;
            if (y.state.isDestroyed) return;
            y.clearDelayTimeouts(),
              y.unmount(),
              R(),
              delete e._tippy,
              (y.state.isDestroyed = !0),
              $("onDestroy", [y]);
          },
        };
      if (!d.render) return y;
      var w = d.render(y),
        S = w.popper,
        x = w.onUpdate;
      S.setAttribute("data-tippy-root", ""),
        (S.id = "tippy-" + y.id),
        (y.popper = S),
        (e._tippy = y),
        (S._tippy = y);
      var C = b.map(function (e) {
          return e.fn(y);
        }),
        E = e.hasAttribute("aria-expanded");
      return (
        F(),
        B(),
        M(),
        $("onCreate", [y]),
        d.showOnCreate && ee(),
        S.addEventListener("mouseenter", function () {
          y.props.interactive && y.state.isVisible && y.clearDelayTimeouts();
        }),
        S.addEventListener("mouseleave", function () {
          y.props.interactive &&
            y.props.trigger.indexOf("mouseenter") >= 0 &&
            O().addEventListener("mousemove", g);
        }),
        y
      );
      function T() {
        var e = y.props.touch;
        return Array.isArray(e) ? e : [e, 0];
      }
      function _() {
        return "hold" === T()[0];
      }
      function A() {
        var e;
        return !(null == (e = y.props.render) || !e.$$tippy);
      }
      function L() {
        return l || e;
      }
      function O() {
        var e = L().parentNode;
        return e ? gt(e) : document;
      }
      function k() {
        return $t(S);
      }
      function P(e) {
        return (y.state.isMounted && !y.state.isVisible) ||
          yt.isTouch ||
          (r && "focus" === r.type)
          ? 0
          : et(y.props.delay, e ? 0 : 1, _t.delay);
      }
      function M(e) {
        void 0 === e && (e = !1),
          (S.style.pointerEvents = y.props.interactive && !e ? "" : "none"),
          (S.style.zIndex = "" + y.props.zIndex);
      }
      function $(e, t, s) {
        var i;
        (void 0 === s && (s = !0),
        C.forEach(function (s) {
          s[e] && s[e].apply(s, t);
        }),
        s) && (i = y.props)[e].apply(i, t);
      }
      function D() {
        var t = y.props.aria;
        if (t.content) {
          var s = "aria-" + t.content,
            i = S.id;
          nt(y.props.triggerTarget || e).forEach(function (e) {
            var t = e.getAttribute(s);
            if (y.state.isVisible) e.setAttribute(s, t ? t + " " + i : i);
            else {
              var n = t && t.replace(i, "").trim();
              n ? e.setAttribute(s, n) : e.removeAttribute(s);
            }
          });
        }
      }
      function B() {
        !E &&
          y.props.aria.expanded &&
          nt(y.props.triggerTarget || e).forEach(function (e) {
            y.props.interactive
              ? e.setAttribute(
                  "aria-expanded",
                  y.state.isVisible && e === L() ? "true" : "false"
                )
              : e.removeAttribute("aria-expanded");
          });
      }
      function N() {
        O().removeEventListener("mousemove", g),
          (Nt = Nt.filter(function (e) {
            return e !== g;
          }));
      }
      function I(t) {
        if (!yt.isTouch || (!f && "mousedown" !== t.type)) {
          var s = (t.composedPath && t.composedPath()[0]) || t.target;
          if (!y.props.interactive || !bt(S, s)) {
            if (
              nt(y.props.triggerTarget || e).some(function (e) {
                return bt(e, s);
              })
            ) {
              if (yt.isTouch) return;
              if (y.state.isVisible && y.props.trigger.indexOf("click") >= 0)
                return;
            } else $("onClickOutside", [y, t]);
            !0 === y.props.hideOnClick &&
              (y.clearDelayTimeouts(),
              y.hide(),
              (p = !0),
              setTimeout(function () {
                p = !1;
              }),
              y.state.isMounted || V());
          }
        }
      }
      function q() {
        f = !0;
      }
      function j() {
        f = !1;
      }
      function H() {
        var e = O();
        e.addEventListener("mousedown", I, !0),
          e.addEventListener("touchend", I, Ze),
          e.addEventListener("touchstart", j, Ze),
          e.addEventListener("touchmove", q, Ze);
      }
      function V() {
        var e = O();
        e.removeEventListener("mousedown", I, !0),
          e.removeEventListener("touchend", I, Ze),
          e.removeEventListener("touchstart", j, Ze),
          e.removeEventListener("touchmove", q, Ze);
      }
      function z(e, t) {
        var s = k().box;
        function i(e) {
          e.target === s && (vt(s, "remove", i), t());
        }
        if (0 === e) return t();
        vt(s, "remove", a), vt(s, "add", i), (a = i);
      }
      function G(t, s, i) {
        void 0 === i && (i = !1),
          nt(y.props.triggerTarget || e).forEach(function (e) {
            e.addEventListener(t, s, i),
              m.push({ node: e, eventType: t, handler: s, options: i });
          });
      }
      function F() {
        _() &&
          (G("touchstart", W, { passive: !0 }),
          G("touchend", X, { passive: !0 })),
          (function (e) {
            return e.split(/\s+/).filter(Boolean);
          })(y.props.trigger).forEach(function (e) {
            if ("manual" !== e)
              switch ((G(e, W), e)) {
                case "mouseenter":
                  G("mouseleave", X);
                  break;
                case "focus":
                  G(Et ? "focusout" : "blur", Y);
                  break;
                case "focusin":
                  G("focusout", Y);
              }
          });
      }
      function R() {
        m.forEach(function (e) {
          var t = e.node,
            s = e.eventType,
            i = e.handler,
            n = e.options;
          t.removeEventListener(s, i, n);
        }),
          (m = []);
      }
      function W(e) {
        var t,
          s = !1;
        if (y.state.isEnabled && !K(e) && !p) {
          var i = "focus" === (null == (t = r) ? void 0 : t.type);
          (r = e),
            (l = e.currentTarget),
            B(),
            !y.state.isVisible &&
              ut(e) &&
              Nt.forEach(function (t) {
                return t(e);
              }),
            "click" === e.type &&
            (y.props.trigger.indexOf("mouseenter") < 0 || u) &&
            !1 !== y.props.hideOnClick &&
            y.state.isVisible
              ? (s = !0)
              : ee(e),
            "click" === e.type && (u = !s),
            s && !i && te(e);
        }
      }
      function U(e) {
        var t = e.target,
          s = L().contains(t) || S.contains(t);
        if ("mousemove" !== e.type || !s) {
          var i = J()
            .concat(S)
            .map(function (e) {
              var t,
                s = null == (t = e._tippy.popperInstance) ? void 0 : t.state;
              return s
                ? {
                    popperRect: e.getBoundingClientRect(),
                    popperState: s,
                    props: d,
                  }
                : null;
            })
            .filter(Boolean);
          (function (e, t) {
            var s = t.clientX,
              i = t.clientY;
            return e.every(function (e) {
              var t = e.popperRect,
                n = e.popperState,
                r = e.props.interactiveBorder,
                a = at(n.placement),
                o = n.modifiersData.offset;
              if (!o) return !0;
              var l = "bottom" === a ? o.top.y : 0,
                c = "top" === a ? o.bottom.y : 0,
                d = "right" === a ? o.left.x : 0,
                u = "left" === a ? o.right.x : 0,
                p = t.top - i + l > r,
                f = i - t.bottom - c > r,
                h = t.left - s + d > r,
                m = s - t.right - u > r;
              return p || f || h || m;
            });
          })(i, e) && (N(), te(e));
        }
      }
      function X(e) {
        K(e) ||
          (y.props.trigger.indexOf("click") >= 0 && u) ||
          (y.props.interactive ? y.hideWithInteractivity(e) : te(e));
      }
      function Y(e) {
        (y.props.trigger.indexOf("focusin") < 0 && e.target !== L()) ||
          (y.props.interactive &&
            e.relatedTarget &&
            S.contains(e.relatedTarget)) ||
          te(e);
      }
      function K(e) {
        return !!yt.isTouch && _() !== e.type.indexOf("touch") >= 0;
      }
      function Q() {
        Z();
        var t = y.props,
          s = t.popperOptions,
          i = t.placement,
          n = t.offset,
          r = t.getReferenceClientRect,
          a = t.moveTransition,
          l = A() ? $t(S).arrow : null,
          c = r
            ? {
                getBoundingClientRect: r,
                contextElement: r.contextElement || L(),
              }
            : e,
          d = {
            name: "$$tippy",
            enabled: !0,
            phase: "beforeWrite",
            requires: ["computeStyles"],
            fn: function (e) {
              var t = e.state;
              if (A()) {
                var s = k().box;
                ["placement", "reference-hidden", "escaped"].forEach(function (
                  e
                ) {
                  "placement" === e
                    ? s.setAttribute("data-placement", t.placement)
                    : t.attributes.popper["data-popper-" + e]
                    ? s.setAttribute("data-" + e, "")
                    : s.removeAttribute("data-" + e);
                }),
                  (t.attributes.popper = {});
              }
            },
          },
          u = [
            { name: "offset", options: { offset: n } },
            {
              name: "preventOverflow",
              options: { padding: { top: 2, bottom: 2, left: 5, right: 5 } },
            },
            { name: "flip", options: { padding: 5 } },
            { name: "computeStyles", options: { adaptive: !a } },
            d,
          ];
        A() &&
          l &&
          u.push({ name: "arrow", options: { element: l, padding: 3 } }),
          u.push.apply(u, (null == s ? void 0 : s.modifiers) || []),
          (y.popperInstance = Ue(
            c,
            S,
            Object.assign({}, s, {
              placement: i,
              onFirstUpdate: o,
              modifiers: u,
            })
          ));
      }
      function Z() {
        y.popperInstance &&
          (y.popperInstance.destroy(), (y.popperInstance = null));
      }
      function J() {
        return ot(S.querySelectorAll("[data-tippy-root]"));
      }
      function ee(e) {
        y.clearDelayTimeouts(), e && $("onTrigger", [y, e]), H();
        var t = P(!0),
          i = T(),
          n = i[0],
          r = i[1];
        yt.isTouch && "hold" === n && r && (t = r),
          t
            ? (s = setTimeout(function () {
                y.show();
              }, t))
            : y.show();
      }
      function te(e) {
        if (
          (y.clearDelayTimeouts(), $("onUntrigger", [y, e]), y.state.isVisible)
        ) {
          if (
            !(
              y.props.trigger.indexOf("mouseenter") >= 0 &&
              y.props.trigger.indexOf("click") >= 0 &&
              ["mouseleave", "mousemove"].indexOf(e.type) >= 0 &&
              u
            )
          ) {
            var t = P(!1);
            t
              ? (i = setTimeout(function () {
                  y.state.isVisible && y.hide();
                }, t))
              : (n = requestAnimationFrame(function () {
                  y.hide();
                }));
          }
        } else V();
      }
    }
    function jt(e, t) {
      void 0 === t && (t = {});
      var s = _t.plugins.concat(t.plugins || []);
      document.addEventListener("touchstart", St, Ze),
        window.addEventListener("blur", Ct);
      var i = Object.assign({}, t, { plugins: s }),
        n = ft(e).reduce(function (e, t) {
          var s = t && qt(t, i);
          return s && e.push(s), e;
        }, []);
      return dt(e) ? n[0] : n;
    }
    (jt.defaultProps = _t),
      (jt.setDefaultProps = function (e) {
        Object.keys(e).forEach(function (t) {
          _t[t] = e[t];
        });
      }),
      (jt.currentInput = yt);
    Object.assign({}, Oe, {
      effect: function (e) {
        var t = e.state,
          s = {
            popper: {
              position: t.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        Object.assign(t.elements.popper.style, s.popper),
          (t.styles = s),
          t.elements.arrow && Object.assign(t.elements.arrow.style, s.arrow);
      },
    });
    jt.setDefaultProps({ render: Dt });
    function Ht(e) {
      return (
        null !== e &&
        "object" == typeof e &&
        "constructor" in e &&
        e.constructor === Object
      );
    }
    function Vt(e = {}, t = {}) {
      Object.keys(t).forEach((s) => {
        void 0 === e[s]
          ? (e[s] = t[s])
          : Ht(t[s]) &&
            Ht(e[s]) &&
            Object.keys(t[s]).length > 0 &&
            Vt(e[s], t[s]);
      });
    }
    jt("[data-tippy-content]", {});
    const zt = {
      body: {},
      addEventListener() {},
      removeEventListener() {},
      activeElement: { blur() {}, nodeName: "" },
      querySelector: () => null,
      querySelectorAll: () => [],
      getElementById: () => null,
      createEvent: () => ({ initEvent() {} }),
      createElement: () => ({
        children: [],
        childNodes: [],
        style: {},
        setAttribute() {},
        getElementsByTagName: () => [],
      }),
      createElementNS: () => ({}),
      importNode: () => null,
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
    };
    function Gt() {
      const e = "undefined" != typeof document ? document : {};
      return Vt(e, zt), e;
    }
    const Ft = {
      document: zt,
      navigator: { userAgent: "" },
      location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: "",
      },
      history: { replaceState() {}, pushState() {}, go() {}, back() {} },
      CustomEvent: function () {
        return this;
      },
      addEventListener() {},
      removeEventListener() {},
      getComputedStyle: () => ({ getPropertyValue: () => "" }),
      Image() {},
      Date() {},
      screen: {},
      setTimeout() {},
      clearTimeout() {},
      matchMedia: () => ({}),
      requestAnimationFrame: (e) =>
        "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
      cancelAnimationFrame(e) {
        "undefined" != typeof setTimeout && clearTimeout(e);
      },
    };
    function Rt() {
      const e = "undefined" != typeof window ? window : {};
      return Vt(e, Ft), e;
    }
    class Wt extends Array {
      constructor(e) {
        "number" == typeof e
          ? super(e)
          : (super(...(e || [])),
            (function (e) {
              const t = e.__proto__;
              Object.defineProperty(e, "__proto__", {
                get: () => t,
                set(e) {
                  t.__proto__ = e;
                },
              });
            })(this));
      }
    }
    function Ut(e = []) {
      const t = [];
      return (
        e.forEach((e) => {
          Array.isArray(e) ? t.push(...Ut(e)) : t.push(e);
        }),
        t
      );
    }
    function Xt(e, t) {
      return Array.prototype.filter.call(e, t);
    }
    function Yt(e, t) {
      const s = Rt(),
        i = Gt();
      let n = [];
      if (!t && e instanceof Wt) return e;
      if (!e) return new Wt(n);
      if ("string" == typeof e) {
        const s = e.trim();
        if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
          let e = "div";
          0 === s.indexOf("<li") && (e = "ul"),
            0 === s.indexOf("<tr") && (e = "tbody"),
            (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
            0 === s.indexOf("<tbody") && (e = "table"),
            0 === s.indexOf("<option") && (e = "select");
          const t = i.createElement(e);
          t.innerHTML = s;
          for (let e = 0; e < t.childNodes.length; e += 1)
            n.push(t.childNodes[e]);
        } else
          n = (function (e, t) {
            if ("string" != typeof e) return [e];
            const s = [],
              i = t.querySelectorAll(e);
            for (let e = 0; e < i.length; e += 1) s.push(i[e]);
            return s;
          })(e.trim(), t || i);
      } else if (e.nodeType || e === s || e === i) n.push(e);
      else if (Array.isArray(e)) {
        if (e instanceof Wt) return e;
        n = e;
      }
      return new Wt(
        (function (e) {
          const t = [];
          for (let s = 0; s < e.length; s += 1)
            -1 === t.indexOf(e[s]) && t.push(e[s]);
          return t;
        })(n)
      );
    }
    Yt.fn = Wt.prototype;
    const Kt = "resize scroll".split(" ");
    function Qt(e) {
      return function (...t) {
        if (void 0 === t[0]) {
          for (let t = 0; t < this.length; t += 1)
            Kt.indexOf(e) < 0 &&
              (e in this[t] ? this[t][e]() : Yt(this[t]).trigger(e));
          return this;
        }
        return this.on(e, ...t);
      };
    }
    Qt("click"),
      Qt("blur"),
      Qt("focus"),
      Qt("focusin"),
      Qt("focusout"),
      Qt("keyup"),
      Qt("keydown"),
      Qt("keypress"),
      Qt("submit"),
      Qt("change"),
      Qt("mousedown"),
      Qt("mousemove"),
      Qt("mouseup"),
      Qt("mouseenter"),
      Qt("mouseleave"),
      Qt("mouseout"),
      Qt("mouseover"),
      Qt("touchstart"),
      Qt("touchend"),
      Qt("touchmove"),
      Qt("resize"),
      Qt("scroll");
    const Zt = {
      addClass: function (...e) {
        const t = Ut(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.add(...t);
          }),
          this
        );
      },
      removeClass: function (...e) {
        const t = Ut(e.map((e) => e.split(" ")));
        return (
          this.forEach((e) => {
            e.classList.remove(...t);
          }),
          this
        );
      },
      hasClass: function (...e) {
        const t = Ut(e.map((e) => e.split(" ")));
        return (
          Xt(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
            .length > 0
        );
      },
      toggleClass: function (...e) {
        const t = Ut(e.map((e) => e.split(" ")));
        this.forEach((e) => {
          t.forEach((t) => {
            e.classList.toggle(t);
          });
        });
      },
      attr: function (e, t) {
        if (1 === arguments.length && "string" == typeof e)
          return this[0] ? this[0].getAttribute(e) : void 0;
        for (let s = 0; s < this.length; s += 1)
          if (2 === arguments.length) this[s].setAttribute(e, t);
          else
            for (const t in e)
              (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
        return this;
      },
      removeAttr: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
        return this;
      },
      transform: function (e) {
        for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
        return this;
      },
      transition: function (e) {
        for (let t = 0; t < this.length; t += 1)
          this[t].style.transitionDuration =
            "string" != typeof e ? `${e}ms` : e;
        return this;
      },
      on: function (...e) {
        let [t, s, i, n] = e;
        function r(e) {
          const t = e.target;
          if (!t) return;
          const n = e.target.dom7EventData || [];
          if ((n.indexOf(e) < 0 && n.unshift(e), Yt(t).is(s))) i.apply(t, n);
          else {
            const e = Yt(t).parents();
            for (let t = 0; t < e.length; t += 1)
              Yt(e[t]).is(s) && i.apply(e[t], n);
          }
        }
        function a(e) {
          const t = (e && e.target && e.target.dom7EventData) || [];
          t.indexOf(e) < 0 && t.unshift(e), i.apply(this, t);
        }
        "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
          n || (n = !1);
        const o = t.split(" ");
        let l;
        for (let e = 0; e < this.length; e += 1) {
          const t = this[e];
          if (s)
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7LiveListeners || (t.dom7LiveListeners = {}),
                t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
                t.dom7LiveListeners[e].push({ listener: i, proxyListener: r }),
                t.addEventListener(e, r, n);
            }
          else
            for (l = 0; l < o.length; l += 1) {
              const e = o[l];
              t.dom7Listeners || (t.dom7Listeners = {}),
                t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
                t.dom7Listeners[e].push({ listener: i, proxyListener: a }),
                t.addEventListener(e, a, n);
            }
        }
        return this;
      },
      off: function (...e) {
        let [t, s, i, n] = e;
        "function" == typeof e[1] && (([t, i, n] = e), (s = void 0)),
          n || (n = !1);
        const r = t.split(" ");
        for (let e = 0; e < r.length; e += 1) {
          const t = r[e];
          for (let e = 0; e < this.length; e += 1) {
            const r = this[e];
            let a;
            if (
              (!s && r.dom7Listeners
                ? (a = r.dom7Listeners[t])
                : s && r.dom7LiveListeners && (a = r.dom7LiveListeners[t]),
              a && a.length)
            )
              for (let e = a.length - 1; e >= 0; e -= 1) {
                const s = a[e];
                (i && s.listener === i) ||
                (i &&
                  s.listener &&
                  s.listener.dom7proxy &&
                  s.listener.dom7proxy === i)
                  ? (r.removeEventListener(t, s.proxyListener, n),
                    a.splice(e, 1))
                  : i ||
                    (r.removeEventListener(t, s.proxyListener, n),
                    a.splice(e, 1));
              }
          }
        }
        return this;
      },
      trigger: function (...e) {
        const t = Rt(),
          s = e[0].split(" "),
          i = e[1];
        for (let n = 0; n < s.length; n += 1) {
          const r = s[n];
          for (let s = 0; s < this.length; s += 1) {
            const n = this[s];
            if (t.CustomEvent) {
              const s = new t.CustomEvent(r, {
                detail: i,
                bubbles: !0,
                cancelable: !0,
              });
              (n.dom7EventData = e.filter((e, t) => t > 0)),
                n.dispatchEvent(s),
                (n.dom7EventData = []),
                delete n.dom7EventData;
            }
          }
        }
        return this;
      },
      transitionEnd: function (e) {
        const t = this;
        return (
          e &&
            t.on("transitionend", function s(i) {
              i.target === this && (e.call(this, i), t.off("transitionend", s));
            }),
          this
        );
      },
      outerWidth: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetWidth +
              parseFloat(e.getPropertyValue("margin-right")) +
              parseFloat(e.getPropertyValue("margin-left"))
            );
          }
          return this[0].offsetWidth;
        }
        return null;
      },
      outerHeight: function (e) {
        if (this.length > 0) {
          if (e) {
            const e = this.styles();
            return (
              this[0].offsetHeight +
              parseFloat(e.getPropertyValue("margin-top")) +
              parseFloat(e.getPropertyValue("margin-bottom"))
            );
          }
          return this[0].offsetHeight;
        }
        return null;
      },
      styles: function () {
        const e = Rt();
        return this[0] ? e.getComputedStyle(this[0], null) : {};
      },
      offset: function () {
        if (this.length > 0) {
          const e = Rt(),
            t = Gt(),
            s = this[0],
            i = s.getBoundingClientRect(),
            n = t.body,
            r = s.clientTop || n.clientTop || 0,
            a = s.clientLeft || n.clientLeft || 0,
            o = s === e ? e.scrollY : s.scrollTop,
            l = s === e ? e.scrollX : s.scrollLeft;
          return { top: i.top + o - r, left: i.left + l - a };
        }
        return null;
      },
      css: function (e, t) {
        const s = Rt();
        let i;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (i = 0; i < this.length; i += 1)
              for (const t in e) this[i].style[t] = e[t];
            return this;
          }
          if (this[0])
            return s.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 === arguments.length && "string" == typeof e) {
          for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
          return this;
        }
        return this;
      },
      each: function (e) {
        return e
          ? (this.forEach((t, s) => {
              e.apply(t, [t, s]);
            }),
            this)
          : this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : null;
        for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
        return this;
      },
      is: function (e) {
        const t = Rt(),
          s = Gt(),
          i = this[0];
        let n, r;
        if (!i || void 0 === e) return !1;
        if ("string" == typeof e) {
          if (i.matches) return i.matches(e);
          if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
          if (i.msMatchesSelector) return i.msMatchesSelector(e);
          for (n = Yt(e), r = 0; r < n.length; r += 1)
            if (n[r] === i) return !0;
          return !1;
        }
        if (e === s) return i === s;
        if (e === t) return i === t;
        if (e.nodeType || e instanceof Wt) {
          for (n = e.nodeType ? [e] : e, r = 0; r < n.length; r += 1)
            if (n[r] === i) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        let e,
          t = this[0];
        if (t) {
          for (e = 0; null !== (t = t.previousSibling); )
            1 === t.nodeType && (e += 1);
          return e;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        const t = this.length;
        if (e > t - 1) return Yt([]);
        if (e < 0) {
          const s = t + e;
          return Yt(s < 0 ? [] : [this[s]]);
        }
        return Yt([this[e]]);
      },
      append: function (...e) {
        let t;
        const s = Gt();
        for (let i = 0; i < e.length; i += 1) {
          t = e[i];
          for (let e = 0; e < this.length; e += 1)
            if ("string" == typeof t) {
              const i = s.createElement("div");
              for (i.innerHTML = t; i.firstChild; )
                this[e].appendChild(i.firstChild);
            } else if (t instanceof Wt)
              for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
            else this[e].appendChild(t);
        }
        return this;
      },
      prepend: function (e) {
        const t = Gt();
        let s, i;
        for (s = 0; s < this.length; s += 1)
          if ("string" == typeof e) {
            const n = t.createElement("div");
            for (n.innerHTML = e, i = n.childNodes.length - 1; i >= 0; i -= 1)
              this[s].insertBefore(n.childNodes[i], this[s].childNodes[0]);
          } else if (e instanceof Wt)
            for (i = 0; i < e.length; i += 1)
              this[s].insertBefore(e[i], this[s].childNodes[0]);
          else this[s].insertBefore(e, this[s].childNodes[0]);
        return this;
      },
      next: function (e) {
        return this.length > 0
          ? e
            ? this[0].nextElementSibling && Yt(this[0].nextElementSibling).is(e)
              ? Yt([this[0].nextElementSibling])
              : Yt([])
            : this[0].nextElementSibling
            ? Yt([this[0].nextElementSibling])
            : Yt([])
          : Yt([]);
      },
      nextAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return Yt([]);
        for (; s.nextElementSibling; ) {
          const i = s.nextElementSibling;
          e ? Yt(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return Yt(t);
      },
      prev: function (e) {
        if (this.length > 0) {
          const t = this[0];
          return e
            ? t.previousElementSibling && Yt(t.previousElementSibling).is(e)
              ? Yt([t.previousElementSibling])
              : Yt([])
            : t.previousElementSibling
            ? Yt([t.previousElementSibling])
            : Yt([]);
        }
        return Yt([]);
      },
      prevAll: function (e) {
        const t = [];
        let s = this[0];
        if (!s) return Yt([]);
        for (; s.previousElementSibling; ) {
          const i = s.previousElementSibling;
          e ? Yt(i).is(e) && t.push(i) : t.push(i), (s = i);
        }
        return Yt(t);
      },
      parent: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1)
          null !== this[s].parentNode &&
            (e
              ? Yt(this[s].parentNode).is(e) && t.push(this[s].parentNode)
              : t.push(this[s].parentNode));
        return Yt(t);
      },
      parents: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          let i = this[s].parentNode;
          for (; i; )
            e ? Yt(i).is(e) && t.push(i) : t.push(i), (i = i.parentNode);
        }
        return Yt(t);
      },
      closest: function (e) {
        let t = this;
        return void 0 === e ? Yt([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
      },
      find: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].querySelectorAll(e);
          for (let e = 0; e < i.length; e += 1) t.push(i[e]);
        }
        return Yt(t);
      },
      children: function (e) {
        const t = [];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s].children;
          for (let s = 0; s < i.length; s += 1)
            (e && !Yt(i[s]).is(e)) || t.push(i[s]);
        }
        return Yt(t);
      },
      filter: function (e) {
        return Yt(Xt(this, e));
      },
      remove: function () {
        for (let e = 0; e < this.length; e += 1)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
    };
    Object.keys(Zt).forEach((e) => {
      Object.defineProperty(Yt.fn, e, { value: Zt[e], writable: !0 });
    });
    const Jt = Yt;
    function es(e, t) {
      return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function ts() {
      return Date.now();
    }
    function ss(e, t) {
      void 0 === t && (t = "x");
      const s = Rt();
      let i, n, r;
      const a = (function (e) {
        const t = Rt();
        let s;
        return (
          t.getComputedStyle && (s = t.getComputedStyle(e, null)),
          !s && e.currentStyle && (s = e.currentStyle),
          s || (s = e.style),
          s
        );
      })(e);
      return (
        s.WebKitCSSMatrix
          ? ((n = a.transform || a.webkitTransform),
            n.split(",").length > 6 &&
              (n = n
                .split(", ")
                .map((e) => e.replace(",", "."))
                .join(", ")),
            (r = new s.WebKitCSSMatrix("none" === n ? "" : n)))
          : ((r =
              a.MozTransform ||
              a.OTransform ||
              a.MsTransform ||
              a.msTransform ||
              a.transform ||
              a
                .getPropertyValue("transform")
                .replace("translate(", "matrix(1, 0, 0, 1,")),
            (i = r.toString().split(","))),
        "x" === t &&
          (n = s.WebKitCSSMatrix
            ? r.m41
            : 16 === i.length
            ? parseFloat(i[12])
            : parseFloat(i[4])),
        "y" === t &&
          (n = s.WebKitCSSMatrix
            ? r.m42
            : 16 === i.length
            ? parseFloat(i[13])
            : parseFloat(i[5])),
        n || 0
      );
    }
    function is(e) {
      return (
        "object" == typeof e &&
        null !== e &&
        e.constructor &&
        "Object" === Object.prototype.toString.call(e).slice(8, -1)
      );
    }
    function ns(e) {
      return "undefined" != typeof window && void 0 !== window.HTMLElement
        ? e instanceof HTMLElement
        : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function rs() {
      const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ["__proto__", "constructor", "prototype"];
      for (let s = 1; s < arguments.length; s += 1) {
        const i = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        if (null != i && !ns(i)) {
          const s = Object.keys(Object(i)).filter((e) => t.indexOf(e) < 0);
          for (let t = 0, n = s.length; t < n; t += 1) {
            const n = s[t],
              r = Object.getOwnPropertyDescriptor(i, n);
            void 0 !== r &&
              r.enumerable &&
              (is(e[n]) && is(i[n])
                ? i[n].__swiper__
                  ? (e[n] = i[n])
                  : rs(e[n], i[n])
                : !is(e[n]) && is(i[n])
                ? ((e[n] = {}),
                  i[n].__swiper__ ? (e[n] = i[n]) : rs(e[n], i[n]))
                : (e[n] = i[n]));
          }
        }
      }
      return e;
    }
    function as(e, t, s) {
      e.style.setProperty(t, s);
    }
    function os(e) {
      let { swiper: t, targetPosition: s, side: i } = e;
      const n = Rt(),
        r = -t.translate;
      let a,
        o = null;
      const l = t.params.speed;
      (t.wrapperEl.style.scrollSnapType = "none"),
        n.cancelAnimationFrame(t.cssModeFrameID);
      const c = s > r ? "next" : "prev",
        d = (e, t) => ("next" === c && e >= t) || ("prev" === c && e <= t),
        u = () => {
          (a = new Date().getTime()), null === o && (o = a);
          const e = Math.max(Math.min((a - o) / l, 1), 0),
            c = 0.5 - Math.cos(e * Math.PI) / 2;
          let p = r + c * (s - r);
          if ((d(p, s) && (p = s), t.wrapperEl.scrollTo({ [i]: p }), d(p, s)))
            return (
              (t.wrapperEl.style.overflow = "hidden"),
              (t.wrapperEl.style.scrollSnapType = ""),
              setTimeout(() => {
                (t.wrapperEl.style.overflow = ""),
                  t.wrapperEl.scrollTo({ [i]: p });
              }),
              void n.cancelAnimationFrame(t.cssModeFrameID)
            );
          t.cssModeFrameID = n.requestAnimationFrame(u);
        };
      u();
    }
    let ls, cs, ds;
    function us() {
      return (
        ls ||
          (ls = (function () {
            const e = Rt(),
              t = Gt();
            return {
              smoothScroll:
                t.documentElement &&
                "scrollBehavior" in t.documentElement.style,
              touch: !!(
                "ontouchstart" in e ||
                (e.DocumentTouch && t instanceof e.DocumentTouch)
              ),
              passiveListener: (function () {
                let t = !1;
                try {
                  const s = Object.defineProperty({}, "passive", {
                    get() {
                      t = !0;
                    },
                  });
                  e.addEventListener("testPassiveListener", null, s);
                } catch (e) {}
                return t;
              })(),
              gestures: "ongesturestart" in e,
            };
          })()),
        ls
      );
    }
    function ps(e) {
      return (
        void 0 === e && (e = {}),
        cs ||
          (cs = (function (e) {
            let { userAgent: t } = void 0 === e ? {} : e;
            const s = us(),
              i = Rt(),
              n = i.navigator.platform,
              r = t || i.navigator.userAgent,
              a = { ios: !1, android: !1 },
              o = i.screen.width,
              l = i.screen.height,
              c = r.match(/(Android);?[\s\/]+([\d.]+)?/);
            let d = r.match(/(iPad).*OS\s([\d_]+)/);
            const u = r.match(/(iPod)(.*OS\s([\d_]+))?/),
              p = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
              f = "Win32" === n;
            let h = "MacIntel" === n;
            return (
              !d &&
                h &&
                s.touch &&
                [
                  "1024x1366",
                  "1366x1024",
                  "834x1194",
                  "1194x834",
                  "834x1112",
                  "1112x834",
                  "768x1024",
                  "1024x768",
                  "820x1180",
                  "1180x820",
                  "810x1080",
                  "1080x810",
                ].indexOf(`${o}x${l}`) >= 0 &&
                ((d = r.match(/(Version)\/([\d.]+)/)),
                d || (d = [0, 1, "13_0_0"]),
                (h = !1)),
              c && !f && ((a.os = "android"), (a.android = !0)),
              (d || p || u) && ((a.os = "ios"), (a.ios = !0)),
              a
            );
          })(e)),
        cs
      );
    }
    function fs() {
      return (
        ds ||
          (ds = (function () {
            const e = Rt();
            return {
              isSafari: (function () {
                const t = e.navigator.userAgent.toLowerCase();
                return (
                  t.indexOf("safari") >= 0 &&
                  t.indexOf("chrome") < 0 &&
                  t.indexOf("android") < 0
                );
              })(),
              isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
                e.navigator.userAgent
              ),
            };
          })()),
        ds
      );
    }
    const hs = {
      on(e, t, s) {
        const i = this;
        if ("function" != typeof t) return i;
        const n = s ? "unshift" : "push";
        return (
          e.split(" ").forEach((e) => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []),
              i.eventsListeners[e][n](t);
          }),
          i
        );
      },
      once(e, t, s) {
        const i = this;
        if ("function" != typeof t) return i;
        function n() {
          i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
          for (var s = arguments.length, r = new Array(s), a = 0; a < s; a++)
            r[a] = arguments[a];
          t.apply(i, r);
        }
        return (n.__emitterProxy = t), i.on(e, n, s);
      },
      onAny(e, t) {
        const s = this;
        if ("function" != typeof e) return s;
        const i = t ? "unshift" : "push";
        return (
          s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[i](e), s
        );
      },
      offAny(e) {
        const t = this;
        if (!t.eventsAnyListeners) return t;
        const s = t.eventsAnyListeners.indexOf(e);
        return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
      },
      off(e, t) {
        const s = this;
        return s.eventsListeners
          ? (e.split(" ").forEach((e) => {
              void 0 === t
                ? (s.eventsListeners[e] = [])
                : s.eventsListeners[e] &&
                  s.eventsListeners[e].forEach((i, n) => {
                    (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                      s.eventsListeners[e].splice(n, 1);
                  });
            }),
            s)
          : s;
      },
      emit() {
        const e = this;
        if (!e.eventsListeners) return e;
        let t, s, i;
        for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        "string" == typeof r[0] || Array.isArray(r[0])
          ? ((t = r[0]), (s = r.slice(1, r.length)), (i = e))
          : ((t = r[0].events), (s = r[0].data), (i = r[0].context || e)),
          s.unshift(i);
        return (
          (Array.isArray(t) ? t : t.split(" ")).forEach((t) => {
            e.eventsAnyListeners &&
              e.eventsAnyListeners.length &&
              e.eventsAnyListeners.forEach((e) => {
                e.apply(i, [t, ...s]);
              }),
              e.eventsListeners &&
                e.eventsListeners[t] &&
                e.eventsListeners[t].forEach((e) => {
                  e.apply(i, s);
                });
          }),
          e
        );
      },
    };
    const ms = {
      updateSize: function () {
        const e = this;
        let t, s;
        const i = e.$el;
        (t =
          void 0 !== e.params.width && null !== e.params.width
            ? e.params.width
            : i[0].clientWidth),
          (s =
            void 0 !== e.params.height && null !== e.params.height
              ? e.params.height
              : i[0].clientHeight),
          (0 === t && e.isHorizontal()) ||
            (0 === s && e.isVertical()) ||
            ((t =
              t -
              parseInt(i.css("padding-left") || 0, 10) -
              parseInt(i.css("padding-right") || 0, 10)),
            (s =
              s -
              parseInt(i.css("padding-top") || 0, 10) -
              parseInt(i.css("padding-bottom") || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(s) && (s = 0),
            Object.assign(e, {
              width: t,
              height: s,
              size: e.isHorizontal() ? t : s,
            }));
      },
      updateSlides: function () {
        const e = this;
        function t(t) {
          return e.isHorizontal()
            ? t
            : {
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom",
              }[t];
        }
        function s(e, s) {
          return parseFloat(e.getPropertyValue(t(s)) || 0);
        }
        const i = e.params,
          { $wrapperEl: n, size: r, rtlTranslate: a, wrongRTL: o } = e,
          l = e.virtual && i.virtual.enabled,
          c = l ? e.virtual.slides.length : e.slides.length,
          d = n.children(`.${e.params.slideClass}`),
          u = l ? e.virtual.slides.length : d.length;
        let p = [];
        const f = [],
          h = [];
        let m = i.slidesOffsetBefore;
        "function" == typeof m && (m = i.slidesOffsetBefore.call(e));
        let g = i.slidesOffsetAfter;
        "function" == typeof g && (g = i.slidesOffsetAfter.call(e));
        const v = e.snapGrid.length,
          b = e.slidesGrid.length;
        let y = i.spaceBetween,
          w = -m,
          S = 0,
          x = 0;
        if (void 0 === r) return;
        "string" == typeof y &&
          y.indexOf("%") >= 0 &&
          (y = (parseFloat(y.replace("%", "")) / 100) * r),
          (e.virtualSize = -y),
          a
            ? d.css({ marginLeft: "", marginBottom: "", marginTop: "" })
            : d.css({ marginRight: "", marginBottom: "", marginTop: "" }),
          i.centeredSlides &&
            i.cssMode &&
            (as(e.wrapperEl, "--swiper-centered-offset-before", ""),
            as(e.wrapperEl, "--swiper-centered-offset-after", ""));
        const C = i.grid && i.grid.rows > 1 && e.grid;
        let E;
        C && e.grid.initSlides(u);
        const T =
          "auto" === i.slidesPerView &&
          i.breakpoints &&
          Object.keys(i.breakpoints).filter(
            (e) => void 0 !== i.breakpoints[e].slidesPerView
          ).length > 0;
        for (let n = 0; n < u; n += 1) {
          E = 0;
          const a = d.eq(n);
          if (
            (C && e.grid.updateSlide(n, a, u, t), "none" !== a.css("display"))
          ) {
            if ("auto" === i.slidesPerView) {
              T && (d[n].style[t("width")] = "");
              const r = getComputedStyle(a[0]),
                o = a[0].style.transform,
                l = a[0].style.webkitTransform;
              if (
                (o && (a[0].style.transform = "none"),
                l && (a[0].style.webkitTransform = "none"),
                i.roundLengths)
              )
                E = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
              else {
                const e = s(r, "width"),
                  t = s(r, "padding-left"),
                  i = s(r, "padding-right"),
                  n = s(r, "margin-left"),
                  o = s(r, "margin-right"),
                  l = r.getPropertyValue("box-sizing");
                if (l && "border-box" === l) E = e + n + o;
                else {
                  const { clientWidth: s, offsetWidth: r } = a[0];
                  E = e + t + i + n + o + (r - s);
                }
              }
              o && (a[0].style.transform = o),
                l && (a[0].style.webkitTransform = l),
                i.roundLengths && (E = Math.floor(E));
            } else
              (E = (r - (i.slidesPerView - 1) * y) / i.slidesPerView),
                i.roundLengths && (E = Math.floor(E)),
                d[n] && (d[n].style[t("width")] = `${E}px`);
            d[n] && (d[n].swiperSlideSize = E),
              h.push(E),
              i.centeredSlides
                ? ((w = w + E / 2 + S / 2 + y),
                  0 === S && 0 !== n && (w = w - r / 2 - y),
                  0 === n && (w = w - r / 2 - y),
                  Math.abs(w) < 0.001 && (w = 0),
                  i.roundLengths && (w = Math.floor(w)),
                  x % i.slidesPerGroup == 0 && p.push(w),
                  f.push(w))
                : (i.roundLengths && (w = Math.floor(w)),
                  (x - Math.min(e.params.slidesPerGroupSkip, x)) %
                    e.params.slidesPerGroup ==
                    0 && p.push(w),
                  f.push(w),
                  (w = w + E + y)),
              (e.virtualSize += E + y),
              (S = E),
              (x += 1);
          }
        }
        if (
          ((e.virtualSize = Math.max(e.virtualSize, r) + g),
          a &&
            o &&
            ("slide" === i.effect || "coverflow" === i.effect) &&
            n.css({ width: `${e.virtualSize + i.spaceBetween}px` }),
          i.setWrapperSize &&
            n.css({ [t("width")]: `${e.virtualSize + i.spaceBetween}px` }),
          C && e.grid.updateWrapperSize(E, p, t),
          !i.centeredSlides)
        ) {
          const t = [];
          for (let s = 0; s < p.length; s += 1) {
            let n = p[s];
            i.roundLengths && (n = Math.floor(n)),
              p[s] <= e.virtualSize - r && t.push(n);
          }
          (p = t),
            Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
              p.push(e.virtualSize - r);
        }
        if ((0 === p.length && (p = [0]), 0 !== i.spaceBetween)) {
          const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
          d.filter((e, t) => !i.cssMode || t !== d.length - 1).css({
            [s]: `${y}px`,
          });
        }
        if (i.centeredSlides && i.centeredSlidesBounds) {
          let e = 0;
          h.forEach((t) => {
            e += t + (i.spaceBetween ? i.spaceBetween : 0);
          }),
            (e -= i.spaceBetween);
          const t = e - r;
          p = p.map((e) => (e < 0 ? -m : e > t ? t + g : e));
        }
        if (i.centerInsufficientSlides) {
          let e = 0;
          if (
            (h.forEach((t) => {
              e += t + (i.spaceBetween ? i.spaceBetween : 0);
            }),
            (e -= i.spaceBetween),
            e < r)
          ) {
            const t = (r - e) / 2;
            p.forEach((e, s) => {
              p[s] = e - t;
            }),
              f.forEach((e, s) => {
                f[s] = e + t;
              });
          }
        }
        if (
          (Object.assign(e, {
            slides: d,
            snapGrid: p,
            slidesGrid: f,
            slidesSizesGrid: h,
          }),
          i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
        ) {
          as(e.wrapperEl, "--swiper-centered-offset-before", -p[0] + "px"),
            as(
              e.wrapperEl,
              "--swiper-centered-offset-after",
              e.size / 2 - h[h.length - 1] / 2 + "px"
            );
          const t = -e.snapGrid[0],
            s = -e.slidesGrid[0];
          (e.snapGrid = e.snapGrid.map((e) => e + t)),
            (e.slidesGrid = e.slidesGrid.map((e) => e + s));
        }
        if (
          (u !== c && e.emit("slidesLengthChange"),
          p.length !== v &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit("snapGridLengthChange")),
          f.length !== b && e.emit("slidesGridLengthChange"),
          i.watchSlidesProgress && e.updateSlidesOffset(),
          !(l || i.cssMode || ("slide" !== i.effect && "fade" !== i.effect)))
        ) {
          const t = `${i.containerModifierClass}backface-hidden`,
            s = e.$el.hasClass(t);
          u <= i.maxBackfaceHiddenSlides
            ? s || e.$el.addClass(t)
            : s && e.$el.removeClass(t);
        }
      },
      updateAutoHeight: function (e) {
        const t = this,
          s = [],
          i = t.virtual && t.params.virtual.enabled;
        let n,
          r = 0;
        "number" == typeof e
          ? t.setTransition(e)
          : !0 === e && t.setTransition(t.params.speed);
        const a = (e) =>
          i
            ? t.slides.filter(
                (t) =>
                  parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
              )[0]
            : t.slides.eq(e)[0];
        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
          if (t.params.centeredSlides)
            t.visibleSlides.each((e) => {
              s.push(e);
            });
          else
            for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
              const e = t.activeIndex + n;
              if (e > t.slides.length && !i) break;
              s.push(a(e));
            }
        else s.push(a(t.activeIndex));
        for (n = 0; n < s.length; n += 1)
          if (void 0 !== s[n]) {
            const e = s[n].offsetHeight;
            r = e > r ? e : r;
          }
        (r || 0 === r) && t.$wrapperEl.css("height", `${r}px`);
      },
      updateSlidesOffset: function () {
        const e = this,
          t = e.slides;
        for (let s = 0; s < t.length; s += 1)
          t[s].swiperSlideOffset = e.isHorizontal()
            ? t[s].offsetLeft
            : t[s].offsetTop;
      },
      updateSlidesProgress: function (e) {
        void 0 === e && (e = (this && this.translate) || 0);
        const t = this,
          s = t.params,
          { slides: i, rtlTranslate: n, snapGrid: r } = t;
        if (0 === i.length) return;
        void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
        let a = -e;
        n && (a = e),
          i.removeClass(s.slideVisibleClass),
          (t.visibleSlidesIndexes = []),
          (t.visibleSlides = []);
        for (let e = 0; e < i.length; e += 1) {
          const o = i[e];
          let l = o.swiperSlideOffset;
          s.cssMode && s.centeredSlides && (l -= i[0].swiperSlideOffset);
          const c =
              (a + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + s.spaceBetween),
            d =
              (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
              (o.swiperSlideSize + s.spaceBetween),
            u = -(a - l),
            p = u + t.slidesSizesGrid[e];
          ((u >= 0 && u < t.size - 1) ||
            (p > 1 && p <= t.size) ||
            (u <= 0 && p >= t.size)) &&
            (t.visibleSlides.push(o),
            t.visibleSlidesIndexes.push(e),
            i.eq(e).addClass(s.slideVisibleClass)),
            (o.progress = n ? -c : c),
            (o.originalProgress = n ? -d : d);
        }
        t.visibleSlides = Jt(t.visibleSlides);
      },
      updateProgress: function (e) {
        const t = this;
        if (void 0 === e) {
          const s = t.rtlTranslate ? -1 : 1;
          e = (t && t.translate && t.translate * s) || 0;
        }
        const s = t.params,
          i = t.maxTranslate() - t.minTranslate();
        let { progress: n, isBeginning: r, isEnd: a } = t;
        const o = r,
          l = a;
        0 === i
          ? ((n = 0), (r = !0), (a = !0))
          : ((n = (e - t.minTranslate()) / i), (r = n <= 0), (a = n >= 1)),
          Object.assign(t, { progress: n, isBeginning: r, isEnd: a }),
          (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
            t.updateSlidesProgress(e),
          r && !o && t.emit("reachBeginning toEdge"),
          a && !l && t.emit("reachEnd toEdge"),
          ((o && !r) || (l && !a)) && t.emit("fromEdge"),
          t.emit("progress", n);
      },
      updateSlidesClasses: function () {
        const e = this,
          {
            slides: t,
            params: s,
            $wrapperEl: i,
            activeIndex: n,
            realIndex: r,
          } = e,
          a = e.virtual && s.virtual.enabled;
        let o;
        t.removeClass(
          `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
        ),
          (o = a
            ? e.$wrapperEl.find(
                `.${s.slideClass}[data-swiper-slide-index="${n}"]`
              )
            : t.eq(n)),
          o.addClass(s.slideActiveClass),
          s.loop &&
            (o.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass)
              : i
                  .children(
                    `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                  )
                  .addClass(s.slideDuplicateActiveClass));
        let l = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
        s.loop &&
          0 === l.length &&
          ((l = t.eq(0)), l.addClass(s.slideNextClass));
        let c = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
        s.loop &&
          0 === c.length &&
          ((c = t.eq(-1)), c.addClass(s.slidePrevClass)),
          s.loop &&
            (l.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${l.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicateNextClass),
            c.hasClass(s.slideDuplicateClass)
              ? i
                  .children(
                    `.${s.slideClass}:not(.${
                      s.slideDuplicateClass
                    })[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)
              : i
                  .children(
                    `.${s.slideClass}.${
                      s.slideDuplicateClass
                    }[data-swiper-slide-index="${c.attr(
                      "data-swiper-slide-index"
                    )}"]`
                  )
                  .addClass(s.slideDuplicatePrevClass)),
          e.emitSlidesClasses();
      },
      updateActiveIndex: function (e) {
        const t = this,
          s = t.rtlTranslate ? t.translate : -t.translate,
          {
            slidesGrid: i,
            snapGrid: n,
            params: r,
            activeIndex: a,
            realIndex: o,
            snapIndex: l,
          } = t;
        let c,
          d = e;
        if (void 0 === d) {
          for (let e = 0; e < i.length; e += 1)
            void 0 !== i[e + 1]
              ? s >= i[e] && s < i[e + 1] - (i[e + 1] - i[e]) / 2
                ? (d = e)
                : s >= i[e] && s < i[e + 1] && (d = e + 1)
              : s >= i[e] && (d = e);
          r.normalizeSlideIndex && (d < 0 || void 0 === d) && (d = 0);
        }
        if (n.indexOf(s) >= 0) c = n.indexOf(s);
        else {
          const e = Math.min(r.slidesPerGroupSkip, d);
          c = e + Math.floor((d - e) / r.slidesPerGroup);
        }
        if ((c >= n.length && (c = n.length - 1), d === a))
          return void (
            c !== l && ((t.snapIndex = c), t.emit("snapIndexChange"))
          );
        const u = parseInt(
          t.slides.eq(d).attr("data-swiper-slide-index") || d,
          10
        );
        Object.assign(t, {
          snapIndex: c,
          realIndex: u,
          previousIndex: a,
          activeIndex: d,
        }),
          t.emit("activeIndexChange"),
          t.emit("snapIndexChange"),
          o !== u && t.emit("realIndexChange"),
          (t.initialized || t.params.runCallbacksOnInit) &&
            t.emit("slideChange");
      },
      updateClickedSlide: function (e) {
        const t = this,
          s = t.params,
          i = Jt(e).closest(`.${s.slideClass}`)[0];
        let n,
          r = !1;
        if (i)
          for (let e = 0; e < t.slides.length; e += 1)
            if (t.slides[e] === i) {
              (r = !0), (n = e);
              break;
            }
        if (!i || !r)
          return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
        (t.clickedSlide = i),
          t.virtual && t.params.virtual.enabled
            ? (t.clickedIndex = parseInt(
                Jt(i).attr("data-swiper-slide-index"),
                10
              ))
            : (t.clickedIndex = n),
          s.slideToClickedSlide &&
            void 0 !== t.clickedIndex &&
            t.clickedIndex !== t.activeIndex &&
            t.slideToClickedSlide();
      },
    };
    const gs = {
      getTranslate: function (e) {
        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
        const {
          params: t,
          rtlTranslate: s,
          translate: i,
          $wrapperEl: n,
        } = this;
        if (t.virtualTranslate) return s ? -i : i;
        if (t.cssMode) return i;
        let r = ss(n[0], e);
        return s && (r = -r), r || 0;
      },
      setTranslate: function (e, t) {
        const s = this,
          {
            rtlTranslate: i,
            params: n,
            $wrapperEl: r,
            wrapperEl: a,
            progress: o,
          } = s;
        let l,
          c = 0,
          d = 0;
        s.isHorizontal() ? (c = i ? -e : e) : (d = e),
          n.roundLengths && ((c = Math.floor(c)), (d = Math.floor(d))),
          n.cssMode
            ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] =
                s.isHorizontal() ? -c : -d)
            : n.virtualTranslate ||
              r.transform(`translate3d(${c}px, ${d}px, 0px)`),
          (s.previousTranslate = s.translate),
          (s.translate = s.isHorizontal() ? c : d);
        const u = s.maxTranslate() - s.minTranslate();
        (l = 0 === u ? 0 : (e - s.minTranslate()) / u),
          l !== o && s.updateProgress(e),
          s.emit("setTranslate", s.translate, t);
      },
      minTranslate: function () {
        return -this.snapGrid[0];
      },
      maxTranslate: function () {
        return -this.snapGrid[this.snapGrid.length - 1];
      },
      translateTo: function (e, t, s, i, n) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          void 0 === i && (i = !0);
        const r = this,
          { params: a, wrapperEl: o } = r;
        if (r.animating && a.preventInteractionOnTransition) return !1;
        const l = r.minTranslate(),
          c = r.maxTranslate();
        let d;
        if (
          ((d = i && e > l ? l : i && e < c ? c : e),
          r.updateProgress(d),
          a.cssMode)
        ) {
          const e = r.isHorizontal();
          if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -d;
          else {
            if (!r.support.smoothScroll)
              return (
                os({ swiper: r, targetPosition: -d, side: e ? "left" : "top" }),
                !0
              );
            o.scrollTo({ [e ? "left" : "top"]: -d, behavior: "smooth" });
          }
          return !0;
        }
        return (
          0 === t
            ? (r.setTransition(0),
              r.setTranslate(d),
              s &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionEnd")))
            : (r.setTransition(t),
              r.setTranslate(d),
              s &&
                (r.emit("beforeTransitionStart", t, n),
                r.emit("transitionStart")),
              r.animating ||
                ((r.animating = !0),
                r.onTranslateToWrapperTransitionEnd ||
                  (r.onTranslateToWrapperTransitionEnd = function (e) {
                    r &&
                      !r.destroyed &&
                      e.target === this &&
                      (r.$wrapperEl[0].removeEventListener(
                        "transitionend",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      r.$wrapperEl[0].removeEventListener(
                        "webkitTransitionEnd",
                        r.onTranslateToWrapperTransitionEnd
                      ),
                      (r.onTranslateToWrapperTransitionEnd = null),
                      delete r.onTranslateToWrapperTransitionEnd,
                      s && r.emit("transitionEnd"));
                  }),
                r.$wrapperEl[0].addEventListener(
                  "transitionend",
                  r.onTranslateToWrapperTransitionEnd
                ),
                r.$wrapperEl[0].addEventListener(
                  "webkitTransitionEnd",
                  r.onTranslateToWrapperTransitionEnd
                ))),
          !0
        );
      },
    };
    function vs(e) {
      let { swiper: t, runCallbacks: s, direction: i, step: n } = e;
      const { activeIndex: r, previousIndex: a } = t;
      let o = i;
      if (
        (o || (o = r > a ? "next" : r < a ? "prev" : "reset"),
        t.emit(`transition${n}`),
        s && r !== a)
      ) {
        if ("reset" === o) return void t.emit(`slideResetTransition${n}`);
        t.emit(`slideChangeTransition${n}`),
          "next" === o
            ? t.emit(`slideNextTransition${n}`)
            : t.emit(`slidePrevTransition${n}`);
      }
    }
    const bs = {
      slideTo: function (e, t, s, i, n) {
        if (
          (void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0),
          "number" != typeof e && "string" != typeof e)
        )
          throw new Error(
            `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
          );
        if ("string" == typeof e) {
          const t = parseInt(e, 10);
          if (!isFinite(t))
            throw new Error(
              `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
            );
          e = t;
        }
        const r = this;
        let a = e;
        a < 0 && (a = 0);
        const {
          params: o,
          snapGrid: l,
          slidesGrid: c,
          previousIndex: d,
          activeIndex: u,
          rtlTranslate: p,
          wrapperEl: f,
          enabled: h,
        } = r;
        if (
          (r.animating && o.preventInteractionOnTransition) ||
          (!h && !i && !n)
        )
          return !1;
        const m = Math.min(r.params.slidesPerGroupSkip, a);
        let g = m + Math.floor((a - m) / r.params.slidesPerGroup);
        g >= l.length && (g = l.length - 1),
          (u || o.initialSlide || 0) === (d || 0) &&
            s &&
            r.emit("beforeSlideChangeStart");
        const v = -l[g];
        if ((r.updateProgress(v), o.normalizeSlideIndex))
          for (let e = 0; e < c.length; e += 1) {
            const t = -Math.floor(100 * v),
              s = Math.floor(100 * c[e]),
              i = Math.floor(100 * c[e + 1]);
            void 0 !== c[e + 1]
              ? t >= s && t < i - (i - s) / 2
                ? (a = e)
                : t >= s && t < i && (a = e + 1)
              : t >= s && (a = e);
          }
        if (r.initialized && a !== u) {
          if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
            return !1;
          if (
            !r.allowSlidePrev &&
            v > r.translate &&
            v > r.maxTranslate() &&
            (u || 0) !== a
          )
            return !1;
        }
        let b;
        if (
          ((b = a > u ? "next" : a < u ? "prev" : "reset"),
          (p && -v === r.translate) || (!p && v === r.translate))
        )
          return (
            r.updateActiveIndex(a),
            o.autoHeight && r.updateAutoHeight(),
            r.updateSlidesClasses(),
            "slide" !== o.effect && r.setTranslate(v),
            "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
            !1
          );
        if (o.cssMode) {
          const e = r.isHorizontal(),
            s = p ? v : -v;
          if (0 === t) {
            const t = r.virtual && r.params.virtual.enabled;
            t &&
              ((r.wrapperEl.style.scrollSnapType = "none"),
              (r._immediateVirtual = !0)),
              (f[e ? "scrollLeft" : "scrollTop"] = s),
              t &&
                requestAnimationFrame(() => {
                  (r.wrapperEl.style.scrollSnapType = ""),
                    (r._swiperImmediateVirtual = !1);
                });
          } else {
            if (!r.support.smoothScroll)
              return (
                os({ swiper: r, targetPosition: s, side: e ? "left" : "top" }),
                !0
              );
            f.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
          }
          return !0;
        }
        return (
          r.setTransition(t),
          r.setTranslate(v),
          r.updateActiveIndex(a),
          r.updateSlidesClasses(),
          r.emit("beforeTransitionStart", t, i),
          r.transitionStart(s, b),
          0 === t
            ? r.transitionEnd(s, b)
            : r.animating ||
              ((r.animating = !0),
              r.onSlideToWrapperTransitionEnd ||
                (r.onSlideToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      "transitionend",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      "webkitTransitionEnd",
                      r.onSlideToWrapperTransitionEnd
                    ),
                    (r.onSlideToWrapperTransitionEnd = null),
                    delete r.onSlideToWrapperTransitionEnd,
                    r.transitionEnd(s, b));
                }),
              r.$wrapperEl[0].addEventListener(
                "transitionend",
                r.onSlideToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                "webkitTransitionEnd",
                r.onSlideToWrapperTransitionEnd
              )),
          !0
        );
      },
      slideToLoop: function (e, t, s, i) {
        void 0 === e && (e = 0),
          void 0 === t && (t = this.params.speed),
          void 0 === s && (s = !0);
        const n = this;
        let r = e;
        return n.params.loop && (r += n.loopedSlides), n.slideTo(r, t, s, i);
      },
      slideNext: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          { animating: n, enabled: r, params: a } = i;
        if (!r) return i;
        let o = a.slidesPerGroup;
        "auto" === a.slidesPerView &&
          1 === a.slidesPerGroup &&
          a.slidesPerGroupAuto &&
          (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
        const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o;
        if (a.loop) {
          if (n && a.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        return a.rewind && i.isEnd
          ? i.slideTo(0, e, t, s)
          : i.slideTo(i.activeIndex + l, e, t, s);
      },
      slidePrev: function (e, t, s) {
        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
        const i = this,
          {
            params: n,
            animating: r,
            snapGrid: a,
            slidesGrid: o,
            rtlTranslate: l,
            enabled: c,
          } = i;
        if (!c) return i;
        if (n.loop) {
          if (r && n.loopPreventsSlide) return !1;
          i.loopFix(), (i._clientLeft = i.$wrapperEl[0].clientLeft);
        }
        function d(e) {
          return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
        }
        const u = d(l ? i.translate : -i.translate),
          p = a.map((e) => d(e));
        let f = a[p.indexOf(u) - 1];
        if (void 0 === f && n.cssMode) {
          let e;
          a.forEach((t, s) => {
            u >= t && (e = s);
          }),
            void 0 !== e && (f = a[e > 0 ? e - 1 : e]);
        }
        let h = 0;
        if (
          (void 0 !== f &&
            ((h = o.indexOf(f)),
            h < 0 && (h = i.activeIndex - 1),
            "auto" === n.slidesPerView &&
              1 === n.slidesPerGroup &&
              n.slidesPerGroupAuto &&
              ((h = h - i.slidesPerViewDynamic("previous", !0) + 1),
              (h = Math.max(h, 0)))),
          n.rewind && i.isBeginning)
        ) {
          const n =
            i.params.virtual && i.params.virtual.enabled && i.virtual
              ? i.virtual.slides.length - 1
              : i.slides.length - 1;
          return i.slideTo(n, e, t, s);
        }
        return i.slideTo(h, e, t, s);
      },
      slideReset: function (e, t, s) {
        return (
          void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          this.slideTo(this.activeIndex, e, t, s)
        );
      },
      slideToClosest: function (e, t, s, i) {
        void 0 === e && (e = this.params.speed),
          void 0 === t && (t = !0),
          void 0 === i && (i = 0.5);
        const n = this;
        let r = n.activeIndex;
        const a = Math.min(n.params.slidesPerGroupSkip, r),
          o = a + Math.floor((r - a) / n.params.slidesPerGroup),
          l = n.rtlTranslate ? n.translate : -n.translate;
        if (l >= n.snapGrid[o]) {
          const e = n.snapGrid[o];
          l - e > (n.snapGrid[o + 1] - e) * i && (r += n.params.slidesPerGroup);
        } else {
          const e = n.snapGrid[o - 1];
          l - e <= (n.snapGrid[o] - e) * i && (r -= n.params.slidesPerGroup);
        }
        return (
          (r = Math.max(r, 0)),
          (r = Math.min(r, n.slidesGrid.length - 1)),
          n.slideTo(r, e, t, s)
        );
      },
      slideToClickedSlide: function () {
        const e = this,
          { params: t, $wrapperEl: s } = e,
          i =
            "auto" === t.slidesPerView
              ? e.slidesPerViewDynamic()
              : t.slidesPerView;
        let n,
          r = e.clickedIndex;
        if (t.loop) {
          if (e.animating) return;
          (n = parseInt(
            Jt(e.clickedSlide).attr("data-swiper-slide-index"),
            10
          )),
            t.centeredSlides
              ? r < e.loopedSlides - i / 2 ||
                r > e.slides.length - e.loopedSlides + i / 2
                ? (e.loopFix(),
                  (r = s
                    .children(
                      `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                    )
                    .eq(0)
                    .index()),
                  es(() => {
                    e.slideTo(r);
                  }))
                : e.slideTo(r)
              : r > e.slides.length - i
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                es(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r);
        } else e.slideTo(r);
      },
    };
    const ys = {
      loopCreate: function () {
        const e = this,
          t = Gt(),
          { params: s, $wrapperEl: i } = e,
          n = i.children().length > 0 ? Jt(i.children()[0].parentNode) : i;
        n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
        let r = n.children(`.${s.slideClass}`);
        if (s.loopFillGroupWithBlank) {
          const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
          if (e !== s.slidesPerGroup) {
            for (let i = 0; i < e; i += 1) {
              const e = Jt(t.createElement("div")).addClass(
                `${s.slideClass} ${s.slideBlankClass}`
              );
              n.append(e);
            }
            r = n.children(`.${s.slideClass}`);
          }
        }
        "auto" !== s.slidesPerView ||
          s.loopedSlides ||
          (s.loopedSlides = r.length),
          (e.loopedSlides = Math.ceil(
            parseFloat(s.loopedSlides || s.slidesPerView, 10)
          )),
          (e.loopedSlides += s.loopAdditionalSlides),
          e.loopedSlides > r.length && (e.loopedSlides = r.length);
        const a = [],
          o = [];
        r.each((t, s) => {
          const i = Jt(t);
          s < e.loopedSlides && o.push(t),
            s < r.length && s >= r.length - e.loopedSlides && a.push(t),
            i.attr("data-swiper-slide-index", s);
        });
        for (let e = 0; e < o.length; e += 1)
          n.append(Jt(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
        for (let e = a.length - 1; e >= 0; e -= 1)
          n.prepend(Jt(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      },
      loopFix: function () {
        const e = this;
        e.emit("beforeLoopFix");
        const {
          activeIndex: t,
          slides: s,
          loopedSlides: i,
          allowSlidePrev: n,
          allowSlideNext: r,
          snapGrid: a,
          rtlTranslate: o,
        } = e;
        let l;
        (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
        const c = -a[t] - e.getTranslate();
        if (t < i) {
          (l = s.length - 3 * i + t), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((o ? -e.translate : e.translate) - c);
        } else if (t >= s.length - i) {
          (l = -s.length + t + i), (l += i);
          e.slideTo(l, 0, !1, !0) &&
            0 !== c &&
            e.setTranslate((o ? -e.translate : e.translate) - c);
        }
        (e.allowSlidePrev = n), (e.allowSlideNext = r), e.emit("loopFix");
      },
      loopDestroy: function () {
        const { $wrapperEl: e, params: t, slides: s } = this;
        e
          .children(
            `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
          )
          .remove(),
          s.removeAttr("data-swiper-slide-index");
      },
    };
    function ws(e) {
      const t = this,
        s = Gt(),
        i = Rt(),
        n = t.touchEventsData,
        { params: r, touches: a, enabled: o } = t;
      if (!o) return;
      if (t.animating && r.preventInteractionOnTransition) return;
      !t.animating && r.cssMode && r.loop && t.loopFix();
      let l = e;
      l.originalEvent && (l = l.originalEvent);
      let c = Jt(l.target);
      if ("wrapper" === r.touchEventsTarget && !c.closest(t.wrapperEl).length)
        return;
      if (
        ((n.isTouchEvent = "touchstart" === l.type),
        !n.isTouchEvent && "which" in l && 3 === l.which)
      )
        return;
      if (!n.isTouchEvent && "button" in l && l.button > 0) return;
      if (n.isTouched && n.isMoved) return;
      !!r.noSwipingClass &&
        "" !== r.noSwipingClass &&
        l.target &&
        l.target.shadowRoot &&
        e.path &&
        e.path[0] &&
        (c = Jt(e.path[0]));
      const d = r.noSwipingSelector
          ? r.noSwipingSelector
          : `.${r.noSwipingClass}`,
        u = !(!l.target || !l.target.shadowRoot);
      if (
        r.noSwiping &&
        (u
          ? (function (e, t) {
              return (
                void 0 === t && (t = this),
                (function t(s) {
                  return s && s !== Gt() && s !== Rt()
                    ? (s.assignedSlot && (s = s.assignedSlot),
                      s.closest(e) || t(s.getRootNode().host))
                    : null;
                })(t)
              );
            })(d, l.target)
          : c.closest(d)[0])
      )
        return void (t.allowClick = !0);
      if (r.swipeHandler && !c.closest(r.swipeHandler)[0]) return;
      (a.currentX =
        "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
        (a.currentY =
          "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
      const p = a.currentX,
        f = a.currentY,
        h = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        m = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
      if (h && (p <= m || p >= i.innerWidth - m)) {
        if ("prevent" !== h) return;
        e.preventDefault();
      }
      if (
        (Object.assign(n, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0,
        }),
        (a.startX = p),
        (a.startY = f),
        (n.touchStartTime = ts()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        r.threshold > 0 && (n.allowThresholdMove = !1),
        "touchstart" !== l.type)
      ) {
        let e = !0;
        c.is(n.focusableElements) &&
          ((e = !1), "SELECT" === c[0].nodeName && (n.isTouched = !1)),
          s.activeElement &&
            Jt(s.activeElement).is(n.focusableElements) &&
            s.activeElement !== c[0] &&
            s.activeElement.blur();
        const i = e && t.allowTouchMove && r.touchStartPreventDefault;
        (!r.touchStartForcePreventDefault && !i) ||
          c[0].isContentEditable ||
          l.preventDefault();
      }
      t.params.freeMode &&
        t.params.freeMode.enabled &&
        t.freeMode &&
        t.animating &&
        !r.cssMode &&
        t.freeMode.onTouchStart(),
        t.emit("touchStart", l);
    }
    function Ss(e) {
      const t = Gt(),
        s = this,
        i = s.touchEventsData,
        { params: n, touches: r, rtlTranslate: a, enabled: o } = s;
      if (!o) return;
      let l = e;
      if ((l.originalEvent && (l = l.originalEvent), !i.isTouched))
        return void (
          i.startMoving &&
          i.isScrolling &&
          s.emit("touchMoveOpposite", l)
        );
      if (i.isTouchEvent && "touchmove" !== l.type) return;
      const c =
          "touchmove" === l.type &&
          l.targetTouches &&
          (l.targetTouches[0] || l.changedTouches[0]),
        d = "touchmove" === l.type ? c.pageX : l.pageX,
        u = "touchmove" === l.type ? c.pageY : l.pageY;
      if (l.preventedByNestedSwiper) return (r.startX = d), void (r.startY = u);
      if (!s.allowTouchMove)
        return (
          Jt(l.target).is(i.focusableElements) || (s.allowClick = !1),
          void (
            i.isTouched &&
            (Object.assign(r, {
              startX: d,
              startY: u,
              currentX: d,
              currentY: u,
            }),
            (i.touchStartTime = ts()))
          )
        );
      if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop)
        if (s.isVertical()) {
          if (
            (u < r.startY && s.translate <= s.maxTranslate()) ||
            (u > r.startY && s.translate >= s.minTranslate())
          )
            return (i.isTouched = !1), void (i.isMoved = !1);
        } else if (
          (d < r.startX && s.translate <= s.maxTranslate()) ||
          (d > r.startX && s.translate >= s.minTranslate())
        )
          return;
      if (
        i.isTouchEvent &&
        t.activeElement &&
        l.target === t.activeElement &&
        Jt(l.target).is(i.focusableElements)
      )
        return (i.isMoved = !0), void (s.allowClick = !1);
      if (
        (i.allowTouchCallbacks && s.emit("touchMove", l),
        l.targetTouches && l.targetTouches.length > 1)
      )
        return;
      (r.currentX = d), (r.currentY = u);
      const p = r.currentX - r.startX,
        f = r.currentY - r.startY;
      if (s.params.threshold && Math.sqrt(p ** 2 + f ** 2) < s.params.threshold)
        return;
      if (void 0 === i.isScrolling) {
        let e;
        (s.isHorizontal() && r.currentY === r.startY) ||
        (s.isVertical() && r.currentX === r.startX)
          ? (i.isScrolling = !1)
          : p * p + f * f >= 25 &&
            ((e = (180 * Math.atan2(Math.abs(f), Math.abs(p))) / Math.PI),
            (i.isScrolling = s.isHorizontal()
              ? e > n.touchAngle
              : 90 - e > n.touchAngle));
      }
      if (
        (i.isScrolling && s.emit("touchMoveOpposite", l),
        void 0 === i.startMoving &&
          ((r.currentX === r.startX && r.currentY === r.startY) ||
            (i.startMoving = !0)),
        i.isScrolling)
      )
        return void (i.isTouched = !1);
      if (!i.startMoving) return;
      (s.allowClick = !1),
        !n.cssMode && l.cancelable && l.preventDefault(),
        n.touchMoveStopPropagation && !n.nested && l.stopPropagation(),
        i.isMoved ||
          (n.loop && !n.cssMode && s.loopFix(),
          (i.startTranslate = s.getTranslate()),
          s.setTransition(0),
          s.animating &&
            s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
          (i.allowMomentumBounce = !1),
          !n.grabCursor ||
            (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
            s.setGrabCursor(!0),
          s.emit("sliderFirstMove", l)),
        s.emit("sliderMove", l),
        (i.isMoved = !0);
      let h = s.isHorizontal() ? p : f;
      (r.diff = h),
        (h *= n.touchRatio),
        a && (h = -h),
        (s.swipeDirection = h > 0 ? "prev" : "next"),
        (i.currentTranslate = h + i.startTranslate);
      let m = !0,
        g = n.resistanceRatio;
      if (
        (n.touchReleaseOnEdges && (g = 0),
        h > 0 && i.currentTranslate > s.minTranslate()
          ? ((m = !1),
            n.resistance &&
              (i.currentTranslate =
                s.minTranslate() -
                1 +
                (-s.minTranslate() + i.startTranslate + h) ** g))
          : h < 0 &&
            i.currentTranslate < s.maxTranslate() &&
            ((m = !1),
            n.resistance &&
              (i.currentTranslate =
                s.maxTranslate() +
                1 -
                (s.maxTranslate() - i.startTranslate - h) ** g)),
        m && (l.preventedByNestedSwiper = !0),
        !s.allowSlideNext &&
          "next" === s.swipeDirection &&
          i.currentTranslate < i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        !s.allowSlidePrev &&
          "prev" === s.swipeDirection &&
          i.currentTranslate > i.startTranslate &&
          (i.currentTranslate = i.startTranslate),
        s.allowSlidePrev ||
          s.allowSlideNext ||
          (i.currentTranslate = i.startTranslate),
        n.threshold > 0)
      ) {
        if (!(Math.abs(h) > n.threshold || i.allowThresholdMove))
          return void (i.currentTranslate = i.startTranslate);
        if (!i.allowThresholdMove)
          return (
            (i.allowThresholdMove = !0),
            (r.startX = r.currentX),
            (r.startY = r.currentY),
            (i.currentTranslate = i.startTranslate),
            void (r.diff = s.isHorizontal()
              ? r.currentX - r.startX
              : r.currentY - r.startY)
          );
      }
      n.followFinger &&
        !n.cssMode &&
        (((n.freeMode && n.freeMode.enabled && s.freeMode) ||
          n.watchSlidesProgress) &&
          (s.updateActiveIndex(), s.updateSlidesClasses()),
        s.params.freeMode &&
          n.freeMode.enabled &&
          s.freeMode &&
          s.freeMode.onTouchMove(),
        s.updateProgress(i.currentTranslate),
        s.setTranslate(i.currentTranslate));
    }
    function xs(e) {
      const t = this,
        s = t.touchEventsData,
        {
          params: i,
          touches: n,
          rtlTranslate: r,
          slidesGrid: a,
          enabled: o,
        } = t;
      if (!o) return;
      let l = e;
      if (
        (l.originalEvent && (l = l.originalEvent),
        s.allowTouchCallbacks && t.emit("touchEnd", l),
        (s.allowTouchCallbacks = !1),
        !s.isTouched)
      )
        return (
          s.isMoved && i.grabCursor && t.setGrabCursor(!1),
          (s.isMoved = !1),
          void (s.startMoving = !1)
        );
      i.grabCursor &&
        s.isMoved &&
        s.isTouched &&
        (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
        t.setGrabCursor(!1);
      const c = ts(),
        d = c - s.touchStartTime;
      if (t.allowClick) {
        const e = l.path || (l.composedPath && l.composedPath());
        t.updateClickedSlide((e && e[0]) || l.target),
          t.emit("tap click", l),
          d < 300 &&
            c - s.lastClickTime < 300 &&
            t.emit("doubleTap doubleClick", l);
      }
      if (
        ((s.lastClickTime = ts()),
        es(() => {
          t.destroyed || (t.allowClick = !0);
        }),
        !s.isTouched ||
          !s.isMoved ||
          !t.swipeDirection ||
          0 === n.diff ||
          s.currentTranslate === s.startTranslate)
      )
        return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
      let u;
      if (
        ((s.isTouched = !1),
        (s.isMoved = !1),
        (s.startMoving = !1),
        (u = i.followFinger
          ? r
            ? t.translate
            : -t.translate
          : -s.currentTranslate),
        i.cssMode)
      )
        return;
      if (t.params.freeMode && i.freeMode.enabled)
        return void t.freeMode.onTouchEnd({ currentPos: u });
      let p = 0,
        f = t.slidesSizesGrid[0];
      for (
        let e = 0;
        e < a.length;
        e += e < i.slidesPerGroupSkip ? 1 : i.slidesPerGroup
      ) {
        const t = e < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
        void 0 !== a[e + t]
          ? u >= a[e] && u < a[e + t] && ((p = e), (f = a[e + t] - a[e]))
          : u >= a[e] && ((p = e), (f = a[a.length - 1] - a[a.length - 2]));
      }
      let h = null,
        m = null;
      i.rewind &&
        (t.isBeginning
          ? (m =
              t.params.virtual && t.params.virtual.enabled && t.virtual
                ? t.virtual.slides.length - 1
                : t.slides.length - 1)
          : t.isEnd && (h = 0));
      const g = (u - a[p]) / f,
        v = p < i.slidesPerGroupSkip - 1 ? 1 : i.slidesPerGroup;
      if (d > i.longSwipesMs) {
        if (!i.longSwipes) return void t.slideTo(t.activeIndex);
        "next" === t.swipeDirection &&
          (g >= i.longSwipesRatio
            ? t.slideTo(i.rewind && t.isEnd ? h : p + v)
            : t.slideTo(p)),
          "prev" === t.swipeDirection &&
            (g > 1 - i.longSwipesRatio
              ? t.slideTo(p + v)
              : null !== m && g < 0 && Math.abs(g) > i.longSwipesRatio
              ? t.slideTo(m)
              : t.slideTo(p));
      } else {
        if (!i.shortSwipes) return void t.slideTo(t.activeIndex);
        t.navigation &&
        (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
          ? l.target === t.navigation.nextEl
            ? t.slideTo(p + v)
            : t.slideTo(p)
          : ("next" === t.swipeDirection && t.slideTo(null !== h ? h : p + v),
            "prev" === t.swipeDirection && t.slideTo(null !== m ? m : p));
      }
    }
    function Cs() {
      const e = this,
        { params: t, el: s } = e;
      if (s && 0 === s.offsetWidth) return;
      t.breakpoints && e.setBreakpoint();
      const { allowSlideNext: i, allowSlidePrev: n, snapGrid: r } = e;
      (e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses(),
        ("auto" === t.slidesPerView || t.slidesPerView > 1) &&
        e.isEnd &&
        !e.isBeginning &&
        !e.params.centeredSlides
          ? e.slideTo(e.slides.length - 1, 0, !1, !0)
          : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.run(),
        (e.allowSlidePrev = n),
        (e.allowSlideNext = i),
        e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function Es(e) {
      const t = this;
      t.enabled &&
        (t.allowClick ||
          (t.params.preventClicks && e.preventDefault(),
          t.params.preventClicksPropagation &&
            t.animating &&
            (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function Ts() {
      const e = this,
        { wrapperEl: t, rtlTranslate: s, enabled: i } = e;
      if (!i) return;
      let n;
      (e.previousTranslate = e.translate),
        e.isHorizontal()
          ? (e.translate = -t.scrollLeft)
          : (e.translate = -t.scrollTop),
        -0 === e.translate && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses();
      const r = e.maxTranslate() - e.minTranslate();
      (n = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
        n !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
        e.emit("setTranslate", e.translate, !1);
    }
    let _s = !1;
    function As() {}
    const Ls = (e, t) => {
      const s = Gt(),
        {
          params: i,
          touchEvents: n,
          el: r,
          wrapperEl: a,
          device: o,
          support: l,
        } = e,
        c = !!i.nested,
        d = "on" === t ? "addEventListener" : "removeEventListener",
        u = t;
      if (l.touch) {
        const t = !(
          "touchstart" !== n.start ||
          !l.passiveListener ||
          !i.passiveListeners
        ) && { passive: !0, capture: !1 };
        r[d](n.start, e.onTouchStart, t),
          r[d](
            n.move,
            e.onTouchMove,
            l.passiveListener ? { passive: !1, capture: c } : c
          ),
          r[d](n.end, e.onTouchEnd, t),
          n.cancel && r[d](n.cancel, e.onTouchEnd, t);
      } else
        r[d](n.start, e.onTouchStart, !1),
          s[d](n.move, e.onTouchMove, c),
          s[d](n.end, e.onTouchEnd, !1);
      (i.preventClicks || i.preventClicksPropagation) &&
        r[d]("click", e.onClick, !0),
        i.cssMode && a[d]("scroll", e.onScroll),
        i.updateOnWindowResize
          ? e[u](
              o.ios || o.android
                ? "resize orientationchange observerUpdate"
                : "resize observerUpdate",
              Cs,
              !0
            )
          : e[u]("observerUpdate", Cs, !0);
    };
    const Os = {
        attachEvents: function () {
          const e = this,
            t = Gt(),
            { params: s, support: i } = e;
          (e.onTouchStart = ws.bind(e)),
            (e.onTouchMove = Ss.bind(e)),
            (e.onTouchEnd = xs.bind(e)),
            s.cssMode && (e.onScroll = Ts.bind(e)),
            (e.onClick = Es.bind(e)),
            i.touch && !_s && (t.addEventListener("touchstart", As), (_s = !0)),
            Ls(e, "on");
        },
        detachEvents: function () {
          Ls(this, "off");
        },
      },
      ks = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    const Ps = {
      setBreakpoint: function () {
        const e = this,
          {
            activeIndex: t,
            initialized: s,
            loopedSlides: i = 0,
            params: n,
            $el: r,
          } = e,
          a = n.breakpoints;
        if (!a || (a && 0 === Object.keys(a).length)) return;
        const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
        if (!o || e.currentBreakpoint === o) return;
        const l = (o in a ? a[o] : void 0) || e.originalParams,
          c = ks(e, n),
          d = ks(e, l),
          u = n.enabled;
        c && !d
          ? (r.removeClass(
              `${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`
            ),
            e.emitContainerClasses())
          : !c &&
            d &&
            (r.addClass(`${n.containerModifierClass}grid`),
            ((l.grid.fill && "column" === l.grid.fill) ||
              (!l.grid.fill && "column" === n.grid.fill)) &&
              r.addClass(`${n.containerModifierClass}grid-column`),
            e.emitContainerClasses());
        const p = l.direction && l.direction !== n.direction,
          f = n.loop && (l.slidesPerView !== n.slidesPerView || p);
        p && s && e.changeDirection(), rs(e.params, l);
        const h = e.params.enabled;
        Object.assign(e, {
          allowTouchMove: e.params.allowTouchMove,
          allowSlideNext: e.params.allowSlideNext,
          allowSlidePrev: e.params.allowSlidePrev,
        }),
          u && !h ? e.disable() : !u && h && e.enable(),
          (e.currentBreakpoint = o),
          e.emit("_beforeBreakpoint", l),
          f &&
            s &&
            (e.loopDestroy(),
            e.loopCreate(),
            e.updateSlides(),
            e.slideTo(t - i + e.loopedSlides, 0, !1)),
          e.emit("breakpoint", l);
      },
      getBreakpoint: function (e, t, s) {
        if ((void 0 === t && (t = "window"), !e || ("container" === t && !s)))
          return;
        let i = !1;
        const n = Rt(),
          r = "window" === t ? n.innerHeight : s.clientHeight,
          a = Object.keys(e).map((e) => {
            if ("string" == typeof e && 0 === e.indexOf("@")) {
              const t = parseFloat(e.substr(1));
              return { value: r * t, point: e };
            }
            return { value: e, point: e };
          });
        a.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
        for (let e = 0; e < a.length; e += 1) {
          const { point: r, value: o } = a[e];
          "window" === t
            ? n.matchMedia(`(min-width: ${o}px)`).matches && (i = r)
            : o <= s.clientWidth && (i = r);
        }
        return i || "max";
      },
    };
    const Ms = {
      addClasses: function () {
        const e = this,
          {
            classNames: t,
            params: s,
            rtl: i,
            $el: n,
            device: r,
            support: a,
          } = e,
          o = (function (e, t) {
            const s = [];
            return (
              e.forEach((e) => {
                "object" == typeof e
                  ? Object.keys(e).forEach((i) => {
                      e[i] && s.push(t + i);
                    })
                  : "string" == typeof e && s.push(t + e);
              }),
              s
            );
          })(
            [
              "initialized",
              s.direction,
              { "pointer-events": !a.touch },
              { "free-mode": e.params.freeMode && s.freeMode.enabled },
              { autoheight: s.autoHeight },
              { rtl: i },
              { grid: s.grid && s.grid.rows > 1 },
              {
                "grid-column":
                  s.grid && s.grid.rows > 1 && "column" === s.grid.fill,
              },
              { android: r.android },
              { ios: r.ios },
              { "css-mode": s.cssMode },
              { centered: s.cssMode && s.centeredSlides },
            ],
            s.containerModifierClass
          );
        t.push(...o), n.addClass([...t].join(" ")), e.emitContainerClasses();
      },
      removeClasses: function () {
        const { $el: e, classNames: t } = this;
        e.removeClass(t.join(" ")), this.emitContainerClasses();
      },
    };
    const $s = {
      loadImage: function (e, t, s, i, n, r) {
        const a = Rt();
        let o;
        function l() {
          r && r();
        }
        Jt(e).parent("picture")[0] || (e.complete && n)
          ? l()
          : t
          ? ((o = new a.Image()),
            (o.onload = l),
            (o.onerror = l),
            i && (o.sizes = i),
            s && (o.srcset = s),
            t && (o.src = t))
          : l();
      },
      preloadImages: function () {
        const e = this;
        function t() {
          null != e &&
            e &&
            !e.destroyed &&
            (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
            e.imagesLoaded === e.imagesToLoad.length &&
              (e.params.updateOnImagesReady && e.update(),
              e.emit("imagesReady")));
        }
        e.imagesToLoad = e.$el.find("img");
        for (let s = 0; s < e.imagesToLoad.length; s += 1) {
          const i = e.imagesToLoad[s];
          e.loadImage(
            i,
            i.currentSrc || i.getAttribute("src"),
            i.srcset || i.getAttribute("srcset"),
            i.sizes || i.getAttribute("sizes"),
            !0,
            t
          );
        }
      },
    };
    const Ds = {
      init: !0,
      direction: "horizontal",
      touchEventsTarget: "wrapper",
      initialSlide: 0,
      speed: 300,
      cssMode: !1,
      updateOnWindowResize: !0,
      resizeObserver: !0,
      nested: !1,
      createElements: !1,
      enabled: !0,
      focusableElements:
        "input, select, option, textarea, button, video, label",
      width: null,
      height: null,
      preventInteractionOnTransition: !1,
      userAgent: null,
      url: null,
      edgeSwipeDetection: !1,
      edgeSwipeThreshold: 20,
      autoHeight: !1,
      setWrapperSize: !1,
      virtualTranslate: !1,
      effect: "slide",
      breakpoints: void 0,
      breakpointsBase: "window",
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      slidesPerGroupAuto: !1,
      centeredSlides: !1,
      centeredSlidesBounds: !1,
      slidesOffsetBefore: 0,
      slidesOffsetAfter: 0,
      normalizeSlideIndex: !0,
      centerInsufficientSlides: !1,
      watchOverflow: !0,
      roundLengths: !1,
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: !0,
      shortSwipes: !0,
      longSwipes: !0,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: !0,
      allowTouchMove: !0,
      threshold: 0,
      touchMoveStopPropagation: !1,
      touchStartPreventDefault: !0,
      touchStartForcePreventDefault: !1,
      touchReleaseOnEdges: !1,
      uniqueNavElements: !0,
      resistance: !0,
      resistanceRatio: 0.85,
      watchSlidesProgress: !1,
      grabCursor: !1,
      preventClicks: !0,
      preventClicksPropagation: !0,
      slideToClickedSlide: !1,
      preloadImages: !0,
      updateOnImagesReady: !0,
      loop: !1,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: !1,
      loopPreventsSlide: !0,
      rewind: !1,
      allowSlidePrev: !0,
      allowSlideNext: !0,
      swipeHandler: null,
      noSwiping: !0,
      noSwipingClass: "swiper-no-swiping",
      noSwipingSelector: null,
      passiveListeners: !0,
      maxBackfaceHiddenSlides: 10,
      containerModifierClass: "swiper-",
      slideClass: "swiper-slide",
      slideBlankClass: "swiper-slide-invisible-blank",
      slideActiveClass: "swiper-slide-active",
      slideDuplicateActiveClass: "swiper-slide-duplicate-active",
      slideVisibleClass: "swiper-slide-visible",
      slideDuplicateClass: "swiper-slide-duplicate",
      slideNextClass: "swiper-slide-next",
      slideDuplicateNextClass: "swiper-slide-duplicate-next",
      slidePrevClass: "swiper-slide-prev",
      slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
      wrapperClass: "swiper-wrapper",
      runCallbacksOnInit: !0,
      _emitClasses: !1,
    };
    function Bs(e, t) {
      return function (s) {
        void 0 === s && (s = {});
        const i = Object.keys(s)[0],
          n = s[i];
        "object" == typeof n && null !== n
          ? (["navigation", "pagination", "scrollbar"].indexOf(i) >= 0 &&
              !0 === e[i] &&
              (e[i] = { auto: !0 }),
            i in e && "enabled" in n
              ? (!0 === e[i] && (e[i] = { enabled: !0 }),
                "object" != typeof e[i] ||
                  "enabled" in e[i] ||
                  (e[i].enabled = !0),
                e[i] || (e[i] = { enabled: !1 }),
                rs(t, s))
              : rs(t, s))
          : rs(t, s);
      };
    }
    const Ns = {
        eventsEmitter: hs,
        update: ms,
        translate: gs,
        transition: {
          setTransition: function (e, t) {
            const s = this;
            s.params.cssMode || s.$wrapperEl.transition(e),
              s.emit("setTransition", e, t);
          },
          transitionStart: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            i.cssMode ||
              (i.autoHeight && s.updateAutoHeight(),
              vs({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
          },
          transitionEnd: function (e, t) {
            void 0 === e && (e = !0);
            const s = this,
              { params: i } = s;
            (s.animating = !1),
              i.cssMode ||
                (s.setTransition(0),
                vs({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
          },
        },
        slide: bs,
        loop: ys,
        grabCursor: {
          setGrabCursor: function (e) {
            const t = this;
            if (
              t.support.touch ||
              !t.params.simulateTouch ||
              (t.params.watchOverflow && t.isLocked) ||
              t.params.cssMode
            )
              return;
            const s =
              "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
            (s.style.cursor = "move"),
              (s.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab"),
              (s.style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (s.style.cursor = e ? "grabbing" : "grab");
          },
          unsetGrabCursor: function () {
            const e = this;
            e.support.touch ||
              (e.params.watchOverflow && e.isLocked) ||
              e.params.cssMode ||
              (e[
                "container" === e.params.touchEventsTarget ? "el" : "wrapperEl"
              ].style.cursor = "");
          },
        },
        events: Os,
        breakpoints: Ps,
        checkOverflow: {
          checkOverflow: function () {
            const e = this,
              { isLocked: t, params: s } = e,
              { slidesOffsetBefore: i } = s;
            if (i) {
              const t = e.slides.length - 1,
                s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
              e.isLocked = e.size > s;
            } else e.isLocked = 1 === e.snapGrid.length;
            !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
              !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
              t && t !== e.isLocked && (e.isEnd = !1),
              t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
          },
        },
        classes: Ms,
        images: $s,
      },
      Is = {};
    class qs {
      constructor() {
        let e, t;
        for (var s = arguments.length, i = new Array(s), n = 0; n < s; n++)
          i[n] = arguments[n];
        if (
          (1 === i.length &&
          i[0].constructor &&
          "Object" === Object.prototype.toString.call(i[0]).slice(8, -1)
            ? (t = i[0])
            : ([e, t] = i),
          t || (t = {}),
          (t = rs({}, t)),
          e && !t.el && (t.el = e),
          t.el && Jt(t.el).length > 1)
        ) {
          const e = [];
          return (
            Jt(t.el).each((s) => {
              const i = rs({}, t, { el: s });
              e.push(new qs(i));
            }),
            e
          );
        }
        const r = this;
        (r.__swiper__ = !0),
          (r.support = us()),
          (r.device = ps({ userAgent: t.userAgent })),
          (r.browser = fs()),
          (r.eventsListeners = {}),
          (r.eventsAnyListeners = []),
          (r.modules = [...r.__modules__]),
          t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
        const a = {};
        r.modules.forEach((e) => {
          e({
            swiper: r,
            extendParams: Bs(t, a),
            on: r.on.bind(r),
            once: r.once.bind(r),
            off: r.off.bind(r),
            emit: r.emit.bind(r),
          });
        });
        const o = rs({}, Ds, a);
        return (
          (r.params = rs({}, o, Is, t)),
          (r.originalParams = rs({}, r.params)),
          (r.passedParams = rs({}, t)),
          r.params &&
            r.params.on &&
            Object.keys(r.params.on).forEach((e) => {
              r.on(e, r.params.on[e]);
            }),
          r.params && r.params.onAny && r.onAny(r.params.onAny),
          (r.$ = Jt),
          Object.assign(r, {
            enabled: r.params.enabled,
            el: e,
            classNames: [],
            slides: Jt(),
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === r.params.direction,
            isVertical: () => "vertical" === r.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEvents: (function () {
              const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                t = ["pointerdown", "pointermove", "pointerup"];
              return (
                (r.touchEventsTouch = {
                  start: e[0],
                  move: e[1],
                  end: e[2],
                  cancel: e[3],
                }),
                (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
                r.support.touch || !r.params.simulateTouch
                  ? r.touchEventsTouch
                  : r.touchEventsDesktop
              );
            })(),
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: r.params.focusableElements,
              lastClickTime: ts(),
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              isTouchEvent: void 0,
              startMoving: void 0,
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0,
            },
            imagesToLoad: [],
            imagesLoaded: 0,
          }),
          r.emit("_swiper"),
          r.params.init && r.init(),
          r
        );
      }
      enable() {
        const e = this;
        e.enabled ||
          ((e.enabled = !0),
          e.params.grabCursor && e.setGrabCursor(),
          e.emit("enable"));
      }
      disable() {
        const e = this;
        e.enabled &&
          ((e.enabled = !1),
          e.params.grabCursor && e.unsetGrabCursor(),
          e.emit("disable"));
      }
      setProgress(e, t) {
        const s = this;
        e = Math.min(Math.max(e, 0), 1);
        const i = s.minTranslate(),
          n = (s.maxTranslate() - i) * e + i;
        s.translateTo(n, void 0 === t ? 0 : t),
          s.updateActiveIndex(),
          s.updateSlidesClasses();
      }
      emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = e.el.className
          .split(" ")
          .filter(
            (t) =>
              0 === t.indexOf("swiper") ||
              0 === t.indexOf(e.params.containerModifierClass)
          );
        e.emit("_containerClasses", t.join(" "));
      }
      getSlideClasses(e) {
        const t = this;
        return e.className
          .split(" ")
          .filter(
            (e) =>
              0 === e.indexOf("swiper-slide") ||
              0 === e.indexOf(t.params.slideClass)
          )
          .join(" ");
      }
      emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const t = [];
        e.slides.each((s) => {
          const i = e.getSlideClasses(s);
          t.push({ slideEl: s, classNames: i }), e.emit("_slideClass", s, i);
        }),
          e.emit("_slideClasses", t);
      }
      slidesPerViewDynamic(e, t) {
        void 0 === e && (e = "current"), void 0 === t && (t = !1);
        const {
          params: s,
          slides: i,
          slidesGrid: n,
          slidesSizesGrid: r,
          size: a,
          activeIndex: o,
        } = this;
        let l = 1;
        if (s.centeredSlides) {
          let e,
            t = i[o].swiperSlideSize;
          for (let s = o + 1; s < i.length; s += 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
          for (let s = o - 1; s >= 0; s -= 1)
            i[s] &&
              !e &&
              ((t += i[s].swiperSlideSize), (l += 1), t > a && (e = !0));
        } else if ("current" === e)
          for (let e = o + 1; e < i.length; e += 1) {
            (t ? n[e] + r[e] - n[o] < a : n[e] - n[o] < a) && (l += 1);
          }
        else
          for (let e = o - 1; e >= 0; e -= 1) {
            n[o] - n[e] < a && (l += 1);
          }
        return l;
      }
      update() {
        const e = this;
        if (!e || e.destroyed) return;
        const { snapGrid: t, params: s } = e;
        function i() {
          const t = e.rtlTranslate ? -1 * e.translate : e.translate,
            s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
          e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
        }
        let n;
        s.breakpoints && e.setBreakpoint(),
          e.updateSize(),
          e.updateSlides(),
          e.updateProgress(),
          e.updateSlidesClasses(),
          e.params.freeMode && e.params.freeMode.enabled
            ? (i(), e.params.autoHeight && e.updateAutoHeight())
            : ((n =
                ("auto" === e.params.slidesPerView ||
                  e.params.slidesPerView > 1) &&
                e.isEnd &&
                !e.params.centeredSlides
                  ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                  : e.slideTo(e.activeIndex, 0, !1, !0)),
              n || i()),
          s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
          e.emit("update");
      }
      changeDirection(e, t) {
        void 0 === t && (t = !0);
        const s = this,
          i = s.params.direction;
        return (
          e || (e = "horizontal" === i ? "vertical" : "horizontal"),
          e === i ||
            ("horizontal" !== e && "vertical" !== e) ||
            (s.$el
              .removeClass(`${s.params.containerModifierClass}${i}`)
              .addClass(`${s.params.containerModifierClass}${e}`),
            s.emitContainerClasses(),
            (s.params.direction = e),
            s.slides.each((t) => {
              "vertical" === e ? (t.style.width = "") : (t.style.height = "");
            }),
            s.emit("changeDirection"),
            t && s.update()),
          s
        );
      }
      mount(e) {
        const t = this;
        if (t.mounted) return !0;
        const s = Jt(e || t.params.el);
        if (!(e = s[0])) return !1;
        e.swiper = t;
        const i = () =>
          `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
        let n = (() => {
          if (e && e.shadowRoot && e.shadowRoot.querySelector) {
            const t = Jt(e.shadowRoot.querySelector(i()));
            return (t.children = (e) => s.children(e)), t;
          }
          return s.children(i());
        })();
        if (0 === n.length && t.params.createElements) {
          const e = Gt().createElement("div");
          (n = Jt(e)),
            (e.className = t.params.wrapperClass),
            s.append(e),
            s.children(`.${t.params.slideClass}`).each((e) => {
              n.append(e);
            });
        }
        return (
          Object.assign(t, {
            $el: s,
            el: e,
            $wrapperEl: n,
            wrapperEl: n[0],
            mounted: !0,
            rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
            rtlTranslate:
              "horizontal" === t.params.direction &&
              ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
            wrongRTL: "-webkit-box" === n.css("display"),
          }),
          !0
        );
      }
      init(e) {
        const t = this;
        if (t.initialized) return t;
        return (
          !1 === t.mount(e) ||
            (t.emit("beforeInit"),
            t.params.breakpoints && t.setBreakpoint(),
            t.addClasses(),
            t.params.loop && t.loopCreate(),
            t.updateSize(),
            t.updateSlides(),
            t.params.watchOverflow && t.checkOverflow(),
            t.params.grabCursor && t.enabled && t.setGrabCursor(),
            t.params.preloadImages && t.preloadImages(),
            t.params.loop
              ? t.slideTo(
                  t.params.initialSlide + t.loopedSlides,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                )
              : t.slideTo(
                  t.params.initialSlide,
                  0,
                  t.params.runCallbacksOnInit,
                  !1,
                  !0
                ),
            t.attachEvents(),
            (t.initialized = !0),
            t.emit("init"),
            t.emit("afterInit")),
          t
        );
      }
      destroy(e, t) {
        void 0 === e && (e = !0), void 0 === t && (t = !0);
        const s = this,
          { params: i, $el: n, $wrapperEl: r, slides: a } = s;
        return (
          void 0 === s.params ||
            s.destroyed ||
            (s.emit("beforeDestroy"),
            (s.initialized = !1),
            s.detachEvents(),
            i.loop && s.loopDestroy(),
            t &&
              (s.removeClasses(),
              n.removeAttr("style"),
              r.removeAttr("style"),
              a &&
                a.length &&
                a
                  .removeClass(
                    [
                      i.slideVisibleClass,
                      i.slideActiveClass,
                      i.slideNextClass,
                      i.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-slide-index")),
            s.emit("destroy"),
            Object.keys(s.eventsListeners).forEach((e) => {
              s.off(e);
            }),
            !1 !== e &&
              ((s.$el[0].swiper = null),
              (function (e) {
                const t = e;
                Object.keys(t).forEach((e) => {
                  try {
                    t[e] = null;
                  } catch (e) {}
                  try {
                    delete t[e];
                  } catch (e) {}
                });
              })(s)),
            (s.destroyed = !0)),
          null
        );
      }
      static extendDefaults(e) {
        rs(Is, e);
      }
      static get extendedDefaults() {
        return Is;
      }
      static get defaults() {
        return Ds;
      }
      static installModule(e) {
        qs.prototype.__modules__ || (qs.prototype.__modules__ = []);
        const t = qs.prototype.__modules__;
        "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
      }
      static use(e) {
        return Array.isArray(e)
          ? (e.forEach((e) => qs.installModule(e)), qs)
          : (qs.installModule(e), qs);
      }
    }
    Object.keys(Ns).forEach((e) => {
      Object.keys(Ns[e]).forEach((t) => {
        qs.prototype[t] = Ns[e][t];
      });
    }),
      qs.use([
        function (e) {
          let { swiper: t, on: s, emit: i } = e;
          const n = Rt();
          let r = null,
            a = null;
          const o = () => {
              t &&
                !t.destroyed &&
                t.initialized &&
                (i("beforeResize"), i("resize"));
            },
            l = () => {
              t && !t.destroyed && t.initialized && i("orientationchange");
            };
          s("init", () => {
            t.params.resizeObserver && void 0 !== n.ResizeObserver
              ? t &&
                !t.destroyed &&
                t.initialized &&
                ((r = new ResizeObserver((e) => {
                  a = n.requestAnimationFrame(() => {
                    const { width: s, height: i } = t;
                    let n = s,
                      r = i;
                    e.forEach((e) => {
                      let { contentBoxSize: s, contentRect: i, target: a } = e;
                      (a && a !== t.el) ||
                        ((n = i ? i.width : (s[0] || s).inlineSize),
                        (r = i ? i.height : (s[0] || s).blockSize));
                    }),
                      (n === s && r === i) || o();
                  });
                })),
                r.observe(t.el))
              : (n.addEventListener("resize", o),
                n.addEventListener("orientationchange", l));
          }),
            s("destroy", () => {
              a && n.cancelAnimationFrame(a),
                r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)),
                n.removeEventListener("resize", o),
                n.removeEventListener("orientationchange", l);
            });
        },
        function (e) {
          let { swiper: t, extendParams: s, on: i, emit: n } = e;
          const r = [],
            a = Rt(),
            o = function (e, t) {
              void 0 === t && (t = {});
              const s = new (a.MutationObserver || a.WebkitMutationObserver)(
                (e) => {
                  if (1 === e.length) return void n("observerUpdate", e[0]);
                  const t = function () {
                    n("observerUpdate", e[0]);
                  };
                  a.requestAnimationFrame
                    ? a.requestAnimationFrame(t)
                    : a.setTimeout(t, 0);
                }
              );
              s.observe(e, {
                attributes: void 0 === t.attributes || t.attributes,
                childList: void 0 === t.childList || t.childList,
                characterData: void 0 === t.characterData || t.characterData,
              }),
                r.push(s);
            };
          s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
            i("init", () => {
              if (t.params.observer) {
                if (t.params.observeParents) {
                  const e = t.$el.parents();
                  for (let t = 0; t < e.length; t += 1) o(e[t]);
                }
                o(t.$el[0], { childList: t.params.observeSlideChildren }),
                  o(t.$wrapperEl[0], { attributes: !1 });
              }
            }),
            i("destroy", () => {
              r.forEach((e) => {
                e.disconnect();
              }),
                r.splice(0, r.length);
            });
        },
      ]);
    const js = qs;
    function Hs(e, t, s, i) {
      const n = Gt();
      return (
        e.params.createElements &&
          Object.keys(i).forEach((r) => {
            if (!s[r] && !0 === s.auto) {
              let a = e.$el.children(`.${i[r]}`)[0];
              a ||
                ((a = n.createElement("div")),
                (a.className = i[r]),
                e.$el.append(a)),
                (s[r] = a),
                (t[r] = a);
            }
          }),
        s
      );
    }
    function Vs(e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      function r(e) {
        let s;
        return (
          e &&
            ((s = Jt(e)),
            t.params.uniqueNavElements &&
              "string" == typeof e &&
              s.length > 1 &&
              1 === t.$el.find(e).length &&
              (s = t.$el.find(e))),
          s
        );
      }
      function a(e, s) {
        const i = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[s ? "addClass" : "removeClass"](i.disabledClass),
          e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? "addClass" : "removeClass"](i.lockClass));
      }
      function o() {
        if (t.params.loop) return;
        const { $nextEl: e, $prevEl: s } = t.navigation;
        a(s, t.isBeginning && !t.params.rewind),
          a(e, t.isEnd && !t.params.rewind);
      }
      function l(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
      }
      function c(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
      }
      function d() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = Hs(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        const s = r(e.nextEl),
          i = r(e.prevEl);
        s && s.length > 0 && s.on("click", c),
          i && i.length > 0 && i.on("click", l),
          Object.assign(t.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: i,
            prevEl: i && i[0],
          }),
          t.enabled ||
            (s && s.addClass(e.lockClass), i && i.addClass(e.lockClass));
      }
      function u() {
        const { $nextEl: e, $prevEl: s } = t.navigation;
        e &&
          e.length &&
          (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)),
          s &&
            s.length &&
            (s.off("click", l),
            s.removeClass(t.params.navigation.disabledClass));
      }
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: "swiper-button-disabled",
          hiddenClass: "swiper-button-hidden",
          lockClass: "swiper-button-lock",
        },
      }),
        (t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        i("init", () => {
          d(), o();
        }),
        i("toEdge fromEdge lock unlock", () => {
          o();
        }),
        i("destroy", () => {
          u();
        }),
        i("enable disable", () => {
          const { $nextEl: e, $prevEl: s } = t.navigation;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.navigation.lockClass
            ),
            s &&
              s[t.enabled ? "removeClass" : "addClass"](
                t.params.navigation.lockClass
              );
        }),
        i("click", (e, s) => {
          const { $nextEl: i, $prevEl: r } = t.navigation,
            a = s.target;
          if (t.params.navigation.hideOnClick && !Jt(a).is(r) && !Jt(a).is(i)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === a || t.pagination.el.contains(a))
            )
              return;
            let e;
            i
              ? (e = i.hasClass(t.params.navigation.hiddenClass))
              : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
              n(!0 === e ? "navigationShow" : "navigationHide"),
              i && i.toggleClass(t.params.navigation.hiddenClass),
              r && r.toggleClass(t.params.navigation.hiddenClass);
          }
        }),
        Object.assign(t.navigation, { update: o, init: d, destroy: u });
    }
    function zs(e) {
      return (
        void 0 === e && (e = ""),
        `.${e
          .trim()
          .replace(/([\.:!\/])/g, "\\$1")
          .replace(/ /g, ".")}`
      );
    }
    function Gs(e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      const r = "swiper-pagination";
      let a;
      s({
        pagination: {
          el: null,
          bulletElement: "span",
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: "bullets",
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
        },
      }),
        (t.pagination = { el: null, $el: null, bullets: [] });
      let o = 0;
      function l() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          !t.pagination.$el ||
          0 === t.pagination.$el.length
        );
      }
      function c(e, s) {
        const { bulletActiveClass: i } = t.params.pagination;
        e[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`);
      }
      function d() {
        const e = t.rtl,
          s = t.params.pagination;
        if (l()) return;
        const i =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          r = t.pagination.$el;
        let d;
        const u = t.params.loop
          ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((d = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              d > i - 1 - 2 * t.loopedSlides && (d -= i - 2 * t.loopedSlides),
              d > u - 1 && (d -= u),
              d < 0 && "bullets" !== t.params.paginationType && (d = u + d))
            : (d = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          "bullets" === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const i = t.pagination.bullets;
          let n, l, u;
          if (
            (s.dynamicBullets &&
              ((a = i
                .eq(0)
                [t.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
              r.css(
                t.isHorizontal() ? "width" : "height",
                a * (s.dynamicMainBullets + 4) + "px"
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== t.previousIndex &&
                ((o += d - (t.previousIndex - t.loopedSlides || 0)),
                o > s.dynamicMainBullets - 1
                  ? (o = s.dynamicMainBullets - 1)
                  : o < 0 && (o = 0)),
              (n = Math.max(d - o, 0)),
              (l = n + (Math.min(i.length, s.dynamicMainBullets) - 1)),
              (u = (l + n) / 2)),
            i.removeClass(
              ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(" ")
            ),
            r.length > 1)
          )
            i.each((e) => {
              const t = Jt(e),
                i = t.index();
              i === d && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (i >= n &&
                    i <= l &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  i === n && c(t, "prev"),
                  i === l && c(t, "next"));
            });
          else {
            const e = i.eq(d),
              r = e.index();
            if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const e = i.eq(n),
                a = i.eq(l);
              for (let e = n; e <= l; e += 1)
                i.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (t.params.loop)
                if (r >= i.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    i.eq(i.length - e).addClass(`${s.bulletActiveClass}-main`);
                  i.eq(i.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else c(e, "prev"), c(a, "next");
              else c(e, "prev"), c(a, "next");
            }
          }
          if (s.dynamicBullets) {
            const n = Math.min(i.length, s.dynamicMainBullets + 4),
              r = (a * n - a) / 2 - u * a,
              o = e ? "right" : "left";
            i.css(t.isHorizontal() ? o : "top", `${r}px`);
          }
        }
        if (
          ("fraction" === s.type &&
            (r.find(zs(s.currentClass)).text(s.formatFractionCurrent(d + 1)),
            r.find(zs(s.totalClass)).text(s.formatFractionTotal(u))),
          "progressbar" === s.type)
        ) {
          let e;
          e = s.progressbarOpposite
            ? t.isHorizontal()
              ? "vertical"
              : "horizontal"
            : t.isHorizontal()
            ? "horizontal"
            : "vertical";
          const i = (d + 1) / u;
          let n = 1,
            a = 1;
          "horizontal" === e ? (n = i) : (a = i),
            r
              .find(zs(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${a})`)
              .transition(t.params.speed);
        }
        "custom" === s.type && s.renderCustom
          ? (r.html(s.renderCustom(t, d + 1, u)), n("paginationRender", r[0]))
          : n("paginationUpdate", r[0]),
          t.params.watchOverflow &&
            t.enabled &&
            r[t.isLocked ? "addClass" : "removeClass"](s.lockClass);
      }
      function u() {
        const e = t.params.pagination;
        if (l()) return;
        const s =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          i = t.pagination.$el;
        let r = "";
        if ("bullets" === e.type) {
          let n = t.params.loop
            ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.loop &&
            n > s &&
            (n = s);
          for (let s = 0; s < n; s += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, s, e.bulletClass))
              : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          i.html(r), (t.pagination.bullets = i.find(zs(e.bulletClass)));
        }
        "fraction" === e.type &&
          ((r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          i.html(r)),
          "progressbar" === e.type &&
            ((r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            i.html(r)),
          "custom" !== e.type && n("paginationRender", t.pagination.$el[0]);
      }
      function p() {
        t.params.pagination = Hs(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: "swiper-pagination" }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let s = Jt(e.el);
        0 !== s.length &&
          (t.params.uniqueNavElements &&
            "string" == typeof e.el &&
            s.length > 1 &&
            ((s = t.$el.find(e.el)),
            s.length > 1 &&
              (s = s.filter((e) => Jt(e).parents(".swiper")[0] === t.el))),
          "bullets" === e.type && e.clickable && s.addClass(e.clickableClass),
          s.addClass(e.modifierClass + e.type),
          s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          "bullets" === e.type &&
            e.dynamicBullets &&
            (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
            (o = 0),
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          "progressbar" === e.type &&
            e.progressbarOpposite &&
            s.addClass(e.progressbarOppositeClass),
          e.clickable &&
            s.on("click", zs(e.bulletClass), function (e) {
              e.preventDefault();
              let s = Jt(this).index() * t.params.slidesPerGroup;
              t.params.loop && (s += t.loopedSlides), t.slideTo(s);
            }),
          Object.assign(t.pagination, { $el: s, el: s[0] }),
          t.enabled || s.addClass(e.lockClass));
      }
      function f() {
        const e = t.params.pagination;
        if (l()) return;
        const s = t.pagination.$el;
        s.removeClass(e.hiddenClass),
          s.removeClass(e.modifierClass + e.type),
          s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass &&
            t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && s.off("click", zs(e.bulletClass));
      }
      i("init", () => {
        p(), u(), d();
      }),
        i("activeIndexChange", () => {
          (t.params.loop || void 0 === t.snapIndex) && d();
        }),
        i("snapIndexChange", () => {
          t.params.loop || d();
        }),
        i("slidesLengthChange", () => {
          t.params.loop && (u(), d());
        }),
        i("snapGridLengthChange", () => {
          t.params.loop || (u(), d());
        }),
        i("destroy", () => {
          f();
        }),
        i("enable disable", () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? "removeClass" : "addClass"](
              t.params.pagination.lockClass
            );
        }),
        i("lock unlock", () => {
          d();
        }),
        i("click", (e, s) => {
          const i = s.target,
            { $el: r } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r.length > 0 &&
            !Jt(i).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && i === t.navigation.nextEl) ||
                (t.navigation.prevEl && i === t.navigation.prevEl))
            )
              return;
            const e = r.hasClass(t.params.pagination.hiddenClass);
            n(!0 === e ? "paginationShow" : "paginationHide"),
              r.toggleClass(t.params.pagination.hiddenClass);
          }
        }),
        Object.assign(t.pagination, {
          render: u,
          update: d,
          init: p,
          destroy: f,
        });
    }
    function Fs(e) {
      let { swiper: t, extendParams: s, on: i } = e;
      s({ parallax: { enabled: !1 } });
      const n = (e, s) => {
          const { rtl: i } = t,
            n = Jt(e),
            r = i ? -1 : 1,
            a = n.attr("data-swiper-parallax") || "0";
          let o = n.attr("data-swiper-parallax-x"),
            l = n.attr("data-swiper-parallax-y");
          const c = n.attr("data-swiper-parallax-scale"),
            d = n.attr("data-swiper-parallax-opacity");
          if (
            (o || l
              ? ((o = o || "0"), (l = l || "0"))
              : t.isHorizontal()
              ? ((o = a), (l = "0"))
              : ((l = a), (o = "0")),
            (o =
              o.indexOf("%") >= 0
                ? parseInt(o, 10) * s * r + "%"
                : o * s * r + "px"),
            (l =
              l.indexOf("%") >= 0 ? parseInt(l, 10) * s + "%" : l * s + "px"),
            null != d)
          ) {
            const e = d - (d - 1) * (1 - Math.abs(s));
            n[0].style.opacity = e;
          }
          if (null == c) n.transform(`translate3d(${o}, ${l}, 0px)`);
          else {
            const e = c - (c - 1) * (1 - Math.abs(s));
            n.transform(`translate3d(${o}, ${l}, 0px) scale(${e})`);
          }
        },
        r = () => {
          const { $el: e, slides: s, progress: i, snapGrid: r } = t;
          e
            .children(
              "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
            )
            .each((e) => {
              n(e, i);
            }),
            s.each((e, s) => {
              let a = e.progress;
              t.params.slidesPerGroup > 1 &&
                "auto" !== t.params.slidesPerView &&
                (a += Math.ceil(s / 2) - i * (r.length - 1)),
                (a = Math.min(Math.max(a, -1), 1)),
                Jt(e)
                  .find(
                    "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
                  )
                  .each((e) => {
                    n(e, a);
                  });
            });
        };
      i("beforeInit", () => {
        t.params.parallax.enabled &&
          ((t.params.watchSlidesProgress = !0),
          (t.originalParams.watchSlidesProgress = !0));
      }),
        i("init", () => {
          t.params.parallax.enabled && r();
        }),
        i("setTranslate", () => {
          t.params.parallax.enabled && r();
        }),
        i("setTransition", (e, s) => {
          t.params.parallax.enabled &&
            (function (e) {
              void 0 === e && (e = t.params.speed);
              const { $el: s } = t;
              s.find(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]"
              ).each((t) => {
                const s = Jt(t);
                let i =
                  parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                0 === e && (i = 0), s.transition(i);
              });
            })(s);
        });
    }
    function Rs() {
      if (
        ((function () {
          let e = document.querySelectorAll(
            '[class*="__swiper"]:not(.swiper-wrapper)'
          );
          e &&
            e.forEach((e) => {
              e.parentElement.classList.add("swiper"),
                e.classList.add("swiper-wrapper");
              for (const t of e.children) t.classList.add("swiper-slide");
            });
        })(),
        document.querySelector(".project-about__slider"))
      ) {
        new js(".project-about__slider", {
          modules: [Vs, Gs, Fs],
          observer: !0,
          observeParents: !0,
          observeSlideChildren: !0,
          slidesPerView: 1,
          spaceBetween: 50,
          parallax: !0,
          speed: 1e3,
          pagination: { el: ".project-about__dots", clickable: !0 },
          navigation: {
            prevEl: ".controls-block__arrow_prev",
            nextEl: ".controls-block__arrow_next",
          },
        });
      }
      if (document.querySelector(".date__slider")) {
        new js(".date__slider", {
          modules: [Vs],
          slidesPerView: 4,
          spaceBetween: 20,
          navigation: {
            prevEl: ".controls-block__arrow_prev",
            nextEl: ".controls-block__arrow_next",
          },
          breakpoints: {
            320: { slidesPerView: 1, spaceBetween: 0 },
            360: { slidesPerView: 2, spaceBetween: 5 },
            480: { slidesPerView: 3, spaceBetween: 20 },
            768: { slidesPerView: 4 },
          },
        });
      }
      if (document.querySelector(".our-projects__slider")) {
        new js(".our-projects__slider", {
          modules: [Vs],
          slidesPerView: 4,
          spaceBetween: 0,
          navigation: {
            prevEl: ".controls-block__arrow_prev",
            nextEl: ".controls-block__arrow_next",
          },
          breakpoints: {
            320: { slidesPerView: 1 },
            480: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            992: { slidesPerView: 4 },
          },
        });
      }
    }
    window.addEventListener("load", function (e) {
      Rs();
    });
    let Ws = !1;
    setTimeout(() => {
      if (Ws) {
        let e = new Event("windowScroll");
        window.addEventListener("scroll", function (t) {
          document.dispatchEvent(e);
        });
      }
    }, 0),
      (function (e) {
        if ("object" == typeof exports && "undefined" != typeof module)
          module.exports = e();
        else if ("function" == typeof define && define.amd) define([], e);
        else {
          ("undefined" != typeof window
            ? window
            : "undefined" != typeof global
            ? global
            : "undefined" != typeof self
            ? self
            : this
          ).Lightgallery = e();
        }
      })(function () {
        return (function e(t, s, i) {
          function n(a, o) {
            if (!s[a]) {
              if (!t[a]) {
                var l = "function" == typeof require && require;
                if (!o && l) return l(a, !0);
                if (r) return r(a, !0);
                var c = new Error("Cannot find module '" + a + "'");
                throw ((c.code = "MODULE_NOT_FOUND"), c);
              }
              var d = (s[a] = { exports: {} });
              t[a][0].call(
                d.exports,
                function (e) {
                  return n(t[a][1][e] || e);
                },
                d,
                d.exports,
                e,
                t,
                s,
                i
              );
            }
            return s[a].exports;
          }
          for (
            var r = "function" == typeof require && require, a = 0;
            a < i.length;
            a++
          )
            n(i[a]);
          return n;
        })(
          {
            1: [
              function (e, t, s) {
                !(function (e, t) {
                  if (void 0 !== s) t(s);
                  else {
                    var i = { exports: {} };
                    t(i.exports), (e.lgUtils = i.exports);
                  }
                })(this, function (e) {
                  Object.defineProperty(e, "__esModule", { value: !0 });
                  var t = {
                    getAttribute: function (e, t) {
                      return e[t];
                    },
                    setAttribute: function (e, t, s) {
                      e[t] = s;
                    },
                    wrap: function (e, t) {
                      if (e) {
                        var s = document.createElement("div");
                        (s.className = t),
                          e.parentNode.insertBefore(s, e),
                          e.parentNode.removeChild(e),
                          s.appendChild(e);
                      }
                    },
                    addClass: function (e, t) {
                      e &&
                        (e.classList
                          ? e.classList.add(t)
                          : (e.className += " " + t));
                    },
                    removeClass: function (e, t) {
                      e &&
                        (e.classList
                          ? e.classList.remove(t)
                          : (e.className = e.className.replace(
                              new RegExp(
                                "(^|\\b)" + t.split(" ").join("|") + "(\\b|$)",
                                "gi"
                              ),
                              " "
                            )));
                    },
                    hasClass: function (e, t) {
                      return e.classList
                        ? e.classList.contains(t)
                        : new RegExp("(^| )" + t + "( |$)", "gi").test(
                            e.className
                          );
                    },
                    setVendor: function (e, t, s) {
                      e &&
                        ((e.style[t.charAt(0).toLowerCase() + t.slice(1)] = s),
                        (e.style["webkit" + t] = s),
                        (e.style["moz" + t] = s),
                        (e.style["ms" + t] = s),
                        (e.style["o" + t] = s));
                    },
                    trigger: function (e, t) {
                      var s =
                        arguments.length > 2 && void 0 !== arguments[2]
                          ? arguments[2]
                          : null;
                      if (e) {
                        var i = new CustomEvent(t, { detail: s });
                        e.dispatchEvent(i);
                      }
                    },
                    Listener: { uid: 0 },
                    on: function (e, s, i) {
                      var n = this;
                      e &&
                        s.split(" ").forEach(function (s) {
                          var r = n.getAttribute(e, "lg-event-uid") || "";
                          t.Listener.uid++,
                            (r += "&" + t.Listener.uid),
                            n.setAttribute(e, "lg-event-uid", r),
                            (t.Listener[s + t.Listener.uid] = i),
                            e.addEventListener(s.split(".")[0], i, !1);
                        });
                    },
                    off: function (e, s) {
                      if (e) {
                        var i = this.getAttribute(e, "lg-event-uid");
                        if (i) {
                          i = i.split("&");
                          for (var n = 0; n < i.length; n++)
                            if (i[n]) {
                              var r = s + i[n];
                              if ("." === r.substring(0, 1))
                                for (var a in t.Listener)
                                  t.Listener.hasOwnProperty(a) &&
                                    a.split(".").indexOf(r.split(".")[1]) >
                                      -1 &&
                                    (e.removeEventListener(
                                      a.split(".")[0],
                                      t.Listener[a]
                                    ),
                                    this.setAttribute(
                                      e,
                                      "lg-event-uid",
                                      this.getAttribute(
                                        e,
                                        "lg-event-uid"
                                      ).replace("&" + i[n], "")
                                    ),
                                    delete t.Listener[a]);
                              else
                                e.removeEventListener(
                                  r.split(".")[0],
                                  t.Listener[r]
                                ),
                                  this.setAttribute(
                                    e,
                                    "lg-event-uid",
                                    this.getAttribute(
                                      e,
                                      "lg-event-uid"
                                    ).replace("&" + i[n], "")
                                  ),
                                  delete t.Listener[r];
                            }
                        }
                      }
                    },
                    param: function (e) {
                      return Object.keys(e)
                        .map(function (t) {
                          return (
                            encodeURIComponent(t) +
                            "=" +
                            encodeURIComponent(e[t])
                          );
                        })
                        .join("&");
                    },
                  };
                  e.default = t;
                });
              },
              {},
            ],
            2: [
              function (e, t, s) {
                !(function (t, i) {
                  if (void 0 !== s) i(e("./lg-utils"));
                  else {
                    i(t.lgUtils), (t.lightgallery = {});
                  }
                })(this, function (e) {
                  function t(e, t) {
                    if (
                      ((this.el = e),
                      (this.s = i({}, n, t)),
                      this.s.dynamic &&
                        "undefined" !== this.s.dynamicEl &&
                        this.s.dynamicEl.constructor === Array &&
                        !this.s.dynamicEl.length)
                    )
                      throw "When using dynamic mode, you must also define dynamicEl as an Array.";
                    return (
                      (this.modules = {}),
                      (this.lGalleryOn = !1),
                      (this.lgBusy = !1),
                      (this.hideBartimeout = !1),
                      (this.isTouch =
                        "ontouchstart" in document.documentElement),
                      this.s.slideEndAnimatoin &&
                        (this.s.hideControlOnEnd = !1),
                      (this.items = []),
                      this.s.dynamic
                        ? (this.items = this.s.dynamicEl)
                        : "this" === this.s.selector
                        ? this.items.push(this.el)
                        : "" !== this.s.selector
                        ? this.s.selectWithin
                          ? (this.items = document
                              .querySelector(this.s.selectWithin)
                              .querySelectorAll(this.s.selector))
                          : (this.items = this.el.querySelectorAll(
                              this.s.selector
                            ))
                        : (this.items = this.el.children),
                      (this.___slide = ""),
                      (this.outer = ""),
                      this.init(),
                      this
                    );
                  }
                  var s = (function (e) {
                      return e && e.__esModule ? e : { default: e };
                    })(e),
                    i =
                      Object.assign ||
                      function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                          var s = arguments[t];
                          for (var i in s)
                            Object.prototype.hasOwnProperty.call(s, i) &&
                              (e[i] = s[i]);
                        }
                        return e;
                      };
                  !(function () {
                    function e(e, t) {
                      t = t || { bubbles: !1, cancelable: !1, detail: void 0 };
                      var s = document.createEvent("CustomEvent");
                      return (
                        s.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                        s
                      );
                    }
                    if ("function" == typeof window.CustomEvent) return !1;
                    (e.prototype = window.Event.prototype),
                      (window.CustomEvent = e);
                  })(),
                    (window.utils = s.default),
                    (window.lgData = { uid: 0 }),
                    (window.lgModules = {});
                  var n = {
                    mode: "lg-slide",
                    cssEasing: "ease",
                    easing: "linear",
                    speed: 600,
                    height: "100%",
                    width: "100%",
                    addClass: "",
                    startClass: "lg-start-zoom",
                    backdropDuration: 150,
                    hideBarsDelay: 6e3,
                    useLeft: !1,
                    closable: !0,
                    loop: !0,
                    escKey: !0,
                    keyPress: !0,
                    controls: !0,
                    slideEndAnimatoin: !0,
                    hideControlOnEnd: !1,
                    mousewheel: !1,
                    getCaptionFromTitleOrAlt: !0,
                    appendSubHtmlTo: ".lg-sub-html",
                    subHtmlSelectorRelative: !1,
                    preload: 1,
                    showAfterLoad: !0,
                    selector: "",
                    selectWithin: "",
                    nextHtml: "",
                    prevHtml: "",
                    index: !1,
                    iframeMaxWidth: "100%",
                    download: !0,
                    counter: !0,
                    appendCounterTo: ".lg-toolbar",
                    swipeThreshold: 50,
                    enableSwipe: !0,
                    enableDrag: !0,
                    dynamic: !1,
                    dynamicEl: [],
                    galleryId: 1,
                  };
                  (t.prototype.init = function () {
                    var e = this;
                    e.s.preload > e.items.length &&
                      (e.s.preload = e.items.length);
                    var t = window.location.hash;
                    if (
                      (t.indexOf("lg=" + this.s.galleryId) > 0 &&
                        ((e.index = parseInt(t.split("&slide=")[1], 10)),
                        s.default.addClass(document.body, "lg-from-hash"),
                        s.default.hasClass(document.body, "lg-on") ||
                          (s.default.addClass(document.body, "lg-on"),
                          setTimeout(function () {
                            e.build(e.index);
                          }))),
                      e.s.dynamic)
                    )
                      s.default.trigger(this.el, "onBeforeOpen"),
                        (e.index = e.s.index || 0),
                        s.default.hasClass(document.body, "lg-on") ||
                          (s.default.addClass(document.body, "lg-on"),
                          setTimeout(function () {
                            e.build(e.index);
                          }));
                    else
                      for (var i = 0; i < e.items.length; i++)
                        !(function (t) {
                          s.default.on(
                            e.items[t],
                            "click.lgcustom",
                            function (i) {
                              i.preventDefault(),
                                s.default.trigger(e.el, "onBeforeOpen"),
                                (e.index = e.s.index || t),
                                s.default.hasClass(document.body, "lg-on") ||
                                  (e.build(e.index),
                                  s.default.addClass(document.body, "lg-on"));
                            }
                          );
                        })(i);
                  }),
                    (t.prototype.build = function (e) {
                      var t = this;
                      for (var i in (t.structure(), window.lgModules))
                        t.modules[i] = new window.lgModules[i](t.el);
                      t.slide(e, !1, !1),
                        t.s.keyPress && t.keyPress(),
                        t.items.length > 1 &&
                          (t.arrow(),
                          setTimeout(function () {
                            t.enableDrag(), t.enableSwipe();
                          }, 50),
                          t.s.mousewheel && t.mousewheel()),
                        t.counter(),
                        t.closeGallery(),
                        s.default.trigger(t.el, "onAfterOpen"),
                        s.default.on(
                          t.outer,
                          "mousemove.lg click.lg touchstart.lg",
                          function () {
                            s.default.removeClass(t.outer, "lg-hide-items"),
                              clearTimeout(t.hideBartimeout),
                              (t.hideBartimeout = setTimeout(function () {
                                s.default.addClass(t.outer, "lg-hide-items");
                              }, t.s.hideBarsDelay));
                          }
                        );
                    }),
                    (t.prototype.structure = function () {
                      var e,
                        t = "",
                        i = "",
                        n = 0,
                        r = "",
                        a = this;
                      for (
                        document.body.insertAdjacentHTML(
                          "beforeend",
                          '<div class="lg-backdrop"></div>'
                        ),
                          s.default.setVendor(
                            document.querySelector(".lg-backdrop"),
                            "TransitionDuration",
                            this.s.backdropDuration + "ms"
                          ),
                          n = 0;
                        n < this.items.length;
                        n++
                      )
                        t += '<div class="lg-item"></div>';
                      if (
                        (this.s.controls &&
                          this.items.length > 1 &&
                          (i =
                            '<div class="lg-actions"><div class="lg-prev lg-icon">' +
                            this.s.prevHtml +
                            '</div><div class="lg-next lg-icon">' +
                            this.s.nextHtml +
                            "</div></div>"),
                        ".lg-sub-html" === this.s.appendSubHtmlTo &&
                          (r = '<div class="lg-sub-html"></div>'),
                        (e =
                          '<div class="lg-outer ' +
                          this.s.addClass +
                          " " +
                          this.s.startClass +
                          '"><div class="lg" style="width:' +
                          this.s.width +
                          "; height:" +
                          this.s.height +
                          '"><div class="lg-inner">' +
                          t +
                          '</div><div class="lg-toolbar group"><span class="lg-close lg-icon"></span></div>' +
                          i +
                          r +
                          "</div></div>"),
                        document.body.insertAdjacentHTML("beforeend", e),
                        (this.outer = document.querySelector(".lg-outer")),
                        (this.___slide =
                          this.outer.querySelectorAll(".lg-item")),
                        this.s.useLeft
                          ? (s.default.addClass(this.outer, "lg-use-left"),
                            (this.s.mode = "lg-slide"))
                          : s.default.addClass(this.outer, "lg-use-css3"),
                        a.setTop(),
                        s.default.on(
                          window,
                          "resize.lg orientationchange.lg",
                          function () {
                            setTimeout(function () {
                              a.setTop();
                            }, 100);
                          }
                        ),
                        s.default.addClass(
                          this.___slide[this.index],
                          "lg-current"
                        ),
                        this.doCss()
                          ? s.default.addClass(this.outer, "lg-css3")
                          : (s.default.addClass(this.outer, "lg-css"),
                            (this.s.speed = 0)),
                        s.default.addClass(this.outer, this.s.mode),
                        this.s.enableDrag &&
                          this.items.length > 1 &&
                          s.default.addClass(this.outer, "lg-grab"),
                        this.s.showAfterLoad &&
                          s.default.addClass(this.outer, "lg-show-after-load"),
                        this.doCss())
                      ) {
                        var o = this.outer.querySelector(".lg-inner");
                        s.default.setVendor(
                          o,
                          "TransitionTimingFunction",
                          this.s.cssEasing
                        ),
                          s.default.setVendor(
                            o,
                            "TransitionDuration",
                            this.s.speed + "ms"
                          );
                      }
                      setTimeout(function () {
                        s.default.addClass(
                          document.querySelector(".lg-backdrop"),
                          "in"
                        );
                      }),
                        setTimeout(function () {
                          s.default.addClass(a.outer, "lg-visible");
                        }, this.s.backdropDuration),
                        this.s.download &&
                          this.outer
                            .querySelector(".lg-toolbar")
                            .insertAdjacentHTML(
                              "beforeend",
                              '<a id="lg-download" target="_blank" download class="lg-download lg-icon"></a>'
                            ),
                        (this.prevScrollTop =
                          document.documentElement.scrollTop ||
                          document.body.scrollTop);
                    }),
                    (t.prototype.setTop = function () {
                      if ("100%" !== this.s.height) {
                        var e = window.innerHeight,
                          t = (e - parseInt(this.s.height, 10)) / 2,
                          s = this.outer.querySelector(".lg");
                        e >= parseInt(this.s.height, 10)
                          ? (s.style.top = t + "px")
                          : (s.style.top = "0px");
                      }
                    }),
                    (t.prototype.doCss = function () {
                      return !!(function () {
                        var e = [
                            "transition",
                            "MozTransition",
                            "WebkitTransition",
                            "OTransition",
                            "msTransition",
                            "KhtmlTransition",
                          ],
                          t = document.documentElement,
                          s = 0;
                        for (s = 0; s < e.length; s++)
                          if (e[s] in t.style) return !0;
                      })();
                    }),
                    (t.prototype.isVideo = function (e, t) {
                      var s;
                      if (
                        ((s = this.s.dynamic
                          ? this.s.dynamicEl[t].html
                          : this.items[t].getAttribute("data-html")),
                        !e && s)
                      )
                        return { html5: !0 };
                      var i = e.match(
                          /\/\/(?:www\.)?youtu(?:\.be|be\.com|be-nocookie\.com)\/(?:watch\?v=|embed\/)?([a-z0-9\-\_\%]+)/i
                        ),
                        n = e.match(/\/\/(?:www\.)?vimeo.com\/([0-9a-z\-_]+)/i),
                        r = e.match(/\/\/(?:www\.)?dai.ly\/([0-9a-z\-_]+)/i),
                        a = e.match(
                          /\/\/(?:www\.)?(?:vk\.com|vkontakte\.ru)\/(?:video_ext\.php\?)(.*)/i
                        );
                      return i
                        ? { youtube: i }
                        : n
                        ? { vimeo: n }
                        : r
                        ? { dailymotion: r }
                        : a
                        ? { vk: a }
                        : void 0;
                    }),
                    (t.prototype.counter = function () {
                      this.s.counter &&
                        this.outer
                          .querySelector(this.s.appendCounterTo)
                          .insertAdjacentHTML(
                            "beforeend",
                            '<div id="lg-counter"><span id="lg-counter-current">' +
                              (parseInt(this.index, 10) + 1) +
                              '</span> / <span id="lg-counter-all">' +
                              this.items.length +
                              "</span></div>"
                          );
                    }),
                    (t.prototype.addHtml = function (e) {
                      var t,
                        i = null;
                      if (
                        (this.s.dynamic
                          ? (i = this.s.dynamicEl[e].subHtml)
                          : ((i = (t = this.items[e]).getAttribute(
                              "data-sub-html"
                            )),
                            this.s.getCaptionFromTitleOrAlt &&
                              !i &&
                              (i = t.getAttribute("title")) &&
                              t.querySelector("img") &&
                              (i = t.querySelector("img").getAttribute("alt"))),
                        null != i)
                      ) {
                        var n = i.substring(0, 1);
                        ("." !== n && "#" !== n) ||
                          (i =
                            this.s.subHtmlSelectorRelative && !this.s.dynamic
                              ? t.querySelector(i).innerHTML
                              : document.querySelector(i).innerHTML);
                      } else i = "";
                      ".lg-sub-html" === this.s.appendSubHtmlTo
                        ? (this.outer.querySelector(
                            this.s.appendSubHtmlTo
                          ).innerHTML = i)
                        : this.___slide[e].insertAdjacentHTML("beforeend", i),
                        null != i &&
                          ("" === i
                            ? s.default.addClass(
                                this.outer.querySelector(
                                  this.s.appendSubHtmlTo
                                ),
                                "lg-empty-html"
                              )
                            : s.default.removeClass(
                                this.outer.querySelector(
                                  this.s.appendSubHtmlTo
                                ),
                                "lg-empty-html"
                              )),
                        s.default.trigger(this.el, "onAfterAppendSubHtml", {
                          index: e,
                        });
                    }),
                    (t.prototype.preload = function (e) {
                      var t = 1,
                        s = 1;
                      for (
                        t = 1;
                        t <= this.s.preload && !(t >= this.items.length - e);
                        t++
                      )
                        this.loadContent(e + t, !1, 0);
                      for (s = 1; s <= this.s.preload && !(e - s < 0); s++)
                        this.loadContent(e - s, !1, 0);
                    }),
                    (t.prototype.loadContent = function (e, t, i) {
                      var n,
                        r,
                        a,
                        o,
                        l,
                        c,
                        d = this,
                        u = !1,
                        p = function (e) {
                          for (var t = [], s = [], i = 0; i < e.length; i++) {
                            var n = e[i].split(" ");
                            "" === n[0] && n.splice(0, 1),
                              s.push(n[0]),
                              t.push(n[1]);
                          }
                          for (
                            var a = window.innerWidth, o = 0;
                            o < t.length;
                            o++
                          )
                            if (parseInt(t[o], 10) > a) {
                              r = s[o];
                              break;
                            }
                        };
                      d.s.dynamic
                        ? (d.s.dynamicEl[e].poster &&
                            ((u = !0), (a = d.s.dynamicEl[e].poster)),
                          (c = d.s.dynamicEl[e].html),
                          (r = d.s.dynamicEl[e].src),
                          d.s.dynamicEl[e].responsive &&
                            p(d.s.dynamicEl[e].responsive.split(",")),
                          (o = d.s.dynamicEl[e].srcset),
                          (l = d.s.dynamicEl[e].sizes))
                        : (d.items[e].getAttribute("data-poster") &&
                            ((u = !0),
                            (a = d.items[e].getAttribute("data-poster"))),
                          (c = d.items[e].getAttribute("data-html")),
                          (r =
                            d.items[e].getAttribute("href") ||
                            d.items[e].getAttribute("data-src")),
                          d.items[e].getAttribute("data-responsive") &&
                            p(
                              d.items[e]
                                .getAttribute("data-responsive")
                                .split(",")
                            ),
                          (o = d.items[e].getAttribute("data-srcset")),
                          (l = d.items[e].getAttribute("data-sizes")));
                      var f = !1;
                      d.s.dynamic
                        ? d.s.dynamicEl[e].iframe && (f = !0)
                        : "true" === d.items[e].getAttribute("data-iframe") &&
                          (f = !0);
                      var h = d.isVideo(r, e);
                      if (!s.default.hasClass(d.___slide[e], "lg-loaded")) {
                        if (f)
                          d.___slide[e].insertAdjacentHTML(
                            "afterbegin",
                            '<div class="lg-video-cont" style="max-width:' +
                              d.s.iframeMaxWidth +
                              '"><div class="lg-video"><iframe class="lg-object" frameborder="0" src="' +
                              r +
                              '"  allowfullscreen="true"></iframe></div></div>'
                          );
                        else if (u) {
                          var m;
                          (m =
                            h && h.youtube
                              ? "lg-has-youtube"
                              : h && h.vimeo
                              ? "lg-has-vimeo"
                              : "lg-has-html5"),
                            d.___slide[e].insertAdjacentHTML(
                              "beforeend",
                              '<div class="lg-video-cont ' +
                                m +
                                ' "><div class="lg-video"><span class="lg-video-play"></span><img class="lg-object lg-has-poster" src="' +
                                a +
                                '" /></div></div>'
                            );
                        } else
                          h
                            ? (d.___slide[e].insertAdjacentHTML(
                                "beforeend",
                                '<div class="lg-video-cont "><div class="lg-video"></div></div>'
                              ),
                              s.default.trigger(d.el, "hasVideo", {
                                index: e,
                                src: r,
                                html: c,
                              }))
                            : d.___slide[e].insertAdjacentHTML(
                                "beforeend",
                                '<div class="lg-img-wrap"><img class="lg-object lg-image" src="' +
                                  r +
                                  '" /></div>'
                              );
                        if (
                          (s.default.trigger(d.el, "onAferAppendSlide", {
                            index: e,
                          }),
                          (n = d.___slide[e].querySelector(".lg-object")),
                          l && n.setAttribute("sizes", l),
                          o)
                        ) {
                          n.setAttribute("srcset", o);
                          try {
                            picturefill({ elements: [n[0]] });
                          } catch (e) {
                            console.error(
                              "Make sure you have included Picturefill version 2"
                            );
                          }
                        }
                        ".lg-sub-html" !== this.s.appendSubHtmlTo &&
                          d.addHtml(e),
                          s.default.addClass(d.___slide[e], "lg-loaded");
                      }
                      s.default.on(
                        d.___slide[e].querySelector(".lg-object"),
                        "load.lg error.lg",
                        function () {
                          var t = 0;
                          i &&
                            !s.default.hasClass(
                              document.body,
                              "lg-from-hash"
                            ) &&
                            (t = i),
                            setTimeout(function () {
                              s.default.addClass(d.___slide[e], "lg-complete"),
                                s.default.trigger(d.el, "onSlideItemLoad", {
                                  index: e,
                                  delay: i || 0,
                                });
                            }, t);
                        }
                      ),
                        h &&
                          h.html5 &&
                          !u &&
                          s.default.addClass(d.___slide[e], "lg-complete"),
                        !0 === t &&
                          (s.default.hasClass(d.___slide[e], "lg-complete")
                            ? d.preload(e)
                            : s.default.on(
                                d.___slide[e].querySelector(".lg-object"),
                                "load.lg error.lg",
                                function () {
                                  d.preload(e);
                                }
                              ));
                    }),
                    (t.prototype.slide = function (e, t, i) {
                      for (var n = 0, r = 0; r < this.___slide.length; r++)
                        if (
                          s.default.hasClass(this.___slide[r], "lg-current")
                        ) {
                          n = r;
                          break;
                        }
                      var a = this;
                      if (!a.lGalleryOn || n !== e) {
                        var o = this.___slide.length,
                          l = a.lGalleryOn ? this.s.speed : 0,
                          c = !1,
                          d = !1;
                        if (!a.lgBusy) {
                          var u;
                          if (this.s.download)
                            (u = a.s.dynamic
                              ? !1 !== a.s.dynamicEl[e].downloadUrl &&
                                (a.s.dynamicEl[e].downloadUrl ||
                                  a.s.dynamicEl[e].src)
                              : "false" !==
                                  a.items[e].getAttribute(
                                    "data-download-url"
                                  ) &&
                                (a.items[e].getAttribute("data-download-url") ||
                                  a.items[e].getAttribute("href") ||
                                  a.items[e].getAttribute("data-src")))
                              ? (document
                                  .getElementById("lg-download")
                                  .setAttribute("href", u),
                                s.default.removeClass(
                                  a.outer,
                                  "lg-hide-download"
                                ))
                              : s.default.addClass(a.outer, "lg-hide-download");
                          if (
                            (s.default.trigger(a.el, "onBeforeSlide", {
                              prevIndex: n,
                              index: e,
                              fromTouch: t,
                              fromThumb: i,
                            }),
                            (a.lgBusy = !0),
                            clearTimeout(a.hideBartimeout),
                            ".lg-sub-html" === this.s.appendSubHtmlTo &&
                              setTimeout(function () {
                                a.addHtml(e);
                              }, l),
                            this.arrowDisable(e),
                            t)
                          ) {
                            var p = e - 1,
                              f = e + 1;
                            ((0 === e && n === o - 1) ||
                              (e === o - 1 && 0 === n)) &&
                              ((f = 0), (p = o - 1)),
                              s.default.removeClass(
                                a.outer.querySelector(".lg-prev-slide"),
                                "lg-prev-slide"
                              ),
                              s.default.removeClass(
                                a.outer.querySelector(".lg-current"),
                                "lg-current"
                              ),
                              s.default.removeClass(
                                a.outer.querySelector(".lg-next-slide"),
                                "lg-next-slide"
                              ),
                              s.default.addClass(
                                a.___slide[p],
                                "lg-prev-slide"
                              ),
                              s.default.addClass(
                                a.___slide[f],
                                "lg-next-slide"
                              ),
                              s.default.addClass(a.___slide[e], "lg-current");
                          } else {
                            s.default.addClass(a.outer, "lg-no-trans");
                            for (var h = 0; h < this.___slide.length; h++)
                              s.default.removeClass(
                                this.___slide[h],
                                "lg-prev-slide"
                              ),
                                s.default.removeClass(
                                  this.___slide[h],
                                  "lg-next-slide"
                                );
                            e < n
                              ? ((d = !0),
                                0 !== e ||
                                  n !== o - 1 ||
                                  i ||
                                  ((d = !1), (c = !0)))
                              : e > n &&
                                ((c = !0),
                                e !== o - 1 ||
                                  0 !== n ||
                                  i ||
                                  ((d = !0), (c = !1))),
                              d
                                ? (s.default.addClass(
                                    this.___slide[e],
                                    "lg-prev-slide"
                                  ),
                                  s.default.addClass(
                                    this.___slide[n],
                                    "lg-next-slide"
                                  ))
                                : c &&
                                  (s.default.addClass(
                                    this.___slide[e],
                                    "lg-next-slide"
                                  ),
                                  s.default.addClass(
                                    this.___slide[n],
                                    "lg-prev-slide"
                                  )),
                              setTimeout(function () {
                                s.default.removeClass(
                                  a.outer.querySelector(".lg-current"),
                                  "lg-current"
                                ),
                                  s.default.addClass(
                                    a.___slide[e],
                                    "lg-current"
                                  ),
                                  s.default.removeClass(a.outer, "lg-no-trans");
                              }, 50);
                          }
                          a.lGalleryOn
                            ? (setTimeout(function () {
                                a.loadContent(e, !0, 0);
                              }, this.s.speed + 50),
                              setTimeout(function () {
                                (a.lgBusy = !1),
                                  s.default.trigger(a.el, "onAfterSlide", {
                                    prevIndex: n,
                                    index: e,
                                    fromTouch: t,
                                    fromThumb: i,
                                  });
                              }, this.s.speed))
                            : (a.loadContent(e, !0, a.s.backdropDuration),
                              (a.lgBusy = !1),
                              s.default.trigger(a.el, "onAfterSlide", {
                                prevIndex: n,
                                index: e,
                                fromTouch: t,
                                fromThumb: i,
                              })),
                            (a.lGalleryOn = !0),
                            this.s.counter &&
                              document.getElementById("lg-counter-current") &&
                              (document.getElementById(
                                "lg-counter-current"
                              ).innerHTML = e + 1);
                        }
                      }
                    }),
                    (t.prototype.goToNextSlide = function (e) {
                      var t = this;
                      t.lgBusy ||
                        (t.index + 1 < t.___slide.length
                          ? (t.index++,
                            s.default.trigger(t.el, "onBeforeNextSlide", {
                              index: t.index,
                            }),
                            t.slide(t.index, e, !1))
                          : t.s.loop
                          ? ((t.index = 0),
                            s.default.trigger(t.el, "onBeforeNextSlide", {
                              index: t.index,
                            }),
                            t.slide(t.index, e, !1))
                          : t.s.slideEndAnimatoin &&
                            (s.default.addClass(t.outer, "lg-right-end"),
                            setTimeout(function () {
                              s.default.removeClass(t.outer, "lg-right-end");
                            }, 400)));
                    }),
                    (t.prototype.goToPrevSlide = function (e) {
                      var t = this;
                      t.lgBusy ||
                        (t.index > 0
                          ? (t.index--,
                            s.default.trigger(t.el, "onBeforePrevSlide", {
                              index: t.index,
                              fromTouch: e,
                            }),
                            t.slide(t.index, e, !1))
                          : t.s.loop
                          ? ((t.index = t.items.length - 1),
                            s.default.trigger(t.el, "onBeforePrevSlide", {
                              index: t.index,
                              fromTouch: e,
                            }),
                            t.slide(t.index, e, !1))
                          : t.s.slideEndAnimatoin &&
                            (s.default.addClass(t.outer, "lg-left-end"),
                            setTimeout(function () {
                              s.default.removeClass(t.outer, "lg-left-end");
                            }, 400)));
                    }),
                    (t.prototype.keyPress = function () {
                      var e = this;
                      this.items.length > 1 &&
                        s.default.on(window, "keyup.lg", function (t) {
                          e.items.length > 1 &&
                            (37 === t.keyCode &&
                              (t.preventDefault(), e.goToPrevSlide()),
                            39 === t.keyCode &&
                              (t.preventDefault(), e.goToNextSlide()));
                        }),
                        s.default.on(window, "keydown.lg", function (t) {
                          !0 === e.s.escKey &&
                            27 === t.keyCode &&
                            (t.preventDefault(),
                            s.default.hasClass(e.outer, "lg-thumb-open")
                              ? s.default.removeClass(e.outer, "lg-thumb-open")
                              : e.destroy());
                        });
                    }),
                    (t.prototype.arrow = function () {
                      var e = this;
                      s.default.on(
                        this.outer.querySelector(".lg-prev"),
                        "click.lg",
                        function () {
                          e.goToPrevSlide();
                        }
                      ),
                        s.default.on(
                          this.outer.querySelector(".lg-next"),
                          "click.lg",
                          function () {
                            e.goToNextSlide();
                          }
                        );
                    }),
                    (t.prototype.arrowDisable = function (e) {
                      if (!this.s.loop && this.s.hideControlOnEnd) {
                        var t = this.outer.querySelector(".lg-next"),
                          i = this.outer.querySelector(".lg-prev");
                        e + 1 < this.___slide.length
                          ? (t.removeAttribute("disabled"),
                            s.default.removeClass(t, "disabled"))
                          : (t.setAttribute("disabled", "disabled"),
                            s.default.addClass(t, "disabled")),
                          e > 0
                            ? (i.removeAttribute("disabled"),
                              s.default.removeClass(i, "disabled"))
                            : (i.setAttribute("disabled", "disabled"),
                              s.default.addClass(i, "disabled"));
                      }
                    }),
                    (t.prototype.setTranslate = function (e, t, i) {
                      this.s.useLeft
                        ? (e.style.left = t)
                        : s.default.setVendor(
                            e,
                            "Transform",
                            "translate3d(" + t + "px, " + i + "px, 0px)"
                          );
                    }),
                    (t.prototype.touchMove = function (e, t) {
                      var i = t - e;
                      Math.abs(i) > 15 &&
                        (s.default.addClass(this.outer, "lg-dragging"),
                        this.setTranslate(this.___slide[this.index], i, 0),
                        this.setTranslate(
                          document.querySelector(".lg-prev-slide"),
                          -this.___slide[this.index].clientWidth + i,
                          0
                        ),
                        this.setTranslate(
                          document.querySelector(".lg-next-slide"),
                          this.___slide[this.index].clientWidth + i,
                          0
                        ));
                    }),
                    (t.prototype.touchEnd = function (e) {
                      var t = this;
                      "lg-slide" !== t.s.mode &&
                        s.default.addClass(t.outer, "lg-slide");
                      for (var i = 0; i < this.___slide.length; i++)
                        s.default.hasClass(this.___slide[i], "lg-current") ||
                          s.default.hasClass(
                            this.___slide[i],
                            "lg-prev-slide"
                          ) ||
                          s.default.hasClass(
                            this.___slide[i],
                            "lg-next-slide"
                          ) ||
                          (this.___slide[i].style.opacity = "0");
                      setTimeout(function () {
                        s.default.removeClass(t.outer, "lg-dragging"),
                          e < 0 && Math.abs(e) > t.s.swipeThreshold
                            ? t.goToNextSlide(!0)
                            : e > 0 && Math.abs(e) > t.s.swipeThreshold
                            ? t.goToPrevSlide(!0)
                            : Math.abs(e) < 5 &&
                              s.default.trigger(t.el, "onSlideClick");
                        for (var i = 0; i < t.___slide.length; i++)
                          t.___slide[i].removeAttribute("style");
                      }),
                        setTimeout(function () {
                          s.default.hasClass(t.outer, "lg-dragging") ||
                            "lg-slide" === t.s.mode ||
                            s.default.removeClass(t.outer, "lg-slide");
                        }, t.s.speed + 100);
                    }),
                    (t.prototype.enableSwipe = function () {
                      var e = this,
                        t = 0,
                        i = 0,
                        n = !1;
                      if (e.s.enableSwipe && e.isTouch && e.doCss()) {
                        for (var r = 0; r < e.___slide.length; r++)
                          s.default.on(
                            e.___slide[r],
                            "touchstart.lg",
                            function (i) {
                              s.default.hasClass(e.outer, "lg-zoomed") ||
                                e.lgBusy ||
                                (i.preventDefault(),
                                e.manageSwipeClass(),
                                (t = i.targetTouches[0].pageX));
                            }
                          );
                        for (var a = 0; a < e.___slide.length; a++)
                          s.default.on(
                            e.___slide[a],
                            "touchmove.lg",
                            function (r) {
                              s.default.hasClass(e.outer, "lg-zoomed") ||
                                (r.preventDefault(),
                                (i = r.targetTouches[0].pageX),
                                e.touchMove(t, i),
                                (n = !0));
                            }
                          );
                        for (var o = 0; o < e.___slide.length; o++)
                          s.default.on(
                            e.___slide[o],
                            "touchend.lg",
                            function () {
                              s.default.hasClass(e.outer, "lg-zoomed") ||
                                (n
                                  ? ((n = !1), e.touchEnd(i - t))
                                  : s.default.trigger(e.el, "onSlideClick"));
                            }
                          );
                      }
                    }),
                    (t.prototype.enableDrag = function () {
                      var e = this,
                        t = 0,
                        i = 0,
                        n = !1,
                        r = !1;
                      if (e.s.enableDrag && !e.isTouch && e.doCss()) {
                        for (var a = 0; a < e.___slide.length; a++)
                          s.default.on(
                            e.___slide[a],
                            "mousedown.lg",
                            function (i) {
                              s.default.hasClass(e.outer, "lg-zoomed") ||
                                ((s.default.hasClass(i.target, "lg-object") ||
                                  s.default.hasClass(
                                    i.target,
                                    "lg-video-play"
                                  )) &&
                                  (i.preventDefault(),
                                  e.lgBusy ||
                                    (e.manageSwipeClass(),
                                    (t = i.pageX),
                                    (n = !0),
                                    (e.outer.scrollLeft += 1),
                                    (e.outer.scrollLeft -= 1),
                                    s.default.removeClass(e.outer, "lg-grab"),
                                    s.default.addClass(e.outer, "lg-grabbing"),
                                    s.default.trigger(e.el, "onDragstart"))));
                            }
                          );
                        s.default.on(window, "mousemove.lg", function (a) {
                          n &&
                            ((r = !0),
                            (i = a.pageX),
                            e.touchMove(t, i),
                            s.default.trigger(e.el, "onDragmove"));
                        }),
                          s.default.on(window, "mouseup.lg", function (a) {
                            r
                              ? ((r = !1),
                                e.touchEnd(i - t),
                                s.default.trigger(e.el, "onDragend"))
                              : (s.default.hasClass(a.target, "lg-object") ||
                                  s.default.hasClass(
                                    a.target,
                                    "lg-video-play"
                                  )) &&
                                s.default.trigger(e.el, "onSlideClick"),
                              n &&
                                ((n = !1),
                                s.default.removeClass(e.outer, "lg-grabbing"),
                                s.default.addClass(e.outer, "lg-grab"));
                          });
                      }
                    }),
                    (t.prototype.manageSwipeClass = function () {
                      var e = this.index + 1,
                        t = this.index - 1,
                        i = this.___slide.length;
                      this.s.loop &&
                        (0 === this.index
                          ? (t = i - 1)
                          : this.index === i - 1 && (e = 0));
                      for (var n = 0; n < this.___slide.length; n++)
                        s.default.removeClass(
                          this.___slide[n],
                          "lg-next-slide"
                        ),
                          s.default.removeClass(
                            this.___slide[n],
                            "lg-prev-slide"
                          );
                      t > -1 &&
                        s.default.addClass(this.___slide[t], "lg-prev-slide"),
                        s.default.addClass(this.___slide[e], "lg-next-slide");
                    }),
                    (t.prototype.mousewheel = function () {
                      var e = this;
                      s.default.on(e.outer, "mousewheel.lg", function (t) {
                        t.deltaY &&
                          (t.deltaY > 0 ? e.goToPrevSlide() : e.goToNextSlide(),
                          t.preventDefault());
                      });
                    }),
                    (t.prototype.closeGallery = function () {
                      var e = this,
                        t = !1;
                      s.default.on(
                        this.outer.querySelector(".lg-close"),
                        "click.lg",
                        function () {
                          e.destroy();
                        }
                      ),
                        e.s.closable &&
                          (s.default.on(e.outer, "mousedown.lg", function (e) {
                            t = !!(
                              s.default.hasClass(e.target, "lg-outer") ||
                              s.default.hasClass(e.target, "lg-item") ||
                              s.default.hasClass(e.target, "lg-img-wrap")
                            );
                          }),
                          s.default.on(e.outer, "mouseup.lg", function (i) {
                            (s.default.hasClass(i.target, "lg-outer") ||
                              s.default.hasClass(i.target, "lg-item") ||
                              (s.default.hasClass(i.target, "lg-img-wrap") &&
                                t)) &&
                              (s.default.hasClass(e.outer, "lg-dragging") ||
                                e.destroy());
                          }));
                    }),
                    (t.prototype.destroy = function (e) {
                      var t = this;
                      if (
                        (e || s.default.trigger(t.el, "onBeforeClose"),
                        (document.body.scrollTop = t.prevScrollTop),
                        (document.documentElement.scrollTop = t.prevScrollTop),
                        e)
                      ) {
                        if (!t.s.dynamic)
                          for (var i = 0; i < this.items.length; i++)
                            s.default.off(this.items[i], ".lg"),
                              s.default.off(this.items[i], ".lgcustom");
                        var n = t.el.getAttribute("lg-uid");
                        delete window.lgData[n], t.el.removeAttribute("lg-uid");
                      }
                      for (var r in (s.default.off(this.el, ".lgtm"),
                      window.lgModules))
                        t.modules[r] && t.modules[r].destroy(e);
                      (this.lGalleryOn = !1),
                        clearTimeout(t.hideBartimeout),
                        (this.hideBartimeout = !1),
                        s.default.off(window, ".lg"),
                        s.default.removeClass(document.body, "lg-on"),
                        s.default.removeClass(document.body, "lg-from-hash"),
                        t.outer && s.default.removeClass(t.outer, "lg-visible"),
                        s.default.removeClass(
                          document.querySelector(".lg-backdrop"),
                          "in"
                        ),
                        setTimeout(function () {
                          try {
                            t.outer && t.outer.parentNode.removeChild(t.outer),
                              document.querySelector(".lg-backdrop") &&
                                document
                                  .querySelector(".lg-backdrop")
                                  .parentNode.removeChild(
                                    document.querySelector(".lg-backdrop")
                                  ),
                              e || s.default.trigger(t.el, "onCloseAfter");
                          } catch (e) {}
                        }, t.s.backdropDuration + 50);
                    }),
                    (window.lightGallery = function (e, s) {
                      if (e)
                        try {
                          if (e.getAttribute("lg-uid"))
                            try {
                              window.lgData[e.getAttribute("lg-uid")].init();
                            } catch (e) {
                              console.error(
                                "lightGallery has not initiated properly"
                              );
                            }
                          else {
                            var i = "lg" + window.lgData.uid++;
                            (window.lgData[i] = new t(e, s)),
                              e.setAttribute("lg-uid", i);
                          }
                        } catch (e) {
                          console.error(
                            "lightGallery has not initiated properly"
                          );
                        }
                    });
                });
              },
              { "./lg-utils": 1 },
            ],
          },
          {},
          [2]
        )(2);
      });
    let Us = document.querySelectorAll("[data-gallery]");
    Us &&
      (function () {
        for (let e = 0; e < Us.length; e++) {
          const t = Us[e];
          lightGallery(t, { counter: !1, selector: "a", download: !1 });
        }
      })(),
      ymaps.ready(function () {
        if (document.getElementById("map")) {
          var e = new ymaps.Map("map", {
            controls: [],
            center: [56.09484420632457, 92.9239537993164],
            zoom: 15,
          });
          let t = new ymaps.Placemark(
            [56.09484420632457, 92.9239537993164],
            {},
            {
              hasBalloon: !1,
              hideIconOnBalloonOpen: !1,
              iconLayout: "default#imageWithContent",
              iconImageHref: "img/icons/marker-map.svg",
              iconImageSize: [40, 40],
              iconImageOffset: [-20, -20],
              iconContentOffset: [0, 0],
            }
          );
          e.geoObjects.add(t),
            e.behaviors.disable("scrollZoom"),
            e.behaviors.disable("drag");
        }
      }),
      ymaps.ready(function () {
        if (document.getElementById("map1")) {
          var e = new ymaps.Map("map1", {
            controls: [],
            center: [56.09484420632457, 92.9239537993164],
            zoom: 15,
          });
          let t = new ymaps.Placemark(
            [56.09484420632457, 92.9239537993164],
            {},
            {
              hasBalloon: !1,
              hideIconOnBalloonOpen: !1,
              iconLayout: "default#imageWithContent",
              iconImageHref: "img/icons/marker-map.svg",
              iconImageSize: [40, 40],
              iconImageOffset: [-20, -20],
              iconContentOffset: [0, 0],
            }
          );
          e.geoObjects.add(t),
            e.behaviors.disable("scrollZoom"),
            e.behaviors.disable("drag");
        }
      }),
      (function () {
        const e = document.querySelectorAll(".header-submenu__block");
        e.length &&
          e.forEach((e) => {
            const t = e.querySelectorAll(".header-submenu__category").length;
            e.classList.add(`header-submenu__block_${t}`);
          });
      })(),
      document.addEventListener("click", function (e) {
        const t = e.target;
        if (t.closest("[data-parent]")) {
          const s = t.dataset.parent ? t.dataset.parent : null,
            i = document.querySelector(`[data-submenu="${s}"]`);
          if (i) {
            const e = document.querySelector(".active-link"),
              s = document.querySelector("._submenu-active");
            e &&
              e !== t &&
              (e.classList.remove("active-link"),
              s.classList.remove("_submenu-active")),
              i.classList.toggle("_submenu-active"),
              t.classList.toggle("active-link");
          } else console.log("No this menu");
          e.preventDefault();
        }
        t.closest(".menu__link_catalog") &&
          (document.documentElement.classList.toggle("catalog-open"),
          e.preventDefault());
        t.closest(".catalog-header__menu-back") &&
          (document.documentElement.classList.remove("catalog-open"),
          e.preventDefault());
        if (t.closest(".header-submenu__back")) {
          const t = document.querySelector(".active-link"),
            s = document.querySelector("._submenu-active");
          t.classList.remove("active-link"),
            s.classList.remove("_submenu-active"),
            e.preventDefault();
        }
        let s = document.querySelector(".menu");
        document.documentElement.classList.contains("menu-open") &&
          ((!t.closest(".menu") && !t.closest(".icon-menu")) ||
            t.closest(".actions__button")) &&
          (document.documentElement.classList.remove("lock"),
          (document.querySelector("body").style.paddingRight = "0"),
          document.documentElement.classList.remove("menu-open"),
          (document.querySelector(".header__wrapper").style.paddingRight = "0"),
          s.classList.remove("menu-show"));
        if (
          t.closest(".apartment-tabs__title") &&
          !t.closest(".apartment-tabs__hidden")
        ) {
          const e = t.dataset.tabVal,
            s = t.dataset.block;
          document.querySelectorAll(".apartment-tabs__title").forEach((e) => {
            e.classList.remove("_active");
          }),
            t.classList.toggle("_active"),
            document
              .querySelectorAll(".apartment-tabs__hidden")
              .forEach((e) => {
                e.dataset.tab === s && e.classList.add("show");
              }),
            t.classList.add("show"),
            document.querySelectorAll(".apartment-tabs__body").forEach((t) => {
              t.classList.remove("_active"),
                t.dataset.parent === e && t.classList.add("_active");
            });
        }
      }),
      (window.FLS = !0),
      (function (e) {
        let t = new Image();
        (t.onload = t.onerror =
          function () {
            e(2 == t.height);
          }),
          (t.src =
            "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
      })(function (e) {
        let t = !0 === e ? "webp" : "no-webp";
        document.documentElement.classList.add(t);
      }),
      (function () {
        let e = document.querySelector(".icon-menu"),
          t = document.querySelector(".menu");
        e &&
          e.addEventListener("click", function (e) {
            o &&
              (l(),
              document.documentElement.classList.toggle("menu-open"),
              t.classList.toggle("menu-show")),
              document.documentElement.classList.contains("catalog-open") &&
                document.documentElement.classList.remove("catalog-open"),
              document
                .querySelectorAll(".header-submenu__block")
                .forEach((e) => {
                  e.classList.contains("_submenu-active") &&
                    e.classList.remove("_submenu-active");
                }),
              document
                .querySelectorAll(".submenu-catalog__block ")
                .forEach((e) => {
                  e.classList.contains("_show-submenu") &&
                    e.classList.remove("_show-submenu"),
                    document
                      .querySelector("._active")
                      .classList.remove("_active");
                });
          });
      })(),
      (function () {
        const e = document.querySelectorAll("[data-spollers]");
        if (e.length > 0) {
          const t = Array.from(e).filter(function (e, t, s) {
            return !e.dataset.spollers.split(",")[0];
          });
          t.length && i(t);
          let s = p(e, "spollers");
          function i(e, t = !1) {
            e.forEach((e) => {
              (e = t ? e.item : e),
                t.matches || !t
                  ? (e.classList.add("_spoller-init"),
                    r(e),
                    e.addEventListener("click", o))
                  : (e.classList.remove("_spoller-init"),
                    r(e, !1),
                    e.removeEventListener("click", o));
            });
          }
          function r(e, t = !0) {
            const s = e.querySelectorAll("[data-spoller]");
            s.length > 0 &&
              s.forEach((e) => {
                t
                  ? (e.removeAttribute("tabindex"),
                    e.classList.contains("_spoller-active") ||
                      (e.nextElementSibling.hidden = !0))
                  : (e.setAttribute("tabindex", "-1"),
                    (e.nextElementSibling.hidden = !1));
              });
          }
          function o(e) {
            const t = e.target;
            if (t.closest("[data-spoller]")) {
              const s = t.closest("[data-spoller]"),
                i = s.closest("[data-spollers]"),
                n = !!i.hasAttribute("data-one-spoller");
              i.querySelectorAll("._slide").length ||
                (n && !s.classList.contains("_spoller-active") && l(i),
                s.classList.toggle("_spoller-active"),
                a(s.nextElementSibling, 500)),
                e.preventDefault();
            }
          }
          function l(e) {
            const t = e.querySelector("[data-spoller]._spoller-active");
            t &&
              (t.classList.remove("_spoller-active"),
              n(t.nextElementSibling, 500));
          }
          s &&
            s.length &&
            s.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                i(e.itemsArray, e.matchMedia);
              }),
                i(e.itemsArray, e.matchMedia);
            });
        }
      })(),
      (function () {
        const e = document.querySelectorAll("[data-tabs]");
        let t = [];
        if (e.length > 0) {
          const n = location.hash.replace("#", "");
          n.startsWith("tab-") && (t = n.replace("tab-", "").split("-")),
            e.forEach((e, s) => {
              e.classList.add("_tab-init"),
                e.setAttribute("data-tabs-index", s),
                e.addEventListener("click", i),
                (function (e) {
                  const s = e.querySelectorAll("[data-tabs-titles]>*"),
                    i = e.querySelectorAll("[data-tabs-body]>*"),
                    n = e.dataset.tabsIndex,
                    r = t[0] == n;
                  if (r) {
                    e.querySelector(
                      "[data-tabs-titles]>._tab-active"
                    ).classList.remove("_tab-active");
                  }
                  i.length > 0 &&
                    i.forEach((e, i) => {
                      s[i].setAttribute("data-tabs-title", ""),
                        e.setAttribute("data-tabs-item", ""),
                        r && i == t[1] && s[i].classList.add("_tab-active"),
                        (e.hidden = !s[i].classList.contains("_tab-active"));
                    });
                })(e);
            });
          let r = p(e, "tabs");
          r &&
            r.length &&
            r.forEach((e) => {
              e.matchMedia.addEventListener("change", function () {
                s(e.itemsArray, e.matchMedia);
              }),
                s(e.itemsArray, e.matchMedia);
            });
        }
        function s(e, t) {
          e.forEach((e) => {
            const s = (e = e.item).querySelector("[data-tabs-titles]"),
              i = e.querySelectorAll("[data-tabs-title]"),
              n = e.querySelector("[data-tabs-body]");
            e.querySelectorAll("[data-tabs-item]").forEach((r, a) => {
              t.matches
                ? (n.append(i[a]), n.append(r), e.classList.add("_tab-spoller"))
                : (s.append(i[a]), e.classList.remove("_tab-spoller"));
            });
          });
        }
        function i(e) {
          const t = e.target;
          if (t.closest("[data-tabs-title]")) {
            const s = t.closest("[data-tabs-title]"),
              i = s.closest("[data-tabs]");
            if (
              !s.classList.contains("_tab-active") &&
              !i.querySelectorAll("._slide").length
            ) {
              const e = i.querySelector("[data-tabs-title]._tab-active");
              e && e.classList.remove("_tab-active"),
                s.classList.add("_tab-active"),
                (function (e) {
                  const t = e.querySelectorAll("[data-tabs-title]"),
                    s = e.querySelectorAll("[data-tabs-item]"),
                    i = e.dataset.tabsIndex,
                    a = (function (e) {
                      if (e.hasAttribute("data-tabs-animate"))
                        return e.dataset.tabsAnimate > 0
                          ? e.dataset.tabsAnimate
                          : 500;
                    })(e);
                  s.length > 0 &&
                    s.forEach((e, s) => {
                      t[s].classList.contains("_tab-active")
                        ? (a ? r(e, a) : (e.hidden = !1),
                          e.closest(".popup") ||
                            (location.hash = `tab-${i}-${s}`))
                        : a
                        ? n(e, a)
                        : (e.hidden = !0);
                    });
                })(i);
            }
            e.preventDefault();
          }
        }
      })(),
      new i({}),
      (function () {
        const e = document.querySelectorAll(
          "input[placeholder],textarea[placeholder]"
        );
        e.length &&
          e.forEach((e) => {
            e.dataset.placeholder = e.placeholder;
          }),
          document.body.addEventListener("focusin", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = ""),
              t.classList.add("_form-focus"),
              t.parentElement.classList.add("_form-focus"),
              v.removeError(t));
          }),
          document.body.addEventListener("focusout", function (e) {
            const t = e.target;
            ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
              (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
              t.classList.remove("_form-focus"),
              t.parentElement.classList.remove("_form-focus"),
              t.hasAttribute("data-validate") && v.validateInput(t));
          });
      })(),
      (function (e) {
        const t = document.forms;
        if (t.length)
          for (const e of t)
            e.addEventListener("submit", function (e) {
              s(e.target, e);
            }),
              e.addEventListener("reset", function (e) {
                const t = e.target;
                v.formClean(t);
              });
        async function s(t, s) {
          if (0 === (e ? v.getErrors(t) : 0)) {
            if (t.hasAttribute("data-ajax")) {
              s.preventDefault();
              const e = t.getAttribute("action")
                  ? t.getAttribute("action").trim()
                  : "#",
                n = t.getAttribute("method")
                  ? t.getAttribute("method").trim()
                  : "GET",
                r = new FormData(t);
              t.classList.add("_sending");
              const a = await fetch(e, { method: n, body: r });
              if (a.ok) {
                await a.json();
                t.classList.remove("_sending"), i(t);
              } else alert("Ошибка"), t.classList.remove("_sending");
            } else t.hasAttribute("data-dev") && (s.preventDefault(), i(t));
          } else {
            s.preventDefault();
            const e = t.querySelector("._form-error");
            e && t.hasAttribute("data-goto-error") && h(e, !0, 1e3);
          }
        }
        function i(e) {
          document.dispatchEvent(
            new CustomEvent("formSent", { detail: { form: e } })
          ),
            v.formClean(e),
            u(`[Формы]: ${"Форма отправлена!"}`);
        }
      })(!0),
      (g.selectModule = new m({})),
      (function () {
        function e(e) {
          if ("click" === e.type) {
            const t = e.target;
            if (t.closest("[data-goto]")) {
              const s = t.closest("[data-goto]"),
                i = s.dataset.goto ? s.dataset.goto : "",
                n = !!s.hasAttribute("data-goto-header"),
                r = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
              h(i, n, r), e.preventDefault();
            }
          } else if ("watcherCallback" === e.type && e.detail) {
            const t = e.detail.entry,
              s = t.target;
            if ("navigator" === s.dataset.watch) {
              const e = s.id,
                i =
                  (document.querySelector("[data-goto]._navigator-active"),
                  document.querySelector(`[data-goto="${e}"]`));
              t.isIntersecting
                ? i && i.classList.add("_navigator-active")
                : i && i.classList.remove("_navigator-active");
            }
          }
        }
        document.addEventListener("click", e),
          document.addEventListener("watcherCallback", e);
      })();
  })();
})();
