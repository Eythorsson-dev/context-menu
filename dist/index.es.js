var k = (n) => {
  throw TypeError(n);
};
var C = (n, t, e) => t.has(n) || k("Cannot " + e);
var r = (n, t, e) => (C(n, t, "read from private field"), e ? e.call(n) : t.get(n)), d = (n, t, e) => t.has(n) ? k("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), m = (n, t, e, c) => (C(n, t, "write to private field"), c ? c.call(n, e) : t.set(n, e), e);
import { getIcon as v, popupPosition as N, popupContainer as R } from "@eythorsson-dev/common-utils";
var x;
class L {
  constructor(t) {
    d(this, x);
    m(this, x, t.context);
  }
  get context() {
    return r(this, x);
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
class D extends L {
  constructor(e) {
    super(e);
    d(this, l);
    d(this, y);
    m(this, l, e.config), m(this, y, e.beforeExecute);
  }
  render() {
    const e = document.createElement("div");
    e.className = "context-menu-item", e.tabIndex = 0;
    const c = document.createElement("div");
    c.className = "icon", c.append(v(r(this, l).icon));
    const s = document.createElement("div");
    return s.className = "title", s.innerText = r(this, l).name, e.append(
      c,
      s
    ), P(r(this, l).isDisabled ?? !1) ? e.classList.add("disabled") : (e.addEventListener("keydown", (o) => o.key == "Enter" && this.execute()), e.addEventListener("click", (o) => {
      o.stopPropagation(), this.execute();
    })), e;
  }
  execute() {
    var e;
    this.context.hide(), (e = r(this, y)) == null || e.call(this), r(this, l).execute();
  }
}
l = new WeakMap(), y = new WeakMap();
class O extends L {
  constructor(t) {
    super(t);
  }
  render() {
    const t = document.createElement("hr");
    return t.className = "context-menu-divider", t;
  }
}
function M(n, t, e) {
  const c = [
    ...n.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])')
  ].reduce((i, f) => (i.some((w) => w.contains(f)) || i.push(f), i), []), s = c.indexOf(t), o = e ? (s + 1) % c.length : (s - 1 + c.length) % c.length;
  c[o].focus();
}
var p;
class T extends L {
  constructor(e) {
    super(e);
    d(this, p);
    m(this, p, e.config);
  }
  render() {
    const e = document.createElement("div");
    e.className = "context-menu-item", e.tabIndex = 0;
    const c = document.createElement("div");
    c.className = "icon", c.append(v(r(this, p).icon));
    const s = document.createElement("div");
    s.className = "title", s.innerText = r(this, p).name;
    const o = document.createElement("div");
    o.className = "icon caret", o.append(v("arrow-chevron-right")), e.append(
      c,
      s,
      o
    );
    const i = this.context.createMenu(r(this, p).items);
    return e.append(i), e.addEventListener("focus", () => {
      let a = f(), u = w();
      i.style.setProperty(a ? "bottom" : "top", "0"), i.style.removeProperty(a ? "top" : "bottom"), i.style.setProperty(u ? "right" : "left", "100%"), i.style.removeProperty(u ? "left" : "right");
    }), e.addEventListener("keydown", (a) => {
      const u = w();
      a.key == "ArrowLeft" && u || a.key == "ArrowRight" && u == !1 ? M(i, i, !0) : (a.key == "ArrowLeft" && u == !1 || a.key == "ArrowRight" && u) && e.focus();
    }), e;
    function f() {
      const a = i.getBoundingClientRect(), u = e.getBoundingClientRect(), E = u.bottom - a.height, b = window.innerHeight - u.top - a.height;
      return E >= 0 && b < 0;
    }
    function w() {
      const a = i.getBoundingClientRect(), u = e.getBoundingClientRect(), E = u.left - a.width, b = window.innerWidth - u.right - a.width;
      return E >= 0 && b < 0;
    }
  }
}
p = new WeakMap();
function _(n) {
  return typeof n == "function" ? n() : n;
}
var h, g;
class q {
  constructor(t) {
    d(this, h);
    d(this, g);
    m(this, h, {
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
    var s, o;
    m(this, g, this.createMenu(_(r(this, h).options)));
    const c = N(r(this, g), t, e, { closeOnEsc: !0, backsplachClassName: "outline-none" });
    (s = c.backsplash) == null || s.focus(), (o = c.backsplash) == null || o.addEventListener("contextmenu", (i) => {
      i.preventDefault(), c.element.remove();
    });
  }
  hide() {
    var t;
    (t = r(this, g)) == null || t.remove();
  }
  createMenu(t) {
    const e = t.map((o) => A(
      r(this, h).itemByType[o.type],
      {
        context: this,
        config: o,
        beforeExecute: r(this, h).beforeExecute
      }
    )), c = R(e.map((o) => o.render()), "context-menu");
    return document.addEventListener("keydown", (o) => s(o)), c.addEventListener("keydown", (o) => s(o)), c;
    function s(o) {
      if (o.key == "ArrowDown" || o.key == "ArrowUp") {
        const i = o.key == "ArrowDown", f = document.activeElement;
        M(c, f, i), o.stopPropagation();
      }
    }
  }
}
h = new WeakMap(), g = new WeakMap();
export {
  q as ContextMenu,
  L as ContextMenuItem,
  D as ContextMenuOption,
  T as ContextMenuOptionGroup
};
//# sourceMappingURL=index.es.js.map
