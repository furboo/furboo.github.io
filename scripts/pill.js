var pill = function() {
    'use strict';

    function a(a) { return a.origin === location.origin }

    function b(a, b, c, d) { return { title: a || "", content: b || "", status: c || 0, timestamp: d || new Date } }

    function c(a, b) { document.title = b.title, a.innerHTML = b.content }

    function d(a, b, c) {
        var d = document.createDocumentFragment(),
            e = document.createElement("html");
        d.appendChild(e), e.innerHTML = c;
        var f = e.querySelector("title").textContent,
            g = e.querySelector(a),
            h = g ? g.innerHTML : "";
        return { title: f, content: h }
    }

    function e(a, b, c, d) { d ? history.pushState(a || {}, c, b) : history.replaceState(a || {}, c, b) }

    function f() { return { title: "Error", content: "<h1>Error</h1><p>Ooops. Something went wrong</p>", code: 500, timestamp: new Date } }

    function g(a) {
        requestAnimationFrame(function() {
            var b;
            b = a in document.anchors ? document.anchors[a] : document.getElementById(b), b && b.scrollIntoView(!0)
        })
    }

    function h() {}

    function i(a) { return "/" + a.replace(/\/+/g, "/").replace(/^\/|\/$/g, "") }
    return function(j, k) {
        function l(a, b, d) { e(null, a, b.title, d), c(w, b), r(b), d && 1 < a.hash.length && g(a.hash.slice(1)) }

        function m(a, b) {
            var f = i(a.pathname);
            if (f in z) { var g = z[f]; if (!0 !== v(g)) return void l(a, g, b) }
            e(null, a, a, b);
            var h = q = fetch(a).then(function(a) { return a.text().then(function(b) { return { res: a, text: b } }) }).then(function(b) {
                var c = b.res,
                    e = b.text,
                    g = d(j, c, e);
                z[f] = g, g.status = c.status, g.timestamp = new Date;
                h !== q || (q = null, l(a, g, !1))
            }).catch(function(a) { h === q && (q = null); var b = t(a); throw c(w, b), r(b), a }).catch(console.error);
            s(a)
        }

        function n(a) {
            if ("A" === a.target.nodeName) {
                var b = new URL(a.target.href, document.location);
                u(b) && (a.preventDefault(), window.scrollTo(0, 0), m(b, null === q))
            }
        }

        function o(a) { m(new URL(document.location), !1), requestAnimationFrame(function() { window.scrollTo(0, a.state.scroll || 0) }) }

        function p() { A || (A = setTimeout(function() { e({ scroll: window.scrollY }, document.location, document.title, !1), A = null }, 100)) }
        if ("function" == typeof window.history.pushState) {
            k = k || {};
            var q, r = k.onReady || h,
                s = k.onLoading || h,
                t = k.fromError || f,
                u = k.shouldServe || a,
                v = k.shouldReload || h,
                w = document.querySelector(j);
            if (!w) throw new Error("Element \"" + j + "\" not found");
            var x = new URL(document.location),
                y = b(document.title, w.innerHTML, 200),
                z = {};
            z[i(x.pathname)] = y, e({ scroll: window.scrollY }, x, y.title, !1);
            var A;
            document.body.addEventListener("click", n), window.addEventListener("popstate", o), window.addEventListener("scroll", p)
        }
    }
}();