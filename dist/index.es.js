var C = (t) => {
  throw TypeError(t);
};
var E = (t, e, n) => e.has(t) || C("Cannot " + n);
var d = (t, e, n) => (E(t, e, "read from private field"), n ? n.call(t) : e.get(t)), h = (t, e, n) => e.has(t) ? C("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), w = (t, e, n, o) => (E(t, e, "write to private field"), o ? o.call(t, n) : e.set(t, n), n);
const N = [];
for (let t = 0; t < 256; ++t)
  N.push((t + 256).toString(16).slice(1));
typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto);
function L() {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  t.setAttribute("width", "100%"), t.setAttribute("height", "100%"), t.setAttribute("viewBox", "0 0 24 24"), t.setAttribute("fill", "none");
  const e = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return e.setAttribute("d", "M9 18L15 12L9 6"), e.setAttribute("stroke", "currentColor"), e.setAttribute("stroke-width", "2"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-linejoin", "round"), t.appendChild(e), t;
}
function I() {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  t.setAttribute("width", "100%"), t.setAttribute("height", "100%"), t.setAttribute("viewBox", "0 0 24 24"), t.setAttribute("fill", "none");
  const e = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return e.setAttribute("d", "M6 9L12 15L18 9"), e.setAttribute("stroke", "currentColor"), e.setAttribute("stroke-width", "2"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-linejoin", "round"), t.appendChild(e), t;
}
const P = {
  "arrow-chevron-right": L,
  "arrow-chevron-down": I
};
function R() {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  t.setAttribute("width", "100%"), t.setAttribute("height", "100%"), t.setAttribute("viewBox", "0 0 24 24"), t.setAttribute("fill", "none");
  const e = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return e.setAttribute("d", "M14 2.26953V6.40007C14 6.96012 14 7.24015 14.109 7.45406C14.2049 7.64222 14.3578 7.7952 14.546 7.89108C14.7599 8.00007 15.0399 8.00007 15.6 8.00007H19.7305M16 13H8M16 17H8M10 9H8M14 2H8.8C7.11984 2 6.27976 2 5.63803 2.32698C5.07354 2.6146 4.6146 3.07354 4.32698 3.63803C4 4.27976 4 5.11984 4 6.8V17.2C4 18.8802 4 19.7202 4.32698 20.362C4.6146 20.9265 5.07354 21.3854 5.63803 21.673C6.27976 22 7.11984 22 8.8 22H15.2C16.8802 22 17.7202 22 18.362 21.673C18.9265 21.3854 19.3854 20.9265 19.673 20.362C20 19.7202 20 18.8802 20 17.2V8L14 2Z"), e.setAttribute("stroke", "currentColor"), e.setAttribute("stroke-width", "2"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-linejoin", "round"), t.appendChild(e), t;
}
const S = {
  "file-document": R
};
function H() {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  t.setAttribute("xmlns", "http://www.w3.org/2000/svg"), t.setAttribute("width", "16"), t.setAttribute("height", "16"), t.setAttribute("fill", "currentColor"), t.setAttribute("class", "bi bi-type-bold"), t.setAttribute("viewBox", "0 0 16 16");
  const e = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return e.setAttribute("d", "M8.21 13c2.106 0 3.412-1.087 3.412-2.823 0-1.306-.984-2.283-2.324-2.386v-.055a2.176 2.176 0 0 0 1.852-2.14c0-1.51-1.162-2.46-3.014-2.46H3.843V13zM5.908 4.674h1.696c.963 0 1.517.451 1.517 1.244 0 .834-.629 1.32-1.73 1.32H5.908V4.673zm0 6.788V8.598h1.73c1.217 0 1.88.492 1.88 1.415 0 .943-.643 1.449-1.832 1.449H5.907z"), t.appendChild(e), t;
}
function z() {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  t.setAttribute("xmlns", "http://www.w3.org/2000/svg"), t.setAttribute("width", "16"), t.setAttribute("height", "16"), t.setAttribute("fill", "currentColor"), t.setAttribute("class", "bi bi-type-italic"), t.setAttribute("viewBox", "0 0 16 16");
  const e = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return e.setAttribute("d", "M7.991 11.674 9.53 4.455c.123-.595.246-.71 1.347-.807l.11-.52H7.211l-.11.52c1.06.096 1.128.212 1.005.807L6.57 11.674c-.123.595-.246.71-1.346.806l-.11.52h3.774l.11-.52c-1.06-.095-1.129-.211-1.006-.806z"), t.appendChild(e), t;
}
function D() {
  const t = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  t.setAttribute("xmlns", "http://www.w3.org/2000/svg"), t.setAttribute("width", "16"), t.setAttribute("height", "16"), t.setAttribute("fill", "currentColor"), t.setAttribute("class", "bi bi-type-underline"), t.setAttribute("viewBox", "0 0 16 16");
  const e = document.createElementNS("http://www.w3.org/2000/svg", "path");
  return e.setAttribute("d", "M5.313 3.136h-1.23V9.54c0 2.105 1.47 3.623 3.917 3.623s3.917-1.518 3.917-3.623V3.136h-1.23v6.323c0 1.49-.978 2.57-2.687 2.57s-2.687-1.08-2.687-2.57zM12.5 15h-9v-1h9z"), t.appendChild(e), t;
}
const O = {
  "text-bold": H,
  "text-italic": z,
  "text-underline": D
}, V = {
  ...O,
  ...P,
  ...S
};
function A(t) {
  return V[t]();
}
function T(t) {
  return {
    direction: "bottom",
    align: "start",
    useMinWidth: !1,
    autoReposition: !0,
    popOver: !1,
    useBacksplash: !0,
    ...t
  };
}
function k(t, e, n, o) {
  o = T(o), W(t, o, { top: n, left: e, height: 0, width: 0 });
  let s;
  if (o.useBacksplash && (s = U(s, t, o)), o != null && o.autoReposition) {
    const i = document.body.getBoundingClientRect(), r = setInterval(() => {
      if (!document.body.contains(t)) {
        clearInterval(r);
        return;
      }
      const c = document.body.getBoundingClientRect();
      c.top == i.top && c.left == i.left || (clearInterval(r), s == null || s.remove(), k(t, e, n, o));
    }, 100);
  }
}
function U(t, e, n) {
  return t = document.createElement("div"), t.style.setProperty("position", "absolute"), t.style.setProperty("top", "0"), t.style.setProperty("right", "0"), t.style.setProperty("bottom", "0"), t.style.setProperty("left", "0"), t.style.setProperty("z-index", "10"), t.tabIndex = -1, t.addEventListener("click", (o) => {
    var s;
    e.contains(o.target) || (e.remove(), (s = n.onBacksplashClick) == null || s.call(n));
  }), document.body.append(t), t.append(e), e.remove = /* @__PURE__ */ ((o) => function() {
    o.call(this), t == null || t.remove();
  })(e.remove), t;
}
function W(t, e, n) {
  document.contains(t) || document.body.append(t), t.style.setProperty("position", "absolute");
  const o = t.getBoundingClientRect(), { bottom: s, top: i } = j(e, n, o), { left: r, right: c } = _(e, n, o);
  i > 0 ? t.style.setProperty("top", i + "px") : s > 0 && t.style.setProperty("bottom", s + "px"), r > 0 ? t.style.setProperty("left", r + "px") : c > 0 && t.style.setProperty("right", c + "px");
}
function _(t, e, n) {
  let o = 0, s = 0;
  if ([
    "start",
    "end",
    "center"
    /* CENTER */
  ].includes(t.align)) {
    const r = e.left, c = window.innerWidth - (e.left + e.width);
    var i = t.align;
    i == "center" && r >= n.width / 2 && c >= n.width / 2 ? i = "center" : i == "end" && r >= n.width ? i = "end" : i == "start" && c >= n.width || r < c ? i = "start" : r > c && (i = "end"), i == "center" ? o = e.left + e.width / 2 - n.width / 2 : i == "start" ? o = e.left : s = window.innerWidth - (e.left + e.width);
  } else
    throw "Invalid PopupAlign: " + t.align;
  return { left: o, right: s };
}
function j(t, e, n) {
  let o = 0, s = 0;
  if ([
    "top",
    "bottom"
    /* BOTTOM */
  ].includes(t.direction)) {
    const r = e.top - n.height, c = window.innerHeight - (e.top + e.height + n.height);
    var i = t.direction;
    i == "bottom" && c < n.height && r > c ? i = "top" : i == "top" && r < n.height && r < c ? i = "bottom" : r <= 0 && c <= 0 && r > c ? i = "top" : r <= 0 && c <= 0 && r < c && (i = "bottom"), i == "top" ? s = window.innerHeight - e.top : o = e.top + e.height, t.popOver && i == "top" ? s -= e.height : t.popOver && (o -= e.height);
  } else
    throw "Invalid PopupDirection: " + t.direction;
  return { bottom: s, top: o };
}
function G(t, e = "bg-zinc-700 rounded p-1 z-10") {
  const n = document.createElement("div");
  return e && (n.className += " " + e), n.append(...[t ?? []].flat().filter((o) => o)), n;
}
var b;
class x {
  constructor(e) {
    h(this, b);
    w(this, b, e.context);
  }
  get context() {
    return d(this, b);
  }
}
b = new WeakMap();
function q(t, e) {
  return new t(e);
}
function F(t, e) {
  return q(t, e);
}
var a;
class K extends x {
  constructor(n) {
    super(n);
    h(this, a);
    w(this, a, n.config);
  }
  render() {
    const n = document.createElement("div");
    n.className = "context-menu-group", n.tabIndex = 0;
    const o = document.createElement("div");
    o.className = "icon", o.append(A(d(this, a).icon));
    const s = document.createElement("div");
    return s.className = "title", s.innerText = d(this, a).name, n.append(
      o,
      s
    ), n.addEventListener("click", () => this.execute()), n.addEventListener("keydown", (i) => i.key == "Enter" && this.execute()), n;
  }
  execute() {
    this.context.hide(), d(this, a).execute();
  }
}
a = new WeakMap();
class X extends x {
  constructor(e) {
    super(e);
  }
  render() {
    const e = document.createElement("hr");
    return e.className = "context-menu-divider", e;
  }
}
function M(t, e, n) {
  const o = [
    ...t.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])')
  ].reduce((r, c) => (r.some((f) => f.contains(c)) || r.push(c), r), []), s = o.indexOf(e), i = n ? (s + 1) % o.length : (s - 1 + o.length) % o.length;
  o[i].focus();
}
var p;
class Y extends x {
  constructor(n) {
    super(n);
    h(this, p);
    w(this, p, n.config);
  }
  render() {
    const n = document.createElement("div");
    n.className = "context-menu-item", n.tabIndex = 0;
    const o = document.createElement("div");
    o.className = "icon", o.append(A(d(this, p).icon));
    const s = document.createElement("div");
    s.className = "title", s.innerText = d(this, p).name;
    const i = document.createElement("div");
    i.className = "icon caret", i.append(A("arrow-chevron-right")), n.append(
      o,
      s,
      i
    );
    const r = this.context.createMenu(d(this, p).items);
    return n.append(r), n.addEventListener("focus", () => {
      let u = c(), l = f();
      r.style.setProperty(u ? "bottom" : "top", "0"), r.style.removeProperty(u ? "top" : "bottom"), r.style.setProperty(l ? "right" : "left", "100%"), r.style.removeProperty(l ? "left" : "right");
    }), n.addEventListener("keydown", (u) => {
      const l = f();
      u.key == "ArrowLeft" && l || u.key == "ArrowRight" && l == !1 ? M(r, r, !0) : (u.key == "ArrowLeft" && l == !1 || u.key == "ArrowRight" && l) && n.focus();
    }), n;
    function c() {
      const u = r.getBoundingClientRect(), l = n.getBoundingClientRect(), v = l.bottom - u.height, y = window.innerHeight - l.top - u.height;
      return v >= 0 && y < 0;
    }
    function f() {
      const u = r.getBoundingClientRect(), l = n.getBoundingClientRect(), v = l.left - u.width, y = window.innerWidth - l.right - u.width;
      return v >= 0 && y < 0;
    }
  }
}
p = new WeakMap();
var m, g;
class $ {
  constructor(e) {
    h(this, m);
    h(this, g);
    w(this, m, {
      ...e,
      itemByType: {
        Option: K,
        Divider: X,
        Group: Y,
        ...e.itemByType
      }
    }), e.target.addEventListener("contextmenu", (n) => {
      n.preventDefault(), this.show(n.pageX, n.pageY);
    });
  }
  show(e, n) {
    w(this, g, this.createMenu(d(this, m).options)), k(d(this, g), e, n);
  }
  hide() {
    var e;
    (e = d(this, g)) == null || e.remove();
  }
  createMenu(e) {
    const n = e.map((i) => F(
      d(this, m).itemByType[i.type],
      {
        context: this,
        config: i
      }
    )), o = G(n.map((i) => i.render()), "context-menu");
    return document.addEventListener("keydown", (i) => s(i)), o.addEventListener("keydown", (i) => s(i)), o;
    function s(i) {
      if (i.key == "ArrowDown" || i.key == "ArrowUp") {
        const r = i.key == "ArrowDown", c = document.activeElement;
        M(o, c, r), i.stopPropagation();
      }
    }
  }
}
m = new WeakMap(), g = new WeakMap();
export {
  $ as ContextMenu,
  x as ContextMenuItem,
  K as ContextMenuOption,
  Y as ContextMenuOptionGroup
};
//# sourceMappingURL=index.es.js.map
