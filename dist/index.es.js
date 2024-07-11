var L = (n) => {
  throw TypeError(n);
};
var k = (n, t, e) => t.has(n) || L("Cannot " + e);
var s = (n, t, e) => (k(n, t, "read from private field"), e ? e.call(n) : t.get(n)), m = (n, t, e) => t.has(n) ? L("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), p = (n, t, e, i) => (k(n, t, "write to private field"), i ? i.call(n, e) : t.set(n, e), e);
import { getIcon as B, popupPosition as N, popupContainer as R } from "@eythorsson-dev/common-utils";
var x;
class v {
  constructor(t) {
    m(this, x);
    p(this, x, t.context);
  }
  get context() {
    return s(this, x);
  }
}
x = new WeakMap();
function I(n, t) {
  return new n(t);
}
function A(n, t) {
  return I(n, t);
}
function P(n) {
  return typeof n == "boolean" ? n : typeof n == "function" ? n() : !1;
}
var l, y;
class D extends v {
  constructor(e) {
    super(e);
    m(this, l);
    m(this, y);
    p(this, l, e.config), p(this, y, e.beforeExecute);
  }
  render() {
    const e = document.createElement("div");
    e.className = "context-menu-item", e.tabIndex = 0;
    const i = document.createElement("div");
    i.className = "icon", s(this, l).icon && i.append(s(this, l).icon);
    const r = document.createElement("div");
    return r.className = "title", r.innerText = s(this, l).name, e.append(
      i,
      r
    ), P(s(this, l).isDisabled ?? !1) ? e.classList.add("disabled") : (e.addEventListener("keydown", (o) => o.key == "Enter" && this.execute()), e.addEventListener("click", (o) => {
      o.stopPropagation(), this.execute();
    })), e;
  }
  execute() {
    var e;
    this.context.hide(), (e = s(this, y)) == null || e.call(this), s(this, l).execute();
  }
}
l = new WeakMap(), y = new WeakMap();
class O extends v {
  constructor(t) {
    super(t);
  }
  render() {
    const t = document.createElement("hr");
    return t.className = "context-menu-divider", t;
  }
}
function C(n, t, e) {
  const i = [
    ...n.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])')
  ].reduce((c, f) => (c.some((w) => w.contains(f)) || c.push(f), c), []), r = i.indexOf(t), o = e ? (r + 1) % i.length : (r - 1 + i.length) % i.length;
  i[o].focus();
}
var d;
class T extends v {
  constructor(e) {
    super(e);
    m(this, d);
    p(this, d, e.config);
  }
  render() {
    const e = document.createElement("div");
    e.className = "context-menu-item", e.tabIndex = 0;
    const i = document.createElement("div");
    i.className = "icon", s(this, d).icon && i.append(s(this, d).icon);
    const r = document.createElement("div");
    r.className = "title", r.innerText = s(this, d).name;
    const o = document.createElement("div");
    o.className = "icon caret", o.append(B("arrow-chevron-right")), e.append(
      i,
      r,
      o
    );
    const c = this.context.createMenu(s(this, d).items);
    return e.append(c), e.addEventListener("focus", () => {
      let a = f(), u = w();
      c.style.setProperty(a ? "bottom" : "top", "0"), c.style.removeProperty(a ? "top" : "bottom"), c.style.setProperty(u ? "right" : "left", "100%"), c.style.removeProperty(u ? "left" : "right");
    }), e.addEventListener("keydown", (a) => {
      const u = w();
      a.key == "ArrowLeft" && u || a.key == "ArrowRight" && u == !1 ? C(c, c, !0) : (a.key == "ArrowLeft" && u == !1 || a.key == "ArrowRight" && u) && e.focus();
    }), e;
    function f() {
      const a = c.getBoundingClientRect(), u = e.getBoundingClientRect(), E = u.bottom - a.height, b = window.innerHeight - u.top - a.height;
      return E >= 0 && b < 0;
    }
    function w() {
      const a = c.getBoundingClientRect(), u = e.getBoundingClientRect(), E = u.left - a.width, b = window.innerWidth - u.right - a.width;
      return E >= 0 && b < 0;
    }
  }
}
d = new WeakMap();
function _(n) {
  return typeof n == "function" ? n() : n;
}
var h, g;
class q {
  constructor(t) {
    m(this, h);
    m(this, g);
    p(this, h, {
      ...t,
      itemByType: {
        Option: D,
        Divider: O,
        Group: T,
        ...t.itemByType
      }
    }), t.target.addEventListener("contextmenu", (e) => {
      e.preventDefault(), e.stopPropagation(), this.show(e.pageX, e.pageY);
    });
  }
  show(t, e) {
    var r, o;
    p(this, g, this.createMenu(_(s(this, h).options)));
    const i = N(s(this, g), t, e, { closeOnEsc: !0, backsplachClassName: "outline-none" });
    (r = i.backsplash) == null || r.focus(), (o = i.backsplash) == null || o.addEventListener("contextmenu", (c) => {
      c.preventDefault(), i.element.remove();
    });
  }
  hide() {
    var t;
    (t = s(this, g)) == null || t.remove();
  }
  createMenu(t) {
    const e = t.map((o) => A(
      s(this, h).itemByType[o.type],
      {
        context: this,
        config: o,
        beforeExecute: s(this, h).beforeExecute
      }
    )), i = R(e.map((o) => o.render()), "context-menu");
    return document.addEventListener("keydown", (o) => r(o)), i.addEventListener("keydown", (o) => r(o)), i;
    function r(o) {
      if (o.key == "ArrowDown" || o.key == "ArrowUp") {
        const c = o.key == "ArrowDown", f = document.activeElement;
        C(i, f, c), o.stopPropagation();
      }
    }
  }
}
h = new WeakMap(), g = new WeakMap();
export {
  q as ContextMenu,
  v as ContextMenuItem,
  D as ContextMenuOption,
  T as ContextMenuOptionGroup
};
//# sourceMappingURL=index.es.js.map
