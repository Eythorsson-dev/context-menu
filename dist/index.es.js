var k = (n) => {
  throw TypeError(n);
};
var M = (n, t, e) => t.has(n) || k("Cannot " + e);
var u = (n, t, e) => (M(n, t, "read from private field"), e ? e.call(n) : t.get(n)), p = (n, t, e) => t.has(n) ? k("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, e), h = (n, t, e, i) => (M(n, t, "write to private field"), i ? i.call(n, e) : t.set(n, e), e);
import { getIcon as v, popupPosition as C, popupContainer as R } from "@eythorsson-dev/common-utils";
var f;
class L {
  constructor(t) {
    p(this, f);
    h(this, f, t.context);
  }
  get context() {
    return u(this, f);
  }
}
f = new WeakMap();
function I(n, t) {
  return new n(t);
}
function N(n, t) {
  return I(n, t);
}
var d;
class A extends L {
  constructor(e) {
    super(e);
    p(this, d);
    h(this, d, e.config);
  }
  render() {
    const e = document.createElement("div");
    e.className = "context-menu-group", e.tabIndex = 0;
    const i = document.createElement("div");
    i.className = "icon", i.append(v(u(this, d).icon));
    const s = document.createElement("div");
    return s.className = "title", s.innerText = u(this, d).name, e.append(
      i,
      s
    ), e.addEventListener("click", () => this.execute()), e.addEventListener("keydown", (o) => o.key == "Enter" && this.execute()), e;
  }
  execute() {
    this.context.hide(), u(this, d).execute();
  }
}
d = new WeakMap();
class P extends L {
  constructor(t) {
    super(t);
  }
  render() {
    const t = document.createElement("hr");
    return t.className = "context-menu-divider", t;
  }
}
function b(n, t, e) {
  const i = [
    ...n.querySelectorAll('a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])')
  ].reduce((c, l) => (c.some((y) => y.contains(l)) || c.push(l), c), []), s = i.indexOf(t), o = e ? (s + 1) % i.length : (s - 1 + i.length) % i.length;
  i[o].focus();
}
var m;
class T extends L {
  constructor(e) {
    super(e);
    p(this, m);
    h(this, m, e.config);
  }
  render() {
    const e = document.createElement("div");
    e.className = "context-menu-item", e.tabIndex = 0;
    const i = document.createElement("div");
    i.className = "icon", i.append(v(u(this, m).icon));
    const s = document.createElement("div");
    s.className = "title", s.innerText = u(this, m).name;
    const o = document.createElement("div");
    o.className = "icon caret", o.append(v("arrow-chevron-right")), e.append(
      i,
      s,
      o
    );
    const c = this.context.createMenu(u(this, m).items);
    return e.append(c), e.addEventListener("focus", () => {
      let r = l(), a = y();
      c.style.setProperty(r ? "bottom" : "top", "0"), c.style.removeProperty(r ? "top" : "bottom"), c.style.setProperty(a ? "right" : "left", "100%"), c.style.removeProperty(a ? "left" : "right");
    }), e.addEventListener("keydown", (r) => {
      const a = y();
      r.key == "ArrowLeft" && a || r.key == "ArrowRight" && a == !1 ? b(c, c, !0) : (r.key == "ArrowLeft" && a == !1 || r.key == "ArrowRight" && a) && e.focus();
    }), e;
    function l() {
      const r = c.getBoundingClientRect(), a = e.getBoundingClientRect(), w = a.bottom - r.height, E = window.innerHeight - a.top - r.height;
      return w >= 0 && E < 0;
    }
    function y() {
      const r = c.getBoundingClientRect(), a = e.getBoundingClientRect(), w = a.left - r.width, E = window.innerWidth - a.right - r.width;
      return w >= 0 && E < 0;
    }
  }
}
m = new WeakMap();
var g, x;
class _ {
  constructor(t) {
    p(this, g);
    p(this, x);
    h(this, g, {
      ...t,
      itemByType: {
        Option: A,
        Divider: P,
        Group: T,
        ...t.itemByType
      }
    }), t.target.addEventListener("contextmenu", (e) => {
      e.preventDefault(), this.show(e.pageX, e.pageY);
    });
  }
  show(t, e) {
    h(this, x, this.createMenu(u(this, g).options)), C(u(this, x), t, e);
  }
  hide() {
    var t;
    (t = u(this, x)) == null || t.remove();
  }
  createMenu(t) {
    const e = t.map((o) => N(
      u(this, g).itemByType[o.type],
      {
        context: this,
        config: o
      }
    )), i = R(e.map((o) => o.render()), "context-menu");
    return document.addEventListener("keydown", (o) => s(o)), i.addEventListener("keydown", (o) => s(o)), i;
    function s(o) {
      if (o.key == "ArrowDown" || o.key == "ArrowUp") {
        const c = o.key == "ArrowDown", l = document.activeElement;
        b(i, l, c), o.stopPropagation();
      }
    }
  }
}
g = new WeakMap(), x = new WeakMap();
export {
  _ as ContextMenu,
  L as ContextMenuItem,
  A as ContextMenuOption,
  T as ContextMenuOptionGroup
};
//# sourceMappingURL=index.es.js.map
