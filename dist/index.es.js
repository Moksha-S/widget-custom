import { defineComponent as Ze, ref as Ct, onBeforeMount as $e, onMounted as xe, getCurrentInstance as Je, onBeforeUnmount as Qe, toRefs as Ke, watch as zt, h as ti, nextTick as ei, resolveComponent as ii, openBlock as be, createElementBlock as ai, createElementVNode as Zt, createVNode as si, createBlock as ri, defineCustomElement as oi } from "vue";
function ni(j) {
  return j && j.__esModule && Object.prototype.hasOwnProperty.call(j, "default") ? j.default : j;
}
var $t = { exports: {} };
/*!
 * ApexCharts v3.45.2
 * (c) 2018-2024 ApexCharts
 * Released under the MIT License.
 */
(function(j, vt) {
  function ht(y, t) {
    var e = Object.keys(y);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(y);
      t && (i = i.filter(function(a) {
        return Object.getOwnPropertyDescriptor(y, a).enumerable;
      })), e.push.apply(e, i);
    }
    return e;
  }
  function X(y) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t] != null ? arguments[t] : {};
      t % 2 ? ht(Object(e), !0).forEach(function(i) {
        tt(y, i, e[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(y, Object.getOwnPropertyDescriptors(e)) : ht(Object(e)).forEach(function(i) {
        Object.defineProperty(y, i, Object.getOwnPropertyDescriptor(e, i));
      });
    }
    return y;
  }
  function U(y) {
    return U = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, U(y);
  }
  function Y(y, t) {
    if (!(y instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function ct(y, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(y, i.key, i);
    }
  }
  function F(y, t, e) {
    return t && ct(y.prototype, t), e && ct(y, e), y;
  }
  function tt(y, t, e) {
    return t in y ? Object.defineProperty(y, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : y[t] = e, y;
  }
  function ut(y, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function");
    y.prototype = Object.create(t && t.prototype, { constructor: { value: y, writable: !0, configurable: !0 } }), t && Lt(y, t);
  }
  function yt(y) {
    return yt = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, yt(y);
  }
  function Lt(y, t) {
    return Lt = Object.setPrototypeOf || function(e, i) {
      return e.__proto__ = i, e;
    }, Lt(y, t);
  }
  function Et(y) {
    if (y === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return y;
  }
  function pt(y) {
    var t = function() {
      if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
        return !1;
      if (typeof Proxy == "function")
        return !0;
      try {
        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        })), !0;
      } catch {
        return !1;
      }
    }();
    return function() {
      var e, i = yt(y);
      if (t) {
        var a = yt(this).constructor;
        e = Reflect.construct(i, arguments, a);
      } else
        e = i.apply(this, arguments);
      return function(s, r) {
        if (r && (typeof r == "object" || typeof r == "function"))
          return r;
        if (r !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return Et(s);
      }(this, e);
    };
  }
  function Yt(y, t) {
    return function(e) {
      if (Array.isArray(e))
        return e;
    }(y) || function(e, i) {
      var a = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
      if (a != null) {
        var s, r, o = [], n = !0, h = !1;
        try {
          for (a = a.call(e); !(n = (s = a.next()).done) && (o.push(s.value), !i || o.length !== i); n = !0)
            ;
        } catch (c) {
          h = !0, r = c;
        } finally {
          try {
            n || a.return == null || a.return();
          } finally {
            if (h)
              throw r;
          }
        }
        return o;
      }
    }(y, t) || Ft(y, t) || function() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function J(y) {
    return function(t) {
      if (Array.isArray(t))
        return Pt(t);
    }(y) || function(t) {
      if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
        return Array.from(t);
    }(y) || Ft(y) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function Ft(y, t) {
    if (y) {
      if (typeof y == "string")
        return Pt(y, t);
      var e = Object.prototype.toString.call(y).slice(8, -1);
      return e === "Object" && y.constructor && (e = y.constructor.name), e === "Map" || e === "Set" ? Array.from(y) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? Pt(y, t) : void 0;
    }
  }
  function Pt(y, t) {
    (t == null || t > y.length) && (t = y.length);
    for (var e = 0, i = new Array(t); e < t; e++)
      i[e] = y[e];
    return i;
  }
  var P = function() {
    function y() {
      Y(this, y);
    }
    return F(y, [{ key: "shadeRGBColor", value: function(t, e) {
      var i = e.split(","), a = t < 0 ? 0 : 255, s = t < 0 ? -1 * t : t, r = parseInt(i[0].slice(4), 10), o = parseInt(i[1], 10), n = parseInt(i[2], 10);
      return "rgb(" + (Math.round((a - r) * s) + r) + "," + (Math.round((a - o) * s) + o) + "," + (Math.round((a - n) * s) + n) + ")";
    } }, { key: "shadeHexColor", value: function(t, e) {
      var i = parseInt(e.slice(1), 16), a = t < 0 ? 0 : 255, s = t < 0 ? -1 * t : t, r = i >> 16, o = i >> 8 & 255, n = 255 & i;
      return "#" + (16777216 + 65536 * (Math.round((a - r) * s) + r) + 256 * (Math.round((a - o) * s) + o) + (Math.round((a - n) * s) + n)).toString(16).slice(1);
    } }, { key: "shadeColor", value: function(t, e) {
      return y.isColorHex(e) ? this.shadeHexColor(t, e) : this.shadeRGBColor(t, e);
    } }], [{ key: "bind", value: function(t, e) {
      return function() {
        return t.apply(e, arguments);
      };
    } }, { key: "isObject", value: function(t) {
      return t && U(t) === "object" && !Array.isArray(t) && t != null;
    } }, { key: "is", value: function(t, e) {
      return Object.prototype.toString.call(e) === "[object " + t + "]";
    } }, { key: "listToArray", value: function(t) {
      var e, i = [];
      for (e = 0; e < t.length; e++)
        i[e] = t[e];
      return i;
    } }, { key: "extend", value: function(t, e) {
      var i = this;
      typeof Object.assign != "function" && (Object.assign = function(s) {
        if (s == null)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var r = Object(s), o = 1; o < arguments.length; o++) {
          var n = arguments[o];
          if (n != null)
            for (var h in n)
              n.hasOwnProperty(h) && (r[h] = n[h]);
        }
        return r;
      });
      var a = Object.assign({}, t);
      return this.isObject(t) && this.isObject(e) && Object.keys(e).forEach(function(s) {
        i.isObject(e[s]) && s in t ? a[s] = i.extend(t[s], e[s]) : Object.assign(a, tt({}, s, e[s]));
      }), a;
    } }, { key: "extendArray", value: function(t, e) {
      var i = [];
      return t.map(function(a) {
        i.push(y.extend(e, a));
      }), t = i;
    } }, { key: "monthMod", value: function(t) {
      return t % 12;
    } }, { key: "clone", value: function(t) {
      if (y.is("Array", t)) {
        for (var e = [], i = 0; i < t.length; i++)
          e[i] = this.clone(t[i]);
        return e;
      }
      if (y.is("Null", t))
        return null;
      if (y.is("Date", t))
        return t;
      if (U(t) === "object") {
        var a = {};
        for (var s in t)
          t.hasOwnProperty(s) && (a[s] = this.clone(t[s]));
        return a;
      }
      return t;
    } }, { key: "log10", value: function(t) {
      return Math.log(t) / Math.LN10;
    } }, { key: "roundToBase10", value: function(t) {
      return Math.pow(10, Math.floor(Math.log10(t)));
    } }, { key: "roundToBase", value: function(t, e) {
      return Math.pow(e, Math.floor(Math.log(t) / Math.log(e)));
    } }, { key: "parseNumber", value: function(t) {
      return t === null ? t : parseFloat(t);
    } }, { key: "stripNumber", value: function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
      return Number.isInteger(t) ? t : parseFloat(t.toPrecision(e));
    } }, { key: "randomId", value: function() {
      return (Math.random() + 1).toString(36).substring(4);
    } }, { key: "noExponents", value: function(t) {
      var e = String(t).split(/[eE]/);
      if (e.length === 1)
        return e[0];
      var i = "", a = t < 0 ? "-" : "", s = e[0].replace(".", ""), r = Number(e[1]) + 1;
      if (r < 0) {
        for (i = a + "0."; r++; )
          i += "0";
        return i + s.replace(/^-/, "");
      }
      for (r -= s.length; r--; )
        i += "0";
      return s + i;
    } }, { key: "getDimensions", value: function(t) {
      var e = getComputedStyle(t, null), i = t.clientHeight, a = t.clientWidth;
      return i -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom), [a -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight), i];
    } }, { key: "getBoundingClientRect", value: function(t) {
      var e = t.getBoundingClientRect();
      return { top: e.top, right: e.right, bottom: e.bottom, left: e.left, width: t.clientWidth, height: t.clientHeight, x: e.left, y: e.top };
    } }, { key: "getLargestStringFromArr", value: function(t) {
      return t.reduce(function(e, i) {
        return Array.isArray(i) && (i = i.reduce(function(a, s) {
          return a.length > s.length ? a : s;
        })), e.length > i.length ? e : i;
      }, 0);
    } }, { key: "hexToRgba", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "#999999", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.6;
      t.substring(0, 1) !== "#" && (t = "#999999");
      var i = t.replace("#", "");
      i = i.match(new RegExp("(.{" + i.length / 3 + "})", "g"));
      for (var a = 0; a < i.length; a++)
        i[a] = parseInt(i[a].length === 1 ? i[a] + i[a] : i[a], 16);
      return e !== void 0 && i.push(e), "rgba(" + i.join(",") + ")";
    } }, { key: "getOpacityFromRGBA", value: function(t) {
      return parseFloat(t.replace(/^.*,(.+)\)/, "$1"));
    } }, { key: "rgb2hex", value: function(t) {
      return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && t.length === 4 ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : "";
    } }, { key: "isColorHex", value: function(t) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t);
    } }, { key: "getPolygonPos", value: function(t, e) {
      for (var i = [], a = 2 * Math.PI / e, s = 0; s < e; s++) {
        var r = {};
        r.x = t * Math.sin(s * a), r.y = -t * Math.cos(s * a), i.push(r);
      }
      return i;
    } }, { key: "polarToCartesian", value: function(t, e, i, a) {
      var s = (a - 90) * Math.PI / 180;
      return { x: t + i * Math.cos(s), y: e + i * Math.sin(s) };
    } }, { key: "escapeString", value: function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x", i = t.toString().slice();
      return i = i.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi, e);
    } }, { key: "negToZero", value: function(t) {
      return t < 0 ? 0 : t;
    } }, { key: "moveIndexInArray", value: function(t, e, i) {
      if (i >= t.length)
        for (var a = i - t.length + 1; a--; )
          t.push(void 0);
      return t.splice(i, 0, t.splice(e, 1)[0]), t;
    } }, { key: "extractNumber", value: function(t) {
      return parseFloat(t.replace(/[^\d.]*/g, ""));
    } }, { key: "findAncestor", value: function(t, e) {
      for (; (t = t.parentElement) && !t.classList.contains(e); )
        ;
      return t;
    } }, { key: "setELstyles", value: function(t, e) {
      for (var i in e)
        e.hasOwnProperty(i) && (t.style.key = e[i]);
    } }, { key: "isNumber", value: function(t) {
      return !isNaN(t) && parseFloat(Number(t)) === t && !isNaN(parseInt(t, 10));
    } }, { key: "isFloat", value: function(t) {
      return Number(t) === t && t % 1 != 0;
    } }, { key: "isSafari", value: function() {
      return /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    } }, { key: "isFirefox", value: function() {
      return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
    } }, { key: "isIE11", value: function() {
      if (window.navigator.userAgent.indexOf("MSIE") !== -1 || window.navigator.appVersion.indexOf("Trident/") > -1)
        return !0;
    } }, { key: "isIE", value: function() {
      var t = window.navigator.userAgent, e = t.indexOf("MSIE ");
      if (e > 0)
        return parseInt(t.substring(e + 5, t.indexOf(".", e)), 10);
      if (t.indexOf("Trident/") > 0) {
        var i = t.indexOf("rv:");
        return parseInt(t.substring(i + 3, t.indexOf(".", i)), 10);
      }
      var a = t.indexOf("Edge/");
      return a > 0 && parseInt(t.substring(a + 5, t.indexOf(".", a)), 10);
    } }]), y;
  }(), dt = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w, this.setEasingFunctions();
    }
    return F(y, [{ key: "setEasingFunctions", value: function() {
      var t;
      if (!this.w.globals.easing) {
        switch (this.w.config.chart.animations.easing) {
          case "linear":
            t = "-";
            break;
          case "easein":
            t = "<";
            break;
          case "easeout":
            t = ">";
            break;
          case "easeinout":
          default:
            t = "<>";
            break;
          case "swing":
            t = function(e) {
              var i = 1.70158;
              return (e -= 1) * e * ((i + 1) * e + i) + 1;
            };
            break;
          case "bounce":
            t = function(e) {
              return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375 : 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
            };
            break;
          case "elastic":
            t = function(e) {
              return e === !!e ? e : Math.pow(2, -10 * e) * Math.sin((e - 0.075) * (2 * Math.PI) / 0.3) + 1;
            };
        }
        this.w.globals.easing = t;
      }
    } }, { key: "animateLine", value: function(t, e, i, a) {
      t.attr(e).animate(a).attr(i);
    } }, { key: "animateMarker", value: function(t, e, i, a, s, r) {
      e || (e = 0), t.attr({ r: e, width: e, height: e }).animate(a, s).attr({ r: i, width: i.width, height: i.height }).afterAll(function() {
        r();
      });
    } }, { key: "animateCircle", value: function(t, e, i, a, s) {
      t.attr({ r: e.r, cx: e.cx, cy: e.cy }).animate(a, s).attr({ r: i.r, cx: i.cx, cy: i.cy });
    } }, { key: "animateRect", value: function(t, e, i, a, s) {
      t.attr(e).animate(a).attr(i).afterAll(function() {
        return s();
      });
    } }, { key: "animatePathsGradually", value: function(t) {
      var e = t.el, i = t.realIndex, a = t.j, s = t.fill, r = t.pathFrom, o = t.pathTo, n = t.speed, h = t.delay, c = this.w, d = 0;
      c.config.chart.animations.animateGradually.enabled && (d = c.config.chart.animations.animateGradually.delay), c.config.chart.animations.dynamicAnimation.enabled && c.globals.dataChanged && c.config.chart.type !== "bar" && (d = 0), this.morphSVG(e, i, a, c.config.chart.type !== "line" || c.globals.comboCharts ? s : "stroke", r, o, n, h * d);
    } }, { key: "showDelayedElements", value: function() {
      this.w.globals.delayedElements.forEach(function(t) {
        var e = t.el;
        e.classList.remove("apexcharts-element-hidden"), e.classList.add("apexcharts-hidden-element-shown");
      });
    } }, { key: "animationCompleted", value: function(t) {
      var e = this.w;
      e.globals.animationEnded || (e.globals.animationEnded = !0, this.showDelayedElements(), typeof e.config.chart.events.animationEnd == "function" && e.config.chart.events.animationEnd(this.ctx, { el: t, w: e }));
    } }, { key: "morphSVG", value: function(t, e, i, a, s, r, o, n) {
      var h = this, c = this.w;
      s || (s = t.attr("pathFrom")), r || (r = t.attr("pathTo"));
      var d = function(g) {
        return c.config.chart.type === "radar" && (o = 1), "M 0 ".concat(c.globals.gridHeight);
      };
      (!s || s.indexOf("undefined") > -1 || s.indexOf("NaN") > -1) && (s = d()), (!r || r.indexOf("undefined") > -1 || r.indexOf("NaN") > -1) && (r = d()), c.globals.shouldAnimate || (o = 1), t.plot(s).animate(1, c.globals.easing, n).plot(s).animate(o, c.globals.easing, n).plot(r).afterAll(function() {
        P.isNumber(i) ? i === c.globals.series[c.globals.maxValsInArrayIndex].length - 2 && c.globals.shouldAnimate && h.animationCompleted(t) : a !== "none" && c.globals.shouldAnimate && (!c.globals.comboCharts && e === c.globals.series.length - 1 || c.globals.comboCharts) && h.animationCompleted(t), h.showDelayedElements();
      });
    } }]), y;
  }(), Z = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "getDefaultFilter", value: function(t, e) {
      var i = this.w;
      t.unfilter(!0), new window.SVG.Filter().size("120%", "180%", "-5%", "-40%"), i.config.states.normal.filter !== "none" ? this.applyFilter(t, e, i.config.states.normal.filter.type, i.config.states.normal.filter.value) : i.config.chart.dropShadow.enabled && this.dropShadow(t, i.config.chart.dropShadow, e);
    } }, { key: "addNormalFilter", value: function(t, e) {
      var i = this.w;
      i.config.chart.dropShadow.enabled && !t.node.classList.contains("apexcharts-marker") && this.dropShadow(t, i.config.chart.dropShadow, e);
    } }, { key: "addLightenFilter", value: function(t, e, i) {
      var a = this, s = this.w, r = i.intensity;
      t.unfilter(!0), new window.SVG.Filter(), t.filter(function(o) {
        var n = s.config.chart.dropShadow;
        (n.enabled ? a.addShadow(o, e, n) : o).componentTransfer({ rgb: { type: "linear", slope: 1.5, intercept: r } });
      }), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node);
    } }, { key: "addDarkenFilter", value: function(t, e, i) {
      var a = this, s = this.w, r = i.intensity;
      t.unfilter(!0), new window.SVG.Filter(), t.filter(function(o) {
        var n = s.config.chart.dropShadow;
        (n.enabled ? a.addShadow(o, e, n) : o).componentTransfer({ rgb: { type: "linear", slope: r } });
      }), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node);
    } }, { key: "applyFilter", value: function(t, e, i) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.5;
      switch (i) {
        case "none":
          this.addNormalFilter(t, e);
          break;
        case "lighten":
          this.addLightenFilter(t, e, { intensity: a });
          break;
        case "darken":
          this.addDarkenFilter(t, e, { intensity: a });
      }
    } }, { key: "addShadow", value: function(t, e, i) {
      var a = i.blur, s = i.top, r = i.left, o = i.color, n = i.opacity, h = t.flood(Array.isArray(o) ? o[e] : o, n).composite(t.sourceAlpha, "in").offset(r, s).gaussianBlur(a).merge(t.source);
      return t.blend(t.source, h);
    } }, { key: "dropShadow", value: function(t, e) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = e.top, s = e.left, r = e.blur, o = e.color, n = e.opacity, h = e.noUserSpaceOnUse, c = this.w;
      return t.unfilter(!0), P.isIE() && c.config.chart.type === "radialBar" || (o = Array.isArray(o) ? o[i] : o, t.filter(function(d) {
        var g = null;
        g = P.isSafari() || P.isFirefox() || P.isIE() ? d.flood(o, n).composite(d.sourceAlpha, "in").offset(s, a).gaussianBlur(r) : d.flood(o, n).composite(d.sourceAlpha, "in").offset(s, a).gaussianBlur(r).merge(d.source), d.blend(d.source, g);
      }), h || t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)), t;
    } }, { key: "setSelectionFilter", value: function(t, e, i) {
      var a = this.w;
      if (a.globals.selectedDataPoints[e] !== void 0 && a.globals.selectedDataPoints[e].indexOf(i) > -1) {
        t.node.setAttribute("selected", !0);
        var s = a.config.states.active.filter;
        s !== "none" && this.applyFilter(t, e, s.type, s.value);
      }
    } }, { key: "_scaleFilterSize", value: function(t) {
      (function(e) {
        for (var i in e)
          e.hasOwnProperty(i) && t.setAttribute(i, e[i]);
      })({ width: "200%", height: "200%", x: "-50%", y: "-50%" });
    } }]), y;
  }(), z = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "roundPathCorners", value: function(t, e) {
      function i(S, C, L) {
        var M = C.x - S.x, T = C.y - S.y, I = Math.sqrt(M * M + T * T);
        return a(S, C, Math.min(1, L / I));
      }
      function a(S, C, L) {
        return { x: S.x + (C.x - S.x) * L, y: S.y + (C.y - S.y) * L };
      }
      function s(S, C) {
        S.length > 2 && (S[S.length - 2] = C.x, S[S.length - 1] = C.y);
      }
      function r(S) {
        return { x: parseFloat(S[S.length - 2]), y: parseFloat(S[S.length - 1]) };
      }
      t.indexOf("NaN") > -1 && (t = "");
      var o = t.split(/[,\s]/).reduce(function(S, C) {
        var L = C.match("([a-zA-Z])(.+)");
        return L ? (S.push(L[1]), S.push(L[2])) : S.push(C), S;
      }, []).reduce(function(S, C) {
        return parseFloat(C) == C && S.length ? S[S.length - 1].push(C) : S.push([C]), S;
      }, []), n = [];
      if (o.length > 1) {
        var h = r(o[0]), c = null;
        o[o.length - 1][0] == "Z" && o[0].length > 2 && (c = ["L", h.x, h.y], o[o.length - 1] = c), n.push(o[0]);
        for (var d = 1; d < o.length; d++) {
          var g = n[n.length - 1], p = o[d], f = p == c ? o[1] : o[d + 1];
          if (f && g && g.length > 2 && p[0] == "L" && f.length > 2 && f[0] == "L") {
            var b, m, w = r(g), A = r(p), l = r(f);
            b = i(A, w, e), m = i(A, l, e), s(p, b), p.origPoint = A, n.push(p);
            var u = a(b, A, 0.5), x = a(A, m, 0.5), v = ["C", u.x, u.y, x.x, x.y, m.x, m.y];
            v.origPoint = A, n.push(v);
          } else
            n.push(p);
        }
        if (c) {
          var k = r(n[n.length - 1]);
          n.push(["Z"]), s(n[0], k);
        }
      } else
        n = o;
      return n.reduce(function(S, C) {
        return S + C.join(" ") + " ";
      }, "");
    } }, { key: "drawLine", value: function(t, e, i, a) {
      var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "#a8a8a8", r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, n = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "butt";
      return this.w.globals.dom.Paper.line().attr({ x1: t, y1: e, x2: i, y2: a, stroke: s, "stroke-dasharray": r, "stroke-width": o, "stroke-linecap": n });
    } }, { key: "drawRect", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "#fefefe", o = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 1, n = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null, h = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : null, c = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : 0, d = this.w.globals.dom.Paper.rect();
      return d.attr({ x: t, y: e, width: i > 0 ? i : 0, height: a > 0 ? a : 0, rx: s, ry: s, opacity: o, "stroke-width": n !== null ? n : 0, stroke: h !== null ? h : "none", "stroke-dasharray": c }), d.node.setAttribute("fill", r), d;
    } }, { key: "drawPolygon", value: function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "#e1e1e1", i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "none";
      return this.w.globals.dom.Paper.polygon(t).attr({ fill: a, stroke: e, "stroke-width": i });
    } }, { key: "drawCircle", value: function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      t < 0 && (t = 0);
      var i = this.w.globals.dom.Paper.circle(2 * t);
      return e !== null && i.attr(e), i;
    } }, { key: "drawPath", value: function(t) {
      var e = t.d, i = e === void 0 ? "" : e, a = t.stroke, s = a === void 0 ? "#a8a8a8" : a, r = t.strokeWidth, o = r === void 0 ? 1 : r, n = t.fill, h = t.fillOpacity, c = h === void 0 ? 1 : h, d = t.strokeOpacity, g = d === void 0 ? 1 : d, p = t.classes, f = t.strokeLinecap, b = f === void 0 ? null : f, m = t.strokeDashArray, w = m === void 0 ? 0 : m, A = this.w;
      return b === null && (b = A.config.stroke.lineCap), (i.indexOf("undefined") > -1 || i.indexOf("NaN") > -1) && (i = "M 0 ".concat(A.globals.gridHeight)), A.globals.dom.Paper.path(i).attr({ fill: n, "fill-opacity": c, stroke: s, "stroke-opacity": g, "stroke-linecap": b, "stroke-width": o, "stroke-dasharray": w, class: p });
    } }, { key: "group", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, e = this.w.globals.dom.Paper.group();
      return t !== null && e.attr(t), e;
    } }, { key: "move", value: function(t, e) {
      var i = ["M", t, e].join(" ");
      return i;
    } }, { key: "line", value: function(t, e) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a = null;
      return i === null ? a = [" L", t, e].join(" ") : i === "H" ? a = [" H", t].join(" ") : i === "V" && (a = [" V", e].join(" ")), a;
    } }, { key: "curve", value: function(t, e, i, a, s, r) {
      var o = ["C", t, e, i, a, s, r].join(" ");
      return o;
    } }, { key: "quadraticCurve", value: function(t, e, i, a) {
      return ["Q", t, e, i, a].join(" ");
    } }, { key: "arc", value: function(t, e, i, a, s, r, o) {
      var n = "A";
      arguments.length > 7 && arguments[7] !== void 0 && arguments[7] && (n = "a");
      var h = [n, t, e, i, a, s, r, o].join(" ");
      return h;
    } }, { key: "renderPaths", value: function(t) {
      var e, i = t.j, a = t.realIndex, s = t.pathFrom, r = t.pathTo, o = t.stroke, n = t.strokeWidth, h = t.strokeLinecap, c = t.fill, d = t.animationDelay, g = t.initialSpeed, p = t.dataChangeSpeed, f = t.className, b = t.shouldClipToGrid, m = b === void 0 || b, w = t.bindEventsOnPaths, A = w === void 0 || w, l = t.drawShadow, u = l === void 0 || l, x = this.w, v = new Z(this.ctx), k = new dt(this.ctx), S = this.w.config.chart.animations.enabled, C = S && this.w.config.chart.animations.dynamicAnimation.enabled, L = !!(S && !x.globals.resized || C && x.globals.dataChanged && x.globals.shouldAnimate);
      L ? e = s : (e = r, x.globals.animationEnded = !0);
      var M = x.config.stroke.dashArray, T = 0;
      T = Array.isArray(M) ? M[a] : x.config.stroke.dashArray;
      var I = this.drawPath({ d: e, stroke: o, strokeWidth: n, fill: c, fillOpacity: 1, classes: f, strokeLinecap: h, strokeDashArray: T });
      if (I.attr("index", a), m && I.attr({ "clip-path": "url(#gridRectMask".concat(x.globals.cuid, ")") }), x.config.states.normal.filter.type !== "none")
        v.getDefaultFilter(I, a);
      else if (x.config.chart.dropShadow.enabled && u && (!x.config.chart.dropShadow.enabledOnSeries || x.config.chart.dropShadow.enabledOnSeries && x.config.chart.dropShadow.enabledOnSeries.indexOf(a) !== -1)) {
        var E = x.config.chart.dropShadow;
        v.dropShadow(I, E, a);
      }
      A && (I.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, I)), I.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, I)), I.node.addEventListener("mousedown", this.pathMouseDown.bind(this, I))), I.attr({ pathTo: r, pathFrom: s });
      var R = { el: I, j: i, realIndex: a, pathFrom: s, pathTo: r, fill: c, strokeWidth: n, delay: d };
      return !S || x.globals.resized || x.globals.dataChanged ? !x.globals.resized && x.globals.dataChanged || k.showDelayedElements() : k.animatePathsGradually(X(X({}, R), {}, { speed: g })), x.globals.dataChanged && C && L && k.animatePathsGradually(X(X({}, R), {}, { speed: p })), I;
    } }, { key: "drawPattern", value: function(t, e, i) {
      var a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "#a8a8a8", s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
      return this.w.globals.dom.Paper.pattern(e, i, function(r) {
        t === "horizontalLines" ? r.line(0, 0, i, 0).stroke({ color: a, width: s + 1 }) : t === "verticalLines" ? r.line(0, 0, 0, e).stroke({ color: a, width: s + 1 }) : t === "slantedLines" ? r.line(0, 0, e, i).stroke({ color: a, width: s }) : t === "squares" ? r.rect(e, i).fill("none").stroke({ color: a, width: s }) : t === "circles" && r.circle(e).fill("none").stroke({ color: a, width: s });
      });
    } }, { key: "drawGradient", value: function(t, e, i, a, s) {
      var r, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, n = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, h = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null, c = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : 0, d = this.w;
      e.length < 9 && e.indexOf("#") === 0 && (e = P.hexToRgba(e, a)), i.length < 9 && i.indexOf("#") === 0 && (i = P.hexToRgba(i, s));
      var g = 0, p = 1, f = 1, b = null;
      n !== null && (g = n[0] !== void 0 ? n[0] / 100 : 0, p = n[1] !== void 0 ? n[1] / 100 : 1, f = n[2] !== void 0 ? n[2] / 100 : 1, b = n[3] !== void 0 ? n[3] / 100 : null);
      var m = !(d.config.chart.type !== "donut" && d.config.chart.type !== "pie" && d.config.chart.type !== "polarArea" && d.config.chart.type !== "bubble");
      if (r = h === null || h.length === 0 ? d.globals.dom.Paper.gradient(m ? "radial" : "linear", function(l) {
        l.at(g, e, a), l.at(p, i, s), l.at(f, i, s), b !== null && l.at(b, e, a);
      }) : d.globals.dom.Paper.gradient(m ? "radial" : "linear", function(l) {
        (Array.isArray(h[c]) ? h[c] : h).forEach(function(u) {
          l.at(u.offset / 100, u.color, u.opacity);
        });
      }), m) {
        var w = d.globals.gridWidth / 2, A = d.globals.gridHeight / 2;
        d.config.chart.type !== "bubble" ? r.attr({ gradientUnits: "userSpaceOnUse", cx: w, cy: A, r: o }) : r.attr({ cx: 0.5, cy: 0.5, r: 0.8, fx: 0.2, fy: 0.2 });
      } else
        t === "vertical" ? r.from(0, 0).to(0, 1) : t === "diagonal" ? r.from(0, 0).to(1, 1) : t === "horizontal" ? r.from(0, 1).to(1, 1) : t === "diagonal2" && r.from(1, 0).to(0, 1);
      return r;
    } }, { key: "getTextBasedOnMaxWidth", value: function(t) {
      var e = t.text, i = t.maxWidth, a = t.fontSize, s = t.fontFamily, r = this.getTextRects(e, a, s), o = r.width / e.length, n = Math.floor(i / o);
      return i < r.width ? e.slice(0, n - 3) + "..." : e;
    } }, { key: "drawText", value: function(t) {
      var e = this, i = t.x, a = t.y, s = t.text, r = t.textAnchor, o = t.fontSize, n = t.fontFamily, h = t.fontWeight, c = t.foreColor, d = t.opacity, g = t.maxWidth, p = t.cssClass, f = p === void 0 ? "" : p, b = t.isPlainText, m = b === void 0 || b, w = t.dominantBaseline, A = w === void 0 ? "auto" : w, l = this.w;
      s === void 0 && (s = "");
      var u = s;
      r || (r = "start"), c && c.length || (c = l.config.chart.foreColor), n = n || l.config.chart.fontFamily, h = h || "regular";
      var x, v = { maxWidth: g, fontSize: o = o || "11px", fontFamily: n };
      return Array.isArray(s) ? x = l.globals.dom.Paper.text(function(k) {
        for (var S = 0; S < s.length; S++)
          u = s[S], g && (u = e.getTextBasedOnMaxWidth(X({ text: s[S] }, v))), S === 0 ? k.tspan(u) : k.tspan(u).newLine();
      }) : (g && (u = this.getTextBasedOnMaxWidth(X({ text: s }, v))), x = m ? l.globals.dom.Paper.plain(s) : l.globals.dom.Paper.text(function(k) {
        return k.tspan(u);
      })), x.attr({ x: i, y: a, "text-anchor": r, "dominant-baseline": A, "font-size": o, "font-family": n, "font-weight": h, fill: c, class: "apexcharts-text " + f }), x.node.style.fontFamily = n, x.node.style.opacity = d, x;
    } }, { key: "drawMarker", value: function(t, e, i) {
      t = t || 0;
      var a = i.pSize || 0, s = null;
      if (i.shape === "square" || i.shape === "rect") {
        var r = i.pRadius === void 0 ? a / 2 : i.pRadius;
        e !== null && a || (a = 0, r = 0);
        var o = 1.2 * a + r, n = this.drawRect(o, o, o, o, r);
        n.attr({ x: t - o / 2, y: e - o / 2, cx: t, cy: e, class: i.class ? i.class : "", fill: i.pointFillColor, "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1, stroke: i.pointStrokeColor, "stroke-width": i.pointStrokeWidth ? i.pointStrokeWidth : 0, "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1 }), s = n;
      } else
        i.shape !== "circle" && i.shape || (P.isNumber(e) || (a = 0, e = 0), s = this.drawCircle(a, { cx: t, cy: e, class: i.class ? i.class : "", stroke: i.pointStrokeColor, fill: i.pointFillColor, "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1, "stroke-width": i.pointStrokeWidth ? i.pointStrokeWidth : 0, "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1 }));
      return s;
    } }, { key: "pathMouseEnter", value: function(t, e) {
      var i = this.w, a = new Z(this.ctx), s = parseInt(t.node.getAttribute("index"), 10), r = parseInt(t.node.getAttribute("j"), 10);
      if (typeof i.config.chart.events.dataPointMouseEnter == "function" && i.config.chart.events.dataPointMouseEnter(e, this.ctx, { seriesIndex: s, dataPointIndex: r, w: i }), this.ctx.events.fireEvent("dataPointMouseEnter", [e, this.ctx, { seriesIndex: s, dataPointIndex: r, w: i }]), (i.config.states.active.filter.type === "none" || t.node.getAttribute("selected") !== "true") && i.config.states.hover.filter.type !== "none" && !i.globals.isTouchDevice) {
        var o = i.config.states.hover.filter;
        a.applyFilter(t, s, o.type, o.value);
      }
    } }, { key: "pathMouseLeave", value: function(t, e) {
      var i = this.w, a = new Z(this.ctx), s = parseInt(t.node.getAttribute("index"), 10), r = parseInt(t.node.getAttribute("j"), 10);
      typeof i.config.chart.events.dataPointMouseLeave == "function" && i.config.chart.events.dataPointMouseLeave(e, this.ctx, { seriesIndex: s, dataPointIndex: r, w: i }), this.ctx.events.fireEvent("dataPointMouseLeave", [e, this.ctx, { seriesIndex: s, dataPointIndex: r, w: i }]), i.config.states.active.filter.type !== "none" && t.node.getAttribute("selected") === "true" || i.config.states.hover.filter.type !== "none" && a.getDefaultFilter(t, s);
    } }, { key: "pathMouseDown", value: function(t, e) {
      var i = this.w, a = new Z(this.ctx), s = parseInt(t.node.getAttribute("index"), 10), r = parseInt(t.node.getAttribute("j"), 10), o = "false";
      if (t.node.getAttribute("selected") === "true") {
        if (t.node.setAttribute("selected", "false"), i.globals.selectedDataPoints[s].indexOf(r) > -1) {
          var n = i.globals.selectedDataPoints[s].indexOf(r);
          i.globals.selectedDataPoints[s].splice(n, 1);
        }
      } else {
        if (!i.config.states.active.allowMultipleDataPointsSelection && i.globals.selectedDataPoints.length > 0) {
          i.globals.selectedDataPoints = [];
          var h = i.globals.dom.Paper.select(".apexcharts-series path").members, c = i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members, d = function(f) {
            Array.prototype.forEach.call(f, function(b) {
              b.node.setAttribute("selected", "false"), a.getDefaultFilter(b, s);
            });
          };
          d(h), d(c);
        }
        t.node.setAttribute("selected", "true"), o = "true", i.globals.selectedDataPoints[s] === void 0 && (i.globals.selectedDataPoints[s] = []), i.globals.selectedDataPoints[s].push(r);
      }
      if (o === "true") {
        var g = i.config.states.active.filter;
        if (g !== "none")
          a.applyFilter(t, s, g.type, g.value);
        else if (i.config.states.hover.filter !== "none" && !i.globals.isTouchDevice) {
          var p = i.config.states.hover.filter;
          a.applyFilter(t, s, p.type, p.value);
        }
      } else
        i.config.states.active.filter.type !== "none" && (i.config.states.hover.filter.type === "none" || i.globals.isTouchDevice ? a.getDefaultFilter(t, s) : (p = i.config.states.hover.filter, a.applyFilter(t, s, p.type, p.value)));
      typeof i.config.chart.events.dataPointSelection == "function" && i.config.chart.events.dataPointSelection(e, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: s, dataPointIndex: r, w: i }), e && this.ctx.events.fireEvent("dataPointSelection", [e, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: s, dataPointIndex: r, w: i }]);
    } }, { key: "rotateAroundCenter", value: function(t) {
      var e = {};
      return t && typeof t.getBBox == "function" && (e = t.getBBox()), { x: e.x + e.width / 2, y: e.y + e.height / 2 };
    } }, { key: "getTextRects", value: function(t, e, i, a) {
      var s = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], r = this.w, o = this.drawText({ x: -200, y: -200, text: t, textAnchor: "start", fontSize: e, fontFamily: i, foreColor: "#fff", opacity: 0 });
      a && o.attr("transform", a), r.globals.dom.Paper.add(o);
      var n = o.bbox();
      return s || (n = o.node.getBoundingClientRect()), o.remove(), { width: n.width, height: n.height };
    } }, { key: "placeTextWithEllipsis", value: function(t, e, i) {
      if (typeof t.getComputedTextLength == "function" && (t.textContent = e, e.length > 0 && t.getComputedTextLength() >= i / 1.1)) {
        for (var a = e.length - 3; a > 0; a -= 3)
          if (t.getSubStringLength(0, a) <= i / 1.1)
            return void (t.textContent = e.substring(0, a) + "...");
        t.textContent = ".";
      }
    } }], [{ key: "setAttrs", value: function(t, e) {
      for (var i in e)
        e.hasOwnProperty(i) && t.setAttribute(i, e[i]);
    } }]), y;
  }(), q = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "getStackedSeriesTotals", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = this.w, i = [];
      if (e.globals.series.length === 0)
        return i;
      for (var a = 0; a < e.globals.series[e.globals.maxValsInArrayIndex].length; a++) {
        for (var s = 0, r = 0; r < e.globals.series.length; r++)
          e.globals.series[r][a] !== void 0 && t.indexOf(r) === -1 && (s += e.globals.series[r][a]);
        i.push(s);
      }
      return i;
    } }, { key: "getSeriesTotalByIndex", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      return t === null ? this.w.config.series.reduce(function(e, i) {
        return e + i;
      }, 0) : this.w.globals.series[t].reduce(function(e, i) {
        return e + i;
      }, 0);
    } }, { key: "getStackedSeriesTotalsByGroups", value: function() {
      var t = this, e = this.w, i = [];
      return e.globals.seriesGroups.forEach(function(a) {
        var s = [];
        e.config.series.forEach(function(o, n) {
          a.indexOf(o.name) > -1 && s.push(n);
        });
        var r = e.globals.series.map(function(o, n) {
          return s.indexOf(n) === -1 ? n : -1;
        }).filter(function(o) {
          return o !== -1;
        });
        i.push(t.getStackedSeriesTotals(r));
      }), i;
    } }, { key: "isSeriesNull", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      return (t === null ? this.w.config.series.filter(function(e) {
        return e !== null;
      }) : this.w.config.series[t].data.filter(function(e) {
        return e !== null;
      })).length === 0;
    } }, { key: "seriesHaveSameValues", value: function(t) {
      return this.w.globals.series[t].every(function(e, i, a) {
        return e === a[0];
      });
    } }, { key: "getCategoryLabels", value: function(t) {
      var e = this.w, i = t.slice();
      return e.config.xaxis.convertedCatToNumeric && (i = t.map(function(a, s) {
        return e.config.xaxis.labels.formatter(a - e.globals.minX + 1);
      })), i;
    } }, { key: "getLargestSeries", value: function() {
      var t = this.w;
      t.globals.maxValsInArrayIndex = t.globals.series.map(function(e) {
        return e.length;
      }).indexOf(Math.max.apply(Math, t.globals.series.map(function(e) {
        return e.length;
      })));
    } }, { key: "getLargestMarkerSize", value: function() {
      var t = this.w, e = 0;
      return t.globals.markers.size.forEach(function(i) {
        e = Math.max(e, i);
      }), t.config.markers.discrete && t.config.markers.discrete.length && t.config.markers.discrete.forEach(function(i) {
        e = Math.max(e, i.size);
      }), e > 0 && (e += t.config.markers.hover.sizeOffset + 1), t.globals.markers.largestSize = e, e;
    } }, { key: "getSeriesTotals", value: function() {
      var t = this.w;
      t.globals.seriesTotals = t.globals.series.map(function(e, i) {
        var a = 0;
        if (Array.isArray(e))
          for (var s = 0; s < e.length; s++)
            a += e[s];
        else
          a += e;
        return a;
      });
    } }, { key: "getSeriesTotalsXRange", value: function(t, e) {
      var i = this.w;
      return i.globals.series.map(function(a, s) {
        for (var r = 0, o = 0; o < a.length; o++)
          i.globals.seriesX[s][o] > t && i.globals.seriesX[s][o] < e && (r += a[o]);
        return r;
      });
    } }, { key: "getPercentSeries", value: function() {
      var t = this.w;
      t.globals.seriesPercent = t.globals.series.map(function(e, i) {
        var a = [];
        if (Array.isArray(e))
          for (var s = 0; s < e.length; s++) {
            var r = t.globals.stackedSeriesTotals[s], o = 0;
            r && (o = 100 * e[s] / r), a.push(o);
          }
        else {
          var n = 100 * e / t.globals.seriesTotals.reduce(function(h, c) {
            return h + c;
          }, 0);
          a.push(n);
        }
        return a;
      });
    } }, { key: "getCalculatedRatios", value: function() {
      var t, e, i, a = this.w.globals, s = [], r = 0, o = [], n = 0.1, h = 0;
      if (a.yRange = [], a.isMultipleYAxis)
        for (var c = 0; c < a.minYArr.length; c++)
          a.yRange.push(Math.abs(a.minYArr[c] - a.maxYArr[c])), o.push(0);
      else
        a.yRange.push(Math.abs(a.minY - a.maxY));
      a.xRange = Math.abs(a.maxX - a.minX), a.zRange = Math.abs(a.maxZ - a.minZ);
      for (var d = 0; d < a.yRange.length; d++)
        s.push(a.yRange[d] / a.gridHeight);
      if (e = a.xRange / a.gridWidth, t = a.yRange / a.gridWidth, i = a.xRange / a.gridHeight, (r = a.zRange / a.gridHeight * 16) || (r = 1), a.minY !== Number.MIN_VALUE && Math.abs(a.minY) !== 0 && (a.hasNegs = !0), a.isMultipleYAxis) {
        o = [];
        for (var g = 0; g < s.length; g++)
          o.push(-a.minYArr[g] / s[g]);
      } else
        o.push(-a.minY / s[0]), a.minY !== Number.MIN_VALUE && Math.abs(a.minY) !== 0 && (n = -a.minY / t, h = a.minX / e);
      return { yRatio: s, invertedYRatio: t, zRatio: r, xRatio: e, invertedXRatio: i, baseLineInvertedY: n, baseLineY: o, baseLineX: h };
    } }, { key: "getLogSeries", value: function(t) {
      var e = this, i = this.w;
      return i.globals.seriesLog = t.map(function(a, s) {
        return i.config.yaxis[s] && i.config.yaxis[s].logarithmic ? a.map(function(r) {
          return r === null ? null : e.getLogVal(i.config.yaxis[s].logBase, r, s);
        }) : a;
      }), i.globals.invalidLogScale ? t : i.globals.seriesLog;
    } }, { key: "getBaseLog", value: function(t, e) {
      return Math.log(e) / Math.log(t);
    } }, { key: "getLogVal", value: function(t, e, i) {
      if (e === 0)
        return 0;
      var a = this.w, s = a.globals.minYArr[i] === 0 ? -1 : this.getBaseLog(t, a.globals.minYArr[i]), r = (a.globals.maxYArr[i] === 0 ? 0 : this.getBaseLog(t, a.globals.maxYArr[i])) - s;
      return e < 1 ? e / r : (this.getBaseLog(t, e) - s) / r;
    } }, { key: "getLogYRatios", value: function(t) {
      var e = this, i = this.w, a = this.w.globals;
      return a.yLogRatio = t.slice(), a.logYRange = a.yRange.map(function(s, r) {
        if (i.config.yaxis[r] && e.w.config.yaxis[r].logarithmic) {
          var o, n = -Number.MAX_VALUE, h = Number.MIN_VALUE;
          return a.seriesLog.forEach(function(c, d) {
            c.forEach(function(g) {
              i.config.yaxis[d] && i.config.yaxis[d].logarithmic && (n = Math.max(g, n), h = Math.min(g, h));
            });
          }), o = Math.pow(a.yRange[r], Math.abs(h - n) / a.yRange[r]), a.yLogRatio[r] = o / a.gridHeight, o;
        }
      }), a.invalidLogScale ? t.slice() : a.yLogRatio;
    } }], [{ key: "checkComboSeries", value: function(t) {
      var e = !1, i = 0, a = 0;
      return t.length && t[0].type !== void 0 && t.forEach(function(s) {
        s.type !== "bar" && s.type !== "column" && s.type !== "candlestick" && s.type !== "boxPlot" || i++, s.type !== void 0 && a++;
      }), a > 0 && (e = !0), { comboBarCount: i, comboCharts: e };
    } }, { key: "extendArrayProps", value: function(t, e, i) {
      return e.yaxis && (e = t.extendYAxis(e, i)), e.annotations && (e.annotations.yaxis && (e = t.extendYAxisAnnotations(e)), e.annotations.xaxis && (e = t.extendXAxisAnnotations(e)), e.annotations.points && (e = t.extendPointAnnotations(e))), e;
    } }]), y;
  }(), wt = function() {
    function y(t) {
      Y(this, y), this.w = t.w, this.annoCtx = t;
    }
    return F(y, [{ key: "setOrientations", value: function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, i = this.w;
      if (t.label.orientation === "vertical") {
        var a = e !== null ? e : 0, s = i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(a, "']"));
        if (s !== null) {
          var r = s.getBoundingClientRect();
          s.setAttribute("x", parseFloat(s.getAttribute("x")) - r.height + 4), t.label.position === "top" ? s.setAttribute("y", parseFloat(s.getAttribute("y")) + r.width) : s.setAttribute("y", parseFloat(s.getAttribute("y")) - r.width);
          var o = this.annoCtx.graphics.rotateAroundCenter(s), n = o.x, h = o.y;
          s.setAttribute("transform", "rotate(-90 ".concat(n, " ").concat(h, ")"));
        }
      }
    } }, { key: "addBackgroundToAnno", value: function(t, e) {
      var i = this.w;
      if (!t || e.label.text === void 0 || e.label.text !== void 0 && !String(e.label.text).trim())
        return null;
      var a = i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(), s = t.getBoundingClientRect(), r = e.label.style.padding.left, o = e.label.style.padding.right, n = e.label.style.padding.top, h = e.label.style.padding.bottom;
      e.label.orientation === "vertical" && (n = e.label.style.padding.left, h = e.label.style.padding.right, r = e.label.style.padding.top, o = e.label.style.padding.bottom);
      var c = s.left - a.left - r, d = s.top - a.top - n, g = this.annoCtx.graphics.drawRect(c - i.globals.barPadForNumericAxis, d, s.width + r + o, s.height + n + h, e.label.borderRadius, e.label.style.background, 1, e.label.borderWidth, e.label.borderColor, 0);
      return e.id && g.node.classList.add(e.id), g;
    } }, { key: "annotationsBackground", value: function() {
      var t = this, e = this.w, i = function(a, s, r) {
        var o = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(r, "-annotations .apexcharts-").concat(r, "-annotation-label[rel='").concat(s, "']"));
        if (o) {
          var n = o.parentNode, h = t.addBackgroundToAnno(o, a);
          h && (n.insertBefore(h.node, o), a.label.mouseEnter && h.node.addEventListener("mouseenter", a.label.mouseEnter.bind(t, a)), a.label.mouseLeave && h.node.addEventListener("mouseleave", a.label.mouseLeave.bind(t, a)), a.label.click && h.node.addEventListener("click", a.label.click.bind(t, a)));
        }
      };
      e.config.annotations.xaxis.map(function(a, s) {
        i(a, s, "xaxis");
      }), e.config.annotations.yaxis.map(function(a, s) {
        i(a, s, "yaxis");
      }), e.config.annotations.points.map(function(a, s) {
        i(a, s, "point");
      });
    } }, { key: "getY1Y2", value: function(t, e) {
      var i, a = t === "y1" ? e.y : e.y2, s = this.w;
      if (this.annoCtx.invertAxis) {
        var r = s.globals.labels.indexOf(a);
        s.config.xaxis.convertedCatToNumeric && (r = s.globals.categoryLabels.indexOf(a));
        var o = s.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (r + 1) + ")");
        o && (i = parseFloat(o.getAttribute("y"))), e.seriesIndex !== void 0 && s.globals.barHeight && (i = i - s.globals.barHeight / 2 * (s.globals.series.length - 1) + s.globals.barHeight * e.seriesIndex);
      } else {
        var n;
        s.config.yaxis[e.yAxisIndex].logarithmic ? n = (a = new q(this.annoCtx.ctx).getLogVal(a, e.yAxisIndex)) / s.globals.yLogRatio[e.yAxisIndex] : n = (a - s.globals.minYArr[e.yAxisIndex]) / (s.globals.yRange[e.yAxisIndex] / s.globals.gridHeight), i = s.globals.gridHeight - n, !e.marker || e.y !== void 0 && e.y !== null || (i = 0), s.config.yaxis[e.yAxisIndex] && s.config.yaxis[e.yAxisIndex].reversed && (i = n);
      }
      return typeof a == "string" && a.indexOf("px") > -1 && (i = parseFloat(a)), i;
    } }, { key: "getX1X2", value: function(t, e) {
      var i = this.w, a = this.annoCtx.invertAxis ? i.globals.minY : i.globals.minX, s = this.annoCtx.invertAxis ? i.globals.maxY : i.globals.maxX, r = this.annoCtx.invertAxis ? i.globals.yRange[0] : i.globals.xRange, o = (e.x - a) / (r / i.globals.gridWidth);
      this.annoCtx.inversedReversedAxis && (o = (s - e.x) / (r / i.globals.gridWidth)), i.config.xaxis.type !== "category" && !i.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i.globals.dataFormatXNumeric || (o = this.getStringX(e.x));
      var n = (e.x2 - a) / (r / i.globals.gridWidth);
      return this.annoCtx.inversedReversedAxis && (n = (s - e.x2) / (r / i.globals.gridWidth)), i.config.xaxis.type !== "category" && !i.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i.globals.dataFormatXNumeric || (n = this.getStringX(e.x2)), e.x !== void 0 && e.x !== null || !e.marker || (o = i.globals.gridWidth), t === "x1" && typeof e.x == "string" && e.x.indexOf("px") > -1 && (o = parseFloat(e.x)), t === "x2" && typeof e.x2 == "string" && e.x2.indexOf("px") > -1 && (n = parseFloat(e.x2)), e.seriesIndex !== void 0 && i.globals.barWidth && !this.annoCtx.invertAxis && (o = o - i.globals.barWidth / 2 * (i.globals.series.length - 1) + i.globals.barWidth * e.seriesIndex), t === "x1" ? o : n;
    } }, { key: "getStringX", value: function(t) {
      var e = this.w, i = t;
      e.config.xaxis.convertedCatToNumeric && e.globals.categoryLabels.length && (t = e.globals.categoryLabels.indexOf(t) + 1);
      var a = e.globals.labels.indexOf(t), s = e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (a + 1) + ")");
      return s && (i = parseFloat(s.getAttribute("x"))), i;
    } }]), y;
  }(), Dt = function() {
    function y(t) {
      Y(this, y), this.w = t.w, this.annoCtx = t, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new wt(this.annoCtx);
    }
    return F(y, [{ key: "addXaxisAnnotation", value: function(t, e, i) {
      var a, s = this.w, r = this.helpers.getX1X2("x1", t), o = t.label.text, n = t.strokeDashArray;
      if (P.isNumber(r)) {
        if (t.x2 === null || t.x2 === void 0) {
          var h = this.annoCtx.graphics.drawLine(r + t.offsetX, 0 + t.offsetY, r + t.offsetX, s.globals.gridHeight + t.offsetY, t.borderColor, n, t.borderWidth);
          e.appendChild(h.node), t.id && h.node.classList.add(t.id);
        } else {
          if ((a = this.helpers.getX1X2("x2", t)) < r) {
            var c = r;
            r = a, a = c;
          }
          var d = this.annoCtx.graphics.drawRect(r + t.offsetX, 0 + t.offsetY, a - r, s.globals.gridHeight + t.offsetY, 0, t.fillColor, t.opacity, 1, t.borderColor, n);
          d.node.classList.add("apexcharts-annotation-rect"), d.attr("clip-path", "url(#gridRectMask".concat(s.globals.cuid, ")")), e.appendChild(d.node), t.id && d.node.classList.add(t.id);
        }
        var g = this.annoCtx.graphics.getTextRects(o, parseFloat(t.label.style.fontSize)), p = t.label.position === "top" ? 4 : t.label.position === "center" ? s.globals.gridHeight / 2 + (t.label.orientation === "vertical" ? g.width / 2 : 0) : s.globals.gridHeight, f = this.annoCtx.graphics.drawText({ x: r + t.label.offsetX, y: p + t.label.offsetY - (t.label.orientation === "vertical" ? t.label.position === "top" ? g.width / 2 - 12 : -g.width / 2 : 0), text: o, textAnchor: t.label.textAnchor, fontSize: t.label.style.fontSize, fontFamily: t.label.style.fontFamily, fontWeight: t.label.style.fontWeight, foreColor: t.label.style.color, cssClass: "apexcharts-xaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "") });
        f.attr({ rel: i }), e.appendChild(f.node), this.annoCtx.helpers.setOrientations(t, i);
      }
    } }, { key: "drawXAxisAnnotations", value: function() {
      var t = this, e = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-xaxis-annotations" });
      return e.config.annotations.xaxis.map(function(a, s) {
        t.addXaxisAnnotation(a, i.node, s);
      }), i;
    } }]), y;
  }(), Nt = function() {
    function y(t) {
      Y(this, y), this.w = t.w, this.annoCtx = t, this.helpers = new wt(this.annoCtx);
    }
    return F(y, [{ key: "addYaxisAnnotation", value: function(t, e, i) {
      var a, s = this.w, r = t.strokeDashArray, o = this.helpers.getY1Y2("y1", t), n = t.label.text;
      if (t.y2 === null || t.y2 === void 0) {
        var h = this.annoCtx.graphics.drawLine(0 + t.offsetX, o + t.offsetY, this._getYAxisAnnotationWidth(t), o + t.offsetY, t.borderColor, r, t.borderWidth);
        e.appendChild(h.node), t.id && h.node.classList.add(t.id);
      } else {
        if ((a = this.helpers.getY1Y2("y2", t)) > o) {
          var c = o;
          o = a, a = c;
        }
        var d = this.annoCtx.graphics.drawRect(0 + t.offsetX, a + t.offsetY, this._getYAxisAnnotationWidth(t), o - a, 0, t.fillColor, t.opacity, 1, t.borderColor, r);
        d.node.classList.add("apexcharts-annotation-rect"), d.attr("clip-path", "url(#gridRectMask".concat(s.globals.cuid, ")")), e.appendChild(d.node), t.id && d.node.classList.add(t.id);
      }
      var g = t.label.position === "right" ? s.globals.gridWidth : t.label.position === "center" ? s.globals.gridWidth / 2 : 0, p = this.annoCtx.graphics.drawText({ x: g + t.label.offsetX, y: (a ?? o) + t.label.offsetY - 3, text: n, textAnchor: t.label.textAnchor, fontSize: t.label.style.fontSize, fontFamily: t.label.style.fontFamily, fontWeight: t.label.style.fontWeight, foreColor: t.label.style.color, cssClass: "apexcharts-yaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "") });
      p.attr({ rel: i }), e.appendChild(p.node);
    } }, { key: "_getYAxisAnnotationWidth", value: function(t) {
      var e = this.w;
      return e.globals.gridWidth, (t.width.indexOf("%") > -1 ? e.globals.gridWidth * parseInt(t.width, 10) / 100 : parseInt(t.width, 10)) + t.offsetX;
    } }, { key: "drawYAxisAnnotations", value: function() {
      var t = this, e = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-yaxis-annotations" });
      return e.config.annotations.yaxis.map(function(a, s) {
        t.addYaxisAnnotation(a, i.node, s);
      }), i;
    } }]), y;
  }(), ft = function() {
    function y(t) {
      Y(this, y), this.w = t.w, this.annoCtx = t, this.helpers = new wt(this.annoCtx);
    }
    return F(y, [{ key: "addPointAnnotation", value: function(t, e, i) {
      this.w;
      var a = this.helpers.getX1X2("x1", t), s = this.helpers.getY1Y2("y1", t);
      if (P.isNumber(a)) {
        var r = { pSize: t.marker.size, pointStrokeWidth: t.marker.strokeWidth, pointFillColor: t.marker.fillColor, pointStrokeColor: t.marker.strokeColor, shape: t.marker.shape, pRadius: t.marker.radius, class: "apexcharts-point-annotation-marker ".concat(t.marker.cssClass, " ").concat(t.id ? t.id : "") }, o = this.annoCtx.graphics.drawMarker(a + t.marker.offsetX, s + t.marker.offsetY, r);
        e.appendChild(o.node);
        var n = t.label.text ? t.label.text : "", h = this.annoCtx.graphics.drawText({ x: a + t.label.offsetX, y: s + t.label.offsetY - t.marker.size - parseFloat(t.label.style.fontSize) / 1.6, text: n, textAnchor: t.label.textAnchor, fontSize: t.label.style.fontSize, fontFamily: t.label.style.fontFamily, fontWeight: t.label.style.fontWeight, foreColor: t.label.style.color, cssClass: "apexcharts-point-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "") });
        if (h.attr({ rel: i }), e.appendChild(h.node), t.customSVG.SVG) {
          var c = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations-custom-svg " + t.customSVG.cssClass });
          c.attr({ transform: "translate(".concat(a + t.customSVG.offsetX, ", ").concat(s + t.customSVG.offsetY, ")") }), c.node.innerHTML = t.customSVG.SVG, e.appendChild(c.node);
        }
        if (t.image.path) {
          var d = t.image.width ? t.image.width : 20, g = t.image.height ? t.image.height : 20;
          o = this.annoCtx.addImage({ x: a + t.image.offsetX - d / 2, y: s + t.image.offsetY - g / 2, width: d, height: g, path: t.image.path, appendTo: ".apexcharts-point-annotations" });
        }
        t.mouseEnter && o.node.addEventListener("mouseenter", t.mouseEnter.bind(this, t)), t.mouseLeave && o.node.addEventListener("mouseleave", t.mouseLeave.bind(this, t)), t.click && o.node.addEventListener("click", t.click.bind(this, t));
      }
    } }, { key: "drawPointAnnotations", value: function() {
      var t = this, e = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations" });
      return e.config.annotations.points.map(function(a, s) {
        t.addPointAnnotation(a, i.node, s);
      }), i;
    } }]), y;
  }(), O = { name: "en", options: { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], toolbar: { exportToSVG: "Download SVG", exportToPNG: "Download PNG", exportToCSV: "Download CSV", menu: "Menu", selection: "Selection", selectionZoom: "Selection Zoom", zoomIn: "Zoom In", zoomOut: "Zoom Out", pan: "Panning", reset: "Reset Zoom" } } }, B = function() {
    function y() {
      Y(this, y), this.yAxis = { show: !0, showAlways: !1, showForNullSeries: !0, seriesName: void 0, opposite: !1, reversed: !1, logarithmic: !1, logBase: 10, tickAmount: void 0, stepSize: void 0, forceNiceScale: !1, max: void 0, min: void 0, floating: !1, decimalsInFloat: void 0, labels: { show: !0, minWidth: 0, maxWidth: 160, offsetX: 0, offsetY: 0, align: void 0, rotate: 0, padding: 20, style: { colors: [], fontSize: "11px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, formatter: void 0 }, axisBorder: { show: !1, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !1, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0 }, title: { text: void 0, rotate: -90, offsetY: 0, offsetX: 0, style: { color: void 0, fontSize: "11px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, tooltip: { enabled: !1, offsetX: 0 }, crosshairs: { show: !0, position: "front", stroke: { color: "#b6b6b6", width: 1, dashArray: 0 } } }, this.pointAnnotation = { id: void 0, x: 0, y: null, yAxisIndex: 0, seriesIndex: void 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, marker: { size: 4, fillColor: "#fff", strokeWidth: 2, strokeColor: "#333", shape: "circle", offsetX: 0, offsetY: 0, radius: 2, cssClass: "" }, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } }, customSVG: { SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0 }, image: { path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0 } }, this.yAxisAnnotation = { id: void 0, y: 0, y2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, width: "100%", yAxisIndex: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "end", position: "right", offsetX: 0, offsetY: -3, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.xAxisAnnotation = { id: void 0, x: 0, x2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", orientation: "vertical", position: "top", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.text = { x: 0, y: 0, text: "", textAnchor: "start", foreColor: void 0, fontSize: "13px", fontFamily: void 0, fontWeight: 400, appendTo: ".apexcharts-annotations", backgroundColor: "transparent", borderColor: "#c2c2c2", borderRadius: 0, borderWidth: 0, paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2 };
    }
    return F(y, [{ key: "init", value: function() {
      return { annotations: { yaxis: [this.yAxisAnnotation], xaxis: [this.xAxisAnnotation], points: [this.pointAnnotation], texts: [], images: [], shapes: [] }, chart: { animations: { enabled: !0, easing: "easeinout", speed: 800, animateGradually: { delay: 150, enabled: !0 }, dynamicAnimation: { enabled: !0, speed: 350 } }, background: "transparent", locales: [O], defaultLocale: "en", dropShadow: { enabled: !1, enabledOnSeries: void 0, top: 2, left: 2, blur: 4, color: "#000", opacity: 0.35 }, events: { animationEnd: void 0, beforeMount: void 0, mounted: void 0, updated: void 0, click: void 0, mouseMove: void 0, mouseLeave: void 0, xAxisLabelClick: void 0, legendClick: void 0, markerClick: void 0, selection: void 0, dataPointSelection: void 0, dataPointMouseEnter: void 0, dataPointMouseLeave: void 0, beforeZoom: void 0, beforeResetZoom: void 0, zoomed: void 0, scrolled: void 0, brushScrolled: void 0 }, foreColor: "#373d3f", fontFamily: "Helvetica, Arial, sans-serif", height: "auto", parentHeightOffset: 15, redrawOnParentResize: !0, redrawOnWindowResize: !0, id: void 0, group: void 0, nonce: void 0, offsetX: 0, offsetY: 0, selection: { enabled: !1, type: "x", fill: { color: "#24292e", opacity: 0.1 }, stroke: { width: 1, color: "#24292e", opacity: 0.4, dashArray: 3 }, xaxis: { min: void 0, max: void 0 }, yaxis: { min: void 0, max: void 0 } }, sparkline: { enabled: !1 }, brush: { enabled: !1, autoScaleYaxis: !0, target: void 0, targets: void 0 }, stacked: !1, stackOnlyBar: !0, stackType: "normal", toolbar: { show: !0, offsetX: 0, offsetY: 0, tools: { download: !0, selection: !0, zoom: !0, zoomin: !0, zoomout: !0, pan: !0, reset: !0, customIcons: [] }, export: { csv: { filename: void 0, columnDelimiter: ",", headerCategory: "category", headerValue: "value", dateFormatter: function(t) {
        return new Date(t).toDateString();
      } }, png: { filename: void 0 }, svg: { filename: void 0 } }, autoSelected: "zoom" }, type: "line", width: "100%", zoom: { enabled: !0, type: "x", autoScaleYaxis: !1, zoomedArea: { fill: { color: "#90CAF9", opacity: 0.4 }, stroke: { color: "#0D47A1", opacity: 0.4, width: 1 } } } }, plotOptions: { area: { fillTo: "origin" }, bar: { horizontal: !1, columnWidth: "70%", barHeight: "70%", distributed: !1, borderRadius: 0, borderRadiusApplication: "around", borderRadiusWhenStacked: "last", rangeBarOverlap: !0, rangeBarGroupRows: !1, hideZeroBarsWhenGrouped: !1, isDumbbell: !1, dumbbellColors: void 0, isFunnel: !1, isFunnel3d: !0, colors: { ranges: [], backgroundBarColors: [], backgroundBarOpacity: 1, backgroundBarRadius: 0 }, dataLabels: { position: "top", maxItems: 100, hideOverflowingLabels: !0, orientation: "horizontal", total: { enabled: !1, formatter: void 0, offsetX: 0, offsetY: 0, style: { color: "#373d3f", fontSize: "12px", fontFamily: void 0, fontWeight: 600 } } } }, bubble: { zScaling: !0, minBubbleRadius: void 0, maxBubbleRadius: void 0 }, candlestick: { colors: { upward: "#00B746", downward: "#EF403C" }, wick: { useFillColor: !0 } }, boxPlot: { colors: { upper: "#00E396", lower: "#008FFB" } }, heatmap: { radius: 2, enableShades: !0, shadeIntensity: 0.5, reverseNegativeShade: !1, distributed: !1, useFillColorAsStroke: !1, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 } }, treemap: { enableShades: !0, shadeIntensity: 0.5, distributed: !1, reverseNegativeShade: !1, useFillColorAsStroke: !1, borderRadius: 4, dataLabels: { format: "scale" }, colorScale: { inverse: !1, ranges: [], min: void 0, max: void 0 } }, radialBar: { inverseOrder: !1, startAngle: 0, endAngle: 360, offsetX: 0, offsetY: 0, hollow: { margin: 5, size: "50%", background: "transparent", image: void 0, imageWidth: 150, imageHeight: 150, imageOffsetX: 0, imageOffsetY: 0, imageClipped: !0, position: "front", dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, track: { show: !0, startAngle: void 0, endAngle: void 0, background: "#f2f2f2", strokeWidth: "97%", opacity: 1, margin: 5, dropShadow: { enabled: !1, top: 0, left: 0, blur: 3, color: "#000", opacity: 0.5 } }, dataLabels: { show: !0, name: { show: !0, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: 0, formatter: function(t) {
        return t;
      } }, value: { show: !0, fontSize: "14px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 16, formatter: function(t) {
        return t + "%";
      } }, total: { show: !1, label: "Total", fontSize: "16px", fontWeight: 600, fontFamily: void 0, color: void 0, formatter: function(t) {
        return t.globals.seriesTotals.reduce(function(e, i) {
          return e + i;
        }, 0) / t.globals.series.length + "%";
      } } }, barLabels: { enabled: !1, margin: 5, useSeriesColors: !0, fontFamily: void 0, fontWeight: 600, fontSize: "16px", formatter: function(t) {
        return t;
      }, onClick: void 0 } }, pie: { customScale: 1, offsetX: 0, offsetY: 0, startAngle: 0, endAngle: 360, expandOnClick: !0, dataLabels: { offset: 0, minAngleToShowLabel: 10 }, donut: { size: "65%", background: "transparent", labels: { show: !1, name: { show: !0, fontSize: "16px", fontFamily: void 0, fontWeight: 600, color: void 0, offsetY: -10, formatter: function(t) {
        return t;
      } }, value: { show: !0, fontSize: "20px", fontFamily: void 0, fontWeight: 400, color: void 0, offsetY: 10, formatter: function(t) {
        return t;
      } }, total: { show: !1, showAlways: !1, label: "Total", fontSize: "16px", fontWeight: 400, fontFamily: void 0, color: void 0, formatter: function(t) {
        return t.globals.seriesTotals.reduce(function(e, i) {
          return e + i;
        }, 0);
      } } } } }, polarArea: { rings: { strokeWidth: 1, strokeColor: "#e8e8e8" }, spokes: { strokeWidth: 1, connectorColors: "#e8e8e8" } }, radar: { size: void 0, offsetX: 0, offsetY: 0, polygons: { strokeWidth: 1, strokeColors: "#e8e8e8", connectorColors: "#e8e8e8", fill: { colors: void 0 } } } }, colors: void 0, dataLabels: { enabled: !0, enabledOnSeries: void 0, formatter: function(t) {
        return t !== null ? t : "";
      }, textAnchor: "middle", distributed: !1, offsetX: 0, offsetY: 0, style: { fontSize: "12px", fontFamily: void 0, fontWeight: 600, colors: void 0 }, background: { enabled: !0, foreColor: "#fff", borderRadius: 2, padding: 4, opacity: 0.9, borderWidth: 1, borderColor: "#fff", dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.45 } }, dropShadow: { enabled: !1, top: 1, left: 1, blur: 1, color: "#000", opacity: 0.45 } }, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] }, image: { src: [], width: void 0, height: void 0 }, pattern: { style: "squares", width: 6, height: 6, strokeWidth: 2 } }, forecastDataPoints: { count: 0, fillOpacity: 0.5, strokeWidth: void 0, dashArray: 4 }, grid: { show: !0, borderColor: "#e0e0e0", strokeDashArray: 0, position: "back", xaxis: { lines: { show: !1 } }, yaxis: { lines: { show: !0 } }, row: { colors: void 0, opacity: 0.5 }, column: { colors: void 0, opacity: 0.5 }, padding: { top: 0, right: 10, bottom: 0, left: 12 } }, labels: [], legend: { show: !0, showForSingleSeries: !1, showForNullSeries: !0, showForZeroSeries: !0, floating: !1, position: "bottom", horizontalAlign: "center", inverseOrder: !1, fontSize: "12px", fontFamily: void 0, fontWeight: 400, width: void 0, height: void 0, formatter: void 0, tooltipHoverFormatter: void 0, offsetX: -20, offsetY: 4, customLegendItems: [], labels: { colors: void 0, useSeriesColors: !1 }, markers: { width: 12, height: 12, strokeWidth: 0, fillColors: void 0, strokeColor: "#fff", radius: 12, customHTML: void 0, offsetX: 0, offsetY: 0, onClick: void 0 }, itemMargin: { horizontal: 5, vertical: 2 }, onItemClick: { toggleDataSeries: !0 }, onItemHover: { highlightDataSeries: !0 } }, markers: { discrete: [], size: 0, colors: void 0, strokeColors: "#fff", strokeWidth: 2, strokeOpacity: 0.9, strokeDashArray: 0, fillOpacity: 1, shape: "circle", width: 8, height: 8, radius: 2, offsetX: 0, offsetY: 0, onClick: void 0, onDblClick: void 0, showNullDataPoints: !0, hover: { size: void 0, sizeOffset: 3 } }, noData: { text: void 0, align: "center", verticalAlign: "middle", offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "14px", fontFamily: void 0 } }, responsive: [], series: void 0, states: { normal: { filter: { type: "none", value: 0 } }, hover: { filter: { type: "lighten", value: 0.1 } }, active: { allowMultipleDataPointsSelection: !1, filter: { type: "darken", value: 0.5 } } }, title: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 0, floating: !1, style: { fontSize: "14px", fontWeight: 900, fontFamily: void 0, color: void 0 } }, subtitle: { text: void 0, align: "left", margin: 5, offsetX: 0, offsetY: 30, floating: !1, style: { fontSize: "12px", fontWeight: 400, fontFamily: void 0, color: void 0 } }, stroke: { show: !0, curve: "smooth", lineCap: "butt", width: 2, colors: void 0, dashArray: 0, fill: { type: "solid", colors: void 0, opacity: 0.85, gradient: { shade: "dark", type: "horizontal", shadeIntensity: 0.5, gradientToColors: void 0, inverseColors: !0, opacityFrom: 1, opacityTo: 1, stops: [0, 50, 100], colorStops: [] } } }, tooltip: { enabled: !0, enabledOnSeries: void 0, shared: !0, hideEmptySeries: !1, followCursor: !1, intersect: !1, inverseOrder: !1, custom: void 0, fillSeriesColor: !1, theme: "light", cssClass: "", style: { fontSize: "12px", fontFamily: void 0 }, onDatasetHover: { highlightDataSeries: !1 }, x: { show: !0, format: "dd MMM", formatter: void 0 }, y: { formatter: void 0, title: { formatter: function(t) {
        return t ? t + ": " : "";
      } } }, z: { formatter: void 0, title: "Size: " }, marker: { show: !0, fillColors: void 0 }, items: { display: "flex" }, fixed: { enabled: !1, position: "topRight", offsetX: 0, offsetY: 0 } }, xaxis: { type: "category", categories: [], convertedCatToNumeric: !1, offsetX: 0, offsetY: 0, overwriteCategories: void 0, labels: { show: !0, rotate: -45, rotateAlways: !1, hideOverlappingLabels: !0, trim: !1, minHeight: void 0, maxHeight: 120, showDuplicates: !0, style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, offsetX: 0, offsetY: 0, format: void 0, formatter: void 0, datetimeUTC: !0, datetimeFormatter: { year: "yyyy", month: "MMM 'yy", day: "dd MMM", hour: "HH:mm", minute: "HH:mm:ss", second: "HH:mm:ss" } }, group: { groups: [], style: { colors: [], fontSize: "12px", fontWeight: 400, fontFamily: void 0, cssClass: "" } }, axisBorder: { show: !0, color: "#e0e0e0", width: "100%", height: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !0, color: "#e0e0e0", height: 6, offsetX: 0, offsetY: 0 }, stepSize: void 0, tickAmount: void 0, tickPlacement: "on", min: void 0, max: void 0, range: void 0, floating: !1, decimalsInFloat: void 0, position: "bottom", title: { text: void 0, offsetX: 0, offsetY: 0, style: { color: void 0, fontSize: "12px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, crosshairs: { show: !0, width: 1, position: "back", opacity: 0.9, stroke: { color: "#b6b6b6", width: 1, dashArray: 3 }, fill: { type: "solid", color: "#B1B9C4", gradient: { colorFrom: "#D8E3F0", colorTo: "#BED1E6", stops: [0, 100], opacityFrom: 0.4, opacityTo: 0.5 } }, dropShadow: { enabled: !1, left: 0, top: 0, blur: 1, opacity: 0.4 } }, tooltip: { enabled: !0, offsetY: 0, formatter: void 0, style: { fontSize: "12px", fontFamily: void 0 } } }, yaxis: this.yAxis, theme: { mode: "light", palette: "palette1", monochrome: { enabled: !1, color: "#008FFB", shadeTo: "light", shadeIntensity: 0.65 } } };
    } }]), y;
  }(), it = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w, this.graphics = new z(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.helpers = new wt(this), this.xAxisAnnotations = new Dt(this), this.yAxisAnnotations = new Nt(this), this.pointsAnnotations = new ft(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints;
    }
    return F(y, [{ key: "drawAxesAnnotations", value: function() {
      var t = this.w;
      if (t.globals.axisCharts) {
        for (var e = this.yAxisAnnotations.drawYAxisAnnotations(), i = this.xAxisAnnotations.drawXAxisAnnotations(), a = this.pointsAnnotations.drawPointAnnotations(), s = t.config.chart.animations.enabled, r = [e, i, a], o = [i.node, e.node, a.node], n = 0; n < 3; n++)
          t.globals.dom.elGraphical.add(r[n]), !s || t.globals.resized || t.globals.dataChanged || t.config.chart.type !== "scatter" && t.config.chart.type !== "bubble" && t.globals.dataPoints > 1 && o[n].classList.add("apexcharts-element-hidden"), t.globals.delayedElements.push({ el: o[n], index: 0 });
        this.helpers.annotationsBackground();
      }
    } }, { key: "drawImageAnnos", value: function() {
      var t = this;
      this.w.config.annotations.images.map(function(e, i) {
        t.addImage(e, i);
      });
    } }, { key: "drawTextAnnos", value: function() {
      var t = this;
      this.w.config.annotations.texts.map(function(e, i) {
        t.addText(e, i);
      });
    } }, { key: "addXaxisAnnotation", value: function(t, e, i) {
      this.xAxisAnnotations.addXaxisAnnotation(t, e, i);
    } }, { key: "addYaxisAnnotation", value: function(t, e, i) {
      this.yAxisAnnotations.addYaxisAnnotation(t, e, i);
    } }, { key: "addPointAnnotation", value: function(t, e, i) {
      this.pointsAnnotations.addPointAnnotation(t, e, i);
    } }, { key: "addText", value: function(t, e) {
      var i = t.x, a = t.y, s = t.text, r = t.textAnchor, o = t.foreColor, n = t.fontSize, h = t.fontFamily, c = t.fontWeight, d = t.cssClass, g = t.backgroundColor, p = t.borderWidth, f = t.strokeDashArray, b = t.borderRadius, m = t.borderColor, w = t.appendTo, A = w === void 0 ? ".apexcharts-svg" : w, l = t.paddingLeft, u = l === void 0 ? 4 : l, x = t.paddingRight, v = x === void 0 ? 4 : x, k = t.paddingBottom, S = k === void 0 ? 2 : k, C = t.paddingTop, L = C === void 0 ? 2 : C, M = this.w, T = this.graphics.drawText({ x: i, y: a, text: s, textAnchor: r || "start", fontSize: n || "12px", fontWeight: c || "regular", fontFamily: h || M.config.chart.fontFamily, foreColor: o || M.config.chart.foreColor, cssClass: d }), I = M.globals.dom.baseEl.querySelector(A);
      I && I.appendChild(T.node);
      var E = T.bbox();
      if (s) {
        var R = this.graphics.drawRect(E.x - u, E.y - L, E.width + u + v, E.height + S + L, b, g || "transparent", 1, p, m, f);
        I.insertBefore(R.node, T.node);
      }
    } }, { key: "addImage", value: function(t, e) {
      var i = this.w, a = t.path, s = t.x, r = s === void 0 ? 0 : s, o = t.y, n = o === void 0 ? 0 : o, h = t.width, c = h === void 0 ? 20 : h, d = t.height, g = d === void 0 ? 20 : d, p = t.appendTo, f = p === void 0 ? ".apexcharts-svg" : p, b = i.globals.dom.Paper.image(a);
      b.size(c, g).move(r, n);
      var m = i.globals.dom.baseEl.querySelector(f);
      return m && m.appendChild(b.node), b;
    } }, { key: "addXaxisAnnotationExternal", value: function(t, e, i) {
      return this.addAnnotationExternal({ params: t, pushToMemory: e, context: i, type: "xaxis", contextMethod: i.addXaxisAnnotation }), i;
    } }, { key: "addYaxisAnnotationExternal", value: function(t, e, i) {
      return this.addAnnotationExternal({ params: t, pushToMemory: e, context: i, type: "yaxis", contextMethod: i.addYaxisAnnotation }), i;
    } }, { key: "addPointAnnotationExternal", value: function(t, e, i) {
      return this.invertAxis === void 0 && (this.invertAxis = i.w.globals.isBarHorizontal), this.addAnnotationExternal({ params: t, pushToMemory: e, context: i, type: "point", contextMethod: i.addPointAnnotation }), i;
    } }, { key: "addAnnotationExternal", value: function(t) {
      var e = t.params, i = t.pushToMemory, a = t.context, s = t.type, r = t.contextMethod, o = a, n = o.w, h = n.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations")), c = h.childNodes.length + 1, d = new B(), g = Object.assign({}, s === "xaxis" ? d.xAxisAnnotation : s === "yaxis" ? d.yAxisAnnotation : d.pointAnnotation), p = P.extend(g, e);
      switch (s) {
        case "xaxis":
          this.addXaxisAnnotation(p, h, c);
          break;
        case "yaxis":
          this.addYaxisAnnotation(p, h, c);
          break;
        case "point":
          this.addPointAnnotation(p, h, c);
      }
      var f = n.globals.dom.baseEl.querySelector(".apexcharts-".concat(s, "-annotations .apexcharts-").concat(s, "-annotation-label[rel='").concat(c, "']")), b = this.helpers.addBackgroundToAnno(f, p);
      return b && h.insertBefore(b.node, f), i && n.globals.memory.methodsToExec.push({ context: o, id: p.id ? p.id : P.randomId(), method: r, label: "addAnnotation", params: e }), a;
    } }, { key: "clearAnnotations", value: function(t) {
      var e = t.w, i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");
      e.globals.memory.methodsToExec.map(function(a, s) {
        a.label !== "addText" && a.label !== "addAnnotation" || e.globals.memory.methodsToExec.splice(s, 1);
      }), i = P.listToArray(i), Array.prototype.forEach.call(i, function(a) {
        for (; a.firstChild; )
          a.removeChild(a.firstChild);
      });
    } }, { key: "removeAnnotation", value: function(t, e) {
      var i = t.w, a = i.globals.dom.baseEl.querySelectorAll(".".concat(e));
      a && (i.globals.memory.methodsToExec.map(function(s, r) {
        s.id === e && i.globals.memory.methodsToExec.splice(r, 1);
      }), Array.prototype.forEach.call(a, function(s) {
        s.parentElement.removeChild(s);
      }));
    } }]), y;
  }(), G = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    }
    return F(y, [{ key: "isValidDate", value: function(t) {
      return typeof t != "number" && !isNaN(this.parseDate(t));
    } }, { key: "getTimeStamp", value: function(t) {
      return Date.parse(t) ? this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t).toISOString().substr(0, 25)).getTime() : new Date(t).getTime() : t;
    } }, { key: "getDate", value: function(t) {
      return this.w.config.xaxis.labels.datetimeUTC ? new Date(new Date(t).toUTCString()) : new Date(t);
    } }, { key: "parseDate", value: function(t) {
      var e = Date.parse(t);
      if (!isNaN(e))
        return this.getTimeStamp(t);
      var i = Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
      return i = this.getTimeStamp(i);
    } }, { key: "parseDateWithTimezone", value: function(t) {
      return Date.parse(t.replace(/-/g, "/").replace(/[a-z]+/gi, " "));
    } }, { key: "formatDate", value: function(t, e) {
      var i = this.w.globals.locale, a = this.w.config.xaxis.labels.datetimeUTC, s = ["\0"].concat(J(i.months)), r = [""].concat(J(i.shortMonths)), o = [""].concat(J(i.days)), n = [""].concat(J(i.shortDays));
      function h(S, C) {
        var L = S + "";
        for (C = C || 2; L.length < C; )
          L = "0" + L;
        return L;
      }
      var c = a ? t.getUTCFullYear() : t.getFullYear();
      e = (e = (e = e.replace(/(^|[^\\])yyyy+/g, "$1" + c)).replace(/(^|[^\\])yy/g, "$1" + c.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + c);
      var d = (a ? t.getUTCMonth() : t.getMonth()) + 1;
      e = (e = (e = (e = e.replace(/(^|[^\\])MMMM+/g, "$1" + s[0])).replace(/(^|[^\\])MMM/g, "$1" + r[0])).replace(/(^|[^\\])MM/g, "$1" + h(d))).replace(/(^|[^\\])M/g, "$1" + d);
      var g = a ? t.getUTCDate() : t.getDate();
      e = (e = (e = (e = e.replace(/(^|[^\\])dddd+/g, "$1" + o[0])).replace(/(^|[^\\])ddd/g, "$1" + n[0])).replace(/(^|[^\\])dd/g, "$1" + h(g))).replace(/(^|[^\\])d/g, "$1" + g);
      var p = a ? t.getUTCHours() : t.getHours(), f = p > 12 ? p - 12 : p === 0 ? 12 : p;
      e = (e = (e = (e = e.replace(/(^|[^\\])HH+/g, "$1" + h(p))).replace(/(^|[^\\])H/g, "$1" + p)).replace(/(^|[^\\])hh+/g, "$1" + h(f))).replace(/(^|[^\\])h/g, "$1" + f);
      var b = a ? t.getUTCMinutes() : t.getMinutes();
      e = (e = e.replace(/(^|[^\\])mm+/g, "$1" + h(b))).replace(/(^|[^\\])m/g, "$1" + b);
      var m = a ? t.getUTCSeconds() : t.getSeconds();
      e = (e = e.replace(/(^|[^\\])ss+/g, "$1" + h(m))).replace(/(^|[^\\])s/g, "$1" + m);
      var w = a ? t.getUTCMilliseconds() : t.getMilliseconds();
      e = e.replace(/(^|[^\\])fff+/g, "$1" + h(w, 3)), w = Math.round(w / 10), e = e.replace(/(^|[^\\])ff/g, "$1" + h(w)), w = Math.round(w / 10);
      var A = p < 12 ? "AM" : "PM";
      e = (e = (e = e.replace(/(^|[^\\])f/g, "$1" + w)).replace(/(^|[^\\])TT+/g, "$1" + A)).replace(/(^|[^\\])T/g, "$1" + A.charAt(0));
      var l = A.toLowerCase();
      e = (e = e.replace(/(^|[^\\])tt+/g, "$1" + l)).replace(/(^|[^\\])t/g, "$1" + l.charAt(0));
      var u = -t.getTimezoneOffset(), x = a || !u ? "Z" : u > 0 ? "+" : "-";
      if (!a) {
        var v = (u = Math.abs(u)) % 60;
        x += h(Math.floor(u / 60)) + ":" + h(v);
      }
      e = e.replace(/(^|[^\\])K/g, "$1" + x);
      var k = (a ? t.getUTCDay() : t.getDay()) + 1;
      return e = (e = (e = (e = (e = e.replace(new RegExp(o[0], "g"), o[k])).replace(new RegExp(n[0], "g"), n[k])).replace(new RegExp(s[0], "g"), s[d])).replace(new RegExp(r[0], "g"), r[d])).replace(/\\(.)/g, "$1");
    } }, { key: "getTimeUnitsfromTimestamp", value: function(t, e, i) {
      var a = this.w;
      a.config.xaxis.min !== void 0 && (t = a.config.xaxis.min), a.config.xaxis.max !== void 0 && (e = a.config.xaxis.max);
      var s = this.getDate(t), r = this.getDate(e), o = this.formatDate(s, "yyyy MM dd HH mm ss fff").split(" "), n = this.formatDate(r, "yyyy MM dd HH mm ss fff").split(" ");
      return { minMillisecond: parseInt(o[6], 10), maxMillisecond: parseInt(n[6], 10), minSecond: parseInt(o[5], 10), maxSecond: parseInt(n[5], 10), minMinute: parseInt(o[4], 10), maxMinute: parseInt(n[4], 10), minHour: parseInt(o[3], 10), maxHour: parseInt(n[3], 10), minDate: parseInt(o[2], 10), maxDate: parseInt(n[2], 10), minMonth: parseInt(o[1], 10) - 1, maxMonth: parseInt(n[1], 10) - 1, minYear: parseInt(o[0], 10), maxYear: parseInt(n[0], 10) };
    } }, { key: "isLeapYear", value: function(t) {
      return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
    } }, { key: "calculcateLastDaysOfMonth", value: function(t, e, i) {
      return this.determineDaysOfMonths(t, e) - i;
    } }, { key: "determineDaysOfYear", value: function(t) {
      var e = 365;
      return this.isLeapYear(t) && (e = 366), e;
    } }, { key: "determineRemainingDaysOfYear", value: function(t, e, i) {
      var a = this.daysCntOfYear[e] + i;
      return e > 1 && this.isLeapYear() && a++, a;
    } }, { key: "determineDaysOfMonths", value: function(t, e) {
      var i = 30;
      switch (t = P.monthMod(t), !0) {
        case this.months30.indexOf(t) > -1:
          t === 2 && (i = this.isLeapYear(e) ? 29 : 28);
          break;
        case this.months31.indexOf(t) > -1:
        default:
          i = 31;
      }
      return i;
    } }]), y;
  }(), rt = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w, this.tooltipKeyFormat = "dd MMM";
    }
    return F(y, [{ key: "xLabelFormat", value: function(t, e, i, a) {
      var s = this.w;
      if (s.config.xaxis.type === "datetime" && s.config.xaxis.labels.formatter === void 0 && s.config.tooltip.x.formatter === void 0) {
        var r = new G(this.ctx);
        return r.formatDate(r.getDate(e), s.config.tooltip.x.format);
      }
      return t(e, i, a);
    } }, { key: "defaultGeneralFormatter", value: function(t) {
      return Array.isArray(t) ? t.map(function(e) {
        return e;
      }) : t;
    } }, { key: "defaultYFormatter", value: function(t, e, i) {
      var a = this.w;
      return P.isNumber(t) && (t = a.globals.yValueDecimal !== 0 ? t.toFixed(e.decimalsInFloat !== void 0 ? e.decimalsInFloat : a.globals.yValueDecimal) : a.globals.maxYArr[i] - a.globals.minYArr[i] < 5 ? t.toFixed(1) : t.toFixed(0)), t;
    } }, { key: "setLabelFormatters", value: function() {
      var t = this, e = this.w;
      return e.globals.xaxisTooltipFormatter = function(i) {
        return t.defaultGeneralFormatter(i);
      }, e.globals.ttKeyFormatter = function(i) {
        return t.defaultGeneralFormatter(i);
      }, e.globals.ttZFormatter = function(i) {
        return i;
      }, e.globals.legendFormatter = function(i) {
        return t.defaultGeneralFormatter(i);
      }, e.config.xaxis.labels.formatter !== void 0 ? e.globals.xLabelFormatter = e.config.xaxis.labels.formatter : e.globals.xLabelFormatter = function(i) {
        if (P.isNumber(i)) {
          if (!e.config.xaxis.convertedCatToNumeric && e.config.xaxis.type === "numeric") {
            if (P.isNumber(e.config.xaxis.decimalsInFloat))
              return i.toFixed(e.config.xaxis.decimalsInFloat);
            var a = e.globals.maxX - e.globals.minX;
            return a > 0 && a < 100 ? i.toFixed(1) : i.toFixed(0);
          }
          return e.globals.isBarHorizontal && e.globals.maxY - e.globals.minYArr < 4 ? i.toFixed(1) : i.toFixed(0);
        }
        return i;
      }, typeof e.config.tooltip.x.formatter == "function" ? e.globals.ttKeyFormatter = e.config.tooltip.x.formatter : e.globals.ttKeyFormatter = e.globals.xLabelFormatter, typeof e.config.xaxis.tooltip.formatter == "function" && (e.globals.xaxisTooltipFormatter = e.config.xaxis.tooltip.formatter), (Array.isArray(e.config.tooltip.y) || e.config.tooltip.y.formatter !== void 0) && (e.globals.ttVal = e.config.tooltip.y), e.config.tooltip.z.formatter !== void 0 && (e.globals.ttZFormatter = e.config.tooltip.z.formatter), e.config.legend.formatter !== void 0 && (e.globals.legendFormatter = e.config.legend.formatter), e.config.yaxis.forEach(function(i, a) {
        i.labels.formatter !== void 0 ? e.globals.yLabelFormatters[a] = i.labels.formatter : e.globals.yLabelFormatters[a] = function(s) {
          return e.globals.xyCharts ? Array.isArray(s) ? s.map(function(r) {
            return t.defaultYFormatter(r, i, a);
          }) : t.defaultYFormatter(s, i, a) : s;
        };
      }), e.globals;
    } }, { key: "heatmapLabelFormatters", value: function() {
      var t = this.w;
      if (t.config.chart.type === "heatmap") {
        t.globals.yAxisScale[0].result = t.globals.seriesNames.slice();
        var e = t.globals.seriesNames.reduce(function(i, a) {
          return i.length > a.length ? i : a;
        }, 0);
        t.globals.yAxisScale[0].niceMax = e, t.globals.yAxisScale[0].niceMin = e;
      }
    } }]), y;
  }(), xt = function(y) {
    var t, e = y.isTimeline, i = y.ctx, a = y.seriesIndex, s = y.dataPointIndex, r = y.y1, o = y.y2, n = y.w, h = n.globals.seriesRangeStart[a][s], c = n.globals.seriesRangeEnd[a][s], d = n.globals.labels[s], g = n.config.series[a].name ? n.config.series[a].name : "", p = n.globals.ttKeyFormatter, f = n.config.tooltip.y.title.formatter, b = { w: n, seriesIndex: a, dataPointIndex: s, start: h, end: c };
    typeof f == "function" && (g = f(g, b)), (t = n.config.series[a].data[s]) !== null && t !== void 0 && t.x && (d = n.config.series[a].data[s].x), e || n.config.xaxis.type === "datetime" && (d = new rt(i).xLabelFormat(n.globals.ttKeyFormatter, d, d, { i: void 0, dateFormatter: new G(i).formatDate, w: n })), typeof p == "function" && (d = p(d, b)), Number.isFinite(r) && Number.isFinite(o) && (h = r, c = o);
    var m = "", w = "", A = n.globals.colors[a];
    if (n.config.tooltip.x.formatter === void 0)
      if (n.config.xaxis.type === "datetime") {
        var l = new G(i);
        m = l.formatDate(l.getDate(h), n.config.tooltip.x.format), w = l.formatDate(l.getDate(c), n.config.tooltip.x.format);
      } else
        m = h, w = c;
    else
      m = n.config.tooltip.x.formatter(h), w = n.config.tooltip.x.formatter(c);
    return { start: h, end: c, startVal: m, endVal: w, ylabel: d, color: A, seriesName: g };
  }, gt = function(y) {
    var t = y.color, e = y.seriesName, i = y.ylabel, a = y.start, s = y.end, r = y.seriesIndex, o = y.dataPointIndex, n = y.ctx.tooltip.tooltipLabels.getFormatters(r);
    a = n.yLbFormatter(a), s = n.yLbFormatter(s);
    var h = n.yLbFormatter(y.w.globals.series[r][o]), c = `<span class="value start-value">
  `.concat(a, `
  </span> <span class="separator">-</span> <span class="value end-value">
  `).concat(s, `
  </span>`);
    return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + t + '">' + (e || "") + '</span></div><div> <span class="category">' + i + ": </span> " + (y.w.globals.comboCharts ? y.w.config.series[r].type === "rangeArea" || y.w.config.series[r].type === "rangeBar" ? c : "<span>".concat(h, "</span>") : c) + " </div></div>";
  }, ot = function() {
    function y(t) {
      Y(this, y), this.opts = t;
    }
    return F(y, [{ key: "hideYAxis", value: function() {
      this.opts.yaxis[0].show = !1, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = !1, this.opts.yaxis[0].axisTicks.show = !1, this.opts.yaxis[0].floating = !0;
    } }, { key: "line", value: function() {
      return { chart: { animations: { easing: "swing" } }, dataLabels: { enabled: !1 }, stroke: { width: 5, curve: "straight" }, markers: { size: 0, hover: { sizeOffset: 6 } }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "sparkline", value: function(t) {
      return this.hideYAxis(), P.extend(t, { grid: { show: !1, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, legend: { show: !1 }, xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } }, chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 } });
    } }, { key: "bar", value: function() {
      return { chart: { stacked: !1, animations: { easing: "swing" } }, plotOptions: { bar: { dataLabels: { position: "center" } } }, dataLabels: { style: { colors: ["#fff"] }, background: { enabled: !1 } }, stroke: { width: 0, lineCap: "round" }, fill: { opacity: 0.85 }, legend: { markers: { shape: "square", radius: 2, size: 8 } }, tooltip: { shared: !1, intersect: !0 }, xaxis: { tooltip: { enabled: !1 }, tickPlacement: "between", crosshairs: { width: "barWidth", position: "back", fill: { type: "gradient" }, dropShadow: { enabled: !1 }, stroke: { width: 0 } } } };
    } }, { key: "funnel", value: function() {
      return this.hideYAxis(), X(X({}, this.bar()), {}, { chart: { animations: { easing: "linear", speed: 800, animateGradually: { enabled: !1 } } }, plotOptions: { bar: { horizontal: !0, borderRadiusApplication: "around", borderRadius: 0, dataLabels: { position: "center" } } }, grid: { show: !1, padding: { left: 0, right: 0 } }, xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } } });
    } }, { key: "candlestick", value: function() {
      var t = this;
      return { stroke: { width: 1, colors: ["#333"] }, fill: { opacity: 1 }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function(e) {
        var i = e.seriesIndex, a = e.dataPointIndex, s = e.w;
        return t._getBoxTooltip(s, i, a, ["Open", "High", "", "Low", "Close"], "candlestick");
      } }, states: { active: { filter: { type: "none" } } }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "boxPlot", value: function() {
      var t = this;
      return { chart: { animations: { dynamicAnimation: { enabled: !1 } } }, stroke: { width: 1, colors: ["#24292e"] }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function(e) {
        var i = e.seriesIndex, a = e.dataPointIndex, s = e.w;
        return t._getBoxTooltip(s, i, a, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot");
      } }, markers: { size: 5, strokeWidth: 1, strokeColors: "#111" }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "rangeBar", value: function() {
      return { chart: { animations: { animateGradually: !1 } }, stroke: { width: 0, lineCap: "square" }, plotOptions: { bar: { borderRadius: 0, dataLabels: { position: "center" } } }, dataLabels: { enabled: !1, formatter: function(t, e) {
        e.ctx;
        var i = e.seriesIndex, a = e.dataPointIndex, s = e.w, r = function() {
          var o = s.globals.seriesRangeStart[i][a];
          return s.globals.seriesRangeEnd[i][a] - o;
        };
        return s.globals.comboCharts ? s.config.series[i].type === "rangeBar" || s.config.series[i].type === "rangeArea" ? r() : t : r();
      }, background: { enabled: !1 }, style: { colors: ["#fff"] } }, markers: { size: 10 }, tooltip: { shared: !1, followCursor: !0, custom: function(t) {
        return t.w.config.plotOptions && t.w.config.plotOptions.bar && t.w.config.plotOptions.bar.horizontal ? function(e) {
          var i = xt(X(X({}, e), {}, { isTimeline: !0 })), a = i.color, s = i.seriesName, r = i.ylabel, o = i.startVal, n = i.endVal;
          return gt(X(X({}, e), {}, { color: a, seriesName: s, ylabel: r, start: o, end: n }));
        }(t) : function(e) {
          var i = xt(e), a = i.color, s = i.seriesName, r = i.ylabel, o = i.start, n = i.end;
          return gt(X(X({}, e), {}, { color: a, seriesName: s, ylabel: r, start: o, end: n }));
        }(t);
      } }, xaxis: { tickPlacement: "between", tooltip: { enabled: !1 }, crosshairs: { stroke: { width: 0 } } } };
    } }, { key: "dumbbell", value: function(t) {
      var e, i;
      return (e = t.plotOptions.bar) !== null && e !== void 0 && e.barHeight || (t.plotOptions.bar.barHeight = 2), (i = t.plotOptions.bar) !== null && i !== void 0 && i.columnWidth || (t.plotOptions.bar.columnWidth = 2), t;
    } }, { key: "area", value: function() {
      return { stroke: { width: 4, fill: { type: "solid", gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } } }, fill: { type: "gradient", gradient: { inverseColors: !1, shade: "light", type: "vertical", opacityFrom: 0.65, opacityTo: 0.5, stops: [0, 100, 100] } }, markers: { size: 0, hover: { sizeOffset: 6 } }, tooltip: { followCursor: !1 } };
    } }, { key: "rangeArea", value: function() {
      return { stroke: { curve: "straight", width: 0 }, fill: { type: "solid", opacity: 0.6 }, markers: { size: 0 }, states: { hover: { filter: { type: "none" } }, active: { filter: { type: "none" } } }, tooltip: { intersect: !1, shared: !0, followCursor: !0, custom: function(t) {
        return function(e) {
          var i = xt(e), a = i.color, s = i.seriesName, r = i.ylabel, o = i.start, n = i.end;
          return gt(X(X({}, e), {}, { color: a, seriesName: s, ylabel: r, start: o, end: n }));
        }(t);
      } } };
    } }, { key: "brush", value: function(t) {
      return P.extend(t, { chart: { toolbar: { autoSelected: "selection", show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 }, stroke: { width: 1 }, tooltip: { enabled: !1 }, xaxis: { tooltip: { enabled: !1 } } });
    } }, { key: "stacked100", value: function(t) {
      t.dataLabels = t.dataLabels || {}, t.dataLabels.formatter = t.dataLabels.formatter || void 0;
      var e = t.dataLabels.formatter;
      return t.yaxis.forEach(function(i, a) {
        t.yaxis[a].min = 0, t.yaxis[a].max = 100;
      }), t.chart.type === "bar" && (t.dataLabels.formatter = e || function(i) {
        return typeof i == "number" && i ? i.toFixed(0) + "%" : i;
      }), t;
    } }, { key: "stackedBars", value: function() {
      var t = this.bar();
      return X(X({}, t), {}, { plotOptions: X(X({}, t.plotOptions), {}, { bar: X(X({}, t.plotOptions.bar), {}, { borderRadiusApplication: "end", borderRadiusWhenStacked: "last" }) }) });
    } }, { key: "convertCatToNumeric", value: function(t) {
      return t.xaxis.convertedCatToNumeric = !0, t;
    } }, { key: "convertCatToNumericXaxis", value: function(t, e, i) {
      t.xaxis.type = "numeric", t.xaxis.labels = t.xaxis.labels || {}, t.xaxis.labels.formatter = t.xaxis.labels.formatter || function(r) {
        return P.isNumber(r) ? Math.floor(r) : r;
      };
      var a = t.xaxis.labels.formatter, s = t.xaxis.categories && t.xaxis.categories.length ? t.xaxis.categories : t.labels;
      return i && i.length && (s = i.map(function(r) {
        return Array.isArray(r) ? r : String(r);
      })), s && s.length && (t.xaxis.labels.formatter = function(r) {
        return P.isNumber(r) ? a(s[Math.floor(r) - 1]) : a(r);
      }), t.xaxis.categories = [], t.labels = [], t.xaxis.tickAmount = t.xaxis.tickAmount || "dataPoints", t;
    } }, { key: "bubble", value: function() {
      return { dataLabels: { style: { colors: ["#fff"] } }, tooltip: { shared: !1, intersect: !0 }, xaxis: { crosshairs: { width: 0 } }, fill: { type: "solid", gradient: { shade: "light", inverse: !0, shadeIntensity: 0.55, opacityFrom: 0.4, opacityTo: 0.8 } } };
    } }, { key: "scatter", value: function() {
      return { dataLabels: { enabled: !1 }, tooltip: { shared: !1, intersect: !0 }, markers: { size: 6, strokeWidth: 1, hover: { sizeOffset: 2 } } };
    } }, { key: "heatmap", value: function() {
      return { chart: { stacked: !1 }, fill: { opacity: 1 }, dataLabels: { style: { colors: ["#fff"] } }, stroke: { colors: ["#fff"] }, tooltip: { followCursor: !0, marker: { show: !1 }, x: { show: !1 } }, legend: { position: "top", markers: { shape: "square", size: 10, offsetY: 2 } }, grid: { padding: { right: 20 } } };
    } }, { key: "treemap", value: function() {
      return { chart: { zoom: { enabled: !1 } }, dataLabels: { style: { fontSize: 14, fontWeight: 600, colors: ["#fff"] } }, stroke: { show: !0, width: 2, colors: ["#fff"] }, legend: { show: !1 }, fill: { gradient: { stops: [0, 100] } }, tooltip: { followCursor: !0, x: { show: !1 } }, grid: { padding: { left: 0, right: 0 } }, xaxis: { crosshairs: { show: !1 }, tooltip: { enabled: !1 } } };
    } }, { key: "pie", value: function() {
      return { chart: { toolbar: { show: !1 } }, plotOptions: { pie: { donut: { labels: { show: !1 } } } }, dataLabels: { formatter: function(t) {
        return t.toFixed(1) + "%";
      }, style: { colors: ["#fff"] }, background: { enabled: !1 }, dropShadow: { enabled: !0 } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", stops: [0, 100] } }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" } };
    } }, { key: "donut", value: function() {
      return { chart: { toolbar: { show: !1 } }, dataLabels: { formatter: function(t) {
        return t.toFixed(1) + "%";
      }, style: { colors: ["#fff"] }, background: { enabled: !1 }, dropShadow: { enabled: !0 } }, stroke: { colors: ["#fff"] }, fill: { opacity: 1, gradient: { shade: "light", shadeIntensity: 0.35, stops: [80, 100], opacityFrom: 1, opacityTo: 1 } }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" } };
    } }, { key: "polarArea", value: function() {
      return this.opts.yaxis[0].tickAmount = this.opts.yaxis[0].tickAmount ? this.opts.yaxis[0].tickAmount : 6, { chart: { toolbar: { show: !1 } }, dataLabels: { formatter: function(t) {
        return t.toFixed(1) + "%";
      }, enabled: !1 }, stroke: { show: !0, width: 2 }, fill: { opacity: 0.7 }, tooltip: { theme: "dark", fillSeriesColor: !0 }, legend: { position: "right" } };
    } }, { key: "radar", value: function() {
      return this.opts.yaxis[0].labels.offsetY = this.opts.yaxis[0].labels.offsetY ? this.opts.yaxis[0].labels.offsetY : 6, { dataLabels: { enabled: !1, style: { fontSize: "11px" } }, stroke: { width: 2 }, markers: { size: 3, strokeWidth: 1, strokeOpacity: 1 }, fill: { opacity: 0.2 }, tooltip: { shared: !1, intersect: !0, followCursor: !0 }, grid: { show: !1 }, xaxis: { labels: { formatter: function(t) {
        return t;
      }, style: { colors: ["#a8a8a8"], fontSize: "11px" } }, tooltip: { enabled: !1 }, crosshairs: { show: !1 } } };
    } }, { key: "radialBar", value: function() {
      return { chart: { animations: { dynamicAnimation: { enabled: !0, speed: 800 } }, toolbar: { show: !1 } }, fill: { gradient: { shade: "dark", shadeIntensity: 0.4, inverseColors: !1, type: "diagonal2", opacityFrom: 1, opacityTo: 1, stops: [70, 98, 100] } }, legend: { show: !1, position: "right" }, tooltip: { enabled: !1, fillSeriesColor: !0 } };
    } }, { key: "_getBoxTooltip", value: function(t, e, i, a, s) {
      var r = t.globals.seriesCandleO[e][i], o = t.globals.seriesCandleH[e][i], n = t.globals.seriesCandleM[e][i], h = t.globals.seriesCandleL[e][i], c = t.globals.seriesCandleC[e][i];
      return t.config.series[e].type && t.config.series[e].type !== s ? `<div class="apexcharts-custom-tooltip">
          `.concat(t.config.series[e].name ? t.config.series[e].name : "series-" + (e + 1), ": <strong>").concat(t.globals.series[e][i], `</strong>
        </div>`) : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t.config.chart.type, '">') + "<div>".concat(a[0], ': <span class="value">') + r + "</span></div>" + "<div>".concat(a[1], ': <span class="value">') + o + "</span></div>" + (n ? "<div>".concat(a[2], ': <span class="value">') + n + "</span></div>" : "") + "<div>".concat(a[3], ': <span class="value">') + h + "</span></div>" + "<div>".concat(a[4], ': <span class="value">') + c + "</span></div></div>";
    } }]), y;
  }(), Mt = function() {
    function y(t) {
      Y(this, y), this.opts = t;
    }
    return F(y, [{ key: "init", value: function(t) {
      var e = t.responsiveOverride, i = this.opts, a = new B(), s = new ot(i);
      this.chartType = i.chart.type, i = this.extendYAxis(i), i = this.extendAnnotations(i);
      var r = a.init(), o = {};
      if (i && U(i) === "object") {
        var n, h, c, d, g, p, f, b, m = {};
        m = ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "rangeArea", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(i.chart.type) !== -1 ? s[i.chart.type]() : s.line(), (n = i.plotOptions) !== null && n !== void 0 && (h = n.bar) !== null && h !== void 0 && h.isFunnel && (m = s.funnel()), i.chart.stacked && i.chart.type === "bar" && (m = s.stackedBars()), (c = i.chart.brush) !== null && c !== void 0 && c.enabled && (m = s.brush(m)), i.chart.stacked && i.chart.stackType === "100%" && (i = s.stacked100(i)), (d = i.plotOptions) !== null && d !== void 0 && (g = d.bar) !== null && g !== void 0 && g.isDumbbell && (i = s.dumbbell(i)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(i), i.xaxis = i.xaxis || window.Apex.xaxis || {}, e || (i.xaxis.convertedCatToNumeric = !1), ((p = (i = this.checkForCatToNumericXAxis(this.chartType, m, i)).chart.sparkline) !== null && p !== void 0 && p.enabled || (f = window.Apex.chart) !== null && f !== void 0 && (b = f.sparkline) !== null && b !== void 0 && b.enabled) && (m = s.sparkline(m)), o = P.extend(r, m);
      }
      var w = P.extend(o, window.Apex);
      return r = P.extend(w, i), r = this.handleUserInputErrors(r);
    } }, { key: "checkForCatToNumericXAxis", value: function(t, e, i) {
      var a, s, r = new ot(i), o = (t === "bar" || t === "boxPlot") && ((a = i.plotOptions) === null || a === void 0 || (s = a.bar) === null || s === void 0 ? void 0 : s.horizontal), n = t === "pie" || t === "polarArea" || t === "donut" || t === "radar" || t === "radialBar" || t === "heatmap", h = i.xaxis.type !== "datetime" && i.xaxis.type !== "numeric", c = i.xaxis.tickPlacement ? i.xaxis.tickPlacement : e.xaxis && e.xaxis.tickPlacement;
      return o || n || !h || c === "between" || (i = r.convertCatToNumeric(i)), i;
    } }, { key: "extendYAxis", value: function(t, e) {
      var i = new B();
      (t.yaxis === void 0 || !t.yaxis || Array.isArray(t.yaxis) && t.yaxis.length === 0) && (t.yaxis = {}), t.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (t.yaxis = P.extend(t.yaxis, window.Apex.yaxis)), t.yaxis.constructor !== Array ? t.yaxis = [P.extend(i.yAxis, t.yaxis)] : t.yaxis = P.extendArray(t.yaxis, i.yAxis);
      var a = !1;
      t.yaxis.forEach(function(r) {
        r.logarithmic && (a = !0);
      });
      var s = t.series;
      return e && !s && (s = e.config.series), a && s.length !== t.yaxis.length && s.length && (t.yaxis = s.map(function(r, o) {
        if (r.name || (s[o].name = "series-".concat(o + 1)), t.yaxis[o])
          return t.yaxis[o].seriesName = s[o].name, t.yaxis[o];
        var n = P.extend(i.yAxis, t.yaxis[0]);
        return n.show = !1, n;
      })), a && s.length > 1 && s.length !== t.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes"), t;
    } }, { key: "extendAnnotations", value: function(t) {
      return t.annotations === void 0 && (t.annotations = {}, t.annotations.yaxis = [], t.annotations.xaxis = [], t.annotations.points = []), t = this.extendYAxisAnnotations(t), t = this.extendXAxisAnnotations(t), t = this.extendPointAnnotations(t);
    } }, { key: "extendYAxisAnnotations", value: function(t) {
      var e = new B();
      return t.annotations.yaxis = P.extendArray(t.annotations.yaxis !== void 0 ? t.annotations.yaxis : [], e.yAxisAnnotation), t;
    } }, { key: "extendXAxisAnnotations", value: function(t) {
      var e = new B();
      return t.annotations.xaxis = P.extendArray(t.annotations.xaxis !== void 0 ? t.annotations.xaxis : [], e.xAxisAnnotation), t;
    } }, { key: "extendPointAnnotations", value: function(t) {
      var e = new B();
      return t.annotations.points = P.extendArray(t.annotations.points !== void 0 ? t.annotations.points : [], e.pointAnnotation), t;
    } }, { key: "checkForDarkTheme", value: function(t) {
      t.theme && t.theme.mode === "dark" && (t.tooltip || (t.tooltip = {}), t.tooltip.theme !== "light" && (t.tooltip.theme = "dark"), t.chart.foreColor || (t.chart.foreColor = "#f6f7f8"), t.chart.background || (t.chart.background = "#424242"), t.theme.palette || (t.theme.palette = "palette4"));
    } }, { key: "handleUserInputErrors", value: function(t) {
      var e = t;
      if (e.tooltip.shared && e.tooltip.intersect)
        throw new Error("tooltip.shared cannot be enabled when tooltip.intersect is true. Turn off any other option by setting it to false.");
      if (e.chart.type === "bar" && e.plotOptions.bar.horizontal) {
        if (e.yaxis.length > 1)
          throw new Error("Multiple Y Axis for bars are not supported. Switch to column chart by setting plotOptions.bar.horizontal=false");
        e.yaxis[0].reversed && (e.yaxis[0].opposite = !0), e.xaxis.tooltip.enabled = !1, e.yaxis[0].tooltip.enabled = !1, e.chart.zoom.enabled = !1;
      }
      return e.chart.type !== "bar" && e.chart.type !== "rangeBar" || e.tooltip.shared && e.xaxis.crosshairs.width === "barWidth" && e.series.length > 1 && (e.xaxis.crosshairs.width = "tickWidth"), e.chart.type !== "candlestick" && e.chart.type !== "boxPlot" || e.yaxis[0].reversed && (console.warn("Reversed y-axis in ".concat(e.chart.type, " chart is not supported.")), e.yaxis[0].reversed = !1), e;
    } }]), y;
  }(), Jt = function() {
    function y() {
      Y(this, y);
    }
    return F(y, [{ key: "initGlobalVars", value: function(t) {
      t.series = [], t.seriesCandleO = [], t.seriesCandleH = [], t.seriesCandleM = [], t.seriesCandleL = [], t.seriesCandleC = [], t.seriesRangeStart = [], t.seriesRangeEnd = [], t.seriesRange = [], t.seriesPercent = [], t.seriesGoals = [], t.seriesX = [], t.seriesZ = [], t.seriesNames = [], t.seriesTotals = [], t.seriesLog = [], t.seriesColors = [], t.stackedSeriesTotals = [], t.seriesXvalues = [], t.seriesYvalues = [], t.labels = [], t.hasXaxisGroups = !1, t.groups = [], t.hasSeriesGroups = !1, t.seriesGroups = [], t.categoryLabels = [], t.timescaleLabels = [], t.noLabelsProvided = !1, t.resizeTimer = null, t.selectionResizeTimer = null, t.delayedElements = [], t.pointsArray = [], t.dataLabelsRects = [], t.isXNumeric = !1, t.skipLastTimelinelabel = !1, t.skipFirstTimelinelabel = !1, t.isDataXYZ = !1, t.isMultiLineX = !1, t.isMultipleYAxis = !1, t.maxY = -Number.MAX_VALUE, t.minY = Number.MIN_VALUE, t.minYArr = [], t.maxYArr = [], t.maxX = -Number.MAX_VALUE, t.minX = Number.MAX_VALUE, t.initialMaxX = -Number.MAX_VALUE, t.initialMinX = Number.MAX_VALUE, t.maxDate = 0, t.minDate = Number.MAX_VALUE, t.minZ = Number.MAX_VALUE, t.maxZ = -Number.MAX_VALUE, t.minXDiff = Number.MAX_VALUE, t.yAxisScale = [], t.xAxisScale = null, t.xAxisTicksPositions = [], t.yLabelsCoords = [], t.yTitleCoords = [], t.barPadForNumericAxis = 0, t.padHorizontal = 0, t.xRange = 0, t.yRange = [], t.zRange = 0, t.dataPoints = 0, t.xTickAmount = 0;
    } }, { key: "globalVars", value: function(t) {
      return { chartID: null, cuid: null, events: { beforeMount: [], mounted: [], updated: [], clicked: [], selection: [], dataPointSelection: [], zoomed: [], scrolled: [] }, colors: [], clientX: null, clientY: null, fill: { colors: [] }, stroke: { colors: [] }, dataLabels: { style: { colors: [] } }, radarPolygons: { fill: { colors: [] } }, markers: { colors: [], size: t.markers.size, largestSize: 0 }, animationEnded: !1, isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints, isDirty: !1, isExecCalled: !1, initialConfig: null, initialSeries: [], lastXAxis: [], lastYAxis: [], columnSeries: null, labels: [], timescaleLabels: [], noLabelsProvided: !1, allSeriesCollapsed: !1, collapsedSeries: [], collapsedSeriesIndices: [], ancillaryCollapsedSeries: [], ancillaryCollapsedSeriesIndices: [], risingSeries: [], dataFormatXNumeric: !1, capturedSeriesIndex: -1, capturedDataPointIndex: -1, selectedDataPoints: [], goldenPadding: 35, invalidLogScale: !1, ignoreYAxisIndexes: [], yAxisSameScaleIndices: [], maxValsInArrayIndex: 0, radialSize: 0, selection: void 0, zoomEnabled: t.chart.toolbar.autoSelected === "zoom" && t.chart.toolbar.tools.zoom && t.chart.zoom.enabled, panEnabled: t.chart.toolbar.autoSelected === "pan" && t.chart.toolbar.tools.pan, selectionEnabled: t.chart.toolbar.autoSelected === "selection" && t.chart.toolbar.tools.selection, yaxis: null, mousedown: !1, lastClientPosition: {}, visibleXRange: void 0, yValueDecimal: 0, total: 0, SVGNS: "http://www.w3.org/2000/svg", svgWidth: 0, svgHeight: 0, noData: !1, locale: {}, dom: {}, memory: { methodsToExec: [] }, shouldAnimate: !0, skipLastTimelinelabel: !1, skipFirstTimelinelabel: !1, delayedElements: [], axisCharts: !0, isDataXYZ: !1, resized: !1, resizeTimer: null, comboCharts: !1, dataChanged: !1, previousPaths: [], allSeriesHasEqualX: !0, pointsArray: [], dataLabelsRects: [], lastDrawnDataLabelsIndexes: [], hasNullValues: !1, easing: null, zoomed: !1, gridWidth: 0, gridHeight: 0, rotateXLabels: !1, defaultLabels: !1, xLabelFormatter: void 0, yLabelFormatters: [], xaxisTooltipFormatter: void 0, ttKeyFormatter: void 0, ttVal: void 0, ttZFormatter: void 0, LINE_HEIGHT_RATIO: 1.618, xAxisLabelsHeight: 0, xAxisGroupLabelsHeight: 0, xAxisLabelsWidth: 0, yAxisLabelsWidth: 0, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, translateYAxisX: [], yAxisWidths: [], translateXAxisY: 0, translateXAxisX: 0, tooltip: null };
    } }, { key: "init", value: function(t) {
      var e = this.globalVars(t);
      return this.initGlobalVars(e), e.initialConfig = P.extend({}, t), e.initialSeries = P.clone(t.series), e.lastXAxis = P.clone(e.initialConfig.xaxis), e.lastYAxis = P.clone(e.initialConfig.yaxis), e;
    } }]), y;
  }(), me = function() {
    function y(t) {
      Y(this, y), this.opts = t;
    }
    return F(y, [{ key: "init", value: function() {
      var t = new Mt(this.opts).init({ responsiveOverride: !1 });
      return { config: t, globals: new Jt().init(t) };
    } }]), y;
  }(), at = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w, this.opts = null, this.seriesIndex = 0;
    }
    return F(y, [{ key: "clippedImgArea", value: function(t) {
      var e = this.w, i = e.config, a = parseInt(e.globals.gridWidth, 10), s = parseInt(e.globals.gridHeight, 10), r = a > s ? a : s, o = t.image, n = 0, h = 0;
      t.width === void 0 && t.height === void 0 ? i.fill.image.width !== void 0 && i.fill.image.height !== void 0 ? (n = i.fill.image.width + 1, h = i.fill.image.height) : (n = r + 1, h = r) : (n = t.width, h = t.height);
      var c = document.createElementNS(e.globals.SVGNS, "pattern");
      z.setAttrs(c, { id: t.patternID, patternUnits: t.patternUnits ? t.patternUnits : "userSpaceOnUse", width: n + "px", height: h + "px" });
      var d = document.createElementNS(e.globals.SVGNS, "image");
      c.appendChild(d), d.setAttributeNS(window.SVG.xlink, "href", o), z.setAttrs(d, { x: 0, y: 0, preserveAspectRatio: "none", width: n + "px", height: h + "px" }), d.style.opacity = t.opacity, e.globals.dom.elDefs.node.appendChild(c);
    } }, { key: "getSeriesIndex", value: function(t) {
      var e = this.w, i = e.config.chart.type;
      return (i === "bar" || i === "rangeBar") && e.config.plotOptions.bar.distributed || i === "heatmap" || i === "treemap" ? this.seriesIndex = t.seriesNumber : this.seriesIndex = t.seriesNumber % e.globals.series.length, this.seriesIndex;
    } }, { key: "fillPath", value: function(t) {
      var e = this.w;
      this.opts = t;
      var i, a, s, r = this.w.config;
      this.seriesIndex = this.getSeriesIndex(t);
      var o = this.getFillColors()[this.seriesIndex];
      e.globals.seriesColors[this.seriesIndex] !== void 0 && (o = e.globals.seriesColors[this.seriesIndex]), typeof o == "function" && (o = o({ seriesIndex: this.seriesIndex, dataPointIndex: t.dataPointIndex, value: t.value, w: e }));
      var n = t.fillType ? t.fillType : this.getFillType(this.seriesIndex), h = Array.isArray(r.fill.opacity) ? r.fill.opacity[this.seriesIndex] : r.fill.opacity;
      t.color && (o = t.color), o || (o = "#fff", console.warn("undefined color - ApexCharts"));
      var c = o;
      if (o.indexOf("rgb") === -1 ? o.length < 9 && (c = P.hexToRgba(o, h)) : o.indexOf("rgba") > -1 && (h = P.getOpacityFromRGBA(o)), t.opacity && (h = t.opacity), n === "pattern" && (a = this.handlePatternFill({ fillConfig: t.fillConfig, patternFill: a, fillColor: o, fillOpacity: h, defaultColor: c })), n === "gradient" && (s = this.handleGradientFill({ fillConfig: t.fillConfig, fillColor: o, fillOpacity: h, i: this.seriesIndex })), n === "image") {
        var d = r.fill.image.src, g = t.patternID ? t.patternID : "";
        this.clippedImgArea({ opacity: h, image: Array.isArray(d) ? t.seriesNumber < d.length ? d[t.seriesNumber] : d[0] : d, width: t.width ? t.width : void 0, height: t.height ? t.height : void 0, patternUnits: t.patternUnits, patternID: "pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(g) }), i = "url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(g, ")");
      } else
        i = n === "gradient" ? s : n === "pattern" ? a : c;
      return t.solid && (i = c), i;
    } }, { key: "getFillType", value: function(t) {
      var e = this.w;
      return Array.isArray(e.config.fill.type) ? e.config.fill.type[t] : e.config.fill.type;
    } }, { key: "getFillColors", value: function() {
      var t = this.w, e = t.config, i = this.opts, a = [];
      return t.globals.comboCharts ? t.config.series[this.seriesIndex].type === "line" ? Array.isArray(t.globals.stroke.colors) ? a = t.globals.stroke.colors : a.push(t.globals.stroke.colors) : Array.isArray(t.globals.fill.colors) ? a = t.globals.fill.colors : a.push(t.globals.fill.colors) : e.chart.type === "line" ? Array.isArray(t.globals.stroke.colors) ? a = t.globals.stroke.colors : a.push(t.globals.stroke.colors) : Array.isArray(t.globals.fill.colors) ? a = t.globals.fill.colors : a.push(t.globals.fill.colors), i.fillColors !== void 0 && (a = [], Array.isArray(i.fillColors) ? a = i.fillColors.slice() : a.push(i.fillColors)), a;
    } }, { key: "handlePatternFill", value: function(t) {
      var e = t.fillConfig, i = t.patternFill, a = t.fillColor, s = t.fillOpacity, r = t.defaultColor, o = this.w.config.fill;
      e && (o = e);
      var n = this.opts, h = new z(this.ctx), c = Array.isArray(o.pattern.strokeWidth) ? o.pattern.strokeWidth[this.seriesIndex] : o.pattern.strokeWidth, d = a;
      return Array.isArray(o.pattern.style) ? i = o.pattern.style[n.seriesNumber] !== void 0 ? h.drawPattern(o.pattern.style[n.seriesNumber], o.pattern.width, o.pattern.height, d, c, s) : r : i = h.drawPattern(o.pattern.style, o.pattern.width, o.pattern.height, d, c, s), i;
    } }, { key: "handleGradientFill", value: function(t) {
      var e = t.fillColor, i = t.fillOpacity, a = t.fillConfig, s = t.i, r = this.w.config.fill;
      a && (r = X(X({}, r), a));
      var o, n = this.opts, h = new z(this.ctx), c = new P(), d = r.gradient.type, g = e, p = r.gradient.opacityFrom === void 0 ? i : Array.isArray(r.gradient.opacityFrom) ? r.gradient.opacityFrom[s] : r.gradient.opacityFrom;
      g.indexOf("rgba") > -1 && (p = P.getOpacityFromRGBA(g));
      var f = r.gradient.opacityTo === void 0 ? i : Array.isArray(r.gradient.opacityTo) ? r.gradient.opacityTo[s] : r.gradient.opacityTo;
      if (r.gradient.gradientToColors === void 0 || r.gradient.gradientToColors.length === 0)
        o = r.gradient.shade === "dark" ? c.shadeColor(-1 * parseFloat(r.gradient.shadeIntensity), e.indexOf("rgb") > -1 ? P.rgb2hex(e) : e) : c.shadeColor(parseFloat(r.gradient.shadeIntensity), e.indexOf("rgb") > -1 ? P.rgb2hex(e) : e);
      else if (r.gradient.gradientToColors[n.seriesNumber]) {
        var b = r.gradient.gradientToColors[n.seriesNumber];
        o = b, b.indexOf("rgba") > -1 && (f = P.getOpacityFromRGBA(b));
      } else
        o = e;
      if (r.gradient.gradientFrom && (g = r.gradient.gradientFrom), r.gradient.gradientTo && (o = r.gradient.gradientTo), r.gradient.inverseColors) {
        var m = g;
        g = o, o = m;
      }
      return g.indexOf("rgb") > -1 && (g = P.rgb2hex(g)), o.indexOf("rgb") > -1 && (o = P.rgb2hex(o)), h.drawGradient(d, g, o, p, f, n.size, r.gradient.stops, r.gradient.colorStops, s);
    } }]), y;
  }(), It = function() {
    function y(t, e) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "setGlobalMarkerSize", value: function() {
      var t = this.w;
      if (t.globals.markers.size = Array.isArray(t.config.markers.size) ? t.config.markers.size : [t.config.markers.size], t.globals.markers.size.length > 0) {
        if (t.globals.markers.size.length < t.globals.series.length + 1)
          for (var e = 0; e <= t.globals.series.length; e++)
            t.globals.markers.size[e] === void 0 && t.globals.markers.size.push(t.globals.markers.size[0]);
      } else
        t.globals.markers.size = t.config.series.map(function(i) {
          return t.config.markers.size;
        });
    } }, { key: "plotChartMarkers", value: function(t, e, i, a) {
      var s, r = arguments.length > 4 && arguments[4] !== void 0 && arguments[4], o = this.w, n = e, h = t, c = null, d = new z(this.ctx), g = o.config.markers.discrete && o.config.markers.discrete.length;
      if ((o.globals.markers.size[e] > 0 || r || g) && (c = d.group({ class: r || g ? "" : "apexcharts-series-markers" })).attr("clip-path", "url(#gridRectMarkerMask".concat(o.globals.cuid, ")")), Array.isArray(h.x))
        for (var p = 0; p < h.x.length; p++) {
          var f = i;
          i === 1 && p === 0 && (f = 0), i === 1 && p === 1 && (f = 1);
          var b = "apexcharts-marker";
          if (o.config.chart.type !== "line" && o.config.chart.type !== "area" || o.globals.comboCharts || o.config.tooltip.intersect || (b += " no-pointer-events"), (Array.isArray(o.config.markers.size) ? o.globals.markers.size[e] > 0 : o.config.markers.size > 0) || r || g) {
            P.isNumber(h.y[p]) ? b += " w".concat(P.randomId()) : b = "apexcharts-nullpoint";
            var m = this.getMarkerConfig({ cssClass: b, seriesIndex: e, dataPointIndex: f });
            o.config.series[n].data[f] && (o.config.series[n].data[f].fillColor && (m.pointFillColor = o.config.series[n].data[f].fillColor), o.config.series[n].data[f].strokeColor && (m.pointStrokeColor = o.config.series[n].data[f].strokeColor)), a && (m.pSize = a), (h.x[p] < 0 || h.x[p] > o.globals.gridWidth || h.y[p] < -o.globals.markers.largestSize || h.y[p] > o.globals.gridHeight + o.globals.markers.largestSize) && (m.pSize = 0), (s = d.drawMarker(h.x[p], h.y[p], m)).attr("rel", f), s.attr("j", f), s.attr("index", e), s.node.setAttribute("default-marker-size", m.pSize), new Z(this.ctx).setSelectionFilter(s, e, f), this.addEvents(s), c && c.add(s);
          } else
            o.globals.pointsArray[e] === void 0 && (o.globals.pointsArray[e] = []), o.globals.pointsArray[e].push([h.x[p], h.y[p]]);
        }
      return c;
    } }, { key: "getMarkerConfig", value: function(t) {
      var e = t.cssClass, i = t.seriesIndex, a = t.dataPointIndex, s = a === void 0 ? null : a, r = t.finishRadius, o = r === void 0 ? null : r, n = this.w, h = this.getMarkerStyle(i), c = n.globals.markers.size[i], d = n.config.markers;
      return s !== null && d.discrete.length && d.discrete.map(function(g) {
        g.seriesIndex === i && g.dataPointIndex === s && (h.pointStrokeColor = g.strokeColor, h.pointFillColor = g.fillColor, c = g.size, h.pointShape = g.shape);
      }), { pSize: o === null ? c : o, pRadius: d.radius, width: Array.isArray(d.width) ? d.width[i] : d.width, height: Array.isArray(d.height) ? d.height[i] : d.height, pointStrokeWidth: Array.isArray(d.strokeWidth) ? d.strokeWidth[i] : d.strokeWidth, pointStrokeColor: h.pointStrokeColor, pointFillColor: h.pointFillColor, shape: h.pointShape || (Array.isArray(d.shape) ? d.shape[i] : d.shape), class: e, pointStrokeOpacity: Array.isArray(d.strokeOpacity) ? d.strokeOpacity[i] : d.strokeOpacity, pointStrokeDashArray: Array.isArray(d.strokeDashArray) ? d.strokeDashArray[i] : d.strokeDashArray, pointFillOpacity: Array.isArray(d.fillOpacity) ? d.fillOpacity[i] : d.fillOpacity, seriesIndex: i };
    } }, { key: "addEvents", value: function(t) {
      var e = this.w, i = new z(this.ctx);
      t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this.ctx, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this.ctx, t)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this.ctx, t)), t.node.addEventListener("click", e.config.markers.onClick), t.node.addEventListener("dblclick", e.config.markers.onDblClick), t.node.addEventListener("touchstart", i.pathMouseDown.bind(this.ctx, t), { passive: !0 });
    } }, { key: "getMarkerStyle", value: function(t) {
      var e = this.w, i = e.globals.markers.colors, a = e.config.markers.strokeColor || e.config.markers.strokeColors;
      return { pointStrokeColor: Array.isArray(a) ? a[t] : a, pointFillColor: Array.isArray(i) ? i[t] : i };
    } }]), y;
  }(), Qt = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled;
    }
    return F(y, [{ key: "draw", value: function(t, e, i) {
      var a = this.w, s = new z(this.ctx), r = i.realIndex, o = i.pointsPos, n = i.zRatio, h = i.elParent, c = s.group({ class: "apexcharts-series-markers apexcharts-series-".concat(a.config.chart.type) });
      if (c.attr("clip-path", "url(#gridRectMarkerMask".concat(a.globals.cuid, ")")), Array.isArray(o.x))
        for (var d = 0; d < o.x.length; d++) {
          var g = e + 1, p = !0;
          e === 0 && d === 0 && (g = 0), e === 0 && d === 1 && (g = 1);
          var f = 0, b = a.globals.markers.size[r];
          if (n !== 1 / 0) {
            var m = a.config.plotOptions.bubble;
            b = a.globals.seriesZ[r][g], m.zScaling && (b /= n), m.minBubbleRadius && b < m.minBubbleRadius && (b = m.minBubbleRadius), m.maxBubbleRadius && b > m.maxBubbleRadius && (b = m.maxBubbleRadius);
          }
          a.config.chart.animations.enabled || (f = b);
          var w = o.x[d], A = o.y[d];
          if (f = f || 0, A !== null && a.globals.series[r][g] !== void 0 || (p = !1), p) {
            var l = this.drawPoint(w, A, f, b, r, g, e);
            c.add(l);
          }
          h.add(c);
        }
    } }, { key: "drawPoint", value: function(t, e, i, a, s, r, o) {
      var n = this.w, h = s, c = new dt(this.ctx), d = new Z(this.ctx), g = new at(this.ctx), p = new It(this.ctx), f = new z(this.ctx), b = p.getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: h, dataPointIndex: r, finishRadius: n.config.chart.type === "bubble" || n.globals.comboCharts && n.config.series[s] && n.config.series[s].type === "bubble" ? a : null });
      a = b.pSize;
      var m, w = g.fillPath({ seriesNumber: s, dataPointIndex: r, color: b.pointFillColor, patternUnits: "objectBoundingBox", value: n.globals.series[s][o] });
      if (b.shape === "circle" ? m = f.drawCircle(i) : b.shape !== "square" && b.shape !== "rect" || (m = f.drawRect(0, 0, b.width - b.pointStrokeWidth / 2, b.height - b.pointStrokeWidth / 2, b.pRadius)), n.config.series[h].data[r] && n.config.series[h].data[r].fillColor && (w = n.config.series[h].data[r].fillColor), m.attr({ x: t - b.width / 2 - b.pointStrokeWidth / 2, y: e - b.height / 2 - b.pointStrokeWidth / 2, cx: t, cy: e, fill: w, "fill-opacity": b.pointFillOpacity, stroke: b.pointStrokeColor, r: a, "stroke-width": b.pointStrokeWidth, "stroke-dasharray": b.pointStrokeDashArray, "stroke-opacity": b.pointStrokeOpacity }), n.config.chart.dropShadow.enabled) {
        var A = n.config.chart.dropShadow;
        d.dropShadow(m, A, s);
      }
      if (!this.initialAnim || n.globals.dataChanged || n.globals.resized)
        n.globals.animationEnded = !0;
      else {
        var l = n.config.chart.animations.speed;
        c.animateMarker(m, 0, b.shape === "circle" ? a : { width: b.width, height: b.height }, l, n.globals.easing, function() {
          window.setTimeout(function() {
            c.animationCompleted(m);
          }, 100);
        });
      }
      if (n.globals.dataChanged && b.shape === "circle")
        if (this.dynamicAnim) {
          var u, x, v, k, S = n.config.chart.animations.dynamicAnimation.speed;
          (k = n.globals.previousPaths[s] && n.globals.previousPaths[s][o]) != null && (u = k.x, x = k.y, v = k.r !== void 0 ? k.r : a);
          for (var C = 0; C < n.globals.collapsedSeries.length; C++)
            n.globals.collapsedSeries[C].index === s && (S = 1, a = 0);
          t === 0 && e === 0 && (a = 0), c.animateCircle(m, { cx: u, cy: x, r: v }, { cx: t, cy: e, r: a }, S, n.globals.easing);
        } else
          m.attr({ r: a });
      return m.attr({ rel: r, j: r, index: s, "default-marker-size": a }), d.setSelectionFilter(m, s, r), p.addEvents(m), m.node.classList.add("apexcharts-marker"), m;
    } }, { key: "centerTextInBubble", value: function(t) {
      var e = this.w;
      return { y: t += parseInt(e.config.dataLabels.style.fontSize, 10) / 4 };
    } }]), y;
  }(), kt = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "dataLabelsCorrection", value: function(t, e, i, a, s, r, o) {
      var n = this.w, h = !1, c = new z(this.ctx).getTextRects(i, o), d = c.width, g = c.height;
      e < 0 && (e = 0), e > n.globals.gridHeight + g && (e = n.globals.gridHeight + g / 2), n.globals.dataLabelsRects[a] === void 0 && (n.globals.dataLabelsRects[a] = []), n.globals.dataLabelsRects[a].push({ x: t, y: e, width: d, height: g });
      var p = n.globals.dataLabelsRects[a].length - 2, f = n.globals.lastDrawnDataLabelsIndexes[a] !== void 0 ? n.globals.lastDrawnDataLabelsIndexes[a][n.globals.lastDrawnDataLabelsIndexes[a].length - 1] : 0;
      if (n.globals.dataLabelsRects[a][p] !== void 0) {
        var b = n.globals.dataLabelsRects[a][f];
        (t > b.x + b.width || e > b.y + b.height || e + g < b.y || t + d < b.x) && (h = !0);
      }
      return (s === 0 || r) && (h = !0), { x: t, y: e, textRects: c, drawnextLabel: h };
    } }, { key: "drawDataLabel", value: function(t) {
      var e = this, i = t.type, a = t.pos, s = t.i, r = t.j, o = t.isRangeStart, n = t.strokeWidth, h = n === void 0 ? 2 : n, c = this.w, d = new z(this.ctx), g = c.config.dataLabels, p = 0, f = 0, b = r, m = null;
      if (!g.enabled || !Array.isArray(a.x))
        return m;
      m = d.group({ class: "apexcharts-data-labels" });
      for (var w = 0; w < a.x.length; w++)
        if (p = a.x[w] + g.offsetX, f = a.y[w] + g.offsetY + h, !isNaN(p)) {
          r === 1 && w === 0 && (b = 0), r === 1 && w === 1 && (b = 1);
          var A = c.globals.series[s][b];
          i === "rangeArea" && (A = o ? c.globals.seriesRangeStart[s][b] : c.globals.seriesRangeEnd[s][b]);
          var l = "", u = function(x) {
            return c.config.dataLabels.formatter(x, { ctx: e.ctx, seriesIndex: s, dataPointIndex: b, w: c });
          };
          c.config.chart.type === "bubble" ? (l = u(A = c.globals.seriesZ[s][b]), f = a.y[w], f = new Qt(this.ctx).centerTextInBubble(f, s, b).y) : A !== void 0 && (l = u(A)), this.plotDataLabelsText({ x: p, y: f, text: l, i: s, j: b, parent: m, offsetCorrection: !0, dataLabelsConfig: c.config.dataLabels });
        }
      return m;
    } }, { key: "plotDataLabelsText", value: function(t) {
      var e = this.w, i = new z(this.ctx), a = t.x, s = t.y, r = t.i, o = t.j, n = t.text, h = t.textAnchor, c = t.fontSize, d = t.parent, g = t.dataLabelsConfig, p = t.color, f = t.alwaysDrawDataLabel, b = t.offsetCorrection;
      if (!(Array.isArray(e.config.dataLabels.enabledOnSeries) && e.config.dataLabels.enabledOnSeries.indexOf(r) < 0)) {
        var m = { x: a, y: s, drawnextLabel: !0, textRects: null };
        b && (m = this.dataLabelsCorrection(a, s, n, r, o, f, parseInt(g.style.fontSize, 10))), e.globals.zoomed || (a = m.x, s = m.y), m.textRects && (a < -20 - m.textRects.width || a > e.globals.gridWidth + m.textRects.width + 30) && (n = "");
        var w = e.globals.dataLabels.style.colors[r];
        ((e.config.chart.type === "bar" || e.config.chart.type === "rangeBar") && e.config.plotOptions.bar.distributed || e.config.dataLabels.distributed) && (w = e.globals.dataLabels.style.colors[o]), typeof w == "function" && (w = w({ series: e.globals.series, seriesIndex: r, dataPointIndex: o, w: e })), p && (w = p);
        var A = g.offsetX, l = g.offsetY;
        if (e.config.chart.type !== "bar" && e.config.chart.type !== "rangeBar" || (A = 0, l = 0), m.drawnextLabel) {
          var u = i.drawText({ width: 100, height: parseInt(g.style.fontSize, 10), x: a + A, y: s + l, foreColor: w, textAnchor: h || g.textAnchor, text: n, fontSize: c || g.style.fontSize, fontFamily: g.style.fontFamily, fontWeight: g.style.fontWeight || "normal" });
          if (u.attr({ class: "apexcharts-datalabel", cx: a, cy: s }), g.dropShadow.enabled) {
            var x = g.dropShadow;
            new Z(this.ctx).dropShadow(u, x);
          }
          d.add(u), e.globals.lastDrawnDataLabelsIndexes[r] === void 0 && (e.globals.lastDrawnDataLabelsIndexes[r] = []), e.globals.lastDrawnDataLabelsIndexes[r].push(o);
        }
      }
    } }, { key: "addBackgroundToDataLabel", value: function(t, e) {
      var i = this.w, a = i.config.dataLabels.background, s = a.padding, r = a.padding / 2, o = e.width, n = e.height, h = new z(this.ctx).drawRect(e.x - s, e.y - r / 2, o + 2 * s, n + r, a.borderRadius, i.config.chart.background === "transparent" ? "#fff" : i.config.chart.background, a.opacity, a.borderWidth, a.borderColor);
      return a.dropShadow.enabled && new Z(this.ctx).dropShadow(h, a.dropShadow), h;
    } }, { key: "dataLabelsBackground", value: function() {
      var t = this.w;
      if (t.config.chart.type !== "bubble")
        for (var e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i = 0; i < e.length; i++) {
          var a = e[i], s = a.getBBox(), r = null;
          if (s.width && s.height && (r = this.addBackgroundToDataLabel(a, s)), r) {
            a.parentNode.insertBefore(r.node, a);
            var o = a.getAttribute("fill");
            t.config.chart.animations.enabled && !t.globals.resized && !t.globals.dataChanged ? r.animate().attr({ fill: o }) : r.attr({ fill: o }), a.setAttribute("fill", t.config.dataLabels.background.foreColor);
          }
        }
    } }, { key: "bringForward", value: function() {
      for (var t = this.w, e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i = t.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), a = 0; a < e.length; a++)
        i && i.insertBefore(e[a], i.nextSibling);
    } }]), y;
  }(), et = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w, this.legendInactiveClass = "legend-mouseover-inactive";
    }
    return F(y, [{ key: "getAllSeriesEls", value: function() {
      return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series");
    } }, { key: "getSeriesByName", value: function(t) {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(P.escapeString(t), "']"));
    } }, { key: "isSeriesHidden", value: function(t) {
      var e = this.getSeriesByName(t), i = parseInt(e.getAttribute("data:realIndex"), 10);
      return { isHidden: e.classList.contains("apexcharts-series-collapsed"), realIndex: i };
    } }, { key: "addCollapsedClassToSeries", value: function(t, e) {
      var i = this.w;
      function a(s) {
        for (var r = 0; r < s.length; r++)
          s[r].index === e && t.node.classList.add("apexcharts-series-collapsed");
      }
      a(i.globals.collapsedSeries), a(i.globals.ancillaryCollapsedSeries);
    } }, { key: "toggleSeries", value: function(t) {
      var e = this.isSeriesHidden(t);
      return this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, e.isHidden), e.isHidden;
    } }, { key: "showSeries", value: function(t) {
      var e = this.isSeriesHidden(t);
      e.isHidden && this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, !0);
    } }, { key: "hideSeries", value: function(t) {
      var e = this.isSeriesHidden(t);
      e.isHidden || this.ctx.legend.legendHelpers.toggleDataSeries(e.realIndex, !1);
    } }, { key: "resetSeries", value: function() {
      var t = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], a = this.w, s = P.clone(a.globals.initialSeries);
      a.globals.previousPaths = [], i ? (a.globals.collapsedSeries = [], a.globals.ancillaryCollapsedSeries = [], a.globals.collapsedSeriesIndices = [], a.globals.ancillaryCollapsedSeriesIndices = []) : s = this.emptyCollapsedSeries(s), a.config.series = s, t && (e && (a.globals.zoomed = !1, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled));
    } }, { key: "emptyCollapsedSeries", value: function(t) {
      for (var e = this.w, i = 0; i < t.length; i++)
        e.globals.collapsedSeriesIndices.indexOf(i) > -1 && (t[i].data = []);
      return t;
    } }, { key: "toggleSeriesOnHover", value: function(t, e) {
      var i = this.w;
      e || (e = t.target);
      var a = i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");
      if (t.type === "mousemove") {
        var s = parseInt(e.getAttribute("rel"), 10) - 1, r = null, o = null;
        i.globals.axisCharts || i.config.chart.type === "radialBar" ? i.globals.axisCharts ? (r = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(s, "']")), o = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(s, "']"))) : r = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s + 1, "']")) : r = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(s + 1, "'] path"));
        for (var n = 0; n < a.length; n++)
          a[n].classList.add(this.legendInactiveClass);
        r !== null && (i.globals.axisCharts || r.parentNode.classList.remove(this.legendInactiveClass), r.classList.remove(this.legendInactiveClass), o !== null && o.classList.remove(this.legendInactiveClass));
      } else if (t.type === "mouseout")
        for (var h = 0; h < a.length; h++)
          a[h].classList.remove(this.legendInactiveClass);
    } }, { key: "highlightRangeInSeries", value: function(t, e) {
      var i = this, a = this.w, s = a.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), r = function(n) {
        for (var h = 0; h < s.length; h++)
          s[h].classList[n](i.legendInactiveClass);
      };
      if (t.type === "mousemove") {
        var o = parseInt(e.getAttribute("rel"), 10) - 1;
        r("add"), function(n) {
          for (var h = 0; h < s.length; h++) {
            var c = parseInt(s[h].getAttribute("val"), 10);
            c >= n.from && c <= n.to && s[h].classList.remove(i.legendInactiveClass);
          }
        }(a.config.plotOptions.heatmap.colorScale.ranges[o]);
      } else
        t.type === "mouseout" && r("remove");
    } }, { key: "getActiveConfigSeriesIndex", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "asc", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = this.w, a = 0;
      if (i.config.series.length > 1) {
        for (var s = i.config.series.map(function(o, n) {
          return o.data && o.data.length > 0 && i.globals.collapsedSeriesIndices.indexOf(n) === -1 && (!i.globals.comboCharts || e.length === 0 || e.length && e.indexOf(i.config.series[n].type) > -1) ? n : -1;
        }), r = t === "asc" ? 0 : s.length - 1; t === "asc" ? r < s.length : r >= 0; t === "asc" ? r++ : r--)
          if (s[r] !== -1) {
            a = s[r];
            break;
          }
      }
      return a;
    } }, { key: "getBarSeriesIndices", value: function() {
      return this.w.globals.comboCharts ? this.w.config.series.map(function(t, e) {
        return t.type === "bar" || t.type === "column" ? e : -1;
      }).filter(function(t) {
        return t !== -1;
      }) : this.w.config.series.map(function(t, e) {
        return e;
      });
    } }, { key: "getPreviousPaths", value: function() {
      var t = this.w;
      function e(r, o, n) {
        for (var h = r[o].childNodes, c = { type: n, paths: [], realIndex: r[o].getAttribute("data:realIndex") }, d = 0; d < h.length; d++)
          if (h[d].hasAttribute("pathTo")) {
            var g = h[d].getAttribute("pathTo");
            c.paths.push({ d: g });
          }
        t.globals.previousPaths.push(c);
      }
      t.globals.previousPaths = [], ["line", "area", "bar", "rangebar", "rangeArea", "candlestick", "radar"].forEach(function(r) {
        for (var o, n = (o = r, t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(o, "-series .apexcharts-series"))), h = 0; h < n.length; h++)
          e(n, h, r);
      }), this.handlePrevBubbleScatterPaths("bubble"), this.handlePrevBubbleScatterPaths("scatter");
      var i = t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type, " .apexcharts-series"));
      if (i.length > 0)
        for (var a = function(r) {
          for (var o = t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(r, "'] rect")), n = [], h = function(d) {
            var g = function(f) {
              return o[d].getAttribute(f);
            }, p = { x: parseFloat(g("x")), y: parseFloat(g("y")), width: parseFloat(g("width")), height: parseFloat(g("height")) };
            n.push({ rect: p, color: o[d].getAttribute("color") });
          }, c = 0; c < o.length; c++)
            h(c);
          t.globals.previousPaths.push(n);
        }, s = 0; s < i.length; s++)
          a(s);
      t.globals.axisCharts || (t.globals.previousPaths = t.globals.series);
    } }, { key: "handlePrevBubbleScatterPaths", value: function(t) {
      var e = this.w, i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series"));
      if (i.length > 0)
        for (var a = 0; a < i.length; a++) {
          for (var s = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series[data\\:realIndex='").concat(a, "'] circle")), r = [], o = 0; o < s.length; o++)
            r.push({ x: s[o].getAttribute("cx"), y: s[o].getAttribute("cy"), r: s[o].getAttribute("r") });
          e.globals.previousPaths.push(r);
        }
    } }, { key: "clearPreviousPaths", value: function() {
      var t = this.w;
      t.globals.previousPaths = [], t.globals.allSeriesCollapsed = !1;
    } }, { key: "handleNoData", value: function() {
      var t = this.w, e = t.config.noData, i = new z(this.ctx), a = t.globals.svgWidth / 2, s = t.globals.svgHeight / 2, r = "middle";
      if (t.globals.noData = !0, t.globals.animationEnded = !0, e.align === "left" ? (a = 10, r = "start") : e.align === "right" && (a = t.globals.svgWidth - 10, r = "end"), e.verticalAlign === "top" ? s = 50 : e.verticalAlign === "bottom" && (s = t.globals.svgHeight - 50), a += e.offsetX, s = s + parseInt(e.style.fontSize, 10) + 2 + e.offsetY, e.text !== void 0 && e.text !== "") {
        var o = i.drawText({ x: a, y: s, text: e.text, textAnchor: r, fontSize: e.style.fontSize, fontFamily: e.style.fontFamily, foreColor: e.style.color, opacity: 1, class: "apexcharts-text-nodata" });
        t.globals.dom.Paper.add(o);
      }
    } }, { key: "setNullSeriesToZeroValues", value: function(t) {
      for (var e = this.w, i = 0; i < t.length; i++)
        if (t[i].length === 0)
          for (var a = 0; a < t[e.globals.maxValsInArrayIndex].length; a++)
            t[i].push(0);
      return t;
    } }, { key: "hasAllSeriesEqualX", value: function() {
      for (var t = !0, e = this.w, i = this.filteredSeriesX(), a = 0; a < i.length - 1; a++)
        if (i[a][0] !== i[a + 1][0]) {
          t = !1;
          break;
        }
      return e.globals.allSeriesHasEqualX = t, t;
    } }, { key: "filteredSeriesX", value: function() {
      var t = this.w.globals.seriesX.map(function(e) {
        return e.length > 0 ? e : [];
      });
      return t;
    } }]), y;
  }(), Kt = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new q(this.ctx);
    }
    return F(y, [{ key: "isMultiFormat", value: function() {
      return this.isFormatXY() || this.isFormat2DArray();
    } }, { key: "isFormatXY", value: function() {
      var t = this.w.config.series.slice(), e = new et(this.ctx);
      if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), t[this.activeSeriesIndex].data !== void 0 && t[this.activeSeriesIndex].data.length > 0 && t[this.activeSeriesIndex].data[0] !== null && t[this.activeSeriesIndex].data[0].x !== void 0 && t[this.activeSeriesIndex].data[0] !== null)
        return !0;
    } }, { key: "isFormat2DArray", value: function() {
      var t = this.w.config.series.slice(), e = new et(this.ctx);
      if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), t[this.activeSeriesIndex].data !== void 0 && t[this.activeSeriesIndex].data.length > 0 && t[this.activeSeriesIndex].data[0] !== void 0 && t[this.activeSeriesIndex].data[0] !== null && t[this.activeSeriesIndex].data[0].constructor === Array)
        return !0;
    } }, { key: "handleFormat2DArray", value: function(t, e) {
      for (var i = this.w.config, a = this.w.globals, s = i.chart.type === "boxPlot" || i.series[e].type === "boxPlot", r = 0; r < t[e].data.length; r++)
        if (t[e].data[r][1] !== void 0 && (Array.isArray(t[e].data[r][1]) && t[e].data[r][1].length === 4 && !s ? this.twoDSeries.push(P.parseNumber(t[e].data[r][1][3])) : t[e].data[r].length >= 5 ? this.twoDSeries.push(P.parseNumber(t[e].data[r][4])) : this.twoDSeries.push(P.parseNumber(t[e].data[r][1])), a.dataFormatXNumeric = !0), i.xaxis.type === "datetime") {
          var o = new Date(t[e].data[r][0]);
          o = new Date(o).getTime(), this.twoDSeriesX.push(o);
        } else
          this.twoDSeriesX.push(t[e].data[r][0]);
      for (var n = 0; n < t[e].data.length; n++)
        t[e].data[n][2] !== void 0 && (this.threeDSeries.push(t[e].data[n][2]), a.isDataXYZ = !0);
    } }, { key: "handleFormatXY", value: function(t, e) {
      var i = this.w.config, a = this.w.globals, s = new G(this.ctx), r = e;
      a.collapsedSeriesIndices.indexOf(e) > -1 && (r = this.activeSeriesIndex);
      for (var o = 0; o < t[e].data.length; o++)
        t[e].data[o].y !== void 0 && (Array.isArray(t[e].data[o].y) ? this.twoDSeries.push(P.parseNumber(t[e].data[o].y[t[e].data[o].y.length - 1])) : this.twoDSeries.push(P.parseNumber(t[e].data[o].y))), t[e].data[o].goals !== void 0 && Array.isArray(t[e].data[o].goals) ? (this.seriesGoals[e] === void 0 && (this.seriesGoals[e] = []), this.seriesGoals[e].push(t[e].data[o].goals)) : (this.seriesGoals[e] === void 0 && (this.seriesGoals[e] = []), this.seriesGoals[e].push(null));
      for (var n = 0; n < t[r].data.length; n++) {
        var h = typeof t[r].data[n].x == "string", c = Array.isArray(t[r].data[n].x), d = !c && !!s.isValidDate(t[r].data[n].x);
        if (h || d)
          if (h || i.xaxis.convertedCatToNumeric) {
            var g = a.isBarHorizontal && a.isRangeData;
            i.xaxis.type !== "datetime" || g ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t[r].data[n].x), isNaN(t[r].data[n].x) || this.w.config.xaxis.type === "category" || typeof t[r].data[n].x == "string" || (a.isXNumeric = !0)) : this.twoDSeriesX.push(s.parseDate(t[r].data[n].x));
          } else
            i.xaxis.type === "datetime" ? this.twoDSeriesX.push(s.parseDate(t[r].data[n].x.toString())) : (a.dataFormatXNumeric = !0, a.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(t[r].data[n].x)));
        else
          c ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t[r].data[n].x)) : (a.isXNumeric = !0, a.dataFormatXNumeric = !0, this.twoDSeriesX.push(t[r].data[n].x));
      }
      if (t[e].data[0] && t[e].data[0].z !== void 0) {
        for (var p = 0; p < t[e].data.length; p++)
          this.threeDSeries.push(t[e].data[p].z);
        a.isDataXYZ = !0;
      }
    } }, { key: "handleRangeData", value: function(t, e) {
      var i = this.w.globals, a = {};
      return this.isFormat2DArray() ? a = this.handleRangeDataFormat("array", t, e) : this.isFormatXY() && (a = this.handleRangeDataFormat("xy", t, e)), i.seriesRangeStart.push(a.start), i.seriesRangeEnd.push(a.end), i.seriesRange.push(a.rangeUniques), i.seriesRange.forEach(function(s, r) {
        s && s.forEach(function(o, n) {
          o.y.forEach(function(h, c) {
            for (var d = 0; d < o.y.length; d++)
              if (c !== d) {
                var g = h.y1, p = h.y2, f = o.y[d].y1;
                g <= o.y[d].y2 && f <= p && (o.overlaps.indexOf(h.rangeName) < 0 && o.overlaps.push(h.rangeName), o.overlaps.indexOf(o.y[d].rangeName) < 0 && o.overlaps.push(o.y[d].rangeName));
              }
          });
        });
      }), a;
    } }, { key: "handleCandleStickBoxData", value: function(t, e) {
      var i = this.w.globals, a = {};
      return this.isFormat2DArray() ? a = this.handleCandleStickBoxDataFormat("array", t, e) : this.isFormatXY() && (a = this.handleCandleStickBoxDataFormat("xy", t, e)), i.seriesCandleO[e] = a.o, i.seriesCandleH[e] = a.h, i.seriesCandleM[e] = a.m, i.seriesCandleL[e] = a.l, i.seriesCandleC[e] = a.c, a;
    } }, { key: "handleRangeDataFormat", value: function(t, e, i) {
      var a = [], s = [], r = e[i].data.filter(function(c, d, g) {
        return d === g.findIndex(function(p) {
          return p.x === c.x;
        });
      }).map(function(c, d) {
        return { x: c.x, overlaps: [], y: [] };
      });
      if (t === "array")
        for (var o = 0; o < e[i].data.length; o++)
          Array.isArray(e[i].data[o]) ? (a.push(e[i].data[o][1][0]), s.push(e[i].data[o][1][1])) : (a.push(e[i].data[o]), s.push(e[i].data[o]));
      else if (t === "xy")
        for (var n = function(c) {
          var d = Array.isArray(e[i].data[c].y), g = P.randomId(), p = e[i].data[c].x, f = { y1: d ? e[i].data[c].y[0] : e[i].data[c].y, y2: d ? e[i].data[c].y[1] : e[i].data[c].y, rangeName: g };
          e[i].data[c].rangeName = g;
          var b = r.findIndex(function(m) {
            return m.x === p;
          });
          r[b].y.push(f), a.push(f.y1), s.push(f.y2);
        }, h = 0; h < e[i].data.length; h++)
          n(h);
      return { start: a, end: s, rangeUniques: r };
    } }, { key: "handleCandleStickBoxDataFormat", value: function(t, e, i) {
      var a = this.w, s = a.config.chart.type === "boxPlot" || a.config.series[i].type === "boxPlot", r = [], o = [], n = [], h = [], c = [];
      if (t === "array")
        if (s && e[i].data[0].length === 6 || !s && e[i].data[0].length === 5)
          for (var d = 0; d < e[i].data.length; d++)
            r.push(e[i].data[d][1]), o.push(e[i].data[d][2]), s ? (n.push(e[i].data[d][3]), h.push(e[i].data[d][4]), c.push(e[i].data[d][5])) : (h.push(e[i].data[d][3]), c.push(e[i].data[d][4]));
        else
          for (var g = 0; g < e[i].data.length; g++)
            Array.isArray(e[i].data[g][1]) && (r.push(e[i].data[g][1][0]), o.push(e[i].data[g][1][1]), s ? (n.push(e[i].data[g][1][2]), h.push(e[i].data[g][1][3]), c.push(e[i].data[g][1][4])) : (h.push(e[i].data[g][1][2]), c.push(e[i].data[g][1][3])));
      else if (t === "xy")
        for (var p = 0; p < e[i].data.length; p++)
          Array.isArray(e[i].data[p].y) && (r.push(e[i].data[p].y[0]), o.push(e[i].data[p].y[1]), s ? (n.push(e[i].data[p].y[2]), h.push(e[i].data[p].y[3]), c.push(e[i].data[p].y[4])) : (h.push(e[i].data[p].y[2]), c.push(e[i].data[p].y[3])));
      return { o: r, h: o, m: n, l: h, c };
    } }, { key: "parseDataAxisCharts", value: function(t) {
      var e, i = this, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.ctx, s = this.w.config, r = this.w.globals, o = new G(a), n = s.labels.length > 0 ? s.labels.slice() : s.xaxis.categories.slice();
      if (r.isRangeBar = s.chart.type === "rangeBar" && r.isBarHorizontal, r.hasXaxisGroups = s.xaxis.type === "category" && s.xaxis.group.groups.length > 0, r.hasXaxisGroups && (r.groups = s.xaxis.group.groups), r.hasSeriesGroups = (e = t[0]) === null || e === void 0 ? void 0 : e.group, r.hasSeriesGroups) {
        var h = [], c = J(new Set(t.map(function(f) {
          return f.group;
        })));
        t.forEach(function(f, b) {
          var m = c.indexOf(f.group);
          h[m] || (h[m] = []), h[m].push(f.name);
        }), r.seriesGroups = h;
      }
      for (var d = function() {
        for (var f = 0; f < n.length; f++)
          if (typeof n[f] == "string") {
            if (!o.isValidDate(n[f]))
              throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
            i.twoDSeriesX.push(o.parseDate(n[f]));
          } else
            i.twoDSeriesX.push(n[f]);
      }, g = 0; g < t.length; g++) {
        if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], t[g].data === void 0)
          return void console.error("It is a possibility that you may have not included 'data' property in series.");
        if (s.chart.type !== "rangeBar" && s.chart.type !== "rangeArea" && t[g].type !== "rangeBar" && t[g].type !== "rangeArea" || (r.isRangeData = !0, s.chart.type !== "rangeBar" && s.chart.type !== "rangeArea" || this.handleRangeData(t, g)), this.isMultiFormat())
          this.isFormat2DArray() ? this.handleFormat2DArray(t, g) : this.isFormatXY() && this.handleFormatXY(t, g), s.chart.type !== "candlestick" && t[g].type !== "candlestick" && s.chart.type !== "boxPlot" && t[g].type !== "boxPlot" || this.handleCandleStickBoxData(t, g), r.series.push(this.twoDSeries), r.labels.push(this.twoDSeriesX), r.seriesX.push(this.twoDSeriesX), r.seriesGoals = this.seriesGoals, g !== this.activeSeriesIndex || this.fallbackToCategory || (r.isXNumeric = !0);
        else {
          s.xaxis.type === "datetime" ? (r.isXNumeric = !0, d(), r.seriesX.push(this.twoDSeriesX)) : s.xaxis.type === "numeric" && (r.isXNumeric = !0, n.length > 0 && (this.twoDSeriesX = n, r.seriesX.push(this.twoDSeriesX))), r.labels.push(this.twoDSeriesX);
          var p = t[g].data.map(function(f) {
            return P.parseNumber(f);
          });
          r.series.push(p);
        }
        r.seriesZ.push(this.threeDSeries), t[g].name !== void 0 ? r.seriesNames.push(t[g].name) : r.seriesNames.push("series-" + parseInt(g + 1, 10)), t[g].color !== void 0 ? r.seriesColors.push(t[g].color) : r.seriesColors.push(void 0);
      }
      return this.w;
    } }, { key: "parseDataNonAxisCharts", value: function(t) {
      var e = this.w.globals, i = this.w.config;
      e.series = t.slice(), e.seriesNames = i.labels.slice();
      for (var a = 0; a < e.series.length; a++)
        e.seriesNames[a] === void 0 && e.seriesNames.push("series-" + (a + 1));
      return this.w;
    } }, { key: "handleExternalLabelsData", value: function(t) {
      var e = this.w.config, i = this.w.globals;
      e.xaxis.categories.length > 0 ? i.labels = e.xaxis.categories : e.labels.length > 0 ? i.labels = e.labels.slice() : this.fallbackToCategory ? (i.labels = i.labels[0], i.seriesRange.length && (i.seriesRange.map(function(a) {
        a.forEach(function(s) {
          i.labels.indexOf(s.x) < 0 && s.x && i.labels.push(s.x);
        });
      }), i.labels = Array.from(new Set(i.labels.map(JSON.stringify)), JSON.parse)), e.xaxis.convertedCatToNumeric && (new ot(e).convertCatToNumericXaxis(e, this.ctx, i.seriesX[0]), this._generateExternalLabels(t))) : this._generateExternalLabels(t);
    } }, { key: "_generateExternalLabels", value: function(t) {
      var e = this.w.globals, i = this.w.config, a = [];
      if (e.axisCharts) {
        if (e.series.length > 0)
          if (this.isFormatXY())
            for (var s = i.series.map(function(d, g) {
              return d.data.filter(function(p, f, b) {
                return b.findIndex(function(m) {
                  return m.x === p.x;
                }) === f;
              });
            }), r = s.reduce(function(d, g, p, f) {
              return f[d].length > g.length ? d : p;
            }, 0), o = 0; o < s[r].length; o++)
              a.push(o + 1);
          else
            for (var n = 0; n < e.series[e.maxValsInArrayIndex].length; n++)
              a.push(n + 1);
        e.seriesX = [];
        for (var h = 0; h < t.length; h++)
          e.seriesX.push(a);
        this.w.globals.isBarHorizontal || (e.isXNumeric = !0);
      }
      if (a.length === 0) {
        a = e.axisCharts ? [] : e.series.map(function(d, g) {
          return g + 1;
        });
        for (var c = 0; c < t.length; c++)
          e.seriesX.push(a);
      }
      e.labels = a, i.xaxis.convertedCatToNumeric && (e.categoryLabels = a.map(function(d) {
        return i.xaxis.labels.formatter(d);
      })), e.noLabelsProvided = !0;
    } }, { key: "parseData", value: function(t) {
      var e = this.w, i = e.config, a = e.globals;
      if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), a.axisCharts ? (this.parseDataAxisCharts(t), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(t), i.chart.stacked) {
        var s = new et(this.ctx);
        a.series = s.setNullSeriesToZeroValues(a.series);
      }
      this.coreUtils.getSeriesTotals(), a.axisCharts && (a.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals(), a.stackedSeriesTotalsByGroups = this.coreUtils.getStackedSeriesTotalsByGroups()), this.coreUtils.getPercentSeries(), a.dataFormatXNumeric || a.isXNumeric && (i.xaxis.type !== "numeric" || i.labels.length !== 0 || i.xaxis.categories.length !== 0) || this.handleExternalLabelsData(t);
      for (var r = this.coreUtils.getCategoryLabels(a.labels), o = 0; o < r.length; o++)
        if (Array.isArray(r[o])) {
          a.isMultiLineX = !0;
          break;
        }
    } }, { key: "excludeCollapsedSeriesInYAxis", value: function() {
      var t = this, e = this.w;
      e.globals.ignoreYAxisIndexes = e.globals.collapsedSeries.map(function(i, a) {
        if (t.w.globals.isMultipleYAxis && !e.config.chart.stacked)
          return i.index;
      });
    } }]), y;
  }(), bt = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "getLabel", value: function(t, e, i, a) {
      var s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], r = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "12px", o = !(arguments.length > 6 && arguments[6] !== void 0) || arguments[6], n = this.w, h = t[a] === void 0 ? "" : t[a], c = h, d = n.globals.xLabelFormatter, g = n.config.xaxis.labels.formatter, p = !1, f = new rt(this.ctx), b = h;
      o && (c = f.xLabelFormat(d, h, b, { i: a, dateFormatter: new G(this.ctx).formatDate, w: n }), g !== void 0 && (c = g(h, t[a], { i: a, dateFormatter: new G(this.ctx).formatDate, w: n })));
      var m, w;
      e.length > 0 ? (m = e[a].unit, w = null, e.forEach(function(x) {
        x.unit === "month" ? w = "year" : x.unit === "day" ? w = "month" : x.unit === "hour" ? w = "day" : x.unit === "minute" && (w = "hour");
      }), p = w === m, i = e[a].position, c = e[a].value) : n.config.xaxis.type === "datetime" && g === void 0 && (c = ""), c === void 0 && (c = ""), c = Array.isArray(c) ? c : c.toString();
      var A = new z(this.ctx), l = {};
      l = n.globals.rotateXLabels && o ? A.getTextRects(c, parseInt(r, 10), null, "rotate(".concat(n.config.xaxis.labels.rotate, " 0 0)"), !1) : A.getTextRects(c, parseInt(r, 10));
      var u = !n.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
      return !Array.isArray(c) && (c.indexOf("NaN") === 0 || c.toLowerCase().indexOf("invalid") === 0 || c.toLowerCase().indexOf("infinity") >= 0 || s.indexOf(c) >= 0 && u) && (c = ""), { x: i, text: c, textRect: l, isBold: p };
    } }, { key: "checkLabelBasedOnTickamount", value: function(t, e, i) {
      var a = this.w, s = a.config.xaxis.tickAmount;
      return s === "dataPoints" && (s = Math.round(a.globals.gridWidth / 120)), s > i || t % Math.round(i / (s + 1)) == 0 || (e.text = ""), e;
    } }, { key: "checkForOverflowingLabels", value: function(t, e, i, a, s) {
      var r = this.w;
      if (t === 0 && r.globals.skipFirstTimelinelabel && (e.text = ""), t === i - 1 && r.globals.skipLastTimelinelabel && (e.text = ""), r.config.xaxis.labels.hideOverlappingLabels && a.length > 0) {
        var o = s[s.length - 1];
        e.x < o.textRect.width / (r.globals.rotateXLabels ? Math.abs(r.config.xaxis.labels.rotate) / 12 : 1.01) + o.x && (e.text = "");
      }
      return e;
    } }, { key: "checkForReversedLabels", value: function(t, e) {
      var i = this.w;
      return i.config.yaxis[t] && i.config.yaxis[t].reversed && e.reverse(), e;
    } }, { key: "isYAxisHidden", value: function(t) {
      var e = this.w, i = new q(this.ctx);
      return !e.config.yaxis[t].show || !e.config.yaxis[t].showForNullSeries && i.isSeriesNull(t) && e.globals.collapsedSeriesIndices.indexOf(t) === -1;
    } }, { key: "getYAxisForeColor", value: function(t, e) {
      var i = this.w;
      return Array.isArray(t) && i.globals.yAxisScale[e] && this.ctx.theme.pushExtraColors(t, i.globals.yAxisScale[e].result.length, !1), t;
    } }, { key: "drawYAxisTicks", value: function(t, e, i, a, s, r, o) {
      var n = this.w, h = new z(this.ctx), c = n.globals.translateY;
      if (a.show && e > 0) {
        n.config.yaxis[s].opposite === !0 && (t += a.width);
        for (var d = e; d >= 0; d--) {
          var g = c + e / 10 + n.config.yaxis[s].labels.offsetY - 1;
          n.globals.isBarHorizontal && (g = r * d), n.config.chart.type === "heatmap" && (g += r / 2);
          var p = h.drawLine(t + i.offsetX - a.width + a.offsetX, g + a.offsetY, t + i.offsetX + a.offsetX, g + a.offsetY, a.color);
          o.add(p), c += r;
        }
      }
    } }]), y;
  }(), Rt = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "scaleSvgNode", value: function(t, e) {
      var i = parseFloat(t.getAttributeNS(null, "width")), a = parseFloat(t.getAttributeNS(null, "height"));
      t.setAttributeNS(null, "width", i * e), t.setAttributeNS(null, "height", a * e), t.setAttributeNS(null, "viewBox", "0 0 " + i + " " + a);
    } }, { key: "fixSvgStringForIe11", value: function(t) {
      if (!P.isIE11())
        return t.replace(/&nbsp;/g, "&#160;");
      var e = 0, i = t.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g, function(a) {
        return ++e === 2 ? 'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"' : a;
      });
      return i = (i = i.replace(/xmlns:NS\d+=""/g, "")).replace(/NS\d+:(\w+:\w+=")/g, "$1");
    } }, { key: "getSvgString", value: function(t) {
      t == null && (t = 1);
      var e = this.w.globals.dom.Paper.svg();
      if (t !== 1) {
        var i = this.w.globals.dom.Paper.node.cloneNode(!0);
        this.scaleSvgNode(i, t), e = new XMLSerializer().serializeToString(i);
      }
      return this.fixSvgStringForIe11(e);
    } }, { key: "cleanup", value: function() {
      var t = this.w, e = t.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"), i = t.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"), a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");
      Array.prototype.forEach.call(a, function(s) {
        s.setAttribute("width", 0);
      }), e && e[0] && (e[0].setAttribute("x", -500), e[0].setAttribute("x1", -500), e[0].setAttribute("x2", -500)), i && i[0] && (i[0].setAttribute("y", -100), i[0].setAttribute("y1", -100), i[0].setAttribute("y2", -100));
    } }, { key: "svgUrl", value: function() {
      this.cleanup();
      var t = this.getSvgString(), e = new Blob([t], { type: "image/svg+xml;charset=utf-8" });
      return URL.createObjectURL(e);
    } }, { key: "dataURI", value: function(t) {
      var e = this;
      return new Promise(function(i) {
        var a = e.w, s = t ? t.scale || t.width / a.globals.svgWidth : 1;
        e.cleanup();
        var r = document.createElement("canvas");
        r.width = a.globals.svgWidth * s, r.height = parseInt(a.globals.dom.elWrap.style.height, 10) * s;
        var o = a.config.chart.background === "transparent" ? "#fff" : a.config.chart.background, n = r.getContext("2d");
        n.fillStyle = o, n.fillRect(0, 0, r.width * s, r.height * s);
        var h = e.getSvgString(s);
        if (window.canvg && P.isIE11()) {
          var c = window.canvg.Canvg.fromString(n, h, { ignoreClear: !0, ignoreDimensions: !0 });
          c.start();
          var d = r.msToBlob();
          c.stop(), i({ blob: d });
        } else {
          var g = "data:image/svg+xml," + encodeURIComponent(h), p = new Image();
          p.crossOrigin = "anonymous", p.onload = function() {
            if (n.drawImage(p, 0, 0), r.msToBlob) {
              var f = r.msToBlob();
              i({ blob: f });
            } else {
              var b = r.toDataURL("image/png");
              i({ imgURI: b });
            }
          }, p.src = g;
        }
      });
    } }, { key: "exportToSVG", value: function() {
      this.triggerDownload(this.svgUrl(), this.w.config.chart.toolbar.export.svg.filename, ".svg");
    } }, { key: "exportToPng", value: function() {
      var t = this;
      this.dataURI().then(function(e) {
        var i = e.imgURI, a = e.blob;
        a ? navigator.msSaveOrOpenBlob(a, t.w.globals.chartID + ".png") : t.triggerDownload(i, t.w.config.chart.toolbar.export.png.filename, ".png");
      });
    } }, { key: "exportToCSV", value: function(t) {
      var e = this, i = t.series, a = t.fileName, s = t.columnDelimiter, r = s === void 0 ? "," : s, o = t.lineDelimiter, n = o === void 0 ? `
` : o, h = this.w;
      i || (i = h.config.series);
      var c, d, g = [], p = [], f = "", b = h.globals.series.map(function(v, k) {
        return h.globals.collapsedSeriesIndices.indexOf(k) === -1 ? v : [];
      }), m = function(v) {
        return h.config.xaxis.type === "datetime" && String(v).length >= 10;
      }, w = Math.max.apply(Math, J(i.map(function(v) {
        return v.data ? v.data.length : 0;
      }))), A = new Kt(this.ctx), l = new bt(this.ctx), u = function(v) {
        var k = "";
        if (h.globals.axisCharts) {
          if (h.config.xaxis.type === "category" || h.config.xaxis.convertedCatToNumeric)
            if (h.globals.isBarHorizontal) {
              var S = h.globals.yLabelFormatters[0], C = new et(e.ctx).getActiveConfigSeriesIndex();
              k = S(h.globals.labels[v], { seriesIndex: C, dataPointIndex: v, w: h });
            } else
              k = l.getLabel(h.globals.labels, h.globals.timescaleLabels, 0, v).text;
          h.config.xaxis.type === "datetime" && (h.config.xaxis.categories.length ? k = h.config.xaxis.categories[v] : h.config.labels.length && (k = h.config.labels[v]));
        } else
          k = h.config.labels[v];
        return Array.isArray(k) && (k = k.join(" ")), P.isNumber(k) ? k : k.split(r).join("");
      }, x = function(v, k) {
        if (g.length && k === 0 && p.push(g.join(r)), v.data) {
          v.data = v.data.length && v.data || J(Array(w)).map(function() {
            return "";
          });
          for (var S = 0; S < v.data.length; S++) {
            g = [];
            var C = u(S);
            if (C || (A.isFormatXY() ? C = i[k].data[S].x : A.isFormat2DArray() && (C = i[k].data[S] ? i[k].data[S][0] : "")), k === 0) {
              g.push(m(C) ? h.config.chart.toolbar.export.csv.dateFormatter(C) : P.isNumber(C) ? C : C.split(r).join(""));
              for (var L = 0; L < h.globals.series.length; L++) {
                var M;
                A.isFormatXY() ? g.push((M = i[L].data[S]) === null || M === void 0 ? void 0 : M.y) : g.push(b[L][S]);
              }
            }
            (h.config.chart.type === "candlestick" || v.type && v.type === "candlestick") && (g.pop(), g.push(h.globals.seriesCandleO[k][S]), g.push(h.globals.seriesCandleH[k][S]), g.push(h.globals.seriesCandleL[k][S]), g.push(h.globals.seriesCandleC[k][S])), (h.config.chart.type === "boxPlot" || v.type && v.type === "boxPlot") && (g.pop(), g.push(h.globals.seriesCandleO[k][S]), g.push(h.globals.seriesCandleH[k][S]), g.push(h.globals.seriesCandleM[k][S]), g.push(h.globals.seriesCandleL[k][S]), g.push(h.globals.seriesCandleC[k][S])), h.config.chart.type === "rangeBar" && (g.pop(), g.push(h.globals.seriesRangeStart[k][S]), g.push(h.globals.seriesRangeEnd[k][S])), g.length && p.push(g.join(r));
          }
        }
      };
      g.push(h.config.chart.toolbar.export.csv.headerCategory), h.config.chart.type === "boxPlot" ? (g.push("minimum"), g.push("q1"), g.push("median"), g.push("q3"), g.push("maximum")) : h.config.chart.type === "candlestick" ? (g.push("open"), g.push("high"), g.push("low"), g.push("close")) : h.config.chart.type === "rangeBar" ? (g.push("minimum"), g.push("maximum")) : i.map(function(v, k) {
        var S = (v.name ? v.name : "series-".concat(k)) + "";
        h.globals.axisCharts && g.push(S.split(r).join("") ? S.split(r).join("") : "series-".concat(k));
      }), h.globals.axisCharts || (g.push(h.config.chart.toolbar.export.csv.headerValue), p.push(g.join(r))), h.globals.allSeriesHasEqualX || !h.globals.axisCharts || h.config.xaxis.categories.length || h.config.labels.length ? i.map(function(v, k) {
        h.globals.axisCharts ? x(v, k) : ((g = []).push(h.globals.labels[k].split(r).join("")), g.push(b[k]), p.push(g.join(r)));
      }) : (c = /* @__PURE__ */ new Set(), d = {}, i.forEach(function(v, k) {
        v == null || v.data.forEach(function(S) {
          var C, L;
          if (A.isFormatXY())
            C = S.x, L = S.y;
          else {
            if (!A.isFormat2DArray())
              return;
            C = S[0], L = S[1];
          }
          d[C] || (d[C] = Array(i.length).fill("")), d[C][k] = L, c.add(C);
        });
      }), g.length && p.push(g.join(r)), Array.from(c).sort().forEach(function(v) {
        p.push([m(v) && h.config.xaxis.type === "datetime" ? h.config.chart.toolbar.export.csv.dateFormatter(v) : P.isNumber(v) ? v : v.split(r).join(""), d[v].join(r)]);
      })), f += p.join(n), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\uFEFF" + f), a || h.config.chart.toolbar.export.csv.filename, ".csv");
    } }, { key: "triggerDownload", value: function(t, e, i) {
      var a = document.createElement("a");
      a.href = t, a.download = (e || this.w.globals.chartID) + i, document.body.appendChild(a), a.click(), document.body.removeChild(a);
    } }]), y;
  }(), Tt = function() {
    function y(t, e) {
      Y(this, y), this.ctx = t, this.elgrid = e, this.w = t.w;
      var i = this.w;
      this.axesUtils = new bt(t), this.xaxisLabels = i.globals.labels.slice(), i.globals.timescaleLabels.length > 0 && !i.globals.isBarHorizontal && (this.xaxisLabels = i.globals.timescaleLabels.slice()), i.config.xaxis.overwriteCategories && (this.xaxisLabels = i.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], i.config.xaxis.position === "top" ? this.offY = 0 : this.offY = i.globals.gridHeight + 1, this.offY = this.offY + i.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = i.config.chart.type === "bar" && i.config.plotOptions.bar.horizontal, this.xaxisFontSize = i.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = i.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = i.config.xaxis.labels.style.colors, this.xaxisBorderWidth = i.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = i.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%") > -1 ? this.xaxisBorderWidth = i.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = i.config.xaxis.axisBorder.height, this.yaxis = i.config.yaxis[0];
    }
    return F(y, [{ key: "drawXaxis", value: function() {
      var t = this.w, e = new z(this.ctx), i = e.group({ class: "apexcharts-xaxis", transform: "translate(".concat(t.config.xaxis.offsetX, ", ").concat(t.config.xaxis.offsetY, ")") }), a = e.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(t.globals.translateXAxisX, ", ").concat(t.globals.translateXAxisY, ")") });
      i.add(a);
      for (var s = [], r = 0; r < this.xaxisLabels.length; r++)
        s.push(this.xaxisLabels[r]);
      if (this.drawXAxisLabelAndGroup(!0, e, a, s, t.globals.isXNumeric, function(f, b) {
        return b;
      }), t.globals.hasXaxisGroups) {
        var o = t.globals.groups;
        s = [];
        for (var n = 0; n < o.length; n++)
          s.push(o[n].title);
        var h = {};
        t.config.xaxis.group.style && (h.xaxisFontSize = t.config.xaxis.group.style.fontSize, h.xaxisFontFamily = t.config.xaxis.group.style.fontFamily, h.xaxisForeColors = t.config.xaxis.group.style.colors, h.fontWeight = t.config.xaxis.group.style.fontWeight, h.cssClass = t.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(!1, e, a, s, !1, function(f, b) {
          return o[f].cols * b;
        }, h);
      }
      if (t.config.xaxis.title.text !== void 0) {
        var c = e.group({ class: "apexcharts-xaxis-title" }), d = e.drawText({ x: t.globals.gridWidth / 2 + t.config.xaxis.title.offsetX, y: this.offY + parseFloat(this.xaxisFontSize) + (t.config.xaxis.position === "bottom" ? t.globals.xAxisLabelsHeight : -t.globals.xAxisLabelsHeight - 10) + t.config.xaxis.title.offsetY, text: t.config.xaxis.title.text, textAnchor: "middle", fontSize: t.config.xaxis.title.style.fontSize, fontFamily: t.config.xaxis.title.style.fontFamily, fontWeight: t.config.xaxis.title.style.fontWeight, foreColor: t.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + t.config.xaxis.title.style.cssClass });
        c.add(d), i.add(c);
      }
      if (t.config.xaxis.axisBorder.show) {
        var g = t.globals.barPadForNumericAxis, p = e.drawLine(t.globals.padHorizontal + t.config.xaxis.axisBorder.offsetX - g, this.offY, this.xaxisBorderWidth + g, this.offY, t.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
        this.elgrid && this.elgrid.elGridBorders && t.config.grid.show ? this.elgrid.elGridBorders.add(p) : i.add(p);
      }
      return i;
    } }, { key: "drawXAxisLabelAndGroup", value: function(t, e, i, a, s, r) {
      var o, n = this, h = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : {}, c = [], d = [], g = this.w, p = h.xaxisFontSize || this.xaxisFontSize, f = h.xaxisFontFamily || this.xaxisFontFamily, b = h.xaxisForeColors || this.xaxisForeColors, m = h.fontWeight || g.config.xaxis.labels.style.fontWeight, w = h.cssClass || g.config.xaxis.labels.style.cssClass, A = g.globals.padHorizontal, l = a.length, u = g.config.xaxis.type === "category" ? g.globals.dataPoints : l;
      if (u === 0 && l > u && (u = l), s) {
        var x = u > 1 ? u - 1 : u;
        o = g.globals.gridWidth / Math.min(x, l - 1), A = A + r(0, o) / 2 + g.config.xaxis.labels.offsetX;
      } else
        o = g.globals.gridWidth / u, A = A + r(0, o) + g.config.xaxis.labels.offsetX;
      for (var v = function(S) {
        var C = A - r(S, o) / 2 + g.config.xaxis.labels.offsetX;
        S === 0 && l === 1 && o / 2 === A && u === 1 && (C = g.globals.gridWidth / 2);
        var L = n.axesUtils.getLabel(a, g.globals.timescaleLabels, C, S, c, p, t), M = 28;
        if (g.globals.rotateXLabels && t && (M = 22), g.config.xaxis.title.text && g.config.xaxis.position === "top" && (M += parseFloat(g.config.xaxis.title.style.fontSize) + 2), t || (M = M + parseFloat(p) + (g.globals.xAxisLabelsHeight - g.globals.xAxisGroupLabelsHeight) + (g.globals.rotateXLabels ? 10 : 0)), L = g.config.xaxis.tickAmount !== void 0 && g.config.xaxis.tickAmount !== "dataPoints" && g.config.xaxis.type !== "datetime" ? n.axesUtils.checkLabelBasedOnTickamount(S, L, l) : n.axesUtils.checkForOverflowingLabels(S, L, l, c, d), g.config.xaxis.labels.show) {
          var T = e.drawText({ x: L.x, y: n.offY + g.config.xaxis.labels.offsetY + M - (g.config.xaxis.position === "top" ? g.globals.xAxisHeight + g.config.xaxis.axisTicks.height - 2 : 0), text: L.text, textAnchor: "middle", fontWeight: L.isBold ? 600 : m, fontSize: p, fontFamily: f, foreColor: Array.isArray(b) ? t && g.config.xaxis.convertedCatToNumeric ? b[g.globals.minX + S - 1] : b[S] : b, isPlainText: !1, cssClass: (t ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + w });
          if (i.add(T), T.on("click", function(E) {
            if (typeof g.config.chart.events.xAxisLabelClick == "function") {
              var R = Object.assign({}, g, { labelIndex: S });
              g.config.chart.events.xAxisLabelClick(E, n.ctx, R);
            }
          }), t) {
            var I = document.createElementNS(g.globals.SVGNS, "title");
            I.textContent = Array.isArray(L.text) ? L.text.join(" ") : L.text, T.node.appendChild(I), L.text !== "" && (c.push(L.text), d.push(L));
          }
        }
        S < l - 1 && (A += r(S + 1, o));
      }, k = 0; k <= l - 1; k++)
        v(k);
    } }, { key: "drawXaxisInversed", value: function(t) {
      var e, i, a = this, s = this.w, r = new z(this.ctx), o = s.config.yaxis[0].opposite ? s.globals.translateYAxisX[t] : 0, n = r.group({ class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: t }), h = r.group({ class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g", transform: "translate(" + o + ", 0)" });
      n.add(h);
      var c = [];
      if (s.config.yaxis[t].show)
        for (var d = 0; d < this.xaxisLabels.length; d++)
          c.push(this.xaxisLabels[d]);
      e = s.globals.gridHeight / c.length, i = -e / 2.2;
      var g = s.globals.yLabelFormatters[0], p = s.config.yaxis[0].labels;
      if (p.show)
        for (var f = function(x) {
          var v = c[x] === void 0 ? "" : c[x];
          v = g(v, { seriesIndex: t, dataPointIndex: x, w: s });
          var k = a.axesUtils.getYAxisForeColor(p.style.colors, t), S = 0;
          Array.isArray(v) && (S = v.length / 2 * parseInt(p.style.fontSize, 10));
          var C = p.offsetX - 15, L = "end";
          a.yaxis.opposite && (L = "start"), s.config.yaxis[0].labels.align === "left" ? (C = p.offsetX, L = "start") : s.config.yaxis[0].labels.align === "center" ? (C = p.offsetX, L = "middle") : s.config.yaxis[0].labels.align === "right" && (L = "end");
          var M = r.drawText({ x: C, y: i + e + p.offsetY - S, text: v, textAnchor: L, foreColor: Array.isArray(k) ? k[x] : k, fontSize: p.style.fontSize, fontFamily: p.style.fontFamily, fontWeight: p.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-yaxis-label " + p.style.cssClass, maxWidth: p.maxWidth });
          h.add(M), M.on("click", function(E) {
            if (typeof s.config.chart.events.xAxisLabelClick == "function") {
              var R = Object.assign({}, s, { labelIndex: x });
              s.config.chart.events.xAxisLabelClick(E, a.ctx, R);
            }
          });
          var T = document.createElementNS(s.globals.SVGNS, "title");
          if (T.textContent = Array.isArray(v) ? v.join(" ") : v, M.node.appendChild(T), s.config.yaxis[t].labels.rotate !== 0) {
            var I = r.rotateAroundCenter(M.node);
            M.node.setAttribute("transform", "rotate(".concat(s.config.yaxis[t].labels.rotate, " 0 ").concat(I.y, ")"));
          }
          i += e;
        }, b = 0; b <= c.length - 1; b++)
          f(b);
      if (s.config.yaxis[0].title.text !== void 0) {
        var m = r.group({ class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed", transform: "translate(" + o + ", 0)" }), w = r.drawText({ x: s.config.yaxis[0].title.offsetX, y: s.globals.gridHeight / 2 + s.config.yaxis[0].title.offsetY, text: s.config.yaxis[0].title.text, textAnchor: "middle", foreColor: s.config.yaxis[0].title.style.color, fontSize: s.config.yaxis[0].title.style.fontSize, fontWeight: s.config.yaxis[0].title.style.fontWeight, fontFamily: s.config.yaxis[0].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + s.config.yaxis[0].title.style.cssClass });
        m.add(w), n.add(m);
      }
      var A = 0;
      this.isCategoryBarHorizontal && s.config.yaxis[0].opposite && (A = s.globals.gridWidth);
      var l = s.config.xaxis.axisBorder;
      if (l.show) {
        var u = r.drawLine(s.globals.padHorizontal + l.offsetX + A, 1 + l.offsetY, s.globals.padHorizontal + l.offsetX + A, s.globals.gridHeight + l.offsetY, l.color, 0);
        this.elgrid && this.elgrid.elGridBorders && s.config.grid.show ? this.elgrid.elGridBorders.add(u) : n.add(u);
      }
      return s.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(A, c.length, s.config.yaxis[0].axisBorder, s.config.yaxis[0].axisTicks, 0, e, n), n;
    } }, { key: "drawXaxisTicks", value: function(t, e, i) {
      var a = this.w, s = t;
      if (!(t < 0 || t - 2 > a.globals.gridWidth)) {
        var r = this.offY + a.config.xaxis.axisTicks.offsetY;
        if (e = e + r + a.config.xaxis.axisTicks.height, a.config.xaxis.position === "top" && (e = r - a.config.xaxis.axisTicks.height), a.config.xaxis.axisTicks.show) {
          var o = new z(this.ctx).drawLine(t + a.config.xaxis.axisTicks.offsetX, r + a.config.xaxis.offsetY, s + a.config.xaxis.axisTicks.offsetX, e + a.config.xaxis.offsetY, a.config.xaxis.axisTicks.color);
          i.add(o), o.node.classList.add("apexcharts-xaxis-tick");
        }
      }
    } }, { key: "getXAxisTicksPositions", value: function() {
      var t = this.w, e = [], i = this.xaxisLabels.length, a = t.globals.padHorizontal;
      if (t.globals.timescaleLabels.length > 0)
        for (var s = 0; s < i; s++)
          a = this.xaxisLabels[s].position, e.push(a);
      else
        for (var r = i, o = 0; o < r; o++) {
          var n = r;
          t.globals.isXNumeric && t.config.chart.type !== "bar" && (n -= 1), a += t.globals.gridWidth / n, e.push(a);
        }
      return e;
    } }, { key: "xAxisLabelCorrections", value: function() {
      var t = this.w, e = new z(this.ctx), i = t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"), s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
      if (t.globals.rotateXLabels || t.config.xaxis.labels.rotateAlways)
        for (var o = 0; o < a.length; o++) {
          var n = e.rotateAroundCenter(a[o]);
          n.y = n.y - 1, n.x = n.x + 1, a[o].setAttribute("transform", "rotate(".concat(t.config.xaxis.labels.rotate, " ").concat(n.x, " ").concat(n.y, ")")), a[o].setAttribute("text-anchor", "end"), i.setAttribute("transform", "translate(0, ".concat(-10, ")"));
          var h = a[o].childNodes;
          t.config.xaxis.labels.trim && Array.prototype.forEach.call(h, function(p) {
            e.placeTextWithEllipsis(p, p.textContent, t.globals.xAxisLabelsHeight - (t.config.legend.position === "bottom" ? 20 : 10));
          });
        }
      else
        (function() {
          for (var p = t.globals.gridWidth / (t.globals.labels.length + 1), f = 0; f < a.length; f++) {
            var b = a[f].childNodes;
            t.config.xaxis.labels.trim && t.config.xaxis.type !== "datetime" && Array.prototype.forEach.call(b, function(m) {
              e.placeTextWithEllipsis(m, m.textContent, p);
            });
          }
        })();
      if (s.length > 0) {
        var c = s[s.length - 1].getBBox(), d = s[0].getBBox();
        c.x < -20 && s[s.length - 1].parentNode.removeChild(s[s.length - 1]), d.x + d.width > t.globals.gridWidth && !t.globals.isBarHorizontal && s[0].parentNode.removeChild(s[0]);
        for (var g = 0; g < r.length; g++)
          e.placeTextWithEllipsis(r[g], r[g].textContent, t.config.yaxis[0].labels.maxWidth - (t.config.yaxis[0].title.text ? 2 * parseFloat(t.config.yaxis[0].title.style.fontSize) : 0) - 15);
      }
    } }]), y;
  }(), te = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
      var e = this.w;
      this.xaxisLabels = e.globals.labels.slice(), this.axesUtils = new bt(t), this.isRangeBar = e.globals.seriesRange.length && e.globals.isBarHorizontal, e.globals.timescaleLabels.length > 0 && (this.xaxisLabels = e.globals.timescaleLabels.slice());
    }
    return F(y, [{ key: "drawGridArea", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, e = this.w, i = new z(this.ctx);
      t === null && (t = i.group({ class: "apexcharts-grid" }));
      var a = i.drawLine(e.globals.padHorizontal, 1, e.globals.padHorizontal, e.globals.gridHeight, "transparent"), s = i.drawLine(e.globals.padHorizontal, e.globals.gridHeight, e.globals.gridWidth, e.globals.gridHeight, "transparent");
      return t.add(s), t.add(a), t;
    } }, { key: "drawGrid", value: function() {
      var t = null;
      return this.w.globals.axisCharts && (t = this.renderGrid(), this.drawGridArea(t.el)), t;
    } }, { key: "createGridMask", value: function() {
      var t = this.w, e = t.globals, i = new z(this.ctx), a = Array.isArray(t.config.stroke.width) ? 0 : t.config.stroke.width;
      if (Array.isArray(t.config.stroke.width)) {
        var s = 0;
        t.config.stroke.width.forEach(function(d) {
          s = Math.max(s, d);
        }), a = s;
      }
      e.dom.elGridRectMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMask.setAttribute("id", "gridRectMask".concat(e.cuid)), e.dom.elGridRectMarkerMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMarkerMask.setAttribute("id", "gridRectMarkerMask".concat(e.cuid)), e.dom.elForecastMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elForecastMask.setAttribute("id", "forecastMask".concat(e.cuid)), e.dom.elNonForecastMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elNonForecastMask.setAttribute("id", "nonForecastMask".concat(e.cuid));
      var r = t.config.chart.type, o = 0, n = 0;
      (r === "bar" || r === "rangeBar" || r === "candlestick" || r === "boxPlot" || t.globals.comboBarCount > 0) && t.globals.isXNumeric && !t.globals.isBarHorizontal && (o = t.config.grid.padding.left, n = t.config.grid.padding.right, e.barPadForNumericAxis > o && (o = e.barPadForNumericAxis, n = e.barPadForNumericAxis)), e.dom.elGridRect = i.drawRect(-a - o - 2, 2 * -a - 2, e.gridWidth + a + n + o + 4, e.gridHeight + 4 * a + 4, 0, "#fff");
      var h = t.globals.markers.largestSize + 1;
      e.dom.elGridRectMarker = i.drawRect(2 * -h, 2 * -h, e.gridWidth + 4 * h, e.gridHeight + 4 * h, 0, "#fff"), e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node), e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);
      var c = e.dom.baseEl.querySelector("defs");
      c.appendChild(e.dom.elGridRectMask), c.appendChild(e.dom.elForecastMask), c.appendChild(e.dom.elNonForecastMask), c.appendChild(e.dom.elGridRectMarkerMask);
    } }, { key: "_drawGridLines", value: function(t) {
      var e = t.i, i = t.x1, a = t.y1, s = t.x2, r = t.y2, o = t.xCount, n = t.parent, h = this.w;
      if (!(e === 0 && h.globals.skipFirstTimelinelabel || e === o - 1 && h.globals.skipLastTimelinelabel && !h.config.xaxis.labels.formatter || h.config.chart.type === "radar")) {
        h.config.grid.xaxis.lines.show && this._drawGridLine({ i: e, x1: i, y1: a, x2: s, y2: r, xCount: o, parent: n });
        var c = 0;
        if (h.globals.hasXaxisGroups && h.config.xaxis.tickPlacement === "between") {
          var d = h.globals.groups;
          if (d) {
            for (var g = 0, p = 0; g < e && p < d.length; p++)
              g += d[p].cols;
            g === e && (c = 0.6 * h.globals.xAxisLabelsHeight);
          }
        }
        new Tt(this.ctx).drawXaxisTicks(i, c, h.globals.dom.elGraphical);
      }
    } }, { key: "_drawGridLine", value: function(t) {
      var e = t.i, i = t.x1, a = t.y1, s = t.x2, r = t.y2, o = t.xCount, n = t.parent, h = this.w, c = !1, d = n.node.classList.contains("apexcharts-gridlines-horizontal"), g = h.config.grid.strokeDashArray, p = h.globals.barPadForNumericAxis;
      (a === 0 && r === 0 || i === 0 && s === 0) && (c = !0), a === h.globals.gridHeight && r === h.globals.gridHeight && (c = !0), !h.globals.isBarHorizontal || e !== 0 && e !== o - 1 || (c = !0);
      var f = new z(this).drawLine(i - (d ? p : 0), a, s + (d ? p : 0), r, h.config.grid.borderColor, g);
      f.node.classList.add("apexcharts-gridline"), c && h.config.grid.show ? this.elGridBorders.add(f) : n.add(f);
    } }, { key: "_drawGridBandRect", value: function(t) {
      var e = t.c, i = t.x1, a = t.y1, s = t.x2, r = t.y2, o = t.type, n = this.w, h = new z(this.ctx), c = n.globals.barPadForNumericAxis;
      if (o !== "column" || n.config.xaxis.type !== "datetime") {
        var d = n.config.grid[o].colors[e], g = h.drawRect(i - (o === "row" ? c : 0), a, s + (o === "row" ? 2 * c : 0), r, 0, d, n.config.grid[o].opacity);
        this.elg.add(g), g.attr("clip-path", "url(#gridRectMask".concat(n.globals.cuid, ")")), g.node.classList.add("apexcharts-grid-".concat(o));
      }
    } }, { key: "_drawXYLines", value: function(t) {
      var e = this, i = t.xCount, a = t.tickAmount, s = this.w;
      if (s.config.grid.xaxis.lines.show || s.config.xaxis.axisTicks.show) {
        var r, o = s.globals.padHorizontal, n = s.globals.gridHeight;
        s.globals.timescaleLabels.length ? function(f) {
          for (var b = f.xC, m = f.x1, w = f.y1, A = f.x2, l = f.y2, u = 0; u < b; u++)
            m = e.xaxisLabels[u].position, A = e.xaxisLabels[u].position, e._drawGridLines({ i: u, x1: m, y1: w, x2: A, y2: l, xCount: i, parent: e.elgridLinesV });
        }({ xC: i, x1: o, y1: 0, x2: r, y2: n }) : (s.globals.isXNumeric && (i = s.globals.xAxisScale.result.length), function(f) {
          for (var b = f.xC, m = f.x1, w = f.y1, A = f.x2, l = f.y2, u = 0; u < b + (s.globals.isXNumeric ? 0 : 1); u++)
            u === 0 && b === 1 && s.globals.dataPoints === 1 && (A = m = s.globals.gridWidth / 2), e._drawGridLines({ i: u, x1: m, y1: w, x2: A, y2: l, xCount: i, parent: e.elgridLinesV }), A = m += s.globals.gridWidth / (s.globals.isXNumeric ? b - 1 : b);
        }({ xC: i, x1: o, y1: 0, x2: r, y2: n }));
      }
      if (s.config.grid.yaxis.lines.show) {
        var h = 0, c = 0, d = s.globals.gridWidth, g = a + 1;
        this.isRangeBar && (g = s.globals.labels.length);
        for (var p = 0; p < g + (this.isRangeBar ? 1 : 0); p++)
          this._drawGridLine({ i: p, xCount: g + (this.isRangeBar ? 1 : 0), x1: 0, y1: h, x2: d, y2: c, parent: this.elgridLinesH }), c = h += s.globals.gridHeight / (this.isRangeBar ? g : a);
      }
    } }, { key: "_drawInvertedXYLines", value: function(t) {
      var e = t.xCount, i = this.w;
      if (i.config.grid.xaxis.lines.show || i.config.xaxis.axisTicks.show)
        for (var a, s = i.globals.padHorizontal, r = i.globals.gridHeight, o = 0; o < e + 1; o++)
          i.config.grid.xaxis.lines.show && this._drawGridLine({ i: o, xCount: e + 1, x1: s, y1: 0, x2: a, y2: r, parent: this.elgridLinesV }), new Tt(this.ctx).drawXaxisTicks(s, 0, i.globals.dom.elGraphical), a = s = s + i.globals.gridWidth / e + 0.3;
      if (i.config.grid.yaxis.lines.show)
        for (var n = 0, h = 0, c = i.globals.gridWidth, d = 0; d < i.globals.dataPoints + 1; d++)
          this._drawGridLine({ i: d, xCount: i.globals.dataPoints + 1, x1: 0, y1: n, x2: c, y2: h, parent: this.elgridLinesH }), h = n += i.globals.gridHeight / i.globals.dataPoints;
    } }, { key: "renderGrid", value: function() {
      var t = this.w, e = new z(this.ctx);
      this.elg = e.group({ class: "apexcharts-grid" }), this.elgridLinesH = e.group({ class: "apexcharts-gridlines-horizontal" }), this.elgridLinesV = e.group({ class: "apexcharts-gridlines-vertical" }), this.elGridBorders = e.group({ class: "apexcharts-grid-borders" }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), t.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide());
      for (var i, a = t.globals.yAxisScale.length ? t.globals.yAxisScale[0].result.length - 1 : 5, s = 0; s < t.globals.series.length && (t.globals.yAxisScale[s] !== void 0 && (a = t.globals.yAxisScale[s].result.length - 1), !(a > 2)); s++)
        ;
      if (!t.globals.isBarHorizontal || this.isRangeBar) {
        var r, o, n;
        i = this.xaxisLabels.length, this.isRangeBar && (i--, a = t.globals.labels.length, t.config.xaxis.tickAmount && t.config.xaxis.labels.formatter && (i = t.config.xaxis.tickAmount), ((r = t.globals.yAxisScale) === null || r === void 0 || (o = r[0]) === null || o === void 0 || (n = o.result) === null || n === void 0 ? void 0 : n.length) > 0 && t.config.xaxis.type !== "datetime" && (i = t.globals.yAxisScale[0].result.length - 1)), this._drawXYLines({ xCount: i, tickAmount: a });
      } else
        i = a, a = t.globals.xTickAmount, this._drawInvertedXYLines({ xCount: i, tickAmount: a });
      return this.drawGridBands(i, a), { el: this.elg, elGridBorders: this.elGridBorders, xAxisTickWidth: t.globals.gridWidth / i };
    } }, { key: "drawGridBands", value: function(t, e) {
      var i = this.w;
      if (i.config.grid.row.colors !== void 0 && i.config.grid.row.colors.length > 0)
        for (var a = 0, s = i.globals.gridHeight / e, r = i.globals.gridWidth, o = 0, n = 0; o < e; o++, n++)
          n >= i.config.grid.row.colors.length && (n = 0), this._drawGridBandRect({ c: n, x1: 0, y1: a, x2: r, y2: s, type: "row" }), a += i.globals.gridHeight / e;
      if (i.config.grid.column.colors !== void 0 && i.config.grid.column.colors.length > 0)
        for (var h = i.globals.isBarHorizontal || i.config.xaxis.tickPlacement !== "on" || i.config.xaxis.type !== "category" && !i.config.xaxis.convertedCatToNumeric ? t : t - 1, c = i.globals.padHorizontal, d = i.globals.padHorizontal + i.globals.gridWidth / h, g = i.globals.gridHeight, p = 0, f = 0; p < t; p++, f++)
          f >= i.config.grid.column.colors.length && (f = 0), this._drawGridBandRect({ c: f, x1: c, y1: 0, x2: d, y2: g, type: "column" }), c += i.globals.gridWidth / h;
    } }]), y;
  }(), At = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "niceScale", value: function(t, e) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, s = arguments.length > 4 ? arguments[4] : void 0, r = this.w, o = Math.abs(e - t);
      if ((i = this._adjustTicksForSmallRange(i, a, o)) === "dataPoints" && (i = r.globals.dataPoints - 1), t === Number.MIN_VALUE && e === 0 || !P.isNumber(t) && !P.isNumber(e) || t === Number.MIN_VALUE && e === -Number.MAX_VALUE)
        return t = 0, e = i, this.linearScale(t, e, i, a, r.config.yaxis[a].stepSize);
      t > e ? (console.warn("axis.min cannot be greater than axis.max"), e = t + 0.1) : t === e && (t = t === 0 ? 0 : t - 0.5, e = e === 0 ? 2 : e + 0.5);
      var n = [];
      o < 1 && s && (r.config.chart.type === "candlestick" || r.config.series[a].type === "candlestick" || r.config.chart.type === "boxPlot" || r.config.series[a].type === "boxPlot" || r.globals.isRangeData) && (e *= 1.01);
      var h = i + 1;
      h < 2 ? h = 2 : h > 2 && (h -= 2);
      var c = o / h, d = Math.floor(P.log10(c)), g = Math.pow(10, d), p = Math.round(c / g);
      p < 1 && (p = 1);
      var f = p * g;
      r.config.yaxis[a].stepSize && (f = r.config.yaxis[a].stepSize), r.globals.isBarHorizontal && r.config.xaxis.stepSize && r.config.xaxis.type !== "datetime" && (f = r.config.xaxis.stepSize);
      var b = f * Math.floor(t / f), m = f * Math.ceil(e / f), w = b;
      if (s && o > 2) {
        for (; n.push(P.stripNumber(w, 7)), !((w += f) > m); )
          ;
        return { result: n, niceMin: n[0], niceMax: n[n.length - 1] };
      }
      var A = t;
      (n = []).push(P.stripNumber(A, 7));
      for (var l = Math.abs(e - t) / i, u = 0; u <= i; u++)
        A += l, n.push(A);
      return n[n.length - 2] >= e && n.pop(), { result: n, niceMin: n[0], niceMax: n[n.length - 1] };
    } }, { key: "linearScale", value: function(t, e) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, s = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0, r = Math.abs(e - t);
      (i = this._adjustTicksForSmallRange(i, a, r)) === "dataPoints" && (i = this.w.globals.dataPoints - 1), s || (s = r / i), i === Number.MAX_VALUE && (i = 5, s = 1);
      for (var o = [], n = t; i >= 0; )
        o.push(n), n += s, i -= 1;
      return { result: o, niceMin: o[0], niceMax: o[o.length - 1] };
    } }, { key: "logarithmicScaleNice", value: function(t, e, i) {
      e <= 0 && (e = Math.max(t, i)), t <= 0 && (t = Math.min(e, i));
      for (var a = [], s = Math.ceil(Math.log(e) / Math.log(i) + 1), r = Math.floor(Math.log(t) / Math.log(i)); r < s; r++)
        a.push(Math.pow(i, r));
      return { result: a, niceMin: a[0], niceMax: a[a.length - 1] };
    } }, { key: "logarithmicScale", value: function(t, e, i) {
      e <= 0 && (e = Math.max(t, i)), t <= 0 && (t = Math.min(e, i));
      for (var a = [], s = Math.log(e) / Math.log(i), r = Math.log(t) / Math.log(i), o = s - r, n = Math.round(o), h = o / n, c = 0, d = r; c < n; c++, d += h)
        a.push(Math.pow(i, d));
      return a.push(Math.pow(i, s)), { result: a, niceMin: t, niceMax: e };
    } }, { key: "_adjustTicksForSmallRange", value: function(t, e, i) {
      var a = t;
      if (e !== void 0 && this.w.config.yaxis[e].labels.formatter && this.w.config.yaxis[e].tickAmount === void 0) {
        var s = Number(this.w.config.yaxis[e].labels.formatter(1));
        P.isNumber(s) && this.w.globals.yValueDecimal === 0 && (a = Math.ceil(i));
      }
      return a < t ? a : t;
    } }, { key: "setYScaleForIndex", value: function(t, e, i) {
      var a = this.w.globals, s = this.w.config, r = a.isBarHorizontal ? s.xaxis : s.yaxis[t];
      a.yAxisScale[t] === void 0 && (a.yAxisScale[t] = []);
      var o = Math.abs(i - e);
      if (r.logarithmic && o <= 5 && (a.invalidLogScale = !0), r.logarithmic && o > 5)
        a.allSeriesCollapsed = !1, a.yAxisScale[t] = this.logarithmicScale(e, i, r.logBase), a.yAxisScale[t] = r.forceNiceScale ? this.logarithmicScaleNice(e, i, r.logBase) : this.logarithmicScale(e, i, r.logBase);
      else if (i !== -Number.MAX_VALUE && P.isNumber(i))
        if (a.allSeriesCollapsed = !1, r.min === void 0 && r.max === void 0 || r.forceNiceScale) {
          var n = s.yaxis[t].max === void 0 && s.yaxis[t].min === void 0 || s.yaxis[t].forceNiceScale;
          a.yAxisScale[t] = this.niceScale(e, i, r.tickAmount ? r.tickAmount : o < 5 && o > 1 ? o + 1 : 5, t, n);
        } else
          a.yAxisScale[t] = this.linearScale(e, i, r.tickAmount, t, s.yaxis[t].stepSize);
      else
        a.yAxisScale[t] = this.linearScale(0, 5, 5, t, s.yaxis[t].stepSize);
    } }, { key: "setXScale", value: function(t, e) {
      var i = this.w, a = i.globals, s = Math.abs(e - t);
      return e !== -Number.MAX_VALUE && P.isNumber(e) ? a.xAxisScale = this.linearScale(t, e, i.config.xaxis.tickAmount ? i.config.xaxis.tickAmount : s < 5 && s > 1 ? s + 1 : 5, 0, i.config.xaxis.stepSize) : a.xAxisScale = this.linearScale(0, 5, 5), a.xAxisScale;
    } }, { key: "setMultipleYScales", value: function() {
      var t = this, e = this.w.globals, i = this.w.config, a = e.minYArr.concat([]), s = e.maxYArr.concat([]), r = [];
      i.yaxis.forEach(function(o, n) {
        var h = n;
        i.series.forEach(function(g, p) {
          g.name === o.seriesName && (h = p, n !== p ? r.push({ index: p, similarIndex: n, alreadyExists: !0 }) : r.push({ index: p }));
        });
        var c = a[h], d = s[h];
        t.setYScaleForIndex(n, c, d);
      }), this.sameScaleInMultipleAxes(a, s, r);
    } }, { key: "sameScaleInMultipleAxes", value: function(t, e, i) {
      var a = this, s = this.w.config, r = this.w.globals, o = [];
      i.forEach(function(b) {
        b.alreadyExists && (o[b.index] === void 0 && (o[b.index] = []), o[b.index].push(b.index), o[b.index].push(b.similarIndex));
      }), r.yAxisSameScaleIndices = o, o.forEach(function(b, m) {
        o.forEach(function(w, A) {
          var l, u;
          m !== A && (l = b, u = w, l.filter(function(x) {
            return u.indexOf(x) !== -1;
          })).length > 0 && (o[m] = o[m].concat(o[A]));
        });
      });
      var n = o.map(function(b) {
        return b.filter(function(m, w) {
          return b.indexOf(m) === w;
        });
      }).map(function(b) {
        return b.sort();
      });
      o = o.filter(function(b) {
        return !!b;
      });
      var h = n.slice(), c = h.map(function(b) {
        return JSON.stringify(b);
      });
      h = h.filter(function(b, m) {
        return c.indexOf(JSON.stringify(b)) === m;
      });
      var d = [], g = [];
      t.forEach(function(b, m) {
        h.forEach(function(w, A) {
          w.indexOf(m) > -1 && (d[A] === void 0 && (d[A] = [], g[A] = []), d[A].push({ key: m, value: b }), g[A].push({ key: m, value: e[m] }));
        });
      });
      var p = Array.apply(null, Array(h.length)).map(Number.prototype.valueOf, Number.MIN_VALUE), f = Array.apply(null, Array(h.length)).map(Number.prototype.valueOf, -Number.MAX_VALUE);
      d.forEach(function(b, m) {
        b.forEach(function(w, A) {
          p[m] = Math.min(w.value, p[m]);
        });
      }), g.forEach(function(b, m) {
        b.forEach(function(w, A) {
          f[m] = Math.max(w.value, f[m]);
        });
      }), t.forEach(function(b, m) {
        g.forEach(function(w, A) {
          var l = p[A], u = f[A];
          s.chart.stacked && (u = 0, w.forEach(function(x, v) {
            x.value !== -Number.MAX_VALUE && (u += x.value), l !== Number.MIN_VALUE && (l += d[A][v].value);
          })), w.forEach(function(x, v) {
            w[v].key === m && (s.yaxis[m].min !== void 0 && (l = typeof s.yaxis[m].min == "function" ? s.yaxis[m].min(r.minY) : s.yaxis[m].min), s.yaxis[m].max !== void 0 && (u = typeof s.yaxis[m].max == "function" ? s.yaxis[m].max(r.maxY) : s.yaxis[m].max), a.setYScaleForIndex(m, l, u));
          });
        });
      });
    } }, { key: "autoScaleY", value: function(t, e, i) {
      t || (t = this);
      var a = t.w;
      if (a.globals.isMultipleYAxis || a.globals.collapsedSeries.length)
        return console.warn("autoScaleYaxis not supported in a multi-yaxis chart."), e;
      var s = a.globals.seriesX[0], r = a.config.chart.stacked;
      return e.forEach(function(o, n) {
        for (var h = 0, c = 0; c < s.length; c++)
          if (s[c] >= i.xaxis.min) {
            h = c;
            break;
          }
        var d, g, p = a.globals.minYArr[n], f = a.globals.maxYArr[n], b = a.globals.stackedSeriesTotals;
        a.globals.series.forEach(function(m, w) {
          var A = m[h];
          r ? (A = b[h], d = g = A, b.forEach(function(l, u) {
            s[u] <= i.xaxis.max && s[u] >= i.xaxis.min && (l > g && l !== null && (g = l), m[u] < d && m[u] !== null && (d = m[u]));
          })) : (d = g = A, m.forEach(function(l, u) {
            if (s[u] <= i.xaxis.max && s[u] >= i.xaxis.min) {
              var x = l, v = l;
              a.globals.series.forEach(function(k, S) {
                l !== null && (x = Math.min(k[u], x), v = Math.max(k[u], v));
              }), v > g && v !== null && (g = v), x < d && x !== null && (d = x);
            }
          })), d === void 0 && g === void 0 && (d = p, g = f), g *= g < 0 ? 0.9 : 1.1, (d *= d < 0 ? 1.1 : 0.9) === 0 && g === 0 && (d = -1, g = 1), g < 0 && g < f && (g = f), d < 0 && d > p && (d = p), e.length > 1 ? (e[w].min = o.min === void 0 ? d : o.min, e[w].max = o.max === void 0 ? g : o.max) : (e[0].min = o.min === void 0 ? d : o.min, e[0].max = o.max === void 0 ? g : o.max);
        });
      }), e;
    } }]), y;
  }(), Wt = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w, this.scales = new At(t);
    }
    return F(y, [{ key: "init", value: function() {
      this.setYRange(), this.setXRange(), this.setZRange();
    } }, { key: "getMinYMaxY", value: function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -Number.MAX_VALUE, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, s = this.w.config, r = this.w.globals, o = -Number.MAX_VALUE, n = Number.MIN_VALUE;
      a === null && (a = t + 1);
      var h = r.series, c = h, d = h;
      s.chart.type === "candlestick" ? (c = r.seriesCandleL, d = r.seriesCandleH) : s.chart.type === "boxPlot" ? (c = r.seriesCandleO, d = r.seriesCandleC) : r.isRangeData && (c = r.seriesRangeStart, d = r.seriesRangeEnd);
      for (var g = t; g < a; g++) {
        r.dataPoints = Math.max(r.dataPoints, h[g].length), r.categoryLabels.length && (r.dataPoints = r.categoryLabels.filter(function(b) {
          return b !== void 0;
        }).length), r.labels.length && s.xaxis.type !== "datetime" && r.series.reduce(function(b, m) {
          return b + m.length;
        }, 0) !== 0 && (r.dataPoints = Math.max(r.dataPoints, r.labels.length));
        for (var p = 0; p < r.series[g].length; p++) {
          var f = h[g][p];
          f !== null && P.isNumber(f) ? (d[g][p] !== void 0 && (o = Math.max(o, d[g][p]), e = Math.min(e, d[g][p])), c[g][p] !== void 0 && (e = Math.min(e, c[g][p]), i = Math.max(i, c[g][p])), this.w.config.chart.type !== "candlestick" && this.w.config.chart.type !== "boxPlot" && this.w.config.chart.type === "rangeArea" && this.w.config.chart.type === "rangeBar" || (this.w.config.chart.type !== "candlestick" && this.w.config.chart.type !== "boxPlot" || r.seriesCandleC[g][p] !== void 0 && (o = Math.max(o, r.seriesCandleO[g][p]), o = Math.max(o, r.seriesCandleH[g][p]), o = Math.max(o, r.seriesCandleL[g][p]), o = Math.max(o, r.seriesCandleC[g][p]), this.w.config.chart.type === "boxPlot" && (o = Math.max(o, r.seriesCandleM[g][p]))), !s.series[g].type || s.series[g].type === "candlestick" && s.series[g].type === "boxPlot" && s.series[g].type === "rangeArea" && s.series[g].type === "rangeBar" || (o = Math.max(o, r.series[g][p]), e = Math.min(e, r.series[g][p])), i = o), r.seriesGoals[g] && r.seriesGoals[g][p] && Array.isArray(r.seriesGoals[g][p]) && r.seriesGoals[g][p].forEach(function(b) {
            n !== Number.MIN_VALUE && (n = Math.min(n, b.value), e = n), o = Math.max(o, b.value), i = o;
          }), P.isFloat(f) && (f = P.noExponents(f), r.yValueDecimal = Math.max(r.yValueDecimal, f.toString().split(".")[1].length)), n > c[g][p] && c[g][p] < 0 && (n = c[g][p])) : r.hasNullValues = !0;
        }
      }
      return s.chart.type === "rangeBar" && r.seriesRangeStart.length && r.isBarHorizontal && (n = e), s.chart.type === "bar" && (n < 0 && o < 0 && (o = 0), n === Number.MIN_VALUE && (n = 0)), { minY: n, maxY: o, lowestY: e, highestY: i };
    } }, { key: "setYRange", value: function() {
      var t = this.w.globals, e = this.w.config;
      t.maxY = -Number.MAX_VALUE, t.minY = Number.MIN_VALUE;
      var i = Number.MAX_VALUE;
      if (t.isMultipleYAxis)
        for (var a = 0; a < t.series.length; a++) {
          var s = this.getMinYMaxY(a, i, null, a + 1);
          t.minYArr.push(s.minY), t.maxYArr.push(s.maxY), i = s.lowestY;
        }
      var r = this.getMinYMaxY(0, i, null, t.series.length);
      if (t.minY = r.minY, t.maxY = r.maxY, i = r.lowestY, e.chart.stacked && this._setStackedMinMax(), (e.chart.type === "line" || e.chart.type === "area" || e.chart.type === "candlestick" || e.chart.type === "boxPlot" || e.chart.type === "rangeBar" && !t.isBarHorizontal) && t.minY === Number.MIN_VALUE && i !== -Number.MAX_VALUE && i !== t.maxY) {
        var o = t.maxY - i;
        (i >= 0 && i <= 10 || e.yaxis[0].min !== void 0 || e.yaxis[0].max !== void 0) && (o = 0), t.minY = i - 5 * o / 100, i > 0 && t.minY < 0 && (t.minY = 0), t.maxY = t.maxY + 5 * o / 100;
      }
      return e.yaxis.forEach(function(n, h) {
        n.max !== void 0 && (typeof n.max == "number" ? t.maxYArr[h] = n.max : typeof n.max == "function" && (t.maxYArr[h] = n.max(t.isMultipleYAxis ? t.maxYArr[h] : t.maxY)), t.maxY = t.maxYArr[h]), n.min !== void 0 && (typeof n.min == "number" ? t.minYArr[h] = n.min : typeof n.min == "function" && (t.minYArr[h] = n.min(t.isMultipleYAxis ? t.minYArr[h] === Number.MIN_VALUE ? 0 : t.minYArr[h] : t.minY)), t.minY = t.minYArr[h]);
      }), t.isBarHorizontal && ["min", "max"].forEach(function(n) {
        e.xaxis[n] !== void 0 && typeof e.xaxis[n] == "number" && (n === "min" ? t.minY = e.xaxis[n] : t.maxY = e.xaxis[n]);
      }), t.isMultipleYAxis ? (this.scales.setMultipleYScales(), t.minY = i, t.yAxisScale.forEach(function(n, h) {
        t.minYArr[h] = n.niceMin, t.maxYArr[h] = n.niceMax;
      })) : (this.scales.setYScaleForIndex(0, t.minY, t.maxY), t.minY = t.yAxisScale[0].niceMin, t.maxY = t.yAxisScale[0].niceMax, t.minYArr[0] = t.yAxisScale[0].niceMin, t.maxYArr[0] = t.yAxisScale[0].niceMax), { minY: t.minY, maxY: t.maxY, minYArr: t.minYArr, maxYArr: t.maxYArr, yAxisScale: t.yAxisScale };
    } }, { key: "setXRange", value: function() {
      var t = this.w.globals, e = this.w.config, i = e.xaxis.type === "numeric" || e.xaxis.type === "datetime" || e.xaxis.type === "category" && !t.noLabelsProvided || t.noLabelsProvided || t.isXNumeric;
      if (t.isXNumeric && function() {
        for (var o = 0; o < t.series.length; o++)
          if (t.labels[o])
            for (var n = 0; n < t.labels[o].length; n++)
              t.labels[o][n] !== null && P.isNumber(t.labels[o][n]) && (t.maxX = Math.max(t.maxX, t.labels[o][n]), t.initialMaxX = Math.max(t.maxX, t.labels[o][n]), t.minX = Math.min(t.minX, t.labels[o][n]), t.initialMinX = Math.min(t.minX, t.labels[o][n]));
      }(), t.noLabelsProvided && e.xaxis.categories.length === 0 && (t.maxX = t.labels[t.labels.length - 1], t.initialMaxX = t.labels[t.labels.length - 1], t.minX = 1, t.initialMinX = 1), t.isXNumeric || t.noLabelsProvided || t.dataFormatXNumeric) {
        var a;
        if (e.xaxis.tickAmount === void 0 ? (a = Math.round(t.svgWidth / 150), e.xaxis.type === "numeric" && t.dataPoints < 30 && (a = t.dataPoints - 1), a > t.dataPoints && t.dataPoints !== 0 && (a = t.dataPoints - 1)) : e.xaxis.tickAmount === "dataPoints" ? (t.series.length > 1 && (a = t.series[t.maxValsInArrayIndex].length - 1), t.isXNumeric && (a = t.maxX - t.minX - 1)) : a = e.xaxis.tickAmount, t.xTickAmount = a, e.xaxis.max !== void 0 && typeof e.xaxis.max == "number" && (t.maxX = e.xaxis.max), e.xaxis.min !== void 0 && typeof e.xaxis.min == "number" && (t.minX = e.xaxis.min), e.xaxis.range !== void 0 && (t.minX = t.maxX - e.xaxis.range), t.minX !== Number.MAX_VALUE && t.maxX !== -Number.MAX_VALUE)
          if (e.xaxis.convertedCatToNumeric && !t.dataFormatXNumeric) {
            for (var s = [], r = t.minX - 1; r < t.maxX; r++)
              s.push(r + 1);
            t.xAxisScale = { result: s, niceMin: s[0], niceMax: s[s.length - 1] };
          } else
            t.xAxisScale = this.scales.setXScale(t.minX, t.maxX);
        else
          t.xAxisScale = this.scales.linearScale(0, a, a, 0, e.xaxis.stepSize), t.noLabelsProvided && t.labels.length > 0 && (t.xAxisScale = this.scales.linearScale(1, t.labels.length, a - 1, 0, e.xaxis.stepSize), t.seriesX = t.labels.slice());
        i && (t.labels = t.xAxisScale.result.slice());
      }
      return t.isBarHorizontal && t.labels.length && (t.xTickAmount = t.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), { minX: t.minX, maxX: t.maxX };
    } }, { key: "setZRange", value: function() {
      var t = this.w.globals;
      if (t.isDataXYZ) {
        for (var e = 0; e < t.series.length; e++)
          if (t.seriesZ[e] !== void 0)
            for (var i = 0; i < t.seriesZ[e].length; i++)
              t.seriesZ[e][i] !== null && P.isNumber(t.seriesZ[e][i]) && (t.maxZ = Math.max(t.maxZ, t.seriesZ[e][i]), t.minZ = Math.min(t.minZ, t.seriesZ[e][i]));
      }
    } }, { key: "_handleSingleDataPoint", value: function() {
      var t = this.w.globals, e = this.w.config;
      if (t.minX === t.maxX) {
        var i = new G(this.ctx);
        if (e.xaxis.type === "datetime") {
          var a = i.getDate(t.minX);
          e.xaxis.labels.datetimeUTC ? a.setUTCDate(a.getUTCDate() - 2) : a.setDate(a.getDate() - 2), t.minX = new Date(a).getTime();
          var s = i.getDate(t.maxX);
          e.xaxis.labels.datetimeUTC ? s.setUTCDate(s.getUTCDate() + 2) : s.setDate(s.getDate() + 2), t.maxX = new Date(s).getTime();
        } else
          (e.xaxis.type === "numeric" || e.xaxis.type === "category" && !t.noLabelsProvided) && (t.minX = t.minX - 2, t.initialMinX = t.minX, t.maxX = t.maxX + 2, t.initialMaxX = t.maxX);
      }
    } }, { key: "_getMinXDiff", value: function() {
      var t = this.w.globals;
      t.isXNumeric && t.seriesX.forEach(function(e, i) {
        e.length === 1 && e.push(t.seriesX[t.maxValsInArrayIndex][t.seriesX[t.maxValsInArrayIndex].length - 1]);
        var a = e.slice();
        a.sort(function(s, r) {
          return s - r;
        }), a.forEach(function(s, r) {
          if (r > 0) {
            var o = s - a[r - 1];
            o > 0 && (t.minXDiff = Math.min(o, t.minXDiff));
          }
        }), t.dataPoints !== 1 && t.minXDiff !== Number.MAX_VALUE || (t.minXDiff = 0.5);
      });
    } }, { key: "_setStackedMinMax", value: function() {
      var t = this, e = this.w.globals;
      if (e.series.length) {
        var i = e.seriesGroups;
        i.length || (i = [this.w.config.series.map(function(r) {
          return r.name;
        })]);
        var a = {}, s = {};
        i.forEach(function(r) {
          a[r] = [], s[r] = [], t.w.config.series.map(function(o, n) {
            return r.indexOf(o.name) > -1 ? n : null;
          }).filter(function(o) {
            return o !== null;
          }).forEach(function(o) {
            for (var n = 0; n < e.series[e.maxValsInArrayIndex].length; n++) {
              var h, c;
              a[r][n] === void 0 && (a[r][n] = 0, s[r][n] = 0), (t.w.config.chart.stacked && !e.comboCharts || t.w.config.chart.stacked && e.comboCharts && (!t.w.config.chart.stackOnlyBar || ((h = t.w.config.series) === null || h === void 0 || (c = h[o]) === null || c === void 0 ? void 0 : c.type) === "bar")) && e.series[o][n] !== null && P.isNumber(e.series[o][n]) && (e.series[o][n] > 0 ? a[r][n] += parseFloat(e.series[o][n]) + 1e-4 : s[r][n] += parseFloat(e.series[o][n]));
            }
          });
        }), Object.entries(a).forEach(function(r) {
          var o = Yt(r, 1)[0];
          a[o].forEach(function(n, h) {
            e.maxY = Math.max(e.maxY, a[o][h]), e.minY = Math.min(e.minY, s[o][h]);
          });
        });
      }
    } }]), y;
  }(), Bt = function() {
    function y(t, e) {
      Y(this, y), this.ctx = t, this.elgrid = e, this.w = t.w;
      var i = this.w;
      this.xaxisFontSize = i.config.xaxis.labels.style.fontSize, this.axisFontFamily = i.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = i.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = i.config.chart.type === "bar" && i.config.plotOptions.bar.horizontal, this.xAxisoffX = 0, i.config.xaxis.position === "bottom" && (this.xAxisoffX = i.globals.gridHeight), this.drawnLabels = [], this.axesUtils = new bt(t);
    }
    return F(y, [{ key: "drawYaxis", value: function(t) {
      var e = this, i = this.w, a = new z(this.ctx), s = i.config.yaxis[t].labels.style, r = s.fontSize, o = s.fontFamily, n = s.fontWeight, h = a.group({ class: "apexcharts-yaxis", rel: t, transform: "translate(" + i.globals.translateYAxisX[t] + ", 0)" });
      if (this.axesUtils.isYAxisHidden(t))
        return h;
      var c = a.group({ class: "apexcharts-yaxis-texts-g" });
      h.add(c);
      var d = i.globals.yAxisScale[t].result.length - 1, g = i.globals.gridHeight / d, p = i.globals.translateY, f = i.globals.yLabelFormatters[t], b = i.globals.yAxisScale[t].result.slice();
      b = this.axesUtils.checkForReversedLabels(t, b);
      var m = "";
      if (i.config.yaxis[t].labels.show)
        for (var w = function(C) {
          var L = b[C];
          L = f(L, C, i);
          var M = i.config.yaxis[t].labels.padding;
          i.config.yaxis[t].opposite && i.config.yaxis.length !== 0 && (M *= -1);
          var T = "end";
          i.config.yaxis[t].opposite && (T = "start"), i.config.yaxis[t].labels.align === "left" ? T = "start" : i.config.yaxis[t].labels.align === "center" ? T = "middle" : i.config.yaxis[t].labels.align === "right" && (T = "end");
          var I = e.axesUtils.getYAxisForeColor(s.colors, t), E = i.config.yaxis[t].labels.offsetY;
          i.config.chart.type === "heatmap" && (E -= (i.globals.gridHeight / i.globals.series.length - 1) / 2);
          var R = a.drawText({ x: M, y: p + d / 10 + E + 1, text: L, textAnchor: T, fontSize: r, fontFamily: o, fontWeight: n, maxWidth: i.config.yaxis[t].labels.maxWidth, foreColor: Array.isArray(I) ? I[C] : I, isPlainText: !1, cssClass: "apexcharts-yaxis-label " + s.cssClass });
          C === d && (m = R), c.add(R);
          var H = document.createElementNS(i.globals.SVGNS, "title");
          if (H.textContent = Array.isArray(L) ? L.join(" ") : L, R.node.appendChild(H), i.config.yaxis[t].labels.rotate !== 0) {
            var D = a.rotateAroundCenter(m.node), W = a.rotateAroundCenter(R.node);
            R.node.setAttribute("transform", "rotate(".concat(i.config.yaxis[t].labels.rotate, " ").concat(D.x, " ").concat(W.y, ")"));
          }
          p += g;
        }, A = d; A >= 0; A--)
          w(A);
      if (i.config.yaxis[t].title.text !== void 0) {
        var l = a.group({ class: "apexcharts-yaxis-title" }), u = 0;
        i.config.yaxis[t].opposite && (u = i.globals.translateYAxisX[t]);
        var x = a.drawText({ x: u, y: i.globals.gridHeight / 2 + i.globals.translateY + i.config.yaxis[t].title.offsetY, text: i.config.yaxis[t].title.text, textAnchor: "end", foreColor: i.config.yaxis[t].title.style.color, fontSize: i.config.yaxis[t].title.style.fontSize, fontWeight: i.config.yaxis[t].title.style.fontWeight, fontFamily: i.config.yaxis[t].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + i.config.yaxis[t].title.style.cssClass });
        l.add(x), h.add(l);
      }
      var v = i.config.yaxis[t].axisBorder, k = 31 + v.offsetX;
      if (i.config.yaxis[t].opposite && (k = -31 - v.offsetX), v.show) {
        var S = a.drawLine(k, i.globals.translateY + v.offsetY - 2, k, i.globals.gridHeight + i.globals.translateY + v.offsetY + 2, v.color, 0, v.width);
        h.add(S);
      }
      return i.config.yaxis[t].axisTicks.show && this.axesUtils.drawYAxisTicks(k, d, v, i.config.yaxis[t].axisTicks, t, g, h), h;
    } }, { key: "drawYaxisInversed", value: function(t) {
      var e = this.w, i = new z(this.ctx), a = i.group({ class: "apexcharts-xaxis apexcharts-yaxis-inversed" }), s = i.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")") });
      a.add(s);
      var r = e.globals.yAxisScale[t].result.length - 1, o = e.globals.gridWidth / r + 0.1, n = o + e.config.xaxis.labels.offsetX, h = e.globals.xLabelFormatter, c = e.globals.yAxisScale[t].result.slice(), d = e.globals.timescaleLabels;
      d.length > 0 && (this.xaxisLabels = d.slice(), r = (c = d.slice()).length), c = this.axesUtils.checkForReversedLabels(t, c);
      var g = d.length;
      if (e.config.xaxis.labels.show)
        for (var p = g ? 0 : r; g ? p < g : p >= 0; g ? p++ : p--) {
          var f = c[p];
          f = h(f, p, e);
          var b = e.globals.gridWidth + e.globals.padHorizontal - (n - o + e.config.xaxis.labels.offsetX);
          if (d.length) {
            var m = this.axesUtils.getLabel(c, d, b, p, this.drawnLabels, this.xaxisFontSize);
            b = m.x, f = m.text, this.drawnLabels.push(m.text), p === 0 && e.globals.skipFirstTimelinelabel && (f = ""), p === c.length - 1 && e.globals.skipLastTimelinelabel && (f = "");
          }
          var w = i.drawText({ x: b, y: this.xAxisoffX + e.config.xaxis.labels.offsetY + 30 - (e.config.xaxis.position === "top" ? e.globals.xAxisHeight + e.config.xaxis.axisTicks.height - 2 : 0), text: f, textAnchor: "middle", foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t] : this.xaxisForeColors, fontSize: this.xaxisFontSize, fontFamily: this.xaxisFontFamily, fontWeight: e.config.xaxis.labels.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-xaxis-label " + e.config.xaxis.labels.style.cssClass });
          s.add(w), w.tspan(f);
          var A = document.createElementNS(e.globals.SVGNS, "title");
          A.textContent = f, w.node.appendChild(A), n += o;
        }
      return this.inversedYAxisTitleText(a), this.inversedYAxisBorder(a), a;
    } }, { key: "inversedYAxisBorder", value: function(t) {
      var e = this.w, i = new z(this.ctx), a = e.config.xaxis.axisBorder;
      if (a.show) {
        var s = 0;
        e.config.chart.type === "bar" && e.globals.isXNumeric && (s -= 15);
        var r = i.drawLine(e.globals.padHorizontal + s + a.offsetX, this.xAxisoffX, e.globals.gridWidth, this.xAxisoffX, a.color, 0, a.height);
        this.elgrid && this.elgrid.elGridBorders && e.config.grid.show ? this.elgrid.elGridBorders.add(r) : t.add(r);
      }
    } }, { key: "inversedYAxisTitleText", value: function(t) {
      var e = this.w, i = new z(this.ctx);
      if (e.config.xaxis.title.text !== void 0) {
        var a = i.group({ class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed" }), s = i.drawText({ x: e.globals.gridWidth / 2 + e.config.xaxis.title.offsetX, y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(e.config.xaxis.title.style.fontSize) + e.config.xaxis.title.offsetY + 20, text: e.config.xaxis.title.text, textAnchor: "middle", fontSize: e.config.xaxis.title.style.fontSize, fontFamily: e.config.xaxis.title.style.fontFamily, fontWeight: e.config.xaxis.title.style.fontWeight, foreColor: e.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass });
        a.add(s), t.add(a);
      }
    } }, { key: "yAxisTitleRotate", value: function(t, e) {
      var i = this.w, a = new z(this.ctx), s = { width: 0, height: 0 }, r = { width: 0, height: 0 }, o = i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-texts-g"));
      o !== null && (s = o.getBoundingClientRect());
      var n = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-title text"));
      if (n !== null && (r = n.getBoundingClientRect()), n !== null) {
        var h = this.xPaddingForYAxisTitle(t, s, r, e);
        n.setAttribute("x", h.xPos - (e ? 10 : 0));
      }
      if (n !== null) {
        var c = a.rotateAroundCenter(n);
        n.setAttribute("transform", "rotate(".concat(e ? -1 * i.config.yaxis[t].title.rotate : i.config.yaxis[t].title.rotate, " ").concat(c.x, " ").concat(c.y, ")"));
      }
    } }, { key: "xPaddingForYAxisTitle", value: function(t, e, i, a) {
      var s = this.w, r = 0, o = 0, n = 10;
      return s.config.yaxis[t].title.text === void 0 || t < 0 ? { xPos: o, padd: 0 } : (a ? (o = e.width + s.config.yaxis[t].title.offsetX + i.width / 2 + n / 2, (r += 1) === 0 && (o -= n / 2)) : (o = -1 * e.width + s.config.yaxis[t].title.offsetX + n / 2 + i.width / 2, s.globals.isBarHorizontal && (n = 25, o = -1 * e.width - s.config.yaxis[t].title.offsetX - n)), { xPos: o, padd: n });
    } }, { key: "setYAxisXPosition", value: function(t, e) {
      var i = this.w, a = 0, s = 0, r = 18, o = 1;
      i.config.yaxis.length > 1 && (this.multipleYs = !0), i.config.yaxis.map(function(n, h) {
        var c = i.globals.ignoreYAxisIndexes.indexOf(h) > -1 || !n.show || n.floating || t[h].width === 0, d = t[h].width + e[h].width;
        n.opposite ? i.globals.isBarHorizontal ? (s = i.globals.gridWidth + i.globals.translateX - 1, i.globals.translateYAxisX[h] = s - n.labels.offsetX) : (s = i.globals.gridWidth + i.globals.translateX + o, c || (o = o + d + 20), i.globals.translateYAxisX[h] = s - n.labels.offsetX + 20) : (a = i.globals.translateX - r, c || (r = r + d + 20), i.globals.translateYAxisX[h] = a + n.labels.offsetX);
      });
    } }, { key: "setYAxisTextAlignments", value: function() {
      var t = this.w, e = t.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");
      (e = P.listToArray(e)).forEach(function(i, a) {
        var s = t.config.yaxis[a];
        if (s && !s.floating && s.labels.align !== void 0) {
          var r = t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(a, "'] .apexcharts-yaxis-texts-g")), o = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(a, "'] .apexcharts-yaxis-label"));
          o = P.listToArray(o);
          var n = r.getBoundingClientRect();
          s.labels.align === "left" ? (o.forEach(function(h, c) {
            h.setAttribute("text-anchor", "start");
          }), s.opposite || r.setAttribute("transform", "translate(-".concat(n.width, ", 0)"))) : s.labels.align === "center" ? (o.forEach(function(h, c) {
            h.setAttribute("text-anchor", "middle");
          }), r.setAttribute("transform", "translate(".concat(n.width / 2 * (s.opposite ? 1 : -1), ", 0)"))) : s.labels.align === "right" && (o.forEach(function(h, c) {
            h.setAttribute("text-anchor", "end");
          }), s.opposite && r.setAttribute("transform", "translate(".concat(n.width, ", 0)")));
        }
      });
    } }]), y;
  }(), ve = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w, this.documentEvent = P.bind(this.documentEvent, this);
    }
    return F(y, [{ key: "addEventListener", value: function(t, e) {
      var i = this.w;
      i.globals.events.hasOwnProperty(t) ? i.globals.events[t].push(e) : i.globals.events[t] = [e];
    } }, { key: "removeEventListener", value: function(t, e) {
      var i = this.w;
      if (i.globals.events.hasOwnProperty(t)) {
        var a = i.globals.events[t].indexOf(e);
        a !== -1 && i.globals.events[t].splice(a, 1);
      }
    } }, { key: "fireEvent", value: function(t, e) {
      var i = this.w;
      if (i.globals.events.hasOwnProperty(t)) {
        e && e.length || (e = []);
        for (var a = i.globals.events[t], s = a.length, r = 0; r < s; r++)
          a[r].apply(null, e);
      }
    } }, { key: "setupEventHandlers", value: function() {
      var t = this, e = this.w, i = this.ctx, a = e.globals.dom.baseEl.querySelector(e.globals.chartClass);
      this.ctx.eventList.forEach(function(s) {
        a.addEventListener(s, function(r) {
          var o = Object.assign({}, e, { seriesIndex: e.globals.capturedSeriesIndex, dataPointIndex: e.globals.capturedDataPointIndex });
          r.type === "mousemove" || r.type === "touchmove" ? typeof e.config.chart.events.mouseMove == "function" && e.config.chart.events.mouseMove(r, i, o) : r.type === "mouseleave" || r.type === "touchleave" ? typeof e.config.chart.events.mouseLeave == "function" && e.config.chart.events.mouseLeave(r, i, o) : (r.type === "mouseup" && r.which === 1 || r.type === "touchend") && (typeof e.config.chart.events.click == "function" && e.config.chart.events.click(r, i, o), i.ctx.events.fireEvent("click", [r, i, o]));
        }, { capture: !1, passive: !0 });
      }), this.ctx.eventList.forEach(function(s) {
        e.globals.dom.baseEl.addEventListener(s, t.documentEvent, { passive: !0 });
      }), this.ctx.core.setupBrushHandler();
    } }, { key: "documentEvent", value: function(t) {
      var e = this.w, i = t.target.className;
      if (t.type === "click") {
        var a = e.globals.dom.baseEl.querySelector(".apexcharts-menu");
        a && a.classList.contains("apexcharts-menu-open") && i !== "apexcharts-menu-icon" && a.classList.remove("apexcharts-menu-open");
      }
      e.globals.clientX = t.type === "touchmove" ? t.touches[0].clientX : t.clientX, e.globals.clientY = t.type === "touchmove" ? t.touches[0].clientY : t.clientY;
    } }]), y;
  }(), ye = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "setCurrentLocaleValues", value: function(t) {
      var e = this.w.config.chart.locales;
      window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (e = this.w.config.chart.locales.concat(window.Apex.chart.locales));
      var i = e.filter(function(s) {
        return s.name === t;
      })[0];
      if (!i)
        throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
      var a = P.extend(O, i);
      this.w.globals.locale = a.options;
    } }]), y;
  }(), we = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "drawAxis", value: function(t, e) {
      var i, a, s = this, r = this.w.globals, o = this.w.config, n = new Tt(this.ctx, e), h = new Bt(this.ctx, e);
      r.axisCharts && t !== "radar" && (r.isBarHorizontal ? (a = h.drawYaxisInversed(0), i = n.drawXaxisInversed(0), r.dom.elGraphical.add(i), r.dom.elGraphical.add(a)) : (i = n.drawXaxis(), r.dom.elGraphical.add(i), o.yaxis.map(function(c, d) {
        if (r.ignoreYAxisIndexes.indexOf(d) === -1 && (a = h.drawYaxis(d), r.dom.Paper.add(a), s.w.config.grid.position === "back")) {
          var g = r.dom.Paper.children()[1];
          g.remove(), r.dom.Paper.add(g);
        }
      })));
    } }]), y;
  }(), Gt = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "drawXCrosshairs", value: function() {
      var t = this.w, e = new z(this.ctx), i = new Z(this.ctx), a = t.config.xaxis.crosshairs.fill.gradient, s = t.config.xaxis.crosshairs.dropShadow, r = t.config.xaxis.crosshairs.fill.type, o = a.colorFrom, n = a.colorTo, h = a.opacityFrom, c = a.opacityTo, d = a.stops, g = s.enabled, p = s.left, f = s.top, b = s.blur, m = s.color, w = s.opacity, A = t.config.xaxis.crosshairs.fill.color;
      if (t.config.xaxis.crosshairs.show) {
        r === "gradient" && (A = e.drawGradient("vertical", o, n, h, c, null, d, null));
        var l = e.drawRect();
        t.config.xaxis.crosshairs.width === 1 && (l = e.drawLine());
        var u = t.globals.gridHeight;
        (!P.isNumber(u) || u < 0) && (u = 0);
        var x = t.config.xaxis.crosshairs.width;
        (!P.isNumber(x) || x < 0) && (x = 0), l.attr({ class: "apexcharts-xcrosshairs", x: 0, y: 0, y2: u, width: x, height: u, fill: A, filter: "none", "fill-opacity": t.config.xaxis.crosshairs.opacity, stroke: t.config.xaxis.crosshairs.stroke.color, "stroke-width": t.config.xaxis.crosshairs.stroke.width, "stroke-dasharray": t.config.xaxis.crosshairs.stroke.dashArray }), g && (l = i.dropShadow(l, { left: p, top: f, blur: b, color: m, opacity: w })), t.globals.dom.elGraphical.add(l);
      }
    } }, { key: "drawYCrosshairs", value: function() {
      var t = this.w, e = new z(this.ctx), i = t.config.yaxis[0].crosshairs, a = t.globals.barPadForNumericAxis;
      if (t.config.yaxis[0].crosshairs.show) {
        var s = e.drawLine(-a, 0, t.globals.gridWidth + a, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width);
        s.attr({ class: "apexcharts-ycrosshairs" }), t.globals.dom.elGraphical.add(s);
      }
      var r = e.drawLine(-a, 0, t.globals.gridWidth + a, 0, i.stroke.color, 0, 0);
      r.attr({ class: "apexcharts-ycrosshairs-hidden" }), t.globals.dom.elGraphical.add(r);
    } }]), y;
  }(), ke = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "checkResponsiveConfig", value: function(t) {
      var e = this, i = this.w, a = i.config;
      if (a.responsive.length !== 0) {
        var s = a.responsive.slice();
        s.sort(function(h, c) {
          return h.breakpoint > c.breakpoint ? 1 : c.breakpoint > h.breakpoint ? -1 : 0;
        }).reverse();
        var r = new Mt({}), o = function() {
          var h = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, c = s[0].breakpoint, d = window.innerWidth > 0 ? window.innerWidth : screen.width;
          if (d > c) {
            var g = q.extendArrayProps(r, i.globals.initialConfig, i);
            h = P.extend(g, h), h = P.extend(i.config, h), e.overrideResponsiveOptions(h);
          } else
            for (var p = 0; p < s.length; p++)
              d < s[p].breakpoint && (h = q.extendArrayProps(r, s[p].options, i), h = P.extend(i.config, h), e.overrideResponsiveOptions(h));
        };
        if (t) {
          var n = q.extendArrayProps(r, t, i);
          n = P.extend(i.config, n), o(n = P.extend(n, t));
        } else
          o({});
      }
    } }, { key: "overrideResponsiveOptions", value: function(t) {
      var e = new Mt(t).init({ responsiveOverride: !0 });
      this.w.config = e;
    } }]), y;
  }(), Ae = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.colors = [], this.w = t.w;
      var e = this.w;
      this.isColorFn = !1, this.isHeatmapDistributed = e.config.chart.type === "treemap" && e.config.plotOptions.treemap.distributed || e.config.chart.type === "heatmap" && e.config.plotOptions.heatmap.distributed, this.isBarDistributed = e.config.plotOptions.bar.distributed && (e.config.chart.type === "bar" || e.config.chart.type === "rangeBar");
    }
    return F(y, [{ key: "init", value: function() {
      this.setDefaultColors();
    } }, { key: "setDefaultColors", value: function() {
      var t, e = this, i = this.w, a = new P();
      if (i.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(i.config.theme.mode)), i.config.colors === void 0 || ((t = i.config.colors) === null || t === void 0 ? void 0 : t.length) === 0 ? i.globals.colors = this.predefined() : (i.globals.colors = i.config.colors, Array.isArray(i.config.colors) && i.config.colors.length > 0 && typeof i.config.colors[0] == "function" && (i.globals.colors = i.config.series.map(function(f, b) {
        var m = i.config.colors[b];
        return m || (m = i.config.colors[0]), typeof m == "function" ? (e.isColorFn = !0, m({ value: i.globals.axisCharts ? i.globals.series[b][0] ? i.globals.series[b][0] : 0 : i.globals.series[b], seriesIndex: b, dataPointIndex: b, w: i })) : m;
      }))), i.globals.seriesColors.map(function(f, b) {
        f && (i.globals.colors[b] = f);
      }), i.config.theme.monochrome.enabled) {
        var s = [], r = i.globals.series.length;
        (this.isBarDistributed || this.isHeatmapDistributed) && (r = i.globals.series[0].length * i.globals.series.length);
        for (var o = i.config.theme.monochrome.color, n = 1 / (r / i.config.theme.monochrome.shadeIntensity), h = i.config.theme.monochrome.shadeTo, c = 0, d = 0; d < r; d++) {
          var g = void 0;
          h === "dark" ? (g = a.shadeColor(-1 * c, o), c += n) : (g = a.shadeColor(c, o), c += n), s.push(g);
        }
        i.globals.colors = s.slice();
      }
      var p = i.globals.colors.slice();
      this.pushExtraColors(i.globals.colors), ["fill", "stroke"].forEach(function(f) {
        i.config[f].colors === void 0 ? i.globals[f].colors = e.isColorFn ? i.config.colors : p : i.globals[f].colors = i.config[f].colors.slice(), e.pushExtraColors(i.globals[f].colors);
      }), i.config.dataLabels.style.colors === void 0 ? i.globals.dataLabels.style.colors = p : i.globals.dataLabels.style.colors = i.config.dataLabels.style.colors.slice(), this.pushExtraColors(i.globals.dataLabels.style.colors, 50), i.config.plotOptions.radar.polygons.fill.colors === void 0 ? i.globals.radarPolygons.fill.colors = [i.config.theme.mode === "dark" ? "#424242" : "none"] : i.globals.radarPolygons.fill.colors = i.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(i.globals.radarPolygons.fill.colors, 20), i.config.markers.colors === void 0 ? i.globals.markers.colors = p : i.globals.markers.colors = i.config.markers.colors.slice(), this.pushExtraColors(i.globals.markers.colors);
    } }, { key: "pushExtraColors", value: function(t, e) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a = this.w, s = e || a.globals.series.length;
      if (i === null && (i = this.isBarDistributed || this.isHeatmapDistributed || a.config.chart.type === "heatmap" && a.config.plotOptions.heatmap.colorScale.inverse), i && a.globals.series.length && (s = a.globals.series[a.globals.maxValsInArrayIndex].length * a.globals.series.length), t.length < s)
        for (var r = s - t.length, o = 0; o < r; o++)
          t.push(t[o]);
    } }, { key: "updateThemeOptions", value: function(t) {
      t.chart = t.chart || {}, t.tooltip = t.tooltip || {};
      var e = t.theme.mode || "light", i = t.theme.palette ? t.theme.palette : e === "dark" ? "palette4" : "palette1", a = t.chart.foreColor ? t.chart.foreColor : e === "dark" ? "#f6f7f8" : "#373d3f";
      return t.tooltip.theme = e, t.chart.foreColor = a, t.theme.palette = i, t;
    } }, { key: "predefined", value: function() {
      switch (this.w.config.theme.palette) {
        case "palette1":
        default:
          this.colors = ["#008FFB", "#00E396", "#FEB019", "#FF4560", "#775DD0"];
          break;
        case "palette2":
          this.colors = ["#3f51b5", "#03a9f4", "#4caf50", "#f9ce1d", "#FF9800"];
          break;
        case "palette3":
          this.colors = ["#33b2df", "#546E7A", "#d4526e", "#13d8aa", "#A5978B"];
          break;
        case "palette4":
          this.colors = ["#4ecdc4", "#c7f464", "#81D4FA", "#fd6a6a", "#546E7A"];
          break;
        case "palette5":
          this.colors = ["#2b908f", "#f9a3a4", "#90ee7e", "#fa4443", "#69d2e7"];
          break;
        case "palette6":
          this.colors = ["#449DD1", "#F86624", "#EA3546", "#662E9B", "#C5D86D"];
          break;
        case "palette7":
          this.colors = ["#D7263D", "#1B998B", "#2E294E", "#F46036", "#E2C044"];
          break;
        case "palette8":
          this.colors = ["#662E9B", "#F86624", "#F9C80E", "#EA3546", "#43BCCD"];
          break;
        case "palette9":
          this.colors = ["#5C4742", "#A5978B", "#8D5B4C", "#5A2A27", "#C4BBAF"];
          break;
        case "palette10":
          this.colors = ["#A300D6", "#7D02EB", "#5653FE", "#2983FF", "#00B1F2"];
      }
      return this.colors;
    } }]), y;
  }(), Se = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "draw", value: function() {
      this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
    } }, { key: "drawTitleSubtitle", value: function(t) {
      var e = this.w, i = t === "title" ? e.config.title : e.config.subtitle, a = e.globals.svgWidth / 2, s = i.offsetY, r = "middle";
      if (i.align === "left" ? (a = 10, r = "start") : i.align === "right" && (a = e.globals.svgWidth - 10, r = "end"), a += i.offsetX, s = s + parseInt(i.style.fontSize, 10) + i.margin / 2, i.text !== void 0) {
        var o = new z(this.ctx).drawText({ x: a, y: s, text: i.text, textAnchor: r, fontSize: i.style.fontSize, fontFamily: i.style.fontFamily, fontWeight: i.style.fontWeight, foreColor: i.style.color, opacity: 1 });
        o.node.setAttribute("class", "apexcharts-".concat(t, "-text")), e.globals.dom.Paper.add(o);
      }
    } }]), y;
  }(), Ce = function() {
    function y(t) {
      Y(this, y), this.w = t.w, this.dCtx = t;
    }
    return F(y, [{ key: "getTitleSubtitleCoords", value: function(t) {
      var e = this.w, i = 0, a = 0, s = t === "title" ? e.config.title.floating : e.config.subtitle.floating, r = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t, "-text"));
      if (r !== null && !s) {
        var o = r.getBoundingClientRect();
        i = o.width, a = e.globals.axisCharts ? o.height + 5 : o.height;
      }
      return { width: i, height: a };
    } }, { key: "getLegendsRect", value: function() {
      var t = this.w, e = t.globals.dom.elLegendWrap;
      t.config.legend.height || t.config.legend.position !== "top" && t.config.legend.position !== "bottom" || (e.style.maxHeight = t.globals.svgHeight / 2 + "px");
      var i = Object.assign({}, P.getBoundingClientRect(e));
      return e !== null && !t.config.legend.floating && t.config.legend.show ? this.dCtx.lgRect = { x: i.x, y: i.y, height: i.height, width: i.height === 0 ? 0 : i.width } : this.dCtx.lgRect = { x: 0, y: 0, height: 0, width: 0 }, t.config.legend.position !== "left" && t.config.legend.position !== "right" || 1.5 * this.dCtx.lgRect.width > t.globals.svgWidth && (this.dCtx.lgRect.width = t.globals.svgWidth / 1.5), this.dCtx.lgRect;
    } }, { key: "getLargestStringFromMultiArr", value: function(t, e) {
      var i = t;
      if (this.w.globals.isMultiLineX) {
        var a = e.map(function(r, o) {
          return Array.isArray(r) ? r.length : 1;
        }), s = Math.max.apply(Math, J(a));
        i = e[a.indexOf(s)];
      }
      return i;
    } }]), y;
  }(), Le = function() {
    function y(t) {
      Y(this, y), this.w = t.w, this.dCtx = t;
    }
    return F(y, [{ key: "getxAxisLabelsCoords", value: function() {
      var t, e = this.w, i = e.globals.labels.slice();
      if (e.config.xaxis.convertedCatToNumeric && i.length === 0 && (i = e.globals.categoryLabels), e.globals.timescaleLabels.length > 0) {
        var a = this.getxAxisTimeScaleLabelsCoords();
        t = { width: a.width, height: a.height }, e.globals.rotateXLabels = !1;
      } else {
        this.dCtx.lgWidthForSideLegends = e.config.legend.position !== "left" && e.config.legend.position !== "right" || e.config.legend.floating ? 0 : this.dCtx.lgRect.width;
        var s = e.globals.xLabelFormatter, r = P.getLargestStringFromArr(i), o = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r, i);
        e.globals.isBarHorizontal && (o = r = e.globals.yAxisScale[0].result.reduce(function(f, b) {
          return f.length > b.length ? f : b;
        }, 0));
        var n = new rt(this.dCtx.ctx), h = r;
        r = n.xLabelFormat(s, r, h, { i: void 0, dateFormatter: new G(this.dCtx.ctx).formatDate, w: e }), o = n.xLabelFormat(s, o, h, { i: void 0, dateFormatter: new G(this.dCtx.ctx).formatDate, w: e }), (e.config.xaxis.convertedCatToNumeric && r === void 0 || String(r).trim() === "") && (o = r = "1");
        var c = new z(this.dCtx.ctx), d = c.getTextRects(r, e.config.xaxis.labels.style.fontSize), g = d;
        if (r !== o && (g = c.getTextRects(o, e.config.xaxis.labels.style.fontSize)), (t = { width: d.width >= g.width ? d.width : g.width, height: d.height >= g.height ? d.height : g.height }).width * i.length > e.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && e.config.xaxis.labels.rotate !== 0 || e.config.xaxis.labels.rotateAlways) {
          if (!e.globals.isBarHorizontal) {
            e.globals.rotateXLabels = !0;
            var p = function(f) {
              return c.getTextRects(f, e.config.xaxis.labels.style.fontSize, e.config.xaxis.labels.style.fontFamily, "rotate(".concat(e.config.xaxis.labels.rotate, " 0 0)"), !1);
            };
            d = p(r), r !== o && (g = p(o)), t.height = (d.height > g.height ? d.height : g.height) / 1.5, t.width = d.width > g.width ? d.width : g.width;
          }
        } else
          e.globals.rotateXLabels = !1;
      }
      return e.config.xaxis.labels.show || (t = { width: 0, height: 0 }), { width: t.width, height: t.height };
    } }, { key: "getxAxisGroupLabelsCoords", value: function() {
      var t, e = this.w;
      if (!e.globals.hasXaxisGroups)
        return { width: 0, height: 0 };
      var i, a = ((t = e.config.xaxis.group.style) === null || t === void 0 ? void 0 : t.fontSize) || e.config.xaxis.labels.style.fontSize, s = e.globals.groups.map(function(d) {
        return d.title;
      }), r = P.getLargestStringFromArr(s), o = this.dCtx.dimHelpers.getLargestStringFromMultiArr(r, s), n = new z(this.dCtx.ctx), h = n.getTextRects(r, a), c = h;
      return r !== o && (c = n.getTextRects(o, a)), i = { width: h.width >= c.width ? h.width : c.width, height: h.height >= c.height ? h.height : c.height }, e.config.xaxis.labels.show || (i = { width: 0, height: 0 }), { width: i.width, height: i.height };
    } }, { key: "getxAxisTitleCoords", value: function() {
      var t = this.w, e = 0, i = 0;
      if (t.config.xaxis.title.text !== void 0) {
        var a = new z(this.dCtx.ctx).getTextRects(t.config.xaxis.title.text, t.config.xaxis.title.style.fontSize);
        e = a.width, i = a.height;
      }
      return { width: e, height: i };
    } }, { key: "getxAxisTimeScaleLabelsCoords", value: function() {
      var t, e = this.w;
      this.dCtx.timescaleLabels = e.globals.timescaleLabels.slice();
      var i = this.dCtx.timescaleLabels.map(function(s) {
        return s.value;
      }), a = i.reduce(function(s, r) {
        return s === void 0 ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : s.length > r.length ? s : r;
      }, 0);
      return 1.05 * (t = new z(this.dCtx.ctx).getTextRects(a, e.config.xaxis.labels.style.fontSize)).width * i.length > e.globals.gridWidth && e.config.xaxis.labels.rotate !== 0 && (e.globals.overlappingXLabels = !0), t;
    } }, { key: "additionalPaddingXLabels", value: function(t) {
      var e = this, i = this.w, a = i.globals, s = i.config, r = s.xaxis.type, o = t.width;
      a.skipLastTimelinelabel = !1, a.skipFirstTimelinelabel = !1;
      var n = i.config.yaxis[0].opposite && i.globals.isBarHorizontal, h = function(c, d) {
        s.yaxis.length > 1 && function(g) {
          return a.collapsedSeriesIndices.indexOf(g) !== -1;
        }(d) || function(g) {
          if (e.dCtx.timescaleLabels && e.dCtx.timescaleLabels.length) {
            var p = e.dCtx.timescaleLabels[0], f = e.dCtx.timescaleLabels[e.dCtx.timescaleLabels.length - 1].position + o / 1.75 - e.dCtx.yAxisWidthRight, b = p.position - o / 1.75 + e.dCtx.yAxisWidthLeft, m = i.config.legend.position === "right" && e.dCtx.lgRect.width > 0 ? e.dCtx.lgRect.width : 0;
            f > a.svgWidth - a.translateX - m && (a.skipLastTimelinelabel = !0), b < -(g.show && !g.floating || s.chart.type !== "bar" && s.chart.type !== "candlestick" && s.chart.type !== "rangeBar" && s.chart.type !== "boxPlot" ? 10 : o / 1.75) && (a.skipFirstTimelinelabel = !0);
          } else
            r === "datetime" ? e.dCtx.gridPad.right < o && !a.rotateXLabels && (a.skipLastTimelinelabel = !0) : r !== "datetime" && e.dCtx.gridPad.right < o / 2 - e.dCtx.yAxisWidthRight && !a.rotateXLabels && !i.config.xaxis.labels.trim && (i.config.xaxis.tickPlacement !== "between" || i.globals.isBarHorizontal) && (e.dCtx.xPadRight = o / 2 + 1);
        }(c);
      };
      s.yaxis.forEach(function(c, d) {
        n ? (e.dCtx.gridPad.left < o && (e.dCtx.xPadLeft = o / 2 + 1), e.dCtx.xPadRight = o / 2 + 1) : h(c, d);
      });
    } }]), y;
  }(), Pe = function() {
    function y(t) {
      Y(this, y), this.w = t.w, this.dCtx = t;
    }
    return F(y, [{ key: "getyAxisLabelsCoords", value: function() {
      var t = this, e = this.w, i = [], a = 10, s = new bt(this.dCtx.ctx);
      return e.config.yaxis.map(function(r, o) {
        var n = { seriesIndex: o, dataPointIndex: -1, w: e }, h = e.globals.yAxisScale[o], c = 0;
        if (!s.isYAxisHidden(o) && r.labels.show && r.labels.minWidth !== void 0 && (c = r.labels.minWidth), !s.isYAxisHidden(o) && r.labels.show && h.result.length) {
          var d = e.globals.yLabelFormatters[o], g = h.niceMin === Number.MIN_VALUE ? 0 : h.niceMin, p = h.result.reduce(function(u, x) {
            var v, k;
            return ((v = String(d(u, n))) === null || v === void 0 ? void 0 : v.length) > ((k = String(d(x, n))) === null || k === void 0 ? void 0 : k.length) ? u : x;
          }, g), f = p = d(p, n);
          if (p !== void 0 && p.length !== 0 || (p = h.niceMax), e.globals.isBarHorizontal) {
            a = 0;
            var b = e.globals.labels.slice();
            p = P.getLargestStringFromArr(b), p = d(p, { seriesIndex: o, dataPointIndex: -1, w: e }), f = t.dCtx.dimHelpers.getLargestStringFromMultiArr(p, b);
          }
          var m = new z(t.dCtx.ctx), w = "rotate(".concat(r.labels.rotate, " 0 0)"), A = m.getTextRects(p, r.labels.style.fontSize, r.labels.style.fontFamily, w, !1), l = A;
          p !== f && (l = m.getTextRects(f, r.labels.style.fontSize, r.labels.style.fontFamily, w, !1)), i.push({ width: (c > l.width || c > A.width ? c : l.width > A.width ? l.width : A.width) + a, height: l.height > A.height ? l.height : A.height });
        } else
          i.push({ width: 0, height: 0 });
      }), i;
    } }, { key: "getyAxisTitleCoords", value: function() {
      var t = this, e = this.w, i = [];
      return e.config.yaxis.map(function(a, s) {
        if (a.show && a.title.text !== void 0) {
          var r = new z(t.dCtx.ctx), o = "rotate(".concat(a.title.rotate, " 0 0)"), n = r.getTextRects(a.title.text, a.title.style.fontSize, a.title.style.fontFamily, o, !1);
          i.push({ width: n.width, height: n.height });
        } else
          i.push({ width: 0, height: 0 });
      }), i;
    } }, { key: "getTotalYAxisWidth", value: function() {
      var t = this.w, e = 0, i = 0, a = 0, s = t.globals.yAxisScale.length > 1 ? 10 : 0, r = new bt(this.dCtx.ctx), o = function(n, h) {
        var c = t.config.yaxis[h].floating, d = 0;
        n.width > 0 && !c ? (d = n.width + s, function(g) {
          return t.globals.ignoreYAxisIndexes.indexOf(g) > -1;
        }(h) && (d = d - n.width - s)) : d = c || r.isYAxisHidden(h) ? 0 : 5, t.config.yaxis[h].opposite ? a += d : i += d, e += d;
      };
      return t.globals.yLabelsCoords.map(function(n, h) {
        o(n, h);
      }), t.globals.yTitleCoords.map(function(n, h) {
        o(n, h);
      }), t.globals.isBarHorizontal && !t.config.yaxis[0].floating && (e = t.globals.yLabelsCoords[0].width + t.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = i, this.dCtx.yAxisWidthRight = a, e;
    } }]), y;
  }(), Me = function() {
    function y(t) {
      Y(this, y), this.w = t.w, this.dCtx = t;
    }
    return F(y, [{ key: "gridPadForColumnsInNumericAxis", value: function(t) {
      var e = this.w;
      if (e.globals.noData || e.globals.allSeriesCollapsed)
        return 0;
      var i = function(c) {
        return c === "bar" || c === "rangeBar" || c === "candlestick" || c === "boxPlot";
      }, a = e.config.chart.type, s = 0, r = i(a) ? e.config.series.length : 1;
      if (e.globals.comboBarCount > 0 && (r = e.globals.comboBarCount), e.globals.collapsedSeries.forEach(function(c) {
        i(c.type) && (r -= 1);
      }), e.config.chart.stacked && (r = 1), (i(a) || e.globals.comboBarCount > 0) && e.globals.isXNumeric && !e.globals.isBarHorizontal && r > 0) {
        var o, n, h = Math.abs(e.globals.initialMaxX - e.globals.initialMinX);
        h <= 3 && (h = e.globals.dataPoints), o = h / t, e.globals.minXDiff && e.globals.minXDiff / o > 0 && (n = e.globals.minXDiff / o), n > t / 2 && (n /= 2), (s = n / r * parseInt(e.config.plotOptions.bar.columnWidth, 10) / 100) < 1 && (s = 1), s = s / (r > 1 ? 1 : 1.5) + 5, e.globals.barPadForNumericAxis = s;
      }
      return s;
    } }, { key: "gridPadFortitleSubtitle", value: function() {
      var t = this, e = this.w, i = e.globals, a = this.dCtx.isSparkline || !e.globals.axisCharts ? 0 : 10;
      ["title", "subtitle"].forEach(function(o) {
        e.config[o].text !== void 0 ? a += e.config[o].margin : a += t.dCtx.isSparkline || !e.globals.axisCharts ? 0 : 5;
      }), !e.config.legend.show || e.config.legend.position !== "bottom" || e.config.legend.floating || e.globals.axisCharts || (a += 10);
      var s = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), r = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
      i.gridHeight = i.gridHeight - s.height - r.height - a, i.translateY = i.translateY + s.height + r.height + a;
    } }, { key: "setGridXPosForDualYAxis", value: function(t, e) {
      var i = this.w, a = new bt(this.dCtx.ctx);
      i.config.yaxis.map(function(s, r) {
        i.globals.ignoreYAxisIndexes.indexOf(r) !== -1 || s.floating || a.isYAxisHidden(r) || (s.opposite && (i.globals.translateX = i.globals.translateX - (e[r].width + t[r].width) - parseInt(i.config.yaxis[r].labels.style.fontSize, 10) / 1.2 - 12), i.globals.translateX < 2 && (i.globals.translateX = 2));
      });
    } }]), y;
  }(), Ht = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new Ce(this), this.dimYAxis = new Pe(this), this.dimXAxis = new Le(this), this.dimGrid = new Me(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0;
    }
    return F(y, [{ key: "plotCoords", value: function() {
      var t = this, e = this.w, i = e.globals;
      this.lgRect = this.dimHelpers.getLegendsRect(), this.isSparkline && ((e.config.markers.discrete.length > 0 || e.config.markers.size > 0) && Object.entries(this.gridPad).forEach(function(s) {
        var r = Yt(s, 2), o = r[0], n = r[1];
        t.gridPad[o] = Math.max(n, t.w.globals.markers.largestSize / 1.5);
      }), this.gridPad.top = Math.max(e.config.stroke.width / 2, this.gridPad.top), this.gridPad.bottom = Math.max(e.config.stroke.width / 2, this.gridPad.bottom)), i.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), i.gridHeight = i.gridHeight - this.gridPad.top - this.gridPad.bottom, i.gridWidth = i.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
      var a = this.dimGrid.gridPadForColumnsInNumericAxis(i.gridWidth);
      i.gridWidth = i.gridWidth - 2 * a, i.translateX = i.translateX + this.gridPad.left + this.xPadLeft + (a > 0 ? a + 4 : 0), i.translateY = i.translateY + this.gridPad.top;
    } }, { key: "setDimensionsForAxisCharts", value: function() {
      var t = this, e = this.w, i = e.globals, a = this.dimYAxis.getyAxisLabelsCoords(), s = this.dimYAxis.getyAxisTitleCoords();
      e.globals.yLabelsCoords = [], e.globals.yTitleCoords = [], e.config.yaxis.map(function(p, f) {
        e.globals.yLabelsCoords.push({ width: a[f].width, index: f }), e.globals.yTitleCoords.push({ width: s[f].width, index: f });
      }), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
      var r = this.dimXAxis.getxAxisLabelsCoords(), o = this.dimXAxis.getxAxisGroupLabelsCoords(), n = this.dimXAxis.getxAxisTitleCoords();
      this.conditionalChecksForAxisCoords(r, n, o), i.translateXAxisY = e.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, i.translateXAxisX = e.globals.rotateXLabels && e.globals.isXNumeric && e.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, e.globals.isBarHorizontal && (i.rotateXLabels = !1, i.translateXAxisY = parseInt(e.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), i.translateXAxisY = i.translateXAxisY + e.config.xaxis.labels.offsetY, i.translateXAxisX = i.translateXAxisX + e.config.xaxis.labels.offsetX;
      var h = this.yAxisWidth, c = this.xAxisHeight;
      i.xAxisLabelsHeight = this.xAxisHeight - n.height, i.xAxisGroupLabelsHeight = i.xAxisLabelsHeight - r.height, i.xAxisLabelsWidth = this.xAxisWidth, i.xAxisHeight = this.xAxisHeight;
      var d = 10;
      (e.config.chart.type === "radar" || this.isSparkline) && (h = 0, c = i.goldenPadding), this.isSparkline && (this.lgRect = { height: 0, width: 0 }), (this.isSparkline || e.config.chart.type === "treemap") && (h = 0, c = 0, d = 0), this.isSparkline || this.dimXAxis.additionalPaddingXLabels(r);
      var g = function() {
        i.translateX = h, i.gridHeight = i.svgHeight - t.lgRect.height - c - (t.isSparkline || e.config.chart.type === "treemap" ? 0 : e.globals.rotateXLabels ? 10 : 15), i.gridWidth = i.svgWidth - h;
      };
      switch (e.config.xaxis.position === "top" && (d = i.xAxisHeight - e.config.xaxis.axisTicks.height - 5), e.config.legend.position) {
        case "bottom":
          i.translateY = d, g();
          break;
        case "top":
          i.translateY = this.lgRect.height + d, g();
          break;
        case "left":
          i.translateY = d, i.translateX = this.lgRect.width + h, i.gridHeight = i.svgHeight - c - 12, i.gridWidth = i.svgWidth - this.lgRect.width - h;
          break;
        case "right":
          i.translateY = d, i.translateX = h, i.gridHeight = i.svgHeight - c - 12, i.gridWidth = i.svgWidth - this.lgRect.width - h - 5;
          break;
        default:
          throw new Error("Legend position not supported");
      }
      this.dimGrid.setGridXPosForDualYAxis(s, a), new Bt(this.ctx).setYAxisXPosition(a, s);
    } }, { key: "setDimensionsForNonAxisCharts", value: function() {
      var t = this.w, e = t.globals, i = t.config, a = 0;
      t.config.legend.show && !t.config.legend.floating && (a = 20);
      var s = i.chart.type === "pie" || i.chart.type === "polarArea" || i.chart.type === "donut" ? "pie" : "radialBar", r = i.plotOptions[s].offsetY, o = i.plotOptions[s].offsetX;
      if (!i.legend.show || i.legend.floating)
        return e.gridHeight = e.svgHeight - i.grid.padding.left + i.grid.padding.right, e.gridWidth = e.gridHeight, e.translateY = r, void (e.translateX = o + (e.svgWidth - e.gridWidth) / 2);
      switch (i.legend.position) {
        case "bottom":
          e.gridHeight = e.svgHeight - this.lgRect.height - e.goldenPadding, e.gridWidth = e.svgWidth, e.translateY = r - 10, e.translateX = o + (e.svgWidth - e.gridWidth) / 2;
          break;
        case "top":
          e.gridHeight = e.svgHeight - this.lgRect.height - e.goldenPadding, e.gridWidth = e.svgWidth, e.translateY = this.lgRect.height + r + 10, e.translateX = o + (e.svgWidth - e.gridWidth) / 2;
          break;
        case "left":
          e.gridWidth = e.svgWidth - this.lgRect.width - a, e.gridHeight = i.chart.height !== "auto" ? e.svgHeight : e.gridWidth, e.translateY = r, e.translateX = o + this.lgRect.width + a;
          break;
        case "right":
          e.gridWidth = e.svgWidth - this.lgRect.width - a - 5, e.gridHeight = i.chart.height !== "auto" ? e.svgHeight : e.gridWidth, e.translateY = r, e.translateX = o + 10;
          break;
        default:
          throw new Error("Legend position not supported");
      }
    } }, { key: "conditionalChecksForAxisCoords", value: function(t, e, i) {
      var a = this.w, s = a.globals.hasXaxisGroups ? 2 : 1, r = i.height + t.height + e.height, o = a.globals.isMultiLineX ? 1.2 : a.globals.LINE_HEIGHT_RATIO, n = a.globals.rotateXLabels ? 22 : 10, h = a.globals.rotateXLabels && a.config.legend.position === "bottom" ? 10 : 0;
      this.xAxisHeight = r * o + s * n + h, this.xAxisWidth = t.width, this.xAxisHeight - e.height > a.config.xaxis.labels.maxHeight && (this.xAxisHeight = a.config.xaxis.labels.maxHeight), a.config.xaxis.labels.minHeight && this.xAxisHeight < a.config.xaxis.labels.minHeight && (this.xAxisHeight = a.config.xaxis.labels.minHeight), a.config.xaxis.floating && (this.xAxisHeight = 0);
      var c = 0, d = 0;
      a.config.yaxis.forEach(function(g) {
        c += g.labels.minWidth, d += g.labels.maxWidth;
      }), this.yAxisWidth < c && (this.yAxisWidth = c), this.yAxisWidth > d && (this.yAxisWidth = d);
    } }]), y;
  }(), Ie = function() {
    function y(t) {
      Y(this, y), this.w = t.w, this.lgCtx = t;
    }
    return F(y, [{ key: "getLegendStyles", value: function() {
      var t, e, i, a = document.createElement("style");
      a.setAttribute("type", "text/css");
      var s = ((t = this.lgCtx.ctx) === null || t === void 0 || (e = t.opts) === null || e === void 0 || (i = e.chart) === null || i === void 0 ? void 0 : i.nonce) || this.w.config.chart.nonce;
      s && a.setAttribute("nonce", s);
      var r = document.createTextNode(`
      .apexcharts-legend {
        display: flex;
        overflow: auto;
        padding: 0 10px;
      }
      .apexcharts-legend.apx-legend-position-bottom, .apexcharts-legend.apx-legend-position-top {
        flex-wrap: wrap
      }
      .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
        flex-direction: column;
        bottom: 0;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-left, .apexcharts-legend.apx-legend-position-top.apexcharts-align-left, .apexcharts-legend.apx-legend-position-right, .apexcharts-legend.apx-legend-position-left {
        justify-content: flex-start;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-center, .apexcharts-legend.apx-legend-position-top.apexcharts-align-center {
        justify-content: center;
      }
      .apexcharts-legend.apx-legend-position-bottom.apexcharts-align-right, .apexcharts-legend.apx-legend-position-top.apexcharts-align-right {
        justify-content: flex-end;
      }
      .apexcharts-legend-series {
        cursor: pointer;
        line-height: normal;
      }
      .apexcharts-legend.apx-legend-position-bottom .apexcharts-legend-series, .apexcharts-legend.apx-legend-position-top .apexcharts-legend-series{
        display: flex;
        align-items: center;
      }
      .apexcharts-legend-text {
        position: relative;
        font-size: 14px;
      }
      .apexcharts-legend-text *, .apexcharts-legend-marker * {
        pointer-events: none;
      }
      .apexcharts-legend-marker {
        position: relative;
        display: inline-block;
        cursor: pointer;
        margin-right: 3px;
        border-style: solid;
      }

      .apexcharts-legend.apexcharts-align-right .apexcharts-legend-series, .apexcharts-legend.apexcharts-align-left .apexcharts-legend-series{
        display: inline-block;
      }
      .apexcharts-legend-series.apexcharts-no-click {
        cursor: auto;
      }
      .apexcharts-legend .apexcharts-hidden-zero-series, .apexcharts-legend .apexcharts-hidden-null-series {
        display: none !important;
      }
      .apexcharts-inactive-legend {
        opacity: 0.45;
      }`);
      return a.appendChild(r), a;
    } }, { key: "getLegendBBox", value: function() {
      var t = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(), e = t.width;
      return { clwh: t.height, clww: e };
    } }, { key: "appendToForeignObject", value: function() {
      this.w.globals.dom.elLegendForeign.appendChild(this.getLegendStyles());
    } }, { key: "toggleDataSeries", value: function(t, e) {
      var i = this, a = this.w;
      if (a.globals.axisCharts || a.config.chart.type === "radialBar") {
        a.globals.resized = !0;
        var s = null, r = null;
        a.globals.risingSeries = [], a.globals.axisCharts ? (s = a.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t, "']")), r = parseInt(s.getAttribute("data:realIndex"), 10)) : (s = a.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t + 1, "']")), r = parseInt(s.getAttribute("rel"), 10) - 1), e ? [{ cs: a.globals.collapsedSeries, csi: a.globals.collapsedSeriesIndices }, { cs: a.globals.ancillaryCollapsedSeries, csi: a.globals.ancillaryCollapsedSeriesIndices }].forEach(function(c) {
          i.riseCollapsedSeries(c.cs, c.csi, r);
        }) : this.hideSeries({ seriesEl: s, realIndex: r });
      } else {
        var o = a.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t + 1, "'] path")), n = a.config.chart.type;
        if (n === "pie" || n === "polarArea" || n === "donut") {
          var h = a.config.plotOptions.pie.donut.labels;
          new z(this.lgCtx.ctx).pathMouseDown(o.members[0], null), this.lgCtx.ctx.pie.printDataLabelsInner(o.members[0].node, h);
        }
        o.fire("click");
      }
    } }, { key: "hideSeries", value: function(t) {
      var e = t.seriesEl, i = t.realIndex, a = this.w, s = P.clone(a.config.series);
      if (a.globals.axisCharts) {
        var r = !1;
        if (a.config.yaxis[i] && a.config.yaxis[i].show && a.config.yaxis[i].showAlways && (r = !0, a.globals.ancillaryCollapsedSeriesIndices.indexOf(i) < 0 && (a.globals.ancillaryCollapsedSeries.push({ index: i, data: s[i].data.slice(), type: e.parentNode.className.baseVal.split("-")[1] }), a.globals.ancillaryCollapsedSeriesIndices.push(i))), !r) {
          a.globals.collapsedSeries.push({ index: i, data: s[i].data.slice(), type: e.parentNode.className.baseVal.split("-")[1] }), a.globals.collapsedSeriesIndices.push(i);
          var o = a.globals.risingSeries.indexOf(i);
          a.globals.risingSeries.splice(o, 1);
        }
      } else
        a.globals.collapsedSeries.push({ index: i, data: s[i] }), a.globals.collapsedSeriesIndices.push(i);
      for (var n = e.childNodes, h = 0; h < n.length; h++)
        n[h].classList.contains("apexcharts-series-markers-wrap") && (n[h].classList.contains("apexcharts-hide") ? n[h].classList.remove("apexcharts-hide") : n[h].classList.add("apexcharts-hide"));
      a.globals.allSeriesCollapsed = a.globals.collapsedSeries.length === a.config.series.length, s = this._getSeriesBasedOnCollapsedState(s), this.lgCtx.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled);
    } }, { key: "riseCollapsedSeries", value: function(t, e, i) {
      var a = this.w, s = P.clone(a.config.series);
      if (t.length > 0) {
        for (var r = 0; r < t.length; r++)
          t[r].index === i && (a.globals.axisCharts ? (s[i].data = t[r].data.slice(), t.splice(r, 1), e.splice(r, 1), a.globals.risingSeries.push(i)) : (s[i] = t[r].data, t.splice(r, 1), e.splice(r, 1), a.globals.risingSeries.push(i)));
        s = this._getSeriesBasedOnCollapsedState(s), this.lgCtx.ctx.updateHelpers._updateSeries(s, a.config.chart.animations.dynamicAnimation.enabled);
      }
    } }, { key: "_getSeriesBasedOnCollapsedState", value: function(t) {
      var e = this.w;
      return e.globals.axisCharts ? t.forEach(function(i, a) {
        e.globals.collapsedSeriesIndices.indexOf(a) > -1 && (t[a].data = []);
      }) : t.forEach(function(i, a) {
        e.globals.collapsedSeriesIndices.indexOf(a) > -1 && (t[a] = 0);
      }), t;
    } }]), y;
  }(), ee = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = this.w.config.chart.type === "bar" && this.w.config.plotOptions.bar.distributed && this.w.config.series.length === 1, this.legendHelpers = new Ie(this);
    }
    return F(y, [{ key: "init", value: function() {
      var t = this.w, e = t.globals, i = t.config;
      if ((i.legend.showForSingleSeries && e.series.length === 1 || this.isBarsDistributed || e.series.length > 1 || !e.axisCharts) && i.legend.show) {
        for (; e.dom.elLegendWrap.firstChild; )
          e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);
        this.drawLegends(), P.isIE11() ? document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()) : this.legendHelpers.appendToForeignObject(), i.legend.position === "bottom" || i.legend.position === "top" ? this.legendAlignHorizontal() : i.legend.position !== "right" && i.legend.position !== "left" || this.legendAlignVertical();
      }
    } }, { key: "drawLegends", value: function() {
      var t = this, e = this.w, i = e.config.legend.fontFamily, a = e.globals.seriesNames, s = e.globals.colors.slice();
      if (e.config.chart.type === "heatmap") {
        var r = e.config.plotOptions.heatmap.colorScale.ranges;
        a = r.map(function(I) {
          return I.name ? I.name : I.from + " - " + I.to;
        }), s = r.map(function(I) {
          return I.color;
        });
      } else
        this.isBarsDistributed && (a = e.globals.labels.slice());
      e.config.legend.customLegendItems.length && (a = e.config.legend.customLegendItems);
      for (var o = e.globals.legendFormatter, n = e.config.legend.inverseOrder, h = n ? a.length - 1 : 0; n ? h >= 0 : h <= a.length - 1; n ? h-- : h++) {
        var c, d = o(a[h], { seriesIndex: h, w: e }), g = !1, p = !1;
        if (e.globals.collapsedSeries.length > 0)
          for (var f = 0; f < e.globals.collapsedSeries.length; f++)
            e.globals.collapsedSeries[f].index === h && (g = !0);
        if (e.globals.ancillaryCollapsedSeriesIndices.length > 0)
          for (var b = 0; b < e.globals.ancillaryCollapsedSeriesIndices.length; b++)
            e.globals.ancillaryCollapsedSeriesIndices[b] === h && (p = !0);
        var m = document.createElement("span");
        m.classList.add("apexcharts-legend-marker");
        var w = e.config.legend.markers.offsetX, A = e.config.legend.markers.offsetY, l = e.config.legend.markers.height, u = e.config.legend.markers.width, x = e.config.legend.markers.strokeWidth, v = e.config.legend.markers.strokeColor, k = e.config.legend.markers.radius, S = m.style;
        S.background = s[h], S.color = s[h], S.setProperty("background", s[h], "important"), e.config.legend.markers.fillColors && e.config.legend.markers.fillColors[h] && (S.background = e.config.legend.markers.fillColors[h]), e.globals.seriesColors[h] !== void 0 && (S.background = e.globals.seriesColors[h], S.color = e.globals.seriesColors[h]), S.height = Array.isArray(l) ? parseFloat(l[h]) + "px" : parseFloat(l) + "px", S.width = Array.isArray(u) ? parseFloat(u[h]) + "px" : parseFloat(u) + "px", S.left = (Array.isArray(w) ? parseFloat(w[h]) : parseFloat(w)) + "px", S.top = (Array.isArray(A) ? parseFloat(A[h]) : parseFloat(A)) + "px", S.borderWidth = Array.isArray(x) ? x[h] : x, S.borderColor = Array.isArray(v) ? v[h] : v, S.borderRadius = Array.isArray(k) ? parseFloat(k[h]) + "px" : parseFloat(k) + "px", e.config.legend.markers.customHTML && (Array.isArray(e.config.legend.markers.customHTML) ? e.config.legend.markers.customHTML[h] && (m.innerHTML = e.config.legend.markers.customHTML[h]()) : m.innerHTML = e.config.legend.markers.customHTML()), z.setAttrs(m, { rel: h + 1, "data:collapsed": g || p }), (g || p) && m.classList.add("apexcharts-inactive-legend");
        var C = document.createElement("div"), L = document.createElement("span");
        L.classList.add("apexcharts-legend-text"), L.innerHTML = Array.isArray(d) ? d.join(" ") : d;
        var M = e.config.legend.labels.useSeriesColors ? e.globals.colors[h] : Array.isArray(e.config.legend.labels.colors) ? (c = e.config.legend.labels.colors) === null || c === void 0 ? void 0 : c[h] : e.config.legend.labels.colors;
        M || (M = e.config.chart.foreColor), L.style.color = M, L.style.fontSize = parseFloat(e.config.legend.fontSize) + "px", L.style.fontWeight = e.config.legend.fontWeight, L.style.fontFamily = i || e.config.chart.fontFamily, z.setAttrs(L, { rel: h + 1, i: h, "data:default-text": encodeURIComponent(d), "data:collapsed": g || p }), C.appendChild(m), C.appendChild(L);
        var T = new q(this.ctx);
        e.config.legend.showForZeroSeries || T.getSeriesTotalByIndex(h) === 0 && T.seriesHaveSameValues(h) && !T.isSeriesNull(h) && e.globals.collapsedSeriesIndices.indexOf(h) === -1 && e.globals.ancillaryCollapsedSeriesIndices.indexOf(h) === -1 && C.classList.add("apexcharts-hidden-zero-series"), e.config.legend.showForNullSeries || T.isSeriesNull(h) && e.globals.collapsedSeriesIndices.indexOf(h) === -1 && e.globals.ancillaryCollapsedSeriesIndices.indexOf(h) === -1 && C.classList.add("apexcharts-hidden-null-series"), e.globals.dom.elLegendWrap.appendChild(C), e.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e.config.legend.horizontalAlign)), e.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + e.config.legend.position), C.classList.add("apexcharts-legend-series"), C.style.margin = "".concat(e.config.legend.itemMargin.vertical, "px ").concat(e.config.legend.itemMargin.horizontal, "px"), e.globals.dom.elLegendWrap.style.width = e.config.legend.width ? e.config.legend.width + "px" : "", e.globals.dom.elLegendWrap.style.height = e.config.legend.height ? e.config.legend.height + "px" : "", z.setAttrs(C, { rel: h + 1, seriesName: P.escapeString(a[h]), "data:collapsed": g || p }), (g || p) && C.classList.add("apexcharts-inactive-legend"), e.config.legend.onItemClick.toggleDataSeries || C.classList.add("apexcharts-no-click");
      }
      e.globals.dom.elWrap.addEventListener("click", t.onLegendClick, !0), e.config.legend.onItemHover.highlightDataSeries && e.config.legend.customLegendItems.length === 0 && (e.globals.dom.elWrap.addEventListener("mousemove", t.onLegendHovered, !0), e.globals.dom.elWrap.addEventListener("mouseout", t.onLegendHovered, !0));
    } }, { key: "setLegendWrapXY", value: function(t, e) {
      var i = this.w, a = i.globals.dom.elLegendWrap, s = a.getBoundingClientRect(), r = 0, o = 0;
      if (i.config.legend.position === "bottom")
        o += i.globals.svgHeight - s.height / 2;
      else if (i.config.legend.position === "top") {
        var n = new Ht(this.ctx), h = n.dimHelpers.getTitleSubtitleCoords("title").height, c = n.dimHelpers.getTitleSubtitleCoords("subtitle").height;
        o = o + (h > 0 ? h - 10 : 0) + (c > 0 ? c - 10 : 0);
      }
      a.style.position = "absolute", r = r + t + i.config.legend.offsetX, o = o + e + i.config.legend.offsetY, a.style.left = r + "px", a.style.top = o + "px", i.config.legend.position === "bottom" ? (a.style.top = "auto", a.style.bottom = 5 - i.config.legend.offsetY + "px") : i.config.legend.position === "right" && (a.style.left = "auto", a.style.right = 25 + i.config.legend.offsetX + "px"), ["width", "height"].forEach(function(d) {
        a.style[d] && (a.style[d] = parseInt(i.config.legend[d], 10) + "px");
      });
    } }, { key: "legendAlignHorizontal", value: function() {
      var t = this.w;
      t.globals.dom.elLegendWrap.style.right = 0;
      var e = this.legendHelpers.getLegendBBox(), i = new Ht(this.ctx), a = i.dimHelpers.getTitleSubtitleCoords("title"), s = i.dimHelpers.getTitleSubtitleCoords("subtitle"), r = 0;
      t.config.legend.position === "bottom" ? r = -e.clwh / 1.8 : t.config.legend.position === "top" && (r = a.height + s.height + t.config.title.margin + t.config.subtitle.margin - 10), this.setLegendWrapXY(20, r);
    } }, { key: "legendAlignVertical", value: function() {
      var t = this.w, e = this.legendHelpers.getLegendBBox(), i = 0;
      t.config.legend.position === "left" && (i = 20), t.config.legend.position === "right" && (i = t.globals.svgWidth - e.clww - 10), this.setLegendWrapXY(i, 20);
    } }, { key: "onLegendHovered", value: function(t) {
      var e = this.w, i = t.target.classList.contains("apexcharts-legend-series") || t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker");
      if (e.config.chart.type === "heatmap" || this.isBarsDistributed) {
        if (i) {
          var a = parseInt(t.target.getAttribute("rel"), 10) - 1;
          this.ctx.events.fireEvent("legendHover", [this.ctx, a, this.w]), new et(this.ctx).highlightRangeInSeries(t, t.target);
        }
      } else
        !t.target.classList.contains("apexcharts-inactive-legend") && i && new et(this.ctx).toggleSeriesOnHover(t, t.target);
    } }, { key: "onLegendClick", value: function(t) {
      var e = this.w;
      if (!e.config.legend.customLegendItems.length && (t.target.classList.contains("apexcharts-legend-series") || t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker"))) {
        var i = parseInt(t.target.getAttribute("rel"), 10) - 1, a = t.target.getAttribute("data:collapsed") === "true", s = this.w.config.chart.events.legendClick;
        typeof s == "function" && s(this.ctx, i, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, i, this.w]);
        var r = this.w.config.legend.markers.onClick;
        typeof r == "function" && t.target.classList.contains("apexcharts-legend-marker") && (r(this.ctx, i, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, i, this.w])), e.config.chart.type !== "treemap" && e.config.chart.type !== "heatmap" && !this.isBarsDistributed && e.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(i, a);
      }
    } }]), y;
  }(), ie = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
      var e = this.w;
      this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = e.globals.minX, this.maxX = e.globals.maxX;
    }
    return F(y, [{ key: "createToolbar", value: function() {
      var t = this, e = this.w, i = function() {
        return document.createElement("div");
      }, a = i();
      if (a.setAttribute("class", "apexcharts-toolbar"), a.style.top = e.config.chart.toolbar.offsetY + "px", a.style.right = 3 - e.config.chart.toolbar.offsetX + "px", e.globals.dom.elWrap.appendChild(a), this.elZoom = i(), this.elZoomIn = i(), this.elZoomOut = i(), this.elPan = i(), this.elSelection = i(), this.elZoomReset = i(), this.elMenuIcon = i(), this.elMenu = i(), this.elCustomIcons = [], this.t = e.config.chart.toolbar.tools, Array.isArray(this.t.customIcons))
        for (var s = 0; s < this.t.customIcons.length; s++)
          this.elCustomIcons.push(i());
      var r = [], o = function(d, g, p) {
        var f = d.toLowerCase();
        t.t[f] && e.config.chart.zoom.enabled && r.push({ el: g, icon: typeof t.t[f] == "string" ? t.t[f] : p, title: t.localeValues[d], class: "apexcharts-".concat(f, "-icon") });
      };
      o("zoomIn", this.elZoomIn, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`), o("zoomOut", this.elZoomOut, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`);
      var n = function(d) {
        t.t[d] && e.config.chart[d].enabled && r.push({ el: d === "zoom" ? t.elZoom : t.elSelection, icon: typeof t.t[d] == "string" ? t.t[d] : d === "zoom" ? `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
</svg>` : `<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>
</svg>`, title: t.localeValues[d === "zoom" ? "selectionZoom" : "selection"], class: e.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(d, "-icon") });
      };
      n("zoom"), n("selection"), this.t.pan && e.config.chart.zoom.enabled && r.push({ el: this.elPan, icon: typeof this.t.pan == "string" ? this.t.pan : `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <defs>
        <path d="M0 0h24v24H0z" id="a"/>
    </defs>
    <clipPath id="b">
        <use overflow="visible" xlink:href="#a"/>
    </clipPath>
    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>
</svg>`, title: this.localeValues.pan, class: e.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon" }), o("reset", this.elZoomReset, `<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`), this.t.download && r.push({ el: this.elMenuIcon, icon: typeof this.t.download == "string" ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>', title: this.localeValues.menu, class: "apexcharts-menu-icon" });
      for (var h = 0; h < this.elCustomIcons.length; h++)
        r.push({ el: this.elCustomIcons[h], icon: this.t.customIcons[h].icon, title: this.t.customIcons[h].title, index: this.t.customIcons[h].index, class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[h].class });
      r.forEach(function(d, g) {
        d.index && P.moveIndexInArray(r, g, d.index);
      });
      for (var c = 0; c < r.length; c++)
        z.setAttrs(r[c].el, { class: r[c].class, title: r[c].title }), r[c].el.innerHTML = r[c].icon, a.appendChild(r[c].el);
      this._createHamburgerMenu(a), e.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : e.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : e.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners();
    } }, { key: "_createHamburgerMenu", value: function(t) {
      this.elMenuItems = [], t.appendChild(this.elMenu), z.setAttrs(this.elMenu, { class: "apexcharts-menu" });
      for (var e = [{ name: "exportSVG", title: this.localeValues.exportToSVG }, { name: "exportPNG", title: this.localeValues.exportToPNG }, { name: "exportCSV", title: this.localeValues.exportToCSV }], i = 0; i < e.length; i++)
        this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i].innerHTML = e[i].title, z.setAttrs(this.elMenuItems[i], { class: "apexcharts-menu-item ".concat(e[i].name), title: e[i].title }), this.elMenu.appendChild(this.elMenuItems[i]);
    } }, { key: "addToolbarEventListeners", value: function() {
      var t = this;
      this.elZoomReset.addEventListener("click", this.handleZoomReset.bind(this)), this.elSelection.addEventListener("click", this.toggleZoomSelection.bind(this, "selection")), this.elZoom.addEventListener("click", this.toggleZoomSelection.bind(this, "zoom")), this.elZoomIn.addEventListener("click", this.handleZoomIn.bind(this)), this.elZoomOut.addEventListener("click", this.handleZoomOut.bind(this)), this.elPan.addEventListener("click", this.togglePanning.bind(this)), this.elMenuIcon.addEventListener("click", this.toggleMenu.bind(this)), this.elMenuItems.forEach(function(i) {
        i.classList.contains("exportSVG") ? i.addEventListener("click", t.handleDownload.bind(t, "svg")) : i.classList.contains("exportPNG") ? i.addEventListener("click", t.handleDownload.bind(t, "png")) : i.classList.contains("exportCSV") && i.addEventListener("click", t.handleDownload.bind(t, "csv"));
      });
      for (var e = 0; e < this.t.customIcons.length; e++)
        this.elCustomIcons[e].addEventListener("click", this.t.customIcons[e].click.bind(this, this.ctx, this.ctx.w));
    } }, { key: "toggleZoomSelection", value: function(t) {
      this.ctx.getSyncedCharts().forEach(function(e) {
        e.ctx.toolbar.toggleOtherControls();
        var i = t === "selection" ? e.ctx.toolbar.elSelection : e.ctx.toolbar.elZoom, a = t === "selection" ? "selectionEnabled" : "zoomEnabled";
        e.w.globals[a] = !e.w.globals[a], i.classList.contains(e.ctx.toolbar.selectedClass) ? i.classList.remove(e.ctx.toolbar.selectedClass) : i.classList.add(e.ctx.toolbar.selectedClass);
      });
    } }, { key: "getToolbarIconsReference", value: function() {
      var t = this.w;
      this.elZoom || (this.elZoom = t.globals.dom.baseEl.querySelector(".apexcharts-zoom-icon")), this.elPan || (this.elPan = t.globals.dom.baseEl.querySelector(".apexcharts-pan-icon")), this.elSelection || (this.elSelection = t.globals.dom.baseEl.querySelector(".apexcharts-selection-icon"));
    } }, { key: "enableZoomPanFromToolbar", value: function(t) {
      this.toggleOtherControls(), t === "pan" ? this.w.globals.panEnabled = !0 : this.w.globals.zoomEnabled = !0;
      var e = t === "pan" ? this.elPan : this.elZoom, i = t === "pan" ? this.elZoom : this.elPan;
      e && e.classList.add(this.selectedClass), i && i.classList.remove(this.selectedClass);
    } }, { key: "togglePanning", value: function() {
      this.ctx.getSyncedCharts().forEach(function(t) {
        t.ctx.toolbar.toggleOtherControls(), t.w.globals.panEnabled = !t.w.globals.panEnabled, t.ctx.toolbar.elPan.classList.contains(t.ctx.toolbar.selectedClass) ? t.ctx.toolbar.elPan.classList.remove(t.ctx.toolbar.selectedClass) : t.ctx.toolbar.elPan.classList.add(t.ctx.toolbar.selectedClass);
      });
    } }, { key: "toggleOtherControls", value: function() {
      var t = this, e = this.w;
      e.globals.panEnabled = !1, e.globals.zoomEnabled = !1, e.globals.selectionEnabled = !1, this.getToolbarIconsReference(), [this.elPan, this.elSelection, this.elZoom].forEach(function(i) {
        i && i.classList.remove(t.selectedClass);
      });
    } }, { key: "handleZoomIn", value: function() {
      var t = this.w;
      t.globals.isRangeBar && (this.minX = t.globals.minY, this.maxX = t.globals.maxY);
      var e = (this.minX + this.maxX) / 2, i = (this.minX + e) / 2, a = (this.maxX + e) / 2, s = this._getNewMinXMaxX(i, a);
      t.globals.disableZoomIn || this.zoomUpdateOptions(s.minX, s.maxX);
    } }, { key: "handleZoomOut", value: function() {
      var t = this.w;
      if (t.globals.isRangeBar && (this.minX = t.globals.minY, this.maxX = t.globals.maxY), !(t.config.xaxis.type === "datetime" && new Date(this.minX).getUTCFullYear() < 1e3)) {
        var e = (this.minX + this.maxX) / 2, i = this.minX - (e - this.minX), a = this.maxX - (e - this.maxX), s = this._getNewMinXMaxX(i, a);
        t.globals.disableZoomOut || this.zoomUpdateOptions(s.minX, s.maxX);
      }
    } }, { key: "_getNewMinXMaxX", value: function(t, e) {
      var i = this.w.config.xaxis.convertedCatToNumeric;
      return { minX: i ? Math.floor(t) : t, maxX: i ? Math.floor(e) : e };
    } }, { key: "zoomUpdateOptions", value: function(t, e) {
      var i = this.w;
      if (t !== void 0 || e !== void 0) {
        if (!(i.config.xaxis.convertedCatToNumeric && (t < 1 && (t = 1, e = i.globals.dataPoints), e - t < 2))) {
          var a = { min: t, max: e }, s = this.getBeforeZoomRange(a);
          s && (a = s.xaxis);
          var r = { xaxis: a }, o = P.clone(i.globals.initialConfig.yaxis);
          i.config.chart.zoom.autoScaleYaxis && (o = new At(this.ctx).autoScaleY(this.ctx, o, { xaxis: a })), i.config.chart.group || (r.yaxis = o), this.w.globals.zoomed = !0, this.ctx.updateHelpers._updateOptions(r, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(a, o);
        }
      } else
        this.handleZoomReset();
    } }, { key: "zoomCallback", value: function(t, e) {
      typeof this.ev.zoomed == "function" && this.ev.zoomed(this.ctx, { xaxis: t, yaxis: e });
    } }, { key: "getBeforeZoomRange", value: function(t, e) {
      var i = null;
      return typeof this.ev.beforeZoom == "function" && (i = this.ev.beforeZoom(this, { xaxis: t, yaxis: e })), i;
    } }, { key: "toggleMenu", value: function() {
      var t = this;
      window.setTimeout(function() {
        t.elMenu.classList.contains("apexcharts-menu-open") ? t.elMenu.classList.remove("apexcharts-menu-open") : t.elMenu.classList.add("apexcharts-menu-open");
      }, 0);
    } }, { key: "handleDownload", value: function(t) {
      var e = this.w, i = new Rt(this.ctx);
      switch (t) {
        case "svg":
          i.exportToSVG(this.ctx);
          break;
        case "png":
          i.exportToPng(this.ctx);
          break;
        case "csv":
          i.exportToCSV({ series: e.config.series, columnDelimiter: e.config.chart.toolbar.export.csv.columnDelimiter });
      }
    } }, { key: "handleZoomReset", value: function(t) {
      this.ctx.getSyncedCharts().forEach(function(e) {
        var i = e.w;
        if (i.globals.lastXAxis.min = i.globals.initialConfig.xaxis.min, i.globals.lastXAxis.max = i.globals.initialConfig.xaxis.max, e.updateHelpers.revertDefaultAxisMinMax(), typeof i.config.chart.events.beforeResetZoom == "function") {
          var a = i.config.chart.events.beforeResetZoom(e, i);
          a && e.updateHelpers.revertDefaultAxisMinMax(a);
        }
        typeof i.config.chart.events.zoomed == "function" && e.ctx.toolbar.zoomCallback({ min: i.config.xaxis.min, max: i.config.xaxis.max }), i.globals.zoomed = !1;
        var s = e.ctx.series.emptyCollapsedSeries(P.clone(i.globals.initialSeries));
        e.updateHelpers._updateSeries(s, i.config.chart.animations.dynamicAnimation.enabled);
      });
    } }, { key: "destroy", value: function() {
      this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null;
    } }]), y;
  }(), Te = function(y) {
    ut(e, ie);
    var t = pt(e);
    function e(i) {
      var a;
      return Y(this, e), (a = t.call(this, i)).ctx = i, a.w = i.w, a.dragged = !1, a.graphics = new z(a.ctx), a.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"], a.clientX = 0, a.clientY = 0, a.startX = 0, a.endX = 0, a.dragX = 0, a.startY = 0, a.endY = 0, a.dragY = 0, a.moveDirection = "none", a;
    }
    return F(e, [{ key: "init", value: function(i) {
      var a = this, s = i.xyRatios, r = this.w, o = this;
      this.xyRatios = s, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = r.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), r.globals.dom.elGraphical.add(this.zoomRect), r.globals.dom.elGraphical.add(this.selectionRect), r.config.chart.selection.type === "x" ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, minY: 0, maxX: r.globals.gridWidth, maxY: r.globals.gridHeight }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : r.config.chart.selection.type === "y" ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, maxX: r.globals.gridWidth }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = r.globals.dom.baseEl.querySelector("".concat(r.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach(function(n) {
        a.hoverArea.addEventListener(n, o.svgMouseEvents.bind(o, s), { capture: !1, passive: !0 });
      });
    } }, { key: "destroy", value: function() {
      this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null;
    } }, { key: "svgMouseEvents", value: function(i, a) {
      var s = this.w, r = this, o = this.ctx.toolbar, n = s.globals.zoomEnabled ? s.config.chart.zoom.type : s.config.chart.selection.type, h = s.config.chart.toolbar.autoSelected;
      if (a.shiftKey ? (this.shiftWasPressed = !0, o.enableZoomPanFromToolbar(h === "pan" ? "zoom" : "pan")) : this.shiftWasPressed && (o.enableZoomPanFromToolbar(h), this.shiftWasPressed = !1), a.target) {
        var c, d = a.target.classList;
        if (a.target.parentNode && a.target.parentNode !== null && (c = a.target.parentNode.classList), !(d.contains("apexcharts-selection-rect") || d.contains("apexcharts-legend-marker") || d.contains("apexcharts-legend-text") || c && c.contains("apexcharts-toolbar"))) {
          if (r.clientX = a.type === "touchmove" || a.type === "touchstart" ? a.touches[0].clientX : a.type === "touchend" ? a.changedTouches[0].clientX : a.clientX, r.clientY = a.type === "touchmove" || a.type === "touchstart" ? a.touches[0].clientY : a.type === "touchend" ? a.changedTouches[0].clientY : a.clientY, a.type === "mousedown" && a.which === 1) {
            var g = r.gridRect.getBoundingClientRect();
            r.startX = r.clientX - g.left, r.startY = r.clientY - g.top, r.dragged = !1, r.w.globals.mousedown = !0;
          }
          if ((a.type === "mousemove" && a.which === 1 || a.type === "touchmove") && (r.dragged = !0, s.globals.panEnabled ? (s.globals.selection = null, r.w.globals.mousedown && r.panDragging({ context: r, zoomtype: n, xyRatios: i })) : (r.w.globals.mousedown && s.globals.zoomEnabled || r.w.globals.mousedown && s.globals.selectionEnabled) && (r.selection = r.selectionDrawing({ context: r, zoomtype: n }))), a.type === "mouseup" || a.type === "touchend" || a.type === "mouseleave") {
            var p = r.gridRect.getBoundingClientRect();
            r.w.globals.mousedown && (r.endX = r.clientX - p.left, r.endY = r.clientY - p.top, r.dragX = Math.abs(r.endX - r.startX), r.dragY = Math.abs(r.endY - r.startY), (s.globals.zoomEnabled || s.globals.selectionEnabled) && r.selectionDrawn({ context: r, zoomtype: n }), s.globals.panEnabled && s.config.xaxis.convertedCatToNumeric && r.delayedPanScrolled()), s.globals.zoomEnabled && r.hideSelectionRect(this.selectionRect), r.dragged = !1, r.w.globals.mousedown = !1;
          }
          this.makeSelectionRectDraggable();
        }
      }
    } }, { key: "makeSelectionRectDraggable", value: function() {
      var i = this.w;
      if (this.selectionRect) {
        var a = this.selectionRect.node.getBoundingClientRect();
        a.width > 0 && a.height > 0 && this.slDraggableRect.selectize({ points: "l, r", pointSize: 8, pointType: "rect" }).resize({ constraint: { minX: 0, minY: 0, maxX: i.globals.gridWidth, maxY: i.globals.gridHeight } }).on("resizing", this.selectionDragging.bind(this, "resizing"));
      }
    } }, { key: "preselectedSelection", value: function() {
      var i = this.w, a = this.xyRatios;
      if (!i.globals.zoomEnabled) {
        if (i.globals.selection !== void 0 && i.globals.selection !== null)
          this.drawSelectionRect(i.globals.selection);
        else if (i.config.chart.selection.xaxis.min !== void 0 && i.config.chart.selection.xaxis.max !== void 0) {
          var s = (i.config.chart.selection.xaxis.min - i.globals.minX) / a.xRatio, r = i.globals.gridWidth - (i.globals.maxX - i.config.chart.selection.xaxis.max) / a.xRatio - s;
          i.globals.isRangeBar && (s = (i.config.chart.selection.xaxis.min - i.globals.yAxisScale[0].niceMin) / a.invertedYRatio, r = (i.config.chart.selection.xaxis.max - i.config.chart.selection.xaxis.min) / a.invertedYRatio);
          var o = { x: s, y: 0, width: r, height: i.globals.gridHeight, translateX: 0, translateY: 0, selectionEnabled: !0 };
          this.drawSelectionRect(o), this.makeSelectionRectDraggable(), typeof i.config.chart.events.selection == "function" && i.config.chart.events.selection(this.ctx, { xaxis: { min: i.config.chart.selection.xaxis.min, max: i.config.chart.selection.xaxis.max }, yaxis: {} });
        }
      }
    } }, { key: "drawSelectionRect", value: function(i) {
      var a = i.x, s = i.y, r = i.width, o = i.height, n = i.translateX, h = n === void 0 ? 0 : n, c = i.translateY, d = c === void 0 ? 0 : c, g = this.w, p = this.zoomRect, f = this.selectionRect;
      if (this.dragged || g.globals.selection !== null) {
        var b = { transform: "translate(" + h + ", " + d + ")" };
        g.globals.zoomEnabled && this.dragged && (r < 0 && (r = 1), p.attr({ x: a, y: s, width: r, height: o, fill: g.config.chart.zoom.zoomedArea.fill.color, "fill-opacity": g.config.chart.zoom.zoomedArea.fill.opacity, stroke: g.config.chart.zoom.zoomedArea.stroke.color, "stroke-width": g.config.chart.zoom.zoomedArea.stroke.width, "stroke-opacity": g.config.chart.zoom.zoomedArea.stroke.opacity }), z.setAttrs(p.node, b)), g.globals.selectionEnabled && (f.attr({ x: a, y: s, width: r > 0 ? r : 0, height: o > 0 ? o : 0, fill: g.config.chart.selection.fill.color, "fill-opacity": g.config.chart.selection.fill.opacity, stroke: g.config.chart.selection.stroke.color, "stroke-width": g.config.chart.selection.stroke.width, "stroke-dasharray": g.config.chart.selection.stroke.dashArray, "stroke-opacity": g.config.chart.selection.stroke.opacity }), z.setAttrs(f.node, b));
      }
    } }, { key: "hideSelectionRect", value: function(i) {
      i && i.attr({ x: 0, y: 0, width: 0, height: 0 });
    } }, { key: "selectionDrawing", value: function(i) {
      var a = i.context, s = i.zoomtype, r = this.w, o = a, n = this.gridRect.getBoundingClientRect(), h = o.startX - 1, c = o.startY, d = !1, g = !1, p = o.clientX - n.left - h, f = o.clientY - n.top - c, b = {};
      return Math.abs(p + h) > r.globals.gridWidth ? p = r.globals.gridWidth - h : o.clientX - n.left < 0 && (p = h), h > o.clientX - n.left && (d = !0, p = Math.abs(p)), c > o.clientY - n.top && (g = !0, f = Math.abs(f)), b = s === "x" ? { x: d ? h - p : h, y: 0, width: p, height: r.globals.gridHeight } : s === "y" ? { x: 0, y: g ? c - f : c, width: r.globals.gridWidth, height: f } : { x: d ? h - p : h, y: g ? c - f : c, width: p, height: f }, o.drawSelectionRect(b), o.selectionDragging("resizing"), b;
    } }, { key: "selectionDragging", value: function(i, a) {
      var s = this, r = this.w, o = this.xyRatios, n = this.selectionRect, h = 0;
      i === "resizing" && (h = 30);
      var c = function(g) {
        return parseFloat(n.node.getAttribute(g));
      }, d = { x: c("x"), y: c("y"), width: c("width"), height: c("height") };
      r.globals.selection = d, typeof r.config.chart.events.selection == "function" && r.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(function() {
        var g, p, f, b, m = s.gridRect.getBoundingClientRect(), w = n.node.getBoundingClientRect();
        r.globals.isRangeBar ? (g = r.globals.yAxisScale[0].niceMin + (w.left - m.left) * o.invertedYRatio, p = r.globals.yAxisScale[0].niceMin + (w.right - m.left) * o.invertedYRatio, f = 0, b = 1) : (g = r.globals.xAxisScale.niceMin + (w.left - m.left) * o.xRatio, p = r.globals.xAxisScale.niceMin + (w.right - m.left) * o.xRatio, f = r.globals.yAxisScale[0].niceMin + (m.bottom - w.bottom) * o.yRatio[0], b = r.globals.yAxisScale[0].niceMax - (w.top - m.top) * o.yRatio[0]);
        var A = { xaxis: { min: g, max: p }, yaxis: { min: f, max: b } };
        r.config.chart.events.selection(s.ctx, A), r.config.chart.brush.enabled && r.config.chart.events.brushScrolled !== void 0 && r.config.chart.events.brushScrolled(s.ctx, A);
      }, h));
    } }, { key: "selectionDrawn", value: function(i) {
      var a = i.context, s = i.zoomtype, r = this.w, o = a, n = this.xyRatios, h = this.ctx.toolbar;
      if (o.startX > o.endX) {
        var c = o.startX;
        o.startX = o.endX, o.endX = c;
      }
      if (o.startY > o.endY) {
        var d = o.startY;
        o.startY = o.endY, o.endY = d;
      }
      var g = void 0, p = void 0;
      r.globals.isRangeBar ? (g = r.globals.yAxisScale[0].niceMin + o.startX * n.invertedYRatio, p = r.globals.yAxisScale[0].niceMin + o.endX * n.invertedYRatio) : (g = r.globals.xAxisScale.niceMin + o.startX * n.xRatio, p = r.globals.xAxisScale.niceMin + o.endX * n.xRatio);
      var f = [], b = [];
      if (r.config.yaxis.forEach(function(k, S) {
        f.push(r.globals.yAxisScale[S].niceMax - n.yRatio[S] * o.startY), b.push(r.globals.yAxisScale[S].niceMax - n.yRatio[S] * o.endY);
      }), o.dragged && (o.dragX > 10 || o.dragY > 10) && g !== p) {
        if (r.globals.zoomEnabled) {
          var m = P.clone(r.globals.initialConfig.yaxis), w = P.clone(r.globals.initialConfig.xaxis);
          if (r.globals.zoomed = !0, r.config.xaxis.convertedCatToNumeric && (g = Math.floor(g), p = Math.floor(p), g < 1 && (g = 1, p = r.globals.dataPoints), p - g < 2 && (p = g + 1)), s !== "xy" && s !== "x" || (w = { min: g, max: p }), s !== "xy" && s !== "y" || m.forEach(function(k, S) {
            m[S].min = b[S], m[S].max = f[S];
          }), r.config.chart.zoom.autoScaleYaxis) {
            var A = new At(o.ctx);
            m = A.autoScaleY(o.ctx, m, { xaxis: w });
          }
          if (h) {
            var l = h.getBeforeZoomRange(w, m);
            l && (w = l.xaxis ? l.xaxis : w, m = l.yaxis ? l.yaxis : m);
          }
          var u = { xaxis: w };
          r.config.chart.group || (u.yaxis = m), o.ctx.updateHelpers._updateOptions(u, !1, o.w.config.chart.animations.dynamicAnimation.enabled), typeof r.config.chart.events.zoomed == "function" && h.zoomCallback(w, m);
        } else if (r.globals.selectionEnabled) {
          var x, v = null;
          x = { min: g, max: p }, s !== "xy" && s !== "y" || (v = P.clone(r.config.yaxis)).forEach(function(k, S) {
            v[S].min = b[S], v[S].max = f[S];
          }), r.globals.selection = o.selection, typeof r.config.chart.events.selection == "function" && r.config.chart.events.selection(o.ctx, { xaxis: x, yaxis: v });
        }
      }
    } }, { key: "panDragging", value: function(i) {
      var a = i.context, s = this.w, r = a;
      if (s.globals.lastClientPosition.x !== void 0) {
        var o = s.globals.lastClientPosition.x - r.clientX, n = s.globals.lastClientPosition.y - r.clientY;
        Math.abs(o) > Math.abs(n) && o > 0 ? this.moveDirection = "left" : Math.abs(o) > Math.abs(n) && o < 0 ? this.moveDirection = "right" : Math.abs(n) > Math.abs(o) && n > 0 ? this.moveDirection = "up" : Math.abs(n) > Math.abs(o) && n < 0 && (this.moveDirection = "down");
      }
      s.globals.lastClientPosition = { x: r.clientX, y: r.clientY };
      var h = s.globals.isRangeBar ? s.globals.minY : s.globals.minX, c = s.globals.isRangeBar ? s.globals.maxY : s.globals.maxX;
      s.config.xaxis.convertedCatToNumeric || r.panScrolled(h, c);
    } }, { key: "delayedPanScrolled", value: function() {
      var i = this.w, a = i.globals.minX, s = i.globals.maxX, r = (i.globals.maxX - i.globals.minX) / 2;
      this.moveDirection === "left" ? (a = i.globals.minX + r, s = i.globals.maxX + r) : this.moveDirection === "right" && (a = i.globals.minX - r, s = i.globals.maxX - r), a = Math.floor(a), s = Math.floor(s), this.updateScrolledChart({ xaxis: { min: a, max: s } }, a, s);
    } }, { key: "panScrolled", value: function(i, a) {
      var s = this.w, r = this.xyRatios, o = P.clone(s.globals.initialConfig.yaxis), n = r.xRatio, h = s.globals.minX, c = s.globals.maxX;
      s.globals.isRangeBar && (n = r.invertedYRatio, h = s.globals.minY, c = s.globals.maxY), this.moveDirection === "left" ? (i = h + s.globals.gridWidth / 15 * n, a = c + s.globals.gridWidth / 15 * n) : this.moveDirection === "right" && (i = h - s.globals.gridWidth / 15 * n, a = c - s.globals.gridWidth / 15 * n), s.globals.isRangeBar || (i < s.globals.initialMinX || a > s.globals.initialMaxX) && (i = h, a = c);
      var d = { min: i, max: a };
      s.config.chart.zoom.autoScaleYaxis && (o = new At(this.ctx).autoScaleY(this.ctx, o, { xaxis: d }));
      var g = { xaxis: { min: i, max: a } };
      s.config.chart.group || (g.yaxis = o), this.updateScrolledChart(g, i, a);
    } }, { key: "updateScrolledChart", value: function(i, a, s) {
      var r = this.w;
      this.ctx.updateHelpers._updateOptions(i, !1, !1), typeof r.config.chart.events.scrolled == "function" && r.config.chart.events.scrolled(this.ctx, { xaxis: { min: a, max: s } });
    } }]), e;
  }(), ae = function() {
    function y(t) {
      Y(this, y), this.w = t.w, this.ttCtx = t, this.ctx = t.ctx;
    }
    return F(y, [{ key: "getNearestValues", value: function(t) {
      var e = t.hoverArea, i = t.elGrid, a = t.clientX, s = t.clientY, r = this.w, o = i.getBoundingClientRect(), n = o.width, h = o.height, c = n / (r.globals.dataPoints - 1), d = h / r.globals.dataPoints, g = this.hasBars();
      !r.globals.comboCharts && !g || r.config.xaxis.convertedCatToNumeric || (c = n / r.globals.dataPoints);
      var p = a - o.left - r.globals.barPadForNumericAxis, f = s - o.top;
      p < 0 || f < 0 || p > n || f > h ? (e.classList.remove("hovering-zoom"), e.classList.remove("hovering-pan")) : r.globals.zoomEnabled ? (e.classList.remove("hovering-pan"), e.classList.add("hovering-zoom")) : r.globals.panEnabled && (e.classList.remove("hovering-zoom"), e.classList.add("hovering-pan"));
      var b = Math.round(p / c), m = Math.floor(f / d);
      g && !r.config.xaxis.convertedCatToNumeric && (b = Math.ceil(p / c), b -= 1);
      var w = null, A = null, l = r.globals.seriesXvalues.map(function(S) {
        return S.filter(function(C) {
          return P.isNumber(C);
        });
      }), u = r.globals.seriesYvalues.map(function(S) {
        return S.filter(function(C) {
          return P.isNumber(C);
        });
      });
      if (r.globals.isXNumeric) {
        var x = this.ttCtx.getElGrid().getBoundingClientRect(), v = p * (x.width / n), k = f * (x.height / h);
        w = (A = this.closestInMultiArray(v, k, l, u)).index, b = A.j, w !== null && (l = r.globals.seriesXvalues[w], b = (A = this.closestInArray(v, l)).index);
      }
      return r.globals.capturedSeriesIndex = w === null ? -1 : w, (!b || b < 1) && (b = 0), r.globals.isBarHorizontal ? r.globals.capturedDataPointIndex = m : r.globals.capturedDataPointIndex = b, { capturedSeries: w, j: r.globals.isBarHorizontal ? m : b, hoverX: p, hoverY: f };
    } }, { key: "closestInMultiArray", value: function(t, e, i, a) {
      var s = this.w, r = 0, o = null, n = -1;
      s.globals.series.length > 1 ? r = this.getFirstActiveXArray(i) : o = 0;
      var h = i[r][0], c = Math.abs(t - h);
      if (i.forEach(function(p) {
        p.forEach(function(f, b) {
          var m = Math.abs(t - f);
          m <= c && (c = m, n = b);
        });
      }), n !== -1) {
        var d = a[r][n], g = Math.abs(e - d);
        o = r, a.forEach(function(p, f) {
          var b = Math.abs(e - p[n]);
          b <= g && (g = b, o = f);
        });
      }
      return { index: o, j: n };
    } }, { key: "getFirstActiveXArray", value: function(t) {
      for (var e = this.w, i = 0, a = t.map(function(r, o) {
        return r.length > 0 ? o : -1;
      }), s = 0; s < a.length; s++)
        if (a[s] !== -1 && e.globals.collapsedSeriesIndices.indexOf(s) === -1 && e.globals.ancillaryCollapsedSeriesIndices.indexOf(s) === -1) {
          i = a[s];
          break;
        }
      return i;
    } }, { key: "closestInArray", value: function(t, e) {
      for (var i = e[0], a = null, s = Math.abs(t - i), r = 0; r < e.length; r++) {
        var o = Math.abs(t - e[r]);
        o < s && (s = o, a = r);
      }
      return { index: a };
    } }, { key: "isXoverlap", value: function(t) {
      var e = [], i = this.w.globals.seriesX.filter(function(s) {
        return s[0] !== void 0;
      });
      if (i.length > 0)
        for (var a = 0; a < i.length - 1; a++)
          i[a][t] !== void 0 && i[a + 1][t] !== void 0 && i[a][t] !== i[a + 1][t] && e.push("unEqual");
      return e.length === 0;
    } }, { key: "isInitialSeriesSameLen", value: function() {
      for (var t = !0, e = this.w.globals.initialSeries, i = 0; i < e.length - 1; i++)
        if (e[i].data.length !== e[i + 1].data.length) {
          t = !1;
          break;
        }
      return t;
    } }, { key: "getBarsHeight", value: function(t) {
      return J(t).reduce(function(e, i) {
        return e + i.getBBox().height;
      }, 0);
    } }, { key: "getElMarkers", value: function(t) {
      return typeof t == "number" ? this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-series-markers-wrap > *")) : this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *");
    } }, { key: "getAllMarkers", value: function() {
      var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
      (t = J(t)).sort(function(i, a) {
        var s = Number(i.getAttribute("data:realIndex")), r = Number(a.getAttribute("data:realIndex"));
        return r < s ? 1 : r > s ? -1 : 0;
      });
      var e = [];
      return t.forEach(function(i) {
        e.push(i.querySelector(".apexcharts-marker"));
      }), e;
    } }, { key: "hasMarkers", value: function(t) {
      return this.getElMarkers(t).length > 0;
    } }, { key: "getElBars", value: function() {
      return this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-bar-series,  .apexcharts-candlestick-series, .apexcharts-boxPlot-series, .apexcharts-rangebar-series");
    } }, { key: "hasBars", value: function() {
      return this.getElBars().length > 0;
    } }, { key: "getHoverMarkerSize", value: function(t) {
      var e = this.w, i = e.config.markers.hover.size;
      return i === void 0 && (i = e.globals.markers.size[t] + e.config.markers.hover.sizeOffset), i;
    } }, { key: "toggleAllTooltipSeriesGroups", value: function(t) {
      var e = this.w, i = this.ttCtx;
      i.allTooltipSeriesGroups.length === 0 && (i.allTooltipSeriesGroups = e.globals.dom.baseEl.querySelectorAll(".apexcharts-tooltip-series-group"));
      for (var a = i.allTooltipSeriesGroups, s = 0; s < a.length; s++)
        t === "enable" ? (a[s].classList.add("apexcharts-active"), a[s].style.display = e.config.tooltip.items.display) : (a[s].classList.remove("apexcharts-active"), a[s].style.display = "none");
    } }]), y;
  }(), ze = function() {
    function y(t) {
      Y(this, y), this.w = t.w, this.ctx = t.ctx, this.ttCtx = t, this.tooltipUtil = new ae(t);
    }
    return F(y, [{ key: "drawSeriesTexts", value: function(t) {
      var e = t.shared, i = e === void 0 || e, a = t.ttItems, s = t.i, r = s === void 0 ? 0 : s, o = t.j, n = o === void 0 ? null : o, h = t.y1, c = t.y2, d = t.e, g = this.w;
      g.config.tooltip.custom !== void 0 ? this.handleCustomTooltip({ i: r, j: n, y1: h, y2: c, w: g }) : this.toggleActiveInactiveSeries(i);
      var p = this.getValuesToPrint({ i: r, j: n });
      this.printLabels({ i: r, j: n, values: p, ttItems: a, shared: i, e: d });
      var f = this.ttCtx.getElTooltip();
      this.ttCtx.tooltipRect.ttWidth = f.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = f.getBoundingClientRect().height;
    } }, { key: "printLabels", value: function(t) {
      var e, i = this, a = t.i, s = t.j, r = t.values, o = t.ttItems, n = t.shared, h = t.e, c = this.w, d = [], g = function(x) {
        return c.globals.seriesGoals[x] && c.globals.seriesGoals[x][s] && Array.isArray(c.globals.seriesGoals[x][s]);
      }, p = r.xVal, f = r.zVal, b = r.xAxisTTVal, m = "", w = c.globals.colors[a];
      s !== null && c.config.plotOptions.bar.distributed && (w = c.globals.colors[s]);
      for (var A = function(x, v) {
        var k = i.getFormatters(a);
        m = i.getSeriesName({ fn: k.yLbTitleFormatter, index: a, seriesIndex: a, j: s }), c.config.chart.type === "treemap" && (m = k.yLbTitleFormatter(String(c.config.series[a].data[s].x), { series: c.globals.series, seriesIndex: a, dataPointIndex: s, w: c }));
        var S = c.config.tooltip.inverseOrder ? v : x;
        if (c.globals.axisCharts) {
          var C = function(T) {
            var I, E, R, H;
            return c.globals.isRangeData ? k.yLbFormatter((I = c.globals.seriesRangeStart) === null || I === void 0 || (E = I[T]) === null || E === void 0 ? void 0 : E[s], { series: c.globals.seriesRangeStart, seriesIndex: T, dataPointIndex: s, w: c }) + " - " + k.yLbFormatter((R = c.globals.seriesRangeEnd) === null || R === void 0 || (H = R[T]) === null || H === void 0 ? void 0 : H[s], { series: c.globals.seriesRangeEnd, seriesIndex: T, dataPointIndex: s, w: c }) : k.yLbFormatter(c.globals.series[T][s], { series: c.globals.series, seriesIndex: T, dataPointIndex: s, w: c });
          };
          if (n)
            k = i.getFormatters(S), m = i.getSeriesName({ fn: k.yLbTitleFormatter, index: S, seriesIndex: a, j: s }), w = c.globals.colors[S], e = C(S), g(S) && (d = c.globals.seriesGoals[S][s].map(function(T) {
              return { attrs: T, val: k.yLbFormatter(T.value, { seriesIndex: S, dataPointIndex: s, w: c }) };
            }));
          else {
            var L, M = h == null || (L = h.target) === null || L === void 0 ? void 0 : L.getAttribute("fill");
            M && (w = M.indexOf("url") !== -1 ? document.querySelector(M.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke") : M), e = C(a), g(a) && Array.isArray(c.globals.seriesGoals[a][s]) && (d = c.globals.seriesGoals[a][s].map(function(T) {
              return { attrs: T, val: k.yLbFormatter(T.value, { seriesIndex: a, dataPointIndex: s, w: c }) };
            }));
          }
        }
        s === null && (e = k.yLbFormatter(c.globals.series[a], X(X({}, c), {}, { seriesIndex: a, dataPointIndex: a }))), i.DOMHandling({ i: a, t: S, j: s, ttItems: o, values: { val: e, goalVals: d, xVal: p, xAxisTTVal: b, zVal: f }, seriesName: m, shared: n, pColor: w });
      }, l = 0, u = c.globals.series.length - 1; l < c.globals.series.length; l++, u--)
        A(l, u);
    } }, { key: "getFormatters", value: function(t) {
      var e, i = this.w, a = i.globals.yLabelFormatters[t];
      return i.globals.ttVal !== void 0 ? Array.isArray(i.globals.ttVal) ? (a = i.globals.ttVal[t] && i.globals.ttVal[t].formatter, e = i.globals.ttVal[t] && i.globals.ttVal[t].title && i.globals.ttVal[t].title.formatter) : (a = i.globals.ttVal.formatter, typeof i.globals.ttVal.title.formatter == "function" && (e = i.globals.ttVal.title.formatter)) : e = i.config.tooltip.y.title.formatter, typeof a != "function" && (a = i.globals.yLabelFormatters[0] ? i.globals.yLabelFormatters[0] : function(s) {
        return s;
      }), typeof e != "function" && (e = function(s) {
        return s;
      }), { yLbFormatter: a, yLbTitleFormatter: e };
    } }, { key: "getSeriesName", value: function(t) {
      var e = t.fn, i = t.index, a = t.seriesIndex, s = t.j, r = this.w;
      return e(String(r.globals.seriesNames[i]), { series: r.globals.series, seriesIndex: a, dataPointIndex: s, w: r });
    } }, { key: "DOMHandling", value: function(t) {
      t.i;
      var e = t.t, i = t.j, a = t.ttItems, s = t.values, r = t.seriesName, o = t.shared, n = t.pColor, h = this.w, c = this.ttCtx, d = s.val, g = s.goalVals, p = s.xVal, f = s.xAxisTTVal, b = s.zVal, m = null;
      m = a[e].children, h.config.tooltip.fillSeriesColor && (a[e].style.backgroundColor = n, m[0].style.display = "none"), c.showTooltipTitle && (c.tooltipTitle === null && (c.tooltipTitle = h.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), c.tooltipTitle.innerHTML = p), c.isXAxisTooltipEnabled && (c.xaxisTooltipText.innerHTML = f !== "" ? f : p);
      var w = a[e].querySelector(".apexcharts-tooltip-text-y-label");
      w && (w.innerHTML = r || "");
      var A = a[e].querySelector(".apexcharts-tooltip-text-y-value");
      A && (A.innerHTML = d !== void 0 ? d : ""), m[0] && m[0].classList.contains("apexcharts-tooltip-marker") && (h.config.tooltip.marker.fillColors && Array.isArray(h.config.tooltip.marker.fillColors) && (n = h.config.tooltip.marker.fillColors[e]), m[0].style.backgroundColor = n), h.config.tooltip.marker.show || (m[0].style.display = "none");
      var l = a[e].querySelector(".apexcharts-tooltip-text-goals-label"), u = a[e].querySelector(".apexcharts-tooltip-text-goals-value");
      if (g.length && h.globals.seriesGoals[e]) {
        var x = function() {
          var S = "<div >", C = "<div>";
          g.forEach(function(L, M) {
            S += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(L.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(L.attrs.name, "</div>"), C += "<div>".concat(L.val, "</div>");
          }), l.innerHTML = S + "</div>", u.innerHTML = C + "</div>";
        };
        o ? h.globals.seriesGoals[e][i] && Array.isArray(h.globals.seriesGoals[e][i]) ? x() : (l.innerHTML = "", u.innerHTML = "") : x();
      } else
        l.innerHTML = "", u.innerHTML = "";
      if (b !== null && (a[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = h.config.tooltip.z.title, a[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = b !== void 0 ? b : ""), o && m[0]) {
        if (h.config.tooltip.hideEmptySeries) {
          var v = a[e].querySelector(".apexcharts-tooltip-marker"), k = a[e].querySelector(".apexcharts-tooltip-text");
          parseFloat(d) == 0 ? (v.style.display = "none", k.style.display = "none") : (v.style.display = "block", k.style.display = "block");
        }
        d == null || h.globals.ancillaryCollapsedSeriesIndices.indexOf(e) > -1 || h.globals.collapsedSeriesIndices.indexOf(e) > -1 ? m[0].parentNode.style.display = "none" : m[0].parentNode.style.display = h.config.tooltip.items.display;
      }
    } }, { key: "toggleActiveInactiveSeries", value: function(t) {
      var e = this.w;
      if (t)
        this.tooltipUtil.toggleAllTooltipSeriesGroups("enable");
      else {
        this.tooltipUtil.toggleAllTooltipSeriesGroups("disable");
        var i = e.globals.dom.baseEl.querySelector(".apexcharts-tooltip-series-group");
        i && (i.classList.add("apexcharts-active"), i.style.display = e.config.tooltip.items.display);
      }
    } }, { key: "getValuesToPrint", value: function(t) {
      var e = t.i, i = t.j, a = this.w, s = this.ctx.series.filteredSeriesX(), r = "", o = "", n = null, h = null, c = { series: a.globals.series, seriesIndex: e, dataPointIndex: i, w: a }, d = a.globals.ttZFormatter;
      i === null ? h = a.globals.series[e] : a.globals.isXNumeric && a.config.chart.type !== "treemap" ? (r = s[e][i], s[e].length === 0 && (r = s[this.tooltipUtil.getFirstActiveXArray(s)][i])) : r = a.globals.labels[i] !== void 0 ? a.globals.labels[i] : "";
      var g = r;
      return a.globals.isXNumeric && a.config.xaxis.type === "datetime" ? r = new rt(this.ctx).xLabelFormat(a.globals.ttKeyFormatter, g, g, { i: void 0, dateFormatter: new G(this.ctx).formatDate, w: this.w }) : r = a.globals.isBarHorizontal ? a.globals.yLabelFormatters[0](g, c) : a.globals.xLabelFormatter(g, c), a.config.tooltip.x.formatter !== void 0 && (r = a.globals.ttKeyFormatter(g, c)), a.globals.seriesZ.length > 0 && a.globals.seriesZ[e].length > 0 && (n = d(a.globals.seriesZ[e][i], a)), o = typeof a.config.xaxis.tooltip.formatter == "function" ? a.globals.xaxisTooltipFormatter(g, c) : r, { val: Array.isArray(h) ? h.join(" ") : h, xVal: Array.isArray(r) ? r.join(" ") : r, xAxisTTVal: Array.isArray(o) ? o.join(" ") : o, zVal: n };
    } }, { key: "handleCustomTooltip", value: function(t) {
      var e = t.i, i = t.j, a = t.y1, s = t.y2, r = t.w, o = this.ttCtx.getElTooltip(), n = r.config.tooltip.custom;
      Array.isArray(n) && n[e] && (n = n[e]), o.innerHTML = n({ ctx: this.ctx, series: r.globals.series, seriesIndex: e, dataPointIndex: i, y1: a, y2: s, w: r });
    } }]), y;
  }(), se = function() {
    function y(t) {
      Y(this, y), this.ttCtx = t, this.ctx = t.ctx, this.w = t.w;
    }
    return F(y, [{ key: "moveXCrosshairs", value: function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, i = this.ttCtx, a = this.w, s = i.getElXCrosshairs(), r = t - i.xcrosshairsWidth / 2, o = a.globals.labels.slice().length;
      if (e !== null && (r = a.globals.gridWidth / o * e), s === null || a.globals.isBarHorizontal || (s.setAttribute("x", r), s.setAttribute("x1", r), s.setAttribute("x2", r), s.setAttribute("y2", a.globals.gridHeight), s.classList.add("apexcharts-active")), r < 0 && (r = 0), r > a.globals.gridWidth && (r = a.globals.gridWidth), i.isXAxisTooltipEnabled) {
        var n = r;
        a.config.xaxis.crosshairs.width !== "tickWidth" && a.config.xaxis.crosshairs.width !== "barWidth" || (n = r + i.xcrosshairsWidth / 2), this.moveXAxisTooltip(n);
      }
    } }, { key: "moveYCrosshairs", value: function(t) {
      var e = this.ttCtx;
      e.ycrosshairs !== null && z.setAttrs(e.ycrosshairs, { y1: t, y2: t }), e.ycrosshairsHidden !== null && z.setAttrs(e.ycrosshairsHidden, { y1: t, y2: t });
    } }, { key: "moveXAxisTooltip", value: function(t) {
      var e = this.w, i = this.ttCtx;
      if (i.xaxisTooltip !== null && i.xcrosshairsWidth !== 0) {
        i.xaxisTooltip.classList.add("apexcharts-active");
        var a = i.xaxisOffY + e.config.xaxis.tooltip.offsetY + e.globals.translateY + 1 + e.config.xaxis.offsetY;
        if (t -= i.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t)) {
          t += e.globals.translateX;
          var s;
          s = new z(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML), i.xaxisTooltipText.style.minWidth = s.width + "px", i.xaxisTooltip.style.left = t + "px", i.xaxisTooltip.style.top = a + "px";
        }
      }
    } }, { key: "moveYAxisTooltip", value: function(t) {
      var e = this.w, i = this.ttCtx;
      i.yaxisTTEls === null && (i.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
      var a = parseInt(i.ycrosshairsHidden.getAttribute("y1"), 10), s = e.globals.translateY + a, r = i.yaxisTTEls[t].getBoundingClientRect().height, o = e.globals.translateYAxisX[t] - 2;
      e.config.yaxis[t].opposite && (o -= 26), s -= r / 2, e.globals.ignoreYAxisIndexes.indexOf(t) === -1 ? (i.yaxisTTEls[t].classList.add("apexcharts-active"), i.yaxisTTEls[t].style.top = s + "px", i.yaxisTTEls[t].style.left = o + e.config.yaxis[t].tooltip.offsetX + "px") : i.yaxisTTEls[t].classList.remove("apexcharts-active");
    } }, { key: "moveTooltip", value: function(t, e) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a = this.w, s = this.ttCtx, r = s.getElTooltip(), o = s.tooltipRect, n = i !== null ? parseFloat(i) : 1, h = parseFloat(t) + n + 5, c = parseFloat(e) + n / 2;
      if (h > a.globals.gridWidth / 2 && (h = h - o.ttWidth - n - 10), h > a.globals.gridWidth - o.ttWidth - 10 && (h = a.globals.gridWidth - o.ttWidth), h < -20 && (h = -20), a.config.tooltip.followCursor) {
        var d = s.getElGrid().getBoundingClientRect();
        (h = s.e.clientX - d.left) > a.globals.gridWidth / 2 && (h -= s.tooltipRect.ttWidth), (c = s.e.clientY + a.globals.translateY - d.top) > a.globals.gridHeight / 2 && (c -= s.tooltipRect.ttHeight);
      } else
        a.globals.isBarHorizontal || o.ttHeight / 2 + c > a.globals.gridHeight && (c = a.globals.gridHeight - o.ttHeight + a.globals.translateY);
      isNaN(h) || (h += a.globals.translateX, r.style.left = h + "px", r.style.top = c + "px");
    } }, { key: "moveMarkers", value: function(t, e) {
      var i = this.w, a = this.ttCtx;
      if (i.globals.markers.size[t] > 0)
        for (var s = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-marker")), r = 0; r < s.length; r++)
          parseInt(s[r].getAttribute("rel"), 10) === e && (a.marker.resetPointsSize(), a.marker.enlargeCurrentPoint(e, s[r]));
      else
        a.marker.resetPointsSize(), this.moveDynamicPointOnHover(e, t);
    } }, { key: "moveDynamicPointOnHover", value: function(t, e) {
      var i, a, s = this.w, r = this.ttCtx, o = s.globals.pointsArray, n = r.tooltipUtil.getHoverMarkerSize(e), h = s.config.series[e].type;
      if (!h || h !== "column" && h !== "candlestick" && h !== "boxPlot") {
        i = o[e][t][0], a = o[e][t][1] ? o[e][t][1] : 0;
        var c = s.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-series-markers circle"));
        c && a < s.globals.gridHeight && a > 0 && (c.setAttribute("r", n), c.setAttribute("cx", i), c.setAttribute("cy", a)), this.moveXCrosshairs(i), r.fixedTooltip || this.moveTooltip(i, a, n);
      }
    } }, { key: "moveDynamicPointsOnHover", value: function(t) {
      var e, i = this.ttCtx, a = i.w, s = 0, r = 0, o = a.globals.pointsArray;
      e = new et(this.ctx).getActiveConfigSeriesIndex("asc", ["line", "area", "scatter", "bubble"]);
      var n = i.tooltipUtil.getHoverMarkerSize(e);
      o[e] && (s = o[e][t][0], r = o[e][t][1]);
      var h = i.tooltipUtil.getAllMarkers();
      if (h !== null)
        for (var c = 0; c < a.globals.series.length; c++) {
          var d = o[c];
          if (a.globals.comboCharts && d === void 0 && h.splice(c, 0, null), d && d.length) {
            var g = o[c][t][1], p = void 0;
            if (h[c].setAttribute("cx", s), a.config.chart.type === "rangeArea" && !a.globals.comboCharts) {
              var f = t + a.globals.series[c].length;
              p = o[c][f][1], g -= Math.abs(g - p) / 2;
            }
            g !== null && !isNaN(g) && g < a.globals.gridHeight + n && g + n > 0 ? (h[c] && h[c].setAttribute("r", n), h[c] && h[c].setAttribute("cy", g)) : h[c] && h[c].setAttribute("r", 0);
          }
        }
      this.moveXCrosshairs(s), i.fixedTooltip || this.moveTooltip(s, r || a.globals.gridHeight, n);
    } }, { key: "moveStickyTooltipOverBars", value: function(t, e) {
      var i = this.w, a = this.ttCtx, s = i.globals.columnSeries ? i.globals.columnSeries.length : i.globals.series.length, r = s >= 2 && s % 2 == 0 ? Math.floor(s / 2) : Math.floor(s / 2) + 1;
      i.globals.isBarHorizontal && (r = new et(this.ctx).getActiveConfigSeriesIndex("desc") + 1);
      var o = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(r, "'] path[j='").concat(t, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(r, "'] path[j='").concat(t, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(r, "'] path[j='").concat(t, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(r, "'] path[j='").concat(t, "']"));
      o || typeof e != "number" || (o = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[data\\:realIndex='".concat(e, "'] path[j='").concat(t, `'],
        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='`).concat(e, "'] path[j='").concat(t, `'],
        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='`).concat(e, "'] path[j='").concat(t, `'],
        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='`).concat(e, "'] path[j='").concat(t, "']")));
      var n = o ? parseFloat(o.getAttribute("cx")) : 0, h = o ? parseFloat(o.getAttribute("cy")) : 0, c = o ? parseFloat(o.getAttribute("barWidth")) : 0, d = a.getElGrid().getBoundingClientRect(), g = o && (o.classList.contains("apexcharts-candlestick-area") || o.classList.contains("apexcharts-boxPlot-area"));
      i.globals.isXNumeric ? (o && !g && (n -= s % 2 != 0 ? c / 2 : 0), o && g && i.globals.comboCharts && (n -= c / 2)) : i.globals.isBarHorizontal || (n = a.xAxisTicksPositions[t - 1] + a.dataPointsDividedWidth / 2, isNaN(n) && (n = a.xAxisTicksPositions[t] - a.dataPointsDividedWidth / 2)), i.globals.isBarHorizontal ? h -= a.tooltipRect.ttHeight : i.config.tooltip.followCursor ? h = a.e.clientY - d.top - a.tooltipRect.ttHeight / 2 : h + a.tooltipRect.ttHeight + 15 > i.globals.gridHeight && (h = i.globals.gridHeight), i.globals.isBarHorizontal || this.moveXCrosshairs(n), a.fixedTooltip || this.moveTooltip(n, h || i.globals.gridHeight);
    } }]), y;
  }(), Xe = function() {
    function y(t) {
      Y(this, y), this.w = t.w, this.ttCtx = t, this.ctx = t.ctx, this.tooltipPosition = new se(t);
    }
    return F(y, [{ key: "drawDynamicPoints", value: function() {
      var t = this.w, e = new z(this.ctx), i = new It(this.ctx), a = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
      a = J(a), t.config.chart.stacked && a.sort(function(d, g) {
        return parseFloat(d.getAttribute("data:realIndex")) - parseFloat(g.getAttribute("data:realIndex"));
      });
      for (var s = 0; s < a.length; s++) {
        var r = a[s].querySelector(".apexcharts-series-markers-wrap");
        if (r !== null) {
          var o = void 0, n = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
          t.config.chart.type !== "line" && t.config.chart.type !== "area" || t.globals.comboCharts || t.config.tooltip.intersect || (n += " no-pointer-events");
          var h = i.getMarkerConfig({ cssClass: n, seriesIndex: Number(r.getAttribute("data:realIndex")) });
          (o = e.drawMarker(0, 0, h)).node.setAttribute("default-marker-size", 0);
          var c = document.createElementNS(t.globals.SVGNS, "g");
          c.classList.add("apexcharts-series-markers"), c.appendChild(o.node), r.appendChild(c);
        }
      }
    } }, { key: "enlargeCurrentPoint", value: function(t, e) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, s = this.w;
      s.config.chart.type !== "bubble" && this.newPointSize(t, e);
      var r = e.getAttribute("cx"), o = e.getAttribute("cy");
      if (i !== null && a !== null && (r = i, o = a), this.tooltipPosition.moveXCrosshairs(r), !this.fixedTooltip) {
        if (s.config.chart.type === "radar") {
          var n = this.ttCtx.getElGrid().getBoundingClientRect();
          r = this.ttCtx.e.clientX - n.left;
        }
        this.tooltipPosition.moveTooltip(r, o, s.config.markers.hover.size);
      }
    } }, { key: "enlargePoints", value: function(t) {
      for (var e = this.w, i = this, a = this.ttCtx, s = t, r = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), o = e.config.markers.hover.size, n = 0; n < r.length; n++) {
        var h = r[n].getAttribute("rel"), c = r[n].getAttribute("index");
        if (o === void 0 && (o = e.globals.markers.size[c] + e.config.markers.hover.sizeOffset), s === parseInt(h, 10)) {
          i.newPointSize(s, r[n]);
          var d = r[n].getAttribute("cx"), g = r[n].getAttribute("cy");
          i.tooltipPosition.moveXCrosshairs(d), a.fixedTooltip || i.tooltipPosition.moveTooltip(d, g, o);
        } else
          i.oldPointSize(r[n]);
      }
    } }, { key: "newPointSize", value: function(t, e) {
      var i = this.w, a = i.config.markers.hover.size, s = t === 0 ? e.parentNode.firstChild : e.parentNode.lastChild;
      if (s.getAttribute("default-marker-size") !== "0") {
        var r = parseInt(s.getAttribute("index"), 10);
        a === void 0 && (a = i.globals.markers.size[r] + i.config.markers.hover.sizeOffset), a < 0 && (a = 0), s.setAttribute("r", a);
      }
    } }, { key: "oldPointSize", value: function(t) {
      var e = parseFloat(t.getAttribute("default-marker-size"));
      t.setAttribute("r", e);
    } }, { key: "resetPointsSize", value: function() {
      for (var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e = 0; e < t.length; e++) {
        var i = parseFloat(t[e].getAttribute("default-marker-size"));
        P.isNumber(i) && i >= 0 ? t[e].setAttribute("r", i) : t[e].setAttribute("r", 0);
      }
    } }]), y;
  }(), Ee = function() {
    function y(t) {
      Y(this, y), this.w = t.w;
      var e = this.w;
      this.ttCtx = t, this.isVerticalGroupedRangeBar = !e.globals.isBarHorizontal && e.config.chart.type === "rangeBar" && e.config.plotOptions.bar.rangeBarGroupRows;
    }
    return F(y, [{ key: "getAttr", value: function(t, e) {
      return parseFloat(t.target.getAttribute(e));
    } }, { key: "handleHeatTreeTooltip", value: function(t) {
      var e = t.e, i = t.opt, a = t.x, s = t.y, r = t.type, o = this.ttCtx, n = this.w;
      if (e.target.classList.contains("apexcharts-".concat(r, "-rect"))) {
        var h = this.getAttr(e, "i"), c = this.getAttr(e, "j"), d = this.getAttr(e, "cx"), g = this.getAttr(e, "cy"), p = this.getAttr(e, "width"), f = this.getAttr(e, "height");
        if (o.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: h, j: c, shared: !1, e }), n.globals.capturedSeriesIndex = h, n.globals.capturedDataPointIndex = c, a = d + o.tooltipRect.ttWidth / 2 + p, s = g + o.tooltipRect.ttHeight / 2 - f / 2, o.tooltipPosition.moveXCrosshairs(d + p / 2), a > n.globals.gridWidth / 2 && (a = d - o.tooltipRect.ttWidth / 2 + p), o.w.config.tooltip.followCursor) {
          var b = n.globals.dom.elWrap.getBoundingClientRect();
          a = n.globals.clientX - b.left - (a > n.globals.gridWidth / 2 ? o.tooltipRect.ttWidth : 0), s = n.globals.clientY - b.top - (s > n.globals.gridHeight / 2 ? o.tooltipRect.ttHeight : 0);
        }
      }
      return { x: a, y: s };
    } }, { key: "handleMarkerTooltip", value: function(t) {
      var e, i, a = t.e, s = t.opt, r = t.x, o = t.y, n = this.w, h = this.ttCtx;
      if (a.target.classList.contains("apexcharts-marker")) {
        var c = parseInt(s.paths.getAttribute("cx"), 10), d = parseInt(s.paths.getAttribute("cy"), 10), g = parseFloat(s.paths.getAttribute("val"));
        if (i = parseInt(s.paths.getAttribute("rel"), 10), e = parseInt(s.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, h.intersect) {
          var p = P.findAncestor(s.paths, "apexcharts-series");
          p && (e = parseInt(p.getAttribute("data:realIndex"), 10));
        }
        if (h.tooltipLabels.drawSeriesTexts({ ttItems: s.ttItems, i: e, j: i, shared: !h.showOnIntersect && n.config.tooltip.shared, e: a }), a.type === "mouseup" && h.markerClick(a, e, i), n.globals.capturedSeriesIndex = e, n.globals.capturedDataPointIndex = i, r = c, o = d + n.globals.translateY - 1.4 * h.tooltipRect.ttHeight, h.w.config.tooltip.followCursor) {
          var f = h.getElGrid().getBoundingClientRect();
          o = h.e.clientY + n.globals.translateY - f.top;
        }
        g < 0 && (o = d), h.marker.enlargeCurrentPoint(i, s.paths, r, o);
      }
      return { x: r, y: o };
    } }, { key: "handleBarTooltip", value: function(t) {
      var e, i, a = t.e, s = t.opt, r = this.w, o = this.ttCtx, n = o.getElTooltip(), h = 0, c = 0, d = 0, g = this.getBarTooltipXY({ e: a, opt: s });
      e = g.i;
      var p = g.barHeight, f = g.j;
      r.globals.capturedSeriesIndex = e, r.globals.capturedDataPointIndex = f, r.globals.isBarHorizontal && o.tooltipUtil.hasBars() || !r.config.tooltip.shared ? (c = g.x, d = g.y, i = Array.isArray(r.config.stroke.width) ? r.config.stroke.width[e] : r.config.stroke.width, h = c) : r.globals.comboCharts || r.config.tooltip.shared || (h /= 2), isNaN(d) && (d = r.globals.svgHeight - o.tooltipRect.ttHeight);
      var b = parseInt(s.paths.parentNode.getAttribute("data:realIndex"), 10), m = r.globals.isMultipleYAxis ? r.config.yaxis[b] && r.config.yaxis[b].reversed : r.config.yaxis[0].reversed;
      if (c + o.tooltipRect.ttWidth > r.globals.gridWidth && !m ? c -= o.tooltipRect.ttWidth : c < 0 && (c = 0), o.w.config.tooltip.followCursor) {
        var w = o.getElGrid().getBoundingClientRect();
        d = o.e.clientY - w.top;
      }
      o.tooltip === null && (o.tooltip = r.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), r.config.tooltip.shared || (r.globals.comboBarCount > 0 ? o.tooltipPosition.moveXCrosshairs(h + i / 2) : o.tooltipPosition.moveXCrosshairs(h)), !o.fixedTooltip && (!r.config.tooltip.shared || r.globals.isBarHorizontal && o.tooltipUtil.hasBars()) && (m && (c -= o.tooltipRect.ttWidth) < 0 && (c = 0), !m || r.globals.isBarHorizontal && o.tooltipUtil.hasBars() || (d = d + p - 2 * (r.globals.series[e][f] < 0 ? p : 0)), d = d + r.globals.translateY - o.tooltipRect.ttHeight / 2, n.style.left = c + r.globals.translateX + "px", n.style.top = d + "px");
    } }, { key: "getBarTooltipXY", value: function(t) {
      var e = this, i = t.e, a = t.opt, s = this.w, r = null, o = this.ttCtx, n = 0, h = 0, c = 0, d = 0, g = 0, p = i.target.classList;
      if (p.contains("apexcharts-bar-area") || p.contains("apexcharts-candlestick-area") || p.contains("apexcharts-boxPlot-area") || p.contains("apexcharts-rangebar-area")) {
        var f = i.target, b = f.getBoundingClientRect(), m = a.elGrid.getBoundingClientRect(), w = b.height;
        g = b.height;
        var A = b.width, l = parseInt(f.getAttribute("cx"), 10), u = parseInt(f.getAttribute("cy"), 10);
        d = parseFloat(f.getAttribute("barWidth"));
        var x = i.type === "touchmove" ? i.touches[0].clientX : i.clientX;
        r = parseInt(f.getAttribute("j"), 10), n = parseInt(f.parentNode.getAttribute("rel"), 10) - 1;
        var v = f.getAttribute("data-range-y1"), k = f.getAttribute("data-range-y2");
        s.globals.comboCharts && (n = parseInt(f.parentNode.getAttribute("data:realIndex"), 10));
        var S = function(L) {
          return s.globals.isXNumeric ? l - A / 2 : e.isVerticalGroupedRangeBar ? l + A / 2 : l - o.dataPointsDividedWidth + A / 2;
        }, C = function() {
          return u - o.dataPointsDividedHeight + w / 2 - o.tooltipRect.ttHeight / 2;
        };
        o.tooltipLabels.drawSeriesTexts({ ttItems: a.ttItems, i: n, j: r, y1: v ? parseInt(v, 10) : null, y2: k ? parseInt(k, 10) : null, shared: !o.showOnIntersect && s.config.tooltip.shared, e: i }), s.config.tooltip.followCursor ? s.globals.isBarHorizontal ? (h = x - m.left + 15, c = C()) : (h = S(), c = i.clientY - m.top - o.tooltipRect.ttHeight / 2 - 15) : s.globals.isBarHorizontal ? ((h = l) < o.xyRatios.baseLineInvertedY && (h = l - o.tooltipRect.ttWidth), c = C()) : (h = S(), c = u);
      }
      return { x: h, y: c, barHeight: g, barWidth: d, i: n, j: r };
    } }]), y;
  }(), Ye = function() {
    function y(t) {
      Y(this, y), this.w = t.w, this.ttCtx = t;
    }
    return F(y, [{ key: "drawXaxisTooltip", value: function() {
      var t = this.w, e = this.ttCtx, i = t.config.xaxis.position === "bottom";
      e.xaxisOffY = i ? t.globals.gridHeight + 1 : -t.globals.xAxisHeight - t.config.xaxis.axisTicks.height + 3;
      var a = i ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", s = t.globals.dom.elWrap;
      e.isXAxisTooltipEnabled && t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") === null && (e.xaxisTooltip = document.createElement("div"), e.xaxisTooltip.setAttribute("class", a + " apexcharts-theme-" + t.config.tooltip.theme), s.appendChild(e.xaxisTooltip), e.xaxisTooltipText = document.createElement("div"), e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e.xaxisTooltipText.style.fontFamily = t.config.xaxis.tooltip.style.fontFamily || t.config.chart.fontFamily, e.xaxisTooltipText.style.fontSize = t.config.xaxis.tooltip.style.fontSize, e.xaxisTooltip.appendChild(e.xaxisTooltipText));
    } }, { key: "drawYaxisTooltip", value: function() {
      for (var t = this.w, e = this.ttCtx, i = function(s) {
        var r = t.config.yaxis[s].opposite || t.config.yaxis[s].crosshairs.opposite;
        e.yaxisOffX = r ? t.globals.gridWidth + 1 : 1;
        var o = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(s, r ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left");
        t.globals.yAxisSameScaleIndices.map(function(h, c) {
          h.map(function(d, g) {
            g === s && (o += t.config.yaxis[g].show ? " " : " apexcharts-yaxistooltip-hidden");
          });
        });
        var n = t.globals.dom.elWrap;
        t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(s)) === null && (e.yaxisTooltip = document.createElement("div"), e.yaxisTooltip.setAttribute("class", o + " apexcharts-theme-" + t.config.tooltip.theme), n.appendChild(e.yaxisTooltip), s === 0 && (e.yaxisTooltipText = []), e.yaxisTooltipText[s] = document.createElement("div"), e.yaxisTooltipText[s].classList.add("apexcharts-yaxistooltip-text"), e.yaxisTooltip.appendChild(e.yaxisTooltipText[s]));
      }, a = 0; a < t.config.yaxis.length; a++)
        i(a);
    } }, { key: "setXCrosshairWidth", value: function() {
      var t = this.w, e = this.ttCtx, i = e.getElXCrosshairs();
      if (e.xcrosshairsWidth = parseInt(t.config.xaxis.crosshairs.width, 10), t.globals.comboCharts) {
        var a = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (a !== null && t.config.xaxis.crosshairs.width === "barWidth") {
          var s = parseFloat(a.getAttribute("barWidth"));
          e.xcrosshairsWidth = s;
        } else if (t.config.xaxis.crosshairs.width === "tickWidth") {
          var r = t.globals.labels.length;
          e.xcrosshairsWidth = t.globals.gridWidth / r;
        }
      } else if (t.config.xaxis.crosshairs.width === "tickWidth") {
        var o = t.globals.labels.length;
        e.xcrosshairsWidth = t.globals.gridWidth / o;
      } else if (t.config.xaxis.crosshairs.width === "barWidth") {
        var n = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (n !== null) {
          var h = parseFloat(n.getAttribute("barWidth"));
          e.xcrosshairsWidth = h;
        } else
          e.xcrosshairsWidth = 1;
      }
      t.globals.isBarHorizontal && (e.xcrosshairsWidth = 0), i !== null && e.xcrosshairsWidth > 0 && i.setAttribute("width", e.xcrosshairsWidth);
    } }, { key: "handleYCrosshair", value: function() {
      var t = this.w, e = this.ttCtx;
      e.ycrosshairs = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e.ycrosshairsHidden = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden");
    } }, { key: "drawYaxisTooltipText", value: function(t, e, i) {
      var a = this.ttCtx, s = this.w, r = s.globals.yLabelFormatters[t];
      if (a.yaxisTooltips[t]) {
        var o = a.getElGrid().getBoundingClientRect(), n = (e - o.top) * i.yRatio[t], h = s.globals.maxYArr[t] - s.globals.minYArr[t], c = s.globals.minYArr[t] + (h - n);
        a.tooltipPosition.moveYCrosshairs(e - o.top), a.yaxisTooltipText[t].innerHTML = r(c), a.tooltipPosition.moveYAxisTooltip(t);
      }
    } }]), y;
  }(), re = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
      var e = this.w;
      this.tConfig = e.config.tooltip, this.tooltipUtil = new ae(this), this.tooltipLabels = new ze(this), this.tooltipPosition = new se(this), this.marker = new Xe(this), this.intersect = new Ee(this), this.axesTooltip = new Ye(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !e.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now();
    }
    return F(y, [{ key: "getElTooltip", value: function(t) {
      return t || (t = this), t.w.globals.dom.baseEl ? t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") : null;
    } }, { key: "getElXCrosshairs", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
    } }, { key: "getElGrid", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid");
    } }, { key: "drawTooltip", value: function(t) {
      var e = this.w;
      this.xyRatios = t, this.isXAxisTooltipEnabled = e.config.xaxis.tooltip.enabled && e.globals.axisCharts, this.yaxisTooltips = e.config.yaxis.map(function(r, o) {
        return !!(r.show && r.tooltip.enabled && e.globals.axisCharts);
      }), this.allTooltipSeriesGroups = [], e.globals.axisCharts || (this.showTooltipTitle = !1);
      var i = document.createElement("div");
      if (i.classList.add("apexcharts-tooltip"), e.config.tooltip.cssClass && i.classList.add(e.config.tooltip.cssClass), i.classList.add("apexcharts-theme-".concat(this.tConfig.theme)), e.globals.dom.elWrap.appendChild(i), e.globals.axisCharts) {
        this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
        var a = new Tt(this.ctx);
        this.xAxisTicksPositions = a.getXAxisTicksPositions();
      }
      if (!e.globals.comboCharts && !this.tConfig.intersect && e.config.chart.type !== "rangeBar" || this.tConfig.shared || (this.showOnIntersect = !0), e.config.markers.size !== 0 && e.globals.markers.largestSize !== 0 || this.marker.drawDynamicPoints(this), e.globals.collapsedSeries.length !== e.globals.series.length) {
        this.dataPointsDividedHeight = e.globals.gridHeight / e.globals.dataPoints, this.dataPointsDividedWidth = e.globals.gridWidth / e.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || e.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i.appendChild(this.tooltipTitle));
        var s = e.globals.series.length;
        (e.globals.xyCharts || e.globals.comboCharts) && this.tConfig.shared && (s = this.showOnIntersect ? 1 : e.globals.series.length), this.legendLabels = e.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(s), this.addSVGEvents();
      }
    } }, { key: "createTTElements", value: function(t) {
      for (var e = this, i = this.w, a = [], s = this.getElTooltip(), r = function(n) {
        var h = document.createElement("div");
        h.classList.add("apexcharts-tooltip-series-group"), h.style.order = i.config.tooltip.inverseOrder ? t - n : n + 1, e.tConfig.shared && e.tConfig.enabledOnSeries && Array.isArray(e.tConfig.enabledOnSeries) && e.tConfig.enabledOnSeries.indexOf(n) < 0 && h.classList.add("apexcharts-tooltip-series-group-hidden");
        var c = document.createElement("span");
        c.classList.add("apexcharts-tooltip-marker"), c.style.backgroundColor = i.globals.colors[n], h.appendChild(c);
        var d = document.createElement("div");
        d.classList.add("apexcharts-tooltip-text"), d.style.fontFamily = e.tConfig.style.fontFamily || i.config.chart.fontFamily, d.style.fontSize = e.tConfig.style.fontSize, ["y", "goals", "z"].forEach(function(g) {
          var p = document.createElement("div");
          p.classList.add("apexcharts-tooltip-".concat(g, "-group"));
          var f = document.createElement("span");
          f.classList.add("apexcharts-tooltip-text-".concat(g, "-label")), p.appendChild(f);
          var b = document.createElement("span");
          b.classList.add("apexcharts-tooltip-text-".concat(g, "-value")), p.appendChild(b), d.appendChild(p);
        }), h.appendChild(d), s.appendChild(h), a.push(h);
      }, o = 0; o < t; o++)
        r(o);
      return a;
    } }, { key: "addSVGEvents", value: function() {
      var t = this.w, e = t.config.chart.type, i = this.getElTooltip(), a = !(e !== "bar" && e !== "candlestick" && e !== "boxPlot" && e !== "rangeBar"), s = e === "area" || e === "line" || e === "scatter" || e === "bubble" || e === "radar", r = t.globals.dom.Paper.node, o = this.getElGrid();
      o && (this.seriesBound = o.getBoundingClientRect());
      var n, h = [], c = [], d = { hoverArea: r, elGrid: o, tooltipEl: i, tooltipY: h, tooltipX: c, ttItems: this.ttItems };
      if (t.globals.axisCharts && (s ? n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : a ? n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : e !== "heatmap" && e !== "treemap" || (n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), n && n.length))
        for (var g = 0; g < n.length; g++)
          h.push(n[g].getAttribute("cy")), c.push(n[g].getAttribute("cx"));
      if (t.globals.xyCharts && !this.showOnIntersect || t.globals.comboCharts && !this.showOnIntersect || a && this.tooltipUtil.hasBars() && this.tConfig.shared)
        this.addPathsEventListeners([r], d);
      else if (a && !t.globals.comboCharts || s && this.showOnIntersect)
        this.addDatapointEventsListeners(d);
      else if (!t.globals.axisCharts || e === "heatmap" || e === "treemap") {
        var p = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
        this.addPathsEventListeners(p, d);
      }
      if (this.showOnIntersect) {
        var f = t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
        f.length > 0 && this.addPathsEventListeners(f, d), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(d);
      }
    } }, { key: "drawFixedTooltipRect", value: function() {
      var t = this.w, e = this.getElTooltip(), i = e.getBoundingClientRect(), a = i.width + 10, s = i.height + 10, r = this.tConfig.fixed.offsetX, o = this.tConfig.fixed.offsetY, n = this.tConfig.fixed.position.toLowerCase();
      return n.indexOf("right") > -1 && (r = r + t.globals.svgWidth - a + 10), n.indexOf("bottom") > -1 && (o = o + t.globals.svgHeight - s - 10), e.style.left = r + "px", e.style.top = o + "px", { x: r, y: o, ttWidth: a, ttHeight: s };
    } }, { key: "addDatapointEventsListeners", value: function(t) {
      var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
      this.addPathsEventListeners(e, t);
    } }, { key: "addPathsEventListeners", value: function(t, e) {
      for (var i = this, a = function(r) {
        var o = { paths: t[r], tooltipEl: e.tooltipEl, tooltipY: e.tooltipY, tooltipX: e.tooltipX, elGrid: e.elGrid, hoverArea: e.hoverArea, ttItems: e.ttItems };
        ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map(function(n) {
          return t[r].addEventListener(n, i.onSeriesHover.bind(i, o), { capture: !1, passive: !0 });
        });
      }, s = 0; s < t.length; s++)
        a(s);
    } }, { key: "onSeriesHover", value: function(t, e) {
      var i = this, a = Date.now() - this.lastHoverTime;
      a >= 100 ? this.seriesHover(t, e) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout(function() {
        i.seriesHover(t, e);
      }, 100 - a));
    } }, { key: "seriesHover", value: function(t, e) {
      var i = this;
      this.lastHoverTime = Date.now();
      var a = [], s = this.w;
      s.config.chart.group && (a = this.ctx.getGroupedCharts()), s.globals.axisCharts && (s.globals.minX === -1 / 0 && s.globals.maxX === 1 / 0 || s.globals.dataPoints === 0) || (a.length ? a.forEach(function(r) {
        var o = i.getElTooltip(r), n = { paths: t.paths, tooltipEl: o, tooltipY: t.tooltipY, tooltipX: t.tooltipX, elGrid: t.elGrid, hoverArea: t.hoverArea, ttItems: r.w.globals.tooltip.ttItems };
        r.w.globals.minX === i.w.globals.minX && r.w.globals.maxX === i.w.globals.maxX && r.w.globals.tooltip.seriesHoverByContext({ chartCtx: r, ttCtx: r.w.globals.tooltip, opt: n, e });
      }) : this.seriesHoverByContext({ chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: t, e }));
    } }, { key: "seriesHoverByContext", value: function(t) {
      var e = t.chartCtx, i = t.ttCtx, a = t.opt, s = t.e, r = e.w, o = this.getElTooltip();
      o && (i.tooltipRect = { x: 0, y: 0, ttWidth: o.getBoundingClientRect().width, ttHeight: o.getBoundingClientRect().height }, i.e = s, i.tooltipUtil.hasBars() && !r.globals.comboCharts && !i.isBarShared && this.tConfig.onDatasetHover.highlightDataSeries && new et(e).toggleSeriesOnHover(s, s.target.parentNode), i.fixedTooltip && i.drawFixedTooltipRect(), r.globals.axisCharts ? i.axisChartsTooltips({ e: s, opt: a, tooltipRect: i.tooltipRect }) : i.nonAxisChartsTooltips({ e: s, opt: a, tooltipRect: i.tooltipRect }));
    } }, { key: "axisChartsTooltips", value: function(t) {
      var e, i, a = t.e, s = t.opt, r = this.w, o = s.elGrid.getBoundingClientRect(), n = a.type === "touchmove" ? a.touches[0].clientX : a.clientX, h = a.type === "touchmove" ? a.touches[0].clientY : a.clientY;
      if (this.clientY = h, this.clientX = n, r.globals.capturedSeriesIndex = -1, r.globals.capturedDataPointIndex = -1, h < o.top || h > o.top + o.height)
        this.handleMouseOut(s);
      else {
        if (Array.isArray(this.tConfig.enabledOnSeries) && !r.config.tooltip.shared) {
          var c = parseInt(s.paths.getAttribute("index"), 10);
          if (this.tConfig.enabledOnSeries.indexOf(c) < 0)
            return void this.handleMouseOut(s);
        }
        var d = this.getElTooltip(), g = this.getElXCrosshairs(), p = r.globals.xyCharts || r.config.chart.type === "bar" && !r.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || r.globals.comboCharts && this.tooltipUtil.hasBars();
        if (a.type === "mousemove" || a.type === "touchmove" || a.type === "mouseup") {
          if (r.globals.collapsedSeries.length + r.globals.ancillaryCollapsedSeries.length === r.globals.series.length)
            return;
          g !== null && g.classList.add("apexcharts-active");
          var f = this.yaxisTooltips.filter(function(w) {
            return w === !0;
          });
          if (this.ycrosshairs !== null && f.length && this.ycrosshairs.classList.add("apexcharts-active"), p && !this.showOnIntersect)
            this.handleStickyTooltip(a, n, h, s);
          else if (r.config.chart.type === "heatmap" || r.config.chart.type === "treemap") {
            var b = this.intersect.handleHeatTreeTooltip({ e: a, opt: s, x: e, y: i, type: r.config.chart.type });
            e = b.x, i = b.y, d.style.left = e + "px", d.style.top = i + "px";
          } else
            this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({ e: a, opt: s }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({ e: a, opt: s, x: e, y: i });
          if (this.yaxisTooltips.length)
            for (var m = 0; m < r.config.yaxis.length; m++)
              this.axesTooltip.drawYaxisTooltipText(m, h, this.xyRatios);
          s.tooltipEl.classList.add("apexcharts-active");
        } else
          a.type !== "mouseout" && a.type !== "touchend" || this.handleMouseOut(s);
      }
    } }, { key: "nonAxisChartsTooltips", value: function(t) {
      var e = t.e, i = t.opt, a = t.tooltipRect, s = this.w, r = i.paths.getAttribute("rel"), o = this.getElTooltip(), n = s.globals.dom.elWrap.getBoundingClientRect();
      if (e.type === "mousemove" || e.type === "touchmove") {
        o.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: parseInt(r, 10) - 1, shared: !1 });
        var h = s.globals.clientX - n.left - a.ttWidth / 2, c = s.globals.clientY - n.top - a.ttHeight - 10;
        if (o.style.left = h + "px", o.style.top = c + "px", s.config.legend.tooltipHoverFormatter) {
          var d = r - 1, g = (0, s.config.legend.tooltipHoverFormatter)(this.legendLabels[d].getAttribute("data:default-text"), { seriesIndex: d, dataPointIndex: d, w: s });
          this.legendLabels[d].innerHTML = g;
        }
      } else
        e.type !== "mouseout" && e.type !== "touchend" || (o.classList.remove("apexcharts-active"), s.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(p) {
          var f = p.getAttribute("data:default-text");
          p.innerHTML = decodeURIComponent(f);
        }));
    } }, { key: "handleStickyTooltip", value: function(t, e, i, a) {
      var s = this.w, r = this.tooltipUtil.getNearestValues({ context: this, hoverArea: a.hoverArea, elGrid: a.elGrid, clientX: e, clientY: i }), o = r.j, n = r.capturedSeries;
      s.globals.collapsedSeriesIndices.includes(n) && (n = null);
      var h = a.elGrid.getBoundingClientRect();
      if (r.hoverX < 0 || r.hoverX > h.width)
        this.handleMouseOut(a);
      else if (n !== null)
        this.handleStickyCapturedSeries(t, n, a, o);
      else if (this.tooltipUtil.isXoverlap(o) || s.globals.isBarHorizontal) {
        var c = s.globals.series.findIndex(function(d, g) {
          return !s.globals.collapsedSeriesIndices.includes(g);
        });
        this.create(t, this, c, o, a.ttItems);
      }
    } }, { key: "handleStickyCapturedSeries", value: function(t, e, i, a) {
      var s = this.w;
      if (!this.tConfig.shared && s.globals.series[e][a] === null)
        return void this.handleMouseOut(i);
      if (s.globals.series[e][a] !== void 0)
        this.tConfig.shared && this.tooltipUtil.isXoverlap(a) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(t, this, e, a, i.ttItems) : this.create(t, this, e, a, i.ttItems, !1);
      else if (this.tooltipUtil.isXoverlap(a)) {
        var r = s.globals.series.findIndex(function(o, n) {
          return !s.globals.collapsedSeriesIndices.includes(n);
        });
        this.create(t, this, r, a, i.ttItems);
      }
    } }, { key: "deactivateHoverFilter", value: function() {
      for (var t = this.w, e = new z(this.ctx), i = t.globals.dom.Paper.select(".apexcharts-bar-area"), a = 0; a < i.length; a++)
        e.pathMouseLeave(i[a]);
    } }, { key: "handleMouseOut", value: function(t) {
      var e = this.w, i = this.getElXCrosshairs();
      if (t.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), e.config.chart.type !== "bubble" && this.marker.resetPointsSize(), i !== null && i.classList.remove("apexcharts-active"), this.ycrosshairs !== null && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
        this.yaxisTTEls === null && (this.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
        for (var a = 0; a < this.yaxisTTEls.length; a++)
          this.yaxisTTEls[a].classList.remove("apexcharts-active");
      }
      e.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(s) {
        var r = s.getAttribute("data:default-text");
        s.innerHTML = decodeURIComponent(r);
      });
    } }, { key: "markerClick", value: function(t, e, i) {
      var a = this.w;
      typeof a.config.chart.events.markerClick == "function" && a.config.chart.events.markerClick(t, this.ctx, { seriesIndex: e, dataPointIndex: i, w: a }), this.ctx.events.fireEvent("markerClick", [t, this.ctx, { seriesIndex: e, dataPointIndex: i, w: a }]);
    } }, { key: "create", value: function(t, e, i, a, s) {
      var r, o, n, h, c, d, g, p, f, b, m, w, A, l, u, x, v = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, k = this.w, S = e;
      t.type === "mouseup" && this.markerClick(t, i, a), v === null && (v = this.tConfig.shared);
      var C = this.tooltipUtil.hasMarkers(i), L = this.tooltipUtil.getElBars();
      if (k.config.legend.tooltipHoverFormatter) {
        var M = k.config.legend.tooltipHoverFormatter, T = Array.from(this.legendLabels);
        T.forEach(function(st) {
          var K = st.getAttribute("data:default-text");
          st.innerHTML = decodeURIComponent(K);
        });
        for (var I = 0; I < T.length; I++) {
          var E = T[I], R = parseInt(E.getAttribute("i"), 10), H = decodeURIComponent(E.getAttribute("data:default-text")), D = M(H, { seriesIndex: v ? R : i, dataPointIndex: a, w: k });
          if (v)
            E.innerHTML = k.globals.collapsedSeriesIndices.indexOf(R) < 0 ? D : H;
          else if (E.innerHTML = R === i ? D : H, i === R)
            break;
        }
      }
      var W = X(X({ ttItems: s, i, j: a }, ((r = k.globals.seriesRange) === null || r === void 0 || (o = r[i]) === null || o === void 0 || (n = o[a]) === null || n === void 0 || (h = n.y[0]) === null || h === void 0 ? void 0 : h.y1) !== void 0 && { y1: (c = k.globals.seriesRange) === null || c === void 0 || (d = c[i]) === null || d === void 0 || (g = d[a]) === null || g === void 0 || (p = g.y[0]) === null || p === void 0 ? void 0 : p.y1 }), ((f = k.globals.seriesRange) === null || f === void 0 || (b = f[i]) === null || b === void 0 || (m = b[a]) === null || m === void 0 || (w = m.y[0]) === null || w === void 0 ? void 0 : w.y2) !== void 0 && { y2: (A = k.globals.seriesRange) === null || A === void 0 || (l = A[i]) === null || l === void 0 || (u = l[a]) === null || u === void 0 || (x = u.y[0]) === null || x === void 0 ? void 0 : x.y2 });
      if (v) {
        if (S.tooltipLabels.drawSeriesTexts(X(X({}, W), {}, { shared: !this.showOnIntersect && this.tConfig.shared })), C)
          k.globals.markers.largestSize > 0 ? S.marker.enlargePoints(a) : S.tooltipPosition.moveDynamicPointsOnHover(a);
        else if (this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(L), this.barSeriesHeight > 0)) {
          var N = new z(this.ctx), V = k.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(a, "']"));
          this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(a, i);
          for (var _ = 0; _ < V.length; _++)
            N.pathMouseEnter(V[_]);
        }
      } else
        S.tooltipLabels.drawSeriesTexts(X({ shared: !1 }, W)), this.tooltipUtil.hasBars() && S.tooltipPosition.moveStickyTooltipOverBars(a, i), C && S.tooltipPosition.moveMarkers(i, a);
    } }]), y;
  }(), Fe = function() {
    function y(t) {
      Y(this, y), this.w = t.w, this.barCtx = t, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter);
    }
    return F(y, [{ key: "handleBarDataLabels", value: function(t) {
      var e = t.x, i = t.y, a = t.y1, s = t.y2, r = t.i, o = t.j, n = t.realIndex, h = t.groupIndex, c = t.series, d = t.barHeight, g = t.barWidth, p = t.barXPosition, f = t.barYPosition, b = t.visibleSeries, m = t.renderedPath, w = this.w, A = new z(this.barCtx.ctx), l = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[n] : this.barCtx.strokeWidth, u = e + parseFloat(g * b), x = i + parseFloat(d * b);
      w.globals.isXNumeric && !w.globals.isBarHorizontal && (u = e + parseFloat(g * (b + 1)), x = i + parseFloat(d * (b + 1)) - l);
      var v, k = null, S = e, C = i, L = {}, M = w.config.dataLabels, T = this.barCtx.barOptions.dataLabels, I = this.barCtx.barOptions.dataLabels.total;
      f !== void 0 && this.barCtx.isRangeBar && (x = f, C = f), p !== void 0 && this.barCtx.isVerticalGroupedRangeBar && (u = p, S = p);
      var E = M.offsetX, R = M.offsetY, H = { width: 0, height: 0 };
      if (w.config.dataLabels.enabled) {
        var D = this.barCtx.series[r][o];
        H = A.getTextRects(w.globals.yLabelFormatters[0](D), parseFloat(M.style.fontSize));
      }
      var W = { x: e, y: i, i: r, j: o, realIndex: n, groupIndex: h || -1, renderedPath: m, bcx: u, bcy: x, barHeight: d, barWidth: g, textRects: H, strokeWidth: l, dataLabelsX: S, dataLabelsY: C, dataLabelsConfig: M, barDataLabelsConfig: T, barTotalDataLabelsConfig: I, offX: E, offY: R };
      return L = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(W) : this.calculateColumnsDataLabelsPosition(W), m.attr({ cy: L.bcy, cx: L.bcx, j: o, val: c[r][o], barHeight: d, barWidth: g }), v = this.drawCalculatedDataLabels({ x: L.dataLabelsX, y: L.dataLabelsY, val: this.barCtx.isRangeBar ? [a, s] : c[r][o], i: n, j: o, barWidth: g, barHeight: d, textRects: H, dataLabelsConfig: M }), w.config.chart.stacked && I.enabled && (k = this.drawTotalDataLabels({ x: L.totalDataLabelsX, y: L.totalDataLabelsY, barWidth: g, barHeight: d, realIndex: n, textAnchor: L.totalDataLabelsAnchor, val: this.getStackedTotalDataLabel({ realIndex: n, j: o }), dataLabelsConfig: M, barTotalDataLabelsConfig: I })), { dataLabels: v, totalDataLabels: k };
    } }, { key: "getStackedTotalDataLabel", value: function(t) {
      var e = t.realIndex, i = t.j, a = this.w, s = this.barCtx.stackedSeriesTotals[i];
      return this.totalFormatter && (s = this.totalFormatter(s, X(X({}, a), {}, { seriesIndex: e, dataPointIndex: i, w: a }))), s;
    } }, { key: "calculateColumnsDataLabelsPosition", value: function(t) {
      var e, i, a = this.w, s = t.i, r = t.j, o = t.realIndex, n = t.groupIndex, h = t.y, c = t.bcx, d = t.barWidth, g = t.barHeight, p = t.textRects, f = t.dataLabelsX, b = t.dataLabelsY, m = t.dataLabelsConfig, w = t.barDataLabelsConfig, A = t.barTotalDataLabelsConfig, l = t.strokeWidth, u = t.offX, x = t.offY;
      g = Math.abs(g);
      var v = a.config.plotOptions.bar.dataLabels.orientation === "vertical", k = this.barCtx.barHelpers.getZeroValueEncounters({ i: s, j: r }).zeroEncounters;
      c = c - l / 2 + (n !== -1 ? n * d : 0);
      var S = a.globals.gridWidth / a.globals.dataPoints;
      this.barCtx.isVerticalGroupedRangeBar ? f += d / 2 : (f = a.globals.isXNumeric ? c - d / 2 + u : c - S + d / 2 + u, k > 0 && a.config.plotOptions.bar.hideZeroBarsWhenGrouped && (f -= d * k)), v && (f = f + p.height / 2 - l / 2 - 2);
      var C = this.barCtx.series[s][r] < 0, L = h;
      switch (this.barCtx.isReversed && (L = h - g + (C ? 2 * g : 0), h -= g), w.position) {
        case "center":
          b = v ? C ? L - g / 2 + x : L + g / 2 - x : C ? L - g / 2 + p.height / 2 + x : L + g / 2 + p.height / 2 - x;
          break;
        case "bottom":
          b = v ? C ? L - g + x : L + g - x : C ? L - g + p.height + l + x : L + g - p.height / 2 + l - x;
          break;
        case "top":
          b = v ? C ? L + x : L - x : C ? L - p.height / 2 - x : L + p.height + x;
      }
      if (this.barCtx.lastActiveBarSerieIndex === o && A.enabled) {
        var M = new z(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: o, j: r }), m.fontSize);
        e = C ? L - M.height / 2 - x - A.offsetY + 18 : L + M.height + x + A.offsetY - 18, i = f + A.offsetX;
      }
      return a.config.chart.stacked || (b < 0 ? b = 0 + l : b + p.height / 3 > a.globals.gridHeight && (b = a.globals.gridHeight - l)), { bcx: c, bcy: h, dataLabelsX: f, dataLabelsY: b, totalDataLabelsX: i, totalDataLabelsY: e, totalDataLabelsAnchor: "middle" };
    } }, { key: "calculateBarsDataLabelsPosition", value: function(t) {
      var e = this.w, i = t.x, a = t.i, s = t.j, r = t.realIndex, o = t.groupIndex, n = t.bcy, h = t.barHeight, c = t.barWidth, d = t.textRects, g = t.dataLabelsX, p = t.strokeWidth, f = t.dataLabelsConfig, b = t.barDataLabelsConfig, m = t.barTotalDataLabelsConfig, w = t.offX, A = t.offY, l = e.globals.gridHeight / e.globals.dataPoints;
      c = Math.abs(c);
      var u, x, v = (n += o !== -1 ? o * h : 0) - (this.barCtx.isRangeBar ? 0 : l) + h / 2 + d.height / 2 + A - 3, k = "start", S = this.barCtx.series[a][s] < 0, C = i;
      switch (this.barCtx.isReversed && (C = i + c - (S ? 2 * c : 0), i = e.globals.gridWidth - c), b.position) {
        case "center":
          g = S ? C + c / 2 - w : Math.max(d.width / 2, C - c / 2) + w;
          break;
        case "bottom":
          g = S ? C + c - p - Math.round(d.width / 2) - w : C - c + p + Math.round(d.width / 2) + w;
          break;
        case "top":
          g = S ? C - p + Math.round(d.width / 2) - w : C - p - Math.round(d.width / 2) + w;
      }
      if (this.barCtx.lastActiveBarSerieIndex === r && m.enabled) {
        var L = new z(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: r, j: s }), f.fontSize);
        S ? (u = C - p + Math.round(L.width / 2) - w - m.offsetX - 15, k = "end") : u = C - p - Math.round(L.width / 2) + w + m.offsetX + 15, x = v + m.offsetY;
      }
      return e.config.chart.stacked || (g < 0 ? g = g + d.width + p : g + d.width / 2 > e.globals.gridWidth && (g = e.globals.gridWidth - d.width - p)), { bcx: i, bcy: n, dataLabelsX: g, dataLabelsY: v, totalDataLabelsX: u, totalDataLabelsY: x, totalDataLabelsAnchor: k };
    } }, { key: "drawCalculatedDataLabels", value: function(t) {
      var e = t.x, i = t.y, a = t.val, s = t.i, r = t.j, o = t.textRects, n = t.barHeight, h = t.barWidth, c = t.dataLabelsConfig, d = this.w, g = "rotate(0)";
      d.config.plotOptions.bar.dataLabels.orientation === "vertical" && (g = "rotate(-90, ".concat(e, ", ").concat(i, ")"));
      var p = new kt(this.barCtx.ctx), f = new z(this.barCtx.ctx), b = c.formatter, m = null, w = d.globals.collapsedSeriesIndices.indexOf(s) > -1;
      if (c.enabled && !w) {
        m = f.group({ class: "apexcharts-data-labels", transform: g });
        var A = "";
        a !== void 0 && (A = b(a, X(X({}, d), {}, { seriesIndex: s, dataPointIndex: r, w: d }))), !a && d.config.plotOptions.bar.hideZeroBarsWhenGrouped && (A = "");
        var l = d.globals.series[s][r] < 0, u = d.config.plotOptions.bar.dataLabels.position;
        d.config.plotOptions.bar.dataLabels.orientation === "vertical" && (u === "top" && (c.textAnchor = l ? "end" : "start"), u === "center" && (c.textAnchor = "middle"), u === "bottom" && (c.textAnchor = l ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && h < f.getTextRects(A, parseFloat(c.style.fontSize)).width && (A = ""), d.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? o.width / 1.6 > Math.abs(h) && (A = "") : o.height / 1.6 > Math.abs(n) && (A = ""));
        var x = X({}, c);
        this.barCtx.isHorizontal && a < 0 && (c.textAnchor === "start" ? x.textAnchor = "end" : c.textAnchor === "end" && (x.textAnchor = "start")), p.plotDataLabelsText({ x: e, y: i, text: A, i: s, j: r, parent: m, dataLabelsConfig: x, alwaysDrawDataLabel: !0, offsetCorrection: !0 });
      }
      return m;
    } }, { key: "drawTotalDataLabels", value: function(t) {
      var e, i = t.x, a = t.y, s = t.val, r = t.barWidth, o = t.barHeight, n = t.realIndex, h = t.textAnchor, c = t.barTotalDataLabelsConfig, d = this.w, g = new z(this.barCtx.ctx);
      return c.enabled && i !== void 0 && a !== void 0 && this.barCtx.lastActiveBarSerieIndex === n && (e = g.drawText({ x: i - (!d.globals.isBarHorizontal && d.globals.seriesGroups.length ? r / d.globals.seriesGroups.length : 0), y: a - (d.globals.isBarHorizontal && d.globals.seriesGroups.length ? o / d.globals.seriesGroups.length : 0), foreColor: c.style.color, text: s, textAnchor: h, fontFamily: c.style.fontFamily, fontSize: c.style.fontSize, fontWeight: c.style.fontWeight })), e;
    } }]), y;
  }(), Re = function() {
    function y(t) {
      Y(this, y), this.w = t.w, this.barCtx = t;
    }
    return F(y, [{ key: "initVariables", value: function(t) {
      var e = this.w;
      this.barCtx.series = t, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
      for (var i = 0; i < t.length; i++)
        if (t[i].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t[i].length), e.globals.isXNumeric)
          for (var a = 0; a < t[i].length; a++)
            e.globals.seriesX[i][a] > e.globals.minX && e.globals.seriesX[i][a] < e.globals.maxX && this.barCtx.visibleItems++;
        else
          this.barCtx.visibleItems = e.globals.dataPoints;
      this.barCtx.seriesLen === 0 && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], e.globals.comboCharts || this.checkZeroSeries({ series: t });
    } }, { key: "initialPositions", value: function() {
      var t, e, i, a, s, r, o, n, h = this.w, c = h.globals.dataPoints;
      this.barCtx.isRangeBar && (c = h.globals.labels.length);
      var d = this.barCtx.seriesLen;
      if (h.config.plotOptions.bar.rangeBarGroupRows && (d = 1), this.barCtx.isHorizontal)
        s = (i = h.globals.gridHeight / c) / d, h.globals.isXNumeric && (s = (i = h.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), s = s * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, String(this.barCtx.barOptions.barHeight).indexOf("%") === -1 && (s = parseInt(this.barCtx.barOptions.barHeight, 10)), n = this.barCtx.baseLineInvertedY + h.globals.padHorizontal + (this.barCtx.isReversed ? h.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), this.barCtx.isFunnel && (n = h.globals.gridWidth / 2), e = (i - s * this.barCtx.seriesLen) / 2;
      else {
        if (a = h.globals.gridWidth / this.barCtx.visibleItems, h.config.xaxis.convertedCatToNumeric && (a = h.globals.gridWidth / h.globals.dataPoints), r = a / d * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, h.globals.isXNumeric) {
          var g = this.barCtx.xRatio;
          h.globals.minXDiff && h.globals.minXDiff !== 0.5 && h.globals.minXDiff / g > 0 && (a = h.globals.minXDiff / g), (r = a / d * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (r = 1);
        }
        String(this.barCtx.barOptions.columnWidth).indexOf("%") === -1 && (r = parseInt(this.barCtx.barOptions.columnWidth, 10)), o = h.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.yaxisIndex] - (this.barCtx.isReversed ? h.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.yaxisIndex] : 0), t = h.globals.padHorizontal + (a - r * this.barCtx.seriesLen) / 2;
      }
      return h.globals.barHeight = s, h.globals.barWidth = r, { x: t, y: e, yDivision: i, xDivision: a, barHeight: s, barWidth: r, zeroH: o, zeroW: n };
    } }, { key: "initializeStackedPrevVars", value: function(t) {
      var e = t.w;
      e.globals.hasSeriesGroups ? e.globals.seriesGroups.forEach(function(i) {
        t[i] || (t[i] = {}), t[i].prevY = [], t[i].prevX = [], t[i].prevYF = [], t[i].prevXF = [], t[i].prevYVal = [], t[i].prevXVal = [];
      }) : (t.prevY = [], t.prevX = [], t.prevYF = [], t.prevXF = [], t.prevYVal = [], t.prevXVal = []);
    } }, { key: "initializeStackedXYVars", value: function(t) {
      var e = t.w;
      e.globals.hasSeriesGroups ? e.globals.seriesGroups.forEach(function(i) {
        t[i] || (t[i] = {}), t[i].xArrj = [], t[i].xArrjF = [], t[i].xArrjVal = [], t[i].yArrj = [], t[i].yArrjF = [], t[i].yArrjVal = [];
      }) : (t.xArrj = [], t.xArrjF = [], t.xArrjVal = [], t.yArrj = [], t.yArrjF = [], t.yArrjVal = []);
    } }, { key: "getPathFillColor", value: function(t, e, i, a) {
      var s, r, o, n, h = this.w, c = new at(this.barCtx.ctx), d = null, g = this.barCtx.barOptions.distributed ? i : e;
      return this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map(function(p) {
        t[e][i] >= p.from && t[e][i] <= p.to && (d = p.color);
      }), h.config.series[e].data[i] && h.config.series[e].data[i].fillColor && (d = h.config.series[e].data[i].fillColor), c.fillPath({ seriesNumber: this.barCtx.barOptions.distributed ? g : a, dataPointIndex: i, color: d, value: t[e][i], fillConfig: (s = h.config.series[e].data[i]) === null || s === void 0 ? void 0 : s.fill, fillType: (r = h.config.series[e].data[i]) !== null && r !== void 0 && (o = r.fill) !== null && o !== void 0 && o.type ? (n = h.config.series[e].data[i]) === null || n === void 0 ? void 0 : n.fill.type : Array.isArray(h.config.fill.type) ? h.config.fill.type[e] : h.config.fill.type });
    } }, { key: "getStrokeWidth", value: function(t, e, i) {
      var a = 0, s = this.w;
      return this.barCtx.series[t][e] === void 0 || this.barCtx.series[t][e] === null ? this.barCtx.isNullValue = !0 : this.barCtx.isNullValue = !1, s.config.stroke.show && (this.barCtx.isNullValue || (a = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i] : this.barCtx.strokeWidth)), a;
    } }, { key: "shouldApplyRadius", value: function(t) {
      var e = this.w, i = !1;
      return e.config.plotOptions.bar.borderRadius > 0 && (e.config.chart.stacked && e.config.plotOptions.bar.borderRadiusWhenStacked === "last" ? this.barCtx.lastActiveBarSerieIndex === t && (i = !0) : i = !0), i;
    } }, { key: "barBackground", value: function(t) {
      var e = t.j, i = t.i, a = t.x1, s = t.x2, r = t.y1, o = t.y2, n = t.elSeries, h = this.w, c = new z(this.barCtx.ctx), d = new et(this.barCtx.ctx).getActiveConfigSeriesIndex();
      if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && d === i) {
        e >= this.barCtx.barOptions.colors.backgroundBarColors.length && (e %= this.barCtx.barOptions.colors.backgroundBarColors.length);
        var g = this.barCtx.barOptions.colors.backgroundBarColors[e], p = c.drawRect(a !== void 0 ? a : 0, r !== void 0 ? r : 0, s !== void 0 ? s : h.globals.gridWidth, o !== void 0 ? o : h.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, g, this.barCtx.barOptions.colors.backgroundBarOpacity);
        n.add(p), p.node.classList.add("apexcharts-backgroundBar");
      }
    } }, { key: "getColumnPaths", value: function(t) {
      var e, i = t.barWidth, a = t.barXPosition, s = t.y1, r = t.y2, o = t.strokeWidth, n = t.seriesGroup, h = t.realIndex, c = t.i, d = t.j, g = t.w, p = new z(this.barCtx.ctx);
      (o = Array.isArray(o) ? o[h] : o) || (o = 0);
      var f = i, b = a;
      (e = g.config.series[h].data[d]) !== null && e !== void 0 && e.columnWidthOffset && (b = a - g.config.series[h].data[d].columnWidthOffset / 2, f = i + g.config.series[h].data[d].columnWidthOffset);
      var m = b, w = b + f;
      s += 1e-3, r += 1e-3;
      var A = p.move(m, s), l = p.move(m, s), u = p.line(w - o, s);
      if (g.globals.previousPaths.length > 0 && (l = this.barCtx.getPreviousPath(h, d, !1)), A = A + p.line(m, r) + p.line(w - o, r) + p.line(w - o, s) + (g.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z"), l = l + p.line(m, s) + u + u + u + u + u + p.line(m, s) + (g.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z"), this.shouldApplyRadius(h) && (A = p.roundPathCorners(A, g.config.plotOptions.bar.borderRadius)), g.config.chart.stacked) {
        var x = this.barCtx;
        g.globals.hasSeriesGroups && n && (x = this.barCtx[n]), x.yArrj.push(r), x.yArrjF.push(Math.abs(s - r)), x.yArrjVal.push(this.barCtx.series[c][d]);
      }
      return { pathTo: A, pathFrom: l };
    } }, { key: "getBarpaths", value: function(t) {
      var e, i = t.barYPosition, a = t.barHeight, s = t.x1, r = t.x2, o = t.strokeWidth, n = t.seriesGroup, h = t.realIndex, c = t.i, d = t.j, g = t.w, p = new z(this.barCtx.ctx);
      (o = Array.isArray(o) ? o[h] : o) || (o = 0);
      var f = i, b = a;
      (e = g.config.series[h].data[d]) !== null && e !== void 0 && e.barHeightOffset && (f = i - g.config.series[h].data[d].barHeightOffset / 2, b = a + g.config.series[h].data[d].barHeightOffset);
      var m = f, w = f + b;
      s += 1e-3, r += 1e-3;
      var A = p.move(s, m), l = p.move(s, m);
      g.globals.previousPaths.length > 0 && (l = this.barCtx.getPreviousPath(h, d, !1));
      var u = p.line(s, w - o);
      if (A = A + p.line(r, m) + p.line(r, w - o) + u + (g.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z"), l = l + p.line(s, m) + u + u + u + u + u + p.line(s, m) + (g.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z"), this.shouldApplyRadius(h) && (A = p.roundPathCorners(A, g.config.plotOptions.bar.borderRadius)), g.config.chart.stacked) {
        var x = this.barCtx;
        g.globals.hasSeriesGroups && n && (x = this.barCtx[n]), x.xArrj.push(r), x.xArrjF.push(Math.abs(s - r)), x.xArrjVal.push(this.barCtx.series[c][d]);
      }
      return { pathTo: A, pathFrom: l };
    } }, { key: "checkZeroSeries", value: function(t) {
      for (var e = t.series, i = this.w, a = 0; a < e.length; a++) {
        for (var s = 0, r = 0; r < e[i.globals.maxValsInArrayIndex].length; r++)
          s += e[a][r];
        s === 0 && this.barCtx.zeroSerieses.push(a);
      }
    } }, { key: "getXForValue", value: function(t, e) {
      var i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2] ? e : null;
      return t != null && (i = e + t / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? t / this.barCtx.invertedYRatio : 0)), i;
    } }, { key: "getYForValue", value: function(t, e) {
      var i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2] ? e : null;
      return t != null && (i = e - t / this.barCtx.yRatio[this.barCtx.yaxisIndex] + 2 * (this.barCtx.isReversed ? t / this.barCtx.yRatio[this.barCtx.yaxisIndex] : 0)), i;
    } }, { key: "getGoalValues", value: function(t, e, i, a, s) {
      var r = this, o = this.w, n = [], h = function(g, p) {
        var f;
        n.push((tt(f = {}, t, t === "x" ? r.getXForValue(g, e, !1) : r.getYForValue(g, i, !1)), tt(f, "attrs", p), f));
      };
      if (o.globals.seriesGoals[a] && o.globals.seriesGoals[a][s] && Array.isArray(o.globals.seriesGoals[a][s]) && o.globals.seriesGoals[a][s].forEach(function(g) {
        h(g.value, g);
      }), this.barCtx.barOptions.isDumbbell && o.globals.seriesRange.length) {
        var c = this.barCtx.barOptions.dumbbellColors ? this.barCtx.barOptions.dumbbellColors : o.globals.colors, d = { strokeHeight: t === "x" ? 0 : o.globals.markers.size[a], strokeWidth: t === "x" ? o.globals.markers.size[a] : 0, strokeDashArray: 0, strokeLineCap: "round", strokeColor: Array.isArray(c[a]) ? c[a][0] : c[a] };
        h(o.globals.seriesRangeStart[a][s], d), h(o.globals.seriesRangeEnd[a][s], X(X({}, d), {}, { strokeColor: Array.isArray(c[a]) ? c[a][1] : c[a] }));
      }
      return n;
    } }, { key: "drawGoalLine", value: function(t) {
      var e = t.barXPosition, i = t.barYPosition, a = t.goalX, s = t.goalY, r = t.barWidth, o = t.barHeight, n = new z(this.barCtx.ctx), h = n.group({ className: "apexcharts-bar-goals-groups" });
      h.node.classList.add("apexcharts-element-hidden"), this.barCtx.w.globals.delayedElements.push({ el: h.node }), h.attr("clip-path", "url(#gridRectMarkerMask".concat(this.barCtx.w.globals.cuid, ")"));
      var c = null;
      return this.barCtx.isHorizontal ? Array.isArray(a) && a.forEach(function(d) {
        var g = d.attrs.strokeHeight !== void 0 ? d.attrs.strokeHeight : o / 2, p = i + g + o / 2;
        c = n.drawLine(d.x, p - 2 * g, d.x, p, d.attrs.strokeColor ? d.attrs.strokeColor : void 0, d.attrs.strokeDashArray, d.attrs.strokeWidth ? d.attrs.strokeWidth : 2, d.attrs.strokeLineCap), h.add(c);
      }) : Array.isArray(s) && s.forEach(function(d) {
        var g = d.attrs.strokeWidth !== void 0 ? d.attrs.strokeWidth : r / 2, p = e + g + r / 2;
        c = n.drawLine(p - 2 * g, d.y, p, d.y, d.attrs.strokeColor ? d.attrs.strokeColor : void 0, d.attrs.strokeDashArray, d.attrs.strokeHeight ? d.attrs.strokeHeight : 2, d.attrs.strokeLineCap), h.add(c);
      }), h;
    } }, { key: "drawBarShadow", value: function(t) {
      var e = t.prevPaths, i = t.currPaths, a = t.color, s = this.w, r = e.x, o = e.x1, n = e.barYPosition, h = i.x, c = i.x1, d = i.barYPosition, g = n + i.barHeight, p = new z(this.barCtx.ctx), f = new P(), b = p.move(o, g) + p.line(r, g) + p.line(h, d) + p.line(c, d) + p.line(o, g) + (s.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z");
      return p.drawPath({ d: b, fill: f.shadeColor(0.5, P.rgb2hex(a)), stroke: "none", strokeWidth: 0, fillOpacity: 1, classes: "apexcharts-bar-shadows" });
    } }, { key: "getZeroValueEncounters", value: function(t) {
      var e = t.i, i = t.j, a = this.w, s = 0, r = 0;
      return a.globals.seriesPercent.forEach(function(o, n) {
        o[i] && s++, n < e && o[i] === 0 && r++;
      }), { nonZeroColumns: s, zeroEncounters: r };
    } }]), y;
  }(), St = function() {
    function y(t, e) {
      Y(this, y), this.ctx = t, this.w = t.w;
      var i = this.w;
      this.barOptions = i.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = i.config.stroke.width, this.isNullValue = !1, this.isRangeBar = i.globals.seriesRange.length && this.isHorizontal, this.isVerticalGroupedRangeBar = !i.globals.isBarHorizontal && i.globals.seriesRange.length && i.config.plotOptions.bar.rangeBarGroupRows, this.isFunnel = this.barOptions.isFunnel, this.xyRatios = e, this.xyRatios !== null && (this.xRatio = e.xRatio, this.yRatio = e.yRatio, this.invertedXRatio = e.invertedXRatio, this.invertedYRatio = e.invertedYRatio, this.baseLineY = e.baseLineY, this.baseLineInvertedY = e.baseLineInvertedY), this.yaxisIndex = 0, this.seriesLen = 0, this.pathArr = [];
      var a = new et(this.ctx);
      this.lastActiveBarSerieIndex = a.getActiveConfigSeriesIndex("desc", ["bar", "column"]);
      var s = a.getBarSeriesIndices(), r = new q(this.ctx);
      this.stackedSeriesTotals = r.getStackedSeriesTotals(this.w.config.series.map(function(o, n) {
        return s.indexOf(n) === -1 ? n : -1;
      }).filter(function(o) {
        return o !== -1;
      })), this.barHelpers = new Re(this);
    }
    return F(y, [{ key: "draw", value: function(t, e) {
      var i = this.w, a = new z(this.ctx), s = new q(this.ctx, i);
      t = s.getLogSeries(t), this.series = t, this.yRatio = s.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t);
      var r = a.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
      i.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering - ApexCharts");
      for (var o = 0, n = 0; o < t.length; o++, n++) {
        var h, c, d, g, p = void 0, f = void 0, b = [], m = [], w = i.globals.comboCharts ? e[o] : o, A = a.group({ class: "apexcharts-series", rel: o + 1, seriesName: P.escapeString(i.globals.seriesNames[w]), "data:realIndex": w });
        this.ctx.series.addCollapsedClassToSeries(A, w), t[o].length > 0 && (this.visibleI = this.visibleI + 1);
        var l = 0, u = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = w), this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed;
        var x = this.barHelpers.initialPositions();
        f = x.y, l = x.barHeight, c = x.yDivision, g = x.zeroW, p = x.x, u = x.barWidth, h = x.xDivision, d = x.zeroH, this.horizontal || m.push(p + u / 2);
        var v = a.group({ class: "apexcharts-datalabels", "data:realIndex": w });
        i.globals.delayedElements.push({ el: v.node }), v.node.classList.add("apexcharts-element-hidden");
        var k = a.group({ class: "apexcharts-bar-goals-markers" }), S = a.group({ class: "apexcharts-bar-shadows" });
        i.globals.delayedElements.push({ el: S.node }), S.node.classList.add("apexcharts-element-hidden");
        for (var C = 0; C < i.globals.dataPoints; C++) {
          var L = this.barHelpers.getStrokeWidth(o, C, w), M = null, T = { indexes: { i: o, j: C, realIndex: w, bc: n }, x: p, y: f, strokeWidth: L, elSeries: A };
          this.isHorizontal ? (M = this.drawBarPaths(X(X({}, T), {}, { barHeight: l, zeroW: g, yDivision: c })), u = this.series[o][C] / this.invertedYRatio) : (M = this.drawColumnPaths(X(X({}, T), {}, { xDivision: h, barWidth: u, zeroH: d })), l = this.series[o][C] / this.yRatio[this.yaxisIndex]);
          var I = this.barHelpers.getPathFillColor(t, o, C, w);
          if (this.isFunnel && this.barOptions.isFunnel3d && this.pathArr.length && C > 0) {
            var E = this.barHelpers.drawBarShadow({ color: typeof I == "string" && (I == null ? void 0 : I.indexOf("url")) === -1 ? I : P.hexToRgba(i.globals.colors[o]), prevPaths: this.pathArr[this.pathArr.length - 1], currPaths: M });
            E && S.add(E);
          }
          this.pathArr.push(M);
          var R = this.barHelpers.drawGoalLine({ barXPosition: M.barXPosition, barYPosition: M.barYPosition, goalX: M.goalX, goalY: M.goalY, barHeight: l, barWidth: u });
          R && k.add(R), f = M.y, p = M.x, C > 0 && m.push(p + u / 2), b.push(f), this.renderSeries({ realIndex: w, pathFill: I, j: C, i: o, pathFrom: M.pathFrom, pathTo: M.pathTo, strokeWidth: L, elSeries: A, x: p, y: f, series: t, barHeight: M.barHeight ? M.barHeight : l, barWidth: M.barWidth ? M.barWidth : u, elDataLabelsWrap: v, elGoalsMarkers: k, elBarShadows: S, visibleSeries: this.visibleI, type: "bar" });
        }
        i.globals.seriesXvalues[w] = m, i.globals.seriesYvalues[w] = b, r.add(A);
      }
      return r;
    } }, { key: "renderSeries", value: function(t) {
      var e = t.realIndex, i = t.pathFill, a = t.lineFill, s = t.j, r = t.i, o = t.groupIndex, n = t.pathFrom, h = t.pathTo, c = t.strokeWidth, d = t.elSeries, g = t.x, p = t.y, f = t.y1, b = t.y2, m = t.series, w = t.barHeight, A = t.barWidth, l = t.barXPosition, u = t.barYPosition, x = t.elDataLabelsWrap, v = t.elGoalsMarkers, k = t.elBarShadows, S = t.visibleSeries, C = t.type, L = this.w, M = new z(this.ctx);
      a || (a = this.barOptions.distributed ? L.globals.stroke.colors[s] : L.globals.stroke.colors[e]), L.config.series[r].data[s] && L.config.series[r].data[s].strokeColor && (a = L.config.series[r].data[s].strokeColor), this.isNullValue && (i = "none");
      var T = s / L.config.chart.animations.animateGradually.delay * (L.config.chart.animations.speed / L.globals.dataPoints) / 2.4, I = M.renderPaths({ i: r, j: s, realIndex: e, pathFrom: n, pathTo: h, stroke: a, strokeWidth: c, strokeLineCap: L.config.stroke.lineCap, fill: i, animationDelay: T, initialSpeed: L.config.chart.animations.speed, dataChangeSpeed: L.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(C, "-area") });
      I.attr("clip-path", "url(#gridRectMask".concat(L.globals.cuid, ")"));
      var E = L.config.forecastDataPoints;
      E.count > 0 && s >= L.globals.dataPoints - E.count && (I.node.setAttribute("stroke-dasharray", E.dashArray), I.node.setAttribute("stroke-width", E.strokeWidth), I.node.setAttribute("fill-opacity", E.fillOpacity)), f !== void 0 && b !== void 0 && (I.attr("data-range-y1", f), I.attr("data-range-y2", b)), new Z(this.ctx).setSelectionFilter(I, e, s), d.add(I);
      var R = new Fe(this).handleBarDataLabels({ x: g, y: p, y1: f, y2: b, i: r, j: s, series: m, realIndex: e, groupIndex: o, barHeight: w, barWidth: A, barXPosition: l, barYPosition: u, renderedPath: I, visibleSeries: S });
      return R.dataLabels !== null && x.add(R.dataLabels), R.totalDataLabels && x.add(R.totalDataLabels), d.add(x), v && d.add(v), k && d.add(k), d;
    } }, { key: "drawBarPaths", value: function(t) {
      var e, i = t.indexes, a = t.barHeight, s = t.strokeWidth, r = t.zeroW, o = t.x, n = t.y, h = t.yDivision, c = t.elSeries, d = this.w, g = i.i, p = i.j;
      if (d.globals.isXNumeric)
        e = (n = (d.globals.seriesX[g][p] - d.globals.minX) / this.invertedXRatio - a) + a * this.visibleI;
      else if (d.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        var f = 0, b = 0;
        d.globals.seriesPercent.forEach(function(w, A) {
          w[p] && f++, A < g && w[p] === 0 && b++;
        }), f > 0 && (a = this.seriesLen * a / f), e = n + a * this.visibleI, e -= a * b;
      } else
        e = n + a * this.visibleI;
      this.isFunnel && (r -= (this.barHelpers.getXForValue(this.series[g][p], r) - r) / 2), o = this.barHelpers.getXForValue(this.series[g][p], r);
      var m = this.barHelpers.getBarpaths({ barYPosition: e, barHeight: a, x1: r, x2: o, strokeWidth: s, series: this.series, realIndex: i.realIndex, i: g, j: p, w: d });
      return d.globals.isXNumeric || (n += h), this.barHelpers.barBackground({ j: p, i: g, y1: e - a * this.visibleI, y2: a * this.seriesLen, elSeries: c }), { pathTo: m.pathTo, pathFrom: m.pathFrom, x1: r, x: o, y: n, goalX: this.barHelpers.getGoalValues("x", r, null, g, p), barYPosition: e, barHeight: a };
    } }, { key: "drawColumnPaths", value: function(t) {
      var e, i = t.indexes, a = t.x, s = t.y, r = t.xDivision, o = t.barWidth, n = t.zeroH, h = t.strokeWidth, c = t.elSeries, d = this.w, g = i.realIndex, p = i.i, f = i.j, b = i.bc;
      if (d.globals.isXNumeric) {
        var m = this.getBarXForNumericXAxis({ x: a, j: f, realIndex: g, barWidth: o });
        a = m.x, e = m.barXPosition;
      } else if (d.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        var w = this.barHelpers.getZeroValueEncounters({ i: p, j: f }), A = w.nonZeroColumns, l = w.zeroEncounters;
        A > 0 && (o = this.seriesLen * o / A), e = a + o * this.visibleI, e -= o * l;
      } else
        e = a + o * this.visibleI;
      s = this.barHelpers.getYForValue(this.series[p][f], n);
      var u = this.barHelpers.getColumnPaths({ barXPosition: e, barWidth: o, y1: n, y2: s, strokeWidth: h, series: this.series, realIndex: i.realIndex, i: p, j: f, w: d });
      return d.globals.isXNumeric || (a += r), this.barHelpers.barBackground({ bc: b, j: f, i: p, x1: e - h / 2 - o * this.visibleI, x2: o * this.seriesLen + h / 2, elSeries: c }), { pathTo: u.pathTo, pathFrom: u.pathFrom, x: a, y: s, goalY: this.barHelpers.getGoalValues("y", null, n, p, f), barXPosition: e, barWidth: o };
    } }, { key: "getBarXForNumericXAxis", value: function(t) {
      var e = t.x, i = t.barWidth, a = t.realIndex, s = t.j, r = this.w, o = a;
      return r.globals.seriesX[a].length || (o = r.globals.maxValsInArrayIndex), r.globals.seriesX[o][s] && (e = (r.globals.seriesX[o][s] - r.globals.minX) / this.xRatio - i * this.seriesLen / 2), { barXPosition: e + i * this.visibleI, x: e };
    } }, { key: "getPreviousPath", value: function(t, e) {
      for (var i, a = this.w, s = 0; s < a.globals.previousPaths.length; s++) {
        var r = a.globals.previousPaths[s];
        r.paths && r.paths.length > 0 && parseInt(r.realIndex, 10) === parseInt(t, 10) && a.globals.previousPaths[s].paths[e] !== void 0 && (i = a.globals.previousPaths[s].paths[e].d);
      }
      return i;
    } }]), y;
  }(), oe = function(y) {
    ut(e, St);
    var t = pt(e);
    function e() {
      return Y(this, e), t.apply(this, arguments);
    }
    return F(e, [{ key: "draw", value: function(i, a) {
      var s = this, r = this.w;
      this.graphics = new z(this.ctx), this.bar = new St(this.ctx, this.xyRatios);
      var o = new q(this.ctx, r);
      i = o.getLogSeries(i), this.yRatio = o.getLogYRatios(this.yRatio), this.barHelpers.initVariables(i), r.config.chart.stackType === "100%" && (i = r.globals.seriesPercent.slice()), this.series = i, this.barHelpers.initializeStackedPrevVars(this);
      for (var n = this.graphics.group({ class: "apexcharts-bar-series apexcharts-plot-series" }), h = 0, c = 0, d = function(f, b) {
        var m = void 0, w = void 0, A = void 0, l = void 0, u = -1;
        s.groupCtx = s, r.globals.seriesGroups.forEach(function(V, _) {
          V.indexOf(r.config.series[f].name) > -1 && (u = _);
        }), u !== -1 && (s.groupCtx = s[r.globals.seriesGroups[u]]);
        var x = [], v = [], k = r.globals.comboCharts ? a[f] : f;
        s.yRatio.length > 1 && (s.yaxisIndex = k), s.isReversed = r.config.yaxis[s.yaxisIndex] && r.config.yaxis[s.yaxisIndex].reversed;
        var S = s.graphics.group({ class: "apexcharts-series", seriesName: P.escapeString(r.globals.seriesNames[k]), rel: f + 1, "data:realIndex": k });
        s.ctx.series.addCollapsedClassToSeries(S, k);
        var C = s.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": k }), L = s.graphics.group({ class: "apexcharts-bar-goals-markers" }), M = 0, T = 0, I = s.initialPositions(h, c, m, w, A, l);
        c = I.y, M = I.barHeight, w = I.yDivision, l = I.zeroW, h = I.x, T = I.barWidth, m = I.xDivision, A = I.zeroH, r.globals.barHeight = M, r.globals.barWidth = T, s.barHelpers.initializeStackedXYVars(s), s.groupCtx.prevY.length === 1 && s.groupCtx.prevY[0].every(function(V) {
          return isNaN(V);
        }) && (s.groupCtx.prevY[0] = s.groupCtx.prevY[0].map(function(V) {
          return A;
        }), s.groupCtx.prevYF[0] = s.groupCtx.prevYF[0].map(function(V) {
          return 0;
        }));
        for (var E = 0; E < r.globals.dataPoints; E++) {
          var R = s.barHelpers.getStrokeWidth(f, E, k), H = { indexes: { i: f, j: E, realIndex: k, bc: b }, strokeWidth: R, x: h, y: c, elSeries: S, groupIndex: u, seriesGroup: r.globals.seriesGroups[u] }, D = null;
          s.isHorizontal ? (D = s.drawStackedBarPaths(X(X({}, H), {}, { zeroW: l, barHeight: M, yDivision: w })), T = s.series[f][E] / s.invertedYRatio) : (D = s.drawStackedColumnPaths(X(X({}, H), {}, { xDivision: m, barWidth: T, zeroH: A })), M = s.series[f][E] / s.yRatio[s.yaxisIndex]);
          var W = s.barHelpers.drawGoalLine({ barXPosition: D.barXPosition, barYPosition: D.barYPosition, goalX: D.goalX, goalY: D.goalY, barHeight: M, barWidth: T });
          W && L.add(W), c = D.y, h = D.x, x.push(h), v.push(c);
          var N = s.barHelpers.getPathFillColor(i, f, E, k);
          S = s.renderSeries({ realIndex: k, pathFill: N, j: E, i: f, groupIndex: u, pathFrom: D.pathFrom, pathTo: D.pathTo, strokeWidth: R, elSeries: S, x: h, y: c, series: i, barHeight: M, barWidth: T, elDataLabelsWrap: C, elGoalsMarkers: L, type: "bar", visibleSeries: 0 });
        }
        r.globals.seriesXvalues[k] = x, r.globals.seriesYvalues[k] = v, s.groupCtx.prevY.push(s.groupCtx.yArrj), s.groupCtx.prevYF.push(s.groupCtx.yArrjF), s.groupCtx.prevYVal.push(s.groupCtx.yArrjVal), s.groupCtx.prevX.push(s.groupCtx.xArrj), s.groupCtx.prevXF.push(s.groupCtx.xArrjF), s.groupCtx.prevXVal.push(s.groupCtx.xArrjVal), n.add(S);
      }, g = 0, p = 0; g < i.length; g++, p++)
        d(g, p);
      return n;
    } }, { key: "initialPositions", value: function(i, a, s, r, o, n) {
      var h, c, d, g, p = this.w;
      return this.isHorizontal ? (d = (d = r = p.globals.gridHeight / p.globals.dataPoints) * parseInt(p.config.plotOptions.bar.barHeight, 10) / 100, String(p.config.plotOptions.bar.barHeight).indexOf("%") === -1 && (d = parseInt(p.config.plotOptions.bar.barHeight, 10)), n = this.baseLineInvertedY + p.globals.padHorizontal + (this.isReversed ? p.globals.gridWidth : 0) - (this.isReversed ? 2 * this.baseLineInvertedY : 0), a = (r - d) / 2) : (g = s = p.globals.gridWidth / p.globals.dataPoints, g = p.globals.isXNumeric && p.globals.dataPoints > 1 ? (s = p.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : g * parseInt(p.config.plotOptions.bar.columnWidth, 10) / 100, String(p.config.plotOptions.bar.columnWidth).indexOf("%") === -1 && (g = parseInt(p.config.plotOptions.bar.columnWidth, 10)), o = p.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? p.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), i = p.globals.padHorizontal + (s - g) / 2), { x: i, y: a, yDivision: r, xDivision: s, barHeight: (h = p.globals.seriesGroups) !== null && h !== void 0 && h.length ? d / p.globals.seriesGroups.length : d, barWidth: (c = p.globals.seriesGroups) !== null && c !== void 0 && c.length ? g / p.globals.seriesGroups.length : g, zeroH: o, zeroW: n };
    } }, { key: "drawStackedBarPaths", value: function(i) {
      for (var a, s = i.indexes, r = i.barHeight, o = i.strokeWidth, n = i.zeroW, h = i.x, c = i.y, d = i.groupIndex, g = i.seriesGroup, p = i.yDivision, f = i.elSeries, b = this.w, m = c + (d !== -1 ? d * r : 0), w = s.i, A = s.j, l = 0, u = 0; u < this.groupCtx.prevXF.length; u++)
        l += this.groupCtx.prevXF[u][A];
      var x = w;
      if (g && (x = g.indexOf(b.config.series[w].name)), x > 0) {
        var v = n;
        this.groupCtx.prevXVal[x - 1][A] < 0 ? v = this.series[w][A] >= 0 ? this.groupCtx.prevX[x - 1][A] + l - 2 * (this.isReversed ? l : 0) : this.groupCtx.prevX[x - 1][A] : this.groupCtx.prevXVal[x - 1][A] >= 0 && (v = this.series[w][A] >= 0 ? this.groupCtx.prevX[x - 1][A] : this.groupCtx.prevX[x - 1][A] - l + 2 * (this.isReversed ? l : 0)), a = v;
      } else
        a = n;
      h = this.series[w][A] === null ? a : a + this.series[w][A] / this.invertedYRatio - 2 * (this.isReversed ? this.series[w][A] / this.invertedYRatio : 0);
      var k = this.barHelpers.getBarpaths({ barYPosition: m, barHeight: r, x1: a, x2: h, strokeWidth: o, series: this.series, realIndex: s.realIndex, seriesGroup: g, i: w, j: A, w: b });
      return this.barHelpers.barBackground({ j: A, i: w, y1: m, y2: r, elSeries: f }), c += p, { pathTo: k.pathTo, pathFrom: k.pathFrom, goalX: this.barHelpers.getGoalValues("x", n, null, w, A), barYPosition: m, x: h, y: c };
    } }, { key: "drawStackedColumnPaths", value: function(i) {
      var a = i.indexes, s = i.x, r = i.y, o = i.xDivision, n = i.barWidth, h = i.zeroH, c = i.groupIndex, d = i.seriesGroup, g = i.elSeries, p = this.w, f = a.i, b = a.j, m = a.bc;
      if (p.globals.isXNumeric) {
        var w = p.globals.seriesX[f][b];
        w || (w = 0), s = (w - p.globals.minX) / this.xRatio - n / 2, p.globals.seriesGroups.length && (s = (w - p.globals.minX) / this.xRatio - n / 2 * p.globals.seriesGroups.length);
      }
      for (var A, l = s + (c !== -1 ? c * n : 0), u = 0, x = 0; x < this.groupCtx.prevYF.length; x++)
        u += isNaN(this.groupCtx.prevYF[x][b]) ? 0 : this.groupCtx.prevYF[x][b];
      var v = f;
      if (d && (v = d.indexOf(p.config.series[f].name)), v > 0 && !p.globals.isXNumeric || v > 0 && p.globals.isXNumeric && p.globals.seriesX[f - 1][b] === p.globals.seriesX[f][b]) {
        var k, S, C, L = Math.min(this.yRatio.length + 1, f + 1);
        if (this.groupCtx.prevY[v - 1] !== void 0 && this.groupCtx.prevY[v - 1].length)
          for (var M = 1; M < L; M++) {
            var T;
            if (!isNaN((T = this.groupCtx.prevY[v - M]) === null || T === void 0 ? void 0 : T[b])) {
              C = this.groupCtx.prevY[v - M][b];
              break;
            }
          }
        for (var I = 1; I < L; I++) {
          var E, R;
          if (((E = this.groupCtx.prevYVal[v - I]) === null || E === void 0 ? void 0 : E[b]) < 0) {
            S = this.series[f][b] >= 0 ? C - u + 2 * (this.isReversed ? u : 0) : C;
            break;
          }
          if (((R = this.groupCtx.prevYVal[v - I]) === null || R === void 0 ? void 0 : R[b]) >= 0) {
            S = this.series[f][b] >= 0 ? C : C + u - 2 * (this.isReversed ? u : 0);
            break;
          }
        }
        S === void 0 && (S = p.globals.gridHeight), A = (k = this.groupCtx.prevYF[0]) !== null && k !== void 0 && k.every(function(D) {
          return D === 0;
        }) && this.groupCtx.prevYF.slice(1, v).every(function(D) {
          return D.every(function(W) {
            return isNaN(W);
          });
        }) ? h : S;
      } else
        A = h;
      r = this.series[f][b] ? A - this.series[f][b] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[f][b] / this.yRatio[this.yaxisIndex] : 0) : A;
      var H = this.barHelpers.getColumnPaths({ barXPosition: l, barWidth: n, y1: A, y2: r, yRatio: this.yRatio[this.yaxisIndex], strokeWidth: this.strokeWidth, series: this.series, seriesGroup: d, realIndex: a.realIndex, i: f, j: b, w: p });
      return this.barHelpers.barBackground({ bc: m, j: b, i: f, x1: l, x2: n, elSeries: g }), s += o, { pathTo: H.pathTo, pathFrom: H.pathFrom, goalY: this.barHelpers.getGoalValues("y", null, h, f, b), barXPosition: l, x: p.globals.isXNumeric ? s - o : s, y: r };
    } }]), e;
  }(), Vt = function(y) {
    ut(e, St);
    var t = pt(e);
    function e() {
      return Y(this, e), t.apply(this, arguments);
    }
    return F(e, [{ key: "draw", value: function(i, a, s) {
      var r = this, o = this.w, n = new z(this.ctx), h = o.globals.comboCharts ? a : o.config.chart.type, c = new at(this.ctx);
      this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = o.config.plotOptions.bar.horizontal;
      var d = new q(this.ctx, o);
      i = d.getLogSeries(i), this.series = i, this.yRatio = d.getLogYRatios(this.yRatio), this.barHelpers.initVariables(i);
      for (var g = n.group({ class: "apexcharts-".concat(h, "-series apexcharts-plot-series") }), p = function(b) {
        r.isBoxPlot = o.config.chart.type === "boxPlot" || o.config.series[b].type === "boxPlot";
        var m, w, A, l, u = void 0, x = void 0, v = [], k = [], S = o.globals.comboCharts ? s[b] : b, C = n.group({ class: "apexcharts-series", seriesName: P.escapeString(o.globals.seriesNames[S]), rel: b + 1, "data:realIndex": S });
        r.ctx.series.addCollapsedClassToSeries(C, S), i[b].length > 0 && (r.visibleI = r.visibleI + 1);
        var L, M;
        r.yRatio.length > 1 && (r.yaxisIndex = S);
        var T = r.barHelpers.initialPositions();
        x = T.y, L = T.barHeight, w = T.yDivision, l = T.zeroW, u = T.x, M = T.barWidth, m = T.xDivision, A = T.zeroH, k.push(u + M / 2);
        for (var I = n.group({ class: "apexcharts-datalabels", "data:realIndex": S }), E = function(H) {
          var D = r.barHelpers.getStrokeWidth(b, H, S), W = null, N = { indexes: { i: b, j: H, realIndex: S }, x: u, y: x, strokeWidth: D, elSeries: C };
          W = r.isHorizontal ? r.drawHorizontalBoxPaths(X(X({}, N), {}, { yDivision: w, barHeight: L, zeroW: l })) : r.drawVerticalBoxPaths(X(X({}, N), {}, { xDivision: m, barWidth: M, zeroH: A })), x = W.y, u = W.x, H > 0 && k.push(u + M / 2), v.push(x), W.pathTo.forEach(function(V, _) {
            var st = !r.isBoxPlot && r.candlestickOptions.wick.useFillColor ? W.color[_] : o.globals.stroke.colors[b], K = c.fillPath({ seriesNumber: S, dataPointIndex: H, color: W.color[_], value: i[b][H] });
            r.renderSeries({ realIndex: S, pathFill: K, lineFill: st, j: H, i: b, pathFrom: W.pathFrom, pathTo: V, strokeWidth: D, elSeries: C, x: u, y: x, series: i, barHeight: L, barWidth: M, elDataLabelsWrap: I, visibleSeries: r.visibleI, type: o.config.chart.type });
          });
        }, R = 0; R < o.globals.dataPoints; R++)
          E(R);
        o.globals.seriesXvalues[S] = k, o.globals.seriesYvalues[S] = v, g.add(C);
      }, f = 0; f < i.length; f++)
        p(f);
      return g;
    } }, { key: "drawVerticalBoxPaths", value: function(i) {
      var a = i.indexes, s = i.x;
      i.y;
      var r = i.xDivision, o = i.barWidth, n = i.zeroH, h = i.strokeWidth, c = this.w, d = new z(this.ctx), g = a.i, p = a.j, f = !0, b = c.config.plotOptions.candlestick.colors.upward, m = c.config.plotOptions.candlestick.colors.downward, w = "";
      this.isBoxPlot && (w = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
      var A = this.yRatio[this.yaxisIndex], l = a.realIndex, u = this.getOHLCValue(l, p), x = n, v = n;
      u.o > u.c && (f = !1);
      var k = Math.min(u.o, u.c), S = Math.max(u.o, u.c), C = u.m;
      c.globals.isXNumeric && (s = (c.globals.seriesX[l][p] - c.globals.minX) / this.xRatio - o / 2);
      var L = s + o * this.visibleI;
      this.series[g][p] === void 0 || this.series[g][p] === null ? (k = n, S = n) : (k = n - k / A, S = n - S / A, x = n - u.h / A, v = n - u.l / A, C = n - u.m / A);
      var M = d.move(L, n), T = d.move(L + o / 2, k);
      return c.globals.previousPaths.length > 0 && (T = this.getPreviousPath(l, p, !0)), M = this.isBoxPlot ? [d.move(L, k) + d.line(L + o / 2, k) + d.line(L + o / 2, x) + d.line(L + o / 4, x) + d.line(L + o - o / 4, x) + d.line(L + o / 2, x) + d.line(L + o / 2, k) + d.line(L + o, k) + d.line(L + o, C) + d.line(L, C) + d.line(L, k + h / 2), d.move(L, C) + d.line(L + o, C) + d.line(L + o, S) + d.line(L + o / 2, S) + d.line(L + o / 2, v) + d.line(L + o - o / 4, v) + d.line(L + o / 4, v) + d.line(L + o / 2, v) + d.line(L + o / 2, S) + d.line(L, S) + d.line(L, C) + "z"] : [d.move(L, S) + d.line(L + o / 2, S) + d.line(L + o / 2, x) + d.line(L + o / 2, S) + d.line(L + o, S) + d.line(L + o, k) + d.line(L + o / 2, k) + d.line(L + o / 2, v) + d.line(L + o / 2, k) + d.line(L, k) + d.line(L, S - h / 2)], T += d.move(L, k), c.globals.isXNumeric || (s += r), { pathTo: M, pathFrom: T, x: s, y: S, barXPosition: L, color: this.isBoxPlot ? w : f ? [b] : [m] };
    } }, { key: "drawHorizontalBoxPaths", value: function(i) {
      var a = i.indexes;
      i.x;
      var s = i.y, r = i.yDivision, o = i.barHeight, n = i.zeroW, h = i.strokeWidth, c = this.w, d = new z(this.ctx), g = a.i, p = a.j, f = this.boxOptions.colors.lower;
      this.isBoxPlot && (f = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
      var b = this.invertedYRatio, m = a.realIndex, w = this.getOHLCValue(m, p), A = n, l = n, u = Math.min(w.o, w.c), x = Math.max(w.o, w.c), v = w.m;
      c.globals.isXNumeric && (s = (c.globals.seriesX[m][p] - c.globals.minX) / this.invertedXRatio - o / 2);
      var k = s + o * this.visibleI;
      this.series[g][p] === void 0 || this.series[g][p] === null ? (u = n, x = n) : (u = n + u / b, x = n + x / b, A = n + w.h / b, l = n + w.l / b, v = n + w.m / b);
      var S = d.move(n, k), C = d.move(u, k + o / 2);
      return c.globals.previousPaths.length > 0 && (C = this.getPreviousPath(m, p, !0)), S = [d.move(u, k) + d.line(u, k + o / 2) + d.line(A, k + o / 2) + d.line(A, k + o / 2 - o / 4) + d.line(A, k + o / 2 + o / 4) + d.line(A, k + o / 2) + d.line(u, k + o / 2) + d.line(u, k + o) + d.line(v, k + o) + d.line(v, k) + d.line(u + h / 2, k), d.move(v, k) + d.line(v, k + o) + d.line(x, k + o) + d.line(x, k + o / 2) + d.line(l, k + o / 2) + d.line(l, k + o - o / 4) + d.line(l, k + o / 4) + d.line(l, k + o / 2) + d.line(x, k + o / 2) + d.line(x, k) + d.line(v, k) + "z"], C += d.move(u, k), c.globals.isXNumeric || (s += r), { pathTo: S, pathFrom: C, x, y: s, barYPosition: k, color: f };
    } }, { key: "getOHLCValue", value: function(i, a) {
      var s = this.w;
      return { o: this.isBoxPlot ? s.globals.seriesCandleH[i][a] : s.globals.seriesCandleO[i][a], h: this.isBoxPlot ? s.globals.seriesCandleO[i][a] : s.globals.seriesCandleH[i][a], m: s.globals.seriesCandleM[i][a], l: this.isBoxPlot ? s.globals.seriesCandleC[i][a] : s.globals.seriesCandleL[i][a], c: this.isBoxPlot ? s.globals.seriesCandleL[i][a] : s.globals.seriesCandleC[i][a] };
    } }]), e;
  }(), ne = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "checkColorRange", value: function() {
      var t = this.w, e = !1, i = t.config.plotOptions[t.config.chart.type];
      return i.colorScale.ranges.length > 0 && i.colorScale.ranges.map(function(a, s) {
        a.from <= 0 && (e = !0);
      }), e;
    } }, { key: "getShadeColor", value: function(t, e, i, a) {
      var s = this.w, r = 1, o = s.config.plotOptions[t].shadeIntensity, n = this.determineColor(t, e, i);
      s.globals.hasNegs || a ? r = s.config.plotOptions[t].reverseNegativeShade ? n.percent < 0 ? n.percent / 100 * (1.25 * o) : (1 - n.percent / 100) * (1.25 * o) : n.percent <= 0 ? 1 - (1 + n.percent / 100) * o : (1 - n.percent / 100) * o : (r = 1 - n.percent / 100, t === "treemap" && (r = (1 - n.percent / 100) * (1.25 * o)));
      var h = n.color, c = new P();
      return s.config.plotOptions[t].enableShades && (h = this.w.config.theme.mode === "dark" ? P.hexToRgba(c.shadeColor(-1 * r, n.color), s.config.fill.opacity) : P.hexToRgba(c.shadeColor(r, n.color), s.config.fill.opacity)), { color: h, colorProps: n };
    } }, { key: "determineColor", value: function(t, e, i) {
      var a = this.w, s = a.globals.series[e][i], r = a.config.plotOptions[t], o = r.colorScale.inverse ? i : e;
      r.distributed && a.config.chart.type === "treemap" && (o = i);
      var n = a.globals.colors[o], h = null, c = Math.min.apply(Math, J(a.globals.series[e])), d = Math.max.apply(Math, J(a.globals.series[e]));
      r.distributed || t !== "heatmap" || (c = a.globals.minY, d = a.globals.maxY), r.colorScale.min !== void 0 && (c = r.colorScale.min < a.globals.minY ? r.colorScale.min : a.globals.minY, d = r.colorScale.max > a.globals.maxY ? r.colorScale.max : a.globals.maxY);
      var g = Math.abs(d) + Math.abs(c), p = 100 * s / (g === 0 ? g - 1e-6 : g);
      return r.colorScale.ranges.length > 0 && r.colorScale.ranges.map(function(f, b) {
        if (s >= f.from && s <= f.to) {
          n = f.color, h = f.foreColor ? f.foreColor : null, c = f.from, d = f.to;
          var m = Math.abs(d) + Math.abs(c);
          p = 100 * s / (m === 0 ? m - 1e-6 : m);
        }
      }), { color: n, foreColor: h, percent: p };
    } }, { key: "calculateDataLabels", value: function(t) {
      var e = t.text, i = t.x, a = t.y, s = t.i, r = t.j, o = t.colorProps, n = t.fontSize, h = this.w.config.dataLabels, c = new z(this.ctx), d = new kt(this.ctx), g = null;
      if (h.enabled) {
        g = c.group({ class: "apexcharts-data-labels" });
        var p = h.offsetX, f = h.offsetY, b = i + p, m = a + parseFloat(h.style.fontSize) / 3 + f;
        d.plotDataLabelsText({ x: b, y: m, text: e, i: s, j: r, color: o.foreColor, parent: g, fontSize: n, dataLabelsConfig: h });
      }
      return g;
    } }, { key: "addListeners", value: function(t) {
      var e = new z(this.ctx);
      t.node.addEventListener("mouseenter", e.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", e.pathMouseLeave.bind(this, t)), t.node.addEventListener("mousedown", e.pathMouseDown.bind(this, t));
    } }]), y;
  }(), He = function() {
    function y(t, e) {
      Y(this, y), this.ctx = t, this.w = t.w, this.xRatio = e.xRatio, this.yRatio = e.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new ne(t), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0;
    }
    return F(y, [{ key: "draw", value: function(t) {
      var e = this.w, i = new z(this.ctx), a = i.group({ class: "apexcharts-heatmap" });
      a.attr("clip-path", "url(#gridRectMask".concat(e.globals.cuid, ")"));
      var s = e.globals.gridWidth / e.globals.dataPoints, r = e.globals.gridHeight / e.globals.series.length, o = 0, n = !1;
      this.negRange = this.helpers.checkColorRange();
      var h = t.slice();
      e.config.yaxis[0].reversed && (n = !0, h.reverse());
      for (var c = n ? 0 : h.length - 1; n ? c < h.length : c >= 0; n ? c++ : c--) {
        var d = i.group({ class: "apexcharts-series apexcharts-heatmap-series", seriesName: P.escapeString(e.globals.seriesNames[c]), rel: c + 1, "data:realIndex": c });
        if (this.ctx.series.addCollapsedClassToSeries(d, c), e.config.chart.dropShadow.enabled) {
          var g = e.config.chart.dropShadow;
          new Z(this.ctx).dropShadow(d, g, c);
        }
        for (var p = 0, f = e.config.plotOptions.heatmap.shadeIntensity, b = 0; b < h[c].length; b++) {
          var m = this.helpers.getShadeColor(e.config.chart.type, c, b, this.negRange), w = m.color, A = m.colorProps;
          e.config.fill.type === "image" && (w = new at(this.ctx).fillPath({ seriesNumber: c, dataPointIndex: b, opacity: e.globals.hasNegs ? A.percent < 0 ? 1 - (1 + A.percent / 100) : f + A.percent / 100 : A.percent / 100, patternID: P.randomId(), width: e.config.fill.image.width ? e.config.fill.image.width : s, height: e.config.fill.image.height ? e.config.fill.image.height : r }));
          var l = this.rectRadius, u = i.drawRect(p, o, s, r, l);
          if (u.attr({ cx: p, cy: o }), u.node.classList.add("apexcharts-heatmap-rect"), d.add(u), u.attr({ fill: w, i: c, index: c, j: b, val: t[c][b], "stroke-width": this.strokeWidth, stroke: e.config.plotOptions.heatmap.useFillColorAsStroke ? w : e.globals.stroke.colors[0], color: w }), this.helpers.addListeners(u), e.config.chart.animations.enabled && !e.globals.dataChanged) {
            var x = 1;
            e.globals.resized || (x = e.config.chart.animations.speed), this.animateHeatMap(u, p, o, s, r, x);
          }
          if (e.globals.dataChanged) {
            var v = 1;
            if (this.dynamicAnim.enabled && e.globals.shouldAnimate) {
              v = this.dynamicAnim.speed;
              var k = e.globals.previousPaths[c] && e.globals.previousPaths[c][b] && e.globals.previousPaths[c][b].color;
              k || (k = "rgba(255, 255, 255, 0)"), this.animateHeatColor(u, P.isColorHex(k) ? k : P.rgb2hex(k), P.isColorHex(w) ? w : P.rgb2hex(w), v);
            }
          }
          var S = (0, e.config.dataLabels.formatter)(e.globals.series[c][b], { value: e.globals.series[c][b], seriesIndex: c, dataPointIndex: b, w: e }), C = this.helpers.calculateDataLabels({ text: S, x: p + s / 2, y: o + r / 2, i: c, j: b, colorProps: A, series: h });
          C !== null && d.add(C), p += s;
        }
        o += r, a.add(d);
      }
      var L = e.globals.yAxisScale[0].result.slice();
      return e.config.yaxis[0].reversed ? L.unshift("") : L.push(""), e.globals.yAxisScale[0].result = L, a;
    } }, { key: "animateHeatMap", value: function(t, e, i, a, s, r) {
      var o = new dt(this.ctx);
      o.animateRect(t, { x: e + a / 2, y: i + s / 2, width: 0, height: 0 }, { x: e, y: i, width: a, height: s }, r, function() {
        o.animationCompleted(t);
      });
    } }, { key: "animateHeatColor", value: function(t, e, i, a) {
      t.attr({ fill: e }).animate(a).attr({ fill: i });
    } }]), y;
  }(), le = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "drawYAxisTexts", value: function(t, e, i, a) {
      var s = this.w, r = s.config.yaxis[0], o = s.globals.yLabelFormatters[0];
      return new z(this.ctx).drawText({ x: t + r.labels.offsetX, y: e + r.labels.offsetY, text: o(a, i), textAnchor: "middle", fontSize: r.labels.style.fontSize, fontFamily: r.labels.style.fontFamily, foreColor: Array.isArray(r.labels.style.colors) ? r.labels.style.colors[i] : r.labels.style.colors });
    } }]), y;
  }(), he = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
      var e = this.w;
      this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = e.globals.stroke.colors !== void 0 ? e.globals.stroke.colors : e.globals.colors, this.defaultSize = Math.min(e.globals.gridWidth, e.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = e.globals.gridWidth / 2, e.config.chart.type === "radialBar" ? this.fullAngle = 360 : this.fullAngle = Math.abs(e.config.plotOptions.pie.endAngle - e.config.plotOptions.pie.startAngle), this.initialAngle = e.config.plotOptions.pie.startAngle % this.fullAngle, e.globals.radialSize = this.defaultSize / 2.05 - e.config.stroke.width - (e.config.chart.sparkline.enabled ? 0 : e.config.chart.dropShadow.blur), this.donutSize = e.globals.radialSize * parseInt(e.config.plotOptions.pie.donut.size, 10) / 100, this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [];
    }
    return F(y, [{ key: "draw", value: function(t) {
      var e = this, i = this.w, a = new z(this.ctx);
      if (this.ret = a.group({ class: "apexcharts-pie" }), i.globals.noData)
        return this.ret;
      for (var s = 0, r = 0; r < t.length; r++)
        s += P.negToZero(t[r]);
      var o = [], n = a.group();
      s === 0 && (s = 1e-5), t.forEach(function(k) {
        e.maxY = Math.max(e.maxY, k);
      }), i.config.yaxis[0].max && (this.maxY = i.config.yaxis[0].max), i.config.grid.position === "back" && this.chartType === "polarArea" && this.drawPolarElements(this.ret);
      for (var h = 0; h < t.length; h++) {
        var c = this.fullAngle * P.negToZero(t[h]) / s;
        o.push(c), this.chartType === "polarArea" ? (o[h] = this.fullAngle / t.length, this.sliceSizes.push(i.globals.radialSize * t[h] / this.maxY)) : this.sliceSizes.push(i.globals.radialSize);
      }
      if (i.globals.dataChanged) {
        for (var d, g = 0, p = 0; p < i.globals.previousPaths.length; p++)
          g += P.negToZero(i.globals.previousPaths[p]);
        for (var f = 0; f < i.globals.previousPaths.length; f++)
          d = this.fullAngle * P.negToZero(i.globals.previousPaths[f]) / g, this.prevSectorAngleArr.push(d);
      }
      this.donutSize < 0 && (this.donutSize = 0);
      var b = i.config.plotOptions.pie.customScale, m = i.globals.gridWidth / 2, w = i.globals.gridHeight / 2, A = m - i.globals.gridWidth / 2 * b, l = w - i.globals.gridHeight / 2 * b;
      if (this.chartType === "donut") {
        var u = a.drawCircle(this.donutSize);
        u.attr({ cx: this.centerX, cy: this.centerY, fill: i.config.plotOptions.pie.donut.background ? i.config.plotOptions.pie.donut.background : "transparent" }), n.add(u);
      }
      var x = this.drawArcs(o, t);
      if (this.sliceLabels.forEach(function(k) {
        x.add(k);
      }), n.attr({ transform: "translate(".concat(A, ", ").concat(l, ") scale(").concat(b, ")") }), n.add(x), this.ret.add(n), this.donutDataLabels.show) {
        var v = this.renderInnerDataLabels(this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show, translateX: A, translateY: l });
        this.ret.add(v);
      }
      return i.config.grid.position === "front" && this.chartType === "polarArea" && this.drawPolarElements(this.ret), this.ret;
    } }, { key: "drawArcs", value: function(t, e) {
      var i = this.w, a = new Z(this.ctx), s = new z(this.ctx), r = new at(this.ctx), o = s.group({ class: "apexcharts-slices" }), n = this.initialAngle, h = this.initialAngle, c = this.initialAngle, d = this.initialAngle;
      this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0;
      for (var g = 0; g < t.length; g++) {
        var p = s.group({ class: "apexcharts-series apexcharts-pie-series", seriesName: P.escapeString(i.globals.seriesNames[g]), rel: g + 1, "data:realIndex": g });
        o.add(p), h = d, c = (n = c) + t[g], d = h + this.prevSectorAngleArr[g];
        var f = c < n ? this.fullAngle + c - n : c - n, b = r.fillPath({ seriesNumber: g, size: this.sliceSizes[g], value: e[g] }), m = this.getChangedPath(h, d), w = s.drawPath({ d: m, stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[g] : this.lineColorArr, strokeWidth: 0, fill: b, fillOpacity: i.config.fill.opacity, classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(g) });
        if (w.attr({ index: 0, j: g }), a.setSelectionFilter(w, 0, g), i.config.chart.dropShadow.enabled) {
          var A = i.config.chart.dropShadow;
          a.dropShadow(w, A, g);
        }
        this.addListeners(w, this.donutDataLabels), z.setAttrs(w.node, { "data:angle": f, "data:startAngle": n, "data:strokeWidth": this.strokeWidth, "data:value": e[g] });
        var l = { x: 0, y: 0 };
        this.chartType === "pie" || this.chartType === "polarArea" ? l = P.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize / 1.25 + i.config.plotOptions.pie.dataLabels.offset, (n + f / 2) % this.fullAngle) : this.chartType === "donut" && (l = P.polarToCartesian(this.centerX, this.centerY, (i.globals.radialSize + this.donutSize) / 2 + i.config.plotOptions.pie.dataLabels.offset, (n + f / 2) % this.fullAngle)), p.add(w);
        var u = 0;
        if (!this.initialAnim || i.globals.resized || i.globals.dataChanged ? this.animBeginArr.push(0) : ((u = f / this.fullAngle * i.config.chart.animations.speed) === 0 && (u = 1), this.animDur = u + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i.globals.dataChanged ? this.animatePaths(w, { size: this.sliceSizes[g], endAngle: c, startAngle: n, prevStartAngle: h, prevEndAngle: d, animateStartingPos: !0, i: g, animBeginArr: this.animBeginArr, shouldSetPrevPaths: !0, dur: i.config.chart.animations.dynamicAnimation.speed }) : this.animatePaths(w, { size: this.sliceSizes[g], endAngle: c, startAngle: n, i: g, totalItems: t.length - 1, animBeginArr: this.animBeginArr, dur: u }), i.config.plotOptions.pie.expandOnClick && this.chartType !== "polarArea" && w.click(this.pieClicked.bind(this, g)), i.globals.selectedDataPoints[0] !== void 0 && i.globals.selectedDataPoints[0].indexOf(g) > -1 && this.pieClicked(g), i.config.dataLabels.enabled) {
          var x = l.x, v = l.y, k = 100 * f / this.fullAngle + "%";
          if (f !== 0 && i.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t[g]) {
            var S = i.config.dataLabels.formatter;
            S !== void 0 && (k = S(i.globals.seriesPercent[g][0], { seriesIndex: g, w: i }));
            var C = i.globals.dataLabels.style.colors[g], L = s.group({ class: "apexcharts-datalabels" }), M = s.drawText({ x, y: v, text: k, textAnchor: "middle", fontSize: i.config.dataLabels.style.fontSize, fontFamily: i.config.dataLabels.style.fontFamily, fontWeight: i.config.dataLabels.style.fontWeight, foreColor: C });
            if (L.add(M), i.config.dataLabels.dropShadow.enabled) {
              var T = i.config.dataLabels.dropShadow;
              a.dropShadow(M, T);
            }
            M.node.classList.add("apexcharts-pie-label"), i.config.chart.animations.animate && i.globals.resized === !1 && (M.node.classList.add("apexcharts-pie-label-delay"), M.node.style.animationDelay = i.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(L);
          }
        }
      }
      return o;
    } }, { key: "addListeners", value: function(t, e) {
      var i = new z(this.ctx);
      t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, t)), t.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this, t)), this.donutDataLabels.total.showAlways || (t.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t.node, e)));
    } }, { key: "animatePaths", value: function(t, e) {
      var i = this.w, a = e.endAngle < e.startAngle ? this.fullAngle + e.endAngle - e.startAngle : e.endAngle - e.startAngle, s = a, r = e.startAngle, o = e.startAngle;
      e.prevStartAngle !== void 0 && e.prevEndAngle !== void 0 && (r = e.prevEndAngle, s = e.prevEndAngle < e.prevStartAngle ? this.fullAngle + e.prevEndAngle - e.prevStartAngle : e.prevEndAngle - e.prevStartAngle), e.i === i.config.series.length - 1 && (a + o > this.fullAngle ? e.endAngle = e.endAngle - (a + o) : a + o < this.fullAngle && (e.endAngle = e.endAngle + (this.fullAngle - (a + o)))), a === this.fullAngle && (a = this.fullAngle - 0.01), this.animateArc(t, r, o, a, s, e);
    } }, { key: "animateArc", value: function(t, e, i, a, s, r) {
      var o, n = this, h = this.w, c = new dt(this.ctx), d = r.size;
      (isNaN(e) || isNaN(s)) && (e = i, s = a, r.dur = 0);
      var g = a, p = i, f = e < i ? this.fullAngle + e - i : e - i;
      h.globals.dataChanged && r.shouldSetPrevPaths && r.prevEndAngle && (o = n.getPiePath({ me: n, startAngle: r.prevStartAngle, angle: r.prevEndAngle < r.prevStartAngle ? this.fullAngle + r.prevEndAngle - r.prevStartAngle : r.prevEndAngle - r.prevStartAngle, size: d }), t.attr({ d: o })), r.dur !== 0 ? t.animate(r.dur, h.globals.easing, r.animBeginArr[r.i]).afterAll(function() {
        n.chartType !== "pie" && n.chartType !== "donut" && n.chartType !== "polarArea" || this.animate(h.config.chart.animations.dynamicAnimation.speed).attr({ "stroke-width": n.strokeWidth }), r.i === h.config.series.length - 1 && c.animationCompleted(t);
      }).during(function(b) {
        g = f + (a - f) * b, r.animateStartingPos && (g = s + (a - s) * b, p = e - s + (i - (e - s)) * b), o = n.getPiePath({ me: n, startAngle: p, angle: g, size: d }), t.node.setAttribute("data:pathOrig", o), t.attr({ d: o });
      }) : (o = n.getPiePath({ me: n, startAngle: p, angle: a, size: d }), r.isTrack || (h.globals.animationEnded = !0), t.node.setAttribute("data:pathOrig", o), t.attr({ d: o, "stroke-width": n.strokeWidth }));
    } }, { key: "pieClicked", value: function(t) {
      var e, i = this.w, a = this, s = a.sliceSizes[t] + (i.config.plotOptions.pie.expandOnClick ? 4 : 0), r = i.globals.dom.Paper.select(".apexcharts-".concat(a.chartType.toLowerCase(), "-slice-").concat(t)).members[0];
      if (r.attr("data:pieClicked") !== "true") {
        var o = i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
        Array.prototype.forEach.call(o, function(d) {
          d.setAttribute("data:pieClicked", "false");
          var g = d.getAttribute("data:pathOrig");
          g && d.setAttribute("d", g);
        }), r.attr("data:pieClicked", "true");
        var n = parseInt(r.attr("data:startAngle"), 10), h = parseInt(r.attr("data:angle"), 10);
        e = a.getPiePath({ me: a, startAngle: n, angle: h, size: s }), h !== 360 && r.plot(e);
      } else {
        r.attr({ "data:pieClicked": "false" }), this.revertDataLabelsInner(r.node, this.donutDataLabels);
        var c = r.attr("data:pathOrig");
        r.attr({ d: c });
      }
    } }, { key: "getChangedPath", value: function(t, e) {
      var i = "";
      return this.dynamicAnim && this.w.globals.dataChanged && (i = this.getPiePath({ me: this, startAngle: t, angle: e - t, size: this.size })), i;
    } }, { key: "getPiePath", value: function(t) {
      var e, i = t.me, a = t.startAngle, s = t.angle, r = t.size, o = new z(this.ctx), n = a, h = Math.PI * (n - 90) / 180, c = s + a;
      Math.ceil(c) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (c = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - 0.01), Math.ceil(c) > this.fullAngle && (c -= this.fullAngle);
      var d = Math.PI * (c - 90) / 180, g = i.centerX + r * Math.cos(h), p = i.centerY + r * Math.sin(h), f = i.centerX + r * Math.cos(d), b = i.centerY + r * Math.sin(d), m = P.polarToCartesian(i.centerX, i.centerY, i.donutSize, c), w = P.polarToCartesian(i.centerX, i.centerY, i.donutSize, n), A = s > 180 ? 1 : 0, l = ["M", g, p, "A", r, r, 0, A, 1, f, b];
      return e = i.chartType === "donut" ? [].concat(l, ["L", m.x, m.y, "A", i.donutSize, i.donutSize, 0, A, 0, w.x, w.y, "L", g, p, "z"]).join(" ") : i.chartType === "pie" || i.chartType === "polarArea" ? [].concat(l, ["L", i.centerX, i.centerY, "L", g, p]).join(" ") : [].concat(l).join(" "), o.roundPathCorners(e, 2 * this.strokeWidth);
    } }, { key: "drawPolarElements", value: function(t) {
      var e = this.w, i = new At(this.ctx), a = new z(this.ctx), s = new le(this.ctx), r = a.group(), o = a.group(), n = i.niceScale(0, Math.ceil(this.maxY), e.config.yaxis[0].tickAmount, 0, !0), h = n.result.reverse(), c = n.result.length;
      this.maxY = n.niceMax;
      for (var d = e.globals.radialSize, g = d / (c - 1), p = 0; p < c - 1; p++) {
        var f = a.drawCircle(d);
        if (f.attr({ cx: this.centerX, cy: this.centerY, fill: "none", "stroke-width": e.config.plotOptions.polarArea.rings.strokeWidth, stroke: e.config.plotOptions.polarArea.rings.strokeColor }), e.config.yaxis[0].show) {
          var b = s.drawYAxisTexts(this.centerX, this.centerY - d + parseInt(e.config.yaxis[0].labels.style.fontSize, 10) / 2, p, h[p]);
          o.add(b);
        }
        r.add(f), d -= g;
      }
      this.drawSpokes(t), t.add(r), t.add(o);
    } }, { key: "renderInnerDataLabels", value: function(t, e) {
      var i = this.w, a = new z(this.ctx), s = a.group({ class: "apexcharts-datalabels-group", transform: "translate(".concat(e.translateX ? e.translateX : 0, ", ").concat(e.translateY ? e.translateY : 0, ") scale(").concat(i.config.plotOptions.pie.customScale, ")") }), r = t.total.show;
      s.node.style.opacity = e.opacity;
      var o, n, h = e.centerX, c = e.centerY;
      o = t.name.color === void 0 ? i.globals.colors[0] : t.name.color;
      var d = t.name.fontSize, g = t.name.fontFamily, p = t.name.fontWeight;
      n = t.value.color === void 0 ? i.config.chart.foreColor : t.value.color;
      var f = t.value.formatter, b = "", m = "";
      if (r ? (o = t.total.color, d = t.total.fontSize, g = t.total.fontFamily, p = t.total.fontWeight, m = t.total.label, b = t.total.formatter(i)) : i.globals.series.length === 1 && (b = f(i.globals.series[0], i), m = i.globals.seriesNames[0]), m && (m = t.name.formatter(m, t.total.show, i)), t.name.show) {
        var w = a.drawText({ x: h, y: c + parseFloat(t.name.offsetY), text: m, textAnchor: "middle", foreColor: o, fontSize: d, fontWeight: p, fontFamily: g });
        w.node.classList.add("apexcharts-datalabel-label"), s.add(w);
      }
      if (t.value.show) {
        var A = t.name.show ? parseFloat(t.value.offsetY) + 16 : t.value.offsetY, l = a.drawText({ x: h, y: c + A, text: b, textAnchor: "middle", foreColor: n, fontWeight: t.value.fontWeight, fontSize: t.value.fontSize, fontFamily: t.value.fontFamily });
        l.node.classList.add("apexcharts-datalabel-value"), s.add(l);
      }
      return s;
    } }, { key: "printInnerLabels", value: function(t, e, i, a) {
      var s, r = this.w;
      a ? s = t.name.color === void 0 ? r.globals.colors[parseInt(a.parentNode.getAttribute("rel"), 10) - 1] : t.name.color : r.globals.series.length > 1 && t.total.show && (s = t.total.color);
      var o = r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"), n = r.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
      i = (0, t.value.formatter)(i, r), a || typeof t.total.formatter != "function" || (i = t.total.formatter(r));
      var h = e === t.total.label;
      e = t.name.formatter(e, h, r), o !== null && (o.textContent = e), n !== null && (n.textContent = i), o !== null && (o.style.fill = s);
    } }, { key: "printDataLabelsInner", value: function(t, e) {
      var i = this.w, a = t.getAttribute("data:value"), s = i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"), 10) - 1];
      i.globals.series.length > 1 && this.printInnerLabels(e, s, a, t);
      var r = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
      r !== null && (r.style.opacity = 1);
    } }, { key: "drawSpokes", value: function(t) {
      var e = this, i = this.w, a = new z(this.ctx), s = i.config.plotOptions.polarArea.spokes;
      if (s.strokeWidth !== 0) {
        for (var r = [], o = 360 / i.globals.series.length, n = 0; n < i.globals.series.length; n++)
          r.push(P.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize, i.config.plotOptions.pie.startAngle + o * n));
        r.forEach(function(h, c) {
          var d = a.drawLine(h.x, h.y, e.centerX, e.centerY, Array.isArray(s.connectorColors) ? s.connectorColors[c] : s.connectorColors);
          t.add(d);
        });
      }
    } }, { key: "revertDataLabelsInner", value: function(t, e, i) {
      var a = this, s = this.w, r = s.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"), o = !1, n = s.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"), h = function(g) {
        var p = g.makeSliceOut, f = g.printLabel;
        Array.prototype.forEach.call(n, function(b) {
          b.getAttribute("data:pieClicked") === "true" && (p && (o = !0), f && a.printDataLabelsInner(b, e));
        });
      };
      if (h({ makeSliceOut: !0, printLabel: !1 }), e.total.show && s.globals.series.length > 1)
        o && !e.total.showAlways ? h({ makeSliceOut: !1, printLabel: !0 }) : this.printInnerLabels(e, e.total.label, e.total.formatter(s));
      else if (h({ makeSliceOut: !1, printLabel: !0 }), !o)
        if (s.globals.selectedDataPoints.length && s.globals.series.length > 1)
          if (s.globals.selectedDataPoints[0].length > 0) {
            var c = s.globals.selectedDataPoints[0], d = s.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(c));
            this.printDataLabelsInner(d, e);
          } else
            r && s.globals.selectedDataPoints.length && s.globals.selectedDataPoints[0].length === 0 && (r.style.opacity = 0);
        else
          r && s.globals.series.length > 1 && (r.style.opacity = 0);
    } }]), y;
  }(), Oe = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
      var e = this.w;
      this.graphics = new z(this.ctx), this.lineColorArr = e.globals.stroke.colors !== void 0 ? e.globals.stroke.colors : e.globals.colors, this.defaultSize = e.globals.svgHeight < e.globals.svgWidth ? e.globals.gridHeight + 1.5 * e.globals.goldenPadding : e.globals.gridWidth, this.isLog = e.config.yaxis[0].logarithmic, this.coreUtils = new q(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(e.globals.maxY, 0) : e.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.w.globals.minY, 0) : e.globals.minY, this.polygons = e.config.plotOptions.radar.polygons, this.strokeWidth = e.config.stroke.show ? e.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - e.config.chart.dropShadow.blur, e.config.xaxis.labels.show && (this.size = this.size - e.globals.xAxisLabelsWidth / 1.75), e.config.plotOptions.radar.size !== void 0 && (this.size = e.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = [];
    }
    return F(y, [{ key: "draw", value: function(t) {
      var e = this, i = this.w, a = new at(this.ctx), s = [], r = new kt(this.ctx);
      t.length && (this.dataPointsLen = t[i.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
      var o = i.globals.gridWidth / 2, n = i.globals.gridHeight / 2, h = o + i.config.plotOptions.radar.offsetX, c = n + i.config.plotOptions.radar.offsetY, d = this.graphics.group({ class: "apexcharts-radar-series apexcharts-plot-series", transform: "translate(".concat(h || 0, ", ").concat(c || 0, ")") }), g = [], p = null, f = null;
      if (this.yaxisLabels = this.graphics.group({ class: "apexcharts-yaxis" }), t.forEach(function(m, w) {
        var A = m.length === i.globals.dataPoints, l = e.graphics.group().attr({ class: "apexcharts-series", "data:longestSeries": A, seriesName: P.escapeString(i.globals.seriesNames[w]), rel: w + 1, "data:realIndex": w });
        e.dataRadiusOfPercent[w] = [], e.dataRadius[w] = [], e.angleArr[w] = [], m.forEach(function(I, E) {
          var R = Math.abs(e.maxValue - e.minValue);
          I += Math.abs(e.minValue), e.isLog && (I = e.coreUtils.getLogVal(I, 0)), e.dataRadiusOfPercent[w][E] = I / R, e.dataRadius[w][E] = e.dataRadiusOfPercent[w][E] * e.size, e.angleArr[w][E] = E * e.disAngle;
        }), g = e.getDataPointsPos(e.dataRadius[w], e.angleArr[w]);
        var u = e.createPaths(g, { x: 0, y: 0 });
        p = e.graphics.group({ class: "apexcharts-series-markers-wrap apexcharts-element-hidden" }), f = e.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": w }), i.globals.delayedElements.push({ el: p.node, index: w });
        var x = { i: w, realIndex: w, animationDelay: w, initialSpeed: i.config.chart.animations.speed, dataChangeSpeed: i.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-radar", shouldClipToGrid: !1, bindEventsOnPaths: !1, stroke: i.globals.stroke.colors[w], strokeLineCap: i.config.stroke.lineCap }, v = null;
        i.globals.previousPaths.length > 0 && (v = e.getPreviousPath(w));
        for (var k = 0; k < u.linePathsTo.length; k++) {
          var S = e.graphics.renderPaths(X(X({}, x), {}, { pathFrom: v === null ? u.linePathsFrom[k] : v, pathTo: u.linePathsTo[k], strokeWidth: Array.isArray(e.strokeWidth) ? e.strokeWidth[w] : e.strokeWidth, fill: "none", drawShadow: !1 }));
          l.add(S);
          var C = a.fillPath({ seriesNumber: w }), L = e.graphics.renderPaths(X(X({}, x), {}, { pathFrom: v === null ? u.areaPathsFrom[k] : v, pathTo: u.areaPathsTo[k], strokeWidth: 0, fill: C, drawShadow: !1 }));
          if (i.config.chart.dropShadow.enabled) {
            var M = new Z(e.ctx), T = i.config.chart.dropShadow;
            M.dropShadow(L, Object.assign({}, T, { noUserSpaceOnUse: !0 }), w);
          }
          l.add(L);
        }
        m.forEach(function(I, E) {
          var R = new It(e.ctx).getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: w, dataPointIndex: E }), H = e.graphics.drawMarker(g[E].x, g[E].y, R);
          H.attr("rel", E), H.attr("j", E), H.attr("index", w), H.node.setAttribute("default-marker-size", R.pSize);
          var D = e.graphics.group({ class: "apexcharts-series-markers" });
          D && D.add(H), p.add(D), l.add(p);
          var W = i.config.dataLabels;
          if (W.enabled) {
            var N = W.formatter(i.globals.series[w][E], { seriesIndex: w, dataPointIndex: E, w: i });
            r.plotDataLabelsText({ x: g[E].x, y: g[E].y, text: N, textAnchor: "middle", i: w, j: w, parent: f, offsetCorrection: !1, dataLabelsConfig: X({}, W) });
          }
          l.add(f);
        }), s.push(l);
      }), this.drawPolygons({ parent: d }), i.config.xaxis.labels.show) {
        var b = this.drawXAxisTexts();
        d.add(b);
      }
      return s.forEach(function(m) {
        d.add(m);
      }), d.add(this.yaxisLabels), d;
    } }, { key: "drawPolygons", value: function(t) {
      for (var e = this, i = this.w, a = t.parent, s = new le(this.ctx), r = i.globals.yAxisScale[0].result.reverse(), o = r.length, n = [], h = this.size / (o - 1), c = 0; c < o; c++)
        n[c] = h * c;
      n.reverse();
      var d = [], g = [];
      n.forEach(function(p, f) {
        var b = P.getPolygonPos(p, e.dataPointsLen), m = "";
        b.forEach(function(w, A) {
          if (f === 0) {
            var l = e.graphics.drawLine(w.x, w.y, 0, 0, Array.isArray(e.polygons.connectorColors) ? e.polygons.connectorColors[A] : e.polygons.connectorColors);
            g.push(l);
          }
          A === 0 && e.yaxisLabelsTextsPos.push({ x: w.x, y: w.y }), m += w.x + "," + w.y + " ";
        }), d.push(m);
      }), d.forEach(function(p, f) {
        var b = e.polygons.strokeColors, m = e.polygons.strokeWidth, w = e.graphics.drawPolygon(p, Array.isArray(b) ? b[f] : b, Array.isArray(m) ? m[f] : m, i.globals.radarPolygons.fill.colors[f]);
        a.add(w);
      }), g.forEach(function(p) {
        a.add(p);
      }), i.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach(function(p, f) {
        var b = s.drawYAxisTexts(p.x, p.y, f, r[f]);
        e.yaxisLabels.add(b);
      });
    } }, { key: "drawXAxisTexts", value: function() {
      var t = this, e = this.w, i = e.config.xaxis.labels, a = this.graphics.group({ class: "apexcharts-xaxis" }), s = P.getPolygonPos(this.size, this.dataPointsLen);
      return e.globals.labels.forEach(function(r, o) {
        var n = e.config.xaxis.labels.formatter, h = new kt(t.ctx);
        if (s[o]) {
          var c = t.getTextPos(s[o], t.size), d = n(r, { seriesIndex: -1, dataPointIndex: o, w: e });
          h.plotDataLabelsText({ x: c.newX, y: c.newY, text: d, textAnchor: c.textAnchor, i: o, j: o, parent: a, color: Array.isArray(i.style.colors) && i.style.colors[o] ? i.style.colors[o] : "#a8a8a8", dataLabelsConfig: X({ textAnchor: c.textAnchor, dropShadow: { enabled: !1 } }, i), offsetCorrection: !1 });
        }
      }), a;
    } }, { key: "createPaths", value: function(t, e) {
      var i = this, a = [], s = [], r = [], o = [];
      if (t.length) {
        s = [this.graphics.move(e.x, e.y)], o = [this.graphics.move(e.x, e.y)];
        var n = this.graphics.move(t[0].x, t[0].y), h = this.graphics.move(t[0].x, t[0].y);
        t.forEach(function(c, d) {
          n += i.graphics.line(c.x, c.y), h += i.graphics.line(c.x, c.y), d === t.length - 1 && (n += "Z", h += "Z");
        }), a.push(n), r.push(h);
      }
      return { linePathsFrom: s, linePathsTo: a, areaPathsFrom: o, areaPathsTo: r };
    } }, { key: "getTextPos", value: function(t, e) {
      var i = "middle", a = t.x, s = t.y;
      return Math.abs(t.x) >= 10 ? t.x > 0 ? (i = "start", a += 10) : t.x < 0 && (i = "end", a -= 10) : i = "middle", Math.abs(t.y) >= e - 10 && (t.y < 0 ? s -= 10 : t.y > 0 && (s += 10)), { textAnchor: i, newX: a, newY: s };
    } }, { key: "getPreviousPath", value: function(t) {
      for (var e = this.w, i = null, a = 0; a < e.globals.previousPaths.length; a++) {
        var s = e.globals.previousPaths[a];
        s.paths.length > 0 && parseInt(s.realIndex, 10) === parseInt(t, 10) && e.globals.previousPaths[a].paths[0] !== void 0 && (i = e.globals.previousPaths[a].paths[0].d);
      }
      return i;
    } }, { key: "getDataPointsPos", value: function(t, e) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.dataPointsLen;
      t = t || [], e = e || [];
      for (var a = [], s = 0; s < i; s++) {
        var r = {};
        r.x = t[s] * Math.sin(e[s]), r.y = -t[s] * Math.cos(e[s]), a.push(r);
      }
      return a;
    } }]), y;
  }(), De = function(y) {
    ut(e, he);
    var t = pt(e);
    function e(i) {
      var a;
      Y(this, e), (a = t.call(this, i)).ctx = i, a.w = i.w, a.animBeginArr = [0], a.animDur = 0;
      var s = a.w;
      return a.startAngle = s.config.plotOptions.radialBar.startAngle, a.endAngle = s.config.plotOptions.radialBar.endAngle, a.totalAngle = Math.abs(s.config.plotOptions.radialBar.endAngle - s.config.plotOptions.radialBar.startAngle), a.trackStartAngle = s.config.plotOptions.radialBar.track.startAngle, a.trackEndAngle = s.config.plotOptions.radialBar.track.endAngle, a.barLabels = a.w.config.plotOptions.radialBar.barLabels, a.donutDataLabels = a.w.config.plotOptions.radialBar.dataLabels, a.radialDataLabels = a.donutDataLabels, a.trackStartAngle || (a.trackStartAngle = a.startAngle), a.trackEndAngle || (a.trackEndAngle = a.endAngle), a.endAngle === 360 && (a.endAngle = 359.99), a.margin = parseInt(s.config.plotOptions.radialBar.track.margin, 10), a.onBarLabelClick = a.onBarLabelClick.bind(Et(a)), a;
    }
    return F(e, [{ key: "draw", value: function(i) {
      var a = this.w, s = new z(this.ctx), r = s.group({ class: "apexcharts-radialbar" });
      if (a.globals.noData)
        return r;
      var o = s.group(), n = this.defaultSize / 2, h = a.globals.gridWidth / 2, c = this.defaultSize / 2.05;
      a.config.chart.sparkline.enabled || (c = c - a.config.stroke.width - a.config.chart.dropShadow.blur);
      var d = a.globals.fill.colors;
      if (a.config.plotOptions.radialBar.track.show) {
        var g = this.drawTracks({ size: c, centerX: h, centerY: n, colorArr: d, series: i });
        o.add(g);
      }
      var p = this.drawArcs({ size: c, centerX: h, centerY: n, colorArr: d, series: i }), f = 360;
      a.config.plotOptions.radialBar.startAngle < 0 && (f = this.totalAngle);
      var b = (360 - f) / 360;
      if (a.globals.radialSize = c - c * b, this.radialDataLabels.value.show) {
        var m = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
        a.globals.radialSize += m * b;
      }
      return o.add(p.g), a.config.plotOptions.radialBar.hollow.position === "front" && (p.g.add(p.elHollow), p.dataLabels && p.g.add(p.dataLabels)), r.add(o), r;
    } }, { key: "drawTracks", value: function(i) {
      var a = this.w, s = new z(this.ctx), r = s.group({ class: "apexcharts-tracks" }), o = new Z(this.ctx), n = new at(this.ctx), h = this.getStrokeWidth(i);
      i.size = i.size - h / 2;
      for (var c = 0; c < i.series.length; c++) {
        var d = s.group({ class: "apexcharts-radialbar-track apexcharts-track" });
        r.add(d), d.attr({ rel: c + 1 }), i.size = i.size - h - this.margin;
        var g = a.config.plotOptions.radialBar.track, p = n.fillPath({ seriesNumber: 0, size: i.size, fillColors: Array.isArray(g.background) ? g.background[c] : g.background, solid: !0 }), f = this.trackStartAngle, b = this.trackEndAngle;
        Math.abs(b) + Math.abs(f) >= 360 && (b = 360 - Math.abs(this.startAngle) - 0.1);
        var m = s.drawPath({ d: "", stroke: p, strokeWidth: h * parseInt(g.strokeWidth, 10) / 100, fill: "none", strokeOpacity: g.opacity, classes: "apexcharts-radialbar-area" });
        if (g.dropShadow.enabled) {
          var w = g.dropShadow;
          o.dropShadow(m, w);
        }
        d.add(m), m.attr("id", "apexcharts-radialbarTrack-" + c), this.animatePaths(m, { centerX: i.centerX, centerY: i.centerY, endAngle: b, startAngle: f, size: i.size, i: c, totalItems: 2, animBeginArr: 0, dur: 0, isTrack: !0, easing: a.globals.easing });
      }
      return r;
    } }, { key: "drawArcs", value: function(i) {
      var a = this.w, s = new z(this.ctx), r = new at(this.ctx), o = new Z(this.ctx), n = s.group(), h = this.getStrokeWidth(i);
      i.size = i.size - h / 2;
      var c = a.config.plotOptions.radialBar.hollow.background, d = i.size - h * i.series.length - this.margin * i.series.length - h * parseInt(a.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, g = d - a.config.plotOptions.radialBar.hollow.margin;
      a.config.plotOptions.radialBar.hollow.image !== void 0 && (c = this.drawHollowImage(i, n, d, c));
      var p = this.drawHollow({ size: g, centerX: i.centerX, centerY: i.centerY, fill: c || "transparent" });
      if (a.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
        var f = a.config.plotOptions.radialBar.hollow.dropShadow;
        o.dropShadow(p, f);
      }
      var b = 1;
      !this.radialDataLabels.total.show && a.globals.series.length > 1 && (b = 0);
      var m = null;
      this.radialDataLabels.show && (m = this.renderInnerDataLabels(this.radialDataLabels, { hollowSize: d, centerX: i.centerX, centerY: i.centerY, opacity: b })), a.config.plotOptions.radialBar.hollow.position === "back" && (n.add(p), m && n.add(m));
      var w = !1;
      a.config.plotOptions.radialBar.inverseOrder && (w = !0);
      for (var A = w ? i.series.length - 1 : 0; w ? A >= 0 : A < i.series.length; w ? A-- : A++) {
        var l = s.group({ class: "apexcharts-series apexcharts-radial-series", seriesName: P.escapeString(a.globals.seriesNames[A]) });
        n.add(l), l.attr({ rel: A + 1, "data:realIndex": A }), this.ctx.series.addCollapsedClassToSeries(l, A), i.size = i.size - h - this.margin;
        var u = r.fillPath({ seriesNumber: A, size: i.size, value: i.series[A] }), x = this.startAngle, v = void 0, k = P.negToZero(i.series[A] > 100 ? 100 : i.series[A]) / 100, S = Math.round(this.totalAngle * k) + this.startAngle, C = void 0;
        a.globals.dataChanged && (v = this.startAngle, C = Math.round(this.totalAngle * P.negToZero(a.globals.previousPaths[A]) / 100) + v), Math.abs(S) + Math.abs(x) >= 360 && (S -= 0.01), Math.abs(C) + Math.abs(v) >= 360 && (C -= 0.01);
        var L = S - x, M = Array.isArray(a.config.stroke.dashArray) ? a.config.stroke.dashArray[A] : a.config.stroke.dashArray, T = s.drawPath({ d: "", stroke: u, strokeWidth: h, fill: "none", fillOpacity: a.config.fill.opacity, classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + A, strokeDashArray: M });
        if (z.setAttrs(T.node, { "data:angle": L, "data:value": i.series[A] }), a.config.chart.dropShadow.enabled) {
          var I = a.config.chart.dropShadow;
          o.dropShadow(T, I, A);
        }
        if (o.setSelectionFilter(T, 0, A), this.addListeners(T, this.radialDataLabels), l.add(T), T.attr({ index: 0, j: A }), this.barLabels.enabled) {
          var E = P.polarToCartesian(i.centerX, i.centerY, i.size, x), R = this.barLabels.formatter(a.globals.seriesNames[A], { seriesIndex: A, w: a }), H = ["apexcharts-radialbar-label"];
          this.barLabels.onClick || H.push("apexcharts-no-click");
          var D = this.barLabels.useSeriesColors ? a.globals.colors[A] : a.config.chart.foreColor;
          D || (D = a.config.chart.foreColor);
          var W = E.x - this.barLabels.margin, N = E.y, V = s.drawText({ x: W, y: N, text: R, textAnchor: "end", dominantBaseline: "middle", fontFamily: this.barLabels.fontFamily, fontWeight: this.barLabels.fontWeight, fontSize: this.barLabels.fontSize, foreColor: D, cssClass: H.join(" ") });
          V.on("click", this.onBarLabelClick), V.attr({ rel: A + 1 }), x !== 0 && V.attr({ "transform-origin": "".concat(W, " ").concat(N), transform: "rotate(".concat(x, " 0 0)") }), l.add(V);
        }
        var _ = 0;
        !this.initialAnim || a.globals.resized || a.globals.dataChanged || (_ = a.config.chart.animations.speed), a.globals.dataChanged && (_ = a.config.chart.animations.dynamicAnimation.speed), this.animDur = _ / (1.2 * i.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(T, { centerX: i.centerX, centerY: i.centerY, endAngle: S, startAngle: x, prevEndAngle: C, prevStartAngle: v, size: i.size, i: A, totalItems: 2, animBeginArr: this.animBeginArr, dur: _, shouldSetPrevPaths: !0, easing: a.globals.easing });
      }
      return { g: n, elHollow: p, dataLabels: m };
    } }, { key: "drawHollow", value: function(i) {
      var a = new z(this.ctx).drawCircle(2 * i.size);
      return a.attr({ class: "apexcharts-radialbar-hollow", cx: i.centerX, cy: i.centerY, r: i.size, fill: i.fill }), a;
    } }, { key: "drawHollowImage", value: function(i, a, s, r) {
      var o = this.w, n = new at(this.ctx), h = P.randomId(), c = o.config.plotOptions.radialBar.hollow.image;
      if (o.config.plotOptions.radialBar.hollow.imageClipped)
        n.clippedImgArea({ width: s, height: s, image: c, patternID: "pattern".concat(o.globals.cuid).concat(h) }), r = "url(#pattern".concat(o.globals.cuid).concat(h, ")");
      else {
        var d = o.config.plotOptions.radialBar.hollow.imageWidth, g = o.config.plotOptions.radialBar.hollow.imageHeight;
        if (d === void 0 && g === void 0) {
          var p = o.globals.dom.Paper.image(c).loaded(function(b) {
            this.move(i.centerX - b.width / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetX, i.centerY - b.height / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetY);
          });
          a.add(p);
        } else {
          var f = o.globals.dom.Paper.image(c).loaded(function(b) {
            this.move(i.centerX - d / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetX, i.centerY - g / 2 + o.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(d, g);
          });
          a.add(f);
        }
      }
      return r;
    } }, { key: "getStrokeWidth", value: function(i) {
      var a = this.w;
      return i.size * (100 - parseInt(a.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (i.series.length + 1) - this.margin;
    } }, { key: "onBarLabelClick", value: function(i) {
      var a = parseInt(i.target.getAttribute("rel"), 10) - 1, s = this.barLabels.onClick, r = this.w;
      s && s(r.globals.seriesNames[a], { w: r, seriesIndex: a });
    } }]), e;
  }(), Ne = function(y) {
    ut(e, St);
    var t = pt(e);
    function e() {
      return Y(this, e), t.apply(this, arguments);
    }
    return F(e, [{ key: "draw", value: function(i, a) {
      var s = this.w, r = new z(this.ctx);
      this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = i, this.seriesRangeStart = s.globals.seriesRangeStart, this.seriesRangeEnd = s.globals.seriesRangeEnd, this.barHelpers.initVariables(i);
      for (var o = r.group({ class: "apexcharts-rangebar-series apexcharts-plot-series" }), n = 0; n < i.length; n++) {
        var h, c, d, g, p = void 0, f = void 0, b = s.globals.comboCharts ? a[n] : n, m = r.group({ class: "apexcharts-series", seriesName: P.escapeString(s.globals.seriesNames[b]), rel: n + 1, "data:realIndex": b });
        this.ctx.series.addCollapsedClassToSeries(m, b), i[n].length > 0 && (this.visibleI = this.visibleI + 1);
        var w = 0, A = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = b);
        var l = this.barHelpers.initialPositions();
        f = l.y, g = l.zeroW, p = l.x, A = l.barWidth, w = l.barHeight, h = l.xDivision, c = l.yDivision, d = l.zeroH;
        for (var u = r.group({ class: "apexcharts-datalabels", "data:realIndex": b }), x = r.group({ class: "apexcharts-rangebar-goals-markers" }), v = 0; v < s.globals.dataPoints; v++) {
          var k, S = this.barHelpers.getStrokeWidth(n, v, b), C = this.seriesRangeStart[n][v], L = this.seriesRangeEnd[n][v], M = null, T = null, I = null, E = { x: p, y: f, strokeWidth: S, elSeries: m }, R = this.seriesLen;
          if (s.config.plotOptions.bar.rangeBarGroupRows && (R = 1), s.config.series[n].data[v] === void 0)
            break;
          if (this.isHorizontal) {
            I = f + w * this.visibleI;
            var H = (c - w * R) / 2;
            if (s.config.series[n].data[v].x) {
              var D = this.detectOverlappingBars({ i: n, j: v, barYPosition: I, srty: H, barHeight: w, yDivision: c, initPositions: l });
              w = D.barHeight, I = D.barYPosition;
            }
            A = (M = this.drawRangeBarPaths(X({ indexes: { i: n, j: v, realIndex: b }, barHeight: w, barYPosition: I, zeroW: g, yDivision: c, y1: C, y2: L }, E))).barWidth;
          } else {
            s.globals.isXNumeric && (p = (s.globals.seriesX[n][v] - s.globals.minX) / this.xRatio - A / 2), T = p + A * this.visibleI;
            var W = (h - A * R) / 2;
            if (s.config.series[n].data[v].x) {
              var N = this.detectOverlappingBars({ i: n, j: v, barXPosition: T, srtx: W, barWidth: A, xDivision: h, initPositions: l });
              A = N.barWidth, T = N.barXPosition;
            }
            w = (M = this.drawRangeColumnPaths(X({ indexes: { i: n, j: v, realIndex: b }, barWidth: A, barXPosition: T, zeroH: d, xDivision: h }, E))).barHeight;
          }
          var V = this.barHelpers.drawGoalLine({ barXPosition: M.barXPosition, barYPosition: I, goalX: M.goalX, goalY: M.goalY, barHeight: w, barWidth: A });
          V && x.add(V), f = M.y, p = M.x;
          var _ = this.barHelpers.getPathFillColor(i, n, v, b), st = s.globals.stroke.colors[b];
          this.renderSeries((tt(k = { realIndex: b, pathFill: _, lineFill: st, j: v, i: n, x: p, y: f, y1: C, y2: L, pathFrom: M.pathFrom, pathTo: M.pathTo, strokeWidth: S, elSeries: m, series: i, barHeight: w, barWidth: A, barXPosition: T, barYPosition: I }, "barWidth", A), tt(k, "elDataLabelsWrap", u), tt(k, "elGoalsMarkers", x), tt(k, "visibleSeries", this.visibleI), tt(k, "type", "rangebar"), k));
        }
        o.add(m);
      }
      return o;
    } }, { key: "detectOverlappingBars", value: function(i) {
      var a = i.i, s = i.j, r = i.barYPosition, o = i.barXPosition, n = i.srty, h = i.srtx, c = i.barHeight, d = i.barWidth, g = i.yDivision, p = i.xDivision, f = i.initPositions, b = this.w, m = [], w = b.config.series[a].data[s].rangeName, A = b.config.series[a].data[s].x, l = Array.isArray(A) ? A.join(" ") : A, u = b.globals.labels.map(function(v) {
        return Array.isArray(v) ? v.join(" ") : v;
      }).indexOf(l), x = b.globals.seriesRange[a].findIndex(function(v) {
        return v.x === l && v.overlaps.length > 0;
      });
      return this.isHorizontal ? (r = b.config.plotOptions.bar.rangeBarGroupRows ? n + g * u : n + c * this.visibleI + g * u, x > -1 && !b.config.plotOptions.bar.rangeBarOverlap && (m = b.globals.seriesRange[a][x].overlaps).indexOf(w) > -1 && (r = (c = f.barHeight / m.length) * this.visibleI + g * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + c * (this.visibleI + m.indexOf(w)) + g * u)) : (u > -1 && (o = b.config.plotOptions.bar.rangeBarGroupRows ? h + p * u : h + d * this.visibleI + p * u), x > -1 && !b.config.plotOptions.bar.rangeBarOverlap && (m = b.globals.seriesRange[a][x].overlaps).indexOf(w) > -1 && (o = (d = f.barWidth / m.length) * this.visibleI + p * (100 - parseInt(this.barOptions.barWidth, 10)) / 100 / 2 + d * (this.visibleI + m.indexOf(w)) + p * u)), { barYPosition: r, barXPosition: o, barHeight: c, barWidth: d };
    } }, { key: "drawRangeColumnPaths", value: function(i) {
      var a = i.indexes, s = i.x, r = i.xDivision, o = i.barWidth, n = i.barXPosition, h = i.zeroH, c = this.w, d = a.i, g = a.j, p = this.yRatio[this.yaxisIndex], f = a.realIndex, b = this.getRangeValue(f, g), m = Math.min(b.start, b.end), w = Math.max(b.start, b.end);
      this.series[d][g] === void 0 || this.series[d][g] === null ? m = h : (m = h - m / p, w = h - w / p);
      var A = Math.abs(w - m), l = this.barHelpers.getColumnPaths({ barXPosition: n, barWidth: o, y1: m, y2: w, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, realIndex: a.realIndex, i: f, j: g, w: c });
      if (c.globals.isXNumeric) {
        var u = this.getBarXForNumericXAxis({ x: s, j: g, realIndex: f, barWidth: o });
        s = u.x, n = u.barXPosition;
      } else
        s += r;
      return { pathTo: l.pathTo, pathFrom: l.pathFrom, barHeight: A, x: s, y: w, goalY: this.barHelpers.getGoalValues("y", null, h, d, g), barXPosition: n };
    } }, { key: "drawRangeBarPaths", value: function(i) {
      var a = i.indexes, s = i.y, r = i.y1, o = i.y2, n = i.yDivision, h = i.barHeight, c = i.barYPosition, d = i.zeroW, g = this.w, p = d + r / this.invertedYRatio, f = d + o / this.invertedYRatio, b = Math.abs(f - p), m = this.barHelpers.getBarpaths({ barYPosition: c, barHeight: h, x1: p, x2: f, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, i: a.realIndex, realIndex: a.realIndex, j: a.j, w: g });
      return g.globals.isXNumeric || (s += n), { pathTo: m.pathTo, pathFrom: m.pathFrom, barWidth: b, x: f, goalX: this.barHelpers.getGoalValues("x", d, null, a.realIndex, a.j), y: s };
    } }, { key: "getRangeValue", value: function(i, a) {
      var s = this.w;
      return { start: s.globals.seriesRangeStart[i][a], end: s.globals.seriesRangeEnd[i][a] };
    } }]), e;
  }(), We = function() {
    function y(t) {
      Y(this, y), this.w = t.w, this.lineCtx = t;
    }
    return F(y, [{ key: "sameValueSeriesFix", value: function(t, e) {
      var i = this.w;
      if ((i.config.fill.type === "gradient" || i.config.fill.type[t] === "gradient") && new q(this.lineCtx.ctx, i).seriesHaveSameValues(t)) {
        var a = e[t].slice();
        a[a.length - 1] = a[a.length - 1] + 1e-6, e[t] = a;
      }
      return e;
    } }, { key: "calculatePoints", value: function(t) {
      var e = t.series, i = t.realIndex, a = t.x, s = t.y, r = t.i, o = t.j, n = t.prevY, h = this.w, c = [], d = [];
      if (o === 0) {
        var g = this.lineCtx.categoryAxisCorrection + h.config.markers.offsetX;
        h.globals.isXNumeric && (g = (h.globals.seriesX[i][0] - h.globals.minX) / this.lineCtx.xRatio + h.config.markers.offsetX), c.push(g), d.push(P.isNumber(e[r][0]) ? n + h.config.markers.offsetY : null), c.push(a + h.config.markers.offsetX), d.push(P.isNumber(e[r][o + 1]) ? s + h.config.markers.offsetY : null);
      } else
        c.push(a + h.config.markers.offsetX), d.push(P.isNumber(e[r][o + 1]) ? s + h.config.markers.offsetY : null);
      return { x: c, y: d };
    } }, { key: "checkPreviousPaths", value: function(t) {
      for (var e = t.pathFromLine, i = t.pathFromArea, a = t.realIndex, s = this.w, r = 0; r < s.globals.previousPaths.length; r++) {
        var o = s.globals.previousPaths[r];
        (o.type === "line" || o.type === "area") && o.paths.length > 0 && parseInt(o.realIndex, 10) === parseInt(a, 10) && (o.type === "line" ? (this.lineCtx.appendPathFrom = !1, e = s.globals.previousPaths[r].paths[0].d) : o.type === "area" && (this.lineCtx.appendPathFrom = !1, i = s.globals.previousPaths[r].paths[0].d, s.config.stroke.show && s.globals.previousPaths[r].paths[1] && (e = s.globals.previousPaths[r].paths[1].d)));
      }
      return { pathFromLine: e, pathFromArea: i };
    } }, { key: "determineFirstPrevY", value: function(t) {
      var e, i, a = t.i, s = t.series, r = t.prevY, o = t.lineYPosition, n = this.w, h = n.config.chart.stacked && !n.globals.comboCharts || n.config.chart.stacked && n.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || ((e = this.w.config.series[a]) === null || e === void 0 ? void 0 : e.type) === "bar");
      if (((i = s[a]) === null || i === void 0 ? void 0 : i[0]) !== void 0)
        r = (o = h && a > 0 ? this.lineCtx.prevSeriesY[a - 1][0] : this.lineCtx.zeroY) - s[a][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] + 2 * (this.lineCtx.isReversed ? s[a][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] : 0);
      else if (h && a > 0 && s[a][0] === void 0) {
        for (var c = a - 1; c >= 0; c--)
          if (s[c][0] !== null && s[c][0] !== void 0) {
            r = o = this.lineCtx.prevSeriesY[c][0];
            break;
          }
      }
      return { prevY: r, lineYPosition: o };
    } }]), y;
  }(), Be = function(y) {
    for (var t, e, i, a, s = function(c) {
      for (var d = [], g = c[0], p = c[1], f = d[0] = _t(g, p), b = 1, m = c.length - 1; b < m; b++)
        g = p, p = c[b + 1], d[b] = 0.5 * (f + (f = _t(g, p)));
      return d[b] = f, d;
    }(y), r = y.length - 1, o = [], n = 0; n < r; n++)
      i = _t(y[n], y[n + 1]), Math.abs(i) < 1e-6 ? s[n] = s[n + 1] = 0 : (a = (t = s[n] / i) * t + (e = s[n + 1] / i) * e) > 9 && (a = 3 * i / Math.sqrt(a), s[n] = a * t, s[n + 1] = a * e);
    for (var h = 0; h <= r; h++)
      a = (y[Math.min(r, h + 1)][0] - y[Math.max(0, h - 1)][0]) / (6 * (1 + s[h] * s[h])), o.push([a || 0, s[h] * a || 0]);
    return o;
  }, jt = function(y) {
    for (var t = "", e = 0; e < y.length; e++) {
      var i = y[e], a = i.length;
      a > 4 ? (t += "C".concat(i[0], ", ").concat(i[1]), t += ", ".concat(i[2], ", ").concat(i[3]), t += ", ".concat(i[4], ", ").concat(i[5])) : a > 2 && (t += "S".concat(i[0], ", ").concat(i[1]), t += ", ".concat(i[2], ", ").concat(i[3]));
    }
    return t;
  }, ce = function(y) {
    var t = Be(y), e = y[1], i = y[0], a = [], s = t[1], r = t[0];
    a.push(i, [i[0] + r[0], i[1] + r[1], e[0] - s[0], e[1] - s[1], e[0], e[1]]);
    for (var o = 2, n = t.length; o < n; o++) {
      var h = y[o], c = t[o];
      a.push([h[0] - c[0], h[1] - c[1], h[0], h[1]]);
    }
    return a;
  };
  function _t(y, t) {
    return (t[1] - y[1]) / (t[0] - y[0]);
  }
  var Ut = function() {
    function y(t, e, i) {
      Y(this, y), this.ctx = t, this.w = t.w, this.xyRatios = e, this.pointsChart = !(this.w.config.chart.type !== "bubble" && this.w.config.chart.type !== "scatter") || i, this.scatter = new Qt(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new We(this), this.markers = new It(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0;
    }
    return F(y, [{ key: "draw", value: function(t, e, i, a) {
      var s, r = this.w, o = new z(this.ctx), n = r.globals.comboCharts ? e : r.config.chart.type, h = o.group({ class: "apexcharts-".concat(n, "-series apexcharts-plot-series") }), c = new q(this.ctx, r);
      this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, t = c.getLogSeries(t), this.yRatio = c.getLogYRatios(this.yRatio);
      for (var d = [], g = 0; g < t.length; g++) {
        t = this.lineHelpers.sameValueSeriesFix(g, t);
        var p = r.globals.comboCharts ? i[g] : g;
        this._initSerieVariables(t, g, p);
        var f = [], b = [], m = [], w = r.globals.padHorizontal + this.categoryAxisCorrection;
        this.ctx.series.addCollapsedClassToSeries(this.elSeries, p), r.globals.isXNumeric && r.globals.seriesX.length > 0 && (w = (r.globals.seriesX[p][0] - r.globals.minX) / this.xRatio), m.push(w);
        var A, l = w, u = void 0, x = l, v = this.zeroY, k = this.zeroY;
        v = this.lineHelpers.determineFirstPrevY({ i: g, series: t, prevY: v, lineYPosition: 0 }).prevY, r.config.stroke.curve === "monotonCubic" && t[g][0] === null ? f.push(null) : f.push(v), A = v, n === "rangeArea" && (u = k = this.lineHelpers.determineFirstPrevY({ i: g, series: a, prevY: k, lineYPosition: 0 }).prevY, b.push(k));
        var S = { type: n, series: t, realIndex: p, i: g, x: w, y: 1, pX: l, pY: A, pathsFrom: this._calculatePathsFrom({ type: n, series: t, i: g, realIndex: p, prevX: x, prevY: v, prevY2: k }), linePaths: [], areaPaths: [], seriesIndex: i, lineYPosition: 0, xArrj: m, yArrj: f, y2Arrj: b, seriesRangeEnd: a }, C = this._iterateOverDataPoints(X(X({}, S), {}, { iterations: n === "rangeArea" ? t[g].length - 1 : void 0, isRangeStart: !0 }));
        if (n === "rangeArea") {
          var L = this._calculatePathsFrom({ series: a, i: g, realIndex: p, prevX: x, prevY: k }), M = this._iterateOverDataPoints(X(X({}, S), {}, { series: a, pY: u, pathsFrom: L, iterations: a[g].length - 1, isRangeStart: !1 }));
          C.linePaths[0] = M.linePath + C.linePath, C.pathFromLine = M.pathFromLine + C.pathFromLine;
        }
        this._handlePaths({ type: n, realIndex: p, i: g, paths: C }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), d.push(this.elSeries);
      }
      if (((s = r.config.series[0]) === null || s === void 0 ? void 0 : s.zIndex) !== void 0 && d.sort(function(E, R) {
        return Number(E.node.getAttribute("zIndex")) - Number(R.node.getAttribute("zIndex"));
      }), r.config.chart.stacked)
        for (var T = d.length; T > 0; T--)
          h.add(d[T - 1]);
      else
        for (var I = 0; I < d.length; I++)
          h.add(d[I]);
      return h;
    } }, { key: "_initSerieVariables", value: function(t, e, i) {
      var a = this.w, s = new z(this.ctx);
      this.xDivision = a.globals.gridWidth / (a.globals.dataPoints - (a.config.xaxis.tickPlacement === "on" ? 1 : 0)), this.strokeWidth = Array.isArray(a.config.stroke.width) ? a.config.stroke.width[i] : a.config.stroke.width, this.yRatio.length > 1 && (this.yaxisIndex = i), this.isReversed = a.config.yaxis[this.yaxisIndex] && a.config.yaxis[this.yaxisIndex].reversed, this.zeroY = a.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? a.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), this.areaBottomY = this.zeroY, (this.zeroY > a.globals.gridHeight || a.config.plotOptions.area.fillTo === "end") && (this.areaBottomY = a.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = s.group({ class: "apexcharts-series", zIndex: a.config.series[i].zIndex !== void 0 ? a.config.series[i].zIndex : i, seriesName: P.escapeString(a.globals.seriesNames[i]) }), this.elPointsMain = s.group({ class: "apexcharts-series-markers-wrap", "data:realIndex": i }), this.elDataLabelsWrap = s.group({ class: "apexcharts-datalabels", "data:realIndex": i });
      var r = t[e].length === a.globals.dataPoints;
      this.elSeries.attr({ "data:longestSeries": r, rel: e + 1, "data:realIndex": i }), this.appendPathFrom = !0;
    } }, { key: "_calculatePathsFrom", value: function(t) {
      var e, i, a, s, r = t.type, o = t.series, n = t.i, h = t.realIndex, c = t.prevX, d = t.prevY, g = t.prevY2, p = this.w, f = new z(this.ctx);
      if (o[n][0] === null) {
        for (var b = 0; b < o[n].length; b++)
          if (o[n][b] !== null) {
            c = this.xDivision * b, d = this.zeroY - o[n][b] / this.yRatio[this.yaxisIndex], e = f.move(c, d), i = f.move(c, this.areaBottomY);
            break;
          }
      } else
        e = f.move(c, d), r === "rangeArea" && (e = f.move(c, g) + f.line(c, d)), i = f.move(c, this.areaBottomY) + f.line(c, d);
      if (a = f.move(-1, this.zeroY) + f.line(-1, this.zeroY), s = f.move(-1, this.zeroY) + f.line(-1, this.zeroY), p.globals.previousPaths.length > 0) {
        var m = this.lineHelpers.checkPreviousPaths({ pathFromLine: a, pathFromArea: s, realIndex: h });
        a = m.pathFromLine, s = m.pathFromArea;
      }
      return { prevX: c, prevY: d, linePath: e, areaPath: i, pathFromLine: a, pathFromArea: s };
    } }, { key: "_handlePaths", value: function(t) {
      var e = t.type, i = t.realIndex, a = t.i, s = t.paths, r = this.w, o = new z(this.ctx), n = new at(this.ctx);
      this.prevSeriesY.push(s.yArrj), r.globals.seriesXvalues[i] = s.xArrj, r.globals.seriesYvalues[i] = s.yArrj;
      var h = r.config.forecastDataPoints;
      if (h.count > 0 && e !== "rangeArea") {
        var c = r.globals.seriesXvalues[i][r.globals.seriesXvalues[i].length - h.count - 1], d = o.drawRect(c, 0, r.globals.gridWidth, r.globals.gridHeight, 0);
        r.globals.dom.elForecastMask.appendChild(d.node);
        var g = o.drawRect(0, 0, c, r.globals.gridHeight, 0);
        r.globals.dom.elNonForecastMask.appendChild(g.node);
      }
      this.pointsChart || r.globals.delayedElements.push({ el: this.elPointsMain.node, index: i });
      var p = { i: a, realIndex: i, animationDelay: a, initialSpeed: r.config.chart.animations.speed, dataChangeSpeed: r.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(e) };
      if (e === "area")
        for (var f = n.fillPath({ seriesNumber: i }), b = 0; b < s.areaPaths.length; b++) {
          var m = o.renderPaths(X(X({}, p), {}, { pathFrom: s.pathFromArea, pathTo: s.areaPaths[b], stroke: "none", strokeWidth: 0, strokeLineCap: null, fill: f }));
          this.elSeries.add(m);
        }
      if (r.config.stroke.show && !this.pointsChart) {
        var w = null;
        if (e === "line")
          w = n.fillPath({ seriesNumber: i, i: a });
        else if (r.config.stroke.fill.type === "solid")
          w = r.globals.stroke.colors[i];
        else {
          var A = r.config.fill;
          r.config.fill = r.config.stroke.fill, w = n.fillPath({ seriesNumber: i, i: a }), r.config.fill = A;
        }
        for (var l = 0; l < s.linePaths.length; l++) {
          var u = w;
          e === "rangeArea" && (u = n.fillPath({ seriesNumber: i }));
          var x = X(X({}, p), {}, { pathFrom: s.pathFromLine, pathTo: s.linePaths[l], stroke: w, strokeWidth: this.strokeWidth, strokeLineCap: r.config.stroke.lineCap, fill: e === "rangeArea" ? u : "none" }), v = o.renderPaths(x);
          if (this.elSeries.add(v), v.attr("fill-rule", "evenodd"), h.count > 0 && e !== "rangeArea") {
            var k = o.renderPaths(x);
            k.node.setAttribute("stroke-dasharray", h.dashArray), h.strokeWidth && k.node.setAttribute("stroke-width", h.strokeWidth), this.elSeries.add(k), k.attr("clip-path", "url(#forecastMask".concat(r.globals.cuid, ")")), v.attr("clip-path", "url(#nonForecastMask".concat(r.globals.cuid, ")"));
          }
        }
      }
    } }, { key: "_iterateOverDataPoints", value: function(t) {
      var e, i = this, a = t.type, s = t.series, r = t.iterations, o = t.realIndex, n = t.i, h = t.x, c = t.y, d = t.pX, g = t.pY, p = t.pathsFrom, f = t.linePaths, b = t.areaPaths, m = t.seriesIndex, w = t.lineYPosition, A = t.xArrj, l = t.yArrj, u = t.y2Arrj, x = t.isRangeStart, v = t.seriesRangeEnd, k = this.w, S = new z(this.ctx), C = this.yRatio, L = p.prevY, M = p.linePath, T = p.areaPath, I = p.pathFromLine, E = p.pathFromArea, R = P.isNumber(k.globals.minYArr[o]) ? k.globals.minYArr[o] : k.globals.minY;
      r || (r = k.globals.dataPoints > 1 ? k.globals.dataPoints - 1 : k.globals.dataPoints);
      for (var H = function(nt, lt) {
        return lt - nt / C[i.yaxisIndex] + 2 * (i.isReversed ? nt / C[i.yaxisIndex] : 0);
      }, D = c, W = k.config.chart.stacked && !k.globals.comboCharts || k.config.chart.stacked && k.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || ((e = this.w.config.series[o]) === null || e === void 0 ? void 0 : e.type) === "bar"), N = 0; N < r; N++) {
        var V = s[n][N + 1] === void 0 || s[n][N + 1] === null;
        if (k.globals.isXNumeric) {
          var _ = k.globals.seriesX[o][N + 1];
          k.globals.seriesX[o][N + 1] === void 0 && (_ = k.globals.seriesX[o][r - 1]), h = (_ - k.globals.minX) / this.xRatio;
        } else
          h += this.xDivision;
        W ? n > 0 && k.globals.collapsedSeries.length < k.config.series.length - 1 ? w = this.prevSeriesY[function(nt) {
          for (var lt = nt, $ = 0; $ < k.globals.series.length; $++)
            if (k.globals.collapsedSeriesIndices.indexOf(nt) > -1) {
              lt--;
              break;
            }
          return lt >= 0 ? lt : 0;
        }(n - 1)][N + 1] : w = this.zeroY : w = this.zeroY, V ? c = H(R, w) : (c = H(s[n][N + 1], w), a === "rangeArea" && (D = H(v[n][N + 1], w))), A.push(h), V && k.config.stroke.curve === "smooth" ? l.push(null) : l.push(c), u.push(D);
        var st = this.lineHelpers.calculatePoints({ series: s, x: h, y: c, realIndex: o, i: n, j: N, prevY: L }), K = this._createPaths({ type: a, series: s, i: n, realIndex: o, j: N, x: h, y: c, y2: D, xArrj: A, yArrj: l, y2Arrj: u, pX: d, pY: g, linePath: M, areaPath: T, linePaths: f, areaPaths: b, seriesIndex: m, isRangeStart: x });
        b = K.areaPaths, f = K.linePaths, d = K.pX, g = K.pY, T = K.areaPath, M = K.linePath, !this.appendPathFrom || k.config.stroke.curve === "monotoneCubic" && a === "rangeArea" || (I += S.line(h, this.zeroY), E += S.line(h, this.zeroY)), this.handleNullDataPoints(s, st, n, N, o), this._handleMarkersAndLabels({ type: a, pointsPos: st, i: n, j: N, realIndex: o, isRangeStart: x });
      }
      return { yArrj: l, xArrj: A, pathFromArea: E, areaPaths: b, pathFromLine: I, linePaths: f, linePath: M, areaPath: T };
    } }, { key: "_handleMarkersAndLabels", value: function(t) {
      var e = t.type, i = t.pointsPos, a = t.isRangeStart, s = t.i, r = t.j, o = t.realIndex, n = this.w, h = new kt(this.ctx);
      if (this.pointsChart)
        this.scatter.draw(this.elSeries, r, { realIndex: o, pointsPos: i, zRatio: this.zRatio, elParent: this.elPointsMain });
      else {
        n.globals.series[s].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
        var c = this.markers.plotChartMarkers(i, o, r + 1);
        c !== null && this.elPointsMain.add(c);
      }
      var d = h.drawDataLabel({ type: e, isRangeStart: a, pos: i, i: o, j: r + 1 });
      d !== null && this.elDataLabelsWrap.add(d);
    } }, { key: "_createPaths", value: function(t) {
      var e = t.type, i = t.series, a = t.i, s = t.realIndex, r = t.j, o = t.x, n = t.y, h = t.xArrj, c = t.yArrj, d = t.y2, g = t.y2Arrj, p = t.pX, f = t.pY, b = t.linePath, m = t.areaPath, w = t.linePaths, A = t.areaPaths, l = t.seriesIndex, u = t.isRangeStart, x = this.w, v = new z(this.ctx), k = x.config.stroke.curve, S = this.areaBottomY;
      if (Array.isArray(x.config.stroke.curve) && (k = Array.isArray(l) ? x.config.stroke.curve[l[a]] : x.config.stroke.curve[a]), e === "rangeArea" && (x.globals.hasNullValues || x.config.forecastDataPoints.count > 0) && k === "monotoneCubic" && (k = "straight"), k === "monotoneCubic") {
        var C = e === "rangeArea" ? h.length === x.globals.dataPoints : r === i[a].length - 2, L = h.map(function(W, N) {
          return [h[N], c[N]];
        }).filter(function(W) {
          return W[1] !== null;
        });
        if (C && L.length > 1) {
          var M = ce(L);
          if (b += jt(M), i[a][0] === null ? m = b : m += jt(M), e === "rangeArea" && u) {
            b += v.line(h[h.length - 1], g[g.length - 1]);
            var T = h.slice().reverse(), I = g.slice().reverse(), E = T.map(function(W, N) {
              return [T[N], I[N]];
            }), R = ce(E);
            m = b += jt(R);
          } else
            m += v.line(L[L.length - 1][0], S) + v.line(L[0][0], S) + v.move(L[0][0], L[0][1]) + "z";
          w.push(b), A.push(m);
        }
      } else if (k === "smooth") {
        var H = 0.35 * (o - p);
        x.globals.hasNullValues ? (i[a][r] !== null && (i[a][r + 1] !== null ? (b = v.move(p, f) + v.curve(p + H, f, o - H, n, o + 1, n), m = v.move(p + 1, f) + v.curve(p + H, f, o - H, n, o + 1, n) + v.line(o, S) + v.line(p, S) + "z") : (b = v.move(p, f), m = v.move(p, f) + "z")), w.push(b), A.push(m)) : (b += v.curve(p + H, f, o - H, n, o, n), m += v.curve(p + H, f, o - H, n, o, n)), p = o, f = n, r === i[a].length - 2 && (m = m + v.curve(p, f, o, n, o, S) + v.move(o, n) + "z", e === "rangeArea" && u ? b = b + v.curve(p, f, o, n, o, d) + v.move(o, d) + "z" : x.globals.hasNullValues || (w.push(b), A.push(m)));
      } else {
        if (i[a][r + 1] === null) {
          b += v.move(o, n);
          var D = x.globals.isXNumeric ? (x.globals.seriesX[s][r] - x.globals.minX) / this.xRatio : o - this.xDivision;
          m = m + v.line(D, S) + v.move(o, n) + "z";
        }
        i[a][r] === null && (b += v.move(o, n), m += v.move(o, S)), k === "stepline" ? (b = b + v.line(o, null, "H") + v.line(null, n, "V"), m = m + v.line(o, null, "H") + v.line(null, n, "V")) : k === "straight" && (b += v.line(o, n), m += v.line(o, n)), r === i[a].length - 2 && (m = m + v.line(o, S) + v.move(o, n) + "z", e === "rangeArea" && u ? b = b + v.line(o, d) + v.move(o, d) + "z" : (w.push(b), A.push(m)));
      }
      return { linePaths: w, areaPaths: A, pX: p, pY: f, linePath: b, areaPath: m };
    } }, { key: "handleNullDataPoints", value: function(t, e, i, a, s) {
      var r = this.w;
      if (t[i][a] === null && r.config.markers.showNullDataPoints || t[i].length === 1) {
        var o = this.markers.plotChartMarkers(e, s, a + 1, this.strokeWidth - r.config.markers.strokeWidth / 2, !0);
        o !== null && this.elPointsMain.add(o);
      }
    } }]), y;
  }();
  window.TreemapSquared = {}, window.TreemapSquared.generate = /* @__PURE__ */ function() {
    function y(o, n, h, c) {
      this.xoffset = o, this.yoffset = n, this.height = c, this.width = h, this.shortestEdge = function() {
        return Math.min(this.height, this.width);
      }, this.getCoordinates = function(d) {
        var g, p = [], f = this.xoffset, b = this.yoffset, m = s(d) / this.height, w = s(d) / this.width;
        if (this.width >= this.height)
          for (g = 0; g < d.length; g++)
            p.push([f, b, f + m, b + d[g] / m]), b += d[g] / m;
        else
          for (g = 0; g < d.length; g++)
            p.push([f, b, f + d[g] / w, b + w]), f += d[g] / w;
        return p;
      }, this.cutArea = function(d) {
        var g;
        if (this.width >= this.height) {
          var p = d / this.height, f = this.width - p;
          g = new y(this.xoffset + p, this.yoffset, f, this.height);
        } else {
          var b = d / this.width, m = this.height - b;
          g = new y(this.xoffset, this.yoffset + b, this.width, m);
        }
        return g;
      };
    }
    function t(o, n, h, c, d) {
      c = c === void 0 ? 0 : c, d = d === void 0 ? 0 : d;
      var g = e(function(p, f) {
        var b, m = [], w = f / s(p);
        for (b = 0; b < p.length; b++)
          m[b] = p[b] * w;
        return m;
      }(o, n * h), [], new y(c, d, n, h), []);
      return function(p) {
        var f, b, m = [];
        for (f = 0; f < p.length; f++)
          for (b = 0; b < p[f].length; b++)
            m.push(p[f][b]);
        return m;
      }(g);
    }
    function e(o, n, h, c) {
      var d, g, p;
      if (o.length !== 0)
        return d = h.shortestEdge(), function(f, b, m) {
          var w;
          if (f.length === 0)
            return !0;
          (w = f.slice()).push(b);
          var A = i(f, m), l = i(w, m);
          return A >= l;
        }(n, g = o[0], d) ? (n.push(g), e(o.slice(1), n, h, c)) : (p = h.cutArea(s(n), c), c.push(h.getCoordinates(n)), e(o, [], p, c)), c;
      c.push(h.getCoordinates(n));
    }
    function i(o, n) {
      var h = Math.min.apply(Math, o), c = Math.max.apply(Math, o), d = s(o);
      return Math.max(Math.pow(n, 2) * c / Math.pow(d, 2), Math.pow(d, 2) / (Math.pow(n, 2) * h));
    }
    function a(o) {
      return o && o.constructor === Array;
    }
    function s(o) {
      var n, h = 0;
      for (n = 0; n < o.length; n++)
        h += o[n];
      return h;
    }
    function r(o) {
      var n, h = 0;
      if (a(o[0]))
        for (n = 0; n < o.length; n++)
          h += r(o[n]);
      else
        h = s(o);
      return h;
    }
    return function o(n, h, c, d, g) {
      d = d === void 0 ? 0 : d, g = g === void 0 ? 0 : g;
      var p, f, b = [], m = [];
      if (a(n[0])) {
        for (f = 0; f < n.length; f++)
          b[f] = r(n[f]);
        for (p = t(b, h, c, d, g), f = 0; f < n.length; f++)
          m.push(o(n[f], p[f][2] - p[f][0], p[f][3] - p[f][1], p[f][0], p[f][1]));
      } else
        m = t(n, h, c, d, g);
      return m;
    };
  }();
  var mt, Ot, Ge = function() {
    function y(t, e) {
      Y(this, y), this.ctx = t, this.w = t.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new ne(t), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [];
    }
    return F(y, [{ key: "draw", value: function(t) {
      var e = this, i = this.w, a = new z(this.ctx), s = new at(this.ctx), r = a.group({ class: "apexcharts-treemap" });
      if (i.globals.noData)
        return r;
      var o = [];
      return t.forEach(function(n) {
        var h = n.map(function(c) {
          return Math.abs(c);
        });
        o.push(h);
      }), this.negRange = this.helpers.checkColorRange(), i.config.series.forEach(function(n, h) {
        n.data.forEach(function(c) {
          Array.isArray(e.labels[h]) || (e.labels[h] = []), e.labels[h].push(c.x);
        });
      }), window.TreemapSquared.generate(o, i.globals.gridWidth, i.globals.gridHeight).forEach(function(n, h) {
        var c = a.group({ class: "apexcharts-series apexcharts-treemap-series", seriesName: P.escapeString(i.globals.seriesNames[h]), rel: h + 1, "data:realIndex": h });
        if (i.config.chart.dropShadow.enabled) {
          var d = i.config.chart.dropShadow;
          new Z(e.ctx).dropShadow(r, d, h);
        }
        var g = a.group({ class: "apexcharts-data-labels" });
        n.forEach(function(p, f) {
          var b = p[0], m = p[1], w = p[2], A = p[3], l = a.drawRect(b, m, w - b, A - m, i.config.plotOptions.treemap.borderRadius, "#fff", 1, e.strokeWidth, i.config.plotOptions.treemap.useFillColorAsStroke ? x : i.globals.stroke.colors[h]);
          l.attr({ cx: b, cy: m, index: h, i: h, j: f, width: w - b, height: A - m });
          var u = e.helpers.getShadeColor(i.config.chart.type, h, f, e.negRange), x = u.color;
          i.config.series[h].data[f] !== void 0 && i.config.series[h].data[f].fillColor && (x = i.config.series[h].data[f].fillColor);
          var v = s.fillPath({ color: x, seriesNumber: h, dataPointIndex: f });
          l.node.classList.add("apexcharts-treemap-rect"), l.attr({ fill: v }), e.helpers.addListeners(l);
          var k = { x: b + (w - b) / 2, y: m + (A - m) / 2, width: 0, height: 0 }, S = { x: b, y: m, width: w - b, height: A - m };
          if (i.config.chart.animations.enabled && !i.globals.dataChanged) {
            var C = 1;
            i.globals.resized || (C = i.config.chart.animations.speed), e.animateTreemap(l, k, S, C);
          }
          if (i.globals.dataChanged) {
            var L = 1;
            e.dynamicAnim.enabled && i.globals.shouldAnimate && (L = e.dynamicAnim.speed, i.globals.previousPaths[h] && i.globals.previousPaths[h][f] && i.globals.previousPaths[h][f].rect && (k = i.globals.previousPaths[h][f].rect), e.animateTreemap(l, k, S, L));
          }
          var M = e.getFontSize(p), T = i.config.dataLabels.formatter(e.labels[h][f], { value: i.globals.series[h][f], seriesIndex: h, dataPointIndex: f, w: i });
          i.config.plotOptions.treemap.dataLabels.format === "truncate" && (M = parseInt(i.config.dataLabels.style.fontSize, 10), T = e.truncateLabels(T, M, b, m, w, A));
          var I = e.helpers.calculateDataLabels({ text: T, x: (b + w) / 2, y: (m + A) / 2 + e.strokeWidth / 2 + M / 3, i: h, j: f, colorProps: u, fontSize: M, series: t });
          i.config.dataLabels.enabled && I && e.rotateToFitLabel(I, M, T, b, m, w, A), c.add(l), I !== null && c.add(I);
        }), c.add(g), r.add(c);
      }), r;
    } }, { key: "getFontSize", value: function(t) {
      var e = this.w, i, a, s, r, o = function n(h) {
        var c, d = 0;
        if (Array.isArray(h[0]))
          for (c = 0; c < h.length; c++)
            d += n(h[c]);
        else
          for (c = 0; c < h.length; c++)
            d += h[c].length;
        return d;
      }(this.labels) / function n(h) {
        var c, d = 0;
        if (Array.isArray(h[0]))
          for (c = 0; c < h.length; c++)
            d += n(h[c]);
        else
          for (c = 0; c < h.length; c++)
            d += 1;
        return d;
      }(this.labels);
      return i = t[2] - t[0], a = t[3] - t[1], s = i * a, r = Math.pow(s, 0.5), Math.min(r / o, parseInt(e.config.dataLabels.style.fontSize, 10));
    } }, { key: "rotateToFitLabel", value: function(t, e, i, a, s, r, o) {
      var n = new z(this.ctx), h = n.getTextRects(i, e);
      if (h.width + this.w.config.stroke.width + 5 > r - a && h.width <= o - s) {
        var c = n.rotateAroundCenter(t.node);
        t.node.setAttribute("transform", "rotate(-90 ".concat(c.x, " ").concat(c.y, ") translate(").concat(h.height / 3, ")"));
      }
    } }, { key: "truncateLabels", value: function(t, e, i, a, s, r) {
      var o = new z(this.ctx), n = o.getTextRects(t, e).width + this.w.config.stroke.width + 5 > s - i && r - a > s - i ? r - a : s - i, h = o.getTextBasedOnMaxWidth({ text: t, maxWidth: n, fontSize: e });
      return t.length !== h.length && n / e < 5 ? "" : h;
    } }, { key: "animateTreemap", value: function(t, e, i, a) {
      var s = new dt(this.ctx);
      s.animateRect(t, { x: e.x, y: e.y, width: e.width, height: e.height }, { x: i.x, y: i.y, width: i.width, height: i.height }, a, function() {
        s.animationCompleted(t);
      });
    } }]), y;
  }(), Ve = 86400, je = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC;
    }
    return F(y, [{ key: "calculateTimeScaleTicks", value: function(t, e) {
      var i = this, a = this.w;
      if (a.globals.allSeriesCollapsed)
        return a.globals.labels = [], a.globals.timescaleLabels = [], [];
      var s = new G(this.ctx), r = (e - t) / 864e5;
      this.determineInterval(r), a.globals.disableZoomIn = !1, a.globals.disableZoomOut = !1, r < 11574074074074075e-20 ? a.globals.disableZoomIn = !0 : r > 5e4 && (a.globals.disableZoomOut = !0);
      var o = s.getTimeUnitsfromTimestamp(t, e, this.utc), n = a.globals.gridWidth / r, h = n / 24, c = h / 60, d = c / 60, g = Math.floor(24 * r), p = Math.floor(1440 * r), f = Math.floor(r * Ve), b = Math.floor(r), m = Math.floor(r / 30), w = Math.floor(r / 365), A = { minMillisecond: o.minMillisecond, minSecond: o.minSecond, minMinute: o.minMinute, minHour: o.minHour, minDate: o.minDate, minMonth: o.minMonth, minYear: o.minYear }, l = { firstVal: A, currentMillisecond: A.minMillisecond, currentSecond: A.minSecond, currentMinute: A.minMinute, currentHour: A.minHour, currentMonthDate: A.minDate, currentDate: A.minDate, currentMonth: A.minMonth, currentYear: A.minYear, daysWidthOnXAxis: n, hoursWidthOnXAxis: h, minutesWidthOnXAxis: c, secondsWidthOnXAxis: d, numberOfSeconds: f, numberOfMinutes: p, numberOfHours: g, numberOfDays: b, numberOfMonths: m, numberOfYears: w };
      switch (this.tickInterval) {
        case "years":
          this.generateYearScale(l);
          break;
        case "months":
        case "half_year":
          this.generateMonthScale(l);
          break;
        case "months_days":
        case "months_fortnight":
        case "days":
        case "week_days":
          this.generateDayScale(l);
          break;
        case "hours":
          this.generateHourScale(l);
          break;
        case "minutes_fives":
        case "minutes":
          this.generateMinuteScale(l);
          break;
        case "seconds_tens":
        case "seconds_fives":
        case "seconds":
          this.generateSecondScale(l);
      }
      var u = this.timeScaleArray.map(function(x) {
        var v = { position: x.position, unit: x.unit, year: x.year, day: x.day ? x.day : 1, hour: x.hour ? x.hour : 0, month: x.month + 1 };
        return x.unit === "month" ? X(X({}, v), {}, { day: 1, value: x.value + 1 }) : x.unit === "day" || x.unit === "hour" ? X(X({}, v), {}, { value: x.value }) : x.unit === "minute" ? X(X({}, v), {}, { value: x.value, minute: x.value }) : x.unit === "second" ? X(X({}, v), {}, { value: x.value, minute: x.minute, second: x.second }) : x;
      });
      return u.filter(function(x) {
        var v = 1, k = Math.ceil(a.globals.gridWidth / 120), S = x.value;
        a.config.xaxis.tickAmount !== void 0 && (k = a.config.xaxis.tickAmount), u.length > k && (v = Math.floor(u.length / k));
        var C = !1, L = !1;
        switch (i.tickInterval) {
          case "years":
            x.unit === "year" && (C = !0);
            break;
          case "half_year":
            v = 7, x.unit === "year" && (C = !0);
            break;
          case "months":
            v = 1, x.unit === "year" && (C = !0);
            break;
          case "months_fortnight":
            v = 15, x.unit !== "year" && x.unit !== "month" || (C = !0), S === 30 && (L = !0);
            break;
          case "months_days":
            v = 10, x.unit === "month" && (C = !0), S === 30 && (L = !0);
            break;
          case "week_days":
            v = 8, x.unit === "month" && (C = !0);
            break;
          case "days":
            v = 1, x.unit === "month" && (C = !0);
            break;
          case "hours":
            x.unit === "day" && (C = !0);
            break;
          case "minutes_fives":
          case "seconds_fives":
            S % 5 != 0 && (L = !0);
            break;
          case "seconds_tens":
            S % 10 != 0 && (L = !0);
        }
        if (i.tickInterval === "hours" || i.tickInterval === "minutes_fives" || i.tickInterval === "seconds_tens" || i.tickInterval === "seconds_fives") {
          if (!L)
            return !0;
        } else if ((S % v == 0 || C) && !L)
          return !0;
      });
    } }, { key: "recalcDimensionsBasedOnFormat", value: function(t, e) {
      var i = this.w, a = this.formatDates(t), s = this.removeOverlappingTS(a);
      i.globals.timescaleLabels = s.slice(), new Ht(this.ctx).plotCoords();
    } }, { key: "determineInterval", value: function(t) {
      var e = 24 * t, i = 60 * e;
      switch (!0) {
        case t / 365 > 5:
          this.tickInterval = "years";
          break;
        case t > 800:
          this.tickInterval = "half_year";
          break;
        case t > 180:
          this.tickInterval = "months";
          break;
        case t > 90:
          this.tickInterval = "months_fortnight";
          break;
        case t > 60:
          this.tickInterval = "months_days";
          break;
        case t > 30:
          this.tickInterval = "week_days";
          break;
        case t > 2:
          this.tickInterval = "days";
          break;
        case e > 2.4:
          this.tickInterval = "hours";
          break;
        case i > 15:
          this.tickInterval = "minutes_fives";
          break;
        case i > 5:
          this.tickInterval = "minutes";
          break;
        case i > 1:
          this.tickInterval = "seconds_tens";
          break;
        case 60 * i > 20:
          this.tickInterval = "seconds_fives";
          break;
        default:
          this.tickInterval = "seconds";
      }
    } }, { key: "generateYearScale", value: function(t) {
      var e = t.firstVal, i = t.currentMonth, a = t.currentYear, s = t.daysWidthOnXAxis, r = t.numberOfYears, o = e.minYear, n = 0, h = new G(this.ctx), c = "year";
      if (e.minDate > 1 || e.minMonth > 0) {
        var d = h.determineRemainingDaysOfYear(e.minYear, e.minMonth, e.minDate);
        n = (h.determineDaysOfYear(e.minYear) - d + 1) * s, o = e.minYear + 1, this.timeScaleArray.push({ position: n, value: o, unit: c, year: o, month: P.monthMod(i + 1) });
      } else
        e.minDate === 1 && e.minMonth === 0 && this.timeScaleArray.push({ position: n, value: o, unit: c, year: a, month: P.monthMod(i + 1) });
      for (var g = o, p = n, f = 0; f < r; f++)
        g++, p = h.determineDaysOfYear(g - 1) * s + p, this.timeScaleArray.push({ position: p, value: g, unit: c, year: g, month: 1 });
    } }, { key: "generateMonthScale", value: function(t) {
      var e = t.firstVal, i = t.currentMonthDate, a = t.currentMonth, s = t.currentYear, r = t.daysWidthOnXAxis, o = t.numberOfMonths, n = a, h = 0, c = new G(this.ctx), d = "month", g = 0;
      if (e.minDate > 1) {
        h = (c.determineDaysOfMonths(a + 1, e.minYear) - i + 1) * r, n = P.monthMod(a + 1);
        var p = s + g, f = P.monthMod(n), b = n;
        n === 0 && (d = "year", b = p, f = 1, p += g += 1), this.timeScaleArray.push({ position: h, value: b, unit: d, year: p, month: f });
      } else
        this.timeScaleArray.push({ position: h, value: n, unit: d, year: s, month: P.monthMod(a) });
      for (var m = n + 1, w = h, A = 0, l = 1; A < o; A++, l++) {
        (m = P.monthMod(m)) === 0 ? (d = "year", g += 1) : d = "month";
        var u = this._getYear(s, m, g);
        w = c.determineDaysOfMonths(m, u) * r + w;
        var x = m === 0 ? u : m;
        this.timeScaleArray.push({ position: w, value: x, unit: d, year: u, month: m === 0 ? 1 : m }), m++;
      }
    } }, { key: "generateDayScale", value: function(t) {
      var e = t.firstVal, i = t.currentMonth, a = t.currentYear, s = t.hoursWidthOnXAxis, r = t.numberOfDays, o = new G(this.ctx), n = "day", h = e.minDate + 1, c = h, d = function(l, u, x) {
        return l > o.determineDaysOfMonths(u + 1, x) && (c = 1, n = "month", p = u += 1), u;
      }, g = (24 - e.minHour) * s, p = h, f = d(c, i, a);
      e.minHour === 0 && e.minDate === 1 ? (g = 0, p = P.monthMod(e.minMonth), n = "month", c = e.minDate) : e.minDate !== 1 && e.minHour === 0 && e.minMinute === 0 && (g = 0, h = e.minDate, p = h, f = d(c = h, i, a)), this.timeScaleArray.push({ position: g, value: p, unit: n, year: this._getYear(a, f, 0), month: P.monthMod(f), day: c });
      for (var b = g, m = 0; m < r; m++) {
        n = "day", f = d(c += 1, f, this._getYear(a, f, 0));
        var w = this._getYear(a, f, 0);
        b = 24 * s + b;
        var A = c === 1 ? P.monthMod(f) : c;
        this.timeScaleArray.push({ position: b, value: A, unit: n, year: w, month: P.monthMod(f), day: A });
      }
    } }, { key: "generateHourScale", value: function(t) {
      var e = t.firstVal, i = t.currentDate, a = t.currentMonth, s = t.currentYear, r = t.minutesWidthOnXAxis, o = t.numberOfHours, n = new G(this.ctx), h = "hour", c = function(v, k) {
        return v > n.determineDaysOfMonths(k + 1, s) && (m = 1, k += 1), { month: k, date: m };
      }, d = function(v, k) {
        return v > n.determineDaysOfMonths(k + 1, s) ? k += 1 : k;
      }, g = 60 - (e.minMinute + e.minSecond / 60), p = g * r, f = e.minHour + 1, b = f;
      g === 60 && (p = 0, b = f = e.minHour);
      var m = i;
      b >= 24 && (b = 0, m += 1, h = "day");
      var w = c(m, a).month;
      w = d(m, w), this.timeScaleArray.push({ position: p, value: f, unit: h, day: m, hour: b, year: s, month: P.monthMod(w) }), b++;
      for (var A = p, l = 0; l < o; l++) {
        h = "hour", b >= 24 && (b = 0, h = "day", w = c(m += 1, w).month, w = d(m, w));
        var u = this._getYear(s, w, 0);
        A = 60 * r + A;
        var x = b === 0 ? m : b;
        this.timeScaleArray.push({ position: A, value: x, unit: h, hour: b, day: m, year: u, month: P.monthMod(w) }), b++;
      }
    } }, { key: "generateMinuteScale", value: function(t) {
      for (var e = t.currentMillisecond, i = t.currentSecond, a = t.currentMinute, s = t.currentHour, r = t.currentDate, o = t.currentMonth, n = t.currentYear, h = t.minutesWidthOnXAxis, c = t.secondsWidthOnXAxis, d = t.numberOfMinutes, g = a + 1, p = r, f = o, b = n, m = s, w = (60 - i - e / 1e3) * c, A = 0; A < d; A++)
        g >= 60 && (g = 0, (m += 1) === 24 && (m = 0)), this.timeScaleArray.push({ position: w, value: g, unit: "minute", hour: m, minute: g, day: p, year: this._getYear(b, f, 0), month: P.monthMod(f) }), w += h, g++;
    } }, { key: "generateSecondScale", value: function(t) {
      for (var e = t.currentMillisecond, i = t.currentSecond, a = t.currentMinute, s = t.currentHour, r = t.currentDate, o = t.currentMonth, n = t.currentYear, h = t.secondsWidthOnXAxis, c = t.numberOfSeconds, d = i + 1, g = a, p = r, f = o, b = n, m = s, w = (1e3 - e) / 1e3 * h, A = 0; A < c; A++)
        d >= 60 && (d = 0, ++g >= 60 && (g = 0, ++m === 24 && (m = 0))), this.timeScaleArray.push({ position: w, value: d, unit: "second", hour: m, minute: g, second: d, day: p, year: this._getYear(b, f, 0), month: P.monthMod(f) }), w += h, d++;
    } }, { key: "createRawDateString", value: function(t, e) {
      var i = t.year;
      return t.month === 0 && (t.month = 1), i += "-" + ("0" + t.month.toString()).slice(-2), t.unit === "day" ? i += t.unit === "day" ? "-" + ("0" + e).slice(-2) : "-01" : i += "-" + ("0" + (t.day ? t.day : "1")).slice(-2), t.unit === "hour" ? i += t.unit === "hour" ? "T" + ("0" + e).slice(-2) : "T00" : i += "T" + ("0" + (t.hour ? t.hour : "0")).slice(-2), t.unit === "minute" ? i += ":" + ("0" + e).slice(-2) : i += ":" + (t.minute ? ("0" + t.minute).slice(-2) : "00"), t.unit === "second" ? i += ":" + ("0" + e).slice(-2) : i += ":00", this.utc && (i += ".000Z"), i;
    } }, { key: "formatDates", value: function(t) {
      var e = this, i = this.w;
      return t.map(function(a) {
        var s = a.value.toString(), r = new G(e.ctx), o = e.createRawDateString(a, s), n = r.getDate(r.parseDate(o));
        if (e.utc || (n = r.getDate(r.parseDateWithTimezone(o))), i.config.xaxis.labels.format === void 0) {
          var h = "dd MMM", c = i.config.xaxis.labels.datetimeFormatter;
          a.unit === "year" && (h = c.year), a.unit === "month" && (h = c.month), a.unit === "day" && (h = c.day), a.unit === "hour" && (h = c.hour), a.unit === "minute" && (h = c.minute), a.unit === "second" && (h = c.second), s = r.formatDate(n, h);
        } else
          s = r.formatDate(n, i.config.xaxis.labels.format);
        return { dateString: o, position: a.position, value: s, unit: a.unit, year: a.year, month: a.month };
      });
    } }, { key: "removeOverlappingTS", value: function(t) {
      var e, i = this, a = new z(this.ctx), s = !1;
      t.length > 0 && t[0].value && t.every(function(n) {
        return n.value.length === t[0].value.length;
      }) && (s = !0, e = a.getTextRects(t[0].value).width);
      var r = 0, o = t.map(function(n, h) {
        if (h > 0 && i.w.config.xaxis.labels.hideOverlappingLabels) {
          var c = s ? e : a.getTextRects(t[r].value).width, d = t[r].position;
          return n.position > d + c + 10 ? (r = h, n) : null;
        }
        return n;
      });
      return o = o.filter(function(n) {
        return n !== null;
      });
    } }, { key: "_getYear", value: function(t, e, i) {
      return t + Math.floor(e / 12) + i;
    } }]), y;
  }(), _e = function() {
    function y(t, e) {
      Y(this, y), this.ctx = e, this.w = e.w, this.el = t;
    }
    return F(y, [{ key: "setupElements", value: function() {
      var t = this.w.globals, e = this.w.config, i = e.chart.type;
      t.axisCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].indexOf(i) > -1, t.xyCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble"].indexOf(i) > -1, t.isBarHorizontal = (e.chart.type === "bar" || e.chart.type === "rangeBar" || e.chart.type === "boxPlot") && e.plotOptions.bar.horizontal, t.chartClass = ".apexcharts" + t.chartID, t.dom.baseEl = this.el, t.dom.elWrap = document.createElement("div"), z.setAttrs(t.dom.elWrap, { id: t.chartClass.substring(1), class: "apexcharts-canvas " + t.chartClass.substring(1) }), this.el.appendChild(t.dom.elWrap), t.dom.Paper = new window.SVG.Doc(t.dom.elWrap), t.dom.Paper.attr({ class: "apexcharts-svg", "xmlns:data": "ApexChartsNS", transform: "translate(".concat(e.chart.offsetX, ", ").concat(e.chart.offsetY, ")") }), t.dom.Paper.node.style.background = e.theme.mode !== "dark" || e.chart.background ? e.chart.background : "rgba(0, 0, 0, 0.8)", this.setSVGDimensions(), t.dom.elLegendForeign = document.createElementNS(t.SVGNS, "foreignObject"), z.setAttrs(t.dom.elLegendForeign, { x: 0, y: 0, width: t.svgWidth, height: t.svgHeight }), t.dom.elLegendWrap = document.createElement("div"), t.dom.elLegendWrap.classList.add("apexcharts-legend"), t.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), t.dom.elLegendForeign.appendChild(t.dom.elLegendWrap), t.dom.Paper.node.appendChild(t.dom.elLegendForeign), t.dom.elGraphical = t.dom.Paper.group().attr({ class: "apexcharts-inner apexcharts-graphical" }), t.dom.elDefs = t.dom.Paper.defs(), t.dom.Paper.add(t.dom.elGraphical), t.dom.elGraphical.add(t.dom.elDefs);
    } }, { key: "plotChartType", value: function(t, e) {
      var i = this.w, a = i.config, s = i.globals, r = { series: [], i: [] }, o = { series: [], i: [] }, n = { series: [], i: [] }, h = { series: [], i: [] }, c = { series: [], i: [] }, d = { series: [], i: [] }, g = { series: [], i: [] }, p = { series: [], i: [] }, f = { series: [], seriesRangeEnd: [], i: [] };
      s.series.map(function(k, S) {
        var C = 0;
        t[S].type !== void 0 ? (t[S].type === "column" || t[S].type === "bar" ? (s.series.length > 1 && a.plotOptions.bar.horizontal && console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"), c.series.push(k), c.i.push(S), C++, i.globals.columnSeries = c.series) : t[S].type === "area" ? (o.series.push(k), o.i.push(S), C++) : t[S].type === "line" ? (r.series.push(k), r.i.push(S), C++) : t[S].type === "scatter" ? (n.series.push(k), n.i.push(S)) : t[S].type === "bubble" ? (h.series.push(k), h.i.push(S), C++) : t[S].type === "candlestick" ? (d.series.push(k), d.i.push(S), C++) : t[S].type === "boxPlot" ? (g.series.push(k), g.i.push(S), C++) : t[S].type === "rangeBar" ? (p.series.push(k), p.i.push(S), C++) : t[S].type === "rangeArea" ? (f.series.push(s.seriesRangeStart[S]), f.seriesRangeEnd.push(s.seriesRangeEnd[S]), f.i.push(S), C++) : console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble/candlestick/boxPlot/rangeBar/rangeArea"), C > 1 && (s.comboCharts = !0)) : (r.series.push(k), r.i.push(S));
      });
      var b = new Ut(this.ctx, e), m = new Vt(this.ctx, e);
      this.ctx.pie = new he(this.ctx);
      var w = new De(this.ctx);
      this.ctx.rangeBar = new Ne(this.ctx, e);
      var A = new Oe(this.ctx), l = [];
      if (s.comboCharts) {
        if (o.series.length > 0 && l.push(b.draw(o.series, "area", o.i)), c.series.length > 0)
          if (i.config.chart.stacked) {
            var u = new oe(this.ctx, e);
            l.push(u.draw(c.series, c.i));
          } else
            this.ctx.bar = new St(this.ctx, e), l.push(this.ctx.bar.draw(c.series, c.i));
        if (f.series.length > 0 && l.push(b.draw(f.series, "rangeArea", f.i, f.seriesRangeEnd)), r.series.length > 0 && l.push(b.draw(r.series, "line", r.i)), d.series.length > 0 && l.push(m.draw(d.series, "candlestick", d.i)), g.series.length > 0 && l.push(m.draw(g.series, "boxPlot", g.i)), p.series.length > 0 && l.push(this.ctx.rangeBar.draw(p.series, p.i)), n.series.length > 0) {
          var x = new Ut(this.ctx, e, !0);
          l.push(x.draw(n.series, "scatter", n.i));
        }
        if (h.series.length > 0) {
          var v = new Ut(this.ctx, e, !0);
          l.push(v.draw(h.series, "bubble", h.i));
        }
      } else
        switch (a.chart.type) {
          case "line":
            l = b.draw(s.series, "line");
            break;
          case "area":
            l = b.draw(s.series, "area");
            break;
          case "bar":
            a.chart.stacked ? l = new oe(this.ctx, e).draw(s.series) : (this.ctx.bar = new St(this.ctx, e), l = this.ctx.bar.draw(s.series));
            break;
          case "candlestick":
            l = new Vt(this.ctx, e).draw(s.series, "candlestick");
            break;
          case "boxPlot":
            l = new Vt(this.ctx, e).draw(s.series, a.chart.type);
            break;
          case "rangeBar":
            l = this.ctx.rangeBar.draw(s.series);
            break;
          case "rangeArea":
            l = b.draw(s.seriesRangeStart, "rangeArea", void 0, s.seriesRangeEnd);
            break;
          case "heatmap":
            l = new He(this.ctx, e).draw(s.series);
            break;
          case "treemap":
            l = new Ge(this.ctx, e).draw(s.series);
            break;
          case "pie":
          case "donut":
          case "polarArea":
            l = this.ctx.pie.draw(s.series);
            break;
          case "radialBar":
            l = w.draw(s.series);
            break;
          case "radar":
            l = A.draw(s.series);
            break;
          default:
            l = b.draw(s.series);
        }
      return l;
    } }, { key: "setSVGDimensions", value: function() {
      var t = this.w.globals, e = this.w.config;
      t.svgWidth = e.chart.width, t.svgHeight = e.chart.height;
      var i = P.getDimensions(this.el), a = e.chart.width.toString().split(/[0-9]+/g).pop();
      a === "%" ? P.isNumber(i[0]) && (i[0].width === 0 && (i = P.getDimensions(this.el.parentNode)), t.svgWidth = i[0] * parseInt(e.chart.width, 10) / 100) : a !== "px" && a !== "" || (t.svgWidth = parseInt(e.chart.width, 10));
      var s = e.chart.height.toString().split(/[0-9]+/g).pop();
      if (t.svgHeight !== "auto" && t.svgHeight !== "")
        if (s === "%") {
          var r = P.getDimensions(this.el.parentNode);
          t.svgHeight = r[1] * parseInt(e.chart.height, 10) / 100;
        } else
          t.svgHeight = parseInt(e.chart.height, 10);
      else
        t.axisCharts ? t.svgHeight = t.svgWidth / 1.61 : t.svgHeight = t.svgWidth / 1.2;
      if (t.svgWidth < 0 && (t.svgWidth = 0), t.svgHeight < 0 && (t.svgHeight = 0), z.setAttrs(t.dom.Paper.node, { width: t.svgWidth, height: t.svgHeight }), s !== "%") {
        var o = e.chart.sparkline.enabled ? 0 : t.axisCharts ? e.chart.parentHeightOffset : 0;
        t.dom.Paper.node.parentNode.parentNode.style.minHeight = t.svgHeight + o + "px";
      }
      t.dom.elWrap.style.width = t.svgWidth + "px", t.dom.elWrap.style.height = t.svgHeight + "px";
    } }, { key: "shiftGraphPosition", value: function() {
      var t = this.w.globals, e = t.translateY, i = { transform: "translate(" + t.translateX + ", " + e + ")" };
      z.setAttrs(t.dom.elGraphical.node, i);
    } }, { key: "resizeNonAxisCharts", value: function() {
      var t = this.w, e = t.globals, i = 0, a = t.config.chart.sparkline.enabled ? 1 : 15;
      a += t.config.grid.padding.bottom, t.config.legend.position !== "top" && t.config.legend.position !== "bottom" || !t.config.legend.show || t.config.legend.floating || (i = new ee(this.ctx).legendHelpers.getLegendBBox().clwh + 10);
      var s = t.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"), r = 2.05 * t.globals.radialSize;
      if (s && !t.config.chart.sparkline.enabled && t.config.plotOptions.radialBar.startAngle !== 0) {
        var o = P.getBoundingClientRect(s);
        r = o.bottom;
        var n = o.bottom - o.top;
        r = Math.max(2.05 * t.globals.radialSize, n);
      }
      var h = r + e.translateY + i + a;
      e.dom.elLegendForeign && e.dom.elLegendForeign.setAttribute("height", h), t.config.chart.height && String(t.config.chart.height).indexOf("%") > 0 || (e.dom.elWrap.style.height = h + "px", z.setAttrs(e.dom.Paper.node, { height: h }), e.dom.Paper.node.parentNode.parentNode.style.minHeight = h + "px");
    } }, { key: "coreCalculations", value: function() {
      new Wt(this.ctx).init();
    } }, { key: "resetGlobals", value: function() {
      var t = this, e = function() {
        return t.w.config.series.map(function(s) {
          return [];
        });
      }, i = new Jt(), a = this.w.globals;
      i.initGlobalVars(a), a.seriesXvalues = e(), a.seriesYvalues = e();
    } }, { key: "isMultipleY", value: function() {
      if (this.w.config.yaxis.constructor === Array && this.w.config.yaxis.length > 1)
        return this.w.globals.isMultipleYAxis = !0, !0;
    } }, { key: "xySettings", value: function() {
      var t = null, e = this.w;
      if (e.globals.axisCharts) {
        if (e.config.xaxis.crosshairs.position === "back" && new Gt(this.ctx).drawXCrosshairs(), e.config.yaxis[0].crosshairs.position === "back" && new Gt(this.ctx).drawYCrosshairs(), e.config.xaxis.type === "datetime" && e.config.xaxis.labels.formatter === void 0) {
          this.ctx.timeScale = new je(this.ctx);
          var i = [];
          isFinite(e.globals.minX) && isFinite(e.globals.maxX) && !e.globals.isBarHorizontal ? i = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minX, e.globals.maxX) : e.globals.isBarHorizontal && (i = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minY, e.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(i);
        }
        t = new q(this.ctx).getCalculatedRatios();
      }
      return t;
    } }, { key: "updateSourceChart", value: function(t) {
      this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({ chart: { selection: { xaxis: { min: t.w.globals.minX, max: t.w.globals.maxX } } } }, !1, !1);
    } }, { key: "setupBrushHandler", value: function() {
      var t = this, e = this.w;
      if (e.config.chart.brush.enabled && typeof e.config.chart.events.selection != "function") {
        var i = Array.isArray(e.config.chart.brush.targets) ? e.config.chart.brush.targets : [e.config.chart.brush.target];
        i.forEach(function(a) {
          var s = ApexCharts.getChartByID(a);
          s.w.globals.brushSource = t.ctx, typeof s.w.config.chart.events.zoomed != "function" && (s.w.config.chart.events.zoomed = function() {
            t.updateSourceChart(s);
          }), typeof s.w.config.chart.events.scrolled != "function" && (s.w.config.chart.events.scrolled = function() {
            t.updateSourceChart(s);
          });
        }), e.config.chart.events.selection = function(a, s) {
          i.forEach(function(r) {
            var o = ApexCharts.getChartByID(r), n = P.clone(e.config.yaxis);
            if (e.config.chart.brush.autoScaleYaxis && o.w.globals.series.length === 1) {
              var h = new At(o);
              n = h.autoScaleY(o, n, s);
            }
            var c = o.w.config.yaxis.reduce(function(d, g, p) {
              return [].concat(J(d), [X(X({}, o.w.config.yaxis[p]), {}, { min: n[0].min, max: n[0].max })]);
            }, []);
            o.ctx.updateHelpers._updateOptions({ xaxis: { min: s.xaxis.min, max: s.xaxis.max }, yaxis: c }, !1, !1, !1, !1);
          });
        };
      }
    } }]), y;
  }(), Ue = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "_updateOptions", value: function(t) {
      var e = this, i = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], a = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], s = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], r = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
      return new Promise(function(o) {
        var n = [e.ctx];
        s && (n = e.ctx.getSyncedCharts()), e.ctx.w.globals.isExecCalled && (n = [e.ctx], e.ctx.w.globals.isExecCalled = !1), n.forEach(function(h, c) {
          var d = h.w;
          if (d.globals.shouldAnimate = a, i || (d.globals.resized = !0, d.globals.dataChanged = !0, a && h.series.getPreviousPaths()), t && U(t) === "object" && (h.config = new Mt(t), t = q.extendArrayProps(h.config, t, d), h.w.globals.chartID !== e.ctx.w.globals.chartID && delete t.series, d.config = P.extend(d.config, t), r && (d.globals.lastXAxis = t.xaxis ? P.clone(t.xaxis) : [], d.globals.lastYAxis = t.yaxis ? P.clone(t.yaxis) : [], d.globals.initialConfig = P.extend({}, d.config), d.globals.initialSeries = P.clone(d.config.series), t.series))) {
            for (var g = 0; g < d.globals.collapsedSeriesIndices.length; g++) {
              var p = d.config.series[d.globals.collapsedSeriesIndices[g]];
              d.globals.collapsedSeries[g].data = d.globals.axisCharts ? p.data.slice() : p;
            }
            for (var f = 0; f < d.globals.ancillaryCollapsedSeriesIndices.length; f++) {
              var b = d.config.series[d.globals.ancillaryCollapsedSeriesIndices[f]];
              d.globals.ancillaryCollapsedSeries[f].data = d.globals.axisCharts ? b.data.slice() : b;
            }
            h.series.emptyCollapsedSeries(d.config.series);
          }
          return h.update(t).then(function() {
            c === n.length - 1 && o(h);
          });
        });
      });
    } }, { key: "_updateSeries", value: function(t, e) {
      var i = this, a = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      return new Promise(function(s) {
        var r, o = i.w;
        return o.globals.shouldAnimate = e, o.globals.dataChanged = !0, e && i.ctx.series.getPreviousPaths(), o.globals.axisCharts ? ((r = t.map(function(n, h) {
          return i._extendSeries(n, h);
        })).length === 0 && (r = [{ data: [] }]), o.config.series = r) : o.config.series = t.slice(), a && (o.globals.initialConfig.series = P.clone(o.config.series), o.globals.initialSeries = P.clone(o.config.series)), i.ctx.update().then(function() {
          s(i.ctx);
        });
      });
    } }, { key: "_extendSeries", value: function(t, e) {
      var i = this.w, a = i.config.series[e];
      return X(X({}, i.config.series[e]), {}, { name: t.name ? t.name : a == null ? void 0 : a.name, color: t.color ? t.color : a == null ? void 0 : a.color, type: t.type ? t.type : a == null ? void 0 : a.type, group: t.group ? t.group : a == null ? void 0 : a.group, data: t.data ? t.data : a == null ? void 0 : a.data, zIndex: t.zIndex !== void 0 ? t.zIndex : e });
    } }, { key: "toggleDataPointSelection", value: function(t, e) {
      var i = this.w, a = null, s = ".apexcharts-series[data\\:realIndex='".concat(t, "']");
      return i.globals.axisCharts ? a = i.globals.dom.Paper.select("".concat(s, " path[j='").concat(e, "'], ").concat(s, " circle[j='").concat(e, "'], ").concat(s, " rect[j='").concat(e, "']")).members[0] : e === void 0 && (a = i.globals.dom.Paper.select("".concat(s, " path[j='").concat(t, "']")).members[0], i.config.chart.type !== "pie" && i.config.chart.type !== "polarArea" && i.config.chart.type !== "donut" || this.ctx.pie.pieClicked(t)), a ? (new z(this.ctx).pathMouseDown(a, null), a.node ? a.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null);
    } }, { key: "forceXAxisUpdate", value: function(t) {
      var e = this.w;
      if (["min", "max"].forEach(function(a) {
        t.xaxis[a] !== void 0 && (e.config.xaxis[a] = t.xaxis[a], e.globals.lastXAxis[a] = t.xaxis[a]);
      }), t.xaxis.categories && t.xaxis.categories.length && (e.config.xaxis.categories = t.xaxis.categories), e.config.xaxis.convertedCatToNumeric) {
        var i = new ot(t);
        t = i.convertCatToNumericXaxis(t, this.ctx);
      }
      return t;
    } }, { key: "forceYAxisUpdate", value: function(t) {
      return t.chart && t.chart.stacked && t.chart.stackType === "100%" && (Array.isArray(t.yaxis) ? t.yaxis.forEach(function(e, i) {
        t.yaxis[i].min = 0, t.yaxis[i].max = 100;
      }) : (t.yaxis.min = 0, t.yaxis.max = 100)), t;
    } }, { key: "revertDefaultAxisMinMax", value: function(t) {
      var e = this, i = this.w, a = i.globals.lastXAxis, s = i.globals.lastYAxis;
      t && t.xaxis && (a = t.xaxis), t && t.yaxis && (s = t.yaxis), i.config.xaxis.min = a.min, i.config.xaxis.max = a.max;
      var r = function(o) {
        s[o] !== void 0 && (i.config.yaxis[o].min = s[o].min, i.config.yaxis[o].max = s[o].max);
      };
      i.config.yaxis.map(function(o, n) {
        i.globals.zoomed || s[n] !== void 0 ? r(n) : e.ctx.opts.yaxis[n] !== void 0 && (o.min = e.ctx.opts.yaxis[n].min, o.max = e.ctx.opts.yaxis[n].max);
      });
    } }]), y;
  }();
  mt = typeof window < "u" ? window : void 0, Ot = function(y, t) {
    var e = (this !== void 0 ? this : y).SVG = function(l) {
      if (e.supported)
        return l = new e.Doc(l), e.parser.draw || e.prepare(), l;
    };
    if (e.ns = "http://www.w3.org/2000/svg", e.xmlns = "http://www.w3.org/2000/xmlns/", e.xlink = "http://www.w3.org/1999/xlink", e.svgjs = "http://svgjs.dev", e.supported = !0, !e.supported)
      return !1;
    e.did = 1e3, e.eid = function(l) {
      return "Svgjs" + c(l) + e.did++;
    }, e.create = function(l) {
      var u = t.createElementNS(this.ns, l);
      return u.setAttribute("id", this.eid(l)), u;
    }, e.extend = function() {
      var l, u;
      u = (l = [].slice.call(arguments)).pop();
      for (var x = l.length - 1; x >= 0; x--)
        if (l[x])
          for (var v in u)
            l[x].prototype[v] = u[v];
      e.Set && e.Set.inherit && e.Set.inherit();
    }, e.invent = function(l) {
      var u = typeof l.create == "function" ? l.create : function() {
        this.constructor.call(this, e.create(l.create));
      };
      return l.inherit && (u.prototype = new l.inherit()), l.extend && e.extend(u, l.extend), l.construct && e.extend(l.parent || e.Container, l.construct), u;
    }, e.adopt = function(l) {
      return l ? l.instance ? l.instance : ((u = l.nodeName == "svg" ? l.parentNode instanceof y.SVGElement ? new e.Nested() : new e.Doc() : l.nodeName == "linearGradient" ? new e.Gradient("linear") : l.nodeName == "radialGradient" ? new e.Gradient("radial") : e[c(l.nodeName)] ? new e[c(l.nodeName)]() : new e.Element(l)).type = l.nodeName, u.node = l, l.instance = u, u instanceof e.Doc && u.namespace().defs(), u.setData(JSON.parse(l.getAttribute("svgjs:data")) || {}), u) : null;
      var u;
    }, e.prepare = function() {
      var l = t.getElementsByTagName("body")[0], u = (l ? new e.Doc(l) : e.adopt(t.documentElement).nested()).size(2, 0);
      e.parser = { body: l || t.documentElement, draw: u.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node, poly: u.polyline().node, path: u.path().node, native: e.create("svg") };
    }, e.parser = { native: e.create("svg") }, t.addEventListener("DOMContentLoaded", function() {
      e.parser.draw || e.prepare();
    }, !1), e.regex = { numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i, hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, rgb: /rgb\((\d+),(\d+),(\d+)\)/, reference: /#([a-z0-9\-_]+)/i, transforms: /\)\s*,?\s*/, whitespace: /\s/g, isHex: /^#[a-f0-9]{3,6}$/i, isRgb: /^rgb\(/, isCss: /[^:]+:[^;]+;?/, isBlank: /^(\s+)?$/, isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, isPercent: /^-?[\d\.]+%$/, isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i, delimiter: /[\s,]+/, hyphen: /([^e])\-/gi, pathLetters: /[MLHVCSQTAZ]/gi, isPathLetter: /[MLHVCSQTAZ]/i, numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi, dots: /\./g }, e.utils = { map: function(l, u) {
      for (var x = l.length, v = [], k = 0; k < x; k++)
        v.push(u(l[k]));
      return v;
    }, filter: function(l, u) {
      for (var x = l.length, v = [], k = 0; k < x; k++)
        u(l[k]) && v.push(l[k]);
      return v;
    }, filterSVGElements: function(l) {
      return this.filter(l, function(u) {
        return u instanceof y.SVGElement;
      });
    } }, e.defaults = { attrs: { "fill-opacity": 1, "stroke-opacity": 1, "stroke-width": 0, "stroke-linejoin": "miter", "stroke-linecap": "butt", fill: "#000000", stroke: "#000000", opacity: 1, x: 0, y: 0, cx: 0, cy: 0, width: 0, height: 0, r: 0, rx: 0, ry: 0, offset: 0, "stop-opacity": 1, "stop-color": "#000000", "font-size": 16, "font-family": "Helvetica, Arial, sans-serif", "text-anchor": "start" } }, e.Color = function(l) {
      var u, x;
      this.r = 0, this.g = 0, this.b = 0, l && (typeof l == "string" ? e.regex.isRgb.test(l) ? (u = e.regex.rgb.exec(l.replace(e.regex.whitespace, "")), this.r = parseInt(u[1]), this.g = parseInt(u[2]), this.b = parseInt(u[3])) : e.regex.isHex.test(l) && (u = e.regex.hex.exec((x = l).length == 4 ? ["#", x.substring(1, 2), x.substring(1, 2), x.substring(2, 3), x.substring(2, 3), x.substring(3, 4), x.substring(3, 4)].join("") : x), this.r = parseInt(u[1], 16), this.g = parseInt(u[2], 16), this.b = parseInt(u[3], 16)) : U(l) === "object" && (this.r = l.r, this.g = l.g, this.b = l.b));
    }, e.extend(e.Color, { toString: function() {
      return this.toHex();
    }, toHex: function() {
      return "#" + d(this.r) + d(this.g) + d(this.b);
    }, toRgb: function() {
      return "rgb(" + [this.r, this.g, this.b].join() + ")";
    }, brightness: function() {
      return this.r / 255 * 0.3 + this.g / 255 * 0.59 + this.b / 255 * 0.11;
    }, morph: function(l) {
      return this.destination = new e.Color(l), this;
    }, at: function(l) {
      return this.destination ? (l = l < 0 ? 0 : l > 1 ? 1 : l, new e.Color({ r: ~~(this.r + (this.destination.r - this.r) * l), g: ~~(this.g + (this.destination.g - this.g) * l), b: ~~(this.b + (this.destination.b - this.b) * l) })) : this;
    } }), e.Color.test = function(l) {
      return l += "", e.regex.isHex.test(l) || e.regex.isRgb.test(l);
    }, e.Color.isRgb = function(l) {
      return l && typeof l.r == "number" && typeof l.g == "number" && typeof l.b == "number";
    }, e.Color.isColor = function(l) {
      return e.Color.isRgb(l) || e.Color.test(l);
    }, e.Array = function(l, u) {
      (l = (l || []).valueOf()).length == 0 && u && (l = u.valueOf()), this.value = this.parse(l);
    }, e.extend(e.Array, { toString: function() {
      return this.value.join(" ");
    }, valueOf: function() {
      return this.value;
    }, parse: function(l) {
      return l = l.valueOf(), Array.isArray(l) ? l : this.split(l);
    } }), e.PointArray = function(l, u) {
      e.Array.call(this, l, u || [[0, 0]]);
    }, e.PointArray.prototype = new e.Array(), e.PointArray.prototype.constructor = e.PointArray;
    for (var i = { M: function(l, u, x) {
      return u.x = x.x = l[0], u.y = x.y = l[1], ["M", u.x, u.y];
    }, L: function(l, u) {
      return u.x = l[0], u.y = l[1], ["L", l[0], l[1]];
    }, H: function(l, u) {
      return u.x = l[0], ["H", l[0]];
    }, V: function(l, u) {
      return u.y = l[0], ["V", l[0]];
    }, C: function(l, u) {
      return u.x = l[4], u.y = l[5], ["C", l[0], l[1], l[2], l[3], l[4], l[5]];
    }, Q: function(l, u) {
      return u.x = l[2], u.y = l[3], ["Q", l[0], l[1], l[2], l[3]];
    }, S: function(l, u) {
      return u.x = l[2], u.y = l[3], ["S", l[0], l[1], l[2], l[3]];
    }, Z: function(l, u, x) {
      return u.x = x.x, u.y = x.y, ["Z"];
    } }, a = "mlhvqtcsaz".split(""), s = 0, r = a.length; s < r; ++s)
      i[a[s]] = /* @__PURE__ */ function(l) {
        return function(u, x, v) {
          if (l == "H")
            u[0] = u[0] + x.x;
          else if (l == "V")
            u[0] = u[0] + x.y;
          else if (l == "A")
            u[5] = u[5] + x.x, u[6] = u[6] + x.y;
          else
            for (var k = 0, S = u.length; k < S; ++k)
              u[k] = u[k] + (k % 2 ? x.y : x.x);
          if (i && typeof i[l] == "function")
            return i[l](u, x, v);
        };
      }(a[s].toUpperCase());
    e.PathArray = function(l, u) {
      e.Array.call(this, l, u || [["M", 0, 0]]);
    }, e.PathArray.prototype = new e.Array(), e.PathArray.prototype.constructor = e.PathArray, e.extend(e.PathArray, { toString: function() {
      return function(l) {
        for (var u = 0, x = l.length, v = ""; u < x; u++)
          v += l[u][0], l[u][1] != null && (v += l[u][1], l[u][2] != null && (v += " ", v += l[u][2], l[u][3] != null && (v += " ", v += l[u][3], v += " ", v += l[u][4], l[u][5] != null && (v += " ", v += l[u][5], v += " ", v += l[u][6], l[u][7] != null && (v += " ", v += l[u][7])))));
        return v + " ";
      }(this.value);
    }, move: function(l, u) {
      var x = this.bbox();
      return x.x, x.y, this;
    }, at: function(l) {
      if (!this.destination)
        return this;
      for (var u = this.value, x = this.destination.value, v = [], k = new e.PathArray(), S = 0, C = u.length; S < C; S++) {
        v[S] = [u[S][0]];
        for (var L = 1, M = u[S].length; L < M; L++)
          v[S][L] = u[S][L] + (x[S][L] - u[S][L]) * l;
        v[S][0] === "A" && (v[S][4] = +(v[S][4] != 0), v[S][5] = +(v[S][5] != 0));
      }
      return k.value = v, k;
    }, parse: function(l) {
      if (l instanceof e.PathArray)
        return l.valueOf();
      var u, x = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 };
      l = typeof l == "string" ? l.replace(e.regex.numbersWithDots, n).replace(e.regex.pathLetters, " $& ").replace(e.regex.hyphen, "$1 -").trim().split(e.regex.delimiter) : l.reduce(function(M, T) {
        return [].concat.call(M, T);
      }, []);
      var v = [], k = new e.Point(), S = new e.Point(), C = 0, L = l.length;
      do
        e.regex.isPathLetter.test(l[C]) ? (u = l[C], ++C) : u == "M" ? u = "L" : u == "m" && (u = "l"), v.push(i[u].call(null, l.slice(C, C += x[u.toUpperCase()]).map(parseFloat), k, S));
      while (L > C);
      return v;
    }, bbox: function() {
      return e.parser.draw || e.prepare(), e.parser.path.setAttribute("d", this.toString()), e.parser.path.getBBox();
    } }), e.Number = e.invent({ create: function(l, u) {
      this.value = 0, this.unit = u || "", typeof l == "number" ? this.value = isNaN(l) ? 0 : isFinite(l) ? l : l < 0 ? -34e37 : 34e37 : typeof l == "string" ? (u = l.match(e.regex.numberAndUnit)) && (this.value = parseFloat(u[1]), u[5] == "%" ? this.value /= 100 : u[5] == "s" && (this.value *= 1e3), this.unit = u[5]) : l instanceof e.Number && (this.value = l.valueOf(), this.unit = l.unit);
    }, extend: { toString: function() {
      return (this.unit == "%" ? ~~(1e8 * this.value) / 1e6 : this.unit == "s" ? this.value / 1e3 : this.value) + this.unit;
    }, toJSON: function() {
      return this.toString();
    }, valueOf: function() {
      return this.value;
    }, plus: function(l) {
      return l = new e.Number(l), new e.Number(this + l, this.unit || l.unit);
    }, minus: function(l) {
      return l = new e.Number(l), new e.Number(this - l, this.unit || l.unit);
    }, times: function(l) {
      return l = new e.Number(l), new e.Number(this * l, this.unit || l.unit);
    }, divide: function(l) {
      return l = new e.Number(l), new e.Number(this / l, this.unit || l.unit);
    }, to: function(l) {
      var u = new e.Number(this);
      return typeof l == "string" && (u.unit = l), u;
    }, morph: function(l) {
      return this.destination = new e.Number(l), l.relative && (this.destination.value += this.value), this;
    }, at: function(l) {
      return this.destination ? new e.Number(this.destination).minus(this).times(l).plus(this) : this;
    } } }), e.Element = e.invent({ create: function(l) {
      this._stroke = e.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = l) && (this.type = l.nodeName, this.node.instance = this, this._stroke = l.getAttribute("stroke") || this._stroke);
    }, extend: { x: function(l) {
      return this.attr("x", l);
    }, y: function(l) {
      return this.attr("y", l);
    }, cx: function(l) {
      return l == null ? this.x() + this.width() / 2 : this.x(l - this.width() / 2);
    }, cy: function(l) {
      return l == null ? this.y() + this.height() / 2 : this.y(l - this.height() / 2);
    }, move: function(l, u) {
      return this.x(l).y(u);
    }, center: function(l, u) {
      return this.cx(l).cy(u);
    }, width: function(l) {
      return this.attr("width", l);
    }, height: function(l) {
      return this.attr("height", l);
    }, size: function(l, u) {
      var x = g(this, l, u);
      return this.width(new e.Number(x.width)).height(new e.Number(x.height));
    }, clone: function(l) {
      this.writeDataToDom();
      var u = b(this.node.cloneNode(!0));
      return l ? l.add(u) : this.after(u), u;
    }, remove: function() {
      return this.parent() && this.parent().removeElement(this), this;
    }, replace: function(l) {
      return this.after(l).remove(), l;
    }, addTo: function(l) {
      return l.put(this);
    }, putIn: function(l) {
      return l.add(this);
    }, id: function(l) {
      return this.attr("id", l);
    }, show: function() {
      return this.style("display", "");
    }, hide: function() {
      return this.style("display", "none");
    }, visible: function() {
      return this.style("display") != "none";
    }, toString: function() {
      return this.attr("id");
    }, classes: function() {
      var l = this.attr("class");
      return l == null ? [] : l.trim().split(e.regex.delimiter);
    }, hasClass: function(l) {
      return this.classes().indexOf(l) != -1;
    }, addClass: function(l) {
      if (!this.hasClass(l)) {
        var u = this.classes();
        u.push(l), this.attr("class", u.join(" "));
      }
      return this;
    }, removeClass: function(l) {
      return this.hasClass(l) && this.attr("class", this.classes().filter(function(u) {
        return u != l;
      }).join(" ")), this;
    }, toggleClass: function(l) {
      return this.hasClass(l) ? this.removeClass(l) : this.addClass(l);
    }, reference: function(l) {
      return e.get(this.attr(l));
    }, parent: function(l) {
      var u = this;
      if (!u.node.parentNode)
        return null;
      if (u = e.adopt(u.node.parentNode), !l)
        return u;
      for (; u && u.node instanceof y.SVGElement; ) {
        if (typeof l == "string" ? u.matches(l) : u instanceof l)
          return u;
        if (!u.node.parentNode || u.node.parentNode.nodeName == "#document")
          return null;
        u = e.adopt(u.node.parentNode);
      }
    }, doc: function() {
      return this instanceof e.Doc ? this : this.parent(e.Doc);
    }, parents: function(l) {
      var u = [], x = this;
      do {
        if (!(x = x.parent(l)) || !x.node)
          break;
        u.push(x);
      } while (x.parent);
      return u;
    }, matches: function(l) {
      return function(u, x) {
        return (u.matches || u.matchesSelector || u.msMatchesSelector || u.mozMatchesSelector || u.webkitMatchesSelector || u.oMatchesSelector).call(u, x);
      }(this.node, l);
    }, native: function() {
      return this.node;
    }, svg: function(l) {
      var u = t.createElement("svg");
      if (!(l && this instanceof e.Parent))
        return u.appendChild(l = t.createElement("svg")), this.writeDataToDom(), l.appendChild(this.node.cloneNode(!0)), u.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
      u.innerHTML = "<svg>" + l.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
      for (var x = 0, v = u.firstChild.childNodes.length; x < v; x++)
        this.node.appendChild(u.firstChild.firstChild);
      return this;
    }, writeDataToDom: function() {
      return (this.each || this.lines) && (this.each ? this : this.lines()).each(function() {
        this.writeDataToDom();
      }), this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this;
    }, setData: function(l) {
      return this.dom = l, this;
    }, is: function(l) {
      return function(u, x) {
        return u instanceof x;
      }(this, l);
    } } }), e.easing = { "-": function(l) {
      return l;
    }, "<>": function(l) {
      return -Math.cos(l * Math.PI) / 2 + 0.5;
    }, ">": function(l) {
      return Math.sin(l * Math.PI / 2);
    }, "<": function(l) {
      return 1 - Math.cos(l * Math.PI / 2);
    } }, e.morph = function(l) {
      return function(u, x) {
        return new e.MorphObj(u, x).at(l);
      };
    }, e.Situation = e.invent({ create: function(l) {
      this.init = !1, this.reversed = !1, this.reversing = !1, this.duration = new e.Number(l.duration).valueOf(), this.delay = new e.Number(l.delay).valueOf(), this.start = +/* @__PURE__ */ new Date() + this.delay, this.finish = this.start + this.duration, this.ease = l.ease, this.loop = 0, this.loops = !1, this.animations = {}, this.attrs = {}, this.styles = {}, this.transforms = [], this.once = {};
    } }), e.FX = e.invent({ create: function(l) {
      this._target = l, this.situations = [], this.active = !1, this.situation = null, this.paused = !1, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1;
    }, extend: { animate: function(l, u, x) {
      U(l) === "object" && (u = l.ease, x = l.delay, l = l.duration);
      var v = new e.Situation({ duration: l || 1e3, delay: x || 0, ease: e.easing[u || "-"] || u });
      return this.queue(v), this;
    }, target: function(l) {
      return l && l instanceof e.Element ? (this._target = l, this) : this._target;
    }, timeToAbsPos: function(l) {
      return (l - this.situation.start) / (this.situation.duration / this._speed);
    }, absPosToTime: function(l) {
      return this.situation.duration / this._speed * l + this.situation.start;
    }, startAnimFrame: function() {
      this.stopAnimFrame(), this.animationFrame = y.requestAnimationFrame((function() {
        this.step();
      }).bind(this));
    }, stopAnimFrame: function() {
      y.cancelAnimationFrame(this.animationFrame);
    }, start: function() {
      return !this.active && this.situation && (this.active = !0, this.startCurrent()), this;
    }, startCurrent: function() {
      return this.situation.start = +/* @__PURE__ */ new Date() + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step();
    }, queue: function(l) {
      return (typeof l == "function" || l instanceof e.Situation) && this.situations.push(l), this.situation || (this.situation = this.situations.shift()), this;
    }, dequeue: function() {
      return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof e.Situation ? this.start() : this.situation.call(this)), this;
    }, initAnimations: function() {
      var l, u = this.situation;
      if (u.init)
        return this;
      for (var x in u.animations) {
        l = this.target()[x](), Array.isArray(l) || (l = [l]), Array.isArray(u.animations[x]) || (u.animations[x] = [u.animations[x]]);
        for (var v = l.length; v--; )
          u.animations[x][v] instanceof e.Number && (l[v] = new e.Number(l[v])), u.animations[x][v] = l[v].morph(u.animations[x][v]);
      }
      for (var x in u.attrs)
        u.attrs[x] = new e.MorphObj(this.target().attr(x), u.attrs[x]);
      for (var x in u.styles)
        u.styles[x] = new e.MorphObj(this.target().style(x), u.styles[x]);
      return u.initialTransformation = this.target().matrixify(), u.init = !0, this;
    }, clearQueue: function() {
      return this.situations = [], this;
    }, clearCurrent: function() {
      return this.situation = null, this;
    }, stop: function(l, u) {
      var x = this.active;
      return this.active = !1, u && this.clearQueue(), l && this.situation && (!x && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent();
    }, after: function(l) {
      var u = this.last();
      return this.target().on("finished.fx", function x(v) {
        v.detail.situation == u && (l.call(this, u), this.off("finished.fx", x));
      }), this._callStart();
    }, during: function(l) {
      var u = this.last(), x = function(v) {
        v.detail.situation == u && l.call(this, v.detail.pos, e.morph(v.detail.pos), v.detail.eased, u);
      };
      return this.target().off("during.fx", x).on("during.fx", x), this.after(function() {
        this.off("during.fx", x);
      }), this._callStart();
    }, afterAll: function(l) {
      var u = function x(v) {
        l.call(this), this.off("allfinished.fx", x);
      };
      return this.target().off("allfinished.fx", u).on("allfinished.fx", u), this._callStart();
    }, last: function() {
      return this.situations.length ? this.situations[this.situations.length - 1] : this.situation;
    }, add: function(l, u, x) {
      return this.last()[x || "animations"][l] = u, this._callStart();
    }, step: function(l) {
      var u, x, v;
      l || (this.absPos = this.timeToAbsPos(+/* @__PURE__ */ new Date())), this.situation.loops !== !1 ? (u = Math.max(this.absPos, 0), x = Math.floor(u), this.situation.loops === !0 || x < this.situation.loops ? (this.pos = u - x, v = this.situation.loop, this.situation.loop = x) : (this.absPos = this.situation.loops, this.pos = 1, v = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != !!((this.situation.loop - v) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos), this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
      var k = this.situation.ease(this.pos);
      for (var S in this.situation.once)
        S > this.lastPos && S <= k && (this.situation.once[S].call(this.target(), this.pos, k), delete this.situation.once[S]);
      return this.active && this.target().fire("during", { pos: this.pos, eased: k, fx: this, situation: this.situation }), this.situation ? (this.eachAt(), this.pos == 1 && !this.situation.reversed || this.situation.reversed && this.pos == 0 ? (this.stopAnimFrame(), this.target().fire("finished", { fx: this, situation: this.situation }), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), this.active = !1)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = k, this) : this;
    }, eachAt: function() {
      var l, u = this, x = this.target(), v = this.situation;
      for (var k in v.animations)
        l = [].concat(v.animations[k]).map(function(L) {
          return typeof L != "string" && L.at ? L.at(v.ease(u.pos), u.pos) : L;
        }), x[k].apply(x, l);
      for (var k in v.attrs)
        l = [k].concat(v.attrs[k]).map(function(M) {
          return typeof M != "string" && M.at ? M.at(v.ease(u.pos), u.pos) : M;
        }), x.attr.apply(x, l);
      for (var k in v.styles)
        l = [k].concat(v.styles[k]).map(function(M) {
          return typeof M != "string" && M.at ? M.at(v.ease(u.pos), u.pos) : M;
        }), x.style.apply(x, l);
      if (v.transforms.length) {
        l = v.initialTransformation, k = 0;
        for (var S = v.transforms.length; k < S; k++) {
          var C = v.transforms[k];
          C instanceof e.Matrix ? l = C.relative ? l.multiply(new e.Matrix().morph(C).at(v.ease(this.pos))) : l.morph(C).at(v.ease(this.pos)) : (C.relative || C.undo(l.extract()), l = l.multiply(C.at(v.ease(this.pos))));
        }
        x.matrix(l);
      }
      return this;
    }, once: function(l, u, x) {
      var v = this.last();
      return x || (l = v.ease(l)), v.once[l] = u, this;
    }, _callStart: function() {
      return setTimeout((function() {
        this.start();
      }).bind(this), 0), this;
    } }, parent: e.Element, construct: { animate: function(l, u, x) {
      return (this.fx || (this.fx = new e.FX(this))).animate(l, u, x);
    }, delay: function(l) {
      return (this.fx || (this.fx = new e.FX(this))).delay(l);
    }, stop: function(l, u) {
      return this.fx && this.fx.stop(l, u), this;
    }, finish: function() {
      return this.fx && this.fx.finish(), this;
    } } }), e.MorphObj = e.invent({ create: function(l, u) {
      return e.Color.isColor(u) ? new e.Color(l).morph(u) : e.regex.delimiter.test(l) ? e.regex.pathLetters.test(l) ? new e.PathArray(l).morph(u) : new e.Array(l).morph(u) : e.regex.numberAndUnit.test(u) ? new e.Number(l).morph(u) : (this.value = l, void (this.destination = u));
    }, extend: { at: function(l, u) {
      return u < 1 ? this.value : this.destination;
    }, valueOf: function() {
      return this.value;
    } } }), e.extend(e.FX, { attr: function(l, u, x) {
      if (U(l) === "object")
        for (var v in l)
          this.attr(v, l[v]);
      else
        this.add(l, u, "attrs");
      return this;
    }, plot: function(l, u, x, v) {
      return arguments.length == 4 ? this.plot([l, u, x, v]) : this.add("plot", new (this.target()).morphArray(l));
    } }), e.Box = e.invent({ create: function(l, u, x, v) {
      if (!(U(l) !== "object" || l instanceof e.Element))
        return e.Box.call(this, l.left != null ? l.left : l.x, l.top != null ? l.top : l.y, l.width, l.height);
      var k;
      arguments.length == 4 && (this.x = l, this.y = u, this.width = x, this.height = v), (k = this).x == null && (k.x = 0, k.y = 0, k.width = 0, k.height = 0), k.w = k.width, k.h = k.height, k.x2 = k.x + k.width, k.y2 = k.y + k.height, k.cx = k.x + k.width / 2, k.cy = k.y + k.height / 2;
    } }), e.BBox = e.invent({ create: function(l) {
      if (e.Box.apply(this, [].slice.call(arguments)), l instanceof e.Element) {
        var u;
        try {
          if (!t.documentElement.contains) {
            for (var x = l.node; x.parentNode; )
              x = x.parentNode;
            if (x != t)
              throw new Error("Element not in the dom");
          }
          u = l.node.getBBox();
        } catch {
          if (l instanceof e.Shape) {
            e.parser.draw || e.prepare();
            var v = l.clone(e.parser.draw.instance).show();
            v && v.node && typeof v.node.getBBox == "function" && (u = v.node.getBBox()), v && typeof v.remove == "function" && v.remove();
          } else
            u = { x: l.node.clientLeft, y: l.node.clientTop, width: l.node.clientWidth, height: l.node.clientHeight };
        }
        e.Box.call(this, u);
      }
    }, inherit: e.Box, parent: e.Element, construct: { bbox: function() {
      return new e.BBox(this);
    } } }), e.BBox.prototype.constructor = e.BBox, e.Matrix = e.invent({ create: function(l) {
      var u = f([1, 0, 0, 1, 0, 0]);
      l = l === null ? u : l instanceof e.Element ? l.matrixify() : typeof l == "string" ? f(l.split(e.regex.delimiter).map(parseFloat)) : arguments.length == 6 ? f([].slice.call(arguments)) : Array.isArray(l) ? f(l) : l && U(l) === "object" ? l : u;
      for (var x = w.length - 1; x >= 0; --x)
        this[w[x]] = l[w[x]] != null ? l[w[x]] : u[w[x]];
    }, extend: { extract: function() {
      var l = p(this, 0, 1);
      p(this, 1, 0);
      var u = 180 / Math.PI * Math.atan2(l.y, l.x) - 90;
      return { x: this.e, y: this.f, transformedX: (this.e * Math.cos(u * Math.PI / 180) + this.f * Math.sin(u * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b), transformedY: (this.f * Math.cos(u * Math.PI / 180) + this.e * Math.sin(-u * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d), rotation: u, a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f, matrix: new e.Matrix(this) };
    }, clone: function() {
      return new e.Matrix(this);
    }, morph: function(l) {
      return this.destination = new e.Matrix(l), this;
    }, multiply: function(l) {
      return new e.Matrix(this.native().multiply(function(u) {
        return u instanceof e.Matrix || (u = new e.Matrix(u)), u;
      }(l).native()));
    }, inverse: function() {
      return new e.Matrix(this.native().inverse());
    }, translate: function(l, u) {
      return new e.Matrix(this.native().translate(l || 0, u || 0));
    }, native: function() {
      for (var l = e.parser.native.createSVGMatrix(), u = w.length - 1; u >= 0; u--)
        l[w[u]] = this[w[u]];
      return l;
    }, toString: function() {
      return "matrix(" + m(this.a) + "," + m(this.b) + "," + m(this.c) + "," + m(this.d) + "," + m(this.e) + "," + m(this.f) + ")";
    } }, parent: e.Element, construct: { ctm: function() {
      return new e.Matrix(this.node.getCTM());
    }, screenCTM: function() {
      if (this instanceof e.Nested) {
        var l = this.rect(1, 1), u = l.node.getScreenCTM();
        return l.remove(), new e.Matrix(u);
      }
      return new e.Matrix(this.node.getScreenCTM());
    } } }), e.Point = e.invent({ create: function(l, u) {
      var x;
      x = Array.isArray(l) ? { x: l[0], y: l[1] } : U(l) === "object" ? { x: l.x, y: l.y } : l != null ? { x: l, y: u ?? l } : { x: 0, y: 0 }, this.x = x.x, this.y = x.y;
    }, extend: { clone: function() {
      return new e.Point(this);
    }, morph: function(l, u) {
      return this.destination = new e.Point(l, u), this;
    } } }), e.extend(e.Element, { point: function(l, u) {
      return new e.Point(l, u).transform(this.screenCTM().inverse());
    } }), e.extend(e.Element, { attr: function(l, u, x) {
      if (l == null) {
        for (l = {}, x = (u = this.node.attributes).length - 1; x >= 0; x--)
          l[u[x].nodeName] = e.regex.isNumber.test(u[x].nodeValue) ? parseFloat(u[x].nodeValue) : u[x].nodeValue;
        return l;
      }
      if (U(l) === "object")
        for (var v in l)
          this.attr(v, l[v]);
      else if (u === null)
        this.node.removeAttribute(l);
      else {
        if (u == null)
          return (u = this.node.getAttribute(l)) == null ? e.defaults.attrs[l] : e.regex.isNumber.test(u) ? parseFloat(u) : u;
        l == "stroke-width" ? this.attr("stroke", parseFloat(u) > 0 ? this._stroke : null) : l == "stroke" && (this._stroke = u), l != "fill" && l != "stroke" || (e.regex.isImage.test(u) && (u = this.doc().defs().image(u, 0, 0)), u instanceof e.Image && (u = this.doc().defs().pattern(0, 0, function() {
          this.add(u);
        }))), typeof u == "number" ? u = new e.Number(u) : e.Color.isColor(u) ? u = new e.Color(u) : Array.isArray(u) && (u = new e.Array(u)), l == "leading" ? this.leading && this.leading(u) : typeof x == "string" ? this.node.setAttributeNS(x, l, u.toString()) : this.node.setAttribute(l, u.toString()), !this.rebuild || l != "font-size" && l != "x" || this.rebuild(l, u);
      }
      return this;
    } }), e.extend(e.Element, { transform: function(l, u) {
      var x;
      return U(l) !== "object" ? (x = new e.Matrix(this).extract(), typeof l == "string" ? x[l] : x) : (x = new e.Matrix(this), u = !!u || !!l.relative, l.a != null && (x = u ? x.multiply(new e.Matrix(l)) : new e.Matrix(l)), this.attr("transform", x));
    } }), e.extend(e.Element, { untransform: function() {
      return this.attr("transform", null);
    }, matrixify: function() {
      return (this.attr("transform") || "").split(e.regex.transforms).slice(0, -1).map(function(l) {
        var u = l.trim().split("(");
        return [u[0], u[1].split(e.regex.delimiter).map(function(x) {
          return parseFloat(x);
        })];
      }).reduce(function(l, u) {
        return u[0] == "matrix" ? l.multiply(f(u[1])) : l[u[0]].apply(l, u[1]);
      }, new e.Matrix());
    }, toParent: function(l) {
      if (this == l)
        return this;
      var u = this.screenCTM(), x = l.screenCTM().inverse();
      return this.addTo(l).untransform().transform(x.multiply(u)), this;
    }, toDoc: function() {
      return this.toParent(this.doc());
    } }), e.Transformation = e.invent({ create: function(l, u) {
      if (arguments.length > 1 && typeof u != "boolean")
        return this.constructor.call(this, [].slice.call(arguments));
      if (Array.isArray(l))
        for (var x = 0, v = this.arguments.length; x < v; ++x)
          this[this.arguments[x]] = l[x];
      else if (l && U(l) === "object")
        for (x = 0, v = this.arguments.length; x < v; ++x)
          this[this.arguments[x]] = l[this.arguments[x]];
      this.inversed = !1, u === !0 && (this.inversed = !0);
    } }), e.Translate = e.invent({ parent: e.Matrix, inherit: e.Transformation, create: function(l, u) {
      this.constructor.apply(this, [].slice.call(arguments));
    }, extend: { arguments: ["transformedX", "transformedY"], method: "translate" } }), e.extend(e.Element, { style: function(l, u) {
      if (arguments.length == 0)
        return this.node.style.cssText || "";
      if (arguments.length < 2)
        if (U(l) === "object")
          for (var x in l)
            this.style(x, l[x]);
        else {
          if (!e.regex.isCss.test(l))
            return this.node.style[h(l)];
          for (l = l.split(/\s*;\s*/).filter(function(v) {
            return !!v;
          }).map(function(v) {
            return v.split(/\s*:\s*/);
          }); u = l.pop(); )
            this.style(u[0], u[1]);
        }
      else
        this.node.style[h(l)] = u === null || e.regex.isBlank.test(u) ? "" : u;
      return this;
    } }), e.Parent = e.invent({ create: function(l) {
      this.constructor.call(this, l);
    }, inherit: e.Element, extend: { children: function() {
      return e.utils.map(e.utils.filterSVGElements(this.node.childNodes), function(l) {
        return e.adopt(l);
      });
    }, add: function(l, u) {
      return u == null ? this.node.appendChild(l.node) : l.node != this.node.childNodes[u] && this.node.insertBefore(l.node, this.node.childNodes[u]), this;
    }, put: function(l, u) {
      return this.add(l, u), l;
    }, has: function(l) {
      return this.index(l) >= 0;
    }, index: function(l) {
      return [].slice.call(this.node.childNodes).indexOf(l.node);
    }, get: function(l) {
      return e.adopt(this.node.childNodes[l]);
    }, first: function() {
      return this.get(0);
    }, last: function() {
      return this.get(this.node.childNodes.length - 1);
    }, each: function(l, u) {
      for (var x = this.children(), v = 0, k = x.length; v < k; v++)
        x[v] instanceof e.Element && l.apply(x[v], [v, x]), u && x[v] instanceof e.Container && x[v].each(l, u);
      return this;
    }, removeElement: function(l) {
      return this.node.removeChild(l.node), this;
    }, clear: function() {
      for (; this.node.hasChildNodes(); )
        this.node.removeChild(this.node.lastChild);
      return delete this._defs, this;
    }, defs: function() {
      return this.doc().defs();
    } } }), e.extend(e.Parent, { ungroup: function(l, u) {
      return u === 0 || this instanceof e.Defs || this.node == e.parser.draw || (l = l || (this instanceof e.Doc ? this : this.parent(e.Parent)), u = u || 1 / 0, this.each(function() {
        return this instanceof e.Defs ? this : this instanceof e.Parent ? this.ungroup(l, u - 1) : this.toParent(l);
      }), this.node.firstChild || this.remove()), this;
    }, flatten: function(l, u) {
      return this.ungroup(l, u);
    } }), e.Container = e.invent({ create: function(l) {
      this.constructor.call(this, l);
    }, inherit: e.Parent }), e.ViewBox = e.invent({ parent: e.Container, construct: {} }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach(function(l) {
      e.Element.prototype[l] = function(u) {
        return e.on(this.node, l, u), this;
      };
    }), e.listeners = [], e.handlerMap = [], e.listenerId = 0, e.on = function(l, u, x, v, k) {
      var S = x.bind(v || l.instance || l), C = (e.handlerMap.indexOf(l) + 1 || e.handlerMap.push(l)) - 1, L = u.split(".")[0], M = u.split(".")[1] || "*";
      e.listeners[C] = e.listeners[C] || {}, e.listeners[C][L] = e.listeners[C][L] || {}, e.listeners[C][L][M] = e.listeners[C][L][M] || {}, x._svgjsListenerId || (x._svgjsListenerId = ++e.listenerId), e.listeners[C][L][M][x._svgjsListenerId] = S, l.addEventListener(L, S, k || { passive: !0 });
    }, e.off = function(l, u, x) {
      var v = e.handlerMap.indexOf(l), k = u && u.split(".")[0], S = u && u.split(".")[1], C = "";
      if (v != -1)
        if (x) {
          if (typeof x == "function" && (x = x._svgjsListenerId), !x)
            return;
          e.listeners[v][k] && e.listeners[v][k][S || "*"] && (l.removeEventListener(k, e.listeners[v][k][S || "*"][x], !1), delete e.listeners[v][k][S || "*"][x]);
        } else if (S && k) {
          if (e.listeners[v][k] && e.listeners[v][k][S]) {
            for (var L in e.listeners[v][k][S])
              e.off(l, [k, S].join("."), L);
            delete e.listeners[v][k][S];
          }
        } else if (S)
          for (var M in e.listeners[v])
            for (var C in e.listeners[v][M])
              S === C && e.off(l, [M, S].join("."));
        else if (k) {
          if (e.listeners[v][k]) {
            for (var C in e.listeners[v][k])
              e.off(l, [k, C].join("."));
            delete e.listeners[v][k];
          }
        } else {
          for (var M in e.listeners[v])
            e.off(l, M);
          delete e.listeners[v], delete e.handlerMap[v];
        }
    }, e.extend(e.Element, { on: function(l, u, x, v) {
      return e.on(this.node, l, u, x, v), this;
    }, off: function(l, u) {
      return e.off(this.node, l, u), this;
    }, fire: function(l, u) {
      return l instanceof y.Event ? this.node.dispatchEvent(l) : this.node.dispatchEvent(l = new e.CustomEvent(l, { detail: u, cancelable: !0 })), this._event = l, this;
    }, event: function() {
      return this._event;
    } }), e.Defs = e.invent({ create: "defs", inherit: e.Container }), e.G = e.invent({ create: "g", inherit: e.Container, extend: { x: function(l) {
      return l == null ? this.transform("x") : this.transform({ x: l - this.x() }, !0);
    } }, construct: { group: function() {
      return this.put(new e.G());
    } } }), e.Doc = e.invent({ create: function(l) {
      l && ((l = typeof l == "string" ? t.getElementById(l) : l).nodeName == "svg" ? this.constructor.call(this, l) : (this.constructor.call(this, e.create("svg")), l.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs());
    }, inherit: e.Container, extend: { namespace: function() {
      return this.attr({ xmlns: e.ns, version: "1.1" }).attr("xmlns:xlink", e.xlink, e.xmlns).attr("xmlns:svgjs", e.svgjs, e.xmlns);
    }, defs: function() {
      var l;
      return this._defs || ((l = this.node.getElementsByTagName("defs")[0]) ? this._defs = e.adopt(l) : this._defs = new e.Defs(), this.node.appendChild(this._defs.node)), this._defs;
    }, parent: function() {
      return this.node.parentNode && this.node.parentNode.nodeName != "#document" ? this.node.parentNode : null;
    }, remove: function() {
      return this.parent() && this.parent().removeChild(this.node), this;
    }, clear: function() {
      for (; this.node.hasChildNodes(); )
        this.node.removeChild(this.node.lastChild);
      return delete this._defs, e.parser.draw && !e.parser.draw.parentNode && this.node.appendChild(e.parser.draw), this;
    }, clone: function(l) {
      this.writeDataToDom();
      var u = this.node, x = b(u.cloneNode(!0));
      return l ? (l.node || l).appendChild(x.node) : u.parentNode.insertBefore(x.node, u.nextSibling), x;
    } } }), e.extend(e.Element, {}), e.Gradient = e.invent({ create: function(l) {
      this.constructor.call(this, e.create(l + "Gradient")), this.type = l;
    }, inherit: e.Container, extend: { at: function(l, u, x) {
      return this.put(new e.Stop()).update(l, u, x);
    }, update: function(l) {
      return this.clear(), typeof l == "function" && l.call(this, this), this;
    }, fill: function() {
      return "url(#" + this.id() + ")";
    }, toString: function() {
      return this.fill();
    }, attr: function(l, u, x) {
      return l == "transform" && (l = "gradientTransform"), e.Container.prototype.attr.call(this, l, u, x);
    } }, construct: { gradient: function(l, u) {
      return this.defs().gradient(l, u);
    } } }), e.extend(e.Gradient, e.FX, { from: function(l, u) {
      return (this._target || this).type == "radial" ? this.attr({ fx: new e.Number(l), fy: new e.Number(u) }) : this.attr({ x1: new e.Number(l), y1: new e.Number(u) });
    }, to: function(l, u) {
      return (this._target || this).type == "radial" ? this.attr({ cx: new e.Number(l), cy: new e.Number(u) }) : this.attr({ x2: new e.Number(l), y2: new e.Number(u) });
    } }), e.extend(e.Defs, { gradient: function(l, u) {
      return this.put(new e.Gradient(l)).update(u);
    } }), e.Stop = e.invent({ create: "stop", inherit: e.Element, extend: { update: function(l) {
      return (typeof l == "number" || l instanceof e.Number) && (l = { offset: arguments[0], color: arguments[1], opacity: arguments[2] }), l.opacity != null && this.attr("stop-opacity", l.opacity), l.color != null && this.attr("stop-color", l.color), l.offset != null && this.attr("offset", new e.Number(l.offset)), this;
    } } }), e.Pattern = e.invent({ create: "pattern", inherit: e.Container, extend: { fill: function() {
      return "url(#" + this.id() + ")";
    }, update: function(l) {
      return this.clear(), typeof l == "function" && l.call(this, this), this;
    }, toString: function() {
      return this.fill();
    }, attr: function(l, u, x) {
      return l == "transform" && (l = "patternTransform"), e.Container.prototype.attr.call(this, l, u, x);
    } }, construct: { pattern: function(l, u, x) {
      return this.defs().pattern(l, u, x);
    } } }), e.extend(e.Defs, { pattern: function(l, u, x) {
      return this.put(new e.Pattern()).update(x).attr({ x: 0, y: 0, width: l, height: u, patternUnits: "userSpaceOnUse" });
    } }), e.Shape = e.invent({ create: function(l) {
      this.constructor.call(this, l);
    }, inherit: e.Element }), e.Symbol = e.invent({ create: "symbol", inherit: e.Container, construct: { symbol: function() {
      return this.put(new e.Symbol());
    } } }), e.Use = e.invent({ create: "use", inherit: e.Shape, extend: { element: function(l, u) {
      return this.attr("href", (u || "") + "#" + l, e.xlink);
    } }, construct: { use: function(l, u) {
      return this.put(new e.Use()).element(l, u);
    } } }), e.Rect = e.invent({ create: "rect", inherit: e.Shape, construct: { rect: function(l, u) {
      return this.put(new e.Rect()).size(l, u);
    } } }), e.Circle = e.invent({ create: "circle", inherit: e.Shape, construct: { circle: function(l) {
      return this.put(new e.Circle()).rx(new e.Number(l).divide(2)).move(0, 0);
    } } }), e.extend(e.Circle, e.FX, { rx: function(l) {
      return this.attr("r", l);
    }, ry: function(l) {
      return this.rx(l);
    } }), e.Ellipse = e.invent({ create: "ellipse", inherit: e.Shape, construct: { ellipse: function(l, u) {
      return this.put(new e.Ellipse()).size(l, u).move(0, 0);
    } } }), e.extend(e.Ellipse, e.Rect, e.FX, { rx: function(l) {
      return this.attr("rx", l);
    }, ry: function(l) {
      return this.attr("ry", l);
    } }), e.extend(e.Circle, e.Ellipse, { x: function(l) {
      return l == null ? this.cx() - this.rx() : this.cx(l + this.rx());
    }, y: function(l) {
      return l == null ? this.cy() - this.ry() : this.cy(l + this.ry());
    }, cx: function(l) {
      return l == null ? this.attr("cx") : this.attr("cx", l);
    }, cy: function(l) {
      return l == null ? this.attr("cy") : this.attr("cy", l);
    }, width: function(l) {
      return l == null ? 2 * this.rx() : this.rx(new e.Number(l).divide(2));
    }, height: function(l) {
      return l == null ? 2 * this.ry() : this.ry(new e.Number(l).divide(2));
    }, size: function(l, u) {
      var x = g(this, l, u);
      return this.rx(new e.Number(x.width).divide(2)).ry(new e.Number(x.height).divide(2));
    } }), e.Line = e.invent({ create: "line", inherit: e.Shape, extend: { array: function() {
      return new e.PointArray([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
    }, plot: function(l, u, x, v) {
      return l == null ? this.array() : (l = u !== void 0 ? { x1: l, y1: u, x2: x, y2: v } : new e.PointArray(l).toLine(), this.attr(l));
    }, move: function(l, u) {
      return this.attr(this.array().move(l, u).toLine());
    }, size: function(l, u) {
      var x = g(this, l, u);
      return this.attr(this.array().size(x.width, x.height).toLine());
    } }, construct: { line: function(l, u, x, v) {
      return e.Line.prototype.plot.apply(this.put(new e.Line()), l != null ? [l, u, x, v] : [0, 0, 0, 0]);
    } } }), e.Polyline = e.invent({ create: "polyline", inherit: e.Shape, construct: { polyline: function(l) {
      return this.put(new e.Polyline()).plot(l || new e.PointArray());
    } } }), e.Polygon = e.invent({ create: "polygon", inherit: e.Shape, construct: { polygon: function(l) {
      return this.put(new e.Polygon()).plot(l || new e.PointArray());
    } } }), e.extend(e.Polyline, e.Polygon, { array: function() {
      return this._array || (this._array = new e.PointArray(this.attr("points")));
    }, plot: function(l) {
      return l == null ? this.array() : this.clear().attr("points", typeof l == "string" ? l : this._array = new e.PointArray(l));
    }, clear: function() {
      return delete this._array, this;
    }, move: function(l, u) {
      return this.attr("points", this.array().move(l, u));
    }, size: function(l, u) {
      var x = g(this, l, u);
      return this.attr("points", this.array().size(x.width, x.height));
    } }), e.extend(e.Line, e.Polyline, e.Polygon, { morphArray: e.PointArray, x: function(l) {
      return l == null ? this.bbox().x : this.move(l, this.bbox().y);
    }, y: function(l) {
      return l == null ? this.bbox().y : this.move(this.bbox().x, l);
    }, width: function(l) {
      var u = this.bbox();
      return l == null ? u.width : this.size(l, u.height);
    }, height: function(l) {
      var u = this.bbox();
      return l == null ? u.height : this.size(u.width, l);
    } }), e.Path = e.invent({ create: "path", inherit: e.Shape, extend: { morphArray: e.PathArray, array: function() {
      return this._array || (this._array = new e.PathArray(this.attr("d")));
    }, plot: function(l) {
      return l == null ? this.array() : this.clear().attr("d", typeof l == "string" ? l : this._array = new e.PathArray(l));
    }, clear: function() {
      return delete this._array, this;
    } }, construct: { path: function(l) {
      return this.put(new e.Path()).plot(l || new e.PathArray());
    } } }), e.Image = e.invent({ create: "image", inherit: e.Shape, extend: { load: function(l) {
      if (!l)
        return this;
      var u = this, x = new y.Image();
      return e.on(x, "load", function() {
        e.off(x);
        var v = u.parent(e.Pattern);
        v !== null && (u.width() == 0 && u.height() == 0 && u.size(x.width, x.height), v && v.width() == 0 && v.height() == 0 && v.size(u.width(), u.height()), typeof u._loaded == "function" && u._loaded.call(u, { width: x.width, height: x.height, ratio: x.width / x.height, url: l }));
      }), e.on(x, "error", function(v) {
        e.off(x), typeof u._error == "function" && u._error.call(u, v);
      }), this.attr("href", x.src = this.src = l, e.xlink);
    }, loaded: function(l) {
      return this._loaded = l, this;
    }, error: function(l) {
      return this._error = l, this;
    } }, construct: { image: function(l, u, x) {
      return this.put(new e.Image()).load(l).size(u || 0, x || u || 0);
    } } }), e.Text = e.invent({ create: function() {
      this.constructor.call(this, e.create("text")), this.dom.leading = new e.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", e.defaults.attrs["font-family"]);
    }, inherit: e.Shape, extend: { x: function(l) {
      return l == null ? this.attr("x") : this.attr("x", l);
    }, text: function(l) {
      if (l === void 0) {
        l = "";
        for (var u = this.node.childNodes, x = 0, v = u.length; x < v; ++x)
          x != 0 && u[x].nodeType != 3 && e.adopt(u[x]).dom.newLined == 1 && (l += `
`), l += u[x].textContent;
        return l;
      }
      if (this.clear().build(!0), typeof l == "function")
        l.call(this, this);
      else {
        x = 0;
        for (var k = (l = l.split(`
`)).length; x < k; x++)
          this.tspan(l[x]).newLine();
      }
      return this.build(!1).rebuild();
    }, size: function(l) {
      return this.attr("font-size", l).rebuild();
    }, leading: function(l) {
      return l == null ? this.dom.leading : (this.dom.leading = new e.Number(l), this.rebuild());
    }, lines: function() {
      var l = (this.textPath && this.textPath() || this).node, u = e.utils.map(e.utils.filterSVGElements(l.childNodes), function(x) {
        return e.adopt(x);
      });
      return new e.Set(u);
    }, rebuild: function(l) {
      if (typeof l == "boolean" && (this._rebuild = l), this._rebuild) {
        var u = this, x = 0, v = this.dom.leading * new e.Number(this.attr("font-size"));
        this.lines().each(function() {
          this.dom.newLined && (u.textPath() || this.attr("x", u.attr("x")), this.text() == `
` ? x += v : (this.attr("dy", v + x), x = 0));
        }), this.fire("rebuild");
      }
      return this;
    }, build: function(l) {
      return this._build = !!l, this;
    }, setData: function(l) {
      return this.dom = l, this.dom.leading = new e.Number(l.leading || 1.3), this;
    } }, construct: { text: function(l) {
      return this.put(new e.Text()).text(l);
    }, plain: function(l) {
      return this.put(new e.Text()).plain(l);
    } } }), e.Tspan = e.invent({ create: "tspan", inherit: e.Shape, extend: { text: function(l) {
      return l == null ? this.node.textContent + (this.dom.newLined ? `
` : "") : (typeof l == "function" ? l.call(this, this) : this.plain(l), this);
    }, dx: function(l) {
      return this.attr("dx", l);
    }, dy: function(l) {
      return this.attr("dy", l);
    }, newLine: function() {
      var l = this.parent(e.Text);
      return this.dom.newLined = !0, this.dy(l.dom.leading * l.attr("font-size")).attr("x", l.x());
    } } }), e.extend(e.Text, e.Tspan, { plain: function(l) {
      return this._build === !1 && this.clear(), this.node.appendChild(t.createTextNode(l)), this;
    }, tspan: function(l) {
      var u = (this.textPath && this.textPath() || this).node, x = new e.Tspan();
      return this._build === !1 && this.clear(), u.appendChild(x.node), x.text(l);
    }, clear: function() {
      for (var l = (this.textPath && this.textPath() || this).node; l.hasChildNodes(); )
        l.removeChild(l.lastChild);
      return this;
    }, length: function() {
      return this.node.getComputedTextLength();
    } }), e.TextPath = e.invent({ create: "textPath", inherit: e.Parent, parent: e.Text, construct: { morphArray: e.PathArray, array: function() {
      var l = this.track();
      return l ? l.array() : null;
    }, plot: function(l) {
      var u = this.track(), x = null;
      return u && (x = u.plot(l)), l == null ? x : this;
    }, track: function() {
      var l = this.textPath();
      if (l)
        return l.reference("href");
    }, textPath: function() {
      if (this.node.firstChild && this.node.firstChild.nodeName == "textPath")
        return e.adopt(this.node.firstChild);
    } } }), e.Nested = e.invent({ create: function() {
      this.constructor.call(this, e.create("svg")), this.style("overflow", "visible");
    }, inherit: e.Container, construct: { nested: function() {
      return this.put(new e.Nested());
    } } });
    var o = { stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"], fill: ["color", "opacity", "rule"], prefix: function(l, u) {
      return u == "color" ? l : l + "-" + u;
    } };
    function n(l, u, x, v) {
      return x + v.replace(e.regex.dots, " .");
    }
    function h(l) {
      return l.toLowerCase().replace(/-(.)/g, function(u, x) {
        return x.toUpperCase();
      });
    }
    function c(l) {
      return l.charAt(0).toUpperCase() + l.slice(1);
    }
    function d(l) {
      var u = l.toString(16);
      return u.length == 1 ? "0" + u : u;
    }
    function g(l, u, x) {
      if (u == null || x == null) {
        var v = l.bbox();
        u == null ? u = v.width / v.height * x : x == null && (x = v.height / v.width * u);
      }
      return { width: u, height: x };
    }
    function p(l, u, x) {
      return { x: u * l.a + x * l.c + 0, y: u * l.b + x * l.d + 0 };
    }
    function f(l) {
      return { a: l[0], b: l[1], c: l[2], d: l[3], e: l[4], f: l[5] };
    }
    function b(l) {
      for (var u = l.childNodes.length - 1; u >= 0; u--)
        l.childNodes[u] instanceof y.SVGElement && b(l.childNodes[u]);
      return e.adopt(l).id(e.eid(l.nodeName));
    }
    function m(l) {
      return Math.abs(l) > 1e-37 ? l : 0;
    }
    ["fill", "stroke"].forEach(function(l) {
      var u = {};
      u[l] = function(x) {
        if (x === void 0)
          return this;
        if (typeof x == "string" || e.Color.isRgb(x) || x && typeof x.fill == "function")
          this.attr(l, x);
        else
          for (var v = o[l].length - 1; v >= 0; v--)
            x[o[l][v]] != null && this.attr(o.prefix(l, o[l][v]), x[o[l][v]]);
        return this;
      }, e.extend(e.Element, e.FX, u);
    }), e.extend(e.Element, e.FX, { translate: function(l, u) {
      return this.transform({ x: l, y: u });
    }, matrix: function(l) {
      return this.attr("transform", new e.Matrix(arguments.length == 6 ? [].slice.call(arguments) : l));
    }, opacity: function(l) {
      return this.attr("opacity", l);
    }, dx: function(l) {
      return this.x(new e.Number(l).plus(this instanceof e.FX ? 0 : this.x()), !0);
    }, dy: function(l) {
      return this.y(new e.Number(l).plus(this instanceof e.FX ? 0 : this.y()), !0);
    } }), e.extend(e.Path, { length: function() {
      return this.node.getTotalLength();
    }, pointAt: function(l) {
      return this.node.getPointAtLength(l);
    } }), e.Set = e.invent({ create: function(l) {
      Array.isArray(l) ? this.members = l : this.clear();
    }, extend: { add: function() {
      for (var l = [].slice.call(arguments), u = 0, x = l.length; u < x; u++)
        this.members.push(l[u]);
      return this;
    }, remove: function(l) {
      var u = this.index(l);
      return u > -1 && this.members.splice(u, 1), this;
    }, each: function(l) {
      for (var u = 0, x = this.members.length; u < x; u++)
        l.apply(this.members[u], [u, this.members]);
      return this;
    }, clear: function() {
      return this.members = [], this;
    }, length: function() {
      return this.members.length;
    }, has: function(l) {
      return this.index(l) >= 0;
    }, index: function(l) {
      return this.members.indexOf(l);
    }, get: function(l) {
      return this.members[l];
    }, first: function() {
      return this.get(0);
    }, last: function() {
      return this.get(this.members.length - 1);
    }, valueOf: function() {
      return this.members;
    } }, construct: { set: function(l) {
      return new e.Set(l);
    } } }), e.FX.Set = e.invent({ create: function(l) {
      this.set = l;
    } }), e.Set.inherit = function() {
      var l = [];
      for (var u in e.Shape.prototype)
        typeof e.Shape.prototype[u] == "function" && typeof e.Set.prototype[u] != "function" && l.push(u);
      for (var u in l.forEach(function(v) {
        e.Set.prototype[v] = function() {
          for (var k = 0, S = this.members.length; k < S; k++)
            this.members[k] && typeof this.members[k][v] == "function" && this.members[k][v].apply(this.members[k], arguments);
          return v == "animate" ? this.fx || (this.fx = new e.FX.Set(this)) : this;
        };
      }), l = [], e.FX.prototype)
        typeof e.FX.prototype[u] == "function" && typeof e.FX.Set.prototype[u] != "function" && l.push(u);
      l.forEach(function(x) {
        e.FX.Set.prototype[x] = function() {
          for (var v = 0, k = this.set.members.length; v < k; v++)
            this.set.members[v].fx[x].apply(this.set.members[v].fx, arguments);
          return this;
        };
      });
    }, e.extend(e.Element, {}), e.extend(e.Element, { remember: function(l, u) {
      if (U(arguments[0]) === "object")
        for (var x in l)
          this.remember(x, l[x]);
      else {
        if (arguments.length == 1)
          return this.memory()[l];
        this.memory()[l] = u;
      }
      return this;
    }, forget: function() {
      if (arguments.length == 0)
        this._memory = {};
      else
        for (var l = arguments.length - 1; l >= 0; l--)
          delete this.memory()[arguments[l]];
      return this;
    }, memory: function() {
      return this._memory || (this._memory = {});
    } }), e.get = function(l) {
      var u = t.getElementById(function(x) {
        var v = (x || "").toString().match(e.regex.reference);
        if (v)
          return v[1];
      }(l) || l);
      return e.adopt(u);
    }, e.select = function(l, u) {
      return new e.Set(e.utils.map((u || t).querySelectorAll(l), function(x) {
        return e.adopt(x);
      }));
    }, e.extend(e.Parent, { select: function(l) {
      return e.select(l, this.node);
    } });
    var w = "abcdef".split("");
    if (typeof y.CustomEvent != "function") {
      var A = function(l, u) {
        u = u || { bubbles: !1, cancelable: !1, detail: void 0 };
        var x = t.createEvent("CustomEvent");
        return x.initCustomEvent(l, u.bubbles, u.cancelable, u.detail), x;
      };
      A.prototype = y.Event.prototype, e.CustomEvent = A;
    } else
      e.CustomEvent = y.CustomEvent;
    return e;
  }, U(vt) === "object" ? j.exports = mt.document ? Ot(mt, mt.document) : function(y) {
    return Ot(y, y.document);
  } : mt.SVG = Ot(mt, mt.document), /*! svg.filter.js - v2.0.2 - 2016-02-24
  * https://github.com/wout/svg.filter.js
  * Copyright (c) 2016 Wout Fierens; Licensed MIT */
  (function() {
    SVG.Filter = SVG.invent({ create: "filter", inherit: SVG.Parent, extend: { source: "SourceGraphic", sourceAlpha: "SourceAlpha", background: "BackgroundImage", backgroundAlpha: "BackgroundAlpha", fill: "FillPaint", stroke: "StrokePaint", autoSetIn: !0, put: function(r, o) {
      return this.add(r, o), !r.attr("in") && this.autoSetIn && r.attr("in", this.source), r.attr("result") || r.attr("result", r), r;
    }, blend: function(r, o, n) {
      return this.put(new SVG.BlendEffect(r, o, n));
    }, colorMatrix: function(r, o) {
      return this.put(new SVG.ColorMatrixEffect(r, o));
    }, convolveMatrix: function(r) {
      return this.put(new SVG.ConvolveMatrixEffect(r));
    }, componentTransfer: function(r) {
      return this.put(new SVG.ComponentTransferEffect(r));
    }, composite: function(r, o, n) {
      return this.put(new SVG.CompositeEffect(r, o, n));
    }, flood: function(r, o) {
      return this.put(new SVG.FloodEffect(r, o));
    }, offset: function(r, o) {
      return this.put(new SVG.OffsetEffect(r, o));
    }, image: function(r) {
      return this.put(new SVG.ImageEffect(r));
    }, merge: function() {
      var r = [void 0];
      for (var o in arguments)
        r.push(arguments[o]);
      return this.put(new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, r))());
    }, gaussianBlur: function(r, o) {
      return this.put(new SVG.GaussianBlurEffect(r, o));
    }, morphology: function(r, o) {
      return this.put(new SVG.MorphologyEffect(r, o));
    }, diffuseLighting: function(r, o, n) {
      return this.put(new SVG.DiffuseLightingEffect(r, o, n));
    }, displacementMap: function(r, o, n, h, c) {
      return this.put(new SVG.DisplacementMapEffect(r, o, n, h, c));
    }, specularLighting: function(r, o, n, h) {
      return this.put(new SVG.SpecularLightingEffect(r, o, n, h));
    }, tile: function() {
      return this.put(new SVG.TileEffect());
    }, turbulence: function(r, o, n, h, c) {
      return this.put(new SVG.TurbulenceEffect(r, o, n, h, c));
    }, toString: function() {
      return "url(#" + this.attr("id") + ")";
    } } }), SVG.extend(SVG.Defs, { filter: function(r) {
      var o = this.put(new SVG.Filter());
      return typeof r == "function" && r.call(o, o), o;
    } }), SVG.extend(SVG.Container, { filter: function(r) {
      return this.defs().filter(r);
    } }), SVG.extend(SVG.Element, SVG.G, SVG.Nested, { filter: function(r) {
      return this.filterer = r instanceof SVG.Element ? r : this.doc().filter(r), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer;
    }, unfilter: function(r) {
      return this.filterer && r === !0 && this.filterer.remove(), delete this.filterer, this.attr("filter", null);
    } }), SVG.Effect = SVG.invent({ create: function() {
      this.constructor.call(this);
    }, inherit: SVG.Element, extend: { in: function(r) {
      return r == null ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", r);
    }, result: function(r) {
      return r == null ? this.attr("result") : this.attr("result", r);
    }, toString: function() {
      return this.result();
    } } }), SVG.ParentEffect = SVG.invent({ create: function() {
      this.constructor.call(this);
    }, inherit: SVG.Parent, extend: { in: function(r) {
      return r == null ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", r);
    }, result: function(r) {
      return r == null ? this.attr("result") : this.attr("result", r);
    }, toString: function() {
      return this.result();
    } } });
    var y = { blend: function(r, o) {
      return this.parent() && this.parent().blend(this, r, o);
    }, colorMatrix: function(r, o) {
      return this.parent() && this.parent().colorMatrix(r, o).in(this);
    }, convolveMatrix: function(r) {
      return this.parent() && this.parent().convolveMatrix(r).in(this);
    }, componentTransfer: function(r) {
      return this.parent() && this.parent().componentTransfer(r).in(this);
    }, composite: function(r, o) {
      return this.parent() && this.parent().composite(this, r, o);
    }, flood: function(r, o) {
      return this.parent() && this.parent().flood(r, o);
    }, offset: function(r, o) {
      return this.parent() && this.parent().offset(r, o).in(this);
    }, image: function(r) {
      return this.parent() && this.parent().image(r);
    }, merge: function() {
      return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments));
    }, gaussianBlur: function(r, o) {
      return this.parent() && this.parent().gaussianBlur(r, o).in(this);
    }, morphology: function(r, o) {
      return this.parent() && this.parent().morphology(r, o).in(this);
    }, diffuseLighting: function(r, o, n) {
      return this.parent() && this.parent().diffuseLighting(r, o, n).in(this);
    }, displacementMap: function(r, o, n, h) {
      return this.parent() && this.parent().displacementMap(this, r, o, n, h);
    }, specularLighting: function(r, o, n, h) {
      return this.parent() && this.parent().specularLighting(r, o, n, h).in(this);
    }, tile: function() {
      return this.parent() && this.parent().tile().in(this);
    }, turbulence: function(r, o, n, h, c) {
      return this.parent() && this.parent().turbulence(r, o, n, h, c).in(this);
    } };
    SVG.extend(SVG.Effect, y), SVG.extend(SVG.ParentEffect, y), SVG.ChildEffect = SVG.invent({ create: function() {
      this.constructor.call(this);
    }, inherit: SVG.Element, extend: { in: function(r) {
      this.attr("in", r);
    } } });
    var t = { blend: function(r, o, n) {
      this.attr({ in: r, in2: o, mode: n || "normal" });
    }, colorMatrix: function(r, o) {
      r == "matrix" && (o = a(o)), this.attr({ type: r, values: o === void 0 ? null : o });
    }, convolveMatrix: function(r) {
      r = a(r), this.attr({ order: Math.sqrt(r.split(" ").length), kernelMatrix: r });
    }, composite: function(r, o, n) {
      this.attr({ in: r, in2: o, operator: n });
    }, flood: function(r, o) {
      this.attr("flood-color", r), o != null && this.attr("flood-opacity", o);
    }, offset: function(r, o) {
      this.attr({ dx: r, dy: o });
    }, image: function(r) {
      this.attr("href", r, SVG.xlink);
    }, displacementMap: function(r, o, n, h, c) {
      this.attr({ in: r, in2: o, scale: n, xChannelSelector: h, yChannelSelector: c });
    }, gaussianBlur: function(r, o) {
      r != null || o != null ? this.attr("stdDeviation", function(n) {
        if (!Array.isArray(n))
          return n;
        for (var h = 0, c = n.length, d = []; h < c; h++)
          d.push(n[h]);
        return d.join(" ");
      }(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0");
    }, morphology: function(r, o) {
      this.attr({ operator: r, radius: o });
    }, tile: function() {
    }, turbulence: function(r, o, n, h, c) {
      this.attr({ numOctaves: o, seed: n, stitchTiles: h, baseFrequency: r, type: c });
    } }, e = { merge: function() {
      var r;
      if (arguments[0] instanceof SVG.Set) {
        var o = this;
        arguments[0].each(function(h) {
          this instanceof SVG.MergeNode ? o.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && o.put(new SVG.MergeNode(this));
        });
      } else {
        r = Array.isArray(arguments[0]) ? arguments[0] : arguments;
        for (var n = 0; n < r.length; n++)
          r[n] instanceof SVG.MergeNode ? this.put(r[n]) : this.put(new SVG.MergeNode(r[n]));
      }
    }, componentTransfer: function(r) {
      if (this.rgb = new SVG.Set(), ["r", "g", "b", "a"].forEach((function(n) {
        this[n] = new SVG["Func" + n.toUpperCase()]("identity"), this.rgb.add(this[n]), this.node.appendChild(this[n].node);
      }).bind(this)), r)
        for (var o in r.rgb && (["r", "g", "b"].forEach((function(n) {
          this[n].attr(r.rgb);
        }).bind(this)), delete r.rgb), r)
          this[o].attr(r[o]);
    }, diffuseLighting: function(r, o, n) {
      this.attr({ surfaceScale: r, diffuseConstant: o, kernelUnitLength: n });
    }, specularLighting: function(r, o, n, h) {
      this.attr({ surfaceScale: r, diffuseConstant: o, specularExponent: n, kernelUnitLength: h });
    } }, i = { distantLight: function(r, o) {
      this.attr({ azimuth: r, elevation: o });
    }, pointLight: function(r, o, n) {
      this.attr({ x: r, y: o, z: n });
    }, spotLight: function(r, o, n, h, c, d) {
      this.attr({ x: r, y: o, z: n, pointsAtX: h, pointsAtY: c, pointsAtZ: d });
    }, mergeNode: function(r) {
      this.attr("in", r);
    } };
    function a(r) {
      return Array.isArray(r) && (r = new SVG.Array(r)), r.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ");
    }
    function s() {
      var r = function() {
      };
      for (var o in typeof arguments[arguments.length - 1] == "function" && (r = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments)
        for (var n in arguments[o])
          r(arguments[o][n], n, arguments[o]);
    }
    ["r", "g", "b", "a"].forEach(function(r) {
      i["Func" + r.toUpperCase()] = function(o) {
        switch (this.attr("type", o), o) {
          case "table":
            this.attr("tableValues", arguments[1]);
            break;
          case "linear":
            this.attr("slope", arguments[1]), this.attr("intercept", arguments[2]);
            break;
          case "gamma":
            this.attr("amplitude", arguments[1]), this.attr("exponent", arguments[2]), this.attr("offset", arguments[2]);
        }
      };
    }), s(t, function(r, o) {
      var n = o.charAt(0).toUpperCase() + o.slice(1);
      SVG[n + "Effect"] = SVG.invent({ create: function() {
        this.constructor.call(this, SVG.create("fe" + n)), r.apply(this, arguments), this.result(this.attr("id") + "Out");
      }, inherit: SVG.Effect, extend: {} });
    }), s(e, function(r, o) {
      var n = o.charAt(0).toUpperCase() + o.slice(1);
      SVG[n + "Effect"] = SVG.invent({ create: function() {
        this.constructor.call(this, SVG.create("fe" + n)), r.apply(this, arguments), this.result(this.attr("id") + "Out");
      }, inherit: SVG.ParentEffect, extend: {} });
    }), s(i, function(r, o) {
      var n = o.charAt(0).toUpperCase() + o.slice(1);
      SVG[n] = SVG.invent({ create: function() {
        this.constructor.call(this, SVG.create("fe" + n)), r.apply(this, arguments);
      }, inherit: SVG.ChildEffect, extend: {} });
    }), SVG.extend(SVG.MergeEffect, { in: function(r) {
      return r instanceof SVG.MergeNode ? this.add(r, 0) : this.add(new SVG.MergeNode(r), 0), this;
    } }), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, { in2: function(r) {
      return r == null ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", r);
    } }), SVG.filter = { sepiatone: [0.343, 0.669, 0.119, 0, 0, 0.249, 0.626, 0.13, 0, 0, 0.172, 0.334, 0.111, 0, 0, 0, 0, 0, 1, 0] };
  }).call(void 0), function() {
    function y(s, r, o, n, h, c, d) {
      for (var g = s.slice(r, o || d), p = n.slice(h, c || d), f = 0, b = { pos: [0, 0], start: [0, 0] }, m = { pos: [0, 0], start: [0, 0] }; g[f] = t.call(b, g[f]), p[f] = t.call(m, p[f]), g[f][0] != p[f][0] || g[f][0] == "M" || g[f][0] == "A" && (g[f][4] != p[f][4] || g[f][5] != p[f][5]) ? (Array.prototype.splice.apply(g, [f, 1].concat(i.call(b, g[f]))), Array.prototype.splice.apply(p, [f, 1].concat(i.call(m, p[f])))) : (g[f] = e.call(b, g[f]), p[f] = e.call(m, p[f])), !(++f == g.length && f == p.length); )
        f == g.length && g.push(["C", b.pos[0], b.pos[1], b.pos[0], b.pos[1], b.pos[0], b.pos[1]]), f == p.length && p.push(["C", m.pos[0], m.pos[1], m.pos[0], m.pos[1], m.pos[0], m.pos[1]]);
      return { start: g, dest: p };
    }
    function t(s) {
      switch (s[0]) {
        case "z":
        case "Z":
          s[0] = "L", s[1] = this.start[0], s[2] = this.start[1];
          break;
        case "H":
          s[0] = "L", s[2] = this.pos[1];
          break;
        case "V":
          s[0] = "L", s[2] = s[1], s[1] = this.pos[0];
          break;
        case "T":
          s[0] = "Q", s[3] = s[1], s[4] = s[2], s[1] = this.reflection[1], s[2] = this.reflection[0];
          break;
        case "S":
          s[0] = "C", s[6] = s[4], s[5] = s[3], s[4] = s[2], s[3] = s[1], s[2] = this.reflection[1], s[1] = this.reflection[0];
      }
      return s;
    }
    function e(s) {
      var r = s.length;
      return this.pos = [s[r - 2], s[r - 1]], "SCQT".indexOf(s[0]) != -1 && (this.reflection = [2 * this.pos[0] - s[r - 4], 2 * this.pos[1] - s[r - 3]]), s;
    }
    function i(s) {
      var r = [s];
      switch (s[0]) {
        case "M":
          return this.pos = this.start = [s[1], s[2]], r;
        case "L":
          s[5] = s[3] = s[1], s[6] = s[4] = s[2], s[1] = this.pos[0], s[2] = this.pos[1];
          break;
        case "Q":
          s[6] = s[4], s[5] = s[3], s[4] = 1 * s[4] / 3 + 2 * s[2] / 3, s[3] = 1 * s[3] / 3 + 2 * s[1] / 3, s[2] = 1 * this.pos[1] / 3 + 2 * s[2] / 3, s[1] = 1 * this.pos[0] / 3 + 2 * s[1] / 3;
          break;
        case "A":
          r = function(o, n) {
            var h, c, d, g, p, f, b, m, w, A, l, u, x, v, k, S, C, L, M, T, I, E, R, H, D, W, N = Math.abs(n[1]), V = Math.abs(n[2]), _ = n[3] % 360, st = n[4], K = n[5], nt = n[6], lt = n[7], $ = new SVG.Point(o), Q = new SVG.Point(nt, lt), ue = [];
            if (N === 0 || V === 0 || $.x === Q.x && $.y === Q.y)
              return [["C", $.x, $.y, Q.x, Q.y, Q.x, Q.y]];
            for (h = new SVG.Point(($.x - Q.x) / 2, ($.y - Q.y) / 2).transform(new SVG.Matrix().rotate(_)), (c = h.x * h.x / (N * N) + h.y * h.y / (V * V)) > 1 && (N *= c = Math.sqrt(c), V *= c), d = new SVG.Matrix().rotate(_).scale(1 / N, 1 / V).rotate(-_), $ = $.transform(d), Q = Q.transform(d), g = [Q.x - $.x, Q.y - $.y], f = g[0] * g[0] + g[1] * g[1], p = Math.sqrt(f), g[0] /= p, g[1] /= p, b = f < 4 ? Math.sqrt(1 - f / 4) : 0, st === K && (b *= -1), m = new SVG.Point((Q.x + $.x) / 2 + b * -g[1], (Q.y + $.y) / 2 + b * g[0]), w = new SVG.Point($.x - m.x, $.y - m.y), A = new SVG.Point(Q.x - m.x, Q.y - m.y), l = Math.acos(w.x / Math.sqrt(w.x * w.x + w.y * w.y)), w.y < 0 && (l *= -1), u = Math.acos(A.x / Math.sqrt(A.x * A.x + A.y * A.y)), A.y < 0 && (u *= -1), K && l > u && (u += 2 * Math.PI), !K && l < u && (u -= 2 * Math.PI), v = Math.ceil(2 * Math.abs(l - u) / Math.PI), S = [], C = l, x = (u - l) / v, k = 4 * Math.tan(x / 4) / 3, I = 0; I <= v; I++)
              M = Math.cos(C), L = Math.sin(C), T = new SVG.Point(m.x + M, m.y + L), S[I] = [new SVG.Point(T.x + k * L, T.y - k * M), T, new SVG.Point(T.x - k * L, T.y + k * M)], C += x;
            for (S[0][0] = S[0][1].clone(), S[S.length - 1][2] = S[S.length - 1][1].clone(), d = new SVG.Matrix().rotate(_).scale(N, V).rotate(-_), I = 0, E = S.length; I < E; I++)
              S[I][0] = S[I][0].transform(d), S[I][1] = S[I][1].transform(d), S[I][2] = S[I][2].transform(d);
            for (I = 1, E = S.length; I < E; I++)
              R = (T = S[I - 1][2]).x, H = T.y, D = (T = S[I][0]).x, W = T.y, nt = (T = S[I][1]).x, lt = T.y, ue.push(["C", R, H, D, W, nt, lt]);
            return ue;
          }(this.pos, s), s = r[0];
      }
      return s[0] = "C", this.pos = [s[5], s[6]], this.reflection = [2 * s[5] - s[3], 2 * s[6] - s[4]], r;
    }
    function a(s, r) {
      if (r === !1)
        return !1;
      for (var o = r, n = s.length; o < n; ++o)
        if (s[o][0] == "M")
          return o;
      return !1;
    }
    SVG.extend(SVG.PathArray, { morph: function(s) {
      for (var r = this.value, o = this.parse(s), n = 0, h = 0, c = !1, d = !1; n !== !1 || h !== !1; ) {
        var g;
        c = a(r, n !== !1 && n + 1), d = a(o, h !== !1 && h + 1), n === !1 && (n = (g = new SVG.PathArray(p.start).bbox()).height == 0 || g.width == 0 ? r.push(r[0]) - 1 : r.push(["M", g.x + g.width / 2, g.y + g.height / 2]) - 1), h === !1 && (h = (g = new SVG.PathArray(p.dest).bbox()).height == 0 || g.width == 0 ? o.push(o[0]) - 1 : o.push(["M", g.x + g.width / 2, g.y + g.height / 2]) - 1);
        var p = y(r, n, c, o, h, d);
        r = r.slice(0, n).concat(p.start, c === !1 ? [] : r.slice(c)), o = o.slice(0, h).concat(p.dest, d === !1 ? [] : o.slice(d)), n = c !== !1 && n + p.start.length, h = d !== !1 && h + p.dest.length;
      }
      return this.value = r, this.destination = new SVG.PathArray(), this.destination.value = o, this;
    } });
  }(), /*! svg.draggable.js - v2.2.2 - 2019-01-08
  * https://github.com/svgdotjs/svg.draggable.js
  * Copyright (c) 2019 Wout Fierens; Licensed MIT */
  (function() {
    function y(t) {
      t.remember("_draggable", this), this.el = t;
    }
    y.prototype.init = function(t, e) {
      var i = this;
      this.constraint = t, this.value = e, this.el.on("mousedown.drag", function(a) {
        i.start(a);
      }), this.el.on("touchstart.drag", function(a) {
        i.start(a);
      });
    }, y.prototype.transformPoint = function(t, e) {
      var i = (t = t || window.event).changedTouches && t.changedTouches[0] || t;
      return this.p.x = i.clientX - (e || 0), this.p.y = i.clientY, this.p.matrixTransform(this.m);
    }, y.prototype.getBBox = function() {
      var t = this.el.bbox();
      return this.el instanceof SVG.Nested && (t = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (t.x = this.el.x(), t.y = this.el.y()), t;
    }, y.prototype.start = function(t) {
      if (t.type != "click" && t.type != "mousedown" && t.type != "mousemove" || (t.which || t.buttons) == 1) {
        var e = this;
        if (this.el.fire("beforedrag", { event: t, handler: this }), !this.el.event().defaultPrevented) {
          t.preventDefault(), t.stopPropagation(), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse();
          var i, a = this.getBBox();
          if (this.el instanceof SVG.Text)
            switch (i = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) {
              case "middle":
                i /= 2;
                break;
              case "start":
                i = 0;
            }
          this.startPoints = { point: this.transformPoint(t, i), box: a, transform: this.el.transform() }, SVG.on(window, "mousemove.drag", function(s) {
            e.drag(s);
          }), SVG.on(window, "touchmove.drag", function(s) {
            e.drag(s);
          }), SVG.on(window, "mouseup.drag", function(s) {
            e.end(s);
          }), SVG.on(window, "touchend.drag", function(s) {
            e.end(s);
          }), this.el.fire("dragstart", { event: t, p: this.startPoints.point, m: this.m, handler: this });
        }
      }
    }, y.prototype.drag = function(t) {
      var e = this.getBBox(), i = this.transformPoint(t), a = this.startPoints.box.x + i.x - this.startPoints.point.x, s = this.startPoints.box.y + i.y - this.startPoints.point.y, r = this.constraint, o = i.x - this.startPoints.point.x, n = i.y - this.startPoints.point.y;
      if (this.el.fire("dragmove", { event: t, p: i, m: this.m, handler: this }), this.el.event().defaultPrevented)
        return i;
      if (typeof r == "function") {
        var h = r.call(this.el, a, s, this.m);
        typeof h == "boolean" && (h = { x: h, y: h }), h.x === !0 ? this.el.x(a) : h.x !== !1 && this.el.x(h.x), h.y === !0 ? this.el.y(s) : h.y !== !1 && this.el.y(h.y);
      } else
        typeof r == "object" && (r.minX != null && a < r.minX ? o = (a = r.minX) - this.startPoints.box.x : r.maxX != null && a > r.maxX - e.width && (o = (a = r.maxX - e.width) - this.startPoints.box.x), r.minY != null && s < r.minY ? n = (s = r.minY) - this.startPoints.box.y : r.maxY != null && s > r.maxY - e.height && (n = (s = r.maxY - e.height) - this.startPoints.box.y), r.snapToGrid != null && (a -= a % r.snapToGrid, s -= s % r.snapToGrid, o -= o % r.snapToGrid, n -= n % r.snapToGrid), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({ x: o, y: n }, !0) : this.el.move(a, s));
      return i;
    }, y.prototype.end = function(t) {
      var e = this.drag(t);
      this.el.fire("dragend", { event: t, p: e, m: this.m, handler: this }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag");
    }, SVG.extend(SVG.Element, { draggable: function(t, e) {
      typeof t != "function" && typeof t != "object" || (e = t, t = !0);
      var i = this.remember("_draggable") || new y(this);
      return (t = t === void 0 || t) ? i.init(e || {}, t) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this;
    } });
  }).call(void 0), function() {
    function y(t) {
      this.el = t, t.remember("_selectHandler", this), this.pointSelection = { isSelected: !1 }, this.rectSelection = { isSelected: !1 }, this.pointsList = { lt: [0, 0], rt: ["width", 0], rb: ["width", "height"], lb: [0, "height"], t: ["width", 0], r: ["width", "height"], b: ["width", "height"], l: [0, "height"] }, this.pointCoord = function(e, i, a) {
        var s = typeof e != "string" ? e : i[e];
        return a ? s / 2 : s;
      }, this.pointCoords = function(e, i) {
        var a = this.pointsList[e];
        return { x: this.pointCoord(a[0], i, e === "t" || e === "b"), y: this.pointCoord(a[1], i, e === "r" || e === "l") };
      };
    }
    y.prototype.init = function(t, e) {
      var i = this.el.bbox();
      this.options = {};
      var a = this.el.selectize.defaults.points;
      for (var s in this.el.selectize.defaults)
        this.options[s] = this.el.selectize.defaults[s], e[s] !== void 0 && (this.options[s] = e[s]);
      var r = ["points", "pointsExclude"];
      for (var s in r) {
        var o = this.options[r[s]];
        typeof o == "string" ? o = o.length > 0 ? o.split(/\s*,\s*/i) : [] : typeof o == "boolean" && r[s] === "points" && (o = o ? a : []), this.options[r[s]] = o;
      }
      this.options.points = [a, this.options.points].reduce(function(n, h) {
        return n.filter(function(c) {
          return h.indexOf(c) > -1;
        });
      }), this.options.points = [this.options.points, this.options.pointsExclude].reduce(function(n, h) {
        return n.filter(function(c) {
          return h.indexOf(c) < 0;
        });
      }), this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i.x, i.y)), this.options.deepSelect && ["line", "polyline", "polygon"].indexOf(this.el.type) !== -1 ? this.selectPoints(t) : this.selectRect(t), this.observe(), this.cleanup();
    }, y.prototype.selectPoints = function(t) {
      return this.pointSelection.isSelected = t, this.pointSelection.set || (this.pointSelection.set = this.parent.set(), this.drawPoints()), this;
    }, y.prototype.getPointArray = function() {
      var t = this.el.bbox();
      return this.el.array().valueOf().map(function(e) {
        return [e[0] - t.x, e[1] - t.y];
      });
    }, y.prototype.drawPoints = function() {
      for (var t = this, e = this.getPointArray(), i = 0, a = e.length; i < a; ++i) {
        var s = /* @__PURE__ */ function(o) {
          return function(n) {
            (n = n || window.event).preventDefault ? n.preventDefault() : n.returnValue = !1, n.stopPropagation();
            var h = n.pageX || n.touches[0].pageX, c = n.pageY || n.touches[0].pageY;
            t.el.fire("point", { x: h, y: c, i: o, event: n });
          };
        }(i), r = this.drawPoint(e[i][0], e[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", s).on("mousedown", s);
        this.pointSelection.set.add(r);
      }
    }, y.prototype.drawPoint = function(t, e) {
      var i = this.options.pointType;
      switch (i) {
        case "circle":
          return this.drawCircle(t, e);
        case "rect":
          return this.drawRect(t, e);
        default:
          if (typeof i == "function")
            return i.call(this, t, e);
          throw new Error("Unknown " + i + " point type!");
      }
    }, y.prototype.drawCircle = function(t, e) {
      return this.nested.circle(this.options.pointSize).center(t, e);
    }, y.prototype.drawRect = function(t, e) {
      return this.nested.rect(this.options.pointSize, this.options.pointSize).center(t, e);
    }, y.prototype.updatePointSelection = function() {
      var t = this.getPointArray();
      this.pointSelection.set.each(function(e) {
        this.cx() === t[e][0] && this.cy() === t[e][1] || this.center(t[e][0], t[e][1]);
      });
    }, y.prototype.updateRectSelection = function() {
      var t = this, e = this.el.bbox();
      if (this.rectSelection.set.get(0).attr({ width: e.width, height: e.height }), this.options.points.length && this.options.points.map(function(a, s) {
        var r = t.pointCoords(a, e);
        t.rectSelection.set.get(s + 1).center(r.x, r.y);
      }), this.options.rotationPoint) {
        var i = this.rectSelection.set.length();
        this.rectSelection.set.get(i - 1).center(e.width / 2, 20);
      }
    }, y.prototype.selectRect = function(t) {
      var e = this, i = this.el.bbox();
      function a(o) {
        return function(n) {
          (n = n || window.event).preventDefault ? n.preventDefault() : n.returnValue = !1, n.stopPropagation();
          var h = n.pageX || n.touches[0].pageX, c = n.pageY || n.touches[0].pageY;
          e.el.fire(o, { x: h, y: c, event: n });
        };
      }
      if (this.rectSelection.isSelected = t, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(i.width, i.height).addClass(this.options.classRect)), this.options.points.length && this.rectSelection.set.length() < 2 && (this.options.points.map(function(o, n) {
        var h = e.pointCoords(o, i), c = e.drawPoint(h.x, h.y).attr("class", e.options.classPoints + "_" + o).on("mousedown", a(o)).on("touchstart", a(o));
        e.rectSelection.set.add(c);
      }), this.rectSelection.set.each(function() {
        this.addClass(e.options.classPoints);
      })), this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1))) {
        var s = function(o) {
          (o = o || window.event).preventDefault ? o.preventDefault() : o.returnValue = !1, o.stopPropagation();
          var n = o.pageX || o.touches[0].pageX, h = o.pageY || o.touches[0].pageY;
          e.el.fire("rot", { x: n, y: h, event: o });
        }, r = this.drawPoint(i.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", s).on("mousedown", s);
        this.rectSelection.set.add(r);
      }
    }, y.prototype.handler = function() {
      var t = this.el.bbox();
      this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection();
    }, y.prototype.observe = function() {
      var t = this;
      if (MutationObserver)
        if (this.rectSelection.isSelected || this.pointSelection.isSelected)
          this.observerInst = this.observerInst || new MutationObserver(function() {
            t.handler();
          }), this.observerInst.observe(this.el.node, { attributes: !0 });
        else
          try {
            this.observerInst.disconnect(), delete this.observerInst;
          } catch {
          }
      else
        this.el.off("DOMAttrModified.select"), (this.rectSelection.isSelected || this.pointSelection.isSelected) && this.el.on("DOMAttrModified.select", function() {
          t.handler();
        });
    }, y.prototype.cleanup = function() {
      !this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each(function() {
        this.remove();
      }), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each(function() {
        this.remove();
      }), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested);
    }, SVG.extend(SVG.Element, { selectize: function(t, e) {
      return typeof t == "object" && (e = t, t = !0), (this.remember("_selectHandler") || new y(this)).init(t === void 0 || t, e || {}), this;
    } }), SVG.Element.prototype.selectize.defaults = { points: ["lt", "rt", "rb", "lb", "t", "r", "b", "l"], pointsExclude: [], classRect: "svg_select_boundingRect", classPoints: "svg_select_points", pointSize: 7, rotationPoint: !0, deepSelect: !1, pointType: "circle" };
  }(), function() {
    (function() {
      function y(t) {
        t.remember("_resizeHandler", this), this.el = t, this.parameters = {}, this.lastUpdateCall = null, this.p = t.doc().node.createSVGPoint();
      }
      y.prototype.transformPoint = function(t, e, i) {
        return this.p.x = t - (this.offset.x - window.pageXOffset), this.p.y = e - (this.offset.y - window.pageYOffset), this.p.matrixTransform(i || this.m);
      }, y.prototype._extractPosition = function(t) {
        return { x: t.clientX != null ? t.clientX : t.touches[0].clientX, y: t.clientY != null ? t.clientY : t.touches[0].clientY };
      }, y.prototype.init = function(t) {
        var e = this;
        if (this.stop(), t !== "stop") {
          for (var i in this.options = {}, this.el.resize.defaults)
            this.options[i] = this.el.resize.defaults[i], t[i] !== void 0 && (this.options[i] = t[i]);
          this.el.on("lt.resize", function(a) {
            e.resize(a || window.event);
          }), this.el.on("rt.resize", function(a) {
            e.resize(a || window.event);
          }), this.el.on("rb.resize", function(a) {
            e.resize(a || window.event);
          }), this.el.on("lb.resize", function(a) {
            e.resize(a || window.event);
          }), this.el.on("t.resize", function(a) {
            e.resize(a || window.event);
          }), this.el.on("r.resize", function(a) {
            e.resize(a || window.event);
          }), this.el.on("b.resize", function(a) {
            e.resize(a || window.event);
          }), this.el.on("l.resize", function(a) {
            e.resize(a || window.event);
          }), this.el.on("rot.resize", function(a) {
            e.resize(a || window.event);
          }), this.el.on("point.resize", function(a) {
            e.resize(a || window.event);
          }), this.update();
        }
      }, y.prototype.stop = function() {
        return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this;
      }, y.prototype.resize = function(t) {
        var e = this;
        this.m = this.el.node.getScreenCTM().inverse(), this.offset = { x: window.pageXOffset, y: window.pageYOffset };
        var i = this._extractPosition(t.detail.event);
        if (this.parameters = { type: this.el.type, p: this.transformPoint(i.x, i.y), x: t.detail.x, y: t.detail.y, box: this.el.bbox(), rotation: this.el.transform().rotation }, this.el.type === "text" && (this.parameters.fontSize = this.el.attr()["font-size"]), t.detail.i !== void 0) {
          var a = this.el.array().valueOf();
          this.parameters.i = t.detail.i, this.parameters.pointCoords = [a[t.detail.i][0], a[t.detail.i][1]];
        }
        switch (t.type) {
          case "lt":
            this.calc = function(s, r) {
              var o = this.snapToGrid(s, r);
              if (this.parameters.box.width - o[0] > 0 && this.parameters.box.height - o[1] > 0) {
                if (this.parameters.type === "text")
                  return this.el.move(this.parameters.box.x + o[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - o[0]);
                o = this.checkAspectRatio(o), this.el.move(this.parameters.box.x + o[0], this.parameters.box.y + o[1]).size(this.parameters.box.width - o[0], this.parameters.box.height - o[1]);
              }
            };
            break;
          case "rt":
            this.calc = function(s, r) {
              var o = this.snapToGrid(s, r, 2);
              if (this.parameters.box.width + o[0] > 0 && this.parameters.box.height - o[1] > 0) {
                if (this.parameters.type === "text")
                  return this.el.move(this.parameters.box.x - o[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + o[0]);
                o = this.checkAspectRatio(o, !0), this.el.move(this.parameters.box.x, this.parameters.box.y + o[1]).size(this.parameters.box.width + o[0], this.parameters.box.height - o[1]);
              }
            };
            break;
          case "rb":
            this.calc = function(s, r) {
              var o = this.snapToGrid(s, r, 0);
              if (this.parameters.box.width + o[0] > 0 && this.parameters.box.height + o[1] > 0) {
                if (this.parameters.type === "text")
                  return this.el.move(this.parameters.box.x - o[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + o[0]);
                o = this.checkAspectRatio(o), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + o[0], this.parameters.box.height + o[1]);
              }
            };
            break;
          case "lb":
            this.calc = function(s, r) {
              var o = this.snapToGrid(s, r, 1);
              if (this.parameters.box.width - o[0] > 0 && this.parameters.box.height + o[1] > 0) {
                if (this.parameters.type === "text")
                  return this.el.move(this.parameters.box.x + o[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - o[0]);
                o = this.checkAspectRatio(o, !0), this.el.move(this.parameters.box.x + o[0], this.parameters.box.y).size(this.parameters.box.width - o[0], this.parameters.box.height + o[1]);
              }
            };
            break;
          case "t":
            this.calc = function(s, r) {
              var o = this.snapToGrid(s, r, 2);
              if (this.parameters.box.height - o[1] > 0) {
                if (this.parameters.type === "text")
                  return;
                this.el.move(this.parameters.box.x, this.parameters.box.y + o[1]).height(this.parameters.box.height - o[1]);
              }
            };
            break;
          case "r":
            this.calc = function(s, r) {
              var o = this.snapToGrid(s, r, 0);
              if (this.parameters.box.width + o[0] > 0) {
                if (this.parameters.type === "text")
                  return;
                this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + o[0]);
              }
            };
            break;
          case "b":
            this.calc = function(s, r) {
              var o = this.snapToGrid(s, r, 0);
              if (this.parameters.box.height + o[1] > 0) {
                if (this.parameters.type === "text")
                  return;
                this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + o[1]);
              }
            };
            break;
          case "l":
            this.calc = function(s, r) {
              var o = this.snapToGrid(s, r, 1);
              if (this.parameters.box.width - o[0] > 0) {
                if (this.parameters.type === "text")
                  return;
                this.el.move(this.parameters.box.x + o[0], this.parameters.box.y).width(this.parameters.box.width - o[0]);
              }
            };
            break;
          case "rot":
            this.calc = function(s, r) {
              var o = s + this.parameters.p.x, n = r + this.parameters.p.y, h = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2), c = Math.atan2(n - this.parameters.box.y - this.parameters.box.height / 2, o - this.parameters.box.x - this.parameters.box.width / 2), d = this.parameters.rotation + 180 * (c - h) / Math.PI + this.options.snapToAngle / 2;
              this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(d - d % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy);
            };
            break;
          case "point":
            this.calc = function(s, r) {
              var o = this.snapToGrid(s, r, this.parameters.pointCoords[0], this.parameters.pointCoords[1]), n = this.el.array().valueOf();
              n[this.parameters.i][0] = this.parameters.pointCoords[0] + o[0], n[this.parameters.i][1] = this.parameters.pointCoords[1] + o[1], this.el.plot(n);
            };
        }
        this.el.fire("resizestart", { dx: this.parameters.x, dy: this.parameters.y, event: t }), SVG.on(window, "touchmove.resize", function(s) {
          e.update(s || window.event);
        }), SVG.on(window, "touchend.resize", function() {
          e.done();
        }), SVG.on(window, "mousemove.resize", function(s) {
          e.update(s || window.event);
        }), SVG.on(window, "mouseup.resize", function() {
          e.done();
        });
      }, y.prototype.update = function(t) {
        if (t) {
          var e = this._extractPosition(t), i = this.transformPoint(e.x, e.y), a = i.x - this.parameters.p.x, s = i.y - this.parameters.p.y;
          this.lastUpdateCall = [a, s], this.calc(a, s), this.el.fire("resizing", { dx: a, dy: s, event: t });
        } else
          this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1]);
      }, y.prototype.done = function() {
        this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone");
      }, y.prototype.snapToGrid = function(t, e, i, a) {
        var s;
        return a !== void 0 ? s = [(i + t) % this.options.snapToGrid, (a + e) % this.options.snapToGrid] : (i = i ?? 3, s = [(this.parameters.box.x + t + (1 & i ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + e + (2 & i ? 0 : this.parameters.box.height)) % this.options.snapToGrid]), t < 0 && (s[0] -= this.options.snapToGrid), e < 0 && (s[1] -= this.options.snapToGrid), t -= Math.abs(s[0]) < this.options.snapToGrid / 2 ? s[0] : s[0] - (t < 0 ? -this.options.snapToGrid : this.options.snapToGrid), e -= Math.abs(s[1]) < this.options.snapToGrid / 2 ? s[1] : s[1] - (e < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(t, e, i, a);
      }, y.prototype.constraintToBox = function(t, e, i, a) {
        var s, r, o = this.options.constraint || {};
        return a !== void 0 ? (s = i, r = a) : (s = this.parameters.box.x + (1 & i ? 0 : this.parameters.box.width), r = this.parameters.box.y + (2 & i ? 0 : this.parameters.box.height)), o.minX !== void 0 && s + t < o.minX && (t = o.minX - s), o.maxX !== void 0 && s + t > o.maxX && (t = o.maxX - s), o.minY !== void 0 && r + e < o.minY && (e = o.minY - r), o.maxY !== void 0 && r + e > o.maxY && (e = o.maxY - r), [t, e];
      }, y.prototype.checkAspectRatio = function(t, e) {
        if (!this.options.saveAspectRatio)
          return t;
        var i = t.slice(), a = this.parameters.box.width / this.parameters.box.height, s = this.parameters.box.width + t[0], r = this.parameters.box.height - t[1], o = s / r;
        return o < a ? (i[1] = s / a - this.parameters.box.height, e && (i[1] = -i[1])) : o > a && (i[0] = this.parameters.box.width - r * a, e && (i[0] = -i[0])), i;
      }, SVG.extend(SVG.Element, { resize: function(t) {
        return (this.remember("_resizeHandler") || new y(this)).init(t || {}), this;
      } }), SVG.Element.prototype.resize.defaults = { snapToAngle: 0.1, snapToGrid: 1, constraint: {}, saveAspectRatio: !1 };
    }).call(this);
  }(), window.Apex === void 0 && (window.Apex = {});
  var de = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "initModules", value: function() {
      this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "isSeriesHidden", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "exportToCSV", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations = new dt(this.ctx), this.ctx.axes = new we(this.ctx), this.ctx.core = new _e(this.ctx.el, this.ctx), this.ctx.config = new Mt({}), this.ctx.data = new Kt(this.ctx), this.ctx.grid = new te(this.ctx), this.ctx.graphics = new z(this.ctx), this.ctx.coreUtils = new q(this.ctx), this.ctx.crosshairs = new Gt(this.ctx), this.ctx.events = new ve(this.ctx), this.ctx.exports = new Rt(this.ctx), this.ctx.localization = new ye(this.ctx), this.ctx.options = new B(), this.ctx.responsive = new ke(this.ctx), this.ctx.series = new et(this.ctx), this.ctx.theme = new Ae(this.ctx), this.ctx.formatters = new rt(this.ctx), this.ctx.titleSubtitle = new Se(this.ctx), this.ctx.legend = new ee(this.ctx), this.ctx.toolbar = new ie(this.ctx), this.ctx.tooltip = new re(this.ctx), this.ctx.dimensions = new Ht(this.ctx), this.ctx.updateHelpers = new Ue(this.ctx), this.ctx.zoomPanSelection = new Te(this.ctx), this.ctx.w.globals.tooltip = new re(this.ctx);
    } }]), y;
  }(), ge = function() {
    function y(t) {
      Y(this, y), this.ctx = t, this.w = t.w;
    }
    return F(y, [{ key: "clear", value: function(t) {
      var e = t.isUpdating;
      this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({ isUpdating: e });
    } }, { key: "killSVG", value: function(t) {
      t.each(function(e, i) {
        this.removeClass("*"), this.off(), this.stop();
      }, !0), t.ungroup(), t.clear();
    } }, { key: "clearDomElements", value: function(t) {
      var e = this, i = t.isUpdating, a = this.w.globals.dom.Paper.node;
      a.parentNode && a.parentNode.parentNode && !i && (a.parentNode.parentNode.style.minHeight = "unset");
      var s = this.w.globals.dom.baseEl;
      s && this.ctx.eventList.forEach(function(o) {
        s.removeEventListener(o, e.ctx.events.documentEvent);
      });
      var r = this.w.globals.dom;
      if (this.ctx.el !== null)
        for (; this.ctx.el.firstChild; )
          this.ctx.el.removeChild(this.ctx.el.firstChild);
      this.killSVG(r.Paper), r.Paper.remove(), r.elWrap = null, r.elGraphical = null, r.elLegendWrap = null, r.elLegendForeign = null, r.baseEl = null, r.elGridRect = null, r.elGridRectMask = null, r.elGridRectMarkerMask = null, r.elForecastMask = null, r.elNonForecastMask = null, r.elDefs = null;
    } }]), y;
  }(), qt = /* @__PURE__ */ new WeakMap(), qe = function() {
    function y(t, e) {
      Y(this, y), this.opts = e, this.ctx = this, this.w = new me(e).init(), this.el = t, this.w.globals.cuid = P.randomId(), this.w.globals.chartID = this.w.config.chart.id ? P.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new de(this).initModules(), this.create = P.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this);
    }
    return F(y, [{ key: "render", value: function() {
      var t = this;
      return new Promise(function(e, i) {
        if (t.el !== null) {
          Apex._chartInstances === void 0 && (Apex._chartInstances = []), t.w.config.chart.id && Apex._chartInstances.push({ id: t.w.globals.chartID, group: t.w.config.chart.group, chart: t }), t.setLocale(t.w.config.chart.defaultLocale);
          var a = t.w.config.chart.events.beforeMount;
          if (typeof a == "function" && a(t, t.w), t.events.fireEvent("beforeMount", [t, t.w]), window.addEventListener("resize", t.windowResizeHandler), function(g, p) {
            var f = !1;
            if (g.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
              var b = g.getBoundingClientRect();
              g.style.display !== "none" && b.width !== 0 || (f = !0);
            }
            var m = new ResizeObserver(function(w) {
              f && p.call(g, w), f = !0;
            });
            g.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(g.children).forEach(function(w) {
              return m.observe(w);
            }) : m.observe(g), qt.set(p, m);
          }(t.el.parentNode, t.parentResizeHandler), !t.css) {
            var s = t.el.getRootNode && t.el.getRootNode(), r = P.is("ShadowRoot", s), o = t.el.ownerDocument, n = o.getElementById("apexcharts-css");
            if (r || !n) {
              var h;
              t.css = document.createElement("style"), t.css.id = "apexcharts-css", t.css.textContent = `@keyframes opaque {
  0% {
      opacity: 0
  }

  to {
      opacity: 1
  }
}

@keyframes resizeanim {
  0%,to {
      opacity: 0
  }
}

.apexcharts-canvas {
  position: relative;
  user-select: none
}

.apexcharts-canvas ::-webkit-scrollbar {
  -webkit-appearance: none;
  width: 6px
}

.apexcharts-canvas ::-webkit-scrollbar-thumb {
  border-radius: 4px;
  background-color: rgba(0,0,0,.5);
  box-shadow: 0 0 1px rgba(255,255,255,.5);
  -webkit-box-shadow: 0 0 1px rgba(255,255,255,.5)
}

.apexcharts-inner {
  position: relative
}

.apexcharts-text tspan {
  font-family: inherit
}

.legend-mouseover-inactive {
  transition: .15s ease all;
  opacity: .2
}

.apexcharts-legend-text {
  padding-left: 15px;
  margin-left: -15px;
}

.apexcharts-series-collapsed {
  opacity: 0
}

.apexcharts-tooltip {
  border-radius: 5px;
  box-shadow: 2px 2px 6px -4px #999;
  cursor: default;
  font-size: 14px;
  left: 62px;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 20px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  white-space: nowrap;
  z-index: 12;
  transition: .15s ease all
}

.apexcharts-tooltip.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-tooltip.apexcharts-theme-light {
  border: 1px solid #e3e3e3;
  background: rgba(255,255,255,.96)
}

.apexcharts-tooltip.apexcharts-theme-dark {
  color: #fff;
  background: rgba(30,30,30,.8)
}

.apexcharts-tooltip * {
  font-family: inherit
}

.apexcharts-tooltip-title {
  padding: 6px;
  font-size: 15px;
  margin-bottom: 4px
}

.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {
  background: #eceff1;
  border-bottom: 1px solid #ddd
}

.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {
  background: rgba(0,0,0,.7);
  border-bottom: 1px solid #333
}

.apexcharts-tooltip-text-goals-value,.apexcharts-tooltip-text-y-value,.apexcharts-tooltip-text-z-value {
  display: inline-block;
  margin-left: 5px;
  font-weight: 600
}

.apexcharts-tooltip-text-goals-label:empty,.apexcharts-tooltip-text-goals-value:empty,.apexcharts-tooltip-text-y-label:empty,.apexcharts-tooltip-text-y-value:empty,.apexcharts-tooltip-text-z-value:empty,.apexcharts-tooltip-title:empty {
  display: none
}

.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {
  padding: 6px 0 5px
}

.apexcharts-tooltip-goals-group,.apexcharts-tooltip-text-goals-label,.apexcharts-tooltip-text-goals-value {
  display: flex
}

.apexcharts-tooltip-text-goals-label:not(:empty),.apexcharts-tooltip-text-goals-value:not(:empty) {
  margin-top: -6px
}

.apexcharts-tooltip-marker {
  width: 12px;
  height: 12px;
  position: relative;
  top: 0;
  margin-right: 10px;
  border-radius: 50%
}

.apexcharts-tooltip-series-group {
  padding: 0 10px;
  display: none;
  text-align: left;
  justify-content: left;
  align-items: center
}

.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {
  opacity: 1
}

.apexcharts-tooltip-series-group.apexcharts-active,.apexcharts-tooltip-series-group:last-child {
  padding-bottom: 4px
}

.apexcharts-tooltip-series-group-hidden {
  opacity: 0;
  height: 0;
  line-height: 0;
  padding: 0!important
}

.apexcharts-tooltip-y-group {
  padding: 6px 0 5px
}

.apexcharts-custom-tooltip,.apexcharts-tooltip-box {
  padding: 4px 8px
}

.apexcharts-tooltip-boxPlot {
  display: flex;
  flex-direction: column-reverse
}

.apexcharts-tooltip-box>div {
  margin: 4px 0
}

.apexcharts-tooltip-box span.value {
  font-weight: 700
}

.apexcharts-tooltip-rangebar {
  padding: 5px 8px
}

.apexcharts-tooltip-rangebar .category {
  font-weight: 600;
  color: #777
}

.apexcharts-tooltip-rangebar .series-name {
  font-weight: 700;
  display: block;
  margin-bottom: 5px
}

.apexcharts-xaxistooltip,.apexcharts-yaxistooltip {
  opacity: 0;
  pointer-events: none;
  color: #373d3f;
  font-size: 13px;
  text-align: center;
  border-radius: 2px;
  position: absolute;
  z-index: 10;
  background: #eceff1;
  border: 1px solid #90a4ae
}

.apexcharts-xaxistooltip {
  padding: 9px 10px;
  transition: .15s ease all
}

.apexcharts-xaxistooltip.apexcharts-theme-dark {
  background: rgba(0,0,0,.7);
  border: 1px solid rgba(0,0,0,.5);
  color: #fff
}

.apexcharts-xaxistooltip:after,.apexcharts-xaxistooltip:before {
  left: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.apexcharts-xaxistooltip:after {
  border-color: transparent;
  border-width: 6px;
  margin-left: -6px
}

.apexcharts-xaxistooltip:before {
  border-color: transparent;
  border-width: 7px;
  margin-left: -7px
}

.apexcharts-xaxistooltip-bottom:after,.apexcharts-xaxistooltip-bottom:before {
  bottom: 100%
}

.apexcharts-xaxistooltip-top:after,.apexcharts-xaxistooltip-top:before {
  top: 100%
}

.apexcharts-xaxistooltip-bottom:after {
  border-bottom-color: #eceff1
}

.apexcharts-xaxistooltip-bottom:before {
  border-bottom-color: #90a4ae
}

.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {
  border-bottom-color: rgba(0,0,0,.5)
}

.apexcharts-xaxistooltip-top:after {
  border-top-color: #eceff1
}

.apexcharts-xaxistooltip-top:before {
  border-top-color: #90a4ae
}

.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after,.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {
  border-top-color: rgba(0,0,0,.5)
}

.apexcharts-xaxistooltip.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-yaxistooltip {
  padding: 4px 10px
}

.apexcharts-yaxistooltip.apexcharts-theme-dark {
  background: rgba(0,0,0,.7);
  border: 1px solid rgba(0,0,0,.5);
  color: #fff
}

.apexcharts-yaxistooltip:after,.apexcharts-yaxistooltip:before {
  top: 50%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none
}

.apexcharts-yaxistooltip:after {
  border-color: transparent;
  border-width: 6px;
  margin-top: -6px
}

.apexcharts-yaxistooltip:before {
  border-color: transparent;
  border-width: 7px;
  margin-top: -7px
}

.apexcharts-yaxistooltip-left:after,.apexcharts-yaxistooltip-left:before {
  left: 100%
}

.apexcharts-yaxistooltip-right:after,.apexcharts-yaxistooltip-right:before {
  right: 100%
}

.apexcharts-yaxistooltip-left:after {
  border-left-color: #eceff1
}

.apexcharts-yaxistooltip-left:before {
  border-left-color: #90a4ae
}

.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {
  border-left-color: rgba(0,0,0,.5)
}

.apexcharts-yaxistooltip-right:after {
  border-right-color: #eceff1
}

.apexcharts-yaxistooltip-right:before {
  border-right-color: #90a4ae
}

.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after,.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {
  border-right-color: rgba(0,0,0,.5)
}

.apexcharts-yaxistooltip.apexcharts-active {
  opacity: 1
}

.apexcharts-yaxistooltip-hidden {
  display: none
}

.apexcharts-xcrosshairs,.apexcharts-ycrosshairs {
  pointer-events: none;
  opacity: 0;
  transition: .15s ease all
}

.apexcharts-xcrosshairs.apexcharts-active,.apexcharts-ycrosshairs.apexcharts-active {
  opacity: 1;
  transition: .15s ease all
}

.apexcharts-ycrosshairs-hidden {
  opacity: 0
}

.apexcharts-selection-rect {
  cursor: move
}

.svg_select_boundingRect,.svg_select_points_rot {
  pointer-events: none;
  opacity: 0;
  visibility: hidden
}

.apexcharts-selection-rect+g .svg_select_boundingRect,.apexcharts-selection-rect+g .svg_select_points_rot {
  opacity: 0;
  visibility: hidden
}

.apexcharts-selection-rect+g .svg_select_points_l,.apexcharts-selection-rect+g .svg_select_points_r {
  cursor: ew-resize;
  opacity: 1;
  visibility: visible
}

.svg_select_points {
  fill: #efefef;
  stroke: #333;
  rx: 2
}

.apexcharts-svg.apexcharts-zoomable.hovering-zoom {
  cursor: crosshair
}

.apexcharts-svg.apexcharts-zoomable.hovering-pan {
  cursor: move
}

.apexcharts-menu-icon,.apexcharts-pan-icon,.apexcharts-reset-icon,.apexcharts-selection-icon,.apexcharts-toolbar-custom-icon,.apexcharts-zoom-icon,.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {
  cursor: pointer;
  width: 20px;
  height: 20px;
  line-height: 24px;
  color: #6e8192;
  text-align: center
}

.apexcharts-menu-icon svg,.apexcharts-reset-icon svg,.apexcharts-zoom-icon svg,.apexcharts-zoomin-icon svg,.apexcharts-zoomout-icon svg {
  fill: #6e8192
}

.apexcharts-selection-icon svg {
  fill: #444;
  transform: scale(.76)
}

.apexcharts-theme-dark .apexcharts-menu-icon svg,.apexcharts-theme-dark .apexcharts-pan-icon svg,.apexcharts-theme-dark .apexcharts-reset-icon svg,.apexcharts-theme-dark .apexcharts-selection-icon svg,.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg,.apexcharts-theme-dark .apexcharts-zoom-icon svg,.apexcharts-theme-dark .apexcharts-zoomin-icon svg,.apexcharts-theme-dark .apexcharts-zoomout-icon svg {
  fill: #f3f4f5
}

.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg {
  fill: #008ffb
}

.apexcharts-theme-light .apexcharts-menu-icon:hover svg,.apexcharts-theme-light .apexcharts-reset-icon:hover svg,.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg {
  fill: #333
}

.apexcharts-menu-icon,.apexcharts-selection-icon {
  position: relative
}

.apexcharts-reset-icon {
  margin-left: 5px
}

.apexcharts-menu-icon,.apexcharts-reset-icon,.apexcharts-zoom-icon {
  transform: scale(.85)
}

.apexcharts-zoomin-icon,.apexcharts-zoomout-icon {
  transform: scale(.7)
}

.apexcharts-zoomout-icon {
  margin-right: 3px
}

.apexcharts-pan-icon {
  transform: scale(.62);
  position: relative;
  left: 1px;
  top: 0
}

.apexcharts-pan-icon svg {
  fill: #fff;
  stroke: #6e8192;
  stroke-width: 2
}

.apexcharts-pan-icon.apexcharts-selected svg {
  stroke: #008ffb
}

.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {
  stroke: #333
}

.apexcharts-toolbar {
  position: absolute;
  z-index: 11;
  max-width: 176px;
  text-align: right;
  border-radius: 3px;
  padding: 0 6px 2px;
  display: flex;
  justify-content: space-between;
  align-items: center
}

.apexcharts-menu {
  background: #fff;
  position: absolute;
  top: 100%;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 3px;
  right: 10px;
  opacity: 0;
  min-width: 110px;
  transition: .15s ease all;
  pointer-events: none
}

.apexcharts-menu.apexcharts-menu-open {
  opacity: 1;
  pointer-events: all;
  transition: .15s ease all
}

.apexcharts-menu-item {
  padding: 6px 7px;
  font-size: 12px;
  cursor: pointer
}

.apexcharts-theme-light .apexcharts-menu-item:hover {
  background: #eee
}

.apexcharts-theme-dark .apexcharts-menu {
  background: rgba(0,0,0,.7);
  color: #fff
}

@media screen and (min-width:768px) {
  .apexcharts-canvas:hover .apexcharts-toolbar {
      opacity: 1
  }
}

.apexcharts-canvas .apexcharts-element-hidden,.apexcharts-datalabel.apexcharts-element-hidden,.apexcharts-hide .apexcharts-series-points {
  opacity: 0
}

.apexcharts-hidden-element-shown {
  opacity: 1;
  transition: 0.25s ease all;
}
.apexcharts-datalabel,.apexcharts-datalabel-label,.apexcharts-datalabel-value,.apexcharts-datalabels,.apexcharts-pie-label {
  cursor: default;
  pointer-events: none
}

.apexcharts-pie-label-delay {
  opacity: 0;
  animation-name: opaque;
  animation-duration: .3s;
  animation-fill-mode: forwards;
  animation-timing-function: ease
}

.apexcharts-radialbar-label {
  cursor: pointer;
}

.apexcharts-annotation-rect,.apexcharts-area-series .apexcharts-area,.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-gridline,.apexcharts-line,.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,.apexcharts-point-annotation-label,.apexcharts-radar-series path,.apexcharts-radar-series polygon,.apexcharts-toolbar svg,.apexcharts-tooltip .apexcharts-marker,.apexcharts-xaxis-annotation-label,.apexcharts-yaxis-annotation-label,.apexcharts-zoom-rect {
  pointer-events: none
}

.apexcharts-marker {
  transition: .15s ease all
}

.resize-triggers {
  animation: 1ms resizeanim;
  visibility: hidden;
  opacity: 0;
  height: 100%;
  width: 100%;
  overflow: hidden
}

.contract-trigger:before,.resize-triggers,.resize-triggers>div {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0
}

.resize-triggers>div {
  height: 100%;
  width: 100%;
  background: #eee;
  overflow: auto
}

.contract-trigger:before {
  overflow: hidden;
  width: 200%;
  height: 200%
}

.apexcharts-bar-goals-markers{
  pointer-events: none
}

.apexcharts-bar-shadows{
  pointer-events: none
}

.apexcharts-rangebar-goals-markers{
  pointer-events: none
}`;
              var c = ((h = t.opts.chart) === null || h === void 0 ? void 0 : h.nonce) || t.w.config.chart.nonce;
              c && t.css.setAttribute("nonce", c), r ? s.prepend(t.css) : o.head.appendChild(t.css);
            }
          }
          var d = t.create(t.w.config.series, {});
          if (!d)
            return e(t);
          t.mount(d).then(function() {
            typeof t.w.config.chart.events.mounted == "function" && t.w.config.chart.events.mounted(t, t.w), t.events.fireEvent("mounted", [t, t.w]), e(d);
          }).catch(function(g) {
            i(g);
          });
        } else
          i(new Error("Element not found"));
      });
    } }, { key: "create", value: function(t, e) {
      var i = this.w;
      new de(this).initModules();
      var a = this.w.globals;
      if (a.noData = !1, a.animationEnded = !1, this.responsive.checkResponsiveConfig(e), i.config.xaxis.convertedCatToNumeric && new ot(i.config).convertCatToNumericXaxis(i.config, this.ctx), this.el === null || (this.core.setupElements(), i.config.chart.type === "treemap" && (i.config.grid.show = !1, i.config.yaxis[0].show = !1), a.svgWidth === 0))
        return a.animationEnded = !0, null;
      var s = q.checkComboSeries(t);
      a.comboCharts = s.comboCharts, a.comboBarCount = s.comboBarCount;
      var r = t.every(function(c) {
        return c.data && c.data.length === 0;
      });
      (t.length === 0 || r) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(t), this.theme.init(), new It(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), a.noData && a.collapsedSeries.length !== a.series.length && !i.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), a.axisCharts && (this.core.coreCalculations(), i.config.xaxis.type !== "category" && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = i.globals.minX, this.ctx.toolbar.maxX = i.globals.maxX), this.formatters.heatmapLabelFormatters(), new q(this).getLargestMarkerSize(), this.dimensions.plotCoords();
      var o = this.core.xySettings();
      this.grid.createGridMask();
      var n = this.core.plotChartType(t, o), h = new kt(this);
      return h.bringForward(), i.config.dataLabels.background.enabled && h.dataLabelsBackground(), this.core.shiftGraphPosition(), { elGraph: n, xyRatios: o, dimensions: { plot: { left: i.globals.translateX, top: i.globals.translateY, width: i.globals.gridWidth, height: i.globals.gridHeight } } };
    } }, { key: "mount", value: function() {
      var t = this, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, i = this, a = i.w;
      return new Promise(function(s, r) {
        if (i.el === null)
          return r(new Error("Not enough data to display or target element not found"));
        (e === null || a.globals.allSeriesCollapsed) && i.series.handleNoData(), i.grid = new te(i);
        var o, n, h = i.grid.drawGrid();
        if (i.annotations = new it(i), i.annotations.drawImageAnnos(), i.annotations.drawTextAnnos(), a.config.grid.position === "back" && (h && a.globals.dom.elGraphical.add(h.el), h != null && (o = h.elGridBorders) !== null && o !== void 0 && o.node && a.globals.dom.elGraphical.add(h.elGridBorders)), Array.isArray(e.elGraph))
          for (var c = 0; c < e.elGraph.length; c++)
            a.globals.dom.elGraphical.add(e.elGraph[c]);
        else
          a.globals.dom.elGraphical.add(e.elGraph);
        a.config.grid.position === "front" && (h && a.globals.dom.elGraphical.add(h.el), h != null && (n = h.elGridBorders) !== null && n !== void 0 && n.node && a.globals.dom.elGraphical.add(h.elGridBorders)), a.config.xaxis.crosshairs.position === "front" && i.crosshairs.drawXCrosshairs(), a.config.yaxis[0].crosshairs.position === "front" && i.crosshairs.drawYCrosshairs(), a.config.chart.type !== "treemap" && i.axes.drawAxis(a.config.chart.type, h);
        var d = new Tt(t.ctx, h), g = new Bt(t.ctx, h);
        if (h !== null && (d.xAxisLabelCorrections(h.xAxisTickWidth), g.setYAxisTextAlignments(), a.config.yaxis.map(function(f, b) {
          a.globals.ignoreYAxisIndexes.indexOf(b) === -1 && g.yAxisTitleRotate(b, f.opposite);
        })), i.annotations.drawAxesAnnotations(), !a.globals.noData) {
          if (a.config.tooltip.enabled && !a.globals.noData && i.w.globals.tooltip.drawTooltip(e.xyRatios), a.globals.axisCharts && (a.globals.isXNumeric || a.config.xaxis.convertedCatToNumeric || a.globals.isRangeBar))
            (a.config.chart.zoom.enabled || a.config.chart.selection && a.config.chart.selection.enabled || a.config.chart.pan && a.config.chart.pan.enabled) && i.zoomPanSelection.init({ xyRatios: e.xyRatios });
          else {
            var p = a.config.chart.toolbar.tools;
            ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach(function(f) {
              p[f] = !1;
            });
          }
          a.config.chart.toolbar.show && !a.globals.allSeriesCollapsed && i.toolbar.createToolbar();
        }
        a.globals.memory.methodsToExec.length > 0 && a.globals.memory.methodsToExec.forEach(function(f) {
          f.method(f.params, !1, f.context);
        }), a.globals.axisCharts || a.globals.noData || i.core.resizeNonAxisCharts(), s(i);
      });
    } }, { key: "destroy", value: function() {
      var t, e;
      window.removeEventListener("resize", this.windowResizeHandler), this.el.parentNode, t = this.parentResizeHandler, (e = qt.get(t)) && (e.disconnect(), qt.delete(t));
      var i = this.w.config.chart.id;
      i && Apex._chartInstances.forEach(function(a, s) {
        a.id === P.escapeString(i) && Apex._chartInstances.splice(s, 1);
      }), new ge(this.ctx).clear({ isUpdating: !1 });
    } }, { key: "updateOptions", value: function(t) {
      var e = this, i = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], a = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], s = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], r = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], o = this.w;
      return o.globals.selection = void 0, t.series && (this.series.resetSeries(!1, !0, !1), t.series.length && t.series[0].data && (t.series = t.series.map(function(n, h) {
        return e.updateHelpers._extendSeries(n, h);
      })), this.updateHelpers.revertDefaultAxisMinMax()), t.xaxis && (t = this.updateHelpers.forceXAxisUpdate(t)), t.yaxis && (t = this.updateHelpers.forceYAxisUpdate(t)), o.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), t.theme && (t = this.theme.updateThemeOptions(t)), this.updateHelpers._updateOptions(t, i, a, s, r);
    } }, { key: "updateSeries", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
      return this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(t, e, i);
    } }, { key: "appendSeries", value: function(t) {
      var e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], a = this.w.config.series.slice();
      return a.push(t), this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(a, e, i);
    } }, { key: "appendData", value: function(t) {
      var e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = this;
      i.w.globals.dataChanged = !0, i.series.getPreviousPaths();
      for (var a = i.w.config.series.slice(), s = 0; s < a.length; s++)
        if (t[s] !== null && t[s] !== void 0)
          for (var r = 0; r < t[s].data.length; r++)
            a[s].data.push(t[s].data[r]);
      return i.w.config.series = a, e && (i.w.globals.initialSeries = P.clone(i.w.config.series)), this.update();
    } }, { key: "update", value: function(t) {
      var e = this;
      return new Promise(function(i, a) {
        new ge(e.ctx).clear({ isUpdating: !0 });
        var s = e.create(e.w.config.series, t);
        if (!s)
          return i(e);
        e.mount(s).then(function() {
          typeof e.w.config.chart.events.updated == "function" && e.w.config.chart.events.updated(e, e.w), e.events.fireEvent("updated", [e, e.w]), e.w.globals.isDirty = !0, i(e);
        }).catch(function(r) {
          a(r);
        });
      });
    } }, { key: "getSyncedCharts", value: function() {
      var t = this.getGroupedCharts(), e = [this];
      return t.length && (e = [], t.forEach(function(i) {
        e.push(i);
      })), e;
    } }, { key: "getGroupedCharts", value: function() {
      var t = this;
      return Apex._chartInstances.filter(function(e) {
        if (e.group)
          return !0;
      }).map(function(e) {
        return t.w.config.chart.group === e.group ? e.chart : t;
      });
    } }, { key: "toggleSeries", value: function(t) {
      return this.series.toggleSeries(t);
    } }, { key: "highlightSeriesOnLegendHover", value: function(t, e) {
      return this.series.toggleSeriesOnHover(t, e);
    } }, { key: "showSeries", value: function(t) {
      this.series.showSeries(t);
    } }, { key: "hideSeries", value: function(t) {
      this.series.hideSeries(t);
    } }, { key: "isSeriesHidden", value: function(t) {
      this.series.isSeriesHidden(t);
    } }, { key: "resetSeries", value: function() {
      var t = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
      this.series.resetSeries(t, e);
    } }, { key: "addEventListener", value: function(t, e) {
      this.events.addEventListener(t, e);
    } }, { key: "removeEventListener", value: function(t, e) {
      this.events.removeEventListener(t, e);
    } }, { key: "addXaxisAnnotation", value: function(t) {
      var e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, a = this;
      i && (a = i), a.annotations.addXaxisAnnotationExternal(t, e, a);
    } }, { key: "addYaxisAnnotation", value: function(t) {
      var e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, a = this;
      i && (a = i), a.annotations.addYaxisAnnotationExternal(t, e, a);
    } }, { key: "addPointAnnotation", value: function(t) {
      var e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, a = this;
      i && (a = i), a.annotations.addPointAnnotationExternal(t, e, a);
    } }, { key: "clearAnnotations", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : void 0, e = this;
      t && (e = t), e.annotations.clearAnnotations(e);
    } }, { key: "removeAnnotation", value: function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0, i = this;
      e && (i = e), i.annotations.removeAnnotation(i, t);
    } }, { key: "getChartArea", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner");
    } }, { key: "getSeriesTotalXRange", value: function(t, e) {
      return this.coreUtils.getSeriesTotalsXRange(t, e);
    } }, { key: "getHighestValueInSeries", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return new Wt(this.ctx).getMinYMaxY(t).highestY;
    } }, { key: "getLowestValueInSeries", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return new Wt(this.ctx).getMinYMaxY(t).lowestY;
    } }, { key: "getSeriesTotal", value: function() {
      return this.w.globals.seriesTotals;
    } }, { key: "toggleDataPointSelection", value: function(t, e) {
      return this.updateHelpers.toggleDataPointSelection(t, e);
    } }, { key: "zoomX", value: function(t, e) {
      this.ctx.toolbar.zoomUpdateOptions(t, e);
    } }, { key: "setLocale", value: function(t) {
      this.localization.setCurrentLocaleValues(t);
    } }, { key: "dataURI", value: function(t) {
      return new Rt(this.ctx).dataURI(t);
    } }, { key: "exportToCSV", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return new Rt(this.ctx).exportToCSV(t);
    } }, { key: "paper", value: function() {
      return this.w.globals.dom.Paper;
    } }, { key: "_parentResizeCallback", value: function() {
      this.w.globals.animationEnded && this.w.config.chart.redrawOnParentResize && this._windowResize();
    } }, { key: "_windowResize", value: function() {
      var t = this;
      clearTimeout(this.w.globals.resizeTimer), this.w.globals.resizeTimer = window.setTimeout(function() {
        t.w.globals.resized = !0, t.w.globals.dataChanged = !1, t.ctx.update();
      }, 150);
    } }, { key: "_windowResizeHandler", value: function() {
      var t = this.w.config.chart.redrawOnWindowResize;
      typeof t == "function" && (t = t()), t && this._windowResize();
    } }], [{ key: "getChartByID", value: function(t) {
      var e = P.escapeString(t);
      if (Apex._chartInstances) {
        var i = Apex._chartInstances.filter(function(a) {
          return a.id === e;
        })[0];
        return i && i.chart;
      }
    } }, { key: "initOnLoad", value: function() {
      for (var t = document.querySelectorAll("[data-apexcharts]"), e = 0; e < t.length; e++)
        new y(t[e], JSON.parse(t[e].getAttribute("data-options"))).render();
    } }, { key: "exec", value: function(t, e) {
      var i = this.getChartByID(t);
      if (i) {
        i.w.globals.isExecCalled = !0;
        var a = null;
        if (i.publicMethods.indexOf(e) !== -1) {
          for (var s = arguments.length, r = new Array(s > 2 ? s - 2 : 0), o = 2; o < s; o++)
            r[o - 2] = arguments[o];
          a = i[e].apply(i, r);
        }
        return a;
      }
    } }, { key: "merge", value: function(t, e) {
      return P.extend(t, e);
    } }]), y;
  }();
  j.exports = qe;
})($t, $t.exports);
var li = $t.exports;
const pe = /* @__PURE__ */ ni(li), fe = [
  "animationEnd",
  "beforeMount",
  "mounted",
  "updated",
  "click",
  "mouseMove",
  "mouseLeave",
  "legendClick",
  "markerClick",
  "selection",
  "dataPointSelection",
  "dataPointMouseEnter",
  "dataPointMouseLeave",
  "beforeZoom",
  "beforeResetZoom",
  "zoomed",
  "scrolled",
  "brushScrolled"
], Xt = Ze({
  name: "apexchart",
  props: {
    options: {
      type: Object
    },
    type: {
      type: String
    },
    series: {
      type: Array,
      required: !0
    },
    width: {
      default: "100%"
    },
    height: {
      default: "auto"
    }
  },
  // events emitted by this component
  emits: fe,
  setup(j, { emit: vt }) {
    const ht = Ct(null), X = Ct(null), U = (O) => O && typeof O == "object" && !Array.isArray(O) && O != null, Y = (O, B) => {
      typeof Object.assign != "function" && function() {
        Object.assign = function(G) {
          if (G == null)
            throw new TypeError("Cannot convert undefined or null to object");
          let rt = Object(G);
          for (let xt = 1; xt < arguments.length; xt++) {
            let gt = arguments[xt];
            if (gt != null)
              for (let ot in gt)
                gt.hasOwnProperty(ot) && (rt[ot] = gt[ot]);
          }
          return rt;
        };
      }();
      let it = Object.assign({}, O);
      return U(O) && U(B) && Object.keys(B).forEach((G) => {
        U(B[G]) ? G in O ? it[G] = Y(O[G], B[G]) : Object.assign(it, {
          [G]: B[G]
        }) : Object.assign(it, {
          [G]: B[G]
        });
      }), it;
    }, ct = async () => {
      if (await ei(), X.value)
        return;
      const O = {
        chart: {
          type: j.type || j.options.chart.type || "line",
          height: j.height,
          width: j.width,
          events: {}
        },
        series: j.series
      };
      fe.forEach((it) => {
        let G = (...rt) => vt(it, ...rt);
        O.chart.events[it] = G;
      });
      const B = Y(j.options, O);
      return X.value = new pe(ht.value, B), X.value.render();
    }, F = () => (tt(), ct()), tt = () => {
      X.value.destroy();
    }, ut = (O, B) => X.value.updateSeries(O, B), yt = (O, B, it, G) => X.value.updateOptions(O, B, it, G), Lt = (O) => X.value.toggleSeries(O), Et = (O) => {
      X.value.showSeries(O);
    }, pt = (O) => {
      X.value.hideSeries(O);
    }, Yt = (O, B) => X.value.appendSeries(O, B), J = () => {
      X.value.resetSeries();
    }, Ft = (O, B) => {
      X.value.toggleDataPointSelection(O, B);
    }, Pt = (O) => X.value.appendData(O), P = (O, B) => X.value.zoomX(O, B), dt = (O) => X.value.dataURI(O), Z = (O) => X.value.setLocale(O), z = (O, B) => {
      X.value.addXaxisAnnotation(O, B);
    }, q = (O, B) => {
      X.value.addYaxisAnnotation(O, B);
    }, wt = (O, B) => {
      X.value.addPointAnnotation(O, B);
    }, Dt = (O, B) => {
      X.value.removeAnnotation(O, B);
    }, Nt = () => {
      X.value.clearAnnotations();
    };
    $e(() => {
      window.ApexCharts = pe;
    }), xe(() => {
      ht.value = Je().proxy.$el, ct();
    }), Qe(() => {
      X.value && tt();
    });
    const ft = Ke(j);
    return zt(ft.options, () => {
      !X.value && j.options ? ct() : X.value.updateOptions(j.options);
    }), zt(
      ft.series,
      () => {
        !X.value && j.series ? ct() : X.value.updateSeries(j.series);
      },
      { deep: !0 }
    ), zt(ft.type, () => {
      F();
    }), zt(ft.width, () => {
      F();
    }), zt(ft.height, () => {
      F();
    }), {
      chart: X,
      init: ct,
      refresh: F,
      destroy: tt,
      updateOptions: yt,
      updateSeries: ut,
      toggleSeries: Lt,
      showSeries: Et,
      hideSeries: pt,
      resetSeries: J,
      zoomX: P,
      toggleDataPointSelection: Ft,
      appendData: Pt,
      appendSeries: Yt,
      addXaxisAnnotation: z,
      addYaxisAnnotation: q,
      addPointAnnotation: wt,
      removeAnnotation: Dt,
      clearAnnotations: Nt,
      setLocale: Z,
      dataURI: dt
    };
  },
  render() {
    return ti("div", {
      class: "vue-apexcharts"
    });
  }
}), hi = (j) => {
  j.component(Xt.name, Xt);
};
Xt.install = hi;
const ci = { style: { display: "flex", "justify-content": "space-around" } }, di = /* @__PURE__ */ Zt("h2", null, "Check your Chart", -1), gi = {
  components: {
    apexchart: Xt
  }
}, ui = /* @__PURE__ */ Object.assign(gi, {
  __name: "LineChart",
  setup(j) {
    Ct({}), Ct([44, 55, 41, 17, 15]);
    const vt = Ct({
      chart: {
        id: "vuechart-example"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    }), ht = Ct([
      {
        name: "series-1",
        data: [30, 4, 45, 50, 49, 60, 70, 91]
      }
    ]);
    return xe(() => {
    }), (X, U) => {
      const Y = ii("apexchart");
      return be(), ai("div", null, [
        Zt("div", ci, [
          Zt("div", null, [
            di,
            si(Y, {
              width: "500",
              type: "line",
              options: vt.value,
              series: ht.value
            }, null, 8, ["options", "series"])
          ])
        ])
      ]);
    };
  }
}), pi = {
  __name: "App",
  setup(j) {
    return (vt, ht) => (be(), ri(ui));
  }
}, xi = oi(pi, {
  components: {
    apexchart: Xt
  }
});
export {
  xi as CustomChartWidget
};
