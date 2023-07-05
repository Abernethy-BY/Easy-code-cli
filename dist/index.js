var Fe = Object.create, Q = Object.defineProperty, de = Object.getOwnPropertyDescriptor, oe = Object.getOwnPropertyNames, _e = Object.getPrototypeOf, Ce = Object.prototype.hasOwnProperty, me = (D, l, a) => l in D ? Q(D, l, { enumerable: !0, configurable: !0, writable: !0, value: a }) : D[l] = a, b = (D, l) => function() {
  return l || (0, D[oe(D)[0]])((l = { exports: {} }).exports, l), l.exports;
}, ge = (D, l, a, o) => {
  if (l && typeof l == "object" || typeof l == "function")
    for (let c of oe(l))
      !Ce.call(D, c) && c !== a && Q(D, c, { get: () => l[c], enumerable: !(o = de(l, c)) || o.enumerable });
  return D;
}, k = (D, l, a) => (a = D != null ? Fe(_e(D)) : {}, ge(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  l || !D || !D.__esModule ? Q(a, "default", { value: D, enumerable: !0 }) : a,
  D
)), R = (D, l, a) => (me(D, typeof l != "symbol" ? l + "" : l, a), a), J = (D, l, a) => {
  if (!l.has(D))
    throw TypeError("Cannot " + a);
}, Z = (D, l, a) => (J(D, l, "read from private field"), a ? a.call(D) : l.get(D)), U = (D, l, a) => {
  if (l.has(D))
    throw TypeError("Cannot add the same private member more than once");
  l instanceof WeakSet ? l.add(D) : l.set(D, a);
}, Ee = (D, l, a, o) => (J(D, l, "write to private field"), o ? o.call(D, a) : l.set(D, a), a), M = (D, l, a) => (J(D, l, "access private method"), a), ve = b({
  "browser-external:node:readline"(D, l) {
    l.exports = {};
  }
}), be = b({
  "browser-external:stream"(D, l) {
    l.exports = {};
  }
}), we = b({
  "node_modules/.pnpm/mute-stream@1.0.0/node_modules/mute-stream/lib/index.js"(D, l) {
    var a = be(), o, c, p, t, n, u = class extends a {
      constructor(e = {}) {
        super(e), U(this, c), U(this, t), U(this, o, null), this.writable = this.readable = !0, this.muted = !1, this.on("pipe", this._onpipe), this.replace = e.replace, this._prompt = e.prompt || null, this._hadControl = !1;
      }
      get isTTY() {
        return Z(this, o) !== null ? Z(this, o) : M(this, c, p).call(this, "isTTY", !1);
      }
      // basically just get replace the getter/setter with a regular value
      set isTTY(e) {
        Ee(this, o, e);
      }
      get rows() {
        return M(this, c, p).call(this, "rows");
      }
      get columns() {
        return M(this, c, p).call(this, "columns");
      }
      mute() {
        this.muted = !0;
      }
      unmute() {
        this.muted = !1;
      }
      _onpipe(e) {
        this._src = e;
      }
      pipe(e, r) {
        return this._dest = e, super.pipe(e, r);
      }
      pause() {
        if (this._src)
          return this._src.pause();
      }
      resume() {
        if (this._src)
          return this._src.resume();
      }
      write(e) {
        if (this.muted) {
          if (!this.replace)
            return !0;
          if (e.match(/^\u001b/))
            return e.indexOf(this._prompt) === 0 && (e = e.slice(this._prompt.length), e = e.replace(/./g, this.replace), e = this._prompt + e), this._hadControl = !0, this.emit("data", e);
          this._prompt && this._hadControl && e.indexOf(this._prompt) === 0 && (this._hadControl = !1, this.emit("data", this._prompt), e = e.slice(this._prompt.length)), e = e.toString().replace(/./g, this.replace);
        }
        this.emit("data", e);
      }
      end(e) {
        this.muted && (e && this.replace ? e = e.toString().replace(/./g, this.replace) : e = null), e && this.emit("data", e), this.emit("end");
      }
      destroy(...e) {
        return M(this, t, n).call(this, "destroy", ...e);
      }
      destroySoon(...e) {
        return M(this, t, n).call(this, "destroySoon", ...e);
      }
      close(...e) {
        return M(this, t, n).call(this, "close", ...e);
      }
    };
    o = /* @__PURE__ */ new WeakMap(), c = /* @__PURE__ */ new WeakSet(), p = function(e, r) {
      return this._dest ? this._dest[e] : this._src ? this._src[e] : r;
    }, t = /* @__PURE__ */ new WeakSet(), n = function(e, ...r) {
      var i, s;
      typeof ((i = this._dest) == null ? void 0 : i[e]) == "function" && this._dest[e](...r), typeof ((s = this._src) == null ? void 0 : s[e]) == "function" && this._src[e](...r);
    }, l.exports = u;
  }
}), ye = b({
  "browser-external:tty"(D, l) {
    l.exports = {};
  }
}), ie = b({
  "node_modules/.pnpm/cli-width@4.0.0/node_modules/cli-width/index.js"(D, l) {
    l.exports = o;
    function a(c) {
      const p = {
        defaultWidth: 0,
        output: process.stdout,
        tty: ye()
      };
      return c ? (Object.keys(p).forEach(function(t) {
        c[t] || (c[t] = p[t]);
      }), c) : p;
    }
    function o(c) {
      const p = a(c);
      if (p.output.getWindowSize)
        return p.output.getWindowSize()[0] || p.defaultWidth;
      if (p.tty.getWindowSize)
        return p.tty.getWindowSize()[1] || p.defaultWidth;
      if (p.output.columns)
        return p.output.columns;
      if (process.env.CLI_WIDTH) {
        const t = parseInt(process.env.CLI_WIDTH, 10);
        if (!isNaN(t) && t !== 0)
          return t;
      }
      return p.defaultWidth;
    }
  }
}), Be = b({
  "node_modules/.pnpm/ansi-regex@5.0.1/node_modules/ansi-regex/index.js"(D, l) {
    l.exports = ({ onlyFirst: a = !1 } = {}) => {
      const o = [
        "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
        "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"
      ].join("|");
      return new RegExp(o, a ? void 0 : "g");
    };
  }
}), X = b({
  "node_modules/.pnpm/strip-ansi@6.0.1/node_modules/strip-ansi/index.js"(D, l) {
    var a = Be();
    l.exports = (o) => typeof o == "string" ? o.replace(a(), "") : o;
  }
}), xe = b({
  "node_modules/.pnpm/is-fullwidth-code-point@3.0.0/node_modules/is-fullwidth-code-point/index.js"(D, l) {
    var a = (o) => Number.isNaN(o) ? !1 : o >= 4352 && (o <= 4447 || // Hangul Jamo
    o === 9001 || // LEFT-POINTING ANGLE BRACKET
    o === 9002 || // RIGHT-POINTING ANGLE BRACKET
    // CJK Radicals Supplement .. Enclosed CJK Letters and Months
    11904 <= o && o <= 12871 && o !== 12351 || // Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
    12880 <= o && o <= 19903 || // CJK Unified Ideographs .. Yi Radicals
    19968 <= o && o <= 42182 || // Hangul Jamo Extended-A
    43360 <= o && o <= 43388 || // Hangul Syllables
    44032 <= o && o <= 55203 || // CJK Compatibility Ideographs
    63744 <= o && o <= 64255 || // Vertical Forms
    65040 <= o && o <= 65049 || // CJK Compatibility Forms .. Small Form Variants
    65072 <= o && o <= 65131 || // Halfwidth and Fullwidth Forms
    65281 <= o && o <= 65376 || 65504 <= o && o <= 65510 || // Kana Supplement
    110592 <= o && o <= 110593 || // Enclosed Ideographic Supplement
    127488 <= o && o <= 127569 || // CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
    131072 <= o && o <= 262141);
    l.exports = a, l.exports.default = a;
  }
}), Ae = b({
  "node_modules/.pnpm/emoji-regex@8.0.0/node_modules/emoji-regex/index.js"(D, l) {
    l.exports = function() {
      return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
    };
  }
}), ae = b({
  "node_modules/.pnpm/string-width@4.2.3/node_modules/string-width/index.js"(D, l) {
    var a = X(), o = xe(), c = Ae(), p = (t) => {
      if (typeof t != "string" || t.length === 0 || (t = a(t), t.length === 0))
        return 0;
      t = t.replace(c(), "  ");
      let n = 0;
      for (let u = 0; u < t.length; u++) {
        const e = t.codePointAt(u);
        e <= 31 || e >= 127 && e <= 159 || e >= 768 && e <= 879 || (e > 65535 && u++, n += o(e) ? 2 : 1);
      }
      return n;
    };
    l.exports = p, l.exports.default = p;
  }
}), ke = b({
  "node_modules/.pnpm/ansi-escapes@4.3.2/node_modules/ansi-escapes/index.js"(D, l) {
    var a = l.exports;
    l.exports.default = a;
    var o = "\x1B[", c = "\x1B]", p = "\x07", t = ";", n = process.env.TERM_PROGRAM === "Apple_Terminal";
    a.cursorTo = (u, e) => {
      if (typeof u != "number")
        throw new TypeError("The `x` argument is required");
      return typeof e != "number" ? o + (u + 1) + "G" : o + (e + 1) + ";" + (u + 1) + "H";
    }, a.cursorMove = (u, e) => {
      if (typeof u != "number")
        throw new TypeError("The `x` argument is required");
      let r = "";
      return u < 0 ? r += o + -u + "D" : u > 0 && (r += o + u + "C"), e < 0 ? r += o + -e + "A" : e > 0 && (r += o + e + "B"), r;
    }, a.cursorUp = (u = 1) => o + u + "A", a.cursorDown = (u = 1) => o + u + "B", a.cursorForward = (u = 1) => o + u + "C", a.cursorBackward = (u = 1) => o + u + "D", a.cursorLeft = o + "G", a.cursorSavePosition = n ? "\x1B7" : o + "s", a.cursorRestorePosition = n ? "\x1B8" : o + "u", a.cursorGetPosition = o + "6n", a.cursorNextLine = o + "E", a.cursorPrevLine = o + "F", a.cursorHide = o + "?25l", a.cursorShow = o + "?25h", a.eraseLines = (u) => {
      let e = "";
      for (let r = 0; r < u; r++)
        e += a.eraseLine + (r < u - 1 ? a.cursorUp() : "");
      return u && (e += a.cursorLeft), e;
    }, a.eraseEndLine = o + "K", a.eraseStartLine = o + "1K", a.eraseLine = o + "2K", a.eraseDown = o + "J", a.eraseUp = o + "1J", a.eraseScreen = o + "2J", a.scrollUp = o + "S", a.scrollDown = o + "T", a.clearScreen = "\x1Bc", a.clearTerminal = process.platform === "win32" ? `${a.eraseScreen}${o}0f` : (
      // 1. Erases the screen (Only done in case `2` is not supported)
      // 2. Erases the whole screen including scrollback buffer
      // 3. Moves cursor to the top-left position
      // More info: https://www.real-world-systems.com/docs/ANSIcode.html
      `${a.eraseScreen}${o}3J${o}H`
    ), a.beep = p, a.link = (u, e) => [
      c,
      "8",
      t,
      t,
      e,
      p,
      u,
      c,
      "8",
      t,
      t,
      p
    ].join(""), a.image = (u, e = {}) => {
      let r = `${c}1337;File=inline=1`;
      return e.width && (r += `;width=${e.width}`), e.height && (r += `;height=${e.height}`), e.preserveAspectRatio === !1 && (r += ";preserveAspectRatio=0"), r + ":" + u.toString("base64") + p;
    }, a.iTerm = {
      setCwd: (u = process.cwd()) => `${c}50;CurrentDir=${u}${p}`,
      annotation: (u, e = {}) => {
        let r = `${c}1337;`;
        const i = typeof e.x < "u", s = typeof e.y < "u";
        if ((i || s) && !(i && s && typeof e.length < "u"))
          throw new Error("`x`, `y` and `length` must be defined when `x` or `y` is defined");
        return u = u.replace(/\|/g, ""), r += e.isHidden ? "AddHiddenAnnotation=" : "AddAnnotation=", e.length > 0 ? r += (i ? [u, e.length, e.x, e.y] : [e.length, u]).join("|") : r += u, r + p;
      }
    };
  }
}), Se = b({
  "node_modules/.pnpm/color-name@1.1.4/node_modules/color-name/index.js"(D, l) {
    l.exports = {
      aliceblue: [240, 248, 255],
      antiquewhite: [250, 235, 215],
      aqua: [0, 255, 255],
      aquamarine: [127, 255, 212],
      azure: [240, 255, 255],
      beige: [245, 245, 220],
      bisque: [255, 228, 196],
      black: [0, 0, 0],
      blanchedalmond: [255, 235, 205],
      blue: [0, 0, 255],
      blueviolet: [138, 43, 226],
      brown: [165, 42, 42],
      burlywood: [222, 184, 135],
      cadetblue: [95, 158, 160],
      chartreuse: [127, 255, 0],
      chocolate: [210, 105, 30],
      coral: [255, 127, 80],
      cornflowerblue: [100, 149, 237],
      cornsilk: [255, 248, 220],
      crimson: [220, 20, 60],
      cyan: [0, 255, 255],
      darkblue: [0, 0, 139],
      darkcyan: [0, 139, 139],
      darkgoldenrod: [184, 134, 11],
      darkgray: [169, 169, 169],
      darkgreen: [0, 100, 0],
      darkgrey: [169, 169, 169],
      darkkhaki: [189, 183, 107],
      darkmagenta: [139, 0, 139],
      darkolivegreen: [85, 107, 47],
      darkorange: [255, 140, 0],
      darkorchid: [153, 50, 204],
      darkred: [139, 0, 0],
      darksalmon: [233, 150, 122],
      darkseagreen: [143, 188, 143],
      darkslateblue: [72, 61, 139],
      darkslategray: [47, 79, 79],
      darkslategrey: [47, 79, 79],
      darkturquoise: [0, 206, 209],
      darkviolet: [148, 0, 211],
      deeppink: [255, 20, 147],
      deepskyblue: [0, 191, 255],
      dimgray: [105, 105, 105],
      dimgrey: [105, 105, 105],
      dodgerblue: [30, 144, 255],
      firebrick: [178, 34, 34],
      floralwhite: [255, 250, 240],
      forestgreen: [34, 139, 34],
      fuchsia: [255, 0, 255],
      gainsboro: [220, 220, 220],
      ghostwhite: [248, 248, 255],
      gold: [255, 215, 0],
      goldenrod: [218, 165, 32],
      gray: [128, 128, 128],
      green: [0, 128, 0],
      greenyellow: [173, 255, 47],
      grey: [128, 128, 128],
      honeydew: [240, 255, 240],
      hotpink: [255, 105, 180],
      indianred: [205, 92, 92],
      indigo: [75, 0, 130],
      ivory: [255, 255, 240],
      khaki: [240, 230, 140],
      lavender: [230, 230, 250],
      lavenderblush: [255, 240, 245],
      lawngreen: [124, 252, 0],
      lemonchiffon: [255, 250, 205],
      lightblue: [173, 216, 230],
      lightcoral: [240, 128, 128],
      lightcyan: [224, 255, 255],
      lightgoldenrodyellow: [250, 250, 210],
      lightgray: [211, 211, 211],
      lightgreen: [144, 238, 144],
      lightgrey: [211, 211, 211],
      lightpink: [255, 182, 193],
      lightsalmon: [255, 160, 122],
      lightseagreen: [32, 178, 170],
      lightskyblue: [135, 206, 250],
      lightslategray: [119, 136, 153],
      lightslategrey: [119, 136, 153],
      lightsteelblue: [176, 196, 222],
      lightyellow: [255, 255, 224],
      lime: [0, 255, 0],
      limegreen: [50, 205, 50],
      linen: [250, 240, 230],
      magenta: [255, 0, 255],
      maroon: [128, 0, 0],
      mediumaquamarine: [102, 205, 170],
      mediumblue: [0, 0, 205],
      mediumorchid: [186, 85, 211],
      mediumpurple: [147, 112, 219],
      mediumseagreen: [60, 179, 113],
      mediumslateblue: [123, 104, 238],
      mediumspringgreen: [0, 250, 154],
      mediumturquoise: [72, 209, 204],
      mediumvioletred: [199, 21, 133],
      midnightblue: [25, 25, 112],
      mintcream: [245, 255, 250],
      mistyrose: [255, 228, 225],
      moccasin: [255, 228, 181],
      navajowhite: [255, 222, 173],
      navy: [0, 0, 128],
      oldlace: [253, 245, 230],
      olive: [128, 128, 0],
      olivedrab: [107, 142, 35],
      orange: [255, 165, 0],
      orangered: [255, 69, 0],
      orchid: [218, 112, 214],
      palegoldenrod: [238, 232, 170],
      palegreen: [152, 251, 152],
      paleturquoise: [175, 238, 238],
      palevioletred: [219, 112, 147],
      papayawhip: [255, 239, 213],
      peachpuff: [255, 218, 185],
      peru: [205, 133, 63],
      pink: [255, 192, 203],
      plum: [221, 160, 221],
      powderblue: [176, 224, 230],
      purple: [128, 0, 128],
      rebeccapurple: [102, 51, 153],
      red: [255, 0, 0],
      rosybrown: [188, 143, 143],
      royalblue: [65, 105, 225],
      saddlebrown: [139, 69, 19],
      salmon: [250, 128, 114],
      sandybrown: [244, 164, 96],
      seagreen: [46, 139, 87],
      seashell: [255, 245, 238],
      sienna: [160, 82, 45],
      silver: [192, 192, 192],
      skyblue: [135, 206, 235],
      slateblue: [106, 90, 205],
      slategray: [112, 128, 144],
      slategrey: [112, 128, 144],
      snow: [255, 250, 250],
      springgreen: [0, 255, 127],
      steelblue: [70, 130, 180],
      tan: [210, 180, 140],
      teal: [0, 128, 128],
      thistle: [216, 191, 216],
      tomato: [255, 99, 71],
      turquoise: [64, 224, 208],
      violet: [238, 130, 238],
      wheat: [245, 222, 179],
      white: [255, 255, 255],
      whitesmoke: [245, 245, 245],
      yellow: [255, 255, 0],
      yellowgreen: [154, 205, 50]
    };
  }
}), le = b({
  "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/conversions.js"(D, l) {
    var a = Se(), o = {};
    for (const t of Object.keys(a))
      o[a[t]] = t;
    var c = {
      rgb: { channels: 3, labels: "rgb" },
      hsl: { channels: 3, labels: "hsl" },
      hsv: { channels: 3, labels: "hsv" },
      hwb: { channels: 3, labels: "hwb" },
      cmyk: { channels: 4, labels: "cmyk" },
      xyz: { channels: 3, labels: "xyz" },
      lab: { channels: 3, labels: "lab" },
      lch: { channels: 3, labels: "lch" },
      hex: { channels: 1, labels: ["hex"] },
      keyword: { channels: 1, labels: ["keyword"] },
      ansi16: { channels: 1, labels: ["ansi16"] },
      ansi256: { channels: 1, labels: ["ansi256"] },
      hcg: { channels: 3, labels: ["h", "c", "g"] },
      apple: { channels: 3, labels: ["r16", "g16", "b16"] },
      gray: { channels: 1, labels: ["gray"] }
    };
    l.exports = c;
    for (const t of Object.keys(c)) {
      if (!("channels" in c[t]))
        throw new Error("missing channels property: " + t);
      if (!("labels" in c[t]))
        throw new Error("missing channel labels property: " + t);
      if (c[t].labels.length !== c[t].channels)
        throw new Error("channel and label counts mismatch: " + t);
      const { channels: n, labels: u } = c[t];
      delete c[t].channels, delete c[t].labels, Object.defineProperty(c[t], "channels", { value: n }), Object.defineProperty(c[t], "labels", { value: u });
    }
    c.rgb.hsl = function(t) {
      const n = t[0] / 255, u = t[1] / 255, e = t[2] / 255, r = Math.min(n, u, e), i = Math.max(n, u, e), s = i - r;
      let f, h;
      i === r ? f = 0 : n === i ? f = (u - e) / s : u === i ? f = 2 + (e - n) / s : e === i && (f = 4 + (n - u) / s), f = Math.min(f * 60, 360), f < 0 && (f += 360);
      const F = (r + i) / 2;
      return i === r ? h = 0 : F <= 0.5 ? h = s / (i + r) : h = s / (2 - i - r), [f, h * 100, F * 100];
    }, c.rgb.hsv = function(t) {
      let n, u, e, r, i;
      const s = t[0] / 255, f = t[1] / 255, h = t[2] / 255, F = Math.max(s, f, h), d = F - Math.min(s, f, h), C = function(v) {
        return (F - v) / 6 / d + 1 / 2;
      };
      return d === 0 ? (r = 0, i = 0) : (i = d / F, n = C(s), u = C(f), e = C(h), s === F ? r = e - u : f === F ? r = 1 / 3 + n - e : h === F && (r = 2 / 3 + u - n), r < 0 ? r += 1 : r > 1 && (r -= 1)), [
        r * 360,
        i * 100,
        F * 100
      ];
    }, c.rgb.hwb = function(t) {
      const n = t[0], u = t[1];
      let e = t[2];
      const r = c.rgb.hsl(t)[0], i = 1 / 255 * Math.min(n, Math.min(u, e));
      return e = 1 - 1 / 255 * Math.max(n, Math.max(u, e)), [r, i * 100, e * 100];
    }, c.rgb.cmyk = function(t) {
      const n = t[0] / 255, u = t[1] / 255, e = t[2] / 255, r = Math.min(1 - n, 1 - u, 1 - e), i = (1 - n - r) / (1 - r) || 0, s = (1 - u - r) / (1 - r) || 0, f = (1 - e - r) / (1 - r) || 0;
      return [i * 100, s * 100, f * 100, r * 100];
    };
    function p(t, n) {
      return (t[0] - n[0]) ** 2 + (t[1] - n[1]) ** 2 + (t[2] - n[2]) ** 2;
    }
    c.rgb.keyword = function(t) {
      const n = o[t];
      if (n)
        return n;
      let u = 1 / 0, e;
      for (const r of Object.keys(a)) {
        const i = a[r], s = p(t, i);
        s < u && (u = s, e = r);
      }
      return e;
    }, c.keyword.rgb = function(t) {
      return a[t];
    }, c.rgb.xyz = function(t) {
      let n = t[0] / 255, u = t[1] / 255, e = t[2] / 255;
      n = n > 0.04045 ? ((n + 0.055) / 1.055) ** 2.4 : n / 12.92, u = u > 0.04045 ? ((u + 0.055) / 1.055) ** 2.4 : u / 12.92, e = e > 0.04045 ? ((e + 0.055) / 1.055) ** 2.4 : e / 12.92;
      const r = n * 0.4124 + u * 0.3576 + e * 0.1805, i = n * 0.2126 + u * 0.7152 + e * 0.0722, s = n * 0.0193 + u * 0.1192 + e * 0.9505;
      return [r * 100, i * 100, s * 100];
    }, c.rgb.lab = function(t) {
      const n = c.rgb.xyz(t);
      let u = n[0], e = n[1], r = n[2];
      u /= 95.047, e /= 100, r /= 108.883, u = u > 8856e-6 ? u ** (1 / 3) : 7.787 * u + 16 / 116, e = e > 8856e-6 ? e ** (1 / 3) : 7.787 * e + 16 / 116, r = r > 8856e-6 ? r ** (1 / 3) : 7.787 * r + 16 / 116;
      const i = 116 * e - 16, s = 500 * (u - e), f = 200 * (e - r);
      return [i, s, f];
    }, c.hsl.rgb = function(t) {
      const n = t[0] / 360, u = t[1] / 100, e = t[2] / 100;
      let r, i, s;
      if (u === 0)
        return s = e * 255, [s, s, s];
      e < 0.5 ? r = e * (1 + u) : r = e + u - e * u;
      const f = 2 * e - r, h = [0, 0, 0];
      for (let F = 0; F < 3; F++)
        i = n + 1 / 3 * -(F - 1), i < 0 && i++, i > 1 && i--, 6 * i < 1 ? s = f + (r - f) * 6 * i : 2 * i < 1 ? s = r : 3 * i < 2 ? s = f + (r - f) * (2 / 3 - i) * 6 : s = f, h[F] = s * 255;
      return h;
    }, c.hsl.hsv = function(t) {
      const n = t[0];
      let u = t[1] / 100, e = t[2] / 100, r = u;
      const i = Math.max(e, 0.01);
      e *= 2, u *= e <= 1 ? e : 2 - e, r *= i <= 1 ? i : 2 - i;
      const s = (e + u) / 2, f = e === 0 ? 2 * r / (i + r) : 2 * u / (e + u);
      return [n, f * 100, s * 100];
    }, c.hsv.rgb = function(t) {
      const n = t[0] / 60, u = t[1] / 100;
      let e = t[2] / 100;
      const r = Math.floor(n) % 6, i = n - Math.floor(n), s = 255 * e * (1 - u), f = 255 * e * (1 - u * i), h = 255 * e * (1 - u * (1 - i));
      switch (e *= 255, r) {
        case 0:
          return [e, h, s];
        case 1:
          return [f, e, s];
        case 2:
          return [s, e, h];
        case 3:
          return [s, f, e];
        case 4:
          return [h, s, e];
        case 5:
          return [e, s, f];
      }
    }, c.hsv.hsl = function(t) {
      const n = t[0], u = t[1] / 100, e = t[2] / 100, r = Math.max(e, 0.01);
      let i, s;
      s = (2 - u) * e;
      const f = (2 - u) * r;
      return i = u * r, i /= f <= 1 ? f : 2 - f, i = i || 0, s /= 2, [n, i * 100, s * 100];
    }, c.hwb.rgb = function(t) {
      const n = t[0] / 360;
      let u = t[1] / 100, e = t[2] / 100;
      const r = u + e;
      let i;
      r > 1 && (u /= r, e /= r);
      const s = Math.floor(6 * n), f = 1 - e;
      i = 6 * n - s, s & 1 && (i = 1 - i);
      const h = u + i * (f - u);
      let F, d, C;
      switch (s) {
        default:
        case 6:
        case 0:
          F = f, d = h, C = u;
          break;
        case 1:
          F = h, d = f, C = u;
          break;
        case 2:
          F = u, d = f, C = h;
          break;
        case 3:
          F = u, d = h, C = f;
          break;
        case 4:
          F = h, d = u, C = f;
          break;
        case 5:
          F = f, d = u, C = h;
          break;
      }
      return [F * 255, d * 255, C * 255];
    }, c.cmyk.rgb = function(t) {
      const n = t[0] / 100, u = t[1] / 100, e = t[2] / 100, r = t[3] / 100, i = 1 - Math.min(1, n * (1 - r) + r), s = 1 - Math.min(1, u * (1 - r) + r), f = 1 - Math.min(1, e * (1 - r) + r);
      return [i * 255, s * 255, f * 255];
    }, c.xyz.rgb = function(t) {
      const n = t[0] / 100, u = t[1] / 100, e = t[2] / 100;
      let r, i, s;
      return r = n * 3.2406 + u * -1.5372 + e * -0.4986, i = n * -0.9689 + u * 1.8758 + e * 0.0415, s = n * 0.0557 + u * -0.204 + e * 1.057, r = r > 31308e-7 ? 1.055 * r ** (1 / 2.4) - 0.055 : r * 12.92, i = i > 31308e-7 ? 1.055 * i ** (1 / 2.4) - 0.055 : i * 12.92, s = s > 31308e-7 ? 1.055 * s ** (1 / 2.4) - 0.055 : s * 12.92, r = Math.min(Math.max(0, r), 1), i = Math.min(Math.max(0, i), 1), s = Math.min(Math.max(0, s), 1), [r * 255, i * 255, s * 255];
    }, c.xyz.lab = function(t) {
      let n = t[0], u = t[1], e = t[2];
      n /= 95.047, u /= 100, e /= 108.883, n = n > 8856e-6 ? n ** (1 / 3) : 7.787 * n + 16 / 116, u = u > 8856e-6 ? u ** (1 / 3) : 7.787 * u + 16 / 116, e = e > 8856e-6 ? e ** (1 / 3) : 7.787 * e + 16 / 116;
      const r = 116 * u - 16, i = 500 * (n - u), s = 200 * (u - e);
      return [r, i, s];
    }, c.lab.xyz = function(t) {
      const n = t[0], u = t[1], e = t[2];
      let r, i, s;
      i = (n + 16) / 116, r = u / 500 + i, s = i - e / 200;
      const f = i ** 3, h = r ** 3, F = s ** 3;
      return i = f > 8856e-6 ? f : (i - 16 / 116) / 7.787, r = h > 8856e-6 ? h : (r - 16 / 116) / 7.787, s = F > 8856e-6 ? F : (s - 16 / 116) / 7.787, r *= 95.047, i *= 100, s *= 108.883, [r, i, s];
    }, c.lab.lch = function(t) {
      const n = t[0], u = t[1], e = t[2];
      let r;
      r = Math.atan2(e, u) * 360 / 2 / Math.PI, r < 0 && (r += 360);
      const s = Math.sqrt(u * u + e * e);
      return [n, s, r];
    }, c.lch.lab = function(t) {
      const n = t[0], u = t[1], r = t[2] / 360 * 2 * Math.PI, i = u * Math.cos(r), s = u * Math.sin(r);
      return [n, i, s];
    }, c.rgb.ansi16 = function(t, n = null) {
      const [u, e, r] = t;
      let i = n === null ? c.rgb.hsv(t)[2] : n;
      if (i = Math.round(i / 50), i === 0)
        return 30;
      let s = 30 + (Math.round(r / 255) << 2 | Math.round(e / 255) << 1 | Math.round(u / 255));
      return i === 2 && (s += 60), s;
    }, c.hsv.ansi16 = function(t) {
      return c.rgb.ansi16(c.hsv.rgb(t), t[2]);
    }, c.rgb.ansi256 = function(t) {
      const n = t[0], u = t[1], e = t[2];
      return n === u && u === e ? n < 8 ? 16 : n > 248 ? 231 : Math.round((n - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(n / 255 * 5) + 6 * Math.round(u / 255 * 5) + Math.round(e / 255 * 5);
    }, c.ansi16.rgb = function(t) {
      let n = t % 10;
      if (n === 0 || n === 7)
        return t > 50 && (n += 3.5), n = n / 10.5 * 255, [n, n, n];
      const u = (~~(t > 50) + 1) * 0.5, e = (n & 1) * u * 255, r = (n >> 1 & 1) * u * 255, i = (n >> 2 & 1) * u * 255;
      return [e, r, i];
    }, c.ansi256.rgb = function(t) {
      if (t >= 232) {
        const i = (t - 232) * 10 + 8;
        return [i, i, i];
      }
      t -= 16;
      let n;
      const u = Math.floor(t / 36) / 5 * 255, e = Math.floor((n = t % 36) / 6) / 5 * 255, r = n % 6 / 5 * 255;
      return [u, e, r];
    }, c.rgb.hex = function(t) {
      const u = (((Math.round(t[0]) & 255) << 16) + ((Math.round(t[1]) & 255) << 8) + (Math.round(t[2]) & 255)).toString(16).toUpperCase();
      return "000000".substring(u.length) + u;
    }, c.hex.rgb = function(t) {
      const n = t.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
      if (!n)
        return [0, 0, 0];
      let u = n[0];
      n[0].length === 3 && (u = u.split("").map((f) => f + f).join(""));
      const e = parseInt(u, 16), r = e >> 16 & 255, i = e >> 8 & 255, s = e & 255;
      return [r, i, s];
    }, c.rgb.hcg = function(t) {
      const n = t[0] / 255, u = t[1] / 255, e = t[2] / 255, r = Math.max(Math.max(n, u), e), i = Math.min(Math.min(n, u), e), s = r - i;
      let f, h;
      return s < 1 ? f = i / (1 - s) : f = 0, s <= 0 ? h = 0 : r === n ? h = (u - e) / s % 6 : r === u ? h = 2 + (e - n) / s : h = 4 + (n - u) / s, h /= 6, h %= 1, [h * 360, s * 100, f * 100];
    }, c.hsl.hcg = function(t) {
      const n = t[1] / 100, u = t[2] / 100, e = u < 0.5 ? 2 * n * u : 2 * n * (1 - u);
      let r = 0;
      return e < 1 && (r = (u - 0.5 * e) / (1 - e)), [t[0], e * 100, r * 100];
    }, c.hsv.hcg = function(t) {
      const n = t[1] / 100, u = t[2] / 100, e = n * u;
      let r = 0;
      return e < 1 && (r = (u - e) / (1 - e)), [t[0], e * 100, r * 100];
    }, c.hcg.rgb = function(t) {
      const n = t[0] / 360, u = t[1] / 100, e = t[2] / 100;
      if (u === 0)
        return [e * 255, e * 255, e * 255];
      const r = [0, 0, 0], i = n % 1 * 6, s = i % 1, f = 1 - s;
      let h = 0;
      switch (Math.floor(i)) {
        case 0:
          r[0] = 1, r[1] = s, r[2] = 0;
          break;
        case 1:
          r[0] = f, r[1] = 1, r[2] = 0;
          break;
        case 2:
          r[0] = 0, r[1] = 1, r[2] = s;
          break;
        case 3:
          r[0] = 0, r[1] = f, r[2] = 1;
          break;
        case 4:
          r[0] = s, r[1] = 0, r[2] = 1;
          break;
        default:
          r[0] = 1, r[1] = 0, r[2] = f;
      }
      return h = (1 - u) * e, [
        (u * r[0] + h) * 255,
        (u * r[1] + h) * 255,
        (u * r[2] + h) * 255
      ];
    }, c.hcg.hsv = function(t) {
      const n = t[1] / 100, u = t[2] / 100, e = n + u * (1 - n);
      let r = 0;
      return e > 0 && (r = n / e), [t[0], r * 100, e * 100];
    }, c.hcg.hsl = function(t) {
      const n = t[1] / 100, e = t[2] / 100 * (1 - n) + 0.5 * n;
      let r = 0;
      return e > 0 && e < 0.5 ? r = n / (2 * e) : e >= 0.5 && e < 1 && (r = n / (2 * (1 - e))), [t[0], r * 100, e * 100];
    }, c.hcg.hwb = function(t) {
      const n = t[1] / 100, u = t[2] / 100, e = n + u * (1 - n);
      return [t[0], (e - n) * 100, (1 - e) * 100];
    }, c.hwb.hcg = function(t) {
      const n = t[1] / 100, e = 1 - t[2] / 100, r = e - n;
      let i = 0;
      return r < 1 && (i = (e - r) / (1 - r)), [t[0], r * 100, i * 100];
    }, c.apple.rgb = function(t) {
      return [t[0] / 65535 * 255, t[1] / 65535 * 255, t[2] / 65535 * 255];
    }, c.rgb.apple = function(t) {
      return [t[0] / 255 * 65535, t[1] / 255 * 65535, t[2] / 255 * 65535];
    }, c.gray.rgb = function(t) {
      return [t[0] / 100 * 255, t[0] / 100 * 255, t[0] / 100 * 255];
    }, c.gray.hsl = function(t) {
      return [0, 0, t[0]];
    }, c.gray.hsv = c.gray.hsl, c.gray.hwb = function(t) {
      return [0, 100, t[0]];
    }, c.gray.cmyk = function(t) {
      return [0, 0, 0, t[0]];
    }, c.gray.lab = function(t) {
      return [t[0], 0, 0];
    }, c.gray.hex = function(t) {
      const n = Math.round(t[0] / 100 * 255) & 255, e = ((n << 16) + (n << 8) + n).toString(16).toUpperCase();
      return "000000".substring(e.length) + e;
    }, c.rgb.gray = function(t) {
      return [(t[0] + t[1] + t[2]) / 3 / 255 * 100];
    };
  }
}), je = b({
  "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/route.js"(D, l) {
    var a = le();
    function o() {
      const n = {}, u = Object.keys(a);
      for (let e = u.length, r = 0; r < e; r++)
        n[u[r]] = {
          // http://jsperf.com/1-vs-infinity
          // micro-opt, but this is simple.
          distance: -1,
          parent: null
        };
      return n;
    }
    function c(n) {
      const u = o(), e = [n];
      for (u[n].distance = 0; e.length; ) {
        const r = e.pop(), i = Object.keys(a[r]);
        for (let s = i.length, f = 0; f < s; f++) {
          const h = i[f], F = u[h];
          F.distance === -1 && (F.distance = u[r].distance + 1, F.parent = r, e.unshift(h));
        }
      }
      return u;
    }
    function p(n, u) {
      return function(e) {
        return u(n(e));
      };
    }
    function t(n, u) {
      const e = [u[n].parent, n];
      let r = a[u[n].parent][n], i = u[n].parent;
      for (; u[i].parent; )
        e.unshift(u[i].parent), r = p(a[u[i].parent][i], r), i = u[i].parent;
      return r.conversion = e, r;
    }
    l.exports = function(n) {
      const u = c(n), e = {}, r = Object.keys(u);
      for (let i = r.length, s = 0; s < i; s++) {
        const f = r[s];
        u[f].parent !== null && (e[f] = t(f, u));
      }
      return e;
    };
  }
}), Le = b({
  "node_modules/.pnpm/color-convert@2.0.1/node_modules/color-convert/index.js"(D, l) {
    var a = le(), o = je(), c = {}, p = Object.keys(a);
    function t(u) {
      const e = function(...r) {
        const i = r[0];
        return i == null ? i : (i.length > 1 && (r = i), u(r));
      };
      return "conversion" in u && (e.conversion = u.conversion), e;
    }
    function n(u) {
      const e = function(...r) {
        const i = r[0];
        if (i == null)
          return i;
        i.length > 1 && (r = i);
        const s = u(r);
        if (typeof s == "object")
          for (let f = s.length, h = 0; h < f; h++)
            s[h] = Math.round(s[h]);
        return s;
      };
      return "conversion" in u && (e.conversion = u.conversion), e;
    }
    p.forEach((u) => {
      c[u] = {}, Object.defineProperty(c[u], "channels", { value: a[u].channels }), Object.defineProperty(c[u], "labels", { value: a[u].labels });
      const e = o(u);
      Object.keys(e).forEach((i) => {
        const s = e[i];
        c[u][i] = n(s), c[u][i].raw = t(s);
      });
    }), l.exports = c;
  }
}), ce = b({
  "node_modules/.pnpm/ansi-styles@4.3.0/node_modules/ansi-styles/index.js"(D, l) {
    var a = (i, s) => (...f) => `\x1B[${i(...f) + s}m`, o = (i, s) => (...f) => {
      const h = i(...f);
      return `\x1B[${38 + s};5;${h}m`;
    }, c = (i, s) => (...f) => {
      const h = i(...f);
      return `\x1B[${38 + s};2;${h[0]};${h[1]};${h[2]}m`;
    }, p = (i) => i, t = (i, s, f) => [i, s, f], n = (i, s, f) => {
      Object.defineProperty(i, s, {
        get: () => {
          const h = f();
          return Object.defineProperty(i, s, {
            value: h,
            enumerable: !0,
            configurable: !0
          }), h;
        },
        enumerable: !0,
        configurable: !0
      });
    }, u, e = (i, s, f, h) => {
      u === void 0 && (u = Le());
      const F = h ? 10 : 0, d = {};
      for (const [C, v] of Object.entries(u)) {
        const g = C === "ansi16" ? "ansi" : C;
        C === s ? d[g] = i(f, F) : typeof v == "object" && (d[g] = i(v[s], F));
      }
      return d;
    };
    function r() {
      const i = /* @__PURE__ */ new Map(), s = {
        modifier: {
          reset: [0, 0],
          // 21 isn't widely supported and 22 does the same thing
          bold: [1, 22],
          dim: [2, 22],
          italic: [3, 23],
          underline: [4, 24],
          inverse: [7, 27],
          hidden: [8, 28],
          strikethrough: [9, 29]
        },
        color: {
          black: [30, 39],
          red: [31, 39],
          green: [32, 39],
          yellow: [33, 39],
          blue: [34, 39],
          magenta: [35, 39],
          cyan: [36, 39],
          white: [37, 39],
          // Bright color
          blackBright: [90, 39],
          redBright: [91, 39],
          greenBright: [92, 39],
          yellowBright: [93, 39],
          blueBright: [94, 39],
          magentaBright: [95, 39],
          cyanBright: [96, 39],
          whiteBright: [97, 39]
        },
        bgColor: {
          bgBlack: [40, 49],
          bgRed: [41, 49],
          bgGreen: [42, 49],
          bgYellow: [43, 49],
          bgBlue: [44, 49],
          bgMagenta: [45, 49],
          bgCyan: [46, 49],
          bgWhite: [47, 49],
          // Bright color
          bgBlackBright: [100, 49],
          bgRedBright: [101, 49],
          bgGreenBright: [102, 49],
          bgYellowBright: [103, 49],
          bgBlueBright: [104, 49],
          bgMagentaBright: [105, 49],
          bgCyanBright: [106, 49],
          bgWhiteBright: [107, 49]
        }
      };
      s.color.gray = s.color.blackBright, s.bgColor.bgGray = s.bgColor.bgBlackBright, s.color.grey = s.color.blackBright, s.bgColor.bgGrey = s.bgColor.bgBlackBright;
      for (const [f, h] of Object.entries(s)) {
        for (const [F, d] of Object.entries(h))
          s[F] = {
            open: `\x1B[${d[0]}m`,
            close: `\x1B[${d[1]}m`
          }, h[F] = s[F], i.set(d[0], d[1]);
        Object.defineProperty(s, f, {
          value: h,
          enumerable: !1
        });
      }
      return Object.defineProperty(s, "codes", {
        value: i,
        enumerable: !1
      }), s.color.close = "\x1B[39m", s.bgColor.close = "\x1B[49m", n(s.color, "ansi", () => e(a, "ansi16", p, !1)), n(s.color, "ansi256", () => e(o, "ansi256", p, !1)), n(s.color, "ansi16m", () => e(c, "rgb", t, !1)), n(s.bgColor, "ansi", () => e(a, "ansi16", p, !0)), n(s.bgColor, "ansi256", () => e(o, "ansi256", p, !0)), n(s.bgColor, "ansi16m", () => e(c, "rgb", t, !0)), s;
    }
    Object.defineProperty(l, "exports", {
      enumerable: !0,
      get: r
    });
  }
}), Oe = b({
  "node_modules/.pnpm/wrap-ansi@6.2.0/node_modules/wrap-ansi/index.js"(D, l) {
    var a = ae(), o = X(), c = ce(), p = /* @__PURE__ */ new Set([
      "\x1B",
      ""
    ]), t = 39, n = (s) => `${p.values().next().value}[${s}m`, u = (s) => s.split(" ").map((f) => a(f)), e = (s, f, h) => {
      const F = [...f];
      let d = !1, C = a(o(s[s.length - 1]));
      for (const [v, g] of F.entries()) {
        const w = a(g);
        if (C + w <= h ? s[s.length - 1] += g : (s.push(g), C = 0), p.has(g))
          d = !0;
        else if (d && g === "m") {
          d = !1;
          continue;
        }
        d || (C += w, C === h && v < F.length - 1 && (s.push(""), C = 0));
      }
      !C && s[s.length - 1].length > 0 && s.length > 1 && (s[s.length - 2] += s.pop());
    }, r = (s) => {
      const f = s.split(" ");
      let h = f.length;
      for (; h > 0 && !(a(f[h - 1]) > 0); )
        h--;
      return h === f.length ? s : f.slice(0, h).join(" ") + f.slice(h).join("");
    }, i = (s, f, h = {}) => {
      if (h.trim !== !1 && s.trim() === "")
        return "";
      let F = "", d = "", C;
      const v = u(s);
      let g = [""];
      for (const [w, A] of s.split(" ").entries()) {
        h.trim !== !1 && (g[g.length - 1] = g[g.length - 1].trimLeft());
        let _ = a(g[g.length - 1]);
        if (w !== 0 && (_ >= f && (h.wordWrap === !1 || h.trim === !1) && (g.push(""), _ = 0), (_ > 0 || h.trim === !1) && (g[g.length - 1] += " ", _++)), h.hard && v[w] > f) {
          const m = f - _, E = 1 + Math.floor((v[w] - m - 1) / f);
          Math.floor((v[w] - 1) / f) < E && g.push(""), e(g, A, f);
          continue;
        }
        if (_ + v[w] > f && _ > 0 && v[w] > 0) {
          if (h.wordWrap === !1 && _ < f) {
            e(g, A, f);
            continue;
          }
          g.push("");
        }
        if (_ + v[w] > f && h.wordWrap === !1) {
          e(g, A, f);
          continue;
        }
        g[g.length - 1] += A;
      }
      h.trim !== !1 && (g = g.map(r)), F = g.join(`
`);
      for (const [w, A] of [...F].entries()) {
        if (d += A, p.has(A)) {
          const m = parseFloat(/\d[^m]*/.exec(F.slice(w, w + 4)));
          C = m === t ? null : m;
        }
        const _ = c.codes.get(Number(C));
        C && _ && (F[w + 1] === `
` ? d += n(_) : A === `
` && (d += n(C)));
      }
      return d;
    };
    l.exports = (s, f, h) => String(s).normalize().replace(/\r\n/g, `
`).split(`
`).map((F) => i(F, f, h)).join(`
`);
  }
}), Me = b({
  "node_modules/.pnpm/supports-color@7.2.0/node_modules/supports-color/browser.js"(D, l) {
    l.exports = {
      stdout: !1,
      stderr: !1
    };
  }
}), Te = b({
  "node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/util.js"(D, l) {
    var a = (c, p, t) => {
      let n = c.indexOf(p);
      if (n === -1)
        return c;
      const u = p.length;
      let e = 0, r = "";
      do
        r += c.substr(e, n - e) + p + t, e = n + u, n = c.indexOf(p, e);
      while (n !== -1);
      return r += c.substr(e), r;
    }, o = (c, p, t, n) => {
      let u = 0, e = "";
      do {
        const r = c[n - 1] === "\r";
        e += c.substr(u, (r ? n - 1 : n) - u) + p + (r ? `\r
` : `
`) + t, u = n + 1, n = c.indexOf(`
`, u);
      } while (n !== -1);
      return e += c.substr(u), e;
    };
    l.exports = {
      stringReplaceAll: a,
      stringEncaseCRLFWithFirstIndex: o
    };
  }
}), qe = b({
  "node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/templates.js"(D, l) {
    var a = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, o = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, c = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, p = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi, t = /* @__PURE__ */ new Map([
      ["n", `
`],
      ["r", "\r"],
      ["t", "	"],
      ["b", "\b"],
      ["f", "\f"],
      ["v", "\v"],
      ["0", "\0"],
      ["\\", "\\"],
      ["e", "\x1B"],
      ["a", "\x07"]
    ]);
    function n(i) {
      const s = i[0] === "u", f = i[1] === "{";
      return s && !f && i.length === 5 || i[0] === "x" && i.length === 3 ? String.fromCharCode(parseInt(i.slice(1), 16)) : s && f ? String.fromCodePoint(parseInt(i.slice(2, -1), 16)) : t.get(i) || i;
    }
    function u(i, s) {
      const f = [], h = s.trim().split(/\s*,\s*/g);
      let F;
      for (const d of h) {
        const C = Number(d);
        if (!Number.isNaN(C))
          f.push(C);
        else if (F = d.match(c))
          f.push(F[2].replace(p, (v, g, w) => g ? n(g) : w));
        else
          throw new Error(`Invalid Chalk template style argument: ${d} (in style '${i}')`);
      }
      return f;
    }
    function e(i) {
      o.lastIndex = 0;
      const s = [];
      let f;
      for (; (f = o.exec(i)) !== null; ) {
        const h = f[1];
        if (f[2]) {
          const F = u(h, f[2]);
          s.push([h].concat(F));
        } else
          s.push([h]);
      }
      return s;
    }
    function r(i, s) {
      const f = {};
      for (const F of s)
        for (const d of F.styles)
          f[d[0]] = F.inverse ? null : d.slice(1);
      let h = i;
      for (const [F, d] of Object.entries(f))
        if (Array.isArray(d)) {
          if (!(F in h))
            throw new Error(`Unknown Chalk style: ${F}`);
          h = d.length > 0 ? h[F](...d) : h[F];
        }
      return h;
    }
    l.exports = (i, s) => {
      const f = [], h = [];
      let F = [];
      if (s.replace(a, (d, C, v, g, w, A) => {
        if (C)
          F.push(n(C));
        else if (g) {
          const _ = F.join("");
          F = [], h.push(f.length === 0 ? _ : r(i, f)(_)), f.push({ inverse: v, styles: e(g) });
        } else if (w) {
          if (f.length === 0)
            throw new Error("Found extraneous } in Chalk template literal");
          h.push(r(i, f)(F.join(""))), F = [], f.pop();
        } else
          F.push(A);
      }), h.push(F.join("")), f.length > 0) {
        const d = `Chalk template literal is missing ${f.length} closing bracket${f.length === 1 ? "" : "s"} (\`}\`)`;
        throw new Error(d);
      }
      return h.join("");
    };
  }
}), W = b({
  "node_modules/.pnpm/chalk@4.1.2/node_modules/chalk/source/index.js"(D, l) {
    var a = ce(), { stdout: o, stderr: c } = Me(), {
      stringReplaceAll: p,
      stringEncaseCRLFWithFirstIndex: t
    } = Te(), { isArray: n } = Array, u = [
      "ansi",
      "ansi",
      "ansi256",
      "ansi16m"
    ], e = /* @__PURE__ */ Object.create(null), r = (_, m = {}) => {
      if (m.level && !(Number.isInteger(m.level) && m.level >= 0 && m.level <= 3))
        throw new Error("The `level` option should be an integer from 0 to 3");
      const E = o ? o.level : 0;
      _.level = m.level === void 0 ? E : m.level;
    }, i = class {
      constructor(_) {
        return s(_);
      }
    }, s = (_) => {
      const m = {};
      return r(m, _), m.template = (...E) => w(m.template, ...E), Object.setPrototypeOf(m, f.prototype), Object.setPrototypeOf(m.template, m), m.template.constructor = () => {
        throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
      }, m.template.Instance = i, m.template;
    };
    function f(_) {
      return s(_);
    }
    for (const [_, m] of Object.entries(a))
      e[_] = {
        get() {
          const E = C(this, d(m.open, m.close, this._styler), this._isEmpty);
          return Object.defineProperty(this, _, { value: E }), E;
        }
      };
    e.visible = {
      get() {
        const _ = C(this, this._styler, !0);
        return Object.defineProperty(this, "visible", { value: _ }), _;
      }
    };
    var h = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
    for (const _ of h)
      e[_] = {
        get() {
          const { level: m } = this;
          return function(...E) {
            const y = d(a.color[u[m]][_](...E), a.color.close, this._styler);
            return C(this, y, this._isEmpty);
          };
        }
      };
    for (const _ of h) {
      const m = "bg" + _[0].toUpperCase() + _.slice(1);
      e[m] = {
        get() {
          const { level: E } = this;
          return function(...y) {
            const B = d(a.bgColor[u[E]][_](...y), a.bgColor.close, this._styler);
            return C(this, B, this._isEmpty);
          };
        }
      };
    }
    var F = Object.defineProperties(() => {
    }, {
      ...e,
      level: {
        enumerable: !0,
        get() {
          return this._generator.level;
        },
        set(_) {
          this._generator.level = _;
        }
      }
    }), d = (_, m, E) => {
      let y, B;
      return E === void 0 ? (y = _, B = m) : (y = E.openAll + _, B = m + E.closeAll), {
        open: _,
        close: m,
        openAll: y,
        closeAll: B,
        parent: E
      };
    }, C = (_, m, E) => {
      const y = (...B) => n(B[0]) && n(B[0].raw) ? v(y, w(y, ...B)) : v(y, B.length === 1 ? "" + B[0] : B.join(" "));
      return Object.setPrototypeOf(y, F), y._generator = _, y._styler = m, y._isEmpty = E, y;
    }, v = (_, m) => {
      if (_.level <= 0 || !m)
        return _._isEmpty ? "" : m;
      let E = _._styler;
      if (E === void 0)
        return m;
      const { openAll: y, closeAll: B } = E;
      if (m.indexOf("\x1B") !== -1)
        for (; E !== void 0; )
          m = p(m, E.close, E.open), E = E.parent;
      const L = m.indexOf(`
`);
      return L !== -1 && (m = t(m, B, y, L)), y + m + B;
    }, g, w = (_, ...m) => {
      const [E] = m;
      if (!n(E) || !n(E.raw))
        return m.join(" ");
      const y = m.slice(1), B = [E.raw[0]];
      for (let L = 1; L < E.length; L++)
        B.push(
          String(y[L - 1]).replace(/[{}\\]/g, "\\$&"),
          String(E.raw[L])
        );
      return g === void 0 && (g = qe()), g(_, B.join(""));
    };
    Object.defineProperties(f.prototype, e);
    var A = f();
    A.supportsColor = o, A.stderr = f({ level: c ? c.level : 0 }), A.stderr.supportsColor = c, l.exports = A;
  }
}), Pe = b({
  "node_modules/.pnpm/cli-spinners@2.9.0/node_modules/cli-spinners/spinners.json"(D, l) {
    l.exports = {
      dots: {
        interval: 80,
        frames: [
          "⠋",
          "⠙",
          "⠹",
          "⠸",
          "⠼",
          "⠴",
          "⠦",
          "⠧",
          "⠇",
          "⠏"
        ]
      },
      dots2: {
        interval: 80,
        frames: [
          "⣾",
          "⣽",
          "⣻",
          "⢿",
          "⡿",
          "⣟",
          "⣯",
          "⣷"
        ]
      },
      dots3: {
        interval: 80,
        frames: [
          "⠋",
          "⠙",
          "⠚",
          "⠞",
          "⠖",
          "⠦",
          "⠴",
          "⠲",
          "⠳",
          "⠓"
        ]
      },
      dots4: {
        interval: 80,
        frames: [
          "⠄",
          "⠆",
          "⠇",
          "⠋",
          "⠙",
          "⠸",
          "⠰",
          "⠠",
          "⠰",
          "⠸",
          "⠙",
          "⠋",
          "⠇",
          "⠆"
        ]
      },
      dots5: {
        interval: 80,
        frames: [
          "⠋",
          "⠙",
          "⠚",
          "⠒",
          "⠂",
          "⠂",
          "⠒",
          "⠲",
          "⠴",
          "⠦",
          "⠖",
          "⠒",
          "⠐",
          "⠐",
          "⠒",
          "⠓",
          "⠋"
        ]
      },
      dots6: {
        interval: 80,
        frames: [
          "⠁",
          "⠉",
          "⠙",
          "⠚",
          "⠒",
          "⠂",
          "⠂",
          "⠒",
          "⠲",
          "⠴",
          "⠤",
          "⠄",
          "⠄",
          "⠤",
          "⠴",
          "⠲",
          "⠒",
          "⠂",
          "⠂",
          "⠒",
          "⠚",
          "⠙",
          "⠉",
          "⠁"
        ]
      },
      dots7: {
        interval: 80,
        frames: [
          "⠈",
          "⠉",
          "⠋",
          "⠓",
          "⠒",
          "⠐",
          "⠐",
          "⠒",
          "⠖",
          "⠦",
          "⠤",
          "⠠",
          "⠠",
          "⠤",
          "⠦",
          "⠖",
          "⠒",
          "⠐",
          "⠐",
          "⠒",
          "⠓",
          "⠋",
          "⠉",
          "⠈"
        ]
      },
      dots8: {
        interval: 80,
        frames: [
          "⠁",
          "⠁",
          "⠉",
          "⠙",
          "⠚",
          "⠒",
          "⠂",
          "⠂",
          "⠒",
          "⠲",
          "⠴",
          "⠤",
          "⠄",
          "⠄",
          "⠤",
          "⠠",
          "⠠",
          "⠤",
          "⠦",
          "⠖",
          "⠒",
          "⠐",
          "⠐",
          "⠒",
          "⠓",
          "⠋",
          "⠉",
          "⠈",
          "⠈"
        ]
      },
      dots9: {
        interval: 80,
        frames: [
          "⢹",
          "⢺",
          "⢼",
          "⣸",
          "⣇",
          "⡧",
          "⡗",
          "⡏"
        ]
      },
      dots10: {
        interval: 80,
        frames: [
          "⢄",
          "⢂",
          "⢁",
          "⡁",
          "⡈",
          "⡐",
          "⡠"
        ]
      },
      dots11: {
        interval: 100,
        frames: [
          "⠁",
          "⠂",
          "⠄",
          "⡀",
          "⢀",
          "⠠",
          "⠐",
          "⠈"
        ]
      },
      dots12: {
        interval: 80,
        frames: [
          "⢀⠀",
          "⡀⠀",
          "⠄⠀",
          "⢂⠀",
          "⡂⠀",
          "⠅⠀",
          "⢃⠀",
          "⡃⠀",
          "⠍⠀",
          "⢋⠀",
          "⡋⠀",
          "⠍⠁",
          "⢋⠁",
          "⡋⠁",
          "⠍⠉",
          "⠋⠉",
          "⠋⠉",
          "⠉⠙",
          "⠉⠙",
          "⠉⠩",
          "⠈⢙",
          "⠈⡙",
          "⢈⠩",
          "⡀⢙",
          "⠄⡙",
          "⢂⠩",
          "⡂⢘",
          "⠅⡘",
          "⢃⠨",
          "⡃⢐",
          "⠍⡐",
          "⢋⠠",
          "⡋⢀",
          "⠍⡁",
          "⢋⠁",
          "⡋⠁",
          "⠍⠉",
          "⠋⠉",
          "⠋⠉",
          "⠉⠙",
          "⠉⠙",
          "⠉⠩",
          "⠈⢙",
          "⠈⡙",
          "⠈⠩",
          "⠀⢙",
          "⠀⡙",
          "⠀⠩",
          "⠀⢘",
          "⠀⡘",
          "⠀⠨",
          "⠀⢐",
          "⠀⡐",
          "⠀⠠",
          "⠀⢀",
          "⠀⡀"
        ]
      },
      dots13: {
        interval: 80,
        frames: [
          "⣼",
          "⣹",
          "⢻",
          "⠿",
          "⡟",
          "⣏",
          "⣧",
          "⣶"
        ]
      },
      dots8Bit: {
        interval: 80,
        frames: [
          "⠀",
          "⠁",
          "⠂",
          "⠃",
          "⠄",
          "⠅",
          "⠆",
          "⠇",
          "⡀",
          "⡁",
          "⡂",
          "⡃",
          "⡄",
          "⡅",
          "⡆",
          "⡇",
          "⠈",
          "⠉",
          "⠊",
          "⠋",
          "⠌",
          "⠍",
          "⠎",
          "⠏",
          "⡈",
          "⡉",
          "⡊",
          "⡋",
          "⡌",
          "⡍",
          "⡎",
          "⡏",
          "⠐",
          "⠑",
          "⠒",
          "⠓",
          "⠔",
          "⠕",
          "⠖",
          "⠗",
          "⡐",
          "⡑",
          "⡒",
          "⡓",
          "⡔",
          "⡕",
          "⡖",
          "⡗",
          "⠘",
          "⠙",
          "⠚",
          "⠛",
          "⠜",
          "⠝",
          "⠞",
          "⠟",
          "⡘",
          "⡙",
          "⡚",
          "⡛",
          "⡜",
          "⡝",
          "⡞",
          "⡟",
          "⠠",
          "⠡",
          "⠢",
          "⠣",
          "⠤",
          "⠥",
          "⠦",
          "⠧",
          "⡠",
          "⡡",
          "⡢",
          "⡣",
          "⡤",
          "⡥",
          "⡦",
          "⡧",
          "⠨",
          "⠩",
          "⠪",
          "⠫",
          "⠬",
          "⠭",
          "⠮",
          "⠯",
          "⡨",
          "⡩",
          "⡪",
          "⡫",
          "⡬",
          "⡭",
          "⡮",
          "⡯",
          "⠰",
          "⠱",
          "⠲",
          "⠳",
          "⠴",
          "⠵",
          "⠶",
          "⠷",
          "⡰",
          "⡱",
          "⡲",
          "⡳",
          "⡴",
          "⡵",
          "⡶",
          "⡷",
          "⠸",
          "⠹",
          "⠺",
          "⠻",
          "⠼",
          "⠽",
          "⠾",
          "⠿",
          "⡸",
          "⡹",
          "⡺",
          "⡻",
          "⡼",
          "⡽",
          "⡾",
          "⡿",
          "⢀",
          "⢁",
          "⢂",
          "⢃",
          "⢄",
          "⢅",
          "⢆",
          "⢇",
          "⣀",
          "⣁",
          "⣂",
          "⣃",
          "⣄",
          "⣅",
          "⣆",
          "⣇",
          "⢈",
          "⢉",
          "⢊",
          "⢋",
          "⢌",
          "⢍",
          "⢎",
          "⢏",
          "⣈",
          "⣉",
          "⣊",
          "⣋",
          "⣌",
          "⣍",
          "⣎",
          "⣏",
          "⢐",
          "⢑",
          "⢒",
          "⢓",
          "⢔",
          "⢕",
          "⢖",
          "⢗",
          "⣐",
          "⣑",
          "⣒",
          "⣓",
          "⣔",
          "⣕",
          "⣖",
          "⣗",
          "⢘",
          "⢙",
          "⢚",
          "⢛",
          "⢜",
          "⢝",
          "⢞",
          "⢟",
          "⣘",
          "⣙",
          "⣚",
          "⣛",
          "⣜",
          "⣝",
          "⣞",
          "⣟",
          "⢠",
          "⢡",
          "⢢",
          "⢣",
          "⢤",
          "⢥",
          "⢦",
          "⢧",
          "⣠",
          "⣡",
          "⣢",
          "⣣",
          "⣤",
          "⣥",
          "⣦",
          "⣧",
          "⢨",
          "⢩",
          "⢪",
          "⢫",
          "⢬",
          "⢭",
          "⢮",
          "⢯",
          "⣨",
          "⣩",
          "⣪",
          "⣫",
          "⣬",
          "⣭",
          "⣮",
          "⣯",
          "⢰",
          "⢱",
          "⢲",
          "⢳",
          "⢴",
          "⢵",
          "⢶",
          "⢷",
          "⣰",
          "⣱",
          "⣲",
          "⣳",
          "⣴",
          "⣵",
          "⣶",
          "⣷",
          "⢸",
          "⢹",
          "⢺",
          "⢻",
          "⢼",
          "⢽",
          "⢾",
          "⢿",
          "⣸",
          "⣹",
          "⣺",
          "⣻",
          "⣼",
          "⣽",
          "⣾",
          "⣿"
        ]
      },
      sand: {
        interval: 80,
        frames: [
          "⠁",
          "⠂",
          "⠄",
          "⡀",
          "⡈",
          "⡐",
          "⡠",
          "⣀",
          "⣁",
          "⣂",
          "⣄",
          "⣌",
          "⣔",
          "⣤",
          "⣥",
          "⣦",
          "⣮",
          "⣶",
          "⣷",
          "⣿",
          "⡿",
          "⠿",
          "⢟",
          "⠟",
          "⡛",
          "⠛",
          "⠫",
          "⢋",
          "⠋",
          "⠍",
          "⡉",
          "⠉",
          "⠑",
          "⠡",
          "⢁"
        ]
      },
      line: {
        interval: 130,
        frames: [
          "-",
          "\\",
          "|",
          "/"
        ]
      },
      line2: {
        interval: 100,
        frames: [
          "⠂",
          "-",
          "–",
          "—",
          "–",
          "-"
        ]
      },
      pipe: {
        interval: 100,
        frames: [
          "┤",
          "┘",
          "┴",
          "└",
          "├",
          "┌",
          "┬",
          "┐"
        ]
      },
      simpleDots: {
        interval: 400,
        frames: [
          ".  ",
          ".. ",
          "...",
          "   "
        ]
      },
      simpleDotsScrolling: {
        interval: 200,
        frames: [
          ".  ",
          ".. ",
          "...",
          " ..",
          "  .",
          "   "
        ]
      },
      star: {
        interval: 70,
        frames: [
          "✶",
          "✸",
          "✹",
          "✺",
          "✹",
          "✷"
        ]
      },
      star2: {
        interval: 80,
        frames: [
          "+",
          "x",
          "*"
        ]
      },
      flip: {
        interval: 70,
        frames: [
          "_",
          "_",
          "_",
          "-",
          "`",
          "`",
          "'",
          "´",
          "-",
          "_",
          "_",
          "_"
        ]
      },
      hamburger: {
        interval: 100,
        frames: [
          "☱",
          "☲",
          "☴"
        ]
      },
      growVertical: {
        interval: 120,
        frames: [
          "▁",
          "▃",
          "▄",
          "▅",
          "▆",
          "▇",
          "▆",
          "▅",
          "▄",
          "▃"
        ]
      },
      growHorizontal: {
        interval: 120,
        frames: [
          "▏",
          "▎",
          "▍",
          "▌",
          "▋",
          "▊",
          "▉",
          "▊",
          "▋",
          "▌",
          "▍",
          "▎"
        ]
      },
      balloon: {
        interval: 140,
        frames: [
          " ",
          ".",
          "o",
          "O",
          "@",
          "*",
          " "
        ]
      },
      balloon2: {
        interval: 120,
        frames: [
          ".",
          "o",
          "O",
          "°",
          "O",
          "o",
          "."
        ]
      },
      noise: {
        interval: 100,
        frames: [
          "▓",
          "▒",
          "░"
        ]
      },
      bounce: {
        interval: 120,
        frames: [
          "⠁",
          "⠂",
          "⠄",
          "⠂"
        ]
      },
      boxBounce: {
        interval: 120,
        frames: [
          "▖",
          "▘",
          "▝",
          "▗"
        ]
      },
      boxBounce2: {
        interval: 100,
        frames: [
          "▌",
          "▀",
          "▐",
          "▄"
        ]
      },
      triangle: {
        interval: 50,
        frames: [
          "◢",
          "◣",
          "◤",
          "◥"
        ]
      },
      binary: {
        interval: 80,
        frames: [
          "010010",
          "001100",
          "100101",
          "111010",
          "111101",
          "010111",
          "101011",
          "111000",
          "110011",
          "110101"
        ]
      },
      arc: {
        interval: 100,
        frames: [
          "◜",
          "◠",
          "◝",
          "◞",
          "◡",
          "◟"
        ]
      },
      circle: {
        interval: 120,
        frames: [
          "◡",
          "⊙",
          "◠"
        ]
      },
      squareCorners: {
        interval: 180,
        frames: [
          "◰",
          "◳",
          "◲",
          "◱"
        ]
      },
      circleQuarters: {
        interval: 120,
        frames: [
          "◴",
          "◷",
          "◶",
          "◵"
        ]
      },
      circleHalves: {
        interval: 50,
        frames: [
          "◐",
          "◓",
          "◑",
          "◒"
        ]
      },
      squish: {
        interval: 100,
        frames: [
          "╫",
          "╪"
        ]
      },
      toggle: {
        interval: 250,
        frames: [
          "⊶",
          "⊷"
        ]
      },
      toggle2: {
        interval: 80,
        frames: [
          "▫",
          "▪"
        ]
      },
      toggle3: {
        interval: 120,
        frames: [
          "□",
          "■"
        ]
      },
      toggle4: {
        interval: 100,
        frames: [
          "■",
          "□",
          "▪",
          "▫"
        ]
      },
      toggle5: {
        interval: 100,
        frames: [
          "▮",
          "▯"
        ]
      },
      toggle6: {
        interval: 300,
        frames: [
          "ဝ",
          "၀"
        ]
      },
      toggle7: {
        interval: 80,
        frames: [
          "⦾",
          "⦿"
        ]
      },
      toggle8: {
        interval: 100,
        frames: [
          "◍",
          "◌"
        ]
      },
      toggle9: {
        interval: 100,
        frames: [
          "◉",
          "◎"
        ]
      },
      toggle10: {
        interval: 100,
        frames: [
          "㊂",
          "㊀",
          "㊁"
        ]
      },
      toggle11: {
        interval: 50,
        frames: [
          "⧇",
          "⧆"
        ]
      },
      toggle12: {
        interval: 120,
        frames: [
          "☗",
          "☖"
        ]
      },
      toggle13: {
        interval: 80,
        frames: [
          "=",
          "*",
          "-"
        ]
      },
      arrow: {
        interval: 100,
        frames: [
          "←",
          "↖",
          "↑",
          "↗",
          "→",
          "↘",
          "↓",
          "↙"
        ]
      },
      arrow2: {
        interval: 80,
        frames: [
          "⬆️ ",
          "↗️ ",
          "➡️ ",
          "↘️ ",
          "⬇️ ",
          "↙️ ",
          "⬅️ ",
          "↖️ "
        ]
      },
      arrow3: {
        interval: 120,
        frames: [
          "▹▹▹▹▹",
          "▸▹▹▹▹",
          "▹▸▹▹▹",
          "▹▹▸▹▹",
          "▹▹▹▸▹",
          "▹▹▹▹▸"
        ]
      },
      bouncingBar: {
        interval: 80,
        frames: [
          "[    ]",
          "[=   ]",
          "[==  ]",
          "[=== ]",
          "[ ===]",
          "[  ==]",
          "[   =]",
          "[    ]",
          "[   =]",
          "[  ==]",
          "[ ===]",
          "[====]",
          "[=== ]",
          "[==  ]",
          "[=   ]"
        ]
      },
      bouncingBall: {
        interval: 80,
        frames: [
          "( ●    )",
          "(  ●   )",
          "(   ●  )",
          "(    ● )",
          "(     ●)",
          "(    ● )",
          "(   ●  )",
          "(  ●   )",
          "( ●    )",
          "(●     )"
        ]
      },
      smiley: {
        interval: 200,
        frames: [
          "😄 ",
          "😝 "
        ]
      },
      monkey: {
        interval: 300,
        frames: [
          "🙈 ",
          "🙈 ",
          "🙉 ",
          "🙊 "
        ]
      },
      hearts: {
        interval: 100,
        frames: [
          "💛 ",
          "💙 ",
          "💜 ",
          "💚 ",
          "❤️ "
        ]
      },
      clock: {
        interval: 100,
        frames: [
          "🕛 ",
          "🕐 ",
          "🕑 ",
          "🕒 ",
          "🕓 ",
          "🕔 ",
          "🕕 ",
          "🕖 ",
          "🕗 ",
          "🕘 ",
          "🕙 ",
          "🕚 "
        ]
      },
      earth: {
        interval: 180,
        frames: [
          "🌍 ",
          "🌎 ",
          "🌏 "
        ]
      },
      material: {
        interval: 17,
        frames: [
          "█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "███▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "████▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "██████▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "██████▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "███████▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "████████▁▁▁▁▁▁▁▁▁▁▁▁",
          "█████████▁▁▁▁▁▁▁▁▁▁▁",
          "█████████▁▁▁▁▁▁▁▁▁▁▁",
          "██████████▁▁▁▁▁▁▁▁▁▁",
          "███████████▁▁▁▁▁▁▁▁▁",
          "█████████████▁▁▁▁▁▁▁",
          "██████████████▁▁▁▁▁▁",
          "██████████████▁▁▁▁▁▁",
          "▁██████████████▁▁▁▁▁",
          "▁██████████████▁▁▁▁▁",
          "▁██████████████▁▁▁▁▁",
          "▁▁██████████████▁▁▁▁",
          "▁▁▁██████████████▁▁▁",
          "▁▁▁▁█████████████▁▁▁",
          "▁▁▁▁██████████████▁▁",
          "▁▁▁▁██████████████▁▁",
          "▁▁▁▁▁██████████████▁",
          "▁▁▁▁▁██████████████▁",
          "▁▁▁▁▁██████████████▁",
          "▁▁▁▁▁▁██████████████",
          "▁▁▁▁▁▁██████████████",
          "▁▁▁▁▁▁▁█████████████",
          "▁▁▁▁▁▁▁█████████████",
          "▁▁▁▁▁▁▁▁████████████",
          "▁▁▁▁▁▁▁▁████████████",
          "▁▁▁▁▁▁▁▁▁███████████",
          "▁▁▁▁▁▁▁▁▁███████████",
          "▁▁▁▁▁▁▁▁▁▁██████████",
          "▁▁▁▁▁▁▁▁▁▁██████████",
          "▁▁▁▁▁▁▁▁▁▁▁▁████████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁███████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁██████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█████",
          "█▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁████",
          "██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁███",
          "██▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁███",
          "███▁▁▁▁▁▁▁▁▁▁▁▁▁▁███",
          "████▁▁▁▁▁▁▁▁▁▁▁▁▁▁██",
          "█████▁▁▁▁▁▁▁▁▁▁▁▁▁▁█",
          "█████▁▁▁▁▁▁▁▁▁▁▁▁▁▁█",
          "██████▁▁▁▁▁▁▁▁▁▁▁▁▁█",
          "████████▁▁▁▁▁▁▁▁▁▁▁▁",
          "█████████▁▁▁▁▁▁▁▁▁▁▁",
          "█████████▁▁▁▁▁▁▁▁▁▁▁",
          "█████████▁▁▁▁▁▁▁▁▁▁▁",
          "█████████▁▁▁▁▁▁▁▁▁▁▁",
          "███████████▁▁▁▁▁▁▁▁▁",
          "████████████▁▁▁▁▁▁▁▁",
          "████████████▁▁▁▁▁▁▁▁",
          "██████████████▁▁▁▁▁▁",
          "██████████████▁▁▁▁▁▁",
          "▁██████████████▁▁▁▁▁",
          "▁██████████████▁▁▁▁▁",
          "▁▁▁█████████████▁▁▁▁",
          "▁▁▁▁▁████████████▁▁▁",
          "▁▁▁▁▁████████████▁▁▁",
          "▁▁▁▁▁▁███████████▁▁▁",
          "▁▁▁▁▁▁▁▁█████████▁▁▁",
          "▁▁▁▁▁▁▁▁█████████▁▁▁",
          "▁▁▁▁▁▁▁▁▁█████████▁▁",
          "▁▁▁▁▁▁▁▁▁█████████▁▁",
          "▁▁▁▁▁▁▁▁▁▁█████████▁",
          "▁▁▁▁▁▁▁▁▁▁▁████████▁",
          "▁▁▁▁▁▁▁▁▁▁▁████████▁",
          "▁▁▁▁▁▁▁▁▁▁▁▁███████▁",
          "▁▁▁▁▁▁▁▁▁▁▁▁███████▁",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁███████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁███████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁████",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁███",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁███",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁██",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁█",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁",
          "▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁"
        ]
      },
      moon: {
        interval: 80,
        frames: [
          "🌑 ",
          "🌒 ",
          "🌓 ",
          "🌔 ",
          "🌕 ",
          "🌖 ",
          "🌗 ",
          "🌘 "
        ]
      },
      runner: {
        interval: 140,
        frames: [
          "🚶 ",
          "🏃 "
        ]
      },
      pong: {
        interval: 80,
        frames: [
          "▐⠂       ▌",
          "▐⠈       ▌",
          "▐ ⠂      ▌",
          "▐ ⠠      ▌",
          "▐  ⡀     ▌",
          "▐  ⠠     ▌",
          "▐   ⠂    ▌",
          "▐   ⠈    ▌",
          "▐    ⠂   ▌",
          "▐    ⠠   ▌",
          "▐     ⡀  ▌",
          "▐     ⠠  ▌",
          "▐      ⠂ ▌",
          "▐      ⠈ ▌",
          "▐       ⠂▌",
          "▐       ⠠▌",
          "▐       ⡀▌",
          "▐      ⠠ ▌",
          "▐      ⠂ ▌",
          "▐     ⠈  ▌",
          "▐     ⠂  ▌",
          "▐    ⠠   ▌",
          "▐    ⡀   ▌",
          "▐   ⠠    ▌",
          "▐   ⠂    ▌",
          "▐  ⠈     ▌",
          "▐  ⠂     ▌",
          "▐ ⠠      ▌",
          "▐ ⡀      ▌",
          "▐⠠       ▌"
        ]
      },
      shark: {
        interval: 120,
        frames: [
          "▐|\\____________▌",
          "▐_|\\___________▌",
          "▐__|\\__________▌",
          "▐___|\\_________▌",
          "▐____|\\________▌",
          "▐_____|\\_______▌",
          "▐______|\\______▌",
          "▐_______|\\_____▌",
          "▐________|\\____▌",
          "▐_________|\\___▌",
          "▐__________|\\__▌",
          "▐___________|\\_▌",
          "▐____________|\\▌",
          "▐____________/|▌",
          "▐___________/|_▌",
          "▐__________/|__▌",
          "▐_________/|___▌",
          "▐________/|____▌",
          "▐_______/|_____▌",
          "▐______/|______▌",
          "▐_____/|_______▌",
          "▐____/|________▌",
          "▐___/|_________▌",
          "▐__/|__________▌",
          "▐_/|___________▌",
          "▐/|____________▌"
        ]
      },
      dqpb: {
        interval: 100,
        frames: [
          "d",
          "q",
          "p",
          "b"
        ]
      },
      weather: {
        interval: 100,
        frames: [
          "☀️ ",
          "☀️ ",
          "☀️ ",
          "🌤 ",
          "⛅️ ",
          "🌥 ",
          "☁️ ",
          "🌧 ",
          "🌨 ",
          "🌧 ",
          "🌨 ",
          "🌧 ",
          "🌨 ",
          "⛈ ",
          "🌨 ",
          "🌧 ",
          "🌨 ",
          "☁️ ",
          "🌥 ",
          "⛅️ ",
          "🌤 ",
          "☀️ ",
          "☀️ "
        ]
      },
      christmas: {
        interval: 400,
        frames: [
          "🌲",
          "🎄"
        ]
      },
      grenade: {
        interval: 80,
        frames: [
          "،  ",
          "′  ",
          " ´ ",
          " ‾ ",
          "  ⸌",
          "  ⸊",
          "  |",
          "  ⁎",
          "  ⁕",
          " ෴ ",
          "  ⁓",
          "   ",
          "   ",
          "   "
        ]
      },
      point: {
        interval: 125,
        frames: [
          "∙∙∙",
          "●∙∙",
          "∙●∙",
          "∙∙●",
          "∙∙∙"
        ]
      },
      layer: {
        interval: 150,
        frames: [
          "-",
          "=",
          "≡"
        ]
      },
      betaWave: {
        interval: 80,
        frames: [
          "ρββββββ",
          "βρβββββ",
          "ββρββββ",
          "βββρβββ",
          "ββββρββ",
          "βββββρβ",
          "ββββββρ"
        ]
      },
      fingerDance: {
        interval: 160,
        frames: [
          "🤘 ",
          "🤟 ",
          "🖖 ",
          "✋ ",
          "🤚 ",
          "👆 "
        ]
      },
      fistBump: {
        interval: 80,
        frames: [
          "🤜　　　　🤛 ",
          "🤜　　　　🤛 ",
          "🤜　　　　🤛 ",
          "　🤜　　🤛　 ",
          "　　🤜🤛　　 ",
          "　🤜✨🤛　　 ",
          "🤜　✨　🤛　 "
        ]
      },
      soccerHeader: {
        interval: 80,
        frames: [
          " 🧑⚽️       🧑 ",
          "🧑  ⚽️      🧑 ",
          "🧑   ⚽️     🧑 ",
          "🧑    ⚽️    🧑 ",
          "🧑     ⚽️   🧑 ",
          "🧑      ⚽️  🧑 ",
          "🧑       ⚽️🧑  ",
          "🧑      ⚽️  🧑 ",
          "🧑     ⚽️   🧑 ",
          "🧑    ⚽️    🧑 ",
          "🧑   ⚽️     🧑 ",
          "🧑  ⚽️      🧑 "
        ]
      },
      mindblown: {
        interval: 160,
        frames: [
          "😐 ",
          "😐 ",
          "😮 ",
          "😮 ",
          "😦 ",
          "😦 ",
          "😧 ",
          "😧 ",
          "🤯 ",
          "💥 ",
          "✨ ",
          "　 ",
          "　 ",
          "　 "
        ]
      },
      speaker: {
        interval: 160,
        frames: [
          "🔈 ",
          "🔉 ",
          "🔊 ",
          "🔉 "
        ]
      },
      orangePulse: {
        interval: 100,
        frames: [
          "🔸 ",
          "🔶 ",
          "🟠 ",
          "🟠 ",
          "🔶 "
        ]
      },
      bluePulse: {
        interval: 100,
        frames: [
          "🔹 ",
          "🔷 ",
          "🔵 ",
          "🔵 ",
          "🔷 "
        ]
      },
      orangeBluePulse: {
        interval: 100,
        frames: [
          "🔸 ",
          "🔶 ",
          "🟠 ",
          "🟠 ",
          "🔶 ",
          "🔹 ",
          "🔷 ",
          "🔵 ",
          "🔵 ",
          "🔷 "
        ]
      },
      timeTravel: {
        interval: 100,
        frames: [
          "🕛 ",
          "🕚 ",
          "🕙 ",
          "🕘 ",
          "🕗 ",
          "🕖 ",
          "🕕 ",
          "🕔 ",
          "🕓 ",
          "🕒 ",
          "🕑 ",
          "🕐 "
        ]
      },
      aesthetic: {
        interval: 80,
        frames: [
          "▰▱▱▱▱▱▱",
          "▰▰▱▱▱▱▱",
          "▰▰▰▱▱▱▱",
          "▰▰▰▰▱▱▱",
          "▰▰▰▰▰▱▱",
          "▰▰▰▰▰▰▱",
          "▰▰▰▰▰▰▰",
          "▰▱▱▱▱▱▱"
        ]
      },
      dwarfFortress: {
        interval: 80,
        frames: [
          " ██████£££  ",
          "☺██████£££  ",
          "☺██████£££  ",
          "☺▓█████£££  ",
          "☺▓█████£££  ",
          "☺▒█████£££  ",
          "☺▒█████£££  ",
          "☺░█████£££  ",
          "☺░█████£££  ",
          "☺ █████£££  ",
          " ☺█████£££  ",
          " ☺█████£££  ",
          " ☺▓████£££  ",
          " ☺▓████£££  ",
          " ☺▒████£££  ",
          " ☺▒████£££  ",
          " ☺░████£££  ",
          " ☺░████£££  ",
          " ☺ ████£££  ",
          "  ☺████£££  ",
          "  ☺████£££  ",
          "  ☺▓███£££  ",
          "  ☺▓███£££  ",
          "  ☺▒███£££  ",
          "  ☺▒███£££  ",
          "  ☺░███£££  ",
          "  ☺░███£££  ",
          "  ☺ ███£££  ",
          "   ☺███£££  ",
          "   ☺███£££  ",
          "   ☺▓██£££  ",
          "   ☺▓██£££  ",
          "   ☺▒██£££  ",
          "   ☺▒██£££  ",
          "   ☺░██£££  ",
          "   ☺░██£££  ",
          "   ☺ ██£££  ",
          "    ☺██£££  ",
          "    ☺██£££  ",
          "    ☺▓█£££  ",
          "    ☺▓█£££  ",
          "    ☺▒█£££  ",
          "    ☺▒█£££  ",
          "    ☺░█£££  ",
          "    ☺░█£££  ",
          "    ☺ █£££  ",
          "     ☺█£££  ",
          "     ☺█£££  ",
          "     ☺▓£££  ",
          "     ☺▓£££  ",
          "     ☺▒£££  ",
          "     ☺▒£££  ",
          "     ☺░£££  ",
          "     ☺░£££  ",
          "     ☺ £££  ",
          "      ☺£££  ",
          "      ☺£££  ",
          "      ☺▓££  ",
          "      ☺▓££  ",
          "      ☺▒££  ",
          "      ☺▒££  ",
          "      ☺░££  ",
          "      ☺░££  ",
          "      ☺ ££  ",
          "       ☺££  ",
          "       ☺££  ",
          "       ☺▓£  ",
          "       ☺▓£  ",
          "       ☺▒£  ",
          "       ☺▒£  ",
          "       ☺░£  ",
          "       ☺░£  ",
          "       ☺ £  ",
          "        ☺£  ",
          "        ☺£  ",
          "        ☺▓  ",
          "        ☺▓  ",
          "        ☺▒  ",
          "        ☺▒  ",
          "        ☺░  ",
          "        ☺░  ",
          "        ☺   ",
          "        ☺  &",
          "        ☺ ☼&",
          "       ☺ ☼ &",
          "       ☺☼  &",
          "      ☺☼  & ",
          "      ‼   & ",
          "     ☺   &  ",
          "    ‼    &  ",
          "   ☺    &   ",
          "  ‼     &   ",
          " ☺     &    ",
          "‼      &    ",
          "      &     ",
          "      &     ",
          "     &   ░  ",
          "     &   ▒  ",
          "    &    ▓  ",
          "    &    £  ",
          "   &    ░£  ",
          "   &    ▒£  ",
          "  &     ▓£  ",
          "  &     ££  ",
          " &     ░££  ",
          " &     ▒££  ",
          "&      ▓££  ",
          "&      £££  ",
          "      ░£££  ",
          "      ▒£££  ",
          "      ▓£££  ",
          "      █£££  ",
          "     ░█£££  ",
          "     ▒█£££  ",
          "     ▓█£££  ",
          "     ██£££  ",
          "    ░██£££  ",
          "    ▒██£££  ",
          "    ▓██£££  ",
          "    ███£££  ",
          "   ░███£££  ",
          "   ▒███£££  ",
          "   ▓███£££  ",
          "   ████£££  ",
          "  ░████£££  ",
          "  ▒████£££  ",
          "  ▓████£££  ",
          "  █████£££  ",
          " ░█████£££  ",
          " ▒█████£££  ",
          " ▓█████£££  ",
          " ██████£££  ",
          " ██████£££  "
        ]
      }
    };
  }
}), $e = b({
  "node_modules/.pnpm/cli-spinners@2.9.0/node_modules/cli-spinners/index.js"(D, l) {
    var a = Object.assign({}, Pe()), o = Object.keys(a);
    Object.defineProperty(a, "random", {
      get() {
        const c = Math.floor(Math.random() * o.length), p = o[c];
        return a[p];
      }
    }), l.exports = a;
  }
}), Ie = b({
  "node_modules/.pnpm/escape-string-regexp@1.0.5/node_modules/escape-string-regexp/index.js"(D, l) {
    var a = /[|\\{}()[\]^$+*?.]/g;
    l.exports = function(o) {
      if (typeof o != "string")
        throw new TypeError("Expected a string");
      return o.replace(a, "\\$&");
    };
  }
}), Re = b({
  "node_modules/.pnpm/figures@3.2.0/node_modules/figures/index.js"(D, l) {
    var a = Ie(), { platform: o } = process, c = {
      tick: "✔",
      cross: "✖",
      star: "★",
      square: "▇",
      squareSmall: "◻",
      squareSmallFilled: "◼",
      play: "▶",
      circle: "◯",
      circleFilled: "◉",
      circleDotted: "◌",
      circleDouble: "◎",
      circleCircle: "ⓞ",
      circleCross: "ⓧ",
      circlePipe: "Ⓘ",
      circleQuestionMark: "?⃝",
      bullet: "●",
      dot: "․",
      line: "─",
      ellipsis: "…",
      pointer: "❯",
      pointerSmall: "›",
      info: "ℹ",
      warning: "⚠",
      hamburger: "☰",
      smiley: "㋡",
      mustache: "෴",
      heart: "♥",
      nodejs: "⬢",
      arrowUp: "↑",
      arrowDown: "↓",
      arrowLeft: "←",
      arrowRight: "→",
      radioOn: "◉",
      radioOff: "◯",
      checkboxOn: "☒",
      checkboxOff: "☐",
      checkboxCircleOn: "ⓧ",
      checkboxCircleOff: "Ⓘ",
      questionMarkPrefix: "?⃝",
      oneHalf: "½",
      oneThird: "⅓",
      oneQuarter: "¼",
      oneFifth: "⅕",
      oneSixth: "⅙",
      oneSeventh: "⅐",
      oneEighth: "⅛",
      oneNinth: "⅑",
      oneTenth: "⅒",
      twoThirds: "⅔",
      twoFifths: "⅖",
      threeQuarters: "¾",
      threeFifths: "⅗",
      threeEighths: "⅜",
      fourFifths: "⅘",
      fiveSixths: "⅚",
      fiveEighths: "⅝",
      sevenEighths: "⅞"
    }, p = {
      tick: "√",
      cross: "×",
      star: "*",
      square: "█",
      squareSmall: "[ ]",
      squareSmallFilled: "[█]",
      play: "►",
      circle: "( )",
      circleFilled: "(*)",
      circleDotted: "( )",
      circleDouble: "( )",
      circleCircle: "(○)",
      circleCross: "(×)",
      circlePipe: "(│)",
      circleQuestionMark: "(?)",
      bullet: "*",
      dot: ".",
      line: "─",
      ellipsis: "...",
      pointer: ">",
      pointerSmall: "»",
      info: "i",
      warning: "‼",
      hamburger: "≡",
      smiley: "☺",
      mustache: "┌─┐",
      heart: c.heart,
      nodejs: "♦",
      arrowUp: c.arrowUp,
      arrowDown: c.arrowDown,
      arrowLeft: c.arrowLeft,
      arrowRight: c.arrowRight,
      radioOn: "(*)",
      radioOff: "( )",
      checkboxOn: "[×]",
      checkboxOff: "[ ]",
      checkboxCircleOn: "(×)",
      checkboxCircleOff: "( )",
      questionMarkPrefix: "？",
      oneHalf: "1/2",
      oneThird: "1/3",
      oneQuarter: "1/4",
      oneFifth: "1/5",
      oneSixth: "1/6",
      oneSeventh: "1/7",
      oneEighth: "1/8",
      oneNinth: "1/9",
      oneTenth: "1/10",
      twoThirds: "2/3",
      twoFifths: "2/5",
      threeQuarters: "3/4",
      threeFifths: "3/5",
      threeEighths: "3/8",
      fourFifths: "4/5",
      fiveSixths: "5/6",
      fiveEighths: "5/8",
      sevenEighths: "7/8"
    };
    o === "linux" && (c.questionMarkPrefix = "?");
    var t = o === "win32" ? p : c, n = (u) => {
      if (t === c)
        return u;
      for (const [e, r] of Object.entries(c))
        r !== t[e] && (u = u.replace(new RegExp(a(r), "g"), t[e]));
      return u;
    };
    l.exports = Object.assign(n, t), l.exports.main = c, l.exports.windows = p;
  }
}), Ne = k(ve(), 1), We = class extends Promise {
  constructor() {
    super(...arguments), R(this, "cancel", () => {
    });
  }
}, ze = k(we(), 1), Ue = k(ie(), 1), Ge = k(X(), 1), He = k(ae(), 1), O = k(ke(), 1), Ye = k(Oe(), 1), ee = (D, l) => D.split(`
`).map((a) => (0, Ye.default)(a, l, { trim: !1, hard: !0 }).split(`
`)).flat().map((a) => a.trimEnd()).join(`
`), te = (D) => D.split(`
`).length, ue = (D) => D.split(`
`).pop() ?? "", Ke = class {
  constructor(D) {
    R(this, "rl"), R(this, "height", 0), R(this, "extraLinesUnderPrompt", 0), this.rl = D, this.rl = D;
  }
  render(D, l = "") {
    this.clean(), this.rl.output.unmute();
    const a = ue(D), o = (0, Ge.default)(a);
    let c = o;
    this.rl.line.length && (c = c.slice(0, -this.rl.line.length)), this.rl.setPrompt(c);
    const p = this.rl._getCursorPos(), t = (0, Ue.default)({ defaultWidth: 80, output: this.rl.output });
    D = ee(D, t), l = ee(l, t), o.length % t === 0 && (D += `
`);
    let n = D + (l ? `
` + l : "");
    const e = Math.floor(o.length / t) - p.rows + (l ? te(l) : 0);
    e > 0 && (n += O.default.cursorUp(e));
    const r = (0, He.default)(ue(n));
    r > 0 && (n += O.default.cursorBackward(r)), p.cols > 0 && (n += O.default.cursorForward(p.cols)), this.extraLinesUnderPrompt = e, this.height = te(n), this.rl.output.write(n), this.rl.output.mute();
  }
  clean() {
    this.rl.output.unmute(), this.rl.output.write([
      this.extraLinesUnderPrompt > 0 ? O.default.cursorDown(this.extraLinesUnderPrompt) : "",
      O.default.eraseLines(this.height)
    ].join("")), this.extraLinesUnderPrompt = 0, this.rl.output.mute();
  }
  clearContent() {
    this.rl.output.unmute(), this.rl.output.write([
      this.extraLinesUnderPrompt > 0 ? O.default.cursorDown(this.extraLinesUnderPrompt) : "",
      `
`
    ].join("")), this.rl.output.mute();
  }
  done() {
    this.rl.setPrompt(""), this.rl.output.unmute(), this.rl.output.write(O.default.cursorShow), this.rl.output.end(), this.rl.close();
  }
};
async function Ve(D) {
  const l = typeof D.message == "function" ? D.message() : D.message;
  return {
    validate: () => !0,
    ...D,
    message: await l
  };
}
var re = k(W(), 1), Qe = k($e(), 1), G = Qe.default.dots;
function Je(D = !1) {
  const [l, a] = $(0);
  if (pe(() => {
    if (D) {
      const o = setTimeout(() => {
        a(l + 1);
      }, G.interval);
      return () => clearTimeout(o);
    }
  }, [D, l]), D) {
    const o = l % G.frames.length;
    return re.default.yellow(G.frames[o]);
  }
  return re.default.green("?");
}
var Xe = (D) => D.name === "backspace", Ze = (D) => D.name === "enter" || D.name === "return";
k(W(), 1);
k(ie(), 1);
k(W(), 1);
k(Re(), 1);
var j = [], z = [], N = [], P = 0, T = () => {
}, q;
function De() {
  j.length = 0, z.length = 0, N.length = 0, P = 0, T = () => {
  }, q = void 0;
}
function fe(D) {
  const l = z[D];
  typeof l == "function" && l();
}
function he(D) {
  return (...a) => {
    let o = !1;
    const c = T;
    T = () => {
      o = !0;
    };
    const p = D(...a);
    return o && c(), T = c, p;
  };
}
function $(D) {
  const l = P;
  return P++, l in j || (typeof D == "function" ? j[l] = D() : j[l] = D), [
    j[l],
    (a) => {
      j[l] !== a && (j[l] = a, T());
    }
  ];
}
function pe(D, l) {
  const a = q;
  if (!a)
    throw new Error("useEffect must be used within a prompt");
  const o = P;
  P++;
  const c = j[o];
  let p = !0;
  c && (p = l.some((t, n) => !Object.is(t, c[n]))), p && N.push(he(() => {
    fe(o);
    const t = D(a);
    if (t != null && typeof t != "function")
      throw new Error("useEffect return value must be a cleanup function or nothing.");
    z[o] = t;
  })), j[o] = l;
}
function et(D) {
  const l = q;
  if (!l)
    throw new Error("useKeypress must be used within a prompt");
  pe(() => {
    const a = he((o, c) => {
      D(c, l);
    });
    return l.input.on("keypress", a), () => {
      l.input.removeListener("keypress", a);
    };
  }, [D]);
}
function tt(D) {
  return (a, o) => {
    if (q)
      throw new Error(`An inquirer prompt is already running.
Make sure you await the result of the previous prompt before calling another prompt.`);
    const c = (o == null ? void 0 : o.input) ?? process.stdin, p = new ze.default();
    p.pipe((o == null ? void 0 : o.output) ?? process.stdout), q = Ne.default.createInterface({
      terminal: !0,
      input: c,
      output: p
    });
    const t = new Ke(q);
    let n = () => {
    };
    const u = new We((e, r) => {
      const i = () => {
        try {
          let d = z.length;
          for (; d--; )
            fe(d);
        } catch (d) {
          r(d);
        }
        o != null && o.clearPromptOnDone ? t.clean() : t.clearContent(), t.done(), De(), process.removeListener("SIGINT", f);
      };
      n = () => {
        i(), r(new Error("Prompt was canceled"));
      };
      let s = !0;
      const f = () => {
        s && (s = !1, i(), r(new Error("User force closed the prompt with CTRL+C")));
      };
      process.on("SIGINT", f);
      const h = (d) => {
        setImmediate(() => {
          i(), e(d);
        });
      }, F = (d) => {
        P = 0, N.length = 0, T = () => F(d);
        try {
          const C = D(d, h);
          for (const w of N)
            w();
          const [v, g] = typeof C == "string" ? [C] : C;
          t.render(v, g);
        } catch (C) {
          i(), r(C);
        }
      };
      Ve(a).then(F, r);
    });
    return u.catch(() => {
      De();
    }), u.cancel = n, u;
  };
}
var I = k(W(), 1), ut = tt((D, l) => {
  const [a, o] = $("pending"), [c = "", p] = $(D.default), [t, n] = $(void 0), [u, e] = $(""), i = Je(a === "loading");
  et(async (d, C) => {
    if (a === "pending")
      if (Ze(d)) {
        const v = u || c;
        o("loading");
        const g = await D.validate(v);
        g === !0 ? (e(v), o("done"), l(v)) : (C.write(u), n(g || "You must provide a valid value"), o("pending"));
      } else
        Xe(d) && !u ? p(void 0) : d.name === "tab" && !u ? (p(void 0), C.clearLine(0), C.write(c), e(c)) : (e(C.line), n(void 0));
  });
  const s = I.default.bold(D.message);
  let f = u;
  typeof D.transformer == "function" && (f = D.transformer(u, { isFinal: a === "done" })), a === "done" && (f = I.default.cyan(f));
  let h = "";
  c && a !== "done" && !u && (h = I.default.dim(` (${c})`));
  let F = "";
  return t && (F = I.default.red(`> ${t}`)), [`${i} ${s}${h} ${f}`, F];
}), S = {
  silent: Number.NEGATIVE_INFINITY,
  fatal: 0,
  error: 0,
  warn: 1,
  log: 2,
  info: 3,
  success: 3,
  fail: 3,
  ready: 3,
  start: 3,
  box: 3,
  debug: 4,
  trace: 5,
  verbose: Number.POSITIVE_INFINITY
}, ne = {
  // Silent
  silent: {
    level: -1
  },
  // Level 0
  fatal: {
    level: S.fatal
  },
  error: {
    level: S.error
  },
  // Level 1
  warn: {
    level: S.warn
  },
  // Level 2
  log: {
    level: S.log
  },
  // Level 3
  info: {
    level: S.info
  },
  success: {
    level: S.success
  },
  fail: {
    level: S.fail
  },
  ready: {
    level: S.info
  },
  start: {
    level: S.info
  },
  box: {
    level: S.info
  },
  // Level 4
  debug: {
    level: S.debug
  },
  // Level 5
  trace: {
    level: S.trace
  },
  // Verbose
  verbose: {
    level: S.verbose
  }
};
function H(D) {
  return D !== null && typeof D == "object";
}
function V(D, l, a = ".", o) {
  if (!H(l))
    return V(D, {}, a, o);
  const c = Object.assign({}, l);
  for (const p in D) {
    if (p === "__proto__" || p === "constructor")
      continue;
    const t = D[p];
    t != null && (o && o(c, p, t, a) || (Array.isArray(t) && Array.isArray(c[p]) ? c[p] = [...t, ...c[p]] : H(t) && H(c[p]) ? c[p] = V(
      t,
      c[p],
      (a ? `${a}.` : "") + p.toString(),
      o
    ) : c[p] = t));
  }
  return c;
}
function rt(D) {
  return (...l) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    l.reduce((a, o) => V(a, o, "", D), {})
  );
}
var Dt = rt();
function nt(D) {
  return Object.prototype.toString.call(D) === "[object Object]";
}
function st(D) {
  return !(!nt(D) || !D.message && !D.args || D.stack);
}
var Y = !1, se = [], x = class {
  constructor(D = {}) {
    const l = D.types || ne;
    this.options = Dt(
      {
        ...D,
        defaults: { ...D.defaults },
        level: K(D.level, l),
        reporters: [...D.reporters || []]
      },
      {
        types: ne,
        throttle: 1e3,
        throttleMin: 5,
        formatOptions: {
          date: !0,
          colors: !1,
          compact: !0
        }
      }
    );
    for (const a in l) {
      const o = {
        type: a,
        ...this.options.defaults,
        ...l[a]
      };
      this[a] = this._wrapLogFn(o), this[a].raw = this._wrapLogFn(
        o,
        !0
      );
    }
    this.options.mockFn && this.mockTypes(), this._lastLog = {};
  }
  get level() {
    return this.options.level;
  }
  set level(D) {
    this.options.level = K(
      D,
      this.options.types,
      this.options.level
    );
  }
  prompt(D, l) {
    if (!this.options.prompt)
      throw new Error("prompt is not supported!");
    return this.options.prompt(D, l);
  }
  create(D) {
    const l = new x({
      ...this.options,
      ...D
    });
    return this._mockFn && l.mockTypes(this._mockFn), l;
  }
  withDefaults(D) {
    return this.create({
      ...this.options,
      defaults: {
        ...this.options.defaults,
        ...D
      }
    });
  }
  withTag(D) {
    return this.withDefaults({
      tag: this.options.defaults.tag ? this.options.defaults.tag + ":" + D : D
    });
  }
  addReporter(D) {
    return this.options.reporters.push(D), this;
  }
  removeReporter(D) {
    if (D) {
      const l = this.options.reporters.indexOf(D);
      if (l >= 0)
        return this.options.reporters.splice(l, 1);
    } else
      this.options.reporters.splice(0);
    return this;
  }
  setReporters(D) {
    return this.options.reporters = Array.isArray(D) ? D : [D], this;
  }
  wrapAll() {
    this.wrapConsole(), this.wrapStd();
  }
  restoreAll() {
    this.restoreConsole(), this.restoreStd();
  }
  wrapConsole() {
    for (const D in this.options.types)
      console["__" + D] || (console["__" + D] = console[D]), console[D] = this[D].raw;
  }
  restoreConsole() {
    for (const D in this.options.types)
      console["__" + D] && (console[D] = console["__" + D], delete console["__" + D]);
  }
  wrapStd() {
    this._wrapStream(this.options.stdout, "log"), this._wrapStream(this.options.stderr, "log");
  }
  _wrapStream(D, l) {
    D && (D.__write || (D.__write = D.write), D.write = (a) => {
      this[l].raw(String(a).trim());
    });
  }
  restoreStd() {
    this._restoreStream(this.options.stdout), this._restoreStream(this.options.stderr);
  }
  _restoreStream(D) {
    D && D.__write && (D.write = D.__write, delete D.__write);
  }
  pauseLogs() {
    Y = !0;
  }
  resumeLogs() {
    Y = !1;
    const D = se.splice(0);
    for (const l of D)
      l[0]._logFn(l[1], l[2]);
  }
  mockTypes(D) {
    const l = D || this.options.mockFn;
    if (this._mockFn = l, typeof l == "function")
      for (const a in this.options.types)
        this[a] = l(a, this.options.types[a]) || this[a], this[a].raw = this[a];
  }
  _wrapLogFn(D, l) {
    return (...a) => {
      if (Y) {
        se.push([this, D, a, l]);
        return;
      }
      return this._logFn(D, a, l);
    };
  }
  _logFn(D, l, a) {
    if ((D.level || 0) > this.level)
      return !1;
    const o = {
      date: /* @__PURE__ */ new Date(),
      args: [],
      ...D,
      level: K(D.level, this.options.types)
    };
    !a && l.length === 1 && st(l[0]) ? Object.assign(o, l[0]) : o.args = [...l], o.message && (o.args.unshift(o.message), delete o.message), o.additional && (Array.isArray(o.additional) || (o.additional = o.additional.split(`
`)), o.args.push(`
` + o.additional.join(`
`)), delete o.additional), o.type = typeof o.type == "string" ? o.type.toLowerCase() : "log", o.tag = typeof o.tag == "string" ? o.tag : "";
    const c = (t = !1) => {
      const n = (this._lastLog.count || 0) - this.options.throttleMin;
      if (this._lastLog.object && n > 0) {
        const u = [...this._lastLog.object.args];
        n > 1 && u.push(`(repeated ${n} times)`), this._log({ ...this._lastLog.object, args: u }), this._lastLog.count = 1;
      }
      t && (this._lastLog.object = o, this._log(o));
    };
    clearTimeout(this._lastLog.timeout);
    const p = this._lastLog.time && o.date ? o.date.getTime() - this._lastLog.time.getTime() : 0;
    if (this._lastLog.time = o.date, p < this.options.throttle)
      try {
        const t = JSON.stringify([
          o.type,
          o.tag,
          o.args
        ]), n = this._lastLog.serialized === t;
        if (this._lastLog.serialized = t, n && (this._lastLog.count = (this._lastLog.count || 0) + 1, this._lastLog.count > this.options.throttleMin)) {
          this._lastLog.timeout = setTimeout(
            c,
            this.options.throttle
          );
          return;
        }
      } catch {
      }
    c(!0);
  }
  _log(D) {
    for (const l of this.options.reporters)
      l.log(D, {
        options: this.options
      });
  }
};
function K(D, l = {}, a = 3) {
  return D === void 0 ? a : typeof D == "number" ? D : l[D] && l[D].level !== void 0 ? l[D].level : a;
}
x.prototype.add = x.prototype.addReporter;
x.prototype.remove = x.prototype.removeReporter;
x.prototype.clear = x.prototype.removeReporter;
x.prototype.withScope = x.prototype.withTag;
x.prototype.mock = x.prototype.mockTypes;
x.prototype.pause = x.prototype.pauseLogs;
x.prototype.resume = x.prototype.resumeLogs;
function ot(D = {}) {
  return new x(D);
}
var it = class {
  constructor(D) {
    this.options = { ...D }, this.defaultColor = "#7f8c8d", this.levelColorMap = {
      0: "#c0392b",
      // Red
      1: "#f39c12",
      // Yellow
      3: "#00BCD4"
      // Cyan
    }, this.typeColorMap = {
      success: "#2ecc71"
      // Green
    };
  }
  _getLogFn(D) {
    return D < 1 ? console.__error || console.error : D === 1 ? console.__warn || console.warn : console.__log || console.log;
  }
  log(D) {
    const l = this._getLogFn(D.level), a = D.type === "log" ? "" : D.type, o = D.tag || "", p = `
      background: ${this.typeColorMap[D.type] || this.levelColorMap[D.level] || this.defaultColor};
      border-radius: 0.5em;
      color: white;
      font-weight: bold;
      padding: 2px 0.5em;
    `, t = `%c${[o, a].filter(Boolean).join(":")}`;
    typeof D.args[0] == "string" ? l(
      `${t}%c ${D.args[0]}`,
      p,
      // Empty string as style resets to default console style
      "",
      ...D.args.slice(1)
    ) : l(t, p, ...D.args);
  }
};
function at(D = {}) {
  return ot({
    reporters: D.reporters || [new it({})],
    prompt(a, o = {}) {
      return o.type === "confirm" ? Promise.resolve(confirm(a)) : Promise.resolve(prompt(a));
    },
    ...D
  });
}
var lt = at();
async function ct() {
  const D = await ut({ message: "请输入模块名称" });
  lt.info(["模块名称", D]);
}
ct();
export {
  ct as default
};
