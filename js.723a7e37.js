parcelRequire = function(e, r, t, n) {
    var i, o = "function" == typeof parcelRequire && parcelRequire, u = "function" == typeof require && require;
    function f(t, n) {
        if (!r[t]) {
            if (!e[t]) {
                var i = "function" == typeof parcelRequire && parcelRequire;
                if (!n && i) 
                    return i(t, !0);
                if (o) 
                    return o(t, !0);
                if (u && "string" == typeof t) 
                    return u(t);
                var c = new Error("Cannot find module '" + t + "'");
                throw c.code = "MODULE_NOT_FOUND", c
            }
            p.resolve = function(r) {
                return e[t][1][r] || r
            }, p.cache = {};
            var l = r[t] = new f.Module(t);
            e[t][0].call(l.exports, p, l, l.exports, this)
        }
        return r[t].exports;
        function p(e) {
            return f(p.resolve(e))
        }
    }
    f.isParcelRequire = !0, f.Module = function(e) {
        this.id = e, this.bundle = f, this.exports = {}
    }, f.modules = e, f.cache = r, f.parent = o, f.register = function(r, t) {
        e[r] = [function(e, r) {
            r.exports = t
        }, {}
        ]
    };
    for (var c = 0; c < t.length; c ++) 
        try {
            f(t[c])
        } catch (e) {
        i || (i = e)
    }
    if (t.length) {
        var l = f(t[t.length -1]);
        "object" == typeof exports && "undefined" != typeof module ? module.exports = l : "function" == typeof define && define.amd ? define(function() {
            return l
        }) : n && (this[n] = l)
    }
    if (parcelRequire = f, i) 
        throw i;
    return f
}
( {
    "tcVT": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.debounce = exports.getScrollbarWidth = exports.randomInt = exports.$$ = exports.$ = void 0;
        var e = Math.floor, t = Math.random, o = document.querySelector.bind(document);
        exports.$ = o;
        var r = document.querySelectorAll.bind(document);
        exports.$$ = r;
        var n = function(o, r) {
            return e(t() * (r -o + 1)) + o
        };
        exports.randomInt = n;
        var l = function() {
            var e, t = document.createElement("div");
            return t.style.position = "absolute", t.style.top = "-9999px", t.style.width = "100px", t.style.height = "100px", t.style.overflow = "scroll", t.style.msOverflowStyle = "scrollbar", document.body.appendChild(t), e = t.offsetWidth -t.clientWidth, document.body.removeChild(t), e
        };
        exports.getScrollbarWidth = l;
        var d = function(e, t) {
            var o = null;
            return function() {
                var r = arguments, n = this;
                clearTimeout(o), o = setTimeout(function() {
                    return e.apply(n, r)
                }, t)
            }
        };
        exports.debounce = d;
    }, {}
    ],
    "pGTP": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var e = require("./utils");
        function t(e, t) {
            if (!(e instanceof t)) 
                throw new TypeError("Cannot call a class as a function")
        }
        function n(e, t) {
            for (var n = 0; n < t.length; n ++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
        }
        function i(e, t, i) {
            return t && n(e.prototype, t), i && n(e, i), e
        }
        var s = console, o = s.log, a = Math.atan2, r = Math.PI, u = function() {
            function n(e) {
                t(this, n), o("????");
                Object.assign(this.config = {}, {
                    el: 
                        null, svg: null, eye: null
                }, e), this.mouse = this.config.svg.createSVGPoint(), this.centerX = null, this.centerY = null, this._updateDynamics()._bindEvents()
            }
            return i(n, [ {
                key: "_bindEvents", value: function() {
                    return this._handleMouseMove = this._handleMouseMove.bind(this), this.config.el.addEventListener("mousemove", this._handleMouseMove), this._handleWindowResize = this._handleWindowResize.bind(this), window.addEventListener("resize", (0, e.debounce)(this._handleWindowResize, 500)), this
                }
            }, {
                key: "_updateDynamics", value: function() {
                    var e = this.config.eye.getBBox(), t = e.width, n = e.x, i = e.y;
                    return this.centerX = n + t / 2, this.centerY = i + t / 2, this
                }
            }, {
                key: "_handleMouseMove", value: function(e) {
                    this.mouse.x = e.clientX, this.mouse.y = e.clientY;
                    var t = this.mouse.matrixTransform(this.config.svg.getScreenCTM().inverse()), n = t.x -this.centerX, i = t.y -this.centerY, s = 180 * a(i, n) / r + 360;
                    this.config.eye.style.transform = "rotate(".concat(s, "deg)")
                }
            }, {
                key: "_handleWindowResize", value: function() {
                    this._updateDynamics()
                }
            }
            ]), n
        }();
        exports.default = u;
    }, {
        "./utils": "tcVT"
    }
    ],
    "j9dM": [function(require, module, exports) {
        "use strict";
        Object.defineProperty(exports, "__esModule", {
            value: !0
        }), exports.default = void 0;
        var e = i(require("./FollowingEye")), t = require("./utils");
        function i(e) {
            return e && e.__esModule ? e: {
                default: 
                    e
            }
        }
        function n(e, t) {
            if (!(e instanceof t)) 
                throw new TypeError("Cannot call a class as a function")
        }
        function a(e, t) {
            for (var i = 0; i < t.length; i ++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        function r(e, t, i) {
            return t && a(e.prototype, t), i && a(e, i), e
        }
        var o = console, s = o.log, d = function() {
            function i(e) {
                n(this, i), s("????");
                Object.assign(this.config = {}, {
                    el: document.createElement("div"), links: null
                }, e), this.config.links && (this.events = {}, this.eyes = [], this._isActive = !1, this._demoWrapper = (0, t.$)(".iframe-wrapper"), this._iframe = this._demoWrapper.querySelector("iframe"), this._demoCloseButton = (0, t.$)(".iframe-close-button"), this._iframeLoader = (0, t.$)(".iframe-loader"), this._iframeLoaderSecLayer = (0, t.$)(".iframe-loader > div:nth-child(1)"), this._iframeLoaderMainLayer = (0, t.$)(".iframe-loader > div:nth-child(2)"), this._iframeLoadingText = (0, t.$)(".iframe-loading-text"), this._iframeLoadingTextTitle = (0, t.$)(".iframe-loading-text .title"), this._iframeLoadingTextDescription = (0, t.$)(".iframe-loading-text .description"), this._previousFocusedElement = null)
            }
            return r(i, [ {
                key: "run", value: function() {
                    return this._bindEvents(), this
                }
            }, {
                key: "_bindEvents", value: function() {
                    var t = this;
                    return t.events.projectShow = new CustomEvent("projectShow"), t.events.projectHide = new CustomEvent("projectHide"), t.config.links.forEach(function(i) {
                        var n = i.querySelector("svg > g.eye");
                        n && t.eyes.push(new e.default ( {
                            el: 
                                i, svg: n.parentElement, eye: n
                        }))
                    }), t._handleLinkClick = t._handleLinkClick.bind(t), t._handleCloseIframe = t._handleCloseIframe.bind(t), t._handleKeyUp = t._handleKeyUp.bind(t), t.config.links.forEach(function(e) {
                        return e.addEventListener("click", t._handleLinkClick)
                    }), t._demoCloseButton.addEventListener("click", t._handleCloseIframe), document.addEventListener("keyup", t._handleKeyUp), t
                }
            }, {
                key: "_handleLinkClick", value: function(e) {
                    e.preventDefault();
                    var t = this, i = e.currentTarget, n = i.href, a = i.dataset.title, r = i.dataset.description;
                    t.element.dispatchEvent(t.events.projectShow), t._previousFocusedElement = document.activeElement, t._iframeLoadingTextTitle.innerHTML = a, t._iframeLoadingTextDescription.innerHTML = r, t._iframeLoader.classList.add("-show"), t._demoCloseButton.focus(), t._iframeLoaderMainLayer.addEventListener("transitionend", function() {
                        t._iframeLoadingText.style.opacity = 1, t._demoWrapper.style.opacity = 0, t._demoWrapper.style.display = "block", t._iframe.src = n, t._iframe.addEventListener("load", function() {
                            t._isActive = !0, t._iframeLoadingText.style.opacity = 0, t._iframeLoader.classList.add("-hide"), t._demoWrapper.style.opacity = 1, t._iframeLoaderSecLayer.addEventListener("transitionend", function() {
                                t._demoWrapper.classList.add("-loaded")
                            }, {
                                once: !0
                            })
                        }, {
                            once: !0
                        })
                    }, {
                        once: !0
                    })
                }
            }, {
                key: "_handleKeyUp", value: function(e) {
                    e = e || window.event, !1 !== this._isActive && 27 == e.keyCode && this._handleCloseIframe()
                }
            }, {
                key: "_handleCloseIframe", value: function() {
                    var e = this;
                    e._isActive = !1, e._iframeLoader.classList.remove("-hide"), e._iframeLoaderMainLayer.addEventListener("transitionend", function() {
                        e._iframeLoader.classList.remove("-show"), e._demoWrapper.style.opacity = 0, e._demoWrapper.style.display = "none", e._demoWrapper.classList.remove("-loaded"), e._iframeLoaderMainLayer.addEventListener("transitionend", function() {
                            e._iframe.src = "", e.element.dispatchEvent(e.events.projectHide), e._previousFocusedElement && e._previousFocusedElement.focus()
                        }, {
                            once: !0
                        })
                    }, {
                        once: !0
                    })
                }
            }, {
                key: "element", get: function() {
                    return this.config.el
                }
            }
            ]), i
        }();
        exports.default = d;
    }, {
        "./FollowingEye": "pGTP",
        "./utils": "tcVT"
    }],
    "wFKc": [function(require, module, exports) {
        "use strict";
        var e = require("./lib/utils"), o = n(require("./lib/HandleProjectsLoad"));
        function n(e) {
            return e && e.__esModule ? e : {
                default: 
                    e
            }
        }
        var l = {};
        l.body = document.body, l.pageTopWave = (0, e.$)(".page-top-wave"), l.projectsHandler = new o.default ( {
            links: 
                (0, e.$$)('.demos a:not([target="_blank"]), .oss a:not([target="_blank"])')
        }).run(), l.lastKnownScrollPosition = 0, l.onScrollTicking = !1, l.scrollHandler = function() {
            l.lastKnownScrollPosition = window.scrollY, l.onScrollTicking || (window.requestAnimationFrame(function() {
                l.handleScrollUpdate(l.lastKnownScrollPosition), l.onScrollTicking = !1
            }), l.onScrollTicking = !0)
        }, l.handleScrollUpdate = function(e) {
            e > 20 ? l.pageTopWave.classList.add("-pause") : l.pageTopWave.classList.remove("-pause")
        }, l.projectsHandler.element.addEventListener("projectShow", function() {
            l.body.classList.add("-prevent-scrolling"), l.pageTopWave.classList.add("-pause")
        }), l.projectsHandler.element.addEventListener("projectHide", function() {
            l.body.classList.remove("-prevent-scrolling"), l.pageTopWave.classList.remove("-pause")
        }), window.addEventListener("scroll", l.scrollHandler), document.documentElement.style.setProperty("--scrollbar-width", "".concat((0, e.getScrollbarWidth)(), "px"));
    }, {
        "./lib/utils": "tcVT",
        "./lib/HandleProjectsLoad": "j9dM"
    }]
}, {}, ["wFKc"], null)//# sourceMappingURL=js.723a7e37.js.map
