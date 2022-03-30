(() => {
  "use strict";
  const e = {};
  let t = !0,
    s = (e = 500) => {
      let s = document.querySelector("body");
      if (t) {
        let n = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < n.length; e++) {
            n[e].style.paddingRight = "0px";
          }
          (s.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, e),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    },
    n = (e = 500) => {
      let s = document.querySelector("body");
      if (t) {
        let n = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < n.length; e++) {
          n[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (s.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (t = !1),
          setTimeout(function () {
            t = !0;
          }, e);
      }
    };
  function i(e) {
    setTimeout(() => {
      window.FLS && console.log(e);
    }, 0);
  }
  function r(e) {
    return e.filter(function (e, t, s) {
      return s.indexOf(e) === t;
    });
  }
  let a = (e, t = !1, n = 500, r = 0) => {
    const a = "string" == typeof e ? document.querySelector(e) : e;
    if (a) {
      let o = "",
        l = 0;
      t &&
        ((o = "header.header"), (l = document.querySelector(o).offsetHeight));
      let d = {
        speedAsDuration: !0,
        speed: n,
        header: o,
        offset: r,
        easing: "easeOutQuad",
      };
      if (
        (document.documentElement.classList.contains("menu-open") &&
          (s(), document.documentElement.classList.remove("menu-open")),
        "undefined" != typeof SmoothScroll)
      )
        new SmoothScroll().animateScroll(a, "", d);
      else {
        let e = a.getBoundingClientRect().top + scrollY;
        window.scrollTo({ top: l ? e - l : e, behavior: "smooth" });
      }
      i(`[gotoBlock]: Юхуу...едем к ${e}`);
    } else i(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${e}`);
  };
  let o = {
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
    formClean(t) {
      t.reset(),
        setTimeout(() => {
          let s = t.querySelectorAll("input,textarea");
          for (let e = 0; e < s.length; e++) {
            const t = s[e];
            t.parentElement.classList.remove("_form-focus"),
              t.classList.remove("_form-focus"),
              o.removeError(t);
          }
          let n = t.querySelectorAll(".checkbox__input");
          if (n.length > 0)
            for (let e = 0; e < n.length; e++) {
              n[e].checked = !1;
            }
          if (e.select) {
            let s = t.querySelectorAll(".select");
            if (s.length)
              for (let t = 0; t < s.length; t++) {
                const n = s[t].querySelector("select");
                e.select.selectBuild(n);
              }
          }
        }, 0);
    },
    emailTest: (e) =>
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value),
  };
  function l(e) {
    return (
      null !== e &&
      "object" == typeof e &&
      "constructor" in e &&
      e.constructor === Object
    );
  }
  function d(e = {}, t = {}) {
    Object.keys(t).forEach((s) => {
      void 0 === e[s]
        ? (e[s] = t[s])
        : l(t[s]) && l(e[s]) && Object.keys(t[s]).length > 0 && d(e[s], t[s]);
    });
  }
  const c = {
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
  function p() {
    const e = "undefined" != typeof document ? document : {};
    return d(e, c), e;
  }
  const u = {
    document: c,
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
  function h() {
    const e = "undefined" != typeof window ? window : {};
    return d(e, u), e;
  }
  class m extends Array {
    constructor(e) {
      super(...(e || [])),
        (function (e) {
          const t = e.__proto__;
          Object.defineProperty(e, "__proto__", {
            get: () => t,
            set(e) {
              t.__proto__ = e;
            },
          });
        })(this);
    }
  }
  function f(e = []) {
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...f(e)) : t.push(e);
      }),
      t
    );
  }
  function g(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function v(e, t) {
    const s = h(),
      n = p();
    let i = [];
    if (!t && e instanceof m) return e;
    if (!e) return new m(i);
    if ("string" == typeof e) {
      const s = e.trim();
      if (s.indexOf("<") >= 0 && s.indexOf(">") >= 0) {
        let e = "div";
        0 === s.indexOf("<li") && (e = "ul"),
          0 === s.indexOf("<tr") && (e = "tbody"),
          (0 !== s.indexOf("<td") && 0 !== s.indexOf("<th")) || (e = "tr"),
          0 === s.indexOf("<tbody") && (e = "table"),
          0 === s.indexOf("<option") && (e = "select");
        const t = n.createElement(e);
        t.innerHTML = s;
        for (let e = 0; e < t.childNodes.length; e += 1)
          i.push(t.childNodes[e]);
      } else
        i = (function (e, t) {
          if ("string" != typeof e) return [e];
          const s = [],
            n = t.querySelectorAll(e);
          for (let e = 0; e < n.length; e += 1) s.push(n[e]);
          return s;
        })(e.trim(), t || n);
    } else if (e.nodeType || e === s || e === n) i.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof m) return e;
      i = e;
    }
    return new m(
      (function (e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1)
          -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t;
      })(i)
    );
  }
  v.fn = m.prototype;
  const b = "resize scroll".split(" ");
  function w(e) {
    return function (...t) {
      if (void 0 === t[0]) {
        for (let t = 0; t < this.length; t += 1)
          b.indexOf(e) < 0 &&
            (e in this[t] ? this[t][e]() : v(this[t]).trigger(e));
        return this;
      }
      return this.on(e, ...t);
    };
  }
  w("click"),
    w("blur"),
    w("focus"),
    w("focusin"),
    w("focusout"),
    w("keyup"),
    w("keydown"),
    w("keypress"),
    w("submit"),
    w("change"),
    w("mousedown"),
    w("mousemove"),
    w("mouseup"),
    w("mouseenter"),
    w("mouseleave"),
    w("mouseout"),
    w("mouseover"),
    w("touchstart"),
    w("touchend"),
    w("touchmove"),
    w("resize"),
    w("scroll");
  const y = {
    addClass: function (...e) {
      const t = f(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.add(...t);
        }),
        this
      );
    },
    removeClass: function (...e) {
      const t = f(e.map((e) => e.split(" ")));
      return (
        this.forEach((e) => {
          e.classList.remove(...t);
        }),
        this
      );
    },
    hasClass: function (...e) {
      const t = f(e.map((e) => e.split(" ")));
      return (
        g(this, (e) => t.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function (...e) {
      const t = f(e.map((e) => e.split(" ")));
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
          for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
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
        this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function (...e) {
      let [t, s, n, i] = e;
      function r(e) {
        const t = e.target;
        if (!t) return;
        const i = e.target.dom7EventData || [];
        if ((i.indexOf(e) < 0 && i.unshift(e), v(t).is(s))) n.apply(t, i);
        else {
          const e = v(t).parents();
          for (let t = 0; t < e.length; t += 1)
            v(e[t]).is(s) && n.apply(e[t], i);
        }
      }
      function a(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), n.apply(this, t);
      }
      "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
        i || (i = !1);
      const o = t.split(" ");
      let l;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (s)
          for (l = 0; l < o.length; l += 1) {
            const e = o[l];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: n, proxyListener: r }),
              t.addEventListener(e, r, i);
          }
        else
          for (l = 0; l < o.length; l += 1) {
            const e = o[l];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: n, proxyListener: a }),
              t.addEventListener(e, a, i);
          }
      }
      return this;
    },
    off: function (...e) {
      let [t, s, n, i] = e;
      "function" == typeof e[1] && (([t, n, i] = e), (s = void 0)),
        i || (i = !1);
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
              (n && s.listener === n) ||
              (n &&
                s.listener &&
                s.listener.dom7proxy &&
                s.listener.dom7proxy === n)
                ? (r.removeEventListener(t, s.proxyListener, i), a.splice(e, 1))
                : n ||
                  (r.removeEventListener(t, s.proxyListener, i),
                  a.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function (...e) {
      const t = h(),
        s = e[0].split(" "),
        n = e[1];
      for (let i = 0; i < s.length; i += 1) {
        const r = s[i];
        for (let s = 0; s < this.length; s += 1) {
          const i = this[s];
          if (t.CustomEvent) {
            const s = new t.CustomEvent(r, {
              detail: n,
              bubbles: !0,
              cancelable: !0,
            });
            (i.dom7EventData = e.filter((e, t) => t > 0)),
              i.dispatchEvent(s),
              (i.dom7EventData = []),
              delete i.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on("transitionend", function s(n) {
            n.target === this && (e.call(this, n), t.off("transitionend", s));
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
      const e = h();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = h(),
          t = p(),
          s = this[0],
          n = s.getBoundingClientRect(),
          i = t.body,
          r = s.clientTop || i.clientTop || 0,
          a = s.clientLeft || i.clientLeft || 0,
          o = s === e ? e.scrollY : s.scrollTop,
          l = s === e ? e.scrollX : s.scrollLeft;
        return { top: n.top + o - r, left: n.left + l - a };
      }
      return null;
    },
    css: function (e, t) {
      const s = h();
      let n;
      if (1 === arguments.length) {
        if ("string" != typeof e) {
          for (n = 0; n < this.length; n += 1)
            for (const t in e) this[n].style[t] = e[t];
          return this;
        }
        if (this[0])
          return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && "string" == typeof e) {
        for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
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
      const t = h(),
        s = p(),
        n = this[0];
      let i, r;
      if (!n || void 0 === e) return !1;
      if ("string" == typeof e) {
        if (n.matches) return n.matches(e);
        if (n.webkitMatchesSelector) return n.webkitMatchesSelector(e);
        if (n.msMatchesSelector) return n.msMatchesSelector(e);
        for (i = v(e), r = 0; r < i.length; r += 1) if (i[r] === n) return !0;
        return !1;
      }
      if (e === s) return n === s;
      if (e === t) return n === t;
      if (e.nodeType || e instanceof m) {
        for (i = e.nodeType ? [e] : e, r = 0; r < i.length; r += 1)
          if (i[r] === n) return !0;
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
      if (e > t - 1) return v([]);
      if (e < 0) {
        const s = t + e;
        return v(s < 0 ? [] : [this[s]]);
      }
      return v([this[e]]);
    },
    append: function (...e) {
      let t;
      const s = p();
      for (let n = 0; n < e.length; n += 1) {
        t = e[n];
        for (let e = 0; e < this.length; e += 1)
          if ("string" == typeof t) {
            const n = s.createElement("div");
            for (n.innerHTML = t; n.firstChild; )
              this[e].appendChild(n.firstChild);
          } else if (t instanceof m)
            for (let s = 0; s < t.length; s += 1) this[e].appendChild(t[s]);
          else this[e].appendChild(t);
      }
      return this;
    },
    prepend: function (e) {
      const t = p();
      let s, n;
      for (s = 0; s < this.length; s += 1)
        if ("string" == typeof e) {
          const i = t.createElement("div");
          for (i.innerHTML = e, n = i.childNodes.length - 1; n >= 0; n -= 1)
            this[s].insertBefore(i.childNodes[n], this[s].childNodes[0]);
        } else if (e instanceof m)
          for (n = 0; n < e.length; n += 1)
            this[s].insertBefore(e[n], this[s].childNodes[0]);
        else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && v(this[0].nextElementSibling).is(e)
            ? v([this[0].nextElementSibling])
            : v([])
          : this[0].nextElementSibling
          ? v([this[0].nextElementSibling])
          : v([])
        : v([]);
    },
    nextAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return v([]);
      for (; s.nextElementSibling; ) {
        const n = s.nextElementSibling;
        e ? v(n).is(e) && t.push(n) : t.push(n), (s = n);
      }
      return v(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && v(t.previousElementSibling).is(e)
            ? v([t.previousElementSibling])
            : v([])
          : t.previousElementSibling
          ? v([t.previousElementSibling])
          : v([]);
      }
      return v([]);
    },
    prevAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return v([]);
      for (; s.previousElementSibling; ) {
        const n = s.previousElementSibling;
        e ? v(n).is(e) && t.push(n) : t.push(n), (s = n);
      }
      return v(t);
    },
    parent: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1)
        null !== this[s].parentNode &&
          (e
            ? v(this[s].parentNode).is(e) && t.push(this[s].parentNode)
            : t.push(this[s].parentNode));
      return v(t);
    },
    parents: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        let n = this[s].parentNode;
        for (; n; ) e ? v(n).is(e) && t.push(n) : t.push(n), (n = n.parentNode);
      }
      return v(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? v([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const n = this[s].querySelectorAll(e);
        for (let e = 0; e < n.length; e += 1) t.push(n[e]);
      }
      return v(t);
    },
    children: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const n = this[s].children;
        for (let s = 0; s < n.length; s += 1)
          (e && !v(n[s]).is(e)) || t.push(n[s]);
      }
      return v(t);
    },
    filter: function (e) {
      return v(g(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  Object.keys(y).forEach((e) => {
    Object.defineProperty(v.fn, e, { value: y[e], writable: !0 });
  });
  const S = v;
  function C(e, t = 0) {
    return setTimeout(e, t);
  }
  function E() {
    return Date.now();
  }
  function T(e, t = "x") {
    const s = h();
    let n, i, r;
    const a = (function (e) {
      const t = h();
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
        ? ((i = a.transform || a.webkitTransform),
          i.split(",").length > 6 &&
            (i = i
              .split(", ")
              .map((e) => e.replace(",", "."))
              .join(", ")),
          (r = new s.WebKitCSSMatrix("none" === i ? "" : i)))
        : ((r =
            a.MozTransform ||
            a.OTransform ||
            a.MsTransform ||
            a.msTransform ||
            a.transform ||
            a
              .getPropertyValue("transform")
              .replace("translate(", "matrix(1, 0, 0, 1,")),
          (n = r.toString().split(","))),
      "x" === t &&
        (i = s.WebKitCSSMatrix
          ? r.m41
          : 16 === n.length
          ? parseFloat(n[12])
          : parseFloat(n[4])),
      "y" === t &&
        (i = s.WebKitCSSMatrix
          ? r.m42
          : 16 === n.length
          ? parseFloat(n[13])
          : parseFloat(n[5])),
      i || 0
    );
  }
  function x(e) {
    return (
      "object" == typeof e &&
      null !== e &&
      e.constructor &&
      "Object" === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function k(...e) {
    const t = Object(e[0]),
      s = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < e.length; i += 1) {
      const r = e[i];
      if (
        null != r &&
        ((n = r),
        !("undefined" != typeof window && void 0 !== window.HTMLElement
          ? n instanceof HTMLElement
          : n && (1 === n.nodeType || 11 === n.nodeType)))
      ) {
        const e = Object.keys(Object(r)).filter((e) => s.indexOf(e) < 0);
        for (let s = 0, n = e.length; s < n; s += 1) {
          const n = e[s],
            i = Object.getOwnPropertyDescriptor(r, n);
          void 0 !== i &&
            i.enumerable &&
            (x(t[n]) && x(r[n])
              ? r[n].__swiper__
                ? (t[n] = r[n])
                : k(t[n], r[n])
              : !x(t[n]) && x(r[n])
              ? ((t[n] = {}), r[n].__swiper__ ? (t[n] = r[n]) : k(t[n], r[n]))
              : (t[n] = r[n]));
        }
      }
    }
    var n;
    return t;
  }
  function L(e, t, s) {
    e.style.setProperty(t, s);
  }
  function $({ swiper: e, targetPosition: t, side: s }) {
    const n = h(),
      i = -e.translate;
    let r,
      a = null;
    const o = e.params.speed;
    (e.wrapperEl.style.scrollSnapType = "none"),
      n.cancelAnimationFrame(e.cssModeFrameID);
    const l = t > i ? "next" : "prev",
      d = (e, t) => ("next" === l && e >= t) || ("prev" === l && e <= t),
      c = () => {
        (r = new Date().getTime()), null === a && (a = r);
        const l = Math.max(Math.min((r - a) / o, 1), 0),
          p = 0.5 - Math.cos(l * Math.PI) / 2;
        let u = i + p * (t - i);
        if ((d(u, t) && (u = t), e.wrapperEl.scrollTo({ [s]: u }), d(u, t)))
          return (
            (e.wrapperEl.style.overflow = "hidden"),
            (e.wrapperEl.style.scrollSnapType = ""),
            setTimeout(() => {
              (e.wrapperEl.style.overflow = ""),
                e.wrapperEl.scrollTo({ [s]: u });
            }),
            void n.cancelAnimationFrame(e.cssModeFrameID)
          );
        e.cssModeFrameID = n.requestAnimationFrame(c);
      };
    c();
  }
  let M, P, _;
  function A() {
    return (
      M ||
        (M = (function () {
          const e = h(),
            t = p();
          return {
            smoothScroll:
              t.documentElement && "scrollBehavior" in t.documentElement.style,
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
      M
    );
  }
  function O(e = {}) {
    return (
      P ||
        (P = (function ({ userAgent: e } = {}) {
          const t = A(),
            s = h(),
            n = s.navigator.platform,
            i = e || s.navigator.userAgent,
            r = { ios: !1, android: !1 },
            a = s.screen.width,
            o = s.screen.height,
            l = i.match(/(Android);?[\s\/]+([\d.]+)?/);
          let d = i.match(/(iPad).*OS\s([\d_]+)/);
          const c = i.match(/(iPod)(.*OS\s([\d_]+))?/),
            p = !d && i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            u = "Win32" === n;
          let m = "MacIntel" === n;
          return (
            !d &&
              m &&
              t.touch &&
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
              ].indexOf(`${a}x${o}`) >= 0 &&
              ((d = i.match(/(Version)\/([\d.]+)/)),
              d || (d = [0, 1, "13_0_0"]),
              (m = !1)),
            l && !u && ((r.os = "android"), (r.android = !0)),
            (d || p || c) && ((r.os = "ios"), (r.ios = !0)),
            r
          );
        })(e)),
      P
    );
  }
  function I() {
    return (
      _ ||
        (_ = (function () {
          const e = h();
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
      _
    );
  }
  const z = {
    on(e, t, s) {
      const n = this;
      if ("function" != typeof t) return n;
      const i = s ? "unshift" : "push";
      return (
        e.split(" ").forEach((e) => {
          n.eventsListeners[e] || (n.eventsListeners[e] = []),
            n.eventsListeners[e][i](t);
        }),
        n
      );
    },
    once(e, t, s) {
      const n = this;
      if ("function" != typeof t) return n;
      function i(...s) {
        n.off(e, i), i.__emitterProxy && delete i.__emitterProxy, t.apply(n, s);
      }
      return (i.__emitterProxy = t), n.on(e, i, s);
    },
    onAny(e, t) {
      const s = this;
      if ("function" != typeof e) return s;
      const n = t ? "unshift" : "push";
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[n](e), s
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
                s.eventsListeners[e].forEach((n, i) => {
                  (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(i, 1);
                });
          }),
          s)
        : s;
    },
    emit(...e) {
      const t = this;
      if (!t.eventsListeners) return t;
      let s, n, i;
      "string" == typeof e[0] || Array.isArray(e[0])
        ? ((s = e[0]), (n = e.slice(1, e.length)), (i = t))
        : ((s = e[0].events), (n = e[0].data), (i = e[0].context || t)),
        n.unshift(i);
      return (
        (Array.isArray(s) ? s : s.split(" ")).forEach((e) => {
          t.eventsAnyListeners &&
            t.eventsAnyListeners.length &&
            t.eventsAnyListeners.forEach((t) => {
              t.apply(i, [e, ...n]);
            }),
            t.eventsListeners &&
              t.eventsListeners[e] &&
              t.eventsListeners[e].forEach((e) => {
                e.apply(i, n);
              });
        }),
        t
      );
    },
  };
  const D = {
    updateSize: function () {
      const e = this;
      let t, s;
      const n = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : n[0].clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : n[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(n.css("padding-left") || 0, 10) -
            parseInt(n.css("padding-right") || 0, 10)),
          (s =
            s -
            parseInt(n.css("padding-top") || 0, 10) -
            parseInt(n.css("padding-bottom") || 0, 10)),
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
      const n = e.params,
        { $wrapperEl: i, size: r, rtlTranslate: a, wrongRTL: o } = e,
        l = e.virtual && n.virtual.enabled,
        d = l ? e.virtual.slides.length : e.slides.length,
        c = i.children(`.${e.params.slideClass}`),
        p = l ? e.virtual.slides.length : c.length;
      let u = [];
      const h = [],
        m = [];
      let f = n.slidesOffsetBefore;
      "function" == typeof f && (f = n.slidesOffsetBefore.call(e));
      let g = n.slidesOffsetAfter;
      "function" == typeof g && (g = n.slidesOffsetAfter.call(e));
      const v = e.snapGrid.length,
        b = e.slidesGrid.length;
      let w = n.spaceBetween,
        y = -f,
        S = 0,
        C = 0;
      if (void 0 === r) return;
      "string" == typeof w &&
        w.indexOf("%") >= 0 &&
        (w = (parseFloat(w.replace("%", "")) / 100) * r),
        (e.virtualSize = -w),
        a
          ? c.css({ marginLeft: "", marginBottom: "", marginTop: "" })
          : c.css({ marginRight: "", marginBottom: "", marginTop: "" }),
        n.centeredSlides &&
          n.cssMode &&
          (L(e.wrapperEl, "--swiper-centered-offset-before", ""),
          L(e.wrapperEl, "--swiper-centered-offset-after", ""));
      const E = n.grid && n.grid.rows > 1 && e.grid;
      let T;
      E && e.grid.initSlides(p);
      const x =
        "auto" === n.slidesPerView &&
        n.breakpoints &&
        Object.keys(n.breakpoints).filter(
          (e) => void 0 !== n.breakpoints[e].slidesPerView
        ).length > 0;
      for (let i = 0; i < p; i += 1) {
        T = 0;
        const a = c.eq(i);
        if (
          (E && e.grid.updateSlide(i, a, p, t), "none" !== a.css("display"))
        ) {
          if ("auto" === n.slidesPerView) {
            x && (c[i].style[t("width")] = "");
            const r = getComputedStyle(a[0]),
              o = a[0].style.transform,
              l = a[0].style.webkitTransform;
            if (
              (o && (a[0].style.transform = "none"),
              l && (a[0].style.webkitTransform = "none"),
              n.roundLengths)
            )
              T = e.isHorizontal() ? a.outerWidth(!0) : a.outerHeight(!0);
            else {
              const e = s(r, "width"),
                t = s(r, "padding-left"),
                n = s(r, "padding-right"),
                i = s(r, "margin-left"),
                o = s(r, "margin-right"),
                l = r.getPropertyValue("box-sizing");
              if (l && "border-box" === l) T = e + i + o;
              else {
                const { clientWidth: s, offsetWidth: r } = a[0];
                T = e + t + n + i + o + (r - s);
              }
            }
            o && (a[0].style.transform = o),
              l && (a[0].style.webkitTransform = l),
              n.roundLengths && (T = Math.floor(T));
          } else
            (T = (r - (n.slidesPerView - 1) * w) / n.slidesPerView),
              n.roundLengths && (T = Math.floor(T)),
              c[i] && (c[i].style[t("width")] = `${T}px`);
          c[i] && (c[i].swiperSlideSize = T),
            m.push(T),
            n.centeredSlides
              ? ((y = y + T / 2 + S / 2 + w),
                0 === S && 0 !== i && (y = y - r / 2 - w),
                0 === i && (y = y - r / 2 - w),
                Math.abs(y) < 0.001 && (y = 0),
                n.roundLengths && (y = Math.floor(y)),
                C % n.slidesPerGroup == 0 && u.push(y),
                h.push(y))
              : (n.roundLengths && (y = Math.floor(y)),
                (C - Math.min(e.params.slidesPerGroupSkip, C)) %
                  e.params.slidesPerGroup ==
                  0 && u.push(y),
                h.push(y),
                (y = y + T + w)),
            (e.virtualSize += T + w),
            (S = T),
            (C += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, r) + g),
        a &&
          o &&
          ("slide" === n.effect || "coverflow" === n.effect) &&
          i.css({ width: `${e.virtualSize + n.spaceBetween}px` }),
        n.setWrapperSize &&
          i.css({ [t("width")]: `${e.virtualSize + n.spaceBetween}px` }),
        E && e.grid.updateWrapperSize(T, u, t),
        !n.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < u.length; s += 1) {
          let i = u[s];
          n.roundLengths && (i = Math.floor(i)),
            u[s] <= e.virtualSize - r && t.push(i);
        }
        (u = t),
          Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
            u.push(e.virtualSize - r);
      }
      if ((0 === u.length && (u = [0]), 0 !== n.spaceBetween)) {
        const s = e.isHorizontal() && a ? "marginLeft" : t("marginRight");
        c.filter((e, t) => !n.cssMode || t !== c.length - 1).css({
          [s]: `${w}px`,
        });
      }
      if (n.centeredSlides && n.centeredSlidesBounds) {
        let e = 0;
        m.forEach((t) => {
          e += t + (n.spaceBetween ? n.spaceBetween : 0);
        }),
          (e -= n.spaceBetween);
        const t = e - r;
        u = u.map((e) => (e < 0 ? -f : e > t ? t + g : e));
      }
      if (n.centerInsufficientSlides) {
        let e = 0;
        if (
          (m.forEach((t) => {
            e += t + (n.spaceBetween ? n.spaceBetween : 0);
          }),
          (e -= n.spaceBetween),
          e < r)
        ) {
          const t = (r - e) / 2;
          u.forEach((e, s) => {
            u[s] = e - t;
          }),
            h.forEach((e, s) => {
              h[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: c,
          snapGrid: u,
          slidesGrid: h,
          slidesSizesGrid: m,
        }),
        n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
      ) {
        L(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"),
          L(
            e.wrapperEl,
            "--swiper-centered-offset-after",
            e.size / 2 - m[m.length - 1] / 2 + "px"
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      p !== d && e.emit("slidesLengthChange"),
        u.length !== v &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit("snapGridLengthChange")),
        h.length !== b && e.emit("slidesGridLengthChange"),
        n.watchSlidesProgress && e.updateSlidesOffset();
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        n = t.virtual && t.params.virtual.enabled;
      let i,
        r = 0;
      "number" == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const a = (e) =>
        n
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
          for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
            const e = t.activeIndex + i;
            if (e > t.slides.length && !n) break;
            s.push(a(e));
          }
      else s.push(a(t.activeIndex));
      for (i = 0; i < s.length; i += 1)
        if (void 0 !== s[i]) {
          const e = s[i].offsetHeight;
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
    updateSlidesProgress: function (e = (this && this.translate) || 0) {
      const t = this,
        s = t.params,
        { slides: n, rtlTranslate: i, snapGrid: r } = t;
      if (0 === n.length) return;
      void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
      let a = -e;
      i && (a = e),
        n.removeClass(s.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < n.length; e += 1) {
        const o = n[e];
        let l = o.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (l -= n[0].swiperSlideOffset);
        const d =
            (a + (s.centeredSlides ? t.minTranslate() : 0) - l) /
            (o.swiperSlideSize + s.spaceBetween),
          c =
            (a - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - l) /
            (o.swiperSlideSize + s.spaceBetween),
          p = -(a - l),
          u = p + t.slidesSizesGrid[e];
        ((p >= 0 && p < t.size - 1) ||
          (u > 1 && u <= t.size) ||
          (p <= 0 && u >= t.size)) &&
          (t.visibleSlides.push(o),
          t.visibleSlidesIndexes.push(e),
          n.eq(e).addClass(s.slideVisibleClass)),
          (o.progress = i ? -d : d),
          (o.originalProgress = i ? -c : c);
      }
      t.visibleSlides = S(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        n = t.maxTranslate() - t.minTranslate();
      let { progress: i, isBeginning: r, isEnd: a } = t;
      const o = r,
        l = a;
      0 === n
        ? ((i = 0), (r = !0), (a = !0))
        : ((i = (e - t.minTranslate()) / n), (r = i <= 0), (a = i >= 1)),
        Object.assign(t, { progress: i, isBeginning: r, isEnd: a }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        r && !o && t.emit("reachBeginning toEdge"),
        a && !l && t.emit("reachEnd toEdge"),
        ((o && !r) || (l && !a)) && t.emit("fromEdge"),
        t.emit("progress", i);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: s,
          $wrapperEl: n,
          activeIndex: i,
          realIndex: r,
        } = e,
        a = e.virtual && s.virtual.enabled;
      let o;
      t.removeClass(
        `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
      ),
        (o = a
          ? e.$wrapperEl.find(
              `.${s.slideClass}[data-swiper-slide-index="${i}"]`
            )
          : t.eq(i)),
        o.addClass(s.slideActiveClass),
        s.loop &&
          (o.hasClass(s.slideDuplicateClass)
            ? n
                .children(
                  `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                )
                .addClass(s.slideDuplicateActiveClass)
            : n
                .children(
                  `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                )
                .addClass(s.slideDuplicateActiveClass));
      let l = o.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === l.length && ((l = t.eq(0)), l.addClass(s.slideNextClass));
      let d = o.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
      s.loop &&
        0 === d.length &&
        ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
        s.loop &&
          (l.hasClass(s.slideDuplicateClass)
            ? n
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass)
            : n
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${l.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass),
          d.hasClass(s.slideDuplicateClass)
            ? n
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${d.attr(
                    "data-swiper-slide-index"
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)
            : n
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${d.attr(
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
          slidesGrid: n,
          snapGrid: i,
          params: r,
          activeIndex: a,
          realIndex: o,
          snapIndex: l,
        } = t;
      let d,
        c = e;
      if (void 0 === c) {
        for (let e = 0; e < n.length; e += 1)
          void 0 !== n[e + 1]
            ? s >= n[e] && s < n[e + 1] - (n[e + 1] - n[e]) / 2
              ? (c = e)
              : s >= n[e] && s < n[e + 1] && (c = e + 1)
            : s >= n[e] && (c = e);
        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }
      if (i.indexOf(s) >= 0) d = i.indexOf(s);
      else {
        const e = Math.min(r.slidesPerGroupSkip, c);
        d = e + Math.floor((c - e) / r.slidesPerGroup);
      }
      if ((d >= i.length && (d = i.length - 1), c === a))
        return void (d !== l && ((t.snapIndex = d), t.emit("snapIndexChange")));
      const p = parseInt(
        t.slides.eq(c).attr("data-swiper-slide-index") || c,
        10
      );
      Object.assign(t, {
        snapIndex: d,
        realIndex: p,
        previousIndex: a,
        activeIndex: c,
      }),
        t.emit("activeIndexChange"),
        t.emit("snapIndexChange"),
        o !== p && t.emit("realIndexChange"),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        n = S(e).closest(`.${s.slideClass}`)[0];
      let i,
        r = !1;
      if (n)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === n) {
            (r = !0), (i = e);
            break;
          }
      if (!n || !r)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = n),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              S(n).attr("data-swiper-slide-index"),
              10
            ))
          : (t.clickedIndex = i),
        s.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  const B = {
    getTranslate: function (e = this.isHorizontal() ? "x" : "y") {
      const { params: t, rtlTranslate: s, translate: n, $wrapperEl: i } = this;
      if (t.virtualTranslate) return s ? -n : n;
      if (t.cssMode) return n;
      let r = T(i[0], e);
      return s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        {
          rtlTranslate: n,
          params: i,
          $wrapperEl: r,
          wrapperEl: a,
          progress: o,
        } = s;
      let l,
        d = 0,
        c = 0;
      s.isHorizontal() ? (d = n ? -e : e) : (c = e),
        i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
        i.cssMode
          ? (a[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal()
              ? -d
              : -c)
          : i.virtualTranslate ||
            r.transform(`translate3d(${d}px, ${c}px, 0px)`),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? d : c);
      const p = s.maxTranslate() - s.minTranslate();
      (l = 0 === p ? 0 : (e - s.minTranslate()) / p),
        l !== o && s.updateProgress(e),
        s.emit("setTranslate", s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e = 0, t = this.params.speed, s = !0, n = !0, i) {
      const r = this,
        { params: a, wrapperEl: o } = r;
      if (r.animating && a.preventInteractionOnTransition) return !1;
      const l = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (
        ((c = n && e > l ? l : n && e < d ? d : e),
        r.updateProgress(c),
        a.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -c;
        else {
          if (!r.support.smoothScroll)
            return (
              $({ swiper: r, targetPosition: -c, side: e ? "left" : "top" }), !0
            );
          o.scrollTo({ [e ? "left" : "top"]: -c, behavior: "smooth" });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(c),
            s &&
              (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd")))
          : (r.setTransition(t),
            r.setTranslate(c),
            s &&
              (r.emit("beforeTransitionStart", t, i),
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
  function G({ swiper: e, runCallbacks: t, direction: s, step: n }) {
    const { activeIndex: i, previousIndex: r } = e;
    let a = s;
    if (
      (a || (a = i > r ? "next" : i < r ? "prev" : "reset"),
      e.emit(`transition${n}`),
      t && i !== r)
    ) {
      if ("reset" === a) return void e.emit(`slideResetTransition${n}`);
      e.emit(`slideChangeTransition${n}`),
        "next" === a
          ? e.emit(`slideNextTransition${n}`)
          : e.emit(`slidePrevTransition${n}`);
    }
  }
  const N = {
    slideTo: function (e = 0, t = this.params.speed, s = !0, n, i) {
      if ("number" != typeof e && "string" != typeof e)
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
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: h,
        enabled: m,
      } = r;
      if ((r.animating && o.preventInteractionOnTransition) || (!m && !n && !i))
        return !1;
      const f = Math.min(r.params.slidesPerGroupSkip, a);
      let g = f + Math.floor((a - f) / r.params.slidesPerGroup);
      g >= l.length && (g = l.length - 1),
        (p || o.initialSlide || 0) === (c || 0) &&
          s &&
          r.emit("beforeSlideChangeStart");
      const v = -l[g];
      if ((r.updateProgress(v), o.normalizeSlideIndex))
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * v),
            s = Math.floor(100 * d[e]),
            n = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= s && t < n - (n - s) / 2
              ? (a = e)
              : t >= s && t < n && (a = e + 1)
            : t >= s && (a = e);
        }
      if (r.initialized && a !== p) {
        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
          return !1;
        if (
          !r.allowSlidePrev &&
          v > r.translate &&
          v > r.maxTranslate() &&
          (p || 0) !== a
        )
          return !1;
      }
      let b;
      if (
        ((b = a > p ? "next" : a < p ? "prev" : "reset"),
        (u && -v === r.translate) || (!u && v === r.translate))
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
          s = u ? v : -v;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = "none"),
            (r._immediateVirtual = !0)),
            (h[e ? "scrollLeft" : "scrollTop"] = s),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ""),
                  (r._swiperImmediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll)
            return (
              $({ swiper: r, targetPosition: s, side: e ? "left" : "top" }), !0
            );
          h.scrollTo({ [e ? "left" : "top"]: s, behavior: "smooth" });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(v),
        r.updateActiveIndex(a),
        r.updateSlidesClasses(),
        r.emit("beforeTransitionStart", t, n),
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
    slideToLoop: function (e = 0, t = this.params.speed, s = !0, n) {
      const i = this;
      let r = e;
      return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, n);
    },
    slideNext: function (e = this.params.speed, t = !0, s) {
      const n = this,
        { animating: i, enabled: r, params: a } = n;
      if (!r) return n;
      let o = a.slidesPerGroup;
      "auto" === a.slidesPerView &&
        1 === a.slidesPerGroup &&
        a.slidesPerGroupAuto &&
        (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
      const l = n.activeIndex < a.slidesPerGroupSkip ? 1 : o;
      if (a.loop) {
        if (i && a.loopPreventsSlide) return !1;
        n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
      }
      return a.rewind && n.isEnd
        ? n.slideTo(0, e, t, s)
        : n.slideTo(n.activeIndex + l, e, t, s);
    },
    slidePrev: function (e = this.params.speed, t = !0, s) {
      const n = this,
        {
          params: i,
          animating: r,
          snapGrid: a,
          slidesGrid: o,
          rtlTranslate: l,
          enabled: d,
        } = n;
      if (!d) return n;
      if (i.loop) {
        if (r && i.loopPreventsSlide) return !1;
        n.loopFix(), (n._clientLeft = n.$wrapperEl[0].clientLeft);
      }
      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const p = c(l ? n.translate : -n.translate),
        u = a.map((e) => c(e));
      let h = a[u.indexOf(p) - 1];
      if (void 0 === h && i.cssMode) {
        let e;
        a.forEach((t, s) => {
          p >= t && (e = s);
        }),
          void 0 !== e && (h = a[e > 0 ? e - 1 : e]);
      }
      let m = 0;
      return (
        void 0 !== h &&
          ((m = o.indexOf(h)),
          m < 0 && (m = n.activeIndex - 1),
          "auto" === i.slidesPerView &&
            1 === i.slidesPerGroup &&
            i.slidesPerGroupAuto &&
            ((m = m - n.slidesPerViewDynamic("previous", !0) + 1),
            (m = Math.max(m, 0)))),
        i.rewind && n.isBeginning
          ? n.slideTo(n.slides.length - 1, e, t, s)
          : n.slideTo(m, e, t, s)
      );
    },
    slideReset: function (e = this.params.speed, t = !0, s) {
      return this.slideTo(this.activeIndex, e, t, s);
    },
    slideToClosest: function (e = this.params.speed, t = !0, s, n = 0.5) {
      const i = this;
      let r = i.activeIndex;
      const a = Math.min(i.params.slidesPerGroupSkip, r),
        o = a + Math.floor((r - a) / i.params.slidesPerGroup),
        l = i.rtlTranslate ? i.translate : -i.translate;
      if (l >= i.snapGrid[o]) {
        const e = i.snapGrid[o];
        l - e > (i.snapGrid[o + 1] - e) * n && (r += i.params.slidesPerGroup);
      } else {
        const e = i.snapGrid[o - 1];
        l - e <= (i.snapGrid[o] - e) * n && (r -= i.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, i.slidesGrid.length - 1)),
        i.slideTo(r, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: s } = e,
        n =
          "auto" === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let i,
        r = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (i = parseInt(S(e.clickedSlide).attr("data-swiper-slide-index"), 10)),
          t.centeredSlides
            ? r < e.loopedSlides - n / 2 ||
              r > e.slides.length - e.loopedSlides + n / 2
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                C(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - n
            ? (e.loopFix(),
              (r = s
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              C(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  const q = {
    loopCreate: function () {
      const e = this,
        t = p(),
        { params: s, $wrapperEl: n } = e,
        i = n.children().length > 0 ? S(n.children()[0].parentNode) : n;
      i.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
      let r = i.children(`.${s.slideClass}`);
      if (s.loopFillGroupWithBlank) {
        const e = s.slidesPerGroup - (r.length % s.slidesPerGroup);
        if (e !== s.slidesPerGroup) {
          for (let n = 0; n < e; n += 1) {
            const e = S(t.createElement("div")).addClass(
              `${s.slideClass} ${s.slideBlankClass}`
            );
            i.append(e);
          }
          r = i.children(`.${s.slideClass}`);
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
        const n = S(t);
        s < e.loopedSlides && o.push(t),
          s < r.length && s >= r.length - e.loopedSlides && a.push(t),
          n.attr("data-swiper-slide-index", s);
      });
      for (let e = 0; e < o.length; e += 1)
        i.append(S(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      for (let e = a.length - 1; e >= 0; e -= 1)
        i.prepend(S(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit("beforeLoopFix");
      const {
        activeIndex: t,
        slides: s,
        loopedSlides: n,
        allowSlidePrev: i,
        allowSlideNext: r,
        snapGrid: a,
        rtlTranslate: o,
      } = e;
      let l;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const d = -a[t] - e.getTranslate();
      if (t < n) {
        (l = s.length - 3 * n + t), (l += n);
        e.slideTo(l, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((o ? -e.translate : e.translate) - d);
      } else if (t >= s.length - n) {
        (l = -s.length + t + n), (l += n);
        e.slideTo(l, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((o ? -e.translate : e.translate) - d);
      }
      (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit("loopFix");
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
  function W(e) {
    const t = this,
      s = p(),
      n = h(),
      i = t.touchEventsData,
      { params: r, touches: a, enabled: o } = t;
    if (!o) return;
    if (t.animating && r.preventInteractionOnTransition) return;
    !t.animating && r.cssMode && r.loop && t.loopFix();
    let l = e;
    l.originalEvent && (l = l.originalEvent);
    let d = S(l.target);
    if ("wrapper" === r.touchEventsTarget && !d.closest(t.wrapperEl).length)
      return;
    if (
      ((i.isTouchEvent = "touchstart" === l.type),
      !i.isTouchEvent && "which" in l && 3 === l.which)
    )
      return;
    if (!i.isTouchEvent && "button" in l && l.button > 0) return;
    if (i.isTouched && i.isMoved) return;
    !!r.noSwipingClass &&
      "" !== r.noSwipingClass &&
      l.target &&
      l.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (d = S(e.path[0]));
    const c = r.noSwipingSelector
        ? r.noSwipingSelector
        : `.${r.noSwipingClass}`,
      u = !(!l.target || !l.target.shadowRoot);
    if (
      r.noSwiping &&
      (u
        ? (function (e, t = this) {
            return (function t(s) {
              return s && s !== p() && s !== h()
                ? (s.assignedSlot && (s = s.assignedSlot),
                  s.closest(e) || t(s.getRootNode().host))
                : null;
            })(t);
          })(c, l.target)
        : d.closest(c)[0])
    )
      return void (t.allowClick = !0);
    if (r.swipeHandler && !d.closest(r.swipeHandler)[0]) return;
    (a.currentX = "touchstart" === l.type ? l.targetTouches[0].pageX : l.pageX),
      (a.currentY =
        "touchstart" === l.type ? l.targetTouches[0].pageY : l.pageY);
    const m = a.currentX,
      f = a.currentY,
      g = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
      v = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (g && (m <= v || m >= n.innerWidth - v)) {
      if ("prevent" !== g) return;
      e.preventDefault();
    }
    if (
      (Object.assign(i, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (a.startX = m),
      (a.startY = f),
      (i.touchStartTime = E()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      r.threshold > 0 && (i.allowThresholdMove = !1),
      "touchstart" !== l.type)
    ) {
      let e = !0;
      d.is(i.focusableElements) && (e = !1),
        s.activeElement &&
          S(s.activeElement).is(i.focusableElements) &&
          s.activeElement !== d[0] &&
          s.activeElement.blur();
      const n = e && t.allowTouchMove && r.touchStartPreventDefault;
      (!r.touchStartForcePreventDefault && !n) ||
        d[0].isContentEditable ||
        l.preventDefault();
    }
    t.emit("touchStart", l);
  }
  function j(e) {
    const t = p(),
      s = this,
      n = s.touchEventsData,
      { params: i, touches: r, rtlTranslate: a, enabled: o } = s;
    if (!o) return;
    let l = e;
    if ((l.originalEvent && (l = l.originalEvent), !n.isTouched))
      return void (
        n.startMoving &&
        n.isScrolling &&
        s.emit("touchMoveOpposite", l)
      );
    if (n.isTouchEvent && "touchmove" !== l.type) return;
    const d =
        "touchmove" === l.type &&
        l.targetTouches &&
        (l.targetTouches[0] || l.changedTouches[0]),
      c = "touchmove" === l.type ? d.pageX : l.pageX,
      u = "touchmove" === l.type ? d.pageY : l.pageY;
    if (l.preventedByNestedSwiper) return (r.startX = c), void (r.startY = u);
    if (!s.allowTouchMove)
      return (
        (s.allowClick = !1),
        void (
          n.isTouched &&
          (Object.assign(r, { startX: c, startY: u, currentX: c, currentY: u }),
          (n.touchStartTime = E()))
        )
      );
    if (n.isTouchEvent && i.touchReleaseOnEdges && !i.loop)
      if (s.isVertical()) {
        if (
          (u < r.startY && s.translate <= s.maxTranslate()) ||
          (u > r.startY && s.translate >= s.minTranslate())
        )
          return (n.isTouched = !1), void (n.isMoved = !1);
      } else if (
        (c < r.startX && s.translate <= s.maxTranslate()) ||
        (c > r.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      n.isTouchEvent &&
      t.activeElement &&
      l.target === t.activeElement &&
      S(l.target).is(n.focusableElements)
    )
      return (n.isMoved = !0), void (s.allowClick = !1);
    if (
      (n.allowTouchCallbacks && s.emit("touchMove", l),
      l.targetTouches && l.targetTouches.length > 1)
    )
      return;
    (r.currentX = c), (r.currentY = u);
    const h = r.currentX - r.startX,
      m = r.currentY - r.startY;
    if (s.params.threshold && Math.sqrt(h ** 2 + m ** 2) < s.params.threshold)
      return;
    if (void 0 === n.isScrolling) {
      let e;
      (s.isHorizontal() && r.currentY === r.startY) ||
      (s.isVertical() && r.currentX === r.startX)
        ? (n.isScrolling = !1)
        : h * h + m * m >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(m), Math.abs(h))) / Math.PI),
          (n.isScrolling = s.isHorizontal()
            ? e > i.touchAngle
            : 90 - e > i.touchAngle));
    }
    if (
      (n.isScrolling && s.emit("touchMoveOpposite", l),
      void 0 === n.startMoving &&
        ((r.currentX === r.startX && r.currentY === r.startY) ||
          (n.startMoving = !0)),
      n.isScrolling)
    )
      return void (n.isTouched = !1);
    if (!n.startMoving) return;
    (s.allowClick = !1),
      !i.cssMode && l.cancelable && l.preventDefault(),
      i.touchMoveStopPropagation && !i.nested && l.stopPropagation(),
      n.isMoved ||
        (i.loop && !i.cssMode && s.loopFix(),
        (n.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating &&
          s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),
        (n.allowMomentumBounce = !1),
        !i.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit("sliderFirstMove", l)),
      s.emit("sliderMove", l),
      (n.isMoved = !0);
    let f = s.isHorizontal() ? h : m;
    (r.diff = f),
      (f *= i.touchRatio),
      a && (f = -f),
      (s.swipeDirection = f > 0 ? "prev" : "next"),
      (n.currentTranslate = f + n.startTranslate);
    let g = !0,
      v = i.resistanceRatio;
    if (
      (i.touchReleaseOnEdges && (v = 0),
      f > 0 && n.currentTranslate > s.minTranslate()
        ? ((g = !1),
          i.resistance &&
            (n.currentTranslate =
              s.minTranslate() -
              1 +
              (-s.minTranslate() + n.startTranslate + f) ** v))
        : f < 0 &&
          n.currentTranslate < s.maxTranslate() &&
          ((g = !1),
          i.resistance &&
            (n.currentTranslate =
              s.maxTranslate() +
              1 -
              (s.maxTranslate() - n.startTranslate - f) ** v)),
      g && (l.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        "next" === s.swipeDirection &&
        n.currentTranslate < n.startTranslate &&
        (n.currentTranslate = n.startTranslate),
      !s.allowSlidePrev &&
        "prev" === s.swipeDirection &&
        n.currentTranslate > n.startTranslate &&
        (n.currentTranslate = n.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (n.currentTranslate = n.startTranslate),
      i.threshold > 0)
    ) {
      if (!(Math.abs(f) > i.threshold || n.allowThresholdMove))
        return void (n.currentTranslate = n.startTranslate);
      if (!n.allowThresholdMove)
        return (
          (n.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (n.currentTranslate = n.startTranslate),
          void (r.diff = s.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY)
        );
    }
    i.followFinger &&
      !i.cssMode &&
      (((i.freeMode && i.freeMode.enabled && s.freeMode) ||
        i.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        i.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(n.currentTranslate),
      s.setTranslate(n.currentTranslate));
  }
  function F(e) {
    const t = this,
      s = t.touchEventsData,
      { params: n, touches: i, rtlTranslate: r, slidesGrid: a, enabled: o } = t;
    if (!o) return;
    let l = e;
    if (
      (l.originalEvent && (l = l.originalEvent),
      s.allowTouchCallbacks && t.emit("touchEnd", l),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && n.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    n.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const d = E(),
      c = d - s.touchStartTime;
    if (t.allowClick) {
      const e = l.path || (l.composedPath && l.composedPath());
      t.updateClickedSlide((e && e[0]) || l.target),
        t.emit("tap click", l),
        c < 300 &&
          d - s.lastClickTime < 300 &&
          t.emit("doubleTap doubleClick", l);
    }
    if (
      ((s.lastClickTime = E()),
      C(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === i.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let p;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (p = n.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      n.cssMode)
    )
      return;
    if (t.params.freeMode && n.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: p });
    let u = 0,
      h = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < a.length;
      e += e < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup
    ) {
      const t = e < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
      void 0 !== a[e + t]
        ? p >= a[e] && p < a[e + t] && ((u = e), (h = a[e + t] - a[e]))
        : p >= a[e] && ((u = e), (h = a[a.length - 1] - a[a.length - 2]));
    }
    const m = (p - a[u]) / h,
      f = u < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (c > n.longSwipesMs) {
      if (!n.longSwipes) return void t.slideTo(t.activeIndex);
      "next" === t.swipeDirection &&
        (m >= n.longSwipesRatio ? t.slideTo(u + f) : t.slideTo(u)),
        "prev" === t.swipeDirection &&
          (m > 1 - n.longSwipesRatio ? t.slideTo(u + f) : t.slideTo(u));
    } else {
      if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl)
        ? l.target === t.navigation.nextEl
          ? t.slideTo(u + f)
          : t.slideTo(u)
        : ("next" === t.swipeDirection && t.slideTo(u + f),
          "prev" === t.swipeDirection && t.slideTo(u));
    }
  }
  function H() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: n, allowSlidePrev: i, snapGrid: r } = e;
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
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = n),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function R(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function V() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: n } = e;
    if (!n) return;
    let i;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      -0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit("setTranslate", e.translate, !1);
  }
  let X = !1;
  function Y() {}
  const U = (e, t) => {
    const s = p(),
      {
        params: n,
        touchEvents: i,
        el: r,
        wrapperEl: a,
        device: o,
        support: l,
      } = e,
      d = !!n.nested,
      c = "on" === t ? "addEventListener" : "removeEventListener",
      u = t;
    if (l.touch) {
      const t = !(
        "touchstart" !== i.start ||
        !l.passiveListener ||
        !n.passiveListeners
      ) && { passive: !0, capture: !1 };
      r[c](i.start, e.onTouchStart, t),
        r[c](
          i.move,
          e.onTouchMove,
          l.passiveListener ? { passive: !1, capture: d } : d
        ),
        r[c](i.end, e.onTouchEnd, t),
        i.cancel && r[c](i.cancel, e.onTouchEnd, t);
    } else
      r[c](i.start, e.onTouchStart, !1),
        s[c](i.move, e.onTouchMove, d),
        s[c](i.end, e.onTouchEnd, !1);
    (n.preventClicks || n.preventClicksPropagation) &&
      r[c]("click", e.onClick, !0),
      n.cssMode && a[c]("scroll", e.onScroll),
      n.updateOnWindowResize
        ? e[u](
            o.ios || o.android
              ? "resize orientationchange observerUpdate"
              : "resize observerUpdate",
            H,
            !0
          )
        : e[u]("observerUpdate", H, !0);
  };
  const Q = {
      attachEvents: function () {
        const e = this,
          t = p(),
          { params: s, support: n } = e;
        (e.onTouchStart = W.bind(e)),
          (e.onTouchMove = j.bind(e)),
          (e.onTouchEnd = F.bind(e)),
          s.cssMode && (e.onScroll = V.bind(e)),
          (e.onClick = R.bind(e)),
          n.touch && !X && (t.addEventListener("touchstart", Y), (X = !0)),
          U(e, "on");
      },
      detachEvents: function () {
        U(this, "off");
      },
    },
    K = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  const Z = {
    setBreakpoint: function () {
      const e = this,
        {
          activeIndex: t,
          initialized: s,
          loopedSlides: n = 0,
          params: i,
          $el: r,
        } = e,
        a = i.breakpoints;
      if (!a || (a && 0 === Object.keys(a).length)) return;
      const o = e.getBreakpoint(a, e.params.breakpointsBase, e.el);
      if (!o || e.currentBreakpoint === o) return;
      const l = (o in a ? a[o] : void 0) || e.originalParams,
        d = K(e, i),
        c = K(e, l),
        p = i.enabled;
      d && !c
        ? (r.removeClass(
            `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !d &&
          c &&
          (r.addClass(`${i.containerModifierClass}grid`),
          ((l.grid.fill && "column" === l.grid.fill) ||
            (!l.grid.fill && "column" === i.grid.fill)) &&
            r.addClass(`${i.containerModifierClass}grid-column`),
          e.emitContainerClasses());
      const u = l.direction && l.direction !== i.direction,
        h = i.loop && (l.slidesPerView !== i.slidesPerView || u);
      u && s && e.changeDirection(), k(e.params, l);
      const m = e.params.enabled;
      Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
      }),
        p && !m ? e.disable() : !p && m && e.enable(),
        (e.currentBreakpoint = o),
        e.emit("_beforeBreakpoint", l),
        h &&
          s &&
          (e.loopDestroy(),
          e.loopCreate(),
          e.updateSlides(),
          e.slideTo(t - n + e.loopedSlides, 0, !1)),
        e.emit("breakpoint", l);
    },
    getBreakpoint: function (e, t = "window", s) {
      if (!e || ("container" === t && !s)) return;
      let n = !1;
      const i = h(),
        r = "window" === t ? i.innerHeight : s.clientHeight,
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
          ? i.matchMedia(`(min-width: ${o}px)`).matches && (n = r)
          : o <= s.clientWidth && (n = r);
      }
      return n || "max";
    },
  };
  const J = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: s, rtl: n, $el: i, device: r, support: a } = e,
        o = (function (e, t) {
          const s = [];
          return (
            e.forEach((e) => {
              "object" == typeof e
                ? Object.keys(e).forEach((n) => {
                    e[n] && s.push(t + n);
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
            { rtl: n },
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
      t.push(...o), i.addClass([...t].join(" ")), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(" ")), this.emitContainerClasses();
    },
  };
  const ee = {
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
    focusableElements: "input, select, option, textarea, button, video, label",
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
  function te(e, t) {
    return function (s = {}) {
      const n = Object.keys(s)[0],
        i = s[n];
      "object" == typeof i && null !== i
        ? (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 &&
            !0 === e[n] &&
            (e[n] = { auto: !0 }),
          n in e && "enabled" in i
            ? (!0 === e[n] && (e[n] = { enabled: !0 }),
              "object" != typeof e[n] ||
                "enabled" in e[n] ||
                (e[n].enabled = !0),
              e[n] || (e[n] = { enabled: !1 }),
              k(t, s))
            : k(t, s))
        : k(t, s);
    };
  }
  const se = {
      eventsEmitter: z,
      update: D,
      translate: B,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || s.$wrapperEl.transition(e),
            s.emit("setTransition", e, t);
        },
        transitionStart: function (e = !0, t) {
          const s = this,
            { params: n } = s;
          n.cssMode ||
            (n.autoHeight && s.updateAutoHeight(),
            G({ swiper: s, runCallbacks: e, direction: t, step: "Start" }));
        },
        transitionEnd: function (e = !0, t) {
          const s = this,
            { params: n } = s;
          (s.animating = !1),
            n.cssMode ||
              (s.setTransition(0),
              G({ swiper: s, runCallbacks: e, direction: t, step: "End" }));
        },
      },
      slide: N,
      loop: q,
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
      events: Q,
      breakpoints: Z,
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: n } = s;
          if (n) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * n;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
        },
      },
      classes: J,
      images: {
        loadImage: function (e, t, s, n, i, r) {
          const a = h();
          let o;
          function l() {
            r && r();
          }
          S(e).parent("picture")[0] || (e.complete && i)
            ? l()
            : t
            ? ((o = new a.Image()),
              (o.onload = l),
              (o.onerror = l),
              n && (o.sizes = n),
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
            const n = e.imagesToLoad[s];
            e.loadImage(
              n,
              n.currentSrc || n.getAttribute("src"),
              n.srcset || n.getAttribute("srcset"),
              n.sizes || n.getAttribute("sizes"),
              !0,
              t
            );
          }
        },
      },
    },
    ne = {};
  class ie {
    constructor(...e) {
      let t, s;
      if (
        (1 === e.length &&
        e[0].constructor &&
        "Object" === Object.prototype.toString.call(e[0]).slice(8, -1)
          ? (s = e[0])
          : ([t, s] = e),
        s || (s = {}),
        (s = k({}, s)),
        t && !s.el && (s.el = t),
        s.el && S(s.el).length > 1)
      ) {
        const e = [];
        return (
          S(s.el).each((t) => {
            const n = k({}, s, { el: t });
            e.push(new ie(n));
          }),
          e
        );
      }
      const n = this;
      (n.__swiper__ = !0),
        (n.support = A()),
        (n.device = O({ userAgent: s.userAgent })),
        (n.browser = I()),
        (n.eventsListeners = {}),
        (n.eventsAnyListeners = []),
        (n.modules = [...n.__modules__]),
        s.modules && Array.isArray(s.modules) && n.modules.push(...s.modules);
      const i = {};
      n.modules.forEach((e) => {
        e({
          swiper: n,
          extendParams: te(s, i),
          on: n.on.bind(n),
          once: n.once.bind(n),
          off: n.off.bind(n),
          emit: n.emit.bind(n),
        });
      });
      const r = k({}, ee, i);
      return (
        (n.params = k({}, r, ne, s)),
        (n.originalParams = k({}, n.params)),
        (n.passedParams = k({}, s)),
        n.params &&
          n.params.on &&
          Object.keys(n.params.on).forEach((e) => {
            n.on(e, n.params.on[e]);
          }),
        n.params && n.params.onAny && n.onAny(n.params.onAny),
        (n.$ = S),
        Object.assign(n, {
          enabled: n.params.enabled,
          el: t,
          classNames: [],
          slides: S(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => "horizontal" === n.params.direction,
          isVertical: () => "vertical" === n.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: n.params.allowSlideNext,
          allowSlidePrev: n.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ["touchstart", "touchmove", "touchend", "touchcancel"],
              t = ["pointerdown", "pointermove", "pointerup"];
            return (
              (n.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (n.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              n.support.touch || !n.params.simulateTouch
                ? n.touchEventsTouch
                : n.touchEventsDesktop
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
            focusableElements: n.params.focusableElements,
            lastClickTime: E(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: n.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        n.emit("_swiper"),
        n.params.init && n.init(),
        n
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
      const n = s.minTranslate(),
        i = (s.maxTranslate() - n) * e + n;
      s.translateTo(i, void 0 === t ? 0 : t),
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
        const n = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: n }), e.emit("_slideClass", s, n);
      }),
        e.emit("_slideClasses", t);
    }
    slidesPerViewDynamic(e = "current", t = !1) {
      const {
        params: s,
        slides: n,
        slidesGrid: i,
        slidesSizesGrid: r,
        size: a,
        activeIndex: o,
      } = this;
      let l = 1;
      if (s.centeredSlides) {
        let e,
          t = n[o].swiperSlideSize;
        for (let s = o + 1; s < n.length; s += 1)
          n[s] &&
            !e &&
            ((t += n[s].swiperSlideSize), (l += 1), t > a && (e = !0));
        for (let s = o - 1; s >= 0; s -= 1)
          n[s] &&
            !e &&
            ((t += n[s].swiperSlideSize), (l += 1), t > a && (e = !0));
      } else if ("current" === e)
        for (let e = o + 1; e < n.length; e += 1) {
          (t ? i[e] + r[e] - i[o] < a : i[e] - i[o] < a) && (l += 1);
        }
      else
        for (let e = o - 1; e >= 0; e -= 1) {
          i[o] - i[e] < a && (l += 1);
        }
      return l;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function n() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let i;
      s.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (n(), e.params.autoHeight && e.updateAutoHeight())
          : ((i =
              ("auto" === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            i || n()),
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit("update");
    }
    changeDirection(e, t = !0) {
      const s = this,
        n = s.params.direction;
      return (
        e || (e = "horizontal" === n ? "vertical" : "horizontal"),
        e === n ||
          ("horizontal" !== e && "vertical" !== e) ||
          (s.$el
            .removeClass(`${s.params.containerModifierClass}${n}`)
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
      const s = S(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;
      const n = () =>
        `.${(t.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let i = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = S(e.shadowRoot.querySelector(n()));
          return (t.children = (e) => s.children(e)), t;
        }
        return s.children(n());
      })();
      if (0 === i.length && t.params.createElements) {
        const e = p().createElement("div");
        (i = S(e)),
          (e.className = t.params.wrapperClass),
          s.append(e),
          s.children(`.${t.params.slideClass}`).each((e) => {
            i.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: i,
          wrapperEl: i[0],
          mounted: !0,
          rtl: "rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction"),
          rtlTranslate:
            "horizontal" === t.params.direction &&
            ("rtl" === e.dir.toLowerCase() || "rtl" === s.css("direction")),
          wrongRTL: "-webkit-box" === i.css("display"),
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
    destroy(e = !0, t = !0) {
      const s = this,
        { params: n, $el: i, $wrapperEl: r, slides: a } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit("beforeDestroy"),
          (s.initialized = !1),
          s.detachEvents(),
          n.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            i.removeAttr("style"),
            r.removeAttr("style"),
            a &&
              a.length &&
              a
                .removeClass(
                  [
                    n.slideVisibleClass,
                    n.slideActiveClass,
                    n.slideNextClass,
                    n.slidePrevClass,
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
      k(ne, e);
    }
    static get extendedDefaults() {
      return ne;
    }
    static get defaults() {
      return ee;
    }
    static installModule(e) {
      ie.prototype.__modules__ || (ie.prototype.__modules__ = []);
      const t = ie.prototype.__modules__;
      "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => ie.installModule(e)), ie)
        : (ie.installModule(e), ie);
    }
  }
  Object.keys(se).forEach((e) => {
    Object.keys(se[e]).forEach((t) => {
      ie.prototype[t] = se[e][t];
    });
  }),
    ie.use([
      function ({ swiper: e, on: t, emit: s }) {
        const n = h();
        let i = null;
        const r = () => {
            e &&
              !e.destroyed &&
              e.initialized &&
              (s("beforeResize"), s("resize"));
          },
          a = () => {
            e && !e.destroyed && e.initialized && s("orientationchange");
          };
        t("init", () => {
          e.params.resizeObserver && void 0 !== n.ResizeObserver
            ? e &&
              !e.destroyed &&
              e.initialized &&
              ((i = new ResizeObserver((t) => {
                const { width: s, height: n } = e;
                let i = s,
                  a = n;
                t.forEach(
                  ({ contentBoxSize: t, contentRect: s, target: n }) => {
                    (n && n !== e.el) ||
                      ((i = s ? s.width : (t[0] || t).inlineSize),
                      (a = s ? s.height : (t[0] || t).blockSize));
                  }
                ),
                  (i === s && a === n) || r();
              })),
              i.observe(e.el))
            : (n.addEventListener("resize", r),
              n.addEventListener("orientationchange", a));
        }),
          t("destroy", () => {
            i && i.unobserve && e.el && (i.unobserve(e.el), (i = null)),
              n.removeEventListener("resize", r),
              n.removeEventListener("orientationchange", a);
          });
      },
      function ({ swiper: e, extendParams: t, on: s, emit: n }) {
        const i = [],
          r = h(),
          a = (e, t = {}) => {
            const s = new (r.MutationObserver || r.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void n("observerUpdate", e[0]);
                const t = function () {
                  n("observerUpdate", e[0]);
                };
                r.requestAnimationFrame
                  ? r.requestAnimationFrame(t)
                  : r.setTimeout(t, 0);
              }
            );
            s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              i.push(s);
          };
        t({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          s("init", () => {
            if (e.params.observer) {
              if (e.params.observeParents) {
                const t = e.$el.parents();
                for (let e = 0; e < t.length; e += 1) a(t[e]);
              }
              a(e.$el[0], { childList: e.params.observeSlideChildren }),
                a(e.$wrapperEl[0], { attributes: !1 });
            }
          }),
          s("destroy", () => {
            i.forEach((e) => {
              e.disconnect();
            }),
              i.splice(0, i.length);
          });
      },
    ]);
  const re = ie;
  function ae(e, t, s, n) {
    const i = p();
    return (
      e.params.createElements &&
        Object.keys(n).forEach((r) => {
          if (!s[r] && !0 === s.auto) {
            let a = e.$el.children(`.${n[r]}`)[0];
            a ||
              ((a = i.createElement("div")),
              (a.className = n[r]),
              e.$el.append(a)),
              (s[r] = a),
              (t[r] = a);
          }
        }),
      s
    );
  }
  function oe({ swiper: e, extendParams: t, on: s, emit: n }) {
    function i(t) {
      let s;
      return (
        t &&
          ((s = S(t)),
          e.params.uniqueNavElements &&
            "string" == typeof t &&
            s.length > 1 &&
            1 === e.$el.find(t).length &&
            (s = e.$el.find(t))),
        s
      );
    }
    function r(t, s) {
      const n = e.params.navigation;
      t &&
        t.length > 0 &&
        (t[s ? "addClass" : "removeClass"](n.disabledClass),
        t[0] && "BUTTON" === t[0].tagName && (t[0].disabled = s),
        e.params.watchOverflow &&
          e.enabled &&
          t[e.isLocked ? "addClass" : "removeClass"](n.lockClass));
    }
    function a() {
      if (e.params.loop) return;
      const { $nextEl: t, $prevEl: s } = e.navigation;
      r(s, e.isBeginning && !e.params.rewind),
        r(t, e.isEnd && !e.params.rewind);
    }
    function o(t) {
      t.preventDefault(),
        (!e.isBeginning || e.params.loop || e.params.rewind) && e.slidePrev();
    }
    function l(t) {
      t.preventDefault(),
        (!e.isEnd || e.params.loop || e.params.rewind) && e.slideNext();
    }
    function d() {
      const t = e.params.navigation;
      if (
        ((e.params.navigation = ae(
          e,
          e.originalParams.navigation,
          e.params.navigation,
          { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }
        )),
        !t.nextEl && !t.prevEl)
      )
        return;
      const s = i(t.nextEl),
        n = i(t.prevEl);
      s && s.length > 0 && s.on("click", l),
        n && n.length > 0 && n.on("click", o),
        Object.assign(e.navigation, {
          $nextEl: s,
          nextEl: s && s[0],
          $prevEl: n,
          prevEl: n && n[0],
        }),
        e.enabled ||
          (s && s.addClass(t.lockClass), n && n.addClass(t.lockClass));
    }
    function c() {
      const { $nextEl: t, $prevEl: s } = e.navigation;
      t &&
        t.length &&
        (t.off("click", l), t.removeClass(e.params.navigation.disabledClass)),
        s &&
          s.length &&
          (s.off("click", o), s.removeClass(e.params.navigation.disabledClass));
    }
    t({
      navigation: {
        nextEl: null,
        prevEl: null,
        hideOnClick: !1,
        disabledClass: "swiper-button-disabled",
        hiddenClass: "swiper-button-hidden",
        lockClass: "swiper-button-lock",
      },
    }),
      (e.navigation = {
        nextEl: null,
        $nextEl: null,
        prevEl: null,
        $prevEl: null,
      }),
      s("init", () => {
        d(), a();
      }),
      s("toEdge fromEdge lock unlock", () => {
        a();
      }),
      s("destroy", () => {
        c();
      }),
      s("enable disable", () => {
        const { $nextEl: t, $prevEl: s } = e.navigation;
        t &&
          t[e.enabled ? "removeClass" : "addClass"](
            e.params.navigation.lockClass
          ),
          s &&
            s[e.enabled ? "removeClass" : "addClass"](
              e.params.navigation.lockClass
            );
      }),
      s("click", (t, s) => {
        const { $nextEl: i, $prevEl: r } = e.navigation,
          a = s.target;
        if (e.params.navigation.hideOnClick && !S(a).is(r) && !S(a).is(i)) {
          if (
            e.pagination &&
            e.params.pagination &&
            e.params.pagination.clickable &&
            (e.pagination.el === a || e.pagination.el.contains(a))
          )
            return;
          let t;
          i
            ? (t = i.hasClass(e.params.navigation.hiddenClass))
            : r && (t = r.hasClass(e.params.navigation.hiddenClass)),
            n(!0 === t ? "navigationShow" : "navigationHide"),
            i && i.toggleClass(e.params.navigation.hiddenClass),
            r && r.toggleClass(e.params.navigation.hiddenClass);
        }
      }),
      Object.assign(e.navigation, { update: a, init: d, destroy: c });
  }
  function le(e = "") {
    return `.${e
      .trim()
      .replace(/([\.:!\/])/g, "\\$1")
      .replace(/ /g, ".")}`;
  }
  function de({ swiper: e, extendParams: t, on: s, emit: n }) {
    const i = "swiper-pagination";
    let r;
    t({
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
        bulletClass: `${i}-bullet`,
        bulletActiveClass: `${i}-bullet-active`,
        modifierClass: `${i}-`,
        currentClass: `${i}-current`,
        totalClass: `${i}-total`,
        hiddenClass: `${i}-hidden`,
        progressbarFillClass: `${i}-progressbar-fill`,
        progressbarOppositeClass: `${i}-progressbar-opposite`,
        clickableClass: `${i}-clickable`,
        lockClass: `${i}-lock`,
        horizontalClass: `${i}-horizontal`,
        verticalClass: `${i}-vertical`,
      },
    }),
      (e.pagination = { el: null, $el: null, bullets: [] });
    let a = 0;
    function o() {
      return (
        !e.params.pagination.el ||
        !e.pagination.el ||
        !e.pagination.$el ||
        0 === e.pagination.$el.length
      );
    }
    function l(t, s) {
      const { bulletActiveClass: n } = e.params.pagination;
      t[s]().addClass(`${n}-${s}`)[s]().addClass(`${n}-${s}-${s}`);
    }
    function d() {
      const t = e.rtl,
        s = e.params.pagination;
      if (o()) return;
      const i =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        d = e.pagination.$el;
      let c;
      const p = e.params.loop
        ? Math.ceil((i - 2 * e.loopedSlides) / e.params.slidesPerGroup)
        : e.snapGrid.length;
      if (
        (e.params.loop
          ? ((c = Math.ceil(
              (e.activeIndex - e.loopedSlides) / e.params.slidesPerGroup
            )),
            c > i - 1 - 2 * e.loopedSlides && (c -= i - 2 * e.loopedSlides),
            c > p - 1 && (c -= p),
            c < 0 && "bullets" !== e.params.paginationType && (c = p + c))
          : (c = void 0 !== e.snapIndex ? e.snapIndex : e.activeIndex || 0),
        "bullets" === s.type &&
          e.pagination.bullets &&
          e.pagination.bullets.length > 0)
      ) {
        const n = e.pagination.bullets;
        let i, o, p;
        if (
          (s.dynamicBullets &&
            ((r = n.eq(0)[e.isHorizontal() ? "outerWidth" : "outerHeight"](!0)),
            d.css(
              e.isHorizontal() ? "width" : "height",
              r * (s.dynamicMainBullets + 4) + "px"
            ),
            s.dynamicMainBullets > 1 &&
              void 0 !== e.previousIndex &&
              ((a += c - (e.previousIndex - e.loopedSlides || 0)),
              a > s.dynamicMainBullets - 1
                ? (a = s.dynamicMainBullets - 1)
                : a < 0 && (a = 0)),
            (i = Math.max(c - a, 0)),
            (o = i + (Math.min(n.length, s.dynamicMainBullets) - 1)),
            (p = (o + i) / 2)),
          n.removeClass(
            ["", "-next", "-next-next", "-prev", "-prev-prev", "-main"]
              .map((e) => `${s.bulletActiveClass}${e}`)
              .join(" ")
          ),
          d.length > 1)
        )
          n.each((e) => {
            const t = S(e),
              n = t.index();
            n === c && t.addClass(s.bulletActiveClass),
              s.dynamicBullets &&
                (n >= i && n <= o && t.addClass(`${s.bulletActiveClass}-main`),
                n === i && l(t, "prev"),
                n === o && l(t, "next"));
          });
        else {
          const t = n.eq(c),
            r = t.index();
          if ((t.addClass(s.bulletActiveClass), s.dynamicBullets)) {
            const t = n.eq(i),
              a = n.eq(o);
            for (let e = i; e <= o; e += 1)
              n.eq(e).addClass(`${s.bulletActiveClass}-main`);
            if (e.params.loop)
              if (r >= n.length) {
                for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                  n.eq(n.length - e).addClass(`${s.bulletActiveClass}-main`);
                n.eq(n.length - s.dynamicMainBullets - 1).addClass(
                  `${s.bulletActiveClass}-prev`
                );
              } else l(t, "prev"), l(a, "next");
            else l(t, "prev"), l(a, "next");
          }
        }
        if (s.dynamicBullets) {
          const i = Math.min(n.length, s.dynamicMainBullets + 4),
            a = (r * i - r) / 2 - p * r,
            o = t ? "right" : "left";
          n.css(e.isHorizontal() ? o : "top", `${a}px`);
        }
      }
      if (
        ("fraction" === s.type &&
          (d.find(le(s.currentClass)).text(s.formatFractionCurrent(c + 1)),
          d.find(le(s.totalClass)).text(s.formatFractionTotal(p))),
        "progressbar" === s.type)
      ) {
        let t;
        t = s.progressbarOpposite
          ? e.isHorizontal()
            ? "vertical"
            : "horizontal"
          : e.isHorizontal()
          ? "horizontal"
          : "vertical";
        const n = (c + 1) / p;
        let i = 1,
          r = 1;
        "horizontal" === t ? (i = n) : (r = n),
          d
            .find(le(s.progressbarFillClass))
            .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${r})`)
            .transition(e.params.speed);
      }
      "custom" === s.type && s.renderCustom
        ? (d.html(s.renderCustom(e, c + 1, p)), n("paginationRender", d[0]))
        : n("paginationUpdate", d[0]),
        e.params.watchOverflow &&
          e.enabled &&
          d[e.isLocked ? "addClass" : "removeClass"](s.lockClass);
    }
    function c() {
      const t = e.params.pagination;
      if (o()) return;
      const s =
          e.virtual && e.params.virtual.enabled
            ? e.virtual.slides.length
            : e.slides.length,
        i = e.pagination.$el;
      let r = "";
      if ("bullets" === t.type) {
        let n = e.params.loop
          ? Math.ceil((s - 2 * e.loopedSlides) / e.params.slidesPerGroup)
          : e.snapGrid.length;
        e.params.freeMode &&
          e.params.freeMode.enabled &&
          !e.params.loop &&
          n > s &&
          (n = s);
        for (let s = 0; s < n; s += 1)
          t.renderBullet
            ? (r += t.renderBullet.call(e, s, t.bulletClass))
            : (r += `<${t.bulletElement} class="${t.bulletClass}"></${t.bulletElement}>`);
        i.html(r), (e.pagination.bullets = i.find(le(t.bulletClass)));
      }
      "fraction" === t.type &&
        ((r = t.renderFraction
          ? t.renderFraction.call(e, t.currentClass, t.totalClass)
          : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`),
        i.html(r)),
        "progressbar" === t.type &&
          ((r = t.renderProgressbar
            ? t.renderProgressbar.call(e, t.progressbarFillClass)
            : `<span class="${t.progressbarFillClass}"></span>`),
          i.html(r)),
        "custom" !== t.type && n("paginationRender", e.pagination.$el[0]);
    }
    function p() {
      e.params.pagination = ae(
        e,
        e.originalParams.pagination,
        e.params.pagination,
        { el: "swiper-pagination" }
      );
      const t = e.params.pagination;
      if (!t.el) return;
      let s = S(t.el);
      0 !== s.length &&
        (e.params.uniqueNavElements &&
          "string" == typeof t.el &&
          s.length > 1 &&
          ((s = e.$el.find(t.el)),
          s.length > 1 &&
            (s = s.filter((t) => S(t).parents(".swiper")[0] === e.el))),
        "bullets" === t.type && t.clickable && s.addClass(t.clickableClass),
        s.addClass(t.modifierClass + t.type),
        s.addClass(t.modifierClass + e.params.direction),
        "bullets" === t.type &&
          t.dynamicBullets &&
          (s.addClass(`${t.modifierClass}${t.type}-dynamic`),
          (a = 0),
          t.dynamicMainBullets < 1 && (t.dynamicMainBullets = 1)),
        "progressbar" === t.type &&
          t.progressbarOpposite &&
          s.addClass(t.progressbarOppositeClass),
        t.clickable &&
          s.on("click", le(t.bulletClass), function (t) {
            t.preventDefault();
            let s = S(this).index() * e.params.slidesPerGroup;
            e.params.loop && (s += e.loopedSlides), e.slideTo(s);
          }),
        Object.assign(e.pagination, { $el: s, el: s[0] }),
        e.enabled || s.addClass(t.lockClass));
    }
    function u() {
      const t = e.params.pagination;
      if (o()) return;
      const s = e.pagination.$el;
      s.removeClass(t.hiddenClass),
        s.removeClass(t.modifierClass + t.type),
        s.removeClass(t.modifierClass + e.params.direction),
        e.pagination.bullets &&
          e.pagination.bullets.removeClass &&
          e.pagination.bullets.removeClass(t.bulletActiveClass),
        t.clickable && s.off("click", le(t.bulletClass));
    }
    s("init", () => {
      p(), c(), d();
    }),
      s("activeIndexChange", () => {
        (e.params.loop || void 0 === e.snapIndex) && d();
      }),
      s("snapIndexChange", () => {
        e.params.loop || d();
      }),
      s("slidesLengthChange", () => {
        e.params.loop && (c(), d());
      }),
      s("snapGridLengthChange", () => {
        e.params.loop || (c(), d());
      }),
      s("destroy", () => {
        u();
      }),
      s("enable disable", () => {
        const { $el: t } = e.pagination;
        t &&
          t[e.enabled ? "removeClass" : "addClass"](
            e.params.pagination.lockClass
          );
      }),
      s("lock unlock", () => {
        d();
      }),
      s("click", (t, s) => {
        const i = s.target,
          { $el: r } = e.pagination;
        if (
          e.params.pagination.el &&
          e.params.pagination.hideOnClick &&
          r.length > 0 &&
          !S(i).hasClass(e.params.pagination.bulletClass)
        ) {
          if (
            e.navigation &&
            ((e.navigation.nextEl && i === e.navigation.nextEl) ||
              (e.navigation.prevEl && i === e.navigation.prevEl))
          )
            return;
          const t = r.hasClass(e.params.pagination.hiddenClass);
          n(!0 === t ? "paginationShow" : "paginationHide"),
            r.toggleClass(e.params.pagination.hiddenClass);
        }
      }),
      Object.assign(e.pagination, {
        render: c,
        update: d,
        init: p,
        destroy: u,
      });
  }
  function ce({ swiper: e, extendParams: t, on: s, emit: n }) {
    let i;
    function r() {
      const t = e.slides.eq(e.activeIndex);
      let s = e.params.autoplay.delay;
      t.attr("data-swiper-autoplay") &&
        (s = t.attr("data-swiper-autoplay") || e.params.autoplay.delay),
        clearTimeout(i),
        (i = C(() => {
          let t;
          e.params.autoplay.reverseDirection
            ? e.params.loop
              ? (e.loopFix(),
                (t = e.slidePrev(e.params.speed, !0, !0)),
                n("autoplay"))
              : e.isBeginning
              ? e.params.autoplay.stopOnLastSlide
                ? o()
                : ((t = e.slideTo(e.slides.length - 1, e.params.speed, !0, !0)),
                  n("autoplay"))
              : ((t = e.slidePrev(e.params.speed, !0, !0)), n("autoplay"))
            : e.params.loop
            ? (e.loopFix(),
              (t = e.slideNext(e.params.speed, !0, !0)),
              n("autoplay"))
            : e.isEnd
            ? e.params.autoplay.stopOnLastSlide
              ? o()
              : ((t = e.slideTo(0, e.params.speed, !0, !0)), n("autoplay"))
            : ((t = e.slideNext(e.params.speed, !0, !0)), n("autoplay")),
            ((e.params.cssMode && e.autoplay.running) || !1 === t) && r();
        }, s));
    }
    function a() {
      return (
        void 0 === i &&
        !e.autoplay.running &&
        ((e.autoplay.running = !0), n("autoplayStart"), r(), !0)
      );
    }
    function o() {
      return (
        !!e.autoplay.running &&
        void 0 !== i &&
        (i && (clearTimeout(i), (i = void 0)),
        (e.autoplay.running = !1),
        n("autoplayStop"),
        !0)
      );
    }
    function l(t) {
      e.autoplay.running &&
        (e.autoplay.paused ||
          (i && clearTimeout(i),
          (e.autoplay.paused = !0),
          0 !== t && e.params.autoplay.waitForTransition
            ? ["transitionend", "webkitTransitionEnd"].forEach((t) => {
                e.$wrapperEl[0].addEventListener(t, c);
              })
            : ((e.autoplay.paused = !1), r())));
    }
    function d() {
      const t = p();
      "hidden" === t.visibilityState && e.autoplay.running && l(),
        "visible" === t.visibilityState &&
          e.autoplay.paused &&
          (r(), (e.autoplay.paused = !1));
    }
    function c(t) {
      e &&
        !e.destroyed &&
        e.$wrapperEl &&
        t.target === e.$wrapperEl[0] &&
        (["transitionend", "webkitTransitionEnd"].forEach((t) => {
          e.$wrapperEl[0].removeEventListener(t, c);
        }),
        (e.autoplay.paused = !1),
        e.autoplay.running ? r() : o());
    }
    function u() {
      e.params.autoplay.disableOnInteraction ? o() : l(),
        ["transitionend", "webkitTransitionEnd"].forEach((t) => {
          e.$wrapperEl[0].removeEventListener(t, c);
        });
    }
    function h() {
      e.params.autoplay.disableOnInteraction || ((e.autoplay.paused = !1), r());
    }
    (e.autoplay = { running: !1, paused: !1 }),
      t({
        autoplay: {
          enabled: !1,
          delay: 3e3,
          waitForTransition: !0,
          disableOnInteraction: !0,
          stopOnLastSlide: !1,
          reverseDirection: !1,
          pauseOnMouseEnter: !1,
        },
      }),
      s("init", () => {
        if (e.params.autoplay.enabled) {
          a();
          p().addEventListener("visibilitychange", d),
            e.params.autoplay.pauseOnMouseEnter &&
              (e.$el.on("mouseenter", u), e.$el.on("mouseleave", h));
        }
      }),
      s("beforeTransitionStart", (t, s, n) => {
        e.autoplay.running &&
          (n || !e.params.autoplay.disableOnInteraction
            ? e.autoplay.pause(s)
            : o());
      }),
      s("sliderFirstMove", () => {
        e.autoplay.running &&
          (e.params.autoplay.disableOnInteraction ? o() : l());
      }),
      s("touchEnd", () => {
        e.params.cssMode &&
          e.autoplay.paused &&
          !e.params.autoplay.disableOnInteraction &&
          r();
      }),
      s("destroy", () => {
        e.$el.off("mouseenter", u),
          e.$el.off("mouseleave", h),
          e.autoplay.running && o();
        p().removeEventListener("visibilitychange", d);
      }),
      Object.assign(e.autoplay, { pause: l, run: r, start: a, stop: o });
  }
  function pe() {
    let e = document.querySelectorAll(
      '[class*="__swiper"]:not(.swiper-wrapper)'
    );
    e &&
      e.forEach((e) => {
        e.parentElement.classList.add("swiper"),
          e.classList.add("swiper-wrapper");
        for (const t of e.children) t.classList.add("swiper-slide");
      });
  }
  window.addEventListener("load", function (e) {
    pe(),
      document.querySelector(".feedback-slider__swiper") &&
        new re(".feedback-slider__slider", {
          modules: [oe, de, ce],
          slidesPerView: 1,
          spaceBetween: 15,
          speed: 800,
          loop: !0,
          pagination: { el: ".feedback-slider__dotts", clickable: !0 },
          navigation: {
            nextEl: ".feedback-slider__button-next",
            prevEl: ".feedback-slider__button-prev",
          },
        }),
      document.querySelector(".page-slider__swiper") &&
        new re(".page-slider__slider", {
          modules: [oe, de, ce],
          autoplay: { delay: 5e3, disableOnInteraction: !1 },
          slidesPerView: 1,
          spaceBetween: 15,
          speed: 800,
          loop: !0,
          pagination: { el: ".page-slider__dotts", clickable: !0 },
          navigation: {
            nextEl: ".page-slider__button-next",
            prevEl: ".page-slider__button-prev",
          },
        }),
      document.querySelector(".slider-our-clients__swiper") &&
        new re(".slider-our-clients__slider", {
          modules: [oe, de, ce],
          slidesPerView: 1,
          spaceBetween: 15,
          speed: 800,
          loop: !0,
          pagination: { el: ".slider-our-clients__dotts", clickable: !0 },
          navigation: {
            nextEl: ".slider-our-clients__button-next",
            prevEl: ".slider-our-clients__button-prev",
          },
        });
  });
  e.watcher = new (class {
    constructor(e) {
      (this.config = Object.assign({ logging: !0 }, e)),
        this.observer,
        !document.documentElement.classList.contains("watcher") &&
          this.scrollWatcherRun();
    }
    scrollWatcherUpdate() {
      this.scrollWatcherRun();
    }
    scrollWatcherRun() {
      document.documentElement.classList.add("watcher"),
        this.scrollWatcherConstructor(
          document.querySelectorAll("[data-watch]")
        );
    }
    scrollWatcherConstructor(e) {
      if (e.length) {
        this.scrollWatcherLogging(
          `Проснулся, слежу за объектами (${e.length})...`
        ),
          r(
            Array.from(e).map(function (e) {
              return `${
                e.dataset.watchRoot ? e.dataset.watchRoot : null
              }|${e.dataset.watchMargin ? e.dataset.watchMargin : "0px"}|${e.dataset.watchThreshold ? e.dataset.watchThreshold : 0}`;
            })
          ).forEach((t) => {
            let s = t.split("|"),
              n = { root: s[0], margin: s[1], threshold: s[2] },
              i = Array.from(e).filter(function (e) {
                let t = e.dataset.watchRoot ? e.dataset.watchRoot : null,
                  s = e.dataset.watchMargin ? e.dataset.watchMargin : "0px",
                  i = e.dataset.watchThreshold ? e.dataset.watchThreshold : 0;
                if (
                  String(t) === n.root &&
                  String(s) === n.margin &&
                  String(i) === n.threshold
                )
                  return e;
              }),
              r = this.getScrollWatcherConfig(n);
            this.scrollWatcherInit(i, r);
          });
      } else
        this.scrollWatcherLogging("Сплю, нет объектов для слежения. ZzzZZzz");
    }
    getScrollWatcherConfig(e) {
      let t = {};
      if (
        (document.querySelector(e.root)
          ? (t.root = document.querySelector(e.root))
          : "null" !== e.root &&
            this.scrollWatcherLogging(
              `Эмм... родительского объекта ${e.root} нет на странице`
            ),
        (t.rootMargin = e.margin),
        !(e.margin.indexOf("px") < 0 && e.margin.indexOf("%") < 0))
      ) {
        if ("prx" === e.threshold) {
          e.threshold = [];
          for (let t = 0; t <= 1; t += 0.005) e.threshold.push(t);
        } else e.threshold = e.threshold.split(",");
        return (t.threshold = e.threshold), t;
      }
      this.scrollWatcherLogging(
        "Ой ой, настройку data-watch-margin нужно задавать в PX или %"
      );
    }
    scrollWatcherCreate(e) {
      this.observer = new IntersectionObserver((e, t) => {
        e.forEach((e) => {
          this.scrollWatcherCallback(e, t);
        });
      }, e);
    }
    scrollWatcherInit(e, t) {
      this.scrollWatcherCreate(t), e.forEach((e) => this.observer.observe(e));
    }
    scrollWatcherIntersecting(e, t) {
      e.isIntersecting
        ? (!t.classList.contains("_watcher-view") &&
            t.classList.add("_watcher-view"),
          this.scrollWatcherLogging(
            `Я вижу ${t.classList}, добавил класс _watcher-view`
          ))
        : (t.classList.contains("_watcher-view") &&
            t.classList.remove("_watcher-view"),
          this.scrollWatcherLogging(
            `Я не вижу ${t.classList}, убрал класс _watcher-view`
          ));
    }
    scrollWatcherOff(e, t) {
      t.unobserve(e),
        this.scrollWatcherLogging(`Я перестал следить за ${e.classList}`);
    }
    scrollWatcherLogging(e) {
      this.config.logging && i(`[Наблюдатель]: ${e}`);
    }
    scrollWatcherCallback(e, t) {
      const s = e.target;
      this.scrollWatcherIntersecting(e, s),
        s.hasAttribute("data-watch-once") &&
          e.isIntersecting &&
          this.scrollWatcherOff(s, t),
        document.dispatchEvent(
          new CustomEvent("watcherCallback", { detail: { entry: e } })
        );
    }
  })({});
  let ue = !1;
  function he(e) {
    this.type = e;
  }
  setTimeout(() => {
    if (ue) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0),
    (he.prototype.init = function () {
      const e = this;
      (this.оbjects = []),
        (this.daClassname = "_dynamic_adapt_"),
        (this.nodes = document.querySelectorAll("[data-da]"));
      for (let e = 0; e < this.nodes.length; e++) {
        const t = this.nodes[e],
          s = t.dataset.da.trim().split(","),
          n = {};
        (n.element = t),
          (n.parent = t.parentNode),
          (n.destination = document.querySelector(s[0].trim())),
          (n.breakpoint = s[1] ? s[1].trim() : "767"),
          (n.place = s[2] ? s[2].trim() : "last"),
          (n.index = this.indexInParent(n.parent, n.element)),
          this.оbjects.push(n);
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
          n = String.prototype.split.call(s, ","),
          i = window.matchMedia(n[0]),
          r = n[1],
          a = Array.prototype.filter.call(this.оbjects, function (e) {
            return e.breakpoint === r;
          });
        i.addListener(function () {
          e.mediaHandler(i, a);
        }),
          this.mediaHandler(i, a);
      }
    }),
    (he.prototype.mediaHandler = function (e, t) {
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
    (he.prototype.moveTo = function (e, t, s) {
      t.classList.add(this.daClassname),
        "last" === e || e >= s.children.length
          ? s.insertAdjacentElement("beforeend", t)
          : "first" !== e
          ? s.children[e].insertAdjacentElement("beforebegin", t)
          : s.insertAdjacentElement("afterbegin", t);
    }),
    (he.prototype.moveBack = function (e, t, s) {
      t.classList.remove(this.daClassname),
        void 0 !== e.children[s]
          ? e.children[s].insertAdjacentElement("beforebegin", t)
          : e.insertAdjacentElement("beforeend", t);
    }),
    (he.prototype.indexInParent = function (e, t) {
      const s = Array.prototype.slice.call(e.children);
      return Array.prototype.indexOf.call(s, t);
    }),
    (he.prototype.arraySort = function (e) {
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
  new he("max").init(),
    document.addEventListener("click", function (e) {
      const t = e.target;
      if (t.closest("[data-parent]")) {
        const s = t.dataset.parent ? t.dataset.parent : null,
          n = document.querySelector(`[data-sub-menu="${s}"]`);
        document.querySelector(".catalog-header");
        if (n) {
          const e = document.querySelector("._sub-menu-active"),
            s = document.querySelector("._sub-menu-open");
          e &&
            e !== t &&
            (e.classList.remove("_sub-menu-active"),
            s.classList.remove("_sub-menu-open"),
            document.documentElement.classList.remove("sub-menu-open")),
            document.documentElement.classList.toggle("sub-menu-open"),
            t.classList.toggle("_sub-menu-active"),
            n.classList.toggle("_sub-menu-open");
        } else console.log("нет такого подменю :(");
        e.preventDefault();
      }
      if (t.closest(".menu-top-header__link_catalog")) {
        t.closest(".menu-top-header__link_catalog");
        document.documentElement.classList.add("catalog-open"),
          e.preventDefault();
      }
      t.closest(".menu-catalog__back") &&
        (document.documentElement.classList.remove("catalog-open"),
        document.querySelector("._sub-menu-active") &&
          document
            .querySelector("._sub-menu-active")
            .classList.remove("_sub-menu-active"),
        document.querySelector("._sub-menu-open") &&
          document
            .querySelector("._sub-menu-open")
            .classList.remove("_sub-menu-open"),
        e.preventDefault());
      t.closest(".sub-menu-catalog__back") &&
        (document.documentElement.classList.remove("sub-menu-open"),
        document.querySelector("._sub-menu-active") &&
          document
            .querySelector("._sub-menu-active")
            .classList.remove("_sub-menu-active"),
        document.querySelector("._sub-menu-open") &&
          document
            .querySelector("._sub-menu-open")
            .classList.remove("_sub-menu-open"),
        e.preventDefault());
    });
  const me = document.querySelectorAll(".sub-menu-catalog__block");
  me.length &&
    me.forEach((e) => {
      const t = e.querySelectorAll(".sub-menu-catalog__footer").length;
      e.classList.add(`sub-menu-catalog__block_${t}`);
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
      let e = document.querySelector(".icon-menu");
      e &&
        e.addEventListener("click", function (e) {
          t &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? s(e) : n(e);
            })(),
            document.documentElement.classList.toggle("menu-open"),
            document.documentElement.classList.contains("catalog-open") &&
              document.documentElement.classList.remove("catalog-open"),
            document.documentElement.classList.contains("sub-menu-open") &&
              document.documentElement.classList.remove("sub-menu-open"));
        });
    })(),
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
            o.removeError(t));
        }),
        document.body.addEventListener("focusout", function (e) {
          const t = e.target;
          ("INPUT" !== t.tagName && "TEXTAREA" !== t.tagName) ||
            (t.dataset.placeholder && (t.placeholder = t.dataset.placeholder),
            t.classList.remove("_form-focus"),
            t.parentElement.classList.remove("_form-focus"),
            t.hasAttribute("data-validate") && o.validateInput(t));
        });
    })(),
    (function (t) {
      e.popup && e.popup.open("some");
      const s = document.forms;
      if (s.length)
        for (const e of s)
          e.addEventListener("submit", function (e) {
            n(e.target, e);
          }),
            e.addEventListener("reset", function (e) {
              const t = e.target;
              o.formClean(t);
            });
      async function n(e, s) {
        if (0 === (t ? o.getErrors(e) : 0)) {
          if (e.hasAttribute("data-ajax")) {
            s.preventDefault();
            const t = e.getAttribute("action")
                ? e.getAttribute("action").trim()
                : "#",
              n = e.getAttribute("method")
                ? e.getAttribute("method").trim()
                : "GET",
              i = new FormData(e);
            e.classList.add("_sending");
            const a = await fetch(t, { method: n, body: i });
            if (a.ok) {
              await a.json();
              e.classList.remove("_sending"), r(e);
            } else alert("Ошибка"), e.classList.remove("_sending");
          } else e.hasAttribute("data-dev") && (s.preventDefault(), r(e));
        } else {
          s.preventDefault();
          const t = e.querySelector("._form-error");
          t && e.hasAttribute("data-goto-error") && a(t, !0, 1e3);
        }
      }
      function r(t) {
        document.dispatchEvent(
          new CustomEvent("formSent", { detail: { form: t } })
        ),
          setTimeout(() => {
            if (e.popup) {
              const s = t.dataset.popupMessage;
              s && e.popup.open(s);
            }
          }, 0),
          o.formClean(t),
          i(`[Формы]: ${"Форма отправлена!"}`);
      }
    })(!0),
    (function () {
      function e(e) {
        if ("click" === e.type) {
          const t = e.target;
          if (t.closest("[data-goto]")) {
            const s = t.closest("[data-goto]"),
              n = s.dataset.goto ? s.dataset.goto : "",
              i = !!s.hasAttribute("data-goto-header"),
              r = s.dataset.gotoSpeed ? s.dataset.gotoSpeed : "500";
            a(n, i, r), e.preventDefault();
          }
        } else if ("watcherCallback" === e.type && e.detail) {
          const t = e.detail.entry,
            s = t.target;
          if ("navigator" === s.dataset.watch) {
            const e = s.id,
              n =
                (document.querySelector("[data-goto]._navigator-active"),
                document.querySelector(`[data-goto="${e}"]`));
            t.isIntersecting
              ? n && n.classList.add("_navigator-active")
              : n && n.classList.remove("_navigator-active");
          }
        }
      }
      document.addEventListener("click", e),
        document.addEventListener("watcherCallback", e);
    })();
})();
