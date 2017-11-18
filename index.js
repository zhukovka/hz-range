/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bigfoot_ui__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bigfoot_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bigfoot_ui__);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/******/(function (modules) {
  // webpackBootstrap
  /******/ // The module cache
  /******/var installedModules = {};
  /******/
  /******/ // The require function
  /******/function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/if (installedModules[moduleId]) {
      /******/return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/var module = installedModules[moduleId] = {
      /******/i: moduleId,
      /******/l: false,
      /******/exports: {}
      /******/ };
    /******/
    /******/ // Execute the module function
    /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/__webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/__webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/__webpack_require__.d = function (exports, name, getter) {
    /******/if (!__webpack_require__.o(exports, name)) {
      /******/Object.defineProperty(exports, name, {
        /******/configurable: false,
        /******/enumerable: true,
        /******/get: getter
        /******/ });
      /******/
    }
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/__webpack_require__.n = function (module) {
    /******/var getter = module && module.__esModule ?
    /******/function getDefault() {
      return module['default'];
    } :
    /******/function getModuleExports() {
      return module;
    };
    /******/__webpack_require__.d(getter, 'a', getter);
    /******/return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/__webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/__webpack_require__.p = "";
  /******/
  /******/ // Load entry module and return exports
  /******/return __webpack_require__(__webpack_require__.s = 1);
  /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports) {

  var g;

  // This works in non-strict mode
  g = function () {
    return this;
  }();

  try {
    // This works if eval is allowed (see CSP)
    g = g || Function("return this")() || (1, eval)("this");
  } catch (e) {
    // This works if the window reference is available
    if (typeof window === "object") g = window;
  }

  // g can still be undefined, but nothing to do about it...
  // We return undefined, instead of nothing here, so it's
  // easier to handle this case. if(!global) { ...}

  module.exports = g;

  /***/
},
/* 1 */
/***/function (module, exports, __webpack_require__) {

  const supportsShadowDOMV1 = !!HTMLElement.prototype.attachShadow;
  console.log(supportsShadowDOMV1);
  if (!supportsShadowDOMV1) {
    __webpack_require__(2);
    __webpack_require__(3);
    __webpack_require__(4);
    __webpack_require__(5);
    __webpack_require__(6);
  }
  __webpack_require__(7);

  /***/
},
/* 2 */
/***/function (module, exports) {

  (function () {
    'use strict';

    var h = new function () {}();var aa = new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function n(b) {
      var a = aa.has(b);b = /^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(b);return !a && b;
    }function p(b) {
      var a = b.isConnected;if (void 0 !== a) return a;for (; b && !(b.__CE_isImportDocument || b instanceof Document);) b = b.parentNode || (window.ShadowRoot && b instanceof ShadowRoot ? b.host : void 0);return !(!b || !(b.__CE_isImportDocument || b instanceof Document));
    }
    function q(b, a) {
      for (; a && a !== b && !a.nextSibling;) a = a.parentNode;return a && a !== b ? a.nextSibling : null;
    }
    function t(b, a, c) {
      c = c ? c : new Set();for (var d = b; d;) {
        if (d.nodeType === Node.ELEMENT_NODE) {
          var e = d;a(e);var f = e.localName;if ("link" === f && "import" === e.getAttribute("rel")) {
            d = e.import;if (d instanceof Node && !c.has(d)) for (c.add(d), d = d.firstChild; d; d = d.nextSibling) t(d, a, c);d = q(b, e);continue;
          } else if ("template" === f) {
            d = q(b, e);continue;
          }if (e = e.__CE_shadowRoot) for (e = e.firstChild; e; e = e.nextSibling) t(e, a, c);
        }d = d.firstChild ? d.firstChild : q(b, d);
      }
    }function u(b, a, c) {
      b[a] = c;
    };function v() {
      this.a = new Map();this.o = new Map();this.f = [];this.b = !1;
    }function ba(b, a, c) {
      b.a.set(a, c);b.o.set(c.constructor, c);
    }function w(b, a) {
      b.b = !0;b.f.push(a);
    }function x(b, a) {
      b.b && t(a, function (a) {
        return y(b, a);
      });
    }function y(b, a) {
      if (b.b && !a.__CE_patched) {
        a.__CE_patched = !0;for (var c = 0; c < b.f.length; c++) b.f[c](a);
      }
    }function z(b, a) {
      var c = [];t(a, function (b) {
        return c.push(b);
      });for (a = 0; a < c.length; a++) {
        var d = c[a];1 === d.__CE_state ? b.connectedCallback(d) : A(b, d);
      }
    }
    function B(b, a) {
      var c = [];t(a, function (b) {
        return c.push(b);
      });for (a = 0; a < c.length; a++) {
        var d = c[a];1 === d.__CE_state && b.disconnectedCallback(d);
      }
    }
    function C(b, a, c) {
      c = c ? c : {};var d = c.w || new Set(),
          e = c.s || function (a) {
        return A(b, a);
      },
          f = [];t(a, function (a) {
        if ("link" === a.localName && "import" === a.getAttribute("rel")) {
          var c = a.import;c instanceof Node && (c.__CE_isImportDocument = !0, c.__CE_hasRegistry = !0);c && "complete" === c.readyState ? c.__CE_documentLoadHandled = !0 : a.addEventListener("load", function () {
            var c = a.import;if (!c.__CE_documentLoadHandled) {
              c.__CE_documentLoadHandled = !0;var f = new Set(d);f.delete(c);C(b, c, { w: f, s: e });
            }
          });
        } else f.push(a);
      }, d);if (b.b) for (a = 0; a < f.length; a++) y(b, f[a]);for (a = 0; a < f.length; a++) e(f[a]);
    }
    function A(b, a) {
      if (void 0 === a.__CE_state) {
        var c = a.ownerDocument;if (c.defaultView || c.__CE_isImportDocument && c.__CE_hasRegistry) if (c = b.a.get(a.localName)) {
          c.constructionStack.push(a);var d = c.constructor;try {
            try {
              if (new d() !== a) throw Error("The custom element constructor did not produce the element being upgraded.");
            } finally {
              c.constructionStack.pop();
            }
          } catch (m) {
            throw a.__CE_state = 2, m;
          }a.__CE_state = 1;a.__CE_definition = c;if (c.attributeChangedCallback) for (c = c.observedAttributes, d = 0; d < c.length; d++) {
            var e = c[d],
                f = a.getAttribute(e);null !== f && b.attributeChangedCallback(a, e, null, f, null);
          }p(a) && b.connectedCallback(a);
        }
      }
    }v.prototype.connectedCallback = function (b) {
      var a = b.__CE_definition;a.connectedCallback && a.connectedCallback.call(b);
    };v.prototype.disconnectedCallback = function (b) {
      var a = b.__CE_definition;a.disconnectedCallback && a.disconnectedCallback.call(b);
    };
    v.prototype.attributeChangedCallback = function (b, a, c, d, e) {
      var f = b.__CE_definition;f.attributeChangedCallback && -1 < f.observedAttributes.indexOf(a) && f.attributeChangedCallback.call(b, a, c, d, e);
    };function D(b, a) {
      this.c = b;this.a = a;this.b = void 0;C(this.c, this.a);"loading" === this.a.readyState && (this.b = new MutationObserver(this.f.bind(this)), this.b.observe(this.a, { childList: !0, subtree: !0 }));
    }function E(b) {
      b.b && b.b.disconnect();
    }D.prototype.f = function (b) {
      var a = this.a.readyState;"interactive" !== a && "complete" !== a || E(this);for (a = 0; a < b.length; a++) for (var c = b[a].addedNodes, d = 0; d < c.length; d++) C(this.c, c[d]);
    };function ca() {
      var b = this;this.b = this.a = void 0;this.f = new Promise(function (a) {
        b.b = a;b.a && a(b.a);
      });
    }function F(b) {
      if (b.a) throw Error("Already resolved.");b.a = void 0;b.b && b.b(void 0);
    };function G(b) {
      this.i = !1;this.c = b;this.m = new Map();this.j = function (b) {
        return b();
      };this.g = !1;this.l = [];this.u = new D(b, document);
    }
    G.prototype.define = function (b, a) {
      var c = this;if (!(a instanceof Function)) throw new TypeError("Custom element constructors must be functions.");if (!n(b)) throw new SyntaxError("The element name '" + b + "' is not valid.");if (this.c.a.get(b)) throw Error("A custom element with name '" + b + "' has already been defined.");if (this.i) throw Error("A custom element is already being defined.");this.i = !0;var d, e, f, m, l;try {
        var g = function (b) {
          var a = k[b];if (void 0 !== a && !(a instanceof Function)) throw Error("The '" + b + "' callback must be a function.");
          return a;
        },
            k = a.prototype;if (!(k instanceof Object)) throw new TypeError("The custom element constructor's prototype is not an object.");d = g("connectedCallback");e = g("disconnectedCallback");f = g("adoptedCallback");m = g("attributeChangedCallback");l = a.observedAttributes || [];
      } catch (r) {
        return;
      } finally {
        this.i = !1;
      }a = { localName: b, constructor: a, connectedCallback: d, disconnectedCallback: e, adoptedCallback: f, attributeChangedCallback: m, observedAttributes: l, constructionStack: [] };ba(this.c, b, a);this.l.push(a);this.g || (this.g = !0, this.j(function () {
        return da(c);
      }));
    };function da(b) {
      if (!1 !== b.g) {
        b.g = !1;for (var a = b.l, c = [], d = new Map(), e = 0; e < a.length; e++) d.set(a[e].localName, []);C(b.c, document, { s: function (a) {
            if (void 0 === a.__CE_state) {
              var e = a.localName,
                  f = d.get(e);f ? f.push(a) : b.c.a.get(e) && c.push(a);
            }
          } });for (e = 0; e < c.length; e++) A(b.c, c[e]);for (; 0 < a.length;) {
          for (var f = a.shift(), e = f.localName, f = d.get(f.localName), m = 0; m < f.length; m++) A(b.c, f[m]);(e = b.m.get(e)) && F(e);
        }
      }
    }G.prototype.get = function (b) {
      if (b = this.c.a.get(b)) return b.constructor;
    };
    G.prototype.whenDefined = function (b) {
      if (!n(b)) return Promise.reject(new SyntaxError("'" + b + "' is not a valid custom element name."));var a = this.m.get(b);if (a) return a.f;a = new ca();this.m.set(b, a);this.c.a.get(b) && !this.l.some(function (a) {
        return a.localName === b;
      }) && F(a);return a.f;
    };G.prototype.v = function (b) {
      E(this.u);var a = this.j;this.j = function (c) {
        return b(function () {
          return a(c);
        });
      };
    };window.CustomElementRegistry = G;G.prototype.define = G.prototype.define;G.prototype.get = G.prototype.get;
    G.prototype.whenDefined = G.prototype.whenDefined;G.prototype.polyfillWrapFlushCallback = G.prototype.v;var H = window.Document.prototype.createElement,
        ea = window.Document.prototype.createElementNS,
        fa = window.Document.prototype.importNode,
        ga = window.Document.prototype.prepend,
        ha = window.Document.prototype.append,
        ia = window.DocumentFragment.prototype.prepend,
        ja = window.DocumentFragment.prototype.append,
        I = window.Node.prototype.cloneNode,
        J = window.Node.prototype.appendChild,
        K = window.Node.prototype.insertBefore,
        L = window.Node.prototype.removeChild,
        M = window.Node.prototype.replaceChild,
        N = Object.getOwnPropertyDescriptor(window.Node.prototype, "textContent"),
        O = window.Element.prototype.attachShadow,
        P = Object.getOwnPropertyDescriptor(window.Element.prototype, "innerHTML"),
        Q = window.Element.prototype.getAttribute,
        R = window.Element.prototype.setAttribute,
        S = window.Element.prototype.removeAttribute,
        T = window.Element.prototype.getAttributeNS,
        U = window.Element.prototype.setAttributeNS,
        ka = window.Element.prototype.removeAttributeNS,
        la = window.Element.prototype.insertAdjacentElement,
        ma = window.Element.prototype.prepend,
        na = window.Element.prototype.append,
        V = window.Element.prototype.before,
        oa = window.Element.prototype.after,
        pa = window.Element.prototype.replaceWith,
        qa = window.Element.prototype.remove,
        ra = window.HTMLElement,
        W = Object.getOwnPropertyDescriptor(window.HTMLElement.prototype, "innerHTML"),
        sa = window.HTMLElement.prototype.insertAdjacentElement;function ta() {
      var b = X;window.HTMLElement = function () {
        function a() {
          var a = this.constructor,
              d = b.o.get(a);if (!d) throw Error("The custom element being constructed was not registered with `customElements`.");var e = d.constructionStack;if (!e.length) return e = H.call(document, d.localName), Object.setPrototypeOf(e, a.prototype), e.__CE_state = 1, e.__CE_definition = d, y(b, e), e;var d = e.length - 1,
              f = e[d];if (f === h) throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
          e[d] = h;Object.setPrototypeOf(f, a.prototype);y(b, f);return f;
        }a.prototype = ra.prototype;return a;
      }();
    };function Y(b, a, c) {
      function d(a) {
        return function (d) {
          for (var c = [], e = 0; e < arguments.length; ++e) c[e - 0] = arguments[e];for (var e = [], f = [], k = 0; k < c.length; k++) {
            var r = c[k];r instanceof Element && p(r) && f.push(r);if (r instanceof DocumentFragment) for (r = r.firstChild; r; r = r.nextSibling) e.push(r);else e.push(r);
          }a.apply(this, c);for (c = 0; c < f.length; c++) B(b, f[c]);if (p(this)) for (c = 0; c < e.length; c++) f = e[c], f instanceof Element && z(b, f);
        };
      }c.h && (a.prepend = d(c.h));c.append && (a.append = d(c.append));
    };function ua() {
      var b = X;u(Document.prototype, "createElement", function (a) {
        if (this.__CE_hasRegistry) {
          var c = b.a.get(a);if (c) return new c.constructor();
        }a = H.call(this, a);y(b, a);return a;
      });u(Document.prototype, "importNode", function (a, c) {
        a = fa.call(this, a, c);this.__CE_hasRegistry ? C(b, a) : x(b, a);return a;
      });u(Document.prototype, "createElementNS", function (a, c) {
        if (this.__CE_hasRegistry && (null === a || "http://www.w3.org/1999/xhtml" === a)) {
          var d = b.a.get(c);if (d) return new d.constructor();
        }a = ea.call(this, a, c);y(b, a);return a;
      });
      Y(b, Document.prototype, { h: ga, append: ha });
    };function va() {
      var b = X;function a(a, d) {
        Object.defineProperty(a, "textContent", { enumerable: d.enumerable, configurable: !0, get: d.get, set: function (a) {
            if (this.nodeType === Node.TEXT_NODE) d.set.call(this, a);else {
              var c = void 0;if (this.firstChild) {
                var e = this.childNodes,
                    l = e.length;if (0 < l && p(this)) for (var c = Array(l), g = 0; g < l; g++) c[g] = e[g];
              }d.set.call(this, a);if (c) for (a = 0; a < c.length; a++) B(b, c[a]);
            }
          } });
      }u(Node.prototype, "insertBefore", function (a, d) {
        if (a instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(a.childNodes);
          a = K.call(this, a, d);if (p(this)) for (d = 0; d < c.length; d++) z(b, c[d]);return a;
        }c = p(a);d = K.call(this, a, d);c && B(b, a);p(this) && z(b, a);return d;
      });u(Node.prototype, "appendChild", function (a) {
        if (a instanceof DocumentFragment) {
          var c = Array.prototype.slice.apply(a.childNodes);a = J.call(this, a);if (p(this)) for (var e = 0; e < c.length; e++) z(b, c[e]);return a;
        }c = p(a);e = J.call(this, a);c && B(b, a);p(this) && z(b, a);return e;
      });u(Node.prototype, "cloneNode", function (a) {
        a = I.call(this, a);this.ownerDocument.__CE_hasRegistry ? C(b, a) : x(b, a);
        return a;
      });u(Node.prototype, "removeChild", function (a) {
        var c = p(a),
            e = L.call(this, a);c && B(b, a);return e;
      });u(Node.prototype, "replaceChild", function (a, d) {
        if (a instanceof DocumentFragment) {
          var e = Array.prototype.slice.apply(a.childNodes);a = M.call(this, a, d);if (p(this)) for (B(b, d), d = 0; d < e.length; d++) z(b, e[d]);return a;
        }var e = p(a),
            c = M.call(this, a, d),
            m = p(this);m && B(b, d);e && B(b, a);m && z(b, a);return c;
      });N && N.get ? a(Node.prototype, N) : w(b, function (b) {
        a(b, { enumerable: !0, configurable: !0, get: function () {
            for (var a = [], b = 0; b < this.childNodes.length; b++) a.push(this.childNodes[b].textContent);return a.join("");
          }, set: function (a) {
            for (; this.firstChild;) L.call(this, this.firstChild);J.call(this, document.createTextNode(a));
          } });
      });
    };function wa(b) {
      var a = Element.prototype;function c(a) {
        return function (c) {
          for (var d = [], e = 0; e < arguments.length; ++e) d[e - 0] = arguments[e];for (var e = [], l = [], g = 0; g < d.length; g++) {
            var k = d[g];k instanceof Element && p(k) && l.push(k);if (k instanceof DocumentFragment) for (k = k.firstChild; k; k = k.nextSibling) e.push(k);else e.push(k);
          }a.apply(this, d);for (d = 0; d < l.length; d++) B(b, l[d]);if (p(this)) for (d = 0; d < e.length; d++) l = e[d], l instanceof Element && z(b, l);
        };
      }V && (a.before = c(V));V && (a.after = c(oa));pa && u(a, "replaceWith", function (a) {
        for (var d = [], c = 0; c < arguments.length; ++c) d[c - 0] = arguments[c];for (var c = [], m = [], l = 0; l < d.length; l++) {
          var g = d[l];g instanceof Element && p(g) && m.push(g);if (g instanceof DocumentFragment) for (g = g.firstChild; g; g = g.nextSibling) c.push(g);else c.push(g);
        }l = p(this);pa.apply(this, d);for (d = 0; d < m.length; d++) B(b, m[d]);if (l) for (B(b, this), d = 0; d < c.length; d++) m = c[d], m instanceof Element && z(b, m);
      });qa && u(a, "remove", function () {
        var a = p(this);qa.call(this);a && B(b, this);
      });
    };function xa() {
      var b = X;function a(a, c) {
        Object.defineProperty(a, "innerHTML", { enumerable: c.enumerable, configurable: !0, get: c.get, set: function (a) {
            var d = this,
                e = void 0;p(this) && (e = [], t(this, function (a) {
              a !== d && e.push(a);
            }));c.set.call(this, a);if (e) for (var f = 0; f < e.length; f++) {
              var k = e[f];1 === k.__CE_state && b.disconnectedCallback(k);
            }this.ownerDocument.__CE_hasRegistry ? C(b, this) : x(b, this);return a;
          } });
      }function c(a, c) {
        u(a, "insertAdjacentElement", function (a, d) {
          var e = p(d);a = c.call(this, a, d);e && B(b, d);p(a) && z(b, d);
          return a;
        });
      }O && u(Element.prototype, "attachShadow", function (a) {
        return this.__CE_shadowRoot = a = O.call(this, a);
      });P && P.get ? a(Element.prototype, P) : W && W.get ? a(HTMLElement.prototype, W) : w(b, function (b) {
        a(b, { enumerable: !0, configurable: !0, get: function () {
            return I.call(this, !0).innerHTML;
          }, set: function (a) {
            var b = "template" === this.localName,
                d = b ? this.content : this,
                c = H.call(document, this.localName);for (c.innerHTML = a; 0 < d.childNodes.length;) L.call(d, d.childNodes[0]);for (a = b ? c.content : c; 0 < a.childNodes.length;) J.call(d, a.childNodes[0]);
          } });
      });u(Element.prototype, "setAttribute", function (a, c) {
        if (1 !== this.__CE_state) return R.call(this, a, c);var d = Q.call(this, a);R.call(this, a, c);c = Q.call(this, a);b.attributeChangedCallback(this, a, d, c, null);
      });u(Element.prototype, "setAttributeNS", function (a, c, f) {
        if (1 !== this.__CE_state) return U.call(this, a, c, f);var d = T.call(this, a, c);U.call(this, a, c, f);f = T.call(this, a, c);b.attributeChangedCallback(this, c, d, f, a);
      });u(Element.prototype, "removeAttribute", function (a) {
        if (1 !== this.__CE_state) return S.call(this, a);var c = Q.call(this, a);S.call(this, a);null !== c && b.attributeChangedCallback(this, a, c, null, null);
      });u(Element.prototype, "removeAttributeNS", function (a, c) {
        if (1 !== this.__CE_state) return ka.call(this, a, c);var d = T.call(this, a, c);ka.call(this, a, c);var e = T.call(this, a, c);d !== e && b.attributeChangedCallback(this, c, d, e, a);
      });sa ? c(HTMLElement.prototype, sa) : la ? c(Element.prototype, la) : console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");Y(b, Element.prototype, { h: ma, append: na });wa(b);
    }; /*
       Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
       This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
       The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
       The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
       Code distributed by Google as part of the polymer project is also
       subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
       */
    var Z = window.customElements;if (!Z || Z.forcePolyfill || "function" != typeof Z.define || "function" != typeof Z.get) {
      var X = new v();ta();ua();Y(X, DocumentFragment.prototype, { h: ia, append: ja });va();xa();document.__CE_hasRegistry = !0;var customElements = new G(X);Object.defineProperty(window, "customElements", { configurable: !0, enumerable: !0, value: customElements });
    };
  }).call(self);

  //# sourceMappingURL=custom-elements.min.js.map

  /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function (global) {
    (function () {
      /*
      Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      'use strict';

      var aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
        a != Array.prototype && a != Object.prototype && (a[b] = c.value);
      },
          n = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;function ba() {
        ba = function () {};n.Symbol || (n.Symbol = ca);
      }var ca = function () {
        var a = 0;return function (b) {
          return "jscomp_symbol_" + (b || "") + a++;
        };
      }();
      function p() {
        ba();var a = n.Symbol.iterator;a || (a = n.Symbol.iterator = n.Symbol("iterator"));"function" != typeof Array.prototype[a] && aa(Array.prototype, a, { configurable: !0, writable: !0, value: function () {
            return da(this);
          } });p = function () {};
      }function da(a) {
        var b = 0;return ea(function () {
          return b < a.length ? { done: !1, value: a[b++] } : { done: !0 };
        });
      }function ea(a) {
        p();a = { next: a };a[n.Symbol.iterator] = function () {
          return this;
        };return a;
      }function fa(a) {
        p();var b = a[Symbol.iterator];return b ? b.call(a) : da(a);
      }
      function ha(a) {
        for (var b, c = []; !(b = a.next()).done;) c.push(b.value);return c;
      }function r(a, b) {
        return { index: a, j: [], m: b };
      }
      function ia(a, b, c, d) {
        var e = 0,
            f = 0,
            h = 0,
            g = 0,
            l = Math.min(b - e, d - f);if (0 == e && 0 == f) a: {
          for (h = 0; h < l; h++) if (a[h] !== c[h]) break a;h = l;
        }if (b == a.length && d == c.length) {
          g = a.length;for (var k = c.length, m = 0; m < l - h && ja(a[--g], c[--k]);) m++;g = m;
        }e += h;f += h;b -= g;d -= g;if (0 == b - e && 0 == d - f) return [];if (e == b) {
          for (b = r(e, 0); f < d;) b.j.push(c[f++]);return [b];
        }if (f == d) return [r(e, b - e)];l = e;h = f;d = d - h + 1;g = b - l + 1;b = Array(d);for (k = 0; k < d; k++) b[k] = Array(g), b[k][0] = k;for (k = 0; k < g; k++) b[0][k] = k;for (k = 1; k < d; k++) for (m = 1; m < g; m++) if (a[l + m - 1] === c[h + k - 1]) b[k][m] = b[k - 1][m - 1];else {
          var q = b[k - 1][m] + 1,
              z = b[k][m - 1] + 1;b[k][m] = q < z ? q : z;
        }l = b.length - 1;h = b[0].length - 1;d = b[l][h];for (a = []; 0 < l || 0 < h;) 0 == l ? (a.push(2), h--) : 0 == h ? (a.push(3), l--) : (g = b[l - 1][h - 1], k = b[l - 1][h], m = b[l][h - 1], q = k < m ? k < g ? k : g : m < g ? m : g, q == g ? (g == d ? a.push(0) : (a.push(1), d = g), l--, h--) : q == k ? (a.push(3), l--, d = k) : (a.push(2), h--, d = m));a.reverse();b = void 0;l = [];for (h = 0; h < a.length; h++) switch (a[h]) {case 0:
            b && (l.push(b), b = void 0);e++;f++;break;case 1:
            b || (b = r(e, 0));b.m++;e++;b.j.push(c[f]);f++;break;case 2:
            b || (b = r(e, 0));
            b.m++;e++;break;case 3:
            b || (b = r(e, 0)), b.j.push(c[f]), f++;}b && l.push(b);return l;
      }function ja(a, b) {
        return a === b;
      };var t = window.ShadyDOM || {};t.R = !(!Element.prototype.attachShadow || !Node.prototype.getRootNode);var u = Object.getOwnPropertyDescriptor(Node.prototype, "firstChild");t.h = !!(u && u.configurable && u.get);t.H = t.force || !t.R;function v(a) {
        return a.__shady && void 0 !== a.__shady.firstChild;
      }function w(a) {
        return "ShadyRoot" === a.K;
      }function x(a) {
        a = a.getRootNode();if (w(a)) return a;
      }var y = Element.prototype,
          ka = y.matches || y.matchesSelector || y.mozMatchesSelector || y.msMatchesSelector || y.oMatchesSelector || y.webkitMatchesSelector;
      function A(a, b) {
        if (a && b) for (var c = Object.getOwnPropertyNames(b), d = 0, e; d < c.length && (e = c[d]); d++) {
          var f = Object.getOwnPropertyDescriptor(b, e);f && Object.defineProperty(a, e, f);
        }
      }function B(a, b) {
        for (var c = [], d = 1; d < arguments.length; ++d) c[d - 1] = arguments[d];for (d = 0; d < c.length; d++) A(a, c[d]);return a;
      }function la(a, b) {
        for (var c in b) a[c] = b[c];
      }var C = document.createTextNode(""),
          ma = 0,
          D = [];new MutationObserver(function () {
        for (; D.length;) try {
          D.shift()();
        } catch (a) {
          throw C.textContent = ma++, a;
        }
      }).observe(C, { characterData: !0 });
      function na(a) {
        D.push(a);C.textContent = ma++;
      }var oa = !!document.contains;function pa(a, b) {
        for (; b;) {
          if (b == a) return !0;b = b.parentNode;
        }return !1;
      };var qa = /[&\u00A0"]/g,
          ra = /[&\u00A0<>]/g;function ta(a) {
        switch (a) {case "&":
            return "&amp;";case "<":
            return "&lt;";case ">":
            return "&gt;";case '"':
            return "&quot;";case "\u00a0":
            return "&nbsp;";}
      }function ua(a) {
        for (var b = {}, c = 0; c < a.length; c++) b[a[c]] = !0;return b;
      }var va = ua("area base br col command embed hr img input keygen link meta param source track wbr".split(" ")),
          wa = ua("style script xmp iframe noembed noframes plaintext noscript".split(" "));
      function E(a, b) {
        "template" === a.localName && (a = a.content);for (var c = "", d = b ? b(a) : a.childNodes, e = 0, f = d.length, h; e < f && (h = d[e]); e++) {
          a: {
            var g = h;var l = a;var k = b;switch (g.nodeType) {case Node.ELEMENT_NODE:
                for (var m = g.localName, q = "<" + m, z = g.attributes, sa = 0; l = z[sa]; sa++) q += " " + l.name + '="' + l.value.replace(qa, ta) + '"';q += ">";g = va[m] ? q : q + E(g, k) + "</" + m + ">";break a;case Node.TEXT_NODE:
                g = g.data;g = l && wa[l.localName] ? g : g.replace(ra, ta);break a;case Node.COMMENT_NODE:
                g = "\x3c!--" + g.data + "--\x3e";break a;default:
                throw window.console.error(g), Error("not implemented");}
          }c += g;
        }return c;
      };var F = {},
          G = document.createTreeWalker(document, NodeFilter.SHOW_ALL, null, !1),
          H = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null, !1);function xa(a) {
        var b = [];G.currentNode = a;for (a = G.firstChild(); a;) b.push(a), a = G.nextSibling();return b;
      }F.parentNode = function (a) {
        G.currentNode = a;return G.parentNode();
      };F.firstChild = function (a) {
        G.currentNode = a;return G.firstChild();
      };F.lastChild = function (a) {
        G.currentNode = a;return G.lastChild();
      };F.previousSibling = function (a) {
        G.currentNode = a;return G.previousSibling();
      };
      F.nextSibling = function (a) {
        G.currentNode = a;return G.nextSibling();
      };F.childNodes = xa;F.parentElement = function (a) {
        H.currentNode = a;return H.parentNode();
      };F.firstElementChild = function (a) {
        H.currentNode = a;return H.firstChild();
      };F.lastElementChild = function (a) {
        H.currentNode = a;return H.lastChild();
      };F.previousElementSibling = function (a) {
        H.currentNode = a;return H.previousSibling();
      };F.nextElementSibling = function (a) {
        H.currentNode = a;return H.nextSibling();
      };
      F.children = function (a) {
        var b = [];H.currentNode = a;for (a = H.firstChild(); a;) b.push(a), a = H.nextSibling();return b;
      };F.innerHTML = function (a) {
        return E(a, function (a) {
          return xa(a);
        });
      };F.textContent = function (a) {
        switch (a.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
            a = document.createTreeWalker(a, NodeFilter.SHOW_TEXT, null, !1);for (var b = "", c; c = a.nextNode();) b += c.nodeValue;return b;default:
            return a.nodeValue;}
      };var I = {},
          ya = Element.prototype.insertBefore,
          za = Element.prototype.removeChild,
          Aa = Element.prototype.setAttribute,
          Ba = Element.prototype.removeAttribute,
          Ca = Element.prototype.cloneNode,
          Da = Document.prototype.importNode,
          Ea = Element.prototype.addEventListener,
          Fa = Element.prototype.removeEventListener,
          Ga = Window.prototype.addEventListener,
          Ha = Window.prototype.removeEventListener,
          Ia = Element.prototype.dispatchEvent,
          Ja = Element.prototype.querySelector,
          Ka = Element.prototype.querySelectorAll,
          La = Node.prototype.contains || HTMLElement.prototype.contains;I.appendChild = Element.prototype.appendChild;I.insertBefore = ya;I.removeChild = za;I.setAttribute = Aa;I.removeAttribute = Ba;I.cloneNode = Ca;I.importNode = Da;I.addEventListener = Ea;I.removeEventListener = Fa;I.T = Ga;I.U = Ha;I.dispatchEvent = Ia;I.querySelector = Ja;I.querySelectorAll = Ka;I.contains = La;var J = Object.getOwnPropertyDescriptor(Element.prototype, "innerHTML") || Object.getOwnPropertyDescriptor(HTMLElement.prototype, "innerHTML"),
          K = document.implementation.createHTMLDocument("inert").createElement("div"),
          L = Object.getOwnPropertyDescriptor(Document.prototype, "activeElement"),
          Ma = { parentElement: { get: function () {
            var a = this.__shady && this.__shady.parentNode;a && a.nodeType !== Node.ELEMENT_NODE && (a = null);return void 0 !== a ? a : F.parentElement(this);
          }, configurable: !0 }, parentNode: { get: function () {
            var a = this.__shady && this.__shady.parentNode;return void 0 !== a ? a : F.parentNode(this);
          }, configurable: !0 }, nextSibling: { get: function () {
            var a = this.__shady && this.__shady.nextSibling;return void 0 !== a ? a : F.nextSibling(this);
          }, configurable: !0 }, previousSibling: { get: function () {
            var a = this.__shady && this.__shady.previousSibling;return void 0 !== a ? a : F.previousSibling(this);
          }, configurable: !0 }, className: { get: function () {
            return this.getAttribute("class") || "";
          }, set: function (a) {
            this.setAttribute("class", a);
          }, configurable: !0 }, nextElementSibling: { get: function () {
            if (this.__shady && void 0 !== this.__shady.nextSibling) {
              for (var a = this.nextSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling;return a;
            }return F.nextElementSibling(this);
          }, configurable: !0 }, previousElementSibling: { get: function () {
            if (this.__shady && void 0 !== this.__shady.previousSibling) {
              for (var a = this.previousSibling; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.previousSibling;return a;
            }return F.previousElementSibling(this);
          }, configurable: !0 } },
          M = { childNodes: { get: function () {
            if (v(this)) {
              if (!this.__shady.childNodes) {
                this.__shady.childNodes = [];for (var a = this.firstChild; a; a = a.nextSibling) this.__shady.childNodes.push(a);
              }var b = this.__shady.childNodes;
            } else b = F.childNodes(this);b.item = function (a) {
              return b[a];
            };return b;
          }, configurable: !0 }, childElementCount: { get: function () {
            return this.children.length;
          }, configurable: !0 }, firstChild: { get: function () {
            var a = this.__shady && this.__shady.firstChild;return void 0 !== a ? a : F.firstChild(this);
          }, configurable: !0 }, lastChild: { get: function () {
            var a = this.__shady && this.__shady.lastChild;return void 0 !== a ? a : F.lastChild(this);
          },
          configurable: !0 }, textContent: { get: function () {
            if (v(this)) {
              for (var a = [], b = 0, c = this.childNodes, d; d = c[b]; b++) d.nodeType !== Node.COMMENT_NODE && a.push(d.textContent);return a.join("");
            }return F.textContent(this);
          }, set: function (a) {
            switch (this.nodeType) {case Node.ELEMENT_NODE:case Node.DOCUMENT_FRAGMENT_NODE:
                for (; this.firstChild;) this.removeChild(this.firstChild);(0 < a.length || this.nodeType === Node.ELEMENT_NODE) && this.appendChild(document.createTextNode(a));break;default:
                this.nodeValue = a;}
          }, configurable: !0 }, firstElementChild: { get: function () {
            if (this.__shady && void 0 !== this.__shady.firstChild) {
              for (var a = this.firstChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.nextSibling;return a;
            }return F.firstElementChild(this);
          }, configurable: !0 }, lastElementChild: { get: function () {
            if (this.__shady && void 0 !== this.__shady.lastChild) {
              for (var a = this.lastChild; a && a.nodeType !== Node.ELEMENT_NODE;) a = a.previousSibling;return a;
            }return F.lastElementChild(this);
          }, configurable: !0 }, children: { get: function () {
            var a;v(this) ? a = Array.prototype.filter.call(this.childNodes, function (a) {
              return a.nodeType === Node.ELEMENT_NODE;
            }) : a = F.children(this);a.item = function (b) {
              return a[b];
            };return a;
          }, configurable: !0 }, innerHTML: { get: function () {
            var a = "template" === this.localName ? this.content : this;return v(this) ? E(a) : F.innerHTML(a);
          }, set: function (a) {
            for (var b = "template" === this.localName ? this.content : this; b.firstChild;) b.removeChild(b.firstChild);for (J && J.set ? J.set.call(K, a) : K.innerHTML = a; K.firstChild;) b.appendChild(K.firstChild);
          }, configurable: !0 } },
          Na = { shadowRoot: { get: function () {
            return this.__shady && this.__shady.S || null;
          },
          configurable: !0 } },
          N = { activeElement: { get: function () {
            var a = L && L.get ? L.get.call(document) : t.h ? void 0 : document.activeElement;if (a && a.nodeType) {
              var b = !!w(this);if (this === document || b && this.host !== a && I.contains.call(this.host, a)) {
                for (b = x(a); b && b !== this;) a = b.host, b = x(a);a = this === document ? b ? null : a : b === this ? a : null;
              } else a = null;
            } else a = null;return a;
          }, set: function () {}, configurable: !0 } };
      function O(a, b, c) {
        for (var d in b) {
          var e = Object.getOwnPropertyDescriptor(a, d);e && e.configurable || !e && c ? Object.defineProperty(a, d, b[d]) : c && console.warn("Could not define", d, "on", a);
        }
      }function P(a) {
        O(a, Ma);O(a, M);O(a, N);
      }var Oa = t.h ? function () {} : function (a) {
        a.__shady && a.__shady.L || (a.__shady = a.__shady || {}, a.__shady.L = !0, O(a, Ma, !0));
      },
          Pa = t.h ? function () {} : function (a) {
        a.__shady && a.__shady.J || (a.__shady = a.__shady || {}, a.__shady.J = !0, O(a, M, !0), O(a, Na, !0));
      };function Qa(a, b, c) {
        Oa(a);c = c || null;a.__shady = a.__shady || {};b.__shady = b.__shady || {};c && (c.__shady = c.__shady || {});a.__shady.previousSibling = c ? c.__shady.previousSibling : b.lastChild;var d = a.__shady.previousSibling;d && d.__shady && (d.__shady.nextSibling = a);(d = a.__shady.nextSibling = c) && d.__shady && (d.__shady.previousSibling = a);a.__shady.parentNode = b;c ? c === b.__shady.firstChild && (b.__shady.firstChild = a) : (b.__shady.lastChild = a, b.__shady.firstChild || (b.__shady.firstChild = a));b.__shady.childNodes = null;
      }
      function Q(a) {
        if (!a.__shady || void 0 === a.__shady.firstChild) {
          a.__shady = a.__shady || {};a.__shady.firstChild = F.firstChild(a);a.__shady.lastChild = F.lastChild(a);Pa(a);for (var b = a.__shady.childNodes = F.childNodes(a), c = 0, d; c < b.length && (d = b[c]); c++) d.__shady = d.__shady || {}, d.__shady.parentNode = a, d.__shady.nextSibling = b[c + 1] || null, d.__shady.previousSibling = b[c - 1] || null, Oa(d);
        }
      };function R(a, b, c) {
        if (b === a) throw Error("Failed to execute 'appendChild' on 'Node': The new child element contains the parent.");if (c) {
          var d = c.__shady && c.__shady.parentNode;if (void 0 !== d && d !== a || void 0 === d && F.parentNode(c) !== a) throw Error("Failed to execute 'insertBefore' on 'Node': The node before which the new node is to be inserted is not a child of this node.");
        }if (c === b) return b;b.parentNode && Ra(b.parentNode, b);d = x(a);var e;if (e = d) a: {
          if (!b.__noInsertionPoint) {
            var f;"slot" === b.localName ? f = [b] : b.querySelectorAll && (f = b.querySelectorAll("slot"));if (f && f.length) {
              e = f;break a;
            }
          }e = void 0;
        }(f = e) && d.f.push.apply(d.f, [].concat(f instanceof Array ? f : ha(fa(f))));d && ("slot" === a.localName || f) && S(d);if (v(a)) {
          d = c;Pa(a);a.__shady = a.__shady || {};void 0 !== a.__shady.firstChild && (a.__shady.childNodes = null);if (b.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
            f = b.childNodes;for (e = 0; e < f.length; e++) Qa(f[e], a, d);b.__shady = b.__shady || {};d = void 0 !== b.__shady.firstChild ? null : void 0;b.__shady.firstChild = b.__shady.lastChild = d;
            b.__shady.childNodes = d;
          } else Qa(b, a, d);if (Sa(a)) {
            S(a.__shady.root);var h = !0;
          } else a.__shady.root && (h = !0);
        }h || (h = w(a) ? a.host : a, c ? (c = Ta(c), I.insertBefore.call(h, b, c)) : I.appendChild.call(h, b));Ua(a, b);return b;
      }
      function Ra(a, b) {
        if (b.parentNode !== a) throw Error("The node to be removed is not a child of this node: " + b);var c = x(b);if (v(a)) {
          b.__shady = b.__shady || {};a.__shady = a.__shady || {};b === a.__shady.firstChild && (a.__shady.firstChild = b.__shady.nextSibling);b === a.__shady.lastChild && (a.__shady.lastChild = b.__shady.previousSibling);var d = b.__shady.previousSibling,
              e = b.__shady.nextSibling;d && (d.__shady = d.__shady || {}, d.__shady.nextSibling = e);e && (e.__shady = e.__shady || {}, e.__shady.previousSibling = d);b.__shady.parentNode = b.__shady.previousSibling = b.__shady.nextSibling = void 0;void 0 !== a.__shady.childNodes && (a.__shady.childNodes = null);if (Sa(a)) {
            S(a.__shady.root);var f = !0;
          }
        }Va(b);if (c) {
          (d = a && "slot" === a.localName) && (f = !0);Wa(c);e = c.a;for (var h in e) for (var g = e[h], l = 0; l < g.length; l++) {
            var k = g[l];if (pa(b, k)) {
              g.splice(l, 1);var m = c.b.indexOf(k);0 <= m && c.b.splice(m, 1);l--;if (m = k.__shady.g) for (k = 0; k < m.length; k++) {
                var q = m[k],
                    z = F.parentNode(q);z && I.removeChild.call(z, q);
              }m = !0;
            }
          }(m || d) && S(c);
        }f || (f = w(a) ? a.host : a, (!a.__shady.root && "slot" !== b.localName || f === F.parentNode(b)) && I.removeChild.call(f, b));Ua(a, null, b);return b;
      }function Va(a) {
        if (a.__shady && void 0 !== a.__shady.B) for (var b = a.childNodes, c = 0, d = b.length, e; c < d && (e = b[c]); c++) Va(e);a.__shady && (a.__shady.B = void 0);
      }function Ta(a) {
        var b = a;a && "slot" === a.localName && (b = (b = a.__shady && a.__shady.g) && b.length ? b[0] : Ta(a.nextSibling));return b;
      }function Sa(a) {
        return (a = a && a.__shady && a.__shady.root) && Xa(a);
      }
      function Ya(a, b) {
        if ("slot" === b) a = a.parentNode, Sa(a) && S(a.__shady.root);else if ("slot" === a.localName && "name" === b && (b = x(a))) {
          var c = a.M,
              d = Za(a);if (d !== c) {
            c = b.a[c];var e = c.indexOf(a);0 <= e && c.splice(e, 1);c = b.a[d] || (b.a[d] = []);c.push(a);1 < c.length && (b.a[d] = $a(c));
          }S(b);
        }
      }function Ua(a, b, c) {
        if (a = a.__shady && a.__shady.i) b && a.addedNodes.push(b), c && a.removedNodes.push(c), ab(a);
      }
      function bb(a) {
        if (a && a.nodeType) {
          a.__shady = a.__shady || {};var b = a.__shady.B;void 0 === b && (w(a) ? b = a : b = (b = a.parentNode) ? bb(b) : a, I.contains.call(document.documentElement, a) && (a.__shady.B = b));return b;
        }
      }function T(a, b, c) {
        var d = [];cb(a.childNodes, b, c, d);return d;
      }function cb(a, b, c, d) {
        for (var e = 0, f = a.length, h; e < f && (h = a[e]); e++) {
          var g;if (g = h.nodeType === Node.ELEMENT_NODE) {
            g = h;var l = b,
                k = c,
                m = d,
                q = l(g);q && m.push(g);k && k(q) ? g = q : (cb(g.childNodes, l, k, m), g = void 0);
          }if (g) break;
        }
      }var U = null;
      function db(a, b, c) {
        U || (U = window.ShadyCSS && window.ShadyCSS.ScopingShim);U && "class" === b ? U.setElementClass(a, c) : (I.setAttribute.call(a, b, c), Ya(a, b));
      }function eb(a, b) {
        if (a.ownerDocument !== document) return I.importNode.call(document, a, b);var c = I.importNode.call(document, a, !1);if (b) {
          a = a.childNodes;b = 0;for (var d; b < a.length; b++) d = eb(a[b], !0), c.appendChild(d);
        }return c;
      };var V = [],
          fb;function gb(a) {
        fb || (fb = !0, na(W));V.push(a);
      }function W() {
        fb = !1;for (var a = !!V.length; V.length;) V.shift()();return a;
      }W.list = V;var hb = {};function X(a, b, c) {
        if (a !== hb) throw new TypeError("Illegal constructor");a = document.createDocumentFragment();a.__proto__ = X.prototype;a.K = "ShadyRoot";Q(b);Q(a);a.host = b;a.c = c && c.mode;b.__shady = b.__shady || {};b.__shady.root = a;b.__shady.S = "closed" !== a.c ? a : null;a.l = !1;a.b = [];a.a = {};a.f = [];c = F.childNodes(b);for (var d = 0, e = c.length; d < e; d++) I.removeChild.call(b, c[d]);return a;
      }X.prototype = Object.create(DocumentFragment.prototype);function S(a) {
        a.l || (a.l = !0, gb(function () {
          return ib(a);
        }));
      }
      function ib(a) {
        for (var b; a;) {
          a.l && (b = a);a: {
            var c = a;a = c.host.getRootNode();if (w(a)) for (var d = c.host.childNodes, e = 0; e < d.length; e++) if (c = d[e], "slot" == c.localName) break a;a = void 0;
          }
        }b && b._renderRoot();
      }
      X.prototype._renderRoot = function () {
        this.l = !1;Wa(this);for (var a = 0, b; a < this.b.length; a++) {
          b = this.b[a];var c = b.__shady.assignedNodes;b.__shady.assignedNodes = [];b.__shady.g = [];if (b.__shady.G = c) for (var d = 0; d < c.length; d++) {
            var e = c[d];e.__shady.w = e.__shady.assignedSlot;e.__shady.assignedSlot === b && (e.__shady.assignedSlot = null);
          }
        }for (b = this.host.firstChild; b; b = b.nextSibling) jb(this, b);for (a = 0; a < this.b.length; a++) {
          b = this.b[a];if (!b.__shady.assignedNodes.length) for (c = b.firstChild; c; c = c.nextSibling) jb(this, c, b);c = b.parentNode;(c = c.__shady && c.__shady.root) && Xa(c) && c._renderRoot();kb(this, b.__shady.g, b.__shady.assignedNodes);if (c = b.__shady.G) {
            for (d = 0; d < c.length; d++) c[d].__shady.w = null;b.__shady.G = null;c.length > b.__shady.assignedNodes.length && (b.__shady.A = !0);
          }b.__shady.A && (b.__shady.A = !1, lb(this, b));
        }a = this.b;b = [];for (c = 0; c < a.length; c++) d = a[c].parentNode, d.__shady && d.__shady.root || !(0 > b.indexOf(d)) || b.push(d);for (a = 0; a < b.length; a++) {
          c = b[a];d = c === this ? this.host : c;e = [];c = c.childNodes;for (var f = 0; f < c.length; f++) {
            var h = c[f];if ("slot" == h.localName) {
              h = h.__shady.g;for (var g = 0; g < h.length; g++) e.push(h[g]);
            } else e.push(h);
          }c = void 0;f = F.childNodes(d);h = ia(e, e.length, f, f.length);for (var l = g = 0; g < h.length && (c = h[g]); g++) {
            for (var k = 0, m; k < c.j.length && (m = c.j[k]); k++) F.parentNode(m) === d && I.removeChild.call(d, m), f.splice(c.index + l, 1);l -= c.m;
          }for (l = 0; l < h.length && (c = h[l]); l++) for (g = f[c.index], k = c.index; k < c.index + c.m; k++) m = e[k], I.insertBefore.call(d, m, g), f.splice(k, 0, m);
        }
      };
      function jb(a, b, c) {
        b.__shady = b.__shady || {};var d = b.__shady.w;b.__shady.w = null;c || (c = (a = a.a[b.slot || "__catchall"]) && a[0]);c ? (c.__shady.assignedNodes.push(b), b.__shady.assignedSlot = c) : b.__shady.assignedSlot = void 0;d !== b.__shady.assignedSlot && b.__shady.assignedSlot && (b.__shady.assignedSlot.__shady.A = !0);
      }function kb(a, b, c) {
        for (var d = 0, e; d < c.length && (e = c[d]); d++) if ("slot" == e.localName) {
          var f = e.__shady.assignedNodes;f && f.length && kb(a, b, f);
        } else b.push(c[d]);
      }
      function lb(a, b) {
        I.dispatchEvent.call(b, new Event("slotchange"));b.__shady.assignedSlot && lb(a, b.__shady.assignedSlot);
      }function Wa(a) {
        if (a.f.length) {
          for (var b = a.f, c, d = 0; d < b.length; d++) {
            var e = b[d];e.__shady = e.__shady || {};Q(e);Q(e.parentNode);var f = Za(e);a.a[f] ? (c = c || {}, c[f] = !0, a.a[f].push(e)) : a.a[f] = [e];a.b.push(e);
          }if (c) for (var h in c) a.a[h] = $a(a.a[h]);a.f = [];
        }
      }function Za(a) {
        var b = a.name || a.getAttribute("name") || "__catchall";return a.M = b;
      }
      function $a(a) {
        return a.sort(function (a, c) {
          a = mb(a);for (var b = mb(c), e = 0; e < a.length; e++) {
            c = a[e];var f = b[e];if (c !== f) return a = Array.from(c.parentNode.childNodes), a.indexOf(c) - a.indexOf(f);
          }
        });
      }function mb(a) {
        var b = [];do b.unshift(a); while (a = a.parentNode);return b;
      }function Xa(a) {
        Wa(a);return !!a.b.length;
      }X.prototype.addEventListener = function (a, b, c) {
        "object" !== typeof c && (c = { capture: !!c });c.v = this;this.host.addEventListener(a, b, c);
      };
      X.prototype.removeEventListener = function (a, b, c) {
        "object" !== typeof c && (c = { capture: !!c });c.v = this;this.host.removeEventListener(a, b, c);
      };X.prototype.getElementById = function (a) {
        return T(this, function (b) {
          return b.id == a;
        }, function (a) {
          return !!a;
        })[0] || null;
      };var nb = X.prototype;O(nb, M, !0);O(nb, N, !0);function ob() {
        this.c = !1;this.addedNodes = [];this.removedNodes = [];this.o = new Set();
      }function ab(a) {
        a.c || (a.c = !0, na(function () {
          pb(a);
        }));
      }function pb(a) {
        if (a.c) {
          a.c = !1;var b = a.takeRecords();b.length && a.o.forEach(function (a) {
            a(b);
          });
        }
      }ob.prototype.takeRecords = function () {
        if (this.addedNodes.length || this.removedNodes.length) {
          var a = [{ addedNodes: this.addedNodes, removedNodes: this.removedNodes }];this.addedNodes = [];this.removedNodes = [];return a;
        }return [];
      };
      function qb(a, b) {
        a.__shady = a.__shady || {};a.__shady.i || (a.__shady.i = new ob());a.__shady.i.o.add(b);var c = a.__shady.i;return { N: b, P: c, O: a, takeRecords: function () {
            return c.takeRecords();
          } };
      }function rb(a) {
        var b = a && a.P;b && (b.o.delete(a.N), b.o.size || (a.O.__shady.i = null));
      }
      function sb(a, b) {
        var c = b.getRootNode();return a.map(function (a) {
          var b = c === a.target.getRootNode();if (b && a.addedNodes) {
            if (b = Array.from(a.addedNodes).filter(function (a) {
              return c === a.getRootNode();
            }), b.length) return a = Object.create(a), Object.defineProperty(a, "addedNodes", { value: b, configurable: !0 }), a;
          } else if (b) return a;
        }).filter(function (a) {
          return a;
        });
      };var Y = "__eventWrappers" + Date.now(),
          tb = { blur: !0, focus: !0, focusin: !0, focusout: !0, click: !0, dblclick: !0, mousedown: !0, mouseenter: !0, mouseleave: !0, mousemove: !0, mouseout: !0, mouseover: !0, mouseup: !0, wheel: !0, beforeinput: !0, input: !0, keydown: !0, keyup: !0, compositionstart: !0, compositionupdate: !0, compositionend: !0, touchstart: !0, touchend: !0, touchmove: !0, touchcancel: !0, pointerover: !0, pointerenter: !0, pointerdown: !0, pointermove: !0, pointerup: !0, pointercancel: !0, pointerout: !0, pointerleave: !0, gotpointercapture: !0, lostpointercapture: !0,
        dragstart: !0, drag: !0, dragenter: !0, dragleave: !0, dragover: !0, drop: !0, dragend: !0, DOMActivate: !0, DOMFocusIn: !0, DOMFocusOut: !0, keypress: !0 };function ub(a, b) {
        var c = [],
            d = a;for (a = a === window ? window : a.getRootNode(); d;) c.push(d), d = d.assignedSlot ? d.assignedSlot : d.nodeType === Node.DOCUMENT_FRAGMENT_NODE && d.host && (b || d !== a) ? d.host : d.parentNode;c[c.length - 1] === document && c.push(window);return c;
      }
      function vb(a, b) {
        if (!w) return a;a = ub(a, !0);for (var c = 0, d, e, f, h; c < b.length; c++) if (d = b[c], f = d === window ? window : d.getRootNode(), f !== e && (h = a.indexOf(f), e = f), !w(f) || -1 < h) return d;
      }
      var wb = { get composed() {
          !1 !== this.isTrusted && void 0 === this.s && (this.s = tb[this.type]);return this.s || !1;
        }, composedPath: function () {
          this.C || (this.C = ub(this.__target, this.composed));return this.C;
        }, get target() {
          return vb(this.currentTarget, this.composedPath());
        }, get relatedTarget() {
          if (!this.D) return null;this.F || (this.F = ub(this.D, !0));return vb(this.currentTarget, this.F);
        }, stopPropagation: function () {
          Event.prototype.stopPropagation.call(this);this.u = !0;
        }, stopImmediatePropagation: function () {
          Event.prototype.stopImmediatePropagation.call(this);
          this.u = this.I = !0;
        } };function xb(a) {
        function b(b, d) {
          b = new a(b, d);b.s = d && !!d.composed;return b;
        }la(b, a);b.prototype = a.prototype;return b;
      }var yb = { focus: !0, blur: !0 };function zb(a, b, c) {
        if (c = b.__handlers && b.__handlers[a.type] && b.__handlers[a.type][c]) for (var d = 0, e; (e = c[d]) && a.target !== a.relatedTarget && (e.call(b, a), !a.I); d++);
      }
      function Ab(a) {
        var b = a.composedPath();Object.defineProperty(a, "currentTarget", { get: function () {
            return d;
          }, configurable: !0 });for (var c = b.length - 1; 0 <= c; c--) {
          var d = b[c];zb(a, d, "capture");if (a.u) return;
        }Object.defineProperty(a, "eventPhase", { get: function () {
            return Event.AT_TARGET;
          } });var e;for (c = 0; c < b.length; c++) {
          d = b[c];var f = d.__shady && d.__shady.root;if (0 === c || f && f === e) if (zb(a, d, "bubble"), d !== window && (e = d.getRootNode()), a.u) break;
        }
      }
      function Bb(a, b, c, d, e, f) {
        for (var h = 0; h < a.length; h++) {
          var g = a[h],
              l = g.type,
              k = g.capture,
              m = g.once,
              q = g.passive;if (b === g.node && c === l && d === k && e === m && f === q) return h;
        }return -1;
      }
      function Cb(a, b, c) {
        if (b) {
          if (c && "object" === typeof c) {
            var d = !!c.capture;var e = !!c.once;var f = !!c.passive;
          } else d = !!c, f = e = !1;var h = c && c.v || this,
              g = b[Y];if (g) {
            if (-1 < Bb(g, h, a, d, e, f)) return;
          } else b[Y] = [];g = function (d) {
            e && this.removeEventListener(a, b, c);d.__target || Db(d);if (h !== this) {
              var f = Object.getOwnPropertyDescriptor(d, "currentTarget");Object.defineProperty(d, "currentTarget", { get: function () {
                  return h;
                }, configurable: !0 });
            }if (d.composed || -1 < d.composedPath().indexOf(h)) if (d.target === d.relatedTarget) d.eventPhase === Event.BUBBLING_PHASE && d.stopImmediatePropagation();else if (d.eventPhase === Event.CAPTURING_PHASE || d.bubbles || d.target === h) {
              var g = "object" === typeof b && b.handleEvent ? b.handleEvent(d) : b.call(h, d);h !== this && (f ? (Object.defineProperty(d, "currentTarget", f), f = null) : delete d.currentTarget);return g;
            }
          };b[Y].push({ node: this, type: a, capture: d, once: e, passive: f, V: g });yb[a] ? (this.__handlers = this.__handlers || {}, this.__handlers[a] = this.__handlers[a] || { capture: [], bubble: [] }, this.__handlers[a][d ? "capture" : "bubble"].push(g)) : (this instanceof Window ? I.T : I.addEventListener).call(this, a, g, c);
        }
      }
      function Eb(a, b, c) {
        if (b) {
          if (c && "object" === typeof c) {
            var d = !!c.capture;var e = !!c.once;var f = !!c.passive;
          } else d = !!c, f = e = !1;var h = c && c.v || this,
              g = void 0;var l = null;try {
            l = b[Y];
          } catch (k) {}l && (e = Bb(l, h, a, d, e, f), -1 < e && (g = l.splice(e, 1)[0].V, l.length || (b[Y] = void 0)));(this instanceof Window ? I.U : I.removeEventListener).call(this, a, g || b, c);g && yb[a] && this.__handlers && this.__handlers[a] && (a = this.__handlers[a][d ? "capture" : "bubble"], g = a.indexOf(g), -1 < g && a.splice(g, 1));
        }
      }
      function Fb() {
        for (var a in yb) window.addEventListener(a, function (a) {
          a.__target || (Db(a), Ab(a));
        }, !0);
      }function Db(a) {
        a.__target = a.target;a.D = a.relatedTarget;if (t.h) {
          var b = Object.getPrototypeOf(a);if (!b.hasOwnProperty("__patchProto")) {
            var c = Object.create(b);c.W = b;A(c, wb);b.__patchProto = c;
          }a.__proto__ = b.__patchProto;
        } else A(a, wb);
      }var Gb = xb(window.Event),
          Hb = xb(window.CustomEvent),
          Ib = xb(window.MouseEvent);function Jb(a) {
        var b = a.getRootNode();w(b) && ib(b);return a.__shady && a.__shady.assignedSlot || null;
      }
      var Kb = { addEventListener: Cb.bind(window), removeEventListener: Eb.bind(window) },
          Lb = { addEventListener: Cb, removeEventListener: Eb, appendChild: function (a) {
          return R(this, a);
        }, insertBefore: function (a, b) {
          return R(this, a, b);
        }, removeChild: function (a) {
          return Ra(this, a);
        }, replaceChild: function (a, b) {
          R(this, a, b);Ra(this, b);return a;
        }, cloneNode: function (a) {
          if ("template" == this.localName) var b = I.cloneNode.call(this, a);else if (b = I.cloneNode.call(this, !1), a) {
            a = this.childNodes;for (var c = 0, d; c < a.length; c++) d = a[c].cloneNode(!0), b.appendChild(d);
          }return b;
        }, getRootNode: function () {
          return bb(this);
        }, contains: function (a) {
          return pa(this, a);
        }, get isConnected() {
          var a = this.ownerDocument;if (oa && I.contains.call(a, this) || a.documentElement && I.contains.call(a.documentElement, this)) return !0;for (a = this; a && !(a instanceof Document);) a = a.parentNode || (a instanceof X ? a.host : void 0);return !!(a && a instanceof Document);
        }, dispatchEvent: function (a) {
          W();return I.dispatchEvent.call(this, a);
        } },
          Mb = { get assignedSlot() {
          return Jb(this);
        } },
          Nb = { querySelector: function (a) {
          return T(this, function (b) {
            return ka.call(b, a);
          }, function (a) {
            return !!a;
          })[0] || null;
        }, querySelectorAll: function (a) {
          return T(this, function (b) {
            return ka.call(b, a);
          });
        } },
          Ob = { assignedNodes: function (a) {
          if ("slot" === this.localName) {
            var b = this.getRootNode();w(b) && ib(b);return this.__shady ? (a && a.flatten ? this.__shady.g : this.__shady.assignedNodes) || [] : [];
          }
        } },
          Pb = B({ setAttribute: function (a, b) {
          db(this, a, b);
        }, removeAttribute: function (a) {
          I.removeAttribute.call(this, a);Ya(this, a);
        }, attachShadow: function (a) {
          if (!this) throw "Must provide a host.";
          if (!a) throw "Not enough arguments.";return new X(hb, this, a);
        }, get slot() {
          return this.getAttribute("slot");
        }, set slot(a) {
          db(this, "slot", a);
        }, get assignedSlot() {
          return Jb(this);
        } }, Nb, Ob);Object.defineProperties(Pb, Na);var Qb = B({ importNode: function (a, b) {
          return eb(a, b);
        }, getElementById: function (a) {
          return T(this, function (b) {
            return b.id == a;
          }, function (a) {
            return !!a;
          })[0] || null;
        } }, Nb);Object.defineProperties(Qb, { _activeElement: N.activeElement });
      var Rb = HTMLElement.prototype.blur,
          Sb = B({ blur: function () {
          var a = this.__shady && this.__shady.root;(a = a && a.activeElement) ? a.blur() : Rb.call(this);
        } });function Z(a, b) {
        for (var c = Object.getOwnPropertyNames(b), d = 0; d < c.length; d++) {
          var e = c[d],
              f = Object.getOwnPropertyDescriptor(b, e);f.value ? a[e] = f.value : Object.defineProperty(a, e, f);
        }
      };if (t.H) {
        window.ShadyDOM = { inUse: t.H, patch: function (a) {
            return a;
          }, isShadyRoot: w, enqueue: gb, flush: W, settings: t, filterMutations: sb, observeChildren: qb, unobserveChildren: rb, nativeMethods: I, nativeTree: F };window.Event = Gb;window.CustomEvent = Hb;window.MouseEvent = Ib;Fb();var Tb = window.customElements && window.customElements.nativeHTMLElement || HTMLElement;Z(window.Node.prototype, Lb);Z(window.Window.prototype, Kb);Z(window.Text.prototype, Mb);Z(window.DocumentFragment.prototype, Nb);Z(window.Element.prototype, Pb);Z(window.Document.prototype, Qb);window.HTMLSlotElement && Z(window.HTMLSlotElement.prototype, Ob);Z(Tb.prototype, Sb);t.h && (P(window.Node.prototype), P(window.Text.prototype), P(window.DocumentFragment.prototype), P(window.Element.prototype), P(Tb.prototype), P(window.Document.prototype), window.HTMLSlotElement && P(window.HTMLSlotElement.prototype));window.ShadowRoot = X;
      };
    }).call(this);

    //# sourceMappingURL=shadydom.min.js.map
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(0));

  /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

  /* WEBPACK VAR INJECTION */(function (global) {
    (function () {
      /*
      Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
      This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
      The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
      The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
      Code distributed by Google as part of the polymer project is also
      subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
      */
      'use strict';

      var l,
          aa = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this,
          m = {};function n() {
        this.end = this.start = 0;this.rules = this.parent = this.previous = null;this.cssText = this.parsedCssText = "";this.atRule = !1;this.type = 0;this.parsedSelector = this.selector = this.keyframesName = "";
      }
      function p(a) {
        a = a.replace(ba, "").replace(ca, "");var b = da,
            c = a,
            e = new n();e.start = 0;e.end = c.length;for (var d = e, f = 0, h = c.length; f < h; f++) if ("{" === c[f]) {
          d.rules || (d.rules = []);var g = d,
              k = g.rules[g.rules.length - 1] || null;d = new n();d.start = f + 1;d.parent = g;d.previous = k;g.rules.push(d);
        } else "}" === c[f] && (d.end = f + 1, d = d.parent || e);return b(e, a);
      }
      function da(a, b) {
        var c = b.substring(a.start, a.end - 1);a.parsedCssText = a.cssText = c.trim();a.parent && (c = b.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), c = ea(c), c = c.replace(fa, " "), c = c.substring(c.lastIndexOf(";") + 1), c = a.parsedSelector = a.selector = c.trim(), a.atRule = 0 === c.indexOf("@"), a.atRule ? 0 === c.indexOf("@media") ? a.type = ha : c.match(ia) && (a.type = r, a.keyframesName = a.selector.split(fa).pop()) : a.type = 0 === c.indexOf("--") ? ja : ka);if (c = a.rules) for (var e = 0, d = c.length, f; e < d && (f = c[e]); e++) da(f, b);
        return a;
      }function ea(a) {
        return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, c) {
          a = c;for (c = 6 - a.length; c--;) a = "0" + a;return "\\" + a;
        });
      }
      function la(a, b, c) {
        c = void 0 === c ? "" : c;var e = "";if (a.cssText || a.rules) {
          var d = a.rules,
              f;if (f = d) f = d[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));if (f) {
            f = 0;for (var h = d.length, g; f < h && (g = d[f]); f++) e = la(g, b, e);
          } else b ? b = a.cssText : (b = a.cssText, b = b.replace(ma, "").replace(na, ""), b = b.replace(oa, "").replace(pa, "")), (e = b.trim()) && (e = "  " + e + "\n");
        }e && (a.selector && (c += a.selector + " {\n"), c += e, a.selector && (c += "}\n\n"));return c;
      }
      var ka = 1,
          r = 7,
          ha = 4,
          ja = 1E3,
          ba = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
          ca = /@import[^;]*;/gim,
          ma = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
          na = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
          oa = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
          pa = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
          ia = /^@[^\s]*keyframes/,
          fa = /\s+/g;var qa = Promise.resolve();function ra(a) {
        if (a = m[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
      }function sa(a) {
        return a._applyShimCurrentVersion === a._applyShimNextVersion;
      }function ta(a) {
        a._applyShimValidatingVersion = a._applyShimNextVersion;a.b || (a.b = !0, qa.then(function () {
          a._applyShimCurrentVersion = a._applyShimNextVersion;a.b = !1;
        }));
      };var t = !(window.ShadyDOM && window.ShadyDOM.inUse),
          u;function ua(a) {
        u = a && a.shimcssproperties ? !1 : t || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
      }window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? u = window.ShadyCSS.nativeCss : window.ShadyCSS ? (ua(window.ShadyCSS), window.ShadyCSS = void 0) : ua(window.WebComponents && window.WebComponents.flags);var v = u;var w = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
          y = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
          va = /(--[\w-]+)\s*([:,;)]|$)/gi,
          wa = /(animation\s*:)|(animation-name\s*:)/,
          xa = /@media\s(.*)/,
          ya = /\{[^}]*\}/g;var za = new Set();function z(a, b) {
        if (!a) return "";"string" === typeof a && (a = p(a));b && A(a, b);return la(a, v);
      }function B(a) {
        !a.__cssRules && a.textContent && (a.__cssRules = p(a.textContent));return a.__cssRules || null;
      }function Aa(a) {
        return !!a.parent && a.parent.type === r;
      }function A(a, b, c, e) {
        if (a) {
          var d = !1,
              f = a.type;if (e && f === ha) {
            var h = a.selector.match(xa);h && (window.matchMedia(h[1]).matches || (d = !0));
          }f === ka ? b(a) : c && f === r ? c(a) : f === ja && (d = !0);if ((a = a.rules) && !d) {
            d = 0;f = a.length;for (var g; d < f && (g = a[d]); d++) A(g, b, c, e);
          }
        }
      }
      function C(a, b, c, e) {
        var d = document.createElement("style");b && d.setAttribute("scope", b);d.textContent = a;Ba(d, c, e);return d;
      }var D = null;function Ba(a, b, c) {
        b = b || document.head;b.insertBefore(a, c && c.nextSibling || b.firstChild);D ? a.compareDocumentPosition(D) === Node.DOCUMENT_POSITION_PRECEDING && (D = a) : D = a;
      }
      function Ca(a, b) {
        var c = a.indexOf("var(");if (-1 === c) return b(a, "", "", "");a: {
          var e = 0;var d = c + 3;for (var f = a.length; d < f; d++) if ("(" === a[d]) e++;else if (")" === a[d] && 0 === --e) break a;d = -1;
        }e = a.substring(c + 4, d);c = a.substring(0, c);a = Ca(a.substring(d + 1), b);d = e.indexOf(",");return -1 === d ? b(c, e.trim(), "", a) : b(c, e.substring(0, d).trim(), e.substring(d + 1).trim(), a);
      }function E(a, b) {
        t ? a.setAttribute("class", b) : window.ShadyDOM.nativeMethods.setAttribute.call(a, "class", b);
      }
      function F(a) {
        var b = a.localName,
            c = "";b ? -1 < b.indexOf("-") || (c = b, b = a.getAttribute && a.getAttribute("is") || "") : (b = a.is, c = a.extends);return { is: b, u: c };
      };var G = null,
          Da = window.HTMLImports && window.HTMLImports.whenReady || null,
          H;function Ea(a) {
        requestAnimationFrame(function () {
          Da ? Da(a) : (G || (G = new Promise(function (a) {
            H = a;
          }), "complete" === document.readyState ? H() : document.addEventListener("readystatechange", function () {
            "complete" === document.readyState && H();
          })), G.then(function () {
            a && a();
          }));
        });
      };function I() {}function J(a, b, c) {
        var e = K;a.__styleScoped ? a.__styleScoped = null : Fa(e, a, b || "", c);
      }function Fa(a, b, c, e) {
        b.nodeType === Node.ELEMENT_NODE && Ga(b, c, e);if (b = "template" === b.localName ? (b.content || b.R).childNodes : b.children || b.childNodes) for (var d = 0; d < b.length; d++) Fa(a, b[d], c, e);
      }
      function Ga(a, b, c) {
        if (b) if (a.classList) c ? (a.classList.remove("style-scope"), a.classList.remove(b)) : (a.classList.add("style-scope"), a.classList.add(b));else if (a.getAttribute) {
          var e = a.getAttribute(Ha);c ? e && (b = e.replace("style-scope", "").replace(b, ""), E(a, b)) : E(a, (e ? e + " " : "") + "style-scope " + b);
        }
      }function L(a, b, c) {
        var e = K,
            d = a.__cssBuild;t || "shady" === d ? b = z(b, c) : (a = F(a), b = Ia(e, b, a.is, a.u, c) + "\n\n");return b.trim();
      }
      function Ia(a, b, c, e, d) {
        var f = M(c, e);c = c ? Ja + c : "";return z(b, function (b) {
          b.c || (b.selector = b.g = Ka(a, b, a.b, c, f), b.c = !0);d && d(b, c, f);
        });
      }function M(a, b) {
        return b ? "[is=" + a + "]" : a;
      }function Ka(a, b, c, e, d) {
        var f = b.selector.split(La);if (!Aa(b)) {
          b = 0;for (var h = f.length, g; b < h && (g = f[b]); b++) f[b] = c.call(a, g, e, d);
        }return f.join(La);
      }function Ma(a) {
        return a.replace(Na, function (a, c, e) {
          -1 < e.indexOf("+") ? e = e.replace(/\+/g, "___") : -1 < e.indexOf("___") && (e = e.replace(/___/g, "+"));return ":" + c + "(" + e + ")";
        });
      }
      I.prototype.b = function (a, b, c) {
        var e = !1;a = a.trim();var d = Na.test(a);d && (a = a.replace(Na, function (a, b, c) {
          return ":" + b + "(" + c.replace(/\s/g, "") + ")";
        }), a = Ma(a));a = a.replace(Oa, Pa + " $1");a = a.replace(Qa, function (a, d, g) {
          e || (a = Ra(g, d, b, c), e = e || a.stop, d = a.H, g = a.value);return d + g;
        });d && (a = Ma(a));return a;
      };
      function Ra(a, b, c, e) {
        var d = a.indexOf(Sa);0 <= a.indexOf(Pa) ? a = Ta(a, e) : 0 !== d && (a = c ? Ua(a, c) : a);c = !1;0 <= d && (b = "", c = !0);if (c) {
          var f = !0;c && (a = a.replace(Va, function (a, b) {
            return " > " + b;
          }));
        }a = a.replace(Wa, function (a, b, c) {
          return '[dir="' + c + '"] ' + b + ", " + b + '[dir="' + c + '"]';
        });return { value: a, H: b, stop: f };
      }function Ua(a, b) {
        a = a.split(Xa);a[0] += b;return a.join(Xa);
      }
      function Ta(a, b) {
        var c = a.match(Ya);return (c = c && c[2].trim() || "") ? c[0].match(Za) ? a.replace(Ya, function (a, c, f) {
          return b + f;
        }) : c.split(Za)[0] === b ? c : $a : a.replace(Pa, b);
      }function ab(a) {
        a.selector === bb && (a.selector = "html");
      }I.prototype.c = function (a) {
        return a.match(Sa) ? this.b(a, cb) : Ua(a.trim(), cb);
      };aa.Object.defineProperties(I.prototype, { a: { configurable: !0, enumerable: !0, get: function () {
            return "style-scope";
          } } });
      var Na = /:(nth[-\w]+)\(([^)]+)\)/,
          cb = ":not(.style-scope)",
          La = ",",
          Qa = /(^|[\s>+~]+)((?:\[.+?\]|[^\s>+~=[])+)/g,
          Za = /[[.:#*]/,
          Pa = ":host",
          bb = ":root",
          Sa = "::slotted",
          Oa = new RegExp("^(" + Sa + ")"),
          Ya = /(:host)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
          Va = /(?:::slotted)(?:\(((?:\([^)(]*\)|[^)(]*)+?)\))/,
          Wa = /(.*):dir\((?:(ltr|rtl))\)/,
          Ja = ".",
          Xa = ":",
          Ha = "class",
          $a = "should_not_match",
          K = new I();function db() {}
      function eb(a) {
        for (var b = 0; b < a.length; b++) {
          var c = a[b];if (c.target !== document.documentElement && c.target !== document.head) for (var e = 0; e < c.addedNodes.length; e++) {
            var d = c.addedNodes[e];if (d.nodeType === Node.ELEMENT_NODE) {
              var f = d.getRootNode();var h = d;var g = [];h.classList ? g = Array.from(h.classList) : h instanceof window.SVGElement && h.hasAttribute("class") && (g = h.getAttribute("class").split(/\s+/));h = g;g = h.indexOf(K.a);if ((h = -1 < g ? h[g + 1] : "") && f === d.ownerDocument) J(d, h, !0);else if (f.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (f = f.host)) if (f = F(f).is, h === f) for (d = window.ShadyDOM.nativeMethods.querySelectorAll.call(d, ":not(." + K.a + ")"), f = 0; f < d.length; f++) Ga(d[f], h);else h && J(d, h, !0), J(d, f);
            }
          }
        }
      }
      if (!t) {
        var fb = new MutationObserver(eb),
            gb = function (a) {
          fb.observe(a, { childList: !0, subtree: !0 });
        };if (window.customElements && !window.customElements.polyfillWrapFlushCallback) gb(document);else {
          var hb = function () {
            gb(document.body);
          };window.HTMLImports ? window.HTMLImports.whenReady(hb) : requestAnimationFrame(function () {
            if ("loading" === document.readyState) {
              var a = function () {
                hb();document.removeEventListener("readystatechange", a);
              };document.addEventListener("readystatechange", a);
            } else hb();
          });
        }db = function () {
          eb(fb.takeRecords());
        };
      }
      var ib = db;function N(a, b, c, e, d) {
        this.j = a || null;this.b = b || null;this.B = c || [];this.s = null;this.u = d || "";this.a = this.h = this.m = null;
      }function O(a) {
        return a ? a.__styleInfo : null;
      }function jb(a, b) {
        return a.__styleInfo = b;
      }N.prototype.c = function () {
        return this.j;
      };N.prototype._getStyleRules = N.prototype.c;var Q = window.Element.prototype,
          kb = Q.matches || Q.matchesSelector || Q.mozMatchesSelector || Q.msMatchesSelector || Q.oMatchesSelector || Q.webkitMatchesSelector,
          lb = navigator.userAgent.match("Trident");function mb() {}function nb(a) {
        var b = {},
            c = [],
            e = 0;A(a, function (a) {
          R(a);a.index = e++;a = a.f.cssText;for (var c; c = va.exec(a);) {
            var d = c[1];":" !== c[2] && (b[d] = !0);
          }
        }, function (a) {
          c.push(a);
        });a.b = c;a = [];for (var d in b) a.push(d);return a;
      }
      function R(a) {
        if (!a.f) {
          var b = {},
              c = {};S(a, c) && (b.i = c, a.rules = null);b.cssText = a.parsedCssText.replace(ya, "").replace(w, "");a.f = b;
        }
      }function S(a, b) {
        var c = a.f;if (c) {
          if (c.i) return Object.assign(b, c.i), !0;
        } else {
          c = a.parsedCssText;for (var e; a = w.exec(c);) {
            e = (a[2] || a[3]).trim();if ("inherit" !== e || "unset" !== e) b[a[1].trim()] = e;e = !0;
          }return e;
        }
      }
      function T(a, b, c) {
        b && (b = 0 <= b.indexOf(";") ? ob(a, b, c) : Ca(b, function (b, d, f, h) {
          if (!d) return b + h;(d = T(a, c[d], c)) && "initial" !== d ? "apply-shim-inherit" === d && (d = "inherit") : d = T(a, c[f] || f, c) || f;return b + (d || "") + h;
        }));return b && b.trim() || "";
      }
      function ob(a, b, c) {
        b = b.split(";");for (var e = 0, d, f; e < b.length; e++) if (d = b[e]) {
          y.lastIndex = 0;if (f = y.exec(d)) d = T(a, c[f[1]], c);else if (f = d.indexOf(":"), -1 !== f) {
            var h = d.substring(f);h = h.trim();h = T(a, h, c) || h;d = d.substring(0, f) + h;
          }b[e] = d && d.lastIndexOf(";") === d.length - 1 ? d.slice(0, -1) : d || "";
        }return b.join(";");
      }
      function pb(a, b) {
        var c = {},
            e = [];A(a, function (a) {
          a.f || R(a);var d = a.g || a.parsedSelector;b && a.f.i && d && kb.call(b, d) && (S(a, c), a = a.index, d = parseInt(a / 32, 10), e[d] = (e[d] || 0) | 1 << a % 32);
        }, null, !0);return { i: c, key: e };
      }
      function qb(a, b, c, e, d) {
        c.f || R(c);if (c.f.i) {
          b = F(b);a = b.is;b = b.u;b = a ? M(a, b) : "html";var f = c.parsedSelector,
              h = ":host > *" === f || "html" === f,
              g = 0 === f.indexOf(":host") && !h;"shady" === e && (h = f === b + " > *." + b || -1 !== f.indexOf("html"), g = !h && 0 === f.indexOf(b));"shadow" === e && (h = ":host > *" === f || "html" === f, g = g && !h);if (h || g) e = b, g && (t && !c.g && (c.g = Ka(K, c, K.b, a ? Ja + a : "", b)), e = c.g || b), d({ M: e, K: g, S: h });
        }
      }
      function rb(a, b) {
        var c = {},
            e = {},
            d = U,
            f = b && b.__cssBuild;A(b, function (b) {
          qb(d, a, b, f, function (d) {
            kb.call(a.A || a, d.M) && (d.K ? S(b, c) : S(b, e));
          });
        }, null, !0);return { L: e, J: c };
      }
      function sb(a, b, c, e) {
        var d = F(b),
            f = M(d.is, d.u),
            h = new RegExp("(?:^|[^.#[:])" + (b.extends ? "\\" + f.slice(0, -1) + "\\]" : f) + "($|[.:[\\s>+~])");d = O(b).j;var g = tb(d, e);return L(b, d, function (b) {
          var d = "";b.f || R(b);b.f.cssText && (d = ob(a, b.f.cssText, c));b.cssText = d;if (!t && !Aa(b) && b.cssText) {
            var k = d = b.cssText;null == b.C && (b.C = wa.test(d));if (b.C) if (null == b.w) {
              b.w = [];for (var q in g) k = g[q], k = k(d), d !== k && (d = k, b.w.push(q));
            } else {
              for (q = 0; q < b.w.length; ++q) k = g[b.w[q]], d = k(d);k = d;
            }b.cssText = k;b.g = b.g || b.selector;d = "." + e;q = b.g.split(",");
            k = 0;for (var zb = q.length, P; k < zb && (P = q[k]); k++) q[k] = P.match(h) ? P.replace(f, d) : d + " " + P;b.selector = q.join(",");
          }
        });
      }function tb(a, b) {
        a = a.b;var c = {};if (!t && a) for (var e = 0, d = a[e]; e < a.length; d = a[++e]) {
          var f = d,
              h = b;f.l = new RegExp(f.keyframesName, "g");f.a = f.keyframesName + "-" + h;f.g = f.g || f.selector;f.selector = f.g.replace(f.keyframesName, f.a);c[d.keyframesName] = ub(d);
        }return c;
      }function ub(a) {
        return function (b) {
          return b.replace(a.l, a.a);
        };
      }
      function vb(a, b) {
        var c = U,
            e = B(a);a.textContent = z(e, function (a) {
          var d = a.cssText = a.parsedCssText;a.f && a.f.cssText && (d = d.replace(ma, "").replace(na, ""), a.cssText = ob(c, d, b));
        });
      }aa.Object.defineProperties(mb.prototype, { a: { configurable: !0, enumerable: !0, get: function () {
            return "x-scope";
          } } });var U = new mb();var wb = {},
          V = window.customElements;if (V && !t) {
        var xb = V.define;V.define = function (a, b, c) {
          var e = document.createComment(" Shady DOM styles for " + a + " "),
              d = document.head;d.insertBefore(e, (D ? D.nextSibling : null) || d.firstChild);D = e;wb[a] = e;return xb.call(V, a, b, c);
        };
      };var W = new function () {
        this.cache = {};this.a = 100;
      }();function X() {
        var a = this;this.A = {};this.c = document.documentElement;var b = new n();b.rules = [];this.l = jb(this.c, new N(b));this.v = !1;this.b = this.a = null;Ea(function () {
          Y(a);
        });
      }l = X.prototype;l.F = function () {
        ib();
      };l.I = function (a) {
        return B(a);
      };l.O = function (a) {
        return z(a);
      };
      l.prepareTemplate = function (a, b, c) {
        if (!a.l) {
          a.l = !0;a.name = b;a.extends = c;m[b] = a;var e = (e = a.content.querySelector("style")) ? e.getAttribute("css-build") || "" : "";var d = [];for (var f = a.content.querySelectorAll("style"), h = 0; h < f.length; h++) {
            var g = f[h];if (g.hasAttribute("shady-unscoped")) {
              if (!t) {
                var k = g.textContent;za.has(k) || (za.add(k), k = g.cloneNode(!0), document.head.appendChild(k));g.parentNode.removeChild(g);
              }
            } else d.push(g.textContent), g.parentNode.removeChild(g);
          }d = d.join("").trim();c = { is: b, extends: c, P: e };
          t || J(a.content, b);Y(this);f = y.test(d) || w.test(d);y.lastIndex = 0;w.lastIndex = 0;d = p(d);f && v && this.a && this.a.transformRules(d, b);a._styleAst = d;a.v = e;e = [];v || (e = nb(a._styleAst));if (!e.length || v) d = t ? a.content : null, b = wb[b], f = L(c, a._styleAst), b = f.length ? C(f, c.is, d, b) : void 0, a.a = b;a.c = e;
        }
      };
      function yb(a) {
        !a.b && window.ShadyCSS && window.ShadyCSS.CustomStyleInterface && (a.b = window.ShadyCSS.CustomStyleInterface, a.b.transformCallback = function (b) {
          a.D(b);
        }, a.b.validateCallback = function () {
          requestAnimationFrame(function () {
            (a.b.enqueued || a.v) && a.o();
          });
        });
      }function Y(a) {
        !a.a && window.ShadyCSS && window.ShadyCSS.ApplyShim && (a.a = window.ShadyCSS.ApplyShim, a.a.invalidCallback = ra);yb(a);
      }
      l.o = function () {
        Y(this);if (this.b) {
          var a = this.b.processStyles();if (this.b.enqueued) {
            if (v) for (var b = 0; b < a.length; b++) {
              var c = this.b.getStyleForCustomStyle(a[b]);if (c && v && this.a) {
                var e = B(c);Y(this);this.a.transformRules(e);c.textContent = z(e);
              }
            } else for (Ab(this, this.c, this.l), b = 0; b < a.length; b++) (c = this.b.getStyleForCustomStyle(a[b])) && vb(c, this.l.m);this.b.enqueued = !1;this.v && !v && this.styleDocument();
          }
        }
      };
      l.styleElement = function (a, b) {
        var c = F(a).is,
            e = O(a);if (!e) {
          var d = F(a);e = d.is;d = d.u;var f = wb[e];e = m[e];if (e) {
            var h = e._styleAst;var g = e.c;
          }e = jb(a, new N(h, f, g, 0, d));
        }a !== this.c && (this.v = !0);b && (e.s = e.s || {}, Object.assign(e.s, b));if (v) {
          if (e.s) {
            b = e.s;for (var k in b) null === k ? a.style.removeProperty(k) : a.style.setProperty(k, b[k]);
          }if (((k = m[c]) || a === this.c) && k && k.a && !sa(k)) {
            if (sa(k) || k._applyShimValidatingVersion !== k._applyShimNextVersion) Y(this), this.a && this.a.transformRules(k._styleAst, c), k.a.textContent = L(a, e.j), ta(k);t && (c = a.shadowRoot) && (c.querySelector("style").textContent = L(a, e.j));e.j = k._styleAst;
          }
        } else if (Ab(this, a, e), e.B && e.B.length) {
          c = e;k = F(a).is;a: {
            if (b = W.cache[k]) for (h = b.length - 1; 0 <= h; h--) {
              g = b[h];b: {
                e = c.B;for (d = 0; d < e.length; d++) if (f = e[d], g.i[f] !== c.m[f]) {
                  e = !1;break b;
                }e = !0;
              }if (e) {
                b = g;break a;
              }
            }b = void 0;
          }e = b ? b.styleElement : null;h = c.h;(g = b && b.h) || (g = this.A[k] = (this.A[k] || 0) + 1, g = k + "-" + g);c.h = g;g = c.h;d = U;d = e ? e.textContent || "" : sb(d, a, c.m, g);f = O(a);var x = f.a;x && !t && x !== e && (x._useCount--, 0 >= x._useCount && x.parentNode && x.parentNode.removeChild(x));t ? f.a ? (f.a.textContent = d, e = f.a) : d && (e = C(d, g, a.shadowRoot, f.b)) : e ? e.parentNode || (lb && -1 < d.indexOf("@media") && (e.textContent = d), Ba(e, null, f.b)) : d && (e = C(d, g, null, f.b));e && (e._useCount = e._useCount || 0, f.a != e && e._useCount++, f.a = e);g = e;t || (e = c.h, f = d = a.getAttribute("class") || "", h && (f = d.replace(new RegExp("\\s*x-scope\\s*" + h + "\\s*", "g"), " ")), f += (f ? " " : "") + "x-scope " + e, d !== f && E(a, f));b || (a = W.cache[k] || [], a.push({ i: c.m, styleElement: g, h: c.h }), a.length > W.a && a.shift(), W.cache[k] = a);
        }
      };function Bb(a, b) {
        return (b = b.getRootNode().host) ? O(b) ? b : Bb(a, b) : a.c;
      }function Ab(a, b, c) {
        a = Bb(a, b);var e = O(a);a = Object.create(e.m || null);var d = rb(b, c.j);b = pb(e.j, b).i;Object.assign(a, d.J, b, d.L);b = c.s;for (var f in b) if ((d = b[f]) || 0 === d) a[f] = d;f = U;b = Object.getOwnPropertyNames(a);for (d = 0; d < b.length; d++) e = b[d], a[e] = T(f, a[e], a);c.m = a;
      }l.styleDocument = function (a) {
        this.styleSubtree(this.c, a);
      };
      l.styleSubtree = function (a, b) {
        var c = a.shadowRoot;(c || a === this.c) && this.styleElement(a, b);if (b = c && (c.children || c.childNodes)) for (a = 0; a < b.length; a++) this.styleSubtree(b[a]);else if (a = a.children || a.childNodes) for (b = 0; b < a.length; b++) this.styleSubtree(a[b]);
      };l.D = function (a) {
        var b = this,
            c = B(a);A(c, function (a) {
          if (t) ab(a);else {
            var c = K;a.selector = a.parsedSelector;ab(a);a.selector = a.g = Ka(c, a, c.c, void 0, void 0);
          }v && (Y(b), b.a && b.a.transformRule(a));
        });v ? a.textContent = z(c) : this.l.j.rules.push(c);
      };
      l.getComputedStyleValue = function (a, b) {
        var c;v || (c = (O(a) || O(Bb(this, a))).m[b]);return (c = c || window.getComputedStyle(a).getPropertyValue(b)) ? c.trim() : "";
      };l.N = function (a, b) {
        var c = a.getRootNode();b = b ? b.split(/\s/) : [];c = c.host && c.host.localName;if (!c) {
          var e = a.getAttribute("class");if (e) {
            e = e.split(/\s/);for (var d = 0; d < e.length; d++) if (e[d] === K.a) {
              c = e[d + 1];break;
            }
          }
        }c && b.push(K.a, c);v || (c = O(a)) && c.h && b.push(U.a, c.h);E(a, b.join(" "));
      };l.G = function (a) {
        return O(a);
      };X.prototype.flush = X.prototype.F;
      X.prototype.prepareTemplate = X.prototype.prepareTemplate;X.prototype.styleElement = X.prototype.styleElement;X.prototype.styleDocument = X.prototype.styleDocument;X.prototype.styleSubtree = X.prototype.styleSubtree;X.prototype.getComputedStyleValue = X.prototype.getComputedStyleValue;X.prototype.setElementClass = X.prototype.N;X.prototype._styleInfoForNode = X.prototype.G;X.prototype.transformCustomStyleForDocument = X.prototype.D;X.prototype.getStyleAst = X.prototype.I;X.prototype.styleAstToString = X.prototype.O;
      X.prototype.flushCustomStyles = X.prototype.o;Object.defineProperties(X.prototype, { nativeShadow: { get: function () {
            return t;
          } }, nativeCss: { get: function () {
            return v;
          } } });var Z = new X(),
          Cb,
          Db;window.ShadyCSS && (Cb = window.ShadyCSS.ApplyShim, Db = window.ShadyCSS.CustomStyleInterface);window.ShadyCSS = { ScopingShim: Z, prepareTemplate: function (a, b, c) {
          Z.o();Z.prepareTemplate(a, b, c);
        }, styleSubtree: function (a, b) {
          Z.o();Z.styleSubtree(a, b);
        }, styleElement: function (a) {
          Z.o();Z.styleElement(a);
        }, styleDocument: function (a) {
          Z.o();Z.styleDocument(a);
        }, getComputedStyleValue: function (a, b) {
          return Z.getComputedStyleValue(a, b);
        }, nativeCss: v, nativeShadow: t };Cb && (window.ShadyCSS.ApplyShim = Cb);
      Db && (window.ShadyCSS.CustomStyleInterface = Db);
    }).call(this);

    //# sourceMappingURL=scoping-shim.min.js.map
    /* WEBPACK VAR INJECTION */
  }).call(exports, __webpack_require__(0));

  /***/
},
/* 5 */
/***/function (module, exports) {

  (function () {
    /*
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    'use strict';

    var k = {};function n() {
      this.end = this.start = 0;this.rules = this.parent = this.previous = null;this.cssText = this.parsedCssText = "";this.atRule = !1;this.type = 0;this.parsedSelector = this.selector = this.keyframesName = "";
    }
    function p(a) {
      a = a.replace(aa, "").replace(ba, "");var c = q,
          b = a,
          d = new n();d.start = 0;d.end = b.length;for (var e = d, f = 0, h = b.length; f < h; f++) if ("{" === b[f]) {
        e.rules || (e.rules = []);var g = e,
            m = g.rules[g.rules.length - 1] || null;e = new n();e.start = f + 1;e.parent = g;e.previous = m;g.rules.push(e);
      } else "}" === b[f] && (e.end = f + 1, e = e.parent || d);return c(d, a);
    }
    function q(a, c) {
      var b = c.substring(a.start, a.end - 1);a.parsedCssText = a.cssText = b.trim();a.parent && (b = c.substring(a.previous ? a.previous.end : a.parent.start, a.start - 1), b = ca(b), b = b.replace(r, " "), b = b.substring(b.lastIndexOf(";") + 1), b = a.parsedSelector = a.selector = b.trim(), a.atRule = 0 === b.indexOf("@"), a.atRule ? 0 === b.indexOf("@media") ? a.type = t : b.match(da) && (a.type = u, a.keyframesName = a.selector.split(r).pop()) : a.type = 0 === b.indexOf("--") ? v : x);if (b = a.rules) for (var d = 0, e = b.length, f; d < e && (f = b[d]); d++) q(f, c);return a;
    }
    function ca(a) {
      return a.replace(/\\([0-9a-f]{1,6})\s/gi, function (a, b) {
        a = b;for (b = 6 - a.length; b--;) a = "0" + a;return "\\" + a;
      });
    }
    function y(a, c, b) {
      b = void 0 === b ? "" : b;var d = "";if (a.cssText || a.rules) {
        var e = a.rules,
            f;if (f = e) f = e[0], f = !(f && f.selector && 0 === f.selector.indexOf("--"));if (f) {
          f = 0;for (var h = e.length, g; f < h && (g = e[f]); f++) d = y(g, c, d);
        } else c ? c = a.cssText : (c = a.cssText, c = c.replace(ea, "").replace(fa, ""), c = c.replace(ha, "").replace(ia, "")), (d = c.trim()) && (d = "  " + d + "\n");
      }d && (a.selector && (b += a.selector + " {\n"), b += d, a.selector && (b += "}\n\n"));return b;
    }
    var x = 1,
        u = 7,
        t = 4,
        v = 1E3,
        aa = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,
        ba = /@import[^;]*;/gim,
        ea = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,
        fa = /(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,
        ha = /@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,
        ia = /[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,
        da = /^@[^\s]*keyframes/,
        r = /\s+/g;var ja = Promise.resolve();function ka(a) {
      if (a = k[a]) a._applyShimCurrentVersion = a._applyShimCurrentVersion || 0, a._applyShimValidatingVersion = a._applyShimValidatingVersion || 0, a._applyShimNextVersion = (a._applyShimNextVersion || 0) + 1;
    }function z(a) {
      return a._applyShimCurrentVersion === a._applyShimNextVersion;
    }function la(a) {
      a._applyShimValidatingVersion = a._applyShimNextVersion;a.b || (a.b = !0, ja.then(function () {
        a._applyShimCurrentVersion = a._applyShimNextVersion;a.b = !1;
      }));
    };var A = !(window.ShadyDOM && window.ShadyDOM.inUse),
        B;function C(a) {
      B = a && a.shimcssproperties ? !1 : A || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
    }window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? B = window.ShadyCSS.nativeCss : window.ShadyCSS ? (C(window.ShadyCSS), window.ShadyCSS = void 0) : C(window.WebComponents && window.WebComponents.flags);var D = B;var F = /(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,
        G = /(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,
        ma = /@media\s(.*)/;var H = new Set();function I(a) {
      if (!a) return "";"string" === typeof a && (a = p(a));return y(a, D);
    }function J(a) {
      !a.__cssRules && a.textContent && (a.__cssRules = p(a.textContent));return a.__cssRules || null;
    }function K(a, c, b, d) {
      if (a) {
        var e = !1,
            f = a.type;if (d && f === t) {
          var h = a.selector.match(ma);h && (window.matchMedia(h[1]).matches || (e = !0));
        }f === x ? c(a) : b && f === u ? b(a) : f === v && (e = !0);if ((a = a.rules) && !e) {
          e = 0;f = a.length;for (var g; e < f && (g = a[e]); e++) K(g, c, b, d);
        }
      }
    }
    function L(a, c) {
      var b = a.indexOf("var(");if (-1 === b) return c(a, "", "", "");a: {
        var d = 0;var e = b + 3;for (var f = a.length; e < f; e++) if ("(" === a[e]) d++;else if (")" === a[e] && 0 === --d) break a;e = -1;
      }d = a.substring(b + 4, e);b = a.substring(0, b);a = L(a.substring(e + 1), c);e = d.indexOf(",");return -1 === e ? c(b, d.trim(), "", a) : c(b, d.substring(0, e).trim(), d.substring(e + 1).trim(), a);
    };var na = /;\s*/m,
        oa = /^\s*(initial)|(inherit)\s*$/;function M() {
      this.a = {};
    }M.prototype.set = function (a, c) {
      a = a.trim();this.a[a] = { h: c, i: {} };
    };M.prototype.get = function (a) {
      a = a.trim();return this.a[a] || null;
    };var N = null;function O() {
      this.b = this.c = null;this.a = new M();
    }O.prototype.o = function (a) {
      a = G.test(a) || F.test(a);G.lastIndex = 0;F.lastIndex = 0;return a;
    };
    O.prototype.m = function (a, c) {
      if (void 0 === a.a) {
        var b = [];for (var d = a.content.querySelectorAll("style"), e = 0; e < d.length; e++) {
          var f = d[e];if (f.hasAttribute("shady-unscoped")) {
            if (!A) {
              var h = f.textContent;H.has(h) || (H.add(h), h = f.cloneNode(!0), document.head.appendChild(h));f.parentNode.removeChild(f);
            }
          } else b.push(f.textContent), f.parentNode.removeChild(f);
        }(b = b.join("").trim()) ? (d = document.createElement("style"), d.textContent = b, a.content.insertBefore(d, a.content.firstChild), b = d) : b = null;a.a = b;
      }return (a = a.a) ? this.j(a, c) : null;
    };O.prototype.j = function (a, c) {
      c = void 0 === c ? "" : c;var b = J(a);this.l(b, c);a.textContent = I(b);return b;
    };O.prototype.f = function (a) {
      var c = this,
          b = J(a);K(b, function (a) {
        ":root" === a.selector && (a.selector = "html");c.g(a);
      });a.textContent = I(b);return b;
    };O.prototype.l = function (a, c) {
      var b = this;this.c = c;K(a, function (a) {
        b.g(a);
      });this.c = null;
    };O.prototype.g = function (a) {
      a.cssText = pa(this, a.parsedCssText);":root" === a.selector && (a.selector = ":host > *");
    };
    function pa(a, c) {
      c = c.replace(F, function (b, c, e, f) {
        return qa(a, b, c, e, f);
      });return P(a, c);
    }function P(a, c) {
      for (var b; b = G.exec(c);) {
        var d = b[0],
            e = b[1];b = b.index;var f = c.slice(0, b + d.indexOf("@apply"));c = c.slice(b + d.length);var h = Q(a, f);d = void 0;var g = a;e = e.replace(na, "");var m = [];var l = g.a.get(e);l || (g.a.set(e, {}), l = g.a.get(e));if (l) for (d in g.c && (l.i[g.c] = !0), l.h) g = h && h[d], l = [d, ": var(", e, "_-_", d], g && l.push(",", g), l.push(")"), m.push(l.join(""));d = m.join("; ");c = "" + f + d + c;G.lastIndex = b + d.length;
      }return c;
    }
    function Q(a, c) {
      c = c.split(";");for (var b, d, e = {}, f = 0, h; f < c.length; f++) if (b = c[f]) if (h = b.split(":"), 1 < h.length) {
        b = h[0].trim();var g = a;d = b;h = h.slice(1).join(":");var m = oa.exec(h);m && (m[1] ? (g.b || (g.b = document.createElement("meta"), g.b.setAttribute("apply-shim-measure", ""), g.b.style.all = "initial", document.head.appendChild(g.b)), d = window.getComputedStyle(g.b).getPropertyValue(d)) : d = "apply-shim-inherit", h = d);d = h;e[b] = d;
      }return e;
    }function ra(a, c) {
      if (N) for (var b in c.i) b !== a.c && N(b);
    }
    function qa(a, c, b, d, e) {
      d && L(d, function (c, b) {
        b && a.a.get(b) && (e = "@apply " + b + ";");
      });if (!e) return c;var f = P(a, e),
          h = c.slice(0, c.indexOf("--")),
          g = f = Q(a, f),
          m = a.a.get(b),
          l = m && m.h;l ? g = Object.assign(Object.create(l), f) : a.a.set(b, g);var Y = [],
          w,
          Z = !1;for (w in g) {
        var E = f[w];void 0 === E && (E = "initial");!l || w in l || (Z = !0);Y.push("" + b + "_-_" + w + ": " + E);
      }Z && ra(a, m);m && (m.h = g);d && (h = c + ";" + h);return "" + h + Y.join("; ") + ";";
    }O.prototype.detectMixin = O.prototype.o;O.prototype.transformStyle = O.prototype.j;
    O.prototype.transformCustomStyle = O.prototype.f;O.prototype.transformRules = O.prototype.l;O.prototype.transformRule = O.prototype.g;O.prototype.transformTemplate = O.prototype.m;O.prototype._separator = "_-_";Object.defineProperty(O.prototype, "invalidCallback", { get: function () {
        return N;
      }, set: function (a) {
        N = a;
      } });var R = null,
        sa = window.HTMLImports && window.HTMLImports.whenReady || null,
        S;function ta(a) {
      requestAnimationFrame(function () {
        sa ? sa(a) : (R || (R = new Promise(function (a) {
          S = a;
        }), "complete" === document.readyState ? S() : document.addEventListener("readystatechange", function () {
          "complete" === document.readyState && S();
        })), R.then(function () {
          a && a();
        }));
      });
    };var T = new O();function U() {
      var a = this;this.a = null;ta(function () {
        V(a);
      });T.invalidCallback = ka;
    }function V(a) {
      a.a || (a.a = window.ShadyCSS.CustomStyleInterface, a.a && (a.a.transformCallback = function (a) {
        T.f(a);
      }, a.a.validateCallback = function () {
        requestAnimationFrame(function () {
          a.a.enqueued && W(a);
        });
      }));
    }U.prototype.prepareTemplate = function (a, c) {
      V(this);k[c] = a;c = T.m(a, c);a._styleAst = c;
    };
    function W(a) {
      V(a);if (a.a) {
        var c = a.a.processStyles();if (a.a.enqueued) {
          for (var b = 0; b < c.length; b++) {
            var d = a.a.getStyleForCustomStyle(c[b]);d && T.f(d);
          }a.a.enqueued = !1;
        }
      }
    }U.prototype.styleSubtree = function (a, c) {
      V(this);if (c) for (var b in c) null === b ? a.style.removeProperty(b) : a.style.setProperty(b, c[b]);if (a.shadowRoot) for (this.styleElement(a), a = a.shadowRoot.children || a.shadowRoot.childNodes, c = 0; c < a.length; c++) this.styleSubtree(a[c]);else for (a = a.children || a.childNodes, c = 0; c < a.length; c++) this.styleSubtree(a[c]);
    };
    U.prototype.styleElement = function (a) {
      V(this);var c = a.localName,
          b;c ? -1 < c.indexOf("-") ? b = c : b = a.getAttribute && a.getAttribute("is") || "" : b = a.is;if ((c = k[b]) && !z(c)) {
        if (z(c) || c._applyShimValidatingVersion !== c._applyShimNextVersion) this.prepareTemplate(c, b), la(c);if (a = a.shadowRoot) if (a = a.querySelector("style")) a.__cssRules = c._styleAst, a.textContent = I(c._styleAst);
      }
    };U.prototype.styleDocument = function (a) {
      V(this);this.styleSubtree(document.body, a);
    };
    if (!window.ShadyCSS || !window.ShadyCSS.ScopingShim) {
      var X = new U(),
          ua = window.ShadyCSS && window.ShadyCSS.CustomStyleInterface;window.ShadyCSS = { prepareTemplate: function (a, c) {
          W(X);X.prepareTemplate(a, c);
        }, styleSubtree: function (a, c) {
          W(X);X.styleSubtree(a, c);
        }, styleElement: function (a) {
          W(X);X.styleElement(a);
        }, styleDocument: function (a) {
          W(X);X.styleDocument(a);
        }, getComputedStyleValue: function (a, c) {
          return (a = window.getComputedStyle(a).getPropertyValue(c)) ? a.trim() : "";
        }, nativeCss: D, nativeShadow: A };ua && (window.ShadyCSS.CustomStyleInterface = ua);
    }window.ShadyCSS.ApplyShim = T;
  }).call(this);

  //# sourceMappingURL=apply-shim.min.js.map

  /***/
},
/* 6 */
/***/function (module, exports) {

  (function () {
    /*
    Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
    This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
    The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
    The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
    Code distributed by Google as part of the polymer project is also
    subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
    */
    'use strict';

    var c = !(window.ShadyDOM && window.ShadyDOM.inUse),
        f;function g(a) {
      f = a && a.shimcssproperties ? !1 : c || !(navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/) || !window.CSS || !CSS.supports || !CSS.supports("box-shadow", "0 0 0 var(--foo)"));
    }window.ShadyCSS && void 0 !== window.ShadyCSS.nativeCss ? f = window.ShadyCSS.nativeCss : window.ShadyCSS ? (g(window.ShadyCSS), window.ShadyCSS = void 0) : g(window.WebComponents && window.WebComponents.flags);var h = f;function k(a, b) {
      for (var d in b) null === d ? a.style.removeProperty(d) : a.style.setProperty(d, b[d]);
    };var l = null,
        m = window.HTMLImports && window.HTMLImports.whenReady || null,
        n;function p() {
      var a = q;requestAnimationFrame(function () {
        m ? m(a) : (l || (l = new Promise(function (a) {
          n = a;
        }), "complete" === document.readyState ? n() : document.addEventListener("readystatechange", function () {
          "complete" === document.readyState && n();
        })), l.then(function () {
          a && a();
        }));
      });
    };var r = null,
        q = null;function t() {
      this.customStyles = [];this.enqueued = !1;
    }function u(a) {
      !a.enqueued && q && (a.enqueued = !0, p());
    }t.prototype.c = function (a) {
      a.__seenByShadyCSS || (a.__seenByShadyCSS = !0, this.customStyles.push(a), u(this));
    };t.prototype.b = function (a) {
      if (a.__shadyCSSCachedStyle) return a.__shadyCSSCachedStyle;var b;a.getStyle ? b = a.getStyle() : b = a;return b;
    };
    t.prototype.a = function () {
      for (var a = this.customStyles, b = 0; b < a.length; b++) {
        var d = a[b];if (!d.__shadyCSSCachedStyle) {
          var e = this.b(d);e && (e = e.__appliedElement || e, r && r(e), d.__shadyCSSCachedStyle = e);
        }
      }return a;
    };t.prototype.addCustomStyle = t.prototype.c;t.prototype.getStyleForCustomStyle = t.prototype.b;t.prototype.processStyles = t.prototype.a;
    Object.defineProperties(t.prototype, { transformCallback: { get: function () {
          return r;
        }, set: function (a) {
          r = a;
        } }, validateCallback: { get: function () {
          return q;
        }, set: function (a) {
          var b = !1;q || (b = !0);q = a;b && u(this);
        } } });var v = new t();window.ShadyCSS || (window.ShadyCSS = { prepareTemplate: function () {}, styleSubtree: function (a, b) {
        v.a();k(a, b);
      }, styleElement: function () {
        v.a();
      }, styleDocument: function (a) {
        v.a();k(document.body, a);
      }, getComputedStyleValue: function (a, b) {
        return (a = window.getComputedStyle(a).getPropertyValue(b)) ? a.trim() : "";
      }, nativeCss: h, nativeShadow: c });window.ShadyCSS.CustomStyleInterface = v;
  }).call(this);

  //# sourceMappingURL=custom-style-interface.min.js.map

  /***/
},
/* 7 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";

  Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
  /* harmony import */var __WEBPACK_IMPORTED_MODULE_0__node_modules_lit_html_lit_html_js__ = __webpack_require__(8);

  const template = document.createElement('template');
  template.innerHTML = `
    <style>
        :host{
            display: block;
            --width: 400px; 
            --tw: 10px; 
            --th: 15px; 
            --bg: #25252B;
            --fill:#6C717E;
            --thumb: white;
        }
        #hz-range {
            position: relative;
        }
        
        input[type="range"] {
            position: absolute;
            height: 5px;
            width: var(--width);
            top: 0;
            left: 0px;
            padding: 10px 0px;
            margin: 0;
            -webkit-appearance: none;
            background: transparent;
            border: none;
            outline: none;
        }
        input[type="range"]:focus{
            box-shadow: 0 0 2px;
        }
        
    
        input[type="range"]::-ms-track {
            width: 100%;
            /* Hides the slider so custom styles can be added */
            background: transparent;
            border-color: transparent;
            color: transparent;
        }
    
        input[type=range]::-moz-range-track {
            width: 100%;
            background: transparent;
        }
    
        /* Special styling for WebKit/Blink */
        input[type=range]::-webkit-slider-thumb {
            -webkit-appearance: none;
            height: var(--tw);
            width: var(--th);
            background: transparent;
        }
    
        /* All the same stuff for Firefox */
        input[type=range]::-moz-range-thumb {
            height: var(--tw);
            width: var(--th);
            background: transparent;
            border: none;
        }
    
        /* All the same stuff for IE */
        input[type=range]::-ms-thumb {
            height: var(--tw);
            width: var(--th);
            background: transparent;
            border: none;
        }
    
    </style>
    <div id="hz-range">
        <input type="range">
        <div id="svg">
            Sorry, your browser does not support inline SVG.
        </div>
    </div>
  `;
  let ShadyCSS = window["ShadyCSS"];
  if (ShadyCSS) {
    ShadyCSS.prepareTemplate(template, 'hz-range');
  }
  class HzRange extends HTMLElement {
    constructor() {
      super();
      if (ShadyCSS) {
        ShadyCSS.styleElement(this);
      }
      this.attachShadow({ mode: 'open' });
      if (this.shadowRoot) {
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.inputRange = this.shadowRoot.querySelector("input[type='range']");
        this.svgRange = this.shadowRoot.querySelector("#svg");
        this._x1 = 5;
        this._x2 = 400;
        this._y1 = 17;
        this._y2 = 7;
        this.addOnChange();
      }
    }
    connectedCallback() {
      if (this.parentElement && this.inputRange) {
        this._x2 = this.parentElement.clientWidth - 10;
        this.style.setProperty('--width', this.parentElement.clientWidth + "px");
        this.render();
      }
    }
    addOnChange() {
      if (this.inputRange) {
        this._value = +this.inputRange.value;
        this.inputRange.addEventListener("input", e => {
          let target = e.currentTarget;
          this._value = +target.value;
          this.render();
          this.dispatchEvent(new CustomEvent('range-change', {
            bubbles: true,
            composed: true,
            detail: this._value
          }));
        });
      }
    }
    svgRangeTemplate() {
      const { _x1, _x2, _y1, _y2 } = this;
      let k = this._value / 100;
      const w = Math.max(_x2 * k, _x1);
      const h = _y1 - (_y1 - _y2) * k;
      const t = (5 + 5 * k) / 2;
      const basePoints = [[_x1, _y1], [_x2, _y1], [_x2, _y2]].join(" ");
      const rangePoints = [[_x1, _y1], [w, _y1], [w, h]].join(" ");
      const thumbPoints = [[w - t, _y1 + 4], [w + t, _y1 + 4], [w + t, h - 3], [w, h - 6], [w - t, h - 3]].join(" ");
      return __WEBPACK_IMPORTED_MODULE_0__node_modules_lit_html_lit_html_js__["a" /* html */]`
                    <svg height="${_y1 + 5}" width="${_x2 + 7}">
                        <defs>
                            <filter id="shadow">
                              <feDropShadow dx="0" dy="0" stdDeviation="1"/>
                            </filter>
                          </defs>
                        <polygon points="${basePoints}" style="fill:var(--bg);stroke: var(--bg); stroke-width: 2; stroke-linecap: round" />
                        <polygon points="${rangePoints}" style="fill:var(--fill);stroke: var(--fill); stroke-width: 2;stroke-linecap: round"/>
                        <polygon points="${thumbPoints}" style="fill:var(--thumb);" filter="url(#shadow)"/>
                    </svg>`;
    }
    render() {
      if (this.svgRange) {
        Object(__WEBPACK_IMPORTED_MODULE_0__node_modules_lit_html_lit_html_js__["b" /* render */])(this.svgRangeTemplate(), this.svgRange);
      }
    }
  }
  /* harmony export (immutable) */__webpack_exports__["default"] = HzRange;

  window.customElements.define('hz-range', HzRange);
  //# sourceMappingURL=HzRange.js.map

  /***/
},
/* 8 */
/***/function (module, __webpack_exports__, __webpack_require__) {

  "use strict";
  /* harmony export (immutable) */
  __webpack_exports__["b"] = render;
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  /**
   * TypeScript has a problem with precompiling templates literals
   * https://github.com/Microsoft/TypeScript/issues/17956
   *
   * TODO(justinfagnani): Run tests compiled to ES5 with both Babel and
   * TypeScript to verify correctness.
   */
  const envCachesTemplates = (t => t() === t())(() => (s => s)``);
  // The first argument to JS template tags retain identity across multiple
  // calls to a tag for the same literal, so we can cache work done per literal
  // in a Map.
  const templates = new Map();
  const svgTemplates = new Map();
  /**
   * Interprets a template literal as an HTML template that can efficiently
   * render to and update a container.
   */
  const html = (strings, ...values) => litTag(strings, values, templates, false);
  /* harmony export (immutable) */__webpack_exports__["a"] = html;

  /**
   * Interprets a template literal as an SVG template that can efficiently
   * render to and update a container.
   */
  const svg = (strings, ...values) => litTag(strings, values, svgTemplates, true);
  /* unused harmony export svg */

  function litTag(strings, values, templates, isSvg) {
    const key = envCachesTemplates ? strings : strings.join('{{--uniqueness-workaround--}}');
    let template = templates.get(key);
    if (template === undefined) {
      template = new Template(strings, isSvg);
      templates.set(key, template);
    }
    return new TemplateResult(template, values);
  }
  /**
   * The return type of `html`, which holds a Template and the values from
   * interpolated expressions.
   */
  class TemplateResult {
    constructor(template, values) {
      this.template = template;
      this.values = values;
    }
  }
  /* unused harmony export TemplateResult */

  /**
   * Renders a template to a container.
   *
   * To update a container with new values, reevaluate the template literal and
   * call `render` with the new result.
   */
  function render(result, container, partCallback = defaultPartCallback) {
    let instance = container.__templateInstance;
    // Repeat render, just call update()
    if (instance !== undefined && instance.template === result.template && instance._partCallback === partCallback) {
      instance.update(result.values);
      return;
    }
    // First render, create a new TemplateInstance and append it
    instance = new TemplateInstance(result.template, partCallback);
    container.__templateInstance = instance;
    const fragment = instance._clone();
    instance.update(result.values);
    let child;
    while (child = container.lastChild) {
      container.removeChild(child);
    }
    container.appendChild(fragment);
  }
  /**
   * An expression marker with embedded unique key to avoid
   * https://github.com/PolymerLabs/lit-html/issues/62
   */
  const attributeMarker = `{{lit-${Math.random()}}}`;
  /**
   * Regex to scan the string preceding an expression to see if we're in a text
   * context, and not an attribute context.
   *
   * This works by seeing if we have a `>` not followed by a `<`. If there is a
   * `<` closer to the end of the strings, then we're inside a tag.
   */
  const textRegex = />[^<]*$/;
  const hasTagsRegex = /[^<]*/;
  const textMarkerContent = '_-lit-html-_';
  const textMarker = `<!--${textMarkerContent}-->`;
  const attrOrTextRegex = new RegExp(`${attributeMarker}|${textMarker}`);
  /**
   * A placeholder for a dynamic expression in an HTML template.
   *
   * There are two built-in part types: AttributePart and NodePart. NodeParts
   * always represent a single dynamic expression, while AttributeParts may
   * represent as many expressions are contained in the attribute.
   *
   * A Template's parts are mutable, so parts can be replaced or modified
   * (possibly to implement different template semantics). The contract is that
   * parts can only be replaced, not removed, added or reordered, and parts must
   * always consume the correct number of values in their `update()` method.
   *
   * TODO(justinfagnani): That requirement is a little fragile. A
   * TemplateInstance could instead be more careful about which values it gives
   * to Part.update().
   */
  class TemplatePart {
    constructor(type, index, name, rawName, strings) {
      this.type = type;
      this.index = index;
      this.name = name;
      this.rawName = rawName;
      this.strings = strings;
    }
  }
  /* unused harmony export TemplatePart */

  class Template {
    constructor(strings, svg = false) {
      this.parts = [];
      this.svg = svg;
      this.element = document.createElement('template');
      this.element.innerHTML = this._getHtml(strings, svg);
      // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be null
      const walker = document.createTreeWalker(this.element.content, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT |
                                                                         NodeFilter.SHOW_TEXT */, null, false);
      let index = -1;
      let partIndex = 0;
      const nodesToRemove = [];
      // The actual previous node, accounting for removals: if a node is removed
      // it will never be the previousNode.
      let previousNode;
      // Used to set previousNode at the top of the loop.
      let currentNode;
      while (walker.nextNode()) {
        index++;
        previousNode = currentNode;
        const node = currentNode = walker.currentNode;
        if (node.nodeType === 1 /* Node.ELEMENT_NODE */) {
            if (!node.hasAttributes()) {
              continue;
            }
            const attributes = node.attributes;
            for (let i = 0; i < attributes.length; i++) {
              const attribute = attributes.item(i);
              const attributeStrings = attribute.value.split(attrOrTextRegex);
              if (attributeStrings.length > 1) {
                // Get the template literal section leading up to the first
                // expression in this attribute attribute
                const attributeString = strings[partIndex];
                // Trim the trailing literal value if this is an interpolation
                const rawNameString = attributeString.substring(0, attributeString.length - attributeStrings[0].length);
                // Find the attribute name
                const rawName = rawNameString.match(/((?:\w|[.\-_$])+)=["']?$/)[1];
                this.parts.push(new TemplatePart('attribute', index, attribute.name, rawName, attributeStrings));
                node.removeAttribute(attribute.name);
                partIndex += attributeStrings.length - 1;
                i--;
              }
            }
          } else if (node.nodeType === 3 /* Node.TEXT_NODE */) {
            const nodeValue = node.nodeValue;
            const strings = nodeValue.split(attributeMarker);
            if (strings.length > 1) {
              const parent = node.parentNode;
              const lastIndex = strings.length - 1;
              // We have a part for each match found
              partIndex += lastIndex;
              // We keep this current node, but reset its content to the last
              // literal part. We insert new literal nodes before this so that the
              // tree walker keeps its position correctly.
              node.textContent = strings[lastIndex];
              // Generate a new text node for each literal section
              // These nodes are also used as the markers for node parts
              for (let i = 0; i < lastIndex; i++) {
                parent.insertBefore(document.createTextNode(strings[i]), node);
                this.parts.push(new TemplatePart('node', index++));
              }
            } else {
              // Strip whitespace-only nodes, only between elements, or at the
              // beginning or end of elements.
              const previousSibling = node.previousSibling;
              const nextSibling = node.nextSibling;
              if ((previousSibling === null || previousSibling.nodeType === 1 /* Node.ELEMENT_NODE */) && (nextSibling === null || nextSibling.nodeType === 1 /* Node.ELEMENT_NODE */) && nodeValue.trim() === '') {
                nodesToRemove.push(node);
                currentNode = previousNode;
                index--;
              }
            }
          } else if (node.nodeType === 8 /* Node.COMMENT_NODE */ && node.nodeValue === textMarkerContent) {
          const parent = node.parentNode;
          // If we don't have a previous node add a marker node.
          // If the previousSibling is removed, because it's another part
          // placholder, or empty text, add a marker node.
          if (node.previousSibling === null || node.previousSibling !== previousNode) {
            parent.insertBefore(new Text(), node);
          } else {
            index--;
          }
          this.parts.push(new TemplatePart('node', index++));
          nodesToRemove.push(node);
          // If we don't have a next node add a marker node.
          // We don't have to check if the next node is going to be removed,
          // because that node will induce a marker if so.
          if (node.nextSibling === null) {
            parent.insertBefore(new Text(), node);
          } else {
            index--;
          }
          currentNode = previousNode;
          partIndex++;
        }
      }
      // Remove text binding nodes after the walk to not disturb the TreeWalker
      for (const n of nodesToRemove) {
        n.parentNode.removeChild(n);
      }
    }
    /**
     * Returns a string of HTML used to create a <template> element.
     */
    _getHtml(strings, svg) {
      const l = strings.length;
      const a = [];
      let isTextBinding = false;
      for (let i = 0; i < l - 1; i++) {
        const s = strings[i];
        a.push(s);
        // We're in a text position if the previous string matches the
        // textRegex. If it doesn't and the previous string has no tags, then
        // we use the previous text position state.
        isTextBinding = s.match(textRegex) !== null || s.match(hasTagsRegex) !== null && isTextBinding;
        a.push(isTextBinding ? textMarker : attributeMarker);
      }
      a.push(strings[l - 1]);
      const html = a.join('');
      return svg ? `<svg>${html}</svg>` : html;
    }
  }
  /* unused harmony export Template */

  const getValue = (part, value) => {
    // `null` as the value of a Text node will render the string 'null'
    // so we convert it to undefined
    if (value != null && value.__litDirective === true) {
      value = value(part);
    }
    return value === null ? undefined : value;
  };
  /* unused harmony export getValue */

  const directive = f => {
    f.__litDirective = true;
    return f;
  };
  /* unused harmony export directive */

  class AttributePart {
    constructor(instance, element, name, strings) {
      this.instance = instance;
      this.element = element;
      this.name = name;
      this.strings = strings;
      this.size = strings.length - 1;
    }
    setValue(values, startIndex) {
      const strings = this.strings;
      let text = '';
      for (let i = 0; i < strings.length; i++) {
        text += strings[i];
        if (i < strings.length - 1) {
          const v = getValue(this, values[startIndex + i]);
          if (v && (Array.isArray(v) || typeof v !== 'string' && v[Symbol.iterator])) {
            for (const t of v) {
              // TODO: we need to recursively call getValue into iterables...
              text += t;
            }
          } else {
            text += v;
          }
        }
      }
      this.element.setAttribute(this.name, text);
    }
  }
  /* unused harmony export AttributePart */

  class NodePart {
    constructor(instance, startNode, endNode) {
      this.instance = instance;
      this.startNode = startNode;
      this.endNode = endNode;
      this._previousValue = undefined;
    }
    setValue(value) {
      value = getValue(this, value);
      if (value === null || !(typeof value === 'object' || typeof value === 'function')) {
        // Handle primitive values
        // If the value didn't change, do nothing
        if (value === this._previousValue) {
          return;
        }
        this._setText(value);
      } else if (value instanceof TemplateResult) {
        this._setTemplateResult(value);
      } else if (Array.isArray(value) || value[Symbol.iterator]) {
        this._setIterable(value);
      } else if (value instanceof Node) {
        this._setNode(value);
      } else if (value.then !== undefined) {
        this._setPromise(value);
      } else {
        // Fallback, will render the string representation
        this._setText(value);
      }
    }
    _insert(node) {
      this.endNode.parentNode.insertBefore(node, this.endNode);
    }
    _setNode(value) {
      this.clear();
      this._insert(value);
      this._previousValue = value;
    }
    _setText(value) {
      const node = this.startNode.nextSibling;
      if (node === this.endNode.previousSibling && node.nodeType === Node.TEXT_NODE) {
        // If we only have a single text node between the markers, we can just
        // set its value, rather than replacing it.
        // TODO(justinfagnani): Can we just check if _previousValue is
        // primitive?
        node.textContent = value;
      } else {
        this._setNode(document.createTextNode(value === undefined ? '' : value));
      }
      this._previousValue = value;
    }
    _setTemplateResult(value) {
      let instance;
      if (this._previousValue && this._previousValue.template === value.template) {
        instance = this._previousValue;
      } else {
        instance = new TemplateInstance(value.template, this.instance._partCallback);
        this._setNode(instance._clone());
        this._previousValue = instance;
      }
      instance.update(value.values);
    }
    _setIterable(value) {
      // For an Iterable, we create a new InstancePart per item, then set its
      // value to the item. This is a little bit of overhead for every item in
      // an Iterable, but it lets us recurse easily and efficiently update Arrays
      // of TemplateResults that will be commonly returned from expressions like:
      // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
      // If _previousValue is an array, then the previous render was of an
      // iterable and _previousValue will contain the NodeParts from the previous
      // render. If _previousValue is not an array, clear this part and make a new
      // array for NodeParts.
      if (!Array.isArray(this._previousValue)) {
        this.clear();
        this._previousValue = [];
      }
      // Lets us keep track of how many items we stamped so we can clear leftover
      // items from a previous render
      const itemParts = this._previousValue;
      let partIndex = 0;
      for (const item of value) {
        // Try to reuse an existing part
        let itemPart = itemParts[partIndex];
        // If no existing part, create a new one
        if (itemPart === undefined) {
          // If we're creating the first item part, it's startNode should be the
          // container's startNode
          let itemStart = this.startNode;
          // If we're not creating the first part, create a new separator marker
          // node, and fix up the previous part's endNode to point to it
          if (partIndex > 0) {
            const previousPart = itemParts[partIndex - 1];
            itemStart = previousPart.endNode = document.createTextNode('');
            this._insert(itemStart);
          }
          itemPart = new NodePart(this.instance, itemStart, this.endNode);
          itemParts.push(itemPart);
        }
        itemPart.setValue(item);
        partIndex++;
      }
      if (partIndex === 0) {
        this.clear();
        this._previousValue = undefined;
      } else if (partIndex < itemParts.length) {
        const lastPart = itemParts[partIndex - 1];
        // Truncate the parts array so _previousValue reflects the current state
        itemParts.length = partIndex;
        this.clear(lastPart.endNode.previousSibling);
        lastPart.endNode = this.endNode;
      }
    }
    _setPromise(value) {
      value.then(v => {
        if (this._previousValue === value) {
          this.setValue(v);
        }
      });
      this._previousValue = value;
    }
    clear(startNode = this.startNode) {
      let node;
      while ((node = startNode.nextSibling) !== this.endNode) {
        node.parentNode.removeChild(node);
      }
    }
  }
  /* unused harmony export NodePart */

  const defaultPartCallback = (instance, templatePart, node) => {
    if (templatePart.type === 'attribute') {
      return new AttributePart(instance, node, templatePart.name, templatePart.strings);
    } else if (templatePart.type === 'node') {
      return new NodePart(instance, node, node.nextSibling);
    }
    throw new Error(`Unknown part type ${templatePart.type}`);
  };
  /* unused harmony export defaultPartCallback */

  /**
   * An instance of a `Template` that can be attached to the DOM and updated
   * with new values.
   */
  class TemplateInstance {
    constructor(template, partCallback = defaultPartCallback) {
      this._parts = [];
      this.template = template;
      this._partCallback = partCallback;
    }
    update(values) {
      let valueIndex = 0;
      for (const part of this._parts) {
        if (part.size === undefined) {
          part.setValue(values[valueIndex]);
          valueIndex++;
        } else {
          part.setValue(values, valueIndex);
          valueIndex += part.size;
        }
      }
    }
    _clone() {
      const fragment = document.importNode(this.template.element.content, true);
      if (this.template.parts.length > 0) {
        // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
        // null
        const walker = document.createTreeWalker(fragment, 133 /* NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT */, null, false);
        const parts = this.template.parts;
        let index = 0;
        let partIndex = 0;
        let templatePart = parts[0];
        let node = walker.nextNode();
        while (node != null && partIndex < parts.length) {
          if (index === templatePart.index) {
            this._parts.push(this._partCallback(this, templatePart, node));
            templatePart = parts[++partIndex];
          } else {
            index++;
            node = walker.nextNode();
          }
        }
      }
      if (this.template.svg) {
        const svgElement = fragment.firstChild;
        fragment.removeChild(svgElement);
        const nodes = svgElement.childNodes;
        for (let i = 0; i < nodes.length; i++) {
          fragment.appendChild(nodes.item(i));
        }
      }
      return fragment;
    }
  }
  /* unused harmony export TemplateInstance */

  //# sourceMappingURL=lit-html.js.map

  /***/
}]
/******/);

/***/ })
/******/ ]);