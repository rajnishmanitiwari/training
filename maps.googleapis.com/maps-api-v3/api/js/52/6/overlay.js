google.maps.__gjsload__("overlay", function (_) {
  var Pw = function (a) {
      this.h = a;
    },
    zna = function () {},
    Qw = function (a) {
      a.ep = a.ep || new zna();
      return a.ep;
    },
    Ana = function (a) {
      this.Da = new _.mi(function () {
        var b = a.ep;
        if (a.getPanes()) {
          if (a.getProjection()) {
            if (!b.Ln && a.onAdd) a.onAdd();
            b.Ln = !0;
            a.draw();
          }
        } else {
          if (b.Ln)
            if (a.onRemove) a.onRemove();
            else a.remove();
          b.Ln = !1;
        }
      }, 0);
    },
    Bna = function (a, b) {
      function c() {
        return _.ni(e.Da);
      }
      var d = Qw(a),
        e = d.Bm;
      e || (e = d.Bm = new Ana(a));
      _.jb(d.Pa || [], _.Te);
      var f = (d.Za = d.Za || new _.Ru()),
        g = b.__gm;
      f.bindTo("zoom", g);
      f.bindTo("offset", g);
      f.bindTo("center", g, "projectionCenterQ");
      f.bindTo("projection", b);
      f.bindTo("projectionTopLeft", g);
      f = d.wt = d.wt || new Pw(f);
      f.bindTo("zoom", g);
      f.bindTo("offset", g);
      f.bindTo("projection", b);
      f.bindTo("projectionTopLeft", g);
      a.bindTo("projection", f, "outProjection");
      a.bindTo("panes", g);
      d.Pa = [
        _.L(a, "panes_changed", c),
        _.L(g, "zoom_changed", c),
        _.L(g, "offset_changed", c),
        _.L(b, "projection_changed", c),
        _.L(g, "projectioncenterq_changed", c),
      ];
      c();
      b instanceof _.nf && (_.P(b, "Ox"), _.O(b, 148440));
    },
    Fna = function (a) {
      if (a) {
        var b = a.getMap();
        if (Cna(a) !== b && b && b instanceof _.nf) {
          var c = b.__gm;
          c.overlayLayer
            ? (a.__gmop = new Dna(b, a, c.overlayLayer))
            : c.h.then(function (d) {
                d = d.va;
                var e = new Rw(b, d);
                d.Bb(e);
                c.overlayLayer = e;
                Ena(a);
                Fna(a);
              });
        }
      }
    },
    Ena = function (a) {
      if (a) {
        var b = a.__gmop;
        b &&
          ((a.__gmop = null),
          b.h.unbindAll(),
          b.h.set("panes", null),
          b.h.set("projection", null),
          b.m.Sd(b),
          b.j && ((b.j = !1), b.h.onRemove ? b.h.onRemove() : b.h.remove()));
      }
    },
    Cna = function (a) {
      return (a = a.__gmop) ? a.map : null;
    },
    Dna = function (a, b, c) {
      this.map = a;
      this.h = b;
      this.m = c;
      this.j = !1;
      _.P(this.map, "Ox");
      _.O(this.map, 148440);
      c.Fd(this);
    },
    Gna = function (a, b) {
      a.h.get("projection") != b &&
        (a.h.bindTo("panes", a.map.__gm), a.h.set("projection", b));
    },
    Rw = function (a, b) {
      this.C = a;
      this.m = b;
      this.h = null;
      this.j = [];
    };
  _.Ra(Pw, _.N);
  Pw.prototype.changed = function (a) {
    "outProjection" != a &&
      ((a = !!(
        this.get("offset") &&
        this.get("projectionTopLeft") &&
        this.get("projection") &&
        _.Od(this.get("zoom"))
      )),
      a == !this.get("outProjection") &&
        this.set("outProjection", a ? this.h : null));
  };
  var Sw = {};
  _.Ra(Ana, _.N);
  Sw.Fd = function (a) {
    if (a) {
      var b = a.getMap();
      (Qw(a).Zs || null) !== b && (b && Bna(a, b), (Qw(a).Zs = b));
    }
  };
  Sw.Sd = function (a) {
    var b = Qw(a),
      c = b.Za;
    c && c.unbindAll();
    (c = b.wt) && c.unbindAll();
    a.unbindAll();
    a.set("panes", null);
    a.set("projection", null);
    b.Pa && _.jb(b.Pa, _.Te);
    b.Pa = null;
    b.Bm && (b.Bm.Da.Dc(), (b.Bm = null));
    delete Qw(a).Zs;
  };
  var Tw = {};
  Dna.prototype.draw = function () {
    this.j || ((this.j = !0), this.h.onAdd && this.h.onAdd());
    this.h.draw && this.h.draw();
  };
  Rw.prototype.dispose = function () {};
  Rw.prototype.Gb = function (a, b, c, d, e, f, g, h) {
    var k = (this.h = this.h || new _.iq(this.C, this.m, function () {}));
    k.Gb(a, b, c, d, e, f, g, h);
    a = _.A(this.j);
    for (b = a.next(); !b.done; b = a.next())
      (b = b.value), Gna(b, k), b.draw();
  };
  Rw.prototype.Fd = function (a) {
    this.j.push(a);
    this.h && Gna(a, this.h);
    this.m.refresh();
  };
  Rw.prototype.Sd = function (a) {
    _.nb(this.j, a);
  };
  Tw.Fd = Fna;
  Tw.Sd = Ena;
  _.Me("overlay", {
    Fq: function (a) {
      if (a) {
        (0, Sw.Sd)(a);
        (0, Tw.Sd)(a);
        var b = a.getMap();
        b && (b instanceof _.nf ? (0, Tw.Fd)(a) : (0, Sw.Fd)(a));
      }
    },
    preventMapHitsFrom: function (a) {
      _.Kq(a, {
        Od: function (b) {
          _.Qm(b.event.Ha);
        },
        rc: function (b) {
          return _.pq(b);
        },
        ih: function (b) {
          return _.qq(b);
        },
        Yc: function (b) {
          return _.qq(b);
        },
        vc: function (b) {
          return _.rq(b);
        },
      }).ti(!0);
    },
    preventMapHitsAndGesturesFrom: function (a) {
      a.addEventListener("click", _.Qe);
      a.addEventListener("contextmenu", _.Qe);
      a.addEventListener("dblclick", _.Qe);
      a.addEventListener("mousedown", _.Qe);
      a.addEventListener("mousemove", _.Qe);
      a.addEventListener("MSPointerDown", _.Qe);
      a.addEventListener("pointerdown", _.Qe);
      a.addEventListener("touchstart", _.Qe);
      a.addEventListener("wheel", _.Qe);
    },
  });
});
