(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [332], {
        1940: (t, n, e) => {
            "use strict";
            e.r(n), e.d(n, {
                __N_SSG: () => F,
                default: () => O
            });
            var r = e(2860),
                o = e(22764),
                i = e(28553),
                a = e(55729),
                c = e(20696),
                u = e(57029),
                d = e(70508),
                l = e(80229),
                s = e(654),
                p = e(83872),
                f = e(13203),
                g = e(63603),
                m = e(6476),
                h = e(60696),
                x = e(49091),
                v = e(97453),
                y = e(19178);
            let w = {
                    block: {
                        normal: t => {
                            let {
                                value: n,
                                children: e
                            } = t, o = (0, v.Xx)(n);
                            return (0, r.Y)(h.hE, {
                                id: o,
                                as: "h1",
                                size: "xl",
                                align: "center",
                                children: e
                            })
                        }
                    },
                    types: {
                        lottie: t => {
                            let {
                                value: n
                            } = t, {
                                variant: e,
                                play: o
                            } = n;
                            return (0, r.Y)(b, {
                                variant: e,
                                play: o
                            })
                        }
                    }
                },
                b = (0, c.A)(y.A, {
                    target: "e1ot3kfe0"
                })("width:130px;height:110px;transform:translateY(15px);", f.j5.xl, "{width:100px;height:85px;transform:translateY(10px);}", f.j5.m, "{width:48px;height:41px;transform:translateY(7px);}"),
                A = t => {
                    let {
                        data: n,
                        play: e
                    } = t, o = n.map(t => {
                        let n = t.children.map(t => ({
                            ...t,
                            play: e
                        }));
                        return {
                            ...t,
                            children: n
                        }
                    });
                    return (0, r.Y)(x.RK, {
                        value: o,
                        components: w
                    })
                };
            var Y = e(21563);
            let E = (0, c.A)("section", {
                    target: "e4oasgx0"
                })("position:relative;z-index:", t => {
                    let {
                        zIndex: n
                    } = t;
                    return n
                }, ";padding-bottom:var(--spacingXXL);", f.j5.m, "{padding-bottom:var(--spacingL);}"),
                j = (0, c.A)(h.Pd, {
                    target: "e4oasgx1"
                })("opacity:0.8;margin-bottom:24px;", f.j5.m, "{margin-bottom:12px;}"),
                R = (0, c.A)("div", {
                    target: "e4oasgx2"
                })("position:sticky;top:", t => {
                    let {
                        showBanner: n,
                        showBottomBanner: e
                    } = t;
                    return n ? e ? f.bf.full : f.bf.topOnly : "0px"
                }, ";display:flex;flex-direction:column;justify-content:center;align-items:center;padding-top:170px;padding-bottom:48px;", f.j5.xl, "{padding-top:250px;padding-bottom:160px;}", f.j5.m, "{padding-top:168px;padding-bottom:76px;top:", t => {
                    let {
                        showBanner: n,
                        showBottomBanner: e
                    } = t;
                    return n ? e ? f.xY.full : f.xY.topOnly : "0px"
                }, ";}"),
                _ = (0, c.A)(s.m.div, {
                    target: "e4oasgx3"
                })("display:flex;flex-direction:column;justify-content:center;align-items:center;color:var(--themeTitleColor);"),
                S = (0, c.A)("div", {
                    target: "e4oasgx4"
                })("margin-top:48px;", f.j5.xl, "{margin-top:160px;}", f.j5.m, "{margin-top:76px;}"),
                N = (0, c.A)("div", {
                    target: "e4oasgx5"
                })("display:flex;justify-content:center;width:800px;margin:auto;overflow:hidden;", f.j5.xl, "{width:700px;}", f.j5.l, "{width:375px;max-width:90%;}"),
                k = t => {
                    let {
                        title: n,
                        subtitle: e,
                        responsiveVideo: o,
                        detectButton: i,
                        zIndex: c
                    } = t, s = (0, a.useRef)(), f = (0, a.useRef)(), {
                        scrollYProgress: h
                    } = (0, u.L)({
                        target: s,
                        offset: ["start start", "350px start"]
                    }), x = (0, p.md)(g.Y), v = (0, p.md)(g.j), [y, w] = (0, a.useState)(!1), b = (0, d.W)(s), k = (0, d.W)(f, {
                        amount: .5,
                        once: !0
                    }), C = (0, l.G)(h, [0, 1], [1, 0]), F = (0, l.G)(h, [0, 1], [1, .8]);
                    return (0, r.FD)(E, {
                        ref: s,
                        zIndex: c,
                        children: [(0, r.Y)(R, {
                            showBanner: x,
                            showBottomBanner: v,
                            children: (0, r.FD)(_, {
                                style: {
                                    opacity: C,
                                    scale: F,
                                    willChange: b ? "transform, opacity" : "auto"
                                },
                                children: [(0, r.Y)(j, {
                                    as: "h2",
                                    size: "s",
                                    align: "center",
                                    color: "midnightPurple",
                                    children: e
                                }), (0, r.Y)(A, {
                                    data: n,
                                    play: y
                                }), (0, r.Y)(S, {
                                    children: (0, r.Y)(m.A, {
                                        onMouseEnter: () => w(!0),
                                        onMouseLeave: () => w(!1),
                                        ...i
                                    })
                                })]
                            })
                        }), (0, r.Y)(N, {
                            ref: f,
                            children: (0, r.Y)(Y.A, {
                                canPlay: k,
                                sources: o
                            })
                        })]
                    })
                };
            var C = e(22064),
                F = !0;

            function O(t) {
                let {
                    privacyAlertData: n,
                    homeData: e
                } = t, {
                    intro: a,
                    modules: c,
                    seo: u
                } = e;
                return (0, o.i$)("primary", "home"), (0, r.FD)(i.A, {
                    privacyAlert: n,
                    seo: u,
                    theme: "lightPurple",
                    children: [(0, r.Y)(k, {
                        ...a,
                        zIndex: null == c ? void 0 : c.length
                    }), (0, r.Y)(C.A, {
                        modules: c,
                        hasHero: !1
                    })]
                })
            }
        },
        17703: (t, n, e) => {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/", function() {
                return e(1940)
            }])
        },
        37612: (t, n, e) => {
            "use strict";
            e.d(n, {
                A: () => o
            });
            var r = e(55729);

            function o(t) {
                var n = (0, r.useRef)();
                return (0, r.useEffect)(function() {
                    n.current = t
                }), n.current
            }
        },
        53623: (t, n, e) => {
            "use strict";
            e.d(n, {
                z: () => s
            });
            var r = e(55729),
                o = e(91431),
                i = e(39751),
                a = e(50181),
                c = e(21338),
                u = e(82981),
                d = e(81461);

            function l(t) {
                return "number" == typeof t ? t : parseFloat(t)
            }

            function s(t, n = {}) {
                let {
                    isStatic: e
                } = (0, r.useContext)(i.Q), p = (0, r.useRef)(null), f = (0, c.d)((0, u.S)(t) ? l(t.get()) : t), g = (0, r.useRef)(f.get()), m = (0, r.useRef)(() => {}), h = () => {
                    let t = p.current;
                    t && 0 === t.time && t.sample(d.uv.delta), x(), p.current = (0, o.L)({
                        keyframes: [f.get(), g.current],
                        velocity: f.getVelocity(),
                        type: "spring",
                        restDelta: .001,
                        restSpeed: .01,
                        ...n,
                        onUpdate: m.current
                    })
                }, x = () => {
                    p.current && p.current.stop()
                };
                return (0, r.useInsertionEffect)(() => f.attach((t, n) => e ? n(t) : (g.current = t, m.current = n, d.Gt.update(h), f.get()), x), [JSON.stringify(n)]), (0, a.E)(() => {
                    if ((0, u.S)(t)) return t.on("change", t => f.set(l(t)))
                }, [f]), f
            }
        },
        66260: (t, n, e) => {
            "use strict";
            e.d(n, {
                A: () => o
            });
            var r = e(55729);

            function o(t, n) {
                void 0 === n && (n = !0);
                var e = (0, r.useRef)(null),
                    o = (0, r.useRef)(!1),
                    i = (0, r.useRef)(t);
                i.current = t;
                var a = (0, r.useCallback)(function(t) {
                        o.current && (i.current(t), e.current = requestAnimationFrame(a))
                    }, []),
                    c = (0, r.useMemo)(function() {
                        return [function() {
                            o.current && (o.current = !1, e.current && cancelAnimationFrame(e.current))
                        }, function() {
                            o.current || (o.current = !0, e.current = requestAnimationFrame(a))
                        }, function() {
                            return o.current
                        }]
                    }, []);
                return (0, r.useEffect)(function() {
                    return n && c[1](), c[0]
                }, []), c
            }
        },
        79320: (t, n, e) => {
            "use strict";
            e.d(n, {
                A: () => a
            });
            var r = e(55729),
                o = e(5615),
                i = e(81386);
            let a = function() {
                var t = (0, i.A)(function() {
                        return {
                            x: o.Bd ? window.pageXOffset : 0,
                            y: o.Bd ? window.pageYOffset : 0
                        }
                    }),
                    n = t[0],
                    e = t[1];
                return (0, r.useEffect)(function() {
                    var t = function() {
                        e(function(t) {
                            var n = window.pageXOffset,
                                e = window.pageYOffset;
                            return t.x !== n || t.y !== e ? {
                                x: n,
                                y: e
                            } : t
                        })
                    };
                    return t(), (0, o.on)(window, "scroll", t, {
                            capture: !1,
                            passive: !0
                        }),
                        function() {
                            (0, o.AU)(window, "scroll", t)
                        }
                }, []), n
            }
        },
        81386: (t, n, e) => {
            "use strict";
            e.d(n, {
                A: () => a
            });
            var r = e(55729);
            let o = function(t) {
                    (0, r.useEffect)(t, [])
                },
                i = function(t) {
                    var n = (0, r.useRef)(t);
                    n.current = t, o(function() {
                        return function() {
                            return n.current()
                        }
                    })
                },
                a = function(t) {
                    var n = (0, r.useRef)(0),
                        e = (0, r.useState)(t),
                        o = e[0],
                        a = e[1],
                        c = (0, r.useCallback)(function(t) {
                            cancelAnimationFrame(n.current), n.current = requestAnimationFrame(function() {
                                a(t)
                            })
                        }, []);
                    return i(function() {
                        cancelAnimationFrame(n.current)
                    }), [o, c]
                }
        },
        81747: (t, n, e) => {
            "use strict";
            e.d(n, {
                jp: () => v,
                pN: () => u
            });
            var r, o = e(55729),
                i = function() {
                    var t = 0,
                        n = null;
                    return {
                        add: function(o) {
                            if (0 == t && (n = function() {
                                    if (!document) return null;
                                    var t = document.createElement("style");
                                    t.type = "text/css";
                                    var n = r || e.nc;
                                    return n && t.setAttribute("nonce", n), t
                                }())) {
                                var i, a;
                                (i = n).styleSheet ? i.styleSheet.cssText = o : i.appendChild(document.createTextNode(o)), a = n, (document.head || document.getElementsByTagName("head")[0]).appendChild(a)
                            }
                            t++
                        },
                        remove: function() {
                            --t || !n || (n.parentNode && n.parentNode.removeChild(n), n = null)
                        }
                    }
                },
                a = function() {
                    var t = i();
                    return function(n, e) {
                        o.useEffect(function() {
                            return t.add(n),
                                function() {
                                    t.remove()
                                }
                        }, [n && e])
                    }
                },
                c = "right-scroll-bar-position",
                u = "width-before-scroll-bar",
                d = {
                    left: 0,
                    top: 0,
                    right: 0,
                    gap: 0
                },
                l = function(t) {
                    return parseInt(t || "", 10) || 0
                },
                s = function(t) {
                    var n = window.getComputedStyle(document.body),
                        e = n["padding" === t ? "paddingLeft" : "marginLeft"],
                        r = n["padding" === t ? "paddingTop" : "marginTop"],
                        o = n["padding" === t ? "paddingRight" : "marginRight"];
                    return [l(e), l(r), l(o)]
                },
                p = function(t) {
                    if (void 0 === t && (t = "margin"), "undefined" == typeof window) return d;
                    var n = s(t),
                        e = document.documentElement.clientWidth,
                        r = window.innerWidth;
                    return {
                        left: n[0],
                        top: n[1],
                        right: n[2],
                        gap: Math.max(0, r - e + n[2] - n[0])
                    }
                },
                f = function() {
                    var t = a();
                    return function(n) {
                        return t(n.styles, n.dynamic), null
                    }
                }(),
                g = "data-scroll-locked",
                m = function(t, n, e, r) {
                    var o = t.left,
                        i = t.top,
                        a = t.right,
                        d = t.gap;
                    return void 0 === e && (e = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(d, "px ").concat(r, ";\n  }\n  body[").concat(g, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === e && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(a, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(d, "px ").concat(r, ";\n    "), "padding" === e && "padding-right: ".concat(d, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(c, " {\n    right: ").concat(d, "px ").concat(r, ";\n  }\n  \n  .").concat(u, " {\n    margin-right: ").concat(d, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(u, " .").concat(u, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(g, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(d, "px;\n  }\n")
                },
                h = function() {
                    var t = parseInt(document.body.getAttribute(g) || "0", 10);
                    return isFinite(t) ? t : 0
                },
                x = function() {
                    o.useEffect(function() {
                        return document.body.setAttribute(g, (h() + 1).toString()),
                            function() {
                                var t = h() - 1;
                                t <= 0 ? document.body.removeAttribute(g) : document.body.setAttribute(g, t.toString())
                            }
                    }, [])
                },
                v = function(t) {
                    var n = t.noRelative,
                        e = t.noImportant,
                        r = t.gapMode,
                        i = void 0 === r ? "margin" : r;
                    x();
                    var a = o.useMemo(function() {
                        return p(i)
                    }, [i]);
                    return o.createElement(f, {
                        styles: m(a, !n, i, e ? "" : "!important")
                    })
                }
        }
    },
    t => {
        var n = n => t(t.s = n);
        t.O(0, [652, 5, 892, 695, 64, 636, 593, 792], () => n(17703)), _N_E = t.O()
    }
]);