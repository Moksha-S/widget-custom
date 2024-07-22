/**
* @vue/shared v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ii(a, l) {
  const u = new Set(a.split(","));
  return l ? (f) => u.has(f.toLowerCase()) : (f) => u.has(f);
}
const Vt = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Vi = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], ee = () => {
}, Ul = () => !1, us = (a) => a.charCodeAt(0) === 111 && a.charCodeAt(1) === 110 && // uppercase letter
(a.charCodeAt(2) > 122 || a.charCodeAt(2) < 97), Hs = (a) => a.startsWith("onUpdate:"), $t = Object.assign, Qa = (a, l) => {
  const u = a.indexOf(l);
  u > -1 && a.splice(u, 1);
}, ql = Object.prototype.hasOwnProperty, Rt = (a, l) => ql.call(a, l), vt = Array.isArray, Wi = (a) => Qs(a) === "[object Map]", Zl = (a) => Qs(a) === "[object Set]", St = (a) => typeof a == "function", ie = (a) => typeof a == "string", fs = (a) => typeof a == "symbol", Bt = (a) => a !== null && typeof a == "object", tr = (a) => (Bt(a) || St(a)) && St(a.then) && St(a.catch), Kl = Object.prototype.toString, Qs = (a) => Kl.call(a), er = (a) => Qs(a).slice(8, -1), Jl = (a) => Qs(a) === "[object Object]", ir = (a) => ie(a) && a !== "NaN" && a[0] !== "-" && "" + parseInt(a, 10) === a, is = /* @__PURE__ */ ii(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ql = /* @__PURE__ */ ii(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), ta = (a) => {
  const l = /* @__PURE__ */ Object.create(null);
  return (u) => l[u] || (l[u] = a(u));
}, tc = /-(\w)/g, ke = ta((a) => a.replace(tc, (l, u) => u ? u.toUpperCase() : "")), ec = /\B([A-Z])/g, we = ta(
  (a) => a.replace(ec, "-$1").toLowerCase()
), Ri = ta((a) => a.charAt(0).toUpperCase() + a.slice(1)), Si = ta((a) => a ? `on${Ri(a)}` : ""), mi = (a, l) => !Object.is(a, l), qi = (a, ...l) => {
  for (let u = 0; u < a.length; u++)
    a[u](...l);
}, Jo = (a, l, u, f = !1) => {
  Object.defineProperty(a, l, {
    configurable: !0,
    enumerable: !1,
    writable: f,
    value: u
  });
}, ic = (a) => {
  const l = parseFloat(a);
  return isNaN(l) ? a : l;
}, Wr = (a) => {
  const l = ie(a) ? Number(a) : NaN;
  return isNaN(l) ? a : l;
};
let Br;
const sr = () => Br || (Br = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function ar(a) {
  if (vt(a)) {
    const l = {};
    for (let u = 0; u < a.length; u++) {
      const f = a[u], v = ie(f) ? oc(f) : ar(f);
      if (v)
        for (const w in v)
          l[w] = v[w];
    }
    return l;
  } else if (ie(a) || Bt(a))
    return a;
}
const sc = /;(?![^(]*\))/g, ac = /:([^]+)/, rc = /\/\*[^]*?\*\//g;
function oc(a) {
  const l = {};
  return a.replace(rc, "").split(sc).forEach((u) => {
    if (u) {
      const f = u.split(ac);
      f.length > 1 && (l[f[0].trim()] = f[1].trim());
    }
  }), l;
}
function rr(a) {
  let l = "";
  if (ie(a))
    l = a;
  else if (vt(a))
    for (let u = 0; u < a.length; u++) {
      const f = rr(a[u]);
      f && (l += f + " ");
    }
  else if (Bt(a))
    for (const u in a)
      a[u] && (l += u + " ");
  return l.trim();
}
const nc = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", lc = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", cc = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", hc = /* @__PURE__ */ ii(nc), dc = /* @__PURE__ */ ii(lc), uc = /* @__PURE__ */ ii(cc), fc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", gc = /* @__PURE__ */ ii(fc);
function Qo(a) {
  return !!a || a === "";
}
/**
* @vue/reactivity v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ei(a, ...l) {
  console.warn(`[Vue warn] ${a}`, ...l);
}
let _e;
class tn {
  constructor(l = !1) {
    this.detached = l, this._active = !0, this.effects = [], this.cleanups = [], this.parent = _e, !l && _e && (this.index = (_e.scopes || (_e.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  run(l) {
    if (this._active) {
      const u = _e;
      try {
        return _e = this, l();
      } finally {
        _e = u;
      }
    } else process.env.NODE_ENV !== "production" && ei("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    _e = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    _e = this.parent;
  }
  stop(l) {
    if (this._active) {
      let u, f;
      for (u = 0, f = this.effects.length; u < f; u++)
        this.effects[u].stop();
      for (u = 0, f = this.cleanups.length; u < f; u++)
        this.cleanups[u]();
      if (this.scopes)
        for (u = 0, f = this.scopes.length; u < f; u++)
          this.scopes[u].stop(!0);
      if (!this.detached && this.parent && !l) {
        const v = this.parent.scopes.pop();
        v && v !== this && (this.parent.scopes[this.index] = v, v.index = this.index);
      }
      this.parent = void 0, this._active = !1;
    }
  }
}
function pc(a) {
  return new tn(a);
}
function xc(a, l = _e) {
  l && l.active && l.effects.push(a);
}
function mc() {
  return _e;
}
let Ni;
class or {
  constructor(l, u, f, v) {
    this.fn = l, this.trigger = u, this.scheduler = f, this.active = !0, this.deps = [], this._dirtyLevel = 5, this._trackId = 0, this._runnings = 0, this._shouldSchedule = !1, this._depsLength = 0, xc(this, v);
  }
  get dirty() {
    if (this._dirtyLevel === 2)
      return !1;
    if (this._dirtyLevel === 3 || this._dirtyLevel === 4) {
      this._dirtyLevel = 1, si();
      for (let l = 0; l < this._depsLength; l++) {
        const u = this.deps[l];
        if (u.computed) {
          if (u.computed.effect._dirtyLevel === 2)
            return !0;
          if (bc(u.computed), this._dirtyLevel >= 5)
            break;
        }
      }
      this._dirtyLevel === 1 && (this._dirtyLevel = 0), ai();
    }
    return this._dirtyLevel >= 5;
  }
  set dirty(l) {
    this._dirtyLevel = l ? 5 : 0;
  }
  run() {
    if (this._dirtyLevel = 0, !this.active)
      return this.fn();
    let l = xi, u = Ni;
    try {
      return xi = !0, Ni = this, this._runnings++, Gr(this), this.fn();
    } finally {
      jr(this), this._runnings--, Ni = u, xi = l;
    }
  }
  stop() {
    this.active && (Gr(this), jr(this), this.onStop && this.onStop(), this.active = !1);
  }
}
function bc(a) {
  return a.value;
}
function Gr(a) {
  a._trackId++, a._depsLength = 0;
}
function jr(a) {
  if (a.deps.length > a._depsLength) {
    for (let l = a._depsLength; l < a.deps.length; l++)
      en(a.deps[l], a);
    a.deps.length = a._depsLength;
  }
}
function en(a, l) {
  const u = a.get(l);
  u !== void 0 && l._trackId !== u && (a.delete(l), a.size === 0 && a.cleanup());
}
let xi = !0, Na = 0;
const sn = [];
function si() {
  sn.push(xi), xi = !1;
}
function ai() {
  const a = sn.pop();
  xi = a === void 0 ? !0 : a;
}
function nr() {
  Na++;
}
function lr() {
  for (Na--; !Na && Oa.length; )
    Oa.shift()();
}
function an(a, l, u) {
  var f;
  if (l.get(a) !== a._trackId) {
    l.set(a, a._trackId);
    const v = a.deps[a._depsLength];
    v !== l ? (v && en(v, a), a.deps[a._depsLength++] = l) : a._depsLength++, process.env.NODE_ENV !== "production" && ((f = a.onTrack) == null || f.call(a, $t({ effect: a }, u)));
  }
}
const Oa = [];
function rn(a, l, u) {
  var f;
  nr();
  for (const v of a.keys()) {
    if (!a.computed && v.computed && a.get(v) === v._trackId && v._runnings > 0) {
      v._dirtyLevel = 2;
      continue;
    }
    let w;
    v._dirtyLevel < l && (w ?? (w = a.get(v) === v._trackId)) && (v._shouldSchedule || (v._shouldSchedule = v._dirtyLevel === 0), v.computed && v._dirtyLevel === 2 && (v._shouldSchedule = !0), v._dirtyLevel = l), v._shouldSchedule && (w ?? (w = a.get(v) === v._trackId)) && (process.env.NODE_ENV !== "production" && ((f = v.onTrigger) == null || f.call(v, $t({ effect: v }, u))), v.trigger(), (!v._runnings || v.allowRecurse) && v._dirtyLevel !== 3 && (v._shouldSchedule = !1, v.scheduler && Oa.push(v.scheduler)));
  }
  lr();
}
const on = (a, l) => {
  const u = /* @__PURE__ */ new Map();
  return u.cleanup = a, u.computed = l, u;
}, Vs = /* @__PURE__ */ new WeakMap(), Oi = Symbol(process.env.NODE_ENV !== "production" ? "iterate" : ""), La = Symbol(process.env.NODE_ENV !== "production" ? "Map key iterate" : "");
function de(a, l, u) {
  if (xi && Ni) {
    let f = Vs.get(a);
    f || Vs.set(a, f = /* @__PURE__ */ new Map());
    let v = f.get(u);
    v || f.set(u, v = on(() => f.delete(u))), an(
      Ni,
      v,
      process.env.NODE_ENV !== "production" ? {
        target: a,
        type: l,
        key: u
      } : void 0
    );
  }
}
function We(a, l, u, f, v, w) {
  const P = Vs.get(a);
  if (!P)
    return;
  let _ = [];
  if (l === "clear")
    _ = [...P.values()];
  else if (u === "length" && vt(a)) {
    const T = Number(f);
    P.forEach((z, D) => {
      (D === "length" || !fs(D) && D >= T) && _.push(z);
    });
  } else
    switch (u !== void 0 && _.push(P.get(u)), l) {
      case "add":
        vt(a) ? ir(u) && _.push(P.get("length")) : (_.push(P.get(Oi)), Wi(a) && _.push(P.get(La)));
        break;
      case "delete":
        vt(a) || (_.push(P.get(Oi)), Wi(a) && _.push(P.get(La)));
        break;
      case "set":
        Wi(a) && _.push(P.get(Oi));
        break;
    }
  nr();
  for (const T of _)
    T && rn(
      T,
      5,
      process.env.NODE_ENV !== "production" ? {
        target: a,
        type: l,
        key: u,
        newValue: f,
        oldValue: v,
        oldTarget: w
      } : void 0
    );
  lr();
}
function vc(a, l) {
  const u = Vs.get(a);
  return u && u.get(l);
}
const yc = /* @__PURE__ */ ii("__proto__,__v_isRef,__isVue"), nn = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((a) => a !== "arguments" && a !== "caller").map((a) => Symbol[a]).filter(fs)
), $r = /* @__PURE__ */ wc();
function wc() {
  const a = {};
  return ["includes", "indexOf", "lastIndexOf"].forEach((l) => {
    a[l] = function(...u) {
      const f = Pt(this);
      for (let w = 0, P = this.length; w < P; w++)
        de(f, "get", w + "");
      const v = f[l](...u);
      return v === -1 || v === !1 ? f[l](...u.map(Pt)) : v;
    };
  }), ["push", "pop", "shift", "unshift", "splice"].forEach((l) => {
    a[l] = function(...u) {
      si(), nr();
      const f = Pt(this)[l].apply(this, u);
      return lr(), ai(), f;
    };
  }), a;
}
function kc(a) {
  fs(a) || (a = String(a));
  const l = Pt(this);
  return de(l, "has", a), l.hasOwnProperty(a);
}
class ln {
  constructor(l = !1, u = !1) {
    this._isReadonly = l, this._isShallow = u;
  }
  get(l, u, f) {
    const v = this._isReadonly, w = this._isShallow;
    if (u === "__v_isReactive")
      return !v;
    if (u === "__v_isReadonly")
      return v;
    if (u === "__v_isShallow")
      return w;
    if (u === "__v_raw")
      return f === (v ? w ? pn : gn : w ? fn : un).get(l) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(l) === Object.getPrototypeOf(f) ? l : void 0;
    const P = vt(l);
    if (!v) {
      if (P && Rt($r, u))
        return Reflect.get($r, u, f);
      if (u === "hasOwnProperty")
        return kc;
    }
    const _ = Reflect.get(l, u, f);
    return (fs(u) ? nn.has(u) : yc(u)) || (v || de(l, "get", u), w) ? _ : ce(_) ? P && ir(u) ? _ : _.value : Bt(_) ? v ? mn(_) : sa(_) : _;
  }
}
class cn extends ln {
  constructor(l = !1) {
    super(!1, l);
  }
  set(l, u, f, v) {
    let w = l[u];
    if (!this._isShallow) {
      const T = zi(w);
      if (!Li(f) && !zi(f) && (w = Pt(w), f = Pt(f)), !vt(l) && ce(w) && !ce(f))
        return T ? !1 : (w.value = f, !0);
    }
    const P = vt(l) && ir(u) ? Number(u) < l.length : Rt(l, u), _ = Reflect.set(l, u, f, v);
    return l === Pt(v) && (P ? mi(f, w) && We(l, "set", u, f, w) : We(l, "add", u, f)), _;
  }
  deleteProperty(l, u) {
    const f = Rt(l, u), v = l[u], w = Reflect.deleteProperty(l, u);
    return w && f && We(l, "delete", u, void 0, v), w;
  }
  has(l, u) {
    const f = Reflect.has(l, u);
    return (!fs(u) || !nn.has(u)) && de(l, "has", u), f;
  }
  ownKeys(l) {
    return de(
      l,
      "iterate",
      vt(l) ? "length" : Oi
    ), Reflect.ownKeys(l);
  }
}
class hn extends ln {
  constructor(l = !1) {
    super(!0, l);
  }
  set(l, u) {
    return process.env.NODE_ENV !== "production" && ei(
      `Set operation on key "${String(u)}" failed: target is readonly.`,
      l
    ), !0;
  }
  deleteProperty(l, u) {
    return process.env.NODE_ENV !== "production" && ei(
      `Delete operation on key "${String(u)}" failed: target is readonly.`,
      l
    ), !0;
  }
}
const Ac = /* @__PURE__ */ new cn(), Sc = /* @__PURE__ */ new hn(), Cc = /* @__PURE__ */ new cn(
  !0
), Ec = /* @__PURE__ */ new hn(!0), cr = (a) => a, ea = (a) => Reflect.getPrototypeOf(a);
function ks(a, l, u = !1, f = !1) {
  a = a.__v_raw;
  const v = Pt(a), w = Pt(l);
  u || (mi(l, w) && de(v, "get", l), de(v, "get", w));
  const { has: P } = ea(v), _ = f ? cr : u ? dr : ns;
  if (P.call(v, l))
    return _(a.get(l));
  if (P.call(v, w))
    return _(a.get(w));
  a !== v && a.get(l);
}
function As(a, l = !1) {
  const u = this.__v_raw, f = Pt(u), v = Pt(a);
  return l || (mi(a, v) && de(f, "has", a), de(f, "has", v)), a === v ? u.has(a) : u.has(a) || u.has(v);
}
function Ss(a, l = !1) {
  return a = a.__v_raw, !l && de(Pt(a), "iterate", Oi), Reflect.get(a, "size", a);
}
function Ur(a) {
  a = Pt(a);
  const l = Pt(this);
  return ea(l).has.call(l, a) || (l.add(a), We(l, "add", a, a)), this;
}
function qr(a, l) {
  l = Pt(l);
  const u = Pt(this), { has: f, get: v } = ea(u);
  let w = f.call(u, a);
  w ? process.env.NODE_ENV !== "production" && dn(u, f, a) : (a = Pt(a), w = f.call(u, a));
  const P = v.call(u, a);
  return u.set(a, l), w ? mi(l, P) && We(u, "set", a, l, P) : We(u, "add", a, l), this;
}
function Zr(a) {
  const l = Pt(this), { has: u, get: f } = ea(l);
  let v = u.call(l, a);
  v ? process.env.NODE_ENV !== "production" && dn(l, u, a) : (a = Pt(a), v = u.call(l, a));
  const w = f ? f.call(l, a) : void 0, P = l.delete(a);
  return v && We(l, "delete", a, void 0, w), P;
}
function Kr() {
  const a = Pt(this), l = a.size !== 0, u = process.env.NODE_ENV !== "production" ? Wi(a) ? new Map(a) : new Set(a) : void 0, f = a.clear();
  return l && We(a, "clear", void 0, void 0, u), f;
}
function Cs(a, l) {
  return function(f, v) {
    const w = this, P = w.__v_raw, _ = Pt(P), T = l ? cr : a ? dr : ns;
    return !a && de(_, "iterate", Oi), P.forEach((z, D) => f.call(v, T(z), T(D), w));
  };
}
function Es(a, l, u) {
  return function(...f) {
    const v = this.__v_raw, w = Pt(v), P = Wi(w), _ = a === "entries" || a === Symbol.iterator && P, T = a === "keys" && P, z = v[a](...f), D = u ? cr : l ? dr : ns;
    return !l && de(
      w,
      "iterate",
      T ? La : Oi
    ), {
      // iterator protocol
      next() {
        const { value: R, done: V } = z.next();
        return V ? { value: R, done: V } : {
          value: _ ? [D(R[0]), D(R[1])] : D(R),
          done: V
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function oi(a) {
  return function(...l) {
    if (process.env.NODE_ENV !== "production") {
      const u = l[0] ? `on key "${l[0]}" ` : "";
      ei(
        `${Ri(a)} operation ${u}failed: target is readonly.`,
        Pt(this)
      );
    }
    return a === "delete" ? !1 : a === "clear" ? void 0 : this;
  };
}
function Pc() {
  const a = {
    get(w) {
      return ks(this, w);
    },
    get size() {
      return Ss(this);
    },
    has: As,
    add: Ur,
    set: qr,
    delete: Zr,
    clear: Kr,
    forEach: Cs(!1, !1)
  }, l = {
    get(w) {
      return ks(this, w, !1, !0);
    },
    get size() {
      return Ss(this);
    },
    has: As,
    add: Ur,
    set: qr,
    delete: Zr,
    clear: Kr,
    forEach: Cs(!1, !0)
  }, u = {
    get(w) {
      return ks(this, w, !0);
    },
    get size() {
      return Ss(this, !0);
    },
    has(w) {
      return As.call(this, w, !0);
    },
    add: oi("add"),
    set: oi("set"),
    delete: oi("delete"),
    clear: oi("clear"),
    forEach: Cs(!0, !1)
  }, f = {
    get(w) {
      return ks(this, w, !0, !0);
    },
    get size() {
      return Ss(this, !0);
    },
    has(w) {
      return As.call(this, w, !0);
    },
    add: oi("add"),
    set: oi("set"),
    delete: oi("delete"),
    clear: oi("clear"),
    forEach: Cs(!0, !0)
  };
  return [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((w) => {
    a[w] = Es(w, !1, !1), u[w] = Es(w, !0, !1), l[w] = Es(w, !1, !0), f[w] = Es(
      w,
      !0,
      !0
    );
  }), [
    a,
    u,
    l,
    f
  ];
}
const [
  _c,
  Nc,
  Oc,
  Lc
] = /* @__PURE__ */ Pc();
function ia(a, l) {
  const u = l ? a ? Lc : Oc : a ? Nc : _c;
  return (f, v, w) => v === "__v_isReactive" ? !a : v === "__v_isReadonly" ? a : v === "__v_raw" ? f : Reflect.get(
    Rt(u, v) && v in f ? u : f,
    v,
    w
  );
}
const Ic = {
  get: /* @__PURE__ */ ia(!1, !1)
}, Tc = {
  get: /* @__PURE__ */ ia(!1, !0)
}, Mc = {
  get: /* @__PURE__ */ ia(!0, !1)
}, Dc = {
  get: /* @__PURE__ */ ia(!0, !0)
};
function dn(a, l, u) {
  const f = Pt(u);
  if (f !== u && l.call(a, f)) {
    const v = er(a);
    ei(
      `Reactive ${v} contains both the raw and reactive versions of the same object${v === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const un = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), gn = /* @__PURE__ */ new WeakMap(), pn = /* @__PURE__ */ new WeakMap();
function Rc(a) {
  switch (a) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function zc(a) {
  return a.__v_skip || !Object.isExtensible(a) ? 0 : Rc(er(a));
}
function sa(a) {
  return zi(a) ? a : aa(
    a,
    !1,
    Ac,
    Ic,
    un
  );
}
function xn(a) {
  return aa(
    a,
    !1,
    Cc,
    Tc,
    fn
  );
}
function mn(a) {
  return aa(
    a,
    !0,
    Sc,
    Mc,
    gn
  );
}
function Ve(a) {
  return aa(
    a,
    !0,
    Ec,
    Dc,
    pn
  );
}
function aa(a, l, u, f, v) {
  if (!Bt(a))
    return process.env.NODE_ENV !== "production" && ei(
      `value cannot be made ${l ? "readonly" : "reactive"}: ${String(
        a
      )}`
    ), a;
  if (a.__v_raw && !(l && a.__v_isReactive))
    return a;
  const w = v.get(a);
  if (w)
    return w;
  const P = zc(a);
  if (P === 0)
    return a;
  const _ = new Proxy(
    a,
    P === 2 ? f : u
  );
  return v.set(a, _), _;
}
function Bi(a) {
  return zi(a) ? Bi(a.__v_raw) : !!(a && a.__v_isReactive);
}
function zi(a) {
  return !!(a && a.__v_isReadonly);
}
function Li(a) {
  return !!(a && a.__v_isShallow);
}
function Ws(a) {
  return a ? !!a.__v_raw : !1;
}
function Pt(a) {
  const l = a && a.__v_raw;
  return l ? Pt(l) : a;
}
function hr(a) {
  return Object.isExtensible(a) && Jo(a, "__v_skip", !0), a;
}
const ns = (a) => Bt(a) ? sa(a) : a, dr = (a) => Bt(a) ? mn(a) : a, Fc = "Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free";
class bn {
  constructor(l, u, f, v) {
    this.getter = l, this._setter = u, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this.effect = new or(
      () => l(this._value),
      () => Ns(
        this,
        this.effect._dirtyLevel === 3 ? 3 : 4
      )
    ), this.effect.computed = this, this.effect.active = this._cacheable = !v, this.__v_isReadonly = f;
  }
  get value() {
    const l = Pt(this);
    return (!l._cacheable || l.effect.dirty) && mi(l._value, l._value = l.effect.run()) && Ns(l, 5), vn(l), l.effect._dirtyLevel >= 2 && (process.env.NODE_ENV !== "production" && this._warnRecursive && ei(Fc, `

getter: `, this.getter), Ns(l, 3)), l._value;
  }
  set value(l) {
    this._setter(l);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(l) {
    this.effect.dirty = l;
  }
  // #endregion
}
function Xc(a, l, u = !1) {
  let f, v;
  const w = St(a);
  w ? (f = a, v = process.env.NODE_ENV !== "production" ? () => {
    ei("Write operation failed: computed value is readonly");
  } : ee) : (f = a.get, v = a.set);
  const P = new bn(f, v, w || !v, u);
  return process.env.NODE_ENV !== "production" && l && !u && (P.effect.onTrack = l.onTrack, P.effect.onTrigger = l.onTrigger), P;
}
function vn(a) {
  var l;
  xi && Ni && (a = Pt(a), an(
    Ni,
    (l = a.dep) != null ? l : a.dep = on(
      () => a.dep = void 0,
      a instanceof bn ? a : void 0
    ),
    process.env.NODE_ENV !== "production" ? {
      target: a,
      type: "get",
      key: "value"
    } : void 0
  ));
}
function Ns(a, l = 5, u, f) {
  a = Pt(a);
  const v = a.dep;
  v && rn(
    v,
    l,
    process.env.NODE_ENV !== "production" ? {
      target: a,
      type: "set",
      key: "value",
      newValue: u,
      oldValue: f
    } : void 0
  );
}
function ce(a) {
  return !!(a && a.__v_isRef === !0);
}
function fi(a) {
  return yn(a, !1);
}
function Yc(a) {
  return yn(a, !0);
}
function yn(a, l) {
  return ce(a) ? a : new Hc(a, l);
}
class Hc {
  constructor(l, u) {
    this.__v_isShallow = u, this.dep = void 0, this.__v_isRef = !0, this._rawValue = u ? l : Pt(l), this._value = u ? l : ns(l);
  }
  get value() {
    return vn(this), this._value;
  }
  set value(l) {
    const u = this.__v_isShallow || Li(l) || zi(l);
    if (l = u ? l : Pt(l), mi(l, this._rawValue)) {
      const f = this._rawValue;
      this._rawValue = l, this._value = u ? l : ns(l), Ns(this, 5, l, f);
    }
  }
}
function gi(a) {
  return ce(a) ? a.value : a;
}
const Vc = {
  get: (a, l, u) => gi(Reflect.get(a, l, u)),
  set: (a, l, u, f) => {
    const v = a[l];
    return ce(v) && !ce(u) ? (v.value = u, !0) : Reflect.set(a, l, u, f);
  }
};
function wn(a) {
  return Bi(a) ? a : new Proxy(a, Vc);
}
function Wc(a) {
  process.env.NODE_ENV !== "production" && !Ws(a) && ei("toRefs() expects a reactive object but received a plain one.");
  const l = vt(a) ? new Array(a.length) : {};
  for (const u in a)
    l[u] = Gc(a, u);
  return l;
}
class Bc {
  constructor(l, u, f) {
    this._object = l, this._key = u, this._defaultValue = f, this.__v_isRef = !0;
  }
  get value() {
    const l = this._object[this._key];
    return l === void 0 ? this._defaultValue : l;
  }
  set value(l) {
    this._object[this._key] = l;
  }
  get dep() {
    return vc(Pt(this._object), this._key);
  }
}
function Gc(a, l, u) {
  const f = a[l];
  return ce(f) ? f : new Bc(a, l, u);
}
/**
* @vue/runtime-core v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Ii = [];
function Os(a) {
  Ii.push(a);
}
function Ls() {
  Ii.pop();
}
function at(a, ...l) {
  si();
  const u = Ii.length ? Ii[Ii.length - 1].component : null, f = u && u.appContext.config.warnHandler, v = jc();
  if (f)
    Je(
      f,
      u,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        a + l.map((w) => {
          var P, _;
          return (_ = (P = w.toString) == null ? void 0 : P.call(w)) != null ? _ : JSON.stringify(w);
        }).join(""),
        u && u.proxy,
        v.map(
          ({ vnode: w }) => `at <${fa(u, w.type)}>`
        ).join(`
`),
        v
      ]
    );
  else {
    const w = [`[Vue warn]: ${a}`, ...l];
    v.length && w.push(`
`, ...$c(v)), console.warn(...w);
  }
  ai();
}
function jc() {
  let a = Ii[Ii.length - 1];
  if (!a)
    return [];
  const l = [];
  for (; a; ) {
    const u = l[0];
    u && u.vnode === a ? u.recurseCount++ : l.push({
      vnode: a,
      recurseCount: 0
    });
    const f = a.component && a.component.parent;
    a = f && f.vnode;
  }
  return l;
}
function $c(a) {
  const l = [];
  return a.forEach((u, f) => {
    l.push(...f === 0 ? [] : [`
`], ...Uc(u));
  }), l;
}
function Uc({ vnode: a, recurseCount: l }) {
  const u = l > 0 ? `... (${l} recursive calls)` : "", f = a.component ? a.component.parent == null : !1, v = ` at <${fa(
    a.component,
    a.type,
    f
  )}`, w = ">" + u;
  return a.props ? [v, ...qc(a.props), w] : [v + w];
}
function qc(a) {
  const l = [], u = Object.keys(a);
  return u.slice(0, 3).forEach((f) => {
    l.push(...kn(f, a[f]));
  }), u.length > 3 && l.push(" ..."), l;
}
function kn(a, l, u) {
  return ie(l) ? (l = JSON.stringify(l), u ? l : [`${a}=${l}`]) : typeof l == "number" || typeof l == "boolean" || l == null ? u ? l : [`${a}=${l}`] : ce(l) ? (l = kn(a, Pt(l.value), !0), u ? l : [`${a}=Ref<`, l, ">"]) : St(l) ? [`${a}=fn${l.name ? `<${l.name}>` : ""}`] : (l = Pt(l), u ? l : [`${a}=`, l]);
}
const ur = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function Je(a, l, u, f) {
  try {
    return f ? a(...f) : a();
  } catch (v) {
    gs(v, l, u);
  }
}
function De(a, l, u, f) {
  if (St(a)) {
    const v = Je(a, l, u, f);
    return v && tr(v) && v.catch((w) => {
      gs(w, l, u);
    }), v;
  }
  if (vt(a)) {
    const v = [];
    for (let w = 0; w < a.length; w++)
      v.push(De(a[w], l, u, f));
    return v;
  } else process.env.NODE_ENV !== "production" && at(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof a}`
  );
}
function gs(a, l, u, f = !0) {
  const v = l ? l.vnode : null;
  if (l) {
    let w = l.parent;
    const P = l.proxy, _ = process.env.NODE_ENV !== "production" ? ur[u] : `https://vuejs.org/error-reference/#runtime-${u}`;
    for (; w; ) {
      const z = w.ec;
      if (z) {
        for (let D = 0; D < z.length; D++)
          if (z[D](a, P, _) === !1)
            return;
      }
      w = w.parent;
    }
    const T = l.appContext.config.errorHandler;
    if (T) {
      si(), Je(
        T,
        null,
        10,
        [a, P, _]
      ), ai();
      return;
    }
  }
  Zc(a, u, v, f);
}
function Zc(a, l, u, f = !0) {
  if (process.env.NODE_ENV !== "production") {
    const v = ur[l];
    if (u && Os(u), at(`Unhandled error${v ? ` during execution of ${v}` : ""}`), u && Ls(), f)
      throw a;
    console.error(a);
  } else
    console.error(a);
}
let ls = !1, Ia = !1;
const ge = [];
let He = 0;
const Gi = [];
let li = null, Pi = 0;
const An = /* @__PURE__ */ Promise.resolve();
let fr = null;
const Kc = 100;
function ra(a) {
  const l = fr || An;
  return a ? l.then(this ? a.bind(this) : a) : l;
}
function Jc(a) {
  let l = He + 1, u = ge.length;
  for (; l < u; ) {
    const f = l + u >>> 1, v = ge[f], w = cs(v);
    w < a || w === a && v.pre ? l = f + 1 : u = f;
  }
  return l;
}
function oa(a) {
  (!ge.length || !ge.includes(
    a,
    ls && a.allowRecurse ? He + 1 : He
  )) && (a.id == null ? ge.push(a) : ge.splice(Jc(a.id), 0, a), Sn());
}
function Sn() {
  !ls && !Ia && (Ia = !0, fr = An.then(Pn));
}
function Qc(a) {
  const l = ge.indexOf(a);
  l > He && ge.splice(l, 1);
}
function Cn(a) {
  vt(a) ? Gi.push(...a) : (!li || !li.includes(
    a,
    a.allowRecurse ? Pi + 1 : Pi
  )) && Gi.push(a), Sn();
}
function Jr(a, l, u = ls ? He + 1 : 0) {
  for (process.env.NODE_ENV !== "production" && (l = l || /* @__PURE__ */ new Map()); u < ge.length; u++) {
    const f = ge[u];
    if (f && f.pre) {
      if (a && f.id !== a.uid || process.env.NODE_ENV !== "production" && gr(l, f))
        continue;
      ge.splice(u, 1), u--, f();
    }
  }
}
function En(a) {
  if (Gi.length) {
    const l = [...new Set(Gi)].sort(
      (u, f) => cs(u) - cs(f)
    );
    if (Gi.length = 0, li) {
      li.push(...l);
      return;
    }
    for (li = l, process.env.NODE_ENV !== "production" && (a = a || /* @__PURE__ */ new Map()), Pi = 0; Pi < li.length; Pi++) {
      const u = li[Pi];
      process.env.NODE_ENV !== "production" && gr(a, u) || u.active !== !1 && u();
    }
    li = null, Pi = 0;
  }
}
const cs = (a) => a.id == null ? 1 / 0 : a.id, th = (a, l) => {
  const u = cs(a) - cs(l);
  if (u === 0) {
    if (a.pre && !l.pre) return -1;
    if (l.pre && !a.pre) return 1;
  }
  return u;
};
function Pn(a) {
  Ia = !1, ls = !0, process.env.NODE_ENV !== "production" && (a = a || /* @__PURE__ */ new Map()), ge.sort(th);
  const l = process.env.NODE_ENV !== "production" ? (u) => gr(a, u) : ee;
  try {
    for (He = 0; He < ge.length; He++) {
      const u = ge[He];
      if (u && u.active !== !1) {
        if (process.env.NODE_ENV !== "production" && l(u))
          continue;
        Je(u, null, 14);
      }
    }
  } finally {
    He = 0, ge.length = 0, En(a), ls = !1, fr = null, (ge.length || Gi.length) && Pn(a);
  }
}
function gr(a, l) {
  if (!a.has(l))
    a.set(l, 1);
  else {
    const u = a.get(l);
    if (u > Kc) {
      const f = l.ownerInstance, v = f && Pr(f.type);
      return gs(
        `Maximum recursive updates exceeded${v ? ` in component <${v}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      ), !0;
    } else
      a.set(l, u + 1);
  }
}
let Ti = !1;
const Ci = /* @__PURE__ */ new Set();
process.env.NODE_ENV !== "production" && (sr().__VUE_HMR_RUNTIME__ = {
  createRecord: ya(_n),
  rerender: ya(sh),
  reload: ya(ah)
});
const Fi = /* @__PURE__ */ new Map();
function eh(a) {
  const l = a.type.__hmrId;
  let u = Fi.get(l);
  u || (_n(l, a.type), u = Fi.get(l)), u.instances.add(a);
}
function ih(a) {
  Fi.get(a.type.__hmrId).instances.delete(a);
}
function _n(a, l) {
  return Fi.has(a) ? !1 : (Fi.set(a, {
    initialDef: ss(l),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function ss(a) {
  return ol(a) ? a.__vccOpts : a;
}
function sh(a, l) {
  const u = Fi.get(a);
  u && (u.initialDef.render = l, [...u.instances].forEach((f) => {
    l && (f.render = l, ss(f.type).render = l), f.renderCache = [], Ti = !0, f.effect.dirty = !0, f.update(), Ti = !1;
  }));
}
function ah(a, l) {
  const u = Fi.get(a);
  if (!u) return;
  l = ss(l), Qr(u.initialDef, l);
  const f = [...u.instances];
  for (const v of f) {
    const w = ss(v.type);
    Ci.has(w) || (w !== u.initialDef && Qr(w, l), Ci.add(w)), v.appContext.propsCache.delete(v.type), v.appContext.emitsCache.delete(v.type), v.appContext.optionsCache.delete(v.type), v.ceReload ? (Ci.add(w), v.ceReload(l.styles), Ci.delete(w)) : v.parent ? (v.parent.effect.dirty = !0, oa(() => {
      v.parent.update(), Ci.delete(w);
    })) : v.appContext.reload ? v.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    );
  }
  Cn(() => {
    for (const v of f)
      Ci.delete(
        ss(v.type)
      );
  });
}
function Qr(a, l) {
  $t(a, l);
  for (const u in a)
    u !== "__file" && !(u in l) && delete a[u];
}
function ya(a) {
  return (l, u) => {
    try {
      return a(l, u);
    } catch (f) {
      console.error(f), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Le, ts = [], Ta = !1;
function ps(a, ...l) {
  Le ? Le.emit(a, ...l) : Ta || ts.push({ event: a, args: l });
}
function pr(a, l) {
  var u, f;
  Le = a, Le ? (Le.enabled = !0, ts.forEach(({ event: v, args: w }) => Le.emit(v, ...w)), ts = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((f = (u = window.navigator) == null ? void 0 : u.userAgent) != null && f.includes("jsdom")) ? ((l.__VUE_DEVTOOLS_HOOK_REPLAY__ = l.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((w) => {
    pr(w, l);
  }), setTimeout(() => {
    Le || (l.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Ta = !0, ts = []);
  }, 3e3)) : (Ta = !0, ts = []);
}
function rh(a, l) {
  ps("app:init", a, l, {
    Fragment: Ye,
    Text: xs,
    Comment: Re,
    Static: Ds
  });
}
function oh(a) {
  ps("app:unmount", a);
}
const nh = /* @__PURE__ */ xr(
  "component:added"
  /* COMPONENT_ADDED */
), Nn = /* @__PURE__ */ xr(
  "component:updated"
  /* COMPONENT_UPDATED */
), lh = /* @__PURE__ */ xr(
  "component:removed"
  /* COMPONENT_REMOVED */
), ch = (a) => {
  Le && typeof Le.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Le.cleanupBuffer(a) && lh(a);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function xr(a) {
  return (l) => {
    ps(
      a,
      l.appContext.app,
      l.uid,
      l.parent ? l.parent.uid : void 0,
      l
    );
  };
}
const hh = /* @__PURE__ */ On(
  "perf:start"
  /* PERFORMANCE_START */
), dh = /* @__PURE__ */ On(
  "perf:end"
  /* PERFORMANCE_END */
);
function On(a) {
  return (l, u, f) => {
    ps(a, l.appContext.app, l.uid, l, u, f);
  };
}
function uh(a, l, u) {
  ps(
    "component:emit",
    a.appContext.app,
    a,
    l,
    u
  );
}
function fh(a, l, ...u) {
  if (a.isUnmounted) return;
  const f = a.vnode.props || Vt;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: D,
      propsOptions: [R]
    } = a;
    if (D)
      if (!(l in D))
        (!R || !(Si(l) in R)) && at(
          `Component emitted event "${l}" but it is neither declared in the emits option nor as an "${Si(l)}" prop.`
        );
      else {
        const V = D[l];
        St(V) && (V(...u) || at(
          `Invalid event arguments: event validation failed for event "${l}".`
        ));
      }
  }
  let v = u;
  const w = l.startsWith("update:"), P = w && l.slice(7);
  if (P && P in f) {
    const D = `${P === "modelValue" ? "model" : P}Modifiers`, { number: R, trim: V } = f[D] || Vt;
    V && (v = u.map(($) => ie($) ? $.trim() : $)), R && (v = u.map(ic));
  }
  if (process.env.NODE_ENV !== "production" && uh(a, l, v), process.env.NODE_ENV !== "production") {
    const D = l.toLowerCase();
    D !== l && f[Si(D)] && at(
      `Event "${D}" is emitted in component ${fa(
        a,
        a.type
      )} but the handler is registered for "${l}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${we(
        l
      )}" instead of "${l}".`
    );
  }
  let _, T = f[_ = Si(l)] || // also try camelCase event handler (#2249)
  f[_ = Si(ke(l))];
  !T && w && (T = f[_ = Si(we(l))]), T && De(
    T,
    a,
    6,
    v
  );
  const z = f[_ + "Once"];
  if (z) {
    if (!a.emitted)
      a.emitted = {};
    else if (a.emitted[_])
      return;
    a.emitted[_] = !0, De(
      z,
      a,
      6,
      v
    );
  }
}
function Ln(a, l, u = !1) {
  const f = l.emitsCache, v = f.get(a);
  if (v !== void 0)
    return v;
  const w = a.emits;
  let P = {}, _ = !1;
  if (!St(a)) {
    const T = (z) => {
      const D = Ln(z, l, !0);
      D && (_ = !0, $t(P, D));
    };
    !u && l.mixins.length && l.mixins.forEach(T), a.extends && T(a.extends), a.mixins && a.mixins.forEach(T);
  }
  return !w && !_ ? (Bt(a) && f.set(a, null), null) : (vt(w) ? w.forEach((T) => P[T] = null) : $t(P, w), Bt(a) && f.set(a, P), P);
}
function na(a, l) {
  return !a || !us(l) ? !1 : (l = l.slice(2).replace(/Once$/, ""), Rt(a, l[0].toLowerCase() + l.slice(1)) || Rt(a, we(l)) || Rt(a, l));
}
let ve = null, In = null;
function Bs(a) {
  const l = ve;
  return ve = a, In = a && a.type.__scopeId || null, l;
}
function gh(a, l = ve, u) {
  if (!l || a._n)
    return a;
  const f = (...v) => {
    f._d && go(-1);
    const w = Bs(l);
    let P;
    try {
      P = a(...v);
    } finally {
      Bs(w), f._d && go(1);
    }
    return process.env.NODE_ENV !== "production" && Nn(l), P;
  };
  return f._n = !0, f._c = !0, f._d = !0, f;
}
let Ma = !1;
function Gs() {
  Ma = !0;
}
function wa(a) {
  const {
    type: l,
    vnode: u,
    proxy: f,
    withProxy: v,
    propsOptions: [w],
    slots: P,
    attrs: _,
    emit: T,
    render: z,
    renderCache: D,
    props: R,
    data: V,
    setupState: $,
    ctx: it,
    inheritAttrs: lt
  } = a, Lt = Bs(a);
  let ut, F;
  process.env.NODE_ENV !== "production" && (Ma = !1);
  try {
    if (u.shapeFlag & 4) {
      const B = v || f, _t = process.env.NODE_ENV !== "production" && $.__isScriptSetup ? new Proxy(B, {
        get(yt, Jt, Ut) {
          return at(
            `Property '${String(
              Jt
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(yt, Jt, Ut);
        }
      }) : B;
      ut = Oe(
        z.call(
          _t,
          B,
          D,
          process.env.NODE_ENV !== "production" ? Ve(R) : R,
          $,
          V,
          it
        )
      ), F = _;
    } else {
      const B = l;
      process.env.NODE_ENV !== "production" && _ === R && Gs(), ut = Oe(
        B.length > 1 ? B(
          process.env.NODE_ENV !== "production" ? Ve(R) : R,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Gs(), Ve(_);
            },
            slots: P,
            emit: T
          } : { attrs: _, slots: P, emit: T }
        ) : B(
          process.env.NODE_ENV !== "production" ? Ve(R) : R,
          null
        )
      ), F = l.props ? _ : ph(_);
    }
  } catch (B) {
    rs.length = 0, gs(B, a, 1), ut = xe(Re);
  }
  let mt = ut, pt;
  if (process.env.NODE_ENV !== "production" && ut.patchFlag > 0 && ut.patchFlag & 2048 && ([mt, pt] = Tn(ut)), F && lt !== !1) {
    const B = Object.keys(F), { shapeFlag: _t } = mt;
    if (B.length) {
      if (_t & 7)
        w && B.some(Hs) && (F = xh(
          F,
          w
        )), mt = bi(mt, F, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !Ma && mt.type !== Re) {
        const yt = Object.keys(_), Jt = [], Ut = [];
        for (let se = 0, gt = yt.length; se < gt; se++) {
          const wt = yt[se];
          us(wt) ? Hs(wt) || Jt.push(wt[2].toLowerCase() + wt.slice(3)) : Ut.push(wt);
        }
        Ut.length && at(
          `Extraneous non-props attributes (${Ut.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes.`
        ), Jt.length && at(
          `Extraneous non-emits event listeners (${Jt.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return u.dirs && (process.env.NODE_ENV !== "production" && !to(mt) && at(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), mt = bi(mt, null, !1, !0), mt.dirs = mt.dirs ? mt.dirs.concat(u.dirs) : u.dirs), u.transition && (process.env.NODE_ENV !== "production" && !to(mt) && at(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), mt.transition = u.transition), process.env.NODE_ENV !== "production" && pt ? pt(mt) : ut = mt, Bs(Lt), ut;
}
const Tn = (a) => {
  const l = a.children, u = a.dynamicChildren, f = mr(l, !1);
  if (f) {
    if (process.env.NODE_ENV !== "production" && f.patchFlag > 0 && f.patchFlag & 2048)
      return Tn(f);
  } else return [a, void 0];
  const v = l.indexOf(f), w = u ? u.indexOf(f) : -1, P = (_) => {
    l[v] = _, u && (w > -1 ? u[w] = _ : _.patchFlag > 0 && (a.dynamicChildren = [...u, _]));
  };
  return [Oe(f), P];
};
function mr(a, l = !0) {
  let u;
  for (let f = 0; f < a.length; f++) {
    const v = a[f];
    if (ds(v)) {
      if (v.type !== Re || v.children === "v-if") {
        if (u)
          return;
        if (u = v, process.env.NODE_ENV !== "production" && l && u.patchFlag > 0 && u.patchFlag & 2048)
          return mr(u.children);
      }
    } else
      return;
  }
  return u;
}
const ph = (a) => {
  let l;
  for (const u in a)
    (u === "class" || u === "style" || us(u)) && ((l || (l = {}))[u] = a[u]);
  return l;
}, xh = (a, l) => {
  const u = {};
  for (const f in a)
    (!Hs(f) || !(f.slice(9) in l)) && (u[f] = a[f]);
  return u;
}, to = (a) => a.shapeFlag & 7 || a.type === Re;
function mh(a, l, u) {
  const { props: f, children: v, component: w } = a, { props: P, children: _, patchFlag: T } = l, z = w.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (v || _) && Ti || l.dirs || l.transition)
    return !0;
  if (u && T >= 0) {
    if (T & 1024)
      return !0;
    if (T & 16)
      return f ? eo(f, P, z) : !!P;
    if (T & 8) {
      const D = l.dynamicProps;
      for (let R = 0; R < D.length; R++) {
        const V = D[R];
        if (P[V] !== f[V] && !na(z, V))
          return !0;
      }
    }
  } else
    return (v || _) && (!_ || !_.$stable) ? !0 : f === P ? !1 : f ? P ? eo(f, P, z) : !0 : !!P;
  return !1;
}
function eo(a, l, u) {
  const f = Object.keys(l);
  if (f.length !== Object.keys(a).length)
    return !0;
  for (let v = 0; v < f.length; v++) {
    const w = f[v];
    if (l[w] !== a[w] && !na(u, w))
      return !0;
  }
  return !1;
}
function bh({ vnode: a, parent: l }, u) {
  for (; l; ) {
    const f = l.subTree;
    if (f.suspense && f.suspense.activeBranch === a && (f.el = a.el), f === a)
      (a = l.vnode).el = u, l = l.parent;
    else
      break;
  }
}
const vh = "components";
function yh(a, l) {
  return kh(vh, a, !0, l) || a;
}
const wh = Symbol.for("v-ndc");
function kh(a, l, u = !0, f = !1) {
  const v = ve || ae;
  if (v) {
    const w = v.type;
    {
      const _ = Pr(
        w,
        !1
      );
      if (_ && (_ === l || _ === ke(l) || _ === Ri(ke(l))))
        return w;
    }
    const P = (
      // local registration
      // check instance[type] first which is resolved for options API
      io(v[a] || w[a], l) || // global registration
      io(v.appContext[a], l)
    );
    return !P && f ? w : (process.env.NODE_ENV !== "production" && u && !P && at(`Failed to resolve ${a.slice(0, -1)}: ${l}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), P);
  } else process.env.NODE_ENV !== "production" && at(
    `resolve${Ri(a.slice(0, -1))} can only be used in render() or setup().`
  );
}
function io(a, l) {
  return a && (a[l] || a[ke(l)] || a[Ri(ke(l))]);
}
const Ah = (a) => a.__isSuspense;
function Sh(a, l) {
  l && l.pendingBranch ? vt(a) ? l.effects.push(...a) : l.effects.push(a) : Cn(a);
}
function la(a, l, u = ae, f = !1) {
  if (u) {
    const v = u[a] || (u[a] = []), w = l.__weh || (l.__weh = (...P) => {
      si();
      const _ = ms(u), T = De(l, u, a, P);
      return _(), ai(), T;
    });
    return f ? v.unshift(w) : v.push(w), w;
  } else if (process.env.NODE_ENV !== "production") {
    const v = Si(ur[a].replace(/ hook$/, ""));
    at(
      `${v} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const ri = (a) => (l, u = ae) => {
  (!ua || a === "sp") && la(a, (...f) => l(...f), u);
}, Mn = ri("bm"), br = ri("m"), Ch = ri("bu"), Eh = ri("u"), Dn = ri("bum"), Rn = ri("um"), Ph = ri("sp"), _h = ri(
  "rtg"
), Nh = ri(
  "rtc"
);
function Oh(a, l = ae) {
  la("ec", a, l);
}
function zn(a) {
  Ql(a) && at("Do not use built-in directive ids as custom directive id: " + a);
}
function ki(a, l, u, f) {
  const v = a.dirs, w = l && l.dirs;
  for (let P = 0; P < v.length; P++) {
    const _ = v[P];
    w && (_.oldValue = w[P].value);
    let T = _.dir[f];
    T && (si(), De(T, u, 8, [
      a.el,
      _,
      a,
      l
    ]), ai());
  }
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ca(a, l) {
  return St(a) ? (
    // #8326: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    $t({ name: a.name }, l, { setup: a })
  ) : a;
}
const Is = (a) => !!a.type.__asyncLoader, Da = (a) => a ? al(a) ? Er(a) : Da(a.parent) : null, Mi = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ $t(/* @__PURE__ */ Object.create(null), {
    $: (a) => a,
    $el: (a) => a.vnode.el,
    $data: (a) => a.data,
    $props: (a) => process.env.NODE_ENV !== "production" ? Ve(a.props) : a.props,
    $attrs: (a) => process.env.NODE_ENV !== "production" ? Ve(a.attrs) : a.attrs,
    $slots: (a) => process.env.NODE_ENV !== "production" ? Ve(a.slots) : a.slots,
    $refs: (a) => process.env.NODE_ENV !== "production" ? Ve(a.refs) : a.refs,
    $parent: (a) => Da(a.parent),
    $root: (a) => Da(a.root),
    $emit: (a) => a.emit,
    $options: (a) => yr(a),
    $forceUpdate: (a) => a.f || (a.f = () => {
      a.effect.dirty = !0, oa(a.update);
    }),
    $nextTick: (a) => a.n || (a.n = ra.bind(a.proxy)),
    $watch: (a) => nd.bind(a)
  })
), vr = (a) => a === "_" || a === "$", ka = (a, l) => a !== Vt && !a.__isScriptSetup && Rt(a, l), Fn = {
  get({ _: a }, l) {
    if (l === "__v_skip")
      return !0;
    const { ctx: u, setupState: f, data: v, props: w, accessCache: P, type: _, appContext: T } = a;
    if (process.env.NODE_ENV !== "production" && l === "__isVue")
      return !0;
    let z;
    if (l[0] !== "$") {
      const $ = P[l];
      if ($ !== void 0)
        switch ($) {
          case 1:
            return f[l];
          case 2:
            return v[l];
          case 4:
            return u[l];
          case 3:
            return w[l];
        }
      else {
        if (ka(f, l))
          return P[l] = 1, f[l];
        if (v !== Vt && Rt(v, l))
          return P[l] = 2, v[l];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (z = a.propsOptions[0]) && Rt(z, l)
        )
          return P[l] = 3, w[l];
        if (u !== Vt && Rt(u, l))
          return P[l] = 4, u[l];
        Ra && (P[l] = 0);
      }
    }
    const D = Mi[l];
    let R, V;
    if (D)
      return l === "$attrs" ? (de(a.attrs, "get", ""), process.env.NODE_ENV !== "production" && Gs()) : process.env.NODE_ENV !== "production" && l === "$slots" && de(a, "get", l), D(a);
    if (
      // css module (injected by vue-loader)
      (R = _.__cssModules) && (R = R[l])
    )
      return R;
    if (u !== Vt && Rt(u, l))
      return P[l] = 4, u[l];
    if (
      // global properties
      V = T.config.globalProperties, Rt(V, l)
    )
      return V[l];
    process.env.NODE_ENV !== "production" && ve && (!ie(l) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    l.indexOf("__v") !== 0) && (v !== Vt && vr(l[0]) && Rt(v, l) ? at(
      `Property ${JSON.stringify(
        l
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : a === ve && at(
      `Property ${JSON.stringify(l)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: a }, l, u) {
    const { data: f, setupState: v, ctx: w } = a;
    return ka(v, l) ? (v[l] = u, !0) : process.env.NODE_ENV !== "production" && v.__isScriptSetup && Rt(v, l) ? (at(`Cannot mutate <script setup> binding "${l}" from Options API.`), !1) : f !== Vt && Rt(f, l) ? (f[l] = u, !0) : Rt(a.props, l) ? (process.env.NODE_ENV !== "production" && at(`Attempting to mutate prop "${l}". Props are readonly.`), !1) : l[0] === "$" && l.slice(1) in a ? (process.env.NODE_ENV !== "production" && at(
      `Attempting to mutate public property "${l}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && l in a.appContext.config.globalProperties ? Object.defineProperty(w, l, {
      enumerable: !0,
      configurable: !0,
      value: u
    }) : w[l] = u, !0);
  },
  has({
    _: { data: a, setupState: l, accessCache: u, ctx: f, appContext: v, propsOptions: w }
  }, P) {
    let _;
    return !!u[P] || a !== Vt && Rt(a, P) || ka(l, P) || (_ = w[0]) && Rt(_, P) || Rt(f, P) || Rt(Mi, P) || Rt(v.config.globalProperties, P);
  },
  defineProperty(a, l, u) {
    return u.get != null ? a._.accessCache[l] = 0 : Rt(u, "value") && this.set(a, l, u.value, null), Reflect.defineProperty(a, l, u);
  }
};
process.env.NODE_ENV !== "production" && (Fn.ownKeys = (a) => (at(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(a)));
function Lh(a) {
  const l = {};
  return Object.defineProperty(l, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => a
  }), Object.keys(Mi).forEach((u) => {
    Object.defineProperty(l, u, {
      configurable: !0,
      enumerable: !1,
      get: () => Mi[u](a),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ee
    });
  }), l;
}
function Ih(a) {
  const {
    ctx: l,
    propsOptions: [u]
  } = a;
  u && Object.keys(u).forEach((f) => {
    Object.defineProperty(l, f, {
      enumerable: !0,
      configurable: !0,
      get: () => a.props[f],
      set: ee
    });
  });
}
function Th(a) {
  const { ctx: l, setupState: u } = a;
  Object.keys(Pt(u)).forEach((f) => {
    if (!u.__isScriptSetup) {
      if (vr(f[0])) {
        at(
          `setup() return property ${JSON.stringify(
            f
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(l, f, {
        enumerable: !0,
        configurable: !0,
        get: () => u[f],
        set: ee
      });
    }
  });
}
function so(a) {
  return vt(a) ? a.reduce(
    (l, u) => (l[u] = null, l),
    {}
  ) : a;
}
function Mh() {
  const a = /* @__PURE__ */ Object.create(null);
  return (l, u) => {
    a[u] ? at(`${l} property "${u}" is already defined in ${a[u]}.`) : a[u] = l;
  };
}
let Ra = !0;
function Dh(a) {
  const l = yr(a), u = a.proxy, f = a.ctx;
  Ra = !1, l.beforeCreate && ao(l.beforeCreate, a, "bc");
  const {
    // state
    data: v,
    computed: w,
    methods: P,
    watch: _,
    provide: T,
    inject: z,
    // lifecycle
    created: D,
    beforeMount: R,
    mounted: V,
    beforeUpdate: $,
    updated: it,
    activated: lt,
    deactivated: Lt,
    beforeDestroy: ut,
    beforeUnmount: F,
    destroyed: mt,
    unmounted: pt,
    render: B,
    renderTracked: _t,
    renderTriggered: yt,
    errorCaptured: Jt,
    serverPrefetch: Ut,
    // public API
    expose: se,
    inheritAttrs: gt,
    // assets
    components: wt,
    directives: Zt,
    filters: Mt
  } = l, qt = process.env.NODE_ENV !== "production" ? Mh() : null;
  if (process.env.NODE_ENV !== "production") {
    const [At] = a.propsOptions;
    if (At)
      for (const kt in At)
        qt("Props", kt);
  }
  if (z && Rh(z, f, qt), P)
    for (const At in P) {
      const kt = P[At];
      St(kt) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(f, At, {
        value: kt.bind(u),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : f[At] = kt.bind(u), process.env.NODE_ENV !== "production" && qt("Methods", At)) : process.env.NODE_ENV !== "production" && at(
        `Method "${At}" has type "${typeof kt}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (v) {
    process.env.NODE_ENV !== "production" && !St(v) && at(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const At = v.call(u, u);
    if (process.env.NODE_ENV !== "production" && tr(At) && at(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !Bt(At))
      process.env.NODE_ENV !== "production" && at("data() should return an object.");
    else if (a.data = sa(At), process.env.NODE_ENV !== "production")
      for (const kt in At)
        qt("Data", kt), vr(kt[0]) || Object.defineProperty(f, kt, {
          configurable: !0,
          enumerable: !0,
          get: () => At[kt],
          set: ee
        });
  }
  if (Ra = !0, w)
    for (const At in w) {
      const kt = w[At], re = St(kt) ? kt.bind(u, u) : St(kt.get) ? kt.get.bind(u, u) : ee;
      process.env.NODE_ENV !== "production" && re === ee && at(`Computed property "${At}" has no getter.`);
      const ze = !St(kt) && St(kt.set) ? kt.set.bind(u) : process.env.NODE_ENV !== "production" ? () => {
        at(
          `Write operation failed: computed property "${At}" is readonly.`
        );
      } : ee, Fe = Te({
        get: re,
        set: ze
      });
      Object.defineProperty(f, At, {
        enumerable: !0,
        configurable: !0,
        get: () => Fe.value,
        set: (Kt) => Fe.value = Kt
      }), process.env.NODE_ENV !== "production" && qt("Computed", At);
    }
  if (_)
    for (const At in _)
      Xn(_[At], f, u, At);
  if (T) {
    const At = St(T) ? T.call(u) : T;
    Reflect.ownKeys(At).forEach((kt) => {
      Ts(kt, At[kt]);
    });
  }
  D && ao(D, a, "c");
  function Gt(At, kt) {
    vt(kt) ? kt.forEach((re) => At(re.bind(u))) : kt && At(kt.bind(u));
  }
  if (Gt(Mn, R), Gt(br, V), Gt(Ch, $), Gt(Eh, it), Gt(ld, lt), Gt(cd, Lt), Gt(Oh, Jt), Gt(Nh, _t), Gt(_h, yt), Gt(Dn, F), Gt(Rn, pt), Gt(Ph, Ut), vt(se))
    if (se.length) {
      const At = a.exposed || (a.exposed = {});
      se.forEach((kt) => {
        Object.defineProperty(At, kt, {
          get: () => u[kt],
          set: (re) => u[kt] = re
        });
      });
    } else a.exposed || (a.exposed = {});
  B && a.render === ee && (a.render = B), gt != null && (a.inheritAttrs = gt), wt && (a.components = wt), Zt && (a.directives = Zt);
}
function Rh(a, l, u = ee) {
  vt(a) && (a = za(a));
  for (const f in a) {
    const v = a[f];
    let w;
    Bt(v) ? "default" in v ? w = Qe(
      v.from || f,
      v.default,
      !0
    ) : w = Qe(v.from || f) : w = Qe(v), ce(w) ? Object.defineProperty(l, f, {
      enumerable: !0,
      configurable: !0,
      get: () => w.value,
      set: (P) => w.value = P
    }) : l[f] = w, process.env.NODE_ENV !== "production" && u("Inject", f);
  }
}
function ao(a, l, u) {
  De(
    vt(a) ? a.map((f) => f.bind(l.proxy)) : a.bind(l.proxy),
    l,
    u
  );
}
function Xn(a, l, u, f) {
  const v = f.includes(".") ? Kn(u, f) : () => u[f];
  if (ie(a)) {
    const w = l[a];
    St(w) ? Ie(v, w) : process.env.NODE_ENV !== "production" && at(`Invalid watch handler specified by key "${a}"`, w);
  } else if (St(a))
    Ie(v, a.bind(u));
  else if (Bt(a))
    if (vt(a))
      a.forEach((w) => Xn(w, l, u, f));
    else {
      const w = St(a.handler) ? a.handler.bind(u) : l[a.handler];
      St(w) ? Ie(v, w, a) : process.env.NODE_ENV !== "production" && at(`Invalid watch handler specified by key "${a.handler}"`, w);
    }
  else process.env.NODE_ENV !== "production" && at(`Invalid watch option: "${f}"`, a);
}
function yr(a) {
  const l = a.type, { mixins: u, extends: f } = l, {
    mixins: v,
    optionsCache: w,
    config: { optionMergeStrategies: P }
  } = a.appContext, _ = w.get(l);
  let T;
  return _ ? T = _ : !v.length && !u && !f ? T = l : (T = {}, v.length && v.forEach(
    (z) => js(T, z, P, !0)
  ), js(T, l, P)), Bt(l) && w.set(l, T), T;
}
function js(a, l, u, f = !1) {
  const { mixins: v, extends: w } = l;
  w && js(a, w, u, !0), v && v.forEach(
    (P) => js(a, P, u, !0)
  );
  for (const P in l)
    if (f && P === "expose")
      process.env.NODE_ENV !== "production" && at(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const _ = zh[P] || u && u[P];
      a[P] = _ ? _(a[P], l[P]) : l[P];
    }
  return a;
}
const zh = {
  data: ro,
  props: oo,
  emits: oo,
  // objects
  methods: es,
  computed: es,
  // lifecycle
  beforeCreate: pe,
  created: pe,
  beforeMount: pe,
  mounted: pe,
  beforeUpdate: pe,
  updated: pe,
  beforeDestroy: pe,
  beforeUnmount: pe,
  destroyed: pe,
  unmounted: pe,
  activated: pe,
  deactivated: pe,
  errorCaptured: pe,
  serverPrefetch: pe,
  // assets
  components: es,
  directives: es,
  // watch
  watch: Xh,
  // provide / inject
  provide: ro,
  inject: Fh
};
function ro(a, l) {
  return l ? a ? function() {
    return $t(
      St(a) ? a.call(this, this) : a,
      St(l) ? l.call(this, this) : l
    );
  } : l : a;
}
function Fh(a, l) {
  return es(za(a), za(l));
}
function za(a) {
  if (vt(a)) {
    const l = {};
    for (let u = 0; u < a.length; u++)
      l[a[u]] = a[u];
    return l;
  }
  return a;
}
function pe(a, l) {
  return a ? [...new Set([].concat(a, l))] : l;
}
function es(a, l) {
  return a ? $t(/* @__PURE__ */ Object.create(null), a, l) : l;
}
function oo(a, l) {
  return a ? vt(a) && vt(l) ? [.../* @__PURE__ */ new Set([...a, ...l])] : $t(
    /* @__PURE__ */ Object.create(null),
    so(a),
    so(l ?? {})
  ) : l;
}
function Xh(a, l) {
  if (!a) return l;
  if (!l) return a;
  const u = $t(/* @__PURE__ */ Object.create(null), a);
  for (const f in l)
    u[f] = pe(a[f], l[f]);
  return u;
}
function Yn() {
  return {
    app: null,
    config: {
      isNativeTag: Ul,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Yh = 0;
function Hh(a, l) {
  return function(f, v = null) {
    St(f) || (f = $t({}, f)), v != null && !Bt(v) && (process.env.NODE_ENV !== "production" && at("root props passed to app.mount() must be an object."), v = null);
    const w = Yn(), P = /* @__PURE__ */ new WeakSet();
    let _ = !1;
    const T = w.app = {
      _uid: Yh++,
      _component: f,
      _props: v,
      _container: null,
      _context: w,
      _instance: null,
      version: bo,
      get config() {
        return w.config;
      },
      set config(z) {
        process.env.NODE_ENV !== "production" && at(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(z, ...D) {
        return P.has(z) ? process.env.NODE_ENV !== "production" && at("Plugin has already been applied to target app.") : z && St(z.install) ? (P.add(z), z.install(T, ...D)) : St(z) ? (P.add(z), z(T, ...D)) : process.env.NODE_ENV !== "production" && at(
          'A plugin must either be a function or an object with an "install" function.'
        ), T;
      },
      mixin(z) {
        return w.mixins.includes(z) ? process.env.NODE_ENV !== "production" && at(
          "Mixin has already been applied to target app" + (z.name ? `: ${z.name}` : "")
        ) : w.mixins.push(z), T;
      },
      component(z, D) {
        return process.env.NODE_ENV !== "production" && Va(z, w.config), D ? (process.env.NODE_ENV !== "production" && w.components[z] && at(`Component "${z}" has already been registered in target app.`), w.components[z] = D, T) : w.components[z];
      },
      directive(z, D) {
        return process.env.NODE_ENV !== "production" && zn(z), D ? (process.env.NODE_ENV !== "production" && w.directives[z] && at(`Directive "${z}" has already been registered in target app.`), w.directives[z] = D, T) : w.directives[z];
      },
      mount(z, D, R) {
        if (_)
          process.env.NODE_ENV !== "production" && at(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && z.__vue_app__ && at(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const V = xe(f, v);
          return V.appContext = w, R === !0 ? R = "svg" : R === !1 && (R = void 0), process.env.NODE_ENV !== "production" && (w.reload = () => {
            a(
              bi(V),
              z,
              R
            );
          }), D && l ? l(V, z) : a(V, z, R), _ = !0, T._container = z, z.__vue_app__ = T, process.env.NODE_ENV !== "production" && (T._instance = V.component, rh(T, bo)), Er(V.component);
        }
      },
      unmount() {
        _ ? (a(null, T._container), process.env.NODE_ENV !== "production" && (T._instance = null, oh(T)), delete T._container.__vue_app__) : process.env.NODE_ENV !== "production" && at("Cannot unmount an app that is not mounted.");
      },
      provide(z, D) {
        return process.env.NODE_ENV !== "production" && z in w.provides && at(
          `App already provides property with key "${String(z)}". It will be overwritten with the new value.`
        ), w.provides[z] = D, T;
      },
      runWithContext(z) {
        const D = as;
        as = T;
        try {
          return z();
        } finally {
          as = D;
        }
      }
    };
    return T;
  };
}
let as = null;
function Ts(a, l) {
  if (!ae)
    process.env.NODE_ENV !== "production" && at("provide() can only be used inside setup().");
  else {
    let u = ae.provides;
    const f = ae.parent && ae.parent.provides;
    f === u && (u = ae.provides = Object.create(f)), u[a] = l;
  }
}
function Qe(a, l, u = !1) {
  const f = ae || ve;
  if (f || as) {
    const v = f ? f.parent == null ? f.vnode.appContext && f.vnode.appContext.provides : f.parent.provides : as._context.provides;
    if (v && a in v)
      return v[a];
    if (arguments.length > 1)
      return u && St(l) ? l.call(f && f.proxy) : l;
    process.env.NODE_ENV !== "production" && at(`injection "${String(a)}" not found.`);
  } else process.env.NODE_ENV !== "production" && at("inject() can only be used inside setup() or functional components.");
}
const Hn = {}, Vn = () => Object.create(Hn), Wn = (a) => Object.getPrototypeOf(a) === Hn;
function Vh(a, l, u, f = !1) {
  const v = {}, w = Vn();
  a.propsDefaults = /* @__PURE__ */ Object.create(null), Bn(a, l, v, w);
  for (const P in a.propsOptions[0])
    P in v || (v[P] = void 0);
  process.env.NODE_ENV !== "production" && jn(l || {}, v, a), u ? a.props = f ? v : xn(v) : a.type.props ? a.props = v : a.props = w, a.attrs = w;
}
function Wh(a) {
  for (; a; ) {
    if (a.type.__hmrId) return !0;
    a = a.parent;
  }
}
function Bh(a, l, u, f) {
  const {
    props: v,
    attrs: w,
    vnode: { patchFlag: P }
  } = a, _ = Pt(v), [T] = a.propsOptions;
  let z = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Wh(a)) && (f || P > 0) && !(P & 16)
  ) {
    if (P & 8) {
      const D = a.vnode.dynamicProps;
      for (let R = 0; R < D.length; R++) {
        let V = D[R];
        if (na(a.emitsOptions, V))
          continue;
        const $ = l[V];
        if (T)
          if (Rt(w, V))
            $ !== w[V] && (w[V] = $, z = !0);
          else {
            const it = ke(V);
            v[it] = Fa(
              T,
              _,
              it,
              $,
              a,
              !1
            );
          }
        else
          $ !== w[V] && (w[V] = $, z = !0);
      }
    }
  } else {
    Bn(a, l, v, w) && (z = !0);
    let D;
    for (const R in _)
      (!l || // for camelCase
      !Rt(l, R) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((D = we(R)) === R || !Rt(l, D))) && (T ? u && // for camelCase
      (u[R] !== void 0 || // for kebab-case
      u[D] !== void 0) && (v[R] = Fa(
        T,
        _,
        R,
        void 0,
        a,
        !0
      )) : delete v[R]);
    if (w !== _)
      for (const R in w)
        (!l || !Rt(l, R)) && (delete w[R], z = !0);
  }
  z && We(a.attrs, "set", ""), process.env.NODE_ENV !== "production" && jn(l || {}, v, a);
}
function Bn(a, l, u, f) {
  const [v, w] = a.propsOptions;
  let P = !1, _;
  if (l)
    for (let T in l) {
      if (is(T))
        continue;
      const z = l[T];
      let D;
      v && Rt(v, D = ke(T)) ? !w || !w.includes(D) ? u[D] = z : (_ || (_ = {}))[D] = z : na(a.emitsOptions, T) || (!(T in f) || z !== f[T]) && (f[T] = z, P = !0);
    }
  if (w) {
    const T = Pt(u), z = _ || Vt;
    for (let D = 0; D < w.length; D++) {
      const R = w[D];
      u[R] = Fa(
        v,
        T,
        R,
        z[R],
        a,
        !Rt(z, R)
      );
    }
  }
  return P;
}
function Fa(a, l, u, f, v, w) {
  const P = a[u];
  if (P != null) {
    const _ = Rt(P, "default");
    if (_ && f === void 0) {
      const T = P.default;
      if (P.type !== Function && !P.skipFactory && St(T)) {
        const { propsDefaults: z } = v;
        if (u in z)
          f = z[u];
        else {
          const D = ms(v);
          f = z[u] = T.call(
            null,
            l
          ), D();
        }
      } else
        f = T;
    }
    P[
      0
      /* shouldCast */
    ] && (w && !_ ? f = !1 : P[
      1
      /* shouldCastTrue */
    ] && (f === "" || f === we(u)) && (f = !0));
  }
  return f;
}
function Gn(a, l, u = !1) {
  const f = l.propsCache, v = f.get(a);
  if (v)
    return v;
  const w = a.props, P = {}, _ = [];
  let T = !1;
  if (!St(a)) {
    const D = (R) => {
      T = !0;
      const [V, $] = Gn(R, l, !0);
      $t(P, V), $ && _.push(...$);
    };
    !u && l.mixins.length && l.mixins.forEach(D), a.extends && D(a.extends), a.mixins && a.mixins.forEach(D);
  }
  if (!w && !T)
    return Bt(a) && f.set(a, Vi), Vi;
  if (vt(w))
    for (let D = 0; D < w.length; D++) {
      process.env.NODE_ENV !== "production" && !ie(w[D]) && at("props must be strings when using array syntax.", w[D]);
      const R = ke(w[D]);
      no(R) && (P[R] = Vt);
    }
  else if (w) {
    process.env.NODE_ENV !== "production" && !Bt(w) && at("invalid props options", w);
    for (const D in w) {
      const R = ke(D);
      if (no(R)) {
        const V = w[D], $ = P[R] = vt(V) || St(V) ? { type: V } : $t({}, V);
        if ($) {
          const it = co(Boolean, $.type), lt = co(String, $.type);
          $[
            0
            /* shouldCast */
          ] = it > -1, $[
            1
            /* shouldCastTrue */
          ] = lt < 0 || it < lt, (it > -1 || Rt($, "default")) && _.push(R);
        }
      }
    }
  }
  const z = [P, _];
  return Bt(a) && f.set(a, z), z;
}
function no(a) {
  return a[0] !== "$" && !is(a) ? !0 : (process.env.NODE_ENV !== "production" && at(`Invalid prop name: "${a}" is a reserved property.`), !1);
}
function Xa(a) {
  return a === null ? "null" : typeof a == "function" ? a.name || "" : typeof a == "object" && a.constructor && a.constructor.name || "";
}
function lo(a, l) {
  return Xa(a) === Xa(l);
}
function co(a, l) {
  return vt(l) ? l.findIndex((u) => lo(u, a)) : St(l) && lo(l, a) ? 0 : -1;
}
function jn(a, l, u) {
  const f = Pt(l), v = u.propsOptions[0];
  for (const w in v) {
    let P = v[w];
    P != null && Gh(
      w,
      f[w],
      P,
      process.env.NODE_ENV !== "production" ? Ve(f) : f,
      !Rt(a, w) && !Rt(a, we(w))
    );
  }
}
function Gh(a, l, u, f, v) {
  const { type: w, required: P, validator: _, skipCheck: T } = u;
  if (P && v) {
    at('Missing required prop: "' + a + '"');
    return;
  }
  if (!(l == null && !P)) {
    if (w != null && w !== !0 && !T) {
      let z = !1;
      const D = vt(w) ? w : [w], R = [];
      for (let V = 0; V < D.length && !z; V++) {
        const { valid: $, expectedType: it } = $h(l, D[V]);
        R.push(it || ""), z = $;
      }
      if (!z) {
        at(Uh(a, l, R));
        return;
      }
    }
    _ && !_(l, f) && at('Invalid prop: custom validator check failed for prop "' + a + '".');
  }
}
const jh = /* @__PURE__ */ ii(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function $h(a, l) {
  let u;
  const f = Xa(l);
  if (jh(f)) {
    const v = typeof a;
    u = v === f.toLowerCase(), !u && v === "object" && (u = a instanceof l);
  } else f === "Object" ? u = Bt(a) : f === "Array" ? u = vt(a) : f === "null" ? u = a === null : u = a instanceof l;
  return {
    valid: u,
    expectedType: f
  };
}
function Uh(a, l, u) {
  if (u.length === 0)
    return `Prop type [] for prop "${a}" won't match anything. Did you mean to use type Array instead?`;
  let f = `Invalid prop: type check failed for prop "${a}". Expected ${u.map(Ri).join(" | ")}`;
  const v = u[0], w = er(l), P = ho(l, v), _ = ho(l, w);
  return u.length === 1 && uo(v) && !qh(v, w) && (f += ` with value ${P}`), f += `, got ${w} `, uo(w) && (f += `with value ${_}.`), f;
}
function ho(a, l) {
  return l === "String" ? `"${a}"` : l === "Number" ? `${Number(a)}` : `${a}`;
}
function uo(a) {
  return ["string", "number", "boolean"].some((u) => a.toLowerCase() === u);
}
function qh(...a) {
  return a.some((l) => l.toLowerCase() === "boolean");
}
const $n = (a) => a[0] === "_" || a === "$stable", wr = (a) => vt(a) ? a.map(Oe) : [Oe(a)], Zh = (a, l, u) => {
  if (l._n)
    return l;
  const f = gh((...v) => (process.env.NODE_ENV !== "production" && ae && (!u || u.root === ae.root) && at(
    `Slot "${a}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), wr(l(...v))), u);
  return f._c = !1, f;
}, Un = (a, l, u) => {
  const f = a._ctx;
  for (const v in a) {
    if ($n(v)) continue;
    const w = a[v];
    if (St(w))
      l[v] = Zh(v, w, f);
    else if (w != null) {
      process.env.NODE_ENV !== "production" && at(
        `Non-function value encountered for slot "${v}". Prefer function slots for better performance.`
      );
      const P = wr(w);
      l[v] = () => P;
    }
  }
}, qn = (a, l) => {
  process.env.NODE_ENV !== "production" && !Ar(a.vnode) && at(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const u = wr(l);
  a.slots.default = () => u;
}, Kh = (a, l) => {
  const u = a.slots = Vn();
  if (a.vnode.shapeFlag & 32) {
    const f = l._;
    f ? ($t(u, l), Jo(u, "_", f, !0)) : Un(l, u);
  } else l && qn(a, l);
}, Jh = (a, l, u) => {
  const { vnode: f, slots: v } = a;
  let w = !0, P = Vt;
  if (f.shapeFlag & 32) {
    const _ = l._;
    _ ? process.env.NODE_ENV !== "production" && Ti ? ($t(v, l), We(a, "set", "$slots")) : u && _ === 1 ? w = !1 : ($t(v, l), !u && _ === 1 && delete v._) : (w = !l.$stable, Un(l, v)), P = l;
  } else l && (qn(a, l), P = { default: 1 });
  if (w)
    for (const _ in v)
      !$n(_) && P[_] == null && delete v[_];
};
function Ya(a, l, u, f, v = !1) {
  if (vt(a)) {
    a.forEach(
      (V, $) => Ya(
        V,
        l && (vt(l) ? l[$] : l),
        u,
        f,
        v
      )
    );
    return;
  }
  if (Is(f) && !v)
    return;
  const w = f.shapeFlag & 4 ? Er(f.component) : f.el, P = v ? null : w, { i: _, r: T } = a;
  if (process.env.NODE_ENV !== "production" && !_) {
    at(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const z = l && l.r, D = _.refs === Vt ? _.refs = {} : _.refs, R = _.setupState;
  if (z != null && z !== T && (ie(z) ? (D[z] = null, Rt(R, z) && (R[z] = null)) : ce(z) && (z.value = null)), St(T))
    Je(T, _, 12, [P, D]);
  else {
    const V = ie(T), $ = ce(T);
    if (V || $) {
      const it = () => {
        if (a.f) {
          const lt = V ? Rt(R, T) ? R[T] : D[T] : T.value;
          v ? vt(lt) && Qa(lt, w) : vt(lt) ? lt.includes(w) || lt.push(w) : V ? (D[T] = [w], Rt(R, T) && (R[T] = D[T])) : (T.value = [w], a.k && (D[a.k] = T.value));
        } else V ? (D[T] = P, Rt(R, T) && (R[T] = P)) : $ ? (T.value = P, a.k && (D[a.k] = P)) : process.env.NODE_ENV !== "production" && at("Invalid template ref type:", T, `(${typeof T})`);
      };
      P ? (it.id = -1, be(it, u)) : it();
    } else process.env.NODE_ENV !== "production" && at("Invalid template ref type:", T, `(${typeof T})`);
  }
}
let Zi, ui;
function qe(a, l) {
  a.appContext.config.performance && $s() && ui.mark(`vue-${l}-${a.uid}`), process.env.NODE_ENV !== "production" && hh(a, l, $s() ? ui.now() : Date.now());
}
function Ze(a, l) {
  if (a.appContext.config.performance && $s()) {
    const u = `vue-${l}-${a.uid}`, f = u + ":end";
    ui.mark(f), ui.measure(
      `<${fa(a, a.type)}> ${l}`,
      u,
      f
    ), ui.clearMarks(u), ui.clearMarks(f);
  }
  process.env.NODE_ENV !== "production" && dh(a, l, $s() ? ui.now() : Date.now());
}
function $s() {
  return Zi !== void 0 || (typeof window < "u" && window.performance ? (Zi = !0, ui = window.performance) : Zi = !1), Zi;
}
function Qh() {
  const a = [];
  if (process.env.NODE_ENV !== "production" && a.length) {
    const l = a.length > 1;
    console.warn(
      `Feature flag${l ? "s" : ""} ${a.join(", ")} ${l ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const be = Sh;
function td(a) {
  return ed(a);
}
function ed(a, l) {
  Qh();
  const u = sr();
  u.__VUE__ = !0, process.env.NODE_ENV !== "production" && pr(u.__VUE_DEVTOOLS_GLOBAL_HOOK__, u);
  const {
    insert: f,
    remove: v,
    patchProp: w,
    createElement: P,
    createText: _,
    createComment: T,
    setText: z,
    setElementText: D,
    parentNode: R,
    nextSibling: V,
    setScopeId: $ = ee,
    insertStaticContent: it
  } = a, lt = (M, H, j, Z = null, K = null, tt = null, ot = void 0, Q = null, et = process.env.NODE_ENV !== "production" && Ti ? !1 : !!H.dynamicChildren) => {
    if (M === H)
      return;
    M && !Ki(M, H) && (Z = rt(M), oe(M, K, tt, !0), M = null), H.patchFlag === -2 && (et = !1, H.dynamicChildren = null);
    const { type: J, ref: ct, shapeFlag: xt } = H;
    switch (J) {
      case xs:
        Lt(M, H, j, Z);
        break;
      case Re:
        ut(M, H, j, Z);
        break;
      case Ds:
        M == null ? F(H, j, Z, ot) : process.env.NODE_ENV !== "production" && mt(M, H, j, ot);
        break;
      case Ye:
        Zt(
          M,
          H,
          j,
          Z,
          K,
          tt,
          ot,
          Q,
          et
        );
        break;
      default:
        xt & 1 ? _t(
          M,
          H,
          j,
          Z,
          K,
          tt,
          ot,
          Q,
          et
        ) : xt & 6 ? Mt(
          M,
          H,
          j,
          Z,
          K,
          tt,
          ot,
          Q,
          et
        ) : xt & 64 || xt & 128 ? J.process(
          M,
          H,
          j,
          Z,
          K,
          tt,
          ot,
          Q,
          et,
          It
        ) : process.env.NODE_ENV !== "production" && at("Invalid VNode type:", J, `(${typeof J})`);
    }
    ct != null && K && Ya(ct, M && M.ref, tt, H || M, !H);
  }, Lt = (M, H, j, Z) => {
    if (M == null)
      f(
        H.el = _(H.children),
        j,
        Z
      );
    else {
      const K = H.el = M.el;
      H.children !== M.children && z(K, H.children);
    }
  }, ut = (M, H, j, Z) => {
    M == null ? f(
      H.el = T(H.children || ""),
      j,
      Z
    ) : H.el = M.el;
  }, F = (M, H, j, Z) => {
    [M.el, M.anchor] = it(
      M.children,
      H,
      j,
      Z,
      M.el,
      M.anchor
    );
  }, mt = (M, H, j, Z) => {
    if (H.children !== M.children) {
      const K = V(M.anchor);
      B(M), [H.el, H.anchor] = it(
        H.children,
        j,
        K,
        Z
      );
    } else
      H.el = M.el, H.anchor = M.anchor;
  }, pt = ({ el: M, anchor: H }, j, Z) => {
    let K;
    for (; M && M !== H; )
      K = V(M), f(M, j, Z), M = K;
    f(H, j, Z);
  }, B = ({ el: M, anchor: H }) => {
    let j;
    for (; M && M !== H; )
      j = V(M), v(M), M = j;
    v(H);
  }, _t = (M, H, j, Z, K, tt, ot, Q, et) => {
    H.type === "svg" ? ot = "svg" : H.type === "math" && (ot = "mathml"), M == null ? yt(
      H,
      j,
      Z,
      K,
      tt,
      ot,
      Q,
      et
    ) : se(
      M,
      H,
      K,
      tt,
      ot,
      Q,
      et
    );
  }, yt = (M, H, j, Z, K, tt, ot, Q) => {
    let et, J;
    const { props: ct, shapeFlag: xt, transition: ft, dirs: Ct } = M;
    if (et = M.el = P(
      M.type,
      tt,
      ct && ct.is,
      ct
    ), xt & 8 ? D(et, M.children) : xt & 16 && Ut(
      M.children,
      et,
      null,
      Z,
      K,
      Aa(M, tt),
      ot,
      Q
    ), Ct && ki(M, null, Z, "created"), Jt(et, M, M.scopeId, ot, Z), ct) {
      for (const Yt in ct)
        Yt !== "value" && !is(Yt) && w(
          et,
          Yt,
          null,
          ct[Yt],
          tt,
          M.children,
          Z,
          K,
          G
        );
      "value" in ct && w(et, "value", null, ct.value, tt), (J = ct.onVnodeBeforeMount) && Xe(J, Z, M);
    }
    process.env.NODE_ENV !== "production" && (Object.defineProperty(et, "__vnode", {
      value: M,
      enumerable: !1
    }), Object.defineProperty(et, "__vueParentComponent", {
      value: Z,
      enumerable: !1
    })), Ct && ki(M, null, Z, "beforeMount");
    const Tt = id(K, ft);
    Tt && ft.beforeEnter(et), f(et, H, j), ((J = ct && ct.onVnodeMounted) || Tt || Ct) && be(() => {
      J && Xe(J, Z, M), Tt && ft.enter(et), Ct && ki(M, null, Z, "mounted");
    }, K);
  }, Jt = (M, H, j, Z, K) => {
    if (j && $(M, j), Z)
      for (let tt = 0; tt < Z.length; tt++)
        $(M, Z[tt]);
    if (K) {
      let tt = K.subTree;
      if (process.env.NODE_ENV !== "production" && tt.patchFlag > 0 && tt.patchFlag & 2048 && (tt = mr(tt.children) || tt), H === tt) {
        const ot = K.vnode;
        Jt(
          M,
          ot,
          ot.scopeId,
          ot.slotScopeIds,
          K.parent
        );
      }
    }
  }, Ut = (M, H, j, Z, K, tt, ot, Q, et = 0) => {
    for (let J = et; J < M.length; J++) {
      const ct = M[J] = Q ? ci(M[J]) : Oe(M[J]);
      lt(
        null,
        ct,
        H,
        j,
        Z,
        K,
        tt,
        ot,
        Q
      );
    }
  }, se = (M, H, j, Z, K, tt, ot) => {
    const Q = H.el = M.el;
    let { patchFlag: et, dynamicChildren: J, dirs: ct } = H;
    et |= M.patchFlag & 16;
    const xt = M.props || Vt, ft = H.props || Vt;
    let Ct;
    if (j && Ai(j, !1), (Ct = ft.onVnodeBeforeUpdate) && Xe(Ct, j, H, M), ct && ki(H, M, j, "beforeUpdate"), j && Ai(j, !0), process.env.NODE_ENV !== "production" && Ti && (et = 0, ot = !1, J = null), J ? (gt(
      M.dynamicChildren,
      J,
      Q,
      j,
      Z,
      Aa(H, K),
      tt
    ), process.env.NODE_ENV !== "production" && Ms(M, H)) : ot || re(
      M,
      H,
      Q,
      null,
      j,
      Z,
      Aa(H, K),
      tt,
      !1
    ), et > 0) {
      if (et & 16)
        wt(
          Q,
          H,
          xt,
          ft,
          j,
          Z,
          K
        );
      else if (et & 2 && xt.class !== ft.class && w(Q, "class", null, ft.class, K), et & 4 && w(Q, "style", xt.style, ft.style, K), et & 8) {
        const Tt = H.dynamicProps;
        for (let Yt = 0; Yt < Tt.length; Yt++) {
          const Ft = Tt[Yt], te = xt[Ft], ye = ft[Ft];
          (ye !== te || Ft === "value") && w(
            Q,
            Ft,
            te,
            ye,
            K,
            M.children,
            j,
            Z,
            G
          );
        }
      }
      et & 1 && M.children !== H.children && D(Q, H.children);
    } else !ot && J == null && wt(
      Q,
      H,
      xt,
      ft,
      j,
      Z,
      K
    );
    ((Ct = ft.onVnodeUpdated) || ct) && be(() => {
      Ct && Xe(Ct, j, H, M), ct && ki(H, M, j, "updated");
    }, Z);
  }, gt = (M, H, j, Z, K, tt, ot) => {
    for (let Q = 0; Q < H.length; Q++) {
      const et = M[Q], J = H[Q], ct = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        et.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (et.type === Ye || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ki(et, J) || // - In the case of a component, it could contain anything.
        et.shapeFlag & 70) ? R(et.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          j
        )
      );
      lt(
        et,
        J,
        ct,
        null,
        Z,
        K,
        tt,
        ot,
        !0
      );
    }
  }, wt = (M, H, j, Z, K, tt, ot) => {
    if (j !== Z) {
      if (j !== Vt)
        for (const Q in j)
          !is(Q) && !(Q in Z) && w(
            M,
            Q,
            j[Q],
            null,
            ot,
            H.children,
            K,
            tt,
            G
          );
      for (const Q in Z) {
        if (is(Q)) continue;
        const et = Z[Q], J = j[Q];
        et !== J && Q !== "value" && w(
          M,
          Q,
          J,
          et,
          ot,
          H.children,
          K,
          tt,
          G
        );
      }
      "value" in Z && w(M, "value", j.value, Z.value, ot);
    }
  }, Zt = (M, H, j, Z, K, tt, ot, Q, et) => {
    const J = H.el = M ? M.el : _(""), ct = H.anchor = M ? M.anchor : _("");
    let { patchFlag: xt, dynamicChildren: ft, slotScopeIds: Ct } = H;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ti || xt & 2048) && (xt = 0, et = !1, ft = null), Ct && (Q = Q ? Q.concat(Ct) : Ct), M == null ? (f(J, j, Z), f(ct, j, Z), Ut(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      H.children || [],
      j,
      ct,
      K,
      tt,
      ot,
      Q,
      et
    )) : xt > 0 && xt & 64 && ft && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    M.dynamicChildren ? (gt(
      M.dynamicChildren,
      ft,
      j,
      K,
      tt,
      ot,
      Q
    ), process.env.NODE_ENV !== "production" ? Ms(M, H) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (H.key != null || K && H === K.subTree) && Ms(
        M,
        H,
        !0
        /* shallow */
      )
    )) : re(
      M,
      H,
      j,
      ct,
      K,
      tt,
      ot,
      Q,
      et
    );
  }, Mt = (M, H, j, Z, K, tt, ot, Q, et) => {
    H.slotScopeIds = Q, M == null ? H.shapeFlag & 512 ? K.ctx.activate(
      H,
      j,
      Z,
      ot,
      et
    ) : qt(
      H,
      j,
      Z,
      K,
      tt,
      ot,
      et
    ) : Gt(M, H, et);
  }, qt = (M, H, j, Z, K, tt, ot) => {
    const Q = M.component = yd(
      M,
      Z,
      K
    );
    if (process.env.NODE_ENV !== "production" && Q.type.__hmrId && eh(Q), process.env.NODE_ENV !== "production" && (Os(M), qe(Q, "mount")), Ar(M) && (Q.ctx.renderer = It), process.env.NODE_ENV !== "production" && qe(Q, "init"), kd(Q), process.env.NODE_ENV !== "production" && Ze(Q, "init"), Q.asyncDep) {
      if (K && K.registerDep(Q, At, ot), !M.el) {
        const et = Q.subTree = xe(Re);
        ut(null, et, H, j);
      }
    } else
      At(
        Q,
        M,
        H,
        j,
        K,
        tt,
        ot
      );
    process.env.NODE_ENV !== "production" && (Ls(), Ze(Q, "mount"));
  }, Gt = (M, H, j) => {
    const Z = H.component = M.component;
    if (mh(M, H, j))
      if (Z.asyncDep && !Z.asyncResolved) {
        process.env.NODE_ENV !== "production" && Os(H), kt(Z, H, j), process.env.NODE_ENV !== "production" && Ls();
        return;
      } else
        Z.next = H, Qc(Z.update), Z.effect.dirty = !0, Z.update();
    else
      H.el = M.el, Z.vnode = H;
  }, At = (M, H, j, Z, K, tt, ot) => {
    const Q = () => {
      if (M.isMounted) {
        let { next: ct, bu: xt, u: ft, parent: Ct, vnode: Tt } = M;
        {
          const Be = Zn(M);
          if (Be) {
            ct && (ct.el = Tt.el, kt(M, ct, ot)), Be.asyncDep.then(() => {
              M.isUnmounted || Q();
            });
            return;
          }
        }
        let Yt = ct, Ft;
        process.env.NODE_ENV !== "production" && Os(ct || M.vnode), Ai(M, !1), ct ? (ct.el = Tt.el, kt(M, ct, ot)) : ct = Tt, xt && qi(xt), (Ft = ct.props && ct.props.onVnodeBeforeUpdate) && Xe(Ft, Ct, ct, Tt), Ai(M, !0), process.env.NODE_ENV !== "production" && qe(M, "render");
        const te = wa(M);
        process.env.NODE_ENV !== "production" && Ze(M, "render");
        const ye = M.subTree;
        M.subTree = te, process.env.NODE_ENV !== "production" && qe(M, "patch"), lt(
          ye,
          te,
          // parent may have changed if it's in a teleport
          R(ye.el),
          // anchor may have changed if it's in a fragment
          rt(ye),
          M,
          K,
          tt
        ), process.env.NODE_ENV !== "production" && Ze(M, "patch"), ct.el = te.el, Yt === null && bh(M, te.el), ft && be(ft, K), (Ft = ct.props && ct.props.onVnodeUpdated) && be(
          () => Xe(Ft, Ct, ct, Tt),
          K
        ), process.env.NODE_ENV !== "production" && Nn(M), process.env.NODE_ENV !== "production" && Ls();
      } else {
        let ct;
        const { el: xt, props: ft } = H, { bm: Ct, m: Tt, parent: Yt } = M, Ft = Is(H);
        if (Ai(M, !1), Ct && qi(Ct), !Ft && (ct = ft && ft.onVnodeBeforeMount) && Xe(ct, Yt, H), Ai(M, !0), xt && Nt) {
          const te = () => {
            process.env.NODE_ENV !== "production" && qe(M, "render"), M.subTree = wa(M), process.env.NODE_ENV !== "production" && Ze(M, "render"), process.env.NODE_ENV !== "production" && qe(M, "hydrate"), Nt(
              xt,
              M.subTree,
              M,
              K,
              null
            ), process.env.NODE_ENV !== "production" && Ze(M, "hydrate");
          };
          Ft ? H.type.__asyncLoader().then(
            // note: we are moving the render call into an async callback,
            // which means it won't track dependencies - but it's ok because
            // a server-rendered async wrapper is already in resolved state
            // and it will never need to change.
            () => !M.isUnmounted && te()
          ) : te();
        } else {
          process.env.NODE_ENV !== "production" && qe(M, "render");
          const te = M.subTree = wa(M);
          process.env.NODE_ENV !== "production" && Ze(M, "render"), process.env.NODE_ENV !== "production" && qe(M, "patch"), lt(
            null,
            te,
            j,
            Z,
            M,
            K,
            tt
          ), process.env.NODE_ENV !== "production" && Ze(M, "patch"), H.el = te.el;
        }
        if (Tt && be(Tt, K), !Ft && (ct = ft && ft.onVnodeMounted)) {
          const te = H;
          be(
            () => Xe(ct, Yt, te),
            K
          );
        }
        (H.shapeFlag & 256 || Yt && Is(Yt.vnode) && Yt.vnode.shapeFlag & 256) && M.a && be(M.a, K), M.isMounted = !0, process.env.NODE_ENV !== "production" && nh(M), H = j = Z = null;
      }
    }, et = M.effect = new or(
      Q,
      ee,
      () => oa(J),
      M.scope
      // track it in component's effect scope
    ), J = M.update = () => {
      et.dirty && et.run();
    };
    J.id = M.uid, Ai(M, !0), process.env.NODE_ENV !== "production" && (et.onTrack = M.rtc ? (ct) => qi(M.rtc, ct) : void 0, et.onTrigger = M.rtg ? (ct) => qi(M.rtg, ct) : void 0, J.ownerInstance = M), J();
  }, kt = (M, H, j) => {
    H.component = M;
    const Z = M.vnode.props;
    M.vnode = H, M.next = null, Bh(M, H.props, Z, j), Jh(M, H.children, j), si(), Jr(M), ai();
  }, re = (M, H, j, Z, K, tt, ot, Q, et = !1) => {
    const J = M && M.children, ct = M ? M.shapeFlag : 0, xt = H.children, { patchFlag: ft, shapeFlag: Ct } = H;
    if (ft > 0) {
      if (ft & 128) {
        Fe(
          J,
          xt,
          j,
          Z,
          K,
          tt,
          ot,
          Q,
          et
        );
        return;
      } else if (ft & 256) {
        ze(
          J,
          xt,
          j,
          Z,
          K,
          tt,
          ot,
          Q,
          et
        );
        return;
      }
    }
    Ct & 8 ? (ct & 16 && G(J, K, tt), xt !== J && D(j, xt)) : ct & 16 ? Ct & 16 ? Fe(
      J,
      xt,
      j,
      Z,
      K,
      tt,
      ot,
      Q,
      et
    ) : G(J, K, tt, !0) : (ct & 8 && D(j, ""), Ct & 16 && Ut(
      xt,
      j,
      Z,
      K,
      tt,
      ot,
      Q,
      et
    ));
  }, ze = (M, H, j, Z, K, tt, ot, Q, et) => {
    M = M || Vi, H = H || Vi;
    const J = M.length, ct = H.length, xt = Math.min(J, ct);
    let ft;
    for (ft = 0; ft < xt; ft++) {
      const Ct = H[ft] = et ? ci(H[ft]) : Oe(H[ft]);
      lt(
        M[ft],
        Ct,
        j,
        null,
        K,
        tt,
        ot,
        Q,
        et
      );
    }
    J > ct ? G(
      M,
      K,
      tt,
      !0,
      !1,
      xt
    ) : Ut(
      H,
      j,
      Z,
      K,
      tt,
      ot,
      Q,
      et,
      xt
    );
  }, Fe = (M, H, j, Z, K, tt, ot, Q, et) => {
    let J = 0;
    const ct = H.length;
    let xt = M.length - 1, ft = ct - 1;
    for (; J <= xt && J <= ft; ) {
      const Ct = M[J], Tt = H[J] = et ? ci(H[J]) : Oe(H[J]);
      if (Ki(Ct, Tt))
        lt(
          Ct,
          Tt,
          j,
          null,
          K,
          tt,
          ot,
          Q,
          et
        );
      else
        break;
      J++;
    }
    for (; J <= xt && J <= ft; ) {
      const Ct = M[xt], Tt = H[ft] = et ? ci(H[ft]) : Oe(H[ft]);
      if (Ki(Ct, Tt))
        lt(
          Ct,
          Tt,
          j,
          null,
          K,
          tt,
          ot,
          Q,
          et
        );
      else
        break;
      xt--, ft--;
    }
    if (J > xt) {
      if (J <= ft) {
        const Ct = ft + 1, Tt = Ct < ct ? H[Ct].el : Z;
        for (; J <= ft; )
          lt(
            null,
            H[J] = et ? ci(H[J]) : Oe(H[J]),
            j,
            Tt,
            K,
            tt,
            ot,
            Q,
            et
          ), J++;
      }
    } else if (J > ft)
      for (; J <= xt; )
        oe(M[J], K, tt, !0), J++;
    else {
      const Ct = J, Tt = J, Yt = /* @__PURE__ */ new Map();
      for (J = Tt; J <= ft; J++) {
        const ne = H[J] = et ? ci(H[J]) : Oe(H[J]);
        ne.key != null && (process.env.NODE_ENV !== "production" && Yt.has(ne.key) && at(
          "Duplicate keys found during update:",
          JSON.stringify(ne.key),
          "Make sure keys are unique."
        ), Yt.set(ne.key, J));
      }
      let Ft, te = 0;
      const ye = ft - Tt + 1;
      let Be = !1, bs = 0;
      const yi = new Array(ye);
      for (J = 0; J < ye; J++) yi[J] = 0;
      for (J = Ct; J <= xt; J++) {
        const ne = M[J];
        if (te >= ye) {
          oe(ne, K, tt, !0);
          continue;
        }
        let Se;
        if (ne.key != null)
          Se = Yt.get(ne.key);
        else
          for (Ft = Tt; Ft <= ft; Ft++)
            if (yi[Ft - Tt] === 0 && Ki(ne, H[Ft])) {
              Se = Ft;
              break;
            }
        Se === void 0 ? oe(ne, K, tt, !0) : (yi[Se - Tt] = J + 1, Se >= bs ? bs = Se : Be = !0, lt(
          ne,
          H[Se],
          j,
          null,
          K,
          tt,
          ot,
          Q,
          et
        ), te++);
      }
      const vs = Be ? sd(yi) : Vi;
      for (Ft = vs.length - 1, J = ye - 1; J >= 0; J--) {
        const ne = Tt + J, Se = H[ne], ys = ne + 1 < ct ? H[ne + 1].el : Z;
        yi[J] === 0 ? lt(
          null,
          Se,
          j,
          ys,
          K,
          tt,
          ot,
          Q,
          et
        ) : Be && (Ft < 0 || J !== vs[Ft] ? Kt(Se, j, ys, 2) : Ft--);
      }
    }
  }, Kt = (M, H, j, Z, K = null) => {
    const { el: tt, type: ot, transition: Q, children: et, shapeFlag: J } = M;
    if (J & 6) {
      Kt(M.component.subTree, H, j, Z);
      return;
    }
    if (J & 128) {
      M.suspense.move(H, j, Z);
      return;
    }
    if (J & 64) {
      ot.move(M, H, j, It);
      return;
    }
    if (ot === Ye) {
      f(tt, H, j);
      for (let xt = 0; xt < et.length; xt++)
        Kt(et[xt], H, j, Z);
      f(M.anchor, H, j);
      return;
    }
    if (ot === Ds) {
      pt(M, H, j);
      return;
    }
    if (Z !== 2 && J & 1 && Q)
      if (Z === 0)
        Q.beforeEnter(tt), f(tt, H, j), be(() => Q.enter(tt), K);
      else {
        const { leave: xt, delayLeave: ft, afterLeave: Ct } = Q, Tt = () => f(tt, H, j), Yt = () => {
          xt(tt, () => {
            Tt(), Ct && Ct();
          });
        };
        ft ? ft(tt, Tt, Yt) : Yt();
      }
    else
      f(tt, H, j);
  }, oe = (M, H, j, Z = !1, K = !1) => {
    const {
      type: tt,
      props: ot,
      ref: Q,
      children: et,
      dynamicChildren: J,
      shapeFlag: ct,
      patchFlag: xt,
      dirs: ft,
      memoIndex: Ct
    } = M;
    if (Q != null && Ya(Q, null, j, M, !0), Ct != null && (H.renderCache[Ct] = void 0), ct & 256) {
      H.ctx.deactivate(M);
      return;
    }
    const Tt = ct & 1 && ft, Yt = !Is(M);
    let Ft;
    if (Yt && (Ft = ot && ot.onVnodeBeforeUnmount) && Xe(Ft, H, M), ct & 6)
      Qt(M.component, j, Z);
    else {
      if (ct & 128) {
        M.suspense.unmount(j, Z);
        return;
      }
      Tt && ki(M, null, H, "beforeUnmount"), ct & 64 ? M.type.remove(
        M,
        H,
        j,
        K,
        It,
        Z
      ) : J && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (tt !== Ye || xt > 0 && xt & 64) ? G(
        J,
        H,
        j,
        !1,
        !0
      ) : (tt === Ye && xt & 384 || !K && ct & 16) && G(et, H, j), Z && Ce(M);
    }
    (Yt && (Ft = ot && ot.onVnodeUnmounted) || Tt) && be(() => {
      Ft && Xe(Ft, H, M), Tt && ki(M, null, H, "unmounted");
    }, j);
  }, Ce = (M) => {
    const { type: H, el: j, anchor: Z, transition: K } = M;
    if (H === Ye) {
      process.env.NODE_ENV !== "production" && M.patchFlag > 0 && M.patchFlag & 2048 && K && !K.persisted ? M.children.forEach((ot) => {
        ot.type === Re ? v(ot.el) : Ce(ot);
      }) : Ee(j, Z);
      return;
    }
    if (H === Ds) {
      B(M);
      return;
    }
    const tt = () => {
      v(j), K && !K.persisted && K.afterLeave && K.afterLeave();
    };
    if (M.shapeFlag & 1 && K && !K.persisted) {
      const { leave: ot, delayLeave: Q } = K, et = () => ot(j, tt);
      Q ? Q(M.el, tt, et) : et();
    } else
      tt();
  }, Ee = (M, H) => {
    let j;
    for (; M !== H; )
      j = V(M), v(M), M = j;
    v(H);
  }, Qt = (M, H, j) => {
    process.env.NODE_ENV !== "production" && M.type.__hmrId && ih(M);
    const { bum: Z, scope: K, update: tt, subTree: ot, um: Q, m: et, a: J } = M;
    fo(et), fo(J), Z && qi(Z), K.stop(), tt && (tt.active = !1, oe(ot, M, H, j)), Q && be(Q, H), be(() => {
      M.isUnmounted = !0;
    }, H), H && H.pendingBranch && !H.isUnmounted && M.asyncDep && !M.asyncResolved && M.suspenseId === H.pendingId && (H.deps--, H.deps === 0 && H.resolve()), process.env.NODE_ENV !== "production" && ch(M);
  }, G = (M, H, j, Z = !1, K = !1, tt = 0) => {
    for (let ot = tt; ot < M.length; ot++)
      oe(M[ot], H, j, Z, K);
  }, rt = (M) => M.shapeFlag & 6 ? rt(M.component.subTree) : M.shapeFlag & 128 ? M.suspense.next() : V(M.anchor || M.el);
  let nt = !1;
  const ht = (M, H, j) => {
    M == null ? H._vnode && oe(H._vnode, null, null, !0) : lt(
      H._vnode || null,
      M,
      H,
      null,
      null,
      null,
      j
    ), nt || (nt = !0, Jr(), En(), nt = !1), H._vnode = M;
  }, It = {
    p: lt,
    um: oe,
    m: Kt,
    r: Ce,
    mt: qt,
    mc: Ut,
    pc: re,
    pbc: gt,
    n: rt,
    o: a
  };
  let Xt, Nt;
  return {
    render: ht,
    hydrate: Xt,
    createApp: Hh(ht, Xt)
  };
}
function Aa({ type: a, props: l }, u) {
  return u === "svg" && a === "foreignObject" || u === "mathml" && a === "annotation-xml" && l && l.encoding && l.encoding.includes("html") ? void 0 : u;
}
function Ai({ effect: a, update: l }, u) {
  a.allowRecurse = l.allowRecurse = u;
}
function id(a, l) {
  return (!a || a && !a.pendingBranch) && l && !l.persisted;
}
function Ms(a, l, u = !1) {
  const f = a.children, v = l.children;
  if (vt(f) && vt(v))
    for (let w = 0; w < f.length; w++) {
      const P = f[w];
      let _ = v[w];
      _.shapeFlag & 1 && !_.dynamicChildren && ((_.patchFlag <= 0 || _.patchFlag === 32) && (_ = v[w] = ci(v[w]), _.el = P.el), !u && _.patchFlag !== -2 && Ms(P, _)), _.type === xs && (_.el = P.el), process.env.NODE_ENV !== "production" && _.type === Re && !_.el && (_.el = P.el);
    }
}
function sd(a) {
  const l = a.slice(), u = [0];
  let f, v, w, P, _;
  const T = a.length;
  for (f = 0; f < T; f++) {
    const z = a[f];
    if (z !== 0) {
      if (v = u[u.length - 1], a[v] < z) {
        l[f] = v, u.push(f);
        continue;
      }
      for (w = 0, P = u.length - 1; w < P; )
        _ = w + P >> 1, a[u[_]] < z ? w = _ + 1 : P = _;
      z < a[u[w]] && (w > 0 && (l[f] = u[w - 1]), u[w] = f);
    }
  }
  for (w = u.length, P = u[w - 1]; w-- > 0; )
    u[w] = P, P = l[P];
  return u;
}
function Zn(a) {
  const l = a.subTree.component;
  if (l)
    return l.asyncDep && !l.asyncResolved ? l : Zn(l);
}
function fo(a) {
  if (a)
    for (let l = 0; l < a.length; l++) a[l].active = !1;
}
const ad = Symbol.for("v-scx"), rd = () => {
  {
    const a = Qe(ad);
    return a || process.env.NODE_ENV !== "production" && at(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), a;
  }
};
function od(a, l) {
  return kr(a, null, l);
}
const Ps = {};
function Ie(a, l, u) {
  return process.env.NODE_ENV !== "production" && !St(l) && at(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), kr(a, l, u);
}
function kr(a, l, {
  immediate: u,
  deep: f,
  flush: v,
  once: w,
  onTrack: P,
  onTrigger: _
} = Vt) {
  if (l && w) {
    const yt = l;
    l = (...Jt) => {
      yt(...Jt), _t();
    };
  }
  process.env.NODE_ENV !== "production" && f !== void 0 && typeof f == "number" && at(
    'watch() "deep" option with number value will be used as watch depth in future versions. Please use a boolean instead to avoid potential breakage.'
  ), process.env.NODE_ENV !== "production" && !l && (u !== void 0 && at(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), f !== void 0 && at(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), w !== void 0 && at(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const T = (yt) => {
    at(
      "Invalid watch source: ",
      yt,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, z = ae, D = (yt) => f === !0 ? yt : (
    // for deep: false, only traverse root-level properties
    _i(yt, f === !1 ? 1 : void 0)
  );
  let R, V = !1, $ = !1;
  if (ce(a) ? (R = () => a.value, V = Li(a)) : Bi(a) ? (R = () => D(a), V = !0) : vt(a) ? ($ = !0, V = a.some((yt) => Bi(yt) || Li(yt)), R = () => a.map((yt) => {
    if (ce(yt))
      return yt.value;
    if (Bi(yt))
      return D(yt);
    if (St(yt))
      return Je(yt, z, 2);
    process.env.NODE_ENV !== "production" && T(yt);
  })) : St(a) ? l ? R = () => Je(a, z, 2) : R = () => (it && it(), De(
    a,
    z,
    3,
    [lt]
  )) : (R = ee, process.env.NODE_ENV !== "production" && T(a)), l && f) {
    const yt = R;
    R = () => _i(yt());
  }
  let it, lt = (yt) => {
    it = pt.onStop = () => {
      Je(yt, z, 4), it = pt.onStop = void 0;
    };
  }, Lt;
  if (ua)
    if (lt = ee, l ? u && De(l, z, 3, [
      R(),
      $ ? [] : void 0,
      lt
    ]) : R(), v === "sync") {
      const yt = rd();
      Lt = yt.__watcherHandles || (yt.__watcherHandles = []);
    } else
      return ee;
  let ut = $ ? new Array(a.length).fill(Ps) : Ps;
  const F = () => {
    if (!(!pt.active || !pt.dirty))
      if (l) {
        const yt = pt.run();
        (f || V || ($ ? yt.some((Jt, Ut) => mi(Jt, ut[Ut])) : mi(yt, ut))) && (it && it(), De(l, z, 3, [
          yt,
          // pass undefined as the old value when it's changed for the first time
          ut === Ps ? void 0 : $ && ut[0] === Ps ? [] : ut,
          lt
        ]), ut = yt);
      } else
        pt.run();
  };
  F.allowRecurse = !!l;
  let mt;
  v === "sync" ? mt = F : v === "post" ? mt = () => be(F, z && z.suspense) : (F.pre = !0, z && (F.id = z.uid), mt = () => oa(F));
  const pt = new or(R, ee, mt), B = mc(), _t = () => {
    pt.stop(), B && Qa(B.effects, pt);
  };
  return process.env.NODE_ENV !== "production" && (pt.onTrack = P, pt.onTrigger = _), l ? u ? F() : ut = pt.run() : v === "post" ? be(
    pt.run.bind(pt),
    z && z.suspense
  ) : pt.run(), Lt && Lt.push(_t), _t;
}
function nd(a, l, u) {
  const f = this.proxy, v = ie(a) ? a.includes(".") ? Kn(f, a) : () => f[a] : a.bind(f, f);
  let w;
  St(l) ? w = l : (w = l.handler, u = l);
  const P = ms(this), _ = kr(v, w.bind(f), u);
  return P(), _;
}
function Kn(a, l) {
  const u = l.split(".");
  return () => {
    let f = a;
    for (let v = 0; v < u.length && f; v++)
      f = f[u[v]];
    return f;
  };
}
function _i(a, l = 1 / 0, u) {
  if (l <= 0 || !Bt(a) || a.__v_skip || (u = u || /* @__PURE__ */ new Set(), u.has(a)))
    return a;
  if (u.add(a), l--, ce(a))
    _i(a.value, l, u);
  else if (vt(a))
    for (let f = 0; f < a.length; f++)
      _i(a[f], l, u);
  else if (Zl(a) || Wi(a))
    a.forEach((f) => {
      _i(f, l, u);
    });
  else if (Jl(a)) {
    for (const f in a)
      _i(a[f], l, u);
    for (const f of Object.getOwnPropertySymbols(a))
      Object.prototype.propertyIsEnumerable.call(a, f) && _i(a[f], l, u);
  }
  return a;
}
const Ar = (a) => a.type.__isKeepAlive;
function ld(a, l) {
  Jn(a, "a", l);
}
function cd(a, l) {
  Jn(a, "da", l);
}
function Jn(a, l, u = ae) {
  const f = a.__wdc || (a.__wdc = () => {
    let v = u;
    for (; v; ) {
      if (v.isDeactivated)
        return;
      v = v.parent;
    }
    return a();
  });
  if (la(l, f, u), u) {
    let v = u.parent;
    for (; v && v.parent; )
      Ar(v.parent.vnode) && hd(f, l, u, v), v = v.parent;
  }
}
function hd(a, l, u, f) {
  const v = la(
    l,
    a,
    f,
    !0
    /* prepend */
  );
  Rn(() => {
    Qa(f[l], v);
  }, u);
}
function Qn(a, l) {
  a.shapeFlag & 6 && a.component ? Qn(a.component.subTree, l) : a.shapeFlag & 128 ? (a.ssContent.transition = l.clone(a.ssContent), a.ssFallback.transition = l.clone(a.ssFallback)) : a.transition = l;
}
const dd = (a) => a.__isTeleport, Ye = Symbol.for("v-fgt"), xs = Symbol.for("v-txt"), Re = Symbol.for("v-cmt"), Ds = Symbol.for("v-stc"), rs = [];
let Me = null;
function ha(a = !1) {
  rs.push(Me = a ? null : []);
}
function ud() {
  rs.pop(), Me = rs[rs.length - 1] || null;
}
let hs = 1;
function go(a) {
  hs += a;
}
function tl(a) {
  return a.dynamicChildren = hs > 0 ? Me || Vi : null, ud(), hs > 0 && Me && Me.push(a), a;
}
function Sr(a, l, u, f, v, w) {
  return tl(
    ji(
      a,
      l,
      u,
      f,
      v,
      w,
      !0
    )
  );
}
function fd(a, l, u, f, v) {
  return tl(
    xe(
      a,
      l,
      u,
      f,
      v,
      !0
    )
  );
}
function ds(a) {
  return a ? a.__v_isVNode === !0 : !1;
}
function Ki(a, l) {
  return process.env.NODE_ENV !== "production" && l.shapeFlag & 6 && Ci.has(l.type) ? (a.shapeFlag &= -257, l.shapeFlag &= -513, !1) : a.type === l.type && a.key === l.key;
}
const gd = (...a) => il(
  ...a
), el = ({ key: a }) => a ?? null, Rs = ({
  ref: a,
  ref_key: l,
  ref_for: u
}) => (typeof a == "number" && (a = "" + a), a != null ? ie(a) || ce(a) || St(a) ? { i: ve, r: a, k: l, f: !!u } : a : null);
function ji(a, l = null, u = null, f = 0, v = null, w = a === Ye ? 0 : 1, P = !1, _ = !1) {
  const T = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: a,
    props: l,
    key: l && el(l),
    ref: l && Rs(l),
    scopeId: In,
    slotScopeIds: null,
    children: u,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: w,
    patchFlag: f,
    dynamicProps: v,
    dynamicChildren: null,
    appContext: null,
    ctx: ve
  };
  return _ ? (Cr(T, u), w & 128 && a.normalize(T)) : u && (T.shapeFlag |= ie(u) ? 8 : 16), process.env.NODE_ENV !== "production" && T.key !== T.key && at("VNode created with invalid key (NaN). VNode type:", T.type), hs > 0 && // avoid a block node from tracking itself
  !P && // has current parent block
  Me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (T.patchFlag > 0 || w & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  T.patchFlag !== 32 && Me.push(T), T;
}
const xe = process.env.NODE_ENV !== "production" ? gd : il;
function il(a, l = null, u = null, f = 0, v = null, w = !1) {
  if ((!a || a === wh) && (process.env.NODE_ENV !== "production" && !a && at(`Invalid vnode type when creating vnode: ${a}.`), a = Re), ds(a)) {
    const _ = bi(
      a,
      l,
      !0
      /* mergeRef: true */
    );
    return u && Cr(_, u), hs > 0 && !w && Me && (_.shapeFlag & 6 ? Me[Me.indexOf(a)] = _ : Me.push(_)), _.patchFlag = -2, _;
  }
  if (ol(a) && (a = a.__vccOpts), l) {
    l = pd(l);
    let { class: _, style: T } = l;
    _ && !ie(_) && (l.class = rr(_)), Bt(T) && (Ws(T) && !vt(T) && (T = $t({}, T)), l.style = ar(T));
  }
  const P = ie(a) ? 1 : Ah(a) ? 128 : dd(a) ? 64 : Bt(a) ? 4 : St(a) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && P & 4 && Ws(a) && (a = Pt(a), at(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    a
  )), ji(
    a,
    l,
    u,
    f,
    v,
    P,
    w,
    !0
  );
}
function pd(a) {
  return a ? Ws(a) || Wn(a) ? $t({}, a) : a : null;
}
function bi(a, l, u = !1, f = !1) {
  const { props: v, ref: w, patchFlag: P, children: _, transition: T } = a, z = l ? md(v || {}, l) : v, D = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: a.type,
    props: z,
    key: z && el(z),
    ref: l && l.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      u && w ? vt(w) ? w.concat(Rs(l)) : [w, Rs(l)] : Rs(l)
    ) : w,
    scopeId: a.scopeId,
    slotScopeIds: a.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && P === -1 && vt(_) ? _.map(sl) : _,
    target: a.target,
    targetAnchor: a.targetAnchor,
    staticCount: a.staticCount,
    shapeFlag: a.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: l && a.type !== Ye ? P === -1 ? 16 : P | 16 : P,
    dynamicProps: a.dynamicProps,
    dynamicChildren: a.dynamicChildren,
    appContext: a.appContext,
    dirs: a.dirs,
    transition: T,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: a.component,
    suspense: a.suspense,
    ssContent: a.ssContent && bi(a.ssContent),
    ssFallback: a.ssFallback && bi(a.ssFallback),
    el: a.el,
    anchor: a.anchor,
    ctx: a.ctx,
    ce: a.ce
  };
  return T && f && Qn(
    D,
    T.clone(D)
  ), D;
}
function sl(a) {
  const l = bi(a);
  return vt(a.children) && (l.children = a.children.map(sl)), l;
}
function xd(a = " ", l = 0) {
  return xe(xs, null, a, l);
}
function Oe(a) {
  return a == null || typeof a == "boolean" ? xe(Re) : vt(a) ? xe(
    Ye,
    null,
    // #3666, avoid reference pollution when reusing vnode
    a.slice()
  ) : typeof a == "object" ? ci(a) : xe(xs, null, String(a));
}
function ci(a) {
  return a.el === null && a.patchFlag !== -1 || a.memo ? a : bi(a);
}
function Cr(a, l) {
  let u = 0;
  const { shapeFlag: f } = a;
  if (l == null)
    l = null;
  else if (vt(l))
    u = 16;
  else if (typeof l == "object")
    if (f & 65) {
      const v = l.default;
      v && (v._c && (v._d = !1), Cr(a, v()), v._c && (v._d = !0));
      return;
    } else {
      u = 32;
      const v = l._;
      !v && !Wn(l) ? l._ctx = ve : v === 3 && ve && (ve.slots._ === 1 ? l._ = 1 : (l._ = 2, a.patchFlag |= 1024));
    }
  else St(l) ? (l = { default: l, _ctx: ve }, u = 32) : (l = String(l), f & 64 ? (u = 16, l = [xd(l)]) : u = 8);
  a.children = l, a.shapeFlag |= u;
}
function md(...a) {
  const l = {};
  for (let u = 0; u < a.length; u++) {
    const f = a[u];
    for (const v in f)
      if (v === "class")
        l.class !== f.class && (l.class = rr([l.class, f.class]));
      else if (v === "style")
        l.style = ar([l.style, f.style]);
      else if (us(v)) {
        const w = l[v], P = f[v];
        P && w !== P && !(vt(w) && w.includes(P)) && (l[v] = w ? [].concat(w, P) : P);
      } else v !== "" && (l[v] = f[v]);
  }
  return l;
}
function Xe(a, l, u, f = null) {
  De(a, l, 7, [
    u,
    f
  ]);
}
const bd = Yn();
let vd = 0;
function yd(a, l, u) {
  const f = a.type, v = (l ? l.appContext : a.appContext) || bd, w = {
    uid: vd++,
    vnode: a,
    type: f,
    parent: l,
    appContext: v,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    scope: new tn(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: l ? l.provides : Object.create(v.provides),
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Gn(f, v),
    emitsOptions: Ln(f, v),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Vt,
    // inheritAttrs
    inheritAttrs: f.inheritAttrs,
    // state
    ctx: Vt,
    data: Vt,
    props: Vt,
    attrs: Vt,
    slots: Vt,
    refs: Vt,
    setupState: Vt,
    setupContext: null,
    attrsProxy: null,
    slotsProxy: null,
    // suspense related
    suspense: u,
    suspenseId: u ? u.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? w.ctx = Lh(w) : w.ctx = { _: w }, w.root = l ? l.root : w, w.emit = fh.bind(null, w), a.ce && a.ce(w), w;
}
let ae = null;
const da = () => ae || ve;
let Us, Ha;
{
  const a = sr(), l = (u, f) => {
    let v;
    return (v = a[u]) || (v = a[u] = []), v.push(f), (w) => {
      v.length > 1 ? v.forEach((P) => P(w)) : v[0](w);
    };
  };
  Us = l(
    "__VUE_INSTANCE_SETTERS__",
    (u) => ae = u
  ), Ha = l(
    "__VUE_SSR_SETTERS__",
    (u) => ua = u
  );
}
const ms = (a) => {
  const l = ae;
  return Us(a), a.scope.on(), () => {
    a.scope.off(), Us(l);
  };
}, po = () => {
  ae && ae.scope.off(), Us(null);
}, wd = /* @__PURE__ */ ii("slot,component");
function Va(a, { isNativeTag: l }) {
  (wd(a) || l(a)) && at(
    "Do not use built-in or reserved HTML elements as component id: " + a
  );
}
function al(a) {
  return a.vnode.shapeFlag & 4;
}
let ua = !1;
function kd(a, l = !1) {
  l && Ha(l);
  const { props: u, children: f } = a.vnode, v = al(a);
  Vh(a, u, v, l), Kh(a, f);
  const w = v ? Ad(a, l) : void 0;
  return l && Ha(!1), w;
}
function Ad(a, l) {
  var u;
  const f = a.type;
  if (process.env.NODE_ENV !== "production") {
    if (f.name && Va(f.name, a.appContext.config), f.components) {
      const w = Object.keys(f.components);
      for (let P = 0; P < w.length; P++)
        Va(w[P], a.appContext.config);
    }
    if (f.directives) {
      const w = Object.keys(f.directives);
      for (let P = 0; P < w.length; P++)
        zn(w[P]);
    }
    f.compilerOptions && Sd() && at(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  a.accessCache = /* @__PURE__ */ Object.create(null), a.proxy = new Proxy(a.ctx, Fn), process.env.NODE_ENV !== "production" && Ih(a);
  const { setup: v } = f;
  if (v) {
    const w = a.setupContext = v.length > 1 ? Ed(a) : null, P = ms(a);
    si();
    const _ = Je(
      v,
      a,
      0,
      [
        process.env.NODE_ENV !== "production" ? Ve(a.props) : a.props,
        w
      ]
    );
    if (ai(), P(), tr(_)) {
      if (_.then(po, po), l)
        return _.then((T) => {
          xo(a, T, l);
        }).catch((T) => {
          gs(T, a, 0);
        });
      if (a.asyncDep = _, process.env.NODE_ENV !== "production" && !a.suspense) {
        const T = (u = f.name) != null ? u : "Anonymous";
        at(
          `Component <${T}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      xo(a, _, l);
  } else
    rl(a, l);
}
function xo(a, l, u) {
  St(l) ? a.type.__ssrInlineRender ? a.ssrRender = l : a.render = l : Bt(l) ? (process.env.NODE_ENV !== "production" && ds(l) && at(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (a.devtoolsRawSetupState = l), a.setupState = wn(l), process.env.NODE_ENV !== "production" && Th(a)) : process.env.NODE_ENV !== "production" && l !== void 0 && at(
    `setup() should return an object. Received: ${l === null ? "null" : typeof l}`
  ), rl(a, u);
}
let Wa;
const Sd = () => !Wa;
function rl(a, l, u) {
  const f = a.type;
  if (!a.render) {
    if (!l && Wa && !f.render) {
      const v = f.template || yr(a).template;
      if (v) {
        process.env.NODE_ENV !== "production" && qe(a, "compile");
        const { isCustomElement: w, compilerOptions: P } = a.appContext.config, { delimiters: _, compilerOptions: T } = f, z = $t(
          $t(
            {
              isCustomElement: w,
              delimiters: _
            },
            P
          ),
          T
        );
        f.render = Wa(v, z), process.env.NODE_ENV !== "production" && Ze(a, "compile");
      }
    }
    a.render = f.render || ee;
  }
  {
    const v = ms(a);
    si();
    try {
      Dh(a);
    } finally {
      ai(), v();
    }
  }
  process.env.NODE_ENV !== "production" && !f.render && a.render === ee && !l && (f.template ? at(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : at("Component is missing template or render function: ", f));
}
const mo = process.env.NODE_ENV !== "production" ? {
  get(a, l) {
    return Gs(), de(a, "get", ""), a[l];
  },
  set() {
    return at("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return at("setupContext.attrs is readonly."), !1;
  }
} : {
  get(a, l) {
    return de(a, "get", ""), a[l];
  }
};
function Cd(a) {
  return a.slotsProxy || (a.slotsProxy = new Proxy(a.slots, {
    get(l, u) {
      return de(a, "get", "$slots"), l[u];
    }
  }));
}
function Ed(a) {
  const l = (u) => {
    if (process.env.NODE_ENV !== "production" && (a.exposed && at("expose() should be called only once per setup()."), u != null)) {
      let f = typeof u;
      f === "object" && (vt(u) ? f = "array" : ce(u) && (f = "ref")), f !== "object" && at(
        `expose() should be passed a plain object, received ${f}.`
      );
    }
    a.exposed = u || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let u;
    return Object.freeze({
      get attrs() {
        return u || (u = new Proxy(a.attrs, mo));
      },
      get slots() {
        return Cd(a);
      },
      get emit() {
        return (f, ...v) => a.emit(f, ...v);
      },
      expose: l
    });
  } else
    return {
      attrs: new Proxy(a.attrs, mo),
      slots: a.slots,
      emit: a.emit,
      expose: l
    };
}
function Er(a) {
  return a.exposed ? a.exposeProxy || (a.exposeProxy = new Proxy(wn(hr(a.exposed)), {
    get(l, u) {
      if (u in l)
        return l[u];
      if (u in Mi)
        return Mi[u](a);
    },
    has(l, u) {
      return u in l || u in Mi;
    }
  })) : a.proxy;
}
const Pd = /(?:^|[-_])(\w)/g, _d = (a) => a.replace(Pd, (l) => l.toUpperCase()).replace(/[-_]/g, "");
function Pr(a, l = !0) {
  return St(a) ? a.displayName || a.name : a.name || l && a.__name;
}
function fa(a, l, u = !1) {
  let f = Pr(l);
  if (!f && l.__file) {
    const v = l.__file.match(/([^/\\]+)\.\w+$/);
    v && (f = v[1]);
  }
  if (!f && a && a.parent) {
    const v = (w) => {
      for (const P in w)
        if (w[P] === l)
          return P;
    };
    f = v(
      a.components || a.parent.type.components
    ) || v(a.appContext.components);
  }
  return f ? _d(f) : u ? "App" : "Anonymous";
}
function ol(a) {
  return St(a) && "__vccOpts" in a;
}
const Te = (a, l) => {
  const u = Xc(a, l, ua);
  if (process.env.NODE_ENV !== "production") {
    const f = da();
    f && f.appContext.config.warnRecursiveComputed && (u._warnRecursive = !0);
  }
  return u;
};
function _r(a, l, u) {
  const f = arguments.length;
  return f === 2 ? Bt(l) && !vt(l) ? ds(l) ? xe(a, null, [l]) : xe(a, l) : xe(a, null, l) : (f > 3 ? u = Array.prototype.slice.call(arguments, 2) : f === 3 && ds(u) && (u = [u]), xe(a, l, u));
}
function Nd() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const a = { style: "color:#3ba776" }, l = { style: "color:#1677ff" }, u = { style: "color:#f5222d" }, f = { style: "color:#eb2f96" }, v = {
    header(R) {
      return Bt(R) ? R.__isVue ? ["div", a, "VueInstance"] : ce(R) ? [
        "div",
        {},
        ["span", a, D(R)],
        "<",
        _(R.value),
        ">"
      ] : Bi(R) ? [
        "div",
        {},
        ["span", a, Li(R) ? "ShallowReactive" : "Reactive"],
        "<",
        _(R),
        `>${zi(R) ? " (readonly)" : ""}`
      ] : zi(R) ? [
        "div",
        {},
        ["span", a, Li(R) ? "ShallowReadonly" : "Readonly"],
        "<",
        _(R),
        ">"
      ] : null : null;
    },
    hasBody(R) {
      return R && R.__isVue;
    },
    body(R) {
      if (R && R.__isVue)
        return [
          "div",
          {},
          ...w(R.$)
        ];
    }
  };
  function w(R) {
    const V = [];
    R.type.props && R.props && V.push(P("props", Pt(R.props))), R.setupState !== Vt && V.push(P("setup", R.setupState)), R.data !== Vt && V.push(P("data", Pt(R.data)));
    const $ = T(R, "computed");
    $ && V.push(P("computed", $));
    const it = T(R, "inject");
    return it && V.push(P("injected", it)), V.push([
      "div",
      {},
      [
        "span",
        {
          style: f.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: R }]
    ]), V;
  }
  function P(R, V) {
    return V = $t({}, V), Object.keys(V).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        R
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(V).map(($) => [
          "div",
          {},
          ["span", f, $ + ": "],
          _(V[$], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function _(R, V = !0) {
    return typeof R == "number" ? ["span", l, R] : typeof R == "string" ? ["span", u, JSON.stringify(R)] : typeof R == "boolean" ? ["span", f, R] : Bt(R) ? ["object", { object: V ? Pt(R) : R }] : ["span", u, String(R)];
  }
  function T(R, V) {
    const $ = R.type;
    if (St($))
      return;
    const it = {};
    for (const lt in R.ctx)
      z($, lt, V) && (it[lt] = R.ctx[lt]);
    return it;
  }
  function z(R, V, $) {
    const it = R[$];
    if (vt(it) && it.includes(V) || Bt(it) && V in it || R.extends && z(R.extends, V, $) || R.mixins && R.mixins.some((lt) => z(lt, V, $)))
      return !0;
  }
  function D(R) {
    return Li(R) ? "ShallowRef" : R.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(v) : window.devtoolsFormatters = [v];
}
const bo = "3.4.29", ti = process.env.NODE_ENV !== "production" ? at : ee;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Od = "http://www.w3.org/2000/svg", Ld = "http://www.w3.org/1998/Math/MathML", Ke = typeof document < "u" ? document : null, vo = Ke && /* @__PURE__ */ Ke.createElement("template"), Id = {
  insert: (a, l, u) => {
    l.insertBefore(a, u || null);
  },
  remove: (a) => {
    const l = a.parentNode;
    l && l.removeChild(a);
  },
  createElement: (a, l, u, f) => {
    const v = l === "svg" ? Ke.createElementNS(Od, a) : l === "mathml" ? Ke.createElementNS(Ld, a) : u ? Ke.createElement(a, { is: u }) : Ke.createElement(a);
    return a === "select" && f && f.multiple != null && v.setAttribute("multiple", f.multiple), v;
  },
  createText: (a) => Ke.createTextNode(a),
  createComment: (a) => Ke.createComment(a),
  setText: (a, l) => {
    a.nodeValue = l;
  },
  setElementText: (a, l) => {
    a.textContent = l;
  },
  parentNode: (a) => a.parentNode,
  nextSibling: (a) => a.nextSibling,
  querySelector: (a) => Ke.querySelector(a),
  setScopeId(a, l) {
    a.setAttribute(l, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(a, l, u, f, v, w) {
    const P = u ? u.previousSibling : l.lastChild;
    if (v && (v === w || v.nextSibling))
      for (; l.insertBefore(v.cloneNode(!0), u), !(v === w || !(v = v.nextSibling)); )
        ;
    else {
      vo.innerHTML = f === "svg" ? `<svg>${a}</svg>` : f === "mathml" ? `<math>${a}</math>` : a;
      const _ = vo.content;
      if (f === "svg" || f === "mathml") {
        const T = _.firstChild;
        for (; T.firstChild; )
          _.appendChild(T.firstChild);
        _.removeChild(T);
      }
      l.insertBefore(_, u);
    }
    return [
      // first
      P ? P.nextSibling : l.firstChild,
      // last
      u ? u.previousSibling : l.lastChild
    ];
  }
}, Td = Symbol("_vtc");
function Md(a, l, u) {
  const f = a[Td];
  f && (l = (l ? [l, ...f] : [...f]).join(" ")), l == null ? a.removeAttribute("class") : u ? a.setAttribute("class", l) : a.className = l;
}
const yo = Symbol("_vod"), Dd = Symbol("_vsh");
process.env.NODE_ENV;
const Rd = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), zd = /(^|;)\s*display\s*:/;
function Fd(a, l, u) {
  const f = a.style, v = ie(u);
  let w = !1;
  if (u && !v) {
    if (l)
      if (ie(l))
        for (const P of l.split(";")) {
          const _ = P.slice(0, P.indexOf(":")).trim();
          u[_] == null && zs(f, _, "");
        }
      else
        for (const P in l)
          u[P] == null && zs(f, P, "");
    for (const P in u)
      P === "display" && (w = !0), zs(f, P, u[P]);
  } else if (v) {
    if (l !== u) {
      const P = f[Rd];
      P && (u += ";" + P), f.cssText = u, w = zd.test(u);
    }
  } else l && a.removeAttribute("style");
  yo in a && (a[yo] = w ? f.display : "", a[Dd] && (f.display = "none"));
}
const Xd = /[^\\];\s*$/, wo = /\s*!important$/;
function zs(a, l, u) {
  if (vt(u))
    u.forEach((f) => zs(a, l, f));
  else if (u == null && (u = ""), process.env.NODE_ENV !== "production" && Xd.test(u) && ti(
    `Unexpected semicolon at the end of '${l}' style value: '${u}'`
  ), l.startsWith("--"))
    a.setProperty(l, u);
  else {
    const f = Yd(a, l);
    wo.test(u) ? a.setProperty(
      we(f),
      u.replace(wo, ""),
      "important"
    ) : a[f] = u;
  }
}
const ko = ["Webkit", "Moz", "ms"], Sa = {};
function Yd(a, l) {
  const u = Sa[l];
  if (u)
    return u;
  let f = ke(l);
  if (f !== "filter" && f in a)
    return Sa[l] = f;
  f = Ri(f);
  for (let v = 0; v < ko.length; v++) {
    const w = ko[v] + f;
    if (w in a)
      return Sa[l] = w;
  }
  return l;
}
const Ao = "http://www.w3.org/1999/xlink";
function So(a, l, u, f, v, w = gc(l)) {
  f && l.startsWith("xlink:") ? u == null ? a.removeAttributeNS(Ao, l.slice(6, l.length)) : a.setAttributeNS(Ao, l, u) : u == null || w && !Qo(u) ? a.removeAttribute(l) : a.setAttribute(l, w ? "" : String(u));
}
function Hd(a, l, u, f, v, w, P) {
  if (l === "innerHTML" || l === "textContent") {
    f && P(f, v, w), a[l] = u ?? "";
    return;
  }
  const _ = a.tagName;
  if (l === "value" && _ !== "PROGRESS" && // custom elements may use _value internally
  !_.includes("-")) {
    const z = _ === "OPTION" ? a.getAttribute("value") || "" : a.value, D = u == null ? "" : String(u);
    (z !== D || !("_value" in a)) && (a.value = D), u == null && a.removeAttribute(l), a._value = u;
    return;
  }
  let T = !1;
  if (u === "" || u == null) {
    const z = typeof a[l];
    z === "boolean" ? u = Qo(u) : u == null && z === "string" ? (u = "", T = !0) : z === "number" && (u = 0, T = !0);
  }
  try {
    a[l] = u;
  } catch (z) {
    process.env.NODE_ENV !== "production" && !T && ti(
      `Failed setting prop "${l}" on <${_.toLowerCase()}>: value ${u} is invalid.`,
      z
    );
  }
  T && a.removeAttribute(l);
}
function Vd(a, l, u, f) {
  a.addEventListener(l, u, f);
}
function Wd(a, l, u, f) {
  a.removeEventListener(l, u, f);
}
const Co = Symbol("_vei");
function Bd(a, l, u, f, v = null) {
  const w = a[Co] || (a[Co] = {}), P = w[l];
  if (f && P)
    P.value = process.env.NODE_ENV !== "production" ? Po(f, l) : f;
  else {
    const [_, T] = Gd(l);
    if (f) {
      const z = w[l] = Ud(
        process.env.NODE_ENV !== "production" ? Po(f, l) : f,
        v
      );
      Vd(a, _, z, T);
    } else P && (Wd(a, _, P, T), w[l] = void 0);
  }
}
const Eo = /(?:Once|Passive|Capture)$/;
function Gd(a) {
  let l;
  if (Eo.test(a)) {
    l = {};
    let f;
    for (; f = a.match(Eo); )
      a = a.slice(0, a.length - f[0].length), l[f[0].toLowerCase()] = !0;
  }
  return [a[2] === ":" ? a.slice(3) : we(a.slice(2)), l];
}
let Ca = 0;
const jd = /* @__PURE__ */ Promise.resolve(), $d = () => Ca || (jd.then(() => Ca = 0), Ca = Date.now());
function Ud(a, l) {
  const u = (f) => {
    if (!f._vts)
      f._vts = Date.now();
    else if (f._vts <= u.attached)
      return;
    De(
      qd(f, u.value),
      l,
      5,
      [f]
    );
  };
  return u.value = a, u.attached = $d(), u;
}
function Po(a, l) {
  return St(a) || vt(a) ? a : (ti(
    `Wrong type passed as event handler to ${l} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof a}.`
  ), ee);
}
function qd(a, l) {
  if (vt(l)) {
    const u = a.stopImmediatePropagation;
    return a.stopImmediatePropagation = () => {
      u.call(a), a._stopped = !0;
    }, l.map(
      (f) => (v) => !v._stopped && f && f(v)
    );
  } else
    return l;
}
const _o = (a) => a.charCodeAt(0) === 111 && a.charCodeAt(1) === 110 && // lowercase letter
a.charCodeAt(2) > 96 && a.charCodeAt(2) < 123, Zd = (a, l, u, f, v, w, P, _, T) => {
  const z = v === "svg";
  l === "class" ? Md(a, f, z) : l === "style" ? Fd(a, u, f) : us(l) ? Hs(l) || Bd(a, l, u, f, P) : (l[0] === "." ? (l = l.slice(1), !0) : l[0] === "^" ? (l = l.slice(1), !1) : Kd(a, l, f, z)) ? (Hd(
    a,
    l,
    f,
    w,
    P,
    _,
    T
  ), (l === "value" || l === "checked" || l === "selected") && So(a, l, f, z, P, l !== "value")) : (l === "true-value" ? a._trueValue = f : l === "false-value" && (a._falseValue = f), So(a, l, f, z));
};
function Kd(a, l, u, f) {
  if (f)
    return !!(l === "innerHTML" || l === "textContent" || l in a && _o(l) && St(u));
  if (l === "spellcheck" || l === "draggable" || l === "translate" || l === "form" || l === "list" && a.tagName === "INPUT" || l === "type" && a.tagName === "TEXTAREA")
    return !1;
  if (l === "width" || l === "height") {
    const v = a.tagName;
    if (v === "IMG" || v === "VIDEO" || v === "CANVAS" || v === "SOURCE")
      return !1;
  }
  return _o(l) && ie(u) ? !1 : l in a;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Jd(a, l, u) {
  const f = /* @__PURE__ */ ca(a, l);
  class v extends Nr {
    constructor(P) {
      super(f, P, u);
    }
  }
  return v.def = f, v;
}
const Qd = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Nr extends Qd {
  constructor(l, u = {}, f) {
    super(), this._def = l, this._props = u, this._instance = null, this._connected = !1, this._resolved = !1, this._numberProps = null, this._ob = null, this.shadowRoot && f ? f(this._createVNode(), this.shadowRoot) : (process.env.NODE_ENV !== "production" && this.shadowRoot && ti(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), this.attachShadow({ mode: "open" }), this._def.__asyncLoader || this._resolveProps(this._def));
  }
  connectedCallback() {
    this._connected = !0, this._instance || (this._resolved ? this._update() : this._resolveDef());
  }
  disconnectedCallback() {
    this._connected = !1, ra(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), Oo(null, this.shadowRoot), this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    this._resolved = !0;
    for (let f = 0; f < this.attributes.length; f++)
      this._setAttr(this.attributes[f].name);
    this._ob = new MutationObserver((f) => {
      for (const v of f)
        this._setAttr(v.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const l = (f, v = !1) => {
      const { props: w, styles: P } = f;
      let _;
      if (w && !vt(w))
        for (const T in w) {
          const z = w[T];
          (z === Number || z && z.type === Number) && (T in this._props && (this._props[T] = Wr(this._props[T])), (_ || (_ = /* @__PURE__ */ Object.create(null)))[ke(T)] = !0);
        }
      this._numberProps = _, v && this._resolveProps(f), this._applyStyles(P), this._update();
    }, u = this._def.__asyncLoader;
    u ? u().then((f) => l(f, !0)) : l(this._def);
  }
  _resolveProps(l) {
    const { props: u } = l, f = vt(u) ? u : Object.keys(u || {});
    for (const v of Object.keys(this))
      v[0] !== "_" && f.includes(v) && this._setProp(v, this[v], !0, !1);
    for (const v of f.map(ke))
      Object.defineProperty(this, v, {
        get() {
          return this._getProp(v);
        },
        set(w) {
          this._setProp(v, w);
        }
      });
  }
  _setAttr(l) {
    let u = this.hasAttribute(l) ? this.getAttribute(l) : void 0;
    const f = ke(l);
    this._numberProps && this._numberProps[f] && (u = Wr(u)), this._setProp(f, u, !1);
  }
  /**
   * @internal
   */
  _getProp(l) {
    return this._props[l];
  }
  /**
   * @internal
   */
  _setProp(l, u, f = !0, v = !0) {
    u !== this._props[l] && (this._props[l] = u, v && this._instance && this._update(), f && (u === !0 ? this.setAttribute(we(l), "") : typeof u == "string" || typeof u == "number" ? this.setAttribute(we(l), u + "") : u || this.removeAttribute(we(l))));
  }
  _update() {
    Oo(this._createVNode(), this.shadowRoot);
  }
  _createVNode() {
    const l = xe(this._def, $t({}, this._props));
    return this._instance || (l.ce = (u) => {
      this._instance = u, u.isCE = !0, process.env.NODE_ENV !== "production" && (u.ceReload = (w) => {
        this._styles && (this._styles.forEach((P) => this.shadowRoot.removeChild(P)), this._styles.length = 0), this._applyStyles(w), this._instance = null, this._update();
      });
      const f = (w, P) => {
        this.dispatchEvent(
          new CustomEvent(w, {
            detail: P
          })
        );
      };
      u.emit = (w, ...P) => {
        f(w, P), we(w) !== w && f(we(w), P);
      };
      let v = this;
      for (; v = v && (v.parentNode || v.host); )
        if (v instanceof Nr) {
          u.parent = v._instance, u.provides = v._instance.provides;
          break;
        }
    }), l;
  }
  _applyStyles(l) {
    l && l.forEach((u) => {
      const f = document.createElement("style");
      f.textContent = u, this.shadowRoot.appendChild(f), process.env.NODE_ENV !== "production" && (this._styles || (this._styles = [])).push(f);
    });
  }
}
const tu = /* @__PURE__ */ $t({ patchProp: Zd }, Id);
let No;
function nl() {
  return No || (No = td(tu));
}
const Oo = (...a) => {
  nl().render(...a);
}, eu = (...a) => {
  const l = nl().createApp(...a);
  process.env.NODE_ENV !== "production" && (su(l), au(l));
  const { mount: u } = l;
  return l.mount = (f) => {
    const v = ru(f);
    if (!v) return;
    const w = l._component;
    !St(w) && !w.render && !w.template && (w.template = v.innerHTML), v.innerHTML = "";
    const P = u(v, !1, iu(v));
    return v instanceof Element && (v.removeAttribute("v-cloak"), v.setAttribute("data-v-app", "")), P;
  }, l;
};
function iu(a) {
  if (a instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && a instanceof MathMLElement)
    return "mathml";
}
function su(a) {
  Object.defineProperty(a.config, "isNativeTag", {
    value: (l) => hc(l) || dc(l) || uc(l),
    writable: !1
  });
}
function au(a) {
  {
    const l = a.config.isCustomElement;
    Object.defineProperty(a.config, "isCustomElement", {
      get() {
        return l;
      },
      set() {
        ti(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const u = a.config.compilerOptions, f = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(a.config, "compilerOptions", {
      get() {
        return ti(f), u;
      },
      set() {
        ti(f);
      }
    });
  }
}
function ru(a) {
  if (ie(a)) {
    const l = document.querySelector(a);
    return process.env.NODE_ENV !== "production" && !l && ti(
      `Failed to mount app: mount target selector "${a}" returned null.`
    ), l;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && a instanceof window.ShadowRoot && a.mode === "closed" && ti(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), a;
}
/**
* vue v3.4.29
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ou() {
  Nd();
}
process.env.NODE_ENV !== "production" && ou();
var nu = !1;
function lu() {
  return ll().__VUE_DEVTOOLS_GLOBAL_HOOK__;
}
function ll() {
  return typeof navigator < "u" && typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : {};
}
const cu = typeof Proxy == "function", hu = "devtools-plugin:setup", du = "plugin:settings:set";
let Yi, Ba;
function uu() {
  var a;
  return Yi !== void 0 || (typeof window < "u" && window.performance ? (Yi = !0, Ba = window.performance) : typeof globalThis < "u" && (!((a = globalThis.perf_hooks) === null || a === void 0) && a.performance) ? (Yi = !0, Ba = globalThis.perf_hooks.performance) : Yi = !1), Yi;
}
function fu() {
  return uu() ? Ba.now() : Date.now();
}
class gu {
  constructor(l, u) {
    this.target = null, this.targetQueue = [], this.onQueue = [], this.plugin = l, this.hook = u;
    const f = {};
    if (l.settings)
      for (const P in l.settings) {
        const _ = l.settings[P];
        f[P] = _.defaultValue;
      }
    const v = `__vue-devtools-plugin-settings__${l.id}`;
    let w = Object.assign({}, f);
    try {
      const P = localStorage.getItem(v), _ = JSON.parse(P);
      Object.assign(w, _);
    } catch {
    }
    this.fallbacks = {
      getSettings() {
        return w;
      },
      setSettings(P) {
        try {
          localStorage.setItem(v, JSON.stringify(P));
        } catch {
        }
        w = P;
      },
      now() {
        return fu();
      }
    }, u && u.on(du, (P, _) => {
      P === this.plugin.id && this.fallbacks.setSettings(_);
    }), this.proxiedOn = new Proxy({}, {
      get: (P, _) => this.target ? this.target.on[_] : (...T) => {
        this.onQueue.push({
          method: _,
          args: T
        });
      }
    }), this.proxiedTarget = new Proxy({}, {
      get: (P, _) => this.target ? this.target[_] : _ === "on" ? this.proxiedOn : Object.keys(this.fallbacks).includes(_) ? (...T) => (this.targetQueue.push({
        method: _,
        args: T,
        resolve: () => {
        }
      }), this.fallbacks[_](...T)) : (...T) => new Promise((z) => {
        this.targetQueue.push({
          method: _,
          args: T,
          resolve: z
        });
      })
    });
  }
  async setRealTarget(l) {
    this.target = l;
    for (const u of this.onQueue)
      this.target.on[u.method](...u.args);
    for (const u of this.targetQueue)
      u.resolve(await this.target[u.method](...u.args));
  }
}
function Or(a, l) {
  const u = a, f = ll(), v = lu(), w = cu && u.enableEarlyProxy;
  if (v && (f.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__ || !w))
    v.emit(hu, a, l);
  else {
    const P = w ? new gu(u, v) : null;
    (f.__VUE_DEVTOOLS_PLUGINS__ = f.__VUE_DEVTOOLS_PLUGINS__ || []).push({
      pluginDescriptor: u,
      setupFn: l,
      proxy: P
    }), P && l(P.proxiedTarget);
  }
}
/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
const pu = process.env.NODE_ENV !== "production" ? Symbol("pinia") : (
  /* istanbul ignore next */
  Symbol()
);
var Di;
(function(a) {
  a.direct = "direct", a.patchObject = "patch object", a.patchFunction = "patch function";
})(Di || (Di = {}));
const cl = typeof window < "u", Lo = (process.env.NODE_ENV !== "production" || !1) && process.env.NODE_ENV !== "test" && cl, Io = typeof window == "object" && window.window === window ? window : typeof self == "object" && self.self === self ? self : typeof global == "object" && global.global === global ? global : typeof globalThis == "object" ? globalThis : { HTMLElement: null };
function xu(a, { autoBom: l = !1 } = {}) {
  return l && /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type) ? new Blob(["\uFEFF", a], { type: a.type }) : a;
}
function Lr(a, l, u) {
  const f = new XMLHttpRequest();
  f.open("GET", a), f.responseType = "blob", f.onload = function() {
    ul(f.response, l, u);
  }, f.onerror = function() {
    console.error("could not download file");
  }, f.send();
}
function hl(a) {
  const l = new XMLHttpRequest();
  l.open("HEAD", a, !1);
  try {
    l.send();
  } catch {
  }
  return l.status >= 200 && l.status <= 299;
}
function Fs(a) {
  try {
    a.dispatchEvent(new MouseEvent("click"));
  } catch {
    const u = document.createEvent("MouseEvents");
    u.initMouseEvent("click", !0, !0, window, 0, 0, 0, 80, 20, !1, !1, !1, !1, 0, null), a.dispatchEvent(u);
  }
}
const Xs = typeof navigator == "object" ? navigator : { userAgent: "" }, dl = /Macintosh/.test(Xs.userAgent) && /AppleWebKit/.test(Xs.userAgent) && !/Safari/.test(Xs.userAgent), ul = cl ? (
  // Use download attribute first if possible (#193 Lumia mobile) unless this is a macOS WebView or mini program
  typeof HTMLAnchorElement < "u" && "download" in HTMLAnchorElement.prototype && !dl ? mu : (
    // Use msSaveOrOpenBlob as a second approach
    "msSaveOrOpenBlob" in Xs ? bu : (
      // Fallback to using FileReader and a popup
      vu
    )
  )
) : () => {
};
function mu(a, l = "download", u) {
  const f = document.createElement("a");
  f.download = l, f.rel = "noopener", typeof a == "string" ? (f.href = a, f.origin !== location.origin ? hl(f.href) ? Lr(a, l, u) : (f.target = "_blank", Fs(f)) : Fs(f)) : (f.href = URL.createObjectURL(a), setTimeout(function() {
    URL.revokeObjectURL(f.href);
  }, 4e4), setTimeout(function() {
    Fs(f);
  }, 0));
}
function bu(a, l = "download", u) {
  if (typeof a == "string")
    if (hl(a))
      Lr(a, l, u);
    else {
      const f = document.createElement("a");
      f.href = a, f.target = "_blank", setTimeout(function() {
        Fs(f);
      });
    }
  else
    navigator.msSaveOrOpenBlob(xu(a, u), l);
}
function vu(a, l, u, f) {
  if (f = f || open("", "_blank"), f && (f.document.title = f.document.body.innerText = "downloading..."), typeof a == "string")
    return Lr(a, l, u);
  const v = a.type === "application/octet-stream", w = /constructor/i.test(String(Io.HTMLElement)) || "safari" in Io, P = /CriOS\/[\d]+/.test(navigator.userAgent);
  if ((P || v && w || dl) && typeof FileReader < "u") {
    const _ = new FileReader();
    _.onloadend = function() {
      let T = _.result;
      if (typeof T != "string")
        throw f = null, new Error("Wrong reader.result type");
      T = P ? T : T.replace(/^data:[^;]*;/, "data:attachment/file;"), f ? f.location.href = T : location.assign(T), f = null;
    }, _.readAsDataURL(a);
  } else {
    const _ = URL.createObjectURL(a);
    f ? f.location.assign(_) : location.href = _, f = null, setTimeout(function() {
      URL.revokeObjectURL(_);
    }, 4e4);
  }
}
function le(a, l) {
  const u = "🍍 " + a;
  typeof __VUE_DEVTOOLS_TOAST__ == "function" ? __VUE_DEVTOOLS_TOAST__(u, l) : l === "error" ? console.error(u) : l === "warn" ? console.warn(u) : console.log(u);
}
function Ir(a) {
  return "_a" in a && "install" in a;
}
function fl() {
  if (!("clipboard" in navigator))
    return le("Your browser doesn't support the Clipboard API", "error"), !0;
}
function gl(a) {
  return a instanceof Error && a.message.toLowerCase().includes("document is not focused") ? (le('You need to activate the "Emulate a focused page" setting in the "Rendering" panel of devtools.', "warn"), !0) : !1;
}
async function yu(a) {
  if (!fl())
    try {
      await navigator.clipboard.writeText(JSON.stringify(a.state.value)), le("Global state copied to clipboard.");
    } catch (l) {
      if (gl(l))
        return;
      le("Failed to serialize the state. Check the console for more details.", "error"), console.error(l);
    }
}
async function wu(a) {
  if (!fl())
    try {
      pl(a, JSON.parse(await navigator.clipboard.readText())), le("Global state pasted from clipboard.");
    } catch (l) {
      if (gl(l))
        return;
      le("Failed to deserialize the state from clipboard. Check the console for more details.", "error"), console.error(l);
    }
}
async function ku(a) {
  try {
    ul(new Blob([JSON.stringify(a.state.value)], {
      type: "text/plain;charset=utf-8"
    }), "pinia-state.json");
  } catch (l) {
    le("Failed to export the state as JSON. Check the console for more details.", "error"), console.error(l);
  }
}
let $e;
function Au() {
  $e || ($e = document.createElement("input"), $e.type = "file", $e.accept = ".json");
  function a() {
    return new Promise((l, u) => {
      $e.onchange = async () => {
        const f = $e.files;
        if (!f)
          return l(null);
        const v = f.item(0);
        return l(v ? { text: await v.text(), file: v } : null);
      }, $e.oncancel = () => l(null), $e.onerror = u, $e.click();
    });
  }
  return a;
}
async function Su(a) {
  try {
    const u = await Au()();
    if (!u)
      return;
    const { text: f, file: v } = u;
    pl(a, JSON.parse(f)), le(`Global state imported from "${v.name}".`);
  } catch (l) {
    le("Failed to import the state from JSON. Check the console for more details.", "error"), console.error(l);
  }
}
function pl(a, l) {
  for (const u in l) {
    const f = a.state.value[u];
    f ? Object.assign(f, l[u]) : a.state.value[u] = l[u];
  }
}
function Ne(a) {
  return {
    _custom: {
      display: a
    }
  };
}
const xl = "🍍 Pinia (root)", Ga = "_root";
function Cu(a) {
  return Ir(a) ? {
    id: Ga,
    label: xl
  } : {
    id: a.$id,
    label: a.$id
  };
}
function Eu(a) {
  if (Ir(a)) {
    const u = Array.from(a._s.keys()), f = a._s;
    return {
      state: u.map((w) => ({
        editable: !0,
        key: w,
        value: a.state.value[w]
      })),
      getters: u.filter((w) => f.get(w)._getters).map((w) => {
        const P = f.get(w);
        return {
          editable: !1,
          key: w,
          value: P._getters.reduce((_, T) => (_[T] = P[T], _), {})
        };
      })
    };
  }
  const l = {
    state: Object.keys(a.$state).map((u) => ({
      editable: !0,
      key: u,
      value: a.$state[u]
    }))
  };
  return a._getters && a._getters.length && (l.getters = a._getters.map((u) => ({
    editable: !1,
    key: u,
    value: a[u]
  }))), a._customProperties.size && (l.customProperties = Array.from(a._customProperties).map((u) => ({
    editable: !0,
    key: u,
    value: a[u]
  }))), l;
}
function Pu(a) {
  return a ? Array.isArray(a) ? a.reduce((l, u) => (l.keys.push(u.key), l.operations.push(u.type), l.oldValue[u.key] = u.oldValue, l.newValue[u.key] = u.newValue, l), {
    oldValue: {},
    keys: [],
    operations: [],
    newValue: {}
  }) : {
    operation: Ne(a.type),
    key: Ne(a.key),
    oldValue: a.oldValue,
    newValue: a.newValue
  } : {};
}
function _u(a) {
  switch (a) {
    case Di.direct:
      return "mutation";
    case Di.patchFunction:
      return "$patch";
    case Di.patchObject:
      return "$patch";
    default:
      return "unknown";
  }
}
let Hi = !0;
const Ys = [], Ei = "pinia:mutations", fe = "pinia", { assign: Nu } = Object, qs = (a) => "🍍 " + a;
function Ou(a, l) {
  Or({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Ys,
    app: a
  }, (u) => {
    typeof u.now != "function" && le("You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), u.addTimelineLayer({
      id: Ei,
      label: "Pinia 🍍",
      color: 15064968
    }), u.addInspector({
      id: fe,
      label: "Pinia 🍍",
      icon: "storage",
      treeFilterPlaceholder: "Search stores",
      actions: [
        {
          icon: "content_copy",
          action: () => {
            yu(l);
          },
          tooltip: "Serialize and copy the state"
        },
        {
          icon: "content_paste",
          action: async () => {
            await wu(l), u.sendInspectorTree(fe), u.sendInspectorState(fe);
          },
          tooltip: "Replace the state with the content of your clipboard"
        },
        {
          icon: "save",
          action: () => {
            ku(l);
          },
          tooltip: "Save the state as a JSON file"
        },
        {
          icon: "folder_open",
          action: async () => {
            await Su(l), u.sendInspectorTree(fe), u.sendInspectorState(fe);
          },
          tooltip: "Import the state from a JSON file"
        }
      ],
      nodeActions: [
        {
          icon: "restore",
          tooltip: 'Reset the state (with "$reset")',
          action: (f) => {
            const v = l._s.get(f);
            v ? typeof v.$reset != "function" ? le(`Cannot reset "${f}" store because it doesn't have a "$reset" method implemented.`, "warn") : (v.$reset(), le(`Store "${f}" reset.`)) : le(`Cannot reset "${f}" store because it wasn't found.`, "warn");
          }
        }
      ]
    }), u.on.inspectComponent((f, v) => {
      const w = f.componentInstance && f.componentInstance.proxy;
      if (w && w._pStores) {
        const P = f.componentInstance.proxy._pStores;
        Object.values(P).forEach((_) => {
          f.instanceData.state.push({
            type: qs(_.$id),
            key: "state",
            editable: !0,
            value: _._isOptionsAPI ? {
              _custom: {
                value: Pt(_.$state),
                actions: [
                  {
                    icon: "restore",
                    tooltip: "Reset the state of this store",
                    action: () => _.$reset()
                  }
                ]
              }
            } : (
              // NOTE: workaround to unwrap transferred refs
              Object.keys(_.$state).reduce((T, z) => (T[z] = _.$state[z], T), {})
            )
          }), _._getters && _._getters.length && f.instanceData.state.push({
            type: qs(_.$id),
            key: "getters",
            editable: !1,
            value: _._getters.reduce((T, z) => {
              try {
                T[z] = _[z];
              } catch (D) {
                T[z] = D;
              }
              return T;
            }, {})
          });
        });
      }
    }), u.on.getInspectorTree((f) => {
      if (f.app === a && f.inspectorId === fe) {
        let v = [l];
        v = v.concat(Array.from(l._s.values())), f.rootNodes = (f.filter ? v.filter((w) => "$id" in w ? w.$id.toLowerCase().includes(f.filter.toLowerCase()) : xl.toLowerCase().includes(f.filter.toLowerCase())) : v).map(Cu);
      }
    }), u.on.getInspectorState((f) => {
      if (f.app === a && f.inspectorId === fe) {
        const v = f.nodeId === Ga ? l : l._s.get(f.nodeId);
        if (!v)
          return;
        v && (f.state = Eu(v));
      }
    }), u.on.editInspectorState((f, v) => {
      if (f.app === a && f.inspectorId === fe) {
        const w = f.nodeId === Ga ? l : l._s.get(f.nodeId);
        if (!w)
          return le(`store "${f.nodeId}" not found`, "error");
        const { path: P } = f;
        Ir(w) ? P.unshift("state") : (P.length !== 1 || !w._customProperties.has(P[0]) || P[0] in w.$state) && P.unshift("$state"), Hi = !1, f.set(w, P, f.state.value), Hi = !0;
      }
    }), u.on.editComponentState((f) => {
      if (f.type.startsWith("🍍")) {
        const v = f.type.replace(/^🍍\s*/, ""), w = l._s.get(v);
        if (!w)
          return le(`store "${v}" not found`, "error");
        const { path: P } = f;
        if (P[0] !== "state")
          return le(`Invalid path for store "${v}":
${P}
Only state can be modified.`);
        P[0] = "$state", Hi = !1, f.set(w, P, f.state.value), Hi = !0;
      }
    });
  });
}
function Lu(a, l) {
  Ys.includes(qs(l.$id)) || Ys.push(qs(l.$id)), Or({
    id: "dev.esm.pinia",
    label: "Pinia 🍍",
    logo: "https://pinia.vuejs.org/logo.svg",
    packageName: "pinia",
    homepage: "https://pinia.vuejs.org",
    componentStateTypes: Ys,
    app: a,
    settings: {
      logStoreChanges: {
        label: "Notify about new/deleted stores",
        type: "boolean",
        defaultValue: !0
      }
      // useEmojis: {
      //   label: 'Use emojis in messages ⚡️',
      //   type: 'boolean',
      //   defaultValue: true,
      // },
    }
  }, (u) => {
    const f = typeof u.now == "function" ? u.now.bind(u) : Date.now;
    l.$onAction(({ after: P, onError: _, name: T, args: z }) => {
      const D = ml++;
      u.addTimelineEvent({
        layerId: Ei,
        event: {
          time: f(),
          title: "🛫 " + T,
          subtitle: "start",
          data: {
            store: Ne(l.$id),
            action: Ne(T),
            args: z
          },
          groupId: D
        }
      }), P((R) => {
        pi = void 0, u.addTimelineEvent({
          layerId: Ei,
          event: {
            time: f(),
            title: "🛬 " + T,
            subtitle: "end",
            data: {
              store: Ne(l.$id),
              action: Ne(T),
              args: z,
              result: R
            },
            groupId: D
          }
        });
      }), _((R) => {
        pi = void 0, u.addTimelineEvent({
          layerId: Ei,
          event: {
            time: f(),
            logType: "error",
            title: "💥 " + T,
            subtitle: "end",
            data: {
              store: Ne(l.$id),
              action: Ne(T),
              args: z,
              error: R
            },
            groupId: D
          }
        });
      });
    }, !0), l._customProperties.forEach((P) => {
      Ie(() => gi(l[P]), (_, T) => {
        u.notifyComponentUpdate(), u.sendInspectorState(fe), Hi && u.addTimelineEvent({
          layerId: Ei,
          event: {
            time: f(),
            title: "Change",
            subtitle: P,
            data: {
              newValue: _,
              oldValue: T
            },
            groupId: pi
          }
        });
      }, { deep: !0 });
    }), l.$subscribe(({ events: P, type: _ }, T) => {
      if (u.notifyComponentUpdate(), u.sendInspectorState(fe), !Hi)
        return;
      const z = {
        time: f(),
        title: _u(_),
        data: Nu({ store: Ne(l.$id) }, Pu(P)),
        groupId: pi
      };
      _ === Di.patchFunction ? z.subtitle = "⤵️" : _ === Di.patchObject ? z.subtitle = "🧩" : P && !Array.isArray(P) && (z.subtitle = P.type), P && (z.data["rawEvent(s)"] = {
        _custom: {
          display: "DebuggerEvent",
          type: "object",
          tooltip: "raw DebuggerEvent[]",
          value: P
        }
      }), u.addTimelineEvent({
        layerId: Ei,
        event: z
      });
    }, { detached: !0, flush: "sync" });
    const v = l._hotUpdate;
    l._hotUpdate = hr((P) => {
      v(P), u.addTimelineEvent({
        layerId: Ei,
        event: {
          time: f(),
          title: "🔥 " + l.$id,
          subtitle: "HMR update",
          data: {
            store: Ne(l.$id),
            info: Ne("HMR update")
          }
        }
      }), u.notifyComponentUpdate(), u.sendInspectorTree(fe), u.sendInspectorState(fe);
    });
    const { $dispose: w } = l;
    l.$dispose = () => {
      w(), u.notifyComponentUpdate(), u.sendInspectorTree(fe), u.sendInspectorState(fe), u.getSettings().logStoreChanges && le(`Disposed "${l.$id}" store 🗑`);
    }, u.notifyComponentUpdate(), u.sendInspectorTree(fe), u.sendInspectorState(fe), u.getSettings().logStoreChanges && le(`"${l.$id}" store installed 🆕`);
  });
}
let ml = 0, pi;
function To(a, l, u) {
  const f = l.reduce((v, w) => (v[w] = Pt(a)[w], v), {});
  for (const v in f)
    a[v] = function() {
      const w = ml, P = u ? new Proxy(a, {
        get(...T) {
          return pi = w, Reflect.get(...T);
        },
        set(...T) {
          return pi = w, Reflect.set(...T);
        }
      }) : a;
      pi = w;
      const _ = f[v].apply(P, arguments);
      return pi = void 0, _;
    };
}
function Iu({ app: a, store: l, options: u }) {
  if (l.$id.startsWith("__hot:"))
    return;
  l._isOptionsAPI = !!u.state, To(l, Object.keys(u.actions), l._isOptionsAPI);
  const f = l._hotUpdate;
  Pt(l)._hotUpdate = function(v) {
    f.apply(this, arguments), To(l, Object.keys(v._hmrPayload.actions), !!l._isOptionsAPI);
  }, Lu(
    a,
    // FIXME: is there a way to allow the assignment from Store<Id, S, G, A> to StoreGeneric?
    l
  );
}
function Tu() {
  const a = pc(!0), l = a.run(() => fi({}));
  let u = [], f = [];
  const v = hr({
    install(w) {
      v._a = w, w.provide(pu, v), w.config.globalProperties.$pinia = v, Lo && Ou(w, v), f.forEach((P) => u.push(P)), f = [];
    },
    use(w) {
      return !this._a && !nu ? f.push(w) : u.push(w), this;
    },
    _p: u,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: a,
    _s: /* @__PURE__ */ new Map(),
    state: l
  });
  return Lo && typeof Proxy < "u" && v.use(Iu), v;
}
process.env.NODE_ENV !== "production" ? Symbol("pinia:skipHydration") : (
  /* istanbul ignore next */
  Symbol()
);
function Mu(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var ja = { exports: {} };
/*!
 * ApexCharts v3.45.2
 * (c) 2018-2024 ApexCharts
 * Released under the MIT License.
 */
(function(a, l) {
  function u(E, t) {
    var e = Object.keys(E);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(E);
      t && (i = i.filter(function(s) {
        return Object.getOwnPropertyDescriptor(E, s).enumerable;
      })), e.push.apply(e, i);
    }
    return e;
  }
  function f(E) {
    for (var t = 1; t < arguments.length; t++) {
      var e = arguments[t] != null ? arguments[t] : {};
      t % 2 ? u(Object(e), !0).forEach(function(i) {
        T(E, i, e[i]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(E, Object.getOwnPropertyDescriptors(e)) : u(Object(e)).forEach(function(i) {
        Object.defineProperty(E, i, Object.getOwnPropertyDescriptor(e, i));
      });
    }
    return E;
  }
  function v(E) {
    return v = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
      return typeof t;
    } : function(t) {
      return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
    }, v(E);
  }
  function w(E, t) {
    if (!(E instanceof t))
      throw new TypeError("Cannot call a class as a function");
  }
  function P(E, t) {
    for (var e = 0; e < t.length; e++) {
      var i = t[e];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(E, i.key, i);
    }
  }
  function _(E, t, e) {
    return t && P(E.prototype, t), e && P(E, e), E;
  }
  function T(E, t, e) {
    return t in E ? Object.defineProperty(E, t, { value: e, enumerable: !0, configurable: !0, writable: !0 }) : E[t] = e, E;
  }
  function z(E, t) {
    if (typeof t != "function" && t !== null)
      throw new TypeError("Super expression must either be null or a function");
    E.prototype = Object.create(t && t.prototype, { constructor: { value: E, writable: !0, configurable: !0 } }), t && R(E, t);
  }
  function D(E) {
    return D = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
      return t.__proto__ || Object.getPrototypeOf(t);
    }, D(E);
  }
  function R(E, t) {
    return R = Object.setPrototypeOf || function(e, i) {
      return e.__proto__ = i, e;
    }, R(E, t);
  }
  function V(E) {
    if (E === void 0)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return E;
  }
  function $(E) {
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
      var e, i = D(E);
      if (t) {
        var s = D(this).constructor;
        e = Reflect.construct(i, arguments, s);
      } else
        e = i.apply(this, arguments);
      return function(r, o) {
        if (o && (typeof o == "object" || typeof o == "function"))
          return o;
        if (o !== void 0)
          throw new TypeError("Derived constructors may only return object or undefined");
        return V(r);
      }(this, e);
    };
  }
  function it(E, t) {
    return function(e) {
      if (Array.isArray(e))
        return e;
    }(E) || function(e, i) {
      var s = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
      if (s != null) {
        var r, o, n = [], c = !0, d = !1;
        try {
          for (s = s.call(e); !(c = (r = s.next()).done) && (n.push(r.value), !i || n.length !== i); c = !0)
            ;
        } catch (g) {
          d = !0, o = g;
        } finally {
          try {
            c || s.return == null || s.return();
          } finally {
            if (d)
              throw o;
          }
        }
        return n;
      }
    }(E, t) || Lt(E, t) || function() {
      throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function lt(E) {
    return function(t) {
      if (Array.isArray(t))
        return ut(t);
    }(E) || function(t) {
      if (typeof Symbol < "u" && t[Symbol.iterator] != null || t["@@iterator"] != null)
        return Array.from(t);
    }(E) || Lt(E) || function() {
      throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }();
  }
  function Lt(E, t) {
    if (E) {
      if (typeof E == "string")
        return ut(E, t);
      var e = Object.prototype.toString.call(E).slice(8, -1);
      return e === "Object" && E.constructor && (e = E.constructor.name), e === "Map" || e === "Set" ? Array.from(E) : e === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? ut(E, t) : void 0;
    }
  }
  function ut(E, t) {
    (t == null || t > E.length) && (t = E.length);
    for (var e = 0, i = new Array(t); e < t; e++)
      i[e] = E[e];
    return i;
  }
  var F = function() {
    function E() {
      w(this, E);
    }
    return _(E, [{ key: "shadeRGBColor", value: function(t, e) {
      var i = e.split(","), s = t < 0 ? 0 : 255, r = t < 0 ? -1 * t : t, o = parseInt(i[0].slice(4), 10), n = parseInt(i[1], 10), c = parseInt(i[2], 10);
      return "rgb(" + (Math.round((s - o) * r) + o) + "," + (Math.round((s - n) * r) + n) + "," + (Math.round((s - c) * r) + c) + ")";
    } }, { key: "shadeHexColor", value: function(t, e) {
      var i = parseInt(e.slice(1), 16), s = t < 0 ? 0 : 255, r = t < 0 ? -1 * t : t, o = i >> 16, n = i >> 8 & 255, c = 255 & i;
      return "#" + (16777216 + 65536 * (Math.round((s - o) * r) + o) + 256 * (Math.round((s - n) * r) + n) + (Math.round((s - c) * r) + c)).toString(16).slice(1);
    } }, { key: "shadeColor", value: function(t, e) {
      return E.isColorHex(e) ? this.shadeHexColor(t, e) : this.shadeRGBColor(t, e);
    } }], [{ key: "bind", value: function(t, e) {
      return function() {
        return t.apply(e, arguments);
      };
    } }, { key: "isObject", value: function(t) {
      return t && v(t) === "object" && !Array.isArray(t) && t != null;
    } }, { key: "is", value: function(t, e) {
      return Object.prototype.toString.call(e) === "[object " + t + "]";
    } }, { key: "listToArray", value: function(t) {
      var e, i = [];
      for (e = 0; e < t.length; e++)
        i[e] = t[e];
      return i;
    } }, { key: "extend", value: function(t, e) {
      var i = this;
      typeof Object.assign != "function" && (Object.assign = function(r) {
        if (r == null)
          throw new TypeError("Cannot convert undefined or null to object");
        for (var o = Object(r), n = 1; n < arguments.length; n++) {
          var c = arguments[n];
          if (c != null)
            for (var d in c)
              c.hasOwnProperty(d) && (o[d] = c[d]);
        }
        return o;
      });
      var s = Object.assign({}, t);
      return this.isObject(t) && this.isObject(e) && Object.keys(e).forEach(function(r) {
        i.isObject(e[r]) && r in t ? s[r] = i.extend(t[r], e[r]) : Object.assign(s, T({}, r, e[r]));
      }), s;
    } }, { key: "extendArray", value: function(t, e) {
      var i = [];
      return t.map(function(s) {
        i.push(E.extend(e, s));
      }), t = i;
    } }, { key: "monthMod", value: function(t) {
      return t % 12;
    } }, { key: "clone", value: function(t) {
      if (E.is("Array", t)) {
        for (var e = [], i = 0; i < t.length; i++)
          e[i] = this.clone(t[i]);
        return e;
      }
      if (E.is("Null", t))
        return null;
      if (E.is("Date", t))
        return t;
      if (v(t) === "object") {
        var s = {};
        for (var r in t)
          t.hasOwnProperty(r) && (s[r] = this.clone(t[r]));
        return s;
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
      var i = "", s = t < 0 ? "-" : "", r = e[0].replace(".", ""), o = Number(e[1]) + 1;
      if (o < 0) {
        for (i = s + "0."; o++; )
          i += "0";
        return i + r.replace(/^-/, "");
      }
      for (o -= r.length; o--; )
        i += "0";
      return r + i;
    } }, { key: "getDimensions", value: function(t) {
      var e = getComputedStyle(t, null), i = t.clientHeight, s = t.clientWidth;
      return i -= parseFloat(e.paddingTop) + parseFloat(e.paddingBottom), [s -= parseFloat(e.paddingLeft) + parseFloat(e.paddingRight), i];
    } }, { key: "getBoundingClientRect", value: function(t) {
      var e = t.getBoundingClientRect();
      return { top: e.top, right: e.right, bottom: e.bottom, left: e.left, width: t.clientWidth, height: t.clientHeight, x: e.left, y: e.top };
    } }, { key: "getLargestStringFromArr", value: function(t) {
      return t.reduce(function(e, i) {
        return Array.isArray(i) && (i = i.reduce(function(s, r) {
          return s.length > r.length ? s : r;
        })), e.length > i.length ? e : i;
      }, 0);
    } }, { key: "hexToRgba", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "#999999", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0.6;
      t.substring(0, 1) !== "#" && (t = "#999999");
      var i = t.replace("#", "");
      i = i.match(new RegExp("(.{" + i.length / 3 + "})", "g"));
      for (var s = 0; s < i.length; s++)
        i[s] = parseInt(i[s].length === 1 ? i[s] + i[s] : i[s], 16);
      return e !== void 0 && i.push(e), "rgba(" + i.join(",") + ")";
    } }, { key: "getOpacityFromRGBA", value: function(t) {
      return parseFloat(t.replace(/^.*,(.+)\)/, "$1"));
    } }, { key: "rgb2hex", value: function(t) {
      return (t = t.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i)) && t.length === 4 ? "#" + ("0" + parseInt(t[1], 10).toString(16)).slice(-2) + ("0" + parseInt(t[2], 10).toString(16)).slice(-2) + ("0" + parseInt(t[3], 10).toString(16)).slice(-2) : "";
    } }, { key: "isColorHex", value: function(t) {
      return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)|(^#[0-9A-F]{8}$)/i.test(t);
    } }, { key: "getPolygonPos", value: function(t, e) {
      for (var i = [], s = 2 * Math.PI / e, r = 0; r < e; r++) {
        var o = {};
        o.x = t * Math.sin(r * s), o.y = -t * Math.cos(r * s), i.push(o);
      }
      return i;
    } }, { key: "polarToCartesian", value: function(t, e, i, s) {
      var r = (s - 90) * Math.PI / 180;
      return { x: t + i * Math.cos(r), y: e + i * Math.sin(r) };
    } }, { key: "escapeString", value: function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x", i = t.toString().slice();
      return i = i.replace(/[` ~!@#$%^&*()|+\=?;:'",.<>{}[\]\\/]/gi, e);
    } }, { key: "negToZero", value: function(t) {
      return t < 0 ? 0 : t;
    } }, { key: "moveIndexInArray", value: function(t, e, i) {
      if (i >= t.length)
        for (var s = i - t.length + 1; s--; )
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
      var s = t.indexOf("Edge/");
      return s > 0 && parseInt(t.substring(s + 5, t.indexOf(".", s)), 10);
    } }]), E;
  }(), mt = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w, this.setEasingFunctions();
    }
    return _(E, [{ key: "setEasingFunctions", value: function() {
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
    } }, { key: "animateLine", value: function(t, e, i, s) {
      t.attr(e).animate(s).attr(i);
    } }, { key: "animateMarker", value: function(t, e, i, s, r, o) {
      e || (e = 0), t.attr({ r: e, width: e, height: e }).animate(s, r).attr({ r: i, width: i.width, height: i.height }).afterAll(function() {
        o();
      });
    } }, { key: "animateCircle", value: function(t, e, i, s, r) {
      t.attr({ r: e.r, cx: e.cx, cy: e.cy }).animate(s, r).attr({ r: i.r, cx: i.cx, cy: i.cy });
    } }, { key: "animateRect", value: function(t, e, i, s, r) {
      t.attr(e).animate(s).attr(i).afterAll(function() {
        return r();
      });
    } }, { key: "animatePathsGradually", value: function(t) {
      var e = t.el, i = t.realIndex, s = t.j, r = t.fill, o = t.pathFrom, n = t.pathTo, c = t.speed, d = t.delay, g = this.w, p = 0;
      g.config.chart.animations.animateGradually.enabled && (p = g.config.chart.animations.animateGradually.delay), g.config.chart.animations.dynamicAnimation.enabled && g.globals.dataChanged && g.config.chart.type !== "bar" && (p = 0), this.morphSVG(e, i, s, g.config.chart.type !== "line" || g.globals.comboCharts ? r : "stroke", o, n, c, d * p);
    } }, { key: "showDelayedElements", value: function() {
      this.w.globals.delayedElements.forEach(function(t) {
        var e = t.el;
        e.classList.remove("apexcharts-element-hidden"), e.classList.add("apexcharts-hidden-element-shown");
      });
    } }, { key: "animationCompleted", value: function(t) {
      var e = this.w;
      e.globals.animationEnded || (e.globals.animationEnded = !0, this.showDelayedElements(), typeof e.config.chart.events.animationEnd == "function" && e.config.chart.events.animationEnd(this.ctx, { el: t, w: e }));
    } }, { key: "morphSVG", value: function(t, e, i, s, r, o, n, c) {
      var d = this, g = this.w;
      r || (r = t.attr("pathFrom")), o || (o = t.attr("pathTo"));
      var p = function(x) {
        return g.config.chart.type === "radar" && (n = 1), "M 0 ".concat(g.globals.gridHeight);
      };
      (!r || r.indexOf("undefined") > -1 || r.indexOf("NaN") > -1) && (r = p()), (!o || o.indexOf("undefined") > -1 || o.indexOf("NaN") > -1) && (o = p()), g.globals.shouldAnimate || (n = 1), t.plot(r).animate(1, g.globals.easing, c).plot(r).animate(n, g.globals.easing, c).plot(o).afterAll(function() {
        F.isNumber(i) ? i === g.globals.series[g.globals.maxValsInArrayIndex].length - 2 && g.globals.shouldAnimate && d.animationCompleted(t) : s !== "none" && g.globals.shouldAnimate && (!g.globals.comboCharts && e === g.globals.series.length - 1 || g.globals.comboCharts) && d.animationCompleted(t), d.showDelayedElements();
      });
    } }]), E;
  }(), pt = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "getDefaultFilter", value: function(t, e) {
      var i = this.w;
      t.unfilter(!0), new window.SVG.Filter().size("120%", "180%", "-5%", "-40%"), i.config.states.normal.filter !== "none" ? this.applyFilter(t, e, i.config.states.normal.filter.type, i.config.states.normal.filter.value) : i.config.chart.dropShadow.enabled && this.dropShadow(t, i.config.chart.dropShadow, e);
    } }, { key: "addNormalFilter", value: function(t, e) {
      var i = this.w;
      i.config.chart.dropShadow.enabled && !t.node.classList.contains("apexcharts-marker") && this.dropShadow(t, i.config.chart.dropShadow, e);
    } }, { key: "addLightenFilter", value: function(t, e, i) {
      var s = this, r = this.w, o = i.intensity;
      t.unfilter(!0), new window.SVG.Filter(), t.filter(function(n) {
        var c = r.config.chart.dropShadow;
        (c.enabled ? s.addShadow(n, e, c) : n).componentTransfer({ rgb: { type: "linear", slope: 1.5, intercept: o } });
      }), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node);
    } }, { key: "addDarkenFilter", value: function(t, e, i) {
      var s = this, r = this.w, o = i.intensity;
      t.unfilter(!0), new window.SVG.Filter(), t.filter(function(n) {
        var c = r.config.chart.dropShadow;
        (c.enabled ? s.addShadow(n, e, c) : n).componentTransfer({ rgb: { type: "linear", slope: o } });
      }), t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node);
    } }, { key: "applyFilter", value: function(t, e, i) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0.5;
      switch (i) {
        case "none":
          this.addNormalFilter(t, e);
          break;
        case "lighten":
          this.addLightenFilter(t, e, { intensity: s });
          break;
        case "darken":
          this.addDarkenFilter(t, e, { intensity: s });
      }
    } }, { key: "addShadow", value: function(t, e, i) {
      var s = i.blur, r = i.top, o = i.left, n = i.color, c = i.opacity, d = t.flood(Array.isArray(n) ? n[e] : n, c).composite(t.sourceAlpha, "in").offset(o, r).gaussianBlur(s).merge(t.source);
      return t.blend(t.source, d);
    } }, { key: "dropShadow", value: function(t, e) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, s = e.top, r = e.left, o = e.blur, n = e.color, c = e.opacity, d = e.noUserSpaceOnUse, g = this.w;
      return t.unfilter(!0), F.isIE() && g.config.chart.type === "radialBar" || (n = Array.isArray(n) ? n[i] : n, t.filter(function(p) {
        var x = null;
        x = F.isSafari() || F.isFirefox() || F.isIE() ? p.flood(n, c).composite(p.sourceAlpha, "in").offset(r, s).gaussianBlur(o) : p.flood(n, c).composite(p.sourceAlpha, "in").offset(r, s).gaussianBlur(o).merge(p.source), p.blend(p.source, x);
      }), d || t.filterer.node.setAttribute("filterUnits", "userSpaceOnUse"), this._scaleFilterSize(t.filterer.node)), t;
    } }, { key: "setSelectionFilter", value: function(t, e, i) {
      var s = this.w;
      if (s.globals.selectedDataPoints[e] !== void 0 && s.globals.selectedDataPoints[e].indexOf(i) > -1) {
        t.node.setAttribute("selected", !0);
        var r = s.config.states.active.filter;
        r !== "none" && this.applyFilter(t, e, r.type, r.value);
      }
    } }, { key: "_scaleFilterSize", value: function(t) {
      (function(e) {
        for (var i in e)
          e.hasOwnProperty(i) && t.setAttribute(i, e[i]);
      })({ width: "200%", height: "200%", x: "-50%", y: "-50%" });
    } }]), E;
  }(), B = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "roundPathCorners", value: function(t, e) {
      function i(I, X, Y) {
        var W = X.x - I.x, q = X.y - I.y, U = Math.sqrt(W * W + q * q);
        return s(I, X, Math.min(1, Y / U));
      }
      function s(I, X, Y) {
        return { x: I.x + (X.x - I.x) * Y, y: I.y + (X.y - I.y) * Y };
      }
      function r(I, X) {
        I.length > 2 && (I[I.length - 2] = X.x, I[I.length - 1] = X.y);
      }
      function o(I) {
        return { x: parseFloat(I[I.length - 2]), y: parseFloat(I[I.length - 1]) };
      }
      t.indexOf("NaN") > -1 && (t = "");
      var n = t.split(/[,\s]/).reduce(function(I, X) {
        var Y = X.match("([a-zA-Z])(.+)");
        return Y ? (I.push(Y[1]), I.push(Y[2])) : I.push(X), I;
      }, []).reduce(function(I, X) {
        return parseFloat(X) == X && I.length ? I[I.length - 1].push(X) : I.push([X]), I;
      }, []), c = [];
      if (n.length > 1) {
        var d = o(n[0]), g = null;
        n[n.length - 1][0] == "Z" && n[0].length > 2 && (g = ["L", d.x, d.y], n[n.length - 1] = g), c.push(n[0]);
        for (var p = 1; p < n.length; p++) {
          var x = c[c.length - 1], b = n[p], y = b == g ? n[1] : n[p + 1];
          if (y && x && x.length > 2 && b[0] == "L" && y.length > 2 && y[0] == "L") {
            var A, S, N = o(x), L = o(b), h = o(y);
            A = i(L, N, e), S = i(L, h, e), r(b, A), b.origPoint = L, c.push(b);
            var m = s(A, L, 0.5), k = s(L, S, 0.5), C = ["C", m.x, m.y, k.x, k.y, S.x, S.y];
            C.origPoint = L, c.push(C);
          } else
            c.push(b);
        }
        if (g) {
          var O = o(c[c.length - 1]);
          c.push(["Z"]), r(c[0], O);
        }
      } else
        c = n;
      return c.reduce(function(I, X) {
        return I + X.join(" ") + " ";
      }, "");
    } }, { key: "drawLine", value: function(t, e, i, s) {
      var r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : "#a8a8a8", o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0, n = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : "butt";
      return this.w.globals.dom.Paper.line().attr({ x1: t, y1: e, x2: i, y2: s, stroke: r, "stroke-dasharray": o, "stroke-width": n, "stroke-linecap": c });
    } }, { key: "drawRect", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0, o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "#fefefe", n = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 1, c = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null, d = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : null, g = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : 0, p = this.w.globals.dom.Paper.rect();
      return p.attr({ x: t, y: e, width: i > 0 ? i : 0, height: s > 0 ? s : 0, rx: r, ry: r, opacity: n, "stroke-width": c !== null ? c : 0, stroke: d !== null ? d : "none", "stroke-dasharray": g }), p.node.setAttribute("fill", o), p;
    } }, { key: "drawPolygon", value: function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "#e1e1e1", i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "none";
      return this.w.globals.dom.Paper.polygon(t).attr({ fill: s, stroke: e, "stroke-width": i });
    } }, { key: "drawCircle", value: function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
      t < 0 && (t = 0);
      var i = this.w.globals.dom.Paper.circle(2 * t);
      return e !== null && i.attr(e), i;
    } }, { key: "drawPath", value: function(t) {
      var e = t.d, i = e === void 0 ? "" : e, s = t.stroke, r = s === void 0 ? "#a8a8a8" : s, o = t.strokeWidth, n = o === void 0 ? 1 : o, c = t.fill, d = t.fillOpacity, g = d === void 0 ? 1 : d, p = t.strokeOpacity, x = p === void 0 ? 1 : p, b = t.classes, y = t.strokeLinecap, A = y === void 0 ? null : y, S = t.strokeDashArray, N = S === void 0 ? 0 : S, L = this.w;
      return A === null && (A = L.config.stroke.lineCap), (i.indexOf("undefined") > -1 || i.indexOf("NaN") > -1) && (i = "M 0 ".concat(L.globals.gridHeight)), L.globals.dom.Paper.path(i).attr({ fill: c, "fill-opacity": g, stroke: r, "stroke-opacity": x, "stroke-linecap": A, "stroke-width": n, "stroke-dasharray": N, class: b });
    } }, { key: "group", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, e = this.w.globals.dom.Paper.group();
      return t !== null && e.attr(t), e;
    } }, { key: "move", value: function(t, e) {
      var i = ["M", t, e].join(" ");
      return i;
    } }, { key: "line", value: function(t, e) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, s = null;
      return i === null ? s = [" L", t, e].join(" ") : i === "H" ? s = [" H", t].join(" ") : i === "V" && (s = [" V", e].join(" ")), s;
    } }, { key: "curve", value: function(t, e, i, s, r, o) {
      var n = ["C", t, e, i, s, r, o].join(" ");
      return n;
    } }, { key: "quadraticCurve", value: function(t, e, i, s) {
      return ["Q", t, e, i, s].join(" ");
    } }, { key: "arc", value: function(t, e, i, s, r, o, n) {
      var c = "A";
      arguments.length > 7 && arguments[7] !== void 0 && arguments[7] && (c = "a");
      var d = [c, t, e, i, s, r, o, n].join(" ");
      return d;
    } }, { key: "renderPaths", value: function(t) {
      var e, i = t.j, s = t.realIndex, r = t.pathFrom, o = t.pathTo, n = t.stroke, c = t.strokeWidth, d = t.strokeLinecap, g = t.fill, p = t.animationDelay, x = t.initialSpeed, b = t.dataChangeSpeed, y = t.className, A = t.shouldClipToGrid, S = A === void 0 || A, N = t.bindEventsOnPaths, L = N === void 0 || N, h = t.drawShadow, m = h === void 0 || h, k = this.w, C = new pt(this.ctx), O = new mt(this.ctx), I = this.w.config.chart.animations.enabled, X = I && this.w.config.chart.animations.dynamicAnimation.enabled, Y = !!(I && !k.globals.resized || X && k.globals.dataChanged && k.globals.shouldAnimate);
      Y ? e = r : (e = o, k.globals.animationEnded = !0);
      var W = k.config.stroke.dashArray, q = 0;
      q = Array.isArray(W) ? W[s] : k.config.stroke.dashArray;
      var U = this.drawPath({ d: e, stroke: n, strokeWidth: c, fill: g, fillOpacity: 1, classes: y, strokeLinecap: d, strokeDashArray: q });
      if (U.attr("index", s), S && U.attr({ "clip-path": "url(#gridRectMask".concat(k.globals.cuid, ")") }), k.config.states.normal.filter.type !== "none")
        C.getDefaultFilter(U, s);
      else if (k.config.chart.dropShadow.enabled && m && (!k.config.chart.dropShadow.enabledOnSeries || k.config.chart.dropShadow.enabledOnSeries && k.config.chart.dropShadow.enabledOnSeries.indexOf(s) !== -1)) {
        var st = k.config.chart.dropShadow;
        C.dropShadow(U, st, s);
      }
      L && (U.node.addEventListener("mouseenter", this.pathMouseEnter.bind(this, U)), U.node.addEventListener("mouseleave", this.pathMouseLeave.bind(this, U)), U.node.addEventListener("mousedown", this.pathMouseDown.bind(this, U))), U.attr({ pathTo: o, pathFrom: r });
      var dt = { el: U, j: i, realIndex: s, pathFrom: r, pathTo: o, fill: g, strokeWidth: c, delay: p };
      return !I || k.globals.resized || k.globals.dataChanged ? !k.globals.resized && k.globals.dataChanged || O.showDelayedElements() : O.animatePathsGradually(f(f({}, dt), {}, { speed: x })), k.globals.dataChanged && X && Y && O.animatePathsGradually(f(f({}, dt), {}, { speed: b })), U;
    } }, { key: "drawPattern", value: function(t, e, i) {
      var s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : "#a8a8a8", r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0;
      return this.w.globals.dom.Paper.pattern(e, i, function(o) {
        t === "horizontalLines" ? o.line(0, 0, i, 0).stroke({ color: s, width: r + 1 }) : t === "verticalLines" ? o.line(0, 0, 0, e).stroke({ color: s, width: r + 1 }) : t === "slantedLines" ? o.line(0, 0, e, i).stroke({ color: s, width: r }) : t === "squares" ? o.rect(e, i).fill("none").stroke({ color: s, width: r }) : t === "circles" && o.circle(e).fill("none").stroke({ color: s, width: r });
      });
    } }, { key: "drawGradient", value: function(t, e, i, s, r) {
      var o, n = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, c = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : null, d = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : null, g = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : 0, p = this.w;
      e.length < 9 && e.indexOf("#") === 0 && (e = F.hexToRgba(e, s)), i.length < 9 && i.indexOf("#") === 0 && (i = F.hexToRgba(i, r));
      var x = 0, b = 1, y = 1, A = null;
      c !== null && (x = c[0] !== void 0 ? c[0] / 100 : 0, b = c[1] !== void 0 ? c[1] / 100 : 1, y = c[2] !== void 0 ? c[2] / 100 : 1, A = c[3] !== void 0 ? c[3] / 100 : null);
      var S = !(p.config.chart.type !== "donut" && p.config.chart.type !== "pie" && p.config.chart.type !== "polarArea" && p.config.chart.type !== "bubble");
      if (o = d === null || d.length === 0 ? p.globals.dom.Paper.gradient(S ? "radial" : "linear", function(h) {
        h.at(x, e, s), h.at(b, i, r), h.at(y, i, r), A !== null && h.at(A, e, s);
      }) : p.globals.dom.Paper.gradient(S ? "radial" : "linear", function(h) {
        (Array.isArray(d[g]) ? d[g] : d).forEach(function(m) {
          h.at(m.offset / 100, m.color, m.opacity);
        });
      }), S) {
        var N = p.globals.gridWidth / 2, L = p.globals.gridHeight / 2;
        p.config.chart.type !== "bubble" ? o.attr({ gradientUnits: "userSpaceOnUse", cx: N, cy: L, r: n }) : o.attr({ cx: 0.5, cy: 0.5, r: 0.8, fx: 0.2, fy: 0.2 });
      } else
        t === "vertical" ? o.from(0, 0).to(0, 1) : t === "diagonal" ? o.from(0, 0).to(1, 1) : t === "horizontal" ? o.from(0, 1).to(1, 1) : t === "diagonal2" && o.from(1, 0).to(0, 1);
      return o;
    } }, { key: "getTextBasedOnMaxWidth", value: function(t) {
      var e = t.text, i = t.maxWidth, s = t.fontSize, r = t.fontFamily, o = this.getTextRects(e, s, r), n = o.width / e.length, c = Math.floor(i / n);
      return i < o.width ? e.slice(0, c - 3) + "..." : e;
    } }, { key: "drawText", value: function(t) {
      var e = this, i = t.x, s = t.y, r = t.text, o = t.textAnchor, n = t.fontSize, c = t.fontFamily, d = t.fontWeight, g = t.foreColor, p = t.opacity, x = t.maxWidth, b = t.cssClass, y = b === void 0 ? "" : b, A = t.isPlainText, S = A === void 0 || A, N = t.dominantBaseline, L = N === void 0 ? "auto" : N, h = this.w;
      r === void 0 && (r = "");
      var m = r;
      o || (o = "start"), g && g.length || (g = h.config.chart.foreColor), c = c || h.config.chart.fontFamily, d = d || "regular";
      var k, C = { maxWidth: x, fontSize: n = n || "11px", fontFamily: c };
      return Array.isArray(r) ? k = h.globals.dom.Paper.text(function(O) {
        for (var I = 0; I < r.length; I++)
          m = r[I], x && (m = e.getTextBasedOnMaxWidth(f({ text: r[I] }, C))), I === 0 ? O.tspan(m) : O.tspan(m).newLine();
      }) : (x && (m = this.getTextBasedOnMaxWidth(f({ text: r }, C))), k = S ? h.globals.dom.Paper.plain(r) : h.globals.dom.Paper.text(function(O) {
        return O.tspan(m);
      })), k.attr({ x: i, y: s, "text-anchor": o, "dominant-baseline": L, "font-size": n, "font-family": c, "font-weight": d, fill: g, class: "apexcharts-text " + y }), k.node.style.fontFamily = c, k.node.style.opacity = p, k;
    } }, { key: "drawMarker", value: function(t, e, i) {
      t = t || 0;
      var s = i.pSize || 0, r = null;
      if (i.shape === "square" || i.shape === "rect") {
        var o = i.pRadius === void 0 ? s / 2 : i.pRadius;
        e !== null && s || (s = 0, o = 0);
        var n = 1.2 * s + o, c = this.drawRect(n, n, n, n, o);
        c.attr({ x: t - n / 2, y: e - n / 2, cx: t, cy: e, class: i.class ? i.class : "", fill: i.pointFillColor, "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1, stroke: i.pointStrokeColor, "stroke-width": i.pointStrokeWidth ? i.pointStrokeWidth : 0, "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1 }), r = c;
      } else
        i.shape !== "circle" && i.shape || (F.isNumber(e) || (s = 0, e = 0), r = this.drawCircle(s, { cx: t, cy: e, class: i.class ? i.class : "", stroke: i.pointStrokeColor, fill: i.pointFillColor, "fill-opacity": i.pointFillOpacity ? i.pointFillOpacity : 1, "stroke-width": i.pointStrokeWidth ? i.pointStrokeWidth : 0, "stroke-opacity": i.pointStrokeOpacity ? i.pointStrokeOpacity : 1 }));
      return r;
    } }, { key: "pathMouseEnter", value: function(t, e) {
      var i = this.w, s = new pt(this.ctx), r = parseInt(t.node.getAttribute("index"), 10), o = parseInt(t.node.getAttribute("j"), 10);
      if (typeof i.config.chart.events.dataPointMouseEnter == "function" && i.config.chart.events.dataPointMouseEnter(e, this.ctx, { seriesIndex: r, dataPointIndex: o, w: i }), this.ctx.events.fireEvent("dataPointMouseEnter", [e, this.ctx, { seriesIndex: r, dataPointIndex: o, w: i }]), (i.config.states.active.filter.type === "none" || t.node.getAttribute("selected") !== "true") && i.config.states.hover.filter.type !== "none" && !i.globals.isTouchDevice) {
        var n = i.config.states.hover.filter;
        s.applyFilter(t, r, n.type, n.value);
      }
    } }, { key: "pathMouseLeave", value: function(t, e) {
      var i = this.w, s = new pt(this.ctx), r = parseInt(t.node.getAttribute("index"), 10), o = parseInt(t.node.getAttribute("j"), 10);
      typeof i.config.chart.events.dataPointMouseLeave == "function" && i.config.chart.events.dataPointMouseLeave(e, this.ctx, { seriesIndex: r, dataPointIndex: o, w: i }), this.ctx.events.fireEvent("dataPointMouseLeave", [e, this.ctx, { seriesIndex: r, dataPointIndex: o, w: i }]), i.config.states.active.filter.type !== "none" && t.node.getAttribute("selected") === "true" || i.config.states.hover.filter.type !== "none" && s.getDefaultFilter(t, r);
    } }, { key: "pathMouseDown", value: function(t, e) {
      var i = this.w, s = new pt(this.ctx), r = parseInt(t.node.getAttribute("index"), 10), o = parseInt(t.node.getAttribute("j"), 10), n = "false";
      if (t.node.getAttribute("selected") === "true") {
        if (t.node.setAttribute("selected", "false"), i.globals.selectedDataPoints[r].indexOf(o) > -1) {
          var c = i.globals.selectedDataPoints[r].indexOf(o);
          i.globals.selectedDataPoints[r].splice(c, 1);
        }
      } else {
        if (!i.config.states.active.allowMultipleDataPointsSelection && i.globals.selectedDataPoints.length > 0) {
          i.globals.selectedDataPoints = [];
          var d = i.globals.dom.Paper.select(".apexcharts-series path").members, g = i.globals.dom.Paper.select(".apexcharts-series circle, .apexcharts-series rect").members, p = function(y) {
            Array.prototype.forEach.call(y, function(A) {
              A.node.setAttribute("selected", "false"), s.getDefaultFilter(A, r);
            });
          };
          p(d), p(g);
        }
        t.node.setAttribute("selected", "true"), n = "true", i.globals.selectedDataPoints[r] === void 0 && (i.globals.selectedDataPoints[r] = []), i.globals.selectedDataPoints[r].push(o);
      }
      if (n === "true") {
        var x = i.config.states.active.filter;
        if (x !== "none")
          s.applyFilter(t, r, x.type, x.value);
        else if (i.config.states.hover.filter !== "none" && !i.globals.isTouchDevice) {
          var b = i.config.states.hover.filter;
          s.applyFilter(t, r, b.type, b.value);
        }
      } else
        i.config.states.active.filter.type !== "none" && (i.config.states.hover.filter.type === "none" || i.globals.isTouchDevice ? s.getDefaultFilter(t, r) : (b = i.config.states.hover.filter, s.applyFilter(t, r, b.type, b.value)));
      typeof i.config.chart.events.dataPointSelection == "function" && i.config.chart.events.dataPointSelection(e, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: r, dataPointIndex: o, w: i }), e && this.ctx.events.fireEvent("dataPointSelection", [e, this.ctx, { selectedDataPoints: i.globals.selectedDataPoints, seriesIndex: r, dataPointIndex: o, w: i }]);
    } }, { key: "rotateAroundCenter", value: function(t) {
      var e = {};
      return t && typeof t.getBBox == "function" && (e = t.getBBox()), { x: e.x + e.width / 2, y: e.y + e.height / 2 };
    } }, { key: "getTextRects", value: function(t, e, i, s) {
      var r = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], o = this.w, n = this.drawText({ x: -200, y: -200, text: t, textAnchor: "start", fontSize: e, fontFamily: i, foreColor: "#fff", opacity: 0 });
      s && n.attr("transform", s), o.globals.dom.Paper.add(n);
      var c = n.bbox();
      return r || (c = n.node.getBoundingClientRect()), n.remove(), { width: c.width, height: c.height };
    } }, { key: "placeTextWithEllipsis", value: function(t, e, i) {
      if (typeof t.getComputedTextLength == "function" && (t.textContent = e, e.length > 0 && t.getComputedTextLength() >= i / 1.1)) {
        for (var s = e.length - 3; s > 0; s -= 3)
          if (t.getSubStringLength(0, s) <= i / 1.1)
            return void (t.textContent = e.substring(0, s) + "...");
        t.textContent = ".";
      }
    } }], [{ key: "setAttrs", value: function(t, e) {
      for (var i in e)
        e.hasOwnProperty(i) && t.setAttribute(i, e[i]);
    } }]), E;
  }(), _t = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "getStackedSeriesTotals", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = this.w, i = [];
      if (e.globals.series.length === 0)
        return i;
      for (var s = 0; s < e.globals.series[e.globals.maxValsInArrayIndex].length; s++) {
        for (var r = 0, o = 0; o < e.globals.series.length; o++)
          e.globals.series[o][s] !== void 0 && t.indexOf(o) === -1 && (r += e.globals.series[o][s]);
        i.push(r);
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
      return e.globals.seriesGroups.forEach(function(s) {
        var r = [];
        e.config.series.forEach(function(n, c) {
          s.indexOf(n.name) > -1 && r.push(c);
        });
        var o = e.globals.series.map(function(n, c) {
          return r.indexOf(c) === -1 ? c : -1;
        }).filter(function(n) {
          return n !== -1;
        });
        i.push(t.getStackedSeriesTotals(o));
      }), i;
    } }, { key: "isSeriesNull", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null;
      return (t === null ? this.w.config.series.filter(function(e) {
        return e !== null;
      }) : this.w.config.series[t].data.filter(function(e) {
        return e !== null;
      })).length === 0;
    } }, { key: "seriesHaveSameValues", value: function(t) {
      return this.w.globals.series[t].every(function(e, i, s) {
        return e === s[0];
      });
    } }, { key: "getCategoryLabels", value: function(t) {
      var e = this.w, i = t.slice();
      return e.config.xaxis.convertedCatToNumeric && (i = t.map(function(s, r) {
        return e.config.xaxis.labels.formatter(s - e.globals.minX + 1);
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
        var s = 0;
        if (Array.isArray(e))
          for (var r = 0; r < e.length; r++)
            s += e[r];
        else
          s += e;
        return s;
      });
    } }, { key: "getSeriesTotalsXRange", value: function(t, e) {
      var i = this.w;
      return i.globals.series.map(function(s, r) {
        for (var o = 0, n = 0; n < s.length; n++)
          i.globals.seriesX[r][n] > t && i.globals.seriesX[r][n] < e && (o += s[n]);
        return o;
      });
    } }, { key: "getPercentSeries", value: function() {
      var t = this.w;
      t.globals.seriesPercent = t.globals.series.map(function(e, i) {
        var s = [];
        if (Array.isArray(e))
          for (var r = 0; r < e.length; r++) {
            var o = t.globals.stackedSeriesTotals[r], n = 0;
            o && (n = 100 * e[r] / o), s.push(n);
          }
        else {
          var c = 100 * e / t.globals.seriesTotals.reduce(function(d, g) {
            return d + g;
          }, 0);
          s.push(c);
        }
        return s;
      });
    } }, { key: "getCalculatedRatios", value: function() {
      var t, e, i, s = this.w.globals, r = [], o = 0, n = [], c = 0.1, d = 0;
      if (s.yRange = [], s.isMultipleYAxis)
        for (var g = 0; g < s.minYArr.length; g++)
          s.yRange.push(Math.abs(s.minYArr[g] - s.maxYArr[g])), n.push(0);
      else
        s.yRange.push(Math.abs(s.minY - s.maxY));
      s.xRange = Math.abs(s.maxX - s.minX), s.zRange = Math.abs(s.maxZ - s.minZ);
      for (var p = 0; p < s.yRange.length; p++)
        r.push(s.yRange[p] / s.gridHeight);
      if (e = s.xRange / s.gridWidth, t = s.yRange / s.gridWidth, i = s.xRange / s.gridHeight, (o = s.zRange / s.gridHeight * 16) || (o = 1), s.minY !== Number.MIN_VALUE && Math.abs(s.minY) !== 0 && (s.hasNegs = !0), s.isMultipleYAxis) {
        n = [];
        for (var x = 0; x < r.length; x++)
          n.push(-s.minYArr[x] / r[x]);
      } else
        n.push(-s.minY / r[0]), s.minY !== Number.MIN_VALUE && Math.abs(s.minY) !== 0 && (c = -s.minY / t, d = s.minX / e);
      return { yRatio: r, invertedYRatio: t, zRatio: o, xRatio: e, invertedXRatio: i, baseLineInvertedY: c, baseLineY: n, baseLineX: d };
    } }, { key: "getLogSeries", value: function(t) {
      var e = this, i = this.w;
      return i.globals.seriesLog = t.map(function(s, r) {
        return i.config.yaxis[r] && i.config.yaxis[r].logarithmic ? s.map(function(o) {
          return o === null ? null : e.getLogVal(i.config.yaxis[r].logBase, o, r);
        }) : s;
      }), i.globals.invalidLogScale ? t : i.globals.seriesLog;
    } }, { key: "getBaseLog", value: function(t, e) {
      return Math.log(e) / Math.log(t);
    } }, { key: "getLogVal", value: function(t, e, i) {
      if (e === 0)
        return 0;
      var s = this.w, r = s.globals.minYArr[i] === 0 ? -1 : this.getBaseLog(t, s.globals.minYArr[i]), o = (s.globals.maxYArr[i] === 0 ? 0 : this.getBaseLog(t, s.globals.maxYArr[i])) - r;
      return e < 1 ? e / o : (this.getBaseLog(t, e) - r) / o;
    } }, { key: "getLogYRatios", value: function(t) {
      var e = this, i = this.w, s = this.w.globals;
      return s.yLogRatio = t.slice(), s.logYRange = s.yRange.map(function(r, o) {
        if (i.config.yaxis[o] && e.w.config.yaxis[o].logarithmic) {
          var n, c = -Number.MAX_VALUE, d = Number.MIN_VALUE;
          return s.seriesLog.forEach(function(g, p) {
            g.forEach(function(x) {
              i.config.yaxis[p] && i.config.yaxis[p].logarithmic && (c = Math.max(x, c), d = Math.min(x, d));
            });
          }), n = Math.pow(s.yRange[o], Math.abs(d - c) / s.yRange[o]), s.yLogRatio[o] = n / s.gridHeight, n;
        }
      }), s.invalidLogScale ? t.slice() : s.yLogRatio;
    } }], [{ key: "checkComboSeries", value: function(t) {
      var e = !1, i = 0, s = 0;
      return t.length && t[0].type !== void 0 && t.forEach(function(r) {
        r.type !== "bar" && r.type !== "column" && r.type !== "candlestick" && r.type !== "boxPlot" || i++, r.type !== void 0 && s++;
      }), s > 0 && (e = !0), { comboBarCount: i, comboCharts: e };
    } }, { key: "extendArrayProps", value: function(t, e, i) {
      return e.yaxis && (e = t.extendYAxis(e, i)), e.annotations && (e.annotations.yaxis && (e = t.extendYAxisAnnotations(e)), e.annotations.xaxis && (e = t.extendXAxisAnnotations(e)), e.annotations.points && (e = t.extendPointAnnotations(e))), e;
    } }]), E;
  }(), yt = function() {
    function E(t) {
      w(this, E), this.w = t.w, this.annoCtx = t;
    }
    return _(E, [{ key: "setOrientations", value: function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, i = this.w;
      if (t.label.orientation === "vertical") {
        var s = e !== null ? e : 0, r = i.globals.dom.baseEl.querySelector(".apexcharts-xaxis-annotations .apexcharts-xaxis-annotation-label[rel='".concat(s, "']"));
        if (r !== null) {
          var o = r.getBoundingClientRect();
          r.setAttribute("x", parseFloat(r.getAttribute("x")) - o.height + 4), t.label.position === "top" ? r.setAttribute("y", parseFloat(r.getAttribute("y")) + o.width) : r.setAttribute("y", parseFloat(r.getAttribute("y")) - o.width);
          var n = this.annoCtx.graphics.rotateAroundCenter(r), c = n.x, d = n.y;
          r.setAttribute("transform", "rotate(-90 ".concat(c, " ").concat(d, ")"));
        }
      }
    } }, { key: "addBackgroundToAnno", value: function(t, e) {
      var i = this.w;
      if (!t || e.label.text === void 0 || e.label.text !== void 0 && !String(e.label.text).trim())
        return null;
      var s = i.globals.dom.baseEl.querySelector(".apexcharts-grid").getBoundingClientRect(), r = t.getBoundingClientRect(), o = e.label.style.padding.left, n = e.label.style.padding.right, c = e.label.style.padding.top, d = e.label.style.padding.bottom;
      e.label.orientation === "vertical" && (c = e.label.style.padding.left, d = e.label.style.padding.right, o = e.label.style.padding.top, n = e.label.style.padding.bottom);
      var g = r.left - s.left - o, p = r.top - s.top - c, x = this.annoCtx.graphics.drawRect(g - i.globals.barPadForNumericAxis, p, r.width + o + n, r.height + c + d, e.label.borderRadius, e.label.style.background, 1, e.label.borderWidth, e.label.borderColor, 0);
      return e.id && x.node.classList.add(e.id), x;
    } }, { key: "annotationsBackground", value: function() {
      var t = this, e = this.w, i = function(s, r, o) {
        var n = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(o, "-annotations .apexcharts-").concat(o, "-annotation-label[rel='").concat(r, "']"));
        if (n) {
          var c = n.parentNode, d = t.addBackgroundToAnno(n, s);
          d && (c.insertBefore(d.node, n), s.label.mouseEnter && d.node.addEventListener("mouseenter", s.label.mouseEnter.bind(t, s)), s.label.mouseLeave && d.node.addEventListener("mouseleave", s.label.mouseLeave.bind(t, s)), s.label.click && d.node.addEventListener("click", s.label.click.bind(t, s)));
        }
      };
      e.config.annotations.xaxis.map(function(s, r) {
        i(s, r, "xaxis");
      }), e.config.annotations.yaxis.map(function(s, r) {
        i(s, r, "yaxis");
      }), e.config.annotations.points.map(function(s, r) {
        i(s, r, "point");
      });
    } }, { key: "getY1Y2", value: function(t, e) {
      var i, s = t === "y1" ? e.y : e.y2, r = this.w;
      if (this.annoCtx.invertAxis) {
        var o = r.globals.labels.indexOf(s);
        r.config.xaxis.convertedCatToNumeric && (o = r.globals.categoryLabels.indexOf(s));
        var n = r.globals.dom.baseEl.querySelector(".apexcharts-yaxis-texts-g text:nth-child(" + (o + 1) + ")");
        n && (i = parseFloat(n.getAttribute("y"))), e.seriesIndex !== void 0 && r.globals.barHeight && (i = i - r.globals.barHeight / 2 * (r.globals.series.length - 1) + r.globals.barHeight * e.seriesIndex);
      } else {
        var c;
        r.config.yaxis[e.yAxisIndex].logarithmic ? c = (s = new _t(this.annoCtx.ctx).getLogVal(s, e.yAxisIndex)) / r.globals.yLogRatio[e.yAxisIndex] : c = (s - r.globals.minYArr[e.yAxisIndex]) / (r.globals.yRange[e.yAxisIndex] / r.globals.gridHeight), i = r.globals.gridHeight - c, !e.marker || e.y !== void 0 && e.y !== null || (i = 0), r.config.yaxis[e.yAxisIndex] && r.config.yaxis[e.yAxisIndex].reversed && (i = c);
      }
      return typeof s == "string" && s.indexOf("px") > -1 && (i = parseFloat(s)), i;
    } }, { key: "getX1X2", value: function(t, e) {
      var i = this.w, s = this.annoCtx.invertAxis ? i.globals.minY : i.globals.minX, r = this.annoCtx.invertAxis ? i.globals.maxY : i.globals.maxX, o = this.annoCtx.invertAxis ? i.globals.yRange[0] : i.globals.xRange, n = (e.x - s) / (o / i.globals.gridWidth);
      this.annoCtx.inversedReversedAxis && (n = (r - e.x) / (o / i.globals.gridWidth)), i.config.xaxis.type !== "category" && !i.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i.globals.dataFormatXNumeric || (n = this.getStringX(e.x));
      var c = (e.x2 - s) / (o / i.globals.gridWidth);
      return this.annoCtx.inversedReversedAxis && (c = (r - e.x2) / (o / i.globals.gridWidth)), i.config.xaxis.type !== "category" && !i.config.xaxis.convertedCatToNumeric || this.annoCtx.invertAxis || i.globals.dataFormatXNumeric || (c = this.getStringX(e.x2)), e.x !== void 0 && e.x !== null || !e.marker || (n = i.globals.gridWidth), t === "x1" && typeof e.x == "string" && e.x.indexOf("px") > -1 && (n = parseFloat(e.x)), t === "x2" && typeof e.x2 == "string" && e.x2.indexOf("px") > -1 && (c = parseFloat(e.x2)), e.seriesIndex !== void 0 && i.globals.barWidth && !this.annoCtx.invertAxis && (n = n - i.globals.barWidth / 2 * (i.globals.series.length - 1) + i.globals.barWidth * e.seriesIndex), t === "x1" ? n : c;
    } }, { key: "getStringX", value: function(t) {
      var e = this.w, i = t;
      e.config.xaxis.convertedCatToNumeric && e.globals.categoryLabels.length && (t = e.globals.categoryLabels.indexOf(t) + 1);
      var s = e.globals.labels.indexOf(t), r = e.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g text:nth-child(" + (s + 1) + ")");
      return r && (i = parseFloat(r.getAttribute("x"))), i;
    } }]), E;
  }(), Jt = function() {
    function E(t) {
      w(this, E), this.w = t.w, this.annoCtx = t, this.invertAxis = this.annoCtx.invertAxis, this.helpers = new yt(this.annoCtx);
    }
    return _(E, [{ key: "addXaxisAnnotation", value: function(t, e, i) {
      var s, r = this.w, o = this.helpers.getX1X2("x1", t), n = t.label.text, c = t.strokeDashArray;
      if (F.isNumber(o)) {
        if (t.x2 === null || t.x2 === void 0) {
          var d = this.annoCtx.graphics.drawLine(o + t.offsetX, 0 + t.offsetY, o + t.offsetX, r.globals.gridHeight + t.offsetY, t.borderColor, c, t.borderWidth);
          e.appendChild(d.node), t.id && d.node.classList.add(t.id);
        } else {
          if ((s = this.helpers.getX1X2("x2", t)) < o) {
            var g = o;
            o = s, s = g;
          }
          var p = this.annoCtx.graphics.drawRect(o + t.offsetX, 0 + t.offsetY, s - o, r.globals.gridHeight + t.offsetY, 0, t.fillColor, t.opacity, 1, t.borderColor, c);
          p.node.classList.add("apexcharts-annotation-rect"), p.attr("clip-path", "url(#gridRectMask".concat(r.globals.cuid, ")")), e.appendChild(p.node), t.id && p.node.classList.add(t.id);
        }
        var x = this.annoCtx.graphics.getTextRects(n, parseFloat(t.label.style.fontSize)), b = t.label.position === "top" ? 4 : t.label.position === "center" ? r.globals.gridHeight / 2 + (t.label.orientation === "vertical" ? x.width / 2 : 0) : r.globals.gridHeight, y = this.annoCtx.graphics.drawText({ x: o + t.label.offsetX, y: b + t.label.offsetY - (t.label.orientation === "vertical" ? t.label.position === "top" ? x.width / 2 - 12 : -x.width / 2 : 0), text: n, textAnchor: t.label.textAnchor, fontSize: t.label.style.fontSize, fontFamily: t.label.style.fontFamily, fontWeight: t.label.style.fontWeight, foreColor: t.label.style.color, cssClass: "apexcharts-xaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "") });
        y.attr({ rel: i }), e.appendChild(y.node), this.annoCtx.helpers.setOrientations(t, i);
      }
    } }, { key: "drawXAxisAnnotations", value: function() {
      var t = this, e = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-xaxis-annotations" });
      return e.config.annotations.xaxis.map(function(s, r) {
        t.addXaxisAnnotation(s, i.node, r);
      }), i;
    } }]), E;
  }(), Ut = function() {
    function E(t) {
      w(this, E), this.w = t.w, this.annoCtx = t, this.helpers = new yt(this.annoCtx);
    }
    return _(E, [{ key: "addYaxisAnnotation", value: function(t, e, i) {
      var s, r = this.w, o = t.strokeDashArray, n = this.helpers.getY1Y2("y1", t), c = t.label.text;
      if (t.y2 === null || t.y2 === void 0) {
        var d = this.annoCtx.graphics.drawLine(0 + t.offsetX, n + t.offsetY, this._getYAxisAnnotationWidth(t), n + t.offsetY, t.borderColor, o, t.borderWidth);
        e.appendChild(d.node), t.id && d.node.classList.add(t.id);
      } else {
        if ((s = this.helpers.getY1Y2("y2", t)) > n) {
          var g = n;
          n = s, s = g;
        }
        var p = this.annoCtx.graphics.drawRect(0 + t.offsetX, s + t.offsetY, this._getYAxisAnnotationWidth(t), n - s, 0, t.fillColor, t.opacity, 1, t.borderColor, o);
        p.node.classList.add("apexcharts-annotation-rect"), p.attr("clip-path", "url(#gridRectMask".concat(r.globals.cuid, ")")), e.appendChild(p.node), t.id && p.node.classList.add(t.id);
      }
      var x = t.label.position === "right" ? r.globals.gridWidth : t.label.position === "center" ? r.globals.gridWidth / 2 : 0, b = this.annoCtx.graphics.drawText({ x: x + t.label.offsetX, y: (s ?? n) + t.label.offsetY - 3, text: c, textAnchor: t.label.textAnchor, fontSize: t.label.style.fontSize, fontFamily: t.label.style.fontFamily, fontWeight: t.label.style.fontWeight, foreColor: t.label.style.color, cssClass: "apexcharts-yaxis-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "") });
      b.attr({ rel: i }), e.appendChild(b.node);
    } }, { key: "_getYAxisAnnotationWidth", value: function(t) {
      var e = this.w;
      return e.globals.gridWidth, (t.width.indexOf("%") > -1 ? e.globals.gridWidth * parseInt(t.width, 10) / 100 : parseInt(t.width, 10)) + t.offsetX;
    } }, { key: "drawYAxisAnnotations", value: function() {
      var t = this, e = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-yaxis-annotations" });
      return e.config.annotations.yaxis.map(function(s, r) {
        t.addYaxisAnnotation(s, i.node, r);
      }), i;
    } }]), E;
  }(), se = function() {
    function E(t) {
      w(this, E), this.w = t.w, this.annoCtx = t, this.helpers = new yt(this.annoCtx);
    }
    return _(E, [{ key: "addPointAnnotation", value: function(t, e, i) {
      this.w;
      var s = this.helpers.getX1X2("x1", t), r = this.helpers.getY1Y2("y1", t);
      if (F.isNumber(s)) {
        var o = { pSize: t.marker.size, pointStrokeWidth: t.marker.strokeWidth, pointFillColor: t.marker.fillColor, pointStrokeColor: t.marker.strokeColor, shape: t.marker.shape, pRadius: t.marker.radius, class: "apexcharts-point-annotation-marker ".concat(t.marker.cssClass, " ").concat(t.id ? t.id : "") }, n = this.annoCtx.graphics.drawMarker(s + t.marker.offsetX, r + t.marker.offsetY, o);
        e.appendChild(n.node);
        var c = t.label.text ? t.label.text : "", d = this.annoCtx.graphics.drawText({ x: s + t.label.offsetX, y: r + t.label.offsetY - t.marker.size - parseFloat(t.label.style.fontSize) / 1.6, text: c, textAnchor: t.label.textAnchor, fontSize: t.label.style.fontSize, fontFamily: t.label.style.fontFamily, fontWeight: t.label.style.fontWeight, foreColor: t.label.style.color, cssClass: "apexcharts-point-annotation-label ".concat(t.label.style.cssClass, " ").concat(t.id ? t.id : "") });
        if (d.attr({ rel: i }), e.appendChild(d.node), t.customSVG.SVG) {
          var g = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations-custom-svg " + t.customSVG.cssClass });
          g.attr({ transform: "translate(".concat(s + t.customSVG.offsetX, ", ").concat(r + t.customSVG.offsetY, ")") }), g.node.innerHTML = t.customSVG.SVG, e.appendChild(g.node);
        }
        if (t.image.path) {
          var p = t.image.width ? t.image.width : 20, x = t.image.height ? t.image.height : 20;
          n = this.annoCtx.addImage({ x: s + t.image.offsetX - p / 2, y: r + t.image.offsetY - x / 2, width: p, height: x, path: t.image.path, appendTo: ".apexcharts-point-annotations" });
        }
        t.mouseEnter && n.node.addEventListener("mouseenter", t.mouseEnter.bind(this, t)), t.mouseLeave && n.node.addEventListener("mouseleave", t.mouseLeave.bind(this, t)), t.click && n.node.addEventListener("click", t.click.bind(this, t));
      }
    } }, { key: "drawPointAnnotations", value: function() {
      var t = this, e = this.w, i = this.annoCtx.graphics.group({ class: "apexcharts-point-annotations" });
      return e.config.annotations.points.map(function(s, r) {
        t.addPointAnnotation(s, i.node, r);
      }), i;
    } }]), E;
  }(), gt = { name: "en", options: { months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], toolbar: { exportToSVG: "Download SVG", exportToPNG: "Download PNG", exportToCSV: "Download CSV", menu: "Menu", selection: "Selection", selectionZoom: "Selection Zoom", zoomIn: "Zoom In", zoomOut: "Zoom Out", pan: "Panning", reset: "Reset Zoom" } } }, wt = function() {
    function E() {
      w(this, E), this.yAxis = { show: !0, showAlways: !1, showForNullSeries: !0, seriesName: void 0, opposite: !1, reversed: !1, logarithmic: !1, logBase: 10, tickAmount: void 0, stepSize: void 0, forceNiceScale: !1, max: void 0, min: void 0, floating: !1, decimalsInFloat: void 0, labels: { show: !0, minWidth: 0, maxWidth: 160, offsetX: 0, offsetY: 0, align: void 0, rotate: 0, padding: 20, style: { colors: [], fontSize: "11px", fontWeight: 400, fontFamily: void 0, cssClass: "" }, formatter: void 0 }, axisBorder: { show: !1, color: "#e0e0e0", width: 1, offsetX: 0, offsetY: 0 }, axisTicks: { show: !1, color: "#e0e0e0", width: 6, offsetX: 0, offsetY: 0 }, title: { text: void 0, rotate: -90, offsetY: 0, offsetX: 0, style: { color: void 0, fontSize: "11px", fontWeight: 900, fontFamily: void 0, cssClass: "" } }, tooltip: { enabled: !1, offsetX: 0 }, crosshairs: { show: !0, position: "front", stroke: { color: "#b6b6b6", width: 1, dashArray: 0 } } }, this.pointAnnotation = { id: void 0, x: 0, y: null, yAxisIndex: 0, seriesIndex: void 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, marker: { size: 4, fillColor: "#fff", strokeWidth: 2, strokeColor: "#333", shape: "circle", offsetX: 0, offsetY: 0, radius: 2, cssClass: "" }, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } }, customSVG: { SVG: void 0, cssClass: void 0, offsetX: 0, offsetY: 0 }, image: { path: void 0, width: 20, height: 20, offsetX: 0, offsetY: 0 } }, this.yAxisAnnotation = { id: void 0, y: 0, y2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, width: "100%", yAxisIndex: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "end", position: "right", offsetX: 0, offsetY: -3, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.xAxisAnnotation = { id: void 0, x: 0, x2: null, strokeDashArray: 1, fillColor: "#c2c2c2", borderColor: "#c2c2c2", borderWidth: 1, opacity: 0.3, offsetX: 0, offsetY: 0, label: { borderColor: "#c2c2c2", borderWidth: 1, borderRadius: 2, text: void 0, textAnchor: "middle", orientation: "vertical", position: "top", offsetX: 0, offsetY: 0, mouseEnter: void 0, mouseLeave: void 0, click: void 0, style: { background: "#fff", color: void 0, fontSize: "11px", fontFamily: void 0, fontWeight: 400, cssClass: "", padding: { left: 5, right: 5, top: 2, bottom: 2 } } } }, this.text = { x: 0, y: 0, text: "", textAnchor: "start", foreColor: void 0, fontSize: "13px", fontFamily: void 0, fontWeight: 400, appendTo: ".apexcharts-annotations", backgroundColor: "transparent", borderColor: "#c2c2c2", borderRadius: 0, borderWidth: 0, paddingLeft: 4, paddingRight: 4, paddingTop: 2, paddingBottom: 2 };
    }
    return _(E, [{ key: "init", value: function() {
      return { annotations: { yaxis: [this.yAxisAnnotation], xaxis: [this.xAxisAnnotation], points: [this.pointAnnotation], texts: [], images: [], shapes: [] }, chart: { animations: { enabled: !0, easing: "easeinout", speed: 800, animateGradually: { delay: 150, enabled: !0 }, dynamicAnimation: { enabled: !0, speed: 350 } }, background: "transparent", locales: [gt], defaultLocale: "en", dropShadow: { enabled: !1, enabledOnSeries: void 0, top: 2, left: 2, blur: 4, color: "#000", opacity: 0.35 }, events: { animationEnd: void 0, beforeMount: void 0, mounted: void 0, updated: void 0, click: void 0, mouseMove: void 0, mouseLeave: void 0, xAxisLabelClick: void 0, legendClick: void 0, markerClick: void 0, selection: void 0, dataPointSelection: void 0, dataPointMouseEnter: void 0, dataPointMouseLeave: void 0, beforeZoom: void 0, beforeResetZoom: void 0, zoomed: void 0, scrolled: void 0, brushScrolled: void 0 }, foreColor: "#373d3f", fontFamily: "Helvetica, Arial, sans-serif", height: "auto", parentHeightOffset: 15, redrawOnParentResize: !0, redrawOnWindowResize: !0, id: void 0, group: void 0, nonce: void 0, offsetX: 0, offsetY: 0, selection: { enabled: !1, type: "x", fill: { color: "#24292e", opacity: 0.1 }, stroke: { width: 1, color: "#24292e", opacity: 0.4, dashArray: 3 }, xaxis: { min: void 0, max: void 0 }, yaxis: { min: void 0, max: void 0 } }, sparkline: { enabled: !1 }, brush: { enabled: !1, autoScaleYaxis: !0, target: void 0, targets: void 0 }, stacked: !1, stackOnlyBar: !0, stackType: "normal", toolbar: { show: !0, offsetX: 0, offsetY: 0, tools: { download: !0, selection: !0, zoom: !0, zoomin: !0, zoomout: !0, pan: !0, reset: !0, customIcons: [] }, export: { csv: { filename: void 0, columnDelimiter: ",", headerCategory: "category", headerValue: "value", dateFormatter: function(t) {
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
    } }]), E;
  }(), Zt = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w, this.graphics = new B(this.ctx), this.w.globals.isBarHorizontal && (this.invertAxis = !0), this.helpers = new yt(this), this.xAxisAnnotations = new Jt(this), this.yAxisAnnotations = new Ut(this), this.pointsAnnotations = new se(this), this.w.globals.isBarHorizontal && this.w.config.yaxis[0].reversed && (this.inversedReversedAxis = !0), this.xDivision = this.w.globals.gridWidth / this.w.globals.dataPoints;
    }
    return _(E, [{ key: "drawAxesAnnotations", value: function() {
      var t = this.w;
      if (t.globals.axisCharts) {
        for (var e = this.yAxisAnnotations.drawYAxisAnnotations(), i = this.xAxisAnnotations.drawXAxisAnnotations(), s = this.pointsAnnotations.drawPointAnnotations(), r = t.config.chart.animations.enabled, o = [e, i, s], n = [i.node, e.node, s.node], c = 0; c < 3; c++)
          t.globals.dom.elGraphical.add(o[c]), !r || t.globals.resized || t.globals.dataChanged || t.config.chart.type !== "scatter" && t.config.chart.type !== "bubble" && t.globals.dataPoints > 1 && n[c].classList.add("apexcharts-element-hidden"), t.globals.delayedElements.push({ el: n[c], index: 0 });
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
      var i = t.x, s = t.y, r = t.text, o = t.textAnchor, n = t.foreColor, c = t.fontSize, d = t.fontFamily, g = t.fontWeight, p = t.cssClass, x = t.backgroundColor, b = t.borderWidth, y = t.strokeDashArray, A = t.borderRadius, S = t.borderColor, N = t.appendTo, L = N === void 0 ? ".apexcharts-svg" : N, h = t.paddingLeft, m = h === void 0 ? 4 : h, k = t.paddingRight, C = k === void 0 ? 4 : k, O = t.paddingBottom, I = O === void 0 ? 2 : O, X = t.paddingTop, Y = X === void 0 ? 2 : X, W = this.w, q = this.graphics.drawText({ x: i, y: s, text: r, textAnchor: o || "start", fontSize: c || "12px", fontWeight: g || "regular", fontFamily: d || W.config.chart.fontFamily, foreColor: n || W.config.chart.foreColor, cssClass: p }), U = W.globals.dom.baseEl.querySelector(L);
      U && U.appendChild(q.node);
      var st = q.bbox();
      if (r) {
        var dt = this.graphics.drawRect(st.x - m, st.y - Y, st.width + m + C, st.height + I + Y, A, x || "transparent", 1, b, S, y);
        U.insertBefore(dt.node, q.node);
      }
    } }, { key: "addImage", value: function(t, e) {
      var i = this.w, s = t.path, r = t.x, o = r === void 0 ? 0 : r, n = t.y, c = n === void 0 ? 0 : n, d = t.width, g = d === void 0 ? 20 : d, p = t.height, x = p === void 0 ? 20 : p, b = t.appendTo, y = b === void 0 ? ".apexcharts-svg" : b, A = i.globals.dom.Paper.image(s);
      A.size(g, x).move(o, c);
      var S = i.globals.dom.baseEl.querySelector(y);
      return S && S.appendChild(A.node), A;
    } }, { key: "addXaxisAnnotationExternal", value: function(t, e, i) {
      return this.addAnnotationExternal({ params: t, pushToMemory: e, context: i, type: "xaxis", contextMethod: i.addXaxisAnnotation }), i;
    } }, { key: "addYaxisAnnotationExternal", value: function(t, e, i) {
      return this.addAnnotationExternal({ params: t, pushToMemory: e, context: i, type: "yaxis", contextMethod: i.addYaxisAnnotation }), i;
    } }, { key: "addPointAnnotationExternal", value: function(t, e, i) {
      return this.invertAxis === void 0 && (this.invertAxis = i.w.globals.isBarHorizontal), this.addAnnotationExternal({ params: t, pushToMemory: e, context: i, type: "point", contextMethod: i.addPointAnnotation }), i;
    } }, { key: "addAnnotationExternal", value: function(t) {
      var e = t.params, i = t.pushToMemory, s = t.context, r = t.type, o = t.contextMethod, n = s, c = n.w, d = c.globals.dom.baseEl.querySelector(".apexcharts-".concat(r, "-annotations")), g = d.childNodes.length + 1, p = new wt(), x = Object.assign({}, r === "xaxis" ? p.xAxisAnnotation : r === "yaxis" ? p.yAxisAnnotation : p.pointAnnotation), b = F.extend(x, e);
      switch (r) {
        case "xaxis":
          this.addXaxisAnnotation(b, d, g);
          break;
        case "yaxis":
          this.addYaxisAnnotation(b, d, g);
          break;
        case "point":
          this.addPointAnnotation(b, d, g);
      }
      var y = c.globals.dom.baseEl.querySelector(".apexcharts-".concat(r, "-annotations .apexcharts-").concat(r, "-annotation-label[rel='").concat(g, "']")), A = this.helpers.addBackgroundToAnno(y, b);
      return A && d.insertBefore(A.node, y), i && c.globals.memory.methodsToExec.push({ context: n, id: b.id ? b.id : F.randomId(), method: o, label: "addAnnotation", params: e }), s;
    } }, { key: "clearAnnotations", value: function(t) {
      var e = t.w, i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-annotations, .apexcharts-xaxis-annotations, .apexcharts-point-annotations");
      e.globals.memory.methodsToExec.map(function(s, r) {
        s.label !== "addText" && s.label !== "addAnnotation" || e.globals.memory.methodsToExec.splice(r, 1);
      }), i = F.listToArray(i), Array.prototype.forEach.call(i, function(s) {
        for (; s.firstChild; )
          s.removeChild(s.firstChild);
      });
    } }, { key: "removeAnnotation", value: function(t, e) {
      var i = t.w, s = i.globals.dom.baseEl.querySelectorAll(".".concat(e));
      s && (i.globals.memory.methodsToExec.map(function(r, o) {
        r.id === e && i.globals.memory.methodsToExec.splice(o, 1);
      }), Array.prototype.forEach.call(s, function(r) {
        r.parentElement.removeChild(r);
      }));
    } }]), E;
  }(), Mt = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w, this.months31 = [1, 3, 5, 7, 8, 10, 12], this.months30 = [2, 4, 6, 9, 11], this.daysCntOfYear = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    }
    return _(E, [{ key: "isValidDate", value: function(t) {
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
      var i = this.w.globals.locale, s = this.w.config.xaxis.labels.datetimeUTC, r = ["\0"].concat(lt(i.months)), o = [""].concat(lt(i.shortMonths)), n = [""].concat(lt(i.days)), c = [""].concat(lt(i.shortDays));
      function d(I, X) {
        var Y = I + "";
        for (X = X || 2; Y.length < X; )
          Y = "0" + Y;
        return Y;
      }
      var g = s ? t.getUTCFullYear() : t.getFullYear();
      e = (e = (e = e.replace(/(^|[^\\])yyyy+/g, "$1" + g)).replace(/(^|[^\\])yy/g, "$1" + g.toString().substr(2, 2))).replace(/(^|[^\\])y/g, "$1" + g);
      var p = (s ? t.getUTCMonth() : t.getMonth()) + 1;
      e = (e = (e = (e = e.replace(/(^|[^\\])MMMM+/g, "$1" + r[0])).replace(/(^|[^\\])MMM/g, "$1" + o[0])).replace(/(^|[^\\])MM/g, "$1" + d(p))).replace(/(^|[^\\])M/g, "$1" + p);
      var x = s ? t.getUTCDate() : t.getDate();
      e = (e = (e = (e = e.replace(/(^|[^\\])dddd+/g, "$1" + n[0])).replace(/(^|[^\\])ddd/g, "$1" + c[0])).replace(/(^|[^\\])dd/g, "$1" + d(x))).replace(/(^|[^\\])d/g, "$1" + x);
      var b = s ? t.getUTCHours() : t.getHours(), y = b > 12 ? b - 12 : b === 0 ? 12 : b;
      e = (e = (e = (e = e.replace(/(^|[^\\])HH+/g, "$1" + d(b))).replace(/(^|[^\\])H/g, "$1" + b)).replace(/(^|[^\\])hh+/g, "$1" + d(y))).replace(/(^|[^\\])h/g, "$1" + y);
      var A = s ? t.getUTCMinutes() : t.getMinutes();
      e = (e = e.replace(/(^|[^\\])mm+/g, "$1" + d(A))).replace(/(^|[^\\])m/g, "$1" + A);
      var S = s ? t.getUTCSeconds() : t.getSeconds();
      e = (e = e.replace(/(^|[^\\])ss+/g, "$1" + d(S))).replace(/(^|[^\\])s/g, "$1" + S);
      var N = s ? t.getUTCMilliseconds() : t.getMilliseconds();
      e = e.replace(/(^|[^\\])fff+/g, "$1" + d(N, 3)), N = Math.round(N / 10), e = e.replace(/(^|[^\\])ff/g, "$1" + d(N)), N = Math.round(N / 10);
      var L = b < 12 ? "AM" : "PM";
      e = (e = (e = e.replace(/(^|[^\\])f/g, "$1" + N)).replace(/(^|[^\\])TT+/g, "$1" + L)).replace(/(^|[^\\])T/g, "$1" + L.charAt(0));
      var h = L.toLowerCase();
      e = (e = e.replace(/(^|[^\\])tt+/g, "$1" + h)).replace(/(^|[^\\])t/g, "$1" + h.charAt(0));
      var m = -t.getTimezoneOffset(), k = s || !m ? "Z" : m > 0 ? "+" : "-";
      if (!s) {
        var C = (m = Math.abs(m)) % 60;
        k += d(Math.floor(m / 60)) + ":" + d(C);
      }
      e = e.replace(/(^|[^\\])K/g, "$1" + k);
      var O = (s ? t.getUTCDay() : t.getDay()) + 1;
      return e = (e = (e = (e = (e = e.replace(new RegExp(n[0], "g"), n[O])).replace(new RegExp(c[0], "g"), c[O])).replace(new RegExp(r[0], "g"), r[p])).replace(new RegExp(o[0], "g"), o[p])).replace(/\\(.)/g, "$1");
    } }, { key: "getTimeUnitsfromTimestamp", value: function(t, e, i) {
      var s = this.w;
      s.config.xaxis.min !== void 0 && (t = s.config.xaxis.min), s.config.xaxis.max !== void 0 && (e = s.config.xaxis.max);
      var r = this.getDate(t), o = this.getDate(e), n = this.formatDate(r, "yyyy MM dd HH mm ss fff").split(" "), c = this.formatDate(o, "yyyy MM dd HH mm ss fff").split(" ");
      return { minMillisecond: parseInt(n[6], 10), maxMillisecond: parseInt(c[6], 10), minSecond: parseInt(n[5], 10), maxSecond: parseInt(c[5], 10), minMinute: parseInt(n[4], 10), maxMinute: parseInt(c[4], 10), minHour: parseInt(n[3], 10), maxHour: parseInt(c[3], 10), minDate: parseInt(n[2], 10), maxDate: parseInt(c[2], 10), minMonth: parseInt(n[1], 10) - 1, maxMonth: parseInt(c[1], 10) - 1, minYear: parseInt(n[0], 10), maxYear: parseInt(c[0], 10) };
    } }, { key: "isLeapYear", value: function(t) {
      return t % 4 == 0 && t % 100 != 0 || t % 400 == 0;
    } }, { key: "calculcateLastDaysOfMonth", value: function(t, e, i) {
      return this.determineDaysOfMonths(t, e) - i;
    } }, { key: "determineDaysOfYear", value: function(t) {
      var e = 365;
      return this.isLeapYear(t) && (e = 366), e;
    } }, { key: "determineRemainingDaysOfYear", value: function(t, e, i) {
      var s = this.daysCntOfYear[e] + i;
      return e > 1 && this.isLeapYear() && s++, s;
    } }, { key: "determineDaysOfMonths", value: function(t, e) {
      var i = 30;
      switch (t = F.monthMod(t), !0) {
        case this.months30.indexOf(t) > -1:
          t === 2 && (i = this.isLeapYear(e) ? 29 : 28);
          break;
        case this.months31.indexOf(t) > -1:
        default:
          i = 31;
      }
      return i;
    } }]), E;
  }(), qt = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w, this.tooltipKeyFormat = "dd MMM";
    }
    return _(E, [{ key: "xLabelFormat", value: function(t, e, i, s) {
      var r = this.w;
      if (r.config.xaxis.type === "datetime" && r.config.xaxis.labels.formatter === void 0 && r.config.tooltip.x.formatter === void 0) {
        var o = new Mt(this.ctx);
        return o.formatDate(o.getDate(e), r.config.tooltip.x.format);
      }
      return t(e, i, s);
    } }, { key: "defaultGeneralFormatter", value: function(t) {
      return Array.isArray(t) ? t.map(function(e) {
        return e;
      }) : t;
    } }, { key: "defaultYFormatter", value: function(t, e, i) {
      var s = this.w;
      return F.isNumber(t) && (t = s.globals.yValueDecimal !== 0 ? t.toFixed(e.decimalsInFloat !== void 0 ? e.decimalsInFloat : s.globals.yValueDecimal) : s.globals.maxYArr[i] - s.globals.minYArr[i] < 5 ? t.toFixed(1) : t.toFixed(0)), t;
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
        if (F.isNumber(i)) {
          if (!e.config.xaxis.convertedCatToNumeric && e.config.xaxis.type === "numeric") {
            if (F.isNumber(e.config.xaxis.decimalsInFloat))
              return i.toFixed(e.config.xaxis.decimalsInFloat);
            var s = e.globals.maxX - e.globals.minX;
            return s > 0 && s < 100 ? i.toFixed(1) : i.toFixed(0);
          }
          return e.globals.isBarHorizontal && e.globals.maxY - e.globals.minYArr < 4 ? i.toFixed(1) : i.toFixed(0);
        }
        return i;
      }, typeof e.config.tooltip.x.formatter == "function" ? e.globals.ttKeyFormatter = e.config.tooltip.x.formatter : e.globals.ttKeyFormatter = e.globals.xLabelFormatter, typeof e.config.xaxis.tooltip.formatter == "function" && (e.globals.xaxisTooltipFormatter = e.config.xaxis.tooltip.formatter), (Array.isArray(e.config.tooltip.y) || e.config.tooltip.y.formatter !== void 0) && (e.globals.ttVal = e.config.tooltip.y), e.config.tooltip.z.formatter !== void 0 && (e.globals.ttZFormatter = e.config.tooltip.z.formatter), e.config.legend.formatter !== void 0 && (e.globals.legendFormatter = e.config.legend.formatter), e.config.yaxis.forEach(function(i, s) {
        i.labels.formatter !== void 0 ? e.globals.yLabelFormatters[s] = i.labels.formatter : e.globals.yLabelFormatters[s] = function(r) {
          return e.globals.xyCharts ? Array.isArray(r) ? r.map(function(o) {
            return t.defaultYFormatter(o, i, s);
          }) : t.defaultYFormatter(r, i, s) : r;
        };
      }), e.globals;
    } }, { key: "heatmapLabelFormatters", value: function() {
      var t = this.w;
      if (t.config.chart.type === "heatmap") {
        t.globals.yAxisScale[0].result = t.globals.seriesNames.slice();
        var e = t.globals.seriesNames.reduce(function(i, s) {
          return i.length > s.length ? i : s;
        }, 0);
        t.globals.yAxisScale[0].niceMax = e, t.globals.yAxisScale[0].niceMin = e;
      }
    } }]), E;
  }(), Gt = function(E) {
    var t, e = E.isTimeline, i = E.ctx, s = E.seriesIndex, r = E.dataPointIndex, o = E.y1, n = E.y2, c = E.w, d = c.globals.seriesRangeStart[s][r], g = c.globals.seriesRangeEnd[s][r], p = c.globals.labels[r], x = c.config.series[s].name ? c.config.series[s].name : "", b = c.globals.ttKeyFormatter, y = c.config.tooltip.y.title.formatter, A = { w: c, seriesIndex: s, dataPointIndex: r, start: d, end: g };
    typeof y == "function" && (x = y(x, A)), (t = c.config.series[s].data[r]) !== null && t !== void 0 && t.x && (p = c.config.series[s].data[r].x), e || c.config.xaxis.type === "datetime" && (p = new qt(i).xLabelFormat(c.globals.ttKeyFormatter, p, p, { i: void 0, dateFormatter: new Mt(i).formatDate, w: c })), typeof b == "function" && (p = b(p, A)), Number.isFinite(o) && Number.isFinite(n) && (d = o, g = n);
    var S = "", N = "", L = c.globals.colors[s];
    if (c.config.tooltip.x.formatter === void 0)
      if (c.config.xaxis.type === "datetime") {
        var h = new Mt(i);
        S = h.formatDate(h.getDate(d), c.config.tooltip.x.format), N = h.formatDate(h.getDate(g), c.config.tooltip.x.format);
      } else
        S = d, N = g;
    else
      S = c.config.tooltip.x.formatter(d), N = c.config.tooltip.x.formatter(g);
    return { start: d, end: g, startVal: S, endVal: N, ylabel: p, color: L, seriesName: x };
  }, At = function(E) {
    var t = E.color, e = E.seriesName, i = E.ylabel, s = E.start, r = E.end, o = E.seriesIndex, n = E.dataPointIndex, c = E.ctx.tooltip.tooltipLabels.getFormatters(o);
    s = c.yLbFormatter(s), r = c.yLbFormatter(r);
    var d = c.yLbFormatter(E.w.globals.series[o][n]), g = `<span class="value start-value">
  `.concat(s, `
  </span> <span class="separator">-</span> <span class="value end-value">
  `).concat(r, `
  </span>`);
    return '<div class="apexcharts-tooltip-rangebar"><div> <span class="series-name" style="color: ' + t + '">' + (e || "") + '</span></div><div> <span class="category">' + i + ": </span> " + (E.w.globals.comboCharts ? E.w.config.series[o].type === "rangeArea" || E.w.config.series[o].type === "rangeBar" ? g : "<span>".concat(d, "</span>") : g) + " </div></div>";
  }, kt = function() {
    function E(t) {
      w(this, E), this.opts = t;
    }
    return _(E, [{ key: "hideYAxis", value: function() {
      this.opts.yaxis[0].show = !1, this.opts.yaxis[0].title.text = "", this.opts.yaxis[0].axisBorder.show = !1, this.opts.yaxis[0].axisTicks.show = !1, this.opts.yaxis[0].floating = !0;
    } }, { key: "line", value: function() {
      return { chart: { animations: { easing: "swing" } }, dataLabels: { enabled: !1 }, stroke: { width: 5, curve: "straight" }, markers: { size: 0, hover: { sizeOffset: 6 } }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "sparkline", value: function(t) {
      return this.hideYAxis(), F.extend(t, { grid: { show: !1, padding: { left: 0, right: 0, top: 0, bottom: 0 } }, legend: { show: !1 }, xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } }, chart: { toolbar: { show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 } });
    } }, { key: "bar", value: function() {
      return { chart: { stacked: !1, animations: { easing: "swing" } }, plotOptions: { bar: { dataLabels: { position: "center" } } }, dataLabels: { style: { colors: ["#fff"] }, background: { enabled: !1 } }, stroke: { width: 0, lineCap: "round" }, fill: { opacity: 0.85 }, legend: { markers: { shape: "square", radius: 2, size: 8 } }, tooltip: { shared: !1, intersect: !0 }, xaxis: { tooltip: { enabled: !1 }, tickPlacement: "between", crosshairs: { width: "barWidth", position: "back", fill: { type: "gradient" }, dropShadow: { enabled: !1 }, stroke: { width: 0 } } } };
    } }, { key: "funnel", value: function() {
      return this.hideYAxis(), f(f({}, this.bar()), {}, { chart: { animations: { easing: "linear", speed: 800, animateGradually: { enabled: !1 } } }, plotOptions: { bar: { horizontal: !0, borderRadiusApplication: "around", borderRadius: 0, dataLabels: { position: "center" } } }, grid: { show: !1, padding: { left: 0, right: 0 } }, xaxis: { labels: { show: !1 }, tooltip: { enabled: !1 }, axisBorder: { show: !1 }, axisTicks: { show: !1 } } });
    } }, { key: "candlestick", value: function() {
      var t = this;
      return { stroke: { width: 1, colors: ["#333"] }, fill: { opacity: 1 }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function(e) {
        var i = e.seriesIndex, s = e.dataPointIndex, r = e.w;
        return t._getBoxTooltip(r, i, s, ["Open", "High", "", "Low", "Close"], "candlestick");
      } }, states: { active: { filter: { type: "none" } } }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "boxPlot", value: function() {
      var t = this;
      return { chart: { animations: { dynamicAnimation: { enabled: !1 } } }, stroke: { width: 1, colors: ["#24292e"] }, dataLabels: { enabled: !1 }, tooltip: { shared: !0, custom: function(e) {
        var i = e.seriesIndex, s = e.dataPointIndex, r = e.w;
        return t._getBoxTooltip(r, i, s, ["Minimum", "Q1", "Median", "Q3", "Maximum"], "boxPlot");
      } }, markers: { size: 5, strokeWidth: 1, strokeColors: "#111" }, xaxis: { crosshairs: { width: 1 } } };
    } }, { key: "rangeBar", value: function() {
      return { chart: { animations: { animateGradually: !1 } }, stroke: { width: 0, lineCap: "square" }, plotOptions: { bar: { borderRadius: 0, dataLabels: { position: "center" } } }, dataLabels: { enabled: !1, formatter: function(t, e) {
        e.ctx;
        var i = e.seriesIndex, s = e.dataPointIndex, r = e.w, o = function() {
          var n = r.globals.seriesRangeStart[i][s];
          return r.globals.seriesRangeEnd[i][s] - n;
        };
        return r.globals.comboCharts ? r.config.series[i].type === "rangeBar" || r.config.series[i].type === "rangeArea" ? o() : t : o();
      }, background: { enabled: !1 }, style: { colors: ["#fff"] } }, markers: { size: 10 }, tooltip: { shared: !1, followCursor: !0, custom: function(t) {
        return t.w.config.plotOptions && t.w.config.plotOptions.bar && t.w.config.plotOptions.bar.horizontal ? function(e) {
          var i = Gt(f(f({}, e), {}, { isTimeline: !0 })), s = i.color, r = i.seriesName, o = i.ylabel, n = i.startVal, c = i.endVal;
          return At(f(f({}, e), {}, { color: s, seriesName: r, ylabel: o, start: n, end: c }));
        }(t) : function(e) {
          var i = Gt(e), s = i.color, r = i.seriesName, o = i.ylabel, n = i.start, c = i.end;
          return At(f(f({}, e), {}, { color: s, seriesName: r, ylabel: o, start: n, end: c }));
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
          var i = Gt(e), s = i.color, r = i.seriesName, o = i.ylabel, n = i.start, c = i.end;
          return At(f(f({}, e), {}, { color: s, seriesName: r, ylabel: o, start: n, end: c }));
        }(t);
      } } };
    } }, { key: "brush", value: function(t) {
      return F.extend(t, { chart: { toolbar: { autoSelected: "selection", show: !1 }, zoom: { enabled: !1 } }, dataLabels: { enabled: !1 }, stroke: { width: 1 }, tooltip: { enabled: !1 }, xaxis: { tooltip: { enabled: !1 } } });
    } }, { key: "stacked100", value: function(t) {
      t.dataLabels = t.dataLabels || {}, t.dataLabels.formatter = t.dataLabels.formatter || void 0;
      var e = t.dataLabels.formatter;
      return t.yaxis.forEach(function(i, s) {
        t.yaxis[s].min = 0, t.yaxis[s].max = 100;
      }), t.chart.type === "bar" && (t.dataLabels.formatter = e || function(i) {
        return typeof i == "number" && i ? i.toFixed(0) + "%" : i;
      }), t;
    } }, { key: "stackedBars", value: function() {
      var t = this.bar();
      return f(f({}, t), {}, { plotOptions: f(f({}, t.plotOptions), {}, { bar: f(f({}, t.plotOptions.bar), {}, { borderRadiusApplication: "end", borderRadiusWhenStacked: "last" }) }) });
    } }, { key: "convertCatToNumeric", value: function(t) {
      return t.xaxis.convertedCatToNumeric = !0, t;
    } }, { key: "convertCatToNumericXaxis", value: function(t, e, i) {
      t.xaxis.type = "numeric", t.xaxis.labels = t.xaxis.labels || {}, t.xaxis.labels.formatter = t.xaxis.labels.formatter || function(o) {
        return F.isNumber(o) ? Math.floor(o) : o;
      };
      var s = t.xaxis.labels.formatter, r = t.xaxis.categories && t.xaxis.categories.length ? t.xaxis.categories : t.labels;
      return i && i.length && (r = i.map(function(o) {
        return Array.isArray(o) ? o : String(o);
      })), r && r.length && (t.xaxis.labels.formatter = function(o) {
        return F.isNumber(o) ? s(r[Math.floor(o) - 1]) : s(o);
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
    } }, { key: "_getBoxTooltip", value: function(t, e, i, s, r) {
      var o = t.globals.seriesCandleO[e][i], n = t.globals.seriesCandleH[e][i], c = t.globals.seriesCandleM[e][i], d = t.globals.seriesCandleL[e][i], g = t.globals.seriesCandleC[e][i];
      return t.config.series[e].type && t.config.series[e].type !== r ? `<div class="apexcharts-custom-tooltip">
          `.concat(t.config.series[e].name ? t.config.series[e].name : "series-" + (e + 1), ": <strong>").concat(t.globals.series[e][i], `</strong>
        </div>`) : '<div class="apexcharts-tooltip-box apexcharts-tooltip-'.concat(t.config.chart.type, '">') + "<div>".concat(s[0], ': <span class="value">') + o + "</span></div>" + "<div>".concat(s[1], ': <span class="value">') + n + "</span></div>" + (c ? "<div>".concat(s[2], ': <span class="value">') + c + "</span></div>" : "") + "<div>".concat(s[3], ': <span class="value">') + d + "</span></div>" + "<div>".concat(s[4], ': <span class="value">') + g + "</span></div></div>";
    } }]), E;
  }(), re = function() {
    function E(t) {
      w(this, E), this.opts = t;
    }
    return _(E, [{ key: "init", value: function(t) {
      var e = t.responsiveOverride, i = this.opts, s = new wt(), r = new kt(i);
      this.chartType = i.chart.type, i = this.extendYAxis(i), i = this.extendAnnotations(i);
      var o = s.init(), n = {};
      if (i && v(i) === "object") {
        var c, d, g, p, x, b, y, A, S = {};
        S = ["line", "area", "bar", "candlestick", "boxPlot", "rangeBar", "rangeArea", "bubble", "scatter", "heatmap", "treemap", "pie", "polarArea", "donut", "radar", "radialBar"].indexOf(i.chart.type) !== -1 ? r[i.chart.type]() : r.line(), (c = i.plotOptions) !== null && c !== void 0 && (d = c.bar) !== null && d !== void 0 && d.isFunnel && (S = r.funnel()), i.chart.stacked && i.chart.type === "bar" && (S = r.stackedBars()), (g = i.chart.brush) !== null && g !== void 0 && g.enabled && (S = r.brush(S)), i.chart.stacked && i.chart.stackType === "100%" && (i = r.stacked100(i)), (p = i.plotOptions) !== null && p !== void 0 && (x = p.bar) !== null && x !== void 0 && x.isDumbbell && (i = r.dumbbell(i)), this.checkForDarkTheme(window.Apex), this.checkForDarkTheme(i), i.xaxis = i.xaxis || window.Apex.xaxis || {}, e || (i.xaxis.convertedCatToNumeric = !1), ((b = (i = this.checkForCatToNumericXAxis(this.chartType, S, i)).chart.sparkline) !== null && b !== void 0 && b.enabled || (y = window.Apex.chart) !== null && y !== void 0 && (A = y.sparkline) !== null && A !== void 0 && A.enabled) && (S = r.sparkline(S)), n = F.extend(o, S);
      }
      var N = F.extend(n, window.Apex);
      return o = F.extend(N, i), o = this.handleUserInputErrors(o);
    } }, { key: "checkForCatToNumericXAxis", value: function(t, e, i) {
      var s, r, o = new kt(i), n = (t === "bar" || t === "boxPlot") && ((s = i.plotOptions) === null || s === void 0 || (r = s.bar) === null || r === void 0 ? void 0 : r.horizontal), c = t === "pie" || t === "polarArea" || t === "donut" || t === "radar" || t === "radialBar" || t === "heatmap", d = i.xaxis.type !== "datetime" && i.xaxis.type !== "numeric", g = i.xaxis.tickPlacement ? i.xaxis.tickPlacement : e.xaxis && e.xaxis.tickPlacement;
      return n || c || !d || g === "between" || (i = o.convertCatToNumeric(i)), i;
    } }, { key: "extendYAxis", value: function(t, e) {
      var i = new wt();
      (t.yaxis === void 0 || !t.yaxis || Array.isArray(t.yaxis) && t.yaxis.length === 0) && (t.yaxis = {}), t.yaxis.constructor !== Array && window.Apex.yaxis && window.Apex.yaxis.constructor !== Array && (t.yaxis = F.extend(t.yaxis, window.Apex.yaxis)), t.yaxis.constructor !== Array ? t.yaxis = [F.extend(i.yAxis, t.yaxis)] : t.yaxis = F.extendArray(t.yaxis, i.yAxis);
      var s = !1;
      t.yaxis.forEach(function(o) {
        o.logarithmic && (s = !0);
      });
      var r = t.series;
      return e && !r && (r = e.config.series), s && r.length !== t.yaxis.length && r.length && (t.yaxis = r.map(function(o, n) {
        if (o.name || (r[n].name = "series-".concat(n + 1)), t.yaxis[n])
          return t.yaxis[n].seriesName = r[n].name, t.yaxis[n];
        var c = F.extend(i.yAxis, t.yaxis[0]);
        return c.show = !1, c;
      })), s && r.length > 1 && r.length !== t.yaxis.length && console.warn("A multi-series logarithmic chart should have equal number of series and y-axes"), t;
    } }, { key: "extendAnnotations", value: function(t) {
      return t.annotations === void 0 && (t.annotations = {}, t.annotations.yaxis = [], t.annotations.xaxis = [], t.annotations.points = []), t = this.extendYAxisAnnotations(t), t = this.extendXAxisAnnotations(t), t = this.extendPointAnnotations(t);
    } }, { key: "extendYAxisAnnotations", value: function(t) {
      var e = new wt();
      return t.annotations.yaxis = F.extendArray(t.annotations.yaxis !== void 0 ? t.annotations.yaxis : [], e.yAxisAnnotation), t;
    } }, { key: "extendXAxisAnnotations", value: function(t) {
      var e = new wt();
      return t.annotations.xaxis = F.extendArray(t.annotations.xaxis !== void 0 ? t.annotations.xaxis : [], e.xAxisAnnotation), t;
    } }, { key: "extendPointAnnotations", value: function(t) {
      var e = new wt();
      return t.annotations.points = F.extendArray(t.annotations.points !== void 0 ? t.annotations.points : [], e.pointAnnotation), t;
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
    } }]), E;
  }(), ze = function() {
    function E() {
      w(this, E);
    }
    return _(E, [{ key: "initGlobalVars", value: function(t) {
      t.series = [], t.seriesCandleO = [], t.seriesCandleH = [], t.seriesCandleM = [], t.seriesCandleL = [], t.seriesCandleC = [], t.seriesRangeStart = [], t.seriesRangeEnd = [], t.seriesRange = [], t.seriesPercent = [], t.seriesGoals = [], t.seriesX = [], t.seriesZ = [], t.seriesNames = [], t.seriesTotals = [], t.seriesLog = [], t.seriesColors = [], t.stackedSeriesTotals = [], t.seriesXvalues = [], t.seriesYvalues = [], t.labels = [], t.hasXaxisGroups = !1, t.groups = [], t.hasSeriesGroups = !1, t.seriesGroups = [], t.categoryLabels = [], t.timescaleLabels = [], t.noLabelsProvided = !1, t.resizeTimer = null, t.selectionResizeTimer = null, t.delayedElements = [], t.pointsArray = [], t.dataLabelsRects = [], t.isXNumeric = !1, t.skipLastTimelinelabel = !1, t.skipFirstTimelinelabel = !1, t.isDataXYZ = !1, t.isMultiLineX = !1, t.isMultipleYAxis = !1, t.maxY = -Number.MAX_VALUE, t.minY = Number.MIN_VALUE, t.minYArr = [], t.maxYArr = [], t.maxX = -Number.MAX_VALUE, t.minX = Number.MAX_VALUE, t.initialMaxX = -Number.MAX_VALUE, t.initialMinX = Number.MAX_VALUE, t.maxDate = 0, t.minDate = Number.MAX_VALUE, t.minZ = Number.MAX_VALUE, t.maxZ = -Number.MAX_VALUE, t.minXDiff = Number.MAX_VALUE, t.yAxisScale = [], t.xAxisScale = null, t.xAxisTicksPositions = [], t.yLabelsCoords = [], t.yTitleCoords = [], t.barPadForNumericAxis = 0, t.padHorizontal = 0, t.xRange = 0, t.yRange = [], t.zRange = 0, t.dataPoints = 0, t.xTickAmount = 0;
    } }, { key: "globalVars", value: function(t) {
      return { chartID: null, cuid: null, events: { beforeMount: [], mounted: [], updated: [], clicked: [], selection: [], dataPointSelection: [], zoomed: [], scrolled: [] }, colors: [], clientX: null, clientY: null, fill: { colors: [] }, stroke: { colors: [] }, dataLabels: { style: { colors: [] } }, radarPolygons: { fill: { colors: [] } }, markers: { colors: [], size: t.markers.size, largestSize: 0 }, animationEnded: !1, isTouchDevice: "ontouchstart" in window || navigator.msMaxTouchPoints, isDirty: !1, isExecCalled: !1, initialConfig: null, initialSeries: [], lastXAxis: [], lastYAxis: [], columnSeries: null, labels: [], timescaleLabels: [], noLabelsProvided: !1, allSeriesCollapsed: !1, collapsedSeries: [], collapsedSeriesIndices: [], ancillaryCollapsedSeries: [], ancillaryCollapsedSeriesIndices: [], risingSeries: [], dataFormatXNumeric: !1, capturedSeriesIndex: -1, capturedDataPointIndex: -1, selectedDataPoints: [], goldenPadding: 35, invalidLogScale: !1, ignoreYAxisIndexes: [], yAxisSameScaleIndices: [], maxValsInArrayIndex: 0, radialSize: 0, selection: void 0, zoomEnabled: t.chart.toolbar.autoSelected === "zoom" && t.chart.toolbar.tools.zoom && t.chart.zoom.enabled, panEnabled: t.chart.toolbar.autoSelected === "pan" && t.chart.toolbar.tools.pan, selectionEnabled: t.chart.toolbar.autoSelected === "selection" && t.chart.toolbar.tools.selection, yaxis: null, mousedown: !1, lastClientPosition: {}, visibleXRange: void 0, yValueDecimal: 0, total: 0, SVGNS: "http://www.w3.org/2000/svg", svgWidth: 0, svgHeight: 0, noData: !1, locale: {}, dom: {}, memory: { methodsToExec: [] }, shouldAnimate: !0, skipLastTimelinelabel: !1, skipFirstTimelinelabel: !1, delayedElements: [], axisCharts: !0, isDataXYZ: !1, resized: !1, resizeTimer: null, comboCharts: !1, dataChanged: !1, previousPaths: [], allSeriesHasEqualX: !0, pointsArray: [], dataLabelsRects: [], lastDrawnDataLabelsIndexes: [], hasNullValues: !1, easing: null, zoomed: !1, gridWidth: 0, gridHeight: 0, rotateXLabels: !1, defaultLabels: !1, xLabelFormatter: void 0, yLabelFormatters: [], xaxisTooltipFormatter: void 0, ttKeyFormatter: void 0, ttVal: void 0, ttZFormatter: void 0, LINE_HEIGHT_RATIO: 1.618, xAxisLabelsHeight: 0, xAxisGroupLabelsHeight: 0, xAxisLabelsWidth: 0, yAxisLabelsWidth: 0, scaleX: 1, scaleY: 1, translateX: 0, translateY: 0, translateYAxisX: [], yAxisWidths: [], translateXAxisY: 0, translateXAxisX: 0, tooltip: null };
    } }, { key: "init", value: function(t) {
      var e = this.globalVars(t);
      return this.initGlobalVars(e), e.initialConfig = F.extend({}, t), e.initialSeries = F.clone(t.series), e.lastXAxis = F.clone(e.initialConfig.xaxis), e.lastYAxis = F.clone(e.initialConfig.yaxis), e;
    } }]), E;
  }(), Fe = function() {
    function E(t) {
      w(this, E), this.opts = t;
    }
    return _(E, [{ key: "init", value: function() {
      var t = new re(this.opts).init({ responsiveOverride: !1 });
      return { config: t, globals: new ze().init(t) };
    } }]), E;
  }(), Kt = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w, this.opts = null, this.seriesIndex = 0;
    }
    return _(E, [{ key: "clippedImgArea", value: function(t) {
      var e = this.w, i = e.config, s = parseInt(e.globals.gridWidth, 10), r = parseInt(e.globals.gridHeight, 10), o = s > r ? s : r, n = t.image, c = 0, d = 0;
      t.width === void 0 && t.height === void 0 ? i.fill.image.width !== void 0 && i.fill.image.height !== void 0 ? (c = i.fill.image.width + 1, d = i.fill.image.height) : (c = o + 1, d = o) : (c = t.width, d = t.height);
      var g = document.createElementNS(e.globals.SVGNS, "pattern");
      B.setAttrs(g, { id: t.patternID, patternUnits: t.patternUnits ? t.patternUnits : "userSpaceOnUse", width: c + "px", height: d + "px" });
      var p = document.createElementNS(e.globals.SVGNS, "image");
      g.appendChild(p), p.setAttributeNS(window.SVG.xlink, "href", n), B.setAttrs(p, { x: 0, y: 0, preserveAspectRatio: "none", width: c + "px", height: d + "px" }), p.style.opacity = t.opacity, e.globals.dom.elDefs.node.appendChild(g);
    } }, { key: "getSeriesIndex", value: function(t) {
      var e = this.w, i = e.config.chart.type;
      return (i === "bar" || i === "rangeBar") && e.config.plotOptions.bar.distributed || i === "heatmap" || i === "treemap" ? this.seriesIndex = t.seriesNumber : this.seriesIndex = t.seriesNumber % e.globals.series.length, this.seriesIndex;
    } }, { key: "fillPath", value: function(t) {
      var e = this.w;
      this.opts = t;
      var i, s, r, o = this.w.config;
      this.seriesIndex = this.getSeriesIndex(t);
      var n = this.getFillColors()[this.seriesIndex];
      e.globals.seriesColors[this.seriesIndex] !== void 0 && (n = e.globals.seriesColors[this.seriesIndex]), typeof n == "function" && (n = n({ seriesIndex: this.seriesIndex, dataPointIndex: t.dataPointIndex, value: t.value, w: e }));
      var c = t.fillType ? t.fillType : this.getFillType(this.seriesIndex), d = Array.isArray(o.fill.opacity) ? o.fill.opacity[this.seriesIndex] : o.fill.opacity;
      t.color && (n = t.color), n || (n = "#fff", console.warn("undefined color - ApexCharts"));
      var g = n;
      if (n.indexOf("rgb") === -1 ? n.length < 9 && (g = F.hexToRgba(n, d)) : n.indexOf("rgba") > -1 && (d = F.getOpacityFromRGBA(n)), t.opacity && (d = t.opacity), c === "pattern" && (s = this.handlePatternFill({ fillConfig: t.fillConfig, patternFill: s, fillColor: n, fillOpacity: d, defaultColor: g })), c === "gradient" && (r = this.handleGradientFill({ fillConfig: t.fillConfig, fillColor: n, fillOpacity: d, i: this.seriesIndex })), c === "image") {
        var p = o.fill.image.src, x = t.patternID ? t.patternID : "";
        this.clippedImgArea({ opacity: d, image: Array.isArray(p) ? t.seriesNumber < p.length ? p[t.seriesNumber] : p[0] : p, width: t.width ? t.width : void 0, height: t.height ? t.height : void 0, patternUnits: t.patternUnits, patternID: "pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(x) }), i = "url(#pattern".concat(e.globals.cuid).concat(t.seriesNumber + 1).concat(x, ")");
      } else
        i = c === "gradient" ? r : c === "pattern" ? s : g;
      return t.solid && (i = g), i;
    } }, { key: "getFillType", value: function(t) {
      var e = this.w;
      return Array.isArray(e.config.fill.type) ? e.config.fill.type[t] : e.config.fill.type;
    } }, { key: "getFillColors", value: function() {
      var t = this.w, e = t.config, i = this.opts, s = [];
      return t.globals.comboCharts ? t.config.series[this.seriesIndex].type === "line" ? Array.isArray(t.globals.stroke.colors) ? s = t.globals.stroke.colors : s.push(t.globals.stroke.colors) : Array.isArray(t.globals.fill.colors) ? s = t.globals.fill.colors : s.push(t.globals.fill.colors) : e.chart.type === "line" ? Array.isArray(t.globals.stroke.colors) ? s = t.globals.stroke.colors : s.push(t.globals.stroke.colors) : Array.isArray(t.globals.fill.colors) ? s = t.globals.fill.colors : s.push(t.globals.fill.colors), i.fillColors !== void 0 && (s = [], Array.isArray(i.fillColors) ? s = i.fillColors.slice() : s.push(i.fillColors)), s;
    } }, { key: "handlePatternFill", value: function(t) {
      var e = t.fillConfig, i = t.patternFill, s = t.fillColor, r = t.fillOpacity, o = t.defaultColor, n = this.w.config.fill;
      e && (n = e);
      var c = this.opts, d = new B(this.ctx), g = Array.isArray(n.pattern.strokeWidth) ? n.pattern.strokeWidth[this.seriesIndex] : n.pattern.strokeWidth, p = s;
      return Array.isArray(n.pattern.style) ? i = n.pattern.style[c.seriesNumber] !== void 0 ? d.drawPattern(n.pattern.style[c.seriesNumber], n.pattern.width, n.pattern.height, p, g, r) : o : i = d.drawPattern(n.pattern.style, n.pattern.width, n.pattern.height, p, g, r), i;
    } }, { key: "handleGradientFill", value: function(t) {
      var e = t.fillColor, i = t.fillOpacity, s = t.fillConfig, r = t.i, o = this.w.config.fill;
      s && (o = f(f({}, o), s));
      var n, c = this.opts, d = new B(this.ctx), g = new F(), p = o.gradient.type, x = e, b = o.gradient.opacityFrom === void 0 ? i : Array.isArray(o.gradient.opacityFrom) ? o.gradient.opacityFrom[r] : o.gradient.opacityFrom;
      x.indexOf("rgba") > -1 && (b = F.getOpacityFromRGBA(x));
      var y = o.gradient.opacityTo === void 0 ? i : Array.isArray(o.gradient.opacityTo) ? o.gradient.opacityTo[r] : o.gradient.opacityTo;
      if (o.gradient.gradientToColors === void 0 || o.gradient.gradientToColors.length === 0)
        n = o.gradient.shade === "dark" ? g.shadeColor(-1 * parseFloat(o.gradient.shadeIntensity), e.indexOf("rgb") > -1 ? F.rgb2hex(e) : e) : g.shadeColor(parseFloat(o.gradient.shadeIntensity), e.indexOf("rgb") > -1 ? F.rgb2hex(e) : e);
      else if (o.gradient.gradientToColors[c.seriesNumber]) {
        var A = o.gradient.gradientToColors[c.seriesNumber];
        n = A, A.indexOf("rgba") > -1 && (y = F.getOpacityFromRGBA(A));
      } else
        n = e;
      if (o.gradient.gradientFrom && (x = o.gradient.gradientFrom), o.gradient.gradientTo && (n = o.gradient.gradientTo), o.gradient.inverseColors) {
        var S = x;
        x = n, n = S;
      }
      return x.indexOf("rgb") > -1 && (x = F.rgb2hex(x)), n.indexOf("rgb") > -1 && (n = F.rgb2hex(n)), d.drawGradient(p, x, n, b, y, c.size, o.gradient.stops, o.gradient.colorStops, r);
    } }]), E;
  }(), oe = function() {
    function E(t, e) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "setGlobalMarkerSize", value: function() {
      var t = this.w;
      if (t.globals.markers.size = Array.isArray(t.config.markers.size) ? t.config.markers.size : [t.config.markers.size], t.globals.markers.size.length > 0) {
        if (t.globals.markers.size.length < t.globals.series.length + 1)
          for (var e = 0; e <= t.globals.series.length; e++)
            t.globals.markers.size[e] === void 0 && t.globals.markers.size.push(t.globals.markers.size[0]);
      } else
        t.globals.markers.size = t.config.series.map(function(i) {
          return t.config.markers.size;
        });
    } }, { key: "plotChartMarkers", value: function(t, e, i, s) {
      var r, o = arguments.length > 4 && arguments[4] !== void 0 && arguments[4], n = this.w, c = e, d = t, g = null, p = new B(this.ctx), x = n.config.markers.discrete && n.config.markers.discrete.length;
      if ((n.globals.markers.size[e] > 0 || o || x) && (g = p.group({ class: o || x ? "" : "apexcharts-series-markers" })).attr("clip-path", "url(#gridRectMarkerMask".concat(n.globals.cuid, ")")), Array.isArray(d.x))
        for (var b = 0; b < d.x.length; b++) {
          var y = i;
          i === 1 && b === 0 && (y = 0), i === 1 && b === 1 && (y = 1);
          var A = "apexcharts-marker";
          if (n.config.chart.type !== "line" && n.config.chart.type !== "area" || n.globals.comboCharts || n.config.tooltip.intersect || (A += " no-pointer-events"), (Array.isArray(n.config.markers.size) ? n.globals.markers.size[e] > 0 : n.config.markers.size > 0) || o || x) {
            F.isNumber(d.y[b]) ? A += " w".concat(F.randomId()) : A = "apexcharts-nullpoint";
            var S = this.getMarkerConfig({ cssClass: A, seriesIndex: e, dataPointIndex: y });
            n.config.series[c].data[y] && (n.config.series[c].data[y].fillColor && (S.pointFillColor = n.config.series[c].data[y].fillColor), n.config.series[c].data[y].strokeColor && (S.pointStrokeColor = n.config.series[c].data[y].strokeColor)), s && (S.pSize = s), (d.x[b] < 0 || d.x[b] > n.globals.gridWidth || d.y[b] < -n.globals.markers.largestSize || d.y[b] > n.globals.gridHeight + n.globals.markers.largestSize) && (S.pSize = 0), (r = p.drawMarker(d.x[b], d.y[b], S)).attr("rel", y), r.attr("j", y), r.attr("index", e), r.node.setAttribute("default-marker-size", S.pSize), new pt(this.ctx).setSelectionFilter(r, e, y), this.addEvents(r), g && g.add(r);
          } else
            n.globals.pointsArray[e] === void 0 && (n.globals.pointsArray[e] = []), n.globals.pointsArray[e].push([d.x[b], d.y[b]]);
        }
      return g;
    } }, { key: "getMarkerConfig", value: function(t) {
      var e = t.cssClass, i = t.seriesIndex, s = t.dataPointIndex, r = s === void 0 ? null : s, o = t.finishRadius, n = o === void 0 ? null : o, c = this.w, d = this.getMarkerStyle(i), g = c.globals.markers.size[i], p = c.config.markers;
      return r !== null && p.discrete.length && p.discrete.map(function(x) {
        x.seriesIndex === i && x.dataPointIndex === r && (d.pointStrokeColor = x.strokeColor, d.pointFillColor = x.fillColor, g = x.size, d.pointShape = x.shape);
      }), { pSize: n === null ? g : n, pRadius: p.radius, width: Array.isArray(p.width) ? p.width[i] : p.width, height: Array.isArray(p.height) ? p.height[i] : p.height, pointStrokeWidth: Array.isArray(p.strokeWidth) ? p.strokeWidth[i] : p.strokeWidth, pointStrokeColor: d.pointStrokeColor, pointFillColor: d.pointFillColor, shape: d.pointShape || (Array.isArray(p.shape) ? p.shape[i] : p.shape), class: e, pointStrokeOpacity: Array.isArray(p.strokeOpacity) ? p.strokeOpacity[i] : p.strokeOpacity, pointStrokeDashArray: Array.isArray(p.strokeDashArray) ? p.strokeDashArray[i] : p.strokeDashArray, pointFillOpacity: Array.isArray(p.fillOpacity) ? p.fillOpacity[i] : p.fillOpacity, seriesIndex: i };
    } }, { key: "addEvents", value: function(t) {
      var e = this.w, i = new B(this.ctx);
      t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this.ctx, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this.ctx, t)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this.ctx, t)), t.node.addEventListener("click", e.config.markers.onClick), t.node.addEventListener("dblclick", e.config.markers.onDblClick), t.node.addEventListener("touchstart", i.pathMouseDown.bind(this.ctx, t), { passive: !0 });
    } }, { key: "getMarkerStyle", value: function(t) {
      var e = this.w, i = e.globals.markers.colors, s = e.config.markers.strokeColor || e.config.markers.strokeColors;
      return { pointStrokeColor: Array.isArray(s) ? s[t] : s, pointFillColor: Array.isArray(i) ? i[t] : i };
    } }]), E;
  }(), Ce = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled;
    }
    return _(E, [{ key: "draw", value: function(t, e, i) {
      var s = this.w, r = new B(this.ctx), o = i.realIndex, n = i.pointsPos, c = i.zRatio, d = i.elParent, g = r.group({ class: "apexcharts-series-markers apexcharts-series-".concat(s.config.chart.type) });
      if (g.attr("clip-path", "url(#gridRectMarkerMask".concat(s.globals.cuid, ")")), Array.isArray(n.x))
        for (var p = 0; p < n.x.length; p++) {
          var x = e + 1, b = !0;
          e === 0 && p === 0 && (x = 0), e === 0 && p === 1 && (x = 1);
          var y = 0, A = s.globals.markers.size[o];
          if (c !== 1 / 0) {
            var S = s.config.plotOptions.bubble;
            A = s.globals.seriesZ[o][x], S.zScaling && (A /= c), S.minBubbleRadius && A < S.minBubbleRadius && (A = S.minBubbleRadius), S.maxBubbleRadius && A > S.maxBubbleRadius && (A = S.maxBubbleRadius);
          }
          s.config.chart.animations.enabled || (y = A);
          var N = n.x[p], L = n.y[p];
          if (y = y || 0, L !== null && s.globals.series[o][x] !== void 0 || (b = !1), b) {
            var h = this.drawPoint(N, L, y, A, o, x, e);
            g.add(h);
          }
          d.add(g);
        }
    } }, { key: "drawPoint", value: function(t, e, i, s, r, o, n) {
      var c = this.w, d = r, g = new mt(this.ctx), p = new pt(this.ctx), x = new Kt(this.ctx), b = new oe(this.ctx), y = new B(this.ctx), A = b.getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: d, dataPointIndex: o, finishRadius: c.config.chart.type === "bubble" || c.globals.comboCharts && c.config.series[r] && c.config.series[r].type === "bubble" ? s : null });
      s = A.pSize;
      var S, N = x.fillPath({ seriesNumber: r, dataPointIndex: o, color: A.pointFillColor, patternUnits: "objectBoundingBox", value: c.globals.series[r][n] });
      if (A.shape === "circle" ? S = y.drawCircle(i) : A.shape !== "square" && A.shape !== "rect" || (S = y.drawRect(0, 0, A.width - A.pointStrokeWidth / 2, A.height - A.pointStrokeWidth / 2, A.pRadius)), c.config.series[d].data[o] && c.config.series[d].data[o].fillColor && (N = c.config.series[d].data[o].fillColor), S.attr({ x: t - A.width / 2 - A.pointStrokeWidth / 2, y: e - A.height / 2 - A.pointStrokeWidth / 2, cx: t, cy: e, fill: N, "fill-opacity": A.pointFillOpacity, stroke: A.pointStrokeColor, r: s, "stroke-width": A.pointStrokeWidth, "stroke-dasharray": A.pointStrokeDashArray, "stroke-opacity": A.pointStrokeOpacity }), c.config.chart.dropShadow.enabled) {
        var L = c.config.chart.dropShadow;
        p.dropShadow(S, L, r);
      }
      if (!this.initialAnim || c.globals.dataChanged || c.globals.resized)
        c.globals.animationEnded = !0;
      else {
        var h = c.config.chart.animations.speed;
        g.animateMarker(S, 0, A.shape === "circle" ? s : { width: A.width, height: A.height }, h, c.globals.easing, function() {
          window.setTimeout(function() {
            g.animationCompleted(S);
          }, 100);
        });
      }
      if (c.globals.dataChanged && A.shape === "circle")
        if (this.dynamicAnim) {
          var m, k, C, O, I = c.config.chart.animations.dynamicAnimation.speed;
          (O = c.globals.previousPaths[r] && c.globals.previousPaths[r][n]) != null && (m = O.x, k = O.y, C = O.r !== void 0 ? O.r : s);
          for (var X = 0; X < c.globals.collapsedSeries.length; X++)
            c.globals.collapsedSeries[X].index === r && (I = 1, s = 0);
          t === 0 && e === 0 && (s = 0), g.animateCircle(S, { cx: m, cy: k, r: C }, { cx: t, cy: e, r: s }, I, c.globals.easing);
        } else
          S.attr({ r: s });
      return S.attr({ rel: o, j: o, index: r, "default-marker-size": s }), p.setSelectionFilter(S, r, o), b.addEvents(S), S.node.classList.add("apexcharts-marker"), S;
    } }, { key: "centerTextInBubble", value: function(t) {
      var e = this.w;
      return { y: t += parseInt(e.config.dataLabels.style.fontSize, 10) / 4 };
    } }]), E;
  }(), Ee = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "dataLabelsCorrection", value: function(t, e, i, s, r, o, n) {
      var c = this.w, d = !1, g = new B(this.ctx).getTextRects(i, n), p = g.width, x = g.height;
      e < 0 && (e = 0), e > c.globals.gridHeight + x && (e = c.globals.gridHeight + x / 2), c.globals.dataLabelsRects[s] === void 0 && (c.globals.dataLabelsRects[s] = []), c.globals.dataLabelsRects[s].push({ x: t, y: e, width: p, height: x });
      var b = c.globals.dataLabelsRects[s].length - 2, y = c.globals.lastDrawnDataLabelsIndexes[s] !== void 0 ? c.globals.lastDrawnDataLabelsIndexes[s][c.globals.lastDrawnDataLabelsIndexes[s].length - 1] : 0;
      if (c.globals.dataLabelsRects[s][b] !== void 0) {
        var A = c.globals.dataLabelsRects[s][y];
        (t > A.x + A.width || e > A.y + A.height || e + x < A.y || t + p < A.x) && (d = !0);
      }
      return (r === 0 || o) && (d = !0), { x: t, y: e, textRects: g, drawnextLabel: d };
    } }, { key: "drawDataLabel", value: function(t) {
      var e = this, i = t.type, s = t.pos, r = t.i, o = t.j, n = t.isRangeStart, c = t.strokeWidth, d = c === void 0 ? 2 : c, g = this.w, p = new B(this.ctx), x = g.config.dataLabels, b = 0, y = 0, A = o, S = null;
      if (!x.enabled || !Array.isArray(s.x))
        return S;
      S = p.group({ class: "apexcharts-data-labels" });
      for (var N = 0; N < s.x.length; N++)
        if (b = s.x[N] + x.offsetX, y = s.y[N] + x.offsetY + d, !isNaN(b)) {
          o === 1 && N === 0 && (A = 0), o === 1 && N === 1 && (A = 1);
          var L = g.globals.series[r][A];
          i === "rangeArea" && (L = n ? g.globals.seriesRangeStart[r][A] : g.globals.seriesRangeEnd[r][A]);
          var h = "", m = function(k) {
            return g.config.dataLabels.formatter(k, { ctx: e.ctx, seriesIndex: r, dataPointIndex: A, w: g });
          };
          g.config.chart.type === "bubble" ? (h = m(L = g.globals.seriesZ[r][A]), y = s.y[N], y = new Ce(this.ctx).centerTextInBubble(y, r, A).y) : L !== void 0 && (h = m(L)), this.plotDataLabelsText({ x: b, y, text: h, i: r, j: A, parent: S, offsetCorrection: !0, dataLabelsConfig: g.config.dataLabels });
        }
      return S;
    } }, { key: "plotDataLabelsText", value: function(t) {
      var e = this.w, i = new B(this.ctx), s = t.x, r = t.y, o = t.i, n = t.j, c = t.text, d = t.textAnchor, g = t.fontSize, p = t.parent, x = t.dataLabelsConfig, b = t.color, y = t.alwaysDrawDataLabel, A = t.offsetCorrection;
      if (!(Array.isArray(e.config.dataLabels.enabledOnSeries) && e.config.dataLabels.enabledOnSeries.indexOf(o) < 0)) {
        var S = { x: s, y: r, drawnextLabel: !0, textRects: null };
        A && (S = this.dataLabelsCorrection(s, r, c, o, n, y, parseInt(x.style.fontSize, 10))), e.globals.zoomed || (s = S.x, r = S.y), S.textRects && (s < -20 - S.textRects.width || s > e.globals.gridWidth + S.textRects.width + 30) && (c = "");
        var N = e.globals.dataLabels.style.colors[o];
        ((e.config.chart.type === "bar" || e.config.chart.type === "rangeBar") && e.config.plotOptions.bar.distributed || e.config.dataLabels.distributed) && (N = e.globals.dataLabels.style.colors[n]), typeof N == "function" && (N = N({ series: e.globals.series, seriesIndex: o, dataPointIndex: n, w: e })), b && (N = b);
        var L = x.offsetX, h = x.offsetY;
        if (e.config.chart.type !== "bar" && e.config.chart.type !== "rangeBar" || (L = 0, h = 0), S.drawnextLabel) {
          var m = i.drawText({ width: 100, height: parseInt(x.style.fontSize, 10), x: s + L, y: r + h, foreColor: N, textAnchor: d || x.textAnchor, text: c, fontSize: g || x.style.fontSize, fontFamily: x.style.fontFamily, fontWeight: x.style.fontWeight || "normal" });
          if (m.attr({ class: "apexcharts-datalabel", cx: s, cy: r }), x.dropShadow.enabled) {
            var k = x.dropShadow;
            new pt(this.ctx).dropShadow(m, k);
          }
          p.add(m), e.globals.lastDrawnDataLabelsIndexes[o] === void 0 && (e.globals.lastDrawnDataLabelsIndexes[o] = []), e.globals.lastDrawnDataLabelsIndexes[o].push(n);
        }
      }
    } }, { key: "addBackgroundToDataLabel", value: function(t, e) {
      var i = this.w, s = i.config.dataLabels.background, r = s.padding, o = s.padding / 2, n = e.width, c = e.height, d = new B(this.ctx).drawRect(e.x - r, e.y - o / 2, n + 2 * r, c + o, s.borderRadius, i.config.chart.background === "transparent" ? "#fff" : i.config.chart.background, s.opacity, s.borderWidth, s.borderColor);
      return s.dropShadow.enabled && new pt(this.ctx).dropShadow(d, s.dropShadow), d;
    } }, { key: "dataLabelsBackground", value: function() {
      var t = this.w;
      if (t.config.chart.type !== "bubble")
        for (var e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels text"), i = 0; i < e.length; i++) {
          var s = e[i], r = s.getBBox(), o = null;
          if (r.width && r.height && (o = this.addBackgroundToDataLabel(s, r)), o) {
            s.parentNode.insertBefore(o.node, s);
            var n = s.getAttribute("fill");
            t.config.chart.animations.enabled && !t.globals.resized && !t.globals.dataChanged ? o.animate().attr({ fill: n }) : o.attr({ fill: n }), s.setAttribute("fill", t.config.dataLabels.background.foreColor);
          }
        }
    } }, { key: "bringForward", value: function() {
      for (var t = this.w, e = t.globals.dom.baseEl.querySelectorAll(".apexcharts-datalabels"), i = t.globals.dom.baseEl.querySelector(".apexcharts-plot-series:last-child"), s = 0; s < e.length; s++)
        i && i.insertBefore(e[s], i.nextSibling);
    } }]), E;
  }(), Qt = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w, this.legendInactiveClass = "legend-mouseover-inactive";
    }
    return _(E, [{ key: "getAllSeriesEls", value: function() {
      return this.w.globals.dom.baseEl.getElementsByClassName("apexcharts-series");
    } }, { key: "getSeriesByName", value: function(t) {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-inner .apexcharts-series[seriesName='".concat(F.escapeString(t), "']"));
    } }, { key: "isSeriesHidden", value: function(t) {
      var e = this.getSeriesByName(t), i = parseInt(e.getAttribute("data:realIndex"), 10);
      return { isHidden: e.classList.contains("apexcharts-series-collapsed"), realIndex: i };
    } }, { key: "addCollapsedClassToSeries", value: function(t, e) {
      var i = this.w;
      function s(r) {
        for (var o = 0; o < r.length; o++)
          r[o].index === e && t.node.classList.add("apexcharts-series-collapsed");
      }
      s(i.globals.collapsedSeries), s(i.globals.ancillaryCollapsedSeries);
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
      var t = !(arguments.length > 0 && arguments[0] !== void 0) || arguments[0], e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], s = this.w, r = F.clone(s.globals.initialSeries);
      s.globals.previousPaths = [], i ? (s.globals.collapsedSeries = [], s.globals.ancillaryCollapsedSeries = [], s.globals.collapsedSeriesIndices = [], s.globals.ancillaryCollapsedSeriesIndices = []) : r = this.emptyCollapsedSeries(r), s.config.series = r, t && (e && (s.globals.zoomed = !1, this.ctx.updateHelpers.revertDefaultAxisMinMax()), this.ctx.updateHelpers._updateSeries(r, s.config.chart.animations.dynamicAnimation.enabled));
    } }, { key: "emptyCollapsedSeries", value: function(t) {
      for (var e = this.w, i = 0; i < t.length; i++)
        e.globals.collapsedSeriesIndices.indexOf(i) > -1 && (t[i].data = []);
      return t;
    } }, { key: "toggleSeriesOnHover", value: function(t, e) {
      var i = this.w;
      e || (e = t.target);
      var s = i.globals.dom.baseEl.querySelectorAll(".apexcharts-series, .apexcharts-datalabels");
      if (t.type === "mousemove") {
        var r = parseInt(e.getAttribute("rel"), 10) - 1, o = null, n = null;
        i.globals.axisCharts || i.config.chart.type === "radialBar" ? i.globals.axisCharts ? (o = i.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(r, "']")), n = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels[data\\:realIndex='".concat(r, "']"))) : o = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(r + 1, "']")) : o = i.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(r + 1, "'] path"));
        for (var c = 0; c < s.length; c++)
          s[c].classList.add(this.legendInactiveClass);
        o !== null && (i.globals.axisCharts || o.parentNode.classList.remove(this.legendInactiveClass), o.classList.remove(this.legendInactiveClass), n !== null && n.classList.remove(this.legendInactiveClass));
      } else if (t.type === "mouseout")
        for (var d = 0; d < s.length; d++)
          s[d].classList.remove(this.legendInactiveClass);
    } }, { key: "highlightRangeInSeries", value: function(t, e) {
      var i = this, s = this.w, r = s.globals.dom.baseEl.getElementsByClassName("apexcharts-heatmap-rect"), o = function(c) {
        for (var d = 0; d < r.length; d++)
          r[d].classList[c](i.legendInactiveClass);
      };
      if (t.type === "mousemove") {
        var n = parseInt(e.getAttribute("rel"), 10) - 1;
        o("add"), function(c) {
          for (var d = 0; d < r.length; d++) {
            var g = parseInt(r[d].getAttribute("val"), 10);
            g >= c.from && g <= c.to && r[d].classList.remove(i.legendInactiveClass);
          }
        }(s.config.plotOptions.heatmap.colorScale.ranges[n]);
      } else
        t.type === "mouseout" && o("remove");
    } }, { key: "getActiveConfigSeriesIndex", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "asc", e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], i = this.w, s = 0;
      if (i.config.series.length > 1) {
        for (var r = i.config.series.map(function(n, c) {
          return n.data && n.data.length > 0 && i.globals.collapsedSeriesIndices.indexOf(c) === -1 && (!i.globals.comboCharts || e.length === 0 || e.length && e.indexOf(i.config.series[c].type) > -1) ? c : -1;
        }), o = t === "asc" ? 0 : r.length - 1; t === "asc" ? o < r.length : o >= 0; t === "asc" ? o++ : o--)
          if (r[o] !== -1) {
            s = r[o];
            break;
          }
      }
      return s;
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
      function e(o, n, c) {
        for (var d = o[n].childNodes, g = { type: c, paths: [], realIndex: o[n].getAttribute("data:realIndex") }, p = 0; p < d.length; p++)
          if (d[p].hasAttribute("pathTo")) {
            var x = d[p].getAttribute("pathTo");
            g.paths.push({ d: x });
          }
        t.globals.previousPaths.push(g);
      }
      t.globals.previousPaths = [], ["line", "area", "bar", "rangebar", "rangeArea", "candlestick", "radar"].forEach(function(o) {
        for (var n, c = (n = o, t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(n, "-series .apexcharts-series"))), d = 0; d < c.length; d++)
          e(c, d, o);
      }), this.handlePrevBubbleScatterPaths("bubble"), this.handlePrevBubbleScatterPaths("scatter");
      var i = t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type, " .apexcharts-series"));
      if (i.length > 0)
        for (var s = function(o) {
          for (var n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t.config.chart.type, " .apexcharts-series[data\\:realIndex='").concat(o, "'] rect")), c = [], d = function(p) {
            var x = function(y) {
              return n[p].getAttribute(y);
            }, b = { x: parseFloat(x("x")), y: parseFloat(x("y")), width: parseFloat(x("width")), height: parseFloat(x("height")) };
            c.push({ rect: b, color: n[p].getAttribute("color") });
          }, g = 0; g < n.length; g++)
            d(g);
          t.globals.previousPaths.push(c);
        }, r = 0; r < i.length; r++)
          s(r);
      t.globals.axisCharts || (t.globals.previousPaths = t.globals.series);
    } }, { key: "handlePrevBubbleScatterPaths", value: function(t) {
      var e = this.w, i = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series"));
      if (i.length > 0)
        for (var s = 0; s < i.length; s++) {
          for (var r = e.globals.dom.baseEl.querySelectorAll(".apexcharts-".concat(t, "-series .apexcharts-series[data\\:realIndex='").concat(s, "'] circle")), o = [], n = 0; n < r.length; n++)
            o.push({ x: r[n].getAttribute("cx"), y: r[n].getAttribute("cy"), r: r[n].getAttribute("r") });
          e.globals.previousPaths.push(o);
        }
    } }, { key: "clearPreviousPaths", value: function() {
      var t = this.w;
      t.globals.previousPaths = [], t.globals.allSeriesCollapsed = !1;
    } }, { key: "handleNoData", value: function() {
      var t = this.w, e = t.config.noData, i = new B(this.ctx), s = t.globals.svgWidth / 2, r = t.globals.svgHeight / 2, o = "middle";
      if (t.globals.noData = !0, t.globals.animationEnded = !0, e.align === "left" ? (s = 10, o = "start") : e.align === "right" && (s = t.globals.svgWidth - 10, o = "end"), e.verticalAlign === "top" ? r = 50 : e.verticalAlign === "bottom" && (r = t.globals.svgHeight - 50), s += e.offsetX, r = r + parseInt(e.style.fontSize, 10) + 2 + e.offsetY, e.text !== void 0 && e.text !== "") {
        var n = i.drawText({ x: s, y: r, text: e.text, textAnchor: o, fontSize: e.style.fontSize, fontFamily: e.style.fontFamily, foreColor: e.style.color, opacity: 1, class: "apexcharts-text-nodata" });
        t.globals.dom.Paper.add(n);
      }
    } }, { key: "setNullSeriesToZeroValues", value: function(t) {
      for (var e = this.w, i = 0; i < t.length; i++)
        if (t[i].length === 0)
          for (var s = 0; s < t[e.globals.maxValsInArrayIndex].length; s++)
            t[i].push(0);
      return t;
    } }, { key: "hasAllSeriesEqualX", value: function() {
      for (var t = !0, e = this.w, i = this.filteredSeriesX(), s = 0; s < i.length - 1; s++)
        if (i[s][0] !== i[s + 1][0]) {
          t = !1;
          break;
        }
      return e.globals.allSeriesHasEqualX = t, t;
    } }, { key: "filteredSeriesX", value: function() {
      var t = this.w.globals.seriesX.map(function(e) {
        return e.length > 0 ? e : [];
      });
      return t;
    } }]), E;
  }(), G = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w, this.twoDSeries = [], this.threeDSeries = [], this.twoDSeriesX = [], this.seriesGoals = [], this.coreUtils = new _t(this.ctx);
    }
    return _(E, [{ key: "isMultiFormat", value: function() {
      return this.isFormatXY() || this.isFormat2DArray();
    } }, { key: "isFormatXY", value: function() {
      var t = this.w.config.series.slice(), e = new Qt(this.ctx);
      if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), t[this.activeSeriesIndex].data !== void 0 && t[this.activeSeriesIndex].data.length > 0 && t[this.activeSeriesIndex].data[0] !== null && t[this.activeSeriesIndex].data[0].x !== void 0 && t[this.activeSeriesIndex].data[0] !== null)
        return !0;
    } }, { key: "isFormat2DArray", value: function() {
      var t = this.w.config.series.slice(), e = new Qt(this.ctx);
      if (this.activeSeriesIndex = e.getActiveConfigSeriesIndex(), t[this.activeSeriesIndex].data !== void 0 && t[this.activeSeriesIndex].data.length > 0 && t[this.activeSeriesIndex].data[0] !== void 0 && t[this.activeSeriesIndex].data[0] !== null && t[this.activeSeriesIndex].data[0].constructor === Array)
        return !0;
    } }, { key: "handleFormat2DArray", value: function(t, e) {
      for (var i = this.w.config, s = this.w.globals, r = i.chart.type === "boxPlot" || i.series[e].type === "boxPlot", o = 0; o < t[e].data.length; o++)
        if (t[e].data[o][1] !== void 0 && (Array.isArray(t[e].data[o][1]) && t[e].data[o][1].length === 4 && !r ? this.twoDSeries.push(F.parseNumber(t[e].data[o][1][3])) : t[e].data[o].length >= 5 ? this.twoDSeries.push(F.parseNumber(t[e].data[o][4])) : this.twoDSeries.push(F.parseNumber(t[e].data[o][1])), s.dataFormatXNumeric = !0), i.xaxis.type === "datetime") {
          var n = new Date(t[e].data[o][0]);
          n = new Date(n).getTime(), this.twoDSeriesX.push(n);
        } else
          this.twoDSeriesX.push(t[e].data[o][0]);
      for (var c = 0; c < t[e].data.length; c++)
        t[e].data[c][2] !== void 0 && (this.threeDSeries.push(t[e].data[c][2]), s.isDataXYZ = !0);
    } }, { key: "handleFormatXY", value: function(t, e) {
      var i = this.w.config, s = this.w.globals, r = new Mt(this.ctx), o = e;
      s.collapsedSeriesIndices.indexOf(e) > -1 && (o = this.activeSeriesIndex);
      for (var n = 0; n < t[e].data.length; n++)
        t[e].data[n].y !== void 0 && (Array.isArray(t[e].data[n].y) ? this.twoDSeries.push(F.parseNumber(t[e].data[n].y[t[e].data[n].y.length - 1])) : this.twoDSeries.push(F.parseNumber(t[e].data[n].y))), t[e].data[n].goals !== void 0 && Array.isArray(t[e].data[n].goals) ? (this.seriesGoals[e] === void 0 && (this.seriesGoals[e] = []), this.seriesGoals[e].push(t[e].data[n].goals)) : (this.seriesGoals[e] === void 0 && (this.seriesGoals[e] = []), this.seriesGoals[e].push(null));
      for (var c = 0; c < t[o].data.length; c++) {
        var d = typeof t[o].data[c].x == "string", g = Array.isArray(t[o].data[c].x), p = !g && !!r.isValidDate(t[o].data[c].x);
        if (d || p)
          if (d || i.xaxis.convertedCatToNumeric) {
            var x = s.isBarHorizontal && s.isRangeData;
            i.xaxis.type !== "datetime" || x ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t[o].data[c].x), isNaN(t[o].data[c].x) || this.w.config.xaxis.type === "category" || typeof t[o].data[c].x == "string" || (s.isXNumeric = !0)) : this.twoDSeriesX.push(r.parseDate(t[o].data[c].x));
          } else
            i.xaxis.type === "datetime" ? this.twoDSeriesX.push(r.parseDate(t[o].data[c].x.toString())) : (s.dataFormatXNumeric = !0, s.isXNumeric = !0, this.twoDSeriesX.push(parseFloat(t[o].data[c].x)));
        else
          g ? (this.fallbackToCategory = !0, this.twoDSeriesX.push(t[o].data[c].x)) : (s.isXNumeric = !0, s.dataFormatXNumeric = !0, this.twoDSeriesX.push(t[o].data[c].x));
      }
      if (t[e].data[0] && t[e].data[0].z !== void 0) {
        for (var b = 0; b < t[e].data.length; b++)
          this.threeDSeries.push(t[e].data[b].z);
        s.isDataXYZ = !0;
      }
    } }, { key: "handleRangeData", value: function(t, e) {
      var i = this.w.globals, s = {};
      return this.isFormat2DArray() ? s = this.handleRangeDataFormat("array", t, e) : this.isFormatXY() && (s = this.handleRangeDataFormat("xy", t, e)), i.seriesRangeStart.push(s.start), i.seriesRangeEnd.push(s.end), i.seriesRange.push(s.rangeUniques), i.seriesRange.forEach(function(r, o) {
        r && r.forEach(function(n, c) {
          n.y.forEach(function(d, g) {
            for (var p = 0; p < n.y.length; p++)
              if (g !== p) {
                var x = d.y1, b = d.y2, y = n.y[p].y1;
                x <= n.y[p].y2 && y <= b && (n.overlaps.indexOf(d.rangeName) < 0 && n.overlaps.push(d.rangeName), n.overlaps.indexOf(n.y[p].rangeName) < 0 && n.overlaps.push(n.y[p].rangeName));
              }
          });
        });
      }), s;
    } }, { key: "handleCandleStickBoxData", value: function(t, e) {
      var i = this.w.globals, s = {};
      return this.isFormat2DArray() ? s = this.handleCandleStickBoxDataFormat("array", t, e) : this.isFormatXY() && (s = this.handleCandleStickBoxDataFormat("xy", t, e)), i.seriesCandleO[e] = s.o, i.seriesCandleH[e] = s.h, i.seriesCandleM[e] = s.m, i.seriesCandleL[e] = s.l, i.seriesCandleC[e] = s.c, s;
    } }, { key: "handleRangeDataFormat", value: function(t, e, i) {
      var s = [], r = [], o = e[i].data.filter(function(g, p, x) {
        return p === x.findIndex(function(b) {
          return b.x === g.x;
        });
      }).map(function(g, p) {
        return { x: g.x, overlaps: [], y: [] };
      });
      if (t === "array")
        for (var n = 0; n < e[i].data.length; n++)
          Array.isArray(e[i].data[n]) ? (s.push(e[i].data[n][1][0]), r.push(e[i].data[n][1][1])) : (s.push(e[i].data[n]), r.push(e[i].data[n]));
      else if (t === "xy")
        for (var c = function(g) {
          var p = Array.isArray(e[i].data[g].y), x = F.randomId(), b = e[i].data[g].x, y = { y1: p ? e[i].data[g].y[0] : e[i].data[g].y, y2: p ? e[i].data[g].y[1] : e[i].data[g].y, rangeName: x };
          e[i].data[g].rangeName = x;
          var A = o.findIndex(function(S) {
            return S.x === b;
          });
          o[A].y.push(y), s.push(y.y1), r.push(y.y2);
        }, d = 0; d < e[i].data.length; d++)
          c(d);
      return { start: s, end: r, rangeUniques: o };
    } }, { key: "handleCandleStickBoxDataFormat", value: function(t, e, i) {
      var s = this.w, r = s.config.chart.type === "boxPlot" || s.config.series[i].type === "boxPlot", o = [], n = [], c = [], d = [], g = [];
      if (t === "array")
        if (r && e[i].data[0].length === 6 || !r && e[i].data[0].length === 5)
          for (var p = 0; p < e[i].data.length; p++)
            o.push(e[i].data[p][1]), n.push(e[i].data[p][2]), r ? (c.push(e[i].data[p][3]), d.push(e[i].data[p][4]), g.push(e[i].data[p][5])) : (d.push(e[i].data[p][3]), g.push(e[i].data[p][4]));
        else
          for (var x = 0; x < e[i].data.length; x++)
            Array.isArray(e[i].data[x][1]) && (o.push(e[i].data[x][1][0]), n.push(e[i].data[x][1][1]), r ? (c.push(e[i].data[x][1][2]), d.push(e[i].data[x][1][3]), g.push(e[i].data[x][1][4])) : (d.push(e[i].data[x][1][2]), g.push(e[i].data[x][1][3])));
      else if (t === "xy")
        for (var b = 0; b < e[i].data.length; b++)
          Array.isArray(e[i].data[b].y) && (o.push(e[i].data[b].y[0]), n.push(e[i].data[b].y[1]), r ? (c.push(e[i].data[b].y[2]), d.push(e[i].data[b].y[3]), g.push(e[i].data[b].y[4])) : (d.push(e[i].data[b].y[2]), g.push(e[i].data[b].y[3])));
      return { o, h: n, m: c, l: d, c: g };
    } }, { key: "parseDataAxisCharts", value: function(t) {
      var e, i = this, s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : this.ctx, r = this.w.config, o = this.w.globals, n = new Mt(s), c = r.labels.length > 0 ? r.labels.slice() : r.xaxis.categories.slice();
      if (o.isRangeBar = r.chart.type === "rangeBar" && o.isBarHorizontal, o.hasXaxisGroups = r.xaxis.type === "category" && r.xaxis.group.groups.length > 0, o.hasXaxisGroups && (o.groups = r.xaxis.group.groups), o.hasSeriesGroups = (e = t[0]) === null || e === void 0 ? void 0 : e.group, o.hasSeriesGroups) {
        var d = [], g = lt(new Set(t.map(function(y) {
          return y.group;
        })));
        t.forEach(function(y, A) {
          var S = g.indexOf(y.group);
          d[S] || (d[S] = []), d[S].push(y.name);
        }), o.seriesGroups = d;
      }
      for (var p = function() {
        for (var y = 0; y < c.length; y++)
          if (typeof c[y] == "string") {
            if (!n.isValidDate(c[y]))
              throw new Error("You have provided invalid Date format. Please provide a valid JavaScript Date");
            i.twoDSeriesX.push(n.parseDate(c[y]));
          } else
            i.twoDSeriesX.push(c[y]);
      }, x = 0; x < t.length; x++) {
        if (this.twoDSeries = [], this.twoDSeriesX = [], this.threeDSeries = [], t[x].data === void 0)
          return void console.error("It is a possibility that you may have not included 'data' property in series.");
        if (r.chart.type !== "rangeBar" && r.chart.type !== "rangeArea" && t[x].type !== "rangeBar" && t[x].type !== "rangeArea" || (o.isRangeData = !0, r.chart.type !== "rangeBar" && r.chart.type !== "rangeArea" || this.handleRangeData(t, x)), this.isMultiFormat())
          this.isFormat2DArray() ? this.handleFormat2DArray(t, x) : this.isFormatXY() && this.handleFormatXY(t, x), r.chart.type !== "candlestick" && t[x].type !== "candlestick" && r.chart.type !== "boxPlot" && t[x].type !== "boxPlot" || this.handleCandleStickBoxData(t, x), o.series.push(this.twoDSeries), o.labels.push(this.twoDSeriesX), o.seriesX.push(this.twoDSeriesX), o.seriesGoals = this.seriesGoals, x !== this.activeSeriesIndex || this.fallbackToCategory || (o.isXNumeric = !0);
        else {
          r.xaxis.type === "datetime" ? (o.isXNumeric = !0, p(), o.seriesX.push(this.twoDSeriesX)) : r.xaxis.type === "numeric" && (o.isXNumeric = !0, c.length > 0 && (this.twoDSeriesX = c, o.seriesX.push(this.twoDSeriesX))), o.labels.push(this.twoDSeriesX);
          var b = t[x].data.map(function(y) {
            return F.parseNumber(y);
          });
          o.series.push(b);
        }
        o.seriesZ.push(this.threeDSeries), t[x].name !== void 0 ? o.seriesNames.push(t[x].name) : o.seriesNames.push("series-" + parseInt(x + 1, 10)), t[x].color !== void 0 ? o.seriesColors.push(t[x].color) : o.seriesColors.push(void 0);
      }
      return this.w;
    } }, { key: "parseDataNonAxisCharts", value: function(t) {
      var e = this.w.globals, i = this.w.config;
      e.series = t.slice(), e.seriesNames = i.labels.slice();
      for (var s = 0; s < e.series.length; s++)
        e.seriesNames[s] === void 0 && e.seriesNames.push("series-" + (s + 1));
      return this.w;
    } }, { key: "handleExternalLabelsData", value: function(t) {
      var e = this.w.config, i = this.w.globals;
      e.xaxis.categories.length > 0 ? i.labels = e.xaxis.categories : e.labels.length > 0 ? i.labels = e.labels.slice() : this.fallbackToCategory ? (i.labels = i.labels[0], i.seriesRange.length && (i.seriesRange.map(function(s) {
        s.forEach(function(r) {
          i.labels.indexOf(r.x) < 0 && r.x && i.labels.push(r.x);
        });
      }), i.labels = Array.from(new Set(i.labels.map(JSON.stringify)), JSON.parse)), e.xaxis.convertedCatToNumeric && (new kt(e).convertCatToNumericXaxis(e, this.ctx, i.seriesX[0]), this._generateExternalLabels(t))) : this._generateExternalLabels(t);
    } }, { key: "_generateExternalLabels", value: function(t) {
      var e = this.w.globals, i = this.w.config, s = [];
      if (e.axisCharts) {
        if (e.series.length > 0)
          if (this.isFormatXY())
            for (var r = i.series.map(function(p, x) {
              return p.data.filter(function(b, y, A) {
                return A.findIndex(function(S) {
                  return S.x === b.x;
                }) === y;
              });
            }), o = r.reduce(function(p, x, b, y) {
              return y[p].length > x.length ? p : b;
            }, 0), n = 0; n < r[o].length; n++)
              s.push(n + 1);
          else
            for (var c = 0; c < e.series[e.maxValsInArrayIndex].length; c++)
              s.push(c + 1);
        e.seriesX = [];
        for (var d = 0; d < t.length; d++)
          e.seriesX.push(s);
        this.w.globals.isBarHorizontal || (e.isXNumeric = !0);
      }
      if (s.length === 0) {
        s = e.axisCharts ? [] : e.series.map(function(p, x) {
          return x + 1;
        });
        for (var g = 0; g < t.length; g++)
          e.seriesX.push(s);
      }
      e.labels = s, i.xaxis.convertedCatToNumeric && (e.categoryLabels = s.map(function(p) {
        return i.xaxis.labels.formatter(p);
      })), e.noLabelsProvided = !0;
    } }, { key: "parseData", value: function(t) {
      var e = this.w, i = e.config, s = e.globals;
      if (this.excludeCollapsedSeriesInYAxis(), this.fallbackToCategory = !1, this.ctx.core.resetGlobals(), this.ctx.core.isMultipleY(), s.axisCharts ? (this.parseDataAxisCharts(t), this.coreUtils.getLargestSeries()) : this.parseDataNonAxisCharts(t), i.chart.stacked) {
        var r = new Qt(this.ctx);
        s.series = r.setNullSeriesToZeroValues(s.series);
      }
      this.coreUtils.getSeriesTotals(), s.axisCharts && (s.stackedSeriesTotals = this.coreUtils.getStackedSeriesTotals(), s.stackedSeriesTotalsByGroups = this.coreUtils.getStackedSeriesTotalsByGroups()), this.coreUtils.getPercentSeries(), s.dataFormatXNumeric || s.isXNumeric && (i.xaxis.type !== "numeric" || i.labels.length !== 0 || i.xaxis.categories.length !== 0) || this.handleExternalLabelsData(t);
      for (var o = this.coreUtils.getCategoryLabels(s.labels), n = 0; n < o.length; n++)
        if (Array.isArray(o[n])) {
          s.isMultiLineX = !0;
          break;
        }
    } }, { key: "excludeCollapsedSeriesInYAxis", value: function() {
      var t = this, e = this.w;
      e.globals.ignoreYAxisIndexes = e.globals.collapsedSeries.map(function(i, s) {
        if (t.w.globals.isMultipleYAxis && !e.config.chart.stacked)
          return i.index;
      });
    } }]), E;
  }(), rt = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "getLabel", value: function(t, e, i, s) {
      var r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : "12px", n = !(arguments.length > 6 && arguments[6] !== void 0) || arguments[6], c = this.w, d = t[s] === void 0 ? "" : t[s], g = d, p = c.globals.xLabelFormatter, x = c.config.xaxis.labels.formatter, b = !1, y = new qt(this.ctx), A = d;
      n && (g = y.xLabelFormat(p, d, A, { i: s, dateFormatter: new Mt(this.ctx).formatDate, w: c }), x !== void 0 && (g = x(d, t[s], { i: s, dateFormatter: new Mt(this.ctx).formatDate, w: c })));
      var S, N;
      e.length > 0 ? (S = e[s].unit, N = null, e.forEach(function(k) {
        k.unit === "month" ? N = "year" : k.unit === "day" ? N = "month" : k.unit === "hour" ? N = "day" : k.unit === "minute" && (N = "hour");
      }), b = N === S, i = e[s].position, g = e[s].value) : c.config.xaxis.type === "datetime" && x === void 0 && (g = ""), g === void 0 && (g = ""), g = Array.isArray(g) ? g : g.toString();
      var L = new B(this.ctx), h = {};
      h = c.globals.rotateXLabels && n ? L.getTextRects(g, parseInt(o, 10), null, "rotate(".concat(c.config.xaxis.labels.rotate, " 0 0)"), !1) : L.getTextRects(g, parseInt(o, 10));
      var m = !c.config.xaxis.labels.showDuplicates && this.ctx.timeScale;
      return !Array.isArray(g) && (g.indexOf("NaN") === 0 || g.toLowerCase().indexOf("invalid") === 0 || g.toLowerCase().indexOf("infinity") >= 0 || r.indexOf(g) >= 0 && m) && (g = ""), { x: i, text: g, textRect: h, isBold: b };
    } }, { key: "checkLabelBasedOnTickamount", value: function(t, e, i) {
      var s = this.w, r = s.config.xaxis.tickAmount;
      return r === "dataPoints" && (r = Math.round(s.globals.gridWidth / 120)), r > i || t % Math.round(i / (r + 1)) == 0 || (e.text = ""), e;
    } }, { key: "checkForOverflowingLabels", value: function(t, e, i, s, r) {
      var o = this.w;
      if (t === 0 && o.globals.skipFirstTimelinelabel && (e.text = ""), t === i - 1 && o.globals.skipLastTimelinelabel && (e.text = ""), o.config.xaxis.labels.hideOverlappingLabels && s.length > 0) {
        var n = r[r.length - 1];
        e.x < n.textRect.width / (o.globals.rotateXLabels ? Math.abs(o.config.xaxis.labels.rotate) / 12 : 1.01) + n.x && (e.text = "");
      }
      return e;
    } }, { key: "checkForReversedLabels", value: function(t, e) {
      var i = this.w;
      return i.config.yaxis[t] && i.config.yaxis[t].reversed && e.reverse(), e;
    } }, { key: "isYAxisHidden", value: function(t) {
      var e = this.w, i = new _t(this.ctx);
      return !e.config.yaxis[t].show || !e.config.yaxis[t].showForNullSeries && i.isSeriesNull(t) && e.globals.collapsedSeriesIndices.indexOf(t) === -1;
    } }, { key: "getYAxisForeColor", value: function(t, e) {
      var i = this.w;
      return Array.isArray(t) && i.globals.yAxisScale[e] && this.ctx.theme.pushExtraColors(t, i.globals.yAxisScale[e].result.length, !1), t;
    } }, { key: "drawYAxisTicks", value: function(t, e, i, s, r, o, n) {
      var c = this.w, d = new B(this.ctx), g = c.globals.translateY;
      if (s.show && e > 0) {
        c.config.yaxis[r].opposite === !0 && (t += s.width);
        for (var p = e; p >= 0; p--) {
          var x = g + e / 10 + c.config.yaxis[r].labels.offsetY - 1;
          c.globals.isBarHorizontal && (x = o * p), c.config.chart.type === "heatmap" && (x += o / 2);
          var b = d.drawLine(t + i.offsetX - s.width + s.offsetX, x + s.offsetY, t + i.offsetX + s.offsetX, x + s.offsetY, s.color);
          n.add(b), g += o;
        }
      }
    } }]), E;
  }(), nt = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "scaleSvgNode", value: function(t, e) {
      var i = parseFloat(t.getAttributeNS(null, "width")), s = parseFloat(t.getAttributeNS(null, "height"));
      t.setAttributeNS(null, "width", i * e), t.setAttributeNS(null, "height", s * e), t.setAttributeNS(null, "viewBox", "0 0 " + i + " " + s);
    } }, { key: "fixSvgStringForIe11", value: function(t) {
      if (!F.isIE11())
        return t.replace(/&nbsp;/g, "&#160;");
      var e = 0, i = t.replace(/xmlns="http:\/\/www.w3.org\/2000\/svg"/g, function(s) {
        return ++e === 2 ? 'xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.dev"' : s;
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
      var t = this.w, e = t.globals.dom.baseEl.getElementsByClassName("apexcharts-xcrosshairs"), i = t.globals.dom.baseEl.getElementsByClassName("apexcharts-ycrosshairs"), s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-zoom-rect, .apexcharts-selection-rect");
      Array.prototype.forEach.call(s, function(r) {
        r.setAttribute("width", 0);
      }), e && e[0] && (e[0].setAttribute("x", -500), e[0].setAttribute("x1", -500), e[0].setAttribute("x2", -500)), i && i[0] && (i[0].setAttribute("y", -100), i[0].setAttribute("y1", -100), i[0].setAttribute("y2", -100));
    } }, { key: "svgUrl", value: function() {
      this.cleanup();
      var t = this.getSvgString(), e = new Blob([t], { type: "image/svg+xml;charset=utf-8" });
      return URL.createObjectURL(e);
    } }, { key: "dataURI", value: function(t) {
      var e = this;
      return new Promise(function(i) {
        var s = e.w, r = t ? t.scale || t.width / s.globals.svgWidth : 1;
        e.cleanup();
        var o = document.createElement("canvas");
        o.width = s.globals.svgWidth * r, o.height = parseInt(s.globals.dom.elWrap.style.height, 10) * r;
        var n = s.config.chart.background === "transparent" ? "#fff" : s.config.chart.background, c = o.getContext("2d");
        c.fillStyle = n, c.fillRect(0, 0, o.width * r, o.height * r);
        var d = e.getSvgString(r);
        if (window.canvg && F.isIE11()) {
          var g = window.canvg.Canvg.fromString(c, d, { ignoreClear: !0, ignoreDimensions: !0 });
          g.start();
          var p = o.msToBlob();
          g.stop(), i({ blob: p });
        } else {
          var x = "data:image/svg+xml," + encodeURIComponent(d), b = new Image();
          b.crossOrigin = "anonymous", b.onload = function() {
            if (c.drawImage(b, 0, 0), o.msToBlob) {
              var y = o.msToBlob();
              i({ blob: y });
            } else {
              var A = o.toDataURL("image/png");
              i({ imgURI: A });
            }
          }, b.src = x;
        }
      });
    } }, { key: "exportToSVG", value: function() {
      this.triggerDownload(this.svgUrl(), this.w.config.chart.toolbar.export.svg.filename, ".svg");
    } }, { key: "exportToPng", value: function() {
      var t = this;
      this.dataURI().then(function(e) {
        var i = e.imgURI, s = e.blob;
        s ? navigator.msSaveOrOpenBlob(s, t.w.globals.chartID + ".png") : t.triggerDownload(i, t.w.config.chart.toolbar.export.png.filename, ".png");
      });
    } }, { key: "exportToCSV", value: function(t) {
      var e = this, i = t.series, s = t.fileName, r = t.columnDelimiter, o = r === void 0 ? "," : r, n = t.lineDelimiter, c = n === void 0 ? `
` : n, d = this.w;
      i || (i = d.config.series);
      var g, p, x = [], b = [], y = "", A = d.globals.series.map(function(C, O) {
        return d.globals.collapsedSeriesIndices.indexOf(O) === -1 ? C : [];
      }), S = function(C) {
        return d.config.xaxis.type === "datetime" && String(C).length >= 10;
      }, N = Math.max.apply(Math, lt(i.map(function(C) {
        return C.data ? C.data.length : 0;
      }))), L = new G(this.ctx), h = new rt(this.ctx), m = function(C) {
        var O = "";
        if (d.globals.axisCharts) {
          if (d.config.xaxis.type === "category" || d.config.xaxis.convertedCatToNumeric)
            if (d.globals.isBarHorizontal) {
              var I = d.globals.yLabelFormatters[0], X = new Qt(e.ctx).getActiveConfigSeriesIndex();
              O = I(d.globals.labels[C], { seriesIndex: X, dataPointIndex: C, w: d });
            } else
              O = h.getLabel(d.globals.labels, d.globals.timescaleLabels, 0, C).text;
          d.config.xaxis.type === "datetime" && (d.config.xaxis.categories.length ? O = d.config.xaxis.categories[C] : d.config.labels.length && (O = d.config.labels[C]));
        } else
          O = d.config.labels[C];
        return Array.isArray(O) && (O = O.join(" ")), F.isNumber(O) ? O : O.split(o).join("");
      }, k = function(C, O) {
        if (x.length && O === 0 && b.push(x.join(o)), C.data) {
          C.data = C.data.length && C.data || lt(Array(N)).map(function() {
            return "";
          });
          for (var I = 0; I < C.data.length; I++) {
            x = [];
            var X = m(I);
            if (X || (L.isFormatXY() ? X = i[O].data[I].x : L.isFormat2DArray() && (X = i[O].data[I] ? i[O].data[I][0] : "")), O === 0) {
              x.push(S(X) ? d.config.chart.toolbar.export.csv.dateFormatter(X) : F.isNumber(X) ? X : X.split(o).join(""));
              for (var Y = 0; Y < d.globals.series.length; Y++) {
                var W;
                L.isFormatXY() ? x.push((W = i[Y].data[I]) === null || W === void 0 ? void 0 : W.y) : x.push(A[Y][I]);
              }
            }
            (d.config.chart.type === "candlestick" || C.type && C.type === "candlestick") && (x.pop(), x.push(d.globals.seriesCandleO[O][I]), x.push(d.globals.seriesCandleH[O][I]), x.push(d.globals.seriesCandleL[O][I]), x.push(d.globals.seriesCandleC[O][I])), (d.config.chart.type === "boxPlot" || C.type && C.type === "boxPlot") && (x.pop(), x.push(d.globals.seriesCandleO[O][I]), x.push(d.globals.seriesCandleH[O][I]), x.push(d.globals.seriesCandleM[O][I]), x.push(d.globals.seriesCandleL[O][I]), x.push(d.globals.seriesCandleC[O][I])), d.config.chart.type === "rangeBar" && (x.pop(), x.push(d.globals.seriesRangeStart[O][I]), x.push(d.globals.seriesRangeEnd[O][I])), x.length && b.push(x.join(o));
          }
        }
      };
      x.push(d.config.chart.toolbar.export.csv.headerCategory), d.config.chart.type === "boxPlot" ? (x.push("minimum"), x.push("q1"), x.push("median"), x.push("q3"), x.push("maximum")) : d.config.chart.type === "candlestick" ? (x.push("open"), x.push("high"), x.push("low"), x.push("close")) : d.config.chart.type === "rangeBar" ? (x.push("minimum"), x.push("maximum")) : i.map(function(C, O) {
        var I = (C.name ? C.name : "series-".concat(O)) + "";
        d.globals.axisCharts && x.push(I.split(o).join("") ? I.split(o).join("") : "series-".concat(O));
      }), d.globals.axisCharts || (x.push(d.config.chart.toolbar.export.csv.headerValue), b.push(x.join(o))), d.globals.allSeriesHasEqualX || !d.globals.axisCharts || d.config.xaxis.categories.length || d.config.labels.length ? i.map(function(C, O) {
        d.globals.axisCharts ? k(C, O) : ((x = []).push(d.globals.labels[O].split(o).join("")), x.push(A[O]), b.push(x.join(o)));
      }) : (g = /* @__PURE__ */ new Set(), p = {}, i.forEach(function(C, O) {
        C == null || C.data.forEach(function(I) {
          var X, Y;
          if (L.isFormatXY())
            X = I.x, Y = I.y;
          else {
            if (!L.isFormat2DArray())
              return;
            X = I[0], Y = I[1];
          }
          p[X] || (p[X] = Array(i.length).fill("")), p[X][O] = Y, g.add(X);
        });
      }), x.length && b.push(x.join(o)), Array.from(g).sort().forEach(function(C) {
        b.push([S(C) && d.config.xaxis.type === "datetime" ? d.config.chart.toolbar.export.csv.dateFormatter(C) : F.isNumber(C) ? C : C.split(o).join(""), p[C].join(o)]);
      })), y += b.join(c), this.triggerDownload("data:text/csv; charset=utf-8," + encodeURIComponent("\uFEFF" + y), s || d.config.chart.toolbar.export.csv.filename, ".csv");
    } }, { key: "triggerDownload", value: function(t, e, i) {
      var s = document.createElement("a");
      s.href = t, s.download = (e || this.w.globals.chartID) + i, document.body.appendChild(s), s.click(), document.body.removeChild(s);
    } }]), E;
  }(), ht = function() {
    function E(t, e) {
      w(this, E), this.ctx = t, this.elgrid = e, this.w = t.w;
      var i = this.w;
      this.axesUtils = new rt(t), this.xaxisLabels = i.globals.labels.slice(), i.globals.timescaleLabels.length > 0 && !i.globals.isBarHorizontal && (this.xaxisLabels = i.globals.timescaleLabels.slice()), i.config.xaxis.overwriteCategories && (this.xaxisLabels = i.config.xaxis.overwriteCategories), this.drawnLabels = [], this.drawnLabelsRects = [], i.config.xaxis.position === "top" ? this.offY = 0 : this.offY = i.globals.gridHeight + 1, this.offY = this.offY + i.config.xaxis.axisBorder.offsetY, this.isCategoryBarHorizontal = i.config.chart.type === "bar" && i.config.plotOptions.bar.horizontal, this.xaxisFontSize = i.config.xaxis.labels.style.fontSize, this.xaxisFontFamily = i.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = i.config.xaxis.labels.style.colors, this.xaxisBorderWidth = i.config.xaxis.axisBorder.width, this.isCategoryBarHorizontal && (this.xaxisBorderWidth = i.config.yaxis[0].axisBorder.width.toString()), this.xaxisBorderWidth.indexOf("%") > -1 ? this.xaxisBorderWidth = i.globals.gridWidth * parseInt(this.xaxisBorderWidth, 10) / 100 : this.xaxisBorderWidth = parseInt(this.xaxisBorderWidth, 10), this.xaxisBorderHeight = i.config.xaxis.axisBorder.height, this.yaxis = i.config.yaxis[0];
    }
    return _(E, [{ key: "drawXaxis", value: function() {
      var t = this.w, e = new B(this.ctx), i = e.group({ class: "apexcharts-xaxis", transform: "translate(".concat(t.config.xaxis.offsetX, ", ").concat(t.config.xaxis.offsetY, ")") }), s = e.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(t.globals.translateXAxisX, ", ").concat(t.globals.translateXAxisY, ")") });
      i.add(s);
      for (var r = [], o = 0; o < this.xaxisLabels.length; o++)
        r.push(this.xaxisLabels[o]);
      if (this.drawXAxisLabelAndGroup(!0, e, s, r, t.globals.isXNumeric, function(y, A) {
        return A;
      }), t.globals.hasXaxisGroups) {
        var n = t.globals.groups;
        r = [];
        for (var c = 0; c < n.length; c++)
          r.push(n[c].title);
        var d = {};
        t.config.xaxis.group.style && (d.xaxisFontSize = t.config.xaxis.group.style.fontSize, d.xaxisFontFamily = t.config.xaxis.group.style.fontFamily, d.xaxisForeColors = t.config.xaxis.group.style.colors, d.fontWeight = t.config.xaxis.group.style.fontWeight, d.cssClass = t.config.xaxis.group.style.cssClass), this.drawXAxisLabelAndGroup(!1, e, s, r, !1, function(y, A) {
          return n[y].cols * A;
        }, d);
      }
      if (t.config.xaxis.title.text !== void 0) {
        var g = e.group({ class: "apexcharts-xaxis-title" }), p = e.drawText({ x: t.globals.gridWidth / 2 + t.config.xaxis.title.offsetX, y: this.offY + parseFloat(this.xaxisFontSize) + (t.config.xaxis.position === "bottom" ? t.globals.xAxisLabelsHeight : -t.globals.xAxisLabelsHeight - 10) + t.config.xaxis.title.offsetY, text: t.config.xaxis.title.text, textAnchor: "middle", fontSize: t.config.xaxis.title.style.fontSize, fontFamily: t.config.xaxis.title.style.fontFamily, fontWeight: t.config.xaxis.title.style.fontWeight, foreColor: t.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + t.config.xaxis.title.style.cssClass });
        g.add(p), i.add(g);
      }
      if (t.config.xaxis.axisBorder.show) {
        var x = t.globals.barPadForNumericAxis, b = e.drawLine(t.globals.padHorizontal + t.config.xaxis.axisBorder.offsetX - x, this.offY, this.xaxisBorderWidth + x, this.offY, t.config.xaxis.axisBorder.color, 0, this.xaxisBorderHeight);
        this.elgrid && this.elgrid.elGridBorders && t.config.grid.show ? this.elgrid.elGridBorders.add(b) : i.add(b);
      }
      return i;
    } }, { key: "drawXAxisLabelAndGroup", value: function(t, e, i, s, r, o) {
      var n, c = this, d = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : {}, g = [], p = [], x = this.w, b = d.xaxisFontSize || this.xaxisFontSize, y = d.xaxisFontFamily || this.xaxisFontFamily, A = d.xaxisForeColors || this.xaxisForeColors, S = d.fontWeight || x.config.xaxis.labels.style.fontWeight, N = d.cssClass || x.config.xaxis.labels.style.cssClass, L = x.globals.padHorizontal, h = s.length, m = x.config.xaxis.type === "category" ? x.globals.dataPoints : h;
      if (m === 0 && h > m && (m = h), r) {
        var k = m > 1 ? m - 1 : m;
        n = x.globals.gridWidth / Math.min(k, h - 1), L = L + o(0, n) / 2 + x.config.xaxis.labels.offsetX;
      } else
        n = x.globals.gridWidth / m, L = L + o(0, n) + x.config.xaxis.labels.offsetX;
      for (var C = function(I) {
        var X = L - o(I, n) / 2 + x.config.xaxis.labels.offsetX;
        I === 0 && h === 1 && n / 2 === L && m === 1 && (X = x.globals.gridWidth / 2);
        var Y = c.axesUtils.getLabel(s, x.globals.timescaleLabels, X, I, g, b, t), W = 28;
        if (x.globals.rotateXLabels && t && (W = 22), x.config.xaxis.title.text && x.config.xaxis.position === "top" && (W += parseFloat(x.config.xaxis.title.style.fontSize) + 2), t || (W = W + parseFloat(b) + (x.globals.xAxisLabelsHeight - x.globals.xAxisGroupLabelsHeight) + (x.globals.rotateXLabels ? 10 : 0)), Y = x.config.xaxis.tickAmount !== void 0 && x.config.xaxis.tickAmount !== "dataPoints" && x.config.xaxis.type !== "datetime" ? c.axesUtils.checkLabelBasedOnTickamount(I, Y, h) : c.axesUtils.checkForOverflowingLabels(I, Y, h, g, p), x.config.xaxis.labels.show) {
          var q = e.drawText({ x: Y.x, y: c.offY + x.config.xaxis.labels.offsetY + W - (x.config.xaxis.position === "top" ? x.globals.xAxisHeight + x.config.xaxis.axisTicks.height - 2 : 0), text: Y.text, textAnchor: "middle", fontWeight: Y.isBold ? 600 : S, fontSize: b, fontFamily: y, foreColor: Array.isArray(A) ? t && x.config.xaxis.convertedCatToNumeric ? A[x.globals.minX + I - 1] : A[I] : A, isPlainText: !1, cssClass: (t ? "apexcharts-xaxis-label " : "apexcharts-xaxis-group-label ") + N });
          if (i.add(q), q.on("click", function(st) {
            if (typeof x.config.chart.events.xAxisLabelClick == "function") {
              var dt = Object.assign({}, x, { labelIndex: I });
              x.config.chart.events.xAxisLabelClick(st, c.ctx, dt);
            }
          }), t) {
            var U = document.createElementNS(x.globals.SVGNS, "title");
            U.textContent = Array.isArray(Y.text) ? Y.text.join(" ") : Y.text, q.node.appendChild(U), Y.text !== "" && (g.push(Y.text), p.push(Y));
          }
        }
        I < h - 1 && (L += o(I + 1, n));
      }, O = 0; O <= h - 1; O++)
        C(O);
    } }, { key: "drawXaxisInversed", value: function(t) {
      var e, i, s = this, r = this.w, o = new B(this.ctx), n = r.config.yaxis[0].opposite ? r.globals.translateYAxisX[t] : 0, c = o.group({ class: "apexcharts-yaxis apexcharts-xaxis-inversed", rel: t }), d = o.group({ class: "apexcharts-yaxis-texts-g apexcharts-xaxis-inversed-texts-g", transform: "translate(" + n + ", 0)" });
      c.add(d);
      var g = [];
      if (r.config.yaxis[t].show)
        for (var p = 0; p < this.xaxisLabels.length; p++)
          g.push(this.xaxisLabels[p]);
      e = r.globals.gridHeight / g.length, i = -e / 2.2;
      var x = r.globals.yLabelFormatters[0], b = r.config.yaxis[0].labels;
      if (b.show)
        for (var y = function(k) {
          var C = g[k] === void 0 ? "" : g[k];
          C = x(C, { seriesIndex: t, dataPointIndex: k, w: r });
          var O = s.axesUtils.getYAxisForeColor(b.style.colors, t), I = 0;
          Array.isArray(C) && (I = C.length / 2 * parseInt(b.style.fontSize, 10));
          var X = b.offsetX - 15, Y = "end";
          s.yaxis.opposite && (Y = "start"), r.config.yaxis[0].labels.align === "left" ? (X = b.offsetX, Y = "start") : r.config.yaxis[0].labels.align === "center" ? (X = b.offsetX, Y = "middle") : r.config.yaxis[0].labels.align === "right" && (Y = "end");
          var W = o.drawText({ x: X, y: i + e + b.offsetY - I, text: C, textAnchor: Y, foreColor: Array.isArray(O) ? O[k] : O, fontSize: b.style.fontSize, fontFamily: b.style.fontFamily, fontWeight: b.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-yaxis-label " + b.style.cssClass, maxWidth: b.maxWidth });
          d.add(W), W.on("click", function(st) {
            if (typeof r.config.chart.events.xAxisLabelClick == "function") {
              var dt = Object.assign({}, r, { labelIndex: k });
              r.config.chart.events.xAxisLabelClick(st, s.ctx, dt);
            }
          });
          var q = document.createElementNS(r.globals.SVGNS, "title");
          if (q.textContent = Array.isArray(C) ? C.join(" ") : C, W.node.appendChild(q), r.config.yaxis[t].labels.rotate !== 0) {
            var U = o.rotateAroundCenter(W.node);
            W.node.setAttribute("transform", "rotate(".concat(r.config.yaxis[t].labels.rotate, " 0 ").concat(U.y, ")"));
          }
          i += e;
        }, A = 0; A <= g.length - 1; A++)
          y(A);
      if (r.config.yaxis[0].title.text !== void 0) {
        var S = o.group({ class: "apexcharts-yaxis-title apexcharts-xaxis-title-inversed", transform: "translate(" + n + ", 0)" }), N = o.drawText({ x: r.config.yaxis[0].title.offsetX, y: r.globals.gridHeight / 2 + r.config.yaxis[0].title.offsetY, text: r.config.yaxis[0].title.text, textAnchor: "middle", foreColor: r.config.yaxis[0].title.style.color, fontSize: r.config.yaxis[0].title.style.fontSize, fontWeight: r.config.yaxis[0].title.style.fontWeight, fontFamily: r.config.yaxis[0].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + r.config.yaxis[0].title.style.cssClass });
        S.add(N), c.add(S);
      }
      var L = 0;
      this.isCategoryBarHorizontal && r.config.yaxis[0].opposite && (L = r.globals.gridWidth);
      var h = r.config.xaxis.axisBorder;
      if (h.show) {
        var m = o.drawLine(r.globals.padHorizontal + h.offsetX + L, 1 + h.offsetY, r.globals.padHorizontal + h.offsetX + L, r.globals.gridHeight + h.offsetY, h.color, 0);
        this.elgrid && this.elgrid.elGridBorders && r.config.grid.show ? this.elgrid.elGridBorders.add(m) : c.add(m);
      }
      return r.config.yaxis[0].axisTicks.show && this.axesUtils.drawYAxisTicks(L, g.length, r.config.yaxis[0].axisBorder, r.config.yaxis[0].axisTicks, 0, e, c), c;
    } }, { key: "drawXaxisTicks", value: function(t, e, i) {
      var s = this.w, r = t;
      if (!(t < 0 || t - 2 > s.globals.gridWidth)) {
        var o = this.offY + s.config.xaxis.axisTicks.offsetY;
        if (e = e + o + s.config.xaxis.axisTicks.height, s.config.xaxis.position === "top" && (e = o - s.config.xaxis.axisTicks.height), s.config.xaxis.axisTicks.show) {
          var n = new B(this.ctx).drawLine(t + s.config.xaxis.axisTicks.offsetX, o + s.config.xaxis.offsetY, r + s.config.xaxis.axisTicks.offsetX, e + s.config.xaxis.offsetY, s.config.xaxis.axisTicks.color);
          i.add(n), n.node.classList.add("apexcharts-xaxis-tick");
        }
      }
    } }, { key: "getXAxisTicksPositions", value: function() {
      var t = this.w, e = [], i = this.xaxisLabels.length, s = t.globals.padHorizontal;
      if (t.globals.timescaleLabels.length > 0)
        for (var r = 0; r < i; r++)
          s = this.xaxisLabels[r].position, e.push(s);
      else
        for (var o = i, n = 0; n < o; n++) {
          var c = o;
          t.globals.isXNumeric && t.config.chart.type !== "bar" && (c -= 1), s += t.globals.gridWidth / c, e.push(s);
        }
      return e;
    } }, { key: "xAxisLabelCorrections", value: function() {
      var t = this.w, e = new B(this.ctx), i = t.globals.dom.baseEl.querySelector(".apexcharts-xaxis-texts-g"), s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-texts-g text:not(.apexcharts-xaxis-group-label)"), r = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis-inversed text"), o = t.globals.dom.baseEl.querySelectorAll(".apexcharts-xaxis-inversed-texts-g text tspan");
      if (t.globals.rotateXLabels || t.config.xaxis.labels.rotateAlways)
        for (var n = 0; n < s.length; n++) {
          var c = e.rotateAroundCenter(s[n]);
          c.y = c.y - 1, c.x = c.x + 1, s[n].setAttribute("transform", "rotate(".concat(t.config.xaxis.labels.rotate, " ").concat(c.x, " ").concat(c.y, ")")), s[n].setAttribute("text-anchor", "end"), i.setAttribute("transform", "translate(0, ".concat(-10, ")"));
          var d = s[n].childNodes;
          t.config.xaxis.labels.trim && Array.prototype.forEach.call(d, function(b) {
            e.placeTextWithEllipsis(b, b.textContent, t.globals.xAxisLabelsHeight - (t.config.legend.position === "bottom" ? 20 : 10));
          });
        }
      else
        (function() {
          for (var b = t.globals.gridWidth / (t.globals.labels.length + 1), y = 0; y < s.length; y++) {
            var A = s[y].childNodes;
            t.config.xaxis.labels.trim && t.config.xaxis.type !== "datetime" && Array.prototype.forEach.call(A, function(S) {
              e.placeTextWithEllipsis(S, S.textContent, b);
            });
          }
        })();
      if (r.length > 0) {
        var g = r[r.length - 1].getBBox(), p = r[0].getBBox();
        g.x < -20 && r[r.length - 1].parentNode.removeChild(r[r.length - 1]), p.x + p.width > t.globals.gridWidth && !t.globals.isBarHorizontal && r[0].parentNode.removeChild(r[0]);
        for (var x = 0; x < o.length; x++)
          e.placeTextWithEllipsis(o[x], o[x].textContent, t.config.yaxis[0].labels.maxWidth - (t.config.yaxis[0].title.text ? 2 * parseFloat(t.config.yaxis[0].title.style.fontSize) : 0) - 15);
      }
    } }]), E;
  }(), It = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
      var e = this.w;
      this.xaxisLabels = e.globals.labels.slice(), this.axesUtils = new rt(t), this.isRangeBar = e.globals.seriesRange.length && e.globals.isBarHorizontal, e.globals.timescaleLabels.length > 0 && (this.xaxisLabels = e.globals.timescaleLabels.slice());
    }
    return _(E, [{ key: "drawGridArea", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, e = this.w, i = new B(this.ctx);
      t === null && (t = i.group({ class: "apexcharts-grid" }));
      var s = i.drawLine(e.globals.padHorizontal, 1, e.globals.padHorizontal, e.globals.gridHeight, "transparent"), r = i.drawLine(e.globals.padHorizontal, e.globals.gridHeight, e.globals.gridWidth, e.globals.gridHeight, "transparent");
      return t.add(r), t.add(s), t;
    } }, { key: "drawGrid", value: function() {
      var t = null;
      return this.w.globals.axisCharts && (t = this.renderGrid(), this.drawGridArea(t.el)), t;
    } }, { key: "createGridMask", value: function() {
      var t = this.w, e = t.globals, i = new B(this.ctx), s = Array.isArray(t.config.stroke.width) ? 0 : t.config.stroke.width;
      if (Array.isArray(t.config.stroke.width)) {
        var r = 0;
        t.config.stroke.width.forEach(function(p) {
          r = Math.max(r, p);
        }), s = r;
      }
      e.dom.elGridRectMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMask.setAttribute("id", "gridRectMask".concat(e.cuid)), e.dom.elGridRectMarkerMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elGridRectMarkerMask.setAttribute("id", "gridRectMarkerMask".concat(e.cuid)), e.dom.elForecastMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elForecastMask.setAttribute("id", "forecastMask".concat(e.cuid)), e.dom.elNonForecastMask = document.createElementNS(e.SVGNS, "clipPath"), e.dom.elNonForecastMask.setAttribute("id", "nonForecastMask".concat(e.cuid));
      var o = t.config.chart.type, n = 0, c = 0;
      (o === "bar" || o === "rangeBar" || o === "candlestick" || o === "boxPlot" || t.globals.comboBarCount > 0) && t.globals.isXNumeric && !t.globals.isBarHorizontal && (n = t.config.grid.padding.left, c = t.config.grid.padding.right, e.barPadForNumericAxis > n && (n = e.barPadForNumericAxis, c = e.barPadForNumericAxis)), e.dom.elGridRect = i.drawRect(-s - n - 2, 2 * -s - 2, e.gridWidth + s + c + n + 4, e.gridHeight + 4 * s + 4, 0, "#fff");
      var d = t.globals.markers.largestSize + 1;
      e.dom.elGridRectMarker = i.drawRect(2 * -d, 2 * -d, e.gridWidth + 4 * d, e.gridHeight + 4 * d, 0, "#fff"), e.dom.elGridRectMask.appendChild(e.dom.elGridRect.node), e.dom.elGridRectMarkerMask.appendChild(e.dom.elGridRectMarker.node);
      var g = e.dom.baseEl.querySelector("defs");
      g.appendChild(e.dom.elGridRectMask), g.appendChild(e.dom.elForecastMask), g.appendChild(e.dom.elNonForecastMask), g.appendChild(e.dom.elGridRectMarkerMask);
    } }, { key: "_drawGridLines", value: function(t) {
      var e = t.i, i = t.x1, s = t.y1, r = t.x2, o = t.y2, n = t.xCount, c = t.parent, d = this.w;
      if (!(e === 0 && d.globals.skipFirstTimelinelabel || e === n - 1 && d.globals.skipLastTimelinelabel && !d.config.xaxis.labels.formatter || d.config.chart.type === "radar")) {
        d.config.grid.xaxis.lines.show && this._drawGridLine({ i: e, x1: i, y1: s, x2: r, y2: o, xCount: n, parent: c });
        var g = 0;
        if (d.globals.hasXaxisGroups && d.config.xaxis.tickPlacement === "between") {
          var p = d.globals.groups;
          if (p) {
            for (var x = 0, b = 0; x < e && b < p.length; b++)
              x += p[b].cols;
            x === e && (g = 0.6 * d.globals.xAxisLabelsHeight);
          }
        }
        new ht(this.ctx).drawXaxisTicks(i, g, d.globals.dom.elGraphical);
      }
    } }, { key: "_drawGridLine", value: function(t) {
      var e = t.i, i = t.x1, s = t.y1, r = t.x2, o = t.y2, n = t.xCount, c = t.parent, d = this.w, g = !1, p = c.node.classList.contains("apexcharts-gridlines-horizontal"), x = d.config.grid.strokeDashArray, b = d.globals.barPadForNumericAxis;
      (s === 0 && o === 0 || i === 0 && r === 0) && (g = !0), s === d.globals.gridHeight && o === d.globals.gridHeight && (g = !0), !d.globals.isBarHorizontal || e !== 0 && e !== n - 1 || (g = !0);
      var y = new B(this).drawLine(i - (p ? b : 0), s, r + (p ? b : 0), o, d.config.grid.borderColor, x);
      y.node.classList.add("apexcharts-gridline"), g && d.config.grid.show ? this.elGridBorders.add(y) : c.add(y);
    } }, { key: "_drawGridBandRect", value: function(t) {
      var e = t.c, i = t.x1, s = t.y1, r = t.x2, o = t.y2, n = t.type, c = this.w, d = new B(this.ctx), g = c.globals.barPadForNumericAxis;
      if (n !== "column" || c.config.xaxis.type !== "datetime") {
        var p = c.config.grid[n].colors[e], x = d.drawRect(i - (n === "row" ? g : 0), s, r + (n === "row" ? 2 * g : 0), o, 0, p, c.config.grid[n].opacity);
        this.elg.add(x), x.attr("clip-path", "url(#gridRectMask".concat(c.globals.cuid, ")")), x.node.classList.add("apexcharts-grid-".concat(n));
      }
    } }, { key: "_drawXYLines", value: function(t) {
      var e = this, i = t.xCount, s = t.tickAmount, r = this.w;
      if (r.config.grid.xaxis.lines.show || r.config.xaxis.axisTicks.show) {
        var o, n = r.globals.padHorizontal, c = r.globals.gridHeight;
        r.globals.timescaleLabels.length ? function(y) {
          for (var A = y.xC, S = y.x1, N = y.y1, L = y.x2, h = y.y2, m = 0; m < A; m++)
            S = e.xaxisLabels[m].position, L = e.xaxisLabels[m].position, e._drawGridLines({ i: m, x1: S, y1: N, x2: L, y2: h, xCount: i, parent: e.elgridLinesV });
        }({ xC: i, x1: n, y1: 0, x2: o, y2: c }) : (r.globals.isXNumeric && (i = r.globals.xAxisScale.result.length), function(y) {
          for (var A = y.xC, S = y.x1, N = y.y1, L = y.x2, h = y.y2, m = 0; m < A + (r.globals.isXNumeric ? 0 : 1); m++)
            m === 0 && A === 1 && r.globals.dataPoints === 1 && (L = S = r.globals.gridWidth / 2), e._drawGridLines({ i: m, x1: S, y1: N, x2: L, y2: h, xCount: i, parent: e.elgridLinesV }), L = S += r.globals.gridWidth / (r.globals.isXNumeric ? A - 1 : A);
        }({ xC: i, x1: n, y1: 0, x2: o, y2: c }));
      }
      if (r.config.grid.yaxis.lines.show) {
        var d = 0, g = 0, p = r.globals.gridWidth, x = s + 1;
        this.isRangeBar && (x = r.globals.labels.length);
        for (var b = 0; b < x + (this.isRangeBar ? 1 : 0); b++)
          this._drawGridLine({ i: b, xCount: x + (this.isRangeBar ? 1 : 0), x1: 0, y1: d, x2: p, y2: g, parent: this.elgridLinesH }), g = d += r.globals.gridHeight / (this.isRangeBar ? x : s);
      }
    } }, { key: "_drawInvertedXYLines", value: function(t) {
      var e = t.xCount, i = this.w;
      if (i.config.grid.xaxis.lines.show || i.config.xaxis.axisTicks.show)
        for (var s, r = i.globals.padHorizontal, o = i.globals.gridHeight, n = 0; n < e + 1; n++)
          i.config.grid.xaxis.lines.show && this._drawGridLine({ i: n, xCount: e + 1, x1: r, y1: 0, x2: s, y2: o, parent: this.elgridLinesV }), new ht(this.ctx).drawXaxisTicks(r, 0, i.globals.dom.elGraphical), s = r = r + i.globals.gridWidth / e + 0.3;
      if (i.config.grid.yaxis.lines.show)
        for (var c = 0, d = 0, g = i.globals.gridWidth, p = 0; p < i.globals.dataPoints + 1; p++)
          this._drawGridLine({ i: p, xCount: i.globals.dataPoints + 1, x1: 0, y1: c, x2: g, y2: d, parent: this.elgridLinesH }), d = c += i.globals.gridHeight / i.globals.dataPoints;
    } }, { key: "renderGrid", value: function() {
      var t = this.w, e = new B(this.ctx);
      this.elg = e.group({ class: "apexcharts-grid" }), this.elgridLinesH = e.group({ class: "apexcharts-gridlines-horizontal" }), this.elgridLinesV = e.group({ class: "apexcharts-gridlines-vertical" }), this.elGridBorders = e.group({ class: "apexcharts-grid-borders" }), this.elg.add(this.elgridLinesH), this.elg.add(this.elgridLinesV), t.config.grid.show || (this.elgridLinesV.hide(), this.elgridLinesH.hide(), this.elGridBorders.hide());
      for (var i, s = t.globals.yAxisScale.length ? t.globals.yAxisScale[0].result.length - 1 : 5, r = 0; r < t.globals.series.length && (t.globals.yAxisScale[r] !== void 0 && (s = t.globals.yAxisScale[r].result.length - 1), !(s > 2)); r++)
        ;
      if (!t.globals.isBarHorizontal || this.isRangeBar) {
        var o, n, c;
        i = this.xaxisLabels.length, this.isRangeBar && (i--, s = t.globals.labels.length, t.config.xaxis.tickAmount && t.config.xaxis.labels.formatter && (i = t.config.xaxis.tickAmount), ((o = t.globals.yAxisScale) === null || o === void 0 || (n = o[0]) === null || n === void 0 || (c = n.result) === null || c === void 0 ? void 0 : c.length) > 0 && t.config.xaxis.type !== "datetime" && (i = t.globals.yAxisScale[0].result.length - 1)), this._drawXYLines({ xCount: i, tickAmount: s });
      } else
        i = s, s = t.globals.xTickAmount, this._drawInvertedXYLines({ xCount: i, tickAmount: s });
      return this.drawGridBands(i, s), { el: this.elg, elGridBorders: this.elGridBorders, xAxisTickWidth: t.globals.gridWidth / i };
    } }, { key: "drawGridBands", value: function(t, e) {
      var i = this.w;
      if (i.config.grid.row.colors !== void 0 && i.config.grid.row.colors.length > 0)
        for (var s = 0, r = i.globals.gridHeight / e, o = i.globals.gridWidth, n = 0, c = 0; n < e; n++, c++)
          c >= i.config.grid.row.colors.length && (c = 0), this._drawGridBandRect({ c, x1: 0, y1: s, x2: o, y2: r, type: "row" }), s += i.globals.gridHeight / e;
      if (i.config.grid.column.colors !== void 0 && i.config.grid.column.colors.length > 0)
        for (var d = i.globals.isBarHorizontal || i.config.xaxis.tickPlacement !== "on" || i.config.xaxis.type !== "category" && !i.config.xaxis.convertedCatToNumeric ? t : t - 1, g = i.globals.padHorizontal, p = i.globals.padHorizontal + i.globals.gridWidth / d, x = i.globals.gridHeight, b = 0, y = 0; b < t; b++, y++)
          y >= i.config.grid.column.colors.length && (y = 0), this._drawGridBandRect({ c: y, x1: g, y1: 0, x2: p, y2: x, type: "column" }), g += i.globals.gridWidth / d;
    } }]), E;
  }(), Xt = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "niceScale", value: function(t, e) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, r = arguments.length > 4 ? arguments[4] : void 0, o = this.w, n = Math.abs(e - t);
      if ((i = this._adjustTicksForSmallRange(i, s, n)) === "dataPoints" && (i = o.globals.dataPoints - 1), t === Number.MIN_VALUE && e === 0 || !F.isNumber(t) && !F.isNumber(e) || t === Number.MIN_VALUE && e === -Number.MAX_VALUE)
        return t = 0, e = i, this.linearScale(t, e, i, s, o.config.yaxis[s].stepSize);
      t > e ? (console.warn("axis.min cannot be greater than axis.max"), e = t + 0.1) : t === e && (t = t === 0 ? 0 : t - 0.5, e = e === 0 ? 2 : e + 0.5);
      var c = [];
      n < 1 && r && (o.config.chart.type === "candlestick" || o.config.series[s].type === "candlestick" || o.config.chart.type === "boxPlot" || o.config.series[s].type === "boxPlot" || o.globals.isRangeData) && (e *= 1.01);
      var d = i + 1;
      d < 2 ? d = 2 : d > 2 && (d -= 2);
      var g = n / d, p = Math.floor(F.log10(g)), x = Math.pow(10, p), b = Math.round(g / x);
      b < 1 && (b = 1);
      var y = b * x;
      o.config.yaxis[s].stepSize && (y = o.config.yaxis[s].stepSize), o.globals.isBarHorizontal && o.config.xaxis.stepSize && o.config.xaxis.type !== "datetime" && (y = o.config.xaxis.stepSize);
      var A = y * Math.floor(t / y), S = y * Math.ceil(e / y), N = A;
      if (r && n > 2) {
        for (; c.push(F.stripNumber(N, 7)), !((N += y) > S); )
          ;
        return { result: c, niceMin: c[0], niceMax: c[c.length - 1] };
      }
      var L = t;
      (c = []).push(F.stripNumber(L, 7));
      for (var h = Math.abs(e - t) / i, m = 0; m <= i; m++)
        L += h, c.push(L);
      return c[c.length - 2] >= e && c.pop(), { result: c, niceMin: c[0], niceMax: c[c.length - 1] };
    } }, { key: "linearScale", value: function(t, e) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 5, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0, r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : void 0, o = Math.abs(e - t);
      (i = this._adjustTicksForSmallRange(i, s, o)) === "dataPoints" && (i = this.w.globals.dataPoints - 1), r || (r = o / i), i === Number.MAX_VALUE && (i = 5, r = 1);
      for (var n = [], c = t; i >= 0; )
        n.push(c), c += r, i -= 1;
      return { result: n, niceMin: n[0], niceMax: n[n.length - 1] };
    } }, { key: "logarithmicScaleNice", value: function(t, e, i) {
      e <= 0 && (e = Math.max(t, i)), t <= 0 && (t = Math.min(e, i));
      for (var s = [], r = Math.ceil(Math.log(e) / Math.log(i) + 1), o = Math.floor(Math.log(t) / Math.log(i)); o < r; o++)
        s.push(Math.pow(i, o));
      return { result: s, niceMin: s[0], niceMax: s[s.length - 1] };
    } }, { key: "logarithmicScale", value: function(t, e, i) {
      e <= 0 && (e = Math.max(t, i)), t <= 0 && (t = Math.min(e, i));
      for (var s = [], r = Math.log(e) / Math.log(i), o = Math.log(t) / Math.log(i), n = r - o, c = Math.round(n), d = n / c, g = 0, p = o; g < c; g++, p += d)
        s.push(Math.pow(i, p));
      return s.push(Math.pow(i, r)), { result: s, niceMin: t, niceMax: e };
    } }, { key: "_adjustTicksForSmallRange", value: function(t, e, i) {
      var s = t;
      if (e !== void 0 && this.w.config.yaxis[e].labels.formatter && this.w.config.yaxis[e].tickAmount === void 0) {
        var r = Number(this.w.config.yaxis[e].labels.formatter(1));
        F.isNumber(r) && this.w.globals.yValueDecimal === 0 && (s = Math.ceil(i));
      }
      return s < t ? s : t;
    } }, { key: "setYScaleForIndex", value: function(t, e, i) {
      var s = this.w.globals, r = this.w.config, o = s.isBarHorizontal ? r.xaxis : r.yaxis[t];
      s.yAxisScale[t] === void 0 && (s.yAxisScale[t] = []);
      var n = Math.abs(i - e);
      if (o.logarithmic && n <= 5 && (s.invalidLogScale = !0), o.logarithmic && n > 5)
        s.allSeriesCollapsed = !1, s.yAxisScale[t] = this.logarithmicScale(e, i, o.logBase), s.yAxisScale[t] = o.forceNiceScale ? this.logarithmicScaleNice(e, i, o.logBase) : this.logarithmicScale(e, i, o.logBase);
      else if (i !== -Number.MAX_VALUE && F.isNumber(i))
        if (s.allSeriesCollapsed = !1, o.min === void 0 && o.max === void 0 || o.forceNiceScale) {
          var c = r.yaxis[t].max === void 0 && r.yaxis[t].min === void 0 || r.yaxis[t].forceNiceScale;
          s.yAxisScale[t] = this.niceScale(e, i, o.tickAmount ? o.tickAmount : n < 5 && n > 1 ? n + 1 : 5, t, c);
        } else
          s.yAxisScale[t] = this.linearScale(e, i, o.tickAmount, t, r.yaxis[t].stepSize);
      else
        s.yAxisScale[t] = this.linearScale(0, 5, 5, t, r.yaxis[t].stepSize);
    } }, { key: "setXScale", value: function(t, e) {
      var i = this.w, s = i.globals, r = Math.abs(e - t);
      return e !== -Number.MAX_VALUE && F.isNumber(e) ? s.xAxisScale = this.linearScale(t, e, i.config.xaxis.tickAmount ? i.config.xaxis.tickAmount : r < 5 && r > 1 ? r + 1 : 5, 0, i.config.xaxis.stepSize) : s.xAxisScale = this.linearScale(0, 5, 5), s.xAxisScale;
    } }, { key: "setMultipleYScales", value: function() {
      var t = this, e = this.w.globals, i = this.w.config, s = e.minYArr.concat([]), r = e.maxYArr.concat([]), o = [];
      i.yaxis.forEach(function(n, c) {
        var d = c;
        i.series.forEach(function(x, b) {
          x.name === n.seriesName && (d = b, c !== b ? o.push({ index: b, similarIndex: c, alreadyExists: !0 }) : o.push({ index: b }));
        });
        var g = s[d], p = r[d];
        t.setYScaleForIndex(c, g, p);
      }), this.sameScaleInMultipleAxes(s, r, o);
    } }, { key: "sameScaleInMultipleAxes", value: function(t, e, i) {
      var s = this, r = this.w.config, o = this.w.globals, n = [];
      i.forEach(function(A) {
        A.alreadyExists && (n[A.index] === void 0 && (n[A.index] = []), n[A.index].push(A.index), n[A.index].push(A.similarIndex));
      }), o.yAxisSameScaleIndices = n, n.forEach(function(A, S) {
        n.forEach(function(N, L) {
          var h, m;
          S !== L && (h = A, m = N, h.filter(function(k) {
            return m.indexOf(k) !== -1;
          })).length > 0 && (n[S] = n[S].concat(n[L]));
        });
      });
      var c = n.map(function(A) {
        return A.filter(function(S, N) {
          return A.indexOf(S) === N;
        });
      }).map(function(A) {
        return A.sort();
      });
      n = n.filter(function(A) {
        return !!A;
      });
      var d = c.slice(), g = d.map(function(A) {
        return JSON.stringify(A);
      });
      d = d.filter(function(A, S) {
        return g.indexOf(JSON.stringify(A)) === S;
      });
      var p = [], x = [];
      t.forEach(function(A, S) {
        d.forEach(function(N, L) {
          N.indexOf(S) > -1 && (p[L] === void 0 && (p[L] = [], x[L] = []), p[L].push({ key: S, value: A }), x[L].push({ key: S, value: e[S] }));
        });
      });
      var b = Array.apply(null, Array(d.length)).map(Number.prototype.valueOf, Number.MIN_VALUE), y = Array.apply(null, Array(d.length)).map(Number.prototype.valueOf, -Number.MAX_VALUE);
      p.forEach(function(A, S) {
        A.forEach(function(N, L) {
          b[S] = Math.min(N.value, b[S]);
        });
      }), x.forEach(function(A, S) {
        A.forEach(function(N, L) {
          y[S] = Math.max(N.value, y[S]);
        });
      }), t.forEach(function(A, S) {
        x.forEach(function(N, L) {
          var h = b[L], m = y[L];
          r.chart.stacked && (m = 0, N.forEach(function(k, C) {
            k.value !== -Number.MAX_VALUE && (m += k.value), h !== Number.MIN_VALUE && (h += p[L][C].value);
          })), N.forEach(function(k, C) {
            N[C].key === S && (r.yaxis[S].min !== void 0 && (h = typeof r.yaxis[S].min == "function" ? r.yaxis[S].min(o.minY) : r.yaxis[S].min), r.yaxis[S].max !== void 0 && (m = typeof r.yaxis[S].max == "function" ? r.yaxis[S].max(o.maxY) : r.yaxis[S].max), s.setYScaleForIndex(S, h, m));
          });
        });
      });
    } }, { key: "autoScaleY", value: function(t, e, i) {
      t || (t = this);
      var s = t.w;
      if (s.globals.isMultipleYAxis || s.globals.collapsedSeries.length)
        return console.warn("autoScaleYaxis not supported in a multi-yaxis chart."), e;
      var r = s.globals.seriesX[0], o = s.config.chart.stacked;
      return e.forEach(function(n, c) {
        for (var d = 0, g = 0; g < r.length; g++)
          if (r[g] >= i.xaxis.min) {
            d = g;
            break;
          }
        var p, x, b = s.globals.minYArr[c], y = s.globals.maxYArr[c], A = s.globals.stackedSeriesTotals;
        s.globals.series.forEach(function(S, N) {
          var L = S[d];
          o ? (L = A[d], p = x = L, A.forEach(function(h, m) {
            r[m] <= i.xaxis.max && r[m] >= i.xaxis.min && (h > x && h !== null && (x = h), S[m] < p && S[m] !== null && (p = S[m]));
          })) : (p = x = L, S.forEach(function(h, m) {
            if (r[m] <= i.xaxis.max && r[m] >= i.xaxis.min) {
              var k = h, C = h;
              s.globals.series.forEach(function(O, I) {
                h !== null && (k = Math.min(O[m], k), C = Math.max(O[m], C));
              }), C > x && C !== null && (x = C), k < p && k !== null && (p = k);
            }
          })), p === void 0 && x === void 0 && (p = b, x = y), x *= x < 0 ? 0.9 : 1.1, (p *= p < 0 ? 1.1 : 0.9) === 0 && x === 0 && (p = -1, x = 1), x < 0 && x < y && (x = y), p < 0 && p > b && (p = b), e.length > 1 ? (e[N].min = n.min === void 0 ? p : n.min, e[N].max = n.max === void 0 ? x : n.max) : (e[0].min = n.min === void 0 ? p : n.min, e[0].max = n.max === void 0 ? x : n.max);
        });
      }), e;
    } }]), E;
  }(), Nt = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w, this.scales = new Xt(t);
    }
    return _(E, [{ key: "init", value: function() {
      this.setYRange(), this.setXRange(), this.setZRange();
    } }, { key: "getMinYMaxY", value: function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Number.MAX_VALUE, i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : -Number.MAX_VALUE, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, r = this.w.config, o = this.w.globals, n = -Number.MAX_VALUE, c = Number.MIN_VALUE;
      s === null && (s = t + 1);
      var d = o.series, g = d, p = d;
      r.chart.type === "candlestick" ? (g = o.seriesCandleL, p = o.seriesCandleH) : r.chart.type === "boxPlot" ? (g = o.seriesCandleO, p = o.seriesCandleC) : o.isRangeData && (g = o.seriesRangeStart, p = o.seriesRangeEnd);
      for (var x = t; x < s; x++) {
        o.dataPoints = Math.max(o.dataPoints, d[x].length), o.categoryLabels.length && (o.dataPoints = o.categoryLabels.filter(function(A) {
          return A !== void 0;
        }).length), o.labels.length && r.xaxis.type !== "datetime" && o.series.reduce(function(A, S) {
          return A + S.length;
        }, 0) !== 0 && (o.dataPoints = Math.max(o.dataPoints, o.labels.length));
        for (var b = 0; b < o.series[x].length; b++) {
          var y = d[x][b];
          y !== null && F.isNumber(y) ? (p[x][b] !== void 0 && (n = Math.max(n, p[x][b]), e = Math.min(e, p[x][b])), g[x][b] !== void 0 && (e = Math.min(e, g[x][b]), i = Math.max(i, g[x][b])), this.w.config.chart.type !== "candlestick" && this.w.config.chart.type !== "boxPlot" && this.w.config.chart.type === "rangeArea" && this.w.config.chart.type === "rangeBar" || (this.w.config.chart.type !== "candlestick" && this.w.config.chart.type !== "boxPlot" || o.seriesCandleC[x][b] !== void 0 && (n = Math.max(n, o.seriesCandleO[x][b]), n = Math.max(n, o.seriesCandleH[x][b]), n = Math.max(n, o.seriesCandleL[x][b]), n = Math.max(n, o.seriesCandleC[x][b]), this.w.config.chart.type === "boxPlot" && (n = Math.max(n, o.seriesCandleM[x][b]))), !r.series[x].type || r.series[x].type === "candlestick" && r.series[x].type === "boxPlot" && r.series[x].type === "rangeArea" && r.series[x].type === "rangeBar" || (n = Math.max(n, o.series[x][b]), e = Math.min(e, o.series[x][b])), i = n), o.seriesGoals[x] && o.seriesGoals[x][b] && Array.isArray(o.seriesGoals[x][b]) && o.seriesGoals[x][b].forEach(function(A) {
            c !== Number.MIN_VALUE && (c = Math.min(c, A.value), e = c), n = Math.max(n, A.value), i = n;
          }), F.isFloat(y) && (y = F.noExponents(y), o.yValueDecimal = Math.max(o.yValueDecimal, y.toString().split(".")[1].length)), c > g[x][b] && g[x][b] < 0 && (c = g[x][b])) : o.hasNullValues = !0;
        }
      }
      return r.chart.type === "rangeBar" && o.seriesRangeStart.length && o.isBarHorizontal && (c = e), r.chart.type === "bar" && (c < 0 && n < 0 && (n = 0), c === Number.MIN_VALUE && (c = 0)), { minY: c, maxY: n, lowestY: e, highestY: i };
    } }, { key: "setYRange", value: function() {
      var t = this.w.globals, e = this.w.config;
      t.maxY = -Number.MAX_VALUE, t.minY = Number.MIN_VALUE;
      var i = Number.MAX_VALUE;
      if (t.isMultipleYAxis)
        for (var s = 0; s < t.series.length; s++) {
          var r = this.getMinYMaxY(s, i, null, s + 1);
          t.minYArr.push(r.minY), t.maxYArr.push(r.maxY), i = r.lowestY;
        }
      var o = this.getMinYMaxY(0, i, null, t.series.length);
      if (t.minY = o.minY, t.maxY = o.maxY, i = o.lowestY, e.chart.stacked && this._setStackedMinMax(), (e.chart.type === "line" || e.chart.type === "area" || e.chart.type === "candlestick" || e.chart.type === "boxPlot" || e.chart.type === "rangeBar" && !t.isBarHorizontal) && t.minY === Number.MIN_VALUE && i !== -Number.MAX_VALUE && i !== t.maxY) {
        var n = t.maxY - i;
        (i >= 0 && i <= 10 || e.yaxis[0].min !== void 0 || e.yaxis[0].max !== void 0) && (n = 0), t.minY = i - 5 * n / 100, i > 0 && t.minY < 0 && (t.minY = 0), t.maxY = t.maxY + 5 * n / 100;
      }
      return e.yaxis.forEach(function(c, d) {
        c.max !== void 0 && (typeof c.max == "number" ? t.maxYArr[d] = c.max : typeof c.max == "function" && (t.maxYArr[d] = c.max(t.isMultipleYAxis ? t.maxYArr[d] : t.maxY)), t.maxY = t.maxYArr[d]), c.min !== void 0 && (typeof c.min == "number" ? t.minYArr[d] = c.min : typeof c.min == "function" && (t.minYArr[d] = c.min(t.isMultipleYAxis ? t.minYArr[d] === Number.MIN_VALUE ? 0 : t.minYArr[d] : t.minY)), t.minY = t.minYArr[d]);
      }), t.isBarHorizontal && ["min", "max"].forEach(function(c) {
        e.xaxis[c] !== void 0 && typeof e.xaxis[c] == "number" && (c === "min" ? t.minY = e.xaxis[c] : t.maxY = e.xaxis[c]);
      }), t.isMultipleYAxis ? (this.scales.setMultipleYScales(), t.minY = i, t.yAxisScale.forEach(function(c, d) {
        t.minYArr[d] = c.niceMin, t.maxYArr[d] = c.niceMax;
      })) : (this.scales.setYScaleForIndex(0, t.minY, t.maxY), t.minY = t.yAxisScale[0].niceMin, t.maxY = t.yAxisScale[0].niceMax, t.minYArr[0] = t.yAxisScale[0].niceMin, t.maxYArr[0] = t.yAxisScale[0].niceMax), { minY: t.minY, maxY: t.maxY, minYArr: t.minYArr, maxYArr: t.maxYArr, yAxisScale: t.yAxisScale };
    } }, { key: "setXRange", value: function() {
      var t = this.w.globals, e = this.w.config, i = e.xaxis.type === "numeric" || e.xaxis.type === "datetime" || e.xaxis.type === "category" && !t.noLabelsProvided || t.noLabelsProvided || t.isXNumeric;
      if (t.isXNumeric && function() {
        for (var n = 0; n < t.series.length; n++)
          if (t.labels[n])
            for (var c = 0; c < t.labels[n].length; c++)
              t.labels[n][c] !== null && F.isNumber(t.labels[n][c]) && (t.maxX = Math.max(t.maxX, t.labels[n][c]), t.initialMaxX = Math.max(t.maxX, t.labels[n][c]), t.minX = Math.min(t.minX, t.labels[n][c]), t.initialMinX = Math.min(t.minX, t.labels[n][c]));
      }(), t.noLabelsProvided && e.xaxis.categories.length === 0 && (t.maxX = t.labels[t.labels.length - 1], t.initialMaxX = t.labels[t.labels.length - 1], t.minX = 1, t.initialMinX = 1), t.isXNumeric || t.noLabelsProvided || t.dataFormatXNumeric) {
        var s;
        if (e.xaxis.tickAmount === void 0 ? (s = Math.round(t.svgWidth / 150), e.xaxis.type === "numeric" && t.dataPoints < 30 && (s = t.dataPoints - 1), s > t.dataPoints && t.dataPoints !== 0 && (s = t.dataPoints - 1)) : e.xaxis.tickAmount === "dataPoints" ? (t.series.length > 1 && (s = t.series[t.maxValsInArrayIndex].length - 1), t.isXNumeric && (s = t.maxX - t.minX - 1)) : s = e.xaxis.tickAmount, t.xTickAmount = s, e.xaxis.max !== void 0 && typeof e.xaxis.max == "number" && (t.maxX = e.xaxis.max), e.xaxis.min !== void 0 && typeof e.xaxis.min == "number" && (t.minX = e.xaxis.min), e.xaxis.range !== void 0 && (t.minX = t.maxX - e.xaxis.range), t.minX !== Number.MAX_VALUE && t.maxX !== -Number.MAX_VALUE)
          if (e.xaxis.convertedCatToNumeric && !t.dataFormatXNumeric) {
            for (var r = [], o = t.minX - 1; o < t.maxX; o++)
              r.push(o + 1);
            t.xAxisScale = { result: r, niceMin: r[0], niceMax: r[r.length - 1] };
          } else
            t.xAxisScale = this.scales.setXScale(t.minX, t.maxX);
        else
          t.xAxisScale = this.scales.linearScale(0, s, s, 0, e.xaxis.stepSize), t.noLabelsProvided && t.labels.length > 0 && (t.xAxisScale = this.scales.linearScale(1, t.labels.length, s - 1, 0, e.xaxis.stepSize), t.seriesX = t.labels.slice());
        i && (t.labels = t.xAxisScale.result.slice());
      }
      return t.isBarHorizontal && t.labels.length && (t.xTickAmount = t.labels.length), this._handleSingleDataPoint(), this._getMinXDiff(), { minX: t.minX, maxX: t.maxX };
    } }, { key: "setZRange", value: function() {
      var t = this.w.globals;
      if (t.isDataXYZ) {
        for (var e = 0; e < t.series.length; e++)
          if (t.seriesZ[e] !== void 0)
            for (var i = 0; i < t.seriesZ[e].length; i++)
              t.seriesZ[e][i] !== null && F.isNumber(t.seriesZ[e][i]) && (t.maxZ = Math.max(t.maxZ, t.seriesZ[e][i]), t.minZ = Math.min(t.minZ, t.seriesZ[e][i]));
      }
    } }, { key: "_handleSingleDataPoint", value: function() {
      var t = this.w.globals, e = this.w.config;
      if (t.minX === t.maxX) {
        var i = new Mt(this.ctx);
        if (e.xaxis.type === "datetime") {
          var s = i.getDate(t.minX);
          e.xaxis.labels.datetimeUTC ? s.setUTCDate(s.getUTCDate() - 2) : s.setDate(s.getDate() - 2), t.minX = new Date(s).getTime();
          var r = i.getDate(t.maxX);
          e.xaxis.labels.datetimeUTC ? r.setUTCDate(r.getUTCDate() + 2) : r.setDate(r.getDate() + 2), t.maxX = new Date(r).getTime();
        } else
          (e.xaxis.type === "numeric" || e.xaxis.type === "category" && !t.noLabelsProvided) && (t.minX = t.minX - 2, t.initialMinX = t.minX, t.maxX = t.maxX + 2, t.initialMaxX = t.maxX);
      }
    } }, { key: "_getMinXDiff", value: function() {
      var t = this.w.globals;
      t.isXNumeric && t.seriesX.forEach(function(e, i) {
        e.length === 1 && e.push(t.seriesX[t.maxValsInArrayIndex][t.seriesX[t.maxValsInArrayIndex].length - 1]);
        var s = e.slice();
        s.sort(function(r, o) {
          return r - o;
        }), s.forEach(function(r, o) {
          if (o > 0) {
            var n = r - s[o - 1];
            n > 0 && (t.minXDiff = Math.min(n, t.minXDiff));
          }
        }), t.dataPoints !== 1 && t.minXDiff !== Number.MAX_VALUE || (t.minXDiff = 0.5);
      });
    } }, { key: "_setStackedMinMax", value: function() {
      var t = this, e = this.w.globals;
      if (e.series.length) {
        var i = e.seriesGroups;
        i.length || (i = [this.w.config.series.map(function(o) {
          return o.name;
        })]);
        var s = {}, r = {};
        i.forEach(function(o) {
          s[o] = [], r[o] = [], t.w.config.series.map(function(n, c) {
            return o.indexOf(n.name) > -1 ? c : null;
          }).filter(function(n) {
            return n !== null;
          }).forEach(function(n) {
            for (var c = 0; c < e.series[e.maxValsInArrayIndex].length; c++) {
              var d, g;
              s[o][c] === void 0 && (s[o][c] = 0, r[o][c] = 0), (t.w.config.chart.stacked && !e.comboCharts || t.w.config.chart.stacked && e.comboCharts && (!t.w.config.chart.stackOnlyBar || ((d = t.w.config.series) === null || d === void 0 || (g = d[n]) === null || g === void 0 ? void 0 : g.type) === "bar")) && e.series[n][c] !== null && F.isNumber(e.series[n][c]) && (e.series[n][c] > 0 ? s[o][c] += parseFloat(e.series[n][c]) + 1e-4 : r[o][c] += parseFloat(e.series[n][c]));
            }
          });
        }), Object.entries(s).forEach(function(o) {
          var n = it(o, 1)[0];
          s[n].forEach(function(c, d) {
            e.maxY = Math.max(e.maxY, s[n][d]), e.minY = Math.min(e.minY, r[n][d]);
          });
        });
      }
    } }]), E;
  }(), M = function() {
    function E(t, e) {
      w(this, E), this.ctx = t, this.elgrid = e, this.w = t.w;
      var i = this.w;
      this.xaxisFontSize = i.config.xaxis.labels.style.fontSize, this.axisFontFamily = i.config.xaxis.labels.style.fontFamily, this.xaxisForeColors = i.config.xaxis.labels.style.colors, this.isCategoryBarHorizontal = i.config.chart.type === "bar" && i.config.plotOptions.bar.horizontal, this.xAxisoffX = 0, i.config.xaxis.position === "bottom" && (this.xAxisoffX = i.globals.gridHeight), this.drawnLabels = [], this.axesUtils = new rt(t);
    }
    return _(E, [{ key: "drawYaxis", value: function(t) {
      var e = this, i = this.w, s = new B(this.ctx), r = i.config.yaxis[t].labels.style, o = r.fontSize, n = r.fontFamily, c = r.fontWeight, d = s.group({ class: "apexcharts-yaxis", rel: t, transform: "translate(" + i.globals.translateYAxisX[t] + ", 0)" });
      if (this.axesUtils.isYAxisHidden(t))
        return d;
      var g = s.group({ class: "apexcharts-yaxis-texts-g" });
      d.add(g);
      var p = i.globals.yAxisScale[t].result.length - 1, x = i.globals.gridHeight / p, b = i.globals.translateY, y = i.globals.yLabelFormatters[t], A = i.globals.yAxisScale[t].result.slice();
      A = this.axesUtils.checkForReversedLabels(t, A);
      var S = "";
      if (i.config.yaxis[t].labels.show)
        for (var N = function(X) {
          var Y = A[X];
          Y = y(Y, X, i);
          var W = i.config.yaxis[t].labels.padding;
          i.config.yaxis[t].opposite && i.config.yaxis.length !== 0 && (W *= -1);
          var q = "end";
          i.config.yaxis[t].opposite && (q = "start"), i.config.yaxis[t].labels.align === "left" ? q = "start" : i.config.yaxis[t].labels.align === "center" ? q = "middle" : i.config.yaxis[t].labels.align === "right" && (q = "end");
          var U = e.axesUtils.getYAxisForeColor(r.colors, t), st = i.config.yaxis[t].labels.offsetY;
          i.config.chart.type === "heatmap" && (st -= (i.globals.gridHeight / i.globals.series.length - 1) / 2);
          var dt = s.drawText({ x: W, y: b + p / 10 + st + 1, text: Y, textAnchor: q, fontSize: o, fontFamily: n, fontWeight: c, maxWidth: i.config.yaxis[t].labels.maxWidth, foreColor: Array.isArray(U) ? U[X] : U, isPlainText: !1, cssClass: "apexcharts-yaxis-label " + r.cssClass });
          X === p && (S = dt), g.add(dt);
          var bt = document.createElementNS(i.globals.SVGNS, "title");
          if (bt.textContent = Array.isArray(Y) ? Y.join(" ") : Y, dt.node.appendChild(bt), i.config.yaxis[t].labels.rotate !== 0) {
            var Et = s.rotateAroundCenter(S.node), Dt = s.rotateAroundCenter(dt.node);
            dt.node.setAttribute("transform", "rotate(".concat(i.config.yaxis[t].labels.rotate, " ").concat(Et.x, " ").concat(Dt.y, ")"));
          }
          b += x;
        }, L = p; L >= 0; L--)
          N(L);
      if (i.config.yaxis[t].title.text !== void 0) {
        var h = s.group({ class: "apexcharts-yaxis-title" }), m = 0;
        i.config.yaxis[t].opposite && (m = i.globals.translateYAxisX[t]);
        var k = s.drawText({ x: m, y: i.globals.gridHeight / 2 + i.globals.translateY + i.config.yaxis[t].title.offsetY, text: i.config.yaxis[t].title.text, textAnchor: "end", foreColor: i.config.yaxis[t].title.style.color, fontSize: i.config.yaxis[t].title.style.fontSize, fontWeight: i.config.yaxis[t].title.style.fontWeight, fontFamily: i.config.yaxis[t].title.style.fontFamily, cssClass: "apexcharts-yaxis-title-text " + i.config.yaxis[t].title.style.cssClass });
        h.add(k), d.add(h);
      }
      var C = i.config.yaxis[t].axisBorder, O = 31 + C.offsetX;
      if (i.config.yaxis[t].opposite && (O = -31 - C.offsetX), C.show) {
        var I = s.drawLine(O, i.globals.translateY + C.offsetY - 2, O, i.globals.gridHeight + i.globals.translateY + C.offsetY + 2, C.color, 0, C.width);
        d.add(I);
      }
      return i.config.yaxis[t].axisTicks.show && this.axesUtils.drawYAxisTicks(O, p, C, i.config.yaxis[t].axisTicks, t, x, d), d;
    } }, { key: "drawYaxisInversed", value: function(t) {
      var e = this.w, i = new B(this.ctx), s = i.group({ class: "apexcharts-xaxis apexcharts-yaxis-inversed" }), r = i.group({ class: "apexcharts-xaxis-texts-g", transform: "translate(".concat(e.globals.translateXAxisX, ", ").concat(e.globals.translateXAxisY, ")") });
      s.add(r);
      var o = e.globals.yAxisScale[t].result.length - 1, n = e.globals.gridWidth / o + 0.1, c = n + e.config.xaxis.labels.offsetX, d = e.globals.xLabelFormatter, g = e.globals.yAxisScale[t].result.slice(), p = e.globals.timescaleLabels;
      p.length > 0 && (this.xaxisLabels = p.slice(), o = (g = p.slice()).length), g = this.axesUtils.checkForReversedLabels(t, g);
      var x = p.length;
      if (e.config.xaxis.labels.show)
        for (var b = x ? 0 : o; x ? b < x : b >= 0; x ? b++ : b--) {
          var y = g[b];
          y = d(y, b, e);
          var A = e.globals.gridWidth + e.globals.padHorizontal - (c - n + e.config.xaxis.labels.offsetX);
          if (p.length) {
            var S = this.axesUtils.getLabel(g, p, A, b, this.drawnLabels, this.xaxisFontSize);
            A = S.x, y = S.text, this.drawnLabels.push(S.text), b === 0 && e.globals.skipFirstTimelinelabel && (y = ""), b === g.length - 1 && e.globals.skipLastTimelinelabel && (y = "");
          }
          var N = i.drawText({ x: A, y: this.xAxisoffX + e.config.xaxis.labels.offsetY + 30 - (e.config.xaxis.position === "top" ? e.globals.xAxisHeight + e.config.xaxis.axisTicks.height - 2 : 0), text: y, textAnchor: "middle", foreColor: Array.isArray(this.xaxisForeColors) ? this.xaxisForeColors[t] : this.xaxisForeColors, fontSize: this.xaxisFontSize, fontFamily: this.xaxisFontFamily, fontWeight: e.config.xaxis.labels.style.fontWeight, isPlainText: !1, cssClass: "apexcharts-xaxis-label " + e.config.xaxis.labels.style.cssClass });
          r.add(N), N.tspan(y);
          var L = document.createElementNS(e.globals.SVGNS, "title");
          L.textContent = y, N.node.appendChild(L), c += n;
        }
      return this.inversedYAxisTitleText(s), this.inversedYAxisBorder(s), s;
    } }, { key: "inversedYAxisBorder", value: function(t) {
      var e = this.w, i = new B(this.ctx), s = e.config.xaxis.axisBorder;
      if (s.show) {
        var r = 0;
        e.config.chart.type === "bar" && e.globals.isXNumeric && (r -= 15);
        var o = i.drawLine(e.globals.padHorizontal + r + s.offsetX, this.xAxisoffX, e.globals.gridWidth, this.xAxisoffX, s.color, 0, s.height);
        this.elgrid && this.elgrid.elGridBorders && e.config.grid.show ? this.elgrid.elGridBorders.add(o) : t.add(o);
      }
    } }, { key: "inversedYAxisTitleText", value: function(t) {
      var e = this.w, i = new B(this.ctx);
      if (e.config.xaxis.title.text !== void 0) {
        var s = i.group({ class: "apexcharts-xaxis-title apexcharts-yaxis-title-inversed" }), r = i.drawText({ x: e.globals.gridWidth / 2 + e.config.xaxis.title.offsetX, y: this.xAxisoffX + parseFloat(this.xaxisFontSize) + parseFloat(e.config.xaxis.title.style.fontSize) + e.config.xaxis.title.offsetY + 20, text: e.config.xaxis.title.text, textAnchor: "middle", fontSize: e.config.xaxis.title.style.fontSize, fontFamily: e.config.xaxis.title.style.fontFamily, fontWeight: e.config.xaxis.title.style.fontWeight, foreColor: e.config.xaxis.title.style.color, cssClass: "apexcharts-xaxis-title-text " + e.config.xaxis.title.style.cssClass });
        s.add(r), t.add(s);
      }
    } }, { key: "yAxisTitleRotate", value: function(t, e) {
      var i = this.w, s = new B(this.ctx), r = { width: 0, height: 0 }, o = { width: 0, height: 0 }, n = i.globals.dom.baseEl.querySelector(" .apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-texts-g"));
      n !== null && (r = n.getBoundingClientRect());
      var c = i.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(t, "'] .apexcharts-yaxis-title text"));
      if (c !== null && (o = c.getBoundingClientRect()), c !== null) {
        var d = this.xPaddingForYAxisTitle(t, r, o, e);
        c.setAttribute("x", d.xPos - (e ? 10 : 0));
      }
      if (c !== null) {
        var g = s.rotateAroundCenter(c);
        c.setAttribute("transform", "rotate(".concat(e ? -1 * i.config.yaxis[t].title.rotate : i.config.yaxis[t].title.rotate, " ").concat(g.x, " ").concat(g.y, ")"));
      }
    } }, { key: "xPaddingForYAxisTitle", value: function(t, e, i, s) {
      var r = this.w, o = 0, n = 0, c = 10;
      return r.config.yaxis[t].title.text === void 0 || t < 0 ? { xPos: n, padd: 0 } : (s ? (n = e.width + r.config.yaxis[t].title.offsetX + i.width / 2 + c / 2, (o += 1) === 0 && (n -= c / 2)) : (n = -1 * e.width + r.config.yaxis[t].title.offsetX + c / 2 + i.width / 2, r.globals.isBarHorizontal && (c = 25, n = -1 * e.width - r.config.yaxis[t].title.offsetX - c)), { xPos: n, padd: c });
    } }, { key: "setYAxisXPosition", value: function(t, e) {
      var i = this.w, s = 0, r = 0, o = 18, n = 1;
      i.config.yaxis.length > 1 && (this.multipleYs = !0), i.config.yaxis.map(function(c, d) {
        var g = i.globals.ignoreYAxisIndexes.indexOf(d) > -1 || !c.show || c.floating || t[d].width === 0, p = t[d].width + e[d].width;
        c.opposite ? i.globals.isBarHorizontal ? (r = i.globals.gridWidth + i.globals.translateX - 1, i.globals.translateYAxisX[d] = r - c.labels.offsetX) : (r = i.globals.gridWidth + i.globals.translateX + n, g || (n = n + p + 20), i.globals.translateYAxisX[d] = r - c.labels.offsetX + 20) : (s = i.globals.translateX - o, g || (o = o + p + 20), i.globals.translateYAxisX[d] = s + c.labels.offsetX);
      });
    } }, { key: "setYAxisTextAlignments", value: function() {
      var t = this.w, e = t.globals.dom.baseEl.getElementsByClassName("apexcharts-yaxis");
      (e = F.listToArray(e)).forEach(function(i, s) {
        var r = t.config.yaxis[s];
        if (r && !r.floating && r.labels.align !== void 0) {
          var o = t.globals.dom.baseEl.querySelector(".apexcharts-yaxis[rel='".concat(s, "'] .apexcharts-yaxis-texts-g")), n = t.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxis[rel='".concat(s, "'] .apexcharts-yaxis-label"));
          n = F.listToArray(n);
          var c = o.getBoundingClientRect();
          r.labels.align === "left" ? (n.forEach(function(d, g) {
            d.setAttribute("text-anchor", "start");
          }), r.opposite || o.setAttribute("transform", "translate(-".concat(c.width, ", 0)"))) : r.labels.align === "center" ? (n.forEach(function(d, g) {
            d.setAttribute("text-anchor", "middle");
          }), o.setAttribute("transform", "translate(".concat(c.width / 2 * (r.opposite ? 1 : -1), ", 0)"))) : r.labels.align === "right" && (n.forEach(function(d, g) {
            d.setAttribute("text-anchor", "end");
          }), r.opposite && o.setAttribute("transform", "translate(".concat(c.width, ", 0)")));
        }
      });
    } }]), E;
  }(), H = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w, this.documentEvent = F.bind(this.documentEvent, this);
    }
    return _(E, [{ key: "addEventListener", value: function(t, e) {
      var i = this.w;
      i.globals.events.hasOwnProperty(t) ? i.globals.events[t].push(e) : i.globals.events[t] = [e];
    } }, { key: "removeEventListener", value: function(t, e) {
      var i = this.w;
      if (i.globals.events.hasOwnProperty(t)) {
        var s = i.globals.events[t].indexOf(e);
        s !== -1 && i.globals.events[t].splice(s, 1);
      }
    } }, { key: "fireEvent", value: function(t, e) {
      var i = this.w;
      if (i.globals.events.hasOwnProperty(t)) {
        e && e.length || (e = []);
        for (var s = i.globals.events[t], r = s.length, o = 0; o < r; o++)
          s[o].apply(null, e);
      }
    } }, { key: "setupEventHandlers", value: function() {
      var t = this, e = this.w, i = this.ctx, s = e.globals.dom.baseEl.querySelector(e.globals.chartClass);
      this.ctx.eventList.forEach(function(r) {
        s.addEventListener(r, function(o) {
          var n = Object.assign({}, e, { seriesIndex: e.globals.capturedSeriesIndex, dataPointIndex: e.globals.capturedDataPointIndex });
          o.type === "mousemove" || o.type === "touchmove" ? typeof e.config.chart.events.mouseMove == "function" && e.config.chart.events.mouseMove(o, i, n) : o.type === "mouseleave" || o.type === "touchleave" ? typeof e.config.chart.events.mouseLeave == "function" && e.config.chart.events.mouseLeave(o, i, n) : (o.type === "mouseup" && o.which === 1 || o.type === "touchend") && (typeof e.config.chart.events.click == "function" && e.config.chart.events.click(o, i, n), i.ctx.events.fireEvent("click", [o, i, n]));
        }, { capture: !1, passive: !0 });
      }), this.ctx.eventList.forEach(function(r) {
        e.globals.dom.baseEl.addEventListener(r, t.documentEvent, { passive: !0 });
      }), this.ctx.core.setupBrushHandler();
    } }, { key: "documentEvent", value: function(t) {
      var e = this.w, i = t.target.className;
      if (t.type === "click") {
        var s = e.globals.dom.baseEl.querySelector(".apexcharts-menu");
        s && s.classList.contains("apexcharts-menu-open") && i !== "apexcharts-menu-icon" && s.classList.remove("apexcharts-menu-open");
      }
      e.globals.clientX = t.type === "touchmove" ? t.touches[0].clientX : t.clientX, e.globals.clientY = t.type === "touchmove" ? t.touches[0].clientY : t.clientY;
    } }]), E;
  }(), j = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "setCurrentLocaleValues", value: function(t) {
      var e = this.w.config.chart.locales;
      window.Apex.chart && window.Apex.chart.locales && window.Apex.chart.locales.length > 0 && (e = this.w.config.chart.locales.concat(window.Apex.chart.locales));
      var i = e.filter(function(r) {
        return r.name === t;
      })[0];
      if (!i)
        throw new Error("Wrong locale name provided. Please make sure you set the correct locale name in options");
      var s = F.extend(gt, i);
      this.w.globals.locale = s.options;
    } }]), E;
  }(), Z = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "drawAxis", value: function(t, e) {
      var i, s, r = this, o = this.w.globals, n = this.w.config, c = new ht(this.ctx, e), d = new M(this.ctx, e);
      o.axisCharts && t !== "radar" && (o.isBarHorizontal ? (s = d.drawYaxisInversed(0), i = c.drawXaxisInversed(0), o.dom.elGraphical.add(i), o.dom.elGraphical.add(s)) : (i = c.drawXaxis(), o.dom.elGraphical.add(i), n.yaxis.map(function(g, p) {
        if (o.ignoreYAxisIndexes.indexOf(p) === -1 && (s = d.drawYaxis(p), o.dom.Paper.add(s), r.w.config.grid.position === "back")) {
          var x = o.dom.Paper.children()[1];
          x.remove(), o.dom.Paper.add(x);
        }
      })));
    } }]), E;
  }(), K = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "drawXCrosshairs", value: function() {
      var t = this.w, e = new B(this.ctx), i = new pt(this.ctx), s = t.config.xaxis.crosshairs.fill.gradient, r = t.config.xaxis.crosshairs.dropShadow, o = t.config.xaxis.crosshairs.fill.type, n = s.colorFrom, c = s.colorTo, d = s.opacityFrom, g = s.opacityTo, p = s.stops, x = r.enabled, b = r.left, y = r.top, A = r.blur, S = r.color, N = r.opacity, L = t.config.xaxis.crosshairs.fill.color;
      if (t.config.xaxis.crosshairs.show) {
        o === "gradient" && (L = e.drawGradient("vertical", n, c, d, g, null, p, null));
        var h = e.drawRect();
        t.config.xaxis.crosshairs.width === 1 && (h = e.drawLine());
        var m = t.globals.gridHeight;
        (!F.isNumber(m) || m < 0) && (m = 0);
        var k = t.config.xaxis.crosshairs.width;
        (!F.isNumber(k) || k < 0) && (k = 0), h.attr({ class: "apexcharts-xcrosshairs", x: 0, y: 0, y2: m, width: k, height: m, fill: L, filter: "none", "fill-opacity": t.config.xaxis.crosshairs.opacity, stroke: t.config.xaxis.crosshairs.stroke.color, "stroke-width": t.config.xaxis.crosshairs.stroke.width, "stroke-dasharray": t.config.xaxis.crosshairs.stroke.dashArray }), x && (h = i.dropShadow(h, { left: b, top: y, blur: A, color: S, opacity: N })), t.globals.dom.elGraphical.add(h);
      }
    } }, { key: "drawYCrosshairs", value: function() {
      var t = this.w, e = new B(this.ctx), i = t.config.yaxis[0].crosshairs, s = t.globals.barPadForNumericAxis;
      if (t.config.yaxis[0].crosshairs.show) {
        var r = e.drawLine(-s, 0, t.globals.gridWidth + s, 0, i.stroke.color, i.stroke.dashArray, i.stroke.width);
        r.attr({ class: "apexcharts-ycrosshairs" }), t.globals.dom.elGraphical.add(r);
      }
      var o = e.drawLine(-s, 0, t.globals.gridWidth + s, 0, i.stroke.color, 0, 0);
      o.attr({ class: "apexcharts-ycrosshairs-hidden" }), t.globals.dom.elGraphical.add(o);
    } }]), E;
  }(), tt = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "checkResponsiveConfig", value: function(t) {
      var e = this, i = this.w, s = i.config;
      if (s.responsive.length !== 0) {
        var r = s.responsive.slice();
        r.sort(function(d, g) {
          return d.breakpoint > g.breakpoint ? 1 : g.breakpoint > d.breakpoint ? -1 : 0;
        }).reverse();
        var o = new re({}), n = function() {
          var d = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, g = r[0].breakpoint, p = window.innerWidth > 0 ? window.innerWidth : screen.width;
          if (p > g) {
            var x = _t.extendArrayProps(o, i.globals.initialConfig, i);
            d = F.extend(x, d), d = F.extend(i.config, d), e.overrideResponsiveOptions(d);
          } else
            for (var b = 0; b < r.length; b++)
              p < r[b].breakpoint && (d = _t.extendArrayProps(o, r[b].options, i), d = F.extend(i.config, d), e.overrideResponsiveOptions(d));
        };
        if (t) {
          var c = _t.extendArrayProps(o, t, i);
          c = F.extend(i.config, c), n(c = F.extend(c, t));
        } else
          n({});
      }
    } }, { key: "overrideResponsiveOptions", value: function(t) {
      var e = new re(t).init({ responsiveOverride: !0 });
      this.w.config = e;
    } }]), E;
  }(), ot = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.colors = [], this.w = t.w;
      var e = this.w;
      this.isColorFn = !1, this.isHeatmapDistributed = e.config.chart.type === "treemap" && e.config.plotOptions.treemap.distributed || e.config.chart.type === "heatmap" && e.config.plotOptions.heatmap.distributed, this.isBarDistributed = e.config.plotOptions.bar.distributed && (e.config.chart.type === "bar" || e.config.chart.type === "rangeBar");
    }
    return _(E, [{ key: "init", value: function() {
      this.setDefaultColors();
    } }, { key: "setDefaultColors", value: function() {
      var t, e = this, i = this.w, s = new F();
      if (i.globals.dom.elWrap.classList.add("apexcharts-theme-".concat(i.config.theme.mode)), i.config.colors === void 0 || ((t = i.config.colors) === null || t === void 0 ? void 0 : t.length) === 0 ? i.globals.colors = this.predefined() : (i.globals.colors = i.config.colors, Array.isArray(i.config.colors) && i.config.colors.length > 0 && typeof i.config.colors[0] == "function" && (i.globals.colors = i.config.series.map(function(y, A) {
        var S = i.config.colors[A];
        return S || (S = i.config.colors[0]), typeof S == "function" ? (e.isColorFn = !0, S({ value: i.globals.axisCharts ? i.globals.series[A][0] ? i.globals.series[A][0] : 0 : i.globals.series[A], seriesIndex: A, dataPointIndex: A, w: i })) : S;
      }))), i.globals.seriesColors.map(function(y, A) {
        y && (i.globals.colors[A] = y);
      }), i.config.theme.monochrome.enabled) {
        var r = [], o = i.globals.series.length;
        (this.isBarDistributed || this.isHeatmapDistributed) && (o = i.globals.series[0].length * i.globals.series.length);
        for (var n = i.config.theme.monochrome.color, c = 1 / (o / i.config.theme.monochrome.shadeIntensity), d = i.config.theme.monochrome.shadeTo, g = 0, p = 0; p < o; p++) {
          var x = void 0;
          d === "dark" ? (x = s.shadeColor(-1 * g, n), g += c) : (x = s.shadeColor(g, n), g += c), r.push(x);
        }
        i.globals.colors = r.slice();
      }
      var b = i.globals.colors.slice();
      this.pushExtraColors(i.globals.colors), ["fill", "stroke"].forEach(function(y) {
        i.config[y].colors === void 0 ? i.globals[y].colors = e.isColorFn ? i.config.colors : b : i.globals[y].colors = i.config[y].colors.slice(), e.pushExtraColors(i.globals[y].colors);
      }), i.config.dataLabels.style.colors === void 0 ? i.globals.dataLabels.style.colors = b : i.globals.dataLabels.style.colors = i.config.dataLabels.style.colors.slice(), this.pushExtraColors(i.globals.dataLabels.style.colors, 50), i.config.plotOptions.radar.polygons.fill.colors === void 0 ? i.globals.radarPolygons.fill.colors = [i.config.theme.mode === "dark" ? "#424242" : "none"] : i.globals.radarPolygons.fill.colors = i.config.plotOptions.radar.polygons.fill.colors.slice(), this.pushExtraColors(i.globals.radarPolygons.fill.colors, 20), i.config.markers.colors === void 0 ? i.globals.markers.colors = b : i.globals.markers.colors = i.config.markers.colors.slice(), this.pushExtraColors(i.globals.markers.colors);
    } }, { key: "pushExtraColors", value: function(t, e) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, s = this.w, r = e || s.globals.series.length;
      if (i === null && (i = this.isBarDistributed || this.isHeatmapDistributed || s.config.chart.type === "heatmap" && s.config.plotOptions.heatmap.colorScale.inverse), i && s.globals.series.length && (r = s.globals.series[s.globals.maxValsInArrayIndex].length * s.globals.series.length), t.length < r)
        for (var o = r - t.length, n = 0; n < o; n++)
          t.push(t[n]);
    } }, { key: "updateThemeOptions", value: function(t) {
      t.chart = t.chart || {}, t.tooltip = t.tooltip || {};
      var e = t.theme.mode || "light", i = t.theme.palette ? t.theme.palette : e === "dark" ? "palette4" : "palette1", s = t.chart.foreColor ? t.chart.foreColor : e === "dark" ? "#f6f7f8" : "#373d3f";
      return t.tooltip.theme = e, t.chart.foreColor = s, t.theme.palette = i, t;
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
    } }]), E;
  }(), Q = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "draw", value: function() {
      this.drawTitleSubtitle("title"), this.drawTitleSubtitle("subtitle");
    } }, { key: "drawTitleSubtitle", value: function(t) {
      var e = this.w, i = t === "title" ? e.config.title : e.config.subtitle, s = e.globals.svgWidth / 2, r = i.offsetY, o = "middle";
      if (i.align === "left" ? (s = 10, o = "start") : i.align === "right" && (s = e.globals.svgWidth - 10, o = "end"), s += i.offsetX, r = r + parseInt(i.style.fontSize, 10) + i.margin / 2, i.text !== void 0) {
        var n = new B(this.ctx).drawText({ x: s, y: r, text: i.text, textAnchor: o, fontSize: i.style.fontSize, fontFamily: i.style.fontFamily, fontWeight: i.style.fontWeight, foreColor: i.style.color, opacity: 1 });
        n.node.setAttribute("class", "apexcharts-".concat(t, "-text")), e.globals.dom.Paper.add(n);
      }
    } }]), E;
  }(), et = function() {
    function E(t) {
      w(this, E), this.w = t.w, this.dCtx = t;
    }
    return _(E, [{ key: "getTitleSubtitleCoords", value: function(t) {
      var e = this.w, i = 0, s = 0, r = t === "title" ? e.config.title.floating : e.config.subtitle.floating, o = e.globals.dom.baseEl.querySelector(".apexcharts-".concat(t, "-text"));
      if (o !== null && !r) {
        var n = o.getBoundingClientRect();
        i = n.width, s = e.globals.axisCharts ? n.height + 5 : n.height;
      }
      return { width: i, height: s };
    } }, { key: "getLegendsRect", value: function() {
      var t = this.w, e = t.globals.dom.elLegendWrap;
      t.config.legend.height || t.config.legend.position !== "top" && t.config.legend.position !== "bottom" || (e.style.maxHeight = t.globals.svgHeight / 2 + "px");
      var i = Object.assign({}, F.getBoundingClientRect(e));
      return e !== null && !t.config.legend.floating && t.config.legend.show ? this.dCtx.lgRect = { x: i.x, y: i.y, height: i.height, width: i.height === 0 ? 0 : i.width } : this.dCtx.lgRect = { x: 0, y: 0, height: 0, width: 0 }, t.config.legend.position !== "left" && t.config.legend.position !== "right" || 1.5 * this.dCtx.lgRect.width > t.globals.svgWidth && (this.dCtx.lgRect.width = t.globals.svgWidth / 1.5), this.dCtx.lgRect;
    } }, { key: "getLargestStringFromMultiArr", value: function(t, e) {
      var i = t;
      if (this.w.globals.isMultiLineX) {
        var s = e.map(function(o, n) {
          return Array.isArray(o) ? o.length : 1;
        }), r = Math.max.apply(Math, lt(s));
        i = e[s.indexOf(r)];
      }
      return i;
    } }]), E;
  }(), J = function() {
    function E(t) {
      w(this, E), this.w = t.w, this.dCtx = t;
    }
    return _(E, [{ key: "getxAxisLabelsCoords", value: function() {
      var t, e = this.w, i = e.globals.labels.slice();
      if (e.config.xaxis.convertedCatToNumeric && i.length === 0 && (i = e.globals.categoryLabels), e.globals.timescaleLabels.length > 0) {
        var s = this.getxAxisTimeScaleLabelsCoords();
        t = { width: s.width, height: s.height }, e.globals.rotateXLabels = !1;
      } else {
        this.dCtx.lgWidthForSideLegends = e.config.legend.position !== "left" && e.config.legend.position !== "right" || e.config.legend.floating ? 0 : this.dCtx.lgRect.width;
        var r = e.globals.xLabelFormatter, o = F.getLargestStringFromArr(i), n = this.dCtx.dimHelpers.getLargestStringFromMultiArr(o, i);
        e.globals.isBarHorizontal && (n = o = e.globals.yAxisScale[0].result.reduce(function(y, A) {
          return y.length > A.length ? y : A;
        }, 0));
        var c = new qt(this.dCtx.ctx), d = o;
        o = c.xLabelFormat(r, o, d, { i: void 0, dateFormatter: new Mt(this.dCtx.ctx).formatDate, w: e }), n = c.xLabelFormat(r, n, d, { i: void 0, dateFormatter: new Mt(this.dCtx.ctx).formatDate, w: e }), (e.config.xaxis.convertedCatToNumeric && o === void 0 || String(o).trim() === "") && (n = o = "1");
        var g = new B(this.dCtx.ctx), p = g.getTextRects(o, e.config.xaxis.labels.style.fontSize), x = p;
        if (o !== n && (x = g.getTextRects(n, e.config.xaxis.labels.style.fontSize)), (t = { width: p.width >= x.width ? p.width : x.width, height: p.height >= x.height ? p.height : x.height }).width * i.length > e.globals.svgWidth - this.dCtx.lgWidthForSideLegends - this.dCtx.yAxisWidth - this.dCtx.gridPad.left - this.dCtx.gridPad.right && e.config.xaxis.labels.rotate !== 0 || e.config.xaxis.labels.rotateAlways) {
          if (!e.globals.isBarHorizontal) {
            e.globals.rotateXLabels = !0;
            var b = function(y) {
              return g.getTextRects(y, e.config.xaxis.labels.style.fontSize, e.config.xaxis.labels.style.fontFamily, "rotate(".concat(e.config.xaxis.labels.rotate, " 0 0)"), !1);
            };
            p = b(o), o !== n && (x = b(n)), t.height = (p.height > x.height ? p.height : x.height) / 1.5, t.width = p.width > x.width ? p.width : x.width;
          }
        } else
          e.globals.rotateXLabels = !1;
      }
      return e.config.xaxis.labels.show || (t = { width: 0, height: 0 }), { width: t.width, height: t.height };
    } }, { key: "getxAxisGroupLabelsCoords", value: function() {
      var t, e = this.w;
      if (!e.globals.hasXaxisGroups)
        return { width: 0, height: 0 };
      var i, s = ((t = e.config.xaxis.group.style) === null || t === void 0 ? void 0 : t.fontSize) || e.config.xaxis.labels.style.fontSize, r = e.globals.groups.map(function(p) {
        return p.title;
      }), o = F.getLargestStringFromArr(r), n = this.dCtx.dimHelpers.getLargestStringFromMultiArr(o, r), c = new B(this.dCtx.ctx), d = c.getTextRects(o, s), g = d;
      return o !== n && (g = c.getTextRects(n, s)), i = { width: d.width >= g.width ? d.width : g.width, height: d.height >= g.height ? d.height : g.height }, e.config.xaxis.labels.show || (i = { width: 0, height: 0 }), { width: i.width, height: i.height };
    } }, { key: "getxAxisTitleCoords", value: function() {
      var t = this.w, e = 0, i = 0;
      if (t.config.xaxis.title.text !== void 0) {
        var s = new B(this.dCtx.ctx).getTextRects(t.config.xaxis.title.text, t.config.xaxis.title.style.fontSize);
        e = s.width, i = s.height;
      }
      return { width: e, height: i };
    } }, { key: "getxAxisTimeScaleLabelsCoords", value: function() {
      var t, e = this.w;
      this.dCtx.timescaleLabels = e.globals.timescaleLabels.slice();
      var i = this.dCtx.timescaleLabels.map(function(r) {
        return r.value;
      }), s = i.reduce(function(r, o) {
        return r === void 0 ? (console.error("You have possibly supplied invalid Date format. Please supply a valid JavaScript Date"), 0) : r.length > o.length ? r : o;
      }, 0);
      return 1.05 * (t = new B(this.dCtx.ctx).getTextRects(s, e.config.xaxis.labels.style.fontSize)).width * i.length > e.globals.gridWidth && e.config.xaxis.labels.rotate !== 0 && (e.globals.overlappingXLabels = !0), t;
    } }, { key: "additionalPaddingXLabels", value: function(t) {
      var e = this, i = this.w, s = i.globals, r = i.config, o = r.xaxis.type, n = t.width;
      s.skipLastTimelinelabel = !1, s.skipFirstTimelinelabel = !1;
      var c = i.config.yaxis[0].opposite && i.globals.isBarHorizontal, d = function(g, p) {
        r.yaxis.length > 1 && function(x) {
          return s.collapsedSeriesIndices.indexOf(x) !== -1;
        }(p) || function(x) {
          if (e.dCtx.timescaleLabels && e.dCtx.timescaleLabels.length) {
            var b = e.dCtx.timescaleLabels[0], y = e.dCtx.timescaleLabels[e.dCtx.timescaleLabels.length - 1].position + n / 1.75 - e.dCtx.yAxisWidthRight, A = b.position - n / 1.75 + e.dCtx.yAxisWidthLeft, S = i.config.legend.position === "right" && e.dCtx.lgRect.width > 0 ? e.dCtx.lgRect.width : 0;
            y > s.svgWidth - s.translateX - S && (s.skipLastTimelinelabel = !0), A < -(x.show && !x.floating || r.chart.type !== "bar" && r.chart.type !== "candlestick" && r.chart.type !== "rangeBar" && r.chart.type !== "boxPlot" ? 10 : n / 1.75) && (s.skipFirstTimelinelabel = !0);
          } else
            o === "datetime" ? e.dCtx.gridPad.right < n && !s.rotateXLabels && (s.skipLastTimelinelabel = !0) : o !== "datetime" && e.dCtx.gridPad.right < n / 2 - e.dCtx.yAxisWidthRight && !s.rotateXLabels && !i.config.xaxis.labels.trim && (i.config.xaxis.tickPlacement !== "between" || i.globals.isBarHorizontal) && (e.dCtx.xPadRight = n / 2 + 1);
        }(g);
      };
      r.yaxis.forEach(function(g, p) {
        c ? (e.dCtx.gridPad.left < n && (e.dCtx.xPadLeft = n / 2 + 1), e.dCtx.xPadRight = n / 2 + 1) : d(g, p);
      });
    } }]), E;
  }(), ct = function() {
    function E(t) {
      w(this, E), this.w = t.w, this.dCtx = t;
    }
    return _(E, [{ key: "getyAxisLabelsCoords", value: function() {
      var t = this, e = this.w, i = [], s = 10, r = new rt(this.dCtx.ctx);
      return e.config.yaxis.map(function(o, n) {
        var c = { seriesIndex: n, dataPointIndex: -1, w: e }, d = e.globals.yAxisScale[n], g = 0;
        if (!r.isYAxisHidden(n) && o.labels.show && o.labels.minWidth !== void 0 && (g = o.labels.minWidth), !r.isYAxisHidden(n) && o.labels.show && d.result.length) {
          var p = e.globals.yLabelFormatters[n], x = d.niceMin === Number.MIN_VALUE ? 0 : d.niceMin, b = d.result.reduce(function(m, k) {
            var C, O;
            return ((C = String(p(m, c))) === null || C === void 0 ? void 0 : C.length) > ((O = String(p(k, c))) === null || O === void 0 ? void 0 : O.length) ? m : k;
          }, x), y = b = p(b, c);
          if (b !== void 0 && b.length !== 0 || (b = d.niceMax), e.globals.isBarHorizontal) {
            s = 0;
            var A = e.globals.labels.slice();
            b = F.getLargestStringFromArr(A), b = p(b, { seriesIndex: n, dataPointIndex: -1, w: e }), y = t.dCtx.dimHelpers.getLargestStringFromMultiArr(b, A);
          }
          var S = new B(t.dCtx.ctx), N = "rotate(".concat(o.labels.rotate, " 0 0)"), L = S.getTextRects(b, o.labels.style.fontSize, o.labels.style.fontFamily, N, !1), h = L;
          b !== y && (h = S.getTextRects(y, o.labels.style.fontSize, o.labels.style.fontFamily, N, !1)), i.push({ width: (g > h.width || g > L.width ? g : h.width > L.width ? h.width : L.width) + s, height: h.height > L.height ? h.height : L.height });
        } else
          i.push({ width: 0, height: 0 });
      }), i;
    } }, { key: "getyAxisTitleCoords", value: function() {
      var t = this, e = this.w, i = [];
      return e.config.yaxis.map(function(s, r) {
        if (s.show && s.title.text !== void 0) {
          var o = new B(t.dCtx.ctx), n = "rotate(".concat(s.title.rotate, " 0 0)"), c = o.getTextRects(s.title.text, s.title.style.fontSize, s.title.style.fontFamily, n, !1);
          i.push({ width: c.width, height: c.height });
        } else
          i.push({ width: 0, height: 0 });
      }), i;
    } }, { key: "getTotalYAxisWidth", value: function() {
      var t = this.w, e = 0, i = 0, s = 0, r = t.globals.yAxisScale.length > 1 ? 10 : 0, o = new rt(this.dCtx.ctx), n = function(c, d) {
        var g = t.config.yaxis[d].floating, p = 0;
        c.width > 0 && !g ? (p = c.width + r, function(x) {
          return t.globals.ignoreYAxisIndexes.indexOf(x) > -1;
        }(d) && (p = p - c.width - r)) : p = g || o.isYAxisHidden(d) ? 0 : 5, t.config.yaxis[d].opposite ? s += p : i += p, e += p;
      };
      return t.globals.yLabelsCoords.map(function(c, d) {
        n(c, d);
      }), t.globals.yTitleCoords.map(function(c, d) {
        n(c, d);
      }), t.globals.isBarHorizontal && !t.config.yaxis[0].floating && (e = t.globals.yLabelsCoords[0].width + t.globals.yTitleCoords[0].width + 15), this.dCtx.yAxisWidthLeft = i, this.dCtx.yAxisWidthRight = s, e;
    } }]), E;
  }(), xt = function() {
    function E(t) {
      w(this, E), this.w = t.w, this.dCtx = t;
    }
    return _(E, [{ key: "gridPadForColumnsInNumericAxis", value: function(t) {
      var e = this.w;
      if (e.globals.noData || e.globals.allSeriesCollapsed)
        return 0;
      var i = function(g) {
        return g === "bar" || g === "rangeBar" || g === "candlestick" || g === "boxPlot";
      }, s = e.config.chart.type, r = 0, o = i(s) ? e.config.series.length : 1;
      if (e.globals.comboBarCount > 0 && (o = e.globals.comboBarCount), e.globals.collapsedSeries.forEach(function(g) {
        i(g.type) && (o -= 1);
      }), e.config.chart.stacked && (o = 1), (i(s) || e.globals.comboBarCount > 0) && e.globals.isXNumeric && !e.globals.isBarHorizontal && o > 0) {
        var n, c, d = Math.abs(e.globals.initialMaxX - e.globals.initialMinX);
        d <= 3 && (d = e.globals.dataPoints), n = d / t, e.globals.minXDiff && e.globals.minXDiff / n > 0 && (c = e.globals.minXDiff / n), c > t / 2 && (c /= 2), (r = c / o * parseInt(e.config.plotOptions.bar.columnWidth, 10) / 100) < 1 && (r = 1), r = r / (o > 1 ? 1 : 1.5) + 5, e.globals.barPadForNumericAxis = r;
      }
      return r;
    } }, { key: "gridPadFortitleSubtitle", value: function() {
      var t = this, e = this.w, i = e.globals, s = this.dCtx.isSparkline || !e.globals.axisCharts ? 0 : 10;
      ["title", "subtitle"].forEach(function(n) {
        e.config[n].text !== void 0 ? s += e.config[n].margin : s += t.dCtx.isSparkline || !e.globals.axisCharts ? 0 : 5;
      }), !e.config.legend.show || e.config.legend.position !== "bottom" || e.config.legend.floating || e.globals.axisCharts || (s += 10);
      var r = this.dCtx.dimHelpers.getTitleSubtitleCoords("title"), o = this.dCtx.dimHelpers.getTitleSubtitleCoords("subtitle");
      i.gridHeight = i.gridHeight - r.height - o.height - s, i.translateY = i.translateY + r.height + o.height + s;
    } }, { key: "setGridXPosForDualYAxis", value: function(t, e) {
      var i = this.w, s = new rt(this.dCtx.ctx);
      i.config.yaxis.map(function(r, o) {
        i.globals.ignoreYAxisIndexes.indexOf(o) !== -1 || r.floating || s.isYAxisHidden(o) || (r.opposite && (i.globals.translateX = i.globals.translateX - (e[o].width + t[o].width) - parseInt(i.config.yaxis[o].labels.style.fontSize, 10) / 1.2 - 12), i.globals.translateX < 2 && (i.globals.translateX = 2));
      });
    } }]), E;
  }(), ft = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w, this.lgRect = {}, this.yAxisWidth = 0, this.yAxisWidthLeft = 0, this.yAxisWidthRight = 0, this.xAxisHeight = 0, this.isSparkline = this.w.config.chart.sparkline.enabled, this.dimHelpers = new et(this), this.dimYAxis = new ct(this), this.dimXAxis = new J(this), this.dimGrid = new xt(this), this.lgWidthForSideLegends = 0, this.gridPad = this.w.config.grid.padding, this.xPadRight = 0, this.xPadLeft = 0;
    }
    return _(E, [{ key: "plotCoords", value: function() {
      var t = this, e = this.w, i = e.globals;
      this.lgRect = this.dimHelpers.getLegendsRect(), this.isSparkline && ((e.config.markers.discrete.length > 0 || e.config.markers.size > 0) && Object.entries(this.gridPad).forEach(function(r) {
        var o = it(r, 2), n = o[0], c = o[1];
        t.gridPad[n] = Math.max(c, t.w.globals.markers.largestSize / 1.5);
      }), this.gridPad.top = Math.max(e.config.stroke.width / 2, this.gridPad.top), this.gridPad.bottom = Math.max(e.config.stroke.width / 2, this.gridPad.bottom)), i.axisCharts ? this.setDimensionsForAxisCharts() : this.setDimensionsForNonAxisCharts(), this.dimGrid.gridPadFortitleSubtitle(), i.gridHeight = i.gridHeight - this.gridPad.top - this.gridPad.bottom, i.gridWidth = i.gridWidth - this.gridPad.left - this.gridPad.right - this.xPadRight - this.xPadLeft;
      var s = this.dimGrid.gridPadForColumnsInNumericAxis(i.gridWidth);
      i.gridWidth = i.gridWidth - 2 * s, i.translateX = i.translateX + this.gridPad.left + this.xPadLeft + (s > 0 ? s + 4 : 0), i.translateY = i.translateY + this.gridPad.top;
    } }, { key: "setDimensionsForAxisCharts", value: function() {
      var t = this, e = this.w, i = e.globals, s = this.dimYAxis.getyAxisLabelsCoords(), r = this.dimYAxis.getyAxisTitleCoords();
      e.globals.yLabelsCoords = [], e.globals.yTitleCoords = [], e.config.yaxis.map(function(b, y) {
        e.globals.yLabelsCoords.push({ width: s[y].width, index: y }), e.globals.yTitleCoords.push({ width: r[y].width, index: y });
      }), this.yAxisWidth = this.dimYAxis.getTotalYAxisWidth();
      var o = this.dimXAxis.getxAxisLabelsCoords(), n = this.dimXAxis.getxAxisGroupLabelsCoords(), c = this.dimXAxis.getxAxisTitleCoords();
      this.conditionalChecksForAxisCoords(o, c, n), i.translateXAxisY = e.globals.rotateXLabels ? this.xAxisHeight / 8 : -4, i.translateXAxisX = e.globals.rotateXLabels && e.globals.isXNumeric && e.config.xaxis.labels.rotate <= -45 ? -this.xAxisWidth / 4 : 0, e.globals.isBarHorizontal && (i.rotateXLabels = !1, i.translateXAxisY = parseInt(e.config.xaxis.labels.style.fontSize, 10) / 1.5 * -1), i.translateXAxisY = i.translateXAxisY + e.config.xaxis.labels.offsetY, i.translateXAxisX = i.translateXAxisX + e.config.xaxis.labels.offsetX;
      var d = this.yAxisWidth, g = this.xAxisHeight;
      i.xAxisLabelsHeight = this.xAxisHeight - c.height, i.xAxisGroupLabelsHeight = i.xAxisLabelsHeight - o.height, i.xAxisLabelsWidth = this.xAxisWidth, i.xAxisHeight = this.xAxisHeight;
      var p = 10;
      (e.config.chart.type === "radar" || this.isSparkline) && (d = 0, g = i.goldenPadding), this.isSparkline && (this.lgRect = { height: 0, width: 0 }), (this.isSparkline || e.config.chart.type === "treemap") && (d = 0, g = 0, p = 0), this.isSparkline || this.dimXAxis.additionalPaddingXLabels(o);
      var x = function() {
        i.translateX = d, i.gridHeight = i.svgHeight - t.lgRect.height - g - (t.isSparkline || e.config.chart.type === "treemap" ? 0 : e.globals.rotateXLabels ? 10 : 15), i.gridWidth = i.svgWidth - d;
      };
      switch (e.config.xaxis.position === "top" && (p = i.xAxisHeight - e.config.xaxis.axisTicks.height - 5), e.config.legend.position) {
        case "bottom":
          i.translateY = p, x();
          break;
        case "top":
          i.translateY = this.lgRect.height + p, x();
          break;
        case "left":
          i.translateY = p, i.translateX = this.lgRect.width + d, i.gridHeight = i.svgHeight - g - 12, i.gridWidth = i.svgWidth - this.lgRect.width - d;
          break;
        case "right":
          i.translateY = p, i.translateX = d, i.gridHeight = i.svgHeight - g - 12, i.gridWidth = i.svgWidth - this.lgRect.width - d - 5;
          break;
        default:
          throw new Error("Legend position not supported");
      }
      this.dimGrid.setGridXPosForDualYAxis(r, s), new M(this.ctx).setYAxisXPosition(s, r);
    } }, { key: "setDimensionsForNonAxisCharts", value: function() {
      var t = this.w, e = t.globals, i = t.config, s = 0;
      t.config.legend.show && !t.config.legend.floating && (s = 20);
      var r = i.chart.type === "pie" || i.chart.type === "polarArea" || i.chart.type === "donut" ? "pie" : "radialBar", o = i.plotOptions[r].offsetY, n = i.plotOptions[r].offsetX;
      if (!i.legend.show || i.legend.floating)
        return e.gridHeight = e.svgHeight - i.grid.padding.left + i.grid.padding.right, e.gridWidth = e.gridHeight, e.translateY = o, void (e.translateX = n + (e.svgWidth - e.gridWidth) / 2);
      switch (i.legend.position) {
        case "bottom":
          e.gridHeight = e.svgHeight - this.lgRect.height - e.goldenPadding, e.gridWidth = e.svgWidth, e.translateY = o - 10, e.translateX = n + (e.svgWidth - e.gridWidth) / 2;
          break;
        case "top":
          e.gridHeight = e.svgHeight - this.lgRect.height - e.goldenPadding, e.gridWidth = e.svgWidth, e.translateY = this.lgRect.height + o + 10, e.translateX = n + (e.svgWidth - e.gridWidth) / 2;
          break;
        case "left":
          e.gridWidth = e.svgWidth - this.lgRect.width - s, e.gridHeight = i.chart.height !== "auto" ? e.svgHeight : e.gridWidth, e.translateY = o, e.translateX = n + this.lgRect.width + s;
          break;
        case "right":
          e.gridWidth = e.svgWidth - this.lgRect.width - s - 5, e.gridHeight = i.chart.height !== "auto" ? e.svgHeight : e.gridWidth, e.translateY = o, e.translateX = n + 10;
          break;
        default:
          throw new Error("Legend position not supported");
      }
    } }, { key: "conditionalChecksForAxisCoords", value: function(t, e, i) {
      var s = this.w, r = s.globals.hasXaxisGroups ? 2 : 1, o = i.height + t.height + e.height, n = s.globals.isMultiLineX ? 1.2 : s.globals.LINE_HEIGHT_RATIO, c = s.globals.rotateXLabels ? 22 : 10, d = s.globals.rotateXLabels && s.config.legend.position === "bottom" ? 10 : 0;
      this.xAxisHeight = o * n + r * c + d, this.xAxisWidth = t.width, this.xAxisHeight - e.height > s.config.xaxis.labels.maxHeight && (this.xAxisHeight = s.config.xaxis.labels.maxHeight), s.config.xaxis.labels.minHeight && this.xAxisHeight < s.config.xaxis.labels.minHeight && (this.xAxisHeight = s.config.xaxis.labels.minHeight), s.config.xaxis.floating && (this.xAxisHeight = 0);
      var g = 0, p = 0;
      s.config.yaxis.forEach(function(x) {
        g += x.labels.minWidth, p += x.labels.maxWidth;
      }), this.yAxisWidth < g && (this.yAxisWidth = g), this.yAxisWidth > p && (this.yAxisWidth = p);
    } }]), E;
  }(), Ct = function() {
    function E(t) {
      w(this, E), this.w = t.w, this.lgCtx = t;
    }
    return _(E, [{ key: "getLegendStyles", value: function() {
      var t, e, i, s = document.createElement("style");
      s.setAttribute("type", "text/css");
      var r = ((t = this.lgCtx.ctx) === null || t === void 0 || (e = t.opts) === null || e === void 0 || (i = e.chart) === null || i === void 0 ? void 0 : i.nonce) || this.w.config.chart.nonce;
      r && s.setAttribute("nonce", r);
      var o = document.createTextNode(`
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
      return s.appendChild(o), s;
    } }, { key: "getLegendBBox", value: function() {
      var t = this.w.globals.dom.baseEl.querySelector(".apexcharts-legend").getBoundingClientRect(), e = t.width;
      return { clwh: t.height, clww: e };
    } }, { key: "appendToForeignObject", value: function() {
      this.w.globals.dom.elLegendForeign.appendChild(this.getLegendStyles());
    } }, { key: "toggleDataSeries", value: function(t, e) {
      var i = this, s = this.w;
      if (s.globals.axisCharts || s.config.chart.type === "radialBar") {
        s.globals.resized = !0;
        var r = null, o = null;
        s.globals.risingSeries = [], s.globals.axisCharts ? (r = s.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(t, "']")), o = parseInt(r.getAttribute("data:realIndex"), 10)) : (r = s.globals.dom.baseEl.querySelector(".apexcharts-series[rel='".concat(t + 1, "']")), o = parseInt(r.getAttribute("rel"), 10) - 1), e ? [{ cs: s.globals.collapsedSeries, csi: s.globals.collapsedSeriesIndices }, { cs: s.globals.ancillaryCollapsedSeries, csi: s.globals.ancillaryCollapsedSeriesIndices }].forEach(function(g) {
          i.riseCollapsedSeries(g.cs, g.csi, o);
        }) : this.hideSeries({ seriesEl: r, realIndex: o });
      } else {
        var n = s.globals.dom.Paper.select(" .apexcharts-series[rel='".concat(t + 1, "'] path")), c = s.config.chart.type;
        if (c === "pie" || c === "polarArea" || c === "donut") {
          var d = s.config.plotOptions.pie.donut.labels;
          new B(this.lgCtx.ctx).pathMouseDown(n.members[0], null), this.lgCtx.ctx.pie.printDataLabelsInner(n.members[0].node, d);
        }
        n.fire("click");
      }
    } }, { key: "hideSeries", value: function(t) {
      var e = t.seriesEl, i = t.realIndex, s = this.w, r = F.clone(s.config.series);
      if (s.globals.axisCharts) {
        var o = !1;
        if (s.config.yaxis[i] && s.config.yaxis[i].show && s.config.yaxis[i].showAlways && (o = !0, s.globals.ancillaryCollapsedSeriesIndices.indexOf(i) < 0 && (s.globals.ancillaryCollapsedSeries.push({ index: i, data: r[i].data.slice(), type: e.parentNode.className.baseVal.split("-")[1] }), s.globals.ancillaryCollapsedSeriesIndices.push(i))), !o) {
          s.globals.collapsedSeries.push({ index: i, data: r[i].data.slice(), type: e.parentNode.className.baseVal.split("-")[1] }), s.globals.collapsedSeriesIndices.push(i);
          var n = s.globals.risingSeries.indexOf(i);
          s.globals.risingSeries.splice(n, 1);
        }
      } else
        s.globals.collapsedSeries.push({ index: i, data: r[i] }), s.globals.collapsedSeriesIndices.push(i);
      for (var c = e.childNodes, d = 0; d < c.length; d++)
        c[d].classList.contains("apexcharts-series-markers-wrap") && (c[d].classList.contains("apexcharts-hide") ? c[d].classList.remove("apexcharts-hide") : c[d].classList.add("apexcharts-hide"));
      s.globals.allSeriesCollapsed = s.globals.collapsedSeries.length === s.config.series.length, r = this._getSeriesBasedOnCollapsedState(r), this.lgCtx.ctx.updateHelpers._updateSeries(r, s.config.chart.animations.dynamicAnimation.enabled);
    } }, { key: "riseCollapsedSeries", value: function(t, e, i) {
      var s = this.w, r = F.clone(s.config.series);
      if (t.length > 0) {
        for (var o = 0; o < t.length; o++)
          t[o].index === i && (s.globals.axisCharts ? (r[i].data = t[o].data.slice(), t.splice(o, 1), e.splice(o, 1), s.globals.risingSeries.push(i)) : (r[i] = t[o].data, t.splice(o, 1), e.splice(o, 1), s.globals.risingSeries.push(i)));
        r = this._getSeriesBasedOnCollapsedState(r), this.lgCtx.ctx.updateHelpers._updateSeries(r, s.config.chart.animations.dynamicAnimation.enabled);
      }
    } }, { key: "_getSeriesBasedOnCollapsedState", value: function(t) {
      var e = this.w;
      return e.globals.axisCharts ? t.forEach(function(i, s) {
        e.globals.collapsedSeriesIndices.indexOf(s) > -1 && (t[s].data = []);
      }) : t.forEach(function(i, s) {
        e.globals.collapsedSeriesIndices.indexOf(s) > -1 && (t[s] = 0);
      }), t;
    } }]), E;
  }(), Tt = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w, this.onLegendClick = this.onLegendClick.bind(this), this.onLegendHovered = this.onLegendHovered.bind(this), this.isBarsDistributed = this.w.config.chart.type === "bar" && this.w.config.plotOptions.bar.distributed && this.w.config.series.length === 1, this.legendHelpers = new Ct(this);
    }
    return _(E, [{ key: "init", value: function() {
      var t = this.w, e = t.globals, i = t.config;
      if ((i.legend.showForSingleSeries && e.series.length === 1 || this.isBarsDistributed || e.series.length > 1 || !e.axisCharts) && i.legend.show) {
        for (; e.dom.elLegendWrap.firstChild; )
          e.dom.elLegendWrap.removeChild(e.dom.elLegendWrap.firstChild);
        this.drawLegends(), F.isIE11() ? document.getElementsByTagName("head")[0].appendChild(this.legendHelpers.getLegendStyles()) : this.legendHelpers.appendToForeignObject(), i.legend.position === "bottom" || i.legend.position === "top" ? this.legendAlignHorizontal() : i.legend.position !== "right" && i.legend.position !== "left" || this.legendAlignVertical();
      }
    } }, { key: "drawLegends", value: function() {
      var t = this, e = this.w, i = e.config.legend.fontFamily, s = e.globals.seriesNames, r = e.globals.colors.slice();
      if (e.config.chart.type === "heatmap") {
        var o = e.config.plotOptions.heatmap.colorScale.ranges;
        s = o.map(function(U) {
          return U.name ? U.name : U.from + " - " + U.to;
        }), r = o.map(function(U) {
          return U.color;
        });
      } else
        this.isBarsDistributed && (s = e.globals.labels.slice());
      e.config.legend.customLegendItems.length && (s = e.config.legend.customLegendItems);
      for (var n = e.globals.legendFormatter, c = e.config.legend.inverseOrder, d = c ? s.length - 1 : 0; c ? d >= 0 : d <= s.length - 1; c ? d-- : d++) {
        var g, p = n(s[d], { seriesIndex: d, w: e }), x = !1, b = !1;
        if (e.globals.collapsedSeries.length > 0)
          for (var y = 0; y < e.globals.collapsedSeries.length; y++)
            e.globals.collapsedSeries[y].index === d && (x = !0);
        if (e.globals.ancillaryCollapsedSeriesIndices.length > 0)
          for (var A = 0; A < e.globals.ancillaryCollapsedSeriesIndices.length; A++)
            e.globals.ancillaryCollapsedSeriesIndices[A] === d && (b = !0);
        var S = document.createElement("span");
        S.classList.add("apexcharts-legend-marker");
        var N = e.config.legend.markers.offsetX, L = e.config.legend.markers.offsetY, h = e.config.legend.markers.height, m = e.config.legend.markers.width, k = e.config.legend.markers.strokeWidth, C = e.config.legend.markers.strokeColor, O = e.config.legend.markers.radius, I = S.style;
        I.background = r[d], I.color = r[d], I.setProperty("background", r[d], "important"), e.config.legend.markers.fillColors && e.config.legend.markers.fillColors[d] && (I.background = e.config.legend.markers.fillColors[d]), e.globals.seriesColors[d] !== void 0 && (I.background = e.globals.seriesColors[d], I.color = e.globals.seriesColors[d]), I.height = Array.isArray(h) ? parseFloat(h[d]) + "px" : parseFloat(h) + "px", I.width = Array.isArray(m) ? parseFloat(m[d]) + "px" : parseFloat(m) + "px", I.left = (Array.isArray(N) ? parseFloat(N[d]) : parseFloat(N)) + "px", I.top = (Array.isArray(L) ? parseFloat(L[d]) : parseFloat(L)) + "px", I.borderWidth = Array.isArray(k) ? k[d] : k, I.borderColor = Array.isArray(C) ? C[d] : C, I.borderRadius = Array.isArray(O) ? parseFloat(O[d]) + "px" : parseFloat(O) + "px", e.config.legend.markers.customHTML && (Array.isArray(e.config.legend.markers.customHTML) ? e.config.legend.markers.customHTML[d] && (S.innerHTML = e.config.legend.markers.customHTML[d]()) : S.innerHTML = e.config.legend.markers.customHTML()), B.setAttrs(S, { rel: d + 1, "data:collapsed": x || b }), (x || b) && S.classList.add("apexcharts-inactive-legend");
        var X = document.createElement("div"), Y = document.createElement("span");
        Y.classList.add("apexcharts-legend-text"), Y.innerHTML = Array.isArray(p) ? p.join(" ") : p;
        var W = e.config.legend.labels.useSeriesColors ? e.globals.colors[d] : Array.isArray(e.config.legend.labels.colors) ? (g = e.config.legend.labels.colors) === null || g === void 0 ? void 0 : g[d] : e.config.legend.labels.colors;
        W || (W = e.config.chart.foreColor), Y.style.color = W, Y.style.fontSize = parseFloat(e.config.legend.fontSize) + "px", Y.style.fontWeight = e.config.legend.fontWeight, Y.style.fontFamily = i || e.config.chart.fontFamily, B.setAttrs(Y, { rel: d + 1, i: d, "data:default-text": encodeURIComponent(p), "data:collapsed": x || b }), X.appendChild(S), X.appendChild(Y);
        var q = new _t(this.ctx);
        e.config.legend.showForZeroSeries || q.getSeriesTotalByIndex(d) === 0 && q.seriesHaveSameValues(d) && !q.isSeriesNull(d) && e.globals.collapsedSeriesIndices.indexOf(d) === -1 && e.globals.ancillaryCollapsedSeriesIndices.indexOf(d) === -1 && X.classList.add("apexcharts-hidden-zero-series"), e.config.legend.showForNullSeries || q.isSeriesNull(d) && e.globals.collapsedSeriesIndices.indexOf(d) === -1 && e.globals.ancillaryCollapsedSeriesIndices.indexOf(d) === -1 && X.classList.add("apexcharts-hidden-null-series"), e.globals.dom.elLegendWrap.appendChild(X), e.globals.dom.elLegendWrap.classList.add("apexcharts-align-".concat(e.config.legend.horizontalAlign)), e.globals.dom.elLegendWrap.classList.add("apx-legend-position-" + e.config.legend.position), X.classList.add("apexcharts-legend-series"), X.style.margin = "".concat(e.config.legend.itemMargin.vertical, "px ").concat(e.config.legend.itemMargin.horizontal, "px"), e.globals.dom.elLegendWrap.style.width = e.config.legend.width ? e.config.legend.width + "px" : "", e.globals.dom.elLegendWrap.style.height = e.config.legend.height ? e.config.legend.height + "px" : "", B.setAttrs(X, { rel: d + 1, seriesName: F.escapeString(s[d]), "data:collapsed": x || b }), (x || b) && X.classList.add("apexcharts-inactive-legend"), e.config.legend.onItemClick.toggleDataSeries || X.classList.add("apexcharts-no-click");
      }
      e.globals.dom.elWrap.addEventListener("click", t.onLegendClick, !0), e.config.legend.onItemHover.highlightDataSeries && e.config.legend.customLegendItems.length === 0 && (e.globals.dom.elWrap.addEventListener("mousemove", t.onLegendHovered, !0), e.globals.dom.elWrap.addEventListener("mouseout", t.onLegendHovered, !0));
    } }, { key: "setLegendWrapXY", value: function(t, e) {
      var i = this.w, s = i.globals.dom.elLegendWrap, r = s.getBoundingClientRect(), o = 0, n = 0;
      if (i.config.legend.position === "bottom")
        n += i.globals.svgHeight - r.height / 2;
      else if (i.config.legend.position === "top") {
        var c = new ft(this.ctx), d = c.dimHelpers.getTitleSubtitleCoords("title").height, g = c.dimHelpers.getTitleSubtitleCoords("subtitle").height;
        n = n + (d > 0 ? d - 10 : 0) + (g > 0 ? g - 10 : 0);
      }
      s.style.position = "absolute", o = o + t + i.config.legend.offsetX, n = n + e + i.config.legend.offsetY, s.style.left = o + "px", s.style.top = n + "px", i.config.legend.position === "bottom" ? (s.style.top = "auto", s.style.bottom = 5 - i.config.legend.offsetY + "px") : i.config.legend.position === "right" && (s.style.left = "auto", s.style.right = 25 + i.config.legend.offsetX + "px"), ["width", "height"].forEach(function(p) {
        s.style[p] && (s.style[p] = parseInt(i.config.legend[p], 10) + "px");
      });
    } }, { key: "legendAlignHorizontal", value: function() {
      var t = this.w;
      t.globals.dom.elLegendWrap.style.right = 0;
      var e = this.legendHelpers.getLegendBBox(), i = new ft(this.ctx), s = i.dimHelpers.getTitleSubtitleCoords("title"), r = i.dimHelpers.getTitleSubtitleCoords("subtitle"), o = 0;
      t.config.legend.position === "bottom" ? o = -e.clwh / 1.8 : t.config.legend.position === "top" && (o = s.height + r.height + t.config.title.margin + t.config.subtitle.margin - 10), this.setLegendWrapXY(20, o);
    } }, { key: "legendAlignVertical", value: function() {
      var t = this.w, e = this.legendHelpers.getLegendBBox(), i = 0;
      t.config.legend.position === "left" && (i = 20), t.config.legend.position === "right" && (i = t.globals.svgWidth - e.clww - 10), this.setLegendWrapXY(i, 20);
    } }, { key: "onLegendHovered", value: function(t) {
      var e = this.w, i = t.target.classList.contains("apexcharts-legend-series") || t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker");
      if (e.config.chart.type === "heatmap" || this.isBarsDistributed) {
        if (i) {
          var s = parseInt(t.target.getAttribute("rel"), 10) - 1;
          this.ctx.events.fireEvent("legendHover", [this.ctx, s, this.w]), new Qt(this.ctx).highlightRangeInSeries(t, t.target);
        }
      } else
        !t.target.classList.contains("apexcharts-inactive-legend") && i && new Qt(this.ctx).toggleSeriesOnHover(t, t.target);
    } }, { key: "onLegendClick", value: function(t) {
      var e = this.w;
      if (!e.config.legend.customLegendItems.length && (t.target.classList.contains("apexcharts-legend-series") || t.target.classList.contains("apexcharts-legend-text") || t.target.classList.contains("apexcharts-legend-marker"))) {
        var i = parseInt(t.target.getAttribute("rel"), 10) - 1, s = t.target.getAttribute("data:collapsed") === "true", r = this.w.config.chart.events.legendClick;
        typeof r == "function" && r(this.ctx, i, this.w), this.ctx.events.fireEvent("legendClick", [this.ctx, i, this.w]);
        var o = this.w.config.legend.markers.onClick;
        typeof o == "function" && t.target.classList.contains("apexcharts-legend-marker") && (o(this.ctx, i, this.w), this.ctx.events.fireEvent("legendMarkerClick", [this.ctx, i, this.w])), e.config.chart.type !== "treemap" && e.config.chart.type !== "heatmap" && !this.isBarsDistributed && e.config.legend.onItemClick.toggleDataSeries && this.legendHelpers.toggleDataSeries(i, s);
      }
    } }]), E;
  }(), Yt = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
      var e = this.w;
      this.ev = this.w.config.chart.events, this.selectedClass = "apexcharts-selected", this.localeValues = this.w.globals.locale.toolbar, this.minX = e.globals.minX, this.maxX = e.globals.maxX;
    }
    return _(E, [{ key: "createToolbar", value: function() {
      var t = this, e = this.w, i = function() {
        return document.createElement("div");
      }, s = i();
      if (s.setAttribute("class", "apexcharts-toolbar"), s.style.top = e.config.chart.toolbar.offsetY + "px", s.style.right = 3 - e.config.chart.toolbar.offsetX + "px", e.globals.dom.elWrap.appendChild(s), this.elZoom = i(), this.elZoomIn = i(), this.elZoomOut = i(), this.elPan = i(), this.elSelection = i(), this.elZoomReset = i(), this.elMenuIcon = i(), this.elMenu = i(), this.elCustomIcons = [], this.t = e.config.chart.toolbar.tools, Array.isArray(this.t.customIcons))
        for (var r = 0; r < this.t.customIcons.length; r++)
          this.elCustomIcons.push(i());
      var o = [], n = function(p, x, b) {
        var y = p.toLowerCase();
        t.t[y] && e.config.chart.zoom.enabled && o.push({ el: x, icon: typeof t.t[y] == "string" ? t.t[y] : b, title: t.localeValues[p], class: "apexcharts-".concat(y, "-icon") });
      };
      n("zoomIn", this.elZoomIn, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`), n("zoomOut", this.elZoomOut, `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
`);
      var c = function(p) {
        t.t[p] && e.config.chart[p].enabled && o.push({ el: p === "zoom" ? t.elZoom : t.elSelection, icon: typeof t.t[p] == "string" ? t.t[p] : p === "zoom" ? `<svg xmlns="http://www.w3.org/2000/svg" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    <path d="M0 0h24v24H0V0z" fill="none"/>
    <path d="M12 10h-2v2H9v-2H7V9h2V7h1v2h2v1z"/>
</svg>` : `<svg fill="#6E8192" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 0h24v24H0z" fill="none"/>
    <path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2z"/>
</svg>`, title: t.localeValues[p === "zoom" ? "selectionZoom" : "selection"], class: e.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-".concat(p, "-icon") });
      };
      c("zoom"), c("selection"), this.t.pan && e.config.chart.zoom.enabled && o.push({ el: this.elPan, icon: typeof this.t.pan == "string" ? this.t.pan : `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000" height="24" viewBox="0 0 24 24" width="24">
    <defs>
        <path d="M0 0h24v24H0z" id="a"/>
    </defs>
    <clipPath id="b">
        <use overflow="visible" xlink:href="#a"/>
    </clipPath>
    <path clip-path="url(#b)" d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"/>
</svg>`, title: this.localeValues.pan, class: e.globals.isTouchDevice ? "apexcharts-element-hidden" : "apexcharts-pan-icon" }), n("reset", this.elZoomReset, `<svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`), this.t.download && o.push({ el: this.elMenuIcon, icon: typeof this.t.download == "string" ? this.t.download : '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"/><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>', title: this.localeValues.menu, class: "apexcharts-menu-icon" });
      for (var d = 0; d < this.elCustomIcons.length; d++)
        o.push({ el: this.elCustomIcons[d], icon: this.t.customIcons[d].icon, title: this.t.customIcons[d].title, index: this.t.customIcons[d].index, class: "apexcharts-toolbar-custom-icon " + this.t.customIcons[d].class });
      o.forEach(function(p, x) {
        p.index && F.moveIndexInArray(o, x, p.index);
      });
      for (var g = 0; g < o.length; g++)
        B.setAttrs(o[g].el, { class: o[g].class, title: o[g].title }), o[g].el.innerHTML = o[g].icon, s.appendChild(o[g].el);
      this._createHamburgerMenu(s), e.globals.zoomEnabled ? this.elZoom.classList.add(this.selectedClass) : e.globals.panEnabled ? this.elPan.classList.add(this.selectedClass) : e.globals.selectionEnabled && this.elSelection.classList.add(this.selectedClass), this.addToolbarEventListeners();
    } }, { key: "_createHamburgerMenu", value: function(t) {
      this.elMenuItems = [], t.appendChild(this.elMenu), B.setAttrs(this.elMenu, { class: "apexcharts-menu" });
      for (var e = [{ name: "exportSVG", title: this.localeValues.exportToSVG }, { name: "exportPNG", title: this.localeValues.exportToPNG }, { name: "exportCSV", title: this.localeValues.exportToCSV }], i = 0; i < e.length; i++)
        this.elMenuItems.push(document.createElement("div")), this.elMenuItems[i].innerHTML = e[i].title, B.setAttrs(this.elMenuItems[i], { class: "apexcharts-menu-item ".concat(e[i].name), title: e[i].title }), this.elMenu.appendChild(this.elMenuItems[i]);
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
        var i = t === "selection" ? e.ctx.toolbar.elSelection : e.ctx.toolbar.elZoom, s = t === "selection" ? "selectionEnabled" : "zoomEnabled";
        e.w.globals[s] = !e.w.globals[s], i.classList.contains(e.ctx.toolbar.selectedClass) ? i.classList.remove(e.ctx.toolbar.selectedClass) : i.classList.add(e.ctx.toolbar.selectedClass);
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
      var e = (this.minX + this.maxX) / 2, i = (this.minX + e) / 2, s = (this.maxX + e) / 2, r = this._getNewMinXMaxX(i, s);
      t.globals.disableZoomIn || this.zoomUpdateOptions(r.minX, r.maxX);
    } }, { key: "handleZoomOut", value: function() {
      var t = this.w;
      if (t.globals.isRangeBar && (this.minX = t.globals.minY, this.maxX = t.globals.maxY), !(t.config.xaxis.type === "datetime" && new Date(this.minX).getUTCFullYear() < 1e3)) {
        var e = (this.minX + this.maxX) / 2, i = this.minX - (e - this.minX), s = this.maxX - (e - this.maxX), r = this._getNewMinXMaxX(i, s);
        t.globals.disableZoomOut || this.zoomUpdateOptions(r.minX, r.maxX);
      }
    } }, { key: "_getNewMinXMaxX", value: function(t, e) {
      var i = this.w.config.xaxis.convertedCatToNumeric;
      return { minX: i ? Math.floor(t) : t, maxX: i ? Math.floor(e) : e };
    } }, { key: "zoomUpdateOptions", value: function(t, e) {
      var i = this.w;
      if (t !== void 0 || e !== void 0) {
        if (!(i.config.xaxis.convertedCatToNumeric && (t < 1 && (t = 1, e = i.globals.dataPoints), e - t < 2))) {
          var s = { min: t, max: e }, r = this.getBeforeZoomRange(s);
          r && (s = r.xaxis);
          var o = { xaxis: s }, n = F.clone(i.globals.initialConfig.yaxis);
          i.config.chart.zoom.autoScaleYaxis && (n = new Xt(this.ctx).autoScaleY(this.ctx, n, { xaxis: s })), i.config.chart.group || (o.yaxis = n), this.w.globals.zoomed = !0, this.ctx.updateHelpers._updateOptions(o, !1, this.w.config.chart.animations.dynamicAnimation.enabled), this.zoomCallback(s, n);
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
      var e = this.w, i = new nt(this.ctx);
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
          var s = i.config.chart.events.beforeResetZoom(e, i);
          s && e.updateHelpers.revertDefaultAxisMinMax(s);
        }
        typeof i.config.chart.events.zoomed == "function" && e.ctx.toolbar.zoomCallback({ min: i.config.xaxis.min, max: i.config.xaxis.max }), i.globals.zoomed = !1;
        var r = e.ctx.series.emptyCollapsedSeries(F.clone(i.globals.initialSeries));
        e.updateHelpers._updateSeries(r, i.config.chart.animations.dynamicAnimation.enabled);
      });
    } }, { key: "destroy", value: function() {
      this.elZoom = null, this.elZoomIn = null, this.elZoomOut = null, this.elPan = null, this.elSelection = null, this.elZoomReset = null, this.elMenuIcon = null;
    } }]), E;
  }(), Ft = function(E) {
    z(e, Yt);
    var t = $(e);
    function e(i) {
      var s;
      return w(this, e), (s = t.call(this, i)).ctx = i, s.w = i.w, s.dragged = !1, s.graphics = new B(s.ctx), s.eventList = ["mousedown", "mouseleave", "mousemove", "touchstart", "touchmove", "mouseup", "touchend"], s.clientX = 0, s.clientY = 0, s.startX = 0, s.endX = 0, s.dragX = 0, s.startY = 0, s.endY = 0, s.dragY = 0, s.moveDirection = "none", s;
    }
    return _(e, [{ key: "init", value: function(i) {
      var s = this, r = i.xyRatios, o = this.w, n = this;
      this.xyRatios = r, this.zoomRect = this.graphics.drawRect(0, 0, 0, 0), this.selectionRect = this.graphics.drawRect(0, 0, 0, 0), this.gridRect = o.globals.dom.baseEl.querySelector(".apexcharts-grid"), this.zoomRect.node.classList.add("apexcharts-zoom-rect"), this.selectionRect.node.classList.add("apexcharts-selection-rect"), o.globals.dom.elGraphical.add(this.zoomRect), o.globals.dom.elGraphical.add(this.selectionRect), o.config.chart.selection.type === "x" ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, minY: 0, maxX: o.globals.gridWidth, maxY: o.globals.gridHeight }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : o.config.chart.selection.type === "y" ? this.slDraggableRect = this.selectionRect.draggable({ minX: 0, maxX: o.globals.gridWidth }).on("dragmove", this.selectionDragging.bind(this, "dragging")) : this.slDraggableRect = this.selectionRect.draggable().on("dragmove", this.selectionDragging.bind(this, "dragging")), this.preselectedSelection(), this.hoverArea = o.globals.dom.baseEl.querySelector("".concat(o.globals.chartClass, " .apexcharts-svg")), this.hoverArea.classList.add("apexcharts-zoomable"), this.eventList.forEach(function(c) {
        s.hoverArea.addEventListener(c, n.svgMouseEvents.bind(n, r), { capture: !1, passive: !0 });
      });
    } }, { key: "destroy", value: function() {
      this.slDraggableRect && (this.slDraggableRect.draggable(!1), this.slDraggableRect.off(), this.selectionRect.off()), this.selectionRect = null, this.zoomRect = null, this.gridRect = null;
    } }, { key: "svgMouseEvents", value: function(i, s) {
      var r = this.w, o = this, n = this.ctx.toolbar, c = r.globals.zoomEnabled ? r.config.chart.zoom.type : r.config.chart.selection.type, d = r.config.chart.toolbar.autoSelected;
      if (s.shiftKey ? (this.shiftWasPressed = !0, n.enableZoomPanFromToolbar(d === "pan" ? "zoom" : "pan")) : this.shiftWasPressed && (n.enableZoomPanFromToolbar(d), this.shiftWasPressed = !1), s.target) {
        var g, p = s.target.classList;
        if (s.target.parentNode && s.target.parentNode !== null && (g = s.target.parentNode.classList), !(p.contains("apexcharts-selection-rect") || p.contains("apexcharts-legend-marker") || p.contains("apexcharts-legend-text") || g && g.contains("apexcharts-toolbar"))) {
          if (o.clientX = s.type === "touchmove" || s.type === "touchstart" ? s.touches[0].clientX : s.type === "touchend" ? s.changedTouches[0].clientX : s.clientX, o.clientY = s.type === "touchmove" || s.type === "touchstart" ? s.touches[0].clientY : s.type === "touchend" ? s.changedTouches[0].clientY : s.clientY, s.type === "mousedown" && s.which === 1) {
            var x = o.gridRect.getBoundingClientRect();
            o.startX = o.clientX - x.left, o.startY = o.clientY - x.top, o.dragged = !1, o.w.globals.mousedown = !0;
          }
          if ((s.type === "mousemove" && s.which === 1 || s.type === "touchmove") && (o.dragged = !0, r.globals.panEnabled ? (r.globals.selection = null, o.w.globals.mousedown && o.panDragging({ context: o, zoomtype: c, xyRatios: i })) : (o.w.globals.mousedown && r.globals.zoomEnabled || o.w.globals.mousedown && r.globals.selectionEnabled) && (o.selection = o.selectionDrawing({ context: o, zoomtype: c }))), s.type === "mouseup" || s.type === "touchend" || s.type === "mouseleave") {
            var b = o.gridRect.getBoundingClientRect();
            o.w.globals.mousedown && (o.endX = o.clientX - b.left, o.endY = o.clientY - b.top, o.dragX = Math.abs(o.endX - o.startX), o.dragY = Math.abs(o.endY - o.startY), (r.globals.zoomEnabled || r.globals.selectionEnabled) && o.selectionDrawn({ context: o, zoomtype: c }), r.globals.panEnabled && r.config.xaxis.convertedCatToNumeric && o.delayedPanScrolled()), r.globals.zoomEnabled && o.hideSelectionRect(this.selectionRect), o.dragged = !1, o.w.globals.mousedown = !1;
          }
          this.makeSelectionRectDraggable();
        }
      }
    } }, { key: "makeSelectionRectDraggable", value: function() {
      var i = this.w;
      if (this.selectionRect) {
        var s = this.selectionRect.node.getBoundingClientRect();
        s.width > 0 && s.height > 0 && this.slDraggableRect.selectize({ points: "l, r", pointSize: 8, pointType: "rect" }).resize({ constraint: { minX: 0, minY: 0, maxX: i.globals.gridWidth, maxY: i.globals.gridHeight } }).on("resizing", this.selectionDragging.bind(this, "resizing"));
      }
    } }, { key: "preselectedSelection", value: function() {
      var i = this.w, s = this.xyRatios;
      if (!i.globals.zoomEnabled) {
        if (i.globals.selection !== void 0 && i.globals.selection !== null)
          this.drawSelectionRect(i.globals.selection);
        else if (i.config.chart.selection.xaxis.min !== void 0 && i.config.chart.selection.xaxis.max !== void 0) {
          var r = (i.config.chart.selection.xaxis.min - i.globals.minX) / s.xRatio, o = i.globals.gridWidth - (i.globals.maxX - i.config.chart.selection.xaxis.max) / s.xRatio - r;
          i.globals.isRangeBar && (r = (i.config.chart.selection.xaxis.min - i.globals.yAxisScale[0].niceMin) / s.invertedYRatio, o = (i.config.chart.selection.xaxis.max - i.config.chart.selection.xaxis.min) / s.invertedYRatio);
          var n = { x: r, y: 0, width: o, height: i.globals.gridHeight, translateX: 0, translateY: 0, selectionEnabled: !0 };
          this.drawSelectionRect(n), this.makeSelectionRectDraggable(), typeof i.config.chart.events.selection == "function" && i.config.chart.events.selection(this.ctx, { xaxis: { min: i.config.chart.selection.xaxis.min, max: i.config.chart.selection.xaxis.max }, yaxis: {} });
        }
      }
    } }, { key: "drawSelectionRect", value: function(i) {
      var s = i.x, r = i.y, o = i.width, n = i.height, c = i.translateX, d = c === void 0 ? 0 : c, g = i.translateY, p = g === void 0 ? 0 : g, x = this.w, b = this.zoomRect, y = this.selectionRect;
      if (this.dragged || x.globals.selection !== null) {
        var A = { transform: "translate(" + d + ", " + p + ")" };
        x.globals.zoomEnabled && this.dragged && (o < 0 && (o = 1), b.attr({ x: s, y: r, width: o, height: n, fill: x.config.chart.zoom.zoomedArea.fill.color, "fill-opacity": x.config.chart.zoom.zoomedArea.fill.opacity, stroke: x.config.chart.zoom.zoomedArea.stroke.color, "stroke-width": x.config.chart.zoom.zoomedArea.stroke.width, "stroke-opacity": x.config.chart.zoom.zoomedArea.stroke.opacity }), B.setAttrs(b.node, A)), x.globals.selectionEnabled && (y.attr({ x: s, y: r, width: o > 0 ? o : 0, height: n > 0 ? n : 0, fill: x.config.chart.selection.fill.color, "fill-opacity": x.config.chart.selection.fill.opacity, stroke: x.config.chart.selection.stroke.color, "stroke-width": x.config.chart.selection.stroke.width, "stroke-dasharray": x.config.chart.selection.stroke.dashArray, "stroke-opacity": x.config.chart.selection.stroke.opacity }), B.setAttrs(y.node, A));
      }
    } }, { key: "hideSelectionRect", value: function(i) {
      i && i.attr({ x: 0, y: 0, width: 0, height: 0 });
    } }, { key: "selectionDrawing", value: function(i) {
      var s = i.context, r = i.zoomtype, o = this.w, n = s, c = this.gridRect.getBoundingClientRect(), d = n.startX - 1, g = n.startY, p = !1, x = !1, b = n.clientX - c.left - d, y = n.clientY - c.top - g, A = {};
      return Math.abs(b + d) > o.globals.gridWidth ? b = o.globals.gridWidth - d : n.clientX - c.left < 0 && (b = d), d > n.clientX - c.left && (p = !0, b = Math.abs(b)), g > n.clientY - c.top && (x = !0, y = Math.abs(y)), A = r === "x" ? { x: p ? d - b : d, y: 0, width: b, height: o.globals.gridHeight } : r === "y" ? { x: 0, y: x ? g - y : g, width: o.globals.gridWidth, height: y } : { x: p ? d - b : d, y: x ? g - y : g, width: b, height: y }, n.drawSelectionRect(A), n.selectionDragging("resizing"), A;
    } }, { key: "selectionDragging", value: function(i, s) {
      var r = this, o = this.w, n = this.xyRatios, c = this.selectionRect, d = 0;
      i === "resizing" && (d = 30);
      var g = function(x) {
        return parseFloat(c.node.getAttribute(x));
      }, p = { x: g("x"), y: g("y"), width: g("width"), height: g("height") };
      o.globals.selection = p, typeof o.config.chart.events.selection == "function" && o.globals.selectionEnabled && (clearTimeout(this.w.globals.selectionResizeTimer), this.w.globals.selectionResizeTimer = window.setTimeout(function() {
        var x, b, y, A, S = r.gridRect.getBoundingClientRect(), N = c.node.getBoundingClientRect();
        o.globals.isRangeBar ? (x = o.globals.yAxisScale[0].niceMin + (N.left - S.left) * n.invertedYRatio, b = o.globals.yAxisScale[0].niceMin + (N.right - S.left) * n.invertedYRatio, y = 0, A = 1) : (x = o.globals.xAxisScale.niceMin + (N.left - S.left) * n.xRatio, b = o.globals.xAxisScale.niceMin + (N.right - S.left) * n.xRatio, y = o.globals.yAxisScale[0].niceMin + (S.bottom - N.bottom) * n.yRatio[0], A = o.globals.yAxisScale[0].niceMax - (N.top - S.top) * n.yRatio[0]);
        var L = { xaxis: { min: x, max: b }, yaxis: { min: y, max: A } };
        o.config.chart.events.selection(r.ctx, L), o.config.chart.brush.enabled && o.config.chart.events.brushScrolled !== void 0 && o.config.chart.events.brushScrolled(r.ctx, L);
      }, d));
    } }, { key: "selectionDrawn", value: function(i) {
      var s = i.context, r = i.zoomtype, o = this.w, n = s, c = this.xyRatios, d = this.ctx.toolbar;
      if (n.startX > n.endX) {
        var g = n.startX;
        n.startX = n.endX, n.endX = g;
      }
      if (n.startY > n.endY) {
        var p = n.startY;
        n.startY = n.endY, n.endY = p;
      }
      var x = void 0, b = void 0;
      o.globals.isRangeBar ? (x = o.globals.yAxisScale[0].niceMin + n.startX * c.invertedYRatio, b = o.globals.yAxisScale[0].niceMin + n.endX * c.invertedYRatio) : (x = o.globals.xAxisScale.niceMin + n.startX * c.xRatio, b = o.globals.xAxisScale.niceMin + n.endX * c.xRatio);
      var y = [], A = [];
      if (o.config.yaxis.forEach(function(O, I) {
        y.push(o.globals.yAxisScale[I].niceMax - c.yRatio[I] * n.startY), A.push(o.globals.yAxisScale[I].niceMax - c.yRatio[I] * n.endY);
      }), n.dragged && (n.dragX > 10 || n.dragY > 10) && x !== b) {
        if (o.globals.zoomEnabled) {
          var S = F.clone(o.globals.initialConfig.yaxis), N = F.clone(o.globals.initialConfig.xaxis);
          if (o.globals.zoomed = !0, o.config.xaxis.convertedCatToNumeric && (x = Math.floor(x), b = Math.floor(b), x < 1 && (x = 1, b = o.globals.dataPoints), b - x < 2 && (b = x + 1)), r !== "xy" && r !== "x" || (N = { min: x, max: b }), r !== "xy" && r !== "y" || S.forEach(function(O, I) {
            S[I].min = A[I], S[I].max = y[I];
          }), o.config.chart.zoom.autoScaleYaxis) {
            var L = new Xt(n.ctx);
            S = L.autoScaleY(n.ctx, S, { xaxis: N });
          }
          if (d) {
            var h = d.getBeforeZoomRange(N, S);
            h && (N = h.xaxis ? h.xaxis : N, S = h.yaxis ? h.yaxis : S);
          }
          var m = { xaxis: N };
          o.config.chart.group || (m.yaxis = S), n.ctx.updateHelpers._updateOptions(m, !1, n.w.config.chart.animations.dynamicAnimation.enabled), typeof o.config.chart.events.zoomed == "function" && d.zoomCallback(N, S);
        } else if (o.globals.selectionEnabled) {
          var k, C = null;
          k = { min: x, max: b }, r !== "xy" && r !== "y" || (C = F.clone(o.config.yaxis)).forEach(function(O, I) {
            C[I].min = A[I], C[I].max = y[I];
          }), o.globals.selection = n.selection, typeof o.config.chart.events.selection == "function" && o.config.chart.events.selection(n.ctx, { xaxis: k, yaxis: C });
        }
      }
    } }, { key: "panDragging", value: function(i) {
      var s = i.context, r = this.w, o = s;
      if (r.globals.lastClientPosition.x !== void 0) {
        var n = r.globals.lastClientPosition.x - o.clientX, c = r.globals.lastClientPosition.y - o.clientY;
        Math.abs(n) > Math.abs(c) && n > 0 ? this.moveDirection = "left" : Math.abs(n) > Math.abs(c) && n < 0 ? this.moveDirection = "right" : Math.abs(c) > Math.abs(n) && c > 0 ? this.moveDirection = "up" : Math.abs(c) > Math.abs(n) && c < 0 && (this.moveDirection = "down");
      }
      r.globals.lastClientPosition = { x: o.clientX, y: o.clientY };
      var d = r.globals.isRangeBar ? r.globals.minY : r.globals.minX, g = r.globals.isRangeBar ? r.globals.maxY : r.globals.maxX;
      r.config.xaxis.convertedCatToNumeric || o.panScrolled(d, g);
    } }, { key: "delayedPanScrolled", value: function() {
      var i = this.w, s = i.globals.minX, r = i.globals.maxX, o = (i.globals.maxX - i.globals.minX) / 2;
      this.moveDirection === "left" ? (s = i.globals.minX + o, r = i.globals.maxX + o) : this.moveDirection === "right" && (s = i.globals.minX - o, r = i.globals.maxX - o), s = Math.floor(s), r = Math.floor(r), this.updateScrolledChart({ xaxis: { min: s, max: r } }, s, r);
    } }, { key: "panScrolled", value: function(i, s) {
      var r = this.w, o = this.xyRatios, n = F.clone(r.globals.initialConfig.yaxis), c = o.xRatio, d = r.globals.minX, g = r.globals.maxX;
      r.globals.isRangeBar && (c = o.invertedYRatio, d = r.globals.minY, g = r.globals.maxY), this.moveDirection === "left" ? (i = d + r.globals.gridWidth / 15 * c, s = g + r.globals.gridWidth / 15 * c) : this.moveDirection === "right" && (i = d - r.globals.gridWidth / 15 * c, s = g - r.globals.gridWidth / 15 * c), r.globals.isRangeBar || (i < r.globals.initialMinX || s > r.globals.initialMaxX) && (i = d, s = g);
      var p = { min: i, max: s };
      r.config.chart.zoom.autoScaleYaxis && (n = new Xt(this.ctx).autoScaleY(this.ctx, n, { xaxis: p }));
      var x = { xaxis: { min: i, max: s } };
      r.config.chart.group || (x.yaxis = n), this.updateScrolledChart(x, i, s);
    } }, { key: "updateScrolledChart", value: function(i, s, r) {
      var o = this.w;
      this.ctx.updateHelpers._updateOptions(i, !1, !1), typeof o.config.chart.events.scrolled == "function" && o.config.chart.events.scrolled(this.ctx, { xaxis: { min: s, max: r } });
    } }]), e;
  }(), te = function() {
    function E(t) {
      w(this, E), this.w = t.w, this.ttCtx = t, this.ctx = t.ctx;
    }
    return _(E, [{ key: "getNearestValues", value: function(t) {
      var e = t.hoverArea, i = t.elGrid, s = t.clientX, r = t.clientY, o = this.w, n = i.getBoundingClientRect(), c = n.width, d = n.height, g = c / (o.globals.dataPoints - 1), p = d / o.globals.dataPoints, x = this.hasBars();
      !o.globals.comboCharts && !x || o.config.xaxis.convertedCatToNumeric || (g = c / o.globals.dataPoints);
      var b = s - n.left - o.globals.barPadForNumericAxis, y = r - n.top;
      b < 0 || y < 0 || b > c || y > d ? (e.classList.remove("hovering-zoom"), e.classList.remove("hovering-pan")) : o.globals.zoomEnabled ? (e.classList.remove("hovering-pan"), e.classList.add("hovering-zoom")) : o.globals.panEnabled && (e.classList.remove("hovering-zoom"), e.classList.add("hovering-pan"));
      var A = Math.round(b / g), S = Math.floor(y / p);
      x && !o.config.xaxis.convertedCatToNumeric && (A = Math.ceil(b / g), A -= 1);
      var N = null, L = null, h = o.globals.seriesXvalues.map(function(I) {
        return I.filter(function(X) {
          return F.isNumber(X);
        });
      }), m = o.globals.seriesYvalues.map(function(I) {
        return I.filter(function(X) {
          return F.isNumber(X);
        });
      });
      if (o.globals.isXNumeric) {
        var k = this.ttCtx.getElGrid().getBoundingClientRect(), C = b * (k.width / c), O = y * (k.height / d);
        N = (L = this.closestInMultiArray(C, O, h, m)).index, A = L.j, N !== null && (h = o.globals.seriesXvalues[N], A = (L = this.closestInArray(C, h)).index);
      }
      return o.globals.capturedSeriesIndex = N === null ? -1 : N, (!A || A < 1) && (A = 0), o.globals.isBarHorizontal ? o.globals.capturedDataPointIndex = S : o.globals.capturedDataPointIndex = A, { capturedSeries: N, j: o.globals.isBarHorizontal ? S : A, hoverX: b, hoverY: y };
    } }, { key: "closestInMultiArray", value: function(t, e, i, s) {
      var r = this.w, o = 0, n = null, c = -1;
      r.globals.series.length > 1 ? o = this.getFirstActiveXArray(i) : n = 0;
      var d = i[o][0], g = Math.abs(t - d);
      if (i.forEach(function(b) {
        b.forEach(function(y, A) {
          var S = Math.abs(t - y);
          S <= g && (g = S, c = A);
        });
      }), c !== -1) {
        var p = s[o][c], x = Math.abs(e - p);
        n = o, s.forEach(function(b, y) {
          var A = Math.abs(e - b[c]);
          A <= x && (x = A, n = y);
        });
      }
      return { index: n, j: c };
    } }, { key: "getFirstActiveXArray", value: function(t) {
      for (var e = this.w, i = 0, s = t.map(function(o, n) {
        return o.length > 0 ? n : -1;
      }), r = 0; r < s.length; r++)
        if (s[r] !== -1 && e.globals.collapsedSeriesIndices.indexOf(r) === -1 && e.globals.ancillaryCollapsedSeriesIndices.indexOf(r) === -1) {
          i = s[r];
          break;
        }
      return i;
    } }, { key: "closestInArray", value: function(t, e) {
      for (var i = e[0], s = null, r = Math.abs(t - i), o = 0; o < e.length; o++) {
        var n = Math.abs(t - e[o]);
        n < r && (r = n, s = o);
      }
      return { index: s };
    } }, { key: "isXoverlap", value: function(t) {
      var e = [], i = this.w.globals.seriesX.filter(function(r) {
        return r[0] !== void 0;
      });
      if (i.length > 0)
        for (var s = 0; s < i.length - 1; s++)
          i[s][t] !== void 0 && i[s + 1][t] !== void 0 && i[s][t] !== i[s + 1][t] && e.push("unEqual");
      return e.length === 0;
    } }, { key: "isInitialSeriesSameLen", value: function() {
      for (var t = !0, e = this.w.globals.initialSeries, i = 0; i < e.length - 1; i++)
        if (e[i].data.length !== e[i + 1].data.length) {
          t = !1;
          break;
        }
      return t;
    } }, { key: "getBarsHeight", value: function(t) {
      return lt(t).reduce(function(e, i) {
        return e + i.getBBox().height;
      }, 0);
    } }, { key: "getElMarkers", value: function(t) {
      return typeof t == "number" ? this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-series-markers-wrap > *")) : this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap > *");
    } }, { key: "getAllMarkers", value: function() {
      var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers-wrap");
      (t = lt(t)).sort(function(i, s) {
        var r = Number(i.getAttribute("data:realIndex")), o = Number(s.getAttribute("data:realIndex"));
        return o < r ? 1 : o > r ? -1 : 0;
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
      for (var s = i.allTooltipSeriesGroups, r = 0; r < s.length; r++)
        t === "enable" ? (s[r].classList.add("apexcharts-active"), s[r].style.display = e.config.tooltip.items.display) : (s[r].classList.remove("apexcharts-active"), s[r].style.display = "none");
    } }]), E;
  }(), ye = function() {
    function E(t) {
      w(this, E), this.w = t.w, this.ctx = t.ctx, this.ttCtx = t, this.tooltipUtil = new te(t);
    }
    return _(E, [{ key: "drawSeriesTexts", value: function(t) {
      var e = t.shared, i = e === void 0 || e, s = t.ttItems, r = t.i, o = r === void 0 ? 0 : r, n = t.j, c = n === void 0 ? null : n, d = t.y1, g = t.y2, p = t.e, x = this.w;
      x.config.tooltip.custom !== void 0 ? this.handleCustomTooltip({ i: o, j: c, y1: d, y2: g, w: x }) : this.toggleActiveInactiveSeries(i);
      var b = this.getValuesToPrint({ i: o, j: c });
      this.printLabels({ i: o, j: c, values: b, ttItems: s, shared: i, e: p });
      var y = this.ttCtx.getElTooltip();
      this.ttCtx.tooltipRect.ttWidth = y.getBoundingClientRect().width, this.ttCtx.tooltipRect.ttHeight = y.getBoundingClientRect().height;
    } }, { key: "printLabels", value: function(t) {
      var e, i = this, s = t.i, r = t.j, o = t.values, n = t.ttItems, c = t.shared, d = t.e, g = this.w, p = [], x = function(k) {
        return g.globals.seriesGoals[k] && g.globals.seriesGoals[k][r] && Array.isArray(g.globals.seriesGoals[k][r]);
      }, b = o.xVal, y = o.zVal, A = o.xAxisTTVal, S = "", N = g.globals.colors[s];
      r !== null && g.config.plotOptions.bar.distributed && (N = g.globals.colors[r]);
      for (var L = function(k, C) {
        var O = i.getFormatters(s);
        S = i.getSeriesName({ fn: O.yLbTitleFormatter, index: s, seriesIndex: s, j: r }), g.config.chart.type === "treemap" && (S = O.yLbTitleFormatter(String(g.config.series[s].data[r].x), { series: g.globals.series, seriesIndex: s, dataPointIndex: r, w: g }));
        var I = g.config.tooltip.inverseOrder ? C : k;
        if (g.globals.axisCharts) {
          var X = function(q) {
            var U, st, dt, bt;
            return g.globals.isRangeData ? O.yLbFormatter((U = g.globals.seriesRangeStart) === null || U === void 0 || (st = U[q]) === null || st === void 0 ? void 0 : st[r], { series: g.globals.seriesRangeStart, seriesIndex: q, dataPointIndex: r, w: g }) + " - " + O.yLbFormatter((dt = g.globals.seriesRangeEnd) === null || dt === void 0 || (bt = dt[q]) === null || bt === void 0 ? void 0 : bt[r], { series: g.globals.seriesRangeEnd, seriesIndex: q, dataPointIndex: r, w: g }) : O.yLbFormatter(g.globals.series[q][r], { series: g.globals.series, seriesIndex: q, dataPointIndex: r, w: g });
          };
          if (c)
            O = i.getFormatters(I), S = i.getSeriesName({ fn: O.yLbTitleFormatter, index: I, seriesIndex: s, j: r }), N = g.globals.colors[I], e = X(I), x(I) && (p = g.globals.seriesGoals[I][r].map(function(q) {
              return { attrs: q, val: O.yLbFormatter(q.value, { seriesIndex: I, dataPointIndex: r, w: g }) };
            }));
          else {
            var Y, W = d == null || (Y = d.target) === null || Y === void 0 ? void 0 : Y.getAttribute("fill");
            W && (N = W.indexOf("url") !== -1 ? document.querySelector(W.substr(4).slice(0, -1)).childNodes[0].getAttribute("stroke") : W), e = X(s), x(s) && Array.isArray(g.globals.seriesGoals[s][r]) && (p = g.globals.seriesGoals[s][r].map(function(q) {
              return { attrs: q, val: O.yLbFormatter(q.value, { seriesIndex: s, dataPointIndex: r, w: g }) };
            }));
          }
        }
        r === null && (e = O.yLbFormatter(g.globals.series[s], f(f({}, g), {}, { seriesIndex: s, dataPointIndex: s }))), i.DOMHandling({ i: s, t: I, j: r, ttItems: n, values: { val: e, goalVals: p, xVal: b, xAxisTTVal: A, zVal: y }, seriesName: S, shared: c, pColor: N });
      }, h = 0, m = g.globals.series.length - 1; h < g.globals.series.length; h++, m--)
        L(h, m);
    } }, { key: "getFormatters", value: function(t) {
      var e, i = this.w, s = i.globals.yLabelFormatters[t];
      return i.globals.ttVal !== void 0 ? Array.isArray(i.globals.ttVal) ? (s = i.globals.ttVal[t] && i.globals.ttVal[t].formatter, e = i.globals.ttVal[t] && i.globals.ttVal[t].title && i.globals.ttVal[t].title.formatter) : (s = i.globals.ttVal.formatter, typeof i.globals.ttVal.title.formatter == "function" && (e = i.globals.ttVal.title.formatter)) : e = i.config.tooltip.y.title.formatter, typeof s != "function" && (s = i.globals.yLabelFormatters[0] ? i.globals.yLabelFormatters[0] : function(r) {
        return r;
      }), typeof e != "function" && (e = function(r) {
        return r;
      }), { yLbFormatter: s, yLbTitleFormatter: e };
    } }, { key: "getSeriesName", value: function(t) {
      var e = t.fn, i = t.index, s = t.seriesIndex, r = t.j, o = this.w;
      return e(String(o.globals.seriesNames[i]), { series: o.globals.series, seriesIndex: s, dataPointIndex: r, w: o });
    } }, { key: "DOMHandling", value: function(t) {
      t.i;
      var e = t.t, i = t.j, s = t.ttItems, r = t.values, o = t.seriesName, n = t.shared, c = t.pColor, d = this.w, g = this.ttCtx, p = r.val, x = r.goalVals, b = r.xVal, y = r.xAxisTTVal, A = r.zVal, S = null;
      S = s[e].children, d.config.tooltip.fillSeriesColor && (s[e].style.backgroundColor = c, S[0].style.display = "none"), g.showTooltipTitle && (g.tooltipTitle === null && (g.tooltipTitle = d.globals.dom.baseEl.querySelector(".apexcharts-tooltip-title")), g.tooltipTitle.innerHTML = b), g.isXAxisTooltipEnabled && (g.xaxisTooltipText.innerHTML = y !== "" ? y : b);
      var N = s[e].querySelector(".apexcharts-tooltip-text-y-label");
      N && (N.innerHTML = o || "");
      var L = s[e].querySelector(".apexcharts-tooltip-text-y-value");
      L && (L.innerHTML = p !== void 0 ? p : ""), S[0] && S[0].classList.contains("apexcharts-tooltip-marker") && (d.config.tooltip.marker.fillColors && Array.isArray(d.config.tooltip.marker.fillColors) && (c = d.config.tooltip.marker.fillColors[e]), S[0].style.backgroundColor = c), d.config.tooltip.marker.show || (S[0].style.display = "none");
      var h = s[e].querySelector(".apexcharts-tooltip-text-goals-label"), m = s[e].querySelector(".apexcharts-tooltip-text-goals-value");
      if (x.length && d.globals.seriesGoals[e]) {
        var k = function() {
          var I = "<div >", X = "<div>";
          x.forEach(function(Y, W) {
            I += ' <div style="display: flex"><span class="apexcharts-tooltip-marker" style="background-color: '.concat(Y.attrs.strokeColor, '; height: 3px; border-radius: 0; top: 5px;"></span> ').concat(Y.attrs.name, "</div>"), X += "<div>".concat(Y.val, "</div>");
          }), h.innerHTML = I + "</div>", m.innerHTML = X + "</div>";
        };
        n ? d.globals.seriesGoals[e][i] && Array.isArray(d.globals.seriesGoals[e][i]) ? k() : (h.innerHTML = "", m.innerHTML = "") : k();
      } else
        h.innerHTML = "", m.innerHTML = "";
      if (A !== null && (s[e].querySelector(".apexcharts-tooltip-text-z-label").innerHTML = d.config.tooltip.z.title, s[e].querySelector(".apexcharts-tooltip-text-z-value").innerHTML = A !== void 0 ? A : ""), n && S[0]) {
        if (d.config.tooltip.hideEmptySeries) {
          var C = s[e].querySelector(".apexcharts-tooltip-marker"), O = s[e].querySelector(".apexcharts-tooltip-text");
          parseFloat(p) == 0 ? (C.style.display = "none", O.style.display = "none") : (C.style.display = "block", O.style.display = "block");
        }
        p == null || d.globals.ancillaryCollapsedSeriesIndices.indexOf(e) > -1 || d.globals.collapsedSeriesIndices.indexOf(e) > -1 ? S[0].parentNode.style.display = "none" : S[0].parentNode.style.display = d.config.tooltip.items.display;
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
      var e = t.i, i = t.j, s = this.w, r = this.ctx.series.filteredSeriesX(), o = "", n = "", c = null, d = null, g = { series: s.globals.series, seriesIndex: e, dataPointIndex: i, w: s }, p = s.globals.ttZFormatter;
      i === null ? d = s.globals.series[e] : s.globals.isXNumeric && s.config.chart.type !== "treemap" ? (o = r[e][i], r[e].length === 0 && (o = r[this.tooltipUtil.getFirstActiveXArray(r)][i])) : o = s.globals.labels[i] !== void 0 ? s.globals.labels[i] : "";
      var x = o;
      return s.globals.isXNumeric && s.config.xaxis.type === "datetime" ? o = new qt(this.ctx).xLabelFormat(s.globals.ttKeyFormatter, x, x, { i: void 0, dateFormatter: new Mt(this.ctx).formatDate, w: this.w }) : o = s.globals.isBarHorizontal ? s.globals.yLabelFormatters[0](x, g) : s.globals.xLabelFormatter(x, g), s.config.tooltip.x.formatter !== void 0 && (o = s.globals.ttKeyFormatter(x, g)), s.globals.seriesZ.length > 0 && s.globals.seriesZ[e].length > 0 && (c = p(s.globals.seriesZ[e][i], s)), n = typeof s.config.xaxis.tooltip.formatter == "function" ? s.globals.xaxisTooltipFormatter(x, g) : o, { val: Array.isArray(d) ? d.join(" ") : d, xVal: Array.isArray(o) ? o.join(" ") : o, xAxisTTVal: Array.isArray(n) ? n.join(" ") : n, zVal: c };
    } }, { key: "handleCustomTooltip", value: function(t) {
      var e = t.i, i = t.j, s = t.y1, r = t.y2, o = t.w, n = this.ttCtx.getElTooltip(), c = o.config.tooltip.custom;
      Array.isArray(c) && c[e] && (c = c[e]), n.innerHTML = c({ ctx: this.ctx, series: o.globals.series, seriesIndex: e, dataPointIndex: i, y1: s, y2: r, w: o });
    } }]), E;
  }(), Be = function() {
    function E(t) {
      w(this, E), this.ttCtx = t, this.ctx = t.ctx, this.w = t.w;
    }
    return _(E, [{ key: "moveXCrosshairs", value: function(t) {
      var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null, i = this.ttCtx, s = this.w, r = i.getElXCrosshairs(), o = t - i.xcrosshairsWidth / 2, n = s.globals.labels.slice().length;
      if (e !== null && (o = s.globals.gridWidth / n * e), r === null || s.globals.isBarHorizontal || (r.setAttribute("x", o), r.setAttribute("x1", o), r.setAttribute("x2", o), r.setAttribute("y2", s.globals.gridHeight), r.classList.add("apexcharts-active")), o < 0 && (o = 0), o > s.globals.gridWidth && (o = s.globals.gridWidth), i.isXAxisTooltipEnabled) {
        var c = o;
        s.config.xaxis.crosshairs.width !== "tickWidth" && s.config.xaxis.crosshairs.width !== "barWidth" || (c = o + i.xcrosshairsWidth / 2), this.moveXAxisTooltip(c);
      }
    } }, { key: "moveYCrosshairs", value: function(t) {
      var e = this.ttCtx;
      e.ycrosshairs !== null && B.setAttrs(e.ycrosshairs, { y1: t, y2: t }), e.ycrosshairsHidden !== null && B.setAttrs(e.ycrosshairsHidden, { y1: t, y2: t });
    } }, { key: "moveXAxisTooltip", value: function(t) {
      var e = this.w, i = this.ttCtx;
      if (i.xaxisTooltip !== null && i.xcrosshairsWidth !== 0) {
        i.xaxisTooltip.classList.add("apexcharts-active");
        var s = i.xaxisOffY + e.config.xaxis.tooltip.offsetY + e.globals.translateY + 1 + e.config.xaxis.offsetY;
        if (t -= i.xaxisTooltip.getBoundingClientRect().width / 2, !isNaN(t)) {
          t += e.globals.translateX;
          var r;
          r = new B(this.ctx).getTextRects(i.xaxisTooltipText.innerHTML), i.xaxisTooltipText.style.minWidth = r.width + "px", i.xaxisTooltip.style.left = t + "px", i.xaxisTooltip.style.top = s + "px";
        }
      }
    } }, { key: "moveYAxisTooltip", value: function(t) {
      var e = this.w, i = this.ttCtx;
      i.yaxisTTEls === null && (i.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
      var s = parseInt(i.ycrosshairsHidden.getAttribute("y1"), 10), r = e.globals.translateY + s, o = i.yaxisTTEls[t].getBoundingClientRect().height, n = e.globals.translateYAxisX[t] - 2;
      e.config.yaxis[t].opposite && (n -= 26), r -= o / 2, e.globals.ignoreYAxisIndexes.indexOf(t) === -1 ? (i.yaxisTTEls[t].classList.add("apexcharts-active"), i.yaxisTTEls[t].style.top = r + "px", i.yaxisTTEls[t].style.left = n + e.config.yaxis[t].tooltip.offsetX + "px") : i.yaxisTTEls[t].classList.remove("apexcharts-active");
    } }, { key: "moveTooltip", value: function(t, e) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, s = this.w, r = this.ttCtx, o = r.getElTooltip(), n = r.tooltipRect, c = i !== null ? parseFloat(i) : 1, d = parseFloat(t) + c + 5, g = parseFloat(e) + c / 2;
      if (d > s.globals.gridWidth / 2 && (d = d - n.ttWidth - c - 10), d > s.globals.gridWidth - n.ttWidth - 10 && (d = s.globals.gridWidth - n.ttWidth), d < -20 && (d = -20), s.config.tooltip.followCursor) {
        var p = r.getElGrid().getBoundingClientRect();
        (d = r.e.clientX - p.left) > s.globals.gridWidth / 2 && (d -= r.tooltipRect.ttWidth), (g = r.e.clientY + s.globals.translateY - p.top) > s.globals.gridHeight / 2 && (g -= r.tooltipRect.ttHeight);
      } else
        s.globals.isBarHorizontal || n.ttHeight / 2 + g > s.globals.gridHeight && (g = s.globals.gridHeight - n.ttHeight + s.globals.translateY);
      isNaN(d) || (d += s.globals.translateX, o.style.left = d + "px", o.style.top = g + "px");
    } }, { key: "moveMarkers", value: function(t, e) {
      var i = this.w, s = this.ttCtx;
      if (i.globals.markers.size[t] > 0)
        for (var r = i.globals.dom.baseEl.querySelectorAll(" .apexcharts-series[data\\:realIndex='".concat(t, "'] .apexcharts-marker")), o = 0; o < r.length; o++)
          parseInt(r[o].getAttribute("rel"), 10) === e && (s.marker.resetPointsSize(), s.marker.enlargeCurrentPoint(e, r[o]));
      else
        s.marker.resetPointsSize(), this.moveDynamicPointOnHover(e, t);
    } }, { key: "moveDynamicPointOnHover", value: function(t, e) {
      var i, s, r = this.w, o = this.ttCtx, n = r.globals.pointsArray, c = o.tooltipUtil.getHoverMarkerSize(e), d = r.config.series[e].type;
      if (!d || d !== "column" && d !== "candlestick" && d !== "boxPlot") {
        i = n[e][t][0], s = n[e][t][1] ? n[e][t][1] : 0;
        var g = r.globals.dom.baseEl.querySelector(".apexcharts-series[data\\:realIndex='".concat(e, "'] .apexcharts-series-markers circle"));
        g && s < r.globals.gridHeight && s > 0 && (g.setAttribute("r", c), g.setAttribute("cx", i), g.setAttribute("cy", s)), this.moveXCrosshairs(i), o.fixedTooltip || this.moveTooltip(i, s, c);
      }
    } }, { key: "moveDynamicPointsOnHover", value: function(t) {
      var e, i = this.ttCtx, s = i.w, r = 0, o = 0, n = s.globals.pointsArray;
      e = new Qt(this.ctx).getActiveConfigSeriesIndex("asc", ["line", "area", "scatter", "bubble"]);
      var c = i.tooltipUtil.getHoverMarkerSize(e);
      n[e] && (r = n[e][t][0], o = n[e][t][1]);
      var d = i.tooltipUtil.getAllMarkers();
      if (d !== null)
        for (var g = 0; g < s.globals.series.length; g++) {
          var p = n[g];
          if (s.globals.comboCharts && p === void 0 && d.splice(g, 0, null), p && p.length) {
            var x = n[g][t][1], b = void 0;
            if (d[g].setAttribute("cx", r), s.config.chart.type === "rangeArea" && !s.globals.comboCharts) {
              var y = t + s.globals.series[g].length;
              b = n[g][y][1], x -= Math.abs(x - b) / 2;
            }
            x !== null && !isNaN(x) && x < s.globals.gridHeight + c && x + c > 0 ? (d[g] && d[g].setAttribute("r", c), d[g] && d[g].setAttribute("cy", x)) : d[g] && d[g].setAttribute("r", 0);
          }
        }
      this.moveXCrosshairs(r), i.fixedTooltip || this.moveTooltip(r, o || s.globals.gridHeight, c);
    } }, { key: "moveStickyTooltipOverBars", value: function(t, e) {
      var i = this.w, s = this.ttCtx, r = i.globals.columnSeries ? i.globals.columnSeries.length : i.globals.series.length, o = r >= 2 && r % 2 == 0 ? Math.floor(r / 2) : Math.floor(r / 2) + 1;
      i.globals.isBarHorizontal && (o = new Qt(this.ctx).getActiveConfigSeriesIndex("desc") + 1);
      var n = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[rel='".concat(o, "'] path[j='").concat(t, "'], .apexcharts-candlestick-series .apexcharts-series[rel='").concat(o, "'] path[j='").concat(t, "'], .apexcharts-boxPlot-series .apexcharts-series[rel='").concat(o, "'] path[j='").concat(t, "'], .apexcharts-rangebar-series .apexcharts-series[rel='").concat(o, "'] path[j='").concat(t, "']"));
      n || typeof e != "number" || (n = i.globals.dom.baseEl.querySelector(".apexcharts-bar-series .apexcharts-series[data\\:realIndex='".concat(e, "'] path[j='").concat(t, `'],
        .apexcharts-candlestick-series .apexcharts-series[data\\:realIndex='`).concat(e, "'] path[j='").concat(t, `'],
        .apexcharts-boxPlot-series .apexcharts-series[data\\:realIndex='`).concat(e, "'] path[j='").concat(t, `'],
        .apexcharts-rangebar-series .apexcharts-series[data\\:realIndex='`).concat(e, "'] path[j='").concat(t, "']")));
      var c = n ? parseFloat(n.getAttribute("cx")) : 0, d = n ? parseFloat(n.getAttribute("cy")) : 0, g = n ? parseFloat(n.getAttribute("barWidth")) : 0, p = s.getElGrid().getBoundingClientRect(), x = n && (n.classList.contains("apexcharts-candlestick-area") || n.classList.contains("apexcharts-boxPlot-area"));
      i.globals.isXNumeric ? (n && !x && (c -= r % 2 != 0 ? g / 2 : 0), n && x && i.globals.comboCharts && (c -= g / 2)) : i.globals.isBarHorizontal || (c = s.xAxisTicksPositions[t - 1] + s.dataPointsDividedWidth / 2, isNaN(c) && (c = s.xAxisTicksPositions[t] - s.dataPointsDividedWidth / 2)), i.globals.isBarHorizontal ? d -= s.tooltipRect.ttHeight : i.config.tooltip.followCursor ? d = s.e.clientY - p.top - s.tooltipRect.ttHeight / 2 : d + s.tooltipRect.ttHeight + 15 > i.globals.gridHeight && (d = i.globals.gridHeight), i.globals.isBarHorizontal || this.moveXCrosshairs(c), s.fixedTooltip || this.moveTooltip(c, d || i.globals.gridHeight);
    } }]), E;
  }(), bs = function() {
    function E(t) {
      w(this, E), this.w = t.w, this.ttCtx = t, this.ctx = t.ctx, this.tooltipPosition = new Be(t);
    }
    return _(E, [{ key: "drawDynamicPoints", value: function() {
      var t = this.w, e = new B(this.ctx), i = new oe(this.ctx), s = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
      s = lt(s), t.config.chart.stacked && s.sort(function(p, x) {
        return parseFloat(p.getAttribute("data:realIndex")) - parseFloat(x.getAttribute("data:realIndex"));
      });
      for (var r = 0; r < s.length; r++) {
        var o = s[r].querySelector(".apexcharts-series-markers-wrap");
        if (o !== null) {
          var n = void 0, c = "apexcharts-marker w".concat((Math.random() + 1).toString(36).substring(4));
          t.config.chart.type !== "line" && t.config.chart.type !== "area" || t.globals.comboCharts || t.config.tooltip.intersect || (c += " no-pointer-events");
          var d = i.getMarkerConfig({ cssClass: c, seriesIndex: Number(o.getAttribute("data:realIndex")) });
          (n = e.drawMarker(0, 0, d)).node.setAttribute("default-marker-size", 0);
          var g = document.createElementNS(t.globals.SVGNS, "g");
          g.classList.add("apexcharts-series-markers"), g.appendChild(n.node), o.appendChild(g);
        }
      }
    } }, { key: "enlargeCurrentPoint", value: function(t, e) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null, s = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null, r = this.w;
      r.config.chart.type !== "bubble" && this.newPointSize(t, e);
      var o = e.getAttribute("cx"), n = e.getAttribute("cy");
      if (i !== null && s !== null && (o = i, n = s), this.tooltipPosition.moveXCrosshairs(o), !this.fixedTooltip) {
        if (r.config.chart.type === "radar") {
          var c = this.ttCtx.getElGrid().getBoundingClientRect();
          o = this.ttCtx.e.clientX - c.left;
        }
        this.tooltipPosition.moveTooltip(o, n, r.config.markers.hover.size);
      }
    } }, { key: "enlargePoints", value: function(t) {
      for (var e = this.w, i = this, s = this.ttCtx, r = t, o = e.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), n = e.config.markers.hover.size, c = 0; c < o.length; c++) {
        var d = o[c].getAttribute("rel"), g = o[c].getAttribute("index");
        if (n === void 0 && (n = e.globals.markers.size[g] + e.config.markers.hover.sizeOffset), r === parseInt(d, 10)) {
          i.newPointSize(r, o[c]);
          var p = o[c].getAttribute("cx"), x = o[c].getAttribute("cy");
          i.tooltipPosition.moveXCrosshairs(p), s.fixedTooltip || i.tooltipPosition.moveTooltip(p, x, n);
        } else
          i.oldPointSize(o[c]);
      }
    } }, { key: "newPointSize", value: function(t, e) {
      var i = this.w, s = i.config.markers.hover.size, r = t === 0 ? e.parentNode.firstChild : e.parentNode.lastChild;
      if (r.getAttribute("default-marker-size") !== "0") {
        var o = parseInt(r.getAttribute("index"), 10);
        s === void 0 && (s = i.globals.markers.size[o] + i.config.markers.hover.sizeOffset), s < 0 && (s = 0), r.setAttribute("r", s);
      }
    } }, { key: "oldPointSize", value: function(t) {
      var e = parseFloat(t.getAttribute("default-marker-size"));
      t.setAttribute("r", e);
    } }, { key: "resetPointsSize", value: function() {
      for (var t = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series:not(.apexcharts-series-collapsed) .apexcharts-marker"), e = 0; e < t.length; e++) {
        var i = parseFloat(t[e].getAttribute("default-marker-size"));
        F.isNumber(i) && i >= 0 ? t[e].setAttribute("r", i) : t[e].setAttribute("r", 0);
      }
    } }]), E;
  }(), yi = function() {
    function E(t) {
      w(this, E), this.w = t.w;
      var e = this.w;
      this.ttCtx = t, this.isVerticalGroupedRangeBar = !e.globals.isBarHorizontal && e.config.chart.type === "rangeBar" && e.config.plotOptions.bar.rangeBarGroupRows;
    }
    return _(E, [{ key: "getAttr", value: function(t, e) {
      return parseFloat(t.target.getAttribute(e));
    } }, { key: "handleHeatTreeTooltip", value: function(t) {
      var e = t.e, i = t.opt, s = t.x, r = t.y, o = t.type, n = this.ttCtx, c = this.w;
      if (e.target.classList.contains("apexcharts-".concat(o, "-rect"))) {
        var d = this.getAttr(e, "i"), g = this.getAttr(e, "j"), p = this.getAttr(e, "cx"), x = this.getAttr(e, "cy"), b = this.getAttr(e, "width"), y = this.getAttr(e, "height");
        if (n.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: d, j: g, shared: !1, e }), c.globals.capturedSeriesIndex = d, c.globals.capturedDataPointIndex = g, s = p + n.tooltipRect.ttWidth / 2 + b, r = x + n.tooltipRect.ttHeight / 2 - y / 2, n.tooltipPosition.moveXCrosshairs(p + b / 2), s > c.globals.gridWidth / 2 && (s = p - n.tooltipRect.ttWidth / 2 + b), n.w.config.tooltip.followCursor) {
          var A = c.globals.dom.elWrap.getBoundingClientRect();
          s = c.globals.clientX - A.left - (s > c.globals.gridWidth / 2 ? n.tooltipRect.ttWidth : 0), r = c.globals.clientY - A.top - (r > c.globals.gridHeight / 2 ? n.tooltipRect.ttHeight : 0);
        }
      }
      return { x: s, y: r };
    } }, { key: "handleMarkerTooltip", value: function(t) {
      var e, i, s = t.e, r = t.opt, o = t.x, n = t.y, c = this.w, d = this.ttCtx;
      if (s.target.classList.contains("apexcharts-marker")) {
        var g = parseInt(r.paths.getAttribute("cx"), 10), p = parseInt(r.paths.getAttribute("cy"), 10), x = parseFloat(r.paths.getAttribute("val"));
        if (i = parseInt(r.paths.getAttribute("rel"), 10), e = parseInt(r.paths.parentNode.parentNode.parentNode.getAttribute("rel"), 10) - 1, d.intersect) {
          var b = F.findAncestor(r.paths, "apexcharts-series");
          b && (e = parseInt(b.getAttribute("data:realIndex"), 10));
        }
        if (d.tooltipLabels.drawSeriesTexts({ ttItems: r.ttItems, i: e, j: i, shared: !d.showOnIntersect && c.config.tooltip.shared, e: s }), s.type === "mouseup" && d.markerClick(s, e, i), c.globals.capturedSeriesIndex = e, c.globals.capturedDataPointIndex = i, o = g, n = p + c.globals.translateY - 1.4 * d.tooltipRect.ttHeight, d.w.config.tooltip.followCursor) {
          var y = d.getElGrid().getBoundingClientRect();
          n = d.e.clientY + c.globals.translateY - y.top;
        }
        x < 0 && (n = p), d.marker.enlargeCurrentPoint(i, r.paths, o, n);
      }
      return { x: o, y: n };
    } }, { key: "handleBarTooltip", value: function(t) {
      var e, i, s = t.e, r = t.opt, o = this.w, n = this.ttCtx, c = n.getElTooltip(), d = 0, g = 0, p = 0, x = this.getBarTooltipXY({ e: s, opt: r });
      e = x.i;
      var b = x.barHeight, y = x.j;
      o.globals.capturedSeriesIndex = e, o.globals.capturedDataPointIndex = y, o.globals.isBarHorizontal && n.tooltipUtil.hasBars() || !o.config.tooltip.shared ? (g = x.x, p = x.y, i = Array.isArray(o.config.stroke.width) ? o.config.stroke.width[e] : o.config.stroke.width, d = g) : o.globals.comboCharts || o.config.tooltip.shared || (d /= 2), isNaN(p) && (p = o.globals.svgHeight - n.tooltipRect.ttHeight);
      var A = parseInt(r.paths.parentNode.getAttribute("data:realIndex"), 10), S = o.globals.isMultipleYAxis ? o.config.yaxis[A] && o.config.yaxis[A].reversed : o.config.yaxis[0].reversed;
      if (g + n.tooltipRect.ttWidth > o.globals.gridWidth && !S ? g -= n.tooltipRect.ttWidth : g < 0 && (g = 0), n.w.config.tooltip.followCursor) {
        var N = n.getElGrid().getBoundingClientRect();
        p = n.e.clientY - N.top;
      }
      n.tooltip === null && (n.tooltip = o.globals.dom.baseEl.querySelector(".apexcharts-tooltip")), o.config.tooltip.shared || (o.globals.comboBarCount > 0 ? n.tooltipPosition.moveXCrosshairs(d + i / 2) : n.tooltipPosition.moveXCrosshairs(d)), !n.fixedTooltip && (!o.config.tooltip.shared || o.globals.isBarHorizontal && n.tooltipUtil.hasBars()) && (S && (g -= n.tooltipRect.ttWidth) < 0 && (g = 0), !S || o.globals.isBarHorizontal && n.tooltipUtil.hasBars() || (p = p + b - 2 * (o.globals.series[e][y] < 0 ? b : 0)), p = p + o.globals.translateY - n.tooltipRect.ttHeight / 2, c.style.left = g + o.globals.translateX + "px", c.style.top = p + "px");
    } }, { key: "getBarTooltipXY", value: function(t) {
      var e = this, i = t.e, s = t.opt, r = this.w, o = null, n = this.ttCtx, c = 0, d = 0, g = 0, p = 0, x = 0, b = i.target.classList;
      if (b.contains("apexcharts-bar-area") || b.contains("apexcharts-candlestick-area") || b.contains("apexcharts-boxPlot-area") || b.contains("apexcharts-rangebar-area")) {
        var y = i.target, A = y.getBoundingClientRect(), S = s.elGrid.getBoundingClientRect(), N = A.height;
        x = A.height;
        var L = A.width, h = parseInt(y.getAttribute("cx"), 10), m = parseInt(y.getAttribute("cy"), 10);
        p = parseFloat(y.getAttribute("barWidth"));
        var k = i.type === "touchmove" ? i.touches[0].clientX : i.clientX;
        o = parseInt(y.getAttribute("j"), 10), c = parseInt(y.parentNode.getAttribute("rel"), 10) - 1;
        var C = y.getAttribute("data-range-y1"), O = y.getAttribute("data-range-y2");
        r.globals.comboCharts && (c = parseInt(y.parentNode.getAttribute("data:realIndex"), 10));
        var I = function(Y) {
          return r.globals.isXNumeric ? h - L / 2 : e.isVerticalGroupedRangeBar ? h + L / 2 : h - n.dataPointsDividedWidth + L / 2;
        }, X = function() {
          return m - n.dataPointsDividedHeight + N / 2 - n.tooltipRect.ttHeight / 2;
        };
        n.tooltipLabels.drawSeriesTexts({ ttItems: s.ttItems, i: c, j: o, y1: C ? parseInt(C, 10) : null, y2: O ? parseInt(O, 10) : null, shared: !n.showOnIntersect && r.config.tooltip.shared, e: i }), r.config.tooltip.followCursor ? r.globals.isBarHorizontal ? (d = k - S.left + 15, g = X()) : (d = I(), g = i.clientY - S.top - n.tooltipRect.ttHeight / 2 - 15) : r.globals.isBarHorizontal ? ((d = h) < n.xyRatios.baseLineInvertedY && (d = h - n.tooltipRect.ttWidth), g = X()) : (d = I(), g = m);
      }
      return { x: d, y: g, barHeight: x, barWidth: p, i: c, j: o };
    } }]), E;
  }(), vs = function() {
    function E(t) {
      w(this, E), this.w = t.w, this.ttCtx = t;
    }
    return _(E, [{ key: "drawXaxisTooltip", value: function() {
      var t = this.w, e = this.ttCtx, i = t.config.xaxis.position === "bottom";
      e.xaxisOffY = i ? t.globals.gridHeight + 1 : -t.globals.xAxisHeight - t.config.xaxis.axisTicks.height + 3;
      var s = i ? "apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom" : "apexcharts-xaxistooltip apexcharts-xaxistooltip-top", r = t.globals.dom.elWrap;
      e.isXAxisTooltipEnabled && t.globals.dom.baseEl.querySelector(".apexcharts-xaxistooltip") === null && (e.xaxisTooltip = document.createElement("div"), e.xaxisTooltip.setAttribute("class", s + " apexcharts-theme-" + t.config.tooltip.theme), r.appendChild(e.xaxisTooltip), e.xaxisTooltipText = document.createElement("div"), e.xaxisTooltipText.classList.add("apexcharts-xaxistooltip-text"), e.xaxisTooltipText.style.fontFamily = t.config.xaxis.tooltip.style.fontFamily || t.config.chart.fontFamily, e.xaxisTooltipText.style.fontSize = t.config.xaxis.tooltip.style.fontSize, e.xaxisTooltip.appendChild(e.xaxisTooltipText));
    } }, { key: "drawYaxisTooltip", value: function() {
      for (var t = this.w, e = this.ttCtx, i = function(r) {
        var o = t.config.yaxis[r].opposite || t.config.yaxis[r].crosshairs.opposite;
        e.yaxisOffX = o ? t.globals.gridWidth + 1 : 1;
        var n = "apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(r, o ? " apexcharts-yaxistooltip-right" : " apexcharts-yaxistooltip-left");
        t.globals.yAxisSameScaleIndices.map(function(d, g) {
          d.map(function(p, x) {
            x === r && (n += t.config.yaxis[x].show ? " " : " apexcharts-yaxistooltip-hidden");
          });
        });
        var c = t.globals.dom.elWrap;
        t.globals.dom.baseEl.querySelector(".apexcharts-yaxistooltip apexcharts-yaxistooltip-".concat(r)) === null && (e.yaxisTooltip = document.createElement("div"), e.yaxisTooltip.setAttribute("class", n + " apexcharts-theme-" + t.config.tooltip.theme), c.appendChild(e.yaxisTooltip), r === 0 && (e.yaxisTooltipText = []), e.yaxisTooltipText[r] = document.createElement("div"), e.yaxisTooltipText[r].classList.add("apexcharts-yaxistooltip-text"), e.yaxisTooltip.appendChild(e.yaxisTooltipText[r]));
      }, s = 0; s < t.config.yaxis.length; s++)
        i(s);
    } }, { key: "setXCrosshairWidth", value: function() {
      var t = this.w, e = this.ttCtx, i = e.getElXCrosshairs();
      if (e.xcrosshairsWidth = parseInt(t.config.xaxis.crosshairs.width, 10), t.globals.comboCharts) {
        var s = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (s !== null && t.config.xaxis.crosshairs.width === "barWidth") {
          var r = parseFloat(s.getAttribute("barWidth"));
          e.xcrosshairsWidth = r;
        } else if (t.config.xaxis.crosshairs.width === "tickWidth") {
          var o = t.globals.labels.length;
          e.xcrosshairsWidth = t.globals.gridWidth / o;
        }
      } else if (t.config.xaxis.crosshairs.width === "tickWidth") {
        var n = t.globals.labels.length;
        e.xcrosshairsWidth = t.globals.gridWidth / n;
      } else if (t.config.xaxis.crosshairs.width === "barWidth") {
        var c = t.globals.dom.baseEl.querySelector(".apexcharts-bar-area");
        if (c !== null) {
          var d = parseFloat(c.getAttribute("barWidth"));
          e.xcrosshairsWidth = d;
        } else
          e.xcrosshairsWidth = 1;
      }
      t.globals.isBarHorizontal && (e.xcrosshairsWidth = 0), i !== null && e.xcrosshairsWidth > 0 && i.setAttribute("width", e.xcrosshairsWidth);
    } }, { key: "handleYCrosshair", value: function() {
      var t = this.w, e = this.ttCtx;
      e.ycrosshairs = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs"), e.ycrosshairsHidden = t.globals.dom.baseEl.querySelector(".apexcharts-ycrosshairs-hidden");
    } }, { key: "drawYaxisTooltipText", value: function(t, e, i) {
      var s = this.ttCtx, r = this.w, o = r.globals.yLabelFormatters[t];
      if (s.yaxisTooltips[t]) {
        var n = s.getElGrid().getBoundingClientRect(), c = (e - n.top) * i.yRatio[t], d = r.globals.maxYArr[t] - r.globals.minYArr[t], g = r.globals.minYArr[t] + (d - c);
        s.tooltipPosition.moveYCrosshairs(e - n.top), s.yaxisTooltipText[t].innerHTML = o(g), s.tooltipPosition.moveYAxisTooltip(t);
      }
    } }]), E;
  }(), ne = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
      var e = this.w;
      this.tConfig = e.config.tooltip, this.tooltipUtil = new te(this), this.tooltipLabels = new ye(this), this.tooltipPosition = new Be(this), this.marker = new bs(this), this.intersect = new yi(this), this.axesTooltip = new vs(this), this.showOnIntersect = this.tConfig.intersect, this.showTooltipTitle = this.tConfig.x.show, this.fixedTooltip = this.tConfig.fixed.enabled, this.xaxisTooltip = null, this.yaxisTTEls = null, this.isBarShared = !e.globals.isBarHorizontal && this.tConfig.shared, this.lastHoverTime = Date.now();
    }
    return _(E, [{ key: "getElTooltip", value: function(t) {
      return t || (t = this), t.w.globals.dom.baseEl ? t.w.globals.dom.baseEl.querySelector(".apexcharts-tooltip") : null;
    } }, { key: "getElXCrosshairs", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-xcrosshairs");
    } }, { key: "getElGrid", value: function() {
      return this.w.globals.dom.baseEl.querySelector(".apexcharts-grid");
    } }, { key: "drawTooltip", value: function(t) {
      var e = this.w;
      this.xyRatios = t, this.isXAxisTooltipEnabled = e.config.xaxis.tooltip.enabled && e.globals.axisCharts, this.yaxisTooltips = e.config.yaxis.map(function(o, n) {
        return !!(o.show && o.tooltip.enabled && e.globals.axisCharts);
      }), this.allTooltipSeriesGroups = [], e.globals.axisCharts || (this.showTooltipTitle = !1);
      var i = document.createElement("div");
      if (i.classList.add("apexcharts-tooltip"), e.config.tooltip.cssClass && i.classList.add(e.config.tooltip.cssClass), i.classList.add("apexcharts-theme-".concat(this.tConfig.theme)), e.globals.dom.elWrap.appendChild(i), e.globals.axisCharts) {
        this.axesTooltip.drawXaxisTooltip(), this.axesTooltip.drawYaxisTooltip(), this.axesTooltip.setXCrosshairWidth(), this.axesTooltip.handleYCrosshair();
        var s = new ht(this.ctx);
        this.xAxisTicksPositions = s.getXAxisTicksPositions();
      }
      if (!e.globals.comboCharts && !this.tConfig.intersect && e.config.chart.type !== "rangeBar" || this.tConfig.shared || (this.showOnIntersect = !0), e.config.markers.size !== 0 && e.globals.markers.largestSize !== 0 || this.marker.drawDynamicPoints(this), e.globals.collapsedSeries.length !== e.globals.series.length) {
        this.dataPointsDividedHeight = e.globals.gridHeight / e.globals.dataPoints, this.dataPointsDividedWidth = e.globals.gridWidth / e.globals.dataPoints, this.showTooltipTitle && (this.tooltipTitle = document.createElement("div"), this.tooltipTitle.classList.add("apexcharts-tooltip-title"), this.tooltipTitle.style.fontFamily = this.tConfig.style.fontFamily || e.config.chart.fontFamily, this.tooltipTitle.style.fontSize = this.tConfig.style.fontSize, i.appendChild(this.tooltipTitle));
        var r = e.globals.series.length;
        (e.globals.xyCharts || e.globals.comboCharts) && this.tConfig.shared && (r = this.showOnIntersect ? 1 : e.globals.series.length), this.legendLabels = e.globals.dom.baseEl.querySelectorAll(".apexcharts-legend-text"), this.ttItems = this.createTTElements(r), this.addSVGEvents();
      }
    } }, { key: "createTTElements", value: function(t) {
      for (var e = this, i = this.w, s = [], r = this.getElTooltip(), o = function(c) {
        var d = document.createElement("div");
        d.classList.add("apexcharts-tooltip-series-group"), d.style.order = i.config.tooltip.inverseOrder ? t - c : c + 1, e.tConfig.shared && e.tConfig.enabledOnSeries && Array.isArray(e.tConfig.enabledOnSeries) && e.tConfig.enabledOnSeries.indexOf(c) < 0 && d.classList.add("apexcharts-tooltip-series-group-hidden");
        var g = document.createElement("span");
        g.classList.add("apexcharts-tooltip-marker"), g.style.backgroundColor = i.globals.colors[c], d.appendChild(g);
        var p = document.createElement("div");
        p.classList.add("apexcharts-tooltip-text"), p.style.fontFamily = e.tConfig.style.fontFamily || i.config.chart.fontFamily, p.style.fontSize = e.tConfig.style.fontSize, ["y", "goals", "z"].forEach(function(x) {
          var b = document.createElement("div");
          b.classList.add("apexcharts-tooltip-".concat(x, "-group"));
          var y = document.createElement("span");
          y.classList.add("apexcharts-tooltip-text-".concat(x, "-label")), b.appendChild(y);
          var A = document.createElement("span");
          A.classList.add("apexcharts-tooltip-text-".concat(x, "-value")), b.appendChild(A), p.appendChild(b);
        }), d.appendChild(p), r.appendChild(d), s.push(d);
      }, n = 0; n < t; n++)
        o(n);
      return s;
    } }, { key: "addSVGEvents", value: function() {
      var t = this.w, e = t.config.chart.type, i = this.getElTooltip(), s = !(e !== "bar" && e !== "candlestick" && e !== "boxPlot" && e !== "rangeBar"), r = e === "area" || e === "line" || e === "scatter" || e === "bubble" || e === "radar", o = t.globals.dom.Paper.node, n = this.getElGrid();
      n && (this.seriesBound = n.getBoundingClientRect());
      var c, d = [], g = [], p = { hoverArea: o, elGrid: n, tooltipEl: i, tooltipY: d, tooltipX: g, ttItems: this.ttItems };
      if (t.globals.axisCharts && (r ? c = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series[data\\:longestSeries='true'] .apexcharts-marker") : s ? c = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-bar-area, .apexcharts-series .apexcharts-candlestick-area, .apexcharts-series .apexcharts-boxPlot-area, .apexcharts-series .apexcharts-rangebar-area") : e !== "heatmap" && e !== "treemap" || (c = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series .apexcharts-heatmap, .apexcharts-series .apexcharts-treemap")), c && c.length))
        for (var x = 0; x < c.length; x++)
          d.push(c[x].getAttribute("cy")), g.push(c[x].getAttribute("cx"));
      if (t.globals.xyCharts && !this.showOnIntersect || t.globals.comboCharts && !this.showOnIntersect || s && this.tooltipUtil.hasBars() && this.tConfig.shared)
        this.addPathsEventListeners([o], p);
      else if (s && !t.globals.comboCharts || r && this.showOnIntersect)
        this.addDatapointEventsListeners(p);
      else if (!t.globals.axisCharts || e === "heatmap" || e === "treemap") {
        var b = t.globals.dom.baseEl.querySelectorAll(".apexcharts-series");
        this.addPathsEventListeners(b, p);
      }
      if (this.showOnIntersect) {
        var y = t.globals.dom.baseEl.querySelectorAll(".apexcharts-line-series .apexcharts-marker, .apexcharts-area-series .apexcharts-marker");
        y.length > 0 && this.addPathsEventListeners(y, p), this.tooltipUtil.hasBars() && !this.tConfig.shared && this.addDatapointEventsListeners(p);
      }
    } }, { key: "drawFixedTooltipRect", value: function() {
      var t = this.w, e = this.getElTooltip(), i = e.getBoundingClientRect(), s = i.width + 10, r = i.height + 10, o = this.tConfig.fixed.offsetX, n = this.tConfig.fixed.offsetY, c = this.tConfig.fixed.position.toLowerCase();
      return c.indexOf("right") > -1 && (o = o + t.globals.svgWidth - s + 10), c.indexOf("bottom") > -1 && (n = n + t.globals.svgHeight - r - 10), e.style.left = o + "px", e.style.top = n + "px", { x: o, y: n, ttWidth: s, ttHeight: r };
    } }, { key: "addDatapointEventsListeners", value: function(t) {
      var e = this.w.globals.dom.baseEl.querySelectorAll(".apexcharts-series-markers .apexcharts-marker, .apexcharts-bar-area, .apexcharts-candlestick-area, .apexcharts-boxPlot-area, .apexcharts-rangebar-area");
      this.addPathsEventListeners(e, t);
    } }, { key: "addPathsEventListeners", value: function(t, e) {
      for (var i = this, s = function(o) {
        var n = { paths: t[o], tooltipEl: e.tooltipEl, tooltipY: e.tooltipY, tooltipX: e.tooltipX, elGrid: e.elGrid, hoverArea: e.hoverArea, ttItems: e.ttItems };
        ["mousemove", "mouseup", "touchmove", "mouseout", "touchend"].map(function(c) {
          return t[o].addEventListener(c, i.onSeriesHover.bind(i, n), { capture: !1, passive: !0 });
        });
      }, r = 0; r < t.length; r++)
        s(r);
    } }, { key: "onSeriesHover", value: function(t, e) {
      var i = this, s = Date.now() - this.lastHoverTime;
      s >= 100 ? this.seriesHover(t, e) : (clearTimeout(this.seriesHoverTimeout), this.seriesHoverTimeout = setTimeout(function() {
        i.seriesHover(t, e);
      }, 100 - s));
    } }, { key: "seriesHover", value: function(t, e) {
      var i = this;
      this.lastHoverTime = Date.now();
      var s = [], r = this.w;
      r.config.chart.group && (s = this.ctx.getGroupedCharts()), r.globals.axisCharts && (r.globals.minX === -1 / 0 && r.globals.maxX === 1 / 0 || r.globals.dataPoints === 0) || (s.length ? s.forEach(function(o) {
        var n = i.getElTooltip(o), c = { paths: t.paths, tooltipEl: n, tooltipY: t.tooltipY, tooltipX: t.tooltipX, elGrid: t.elGrid, hoverArea: t.hoverArea, ttItems: o.w.globals.tooltip.ttItems };
        o.w.globals.minX === i.w.globals.minX && o.w.globals.maxX === i.w.globals.maxX && o.w.globals.tooltip.seriesHoverByContext({ chartCtx: o, ttCtx: o.w.globals.tooltip, opt: c, e });
      }) : this.seriesHoverByContext({ chartCtx: this.ctx, ttCtx: this.w.globals.tooltip, opt: t, e }));
    } }, { key: "seriesHoverByContext", value: function(t) {
      var e = t.chartCtx, i = t.ttCtx, s = t.opt, r = t.e, o = e.w, n = this.getElTooltip();
      n && (i.tooltipRect = { x: 0, y: 0, ttWidth: n.getBoundingClientRect().width, ttHeight: n.getBoundingClientRect().height }, i.e = r, i.tooltipUtil.hasBars() && !o.globals.comboCharts && !i.isBarShared && this.tConfig.onDatasetHover.highlightDataSeries && new Qt(e).toggleSeriesOnHover(r, r.target.parentNode), i.fixedTooltip && i.drawFixedTooltipRect(), o.globals.axisCharts ? i.axisChartsTooltips({ e: r, opt: s, tooltipRect: i.tooltipRect }) : i.nonAxisChartsTooltips({ e: r, opt: s, tooltipRect: i.tooltipRect }));
    } }, { key: "axisChartsTooltips", value: function(t) {
      var e, i, s = t.e, r = t.opt, o = this.w, n = r.elGrid.getBoundingClientRect(), c = s.type === "touchmove" ? s.touches[0].clientX : s.clientX, d = s.type === "touchmove" ? s.touches[0].clientY : s.clientY;
      if (this.clientY = d, this.clientX = c, o.globals.capturedSeriesIndex = -1, o.globals.capturedDataPointIndex = -1, d < n.top || d > n.top + n.height)
        this.handleMouseOut(r);
      else {
        if (Array.isArray(this.tConfig.enabledOnSeries) && !o.config.tooltip.shared) {
          var g = parseInt(r.paths.getAttribute("index"), 10);
          if (this.tConfig.enabledOnSeries.indexOf(g) < 0)
            return void this.handleMouseOut(r);
        }
        var p = this.getElTooltip(), x = this.getElXCrosshairs(), b = o.globals.xyCharts || o.config.chart.type === "bar" && !o.globals.isBarHorizontal && this.tooltipUtil.hasBars() && this.tConfig.shared || o.globals.comboCharts && this.tooltipUtil.hasBars();
        if (s.type === "mousemove" || s.type === "touchmove" || s.type === "mouseup") {
          if (o.globals.collapsedSeries.length + o.globals.ancillaryCollapsedSeries.length === o.globals.series.length)
            return;
          x !== null && x.classList.add("apexcharts-active");
          var y = this.yaxisTooltips.filter(function(N) {
            return N === !0;
          });
          if (this.ycrosshairs !== null && y.length && this.ycrosshairs.classList.add("apexcharts-active"), b && !this.showOnIntersect)
            this.handleStickyTooltip(s, c, d, r);
          else if (o.config.chart.type === "heatmap" || o.config.chart.type === "treemap") {
            var A = this.intersect.handleHeatTreeTooltip({ e: s, opt: r, x: e, y: i, type: o.config.chart.type });
            e = A.x, i = A.y, p.style.left = e + "px", p.style.top = i + "px";
          } else
            this.tooltipUtil.hasBars() && this.intersect.handleBarTooltip({ e: s, opt: r }), this.tooltipUtil.hasMarkers() && this.intersect.handleMarkerTooltip({ e: s, opt: r, x: e, y: i });
          if (this.yaxisTooltips.length)
            for (var S = 0; S < o.config.yaxis.length; S++)
              this.axesTooltip.drawYaxisTooltipText(S, d, this.xyRatios);
          r.tooltipEl.classList.add("apexcharts-active");
        } else
          s.type !== "mouseout" && s.type !== "touchend" || this.handleMouseOut(r);
      }
    } }, { key: "nonAxisChartsTooltips", value: function(t) {
      var e = t.e, i = t.opt, s = t.tooltipRect, r = this.w, o = i.paths.getAttribute("rel"), n = this.getElTooltip(), c = r.globals.dom.elWrap.getBoundingClientRect();
      if (e.type === "mousemove" || e.type === "touchmove") {
        n.classList.add("apexcharts-active"), this.tooltipLabels.drawSeriesTexts({ ttItems: i.ttItems, i: parseInt(o, 10) - 1, shared: !1 });
        var d = r.globals.clientX - c.left - s.ttWidth / 2, g = r.globals.clientY - c.top - s.ttHeight - 10;
        if (n.style.left = d + "px", n.style.top = g + "px", r.config.legend.tooltipHoverFormatter) {
          var p = o - 1, x = (0, r.config.legend.tooltipHoverFormatter)(this.legendLabels[p].getAttribute("data:default-text"), { seriesIndex: p, dataPointIndex: p, w: r });
          this.legendLabels[p].innerHTML = x;
        }
      } else
        e.type !== "mouseout" && e.type !== "touchend" || (n.classList.remove("apexcharts-active"), r.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(b) {
          var y = b.getAttribute("data:default-text");
          b.innerHTML = decodeURIComponent(y);
        }));
    } }, { key: "handleStickyTooltip", value: function(t, e, i, s) {
      var r = this.w, o = this.tooltipUtil.getNearestValues({ context: this, hoverArea: s.hoverArea, elGrid: s.elGrid, clientX: e, clientY: i }), n = o.j, c = o.capturedSeries;
      r.globals.collapsedSeriesIndices.includes(c) && (c = null);
      var d = s.elGrid.getBoundingClientRect();
      if (o.hoverX < 0 || o.hoverX > d.width)
        this.handleMouseOut(s);
      else if (c !== null)
        this.handleStickyCapturedSeries(t, c, s, n);
      else if (this.tooltipUtil.isXoverlap(n) || r.globals.isBarHorizontal) {
        var g = r.globals.series.findIndex(function(p, x) {
          return !r.globals.collapsedSeriesIndices.includes(x);
        });
        this.create(t, this, g, n, s.ttItems);
      }
    } }, { key: "handleStickyCapturedSeries", value: function(t, e, i, s) {
      var r = this.w;
      if (!this.tConfig.shared && r.globals.series[e][s] === null)
        return void this.handleMouseOut(i);
      if (r.globals.series[e][s] !== void 0)
        this.tConfig.shared && this.tooltipUtil.isXoverlap(s) && this.tooltipUtil.isInitialSeriesSameLen() ? this.create(t, this, e, s, i.ttItems) : this.create(t, this, e, s, i.ttItems, !1);
      else if (this.tooltipUtil.isXoverlap(s)) {
        var o = r.globals.series.findIndex(function(n, c) {
          return !r.globals.collapsedSeriesIndices.includes(c);
        });
        this.create(t, this, o, s, i.ttItems);
      }
    } }, { key: "deactivateHoverFilter", value: function() {
      for (var t = this.w, e = new B(this.ctx), i = t.globals.dom.Paper.select(".apexcharts-bar-area"), s = 0; s < i.length; s++)
        e.pathMouseLeave(i[s]);
    } }, { key: "handleMouseOut", value: function(t) {
      var e = this.w, i = this.getElXCrosshairs();
      if (t.tooltipEl.classList.remove("apexcharts-active"), this.deactivateHoverFilter(), e.config.chart.type !== "bubble" && this.marker.resetPointsSize(), i !== null && i.classList.remove("apexcharts-active"), this.ycrosshairs !== null && this.ycrosshairs.classList.remove("apexcharts-active"), this.isXAxisTooltipEnabled && this.xaxisTooltip.classList.remove("apexcharts-active"), this.yaxisTooltips.length) {
        this.yaxisTTEls === null && (this.yaxisTTEls = e.globals.dom.baseEl.querySelectorAll(".apexcharts-yaxistooltip"));
        for (var s = 0; s < this.yaxisTTEls.length; s++)
          this.yaxisTTEls[s].classList.remove("apexcharts-active");
      }
      e.config.legend.tooltipHoverFormatter && this.legendLabels.forEach(function(r) {
        var o = r.getAttribute("data:default-text");
        r.innerHTML = decodeURIComponent(o);
      });
    } }, { key: "markerClick", value: function(t, e, i) {
      var s = this.w;
      typeof s.config.chart.events.markerClick == "function" && s.config.chart.events.markerClick(t, this.ctx, { seriesIndex: e, dataPointIndex: i, w: s }), this.ctx.events.fireEvent("markerClick", [t, this.ctx, { seriesIndex: e, dataPointIndex: i, w: s }]);
    } }, { key: "create", value: function(t, e, i, s, r) {
      var o, n, c, d, g, p, x, b, y, A, S, N, L, h, m, k, C = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : null, O = this.w, I = e;
      t.type === "mouseup" && this.markerClick(t, i, s), C === null && (C = this.tConfig.shared);
      var X = this.tooltipUtil.hasMarkers(i), Y = this.tooltipUtil.getElBars();
      if (O.config.legend.tooltipHoverFormatter) {
        var W = O.config.legend.tooltipHoverFormatter, q = Array.from(this.legendLabels);
        q.forEach(function(Pe) {
          var me = Pe.getAttribute("data:default-text");
          Pe.innerHTML = decodeURIComponent(me);
        });
        for (var U = 0; U < q.length; U++) {
          var st = q[U], dt = parseInt(st.getAttribute("i"), 10), bt = decodeURIComponent(st.getAttribute("data:default-text")), Et = W(bt, { seriesIndex: C ? dt : i, dataPointIndex: s, w: O });
          if (C)
            st.innerHTML = O.globals.collapsedSeriesIndices.indexOf(dt) < 0 ? Et : bt;
          else if (st.innerHTML = dt === i ? Et : bt, i === dt)
            break;
        }
      }
      var Dt = f(f({ ttItems: r, i, j: s }, ((o = O.globals.seriesRange) === null || o === void 0 || (n = o[i]) === null || n === void 0 || (c = n[s]) === null || c === void 0 || (d = c.y[0]) === null || d === void 0 ? void 0 : d.y1) !== void 0 && { y1: (g = O.globals.seriesRange) === null || g === void 0 || (p = g[i]) === null || p === void 0 || (x = p[s]) === null || x === void 0 || (b = x.y[0]) === null || b === void 0 ? void 0 : b.y1 }), ((y = O.globals.seriesRange) === null || y === void 0 || (A = y[i]) === null || A === void 0 || (S = A[s]) === null || S === void 0 || (N = S.y[0]) === null || N === void 0 ? void 0 : N.y2) !== void 0 && { y2: (L = O.globals.seriesRange) === null || L === void 0 || (h = L[i]) === null || h === void 0 || (m = h[s]) === null || m === void 0 || (k = m.y[0]) === null || k === void 0 ? void 0 : k.y2 });
      if (C) {
        if (I.tooltipLabels.drawSeriesTexts(f(f({}, Dt), {}, { shared: !this.showOnIntersect && this.tConfig.shared })), X)
          O.globals.markers.largestSize > 0 ? I.marker.enlargePoints(s) : I.tooltipPosition.moveDynamicPointsOnHover(s);
        else if (this.tooltipUtil.hasBars() && (this.barSeriesHeight = this.tooltipUtil.getBarsHeight(Y), this.barSeriesHeight > 0)) {
          var Ot = new B(this.ctx), Ht = O.globals.dom.Paper.select(".apexcharts-bar-area[j='".concat(s, "']"));
          this.deactivateHoverFilter(), this.tooltipPosition.moveStickyTooltipOverBars(s, i);
          for (var jt = 0; jt < Ht.length; jt++)
            Ot.pathMouseEnter(Ht[jt]);
        }
      } else
        I.tooltipLabels.drawSeriesTexts(f({ shared: !1 }, Dt)), this.tooltipUtil.hasBars() && I.tooltipPosition.moveStickyTooltipOverBars(s, i), X && I.tooltipPosition.moveMarkers(i, s);
    } }]), E;
  }(), Se = function() {
    function E(t) {
      w(this, E), this.w = t.w, this.barCtx = t, this.totalFormatter = this.w.config.plotOptions.bar.dataLabels.total.formatter, this.totalFormatter || (this.totalFormatter = this.w.config.dataLabels.formatter);
    }
    return _(E, [{ key: "handleBarDataLabels", value: function(t) {
      var e = t.x, i = t.y, s = t.y1, r = t.y2, o = t.i, n = t.j, c = t.realIndex, d = t.groupIndex, g = t.series, p = t.barHeight, x = t.barWidth, b = t.barXPosition, y = t.barYPosition, A = t.visibleSeries, S = t.renderedPath, N = this.w, L = new B(this.barCtx.ctx), h = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[c] : this.barCtx.strokeWidth, m = e + parseFloat(x * A), k = i + parseFloat(p * A);
      N.globals.isXNumeric && !N.globals.isBarHorizontal && (m = e + parseFloat(x * (A + 1)), k = i + parseFloat(p * (A + 1)) - h);
      var C, O = null, I = e, X = i, Y = {}, W = N.config.dataLabels, q = this.barCtx.barOptions.dataLabels, U = this.barCtx.barOptions.dataLabels.total;
      y !== void 0 && this.barCtx.isRangeBar && (k = y, X = y), b !== void 0 && this.barCtx.isVerticalGroupedRangeBar && (m = b, I = b);
      var st = W.offsetX, dt = W.offsetY, bt = { width: 0, height: 0 };
      if (N.config.dataLabels.enabled) {
        var Et = this.barCtx.series[o][n];
        bt = L.getTextRects(N.globals.yLabelFormatters[0](Et), parseFloat(W.style.fontSize));
      }
      var Dt = { x: e, y: i, i: o, j: n, realIndex: c, groupIndex: d || -1, renderedPath: S, bcx: m, bcy: k, barHeight: p, barWidth: x, textRects: bt, strokeWidth: h, dataLabelsX: I, dataLabelsY: X, dataLabelsConfig: W, barDataLabelsConfig: q, barTotalDataLabelsConfig: U, offX: st, offY: dt };
      return Y = this.barCtx.isHorizontal ? this.calculateBarsDataLabelsPosition(Dt) : this.calculateColumnsDataLabelsPosition(Dt), S.attr({ cy: Y.bcy, cx: Y.bcx, j: n, val: g[o][n], barHeight: p, barWidth: x }), C = this.drawCalculatedDataLabels({ x: Y.dataLabelsX, y: Y.dataLabelsY, val: this.barCtx.isRangeBar ? [s, r] : g[o][n], i: c, j: n, barWidth: x, barHeight: p, textRects: bt, dataLabelsConfig: W }), N.config.chart.stacked && U.enabled && (O = this.drawTotalDataLabels({ x: Y.totalDataLabelsX, y: Y.totalDataLabelsY, barWidth: x, barHeight: p, realIndex: c, textAnchor: Y.totalDataLabelsAnchor, val: this.getStackedTotalDataLabel({ realIndex: c, j: n }), dataLabelsConfig: W, barTotalDataLabelsConfig: U })), { dataLabels: C, totalDataLabels: O };
    } }, { key: "getStackedTotalDataLabel", value: function(t) {
      var e = t.realIndex, i = t.j, s = this.w, r = this.barCtx.stackedSeriesTotals[i];
      return this.totalFormatter && (r = this.totalFormatter(r, f(f({}, s), {}, { seriesIndex: e, dataPointIndex: i, w: s }))), r;
    } }, { key: "calculateColumnsDataLabelsPosition", value: function(t) {
      var e, i, s = this.w, r = t.i, o = t.j, n = t.realIndex, c = t.groupIndex, d = t.y, g = t.bcx, p = t.barWidth, x = t.barHeight, b = t.textRects, y = t.dataLabelsX, A = t.dataLabelsY, S = t.dataLabelsConfig, N = t.barDataLabelsConfig, L = t.barTotalDataLabelsConfig, h = t.strokeWidth, m = t.offX, k = t.offY;
      x = Math.abs(x);
      var C = s.config.plotOptions.bar.dataLabels.orientation === "vertical", O = this.barCtx.barHelpers.getZeroValueEncounters({ i: r, j: o }).zeroEncounters;
      g = g - h / 2 + (c !== -1 ? c * p : 0);
      var I = s.globals.gridWidth / s.globals.dataPoints;
      this.barCtx.isVerticalGroupedRangeBar ? y += p / 2 : (y = s.globals.isXNumeric ? g - p / 2 + m : g - I + p / 2 + m, O > 0 && s.config.plotOptions.bar.hideZeroBarsWhenGrouped && (y -= p * O)), C && (y = y + b.height / 2 - h / 2 - 2);
      var X = this.barCtx.series[r][o] < 0, Y = d;
      switch (this.barCtx.isReversed && (Y = d - x + (X ? 2 * x : 0), d -= x), N.position) {
        case "center":
          A = C ? X ? Y - x / 2 + k : Y + x / 2 - k : X ? Y - x / 2 + b.height / 2 + k : Y + x / 2 + b.height / 2 - k;
          break;
        case "bottom":
          A = C ? X ? Y - x + k : Y + x - k : X ? Y - x + b.height + h + k : Y + x - b.height / 2 + h - k;
          break;
        case "top":
          A = C ? X ? Y + k : Y - k : X ? Y - b.height / 2 - k : Y + b.height + k;
      }
      if (this.barCtx.lastActiveBarSerieIndex === n && L.enabled) {
        var W = new B(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: n, j: o }), S.fontSize);
        e = X ? Y - W.height / 2 - k - L.offsetY + 18 : Y + W.height + k + L.offsetY - 18, i = y + L.offsetX;
      }
      return s.config.chart.stacked || (A < 0 ? A = 0 + h : A + b.height / 3 > s.globals.gridHeight && (A = s.globals.gridHeight - h)), { bcx: g, bcy: d, dataLabelsX: y, dataLabelsY: A, totalDataLabelsX: i, totalDataLabelsY: e, totalDataLabelsAnchor: "middle" };
    } }, { key: "calculateBarsDataLabelsPosition", value: function(t) {
      var e = this.w, i = t.x, s = t.i, r = t.j, o = t.realIndex, n = t.groupIndex, c = t.bcy, d = t.barHeight, g = t.barWidth, p = t.textRects, x = t.dataLabelsX, b = t.strokeWidth, y = t.dataLabelsConfig, A = t.barDataLabelsConfig, S = t.barTotalDataLabelsConfig, N = t.offX, L = t.offY, h = e.globals.gridHeight / e.globals.dataPoints;
      g = Math.abs(g);
      var m, k, C = (c += n !== -1 ? n * d : 0) - (this.barCtx.isRangeBar ? 0 : h) + d / 2 + p.height / 2 + L - 3, O = "start", I = this.barCtx.series[s][r] < 0, X = i;
      switch (this.barCtx.isReversed && (X = i + g - (I ? 2 * g : 0), i = e.globals.gridWidth - g), A.position) {
        case "center":
          x = I ? X + g / 2 - N : Math.max(p.width / 2, X - g / 2) + N;
          break;
        case "bottom":
          x = I ? X + g - b - Math.round(p.width / 2) - N : X - g + b + Math.round(p.width / 2) + N;
          break;
        case "top":
          x = I ? X - b + Math.round(p.width / 2) - N : X - b - Math.round(p.width / 2) + N;
      }
      if (this.barCtx.lastActiveBarSerieIndex === o && S.enabled) {
        var Y = new B(this.barCtx.ctx).getTextRects(this.getStackedTotalDataLabel({ realIndex: o, j: r }), y.fontSize);
        I ? (m = X - b + Math.round(Y.width / 2) - N - S.offsetX - 15, O = "end") : m = X - b - Math.round(Y.width / 2) + N + S.offsetX + 15, k = C + S.offsetY;
      }
      return e.config.chart.stacked || (x < 0 ? x = x + p.width + b : x + p.width / 2 > e.globals.gridWidth && (x = e.globals.gridWidth - p.width - b)), { bcx: i, bcy: c, dataLabelsX: x, dataLabelsY: C, totalDataLabelsX: m, totalDataLabelsY: k, totalDataLabelsAnchor: O };
    } }, { key: "drawCalculatedDataLabels", value: function(t) {
      var e = t.x, i = t.y, s = t.val, r = t.i, o = t.j, n = t.textRects, c = t.barHeight, d = t.barWidth, g = t.dataLabelsConfig, p = this.w, x = "rotate(0)";
      p.config.plotOptions.bar.dataLabels.orientation === "vertical" && (x = "rotate(-90, ".concat(e, ", ").concat(i, ")"));
      var b = new Ee(this.barCtx.ctx), y = new B(this.barCtx.ctx), A = g.formatter, S = null, N = p.globals.collapsedSeriesIndices.indexOf(r) > -1;
      if (g.enabled && !N) {
        S = y.group({ class: "apexcharts-data-labels", transform: x });
        var L = "";
        s !== void 0 && (L = A(s, f(f({}, p), {}, { seriesIndex: r, dataPointIndex: o, w: p }))), !s && p.config.plotOptions.bar.hideZeroBarsWhenGrouped && (L = "");
        var h = p.globals.series[r][o] < 0, m = p.config.plotOptions.bar.dataLabels.position;
        p.config.plotOptions.bar.dataLabels.orientation === "vertical" && (m === "top" && (g.textAnchor = h ? "end" : "start"), m === "center" && (g.textAnchor = "middle"), m === "bottom" && (g.textAnchor = h ? "end" : "start")), this.barCtx.isRangeBar && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && d < y.getTextRects(L, parseFloat(g.style.fontSize)).width && (L = ""), p.config.chart.stacked && this.barCtx.barOptions.dataLabels.hideOverflowingLabels && (this.barCtx.isHorizontal ? n.width / 1.6 > Math.abs(d) && (L = "") : n.height / 1.6 > Math.abs(c) && (L = ""));
        var k = f({}, g);
        this.barCtx.isHorizontal && s < 0 && (g.textAnchor === "start" ? k.textAnchor = "end" : g.textAnchor === "end" && (k.textAnchor = "start")), b.plotDataLabelsText({ x: e, y: i, text: L, i: r, j: o, parent: S, dataLabelsConfig: k, alwaysDrawDataLabel: !0, offsetCorrection: !0 });
      }
      return S;
    } }, { key: "drawTotalDataLabels", value: function(t) {
      var e, i = t.x, s = t.y, r = t.val, o = t.barWidth, n = t.barHeight, c = t.realIndex, d = t.textAnchor, g = t.barTotalDataLabelsConfig, p = this.w, x = new B(this.barCtx.ctx);
      return g.enabled && i !== void 0 && s !== void 0 && this.barCtx.lastActiveBarSerieIndex === c && (e = x.drawText({ x: i - (!p.globals.isBarHorizontal && p.globals.seriesGroups.length ? o / p.globals.seriesGroups.length : 0), y: s - (p.globals.isBarHorizontal && p.globals.seriesGroups.length ? n / p.globals.seriesGroups.length : 0), foreColor: g.style.color, text: r, textAnchor: d, fontFamily: g.style.fontFamily, fontSize: g.style.fontSize, fontWeight: g.style.fontWeight })), e;
    } }]), E;
  }(), ys = function() {
    function E(t) {
      w(this, E), this.w = t.w, this.barCtx = t;
    }
    return _(E, [{ key: "initVariables", value: function(t) {
      var e = this.w;
      this.barCtx.series = t, this.barCtx.totalItems = 0, this.barCtx.seriesLen = 0, this.barCtx.visibleI = -1, this.barCtx.visibleItems = 1;
      for (var i = 0; i < t.length; i++)
        if (t[i].length > 0 && (this.barCtx.seriesLen = this.barCtx.seriesLen + 1, this.barCtx.totalItems += t[i].length), e.globals.isXNumeric)
          for (var s = 0; s < t[i].length; s++)
            e.globals.seriesX[i][s] > e.globals.minX && e.globals.seriesX[i][s] < e.globals.maxX && this.barCtx.visibleItems++;
        else
          this.barCtx.visibleItems = e.globals.dataPoints;
      this.barCtx.seriesLen === 0 && (this.barCtx.seriesLen = 1), this.barCtx.zeroSerieses = [], e.globals.comboCharts || this.checkZeroSeries({ series: t });
    } }, { key: "initialPositions", value: function() {
      var t, e, i, s, r, o, n, c, d = this.w, g = d.globals.dataPoints;
      this.barCtx.isRangeBar && (g = d.globals.labels.length);
      var p = this.barCtx.seriesLen;
      if (d.config.plotOptions.bar.rangeBarGroupRows && (p = 1), this.barCtx.isHorizontal)
        r = (i = d.globals.gridHeight / g) / p, d.globals.isXNumeric && (r = (i = d.globals.gridHeight / this.barCtx.totalItems) / this.barCtx.seriesLen), r = r * parseInt(this.barCtx.barOptions.barHeight, 10) / 100, String(this.barCtx.barOptions.barHeight).indexOf("%") === -1 && (r = parseInt(this.barCtx.barOptions.barHeight, 10)), c = this.barCtx.baseLineInvertedY + d.globals.padHorizontal + (this.barCtx.isReversed ? d.globals.gridWidth : 0) - (this.barCtx.isReversed ? 2 * this.barCtx.baseLineInvertedY : 0), this.barCtx.isFunnel && (c = d.globals.gridWidth / 2), e = (i - r * this.barCtx.seriesLen) / 2;
      else {
        if (s = d.globals.gridWidth / this.barCtx.visibleItems, d.config.xaxis.convertedCatToNumeric && (s = d.globals.gridWidth / d.globals.dataPoints), o = s / p * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100, d.globals.isXNumeric) {
          var x = this.barCtx.xRatio;
          d.globals.minXDiff && d.globals.minXDiff !== 0.5 && d.globals.minXDiff / x > 0 && (s = d.globals.minXDiff / x), (o = s / p * parseInt(this.barCtx.barOptions.columnWidth, 10) / 100) < 1 && (o = 1);
        }
        String(this.barCtx.barOptions.columnWidth).indexOf("%") === -1 && (o = parseInt(this.barCtx.barOptions.columnWidth, 10)), n = d.globals.gridHeight - this.barCtx.baseLineY[this.barCtx.yaxisIndex] - (this.barCtx.isReversed ? d.globals.gridHeight : 0) + (this.barCtx.isReversed ? 2 * this.barCtx.baseLineY[this.barCtx.yaxisIndex] : 0), t = d.globals.padHorizontal + (s - o * this.barCtx.seriesLen) / 2;
      }
      return d.globals.barHeight = r, d.globals.barWidth = o, { x: t, y: e, yDivision: i, xDivision: s, barHeight: r, barWidth: o, zeroH: n, zeroW: c };
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
    } }, { key: "getPathFillColor", value: function(t, e, i, s) {
      var r, o, n, c, d = this.w, g = new Kt(this.barCtx.ctx), p = null, x = this.barCtx.barOptions.distributed ? i : e;
      return this.barCtx.barOptions.colors.ranges.length > 0 && this.barCtx.barOptions.colors.ranges.map(function(b) {
        t[e][i] >= b.from && t[e][i] <= b.to && (p = b.color);
      }), d.config.series[e].data[i] && d.config.series[e].data[i].fillColor && (p = d.config.series[e].data[i].fillColor), g.fillPath({ seriesNumber: this.barCtx.barOptions.distributed ? x : s, dataPointIndex: i, color: p, value: t[e][i], fillConfig: (r = d.config.series[e].data[i]) === null || r === void 0 ? void 0 : r.fill, fillType: (o = d.config.series[e].data[i]) !== null && o !== void 0 && (n = o.fill) !== null && n !== void 0 && n.type ? (c = d.config.series[e].data[i]) === null || c === void 0 ? void 0 : c.fill.type : Array.isArray(d.config.fill.type) ? d.config.fill.type[e] : d.config.fill.type });
    } }, { key: "getStrokeWidth", value: function(t, e, i) {
      var s = 0, r = this.w;
      return this.barCtx.series[t][e] === void 0 || this.barCtx.series[t][e] === null ? this.barCtx.isNullValue = !0 : this.barCtx.isNullValue = !1, r.config.stroke.show && (this.barCtx.isNullValue || (s = Array.isArray(this.barCtx.strokeWidth) ? this.barCtx.strokeWidth[i] : this.barCtx.strokeWidth)), s;
    } }, { key: "shouldApplyRadius", value: function(t) {
      var e = this.w, i = !1;
      return e.config.plotOptions.bar.borderRadius > 0 && (e.config.chart.stacked && e.config.plotOptions.bar.borderRadiusWhenStacked === "last" ? this.barCtx.lastActiveBarSerieIndex === t && (i = !0) : i = !0), i;
    } }, { key: "barBackground", value: function(t) {
      var e = t.j, i = t.i, s = t.x1, r = t.x2, o = t.y1, n = t.y2, c = t.elSeries, d = this.w, g = new B(this.barCtx.ctx), p = new Qt(this.barCtx.ctx).getActiveConfigSeriesIndex();
      if (this.barCtx.barOptions.colors.backgroundBarColors.length > 0 && p === i) {
        e >= this.barCtx.barOptions.colors.backgroundBarColors.length && (e %= this.barCtx.barOptions.colors.backgroundBarColors.length);
        var x = this.barCtx.barOptions.colors.backgroundBarColors[e], b = g.drawRect(s !== void 0 ? s : 0, o !== void 0 ? o : 0, r !== void 0 ? r : d.globals.gridWidth, n !== void 0 ? n : d.globals.gridHeight, this.barCtx.barOptions.colors.backgroundBarRadius, x, this.barCtx.barOptions.colors.backgroundBarOpacity);
        c.add(b), b.node.classList.add("apexcharts-backgroundBar");
      }
    } }, { key: "getColumnPaths", value: function(t) {
      var e, i = t.barWidth, s = t.barXPosition, r = t.y1, o = t.y2, n = t.strokeWidth, c = t.seriesGroup, d = t.realIndex, g = t.i, p = t.j, x = t.w, b = new B(this.barCtx.ctx);
      (n = Array.isArray(n) ? n[d] : n) || (n = 0);
      var y = i, A = s;
      (e = x.config.series[d].data[p]) !== null && e !== void 0 && e.columnWidthOffset && (A = s - x.config.series[d].data[p].columnWidthOffset / 2, y = i + x.config.series[d].data[p].columnWidthOffset);
      var S = A, N = A + y;
      r += 1e-3, o += 1e-3;
      var L = b.move(S, r), h = b.move(S, r), m = b.line(N - n, r);
      if (x.globals.previousPaths.length > 0 && (h = this.barCtx.getPreviousPath(d, p, !1)), L = L + b.line(S, o) + b.line(N - n, o) + b.line(N - n, r) + (x.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z"), h = h + b.line(S, r) + m + m + m + m + m + b.line(S, r) + (x.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z"), this.shouldApplyRadius(d) && (L = b.roundPathCorners(L, x.config.plotOptions.bar.borderRadius)), x.config.chart.stacked) {
        var k = this.barCtx;
        x.globals.hasSeriesGroups && c && (k = this.barCtx[c]), k.yArrj.push(o), k.yArrjF.push(Math.abs(r - o)), k.yArrjVal.push(this.barCtx.series[g][p]);
      }
      return { pathTo: L, pathFrom: h };
    } }, { key: "getBarpaths", value: function(t) {
      var e, i = t.barYPosition, s = t.barHeight, r = t.x1, o = t.x2, n = t.strokeWidth, c = t.seriesGroup, d = t.realIndex, g = t.i, p = t.j, x = t.w, b = new B(this.barCtx.ctx);
      (n = Array.isArray(n) ? n[d] : n) || (n = 0);
      var y = i, A = s;
      (e = x.config.series[d].data[p]) !== null && e !== void 0 && e.barHeightOffset && (y = i - x.config.series[d].data[p].barHeightOffset / 2, A = s + x.config.series[d].data[p].barHeightOffset);
      var S = y, N = y + A;
      r += 1e-3, o += 1e-3;
      var L = b.move(r, S), h = b.move(r, S);
      x.globals.previousPaths.length > 0 && (h = this.barCtx.getPreviousPath(d, p, !1));
      var m = b.line(r, N - n);
      if (L = L + b.line(o, S) + b.line(o, N - n) + m + (x.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z"), h = h + b.line(r, S) + m + m + m + m + m + b.line(r, S) + (x.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z"), this.shouldApplyRadius(d) && (L = b.roundPathCorners(L, x.config.plotOptions.bar.borderRadius)), x.config.chart.stacked) {
        var k = this.barCtx;
        x.globals.hasSeriesGroups && c && (k = this.barCtx[c]), k.xArrj.push(o), k.xArrjF.push(Math.abs(r - o)), k.xArrjVal.push(this.barCtx.series[g][p]);
      }
      return { pathTo: L, pathFrom: h };
    } }, { key: "checkZeroSeries", value: function(t) {
      for (var e = t.series, i = this.w, s = 0; s < e.length; s++) {
        for (var r = 0, o = 0; o < e[i.globals.maxValsInArrayIndex].length; o++)
          r += e[s][o];
        r === 0 && this.barCtx.zeroSerieses.push(s);
      }
    } }, { key: "getXForValue", value: function(t, e) {
      var i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2] ? e : null;
      return t != null && (i = e + t / this.barCtx.invertedYRatio - 2 * (this.barCtx.isReversed ? t / this.barCtx.invertedYRatio : 0)), i;
    } }, { key: "getYForValue", value: function(t, e) {
      var i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2] ? e : null;
      return t != null && (i = e - t / this.barCtx.yRatio[this.barCtx.yaxisIndex] + 2 * (this.barCtx.isReversed ? t / this.barCtx.yRatio[this.barCtx.yaxisIndex] : 0)), i;
    } }, { key: "getGoalValues", value: function(t, e, i, s, r) {
      var o = this, n = this.w, c = [], d = function(x, b) {
        var y;
        c.push((T(y = {}, t, t === "x" ? o.getXForValue(x, e, !1) : o.getYForValue(x, i, !1)), T(y, "attrs", b), y));
      };
      if (n.globals.seriesGoals[s] && n.globals.seriesGoals[s][r] && Array.isArray(n.globals.seriesGoals[s][r]) && n.globals.seriesGoals[s][r].forEach(function(x) {
        d(x.value, x);
      }), this.barCtx.barOptions.isDumbbell && n.globals.seriesRange.length) {
        var g = this.barCtx.barOptions.dumbbellColors ? this.barCtx.barOptions.dumbbellColors : n.globals.colors, p = { strokeHeight: t === "x" ? 0 : n.globals.markers.size[s], strokeWidth: t === "x" ? n.globals.markers.size[s] : 0, strokeDashArray: 0, strokeLineCap: "round", strokeColor: Array.isArray(g[s]) ? g[s][0] : g[s] };
        d(n.globals.seriesRangeStart[s][r], p), d(n.globals.seriesRangeEnd[s][r], f(f({}, p), {}, { strokeColor: Array.isArray(g[s]) ? g[s][1] : g[s] }));
      }
      return c;
    } }, { key: "drawGoalLine", value: function(t) {
      var e = t.barXPosition, i = t.barYPosition, s = t.goalX, r = t.goalY, o = t.barWidth, n = t.barHeight, c = new B(this.barCtx.ctx), d = c.group({ className: "apexcharts-bar-goals-groups" });
      d.node.classList.add("apexcharts-element-hidden"), this.barCtx.w.globals.delayedElements.push({ el: d.node }), d.attr("clip-path", "url(#gridRectMarkerMask".concat(this.barCtx.w.globals.cuid, ")"));
      var g = null;
      return this.barCtx.isHorizontal ? Array.isArray(s) && s.forEach(function(p) {
        var x = p.attrs.strokeHeight !== void 0 ? p.attrs.strokeHeight : n / 2, b = i + x + n / 2;
        g = c.drawLine(p.x, b - 2 * x, p.x, b, p.attrs.strokeColor ? p.attrs.strokeColor : void 0, p.attrs.strokeDashArray, p.attrs.strokeWidth ? p.attrs.strokeWidth : 2, p.attrs.strokeLineCap), d.add(g);
      }) : Array.isArray(r) && r.forEach(function(p) {
        var x = p.attrs.strokeWidth !== void 0 ? p.attrs.strokeWidth : o / 2, b = e + x + o / 2;
        g = c.drawLine(b - 2 * x, p.y, b, p.y, p.attrs.strokeColor ? p.attrs.strokeColor : void 0, p.attrs.strokeDashArray, p.attrs.strokeHeight ? p.attrs.strokeHeight : 2, p.attrs.strokeLineCap), d.add(g);
      }), d;
    } }, { key: "drawBarShadow", value: function(t) {
      var e = t.prevPaths, i = t.currPaths, s = t.color, r = this.w, o = e.x, n = e.x1, c = e.barYPosition, d = i.x, g = i.x1, p = i.barYPosition, x = c + i.barHeight, b = new B(this.barCtx.ctx), y = new F(), A = b.move(n, x) + b.line(o, x) + b.line(d, p) + b.line(g, p) + b.line(n, x) + (r.config.plotOptions.bar.borderRadiusApplication === "around" ? " Z" : " z");
      return b.drawPath({ d: A, fill: y.shadeColor(0.5, F.rgb2hex(s)), stroke: "none", strokeWidth: 0, fillOpacity: 1, classes: "apexcharts-bar-shadows" });
    } }, { key: "getZeroValueEncounters", value: function(t) {
      var e = t.i, i = t.j, s = this.w, r = 0, o = 0;
      return s.globals.seriesPercent.forEach(function(n, c) {
        n[i] && r++, c < e && n[i] === 0 && o++;
      }), { nonZeroColumns: r, zeroEncounters: o };
    } }]), E;
  }(), Xi = function() {
    function E(t, e) {
      w(this, E), this.ctx = t, this.w = t.w;
      var i = this.w;
      this.barOptions = i.config.plotOptions.bar, this.isHorizontal = this.barOptions.horizontal, this.strokeWidth = i.config.stroke.width, this.isNullValue = !1, this.isRangeBar = i.globals.seriesRange.length && this.isHorizontal, this.isVerticalGroupedRangeBar = !i.globals.isBarHorizontal && i.globals.seriesRange.length && i.config.plotOptions.bar.rangeBarGroupRows, this.isFunnel = this.barOptions.isFunnel, this.xyRatios = e, this.xyRatios !== null && (this.xRatio = e.xRatio, this.yRatio = e.yRatio, this.invertedXRatio = e.invertedXRatio, this.invertedYRatio = e.invertedYRatio, this.baseLineY = e.baseLineY, this.baseLineInvertedY = e.baseLineInvertedY), this.yaxisIndex = 0, this.seriesLen = 0, this.pathArr = [];
      var s = new Qt(this.ctx);
      this.lastActiveBarSerieIndex = s.getActiveConfigSeriesIndex("desc", ["bar", "column"]);
      var r = s.getBarSeriesIndices(), o = new _t(this.ctx);
      this.stackedSeriesTotals = o.getStackedSeriesTotals(this.w.config.series.map(function(n, c) {
        return r.indexOf(c) === -1 ? c : -1;
      }).filter(function(n) {
        return n !== -1;
      })), this.barHelpers = new ys(this);
    }
    return _(E, [{ key: "draw", value: function(t, e) {
      var i = this.w, s = new B(this.ctx), r = new _t(this.ctx, i);
      t = r.getLogSeries(t), this.series = t, this.yRatio = r.getLogYRatios(this.yRatio), this.barHelpers.initVariables(t);
      var o = s.group({ class: "apexcharts-bar-series apexcharts-plot-series" });
      i.config.dataLabels.enabled && this.totalItems > this.barOptions.dataLabels.maxItems && console.warn("WARNING: DataLabels are enabled but there are too many to display. This may cause performance issue when rendering - ApexCharts");
      for (var n = 0, c = 0; n < t.length; n++, c++) {
        var d, g, p, x, b = void 0, y = void 0, A = [], S = [], N = i.globals.comboCharts ? e[n] : n, L = s.group({ class: "apexcharts-series", rel: n + 1, seriesName: F.escapeString(i.globals.seriesNames[N]), "data:realIndex": N });
        this.ctx.series.addCollapsedClassToSeries(L, N), t[n].length > 0 && (this.visibleI = this.visibleI + 1);
        var h = 0, m = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = N), this.isReversed = i.config.yaxis[this.yaxisIndex] && i.config.yaxis[this.yaxisIndex].reversed;
        var k = this.barHelpers.initialPositions();
        y = k.y, h = k.barHeight, g = k.yDivision, x = k.zeroW, b = k.x, m = k.barWidth, d = k.xDivision, p = k.zeroH, this.horizontal || S.push(b + m / 2);
        var C = s.group({ class: "apexcharts-datalabels", "data:realIndex": N });
        i.globals.delayedElements.push({ el: C.node }), C.node.classList.add("apexcharts-element-hidden");
        var O = s.group({ class: "apexcharts-bar-goals-markers" }), I = s.group({ class: "apexcharts-bar-shadows" });
        i.globals.delayedElements.push({ el: I.node }), I.node.classList.add("apexcharts-element-hidden");
        for (var X = 0; X < i.globals.dataPoints; X++) {
          var Y = this.barHelpers.getStrokeWidth(n, X, N), W = null, q = { indexes: { i: n, j: X, realIndex: N, bc: c }, x: b, y, strokeWidth: Y, elSeries: L };
          this.isHorizontal ? (W = this.drawBarPaths(f(f({}, q), {}, { barHeight: h, zeroW: x, yDivision: g })), m = this.series[n][X] / this.invertedYRatio) : (W = this.drawColumnPaths(f(f({}, q), {}, { xDivision: d, barWidth: m, zeroH: p })), h = this.series[n][X] / this.yRatio[this.yaxisIndex]);
          var U = this.barHelpers.getPathFillColor(t, n, X, N);
          if (this.isFunnel && this.barOptions.isFunnel3d && this.pathArr.length && X > 0) {
            var st = this.barHelpers.drawBarShadow({ color: typeof U == "string" && (U == null ? void 0 : U.indexOf("url")) === -1 ? U : F.hexToRgba(i.globals.colors[n]), prevPaths: this.pathArr[this.pathArr.length - 1], currPaths: W });
            st && I.add(st);
          }
          this.pathArr.push(W);
          var dt = this.barHelpers.drawGoalLine({ barXPosition: W.barXPosition, barYPosition: W.barYPosition, goalX: W.goalX, goalY: W.goalY, barHeight: h, barWidth: m });
          dt && O.add(dt), y = W.y, b = W.x, X > 0 && S.push(b + m / 2), A.push(y), this.renderSeries({ realIndex: N, pathFill: U, j: X, i: n, pathFrom: W.pathFrom, pathTo: W.pathTo, strokeWidth: Y, elSeries: L, x: b, y, series: t, barHeight: W.barHeight ? W.barHeight : h, barWidth: W.barWidth ? W.barWidth : m, elDataLabelsWrap: C, elGoalsMarkers: O, elBarShadows: I, visibleSeries: this.visibleI, type: "bar" });
        }
        i.globals.seriesXvalues[N] = S, i.globals.seriesYvalues[N] = A, o.add(L);
      }
      return o;
    } }, { key: "renderSeries", value: function(t) {
      var e = t.realIndex, i = t.pathFill, s = t.lineFill, r = t.j, o = t.i, n = t.groupIndex, c = t.pathFrom, d = t.pathTo, g = t.strokeWidth, p = t.elSeries, x = t.x, b = t.y, y = t.y1, A = t.y2, S = t.series, N = t.barHeight, L = t.barWidth, h = t.barXPosition, m = t.barYPosition, k = t.elDataLabelsWrap, C = t.elGoalsMarkers, O = t.elBarShadows, I = t.visibleSeries, X = t.type, Y = this.w, W = new B(this.ctx);
      s || (s = this.barOptions.distributed ? Y.globals.stroke.colors[r] : Y.globals.stroke.colors[e]), Y.config.series[o].data[r] && Y.config.series[o].data[r].strokeColor && (s = Y.config.series[o].data[r].strokeColor), this.isNullValue && (i = "none");
      var q = r / Y.config.chart.animations.animateGradually.delay * (Y.config.chart.animations.speed / Y.globals.dataPoints) / 2.4, U = W.renderPaths({ i: o, j: r, realIndex: e, pathFrom: c, pathTo: d, stroke: s, strokeWidth: g, strokeLineCap: Y.config.stroke.lineCap, fill: i, animationDelay: q, initialSpeed: Y.config.chart.animations.speed, dataChangeSpeed: Y.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(X, "-area") });
      U.attr("clip-path", "url(#gridRectMask".concat(Y.globals.cuid, ")"));
      var st = Y.config.forecastDataPoints;
      st.count > 0 && r >= Y.globals.dataPoints - st.count && (U.node.setAttribute("stroke-dasharray", st.dashArray), U.node.setAttribute("stroke-width", st.strokeWidth), U.node.setAttribute("fill-opacity", st.fillOpacity)), y !== void 0 && A !== void 0 && (U.attr("data-range-y1", y), U.attr("data-range-y2", A)), new pt(this.ctx).setSelectionFilter(U, e, r), p.add(U);
      var dt = new Se(this).handleBarDataLabels({ x, y: b, y1: y, y2: A, i: o, j: r, series: S, realIndex: e, groupIndex: n, barHeight: N, barWidth: L, barXPosition: h, barYPosition: m, renderedPath: U, visibleSeries: I });
      return dt.dataLabels !== null && k.add(dt.dataLabels), dt.totalDataLabels && k.add(dt.totalDataLabels), p.add(k), C && p.add(C), O && p.add(O), p;
    } }, { key: "drawBarPaths", value: function(t) {
      var e, i = t.indexes, s = t.barHeight, r = t.strokeWidth, o = t.zeroW, n = t.x, c = t.y, d = t.yDivision, g = t.elSeries, p = this.w, x = i.i, b = i.j;
      if (p.globals.isXNumeric)
        e = (c = (p.globals.seriesX[x][b] - p.globals.minX) / this.invertedXRatio - s) + s * this.visibleI;
      else if (p.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        var y = 0, A = 0;
        p.globals.seriesPercent.forEach(function(N, L) {
          N[b] && y++, L < x && N[b] === 0 && A++;
        }), y > 0 && (s = this.seriesLen * s / y), e = c + s * this.visibleI, e -= s * A;
      } else
        e = c + s * this.visibleI;
      this.isFunnel && (o -= (this.barHelpers.getXForValue(this.series[x][b], o) - o) / 2), n = this.barHelpers.getXForValue(this.series[x][b], o);
      var S = this.barHelpers.getBarpaths({ barYPosition: e, barHeight: s, x1: o, x2: n, strokeWidth: r, series: this.series, realIndex: i.realIndex, i: x, j: b, w: p });
      return p.globals.isXNumeric || (c += d), this.barHelpers.barBackground({ j: b, i: x, y1: e - s * this.visibleI, y2: s * this.seriesLen, elSeries: g }), { pathTo: S.pathTo, pathFrom: S.pathFrom, x1: o, x: n, y: c, goalX: this.barHelpers.getGoalValues("x", o, null, x, b), barYPosition: e, barHeight: s };
    } }, { key: "drawColumnPaths", value: function(t) {
      var e, i = t.indexes, s = t.x, r = t.y, o = t.xDivision, n = t.barWidth, c = t.zeroH, d = t.strokeWidth, g = t.elSeries, p = this.w, x = i.realIndex, b = i.i, y = i.j, A = i.bc;
      if (p.globals.isXNumeric) {
        var S = this.getBarXForNumericXAxis({ x: s, j: y, realIndex: x, barWidth: n });
        s = S.x, e = S.barXPosition;
      } else if (p.config.plotOptions.bar.hideZeroBarsWhenGrouped) {
        var N = this.barHelpers.getZeroValueEncounters({ i: b, j: y }), L = N.nonZeroColumns, h = N.zeroEncounters;
        L > 0 && (n = this.seriesLen * n / L), e = s + n * this.visibleI, e -= n * h;
      } else
        e = s + n * this.visibleI;
      r = this.barHelpers.getYForValue(this.series[b][y], c);
      var m = this.barHelpers.getColumnPaths({ barXPosition: e, barWidth: n, y1: c, y2: r, strokeWidth: d, series: this.series, realIndex: i.realIndex, i: b, j: y, w: p });
      return p.globals.isXNumeric || (s += o), this.barHelpers.barBackground({ bc: A, j: y, i: b, x1: e - d / 2 - n * this.visibleI, x2: n * this.seriesLen + d / 2, elSeries: g }), { pathTo: m.pathTo, pathFrom: m.pathFrom, x: s, y: r, goalY: this.barHelpers.getGoalValues("y", null, c, b, y), barXPosition: e, barWidth: n };
    } }, { key: "getBarXForNumericXAxis", value: function(t) {
      var e = t.x, i = t.barWidth, s = t.realIndex, r = t.j, o = this.w, n = s;
      return o.globals.seriesX[s].length || (n = o.globals.maxValsInArrayIndex), o.globals.seriesX[n][r] && (e = (o.globals.seriesX[n][r] - o.globals.minX) / this.xRatio - i * this.seriesLen / 2), { barXPosition: e + i * this.visibleI, x: e };
    } }, { key: "getPreviousPath", value: function(t, e) {
      for (var i, s = this.w, r = 0; r < s.globals.previousPaths.length; r++) {
        var o = s.globals.previousPaths[r];
        o.paths && o.paths.length > 0 && parseInt(o.realIndex, 10) === parseInt(t, 10) && s.globals.previousPaths[r].paths[e] !== void 0 && (i = s.globals.previousPaths[r].paths[e].d);
      }
      return i;
    } }]), E;
  }(), Dr = function(E) {
    z(e, Xi);
    var t = $(e);
    function e() {
      return w(this, e), t.apply(this, arguments);
    }
    return _(e, [{ key: "draw", value: function(i, s) {
      var r = this, o = this.w;
      this.graphics = new B(this.ctx), this.bar = new Xi(this.ctx, this.xyRatios);
      var n = new _t(this.ctx, o);
      i = n.getLogSeries(i), this.yRatio = n.getLogYRatios(this.yRatio), this.barHelpers.initVariables(i), o.config.chart.stackType === "100%" && (i = o.globals.seriesPercent.slice()), this.series = i, this.barHelpers.initializeStackedPrevVars(this);
      for (var c = this.graphics.group({ class: "apexcharts-bar-series apexcharts-plot-series" }), d = 0, g = 0, p = function(y, A) {
        var S = void 0, N = void 0, L = void 0, h = void 0, m = -1;
        r.groupCtx = r, o.globals.seriesGroups.forEach(function(Ht, jt) {
          Ht.indexOf(o.config.series[y].name) > -1 && (m = jt);
        }), m !== -1 && (r.groupCtx = r[o.globals.seriesGroups[m]]);
        var k = [], C = [], O = o.globals.comboCharts ? s[y] : y;
        r.yRatio.length > 1 && (r.yaxisIndex = O), r.isReversed = o.config.yaxis[r.yaxisIndex] && o.config.yaxis[r.yaxisIndex].reversed;
        var I = r.graphics.group({ class: "apexcharts-series", seriesName: F.escapeString(o.globals.seriesNames[O]), rel: y + 1, "data:realIndex": O });
        r.ctx.series.addCollapsedClassToSeries(I, O);
        var X = r.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": O }), Y = r.graphics.group({ class: "apexcharts-bar-goals-markers" }), W = 0, q = 0, U = r.initialPositions(d, g, S, N, L, h);
        g = U.y, W = U.barHeight, N = U.yDivision, h = U.zeroW, d = U.x, q = U.barWidth, S = U.xDivision, L = U.zeroH, o.globals.barHeight = W, o.globals.barWidth = q, r.barHelpers.initializeStackedXYVars(r), r.groupCtx.prevY.length === 1 && r.groupCtx.prevY[0].every(function(Ht) {
          return isNaN(Ht);
        }) && (r.groupCtx.prevY[0] = r.groupCtx.prevY[0].map(function(Ht) {
          return L;
        }), r.groupCtx.prevYF[0] = r.groupCtx.prevYF[0].map(function(Ht) {
          return 0;
        }));
        for (var st = 0; st < o.globals.dataPoints; st++) {
          var dt = r.barHelpers.getStrokeWidth(y, st, O), bt = { indexes: { i: y, j: st, realIndex: O, bc: A }, strokeWidth: dt, x: d, y: g, elSeries: I, groupIndex: m, seriesGroup: o.globals.seriesGroups[m] }, Et = null;
          r.isHorizontal ? (Et = r.drawStackedBarPaths(f(f({}, bt), {}, { zeroW: h, barHeight: W, yDivision: N })), q = r.series[y][st] / r.invertedYRatio) : (Et = r.drawStackedColumnPaths(f(f({}, bt), {}, { xDivision: S, barWidth: q, zeroH: L })), W = r.series[y][st] / r.yRatio[r.yaxisIndex]);
          var Dt = r.barHelpers.drawGoalLine({ barXPosition: Et.barXPosition, barYPosition: Et.barYPosition, goalX: Et.goalX, goalY: Et.goalY, barHeight: W, barWidth: q });
          Dt && Y.add(Dt), g = Et.y, d = Et.x, k.push(d), C.push(g);
          var Ot = r.barHelpers.getPathFillColor(i, y, st, O);
          I = r.renderSeries({ realIndex: O, pathFill: Ot, j: st, i: y, groupIndex: m, pathFrom: Et.pathFrom, pathTo: Et.pathTo, strokeWidth: dt, elSeries: I, x: d, y: g, series: i, barHeight: W, barWidth: q, elDataLabelsWrap: X, elGoalsMarkers: Y, type: "bar", visibleSeries: 0 });
        }
        o.globals.seriesXvalues[O] = k, o.globals.seriesYvalues[O] = C, r.groupCtx.prevY.push(r.groupCtx.yArrj), r.groupCtx.prevYF.push(r.groupCtx.yArrjF), r.groupCtx.prevYVal.push(r.groupCtx.yArrjVal), r.groupCtx.prevX.push(r.groupCtx.xArrj), r.groupCtx.prevXF.push(r.groupCtx.xArrjF), r.groupCtx.prevXVal.push(r.groupCtx.xArrjVal), c.add(I);
      }, x = 0, b = 0; x < i.length; x++, b++)
        p(x, b);
      return c;
    } }, { key: "initialPositions", value: function(i, s, r, o, n, c) {
      var d, g, p, x, b = this.w;
      return this.isHorizontal ? (p = (p = o = b.globals.gridHeight / b.globals.dataPoints) * parseInt(b.config.plotOptions.bar.barHeight, 10) / 100, String(b.config.plotOptions.bar.barHeight).indexOf("%") === -1 && (p = parseInt(b.config.plotOptions.bar.barHeight, 10)), c = this.baseLineInvertedY + b.globals.padHorizontal + (this.isReversed ? b.globals.gridWidth : 0) - (this.isReversed ? 2 * this.baseLineInvertedY : 0), s = (o - p) / 2) : (x = r = b.globals.gridWidth / b.globals.dataPoints, x = b.globals.isXNumeric && b.globals.dataPoints > 1 ? (r = b.globals.minXDiff / this.xRatio) * parseInt(this.barOptions.columnWidth, 10) / 100 : x * parseInt(b.config.plotOptions.bar.columnWidth, 10) / 100, String(b.config.plotOptions.bar.columnWidth).indexOf("%") === -1 && (x = parseInt(b.config.plotOptions.bar.columnWidth, 10)), n = b.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? b.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), i = b.globals.padHorizontal + (r - x) / 2), { x: i, y: s, yDivision: o, xDivision: r, barHeight: (d = b.globals.seriesGroups) !== null && d !== void 0 && d.length ? p / b.globals.seriesGroups.length : p, barWidth: (g = b.globals.seriesGroups) !== null && g !== void 0 && g.length ? x / b.globals.seriesGroups.length : x, zeroH: n, zeroW: c };
    } }, { key: "drawStackedBarPaths", value: function(i) {
      for (var s, r = i.indexes, o = i.barHeight, n = i.strokeWidth, c = i.zeroW, d = i.x, g = i.y, p = i.groupIndex, x = i.seriesGroup, b = i.yDivision, y = i.elSeries, A = this.w, S = g + (p !== -1 ? p * o : 0), N = r.i, L = r.j, h = 0, m = 0; m < this.groupCtx.prevXF.length; m++)
        h += this.groupCtx.prevXF[m][L];
      var k = N;
      if (x && (k = x.indexOf(A.config.series[N].name)), k > 0) {
        var C = c;
        this.groupCtx.prevXVal[k - 1][L] < 0 ? C = this.series[N][L] >= 0 ? this.groupCtx.prevX[k - 1][L] + h - 2 * (this.isReversed ? h : 0) : this.groupCtx.prevX[k - 1][L] : this.groupCtx.prevXVal[k - 1][L] >= 0 && (C = this.series[N][L] >= 0 ? this.groupCtx.prevX[k - 1][L] : this.groupCtx.prevX[k - 1][L] - h + 2 * (this.isReversed ? h : 0)), s = C;
      } else
        s = c;
      d = this.series[N][L] === null ? s : s + this.series[N][L] / this.invertedYRatio - 2 * (this.isReversed ? this.series[N][L] / this.invertedYRatio : 0);
      var O = this.barHelpers.getBarpaths({ barYPosition: S, barHeight: o, x1: s, x2: d, strokeWidth: n, series: this.series, realIndex: r.realIndex, seriesGroup: x, i: N, j: L, w: A });
      return this.barHelpers.barBackground({ j: L, i: N, y1: S, y2: o, elSeries: y }), g += b, { pathTo: O.pathTo, pathFrom: O.pathFrom, goalX: this.barHelpers.getGoalValues("x", c, null, N, L), barYPosition: S, x: d, y: g };
    } }, { key: "drawStackedColumnPaths", value: function(i) {
      var s = i.indexes, r = i.x, o = i.y, n = i.xDivision, c = i.barWidth, d = i.zeroH, g = i.groupIndex, p = i.seriesGroup, x = i.elSeries, b = this.w, y = s.i, A = s.j, S = s.bc;
      if (b.globals.isXNumeric) {
        var N = b.globals.seriesX[y][A];
        N || (N = 0), r = (N - b.globals.minX) / this.xRatio - c / 2, b.globals.seriesGroups.length && (r = (N - b.globals.minX) / this.xRatio - c / 2 * b.globals.seriesGroups.length);
      }
      for (var L, h = r + (g !== -1 ? g * c : 0), m = 0, k = 0; k < this.groupCtx.prevYF.length; k++)
        m += isNaN(this.groupCtx.prevYF[k][A]) ? 0 : this.groupCtx.prevYF[k][A];
      var C = y;
      if (p && (C = p.indexOf(b.config.series[y].name)), C > 0 && !b.globals.isXNumeric || C > 0 && b.globals.isXNumeric && b.globals.seriesX[y - 1][A] === b.globals.seriesX[y][A]) {
        var O, I, X, Y = Math.min(this.yRatio.length + 1, y + 1);
        if (this.groupCtx.prevY[C - 1] !== void 0 && this.groupCtx.prevY[C - 1].length)
          for (var W = 1; W < Y; W++) {
            var q;
            if (!isNaN((q = this.groupCtx.prevY[C - W]) === null || q === void 0 ? void 0 : q[A])) {
              X = this.groupCtx.prevY[C - W][A];
              break;
            }
          }
        for (var U = 1; U < Y; U++) {
          var st, dt;
          if (((st = this.groupCtx.prevYVal[C - U]) === null || st === void 0 ? void 0 : st[A]) < 0) {
            I = this.series[y][A] >= 0 ? X - m + 2 * (this.isReversed ? m : 0) : X;
            break;
          }
          if (((dt = this.groupCtx.prevYVal[C - U]) === null || dt === void 0 ? void 0 : dt[A]) >= 0) {
            I = this.series[y][A] >= 0 ? X : X + m - 2 * (this.isReversed ? m : 0);
            break;
          }
        }
        I === void 0 && (I = b.globals.gridHeight), L = (O = this.groupCtx.prevYF[0]) !== null && O !== void 0 && O.every(function(Et) {
          return Et === 0;
        }) && this.groupCtx.prevYF.slice(1, C).every(function(Et) {
          return Et.every(function(Dt) {
            return isNaN(Dt);
          });
        }) ? d : I;
      } else
        L = d;
      o = this.series[y][A] ? L - this.series[y][A] / this.yRatio[this.yaxisIndex] + 2 * (this.isReversed ? this.series[y][A] / this.yRatio[this.yaxisIndex] : 0) : L;
      var bt = this.barHelpers.getColumnPaths({ barXPosition: h, barWidth: c, y1: L, y2: o, yRatio: this.yRatio[this.yaxisIndex], strokeWidth: this.strokeWidth, series: this.series, seriesGroup: p, realIndex: s.realIndex, i: y, j: A, w: b });
      return this.barHelpers.barBackground({ bc: S, j: A, i: y, x1: h, x2: c, elSeries: x }), r += n, { pathTo: bt.pathTo, pathFrom: bt.pathFrom, goalY: this.barHelpers.getGoalValues("y", null, d, y, A), barXPosition: h, x: b.globals.isXNumeric ? r - n : r, y: o };
    } }]), e;
  }(), pa = function(E) {
    z(e, Xi);
    var t = $(e);
    function e() {
      return w(this, e), t.apply(this, arguments);
    }
    return _(e, [{ key: "draw", value: function(i, s, r) {
      var o = this, n = this.w, c = new B(this.ctx), d = n.globals.comboCharts ? s : n.config.chart.type, g = new Kt(this.ctx);
      this.candlestickOptions = this.w.config.plotOptions.candlestick, this.boxOptions = this.w.config.plotOptions.boxPlot, this.isHorizontal = n.config.plotOptions.bar.horizontal;
      var p = new _t(this.ctx, n);
      i = p.getLogSeries(i), this.series = i, this.yRatio = p.getLogYRatios(this.yRatio), this.barHelpers.initVariables(i);
      for (var x = c.group({ class: "apexcharts-".concat(d, "-series apexcharts-plot-series") }), b = function(A) {
        o.isBoxPlot = n.config.chart.type === "boxPlot" || n.config.series[A].type === "boxPlot";
        var S, N, L, h, m = void 0, k = void 0, C = [], O = [], I = n.globals.comboCharts ? r[A] : A, X = c.group({ class: "apexcharts-series", seriesName: F.escapeString(n.globals.seriesNames[I]), rel: A + 1, "data:realIndex": I });
        o.ctx.series.addCollapsedClassToSeries(X, I), i[A].length > 0 && (o.visibleI = o.visibleI + 1);
        var Y, W;
        o.yRatio.length > 1 && (o.yaxisIndex = I);
        var q = o.barHelpers.initialPositions();
        k = q.y, Y = q.barHeight, N = q.yDivision, h = q.zeroW, m = q.x, W = q.barWidth, S = q.xDivision, L = q.zeroH, O.push(m + W / 2);
        for (var U = c.group({ class: "apexcharts-datalabels", "data:realIndex": I }), st = function(bt) {
          var Et = o.barHelpers.getStrokeWidth(A, bt, I), Dt = null, Ot = { indexes: { i: A, j: bt, realIndex: I }, x: m, y: k, strokeWidth: Et, elSeries: X };
          Dt = o.isHorizontal ? o.drawHorizontalBoxPaths(f(f({}, Ot), {}, { yDivision: N, barHeight: Y, zeroW: h })) : o.drawVerticalBoxPaths(f(f({}, Ot), {}, { xDivision: S, barWidth: W, zeroH: L })), k = Dt.y, m = Dt.x, bt > 0 && O.push(m + W / 2), C.push(k), Dt.pathTo.forEach(function(Ht, jt) {
            var Pe = !o.isBoxPlot && o.candlestickOptions.wick.useFillColor ? Dt.color[jt] : n.globals.stroke.colors[A], me = g.fillPath({ seriesNumber: I, dataPointIndex: bt, color: Dt.color[jt], value: i[A][bt] });
            o.renderSeries({ realIndex: I, pathFill: me, lineFill: Pe, j: bt, i: A, pathFrom: Dt.pathFrom, pathTo: Ht, strokeWidth: Et, elSeries: X, x: m, y: k, series: i, barHeight: Y, barWidth: W, elDataLabelsWrap: U, visibleSeries: o.visibleI, type: n.config.chart.type });
          });
        }, dt = 0; dt < n.globals.dataPoints; dt++)
          st(dt);
        n.globals.seriesXvalues[I] = O, n.globals.seriesYvalues[I] = C, x.add(X);
      }, y = 0; y < i.length; y++)
        b(y);
      return x;
    } }, { key: "drawVerticalBoxPaths", value: function(i) {
      var s = i.indexes, r = i.x;
      i.y;
      var o = i.xDivision, n = i.barWidth, c = i.zeroH, d = i.strokeWidth, g = this.w, p = new B(this.ctx), x = s.i, b = s.j, y = !0, A = g.config.plotOptions.candlestick.colors.upward, S = g.config.plotOptions.candlestick.colors.downward, N = "";
      this.isBoxPlot && (N = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
      var L = this.yRatio[this.yaxisIndex], h = s.realIndex, m = this.getOHLCValue(h, b), k = c, C = c;
      m.o > m.c && (y = !1);
      var O = Math.min(m.o, m.c), I = Math.max(m.o, m.c), X = m.m;
      g.globals.isXNumeric && (r = (g.globals.seriesX[h][b] - g.globals.minX) / this.xRatio - n / 2);
      var Y = r + n * this.visibleI;
      this.series[x][b] === void 0 || this.series[x][b] === null ? (O = c, I = c) : (O = c - O / L, I = c - I / L, k = c - m.h / L, C = c - m.l / L, X = c - m.m / L);
      var W = p.move(Y, c), q = p.move(Y + n / 2, O);
      return g.globals.previousPaths.length > 0 && (q = this.getPreviousPath(h, b, !0)), W = this.isBoxPlot ? [p.move(Y, O) + p.line(Y + n / 2, O) + p.line(Y + n / 2, k) + p.line(Y + n / 4, k) + p.line(Y + n - n / 4, k) + p.line(Y + n / 2, k) + p.line(Y + n / 2, O) + p.line(Y + n, O) + p.line(Y + n, X) + p.line(Y, X) + p.line(Y, O + d / 2), p.move(Y, X) + p.line(Y + n, X) + p.line(Y + n, I) + p.line(Y + n / 2, I) + p.line(Y + n / 2, C) + p.line(Y + n - n / 4, C) + p.line(Y + n / 4, C) + p.line(Y + n / 2, C) + p.line(Y + n / 2, I) + p.line(Y, I) + p.line(Y, X) + "z"] : [p.move(Y, I) + p.line(Y + n / 2, I) + p.line(Y + n / 2, k) + p.line(Y + n / 2, I) + p.line(Y + n, I) + p.line(Y + n, O) + p.line(Y + n / 2, O) + p.line(Y + n / 2, C) + p.line(Y + n / 2, O) + p.line(Y, O) + p.line(Y, I - d / 2)], q += p.move(Y, O), g.globals.isXNumeric || (r += o), { pathTo: W, pathFrom: q, x: r, y: I, barXPosition: Y, color: this.isBoxPlot ? N : y ? [A] : [S] };
    } }, { key: "drawHorizontalBoxPaths", value: function(i) {
      var s = i.indexes;
      i.x;
      var r = i.y, o = i.yDivision, n = i.barHeight, c = i.zeroW, d = i.strokeWidth, g = this.w, p = new B(this.ctx), x = s.i, b = s.j, y = this.boxOptions.colors.lower;
      this.isBoxPlot && (y = [this.boxOptions.colors.lower, this.boxOptions.colors.upper]);
      var A = this.invertedYRatio, S = s.realIndex, N = this.getOHLCValue(S, b), L = c, h = c, m = Math.min(N.o, N.c), k = Math.max(N.o, N.c), C = N.m;
      g.globals.isXNumeric && (r = (g.globals.seriesX[S][b] - g.globals.minX) / this.invertedXRatio - n / 2);
      var O = r + n * this.visibleI;
      this.series[x][b] === void 0 || this.series[x][b] === null ? (m = c, k = c) : (m = c + m / A, k = c + k / A, L = c + N.h / A, h = c + N.l / A, C = c + N.m / A);
      var I = p.move(c, O), X = p.move(m, O + n / 2);
      return g.globals.previousPaths.length > 0 && (X = this.getPreviousPath(S, b, !0)), I = [p.move(m, O) + p.line(m, O + n / 2) + p.line(L, O + n / 2) + p.line(L, O + n / 2 - n / 4) + p.line(L, O + n / 2 + n / 4) + p.line(L, O + n / 2) + p.line(m, O + n / 2) + p.line(m, O + n) + p.line(C, O + n) + p.line(C, O) + p.line(m + d / 2, O), p.move(C, O) + p.line(C, O + n) + p.line(k, O + n) + p.line(k, O + n / 2) + p.line(h, O + n / 2) + p.line(h, O + n - n / 4) + p.line(h, O + n / 4) + p.line(h, O + n / 2) + p.line(k, O + n / 2) + p.line(k, O) + p.line(C, O) + "z"], X += p.move(m, O), g.globals.isXNumeric || (r += o), { pathTo: I, pathFrom: X, x: k, y: r, barYPosition: O, color: y };
    } }, { key: "getOHLCValue", value: function(i, s) {
      var r = this.w;
      return { o: this.isBoxPlot ? r.globals.seriesCandleH[i][s] : r.globals.seriesCandleO[i][s], h: this.isBoxPlot ? r.globals.seriesCandleO[i][s] : r.globals.seriesCandleH[i][s], m: r.globals.seriesCandleM[i][s], l: this.isBoxPlot ? r.globals.seriesCandleC[i][s] : r.globals.seriesCandleL[i][s], c: this.isBoxPlot ? r.globals.seriesCandleL[i][s] : r.globals.seriesCandleC[i][s] };
    } }]), e;
  }(), Rr = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "checkColorRange", value: function() {
      var t = this.w, e = !1, i = t.config.plotOptions[t.config.chart.type];
      return i.colorScale.ranges.length > 0 && i.colorScale.ranges.map(function(s, r) {
        s.from <= 0 && (e = !0);
      }), e;
    } }, { key: "getShadeColor", value: function(t, e, i, s) {
      var r = this.w, o = 1, n = r.config.plotOptions[t].shadeIntensity, c = this.determineColor(t, e, i);
      r.globals.hasNegs || s ? o = r.config.plotOptions[t].reverseNegativeShade ? c.percent < 0 ? c.percent / 100 * (1.25 * n) : (1 - c.percent / 100) * (1.25 * n) : c.percent <= 0 ? 1 - (1 + c.percent / 100) * n : (1 - c.percent / 100) * n : (o = 1 - c.percent / 100, t === "treemap" && (o = (1 - c.percent / 100) * (1.25 * n)));
      var d = c.color, g = new F();
      return r.config.plotOptions[t].enableShades && (d = this.w.config.theme.mode === "dark" ? F.hexToRgba(g.shadeColor(-1 * o, c.color), r.config.fill.opacity) : F.hexToRgba(g.shadeColor(o, c.color), r.config.fill.opacity)), { color: d, colorProps: c };
    } }, { key: "determineColor", value: function(t, e, i) {
      var s = this.w, r = s.globals.series[e][i], o = s.config.plotOptions[t], n = o.colorScale.inverse ? i : e;
      o.distributed && s.config.chart.type === "treemap" && (n = i);
      var c = s.globals.colors[n], d = null, g = Math.min.apply(Math, lt(s.globals.series[e])), p = Math.max.apply(Math, lt(s.globals.series[e]));
      o.distributed || t !== "heatmap" || (g = s.globals.minY, p = s.globals.maxY), o.colorScale.min !== void 0 && (g = o.colorScale.min < s.globals.minY ? o.colorScale.min : s.globals.minY, p = o.colorScale.max > s.globals.maxY ? o.colorScale.max : s.globals.maxY);
      var x = Math.abs(p) + Math.abs(g), b = 100 * r / (x === 0 ? x - 1e-6 : x);
      return o.colorScale.ranges.length > 0 && o.colorScale.ranges.map(function(y, A) {
        if (r >= y.from && r <= y.to) {
          c = y.color, d = y.foreColor ? y.foreColor : null, g = y.from, p = y.to;
          var S = Math.abs(p) + Math.abs(g);
          b = 100 * r / (S === 0 ? S - 1e-6 : S);
        }
      }), { color: c, foreColor: d, percent: b };
    } }, { key: "calculateDataLabels", value: function(t) {
      var e = t.text, i = t.x, s = t.y, r = t.i, o = t.j, n = t.colorProps, c = t.fontSize, d = this.w.config.dataLabels, g = new B(this.ctx), p = new Ee(this.ctx), x = null;
      if (d.enabled) {
        x = g.group({ class: "apexcharts-data-labels" });
        var b = d.offsetX, y = d.offsetY, A = i + b, S = s + parseFloat(d.style.fontSize) / 3 + y;
        p.plotDataLabelsText({ x: A, y: S, text: e, i: r, j: o, color: n.foreColor, parent: x, fontSize: c, dataLabelsConfig: d });
      }
      return x;
    } }, { key: "addListeners", value: function(t) {
      var e = new B(this.ctx);
      t.node.addEventListener("mouseenter", e.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", e.pathMouseLeave.bind(this, t)), t.node.addEventListener("mousedown", e.pathMouseDown.bind(this, t));
    } }]), E;
  }(), Rl = function() {
    function E(t, e) {
      w(this, E), this.ctx = t, this.w = t.w, this.xRatio = e.xRatio, this.yRatio = e.yRatio, this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.helpers = new Rr(t), this.rectRadius = this.w.config.plotOptions.heatmap.radius, this.strokeWidth = this.w.config.stroke.show ? this.w.config.stroke.width : 0;
    }
    return _(E, [{ key: "draw", value: function(t) {
      var e = this.w, i = new B(this.ctx), s = i.group({ class: "apexcharts-heatmap" });
      s.attr("clip-path", "url(#gridRectMask".concat(e.globals.cuid, ")"));
      var r = e.globals.gridWidth / e.globals.dataPoints, o = e.globals.gridHeight / e.globals.series.length, n = 0, c = !1;
      this.negRange = this.helpers.checkColorRange();
      var d = t.slice();
      e.config.yaxis[0].reversed && (c = !0, d.reverse());
      for (var g = c ? 0 : d.length - 1; c ? g < d.length : g >= 0; c ? g++ : g--) {
        var p = i.group({ class: "apexcharts-series apexcharts-heatmap-series", seriesName: F.escapeString(e.globals.seriesNames[g]), rel: g + 1, "data:realIndex": g });
        if (this.ctx.series.addCollapsedClassToSeries(p, g), e.config.chart.dropShadow.enabled) {
          var x = e.config.chart.dropShadow;
          new pt(this.ctx).dropShadow(p, x, g);
        }
        for (var b = 0, y = e.config.plotOptions.heatmap.shadeIntensity, A = 0; A < d[g].length; A++) {
          var S = this.helpers.getShadeColor(e.config.chart.type, g, A, this.negRange), N = S.color, L = S.colorProps;
          e.config.fill.type === "image" && (N = new Kt(this.ctx).fillPath({ seriesNumber: g, dataPointIndex: A, opacity: e.globals.hasNegs ? L.percent < 0 ? 1 - (1 + L.percent / 100) : y + L.percent / 100 : L.percent / 100, patternID: F.randomId(), width: e.config.fill.image.width ? e.config.fill.image.width : r, height: e.config.fill.image.height ? e.config.fill.image.height : o }));
          var h = this.rectRadius, m = i.drawRect(b, n, r, o, h);
          if (m.attr({ cx: b, cy: n }), m.node.classList.add("apexcharts-heatmap-rect"), p.add(m), m.attr({ fill: N, i: g, index: g, j: A, val: t[g][A], "stroke-width": this.strokeWidth, stroke: e.config.plotOptions.heatmap.useFillColorAsStroke ? N : e.globals.stroke.colors[0], color: N }), this.helpers.addListeners(m), e.config.chart.animations.enabled && !e.globals.dataChanged) {
            var k = 1;
            e.globals.resized || (k = e.config.chart.animations.speed), this.animateHeatMap(m, b, n, r, o, k);
          }
          if (e.globals.dataChanged) {
            var C = 1;
            if (this.dynamicAnim.enabled && e.globals.shouldAnimate) {
              C = this.dynamicAnim.speed;
              var O = e.globals.previousPaths[g] && e.globals.previousPaths[g][A] && e.globals.previousPaths[g][A].color;
              O || (O = "rgba(255, 255, 255, 0)"), this.animateHeatColor(m, F.isColorHex(O) ? O : F.rgb2hex(O), F.isColorHex(N) ? N : F.rgb2hex(N), C);
            }
          }
          var I = (0, e.config.dataLabels.formatter)(e.globals.series[g][A], { value: e.globals.series[g][A], seriesIndex: g, dataPointIndex: A, w: e }), X = this.helpers.calculateDataLabels({ text: I, x: b + r / 2, y: n + o / 2, i: g, j: A, colorProps: L, series: d });
          X !== null && p.add(X), b += r;
        }
        n += o, s.add(p);
      }
      var Y = e.globals.yAxisScale[0].result.slice();
      return e.config.yaxis[0].reversed ? Y.unshift("") : Y.push(""), e.globals.yAxisScale[0].result = Y, s;
    } }, { key: "animateHeatMap", value: function(t, e, i, s, r, o) {
      var n = new mt(this.ctx);
      n.animateRect(t, { x: e + s / 2, y: i + r / 2, width: 0, height: 0 }, { x: e, y: i, width: s, height: r }, o, function() {
        n.animationCompleted(t);
      });
    } }, { key: "animateHeatColor", value: function(t, e, i, s) {
      t.attr({ fill: e }).animate(s).attr({ fill: i });
    } }]), E;
  }(), zr = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "drawYAxisTexts", value: function(t, e, i, s) {
      var r = this.w, o = r.config.yaxis[0], n = r.globals.yLabelFormatters[0];
      return new B(this.ctx).drawText({ x: t + o.labels.offsetX, y: e + o.labels.offsetY, text: n(s, i), textAnchor: "middle", fontSize: o.labels.style.fontSize, fontFamily: o.labels.style.fontFamily, foreColor: Array.isArray(o.labels.style.colors) ? o.labels.style.colors[i] : o.labels.style.colors });
    } }]), E;
  }(), Fr = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
      var e = this.w;
      this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animBeginArr = [0], this.animDur = 0, this.donutDataLabels = this.w.config.plotOptions.pie.donut.labels, this.lineColorArr = e.globals.stroke.colors !== void 0 ? e.globals.stroke.colors : e.globals.colors, this.defaultSize = Math.min(e.globals.gridWidth, e.globals.gridHeight), this.centerY = this.defaultSize / 2, this.centerX = e.globals.gridWidth / 2, e.config.chart.type === "radialBar" ? this.fullAngle = 360 : this.fullAngle = Math.abs(e.config.plotOptions.pie.endAngle - e.config.plotOptions.pie.startAngle), this.initialAngle = e.config.plotOptions.pie.startAngle % this.fullAngle, e.globals.radialSize = this.defaultSize / 2.05 - e.config.stroke.width - (e.config.chart.sparkline.enabled ? 0 : e.config.chart.dropShadow.blur), this.donutSize = e.globals.radialSize * parseInt(e.config.plotOptions.pie.donut.size, 10) / 100, this.maxY = 0, this.sliceLabels = [], this.sliceSizes = [], this.prevSectorAngleArr = [];
    }
    return _(E, [{ key: "draw", value: function(t) {
      var e = this, i = this.w, s = new B(this.ctx);
      if (this.ret = s.group({ class: "apexcharts-pie" }), i.globals.noData)
        return this.ret;
      for (var r = 0, o = 0; o < t.length; o++)
        r += F.negToZero(t[o]);
      var n = [], c = s.group();
      r === 0 && (r = 1e-5), t.forEach(function(O) {
        e.maxY = Math.max(e.maxY, O);
      }), i.config.yaxis[0].max && (this.maxY = i.config.yaxis[0].max), i.config.grid.position === "back" && this.chartType === "polarArea" && this.drawPolarElements(this.ret);
      for (var d = 0; d < t.length; d++) {
        var g = this.fullAngle * F.negToZero(t[d]) / r;
        n.push(g), this.chartType === "polarArea" ? (n[d] = this.fullAngle / t.length, this.sliceSizes.push(i.globals.radialSize * t[d] / this.maxY)) : this.sliceSizes.push(i.globals.radialSize);
      }
      if (i.globals.dataChanged) {
        for (var p, x = 0, b = 0; b < i.globals.previousPaths.length; b++)
          x += F.negToZero(i.globals.previousPaths[b]);
        for (var y = 0; y < i.globals.previousPaths.length; y++)
          p = this.fullAngle * F.negToZero(i.globals.previousPaths[y]) / x, this.prevSectorAngleArr.push(p);
      }
      this.donutSize < 0 && (this.donutSize = 0);
      var A = i.config.plotOptions.pie.customScale, S = i.globals.gridWidth / 2, N = i.globals.gridHeight / 2, L = S - i.globals.gridWidth / 2 * A, h = N - i.globals.gridHeight / 2 * A;
      if (this.chartType === "donut") {
        var m = s.drawCircle(this.donutSize);
        m.attr({ cx: this.centerX, cy: this.centerY, fill: i.config.plotOptions.pie.donut.background ? i.config.plotOptions.pie.donut.background : "transparent" }), c.add(m);
      }
      var k = this.drawArcs(n, t);
      if (this.sliceLabels.forEach(function(O) {
        k.add(O);
      }), c.attr({ transform: "translate(".concat(L, ", ").concat(h, ") scale(").concat(A, ")") }), c.add(k), this.ret.add(c), this.donutDataLabels.show) {
        var C = this.renderInnerDataLabels(this.donutDataLabels, { hollowSize: this.donutSize, centerX: this.centerX, centerY: this.centerY, opacity: this.donutDataLabels.show, translateX: L, translateY: h });
        this.ret.add(C);
      }
      return i.config.grid.position === "front" && this.chartType === "polarArea" && this.drawPolarElements(this.ret), this.ret;
    } }, { key: "drawArcs", value: function(t, e) {
      var i = this.w, s = new pt(this.ctx), r = new B(this.ctx), o = new Kt(this.ctx), n = r.group({ class: "apexcharts-slices" }), c = this.initialAngle, d = this.initialAngle, g = this.initialAngle, p = this.initialAngle;
      this.strokeWidth = i.config.stroke.show ? i.config.stroke.width : 0;
      for (var x = 0; x < t.length; x++) {
        var b = r.group({ class: "apexcharts-series apexcharts-pie-series", seriesName: F.escapeString(i.globals.seriesNames[x]), rel: x + 1, "data:realIndex": x });
        n.add(b), d = p, g = (c = g) + t[x], p = d + this.prevSectorAngleArr[x];
        var y = g < c ? this.fullAngle + g - c : g - c, A = o.fillPath({ seriesNumber: x, size: this.sliceSizes[x], value: e[x] }), S = this.getChangedPath(d, p), N = r.drawPath({ d: S, stroke: Array.isArray(this.lineColorArr) ? this.lineColorArr[x] : this.lineColorArr, strokeWidth: 0, fill: A, fillOpacity: i.config.fill.opacity, classes: "apexcharts-pie-area apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(x) });
        if (N.attr({ index: 0, j: x }), s.setSelectionFilter(N, 0, x), i.config.chart.dropShadow.enabled) {
          var L = i.config.chart.dropShadow;
          s.dropShadow(N, L, x);
        }
        this.addListeners(N, this.donutDataLabels), B.setAttrs(N.node, { "data:angle": y, "data:startAngle": c, "data:strokeWidth": this.strokeWidth, "data:value": e[x] });
        var h = { x: 0, y: 0 };
        this.chartType === "pie" || this.chartType === "polarArea" ? h = F.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize / 1.25 + i.config.plotOptions.pie.dataLabels.offset, (c + y / 2) % this.fullAngle) : this.chartType === "donut" && (h = F.polarToCartesian(this.centerX, this.centerY, (i.globals.radialSize + this.donutSize) / 2 + i.config.plotOptions.pie.dataLabels.offset, (c + y / 2) % this.fullAngle)), b.add(N);
        var m = 0;
        if (!this.initialAnim || i.globals.resized || i.globals.dataChanged ? this.animBeginArr.push(0) : ((m = y / this.fullAngle * i.config.chart.animations.speed) === 0 && (m = 1), this.animDur = m + this.animDur, this.animBeginArr.push(this.animDur)), this.dynamicAnim && i.globals.dataChanged ? this.animatePaths(N, { size: this.sliceSizes[x], endAngle: g, startAngle: c, prevStartAngle: d, prevEndAngle: p, animateStartingPos: !0, i: x, animBeginArr: this.animBeginArr, shouldSetPrevPaths: !0, dur: i.config.chart.animations.dynamicAnimation.speed }) : this.animatePaths(N, { size: this.sliceSizes[x], endAngle: g, startAngle: c, i: x, totalItems: t.length - 1, animBeginArr: this.animBeginArr, dur: m }), i.config.plotOptions.pie.expandOnClick && this.chartType !== "polarArea" && N.click(this.pieClicked.bind(this, x)), i.globals.selectedDataPoints[0] !== void 0 && i.globals.selectedDataPoints[0].indexOf(x) > -1 && this.pieClicked(x), i.config.dataLabels.enabled) {
          var k = h.x, C = h.y, O = 100 * y / this.fullAngle + "%";
          if (y !== 0 && i.config.plotOptions.pie.dataLabels.minAngleToShowLabel < t[x]) {
            var I = i.config.dataLabels.formatter;
            I !== void 0 && (O = I(i.globals.seriesPercent[x][0], { seriesIndex: x, w: i }));
            var X = i.globals.dataLabels.style.colors[x], Y = r.group({ class: "apexcharts-datalabels" }), W = r.drawText({ x: k, y: C, text: O, textAnchor: "middle", fontSize: i.config.dataLabels.style.fontSize, fontFamily: i.config.dataLabels.style.fontFamily, fontWeight: i.config.dataLabels.style.fontWeight, foreColor: X });
            if (Y.add(W), i.config.dataLabels.dropShadow.enabled) {
              var q = i.config.dataLabels.dropShadow;
              s.dropShadow(W, q);
            }
            W.node.classList.add("apexcharts-pie-label"), i.config.chart.animations.animate && i.globals.resized === !1 && (W.node.classList.add("apexcharts-pie-label-delay"), W.node.style.animationDelay = i.config.chart.animations.speed / 940 + "s"), this.sliceLabels.push(Y);
          }
        }
      }
      return n;
    } }, { key: "addListeners", value: function(t, e) {
      var i = new B(this.ctx);
      t.node.addEventListener("mouseenter", i.pathMouseEnter.bind(this, t)), t.node.addEventListener("mouseleave", i.pathMouseLeave.bind(this, t)), t.node.addEventListener("mouseleave", this.revertDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", i.pathMouseDown.bind(this, t)), this.donutDataLabels.total.showAlways || (t.node.addEventListener("mouseenter", this.printDataLabelsInner.bind(this, t.node, e)), t.node.addEventListener("mousedown", this.printDataLabelsInner.bind(this, t.node, e)));
    } }, { key: "animatePaths", value: function(t, e) {
      var i = this.w, s = e.endAngle < e.startAngle ? this.fullAngle + e.endAngle - e.startAngle : e.endAngle - e.startAngle, r = s, o = e.startAngle, n = e.startAngle;
      e.prevStartAngle !== void 0 && e.prevEndAngle !== void 0 && (o = e.prevEndAngle, r = e.prevEndAngle < e.prevStartAngle ? this.fullAngle + e.prevEndAngle - e.prevStartAngle : e.prevEndAngle - e.prevStartAngle), e.i === i.config.series.length - 1 && (s + n > this.fullAngle ? e.endAngle = e.endAngle - (s + n) : s + n < this.fullAngle && (e.endAngle = e.endAngle + (this.fullAngle - (s + n)))), s === this.fullAngle && (s = this.fullAngle - 0.01), this.animateArc(t, o, n, s, r, e);
    } }, { key: "animateArc", value: function(t, e, i, s, r, o) {
      var n, c = this, d = this.w, g = new mt(this.ctx), p = o.size;
      (isNaN(e) || isNaN(r)) && (e = i, r = s, o.dur = 0);
      var x = s, b = i, y = e < i ? this.fullAngle + e - i : e - i;
      d.globals.dataChanged && o.shouldSetPrevPaths && o.prevEndAngle && (n = c.getPiePath({ me: c, startAngle: o.prevStartAngle, angle: o.prevEndAngle < o.prevStartAngle ? this.fullAngle + o.prevEndAngle - o.prevStartAngle : o.prevEndAngle - o.prevStartAngle, size: p }), t.attr({ d: n })), o.dur !== 0 ? t.animate(o.dur, d.globals.easing, o.animBeginArr[o.i]).afterAll(function() {
        c.chartType !== "pie" && c.chartType !== "donut" && c.chartType !== "polarArea" || this.animate(d.config.chart.animations.dynamicAnimation.speed).attr({ "stroke-width": c.strokeWidth }), o.i === d.config.series.length - 1 && g.animationCompleted(t);
      }).during(function(A) {
        x = y + (s - y) * A, o.animateStartingPos && (x = r + (s - r) * A, b = e - r + (i - (e - r)) * A), n = c.getPiePath({ me: c, startAngle: b, angle: x, size: p }), t.node.setAttribute("data:pathOrig", n), t.attr({ d: n });
      }) : (n = c.getPiePath({ me: c, startAngle: b, angle: s, size: p }), o.isTrack || (d.globals.animationEnded = !0), t.node.setAttribute("data:pathOrig", n), t.attr({ d: n, "stroke-width": c.strokeWidth }));
    } }, { key: "pieClicked", value: function(t) {
      var e, i = this.w, s = this, r = s.sliceSizes[t] + (i.config.plotOptions.pie.expandOnClick ? 4 : 0), o = i.globals.dom.Paper.select(".apexcharts-".concat(s.chartType.toLowerCase(), "-slice-").concat(t)).members[0];
      if (o.attr("data:pieClicked") !== "true") {
        var n = i.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area");
        Array.prototype.forEach.call(n, function(p) {
          p.setAttribute("data:pieClicked", "false");
          var x = p.getAttribute("data:pathOrig");
          x && p.setAttribute("d", x);
        }), o.attr("data:pieClicked", "true");
        var c = parseInt(o.attr("data:startAngle"), 10), d = parseInt(o.attr("data:angle"), 10);
        e = s.getPiePath({ me: s, startAngle: c, angle: d, size: r }), d !== 360 && o.plot(e);
      } else {
        o.attr({ "data:pieClicked": "false" }), this.revertDataLabelsInner(o.node, this.donutDataLabels);
        var g = o.attr("data:pathOrig");
        o.attr({ d: g });
      }
    } }, { key: "getChangedPath", value: function(t, e) {
      var i = "";
      return this.dynamicAnim && this.w.globals.dataChanged && (i = this.getPiePath({ me: this, startAngle: t, angle: e - t, size: this.size })), i;
    } }, { key: "getPiePath", value: function(t) {
      var e, i = t.me, s = t.startAngle, r = t.angle, o = t.size, n = new B(this.ctx), c = s, d = Math.PI * (c - 90) / 180, g = r + s;
      Math.ceil(g) >= this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle && (g = this.fullAngle + this.w.config.plotOptions.pie.startAngle % this.fullAngle - 0.01), Math.ceil(g) > this.fullAngle && (g -= this.fullAngle);
      var p = Math.PI * (g - 90) / 180, x = i.centerX + o * Math.cos(d), b = i.centerY + o * Math.sin(d), y = i.centerX + o * Math.cos(p), A = i.centerY + o * Math.sin(p), S = F.polarToCartesian(i.centerX, i.centerY, i.donutSize, g), N = F.polarToCartesian(i.centerX, i.centerY, i.donutSize, c), L = r > 180 ? 1 : 0, h = ["M", x, b, "A", o, o, 0, L, 1, y, A];
      return e = i.chartType === "donut" ? [].concat(h, ["L", S.x, S.y, "A", i.donutSize, i.donutSize, 0, L, 0, N.x, N.y, "L", x, b, "z"]).join(" ") : i.chartType === "pie" || i.chartType === "polarArea" ? [].concat(h, ["L", i.centerX, i.centerY, "L", x, b]).join(" ") : [].concat(h).join(" "), n.roundPathCorners(e, 2 * this.strokeWidth);
    } }, { key: "drawPolarElements", value: function(t) {
      var e = this.w, i = new Xt(this.ctx), s = new B(this.ctx), r = new zr(this.ctx), o = s.group(), n = s.group(), c = i.niceScale(0, Math.ceil(this.maxY), e.config.yaxis[0].tickAmount, 0, !0), d = c.result.reverse(), g = c.result.length;
      this.maxY = c.niceMax;
      for (var p = e.globals.radialSize, x = p / (g - 1), b = 0; b < g - 1; b++) {
        var y = s.drawCircle(p);
        if (y.attr({ cx: this.centerX, cy: this.centerY, fill: "none", "stroke-width": e.config.plotOptions.polarArea.rings.strokeWidth, stroke: e.config.plotOptions.polarArea.rings.strokeColor }), e.config.yaxis[0].show) {
          var A = r.drawYAxisTexts(this.centerX, this.centerY - p + parseInt(e.config.yaxis[0].labels.style.fontSize, 10) / 2, b, d[b]);
          n.add(A);
        }
        o.add(y), p -= x;
      }
      this.drawSpokes(t), t.add(o), t.add(n);
    } }, { key: "renderInnerDataLabels", value: function(t, e) {
      var i = this.w, s = new B(this.ctx), r = s.group({ class: "apexcharts-datalabels-group", transform: "translate(".concat(e.translateX ? e.translateX : 0, ", ").concat(e.translateY ? e.translateY : 0, ") scale(").concat(i.config.plotOptions.pie.customScale, ")") }), o = t.total.show;
      r.node.style.opacity = e.opacity;
      var n, c, d = e.centerX, g = e.centerY;
      n = t.name.color === void 0 ? i.globals.colors[0] : t.name.color;
      var p = t.name.fontSize, x = t.name.fontFamily, b = t.name.fontWeight;
      c = t.value.color === void 0 ? i.config.chart.foreColor : t.value.color;
      var y = t.value.formatter, A = "", S = "";
      if (o ? (n = t.total.color, p = t.total.fontSize, x = t.total.fontFamily, b = t.total.fontWeight, S = t.total.label, A = t.total.formatter(i)) : i.globals.series.length === 1 && (A = y(i.globals.series[0], i), S = i.globals.seriesNames[0]), S && (S = t.name.formatter(S, t.total.show, i)), t.name.show) {
        var N = s.drawText({ x: d, y: g + parseFloat(t.name.offsetY), text: S, textAnchor: "middle", foreColor: n, fontSize: p, fontWeight: b, fontFamily: x });
        N.node.classList.add("apexcharts-datalabel-label"), r.add(N);
      }
      if (t.value.show) {
        var L = t.name.show ? parseFloat(t.value.offsetY) + 16 : t.value.offsetY, h = s.drawText({ x: d, y: g + L, text: A, textAnchor: "middle", foreColor: c, fontWeight: t.value.fontWeight, fontSize: t.value.fontSize, fontFamily: t.value.fontFamily });
        h.node.classList.add("apexcharts-datalabel-value"), r.add(h);
      }
      return r;
    } }, { key: "printInnerLabels", value: function(t, e, i, s) {
      var r, o = this.w;
      s ? r = t.name.color === void 0 ? o.globals.colors[parseInt(s.parentNode.getAttribute("rel"), 10) - 1] : t.name.color : o.globals.series.length > 1 && t.total.show && (r = t.total.color);
      var n = o.globals.dom.baseEl.querySelector(".apexcharts-datalabel-label"), c = o.globals.dom.baseEl.querySelector(".apexcharts-datalabel-value");
      i = (0, t.value.formatter)(i, o), s || typeof t.total.formatter != "function" || (i = t.total.formatter(o));
      var d = e === t.total.label;
      e = t.name.formatter(e, d, o), n !== null && (n.textContent = e), c !== null && (c.textContent = i), n !== null && (n.style.fill = r);
    } }, { key: "printDataLabelsInner", value: function(t, e) {
      var i = this.w, s = t.getAttribute("data:value"), r = i.globals.seriesNames[parseInt(t.parentNode.getAttribute("rel"), 10) - 1];
      i.globals.series.length > 1 && this.printInnerLabels(e, r, s, t);
      var o = i.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group");
      o !== null && (o.style.opacity = 1);
    } }, { key: "drawSpokes", value: function(t) {
      var e = this, i = this.w, s = new B(this.ctx), r = i.config.plotOptions.polarArea.spokes;
      if (r.strokeWidth !== 0) {
        for (var o = [], n = 360 / i.globals.series.length, c = 0; c < i.globals.series.length; c++)
          o.push(F.polarToCartesian(this.centerX, this.centerY, i.globals.radialSize, i.config.plotOptions.pie.startAngle + n * c));
        o.forEach(function(d, g) {
          var p = s.drawLine(d.x, d.y, e.centerX, e.centerY, Array.isArray(r.connectorColors) ? r.connectorColors[g] : r.connectorColors);
          t.add(p);
        });
      }
    } }, { key: "revertDataLabelsInner", value: function(t, e, i) {
      var s = this, r = this.w, o = r.globals.dom.baseEl.querySelector(".apexcharts-datalabels-group"), n = !1, c = r.globals.dom.baseEl.getElementsByClassName("apexcharts-pie-area"), d = function(x) {
        var b = x.makeSliceOut, y = x.printLabel;
        Array.prototype.forEach.call(c, function(A) {
          A.getAttribute("data:pieClicked") === "true" && (b && (n = !0), y && s.printDataLabelsInner(A, e));
        });
      };
      if (d({ makeSliceOut: !0, printLabel: !1 }), e.total.show && r.globals.series.length > 1)
        n && !e.total.showAlways ? d({ makeSliceOut: !1, printLabel: !0 }) : this.printInnerLabels(e, e.total.label, e.total.formatter(r));
      else if (d({ makeSliceOut: !1, printLabel: !0 }), !n)
        if (r.globals.selectedDataPoints.length && r.globals.series.length > 1)
          if (r.globals.selectedDataPoints[0].length > 0) {
            var g = r.globals.selectedDataPoints[0], p = r.globals.dom.baseEl.querySelector(".apexcharts-".concat(this.chartType.toLowerCase(), "-slice-").concat(g));
            this.printDataLabelsInner(p, e);
          } else
            o && r.globals.selectedDataPoints.length && r.globals.selectedDataPoints[0].length === 0 && (o.style.opacity = 0);
        else
          o && r.globals.series.length > 1 && (o.style.opacity = 0);
    } }]), E;
  }(), zl = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w, this.chartType = this.w.config.chart.type, this.initialAnim = this.w.config.chart.animations.enabled, this.dynamicAnim = this.initialAnim && this.w.config.chart.animations.dynamicAnimation.enabled, this.animDur = 0;
      var e = this.w;
      this.graphics = new B(this.ctx), this.lineColorArr = e.globals.stroke.colors !== void 0 ? e.globals.stroke.colors : e.globals.colors, this.defaultSize = e.globals.svgHeight < e.globals.svgWidth ? e.globals.gridHeight + 1.5 * e.globals.goldenPadding : e.globals.gridWidth, this.isLog = e.config.yaxis[0].logarithmic, this.coreUtils = new _t(this.ctx), this.maxValue = this.isLog ? this.coreUtils.getLogVal(e.globals.maxY, 0) : e.globals.maxY, this.minValue = this.isLog ? this.coreUtils.getLogVal(this.w.globals.minY, 0) : e.globals.minY, this.polygons = e.config.plotOptions.radar.polygons, this.strokeWidth = e.config.stroke.show ? e.config.stroke.width : 0, this.size = this.defaultSize / 2.1 - this.strokeWidth - e.config.chart.dropShadow.blur, e.config.xaxis.labels.show && (this.size = this.size - e.globals.xAxisLabelsWidth / 1.75), e.config.plotOptions.radar.size !== void 0 && (this.size = e.config.plotOptions.radar.size), this.dataRadiusOfPercent = [], this.dataRadius = [], this.angleArr = [], this.yaxisLabelsTextsPos = [];
    }
    return _(E, [{ key: "draw", value: function(t) {
      var e = this, i = this.w, s = new Kt(this.ctx), r = [], o = new Ee(this.ctx);
      t.length && (this.dataPointsLen = t[i.globals.maxValsInArrayIndex].length), this.disAngle = 2 * Math.PI / this.dataPointsLen;
      var n = i.globals.gridWidth / 2, c = i.globals.gridHeight / 2, d = n + i.config.plotOptions.radar.offsetX, g = c + i.config.plotOptions.radar.offsetY, p = this.graphics.group({ class: "apexcharts-radar-series apexcharts-plot-series", transform: "translate(".concat(d || 0, ", ").concat(g || 0, ")") }), x = [], b = null, y = null;
      if (this.yaxisLabels = this.graphics.group({ class: "apexcharts-yaxis" }), t.forEach(function(S, N) {
        var L = S.length === i.globals.dataPoints, h = e.graphics.group().attr({ class: "apexcharts-series", "data:longestSeries": L, seriesName: F.escapeString(i.globals.seriesNames[N]), rel: N + 1, "data:realIndex": N });
        e.dataRadiusOfPercent[N] = [], e.dataRadius[N] = [], e.angleArr[N] = [], S.forEach(function(U, st) {
          var dt = Math.abs(e.maxValue - e.minValue);
          U += Math.abs(e.minValue), e.isLog && (U = e.coreUtils.getLogVal(U, 0)), e.dataRadiusOfPercent[N][st] = U / dt, e.dataRadius[N][st] = e.dataRadiusOfPercent[N][st] * e.size, e.angleArr[N][st] = st * e.disAngle;
        }), x = e.getDataPointsPos(e.dataRadius[N], e.angleArr[N]);
        var m = e.createPaths(x, { x: 0, y: 0 });
        b = e.graphics.group({ class: "apexcharts-series-markers-wrap apexcharts-element-hidden" }), y = e.graphics.group({ class: "apexcharts-datalabels", "data:realIndex": N }), i.globals.delayedElements.push({ el: b.node, index: N });
        var k = { i: N, realIndex: N, animationDelay: N, initialSpeed: i.config.chart.animations.speed, dataChangeSpeed: i.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-radar", shouldClipToGrid: !1, bindEventsOnPaths: !1, stroke: i.globals.stroke.colors[N], strokeLineCap: i.config.stroke.lineCap }, C = null;
        i.globals.previousPaths.length > 0 && (C = e.getPreviousPath(N));
        for (var O = 0; O < m.linePathsTo.length; O++) {
          var I = e.graphics.renderPaths(f(f({}, k), {}, { pathFrom: C === null ? m.linePathsFrom[O] : C, pathTo: m.linePathsTo[O], strokeWidth: Array.isArray(e.strokeWidth) ? e.strokeWidth[N] : e.strokeWidth, fill: "none", drawShadow: !1 }));
          h.add(I);
          var X = s.fillPath({ seriesNumber: N }), Y = e.graphics.renderPaths(f(f({}, k), {}, { pathFrom: C === null ? m.areaPathsFrom[O] : C, pathTo: m.areaPathsTo[O], strokeWidth: 0, fill: X, drawShadow: !1 }));
          if (i.config.chart.dropShadow.enabled) {
            var W = new pt(e.ctx), q = i.config.chart.dropShadow;
            W.dropShadow(Y, Object.assign({}, q, { noUserSpaceOnUse: !0 }), N);
          }
          h.add(Y);
        }
        S.forEach(function(U, st) {
          var dt = new oe(e.ctx).getMarkerConfig({ cssClass: "apexcharts-marker", seriesIndex: N, dataPointIndex: st }), bt = e.graphics.drawMarker(x[st].x, x[st].y, dt);
          bt.attr("rel", st), bt.attr("j", st), bt.attr("index", N), bt.node.setAttribute("default-marker-size", dt.pSize);
          var Et = e.graphics.group({ class: "apexcharts-series-markers" });
          Et && Et.add(bt), b.add(Et), h.add(b);
          var Dt = i.config.dataLabels;
          if (Dt.enabled) {
            var Ot = Dt.formatter(i.globals.series[N][st], { seriesIndex: N, dataPointIndex: st, w: i });
            o.plotDataLabelsText({ x: x[st].x, y: x[st].y, text: Ot, textAnchor: "middle", i: N, j: N, parent: y, offsetCorrection: !1, dataLabelsConfig: f({}, Dt) });
          }
          h.add(y);
        }), r.push(h);
      }), this.drawPolygons({ parent: p }), i.config.xaxis.labels.show) {
        var A = this.drawXAxisTexts();
        p.add(A);
      }
      return r.forEach(function(S) {
        p.add(S);
      }), p.add(this.yaxisLabels), p;
    } }, { key: "drawPolygons", value: function(t) {
      for (var e = this, i = this.w, s = t.parent, r = new zr(this.ctx), o = i.globals.yAxisScale[0].result.reverse(), n = o.length, c = [], d = this.size / (n - 1), g = 0; g < n; g++)
        c[g] = d * g;
      c.reverse();
      var p = [], x = [];
      c.forEach(function(b, y) {
        var A = F.getPolygonPos(b, e.dataPointsLen), S = "";
        A.forEach(function(N, L) {
          if (y === 0) {
            var h = e.graphics.drawLine(N.x, N.y, 0, 0, Array.isArray(e.polygons.connectorColors) ? e.polygons.connectorColors[L] : e.polygons.connectorColors);
            x.push(h);
          }
          L === 0 && e.yaxisLabelsTextsPos.push({ x: N.x, y: N.y }), S += N.x + "," + N.y + " ";
        }), p.push(S);
      }), p.forEach(function(b, y) {
        var A = e.polygons.strokeColors, S = e.polygons.strokeWidth, N = e.graphics.drawPolygon(b, Array.isArray(A) ? A[y] : A, Array.isArray(S) ? S[y] : S, i.globals.radarPolygons.fill.colors[y]);
        s.add(N);
      }), x.forEach(function(b) {
        s.add(b);
      }), i.config.yaxis[0].show && this.yaxisLabelsTextsPos.forEach(function(b, y) {
        var A = r.drawYAxisTexts(b.x, b.y, y, o[y]);
        e.yaxisLabels.add(A);
      });
    } }, { key: "drawXAxisTexts", value: function() {
      var t = this, e = this.w, i = e.config.xaxis.labels, s = this.graphics.group({ class: "apexcharts-xaxis" }), r = F.getPolygonPos(this.size, this.dataPointsLen);
      return e.globals.labels.forEach(function(o, n) {
        var c = e.config.xaxis.labels.formatter, d = new Ee(t.ctx);
        if (r[n]) {
          var g = t.getTextPos(r[n], t.size), p = c(o, { seriesIndex: -1, dataPointIndex: n, w: e });
          d.plotDataLabelsText({ x: g.newX, y: g.newY, text: p, textAnchor: g.textAnchor, i: n, j: n, parent: s, color: Array.isArray(i.style.colors) && i.style.colors[n] ? i.style.colors[n] : "#a8a8a8", dataLabelsConfig: f({ textAnchor: g.textAnchor, dropShadow: { enabled: !1 } }, i), offsetCorrection: !1 });
        }
      }), s;
    } }, { key: "createPaths", value: function(t, e) {
      var i = this, s = [], r = [], o = [], n = [];
      if (t.length) {
        r = [this.graphics.move(e.x, e.y)], n = [this.graphics.move(e.x, e.y)];
        var c = this.graphics.move(t[0].x, t[0].y), d = this.graphics.move(t[0].x, t[0].y);
        t.forEach(function(g, p) {
          c += i.graphics.line(g.x, g.y), d += i.graphics.line(g.x, g.y), p === t.length - 1 && (c += "Z", d += "Z");
        }), s.push(c), o.push(d);
      }
      return { linePathsFrom: r, linePathsTo: s, areaPathsFrom: n, areaPathsTo: o };
    } }, { key: "getTextPos", value: function(t, e) {
      var i = "middle", s = t.x, r = t.y;
      return Math.abs(t.x) >= 10 ? t.x > 0 ? (i = "start", s += 10) : t.x < 0 && (i = "end", s -= 10) : i = "middle", Math.abs(t.y) >= e - 10 && (t.y < 0 ? r -= 10 : t.y > 0 && (r += 10)), { textAnchor: i, newX: s, newY: r };
    } }, { key: "getPreviousPath", value: function(t) {
      for (var e = this.w, i = null, s = 0; s < e.globals.previousPaths.length; s++) {
        var r = e.globals.previousPaths[s];
        r.paths.length > 0 && parseInt(r.realIndex, 10) === parseInt(t, 10) && e.globals.previousPaths[s].paths[0] !== void 0 && (i = e.globals.previousPaths[s].paths[0].d);
      }
      return i;
    } }, { key: "getDataPointsPos", value: function(t, e) {
      var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this.dataPointsLen;
      t = t || [], e = e || [];
      for (var s = [], r = 0; r < i; r++) {
        var o = {};
        o.x = t[r] * Math.sin(e[r]), o.y = -t[r] * Math.cos(e[r]), s.push(o);
      }
      return s;
    } }]), E;
  }(), Fl = function(E) {
    z(e, Fr);
    var t = $(e);
    function e(i) {
      var s;
      w(this, e), (s = t.call(this, i)).ctx = i, s.w = i.w, s.animBeginArr = [0], s.animDur = 0;
      var r = s.w;
      return s.startAngle = r.config.plotOptions.radialBar.startAngle, s.endAngle = r.config.plotOptions.radialBar.endAngle, s.totalAngle = Math.abs(r.config.plotOptions.radialBar.endAngle - r.config.plotOptions.radialBar.startAngle), s.trackStartAngle = r.config.plotOptions.radialBar.track.startAngle, s.trackEndAngle = r.config.plotOptions.radialBar.track.endAngle, s.barLabels = s.w.config.plotOptions.radialBar.barLabels, s.donutDataLabels = s.w.config.plotOptions.radialBar.dataLabels, s.radialDataLabels = s.donutDataLabels, s.trackStartAngle || (s.trackStartAngle = s.startAngle), s.trackEndAngle || (s.trackEndAngle = s.endAngle), s.endAngle === 360 && (s.endAngle = 359.99), s.margin = parseInt(r.config.plotOptions.radialBar.track.margin, 10), s.onBarLabelClick = s.onBarLabelClick.bind(V(s)), s;
    }
    return _(e, [{ key: "draw", value: function(i) {
      var s = this.w, r = new B(this.ctx), o = r.group({ class: "apexcharts-radialbar" });
      if (s.globals.noData)
        return o;
      var n = r.group(), c = this.defaultSize / 2, d = s.globals.gridWidth / 2, g = this.defaultSize / 2.05;
      s.config.chart.sparkline.enabled || (g = g - s.config.stroke.width - s.config.chart.dropShadow.blur);
      var p = s.globals.fill.colors;
      if (s.config.plotOptions.radialBar.track.show) {
        var x = this.drawTracks({ size: g, centerX: d, centerY: c, colorArr: p, series: i });
        n.add(x);
      }
      var b = this.drawArcs({ size: g, centerX: d, centerY: c, colorArr: p, series: i }), y = 360;
      s.config.plotOptions.radialBar.startAngle < 0 && (y = this.totalAngle);
      var A = (360 - y) / 360;
      if (s.globals.radialSize = g - g * A, this.radialDataLabels.value.show) {
        var S = Math.max(this.radialDataLabels.value.offsetY, this.radialDataLabels.name.offsetY);
        s.globals.radialSize += S * A;
      }
      return n.add(b.g), s.config.plotOptions.radialBar.hollow.position === "front" && (b.g.add(b.elHollow), b.dataLabels && b.g.add(b.dataLabels)), o.add(n), o;
    } }, { key: "drawTracks", value: function(i) {
      var s = this.w, r = new B(this.ctx), o = r.group({ class: "apexcharts-tracks" }), n = new pt(this.ctx), c = new Kt(this.ctx), d = this.getStrokeWidth(i);
      i.size = i.size - d / 2;
      for (var g = 0; g < i.series.length; g++) {
        var p = r.group({ class: "apexcharts-radialbar-track apexcharts-track" });
        o.add(p), p.attr({ rel: g + 1 }), i.size = i.size - d - this.margin;
        var x = s.config.plotOptions.radialBar.track, b = c.fillPath({ seriesNumber: 0, size: i.size, fillColors: Array.isArray(x.background) ? x.background[g] : x.background, solid: !0 }), y = this.trackStartAngle, A = this.trackEndAngle;
        Math.abs(A) + Math.abs(y) >= 360 && (A = 360 - Math.abs(this.startAngle) - 0.1);
        var S = r.drawPath({ d: "", stroke: b, strokeWidth: d * parseInt(x.strokeWidth, 10) / 100, fill: "none", strokeOpacity: x.opacity, classes: "apexcharts-radialbar-area" });
        if (x.dropShadow.enabled) {
          var N = x.dropShadow;
          n.dropShadow(S, N);
        }
        p.add(S), S.attr("id", "apexcharts-radialbarTrack-" + g), this.animatePaths(S, { centerX: i.centerX, centerY: i.centerY, endAngle: A, startAngle: y, size: i.size, i: g, totalItems: 2, animBeginArr: 0, dur: 0, isTrack: !0, easing: s.globals.easing });
      }
      return o;
    } }, { key: "drawArcs", value: function(i) {
      var s = this.w, r = new B(this.ctx), o = new Kt(this.ctx), n = new pt(this.ctx), c = r.group(), d = this.getStrokeWidth(i);
      i.size = i.size - d / 2;
      var g = s.config.plotOptions.radialBar.hollow.background, p = i.size - d * i.series.length - this.margin * i.series.length - d * parseInt(s.config.plotOptions.radialBar.track.strokeWidth, 10) / 100 / 2, x = p - s.config.plotOptions.radialBar.hollow.margin;
      s.config.plotOptions.radialBar.hollow.image !== void 0 && (g = this.drawHollowImage(i, c, p, g));
      var b = this.drawHollow({ size: x, centerX: i.centerX, centerY: i.centerY, fill: g || "transparent" });
      if (s.config.plotOptions.radialBar.hollow.dropShadow.enabled) {
        var y = s.config.plotOptions.radialBar.hollow.dropShadow;
        n.dropShadow(b, y);
      }
      var A = 1;
      !this.radialDataLabels.total.show && s.globals.series.length > 1 && (A = 0);
      var S = null;
      this.radialDataLabels.show && (S = this.renderInnerDataLabels(this.radialDataLabels, { hollowSize: p, centerX: i.centerX, centerY: i.centerY, opacity: A })), s.config.plotOptions.radialBar.hollow.position === "back" && (c.add(b), S && c.add(S));
      var N = !1;
      s.config.plotOptions.radialBar.inverseOrder && (N = !0);
      for (var L = N ? i.series.length - 1 : 0; N ? L >= 0 : L < i.series.length; N ? L-- : L++) {
        var h = r.group({ class: "apexcharts-series apexcharts-radial-series", seriesName: F.escapeString(s.globals.seriesNames[L]) });
        c.add(h), h.attr({ rel: L + 1, "data:realIndex": L }), this.ctx.series.addCollapsedClassToSeries(h, L), i.size = i.size - d - this.margin;
        var m = o.fillPath({ seriesNumber: L, size: i.size, value: i.series[L] }), k = this.startAngle, C = void 0, O = F.negToZero(i.series[L] > 100 ? 100 : i.series[L]) / 100, I = Math.round(this.totalAngle * O) + this.startAngle, X = void 0;
        s.globals.dataChanged && (C = this.startAngle, X = Math.round(this.totalAngle * F.negToZero(s.globals.previousPaths[L]) / 100) + C), Math.abs(I) + Math.abs(k) >= 360 && (I -= 0.01), Math.abs(X) + Math.abs(C) >= 360 && (X -= 0.01);
        var Y = I - k, W = Array.isArray(s.config.stroke.dashArray) ? s.config.stroke.dashArray[L] : s.config.stroke.dashArray, q = r.drawPath({ d: "", stroke: m, strokeWidth: d, fill: "none", fillOpacity: s.config.fill.opacity, classes: "apexcharts-radialbar-area apexcharts-radialbar-slice-" + L, strokeDashArray: W });
        if (B.setAttrs(q.node, { "data:angle": Y, "data:value": i.series[L] }), s.config.chart.dropShadow.enabled) {
          var U = s.config.chart.dropShadow;
          n.dropShadow(q, U, L);
        }
        if (n.setSelectionFilter(q, 0, L), this.addListeners(q, this.radialDataLabels), h.add(q), q.attr({ index: 0, j: L }), this.barLabels.enabled) {
          var st = F.polarToCartesian(i.centerX, i.centerY, i.size, k), dt = this.barLabels.formatter(s.globals.seriesNames[L], { seriesIndex: L, w: s }), bt = ["apexcharts-radialbar-label"];
          this.barLabels.onClick || bt.push("apexcharts-no-click");
          var Et = this.barLabels.useSeriesColors ? s.globals.colors[L] : s.config.chart.foreColor;
          Et || (Et = s.config.chart.foreColor);
          var Dt = st.x - this.barLabels.margin, Ot = st.y, Ht = r.drawText({ x: Dt, y: Ot, text: dt, textAnchor: "end", dominantBaseline: "middle", fontFamily: this.barLabels.fontFamily, fontWeight: this.barLabels.fontWeight, fontSize: this.barLabels.fontSize, foreColor: Et, cssClass: bt.join(" ") });
          Ht.on("click", this.onBarLabelClick), Ht.attr({ rel: L + 1 }), k !== 0 && Ht.attr({ "transform-origin": "".concat(Dt, " ").concat(Ot), transform: "rotate(".concat(k, " 0 0)") }), h.add(Ht);
        }
        var jt = 0;
        !this.initialAnim || s.globals.resized || s.globals.dataChanged || (jt = s.config.chart.animations.speed), s.globals.dataChanged && (jt = s.config.chart.animations.dynamicAnimation.speed), this.animDur = jt / (1.2 * i.series.length) + this.animDur, this.animBeginArr.push(this.animDur), this.animatePaths(q, { centerX: i.centerX, centerY: i.centerY, endAngle: I, startAngle: k, prevEndAngle: X, prevStartAngle: C, size: i.size, i: L, totalItems: 2, animBeginArr: this.animBeginArr, dur: jt, shouldSetPrevPaths: !0, easing: s.globals.easing });
      }
      return { g: c, elHollow: b, dataLabels: S };
    } }, { key: "drawHollow", value: function(i) {
      var s = new B(this.ctx).drawCircle(2 * i.size);
      return s.attr({ class: "apexcharts-radialbar-hollow", cx: i.centerX, cy: i.centerY, r: i.size, fill: i.fill }), s;
    } }, { key: "drawHollowImage", value: function(i, s, r, o) {
      var n = this.w, c = new Kt(this.ctx), d = F.randomId(), g = n.config.plotOptions.radialBar.hollow.image;
      if (n.config.plotOptions.radialBar.hollow.imageClipped)
        c.clippedImgArea({ width: r, height: r, image: g, patternID: "pattern".concat(n.globals.cuid).concat(d) }), o = "url(#pattern".concat(n.globals.cuid).concat(d, ")");
      else {
        var p = n.config.plotOptions.radialBar.hollow.imageWidth, x = n.config.plotOptions.radialBar.hollow.imageHeight;
        if (p === void 0 && x === void 0) {
          var b = n.globals.dom.Paper.image(g).loaded(function(A) {
            this.move(i.centerX - A.width / 2 + n.config.plotOptions.radialBar.hollow.imageOffsetX, i.centerY - A.height / 2 + n.config.plotOptions.radialBar.hollow.imageOffsetY);
          });
          s.add(b);
        } else {
          var y = n.globals.dom.Paper.image(g).loaded(function(A) {
            this.move(i.centerX - p / 2 + n.config.plotOptions.radialBar.hollow.imageOffsetX, i.centerY - x / 2 + n.config.plotOptions.radialBar.hollow.imageOffsetY), this.size(p, x);
          });
          s.add(y);
        }
      }
      return o;
    } }, { key: "getStrokeWidth", value: function(i) {
      var s = this.w;
      return i.size * (100 - parseInt(s.config.plotOptions.radialBar.hollow.size, 10)) / 100 / (i.series.length + 1) - this.margin;
    } }, { key: "onBarLabelClick", value: function(i) {
      var s = parseInt(i.target.getAttribute("rel"), 10) - 1, r = this.barLabels.onClick, o = this.w;
      r && r(o.globals.seriesNames[s], { w: o, seriesIndex: s });
    } }]), e;
  }(), Xl = function(E) {
    z(e, Xi);
    var t = $(e);
    function e() {
      return w(this, e), t.apply(this, arguments);
    }
    return _(e, [{ key: "draw", value: function(i, s) {
      var r = this.w, o = new B(this.ctx);
      this.rangeBarOptions = this.w.config.plotOptions.rangeBar, this.series = i, this.seriesRangeStart = r.globals.seriesRangeStart, this.seriesRangeEnd = r.globals.seriesRangeEnd, this.barHelpers.initVariables(i);
      for (var n = o.group({ class: "apexcharts-rangebar-series apexcharts-plot-series" }), c = 0; c < i.length; c++) {
        var d, g, p, x, b = void 0, y = void 0, A = r.globals.comboCharts ? s[c] : c, S = o.group({ class: "apexcharts-series", seriesName: F.escapeString(r.globals.seriesNames[A]), rel: c + 1, "data:realIndex": A });
        this.ctx.series.addCollapsedClassToSeries(S, A), i[c].length > 0 && (this.visibleI = this.visibleI + 1);
        var N = 0, L = 0;
        this.yRatio.length > 1 && (this.yaxisIndex = A);
        var h = this.barHelpers.initialPositions();
        y = h.y, x = h.zeroW, b = h.x, L = h.barWidth, N = h.barHeight, d = h.xDivision, g = h.yDivision, p = h.zeroH;
        for (var m = o.group({ class: "apexcharts-datalabels", "data:realIndex": A }), k = o.group({ class: "apexcharts-rangebar-goals-markers" }), C = 0; C < r.globals.dataPoints; C++) {
          var O, I = this.barHelpers.getStrokeWidth(c, C, A), X = this.seriesRangeStart[c][C], Y = this.seriesRangeEnd[c][C], W = null, q = null, U = null, st = { x: b, y, strokeWidth: I, elSeries: S }, dt = this.seriesLen;
          if (r.config.plotOptions.bar.rangeBarGroupRows && (dt = 1), r.config.series[c].data[C] === void 0)
            break;
          if (this.isHorizontal) {
            U = y + N * this.visibleI;
            var bt = (g - N * dt) / 2;
            if (r.config.series[c].data[C].x) {
              var Et = this.detectOverlappingBars({ i: c, j: C, barYPosition: U, srty: bt, barHeight: N, yDivision: g, initPositions: h });
              N = Et.barHeight, U = Et.barYPosition;
            }
            L = (W = this.drawRangeBarPaths(f({ indexes: { i: c, j: C, realIndex: A }, barHeight: N, barYPosition: U, zeroW: x, yDivision: g, y1: X, y2: Y }, st))).barWidth;
          } else {
            r.globals.isXNumeric && (b = (r.globals.seriesX[c][C] - r.globals.minX) / this.xRatio - L / 2), q = b + L * this.visibleI;
            var Dt = (d - L * dt) / 2;
            if (r.config.series[c].data[C].x) {
              var Ot = this.detectOverlappingBars({ i: c, j: C, barXPosition: q, srtx: Dt, barWidth: L, xDivision: d, initPositions: h });
              L = Ot.barWidth, q = Ot.barXPosition;
            }
            N = (W = this.drawRangeColumnPaths(f({ indexes: { i: c, j: C, realIndex: A }, barWidth: L, barXPosition: q, zeroH: p, xDivision: d }, st))).barHeight;
          }
          var Ht = this.barHelpers.drawGoalLine({ barXPosition: W.barXPosition, barYPosition: U, goalX: W.goalX, goalY: W.goalY, barHeight: N, barWidth: L });
          Ht && k.add(Ht), y = W.y, b = W.x;
          var jt = this.barHelpers.getPathFillColor(i, c, C, A), Pe = r.globals.stroke.colors[A];
          this.renderSeries((T(O = { realIndex: A, pathFill: jt, lineFill: Pe, j: C, i: c, x: b, y, y1: X, y2: Y, pathFrom: W.pathFrom, pathTo: W.pathTo, strokeWidth: I, elSeries: S, series: i, barHeight: N, barWidth: L, barXPosition: q, barYPosition: U }, "barWidth", L), T(O, "elDataLabelsWrap", m), T(O, "elGoalsMarkers", k), T(O, "visibleSeries", this.visibleI), T(O, "type", "rangebar"), O));
        }
        n.add(S);
      }
      return n;
    } }, { key: "detectOverlappingBars", value: function(i) {
      var s = i.i, r = i.j, o = i.barYPosition, n = i.barXPosition, c = i.srty, d = i.srtx, g = i.barHeight, p = i.barWidth, x = i.yDivision, b = i.xDivision, y = i.initPositions, A = this.w, S = [], N = A.config.series[s].data[r].rangeName, L = A.config.series[s].data[r].x, h = Array.isArray(L) ? L.join(" ") : L, m = A.globals.labels.map(function(C) {
        return Array.isArray(C) ? C.join(" ") : C;
      }).indexOf(h), k = A.globals.seriesRange[s].findIndex(function(C) {
        return C.x === h && C.overlaps.length > 0;
      });
      return this.isHorizontal ? (o = A.config.plotOptions.bar.rangeBarGroupRows ? c + x * m : c + g * this.visibleI + x * m, k > -1 && !A.config.plotOptions.bar.rangeBarOverlap && (S = A.globals.seriesRange[s][k].overlaps).indexOf(N) > -1 && (o = (g = y.barHeight / S.length) * this.visibleI + x * (100 - parseInt(this.barOptions.barHeight, 10)) / 100 / 2 + g * (this.visibleI + S.indexOf(N)) + x * m)) : (m > -1 && (n = A.config.plotOptions.bar.rangeBarGroupRows ? d + b * m : d + p * this.visibleI + b * m), k > -1 && !A.config.plotOptions.bar.rangeBarOverlap && (S = A.globals.seriesRange[s][k].overlaps).indexOf(N) > -1 && (n = (p = y.barWidth / S.length) * this.visibleI + b * (100 - parseInt(this.barOptions.barWidth, 10)) / 100 / 2 + p * (this.visibleI + S.indexOf(N)) + b * m)), { barYPosition: o, barXPosition: n, barHeight: g, barWidth: p };
    } }, { key: "drawRangeColumnPaths", value: function(i) {
      var s = i.indexes, r = i.x, o = i.xDivision, n = i.barWidth, c = i.barXPosition, d = i.zeroH, g = this.w, p = s.i, x = s.j, b = this.yRatio[this.yaxisIndex], y = s.realIndex, A = this.getRangeValue(y, x), S = Math.min(A.start, A.end), N = Math.max(A.start, A.end);
      this.series[p][x] === void 0 || this.series[p][x] === null ? S = d : (S = d - S / b, N = d - N / b);
      var L = Math.abs(N - S), h = this.barHelpers.getColumnPaths({ barXPosition: c, barWidth: n, y1: S, y2: N, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, realIndex: s.realIndex, i: y, j: x, w: g });
      if (g.globals.isXNumeric) {
        var m = this.getBarXForNumericXAxis({ x: r, j: x, realIndex: y, barWidth: n });
        r = m.x, c = m.barXPosition;
      } else
        r += o;
      return { pathTo: h.pathTo, pathFrom: h.pathFrom, barHeight: L, x: r, y: N, goalY: this.barHelpers.getGoalValues("y", null, d, p, x), barXPosition: c };
    } }, { key: "drawRangeBarPaths", value: function(i) {
      var s = i.indexes, r = i.y, o = i.y1, n = i.y2, c = i.yDivision, d = i.barHeight, g = i.barYPosition, p = i.zeroW, x = this.w, b = p + o / this.invertedYRatio, y = p + n / this.invertedYRatio, A = Math.abs(y - b), S = this.barHelpers.getBarpaths({ barYPosition: g, barHeight: d, x1: b, x2: y, strokeWidth: this.strokeWidth, series: this.seriesRangeEnd, i: s.realIndex, realIndex: s.realIndex, j: s.j, w: x });
      return x.globals.isXNumeric || (r += c), { pathTo: S.pathTo, pathFrom: S.pathFrom, barWidth: A, x: y, goalX: this.barHelpers.getGoalValues("x", p, null, s.realIndex, s.j), y: r };
    } }, { key: "getRangeValue", value: function(i, s) {
      var r = this.w;
      return { start: r.globals.seriesRangeStart[i][s], end: r.globals.seriesRangeEnd[i][s] };
    } }]), e;
  }(), Yl = function() {
    function E(t) {
      w(this, E), this.w = t.w, this.lineCtx = t;
    }
    return _(E, [{ key: "sameValueSeriesFix", value: function(t, e) {
      var i = this.w;
      if ((i.config.fill.type === "gradient" || i.config.fill.type[t] === "gradient") && new _t(this.lineCtx.ctx, i).seriesHaveSameValues(t)) {
        var s = e[t].slice();
        s[s.length - 1] = s[s.length - 1] + 1e-6, e[t] = s;
      }
      return e;
    } }, { key: "calculatePoints", value: function(t) {
      var e = t.series, i = t.realIndex, s = t.x, r = t.y, o = t.i, n = t.j, c = t.prevY, d = this.w, g = [], p = [];
      if (n === 0) {
        var x = this.lineCtx.categoryAxisCorrection + d.config.markers.offsetX;
        d.globals.isXNumeric && (x = (d.globals.seriesX[i][0] - d.globals.minX) / this.lineCtx.xRatio + d.config.markers.offsetX), g.push(x), p.push(F.isNumber(e[o][0]) ? c + d.config.markers.offsetY : null), g.push(s + d.config.markers.offsetX), p.push(F.isNumber(e[o][n + 1]) ? r + d.config.markers.offsetY : null);
      } else
        g.push(s + d.config.markers.offsetX), p.push(F.isNumber(e[o][n + 1]) ? r + d.config.markers.offsetY : null);
      return { x: g, y: p };
    } }, { key: "checkPreviousPaths", value: function(t) {
      for (var e = t.pathFromLine, i = t.pathFromArea, s = t.realIndex, r = this.w, o = 0; o < r.globals.previousPaths.length; o++) {
        var n = r.globals.previousPaths[o];
        (n.type === "line" || n.type === "area") && n.paths.length > 0 && parseInt(n.realIndex, 10) === parseInt(s, 10) && (n.type === "line" ? (this.lineCtx.appendPathFrom = !1, e = r.globals.previousPaths[o].paths[0].d) : n.type === "area" && (this.lineCtx.appendPathFrom = !1, i = r.globals.previousPaths[o].paths[0].d, r.config.stroke.show && r.globals.previousPaths[o].paths[1] && (e = r.globals.previousPaths[o].paths[1].d)));
      }
      return { pathFromLine: e, pathFromArea: i };
    } }, { key: "determineFirstPrevY", value: function(t) {
      var e, i, s = t.i, r = t.series, o = t.prevY, n = t.lineYPosition, c = this.w, d = c.config.chart.stacked && !c.globals.comboCharts || c.config.chart.stacked && c.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || ((e = this.w.config.series[s]) === null || e === void 0 ? void 0 : e.type) === "bar");
      if (((i = r[s]) === null || i === void 0 ? void 0 : i[0]) !== void 0)
        o = (n = d && s > 0 ? this.lineCtx.prevSeriesY[s - 1][0] : this.lineCtx.zeroY) - r[s][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] + 2 * (this.lineCtx.isReversed ? r[s][0] / this.lineCtx.yRatio[this.lineCtx.yaxisIndex] : 0);
      else if (d && s > 0 && r[s][0] === void 0) {
        for (var g = s - 1; g >= 0; g--)
          if (r[g][0] !== null && r[g][0] !== void 0) {
            o = n = this.lineCtx.prevSeriesY[g][0];
            break;
          }
      }
      return { prevY: o, lineYPosition: n };
    } }]), E;
  }(), Hl = function(E) {
    for (var t, e, i, s, r = function(g) {
      for (var p = [], x = g[0], b = g[1], y = p[0] = ma(x, b), A = 1, S = g.length - 1; A < S; A++)
        x = b, b = g[A + 1], p[A] = 0.5 * (y + (y = ma(x, b)));
      return p[A] = y, p;
    }(E), o = E.length - 1, n = [], c = 0; c < o; c++)
      i = ma(E[c], E[c + 1]), Math.abs(i) < 1e-6 ? r[c] = r[c + 1] = 0 : (s = (t = r[c] / i) * t + (e = r[c + 1] / i) * e) > 9 && (s = 3 * i / Math.sqrt(s), r[c] = s * t, r[c + 1] = s * e);
    for (var d = 0; d <= o; d++)
      s = (E[Math.min(o, d + 1)][0] - E[Math.max(0, d - 1)][0]) / (6 * (1 + r[d] * r[d])), n.push([s || 0, r[d] * s || 0]);
    return n;
  }, xa = function(E) {
    for (var t = "", e = 0; e < E.length; e++) {
      var i = E[e], s = i.length;
      s > 4 ? (t += "C".concat(i[0], ", ").concat(i[1]), t += ", ".concat(i[2], ", ").concat(i[3]), t += ", ".concat(i[4], ", ").concat(i[5])) : s > 2 && (t += "S".concat(i[0], ", ").concat(i[1]), t += ", ".concat(i[2], ", ").concat(i[3]));
    }
    return t;
  }, Xr = function(E) {
    var t = Hl(E), e = E[1], i = E[0], s = [], r = t[1], o = t[0];
    s.push(i, [i[0] + o[0], i[1] + o[1], e[0] - r[0], e[1] - r[1], e[0], e[1]]);
    for (var n = 2, c = t.length; n < c; n++) {
      var d = E[n], g = t[n];
      s.push([d[0] - g[0], d[1] - g[1], d[0], d[1]]);
    }
    return s;
  };
  function ma(E, t) {
    return (t[1] - E[1]) / (t[0] - E[0]);
  }
  var ba = function() {
    function E(t, e, i) {
      w(this, E), this.ctx = t, this.w = t.w, this.xyRatios = e, this.pointsChart = !(this.w.config.chart.type !== "bubble" && this.w.config.chart.type !== "scatter") || i, this.scatter = new Ce(this.ctx), this.noNegatives = this.w.globals.minX === Number.MAX_VALUE, this.lineHelpers = new Yl(this), this.markers = new oe(this.ctx), this.prevSeriesY = [], this.categoryAxisCorrection = 0, this.yaxisIndex = 0;
    }
    return _(E, [{ key: "draw", value: function(t, e, i, s) {
      var r, o = this.w, n = new B(this.ctx), c = o.globals.comboCharts ? e : o.config.chart.type, d = n.group({ class: "apexcharts-".concat(c, "-series apexcharts-plot-series") }), g = new _t(this.ctx, o);
      this.yRatio = this.xyRatios.yRatio, this.zRatio = this.xyRatios.zRatio, this.xRatio = this.xyRatios.xRatio, this.baseLineY = this.xyRatios.baseLineY, t = g.getLogSeries(t), this.yRatio = g.getLogYRatios(this.yRatio);
      for (var p = [], x = 0; x < t.length; x++) {
        t = this.lineHelpers.sameValueSeriesFix(x, t);
        var b = o.globals.comboCharts ? i[x] : x;
        this._initSerieVariables(t, x, b);
        var y = [], A = [], S = [], N = o.globals.padHorizontal + this.categoryAxisCorrection;
        this.ctx.series.addCollapsedClassToSeries(this.elSeries, b), o.globals.isXNumeric && o.globals.seriesX.length > 0 && (N = (o.globals.seriesX[b][0] - o.globals.minX) / this.xRatio), S.push(N);
        var L, h = N, m = void 0, k = h, C = this.zeroY, O = this.zeroY;
        C = this.lineHelpers.determineFirstPrevY({ i: x, series: t, prevY: C, lineYPosition: 0 }).prevY, o.config.stroke.curve === "monotonCubic" && t[x][0] === null ? y.push(null) : y.push(C), L = C, c === "rangeArea" && (m = O = this.lineHelpers.determineFirstPrevY({ i: x, series: s, prevY: O, lineYPosition: 0 }).prevY, A.push(O));
        var I = { type: c, series: t, realIndex: b, i: x, x: N, y: 1, pX: h, pY: L, pathsFrom: this._calculatePathsFrom({ type: c, series: t, i: x, realIndex: b, prevX: k, prevY: C, prevY2: O }), linePaths: [], areaPaths: [], seriesIndex: i, lineYPosition: 0, xArrj: S, yArrj: y, y2Arrj: A, seriesRangeEnd: s }, X = this._iterateOverDataPoints(f(f({}, I), {}, { iterations: c === "rangeArea" ? t[x].length - 1 : void 0, isRangeStart: !0 }));
        if (c === "rangeArea") {
          var Y = this._calculatePathsFrom({ series: s, i: x, realIndex: b, prevX: k, prevY: O }), W = this._iterateOverDataPoints(f(f({}, I), {}, { series: s, pY: m, pathsFrom: Y, iterations: s[x].length - 1, isRangeStart: !1 }));
          X.linePaths[0] = W.linePath + X.linePath, X.pathFromLine = W.pathFromLine + X.pathFromLine;
        }
        this._handlePaths({ type: c, realIndex: b, i: x, paths: X }), this.elSeries.add(this.elPointsMain), this.elSeries.add(this.elDataLabelsWrap), p.push(this.elSeries);
      }
      if (((r = o.config.series[0]) === null || r === void 0 ? void 0 : r.zIndex) !== void 0 && p.sort(function(st, dt) {
        return Number(st.node.getAttribute("zIndex")) - Number(dt.node.getAttribute("zIndex"));
      }), o.config.chart.stacked)
        for (var q = p.length; q > 0; q--)
          d.add(p[q - 1]);
      else
        for (var U = 0; U < p.length; U++)
          d.add(p[U]);
      return d;
    } }, { key: "_initSerieVariables", value: function(t, e, i) {
      var s = this.w, r = new B(this.ctx);
      this.xDivision = s.globals.gridWidth / (s.globals.dataPoints - (s.config.xaxis.tickPlacement === "on" ? 1 : 0)), this.strokeWidth = Array.isArray(s.config.stroke.width) ? s.config.stroke.width[i] : s.config.stroke.width, this.yRatio.length > 1 && (this.yaxisIndex = i), this.isReversed = s.config.yaxis[this.yaxisIndex] && s.config.yaxis[this.yaxisIndex].reversed, this.zeroY = s.globals.gridHeight - this.baseLineY[this.yaxisIndex] - (this.isReversed ? s.globals.gridHeight : 0) + (this.isReversed ? 2 * this.baseLineY[this.yaxisIndex] : 0), this.areaBottomY = this.zeroY, (this.zeroY > s.globals.gridHeight || s.config.plotOptions.area.fillTo === "end") && (this.areaBottomY = s.globals.gridHeight), this.categoryAxisCorrection = this.xDivision / 2, this.elSeries = r.group({ class: "apexcharts-series", zIndex: s.config.series[i].zIndex !== void 0 ? s.config.series[i].zIndex : i, seriesName: F.escapeString(s.globals.seriesNames[i]) }), this.elPointsMain = r.group({ class: "apexcharts-series-markers-wrap", "data:realIndex": i }), this.elDataLabelsWrap = r.group({ class: "apexcharts-datalabels", "data:realIndex": i });
      var o = t[e].length === s.globals.dataPoints;
      this.elSeries.attr({ "data:longestSeries": o, rel: e + 1, "data:realIndex": i }), this.appendPathFrom = !0;
    } }, { key: "_calculatePathsFrom", value: function(t) {
      var e, i, s, r, o = t.type, n = t.series, c = t.i, d = t.realIndex, g = t.prevX, p = t.prevY, x = t.prevY2, b = this.w, y = new B(this.ctx);
      if (n[c][0] === null) {
        for (var A = 0; A < n[c].length; A++)
          if (n[c][A] !== null) {
            g = this.xDivision * A, p = this.zeroY - n[c][A] / this.yRatio[this.yaxisIndex], e = y.move(g, p), i = y.move(g, this.areaBottomY);
            break;
          }
      } else
        e = y.move(g, p), o === "rangeArea" && (e = y.move(g, x) + y.line(g, p)), i = y.move(g, this.areaBottomY) + y.line(g, p);
      if (s = y.move(-1, this.zeroY) + y.line(-1, this.zeroY), r = y.move(-1, this.zeroY) + y.line(-1, this.zeroY), b.globals.previousPaths.length > 0) {
        var S = this.lineHelpers.checkPreviousPaths({ pathFromLine: s, pathFromArea: r, realIndex: d });
        s = S.pathFromLine, r = S.pathFromArea;
      }
      return { prevX: g, prevY: p, linePath: e, areaPath: i, pathFromLine: s, pathFromArea: r };
    } }, { key: "_handlePaths", value: function(t) {
      var e = t.type, i = t.realIndex, s = t.i, r = t.paths, o = this.w, n = new B(this.ctx), c = new Kt(this.ctx);
      this.prevSeriesY.push(r.yArrj), o.globals.seriesXvalues[i] = r.xArrj, o.globals.seriesYvalues[i] = r.yArrj;
      var d = o.config.forecastDataPoints;
      if (d.count > 0 && e !== "rangeArea") {
        var g = o.globals.seriesXvalues[i][o.globals.seriesXvalues[i].length - d.count - 1], p = n.drawRect(g, 0, o.globals.gridWidth, o.globals.gridHeight, 0);
        o.globals.dom.elForecastMask.appendChild(p.node);
        var x = n.drawRect(0, 0, g, o.globals.gridHeight, 0);
        o.globals.dom.elNonForecastMask.appendChild(x.node);
      }
      this.pointsChart || o.globals.delayedElements.push({ el: this.elPointsMain.node, index: i });
      var b = { i: s, realIndex: i, animationDelay: s, initialSpeed: o.config.chart.animations.speed, dataChangeSpeed: o.config.chart.animations.dynamicAnimation.speed, className: "apexcharts-".concat(e) };
      if (e === "area")
        for (var y = c.fillPath({ seriesNumber: i }), A = 0; A < r.areaPaths.length; A++) {
          var S = n.renderPaths(f(f({}, b), {}, { pathFrom: r.pathFromArea, pathTo: r.areaPaths[A], stroke: "none", strokeWidth: 0, strokeLineCap: null, fill: y }));
          this.elSeries.add(S);
        }
      if (o.config.stroke.show && !this.pointsChart) {
        var N = null;
        if (e === "line")
          N = c.fillPath({ seriesNumber: i, i: s });
        else if (o.config.stroke.fill.type === "solid")
          N = o.globals.stroke.colors[i];
        else {
          var L = o.config.fill;
          o.config.fill = o.config.stroke.fill, N = c.fillPath({ seriesNumber: i, i: s }), o.config.fill = L;
        }
        for (var h = 0; h < r.linePaths.length; h++) {
          var m = N;
          e === "rangeArea" && (m = c.fillPath({ seriesNumber: i }));
          var k = f(f({}, b), {}, { pathFrom: r.pathFromLine, pathTo: r.linePaths[h], stroke: N, strokeWidth: this.strokeWidth, strokeLineCap: o.config.stroke.lineCap, fill: e === "rangeArea" ? m : "none" }), C = n.renderPaths(k);
          if (this.elSeries.add(C), C.attr("fill-rule", "evenodd"), d.count > 0 && e !== "rangeArea") {
            var O = n.renderPaths(k);
            O.node.setAttribute("stroke-dasharray", d.dashArray), d.strokeWidth && O.node.setAttribute("stroke-width", d.strokeWidth), this.elSeries.add(O), O.attr("clip-path", "url(#forecastMask".concat(o.globals.cuid, ")")), C.attr("clip-path", "url(#nonForecastMask".concat(o.globals.cuid, ")"));
          }
        }
      }
    } }, { key: "_iterateOverDataPoints", value: function(t) {
      var e, i = this, s = t.type, r = t.series, o = t.iterations, n = t.realIndex, c = t.i, d = t.x, g = t.y, p = t.pX, x = t.pY, b = t.pathsFrom, y = t.linePaths, A = t.areaPaths, S = t.seriesIndex, N = t.lineYPosition, L = t.xArrj, h = t.yArrj, m = t.y2Arrj, k = t.isRangeStart, C = t.seriesRangeEnd, O = this.w, I = new B(this.ctx), X = this.yRatio, Y = b.prevY, W = b.linePath, q = b.areaPath, U = b.pathFromLine, st = b.pathFromArea, dt = F.isNumber(O.globals.minYArr[n]) ? O.globals.minYArr[n] : O.globals.minY;
      o || (o = O.globals.dataPoints > 1 ? O.globals.dataPoints - 1 : O.globals.dataPoints);
      for (var bt = function(Ge, je) {
        return je - Ge / X[i.yaxisIndex] + 2 * (i.isReversed ? Ge / X[i.yaxisIndex] : 0);
      }, Et = g, Dt = O.config.chart.stacked && !O.globals.comboCharts || O.config.chart.stacked && O.globals.comboCharts && (!this.w.config.chart.stackOnlyBar || ((e = this.w.config.series[n]) === null || e === void 0 ? void 0 : e.type) === "bar"), Ot = 0; Ot < o; Ot++) {
        var Ht = r[c][Ot + 1] === void 0 || r[c][Ot + 1] === null;
        if (O.globals.isXNumeric) {
          var jt = O.globals.seriesX[n][Ot + 1];
          O.globals.seriesX[n][Ot + 1] === void 0 && (jt = O.globals.seriesX[n][o - 1]), d = (jt - O.globals.minX) / this.xRatio;
        } else
          d += this.xDivision;
        Dt ? c > 0 && O.globals.collapsedSeries.length < O.config.series.length - 1 ? N = this.prevSeriesY[function(Ge) {
          for (var je = Ge, he = 0; he < O.globals.series.length; he++)
            if (O.globals.collapsedSeriesIndices.indexOf(Ge) > -1) {
              je--;
              break;
            }
          return je >= 0 ? je : 0;
        }(c - 1)][Ot + 1] : N = this.zeroY : N = this.zeroY, Ht ? g = bt(dt, N) : (g = bt(r[c][Ot + 1], N), s === "rangeArea" && (Et = bt(C[c][Ot + 1], N))), L.push(d), Ht && O.config.stroke.curve === "smooth" ? h.push(null) : h.push(g), m.push(Et);
        var Pe = this.lineHelpers.calculatePoints({ series: r, x: d, y: g, realIndex: n, i: c, j: Ot, prevY: Y }), me = this._createPaths({ type: s, series: r, i: c, realIndex: n, j: Ot, x: d, y: g, y2: Et, xArrj: L, yArrj: h, y2Arrj: m, pX: p, pY: x, linePath: W, areaPath: q, linePaths: y, areaPaths: A, seriesIndex: S, isRangeStart: k });
        A = me.areaPaths, y = me.linePaths, p = me.pX, x = me.pY, q = me.areaPath, W = me.linePath, !this.appendPathFrom || O.config.stroke.curve === "monotoneCubic" && s === "rangeArea" || (U += I.line(d, this.zeroY), st += I.line(d, this.zeroY)), this.handleNullDataPoints(r, Pe, c, Ot, n), this._handleMarkersAndLabels({ type: s, pointsPos: Pe, i: c, j: Ot, realIndex: n, isRangeStart: k });
      }
      return { yArrj: h, xArrj: L, pathFromArea: st, areaPaths: A, pathFromLine: U, linePaths: y, linePath: W, areaPath: q };
    } }, { key: "_handleMarkersAndLabels", value: function(t) {
      var e = t.type, i = t.pointsPos, s = t.isRangeStart, r = t.i, o = t.j, n = t.realIndex, c = this.w, d = new Ee(this.ctx);
      if (this.pointsChart)
        this.scatter.draw(this.elSeries, o, { realIndex: n, pointsPos: i, zRatio: this.zRatio, elParent: this.elPointsMain });
      else {
        c.globals.series[r].length > 1 && this.elPointsMain.node.classList.add("apexcharts-element-hidden");
        var g = this.markers.plotChartMarkers(i, n, o + 1);
        g !== null && this.elPointsMain.add(g);
      }
      var p = d.drawDataLabel({ type: e, isRangeStart: s, pos: i, i: n, j: o + 1 });
      p !== null && this.elDataLabelsWrap.add(p);
    } }, { key: "_createPaths", value: function(t) {
      var e = t.type, i = t.series, s = t.i, r = t.realIndex, o = t.j, n = t.x, c = t.y, d = t.xArrj, g = t.yArrj, p = t.y2, x = t.y2Arrj, b = t.pX, y = t.pY, A = t.linePath, S = t.areaPath, N = t.linePaths, L = t.areaPaths, h = t.seriesIndex, m = t.isRangeStart, k = this.w, C = new B(this.ctx), O = k.config.stroke.curve, I = this.areaBottomY;
      if (Array.isArray(k.config.stroke.curve) && (O = Array.isArray(h) ? k.config.stroke.curve[h[s]] : k.config.stroke.curve[s]), e === "rangeArea" && (k.globals.hasNullValues || k.config.forecastDataPoints.count > 0) && O === "monotoneCubic" && (O = "straight"), O === "monotoneCubic") {
        var X = e === "rangeArea" ? d.length === k.globals.dataPoints : o === i[s].length - 2, Y = d.map(function(Dt, Ot) {
          return [d[Ot], g[Ot]];
        }).filter(function(Dt) {
          return Dt[1] !== null;
        });
        if (X && Y.length > 1) {
          var W = Xr(Y);
          if (A += xa(W), i[s][0] === null ? S = A : S += xa(W), e === "rangeArea" && m) {
            A += C.line(d[d.length - 1], x[x.length - 1]);
            var q = d.slice().reverse(), U = x.slice().reverse(), st = q.map(function(Dt, Ot) {
              return [q[Ot], U[Ot]];
            }), dt = Xr(st);
            S = A += xa(dt);
          } else
            S += C.line(Y[Y.length - 1][0], I) + C.line(Y[0][0], I) + C.move(Y[0][0], Y[0][1]) + "z";
          N.push(A), L.push(S);
        }
      } else if (O === "smooth") {
        var bt = 0.35 * (n - b);
        k.globals.hasNullValues ? (i[s][o] !== null && (i[s][o + 1] !== null ? (A = C.move(b, y) + C.curve(b + bt, y, n - bt, c, n + 1, c), S = C.move(b + 1, y) + C.curve(b + bt, y, n - bt, c, n + 1, c) + C.line(n, I) + C.line(b, I) + "z") : (A = C.move(b, y), S = C.move(b, y) + "z")), N.push(A), L.push(S)) : (A += C.curve(b + bt, y, n - bt, c, n, c), S += C.curve(b + bt, y, n - bt, c, n, c)), b = n, y = c, o === i[s].length - 2 && (S = S + C.curve(b, y, n, c, n, I) + C.move(n, c) + "z", e === "rangeArea" && m ? A = A + C.curve(b, y, n, c, n, p) + C.move(n, p) + "z" : k.globals.hasNullValues || (N.push(A), L.push(S)));
      } else {
        if (i[s][o + 1] === null) {
          A += C.move(n, c);
          var Et = k.globals.isXNumeric ? (k.globals.seriesX[r][o] - k.globals.minX) / this.xRatio : n - this.xDivision;
          S = S + C.line(Et, I) + C.move(n, c) + "z";
        }
        i[s][o] === null && (A += C.move(n, c), S += C.move(n, I)), O === "stepline" ? (A = A + C.line(n, null, "H") + C.line(null, c, "V"), S = S + C.line(n, null, "H") + C.line(null, c, "V")) : O === "straight" && (A += C.line(n, c), S += C.line(n, c)), o === i[s].length - 2 && (S = S + C.line(n, I) + C.move(n, c) + "z", e === "rangeArea" && m ? A = A + C.line(n, p) + C.move(n, p) + "z" : (N.push(A), L.push(S)));
      }
      return { linePaths: N, areaPaths: L, pX: b, pY: y, linePath: A, areaPath: S };
    } }, { key: "handleNullDataPoints", value: function(t, e, i, s, r) {
      var o = this.w;
      if (t[i][s] === null && o.config.markers.showNullDataPoints || t[i].length === 1) {
        var n = this.markers.plotChartMarkers(e, r, s + 1, this.strokeWidth - o.config.markers.strokeWidth / 2, !0);
        n !== null && this.elPointsMain.add(n);
      }
    } }]), E;
  }();
  window.TreemapSquared = {}, window.TreemapSquared.generate = /* @__PURE__ */ function() {
    function E(n, c, d, g) {
      this.xoffset = n, this.yoffset = c, this.height = g, this.width = d, this.shortestEdge = function() {
        return Math.min(this.height, this.width);
      }, this.getCoordinates = function(p) {
        var x, b = [], y = this.xoffset, A = this.yoffset, S = r(p) / this.height, N = r(p) / this.width;
        if (this.width >= this.height)
          for (x = 0; x < p.length; x++)
            b.push([y, A, y + S, A + p[x] / S]), A += p[x] / S;
        else
          for (x = 0; x < p.length; x++)
            b.push([y, A, y + p[x] / N, A + N]), y += p[x] / N;
        return b;
      }, this.cutArea = function(p) {
        var x;
        if (this.width >= this.height) {
          var b = p / this.height, y = this.width - b;
          x = new E(this.xoffset + b, this.yoffset, y, this.height);
        } else {
          var A = p / this.width, S = this.height - A;
          x = new E(this.xoffset, this.yoffset + A, this.width, S);
        }
        return x;
      };
    }
    function t(n, c, d, g, p) {
      g = g === void 0 ? 0 : g, p = p === void 0 ? 0 : p;
      var x = e(function(b, y) {
        var A, S = [], N = y / r(b);
        for (A = 0; A < b.length; A++)
          S[A] = b[A] * N;
        return S;
      }(n, c * d), [], new E(g, p, c, d), []);
      return function(b) {
        var y, A, S = [];
        for (y = 0; y < b.length; y++)
          for (A = 0; A < b[y].length; A++)
            S.push(b[y][A]);
        return S;
      }(x);
    }
    function e(n, c, d, g) {
      var p, x, b;
      if (n.length !== 0)
        return p = d.shortestEdge(), function(y, A, S) {
          var N;
          if (y.length === 0)
            return !0;
          (N = y.slice()).push(A);
          var L = i(y, S), h = i(N, S);
          return L >= h;
        }(c, x = n[0], p) ? (c.push(x), e(n.slice(1), c, d, g)) : (b = d.cutArea(r(c), g), g.push(d.getCoordinates(c)), e(n, [], b, g)), g;
      g.push(d.getCoordinates(c));
    }
    function i(n, c) {
      var d = Math.min.apply(Math, n), g = Math.max.apply(Math, n), p = r(n);
      return Math.max(Math.pow(c, 2) * g / Math.pow(p, 2), Math.pow(p, 2) / (Math.pow(c, 2) * d));
    }
    function s(n) {
      return n && n.constructor === Array;
    }
    function r(n) {
      var c, d = 0;
      for (c = 0; c < n.length; c++)
        d += n[c];
      return d;
    }
    function o(n) {
      var c, d = 0;
      if (s(n[0]))
        for (c = 0; c < n.length; c++)
          d += o(n[c]);
      else
        d = r(n);
      return d;
    }
    return function n(c, d, g, p, x) {
      p = p === void 0 ? 0 : p, x = x === void 0 ? 0 : x;
      var b, y, A = [], S = [];
      if (s(c[0])) {
        for (y = 0; y < c.length; y++)
          A[y] = o(c[y]);
        for (b = t(A, d, g, p, x), y = 0; y < c.length; y++)
          S.push(n(c[y], b[y][2] - b[y][0], b[y][3] - b[y][1], b[y][0], b[y][1]));
      } else
        S = t(c, d, g, p, x);
      return S;
    };
  }();
  var wi, ws, Vl = function() {
    function E(t, e) {
      w(this, E), this.ctx = t, this.w = t.w, this.strokeWidth = this.w.config.stroke.width, this.helpers = new Rr(t), this.dynamicAnim = this.w.config.chart.animations.dynamicAnimation, this.labels = [];
    }
    return _(E, [{ key: "draw", value: function(t) {
      var e = this, i = this.w, s = new B(this.ctx), r = new Kt(this.ctx), o = s.group({ class: "apexcharts-treemap" });
      if (i.globals.noData)
        return o;
      var n = [];
      return t.forEach(function(c) {
        var d = c.map(function(g) {
          return Math.abs(g);
        });
        n.push(d);
      }), this.negRange = this.helpers.checkColorRange(), i.config.series.forEach(function(c, d) {
        c.data.forEach(function(g) {
          Array.isArray(e.labels[d]) || (e.labels[d] = []), e.labels[d].push(g.x);
        });
      }), window.TreemapSquared.generate(n, i.globals.gridWidth, i.globals.gridHeight).forEach(function(c, d) {
        var g = s.group({ class: "apexcharts-series apexcharts-treemap-series", seriesName: F.escapeString(i.globals.seriesNames[d]), rel: d + 1, "data:realIndex": d });
        if (i.config.chart.dropShadow.enabled) {
          var p = i.config.chart.dropShadow;
          new pt(e.ctx).dropShadow(o, p, d);
        }
        var x = s.group({ class: "apexcharts-data-labels" });
        c.forEach(function(b, y) {
          var A = b[0], S = b[1], N = b[2], L = b[3], h = s.drawRect(A, S, N - A, L - S, i.config.plotOptions.treemap.borderRadius, "#fff", 1, e.strokeWidth, i.config.plotOptions.treemap.useFillColorAsStroke ? k : i.globals.stroke.colors[d]);
          h.attr({ cx: A, cy: S, index: d, i: d, j: y, width: N - A, height: L - S });
          var m = e.helpers.getShadeColor(i.config.chart.type, d, y, e.negRange), k = m.color;
          i.config.series[d].data[y] !== void 0 && i.config.series[d].data[y].fillColor && (k = i.config.series[d].data[y].fillColor);
          var C = r.fillPath({ color: k, seriesNumber: d, dataPointIndex: y });
          h.node.classList.add("apexcharts-treemap-rect"), h.attr({ fill: C }), e.helpers.addListeners(h);
          var O = { x: A + (N - A) / 2, y: S + (L - S) / 2, width: 0, height: 0 }, I = { x: A, y: S, width: N - A, height: L - S };
          if (i.config.chart.animations.enabled && !i.globals.dataChanged) {
            var X = 1;
            i.globals.resized || (X = i.config.chart.animations.speed), e.animateTreemap(h, O, I, X);
          }
          if (i.globals.dataChanged) {
            var Y = 1;
            e.dynamicAnim.enabled && i.globals.shouldAnimate && (Y = e.dynamicAnim.speed, i.globals.previousPaths[d] && i.globals.previousPaths[d][y] && i.globals.previousPaths[d][y].rect && (O = i.globals.previousPaths[d][y].rect), e.animateTreemap(h, O, I, Y));
          }
          var W = e.getFontSize(b), q = i.config.dataLabels.formatter(e.labels[d][y], { value: i.globals.series[d][y], seriesIndex: d, dataPointIndex: y, w: i });
          i.config.plotOptions.treemap.dataLabels.format === "truncate" && (W = parseInt(i.config.dataLabels.style.fontSize, 10), q = e.truncateLabels(q, W, A, S, N, L));
          var U = e.helpers.calculateDataLabels({ text: q, x: (A + N) / 2, y: (S + L) / 2 + e.strokeWidth / 2 + W / 3, i: d, j: y, colorProps: m, fontSize: W, series: t });
          i.config.dataLabels.enabled && U && e.rotateToFitLabel(U, W, q, A, S, N, L), g.add(h), U !== null && g.add(U);
        }), g.add(x), o.add(g);
      }), o;
    } }, { key: "getFontSize", value: function(t) {
      var e = this.w, i, s, r, o, n = function c(d) {
        var g, p = 0;
        if (Array.isArray(d[0]))
          for (g = 0; g < d.length; g++)
            p += c(d[g]);
        else
          for (g = 0; g < d.length; g++)
            p += d[g].length;
        return p;
      }(this.labels) / function c(d) {
        var g, p = 0;
        if (Array.isArray(d[0]))
          for (g = 0; g < d.length; g++)
            p += c(d[g]);
        else
          for (g = 0; g < d.length; g++)
            p += 1;
        return p;
      }(this.labels);
      return i = t[2] - t[0], s = t[3] - t[1], r = i * s, o = Math.pow(r, 0.5), Math.min(o / n, parseInt(e.config.dataLabels.style.fontSize, 10));
    } }, { key: "rotateToFitLabel", value: function(t, e, i, s, r, o, n) {
      var c = new B(this.ctx), d = c.getTextRects(i, e);
      if (d.width + this.w.config.stroke.width + 5 > o - s && d.width <= n - r) {
        var g = c.rotateAroundCenter(t.node);
        t.node.setAttribute("transform", "rotate(-90 ".concat(g.x, " ").concat(g.y, ") translate(").concat(d.height / 3, ")"));
      }
    } }, { key: "truncateLabels", value: function(t, e, i, s, r, o) {
      var n = new B(this.ctx), c = n.getTextRects(t, e).width + this.w.config.stroke.width + 5 > r - i && o - s > r - i ? o - s : r - i, d = n.getTextBasedOnMaxWidth({ text: t, maxWidth: c, fontSize: e });
      return t.length !== d.length && c / e < 5 ? "" : d;
    } }, { key: "animateTreemap", value: function(t, e, i, s) {
      var r = new mt(this.ctx);
      r.animateRect(t, { x: e.x, y: e.y, width: e.width, height: e.height }, { x: i.x, y: i.y, width: i.width, height: i.height }, s, function() {
        r.animationCompleted(t);
      });
    } }]), E;
  }(), Wl = 86400, Bl = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w, this.timeScaleArray = [], this.utc = this.w.config.xaxis.labels.datetimeUTC;
    }
    return _(E, [{ key: "calculateTimeScaleTicks", value: function(t, e) {
      var i = this, s = this.w;
      if (s.globals.allSeriesCollapsed)
        return s.globals.labels = [], s.globals.timescaleLabels = [], [];
      var r = new Mt(this.ctx), o = (e - t) / 864e5;
      this.determineInterval(o), s.globals.disableZoomIn = !1, s.globals.disableZoomOut = !1, o < 11574074074074075e-20 ? s.globals.disableZoomIn = !0 : o > 5e4 && (s.globals.disableZoomOut = !0);
      var n = r.getTimeUnitsfromTimestamp(t, e, this.utc), c = s.globals.gridWidth / o, d = c / 24, g = d / 60, p = g / 60, x = Math.floor(24 * o), b = Math.floor(1440 * o), y = Math.floor(o * Wl), A = Math.floor(o), S = Math.floor(o / 30), N = Math.floor(o / 365), L = { minMillisecond: n.minMillisecond, minSecond: n.minSecond, minMinute: n.minMinute, minHour: n.minHour, minDate: n.minDate, minMonth: n.minMonth, minYear: n.minYear }, h = { firstVal: L, currentMillisecond: L.minMillisecond, currentSecond: L.minSecond, currentMinute: L.minMinute, currentHour: L.minHour, currentMonthDate: L.minDate, currentDate: L.minDate, currentMonth: L.minMonth, currentYear: L.minYear, daysWidthOnXAxis: c, hoursWidthOnXAxis: d, minutesWidthOnXAxis: g, secondsWidthOnXAxis: p, numberOfSeconds: y, numberOfMinutes: b, numberOfHours: x, numberOfDays: A, numberOfMonths: S, numberOfYears: N };
      switch (this.tickInterval) {
        case "years":
          this.generateYearScale(h);
          break;
        case "months":
        case "half_year":
          this.generateMonthScale(h);
          break;
        case "months_days":
        case "months_fortnight":
        case "days":
        case "week_days":
          this.generateDayScale(h);
          break;
        case "hours":
          this.generateHourScale(h);
          break;
        case "minutes_fives":
        case "minutes":
          this.generateMinuteScale(h);
          break;
        case "seconds_tens":
        case "seconds_fives":
        case "seconds":
          this.generateSecondScale(h);
      }
      var m = this.timeScaleArray.map(function(k) {
        var C = { position: k.position, unit: k.unit, year: k.year, day: k.day ? k.day : 1, hour: k.hour ? k.hour : 0, month: k.month + 1 };
        return k.unit === "month" ? f(f({}, C), {}, { day: 1, value: k.value + 1 }) : k.unit === "day" || k.unit === "hour" ? f(f({}, C), {}, { value: k.value }) : k.unit === "minute" ? f(f({}, C), {}, { value: k.value, minute: k.value }) : k.unit === "second" ? f(f({}, C), {}, { value: k.value, minute: k.minute, second: k.second }) : k;
      });
      return m.filter(function(k) {
        var C = 1, O = Math.ceil(s.globals.gridWidth / 120), I = k.value;
        s.config.xaxis.tickAmount !== void 0 && (O = s.config.xaxis.tickAmount), m.length > O && (C = Math.floor(m.length / O));
        var X = !1, Y = !1;
        switch (i.tickInterval) {
          case "years":
            k.unit === "year" && (X = !0);
            break;
          case "half_year":
            C = 7, k.unit === "year" && (X = !0);
            break;
          case "months":
            C = 1, k.unit === "year" && (X = !0);
            break;
          case "months_fortnight":
            C = 15, k.unit !== "year" && k.unit !== "month" || (X = !0), I === 30 && (Y = !0);
            break;
          case "months_days":
            C = 10, k.unit === "month" && (X = !0), I === 30 && (Y = !0);
            break;
          case "week_days":
            C = 8, k.unit === "month" && (X = !0);
            break;
          case "days":
            C = 1, k.unit === "month" && (X = !0);
            break;
          case "hours":
            k.unit === "day" && (X = !0);
            break;
          case "minutes_fives":
          case "seconds_fives":
            I % 5 != 0 && (Y = !0);
            break;
          case "seconds_tens":
            I % 10 != 0 && (Y = !0);
        }
        if (i.tickInterval === "hours" || i.tickInterval === "minutes_fives" || i.tickInterval === "seconds_tens" || i.tickInterval === "seconds_fives") {
          if (!Y)
            return !0;
        } else if ((I % C == 0 || X) && !Y)
          return !0;
      });
    } }, { key: "recalcDimensionsBasedOnFormat", value: function(t, e) {
      var i = this.w, s = this.formatDates(t), r = this.removeOverlappingTS(s);
      i.globals.timescaleLabels = r.slice(), new ft(this.ctx).plotCoords();
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
      var e = t.firstVal, i = t.currentMonth, s = t.currentYear, r = t.daysWidthOnXAxis, o = t.numberOfYears, n = e.minYear, c = 0, d = new Mt(this.ctx), g = "year";
      if (e.minDate > 1 || e.minMonth > 0) {
        var p = d.determineRemainingDaysOfYear(e.minYear, e.minMonth, e.minDate);
        c = (d.determineDaysOfYear(e.minYear) - p + 1) * r, n = e.minYear + 1, this.timeScaleArray.push({ position: c, value: n, unit: g, year: n, month: F.monthMod(i + 1) });
      } else
        e.minDate === 1 && e.minMonth === 0 && this.timeScaleArray.push({ position: c, value: n, unit: g, year: s, month: F.monthMod(i + 1) });
      for (var x = n, b = c, y = 0; y < o; y++)
        x++, b = d.determineDaysOfYear(x - 1) * r + b, this.timeScaleArray.push({ position: b, value: x, unit: g, year: x, month: 1 });
    } }, { key: "generateMonthScale", value: function(t) {
      var e = t.firstVal, i = t.currentMonthDate, s = t.currentMonth, r = t.currentYear, o = t.daysWidthOnXAxis, n = t.numberOfMonths, c = s, d = 0, g = new Mt(this.ctx), p = "month", x = 0;
      if (e.minDate > 1) {
        d = (g.determineDaysOfMonths(s + 1, e.minYear) - i + 1) * o, c = F.monthMod(s + 1);
        var b = r + x, y = F.monthMod(c), A = c;
        c === 0 && (p = "year", A = b, y = 1, b += x += 1), this.timeScaleArray.push({ position: d, value: A, unit: p, year: b, month: y });
      } else
        this.timeScaleArray.push({ position: d, value: c, unit: p, year: r, month: F.monthMod(s) });
      for (var S = c + 1, N = d, L = 0, h = 1; L < n; L++, h++) {
        (S = F.monthMod(S)) === 0 ? (p = "year", x += 1) : p = "month";
        var m = this._getYear(r, S, x);
        N = g.determineDaysOfMonths(S, m) * o + N;
        var k = S === 0 ? m : S;
        this.timeScaleArray.push({ position: N, value: k, unit: p, year: m, month: S === 0 ? 1 : S }), S++;
      }
    } }, { key: "generateDayScale", value: function(t) {
      var e = t.firstVal, i = t.currentMonth, s = t.currentYear, r = t.hoursWidthOnXAxis, o = t.numberOfDays, n = new Mt(this.ctx), c = "day", d = e.minDate + 1, g = d, p = function(h, m, k) {
        return h > n.determineDaysOfMonths(m + 1, k) && (g = 1, c = "month", b = m += 1), m;
      }, x = (24 - e.minHour) * r, b = d, y = p(g, i, s);
      e.minHour === 0 && e.minDate === 1 ? (x = 0, b = F.monthMod(e.minMonth), c = "month", g = e.minDate) : e.minDate !== 1 && e.minHour === 0 && e.minMinute === 0 && (x = 0, d = e.minDate, b = d, y = p(g = d, i, s)), this.timeScaleArray.push({ position: x, value: b, unit: c, year: this._getYear(s, y, 0), month: F.monthMod(y), day: g });
      for (var A = x, S = 0; S < o; S++) {
        c = "day", y = p(g += 1, y, this._getYear(s, y, 0));
        var N = this._getYear(s, y, 0);
        A = 24 * r + A;
        var L = g === 1 ? F.monthMod(y) : g;
        this.timeScaleArray.push({ position: A, value: L, unit: c, year: N, month: F.monthMod(y), day: L });
      }
    } }, { key: "generateHourScale", value: function(t) {
      var e = t.firstVal, i = t.currentDate, s = t.currentMonth, r = t.currentYear, o = t.minutesWidthOnXAxis, n = t.numberOfHours, c = new Mt(this.ctx), d = "hour", g = function(C, O) {
        return C > c.determineDaysOfMonths(O + 1, r) && (S = 1, O += 1), { month: O, date: S };
      }, p = function(C, O) {
        return C > c.determineDaysOfMonths(O + 1, r) ? O += 1 : O;
      }, x = 60 - (e.minMinute + e.minSecond / 60), b = x * o, y = e.minHour + 1, A = y;
      x === 60 && (b = 0, A = y = e.minHour);
      var S = i;
      A >= 24 && (A = 0, S += 1, d = "day");
      var N = g(S, s).month;
      N = p(S, N), this.timeScaleArray.push({ position: b, value: y, unit: d, day: S, hour: A, year: r, month: F.monthMod(N) }), A++;
      for (var L = b, h = 0; h < n; h++) {
        d = "hour", A >= 24 && (A = 0, d = "day", N = g(S += 1, N).month, N = p(S, N));
        var m = this._getYear(r, N, 0);
        L = 60 * o + L;
        var k = A === 0 ? S : A;
        this.timeScaleArray.push({ position: L, value: k, unit: d, hour: A, day: S, year: m, month: F.monthMod(N) }), A++;
      }
    } }, { key: "generateMinuteScale", value: function(t) {
      for (var e = t.currentMillisecond, i = t.currentSecond, s = t.currentMinute, r = t.currentHour, o = t.currentDate, n = t.currentMonth, c = t.currentYear, d = t.minutesWidthOnXAxis, g = t.secondsWidthOnXAxis, p = t.numberOfMinutes, x = s + 1, b = o, y = n, A = c, S = r, N = (60 - i - e / 1e3) * g, L = 0; L < p; L++)
        x >= 60 && (x = 0, (S += 1) === 24 && (S = 0)), this.timeScaleArray.push({ position: N, value: x, unit: "minute", hour: S, minute: x, day: b, year: this._getYear(A, y, 0), month: F.monthMod(y) }), N += d, x++;
    } }, { key: "generateSecondScale", value: function(t) {
      for (var e = t.currentMillisecond, i = t.currentSecond, s = t.currentMinute, r = t.currentHour, o = t.currentDate, n = t.currentMonth, c = t.currentYear, d = t.secondsWidthOnXAxis, g = t.numberOfSeconds, p = i + 1, x = s, b = o, y = n, A = c, S = r, N = (1e3 - e) / 1e3 * d, L = 0; L < g; L++)
        p >= 60 && (p = 0, ++x >= 60 && (x = 0, ++S === 24 && (S = 0))), this.timeScaleArray.push({ position: N, value: p, unit: "second", hour: S, minute: x, second: p, day: b, year: this._getYear(A, y, 0), month: F.monthMod(y) }), N += d, p++;
    } }, { key: "createRawDateString", value: function(t, e) {
      var i = t.year;
      return t.month === 0 && (t.month = 1), i += "-" + ("0" + t.month.toString()).slice(-2), t.unit === "day" ? i += t.unit === "day" ? "-" + ("0" + e).slice(-2) : "-01" : i += "-" + ("0" + (t.day ? t.day : "1")).slice(-2), t.unit === "hour" ? i += t.unit === "hour" ? "T" + ("0" + e).slice(-2) : "T00" : i += "T" + ("0" + (t.hour ? t.hour : "0")).slice(-2), t.unit === "minute" ? i += ":" + ("0" + e).slice(-2) : i += ":" + (t.minute ? ("0" + t.minute).slice(-2) : "00"), t.unit === "second" ? i += ":" + ("0" + e).slice(-2) : i += ":00", this.utc && (i += ".000Z"), i;
    } }, { key: "formatDates", value: function(t) {
      var e = this, i = this.w;
      return t.map(function(s) {
        var r = s.value.toString(), o = new Mt(e.ctx), n = e.createRawDateString(s, r), c = o.getDate(o.parseDate(n));
        if (e.utc || (c = o.getDate(o.parseDateWithTimezone(n))), i.config.xaxis.labels.format === void 0) {
          var d = "dd MMM", g = i.config.xaxis.labels.datetimeFormatter;
          s.unit === "year" && (d = g.year), s.unit === "month" && (d = g.month), s.unit === "day" && (d = g.day), s.unit === "hour" && (d = g.hour), s.unit === "minute" && (d = g.minute), s.unit === "second" && (d = g.second), r = o.formatDate(c, d);
        } else
          r = o.formatDate(c, i.config.xaxis.labels.format);
        return { dateString: n, position: s.position, value: r, unit: s.unit, year: s.year, month: s.month };
      });
    } }, { key: "removeOverlappingTS", value: function(t) {
      var e, i = this, s = new B(this.ctx), r = !1;
      t.length > 0 && t[0].value && t.every(function(c) {
        return c.value.length === t[0].value.length;
      }) && (r = !0, e = s.getTextRects(t[0].value).width);
      var o = 0, n = t.map(function(c, d) {
        if (d > 0 && i.w.config.xaxis.labels.hideOverlappingLabels) {
          var g = r ? e : s.getTextRects(t[o].value).width, p = t[o].position;
          return c.position > p + g + 10 ? (o = d, c) : null;
        }
        return c;
      });
      return n = n.filter(function(c) {
        return c !== null;
      });
    } }, { key: "_getYear", value: function(t, e, i) {
      return t + Math.floor(e / 12) + i;
    } }]), E;
  }(), Gl = function() {
    function E(t, e) {
      w(this, E), this.ctx = e, this.w = e.w, this.el = t;
    }
    return _(E, [{ key: "setupElements", value: function() {
      var t = this.w.globals, e = this.w.config, i = e.chart.type;
      t.axisCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble", "radar", "heatmap", "treemap"].indexOf(i) > -1, t.xyCharts = ["line", "area", "bar", "rangeBar", "rangeArea", "candlestick", "boxPlot", "scatter", "bubble"].indexOf(i) > -1, t.isBarHorizontal = (e.chart.type === "bar" || e.chart.type === "rangeBar" || e.chart.type === "boxPlot") && e.plotOptions.bar.horizontal, t.chartClass = ".apexcharts" + t.chartID, t.dom.baseEl = this.el, t.dom.elWrap = document.createElement("div"), B.setAttrs(t.dom.elWrap, { id: t.chartClass.substring(1), class: "apexcharts-canvas " + t.chartClass.substring(1) }), this.el.appendChild(t.dom.elWrap), t.dom.Paper = new window.SVG.Doc(t.dom.elWrap), t.dom.Paper.attr({ class: "apexcharts-svg", "xmlns:data": "ApexChartsNS", transform: "translate(".concat(e.chart.offsetX, ", ").concat(e.chart.offsetY, ")") }), t.dom.Paper.node.style.background = e.theme.mode !== "dark" || e.chart.background ? e.chart.background : "rgba(0, 0, 0, 0.8)", this.setSVGDimensions(), t.dom.elLegendForeign = document.createElementNS(t.SVGNS, "foreignObject"), B.setAttrs(t.dom.elLegendForeign, { x: 0, y: 0, width: t.svgWidth, height: t.svgHeight }), t.dom.elLegendWrap = document.createElement("div"), t.dom.elLegendWrap.classList.add("apexcharts-legend"), t.dom.elLegendWrap.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), t.dom.elLegendForeign.appendChild(t.dom.elLegendWrap), t.dom.Paper.node.appendChild(t.dom.elLegendForeign), t.dom.elGraphical = t.dom.Paper.group().attr({ class: "apexcharts-inner apexcharts-graphical" }), t.dom.elDefs = t.dom.Paper.defs(), t.dom.Paper.add(t.dom.elGraphical), t.dom.elGraphical.add(t.dom.elDefs);
    } }, { key: "plotChartType", value: function(t, e) {
      var i = this.w, s = i.config, r = i.globals, o = { series: [], i: [] }, n = { series: [], i: [] }, c = { series: [], i: [] }, d = { series: [], i: [] }, g = { series: [], i: [] }, p = { series: [], i: [] }, x = { series: [], i: [] }, b = { series: [], i: [] }, y = { series: [], seriesRangeEnd: [], i: [] };
      r.series.map(function(O, I) {
        var X = 0;
        t[I].type !== void 0 ? (t[I].type === "column" || t[I].type === "bar" ? (r.series.length > 1 && s.plotOptions.bar.horizontal && console.warn("Horizontal bars are not supported in a mixed/combo chart. Please turn off `plotOptions.bar.horizontal`"), g.series.push(O), g.i.push(I), X++, i.globals.columnSeries = g.series) : t[I].type === "area" ? (n.series.push(O), n.i.push(I), X++) : t[I].type === "line" ? (o.series.push(O), o.i.push(I), X++) : t[I].type === "scatter" ? (c.series.push(O), c.i.push(I)) : t[I].type === "bubble" ? (d.series.push(O), d.i.push(I), X++) : t[I].type === "candlestick" ? (p.series.push(O), p.i.push(I), X++) : t[I].type === "boxPlot" ? (x.series.push(O), x.i.push(I), X++) : t[I].type === "rangeBar" ? (b.series.push(O), b.i.push(I), X++) : t[I].type === "rangeArea" ? (y.series.push(r.seriesRangeStart[I]), y.seriesRangeEnd.push(r.seriesRangeEnd[I]), y.i.push(I), X++) : console.warn("You have specified an unrecognized chart type. Available types for this property are line/area/column/bar/scatter/bubble/candlestick/boxPlot/rangeBar/rangeArea"), X > 1 && (r.comboCharts = !0)) : (o.series.push(O), o.i.push(I));
      });
      var A = new ba(this.ctx, e), S = new pa(this.ctx, e);
      this.ctx.pie = new Fr(this.ctx);
      var N = new Fl(this.ctx);
      this.ctx.rangeBar = new Xl(this.ctx, e);
      var L = new zl(this.ctx), h = [];
      if (r.comboCharts) {
        if (n.series.length > 0 && h.push(A.draw(n.series, "area", n.i)), g.series.length > 0)
          if (i.config.chart.stacked) {
            var m = new Dr(this.ctx, e);
            h.push(m.draw(g.series, g.i));
          } else
            this.ctx.bar = new Xi(this.ctx, e), h.push(this.ctx.bar.draw(g.series, g.i));
        if (y.series.length > 0 && h.push(A.draw(y.series, "rangeArea", y.i, y.seriesRangeEnd)), o.series.length > 0 && h.push(A.draw(o.series, "line", o.i)), p.series.length > 0 && h.push(S.draw(p.series, "candlestick", p.i)), x.series.length > 0 && h.push(S.draw(x.series, "boxPlot", x.i)), b.series.length > 0 && h.push(this.ctx.rangeBar.draw(b.series, b.i)), c.series.length > 0) {
          var k = new ba(this.ctx, e, !0);
          h.push(k.draw(c.series, "scatter", c.i));
        }
        if (d.series.length > 0) {
          var C = new ba(this.ctx, e, !0);
          h.push(C.draw(d.series, "bubble", d.i));
        }
      } else
        switch (s.chart.type) {
          case "line":
            h = A.draw(r.series, "line");
            break;
          case "area":
            h = A.draw(r.series, "area");
            break;
          case "bar":
            s.chart.stacked ? h = new Dr(this.ctx, e).draw(r.series) : (this.ctx.bar = new Xi(this.ctx, e), h = this.ctx.bar.draw(r.series));
            break;
          case "candlestick":
            h = new pa(this.ctx, e).draw(r.series, "candlestick");
            break;
          case "boxPlot":
            h = new pa(this.ctx, e).draw(r.series, s.chart.type);
            break;
          case "rangeBar":
            h = this.ctx.rangeBar.draw(r.series);
            break;
          case "rangeArea":
            h = A.draw(r.seriesRangeStart, "rangeArea", void 0, r.seriesRangeEnd);
            break;
          case "heatmap":
            h = new Rl(this.ctx, e).draw(r.series);
            break;
          case "treemap":
            h = new Vl(this.ctx, e).draw(r.series);
            break;
          case "pie":
          case "donut":
          case "polarArea":
            h = this.ctx.pie.draw(r.series);
            break;
          case "radialBar":
            h = N.draw(r.series);
            break;
          case "radar":
            h = L.draw(r.series);
            break;
          default:
            h = A.draw(r.series);
        }
      return h;
    } }, { key: "setSVGDimensions", value: function() {
      var t = this.w.globals, e = this.w.config;
      t.svgWidth = e.chart.width, t.svgHeight = e.chart.height;
      var i = F.getDimensions(this.el), s = e.chart.width.toString().split(/[0-9]+/g).pop();
      s === "%" ? F.isNumber(i[0]) && (i[0].width === 0 && (i = F.getDimensions(this.el.parentNode)), t.svgWidth = i[0] * parseInt(e.chart.width, 10) / 100) : s !== "px" && s !== "" || (t.svgWidth = parseInt(e.chart.width, 10));
      var r = e.chart.height.toString().split(/[0-9]+/g).pop();
      if (t.svgHeight !== "auto" && t.svgHeight !== "")
        if (r === "%") {
          var o = F.getDimensions(this.el.parentNode);
          t.svgHeight = o[1] * parseInt(e.chart.height, 10) / 100;
        } else
          t.svgHeight = parseInt(e.chart.height, 10);
      else
        t.axisCharts ? t.svgHeight = t.svgWidth / 1.61 : t.svgHeight = t.svgWidth / 1.2;
      if (t.svgWidth < 0 && (t.svgWidth = 0), t.svgHeight < 0 && (t.svgHeight = 0), B.setAttrs(t.dom.Paper.node, { width: t.svgWidth, height: t.svgHeight }), r !== "%") {
        var n = e.chart.sparkline.enabled ? 0 : t.axisCharts ? e.chart.parentHeightOffset : 0;
        t.dom.Paper.node.parentNode.parentNode.style.minHeight = t.svgHeight + n + "px";
      }
      t.dom.elWrap.style.width = t.svgWidth + "px", t.dom.elWrap.style.height = t.svgHeight + "px";
    } }, { key: "shiftGraphPosition", value: function() {
      var t = this.w.globals, e = t.translateY, i = { transform: "translate(" + t.translateX + ", " + e + ")" };
      B.setAttrs(t.dom.elGraphical.node, i);
    } }, { key: "resizeNonAxisCharts", value: function() {
      var t = this.w, e = t.globals, i = 0, s = t.config.chart.sparkline.enabled ? 1 : 15;
      s += t.config.grid.padding.bottom, t.config.legend.position !== "top" && t.config.legend.position !== "bottom" || !t.config.legend.show || t.config.legend.floating || (i = new Tt(this.ctx).legendHelpers.getLegendBBox().clwh + 10);
      var r = t.globals.dom.baseEl.querySelector(".apexcharts-radialbar, .apexcharts-pie"), o = 2.05 * t.globals.radialSize;
      if (r && !t.config.chart.sparkline.enabled && t.config.plotOptions.radialBar.startAngle !== 0) {
        var n = F.getBoundingClientRect(r);
        o = n.bottom;
        var c = n.bottom - n.top;
        o = Math.max(2.05 * t.globals.radialSize, c);
      }
      var d = o + e.translateY + i + s;
      e.dom.elLegendForeign && e.dom.elLegendForeign.setAttribute("height", d), t.config.chart.height && String(t.config.chart.height).indexOf("%") > 0 || (e.dom.elWrap.style.height = d + "px", B.setAttrs(e.dom.Paper.node, { height: d }), e.dom.Paper.node.parentNode.parentNode.style.minHeight = d + "px");
    } }, { key: "coreCalculations", value: function() {
      new Nt(this.ctx).init();
    } }, { key: "resetGlobals", value: function() {
      var t = this, e = function() {
        return t.w.config.series.map(function(r) {
          return [];
        });
      }, i = new ze(), s = this.w.globals;
      i.initGlobalVars(s), s.seriesXvalues = e(), s.seriesYvalues = e();
    } }, { key: "isMultipleY", value: function() {
      if (this.w.config.yaxis.constructor === Array && this.w.config.yaxis.length > 1)
        return this.w.globals.isMultipleYAxis = !0, !0;
    } }, { key: "xySettings", value: function() {
      var t = null, e = this.w;
      if (e.globals.axisCharts) {
        if (e.config.xaxis.crosshairs.position === "back" && new K(this.ctx).drawXCrosshairs(), e.config.yaxis[0].crosshairs.position === "back" && new K(this.ctx).drawYCrosshairs(), e.config.xaxis.type === "datetime" && e.config.xaxis.labels.formatter === void 0) {
          this.ctx.timeScale = new Bl(this.ctx);
          var i = [];
          isFinite(e.globals.minX) && isFinite(e.globals.maxX) && !e.globals.isBarHorizontal ? i = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minX, e.globals.maxX) : e.globals.isBarHorizontal && (i = this.ctx.timeScale.calculateTimeScaleTicks(e.globals.minY, e.globals.maxY)), this.ctx.timeScale.recalcDimensionsBasedOnFormat(i);
        }
        t = new _t(this.ctx).getCalculatedRatios();
      }
      return t;
    } }, { key: "updateSourceChart", value: function(t) {
      this.ctx.w.globals.selection = void 0, this.ctx.updateHelpers._updateOptions({ chart: { selection: { xaxis: { min: t.w.globals.minX, max: t.w.globals.maxX } } } }, !1, !1);
    } }, { key: "setupBrushHandler", value: function() {
      var t = this, e = this.w;
      if (e.config.chart.brush.enabled && typeof e.config.chart.events.selection != "function") {
        var i = Array.isArray(e.config.chart.brush.targets) ? e.config.chart.brush.targets : [e.config.chart.brush.target];
        i.forEach(function(s) {
          var r = ApexCharts.getChartByID(s);
          r.w.globals.brushSource = t.ctx, typeof r.w.config.chart.events.zoomed != "function" && (r.w.config.chart.events.zoomed = function() {
            t.updateSourceChart(r);
          }), typeof r.w.config.chart.events.scrolled != "function" && (r.w.config.chart.events.scrolled = function() {
            t.updateSourceChart(r);
          });
        }), e.config.chart.events.selection = function(s, r) {
          i.forEach(function(o) {
            var n = ApexCharts.getChartByID(o), c = F.clone(e.config.yaxis);
            if (e.config.chart.brush.autoScaleYaxis && n.w.globals.series.length === 1) {
              var d = new Xt(n);
              c = d.autoScaleY(n, c, r);
            }
            var g = n.w.config.yaxis.reduce(function(p, x, b) {
              return [].concat(lt(p), [f(f({}, n.w.config.yaxis[b]), {}, { min: c[0].min, max: c[0].max })]);
            }, []);
            n.ctx.updateHelpers._updateOptions({ xaxis: { min: r.xaxis.min, max: r.xaxis.max }, yaxis: g }, !1, !1, !1, !1);
          });
        };
      }
    } }]), E;
  }(), jl = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "_updateOptions", value: function(t) {
      var e = this, i = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], s = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], r = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], o = arguments.length > 4 && arguments[4] !== void 0 && arguments[4];
      return new Promise(function(n) {
        var c = [e.ctx];
        r && (c = e.ctx.getSyncedCharts()), e.ctx.w.globals.isExecCalled && (c = [e.ctx], e.ctx.w.globals.isExecCalled = !1), c.forEach(function(d, g) {
          var p = d.w;
          if (p.globals.shouldAnimate = s, i || (p.globals.resized = !0, p.globals.dataChanged = !0, s && d.series.getPreviousPaths()), t && v(t) === "object" && (d.config = new re(t), t = _t.extendArrayProps(d.config, t, p), d.w.globals.chartID !== e.ctx.w.globals.chartID && delete t.series, p.config = F.extend(p.config, t), o && (p.globals.lastXAxis = t.xaxis ? F.clone(t.xaxis) : [], p.globals.lastYAxis = t.yaxis ? F.clone(t.yaxis) : [], p.globals.initialConfig = F.extend({}, p.config), p.globals.initialSeries = F.clone(p.config.series), t.series))) {
            for (var x = 0; x < p.globals.collapsedSeriesIndices.length; x++) {
              var b = p.config.series[p.globals.collapsedSeriesIndices[x]];
              p.globals.collapsedSeries[x].data = p.globals.axisCharts ? b.data.slice() : b;
            }
            for (var y = 0; y < p.globals.ancillaryCollapsedSeriesIndices.length; y++) {
              var A = p.config.series[p.globals.ancillaryCollapsedSeriesIndices[y]];
              p.globals.ancillaryCollapsedSeries[y].data = p.globals.axisCharts ? A.data.slice() : A;
            }
            d.series.emptyCollapsedSeries(p.config.series);
          }
          return d.update(t).then(function() {
            g === c.length - 1 && n(d);
          });
        });
      });
    } }, { key: "_updateSeries", value: function(t, e) {
      var i = this, s = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
      return new Promise(function(r) {
        var o, n = i.w;
        return n.globals.shouldAnimate = e, n.globals.dataChanged = !0, e && i.ctx.series.getPreviousPaths(), n.globals.axisCharts ? ((o = t.map(function(c, d) {
          return i._extendSeries(c, d);
        })).length === 0 && (o = [{ data: [] }]), n.config.series = o) : n.config.series = t.slice(), s && (n.globals.initialConfig.series = F.clone(n.config.series), n.globals.initialSeries = F.clone(n.config.series)), i.ctx.update().then(function() {
          r(i.ctx);
        });
      });
    } }, { key: "_extendSeries", value: function(t, e) {
      var i = this.w, s = i.config.series[e];
      return f(f({}, i.config.series[e]), {}, { name: t.name ? t.name : s == null ? void 0 : s.name, color: t.color ? t.color : s == null ? void 0 : s.color, type: t.type ? t.type : s == null ? void 0 : s.type, group: t.group ? t.group : s == null ? void 0 : s.group, data: t.data ? t.data : s == null ? void 0 : s.data, zIndex: t.zIndex !== void 0 ? t.zIndex : e });
    } }, { key: "toggleDataPointSelection", value: function(t, e) {
      var i = this.w, s = null, r = ".apexcharts-series[data\\:realIndex='".concat(t, "']");
      return i.globals.axisCharts ? s = i.globals.dom.Paper.select("".concat(r, " path[j='").concat(e, "'], ").concat(r, " circle[j='").concat(e, "'], ").concat(r, " rect[j='").concat(e, "']")).members[0] : e === void 0 && (s = i.globals.dom.Paper.select("".concat(r, " path[j='").concat(t, "']")).members[0], i.config.chart.type !== "pie" && i.config.chart.type !== "polarArea" && i.config.chart.type !== "donut" || this.ctx.pie.pieClicked(t)), s ? (new B(this.ctx).pathMouseDown(s, null), s.node ? s.node : null) : (console.warn("toggleDataPointSelection: Element not found"), null);
    } }, { key: "forceXAxisUpdate", value: function(t) {
      var e = this.w;
      if (["min", "max"].forEach(function(s) {
        t.xaxis[s] !== void 0 && (e.config.xaxis[s] = t.xaxis[s], e.globals.lastXAxis[s] = t.xaxis[s]);
      }), t.xaxis.categories && t.xaxis.categories.length && (e.config.xaxis.categories = t.xaxis.categories), e.config.xaxis.convertedCatToNumeric) {
        var i = new kt(t);
        t = i.convertCatToNumericXaxis(t, this.ctx);
      }
      return t;
    } }, { key: "forceYAxisUpdate", value: function(t) {
      return t.chart && t.chart.stacked && t.chart.stackType === "100%" && (Array.isArray(t.yaxis) ? t.yaxis.forEach(function(e, i) {
        t.yaxis[i].min = 0, t.yaxis[i].max = 100;
      }) : (t.yaxis.min = 0, t.yaxis.max = 100)), t;
    } }, { key: "revertDefaultAxisMinMax", value: function(t) {
      var e = this, i = this.w, s = i.globals.lastXAxis, r = i.globals.lastYAxis;
      t && t.xaxis && (s = t.xaxis), t && t.yaxis && (r = t.yaxis), i.config.xaxis.min = s.min, i.config.xaxis.max = s.max;
      var o = function(n) {
        r[n] !== void 0 && (i.config.yaxis[n].min = r[n].min, i.config.yaxis[n].max = r[n].max);
      };
      i.config.yaxis.map(function(n, c) {
        i.globals.zoomed || r[c] !== void 0 ? o(c) : e.ctx.opts.yaxis[c] !== void 0 && (n.min = e.ctx.opts.yaxis[c].min, n.max = e.ctx.opts.yaxis[c].max);
      });
    } }]), E;
  }();
  wi = typeof window < "u" ? window : void 0, ws = function(E, t) {
    var e = (this !== void 0 ? this : E).SVG = function(h) {
      if (e.supported)
        return h = new e.Doc(h), e.parser.draw || e.prepare(), h;
    };
    if (e.ns = "http://www.w3.org/2000/svg", e.xmlns = "http://www.w3.org/2000/xmlns/", e.xlink = "http://www.w3.org/1999/xlink", e.svgjs = "http://svgjs.dev", e.supported = !0, !e.supported)
      return !1;
    e.did = 1e3, e.eid = function(h) {
      return "Svgjs" + g(h) + e.did++;
    }, e.create = function(h) {
      var m = t.createElementNS(this.ns, h);
      return m.setAttribute("id", this.eid(h)), m;
    }, e.extend = function() {
      var h, m;
      m = (h = [].slice.call(arguments)).pop();
      for (var k = h.length - 1; k >= 0; k--)
        if (h[k])
          for (var C in m)
            h[k].prototype[C] = m[C];
      e.Set && e.Set.inherit && e.Set.inherit();
    }, e.invent = function(h) {
      var m = typeof h.create == "function" ? h.create : function() {
        this.constructor.call(this, e.create(h.create));
      };
      return h.inherit && (m.prototype = new h.inherit()), h.extend && e.extend(m, h.extend), h.construct && e.extend(h.parent || e.Container, h.construct), m;
    }, e.adopt = function(h) {
      return h ? h.instance ? h.instance : ((m = h.nodeName == "svg" ? h.parentNode instanceof E.SVGElement ? new e.Nested() : new e.Doc() : h.nodeName == "linearGradient" ? new e.Gradient("linear") : h.nodeName == "radialGradient" ? new e.Gradient("radial") : e[g(h.nodeName)] ? new e[g(h.nodeName)]() : new e.Element(h)).type = h.nodeName, m.node = h, h.instance = m, m instanceof e.Doc && m.namespace().defs(), m.setData(JSON.parse(h.getAttribute("svgjs:data")) || {}), m) : null;
      var m;
    }, e.prepare = function() {
      var h = t.getElementsByTagName("body")[0], m = (h ? new e.Doc(h) : e.adopt(t.documentElement).nested()).size(2, 0);
      e.parser = { body: h || t.documentElement, draw: m.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden").node, poly: m.polyline().node, path: m.path().node, native: e.create("svg") };
    }, e.parser = { native: e.create("svg") }, t.addEventListener("DOMContentLoaded", function() {
      e.parser.draw || e.prepare();
    }, !1), e.regex = { numberAndUnit: /^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i, hex: /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i, rgb: /rgb\((\d+),(\d+),(\d+)\)/, reference: /#([a-z0-9\-_]+)/i, transforms: /\)\s*,?\s*/, whitespace: /\s/g, isHex: /^#[a-f0-9]{3,6}$/i, isRgb: /^rgb\(/, isCss: /[^:]+:[^;]+;?/, isBlank: /^(\s+)?$/, isNumber: /^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i, isPercent: /^-?[\d\.]+%$/, isImage: /\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i, delimiter: /[\s,]+/, hyphen: /([^e])\-/gi, pathLetters: /[MLHVCSQTAZ]/gi, isPathLetter: /[MLHVCSQTAZ]/i, numbersWithDots: /((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi, dots: /\./g }, e.utils = { map: function(h, m) {
      for (var k = h.length, C = [], O = 0; O < k; O++)
        C.push(m(h[O]));
      return C;
    }, filter: function(h, m) {
      for (var k = h.length, C = [], O = 0; O < k; O++)
        m(h[O]) && C.push(h[O]);
      return C;
    }, filterSVGElements: function(h) {
      return this.filter(h, function(m) {
        return m instanceof E.SVGElement;
      });
    } }, e.defaults = { attrs: { "fill-opacity": 1, "stroke-opacity": 1, "stroke-width": 0, "stroke-linejoin": "miter", "stroke-linecap": "butt", fill: "#000000", stroke: "#000000", opacity: 1, x: 0, y: 0, cx: 0, cy: 0, width: 0, height: 0, r: 0, rx: 0, ry: 0, offset: 0, "stop-opacity": 1, "stop-color": "#000000", "font-size": 16, "font-family": "Helvetica, Arial, sans-serif", "text-anchor": "start" } }, e.Color = function(h) {
      var m, k;
      this.r = 0, this.g = 0, this.b = 0, h && (typeof h == "string" ? e.regex.isRgb.test(h) ? (m = e.regex.rgb.exec(h.replace(e.regex.whitespace, "")), this.r = parseInt(m[1]), this.g = parseInt(m[2]), this.b = parseInt(m[3])) : e.regex.isHex.test(h) && (m = e.regex.hex.exec((k = h).length == 4 ? ["#", k.substring(1, 2), k.substring(1, 2), k.substring(2, 3), k.substring(2, 3), k.substring(3, 4), k.substring(3, 4)].join("") : k), this.r = parseInt(m[1], 16), this.g = parseInt(m[2], 16), this.b = parseInt(m[3], 16)) : v(h) === "object" && (this.r = h.r, this.g = h.g, this.b = h.b));
    }, e.extend(e.Color, { toString: function() {
      return this.toHex();
    }, toHex: function() {
      return "#" + p(this.r) + p(this.g) + p(this.b);
    }, toRgb: function() {
      return "rgb(" + [this.r, this.g, this.b].join() + ")";
    }, brightness: function() {
      return this.r / 255 * 0.3 + this.g / 255 * 0.59 + this.b / 255 * 0.11;
    }, morph: function(h) {
      return this.destination = new e.Color(h), this;
    }, at: function(h) {
      return this.destination ? (h = h < 0 ? 0 : h > 1 ? 1 : h, new e.Color({ r: ~~(this.r + (this.destination.r - this.r) * h), g: ~~(this.g + (this.destination.g - this.g) * h), b: ~~(this.b + (this.destination.b - this.b) * h) })) : this;
    } }), e.Color.test = function(h) {
      return h += "", e.regex.isHex.test(h) || e.regex.isRgb.test(h);
    }, e.Color.isRgb = function(h) {
      return h && typeof h.r == "number" && typeof h.g == "number" && typeof h.b == "number";
    }, e.Color.isColor = function(h) {
      return e.Color.isRgb(h) || e.Color.test(h);
    }, e.Array = function(h, m) {
      (h = (h || []).valueOf()).length == 0 && m && (h = m.valueOf()), this.value = this.parse(h);
    }, e.extend(e.Array, { toString: function() {
      return this.value.join(" ");
    }, valueOf: function() {
      return this.value;
    }, parse: function(h) {
      return h = h.valueOf(), Array.isArray(h) ? h : this.split(h);
    } }), e.PointArray = function(h, m) {
      e.Array.call(this, h, m || [[0, 0]]);
    }, e.PointArray.prototype = new e.Array(), e.PointArray.prototype.constructor = e.PointArray;
    for (var i = { M: function(h, m, k) {
      return m.x = k.x = h[0], m.y = k.y = h[1], ["M", m.x, m.y];
    }, L: function(h, m) {
      return m.x = h[0], m.y = h[1], ["L", h[0], h[1]];
    }, H: function(h, m) {
      return m.x = h[0], ["H", h[0]];
    }, V: function(h, m) {
      return m.y = h[0], ["V", h[0]];
    }, C: function(h, m) {
      return m.x = h[4], m.y = h[5], ["C", h[0], h[1], h[2], h[3], h[4], h[5]];
    }, Q: function(h, m) {
      return m.x = h[2], m.y = h[3], ["Q", h[0], h[1], h[2], h[3]];
    }, S: function(h, m) {
      return m.x = h[2], m.y = h[3], ["S", h[0], h[1], h[2], h[3]];
    }, Z: function(h, m, k) {
      return m.x = k.x, m.y = k.y, ["Z"];
    } }, s = "mlhvqtcsaz".split(""), r = 0, o = s.length; r < o; ++r)
      i[s[r]] = /* @__PURE__ */ function(h) {
        return function(m, k, C) {
          if (h == "H")
            m[0] = m[0] + k.x;
          else if (h == "V")
            m[0] = m[0] + k.y;
          else if (h == "A")
            m[5] = m[5] + k.x, m[6] = m[6] + k.y;
          else
            for (var O = 0, I = m.length; O < I; ++O)
              m[O] = m[O] + (O % 2 ? k.y : k.x);
          if (i && typeof i[h] == "function")
            return i[h](m, k, C);
        };
      }(s[r].toUpperCase());
    e.PathArray = function(h, m) {
      e.Array.call(this, h, m || [["M", 0, 0]]);
    }, e.PathArray.prototype = new e.Array(), e.PathArray.prototype.constructor = e.PathArray, e.extend(e.PathArray, { toString: function() {
      return function(h) {
        for (var m = 0, k = h.length, C = ""; m < k; m++)
          C += h[m][0], h[m][1] != null && (C += h[m][1], h[m][2] != null && (C += " ", C += h[m][2], h[m][3] != null && (C += " ", C += h[m][3], C += " ", C += h[m][4], h[m][5] != null && (C += " ", C += h[m][5], C += " ", C += h[m][6], h[m][7] != null && (C += " ", C += h[m][7])))));
        return C + " ";
      }(this.value);
    }, move: function(h, m) {
      var k = this.bbox();
      return k.x, k.y, this;
    }, at: function(h) {
      if (!this.destination)
        return this;
      for (var m = this.value, k = this.destination.value, C = [], O = new e.PathArray(), I = 0, X = m.length; I < X; I++) {
        C[I] = [m[I][0]];
        for (var Y = 1, W = m[I].length; Y < W; Y++)
          C[I][Y] = m[I][Y] + (k[I][Y] - m[I][Y]) * h;
        C[I][0] === "A" && (C[I][4] = +(C[I][4] != 0), C[I][5] = +(C[I][5] != 0));
      }
      return O.value = C, O;
    }, parse: function(h) {
      if (h instanceof e.PathArray)
        return h.valueOf();
      var m, k = { M: 2, L: 2, H: 1, V: 1, C: 6, S: 4, Q: 4, T: 2, A: 7, Z: 0 };
      h = typeof h == "string" ? h.replace(e.regex.numbersWithDots, c).replace(e.regex.pathLetters, " $& ").replace(e.regex.hyphen, "$1 -").trim().split(e.regex.delimiter) : h.reduce(function(W, q) {
        return [].concat.call(W, q);
      }, []);
      var C = [], O = new e.Point(), I = new e.Point(), X = 0, Y = h.length;
      do
        e.regex.isPathLetter.test(h[X]) ? (m = h[X], ++X) : m == "M" ? m = "L" : m == "m" && (m = "l"), C.push(i[m].call(null, h.slice(X, X += k[m.toUpperCase()]).map(parseFloat), O, I));
      while (Y > X);
      return C;
    }, bbox: function() {
      return e.parser.draw || e.prepare(), e.parser.path.setAttribute("d", this.toString()), e.parser.path.getBBox();
    } }), e.Number = e.invent({ create: function(h, m) {
      this.value = 0, this.unit = m || "", typeof h == "number" ? this.value = isNaN(h) ? 0 : isFinite(h) ? h : h < 0 ? -34e37 : 34e37 : typeof h == "string" ? (m = h.match(e.regex.numberAndUnit)) && (this.value = parseFloat(m[1]), m[5] == "%" ? this.value /= 100 : m[5] == "s" && (this.value *= 1e3), this.unit = m[5]) : h instanceof e.Number && (this.value = h.valueOf(), this.unit = h.unit);
    }, extend: { toString: function() {
      return (this.unit == "%" ? ~~(1e8 * this.value) / 1e6 : this.unit == "s" ? this.value / 1e3 : this.value) + this.unit;
    }, toJSON: function() {
      return this.toString();
    }, valueOf: function() {
      return this.value;
    }, plus: function(h) {
      return h = new e.Number(h), new e.Number(this + h, this.unit || h.unit);
    }, minus: function(h) {
      return h = new e.Number(h), new e.Number(this - h, this.unit || h.unit);
    }, times: function(h) {
      return h = new e.Number(h), new e.Number(this * h, this.unit || h.unit);
    }, divide: function(h) {
      return h = new e.Number(h), new e.Number(this / h, this.unit || h.unit);
    }, to: function(h) {
      var m = new e.Number(this);
      return typeof h == "string" && (m.unit = h), m;
    }, morph: function(h) {
      return this.destination = new e.Number(h), h.relative && (this.destination.value += this.value), this;
    }, at: function(h) {
      return this.destination ? new e.Number(this.destination).minus(this).times(h).plus(this) : this;
    } } }), e.Element = e.invent({ create: function(h) {
      this._stroke = e.defaults.attrs.stroke, this._event = null, this.dom = {}, (this.node = h) && (this.type = h.nodeName, this.node.instance = this, this._stroke = h.getAttribute("stroke") || this._stroke);
    }, extend: { x: function(h) {
      return this.attr("x", h);
    }, y: function(h) {
      return this.attr("y", h);
    }, cx: function(h) {
      return h == null ? this.x() + this.width() / 2 : this.x(h - this.width() / 2);
    }, cy: function(h) {
      return h == null ? this.y() + this.height() / 2 : this.y(h - this.height() / 2);
    }, move: function(h, m) {
      return this.x(h).y(m);
    }, center: function(h, m) {
      return this.cx(h).cy(m);
    }, width: function(h) {
      return this.attr("width", h);
    }, height: function(h) {
      return this.attr("height", h);
    }, size: function(h, m) {
      var k = x(this, h, m);
      return this.width(new e.Number(k.width)).height(new e.Number(k.height));
    }, clone: function(h) {
      this.writeDataToDom();
      var m = A(this.node.cloneNode(!0));
      return h ? h.add(m) : this.after(m), m;
    }, remove: function() {
      return this.parent() && this.parent().removeElement(this), this;
    }, replace: function(h) {
      return this.after(h).remove(), h;
    }, addTo: function(h) {
      return h.put(this);
    }, putIn: function(h) {
      return h.add(this);
    }, id: function(h) {
      return this.attr("id", h);
    }, show: function() {
      return this.style("display", "");
    }, hide: function() {
      return this.style("display", "none");
    }, visible: function() {
      return this.style("display") != "none";
    }, toString: function() {
      return this.attr("id");
    }, classes: function() {
      var h = this.attr("class");
      return h == null ? [] : h.trim().split(e.regex.delimiter);
    }, hasClass: function(h) {
      return this.classes().indexOf(h) != -1;
    }, addClass: function(h) {
      if (!this.hasClass(h)) {
        var m = this.classes();
        m.push(h), this.attr("class", m.join(" "));
      }
      return this;
    }, removeClass: function(h) {
      return this.hasClass(h) && this.attr("class", this.classes().filter(function(m) {
        return m != h;
      }).join(" ")), this;
    }, toggleClass: function(h) {
      return this.hasClass(h) ? this.removeClass(h) : this.addClass(h);
    }, reference: function(h) {
      return e.get(this.attr(h));
    }, parent: function(h) {
      var m = this;
      if (!m.node.parentNode)
        return null;
      if (m = e.adopt(m.node.parentNode), !h)
        return m;
      for (; m && m.node instanceof E.SVGElement; ) {
        if (typeof h == "string" ? m.matches(h) : m instanceof h)
          return m;
        if (!m.node.parentNode || m.node.parentNode.nodeName == "#document")
          return null;
        m = e.adopt(m.node.parentNode);
      }
    }, doc: function() {
      return this instanceof e.Doc ? this : this.parent(e.Doc);
    }, parents: function(h) {
      var m = [], k = this;
      do {
        if (!(k = k.parent(h)) || !k.node)
          break;
        m.push(k);
      } while (k.parent);
      return m;
    }, matches: function(h) {
      return function(m, k) {
        return (m.matches || m.matchesSelector || m.msMatchesSelector || m.mozMatchesSelector || m.webkitMatchesSelector || m.oMatchesSelector).call(m, k);
      }(this.node, h);
    }, native: function() {
      return this.node;
    }, svg: function(h) {
      var m = t.createElement("svg");
      if (!(h && this instanceof e.Parent))
        return m.appendChild(h = t.createElement("svg")), this.writeDataToDom(), h.appendChild(this.node.cloneNode(!0)), m.innerHTML.replace(/^<svg>/, "").replace(/<\/svg>$/, "");
      m.innerHTML = "<svg>" + h.replace(/\n/, "").replace(/<([\w:-]+)([^<]+?)\/>/g, "<$1$2></$1>") + "</svg>";
      for (var k = 0, C = m.firstChild.childNodes.length; k < C; k++)
        this.node.appendChild(m.firstChild.firstChild);
      return this;
    }, writeDataToDom: function() {
      return (this.each || this.lines) && (this.each ? this : this.lines()).each(function() {
        this.writeDataToDom();
      }), this.node.removeAttribute("svgjs:data"), Object.keys(this.dom).length && this.node.setAttribute("svgjs:data", JSON.stringify(this.dom)), this;
    }, setData: function(h) {
      return this.dom = h, this;
    }, is: function(h) {
      return function(m, k) {
        return m instanceof k;
      }(this, h);
    } } }), e.easing = { "-": function(h) {
      return h;
    }, "<>": function(h) {
      return -Math.cos(h * Math.PI) / 2 + 0.5;
    }, ">": function(h) {
      return Math.sin(h * Math.PI / 2);
    }, "<": function(h) {
      return 1 - Math.cos(h * Math.PI / 2);
    } }, e.morph = function(h) {
      return function(m, k) {
        return new e.MorphObj(m, k).at(h);
      };
    }, e.Situation = e.invent({ create: function(h) {
      this.init = !1, this.reversed = !1, this.reversing = !1, this.duration = new e.Number(h.duration).valueOf(), this.delay = new e.Number(h.delay).valueOf(), this.start = +/* @__PURE__ */ new Date() + this.delay, this.finish = this.start + this.duration, this.ease = h.ease, this.loop = 0, this.loops = !1, this.animations = {}, this.attrs = {}, this.styles = {}, this.transforms = [], this.once = {};
    } }), e.FX = e.invent({ create: function(h) {
      this._target = h, this.situations = [], this.active = !1, this.situation = null, this.paused = !1, this.lastPos = 0, this.pos = 0, this.absPos = 0, this._speed = 1;
    }, extend: { animate: function(h, m, k) {
      v(h) === "object" && (m = h.ease, k = h.delay, h = h.duration);
      var C = new e.Situation({ duration: h || 1e3, delay: k || 0, ease: e.easing[m || "-"] || m });
      return this.queue(C), this;
    }, target: function(h) {
      return h && h instanceof e.Element ? (this._target = h, this) : this._target;
    }, timeToAbsPos: function(h) {
      return (h - this.situation.start) / (this.situation.duration / this._speed);
    }, absPosToTime: function(h) {
      return this.situation.duration / this._speed * h + this.situation.start;
    }, startAnimFrame: function() {
      this.stopAnimFrame(), this.animationFrame = E.requestAnimationFrame((function() {
        this.step();
      }).bind(this));
    }, stopAnimFrame: function() {
      E.cancelAnimationFrame(this.animationFrame);
    }, start: function() {
      return !this.active && this.situation && (this.active = !0, this.startCurrent()), this;
    }, startCurrent: function() {
      return this.situation.start = +/* @__PURE__ */ new Date() + this.situation.delay / this._speed, this.situation.finish = this.situation.start + this.situation.duration / this._speed, this.initAnimations().step();
    }, queue: function(h) {
      return (typeof h == "function" || h instanceof e.Situation) && this.situations.push(h), this.situation || (this.situation = this.situations.shift()), this;
    }, dequeue: function() {
      return this.stop(), this.situation = this.situations.shift(), this.situation && (this.situation instanceof e.Situation ? this.start() : this.situation.call(this)), this;
    }, initAnimations: function() {
      var h, m = this.situation;
      if (m.init)
        return this;
      for (var k in m.animations) {
        h = this.target()[k](), Array.isArray(h) || (h = [h]), Array.isArray(m.animations[k]) || (m.animations[k] = [m.animations[k]]);
        for (var C = h.length; C--; )
          m.animations[k][C] instanceof e.Number && (h[C] = new e.Number(h[C])), m.animations[k][C] = h[C].morph(m.animations[k][C]);
      }
      for (var k in m.attrs)
        m.attrs[k] = new e.MorphObj(this.target().attr(k), m.attrs[k]);
      for (var k in m.styles)
        m.styles[k] = new e.MorphObj(this.target().style(k), m.styles[k]);
      return m.initialTransformation = this.target().matrixify(), m.init = !0, this;
    }, clearQueue: function() {
      return this.situations = [], this;
    }, clearCurrent: function() {
      return this.situation = null, this;
    }, stop: function(h, m) {
      var k = this.active;
      return this.active = !1, m && this.clearQueue(), h && this.situation && (!k && this.startCurrent(), this.atEnd()), this.stopAnimFrame(), this.clearCurrent();
    }, after: function(h) {
      var m = this.last();
      return this.target().on("finished.fx", function k(C) {
        C.detail.situation == m && (h.call(this, m), this.off("finished.fx", k));
      }), this._callStart();
    }, during: function(h) {
      var m = this.last(), k = function(C) {
        C.detail.situation == m && h.call(this, C.detail.pos, e.morph(C.detail.pos), C.detail.eased, m);
      };
      return this.target().off("during.fx", k).on("during.fx", k), this.after(function() {
        this.off("during.fx", k);
      }), this._callStart();
    }, afterAll: function(h) {
      var m = function k(C) {
        h.call(this), this.off("allfinished.fx", k);
      };
      return this.target().off("allfinished.fx", m).on("allfinished.fx", m), this._callStart();
    }, last: function() {
      return this.situations.length ? this.situations[this.situations.length - 1] : this.situation;
    }, add: function(h, m, k) {
      return this.last()[k || "animations"][h] = m, this._callStart();
    }, step: function(h) {
      var m, k, C;
      h || (this.absPos = this.timeToAbsPos(+/* @__PURE__ */ new Date())), this.situation.loops !== !1 ? (m = Math.max(this.absPos, 0), k = Math.floor(m), this.situation.loops === !0 || k < this.situation.loops ? (this.pos = m - k, C = this.situation.loop, this.situation.loop = k) : (this.absPos = this.situation.loops, this.pos = 1, C = this.situation.loop - 1, this.situation.loop = this.situation.loops), this.situation.reversing && (this.situation.reversed = this.situation.reversed != !!((this.situation.loop - C) % 2))) : (this.absPos = Math.min(this.absPos, 1), this.pos = this.absPos), this.pos < 0 && (this.pos = 0), this.situation.reversed && (this.pos = 1 - this.pos);
      var O = this.situation.ease(this.pos);
      for (var I in this.situation.once)
        I > this.lastPos && I <= O && (this.situation.once[I].call(this.target(), this.pos, O), delete this.situation.once[I]);
      return this.active && this.target().fire("during", { pos: this.pos, eased: O, fx: this, situation: this.situation }), this.situation ? (this.eachAt(), this.pos == 1 && !this.situation.reversed || this.situation.reversed && this.pos == 0 ? (this.stopAnimFrame(), this.target().fire("finished", { fx: this, situation: this.situation }), this.situations.length || (this.target().fire("allfinished"), this.situations.length || (this.target().off(".fx"), this.active = !1)), this.active ? this.dequeue() : this.clearCurrent()) : !this.paused && this.active && this.startAnimFrame(), this.lastPos = O, this) : this;
    }, eachAt: function() {
      var h, m = this, k = this.target(), C = this.situation;
      for (var O in C.animations)
        h = [].concat(C.animations[O]).map(function(Y) {
          return typeof Y != "string" && Y.at ? Y.at(C.ease(m.pos), m.pos) : Y;
        }), k[O].apply(k, h);
      for (var O in C.attrs)
        h = [O].concat(C.attrs[O]).map(function(W) {
          return typeof W != "string" && W.at ? W.at(C.ease(m.pos), m.pos) : W;
        }), k.attr.apply(k, h);
      for (var O in C.styles)
        h = [O].concat(C.styles[O]).map(function(W) {
          return typeof W != "string" && W.at ? W.at(C.ease(m.pos), m.pos) : W;
        }), k.style.apply(k, h);
      if (C.transforms.length) {
        h = C.initialTransformation, O = 0;
        for (var I = C.transforms.length; O < I; O++) {
          var X = C.transforms[O];
          X instanceof e.Matrix ? h = X.relative ? h.multiply(new e.Matrix().morph(X).at(C.ease(this.pos))) : h.morph(X).at(C.ease(this.pos)) : (X.relative || X.undo(h.extract()), h = h.multiply(X.at(C.ease(this.pos))));
        }
        k.matrix(h);
      }
      return this;
    }, once: function(h, m, k) {
      var C = this.last();
      return k || (h = C.ease(h)), C.once[h] = m, this;
    }, _callStart: function() {
      return setTimeout((function() {
        this.start();
      }).bind(this), 0), this;
    } }, parent: e.Element, construct: { animate: function(h, m, k) {
      return (this.fx || (this.fx = new e.FX(this))).animate(h, m, k);
    }, delay: function(h) {
      return (this.fx || (this.fx = new e.FX(this))).delay(h);
    }, stop: function(h, m) {
      return this.fx && this.fx.stop(h, m), this;
    }, finish: function() {
      return this.fx && this.fx.finish(), this;
    } } }), e.MorphObj = e.invent({ create: function(h, m) {
      return e.Color.isColor(m) ? new e.Color(h).morph(m) : e.regex.delimiter.test(h) ? e.regex.pathLetters.test(h) ? new e.PathArray(h).morph(m) : new e.Array(h).morph(m) : e.regex.numberAndUnit.test(m) ? new e.Number(h).morph(m) : (this.value = h, void (this.destination = m));
    }, extend: { at: function(h, m) {
      return m < 1 ? this.value : this.destination;
    }, valueOf: function() {
      return this.value;
    } } }), e.extend(e.FX, { attr: function(h, m, k) {
      if (v(h) === "object")
        for (var C in h)
          this.attr(C, h[C]);
      else
        this.add(h, m, "attrs");
      return this;
    }, plot: function(h, m, k, C) {
      return arguments.length == 4 ? this.plot([h, m, k, C]) : this.add("plot", new (this.target()).morphArray(h));
    } }), e.Box = e.invent({ create: function(h, m, k, C) {
      if (!(v(h) !== "object" || h instanceof e.Element))
        return e.Box.call(this, h.left != null ? h.left : h.x, h.top != null ? h.top : h.y, h.width, h.height);
      var O;
      arguments.length == 4 && (this.x = h, this.y = m, this.width = k, this.height = C), (O = this).x == null && (O.x = 0, O.y = 0, O.width = 0, O.height = 0), O.w = O.width, O.h = O.height, O.x2 = O.x + O.width, O.y2 = O.y + O.height, O.cx = O.x + O.width / 2, O.cy = O.y + O.height / 2;
    } }), e.BBox = e.invent({ create: function(h) {
      if (e.Box.apply(this, [].slice.call(arguments)), h instanceof e.Element) {
        var m;
        try {
          if (!t.documentElement.contains) {
            for (var k = h.node; k.parentNode; )
              k = k.parentNode;
            if (k != t)
              throw new Error("Element not in the dom");
          }
          m = h.node.getBBox();
        } catch {
          if (h instanceof e.Shape) {
            e.parser.draw || e.prepare();
            var C = h.clone(e.parser.draw.instance).show();
            C && C.node && typeof C.node.getBBox == "function" && (m = C.node.getBBox()), C && typeof C.remove == "function" && C.remove();
          } else
            m = { x: h.node.clientLeft, y: h.node.clientTop, width: h.node.clientWidth, height: h.node.clientHeight };
        }
        e.Box.call(this, m);
      }
    }, inherit: e.Box, parent: e.Element, construct: { bbox: function() {
      return new e.BBox(this);
    } } }), e.BBox.prototype.constructor = e.BBox, e.Matrix = e.invent({ create: function(h) {
      var m = y([1, 0, 0, 1, 0, 0]);
      h = h === null ? m : h instanceof e.Element ? h.matrixify() : typeof h == "string" ? y(h.split(e.regex.delimiter).map(parseFloat)) : arguments.length == 6 ? y([].slice.call(arguments)) : Array.isArray(h) ? y(h) : h && v(h) === "object" ? h : m;
      for (var k = N.length - 1; k >= 0; --k)
        this[N[k]] = h[N[k]] != null ? h[N[k]] : m[N[k]];
    }, extend: { extract: function() {
      var h = b(this, 0, 1);
      b(this, 1, 0);
      var m = 180 / Math.PI * Math.atan2(h.y, h.x) - 90;
      return { x: this.e, y: this.f, transformedX: (this.e * Math.cos(m * Math.PI / 180) + this.f * Math.sin(m * Math.PI / 180)) / Math.sqrt(this.a * this.a + this.b * this.b), transformedY: (this.f * Math.cos(m * Math.PI / 180) + this.e * Math.sin(-m * Math.PI / 180)) / Math.sqrt(this.c * this.c + this.d * this.d), rotation: m, a: this.a, b: this.b, c: this.c, d: this.d, e: this.e, f: this.f, matrix: new e.Matrix(this) };
    }, clone: function() {
      return new e.Matrix(this);
    }, morph: function(h) {
      return this.destination = new e.Matrix(h), this;
    }, multiply: function(h) {
      return new e.Matrix(this.native().multiply(function(m) {
        return m instanceof e.Matrix || (m = new e.Matrix(m)), m;
      }(h).native()));
    }, inverse: function() {
      return new e.Matrix(this.native().inverse());
    }, translate: function(h, m) {
      return new e.Matrix(this.native().translate(h || 0, m || 0));
    }, native: function() {
      for (var h = e.parser.native.createSVGMatrix(), m = N.length - 1; m >= 0; m--)
        h[N[m]] = this[N[m]];
      return h;
    }, toString: function() {
      return "matrix(" + S(this.a) + "," + S(this.b) + "," + S(this.c) + "," + S(this.d) + "," + S(this.e) + "," + S(this.f) + ")";
    } }, parent: e.Element, construct: { ctm: function() {
      return new e.Matrix(this.node.getCTM());
    }, screenCTM: function() {
      if (this instanceof e.Nested) {
        var h = this.rect(1, 1), m = h.node.getScreenCTM();
        return h.remove(), new e.Matrix(m);
      }
      return new e.Matrix(this.node.getScreenCTM());
    } } }), e.Point = e.invent({ create: function(h, m) {
      var k;
      k = Array.isArray(h) ? { x: h[0], y: h[1] } : v(h) === "object" ? { x: h.x, y: h.y } : h != null ? { x: h, y: m ?? h } : { x: 0, y: 0 }, this.x = k.x, this.y = k.y;
    }, extend: { clone: function() {
      return new e.Point(this);
    }, morph: function(h, m) {
      return this.destination = new e.Point(h, m), this;
    } } }), e.extend(e.Element, { point: function(h, m) {
      return new e.Point(h, m).transform(this.screenCTM().inverse());
    } }), e.extend(e.Element, { attr: function(h, m, k) {
      if (h == null) {
        for (h = {}, k = (m = this.node.attributes).length - 1; k >= 0; k--)
          h[m[k].nodeName] = e.regex.isNumber.test(m[k].nodeValue) ? parseFloat(m[k].nodeValue) : m[k].nodeValue;
        return h;
      }
      if (v(h) === "object")
        for (var C in h)
          this.attr(C, h[C]);
      else if (m === null)
        this.node.removeAttribute(h);
      else {
        if (m == null)
          return (m = this.node.getAttribute(h)) == null ? e.defaults.attrs[h] : e.regex.isNumber.test(m) ? parseFloat(m) : m;
        h == "stroke-width" ? this.attr("stroke", parseFloat(m) > 0 ? this._stroke : null) : h == "stroke" && (this._stroke = m), h != "fill" && h != "stroke" || (e.regex.isImage.test(m) && (m = this.doc().defs().image(m, 0, 0)), m instanceof e.Image && (m = this.doc().defs().pattern(0, 0, function() {
          this.add(m);
        }))), typeof m == "number" ? m = new e.Number(m) : e.Color.isColor(m) ? m = new e.Color(m) : Array.isArray(m) && (m = new e.Array(m)), h == "leading" ? this.leading && this.leading(m) : typeof k == "string" ? this.node.setAttributeNS(k, h, m.toString()) : this.node.setAttribute(h, m.toString()), !this.rebuild || h != "font-size" && h != "x" || this.rebuild(h, m);
      }
      return this;
    } }), e.extend(e.Element, { transform: function(h, m) {
      var k;
      return v(h) !== "object" ? (k = new e.Matrix(this).extract(), typeof h == "string" ? k[h] : k) : (k = new e.Matrix(this), m = !!m || !!h.relative, h.a != null && (k = m ? k.multiply(new e.Matrix(h)) : new e.Matrix(h)), this.attr("transform", k));
    } }), e.extend(e.Element, { untransform: function() {
      return this.attr("transform", null);
    }, matrixify: function() {
      return (this.attr("transform") || "").split(e.regex.transforms).slice(0, -1).map(function(h) {
        var m = h.trim().split("(");
        return [m[0], m[1].split(e.regex.delimiter).map(function(k) {
          return parseFloat(k);
        })];
      }).reduce(function(h, m) {
        return m[0] == "matrix" ? h.multiply(y(m[1])) : h[m[0]].apply(h, m[1]);
      }, new e.Matrix());
    }, toParent: function(h) {
      if (this == h)
        return this;
      var m = this.screenCTM(), k = h.screenCTM().inverse();
      return this.addTo(h).untransform().transform(k.multiply(m)), this;
    }, toDoc: function() {
      return this.toParent(this.doc());
    } }), e.Transformation = e.invent({ create: function(h, m) {
      if (arguments.length > 1 && typeof m != "boolean")
        return this.constructor.call(this, [].slice.call(arguments));
      if (Array.isArray(h))
        for (var k = 0, C = this.arguments.length; k < C; ++k)
          this[this.arguments[k]] = h[k];
      else if (h && v(h) === "object")
        for (k = 0, C = this.arguments.length; k < C; ++k)
          this[this.arguments[k]] = h[this.arguments[k]];
      this.inversed = !1, m === !0 && (this.inversed = !0);
    } }), e.Translate = e.invent({ parent: e.Matrix, inherit: e.Transformation, create: function(h, m) {
      this.constructor.apply(this, [].slice.call(arguments));
    }, extend: { arguments: ["transformedX", "transformedY"], method: "translate" } }), e.extend(e.Element, { style: function(h, m) {
      if (arguments.length == 0)
        return this.node.style.cssText || "";
      if (arguments.length < 2)
        if (v(h) === "object")
          for (var k in h)
            this.style(k, h[k]);
        else {
          if (!e.regex.isCss.test(h))
            return this.node.style[d(h)];
          for (h = h.split(/\s*;\s*/).filter(function(C) {
            return !!C;
          }).map(function(C) {
            return C.split(/\s*:\s*/);
          }); m = h.pop(); )
            this.style(m[0], m[1]);
        }
      else
        this.node.style[d(h)] = m === null || e.regex.isBlank.test(m) ? "" : m;
      return this;
    } }), e.Parent = e.invent({ create: function(h) {
      this.constructor.call(this, h);
    }, inherit: e.Element, extend: { children: function() {
      return e.utils.map(e.utils.filterSVGElements(this.node.childNodes), function(h) {
        return e.adopt(h);
      });
    }, add: function(h, m) {
      return m == null ? this.node.appendChild(h.node) : h.node != this.node.childNodes[m] && this.node.insertBefore(h.node, this.node.childNodes[m]), this;
    }, put: function(h, m) {
      return this.add(h, m), h;
    }, has: function(h) {
      return this.index(h) >= 0;
    }, index: function(h) {
      return [].slice.call(this.node.childNodes).indexOf(h.node);
    }, get: function(h) {
      return e.adopt(this.node.childNodes[h]);
    }, first: function() {
      return this.get(0);
    }, last: function() {
      return this.get(this.node.childNodes.length - 1);
    }, each: function(h, m) {
      for (var k = this.children(), C = 0, O = k.length; C < O; C++)
        k[C] instanceof e.Element && h.apply(k[C], [C, k]), m && k[C] instanceof e.Container && k[C].each(h, m);
      return this;
    }, removeElement: function(h) {
      return this.node.removeChild(h.node), this;
    }, clear: function() {
      for (; this.node.hasChildNodes(); )
        this.node.removeChild(this.node.lastChild);
      return delete this._defs, this;
    }, defs: function() {
      return this.doc().defs();
    } } }), e.extend(e.Parent, { ungroup: function(h, m) {
      return m === 0 || this instanceof e.Defs || this.node == e.parser.draw || (h = h || (this instanceof e.Doc ? this : this.parent(e.Parent)), m = m || 1 / 0, this.each(function() {
        return this instanceof e.Defs ? this : this instanceof e.Parent ? this.ungroup(h, m - 1) : this.toParent(h);
      }), this.node.firstChild || this.remove()), this;
    }, flatten: function(h, m) {
      return this.ungroup(h, m);
    } }), e.Container = e.invent({ create: function(h) {
      this.constructor.call(this, h);
    }, inherit: e.Parent }), e.ViewBox = e.invent({ parent: e.Container, construct: {} }), ["click", "dblclick", "mousedown", "mouseup", "mouseover", "mouseout", "mousemove", "touchstart", "touchmove", "touchleave", "touchend", "touchcancel"].forEach(function(h) {
      e.Element.prototype[h] = function(m) {
        return e.on(this.node, h, m), this;
      };
    }), e.listeners = [], e.handlerMap = [], e.listenerId = 0, e.on = function(h, m, k, C, O) {
      var I = k.bind(C || h.instance || h), X = (e.handlerMap.indexOf(h) + 1 || e.handlerMap.push(h)) - 1, Y = m.split(".")[0], W = m.split(".")[1] || "*";
      e.listeners[X] = e.listeners[X] || {}, e.listeners[X][Y] = e.listeners[X][Y] || {}, e.listeners[X][Y][W] = e.listeners[X][Y][W] || {}, k._svgjsListenerId || (k._svgjsListenerId = ++e.listenerId), e.listeners[X][Y][W][k._svgjsListenerId] = I, h.addEventListener(Y, I, O || { passive: !0 });
    }, e.off = function(h, m, k) {
      var C = e.handlerMap.indexOf(h), O = m && m.split(".")[0], I = m && m.split(".")[1], X = "";
      if (C != -1)
        if (k) {
          if (typeof k == "function" && (k = k._svgjsListenerId), !k)
            return;
          e.listeners[C][O] && e.listeners[C][O][I || "*"] && (h.removeEventListener(O, e.listeners[C][O][I || "*"][k], !1), delete e.listeners[C][O][I || "*"][k]);
        } else if (I && O) {
          if (e.listeners[C][O] && e.listeners[C][O][I]) {
            for (var Y in e.listeners[C][O][I])
              e.off(h, [O, I].join("."), Y);
            delete e.listeners[C][O][I];
          }
        } else if (I)
          for (var W in e.listeners[C])
            for (var X in e.listeners[C][W])
              I === X && e.off(h, [W, I].join("."));
        else if (O) {
          if (e.listeners[C][O]) {
            for (var X in e.listeners[C][O])
              e.off(h, [O, X].join("."));
            delete e.listeners[C][O];
          }
        } else {
          for (var W in e.listeners[C])
            e.off(h, W);
          delete e.listeners[C], delete e.handlerMap[C];
        }
    }, e.extend(e.Element, { on: function(h, m, k, C) {
      return e.on(this.node, h, m, k, C), this;
    }, off: function(h, m) {
      return e.off(this.node, h, m), this;
    }, fire: function(h, m) {
      return h instanceof E.Event ? this.node.dispatchEvent(h) : this.node.dispatchEvent(h = new e.CustomEvent(h, { detail: m, cancelable: !0 })), this._event = h, this;
    }, event: function() {
      return this._event;
    } }), e.Defs = e.invent({ create: "defs", inherit: e.Container }), e.G = e.invent({ create: "g", inherit: e.Container, extend: { x: function(h) {
      return h == null ? this.transform("x") : this.transform({ x: h - this.x() }, !0);
    } }, construct: { group: function() {
      return this.put(new e.G());
    } } }), e.Doc = e.invent({ create: function(h) {
      h && ((h = typeof h == "string" ? t.getElementById(h) : h).nodeName == "svg" ? this.constructor.call(this, h) : (this.constructor.call(this, e.create("svg")), h.appendChild(this.node), this.size("100%", "100%")), this.namespace().defs());
    }, inherit: e.Container, extend: { namespace: function() {
      return this.attr({ xmlns: e.ns, version: "1.1" }).attr("xmlns:xlink", e.xlink, e.xmlns).attr("xmlns:svgjs", e.svgjs, e.xmlns);
    }, defs: function() {
      var h;
      return this._defs || ((h = this.node.getElementsByTagName("defs")[0]) ? this._defs = e.adopt(h) : this._defs = new e.Defs(), this.node.appendChild(this._defs.node)), this._defs;
    }, parent: function() {
      return this.node.parentNode && this.node.parentNode.nodeName != "#document" ? this.node.parentNode : null;
    }, remove: function() {
      return this.parent() && this.parent().removeChild(this.node), this;
    }, clear: function() {
      for (; this.node.hasChildNodes(); )
        this.node.removeChild(this.node.lastChild);
      return delete this._defs, e.parser.draw && !e.parser.draw.parentNode && this.node.appendChild(e.parser.draw), this;
    }, clone: function(h) {
      this.writeDataToDom();
      var m = this.node, k = A(m.cloneNode(!0));
      return h ? (h.node || h).appendChild(k.node) : m.parentNode.insertBefore(k.node, m.nextSibling), k;
    } } }), e.extend(e.Element, {}), e.Gradient = e.invent({ create: function(h) {
      this.constructor.call(this, e.create(h + "Gradient")), this.type = h;
    }, inherit: e.Container, extend: { at: function(h, m, k) {
      return this.put(new e.Stop()).update(h, m, k);
    }, update: function(h) {
      return this.clear(), typeof h == "function" && h.call(this, this), this;
    }, fill: function() {
      return "url(#" + this.id() + ")";
    }, toString: function() {
      return this.fill();
    }, attr: function(h, m, k) {
      return h == "transform" && (h = "gradientTransform"), e.Container.prototype.attr.call(this, h, m, k);
    } }, construct: { gradient: function(h, m) {
      return this.defs().gradient(h, m);
    } } }), e.extend(e.Gradient, e.FX, { from: function(h, m) {
      return (this._target || this).type == "radial" ? this.attr({ fx: new e.Number(h), fy: new e.Number(m) }) : this.attr({ x1: new e.Number(h), y1: new e.Number(m) });
    }, to: function(h, m) {
      return (this._target || this).type == "radial" ? this.attr({ cx: new e.Number(h), cy: new e.Number(m) }) : this.attr({ x2: new e.Number(h), y2: new e.Number(m) });
    } }), e.extend(e.Defs, { gradient: function(h, m) {
      return this.put(new e.Gradient(h)).update(m);
    } }), e.Stop = e.invent({ create: "stop", inherit: e.Element, extend: { update: function(h) {
      return (typeof h == "number" || h instanceof e.Number) && (h = { offset: arguments[0], color: arguments[1], opacity: arguments[2] }), h.opacity != null && this.attr("stop-opacity", h.opacity), h.color != null && this.attr("stop-color", h.color), h.offset != null && this.attr("offset", new e.Number(h.offset)), this;
    } } }), e.Pattern = e.invent({ create: "pattern", inherit: e.Container, extend: { fill: function() {
      return "url(#" + this.id() + ")";
    }, update: function(h) {
      return this.clear(), typeof h == "function" && h.call(this, this), this;
    }, toString: function() {
      return this.fill();
    }, attr: function(h, m, k) {
      return h == "transform" && (h = "patternTransform"), e.Container.prototype.attr.call(this, h, m, k);
    } }, construct: { pattern: function(h, m, k) {
      return this.defs().pattern(h, m, k);
    } } }), e.extend(e.Defs, { pattern: function(h, m, k) {
      return this.put(new e.Pattern()).update(k).attr({ x: 0, y: 0, width: h, height: m, patternUnits: "userSpaceOnUse" });
    } }), e.Shape = e.invent({ create: function(h) {
      this.constructor.call(this, h);
    }, inherit: e.Element }), e.Symbol = e.invent({ create: "symbol", inherit: e.Container, construct: { symbol: function() {
      return this.put(new e.Symbol());
    } } }), e.Use = e.invent({ create: "use", inherit: e.Shape, extend: { element: function(h, m) {
      return this.attr("href", (m || "") + "#" + h, e.xlink);
    } }, construct: { use: function(h, m) {
      return this.put(new e.Use()).element(h, m);
    } } }), e.Rect = e.invent({ create: "rect", inherit: e.Shape, construct: { rect: function(h, m) {
      return this.put(new e.Rect()).size(h, m);
    } } }), e.Circle = e.invent({ create: "circle", inherit: e.Shape, construct: { circle: function(h) {
      return this.put(new e.Circle()).rx(new e.Number(h).divide(2)).move(0, 0);
    } } }), e.extend(e.Circle, e.FX, { rx: function(h) {
      return this.attr("r", h);
    }, ry: function(h) {
      return this.rx(h);
    } }), e.Ellipse = e.invent({ create: "ellipse", inherit: e.Shape, construct: { ellipse: function(h, m) {
      return this.put(new e.Ellipse()).size(h, m).move(0, 0);
    } } }), e.extend(e.Ellipse, e.Rect, e.FX, { rx: function(h) {
      return this.attr("rx", h);
    }, ry: function(h) {
      return this.attr("ry", h);
    } }), e.extend(e.Circle, e.Ellipse, { x: function(h) {
      return h == null ? this.cx() - this.rx() : this.cx(h + this.rx());
    }, y: function(h) {
      return h == null ? this.cy() - this.ry() : this.cy(h + this.ry());
    }, cx: function(h) {
      return h == null ? this.attr("cx") : this.attr("cx", h);
    }, cy: function(h) {
      return h == null ? this.attr("cy") : this.attr("cy", h);
    }, width: function(h) {
      return h == null ? 2 * this.rx() : this.rx(new e.Number(h).divide(2));
    }, height: function(h) {
      return h == null ? 2 * this.ry() : this.ry(new e.Number(h).divide(2));
    }, size: function(h, m) {
      var k = x(this, h, m);
      return this.rx(new e.Number(k.width).divide(2)).ry(new e.Number(k.height).divide(2));
    } }), e.Line = e.invent({ create: "line", inherit: e.Shape, extend: { array: function() {
      return new e.PointArray([[this.attr("x1"), this.attr("y1")], [this.attr("x2"), this.attr("y2")]]);
    }, plot: function(h, m, k, C) {
      return h == null ? this.array() : (h = m !== void 0 ? { x1: h, y1: m, x2: k, y2: C } : new e.PointArray(h).toLine(), this.attr(h));
    }, move: function(h, m) {
      return this.attr(this.array().move(h, m).toLine());
    }, size: function(h, m) {
      var k = x(this, h, m);
      return this.attr(this.array().size(k.width, k.height).toLine());
    } }, construct: { line: function(h, m, k, C) {
      return e.Line.prototype.plot.apply(this.put(new e.Line()), h != null ? [h, m, k, C] : [0, 0, 0, 0]);
    } } }), e.Polyline = e.invent({ create: "polyline", inherit: e.Shape, construct: { polyline: function(h) {
      return this.put(new e.Polyline()).plot(h || new e.PointArray());
    } } }), e.Polygon = e.invent({ create: "polygon", inherit: e.Shape, construct: { polygon: function(h) {
      return this.put(new e.Polygon()).plot(h || new e.PointArray());
    } } }), e.extend(e.Polyline, e.Polygon, { array: function() {
      return this._array || (this._array = new e.PointArray(this.attr("points")));
    }, plot: function(h) {
      return h == null ? this.array() : this.clear().attr("points", typeof h == "string" ? h : this._array = new e.PointArray(h));
    }, clear: function() {
      return delete this._array, this;
    }, move: function(h, m) {
      return this.attr("points", this.array().move(h, m));
    }, size: function(h, m) {
      var k = x(this, h, m);
      return this.attr("points", this.array().size(k.width, k.height));
    } }), e.extend(e.Line, e.Polyline, e.Polygon, { morphArray: e.PointArray, x: function(h) {
      return h == null ? this.bbox().x : this.move(h, this.bbox().y);
    }, y: function(h) {
      return h == null ? this.bbox().y : this.move(this.bbox().x, h);
    }, width: function(h) {
      var m = this.bbox();
      return h == null ? m.width : this.size(h, m.height);
    }, height: function(h) {
      var m = this.bbox();
      return h == null ? m.height : this.size(m.width, h);
    } }), e.Path = e.invent({ create: "path", inherit: e.Shape, extend: { morphArray: e.PathArray, array: function() {
      return this._array || (this._array = new e.PathArray(this.attr("d")));
    }, plot: function(h) {
      return h == null ? this.array() : this.clear().attr("d", typeof h == "string" ? h : this._array = new e.PathArray(h));
    }, clear: function() {
      return delete this._array, this;
    } }, construct: { path: function(h) {
      return this.put(new e.Path()).plot(h || new e.PathArray());
    } } }), e.Image = e.invent({ create: "image", inherit: e.Shape, extend: { load: function(h) {
      if (!h)
        return this;
      var m = this, k = new E.Image();
      return e.on(k, "load", function() {
        e.off(k);
        var C = m.parent(e.Pattern);
        C !== null && (m.width() == 0 && m.height() == 0 && m.size(k.width, k.height), C && C.width() == 0 && C.height() == 0 && C.size(m.width(), m.height()), typeof m._loaded == "function" && m._loaded.call(m, { width: k.width, height: k.height, ratio: k.width / k.height, url: h }));
      }), e.on(k, "error", function(C) {
        e.off(k), typeof m._error == "function" && m._error.call(m, C);
      }), this.attr("href", k.src = this.src = h, e.xlink);
    }, loaded: function(h) {
      return this._loaded = h, this;
    }, error: function(h) {
      return this._error = h, this;
    } }, construct: { image: function(h, m, k) {
      return this.put(new e.Image()).load(h).size(m || 0, k || m || 0);
    } } }), e.Text = e.invent({ create: function() {
      this.constructor.call(this, e.create("text")), this.dom.leading = new e.Number(1.3), this._rebuild = !0, this._build = !1, this.attr("font-family", e.defaults.attrs["font-family"]);
    }, inherit: e.Shape, extend: { x: function(h) {
      return h == null ? this.attr("x") : this.attr("x", h);
    }, text: function(h) {
      if (h === void 0) {
        h = "";
        for (var m = this.node.childNodes, k = 0, C = m.length; k < C; ++k)
          k != 0 && m[k].nodeType != 3 && e.adopt(m[k]).dom.newLined == 1 && (h += `
`), h += m[k].textContent;
        return h;
      }
      if (this.clear().build(!0), typeof h == "function")
        h.call(this, this);
      else {
        k = 0;
        for (var O = (h = h.split(`
`)).length; k < O; k++)
          this.tspan(h[k]).newLine();
      }
      return this.build(!1).rebuild();
    }, size: function(h) {
      return this.attr("font-size", h).rebuild();
    }, leading: function(h) {
      return h == null ? this.dom.leading : (this.dom.leading = new e.Number(h), this.rebuild());
    }, lines: function() {
      var h = (this.textPath && this.textPath() || this).node, m = e.utils.map(e.utils.filterSVGElements(h.childNodes), function(k) {
        return e.adopt(k);
      });
      return new e.Set(m);
    }, rebuild: function(h) {
      if (typeof h == "boolean" && (this._rebuild = h), this._rebuild) {
        var m = this, k = 0, C = this.dom.leading * new e.Number(this.attr("font-size"));
        this.lines().each(function() {
          this.dom.newLined && (m.textPath() || this.attr("x", m.attr("x")), this.text() == `
` ? k += C : (this.attr("dy", C + k), k = 0));
        }), this.fire("rebuild");
      }
      return this;
    }, build: function(h) {
      return this._build = !!h, this;
    }, setData: function(h) {
      return this.dom = h, this.dom.leading = new e.Number(h.leading || 1.3), this;
    } }, construct: { text: function(h) {
      return this.put(new e.Text()).text(h);
    }, plain: function(h) {
      return this.put(new e.Text()).plain(h);
    } } }), e.Tspan = e.invent({ create: "tspan", inherit: e.Shape, extend: { text: function(h) {
      return h == null ? this.node.textContent + (this.dom.newLined ? `
` : "") : (typeof h == "function" ? h.call(this, this) : this.plain(h), this);
    }, dx: function(h) {
      return this.attr("dx", h);
    }, dy: function(h) {
      return this.attr("dy", h);
    }, newLine: function() {
      var h = this.parent(e.Text);
      return this.dom.newLined = !0, this.dy(h.dom.leading * h.attr("font-size")).attr("x", h.x());
    } } }), e.extend(e.Text, e.Tspan, { plain: function(h) {
      return this._build === !1 && this.clear(), this.node.appendChild(t.createTextNode(h)), this;
    }, tspan: function(h) {
      var m = (this.textPath && this.textPath() || this).node, k = new e.Tspan();
      return this._build === !1 && this.clear(), m.appendChild(k.node), k.text(h);
    }, clear: function() {
      for (var h = (this.textPath && this.textPath() || this).node; h.hasChildNodes(); )
        h.removeChild(h.lastChild);
      return this;
    }, length: function() {
      return this.node.getComputedTextLength();
    } }), e.TextPath = e.invent({ create: "textPath", inherit: e.Parent, parent: e.Text, construct: { morphArray: e.PathArray, array: function() {
      var h = this.track();
      return h ? h.array() : null;
    }, plot: function(h) {
      var m = this.track(), k = null;
      return m && (k = m.plot(h)), h == null ? k : this;
    }, track: function() {
      var h = this.textPath();
      if (h)
        return h.reference("href");
    }, textPath: function() {
      if (this.node.firstChild && this.node.firstChild.nodeName == "textPath")
        return e.adopt(this.node.firstChild);
    } } }), e.Nested = e.invent({ create: function() {
      this.constructor.call(this, e.create("svg")), this.style("overflow", "visible");
    }, inherit: e.Container, construct: { nested: function() {
      return this.put(new e.Nested());
    } } });
    var n = { stroke: ["color", "width", "opacity", "linecap", "linejoin", "miterlimit", "dasharray", "dashoffset"], fill: ["color", "opacity", "rule"], prefix: function(h, m) {
      return m == "color" ? h : h + "-" + m;
    } };
    function c(h, m, k, C) {
      return k + C.replace(e.regex.dots, " .");
    }
    function d(h) {
      return h.toLowerCase().replace(/-(.)/g, function(m, k) {
        return k.toUpperCase();
      });
    }
    function g(h) {
      return h.charAt(0).toUpperCase() + h.slice(1);
    }
    function p(h) {
      var m = h.toString(16);
      return m.length == 1 ? "0" + m : m;
    }
    function x(h, m, k) {
      if (m == null || k == null) {
        var C = h.bbox();
        m == null ? m = C.width / C.height * k : k == null && (k = C.height / C.width * m);
      }
      return { width: m, height: k };
    }
    function b(h, m, k) {
      return { x: m * h.a + k * h.c + 0, y: m * h.b + k * h.d + 0 };
    }
    function y(h) {
      return { a: h[0], b: h[1], c: h[2], d: h[3], e: h[4], f: h[5] };
    }
    function A(h) {
      for (var m = h.childNodes.length - 1; m >= 0; m--)
        h.childNodes[m] instanceof E.SVGElement && A(h.childNodes[m]);
      return e.adopt(h).id(e.eid(h.nodeName));
    }
    function S(h) {
      return Math.abs(h) > 1e-37 ? h : 0;
    }
    ["fill", "stroke"].forEach(function(h) {
      var m = {};
      m[h] = function(k) {
        if (k === void 0)
          return this;
        if (typeof k == "string" || e.Color.isRgb(k) || k && typeof k.fill == "function")
          this.attr(h, k);
        else
          for (var C = n[h].length - 1; C >= 0; C--)
            k[n[h][C]] != null && this.attr(n.prefix(h, n[h][C]), k[n[h][C]]);
        return this;
      }, e.extend(e.Element, e.FX, m);
    }), e.extend(e.Element, e.FX, { translate: function(h, m) {
      return this.transform({ x: h, y: m });
    }, matrix: function(h) {
      return this.attr("transform", new e.Matrix(arguments.length == 6 ? [].slice.call(arguments) : h));
    }, opacity: function(h) {
      return this.attr("opacity", h);
    }, dx: function(h) {
      return this.x(new e.Number(h).plus(this instanceof e.FX ? 0 : this.x()), !0);
    }, dy: function(h) {
      return this.y(new e.Number(h).plus(this instanceof e.FX ? 0 : this.y()), !0);
    } }), e.extend(e.Path, { length: function() {
      return this.node.getTotalLength();
    }, pointAt: function(h) {
      return this.node.getPointAtLength(h);
    } }), e.Set = e.invent({ create: function(h) {
      Array.isArray(h) ? this.members = h : this.clear();
    }, extend: { add: function() {
      for (var h = [].slice.call(arguments), m = 0, k = h.length; m < k; m++)
        this.members.push(h[m]);
      return this;
    }, remove: function(h) {
      var m = this.index(h);
      return m > -1 && this.members.splice(m, 1), this;
    }, each: function(h) {
      for (var m = 0, k = this.members.length; m < k; m++)
        h.apply(this.members[m], [m, this.members]);
      return this;
    }, clear: function() {
      return this.members = [], this;
    }, length: function() {
      return this.members.length;
    }, has: function(h) {
      return this.index(h) >= 0;
    }, index: function(h) {
      return this.members.indexOf(h);
    }, get: function(h) {
      return this.members[h];
    }, first: function() {
      return this.get(0);
    }, last: function() {
      return this.get(this.members.length - 1);
    }, valueOf: function() {
      return this.members;
    } }, construct: { set: function(h) {
      return new e.Set(h);
    } } }), e.FX.Set = e.invent({ create: function(h) {
      this.set = h;
    } }), e.Set.inherit = function() {
      var h = [];
      for (var m in e.Shape.prototype)
        typeof e.Shape.prototype[m] == "function" && typeof e.Set.prototype[m] != "function" && h.push(m);
      for (var m in h.forEach(function(C) {
        e.Set.prototype[C] = function() {
          for (var O = 0, I = this.members.length; O < I; O++)
            this.members[O] && typeof this.members[O][C] == "function" && this.members[O][C].apply(this.members[O], arguments);
          return C == "animate" ? this.fx || (this.fx = new e.FX.Set(this)) : this;
        };
      }), h = [], e.FX.prototype)
        typeof e.FX.prototype[m] == "function" && typeof e.FX.Set.prototype[m] != "function" && h.push(m);
      h.forEach(function(k) {
        e.FX.Set.prototype[k] = function() {
          for (var C = 0, O = this.set.members.length; C < O; C++)
            this.set.members[C].fx[k].apply(this.set.members[C].fx, arguments);
          return this;
        };
      });
    }, e.extend(e.Element, {}), e.extend(e.Element, { remember: function(h, m) {
      if (v(arguments[0]) === "object")
        for (var k in h)
          this.remember(k, h[k]);
      else {
        if (arguments.length == 1)
          return this.memory()[h];
        this.memory()[h] = m;
      }
      return this;
    }, forget: function() {
      if (arguments.length == 0)
        this._memory = {};
      else
        for (var h = arguments.length - 1; h >= 0; h--)
          delete this.memory()[arguments[h]];
      return this;
    }, memory: function() {
      return this._memory || (this._memory = {});
    } }), e.get = function(h) {
      var m = t.getElementById(function(k) {
        var C = (k || "").toString().match(e.regex.reference);
        if (C)
          return C[1];
      }(h) || h);
      return e.adopt(m);
    }, e.select = function(h, m) {
      return new e.Set(e.utils.map((m || t).querySelectorAll(h), function(k) {
        return e.adopt(k);
      }));
    }, e.extend(e.Parent, { select: function(h) {
      return e.select(h, this.node);
    } });
    var N = "abcdef".split("");
    if (typeof E.CustomEvent != "function") {
      var L = function(h, m) {
        m = m || { bubbles: !1, cancelable: !1, detail: void 0 };
        var k = t.createEvent("CustomEvent");
        return k.initCustomEvent(h, m.bubbles, m.cancelable, m.detail), k;
      };
      L.prototype = E.Event.prototype, e.CustomEvent = L;
    } else
      e.CustomEvent = E.CustomEvent;
    return e;
  }, v(l) === "object" ? a.exports = wi.document ? ws(wi, wi.document) : function(E) {
    return ws(E, E.document);
  } : wi.SVG = ws(wi, wi.document), /*! svg.filter.js - v2.0.2 - 2016-02-24
  * https://github.com/wout/svg.filter.js
  * Copyright (c) 2016 Wout Fierens; Licensed MIT */
  (function() {
    SVG.Filter = SVG.invent({ create: "filter", inherit: SVG.Parent, extend: { source: "SourceGraphic", sourceAlpha: "SourceAlpha", background: "BackgroundImage", backgroundAlpha: "BackgroundAlpha", fill: "FillPaint", stroke: "StrokePaint", autoSetIn: !0, put: function(o, n) {
      return this.add(o, n), !o.attr("in") && this.autoSetIn && o.attr("in", this.source), o.attr("result") || o.attr("result", o), o;
    }, blend: function(o, n, c) {
      return this.put(new SVG.BlendEffect(o, n, c));
    }, colorMatrix: function(o, n) {
      return this.put(new SVG.ColorMatrixEffect(o, n));
    }, convolveMatrix: function(o) {
      return this.put(new SVG.ConvolveMatrixEffect(o));
    }, componentTransfer: function(o) {
      return this.put(new SVG.ComponentTransferEffect(o));
    }, composite: function(o, n, c) {
      return this.put(new SVG.CompositeEffect(o, n, c));
    }, flood: function(o, n) {
      return this.put(new SVG.FloodEffect(o, n));
    }, offset: function(o, n) {
      return this.put(new SVG.OffsetEffect(o, n));
    }, image: function(o) {
      return this.put(new SVG.ImageEffect(o));
    }, merge: function() {
      var o = [void 0];
      for (var n in arguments)
        o.push(arguments[n]);
      return this.put(new (SVG.MergeEffect.bind.apply(SVG.MergeEffect, o))());
    }, gaussianBlur: function(o, n) {
      return this.put(new SVG.GaussianBlurEffect(o, n));
    }, morphology: function(o, n) {
      return this.put(new SVG.MorphologyEffect(o, n));
    }, diffuseLighting: function(o, n, c) {
      return this.put(new SVG.DiffuseLightingEffect(o, n, c));
    }, displacementMap: function(o, n, c, d, g) {
      return this.put(new SVG.DisplacementMapEffect(o, n, c, d, g));
    }, specularLighting: function(o, n, c, d) {
      return this.put(new SVG.SpecularLightingEffect(o, n, c, d));
    }, tile: function() {
      return this.put(new SVG.TileEffect());
    }, turbulence: function(o, n, c, d, g) {
      return this.put(new SVG.TurbulenceEffect(o, n, c, d, g));
    }, toString: function() {
      return "url(#" + this.attr("id") + ")";
    } } }), SVG.extend(SVG.Defs, { filter: function(o) {
      var n = this.put(new SVG.Filter());
      return typeof o == "function" && o.call(n, n), n;
    } }), SVG.extend(SVG.Container, { filter: function(o) {
      return this.defs().filter(o);
    } }), SVG.extend(SVG.Element, SVG.G, SVG.Nested, { filter: function(o) {
      return this.filterer = o instanceof SVG.Element ? o : this.doc().filter(o), this.doc() && this.filterer.doc() !== this.doc() && this.doc().defs().add(this.filterer), this.attr("filter", this.filterer), this.filterer;
    }, unfilter: function(o) {
      return this.filterer && o === !0 && this.filterer.remove(), delete this.filterer, this.attr("filter", null);
    } }), SVG.Effect = SVG.invent({ create: function() {
      this.constructor.call(this);
    }, inherit: SVG.Element, extend: { in: function(o) {
      return o == null ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", o);
    }, result: function(o) {
      return o == null ? this.attr("result") : this.attr("result", o);
    }, toString: function() {
      return this.result();
    } } }), SVG.ParentEffect = SVG.invent({ create: function() {
      this.constructor.call(this);
    }, inherit: SVG.Parent, extend: { in: function(o) {
      return o == null ? this.parent() && this.parent().select('[result="' + this.attr("in") + '"]').get(0) || this.attr("in") : this.attr("in", o);
    }, result: function(o) {
      return o == null ? this.attr("result") : this.attr("result", o);
    }, toString: function() {
      return this.result();
    } } });
    var E = { blend: function(o, n) {
      return this.parent() && this.parent().blend(this, o, n);
    }, colorMatrix: function(o, n) {
      return this.parent() && this.parent().colorMatrix(o, n).in(this);
    }, convolveMatrix: function(o) {
      return this.parent() && this.parent().convolveMatrix(o).in(this);
    }, componentTransfer: function(o) {
      return this.parent() && this.parent().componentTransfer(o).in(this);
    }, composite: function(o, n) {
      return this.parent() && this.parent().composite(this, o, n);
    }, flood: function(o, n) {
      return this.parent() && this.parent().flood(o, n);
    }, offset: function(o, n) {
      return this.parent() && this.parent().offset(o, n).in(this);
    }, image: function(o) {
      return this.parent() && this.parent().image(o);
    }, merge: function() {
      return this.parent() && this.parent().merge.apply(this.parent(), [this].concat(arguments));
    }, gaussianBlur: function(o, n) {
      return this.parent() && this.parent().gaussianBlur(o, n).in(this);
    }, morphology: function(o, n) {
      return this.parent() && this.parent().morphology(o, n).in(this);
    }, diffuseLighting: function(o, n, c) {
      return this.parent() && this.parent().diffuseLighting(o, n, c).in(this);
    }, displacementMap: function(o, n, c, d) {
      return this.parent() && this.parent().displacementMap(this, o, n, c, d);
    }, specularLighting: function(o, n, c, d) {
      return this.parent() && this.parent().specularLighting(o, n, c, d).in(this);
    }, tile: function() {
      return this.parent() && this.parent().tile().in(this);
    }, turbulence: function(o, n, c, d, g) {
      return this.parent() && this.parent().turbulence(o, n, c, d, g).in(this);
    } };
    SVG.extend(SVG.Effect, E), SVG.extend(SVG.ParentEffect, E), SVG.ChildEffect = SVG.invent({ create: function() {
      this.constructor.call(this);
    }, inherit: SVG.Element, extend: { in: function(o) {
      this.attr("in", o);
    } } });
    var t = { blend: function(o, n, c) {
      this.attr({ in: o, in2: n, mode: c || "normal" });
    }, colorMatrix: function(o, n) {
      o == "matrix" && (n = s(n)), this.attr({ type: o, values: n === void 0 ? null : n });
    }, convolveMatrix: function(o) {
      o = s(o), this.attr({ order: Math.sqrt(o.split(" ").length), kernelMatrix: o });
    }, composite: function(o, n, c) {
      this.attr({ in: o, in2: n, operator: c });
    }, flood: function(o, n) {
      this.attr("flood-color", o), n != null && this.attr("flood-opacity", n);
    }, offset: function(o, n) {
      this.attr({ dx: o, dy: n });
    }, image: function(o) {
      this.attr("href", o, SVG.xlink);
    }, displacementMap: function(o, n, c, d, g) {
      this.attr({ in: o, in2: n, scale: c, xChannelSelector: d, yChannelSelector: g });
    }, gaussianBlur: function(o, n) {
      o != null || n != null ? this.attr("stdDeviation", function(c) {
        if (!Array.isArray(c))
          return c;
        for (var d = 0, g = c.length, p = []; d < g; d++)
          p.push(c[d]);
        return p.join(" ");
      }(Array.prototype.slice.call(arguments))) : this.attr("stdDeviation", "0 0");
    }, morphology: function(o, n) {
      this.attr({ operator: o, radius: n });
    }, tile: function() {
    }, turbulence: function(o, n, c, d, g) {
      this.attr({ numOctaves: n, seed: c, stitchTiles: d, baseFrequency: o, type: g });
    } }, e = { merge: function() {
      var o;
      if (arguments[0] instanceof SVG.Set) {
        var n = this;
        arguments[0].each(function(d) {
          this instanceof SVG.MergeNode ? n.put(this) : (this instanceof SVG.Effect || this instanceof SVG.ParentEffect) && n.put(new SVG.MergeNode(this));
        });
      } else {
        o = Array.isArray(arguments[0]) ? arguments[0] : arguments;
        for (var c = 0; c < o.length; c++)
          o[c] instanceof SVG.MergeNode ? this.put(o[c]) : this.put(new SVG.MergeNode(o[c]));
      }
    }, componentTransfer: function(o) {
      if (this.rgb = new SVG.Set(), ["r", "g", "b", "a"].forEach((function(c) {
        this[c] = new SVG["Func" + c.toUpperCase()]("identity"), this.rgb.add(this[c]), this.node.appendChild(this[c].node);
      }).bind(this)), o)
        for (var n in o.rgb && (["r", "g", "b"].forEach((function(c) {
          this[c].attr(o.rgb);
        }).bind(this)), delete o.rgb), o)
          this[n].attr(o[n]);
    }, diffuseLighting: function(o, n, c) {
      this.attr({ surfaceScale: o, diffuseConstant: n, kernelUnitLength: c });
    }, specularLighting: function(o, n, c, d) {
      this.attr({ surfaceScale: o, diffuseConstant: n, specularExponent: c, kernelUnitLength: d });
    } }, i = { distantLight: function(o, n) {
      this.attr({ azimuth: o, elevation: n });
    }, pointLight: function(o, n, c) {
      this.attr({ x: o, y: n, z: c });
    }, spotLight: function(o, n, c, d, g, p) {
      this.attr({ x: o, y: n, z: c, pointsAtX: d, pointsAtY: g, pointsAtZ: p });
    }, mergeNode: function(o) {
      this.attr("in", o);
    } };
    function s(o) {
      return Array.isArray(o) && (o = new SVG.Array(o)), o.toString().replace(/^\s+/, "").replace(/\s+$/, "").replace(/\s+/g, " ");
    }
    function r() {
      var o = function() {
      };
      for (var n in typeof arguments[arguments.length - 1] == "function" && (o = arguments[arguments.length - 1], Array.prototype.splice.call(arguments, arguments.length - 1, 1)), arguments)
        for (var c in arguments[n])
          o(arguments[n][c], c, arguments[n]);
    }
    ["r", "g", "b", "a"].forEach(function(o) {
      i["Func" + o.toUpperCase()] = function(n) {
        switch (this.attr("type", n), n) {
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
    }), r(t, function(o, n) {
      var c = n.charAt(0).toUpperCase() + n.slice(1);
      SVG[c + "Effect"] = SVG.invent({ create: function() {
        this.constructor.call(this, SVG.create("fe" + c)), o.apply(this, arguments), this.result(this.attr("id") + "Out");
      }, inherit: SVG.Effect, extend: {} });
    }), r(e, function(o, n) {
      var c = n.charAt(0).toUpperCase() + n.slice(1);
      SVG[c + "Effect"] = SVG.invent({ create: function() {
        this.constructor.call(this, SVG.create("fe" + c)), o.apply(this, arguments), this.result(this.attr("id") + "Out");
      }, inherit: SVG.ParentEffect, extend: {} });
    }), r(i, function(o, n) {
      var c = n.charAt(0).toUpperCase() + n.slice(1);
      SVG[c] = SVG.invent({ create: function() {
        this.constructor.call(this, SVG.create("fe" + c)), o.apply(this, arguments);
      }, inherit: SVG.ChildEffect, extend: {} });
    }), SVG.extend(SVG.MergeEffect, { in: function(o) {
      return o instanceof SVG.MergeNode ? this.add(o, 0) : this.add(new SVG.MergeNode(o), 0), this;
    } }), SVG.extend(SVG.CompositeEffect, SVG.BlendEffect, SVG.DisplacementMapEffect, { in2: function(o) {
      return o == null ? this.parent() && this.parent().select('[result="' + this.attr("in2") + '"]').get(0) || this.attr("in2") : this.attr("in2", o);
    } }), SVG.filter = { sepiatone: [0.343, 0.669, 0.119, 0, 0, 0.249, 0.626, 0.13, 0, 0, 0.172, 0.334, 0.111, 0, 0, 0, 0, 0, 1, 0] };
  }).call(void 0), function() {
    function E(r, o, n, c, d, g, p) {
      for (var x = r.slice(o, n || p), b = c.slice(d, g || p), y = 0, A = { pos: [0, 0], start: [0, 0] }, S = { pos: [0, 0], start: [0, 0] }; x[y] = t.call(A, x[y]), b[y] = t.call(S, b[y]), x[y][0] != b[y][0] || x[y][0] == "M" || x[y][0] == "A" && (x[y][4] != b[y][4] || x[y][5] != b[y][5]) ? (Array.prototype.splice.apply(x, [y, 1].concat(i.call(A, x[y]))), Array.prototype.splice.apply(b, [y, 1].concat(i.call(S, b[y])))) : (x[y] = e.call(A, x[y]), b[y] = e.call(S, b[y])), !(++y == x.length && y == b.length); )
        y == x.length && x.push(["C", A.pos[0], A.pos[1], A.pos[0], A.pos[1], A.pos[0], A.pos[1]]), y == b.length && b.push(["C", S.pos[0], S.pos[1], S.pos[0], S.pos[1], S.pos[0], S.pos[1]]);
      return { start: x, dest: b };
    }
    function t(r) {
      switch (r[0]) {
        case "z":
        case "Z":
          r[0] = "L", r[1] = this.start[0], r[2] = this.start[1];
          break;
        case "H":
          r[0] = "L", r[2] = this.pos[1];
          break;
        case "V":
          r[0] = "L", r[2] = r[1], r[1] = this.pos[0];
          break;
        case "T":
          r[0] = "Q", r[3] = r[1], r[4] = r[2], r[1] = this.reflection[1], r[2] = this.reflection[0];
          break;
        case "S":
          r[0] = "C", r[6] = r[4], r[5] = r[3], r[4] = r[2], r[3] = r[1], r[2] = this.reflection[1], r[1] = this.reflection[0];
      }
      return r;
    }
    function e(r) {
      var o = r.length;
      return this.pos = [r[o - 2], r[o - 1]], "SCQT".indexOf(r[0]) != -1 && (this.reflection = [2 * this.pos[0] - r[o - 4], 2 * this.pos[1] - r[o - 3]]), r;
    }
    function i(r) {
      var o = [r];
      switch (r[0]) {
        case "M":
          return this.pos = this.start = [r[1], r[2]], o;
        case "L":
          r[5] = r[3] = r[1], r[6] = r[4] = r[2], r[1] = this.pos[0], r[2] = this.pos[1];
          break;
        case "Q":
          r[6] = r[4], r[5] = r[3], r[4] = 1 * r[4] / 3 + 2 * r[2] / 3, r[3] = 1 * r[3] / 3 + 2 * r[1] / 3, r[2] = 1 * this.pos[1] / 3 + 2 * r[2] / 3, r[1] = 1 * this.pos[0] / 3 + 2 * r[1] / 3;
          break;
        case "A":
          o = function(n, c) {
            var d, g, p, x, b, y, A, S, N, L, h, m, k, C, O, I, X, Y, W, q, U, st, dt, bt, Et, Dt, Ot = Math.abs(c[1]), Ht = Math.abs(c[2]), jt = c[3] % 360, Pe = c[4], me = c[5], Ge = c[6], je = c[7], he = new SVG.Point(n), ue = new SVG.Point(Ge, je), Vr = [];
            if (Ot === 0 || Ht === 0 || he.x === ue.x && he.y === ue.y)
              return [["C", he.x, he.y, ue.x, ue.y, ue.x, ue.y]];
            for (d = new SVG.Point((he.x - ue.x) / 2, (he.y - ue.y) / 2).transform(new SVG.Matrix().rotate(jt)), (g = d.x * d.x / (Ot * Ot) + d.y * d.y / (Ht * Ht)) > 1 && (Ot *= g = Math.sqrt(g), Ht *= g), p = new SVG.Matrix().rotate(jt).scale(1 / Ot, 1 / Ht).rotate(-jt), he = he.transform(p), ue = ue.transform(p), x = [ue.x - he.x, ue.y - he.y], y = x[0] * x[0] + x[1] * x[1], b = Math.sqrt(y), x[0] /= b, x[1] /= b, A = y < 4 ? Math.sqrt(1 - y / 4) : 0, Pe === me && (A *= -1), S = new SVG.Point((ue.x + he.x) / 2 + A * -x[1], (ue.y + he.y) / 2 + A * x[0]), N = new SVG.Point(he.x - S.x, he.y - S.y), L = new SVG.Point(ue.x - S.x, ue.y - S.y), h = Math.acos(N.x / Math.sqrt(N.x * N.x + N.y * N.y)), N.y < 0 && (h *= -1), m = Math.acos(L.x / Math.sqrt(L.x * L.x + L.y * L.y)), L.y < 0 && (m *= -1), me && h > m && (m += 2 * Math.PI), !me && h < m && (m -= 2 * Math.PI), C = Math.ceil(2 * Math.abs(h - m) / Math.PI), I = [], X = h, k = (m - h) / C, O = 4 * Math.tan(k / 4) / 3, U = 0; U <= C; U++)
              W = Math.cos(X), Y = Math.sin(X), q = new SVG.Point(S.x + W, S.y + Y), I[U] = [new SVG.Point(q.x + O * Y, q.y - O * W), q, new SVG.Point(q.x - O * Y, q.y + O * W)], X += k;
            for (I[0][0] = I[0][1].clone(), I[I.length - 1][2] = I[I.length - 1][1].clone(), p = new SVG.Matrix().rotate(jt).scale(Ot, Ht).rotate(-jt), U = 0, st = I.length; U < st; U++)
              I[U][0] = I[U][0].transform(p), I[U][1] = I[U][1].transform(p), I[U][2] = I[U][2].transform(p);
            for (U = 1, st = I.length; U < st; U++)
              dt = (q = I[U - 1][2]).x, bt = q.y, Et = (q = I[U][0]).x, Dt = q.y, Ge = (q = I[U][1]).x, je = q.y, Vr.push(["C", dt, bt, Et, Dt, Ge, je]);
            return Vr;
          }(this.pos, r), r = o[0];
      }
      return r[0] = "C", this.pos = [r[5], r[6]], this.reflection = [2 * r[5] - r[3], 2 * r[6] - r[4]], o;
    }
    function s(r, o) {
      if (o === !1)
        return !1;
      for (var n = o, c = r.length; n < c; ++n)
        if (r[n][0] == "M")
          return n;
      return !1;
    }
    SVG.extend(SVG.PathArray, { morph: function(r) {
      for (var o = this.value, n = this.parse(r), c = 0, d = 0, g = !1, p = !1; c !== !1 || d !== !1; ) {
        var x;
        g = s(o, c !== !1 && c + 1), p = s(n, d !== !1 && d + 1), c === !1 && (c = (x = new SVG.PathArray(b.start).bbox()).height == 0 || x.width == 0 ? o.push(o[0]) - 1 : o.push(["M", x.x + x.width / 2, x.y + x.height / 2]) - 1), d === !1 && (d = (x = new SVG.PathArray(b.dest).bbox()).height == 0 || x.width == 0 ? n.push(n[0]) - 1 : n.push(["M", x.x + x.width / 2, x.y + x.height / 2]) - 1);
        var b = E(o, c, g, n, d, p);
        o = o.slice(0, c).concat(b.start, g === !1 ? [] : o.slice(g)), n = n.slice(0, d).concat(b.dest, p === !1 ? [] : n.slice(p)), c = g !== !1 && c + b.start.length, d = p !== !1 && d + b.dest.length;
      }
      return this.value = o, this.destination = new SVG.PathArray(), this.destination.value = n, this;
    } });
  }(), /*! svg.draggable.js - v2.2.2 - 2019-01-08
  * https://github.com/svgdotjs/svg.draggable.js
  * Copyright (c) 2019 Wout Fierens; Licensed MIT */
  (function() {
    function E(t) {
      t.remember("_draggable", this), this.el = t;
    }
    E.prototype.init = function(t, e) {
      var i = this;
      this.constraint = t, this.value = e, this.el.on("mousedown.drag", function(s) {
        i.start(s);
      }), this.el.on("touchstart.drag", function(s) {
        i.start(s);
      });
    }, E.prototype.transformPoint = function(t, e) {
      var i = (t = t || window.event).changedTouches && t.changedTouches[0] || t;
      return this.p.x = i.clientX - (e || 0), this.p.y = i.clientY, this.p.matrixTransform(this.m);
    }, E.prototype.getBBox = function() {
      var t = this.el.bbox();
      return this.el instanceof SVG.Nested && (t = this.el.rbox()), (this.el instanceof SVG.G || this.el instanceof SVG.Use || this.el instanceof SVG.Nested) && (t.x = this.el.x(), t.y = this.el.y()), t;
    }, E.prototype.start = function(t) {
      if (t.type != "click" && t.type != "mousedown" && t.type != "mousemove" || (t.which || t.buttons) == 1) {
        var e = this;
        if (this.el.fire("beforedrag", { event: t, handler: this }), !this.el.event().defaultPrevented) {
          t.preventDefault(), t.stopPropagation(), this.parent = this.parent || this.el.parent(SVG.Nested) || this.el.parent(SVG.Doc), this.p = this.parent.node.createSVGPoint(), this.m = this.el.node.getScreenCTM().inverse();
          var i, s = this.getBBox();
          if (this.el instanceof SVG.Text)
            switch (i = this.el.node.getComputedTextLength(), this.el.attr("text-anchor")) {
              case "middle":
                i /= 2;
                break;
              case "start":
                i = 0;
            }
          this.startPoints = { point: this.transformPoint(t, i), box: s, transform: this.el.transform() }, SVG.on(window, "mousemove.drag", function(r) {
            e.drag(r);
          }), SVG.on(window, "touchmove.drag", function(r) {
            e.drag(r);
          }), SVG.on(window, "mouseup.drag", function(r) {
            e.end(r);
          }), SVG.on(window, "touchend.drag", function(r) {
            e.end(r);
          }), this.el.fire("dragstart", { event: t, p: this.startPoints.point, m: this.m, handler: this });
        }
      }
    }, E.prototype.drag = function(t) {
      var e = this.getBBox(), i = this.transformPoint(t), s = this.startPoints.box.x + i.x - this.startPoints.point.x, r = this.startPoints.box.y + i.y - this.startPoints.point.y, o = this.constraint, n = i.x - this.startPoints.point.x, c = i.y - this.startPoints.point.y;
      if (this.el.fire("dragmove", { event: t, p: i, m: this.m, handler: this }), this.el.event().defaultPrevented)
        return i;
      if (typeof o == "function") {
        var d = o.call(this.el, s, r, this.m);
        typeof d == "boolean" && (d = { x: d, y: d }), d.x === !0 ? this.el.x(s) : d.x !== !1 && this.el.x(d.x), d.y === !0 ? this.el.y(r) : d.y !== !1 && this.el.y(d.y);
      } else
        typeof o == "object" && (o.minX != null && s < o.minX ? n = (s = o.minX) - this.startPoints.box.x : o.maxX != null && s > o.maxX - e.width && (n = (s = o.maxX - e.width) - this.startPoints.box.x), o.minY != null && r < o.minY ? c = (r = o.minY) - this.startPoints.box.y : o.maxY != null && r > o.maxY - e.height && (c = (r = o.maxY - e.height) - this.startPoints.box.y), o.snapToGrid != null && (s -= s % o.snapToGrid, r -= r % o.snapToGrid, n -= n % o.snapToGrid, c -= c % o.snapToGrid), this.el instanceof SVG.G ? this.el.matrix(this.startPoints.transform).transform({ x: n, y: c }, !0) : this.el.move(s, r));
      return i;
    }, E.prototype.end = function(t) {
      var e = this.drag(t);
      this.el.fire("dragend", { event: t, p: e, m: this.m, handler: this }), SVG.off(window, "mousemove.drag"), SVG.off(window, "touchmove.drag"), SVG.off(window, "mouseup.drag"), SVG.off(window, "touchend.drag");
    }, SVG.extend(SVG.Element, { draggable: function(t, e) {
      typeof t != "function" && typeof t != "object" || (e = t, t = !0);
      var i = this.remember("_draggable") || new E(this);
      return (t = t === void 0 || t) ? i.init(e || {}, t) : (this.off("mousedown.drag"), this.off("touchstart.drag")), this;
    } });
  }).call(void 0), function() {
    function E(t) {
      this.el = t, t.remember("_selectHandler", this), this.pointSelection = { isSelected: !1 }, this.rectSelection = { isSelected: !1 }, this.pointsList = { lt: [0, 0], rt: ["width", 0], rb: ["width", "height"], lb: [0, "height"], t: ["width", 0], r: ["width", "height"], b: ["width", "height"], l: [0, "height"] }, this.pointCoord = function(e, i, s) {
        var r = typeof e != "string" ? e : i[e];
        return s ? r / 2 : r;
      }, this.pointCoords = function(e, i) {
        var s = this.pointsList[e];
        return { x: this.pointCoord(s[0], i, e === "t" || e === "b"), y: this.pointCoord(s[1], i, e === "r" || e === "l") };
      };
    }
    E.prototype.init = function(t, e) {
      var i = this.el.bbox();
      this.options = {};
      var s = this.el.selectize.defaults.points;
      for (var r in this.el.selectize.defaults)
        this.options[r] = this.el.selectize.defaults[r], e[r] !== void 0 && (this.options[r] = e[r]);
      var o = ["points", "pointsExclude"];
      for (var r in o) {
        var n = this.options[o[r]];
        typeof n == "string" ? n = n.length > 0 ? n.split(/\s*,\s*/i) : [] : typeof n == "boolean" && o[r] === "points" && (n = n ? s : []), this.options[o[r]] = n;
      }
      this.options.points = [s, this.options.points].reduce(function(c, d) {
        return c.filter(function(g) {
          return d.indexOf(g) > -1;
        });
      }), this.options.points = [this.options.points, this.options.pointsExclude].reduce(function(c, d) {
        return c.filter(function(g) {
          return d.indexOf(g) < 0;
        });
      }), this.parent = this.el.parent(), this.nested = this.nested || this.parent.group(), this.nested.matrix(new SVG.Matrix(this.el).translate(i.x, i.y)), this.options.deepSelect && ["line", "polyline", "polygon"].indexOf(this.el.type) !== -1 ? this.selectPoints(t) : this.selectRect(t), this.observe(), this.cleanup();
    }, E.prototype.selectPoints = function(t) {
      return this.pointSelection.isSelected = t, this.pointSelection.set || (this.pointSelection.set = this.parent.set(), this.drawPoints()), this;
    }, E.prototype.getPointArray = function() {
      var t = this.el.bbox();
      return this.el.array().valueOf().map(function(e) {
        return [e[0] - t.x, e[1] - t.y];
      });
    }, E.prototype.drawPoints = function() {
      for (var t = this, e = this.getPointArray(), i = 0, s = e.length; i < s; ++i) {
        var r = /* @__PURE__ */ function(n) {
          return function(c) {
            (c = c || window.event).preventDefault ? c.preventDefault() : c.returnValue = !1, c.stopPropagation();
            var d = c.pageX || c.touches[0].pageX, g = c.pageY || c.touches[0].pageY;
            t.el.fire("point", { x: d, y: g, i: n, event: c });
          };
        }(i), o = this.drawPoint(e[i][0], e[i][1]).addClass(this.options.classPoints).addClass(this.options.classPoints + "_point").on("touchstart", r).on("mousedown", r);
        this.pointSelection.set.add(o);
      }
    }, E.prototype.drawPoint = function(t, e) {
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
    }, E.prototype.drawCircle = function(t, e) {
      return this.nested.circle(this.options.pointSize).center(t, e);
    }, E.prototype.drawRect = function(t, e) {
      return this.nested.rect(this.options.pointSize, this.options.pointSize).center(t, e);
    }, E.prototype.updatePointSelection = function() {
      var t = this.getPointArray();
      this.pointSelection.set.each(function(e) {
        this.cx() === t[e][0] && this.cy() === t[e][1] || this.center(t[e][0], t[e][1]);
      });
    }, E.prototype.updateRectSelection = function() {
      var t = this, e = this.el.bbox();
      if (this.rectSelection.set.get(0).attr({ width: e.width, height: e.height }), this.options.points.length && this.options.points.map(function(s, r) {
        var o = t.pointCoords(s, e);
        t.rectSelection.set.get(r + 1).center(o.x, o.y);
      }), this.options.rotationPoint) {
        var i = this.rectSelection.set.length();
        this.rectSelection.set.get(i - 1).center(e.width / 2, 20);
      }
    }, E.prototype.selectRect = function(t) {
      var e = this, i = this.el.bbox();
      function s(n) {
        return function(c) {
          (c = c || window.event).preventDefault ? c.preventDefault() : c.returnValue = !1, c.stopPropagation();
          var d = c.pageX || c.touches[0].pageX, g = c.pageY || c.touches[0].pageY;
          e.el.fire(n, { x: d, y: g, event: c });
        };
      }
      if (this.rectSelection.isSelected = t, this.rectSelection.set = this.rectSelection.set || this.parent.set(), this.rectSelection.set.get(0) || this.rectSelection.set.add(this.nested.rect(i.width, i.height).addClass(this.options.classRect)), this.options.points.length && this.rectSelection.set.length() < 2 && (this.options.points.map(function(n, c) {
        var d = e.pointCoords(n, i), g = e.drawPoint(d.x, d.y).attr("class", e.options.classPoints + "_" + n).on("mousedown", s(n)).on("touchstart", s(n));
        e.rectSelection.set.add(g);
      }), this.rectSelection.set.each(function() {
        this.addClass(e.options.classPoints);
      })), this.options.rotationPoint && (this.options.points && !this.rectSelection.set.get(9) || !this.options.points && !this.rectSelection.set.get(1))) {
        var r = function(n) {
          (n = n || window.event).preventDefault ? n.preventDefault() : n.returnValue = !1, n.stopPropagation();
          var c = n.pageX || n.touches[0].pageX, d = n.pageY || n.touches[0].pageY;
          e.el.fire("rot", { x: c, y: d, event: n });
        }, o = this.drawPoint(i.width / 2, 20).attr("class", this.options.classPoints + "_rot").on("touchstart", r).on("mousedown", r);
        this.rectSelection.set.add(o);
      }
    }, E.prototype.handler = function() {
      var t = this.el.bbox();
      this.nested.matrix(new SVG.Matrix(this.el).translate(t.x, t.y)), this.rectSelection.isSelected && this.updateRectSelection(), this.pointSelection.isSelected && this.updatePointSelection();
    }, E.prototype.observe = function() {
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
    }, E.prototype.cleanup = function() {
      !this.rectSelection.isSelected && this.rectSelection.set && (this.rectSelection.set.each(function() {
        this.remove();
      }), this.rectSelection.set.clear(), delete this.rectSelection.set), !this.pointSelection.isSelected && this.pointSelection.set && (this.pointSelection.set.each(function() {
        this.remove();
      }), this.pointSelection.set.clear(), delete this.pointSelection.set), this.pointSelection.isSelected || this.rectSelection.isSelected || (this.nested.remove(), delete this.nested);
    }, SVG.extend(SVG.Element, { selectize: function(t, e) {
      return typeof t == "object" && (e = t, t = !0), (this.remember("_selectHandler") || new E(this)).init(t === void 0 || t, e || {}), this;
    } }), SVG.Element.prototype.selectize.defaults = { points: ["lt", "rt", "rb", "lb", "t", "r", "b", "l"], pointsExclude: [], classRect: "svg_select_boundingRect", classPoints: "svg_select_points", pointSize: 7, rotationPoint: !0, deepSelect: !1, pointType: "circle" };
  }(), function() {
    (function() {
      function E(t) {
        t.remember("_resizeHandler", this), this.el = t, this.parameters = {}, this.lastUpdateCall = null, this.p = t.doc().node.createSVGPoint();
      }
      E.prototype.transformPoint = function(t, e, i) {
        return this.p.x = t - (this.offset.x - window.pageXOffset), this.p.y = e - (this.offset.y - window.pageYOffset), this.p.matrixTransform(i || this.m);
      }, E.prototype._extractPosition = function(t) {
        return { x: t.clientX != null ? t.clientX : t.touches[0].clientX, y: t.clientY != null ? t.clientY : t.touches[0].clientY };
      }, E.prototype.init = function(t) {
        var e = this;
        if (this.stop(), t !== "stop") {
          for (var i in this.options = {}, this.el.resize.defaults)
            this.options[i] = this.el.resize.defaults[i], t[i] !== void 0 && (this.options[i] = t[i]);
          this.el.on("lt.resize", function(s) {
            e.resize(s || window.event);
          }), this.el.on("rt.resize", function(s) {
            e.resize(s || window.event);
          }), this.el.on("rb.resize", function(s) {
            e.resize(s || window.event);
          }), this.el.on("lb.resize", function(s) {
            e.resize(s || window.event);
          }), this.el.on("t.resize", function(s) {
            e.resize(s || window.event);
          }), this.el.on("r.resize", function(s) {
            e.resize(s || window.event);
          }), this.el.on("b.resize", function(s) {
            e.resize(s || window.event);
          }), this.el.on("l.resize", function(s) {
            e.resize(s || window.event);
          }), this.el.on("rot.resize", function(s) {
            e.resize(s || window.event);
          }), this.el.on("point.resize", function(s) {
            e.resize(s || window.event);
          }), this.update();
        }
      }, E.prototype.stop = function() {
        return this.el.off("lt.resize"), this.el.off("rt.resize"), this.el.off("rb.resize"), this.el.off("lb.resize"), this.el.off("t.resize"), this.el.off("r.resize"), this.el.off("b.resize"), this.el.off("l.resize"), this.el.off("rot.resize"), this.el.off("point.resize"), this;
      }, E.prototype.resize = function(t) {
        var e = this;
        this.m = this.el.node.getScreenCTM().inverse(), this.offset = { x: window.pageXOffset, y: window.pageYOffset };
        var i = this._extractPosition(t.detail.event);
        if (this.parameters = { type: this.el.type, p: this.transformPoint(i.x, i.y), x: t.detail.x, y: t.detail.y, box: this.el.bbox(), rotation: this.el.transform().rotation }, this.el.type === "text" && (this.parameters.fontSize = this.el.attr()["font-size"]), t.detail.i !== void 0) {
          var s = this.el.array().valueOf();
          this.parameters.i = t.detail.i, this.parameters.pointCoords = [s[t.detail.i][0], s[t.detail.i][1]];
        }
        switch (t.type) {
          case "lt":
            this.calc = function(r, o) {
              var n = this.snapToGrid(r, o);
              if (this.parameters.box.width - n[0] > 0 && this.parameters.box.height - n[1] > 0) {
                if (this.parameters.type === "text")
                  return this.el.move(this.parameters.box.x + n[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - n[0]);
                n = this.checkAspectRatio(n), this.el.move(this.parameters.box.x + n[0], this.parameters.box.y + n[1]).size(this.parameters.box.width - n[0], this.parameters.box.height - n[1]);
              }
            };
            break;
          case "rt":
            this.calc = function(r, o) {
              var n = this.snapToGrid(r, o, 2);
              if (this.parameters.box.width + n[0] > 0 && this.parameters.box.height - n[1] > 0) {
                if (this.parameters.type === "text")
                  return this.el.move(this.parameters.box.x - n[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + n[0]);
                n = this.checkAspectRatio(n, !0), this.el.move(this.parameters.box.x, this.parameters.box.y + n[1]).size(this.parameters.box.width + n[0], this.parameters.box.height - n[1]);
              }
            };
            break;
          case "rb":
            this.calc = function(r, o) {
              var n = this.snapToGrid(r, o, 0);
              if (this.parameters.box.width + n[0] > 0 && this.parameters.box.height + n[1] > 0) {
                if (this.parameters.type === "text")
                  return this.el.move(this.parameters.box.x - n[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize + n[0]);
                n = this.checkAspectRatio(n), this.el.move(this.parameters.box.x, this.parameters.box.y).size(this.parameters.box.width + n[0], this.parameters.box.height + n[1]);
              }
            };
            break;
          case "lb":
            this.calc = function(r, o) {
              var n = this.snapToGrid(r, o, 1);
              if (this.parameters.box.width - n[0] > 0 && this.parameters.box.height + n[1] > 0) {
                if (this.parameters.type === "text")
                  return this.el.move(this.parameters.box.x + n[0], this.parameters.box.y), void this.el.attr("font-size", this.parameters.fontSize - n[0]);
                n = this.checkAspectRatio(n, !0), this.el.move(this.parameters.box.x + n[0], this.parameters.box.y).size(this.parameters.box.width - n[0], this.parameters.box.height + n[1]);
              }
            };
            break;
          case "t":
            this.calc = function(r, o) {
              var n = this.snapToGrid(r, o, 2);
              if (this.parameters.box.height - n[1] > 0) {
                if (this.parameters.type === "text")
                  return;
                this.el.move(this.parameters.box.x, this.parameters.box.y + n[1]).height(this.parameters.box.height - n[1]);
              }
            };
            break;
          case "r":
            this.calc = function(r, o) {
              var n = this.snapToGrid(r, o, 0);
              if (this.parameters.box.width + n[0] > 0) {
                if (this.parameters.type === "text")
                  return;
                this.el.move(this.parameters.box.x, this.parameters.box.y).width(this.parameters.box.width + n[0]);
              }
            };
            break;
          case "b":
            this.calc = function(r, o) {
              var n = this.snapToGrid(r, o, 0);
              if (this.parameters.box.height + n[1] > 0) {
                if (this.parameters.type === "text")
                  return;
                this.el.move(this.parameters.box.x, this.parameters.box.y).height(this.parameters.box.height + n[1]);
              }
            };
            break;
          case "l":
            this.calc = function(r, o) {
              var n = this.snapToGrid(r, o, 1);
              if (this.parameters.box.width - n[0] > 0) {
                if (this.parameters.type === "text")
                  return;
                this.el.move(this.parameters.box.x + n[0], this.parameters.box.y).width(this.parameters.box.width - n[0]);
              }
            };
            break;
          case "rot":
            this.calc = function(r, o) {
              var n = r + this.parameters.p.x, c = o + this.parameters.p.y, d = Math.atan2(this.parameters.p.y - this.parameters.box.y - this.parameters.box.height / 2, this.parameters.p.x - this.parameters.box.x - this.parameters.box.width / 2), g = Math.atan2(c - this.parameters.box.y - this.parameters.box.height / 2, n - this.parameters.box.x - this.parameters.box.width / 2), p = this.parameters.rotation + 180 * (g - d) / Math.PI + this.options.snapToAngle / 2;
              this.el.center(this.parameters.box.cx, this.parameters.box.cy).rotate(p - p % this.options.snapToAngle, this.parameters.box.cx, this.parameters.box.cy);
            };
            break;
          case "point":
            this.calc = function(r, o) {
              var n = this.snapToGrid(r, o, this.parameters.pointCoords[0], this.parameters.pointCoords[1]), c = this.el.array().valueOf();
              c[this.parameters.i][0] = this.parameters.pointCoords[0] + n[0], c[this.parameters.i][1] = this.parameters.pointCoords[1] + n[1], this.el.plot(c);
            };
        }
        this.el.fire("resizestart", { dx: this.parameters.x, dy: this.parameters.y, event: t }), SVG.on(window, "touchmove.resize", function(r) {
          e.update(r || window.event);
        }), SVG.on(window, "touchend.resize", function() {
          e.done();
        }), SVG.on(window, "mousemove.resize", function(r) {
          e.update(r || window.event);
        }), SVG.on(window, "mouseup.resize", function() {
          e.done();
        });
      }, E.prototype.update = function(t) {
        if (t) {
          var e = this._extractPosition(t), i = this.transformPoint(e.x, e.y), s = i.x - this.parameters.p.x, r = i.y - this.parameters.p.y;
          this.lastUpdateCall = [s, r], this.calc(s, r), this.el.fire("resizing", { dx: s, dy: r, event: t });
        } else
          this.lastUpdateCall && this.calc(this.lastUpdateCall[0], this.lastUpdateCall[1]);
      }, E.prototype.done = function() {
        this.lastUpdateCall = null, SVG.off(window, "mousemove.resize"), SVG.off(window, "mouseup.resize"), SVG.off(window, "touchmove.resize"), SVG.off(window, "touchend.resize"), this.el.fire("resizedone");
      }, E.prototype.snapToGrid = function(t, e, i, s) {
        var r;
        return s !== void 0 ? r = [(i + t) % this.options.snapToGrid, (s + e) % this.options.snapToGrid] : (i = i ?? 3, r = [(this.parameters.box.x + t + (1 & i ? 0 : this.parameters.box.width)) % this.options.snapToGrid, (this.parameters.box.y + e + (2 & i ? 0 : this.parameters.box.height)) % this.options.snapToGrid]), t < 0 && (r[0] -= this.options.snapToGrid), e < 0 && (r[1] -= this.options.snapToGrid), t -= Math.abs(r[0]) < this.options.snapToGrid / 2 ? r[0] : r[0] - (t < 0 ? -this.options.snapToGrid : this.options.snapToGrid), e -= Math.abs(r[1]) < this.options.snapToGrid / 2 ? r[1] : r[1] - (e < 0 ? -this.options.snapToGrid : this.options.snapToGrid), this.constraintToBox(t, e, i, s);
      }, E.prototype.constraintToBox = function(t, e, i, s) {
        var r, o, n = this.options.constraint || {};
        return s !== void 0 ? (r = i, o = s) : (r = this.parameters.box.x + (1 & i ? 0 : this.parameters.box.width), o = this.parameters.box.y + (2 & i ? 0 : this.parameters.box.height)), n.minX !== void 0 && r + t < n.minX && (t = n.minX - r), n.maxX !== void 0 && r + t > n.maxX && (t = n.maxX - r), n.minY !== void 0 && o + e < n.minY && (e = n.minY - o), n.maxY !== void 0 && o + e > n.maxY && (e = n.maxY - o), [t, e];
      }, E.prototype.checkAspectRatio = function(t, e) {
        if (!this.options.saveAspectRatio)
          return t;
        var i = t.slice(), s = this.parameters.box.width / this.parameters.box.height, r = this.parameters.box.width + t[0], o = this.parameters.box.height - t[1], n = r / o;
        return n < s ? (i[1] = r / s - this.parameters.box.height, e && (i[1] = -i[1])) : n > s && (i[0] = this.parameters.box.width - o * s, e && (i[0] = -i[0])), i;
      }, SVG.extend(SVG.Element, { resize: function(t) {
        return (this.remember("_resizeHandler") || new E(this)).init(t || {}), this;
      } }), SVG.Element.prototype.resize.defaults = { snapToAngle: 0.1, snapToGrid: 1, constraint: {}, saveAspectRatio: !1 };
    }).call(this);
  }(), window.Apex === void 0 && (window.Apex = {});
  var Yr = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "initModules", value: function() {
      this.ctx.publicMethods = ["updateOptions", "updateSeries", "appendData", "appendSeries", "isSeriesHidden", "toggleSeries", "showSeries", "hideSeries", "setLocale", "resetSeries", "zoomX", "toggleDataPointSelection", "dataURI", "exportToCSV", "addXaxisAnnotation", "addYaxisAnnotation", "addPointAnnotation", "clearAnnotations", "removeAnnotation", "paper", "destroy"], this.ctx.eventList = ["click", "mousedown", "mousemove", "mouseleave", "touchstart", "touchmove", "touchleave", "mouseup", "touchend"], this.ctx.animations = new mt(this.ctx), this.ctx.axes = new Z(this.ctx), this.ctx.core = new Gl(this.ctx.el, this.ctx), this.ctx.config = new re({}), this.ctx.data = new G(this.ctx), this.ctx.grid = new It(this.ctx), this.ctx.graphics = new B(this.ctx), this.ctx.coreUtils = new _t(this.ctx), this.ctx.crosshairs = new K(this.ctx), this.ctx.events = new H(this.ctx), this.ctx.exports = new nt(this.ctx), this.ctx.localization = new j(this.ctx), this.ctx.options = new wt(), this.ctx.responsive = new tt(this.ctx), this.ctx.series = new Qt(this.ctx), this.ctx.theme = new ot(this.ctx), this.ctx.formatters = new qt(this.ctx), this.ctx.titleSubtitle = new Q(this.ctx), this.ctx.legend = new Tt(this.ctx), this.ctx.toolbar = new Yt(this.ctx), this.ctx.tooltip = new ne(this.ctx), this.ctx.dimensions = new ft(this.ctx), this.ctx.updateHelpers = new jl(this.ctx), this.ctx.zoomPanSelection = new Ft(this.ctx), this.ctx.w.globals.tooltip = new ne(this.ctx);
    } }]), E;
  }(), Hr = function() {
    function E(t) {
      w(this, E), this.ctx = t, this.w = t.w;
    }
    return _(E, [{ key: "clear", value: function(t) {
      var e = t.isUpdating;
      this.ctx.zoomPanSelection && this.ctx.zoomPanSelection.destroy(), this.ctx.toolbar && this.ctx.toolbar.destroy(), this.ctx.animations = null, this.ctx.axes = null, this.ctx.annotations = null, this.ctx.core = null, this.ctx.data = null, this.ctx.grid = null, this.ctx.series = null, this.ctx.responsive = null, this.ctx.theme = null, this.ctx.formatters = null, this.ctx.titleSubtitle = null, this.ctx.legend = null, this.ctx.dimensions = null, this.ctx.options = null, this.ctx.crosshairs = null, this.ctx.zoomPanSelection = null, this.ctx.updateHelpers = null, this.ctx.toolbar = null, this.ctx.localization = null, this.ctx.w.globals.tooltip = null, this.clearDomElements({ isUpdating: e });
    } }, { key: "killSVG", value: function(t) {
      t.each(function(e, i) {
        this.removeClass("*"), this.off(), this.stop();
      }, !0), t.ungroup(), t.clear();
    } }, { key: "clearDomElements", value: function(t) {
      var e = this, i = t.isUpdating, s = this.w.globals.dom.Paper.node;
      s.parentNode && s.parentNode.parentNode && !i && (s.parentNode.parentNode.style.minHeight = "unset");
      var r = this.w.globals.dom.baseEl;
      r && this.ctx.eventList.forEach(function(n) {
        r.removeEventListener(n, e.ctx.events.documentEvent);
      });
      var o = this.w.globals.dom;
      if (this.ctx.el !== null)
        for (; this.ctx.el.firstChild; )
          this.ctx.el.removeChild(this.ctx.el.firstChild);
      this.killSVG(o.Paper), o.Paper.remove(), o.elWrap = null, o.elGraphical = null, o.elLegendWrap = null, o.elLegendForeign = null, o.baseEl = null, o.elGridRect = null, o.elGridRectMask = null, o.elGridRectMarkerMask = null, o.elForecastMask = null, o.elNonForecastMask = null, o.elDefs = null;
    } }]), E;
  }(), va = /* @__PURE__ */ new WeakMap(), $l = function() {
    function E(t, e) {
      w(this, E), this.opts = e, this.ctx = this, this.w = new Fe(e).init(), this.el = t, this.w.globals.cuid = F.randomId(), this.w.globals.chartID = this.w.config.chart.id ? F.escapeString(this.w.config.chart.id) : this.w.globals.cuid, new Yr(this).initModules(), this.create = F.bind(this.create, this), this.windowResizeHandler = this._windowResizeHandler.bind(this), this.parentResizeHandler = this._parentResizeCallback.bind(this);
    }
    return _(E, [{ key: "render", value: function() {
      var t = this;
      return new Promise(function(e, i) {
        if (t.el !== null) {
          Apex._chartInstances === void 0 && (Apex._chartInstances = []), t.w.config.chart.id && Apex._chartInstances.push({ id: t.w.globals.chartID, group: t.w.config.chart.group, chart: t }), t.setLocale(t.w.config.chart.defaultLocale);
          var s = t.w.config.chart.events.beforeMount;
          if (typeof s == "function" && s(t, t.w), t.events.fireEvent("beforeMount", [t, t.w]), window.addEventListener("resize", t.windowResizeHandler), function(x, b) {
            var y = !1;
            if (x.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
              var A = x.getBoundingClientRect();
              x.style.display !== "none" && A.width !== 0 || (y = !0);
            }
            var S = new ResizeObserver(function(N) {
              y && b.call(x, N), y = !0;
            });
            x.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? Array.from(x.children).forEach(function(N) {
              return S.observe(N);
            }) : S.observe(x), va.set(b, S);
          }(t.el.parentNode, t.parentResizeHandler), !t.css) {
            var r = t.el.getRootNode && t.el.getRootNode(), o = F.is("ShadowRoot", r), n = t.el.ownerDocument, c = n.getElementById("apexcharts-css");
            if (o || !c) {
              var d;
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
              var g = ((d = t.opts.chart) === null || d === void 0 ? void 0 : d.nonce) || t.w.config.chart.nonce;
              g && t.css.setAttribute("nonce", g), o ? r.prepend(t.css) : n.head.appendChild(t.css);
            }
          }
          var p = t.create(t.w.config.series, {});
          if (!p)
            return e(t);
          t.mount(p).then(function() {
            typeof t.w.config.chart.events.mounted == "function" && t.w.config.chart.events.mounted(t, t.w), t.events.fireEvent("mounted", [t, t.w]), e(p);
          }).catch(function(x) {
            i(x);
          });
        } else
          i(new Error("Element not found"));
      });
    } }, { key: "create", value: function(t, e) {
      var i = this.w;
      new Yr(this).initModules();
      var s = this.w.globals;
      if (s.noData = !1, s.animationEnded = !1, this.responsive.checkResponsiveConfig(e), i.config.xaxis.convertedCatToNumeric && new kt(i.config).convertCatToNumericXaxis(i.config, this.ctx), this.el === null || (this.core.setupElements(), i.config.chart.type === "treemap" && (i.config.grid.show = !1, i.config.yaxis[0].show = !1), s.svgWidth === 0))
        return s.animationEnded = !0, null;
      var r = _t.checkComboSeries(t);
      s.comboCharts = r.comboCharts, s.comboBarCount = r.comboBarCount;
      var o = t.every(function(g) {
        return g.data && g.data.length === 0;
      });
      (t.length === 0 || o) && this.series.handleNoData(), this.events.setupEventHandlers(), this.data.parseData(t), this.theme.init(), new oe(this).setGlobalMarkerSize(), this.formatters.setLabelFormatters(), this.titleSubtitle.draw(), s.noData && s.collapsedSeries.length !== s.series.length && !i.config.legend.showForSingleSeries || this.legend.init(), this.series.hasAllSeriesEqualX(), s.axisCharts && (this.core.coreCalculations(), i.config.xaxis.type !== "category" && this.formatters.setLabelFormatters(), this.ctx.toolbar.minX = i.globals.minX, this.ctx.toolbar.maxX = i.globals.maxX), this.formatters.heatmapLabelFormatters(), new _t(this).getLargestMarkerSize(), this.dimensions.plotCoords();
      var n = this.core.xySettings();
      this.grid.createGridMask();
      var c = this.core.plotChartType(t, n), d = new Ee(this);
      return d.bringForward(), i.config.dataLabels.background.enabled && d.dataLabelsBackground(), this.core.shiftGraphPosition(), { elGraph: c, xyRatios: n, dimensions: { plot: { left: i.globals.translateX, top: i.globals.translateY, width: i.globals.gridWidth, height: i.globals.gridHeight } } };
    } }, { key: "mount", value: function() {
      var t = this, e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : null, i = this, s = i.w;
      return new Promise(function(r, o) {
        if (i.el === null)
          return o(new Error("Not enough data to display or target element not found"));
        (e === null || s.globals.allSeriesCollapsed) && i.series.handleNoData(), i.grid = new It(i);
        var n, c, d = i.grid.drawGrid();
        if (i.annotations = new Zt(i), i.annotations.drawImageAnnos(), i.annotations.drawTextAnnos(), s.config.grid.position === "back" && (d && s.globals.dom.elGraphical.add(d.el), d != null && (n = d.elGridBorders) !== null && n !== void 0 && n.node && s.globals.dom.elGraphical.add(d.elGridBorders)), Array.isArray(e.elGraph))
          for (var g = 0; g < e.elGraph.length; g++)
            s.globals.dom.elGraphical.add(e.elGraph[g]);
        else
          s.globals.dom.elGraphical.add(e.elGraph);
        s.config.grid.position === "front" && (d && s.globals.dom.elGraphical.add(d.el), d != null && (c = d.elGridBorders) !== null && c !== void 0 && c.node && s.globals.dom.elGraphical.add(d.elGridBorders)), s.config.xaxis.crosshairs.position === "front" && i.crosshairs.drawXCrosshairs(), s.config.yaxis[0].crosshairs.position === "front" && i.crosshairs.drawYCrosshairs(), s.config.chart.type !== "treemap" && i.axes.drawAxis(s.config.chart.type, d);
        var p = new ht(t.ctx, d), x = new M(t.ctx, d);
        if (d !== null && (p.xAxisLabelCorrections(d.xAxisTickWidth), x.setYAxisTextAlignments(), s.config.yaxis.map(function(y, A) {
          s.globals.ignoreYAxisIndexes.indexOf(A) === -1 && x.yAxisTitleRotate(A, y.opposite);
        })), i.annotations.drawAxesAnnotations(), !s.globals.noData) {
          if (s.config.tooltip.enabled && !s.globals.noData && i.w.globals.tooltip.drawTooltip(e.xyRatios), s.globals.axisCharts && (s.globals.isXNumeric || s.config.xaxis.convertedCatToNumeric || s.globals.isRangeBar))
            (s.config.chart.zoom.enabled || s.config.chart.selection && s.config.chart.selection.enabled || s.config.chart.pan && s.config.chart.pan.enabled) && i.zoomPanSelection.init({ xyRatios: e.xyRatios });
          else {
            var b = s.config.chart.toolbar.tools;
            ["zoom", "zoomin", "zoomout", "selection", "pan", "reset"].forEach(function(y) {
              b[y] = !1;
            });
          }
          s.config.chart.toolbar.show && !s.globals.allSeriesCollapsed && i.toolbar.createToolbar();
        }
        s.globals.memory.methodsToExec.length > 0 && s.globals.memory.methodsToExec.forEach(function(y) {
          y.method(y.params, !1, y.context);
        }), s.globals.axisCharts || s.globals.noData || i.core.resizeNonAxisCharts(), r(i);
      });
    } }, { key: "destroy", value: function() {
      var t, e;
      window.removeEventListener("resize", this.windowResizeHandler), this.el.parentNode, t = this.parentResizeHandler, (e = va.get(t)) && (e.disconnect(), va.delete(t));
      var i = this.w.config.chart.id;
      i && Apex._chartInstances.forEach(function(s, r) {
        s.id === F.escapeString(i) && Apex._chartInstances.splice(r, 1);
      }), new Hr(this.ctx).clear({ isUpdating: !1 });
    } }, { key: "updateOptions", value: function(t) {
      var e = this, i = arguments.length > 1 && arguments[1] !== void 0 && arguments[1], s = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], r = !(arguments.length > 3 && arguments[3] !== void 0) || arguments[3], o = !(arguments.length > 4 && arguments[4] !== void 0) || arguments[4], n = this.w;
      return n.globals.selection = void 0, t.series && (this.series.resetSeries(!1, !0, !1), t.series.length && t.series[0].data && (t.series = t.series.map(function(c, d) {
        return e.updateHelpers._extendSeries(c, d);
      })), this.updateHelpers.revertDefaultAxisMinMax()), t.xaxis && (t = this.updateHelpers.forceXAxisUpdate(t)), t.yaxis && (t = this.updateHelpers.forceYAxisUpdate(t)), n.globals.collapsedSeriesIndices.length > 0 && this.series.clearPreviousPaths(), t.theme && (t = this.theme.updateThemeOptions(t)), this.updateHelpers._updateOptions(t, i, s, r, o);
    } }, { key: "updateSeries", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
      return this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(t, e, i);
    } }, { key: "appendSeries", value: function(t) {
      var e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2], s = this.w.config.series.slice();
      return s.push(t), this.series.resetSeries(!1), this.updateHelpers.revertDefaultAxisMinMax(), this.updateHelpers._updateSeries(s, e, i);
    } }, { key: "appendData", value: function(t) {
      var e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = this;
      i.w.globals.dataChanged = !0, i.series.getPreviousPaths();
      for (var s = i.w.config.series.slice(), r = 0; r < s.length; r++)
        if (t[r] !== null && t[r] !== void 0)
          for (var o = 0; o < t[r].data.length; o++)
            s[r].data.push(t[r].data[o]);
      return i.w.config.series = s, e && (i.w.globals.initialSeries = F.clone(i.w.config.series)), this.update();
    } }, { key: "update", value: function(t) {
      var e = this;
      return new Promise(function(i, s) {
        new Hr(e.ctx).clear({ isUpdating: !0 });
        var r = e.create(e.w.config.series, t);
        if (!r)
          return i(e);
        e.mount(r).then(function() {
          typeof e.w.config.chart.events.updated == "function" && e.w.config.chart.events.updated(e, e.w), e.events.fireEvent("updated", [e, e.w]), e.w.globals.isDirty = !0, i(e);
        }).catch(function(o) {
          s(o);
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
      var e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, s = this;
      i && (s = i), s.annotations.addXaxisAnnotationExternal(t, e, s);
    } }, { key: "addYaxisAnnotation", value: function(t) {
      var e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, s = this;
      i && (s = i), s.annotations.addYaxisAnnotationExternal(t, e, s);
    } }, { key: "addPointAnnotation", value: function(t) {
      var e = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0, s = this;
      i && (s = i), s.annotations.addPointAnnotationExternal(t, e, s);
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
      return new Nt(this.ctx).getMinYMaxY(t).highestY;
    } }, { key: "getLowestValueInSeries", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
      return new Nt(this.ctx).getMinYMaxY(t).lowestY;
    } }, { key: "getSeriesTotal", value: function() {
      return this.w.globals.seriesTotals;
    } }, { key: "toggleDataPointSelection", value: function(t, e) {
      return this.updateHelpers.toggleDataPointSelection(t, e);
    } }, { key: "zoomX", value: function(t, e) {
      this.ctx.toolbar.zoomUpdateOptions(t, e);
    } }, { key: "setLocale", value: function(t) {
      this.localization.setCurrentLocaleValues(t);
    } }, { key: "dataURI", value: function(t) {
      return new nt(this.ctx).dataURI(t);
    } }, { key: "exportToCSV", value: function() {
      var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return new nt(this.ctx).exportToCSV(t);
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
      var e = F.escapeString(t);
      if (Apex._chartInstances) {
        var i = Apex._chartInstances.filter(function(s) {
          return s.id === e;
        })[0];
        return i && i.chart;
      }
    } }, { key: "initOnLoad", value: function() {
      for (var t = document.querySelectorAll("[data-apexcharts]"), e = 0; e < t.length; e++)
        new E(t[e], JSON.parse(t[e].getAttribute("data-options"))).render();
    } }, { key: "exec", value: function(t, e) {
      var i = this.getChartByID(t);
      if (i) {
        i.w.globals.isExecCalled = !0;
        var s = null;
        if (i.publicMethods.indexOf(e) !== -1) {
          for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), n = 2; n < r; n++)
            o[n - 2] = arguments[n];
          s = i[e].apply(i, o);
        }
        return s;
      }
    } }, { key: "merge", value: function(t, e) {
      return F.extend(t, e);
    } }]), E;
  }();
  a.exports = $l;
})(ja, ja.exports);
var Du = ja.exports;
const Mo = /* @__PURE__ */ Mu(Du), Do = [
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
], Zs = /* @__PURE__ */ ca({
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
  emits: Do,
  setup(a, { emit: l }) {
    const u = fi(null), f = fi(null), v = (gt) => gt && typeof gt == "object" && !Array.isArray(gt) && gt != null, w = (gt, wt) => {
      typeof Object.assign != "function" && function() {
        Object.assign = function(Mt) {
          if (Mt == null)
            throw new TypeError("Cannot convert undefined or null to object");
          let qt = Object(Mt);
          for (let Gt = 1; Gt < arguments.length; Gt++) {
            let At = arguments[Gt];
            if (At != null)
              for (let kt in At)
                At.hasOwnProperty(kt) && (qt[kt] = At[kt]);
          }
          return qt;
        };
      }();
      let Zt = Object.assign({}, gt);
      return v(gt) && v(wt) && Object.keys(wt).forEach((Mt) => {
        v(wt[Mt]) ? Mt in gt ? Zt[Mt] = w(gt[Mt], wt[Mt]) : Object.assign(Zt, {
          [Mt]: wt[Mt]
        }) : Object.assign(Zt, {
          [Mt]: wt[Mt]
        });
      }), Zt;
    }, P = async () => {
      if (await ra(), f.value)
        return;
      const gt = {
        chart: {
          type: a.type || a.options.chart.type || "line",
          height: a.height,
          width: a.width,
          events: {}
        },
        series: a.series
      };
      Do.forEach((Zt) => {
        let Mt = (...qt) => l(Zt, ...qt);
        gt.chart.events[Zt] = Mt;
      });
      const wt = w(a.options, gt);
      return f.value = new Mo(u.value, wt), f.value.render();
    }, _ = () => (T(), P()), T = () => {
      f.value.destroy();
    }, z = (gt, wt) => f.value.updateSeries(gt, wt), D = (gt, wt, Zt, Mt) => f.value.updateOptions(gt, wt, Zt, Mt), R = (gt) => f.value.toggleSeries(gt), V = (gt) => {
      f.value.showSeries(gt);
    }, $ = (gt) => {
      f.value.hideSeries(gt);
    }, it = (gt, wt) => f.value.appendSeries(gt, wt), lt = () => {
      f.value.resetSeries();
    }, Lt = (gt, wt) => {
      f.value.toggleDataPointSelection(gt, wt);
    }, ut = (gt) => f.value.appendData(gt), F = (gt, wt) => f.value.zoomX(gt, wt), mt = (gt) => f.value.dataURI(gt), pt = (gt) => f.value.setLocale(gt), B = (gt, wt) => {
      f.value.addXaxisAnnotation(gt, wt);
    }, _t = (gt, wt) => {
      f.value.addYaxisAnnotation(gt, wt);
    }, yt = (gt, wt) => {
      f.value.addPointAnnotation(gt, wt);
    }, Jt = (gt, wt) => {
      f.value.removeAnnotation(gt, wt);
    }, Ut = () => {
      f.value.clearAnnotations();
    };
    Mn(() => {
      window.ApexCharts = Mo;
    }), br(() => {
      u.value = da().proxy.$el, P();
    }), Dn(() => {
      f.value && T();
    });
    const se = Wc(a);
    return Ie(se.options, () => {
      !f.value && a.options ? P() : f.value.updateOptions(a.options);
    }), Ie(
      se.series,
      () => {
        !f.value && a.series ? P() : f.value.updateSeries(a.series);
      },
      { deep: !0 }
    ), Ie(se.type, () => {
      _();
    }), Ie(se.width, () => {
      _();
    }), Ie(se.height, () => {
      _();
    }), {
      chart: f,
      init: P,
      refresh: _,
      destroy: T,
      updateOptions: D,
      updateSeries: z,
      toggleSeries: R,
      showSeries: V,
      hideSeries: $,
      resetSeries: lt,
      zoomX: F,
      toggleDataPointSelection: Lt,
      appendData: ut,
      appendSeries: it,
      addXaxisAnnotation: B,
      addYaxisAnnotation: _t,
      addPointAnnotation: yt,
      removeAnnotation: Jt,
      clearAnnotations: Ut,
      setLocale: pt,
      dataURI: mt
    };
  },
  render() {
    return _r("div", {
      class: "vue-apexcharts"
    });
  }
}), Ru = (a) => {
  a.component(Zs.name, Zs);
};
Zs.install = Ru;
const zu = { style: { display: "flex", "justify-content": "space-around" } }, Fu = /* @__PURE__ */ ji("h2", null, "Check your Chart", -1), Xu = {
  __name: "LineChart",
  setup(a) {
    fi({}), fi([44, 55, 41, 17, 15]);
    const l = fi({
      chart: {
        id: "vuechart-example"
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
      }
    }), u = fi([
      {
        name: "series-1",
        data: [30, 4, 45, 50, 49, 60, 70, 91]
      }
    ]);
    return br(() => {
    }), (f, v) => {
      const w = yh("apexchart");
      return ha(), Sr("div", null, [
        ji("div", zu, [
          ji("div", null, [
            Fu,
            xe(w, {
              width: "500",
              type: "line",
              options: l.value,
              series: u.value
            }, null, 8, ["options", "series"])
          ])
        ])
      ]);
    };
  }
}, bl = {
  __name: "App",
  setup(a) {
    return (l, u) => (ha(), fd(Xu));
  }
};
/*!
  * vue-router v4.3.3
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */
const hi = typeof document < "u";
function Yu(a) {
  return a.__esModule || a[Symbol.toStringTag] === "Module";
}
const Wt = Object.assign;
function Ea(a, l) {
  const u = {};
  for (const f in l) {
    const v = l[f];
    u[f] = Ae(v) ? v.map(a) : a(v);
  }
  return u;
}
const os = () => {
}, Ae = Array.isArray;
function zt(a) {
  const l = Array.from(arguments).slice(1);
  console.warn.apply(console, ["[Vue Router warn]: " + a].concat(l));
}
const vl = /#/g, Hu = /&/g, Vu = /\//g, Wu = /=/g, Bu = /\?/g, yl = /\+/g, Gu = /%5B/g, ju = /%5D/g, wl = /%5E/g, $u = /%60/g, kl = /%7B/g, Uu = /%7C/g, Al = /%7D/g, qu = /%20/g;
function Tr(a) {
  return encodeURI("" + a).replace(Uu, "|").replace(Gu, "[").replace(ju, "]");
}
function Zu(a) {
  return Tr(a).replace(kl, "{").replace(Al, "}").replace(wl, "^");
}
function $a(a) {
  return Tr(a).replace(yl, "%2B").replace(qu, "+").replace(vl, "%23").replace(Hu, "%26").replace($u, "`").replace(kl, "{").replace(Al, "}").replace(wl, "^");
}
function Ku(a) {
  return $a(a).replace(Wu, "%3D");
}
function Ju(a) {
  return Tr(a).replace(vl, "%23").replace(Bu, "%3F");
}
function Qu(a) {
  return a == null ? "" : Ju(a).replace(Vu, "%2F");
}
function $i(a) {
  try {
    return decodeURIComponent("" + a);
  } catch {
    process.env.NODE_ENV !== "production" && zt(`Error decoding "${a}". Using original value`);
  }
  return "" + a;
}
function Pa(a, l, u = "/") {
  let f, v = {}, w = "", P = "";
  const _ = l.indexOf("#");
  let T = l.indexOf("?");
  return _ < T && _ >= 0 && (T = -1), T > -1 && (f = l.slice(0, T), w = l.slice(T + 1, _ > -1 ? _ : l.length), v = a(w)), _ > -1 && (f = f || l.slice(0, _), P = l.slice(_, l.length)), f = sf(f ?? l, u), {
    fullPath: f + (w && "?") + w + P,
    path: f,
    query: v,
    hash: $i(P)
  };
}
function tf(a, l) {
  const u = l.query ? a(l.query) : "";
  return l.path + (u && "?") + u + (l.hash || "");
}
function Ro(a, l, u) {
  const f = l.matched.length - 1, v = u.matched.length - 1;
  return f > -1 && f === v && vi(l.matched[f], u.matched[v]) && Sl(l.params, u.params) && a(l.query) === a(u.query) && l.hash === u.hash;
}
function vi(a, l) {
  return (a.aliasOf || a) === (l.aliasOf || l);
}
function Sl(a, l) {
  if (Object.keys(a).length !== Object.keys(l).length)
    return !1;
  for (const u in a)
    if (!ef(a[u], l[u]))
      return !1;
  return !0;
}
function ef(a, l) {
  return Ae(a) ? zo(a, l) : Ae(l) ? zo(l, a) : a === l;
}
function zo(a, l) {
  return Ae(l) ? a.length === l.length && a.every((u, f) => u === l[f]) : a.length === 1 && a[0] === l;
}
function sf(a, l) {
  if (a.startsWith("/"))
    return a;
  if (process.env.NODE_ENV !== "production" && !l.startsWith("/"))
    return zt(`Cannot resolve a relative location without an absolute path. Trying to resolve "${a}" from "${l}". It should look like "/${l}".`), a;
  if (!a)
    return l;
  const u = l.split("/"), f = a.split("/"), v = f[f.length - 1];
  (v === ".." || v === ".") && f.push("");
  let w = u.length - 1, P, _;
  for (P = 0; P < f.length; P++)
    if (_ = f[P], _ !== ".")
      if (_ === "..")
        w > 1 && w--;
      else
        break;
  return u.slice(0, w).join("/") + "/" + f.slice(P).join("/");
}
var Ks;
(function(a) {
  a.pop = "pop", a.push = "push";
})(Ks || (Ks = {}));
var Fo;
(function(a) {
  a.back = "back", a.forward = "forward", a.unknown = "";
})(Fo || (Fo = {}));
function af(a, l) {
  const u = document.documentElement.getBoundingClientRect(), f = a.getBoundingClientRect();
  return {
    behavior: l.behavior,
    left: f.left - u.left - (l.left || 0),
    top: f.top - u.top - (l.top || 0)
  };
}
const rf = () => ({
  left: window.scrollX,
  top: window.scrollY
});
function of(a) {
  let l;
  if ("el" in a) {
    const u = a.el, f = typeof u == "string" && u.startsWith("#");
    if (process.env.NODE_ENV !== "production" && typeof a.el == "string" && (!f || !document.getElementById(a.el.slice(1))))
      try {
        const w = document.querySelector(a.el);
        if (f && w) {
          zt(`The selector "${a.el}" should be passed as "el: document.querySelector('${a.el}')" because it starts with "#".`);
          return;
        }
      } catch {
        zt(`The selector "${a.el}" is invalid. If you are using an id selector, make sure to escape it. You can find more information about escaping characters in selectors at https://mathiasbynens.be/notes/css-escapes or use CSS.escape (https://developer.mozilla.org/en-US/docs/Web/API/CSS/escape).`);
        return;
      }
    const v = typeof u == "string" ? f ? document.getElementById(u.slice(1)) : document.querySelector(u) : u;
    if (!v) {
      process.env.NODE_ENV !== "production" && zt(`Couldn't find element using selector "${a.el}" returned by scrollBehavior.`);
      return;
    }
    l = af(v, a);
  } else
    l = a;
  "scrollBehavior" in document.documentElement.style ? window.scrollTo(l) : window.scrollTo(l.left != null ? l.left : window.scrollX, l.top != null ? l.top : window.scrollY);
}
function Xo(a, l) {
  return (history.state ? history.state.position - l : -1) + a;
}
const Ua = /* @__PURE__ */ new Map();
function nf(a, l) {
  Ua.set(a, l);
}
function lf(a) {
  const l = Ua.get(a);
  return Ua.delete(a), l;
}
function Js(a) {
  return typeof a == "string" || a && typeof a == "object";
}
function Cl(a) {
  return typeof a == "string" || typeof a == "symbol";
}
const ni = {
  path: "/",
  name: void 0,
  params: {},
  query: {},
  hash: "",
  fullPath: "/",
  matched: [],
  meta: {},
  redirectedFrom: void 0
}, qa = Symbol(process.env.NODE_ENV !== "production" ? "navigation failure" : "");
var Yo;
(function(a) {
  a[a.aborted = 4] = "aborted", a[a.cancelled = 8] = "cancelled", a[a.duplicated = 16] = "duplicated";
})(Yo || (Yo = {}));
const cf = {
  1({ location: a, currentLocation: l }) {
    return `No match for
 ${JSON.stringify(a)}${l ? `
while being at
` + JSON.stringify(l) : ""}`;
  },
  2({ from: a, to: l }) {
    return `Redirected from "${a.fullPath}" to "${df(l)}" via a navigation guard.`;
  },
  4({ from: a, to: l }) {
    return `Navigation aborted from "${a.fullPath}" to "${l.fullPath}" via a navigation guard.`;
  },
  8({ from: a, to: l }) {
    return `Navigation cancelled from "${a.fullPath}" to "${l.fullPath}" with a new navigation.`;
  },
  16({ from: a, to: l }) {
    return `Avoided redundant navigation to current location: "${a.fullPath}".`;
  }
};
function Ui(a, l) {
  return process.env.NODE_ENV !== "production" ? Wt(new Error(cf[a](l)), {
    type: a,
    [qa]: !0
  }, l) : Wt(new Error(), {
    type: a,
    [qa]: !0
  }, l);
}
function Ue(a, l) {
  return a instanceof Error && qa in a && (l == null || !!(a.type & l));
}
const hf = ["params", "query", "hash"];
function df(a) {
  if (typeof a == "string")
    return a;
  if (a.path != null)
    return a.path;
  const l = {};
  for (const u of hf)
    u in a && (l[u] = a[u]);
  return JSON.stringify(l, null, 2);
}
const Ho = "[^/]+?", uf = {
  sensitive: !1,
  strict: !1,
  start: !0,
  end: !0
}, ff = /[.+*?^${}()[\]/\\]/g;
function gf(a, l) {
  const u = Wt({}, uf, l), f = [];
  let v = u.start ? "^" : "";
  const w = [];
  for (const z of a) {
    const D = z.length ? [] : [
      90
      /* PathScore.Root */
    ];
    u.strict && !z.length && (v += "/");
    for (let R = 0; R < z.length; R++) {
      const V = z[R];
      let $ = 40 + (u.sensitive ? 0.25 : 0);
      if (V.type === 0)
        R || (v += "/"), v += V.value.replace(ff, "\\$&"), $ += 40;
      else if (V.type === 1) {
        const { value: it, repeatable: lt, optional: Lt, regexp: ut } = V;
        w.push({
          name: it,
          repeatable: lt,
          optional: Lt
        });
        const F = ut || Ho;
        if (F !== Ho) {
          $ += 10;
          try {
            new RegExp(`(${F})`);
          } catch (pt) {
            throw new Error(`Invalid custom RegExp for param "${it}" (${F}): ` + pt.message);
          }
        }
        let mt = lt ? `((?:${F})(?:/(?:${F}))*)` : `(${F})`;
        R || (mt = // avoid an optional / if there are more segments e.g. /:p?-static
        // or /:p?-:p2
        Lt && z.length < 2 ? `(?:/${mt})` : "/" + mt), Lt && (mt += "?"), v += mt, $ += 20, Lt && ($ += -8), lt && ($ += -20), F === ".*" && ($ += -50);
      }
      D.push($);
    }
    f.push(D);
  }
  if (u.strict && u.end) {
    const z = f.length - 1;
    f[z][f[z].length - 1] += 0.7000000000000001;
  }
  u.strict || (v += "/?"), u.end ? v += "$" : u.strict && (v += "(?:/|$)");
  const P = new RegExp(v, u.sensitive ? "" : "i");
  function _(z) {
    const D = z.match(P), R = {};
    if (!D)
      return null;
    for (let V = 1; V < D.length; V++) {
      const $ = D[V] || "", it = w[V - 1];
      R[it.name] = $ && it.repeatable ? $.split("/") : $;
    }
    return R;
  }
  function T(z) {
    let D = "", R = !1;
    for (const V of a) {
      (!R || !D.endsWith("/")) && (D += "/"), R = !1;
      for (const $ of V)
        if ($.type === 0)
          D += $.value;
        else if ($.type === 1) {
          const { value: it, repeatable: lt, optional: Lt } = $, ut = it in z ? z[it] : "";
          if (Ae(ut) && !lt)
            throw new Error(`Provided param "${it}" is an array but it is not repeatable (* or + modifiers)`);
          const F = Ae(ut) ? ut.join("/") : ut;
          if (!F)
            if (Lt)
              V.length < 2 && (D.endsWith("/") ? D = D.slice(0, -1) : R = !0);
            else
              throw new Error(`Missing required param "${it}"`);
          D += F;
        }
    }
    return D || "/";
  }
  return {
    re: P,
    score: f,
    keys: w,
    parse: _,
    stringify: T
  };
}
function pf(a, l) {
  let u = 0;
  for (; u < a.length && u < l.length; ) {
    const f = l[u] - a[u];
    if (f)
      return f;
    u++;
  }
  return a.length < l.length ? a.length === 1 && a[0] === 80 ? -1 : 1 : a.length > l.length ? l.length === 1 && l[0] === 80 ? 1 : -1 : 0;
}
function El(a, l) {
  let u = 0;
  const f = a.score, v = l.score;
  for (; u < f.length && u < v.length; ) {
    const w = pf(f[u], v[u]);
    if (w)
      return w;
    u++;
  }
  if (Math.abs(v.length - f.length) === 1) {
    if (Vo(f))
      return 1;
    if (Vo(v))
      return -1;
  }
  return v.length - f.length;
}
function Vo(a) {
  const l = a[a.length - 1];
  return a.length > 0 && l[l.length - 1] < 0;
}
const xf = {
  type: 0,
  value: ""
}, mf = /[a-zA-Z0-9_]/;
function bf(a) {
  if (!a)
    return [[]];
  if (a === "/")
    return [[xf]];
  if (!a.startsWith("/"))
    throw new Error(process.env.NODE_ENV !== "production" ? `Route paths should start with a "/": "${a}" should be "/${a}".` : `Invalid path "${a}"`);
  function l($) {
    throw new Error(`ERR (${u})/"${z}": ${$}`);
  }
  let u = 0, f = u;
  const v = [];
  let w;
  function P() {
    w && v.push(w), w = [];
  }
  let _ = 0, T, z = "", D = "";
  function R() {
    z && (u === 0 ? w.push({
      type: 0,
      value: z
    }) : u === 1 || u === 2 || u === 3 ? (w.length > 1 && (T === "*" || T === "+") && l(`A repeatable param (${z}) must be alone in its segment. eg: '/:ids+.`), w.push({
      type: 1,
      value: z,
      regexp: D,
      repeatable: T === "*" || T === "+",
      optional: T === "*" || T === "?"
    })) : l("Invalid state to consume buffer"), z = "");
  }
  function V() {
    z += T;
  }
  for (; _ < a.length; ) {
    if (T = a[_++], T === "\\" && u !== 2) {
      f = u, u = 4;
      continue;
    }
    switch (u) {
      case 0:
        T === "/" ? (z && R(), P()) : T === ":" ? (R(), u = 1) : V();
        break;
      case 4:
        V(), u = f;
        break;
      case 1:
        T === "(" ? u = 2 : mf.test(T) ? V() : (R(), u = 0, T !== "*" && T !== "?" && T !== "+" && _--);
        break;
      case 2:
        T === ")" ? D[D.length - 1] == "\\" ? D = D.slice(0, -1) + T : u = 3 : D += T;
        break;
      case 3:
        R(), u = 0, T !== "*" && T !== "?" && T !== "+" && _--, D = "";
        break;
      default:
        l("Unknown state");
        break;
    }
  }
  return u === 2 && l(`Unfinished custom RegExp for param "${z}"`), R(), P(), v;
}
function vf(a, l, u) {
  const f = gf(bf(a.path), u);
  if (process.env.NODE_ENV !== "production") {
    const w = /* @__PURE__ */ new Set();
    for (const P of f.keys)
      w.has(P.name) && zt(`Found duplicated params with name "${P.name}" for path "${a.path}". Only the last one will be available on "$route.params".`), w.add(P.name);
  }
  const v = Wt(f, {
    record: a,
    parent: l,
    // these needs to be populated by the parent
    children: [],
    alias: []
  });
  return l && !v.record.aliasOf == !l.record.aliasOf && l.children.push(v), v;
}
function yf(a, l) {
  const u = [], f = /* @__PURE__ */ new Map();
  l = Go({ strict: !1, end: !0, sensitive: !1 }, l);
  function v(D) {
    return f.get(D);
  }
  function w(D, R, V) {
    const $ = !V, it = wf(D);
    process.env.NODE_ENV !== "production" && Cf(it, R), it.aliasOf = V && V.record;
    const lt = Go(l, D), Lt = [
      it
    ];
    if ("alias" in D) {
      const mt = typeof D.alias == "string" ? [D.alias] : D.alias;
      for (const pt of mt)
        Lt.push(Wt({}, it, {
          // this allows us to hold a copy of the `components` option
          // so that async components cache is hold on the original record
          components: V ? V.record.components : it.components,
          path: pt,
          // we might be the child of an alias
          aliasOf: V ? V.record : it
          // the aliases are always of the same kind as the original since they
          // are defined on the same record
        }));
    }
    let ut, F;
    for (const mt of Lt) {
      const { path: pt } = mt;
      if (R && pt[0] !== "/") {
        const B = R.record.path, _t = B[B.length - 1] === "/" ? "" : "/";
        mt.path = R.record.path + (pt && _t + pt);
      }
      if (process.env.NODE_ENV !== "production" && mt.path === "*")
        throw new Error(`Catch all routes ("*") must now be defined using a param with a custom regexp.
See more at https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes.`);
      if (ut = vf(mt, R, lt), process.env.NODE_ENV !== "production" && R && pt[0] === "/" && Ef(ut, R), V ? (V.alias.push(ut), process.env.NODE_ENV !== "production" && Sf(V, ut)) : (F = F || ut, F !== ut && F.alias.push(ut), $ && D.name && !Bo(ut) && P(D.name)), Pl(ut) && T(ut), it.children) {
        const B = it.children;
        for (let _t = 0; _t < B.length; _t++)
          w(B[_t], ut, V && V.children[_t]);
      }
      V = V || ut;
    }
    return F ? () => {
      P(F);
    } : os;
  }
  function P(D) {
    if (Cl(D)) {
      const R = f.get(D);
      R && (f.delete(D), u.splice(u.indexOf(R), 1), R.children.forEach(P), R.alias.forEach(P));
    } else {
      const R = u.indexOf(D);
      R > -1 && (u.splice(R, 1), D.record.name && f.delete(D.record.name), D.children.forEach(P), D.alias.forEach(P));
    }
  }
  function _() {
    return u;
  }
  function T(D) {
    const R = Pf(D, u);
    u.splice(R, 0, D), D.record.name && !Bo(D) && f.set(D.record.name, D);
  }
  function z(D, R) {
    let V, $ = {}, it, lt;
    if ("name" in D && D.name) {
      if (V = f.get(D.name), !V)
        throw Ui(1, {
          location: D
        });
      if (process.env.NODE_ENV !== "production") {
        const F = Object.keys(D.params || {}).filter((mt) => !V.keys.find((pt) => pt.name === mt));
        F.length && zt(`Discarded invalid param(s) "${F.join('", "')}" when navigating. See https://github.com/vuejs/router/blob/main/packages/router/CHANGELOG.md#414-2022-08-22 for more details.`);
      }
      lt = V.record.name, $ = Wt(
        // paramsFromLocation is a new object
        Wo(
          R.params,
          // only keep params that exist in the resolved location
          // only keep optional params coming from a parent record
          V.keys.filter((F) => !F.optional).concat(V.parent ? V.parent.keys.filter((F) => F.optional) : []).map((F) => F.name)
        ),
        // discard any existing params in the current location that do not exist here
        // #1497 this ensures better active/exact matching
        D.params && Wo(D.params, V.keys.map((F) => F.name))
      ), it = V.stringify($);
    } else if (D.path != null)
      it = D.path, process.env.NODE_ENV !== "production" && !it.startsWith("/") && zt(`The Matcher cannot resolve relative paths but received "${it}". Unless you directly called \`matcher.resolve("${it}")\`, this is probably a bug in vue-router. Please open an issue at https://github.com/vuejs/router/issues/new/choose.`), V = u.find((F) => F.re.test(it)), V && ($ = V.parse(it), lt = V.record.name);
    else {
      if (V = R.name ? f.get(R.name) : u.find((F) => F.re.test(R.path)), !V)
        throw Ui(1, {
          location: D,
          currentLocation: R
        });
      lt = V.record.name, $ = Wt({}, R.params, D.params), it = V.stringify($);
    }
    const Lt = [];
    let ut = V;
    for (; ut; )
      Lt.unshift(ut.record), ut = ut.parent;
    return {
      name: lt,
      path: it,
      params: $,
      matched: Lt,
      meta: Af(Lt)
    };
  }
  return a.forEach((D) => w(D)), { addRoute: w, resolve: z, removeRoute: P, getRoutes: _, getRecordMatcher: v };
}
function Wo(a, l) {
  const u = {};
  for (const f of l)
    f in a && (u[f] = a[f]);
  return u;
}
function wf(a) {
  return {
    path: a.path,
    redirect: a.redirect,
    name: a.name,
    meta: a.meta || {},
    aliasOf: void 0,
    beforeEnter: a.beforeEnter,
    props: kf(a),
    children: a.children || [],
    instances: {},
    leaveGuards: /* @__PURE__ */ new Set(),
    updateGuards: /* @__PURE__ */ new Set(),
    enterCallbacks: {},
    components: "components" in a ? a.components || null : a.component && { default: a.component }
  };
}
function kf(a) {
  const l = {}, u = a.props || !1;
  if ("component" in a)
    l.default = u;
  else
    for (const f in a.components)
      l[f] = typeof u == "object" ? u[f] : u;
  return l;
}
function Bo(a) {
  for (; a; ) {
    if (a.record.aliasOf)
      return !0;
    a = a.parent;
  }
  return !1;
}
function Af(a) {
  return a.reduce((l, u) => Wt(l, u.meta), {});
}
function Go(a, l) {
  const u = {};
  for (const f in a)
    u[f] = f in l ? l[f] : a[f];
  return u;
}
function Za(a, l) {
  return a.name === l.name && a.optional === l.optional && a.repeatable === l.repeatable;
}
function Sf(a, l) {
  for (const u of a.keys)
    if (!u.optional && !l.keys.find(Za.bind(null, u)))
      return zt(`Alias "${l.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${u.name}"`);
  for (const u of l.keys)
    if (!u.optional && !a.keys.find(Za.bind(null, u)))
      return zt(`Alias "${l.record.path}" and the original record: "${a.record.path}" must have the exact same param named "${u.name}"`);
}
function Cf(a, l) {
  l && l.record.name && !a.name && !a.path && zt(`The route named "${String(l.record.name)}" has a child without a name and an empty path. Using that name won't render the empty path child so you probably want to move the name to the child instead. If this is intentional, add a name to the child route to remove the warning.`);
}
function Ef(a, l) {
  for (const u of l.keys)
    if (!a.keys.find(Za.bind(null, u)))
      return zt(`Absolute path "${a.record.path}" must have the exact same param named "${u.name}" as its parent "${l.record.path}".`);
}
function Pf(a, l) {
  let u = 0, f = l.length;
  for (; u !== f; ) {
    const w = u + f >> 1;
    El(a, l[w]) < 0 ? f = w : u = w + 1;
  }
  const v = _f(a);
  return v && (f = l.lastIndexOf(v, f - 1), process.env.NODE_ENV !== "production" && f < 0 && zt(`Finding ancestor route "${v.record.path}" failed for "${a.record.path}"`)), f;
}
function _f(a) {
  let l = a;
  for (; l = l.parent; )
    if (Pl(l) && El(a, l) === 0)
      return l;
}
function Pl({ record: a }) {
  return !!(a.name || a.components && Object.keys(a.components).length || a.redirect);
}
function Nf(a) {
  const l = {};
  if (a === "" || a === "?")
    return l;
  const f = (a[0] === "?" ? a.slice(1) : a).split("&");
  for (let v = 0; v < f.length; ++v) {
    const w = f[v].replace(yl, " "), P = w.indexOf("="), _ = $i(P < 0 ? w : w.slice(0, P)), T = P < 0 ? null : $i(w.slice(P + 1));
    if (_ in l) {
      let z = l[_];
      Ae(z) || (z = l[_] = [z]), z.push(T);
    } else
      l[_] = T;
  }
  return l;
}
function jo(a) {
  let l = "";
  for (let u in a) {
    const f = a[u];
    if (u = Ku(u), f == null) {
      f !== void 0 && (l += (l.length ? "&" : "") + u);
      continue;
    }
    (Ae(f) ? f.map((w) => w && $a(w)) : [f && $a(f)]).forEach((w) => {
      w !== void 0 && (l += (l.length ? "&" : "") + u, w != null && (l += "=" + w));
    });
  }
  return l;
}
function Of(a) {
  const l = {};
  for (const u in a) {
    const f = a[u];
    f !== void 0 && (l[u] = Ae(f) ? f.map((v) => v == null ? null : "" + v) : f == null ? f : "" + f);
  }
  return l;
}
const Lf = Symbol(process.env.NODE_ENV !== "production" ? "router view location matched" : ""), $o = Symbol(process.env.NODE_ENV !== "production" ? "router view depth" : ""), Mr = Symbol(process.env.NODE_ENV !== "production" ? "router" : ""), _l = Symbol(process.env.NODE_ENV !== "production" ? "route location" : ""), Ka = Symbol(process.env.NODE_ENV !== "production" ? "router view location" : "");
function Ji() {
  let a = [];
  function l(f) {
    return a.push(f), () => {
      const v = a.indexOf(f);
      v > -1 && a.splice(v, 1);
    };
  }
  function u() {
    a = [];
  }
  return {
    add: l,
    list: () => a.slice(),
    reset: u
  };
}
function di(a, l, u, f, v, w = (P) => P()) {
  const P = f && // name is defined if record is because of the function overload
  (f.enterCallbacks[v] = f.enterCallbacks[v] || []);
  return () => new Promise((_, T) => {
    const z = (V) => {
      V === !1 ? T(Ui(4, {
        from: u,
        to: l
      })) : V instanceof Error ? T(V) : Js(V) ? T(Ui(2, {
        from: l,
        to: V
      })) : (P && // since enterCallbackArray is truthy, both record and name also are
      f.enterCallbacks[v] === P && typeof V == "function" && P.push(V), _());
    }, D = w(() => a.call(f && f.instances[v], l, u, process.env.NODE_ENV !== "production" ? If(z, l, u) : z));
    let R = Promise.resolve(D);
    if (a.length < 3 && (R = R.then(z)), process.env.NODE_ENV !== "production" && a.length > 2) {
      const V = `The "next" callback was never called inside of ${a.name ? '"' + a.name + '"' : ""}:
${a.toString()}
. If you are returning a value instead of calling "next", make sure to remove the "next" parameter from your function.`;
      if (typeof D == "object" && "then" in D)
        R = R.then(($) => z._called ? $ : (zt(V), Promise.reject(new Error("Invalid navigation guard"))));
      else if (D !== void 0 && !z._called) {
        zt(V), T(new Error("Invalid navigation guard"));
        return;
      }
    }
    R.catch((V) => T(V));
  });
}
function If(a, l, u) {
  let f = 0;
  return function() {
    f++ === 1 && zt(`The "next" callback was called more than once in one navigation guard when going from "${u.fullPath}" to "${l.fullPath}". It should be called exactly one time in each navigation guard. This will fail in production.`), a._called = !0, f === 1 && a.apply(null, arguments);
  };
}
function _a(a, l, u, f, v = (w) => w()) {
  const w = [];
  for (const P of a) {
    process.env.NODE_ENV !== "production" && !P.components && !P.children.length && zt(`Record with path "${P.path}" is either missing a "component(s)" or "children" property.`);
    for (const _ in P.components) {
      let T = P.components[_];
      if (process.env.NODE_ENV !== "production") {
        if (!T || typeof T != "object" && typeof T != "function")
          throw zt(`Component "${_}" in record with path "${P.path}" is not a valid component. Received "${String(T)}".`), new Error("Invalid route component");
        if ("then" in T) {
          zt(`Component "${_}" in record with path "${P.path}" is a Promise instead of a function that returns a Promise. Did you write "import('./MyPage.vue')" instead of "() => import('./MyPage.vue')" ? This will break in production if not fixed.`);
          const z = T;
          T = () => z;
        } else T.__asyncLoader && // warn only once per component
        !T.__warnedDefineAsync && (T.__warnedDefineAsync = !0, zt(`Component "${_}" in record with path "${P.path}" is defined using "defineAsyncComponent()". Write "() => import('./MyPage.vue')" instead of "defineAsyncComponent(() => import('./MyPage.vue'))".`));
      }
      if (!(l !== "beforeRouteEnter" && !P.instances[_]))
        if (Tf(T)) {
          const D = (T.__vccOpts || T)[l];
          D && w.push(di(D, u, f, P, _, v));
        } else {
          let z = T();
          process.env.NODE_ENV !== "production" && !("catch" in z) && (zt(`Component "${_}" in record with path "${P.path}" is a function that does not return a Promise. If you were passing a functional component, make sure to add a "displayName" to the component. This will break in production if not fixed.`), z = Promise.resolve(z)), w.push(() => z.then((D) => {
            if (!D)
              return Promise.reject(new Error(`Couldn't resolve component "${_}" at "${P.path}"`));
            const R = Yu(D) ? D.default : D;
            P.components[_] = R;
            const $ = (R.__vccOpts || R)[l];
            return $ && di($, u, f, P, _, v)();
          }));
        }
    }
  }
  return w;
}
function Tf(a) {
  return typeof a == "object" || "displayName" in a || "props" in a || "__vccOpts" in a;
}
function Uo(a) {
  const l = Qe(Mr), u = Qe(_l);
  let f = !1, v = null;
  const w = Te(() => {
    const D = gi(a.to);
    return process.env.NODE_ENV !== "production" && (!f || D !== v) && (Js(D) || (f ? zt(`Invalid value for prop "to" in useLink()
- to:`, D, `
- previous to:`, v, `
- props:`, a) : zt(`Invalid value for prop "to" in useLink()
- to:`, D, `
- props:`, a)), v = D, f = !0), l.resolve(D);
  }), P = Te(() => {
    const { matched: D } = w.value, { length: R } = D, V = D[R - 1], $ = u.matched;
    if (!V || !$.length)
      return -1;
    const it = $.findIndex(vi.bind(null, V));
    if (it > -1)
      return it;
    const lt = qo(D[R - 2]);
    return (
      // we are dealing with nested routes
      R > 1 && // if the parent and matched route have the same path, this link is
      // referring to the empty child. Or we currently are on a different
      // child of the same parent
      qo(V) === lt && // avoid comparing the child with its parent
      $[$.length - 1].path !== lt ? $.findIndex(vi.bind(null, D[R - 2])) : it
    );
  }), _ = Te(() => P.value > -1 && zf(u.params, w.value.params)), T = Te(() => P.value > -1 && P.value === u.matched.length - 1 && Sl(u.params, w.value.params));
  function z(D = {}) {
    return Rf(D) ? l[gi(a.replace) ? "replace" : "push"](
      gi(a.to)
      // avoid uncaught errors are they are logged anyway
    ).catch(os) : Promise.resolve();
  }
  if (process.env.NODE_ENV !== "production" && hi) {
    const D = da();
    if (D) {
      const R = {
        route: w.value,
        isActive: _.value,
        isExactActive: T.value,
        error: null
      };
      D.__vrl_devtools = D.__vrl_devtools || [], D.__vrl_devtools.push(R), od(() => {
        R.route = w.value, R.isActive = _.value, R.isExactActive = T.value, R.error = Js(gi(a.to)) ? null : 'Invalid "to" value';
      }, { flush: "post" });
    }
  }
  return {
    route: w,
    href: Te(() => w.value.href),
    isActive: _,
    isExactActive: T,
    navigate: z
  };
}
const Mf = /* @__PURE__ */ ca({
  name: "RouterLink",
  compatConfig: { MODE: 3 },
  props: {
    to: {
      type: [String, Object],
      required: !0
    },
    replace: Boolean,
    activeClass: String,
    // inactiveClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: "page"
    }
  },
  useLink: Uo,
  setup(a, { slots: l }) {
    const u = sa(Uo(a)), { options: f } = Qe(Mr), v = Te(() => ({
      [Zo(a.activeClass, f.linkActiveClass, "router-link-active")]: u.isActive,
      // [getLinkClass(
      //   props.inactiveClass,
      //   options.linkInactiveClass,
      //   'router-link-inactive'
      // )]: !link.isExactActive,
      [Zo(a.exactActiveClass, f.linkExactActiveClass, "router-link-exact-active")]: u.isExactActive
    }));
    return () => {
      const w = l.default && l.default(u);
      return a.custom ? w : _r("a", {
        "aria-current": u.isExactActive ? a.ariaCurrentValue : null,
        href: u.href,
        // this would override user added attrs but Vue will still add
        // the listener, so we end up triggering both
        onClick: u.navigate,
        class: v.value
      }, w);
    };
  }
}), Df = Mf;
function Rf(a) {
  if (!(a.metaKey || a.altKey || a.ctrlKey || a.shiftKey) && !a.defaultPrevented && !(a.button !== void 0 && a.button !== 0)) {
    if (a.currentTarget && a.currentTarget.getAttribute) {
      const l = a.currentTarget.getAttribute("target");
      if (/\b_blank\b/i.test(l))
        return;
    }
    return a.preventDefault && a.preventDefault(), !0;
  }
}
function zf(a, l) {
  for (const u in l) {
    const f = l[u], v = a[u];
    if (typeof f == "string") {
      if (f !== v)
        return !1;
    } else if (!Ae(v) || v.length !== f.length || f.some((w, P) => w !== v[P]))
      return !1;
  }
  return !0;
}
function qo(a) {
  return a ? a.aliasOf ? a.aliasOf.path : a.path : "";
}
const Zo = (a, l, u) => a ?? l ?? u, Ff = /* @__PURE__ */ ca({
  name: "RouterView",
  // #674 we manually inherit them
  inheritAttrs: !1,
  props: {
    name: {
      type: String,
      default: "default"
    },
    route: Object
  },
  // Better compat for @vue/compat users
  // https://github.com/vuejs/router/issues/1315
  compatConfig: { MODE: 3 },
  setup(a, { attrs: l, slots: u }) {
    process.env.NODE_ENV !== "production" && Yf();
    const f = Qe(Ka), v = Te(() => a.route || f.value), w = Qe($o, 0), P = Te(() => {
      let z = gi(w);
      const { matched: D } = v.value;
      let R;
      for (; (R = D[z]) && !R.components; )
        z++;
      return z;
    }), _ = Te(() => v.value.matched[P.value]);
    Ts($o, Te(() => P.value + 1)), Ts(Lf, _), Ts(Ka, v);
    const T = fi();
    return Ie(() => [T.value, _.value, a.name], ([z, D, R], [V, $, it]) => {
      D && (D.instances[R] = z, $ && $ !== D && z && z === V && (D.leaveGuards.size || (D.leaveGuards = $.leaveGuards), D.updateGuards.size || (D.updateGuards = $.updateGuards))), z && D && // if there is no instance but to and from are the same this might be
      // the first visit
      (!$ || !vi(D, $) || !V) && (D.enterCallbacks[R] || []).forEach((lt) => lt(z));
    }, { flush: "post" }), () => {
      const z = v.value, D = a.name, R = _.value, V = R && R.components[D];
      if (!V)
        return Ko(u.default, { Component: V, route: z });
      const $ = R.props[D], it = $ ? $ === !0 ? z.params : typeof $ == "function" ? $(z) : $ : null, Lt = _r(V, Wt({}, it, l, {
        onVnodeUnmounted: (ut) => {
          ut.component.isUnmounted && (R.instances[D] = null);
        },
        ref: T
      }));
      if (process.env.NODE_ENV !== "production" && hi && Lt.ref) {
        const ut = {
          depth: P.value,
          name: R.name,
          path: R.path,
          meta: R.meta
        };
        (Ae(Lt.ref) ? Lt.ref.map((mt) => mt.i) : [Lt.ref.i]).forEach((mt) => {
          mt.__vrv_devtools = ut;
        });
      }
      return (
        // pass the vnode to the slot as a prop.
        // h and <component :is="..."> both accept vnodes
        Ko(u.default, { Component: Lt, route: z }) || Lt
      );
    };
  }
});
function Ko(a, l) {
  if (!a)
    return null;
  const u = a(l);
  return u.length === 1 ? u[0] : u;
}
const Xf = Ff;
function Yf() {
  const a = da(), l = a.parent && a.parent.type.name, u = a.parent && a.parent.subTree && a.parent.subTree.type;
  if (l && (l === "KeepAlive" || l.includes("Transition")) && typeof u == "object" && u.name === "RouterView") {
    const f = l === "KeepAlive" ? "keep-alive" : "transition";
    zt(`<router-view> can no longer be used directly inside <transition> or <keep-alive>.
Use slot props instead:

<router-view v-slot="{ Component }">
  <${f}>
    <component :is="Component" />
  </${f}>
</router-view>`);
  }
}
function Qi(a, l) {
  const u = Wt({}, a, {
    // remove variables that can contain vue instances
    matched: a.matched.map((f) => Kf(f, ["instances", "children", "aliasOf"]))
  });
  return {
    _custom: {
      type: null,
      readOnly: !0,
      display: a.fullPath,
      tooltip: l,
      value: u
    }
  };
}
function _s(a) {
  return {
    _custom: {
      display: a
    }
  };
}
let Hf = 0;
function Vf(a, l, u) {
  if (l.__hasDevtools)
    return;
  l.__hasDevtools = !0;
  const f = Hf++;
  Or({
    id: "org.vuejs.router" + (f ? "." + f : ""),
    label: "Vue Router",
    packageName: "vue-router",
    homepage: "https://router.vuejs.org",
    logo: "https://router.vuejs.org/logo.png",
    componentStateTypes: ["Routing"],
    app: a
  }, (v) => {
    typeof v.now != "function" && console.warn("[Vue Router]: You seem to be using an outdated version of Vue Devtools. Are you still using the Beta release instead of the stable one? You can find the links at https://devtools.vuejs.org/guide/installation.html."), v.on.inspectComponent((D, R) => {
      D.instanceData && D.instanceData.state.push({
        type: "Routing",
        key: "$route",
        editable: !1,
        value: Qi(l.currentRoute.value, "Current Route")
      });
    }), v.on.visitComponentTree(({ treeNode: D, componentInstance: R }) => {
      if (R.__vrv_devtools) {
        const V = R.__vrv_devtools;
        D.tags.push({
          label: (V.name ? `${V.name.toString()}: ` : "") + V.path,
          textColor: 0,
          tooltip: "This component is rendered by &lt;router-view&gt;",
          backgroundColor: Nl
        });
      }
      Ae(R.__vrl_devtools) && (R.__devtoolsApi = v, R.__vrl_devtools.forEach((V) => {
        let $ = V.route.path, it = Il, lt = "", Lt = 0;
        V.error ? ($ = V.error, it = $f, Lt = Uf) : V.isExactActive ? (it = Ll, lt = "This is exactly active") : V.isActive && (it = Ol, lt = "This link is active"), D.tags.push({
          label: $,
          textColor: Lt,
          tooltip: lt,
          backgroundColor: it
        });
      }));
    }), Ie(l.currentRoute, () => {
      T(), v.notifyComponentUpdate(), v.sendInspectorTree(_), v.sendInspectorState(_);
    });
    const w = "router:navigations:" + f;
    v.addTimelineLayer({
      id: w,
      label: `Router${f ? " " + f : ""} Navigations`,
      color: 4237508
    }), l.onError((D, R) => {
      v.addTimelineEvent({
        layerId: w,
        event: {
          title: "Error during Navigation",
          subtitle: R.fullPath,
          logType: "error",
          time: v.now(),
          data: { error: D },
          groupId: R.meta.__navigationId
        }
      });
    });
    let P = 0;
    l.beforeEach((D, R) => {
      const V = {
        guard: _s("beforeEach"),
        from: Qi(R, "Current Location during this navigation"),
        to: Qi(D, "Target location")
      };
      Object.defineProperty(D.meta, "__navigationId", {
        value: P++
      }), v.addTimelineEvent({
        layerId: w,
        event: {
          time: v.now(),
          title: "Start of navigation",
          subtitle: D.fullPath,
          data: V,
          groupId: D.meta.__navigationId
        }
      });
    }), l.afterEach((D, R, V) => {
      const $ = {
        guard: _s("afterEach")
      };
      V ? ($.failure = {
        _custom: {
          type: Error,
          readOnly: !0,
          display: V ? V.message : "",
          tooltip: "Navigation Failure",
          value: V
        }
      }, $.status = _s("❌")) : $.status = _s("✅"), $.from = Qi(R, "Current Location during this navigation"), $.to = Qi(D, "Target location"), v.addTimelineEvent({
        layerId: w,
        event: {
          title: "End of navigation",
          subtitle: D.fullPath,
          time: v.now(),
          data: $,
          logType: V ? "warning" : "default",
          groupId: D.meta.__navigationId
        }
      });
    });
    const _ = "router-inspector:" + f;
    v.addInspector({
      id: _,
      label: "Routes" + (f ? " " + f : ""),
      icon: "book",
      treeFilterPlaceholder: "Search routes"
    });
    function T() {
      if (!z)
        return;
      const D = z;
      let R = u.getRoutes().filter((V) => !V.parent || // these routes have a parent with no component which will not appear in the view
      // therefore we still need to include them
      !V.parent.record.components);
      R.forEach(Dl), D.filter && (R = R.filter((V) => (
        // save matches state based on the payload
        Ja(V, D.filter.toLowerCase())
      ))), R.forEach((V) => Ml(V, l.currentRoute.value)), D.rootNodes = R.map(Tl);
    }
    let z;
    v.on.getInspectorTree((D) => {
      z = D, D.app === a && D.inspectorId === _ && T();
    }), v.on.getInspectorState((D) => {
      if (D.app === a && D.inspectorId === _) {
        const V = u.getRoutes().find(($) => $.record.__vd_id === D.nodeId);
        V && (D.state = {
          options: Bf(V)
        });
      }
    }), v.sendInspectorTree(_), v.sendInspectorState(_);
  });
}
function Wf(a) {
  return a.optional ? a.repeatable ? "*" : "?" : a.repeatable ? "+" : "";
}
function Bf(a) {
  const { record: l } = a, u = [
    { editable: !1, key: "path", value: l.path }
  ];
  return l.name != null && u.push({
    editable: !1,
    key: "name",
    value: l.name
  }), u.push({ editable: !1, key: "regexp", value: a.re }), a.keys.length && u.push({
    editable: !1,
    key: "keys",
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: a.keys.map((f) => `${f.name}${Wf(f)}`).join(" "),
        tooltip: "Param keys",
        value: a.keys
      }
    }
  }), l.redirect != null && u.push({
    editable: !1,
    key: "redirect",
    value: l.redirect
  }), a.alias.length && u.push({
    editable: !1,
    key: "aliases",
    value: a.alias.map((f) => f.record.path)
  }), Object.keys(a.record.meta).length && u.push({
    editable: !1,
    key: "meta",
    value: a.record.meta
  }), u.push({
    key: "score",
    editable: !1,
    value: {
      _custom: {
        type: null,
        readOnly: !0,
        display: a.score.map((f) => f.join(", ")).join(" | "),
        tooltip: "Score used to sort routes",
        value: a.score
      }
    }
  }), u;
}
const Nl = 15485081, Ol = 2450411, Ll = 8702998, Gf = 2282478, Il = 16486972, jf = 6710886, $f = 16704226, Uf = 12131356;
function Tl(a) {
  const l = [], { record: u } = a;
  u.name != null && l.push({
    label: String(u.name),
    textColor: 0,
    backgroundColor: Gf
  }), u.aliasOf && l.push({
    label: "alias",
    textColor: 0,
    backgroundColor: Il
  }), a.__vd_match && l.push({
    label: "matches",
    textColor: 0,
    backgroundColor: Nl
  }), a.__vd_exactActive && l.push({
    label: "exact",
    textColor: 0,
    backgroundColor: Ll
  }), a.__vd_active && l.push({
    label: "active",
    textColor: 0,
    backgroundColor: Ol
  }), u.redirect && l.push({
    label: typeof u.redirect == "string" ? `redirect: ${u.redirect}` : "redirects",
    textColor: 16777215,
    backgroundColor: jf
  });
  let f = u.__vd_id;
  return f == null && (f = String(qf++), u.__vd_id = f), {
    id: f,
    label: u.path,
    tags: l,
    children: a.children.map(Tl)
  };
}
let qf = 0;
const Zf = /^\/(.*)\/([a-z]*)$/;
function Ml(a, l) {
  const u = l.matched.length && vi(l.matched[l.matched.length - 1], a.record);
  a.__vd_exactActive = a.__vd_active = u, u || (a.__vd_active = l.matched.some((f) => vi(f, a.record))), a.children.forEach((f) => Ml(f, l));
}
function Dl(a) {
  a.__vd_match = !1, a.children.forEach(Dl);
}
function Ja(a, l) {
  const u = String(a.re).match(Zf);
  if (a.__vd_match = !1, !u || u.length < 3)
    return !1;
  if (new RegExp(u[1].replace(/\$$/, ""), u[2]).test(l))
    return a.children.forEach((P) => Ja(P, l)), a.record.path !== "/" || l === "/" ? (a.__vd_match = a.re.test(l), !0) : !1;
  const v = a.record.path.toLowerCase(), w = $i(v);
  return !l.startsWith("/") && (w.includes(l) || v.includes(l)) || w.startsWith(l) || v.startsWith(l) || a.record.name && String(a.record.name).includes(l) ? !0 : a.children.some((P) => Ja(P, l));
}
function Kf(a, l) {
  const u = {};
  for (const f in a)
    l.includes(f) || (u[f] = a[f]);
  return u;
}
function Jf(a) {
  const l = yf(a.routes, a), u = a.parseQuery || Nf, f = a.stringifyQuery || jo, v = a.history;
  if (process.env.NODE_ENV !== "production" && !v)
    throw new Error('Provide the "history" option when calling "createRouter()": https://next.router.vuejs.org/api/#history.');
  const w = Ji(), P = Ji(), _ = Ji(), T = Yc(ni);
  let z = ni;
  hi && a.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
  const D = Ea.bind(null, (G) => "" + G), R = Ea.bind(null, Qu), V = (
    // @ts-expect-error: intentionally avoid the type check
    Ea.bind(null, $i)
  );
  function $(G, rt) {
    let nt, ht;
    return Cl(G) ? (nt = l.getRecordMatcher(G), process.env.NODE_ENV !== "production" && !nt && zt(`Parent route "${String(G)}" not found when adding child route`, rt), ht = rt) : ht = G, l.addRoute(ht, nt);
  }
  function it(G) {
    const rt = l.getRecordMatcher(G);
    rt ? l.removeRoute(rt) : process.env.NODE_ENV !== "production" && zt(`Cannot remove non-existent route "${String(G)}"`);
  }
  function lt() {
    return l.getRoutes().map((G) => G.record);
  }
  function Lt(G) {
    return !!l.getRecordMatcher(G);
  }
  function ut(G, rt) {
    if (rt = Wt({}, rt || T.value), typeof G == "string") {
      const M = Pa(u, G, rt.path), H = l.resolve({ path: M.path }, rt), j = v.createHref(M.fullPath);
      return process.env.NODE_ENV !== "production" && (j.startsWith("//") ? zt(`Location "${G}" resolved to "${j}". A resolved location cannot start with multiple slashes.`) : H.matched.length || zt(`No match found for location with path "${G}"`)), Wt(M, H, {
        params: V(H.params),
        hash: $i(M.hash),
        redirectedFrom: void 0,
        href: j
      });
    }
    process.env.NODE_ENV !== "production" && !Js(G) && (zt(`router.resolve() was passed an invalid location. This will fail in production.
- Location:`, G), G = {});
    let nt;
    if (G.path != null)
      process.env.NODE_ENV !== "production" && "params" in G && !("name" in G) && // @ts-expect-error: the type is never
      Object.keys(G.params).length && zt(`Path "${G.path}" was passed with params but they will be ignored. Use a named route alongside params instead.`), nt = Wt({}, G, {
        path: Pa(u, G.path, rt.path).path
      });
    else {
      const M = Wt({}, G.params);
      for (const H in M)
        M[H] == null && delete M[H];
      nt = Wt({}, G, {
        params: R(M)
      }), rt.params = R(rt.params);
    }
    const ht = l.resolve(nt, rt), It = G.hash || "";
    process.env.NODE_ENV !== "production" && It && !It.startsWith("#") && zt(`A \`hash\` should always start with the character "#". Replace "${It}" with "#${It}".`), ht.params = D(V(ht.params));
    const Xt = tf(f, Wt({}, G, {
      hash: Zu(It),
      path: ht.path
    })), Nt = v.createHref(Xt);
    return process.env.NODE_ENV !== "production" && (Nt.startsWith("//") ? zt(`Location "${G}" resolved to "${Nt}". A resolved location cannot start with multiple slashes.`) : ht.matched.length || zt(`No match found for location with path "${G.path != null ? G.path : G}"`)), Wt({
      fullPath: Xt,
      // keep the hash encoded so fullPath is effectively path + encodedQuery +
      // hash
      hash: It,
      query: (
        // if the user is using a custom query lib like qs, we might have
        // nested objects, so we keep the query as is, meaning it can contain
        // numbers at `$route.query`, but at the point, the user will have to
        // use their own type anyway.
        // https://github.com/vuejs/router/issues/328#issuecomment-649481567
        f === jo ? Of(G.query) : G.query || {}
      )
    }, ht, {
      redirectedFrom: void 0,
      href: Nt
    });
  }
  function F(G) {
    return typeof G == "string" ? Pa(u, G, T.value.path) : Wt({}, G);
  }
  function mt(G, rt) {
    if (z !== G)
      return Ui(8, {
        from: rt,
        to: G
      });
  }
  function pt(G) {
    return yt(G);
  }
  function B(G) {
    return pt(Wt(F(G), { replace: !0 }));
  }
  function _t(G) {
    const rt = G.matched[G.matched.length - 1];
    if (rt && rt.redirect) {
      const { redirect: nt } = rt;
      let ht = typeof nt == "function" ? nt(G) : nt;
      if (typeof ht == "string" && (ht = ht.includes("?") || ht.includes("#") ? ht = F(ht) : (
        // force empty params
        { path: ht }
      ), ht.params = {}), process.env.NODE_ENV !== "production" && ht.path == null && !("name" in ht))
        throw zt(`Invalid redirect found:
${JSON.stringify(ht, null, 2)}
 when navigating to "${G.fullPath}". A redirect must contain a name or path. This will break in production.`), new Error("Invalid redirect");
      return Wt({
        query: G.query,
        hash: G.hash,
        // avoid transferring params if the redirect has a path
        params: ht.path != null ? {} : G.params
      }, ht);
    }
  }
  function yt(G, rt) {
    const nt = z = ut(G), ht = T.value, It = G.state, Xt = G.force, Nt = G.replace === !0, M = _t(nt);
    if (M)
      return yt(
        Wt(F(M), {
          state: typeof M == "object" ? Wt({}, It, M.state) : It,
          force: Xt,
          replace: Nt
        }),
        // keep original redirectedFrom if it exists
        rt || nt
      );
    const H = nt;
    H.redirectedFrom = rt;
    let j;
    return !Xt && Ro(f, ht, nt) && (j = Ui(16, { to: H, from: ht }), Fe(
      ht,
      ht,
      // this is a push, the only way for it to be triggered from a
      // history.listen is with a redirect, which makes it become a push
      !0,
      // This cannot be the first navigation because the initial location
      // cannot be manually navigated to
      !1
    )), (j ? Promise.resolve(j) : se(H, ht)).catch((Z) => Ue(Z) ? (
      // navigation redirects still mark the router as ready
      Ue(
        Z,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? Z : ze(Z)
    ) : (
      // reject any unknown error
      kt(Z, H, ht)
    )).then((Z) => {
      if (Z) {
        if (Ue(
          Z,
          2
          /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
        ))
          return process.env.NODE_ENV !== "production" && // we are redirecting to the same location we were already at
          Ro(f, ut(Z.to), H) && // and we have done it a couple of times
          rt && // @ts-expect-error: added only in dev
          (rt._count = rt._count ? (
            // @ts-expect-error
            rt._count + 1
          ) : 1) > 30 ? (zt(`Detected a possibly infinite redirection in a navigation guard when going from "${ht.fullPath}" to "${H.fullPath}". Aborting to avoid a Stack Overflow.
 Are you always returning a new location within a navigation guard? That would lead to this error. Only return when redirecting or aborting, that should fix this. This might break in production if not fixed.`), Promise.reject(new Error("Infinite redirect in navigation guard"))) : yt(
            // keep options
            Wt({
              // preserve an existing replacement but allow the redirect to override it
              replace: Nt
            }, F(Z.to), {
              state: typeof Z.to == "object" ? Wt({}, It, Z.to.state) : It,
              force: Xt
            }),
            // preserve the original redirectedFrom if any
            rt || H
          );
      } else
        Z = wt(H, ht, !0, Nt, It);
      return gt(H, ht, Z), Z;
    });
  }
  function Jt(G, rt) {
    const nt = mt(G, rt);
    return nt ? Promise.reject(nt) : Promise.resolve();
  }
  function Ut(G) {
    const rt = Ce.values().next().value;
    return rt && typeof rt.runWithContext == "function" ? rt.runWithContext(G) : G();
  }
  function se(G, rt) {
    let nt;
    const [ht, It, Xt] = Qf(G, rt);
    nt = _a(ht.reverse(), "beforeRouteLeave", G, rt);
    for (const M of ht)
      M.leaveGuards.forEach((H) => {
        nt.push(di(H, G, rt));
      });
    const Nt = Jt.bind(null, G, rt);
    return nt.push(Nt), Qt(nt).then(() => {
      nt = [];
      for (const M of w.list())
        nt.push(di(M, G, rt));
      return nt.push(Nt), Qt(nt);
    }).then(() => {
      nt = _a(It, "beforeRouteUpdate", G, rt);
      for (const M of It)
        M.updateGuards.forEach((H) => {
          nt.push(di(H, G, rt));
        });
      return nt.push(Nt), Qt(nt);
    }).then(() => {
      nt = [];
      for (const M of Xt)
        if (M.beforeEnter)
          if (Ae(M.beforeEnter))
            for (const H of M.beforeEnter)
              nt.push(di(H, G, rt));
          else
            nt.push(di(M.beforeEnter, G, rt));
      return nt.push(Nt), Qt(nt);
    }).then(() => (G.matched.forEach((M) => M.enterCallbacks = {}), nt = _a(Xt, "beforeRouteEnter", G, rt, Ut), nt.push(Nt), Qt(nt))).then(() => {
      nt = [];
      for (const M of P.list())
        nt.push(di(M, G, rt));
      return nt.push(Nt), Qt(nt);
    }).catch((M) => Ue(
      M,
      8
      /* ErrorTypes.NAVIGATION_CANCELLED */
    ) ? M : Promise.reject(M));
  }
  function gt(G, rt, nt) {
    _.list().forEach((ht) => Ut(() => ht(G, rt, nt)));
  }
  function wt(G, rt, nt, ht, It) {
    const Xt = mt(G, rt);
    if (Xt)
      return Xt;
    const Nt = rt === ni, M = hi ? history.state : {};
    nt && (ht || Nt ? v.replace(G.fullPath, Wt({
      scroll: Nt && M && M.scroll
    }, It)) : v.push(G.fullPath, It)), T.value = G, Fe(G, rt, nt, Nt), ze();
  }
  let Zt;
  function Mt() {
    Zt || (Zt = v.listen((G, rt, nt) => {
      if (!Ee.listening)
        return;
      const ht = ut(G), It = _t(ht);
      if (It) {
        yt(Wt(It, { replace: !0 }), ht).catch(os);
        return;
      }
      z = ht;
      const Xt = T.value;
      hi && nf(Xo(Xt.fullPath, nt.delta), rf()), se(ht, Xt).catch((Nt) => Ue(
        Nt,
        12
        /* ErrorTypes.NAVIGATION_CANCELLED */
      ) ? Nt : Ue(
        Nt,
        2
        /* ErrorTypes.NAVIGATION_GUARD_REDIRECT */
      ) ? (yt(
        Nt.to,
        ht
        // avoid an uncaught rejection, let push call triggerError
      ).then((M) => {
        Ue(
          M,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && !nt.delta && nt.type === Ks.pop && v.go(-1, !1);
      }).catch(os), Promise.reject()) : (nt.delta && v.go(-nt.delta, !1), kt(Nt, ht, Xt))).then((Nt) => {
        Nt = Nt || wt(
          // after navigation, all matched components are resolved
          ht,
          Xt,
          !1
        ), Nt && (nt.delta && // a new navigation has been triggered, so we do not want to revert, that will change the current history
        // entry while a different route is displayed
        !Ue(
          Nt,
          8
          /* ErrorTypes.NAVIGATION_CANCELLED */
        ) ? v.go(-nt.delta, !1) : nt.type === Ks.pop && Ue(
          Nt,
          20
          /* ErrorTypes.NAVIGATION_DUPLICATED */
        ) && v.go(-1, !1)), gt(ht, Xt, Nt);
      }).catch(os);
    }));
  }
  let qt = Ji(), Gt = Ji(), At;
  function kt(G, rt, nt) {
    ze(G);
    const ht = Gt.list();
    return ht.length ? ht.forEach((It) => It(G, rt, nt)) : (process.env.NODE_ENV !== "production" && zt("uncaught error during route navigation:"), console.error(G)), Promise.reject(G);
  }
  function re() {
    return At && T.value !== ni ? Promise.resolve() : new Promise((G, rt) => {
      qt.add([G, rt]);
    });
  }
  function ze(G) {
    return At || (At = !G, Mt(), qt.list().forEach(([rt, nt]) => G ? nt(G) : rt()), qt.reset()), G;
  }
  function Fe(G, rt, nt, ht) {
    const { scrollBehavior: It } = a;
    if (!hi || !It)
      return Promise.resolve();
    const Xt = !nt && lf(Xo(G.fullPath, 0)) || (ht || !nt) && history.state && history.state.scroll || null;
    return ra().then(() => It(G, rt, Xt)).then((Nt) => Nt && of(Nt)).catch((Nt) => kt(Nt, G, rt));
  }
  const Kt = (G) => v.go(G);
  let oe;
  const Ce = /* @__PURE__ */ new Set(), Ee = {
    currentRoute: T,
    listening: !0,
    addRoute: $,
    removeRoute: it,
    hasRoute: Lt,
    getRoutes: lt,
    resolve: ut,
    options: a,
    push: pt,
    replace: B,
    go: Kt,
    back: () => Kt(-1),
    forward: () => Kt(1),
    beforeEach: w.add,
    beforeResolve: P.add,
    afterEach: _.add,
    onError: Gt.add,
    isReady: re,
    install(G) {
      const rt = this;
      G.component("RouterLink", Df), G.component("RouterView", Xf), G.config.globalProperties.$router = rt, Object.defineProperty(G.config.globalProperties, "$route", {
        enumerable: !0,
        get: () => gi(T)
      }), hi && // used for the initial navigation client side to avoid pushing
      // multiple times when the router is used in multiple apps
      !oe && T.value === ni && (oe = !0, pt(v.location).catch((It) => {
        process.env.NODE_ENV !== "production" && zt("Unexpected error when starting the router:", It);
      }));
      const nt = {};
      for (const It in ni)
        Object.defineProperty(nt, It, {
          get: () => T.value[It],
          enumerable: !0
        });
      G.provide(Mr, rt), G.provide(_l, xn(nt)), G.provide(Ka, T);
      const ht = G.unmount;
      Ce.add(G), G.unmount = function() {
        Ce.delete(G), Ce.size < 1 && (z = ni, Zt && Zt(), Zt = null, T.value = ni, oe = !1, At = !1), ht();
      }, process.env.NODE_ENV !== "production" && hi && Vf(G, rt, l);
    }
  };
  function Qt(G) {
    return G.reduce((rt, nt) => rt.then(() => Ut(nt)), Promise.resolve());
  }
  return Ee;
}
function Qf(a, l) {
  const u = [], f = [], v = [], w = Math.max(l.matched.length, a.matched.length);
  for (let P = 0; P < w; P++) {
    const _ = l.matched[P];
    _ && (a.matched.find((z) => vi(z, _)) ? f.push(_) : u.push(_));
    const T = a.matched[P];
    T && (l.matched.find((z) => vi(z, T)) || v.push(T));
  }
  return [u, f, v];
}
const tg = (a, l) => {
  const u = a.__vccOpts || a;
  for (const [f, v] of l)
    u[f] = v;
  return u;
}, eg = {}, ig = /* @__PURE__ */ ji("h1", null, "Hello", -1), sg = [
  ig
];
function ag(a, l) {
  return ha(), Sr("div", null, sg);
}
const rg = /* @__PURE__ */ tg(eg, [["render", ag]]), og = {
  __name: "HomeView",
  setup(a) {
    return (l, u) => (ha(), Sr("main", null, [
      xe(rg)
    ]));
  }
}, ng = Jf({
  // history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: og
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("./AboutView-xrLQOwau.js")
    }
  ]
}), ga = eu(bl), lg = /* @__PURE__ */ Jd(bl);
customElements.define("my-app", lg);
ga.use(Tu());
ga.use(ng);
ga.use(Zs);
ga.mount("#app");
export {
  tg as _,
  ji as a,
  Sr as c,
  ha as o
};
