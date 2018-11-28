'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

(function webpackUniversalModuleDefinition(root, factory) {
  if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && (typeof module === 'undefined' ? 'undefined' : _typeof(module)) === 'object') module.exports = factory();else if (typeof define === 'function' && define.amd) define("Draggable", [], factory);else if ((typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object') exports["Draggable"] = factory();else root["Draggable"] = factory();
})(window, function () {
  return (/******/function (modules) {
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
          /******/Object.defineProperty(exports, name, { enumerable: true, get: getter });
          /******/
        }
        /******/
      };
      /******/
      /******/ // define __esModule on exports
      /******/__webpack_require__.r = function (exports) {
        /******/if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
          /******/Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
          /******/
        }
        /******/Object.defineProperty(exports, '__esModule', { value: true });
        /******/
      };
      /******/
      /******/ // create a fake namespace object
      /******/ // mode & 1: value is a module id, require it
      /******/ // mode & 2: merge all properties of value into the ns
      /******/ // mode & 4: return value when already ns object
      /******/ // mode & 8|1: behave like require
      /******/__webpack_require__.t = function (value, mode) {
        /******/if (mode & 1) value = __webpack_require__(value);
        /******/if (mode & 8) return value;
        /******/if (mode & 4 && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value && value.__esModule) return value;
        /******/var ns = Object.create(null);
        /******/__webpack_require__.r(ns);
        /******/Object.defineProperty(ns, 'default', { enumerable: true, value: value });
        /******/if (mode & 2 && typeof value != 'string') for (var key in value) {
          __webpack_require__.d(ns, key, function (key) {
            return value[key];
          }.bind(null, key));
        } /******/return ns;
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
      /******/
      /******/ // Load entry module and return exports
      /******/return __webpack_require__(__webpack_require__.s = 154);
      /******/
    }(
    /************************************************************************/
    /******/[
    /* 0 */
    /***/function (module, exports, __webpack_require__) {

      var store = __webpack_require__(36)('wks');
      var uid = __webpack_require__(22);
      var _Symbol = __webpack_require__(1).Symbol;
      var USE_SYMBOL = typeof _Symbol == 'function';

      var $exports = module.exports = function (name) {
        return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
      };

      $exports.store = store;

      /***/
    },
    /* 1 */
    /***/function (module, exports) {

      // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
      var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self
      // eslint-disable-next-line no-new-func
      : Function('return this')();
      if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


      /***/
    },
    /* 2 */
    /***/function (module, exports) {

      var core = module.exports = { version: '2.5.7' };
      if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


      /***/
    },
    /* 3 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _AbstractEvent = __webpack_require__(112);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _AbstractEvent2.default;

      /***/
    },
    /* 4 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _AbstractPlugin = __webpack_require__(111);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _AbstractPlugin2.default;

      /***/
    },
    /* 5 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _closest = __webpack_require__(107);

      Object.defineProperty(exports, 'closest', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_closest).default;
        }
      });

      var _requestNextAnimationFrame = __webpack_require__(105);

      Object.defineProperty(exports, 'requestNextAnimationFrame', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_requestNextAnimationFrame).default;
        }
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /***/
    },
    /* 6 */
    /***/function (module, exports, __webpack_require__) {

      var isObject = __webpack_require__(8);
      module.exports = function (it) {
        if (!isObject(it)) throw TypeError(it + ' is not an object!');
        return it;
      };

      /***/
    },
    /* 7 */
    /***/function (module, exports, __webpack_require__) {

      // to indexed object, toObject with fallback for non-array-like ES3 strings
      var IObject = __webpack_require__(58);
      var defined = __webpack_require__(35);
      module.exports = function (it) {
        return IObject(defined(it));
      };

      /***/
    },
    /* 8 */
    /***/function (module, exports) {

      module.exports = function (it) {
        return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) === 'object' ? it !== null : typeof it === 'function';
      };

      /***/
    },
    /* 9 */
    /***/function (module, exports, __webpack_require__) {

      var anObject = __webpack_require__(6);
      var IE8_DOM_DEFINE = __webpack_require__(61);
      var toPrimitive = __webpack_require__(37);
      var dP = Object.defineProperty;

      exports.f = __webpack_require__(11) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (IE8_DOM_DEFINE) try {
          return dP(O, P, Attributes);
        } catch (e) {/* empty */}
        if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
        if ('value' in Attributes) O[P] = Attributes.value;
        return O;
      };

      /***/
    },
    /* 10 */
    /***/function (module, exports, __webpack_require__) {

      var dP = __webpack_require__(9);
      var createDesc = __webpack_require__(28);
      module.exports = __webpack_require__(11) ? function (object, key, value) {
        return dP.f(object, key, createDesc(1, value));
      } : function (object, key, value) {
        object[key] = value;
        return object;
      };

      /***/
    },
    /* 11 */
    /***/function (module, exports, __webpack_require__) {

      // Thank's IE8 for his funny defineProperty
      module.exports = !__webpack_require__(23)(function () {
        return Object.defineProperty({}, 'a', { get: function get() {
            return 7;
          } }).a != 7;
      });

      /***/
    },
    /* 12 */
    /***/function (module, exports) {

      var hasOwnProperty = {}.hasOwnProperty;
      module.exports = function (it, key) {
        return hasOwnProperty.call(it, key);
      };

      /***/
    },
    /* 13 */
    /***/function (module, exports, __webpack_require__) {

      // 19.1.2.14 / 15.2.3.14 Object.keys(O)
      var $keys = __webpack_require__(59);
      var enumBugKeys = __webpack_require__(32);

      module.exports = Object.keys || function keys(O) {
        return $keys(O, enumBugKeys);
      };

      /***/
    },
    /* 14 */
    /***/function (module, exports, __webpack_require__) {

      var global = __webpack_require__(1);
      var hide = __webpack_require__(10);
      var has = __webpack_require__(12);
      var SRC = __webpack_require__(22)('src');
      var TO_STRING = 'toString';
      var $toString = Function[TO_STRING];
      var TPL = ('' + $toString).split(TO_STRING);

      __webpack_require__(2).inspectSource = function (it) {
        return $toString.call(it);
      };

      (module.exports = function (O, key, val, safe) {
        var isFunction = typeof val == 'function';
        if (isFunction) has(val, 'name') || hide(val, 'name', key);
        if (O[key] === val) return;
        if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
        if (O === global) {
          O[key] = val;
        } else if (!safe) {
          delete O[key];
          hide(O, key, val);
        } else if (O[key]) {
          O[key] = val;
        } else {
          hide(O, key, val);
        }
        // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
      })(Function.prototype, TO_STRING, function toString() {
        return typeof this == 'function' && this[SRC] || $toString.call(this);
      });

      /***/
    },
    /* 15 */
    /***/function (module, exports, __webpack_require__) {

      var global = __webpack_require__(1);
      var core = __webpack_require__(2);
      var hide = __webpack_require__(10);
      var redefine = __webpack_require__(14);
      var ctx = __webpack_require__(27);
      var PROTOTYPE = 'prototype';

      var $export = function $export(type, name, source) {
        var IS_FORCED = type & $export.F;
        var IS_GLOBAL = type & $export.G;
        var IS_STATIC = type & $export.S;
        var IS_PROTO = type & $export.P;
        var IS_BIND = type & $export.B;
        var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
        var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
        var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
        var key, own, out, exp;
        if (IS_GLOBAL) source = name;
        for (key in source) {
          // contains in native
          own = !IS_FORCED && target && target[key] !== undefined;
          // export native or passed
          out = (own ? target : source)[key];
          // bind timers to global for call from export context
          exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
          // extend global
          if (target) redefine(target, key, out, type & $export.U);
          // export
          if (exports[key] != out) hide(exports, key, exp);
          if (IS_PROTO && expProto[key] != out) expProto[key] = out;
        }
      };
      global.core = core;
      // type bitmap
      $export.F = 1; // forced
      $export.G = 2; // global
      $export.S = 4; // static
      $export.P = 8; // proto
      $export.B = 16; // bind
      $export.W = 32; // wrap
      $export.U = 64; // safe
      $export.R = 128; // real proto method for `library`
      module.exports = $export;

      /***/
    },
    /* 16 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _SensorEvent = __webpack_require__(103);

      Object.keys(_SensorEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _SensorEvent[key];
          }
        });
      });

      /***/
    },
    /* 17 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Sensor = __webpack_require__(110);

      var _Sensor2 = _interopRequireDefault(_Sensor);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _Sensor2.default;

      /***/
    },
    /* 18 */
    /***/function (module, exports) {

      module.exports = {};

      /***/
    },
    /* 19 */
    /***/function (module, exports) {

      exports.f = {}.propertyIsEnumerable;

      /***/
    },
    /* 20 */
    /***/function (module, exports) {

      var toString = {}.toString;

      module.exports = function (it) {
        return toString.call(it).slice(8, -1);
      };

      /***/
    },
    /* 21 */
    /***/function (module, exports) {

      module.exports = false;

      /***/
    },
    /* 22 */
    /***/function (module, exports) {

      var id = 0;
      var px = Math.random();
      module.exports = function (key) {
        return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
      };

      /***/
    },
    /* 23 */
    /***/function (module, exports) {

      module.exports = function (exec) {
        try {
          return !!exec();
        } catch (e) {
          return true;
        }
      };

      /***/
    },
    /* 24 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _DragEvent = __webpack_require__(44);

      Object.keys(_DragEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _DragEvent[key];
          }
        });
      });

      var _DraggableEvent = __webpack_require__(43);

      Object.keys(_DraggableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _DraggableEvent[key];
          }
        });
      });

      var _Plugins = __webpack_require__(42);

      Object.keys(_Plugins).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _Plugins[key];
          }
        });
      });

      var _Sensors = __webpack_require__(29);

      Object.keys(_Sensors).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _Sensors[key];
          }
        });
      });

      var _Draggable = __webpack_require__(73);

      var _Draggable2 = _interopRequireDefault(_Draggable);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _Draggable2.default;

      /***/
    },
    /* 25 */
    /***/function (module, exports, __webpack_require__) {

      var def = __webpack_require__(9).f;
      var has = __webpack_require__(12);
      var TAG = __webpack_require__(0)('toStringTag');

      module.exports = function (it, tag, stat) {
        if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
      };

      /***/
    },
    /* 26 */
    /***/function (module, exports) {

      module.exports = function (it) {
        if (typeof it != 'function') throw TypeError(it + ' is not a function!');
        return it;
      };

      /***/
    },
    /* 27 */
    /***/function (module, exports, __webpack_require__) {

      // optional / simple context binding
      var aFunction = __webpack_require__(26);
      module.exports = function (fn, that, length) {
        aFunction(fn);
        if (that === undefined) return fn;
        switch (length) {
          case 1:
            return function (a) {
              return fn.call(that, a);
            };
          case 2:
            return function (a, b) {
              return fn.call(that, a, b);
            };
          case 3:
            return function (a, b, c) {
              return fn.call(that, a, b, c);
            };
        }
        return function () /* ...args */{
          return fn.apply(that, arguments);
        };
      };

      /***/
    },
    /* 28 */
    /***/function (module, exports) {

      module.exports = function (bitmap, value) {
        return {
          enumerable: !(bitmap & 1),
          configurable: !(bitmap & 2),
          writable: !(bitmap & 4),
          value: value
        };
      };

      /***/
    },
    /* 29 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Sensor = __webpack_require__(17);

      Object.defineProperty(exports, 'Sensor', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Sensor).default;
        }
      });

      var _MouseSensor = __webpack_require__(109);

      Object.defineProperty(exports, 'MouseSensor', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_MouseSensor).default;
        }
      });

      var _TouchSensor = __webpack_require__(102);

      Object.defineProperty(exports, 'TouchSensor', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_TouchSensor).default;
        }
      });

      var _DragSensor = __webpack_require__(100);

      Object.defineProperty(exports, 'DragSensor', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_DragSensor).default;
        }
      });

      var _ForceTouchSensor = __webpack_require__(98);

      Object.defineProperty(exports, 'ForceTouchSensor', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_ForceTouchSensor).default;
        }
      });

      var _SensorEvent = __webpack_require__(16);

      Object.keys(_SensorEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _SensorEvent[key];
          }
        });
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /***/
    },
    /* 30 */
    /***/function (module, exports, __webpack_require__) {

      // getting tag from 19.1.3.6 Object.prototype.toString()
      var cof = __webpack_require__(20);
      var TAG = __webpack_require__(0)('toStringTag');
      // ES3 wrong here
      var ARG = cof(function () {
        return arguments;
      }()) == 'Arguments';

      // fallback for IE11 Script Access Denied error
      var tryGet = function tryGet(it, key) {
        try {
          return it[key];
        } catch (e) {/* empty */}
      };

      module.exports = function (it) {
        var O, T, B;
        return it === undefined ? 'Undefined' : it === null ? 'Null'
        // @@toStringTag case
        : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
        // builtinTag case
        : ARG ? cof(O)
        // ES3 arguments fallback
        : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
      };

      /***/
    },
    /* 31 */
    /***/function (module, exports) {

      exports.f = Object.getOwnPropertySymbols;

      /***/
    },
    /* 32 */
    /***/function (module, exports) {

      // IE 8- don't enum bug keys
      module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

      /***/
    },
    /* 33 */
    /***/function (module, exports, __webpack_require__) {

      var shared = __webpack_require__(36)('keys');
      var uid = __webpack_require__(22);
      module.exports = function (key) {
        return shared[key] || (shared[key] = uid(key));
      };

      /***/
    },
    /* 34 */
    /***/function (module, exports) {

      // 7.1.4 ToInteger
      var ceil = Math.ceil;
      var floor = Math.floor;
      module.exports = function (it) {
        return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
      };

      /***/
    },
    /* 35 */
    /***/function (module, exports) {

      // 7.2.1 RequireObjectCoercible(argument)
      module.exports = function (it) {
        if (it == undefined) throw TypeError("Can't call method on  " + it);
        return it;
      };

      /***/
    },
    /* 36 */
    /***/function (module, exports, __webpack_require__) {

      var core = __webpack_require__(2);
      var global = __webpack_require__(1);
      var SHARED = '__core-js_shared__';
      var store = global[SHARED] || (global[SHARED] = {});

      (module.exports = function (key, value) {
        return store[key] || (store[key] = value !== undefined ? value : {});
      })('versions', []).push({
        version: core.version,
        mode: __webpack_require__(21) ? 'pure' : 'global',
        copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
      });

      /***/
    },
    /* 37 */
    /***/function (module, exports, __webpack_require__) {

      // 7.1.1 ToPrimitive(input [, PreferredType])
      var isObject = __webpack_require__(8);
      // instead of the ES6 spec version, we didn't implement @@toPrimitive case
      // and the second argument - flag - preferred type is a string
      module.exports = function (it, S) {
        if (!isObject(it)) return it;
        var fn, val;
        if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
        if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
        if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
        throw TypeError("Can't convert object to primitive value");
      };

      /***/
    },
    /* 38 */
    /***/function (module, exports, __webpack_require__) {

      var isObject = __webpack_require__(8);
      var document = __webpack_require__(1).document;
      // typeof document.createElement is 'object' in old IE
      var is = isObject(document) && isObject(document.createElement);
      module.exports = function (it) {
        return is ? document.createElement(it) : {};
      };

      /***/
    },
    /* 39 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _SortableEvent = __webpack_require__(63);

      Object.keys(_SortableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _SortableEvent[key];
          }
        });
      });

      /***/
    },
    /* 40 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _SwappableEvent = __webpack_require__(66);

      Object.keys(_SwappableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _SwappableEvent[key];
          }
        });
      });

      /***/
    },
    /* 41 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _DroppableEvent = __webpack_require__(69);

      Object.keys(_DroppableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _DroppableEvent[key];
          }
        });
      });

      /***/
    },
    /* 42 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Announcement = __webpack_require__(83);

      Object.defineProperty(exports, 'Announcement', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Announcement).default;
        }
      });
      Object.defineProperty(exports, 'defaultAnnouncementOptions', {
        enumerable: true,
        get: function get() {
          return _Announcement.defaultOptions;
        }
      });

      var _Focusable = __webpack_require__(81);

      Object.defineProperty(exports, 'Focusable', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Focusable).default;
        }
      });

      var _Mirror = __webpack_require__(79);

      Object.defineProperty(exports, 'Mirror', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Mirror).default;
        }
      });
      Object.defineProperty(exports, 'defaultMirrorOptions', {
        enumerable: true,
        get: function get() {
          return _Mirror.defaultOptions;
        }
      });

      var _Scrollable = __webpack_require__(75);

      Object.defineProperty(exports, 'Scrollable', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Scrollable).default;
        }
      });
      Object.defineProperty(exports, 'defaultScrollableOptions', {
        enumerable: true,
        get: function get() {
          return _Scrollable.defaultOptions;
        }
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /***/
    },
    /* 43 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _DraggableEvent = __webpack_require__(84);

      Object.keys(_DraggableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _DraggableEvent[key];
          }
        });
      });

      /***/
    },
    /* 44 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _DragEvent = __webpack_require__(85);

      Object.keys(_DragEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _DragEvent[key];
          }
        });
      });

      /***/
    },
    /* 45 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _SnappableEvent = __webpack_require__(89);

      Object.keys(_SnappableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _SnappableEvent[key];
          }
        });
      });

      /***/
    },
    /* 46 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _CollidableEvent = __webpack_require__(94);

      Object.keys(_CollidableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _CollidableEvent[key];
          }
        });
      });

      /***/
    },
    /* 47 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      // 25.4.1.5 NewPromiseCapability(C)

      var aFunction = __webpack_require__(26);

      function PromiseCapability(C) {
        var resolve, reject;
        this.promise = new C(function ($$resolve, $$reject) {
          if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
          resolve = $$resolve;
          reject = $$reject;
        });
        this.resolve = aFunction(resolve);
        this.reject = aFunction(reject);
      }

      module.exports.f = function (C) {
        return new PromiseCapability(C);
      };

      /***/
    },
    /* 48 */
    /***/function (module, exports, __webpack_require__) {

      var ctx = __webpack_require__(27);
      var invoke = __webpack_require__(128);
      var html = __webpack_require__(54);
      var cel = __webpack_require__(38);
      var global = __webpack_require__(1);
      var process = global.process;
      var setTask = global.setImmediate;
      var clearTask = global.clearImmediate;
      var MessageChannel = global.MessageChannel;
      var Dispatch = global.Dispatch;
      var counter = 0;
      var queue = {};
      var ONREADYSTATECHANGE = 'onreadystatechange';
      var defer, channel, port;
      var run = function run() {
        var id = +this;
        // eslint-disable-next-line no-prototype-builtins
        if (queue.hasOwnProperty(id)) {
          var fn = queue[id];
          delete queue[id];
          fn();
        }
      };
      var listener = function listener(event) {
        run.call(event.data);
      };
      // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
      if (!setTask || !clearTask) {
        setTask = function setImmediate(fn) {
          var args = [];
          var i = 1;
          while (arguments.length > i) {
            args.push(arguments[i++]);
          }queue[++counter] = function () {
            // eslint-disable-next-line no-new-func
            invoke(typeof fn == 'function' ? fn : Function(fn), args);
          };
          defer(counter);
          return counter;
        };
        clearTask = function clearImmediate(id) {
          delete queue[id];
        };
        // Node.js 0.8-
        if (__webpack_require__(20)(process) == 'process') {
          defer = function defer(id) {
            process.nextTick(ctx(run, id, 1));
          };
          // Sphere (JS game engine) Dispatch API
        } else if (Dispatch && Dispatch.now) {
          defer = function defer(id) {
            Dispatch.now(ctx(run, id, 1));
          };
          // Browsers with MessageChannel, includes WebWorkers
        } else if (MessageChannel) {
          channel = new MessageChannel();
          port = channel.port2;
          channel.port1.onmessage = listener;
          defer = ctx(port.postMessage, port, 1);
          // Browsers with postMessage, skip WebWorkers
          // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
        } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
          defer = function defer(id) {
            global.postMessage(id + '', '*');
          };
          global.addEventListener('message', listener, false);
          // IE8-
        } else if (ONREADYSTATECHANGE in cel('script')) {
          defer = function defer(id) {
            html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
              html.removeChild(this);
              run.call(id);
            };
          };
          // Rest old browsers
        } else {
          defer = function defer(id) {
            setTimeout(ctx(run, id, 1), 0);
          };
        }
      }
      module.exports = {
        set: setTask,
        clear: clearTask
      };

      /***/
    },
    /* 49 */
    /***/function (module, exports, __webpack_require__) {

      // 22.1.3.31 Array.prototype[@@unscopables]
      var UNSCOPABLES = __webpack_require__(0)('unscopables');
      var ArrayProto = Array.prototype;
      if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
      module.exports = function (key) {
        ArrayProto[UNSCOPABLES][key] = true;
      };

      /***/
    },
    /* 50 */
    /***/function (module, exports, __webpack_require__) {

      // 7.1.13 ToObject(argument)
      var defined = __webpack_require__(35);
      module.exports = function (it) {
        return Object(defined(it));
      };

      /***/
    },
    /* 51 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var LIBRARY = __webpack_require__(21);
      var $export = __webpack_require__(15);
      var redefine = __webpack_require__(14);
      var hide = __webpack_require__(10);
      var Iterators = __webpack_require__(18);
      var $iterCreate = __webpack_require__(140);
      var setToStringTag = __webpack_require__(25);
      var getPrototypeOf = __webpack_require__(139);
      var ITERATOR = __webpack_require__(0)('iterator');
      var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
      var FF_ITERATOR = '@@iterator';
      var KEYS = 'keys';
      var VALUES = 'values';

      var returnThis = function returnThis() {
        return this;
      };

      module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
        $iterCreate(Constructor, NAME, next);
        var getMethod = function getMethod(kind) {
          if (!BUGGY && kind in proto) return proto[kind];
          switch (kind) {
            case KEYS:
              return function keys() {
                return new Constructor(this, kind);
              };
            case VALUES:
              return function values() {
                return new Constructor(this, kind);
              };
          }return function entries() {
            return new Constructor(this, kind);
          };
        };
        var TAG = NAME + ' Iterator';
        var DEF_VALUES = DEFAULT == VALUES;
        var VALUES_BUG = false;
        var proto = Base.prototype;
        var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
        var $default = $native || getMethod(DEFAULT);
        var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
        var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
        var methods, key, IteratorPrototype;
        // Fix native
        if ($anyNative) {
          IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
          if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
            // Set @@toStringTag to native iterators
            setToStringTag(IteratorPrototype, TAG, true);
            // fix for some old engines
            if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
          }
        }
        // fix Array#{values, @@iterator}.name in V8 / FF
        if (DEF_VALUES && $native && $native.name !== VALUES) {
          VALUES_BUG = true;
          $default = function values() {
            return $native.call(this);
          };
        }
        // Define iterator
        if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
          hide(proto, ITERATOR, $default);
        }
        // Plug for library
        Iterators[NAME] = $default;
        Iterators[TAG] = returnThis;
        if (DEFAULT) {
          methods = {
            values: DEF_VALUES ? $default : getMethod(VALUES),
            keys: IS_SET ? $default : getMethod(KEYS),
            entries: $entries
          };
          if (FORCED) for (key in methods) {
            if (!(key in proto)) redefine(proto, key, methods[key]);
          } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
        }
        return methods;
      };

      /***/
    },
    /* 52 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      // 19.1.3.6 Object.prototype.toString()

      var classof = __webpack_require__(30);
      var test = {};
      test[__webpack_require__(0)('toStringTag')] = 'z';
      if (test + '' != '[object z]') {
        __webpack_require__(14)(Object.prototype, 'toString', function toString() {
          return '[object ' + classof(this) + ']';
        }, true);
      }

      /***/
    },
    /* 53 */
    /***/function (module, exports, __webpack_require__) {

      // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
      var $keys = __webpack_require__(59);
      var hiddenKeys = __webpack_require__(32).concat('length', 'prototype');

      exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return $keys(O, hiddenKeys);
      };

      /***/
    },
    /* 54 */
    /***/function (module, exports, __webpack_require__) {

      var document = __webpack_require__(1).document;
      module.exports = document && document.documentElement;

      /***/
    },
    /* 55 */
    /***/function (module, exports, __webpack_require__) {

      // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
      var anObject = __webpack_require__(6);
      var dPs = __webpack_require__(146);
      var enumBugKeys = __webpack_require__(32);
      var IE_PROTO = __webpack_require__(33)('IE_PROTO');
      var Empty = function Empty() {/* empty */};
      var PROTOTYPE = 'prototype';

      // Create object with fake `null` prototype: use iframe Object with cleared prototype
      var _createDict = function createDict() {
        // Thrash, waste and sodomy: IE GC bug
        var iframe = __webpack_require__(38)('iframe');
        var i = enumBugKeys.length;
        var lt = '<';
        var gt = '>';
        var iframeDocument;
        iframe.style.display = 'none';
        __webpack_require__(54).appendChild(iframe);
        iframe.src = 'javascript:'; // eslint-disable-line no-script-url
        // createDict = iframe.contentWindow.Object;
        // html.removeChild(iframe);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
        iframeDocument.close();
        _createDict = iframeDocument.F;
        while (i--) {
          delete _createDict[PROTOTYPE][enumBugKeys[i]];
        }return _createDict();
      };

      module.exports = Object.create || function create(O, Properties) {
        var result;
        if (O !== null) {
          Empty[PROTOTYPE] = anObject(O);
          result = new Empty();
          Empty[PROTOTYPE] = null;
          // add "__proto__" for Object.getPrototypeOf polyfill
          result[IE_PROTO] = O;
        } else result = _createDict();
        return Properties === undefined ? result : dPs(result, Properties);
      };

      /***/
    },
    /* 56 */
    /***/function (module, exports, __webpack_require__) {

      // 7.1.15 ToLength
      var toInteger = __webpack_require__(34);
      var min = Math.min;
      module.exports = function (it) {
        return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
      };

      /***/
    },
    /* 57 */
    /***/function (module, exports, __webpack_require__) {

      // false -> Array#indexOf
      // true  -> Array#includes
      var toIObject = __webpack_require__(7);
      var toLength = __webpack_require__(56);
      var toAbsoluteIndex = __webpack_require__(148);
      module.exports = function (IS_INCLUDES) {
        return function ($this, el, fromIndex) {
          var O = toIObject($this);
          var length = toLength(O.length);
          var index = toAbsoluteIndex(fromIndex, length);
          var value;
          // Array#includes uses SameValueZero equality algorithm
          // eslint-disable-next-line no-self-compare
          if (IS_INCLUDES && el != el) while (length > index) {
            value = O[index++];
            // eslint-disable-next-line no-self-compare
            if (value != value) return true;
            // Array#indexOf ignores holes, Array#includes - not
          } else for (; length > index; index++) {
            if (IS_INCLUDES || index in O) {
              if (O[index] === el) return IS_INCLUDES || index || 0;
            }
          }return !IS_INCLUDES && -1;
        };
      };

      /***/
    },
    /* 58 */
    /***/function (module, exports, __webpack_require__) {

      // fallback for non-array-like ES3 and non-enumerable old V8 strings
      var cof = __webpack_require__(20);
      // eslint-disable-next-line no-prototype-builtins
      module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
        return cof(it) == 'String' ? it.split('') : Object(it);
      };

      /***/
    },
    /* 59 */
    /***/function (module, exports, __webpack_require__) {

      var has = __webpack_require__(12);
      var toIObject = __webpack_require__(7);
      var arrayIndexOf = __webpack_require__(57)(false);
      var IE_PROTO = __webpack_require__(33)('IE_PROTO');

      module.exports = function (object, names) {
        var O = toIObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) {
          if (key != IE_PROTO) has(O, key) && result.push(key);
        } // Don't enum bug & hidden keys
        while (names.length > i) {
          if (has(O, key = names[i++])) {
            ~arrayIndexOf(result, key) || result.push(key);
          }
        }return result;
      };

      /***/
    },
    /* 60 */
    /***/function (module, exports, __webpack_require__) {

      exports.f = __webpack_require__(0);

      /***/
    },
    /* 61 */
    /***/function (module, exports, __webpack_require__) {

      module.exports = !__webpack_require__(11) && !__webpack_require__(23)(function () {
        return Object.defineProperty(__webpack_require__(38)('div'), 'a', { get: function get() {
            return 7;
          } }).a != 7;
      });

      /***/
    },
    /* 62 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _Draggable = __webpack_require__(24);

      var _Draggable2 = _interopRequireDefault(_Draggable);

      var _SortableEvent = __webpack_require__(39);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var onDragStart = Symbol('onDragStart');
      var onDragOverContainer = Symbol('onDragOverContainer');
      var onDragOver = Symbol('onDragOver');
      var onDragStop = Symbol('onDragStop');

      /**
       * Returns announcement message when a Draggable element has been sorted with another Draggable element
       * or moved into a new container
       * @param {SortableSortedEvent} sortableEvent
       * @return {String}
       */
      function onSortableSortedDefaultAnnouncement(_ref8) {
        var dragEvent = _ref8.dragEvent;

        var sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'sortable element';

        if (dragEvent.over) {
          var overText = dragEvent.over.textContent.trim() || dragEvent.over.id || 'sortable element';
          var isFollowing = dragEvent.source.compareDocumentPosition(dragEvent.over) & Node.DOCUMENT_POSITION_FOLLOWING;

          if (isFollowing) {
            return 'Placed ' + sourceText + ' after ' + overText;
          } else {
            return 'Placed ' + sourceText + ' before ' + overText;
          }
        } else {
          // need to figure out how to compute container name
          return 'Placed ' + sourceText + ' into a different container';
        }
      }

      /**
       * @const {Object} defaultAnnouncements
       * @const {Function} defaultAnnouncements['sortable:sorted']
       */
      var defaultAnnouncements = {
        'sortable:sorted': onSortableSortedDefaultAnnouncement
      };

      /**
       * Sortable is built on top of Draggable and allows sorting of draggable elements. Sortable will keep
       * track of the original index and emits the new index as you drag over draggable elements.
       * @class Sortable
       * @module Sortable
       * @extends Draggable
       */

      var Sortable = function (_Draggable2$default) {
        _inherits(Sortable, _Draggable2$default);

        /**
         * Sortable constructor.
         * @constructs Sortable
         * @param {HTMLElement[]|NodeList|HTMLElement} containers - Sortable containers
         * @param {Object} options - Options for Sortable
         */
        function Sortable() {
          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, Sortable);

          /**
           * start index of source on drag start
           * @property startIndex
           * @type {Number}
           */
          var _this = _possibleConstructorReturn(this, (Sortable.__proto__ || Object.getPrototypeOf(Sortable)).call(this, containers, _extends({}, options, {
            announcements: _extends({}, defaultAnnouncements, options.announcements || {})
          })));

          _this.startIndex = null;

          /**
           * start container on drag start
           * @property startContainer
           * @type {HTMLElement}
           * @default null
           */
          _this.startContainer = null;

          _this[onDragStart] = _this[onDragStart].bind(_this);
          _this[onDragOverContainer] = _this[onDragOverContainer].bind(_this);
          _this[onDragOver] = _this[onDragOver].bind(_this);
          _this[onDragStop] = _this[onDragStop].bind(_this);

          _this.on('drag:start', _this[onDragStart]).on('drag:over:container', _this[onDragOverContainer]).on('drag:over', _this[onDragOver]).on('drag:stop', _this[onDragStop]);
          return _this;
        }

        /**
         * Destroys Sortable instance.
         */


        _createClass(Sortable, [{
          key: 'destroy',
          value: function destroy() {
            _get(Sortable.prototype.__proto__ || Object.getPrototypeOf(Sortable.prototype), 'destroy', this).call(this);

            this.off('drag:start', this[onDragStart]).off('drag:over:container', this[onDragOverContainer]).off('drag:over', this[onDragOver]).off('drag:stop', this[onDragStop]);
          }

          /**
           * Returns true index of element within its container during drag operation, i.e. excluding mirror and original source
           * @param {HTMLElement} element - An element
           * @return {Number}
           */

        }, {
          key: 'index',
          value: function index(element) {
            return this.getDraggableElementsForContainer(element.parentNode).indexOf(element);
          }

          /**
           * Drag start handler
           * @private
           * @param {DragStartEvent} event - Drag start event
           */

        }, {
          key: onDragStart,
          value: function value(event) {
            this.startContainer = event.source.parentNode;
            this.startIndex = this.index(event.source);

            var sortableStartEvent = new _SortableEvent.SortableStartEvent({
              dragEvent: event,
              startIndex: this.startIndex,
              startContainer: this.startContainer
            });

            this.trigger(sortableStartEvent);

            if (sortableStartEvent.canceled()) {
              event.cancel();
            }
          }

          /**
           * Drag over container handler
           * @private
           * @param {DragOverContainerEvent} event - Drag over container event
           */

        }, {
          key: onDragOverContainer,
          value: function value(event) {
            if (event.canceled()) {
              return;
            }

            var source = event.source,
                over = event.over,
                overContainer = event.overContainer;

            var oldIndex = this.index(source);

            var sortableSortEvent = new _SortableEvent.SortableSortEvent({
              dragEvent: event,
              currentIndex: oldIndex,
              source: source,
              over: over
            });

            this.trigger(sortableSortEvent);

            if (sortableSortEvent.canceled()) {
              return;
            }

            var children = this.getDraggableElementsForContainer(overContainer);
            var moves = move({ source: source, over: over, overContainer: overContainer, children: children });

            if (!moves) {
              return;
            }

            var oldContainer = moves.oldContainer,
                newContainer = moves.newContainer;

            var newIndex = this.index(event.source);

            var sortableSortedEvent = new _SortableEvent.SortableSortedEvent({
              dragEvent: event,
              oldIndex: oldIndex,
              newIndex: newIndex,
              oldContainer: oldContainer,
              newContainer: newContainer
            });

            this.trigger(sortableSortedEvent);
          }

          /**
           * Drag over handler
           * @private
           * @param {DragOverEvent} event - Drag over event
           */

        }, {
          key: onDragOver,
          value: function value(event) {
            if (event.over === event.originalSource || event.over === event.source) {
              return;
            }

            var source = event.source,
                over = event.over,
                overContainer = event.overContainer;

            var oldIndex = this.index(source);

            var sortableSortEvent = new _SortableEvent.SortableSortEvent({
              dragEvent: event,
              currentIndex: oldIndex,
              source: source,
              over: over
            });

            this.trigger(sortableSortEvent);

            if (sortableSortEvent.canceled()) {
              return;
            }

            var children = this.getDraggableElementsForContainer(overContainer);
            var moves = move({ source: source, over: over, overContainer: overContainer, children: children });

            if (!moves) {
              return;
            }

            var oldContainer = moves.oldContainer,
                newContainer = moves.newContainer;

            var newIndex = this.index(source);

            var sortableSortedEvent = new _SortableEvent.SortableSortedEvent({
              dragEvent: event,
              oldIndex: oldIndex,
              newIndex: newIndex,
              oldContainer: oldContainer,
              newContainer: newContainer
            });

            this.trigger(sortableSortedEvent);
          }

          /**
           * Drag stop handler
           * @private
           * @param {DragStopEvent} event - Drag stop event
           */

        }, {
          key: onDragStop,
          value: function value(event) {
            var sortableStopEvent = new _SortableEvent.SortableStopEvent({
              dragEvent: event,
              oldIndex: this.startIndex,
              newIndex: this.index(event.source),
              oldContainer: this.startContainer,
              newContainer: event.source.parentNode
            });

            this.trigger(sortableStopEvent);

            this.startIndex = null;
            this.startContainer = null;
          }
        }]);

        return Sortable;
      }(_Draggable2.default);

      exports.default = Sortable;
      function index(element) {
        return Array.prototype.indexOf.call(element.parentNode.children, element);
      }

      function move(_ref9) {
        var source = _ref9.source,
            over = _ref9.over,
            overContainer = _ref9.overContainer,
            children = _ref9.children;

        var emptyOverContainer = !children.length;
        var differentContainer = source.parentNode !== overContainer;
        var sameContainer = over && !differentContainer;

        if (emptyOverContainer) {
          return moveInsideEmptyContainer(source, overContainer);
        } else if (sameContainer) {
          return moveWithinContainer(source, over);
        } else if (differentContainer) {
          return moveOutsideContainer(source, over, overContainer);
        } else {
          return null;
        }
      }

      function moveInsideEmptyContainer(source, overContainer) {
        var oldContainer = source.parentNode;

        overContainer.appendChild(source);

        return { oldContainer: oldContainer, newContainer: overContainer };
      }

      function moveWithinContainer(source, over) {
        var oldIndex = index(source);
        var newIndex = index(over);

        if (oldIndex < newIndex) {
          source.parentNode.insertBefore(source, over.nextElementSibling);
        } else {
          source.parentNode.insertBefore(source, over);
        }

        return { oldContainer: source.parentNode, newContainer: source.parentNode };
      }

      function moveOutsideContainer(source, over, overContainer) {
        var oldContainer = source.parentNode;

        if (over) {
          over.parentNode.insertBefore(source, over);
        } else {
          // need to figure out proper position
          overContainer.appendChild(source);
        }

        return { oldContainer: oldContainer, newContainer: source.parentNode };
      }

      /***/
    },
    /* 63 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SortableStopEvent = exports.SortableSortedEvent = exports.SortableSortEvent = exports.SortableStartEvent = exports.SortableEvent = undefined;

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
       * Base sortable event
       * @class SortableEvent
       * @module SortableEvent
       * @extends AbstractEvent
       */

      var SortableEvent = function (_AbstractEvent2$defau) {
        _inherits(SortableEvent, _AbstractEvent2$defau);

        function SortableEvent() {
          _classCallCheck(this, SortableEvent);

          return _possibleConstructorReturn(this, (SortableEvent.__proto__ || Object.getPrototypeOf(SortableEvent)).apply(this, arguments));
        }

        _createClass(SortableEvent, [{
          key: 'dragEvent',


          /**
           * Original drag event that triggered this sortable event
           * @property dragEvent
           * @type {DragEvent}
           * @readonly
           */
          get: function get() {
            return this.data.dragEvent;
          }
        }]);

        return SortableEvent;
      }(_AbstractEvent2.default);

      exports.SortableEvent = SortableEvent; /**
                                              * Sortable start event
                                              * @class SortableStartEvent
                                              * @module SortableStartEvent
                                              * @extends SortableEvent
                                              */

      SortableEvent.type = 'sortable';

      var SortableStartEvent = function (_SortableEvent2) {
        _inherits(SortableStartEvent, _SortableEvent2);

        function SortableStartEvent() {
          _classCallCheck(this, SortableStartEvent);

          return _possibleConstructorReturn(this, (SortableStartEvent.__proto__ || Object.getPrototypeOf(SortableStartEvent)).apply(this, arguments));
        }

        _createClass(SortableStartEvent, [{
          key: 'startIndex',


          /**
           * Start index of source on sortable start
           * @property startIndex
           * @type {Number}
           * @readonly
           */
          get: function get() {
            return this.data.startIndex;
          }

          /**
           * Start container on sortable start
           * @property startContainer
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'startContainer',
          get: function get() {
            return this.data.startContainer;
          }
        }]);

        return SortableStartEvent;
      }(SortableEvent);

      exports.SortableStartEvent = SortableStartEvent; /**
                                                        * Sortable sort event
                                                        * @class SortableSortEvent
                                                        * @module SortableSortEvent
                                                        * @extends SortableEvent
                                                        */

      SortableStartEvent.type = 'sortable:start';
      SortableStartEvent.cancelable = true;

      var SortableSortEvent = function (_SortableEvent3) {
        _inherits(SortableSortEvent, _SortableEvent3);

        function SortableSortEvent() {
          _classCallCheck(this, SortableSortEvent);

          return _possibleConstructorReturn(this, (SortableSortEvent.__proto__ || Object.getPrototypeOf(SortableSortEvent)).apply(this, arguments));
        }

        _createClass(SortableSortEvent, [{
          key: 'currentIndex',


          /**
           * Index of current draggable element
           * @property currentIndex
           * @type {Number}
           * @readonly
           */
          get: function get() {
            return this.data.currentIndex;
          }

          /**
           * Draggable element you are hovering over
           * @property over
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'over',
          get: function get() {
            return this.data.oldIndex;
          }

          /**
           * Draggable container element you are hovering over
           * @property overContainer
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'overContainer',
          get: function get() {
            return this.data.newIndex;
          }
        }]);

        return SortableSortEvent;
      }(SortableEvent);

      exports.SortableSortEvent = SortableSortEvent; /**
                                                      * Sortable sorted event
                                                      * @class SortableSortedEvent
                                                      * @module SortableSortedEvent
                                                      * @extends SortableEvent
                                                      */

      SortableSortEvent.type = 'sortable:sort';
      SortableSortEvent.cancelable = true;

      var SortableSortedEvent = function (_SortableEvent4) {
        _inherits(SortableSortedEvent, _SortableEvent4);

        function SortableSortedEvent() {
          _classCallCheck(this, SortableSortedEvent);

          return _possibleConstructorReturn(this, (SortableSortedEvent.__proto__ || Object.getPrototypeOf(SortableSortedEvent)).apply(this, arguments));
        }

        _createClass(SortableSortedEvent, [{
          key: 'oldIndex',


          /**
           * Index of last sorted event
           * @property oldIndex
           * @type {Number}
           * @readonly
           */
          get: function get() {
            return this.data.oldIndex;
          }

          /**
           * New index of this sorted event
           * @property newIndex
           * @type {Number}
           * @readonly
           */

        }, {
          key: 'newIndex',
          get: function get() {
            return this.data.newIndex;
          }

          /**
           * Old container of draggable element
           * @property oldContainer
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'oldContainer',
          get: function get() {
            return this.data.oldContainer;
          }

          /**
           * New container of draggable element
           * @property newContainer
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'newContainer',
          get: function get() {
            return this.data.newContainer;
          }
        }]);

        return SortableSortedEvent;
      }(SortableEvent);

      exports.SortableSortedEvent = SortableSortedEvent; /**
                                                          * Sortable stop event
                                                          * @class SortableStopEvent
                                                          * @module SortableStopEvent
                                                          * @extends SortableEvent
                                                          */

      SortableSortedEvent.type = 'sortable:sorted';

      var SortableStopEvent = function (_SortableEvent5) {
        _inherits(SortableStopEvent, _SortableEvent5);

        function SortableStopEvent() {
          _classCallCheck(this, SortableStopEvent);

          return _possibleConstructorReturn(this, (SortableStopEvent.__proto__ || Object.getPrototypeOf(SortableStopEvent)).apply(this, arguments));
        }

        _createClass(SortableStopEvent, [{
          key: 'oldIndex',


          /**
           * Original index on sortable start
           * @property oldIndex
           * @type {Number}
           * @readonly
           */
          get: function get() {
            return this.data.oldIndex;
          }

          /**
           * New index of draggable element
           * @property newIndex
           * @type {Number}
           * @readonly
           */

        }, {
          key: 'newIndex',
          get: function get() {
            return this.data.newIndex;
          }

          /**
           * Original container of draggable element
           * @property oldContainer
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'oldContainer',
          get: function get() {
            return this.data.oldContainer;
          }

          /**
           * New container of draggable element
           * @property newContainer
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'newContainer',
          get: function get() {
            return this.data.newContainer;
          }
        }]);

        return SortableStopEvent;
      }(SortableEvent);

      exports.SortableStopEvent = SortableStopEvent;
      SortableStopEvent.type = 'sortable:stop';

      /***/
    },
    /* 64 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _SortableEvent = __webpack_require__(39);

      Object.keys(_SortableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _SortableEvent[key];
          }
        });
      });

      var _Sortable = __webpack_require__(62);

      var _Sortable2 = _interopRequireDefault(_Sortable);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _Sortable2.default;

      /***/
    },
    /* 65 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _Draggable = __webpack_require__(24);

      var _Draggable2 = _interopRequireDefault(_Draggable);

      var _SwappableEvent = __webpack_require__(40);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var onDragStart = Symbol('onDragStart');
      var onDragOver = Symbol('onDragOver');
      var onDragStop = Symbol('onDragStop');

      /**
       * Returns an announcement message when the Draggable element is swapped with another draggable element
       * @param {SwappableSwappedEvent} swappableEvent
       * @return {String}
       */
      function onSwappableSwappedDefaultAnnouncement(_ref10) {
        var dragEvent = _ref10.dragEvent,
            swappedElement = _ref10.swappedElement;

        var sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'swappable element';
        var overText = swappedElement.textContent.trim() || swappedElement.id || 'swappable element';

        return 'Swapped ' + sourceText + ' with ' + overText;
      }

      /**
       * @const {Object} defaultAnnouncements
       * @const {Function} defaultAnnouncements['swappabled:swapped']
       */
      var defaultAnnouncements = {
        'swappabled:swapped': onSwappableSwappedDefaultAnnouncement
      };

      /**
       * Swappable is built on top of Draggable and allows swapping of draggable elements.
       * Order is irrelevant to Swappable.
       * @class Swappable
       * @module Swappable
       * @extends Draggable
       */

      var Swappable = function (_Draggable2$default2) {
        _inherits(Swappable, _Draggable2$default2);

        /**
         * Swappable constructor.
         * @constructs Swappable
         * @param {HTMLElement[]|NodeList|HTMLElement} containers - Swappable containers
         * @param {Object} options - Options for Swappable
         */
        function Swappable() {
          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, Swappable);

          /**
           * Last draggable element that was dragged over
           * @property lastOver
           * @type {HTMLElement}
           */
          var _this7 = _possibleConstructorReturn(this, (Swappable.__proto__ || Object.getPrototypeOf(Swappable)).call(this, containers, _extends({}, options, {
            announcements: _extends({}, defaultAnnouncements, options.announcements || {})
          })));

          _this7.lastOver = null;

          _this7[onDragStart] = _this7[onDragStart].bind(_this7);
          _this7[onDragOver] = _this7[onDragOver].bind(_this7);
          _this7[onDragStop] = _this7[onDragStop].bind(_this7);

          _this7.on('drag:start', _this7[onDragStart]).on('drag:over', _this7[onDragOver]).on('drag:stop', _this7[onDragStop]);
          return _this7;
        }

        /**
         * Destroys Swappable instance.
         */


        _createClass(Swappable, [{
          key: 'destroy',
          value: function destroy() {
            _get(Swappable.prototype.__proto__ || Object.getPrototypeOf(Swappable.prototype), 'destroy', this).call(this);

            this.off('drag:start', this._onDragStart).off('drag:over', this._onDragOver).off('drag:stop', this._onDragStop);
          }

          /**
           * Drag start handler
           * @private
           * @param {DragStartEvent} event - Drag start event
           */

        }, {
          key: onDragStart,
          value: function value(event) {
            var swappableStartEvent = new _SwappableEvent.SwappableStartEvent({
              dragEvent: event
            });

            this.trigger(swappableStartEvent);

            if (swappableStartEvent.canceled()) {
              event.cancel();
            }
          }

          /**
           * Drag over handler
           * @private
           * @param {DragOverEvent} event - Drag over event
           */

        }, {
          key: onDragOver,
          value: function value(event) {
            if (event.over === event.originalSource || event.over === event.source || event.canceled()) {
              return;
            }

            var swappableSwapEvent = new _SwappableEvent.SwappableSwapEvent({
              dragEvent: event,
              over: event.over,
              overContainer: event.overContainer
            });

            this.trigger(swappableSwapEvent);

            if (swappableSwapEvent.canceled()) {
              return;
            }

            // swap originally swapped element back
            if (this.lastOver && this.lastOver !== event.over) {
              swap(this.lastOver, event.source);
            }

            if (this.lastOver === event.over) {
              this.lastOver = null;
            } else {
              this.lastOver = event.over;
            }

            swap(event.source, event.over);

            var swappableSwappedEvent = new _SwappableEvent.SwappableSwappedEvent({
              dragEvent: event,
              swappedElement: event.over
            });

            this.trigger(swappableSwappedEvent);
          }

          /**
           * Drag stop handler
           * @private
           * @param {DragStopEvent} event - Drag stop event
           */

        }, {
          key: onDragStop,
          value: function value(event) {
            var swappableStopEvent = new _SwappableEvent.SwappableStopEvent({
              dragEvent: event
            });

            this.trigger(swappableStopEvent);
            this.lastOver = null;
          }
        }]);

        return Swappable;
      }(_Draggable2.default);

      exports.default = Swappable;
      function withTempElement(callback) {
        var tmpElement = document.createElement('div');
        callback(tmpElement);
        tmpElement.parentNode.removeChild(tmpElement);
      }

      function swap(source, over) {
        var overParent = over.parentNode;
        var sourceParent = source.parentNode;

        withTempElement(function (tmpElement) {
          sourceParent.insertBefore(tmpElement, source);
          overParent.insertBefore(source, over);
          sourceParent.insertBefore(over, tmpElement);
        });
      }

      /***/
    },
    /* 66 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SwappableStopEvent = exports.SwappableSwappedEvent = exports.SwappableSwapEvent = exports.SwappableStartEvent = exports.SwappableEvent = undefined;

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
       * Base swappable event
       * @class SwappableEvent
       * @module SwappableEvent
       * @extends AbstractEvent
       */

      var SwappableEvent = function (_AbstractEvent2$defau2) {
        _inherits(SwappableEvent, _AbstractEvent2$defau2);

        function SwappableEvent() {
          _classCallCheck(this, SwappableEvent);

          return _possibleConstructorReturn(this, (SwappableEvent.__proto__ || Object.getPrototypeOf(SwappableEvent)).apply(this, arguments));
        }

        _createClass(SwappableEvent, [{
          key: 'dragEvent',


          /**
           * Original drag event that triggered this swappable event
           * @property dragEvent
           * @type {DragEvent}
           * @readonly
           */
          get: function get() {
            return this.data.dragEvent;
          }
        }]);

        return SwappableEvent;
      }(_AbstractEvent2.default);

      exports.SwappableEvent = SwappableEvent; /**
                                                * Swappable start event
                                                * @class SwappableStartEvent
                                                * @module SwappableStartEvent
                                                * @extends SwappableEvent
                                                */

      SwappableEvent.type = 'swappable';

      var SwappableStartEvent = function (_SwappableEvent2) {
        _inherits(SwappableStartEvent, _SwappableEvent2);

        function SwappableStartEvent() {
          _classCallCheck(this, SwappableStartEvent);

          return _possibleConstructorReturn(this, (SwappableStartEvent.__proto__ || Object.getPrototypeOf(SwappableStartEvent)).apply(this, arguments));
        }

        return SwappableStartEvent;
      }(SwappableEvent);

      exports.SwappableStartEvent = SwappableStartEvent; /**
                                                          * Swappable swap event
                                                          * @class SwappableSwapEvent
                                                          * @module SwappableSwapEvent
                                                          * @extends SwappableEvent
                                                          */

      SwappableStartEvent.type = 'swappable:start';
      SwappableStartEvent.cancelable = true;

      var SwappableSwapEvent = function (_SwappableEvent3) {
        _inherits(SwappableSwapEvent, _SwappableEvent3);

        function SwappableSwapEvent() {
          _classCallCheck(this, SwappableSwapEvent);

          return _possibleConstructorReturn(this, (SwappableSwapEvent.__proto__ || Object.getPrototypeOf(SwappableSwapEvent)).apply(this, arguments));
        }

        _createClass(SwappableSwapEvent, [{
          key: 'over',


          /**
           * Draggable element you are over
           * @property over
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.over;
          }

          /**
           * Draggable container you are over
           * @property overContainer
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'overContainer',
          get: function get() {
            return this.data.overContainer;
          }
        }]);

        return SwappableSwapEvent;
      }(SwappableEvent);

      exports.SwappableSwapEvent = SwappableSwapEvent; /**
                                                        * Swappable swapped event
                                                        * @class SwappableSwappedEvent
                                                        * @module SwappableSwappedEvent
                                                        * @extends SwappableEvent
                                                        */

      SwappableSwapEvent.type = 'swappable:swap';
      SwappableSwapEvent.cancelable = true;

      var SwappableSwappedEvent = function (_SwappableEvent4) {
        _inherits(SwappableSwappedEvent, _SwappableEvent4);

        function SwappableSwappedEvent() {
          _classCallCheck(this, SwappableSwappedEvent);

          return _possibleConstructorReturn(this, (SwappableSwappedEvent.__proto__ || Object.getPrototypeOf(SwappableSwappedEvent)).apply(this, arguments));
        }

        _createClass(SwappableSwappedEvent, [{
          key: 'swappedElement',


          /**
           * The draggable element that you swapped with
           * @property swappedElement
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.swappedElement;
          }
        }]);

        return SwappableSwappedEvent;
      }(SwappableEvent);

      exports.SwappableSwappedEvent = SwappableSwappedEvent; /**
                                                              * Swappable stop event
                                                              * @class SwappableStopEvent
                                                              * @module SwappableStopEvent
                                                              * @extends SwappableEvent
                                                              */

      SwappableSwappedEvent.type = 'swappable:swapped';

      var SwappableStopEvent = function (_SwappableEvent5) {
        _inherits(SwappableStopEvent, _SwappableEvent5);

        function SwappableStopEvent() {
          _classCallCheck(this, SwappableStopEvent);

          return _possibleConstructorReturn(this, (SwappableStopEvent.__proto__ || Object.getPrototypeOf(SwappableStopEvent)).apply(this, arguments));
        }

        return SwappableStopEvent;
      }(SwappableEvent);

      exports.SwappableStopEvent = SwappableStopEvent;
      SwappableStopEvent.type = 'swappable:stop';

      /***/
    },
    /* 67 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _SwappableEvent = __webpack_require__(40);

      Object.keys(_SwappableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _SwappableEvent[key];
          }
        });
      });

      var _Swappable = __webpack_require__(65);

      var _Swappable2 = _interopRequireDefault(_Swappable);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _Swappable2.default;

      /***/
    },
    /* 68 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _utils = __webpack_require__(5);

      var _Draggable = __webpack_require__(24);

      var _Draggable2 = _interopRequireDefault(_Draggable);

      var _DroppableEvent = __webpack_require__(41);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var onDragStart = Symbol('onDragStart');
      var onDragMove = Symbol('onDragMove');
      var onDragStop = Symbol('onDragStop');
      var dropInDropzone = Symbol('dropInDropZone');
      var returnToOriginalDropzone = Symbol('returnToOriginalDropzone');
      var closestDropzone = Symbol('closestDropzone');
      var getDropzones = Symbol('getDropzones');

      /**
       * Returns an announcement message when the Draggable element is dropped into a dropzone element
       * @param {DroppableDroppedEvent} droppableEvent
       * @return {String}
       */
      function onDroppableDroppedDefaultAnnouncement(_ref11) {
        var dragEvent = _ref11.dragEvent,
            dropzone = _ref11.dropzone;

        var sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';
        var dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';

        return 'Dropped ' + sourceText + ' into ' + dropzoneText;
      }

      /**
       * Returns an announcement message when the Draggable element has returned to its original dropzone element
       * @param {DroppableReturnedEvent} droppableEvent
       * @return {String}
       */
      function onDroppableReturnedDefaultAnnouncement(_ref12) {
        var dragEvent = _ref12.dragEvent,
            dropzone = _ref12.dropzone;

        var sourceText = dragEvent.source.textContent.trim() || dragEvent.source.id || 'draggable element';
        var dropzoneText = dropzone.textContent.trim() || dropzone.id || 'droppable element';

        return 'Returned ' + sourceText + ' from ' + dropzoneText;
      }

      /**
       * @const {Object} defaultAnnouncements
       * @const {Function} defaultAnnouncements['droppable:dropped']
       * @const {Function} defaultAnnouncements['droppable:returned']
       */
      var defaultAnnouncements = {
        'droppable:dropped': onDroppableDroppedDefaultAnnouncement,
        'droppable:returned': onDroppableReturnedDefaultAnnouncement
      };

      var defaultClasses = {
        'droppable:active': 'draggable-dropzone--active',
        'droppable:occupied': 'draggable-dropzone--occupied'
      };

      var defaultOptions = {
        dropzone: '.draggable-droppable'
      };

      /**
       * Droppable is built on top of Draggable and allows dropping draggable elements
       * into dropzone element
       * @class Droppable
       * @module Droppable
       * @extends Draggable
       */

      var Droppable = function (_Draggable2$default3) {
        _inherits(Droppable, _Draggable2$default3);

        /**
         * Droppable constructor.
         * @constructs Droppable
         * @param {HTMLElement[]|NodeList|HTMLElement} containers - Droppable containers
         * @param {Object} options - Options for Droppable
         */
        function Droppable() {
          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, Droppable);

          /**
           * All dropzone elements on drag start
           * @property dropzones
           * @type {HTMLElement[]}
           */
          var _this13 = _possibleConstructorReturn(this, (Droppable.__proto__ || Object.getPrototypeOf(Droppable)).call(this, containers, _extends({}, defaultOptions, options, {
            classes: _extends({}, defaultClasses, options.classes || {}),
            announcements: _extends({}, defaultAnnouncements, options.announcements || {})
          })));

          _this13.dropzones = null;

          /**
           * Last dropzone element that the source was dropped into
           * @property lastDropzone
           * @type {HTMLElement}
           */
          _this13.lastDropzone = null;

          /**
           * Initial dropzone element that the source was drag from
           * @property initialDropzone
           * @type {HTMLElement}
           */
          _this13.initialDropzone = null;

          _this13[onDragStart] = _this13[onDragStart].bind(_this13);
          _this13[onDragMove] = _this13[onDragMove].bind(_this13);
          _this13[onDragStop] = _this13[onDragStop].bind(_this13);

          _this13.on('drag:start', _this13[onDragStart]).on('drag:move', _this13[onDragMove]).on('drag:stop', _this13[onDragStop]);
          return _this13;
        }

        /**
         * Destroys Droppable instance.
         */


        _createClass(Droppable, [{
          key: 'destroy',
          value: function destroy() {
            _get(Droppable.prototype.__proto__ || Object.getPrototypeOf(Droppable.prototype), 'destroy', this).call(this);

            this.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
          }

          /**
           * Drag start handler
           * @private
           * @param {DragStartEvent} event - Drag start event
           */

        }, {
          key: onDragStart,
          value: function value(event) {
            if (event.canceled()) {
              return;
            }

            this.dropzones = [].concat(_toConsumableArray(this[getDropzones]()));
            var dropzone = (0, _utils.closest)(event.sensorEvent.target, this.options.dropzone);

            if (!dropzone) {
              event.cancel();
              return;
            }

            var droppableStartEvent = new _DroppableEvent.DroppableStartEvent({
              dragEvent: event,
              dropzone: dropzone
            });

            this.trigger(droppableStartEvent);

            if (droppableStartEvent.canceled()) {
              event.cancel();
              return;
            }

            this.initialDropzone = dropzone;

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.dropzones[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var dropzoneElement = _step.value;

                if (dropzoneElement.classList.contains(this.getClassNameFor('droppable:occupied'))) {
                  continue;
                }

                dropzoneElement.classList.add(this.getClassNameFor('droppable:active'));
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }

          /**
           * Drag move handler
           * @private
           * @param {DragMoveEvent} event - Drag move event
           */

        }, {
          key: onDragMove,
          value: function value(event) {
            if (event.canceled()) {
              return;
            }

            var dropzone = this[closestDropzone](event.sensorEvent.target);
            var overEmptyDropzone = dropzone && !dropzone.classList.contains(this.getClassNameFor('droppable:occupied'));

            if (overEmptyDropzone && this[dropInDropzone](event, dropzone)) {
              this.lastDropzone = dropzone;
            } else if ((!dropzone || dropzone === this.initialDropzone) && this.lastDropzone) {
              this[returnToOriginalDropzone](event);
              this.lastDropzone = null;
            }
          }

          /**
           * Drag stop handler
           * @private
           * @param {DragStopEvent} event - Drag stop event
           */

        }, {
          key: onDragStop,
          value: function value(event) {
            var droppableStopEvent = new _DroppableEvent.DroppableStopEvent({
              dragEvent: event,
              dropzone: this.lastDropzone || this.initialDropzone
            });

            this.trigger(droppableStopEvent);

            var occupiedClass = this.getClassNameFor('droppable:occupied');

            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.dropzones[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var dropzone = _step2.value;

                dropzone.classList.remove(this.getClassNameFor('droppable:active'));
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }

            if (this.lastDropzone && this.lastDropzone !== this.initialDropzone) {
              this.initialDropzone.classList.remove(occupiedClass);
            }

            this.dropzones = null;
            this.lastDropzone = null;
            this.initialDropzone = null;
          }

          /**
           * Drops a draggable element into a dropzone element
           * @private
           * @param {DragMoveEvent} event - Drag move event
           * @param {HTMLElement} dropzone - Dropzone element to drop draggable into
           */

        }, {
          key: dropInDropzone,
          value: function value(event, dropzone) {
            var droppableDroppedEvent = new _DroppableEvent.DroppableDroppedEvent({
              dragEvent: event,
              dropzone: dropzone
            });

            this.trigger(droppableDroppedEvent);

            if (droppableDroppedEvent.canceled()) {
              return false;
            }

            var occupiedClass = this.getClassNameFor('droppable:occupied');

            if (this.lastDropzone) {
              this.lastDropzone.classList.remove(occupiedClass);
            }

            dropzone.appendChild(event.source);
            dropzone.classList.add(occupiedClass);

            return true;
          }

          /**
           * Moves the previously dropped element back into its original dropzone
           * @private
           * @param {DragMoveEvent} event - Drag move event
           */

        }, {
          key: returnToOriginalDropzone,
          value: function value(event) {
            var droppableReturnedEvent = new _DroppableEvent.DroppableReturnedEvent({
              dragEvent: event,
              dropzone: this.lastDropzone
            });

            this.trigger(droppableReturnedEvent);

            if (droppableReturnedEvent.canceled()) {
              return;
            }

            this.initialDropzone.appendChild(event.source);
            this.lastDropzone.classList.remove(this.getClassNameFor('droppable:occupied'));
          }

          /**
           * Returns closest dropzone element for even target
           * @private
           * @param {HTMLElement} target - Event target
           * @return {HTMLElement|null}
           */

        }, {
          key: closestDropzone,
          value: function value(target) {
            if (!this.dropzones) {
              return null;
            }

            return (0, _utils.closest)(target, this.dropzones);
          }

          /**
           * Returns all current dropzone elements for this draggable instance
           * @private
           * @return {NodeList|HTMLElement[]|Array}
           */

        }, {
          key: getDropzones,
          value: function value() {
            var dropzone = this.options.dropzone;

            if (typeof dropzone === 'string') {
              return document.querySelectorAll(dropzone);
            } else if (dropzone instanceof NodeList || dropzone instanceof Array) {
              return dropzone;
            } else if (typeof dropzone === 'function') {
              return dropzone();
            } else {
              return [];
            }
          }
        }]);

        return Droppable;
      }(_Draggable2.default);

      exports.default = Droppable;

      /***/
    },
    /* 69 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DroppableStopEvent = exports.DroppableReturnedEvent = exports.DroppableDroppedEvent = exports.DroppableStartEvent = exports.DroppableEvent = undefined;

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
       * Base droppable event
       * @class DroppableEvent
       * @module DroppableEvent
       * @extends AbstractEvent
       */

      var DroppableEvent = function (_AbstractEvent2$defau3) {
        _inherits(DroppableEvent, _AbstractEvent2$defau3);

        function DroppableEvent() {
          _classCallCheck(this, DroppableEvent);

          return _possibleConstructorReturn(this, (DroppableEvent.__proto__ || Object.getPrototypeOf(DroppableEvent)).apply(this, arguments));
        }

        _createClass(DroppableEvent, [{
          key: 'dragEvent',


          /**
           * Original drag event that triggered this droppable event
           * @property dragEvent
           * @type {DragEvent}
           * @readonly
           */
          get: function get() {
            return this.data.dragEvent;
          }
        }]);

        return DroppableEvent;
      }(_AbstractEvent2.default);

      exports.DroppableEvent = DroppableEvent; /**
                                                * Droppable start event
                                                * @class DroppableStartEvent
                                                * @module DroppableStartEvent
                                                * @extends DroppableEvent
                                                */

      DroppableEvent.type = 'droppable';

      var DroppableStartEvent = function (_DroppableEvent2) {
        _inherits(DroppableStartEvent, _DroppableEvent2);

        function DroppableStartEvent() {
          _classCallCheck(this, DroppableStartEvent);

          return _possibleConstructorReturn(this, (DroppableStartEvent.__proto__ || Object.getPrototypeOf(DroppableStartEvent)).apply(this, arguments));
        }

        _createClass(DroppableStartEvent, [{
          key: 'dropzone',


          /**
           * The initial dropzone element of the currently dragging draggable element
           * @property dropzone
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.dropzone;
          }
        }]);

        return DroppableStartEvent;
      }(DroppableEvent);

      exports.DroppableStartEvent = DroppableStartEvent; /**
                                                          * Droppable dropped event
                                                          * @class DroppableDroppedEvent
                                                          * @module DroppableDroppedEvent
                                                          * @extends DroppableEvent
                                                          */

      DroppableStartEvent.type = 'droppable:start';
      DroppableStartEvent.cancelable = true;

      var DroppableDroppedEvent = function (_DroppableEvent3) {
        _inherits(DroppableDroppedEvent, _DroppableEvent3);

        function DroppableDroppedEvent() {
          _classCallCheck(this, DroppableDroppedEvent);

          return _possibleConstructorReturn(this, (DroppableDroppedEvent.__proto__ || Object.getPrototypeOf(DroppableDroppedEvent)).apply(this, arguments));
        }

        _createClass(DroppableDroppedEvent, [{
          key: 'dropzone',


          /**
           * The dropzone element you dropped the draggable element into
           * @property dropzone
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.dropzone;
          }
        }]);

        return DroppableDroppedEvent;
      }(DroppableEvent);

      exports.DroppableDroppedEvent = DroppableDroppedEvent; /**
                                                              * Droppable returned event
                                                              * @class DroppableReturnedEvent
                                                              * @module DroppableReturnedEvent
                                                              * @extends DroppableEvent
                                                              */

      DroppableDroppedEvent.type = 'droppable:dropped';
      DroppableDroppedEvent.cancelable = true;

      var DroppableReturnedEvent = function (_DroppableEvent4) {
        _inherits(DroppableReturnedEvent, _DroppableEvent4);

        function DroppableReturnedEvent() {
          _classCallCheck(this, DroppableReturnedEvent);

          return _possibleConstructorReturn(this, (DroppableReturnedEvent.__proto__ || Object.getPrototypeOf(DroppableReturnedEvent)).apply(this, arguments));
        }

        _createClass(DroppableReturnedEvent, [{
          key: 'dropzone',


          /**
           * The dropzone element you dragged away from
           * @property dropzone
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.dropzone;
          }
        }]);

        return DroppableReturnedEvent;
      }(DroppableEvent);

      exports.DroppableReturnedEvent = DroppableReturnedEvent; /**
                                                                * Droppable stop event
                                                                * @class DroppableStopEvent
                                                                * @module DroppableStopEvent
                                                                * @extends DroppableEvent
                                                                */

      DroppableReturnedEvent.type = 'droppable:returned';
      DroppableReturnedEvent.cancelable = true;

      var DroppableStopEvent = function (_DroppableEvent5) {
        _inherits(DroppableStopEvent, _DroppableEvent5);

        function DroppableStopEvent() {
          _classCallCheck(this, DroppableStopEvent);

          return _possibleConstructorReturn(this, (DroppableStopEvent.__proto__ || Object.getPrototypeOf(DroppableStopEvent)).apply(this, arguments));
        }

        _createClass(DroppableStopEvent, [{
          key: 'dropzone',


          /**
           * The final dropzone element of the draggable element
           * @property dropzone
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.dropzone;
          }
        }]);

        return DroppableStopEvent;
      }(DroppableEvent);

      exports.DroppableStopEvent = DroppableStopEvent;
      DroppableStopEvent.type = 'droppable:stop';
      DroppableStopEvent.cancelable = true;

      /***/
    },
    /* 70 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _DroppableEvent = __webpack_require__(41);

      Object.keys(_DroppableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _DroppableEvent[key];
          }
        });
      });

      var _Droppable = __webpack_require__(68);

      var _Droppable2 = _interopRequireDefault(_Droppable);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _Droppable2.default;

      /***/
    },
    /* 71 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /**
       * The Emitter is a simple emitter class that provides you with `on()`, `off()` and `trigger()` methods
       * @class Emitter
       * @module Emitter
       */

      var Emitter = function () {
        function Emitter() {
          _classCallCheck(this, Emitter);

          this.callbacks = {};
        }

        /**
         * Registers callbacks by event name
         * @param {String} type
         * @param {...Function} callbacks
         */


        _createClass(Emitter, [{
          key: 'on',
          value: function on(type) {
            var _callbacks$type;

            if (!this.callbacks[type]) {
              this.callbacks[type] = [];
            }

            for (var _len = arguments.length, callbacks = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              callbacks[_key - 1] = arguments[_key];
            }

            (_callbacks$type = this.callbacks[type]).push.apply(_callbacks$type, callbacks);

            return this;
          }

          /**
           * Unregisters callbacks by event name
           * @param {String} type
           * @param {Function} callback
           */

        }, {
          key: 'off',
          value: function off(type, callback) {
            if (!this.callbacks[type]) {
              return null;
            }

            var copy = this.callbacks[type].slice(0);

            for (var i = 0; i < copy.length; i++) {
              if (callback === copy[i]) {
                this.callbacks[type].splice(i, 1);
              }
            }

            return this;
          }

          /**
           * Triggers event callbacks by event object
           * @param {AbstractEvent} event
           */

        }, {
          key: 'trigger',
          value: function trigger(event) {
            if (!this.callbacks[event.type]) {
              return null;
            }

            var callbacks = [].concat(_toConsumableArray(this.callbacks[event.type]));
            var caughtErrors = [];

            for (var i = callbacks.length - 1; i >= 0; i--) {
              var callback = callbacks[i];

              try {
                callback(event);
              } catch (error) {
                caughtErrors.push(error);
              }
            }

            if (caughtErrors.length) {
              /* eslint-disable no-console */
              console.error('Draggable caught errors while triggering \'' + event.type + '\'', caughtErrors);
              /* eslint-disable no-console */
            }

            return this;
          }
        }]);

        return Emitter;
      }();

      exports.default = Emitter;

      /***/
    },
    /* 72 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Emitter = __webpack_require__(71);

      var _Emitter2 = _interopRequireDefault(_Emitter);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _Emitter2.default;

      /***/
    },
    /* 73 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _utils = __webpack_require__(5);

      var _Plugins = __webpack_require__(42);

      var _Emitter = __webpack_require__(72);

      var _Emitter2 = _interopRequireDefault(_Emitter);

      var _Sensors = __webpack_require__(29);

      var _DraggableEvent = __webpack_require__(43);

      var _DragEvent = __webpack_require__(44);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var onDragStart = Symbol('onDragStart');
      var onDragMove = Symbol('onDragMove');
      var onDragStop = Symbol('onDragStop');
      var onDragPressure = Symbol('onDragPressure');

      /**
       * @const {Object} defaultAnnouncements
       * @const {Function} defaultAnnouncements['drag:start']
       * @const {Function} defaultAnnouncements['drag:stop']
       */
      var defaultAnnouncements = {
        'drag:start': function dragStart(event) {
          return 'Picked up ' + (event.source.textContent.trim() || event.source.id || 'draggable element');
        },
        'drag:stop': function dragStop(event) {
          return 'Released ' + (event.source.textContent.trim() || event.source.id || 'draggable element');
        }
      };

      var defaultClasses = {
        'container:dragging': 'draggable-container--is-dragging',
        'source:dragging': 'draggable-source--is-dragging',
        'source:placed': 'draggable-source--placed',
        'container:placed': 'draggable-container--placed',
        'body:dragging': 'draggable--is-dragging',
        'draggable:over': 'draggable--over',
        'container:over': 'draggable-container--over',
        'source:original': 'draggable--original',
        mirror: 'draggable-mirror'
      };

      var defaultOptions = exports.defaultOptions = {
        draggable: '.draggable-source',
        handle: null,
        delay: 100,
        placedTimeout: 800,
        plugins: [],
        sensors: []
      };

      /**
       * This is the core draggable library that does the heavy lifting
       * @class Draggable
       * @module Draggable
       */

      var Draggable = function () {

        /**
         * Draggable constructor.
         * @constructs Draggable
         * @param {HTMLElement[]|NodeList|HTMLElement} containers - Draggable containers
         * @param {Object} options - Options for draggable
         */
        function Draggable() {
          var _this19 = this;

          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [document.body];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, Draggable);

          /**
           * Draggable containers
           * @property containers
           * @type {HTMLElement[]}
           */
          if (containers instanceof NodeList || containers instanceof Array) {
            this.containers = [].concat(_toConsumableArray(containers));
          } else if (containers instanceof HTMLElement) {
            this.containers = [containers];
          } else {
            throw new Error('Draggable containers are expected to be of type `NodeList`, `HTMLElement[]` or `HTMLElement`');
          }

          this.options = _extends({}, defaultOptions, options, {
            classes: _extends({}, defaultClasses, options.classes || {}),
            announcements: _extends({}, defaultAnnouncements, options.announcements || {})
          });

          /**
           * Draggables event emitter
           * @property emitter
           * @type {Emitter}
           */
          this.emitter = new _Emitter2.default();

          /**
           * Current drag state
           * @property dragging
           * @type {Boolean}
           */
          this.dragging = false;

          /**
           * Active plugins
           * @property plugins
           * @type {Plugin[]}
           */
          this.plugins = [];

          /**
           * Active sensors
           * @property sensors
           * @type {Sensor[]}
           */
          this.sensors = [];

          this[onDragStart] = this[onDragStart].bind(this);
          this[onDragMove] = this[onDragMove].bind(this);
          this[onDragStop] = this[onDragStop].bind(this);
          this[onDragPressure] = this[onDragPressure].bind(this);

          document.addEventListener('drag:start', this[onDragStart], true);
          document.addEventListener('drag:move', this[onDragMove], true);
          document.addEventListener('drag:stop', this[onDragStop], true);
          document.addEventListener('drag:pressure', this[onDragPressure], true);

          var defaultPlugins = Object.values(Draggable.Plugins).map(function (Plugin) {
            return Plugin;
          });
          var defaultSensors = [_Sensors.MouseSensor, _Sensors.TouchSensor];

          this.addPlugin.apply(this, [].concat(_toConsumableArray(defaultPlugins), _toConsumableArray(this.options.plugins)));
          this.addSensor.apply(this, [].concat(defaultSensors, _toConsumableArray(this.options.sensors)));

          var draggableInitializedEvent = new _DraggableEvent.DraggableInitializedEvent({
            draggable: this
          });

          this.on('mirror:created', function (_ref13) {
            var mirror = _ref13.mirror;
            return _this19.mirror = mirror;
          });
          this.on('mirror:destroy', function () {
            return _this19.mirror = null;
          });

          this.trigger(draggableInitializedEvent);
        }

        /**
         * Destroys Draggable instance. This removes all internal event listeners and
         * deactivates sensors and plugins
         */

        /**
         * Default plugins draggable uses
         * @static
         * @property {Object} Plugins
         * @property {Announcement} Plugins.Announcement
         * @property {Focusable} Plugins.Focusable
         * @property {Mirror} Plugins.Mirror
         * @property {Scrollable} Plugins.Scrollable
         * @type {Object}
         */


        _createClass(Draggable, [{
          key: 'destroy',
          value: function destroy() {
            document.removeEventListener('drag:start', this[onDragStart], true);
            document.removeEventListener('drag:move', this[onDragMove], true);
            document.removeEventListener('drag:stop', this[onDragStop], true);
            document.removeEventListener('drag:pressure', this[onDragPressure], true);

            var draggableDestroyEvent = new _DraggableEvent.DraggableDestroyEvent({
              draggable: this
            });

            this.trigger(draggableDestroyEvent);

            this.removePlugin.apply(this, _toConsumableArray(this.plugins.map(function (plugin) {
              return plugin.constructor;
            })));
            this.removeSensor.apply(this, _toConsumableArray(this.sensors.map(function (sensor) {
              return sensor.constructor;
            })));
          }

          /**
           * Adds plugin to this draggable instance. This will end up calling the attach method of the plugin
           * @param {...typeof Plugin} plugins - Plugins that you want attached to draggable
           * @return {Draggable}
           * @example draggable.addPlugin(CustomA11yPlugin, CustomMirrorPlugin)
           */

        }, {
          key: 'addPlugin',
          value: function addPlugin() {
            var _this20 = this;

            for (var _len2 = arguments.length, plugins = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              plugins[_key2] = arguments[_key2];
            }

            var activePlugins = plugins.map(function (Plugin) {
              return new Plugin(_this20);
            });

            activePlugins.forEach(function (plugin) {
              return plugin.attach();
            });
            this.plugins = [].concat(_toConsumableArray(this.plugins), _toConsumableArray(activePlugins));

            return this;
          }

          /**
           * Removes plugins that are already attached to this draggable instance. This will end up calling
           * the detach method of the plugin
           * @param {...typeof Plugin} plugins - Plugins that you want detached from draggable
           * @return {Draggable}
           * @example draggable.removePlugin(MirrorPlugin, CustomMirrorPlugin)
           */

        }, {
          key: 'removePlugin',
          value: function removePlugin() {
            for (var _len3 = arguments.length, plugins = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
              plugins[_key3] = arguments[_key3];
            }

            var removedPlugins = this.plugins.filter(function (plugin) {
              return plugins.includes(plugin.constructor);
            });

            removedPlugins.forEach(function (plugin) {
              return plugin.detach();
            });
            this.plugins = this.plugins.filter(function (plugin) {
              return !plugins.includes(plugin.constructor);
            });

            return this;
          }

          /**
           * Adds sensors to this draggable instance. This will end up calling the attach method of the sensor
           * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable
           * @return {Draggable}
           * @example draggable.addSensor(ForceTouchSensor, CustomSensor)
           */

        }, {
          key: 'addSensor',
          value: function addSensor() {
            var _this21 = this;

            for (var _len4 = arguments.length, sensors = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              sensors[_key4] = arguments[_key4];
            }

            var activeSensors = sensors.map(function (Sensor) {
              return new Sensor(_this21.containers, _this21.options);
            });

            activeSensors.forEach(function (sensor) {
              return sensor.attach();
            });
            this.sensors = [].concat(_toConsumableArray(this.sensors), _toConsumableArray(activeSensors));

            return this;
          }

          /**
           * Removes sensors that are already attached to this draggable instance. This will end up calling
           * the detach method of the sensor
           * @param {...typeof Sensor} sensors - Sensors that you want attached to draggable
           * @return {Draggable}
           * @example draggable.removeSensor(TouchSensor, DragSensor)
           */

        }, {
          key: 'removeSensor',
          value: function removeSensor() {
            for (var _len5 = arguments.length, sensors = Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              sensors[_key5] = arguments[_key5];
            }

            var removedSensors = this.sensors.filter(function (sensor) {
              return sensors.includes(sensor.constructor);
            });

            removedSensors.forEach(function (sensor) {
              return sensor.detach();
            });
            this.sensors = this.sensors.filter(function (sensor) {
              return !sensors.includes(sensor.constructor);
            });

            return this;
          }

          /**
           * Adds container to this draggable instance
           * @param {...HTMLElement} containers - Containers you want to add to draggable
           * @return {Draggable}
           * @example draggable.addContainer(document.body)
           */

        }, {
          key: 'addContainer',
          value: function addContainer() {
            for (var _len6 = arguments.length, containers = Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              containers[_key6] = arguments[_key6];
            }

            this.containers = [].concat(_toConsumableArray(this.containers), containers);
            this.sensors.forEach(function (sensor) {
              return sensor.addContainer.apply(sensor, containers);
            });
            return this;
          }

          /**
           * Removes container from this draggable instance
           * @param {...HTMLElement} containers - Containers you want to remove from draggable
           * @return {Draggable}
           * @example draggable.removeContainer(document.body)
           */

        }, {
          key: 'removeContainer',
          value: function removeContainer() {
            for (var _len7 = arguments.length, containers = Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
              containers[_key7] = arguments[_key7];
            }

            this.containers = this.containers.filter(function (container) {
              return !containers.includes(container);
            });
            this.sensors.forEach(function (sensor) {
              return sensor.removeContainer.apply(sensor, containers);
            });
            return this;
          }

          /**
           * Adds listener for draggable events
           * @param {String} type - Event name
           * @param {...Function} callbacks - Event callbacks
           * @return {Draggable}
           * @example draggable.on('drag:start', (dragEvent) => dragEvent.cancel());
           */

        }, {
          key: 'on',
          value: function on(type) {
            var _emitter;

            for (var _len8 = arguments.length, callbacks = Array(_len8 > 1 ? _len8 - 1 : 0), _key8 = 1; _key8 < _len8; _key8++) {
              callbacks[_key8 - 1] = arguments[_key8];
            }

            (_emitter = this.emitter).on.apply(_emitter, [type].concat(callbacks));
            return this;
          }

          /**
           * Removes listener from draggable
           * @param {String} type - Event name
           * @param {Function} callback - Event callback
           * @return {Draggable}
           * @example draggable.off('drag:start', handlerFunction);
           */

        }, {
          key: 'off',
          value: function off(type, callback) {
            this.emitter.off(type, callback);
            return this;
          }

          /**
           * Triggers draggable event
           * @param {AbstractEvent} event - Event instance
           * @return {Draggable}
           * @example draggable.trigger(event);
           */

        }, {
          key: 'trigger',
          value: function trigger(event) {
            this.emitter.trigger(event);
            return this;
          }

          /**
           * Returns class name for class identifier
           * @param {String} name - Name of class identifier
           * @return {String|null}
           */

        }, {
          key: 'getClassNameFor',
          value: function getClassNameFor(name) {
            return this.options.classes[name];
          }

          /**
           * Returns true if this draggable instance is currently dragging
           * @return {Boolean}
           */

        }, {
          key: 'isDragging',
          value: function isDragging() {
            return Boolean(this.dragging);
          }

          /**
           * Returns all draggable elements
           * @return {HTMLElement[]}
           */

        }, {
          key: 'getDraggableElements',
          value: function getDraggableElements() {
            var _this22 = this;

            return this.containers.reduce(function (current, container) {
              return [].concat(_toConsumableArray(current), _toConsumableArray(_this22.getDraggableElementsForContainer(container)));
            }, []);
          }

          /**
           * Returns draggable elements for a given container, excluding the mirror and
           * original source element if present
           * @param {HTMLElement} container
           * @return {HTMLElement[]}
           */

        }, {
          key: 'getDraggableElementsForContainer',
          value: function getDraggableElementsForContainer(container) {
            var _this23 = this;

            var allDraggableElements = container.querySelectorAll(this.options.draggable);

            return [].concat(_toConsumableArray(allDraggableElements)).filter(function (childElement) {
              return childElement !== _this23.originalSource && childElement !== _this23.mirror;
            });
          }

          /**
           * Drag start handler
           * @private
           * @param {Event} event - DOM Drag event
           */

        }, {
          key: onDragStart,
          value: function value(event) {
            var _this24 = this;

            var sensorEvent = getSensorEvent(event);
            var target = sensorEvent.target,
                container = sensorEvent.container;


            if (!this.containers.includes(container)) {
              return;
            }

            if (this.options.handle && target && !(0, _utils.closest)(target, this.options.handle)) {
              sensorEvent.cancel();
              return;
            }

            // Find draggable source element
            this.originalSource = (0, _utils.closest)(target, this.options.draggable);
            this.sourceContainer = container;

            if (!this.originalSource) {
              sensorEvent.cancel();
              return;
            }

            if (this.lastPlacedSource && this.lastPlacedContainer) {
              clearTimeout(this.placedTimeoutID);
              this.lastPlacedSource.classList.remove(this.getClassNameFor('source:placed'));
              this.lastPlacedContainer.classList.remove(this.getClassNameFor('container:placed'));
            }

            this.source = this.originalSource.cloneNode(true);
            this.originalSource.parentNode.insertBefore(this.source, this.originalSource);
            this.originalSource.style.display = 'none';

            var dragEvent = new _DragEvent.DragStartEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: container,
              sensorEvent: sensorEvent
            });

            this.trigger(dragEvent);

            this.dragging = !dragEvent.canceled();

            if (dragEvent.canceled()) {
              this.source.parentNode.removeChild(this.source);
              this.originalSource.style.display = null;
              return;
            }

            this.originalSource.classList.add(this.getClassNameFor('source:original'));
            this.source.classList.add(this.getClassNameFor('source:dragging'));
            this.sourceContainer.classList.add(this.getClassNameFor('container:dragging'));
            document.body.classList.add(this.getClassNameFor('body:dragging'));
            applyUserSelect(document.body, 'none');

            requestAnimationFrame(function () {
              var oldSensorEvent = getSensorEvent(event);
              var newSensorEvent = oldSensorEvent.clone({ target: _this24.source });

              _this24[onDragMove](_extends({}, event, {
                detail: newSensorEvent
              }));
            });
          }

          /**
           * Drag move handler
           * @private
           * @param {Event} event - DOM Drag event
           */

        }, {
          key: onDragMove,
          value: function value(event) {
            if (!this.dragging) {
              return;
            }

            var sensorEvent = getSensorEvent(event);
            var container = sensorEvent.container;

            var target = sensorEvent.target;

            var dragMoveEvent = new _DragEvent.DragMoveEvent({
              source: this.source,
              originalSource: this.originalSource,
              sourceContainer: container,
              sensorEvent: sensorEvent
            });

            this.trigger(dragMoveEvent);

            if (dragMoveEvent.canceled()) {
              sensorEvent.cancel();
            }

            target = (0, _utils.closest)(target, this.options.draggable);
            var withinCorrectContainer = (0, _utils.closest)(sensorEvent.target, this.containers);
            var overContainer = sensorEvent.overContainer || withinCorrectContainer;
            var isLeavingContainer = this.currentOverContainer && overContainer !== this.currentOverContainer;
            var isLeavingDraggable = this.currentOver && target !== this.currentOver;
            var isOverContainer = overContainer && this.currentOverContainer !== overContainer;
            var isOverDraggable = withinCorrectContainer && target && this.currentOver !== target;

            if (isLeavingDraggable) {
              var dragOutEvent = new _DragEvent.DragOutEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: container,
                sensorEvent: sensorEvent,
                over: this.currentOver
              });

              this.currentOver.classList.remove(this.getClassNameFor('draggable:over'));
              this.currentOver = null;

              this.trigger(dragOutEvent);
            }

            if (isLeavingContainer) {
              var dragOutContainerEvent = new _DragEvent.DragOutContainerEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: container,
                sensorEvent: sensorEvent,
                overContainer: this.currentOverContainer
              });

              this.currentOverContainer.classList.remove(this.getClassNameFor('container:over'));
              this.currentOverContainer = null;

              this.trigger(dragOutContainerEvent);
            }

            if (isOverContainer) {
              overContainer.classList.add(this.getClassNameFor('container:over'));

              var dragOverContainerEvent = new _DragEvent.DragOverContainerEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: container,
                sensorEvent: sensorEvent,
                overContainer: overContainer
              });

              this.currentOverContainer = overContainer;

              this.trigger(dragOverContainerEvent);
            }

            if (isOverDraggable) {
              target.classList.add(this.getClassNameFor('draggable:over'));

              var dragOverEvent = new _DragEvent.DragOverEvent({
                source: this.source,
                originalSource: this.originalSource,
                sourceContainer: container,
                sensorEvent: sensorEvent,
                overContainer: overContainer,
                over: target
              });

              this.currentOver = target;

              this.trigger(dragOverEvent);
            }
          }

          /**
           * Drag stop handler
           * @private
           * @param {Event} event - DOM Drag event
           */

        }, {
          key: onDragStop,
          value: function value(event) {
            var _this25 = this;

            if (!this.dragging) {
              return;
            }

            this.dragging = false;

            var dragStopEvent = new _DragEvent.DragStopEvent({
              source: this.source,
              originalSource: this.originalSource,
              sensorEvent: event.sensorEvent,
              sourceContainer: this.sourceContainer
            });

            this.trigger(dragStopEvent);

            this.source.parentNode.insertBefore(this.originalSource, this.source);
            this.source.parentNode.removeChild(this.source);
            this.originalSource.style.display = '';

            this.source.classList.remove(this.getClassNameFor('source:dragging'));
            this.originalSource.classList.remove(this.getClassNameFor('source:original'));
            this.originalSource.classList.add(this.getClassNameFor('source:placed'));
            this.sourceContainer.classList.add(this.getClassNameFor('container:placed'));
            this.sourceContainer.classList.remove(this.getClassNameFor('container:dragging'));
            document.body.classList.remove(this.getClassNameFor('body:dragging'));
            applyUserSelect(document.body, '');

            if (this.currentOver) {
              this.currentOver.classList.remove(this.getClassNameFor('draggable:over'));
            }

            if (this.currentOverContainer) {
              this.currentOverContainer.classList.remove(this.getClassNameFor('container:over'));
            }

            this.lastPlacedSource = this.originalSource;
            this.lastPlacedContainer = this.sourceContainer;

            this.placedTimeoutID = setTimeout(function () {
              if (_this25.lastPlacedSource) {
                _this25.lastPlacedSource.classList.remove(_this25.getClassNameFor('source:placed'));
              }

              if (_this25.lastPlacedContainer) {
                _this25.lastPlacedContainer.classList.remove(_this25.getClassNameFor('container:placed'));
              }

              _this25.lastPlacedSource = null;
              _this25.lastPlacedContainer = null;
            }, this.options.placedTimeout);

            this.source = null;
            this.originalSource = null;
            this.currentOverContainer = null;
            this.currentOver = null;
            this.sourceContainer = null;
          }

          /**
           * Drag pressure handler
           * @private
           * @param {Event} event - DOM Drag event
           */

        }, {
          key: onDragPressure,
          value: function value(event) {
            if (!this.dragging) {
              return;
            }

            var sensorEvent = getSensorEvent(event);
            var source = this.source || (0, _utils.closest)(sensorEvent.originalEvent.target, this.options.draggable);

            var dragPressureEvent = new _DragEvent.DragPressureEvent({
              sensorEvent: sensorEvent,
              source: source,
              pressure: sensorEvent.pressure
            });

            this.trigger(dragPressureEvent);
          }
        }]);

        return Draggable;
      }();

      exports.default = Draggable;
      Draggable.Plugins = { Announcement: _Plugins.Announcement, Focusable: _Plugins.Focusable, Mirror: _Plugins.Mirror, Scrollable: _Plugins.Scrollable };
      function getSensorEvent(event) {
        return event.detail;
      }

      function applyUserSelect(element, value) {
        element.style.webkitUserSelect = value;
        element.style.mozUserSelect = value;
        element.style.msUserSelect = value;
        element.style.oUserSelect = value;
        element.style.userSelect = value;
      }

      /***/
    },
    /* 74 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = exports.scroll = exports.onDragStop = exports.onDragMove = exports.onDragStart = undefined;

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _AbstractPlugin = __webpack_require__(4);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      var _utils = __webpack_require__(5);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var onDragStart = exports.onDragStart = Symbol('onDragStart');
      var onDragMove = exports.onDragMove = Symbol('onDragMove');
      var onDragStop = exports.onDragStop = Symbol('onDragStop');
      var scroll = exports.scroll = Symbol('scroll');

      /**
       * Scrollable default options
       * @property {Object} defaultOptions
       * @property {Number} defaultOptions.speed
       * @property {Number} defaultOptions.sensitivity
       * @property {HTMLElement[]} defaultOptions.scrollableElements
       * @type {Object}
       */
      var defaultOptions = exports.defaultOptions = {
        speed: 6,
        sensitivity: 50,
        scrollableElements: []
      };

      /**
       * Scrollable plugin which scrolls the closest scrollable parent
       * @class Scrollable
       * @module Scrollable
       * @extends AbstractPlugin
       */

      var Scrollable = function (_AbstractPlugin2$defa) {
        _inherits(Scrollable, _AbstractPlugin2$defa);

        /**
         * Scrollable constructor.
         * @constructs Scrollable
         * @param {Draggable} draggable - Draggable instance
         */
        function Scrollable(draggable) {
          _classCallCheck(this, Scrollable);

          /**
           * Scrollable options
           * @property {Object} options
           * @property {Number} options.speed
           * @property {Number} options.sensitivity
           * @property {HTMLElement[]} options.scrollableElements
           * @type {Object}
           */
          var _this26 = _possibleConstructorReturn(this, (Scrollable.__proto__ || Object.getPrototypeOf(Scrollable)).call(this, draggable));

          _this26.options = _extends({}, defaultOptions, _this26.getOptions());

          /**
           * Keeps current mouse position
           * @property {Object} currentMousePosition
           * @property {Number} currentMousePosition.clientX
           * @property {Number} currentMousePosition.clientY
           * @type {Object|null}
           */
          _this26.currentMousePosition = null;

          /**
           * Scroll animation frame
           * @property scrollAnimationFrame
           * @type {Number|null}
           */
          _this26.scrollAnimationFrame = null;

          /**
           * Closest scrollable element
           * @property scrollableElement
           * @type {HTMLElement|null}
           */
          _this26.scrollableElement = null;

          /**
           * Animation frame looking for the closest scrollable element
           * @property findScrollableElementFrame
           * @type {Number|null}
           */
          _this26.findScrollableElementFrame = null;

          _this26[onDragStart] = _this26[onDragStart].bind(_this26);
          _this26[onDragMove] = _this26[onDragMove].bind(_this26);
          _this26[onDragStop] = _this26[onDragStop].bind(_this26);
          _this26[scroll] = _this26[scroll].bind(_this26);
          return _this26;
        }

        /**
         * Attaches plugins event listeners
         */


        _createClass(Scrollable, [{
          key: 'attach',
          value: function attach() {
            this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
          }

          /**
           * Detaches plugins event listeners
           */

        }, {
          key: 'detach',
          value: function detach() {
            this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
          }

          /**
           * Returns options passed through draggable
           * @return {Object}
           */

        }, {
          key: 'getOptions',
          value: function getOptions() {
            return this.draggable.options.scrollable || {};
          }

          /**
           * Returns closest scrollable elements by element
           * @param {HTMLElement} target
           * @return {HTMLElement}
           */

        }, {
          key: 'getScrollableElement',
          value: function getScrollableElement(target) {
            if (this.hasDefinedScrollableElements()) {
              return (0, _utils.closest)(target, this.options.scrollableElements) || document.documentElement;
            } else {
              return closestScrollableElement(target);
            }
          }

          /**
           * Returns true if at least one scrollable element have been defined via options
           * @param {HTMLElement} target
           * @return {Boolean}
           */

        }, {
          key: 'hasDefinedScrollableElements',
          value: function hasDefinedScrollableElements() {
            return Boolean(this.options.scrollableElements.length !== 0);
          }

          /**
           * Drag start handler. Finds closest scrollable parent in separate frame
           * @param {DragStartEvent} dragEvent
           * @private
           */

        }, {
          key: onDragStart,
          value: function value(dragEvent) {
            var _this27 = this;

            this.findScrollableElementFrame = requestAnimationFrame(function () {
              _this27.scrollableElement = _this27.getScrollableElement(dragEvent.source);
            });
          }

          /**
           * Drag move handler. Remembers mouse position and initiates scrolling
           * @param {DragMoveEvent} dragEvent
           * @private
           */

        }, {
          key: onDragMove,
          value: function value(dragEvent) {
            var _this28 = this;

            this.findScrollableElementFrame = requestAnimationFrame(function () {
              _this28.scrollableElement = _this28.getScrollableElement(dragEvent.sensorEvent.target);
            });

            if (!this.scrollableElement) {
              return;
            }

            var sensorEvent = dragEvent.sensorEvent;
            var scrollOffset = { x: 0, y: 0 };

            if ('ontouchstart' in window) {
              scrollOffset.y = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
              scrollOffset.x = window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0;
            }

            this.currentMousePosition = {
              clientX: sensorEvent.clientX - scrollOffset.x,
              clientY: sensorEvent.clientY - scrollOffset.y
            };

            this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
          }

          /**
           * Drag stop handler. Cancels scroll animations and resets state
           * @private
           */

        }, {
          key: onDragStop,
          value: function value() {
            cancelAnimationFrame(this.scrollAnimationFrame);
            cancelAnimationFrame(this.findScrollableElementFrame);

            this.scrollableElement = null;
            this.scrollAnimationFrame = null;
            this.findScrollableElementFrame = null;
            this.currentMousePosition = null;
          }

          /**
           * Scroll function that does the heavylifting
           * @private
           */

        }, {
          key: scroll,
          value: function value() {
            if (!this.scrollableElement || !this.currentMousePosition) {
              return;
            }

            cancelAnimationFrame(this.scrollAnimationFrame);

            var _options = this.options,
                speed = _options.speed,
                sensitivity = _options.sensitivity;


            var rect = this.scrollableElement.getBoundingClientRect();
            var bottomCutOff = rect.bottom > window.innerHeight;
            var topCutOff = rect.top < 0;
            var cutOff = topCutOff || bottomCutOff;

            var documentScrollingElement = getDocumentScrollingElement();
            var scrollableElement = this.scrollableElement;
            var clientX = this.currentMousePosition.clientX;
            var clientY = this.currentMousePosition.clientY;

            if (scrollableElement !== document.body && scrollableElement !== document.documentElement && !cutOff) {
              var offsetHeight = scrollableElement.offsetHeight,
                  offsetWidth = scrollableElement.offsetWidth;


              if (rect.top + offsetHeight - clientY < sensitivity) {
                scrollableElement.scrollTop += speed;
              } else if (clientY - rect.top < sensitivity) {
                scrollableElement.scrollTop -= speed;
              }

              if (rect.left + offsetWidth - clientX < sensitivity) {
                scrollableElement.scrollLeft += speed;
              } else if (clientX - rect.left < sensitivity) {
                scrollableElement.scrollLeft -= speed;
              }
            } else {
              var _window = window,
                  innerHeight = _window.innerHeight,
                  innerWidth = _window.innerWidth;


              if (clientY < sensitivity) {
                documentScrollingElement.scrollTop -= speed;
              } else if (innerHeight - clientY < sensitivity) {
                documentScrollingElement.scrollTop += speed;
              }

              if (clientX < sensitivity) {
                documentScrollingElement.scrollLeft -= speed;
              } else if (innerWidth - clientX < sensitivity) {
                documentScrollingElement.scrollLeft += speed;
              }
            }

            this.scrollAnimationFrame = requestAnimationFrame(this[scroll]);
          }
        }]);

        return Scrollable;
      }(_AbstractPlugin2.default);

      exports.default = Scrollable; /**
                                     * Returns true if the passed element has overflow
                                     * @param {HTMLElement} element
                                     * @return {Boolean}
                                     * @private
                                     */

      function hasOverflow(element) {
        var overflowRegex = /(auto|scroll)/;
        var computedStyles = getComputedStyle(element, null);

        var overflow = computedStyles.getPropertyValue('overflow') + computedStyles.getPropertyValue('overflow-y') + computedStyles.getPropertyValue('overflow-x');

        return overflowRegex.test(overflow);
      }

      /**
       * Returns true if the passed element is statically positioned
       * @param {HTMLElement} element
       * @return {Boolean}
       * @private
       */
      function isStaticallyPositioned(element) {
        var position = getComputedStyle(element).getPropertyValue('position');
        return position === 'static';
      }

      /**
       * Finds closest scrollable element
       * @param {HTMLElement} element
       * @return {HTMLElement}
       * @private
       */
      function closestScrollableElement(element) {
        if (!element) {
          return getDocumentScrollingElement();
        }

        var position = getComputedStyle(element).getPropertyValue('position');
        var excludeStaticParents = position === 'absolute';

        var scrollableElement = (0, _utils.closest)(element, function (parent) {
          if (excludeStaticParents && isStaticallyPositioned(parent)) {
            return false;
          }
          return hasOverflow(parent);
        });

        if (position === 'fixed' || !scrollableElement) {
          return getDocumentScrollingElement();
        } else {
          return scrollableElement;
        }
      }

      /**
       * Returns element that scrolls document
       * @return {HTMLElement}
       * @private
       */
      function getDocumentScrollingElement() {
        return document.scrollingElement || document.documentElement;
      }

      /***/
    },
    /* 75 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _Scrollable = __webpack_require__(74);

      var _Scrollable2 = _interopRequireDefault(_Scrollable);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _Scrollable2.default;
      exports.defaultOptions = _Scrollable.defaultOptions;

      /***/
    },
    /* 76 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.MirrorDestroyEvent = exports.MirrorMoveEvent = exports.MirrorAttachedEvent = exports.MirrorCreatedEvent = exports.MirrorCreateEvent = exports.MirrorEvent = undefined;

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
       * Base mirror event
       * @class MirrorEvent
       * @module MirrorEvent
       * @extends AbstractEvent
       */

      var MirrorEvent = function (_AbstractEvent2$defau4) {
        _inherits(MirrorEvent, _AbstractEvent2$defau4);

        function MirrorEvent() {
          _classCallCheck(this, MirrorEvent);

          return _possibleConstructorReturn(this, (MirrorEvent.__proto__ || Object.getPrototypeOf(MirrorEvent)).apply(this, arguments));
        }

        _createClass(MirrorEvent, [{
          key: 'source',

          /**
           * Draggables source element
           * @property source
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.source;
          }

          /**
           * Draggables original source element
           * @property originalSource
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'originalSource',
          get: function get() {
            return this.data.originalSource;
          }

          /**
           * Draggables source container element
           * @property sourceContainer
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'sourceContainer',
          get: function get() {
            return this.data.sourceContainer;
          }

          /**
           * Sensor event
           * @property sensorEvent
           * @type {SensorEvent}
           * @readonly
           */

        }, {
          key: 'sensorEvent',
          get: function get() {
            return this.data.sensorEvent;
          }

          /**
           * Drag event
           * @property dragEvent
           * @type {DragEvent}
           * @readonly
           */

        }, {
          key: 'dragEvent',
          get: function get() {
            return this.data.dragEvent;
          }

          /**
           * Original event that triggered sensor event
           * @property originalEvent
           * @type {Event}
           * @readonly
           */

        }, {
          key: 'originalEvent',
          get: function get() {
            if (this.sensorEvent) {
              return this.sensorEvent.originalEvent;
            }

            return null;
          }
        }]);

        return MirrorEvent;
      }(_AbstractEvent2.default);

      exports.MirrorEvent = MirrorEvent; /**
                                          * Mirror create event
                                          * @class MirrorCreateEvent
                                          * @module MirrorCreateEvent
                                          * @extends MirrorEvent
                                          */

      var MirrorCreateEvent = function (_MirrorEvent2) {
        _inherits(MirrorCreateEvent, _MirrorEvent2);

        function MirrorCreateEvent() {
          _classCallCheck(this, MirrorCreateEvent);

          return _possibleConstructorReturn(this, (MirrorCreateEvent.__proto__ || Object.getPrototypeOf(MirrorCreateEvent)).apply(this, arguments));
        }

        return MirrorCreateEvent;
      }(MirrorEvent);

      exports.MirrorCreateEvent = MirrorCreateEvent; /**
                                                      * Mirror created event
                                                      * @class MirrorCreatedEvent
                                                      * @module MirrorCreatedEvent
                                                      * @extends MirrorEvent
                                                      */

      MirrorCreateEvent.type = 'mirror:create';

      var MirrorCreatedEvent = function (_MirrorEvent3) {
        _inherits(MirrorCreatedEvent, _MirrorEvent3);

        function MirrorCreatedEvent() {
          _classCallCheck(this, MirrorCreatedEvent);

          return _possibleConstructorReturn(this, (MirrorCreatedEvent.__proto__ || Object.getPrototypeOf(MirrorCreatedEvent)).apply(this, arguments));
        }

        _createClass(MirrorCreatedEvent, [{
          key: 'mirror',


          /**
           * Draggables mirror element
           * @property mirror
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.mirror;
          }
        }]);

        return MirrorCreatedEvent;
      }(MirrorEvent);

      exports.MirrorCreatedEvent = MirrorCreatedEvent; /**
                                                        * Mirror attached event
                                                        * @class MirrorAttachedEvent
                                                        * @module MirrorAttachedEvent
                                                        * @extends MirrorEvent
                                                        */

      MirrorCreatedEvent.type = 'mirror:created';

      var MirrorAttachedEvent = function (_MirrorEvent4) {
        _inherits(MirrorAttachedEvent, _MirrorEvent4);

        function MirrorAttachedEvent() {
          _classCallCheck(this, MirrorAttachedEvent);

          return _possibleConstructorReturn(this, (MirrorAttachedEvent.__proto__ || Object.getPrototypeOf(MirrorAttachedEvent)).apply(this, arguments));
        }

        _createClass(MirrorAttachedEvent, [{
          key: 'mirror',


          /**
           * Draggables mirror element
           * @property mirror
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.mirror;
          }
        }]);

        return MirrorAttachedEvent;
      }(MirrorEvent);

      exports.MirrorAttachedEvent = MirrorAttachedEvent; /**
                                                          * Mirror move event
                                                          * @class MirrorMoveEvent
                                                          * @module MirrorMoveEvent
                                                          * @extends MirrorEvent
                                                          */

      MirrorAttachedEvent.type = 'mirror:attached';

      var MirrorMoveEvent = function (_MirrorEvent5) {
        _inherits(MirrorMoveEvent, _MirrorEvent5);

        function MirrorMoveEvent() {
          _classCallCheck(this, MirrorMoveEvent);

          return _possibleConstructorReturn(this, (MirrorMoveEvent.__proto__ || Object.getPrototypeOf(MirrorMoveEvent)).apply(this, arguments));
        }

        _createClass(MirrorMoveEvent, [{
          key: 'mirror',


          /**
           * Draggables mirror element
           * @property mirror
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.mirror;
          }
        }]);

        return MirrorMoveEvent;
      }(MirrorEvent);

      exports.MirrorMoveEvent = MirrorMoveEvent; /**
                                                  * Mirror destroy event
                                                  * @class MirrorDestroyEvent
                                                  * @module MirrorDestroyEvent
                                                  * @extends MirrorEvent
                                                  */

      MirrorMoveEvent.type = 'mirror:move';
      MirrorMoveEvent.cancelable = true;

      var MirrorDestroyEvent = function (_MirrorEvent6) {
        _inherits(MirrorDestroyEvent, _MirrorEvent6);

        function MirrorDestroyEvent() {
          _classCallCheck(this, MirrorDestroyEvent);

          return _possibleConstructorReturn(this, (MirrorDestroyEvent.__proto__ || Object.getPrototypeOf(MirrorDestroyEvent)).apply(this, arguments));
        }

        _createClass(MirrorDestroyEvent, [{
          key: 'mirror',


          /**
           * Draggables mirror element
           * @property mirror
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.mirror;
          }
        }]);

        return MirrorDestroyEvent;
      }(MirrorEvent);

      exports.MirrorDestroyEvent = MirrorDestroyEvent;
      MirrorDestroyEvent.type = 'mirror:destroy';
      MirrorDestroyEvent.cancelable = true;

      /***/
    },
    /* 77 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _MirrorEvent = __webpack_require__(76);

      Object.keys(_MirrorEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _MirrorEvent[key];
          }
        });
      });

      /***/
    },
    /* 78 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = exports.getAppendableContainer = exports.onScroll = exports.onMirrorMove = exports.onMirrorCreated = exports.onDragStop = exports.onDragMove = exports.onDragStart = undefined;

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _AbstractPlugin = __webpack_require__(4);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      var _MirrorEvent = __webpack_require__(77);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      function _objectWithoutProperties(obj, keys) {
        var target = {};for (var i in obj) {
          if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
        }return target;
      }

      var onDragStart = exports.onDragStart = Symbol('onDragStart');
      var onDragMove = exports.onDragMove = Symbol('onDragMove');
      var onDragStop = exports.onDragStop = Symbol('onDragStop');
      var onMirrorCreated = exports.onMirrorCreated = Symbol('onMirrorCreated');
      var onMirrorMove = exports.onMirrorMove = Symbol('onMirrorMove');
      var onScroll = exports.onScroll = Symbol('onScroll');
      var getAppendableContainer = exports.getAppendableContainer = Symbol('getAppendableContainer');

      /**
       * Mirror default options
       * @property {Object} defaultOptions
       * @property {Boolean} defaultOptions.constrainDimensions
       * @property {Boolean} defaultOptions.xAxis
       * @property {Boolean} defaultOptions.yAxis
       * @property {null} defaultOptions.cursorOffsetX
       * @property {null} defaultOptions.cursorOffsetY
       * @type {Object}
       */
      var defaultOptions = exports.defaultOptions = {
        constrainDimensions: false,
        xAxis: true,
        yAxis: true,
        cursorOffsetX: null,
        cursorOffsetY: null
      };

      /**
       * Mirror plugin which controls the mirror positioning while dragging
       * @class Mirror
       * @module Mirror
       * @extends AbstractPlugin
       */

      var Mirror = function (_AbstractPlugin2$defa2) {
        _inherits(Mirror, _AbstractPlugin2$defa2);

        /**
         * Mirror constructor.
         * @constructs Mirror
         * @param {Draggable} draggable - Draggable instance
         */
        function Mirror(draggable) {
          _classCallCheck(this, Mirror);

          /**
           * Mirror options
           * @property {Object} options
           * @property {Boolean} options.constrainDimensions
           * @property {Boolean} options.xAxis
           * @property {Boolean} options.yAxis
           * @property {Number|null} options.cursorOffsetX
           * @property {Number|null} options.cursorOffsetY
           * @property {String|HTMLElement|Function} options.appendTo
           * @type {Object}
           */
          var _this35 = _possibleConstructorReturn(this, (Mirror.__proto__ || Object.getPrototypeOf(Mirror)).call(this, draggable));

          _this35.options = _extends({}, defaultOptions, _this35.getOptions());

          /**
           * Scroll offset for touch devices because the mirror is positioned fixed
           * @property {Object} scrollOffset
           * @property {Number} scrollOffset.x
           * @property {Number} scrollOffset.y
           */
          _this35.scrollOffset = { x: 0, y: 0 };

          /**
           * Initial scroll offset for touch devices because the mirror is positioned fixed
           * @property {Object} scrollOffset
           * @property {Number} scrollOffset.x
           * @property {Number} scrollOffset.y
           */
          _this35.initialScrollOffset = {
            x: window.scrollX,
            y: window.scrollY
          };

          _this35[onDragStart] = _this35[onDragStart].bind(_this35);
          _this35[onDragMove] = _this35[onDragMove].bind(_this35);
          _this35[onDragStop] = _this35[onDragStop].bind(_this35);
          _this35[onMirrorCreated] = _this35[onMirrorCreated].bind(_this35);
          _this35[onMirrorMove] = _this35[onMirrorMove].bind(_this35);
          _this35[onScroll] = _this35[onScroll].bind(_this35);
          return _this35;
        }

        /**
         * Attaches plugins event listeners
         */


        _createClass(Mirror, [{
          key: 'attach',
          value: function attach() {
            this.draggable.on('drag:start', this[onDragStart]).on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]).on('mirror:created', this[onMirrorCreated]).on('mirror:move', this[onMirrorMove]);
          }

          /**
           * Detaches plugins event listeners
           */

        }, {
          key: 'detach',
          value: function detach() {
            this.draggable.off('drag:start', this[onDragStart]).off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]).off('mirror:created', this[onMirrorCreated]).off('mirror:move', this[onMirrorMove]);
          }

          /**
           * Returns options passed through draggable
           * @return {Object}
           */

        }, {
          key: 'getOptions',
          value: function getOptions() {
            return this.draggable.options.mirror || {};
          }
        }, {
          key: onDragStart,
          value: function value(dragEvent) {
            if (dragEvent.canceled()) {
              return;
            }

            if ('ontouchstart' in window) {
              document.addEventListener('scroll', this[onScroll], true);
            }

            this.initialScrollOffset = {
              x: window.scrollX,
              y: window.scrollY
            };

            var source = dragEvent.source,
                originalSource = dragEvent.originalSource,
                sourceContainer = dragEvent.sourceContainer,
                sensorEvent = dragEvent.sensorEvent;


            var mirrorCreateEvent = new _MirrorEvent.MirrorCreateEvent({
              source: source,
              originalSource: originalSource,
              sourceContainer: sourceContainer,
              sensorEvent: sensorEvent,
              dragEvent: dragEvent
            });

            this.draggable.trigger(mirrorCreateEvent);

            if (isNativeDragEvent(sensorEvent) || mirrorCreateEvent.canceled()) {
              return;
            }

            var appendableContainer = this[getAppendableContainer](source) || sourceContainer;
            this.mirror = source.cloneNode(true);

            var mirrorCreatedEvent = new _MirrorEvent.MirrorCreatedEvent({
              source: source,
              originalSource: originalSource,
              sourceContainer: sourceContainer,
              sensorEvent: sensorEvent,
              dragEvent: dragEvent,
              mirror: this.mirror
            });

            var mirrorAttachedEvent = new _MirrorEvent.MirrorAttachedEvent({
              source: source,
              originalSource: originalSource,
              sourceContainer: sourceContainer,
              sensorEvent: sensorEvent,
              dragEvent: dragEvent,
              mirror: this.mirror
            });

            this.draggable.trigger(mirrorCreatedEvent);
            appendableContainer.appendChild(this.mirror);
            this.draggable.trigger(mirrorAttachedEvent);
          }
        }, {
          key: onDragMove,
          value: function value(dragEvent) {
            if (!this.mirror || dragEvent.canceled()) {
              return;
            }

            var source = dragEvent.source,
                originalSource = dragEvent.originalSource,
                sourceContainer = dragEvent.sourceContainer,
                sensorEvent = dragEvent.sensorEvent;


            var mirrorMoveEvent = new _MirrorEvent.MirrorMoveEvent({
              source: source,
              originalSource: originalSource,
              sourceContainer: sourceContainer,
              sensorEvent: sensorEvent,
              dragEvent: dragEvent,
              mirror: this.mirror
            });

            this.draggable.trigger(mirrorMoveEvent);
          }
        }, {
          key: onDragStop,
          value: function value(dragEvent) {
            if ('ontouchstart' in window) {
              document.removeEventListener('scroll', this[onScroll], true);
            }

            this.initialScrollOffset = { x: 0, y: 0 };
            this.scrollOffset = { x: 0, y: 0 };

            if (!this.mirror) {
              return;
            }

            var source = dragEvent.source,
                sourceContainer = dragEvent.sourceContainer,
                sensorEvent = dragEvent.sensorEvent;


            var mirrorDestroyEvent = new _MirrorEvent.MirrorDestroyEvent({
              source: source,
              mirror: this.mirror,
              sourceContainer: sourceContainer,
              sensorEvent: sensorEvent,
              dragEvent: dragEvent
            });

            this.draggable.trigger(mirrorDestroyEvent);

            if (!mirrorDestroyEvent.canceled()) {
              this.mirror.parentNode.removeChild(this.mirror);
            }
          }
        }, {
          key: onScroll,
          value: function value() {
            this.scrollOffset = {
              x: window.scrollX - this.initialScrollOffset.x,
              y: window.scrollY - this.initialScrollOffset.y
            };
          }

          /**
           * Mirror created handler
           * @param {MirrorCreatedEvent} mirrorEvent
           * @return {Promise}
           * @private
           */

        }, {
          key: onMirrorCreated,
          value: function value(_ref14) {
            var _this36 = this;

            var mirror = _ref14.mirror,
                source = _ref14.source,
                sensorEvent = _ref14.sensorEvent;

            var mirrorClass = this.draggable.getClassNameFor('mirror');

            var setState = function setState(_ref) {
              var mirrorOffset = _ref.mirrorOffset,
                  initialX = _ref.initialX,
                  initialY = _ref.initialY,
                  args = _objectWithoutProperties(_ref, ['mirrorOffset', 'initialX', 'initialY']);

              _this36.mirrorOffset = mirrorOffset;
              _this36.initialX = initialX;
              _this36.initialY = initialY;
              return _extends({ mirrorOffset: mirrorOffset, initialX: initialX, initialY: initialY }, args);
            };

            var initialState = {
              mirror: mirror,
              source: source,
              sensorEvent: sensorEvent,
              mirrorClass: mirrorClass,
              scrollOffset: this.scrollOffset,
              options: this.options
            };

            return Promise.resolve(initialState)
            // Fix reflow here
            .then(computeMirrorDimensions).then(calculateMirrorOffset).then(resetMirror).then(addMirrorClasses).then(positionMirror({ initial: true })).then(removeMirrorID).then(setState);
          }

          /**
           * Mirror move handler
           * @param {MirrorMoveEvent} mirrorEvent
           * @return {Promise|null}
           * @private
           */

        }, {
          key: onMirrorMove,
          value: function value(mirrorEvent) {
            if (mirrorEvent.canceled()) {
              return null;
            }

            var initialState = {
              mirror: mirrorEvent.mirror,
              sensorEvent: mirrorEvent.sensorEvent,
              mirrorOffset: this.mirrorOffset,
              options: this.options,
              initialX: this.initialX,
              initialY: this.initialY,
              scrollOffset: this.scrollOffset
            };

            return Promise.resolve(initialState).then(positionMirror({ raf: true }));
          }

          /**
           * Returns appendable container for mirror based on the appendTo option
           * @private
           * @param {Object} options
           * @param {HTMLElement} options.source - Current source
           * @return {HTMLElement}
           */

        }, {
          key: getAppendableContainer,
          value: function value(source) {
            var appendTo = this.options.appendTo;

            if (typeof appendTo === 'string') {
              return document.querySelector(appendTo);
            } else if (appendTo instanceof HTMLElement) {
              return appendTo;
            } else if (typeof appendTo === 'function') {
              return appendTo(source);
            } else {
              return source.parentNode;
            }
          }
        }]);

        return Mirror;
      }(_AbstractPlugin2.default);

      exports.default = Mirror; /**
                                 * Computes mirror dimensions based on the source element
                                 * Adds sourceRect to state
                                 * @param {Object} state
                                 * @param {HTMLElement} state.source
                                 * @return {Promise}
                                 * @private
                                 */

      function computeMirrorDimensions(_ref2) {
        var source = _ref2.source,
            args = _objectWithoutProperties(_ref2, ['source']);


        return withPromise(function (resolve) {
          var sourceRect = source.getBoundingClientRect();
          resolve(_extends({ source: source, sourceRect: sourceRect }, args));
        });
      }

      /**
       * Calculates mirror offset
       * Adds mirrorOffset to state
       * @param {Object} state
       * @param {SensorEvent} state.sensorEvent
       * @param {DOMRect} state.sourceRect
       * @return {Promise}
       * @private
       */
      function calculateMirrorOffset(_ref3) {
        var sensorEvent = _ref3.sensorEvent,
            sourceRect = _ref3.sourceRect,
            options = _ref3.options,
            args = _objectWithoutProperties(_ref3, ['sensorEvent', 'sourceRect', 'options']);

        return withPromise(function (resolve) {
          var top = options.cursorOffsetY === null ? sensorEvent.clientY - sourceRect.top : options.cursorOffsetY;
          var left = options.cursorOffsetX === null ? sensorEvent.clientX - sourceRect.left : options.cursorOffsetX;

          var mirrorOffset = { top: top, left: left };

          resolve(_extends({ sensorEvent: sensorEvent, sourceRect: sourceRect, mirrorOffset: mirrorOffset, options: options }, args));
        });
      }

      /**
       * Applys mirror styles
       * @param {Object} state
       * @param {HTMLElement} state.mirror
       * @param {HTMLElement} state.source
       * @param {Object} state.options
       * @return {Promise}
       * @private
       */
      function resetMirror(_ref4) {
        var mirror = _ref4.mirror,
            source = _ref4.source,
            options = _ref4.options,
            args = _objectWithoutProperties(_ref4, ['mirror', 'source', 'options']);

        return withPromise(function (resolve) {
          var offsetHeight = void 0;
          var offsetWidth = void 0;

          if (options.constrainDimensions) {
            var computedSourceStyles = getComputedStyle(source);
            offsetHeight = computedSourceStyles.getPropertyValue('height');
            offsetWidth = computedSourceStyles.getPropertyValue('width');
          }

          mirror.style.position = 'fixed';
          mirror.style.pointerEvents = 'none';
          mirror.style.top = 0;
          mirror.style.left = 0;
          mirror.style.margin = 0;

          if (options.constrainDimensions) {
            mirror.style.height = offsetHeight;
            mirror.style.width = offsetWidth;
          }

          resolve(_extends({ mirror: mirror, source: source, options: options }, args));
        });
      }

      /**
       * Applys mirror class on mirror element
       * @param {Object} state
       * @param {HTMLElement} state.mirror
       * @param {String} state.mirrorClass
       * @return {Promise}
       * @private
       */
      function addMirrorClasses(_ref5) {
        var mirror = _ref5.mirror,
            mirrorClass = _ref5.mirrorClass,
            args = _objectWithoutProperties(_ref5, ['mirror', 'mirrorClass']);

        return withPromise(function (resolve) {
          mirror.classList.add(mirrorClass);
          resolve(_extends({ mirror: mirror, mirrorClass: mirrorClass }, args));
        });
      }

      /**
       * Removes source ID from cloned mirror element
       * @param {Object} state
       * @param {HTMLElement} state.mirror
       * @return {Promise}
       * @private
       */
      function removeMirrorID(_ref6) {
        var mirror = _ref6.mirror,
            args = _objectWithoutProperties(_ref6, ['mirror']);


        return withPromise(function (resolve) {
          mirror.removeAttribute('id');
          delete mirror.id;
          resolve(_extends({ mirror: mirror }, args));
        });
      }

      /**
       * Positions mirror with translate3d
       * @param {Object} state
       * @param {HTMLElement} state.mirror
       * @param {SensorEvent} state.sensorEvent
       * @param {Object} state.mirrorOffset
       * @param {Number} state.initialY
       * @param {Number} state.initialX
       * @param {Object} state.options
       * @return {Promise}
       * @private
       */
      function positionMirror() {
        var _ref15 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            _ref15$withFrame = _ref15.withFrame,
            withFrame = _ref15$withFrame === undefined ? false : _ref15$withFrame,
            _ref15$initial = _ref15.initial,
            initial = _ref15$initial === undefined ? false : _ref15$initial;

        return function (_ref7) {
          var mirror = _ref7.mirror,
              sensorEvent = _ref7.sensorEvent,
              mirrorOffset = _ref7.mirrorOffset,
              initialY = _ref7.initialY,
              initialX = _ref7.initialX,
              scrollOffset = _ref7.scrollOffset,
              options = _ref7.options,
              args = _objectWithoutProperties(_ref7, ['mirror', 'sensorEvent', 'mirrorOffset', 'initialY', 'initialX', 'scrollOffset', 'options']);

          return withPromise(function (resolve) {
            var result = _extends({
              mirror: mirror,
              sensorEvent: sensorEvent,
              mirrorOffset: mirrorOffset,
              options: options
            }, args);

            if (mirrorOffset) {
              var x = sensorEvent.clientX - mirrorOffset.left - scrollOffset.x;
              var y = sensorEvent.clientY - mirrorOffset.top - scrollOffset.y;

              if (options.xAxis && options.yAxis || initial) {
                mirror.style.transform = 'translate3d(' + x + 'px, ' + y + 'px, 0)';
              } else if (options.xAxis && !options.yAxis) {
                mirror.style.transform = 'translate3d(' + x + 'px, ' + initialY + 'px, 0)';
              } else if (options.yAxis && !options.xAxis) {
                mirror.style.transform = 'translate3d(' + initialX + 'px, ' + y + 'px, 0)';
              }

              if (initial) {
                result.initialX = x;
                result.initialY = y;
              }
            }

            resolve(result);
          }, { frame: withFrame });
        };
      }

      /**
       * Wraps functions in promise with potential animation frame option
       * @param {Function} callback
       * @param {Object} options
       * @param {Boolean} options.raf
       * @return {Promise}
       * @private
       */
      function withPromise(callback) {
        var _ref16 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref16$raf = _ref16.raf,
            raf = _ref16$raf === undefined ? false : _ref16$raf;

        return new Promise(function (resolve, reject) {
          if (raf) {
            requestAnimationFrame(function () {
              callback(resolve, reject);
            });
          } else {
            callback(resolve, reject);
          }
        });
      }

      /**
       * Returns true if the sensor event was triggered by a native browser drag event
       * @param {SensorEvent} sensorEvent
       */
      function isNativeDragEvent(sensorEvent) {
        return (/^drag/.test(sensorEvent.originalEvent.type)
        );
      }

      /***/
    },
    /* 79 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _Mirror = __webpack_require__(78);

      var _Mirror2 = _interopRequireDefault(_Mirror);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _Mirror2.default;
      exports.defaultOptions = _Mirror.defaultOptions;

      /***/
    },
    /* 80 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _AbstractPlugin = __webpack_require__(4);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var onInitialize = Symbol('onInitialize');
      var onDestroy = Symbol('onDestroy');

      /**
       * Focusable default options
       * @property {Object} defaultOptions
       * @type {Object}
       */
      var defaultOptions = {};

      /**
       * Focusable plugin
       * @class Focusable
       * @module Focusable
       * @extends AbstractPlugin
       */

      var Focusable = function (_AbstractPlugin2$defa3) {
        _inherits(Focusable, _AbstractPlugin2$defa3);

        /**
         * Focusable constructor.
         * @constructs Focusable
         * @param {Draggable} draggable - Draggable instance
         */
        function Focusable(draggable) {
          _classCallCheck(this, Focusable);

          /**
           * Focusable options
           * @property {Object} options
           * @type {Object}
           */
          var _this37 = _possibleConstructorReturn(this, (Focusable.__proto__ || Object.getPrototypeOf(Focusable)).call(this, draggable));

          _this37.options = _extends({}, defaultOptions, _this37.getOptions());

          _this37[onInitialize] = _this37[onInitialize].bind(_this37);
          _this37[onDestroy] = _this37[onDestroy].bind(_this37);
          return _this37;
        }

        /**
         * Attaches listeners to draggable
         */


        _createClass(Focusable, [{
          key: 'attach',
          value: function attach() {
            this.draggable.on('draggable:initialize', this[onInitialize]).on('draggable:destroy', this[onDestroy]);
          }

          /**
           * Detaches listeners from draggable
           */

        }, {
          key: 'detach',
          value: function detach() {
            this.draggable.off('draggable:initialize', this[onInitialize]).off('draggable:destroy', this[onDestroy]);
          }

          /**
           * Returns options passed through draggable
           * @return {Object}
           */

        }, {
          key: 'getOptions',
          value: function getOptions() {
            return this.draggable.options.focusable || {};
          }

          /**
           * Returns draggable containers and elements
           * @return {HTMLElement[]}
           */

        }, {
          key: 'getElements',
          value: function getElements() {
            return [].concat(_toConsumableArray(this.draggable.containers), _toConsumableArray(this.draggable.getDraggableElements()));
          }

          /**
           * Intialize handler
           * @private
           */

        }, {
          key: onInitialize,
          value: function value() {
            var _this38 = this;

            // Can wait until the next best frame is available
            requestAnimationFrame(function () {
              _this38.getElements().forEach(function (element) {
                return decorateElement(element);
              });
            });
          }

          /**
           * Destroy handler
           * @private
           */

        }, {
          key: onDestroy,
          value: function value() {
            var _this39 = this;

            // Can wait until the next best frame is available
            requestAnimationFrame(function () {
              _this39.getElements().forEach(function (element) {
                return stripElement(element);
              });
            });
          }
        }]);

        return Focusable;
      }(_AbstractPlugin2.default);

      exports.default = Focusable; /**
                                    * Keeps track of all the elements that are missing tabindex attributes
                                    * so they can be reset when draggable gets destroyed
                                    * @const {HTMLElement[]} elementsWithMissingTabIndex
                                    */

      var elementsWithMissingTabIndex = [];

      /**
       * Decorates element with tabindex attributes
       * @param {HTMLElement} element
       * @return {Object}
       * @private
       */
      function decorateElement(element) {
        var hasMissingTabIndex = Boolean(!element.getAttribute('tabindex') && element.tabIndex === -1);

        if (hasMissingTabIndex) {
          elementsWithMissingTabIndex.push(element);
          element.tabIndex = 0;
        }
      }

      /**
       * Removes elements tabindex attributes
       * @param {HTMLElement} element
       * @private
       */
      function stripElement(element) {
        var tabIndexElementPosition = elementsWithMissingTabIndex.indexOf(element);

        if (tabIndexElementPosition !== -1) {
          element.tabIndex = -1;
          elementsWithMissingTabIndex.splice(tabIndexElementPosition, 1);
        }
      }

      /***/
    },
    /* 81 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Focusable = __webpack_require__(80);

      var _Focusable2 = _interopRequireDefault(_Focusable);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _Focusable2.default;

      /***/
    },
    /* 82 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _AbstractPlugin = __webpack_require__(4);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var onInitialize = Symbol('onInitialize');
      var onDestroy = Symbol('onDestroy');
      var announceEvent = Symbol('announceEvent');
      var announceMessage = Symbol('announceMessage');

      var ARIA_RELEVANT = 'aria-relevant';
      var ARIA_ATOMIC = 'aria-atomic';
      var ARIA_LIVE = 'aria-live';
      var ROLE = 'role';

      /**
       * Announcement default options
       * @property {Object} defaultOptions
       * @property {Number} defaultOptions.expire
       * @type {Object}
       */
      var defaultOptions = exports.defaultOptions = {
        expire: 7000
      };

      /**
       * Announcement plugin
       * @class Announcement
       * @module Announcement
       * @extends AbstractPlugin
       */

      var Announcement = function (_AbstractPlugin2$defa4) {
        _inherits(Announcement, _AbstractPlugin2$defa4);

        /**
         * Announcement constructor.
         * @constructs Announcement
         * @param {Draggable} draggable - Draggable instance
         */
        function Announcement(draggable) {
          _classCallCheck(this, Announcement);

          /**
           * Plugin options
           * @property options
           * @type {Object}
           */
          var _this40 = _possibleConstructorReturn(this, (Announcement.__proto__ || Object.getPrototypeOf(Announcement)).call(this, draggable));

          _this40.options = _extends({}, defaultOptions, _this40.getOptions());

          /**
           * Original draggable trigger method. Hack until we have onAll or on('all')
           * @property originalTriggerMethod
           * @type {Function}
           */
          _this40.originalTriggerMethod = _this40.draggable.trigger;

          _this40[onInitialize] = _this40[onInitialize].bind(_this40);
          _this40[onDestroy] = _this40[onDestroy].bind(_this40);
          return _this40;
        }

        /**
         * Attaches listeners to draggable
         */


        _createClass(Announcement, [{
          key: 'attach',
          value: function attach() {
            this.draggable.on('draggable:initialize', this[onInitialize]);
          }

          /**
           * Detaches listeners from draggable
           */

        }, {
          key: 'detach',
          value: function detach() {
            this.draggable.off('draggable:destroy', this[onDestroy]);
          }

          /**
           * Returns passed in options
           */

        }, {
          key: 'getOptions',
          value: function getOptions() {
            return this.draggable.options.announcements || {};
          }

          /**
           * Announces event
           * @private
           * @param {AbstractEvent} event
           */

        }, {
          key: announceEvent,
          value: function value(event) {
            var message = this.options[event.type];

            if (message && typeof message === 'string') {
              this[announceMessage](message);
            }

            if (message && typeof message === 'function') {
              this[announceMessage](message(event));
            }
          }

          /**
           * Announces message to screen reader
           * @private
           * @param {String} message
           */

        }, {
          key: announceMessage,
          value: function value(message) {
            announce(message, { expire: this.options.expire });
          }

          /**
           * Initialize hander
           * @private
           */

        }, {
          key: onInitialize,
          value: function value() {
            var _this41 = this;

            // Hack until there is an api for listening for all events
            this.draggable.trigger = function (event) {
              try {
                _this41[announceEvent](event);
              } finally {
                // Ensure that original trigger is called
                _this41.originalTriggerMethod.call(_this41.draggable, event);
              }
            };
          }

          /**
           * Destroy hander
           * @private
           */

        }, {
          key: onDestroy,
          value: function value() {
            this.draggable.trigger = this.originalTriggerMethod;
          }
        }]);

        return Announcement;
      }(_AbstractPlugin2.default);

      exports.default = Announcement; /**
                                       * @const {HTMLElement} liveRegion
                                       */

      var liveRegion = createRegion();

      /**
       * Announces message via live region
       * @param {String} message
       * @param {Object} options
       * @param {Number} options.expire
       */
      function announce(message, _ref17) {
        var expire = _ref17.expire;

        var element = document.createElement('div');

        element.textContent = message;
        liveRegion.appendChild(element);

        return setTimeout(function () {
          liveRegion.removeChild(element);
        }, expire);
      }

      /**
       * Creates region element
       * @return {HTMLElement}
       */
      function createRegion() {
        var element = document.createElement('div');

        element.setAttribute('id', 'draggable-live-region');
        element.setAttribute(ARIA_RELEVANT, 'additions');
        element.setAttribute(ARIA_ATOMIC, 'true');
        element.setAttribute(ARIA_LIVE, 'assertive');
        element.setAttribute(ROLE, 'log');

        element.style.position = 'fixed';
        element.style.width = '1px';
        element.style.height = '1px';
        element.style.top = '-1px';
        element.style.overflow = 'hidden';

        return element;
      }

      // Append live region element as early as possible
      document.addEventListener('DOMContentLoaded', function () {
        document.body.appendChild(liveRegion);
      });

      /***/
    },
    /* 83 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _Announcement = __webpack_require__(82);

      var _Announcement2 = _interopRequireDefault(_Announcement);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _Announcement2.default;
      exports.defaultOptions = _Announcement.defaultOptions;

      /***/
    },
    /* 84 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DraggableDestroyEvent = exports.DraggableInitializedEvent = exports.DraggableEvent = undefined;

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
       * Base draggable event
       * @class DraggableEvent
       * @module DraggableEvent
       * @extends AbstractEvent
       */

      var DraggableEvent = function (_AbstractEvent2$defau5) {
        _inherits(DraggableEvent, _AbstractEvent2$defau5);

        function DraggableEvent() {
          _classCallCheck(this, DraggableEvent);

          return _possibleConstructorReturn(this, (DraggableEvent.__proto__ || Object.getPrototypeOf(DraggableEvent)).apply(this, arguments));
        }

        _createClass(DraggableEvent, [{
          key: 'draggable',


          /**
           * Draggable instance
           * @property draggable
           * @type {Draggable}
           * @readonly
           */
          get: function get() {
            return this.data.draggable;
          }
        }]);

        return DraggableEvent;
      }(_AbstractEvent2.default);

      exports.DraggableEvent = DraggableEvent; /**
                                                * Draggable initialized event
                                                * @class DraggableInitializedEvent
                                                * @module DraggableInitializedEvent
                                                * @extends DraggableEvent
                                                */

      DraggableEvent.type = 'draggable';

      var DraggableInitializedEvent = function (_DraggableEvent2) {
        _inherits(DraggableInitializedEvent, _DraggableEvent2);

        function DraggableInitializedEvent() {
          _classCallCheck(this, DraggableInitializedEvent);

          return _possibleConstructorReturn(this, (DraggableInitializedEvent.__proto__ || Object.getPrototypeOf(DraggableInitializedEvent)).apply(this, arguments));
        }

        return DraggableInitializedEvent;
      }(DraggableEvent);

      exports.DraggableInitializedEvent = DraggableInitializedEvent; /**
                                                                      * Draggable destory event
                                                                      * @class DraggableInitializedEvent
                                                                      * @module DraggableDestroyEvent
                                                                      * @extends DraggableDestroyEvent
                                                                      */

      DraggableInitializedEvent.type = 'draggable:initialize';

      var DraggableDestroyEvent = function (_DraggableEvent3) {
        _inherits(DraggableDestroyEvent, _DraggableEvent3);

        function DraggableDestroyEvent() {
          _classCallCheck(this, DraggableDestroyEvent);

          return _possibleConstructorReturn(this, (DraggableDestroyEvent.__proto__ || Object.getPrototypeOf(DraggableDestroyEvent)).apply(this, arguments));
        }

        return DraggableDestroyEvent;
      }(DraggableEvent);

      exports.DraggableDestroyEvent = DraggableDestroyEvent;
      DraggableDestroyEvent.type = 'draggable:destroy';

      /***/
    },
    /* 85 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DragStopEvent = exports.DragPressureEvent = exports.DragOutContainerEvent = exports.DragOverContainerEvent = exports.DragOutEvent = exports.DragOverEvent = exports.DragMoveEvent = exports.DragStartEvent = exports.DragEvent = undefined;

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
       * Base drag event
       * @class DragEvent
       * @module DragEvent
       * @extends AbstractEvent
       */

      var DragEvent = function (_AbstractEvent2$defau6) {
        _inherits(DragEvent, _AbstractEvent2$defau6);

        function DragEvent() {
          _classCallCheck(this, DragEvent);

          return _possibleConstructorReturn(this, (DragEvent.__proto__ || Object.getPrototypeOf(DragEvent)).apply(this, arguments));
        }

        _createClass(DragEvent, [{
          key: 'source',


          /**
           * Draggables source element
           * @property source
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.source;
          }

          /**
           * Draggables original source element
           * @property originalSource
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'originalSource',
          get: function get() {
            return this.data.originalSource;
          }

          /**
           * Draggables mirror element
           * @property mirror
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'mirror',
          get: function get() {
            return this.data.mirror;
          }

          /**
           * Draggables source container element
           * @property sourceContainer
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'sourceContainer',
          get: function get() {
            return this.data.sourceContainer;
          }

          /**
           * Sensor event
           * @property sensorEvent
           * @type {SensorEvent}
           * @readonly
           */

        }, {
          key: 'sensorEvent',
          get: function get() {
            return this.data.sensorEvent;
          }

          /**
           * Original event that triggered sensor event
           * @property originalEvent
           * @type {Event}
           * @readonly
           */

        }, {
          key: 'originalEvent',
          get: function get() {
            if (this.sensorEvent) {
              return this.sensorEvent.originalEvent;
            }

            return null;
          }
        }]);

        return DragEvent;
      }(_AbstractEvent2.default);

      exports.DragEvent = DragEvent; /**
                                      * Drag start event
                                      * @class DragStartEvent
                                      * @module DragStartEvent
                                      * @extends DragEvent
                                      */

      DragEvent.type = 'drag';

      var DragStartEvent = function (_DragEvent2) {
        _inherits(DragStartEvent, _DragEvent2);

        function DragStartEvent() {
          _classCallCheck(this, DragStartEvent);

          return _possibleConstructorReturn(this, (DragStartEvent.__proto__ || Object.getPrototypeOf(DragStartEvent)).apply(this, arguments));
        }

        return DragStartEvent;
      }(DragEvent);

      exports.DragStartEvent = DragStartEvent; /**
                                                * Drag move event
                                                * @class DragMoveEvent
                                                * @module DragMoveEvent
                                                * @extends DragEvent
                                                */

      DragStartEvent.type = 'drag:start';
      DragStartEvent.cancelable = true;

      var DragMoveEvent = function (_DragEvent3) {
        _inherits(DragMoveEvent, _DragEvent3);

        function DragMoveEvent() {
          _classCallCheck(this, DragMoveEvent);

          return _possibleConstructorReturn(this, (DragMoveEvent.__proto__ || Object.getPrototypeOf(DragMoveEvent)).apply(this, arguments));
        }

        return DragMoveEvent;
      }(DragEvent);

      exports.DragMoveEvent = DragMoveEvent; /**
                                              * Drag over event
                                              * @class DragOverEvent
                                              * @module DragOverEvent
                                              * @extends DragEvent
                                              */

      DragMoveEvent.type = 'drag:move';

      var DragOverEvent = function (_DragEvent4) {
        _inherits(DragOverEvent, _DragEvent4);

        function DragOverEvent() {
          _classCallCheck(this, DragOverEvent);

          return _possibleConstructorReturn(this, (DragOverEvent.__proto__ || Object.getPrototypeOf(DragOverEvent)).apply(this, arguments));
        }

        _createClass(DragOverEvent, [{
          key: 'overContainer',


          /**
           * Draggable container you are over
           * @property overContainer
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.overContainer;
          }

          /**
           * Draggable element you are over
           * @property over
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'over',
          get: function get() {
            return this.data.over;
          }
        }]);

        return DragOverEvent;
      }(DragEvent);

      exports.DragOverEvent = DragOverEvent; /**
                                              * Drag out event
                                              * @class DragOutEvent
                                              * @module DragOutEvent
                                              * @extends DragEvent
                                              */

      DragOverEvent.type = 'drag:over';
      DragOverEvent.cancelable = true;

      var DragOutEvent = function (_DragEvent5) {
        _inherits(DragOutEvent, _DragEvent5);

        function DragOutEvent() {
          _classCallCheck(this, DragOutEvent);

          return _possibleConstructorReturn(this, (DragOutEvent.__proto__ || Object.getPrototypeOf(DragOutEvent)).apply(this, arguments));
        }

        _createClass(DragOutEvent, [{
          key: 'overContainer',


          /**
           * Draggable container you are over
           * @property overContainer
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.overContainer;
          }

          /**
           * Draggable element you left
           * @property over
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'over',
          get: function get() {
            return this.data.over;
          }
        }]);

        return DragOutEvent;
      }(DragEvent);

      exports.DragOutEvent = DragOutEvent; /**
                                            * Drag over container event
                                            * @class DragOverContainerEvent
                                            * @module DragOverContainerEvent
                                            * @extends DragEvent
                                            */

      DragOutEvent.type = 'drag:out';

      var DragOverContainerEvent = function (_DragEvent6) {
        _inherits(DragOverContainerEvent, _DragEvent6);

        function DragOverContainerEvent() {
          _classCallCheck(this, DragOverContainerEvent);

          return _possibleConstructorReturn(this, (DragOverContainerEvent.__proto__ || Object.getPrototypeOf(DragOverContainerEvent)).apply(this, arguments));
        }

        _createClass(DragOverContainerEvent, [{
          key: 'overContainer',


          /**
           * Draggable container you are over
           * @property overContainer
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.overContainer;
          }
        }]);

        return DragOverContainerEvent;
      }(DragEvent);

      exports.DragOverContainerEvent = DragOverContainerEvent; /**
                                                                * Drag out container event
                                                                * @class DragOutContainerEvent
                                                                * @module DragOutContainerEvent
                                                                * @extends DragEvent
                                                                */

      DragOverContainerEvent.type = 'drag:over:container';

      var DragOutContainerEvent = function (_DragEvent7) {
        _inherits(DragOutContainerEvent, _DragEvent7);

        function DragOutContainerEvent() {
          _classCallCheck(this, DragOutContainerEvent);

          return _possibleConstructorReturn(this, (DragOutContainerEvent.__proto__ || Object.getPrototypeOf(DragOutContainerEvent)).apply(this, arguments));
        }

        _createClass(DragOutContainerEvent, [{
          key: 'overContainer',


          /**
           * Draggable container you left
           * @property overContainer
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.overContainer;
          }
        }]);

        return DragOutContainerEvent;
      }(DragEvent);

      exports.DragOutContainerEvent = DragOutContainerEvent; /**
                                                              * Drag pressure event
                                                              * @class DragPressureEvent
                                                              * @module DragPressureEvent
                                                              * @extends DragEvent
                                                              */

      DragOutContainerEvent.type = 'drag:out:container';

      var DragPressureEvent = function (_DragEvent8) {
        _inherits(DragPressureEvent, _DragEvent8);

        function DragPressureEvent() {
          _classCallCheck(this, DragPressureEvent);

          return _possibleConstructorReturn(this, (DragPressureEvent.__proto__ || Object.getPrototypeOf(DragPressureEvent)).apply(this, arguments));
        }

        _createClass(DragPressureEvent, [{
          key: 'pressure',


          /**
           * Pressure applied on draggable element
           * @property pressure
           * @type {Number}
           * @readonly
           */
          get: function get() {
            return this.data.pressure;
          }
        }]);

        return DragPressureEvent;
      }(DragEvent);

      exports.DragPressureEvent = DragPressureEvent; /**
                                                      * Drag stop event
                                                      * @class DragStopEvent
                                                      * @module DragStopEvent
                                                      * @extends DragEvent
                                                      */

      DragPressureEvent.type = 'drag:pressure';

      var DragStopEvent = function (_DragEvent9) {
        _inherits(DragStopEvent, _DragEvent9);

        function DragStopEvent() {
          _classCallCheck(this, DragStopEvent);

          return _possibleConstructorReturn(this, (DragStopEvent.__proto__ || Object.getPrototypeOf(DragStopEvent)).apply(this, arguments));
        }

        return DragStopEvent;
      }(DragEvent);

      exports.DragStopEvent = DragStopEvent;
      DragStopEvent.type = 'drag:stop';

      /***/
    },
    /* 86 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _AbstractPlugin = __webpack_require__(4);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var onSortableSorted = Symbol('onSortableSorted');

      /**
       * SwapAnimation default options
       * @property {Object} defaultOptions
       * @property {Number} defaultOptions.duration
       * @property {String} defaultOptions.easingFunction
       * @property {Boolean} defaultOptions.horizontal
       * @type {Object}
       */
      var defaultOptions = exports.defaultOptions = {
        duration: 150,
        easingFunction: 'ease-in-out',
        horizontal: false
      };

      /**
       * SwapAnimation plugin adds swap animations for sortable
       * @class SwapAnimation
       * @module SwapAnimation
       * @extends AbstractPlugin
       */

      var SwapAnimation = function (_AbstractPlugin2$defa5) {
        _inherits(SwapAnimation, _AbstractPlugin2$defa5);

        /**
         * SwapAnimation constructor.
         * @constructs SwapAnimation
         * @param {Draggable} draggable - Draggable instance
         */
        function SwapAnimation(draggable) {
          _classCallCheck(this, SwapAnimation);

          /**
           * SwapAnimation options
           * @property {Object} options
           * @property {Number} defaultOptions.duration
           * @property {String} defaultOptions.easingFunction
           * @type {Object}
           */
          var _this54 = _possibleConstructorReturn(this, (SwapAnimation.__proto__ || Object.getPrototypeOf(SwapAnimation)).call(this, draggable));

          _this54.options = _extends({}, defaultOptions, _this54.getOptions());

          /**
           * Last animation frame
           * @property {Number} lastAnimationFrame
           * @type {Number}
           */
          _this54.lastAnimationFrame = null;

          _this54[onSortableSorted] = _this54[onSortableSorted].bind(_this54);
          return _this54;
        }

        /**
         * Attaches plugins event listeners
         */


        _createClass(SwapAnimation, [{
          key: 'attach',
          value: function attach() {
            this.draggable.on('sortable:sorted', this[onSortableSorted]);
          }

          /**
           * Detaches plugins event listeners
           */

        }, {
          key: 'detach',
          value: function detach() {
            this.draggable.off('sortable:sorted', this[onSortableSorted]);
          }

          /**
           * Returns options passed through draggable
           * @return {Object}
           */

        }, {
          key: 'getOptions',
          value: function getOptions() {
            return this.draggable.options.swapAnimation || {};
          }

          /**
           * Sortable sorted handler
           * @param {SortableSortedEvent} sortableEvent
           * @private
           */

        }, {
          key: onSortableSorted,
          value: function value(_ref18) {
            var _this55 = this;

            var oldIndex = _ref18.oldIndex,
                newIndex = _ref18.newIndex,
                dragEvent = _ref18.dragEvent;
            var source = dragEvent.source,
                over = dragEvent.over;


            cancelAnimationFrame(this.lastAnimationFrame);

            // Can be done in a separate frame
            this.lastAnimationFrame = requestAnimationFrame(function () {
              if (oldIndex >= newIndex) {
                animate(source, over, _this55.options);
              } else {
                animate(over, source, _this55.options);
              }
            });
          }
        }]);

        return SwapAnimation;
      }(_AbstractPlugin2.default);

      exports.default = SwapAnimation; /**
                                        * Animates two elements
                                        * @param {HTMLElement} from
                                        * @param {HTMLElement} to
                                        * @param {Object} options
                                        * @param {Number} options.duration
                                        * @param {String} options.easingFunction
                                        * @param {String} options.horizontal
                                        * @private
                                        */

      function animate(from, to, _ref19) {
        var duration = _ref19.duration,
            easingFunction = _ref19.easingFunction,
            horizontal = _ref19.horizontal;
        var _arr = [from, to];

        for (var _i = 0; _i < _arr.length; _i++) {
          var element = _arr[_i];
          element.style.pointerEvents = 'none';
        }

        if (horizontal) {
          var width = from.offsetWidth;
          from.style.transform = 'translate3d(' + width + 'px, 0, 0)';
          to.style.transform = 'translate3d(-' + width + 'px, 0, 0)';
        } else {
          var height = from.offsetHeight;
          from.style.transform = 'translate3d(0, ' + height + 'px, 0)';
          to.style.transform = 'translate3d(0, -' + height + 'px, 0)';
        }

        requestAnimationFrame(function () {
          var _arr2 = [from, to];

          for (var _i2 = 0; _i2 < _arr2.length; _i2++) {
            var element = _arr2[_i2];
            element.addEventListener('transitionend', resetElementOnTransitionEnd);
            element.style.transition = 'transform ' + duration + 'ms ' + easingFunction;
            element.style.transform = '';
          }
        });
      }

      /**
       * Resets animation style properties after animation has completed
       * @param {Event} event
       * @private
       */
      function resetElementOnTransitionEnd(event) {
        event.target.style.transition = '';
        event.target.style.pointerEvents = '';
        event.target.removeEventListener('transitionend', resetElementOnTransitionEnd);
      }

      /***/
    },
    /* 87 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _SwapAnimation = __webpack_require__(86);

      var _SwapAnimation2 = _interopRequireDefault(_SwapAnimation);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _SwapAnimation2.default;
      exports.defaultOptions = _SwapAnimation.defaultOptions;

      /***/
    },
    /* 88 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _AbstractPlugin = __webpack_require__(4);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      var _SnappableEvent = __webpack_require__(45);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var onDragStart = Symbol('onDragStart');
      var onDragStop = Symbol('onDragStop');
      var onDragOver = Symbol('onDragOver');
      var onDragOut = Symbol('onDragOut');
      var onMirrorCreated = Symbol('onMirrorCreated');
      var onMirrorDestroy = Symbol('onMirrorDestroy');

      /**
       * Snappable plugin which snaps draggable elements into place
       * @class Snappable
       * @module Snappable
       * @extends AbstractPlugin
       */

      var Snappable = function (_AbstractPlugin2$defa6) {
        _inherits(Snappable, _AbstractPlugin2$defa6);

        /**
         * Snappable constructor.
         * @constructs Snappable
         * @param {Draggable} draggable - Draggable instance
         */
        function Snappable(draggable) {
          _classCallCheck(this, Snappable);

          /**
           * Keeps track of the first source element
           * @property {HTMLElement|null} firstSource
           */
          var _this56 = _possibleConstructorReturn(this, (Snappable.__proto__ || Object.getPrototypeOf(Snappable)).call(this, draggable));

          _this56.firstSource = null;

          /**
           * Keeps track of the mirror element
           * @property {HTMLElement} mirror
           */
          _this56.mirror = null;

          _this56[onDragStart] = _this56[onDragStart].bind(_this56);
          _this56[onDragStop] = _this56[onDragStop].bind(_this56);
          _this56[onDragOver] = _this56[onDragOver].bind(_this56);
          _this56[onDragOut] = _this56[onDragOut].bind(_this56);
          _this56[onMirrorCreated] = _this56[onMirrorCreated].bind(_this56);
          _this56[onMirrorDestroy] = _this56[onMirrorDestroy].bind(_this56);
          return _this56;
        }

        /**
         * Attaches plugins event listeners
         */


        _createClass(Snappable, [{
          key: 'attach',
          value: function attach() {
            this.draggable.on('drag:start', this[onDragStart]).on('drag:stop', this[onDragStop]).on('drag:over', this[onDragOver]).on('drag:out', this[onDragOut]).on('droppable:over', this[onDragOver]).on('droppable:out', this[onDragOut]).on('mirror:created', this[onMirrorCreated]).on('mirror:destroy', this[onMirrorDestroy]);
          }

          /**
           * Detaches plugins event listeners
           */

        }, {
          key: 'detach',
          value: function detach() {
            this.draggable.off('drag:start', this[onDragStart]).off('drag:stop', this[onDragStop]).off('drag:over', this[onDragOver]).off('drag:out', this[onDragOut]).off('droppable:over', this[onDragOver]).off('droppable:out', this[onDragOut]).off('mirror:created', this[onMirrorCreated]).off('mirror:destroy', this[onMirrorDestroy]);
          }

          /**
           * Drag start handler
           * @private
           * @param {DragStartEvent} event - Drag start event
           */

        }, {
          key: onDragStart,
          value: function value(event) {
            if (event.canceled()) {
              return;
            }

            this.firstSource = event.source;
          }

          /**
           * Drag stop handler
           * @private
           * @param {DragStopEvent} event - Drag stop event
           */

        }, {
          key: onDragStop,
          value: function value() {
            this.firstSource = null;
          }

          /**
           * Drag over handler
           * @private
           * @param {DragOverEvent|DroppableOverEvent} event - Drag over event
           */

        }, {
          key: onDragOver,
          value: function value(event) {
            var _this57 = this;

            if (event.canceled()) {
              return;
            }

            var source = event.source || event.dragEvent.source;

            if (source === this.firstSource) {
              this.firstSource = null;
              return;
            }

            var snapInEvent = new _SnappableEvent.SnapInEvent({
              dragEvent: event,
              snappable: event.over || event.droppable
            });

            this.draggable.trigger(snapInEvent);

            if (snapInEvent.canceled()) {
              return;
            }

            if (this.mirror) {
              this.mirror.style.display = 'none';
            }

            source.classList.remove(this.draggable.getClassNameFor('source:dragging'));
            source.classList.add(this.draggable.getClassNameFor('source:placed'));

            // Need to cancel this in drag out
            setTimeout(function () {
              source.classList.remove(_this57.draggable.getClassNameFor('source:placed'));
            }, this.draggable.options.placedTimeout);
          }

          /**
           * Drag out handler
           * @private
           * @param {DragOutEvent|DroppableOutEvent} event - Drag out event
           */

        }, {
          key: onDragOut,
          value: function value(event) {
            if (event.canceled()) {
              return;
            }

            var source = event.source || event.dragEvent.source;

            var snapOutEvent = new _SnappableEvent.SnapOutEvent({
              dragEvent: event,
              snappable: event.over || event.droppable
            });

            this.draggable.trigger(snapOutEvent);

            if (snapOutEvent.canceled()) {
              return;
            }

            if (this.mirror) {
              this.mirror.style.display = '';
            }

            source.classList.add(this.draggable.getClassNameFor('source:dragging'));
          }

          /**
           * Mirror created handler
           * @param {MirrorCreatedEvent} mirrorEvent
           * @private
           */

        }, {
          key: onMirrorCreated,
          value: function value(_ref20) {
            var mirror = _ref20.mirror;

            this.mirror = mirror;
          }

          /**
           * Mirror destroy handler
           * @param {MirrorDestroyEvent} mirrorEvent
           * @private
           */

        }, {
          key: onMirrorDestroy,
          value: function value() {
            this.mirror = null;
          }
        }]);

        return Snappable;
      }(_AbstractPlugin2.default);

      exports.default = Snappable;

      /***/
    },
    /* 89 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.SnapOutEvent = exports.SnapInEvent = exports.SnapEvent = undefined;

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
       * Base snap event
       * @class SnapEvent
       * @module SnapEvent
       * @extends AbstractEvent
       */

      var SnapEvent = function (_AbstractEvent2$defau7) {
        _inherits(SnapEvent, _AbstractEvent2$defau7);

        function SnapEvent() {
          _classCallCheck(this, SnapEvent);

          return _possibleConstructorReturn(this, (SnapEvent.__proto__ || Object.getPrototypeOf(SnapEvent)).apply(this, arguments));
        }

        _createClass(SnapEvent, [{
          key: 'dragEvent',


          /**
           * Drag event that triggered this snap event
           * @property dragEvent
           * @type {DragEvent}
           * @readonly
           */
          get: function get() {
            return this.data.dragEvent;
          }

          /**
           * Snappable element
           * @property snappable
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'snappable',
          get: function get() {
            return this.data.snappable;
          }
        }]);

        return SnapEvent;
      }(_AbstractEvent2.default);

      exports.SnapEvent = SnapEvent; /**
                                      * Snap in event
                                      * @class SnapInEvent
                                      * @module SnapInEvent
                                      * @extends SnapEvent
                                      */

      SnapEvent.type = 'snap';

      var SnapInEvent = function (_SnapEvent) {
        _inherits(SnapInEvent, _SnapEvent);

        function SnapInEvent() {
          _classCallCheck(this, SnapInEvent);

          return _possibleConstructorReturn(this, (SnapInEvent.__proto__ || Object.getPrototypeOf(SnapInEvent)).apply(this, arguments));
        }

        return SnapInEvent;
      }(SnapEvent);

      exports.SnapInEvent = SnapInEvent; /**
                                          * Snap out event
                                          * @class SnapOutEvent
                                          * @module SnapOutEvent
                                          * @extends SnapEvent
                                          */

      SnapInEvent.type = 'snap:in';
      SnapInEvent.cancelable = true;

      var SnapOutEvent = function (_SnapEvent2) {
        _inherits(SnapOutEvent, _SnapEvent2);

        function SnapOutEvent() {
          _classCallCheck(this, SnapOutEvent);

          return _possibleConstructorReturn(this, (SnapOutEvent.__proto__ || Object.getPrototypeOf(SnapOutEvent)).apply(this, arguments));
        }

        return SnapOutEvent;
      }(SnapEvent);

      exports.SnapOutEvent = SnapOutEvent;
      SnapOutEvent.type = 'snap:out';
      SnapOutEvent.cancelable = true;

      /***/
    },
    /* 90 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _SnappableEvent = __webpack_require__(45);

      Object.keys(_SnappableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _SnappableEvent[key];
          }
        });
      });

      var _Snappable = __webpack_require__(88);

      var _Snappable2 = _interopRequireDefault(_Snappable);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _Snappable2.default;

      /***/
    },
    /* 91 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _AbstractPlugin = __webpack_require__(4);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      var _utils = __webpack_require__(5);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var onMirrorCreated = Symbol('onMirrorCreated');
      var onMirrorDestroy = Symbol('onMirrorDestroy');
      var onDragOver = Symbol('onDragOver');
      var resize = Symbol('resize');

      /**
       * ResizeMirror default options
       * @property {Object} defaultOptions
       * @type {Object}
       */
      var defaultOptions = exports.defaultOptions = {};

      /**
       * The ResizeMirror plugin resizes the mirror element to the dimensions of the draggable element that the mirror is hovering over
       * @class ResizeMirror
       * @module ResizeMirror
       * @extends AbstractPlugin
       */

      var ResizeMirror = function (_AbstractPlugin2$defa7) {
        _inherits(ResizeMirror, _AbstractPlugin2$defa7);

        /**
         * ResizeMirror constructor.
         * @constructs ResizeMirror
         * @param {Draggable} draggable - Draggable instance
         */
        function ResizeMirror(draggable) {
          _classCallCheck(this, ResizeMirror);

          /**
           * ResizeMirror options
           * @property {Object} options
           * @type {Object}
           */
          var _this61 = _possibleConstructorReturn(this, (ResizeMirror.__proto__ || Object.getPrototypeOf(ResizeMirror)).call(this, draggable));

          _this61.options = _extends({}, defaultOptions, _this61.getOptions());

          /**
           * ResizeMirror remembers the last width when resizing the mirror
           * to avoid additional writes to the DOM
           * @property {number} lastWidth
           */
          _this61.lastWidth = 0;

          /**
           * ResizeMirror remembers the last height when resizing the mirror
           * to avoid additional writes to the DOM
           * @property {number} lastHeight
           */
          _this61.lastHeight = 0;

          /**
           * Keeps track of the mirror element
           * @property {HTMLElement} mirror
           */
          _this61.mirror = null;

          _this61[onMirrorCreated] = _this61[onMirrorCreated].bind(_this61);
          _this61[onMirrorDestroy] = _this61[onMirrorDestroy].bind(_this61);
          _this61[onDragOver] = _this61[onDragOver].bind(_this61);
          return _this61;
        }

        /**
         * Attaches plugins event listeners
         */


        _createClass(ResizeMirror, [{
          key: 'attach',
          value: function attach() {
            this.draggable.on('mirror:created', this[onMirrorCreated]).on('drag:over', this[onDragOver]).on('drag:over:container', this[onDragOver]);
          }

          /**
           * Detaches plugins event listeners
           */

        }, {
          key: 'detach',
          value: function detach() {
            this.draggable.off('mirror:created', this[onMirrorCreated]).off('mirror:destroy', this[onMirrorDestroy]).off('drag:over', this[onDragOver]).off('drag:over:container', this[onDragOver]);
          }

          /**
           * Returns options passed through draggable
           * @return {Object}
           */

        }, {
          key: 'getOptions',
          value: function getOptions() {
            return this.draggable.options.resizeMirror || {};
          }

          /**
           * Mirror created handler
           * @param {MirrorCreatedEvent} mirrorEvent
           * @private
           */

        }, {
          key: onMirrorCreated,
          value: function value(_ref21) {
            var mirror = _ref21.mirror;

            this.mirror = mirror;
          }

          /**
           * Mirror destroy handler
           * @param {MirrorDestroyEvent} mirrorEvent
           * @private
           */

        }, {
          key: onMirrorDestroy,
          value: function value() {
            this.mirror = null;
          }

          /**
           * Drag over handler
           * @param {DragOverEvent | DragOverContainer} dragEvent
           * @private
           */

        }, {
          key: onDragOver,
          value: function value(dragEvent) {
            this[resize](dragEvent);
          }

          /**
           * Resize function for
           * @param {DragOverEvent | DragOverContainer} dragEvent
           * @private
           */

        }, {
          key: resize,
          value: function value(_ref22) {
            var _this62 = this;

            var overContainer = _ref22.overContainer,
                over = _ref22.over;

            requestAnimationFrame(function () {
              if (_this62.mirror.parentNode !== overContainer) {
                overContainer.appendChild(_this62.mirror);
              }

              var overElement = over || _this62.draggable.getDraggableElementsForContainer(overContainer)[0];

              if (!overElement) {
                return;
              }

              (0, _utils.requestNextAnimationFrame)(function () {
                var overRect = overElement.getBoundingClientRect();

                if (_this62.lastHeight === overRect.height && _this62.lastWidth === overRect.width) {
                  return;
                }

                _this62.mirror.style.width = overRect.width + 'px';
                _this62.mirror.style.height = overRect.height + 'px';

                _this62.lastWidth = overRect.width;
                _this62.lastHeight = overRect.height;
              });
            });
          }
        }]);

        return ResizeMirror;
      }(_AbstractPlugin2.default);

      exports.default = ResizeMirror;

      /***/
    },
    /* 92 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.defaultOptions = undefined;

      var _ResizeMirror = __webpack_require__(91);

      var _ResizeMirror2 = _interopRequireDefault(_ResizeMirror);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _ResizeMirror2.default;
      exports.defaultOptions = _ResizeMirror.defaultOptions;

      /***/
    },
    /* 93 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _AbstractPlugin = __webpack_require__(4);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      var _utils = __webpack_require__(5);

      var _CollidableEvent = __webpack_require__(46);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var onDragMove = Symbol('onDragMove');
      var onDragStop = Symbol('onDragStop');
      var onRequestAnimationFrame = Symbol('onRequestAnimationFrame');

      /**
       * Collidable plugin which detects colliding elements while dragging
       * @class Collidable
       * @module Collidable
       * @extends AbstractPlugin
       */

      var Collidable = function (_AbstractPlugin2$defa8) {
        _inherits(Collidable, _AbstractPlugin2$defa8);

        /**
         * Collidable constructor.
         * @constructs Collidable
         * @param {Draggable} draggable - Draggable instance
         */
        function Collidable(draggable) {
          _classCallCheck(this, Collidable);

          /**
           * Keeps track of currently colliding elements
           * @property {HTMLElement|null} currentlyCollidingElement
           * @type {HTMLElement|null}
           */
          var _this63 = _possibleConstructorReturn(this, (Collidable.__proto__ || Object.getPrototypeOf(Collidable)).call(this, draggable));

          _this63.currentlyCollidingElement = null;

          /**
           * Keeps track of currently colliding elements
           * @property {HTMLElement|null} lastCollidingElement
           * @type {HTMLElement|null}
           */
          _this63.lastCollidingElement = null;

          /**
           * Animation frame for finding colliding elements
           * @property {Number|null} currentAnimationFrame
           * @type {Number|null}
           */
          _this63.currentAnimationFrame = null;

          _this63[onDragMove] = _this63[onDragMove].bind(_this63);
          _this63[onDragStop] = _this63[onDragStop].bind(_this63);
          _this63[onRequestAnimationFrame] = _this63[onRequestAnimationFrame].bind(_this63);
          return _this63;
        }

        /**
         * Attaches plugins event listeners
         */


        _createClass(Collidable, [{
          key: 'attach',
          value: function attach() {
            this.draggable.on('drag:move', this[onDragMove]).on('drag:stop', this[onDragStop]);
          }

          /**
           * Detaches plugins event listeners
           */

        }, {
          key: 'detach',
          value: function detach() {
            this.draggable.off('drag:move', this[onDragMove]).off('drag:stop', this[onDragStop]);
          }

          /**
           * Returns current collidables based on `collidables` option
           * @return {HTMLElement[]}
           */

        }, {
          key: 'getCollidables',
          value: function getCollidables() {
            var collidables = this.draggable.options.collidables;

            if (typeof collidables === 'string') {
              return Array.prototype.slice.call(document.querySelectorAll(collidables));
            } else if (collidables instanceof NodeList || collidables instanceof Array) {
              return Array.prototype.slice.call(collidables);
            } else if (collidables instanceof HTMLElement) {
              return [collidables];
            } else if (typeof collidables === 'function') {
              return collidables();
            } else {
              return [];
            }
          }

          /**
           * Drag move handler
           * @private
           * @param {DragMoveEvent} event - Drag move event
           */

        }, {
          key: onDragMove,
          value: function value(event) {
            var target = event.sensorEvent.target;

            this.currentAnimationFrame = requestAnimationFrame(this[onRequestAnimationFrame](target));

            if (this.currentlyCollidingElement) {
              event.cancel();
            }

            var collidableInEvent = new _CollidableEvent.CollidableInEvent({
              dragEvent: event,
              collidingElement: this.currentlyCollidingElement
            });

            var collidableOutEvent = new _CollidableEvent.CollidableOutEvent({
              dragEvent: event,
              collidingElement: this.lastCollidingElement
            });

            var enteringCollidable = Boolean(this.currentlyCollidingElement && this.lastCollidingElement !== this.currentlyCollidingElement);
            var leavingCollidable = Boolean(!this.currentlyCollidingElement && this.lastCollidingElement);

            if (enteringCollidable) {
              if (this.lastCollidingElement) {
                this.draggable.trigger(collidableOutEvent);
              }

              this.draggable.trigger(collidableInEvent);
            } else if (leavingCollidable) {
              this.draggable.trigger(collidableOutEvent);
            }

            this.lastCollidingElement = this.currentlyCollidingElement;
          }

          /**
           * Drag stop handler
           * @private
           * @param {DragStopEvent} event - Drag stop event
           */

        }, {
          key: onDragStop,
          value: function value(event) {
            var lastCollidingElement = this.currentlyCollidingElement || this.lastCollidingElement;
            var collidableOutEvent = new _CollidableEvent.CollidableOutEvent({
              dragEvent: event,
              collidingElement: lastCollidingElement
            });

            if (lastCollidingElement) {
              this.draggable.trigger(collidableOutEvent);
            }

            this.lastCollidingElement = null;
            this.currentlyCollidingElement = null;
          }

          /**
           * Animation frame function
           * @private
           * @param {HTMLElement} target - Current move target
           * @return {Function}
           */

        }, {
          key: onRequestAnimationFrame,
          value: function value(target) {
            var _this64 = this;

            return function () {
              var collidables = _this64.getCollidables();
              _this64.currentlyCollidingElement = (0, _utils.closest)(target, function (element) {
                return collidables.includes(element);
              });
            };
          }
        }]);

        return Collidable;
      }(_AbstractPlugin2.default);

      exports.default = Collidable;

      /***/
    },
    /* 94 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.CollidableOutEvent = exports.CollidableInEvent = exports.CollidableEvent = undefined;

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
       * Base collidable event
       * @class CollidableEvent
       * @module CollidableEvent
       * @extends AbstractEvent
       */

      var CollidableEvent = function (_AbstractEvent2$defau8) {
        _inherits(CollidableEvent, _AbstractEvent2$defau8);

        function CollidableEvent() {
          _classCallCheck(this, CollidableEvent);

          return _possibleConstructorReturn(this, (CollidableEvent.__proto__ || Object.getPrototypeOf(CollidableEvent)).apply(this, arguments));
        }

        _createClass(CollidableEvent, [{
          key: 'dragEvent',


          /**
           * Drag event that triggered this colliable event
           * @property dragEvent
           * @type {DragEvent}
           * @readonly
           */
          get: function get() {
            return this.data.dragEvent;
          }
        }]);

        return CollidableEvent;
      }(_AbstractEvent2.default);

      exports.CollidableEvent = CollidableEvent; /**
                                                  * Collidable in event
                                                  * @class CollidableInEvent
                                                  * @module CollidableInEvent
                                                  * @extends CollidableEvent
                                                  */

      CollidableEvent.type = 'collidable';

      var CollidableInEvent = function (_CollidableEvent2) {
        _inherits(CollidableInEvent, _CollidableEvent2);

        function CollidableInEvent() {
          _classCallCheck(this, CollidableInEvent);

          return _possibleConstructorReturn(this, (CollidableInEvent.__proto__ || Object.getPrototypeOf(CollidableInEvent)).apply(this, arguments));
        }

        _createClass(CollidableInEvent, [{
          key: 'collidingElement',


          /**
           * Element you are currently colliding with
           * @property collidingElement
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.collidingElement;
          }
        }]);

        return CollidableInEvent;
      }(CollidableEvent);

      exports.CollidableInEvent = CollidableInEvent; /**
                                                      * Collidable out event
                                                      * @class CollidableOutEvent
                                                      * @module CollidableOutEvent
                                                      * @extends CollidableEvent
                                                      */

      CollidableInEvent.type = 'collidable:in';

      var CollidableOutEvent = function (_CollidableEvent3) {
        _inherits(CollidableOutEvent, _CollidableEvent3);

        function CollidableOutEvent() {
          _classCallCheck(this, CollidableOutEvent);

          return _possibleConstructorReturn(this, (CollidableOutEvent.__proto__ || Object.getPrototypeOf(CollidableOutEvent)).apply(this, arguments));
        }

        _createClass(CollidableOutEvent, [{
          key: 'collidingElement',


          /**
           * Element you were previously colliding with
           * @property collidingElement
           * @type {HTMLElement}
           * @readonly
           */
          get: function get() {
            return this.data.collidingElement;
          }
        }]);

        return CollidableOutEvent;
      }(CollidableEvent);

      exports.CollidableOutEvent = CollidableOutEvent;
      CollidableOutEvent.type = 'collidable:out';

      /***/
    },
    /* 95 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _CollidableEvent = __webpack_require__(46);

      Object.keys(_CollidableEvent).forEach(function (key) {
        if (key === "default" || key === "__esModule") return;
        Object.defineProperty(exports, key, {
          enumerable: true,
          get: function get() {
            return _CollidableEvent[key];
          }
        });
      });

      var _Collidable = __webpack_require__(93);

      var _Collidable2 = _interopRequireDefault(_Collidable);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _Collidable2.default;

      /***/
    },
    /* 96 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Collidable = __webpack_require__(95);

      Object.defineProperty(exports, 'Collidable', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Collidable).default;
        }
      });

      var _ResizeMirror = __webpack_require__(92);

      Object.defineProperty(exports, 'ResizeMirror', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_ResizeMirror).default;
        }
      });
      Object.defineProperty(exports, 'defaultResizeMirrorOptions', {
        enumerable: true,
        get: function get() {
          return _ResizeMirror.defaultOptions;
        }
      });

      var _Snappable = __webpack_require__(90);

      Object.defineProperty(exports, 'Snappable', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_Snappable).default;
        }
      });

      var _SwapAnimation = __webpack_require__(87);

      Object.defineProperty(exports, 'SwapAnimation', {
        enumerable: true,
        get: function get() {
          return _interopRequireDefault(_SwapAnimation).default;
        }
      });
      Object.defineProperty(exports, 'defaultSwapAnimationOptions', {
        enumerable: true,
        get: function get() {
          return _SwapAnimation.defaultOptions;
        }
      });

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /***/
    },
    /* 97 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _Sensor = __webpack_require__(17);

      var _Sensor2 = _interopRequireDefault(_Sensor);

      var _SensorEvent = __webpack_require__(16);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var onMouseForceWillBegin = Symbol('onMouseForceWillBegin');
      var onMouseForceDown = Symbol('onMouseForceDown');
      var onMouseDown = Symbol('onMouseDown');
      var onMouseForceChange = Symbol('onMouseForceChange');
      var onMouseMove = Symbol('onMouseMove');
      var onMouseUp = Symbol('onMouseUp');
      var onMouseForceGlobalChange = Symbol('onMouseForceGlobalChange');

      /**
       * This sensor picks up native force touch events and dictates drag operations
       * @class ForceTouchSensor
       * @module ForceTouchSensor
       * @extends Sensor
       */

      var ForceTouchSensor = function (_Sensor2$default) {
        _inherits(ForceTouchSensor, _Sensor2$default);

        /**
         * ForceTouchSensor constructor.
         * @constructs ForceTouchSensor
         * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
         * @param {Object} options - Options
         */
        function ForceTouchSensor() {
          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, ForceTouchSensor);

          /**
           * Draggable element needs to be remembered to unset the draggable attribute after drag operation has completed
           * @property mightDrag
           * @type {Boolean}
           */
          var _this68 = _possibleConstructorReturn(this, (ForceTouchSensor.__proto__ || Object.getPrototypeOf(ForceTouchSensor)).call(this, containers, options));

          _this68.mightDrag = false;

          _this68[onMouseForceWillBegin] = _this68[onMouseForceWillBegin].bind(_this68);
          _this68[onMouseForceDown] = _this68[onMouseForceDown].bind(_this68);
          _this68[onMouseDown] = _this68[onMouseDown].bind(_this68);
          _this68[onMouseForceChange] = _this68[onMouseForceChange].bind(_this68);
          _this68[onMouseMove] = _this68[onMouseMove].bind(_this68);
          _this68[onMouseUp] = _this68[onMouseUp].bind(_this68);
          return _this68;
        }

        /**
         * Attaches sensors event listeners to the DOM
         */


        _createClass(ForceTouchSensor, [{
          key: 'attach',
          value: function attach() {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = this.containers[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var container = _step3.value;

                container.addEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
                container.addEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
                container.addEventListener('mousedown', this[onMouseDown], true);
                container.addEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }

            document.addEventListener('mousemove', this[onMouseMove]);
            document.addEventListener('mouseup', this[onMouseUp]);
          }

          /**
           * Detaches sensors event listeners to the DOM
           */

        }, {
          key: 'detach',
          value: function detach() {
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = this.containers[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var container = _step4.value;

                container.removeEventListener('webkitmouseforcewillbegin', this[onMouseForceWillBegin], false);
                container.removeEventListener('webkitmouseforcedown', this[onMouseForceDown], false);
                container.removeEventListener('mousedown', this[onMouseDown], true);
                container.removeEventListener('webkitmouseforcechanged', this[onMouseForceChange], false);
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            document.removeEventListener('mousemove', this[onMouseMove]);
            document.removeEventListener('mouseup', this[onMouseUp]);
          }

          /**
           * Mouse force will begin handler
           * @private
           * @param {Event} event - Mouse force will begin event
           */

        }, {
          key: onMouseForceWillBegin,
          value: function value(event) {
            event.preventDefault();
            this.mightDrag = true;
          }

          /**
           * Mouse force down handler
           * @private
           * @param {Event} event - Mouse force down event
           */

        }, {
          key: onMouseForceDown,
          value: function value(event) {
            if (this.dragging) {
              return;
            }

            var target = document.elementFromPoint(event.clientX, event.clientY);
            var container = event.currentTarget;

            var dragStartEvent = new _SensorEvent.DragStartSensorEvent({
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: container,
              originalEvent: event
            });

            this.trigger(container, dragStartEvent);

            this.currentContainer = container;
            this.dragging = !dragStartEvent.canceled();
            this.mightDrag = false;
          }

          /**
           * Mouse up handler
           * @private
           * @param {Event} event - Mouse up event
           */

        }, {
          key: onMouseUp,
          value: function value(event) {
            if (!this.dragging) {
              return;
            }

            var dragStopEvent = new _SensorEvent.DragStopSensorEvent({
              clientX: event.clientX,
              clientY: event.clientY,
              target: null,
              container: this.currentContainer,
              originalEvent: event
            });

            this.trigger(this.currentContainer, dragStopEvent);

            this.currentContainer = null;
            this.dragging = false;
            this.mightDrag = false;
          }

          /**
           * Mouse down handler
           * @private
           * @param {Event} event - Mouse down event
           */

        }, {
          key: onMouseDown,
          value: function value(event) {
            if (!this.mightDrag) {
              return;
            }

            // Need workaround for real click
            // Cancel potential drag events
            event.stopPropagation();
            event.stopImmediatePropagation();
            event.preventDefault();
          }

          /**
           * Mouse move handler
           * @private
           * @param {Event} event - Mouse force will begin event
           */

        }, {
          key: onMouseMove,
          value: function value(event) {
            if (!this.dragging) {
              return;
            }

            var target = document.elementFromPoint(event.clientX, event.clientY);

            var dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: this.currentContainer,
              originalEvent: event
            });

            this.trigger(this.currentContainer, dragMoveEvent);
          }

          /**
           * Mouse force change handler
           * @private
           * @param {Event} event - Mouse force change event
           */

        }, {
          key: onMouseForceChange,
          value: function value(event) {
            if (this.dragging) {
              return;
            }

            var target = event.target;
            var container = event.currentTarget;

            var dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
              pressure: event.webkitForce,
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: container,
              originalEvent: event
            });

            this.trigger(container, dragPressureEvent);
          }

          /**
           * Mouse force global change handler
           * @private
           * @param {Event} event - Mouse force global change event
           */

        }, {
          key: onMouseForceGlobalChange,
          value: function value(event) {
            if (!this.dragging) {
              return;
            }

            var target = event.target;

            var dragPressureEvent = new _SensorEvent.DragPressureSensorEvent({
              pressure: event.webkitForce,
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: this.currentContainer,
              originalEvent: event
            });

            this.trigger(this.currentContainer, dragPressureEvent);
          }
        }]);

        return ForceTouchSensor;
      }(_Sensor2.default);

      exports.default = ForceTouchSensor;

      /***/
    },
    /* 98 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _ForceTouchSensor = __webpack_require__(97);

      var _ForceTouchSensor2 = _interopRequireDefault(_ForceTouchSensor);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _ForceTouchSensor2.default;

      /***/
    },
    /* 99 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(5);

      var _Sensor = __webpack_require__(17);

      var _Sensor2 = _interopRequireDefault(_Sensor);

      var _SensorEvent = __webpack_require__(16);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var onMouseDown = Symbol('onMouseDown');
      var onMouseUp = Symbol('onMouseUp');
      var onDragStart = Symbol('onDragStart');
      var onDragOver = Symbol('onDragOver');
      var onDragEnd = Symbol('onDragEnd');
      var onDrop = Symbol('onDrop');
      var reset = Symbol('reset');

      /**
       * This sensor picks up native browser drag events and dictates drag operations
       * @class DragSensor
       * @module DragSensor
       * @extends Sensor
       */

      var DragSensor = function (_Sensor2$default2) {
        _inherits(DragSensor, _Sensor2$default2);

        /**
         * DragSensor constructor.
         * @constructs DragSensor
         * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
         * @param {Object} options - Options
         */
        function DragSensor() {
          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, DragSensor);

          /**
           * Mouse down timer which will end up setting the draggable attribute, unless canceled
           * @property mouseDownTimeout
           * @type {Number}
           */
          var _this69 = _possibleConstructorReturn(this, (DragSensor.__proto__ || Object.getPrototypeOf(DragSensor)).call(this, containers, options));

          _this69.mouseDownTimeout = null;

          /**
           * Draggable element needs to be remembered to unset the draggable attribute after drag operation has completed
           * @property draggableElement
           * @type {HTMLElement}
           */
          _this69.draggableElement = null;

          /**
           * Native draggable element could be links or images, their draggable state will be disabled during drag operation
           * @property nativeDraggableElement
           * @type {HTMLElement}
           */
          _this69.nativeDraggableElement = null;

          _this69[onMouseDown] = _this69[onMouseDown].bind(_this69);
          _this69[onMouseUp] = _this69[onMouseUp].bind(_this69);
          _this69[onDragStart] = _this69[onDragStart].bind(_this69);
          _this69[onDragOver] = _this69[onDragOver].bind(_this69);
          _this69[onDragEnd] = _this69[onDragEnd].bind(_this69);
          _this69[onDrop] = _this69[onDrop].bind(_this69);
          return _this69;
        }

        /**
         * Attaches sensors event listeners to the DOM
         */


        _createClass(DragSensor, [{
          key: 'attach',
          value: function attach() {
            document.addEventListener('mousedown', this[onMouseDown], true);
          }

          /**
           * Detaches sensors event listeners to the DOM
           */

        }, {
          key: 'detach',
          value: function detach() {
            document.removeEventListener('mousedown', this[onMouseDown], true);
          }

          /**
           * Drag start handler
           * @private
           * @param {Event} event - Drag start event
           */

        }, {
          key: onDragStart,
          value: function value(event) {
            var _this70 = this;

            // Need for firefox. "text" key is needed for IE
            event.dataTransfer.setData('text', '');
            event.dataTransfer.effectAllowed = this.options.type;

            var target = document.elementFromPoint(event.clientX, event.clientY);
            this.currentContainer = (0, _utils.closest)(event.target, this.containers);

            if (!this.currentContainer) {
              return;
            }

            var dragStartEvent = new _SensorEvent.DragStartSensorEvent({
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: this.currentContainer,
              originalEvent: event
            });

            // Workaround
            setTimeout(function () {
              _this70.trigger(_this70.currentContainer, dragStartEvent);

              if (dragStartEvent.canceled()) {
                _this70.dragging = false;
              } else {
                _this70.dragging = true;
              }
            }, 0);
          }

          /**
           * Drag over handler
           * @private
           * @param {Event} event - Drag over event
           */

        }, {
          key: onDragOver,
          value: function value(event) {
            if (!this.dragging) {
              return;
            }

            var target = document.elementFromPoint(event.clientX, event.clientY);
            var container = this.currentContainer;

            var dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: container,
              originalEvent: event
            });

            this.trigger(container, dragMoveEvent);

            if (!dragMoveEvent.canceled()) {
              event.preventDefault();
              event.dataTransfer.dropEffect = this.options.type;
            }
          }

          /**
           * Drag end handler
           * @private
           * @param {Event} event - Drag end event
           */

        }, {
          key: onDragEnd,
          value: function value(event) {
            if (!this.dragging) {
              return;
            }

            document.removeEventListener('mouseup', this[onMouseUp], true);

            var target = document.elementFromPoint(event.clientX, event.clientY);
            var container = this.currentContainer;

            var dragStopEvent = new _SensorEvent.DragStopSensorEvent({
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: container,
              originalEvent: event
            });

            this.trigger(container, dragStopEvent);

            this.dragging = false;

            this[reset]();
          }

          /**
           * Drop handler
           * @private
           * @param {Event} event - Drop event
           */

        }, {
          key: onDrop,
          value: function value(event) {
            // eslint-disable-line class-methods-use-this
            event.preventDefault();
          }

          /**
           * Mouse down handler
           * @private
           * @param {Event} event - Mouse down event
           */

        }, {
          key: onMouseDown,
          value: function value(event) {
            var _this71 = this;

            // Firefox bug for inputs within draggables https://bugzilla.mozilla.org/show_bug.cgi?id=739071
            if (event.target && (event.target.form || event.target.contenteditable)) {
              return;
            }

            var nativeDraggableElement = (0, _utils.closest)(event.target, function (element) {
              return element.draggable;
            });

            if (nativeDraggableElement) {
              nativeDraggableElement.draggable = false;
              this.nativeDraggableElement = nativeDraggableElement;
            }

            document.addEventListener('mouseup', this[onMouseUp], true);
            document.addEventListener('dragstart', this[onDragStart], false);
            document.addEventListener('dragover', this[onDragOver], false);
            document.addEventListener('dragend', this[onDragEnd], false);
            document.addEventListener('drop', this[onDrop], false);

            var target = (0, _utils.closest)(event.target, this.options.draggable);

            if (!target) {
              return;
            }

            this.mouseDownTimeout = setTimeout(function () {
              target.draggable = true;
              _this71.draggableElement = target;
            }, this.options.delay);
          }

          /**
           * Mouse up handler
           * @private
           * @param {Event} event - Mouse up event
           */

        }, {
          key: onMouseUp,
          value: function value() {
            this[reset]();
          }

          /**
           * Mouse up handler
           * @private
           * @param {Event} event - Mouse up event
           */

        }, {
          key: reset,
          value: function value() {
            clearTimeout(this.mouseDownTimeout);

            document.removeEventListener('mouseup', this[onMouseUp], true);
            document.removeEventListener('dragstart', this[onDragStart], false);
            document.removeEventListener('dragover', this[onDragOver], false);
            document.removeEventListener('dragend', this[onDragEnd], false);
            document.removeEventListener('drop', this[onDrop], false);

            if (this.nativeDraggableElement) {
              this.nativeDraggableElement.draggable = true;
              this.nativeDraggableElement = null;
            }

            if (this.draggableElement) {
              this.draggableElement.draggable = false;
              this.draggableElement = null;
            }
          }
        }]);

        return DragSensor;
      }(_Sensor2.default);

      exports.default = DragSensor;

      /***/
    },
    /* 100 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _DragSensor = __webpack_require__(99);

      var _DragSensor2 = _interopRequireDefault(_DragSensor);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _DragSensor2.default;

      /***/
    },
    /* 101 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(5);

      var _Sensor = __webpack_require__(17);

      var _Sensor2 = _interopRequireDefault(_Sensor);

      var _SensorEvent = __webpack_require__(16);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var onTouchStart = Symbol('onTouchStart');
      var onTouchHold = Symbol('onTouchHold');
      var onTouchEnd = Symbol('onTouchEnd');
      var onTouchMove = Symbol('onTouchMove');

      /**
       * Prevents scrolling when set to true
       * @var {Boolean} preventScrolling
       */
      var preventScrolling = false;

      // WebKit requires cancelable `touchmove` events to be added as early as possible
      window.addEventListener('touchmove', function (event) {
        if (!preventScrolling) {
          return;
        }

        // Prevent scrolling
        event.preventDefault();
      }, { passive: false });

      /**
       * This sensor picks up native browser touch events and dictates drag operations
       * @class TouchSensor
       * @module TouchSensor
       * @extends Sensor
       */

      var TouchSensor = function (_Sensor2$default3) {
        _inherits(TouchSensor, _Sensor2$default3);

        /**
         * TouchSensor constructor.
         * @constructs TouchSensor
         * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
         * @param {Object} options - Options
         */
        function TouchSensor() {
          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, TouchSensor);

          /**
           * Closest scrollable container so accidental scroll can cancel long touch
           * @property currentScrollableParent
           * @type {HTMLElement}
           */
          var _this72 = _possibleConstructorReturn(this, (TouchSensor.__proto__ || Object.getPrototypeOf(TouchSensor)).call(this, containers, options));

          _this72.currentScrollableParent = null;

          /**
           * TimeoutID for long touch
           * @property tapTimeout
           * @type {Number}
           */
          _this72.tapTimeout = null;

          /**
           * touchMoved indicates if touch has moved during tapTimeout
           * @property touchMoved
           * @type {Boolean}
           */
          _this72.touchMoved = false;

          _this72[onTouchStart] = _this72[onTouchStart].bind(_this72);
          _this72[onTouchHold] = _this72[onTouchHold].bind(_this72);
          _this72[onTouchEnd] = _this72[onTouchEnd].bind(_this72);
          _this72[onTouchMove] = _this72[onTouchMove].bind(_this72);
          return _this72;
        }

        /**
         * Attaches sensors event listeners to the DOM
         */


        _createClass(TouchSensor, [{
          key: 'attach',
          value: function attach() {
            document.addEventListener('touchstart', this[onTouchStart]);
          }

          /**
           * Detaches sensors event listeners to the DOM
           */

        }, {
          key: 'detach',
          value: function detach() {
            document.removeEventListener('touchstart', this[onTouchStart]);
          }

          /**
           * Touch start handler
           * @private
           * @param {Event} event - Touch start event
           */

        }, {
          key: onTouchStart,
          value: function value(event) {
            var container = (0, _utils.closest)(event.target, this.containers);

            if (!container) {
              return;
            }

            document.addEventListener('touchmove', this[onTouchMove]);
            document.addEventListener('touchend', this[onTouchEnd]);
            document.addEventListener('touchcancel', this[onTouchEnd]);
            container.addEventListener('contextmenu', onContextMenu);

            this.currentContainer = container;
            this.tapTimeout = setTimeout(this[onTouchHold](event, container), this.options.delay);
          }

          /**
           * Touch hold handler
           * @private
           * @param {Event} event - Touch start event
           * @param {HTMLElement} container - Container element
           */

        }, {
          key: onTouchHold,
          value: function value(event, container) {
            var _this73 = this;

            return function () {
              if (_this73.touchMoved) {
                return;
              }

              var touch = event.touches[0] || event.changedTouches[0];
              var target = event.target;

              var dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                clientX: touch.pageX,
                clientY: touch.pageY,
                target: target,
                container: container,
                originalEvent: event
              });

              _this73.trigger(container, dragStartEvent);

              _this73.dragging = !dragStartEvent.canceled();
              preventScrolling = _this73.dragging;
            };
          }

          /**
           * Touch move handler
           * @private
           * @param {Event} event - Touch move event
           */

        }, {
          key: onTouchMove,
          value: function value(event) {
            this.touchMoved = true;

            if (!this.dragging) {
              return;
            }

            var touch = event.touches[0] || event.changedTouches[0];
            var target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);

            var dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
              clientX: touch.pageX,
              clientY: touch.pageY,
              target: target,
              container: this.currentContainer,
              originalEvent: event
            });

            this.trigger(this.currentContainer, dragMoveEvent);
          }

          /**
           * Touch end handler
           * @private
           * @param {Event} event - Touch end event
           */

        }, {
          key: onTouchEnd,
          value: function value(event) {
            this.touchMoved = false;
            preventScrolling = false;

            document.removeEventListener('touchend', this[onTouchEnd]);
            document.removeEventListener('touchcancel', this[onTouchEnd]);
            document.removeEventListener('touchmove', this[onTouchMove]);

            if (this.currentContainer) {
              this.currentContainer.removeEventListener('contextmenu', onContextMenu);
            }

            clearTimeout(this.tapTimeout);

            if (!this.dragging) {
              return;
            }

            var touch = event.touches[0] || event.changedTouches[0];
            var target = document.elementFromPoint(touch.pageX - window.scrollX, touch.pageY - window.scrollY);

            event.preventDefault();

            var dragStopEvent = new _SensorEvent.DragStopSensorEvent({
              clientX: touch.pageX,
              clientY: touch.pageY,
              target: target,
              container: this.currentContainer,
              originalEvent: event
            });

            this.trigger(this.currentContainer, dragStopEvent);

            this.currentContainer = null;
            this.dragging = false;
          }
        }]);

        return TouchSensor;
      }(_Sensor2.default);

      exports.default = TouchSensor;
      function onContextMenu(event) {
        event.preventDefault();
        event.stopPropagation();
      }

      /***/
    },
    /* 102 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _TouchSensor = __webpack_require__(101);

      var _TouchSensor2 = _interopRequireDefault(_TouchSensor);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _TouchSensor2.default;

      /***/
    },
    /* 103 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.DragPressureSensorEvent = exports.DragStopSensorEvent = exports.DragMoveSensorEvent = exports.DragStartSensorEvent = exports.SensorEvent = undefined;

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      /**
       * Base sensor event
       * @class SensorEvent
       * @module SensorEvent
       * @extends AbstractEvent
       */

      var SensorEvent = function (_AbstractEvent2$defau9) {
        _inherits(SensorEvent, _AbstractEvent2$defau9);

        function SensorEvent() {
          _classCallCheck(this, SensorEvent);

          return _possibleConstructorReturn(this, (SensorEvent.__proto__ || Object.getPrototypeOf(SensorEvent)).apply(this, arguments));
        }

        _createClass(SensorEvent, [{
          key: 'originalEvent',

          /**
           * Original browser event that triggered a sensor
           * @property originalEvent
           * @type {Event}
           * @readonly
           */
          get: function get() {
            return this.data.originalEvent;
          }

          /**
           * Normalized clientX for both touch and mouse events
           * @property clientX
           * @type {Number}
           * @readonly
           */

        }, {
          key: 'clientX',
          get: function get() {
            return this.data.clientX;
          }

          /**
           * Normalized clientY for both touch and mouse events
           * @property clientY
           * @type {Number}
           * @readonly
           */

        }, {
          key: 'clientY',
          get: function get() {
            return this.data.clientY;
          }

          /**
           * Normalized target for both touch and mouse events
           * Returns the element that is behind cursor or touch pointer
           * @property target
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'target',
          get: function get() {
            return this.data.target;
          }

          /**
           * Container that initiated the sensor
           * @property container
           * @type {HTMLElement}
           * @readonly
           */

        }, {
          key: 'container',
          get: function get() {
            return this.data.container;
          }

          /**
           * Trackpad pressure
           * @property pressure
           * @type {Number}
           * @readonly
           */

        }, {
          key: 'pressure',
          get: function get() {
            return this.data.pressure;
          }
        }]);

        return SensorEvent;
      }(_AbstractEvent2.default);

      exports.SensorEvent = SensorEvent; /**
                                          * Drag start sensor event
                                          * @class DragStartSensorEvent
                                          * @module DragStartSensorEvent
                                          * @extends SensorEvent
                                          */

      var DragStartSensorEvent = function (_SensorEvent2) {
        _inherits(DragStartSensorEvent, _SensorEvent2);

        function DragStartSensorEvent() {
          _classCallCheck(this, DragStartSensorEvent);

          return _possibleConstructorReturn(this, (DragStartSensorEvent.__proto__ || Object.getPrototypeOf(DragStartSensorEvent)).apply(this, arguments));
        }

        return DragStartSensorEvent;
      }(SensorEvent);

      exports.DragStartSensorEvent = DragStartSensorEvent; /**
                                                            * Drag move sensor event
                                                            * @class DragMoveSensorEvent
                                                            * @module DragMoveSensorEvent
                                                            * @extends SensorEvent
                                                            */

      DragStartSensorEvent.type = 'drag:start';

      var DragMoveSensorEvent = function (_SensorEvent3) {
        _inherits(DragMoveSensorEvent, _SensorEvent3);

        function DragMoveSensorEvent() {
          _classCallCheck(this, DragMoveSensorEvent);

          return _possibleConstructorReturn(this, (DragMoveSensorEvent.__proto__ || Object.getPrototypeOf(DragMoveSensorEvent)).apply(this, arguments));
        }

        return DragMoveSensorEvent;
      }(SensorEvent);

      exports.DragMoveSensorEvent = DragMoveSensorEvent; /**
                                                          * Drag stop sensor event
                                                          * @class DragStopSensorEvent
                                                          * @module DragStopSensorEvent
                                                          * @extends SensorEvent
                                                          */

      DragMoveSensorEvent.type = 'drag:move';

      var DragStopSensorEvent = function (_SensorEvent4) {
        _inherits(DragStopSensorEvent, _SensorEvent4);

        function DragStopSensorEvent() {
          _classCallCheck(this, DragStopSensorEvent);

          return _possibleConstructorReturn(this, (DragStopSensorEvent.__proto__ || Object.getPrototypeOf(DragStopSensorEvent)).apply(this, arguments));
        }

        return DragStopSensorEvent;
      }(SensorEvent);

      exports.DragStopSensorEvent = DragStopSensorEvent; /**
                                                          * Drag pressure sensor event
                                                          * @class DragPressureSensorEvent
                                                          * @module DragPressureSensorEvent
                                                          * @extends SensorEvent
                                                          */

      DragStopSensorEvent.type = 'drag:stop';

      var DragPressureSensorEvent = function (_SensorEvent5) {
        _inherits(DragPressureSensorEvent, _SensorEvent5);

        function DragPressureSensorEvent() {
          _classCallCheck(this, DragPressureSensorEvent);

          return _possibleConstructorReturn(this, (DragPressureSensorEvent.__proto__ || Object.getPrototypeOf(DragPressureSensorEvent)).apply(this, arguments));
        }

        return DragPressureSensorEvent;
      }(SensorEvent);

      exports.DragPressureSensorEvent = DragPressureSensorEvent;
      DragPressureSensorEvent.type = 'drag:pressure';

      /***/
    },
    /* 104 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = requestNextAnimationFrame;
      function requestNextAnimationFrame(callback) {
        return requestAnimationFrame(function () {
          requestAnimationFrame(callback);
        });
      }

      /***/
    },
    /* 105 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _requestNextAnimationFrame = __webpack_require__(104);

      var _requestNextAnimationFrame2 = _interopRequireDefault(_requestNextAnimationFrame);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _requestNextAnimationFrame2.default;

      /***/
    },
    /* 106 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.default = closest;
      var matchFunction = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector;

      /**
       * Get the closest parent element of a given element that matches the given
       * selector string or matching function
       *
       * @param {Element} element The child element to find a parent of
       * @param {String|Function} selector The string or function to use to match
       *     the parent element
       * @return {Element|null}
       */
      function closest(element, value) {
        if (!element) {
          return null;
        }

        var selector = value;
        var callback = value;
        var nodeList = value;
        var singleElement = value;

        var isSelector = Boolean(typeof value === 'string');
        var isFunction = Boolean(typeof value === 'function');
        var isNodeList = Boolean(value instanceof NodeList || value instanceof Array);
        var isElement = Boolean(value instanceof HTMLElement);

        function conditionFn(currentElement) {
          if (!currentElement) {
            return currentElement;
          } else if (isSelector) {
            return matchFunction.call(currentElement, selector);
          } else if (isNodeList) {
            return [].concat(_toConsumableArray(nodeList)).includes(currentElement);
          } else if (isElement) {
            return singleElement === currentElement;
          } else if (isFunction) {
            return callback(currentElement);
          } else {
            return null;
          }
        }

        var current = element;

        do {
          current = current.correspondingUseElement || current.correspondingElement || current;

          if (conditionFn(current)) {
            return current;
          }

          current = current.parentNode;
        } while (current && current !== document.body && current !== document);

        return null;
      }

      /***/
    },
    /* 107 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _closest = __webpack_require__(106);

      var _closest2 = _interopRequireDefault(_closest);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _closest2.default;

      /***/
    },
    /* 108 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _utils = __webpack_require__(5);

      var _Sensor = __webpack_require__(17);

      var _Sensor2 = _interopRequireDefault(_Sensor);

      var _SensorEvent = __webpack_require__(16);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      var onContextMenuWhileDragging = Symbol('onContextMenuWhileDragging');
      var onMouseDown = Symbol('onMouseDown');
      var onMouseMove = Symbol('onMouseMove');
      var onMouseUp = Symbol('onMouseUp');

      /**
       * This sensor picks up native browser mouse events and dictates drag operations
       * @class MouseSensor
       * @module MouseSensor
       * @extends Sensor
       */

      var MouseSensor = function (_Sensor2$default4) {
        _inherits(MouseSensor, _Sensor2$default4);

        /**
         * MouseSensor constructor.
         * @constructs MouseSensor
         * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
         * @param {Object} options - Options
         */
        function MouseSensor() {
          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, MouseSensor);

          /**
           * Indicates if mouse button is still down
           * @property mouseDown
           * @type {Boolean}
           */
          var _this79 = _possibleConstructorReturn(this, (MouseSensor.__proto__ || Object.getPrototypeOf(MouseSensor)).call(this, containers, options));

          _this79.mouseDown = false;

          /**
           * Mouse down timer which will end up triggering the drag start operation
           * @property mouseDownTimeout
           * @type {Number}
           */
          _this79.mouseDownTimeout = null;

          /**
           * Indicates if context menu has been opened during drag operation
           * @property openedContextMenu
           * @type {Boolean}
           */
          _this79.openedContextMenu = false;

          _this79[onContextMenuWhileDragging] = _this79[onContextMenuWhileDragging].bind(_this79);
          _this79[onMouseDown] = _this79[onMouseDown].bind(_this79);
          _this79[onMouseMove] = _this79[onMouseMove].bind(_this79);
          _this79[onMouseUp] = _this79[onMouseUp].bind(_this79);
          return _this79;
        }

        /**
         * Attaches sensors event listeners to the DOM
         */


        _createClass(MouseSensor, [{
          key: 'attach',
          value: function attach() {
            document.addEventListener('mousedown', this[onMouseDown], true);
          }

          /**
           * Detaches sensors event listeners to the DOM
           */

        }, {
          key: 'detach',
          value: function detach() {
            document.removeEventListener('mousedown', this[onMouseDown], true);
          }

          /**
           * Mouse down handler
           * @private
           * @param {Event} event - Mouse down event
           */

        }, {
          key: onMouseDown,
          value: function value(event) {
            var _this80 = this;

            if (event.button !== 0 || event.ctrlKey || event.metaKey) {
              return;
            }

            document.addEventListener('mouseup', this[onMouseUp]);

            var target = document.elementFromPoint(event.clientX, event.clientY);
            var container = (0, _utils.closest)(target, this.containers);

            if (!container) {
              return;
            }

            document.addEventListener('dragstart', preventNativeDragStart);

            this.mouseDown = true;

            clearTimeout(this.mouseDownTimeout);
            this.mouseDownTimeout = setTimeout(function () {
              if (!_this80.mouseDown) {
                return;
              }

              var dragStartEvent = new _SensorEvent.DragStartSensorEvent({
                clientX: event.clientX,
                clientY: event.clientY,
                target: target,
                container: container,
                originalEvent: event
              });

              _this80.trigger(container, dragStartEvent);

              _this80.currentContainer = container;
              _this80.dragging = !dragStartEvent.canceled();

              if (_this80.dragging) {
                document.addEventListener('contextmenu', _this80[onContextMenuWhileDragging]);
                document.addEventListener('mousemove', _this80[onMouseMove]);
              }
            }, this.options.delay);
          }

          /**
           * Mouse move handler
           * @private
           * @param {Event} event - Mouse move event
           */

        }, {
          key: onMouseMove,
          value: function value(event) {
            if (!this.dragging) {
              return;
            }

            var target = document.elementFromPoint(event.clientX, event.clientY);

            var dragMoveEvent = new _SensorEvent.DragMoveSensorEvent({
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: this.currentContainer,
              originalEvent: event
            });

            this.trigger(this.currentContainer, dragMoveEvent);
          }

          /**
           * Mouse up handler
           * @private
           * @param {Event} event - Mouse up event
           */

        }, {
          key: onMouseUp,
          value: function value(event) {
            this.mouseDown = Boolean(this.openedContextMenu);

            if (this.openedContextMenu) {
              this.openedContextMenu = false;
              return;
            }

            document.removeEventListener('mouseup', this[onMouseUp]);
            document.removeEventListener('dragstart', preventNativeDragStart);

            if (!this.dragging) {
              return;
            }

            var target = document.elementFromPoint(event.clientX, event.clientY);

            var dragStopEvent = new _SensorEvent.DragStopSensorEvent({
              clientX: event.clientX,
              clientY: event.clientY,
              target: target,
              container: this.currentContainer,
              originalEvent: event
            });

            this.trigger(this.currentContainer, dragStopEvent);

            document.removeEventListener('contextmenu', this[onContextMenuWhileDragging]);
            document.removeEventListener('mousemove', this[onMouseMove]);

            this.currentContainer = null;
            this.dragging = false;
          }

          /**
           * Context menu handler
           * @private
           * @param {Event} event - Context menu event
           */

        }, {
          key: onContextMenuWhileDragging,
          value: function value(event) {
            event.preventDefault();
            this.openedContextMenu = true;
          }
        }]);

        return MouseSensor;
      }(_Sensor2.default);

      exports.default = MouseSensor;
      function preventNativeDragStart(event) {
        event.preventDefault();
      }

      /***/
    },
    /* 109 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _MouseSensor = __webpack_require__(108);

      var _MouseSensor2 = _interopRequireDefault(_MouseSensor);

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.default = _MouseSensor2.default;

      /***/
    },
    /* 110 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      /**
       * Base sensor class. Extend from this class to create a new or custom sensor
       * @class Sensor
       * @module Sensor
       */

      var Sensor = function () {
        /**
         * Sensor constructor.
         * @constructs Sensor
         * @param {HTMLElement[]|NodeList|HTMLElement} containers - Containers
         * @param {Object} options - Options
         */
        function Sensor() {
          var containers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          _classCallCheck(this, Sensor);

          /**
           * Current containers
           * @property containers
           * @type {HTMLElement[]}
           */
          this.containers = [].concat(_toConsumableArray(containers));

          /**
           * Current options
           * @property options
           * @type {Object}
           */
          this.options = _extends({}, options);

          /**
           * Current drag state
           * @property dragging
           * @type {Boolean}
           */
          this.dragging = false;

          /**
           * Current container
           * @property currentContainer
           * @type {HTMLElement}
           */
          this.currentContainer = null;
        }

        /**
         * Attaches sensors event listeners to the DOM
         * @return {Sensor}
         */


        _createClass(Sensor, [{
          key: 'attach',
          value: function attach() {
            return this;
          }

          /**
           * Detaches sensors event listeners to the DOM
           * @return {Sensor}
           */

        }, {
          key: 'detach',
          value: function detach() {
            return this;
          }

          /**
           * Adds container to this sensor instance
           * @param {...HTMLElement} containers - Containers you want to add to this sensor
           * @example draggable.addContainer(document.body)
           */

        }, {
          key: 'addContainer',
          value: function addContainer() {
            for (var _len9 = arguments.length, containers = Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
              containers[_key9] = arguments[_key9];
            }

            this.containers = [].concat(_toConsumableArray(this.containers), containers);
          }

          /**
           * Removes container from this sensor instance
           * @param {...HTMLElement} containers - Containers you want to remove from this sensor
           * @example draggable.removeContainer(document.body)
           */

        }, {
          key: 'removeContainer',
          value: function removeContainer() {
            for (var _len10 = arguments.length, containers = Array(_len10), _key10 = 0; _key10 < _len10; _key10++) {
              containers[_key10] = arguments[_key10];
            }

            this.containers = this.containers.filter(function (container) {
              return !containers.includes(container);
            });
          }

          /**
           * Triggers event on target element
           * @param {HTMLElement} element - Element to trigger event on
           * @param {SensorEvent} sensorEvent - Sensor event to trigger
           */

        }, {
          key: 'trigger',
          value: function trigger(element, sensorEvent) {
            var event = document.createEvent('Event');
            event.detail = sensorEvent;
            event.initEvent(sensorEvent.type, true, true);
            element.dispatchEvent(event);
            this.lastEvent = sensorEvent;

            return sensorEvent;
          }
        }]);

        return Sensor;
      }();

      exports.default = Sensor;

      /***/
    },
    /* 111 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      /**
       * All draggable plugins inherit from this class.
       * @abstract
       * @class AbstractPlugin
       * @module AbstractPlugin
       */

      var AbstractPlugin = function () {
        /**
         * AbstractPlugin constructor.
         * @constructs AbstractPlugin
         * @param {Draggable} draggable - Draggable instance
         */
        function AbstractPlugin(draggable) {
          _classCallCheck(this, AbstractPlugin);

          /**
           * Draggable instance
           * @property draggable
           * @type {Draggable}
           */
          this.draggable = draggable;
        }

        /**
         * Override to add listeners
         * @abstract
         */


        _createClass(AbstractPlugin, [{
          key: 'attach',
          value: function attach() {
            throw new Error('Not Implemented');
          }

          /**
           * Override to remove listeners
           * @abstract
           */

        }, {
          key: 'detach',
          value: function detach() {
            throw new Error('Not Implemented');
          }
        }]);

        return AbstractPlugin;
      }();

      exports.default = AbstractPlugin;

      /***/
    },
    /* 112 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      var _canceled = Symbol('canceled');

      /**
       * All events fired by draggable inherit this class. You can call `cancel()` to
       * cancel a specific event or you can check if an event has been canceled by
       * calling `canceled()`.
       * @abstract
       * @class AbstractEvent
       * @module AbstractEvent
       */

      var AbstractEvent = function () {

        /**
         * AbstractEvent constructor.
         * @constructs AbstractEvent
         * @param {object} data - Event data
         */

        /**
         * Event type
         * @static
         * @abstract
         * @property type
         * @type {String}
         */
        function AbstractEvent(data) {
          _classCallCheck(this, AbstractEvent);

          this[_canceled] = false;
          this.data = data;
        }

        /**
         * Read-only type
         * @abstract
         * @return {String}
         */

        /**
         * Event cancelable
         * @static
         * @abstract
         * @property cancelable
         * @type {Boolean}
         */


        _createClass(AbstractEvent, [{
          key: 'cancel',


          /**
           * Cancels the event instance
           * @abstract
           */
          value: function cancel() {
            this[_canceled] = true;
          }

          /**
           * Check if event has been canceled
           * @abstract
           * @return {Boolean}
           */

        }, {
          key: 'canceled',
          value: function canceled() {
            return Boolean(this[_canceled]);
          }

          /**
           * Returns new event instance with existing event data.
           * This method allows for overriding of event data.
           * @param {Object} data
           * @return {AbstractEvent}
           */

        }, {
          key: 'clone',
          value: function clone(data) {
            return new this.constructor(_extends({}, this.data, data));
          }
        }, {
          key: 'type',
          get: function get() {
            return this.constructor.type;
          }

          /**
           * Read-only cancelable
           * @abstract
           * @return {Boolean}
           */

        }, {
          key: 'cancelable',
          get: function get() {
            return this.constructor.cancelable;
          }
        }]);

        return AbstractEvent;
      }();

      exports.default = AbstractEvent;
      AbstractEvent.type = 'event';
      AbstractEvent.cancelable = false;

      /***/
    },
    /* 113 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      // https://github.com/tc39/Array.prototype.includes

      var $export = __webpack_require__(15);
      var $includes = __webpack_require__(57)(true);

      $export($export.P, 'Array', {
        includes: function includes(el /* , fromIndex = 0 */) {
          return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
        }
      });

      __webpack_require__(49)('includes');

      /***/
    },
    /* 114 */
    /***/function (module, exports, __webpack_require__) {

      __webpack_require__(113);
      module.exports = __webpack_require__(2).Array.includes;

      /***/
    },
    /* 115 */
    /***/function (module, exports, __webpack_require__) {

      var getKeys = __webpack_require__(13);
      var toIObject = __webpack_require__(7);
      var isEnum = __webpack_require__(19).f;
      module.exports = function (isEntries) {
        return function (it) {
          var O = toIObject(it);
          var keys = getKeys(O);
          var length = keys.length;
          var i = 0;
          var result = [];
          var key;
          while (length > i) {
            if (isEnum.call(O, key = keys[i++])) {
              result.push(isEntries ? [key, O[key]] : O[key]);
            }
          }return result;
        };
      };

      /***/
    },
    /* 116 */
    /***/function (module, exports, __webpack_require__) {

      // https://github.com/tc39/proposal-object-values-entries
      var $export = __webpack_require__(15);
      var $values = __webpack_require__(115)(false);

      $export($export.S, 'Object', {
        values: function values(it) {
          return $values(it);
        }
      });

      /***/
    },
    /* 117 */
    /***/function (module, exports, __webpack_require__) {

      __webpack_require__(116);
      module.exports = __webpack_require__(2).Object.values;

      /***/
    },
    /* 118 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      // 19.1.2.1 Object.assign(target, source, ...)

      var getKeys = __webpack_require__(13);
      var gOPS = __webpack_require__(31);
      var pIE = __webpack_require__(19);
      var toObject = __webpack_require__(50);
      var IObject = __webpack_require__(58);
      var $assign = Object.assign;

      // should work with symbols and should have deterministic property order (V8 bug)
      module.exports = !$assign || __webpack_require__(23)(function () {
        var A = {};
        var B = {};
        // eslint-disable-next-line no-undef
        var S = Symbol();
        var K = 'abcdefghijklmnopqrst';
        A[S] = 7;
        K.split('').forEach(function (k) {
          B[k] = k;
        });
        return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
      }) ? function assign(target, source) {
        // eslint-disable-line no-unused-vars
        var T = toObject(target);
        var aLen = arguments.length;
        var index = 1;
        var getSymbols = gOPS.f;
        var isEnum = pIE.f;
        while (aLen > index) {
          var S = IObject(arguments[index++]);
          var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
          var length = keys.length;
          var j = 0;
          var key;
          while (length > j) {
            if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
          }
        }return T;
      } : $assign;

      /***/
    },
    /* 119 */
    /***/function (module, exports, __webpack_require__) {

      // 19.1.3.1 Object.assign(target, source)
      var $export = __webpack_require__(15);

      $export($export.S + $export.F, 'Object', { assign: __webpack_require__(118) });

      /***/
    },
    /* 120 */
    /***/function (module, exports, __webpack_require__) {

      __webpack_require__(119);
      module.exports = __webpack_require__(2).Object.assign;

      /***/
    },
    /* 121 */
    /***/function (module, exports, __webpack_require__) {

      var ITERATOR = __webpack_require__(0)('iterator');
      var SAFE_CLOSING = false;

      try {
        var riter = [7][ITERATOR]();
        riter['return'] = function () {
          SAFE_CLOSING = true;
        };
        // eslint-disable-next-line no-throw-literal
        Array.from(riter, function () {
          throw 2;
        });
      } catch (e) {/* empty */}

      module.exports = function (exec, skipClosing) {
        if (!skipClosing && !SAFE_CLOSING) return false;
        var safe = false;
        try {
          var arr = [7];
          var iter = arr[ITERATOR]();
          iter.next = function () {
            return { done: safe = true };
          };
          arr[ITERATOR] = function () {
            return iter;
          };
          exec(arr);
        } catch (e) {/* empty */}
        return safe;
      };

      /***/
    },
    /* 122 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var global = __webpack_require__(1);
      var dP = __webpack_require__(9);
      var DESCRIPTORS = __webpack_require__(11);
      var SPECIES = __webpack_require__(0)('species');

      module.exports = function (KEY) {
        var C = global[KEY];
        if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
          configurable: true,
          get: function get() {
            return this;
          }
        });
      };

      /***/
    },
    /* 123 */
    /***/function (module, exports, __webpack_require__) {

      var redefine = __webpack_require__(14);
      module.exports = function (target, src, safe) {
        for (var key in src) {
          redefine(target, key, src[key], safe);
        }return target;
      };

      /***/
    },
    /* 124 */
    /***/function (module, exports, __webpack_require__) {

      var anObject = __webpack_require__(6);
      var isObject = __webpack_require__(8);
      var newPromiseCapability = __webpack_require__(47);

      module.exports = function (C, x) {
        anObject(C);
        if (isObject(x) && x.constructor === C) return x;
        var promiseCapability = newPromiseCapability.f(C);
        var resolve = promiseCapability.resolve;
        resolve(x);
        return promiseCapability.promise;
      };

      /***/
    },
    /* 125 */
    /***/function (module, exports, __webpack_require__) {

      var global = __webpack_require__(1);
      var navigator = global.navigator;

      module.exports = navigator && navigator.userAgent || '';

      /***/
    },
    /* 126 */
    /***/function (module, exports) {

      module.exports = function (exec) {
        try {
          return { e: false, v: exec() };
        } catch (e) {
          return { e: true, v: e };
        }
      };

      /***/
    },
    /* 127 */
    /***/function (module, exports, __webpack_require__) {

      var global = __webpack_require__(1);
      var macrotask = __webpack_require__(48).set;
      var Observer = global.MutationObserver || global.WebKitMutationObserver;
      var process = global.process;
      var Promise = global.Promise;
      var isNode = __webpack_require__(20)(process) == 'process';

      module.exports = function () {
        var head, last, notify;

        var flush = function flush() {
          var parent, fn;
          if (isNode && (parent = process.domain)) parent.exit();
          while (head) {
            fn = head.fn;
            head = head.next;
            try {
              fn();
            } catch (e) {
              if (head) notify();else last = undefined;
              throw e;
            }
          }last = undefined;
          if (parent) parent.enter();
        };

        // Node.js
        if (isNode) {
          notify = function notify() {
            process.nextTick(flush);
          };
          // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
        } else if (Observer && !(global.navigator && global.navigator.standalone)) {
          var toggle = true;
          var node = document.createTextNode('');
          new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
          notify = function notify() {
            node.data = toggle = !toggle;
          };
          // environments with maybe non-completely correct, but existent Promise
        } else if (Promise && Promise.resolve) {
          // Promise.resolve without an argument throws an error in LG WebOS 2
          var promise = Promise.resolve(undefined);
          notify = function notify() {
            promise.then(flush);
          };
          // for other environments - macrotask based on:
          // - setImmediate
          // - MessageChannel
          // - window.postMessag
          // - onreadystatechange
          // - setTimeout
        } else {
          notify = function notify() {
            // strange IE + webpack dev server bug - use .call(global)
            macrotask.call(global, flush);
          };
        }

        return function (fn) {
          var task = { fn: fn, next: undefined };
          if (last) last.next = task;
          if (!head) {
            head = task;
            notify();
          }last = task;
        };
      };

      /***/
    },
    /* 128 */
    /***/function (module, exports) {

      // fast apply, http://jsperf.lnkit.com/fast-apply/5
      module.exports = function (fn, args, that) {
        var un = that === undefined;
        switch (args.length) {
          case 0:
            return un ? fn() : fn.call(that);
          case 1:
            return un ? fn(args[0]) : fn.call(that, args[0]);
          case 2:
            return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);
          case 3:
            return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);
          case 4:
            return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
        }return fn.apply(that, args);
      };

      /***/
    },
    /* 129 */
    /***/function (module, exports, __webpack_require__) {

      // 7.3.20 SpeciesConstructor(O, defaultConstructor)
      var anObject = __webpack_require__(6);
      var aFunction = __webpack_require__(26);
      var SPECIES = __webpack_require__(0)('species');
      module.exports = function (O, D) {
        var C = anObject(O).constructor;
        var S;
        return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
      };

      /***/
    },
    /* 130 */
    /***/function (module, exports, __webpack_require__) {

      var classof = __webpack_require__(30);
      var ITERATOR = __webpack_require__(0)('iterator');
      var Iterators = __webpack_require__(18);
      module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
        if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
      };

      /***/
    },
    /* 131 */
    /***/function (module, exports, __webpack_require__) {

      // check on default Array iterator
      var Iterators = __webpack_require__(18);
      var ITERATOR = __webpack_require__(0)('iterator');
      var ArrayProto = Array.prototype;

      module.exports = function (it) {
        return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
      };

      /***/
    },
    /* 132 */
    /***/function (module, exports, __webpack_require__) {

      // call something on iterator step with safe closing on error
      var anObject = __webpack_require__(6);
      module.exports = function (iterator, fn, value, entries) {
        try {
          return entries ? fn(anObject(value)[0], value[1]) : fn(value);
          // 7.4.6 IteratorClose(iterator, completion)
        } catch (e) {
          var ret = iterator['return'];
          if (ret !== undefined) anObject(ret.call(iterator));
          throw e;
        }
      };

      /***/
    },
    /* 133 */
    /***/function (module, exports, __webpack_require__) {

      var ctx = __webpack_require__(27);
      var call = __webpack_require__(132);
      var isArrayIter = __webpack_require__(131);
      var anObject = __webpack_require__(6);
      var toLength = __webpack_require__(56);
      var getIterFn = __webpack_require__(130);
      var BREAK = {};
      var RETURN = {};
      var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
        var iterFn = ITERATOR ? function () {
          return iterable;
        } : getIterFn(iterable);
        var f = ctx(fn, that, entries ? 2 : 1);
        var index = 0;
        var length, step, iterator, result;
        if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
        // fast case for arrays with default iterator
        if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
          result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
          if (result === BREAK || result === RETURN) return result;
        } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
          result = call(iterator, f, step.value, entries);
          if (result === BREAK || result === RETURN) return result;
        }
      };
      exports.BREAK = BREAK;
      exports.RETURN = RETURN;

      /***/
    },
    /* 134 */
    /***/function (module, exports) {

      module.exports = function (it, Constructor, name, forbiddenField) {
        if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
          throw TypeError(name + ': incorrect invocation!');
        }return it;
      };

      /***/
    },
    /* 135 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var LIBRARY = __webpack_require__(21);
      var global = __webpack_require__(1);
      var ctx = __webpack_require__(27);
      var classof = __webpack_require__(30);
      var $export = __webpack_require__(15);
      var isObject = __webpack_require__(8);
      var aFunction = __webpack_require__(26);
      var anInstance = __webpack_require__(134);
      var forOf = __webpack_require__(133);
      var speciesConstructor = __webpack_require__(129);
      var task = __webpack_require__(48).set;
      var microtask = __webpack_require__(127)();
      var newPromiseCapabilityModule = __webpack_require__(47);
      var perform = __webpack_require__(126);
      var userAgent = __webpack_require__(125);
      var promiseResolve = __webpack_require__(124);
      var PROMISE = 'Promise';
      var TypeError = global.TypeError;
      var process = global.process;
      var versions = process && process.versions;
      var v8 = versions && versions.v8 || '';
      var $Promise = global[PROMISE];
      var isNode = classof(process) == 'process';
      var empty = function empty() {/* empty */};
      var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
      var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

      var USE_NATIVE = !!function () {
        try {
          // correct subclassing with @@species support
          var promise = $Promise.resolve(1);
          var FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function (exec) {
            exec(empty, empty);
          };
          // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
          return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise
          // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
          // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
          // we can't detect it synchronously, so just check versions
          && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
        } catch (e) {/* empty */}
      }();

      // helpers
      var isThenable = function isThenable(it) {
        var then;
        return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
      };
      var notify = function notify(promise, isReject) {
        if (promise._n) return;
        promise._n = true;
        var chain = promise._c;
        microtask(function () {
          var value = promise._v;
          var ok = promise._s == 1;
          var i = 0;
          var run = function run(reaction) {
            var handler = ok ? reaction.ok : reaction.fail;
            var resolve = reaction.resolve;
            var reject = reaction.reject;
            var domain = reaction.domain;
            var result, then, exited;
            try {
              if (handler) {
                if (!ok) {
                  if (promise._h == 2) onHandleUnhandled(promise);
                  promise._h = 1;
                }
                if (handler === true) result = value;else {
                  if (domain) domain.enter();
                  result = handler(value); // may throw
                  if (domain) {
                    domain.exit();
                    exited = true;
                  }
                }
                if (result === reaction.promise) {
                  reject(TypeError('Promise-chain cycle'));
                } else if (then = isThenable(result)) {
                  then.call(result, resolve, reject);
                } else resolve(result);
              } else reject(value);
            } catch (e) {
              if (domain && !exited) domain.exit();
              reject(e);
            }
          };
          while (chain.length > i) {
            run(chain[i++]);
          } // variable length - can't use forEach
          promise._c = [];
          promise._n = false;
          if (isReject && !promise._h) onUnhandled(promise);
        });
      };
      var onUnhandled = function onUnhandled(promise) {
        task.call(global, function () {
          var value = promise._v;
          var unhandled = isUnhandled(promise);
          var result, handler, console;
          if (unhandled) {
            result = perform(function () {
              if (isNode) {
                process.emit('unhandledRejection', value, promise);
              } else if (handler = global.onunhandledrejection) {
                handler({ promise: promise, reason: value });
              } else if ((console = global.console) && console.error) {
                console.error('Unhandled promise rejection', value);
              }
            });
            // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
            promise._h = isNode || isUnhandled(promise) ? 2 : 1;
          }promise._a = undefined;
          if (unhandled && result.e) throw result.v;
        });
      };
      var isUnhandled = function isUnhandled(promise) {
        return promise._h !== 1 && (promise._a || promise._c).length === 0;
      };
      var onHandleUnhandled = function onHandleUnhandled(promise) {
        task.call(global, function () {
          var handler;
          if (isNode) {
            process.emit('rejectionHandled', promise);
          } else if (handler = global.onrejectionhandled) {
            handler({ promise: promise, reason: promise._v });
          }
        });
      };
      var $reject = function $reject(value) {
        var promise = this;
        if (promise._d) return;
        promise._d = true;
        promise = promise._w || promise; // unwrap
        promise._v = value;
        promise._s = 2;
        if (!promise._a) promise._a = promise._c.slice();
        notify(promise, true);
      };
      var $resolve = function $resolve(value) {
        var promise = this;
        var then;
        if (promise._d) return;
        promise._d = true;
        promise = promise._w || promise; // unwrap
        try {
          if (promise === value) throw TypeError("Promise can't be resolved itself");
          if (then = isThenable(value)) {
            microtask(function () {
              var wrapper = { _w: promise, _d: false }; // wrap
              try {
                then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
              } catch (e) {
                $reject.call(wrapper, e);
              }
            });
          } else {
            promise._v = value;
            promise._s = 1;
            notify(promise, false);
          }
        } catch (e) {
          $reject.call({ _w: promise, _d: false }, e); // wrap
        }
      };

      // constructor polyfill
      if (!USE_NATIVE) {
        // 25.4.3.1 Promise(executor)
        $Promise = function Promise(executor) {
          anInstance(this, $Promise, PROMISE, '_h');
          aFunction(executor);
          Internal.call(this);
          try {
            executor(ctx($resolve, this, 1), ctx($reject, this, 1));
          } catch (err) {
            $reject.call(this, err);
          }
        };
        // eslint-disable-next-line no-unused-vars
        Internal = function Promise(executor) {
          this._c = []; // <- awaiting reactions
          this._a = undefined; // <- checked in isUnhandled reactions
          this._s = 0; // <- state
          this._d = false; // <- done
          this._v = undefined; // <- value
          this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
          this._n = false; // <- notify
        };
        Internal.prototype = __webpack_require__(123)($Promise.prototype, {
          // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
          then: function then(onFulfilled, onRejected) {
            var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
            reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
            reaction.fail = typeof onRejected == 'function' && onRejected;
            reaction.domain = isNode ? process.domain : undefined;
            this._c.push(reaction);
            if (this._a) this._a.push(reaction);
            if (this._s) notify(this, false);
            return reaction.promise;
          },
          // 25.4.5.1 Promise.prototype.catch(onRejected)
          'catch': function _catch(onRejected) {
            return this.then(undefined, onRejected);
          }
        });
        OwnPromiseCapability = function OwnPromiseCapability() {
          var promise = new Internal();
          this.promise = promise;
          this.resolve = ctx($resolve, promise, 1);
          this.reject = ctx($reject, promise, 1);
        };
        newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
          return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
        };
      }

      $export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
      __webpack_require__(25)($Promise, PROMISE);
      __webpack_require__(122)(PROMISE);
      Wrapper = __webpack_require__(2)[PROMISE];

      // statics
      $export($export.S + $export.F * !USE_NATIVE, PROMISE, {
        // 25.4.4.5 Promise.reject(r)
        reject: function reject(r) {
          var capability = newPromiseCapability(this);
          var $$reject = capability.reject;
          $$reject(r);
          return capability.promise;
        }
      });
      $export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
        // 25.4.4.6 Promise.resolve(x)
        resolve: function resolve(x) {
          return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
        }
      });
      $export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(121)(function (iter) {
        $Promise.all(iter)['catch'](empty);
      })), PROMISE, {
        // 25.4.4.1 Promise.all(iterable)
        all: function all(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var resolve = capability.resolve;
          var reject = capability.reject;
          var result = perform(function () {
            var values = [];
            var index = 0;
            var remaining = 1;
            forOf(iterable, false, function (promise) {
              var $index = index++;
              var alreadyCalled = false;
              values.push(undefined);
              remaining++;
              C.resolve(promise).then(function (value) {
                if (alreadyCalled) return;
                alreadyCalled = true;
                values[$index] = value;
                --remaining || resolve(values);
              }, reject);
            });
            --remaining || resolve(values);
          });
          if (result.e) reject(result.v);
          return capability.promise;
        },
        // 25.4.4.4 Promise.race(iterable)
        race: function race(iterable) {
          var C = this;
          var capability = newPromiseCapability(C);
          var reject = capability.reject;
          var result = perform(function () {
            forOf(iterable, false, function (promise) {
              C.resolve(promise).then(capability.resolve, reject);
            });
          });
          if (result.e) reject(result.v);
          return capability.promise;
        }
      });

      /***/
    },
    /* 136 */
    /***/function (module, exports) {

      module.exports = function (done, value) {
        return { value: value, done: !!done };
      };

      /***/
    },
    /* 137 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var addToUnscopables = __webpack_require__(49);
      var step = __webpack_require__(136);
      var Iterators = __webpack_require__(18);
      var toIObject = __webpack_require__(7);

      // 22.1.3.4 Array.prototype.entries()
      // 22.1.3.13 Array.prototype.keys()
      // 22.1.3.29 Array.prototype.values()
      // 22.1.3.30 Array.prototype[@@iterator]()
      module.exports = __webpack_require__(51)(Array, 'Array', function (iterated, kind) {
        this._t = toIObject(iterated); // target
        this._i = 0; // next index
        this._k = kind; // kind
        // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
      }, function () {
        var O = this._t;
        var kind = this._k;
        var index = this._i++;
        if (!O || index >= O.length) {
          this._t = undefined;
          return step(1);
        }
        if (kind == 'keys') return step(0, index);
        if (kind == 'values') return step(0, O[index]);
        return step(0, [index, O[index]]);
      }, 'values');

      // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
      Iterators.Arguments = Iterators.Array;

      addToUnscopables('keys');
      addToUnscopables('values');
      addToUnscopables('entries');

      /***/
    },
    /* 138 */
    /***/function (module, exports, __webpack_require__) {

      var $iterators = __webpack_require__(137);
      var getKeys = __webpack_require__(13);
      var redefine = __webpack_require__(14);
      var global = __webpack_require__(1);
      var hide = __webpack_require__(10);
      var Iterators = __webpack_require__(18);
      var wks = __webpack_require__(0);
      var ITERATOR = wks('iterator');
      var TO_STRING_TAG = wks('toStringTag');
      var ArrayValues = Iterators.Array;

      var DOMIterables = {
        CSSRuleList: true, // TODO: Not spec compliant, should be false.
        CSSStyleDeclaration: false,
        CSSValueList: false,
        ClientRectList: false,
        DOMRectList: false,
        DOMStringList: false,
        DOMTokenList: true,
        DataTransferItemList: false,
        FileList: false,
        HTMLAllCollection: false,
        HTMLCollection: false,
        HTMLFormElement: false,
        HTMLSelectElement: false,
        MediaList: true, // TODO: Not spec compliant, should be false.
        MimeTypeArray: false,
        NamedNodeMap: false,
        NodeList: true,
        PaintRequestList: false,
        Plugin: false,
        PluginArray: false,
        SVGLengthList: false,
        SVGNumberList: false,
        SVGPathSegList: false,
        SVGPointList: false,
        SVGStringList: false,
        SVGTransformList: false,
        SourceBufferList: false,
        StyleSheetList: true, // TODO: Not spec compliant, should be false.
        TextTrackCueList: false,
        TextTrackList: false,
        TouchList: false
      };

      for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
        var NAME = collections[i];
        var explicit = DOMIterables[NAME];
        var Collection = global[NAME];
        var proto = Collection && Collection.prototype;
        var key;
        if (proto) {
          if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
          if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
          Iterators[NAME] = ArrayValues;
          if (explicit) for (key in $iterators) {
            if (!proto[key]) redefine(proto, key, $iterators[key], true);
          }
        }
      }

      /***/
    },
    /* 139 */
    /***/function (module, exports, __webpack_require__) {

      // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
      var has = __webpack_require__(12);
      var toObject = __webpack_require__(50);
      var IE_PROTO = __webpack_require__(33)('IE_PROTO');
      var ObjectProto = Object.prototype;

      module.exports = Object.getPrototypeOf || function (O) {
        O = toObject(O);
        if (has(O, IE_PROTO)) return O[IE_PROTO];
        if (typeof O.constructor == 'function' && O instanceof O.constructor) {
          return O.constructor.prototype;
        }return O instanceof Object ? ObjectProto : null;
      };

      /***/
    },
    /* 140 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var create = __webpack_require__(55);
      var descriptor = __webpack_require__(28);
      var setToStringTag = __webpack_require__(25);
      var IteratorPrototype = {};

      // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
      __webpack_require__(10)(IteratorPrototype, __webpack_require__(0)('iterator'), function () {
        return this;
      });

      module.exports = function (Constructor, NAME, next) {
        Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
        setToStringTag(Constructor, NAME + ' Iterator');
      };

      /***/
    },
    /* 141 */
    /***/function (module, exports, __webpack_require__) {

      var toInteger = __webpack_require__(34);
      var defined = __webpack_require__(35);
      // true  -> String#at
      // false -> String#codePointAt
      module.exports = function (TO_STRING) {
        return function (that, pos) {
          var s = String(defined(that));
          var i = toInteger(pos);
          var l = s.length;
          var a, b;
          if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
          a = s.charCodeAt(i);
          return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
        };
      };

      /***/
    },
    /* 142 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      var $at = __webpack_require__(141)(true);

      // 21.1.3.27 String.prototype[@@iterator]()
      __webpack_require__(51)(String, 'String', function (iterated) {
        this._t = String(iterated); // target
        this._i = 0; // next index
        // 21.1.5.2.1 %StringIteratorPrototype%.next()
      }, function () {
        var O = this._t;
        var index = this._i;
        var point;
        if (index >= O.length) return { value: undefined, done: true };
        point = $at(O, index);
        this._i += point.length;
        return { value: point, done: false };
      });

      /***/
    },
    /* 143 */
    /***/function (module, exports, __webpack_require__) {

      __webpack_require__(52);
      __webpack_require__(142);
      __webpack_require__(138);
      __webpack_require__(135);
      module.exports = __webpack_require__(2).Promise;

      /***/
    },
    /* 144 */
    /***/function (module, exports, __webpack_require__) {

      var pIE = __webpack_require__(19);
      var createDesc = __webpack_require__(28);
      var toIObject = __webpack_require__(7);
      var toPrimitive = __webpack_require__(37);
      var has = __webpack_require__(12);
      var IE8_DOM_DEFINE = __webpack_require__(61);
      var gOPD = Object.getOwnPropertyDescriptor;

      exports.f = __webpack_require__(11) ? gOPD : function getOwnPropertyDescriptor(O, P) {
        O = toIObject(O);
        P = toPrimitive(P, true);
        if (IE8_DOM_DEFINE) try {
          return gOPD(O, P);
        } catch (e) {/* empty */}
        if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
      };

      /***/
    },
    /* 145 */
    /***/function (module, exports, __webpack_require__) {

      // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
      var toIObject = __webpack_require__(7);
      var gOPN = __webpack_require__(53).f;
      var toString = {}.toString;

      var windowNames = (typeof window === 'undefined' ? 'undefined' : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

      var getWindowNames = function getWindowNames(it) {
        try {
          return gOPN(it);
        } catch (e) {
          return windowNames.slice();
        }
      };

      module.exports.f = function getOwnPropertyNames(it) {
        return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
      };

      /***/
    },
    /* 146 */
    /***/function (module, exports, __webpack_require__) {

      var dP = __webpack_require__(9);
      var anObject = __webpack_require__(6);
      var getKeys = __webpack_require__(13);

      module.exports = __webpack_require__(11) ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = getKeys(Properties);
        var length = keys.length;
        var i = 0;
        var P;
        while (length > i) {
          dP.f(O, P = keys[i++], Properties[P]);
        }return O;
      };

      /***/
    },
    /* 147 */
    /***/function (module, exports, __webpack_require__) {

      // 7.2.2 IsArray(argument)
      var cof = __webpack_require__(20);
      module.exports = Array.isArray || function isArray(arg) {
        return cof(arg) == 'Array';
      };

      /***/
    },
    /* 148 */
    /***/function (module, exports, __webpack_require__) {

      var toInteger = __webpack_require__(34);
      var max = Math.max;
      var min = Math.min;
      module.exports = function (index, length) {
        index = toInteger(index);
        return index < 0 ? max(index + length, 0) : min(index, length);
      };

      /***/
    },
    /* 149 */
    /***/function (module, exports, __webpack_require__) {

      // all enumerable object keys, includes symbols
      var getKeys = __webpack_require__(13);
      var gOPS = __webpack_require__(31);
      var pIE = __webpack_require__(19);
      module.exports = function (it) {
        var result = getKeys(it);
        var getSymbols = gOPS.f;
        if (getSymbols) {
          var symbols = getSymbols(it);
          var isEnum = pIE.f;
          var i = 0;
          var key;
          while (symbols.length > i) {
            if (isEnum.call(it, key = symbols[i++])) result.push(key);
          }
        }return result;
      };

      /***/
    },
    /* 150 */
    /***/function (module, exports, __webpack_require__) {

      var global = __webpack_require__(1);
      var core = __webpack_require__(2);
      var LIBRARY = __webpack_require__(21);
      var wksExt = __webpack_require__(60);
      var defineProperty = __webpack_require__(9).f;
      module.exports = function (name) {
        var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
        if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
      };

      /***/
    },
    /* 151 */
    /***/function (module, exports, __webpack_require__) {

      var META = __webpack_require__(22)('meta');
      var isObject = __webpack_require__(8);
      var has = __webpack_require__(12);
      var setDesc = __webpack_require__(9).f;
      var id = 0;
      var isExtensible = Object.isExtensible || function () {
        return true;
      };
      var FREEZE = !__webpack_require__(23)(function () {
        return isExtensible(Object.preventExtensions({}));
      });
      var setMeta = function setMeta(it) {
        setDesc(it, META, { value: {
            i: 'O' + ++id, // object ID
            w: {} // weak collections IDs
          } });
      };
      var fastKey = function fastKey(it, create) {
        // return primitive with prefix
        if (!isObject(it)) return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return 'F';
          // not necessary to add metadata
          if (!create) return 'E';
          // add missing metadata
          setMeta(it);
          // return object ID
        }return it[META].i;
      };
      var getWeak = function getWeak(it, create) {
        if (!has(it, META)) {
          // can't set metadata to uncaught frozen object
          if (!isExtensible(it)) return true;
          // not necessary to add metadata
          if (!create) return false;
          // add missing metadata
          setMeta(it);
          // return hash weak collections IDs
        }return it[META].w;
      };
      // add metadata on freeze-family methods calling
      var onFreeze = function onFreeze(it) {
        if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
        return it;
      };
      var meta = module.exports = {
        KEY: META,
        NEED: false,
        fastKey: fastKey,
        getWeak: getWeak,
        onFreeze: onFreeze
      };

      /***/
    },
    /* 152 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      // ECMAScript 6 symbols shim

      var global = __webpack_require__(1);
      var has = __webpack_require__(12);
      var DESCRIPTORS = __webpack_require__(11);
      var $export = __webpack_require__(15);
      var redefine = __webpack_require__(14);
      var META = __webpack_require__(151).KEY;
      var $fails = __webpack_require__(23);
      var shared = __webpack_require__(36);
      var setToStringTag = __webpack_require__(25);
      var uid = __webpack_require__(22);
      var wks = __webpack_require__(0);
      var wksExt = __webpack_require__(60);
      var wksDefine = __webpack_require__(150);
      var enumKeys = __webpack_require__(149);
      var isArray = __webpack_require__(147);
      var anObject = __webpack_require__(6);
      var isObject = __webpack_require__(8);
      var toIObject = __webpack_require__(7);
      var toPrimitive = __webpack_require__(37);
      var createDesc = __webpack_require__(28);
      var _create = __webpack_require__(55);
      var gOPNExt = __webpack_require__(145);
      var $GOPD = __webpack_require__(144);
      var $DP = __webpack_require__(9);
      var $keys = __webpack_require__(13);
      var gOPD = $GOPD.f;
      var dP = $DP.f;
      var gOPN = gOPNExt.f;
      var $Symbol = global.Symbol;
      var $JSON = global.JSON;
      var _stringify = $JSON && $JSON.stringify;
      var PROTOTYPE = 'prototype';
      var HIDDEN = wks('_hidden');
      var TO_PRIMITIVE = wks('toPrimitive');
      var isEnum = {}.propertyIsEnumerable;
      var SymbolRegistry = shared('symbol-registry');
      var AllSymbols = shared('symbols');
      var OPSymbols = shared('op-symbols');
      var ObjectProto = Object[PROTOTYPE];
      var USE_NATIVE = typeof $Symbol == 'function';
      var QObject = global.QObject;
      // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
      var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

      // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
      var setSymbolDesc = DESCRIPTORS && $fails(function () {
        return _create(dP({}, 'a', {
          get: function get() {
            return dP(this, 'a', { value: 7 }).a;
          }
        })).a != 7;
      }) ? function (it, key, D) {
        var protoDesc = gOPD(ObjectProto, key);
        if (protoDesc) delete ObjectProto[key];
        dP(it, key, D);
        if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
      } : dP;

      var wrap = function wrap(tag) {
        var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
        sym._k = tag;
        return sym;
      };

      var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
        return (typeof it === 'undefined' ? 'undefined' : _typeof(it)) == 'symbol';
      } : function (it) {
        return it instanceof $Symbol;
      };

      var $defineProperty = function defineProperty(it, key, D) {
        if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
        anObject(it);
        key = toPrimitive(key, true);
        anObject(D);
        if (has(AllSymbols, key)) {
          if (!D.enumerable) {
            if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
            it[HIDDEN][key] = true;
          } else {
            if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
            D = _create(D, { enumerable: createDesc(0, false) });
          }return setSymbolDesc(it, key, D);
        }return dP(it, key, D);
      };
      var $defineProperties = function defineProperties(it, P) {
        anObject(it);
        var keys = enumKeys(P = toIObject(P));
        var i = 0;
        var l = keys.length;
        var key;
        while (l > i) {
          $defineProperty(it, key = keys[i++], P[key]);
        }return it;
      };
      var $create = function create(it, P) {
        return P === undefined ? _create(it) : $defineProperties(_create(it), P);
      };
      var $propertyIsEnumerable = function propertyIsEnumerable(key) {
        var E = isEnum.call(this, key = toPrimitive(key, true));
        if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
        return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
      };
      var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
        it = toIObject(it);
        key = toPrimitive(key, true);
        if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
        var D = gOPD(it, key);
        if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
        return D;
      };
      var $getOwnPropertyNames = function getOwnPropertyNames(it) {
        var names = gOPN(toIObject(it));
        var result = [];
        var i = 0;
        var key;
        while (names.length > i) {
          if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
        }return result;
      };
      var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
        var IS_OP = it === ObjectProto;
        var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
        var result = [];
        var i = 0;
        var key;
        while (names.length > i) {
          if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
        }return result;
      };

      // 19.4.1.1 Symbol([description])
      if (!USE_NATIVE) {
        $Symbol = function _Symbol2() {
          if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
          var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
          var $set = function $set(value) {
            if (this === ObjectProto) $set.call(OPSymbols, value);
            if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
            setSymbolDesc(this, tag, createDesc(1, value));
          };
          if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
          return wrap(tag);
        };
        redefine($Symbol[PROTOTYPE], 'toString', function toString() {
          return this._k;
        });

        $GOPD.f = $getOwnPropertyDescriptor;
        $DP.f = $defineProperty;
        __webpack_require__(53).f = gOPNExt.f = $getOwnPropertyNames;
        __webpack_require__(19).f = $propertyIsEnumerable;
        __webpack_require__(31).f = $getOwnPropertySymbols;

        if (DESCRIPTORS && !__webpack_require__(21)) {
          redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
        }

        wksExt.f = function (name) {
          return wrap(wks(name));
        };
      }

      $export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

      for (var es6Symbols =
      // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
      'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
        wks(es6Symbols[j++]);
      }for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
        wksDefine(wellKnownSymbols[k++]);
      }$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
        // 19.4.2.1 Symbol.for(key)
        'for': function _for(key) {
          return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
        },
        // 19.4.2.5 Symbol.keyFor(sym)
        keyFor: function keyFor(sym) {
          if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
          for (var key in SymbolRegistry) {
            if (SymbolRegistry[key] === sym) return key;
          }
        },
        useSetter: function useSetter() {
          setter = true;
        },
        useSimple: function useSimple() {
          setter = false;
        }
      });

      $export($export.S + $export.F * !USE_NATIVE, 'Object', {
        // 19.1.2.2 Object.create(O [, Properties])
        create: $create,
        // 19.1.2.4 Object.defineProperty(O, P, Attributes)
        defineProperty: $defineProperty,
        // 19.1.2.3 Object.defineProperties(O, Properties)
        defineProperties: $defineProperties,
        // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
        getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
        // 19.1.2.7 Object.getOwnPropertyNames(O)
        getOwnPropertyNames: $getOwnPropertyNames,
        // 19.1.2.8 Object.getOwnPropertySymbols(O)
        getOwnPropertySymbols: $getOwnPropertySymbols
      });

      // 24.3.2 JSON.stringify(value [, replacer [, space]])
      $JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
        var S = $Symbol();
        // MS Edge converts symbol values to JSON as {}
        // WebKit converts symbol values to JSON as null
        // V8 throws on boxed symbols
        return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
      })), 'JSON', {
        stringify: function stringify(it) {
          var args = [it];
          var i = 1;
          var replacer, $replacer;
          while (arguments.length > i) {
            args.push(arguments[i++]);
          }$replacer = replacer = args[1];
          if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
          if (!isArray(replacer)) replacer = function replacer(key, value) {
            if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
            if (!isSymbol(value)) return value;
          };
          args[1] = replacer;
          return _stringify.apply($JSON, args);
        }
      });

      // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
      $Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
      // 19.4.3.5 Symbol.prototype[@@toStringTag]
      setToStringTag($Symbol, 'Symbol');
      // 20.2.1.9 Math[@@toStringTag]
      setToStringTag(Math, 'Math', true);
      // 24.3.3 JSON[@@toStringTag]
      setToStringTag(global.JSON, 'JSON', true);

      /***/
    },
    /* 153 */
    /***/function (module, exports, __webpack_require__) {

      __webpack_require__(152);
      __webpack_require__(52);
      module.exports = __webpack_require__(2).Symbol;

      /***/
    },
    /* 154 */
    /***/function (module, exports, __webpack_require__) {

      "use strict";

      Object.defineProperty(exports, "__esModule", {
        value: true
      });
      exports.Plugins = exports.Sensors = exports.Sortable = exports.Swappable = exports.Droppable = exports.Draggable = exports.BasePlugin = exports.BaseEvent = undefined;

      __webpack_require__(153);

      __webpack_require__(143);

      __webpack_require__(120);

      __webpack_require__(117);

      __webpack_require__(114);

      var _AbstractEvent = __webpack_require__(3);

      var _AbstractEvent2 = _interopRequireDefault(_AbstractEvent);

      var _AbstractPlugin = __webpack_require__(4);

      var _AbstractPlugin2 = _interopRequireDefault(_AbstractPlugin);

      var _Sensors = __webpack_require__(29);

      var Sensors = _interopRequireWildcard(_Sensors);

      var _Plugins = __webpack_require__(96);

      var Plugins = _interopRequireWildcard(_Plugins);

      var _Draggable = __webpack_require__(24);

      var _Draggable2 = _interopRequireDefault(_Draggable);

      var _Droppable = __webpack_require__(70);

      var _Droppable2 = _interopRequireDefault(_Droppable);

      var _Swappable = __webpack_require__(67);

      var _Swappable2 = _interopRequireDefault(_Swappable);

      var _Sortable = __webpack_require__(64);

      var _Sortable2 = _interopRequireDefault(_Sortable);

      function _interopRequireWildcard(obj) {
        if (obj && obj.__esModule) {
          return obj;
        } else {
          var newObj = {};if (obj != null) {
            for (var key in obj) {
              if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
          }newObj.default = obj;return newObj;
        }
      }

      function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
      }

      exports.BaseEvent = _AbstractEvent2.default;
      exports.BasePlugin = _AbstractPlugin2.default;
      exports.Draggable = _Draggable2.default;
      exports.Droppable = _Droppable2.default;
      exports.Swappable = _Swappable2.default;
      exports.Sortable = _Sortable2.default;
      exports.Sensors = Sensors;
      exports.Plugins = Plugins;

      /***/
    }]
    /******/)
  );
});
