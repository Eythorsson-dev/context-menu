var L = (n) => {
  throw TypeError(n);
};
var k = (n, t, e) => t.has(n) || L("Cannot " + e);
var u = (n, t, e) => (k(n, t, "read from private field"), e ? e.call(n) : t.get(n)), p = (n, t, e) => t.has(n) ? L("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), h = (n, t, e, s) => (k(n, t, "write to private field"), s ? s.call(n, e) : t.set(n, e), e);
import { getIcon as v, popupPosition as B, popupContainer as N } from "@eythorsson-dev/common-utils";
var x;
class b {
  constructor(t) {
    p(this, x);
    h(this, x, t.context);
  }
  get context() {
    return u(this, x);
  }
}
x = new WeakMap();
function R(n, t) {
  return new n(t);
}
function I(n, t) {
  return R(n, t);
}
function A(n) {
  return typeof n == "boolean" ? n : typeof n == "function" ? n() : !1;
}
var l;
class P extends b {
  constructor(e) {
    super(e);
    p(this, l);
    h(this, l, e.config);
  }
  render() {
    const e = document.createElement("div");
    e.className = "context-menu-item", e.tabIndex = 0;
    const s = document.createElement("div");
    s.className = "icon", s.append(v(u(this, l).icon));
    const c = document.createElement("div");
    return c.className = "title", c.innerText = u(this, l).name, e.append(
      s,
      c
    ), A(u(this, l).isDisabled ?? !1) ? e.classList.add("disabled") : (e.addEventListener("keydown", (o) => o.key == "Enter" && this.execute()), e.addEventListener("click", (o) => {
      o.stopPropagation(), this.execute();
    })), e;
  }
  execute() {
    this.context.hide(), u(this, l).execute();
  }
}
l = new WeakMap();
class D extends b {
  constructor(t) {
    super(t);
  }
  render() {
    const t = document.createElement("hr");
    return t.className = "context-menu-divider", t;
  }
}
function C(n, t, e) {
  const s = [
    ...n.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])')
  ].reduce((i, m) => (i.some((y) => y.contains(m)) || i.push(m), i), []), c = s.indexOf(t), o = e ? (c + 1) % s.length : (c - 1 + s.length) % s.length;
  s[o].focus();
}
var d;
class O extends b {
  constructor(e) {
    super(e);
    p(this, d);
    h(this, d, e.config);
  }
  render() {
    const e = document.createElement("div");
    e.className = "context-menu-item", e.tabIndex = 0;
    const s = document.createElement("div");
    s.className = "icon", s.append(v(u(this, d).icon));
    const c = document.createElement("div");
    c.className = "title", c.innerText = u(this, d).name;
    const o = document.createElement("div");
    o.className = "icon caret", o.append(v("arrow-chevron-right")), e.append(
      s,
      c,
      o
    );
    const i = this.context.createMenu(u(this, d).items);
    return e.append(i), e.addEventListener("focus", () => {
      let r = m(), a = y();
      i.style.setProperty(r ? "bottom" : "top", "0"), i.style.removeProperty(r ? "top" : "bottom"), i.style.setProperty(a ? "right" : "left", "100%"), i.style.removeProperty(a ? "left" : "right");
    }), e.addEventListener("keydown", (r) => {
      const a = y();
      r.key == "ArrowLeft" && a || r.key == "ArrowRight" && a == !1 ? C(i, i, !0) : (r.key == "ArrowLeft" && a == !1 || r.key == "ArrowRight" && a) && e.focus();
    }), e;
    function m() {
      const r = i.getBoundingClientRect(), a = e.getBoundingClientRect(), w = a.bottom - r.height, E = window.innerHeight - a.top - r.height;
      return w >= 0 && E < 0;
    }
    function y() {
      const r = i.getBoundingClientRect(), a = e.getBoundingClientRect(), w = a.left - r.width, E = window.innerWidth - a.right - r.width;
      return w >= 0 && E < 0;
    }
  }
}
d = new WeakMap();
function T(n) {
  return typeof n == "function" ? n() : n;
}
var f, g;
class V {
  constructor(t) {
    p(this, f);
    p(this, g);
    h(this, f, {
      ...t,
      itemByType: {
        Option: P,
        Divider: D,
        Group: O,
        ...t.itemByType
      }
    }), t.target.addEventListener("contextmenu", (e) => {
      e.preventDefault(), e.stopPropagation(), this.show(e.pageX, e.pageY);
    });
  }
  show(t, e) {
    var c, o;
    h(this, g, this.createMenu(T(u(this, f).options)));
    const s = B(u(this, g), t, e, { closeOnEsc: !0, backsplachClassName: "outline-none" });
    (c = s.backsplash) == null || c.focus(), (o = s.backsplash) == null || o.addEventListener("contextmenu", (i) => {
      i.preventDefault(), s.element.remove();
    });
  }
  hide() {
    var t;
    (t = u(this, g)) == null || t.remove();
  }
  createMenu(t) {
    const e = t.map((o) => I(
      u(this, f).itemByType[o.type],
      {
        context: this,
        config: o
      }
    )), s = N(e.map((o) => o.render()), "context-menu");
    return document.addEventListener("keydown", (o) => c(o)), s.addEventListener("keydown", (o) => c(o)), s;
    function c(o) {
      if (o.key == "ArrowDown" || o.key == "ArrowUp") {
        const i = o.key == "ArrowDown", m = document.activeElement;
        C(s, m, i), o.stopPropagation();
      }
    }
  }
}
f = new WeakMap(), g = new WeakMap();
export {
  V as ContextMenu,
  b as ContextMenuItem,
  P as ContextMenuOption,
  O as ContextMenuOptionGroup
};
//# sourceMappingURL=index.es.js.map
