//////////////////////////////////////////////////////////////////////
// Object2VR 3.0/10616 Object Player                                //
// Trial License: For evaluation only!                              //
// (c) 2014, Garden Gnome Software, http://ggnome.com               //
//////////////////////////////////////////////////////////////////////

var j = !0,
    k = null,
    q = !1;

function object2vrPlayer(Ca) {
    function fc() {
        var a;
        u = document.createElement("div");
        u.innerHTML = gc("PGRpdiBzdHlsZT0icG9zaXRpb246IHJlbGF0aXZlOyBsZWZ0OiAwcHg7IHJpZ2h0OiAwcHg7IHRvcDogNDAlOyBib3R0b206IDYwJTsgbWFyZ2luOiBhdXRvOyB3aWR0aDogMThlbTsgaGVpZ2h0OiA0ZW07IGJvcmRlcjogM3B4IHNvbGlkICM1NTU7IGJveC1zaGFkb3c6IDVweCA1cHggMTBweCAjMzMzOyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgZGlzcGxheTogdGFibGU7IGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmOyBmb250LXNpemU6IDEwcHQ7IG9wYWNpdHk6IDAuOTU7IGJvcmRlci1yYWRpdXM6IDE1cHg7Ij48cCBzdHlsZT0idGV4dC1hbGlnbjogY2VudGVyOyBkaXNwbGF5OiB0YWJsZS1jZWxsOyB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAiPkNyZWF0ZWQgd2l0aCA8YSBocmVmPSJodHRwOi8vb2JqZWN0MnZyLmNvbS8iIHRhcmdldD0iX2JsYW5rIj5PYmplY3QyVlI8L2E+PC9wPjwvZGl2Pg==");
        a =
            "top:\t0px;left: 0px;width: 100px;height: 100px;overflow: hidden;z-index: 5000;position:relative;";
        "-webkit-" == H && (a += H + "transform: translateZ(99999999999999px);");
        u.setAttribute("style", a);
        c.c.insertBefore(u, c.c.firstChild);
        u.style.width = 0 + E + Xa + A + "px";
        u.style.height = 0 + F + Ya + B + "px";
        u.onclick = function() {
            u && (c.c.removeChild(u), u = k)
        };
        u.oncontextmenu = u.onclick
    }

    function yb() {
        setTimeout(function() {
            c.setFullscreen(0)
        }, 10);
        setTimeout(function() {
            c.setFullscreen(0)
        }, 100)
    }

    function Da() {
        zb ? setTimeout(function() {
                Da()
            },
            1E3 / 60) : Ab(function() {
            Da()
        });
        Za = 0;
        if (0 <= p) {
            if (2 == $a) {
                var a = R - ab,
                    f = S - bb;
                cb(a * ka / 300, f * ka / 300)
            } else if (3 == $a) {
                var f = la(),
                    b;
                T ? (a = (R - f.x) / A, b = (S - f.y) / B) : (b = (R - f.x) / A, a = (S - f.y) / B);
                db && (b = 1 - b);
                eb && (a = 1 - a);
                f = Math.floor((1 - b) * e.f);
                a = Math.floor((1 - a) * e.k);
                0 > f && (f = 0);
                f >= e.f && (f = e.f - 1);
                0 > a && (a = 0);
                a >= e.k && (a = e.k - 1);
                c.showObjectImage(f, a)
            } else U = 0.4 * (R - Ea), V = 0.4 * (S - Fa), Ea += U, Fa += V, cb(U * ka / 10, V * ka / 10), Bb && c.changeFov(0.4 * (0 - 100 * g.a));
            c.b = j
        }
        if (0 != ca) switch (ca) {
            case 16:
                c.changeFovLog(-1, j);
                c.b = j;
                break;
            case 17:
            case 18:
            case 91:
                c.changeFovLog(1,
                    j), c.b = j
        }
        if (fb && (0 != U || 0 != V) && 0 > p) U *= 0.9, V *= 0.9, 0.1 > U * U + V * V ? V = U = 0 : (cb(U, V), c.b = j);
        if (!c.isLoaded && c.hasConfig) {
            for (a = f = 0; a < c.checkLoaded.length; a++) c.checkLoaded[a].complete && "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYBgeACDAAADIAAE3iTbkAAAAAElFTkSuQmCC" != c.checkLoaded[a].src && f++;
            Cb && (Cb = q);
            f == c.checkLoaded.length ? (gb = 1, c.isLoaded = j, c.divSkin && c.divSkin.ggLoaded && c.divSkin.ggLoaded()) : gb = f / (1 * c.checkLoaded.length)
        }
        if (ma) {
            e.g =
                fa - e.x;
            e.m = ga - e.y;
            I = (hb - 100 * g.a) / 10;
            a = Math.sqrt(e.g * e.g + e.m * e.m + I * I);
            10 * a < ra ? (ma = q, e.g = 0, I = e.m = 0, e.x = Number(fa), e.y = Number(ga), g.a = hb / 100) : (a = a > 5 * ra ? ra / a : 0.2, e.g *= a, e.m *= a, I *= a);
            e.x += 1 * e.g;
            e.y += 1 * e.m;
            e.x >= e.f && (e.x -= e.f, fa -= e.f);
            0 > e.x && (e.x += e.f, fa += e.f);
            e.y >= e.k && (e.y -= e.k, ga -= e.k);
            0 > e.y && (e.y += e.k, ga += e.k);
            g.a += I / 10;
            if (0 < Y && 0.5 > I) {
                var i;
                b = 0.5 - g.d / e.width;
                i = 0.5 - g.e / e.height;
                a = (Db - b) / Y;
                f = (Eb - i) / Y;
                console.log("Center: " + b + "," + i + " " + a + "," + f);
                g.d = (0.5 - b - a) * e.width;
                g.e = (0.5 - i - f) * e.height;
                console.log(g);
                Y--;
                Y && (ma = j)
            }
            a = new Date;
            ib = a.getTime();
            c.b = j
        } else if (Z) {
            e.g = 0.95 * e.g + 0.05 * ha;
            e.x += e.g;
            if (jb && (0 > e.x || e.x >= e.f)) ha = -ha, e.g = -e.g, e.x += 2 * e.g;
            c.b = j
        } else if (ia && (a = new Date, a = a.getTime() - ib, 0 > p && 0 < Ga && a > 1E3 * Ga && (Z = j, e.g = 0, e.m = 0)), fb && 0 == ca && 0 > p && (0 != e.g || 0 != e.m || 0 != I)) e.g *= 0.9, e.m *= 0.9, I *= 0.9, e.x += e.g, e.y += e.m, c.changeFovLog(I), 1.0E-4 > e.g * e.g + e.m * e.m && (e.g = 0, I = e.m = 0), c.b = j;
        if (0 < s) {
            if (2 == s)
                for (a = 0; a < y.length; a++) f = y[a], "poly" == f.hstype && f.t != f.p && (f.t > f.p ? (f.p += 0.05, f.t < f.p && (f.p = f.t)) : (f.p -= 0.05, f.t >
                    f.p && (f.p = f.t)), c.b = j);
            3 == s && $ != L && ($ > L ? (L += 0.05, $ < L && (L = $)) : (L -= 0.05, $ > L && (L = $)), c.b = j)
        }
        c.b && (c.b = q, c.updateObject(), sa && hc())
    }

    function Fb() {
        setTimeout(function() {
            Fb()
        }, 200);
        5 < Za && (Ab = function() {
            return function(a) {
                window.setTimeout(a, 10)
            }
        }, zb = j, Da());
        Za++
    }

    function Gb(a) {
        c.skinObj && c.skinObj.hotspotProxyClick && c.skinObj.hotspotProxyClick(a.id);
        "" != a.url && (c.openUrl(a.url, a.target), Ha(-1, -1))
    }

    function Hb() {
        0 < J && (c.openUrl(c.hotspot.url, c.hotspot.target), c.skinObj && c.skinObj.hotspotProxyClick(J))
    }

    function kb(a,
        f) {
        var b = -1,
            c, C;
        c = ((a - E - 0.5 * A) / (g.viewport * g.a) - g.d) / e.width + 0.5;
        C = ((f - F - 0.5 * B) / (g.viewport * g.a) - g.e) / e.height + 0.5;
        for (var l = 0; l < y.length; l++) {
            var K = y[l];
            if ("poly" == K.hstype && K.H && 0 <= s)
                for (var z = 0; z < K.H.length; z++) {
                    var h = K.H[z];
                    if ((h.Z == e.r || K.reuse & 1) && (h.$ == e.s || K.reuse & 2) && (h.state == e.u || K.reuse & 4))
                        for (var m = 0; m < h.L.length; m++) {
                            var n = h.L[m];
                            if (0 < n.q.length) {
                                var r, p, o, x;
                                o = q;
                                for (r = 0, p = n.q.length - 1; r < n.q.length; p = r++) x = n.q[r], p = n.q[p], x.y > C != p.y > C && c < (p.x - x.x) * (C - x.y) / (p.y - x.y) + x.x && (o = !o);
                                o && (b =
                                    l)
                            }
                        }
                }
        }
        return 0 <= b ? y[b] : q
    }

    function hc() {
        if (c.i) {
            var a, f;
            lb != s && (lb = s, c.i.style.visibility = 0 < s ? "inherit" : "hidden");
            if (0 < s) {
                if (!o) try {
                    o = c.i.getContext("2d")
                } catch (b) {}
                if (o) {
                    if (o.width != A || o.height != B) o.width = A, o.height = B;
                    o.clear ? o.clear() : o.clearRect(0, 0, c.i.width, c.i.height);
                    var i = 1;
                    3 == s && (i = L);
                    for (var C = 0; C < y.length; C++) {
                        var l = y[C];
                        if ("poly" == l.hstype)
                            for (var K = 0; K < l.H.length; K++) {
                                var z = l.H[K];
                                if ((z.Z == e.r || l.reuse & 1) && (z.$ == e.s || l.reuse & 2) && (z.state == e.u || l.reuse & 4))
                                    for (var h = 0; h < z.L.length; h++) {
                                        var n =
                                            z.L[h];
                                        2 == s && (i = l.p);
                                        o.fillStyle = O(l.B, l.A * i);
                                        o.strokeStyle = O(l.D, l.C * i);
                                        if (0 < n.q.length) {
                                            o.beginPath();
                                            for (var m = 0; m < n.q.length; m++) v = n.q[m], a = g.viewport * g.a * (g.d + (v.x - 0.5) * e.width) + 0.5 * A, f = g.viewport * g.a * (g.e + (v.y - 0.5) * e.height) + 0.5 * B, 0 == m ? o.moveTo(a, f) : o.lineTo(a, f);
                                            o.closePath();
                                            o.stroke();
                                            o.fill()
                                        }
                                    }
                            }
                    }
                }
            }
        }
    }

    function Ia(a, f) {
        if (na && aa != k && ja && ja.getContext) {
            var b = la(),
                i = a - b.x - A / 2,
                i = i / g.a / g.viewport - g.d + e.width / 2,
                b = f - b.y - B / 2,
                b = b / g.a / g.viewport - g.e + e.height / 2;
            d = ja.getContext("2d").getImageData(i, b,
                1, 1);
            J = d.data[2];
            Ja != J && (0 < Ja && c.skinObj && c.skinObj.hotspotProxyOut && c.skinObj.hotspotProxyOut(Ja), c.hotspot = 0 < J && oa[J] ? oa[J] : c.emptyHotspot, 0 < J && c.skinObj && c.skinObj.hotspotProxyOver && c.skinObj.hotspotProxyOver(J), Ja = J)
        }
    }

    function mb(a, f, b, c, g, l) {
        var K = e.l.length - 1 - c,
            h = e.ja,
            h = ta(h, "c", a % e.f + (f % e.k + b % e.G * e.k) * e.f),
            h = ta(h, "r", c),
            h = ta(h, "l", K),
            h = ta(h, "x", g),
            h = ta(h, "y", l);
        return Ka(h)
    }

    function ta(a, f, b) {
        var c = RegExp("%0*" + f, "i").exec(a.toString());
        if (c) {
            var c = c.toString(),
                e = b.toString();
            for (c.charAt(c.length -
                    1) != f && (e = (1 + b).toString()); e.length < c.length - 1;) e = "0" + e;
            a = a.replace(c, e)
        }
        return a
    }

    function nb(a, c, b) {
        return Ka(e.path + "/img_" + b + "_" + c + "_" + a + "." + e.ba)
    }

    function La(a) {
        eb && (a = -a);
        e.y += a;
        ua()
    }

    function Ma(a) {
        db && (a = -a);
        e.x += a;
        ua()
    }

    function ua() {
        if (Ib) {
            for (; 0 > e.x;) e.x += e.f;
            for (; e.x >= e.f;) e.x -= e.f
        } else 0 > e.x && (e.x = 0), e.x >= e.f && (e.x = e.f - 1);
        if (Jb) {
            for (; 0 > e.y;) e.y += e.k;
            for (; e.y >= e.k;) e.y -= e.k
        } else 0 > e.y && (e.y = 0), e.y >= e.k && (e.y = e.k - 1);
        e.state >= e.G && (e.state = e.G - 1);
        0 > e.state && (e.state = 0);
        g.a = Math.max(g.min,
            Math.min(g.max, g.a));
        Kb && (W = 1 < g.a);
        if (A >= g.viewport * g.a * e.width) g.d = 0;
        else {
            var a = (e.width * g.viewport * g.a - A) / (2 * g.a * g.viewport);
            g.d = Math.max(-a, g.d);
            g.d = Math.min(+a, g.d)
        }
        B >= g.viewport * g.a * e.height ? g.e = 0 : (a = (e.height * g.viewport * g.a - B) / (2 * g.a * g.viewport), g.e = Math.max(-a, g.e), g.e = Math.min(+a, g.e))
    }

    function Lb() {
        ca = 0;
        va || m()
    }

    function Mb() {
        ca = 0;
        va || m()
    }

    function Nb(a) {
        if (!va) {
            a = a ? a : window.event;
            ca = a.keyCode;
            if (0 != ca) {
                switch (ca) {
                    case 37:
                        W ? g.d += 10 / g.a : c.changePan(1, j);
                        break;
                    case 38:
                        W ? g.e += 10 / g.a : c.changeTilt(1,
                            j);
                        break;
                    case 39:
                        W ? g.d += -10 / g.a : c.changePan(-1, j);
                        break;
                    case 40:
                        W ? g.e -= 10 / g.a : c.changeTilt(-1, j);
                        break;
                    case 43:
                    case 107:
                    case 187:
                        c.changeFovLog(-1, j);
                        break;
                    case 109:
                    case 45:
                    case 189:
                        c.changeFovLog(1, j)
                }
                c.b = j
            }
            m()
        }
    }

    function Ob(a) {
        D || (Bb = q, P(a.target) && (a.preventDefault(), m(), pa && pa.reset()))
    }

    function ic(a) {
        D || (a.preventDefault(), 1 != a.scale && (Na *= a.scale, c.setZoom(Na * g.V), m()))
    }

    function jc(a) {
        !D && P(a.target) && (a.preventDefault(), c.setZoom(event.scale * g.V), m())
    }

    function ob(a) {
        Oa = j;
        Na = 1;
        D || (a.touches ?
            (c.o = a.touches.target, c.o == c.control && (a.preventDefault(), m())) : (a.preventDefault(), m()))
    }

    function kc(a) {
        pa || (pa = new MSGesture, pa.target = c.i);
        pa.ma(a.sa)
    }

    function lc(a) {
        D || (a.preventDefault(), p = -1)
    }

    function mc(a) {
        if (!D) {
            0 <= p && (a.preventDefault(), m());
            var f = (new Date).getTime(),
                b = -1,
                b = Math.abs(Pb - wa) + Math.abs(Qb - xa);
            if (0 <= b && 20 > b && P(a.target)) {
                var e = q;
                if (c.o)
                    for (b = c.o; b && b != c.control;) b.onclick && !e && (b.onclick(), e = j), b = b.parentNode;
                if ((b = kb(c.mouse.x, c.mouse.y)) && !e) Gb(b), e = j;
                na && !e && Hb();
                e && a.preventDefault();
                b = Math.abs(Rb - wa) + Math.abs(Sb - xa);
                if (700 > f - c.K && 0 <= b && 20 > b && !e) {
                    c.o == c.control && pb && setTimeout(function() {
                        c.toggleFullscreen()
                    }, 10);
                    if (c.o) {
                        b = c.o;
                        for (e = q; b && b != c.control;) b.ondblclick && !e && (b.ondblclick(), e = j), b = b.parentNode;
                        e && a.preventDefault()
                    }
                    c.K = 0
                } else c.K = f;
                Rb = wa;
                Sb = xa
            }
            if (c.o) {
                b = c.o;
                for (e = q; b && a != c.control;) {
                    if (b.onmouseout) b.onmouseout();
                    a.onmouseup && !e && (b.onmouseup(), e = j);
                    b = b.parentNode
                }
                e && a.preventDefault()
            }
            c.o = k;
            p = -1
        }
    }

    function nc(a) {
        a || (a = window.event);
        var f = a.touches,
            b = la();
        c.mouse.x =
            f[0].pageX - b.x + E;
        c.mouse.y = f[0].pageY - b.y + F;
        if (!D) {
            if (1 == f.length && f[0] && (wa = f[0].pageX, xa = f[0].pageY, 0 <= p)) {
                a.preventDefault();
                for (b = 0; b < f.length; b++)
                    if (f[b].identifier == p) {
                        var e = f[b].pageY;
                        Pa = f[b].pageX;
                        Qa = e;
                        R = Pa;
                        S = Qa;
                        break
                    }
                m();
                Ia(f[0].pageX, f[0].pageY)
            }
            2 == f.length && f[0] && f[1] && (p = -1, Oa || (g.ia = Math.sqrt((f[0].pageX - f[1].pageX) * (f[0].pageX - f[1].pageX) + (f[0].pageY - f[1].pageY) * (f[0].pageY - f[1].pageY)), c.setZoom(g.V / g.la * g.ia), a.preventDefault()))
        }
    }

    function oc(a) {
        a || (a = window.event);
        var f = a.touches,
            b = la();
        c.mouse.x = f[0].pageX - b.x + E;
        c.mouse.y = f[0].pageY - b.y + F;
        if (!D) {
            console.log("Touch start...");
            if (1 == f.length && 0 > p && f[0]) {
                Ra = (new Date).getTime();
                Pb = f[0].pageX;
                Qb = f[0].pageY;
                wa = f[0].pageX;
                xa = f[0].pageY;
                c.o = f[0].target;
                P(f[0].target) && (a.preventDefault(), qb(f[0].pageX, f[0].pageY), p = f[0].identifier, m());
                if (c.o) {
                    b = c.o;
                    for (flag = q; b && !P(b);) {
                        if (b.onmouseover) b.onmouseover();
                        b.onmousedown && !flag && (b.onmousedown(), flag = j);
                        b = b.parentNode
                    }
                    flag && a.preventDefault()
                }
                Ia(f[0].pageX, f[0].pageY)
            }
            1 < f.length && (p = -1);
            !Oa && 2 == f.length && f[0] && f[1] && (g.la = Math.sqrt((f[0].pageX - f[1].pageX) * (f[0].pageX - f[1].pageX) + (f[0].pageY - f[1].pageY) * (f[0].pageY - f[1].pageY)), g.V = g.a)
        }
    }

    function ya(a) {
        if (!Tb && (a = a ? a : window.event, a = Sa(a), P(a.target))) {
            var f = a.detail ? -1 * a.detail : a.wheelDelta / 40;
            Ub && (f = -f);
            c.changeFovLog((0 < f ? 1 : -1) * Vb, j);
            c.b = j;
            a.preventDefault ? a.preventDefault() : a.returnValue = q;
            m()
        }
    }

    function Wb(a) {
        if (!D && (a = a ? a : window.event, a = Sa(a), 0 <= p)) {
            a.preventDefault ? a.preventDefault() : a.returnValue = q;
            p = -1;
            var f = (new Date).getTime(),
                b = -1,
                b = Math.abs(ab - R) + Math.abs(bb - S);
            if (400 > f - Ra && 0 <= b && 20 > b && P(a.target)) {
                var b = Math.abs(Xb - R) + Math.abs(Yb - S),
                    e = kb(c.mouse.x, c.mouse.y);
                e && Gb(e);
                Xb = R;
                Yb = S;
                na && (Ia(a.pageX, a.pageY), Hb());
                700 > f - c.K && 0 <= b && 20 > b && !e ? (pb && setTimeout(function() {
                    c.toggleFullscreen()
                }, 10), c.K = 0) : c.K = f
            }
            m()
        }
    }

    function za(a) {
        var f = la(),
            a = a ? a : window.event,
            a = Sa(a);
        rb() ? (c.mouse.x = a.screenX + E, c.mouse.y = a.screenY + F) : (c.mouse.x = a.pageX - f.x + E, c.mouse.y = a.pageY - f.y + F);
        if (!D && (0 <= p && (f = a.pageY, Pa = a.pageX, Qa = f, R = Pa, S = Qa, m(), a.preventDefault ?
                a.preventDefault() : a.returnValue = q), na && P(a.target) ? (Ia(a.pageX, a.pageY), 0 < J && Ha(c.mouse.x - E, c.mouse.y - F)) : J = 0, 0 == J && c.hotspot == c.emptyHotspot || "poly" == c.hotspot.hstype)) f = c.emptyHotspot, P(a.target) && (f = kb(c.mouse.x, c.mouse.y)), c.hotspot != f && (c.hotspot != c.emptyHotspot && (0 < s && (c.hotspot.t = 0), c.skinObj && c.skinObj.hotspotProxyOut && c.skinObj.hotspotProxyOut(c.hotspot.id)), f ? (c.hotspot = f, c.skinObj && c.skinObj.hotspotProxyOver && c.skinObj.hotspotProxyOver(c.hotspot.id), M.style.cursor = "pointer", 0 < s && ($ = 1,
            c.hotspot.t = 1, c.b = j)) : (c.hotspot = c.emptyHotspot, M.style.cursor = "auto", 0 < s && ($ = 0, c.b = j))), Ha(c.mouse.x - E, c.mouse.y - F)
    }

    function Ha(a, f) {
        var b = Aa;
        b.enabled && (c.hotspot != c.emptyHotspot && 0 <= a && 0 <= f && "" != c.hotspot.title ? (h.innerHTML = c.hotspot.title, h.style.color = O(b.Y, b.X), h.style.backgroundColor = b.background ? O(b.B, b.A) : "transparent", h.style.border = "solid " + O(b.D, b.C) + " " + b.Q + "px", h.style.borderRadius = b.P + "px", h.style.textAlign = "center", 0 < b.width ? (h.style.left = a - b.width / 2 + "px", h.style.width = b.width + "px") :
            (h.style.width = "auto", h.style.left = a - h.offsetWidth / 2 + "px"), h.style.height = 0 < b.height ? b.height + "px" : "auto", h.style.top = f + 25 + "px", h.style.visibility = "inherit", h.style.overflow = "hidden") : (h.style.visibility = "hidden", h.innerHTML = ""))
    }

    function pc(a) {
        if (u) u.onclick();
        D || (a = a ? a : window.event, a.preventDefault ? a.preventDefault() : a.returnValue = q, qb(a.screenX, a.screenY), p = 1, Ra = (new Date).getTime(), m())
    }

    function Ta(a) {
        if (u) u.onclick();
        if (!D && (a = a ? a : window.event, a = Sa(a), (!a.which || 0 == a.which || 1 == a.which) && P(a.target))) qb(a.pageX,
            a.pageY), p = 1, Ra = (new Date).getTime(), m(), a.preventDefault ? a.preventDefault() : a.returnValue = q
    }

    function Sa(a) {
        a.pageX == k && a.clientX != k && (a.pageX = a.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, a.pageY = a.clientY + document.body.scrollTop + document.documentElement.scrollTop);
        return a
    }

    function P(a) {
        return a == n || a == G || a == r || a == Q || a == c.control || a == c.i || a.ggType && "container" == a.ggType ? j : q
    }

    function m() {
        Z && (Z = q, e.g = 0, e.m = 0);
        ma && (ma = q, e.g = 0, e.m = 0);
        ib = (new Date).getTime()
    }

    function cb(a, f) {
        c.getFov();
        if (W) g.d += a / (g.a * g.viewport), g.e += f / (g.a * g.viewport);
        else {
            var b = -a / 20;
            T ? La(b) : Ma(b);
            b = -f / 20;
            T ? Ma(b) : La(b)
        }
        ua()
    }

    function qb(a, c) {
        ab = a;
        bb = c;
        R = a;
        S = c;
        Ea = a;
        Fa = c
    }

    function Zb() {
        switch (g.fa) {
            case 1:
                g.viewport = Math.min(A / e.width, B / e.height);
                break;
            case 2:
                g.viewport = Math.max(A / e.width, B / e.height);
                break;
            case 3:
                g.viewport = A / e.width;
                break;
            case 4:
                g.viewport = B / e.height;
                break;
            default:
                g.viewport = 1
        }
        var a, f;
        a = g.viewport * g.a * (g.d - e.width / 2) + A / 2;
        f = g.viewport * g.a * (g.e - e.height / 2) + B / 2;
        var b, i;
        a = Math.round(a);
        f = Math.round(f);
        b = Math.round(e.width * g.viewport * g.a);
        i = Math.round(e.height * g.viewport * g.a);
        if (X) {
            if (sa = q, 0 <= e.r && 0 <= e.s) {
                if ((b < A || i < B) && g.J > g.a) N.clear ? N.clear() : N.clearRect(0, 0, r.width, r.height);
                if (0 < e.l.length) {
                    for (var C = 0, l, h, z; e.l.length >= C + 2 && e.l[C + 1].width > b;) C++;
                    for (var m = C, p = q; !p;) {
                        p = j;
                        l = e.l[m];
                        var o = -a / b * (l.width / e.n);
                        h = -f / i * (l.height / e.n);
                        var s = (-a + A) / b * (l.width / e.n),
                            t = (-f + B) / i * (l.height / e.n),
                            o = Math.min(Math.max(0, Math.floor(o)), l.v - 1);
                        h = Math.min(Math.max(0, Math.floor(h)), l.O - 1);
                        s = Math.min(Math.max(0, Math.floor(s)),
                            l.v - 1);
                        t = Math.min(Math.max(0, Math.floor(t)), l.O - 1);
                        for (z = h; z <= t; z++)
                            for (h = o; h <= s; h++) {
                                var u = h + z * l.v,
                                    x = l.z[u];
                                !x || !x.j ? p = q : x.j.complete || (p = q)
                            }
                        p || (m + 1 < e.l.length ? m++ : p = j)
                    }
                    for (; m >= C;) {
                        l = e.l[m];
                        o = -a / b * (l.width / e.n);
                        h = -f / i * (l.height / e.n);
                        s = (-a + A) / b * (l.width / e.n);
                        t = (-f + B) / i * (l.height / e.n);
                        o = Math.min(Math.max(0, Math.floor(o)), l.v - 1);
                        h = Math.min(Math.max(0, Math.floor(h)), l.O - 1);
                        s = Math.min(Math.max(0, Math.floor(s)), l.v - 1);
                        t = Math.min(Math.max(0, Math.floor(t)), l.O - 1);
                        for (z = h; z <= t; z++)
                            for (h = o; h <= s; h++) u = h + z *
                                l.v, (x = l.z[u]) || (x = l.z[u] = {}), !x.j && 5 > ba && (x.j = new Image, x.j.setAttribute("src", mb(e.r, e.s, e.u, m, h, z)), x.j.onload = qc, x.j.onerror = $b, x.j.onabort = $b, 0 == ba && c.divSkin && c.divSkin.ggReLoadedLevels && c.divSkin.ggReLoadedLevels(), ba++), x.j && x.j.complete && (N.drawImage(x.j, a + (-e.da + e.n * h) * b / l.width, f + (-e.da + e.n * z) * i / l.height, x.j.width * b / l.width, x.j.height * i / l.height), sa = j);
                        m--
                    }
                    g.J = g.a;
                    g.T = g.d;
                    g.U = g.e
                } else "" != n.src && n.complete ? (N.clear ? N.clear() : N.clearRect(0, 0, r.width, r.height), N.drawImage(n, a, f, b, i), g.J = g.a,
                    g.T = g.d, g.U = g.e, sa = j) : c.b = j;
                if (sa)
                    for (a = 0; a < y.length; a++)
                        if (f = y[a], "point" == f.hstype) {
                            C = q;
                            for (l = i = b = 0; l < f.locations.length; l++) m = f.locations[l], m.column == e.r && m.row == e.s && m.state == e.u && (C = j, b = g.viewport * g.a * (g.d + m.x * e.width - e.width / 2) + A / 2, i = g.viewport * g.a * (g.e + m.y * e.height - e.height / 2) + B / 2);
                            f.obj && f.obj.__div && (f.obj.__div.style[Ba] = "none", C ? (f.obj.__div.style.left = E + b + "px", f.obj.__div.style.top = F + i + "px", f.obj.__div.style.visibility = "visible") : (f.obj.__div.style.left = "-100px", f.obj.__div.style.top =
                                "-100px", f.obj.__div.style.visibility = "hidden"))
                        }
            }
        } else n.setAttribute("width", e.width), n.setAttribute("height", e.height), G.setAttribute("width", e.width), G.setAttribute("height", e.height), n.style.left = a + "px", n.style.top = f + "px", n.style.width = b + "px", n.style.height = i + "px", G.style.left = a + "px", G.style.top = f + "px", G.style.width = b + "px", G.style.height = i + "px", g.J = g.a, g.T = g.d, g.U = g.e
    }

    function $b() {
        ba && ba--;
        0 == ba && c.divSkin && c.divSkin.ggLoadedLevels && c.divSkin.ggLoadedLevels()
    }

    function qc() {
        c.b = j;
        c.F = j;
        ba && ba--;
        0 == ba && c.divSkin && c.divSkin.ggLoadedLevels && c.divSkin.ggLoadedLevels()
    }

    function la() {
        var a = {
                x: 0,
                y: 0
            },
            c = t;
        if (c.offsetParent) {
            do a.x += c.offsetLeft, a.y += c.offsetTop; while (c = c.offsetParent)
        }
        return a
    }

    function Ua() {
        c.isFullscreen && (rb() || c.exitFullscreen(), rb() && (c.c.style.left = "0px", c.c.style.top = "0px"))
    }

    function rb() {
        return document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement && document.msFullscreenElement != k || document.fullScreen
    }

    function qa() {
        c.setViewerSize(c.I.offsetWidth,
            c.I.offsetHeight)
    }

    function Ka(a) {
        return "/" == a.charAt(0) || 0 < a.indexOf("://") ? a : sb + a
    }

    function ac(a) {
        a = Number(a).toString(16);
        return a = "#000000".substr(0, 7 - a.length) + a
    }

    function O(a, c) {
        a = Number(a);
        return Va && 8 >= Va ? ac(a) : "rgba(" + (a >> 16 & 255) + "," + (a >> 8 & 255) + "," + (a & 255) + "," + c + ")"
    }
    var Aa, s, L, $, tb, ub, vb, wb, lb;

    function rc(a, c) {
        var b = this;
        b.ka = a;
        b.hotspot = c;
        b.__div = document.createElement("div");
        b.j = document.createElement("img");
        var e;
        b.j.setAttribute("src", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5xJREFUeNqclmlIVFEUx997TjrplFQW2WKBBSYtRFlpWUILSSsRZRQIBdGHCFqIoKIvQRsUFRJC9LEgaSFbMMpcWi1pLzOLsjItKms0U5t5/c/wH7nc5o2jF374xrv87z33nHOPaRsRtbFgDpgJxoD+wATfwDNQDK6CyrCr5OcbhgiGIRsUAZt4QTWoIFXgp9JfAhY7rgdBl8NeBoLDYBloA+dBOagFTcDHcVEgDgwBGWA+OAcugvXgvb5wKMGJoAAMp9BpUA96EBf/Btsf8BI8AWfAErAcpHHDZeriliY2AVwDg8AucAQ0Ag+I4XhTm2Oxz8PT46KMbTx5EZjuJDgAnAVusJUm9DhYwalFcc59sIXXIaceFkowDySBPTRPL20xm+b7zYXa+N3CPrWJ6GuwGySA40HLBHc/GywFhbS5R1lEBrZy7FQwiSaX9pmnqeAYt+KUcew7BVZw/QKTq0ocpYPVvDOXItZCk2xgDIZqL8BR8Ab0VDbr4yZOgLeIwzQx6WiQxcCt1+6sld66L4yYtFSwF4yg2dU7/cEwGW9YVkAwmycp1dzdpvgm0DcCh4kHmxWzBls0uBX4qqmZJ4KzePm1IeJLgjmlC16aDKZpp5Q168B3o6wsSwTHgU+MIUs74RSj6y1d+212HKimJlUE+tFRfJpYtOKNXWmJTASqWf2Bu/R6+4TKHOrOzG4IhptjWgHbGkZvepQ6SQK7oRuCXzjX1DJavBEX1ygfT8FgBqpfm1zRDcEKbR2bsZlkJCdXieB1ZhZ5YtqVgXIPN+m9kbY6hpdb+d9fPncJRmZmqQheZkemJmgxyxykl3XWJEkcAl7N21s7PDcl5ZJ0PAa3wVwmWtVbZafPwQ7wLozYB7ATPNJO56d/LAikP9u+66KNJS1d4IOZp7wU0hfLukUyzgwm70T2N/DOxIy/eFdqawa5DL2NEGwP5k15Ja4woz9glvcomd9NzyvkFcQo5gomaLfm5c0svnKZ2k7q7+FauvR2MJKZR3+sY5WgtvkdG6JyELGhNHMTXyGfLviRJ5Tcd4Dlhle7086Sgp8CqVxDkn4OqHaqacr5ekjy3Q/W0FRNNGmoMtamdzdxsytZC0lqXKhEgWPVVgImg2NgFT1MHOoOk3yLEtgWN5TEOYvoIFI1rGM19//2wpAD7imF7lfwENwAxaASNCj90pcLLKdC2Iyw1M9gnEplMEp5kOU1f8WwKGJm8oUr9f8JMAAVMDM6HSDa9QAAAABJRU5ErkJggg%3D%3D");
        b.j.setAttribute("style", "position: absolute;top: -14px;left: -14px;");
        b.__div.appendChild(b.j);
        e = "position:absolute;" + (H + "user-select: none;");
        b.__div.setAttribute("style", e);
        b.__div.onclick = function() {
            b.ka.openUrl(c.url, c.target)
        };
        var g = Aa;
        g.enabled && (b.text = document.createElement("div"), e = "position:absolute;" + ("left: -" + g.width / 2 + "px;"), e = e + "top:\t 20px;" + ("width: " + g.width + "px;"), e = 0 == c.h ? e + "height: auto;" : e + ("height: " + g.height + "px;"), c.wordwrap ? e = e + "white-space: pre-wrap;" + ("width: " + g.width +
                "px;") : (e = 0 == g.height ? e + "width: auto;" : e + ("width: " + g.width + "px;"), e += "white-space: nowrap;"), e += H + "transform-origin: 50% 50%;", b.text.setAttribute("style", e + "visibility: hidden;border: 1px solid #000000;background-color: #ffffff;text-align: center;overflow: hidden;padding: 0px 1px 0px 1px;"), b.text.style.color = O(g.Y, g.X), b.text.style.backgroundColor = g.background ? O(g.B, g.A) : "transparent", b.text.style.border = "solid " + O(g.D, g.C) + " " + g.Q + "px", b.text.style.borderRadius = g.P + "px", b.text.style.textAlign =
            "center", b.text.style.width = 0 < g.width ? g.width + "px" : "auto", b.text.style.height = 0 < g.height ? g.height + "px" : "auto", b.text.style.overflow = "hidden", b.text.innerHTML = c.title, b.__div.onmouseover = function() {
                0 == g.height && (w = b.text.offsetWidth, b.text.style.left = -w / 2 + "px");
                b.text.style.visibility = "inherit"
            }, b.__div.onmouseout = function() {
                b.text.style.visibility = "hidden"
            }, b.__div.appendChild(b.text))
    }

    function gc(a) {
        var c = "",
            b, e, g = "",
            h, m = "",
            n = 0,
            a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do b = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(n++)),
            e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(n++)), h = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(n++)), m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(a.charAt(n++)), b = b << 2 | e >> 4, e = (e & 15) << 4 | h >> 2, g = (h & 3) << 6 | m, c += String.fromCharCode(b), 64 != h && (c += String.fromCharCode(e)), 64 != m && (c += String.fromCharCode(g)); while (n < a.length);
        return c
    }
    var c = this;
    c.transitionsDisabled = q;
    var I = 0,
        A = 320,
        B = 480,
        g = {
            a: 1,
            S: 1,
            min: 1,
            max: 1,
            J: -1,
            na: 0,
            d: 0,
            e: 0,
            T: 0,
            U: 0,
            viewport: 1,
            fa: 1
        },
        ab = 0,
        bb = 0,
        R = 0,
        S = 0,
        Xb = 0,
        Yb = 0,
        Pa = 0,
        Qa = 0,
        p = -1,
        Pb = 0,
        Qb = 0,
        wa = 0,
        xa = 0,
        Rb = 0,
        Sb = 0,
        Ra, fb = j,
        Ea = 0,
        Fa = 0,
        U = 0,
        V = 0,
        Bb = q,
        na = q,
        J = 0,
        Ja = 0,
        oa, da;
    oa = [];
    var y = [];
    c.emptyHotspot = {
        pan: 0,
        tilt: 0,
        title: "",
        url: "",
        target: "",
        id: "",
        skinid: "",
        w: 100,
        h: 20,
        wordwrap: q,
        obj: k
    };
    c.hotspot = c.emptyHotspot;
    c.mouse = {
        x: 0,
        y: 0
    };
    var ca = 0,
        t = k,
        M = k,
        n = k,
        G = k,
        ea = k,
        r = k,
        Q = k,
        X = k,
        xb = k,
        N = k,
        aa = k,
        ja = k,
        h = k;
    c.control = k;
    c.checkLoaded = [];
    c.isFullscreen = q;
    c.divSkin = k;
    c.isLoaded = q;
    c.hasConfig = q;
    var gb =
        0,
        Cb = q,
        ia = q,
        Ga = 5,
        Z = q,
        ha = 0.4,
        jb = q,
        ma = q,
        ra = 0.1,
        fa = 0,
        ga = 0,
        Y = 0,
        hb, Db, Eb, ib;
    c.skinObj = k;
    c.b = q;
    c.F = q;
    c.userdata = {
        title: "",
        description: "",
        author: "",
        datetime: "",
        copyright: "",
        source: "",
        information: "",
        comment: ""
    };
    var E = 0,
        F = 0,
        Xa = 0,
        Ya = 0,
        $a = 3,
        va = q,
        D = q,
        Tb = q,
        Kb = j,
        W = q,
        Ub = q,
        Vb = 1,
        pb = j,
        Ib = q,
        Jb = q,
        db = q,
        eb = q,
        T = q,
        ka = 10,
        e = {
            x: 0,
            y: 0,
            g: 0,
            m: 0,
            width: 100,
            height: 100,
            state: 0,
            r: -1,
            s: -1,
            u: -1,
            f: 1,
            k: 1,
            G: 1,
            M: 0,
            N: 0,
            W: 0,
            path: "images/",
            ba: "jpg",
            n: 512,
            ra: 1,
            ea: 0
        };
    e.ca = function() {
        return e.r % e.f + (e.s % e.f + e.u % e.G * e.k) * e.f
    };
    var bc = j,
        cc = 0,
        H = "",
        Ba = "transition",
        Oa = q,
        sb = "";
    s = 1;
    L = 0;
    $ = 0;
    tb = 255;
    ub = 1;
    vb = 255;
    wb = 0.3;
    Aa = {
        enabled: j,
        width: 180,
        height: 20,
        Y: 0,
        X: 1,
        background: j,
        B: 16777215,
        A: 1,
        D: 0,
        C: 1,
        P: 3,
        Q: 1,
        wordwrap: j
    };
    lb = void 0;
    var dc = navigator.userAgent.toLowerCase(),
        Va = -1 != dc.indexOf("msie") ? parseInt(dc.split("msie")[1]) : q,
        sc = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? j : q,
        zb = q,
        Ab = function() {
            var a = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame;
            return sc || !a ? function(a) {
                window.setTimeout(a, 10)
            } : a
        }();
    c.detectBrowser = function() {
        var a = ["Webkit", "Moz", "O", "ms", "Ms"],
            c;
        H = "";
        Ba = "transition";
        for (c = 0; c < a.length; c++) "undefined" !== typeof document.documentElement.style[a[c] + "Transform"] && (H = "-" + a[c].toLowerCase() + "-", Ba = a[c] + "Transition")
    };
    c.setBasePath = function(a) {
        sb = a
    };
    c.getPercentLoaded = function() {
        return gb
    };
    var ec = j;
    c.setViewerSize = function(a, e) {
        if (c.isFullscreen)
            if ("number" == typeof window.innerWidth) a = window.innerWidth, e = window.innerHeight;
            else if (document.documentElement &&
            (document.documentElement.clientWidth || document.documentElement.clientHeight)) a = document.documentElement.clientWidth, e = document.documentElement.clientHeight;
        else if (document.body && (document.body.clientWidth || document.body.clientHeight)) a = document.body.clientWidth, e = document.body.clientHeight;
        var b = a - E - Xa,
            g = e - F - Ya;
        A = b;
        B = g;
        t.style.width = b + "px";
        t.style.height = g + "px";
        t.style.left = E + "px";
        t.style.top = F + "px";
        Zb();
        M.style.width = a + "px";
        M.style.height = e + "px";
        c.i.style.width = a + "px";
        c.i.style.height = e + "px";
        c.i.width =
            a;
        c.i.height = e;
        c.i.style.left = E + "px";
        c.i.style.top = F + "px";
        r.style.width = a + "px";
        r.style.height = e + "px";
        Q.style.width = a + "px";
        Q.style.height = e + "px";
        if (ec) {
            if (!X) try {
                xb = Q.getContext("2d"), N = X = r.getContext("2d")
            } catch (h) {}
            try {
                X ? (t.removeChild(G), t.removeChild(n)) : (t.removeChild(r), t.removeChild(Q))
            } catch (l) {}
            ec = q
        }
        if (X && (b = window.devicePixelRatio || 1, b = 1, r.width != Math.round(a * b) || r.height != Math.round(e * b))) r.width = Math.round(a * b), r.height = Math.round(e * b), Q.width = Math.round(a * b), Q.height = Math.round(e * b), X.scale(b,
            b), xb.scale(b, b), c.b = j, c.F = j;
        c.b = j;
        c.divSkin && c.divSkin.ggUpdateSize && c.divSkin.ggUpdateSize(a, e)
    };
    var ba = 0,
        sa = q;
    c.setMargins = function(a, c, b, e) {
        E = a;
        F = c;
        Xa = b;
        Ya = e;
        qa()
    };
    c.changeViewMode = function(a) {
        0 == a && (W = q);
        1 == a && (W = j);
        2 == a && (W = W ? q : j)
    };
    c.changePolygonMode = function(a, e) {
        s = 1 == e && 0 < s ? 0 : Math.round(a);
        c.b = j
    };
    c.polygonMode = function() {
        return s
    };
    c.getPan = function() {
        return T ? e.y : e.x
    };
    c.getPanN = function() {
        return c.getPan()
    };
    c.getPanNorth = function() {
        return c.getPan()
    };
    c.showObjectImage = function(a, f) {
        e.x = a;
        e.y = f;
        ua();
        c.b = j
    };
    c.setPan = function(a) {
        m();
        isNaN(a) || (T ? e.y = Number(a) : e.x = Number(a));
        c.b = j
    };
    c.changePan = function(a) {
        m();
        isNaN(a) || (T ? La(a) : Ma(a));
        c.b = j
    };
    c.getTilt = function() {
        return T ? e.x : e.y
    };
    c.setTilt = function(a) {
        m();
        isNaN(a) || (T ? e.x = Number(a) : e.y = Number(a));
        c.b = j
    };
    c.changeTilt = function(a) {
        m();
        isNaN(a) || (T ? Ma(a) : La(a));
        c.b = j
    };
    c.changePanLog = function(a, e) {
        c.changePan(a, e)
    };
    c.changeTiltLog = function(a, e) {
        c.changeTilt(a, e)
    };
    c.getFov = function() {
        return 100 * g.a
    };
    c.setZoom = function(a) {
        isNaN(a) || (g.a = a < g.min ?
            g.min : a > g.max ? g.max : a);
        c.b = j
    };
    c.setFov = function(a) {
        m();
        c.setZoom(a / 100)
    };
    c.changeFov = function(a) {
        c.setFov(c.getFov() - 10 * a)
    };
    c.changeFovLog = function(a) {
        c.setFov(c.getFov() * Math.exp(-a / 50))
    };
    c.getX = function() {
        return e.r
    };
    c.getY = function() {
        return e.s
    };
    c.getState = function() {
        return e.u
    };
    c.setCenter = function(a, f) {
        g.d = (0.5 - a) * e.width;
        g.e = (0.5 - f) * e.height;
        c.b = j
    };
    c.getCenter = function() {
        var a = {};
        a.x = 0.5 - g.d / e.width;
        a.y = 0.5 - g.e / e.height;
        return a
    };
    c.setPanTilt = function(a, e) {
        m();
        isNaN(a) || c.setPan(a);
        isNaN(e) ||
            c.setTilt(e);
        c.b = j
    };
    c.setPanTiltFov = function(a, e, b) {
        m();
        isNaN(a) || c.setPan(a);
        isNaN(e) || c.setTilt(e);
        !isNaN(b) && 0 < b && c.setFov(b);
        c.b = j
    };
    c.setDefaultView = function() {
        e.x = e.oa;
        e.y = e.pa;
        c.changeViewState(e.W);
        g.a = g.S
    };
    c.moveTo = function(a, c, b, i, h, l) {
        m();
        ma = j;
        var n = a.toString().split("/");
        1 < n.length && (a = Number(n[0]), i = c, c = Number(n[1]), 2 < n.length && (b = Number(n[2])));
        fa = isNaN(a) ? e.x : Number(a);
        ga = isNaN(c) ? e.y : Number(c);
        hb = !isNaN(b) && 0 < b ? Number(b) : 100 * g.a;
        ra = !isNaN(i) && 0 < i ? Number(i) : 1;
        h && !isNaN(h) && l && !isNaN(l) ?
            (Db = Number(h), Eb = Number(l), Y = Math.ceil(20 / ra), 0 >= Y && (Y = 1)) : Y = 0
    };
    c.moveToDefaultView = function(a) {
        c.moveTo(e.M, e.N, 100 * g.S, a)
    };
    var pa, Na = 1,
        ob = function(a) {
            Oa = j;
            !D && P(a.target) && (a.preventDefault(), g.V = g.a, m())
        };
    c.changeViewState = function(a, f) {
        m();
        if (e.state != a) {
            e.state = a;
            if (0 < f) {
                var b = 1 / (20 * f);
                X ? (Q.style.visibility = "inherit", r.style[Ba] = "opacity " + b + "s linear", N == X ? (r.style.opacity = "0.0", N = xb) : (r.style.opacity = "1.0", N = X)) : (G.style.visibility = "inherit", n.style[Ba] = "opacity " + b + "s linear", ea == n ? (n.style.opacity =
                    "0.0", ea = G) : (n.style.opacity = "1.0", ea = n));
                c.updateObject()
            }
            c.b = j
        }
    };
    c.updateObject = function() {
        ua();
        var a = Math.floor(e.x),
            f = Math.floor(e.y),
            b = e.state,
            i = q;
        if (e.r != a || e.s != f || e.u != b) {
            if (0 < e.l.length)
                for (i = 0; i < e.l.length; i++) {
                    var h = e.l[i];
                    h.R ? h.aa[e.ca()] = h.z : h.z = []
                }
            e.r = a;
            e.s = f;
            e.u = b;
            if (0 < e.l.length && X)
                for (i = 0; i < e.l.length; i++) h = e.l[i], h.R && (h.z = h.aa[e.ca()], h.z || (h.z = []));
            else 0 < e.l.length ? ea.setAttribute("src", mb(a, f, b, e.l.length - 1, 0, 0)) : ea.setAttribute("src", nb(a, f, b)), ea.onload = function() {
                c.b = j;
                c.F =
                    j
            }, ea.qa = q;
            i = j
        }
        if (i || c.F || g.a != g.J || g.d != g.T || g.e != g.U) Zb(), c.F = q;
        i && na && (aa == k && (aa = new Image, ja = document.createElement("canvas"), ja.width = e.width, ja.height = e.height, aa.addEventListener && aa.addEventListener("load", function() {
            ja.getContext("2d").drawImage(aa, 0, 0, e.width, e.height)
        }, q)), 8 <= da ? (da & 16 && (a = 0), da & 32 && (f = 0), da & 64 && (b = 0)) : (0 < da && (b = 0), 1 < da && (a = 0), 2 < da && (f = 0)), aa && aa.src != Ka(e.path + "/hs_" + b + "_" + f + "_" + a + ".png") && (aa.src = Ka(e.path + "/hs_" + b + "_" + f + "_" + a + ".png")))
    };
    c.preloadImages = function() {
        var a,
            f, b, g;
        if (0 < e.l.length)
            for (g = 0; g < e.l.length; g++) {
                var h = e.l[g];
                if (h.R)
                    for (b = 0; b < e.G; b++)
                        for (f = 0; f < e.k; f++)
                            for (a = 0; a < e.f; a++) {
                                var l = [],
                                    m, n;
                                for (n = 0; n < h.O; n++)
                                    for (m = 0; m < h.v; m++) {
                                        var p = m + n * h.v,
                                            o;
                                        o = {};
                                        o.j = new Image;
                                        o.j.setAttribute("src", mb(a, f, b, g, m, n));
                                        o.j.onload = function() {
                                            c.b = j;
                                            c.F = j
                                        };
                                        l[p] = o;
                                        c.checkLoaded.push(o.j)
                                    }
                                h.aa[a + e.f * (f + b * e.k)] = l
                            }
            } else if (e.ea) {
                g = new Image;
                g.src = nb(e.M, e.N, e.W);
                for (b = 0; b < e.G; b++)
                    for (f = 0; f < e.k; f++)
                        for (a = 0; a < e.f; a++) g = new Image, g.src = nb(a, f, b), c.checkLoaded.push(g)
            }
    };
    var o, Ha =
        function(a, e) {
            var b = Aa;
            b.enabled && (c.hotspot != c.emptyHotspot && 0 <= a && 0 <= e && "" != c.hotspot.title ? (h.innerHTML = c.hotspot.title, h.style.color = O(b.Y, b.X), h.style.backgroundColor = b.background ? O(b.B, b.A) : "transparent", h.style.border = "solid " + O(b.D, b.C) + " " + b.Q + "px", h.style.borderRadius = b.P + "px", h.style.textAlign = "center", 0 < b.width ? (h.style.left = a - b.width / 2 + "px", h.style.width = b.width + "px") : (h.style.width = "auto", h.style.left = a - h.offsetWidth / 2 + "px"), h.style.height = 0 < b.height ? b.height + "px" : "auto", h.style.top =
                e + 25 + "px", h.style.visibility = "inherit", h.style.overflow = "hidden") : (h.style.visibility = "hidden", h.innerHTML = ""))
        };
    c.ha = function() {
        for (var a = 0; a < y.length; a++)
            if ("point" == y[a].hstype && (y[a].obj = c.skinObj && c.skinObj.addSkinHotspot ? new c.skinObj.addSkinHotspot(y[a]) : new rc(this, y[a]), y[a].obj && y[a].obj.__div)) {
                var e = M.firstChild;
                e ? M.insertBefore(y[a].obj.__div, e) : M.appendChild(y[a].obj.__div)
            }
    };
    var Za = 0;
    c.assignHandler = function() {
        var a;
        a = M;
        c.control = a;
        yb();
        setTimeout(function() {
            Da()
        }, 10);
        setTimeout(function() {
                Fb()
            },
            200);
        setTimeout(function() {
            qa();
            c.updateObject()
        }, 10);
        a.addEventListener ? (a.addEventListener("touchstart", oc, q), a.addEventListener("touchmove", nc, q), a.addEventListener("touchend", mc, q), a.addEventListener("touchcancel", lc, q), c.i.addEventListener("MSPointerDown", kc, q), c.i.addEventListener("MSGestureStart", ob, q), c.i.addEventListener("MSGestureEnd", Ob, q), c.i.addEventListener("MSGestureChange", ic, q), a.addEventListener("gesturestart", ob, q), a.addEventListener("gesturechange", jc, q), a.addEventListener("gestureend",
            Ob, q), a.addEventListener("mousedown", Ta, q), a.addEventListener("mousemove", za, q), n.addEventListener("mousedown", Ta, q), n.addEventListener("mousemove", za, q), document.addEventListener("mouseup", Wb, q), Va && (c.i.addEventListener("mousedown", Ta, q), c.i.addEventListener("mousemove", za, q), r.addEventListener("mousedown", Ta, q), r.addEventListener("mousemove", za, q)), Va ? (n.addEventListener("mousewheel", ya, q), r.addEventListener("mousewheel", ya, q)) : (a.addEventListener("mousewheel", ya, q), a.addEventListener("DOMMouseScroll",
            ya, q)), document.addEventListener("keydown", Nb, q), document.addEventListener("keyup", Mb, q), window.addEventListener("orientationchange", yb, q), window.addEventListener("resize", qa, q), window.addEventListener("blur", Lb, q), c.c.addEventListener("webkitfullscreenchange", Ua, q), document.addEventListener("mozfullscreenchange", Ua, q), window.addEventListener("webkitfullscreenchange", Ua, q), document.addEventListener("MSFullscreenChange", Ua, q)) : a.attachEvent && (n.attachEvent("onmousedown", pc), n.attachEvent("onmousemove",
            za), document.attachEvent("onmouseup", Wb), a.attachEvent("onmousedblclick", c.toggleFullscreen), a.onmousewheel = document.onmousewheel = ya, document.attachEvent("onkeydown", Nb), document.attachEvent("onkeyup", Mb), window.attachEvent("onresize", qa), window.attachEvent("onblur", Lb));
        a.oncontextmenu = function(a) {
            void 0 === a && (a = window.event);
            return !a.ctrlKey && (a = "<<L>>", "U" != a.charAt(2)) ? (fc(), q) : j
        }
    };
    c.setFullscreen = function(a) {
        c.isFullscreen != a && (c.isFullscreen = a, c.b = j, c.F = j);
        if (c.isFullscreen) {
            try {
                c.c.webkitRequestFullScreen ?
                    c.c.webkitRequestFullScreen() : c.c.mozRequestFullScreen ? c.c.mozRequestFullScreen() : c.c.msRequestFullscreen ? c.c.msRequestFullscreen() : c.c.requestFullScreen ? c.c.requestFullScreen() : c.c.requestFullscreen && c.c.requestFullscreen()
            } catch (e) {}
            c.c.style.position = "absolute";
            var a = la(),
                b = 0,
                g = 0;
            if ("number" == typeof window.pageYOffset) g = window.pageYOffset, b = window.pageXOffset;
            else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) g = document.body.scrollTop, b = document.body.scrollLeft;
            else if (document.documentElement &&
                (document.documentElement.scrollLeft || document.documentElement.scrollTop)) g = document.documentElement.scrollTop, b = document.documentElement.scrollLeft;
            c.c.style.left = Math.round(b - a.x + E) + "px";
            c.c.style.top = Math.round(g - a.y + F) + "px";
            document.body.style.overflow = "hidden";
            c.divSkin && c.divSkin.ggEnterFullscreen && c.divSkin.ggEnterFullscreen()
        } else {
            try {
                document.webkitIsFullScreen ? document.webkitCancelFullScreen() : document.mozFullScreen ? document.mozCancelFullScreen() : document.msExitFullscreen ? document.msExitFullscreen() :
                    document.fullScreen && (document.cancelFullScreen ? document.cancelFullScreen() : document.exitFullscreen && document.exitFullscreen())
            } catch (h) {}
            c.c.style.position = "relative";
            c.c.style.left = "0px";
            c.c.style.top = "0px";
            document.body.style.overflow = "";
            c.divSkin && c.divSkin.ggExitFullscreen && c.divSkin.ggExitFullscreen()
        }
        qa()
    };
    c.toggleFullscreen = function() {
        c.setFullscreen(!c.isFullscreen)
    };
    c.exitFullscreen = function() {
        c.setFullscreen(q)
    };
    c.startAutorotate = function(a, c, b) {
        Z = ia = j;
        a && 0 != a && (ha = a);
        c && (Ga = c);
        b && (jb =
            1 == b)
    };
    c.stopAutorotate = function() {
        ia = Z = q
    };
    c.toggleAutorotate = function() {
        Z = ia = !Z
    };
    var u;
    c.createLayers = function(a) {
        var e;
        c.I = document.getElementById(a);
        c.I ? (c.I.innerHTML = "", e = "max-width: none !important;max-height: none !important;min-width: none !important;min-height: none !important;padding 0px !important;margin 0px !important;", c.c = document.createElement("div"), c.c.setAttribute("style", "top:\t0px;left: 0px;-ms-touch-action: none;position:relative;" + e), c.I.appendChild(c.c), t = document.createElement("div"),
            a = "top:\t0px;left: 0px;overflow: hidden;position:absolute;" + (H + "user-select: none;"), t.setAttribute("style", a + e), c.c.appendChild(t), G = document.createElement("img"), G.setAttribute("galleryimg", "false"), a = "top:\t0px;left: 0px;position:absolute;visibility: hidden;" + (H + "user-select: none;"), G.setAttribute("style", a + e), t.appendChild(G), n = document.createElement("img"), n.setAttribute("galleryimg", "false"), a = "top:\t0px;left: 0px;position:absolute;" + (H + "user-select: none;"), n.setAttribute("style", a + e), t.appendChild(n),
            ea = n, Q = document.createElement("canvas"), a = "top:\t0px;left: 0px;width:  100px;height: 100px;visibility: hidden;position:absolute;" + (H + "user-select: none;"), Q.setAttribute("style", a + e), t.appendChild(Q), r = document.createElement("canvas"), a = "top:\t0px;left: 0px;width:  100px;height: 100px;position:absolute;" + (H + "user-select: none;"), r.setAttribute("style", a + e), t.appendChild(r), h = document.createElement("div"), h.setAttribute("style", "top:\t0px;left: 0px;position:absolute;padding: 3px;visibility: hidden;z-index: 1100;"),
            h.innerHTML = " Hotspot text!", t.appendChild(h), M = document.createElement("div"), a = "top:\t0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;z-index: 1000;" + (H + "user-select: none;"), M.setAttribute("style", a + e), c.c.appendChild(M), c.i = document.createElement("canvas"), a = "top:\t0px;left: 0px;width:  100px;height: 100px;overflow: hidden;position:absolute;z-index: 900;" + (H + "user-select: none;"), c.i.setAttribute("style", a + e), c.c.appendChild(c.i), c.divSkin = M) : alert("container not found!")
    };
    c.readConfigString = function(a) {
        window.DOMParser ? (parser = new DOMParser, xmlDoc = parser.parseFromString(a, "text/xml")) : (xmlDoc = new ActiveXObject("Microsoft.XMLDOM"), xmlDoc.async = "false", xmlDoc.loadXML(a));
        c.readConfigXml(xmlDoc)
    };
    c.readConfigUrl = function(a) {
        try {
            var e;
            e = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
            e.open("GET", a, q);
            e.send(k);
            var b = e.responseXML;
            if (b) {
                var g = a.lastIndexOf("/");
                0 <= g && (sb = a.substr(0, g + 1));
                c.readConfigXml(b)
            } else alert("Error loading XML")
        } catch (h) {
            alert("Error XML:" +
                h)
        }
    };
    var Wa = j;
    c.readConfigXml = function(a) {
        var f = a.firstChild,
            a = f.firstChild;
        a == k && (a = f.nextSibling.firstChild);
        for (var b; a;) {
            if ("view" == a.nodeName)
                for (f = a.firstChild; f;) {
                    "start" == f.nodeName && (b = f.getAttributeNode("column"), e.M = Number(b ? b.nodeValue : 0), e.x = e.M, b = f.getAttributeNode("row"), e.N = Number(b ? b.nodeValue : 0), e.y = e.N, b = f.getAttributeNode("state"), e.W = Number(b ? b.nodeValue : 0), e.state = e.W);
                    "zoom" == f.nodeName && (b = f.getAttributeNode("min"), g.min = 1 * (b ? b.nodeValue : 1), b = f.getAttributeNode("default"),
                        g.S = 1 * (b ? b.nodeValue : 1), g.a = g.S, b = f.getAttributeNode("max"), g.max = 1 * (b ? b.nodeValue : 1), b = f.getAttributeNode("centerx"), g.d = 1 * (b ? b.nodeValue : 0), b = f.getAttributeNode("centery"), g.e = 1 * (b ? b.nodeValue : 0));
                    if ("viewer" == f.nodeName && ((b = f.getAttributeNode("background")) && (bc = 1 == b.nodeValue), (b = f.getAttributeNode("backgroundcolor")) && (cc = 1 * b.nodeValue), b = f.getAttributeNode("imagescaling"))) g.fa = 1 * b.nodeValue;
                    f = f.nextSibling
                }
            if ("autorotate" == a.nodeName && (Wa && (ia = q), (b = a.getAttributeNode("start")) && (ia = 1 == b.nodeValue), (b = a.getAttributeNode("pingpong")) && (jb = 1 == b.nodeValue), (b = a.getAttributeNode("speed")) && (ha = 1 * b.nodeValue), (b = a.getAttributeNode("delay")) && (Ga = 1 * b.nodeValue), Z = ia, (b = a.getAttributeNode("onlyonce")) && 0 < b.nodeValue)) f = e.M, f = 0 < ha ? f + (b.nodeValue * e.f + 0.5) : f - (b.nodeValue * e.f + 0.5), c.moveTo(f, e.N, 0, Math.abs(ha));
            if ("input" == a.nodeName) {
                if (b = a.getAttributeNode("columns")) e.f = 1 * b.nodeValue;
                if (b = a.getAttributeNode("rows")) e.k = 1 * b.nodeValue;
                if (b = a.getAttributeNode("states")) e.G = 1 * b.nodeValue;
                if (b = a.getAttributeNode("width")) e.width =
                    1 * b.nodeValue;
                if (b = a.getAttributeNode("height")) e.height = 1 * b.nodeValue;
                if (b = a.getAttributeNode("fileextension")) e.ba = b.nodeValue;
                if (b = a.getAttributeNode("imagepath")) e.path = b.nodeValue;
                if (b = a.getAttributeNode("leveltileurl")) e.ja = b.nodeValue;
                if (b = a.getAttributeNode("leveltilesize")) e.n = Number(b.nodeValue);
                if (b = a.getAttributeNode("overlap")) e.da = b.nodeValue;
                if (b = a.getAttributeNode("preload")) e.ea = 1 == b.nodeValue;
                e.l = [];
                for (f = a.firstChild; f;) {
                    if ("level" == f.nodeName) {
                        var i = {};
                        b = f.getAttributeNode("width");
                        i.width = 1 * (b ? b.nodeValue : 1);
                        b = f.getAttributeNode("height");
                        i.height = 1 * (b ? b.nodeValue : 1);
                        b = f.getAttributeNode("preload");
                        i.R = q;
                        b && (i.R = 1 == b.nodeValue);
                        i.v = Math.floor((i.width + e.n - 1) / e.n);
                        i.O = Math.floor((i.height + e.n - 1) / e.n);
                        i.z = [];
                        i.aa = [];
                        e.l.push(i)
                    }
                    f = f.nextSibling
                }
            }
            "control" == a.nodeName && Wa && ((b = a.getAttributeNode("simulatemass")) && (fb = 1 == b.nodeValue), (b = a.getAttributeNode("locked")) && (D = 1 == b.nodeValue), b && (va = 1 == b.nodeValue), (b = a.getAttributeNode("lockedmouse")) && (D = 1 == b.nodeValue), (b = a.getAttributeNode("lockedkeyboard")) &&
                (va = 1 == b.nodeValue), (b = a.getAttributeNode("lockedwheel")) && (Tb = 1 == b.nodeValue), (b = a.getAttributeNode("invertwheel")) && (Ub = 1 == b.nodeValue), (b = a.getAttributeNode("speedwheel")) && (Vb = 1 * b.nodeValue), (b = a.getAttributeNode("sensitifity")) && (ka = 1 * b.nodeValue), (b = a.getAttributeNode("sensitivity")) && (ka = 1 * b.nodeValue), (b = a.getAttributeNode("wrapx")) && (Ib = 1 == b.nodeValue), (b = a.getAttributeNode("wrapy")) && (Jb = 1 == b.nodeValue), (b = a.getAttributeNode("revx")) && (db = 1 == b.nodeValue), (b = a.getAttributeNode("revy")) &&
                (eb = 1 == b.nodeValue), (b = a.getAttributeNode("swapxy")) && (T = 1 == b.nodeValue), (b = a.getAttributeNode("dblclickfullscreen")) && (pb = 1 == b.nodeValue), (b = a.getAttributeNode("automovemode")) && (Kb = 1 == b.nodeValue), (b = a.getAttributeNode("controller")) && ($a = 1 * b.nodeValue));
            if ("qthotspots" == a.nodeName) {
                (b = a.getAttributeNode("reuse")) && (da = 1 * b.nodeValue);
                (b = a.getAttributeNode("enabled")) && (na = 1 == b.nodeValue);
                oa = [];
                i = {
                    id: 0,
                    title: "",
                    url: "",
                    target: ""
                };
                oa[i.id] = i;
                for (f = a.firstChild; f;) "hotspot" == f.nodeName && (i = {}, b = f.getAttributeNode("id"),
                    i.id = 1 * (b ? b.nodeValue : 1), b = f.getAttributeNode("title"), i.title = b ? b.nodeValue.toString() : "", b = f.getAttributeNode("url"), i.url = b ? b.nodeValue.toString() : "", b = f.getAttributeNode("target"), i.target = b ? b.nodeValue.toString() : "", oa[i.id] = i), f = f.nextSibling
            }
            if ("hotspots" == a.nodeName)
                for (f = a.firstChild; f;) {
                    if ("label" == f.nodeName) {
                        i = Aa;
                        if (b = f.getAttributeNode("enabled")) i.enabled = 1 == b.nodeValue;
                        if (b = f.getAttributeNode("width")) i.width = 1 * b.nodeValue;
                        if (b = f.getAttributeNode("height")) i.height = 1 * b.nodeValue;
                        if (b =
                            f.getAttributeNode("textcolor")) i.Y = 1 * b.nodeValue;
                        if (b = f.getAttributeNode("textalpha")) i.X = 1 * b.nodeValue;
                        if (b = f.getAttributeNode("background")) i.background = 1 == b.nodeValue;
                        if (b = f.getAttributeNode("backgroundalpha")) i.A = 1 * b.nodeValue;
                        if (b = f.getAttributeNode("backgroundcolor")) i.B = 1 * b.nodeValue;
                        if (b = f.getAttributeNode("border")) i.Q = 1 * b.nodeValue;
                        if (b = f.getAttributeNode("bordercolor")) i.D = 1 * b.nodeValue;
                        if (b = f.getAttributeNode("borderalpha")) i.C = 1 * b.nodeValue;
                        if (b = f.getAttributeNode("borderradius")) i.P =
                            1 * b.nodeValue;
                        if (b = f.getAttributeNode("wordwrap")) i.wordwrap = 1 == b.nodeValue
                    }
                    "polystyle" == f.nodeName && ((b = f.getAttributeNode("mode")) && (s = 1 * b.nodeValue), (b = f.getAttributeNode("bordercolor")) && (tb = 1 * b.nodeValue), (b = f.getAttributeNode("backgroundcolor")) && (vb = 1 * b.nodeValue), (b = f.getAttributeNode("borderalpha")) && (ub = 1 * b.nodeValue), (b = f.getAttributeNode("backgroundalpha")) && (wb = 1 * b.nodeValue));
                    if ("hotspot" == f.nodeName) {
                        i = {
                            hstype: "point",
                            pan: 0,
                            tilt: 0,
                            url: "",
                            target: "",
                            id: "",
                            skinid: "",
                            w: 100,
                            h: 20,
                            wordwrap: q,
                            obj: k,
                            q: k
                        };
                        (b = f.getAttributeNode("url")) && (i.url = b.nodeValue.toString());
                        (b = f.getAttributeNode("target")) && (i.target = b.nodeValue.toString());
                        (b = f.getAttributeNode("title")) && (i.title = b.nodeValue.toString());
                        (b = f.getAttributeNode("id")) && (i.id = b.nodeValue.toString());
                        if (b = f.getAttributeNode("reuse")) i.reuse = b.nodeValue;
                        (b = f.getAttributeNode("skinid")) && (i.skinid = b.nodeValue.toString());
                        (b = a.getAttributeNode("width")) && (i.w = b.nodeValue.toString());
                        (b = a.getAttributeNode("height")) && (i.h = b.nodeValue.toString());
                        (b = a.getAttributeNode("wordwrap")) && (i.wordwrap = 1 == b.nodeValue);
                        i.locations = [];
                        for (var h = f.firstChild; h;) {
                            if ("location" == h.nodeName) {
                                var l = {
                                    column: 0,
                                    row: 0,
                                    state: 0,
                                    x: 0,
                                    y: 0
                                };
                                (b = h.getAttributeNode("column")) && (l.column = Number(b.nodeValue));
                                (b = h.getAttributeNode("row")) && (l.row = Number(b.nodeValue));
                                (b = h.getAttributeNode("state")) && (l.state = Number(b.nodeValue));
                                (b = h.getAttributeNode("x")) && (l.x = Number(b.nodeValue));
                                (b = h.getAttributeNode("y")) && (l.y = Number(b.nodeValue));
                                i.locations.push(l)
                            }
                            h = h.nextSibling
                        }
                        y.push(i)
                    }
                    if ("polyhotspot" ==
                        f.nodeName) {
                        i = {
                            hstype: "poly",
                            url: "",
                            target: "",
                            id: "",
                            skinid: "",
                            reuse: 0,
                            w: 100,
                            h: 20,
                            wordwrap: q,
                            obj: k,
                            q: k,
                            p: 0,
                            t: 0
                        };
                        (b = f.getAttributeNode("url")) && (i.url = b.nodeValue.toString());
                        (b = f.getAttributeNode("target")) && (i.target = b.nodeValue.toString());
                        (b = f.getAttributeNode("title")) && (i.title = b.nodeValue.toString());
                        (b = f.getAttributeNode("id")) && (i.id = b.nodeValue.toString());
                        if (b = f.getAttributeNode("reuse")) i.reuse = b.nodeValue;
                        i.D = tb;
                        i.B = vb;
                        i.C = ub;
                        i.A = wb;
                        if (b = f.getAttributeNode("bordercolor")) i.D = 1 * b.nodeValue;
                        if (b = f.getAttributeNode("backgroundcolor")) i.B = 1 * b.nodeValue;
                        if (b = f.getAttributeNode("borderalpha")) i.C = 1 * b.nodeValue;
                        if (b = f.getAttributeNode("backgroundalpha")) i.A = 1 * b.nodeValue;
                        i.H = [];
                        for (h = f.firstChild; h;) {
                            if ("polygon" == h.nodeName) {
                                l = {
                                    Z: 0,
                                    $: 0,
                                    state: 0,
                                    ga: ""
                                };
                                if (b = h.getAttributeNode("vertices")) {
                                    l.ga = b.nodeValue.toString();
                                    b = l.ga.split("|");
                                    l.L = [];
                                    for (var m = 0; m < b.length; m++) {
                                        var n = {},
                                            o = b[m].split(";");
                                        n.q = [];
                                        for (var p = 0; p < o.length; p++) {
                                            var r = o[p].split(","),
                                                u = {};
                                            u.x = 1 * r[0];
                                            u.y = 1 * r[1];
                                            n.q.push(u)
                                        }
                                        l.L.push(n)
                                    }
                                }
                                if (b =
                                    h.getAttributeNode("column")) l.Z = b.nodeValue;
                                if (b = h.getAttributeNode("row")) l.$ = b.nodeValue;
                                if (b = h.getAttributeNode("state")) l.state = b.nodeValue;
                                i.H.push(l)
                            }
                            h = h.nextSibling
                        }
                        y.push(i)
                    }
                    f = f.nextSibling
                }
            "userdata" == a.nodeName && (b = a.getAttributeNode("title"), c.userdata.title = b ? b.nodeValue.toString() : "", b = a.getAttributeNode("description"), c.userdata.description = b ? b.nodeValue.toString() : "", b = a.getAttributeNode("author"), c.userdata.author = b ? b.nodeValue.toString() : "", b = a.getAttributeNode("datetime"), c.userdata.datetime =
                b ? b.nodeValue.toString() : "", b = a.getAttributeNode("copyright"), c.userdata.copyright = b ? b.nodeValue.toString() : "", b = a.getAttributeNode("source"), c.userdata.source = b ? b.nodeValue.toString() : "", b = a.getAttributeNode("info"), c.userdata.information = b ? b.nodeValue.toString() : "", b = a.getAttributeNode("comment"), c.userdata.comment = b ? b.nodeValue.toString() : "");
            a = a.nextSibling
        }
        c.ha();
        c.b = j;
        Wa && c.divSkin && c.divSkin.ggViewerInit && c.divSkin.ggViewerInit();
        Wa = q;
        c.hasConfig = j;
        qa();
        t.style.backgroundColor = bc ? ac(cc) : "transparent";
        c.preloadImages()
    };
    c.openUrl = function(a, c) {
        0 < a.length && window.open(a, c)
    };
    c.detectBrowser();
    c.createLayers(Ca);
    c.assignHandler()
}
window.object2vrPlayer = object2vrPlayer;
window.ggHasCanvas = function() {
    var Ca = document.createElement("canvas");
    return !(!Ca.getContext || !Ca.getContext("2d"))
};
