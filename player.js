! function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("DPlayer", [], t) : "object" == typeof exports ? exports.DPlayer = t() : e.DPlayer = t()
}(window, (function () {
    return function (e) {
        var t = {};

        function a(n) {
            if (t[n]) return t[n].exports;
            var r = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(r.exports, r, r.exports, a), r.l = !0, r.exports
        }
        return a.m = e, a.c = t, a.d = function (e, t, n) {
            a.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, a.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, a.t = function (e, t) {
            if (1 & t && (e = a(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (a.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
                for (var r in e) a.d(n, r, function (t) {
                    return e[t]
                }.bind(null, r));
            return n
        }, a.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return a.d(t, "a", t), t
        }, a.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, a.p = "/", a(a.s = 57)
    }([function (e, t, a) {
        "use strict";

        function n(e) {
            return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var r = a(6),
            o = Object.prototype.toString;

        function i(e) {
            return "[object Array]" === o.call(e)
        }

        function l(e) {
            return void 0 === e
        }

        function s(e) {
            return null !== e && "object" === n(e)
        }

        function d(e) {
            return "[object Function]" === o.call(e)
        }

        function p(e, t) {
            if (null != e)
                if ("object" !== n(e) && (e = [e]), i(e))
                    for (var a = 0, r = e.length; a < r; a++) t.call(null, e[a], a, e);
                else
                    for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
        }
        e.exports = {
            isArray: i,
            isArrayBuffer: function (e) {
                return "[object ArrayBuffer]" === o.call(e)
            },
            isBuffer: function (e) {
                return null !== e && !l(e) && null !== e.constructor && !l(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            },
            isFormData: function (e) {
                return "undefined" != typeof FormData && e instanceof FormData
            },
            isArrayBufferView: function (e) {
                return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && e.buffer instanceof ArrayBuffer
            },
            isString: function (e) {
                return "string" == typeof e
            },
            isNumber: function (e) {
                return "number" == typeof e
            },
            isObject: s,
            isUndefined: l,
            isDate: function (e) {
                return "[object Date]" === o.call(e)
            },
            isFile: function (e) {
                return "[object File]" === o.call(e)
            },
            isBlob: function (e) {
                return "[object Blob]" === o.call(e)
            },
            isFunction: d,
            isStream: function (e) {
                return s(e) && d(e.pipe)
            },
            isURLSearchParams: function (e) {
                return "undefined" != typeof URLSearchParams && e instanceof URLSearchParams
            },
            isStandardBrowserEnv: function () {
                return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && ("undefined" != typeof window && "undefined" != typeof document)
            },
            forEach: p,
            merge: function e() {
                var t = {};

                function a(a, r) {
                    "object" === n(t[r]) && "object" === n(a) ? t[r] = e(t[r], a) : t[r] = a
                }
                for (var r = 0, o = arguments.length; r < o; r++) p(arguments[r], a);
                return t
            },
            deepMerge: function e() {
                var t = {};

                function a(a, r) {
                    "object" === n(t[r]) && "object" === n(a) ? t[r] = e(t[r], a) : "object" === n(a) ? t[r] = e({}, a) : t[r] = a
                }
                for (var r = 0, o = arguments.length; r < o; r++) p(arguments[r], a);
                return t
            },
            extend: function (e, t, a) {
                return p(t, (function (t, n) {
                    e[n] = a && "function" == typeof t ? r(t, a) : t
                })), e
            },
            trim: function (e) {
                return e.replace(/^\s*/, "").replace(/\s*$/, "")
            }
        }
    }, function (e, t, a) {
        var n = a(14);
        e.exports = function (e) {
            "use strict";
            var t = "",
                a = (e = e || {}).enableSubtitle,
                r = e.subtitle,
                o = e.current,
                i = e.pic,
                l = n.$escape,
                s = e.screenshot,
                d = e.preload,
                p = e.url;
            a = r && "webvtt" === r.type;
            return t += '\n<video\n    class="dplayer-video ', o && (t += "dplayer-video-current"), t += '"\n    webkit-playsinline\n    playsinline\n    ', i && (t += 'poster="', t += l(i), t += '"'), t += "\n    ", (s || a) && (t += 'crossorigin="anonymous"'), t += "\n    ", d && (t += 'preload="', t += l(d), t += '"'), t += "\n    ", p && (t += 'src="', t += l(p), t += '"'), t += "\n    >\n    ", a && (t += '\n    <track kind="metadata" default src="', t += l(r.url), t += '"></track>\n    '), t += "\n</video>"
        }
    }, function (e, t, a) {
        e.exports = a(40)
    }, function (e, t, a) {
        "use strict";
        e.exports = function (e) {
            var t = [];
            return t.toString = function () {
                return this.map((function (t) {
                    var a = function (e, t) {
                        var a = e[1] || "",
                            n = e[3];
                        if (!n) return a;
                        if (t && "function" == typeof btoa) {
                            var r = (i = n, l = btoa(unescape(encodeURIComponent(JSON.stringify(i)))), s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l), "/*# ".concat(s, " */")),
                                o = n.sources.map((function (e) {
                                    return "/*# sourceURL=".concat(n.sourceRoot || "").concat(e, " */")
                                }));
                            return [a].concat(o).concat([r]).join("\n")
                        }
                        var i, l, s;
                        return [a].join("\n")
                    }(t, e);
                    return t[2] ? "@media ".concat(t[2], " {").concat(a, "}") : a
                })).join("")
            }, t.i = function (e, a, n) {
                "string" == typeof e && (e = [
                    [null, e, ""]
                ]);
                var r = {};
                if (n)
                    for (var o = 0; o < this.length; o++) {
                        var i = this[o][0];
                        null != i && (r[i] = !0)
                    }
                for (var l = 0; l < e.length; l++) {
                    var s = [].concat(e[l]);
                    n && r[s[0]] || (a && (s[2] ? s[2] = "".concat(a, " and ").concat(s[2]) : s[2] = a), t.push(s))
                }
            }, t
        }
    }, function (e, t) {
        function a(e) {
            return (a = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var n;
        n = function () {
            return this
        }();
        try {
            n = n || new Function("return this")()
        } catch (e) {
            "object" === ("undefined" == typeof window ? "undefined" : a(window)) && (n = window)
        }
        e.exports = n
    }, function (e, t) {
        var a, n, r = e.exports = {};

        function o() {
            throw new Error("setTimeout has not been defined")
        }

        function i() {
            throw new Error("clearTimeout has not been defined")
        }

        function l(e) {
            if (a === setTimeout) return setTimeout(e, 0);
            if ((a === o || !a) && setTimeout) return a = setTimeout, setTimeout(e, 0);
            try {
                return a(e, 0)
            } catch (t) {
                try {
                    return a.call(null, e, 0)
                } catch (t) {
                    return a.call(this, e, 0)
                }
            }
        } ! function () {
            try {
                a = "function" == typeof setTimeout ? setTimeout : o
            } catch (e) {
                a = o
            }
            try {
                n = "function" == typeof clearTimeout ? clearTimeout : i
            } catch (e) {
                n = i
            }
        }();
        var s, d = [],
            p = !1,
            c = -1;

        function u() {
            p && s && (p = !1, s.length ? d = s.concat(d) : c = -1, d.length && y())
        }

        function y() {
            if (!p) {
                var e = l(u);
                p = !0;
                for (var t = d.length; t;) {
                    for (s = d, d = []; ++c < t;) s && s[c].run();
                    c = -1, t = d.length
                }
                s = null, p = !1,
                    function (e) {
                        if (n === clearTimeout) return clearTimeout(e);
                        if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                        try {
                            n(e)
                        } catch (t) {
                            try {
                                return n.call(null, e)
                            } catch (t) {
                                return n.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function m(e, t) {
            this.fun = e, this.array = t
        }

        function h() { }
        r.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var a = 1; a < arguments.length; a++) t[a - 1] = arguments[a];
            d.push(new m(e, t)), 1 !== d.length || p || l(y)
        }, m.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = h, r.addListener = h, r.once = h, r.off = h, r.removeListener = h, r.removeAllListeners = h, r.emit = h, r.prependListener = h, r.prependOnceListener = h, r.listeners = function (e) {
            return []
        }, r.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, r.cwd = function () {
            return "/"
        }, r.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, r.umask = function () {
            return 0
        }
    }, function (e, t, a) {
        "use strict";
        e.exports = function (e, t) {
            return function () {
                for (var a = new Array(arguments.length), n = 0; n < a.length; n++) a[n] = arguments[n];
                return e.apply(t, a)
            }
        }
    }, function (e, t, a) {
        "use strict";
        var n = a(0);

        function r(e) {
            return encodeURIComponent(e).replace(/%40/gi, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
        }
        e.exports = function (e, t, a) {
            if (!t) return e;
            var o;
            if (a) o = a(t);
            else if (n.isURLSearchParams(t)) o = t.toString();
            else {
                var i = [];
                n.forEach(t, (function (e, t) {
                    null != e && (n.isArray(e) ? t += "[]" : e = [e], n.forEach(e, (function (e) {
                        n.isDate(e) ? e = e.toISOString() : n.isObject(e) && (e = JSON.stringify(e)), i.push(r(t) + "=" + r(e))
                    })))
                })), o = i.join("&")
            }
            if (o) {
                var l = e.indexOf("#"); - 1 !== l && (e = e.slice(0, l)), e += (-1 === e.indexOf("?") ? "?" : "&") + o
            }
            return e
        }
    }, function (e, t, a) {
        "use strict";
        e.exports = function (e) {
            return !(!e || !e.__CANCEL__)
        }
    }, function (e, t, a) {
        "use strict";
        (function (t) {
            var n = a(0),
                r = a(45),
                o = {
                    "Content-Type": "application/x-www-form-urlencoded"
                };

            function i(e, t) {
                !n.isUndefined(e) && n.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
            }
            var l, s = {
                adapter: ("undefined" != typeof XMLHttpRequest ? l = a(10) : void 0 !== t && "[object process]" === Object.prototype.toString.call(t) && (l = a(10)), l),
                transformRequest: [function (e, t) {
                    return r(t, "Accept"), r(t, "Content-Type"), n.isFormData(e) || n.isArrayBuffer(e) || n.isBuffer(e) || n.isStream(e) || n.isFile(e) || n.isBlob(e) ? e : n.isArrayBufferView(e) ? e.buffer : n.isURLSearchParams(e) ? (i(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString()) : n.isObject(e) ? (i(t, "application/json;charset=utf-8"), JSON.stringify(e)) : e
                }],
                transformResponse: [function (e) {
                    if ("string" == typeof e) try {
                        e = JSON.parse(e)
                    } catch (e) { }
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                validateStatus: function (e) {
                    return e >= 200 && e < 300
                }
            };
            s.headers = {
                common: {
                    Accept: "application/json, text/plain, */*"
                }
            }, n.forEach(["delete", "get", "head"], (function (e) {
                s.headers[e] = {}
            })), n.forEach(["post", "put", "patch"], (function (e) {
                s.headers[e] = n.merge(o)
            })), e.exports = s
        }).call(this, a(5))
    }, function (e, t, a) {
        "use strict";
        var n = a(0),
            r = a(46),
            o = a(7),
            i = a(48),
            l = a(51),
            s = a(52),
            d = a(11);
        e.exports = function (e) {
            return new Promise((function (t, p) {
                var c = e.data,
                    u = e.headers;
                n.isFormData(c) && delete u["Content-Type"];
                var y = new XMLHttpRequest;
                if (e.auth) {
                    var m = e.auth.username || "",
                        h = e.auth.password || "";
                    u.Authorization = "Basic " + btoa(m + ":" + h)
                }
                var f = i(e.baseURL, e.url);
                if (y.open(e.method.toUpperCase(), o(f, e.params, e.paramsSerializer), !0), y.timeout = e.timeout, y.onreadystatechange = function () {
                    if (y && 4 === y.readyState && (0 !== y.status || y.responseURL && 0 === y.responseURL.indexOf("file:"))) {
                        var a = "getAllResponseHeaders" in y ? l(y.getAllResponseHeaders()) : null,
                            n = {
                                data: e.responseType && "text" !== e.responseType ? y.response : y.responseText,
                                status: y.status,
                                statusText: y.statusText,
                                headers: a,
                                config: e,
                                request: y
                            };
                        r(t, p, n), y = null
                    }
                }, y.onabort = function () {
                    y && (p(d("Request aborted", e, "ECONNABORTED", y)), y = null)
                }, y.onerror = function () {
                    p(d("Network Error", e, null, y)), y = null
                }, y.ontimeout = function () {
                    var t = "timeout of " + e.timeout + "ms exceeded";
                    e.timeoutErrorMessage && (t = e.timeoutErrorMessage), p(d(t, e, "ECONNABORTED", y)), y = null
                }, n.isStandardBrowserEnv()) {
                    var b = a(53),
                        v = (e.withCredentials || s(f)) && e.xsrfCookieName ? b.read(e.xsrfCookieName) : void 0;
                    v && (u[e.xsrfHeaderName] = v)
                }
                if ("setRequestHeader" in y && n.forEach(u, (function (e, t) {
                    void 0 === c && "content-type" === t.toLowerCase() ? delete u[t] : y.setRequestHeader(t, e)
                })), n.isUndefined(e.withCredentials) || (y.withCredentials = !!e.withCredentials), e.responseType) try {
                    y.responseType = e.responseType
                } catch (t) {
                    if ("json" !== e.responseType) throw t
                }
                "function" == typeof e.onDownloadProgress && y.addEventListener("progress", e.onDownloadProgress), "function" == typeof e.onUploadProgress && y.upload && y.upload.addEventListener("progress", e.onUploadProgress), e.cancelToken && e.cancelToken.promise.then((function (e) {
                    y && (y.abort(), p(e), y = null)
                })), void 0 === c && (c = null), y.send(c)
            }))
        }
    }, function (e, t, a) {
        "use strict";
        var n = a(47);
        e.exports = function (e, t, a, r, o) {
            var i = new Error(e);
            return n(i, t, a, r, o)
        }
    }, function (e, t, a) {
        "use strict";
        var n = a(0);
        e.exports = function (e, t) {
            t = t || {};
            var a = {},
                r = ["url", "method", "params", "data"],
                o = ["headers", "auth", "proxy"],
                i = ["baseURL", "url", "transformRequest", "transformResponse", "paramsSerializer", "timeout", "withCredentials", "adapter", "responseType", "xsrfCookieName", "xsrfHeaderName", "onUploadProgress", "onDownloadProgress", "maxContentLength", "validateStatus", "maxRedirects", "httpAgent", "httpsAgent", "cancelToken", "socketPath"];
            n.forEach(r, (function (e) {
                void 0 !== t[e] && (a[e] = t[e])
            })), n.forEach(o, (function (r) {
                n.isObject(t[r]) ? a[r] = n.deepMerge(e[r], t[r]) : void 0 !== t[r] ? a[r] = t[r] : n.isObject(e[r]) ? a[r] = n.deepMerge(e[r]) : void 0 !== e[r] && (a[r] = e[r])
            })), n.forEach(i, (function (n) {
                void 0 !== t[n] ? a[n] = t[n] : void 0 !== e[n] && (a[n] = e[n])
            }));
            var l = r.concat(o).concat(i),
                s = Object.keys(t).filter((function (e) {
                    return -1 === l.indexOf(e)
                }));
            return n.forEach(s, (function (n) {
                void 0 !== t[n] ? a[n] = t[n] : void 0 !== e[n] && (a[n] = e[n])
            })), a
        }
    }, function (e, t, a) {
        "use strict";

        function n(e) {
            this.message = e
        }
        n.prototype.toString = function () {
            return "Cancel" + (this.message ? ": " + this.message : "")
        }, n.prototype.__CANCEL__ = !0, e.exports = n
    }, function (e, t, a) {
        "use strict";
        e.exports = a(56)
    }, function (e, t, a) {
        "use strict";
        (function (e) {
            var n = a(16);

            function r(e) {
                return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                    return typeof e
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                })(e)
            }
            var o = setTimeout;

            function i(e) {
                return Boolean(e && void 0 !== e.length)
            }

            function l() { }

            function s(e) {
                if (!(this instanceof s)) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof e) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], m(e, this)
            }

            function d(e, t) {
                for (; 3 === e._state;) e = e._value;
                0 !== e._state ? (e._handled = !0, s._immediateFn((function () {
                    var a = 1 === e._state ? t.onFulfilled : t.onRejected;
                    if (null !== a) {
                        var n;
                        try {
                            n = a(e._value)
                        } catch (e) {
                            return void c(t.promise, e)
                        }
                        p(t.promise, n)
                    } else (1 === e._state ? p : c)(t.promise, e._value)
                }))) : e._deferreds.push(t)
            }

            function p(e, t) {
                try {
                    if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
                    if (t && ("object" === r(t) || "function" == typeof t)) {
                        var a = t.then;
                        if (t instanceof s) return e._state = 3, e._value = t, void u(e);
                        if ("function" == typeof a) return void m((n = a, o = t, function () {
                            n.apply(o, arguments)
                        }), e)
                    }
                    e._state = 1, e._value = t, u(e)
                } catch (t) {
                    c(e, t)
                }
                var n, o
            }

            function c(e, t) {
                e._state = 2, e._value = t, u(e)
            }

            function u(e) {
                2 === e._state && 0 === e._deferreds.length && s._immediateFn((function () {
                    e._handled || s._unhandledRejectionFn(e._value)
                }));
                for (var t = 0, a = e._deferreds.length; t < a; t++) d(e, e._deferreds[t]);
                e._deferreds = null
            }

            function y(e, t, a) {
                this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = a
            }

            function m(e, t) {
                var a = !1;
                try {
                    e((function (e) {
                        a || (a = !0, p(t, e))
                    }), (function (e) {
                        a || (a = !0, c(t, e))
                    }))
                } catch (e) {
                    if (a) return;
                    a = !0, c(t, e)
                }
            }
            s.prototype.catch = function (e) {
                return this.then(null, e)
            }, s.prototype.then = function (e, t) {
                var a = new this.constructor(l);
                return d(this, new y(e, t, a)), a
            }, s.prototype.finally = n.a, s.all = function (e) {
                return new s((function (t, a) {
                    if (!i(e)) return a(new TypeError("Promise.all accepts an array"));
                    var n = Array.prototype.slice.call(e);
                    if (0 === n.length) return t([]);
                    var o = n.length;

                    function l(e, i) {
                        try {
                            if (i && ("object" === r(i) || "function" == typeof i)) {
                                var s = i.then;
                                if ("function" == typeof s) return void s.call(i, (function (t) {
                                    l(e, t)
                                }), a)
                            }
                            n[e] = i, 0 == --o && t(n)
                        } catch (e) {
                            a(e)
                        }
                    }
                    for (var s = 0; s < n.length; s++) l(s, n[s])
                }))
            }, s.resolve = function (e) {
                return e && "object" === r(e) && e.constructor === s ? e : new s((function (t) {
                    t(e)
                }))
            }, s.reject = function (e) {
                return new s((function (t, a) {
                    a(e)
                }))
            }, s.race = function (e) {
                return new s((function (t, a) {
                    if (!i(e)) return a(new TypeError("Promise.race accepts an array"));
                    for (var n = 0, r = e.length; n < r; n++) s.resolve(e[n]).then(t, a)
                }))
            }, s._immediateFn = "function" == typeof e && function (t) {
                e(t)
            } || function (e) {
                o(e, 0)
            }, s._unhandledRejectionFn = function (e) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
            }, t.a = s
        }).call(this, a(38).setImmediate)
    }, function (e, t, a) {
        "use strict";
        t.a = function (e) {
            var t = this.constructor;
            return this.then((function (a) {
                return t.resolve(e()).then((function () {
                    return a
                }))
            }), (function (a) {
                return t.resolve(e()).then((function () {
                    return t.reject(a)
                }))
            }))
        }
    }, function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 16 32"><path d="M15.552 15.168q0.448 0.32 0.448 0.832 0 0.448-0.448 0.768l-13.696 8.512q-0.768 0.512-1.312 0.192t-0.544-1.28v-16.448q0-0.96 0.544-1.28t1.312 0.192z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 17 32"><path d="M14.080 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048zM2.88 4.8q2.88 0 2.88 2.048v18.24q0 2.112-2.88 2.112t-2.88-2.112v-18.24q0-2.048 2.88-2.048z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528zM25.152 16q0 2.72-1.536 5.056t-4 3.36q-0.256 0.096-0.448 0.096-0.48 0-0.832-0.352t-0.32-0.8q0-0.704 0.672-1.056 1.024-0.512 1.376-0.8 1.312-0.96 2.048-2.4t0.736-3.104-0.736-3.104-2.048-2.4q-0.352-0.288-1.376-0.8-0.672-0.352-0.672-1.056 0-0.448 0.32-0.8t0.8-0.352q0.224 0 0.48 0.096 2.496 1.056 4 3.36t1.536 5.056z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8zM20.576 16q0 1.344-0.768 2.528t-2.016 1.664q-0.16 0.096-0.448 0.096-0.448 0-0.8-0.32t-0.32-0.832q0-0.384 0.192-0.64t0.544-0.448 0.608-0.384 0.512-0.64 0.192-1.024-0.192-1.024-0.512-0.64-0.608-0.384-0.544-0.448-0.192-0.64q0-0.48 0.32-0.832t0.8-0.32q0.288 0 0.448 0.096 1.248 0.48 2.016 1.664t0.768 2.528z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 21 32"><path d="M13.728 6.272v19.456q0 0.448-0.352 0.8t-0.8 0.32-0.8-0.32l-5.952-5.952h-4.672q-0.48 0-0.8-0.352t-0.352-0.8v-6.848q0-0.48 0.352-0.8t0.8-0.352h4.672l5.952-5.952q0.32-0.32 0.8-0.32t0.8 0.32 0.352 0.8z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M6.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v4h4c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333zM30.667 28h-5.333c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h4v-4c0-0.8 0.533-1.333 1.333-1.333s1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM30.667 12c-0.8 0-1.333-0.533-1.333-1.333v-4h-4c-0.8 0-1.333-0.533-1.333-1.333s0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333v5.333c0 0.8-0.533 1.333-1.333 1.333zM1.333 12c-0.8 0-1.333-0.533-1.333-1.333v-5.333c0-0.8 0.533-1.333 1.333-1.333h5.333c0.8 0 1.333 0.533 1.333 1.333s-0.533 1.333-1.333 1.333h-4v4c0 0.8-0.533 1.333-1.333 1.333z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 33"><path d="M24.965 24.38h-18.132c-1.366 0-2.478-1.113-2.478-2.478v-11.806c0-1.364 1.111-2.478 2.478-2.478h18.132c1.366 0 2.478 1.113 2.478 2.478v11.806c0 1.364-1.11 2.478-2.478 2.478zM6.833 10.097v11.806h18.134l-0.002-11.806h-18.132zM2.478 28.928h5.952c0.684 0 1.238-0.554 1.238-1.239 0-0.684-0.554-1.238-1.238-1.238h-5.952v-5.802c0-0.684-0.554-1.239-1.238-1.239s-1.239 0.556-1.239 1.239v5.802c0 1.365 1.111 2.478 2.478 2.478zM30.761 19.412c-0.684 0-1.238 0.554-1.238 1.238v5.801h-5.951c-0.686 0-1.239 0.554-1.239 1.238 0 0.686 0.554 1.239 1.239 1.239h5.951c1.366 0 2.478-1.111 2.478-2.478v-5.801c0-0.683-0.554-1.238-1.239-1.238zM0 5.55v5.802c0 0.683 0.554 1.238 1.238 1.238s1.238-0.555 1.238-1.238v-5.802h5.952c0.684 0 1.238-0.554 1.238-1.238s-0.554-1.238-1.238-1.238h-5.951c-1.366-0.001-2.478 1.111-2.478 2.476zM32 11.35v-5.801c0-1.365-1.11-2.478-2.478-2.478h-5.951c-0.686 0-1.239 0.554-1.239 1.238s0.554 1.238 1.239 1.238h5.951v5.801c0 0.683 0.554 1.237 1.238 1.237 0.686 0.002 1.239-0.553 1.239-1.236z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 28"><path d="M28.633 17.104c0.035 0.21 0.026 0.463-0.026 0.76s-0.14 0.598-0.262 0.904c-0.122 0.306-0.271 0.581-0.445 0.825s-0.367 0.419-0.576 0.524c-0.209 0.105-0.393 0.157-0.55 0.157s-0.332-0.035-0.524-0.105c-0.175-0.052-0.393-0.1-0.655-0.144s-0.528-0.052-0.799-0.026c-0.271 0.026-0.541 0.083-0.812 0.17s-0.502 0.236-0.694 0.445c-0.419 0.437-0.664 0.934-0.734 1.493s0.009 1.092 0.236 1.598c0.175 0.349 0.148 0.699-0.079 1.048-0.105 0.14-0.271 0.284-0.498 0.432s-0.476 0.284-0.747 0.406-0.555 0.218-0.851 0.288c-0.297 0.070-0.559 0.105-0.786 0.105-0.157 0-0.306-0.061-0.445-0.183s-0.236-0.253-0.288-0.393h-0.026c-0.192-0.541-0.52-1.009-0.982-1.402s-1-0.589-1.611-0.589c-0.594 0-1.131 0.197-1.611 0.589s-0.816 0.851-1.009 1.375c-0.087 0.21-0.218 0.362-0.393 0.458s-0.367 0.144-0.576 0.144c-0.244 0-0.52-0.044-0.825-0.131s-0.611-0.197-0.917-0.327c-0.306-0.131-0.581-0.284-0.825-0.458s-0.428-0.349-0.55-0.524c-0.087-0.122-0.135-0.266-0.144-0.432s0.057-0.397 0.197-0.694c0.192-0.402 0.266-0.86 0.223-1.375s-0.266-0.991-0.668-1.428c-0.244-0.262-0.541-0.432-0.891-0.511s-0.681-0.109-0.995-0.092c-0.367 0.017-0.742 0.087-1.127 0.21-0.244 0.070-0.489 0.052-0.734-0.052-0.192-0.070-0.371-0.231-0.537-0.485s-0.314-0.533-0.445-0.838c-0.131-0.306-0.231-0.62-0.301-0.943s-0.087-0.59-0.052-0.799c0.052-0.384 0.227-0.629 0.524-0.734 0.524-0.21 0.995-0.555 1.415-1.035s0.629-1.017 0.629-1.611c0-0.611-0.21-1.144-0.629-1.598s-0.891-0.786-1.415-0.996c-0.157-0.052-0.288-0.179-0.393-0.38s-0.157-0.406-0.157-0.616c0-0.227 0.035-0.48 0.105-0.76s0.162-0.55 0.275-0.812 0.244-0.502 0.393-0.72c0.148-0.218 0.31-0.38 0.485-0.485 0.14-0.087 0.275-0.122 0.406-0.105s0.275 0.052 0.432 0.105c0.524 0.21 1.070 0.275 1.637 0.197s1.070-0.327 1.506-0.747c0.21-0.209 0.362-0.467 0.458-0.773s0.157-0.607 0.183-0.904c0.026-0.297 0.026-0.568 0-0.812s-0.048-0.419-0.065-0.524c-0.035-0.105-0.066-0.227-0.092-0.367s-0.013-0.262 0.039-0.367c0.105-0.244 0.293-0.458 0.563-0.642s0.563-0.336 0.878-0.458c0.314-0.122 0.62-0.214 0.917-0.275s0.533-0.092 0.707-0.092c0.227 0 0.406 0.074 0.537 0.223s0.223 0.301 0.275 0.458c0.192 0.471 0.507 0.886 0.943 1.244s0.952 0.537 1.546 0.537c0.611 0 1.153-0.17 1.624-0.511s0.803-0.773 0.996-1.297c0.070-0.14 0.179-0.284 0.327-0.432s0.301-0.223 0.458-0.223c0.244 0 0.511 0.035 0.799 0.105s0.572 0.166 0.851 0.288c0.279 0.122 0.537 0.279 0.773 0.472s0.423 0.402 0.563 0.629c0.087 0.14 0.113 0.293 0.079 0.458s-0.070 0.284-0.105 0.354c-0.227 0.506-0.297 1.039-0.21 1.598s0.341 1.048 0.76 1.467c0.419 0.419 0.934 0.651 1.546 0.694s1.179-0.057 1.703-0.301c0.14-0.087 0.31-0.122 0.511-0.105s0.371 0.096 0.511 0.236c0.262 0.244 0.493 0.616 0.694 1.113s0.336 1 0.406 1.506c0.035 0.297-0.013 0.528-0.144 0.694s-0.266 0.275-0.406 0.327c-0.542 0.192-1.004 0.528-1.388 1.009s-0.576 1.026-0.576 1.637c0 0.594 0.162 1.113 0.485 1.559s0.747 0.764 1.27 0.956c0.122 0.070 0.227 0.14 0.314 0.21 0.192 0.157 0.323 0.358 0.393 0.602v0zM16.451 19.462c0.786 0 1.528-0.149 2.227-0.445s1.305-0.707 1.821-1.231c0.515-0.524 0.921-1.131 1.218-1.821s0.445-1.428 0.445-2.214c0-0.786-0.148-1.524-0.445-2.214s-0.703-1.292-1.218-1.808c-0.515-0.515-1.122-0.921-1.821-1.218s-1.441-0.445-2.227-0.445c-0.786 0-1.524 0.148-2.214 0.445s-1.292 0.703-1.808 1.218c-0.515 0.515-0.921 1.118-1.218 1.808s-0.445 1.428-0.445 2.214c0 0.786 0.149 1.524 0.445 2.214s0.703 1.297 1.218 1.821c0.515 0.524 1.118 0.934 1.808 1.231s1.428 0.445 2.214 0.445v0z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M22 16l-10.105-10.6-1.895 1.987 8.211 8.613-8.211 8.612 1.895 1.988 8.211-8.613z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.128 0.38h-22.553c-2.336 0-4.229 1.825-4.229 4.076v16.273c0 2.251 1.893 4.076 4.229 4.076h4.229v-2.685h8.403l-8.784 8.072 1.566 1.44 7.429-6.827h9.71c2.335 0 4.229-1.825 4.229-4.076v-16.273c0-2.252-1.894-4.076-4.229-4.076zM28.538 19.403c0 1.5-1.262 2.717-2.819 2.717h-8.36l-0.076-0.070-0.076 0.070h-11.223c-1.557 0-2.819-1.217-2.819-2.717v-13.589c0-1.501 1.262-2.718 2.819-2.718h19.734c1.557 0 2.819-0.141 2.819 1.359v14.947zM9.206 10.557c-1.222 0-2.215 0.911-2.215 2.036s0.992 2.035 2.215 2.035c1.224 0 2.216-0.911 2.216-2.035s-0.992-2.036-2.216-2.036zM22.496 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.224 0 2.215-0.911 2.215-2.035s-0.991-2.036-2.215-2.036zM15.852 10.557c-1.224 0-2.215 0.911-2.215 2.036s0.991 2.035 2.215 2.035c1.222 0 2.215-0.911 2.215-2.035s-0.992-2.036-2.215-2.036z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M27.090 0.131h-22.731c-2.354 0-4.262 1.839-4.262 4.109v16.401c0 2.269 1.908 4.109 4.262 4.109h4.262v-2.706h8.469l-8.853 8.135 1.579 1.451 7.487-6.88h9.787c2.353 0 4.262-1.84 4.262-4.109v-16.401c0-2.27-1.909-4.109-4.262-4.109v0zM28.511 19.304c0 1.512-1.272 2.738-2.841 2.738h-8.425l-0.076-0.070-0.076 0.070h-11.311c-1.569 0-2.841-1.226-2.841-2.738v-13.696c0-1.513 1.272-2.739 2.841-2.739h19.889c1.569 0 2.841-0.142 2.841 1.37v15.064z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M13.725 30l3.9-5.325-3.9-1.125v6.45zM0 17.5l11.050 3.35 13.6-11.55-10.55 12.425 11.8 3.65 6.1-23.375-32 15.5z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M19.357 2.88c1.749 0 3.366 0.316 4.851 0.946 1.485 0.632 2.768 1.474 3.845 2.533s1.922 2.279 2.532 3.661c0.611 1.383 0.915 2.829 0.915 4.334 0 1.425-0.304 2.847-0.915 4.271-0.611 1.425-1.587 2.767-2.928 4.028-0.855 0.813-1.811 1.607-2.869 2.38s-2.136 1.465-3.233 2.075c-1.099 0.61-2.198 1.098-3.296 1.465-1.098 0.366-2.115 0.549-3.051 0.549-1.343 0-2.441-0.438-3.296-1.311-0.854-0.876-1.281-2.41-1.281-4.608 0-0.366 0.020-0.773 0.060-1.221s0.062-0.895 0.062-1.343c0-0.773-0.183-1.353-0.55-1.738-0.366-0.387-0.793-0.58-1.281-0.58-0.652 0-1.21 0.295-1.678 0.886s-0.926 1.23-1.373 1.921c-0.447 0.693-0.905 1.334-1.372 1.923s-1.028 0.886-1.679 0.886c-0.529 0-1.048-0.427-1.556-1.282s-0.763-2.259-0.763-4.212c0-2.197 0.529-4.241 1.587-6.133s2.462-3.529 4.21-4.912c1.75-1.383 3.762-2.471 6.041-3.264 2.277-0.796 4.617-1.212 7.018-1.253zM7.334 15.817c0.569 0 1.047-0.204 1.434-0.611s0.579-0.875 0.579-1.404c0-0.569-0.193-1.047-0.579-1.434s-0.864-0.579-1.434-0.579c-0.529 0-0.987 0.193-1.373 0.579s-0.58 0.864-0.58 1.434c0 0.53 0.194 0.998 0.58 1.404 0.388 0.407 0.845 0.611 1.373 0.611zM12.216 11.79c0.691 0 1.292-0.254 1.8-0.763s0.762-1.107 0.762-1.8c0-0.732-0.255-1.343-0.762-1.831-0.509-0.489-1.109-0.732-1.8-0.732-0.732 0-1.342 0.244-1.831 0.732-0.488 0.488-0.732 1.098-0.732 1.831 0 0.693 0.244 1.292 0.732 1.8s1.099 0.763 1.831 0.763zM16.366 25.947c0.692 0 1.282-0.214 1.77-0.64s0.732-0.987 0.732-1.678-0.244-1.261-0.732-1.709c-0.489-0.448-1.078-0.671-1.77-0.671-0.65 0-1.21 0.223-1.678 0.671s-0.702 1.018-0.702 1.709c0 0.692 0.234 1.25 0.702 1.678s1.027 0.64 1.678 0.64zM19.113 9.592c0.651 0 1.129-0.203 1.433-0.611 0.305-0.406 0.459-0.874 0.459-1.404 0-0.488-0.154-0.947-0.459-1.373-0.304-0.427-0.782-0.641-1.433-0.641-0.529 0-1.008 0.193-1.434 0.58s-0.64 0.865-0.64 1.434c0 0.571 0.213 1.049 0.64 1.434 0.427 0.389 0.905 0.581 1.434 0.581zM24.848 12.826c0.57 0 1.067-0.213 1.495-0.64 0.427-0.427 0.64-0.947 0.64-1.556 0-0.57-0.214-1.068-0.64-1.495-0.428-0.427-0.927-0.64-1.495-0.64-0.611 0-1.129 0.213-1.555 0.64-0.428 0.427-0.642 0.926-0.642 1.495 0 0.611 0.213 1.129 0.642 1.556s0.947 0.64 1.555 0.64z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M16 23c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6zM16 13c-2.206 0-4 1.794-4 4s1.794 4 4 4c2.206 0 4-1.794 4-4s-1.794-4-4-4zM27 28h-22c-1.654 0-3-1.346-3-3v-16c0-1.654 1.346-3 3-3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1h-3c-0.551 0-1 0.449-1 1v16c0 0.552 0.449 1 1 1h22c0.552 0 1-0.448 1-1v-16c0-0.551-0.448-1-1-1h-11c-0.552 0-1-0.448-1-1s0.448-1 1-1h11c1.654 0 3 1.346 3 3v16c0 1.654-1.346 3-3 3zM24 10.5c0 0.828 0.672 1.5 1.5 1.5s1.5-0.672 1.5-1.5c0-0.828-0.672-1.5-1.5-1.5s-1.5 0.672-1.5 1.5zM15 4c0 0.552-0.448 1-1 1h-4c-0.552 0-1-0.448-1-1v0c0-0.552 0.448-1 1-1h4c0.552 0 1 0.448 1 1v0z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32"><path d="M26.667 5.333h-21.333c-0 0-0.001 0-0.001 0-1.472 0-2.666 1.194-2.666 2.666 0 0 0 0.001 0 0.001v-0 16c0 0 0 0.001 0 0.001 0 1.472 1.194 2.666 2.666 2.666 0 0 0.001 0 0.001 0h21.333c0 0 0.001 0 0.001 0 1.472 0 2.666-1.194 2.666-2.666 0-0 0-0.001 0-0.001v0-16c0-0 0-0.001 0-0.001 0-1.472-1.194-2.666-2.666-2.666-0 0-0.001 0-0.001 0h0zM5.333 16h5.333v2.667h-5.333v-2.667zM18.667 24h-13.333v-2.667h13.333v2.667zM26.667 24h-5.333v-2.667h5.333v2.667zM26.667 18.667h-13.333v-2.667h13.333v2.667z"></path></svg>'
    }, function (e, t) {
        e.exports = '<svg version="1.1" viewBox="0 0 22 22"><svg x="7" y="1"><circle class="diplayer-loading-dot diplayer-loading-dot-0" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-1" cx="4" cy="4" r="2"></circle></svg><svg x="13" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-2" cx="4" cy="4" r="2"></circle></svg><svg x="11" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-3" cx="4" cy="4" r="2"></circle></svg><svg x="7" y="13"><circle class="diplayer-loading-dot diplayer-loading-dot-4" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="11"><circle class="diplayer-loading-dot diplayer-loading-dot-5" cx="4" cy="4" r="2"></circle></svg><svg x="1" y="7"><circle class="diplayer-loading-dot diplayer-loading-dot-6" cx="4" cy="4" r="2"></circle></svg><svg x="3" y="3"><circle class="diplayer-loading-dot diplayer-loading-dot-7" cx="4" cy="4" r="2"></circle></svg></svg>'
    }, function (e, t, a) {
        var n = a(14);
        e.exports = function (e) {
            "use strict";
            e = e || {};
            var t = "",
                r = (arguments[1], function (e) {
                    return t += e
                }),
                o = e.video,
                i = e.options,
                l = n.$escape,
                s = e.tran,
                d = e.icons,
                p = e.index,
                c = n.$each;
            e.$value, e.$index;
            return t += '<div class="dplayer-mask"></div>\n<div class="dplayer-video-wrap">\n    ', r(a(1)(o)), t += "\n    ", i.logo && (t += '\n    <div class="dplayer-logo">\n        <img src="', t += l(i.logo), t += '">\n    </div>\n    '), t += '\n    <div class="dplayer-danmaku"', i.danmaku && i.danmaku.bottm && (t += ' style="margin-bottom:', t += l(i.danmaku.bottm), t += '"'), t += '>\n        <div class="dplayer-danmaku-item dplayer-danmaku-item--demo"></div>\n    </div>\n    <div class="dplayer-subtitle"></div>\n    <div class="dplayer-bezel">\n        <span class="dplayer-bezel-icon"></span>\n        ', i.danmaku && (t += '\n        <span class="dplayer-danloading">', t += l(s("Danmaku is loading")), t += "</span>\n        "), t += '\n        <span class="diplayer-loading-icon">', t += d.loading, t += '</span>\n    </div>\n</div>\n<div class="dplayer-controller-mask"></div>\n<div class="dplayer-controller">\n    <div class="dplayer-icons dplayer-comment-box">\n        <button class="dplayer-icon dplayer-comment-setting-icon" data-balloon="', t += l(s("Setting")), t += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', t += d.pallette, t += '</span>\n        </button>\n        <div class="dplayer-comment-setting-box">\n            <div class="dplayer-comment-setting-color">\n                <div class="dplayer-comment-setting-title">', t += l(s("Set danmaku color")), t += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', t += l(p), t += '" value="#fff" checked>\n                    <span style="background: #fff;"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', t += l(p), t += '" value="#e54256">\n                    <span style="background: #e54256"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', t += l(p), t += '" value="#ffe133">\n                    <span style="background: #ffe133"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', t += l(p), t += '" value="#64DD17">\n                    <span style="background: #64DD17"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', t += l(p), t += '" value="#39ccff">\n                    <span style="background: #39ccff"></span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-color-', t += l(p), t += '" value="#D500F9">\n                    <span style="background: #D500F9"></span>\n                </label>\n            </div>\n            <div class="dplayer-comment-setting-type">\n                <div class="dplayer-comment-setting-title">', t += l(s("Set danmaku type")), t += '</div>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-', t += l(p), t += '" value="1">\n                    <span>', t += l(s("Top")), t += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-', t += l(p), t += '" value="0" checked>\n                    <span>', t += l(s("Rolling")), t += '</span>\n                </label>\n                <label>\n                    <input type="radio" name="dplayer-danmaku-type-', t += l(p), t += '" value="2">\n                    <span>', t += l(s("Bottom")), t += '</span>\n                </label>\n            </div>\n        </div>\n        <input class="dplayer-comment-input" type="text" placeholder="', t += l(s("Input danmaku, hit Enter")), t += '" maxlength="30">\n        <button class="dplayer-icon dplayer-send-icon" data-balloon="', t += l(s("Send")), t += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', t += d.send, t += '</span>\n        </button>\n    </div>\n    <div class="dplayer-icons dplayer-icons-left">\n        <button class="dplayer-icon dplayer-play-icon">\n            <span class="dplayer-icon-content">', t += d.play, t += '</span>\n        </button>\n        <div class="dplayer-volume">\n            <button class="dplayer-icon dplayer-volume-icon">\n                <span class="dplayer-icon-content">', t += d.volumeDown, t += '</span>\n            </button>\n            <div class="dplayer-volume-bar-wrap" data-balloon-pos="up">\n                <div class="dplayer-volume-bar">\n                    <div class="dplayer-volume-bar-inner" style="background: ', t += l(i.theme), t += ';">\n                        <span class="dplayer-thumb" style="background: ', t += l(i.theme), t += '"></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <span class="dplayer-time">\n            <span class="dplayer-ptime">0:00</span> /\n            <span class="dplayer-dtime">0:00</span>\n        </span>\n        ', i.live && (t += '\n        <span class="dplayer-live-badge"><span class="dplayer-live-dot" style="background: ', t += l(i.theme), t += ';"></span>', t += l(s("Live")), t += "</span>\n        "), t += '\n    </div>\n    <div class="dplayer-icons dplayer-icons-right">\n        ', i.video.quality && (t += '\n        <div class="dplayer-quality">\n            <button class="dplayer-icon dplayer-quality-icon">', t += l(i.video.quality[i.video.defaultQuality].name), t += '</button>\n            <div class="dplayer-quality-mask">\n                <div class="dplayer-quality-list">\n                ', c(i.video.quality, (function (e, a) {
                t += '\n                    <div class="dplayer-quality-item" data-index="', t += l(a), t += '">', t += l(e.name), t += "</div>\n                "
            })), t += "\n                </div>\n            </div>\n        </div>\n        "), t += "\n        ", i.screenshot && (t += '\n        <div class="dplayer-icon dplayer-camera-icon" data-balloon="', t += l(s("Screenshot")), t += '" data-balloon-pos="up">\n            <span class="dplayer-icon-content">', t += d.camera, t += "</span>\n        </div>\n        "), t += '\n        <div class="dplayer-comment">\n            <button class="dplayer-icon dplayer-comment-icon" data-balloon="', t += l(s("Send danmaku")), t += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', t += d.comment, t += "</span>\n            </button>\n        </div>\n        ", i.subtitle && (t += '\n        <div class="dplayer-subtitle-btn">\n            <button class="dplayer-icon dplayer-subtitle-icon" data-balloon="', t += l(s("Hide subtitle")), t += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', t += d.subtitle, t += "</span>\n            </button>\n        </div>\n        "), t += '\n        <div class="dplayer-setting">\n            <button class="dplayer-icon dplayer-setting-icon" data-balloon="', t += l(s("Setting")), t += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', t += d.setting, t += '</span>\n            </button>\n            <div class="dplayer-setting-box">\n                <div class="dplayer-setting-origin-panel">\n                    <div class="dplayer-setting-item dplayer-setting-speed">\n                        <span class="dplayer-label">', t += l(s("Speed")), t += '</span>\n                        <div class="dplayer-toggle">', t += d.right, t += '</div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-loop">\n                        <span class="dplayer-label">', t += l(s("Loop")), t += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-toggle-setting-input" type="checkbox" name="dplayer-toggle">\n                            <label for="dplayer-toggle"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-showdan">\n                        <span class="dplayer-label">', t += l(s("Show danmaku")), t += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-showdan-setting-input" type="checkbox" name="dplayer-toggle-dan">\n                            <label for="dplayer-toggle-dan"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danunlimit">\n                        <span class="dplayer-label">', t += l(s("Unlimited danmaku")), t += '</span>\n                        <div class="dplayer-toggle">\n                            <input class="dplayer-danunlimit-setting-input" type="checkbox" name="dplayer-toggle-danunlimit">\n                            <label for="dplayer-toggle-danunlimit"></label>\n                        </div>\n                    </div>\n                    <div class="dplayer-setting-item dplayer-setting-danmaku">\n                        <span class="dplayer-label">', t += l(s("Opacity for danmaku")), t += '</span>\n                        <div class="dplayer-danmaku-bar-wrap">\n                            <div class="dplayer-danmaku-bar">\n                                <div class="dplayer-danmaku-bar-inner">\n                                    <span class="dplayer-thumb"></span>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="dplayer-setting-speed-panel">\n                    <div class="dplayer-setting-speed-item" data-speed="0.5">\n                        <span class="dplayer-label">0.5</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="0.75">\n                        <span class="dplayer-label">0.75</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1">\n                        <span class="dplayer-label">', t += l(s("Normal")), t += '</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1.25">\n                        <span class="dplayer-label">1.25</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="1.5">\n                        <span class="dplayer-label">1.5</span>\n                    </div>\n                    <div class="dplayer-setting-speed-item" data-speed="2">\n                        <span class="dplayer-label">2</span>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class="dplayer-full">\n            <button class="dplayer-icon dplayer-full-in-icon" data-balloon="', t += l(s("Web full screen")), t += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', t += d.fullWeb, t += '</span>\n            </button>\n            <button class="dplayer-icon dplayer-full-icon" data-balloon="', t += l(s("Full screen")), t += '" data-balloon-pos="up">\n                <span class="dplayer-icon-content">', t += d.full, t += '</span>\n            </button>\n        </div>\n    </div>\n    <div class="dplayer-bar-wrap">\n        <div class="dplayer-bar-time hidden">00:00</div>\n        <div class="dplayer-bar-preview"></div>\n        <div class="dplayer-bar">\n            <div class="dplayer-loaded" style="width: 0;"></div>\n            <div class="dplayer-played" style="width: 0; background: ', t += l(i.theme), t += '">\n                <span class="dplayer-thumb" style="background: ', t += l(i.theme), t += '"></span>\n            </div>\n        </div>\n    </div>\n</div>\n<div class="dplayer-info-panel dplayer-info-panel-hide">\n    <div class="dplayer-info-panel-close">[x]</div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-version">\n        <span class="dplayer-info-panel-item-title">Player version</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-fps">\n        <span class="dplayer-info-panel-item-title">Player FPS</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-type">\n        <span class="dplayer-info-panel-item-title">Video type</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-url">\n        <span class="dplayer-info-panel-item-title">Video url</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-resolution">\n        <span class="dplayer-info-panel-item-title">Video resolution</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-duration">\n        <span class="dplayer-info-panel-item-title">Video duration</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    ', i.danmaku && (t += '\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-id">\n        <span class="dplayer-info-panel-item-title">Danamku id</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-api">\n        <span class="dplayer-info-panel-item-title">Danamku api</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    <div class="dplayer-info-panel-item dplayer-info-panel-item-danmaku-amount">\n        <span class="dplayer-info-panel-item-title">Danamku amount</span>\n        <span class="dplayer-info-panel-item-data"></span>\n    </div>\n    '), t += '\n</div>\n<div class="dplayer-menu">\n    ', c(i.contextmenu, (function (e, a) {
                t += '\n        <div class="dplayer-menu-item">\n            <a', e.link && (t += ' target="_blank"'), t += ' href="', t += l(e.link || "javascript:void(0);"), t += '">', t += l(s(e.text)), t += "</a>\n        </div>\n    "
            })), t += '\n</div>\n<div class="dplayer-notice"></div>\n<button class="dplayer-mobile-play">\n    ', t += d.play, t += "\n</button>"
        }
    }, function (e, t, a) {
        var n = a(35),
            r = a(36);
        "string" == typeof (r = r.__esModule ? r.default : r) && (r = [
            [e.i, r, ""]
        ]);
        var o = {
            insert: "head",
            singleton: !1
        },
            i = (n(r, o), r.locals ? r.locals : {});
        e.exports = i
    }, function (e, t, a) {
        "use strict";
        var n, r = function () {
            return void 0 === n && (n = Boolean(window && document && document.all && !window.atob)), n
        },
            o = function () {
                var e = {};
                return function (t) {
                    if (void 0 === e[t]) {
                        var a = document.querySelector(t);
                        if (window.HTMLIFrameElement && a instanceof window.HTMLIFrameElement) try {
                            a = a.contentDocument.head
                        } catch (e) {
                            a = null
                        }
                        e[t] = a
                    }
                    return e[t]
                }
            }(),
            i = [];

        function l(e) {
            for (var t = -1, a = 0; a < i.length; a++)
                if (i[a].identifier === e) {
                    t = a;
                    break
                } return t
        }

        function s(e, t) {
            for (var a = {}, n = [], r = 0; r < e.length; r++) {
                var o = e[r],
                    s = t.base ? o[0] + t.base : o[0],
                    d = a[s] || 0,
                    p = "".concat(s, " ").concat(d);
                a[s] = d + 1;
                var c = l(p),
                    u = {
                        css: o[1],
                        media: o[2],
                        sourceMap: o[3]
                    }; - 1 !== c ? (i[c].references++, i[c].updater(u)) : i.push({
                        identifier: p,
                        updater: f(u, t),
                        references: 1
                    }), n.push(p)
            }
            return n
        }

        function d(e) {
            var t = document.createElement("style"),
                n = e.attributes || {};
            if (void 0 === n.nonce) {
                var r = a.nc;
                r && (n.nonce = r)
            }
            if (Object.keys(n).forEach((function (e) {
                t.setAttribute(e, n[e])
            })), "function" == typeof e.insert) e.insert(t);
            else {
                var i = o(e.insert || "head");
                if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                i.appendChild(t)
            }
            return t
        }
        var p, c = (p = [], function (e, t) {
            return p[e] = t, p.filter(Boolean).join("\n")
        });

        function u(e, t, a, n) {
            var r = a ? "" : n.media ? "@media ".concat(n.media, " {").concat(n.css, "}") : n.css;
            if (e.styleSheet) e.styleSheet.cssText = c(t, r);
            else {
                var o = document.createTextNode(r),
                    i = e.childNodes;
                i[t] && e.removeChild(i[t]), i.length ? e.insertBefore(o, i[t]) : e.appendChild(o)
            }
        }

        function y(e, t, a) {
            var n = a.css,
                r = a.media,
                o = a.sourceMap;
            if (r ? e.setAttribute("media", r) : e.removeAttribute("media"), o && btoa && (n += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o)))), " */")), e.styleSheet) e.styleSheet.cssText = n;
            else {
                for (; e.firstChild;) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
        var m = null,
            h = 0;

        function f(e, t) {
            var a, n, r;
            if (t.singleton) {
                var o = h++;
                a = m || (m = d(t)), n = u.bind(null, a, o, !1), r = u.bind(null, a, o, !0)
            } else a = d(t), n = y.bind(null, a, t), r = function () {
                ! function (e) {
                    if (null === e.parentNode) return !1;
                    e.parentNode.removeChild(e)
                }(a)
            };
            return n(e),
                function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        n(e = t)
                    } else r()
                }
        }
        e.exports = function (e, t) {
            (t = t || {}).singleton || "boolean" == typeof t.singleton || (t.singleton = r());
            var a = s(e = e || [], t);
            return function (e) {
                if (e = e || [], "[object Array]" === Object.prototype.toString.call(e)) {
                    for (var n = 0; n < a.length; n++) {
                        var r = l(a[n]);
                        i[r].references--
                    }
                    for (var o = s(e, t), d = 0; d < a.length; d++) {
                        var p = l(a[d]);
                        0 === i[p].references && (i[p].updater(), i.splice(p, 1))
                    }
                    a = o
                }
            }
        }
    }, function (e, t, a) {
        var n = a(3),
            r = a(37);
        (t = n(!1)).i(r), t.push([e.i, '@-webkit-keyframes my-face{2%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}4%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}6%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}8%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}10%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}12%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}14%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}16%{-webkit-transform:translateY(-.5px) rotate(-1.5deg);transform:translateY(-.5px) rotate(-1.5deg)}18%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}20%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}22%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}24%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}26%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}28%{-webkit-transform:translateY(.5px) rotate(1.5deg);transform:translateY(.5px) rotate(1.5deg)}30%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}32%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}34%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}36%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}38%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}40%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}42%{-webkit-transform:translateY(2.5px) rotate(-1.5deg);transform:translateY(2.5px) rotate(-1.5deg)}44%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}46%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}48%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}50%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}52%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}54%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}56%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}58%{-webkit-transform:translateY(.5px) rotate(2.5deg);transform:translateY(.5px) rotate(2.5deg)}60%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}62%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}64%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}66%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}68%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}70%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}72%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}74%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}76%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}78%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}80%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}82%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}84%{-webkit-transform:translateY(1.5px) rotate(2.5deg);transform:translateY(1.5px) rotate(2.5deg)}86%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}88%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}90%{-webkit-transform:translateY(2.5px) rotate(-.5deg);transform:translateY(2.5px) rotate(-.5deg)}92%{-webkit-transform:translateY(.5px) rotate(-.5deg);transform:translateY(.5px) rotate(-.5deg)}94%{-webkit-transform:translateY(2.5px) rotate(.5deg);transform:translateY(2.5px) rotate(.5deg)}96%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}98%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}0%,to{-webkit-transform:translate(0) rotate(0deg);transform:translate(0) rotate(0deg)}}@keyframes my-face{2%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}4%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}6%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}8%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}10%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}12%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}14%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}16%{-webkit-transform:translateY(-.5px) rotate(-1.5deg);transform:translateY(-.5px) rotate(-1.5deg)}18%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}20%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}22%{-webkit-transform:translateY(.5px) rotate(-1.5deg);transform:translateY(.5px) rotate(-1.5deg)}24%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}26%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}28%{-webkit-transform:translateY(.5px) rotate(1.5deg);transform:translateY(.5px) rotate(1.5deg)}30%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}32%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}34%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}36%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}38%{-webkit-transform:translateY(1.5px) rotate(-1.5deg);transform:translateY(1.5px) rotate(-1.5deg)}40%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}42%{-webkit-transform:translateY(2.5px) rotate(-1.5deg);transform:translateY(2.5px) rotate(-1.5deg)}44%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}46%{-webkit-transform:translateY(-1.5px) rotate(2.5deg);transform:translateY(-1.5px) rotate(2.5deg)}48%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}50%{-webkit-transform:translateY(.5px) rotate(.5deg);transform:translateY(.5px) rotate(.5deg)}52%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}54%{-webkit-transform:translateY(-1.5px) rotate(1.5deg);transform:translateY(-1.5px) rotate(1.5deg)}56%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}58%{-webkit-transform:translateY(.5px) rotate(2.5deg);transform:translateY(.5px) rotate(2.5deg)}60%{-webkit-transform:translateY(2.5px) rotate(2.5deg);transform:translateY(2.5px) rotate(2.5deg)}62%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}64%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}66%{-webkit-transform:translateY(1.5px) rotate(-.5deg);transform:translateY(1.5px) rotate(-.5deg)}68%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}70%{-webkit-transform:translateY(1.5px) rotate(.5deg);transform:translateY(1.5px) rotate(.5deg)}72%{-webkit-transform:translateY(2.5px) rotate(1.5deg);transform:translateY(2.5px) rotate(1.5deg)}74%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}76%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}78%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}80%{-webkit-transform:translateY(1.5px) rotate(1.5deg);transform:translateY(1.5px) rotate(1.5deg)}82%{-webkit-transform:translateY(-.5px) rotate(.5deg);transform:translateY(-.5px) rotate(.5deg)}84%{-webkit-transform:translateY(1.5px) rotate(2.5deg);transform:translateY(1.5px) rotate(2.5deg)}86%{-webkit-transform:translateY(-1.5px) rotate(-1.5deg);transform:translateY(-1.5px) rotate(-1.5deg)}88%{-webkit-transform:translateY(-.5px) rotate(2.5deg);transform:translateY(-.5px) rotate(2.5deg)}90%{-webkit-transform:translateY(2.5px) rotate(-.5deg);transform:translateY(2.5px) rotate(-.5deg)}92%{-webkit-transform:translateY(.5px) rotate(-.5deg);transform:translateY(.5px) rotate(-.5deg)}94%{-webkit-transform:translateY(2.5px) rotate(.5deg);transform:translateY(2.5px) rotate(.5deg)}96%{-webkit-transform:translateY(-.5px) rotate(1.5deg);transform:translateY(-.5px) rotate(1.5deg)}98%{-webkit-transform:translateY(-1.5px) rotate(-.5deg);transform:translateY(-1.5px) rotate(-.5deg)}0%,to{-webkit-transform:translate(0) rotate(0deg);transform:translate(0) rotate(0deg)}}.dplayer{position:relative;overflow:hidden;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;line-height:1}.dplayer *{box-sizing:content-box}.dplayer svg{width:100%;height:100%}.dplayer svg circle,.dplayer svg path{fill:#fff}.dplayer:-webkit-full-screen{width:100%;height:100%;background:#000;position:fixed;z-index:100000;left:0;top:0;margin:0;padding:0;-webkit-transform:translate(0);transform:translate(0)}.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move,.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move{-webkit-animation:danmaku-center 6s linear;animation:danmaku-center 6s linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.dplayer:-webkit-full-screen .dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move{-webkit-animation:danmaku 8s linear;animation:danmaku 8s linear;-webkit-animation-play-state:inherit;animation-play-state:inherit}.dplayer.dplayer-live .dplayer-bar-wrap,.dplayer.dplayer-live.dplayer-no-danmaku .dplayer-setting,.dplayer.dplayer-live .dplayer-setting-loop,.dplayer.dplayer-live .dplayer-setting-speed,.dplayer.dplayer-live .dplayer-time,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-comment,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danmaku,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-danunlimit,.dplayer.dplayer-no-danmaku .dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box .dplayer-setting-showdan,.dplayer.dplayer-no-danmaku .dplayer-danmaku{display:none}.dplayer.dplayer-arrow .dplayer-danmaku{font-size:18px}.dplayer.dplayer-arrow .dplayer-icon{margin:0 -3px}.dplayer.dplayer-playing .dplayer-danmaku .dplayer-danmaku-move{-webkit-animation-play-state:running;animation-play-state:running}@media (min-width:900px){.dplayer.dplayer-playing .dplayer-controller,.dplayer.dplayer-playing .dplayer-controller-mask{opacity:0}.dplayer.dplayer-playing:hover .dplayer-controller-mask{opacity:1}.dplayer.dplayer-playing:hover .dplayer-controller{opacity:1}}.dplayer.dplayer-loading .dplayer-bezel .diplayer-loading-icon{display:block}.dplayer.dplayer-loading .dplayer-danmaku,.dplayer.dplayer-loading .dplayer-danmaku-move,.dplayer.dplayer-paused .dplayer-danmaku,.dplayer.dplayer-paused .dplayer-danmaku-move{-webkit-animation-play-state:paused;animation-play-state:paused}.dplayer.dplayer-hide-controller{cursor:none}.dplayer.dplayer-hide-controller .dplayer-controller,.dplayer.dplayer-hide-controller .dplayer-controller-mask{opacity:0;-webkit-transform:translateY(100%);transform:translateY(100%)}.dplayer.dplayer-show-controller .dplayer-controller,.dplayer.dplayer-show-controller .dplayer-controller-mask{opacity:1}.dplayer.dplayer-fulled{position:fixed;z-index:100000;left:0;top:0;width:100%;height:100%}.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-camera-icon,.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-play-icon,.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-volume{display:none}.dplayer.dplayer-mobile .dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon{position:static;display:inline-block}.dplayer.dplayer-mobile .dplayer-bar-time,.dplayer.dplayer-mobile.dplayer-hide-controller .dplayer-mobile-play{display:none}.dplayer.dplayer-mobile .dplayer-mobile-play{display:block}.dplayer-web-fullscreen-fix{position:fixed;top:0;left:0;margin:0;padding:0}[data-balloon]:before{display:none}[data-balloon]:after{padding:.3em .7em;background:rgba(17,17,17,.7)}[data-balloon][data-balloon-pos=up]:after{margin-bottom:0}.dplayer-bezel{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff;pointer-events:none}.dplayer-bezel .dplayer-bezel-icon{position:absolute;top:50%;left:50%;margin:-26px 0 0 -26px;height:52px;width:52px;padding:12px;box-sizing:border-box;background:rgba(0,0,0,.5);border-radius:50%;opacity:0;pointer-events:none}.dplayer-bezel .dplayer-bezel-icon.dplayer-bezel-transition{-webkit-animation:bezel-hide .5s linear;animation:bezel-hide .5s linear}@-webkit-keyframes bezel-hide{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform:scale(2);transform:scale(2)}}@keyframes bezel-hide{0%{opacity:1;-webkit-transform:scale(1);transform:scale(1)}to{opacity:0;-webkit-transform:scale(2);transform:scale(2)}}.dplayer-bezel .dplayer-danloading{position:absolute;top:50%;margin-top:-7px;width:100%;text-align:center;font-size:14px;line-height:14px;-webkit-animation:my-face 5s ease-in-out infinite;animation:my-face 5s ease-in-out infinite}.dplayer-bezel .diplayer-loading-icon{display:none;position:absolute;top:50%;left:50%;margin:-18px 0 0 -18px;height:36px;width:36px;pointer-events:none}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-hide{display:none}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot{-webkit-animation:diplayer-loading-dot-fade .8s ease infinite;animation:diplayer-loading-dot-fade .8s ease infinite;opacity:0;-webkit-transform-origin:4px 4px;transform-origin:4px 4px}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-7{-webkit-animation-delay:.7s;animation-delay:.7s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-6{-webkit-animation-delay:.6s;animation-delay:.6s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-5{-webkit-animation-delay:.5s;animation-delay:.5s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-4{-webkit-animation-delay:.4s;animation-delay:.4s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-3{-webkit-animation-delay:.3s;animation-delay:.3s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-2{-webkit-animation-delay:.2s;animation-delay:.2s}.dplayer-bezel .diplayer-loading-icon .diplayer-loading-dot.diplayer-loading-dot-1{-webkit-animation-delay:.1s;animation-delay:.1s}@-webkit-keyframes diplayer-loading-dot-fade{0%{opacity:.7;-webkit-transform:scale(1.2);transform:scale(1.2)}50%{opacity:.25;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:.25;-webkit-transform:scale(.85);transform:scale(.85)}}@keyframes diplayer-loading-dot-fade{0%{opacity:.7;-webkit-transform:scale(1.2);transform:scale(1.2)}50%{opacity:.25;-webkit-transform:scale(.9);transform:scale(.9)}to{opacity:.25;-webkit-transform:scale(.85);transform:scale(.85)}}.dplayer-controller-mask{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAADGCAYAAAAT+OqFAAAAdklEQVQoz42QQQ7AIAgEF/T/D+kbq/RWAlnQyyazA4aoAB4FsBSA/bFjuF1EOL7VbrIrBuusmrt4ZZORfb6ehbWdnRHEIiITaEUKa5EJqUakRSaEYBJSCY2dEstQY7AuxahwXFrvZmWl2rh4JZ07z9dLtesfNj5q0FU3A5ObbwAAAABJRU5ErkJggg==) repeat-x bottom;height:98px;width:100%}.dplayer-controller,.dplayer-controller-mask{position:absolute;bottom:0;-webkit-transition:all .3s ease;transition:all .3s ease}.dplayer-controller{left:0;right:0;height:41px;padding:0 20px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.dplayer-controller.dplayer-controller-comment .dplayer-icons{display:none}.dplayer-controller.dplayer-controller-comment .dplayer-icons.dplayer-comment-box{display:block}.dplayer-controller .dplayer-bar-wrap{padding:5px 0;cursor:pointer;position:absolute;bottom:33px;width:calc(100% - 40px);height:3px}.dplayer-controller .dplayer-bar-wrap:hover .dplayer-bar .dplayer-played .dplayer-thumb{-webkit-transform:scale(1);transform:scale(1)}.dplayer-controller .dplayer-bar-wrap:hover .dplayer-highlight{display:block;width:8px;-webkit-transform:translateX(-4px);transform:translateX(-4px);top:4px;height:40%}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight{z-index:12;position:absolute;top:5px;width:6px;height:20%;border-radius:6px;background-color:#fff;text-align:center;-webkit-transform:translateX(-3px);transform:translateX(-3px);-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover .dplayer-highlight-text{display:block}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover~.dplayer-bar-preview{opacity:0}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight:hover~.dplayer-bar-time{opacity:0}.dplayer-controller .dplayer-bar-wrap .dplayer-highlight .dplayer-highlight-text{display:none;position:absolute;left:50%;top:-24px;padding:5px 8px;background-color:rgba(0,0,0,.62);color:#fff;border-radius:4px;font-size:12px;white-space:nowrap;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview{position:absolute;background:#fff;pointer-events:none;display:none;background-size:16000px 100%}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-preview-canvas{position:absolute;width:100%;height:100%;z-index:1;pointer-events:none}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time{position:absolute;left:0;top:-20px;border-radius:4px;padding:5px 7px;background-color:rgba(0,0,0,.62);color:#fff;font-size:12px;text-align:center;opacity:1;-webkit-transition:opacity .1s ease-in-out;transition:opacity .1s ease-in-out;word-wrap:normal;word-break:normal;z-index:2;pointer-events:none}.dplayer-controller .dplayer-bar-wrap .dplayer-bar-time.hidden{opacity:0}.dplayer-controller .dplayer-bar-wrap .dplayer-bar{position:relative;height:3px;width:100%;background:hsla(0,0%,100%,.2);cursor:pointer}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded{background:hsla(0,0%,100%,.4);-webkit-transition:all .5s ease;transition:all .5s ease}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-loaded,.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played{position:absolute;left:0;top:0;bottom:0;height:3px;will-change:width}.dplayer-controller .dplayer-bar-wrap .dplayer-bar .dplayer-played .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:scale(0);transform:scale(0)}.dplayer-controller .dplayer-icons{height:38px;position:absolute;bottom:0}.dplayer-controller .dplayer-icons.dplayer-comment-box{display:none;position:absolute;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;z-index:2;height:38px;bottom:0;left:20px;right:20px;color:#fff}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-icon{padding:7px}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-icon{position:absolute;left:0;top:0}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-send-icon{position:absolute;right:0;top:0}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box{position:absolute;background:rgba(28,28,28,.9);bottom:41px;left:0;box-shadow:0 0 25px rgba(0,0,0,.3);border-radius:4px;padding:10px 10px 16px;font-size:14px;width:204px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:scale(0);transform:scale(0)}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box.dplayer-comment-setting-open{-webkit-transform:scale(1);transform:scale(1)}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box input[type=radio]{display:none}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box label{cursor:pointer}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-title{font-size:13px;color:#fff;line-height:30px}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type{font-size:0}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type .dplayer-comment-setting-title{margin-bottom:6px}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(2) span{border-radius:4px 0 0 4px}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type label:nth-child(4) span{border-radius:0 4px 4px 0}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type span{width:33%;padding:4px 6px;line-height:16px;display:inline-block;font-size:12px;color:#fff;border:1px solid #fff;margin-right:-1px;box-sizing:border-box;text-align:center;cursor:pointer}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-type input:checked+span{background:#e4e4e6;color:#1c1c1c}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color{font-size:0}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color label{font-size:0;padding:6px;display:inline-block}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span{width:22px;height:22px;display:inline-block;border-radius:50%;box-sizing:border-box;cursor:pointer}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-setting-box .dplayer-comment-setting-color span:hover{-webkit-animation:my-face 5s ease-in-out infinite;animation:my-face 5s ease-in-out infinite}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input{outline:none;border:none;padding:8px 31px;font-size:14px;line-height:18px;text-align:center;border-radius:4px;background:none;margin:0;height:100%;box-sizing:border-box;width:100%;color:#fff}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-webkit-input-placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-moz-placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input:-ms-input-placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-input-placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::placeholder{color:#fff;opacity:.8}.dplayer-controller .dplayer-icons.dplayer-comment-box .dplayer-comment-input::-ms-clear{display:none}.dplayer-controller .dplayer-icons.dplayer-icons-left .dplayer-icon{padding:7px}.dplayer-controller .dplayer-icons.dplayer-icons-right{right:20px}.dplayer-controller .dplayer-icons.dplayer-icons-right .dplayer-icon{padding:8px}.dplayer-controller .dplayer-icons .dplayer-live-badge,.dplayer-controller .dplayer-icons .dplayer-time{line-height:38px;color:#eee;text-shadow:0 0 2px rgba(0,0,0,.5);vertical-align:middle;font-size:13px;cursor:default}.dplayer-controller .dplayer-icons .dplayer-live-dot{display:inline-block;width:6px;height:6px;vertical-align:4%;margin-right:5px;content:"";border-radius:6px}.dplayer-controller .dplayer-icons .dplayer-icon{width:40px;height:100%;border:none;background-color:transparent;outline:none;cursor:pointer;vertical-align:middle;box-sizing:border-box;display:inline-block}.dplayer-controller .dplayer-icons .dplayer-icon .dplayer-icon-content{-webkit-transition:all .2s ease-in-out;transition:all .2s ease-in-out;opacity:.8}.dplayer-controller .dplayer-icons .dplayer-icon:hover .dplayer-icon-content{opacity:1}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-quality-icon{color:#fff;width:auto;line-height:22px;font-size:14px}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-comment-icon{padding:10px 9px 9px}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-setting-icon{padding-top:8.5px}.dplayer-controller .dplayer-icons .dplayer-icon.dplayer-volume-icon{width:43px}.dplayer-controller .dplayer-icons .dplayer-volume{position:relative;display:inline-block;cursor:pointer;height:100%}.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar{width:45px}.dplayer-controller .dplayer-icons .dplayer-volume:hover .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{-webkit-transform:scale(1);transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar{width:45px}.dplayer-controller .dplayer-icons .dplayer-volume.dplayer-volume-active .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{-webkit-transform:scale(1);transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap{display:inline-block;margin:0 10px 0 -5px;vertical-align:middle;height:100%}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar{position:relative;top:17px;width:0;height:3px;background:#aaa;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner{position:absolute;bottom:0;left:0;height:100%;-webkit-transition:all .1s ease;transition:all .1s ease;will-change:width}.dplayer-controller .dplayer-icons .dplayer-volume .dplayer-volume-bar-wrap .dplayer-volume-bar .dplayer-volume-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;-webkit-transform:scale(0);transform:scale(0)}.dplayer-controller .dplayer-icons .dplayer-setting,.dplayer-controller .dplayer-icons .dplayer-subtitle-btn{display:inline-block;height:100%}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box{position:absolute;right:0;bottom:50px;-webkit-transform:scale(0);transform:scale(0);width:150px;border-radius:2px;background:rgba(28,28,28,.9);padding:7px 0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;overflow:hidden;z-index:2}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box>div{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box>div.dplayer-setting-origin-panel{display:block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-open{-webkit-transform:scale(1);transform:scale(1)}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-narrow{width:70px;height:180px;text-align:center}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-origin-panel{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-box.dplayer-setting-box-speed .dplayer-setting-speed-panel{display:block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item,.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item{height:30px;padding:5px 10px;box-sizing:border-box;cursor:pointer;position:relative}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-item:hover,.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-speed-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku{padding:5px 0}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-label{padding:0 10px;display:inline}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-label{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku:hover .dplayer-danmaku-bar-wrap{display:inline-block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-label{display:none}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku.dplayer-setting-danmaku-active .dplayer-danmaku-bar-wrap{display:inline-block}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap{padding:0 10px;box-sizing:border-box;display:none;vertical-align:middle;height:100%;width:100%}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar{position:relative;top:8.5px;width:100%;height:3px;background:#fff;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner{position:absolute;bottom:0;left:0;height:100%;-webkit-transition:all .1s ease;transition:all .1s ease;background:#aaa;will-change:width}.dplayer-controller .dplayer-icons .dplayer-setting .dplayer-setting-danmaku .dplayer-danmaku-bar-wrap .dplayer-danmaku-bar .dplayer-danmaku-bar-inner .dplayer-thumb{position:absolute;top:0;right:5px;margin-top:-4px;margin-right:-10px;height:11px;width:11px;border-radius:50%;cursor:pointer;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;background:#aaa}.dplayer-controller .dplayer-icons .dplayer-full{display:inline-block;height:100%;position:relative}.dplayer-controller .dplayer-icons .dplayer-full:hover .dplayer-full-in-icon{display:block}.dplayer-controller .dplayer-icons .dplayer-full .dplayer-full-in-icon{position:absolute;top:-30px;z-index:1;display:none}.dplayer-controller .dplayer-icons .dplayer-quality{position:relative;display:inline-block;height:100%;z-index:2}.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-list{display:block}.dplayer-controller .dplayer-icons .dplayer-quality:hover .dplayer-quality-mask{display:block}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-mask{display:none;position:absolute;bottom:38px;left:-18px;width:80px;padding-bottom:12px}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-list{display:none;font-size:12px;width:80px;border-radius:2px;background:rgba(28,28,28,.9);padding:5px 0;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;overflow:hidden;color:#fff;text-align:center}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item{height:25px;box-sizing:border-box;cursor:pointer;line-height:25px}.dplayer-controller .dplayer-icons .dplayer-quality .dplayer-quality-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer-controller .dplayer-icons .dplayer-comment{display:inline-block;height:100%}.dplayer-controller .dplayer-icons .dplayer-label{color:#eee;font-size:13px;display:inline-block;vertical-align:middle;white-space:nowrap}.dplayer-controller .dplayer-icons .dplayer-toggle{width:32px;height:20px;text-align:center;font-size:0;vertical-align:middle;position:absolute;top:5px;right:10px}.dplayer-controller .dplayer-icons .dplayer-toggle input{max-height:0;max-width:0;display:none}.dplayer-controller .dplayer-icons .dplayer-toggle input+label{display:inline-block;position:relative;box-shadow:inset 0 0 0 0 #dfdfdf;border:1px solid #dfdfdf;height:20px;width:32px;border-radius:10px;box-sizing:border-box;cursor:pointer;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-toggle input+label:before{content:"";position:absolute;display:block;height:18px;width:18px;top:0;left:0;border-radius:15px;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out}.dplayer-controller .dplayer-icons .dplayer-toggle input+label:after{content:"";position:absolute;display:block;left:0;top:0;border-radius:15px;background:#fff;-webkit-transition:.2s ease-in-out;transition:.2s ease-in-out;box-shadow:0 1px 3px rgba(0,0,0,.4);height:18px;width:18px}.dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label{border-color:hsla(0,0%,100%,.5)}.dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label:before{width:30px;background:hsla(0,0%,100%,.5)}.dplayer-controller .dplayer-icons .dplayer-toggle input:checked+label:after{left:12px}.dplayer-mobile-play{display:none;width:50px;height:50px;border:none;background-color:transparent;outline:none;cursor:pointer;box-sizing:border-box;bottom:0;opacity:.8;position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.dplayer-danmaku{position:absolute;left:0;right:0;top:0;bottom:0;font-size:22px;color:#fff}.dplayer-danmaku .dplayer-danmaku-item{display:inline-block;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default;white-space:nowrap;text-shadow:.5px .5px .5px rgba(0,0,0,.5)}.dplayer-danmaku .dplayer-danmaku-item--demo{position:absolute;visibility:hidden}.dplayer-danmaku .dplayer-danmaku-right{position:absolute;right:0;-webkit-transform:translateX(100%);transform:translateX(100%)}.dplayer-danmaku .dplayer-danmaku-right.dplayer-danmaku-move{will-change:transform;-webkit-animation:danmaku 5s linear;animation:danmaku 5s linear;-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes danmaku{0%{-webkit-transform:translateX(100%);transform:translateX(100%)}}@keyframes danmaku{0%{-webkit-transform:translateX(100%);transform:translateX(100%)}}.dplayer-danmaku .dplayer-danmaku-bottom,.dplayer-danmaku .dplayer-danmaku-top{position:absolute;width:100%;text-align:center;visibility:hidden}.dplayer-danmaku .dplayer-danmaku-bottom.dplayer-danmaku-move,.dplayer-danmaku .dplayer-danmaku-top.dplayer-danmaku-move{will-change:visibility;-webkit-animation:danmaku-center 4s linear;animation:danmaku-center 4s linear;-webkit-animation-play-state:paused;animation-play-state:paused}@-webkit-keyframes danmaku-center{0%{visibility:visible}to{visibility:visible}}@keyframes danmaku-center{0%{visibility:visible}to{visibility:visible}}.dplayer-logo{pointer-events:none;position:absolute;left:20px;top:20px;max-width:50px;max-height:50px}.dplayer-logo img{max-width:100%;max-height:100%;background:none}.dplayer-menu{position:absolute;width:170px;border-radius:2px;background:rgba(28,28,28,.85);padding:5px 0;overflow:hidden;z-index:3;display:none}.dplayer-menu.dplayer-menu-show{display:block}.dplayer-menu .dplayer-menu-item{height:30px;box-sizing:border-box;cursor:pointer}.dplayer-menu .dplayer-menu-item:hover{background-color:hsla(0,0%,100%,.1)}.dplayer-menu .dplayer-menu-item a{padding:0 10px;line-height:30px;color:#eee;font-size:13px;display:inline-block;vertical-align:middle;width:100%;box-sizing:border-box;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.dplayer-menu .dplayer-menu-item a:hover{text-decoration:none}.dplayer-notice{opacity:0;position:absolute;bottom:60px;left:20px;font-size:14px;border-radius:2px;background:rgba(28,28,28,.9);padding:7px 20px;-webkit-transition:all .3s ease-in-out;transition:all .3s ease-in-out;overflow:hidden;color:#fff;pointer-events:none}.dplayer-subtitle{position:absolute;bottom:40px;width:90%;left:5%;text-align:center;color:#fff;text-shadow:.5px .5px .5px rgba(0,0,0,.5);font-size:20px}.dplayer-subtitle.dplayer-subtitle-hide{display:none}.dplayer-mask{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1;display:none}.dplayer-mask.dplayer-mask-show{display:block}.dplayer-video-wrap{position:relative;background:#000;font-size:0;width:100%;height:100%}.dplayer-video-wrap .dplayer-video{width:100%;height:100%;display:none}.dplayer-video-wrap .dplayer-video-current{display:block}.dplayer-video-wrap .dplayer-video-prepare{display:none}.dplayer-info-panel{position:absolute;top:10px;left:10px;width:400px;background:rgba(28,28,28,.8);padding:10px;color:#fff;font-size:12px;border-radius:2px}.dplayer-info-panel-hide{display:none}.dplayer-info-panel .dplayer-info-panel-close{cursor:pointer;position:absolute;right:10px;top:10px}.dplayer-info-panel .dplayer-info-panel-item>span{display:inline-block;vertical-align:middle;line-height:15px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden}.dplayer-info-panel .dplayer-info-panel-item-title{width:100px;text-align:right;margin-right:10px}.dplayer-info-panel .dplayer-info-panel-item-data{width:260px}', ""]), e.exports = t
    }, function (e, t, a) {
        (t = a(3)(!1)).push([e.i, ':root{--balloon-color:rgba(16,16,16,0.95);--balloon-font-size:12px;--balloon-move:4px}button[aria-label][data-balloon-pos]{overflow:visible}[aria-label][data-balloon-pos]{position:relative;cursor:pointer}[aria-label][data-balloon-pos]:after{opacity:0;pointer-events:none;-webkit-transition:all .18s ease-out .18s;transition:all .18s ease-out .18s;text-indent:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-weight:400;font-style:normal;text-shadow:none;font-size:var(--balloon-font-size);background:var(--balloon-color);border-radius:2px;color:#fff;content:attr(aria-label);padding:.5em 1em;position:absolute;white-space:nowrap;z-index:10}[aria-label][data-balloon-pos]:before{width:0;height:0;border:5px solid transparent;border-top:5px solid var(--balloon-color);opacity:0;pointer-events:none;-webkit-transition:all .18s ease-out .18s;transition:all .18s ease-out .18s;content:"";position:absolute;z-index:10}[aria-label][data-balloon-pos]:hover:after,[aria-label][data-balloon-pos]:hover:before,[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:after,[aria-label][data-balloon-pos]:not([data-balloon-nofocus]):focus:before,[aria-label][data-balloon-pos][data-balloon-visible]:after,[aria-label][data-balloon-pos][data-balloon-visible]:before{opacity:1;pointer-events:none}[aria-label][data-balloon-pos].font-awesome:after{font-family:FontAwesome,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif}[aria-label][data-balloon-pos][data-balloon-break]:after{white-space:pre}[aria-label][data-balloon-pos][data-balloon-break][data-balloon-length]:after{white-space:pre-line;word-break:break-word}[aria-label][data-balloon-pos][data-balloon-blunt]:after,[aria-label][data-balloon-pos][data-balloon-blunt]:before{-webkit-transition:none;transition:none}[aria-label][data-balloon-pos][data-balloon-pos=up]:after{bottom:100%;left:50%;margin-bottom:10px;-webkit-transform:translate(-50%,var(--balloon-move));transform:translate(-50%,var(--balloon-move));-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up]:before{bottom:100%;left:50%;-webkit-transform:translate(-50%,var(--balloon-move));transform:translate(-50%,var(--balloon-move));-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up][data-balloon-visible]:after{-webkit-transform:translate(-50%);transform:translate(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=up]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up][data-balloon-visible]:before{-webkit-transform:translate(-50%);transform:translate(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:after{bottom:100%;left:0;margin-bottom:10px;-webkit-transform:translateY(var(--balloon-move));transform:translateY(var(--balloon-move));-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:before{bottom:100%;left:5px;-webkit-transform:translateY(var(--balloon-move));transform:translateY(var(--balloon-move));-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up-left][data-balloon-visible]:after{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=up-left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up-left][data-balloon-visible]:before{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:after{bottom:100%;right:0;margin-bottom:10px;-webkit-transform:translateY(var(--balloon-move));transform:translateY(var(--balloon-move));-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:before{bottom:100%;right:5px;-webkit-transform:translateY(var(--balloon-move));transform:translateY(var(--balloon-move));-webkit-transform-origin:top;transform-origin:top}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=up-right][data-balloon-visible]:after{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=up-right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=up-right][data-balloon-visible]:before{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=down]:after{left:50%;margin-top:10px;top:100%;-webkit-transform:translate(-50%,calc(var(--balloon-move)*-1));transform:translate(-50%,calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down]:before{width:0;height:0;border:5px solid transparent;border-bottom:5px solid var(--balloon-color);left:50%;top:100%;-webkit-transform:translate(-50%,calc(var(--balloon-move)*-1));transform:translate(-50%,calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down][data-balloon-visible]:after{-webkit-transform:translate(-50%);transform:translate(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=down]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down][data-balloon-visible]:before{-webkit-transform:translate(-50%);transform:translate(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:after{left:0;margin-top:10px;top:100%;-webkit-transform:translateY(calc(var(--balloon-move)*-1));transform:translateY(calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:before{width:0;height:0;border:5px solid transparent;border-bottom:5px solid var(--balloon-color);left:5px;top:100%;-webkit-transform:translateY(calc(var(--balloon-move)*-1));transform:translateY(calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down-left][data-balloon-visible]:after{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=down-left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down-left][data-balloon-visible]:before{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:after{right:0;margin-top:10px;top:100%;-webkit-transform:translateY(calc(var(--balloon-move)*-1));transform:translateY(calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:before{width:0;height:0;border:5px solid transparent;border-bottom:5px solid var(--balloon-color);right:5px;top:100%;-webkit-transform:translateY(calc(var(--balloon-move)*-1));transform:translateY(calc(var(--balloon-move)*-1))}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=down-right][data-balloon-visible]:after{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=down-right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=down-right][data-balloon-visible]:before{-webkit-transform:translate(0);transform:translate(0)}[aria-label][data-balloon-pos][data-balloon-pos=left]:after{margin-right:10px;right:100%;top:50%;-webkit-transform:translate(var(--balloon-move),-50%);transform:translate(var(--balloon-move),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:before{width:0;height:0;border:5px solid transparent;border-left:5px solid var(--balloon-color);right:100%;top:50%;-webkit-transform:translate(var(--balloon-move),-50%);transform:translate(var(--balloon-move),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=left][data-balloon-visible]:after{-webkit-transform:translateY(-50%);transform:translateY(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=left]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=left][data-balloon-visible]:before{-webkit-transform:translateY(-50%);transform:translateY(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:after{left:100%;margin-left:10px;top:50%;-webkit-transform:translate(calc(var(--balloon-move)*-1),-50%);transform:translate(calc(var(--balloon-move)*-1),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:before{width:0;height:0;border:5px solid transparent;border-right:5px solid var(--balloon-color);left:100%;top:50%;-webkit-transform:translate(calc(var(--balloon-move)*-1),-50%);transform:translate(calc(var(--balloon-move)*-1),-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:hover:after,[aria-label][data-balloon-pos][data-balloon-pos=right][data-balloon-visible]:after{-webkit-transform:translateY(-50%);transform:translateY(-50%)}[aria-label][data-balloon-pos][data-balloon-pos=right]:hover:before,[aria-label][data-balloon-pos][data-balloon-pos=right][data-balloon-visible]:before{-webkit-transform:translateY(-50%);transform:translateY(-50%)}[aria-label][data-balloon-pos][data-balloon-length=small]:after{white-space:normal;width:80px}[aria-label][data-balloon-pos][data-balloon-length=medium]:after{white-space:normal;width:150px}[aria-label][data-balloon-pos][data-balloon-length=large]:after{white-space:normal;width:260px}[aria-label][data-balloon-pos][data-balloon-length=xlarge]:after{white-space:normal;width:380px}@media screen and (max-width:768px){[aria-label][data-balloon-pos][data-balloon-length=xlarge]:after{white-space:normal;width:90vw}}[aria-label][data-balloon-pos][data-balloon-length=fit]:after{white-space:normal;width:100%}', ""]), e.exports = t
    }, function (e, t, a) {
        var n = Function.prototype.apply;

        function r(e, t) {
            this._id = e, this._clearFn = t
        }
        t.setTimeout = function () {
            return new r(n.call(setTimeout, window, arguments), clearTimeout)
        }, t.setInterval = function () {
            return new r(n.call(setInterval, window, arguments), clearInterval)
        }, t.clearTimeout = t.clearInterval = function (e) {
            e && e.close()
        }, r.prototype.unref = r.prototype.ref = function () { }, r.prototype.close = function () {
            this._clearFn.call(window, this._id)
        }, t.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
        }, t.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
        }, t._unrefActive = t.active = function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout((function () {
                e._onTimeout && e._onTimeout()
            }), t))
        }, a(39), t.setImmediate = setImmediate, t.clearImmediate = clearImmediate
    }, function (e, t, a) {
        (function (e, t) {
            ! function (e, a) {
                "use strict";
                if (!e.setImmediate) {
                    var n, r, o, i, l, s = 1,
                        d = {},
                        p = !1,
                        c = e.document,
                        u = Object.getPrototypeOf && Object.getPrototypeOf(e);
                    u = u && u.setTimeout ? u : e, "[object process]" === {}.toString.call(e.process) ? n = function (e) {
                        t.nextTick((function () {
                            m(e)
                        }))
                    } : ! function () {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0,
                                a = e.onmessage;
                            return e.onmessage = function () {
                                t = !1
                            }, e.postMessage("", "*"), e.onmessage = a, t
                        }
                    }() ? e.MessageChannel ? ((o = new MessageChannel).port1.onmessage = function (e) {
                        m(e.data)
                    }, n = function (e) {
                        o.port2.postMessage(e)
                    }) : c && "onreadystatechange" in c.createElement("script") ? (r = c.documentElement, n = function (e) {
                        var t = c.createElement("script");
                        t.onreadystatechange = function () {
                            m(e), t.onreadystatechange = null, r.removeChild(t), t = null
                        }, r.appendChild(t)
                    }) : n = function (e) {
                        setTimeout(m, 0, e)
                    } : (i = "setImmediate$" + Math.random() + "$", l = function (t) {
                        t.source === e && "string" == typeof t.data && 0 === t.data.indexOf(i) && m(+t.data.slice(i.length))
                    }, e.addEventListener ? e.addEventListener("message", l, !1) : e.attachEvent("onmessage", l), n = function (t) {
                        e.postMessage(i + t, "*")
                    }), u.setImmediate = function (e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), a = 0; a < t.length; a++) t[a] = arguments[a + 1];
                        var r = {
                            callback: e,
                            args: t
                        };
                        return d[s] = r, n(s), s++
                    }, u.clearImmediate = y
                }

                function y(e) {
                    delete d[e]
                }

                function m(e) {
                    if (p) setTimeout(m, 0, e);
                    else {
                        var t = d[e];
                        if (t) {
                            p = !0;
                            try {
                                ! function (e) {
                                    var t = e.callback,
                                        n = e.args;
                                    switch (n.length) {
                                        case 0:
                                            t();
                                            break;
                                        case 1:
                                            t(n[0]);
                                            break;
                                        case 2:
                                            t(n[0], n[1]);
                                            break;
                                        case 3:
                                            t(n[0], n[1], n[2]);
                                            break;
                                        default:
                                            t.apply(a, n)
                                    }
                                }(t)
                            } finally {
                                y(e), p = !1
                            }
                        }
                    }
                }
            }("undefined" == typeof self ? void 0 === e ? this : e : self)
        }).call(this, a(4), a(5))
    }, function (e, t, a) {
        "use strict";
        var n = a(0),
            r = a(6),
            o = a(41),
            i = a(12);

        function l(e) {
            var t = new o(e),
                a = r(o.prototype.request, t);
            return n.extend(a, o.prototype, t), n.extend(a, t), a
        }
        var s = l(a(9));
        s.Axios = o, s.create = function (e) {
            return l(i(s.defaults, e))
        }, s.Cancel = a(13), s.CancelToken = a(54), s.isCancel = a(8), s.all = function (e) {
            return Promise.all(e)
        }, s.spread = a(55), e.exports = s, e.exports.default = s
    }, function (e, t, a) {
        "use strict";
        var n = a(0),
            r = a(7),
            o = a(42),
            i = a(43),
            l = a(12);

        function s(e) {
            this.defaults = e, this.interceptors = {
                request: new o,
                response: new o
            }
        }
        s.prototype.request = function (e) {
            "string" == typeof e ? (e = arguments[1] || {}).url = arguments[0] : e = e || {}, (e = l(this.defaults, e)).method ? e.method = e.method.toLowerCase() : this.defaults.method ? e.method = this.defaults.method.toLowerCase() : e.method = "get";
            var t = [i, void 0],
                a = Promise.resolve(e);
            for (this.interceptors.request.forEach((function (e) {
                t.unshift(e.fulfilled, e.rejected)
            })), this.interceptors.response.forEach((function (e) {
                t.push(e.fulfilled, e.rejected)
            })); t.length;) a = a.then(t.shift(), t.shift());
            return a
        }, s.prototype.getUri = function (e) {
            return e = l(this.defaults, e), r(e.url, e.params, e.paramsSerializer).replace(/^\?/, "")
        }, n.forEach(["delete", "get", "head", "options"], (function (e) {
            s.prototype[e] = function (t, a) {
                return this.request(n.merge(a || {}, {
                    method: e,
                    url: t
                }))
            }
        })), n.forEach(["post", "put", "patch"], (function (e) {
            s.prototype[e] = function (t, a, r) {
                return this.request(n.merge(r || {}, {
                    method: e,
                    url: t,
                    data: a
                }))
            }
        })), e.exports = s
    }, function (e, t, a) {
        "use strict";
        var n = a(0);

        function r() {
            this.handlers = []
        }
        r.prototype.use = function (e, t) {
            return this.handlers.push({
                fulfilled: e,
                rejected: t
            }), this.handlers.length - 1
        }, r.prototype.eject = function (e) {
            this.handlers[e] && (this.handlers[e] = null)
        }, r.prototype.forEach = function (e) {
            n.forEach(this.handlers, (function (t) {
                null !== t && e(t)
            }))
        }, e.exports = r
    }, function (e, t, a) {
        "use strict";
        var n = a(0),
            r = a(44),
            o = a(8),
            i = a(9);

        function l(e) {
            e.cancelToken && e.cancelToken.throwIfRequested()
        }
        e.exports = function (e) {
            return l(e), e.headers = e.headers || {}, e.data = r(e.data, e.headers, e.transformRequest), e.headers = n.merge(e.headers.common || {}, e.headers[e.method] || {}, e.headers), n.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (function (t) {
                delete e.headers[t]
            })), (e.adapter || i.adapter)(e).then((function (t) {
                return l(e), t.data = r(t.data, t.headers, e.transformResponse), t
            }), (function (t) {
                return o(t) || (l(e), t && t.response && (t.response.data = r(t.response.data, t.response.headers, e.transformResponse))), Promise.reject(t)
            }))
        }
    }, function (e, t, a) {
        "use strict";
        var n = a(0);
        e.exports = function (e, t, a) {
            return n.forEach(a, (function (a) {
                e = a(e, t)
            })), e
        }
    }, function (e, t, a) {
        "use strict";
        var n = a(0);
        e.exports = function (e, t) {
            n.forEach(e, (function (a, n) {
                n !== t && n.toUpperCase() === t.toUpperCase() && (e[t] = a, delete e[n])
            }))
        }
    }, function (e, t, a) {
        "use strict";
        var n = a(11);
        e.exports = function (e, t, a) {
            var r = a.config.validateStatus;
            !r || r(a.status) ? e(a) : t(n("Request failed with status code " + a.status, a.config, null, a.request, a))
        }
    }, function (e, t, a) {
        "use strict";
        e.exports = function (e, t, a, n, r) {
            return e.config = t, a && (e.code = a), e.request = n, e.response = r, e.isAxiosError = !0, e.toJSON = function () {
                return {
                    message: this.message,
                    name: this.name,
                    description: this.description,
                    number: this.number,
                    fileName: this.fileName,
                    lineNumber: this.lineNumber,
                    columnNumber: this.columnNumber,
                    stack: this.stack,
                    config: this.config,
                    code: this.code
                }
            }, e
        }
    }, function (e, t, a) {
        "use strict";
        var n = a(49),
            r = a(50);
        e.exports = function (e, t) {
            return e && !n(t) ? r(e, t) : t
        }
    }, function (e, t, a) {
        "use strict";
        e.exports = function (e) {
            return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)
        }
    }, function (e, t, a) {
        "use strict";
        e.exports = function (e, t) {
            return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
        }
    }, function (e, t, a) {
        "use strict";
        var n = a(0),
            r = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
        e.exports = function (e) {
            var t, a, o, i = {};
            return e ? (n.forEach(e.split("\n"), (function (e) {
                if (o = e.indexOf(":"), t = n.trim(e.substr(0, o)).toLowerCase(), a = n.trim(e.substr(o + 1)), t) {
                    if (i[t] && r.indexOf(t) >= 0) return;
                    i[t] = "set-cookie" === t ? (i[t] ? i[t] : []).concat([a]) : i[t] ? i[t] + ", " + a : a
                }
            })), i) : i
        }
    }, function (e, t, a) {
        "use strict";
        var n = a(0);
        e.exports = n.isStandardBrowserEnv() ? function () {
            var e, t = /(msie|trident)/i.test(navigator.userAgent),
                a = document.createElement("a");

            function r(e) {
                var n = e;
                return t && (a.setAttribute("href", n), n = a.href), a.setAttribute("href", n), {
                    href: a.href,
                    protocol: a.protocol ? a.protocol.replace(/:$/, "") : "",
                    host: a.host,
                    search: a.search ? a.search.replace(/^\?/, "") : "",
                    hash: a.hash ? a.hash.replace(/^#/, "") : "",
                    hostname: a.hostname,
                    port: a.port,
                    pathname: "/" === a.pathname.charAt(0) ? a.pathname : "/" + a.pathname
                }
            }
            return e = r(window.location.href),
                function (t) {
                    var a = n.isString(t) ? r(t) : t;
                    return a.protocol === e.protocol && a.host === e.host
                }
        }() : function () {
            return !0
        }
    }, function (e, t, a) {
        "use strict";
        var n = a(0);
        e.exports = n.isStandardBrowserEnv() ? {
            write: function (e, t, a, r, o, i) {
                var l = [];
                l.push(e + "=" + encodeURIComponent(t)), n.isNumber(a) && l.push("expires=" + new Date(a).toGMTString()), n.isString(r) && l.push("path=" + r), n.isString(o) && l.push("domain=" + o), !0 === i && l.push("secure"), document.cookie = l.join("; ")
            },
            read: function (e) {
                var t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return t ? decodeURIComponent(t[3]) : null
            },
            remove: function (e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write: function () { },
            read: function () {
                return null
            },
            remove: function () { }
        }
    }, function (e, t, a) {
        "use strict";
        var n = a(13);

        function r(e) {
            if ("function" != typeof e) throw new TypeError("executor must be a function.");
            var t;
            this.promise = new Promise((function (e) {
                t = e
            }));
            var a = this;
            e((function (e) {
                a.reason || (a.reason = new n(e), t(a.reason))
            }))
        }
        r.prototype.throwIfRequested = function () {
            if (this.reason) throw this.reason
        }, r.source = function () {
            var e;
            return {
                token: new r((function (t) {
                    e = t
                })),
                cancel: e
            }
        }, e.exports = r
    }, function (e, t, a) {
        "use strict";
        e.exports = function (e) {
            return function (t) {
                return e.apply(null, t)
            }
        }
    }, function (e, t, a) {
        "use strict";
        (function (t) {
            var a = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== t ? t : {},
                n = Object.create(a),
                r = /["&'<>]/;
            n.$escape = function (e) {
                return function (e) {
                    var t = "" + e,
                        a = r.exec(t);
                    if (!a) return e;
                    var n = "",
                        o = void 0,
                        i = void 0,
                        l = void 0;
                    for (o = a.index, i = 0; o < t.length; o++) {
                        switch (t.charCodeAt(o)) {
                            case 34:
                                l = "&#34;";
                                break;
                            case 38:
                                l = "&#38;";
                                break;
                            case 39:
                                l = "&#39;";
                                break;
                            case 60:
                                l = "&#60;";
                                break;
                            case 62:
                                l = "&#62;";
                                break;
                            default:
                                continue
                        }
                        i !== o && (n += t.substring(i, o)), i = o + 1, n += l
                    }
                    return i !== o ? n + t.substring(i, o) : n
                }(function e(t) {
                    "string" != typeof t && (t = null == t ? "" : "function" == typeof t ? e(t.call(t)) : JSON.stringify(t));
                    return t
                }(e))
            }, n.$each = function (e, t) {
                if (Array.isArray(e))
                    for (var a = 0, n = e.length; a < n; a++) t(e[a], a);
                else
                    for (var r in e) t(e[r], r)
            }, e.exports = n
        }).call(this, a(4))
    }, function (e, t, a) {
        "use strict";
        a.r(t);
        a(34);
        var n = a(15),
            r = /mobile/i.test(window.navigator.userAgent),
            o = {
                secondToTime: function (e) {
                    if (0 === (e = e || 0) || e === 1 / 0 || "NaN" === e.toString()) return "00:00";
                    var t = Math.floor(e / 3600),
                        a = Math.floor((e - 3600 * t) / 60),
                        n = Math.floor(e - 3600 * t - 60 * a);
                    return (t > 0 ? [t, a, n] : [a, n]).map((function (e) {
                        return e < 10 ? "0" + e : "" + e
                    })).join(":")
                },
                getElementViewLeft: function (e) {
                    var t = e.offsetLeft,
                        a = e.offsetParent,
                        n = document.body.scrollLeft + document.documentElement.scrollLeft;
                    if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement)
                        for (; null !== a && a !== e;) t += a.offsetLeft, a = a.offsetParent;
                    else
                        for (; null !== a;) t += a.offsetLeft, a = a.offsetParent;
                    return t - n
                },
                getBoundingClientRectViewLeft: function (e) {
                    var t = window.scrollY || window.pageYOffset || document.body.scrollTop + (document.documentElement && document.documentElement.scrollTop || 0);
                    if (e.getBoundingClientRect) {
                        if ("number" != typeof this.getBoundingClientRectViewLeft.offset) {
                            var a = document.createElement("div");
                            a.style.cssText = "position:absolute;top:0;left:0;", document.body.appendChild(a), this.getBoundingClientRectViewLeft.offset = -a.getBoundingClientRect().top - t, document.body.removeChild(a), a = null
                        }
                        var n = e.getBoundingClientRect(),
                            r = this.getBoundingClientRectViewLeft.offset;
                        return n.left + r
                    }
                    return this.getElementViewLeft(e)
                },
                getScrollPosition: function () {
                    return {
                        left: window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0,
                        top: window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
                    }
                },
                setScrollPosition: function (e) {
                    var t = e.left,
                        a = void 0 === t ? 0 : t,
                        n = e.top,
                        r = void 0 === n ? 0 : n;
                    this.isFirefox ? (document.documentElement.scrollLeft = a, document.documentElement.scrollTop = r) : window.scrollTo(a, r)
                },
                isMobile: r,
                isFirefox: /firefox/i.test(window.navigator.userAgent),
                isChrome: /chrome/i.test(window.navigator.userAgent),
                storage: {
                    set: function (e, t) {
                        localStorage.setItem(e, t)
                    },
                    get: function (e) {
                        return localStorage.getItem(e)
                    }
                },
                nameMap: {
                    dragStart: r ? "touchstart" : "mousedown",
                    dragMove: r ? "touchmove" : "mousemove",
                    dragEnd: r ? "touchend" : "mouseup"
                },
                color2Number: function (e) {
                    return "#" === e[0] && (e = e.substr(1)), 3 === e.length && (e = "".concat(e[0]).concat(e[0]).concat(e[1]).concat(e[1]).concat(e[2]).concat(e[2])), parseInt(e, 16) + 0 & 16777215
                },
                number2Color: function (e) {
                    return "#" + ("00000" + e.toString(16)).slice(-6)
                },
                number2Type: function (e) {
                    switch (e) {
                        case 0:
                            return "right";
                        case 1:
                            return "top";
                        case 2:
                            return "bottom";
                        default:
                            return "right"
                    }
                }
            },
            i = a(2),
            l = a.n(i),
            s = {
                send: function (e) {
                    l.a.post(e.url, e.data).then((function (t) {
                        var a = t.data;
                        a && 0 === a.code ? e.success && e.success(a) : e.error && e.error(a && a.msg)
                    })).catch((function (t) {
                        console.error(t), e.error && e.error()
                    }))
                },
                read: function (e) {
                    l.a.get(e.url).then((function (t) {
                        var a = t.data;
                        a && 0 === a.code ? e.success && e.success(a.data.map((function (e) {
                            return {
                                time: e[0],
                                type: e[1],
                                color: e[2],
                                author: e[3],
                                text: e[4]
                            }
                        }))) : e.error && e.error(a && a.msg)
                    })).catch((function (t) {
                        console.error(t), e.error && e.error()
                    }))
                }
            };

        function d(e) {
            return (d = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }
        var p = function (e) {
            var t = {
                container: e.element || document.getElementsByClassName("dplayer")[0],
                live: !1,
                autoplay: !1,
                theme: "#b7daff",
                loop: !1,
                lang: (navigator.language || navigator.browserLanguage).toLowerCase(),
                screenshot: !1,
                hotkey: !0,
                preload: "metadata",
                volume: .7,
                apiBackend: s,
                video: {},
                contextmenu: [],
                mutex: !0,
                pluginOptions: {
                    hls: {},
                    flvjs: {},
                    dash: {},
                    webtorrent: {}
                }
            };
            for (var a in t) t.hasOwnProperty(a) && !e.hasOwnProperty(a) && (e[a] = t[a]);
            return e.video && !e.video.type && (e.video.type = "auto"),
             "object" === d(e.danmaku) && e.danmaku && !e.danmaku.user && (e.danmaku.user = "DIYgod"), 
             e.subtitle && (!e.subtitle.type && (e.subtitle.type = "webvtt"), 
             !e.subtitle.fontSize && (e.subtitle.fontSize = "20px"), 
             !e.subtitle.bottom && (e.subtitle.bottom = "40px"), 
             !e.subtitle.color && (e.subtitle.color = "#fff")), 
             e.video.quality && (e.video.url = e.video.quality[e.video.defaultQuality].url), 
             e.lang && (e.lang = e.lang.toLowerCase()), e.contextmenu = e.contextmenu.concat([{
                text: "Video info",
                click: function (e) {
                    e.infoPanel.triggle()
                }
            }, 
            {
                text: "About author",
                link: "https://www.facebook.com/alenk.tholakhy"
            }, 
            {
                text: "DPlayer v".concat("1.25.1"),
                link: "https://github.com/MoePlayer/DPlayer"
            }]), e
        };
        var c = {
            "zh-cn": {
                "Danmaku is loading": "弹幕加载中",
                Top: "顶部",
                Bottom: "底部",
                Rolling: "滚动",
                "Input danmaku, hit Enter": "输入弹幕，回车发送",
                "About author": "关于作者",
                "DPlayer feedback": "播放器意见反馈",
                "About DPlayer": "关于 DPlayer 播放器",
                Loop: "洗脑循环",
                Speed: "速度",
                "Opacity for danmaku": "弹幕透明度",
                Normal: "正常",
                "Please input danmaku content!": "要输入弹幕内容啊喂！",
                "Set danmaku color": "设置弹幕颜色",
                "Set danmaku type": "设置弹幕类型",
                "Show danmaku": "显示弹幕",
                "Video load failed": "视频加载失败",
                "Danmaku load failed": "弹幕加载失败",
                "Danmaku send failed": "弹幕发送失败",
                "Switching to": "正在切换至",
                "Switched to": "已经切换至",
                quality: "画质",
                FF: "快进",
                REW: "快退",
                "Unlimited danmaku": "海量弹幕",
                "Send danmaku": "发送弹幕",
                Setting: "设置",
                "Full screen": "全屏",
                "Web full screen": "页面全屏",
                Send: "发送",
                Screenshot: "截图",
                s: "秒",
                "Show subtitle": "显示字幕",
                "Hide subtitle": "隐藏字幕",
                Volume: "音量",
                Live: "直播",
                "Video info": "视频统计信息"
            },
            "zh-tw": {
                "Danmaku is loading": "彈幕載入中",
                Top: "頂部",
                Bottom: "底部",
                Rolling: "滾動",
                "Input danmaku, hit Enter": "輸入彈幕，Enter 發送",
                "About author": "關於作者",
                "DPlayer feedback": "播放器意見回饋",
                "About DPlayer": "關於 DPlayer 播放器",
                Loop: "循環播放",
                Speed: "速度",
                "Opacity for danmaku": "彈幕透明度",
                Normal: "正常",
                "Please input danmaku content!": "請輸入彈幕內容啊！",
                "Set danmaku color": "設定彈幕顏色",
                "Set danmaku type": "設定彈幕類型",
                "Show danmaku": "顯示彈幕",
                "Video load failed": "影片載入失敗",
                "Danmaku load failed": "彈幕載入失敗",
                "Danmaku send failed": "彈幕發送失敗",
                "Switching to": "正在切換至",
                "Switched to": "已經切換至",
                quality: "畫質",
                FF: "快進",
                REW: "快退",
                "Unlimited danmaku": "巨量彈幕",
                "Send danmaku": "發送彈幕",
                Setting: "設定",
                "Full screen": "全螢幕",
                "Web full screen": "頁面全螢幕",
                Send: "發送",
                Screenshot: "截圖",
                s: "秒",
                "Show subtitle": "顯示字幕",
                "Hide subtitle": "隱藏字幕",
                Volume: "音量",
                Live: "直播",
                "Video info": "影片統計訊息"
            }
        },
            u = function (e) {
                var t = this;
                this.lang = e, this.tran = function (e) {
                    return c[t.lang] && c[t.lang][e] ? c[t.lang][e] : e
                }
            },
            y = a(17),
            m = a.n(y),
            h = a(18),
            f = a.n(h),
            b = a(19),
            v = a.n(b),
            g = a(20),
            w = a.n(g),
            k = a(21),
            x = a.n(k),
            S = a(22),
            T = a.n(S),
            L = a(23),
            E = a.n(L),
            Y = a(24),
            q = a.n(Y),
            B = a(25),
            M = a.n(B),
            z = a(26),
            C = a.n(z),
            O = a(27),
            j = a.n(O),
            P = a(28),
            A = a.n(P),
            F = a(29),
            _ = a.n(F),
            D = a(30),
            R = a.n(D),
            I = a(31),
            W = a.n(I),
            H = a(32),
            N = a.n(H),
            U = {
                play: m.a,
                pause: f.a,
                volumeUp: v.a,
                volumeDown: w.a,
                volumeOff: x.a,
                full: T.a,
                fullWeb: E.a,
                setting: q.a,
                right: M.a,
                comment: C.a,
                commentOff: j.a,
                send: A.a,
                pallette: _.a,
                camera: R.a,
                subtitle: W.a,
                loading: N.a
            },
            V = a(33),
            X = a.n(V);

        function Q(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var $ = function () {
            function e(t) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.container = t.container, this.options = t.options, this.index = t.index, this.tran = t.tran, this.init()
            }
            var t, a, n;
            return t = e, (a = [{
                key: "init",
                value: function () {
                    this.container.innerHTML = X()({
                        options: this.options,
                        index: this.index,
                        tran: this.tran,
                        icons: U,
                        mobile: o.isMobile,
                        video: {
                            current: !0,
                            pic: this.options.video.pic,
                            screenshot: this.options.screenshot,
                            preload: this.options.preload,
                            url: this.options.video.url,
                            subtitle: this.options.subtitle
                        }
                    }), this.volumeBar = this.container.querySelector(".dplayer-volume-bar-inner"), this.volumeBarWrap = this.container.querySelector(".dplayer-volume-bar"), this.volumeBarWrapWrap = this.container.querySelector(".dplayer-volume-bar-wrap"), this.volumeButton = this.container.querySelector(".dplayer-volume"), this.volumeButtonIcon = this.container.querySelector(".dplayer-volume-icon"), this.volumeIcon = this.container.querySelector(".dplayer-volume-icon .dplayer-icon-content"), this.playedBar = this.container.querySelector(".dplayer-played"), this.loadedBar = this.container.querySelector(".dplayer-loaded"), this.playedBarWrap = this.container.querySelector(".dplayer-bar-wrap"), this.playedBarTime = this.container.querySelector(".dplayer-bar-time"), this.danmaku = this.container.querySelector(".dplayer-danmaku"), this.danmakuLoading = this.container.querySelector(".dplayer-danloading"), this.video = this.container.querySelector(".dplayer-video-current"), this.bezel = this.container.querySelector(".dplayer-bezel-icon"), this.playButton = this.container.querySelector(".dplayer-play-icon"), this.mobilePlayButton = this.container.querySelector(".dplayer-mobile-play"), this.videoWrap = this.container.querySelector(".dplayer-video-wrap"), this.controllerMask = this.container.querySelector(".dplayer-controller-mask"), this.ptime = this.container.querySelector(".dplayer-ptime"), this.settingButton = this.container.querySelector(".dplayer-setting-icon"), this.settingBox = this.container.querySelector(".dplayer-setting-box"), this.mask = this.container.querySelector(".dplayer-mask"), this.loop = this.container.querySelector(".dplayer-setting-loop"), this.loopToggle = this.container.querySelector(".dplayer-setting-loop .dplayer-toggle-setting-input"), this.showDanmaku = this.container.querySelector(".dplayer-setting-showdan"), this.showDanmakuToggle = this.container.querySelector(".dplayer-showdan-setting-input"), this.unlimitDanmaku = this.container.querySelector(".dplayer-setting-danunlimit"), this.unlimitDanmakuToggle = this.container.querySelector(".dplayer-danunlimit-setting-input"), this.speed = this.container.querySelector(".dplayer-setting-speed"), this.speedItem = this.container.querySelectorAll(".dplayer-setting-speed-item"), this.danmakuOpacityBar = this.container.querySelector(".dplayer-danmaku-bar-inner"), this.danmakuOpacityBarWrap = this.container.querySelector(".dplayer-danmaku-bar"), this.danmakuOpacityBarWrapWrap = this.container.querySelector(".dplayer-danmaku-bar-wrap"), this.danmakuOpacityBox = this.container.querySelector(".dplayer-setting-danmaku"), this.dtime = this.container.querySelector(".dplayer-dtime"), this.controller = this.container.querySelector(".dplayer-controller"), this.commentInput = this.container.querySelector(".dplayer-comment-input"), this.commentButton = this.container.querySelector(".dplayer-comment-icon"), this.commentSettingBox = this.container.querySelector(".dplayer-comment-setting-box"), this.commentSettingButton = this.container.querySelector(".dplayer-comment-setting-icon"), this.commentSettingFill = this.container.querySelector(".dplayer-comment-setting-icon path"), this.commentSendButton = this.container.querySelector(".dplayer-send-icon"), this.commentSendFill = this.container.querySelector(".dplayer-send-icon path"), this.commentColorSettingBox = this.container.querySelector(".dplayer-comment-setting-color"), this.browserFullButton = this.container.querySelector(".dplayer-full-icon"), this.webFullButton = this.container.querySelector(".dplayer-full-in-icon"), this.menu = this.container.querySelector(".dplayer-menu"), this.menuItem = this.container.querySelectorAll(".dplayer-menu-item"), this.qualityList = this.container.querySelector(".dplayer-quality-list"), this.camareButton = this.container.querySelector(".dplayer-camera-icon"), this.subtitleButton = this.container.querySelector(".dplayer-subtitle-icon"), this.subtitleButtonInner = this.container.querySelector(".dplayer-subtitle-icon .dplayer-icon-content"), this.subtitle = this.container.querySelector(".dplayer-subtitle"), this.qualityButton = this.container.querySelector(".dplayer-quality-icon"), this.barPreview = this.container.querySelector(".dplayer-bar-preview"), this.barWrap = this.container.querySelector(".dplayer-bar-wrap"), this.notice = this.container.querySelector(".dplayer-notice"), this.infoPanel = this.container.querySelector(".dplayer-info-panel"), this.infoPanelClose = this.container.querySelector(".dplayer-info-panel-close"), this.infoVersion = this.container.querySelector(".dplayer-info-panel-item-version .dplayer-info-panel-item-data"), this.infoFPS = this.container.querySelector(".dplayer-info-panel-item-fps .dplayer-info-panel-item-data"), this.infoType = this.container.querySelector(".dplayer-info-panel-item-type .dplayer-info-panel-item-data"), this.infoUrl = this.container.querySelector(".dplayer-info-panel-item-url .dplayer-info-panel-item-data"), this.infoResolution = this.container.querySelector(".dplayer-info-panel-item-resolution .dplayer-info-panel-item-data"), this.infoDuration = this.container.querySelector(".dplayer-info-panel-item-duration .dplayer-info-panel-item-data"), this.infoDanmakuId = this.container.querySelector(".dplayer-info-panel-item-danmaku-id .dplayer-info-panel-item-data"), this.infoDanmakuApi = this.container.querySelector(".dplayer-info-panel-item-danmaku-api .dplayer-info-panel-item-data"), this.infoDanmakuAmount = this.container.querySelector(".dplayer-info-panel-item-danmaku-amount .dplayer-info-panel-item-data")
                }
            }]) && Q(t.prototype, a), n && Q(t, n), e
        }();

        function J(e) {
            return (J = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
                return typeof e
            } : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            })(e)
        }

        function K(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var Z = function () {
            function e(t) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.options = t, this.container = this.options.container, this.danTunnel = {
                    right: {},
                    top: {},
                    bottom: {}
                }, this.danIndex = 0, this.dan = [], this.showing = !0, this._opacity = this.options.opacity, this.events = this.options.events, this.unlimited = this.options.unlimited, this._measure(""), this.load()
            }
            var t, a, n;
            return t = e, (a = [{
                key: "load",
                value: function () {
                    var e, t = this;
                    e = this.options.api.maximum ? "".concat(this.options.api.address, "v3/?id=").concat(this.options.api.id, "&max=").concat(this.options.api.maximum) : "".concat(this.options.api.address, "v3/?id=").concat(this.options.api.id);
                    var a = (this.options.api.addition || []).slice(0);
                    a.push(e), this.events && this.events.trigger("danmaku_load_start", a), this._readAllEndpoints(a, (function (e) {
                        t.dan = [].concat.apply([], e).sort((function (e, t) {
                            return e.time - t.time
                        })), window.requestAnimationFrame((function () {
                            t.frame()
                        })), t.options.callback(), t.events && t.events.trigger("danmaku_load_end")
                    }))
                }
            }, {
                key: "reload",
                value: function (e) {
                    this.options.api = e, this.dan = [], this.clear(), this.load()
                }
            }, {
                key: "_readAllEndpoints",
                value: function (e, t) {
                    for (var a = this, n = [], r = 0, o = function (o) {
                        a.options.apiBackend.read({
                            url: e[o],
                            success: function (a) {
                                n[o] = a, ++r === e.length && t(n)
                            },
                            error: function (i) {
                                a.options.error(i || a.options.tran("Danmaku load failed")), n[o] = [], ++r === e.length && t(n)
                            }
                        })
                    }, i = 0; i < e.length; ++i) o(i)
                }
            }, {
                key: "send",
                value: function (e, t) {
                    var a = this,
                        n = {
                            token: this.options.api.token,
                            id: this.options.api.id,
                            author: this.options.api.user,
                            time: this.options.time(),
                            text: e.text,
                            color: e.color,
                            type: e.type
                        };
                    this.options.apiBackend.send({
                        url: this.options.api.address + "v3/",
                        data: n,
                        success: t,
                        error: function (e) {
                            a.options.error(e || a.options.tran("Danmaku send failed"))
                        }
                    }), this.dan.splice(this.danIndex, 0, n), this.danIndex++;
                    var r = {
                        text: this.htmlEncode(n.text),
                        color: n.color,
                        type: n.type,
                        border: "2px solid ".concat(this.options.borderColor)
                    };
                    this.draw(r), this.events && this.events.trigger("danmaku_send", n)
                }
            }, {
                key: "frame",
                value: function () {
                    var e = this;
                    if (this.dan.length && !this.paused && this.showing) {
                        for (var t = this.dan[this.danIndex], a = []; t && this.options.time() > parseFloat(t.time);) a.push(t), t = this.dan[++this.danIndex];
                        this.draw(a)
                    }
                    window.requestAnimationFrame((function () {
                        e.frame()
                    }))
                }
            }, {
                key: "opacity",
                value: function (e) {
                    if (void 0 !== e) {
                        for (var t = this.container.getElementsByClassName("dplayer-danmaku-item"), a = 0; a < t.length; a++) t[a].style.opacity = e;
                        this._opacity = e, this.events && this.events.trigger("danmaku_opacity", this._opacity)
                    }
                    return this._opacity
                }
            }, {
                key: "draw",
                value: function (e) {
                    var t = this;
                    if (this.showing) {
                        var a = this.options.height,
                            n = this.container.offsetWidth,
                            r = this.container.offsetHeight,
                            i = parseInt(r / a),
                            l = function (e) {
                                var a = e.offsetWidth || parseInt(e.style.width),
                                    n = e.getBoundingClientRect().right || t.container.getBoundingClientRect().right + a;
                                return t.container.getBoundingClientRect().right - n
                            },
                            s = function (e) {
                                return (n + e) / 5
                            },
                            d = function (e, a, r) {
                                for (var o = n / s(r), d = function (r) {
                                    var d = t.danTunnel[a][r + ""];
                                    if (!d || !d.length) return t.danTunnel[a][r + ""] = [e], e.addEventListener("animationend", (function () {
                                        t.danTunnel[a][r + ""].splice(0, 1)
                                    })), {
                                        v: r % i
                                    };
                                    if ("right" !== a) return "continue";
                                    for (var p = 0; p < d.length; p++) {
                                        var c = l(d[p]) - 10;
                                        if (c <= n - o * s(parseInt(d[p].style.width)) || c <= 0) break;
                                        if (p === d.length - 1) return t.danTunnel[a][r + ""].push(e), e.addEventListener("animationend", (function () {
                                            t.danTunnel[a][r + ""].splice(0, 1)
                                        })), {
                                            v: r % i
                                        }
                                    }
                                }, p = 0; t.unlimited || p < i; p++) {
                                    var c = d(p);
                                    switch (c) {
                                        case "continue":
                                            continue;
                                        default:
                                            if ("object" === J(c)) return c.v
                                    }
                                }
                                return -1
                            };
                        "[object Array]" !== Object.prototype.toString.call(e) && (e = [e]);
                        for (var p = document.createDocumentFragment(), c = function (r) {
                            e[r].type = o.number2Type(e[r].type), e[r].color || (e[r].color = 16777215);
                            var i = document.createElement("div");
                            i.classList.add("dplayer-danmaku-item"), i.classList.add("dplayer-danmaku-".concat(e[r].type)), e[r].border ? i.innerHTML = '<span style="border:'.concat(e[r].border, '">').concat(e[r].text, "</span>") : i.innerHTML = e[r].text, i.style.opacity = t._opacity, i.style.color = o.number2Color(e[r].color), i.addEventListener("animationend", (function () {
                                t.container.removeChild(i)
                            }));
                            var l = t._measure(e[r].text),
                                s = void 0;
                            switch (e[r].type) {
                                case "right":
                                    (s = d(i, e[r].type, l)) >= 0 && (i.style.width = l + 1 + "px", i.style.top = a * s + "px", i.style.transform = "translateX(-".concat(n, "px)"));
                                    break;
                                case "top":
                                    (s = d(i, e[r].type)) >= 0 && (i.style.top = a * s + "px");
                                    break;
                                case "bottom":
                                    (s = d(i, e[r].type)) >= 0 && (i.style.bottom = a * s + "px");
                                    break;
                                default:
                                    console.error("Can't handled danmaku type: ".concat(e[r].type))
                            }
                            s >= 0 && (i.classList.add("dplayer-danmaku-move"), p.appendChild(i))
                        }, u = 0; u < e.length; u++) c(u);
                        return this.container.appendChild(p), p
                    }
                }
            }, {
                key: "play",
                value: function () {
                    this.paused = !1
                }
            }, {
                key: "pause",
                value: function () {
                    this.paused = !0
                }
            }, {
                key: "_measure",
                value: function (e) {
                    if (!this.context) {
                        var t = getComputedStyle(this.container.getElementsByClassName("dplayer-danmaku-item")[0], null);
                        this.context = document.createElement("canvas").getContext("2d"), this.context.font = t.getPropertyValue("font")
                    }
                    return this.context.measureText(e).width
                }
            }, {
                key: "seek",
                value: function () {
                    this.clear();
                    for (var e = 0; e < this.dan.length; e++) {
                        if (this.dan[e].time >= this.options.time()) {
                            this.danIndex = e;
                            break
                        }
                        this.danIndex = this.dan.length
                    }
                }
            }, {
                key: "clear",
                value: function () {
                    this.danTunnel = {
                        right: {},
                        top: {},
                        bottom: {}
                    }, this.danIndex = 0, this.options.container.innerHTML = "", this.events && this.events.trigger("danmaku_clear")
                }
            }, {
                key: "htmlEncode",
                value: function (e) {
                    return e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;").replace(/\//g, "&#x2f;")
                }
            }, {
                key: "resize",
                value: function () {
                    for (var e = this.container.offsetWidth, t = this.container.getElementsByClassName("dplayer-danmaku-item"), a = 0; a < t.length; a++) t[a].style.transform = "translateX(-".concat(e, "px)")
                }
            }, {
                key: "hide",
                value: function () {
                    this.showing = !1, this.pause(), this.clear(), this.events && this.events.trigger("danmaku_hide")
                }
            }, {
                key: "show",
                value: function () {
                    this.seek(), this.showing = !0, this.play(), this.events && this.events.trigger("danmaku_show")
                }
            }, {
                key: "unlimit",
                value: function (e) {
                    this.unlimited = e
                }
            }]) && K(t.prototype, a), n && K(t, n), e
        }();

        function G(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var ee = function () {
            function e() {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.events = {}, this.videoEvents = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "mozaudioavailable", "pause", "play", "playing", "progress", "ratechange", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], this.playerEvents = ["screenshot", "thumbnails_show", "thumbnails_hide", "danmaku_show", "danmaku_hide", "danmaku_clear", "danmaku_loaded", "danmaku_send", "danmaku_opacity", "contextmenu_show", "contextmenu_hide", "notice_show", "notice_hide", "quality_start", "quality_end", "destroy", "resize", "fullscreen", "fullscreen_cancel", "webfullscreen", "webfullscreen_cancel", "subtitle_show", "subtitle_hide", "subtitle_change"]
            }
            var t, a, n;
            return t = e, (a = [{
                key: "on",
                value: function (e, t) {
                    this.type(e) && "function" == typeof t && (this.events[e] || (this.events[e] = []), this.events[e].push(t))
                }
            }, {
                key: "trigger",
                value: function (e, t) {
                    if (this.events[e] && this.events[e].length)
                        for (var a = 0; a < this.events[e].length; a++) this.events[e][a](t)
                }
            }, {
                key: "type",
                value: function (e) {
                    return -1 !== this.playerEvents.indexOf(e) ? "player" : -1 !== this.videoEvents.indexOf(e) ? "video" : (console.error("Unknown event name: ".concat(e)), null)
                }
            }]) && G(t.prototype, a), n && G(t, n), e
        }();

        function te(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var ae = function () {
            function e(t) {
                var a = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.player = t, this.lastScrollPosition = {
                    left: 0,
                    top: 0
                }, this.player.events.on("webfullscreen", (function () {
                    a.player.resize()
                })), this.player.events.on("webfullscreen_cancel", (function () {
                    a.player.resize(), o.setScrollPosition(a.lastScrollPosition)
                }));
                var n = function () {
                    a.player.resize(), a.isFullScreen("browser") ? a.player.events.trigger("fullscreen") : (o.setScrollPosition(a.lastScrollPosition), a.player.events.trigger("fullscreen_cancel"))
                },
                    r = function () {
                        var e = document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement;
                        e && e !== a.player.container || (a.player.resize(), e ? a.player.events.trigger("fullscreen") : (o.setScrollPosition(a.lastScrollPosition), a.player.events.trigger("fullscreen_cancel")))
                    };
                /Firefox/.test(navigator.userAgent) ? (document.addEventListener("mozfullscreenchange", r), document.addEventListener("fullscreenchange", r)) : (this.player.container.addEventListener("fullscreenchange", n), this.player.container.addEventListener("webkitfullscreenchange", n), document.addEventListener("msfullscreenchange", r), document.addEventListener("MSFullscreenChange", r))
            }
            var t, a, n;
            return t = e, (a = [{
                key: "isFullScreen",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser";
                    switch (e) {
                        case "browser":
                            return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
                        case "web":
                            return this.player.container.classList.contains("dplayer-fulled")
                    }
                }
            }, {
                key: "request",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser",
                        t = "browser" === e ? "web" : "browser",
                        a = this.isFullScreen(t);
                    switch (a || (this.lastScrollPosition = o.getScrollPosition()), e) {
                        case "browser":
                            this.player.container.requestFullscreen ? this.player.container.requestFullscreen() : this.player.container.mozRequestFullScreen ? this.player.container.mozRequestFullScreen() : this.player.container.webkitRequestFullscreen ? this.player.container.webkitRequestFullscreen() : this.player.video.webkitEnterFullscreen ? this.player.video.webkitEnterFullscreen() : this.player.video.webkitEnterFullScreen ? this.player.video.webkitEnterFullScreen() : this.player.container.msRequestFullscreen && this.player.container.msRequestFullscreen();
                            break;
                        case "web":
                            this.player.container.classList.add("dplayer-fulled"), document.body.classList.add("dplayer-web-fullscreen-fix"), this.player.events.trigger("webfullscreen")
                    }
                    a && this.cancel(t)
                }
            }, {
                key: "cancel",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser";
                    switch (e) {
                        case "browser":
                            document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen ? document.webkitCancelFullScreen() : document.webkitCancelFullscreen ? document.webkitCancelFullscreen() : document.msCancelFullScreen ? document.msCancelFullScreen() : document.msExitFullscreen && document.msExitFullscreen();
                            break;
                        case "web":
                            this.player.container.classList.remove("dplayer-fulled"), document.body.classList.remove("dplayer-web-fullscreen-fix"), this.player.events.trigger("webfullscreen_cancel")
                    }
                }
            }, {
                key: "toggle",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "browser";
                    this.isFullScreen(e) ? this.cancel(e) : this.request(e)
                }
            }]) && te(t.prototype, a), n && te(t, n), e
        }();

        function ne(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var re = function () {
            function e(t) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.storageName = {
                    opacity: "dplayer-danmaku-opacity",
                    volume: "dplayer-volume",
                    unlimited: "dplayer-danmaku-unlimited",
                    danmaku: "dplayer-danmaku-show",
                    subtitle: "dplayer-subtitle-show"
                }, this.default = {
                    opacity: .7,
                    volume: t.options.hasOwnProperty("volume") ? t.options.volume : .7,
                    unlimited: (t.options.danmaku && t.options.danmaku.unlimited ? 1 : 0) || 0,
                    danmaku: 1,
                    subtitle: 1
                }, this.data = {}, this.init()
            }
            var t, a, n;
            return t = e, (a = [{
                key: "init",
                value: function () {
                    for (var e in this.storageName) {
                        var t = this.storageName[e];
                        this.data[e] = parseFloat(o.storage.get(t) || this.default[e])
                    }
                }
            }, {
                key: "get",
                value: function (e) {
                    return this.data[e]
                }
            }, {
                key: "set",
                value: function (e, t) {
                    this.data[e] = t, o.storage.set(this.storageName[e], t)
                }
            }]) && ne(t.prototype, a), n && ne(t, n), e
        }();

        function oe(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var ie = function () {
            function e(t, a, n, r) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.container = t, this.video = a, this.options = n, this.events = r, this.init()
            }
            var t, a, n;
            return t = e, (a = [{
                key: "init",
                value: function () {
                    var e = this;
                    if (this.container.style.fontSize = this.options.fontSize, this.container.style.bottom = this.options.bottom, this.container.style.color = this.options.color, this.video.textTracks && this.video.textTracks[0]) {
                        var t = this.video.textTracks[0];
                        t.oncuechange = function () {
                            var a = t.activeCues[0];
                            if (e.container.innerHTML = "", a) {
                                var n = document.createElement("div");
                                n.appendChild(a.getCueAsHTML());
                                var r = n.innerHTML.split(/\r?\n/).map((function (e) {
                                    return "<p>".concat(e, "</p>")
                                })).join("");
                                e.container.innerHTML = r
                            }
                            e.events.trigger("subtitle_change")
                        }
                    }
                }
            }, {
                key: "show",
                value: function () {
                    this.container.classList.remove("dplayer-subtitle-hide"), this.events.trigger("subtitle_show")
                }
            }, {
                key: "hide",
                value: function () {
                    this.container.classList.add("dplayer-subtitle-hide"), this.events.trigger("subtitle_hide")
                }
            }, {
                key: "toggle",
                value: function () {
                    this.container.classList.contains("dplayer-subtitle-hide") ? this.show() : this.hide()
                }
            }]) && oe(t.prototype, a), n && oe(t, n), e
        }();

        function le(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var se = function () {
            function e(t) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.elements = {}, this.elements.volume = t.volumeBar, this.elements.played = t.playedBar, this.elements.loaded = t.loadedBar, this.elements.danmaku = t.danmakuOpacityBar
            }
            var t, a, n;
            return t = e, (a = [{
                key: "set",
                value: function (e, t, a) {
                    t = Math.max(t, 0), t = Math.min(t, 1), this.elements[e].style[a] = 100 * t + "%"
                }
            }, {
                key: "get",
                value: function (e) {
                    return parseFloat(this.elements[e].style.width) / 100
                }
            }]) && le(t.prototype, a), n && le(t, n), e
        }();

        function de(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var pe = function () {
            function e(t) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.player = t, window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
                    window.setTimeout(e, 1e3 / 60)
                }, this.types = ["loading", "info", "fps"], this.init()
            }
            var t, a, n;
            return t = e, (a = [{
                key: "init",
                value: function () {
                    var e = this;
                    this.types.map((function (t) {
                        return "fps" !== t && e["init".concat(t, "Checker")](), t
                    }))
                }
            }, {
                key: "initloadingChecker",
                value: function () {
                    var e = this,
                        t = 0,
                        a = 0,
                        n = !1;
                    this.loadingChecker = setInterval((function () {
                        e.enableloadingChecker && (a = e.player.video.currentTime, n || a !== t || e.player.video.paused || (e.player.container.classList.add("dplayer-loading"), n = !0), n && a > t && !e.player.video.paused && (e.player.container.classList.remove("dplayer-loading"), n = !1), t = a)
                    }), 100)
                }
            }, {
                key: "initfpsChecker",
                value: function () {
                    var e = this;
                    window.requestAnimationFrame((function () {
                        if (e.enablefpsChecker)
                            if (e.initfpsChecker(), e.fpsStart) {
                                e.fpsIndex++;
                                var t = new Date;
                                t - e.fpsStart > 1e3 && (e.player.infoPanel.fps(e.fpsIndex / (t - e.fpsStart) * 1e3), e.fpsStart = new Date, e.fpsIndex = 0)
                            } else e.fpsStart = new Date, e.fpsIndex = 0;
                        else e.fpsStart = 0, e.fpsIndex = 0
                    }))
                }
            }, {
                key: "initinfoChecker",
                value: function () {
                    var e = this;
                    this.infoChecker = setInterval((function () {
                        e.enableinfoChecker && e.player.infoPanel.update()
                    }), 1e3)
                }
            }, {
                key: "enable",
                value: function (e) {
                    this["enable".concat(e, "Checker")] = !0, "fps" === e && this.initfpsChecker()
                }
            }, {
                key: "disable",
                value: function (e) {
                    this["enable".concat(e, "Checker")] = !1
                }
            }, {
                key: "destroy",
                value: function () {
                    var e = this;
                    this.types.map((function (t) {
                        return e["enable".concat(t, "Checker")] = !1, e["".concat(t, "Checker")] && clearInterval(e["".concat(t, "Checker")]), t
                    }))
                }
            }]) && de(t.prototype, a), n && de(t, n), e
        }();

        function ce(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var ue = function () {
            function e(t) {
                var a = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.container = t, this.container.addEventListener("animationend", (function () {
                    a.container.classList.remove("dplayer-bezel-transition")
                }))
            }
            var t, a, n;
            return t = e, (a = [{
                key: "switch",
                value: function (e) {
                    this.container.innerHTML = e, this.container.classList.add("dplayer-bezel-transition")
                }
            }]) && ce(t.prototype, a), n && ce(t, n), e
        }();

        function ye(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var me = function () {
            function e(t) {
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.container = t.container, this.barWidth = t.barWidth, this.container.style.backgroundImage = "url('".concat(t.url, "')"), this.events = t.events
            }
            var t, a, n;
            return t = e, (a = [{
                key: "resize",
                value: function (e, t, a) {
                    this.container.style.width = "".concat(e, "px"), this.container.style.height = "".concat(t, "px"), this.container.style.top = "".concat(2 - t, "px"), this.barWidth = a
                }
            }, {
                key: "show",
                value: function () {
                    this.container.style.display = "block", this.events && this.events.trigger("thumbnails_show")
                }
            }, {
                key: "move",
                value: function (e) {
                    this.container.style.backgroundPosition = "-".concat(160 * (Math.ceil(e / this.barWidth * 100) - 1), "px 0"), this.container.style.left = "".concat(Math.min(Math.max(e - this.container.offsetWidth / 2, -10), this.barWidth - 150), "px")
                }
            }, {
                key: "hide",
                value: function () {
                    this.container.style.display = "none", this.events && this.events.trigger("thumbnails_hide")
                }
            }]) && ye(t.prototype, a), n && ye(t, n), e
        }();

        function he(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var fe = function () {
            function e(t) {
                var a = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.player = t, this.autoHideTimer = 0, o.isMobile || (this.player.container.addEventListener("mousemove", (function () {
                    a.setAutoHide()
                })), this.player.container.addEventListener("click", (function () {
                    a.setAutoHide()
                })), this.player.on("play", (function () {
                    a.setAutoHide()
                })), this.player.on("pause", (function () {
                    a.setAutoHide()
                }))), this.initPlayButton(), this.initThumbnails(), this.initPlayedBar(), this.initFullButton(), this.initQualityButton(), this.initScreenshotButton(), this.initSubtitleButton(), this.initHighlights(), o.isMobile || this.initVolumeButton()
            }
            var t, a, n;
            return t = e, (a = [{
                key: "initPlayButton",
                value: function () {
                    var e = this;
                    this.player.template.playButton.addEventListener("click", (function () {
                        e.player.toggle()
                    })), this.player.template.mobilePlayButton.addEventListener("click", (function () {
                        e.player.toggle()
                    })), o.isMobile ? (this.player.template.videoWrap.addEventListener("click", (function () {
                        e.toggle()
                    })), this.player.template.controllerMask.addEventListener("click", (function () {
                        e.toggle()
                    }))) : (this.player.template.videoWrap.addEventListener("click", (function () {
                        e.player.toggle()
                    })), this.player.template.controllerMask.addEventListener("click", (function () {
                        e.player.toggle()
                    })))
                }
            }, {
                key: "initHighlights",
                value: function () {
                    var e = this;
                    this.player.on("durationchange", (function () {
                        if (1 !== e.player.video.duration && e.player.video.duration !== 1 / 0 && e.player.options.highlight) {
                            var t = document.querySelectorAll(".dplayer-highlight");
                            [].slice.call(t, 0).forEach((function (t) {
                                e.player.template.playedBarWrap.removeChild(t)
                            }));
                            for (var a = 0; a < e.player.options.highlight.length; a++)
                                if (e.player.options.highlight[a].text && e.player.options.highlight[a].time) {
                                    var n = document.createElement("div");
                                    n.classList.add("dplayer-highlight"), n.style.left = e.player.options.highlight[a].time / e.player.video.duration * 100 + "%", n.innerHTML = '<span class="dplayer-highlight-text">' + e.player.options.highlight[a].text + "</span>", e.player.template.playedBarWrap.insertBefore(n, e.player.template.playedBarTime)
                                }
                        }
                    }))
                }
            }, {
                key: "initThumbnails",
                value: function () {
                    var e = this;
                    this.player.options.video.thumbnails && (this.thumbnails = new me({
                        container: this.player.template.barPreview,
                        barWidth: this.player.template.barWrap.offsetWidth,
                        url: this.player.options.video.thumbnails,
                        events: this.player.events
                    }), this.player.on("loadedmetadata", (function () {
                        e.thumbnails.resize(160, e.player.video.videoHeight / e.player.video.videoWidth * 160, e.player.template.barWrap.offsetWidth)
                    })))
                }
            }, {
                key: "initPlayedBar",
                value: function () {
                    var e = this,
                        t = function (t) {
                            var a = ((t.clientX || t.changedTouches[0].clientX) - o.getBoundingClientRectViewLeft(e.player.template.playedBarWrap)) / e.player.template.playedBarWrap.clientWidth;
                            a = Math.max(a, 0), a = Math.min(a, 1), e.player.bar.set("played", a, "width"), e.player.template.ptime.innerHTML = o.secondToTime(a * e.player.video.duration)
                        },
                        a = function a(n) {
                            document.removeEventListener(o.nameMap.dragEnd, a), document.removeEventListener(o.nameMap.dragMove, t);
                            var r = ((n.clientX || n.changedTouches[0].clientX) - o.getBoundingClientRectViewLeft(e.player.template.playedBarWrap)) / e.player.template.playedBarWrap.clientWidth;
                            r = Math.max(r, 0), r = Math.min(r, 1), e.player.bar.set("played", r, "width"), e.player.seek(e.player.bar.get("played") * e.player.video.duration), e.player.timer.enable("progress")
                        };
                    this.player.template.playedBarWrap.addEventListener(o.nameMap.dragStart, (function () {
                        e.player.timer.disable("progress"), document.addEventListener(o.nameMap.dragMove, t), document.addEventListener(o.nameMap.dragEnd, a)
                    })), this.player.template.playedBarWrap.addEventListener(o.nameMap.dragMove, (function (t) {
                        if (e.player.video.duration) {
                            var a = e.player.template.playedBarWrap.getBoundingClientRect().left,
                                n = (t.clientX || t.changedTouches[0].clientX) - a;
                            if (n < 0 || n > e.player.template.playedBarWrap.offsetWidth) return;
                            var r = e.player.video.duration * (n / e.player.template.playedBarWrap.offsetWidth);
                            o.isMobile && e.thumbnails && e.thumbnails.show(), e.thumbnails && e.thumbnails.move(n), e.player.template.playedBarTime.style.left = "".concat(n - (r >= 3600 ? 25 : 20), "px"), e.player.template.playedBarTime.innerText = o.secondToTime(r), e.player.template.playedBarTime.classList.remove("hidden")
                        }
                    })), this.player.template.playedBarWrap.addEventListener(o.nameMap.dragEnd, (function () {
                        o.isMobile && e.thumbnails && e.thumbnails.hide()
                    })), o.isMobile || (this.player.template.playedBarWrap.addEventListener("mouseenter", (function () {
                        e.player.video.duration && (e.thumbnails && e.thumbnails.show(), e.player.template.playedBarTime.classList.remove("hidden"))
                    })), this.player.template.playedBarWrap.addEventListener("mouseleave", (function () {
                        e.player.video.duration && (e.thumbnails && e.thumbnails.hide(), e.player.template.playedBarTime.classList.add("hidden"))
                    })))
                }
            }, {
                key: "initFullButton",
                value: function () {
                    var e = this;
                    this.player.template.browserFullButton.addEventListener("click", (function () {
                        e.player.fullScreen.toggle("browser")
                    })), this.player.template.webFullButton.addEventListener("click", (function () {
                        e.player.fullScreen.toggle("web")
                    }))
                }
            }, {
                key: "initVolumeButton",
                value: function () {
                    var e = this,
                        t = function (t) {
                            var a = t || window.event,
                                n = ((a.clientX || a.changedTouches[0].clientX) - o.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap) - 5.5) / 35;
                            e.player.volume(n)
                        },
                        a = function a() {
                            document.removeEventListener(o.nameMap.dragEnd, a), document.removeEventListener(o.nameMap.dragMove, t), e.player.template.volumeButton.classList.remove("dplayer-volume-active")
                        };
                    this.player.template.volumeBarWrapWrap.addEventListener("click", (function (t) {
                        var a = t || window.event,
                            n = ((a.clientX || a.changedTouches[0].clientX) - o.getBoundingClientRectViewLeft(e.player.template.volumeBarWrap) - 5.5) / 35;
                        e.player.volume(n)
                    })), this.player.template.volumeBarWrapWrap.addEventListener(o.nameMap.dragStart, (function () {
                        document.addEventListener(o.nameMap.dragMove, t), document.addEventListener(o.nameMap.dragEnd, a), e.player.template.volumeButton.classList.add("dplayer-volume-active")
                    })), this.player.template.volumeButtonIcon.addEventListener("click", (function () {
                        e.player.video.muted ? (e.player.video.muted = !1, e.player.switchVolumeIcon(), e.player.bar.set("volume", e.player.volume(), "width")) : (e.player.video.muted = !0, e.player.template.volumeIcon.innerHTML = U.volumeOff, e.player.bar.set("volume", 0, "width"))
                    }))
                }
            }, {
                key: "initQualityButton",
                value: function () {
                    var e = this;
                    this.player.options.video.quality && this.player.template.qualityList.addEventListener("click", (function (t) {
                        t.target.classList.contains("dplayer-quality-item") && e.player.switchQuality(t.target.dataset.index)
                    }))
                }
            }, {
                key: "initScreenshotButton",
                value: function () {
                    var e = this;
                    this.player.options.screenshot && this.player.template.camareButton.addEventListener("click", (function () {
                        var t, a = document.createElement("canvas");
                        a.width = e.player.video.videoWidth, a.height = e.player.video.videoHeight, a.getContext("2d").drawImage(e.player.video, 0, 0, a.width, a.height), a.toBlob((function (e) {
                            t = URL.createObjectURL(e);
                            var a = document.createElement("a");
                            a.href = t, a.download = "DPlayer.png", a.style.display = "none", document.body.appendChild(a), a.click(), document.body.removeChild(a), URL.revokeObjectURL(t)
                        })), e.player.events.trigger("screenshot", t)
                    }))
                }
            }, {
                key: "initSubtitleButton",
                value: function () {
                    var e = this;
                    this.player.options.subtitle && (this.player.events.on("subtitle_show", (function () {
                        e.player.template.subtitleButton.dataset.balloon = e.player.tran("Hide subtitle"), e.player.template.subtitleButtonInner.style.opacity = "", e.player.user.set("subtitle", 1)
                    })), this.player.events.on("subtitle_hide", (function () {
                        e.player.template.subtitleButton.dataset.balloon = e.player.tran("Show subtitle"), e.player.template.subtitleButtonInner.style.opacity = "0.4", e.player.user.set("subtitle", 0)
                    })), this.player.template.subtitleButton.addEventListener("click", (function () {
                        e.player.subtitle.toggle()
                    })))
                }
            }, {
                key: "setAutoHide",
                value: function () {
                    var e = this;
                    this.show(), clearTimeout(this.autoHideTimer), this.autoHideTimer = setTimeout((function () {
                        !e.player.video.played.length || e.player.paused || e.disableAutoHide || e.hide()
                    }), 3e3)
                }
            }, {
                key: "show",
                value: function () {
                    this.player.container.classList.remove("dplayer-hide-controller")
                }
            }, {
                key: "hide",
                value: function () {
                    this.player.container.classList.add("dplayer-hide-controller"), this.player.setting.hide(), this.player.comment && this.player.comment.hide()
                }
            }, {
                key: "isShow",
                value: function () {
                    return !this.player.container.classList.contains("dplayer-hide-controller")
                }
            }, {
                key: "toggle",
                value: function () {
                    this.isShow() ? this.hide() : this.show()
                }
            }, {
                key: "destroy",
                value: function () {
                    clearTimeout(this.autoHideTimer)
                }
            }]) && he(t.prototype, a), n && he(t, n), e
        }();

        function be(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var ve = function () {
            function e(t) {
                var a = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.player = t, this.player.template.mask.addEventListener("click", (function () {
                    a.hide()
                })), this.player.template.settingButton.addEventListener("click", (function () {
                    a.show()
                })), this.loop = this.player.options.loop, this.player.template.loopToggle.checked = this.loop, this.player.template.loop.addEventListener("click", (function () {
                    a.player.template.loopToggle.checked = !a.player.template.loopToggle.checked, a.player.template.loopToggle.checked ? a.loop = !0 : a.loop = !1, a.hide()
                })), this.showDanmaku = this.player.user.get("danmaku"), this.showDanmaku || this.player.danmaku && this.player.danmaku.hide(), this.player.template.showDanmakuToggle.checked = this.showDanmaku, this.player.template.showDanmaku.addEventListener("click", (function () {
                    a.player.template.showDanmakuToggle.checked = !a.player.template.showDanmakuToggle.checked, a.player.template.showDanmakuToggle.checked ? (a.showDanmaku = !0, a.player.danmaku.show()) : (a.showDanmaku = !1, a.player.danmaku.hide()), a.player.user.set("danmaku", a.showDanmaku ? 1 : 0), a.hide()
                })), this.unlimitDanmaku = this.player.user.get("unlimited"), this.player.template.unlimitDanmakuToggle.checked = this.unlimitDanmaku, this.player.template.unlimitDanmaku.addEventListener("click", (function () {
                    a.player.template.unlimitDanmakuToggle.checked = !a.player.template.unlimitDanmakuToggle.checked, a.player.template.unlimitDanmakuToggle.checked ? (a.unlimitDanmaku = !0, a.player.danmaku.unlimit(!0)) : (a.unlimitDanmaku = !1, a.player.danmaku.unlimit(!1)), a.player.user.set("unlimited", a.unlimitDanmaku ? 1 : 0), a.hide()
                })), this.player.template.speed.addEventListener("click", (function () {
                    a.player.template.settingBox.classList.add("dplayer-setting-box-narrow"), a.player.template.settingBox.classList.add("dplayer-setting-box-speed")
                }));
                for (var n = function (e) {
                    a.player.template.speedItem[e].addEventListener("click", (function () {
                        a.player.speed(a.player.template.speedItem[e].dataset.speed), a.hide()
                    }))
                }, r = 0; r < this.player.template.speedItem.length; r++) n(r);
                if (this.player.danmaku) {
                    this.player.on("danmaku_opacity", (function (e) {
                        a.player.bar.set("danmaku", e, "width"), a.player.user.set("opacity", e)
                    })), this.player.danmaku.opacity(this.player.user.get("opacity"));
                    var i = function (e) {
                        var t = e || window.event,
                            n = ((t.clientX || t.changedTouches[0].clientX) - o.getBoundingClientRectViewLeft(a.player.template.danmakuOpacityBarWrap)) / 130;
                        n = Math.max(n, 0), n = Math.min(n, 1), a.player.danmaku.opacity(n)
                    },
                        l = function e() {
                            document.removeEventListener(o.nameMap.dragEnd, e), document.removeEventListener(o.nameMap.dragMove, i), a.player.template.danmakuOpacityBox.classList.remove("dplayer-setting-danmaku-active")
                        };
                    this.player.template.danmakuOpacityBarWrapWrap.addEventListener("click", (function (e) {
                        var t = e || window.event,
                            n = ((t.clientX || t.changedTouches[0].clientX) - o.getBoundingClientRectViewLeft(a.player.template.danmakuOpacityBarWrap)) / 130;
                        n = Math.max(n, 0), n = Math.min(n, 1), a.player.danmaku.opacity(n)
                    })), this.player.template.danmakuOpacityBarWrapWrap.addEventListener(o.nameMap.dragStart, (function () {
                        document.addEventListener(o.nameMap.dragMove, i), document.addEventListener(o.nameMap.dragEnd, l), a.player.template.danmakuOpacityBox.classList.add("dplayer-setting-danmaku-active")
                    }))
                }
            }
            var t, a, n;
            return t = e, (a = [{
                key: "hide",
                value: function () {
                    var e = this;
                    this.player.template.settingBox.classList.remove("dplayer-setting-box-open"), this.player.template.mask.classList.remove("dplayer-mask-show"), setTimeout((function () {
                        e.player.template.settingBox.classList.remove("dplayer-setting-box-narrow"), e.player.template.settingBox.classList.remove("dplayer-setting-box-speed")
                    }), 300), this.player.controller.disableAutoHide = !1
                }
            }, {
                key: "show",
                value: function () {
                    this.player.template.settingBox.classList.add("dplayer-setting-box-open"), this.player.template.mask.classList.add("dplayer-mask-show"), this.player.controller.disableAutoHide = !0
                }
            }]) && be(t.prototype, a), n && be(t, n), e
        }();

        function ge(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var we = function () {
            function e(t) {
                var a = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.player = t, this.player.template.mask.addEventListener("click", (function () {
                    a.hide()
                })), this.player.template.commentButton.addEventListener("click", (function () {
                    a.show()
                })), this.player.template.commentSettingButton.addEventListener("click", (function () {
                    a.toggleSetting()
                })), this.player.template.commentColorSettingBox.addEventListener("click", (function () {
                    if (a.player.template.commentColorSettingBox.querySelector("input:checked+span")) {
                        var e = a.player.template.commentColorSettingBox.querySelector("input:checked").value;
                        a.player.template.commentSettingFill.style.fill = e, a.player.template.commentInput.style.color = e, a.player.template.commentSendFill.style.fill = e
                    }
                })), this.player.template.commentInput.addEventListener("click", (function () {
                    a.hideSetting()
                })), this.player.template.commentInput.addEventListener("keydown", (function (e) {
                    13 === (e || window.event).keyCode && a.send()
                })), this.player.template.commentSendButton.addEventListener("click", (function () {
                    a.send()
                }))
            }
            var t, a, n;
            return t = e, (a = [{
                key: "show",
                value: function () {
                    this.player.controller.disableAutoHide = !0, this.player.template.controller.classList.add("dplayer-controller-comment"), this.player.template.mask.classList.add("dplayer-mask-show"), this.player.container.classList.add("dplayer-show-controller"), this.player.template.commentInput.focus()
                }
            }, {
                key: "hide",
                value: function () {
                    this.player.template.controller.classList.remove("dplayer-controller-comment"), this.player.template.mask.classList.remove("dplayer-mask-show"), this.player.container.classList.remove("dplayer-show-controller"), this.player.controller.disableAutoHide = !1, this.hideSetting()
                }
            }, {
                key: "showSetting",
                value: function () {
                    this.player.template.commentSettingBox.classList.add("dplayer-comment-setting-open")
                }
            }, {
                key: "hideSetting",
                value: function () {
                    this.player.template.commentSettingBox.classList.remove("dplayer-comment-setting-open")
                }
            }, {
                key: "toggleSetting",
                value: function () {
                    this.player.template.commentSettingBox.classList.contains("dplayer-comment-setting-open") ? this.hideSetting() : this.showSetting()
                }
            }, {
                key: "send",
                value: function () {
                    var e = this;
                    this.player.template.commentInput.blur(), this.player.template.commentInput.value.replace(/^\s+|\s+$/g, "") ? this.player.danmaku.send({
                        text: this.player.template.commentInput.value,
                        color: o.color2Number(this.player.container.querySelector(".dplayer-comment-setting-color input:checked").value),
                        type: parseInt(this.player.container.querySelector(".dplayer-comment-setting-type input:checked").value)
                    }, (function () {
                        e.player.template.commentInput.value = "", e.hide()
                    })) : this.player.notice(this.player.tran("Please input danmaku content!"))
                }
            }]) && ge(t.prototype, a), n && ge(t, n), e
        }();
        var ke = function e(t) {
            ! function (e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, e), t.options.hotkey && document.addEventListener("keydown", (function (e) {
                if (t.focus) {
                    var a = document.activeElement.tagName.toUpperCase(),
                        n = document.activeElement.getAttribute("contenteditable");
                    if ("INPUT" !== a && "TEXTAREA" !== a && "" !== n && "true" !== n) {
                        var r, o = e || window.event;
                        switch (o.keyCode) {
                            case 32:
                                o.preventDefault(), t.toggle();
                                break;
                            case 37:
                                o.preventDefault(), t.seek(t.video.currentTime - 5), t.controller.setAutoHide();
                                break;
                            case 39:
                                o.preventDefault(), t.seek(t.video.currentTime + 5), t.controller.setAutoHide();
                                break;
                            case 38:
                                o.preventDefault(), r = t.volume() + .1, t.volume(r);
                                break;
                            case 40:
                                o.preventDefault(), r = t.volume() - .1, t.volume(r)
                        }
                    }
                }
            })), document.addEventListener("keydown", (function (e) {
                switch ((e || window.event).keyCode) {
                    case 27:
                        t.fullScreen.isFullScreen("web") && t.fullScreen.cancel("web")
                }
            }))
        };

        function xe(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var Se = function () {
            function e(t) {
                var a = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.player = t, this.shown = !1, Array.prototype.slice.call(this.player.template.menuItem).forEach((function (e, t) {
                    a.player.options.contextmenu[t].click && e.addEventListener("click", (function () {
                        a.player.options.contextmenu[t].click(a.player), a.hide()
                    }))
                })), this.player.container.addEventListener("contextmenu", (function (e) {
                    if (a.shown) a.hide();
                    else {
                        var t = e || window.event;
                        t.preventDefault();
                        var n = a.player.container.getBoundingClientRect();
                        a.show(t.clientX - n.left, t.clientY - n.top), a.player.template.mask.addEventListener("click", (function () {
                            a.hide()
                        }))
                    }
                }))
            }
            var t, a, n;
            return t = e, (a = [{
                key: "show",
                value: function (e, t) {
                    this.player.template.menu.classList.add("dplayer-menu-show");
                    var a = this.player.container.getBoundingClientRect();
                    e + this.player.template.menu.offsetWidth >= a.width ? (this.player.template.menu.style.right = a.width - e + "px", this.player.template.menu.style.left = "initial") : (this.player.template.menu.style.left = e + "px", this.player.template.menu.style.right = "initial"), t + this.player.template.menu.offsetHeight >= a.height ? (this.player.template.menu.style.bottom = a.height - t + "px", this.player.template.menu.style.top = "initial") : (this.player.template.menu.style.top = t + "px", this.player.template.menu.style.bottom = "initial"), this.player.template.mask.classList.add("dplayer-mask-show"), this.shown = !0, this.player.events.trigger("contextmenu_show")
                }
            }, {
                key: "hide",
                value: function () {
                    this.player.template.mask.classList.remove("dplayer-mask-show"), this.player.template.menu.classList.remove("dplayer-menu-show"), this.shown = !1, this.player.events.trigger("contextmenu_hide")
                }
            }]) && xe(t.prototype, a), n && xe(t, n), e
        }();

        function Te(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var Le = function () {
            function e(t) {
                var a = this;
                ! function (e, t) {
                    if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                }(this, e), this.container = t.template.infoPanel, this.template = t.template, this.video = t.video, this.player = t, this.template.infoPanelClose.addEventListener("click", (function () {
                    a.hide()
                }))
            }
            var t, a, n;
            return t = e, (a = [{
                key: "show",
                value: function () {
                    this.beginTime = Date.now(), this.update(), this.player.timer.enable("info"), this.player.timer.enable("fps"), this.container.classList.remove("dplayer-info-panel-hide")
                }
            }, {
                key: "hide",
                value: function () {
                    this.player.timer.disable("info"), this.player.timer.disable("fps"), this.container.classList.add("dplayer-info-panel-hide")
                }
            }, {
                key: "triggle",
                value: function () {
                    this.container.classList.contains("dplayer-info-panel-hide") ? this.show() : this.hide()
                }
            }, {
                key: "update",
                value: function () {
                    this.template.infoVersion.innerHTML = "v".concat("1.25.1", " ").concat("e3a4631"), this.template.infoType.innerHTML = this.player.type, this.template.infoUrl.innerHTML = this.player.options.video.url, this.template.infoResolution.innerHTML = "".concat(this.player.video.videoWidth, " x ").concat(this.player.video.videoHeight), this.template.infoDuration.innerHTML = this.player.video.duration, this.player.options.danmaku && (this.template.infoDanmakuId.innerHTML = this.player.options.danmaku.id, this.template.infoDanmakuApi.innerHTML = this.player.options.danmaku.api, this.template.infoDanmakuAmount.innerHTML = this.player.danmaku.dan.length)
                }
            }, {
                key: "fps",
                value: function (e) {
                    this.template.infoFPS.innerHTML = "".concat(e.toFixed(1))
                }
            }]) && Te(t.prototype, a), n && Te(t, n), e
        }(),
            Ee = a(1),
            Ye = a.n(Ee);

        function qe(e, t) {
            var a = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter((function (t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }))), a.push.apply(a, n)
            }
            return a
        }

        function Be(e, t, a) {
            return t in e ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = a, e
        }

        function Me(e, t) {
            for (var a = 0; a < t.length; a++) {
                var n = t[a];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var ze = 0,
            Ce = [],
            Oe = function () {
                function e(t) {
                    var a = this;
                    ! function (e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.options = p(function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var a = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? qe(Object(a), !0).forEach((function (t) {
                                Be(e, t, a[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(a)) : qe(Object(a)).forEach((function (t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(a, t))
                            }))
                        }
                        return e
                    }({
                        preload: "webtorrent" === t.video.type ? "none" : "metadata"
                    }, t)), this.options.video.quality && (this.qualityIndex = this.options.video.defaultQuality, this.quality = this.options.video.quality[this.options.video.defaultQuality]), this.tran = new u(this.options.lang).tran, this.events = new ee, this.user = new re(this), this.container = this.options.container, this.container.classList.add("dplayer"), this.options.danmaku || this.container.classList.add("dplayer-no-danmaku"), this.options.live && this.container.classList.add("dplayer-live"), o.isMobile && this.container.classList.add("dplayer-mobile"), this.arrow = this.container.offsetWidth <= 500, this.arrow && this.container.classList.add("dplayer-arrow"), this.template = new $({
                        container: this.container,
                        options: this.options,
                        index: ze,
                        tran: this.tran
                    }), this.video = this.template.video, this.bar = new se(this.template), this.bezel = new ue(this.template.bezel), this.fullScreen = new ae(this), this.controller = new fe(this), this.options.danmaku && (this.danmaku = new Z({
                        container: this.template.danmaku,
                        opacity: this.user.get("opacity"),
                        callback: function () {
                            setTimeout((function () {
                                a.template.danmakuLoading.style.display = "none", a.options.autoplay && a.play()
                            }), 0)
                        },
                        error: function (e) {
                            a.notice(e)
                        },
                        apiBackend: this.options.apiBackend,
                        borderColor: this.options.theme,
                        height: this.arrow ? 24 : 30,
                        time: function () {
                            return a.video.currentTime
                        },
                        unlimited: this.user.get("unlimited"),
                        api: {
                            id: this.options.danmaku.id,
                            address: this.options.danmaku.api,
                            token: this.options.danmaku.token,
                            maximum: this.options.danmaku.maximum,
                            addition: this.options.danmaku.addition,
                            user: this.options.danmaku.user
                        },
                        events: this.events,
                        tran: function (e) {
                            return a.tran(e)
                        }
                    }), this.comment = new we(this)), this.setting = new ve(this), this.plugins = {}, document.addEventListener("click", (function () {
                        a.focus = !1
                    }), !0), this.container.addEventListener("click", (function () {
                        a.focus = !0
                    }), !0), this.paused = !0, this.timer = new pe(this), this.hotkey = new ke(this), this.contextmenu = new Se(this), this.initVideo(this.video, this.quality && this.quality.type || this.options.video.type), this.infoPanel = new Le(this), !this.danmaku && this.options.autoplay && this.play(), ze++, Ce.push(this)
                }
                var t, a, r;
                return t = e, r = [{
                    key: "version",
                    get: function () {
                        return "1.25.1"
                    }
                }], (a = [{
                    key: "seek",
                    value: function (e) {
                        e = Math.max(e, 0), this.video.duration && (e = Math.min(e, this.video.duration)), this.video.currentTime < e ? this.notice("".concat(this.tran("FF"), " ").concat((e - this.video.currentTime).toFixed(0), " ").concat(this.tran("s"))) : this.video.currentTime > e && this.notice("".concat(this.tran("REW"), " ").concat((this.video.currentTime - e).toFixed(0), " ").concat(this.tran("s"))), this.video.currentTime = e, this.danmaku && this.danmaku.seek(), this.bar.set("played", e / this.video.duration, "width"), this.template.ptime.innerHTML = o.secondToTime(e)
                    }
                }, {
                    key: "play",
                    value: function (e) {
                        var t = this;
                        if (this.paused = !1, this.video.paused && !o.isMobile && this.bezel.switch(U.play), this.template.playButton.innerHTML = U.pause, this.template.mobilePlayButton.innerHTML = U.pause, e || n.a.resolve(this.video.play()).catch((function () {
                            t.pause()
                        })).then((function () { })), this.timer.enable("loading"), this.container.classList.remove("dplayer-paused"), this.container.classList.add("dplayer-playing"), this.danmaku && this.danmaku.play(), this.options.mutex)
                            for (var a = 0; a < Ce.length; a++) this !== Ce[a] && Ce[a].pause()
                    }
                }, {
                    key: "pause",
                    value: function (e) {
                        this.paused = !0, this.container.classList.remove("dplayer-loading"), this.video.paused || o.isMobile || this.bezel.switch(U.pause), this.template.playButton.innerHTML = U.play, this.template.mobilePlayButton.innerHTML = U.play, e || this.video.pause(), this.timer.disable("loading"), this.container.classList.remove("dplayer-playing"), this.container.classList.add("dplayer-paused"), this.danmaku && this.danmaku.pause()
                    }
                }, {
                    key: "switchVolumeIcon",
                    value: function () {
                        this.volume() >= .95 ? this.template.volumeIcon.innerHTML = U.volumeUp : this.volume() > 0 ? this.template.volumeIcon.innerHTML = U.volumeDown : this.template.volumeIcon.innerHTML = U.volumeOff
                    }
                }, {
                    key: "volume",
                    value: function (e, t, a) {
                        if (e = parseFloat(e), !isNaN(e)) {
                            e = Math.max(e, 0), e = Math.min(e, 1), this.bar.set("volume", e, "width");
                            var n = "".concat((100 * e).toFixed(0), "%");
                            this.template.volumeBarWrapWrap.dataset.balloon = n, t || this.user.set("volume", e), a || this.notice("".concat(this.tran("Volume"), " ").concat((100 * e).toFixed(0), "%")), this.video.volume = e, this.video.muted && (this.video.muted = !1), this.switchVolumeIcon()
                        }
                        return this.video.volume
                    }
                }, {
                    key: "toggle",
                    value: function () {
                        this.video.paused ? this.play() : this.pause()
                    }
                }, {
                    key: "on",
                    value: function (e, t) {
                        this.events.on(e, t)
                    }
                }, {
                    key: "switchVideo",
                    value: function (e, t) {
                        this.pause(), this.video.poster = e.pic ? e.pic : "", this.video.src = e.url, this.initMSE(this.video, e.type || "auto"), t && (this.template.danmakuLoading.style.display = "block", this.bar.set("played", 0, "width"), this.bar.set("loaded", 0, "width"), this.template.ptime.innerHTML = "00:00", this.template.danmaku.innerHTML = "", this.danmaku && this.danmaku.reload({
                            id: t.id,
                            address: t.api,
                            token: t.token,
                            maximum: t.maximum,
                            addition: t.addition,
                            user: t.user
                        }))
                    }
                }, {
                    key: "initMSE",
                    value: function (e, t) {
                        var a = this;
                        if (this.type = t, this.options.video.customType && this.options.video.customType[t]) "[object Function]" === Object.prototype.toString.call(this.options.video.customType[t]) ? this.options.video.customType[t](this.video, this) : console.error("Illegal customType: ".concat(t));
                        else switch ("auto" === this.type && (/m3u8(#|\?|$)/i.exec(e.src) ? this.type = "hls" : /.flv(#|\?|$)/i.exec(e.src) ? this.type = "flv" : /.mpd(#|\?|$)/i.exec(e.src) ? this.type = "dash" : this.type = "normal"), "hls" === this.type && (e.canPlayType("application/x-mpegURL") || e.canPlayType("application/vnd.apple.mpegURL")) && (this.type = "normal"), this.type) {
                            case "hls":
                                if (window.Hls)
                                    if (window.Hls.isSupported()) {
                                        var n = this.options.pluginOptions.hls,
                                            r = new window.Hls(n);
                                        this.plugins.hls = r, r.loadSource(e.src), r.attachMedia(e), this.events.on("destroy", (function () {
                                            r.destroy(), delete a.plugins.hls
                                        }))
                                    } else this.notice("Error: Hls is not supported.");
                                else this.notice("Error: Can't find Hls.");
                                break;
                            case "flv":
                                if (window.flvjs)
                                    if (window.flvjs.isSupported()) {
                                        var o = Object.assign(this.options.pluginOptions.flvjs, {
                                            type: "flv",
                                            url: e.src
                                        }),
                                            i = window.flvjs.createPlayer(o);
                                        this.plugins.flvjs = i, i.attachMediaElement(e), i.load(), this.events.on("destroy", (function () {
                                            i.unload(), i.detachMediaElement(), i.destroy(), delete a.plugins.flvjs
                                        }))
                                    } else this.notice("Error: flvjs is not supported.");
                                else this.notice("Error: Can't find flvjs.");
                                break;
                            case "dash":
                                if (window.dashjs) {
                                    var l = window.dashjs.MediaPlayer().create().initialize(e, e.src, !1),
                                        s = this.options.pluginOptions.dash;
                                    l.updateSettings(s), this.plugins.dash = l, this.events.on("destroy", (function () {
                                        window.dashjs.MediaPlayer().reset(), delete a.plugins.dash
                                    }))
                                } else this.notice("Error: Can't find dashjs.");
                                break;
                            case "webtorrent":
                                if (window.WebTorrent)
                                    if (window.WebTorrent.WEBRTC_SUPPORT) {
                                        this.container.classList.add("dplayer-loading");
                                        var d = this.options.pluginOptions.webtorrent,
                                            p = new window.WebTorrent(d);
                                        this.plugins.webtorrent = p;
                                        var c = e.src;
                                        e.src = "", e.preload = "metadata", e.addEventListener("durationchange", (function () {
                                            return a.container.classList.remove("dplayer-loading")
                                        }), {
                                            once: !0
                                        }), p.add(c, (function (e) {
                                            e.files.find((function (e) {
                                                return e.name.endsWith(".mp4")
                                            })).renderTo(a.video, {
                                                autoplay: a.options.autoplay
                                            })
                                        })), this.events.on("destroy", (function () {
                                            p.remove(c), p.destroy(), delete a.plugins.webtorrent
                                        }))
                                    } else this.notice("Error: Webtorrent is not supported.");
                                else this.notice("Error: Can't find Webtorrent.")
                        }
                    }
                }, {
                    key: "initVideo",
                    value: function (e, t) {
                        var a = this;
                        this.initMSE(e, t), this.on("durationchange", (function () {
                            1 !== e.duration && e.duration !== 1 / 0 && (a.template.dtime.innerHTML = o.secondToTime(e.duration))
                        })), this.on("progress", (function () {
                            var t = e.buffered.length ? e.buffered.end(e.buffered.length - 1) / e.duration : 0;
                            a.bar.set("loaded", t, "width")
                        })), this.on("error", (function () {
                            a.video.error && a.tran && a.notice && "webtorrent" !== a.type && a.notice(a.tran("Video load failed"), -1)
                        })), this.on("ended", (function () {
                            a.bar.set("played", 1, "width"), a.setting.loop ? (a.seek(0), a.play()) : a.pause(), a.danmaku && (a.danmaku.danIndex = 0)
                        })), this.on("play", (function () {
                            a.paused && a.play(!0)
                        })), this.on("pause", (function () {
                            a.paused || a.pause(!0)
                        })), this.on("timeupdate", (function () {
                            a.bar.set("played", a.video.currentTime / a.video.duration, "width");
                            var e = o.secondToTime(a.video.currentTime);
                            a.template.ptime.innerHTML !== e && (a.template.ptime.innerHTML = e)
                        }));
                        for (var n = function (t) {
                            e.addEventListener(a.events.videoEvents[t], (function () {
                                a.events.trigger(a.events.videoEvents[t])
                            }))
                        }, r = 0; r < this.events.videoEvents.length; r++) n(r);
                        this.volume(this.user.get("volume"), !0, !0), this.options.subtitle && (this.subtitle = new ie(this.template.subtitle, this.video, this.options.subtitle, this.events), this.user.get("subtitle") || this.subtitle.hide())
                    }
                }, {
                    key: "switchQuality",
                    value: function (e) {
                        var t = this;
                        if (e = "string" == typeof e ? parseInt(e) : e, this.qualityIndex !== e && !this.switchingQuality) {
                            this.qualityIndex = e, this.switchingQuality = !0, this.quality = this.options.video.quality[e], this.template.qualityButton.innerHTML = this.quality.name;
                            var a = this.video.paused;
                            this.video.pause();
                            var n = Ye()({
                                current: !1,
                                pic: null,
                                screenshot: this.options.screenshot,
                                preload: "auto",
                                url: this.quality.url,
                                subtitle: this.options.subtitle
                            }),
                                r = (new DOMParser).parseFromString(n, "text/html").body.firstChild;
                            this.template.videoWrap.insertBefore(r, this.template.videoWrap.getElementsByTagName("div")[0]), this.prevVideo = this.video, this.video = r, this.initVideo(this.video, this.quality.type || this.options.video.type), this.seek(this.prevVideo.currentTime), this.notice("".concat(this.tran("Switching to"), " ").concat(this.quality.name, " ").concat(this.tran("quality")), -1), this.events.trigger("quality_start", this.quality), this.on("canplay", (function () {
                                if (t.prevVideo) {
                                    if (t.video.currentTime !== t.prevVideo.currentTime) return void t.seek(t.prevVideo.currentTime);
                                    t.template.videoWrap.removeChild(t.prevVideo), t.video.classList.add("dplayer-video-current"), a || t.video.play(), t.prevVideo = null, t.notice("".concat(t.tran("Switched to"), " ").concat(t.quality.name, " ").concat(t.tran("quality"))), t.switchingQuality = !1, t.events.trigger("quality_end")
                                }
                            }))
                        }
                    }
                }, {
                    key: "notice",
                    value: function (e) {
                        var t = this,
                            a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2e3,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .8;
                        this.template.notice.innerHTML = e, this.template.notice.style.opacity = n, this.noticeTime && clearTimeout(this.noticeTime), this.events.trigger("notice_show", e), a > 0 && (this.noticeTime = setTimeout((function () {
                            t.template.notice.style.opacity = 0, t.events.trigger("notice_hide")
                        }), a))
                    }
                }, {
                    key: "resize",
                    value: function () {
                        this.danmaku && this.danmaku.resize(), this.controller.thumbnails && this.controller.thumbnails.resize(160, this.video.videoHeight / this.video.videoWidth * 160, this.template.barWrap.offsetWidth), this.events.trigger("resize")
                    }
                }, {
                    key: "speed",
                    value: function (e) {
                        this.video.playbackRate = e
                    }
                }, {
                    key: "destroy",
                    value: function () {
                        Ce.splice(Ce.indexOf(this), 1), this.pause(), this.controller.destroy(), this.timer.destroy(), this.video.src = "", this.container.innerHTML = "", this.events.trigger("destroy")
                    }
                }]) && Me(t.prototype, a), r && Me(t, r), e
            }();
        console.log("\n".concat(" %c DPlayer v", "1.25.1", " ").concat("e3a4631", " %c http://dplayer.js.org ", "\n", "\n"), "color: #fadfa3; background: #030307; padding:5px 0;", "background: #fadfa3; padding:5px 0;");
        t.default = Oe
    }]).default
}));
//# sourceMappingURL=DPlayer.min.js.map
