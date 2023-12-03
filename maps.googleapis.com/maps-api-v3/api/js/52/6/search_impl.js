google.maps.__gjsload__("search_impl", function (_) {
  var ndb = function (a) {
      _.F.call(this, a);
    },
    pdb = function (a) {
      var b = _.bj.Ma;
      a = a.toArray();
      odb || (odb = { M: "sssM", O: ["ss"] });
      return b.call(_.bj, a, odb);
    },
    qdb = function (a, b) {
      _.D(a.o, 3, b);
    },
    rdb = function (a) {
      _.F.call(this, a);
    },
    sdb = function () {
      var a = _.mk,
        b = _.vj;
      this.j = _.dg;
      this.h = _.cl(_.uu, a, _.Zu + "/maps/api/js/LayersService.GetFeature", b);
    },
    vdb = function (a, b, c) {
      var d = _.KE(new sdb());
      c.Vh = (0, _.Oa)(d.load, d);
      c.clickable = 0 != a.get("clickable");
      _.fFa(c, _.LL(b));
      var e = [];
      e.push(_.L(c, "click", (0, _.Oa)(tdb, null, a)));
      _.jb(["mouseover", "mouseout", "mousemove"], function (f) {
        e.push(_.L(c, f, (0, _.Oa)(udb, null, a, f)));
      });
      e.push(
        _.L(a, "clickable_changed", function () {
          a.h.clickable = 0 != a.get("clickable");
        })
      );
      a.j = e;
    },
    tdb = function (a, b, c, d, e) {
      var f = null;
      if (e && ((f = { status: e.getStatus() }), 0 == e.getStatus())) {
        f.location = _.S(e.o, 2)
          ? new _.me(_.Yl(_.J(e.o, 2, _.pm).o, 1), _.Yl(_.J(e.o, 2, _.pm).o, 2))
          : null;
        f.fields = {};
        for (var g = _.E(e.o, 3), h = 0; h < g; ++h) {
          var k = _.yl(e.o, 3, _.RL, h);
          f.fields[k.getKey()] = k.Fa();
        }
      }
      _.M(a, "click", b, c, d, f);
    },
    udb = function (a, b, c, d, e, f, g) {
      var h = null;
      f && (h = { title: f[1].title, snippet: f[1].snippet });
      _.M(a, b, c, d, e, h, g);
    },
    wdb = function () {};
  _.B(ndb, _.F);
  ndb.prototype.j = function () {
    return _.kd(this.o, 2);
  };
  var odb;
  _.B(rdb, _.F);
  rdb.prototype.getStatus = function () {
    return _.H(this.o, 1, -1);
  };
  sdb.prototype.load = function (a, b) {
    function c(g) {
      g = new rdb(g);
      b(g);
    }
    var d = new ndb();
    _.D(d.o, 1, a.layerId.split("|")[0]);
    _.D(d.o, 2, a.featureId);
    qdb(d, _.nd(_.ud(this.j)));
    for (var e in a.parameters) {
      var f = _.hd(d.o, 4, _.RL);
      _.D(f.o, 1, e);
      _.D(f.o, 2, a.parameters[e]);
    }
    a = pdb(d);
    this.h(a, c, c);
    return a;
  };
  sdb.prototype.cancel = function () {
    throw Error("Not implemented");
  };
  wdb.prototype.Iv = function (a) {
    if (_.Ei[15]) {
      var b = a.C,
        c = (a.C = a.getMap());
      b &&
        a.h &&
        (a.m
          ? ((b = b.__gm.j), b.set(b.get().pf(a.h)))
          : a.h && _.BFa(a.h, b) && (_.jb(a.j || [], _.Te), (a.j = null)));
      if (c) {
        var d = a.get("layerId"),
          e = a.get("spotlightDescription"),
          f = a.get("paintExperimentIds"),
          g = a.get("styler"),
          h = a.get("mapsApiLayer"),
          k = a.get("darkLaunch"),
          l = a.get("mapFeatures"),
          m = a.get("travelMapRequest"),
          p = a.get("searchPipeMetadata"),
          q = a.get("overlayLayer"),
          r = a.get("caseExperimentIds"),
          t = a.get("airQualityPipeMetadata");
        b = new _.Ym();
        d = d.split("|");
        b.layerId = d[0];
        for (var u = 1; u < d.length; ++u) {
          var w = _.A(d[u].split(":")),
            y = w.next().value;
          w = _.ma(w);
          b.parameters[y] = w.join(":");
        }
        e && (b.spotlightDescription = new _.Gs(e));
        f && (b.paintExperimentIds = f.slice(0));
        g && (b.styler = new _.bn(g));
        m && (b.travelMapRequest = new _.bu(m));
        h && (b.mapsApiLayer = new _.xl(h));
        l && (b.mapFeatures = l);
        p && (b.searchPipeMetadata = new _.Vo(p));
        q && (b.overlayLayer = new _.or(q));
        r && (b.caseExperimentIds = r.slice(0));
        t && (b.airQualityPipeMetadata = new _.dt(t));
        b.darkLaunch = !!k;
        a.h = b;
        a.m = a.get("renderOnBaseMap");
        a.m ? ((a = c.__gm.j), a.set(a.get().Gd(b))) : vdb(a, c, b);
        _.P(c, "Lg");
        _.O(c, 148282);
      }
    }
  };
  _.Me("search_impl", new wdb());
});
