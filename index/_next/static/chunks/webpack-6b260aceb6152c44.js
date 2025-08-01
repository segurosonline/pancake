(() => {
   "use strict";
   var e = {},
      r = {};

   function t(a) {
      var o = r[a];
      if (void 0 !== o) return o.exports;
      var n = r[a] = {
            exports: {}
         },
         c = !0;
      try {
         e[a].call(n.exports, n, n.exports, t), c = !1
      } finally {
         c && delete r[a]
      }
      return n.exports
   }
   t.m = e, t.amdO = {}, (() => {
      var e = [];
      t.O = (r, a, o, n) => {
         if (a) {
            n = n || 0;
            for (var c = e.length; c > 0 && e[c - 1][2] > n; c--) e[c] = e[c - 1];
            e[c] = [a, o, n];
            return
         }
         for (var i = 1 / 0, c = 0; c < e.length; c++) {
            for (var [a, o, n] = e[c], l = !0, d = 0; d < a.length; d++)(!1 & n || i >= n) && Object.keys(t.O).every(e => t.O[e](a[d])) ? a.splice(d--, 1) : (l = !1, n < i && (i = n));
            if (l) {
               e.splice(c--, 1);
               var f = o();
               void 0 !== f && (r = f)
            }
         }
         return r
      }
   })(), t.n = e => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return t.d(r, {
         a: r
      }), r
   }, (() => {
      var e, r = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
      t.t = function (a, o) {
         if (1 & o && (a = this(a)), 8 & o || "object" == typeof a && a && (4 & o && a.__esModule || 16 & o && "function" == typeof a.then)) return a;
         var n = Object.create(null);
         t.r(n);
         var c = {};
         e = e || [null, r({}), r([]), r(r)];
         for (var i = 2 & o && a;
            "object" == typeof i && !~e.indexOf(i); i = r(i)) Object.getOwnPropertyNames(i).forEach(e => c[e] = () => a[e]);
         return c.default = () => a, t.d(n, c), n
      }
   })(), t.d = (e, r) => {
      for (var a in r) t.o(r, a) && !t.o(e, a) && Object.defineProperty(e, a, {
         enumerable: !0,
         get: r[a]
      })
   }, t.f = {}, t.e = e => Promise.all(Object.keys(t.f).reduce((r, a) => (t.f[a](e, r), r), [])), t.u = e => "static/chunks/" + (({
      34: "af49b54f",
      42: "reactPlayerTwitch",
      173: "reactPlayerVimeo",
      328: "reactPlayerDailyMotion",
      340: "reactPlayerWistia",
      353: "reactPlayerPreview",
      392: "reactPlayerVidyard",
      446: "reactPlayerYouTube",
      458: "reactPlayerFilePlayer",
      463: "reactPlayerKaltura",
      570: "reactPlayerMixcloud",
      627: "reactPlayerStreamable",
      887: "reactPlayerFacebook",
      979: "reactPlayerSoundCloud"
   })[e] || e) + "." + ({
      34: "50fe81a893c4b660",
      42: "81d501329a11d945",
      173: "4a1819d334ab3a97",
      328: "6bf2492e1caeb3b7",
      340: "30856b197009bb92",
      353: "f2e89b16801720b7",
      360: "2a2230a172d125c2",
      392: "c0cbefb94008838c",
      446: "9347931c00ab6551",
      458: "75433d3925a4824e",
      463: "07c25b62c4adf4cf",
      570: "67b4bf1d80c153d9",
      627: "5c15615ba88dd3fd",
      650: "f628f85630a277e6",
      746: "2ab82d797d55f11b",
      887: "2aa4515e67c1a904",
      979: "739dff57e426bb09"
   })[e] + ".js", t.miniCssF = e => {}, t.g = function () {
      if ("object" == typeof globalThis) return globalThis;
      try {
         return this || Function("return this")()
      } catch (e) {
         if ("object" == typeof window) return window
      }
   }(), t.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r), (() => {
      var e = {},
         r = "_N_E:";
      t.l = (a, o, n, c) => {
         if (e[a]) {
            e[a].push(o);
            return
         }
         if (void 0 !== n)
            for (var i, l, d = document.getElementsByTagName("script"), f = 0; f < d.length; f++) {
               var u = d[f];
               if (u.getAttribute("src") == a || u.getAttribute("data-webpack") == r + n) {
                  i = u;
                  break
               }
            }
         i || (l = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, t.nc && i.setAttribute("nonce", t.nc), i.setAttribute("data-webpack", r + n), i.src = t.tu(a)), e[a] = [o];
         var s = (r, t) => {
               i.onerror = i.onload = null, clearTimeout(b);
               var o = e[a];
               if (delete e[a], i.parentNode && i.parentNode.removeChild(i), o && o.forEach(e => e(t)), r) return r(t)
            },
            b = setTimeout(s.bind(null, void 0, {
               type: "timeout",
               target: i
            }), 12e4);
         i.onerror = s.bind(null, i.onerror), i.onload = s.bind(null, i.onload), l && document.head.appendChild(i)
      }
   })(), t.r = e => {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
         value: "Module"
      }), Object.defineProperty(e, "__esModule", {
         value: !0
      })
   }, (() => {
      var e;
      t.tt = () => (void 0 === e && (e = {
         createScriptURL: e => e
      }, "undefined" != typeof trustedTypes && trustedTypes.createPolicy && (e = trustedTypes.createPolicy("nextjs#bundler", e))), e)
   })(), t.tu = e => t.tt().createScriptURL(e), t.p = "/_next/", (() => {
      var e = {
         68: 0
      };
      t.f.j = (r, a) => {
         var o = t.o(e, r) ? e[r] : void 0;
         if (0 !== o) {
            if (o) a.push(o[2]);
            else if (68 != r) {
               var n = new Promise((t, a) => o = e[r] = [t, a]);
               a.push(o[2] = n);
               var c = t.p + t.u(r),
                  i = Error();
               t.l(c, a => {
                  if (t.o(e, r) && (0 !== (o = e[r]) && (e[r] = void 0), o)) {
                     var n = a && ("load" === a.type ? "missing" : a.type),
                        c = a && a.target && a.target.src;
                     i.message = "Loading chunk " + r + " failed.\n(" + n + ": " + c + ")", i.name = "ChunkLoadError", i.type = n, i.request = c, o[1](i)
                  }
               }, "chunk-" + r, r)
            } else e[r] = 0
         }
      }, t.O.j = r => 0 === e[r];
      var r = (r, a) => {
            var o, n, [c, i, l] = a,
               d = 0;
            if (c.some(r => 0 !== e[r])) {
               for (o in i) t.o(i, o) && (t.m[o] = i[o]);
               if (l) var f = l(t)
            }
            for (r && r(a); d < c.length; d++) n = c[d], t.o(e, n) && e[n] && e[n][0](), e[n] = 0;
            return t.O(f)
         },
         a = self.webpackChunk_N_E = self.webpackChunk_N_E || [];
      a.forEach(r.bind(null, 0)), a.push = r.bind(null, a.push.bind(a))
   })(), t.nc = void 0
})();;
(function () {
   if (!/(?:^|;\s)__vercel_toolbar=1(?:;|$)/.test(document.cookie)) return;
   var s = document.createElement('script');
   s.src = 'https://vercel.live/_next-live/feedback/feedback.js';
   s.setAttribute("data-explicit-opt-in", "true");
   s.setAttribute("data-cookie-opt-in", "true");
   s.setAttribute("data-deployment-id", "dpl_Dm9UjU6wdSnvRcWczmbVsfDutyMD");
   ((document.head || document.documentElement).appendChild(s))
})();