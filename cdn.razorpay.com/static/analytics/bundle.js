var window = (function (e) {
  "use strict";
  var O = window,
    A = O.document,
    a = O.Array,
    C = O.Object,
    s = O.String,
    c = O.Number,
    N = O.Date,
    o = O.Math,
    z = O.setTimeout,
    u = O.setInterval,
    l = O.parseInt,
    d = O.encodeURIComponent,
    n = O.decodeURIComponent,
    p = O.btoa,
    f = O.unescape,
    m = O.TypeError,
    h = O.navigator,
    r = O.location,
    g = O.XMLHttpRequest;
  "function" != typeof C.assign &&
    C.defineProperty(C, "assign", {
      value: function (e, t) {
        if (null == e)
          throw new m("Cannot convert undefined or null to object");
        for (var n = C(e), r = 1; r < arguments.length; r++) {
          var i = arguments[r];
          if (null != i)
            for (var o in i)
              C.prototype.hasOwnProperty.call(i, o) && (n[o] = i[o]);
        }
        return n;
      },
      writable: !0,
      configurable: !0,
    }),
    a.prototype.includes ||
      C.defineProperty(a.prototype, "includes", {
        enumerable: !1,
        value: function (t) {
          return (
            0 <
            this.filter(function (e) {
              return e === t;
            }).length
          );
        },
      }),
    s.prototype.includes ||
      (s.prototype.includes = function (e, t) {
        return (
          "number" != typeof t && (t = 0),
          !(t + e.length > this.length) && -1 !== this.indexOf(e, t)
        );
      });
  var t = function (n) {
      return function (t, e) {
        return arguments.length < 2
          ? function (e) {
              return n.call(null, e, t);
            }
          : n.call(null, t, e);
      };
    },
    i = t(function (e, t) {
      return typeof e === t;
    }),
    v =
      (i("boolean"),
      i("number"),
      i("string"),
      i("function"),
      i("object"),
      i("undefined"),
      t(function (e, t) {
        return e && e[t];
      })),
    w = (v("length"), v("prototype")(a), JSON.stringify),
    y =
      C.assign ||
      function (e) {
        for (var t, n = 1, r = arguments.length; n < r; n++)
          for (var i in (t = arguments[n]))
            C.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
        return e;
      },
    b = [
      ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
      ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
      ["opera", /OPR\/([0-9\.]+)(:?\s|$)$/],
      ["edge", /Edge\/([0-9\._]+)/],
      ["ie", /Trident\/7\.0.*rv\:([0-9\.]+)\).*Gecko$/],
      ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
      ["ie", /MSIE\s(7\.0)/],
      ["safari", /Version\/([0-9\._]+).*Safari/],
      ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
      ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
      ["android", /Android\s([0-9\.]+)/],
      ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
      ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
      ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
    ],
    _ = [
      "Windows Phone",
      "Android",
      "CentOS",
      { name: "Chrome OS", pattern: "CrOS" },
      "Debian",
      "Fedora",
      "FreeBSD",
      "Gentoo",
      "Haiku",
      "Kubuntu",
      "Linux Mint",
      "OpenBSD",
      "Red Hat",
      "SuSE",
      "Ubuntu",
      "Xubuntu",
      "Cygwin",
      "Symbian OS",
      "hpwOS",
      "webOS ",
      "webOS",
      "Tablet OS",
      "Tizen",
      "Linux",
      "Mac OS X",
      "Macintosh",
      "Mac",
      "Windows 98;",
      "Windows ",
    ],
    k = {
      "10.0": "10",
      6.4: "10 Technical Preview",
      6.3: "8.1",
      6.2: "8",
      6.1: "Server 2008 R2 / 7",
      "6.0": "Server 2008 / Vista",
      5.2: "Server 2003 / XP 64-bit",
      5.1: "XP",
      5.01: "2000 SP1",
      "5.0": "2000",
      "4.0": "NT",
      "4.90": "ME",
    },
    E = new RegExp(
      [
        "(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|",
        "compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|",
        "midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)",
        "\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|",
        "wap|windows ce|xda|xiino",
      ].join(""),
      "i"
    ),
    S = new RegExp(
      [
        "1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|",
        "ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|",
        "avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|",
        "cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|",
        "ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|",
        "g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|",
        "hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|",
        "i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|",
        "kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])",
        "|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|",
        "mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|",
        "n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|",
        "op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|",
        "po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|",
        "raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|",
        "se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|k\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|",
        "so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|",
        "tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|",
        "veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|",
        "w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-",
      ].join(""),
      "i"
    ),
    x =
      ((T.prototype.detect = function () {
        if (!this.process || this.userAgent)
          return (
            this.userAgent || this.handleMissingError(),
            y({}, this.checkBrowser(), this.checkMobile(), this.checkOs())
          );
        var e = this.process.version.slice(1).split(".").slice(0, 3),
          t = a.prototype.slice.call(e, 1).join("") || "0";
        return {
          name: "node",
          version: e.join("."),
          versionNumber: parseFloat(e[0] + "." + t),
          mobile: !1,
          os: this.process.platform,
        };
      }),
      (T.prototype.checkBrowser = function () {
        var r = this;
        return b
          .filter(function (e) {
            return e[1].test(r.userAgent);
          })
          .map(function (e) {
            var t = e[1].exec(r.userAgent),
              n = t && t[1].split(/[._]/).slice(0, 3),
              t = a.prototype.slice.call(n, 1).join("") || "0";
            return (
              n &&
                n.length < 3 &&
                a.prototype.push.apply(n, 1 === n.length ? [0, 0] : [0]),
              {
                name: s(e[0]),
                version: n.join("."),
                versionNumber: c(n[0] + "." + t),
              }
            );
          })
          .shift();
      }),
      (T.prototype.checkMobile = function () {
        var e = this.userAgent.substr(0, 4);
        return { mobile: E.test(this.userAgent) || S.test(e) };
      }),
      (T.prototype.checkOs = function () {
        var n = this;
        return _.map(function (e) {
          var t = e.name || e,
            e = n.getOsPattern(e);
          return {
            name: t,
            pattern: e,
            value: RegExp(
              "\\b" +
                e.replace(/([ -])(?!$)/g, "$1?") +
                "(?:x?[\\d._]+|[ \\w.]*)",
              "i"
            ).exec(n.userAgent),
          };
        })
          .filter(function (e) {
            return e.value;
          })
          .map(function (e) {
            var t,
              n = e.value[0] || "";
            return (
              e.pattern &&
                e.name &&
                /^Win/i.test(n) &&
                !/^Windows Phone /i.test(n) &&
                (t = k[n.replace(/[^\d.]/g, "")]) &&
                (n = "Windows " + t),
              e.pattern &&
                e.name &&
                (n = n.replace(RegExp(e.pattern, "i"), e.name)),
              (n = n
                .replace(/ ce$/i, " CE")
                .replace(/\bhpw/i, "web")
                .replace(/\bMacintosh\b/, "Mac OS")
                .replace(/_PowerPC\b/i, " OS")
                .replace(/\b(OS X) [^ \d]+/i, "$1")
                .replace(/\bMac (OS X)\b/, "$1")
                .replace(/\/(\d)/, " $1")
                .replace(/_/g, ".")
                .replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "")
                .replace(/\bx86\.64\b/gi, "x86_64")
                .replace(/\b(Windows Phone) OS\b/, "$1")
                .replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1")
                .split(" on ")[0]
                .trim()),
              {
                os: (n = /^(?:webOS|i(?:OS|P))/.test(n)
                  ? n
                  : n.charAt(0).toUpperCase() + n.slice(1)),
              }
            );
          })
          .shift();
      }),
      (T.prototype.getOsPattern = function (e) {
        return ("string" == typeof e ? e : void 0) || e.pattern || e.name;
      }),
      (T.prototype.handleMissingError = function () {
        throw new Error(
          "Please give user-agent.\n> browser(navigator.userAgent or res.headers['user-agent'])."
        );
      }),
      T);
  function T(e, t, n) {
    (this.navigator = t),
      (this.process = n),
      (this.userAgent = e || (this.navigator ? t.userAgent || t.vendor : ""));
  }
  function j(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  function P(e) {
    return "object" == typeof e ? null !== e : "function" == typeof e;
  }
  function I(e) {
    if (!P(e)) throw m(e + " is not an object!");
    return e;
  }
  function M(e) {
    try {
      return !!e();
    } catch (e) {
      return !0;
    }
  }
  function q(e, t) {
    return V.call(e, t);
  }
  function U(e) {
    return "Symbol(".concat(
      void 0 === e ? "" : e,
      ")_",
      (++J + W).toString(36)
    );
  }
  function F(r, i, e) {
    if (
      (!(function (e) {
        if ("function" != typeof e) throw m(e + " is not a function!");
      })(r),
      void 0 === i)
    )
      return r;
    switch (e) {
      case 1:
        return function (e) {
          return r.call(i, e);
        };
      case 2:
        return function (e, t) {
          return r.call(i, e, t);
        };
      case 3:
        return function (e, t, n) {
          return r.call(i, e, t, n);
        };
    }
    return function () {
      return r.apply(i, arguments);
    };
  }
  var L = j(function (e) {
      e = e.exports =
        void 0 !== window && window.Math == o
          ? window
          : "undefined" != typeof self && self.Math == o
          ? self
          : Function("return this")();
      "number" == typeof __g && (__g = e);
    }),
    R = j(function (e) {
      e = e.exports = { version: "2.5.7" };
      "number" == typeof __e && (__e = e);
    }),
    i = !M(function () {
      return (
        7 !=
        C.defineProperty({}, "a", {
          get: function () {
            return 7;
          },
        }).a
      );
    }),
    B = L.document,
    $ = P(B) && P(B.createElement),
    D =
      !i &&
      !M(function () {
        return (
          7 !=
          C.defineProperty($ ? B.createElement("div") : {}, "a", {
            get: function () {
              return 7;
            },
          }).a
        );
      }),
    Q = C.defineProperty,
    Y = {
      f: i
        ? C.defineProperty
        : function (e, t, n) {
            if (
              (I(e),
              (t = (function (e, t) {
                if (!P(e)) return e;
                var n, r;
                if (
                  t &&
                  "function" == typeof (n = e.toString) &&
                  !P((r = n.call(e)))
                )
                  return r;
                if ("function" == typeof (n = e.valueOf) && !P((r = n.call(e))))
                  return r;
                if (
                  !t &&
                  "function" == typeof (n = e.toString) &&
                  !P((r = n.call(e)))
                )
                  return r;
                throw m("Can't convert object to primitive value");
              })(t, !0)),
              I(n),
              D)
            )
              try {
                return Q(e, t, n);
              } catch (e) {}
            if ("get" in n || "set" in n) throw m("Accessors not supported!");
            return "value" in n && (e[t] = n.value), e;
          },
    },
    K = i
      ? function (e, t, n) {
          return Y.f(e, t, {
            enumerable: !((t = 1) & t),
            configurable: !(2 & t),
            writable: !(4 & t),
            value: n,
          });
        }
      : function (e, t, n) {
          return (e[t] = n), e;
        },
    V = {}.hasOwnProperty,
    J = 0,
    W = o.random(),
    G = j(function (e) {
      var o = U("src"),
        t = "toString",
        n = Function[t],
        a = ("" + n).split(t);
      (R.inspectSource = function (e) {
        return n.call(e);
      }),
        (e.exports = function (e, t, n, r) {
          var i = "function" == typeof n;
          i && (q(n, "name") || K(n, "name", t)),
            e[t] !== n &&
              (i && (q(n, o) || K(n, o, e[t] ? "" + e[t] : a.join(s(t)))),
              e === L
                ? (e[t] = n)
                : r
                ? e[t]
                  ? (e[t] = n)
                  : K(e, t, n)
                : (delete e[t], K(e, t, n)));
        })(Function.prototype, t, function () {
          return ("function" == typeof this && this[o]) || n.call(this);
        });
    }),
    X = "prototype",
    H = function (e, t, n) {
      var r,
        i,
        o,
        a = e & H.F,
        s = e & H.G,
        c = e & H.S,
        u = e & H.P,
        l = e & H.B,
        d = s ? L : c ? L[t] || (L[t] = {}) : (L[t] || {})[X],
        p = s ? R : R[t] || (R[t] = {}),
        f = p[X] || (p[X] = {});
      for (r in (s && (n = t), n))
        (i = ((o = !a && d && void 0 !== d[r]) ? d : n)[r]),
          (o =
            l && o
              ? F(i, L)
              : u && "function" == typeof i
              ? F(Function.call, i)
              : i),
          d && G(d, r, i, e & H.U),
          p[r] != i && K(p, r, o),
          u && f[r] != i && (f[r] = i);
    };
  (L.core = R),
    (H.F = 1),
    (H.G = 2),
    (H.S = 4),
    (H.P = 8),
    (H.B = 16),
    (H.W = 32),
    (H.U = 64),
    (H.R = 128);
  function Z(e) {
    return ie.call(e).slice(8, -1);
  }
  function ee(e) {
    if (null == e) throw m("Can't call method on  " + e);
    return e;
  }
  function te(e) {
    return 0 < e
      ? ce(
          ((e = e), isNaN((e = +e)) ? 0 : (0 < e ? se : ae)(e)),
          9007199254740991
        )
      : 0;
  }
  function ne(e, t) {
    return (
      ue((e = e)) &&
        ("function" != typeof (n = e.constructor) ||
          (n !== a && !ue(n.prototype)) ||
          (n = void 0),
        P(n) && null === (n = n[de]) && (n = void 0)),
      new (void 0 === n ? a : n)(t)
    );
    var n;
  }
  var re = H,
    ie = {}.toString,
    oe = C("z").propertyIsEnumerable(0)
      ? C
      : function (e) {
          return "String" == Z(e) ? e.split("") : C(e);
        },
    ae = o.ceil,
    se = o.floor,
    ce = o.min,
    ue =
      a.isArray ||
      function (e) {
        return "Array" == Z(e);
      },
    le = j(function (e) {
      var t = "__core-js_shared__",
        n = L[t] || (L[t] = {});
      (e.exports = function (e, t) {
        return n[e] || (n[e] = void 0 !== t ? t : {});
      })("versions", []).push({
        version: R.version,
        mode: "global",
        copyright: "© 2018 Denis Pushkarev (zloirock.ru)",
      });
    }),
    de = j(function (e) {
      var t = le("wks"),
        n = L.Symbol,
        r = "function" == typeof n;
      (e.exports = function (e) {
        return t[e] || (t[e] = (r && n[e]) || (r ? n : U)("Symbol." + e));
      }).store = t;
    })("species"),
    t = function (d, e) {
      var p = 1 == d,
        f = 2 == d,
        m = 3 == d,
        h = 4 == d,
        g = 6 == d,
        v = 5 == d || g,
        w = e || ne;
      return function (e, t, n) {
        for (
          var r,
            i,
            o = C(ee(e)),
            a = oe(o),
            s = F(t, n, 3),
            c = te(a.length),
            u = 0,
            l = p ? w(e, c) : f ? w(e, 0) : void 0;
          u < c;
          u++
        )
          if ((v || u in a) && ((i = s((r = a[u]), u, o)), d))
            if (p) l[u] = i;
            else if (i)
              switch (d) {
                case 3:
                  return !0;
                case 5:
                  return r;
                case 6:
                  return u;
                case 2:
                  l.push(r);
              }
            else if (h) return !1;
        return g ? -1 : m || h ? h : l;
      };
    },
    v = function (e, t) {
      return (
        !!e &&
        M(function () {
          t ? e.call(null, function () {}, 1) : e.call(null);
        })
      );
    },
    pe = t(2);
  re(re.P + re.F * !v([].filter, !0), "Array", {
    filter: function (e) {
      return pe(this, e, arguments[1]);
    },
  });
  var fe = t(1);
  re(re.P + re.F * !v([].map, !0), "Array", {
    map: function (e) {
      return fe(this, e, arguments[1]);
    },
  });
  var me = "\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff",
    i = "[" + me + "]",
    he = RegExp("^" + i + i + "*"),
    ge = RegExp(i + i + "*$"),
    t = function (e, t, n) {
      var r = {},
        i = M(function () {
          return me[e]() || "​" != "​"[e]();
        }),
        t = (r[e] = i ? t(ve) : me[e]);
      n && (r[n] = t), re(re.P + re.F * i, "String", r);
    },
    ve = (t.trim = function (e, t) {
      return (
        (e = s(ee(e))),
        1 & t && (e = e.replace(he, "")),
        2 & t && (e = e.replace(ge, "")),
        e
      );
    });
  t("trim", function (e) {
    return function () {
      return e(this, 3);
    };
  });
  var we = void 0 !== window ? window.navigator : void 0,
    ye = "undefined" != typeof process ? process : void 0;
  function be(e) {
    return new x(e, we, ye).detect();
  }
  function _e(e) {
    return { error: { description: e } };
  }
  function ke(t) {
    var n = new g(),
      e = t.url,
      r = t.callback,
      i = t.data || null,
      o = t.method || "get";
    if (
      (n.open(o, e, !0),
      t.headers &&
        C.keys(t.headers).forEach(function (e) {
          n.setRequestHeader(e, t.headers[e]);
        }),
      "function" == typeof r &&
        ((n.onreadystatechange = function () {
          if (4 === n.readyState && n.status) {
            var t;
            try {
              t = JSON.parse(n.responseText);
            } catch (e) {
              (t = _e("Parsing error")).xhr = {
                status: n.status,
                text: n.responseText,
              };
            }
            r(t);
          }
        }),
        (n.onerror = function () {
          var e = _e("Network error");
          (e.xhr = { status: 0 }), r(e);
        })),
      o &&
        "post" === o.toLowerCase() &&
        n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
      (o = i) && "object" == typeof o)
    ) {
      var a,
        s = [];
      for (a in i) i.hasOwnProperty(a) && s.push(a + "=" + i[a]);
      i = s.join("&");
    }
    return n.send(i), n;
  }
  var Ee = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    Se = Ee.split("").reduce(function (e, t, n) {
      return (e[t] = n), e;
    }, {});
  function xe(e) {
    for (var t = ""; e; ) (t = Ee[e % 62] + t), (e = o.floor(e / 62));
    return t;
  }
  function Te() {
    var n,
      r =
        xe(
          s(N.now() - 13885344e5) +
            ("000000" + o.floor(1e6 * o.random())).slice(-6)
        ) +
        xe(o.floor(238328 * o.random())) +
        "0",
      i = 0;
    return (
      r.split("").forEach(function (e, t) {
        (n = Se[r[r.length - 1 - t]]),
          (r.length - t) % 2 && (n *= 2),
          62 <= n && (n = (n % 62) + 1),
          (i += n);
      }),
      (n = (n = i % 62) && Ee[62 - n]),
      r.slice(0, 13) + n
    );
  }
  function je(e) {
    var t,
      n,
      r,
      i,
      o = void 0 === e ? {} : e,
      e = o.generateIfMissing,
      a = void 0 === e || e,
      o = o.prefix,
      s = void 0 === o ? "rzp" : o;
    try {
      (t = window.localStorage.getItem(s + "_client_id")),
        (n = window.sessionStorage.getItem(s + "_session_id")),
        (r = window.sessionStorage.getItem(s + "_render_id")),
        (i = window.sessionStorage.getItem(s + "_render_id_expiration")),
        t ||
          ((t = Te()), a && window.localStorage.setItem(s + "_client_id", t)),
        n ||
          ((n = Te()),
          a && window.sessionStorage.setItem(s + "_session_id", n)),
        (!r || N.now() > i) &&
          ((r = Te()),
          (i = N.now() + 6e5),
          a &&
            (window.sessionStorage.setItem(s + "_render_id", r),
            window.sessionStorage.setItem(s + "_render_id_expiration", i)));
    } catch (e) {
      (t = t || Te()), (n = n || Te()), (r = r || Te());
    }
    return { client_id: t, session_id: n, render_id: r };
  }
  function Pe(e) {
    var t;
    try {
      (t = sessionStorage.getItem(e)), (t = JSON.parse(t) || {});
    } catch (e) {
      t = {};
    }
    return t.attributions && t.attributions[0] ? t.attributions[0] : {};
  }
  function Oe() {
    "test" === window.rzp_env && console.log.apply(this, arguments);
  }
  function Ae() {
    var e = be(),
      t = null;
    return (
      void 0 !== h &&
        "connection" in h &&
        "effectiveType" in h.connection &&
        (t = h.connection.effectiveType),
      {
        device: e.mobile ? "mobile" : "web",
        browser: e.name,
        browser_version: e.version,
        os: e.os,
        screen_height: window.screen && window.screen.height,
        screen_width: window.screen && window.screen.width,
        connection_type: t,
      }
    );
  }
  var Ce = A;
  Ce.getElementsByTagName("body")[0];
  function Ne(e) {
    Ie(e, "", 0);
  }
  function ze(e) {
    var t =
      (e = (Ce.cookie + ";").match(new RegExp(e + "=.*;"))) &&
      e[0].split(/=|;/)[1];
    try {
      return t && n(t);
    } catch (e) {
      return console.error("[static -> getCookie]: ", e.message, t), t;
    }
  }
  function Ie(e, t, n) {
    return (
      2 <= window.staticAnalyticsVersion
        ? function (e, t, n) {
            "object" == typeof t && (t = JSON.stringify(t));
            var r = new N();
            r.setDate(r.getDate() + (n || 365)),
              (Ce.cookie =
                e +
                "=" +
                d(t) +
                ";expires=" +
                r.toUTCString() +
                ";path=/;domain=.razorpay.com");
          }
        : function (e, t, n) {
            "object" == typeof t && (t = JSON.stringify(t));
            var r = new N();
            r.setDate(r.getDate() + (n || 365)),
              (Ce.cookie =
                e +
                "=" +
                t +
                ";expires=" +
                r.toUTCString() +
                ";path=/;domain=.razorpay.com");
          }
    )(e, t, n);
  }
  function Me(e, t) {
    var n;
    (t = (function (t, n) {
      void 0 === t && (t = {}), void 0 === n && (n = "");
      var r = [];
      return (
        C.keys(t).forEach(function (e) {
          return r.push("" + n + e + "=" + t[e]);
        }),
        r.join("&")
      );
    })(t)) && ((n = -1 < e.indexOf("?") ? "&" : "?"), (e += n + t)),
      (e = e),
      (new O.Image().src = e);
  }
  function qe(e) {
    var r = [];
    return (function e(t) {
      if ("object" == typeof t) {
        if (-1 !== r.indexOf(t)) return !0;
        for (var n in (r.push(t), t))
          if (t.hasOwnProperty(n) && e(t[n])) return !0;
      }
      return !1;
    })(e);
  }
  function Ue(e) {
    void 0 === e && (e = []),
      e.forEach(function (e) {
        var t;
        qe(e) &&
          console.error(
            JSON.stringify({
              event: e.event,
              event_type: e.event_type,
              event_group: e.event_group,
              event_version: e.event_version,
              timestamp: e.timestamp,
              properties: {
                component:
                  null === (t = e.properties) || void 0 === t
                    ? void 0
                    : t.component,
                componentPath:
                  null === (t = e.properties) || void 0 === t
                    ? void 0
                    : t.componentPath,
                card_id:
                  null === (e = e.properties) || void 0 === e
                    ? void 0
                    : e.card_id,
              },
            })
          );
      });
  }
  function Fe(e, t) {
    return e((t = { exports: {} }), t.exports), t.exports;
  }
  for (
    var Le = Fe(function (e) {
        var t,
          n,
          r =
            ("undefined" != typeof crypto &&
              crypto.getRandomValues &&
              crypto.getRandomValues.bind(crypto)) ||
            ("undefined" != typeof msCrypto &&
              "function" == typeof window.msCrypto.getRandomValues &&
              msCrypto.getRandomValues.bind(msCrypto));
        r
          ? ((t = new Uint8Array(16)),
            (e.exports = function () {
              return r(t), t;
            }))
          : ((n = new a(16)),
            (e.exports = function () {
              for (var e, t = 0; t < 16; t++)
                0 == (3 & t) && (e = 4294967296 * o.random()),
                  (n[t] = (e >>> ((3 & t) << 3)) & 255);
              return n;
            }));
      }),
      Re = [],
      Be = 0;
    Be < 256;
    ++Be
  )
    Re[Be] = (Be + 256).toString(16).substr(1);
  var $e,
    De,
    Qe = function (e, t) {
      return (
        (t = t || 0),
        [
          Re[e[t++]],
          Re[e[t++]],
          Re[e[t++]],
          Re[e[t++]],
          "-",
          Re[e[t++]],
          Re[e[t++]],
          "-",
          Re[e[t++]],
          Re[e[t++]],
          "-",
          Re[e[t++]],
          Re[e[t++]],
          "-",
          Re[e[t++]],
          Re[e[t++]],
          Re[e[t++]],
          Re[e[t++]],
          Re[e[t++]],
          Re[e[t++]],
        ].join("")
      );
    },
    Ye = 0,
    Ke = 0;
  v = function (e, t, n) {
    var r = (t && n) || 0,
      i = t || [],
      o = (e = e || {}).node || $e,
      a = void 0 !== e.clockseq ? e.clockseq : De;
    (null != o && null != a) ||
      ((c = Le()),
      null == o && (o = $e = [1 | c[0], c[1], c[2], c[3], c[4], c[5]]),
      null == a && (a = De = 16383 & ((c[6] << 8) | c[7])));
    var s = void 0 !== e.msecs ? e.msecs : new N().getTime(),
      n = void 0 !== e.nsecs ? e.nsecs : Ke + 1,
      c = s - Ye + (n - Ke) / 1e4;
    if (
      (c < 0 && void 0 === e.clockseq && (a = (a + 1) & 16383),
      (c < 0 || Ye < s) && void 0 === e.nsecs && (n = 0),
      1e4 <= n)
    )
      throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
    (Ye = s),
      (De = a),
      (n = (1e4 * (268435455 & (s += 122192928e5)) + (Ke = n)) % 4294967296),
      (i[r++] = (n >>> 24) & 255),
      (i[r++] = (n >>> 16) & 255),
      (i[r++] = (n >>> 8) & 255),
      (i[r++] = 255 & n),
      (s = ((s / 4294967296) * 1e4) & 268435455),
      (i[r++] = (s >>> 8) & 255),
      (i[r++] = 255 & s),
      (i[r++] = ((s >>> 24) & 15) | 16),
      (i[r++] = (s >>> 16) & 255),
      (i[r++] = (a >>> 8) | 128),
      (i[r++] = 255 & a);
    for (var u = 0; u < 6; ++u) i[r + u] = o[u];
    return t || Qe(i);
  };
  (i = function (e, t, n) {
    var r = (t && n) || 0;
    "string" == typeof e &&
      ((t = "binary" === e ? new a(16) : null), (e = null));
    var i = (e = e || {}).random || (e.rng || Le)();
    if (((i[6] = (15 & i[6]) | 64), (i[8] = (63 & i[8]) | 128), t))
      for (var o = 0; o < 16; ++o) t[r + o] = i[o];
    return t || Qe(i);
  }),
    (t = i);
  (t.v1 = v), (t.v4 = i);
  var Ve,
    Je,
    We,
    Ge,
    Xe,
    He = t;
  function Ze() {
    var e, t;
    (Ve = A.referrer),
      (Je = r.href),
      (We = h.userAgent),
      (e = window.location.search.substring(1)),
      (t = {}),
      e.split("&").forEach(function (e) {
        return !!e && ((e = e.split("=")), void (t[e[0]] = decodeURI(e[1])));
      }),
      (Ge = t),
      (Xe = ze("clientId")) || Ie("clientId", (Xe = He())),
      Oe("VISIT PARAMS...", Ve, Je, We, Ge, Xe);
  }
  function et(e) {
    var t = A.createElement("script");
    (t.src = "//js.hs-scripts.com/" + e + ".js"),
      (t.async = !0),
      (t.defer = !0),
      A.documentElement.appendChild(t);
  }
  function tt(e, t, n) {
    ke({
      url: "https://lumberjack.stage.razorpay.in/v1/track",
      method: "post",
      data: {
        key: e,
        data: d(
          p(
            JSON.stringify(
              ((e = { user_agent: We, referer: Ve }),
              (t = { event: (t = t) }),
              (n = n) && (t.properties = n),
              { context: e, events: [t] })
            )
          )
        ),
      },
    });
  }
  function nt(e, t) {
    void 0 === t && (t = {});
    var n = C.assign({}, t);
    n instanceof C && isNaN(n.eventValue) && (n.eventValue = 0);
    t = O.ga;
    Oe("EMIT GA...", e, n),
      n
        ? (t("send", e, n), t("old.send", e, n), t("older.send", e, n))
        : (t("send", e), t("old.send", e), t("older.send", e));
  }
  (t = h.userAgent),
    /iPhone|iPad/.test(t),
    /Windows Phone|Opera Mini|UCBrowser|FBAN|\(iP.+((Cr|Fx)iOS)/.test(t),
    /iPhone|Android 2\./.test(t);
  function rt(e) {
    if (e) {
      if (e instanceof a) return e.length;
      for (var t in e) return 1;
    }
  }
  function it(e) {
    if (!e || "string" != typeof e) return "";
    var t,
      n = {
        organic: {
          Google: ["google"],
          Bing: ["bing.com"],
          Yahoo: ["yahoo."],
          AOL: ["aol.com"],
          Ask: ["ask.com"],
          Baidu: ["baidu.com"],
          DuckDuckGo: ["duckduckgo.com"],
          Yandex: ["yandex."],
        },
        social: {
          Facebook: ["lm.facebook", "l.facebook", "m.facebook", "facebook.com"],
          Linkedin: [
            "m.linkedin",
            "linkedinpost",
            "in.linkedin",
            "linkedin.com",
          ],
          Quora: ["quora.com"],
          Reddit: ["m.reddit", "reddit.com"],
          Twitter: ["t.co/", "twitter.com", "mobile.twitter", "m.twitter"],
          Medium: ["medium.com"],
        },
      };
    for (t in n)
      for (var r = C.keys(n[t]), i = 0; i < r.length; i++)
        for (var o = n[t][r[i]], a = 0; a < o.length; a++)
          if (0 <= e.indexOf(o[a]))
            return { source: r[i].toLowerCase(), medium: t };
    return "";
  }
  function ot(e) {
    return (e =
      e ||
      (r.hash
        ? (e = r.hash).replace(/#\//, "")
        : (e = (e = r.pathname).replace("/app/", "")).split("/")[0])).split(
      "?"
    )[0];
  }
  function at() {
    return h.connection ? h.connection.effectiveType : null;
  }
  function st(e) {
    var n = e.appName;
    window.addEventListener("load", function () {
      var e, t;
      window.rzpQMetrics.push({
        type: "metrics",
        properties: {
          name: vt,
          labels: [
            { type: mt, source: be().mobile ? "mobile" : "web", route: n },
            {
              type: ht,
              source:
                ((e = be()),
                (t =
                  null !==
                    (t =
                      null === (t = e.version) || void 0 === t
                        ? void 0
                        : t.split(".")[0]) && void 0 !== t
                    ? t
                    : "0"),
                e.name + " " + t),
              route: n,
            },
            { type: gt, source: at(), route: n },
          ],
        },
      });
    });
  }
  function ct(e) {
    var t, n, r;
    (window.rzpQMetrics = (
      window.razorpayAnalytics || window.analytics
    ).createQ({ type: "metrics" })),
      "pg-dashboard" !== e.appName &&
        ((t = e),
        (n = ot()),
        t.route && (n = t.route),
        window.addEventListener("load", function () {
          z(function () {
            window.rzpQMetrics.push({
              type: "metrics",
              properties: { name: vt, labels: [{ type: ft, source: n }] },
            });
          });
        })),
      (r = e),
      window.addEventListener("load", function () {
        z(function () {
          var e = ut.getTimes(),
            t = [],
            n = ot();
          r.route && (n = r.route),
            e.loadTime &&
              t.push({
                metric: pt,
                route: n,
                connectionType: at(),
                time: e.loadTime,
              }),
            e.firstPaintTime &&
              t.push({
                metric: lt,
                route: n,
                connectionType: at(),
                time: e.firstPaintTime,
              }),
            e.domInteractive &&
              t.push({
                metric: dt,
                route: n,
                connectionType: at(),
                time: e.domInteractive - e.navigationStart,
              }),
            window.rzpQMetrics.push({
              type: "metrics",
              properties: { name: wt, labels: t },
            });
        }, 0);
      }),
      st(e);
  }
  var ut = Fe(function (e) {
      var a;
      ((a = void 0 !== window ? window : {}).timing = a.timing || {
        getTimes: function (e) {
          var t =
            a.performance ||
            a.webkitPerformance ||
            a.msPerformance ||
            a.mozPerformance;
          if (void 0 === t) return !1;
          var n,
            r = t.timing,
            i = {};
          if (((e = e || {}), r)) {
            if (e && !e.simple)
              for (var o in r)
                (n = r[o]),
                  !isNaN(parseFloat(n)) &&
                    isFinite(n) &&
                    (i[o] = parseFloat(r[o]));
            void 0 === i.firstPaint &&
              ((t = 0),
              a.chrome && a.chrome.loadTimes
                ? ((t = 1e3 * a.chrome.loadTimes().firstPaintTime),
                  (i.firstPaintTime =
                    t - 1e3 * a.chrome.loadTimes().startLoadTime))
                : "number" == typeof a.performance.timing.msFirstPaint &&
                  ((t = a.performance.timing.msFirstPaint),
                  (i.firstPaintTime =
                    t - a.performance.timing.navigationStart)),
              e && !e.simple && (i.firstPaint = t)),
              (i.loadTime = r.loadEventEnd - r.fetchStart),
              (i.domReadyTime = r.domComplete - r.domInteractive),
              (i.readyStart = r.fetchStart - r.navigationStart),
              (i.redirectTime = r.redirectEnd - r.redirectStart),
              (i.appcacheTime = r.domainLookupStart - r.fetchStart),
              (i.unloadEventTime = r.unloadEventEnd - r.unloadEventStart),
              (i.lookupDomainTime = r.domainLookupEnd - r.domainLookupStart),
              (i.connectTime = r.connectEnd - r.connectStart),
              (i.requestTime = r.responseEnd - r.requestStart),
              (i.initDomTreeTime = r.domInteractive - r.responseEnd),
              (i.loadEventTime = r.loadEventEnd - r.loadEventStart);
          }
          return i;
        },
        printTable: function (e) {
          var t = {},
            n = this.getTimes(e) || {};
          C.keys(n)
            .sort()
            .forEach(function (e) {
              t[e] = { ms: n[e], s: +(n[e] / 1e3).toFixed(2) };
            }),
            console.table(t);
        },
        printSimpleTable: function () {
          this.printTable({ simple: !0 });
        },
      }),
        e.exports && (e.exports = a.timing);
    }),
    lt = "ttfp",
    dt = "dom_interactive",
    pt = "pageLoad",
    ft = "pageView",
    mt = "device",
    ht = "browser",
    gt = "connection",
    vt = "device.metrics",
    wt = "page.metrics";
  function yt(e) {
    var t = this,
      n = e.pollFreq,
      r = e.emitTo,
      i = e.version;
    (this.eventsQ = []),
      (this.testEventsQ = []),
      (this.user = {}),
      (this.newEvent = function () {
        (t.e = {
          event: null,
          event_type: null,
          event_group: null,
          event_version: i || "",
          timestamp: null,
        }),
          (t.additionalProps = { componentPath: "" }),
          (t.immediate = !1);
      }),
      this.newEvent(),
      (this.emitTo = r),
      (this.poller = u(function () {
        return t.drain();
      }, n));
  }
  t = function (e) {
    var r = e.state,
      i = e.group,
      o = e.type;
    return function (e, t) {
      var n = new N();
      return (
        (this.e.event = r ? e + "." + r : e),
        (this.e.timestamp = n.getTime()),
        (this.e.event_type = this.e.event_type || o),
        (this.e.event_group = this.e.event_group || i),
        C.assign(t || {}, { location: window.location.hash })
      );
    };
  };
  (yt.prototype.defineEventModifiers = function (r) {
    for (var e in r)
      !(function (n) {
        yt.prototype[n] = function () {
          for (var e = 0; e < r[n].length; e++) {
            var t = r[n][e];
            this.e.hasOwnProperty(t.propertyName)
              ? (this.e[t.propertyName] = t.value)
              : (this.additionalProps[t.propertyName] = t.value);
          }
          return this;
        };
      })(e);
  }),
    (yt.prototype.config = function (e) {
      this.pollFreq = e.pollFreq || this.pollFreq;
    }),
    (yt.prototype.setUser = function (e) {
      this.user = e;
    }),
    (yt.prototype.now = function () {
      return (this.immediate = !0), this;
    }),
    (yt.prototype.push = function (e) {
      var t = {},
        t =
          "metrics" === e.type
            ? e.properties
            : (void 0 === e.user &&
                void 0 !== this.user &&
                (e.user = this.user),
              (e = C.assign(e, this.additionalProps)),
              C.assign(
                { properties: C.assign(e, this.additionalProps) },
                this.e
              ));
      ("live" === e.mode ? this.eventsQ : this.testEventsQ).push(t),
        this.immediate && this.drain(),
        this.newEvent();
    }),
    (yt.prototype.drain = function () {
      if (void 0 !== this.eventsQ && this.eventsQ.length) {
        try {
          this.emitTo({ mode: "live", events: this.eventsQ });
        } catch (e) {
          throw (Ue(this.eventsQ), (this.eventsQ = []), e);
        }
        this.eventsQ = [];
      }
      if (void 0 !== this.testEventsQ && this.testEventsQ.length) {
        try {
          this.emitTo({ mode: "test", events: this.testEventsQ });
        } catch (e) {
          throw (Ue(this.testEventsQ), (this.testEventsQ = []), e);
        }
        this.testEventsQ = [];
      }
    }),
    (yt.prototype.component = function (e, t) {
      return (
        void 0 === t && (t = {}),
        (this.additionalProps.componentPath = this.additionalProps.componentPath
          ? e + ">" + this.additionalProps.componentPath
          : "" + e),
        C.assign({ component: e }, t)
      );
    }),
    (yt.prototype.initiated = new t({
      state: "initiated",
      group: "userAction",
      type: "behav",
    })),
    (yt.prototype.dropped = new t({
      state: "dropped",
      group: "userAction",
      type: "behav",
    })),
    (yt.prototype.success = new t({
      state: "success",
      group: "userAction",
      type: "behav",
    })),
    (yt.prototype.failed = new t({
      state: "failed",
      group: "userAction",
      type: "behav",
    })),
    (yt.prototype.viewed = new t({
      state: "viewed",
      group: "userAction",
      type: "behav",
    })),
    (yt.prototype.interaction = new t({ group: "userAction", type: "behav" })),
    (yt.prototype.clicked = new t({
      state: "clicked",
      group: "userAction",
      type: "behav",
    }));
  function bt(e) {
    var t = new N(e.getTime()),
      e = t.getTimezoneOffset();
    return t.setSeconds(0, 0), 6e4 * e + (t.getTime() % 6e4);
  }
  var _t = Fe(function (e, t) {
    function i(e) {
      return (function (e) {
        for (var t = [], n = 0; n < e.attributes.length; n++)
          t.push(e.attributes[n].nodeName);
        return t;
      })(e).filter(function (e) {
        return (
          "data-lytics-trigger" !== (e = e.toLowerCase()) &&
          ("data-lytics" === e || 0 === e.indexOf("data-lytics-"))
        );
      });
    }
    function c(n) {
      var r = {};
      return (
        i(n).forEach(function (e) {
          var t;
          r[
            "data-lytics" === (t = e)
              ? "trigger"
              : (t = t
                  .toLowerCase()
                  .replace("data-lytics-", "")
                  .split("-")
                  .map(function (e, t) {
                    return 0 === t
                      ? e
                      : e[0].toUpperCase() + e.slice(1, e.length);
                  })
                  .join(""))
          ] = n.getAttribute(e);
        }),
        r
      );
    }
    function a(n, e, r, i, o) {
      var t = e.querySelectorAll("*[data-lytics=".concat(n, "]"));
      if (t && 0 !== t.length) {
        var a = function (e) {
          if (!i || e.isTrusted)
            for (var t = e.target; t && t !== e.currentTarget; )
              (function (e, t) {
                var n,
                  r =
                    2 < arguments.length && void 0 !== arguments[2]
                      ? arguments[2]
                      : "click",
                  i = 3 < arguments.length ? arguments[3] : void 0,
                  o = 4 < arguments.length ? arguments[4] : void 0;
                e &&
                  (n = c(e)).trigger &&
                  n.trigger === r &&
                  (function (e, t, n, r, i) {
                    var o,
                      a,
                      s = c(e);
                    0 !== C.getOwnPropertyNames(s).length &&
                      ((a = e.nodeName.toLowerCase()),
                      "click" === n
                        ? "a" === a && (o = l(d, e, t))
                        : "submit" === n && "form" === a && (o = l(p, e, t)),
                      r(
                        s,
                        (o = (function (e, t) {
                          var n = !1;
                          return (
                            0 < t &&
                              z(function () {
                                (n = !0), e();
                              }, t),
                            function () {
                              n || ((n = !0), e());
                            }
                          );
                        })((o = o || u), i))
                      ));
                  })(e, t, r, i, o);
              })(t, e, n, r, o),
                (t = t.parentElement);
        };
        return (
          e.addEventListener(n, a, !0),
          function () {
            e.removeEventListner(n, a);
          }
        );
      }
    }
    function u() {}
    function l(e, t, n) {
      t = e.call(null, t, n);
      return (t =
        t &&
        (function (e, t) {
          if (!((n = e).ctrlKey || n.metaKey || n.shiftKey))
            return e.preventDefault(), t;
          var n;
        })(n, t));
    }
    function d(t) {
      var e = t.getAttribute("target");
      if (!e || "_self" === e)
        return function () {
          var e = t.getAttribute("href");
          e && (window.location.href = e);
        };
    }
    function p(e) {
      var t = e.getAttribute("target");
      if (!t || "_self" === t)
        return function () {
          e.submit();
        };
    }
    function o(e, t) {
      t();
    }
    function n() {
      var e =
          void 0 ===
          (t = (r =
            0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {})
            .parent)
            ? A.documentElement
            : t,
        t = void 0 === (n = r.tracker) ? o : n,
        n = void 0 === (n = r.ignoreSynthetic) || n,
        r = void 0 === (r = r.timeout) ? 300 : r;
      if (
        ("string" == typeof e && (e = A.querySelector(e)),
        e instanceof HTMLElement)
      )
        return { off: s.initListeners(e, t, n, r) };
    }
    var r, s;
    (s = {
      initListeners: function (e, t, n, r) {
        var i = a("click", e, t, n, r),
          o = a("submit", e, t, n, r);
        return function () {
          i && i(), o && o();
        };
      },
    }),
      ((r = {}).init = n),
      (r.getAttributesOfEl = c),
      (e.exports = r);
  });
  var kt = function (e) {
      return e instanceof N;
    },
    Et = 36e5,
    St = 6e4,
    xt = /[T ]/,
    Tt = /:/,
    jt = /^(\d{2})$/,
    Pt = [/^([+-]\d{2})$/, /^([+-]\d{3})$/, /^([+-]\d{4})$/],
    Ot = /^(\d{4})/,
    At = [/^([+-]\d{4})/, /^([+-]\d{5})/, /^([+-]\d{6})/],
    Ct = /^-(\d{2})$/,
    Nt = /^-?(\d{3})$/,
    zt = /^-?(\d{2})-?(\d{2})$/,
    It = /^-?W(\d{2})$/,
    Mt = /^-?W(\d{2})-?(\d{1})$/,
    qt = /^(\d{2}([.,]\d*)?)$/,
    Ut = /^(\d{2}):?(\d{2}([.,]\d*)?)$/,
    Ft = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/,
    Lt = /([Z+-].*)$/,
    Rt = /^(Z)$/,
    Bt = /^([+-])(\d{2})$/,
    $t = /^([+-])(\d{2}):?(\d{2})$/;
  function Dt(e, t, n) {
    (t = t || 0), (n = n || 0);
    var r = new N(0);
    r.setUTCFullYear(e, 0, 4);
    n = 7 * t + n + 1 - (r.getUTCDay() || 7);
    return r.setUTCDate(r.getUTCDate() + n), r;
  }
  var Qt = function (e, t) {
    if (kt(e)) return new N(e.getTime());
    if ("string" != typeof e) return new N(e);
    var n = null == (n = (t || {}).additionalDigits) ? 2 : c(n),
      r = (function (e) {
        var t = {},
          n = e.split(xt);
        e = Tt.test(n[0]) ? ((t.date = null), n[0]) : ((t.date = n[0]), n[1]);
        e &&
          ((n = Lt.exec(e))
            ? ((t.time = e.replace(n[1], "")), (t.timezone = n[1]))
            : (t.time = e));
        return t;
      })(e),
      t = (o = (function (e, t) {
        var n = Pt[t],
          r = At[t];
        if ((t = Ot.exec(e) || r.exec(e))) {
          r = t[1];
          return { year: l(r, 10), restDateString: e.slice(r.length) };
        }
        if ((t = jt.exec(e) || n.exec(e))) {
          t = t[1];
          return { year: 100 * l(t, 10), restDateString: e.slice(t.length) };
        }
        return { year: null };
      })(r.date, n)).year;
    if (
      (n = (function (e, t) {
        if (null === t) return null;
        var n, r, i;
        if (0 === e.length) return (n = new N(0)).setUTCFullYear(t), n;
        if ((a = Ct.exec(e)))
          return (
            (n = new N(0)), (r = l(a[1], 10) - 1), n.setUTCFullYear(t, r), n
          );
        if ((a = Nt.exec(e))) {
          n = new N(0);
          var o = l(a[1], 10);
          return n.setUTCFullYear(t, 0, o), n;
        }
        if ((a = zt.exec(e))) {
          (n = new N(0)), (r = l(a[1], 10) - 1);
          o = l(a[2], 10);
          return n.setUTCFullYear(t, r, o), n;
        }
        if ((a = It.exec(e))) return (i = l(a[1], 10) - 1), Dt(t, i);
        if ((a = Mt.exec(e))) {
          i = l(a[1], 10) - 1;
          var a = l(a[2], 10) - 1;
          return Dt(t, i, a);
        }
        return null;
      })(o.restDateString, t))
    ) {
      var i,
        o = n.getTime(),
        t = 0;
      return (
        r.time &&
          (t = (function (e) {
            var t, n;
            if ((r = qt.exec(e)))
              return ((t = parseFloat(r[1].replace(",", "."))) % 24) * Et;
            if ((r = Ut.exec(e)))
              return (
                (t = l(r[1], 10)),
                (n = parseFloat(r[2].replace(",", "."))),
                (t % 24) * Et + n * St
              );
            if ((r = Ft.exec(e))) {
              (t = l(r[1], 10)), (n = l(r[2], 10));
              var r = parseFloat(r[3].replace(",", "."));
              return (t % 24) * Et + n * St + 1e3 * r;
            }
            return null;
          })(r.time)),
        r.timezone
          ? (i =
              (function (e) {
                var t, n;
                if ((t = Rt.exec(e))) return 0;
                if ((t = Bt.exec(e)))
                  return (n = 60 * l(t[2], 10)), "+" === t[1] ? -n : n;
                if ((t = $t.exec(e)))
                  return (
                    (n = 60 * l(t[2], 10) + l(t[3], 10)), "+" === t[1] ? -n : n
                  );
                return 0;
              })(r.timezone) * St)
          : ((r = new N((n = o + t))),
            (i = bt(r)),
            (n = new N(n)).setDate(r.getDate() + 1),
            0 < (r = bt(n) - bt(r)) && (i += r)),
        new N(o + t + i)
      );
    }
    return new N(e);
  };
  function Yt(e) {
    var t = ze(rn);
    return Ie(rn, (t = t || e)), t;
  }
  var Kt = function (e, t) {
      return (
        (e = Qt(e)),
        (t = Qt(t)),
        12 * (e.getFullYear() - t.getFullYear()) + (e.getMonth() - t.getMonth())
      );
    },
    Vt = "Google Ads",
    Jt = "not set",
    Wt = "direct",
    Gt = "website",
    Xt = "campaignStartTime",
    Ht = "utm_source",
    Zt = "utm_medium",
    en = "utm_campaign",
    tn = "utm_content",
    nn = "utm_keyword",
    rn = "firstAttribUtm",
    on = "lastAttribUtm",
    an = function (e) {
      var t = e.get("gclid"),
        n = e.get("gclsrc"),
        r = e.get(Ht) || "",
        i = e.get(Zt) || "",
        o = e.get(en) || Jt,
        a = e.get(tn) || Jt,
        s = e.get(nn) || Jt,
        c = r,
        u = i,
        l = o,
        d = a,
        e = s;
      return (
        t || n
          ? ((c = "google"), (u = "cpc"), (e = d = l = Vt))
          : r && ((c = r), (u = i), (l = o), (d = a), (e = s)),
        { source: c, medium: u, campaign: l, content: d, keyword: e }
      );
    },
    sn = function (e) {
      var t = Yt(e),
        e = {
          utm_source: e.source,
          utm_medium: e.medium,
          utm_campaign: e.campaign,
          utm_content: e.content,
          utm_keyword: e.keyword,
        };
      t || Ie(rn, JSON.stringify(e)),
        Ie(on, JSON.stringify(e)),
        Ie(Xt, d(new N().toUTCString()));
    },
    cn = function (e, t, n) {
      var r = t || ze("clientId"),
        i = Yt(e),
        o = e,
        a = ze(on);
      if (a)
        try {
          o = JSON.parse(a);
        } catch (e) {
          console.error(e);
        }
      var s = ze(Xt) || n,
        c = Wt,
        u = Gt,
        t = Wt,
        e = Jt,
        n = Jt,
        s = Kt(new N(), new N(s));
      i &&
        r &&
        s <= 6 &&
        ((c = (null === o || void 0 === o ? void 0 : o.utm_source) || Wt),
        (u = (null === o || void 0 === o ? void 0 : o.utm_medium) || Gt),
        (t = o.utm_campaign),
        (e = o.utm_content),
        (n = o.utm_keyword));
      n = { source: c, medium: u, campaign: t, content: e, keyword: n };
      return sn(n), n;
    };
  function un() {}
  var ln = ["razorpay.com", "payroll.razorpay.com"],
    dn = {
      prod: {
        lj: { url: "https://lumberjack.razorpay.com/v1/track" },
        ljMetrics: {
          url: "https://lumberjack.razorpay.com/v1/frontend-metrics",
        },
      },
      stage: {
        lj: { url: "https://lumberjack.stage.razorpay.in/v1/track" },
        ljMetrics: {
          url: "https://lumberjack.stage.razorpay.in/v1/frontend-metrics",
        },
        prom: {
          url: "https://prom-pushgateway.concierge.stage.razorpay.in/metrics/job",
        },
      },
    },
    pn = [
      "admin-dashboard",
      "dashboard",
      "axis",
      "axisbank",
      "bajaj",
      "bankofbaroda",
      "citibank",
      "hdfc",
      "icicibank",
      "jkbank",
      "panel",
      "rapidopayments",
      "sbi",
      "tjsbbank",
      "ndmlpaygov",
      "hsbc",
      "sib",
      "yesbank",
      "rbl",
      "kotak",
      "csb",
      "db",
      "collectnow",
      "hdfcgig",
      "indusindbank",
      "axiseasypay",
      "hdfcbankcollectnow",
      "iob",
      "sbmbank",
      "federalbank",
      "canaraeasyfee",
      "bankingprograms",
      "idfcbank",
      "rblbank",
      "fiserv",
      "bankingtest",
      "americanexpress",
    ].map(function (e) {
      return e + ".razorpay.com";
    }),
    fn = ["dashboard"].map(function (e) {
      return e + ".curlec.com";
    }),
    mn = new RegExp(/.*.razorpay.in/);
  function hn() {
    var s = this,
      S = "twitterAgency",
      o = {
        PROD_KEY: {
          ga: "UA-53341507-2",
          fb: "697927486977350",
          lj_test: "10pYUm55sa39zgTN1gzNwQzNyQjM54Cg",
          lj: null,
          quora: "e48d44618968421caee842ceb1759bed",
          twitter: "nubbz",
          twitterAgency: "nubbz",
          linkedin: "155571",
          bing: "5963182",
          perf: null,
          reddit: "t2_5dsm2njg",
          hubspot: "5558946",
          criteo: "85314",
        },
        BETA_KEY: {
          ga: "UA-53341507-4",
          fb: "179213763193622",
          linkedin: "923683",
          quora: "6794ef846e9b4b81853b772a96be8435",
          reddit: "t2_4ow3a0it",
          bing: "15179669",
          hotjar: "1657456",
          twitter: "nubbz",
          twitterAgency: "nubbz",
          hubspot: "5558946",
          criteo: "ignore-me",
        },
      };
    function x(e) {
      return ("beta-website" === Nn() ? o.BETA_KEY : o.PROD_KEY)[e];
    }
    var n,
      T = {},
      j = {},
      P = !1;
    (this.init = function (e, t, n, r, i, o) {
      if (
        (void 0 === o && (o = {}),
        this.setAppEnv(r),
        Ze(),
        (P = i),
        "boolean" == typeof t && void 0 === n && ((n = t), (t = {})),
        "dashboard" === Nn() &&
          ((T.bing = !0), (T.linkedin = !0), (T.twitter = !0)),
        this.defineKeys(t),
        -1 < e.indexOf("perf"))
      ) {
        if (!o.appName)
          return void console.error(
            "Please pass appName while initialising analytics."
          );
        o = C.assign({ appName: o.appName }, o.perf);
        ct(o);
      }
      if (n) return (this.track = un), void (O.ga = un);
      function a(e) {
        var t = T[e] && !j[e];
        return t && (j[e] = !0), t;
      }
      var s, c, u, l, d, p, f, m, h, g, v, w, y, b, _, k, E;
      e.forEach(function (e) {
        T[e] = !0;
      }),
        a("ga") &&
          (function (e) {
            var t,
              n = e;
            (r = A),
              (e = "ga"),
              ((t = window).GoogleAnalyticsObject = e),
              (t.ga =
                t.ga ||
                function () {
                  (t.ga.q = t.ga.q || []).push(arguments);
                }),
              (t.ga.l = +new N()),
              (e = r.createElement("script")),
              (r = r.getElementsByTagName("script")[0]),
              (e.async = 1),
              (e.src = "https://www.google-analytics.com/analytics.js"),
              r.parentNode.insertBefore(e, r);
            var r = O.ga;
            (r.l = +new N()), r("create", n, "auto");
          })((t && t.ga) || x("ga")),
        !a("criteo") ||
          ("ignore-me" !== (n = (t && t.criteo) || x("criteo")) &&
            (((e = A.createElement("script")).src =
              "//dynamic.criteo.com/js/ld/ld.js?a=" + n),
            (e.async = !0),
            A.documentElement.appendChild(e))),
        a("hotjar") &&
          ((l = A),
          ((s = window).hj =
            s.hj ||
            function () {
              (s.hj.q = s.hj.q || []).push(arguments);
            }),
          (s._hjSettings = { hjid: 575141, hjsv: 5 }),
          (c = l.getElementsByTagName("head")[0]),
          ((l = l.createElement("script")).async = 1),
          (l.src =
            "//static.hotjar.com/c/hotjar-" +
            s._hjSettings.hjid +
            ".js?sv=" +
            s._hjSettings.hjsv),
          c.appendChild(l)),
        a("adroll") &&
          (function () {
            (window.adroll_adv_id = "TJ37WOXRMNBN3E7GBHOOXB"),
              (window.adroll_pix_id = "KCGQOUBQ5VFKRM3XB5PB2U");
            var n = function () {
              if (!A.readyState || /loaded|complete/.test(A.readyState)) {
                if (!window.__adroll_loaded)
                  return (window.__adroll_loaded = !0), void z(n, 50);
                var e = A.createElement("script"),
                  t =
                    "https:" === A.location.protocol
                      ? "https://s.adroll.com"
                      : "http://a.adroll.com";
                e.setAttribute("async", "true"),
                  (e.type = "text/javascript"),
                  (e.src = t + "/j/roundtrip.js"),
                  (
                    (A.getElementsByTagName("head") || [null])[0] ||
                    A.getElementsByTagName("script")[0].parentNode
                  ).appendChild(e);
              } else z(n, 10);
            };
            n();
          })(),
        a("reddit") &&
          ((p = (t && t.reddit) || x("reddit")),
          (c = A),
          window.rdt ||
            (((u = window.rdt =
              function () {
                u.sendEvent
                  ? u.sendEvent.apply(u, arguments)
                  : u.callQueue.push(arguments);
              }).callQueue = []),
            ((l = c.createElement("script")).src =
              "https://www.redditstatic.com/ads/pixel.js"),
            (l.async = !0),
            (c = c.getElementsByTagName("script")[0]).parentNode.insertBefore(
              l,
              c
            )),
          rdt("init", p)),
        a(S) &&
          ((w = A),
          window.twq ||
            (((d = window.twq =
              function () {
                d.exe ? d.exe.apply(d, arguments) : d.queue.push(arguments);
              }).version = "1.1"),
            (d.queue = []),
            ((p = w.createElement("script")).async = !0),
            (p.src = "//static.ads-twitter.com/uwt.js"),
            (w = w.getElementsByTagName("script")[0]).parentNode.insertBefore(
              p,
              w
            )),
          twq("init", "o4ux2"),
          twq("track", "PageView")),
        "dashboard" === Nn()
          ? a("bing") &&
            ((w = (t && t.bing) || x("bing")),
            (E = w),
            (w = A),
            ((y = window)[(b = "uetq")] = y[b] || []),
            (_ = function () {
              var e = { ti: E };
              (e.q = y[b]), (y[b] = new UET(e));
            }),
            ((k = w.createElement("script")).src = "//bat.bing.com/bat.js"),
            (k.async = 1),
            (k.onload = k.onreadystatechange =
              function () {
                var e = this.readyState;
                (e && "loaded" !== e && "complete" !== e) ||
                  (_(), (k.onload = k.onreadystatechange = null));
              }),
            (w = w.getElementsByTagName("script")[0]).parentNode.insertBefore(
              k,
              w
            ))
          : a("bing") &&
            ((t = (t && t.bing) || x("bing")),
            (v = t),
            (t = A),
            ((f = window)[(m = "uetq")] = f[m] || []),
            (h = function () {
              var e = { ti: v };
              (e.q = f[m]), (f[m] = new UET(e)), f[m].push("pageLoad");
            }),
            ((g = t.createElement("script")).src = "//bat.bing.com/bat.js"),
            (g.async = 1),
            (g.onload = g.onreadystatechange =
              function () {
                var e = this.readyState;
                (e && "loaded" !== e && "complete" !== e) ||
                  (h(), (g.onload = g.onreadystatechange = null));
              }),
            (t = t.getElementsByTagName("script")[0]).parentNode.insertBefore(
              g,
              t
            )),
        a("hubspot") && et("5558946");
    }),
      (this.defineKeys = function (i) {
        void 0 === i && (i = {}),
          C.keys(i).forEach(function (e) {
            var t,
              n,
              r = x(e);
            try {
              if (r) return !1;
              (n = i[(t = e)]),
                (("beta-website" === Nn() ? o.BETA_KEY : o.PROD_KEY)[t] = n);
            } catch (e) {
              Oe(e);
            }
          });
      }),
      (this.initHubspot = function () {
        et(x("hubspot"));
      }),
      (this.track = function (e, t, n) {
        var r,
          i,
          o,
          a,
          s,
          c,
          u,
          l,
          d,
          p =
            ((e = x((r = e))) ||
              Oe(
                "Key is missing. Set the key in analytics.init() for the tracker type passed"
              ),
            { type: (r = r.split("_")[0]), key: e });
        switch ((Oe(t, n, p), p.type)) {
          case "fb":
            T.fb &&
              ((u = p.key),
              Oe("EMIT FB...", (d = n), (l = t)),
              Me("//www.facebook.com/tr?id=" + u + "&ev=" + l, d));
            break;
          case "ga":
            T.ga && nt(t, n);
            break;
          case "lj":
            T.lj && tt(p.key, t, n);
            break;
          case "twitter":
            T.twitter &&
              ((d = p.key),
              void 0 === (c = n) && (c = {}),
              Oe("EMIT TWITTER...", c),
              d && !c.txn_id && (c.txn_id = d),
              Me(
                "//analytics.twitter.com/i/adsct?p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0",
                c
              ));
            break;
          case S:
            T.twitterAgency &&
              ((c = p.key),
              void 0 === (s = n) && (s = {}),
              Oe("EMIT TWITTERAGENCY...", s),
              c && !s.txn_id && (s.txn_id = c),
              Me(
                "//analytics.twitter.com/i/adsct?p_id=Twitter&tw_sale_amount=0&tw_order_quantity=0",
                s
              ));
            break;
          case "quora":
            T.quora &&
              ((s = p.key),
              Oe("EMIT QUORA...", (a = n), (o = t)),
              Me(
                "//q.quora.com/_/ad/" + s + "/pixel?tag=" + o + "&noscript=1",
                a
              ));
            break;
          case "linkedin":
            T.linkedin &&
              ((o = p.key),
              Oe("EMIT LINKEDIN...", (a = n)),
              Me(
                "https://dc.ads.linkedin.com/collect/?pid=" + o + "&fmt=gif",
                a
              ));
            break;
          case "bing":
            T.bing &&
              (Oe("EMIT BING...", (i = t)),
              (window.uetq = window.uetq || []),
              "pageLoad" === i.action
                ? window.uetq.push("event", i.action, { page_path: i.path })
                : window.uetq.push({
                    ec: i.category,
                    ea: i.action,
                    el: i.label,
                    ev: i.value,
                  }));
            break;
          case "reddit":
            T.reddit &&
              (Oe("EMIT REDDIT...", (i = t)),
              window.rdt && window.rdt("track", i));
        }
      }),
      (this.utils = {
        setCookie: Ie,
        getCookie: ze,
        deleteCookie: Ne,
        parseUTM: wn,
        populateUTMParams: yn,
        getLandingParams: bn,
        getRefParam: vn,
        getQueryParams: gn,
        readUTMFromSessionStorage: Pe,
        generateUid: Te,
        getFingerprints: je,
        getBrowserDetails: Ae,
      }),
      (this.setAppEnv = function (e) {
        n = e ? e.toLowerCase() : "prod";
      }),
      (this.getEmitUrlPath = function (e) {
        var t = "";
        return (
          "metrics" === e.type
            ? ((t = dn.stage.ljMetrics.url), dn[n] && (t = dn[n].ljMetrics.url))
            : ((t = dn.stage.lj.url), dn[n] && (t = dn[n].lj.url)),
          t
        );
      }),
      (this.createQ = function (e) {
        var t = void 0 === e ? {} : e,
          n = t.pollFreq,
          r = t.emitTo,
          e = t.version,
          i = t.type,
          o = x("lj"),
          a = s.getEmitUrlPath({ type: i });
        return new yt({
          pollFreq: n || 5e3,
          emitTo:
            r ||
            (P
              ? function () {}
              : function (e) {
                  !(function (e, t, n, r) {
                    var i,
                      o = e.events,
                      a = e.mode,
                      e = Ae(),
                      s = {
                        user_agent: We || h.userAgent || {},
                        network: {
                          type: h.connection
                            ? h.connection.effectiveType
                            : null,
                        },
                        client_id: Xe,
                        referrer: A.referrer,
                        device: e.device,
                        browser: e.browser,
                        os: e.os,
                        screen_height: e.screen_height,
                        screen_width: e.screen_width,
                      };
                    try {
                      "razorpay.com" === window.location.hostname &&
                        ((i = sessionStorage.getItem("websiteSessionId")) ||
                          (sessionStorage.setItem("websiteSessionId", He()),
                          (i = sessionStorage.getItem("websiteSessionId"))),
                        (s.website_session_id = i));
                    } catch (e) {}
                    var c,
                      a = { mode: a, context: s, events: o };
                    "metrics" === r &&
                      (a = {
                        metrics:
                          ((c = []),
                          o.forEach(function (t) {
                            var n = !1;
                            (c = c.map(function (e) {
                              return (
                                e.name === t.name &&
                                  ((e.labels = e.labels.concat(t.labels)),
                                  (n = !0)),
                                e
                              );
                            })),
                              n || c.push(t);
                          }),
                          c),
                      }),
                      (o = w(a)),
                      (o = d(o)),
                      (o = f(o)),
                      (o = p(o)),
                      ke({
                        url: n,
                        method: "post",
                        data: { key: t, data: (a = d(o)) },
                      });
                  })(e, o, a, i);
                }),
          version: e || "v1",
        });
      });
  }
  function gn(e) {
    var t = e.split("?"),
      n = {};
    if (1 === t.length) return n;
    t = t[1].split("&");
    for (var r = 0; r < t.length; r++) {
      var i = t[r].split("="),
        o = i[0].toLowerCase(),
        i = i[1];
      n[o] = i;
    }
    return n;
  }
  function vn(e) {
    return gn(e).ref || "";
  }
  function wn(e) {
    var t = gn(e),
      n = {};
    return (
      C.keys(t).forEach(function (e) {
        0 === e.indexOf("utm_") && (n[e] = t[e]);
      }),
      n
    );
  }
  function yn(e, t) {
    void 0 === e && (e = {});
    var n,
      r,
      i,
      o,
      a = {
        utm_source: (e.utm_source && e.utm_source.toLowerCase()) || "",
        utm_campaign: (e.utm_campaign && e.utm_campaign.toLowerCase()) || "",
        utm_medium: (e.utm_medium && e.utm_medium.toLowerCase()) || "",
        utm_term: (e.utm_term && e.utm_term.toLowerCase()) || "",
        utm_content: (e.utm_content && e.utm_content.toLowerCase()) || "",
        utm_adgroup: (e.utm_adgroup && e.utm_adgroup.toLowerCase()) || "",
      };
    return (
      t &&
        (a.timestamp =
          ((n = new N()),
          (r = (n = new N(n.getTime() + 198e5)).getUTCFullYear()),
          (i = n.getUTCMonth() + 1),
          (o = n.getUTCDate()),
          (e = n.getUTCHours()),
          (t = n.getUTCMinutes()),
          (n = n.getUTCSeconds()),
          r +
            "-" +
            (i < 10 ? "0" : "") +
            i +
            "-" +
            (o < 10 ? "0" : "") +
            o +
            "T" +
            (e < 10 ? "0" : "") +
            e +
            ":" +
            (t < 10 ? "0" : "") +
            t +
            ":" +
            (n < 10 ? "0" : "") +
            n +
            "%2B05:30")),
      a
    );
  }
  function bn(e) {
    void 0 === e && (e = O.location.href);
    var t = vn(e),
      e = wn(e);
    rt(e) || (e = _n());
    e = yn(e);
    return (e.ref = t), e;
  }
  function _n() {
    var e = it(A.referrer);
    return e && e.source
      ? { utm_source: e.source, utm_medium: e.medium }
      : { utm_source: "direct", utm_medium: "website" };
  }
  var kn = new RegExp("^/docs+", "g");
  var En, Sn, xn, Tn, jn, Pn, On;
  "website" === Nn() ||
  "beta-website" === Nn() ||
  "rxdashboard" === Nn() ||
  "xpayrolldashboard" === Nn() ||
  window.location.search.includes("loadRazorpayAnalytics")
    ? ((En = !1),
      ["blog", "learn", "links"].map(function (e) {
        (window.location.pathname.split("/")[1] !== e &&
          ((e = window.location.pathname), !kn.test(e))) ||
          (En = !0);
      }),
      En ? (O.analytics = new hn()) : (O.razorpayAnalytics = new hn()))
    : "dashboard" === Nn()
    ? (O.razorpayAnalytics = new hn())
    : (O.analytics = new hn()),
    ("website" !== Nn() &&
      "dashboard" !== Nn() &&
      "beta-website" !== Nn() &&
      "rxdashboard" !== Nn() &&
      "xpayrolldashboard" !== Nn()) ||
      ((function (e, t) {
        var n = !0;
        rt(e) ||
          ("website" === Nn()
            ? (e = _n())
            : ("dashboard" !== Nn() &&
                "rxdashboard" !== Nn() &&
                "xpayrolldashboard" !== Nn()) ||
              (In(t) ? (e = _n()) : (n = !1))),
          (e = yn(e, !0));
        var r = ze(t),
          i = Pe("rzp_utm");
        if (r)
          try {
            r = JSON.parse(r);
          } catch (e) {
            r = {};
          }
        else r = {};
        var o = r.attributions || [];
        n &&
          0 === C.keys(i).length &&
          (2 === o.length ? (o[1] = e) : o.push(e)),
          (r.attributions = o);
        var a = {},
          s =
            O.location.hostname.toLowerCase() +
            (O.location.pathname || "").toLowerCase();
        if (
          ("dashboard" === Nn() &&
            (r.first_page || ((r.first_page = s), (r.new_user = !0))),
          "website" === Nn())
        ) {
          r.website = s;
          try {
            r.first_page
              ? (sessionStorage.getItem("final_page") ||
                  ((r.final_page = s), sessionStorage.setItem("final_page", s)),
                (r.new_user = !1))
              : ((r.first_page = s),
                (r.final_page = s),
                (r.new_user = !0),
                sessionStorage.setItem("final_page", s));
          } catch (e) {}
          r.attributions.forEach(function (e) {
            a = {
              fc_source: r.fc_source || e.utm_source,
              lc_source: 0 === C.keys(i).length ? e.utm_source : r.lc_source,
            };
          });
        } else
          ("rxdashboard" !== Nn() && "xpayrolldashboard" !== Nn()) ||
            (r.fc_source || (a.fc_source = "direct"),
            r.lc_source || (a.lc_source = "direct"));
        !(function (e, t, n, r, i) {
          if (
            (void 0 === e && (e = window.location.href),
            void 0 === t && (t = A.referrer),
            void 0 === n && (n = {}),
            void 0 === r && (r = ""),
            void 0 === i && (i = new N()),
            (e = new URL(e)),
            (e = new URLSearchParams(e.search)),
            (e = an(e)) && e.source)
          )
            return sn(e);
          if (t) {
            t = it(t);
            return t && t.source
              ? (sn(t), t.source, t.medium, t.campaign, t.content, t.keyword)
              : cn(n, r, i);
          }
          cn(n, r, i);
        })(window.location.href, A.referrer, e),
          Ie(t, C.assign(r, a)),
          (t = "rzp_utm"),
          rt((e = e)) &&
            ((e = yn(e, !0)),
            sessionStorage.setItem(t, JSON.stringify({ attributions: [e] })));
      })(wn(O.location.href), "rzp_utm"),
      (Pn = "gclid"),
      (On = gn(O.location.href).gclid) &&
        (Ie(Pn, On), zn(Pn, ze("first_" + Pn), On)),
      (Tn = "fbclid"),
      (jn = gn(O.location.href).fbclid) &&
        (Ie(Tn, jn), zn(Tn, ze("first_" + Tn), jn)),
      (Sn = "msclkid"),
      (xn = gn(O.location.href).msclkid) &&
        (Ie(Sn, xn), zn(Sn, ze("first_" + Sn), xn)),
      "rxdashboard" === Nn() && et("5558946"));
  function An(n) {
    var r = C.keys(n),
      i = {
        category: "eventCategory",
        action: "eventAction",
        label: "eventLabel",
        value: "eventValue",
      };
    return (
      C.keys(i).forEach(function (e) {
        var t = i[e];
        0 <= r.indexOf(e) && r.indexOf(t) < 0 && (n[t] = n[e]);
      }),
      n
    );
  }
  var Cn;
  function Nn() {
    return "razorpay.com" === O.location.hostname
      ? "website"
      : -1 < O.location.hostname.indexOf("betasite.razorpay.com")
      ? "beta-website"
      : -1 < ["x.razorpay.com"].indexOf(O.location.hostname)
      ? "rxdashboard"
      : -1 < ["payroll.razorpay.com"].indexOf(O.location.hostname)
      ? "xpayrolldashboard"
      : -1 < pn.indexOf(O.location.hostname) ||
        mn.test(O.location.hostname) ||
        "beta-dashboard.stage.razorpay.in" === O.location.hostname ||
        -1 < fn.indexOf(O.location.hostname)
      ? "dashboard"
      : void 0;
  }
  function zn(e, t, n) {
    t
      ? t !== n && Ie("final_" + e, n)
      : (Ie("first_" + e, n), Ie("final_" + e, n));
  }
  function In(e) {
    var t = ze(e) || {},
      e = Pe("rzp_utm");
    if (t)
      try {
        t = JSON.parse(t);
      } catch (e) {
        t = {};
      }
    return 0 == (t.attributions || []).length && 0 === C.keys(e).length;
  }
  return (
    _t.init({
      tracker: function (e, t) {
        (e = An(e)), O.rzpAnalytics ? O.rzpAnalytics(e, t) : t && t(e);
      },
    }),
    (_t.getAttribsFromEl = function (e) {
      e = _t.getAttributesOfEl(e);
      return An(e);
    }),
    (O.lytics = _t),
    "website" === Nn() &&
      (A.documentElement.addEventListener("click", function (e) {
        e = e.target.closest("a");
        e &&
          "_blank" === e.getAttribute("target") &&
          (((e = {
            eventCategory: "Follow Link",
            eventAction: "New Tab",
          }).eventLabel = A.referrer),
          nt("event", e));
      }),
      "website" === Nn() &&
        O.location.href.includes("razorpay.com/payroll") &&
        ((Cn =
          (function () {
            try {
              var e,
                t,
                n = JSON.parse(ze("rzp_utm"));
              return null == n || null === (e = n.attributions) || void 0 === e
                ? void 0
                : e[
                    (null == n || null === (t = n.attributions) || void 0 === t
                      ? void 0
                      : t.length) - 1
                  ];
            } catch (e) {
              return console.error(e), {};
            }
          })() || {}),
        A.querySelectorAll("a").forEach(function (e) {
          try {
            var t,
              n = new URL(e.href);
            ln.includes(n.hostname) &&
              ((t = new URLSearchParams(n.search)).get("utm_source") ||
                (Cn.utm_source && t.append("utm_source", Cn.utm_source),
                Cn.utm_campaign && t.append("utm_campaign", Cn.utm_campaign),
                Cn.utm_medium && t.append("utm_medium", Cn.utm_medium),
                Cn.utm_term && t.append("utm_term", Cn.utm_term),
                Cn.utm_content && t.append("utm_content", Cn.utm_content)),
              t.has("website") || t.append("website", window.location.pathname),
              (n.search = t.toString()),
              n.pathname.endsWith("/") ||
                n.pathname.includes("/uploads/") ||
                (n.pathname = n.pathname + "/"),
              (e.href = n.href));
          } catch (e) {
            console.error(e);
          }
        }))),
    (e.hasNoAttribution = In),
    e
  );
})({});
