// Built by eustia.

/**
 * 定制化生成 licia-util
 * @url https://licia.liriliri.io/builder.html
 * 
 * Logger Url className clamp cloneDeep cmpVersion combine compact dateFormat debounce decodeUriComponent detectBrowser escape escapeJsStr escapeRegExp extractUrls getUrlParam isEqual isEmpty isErr isFn isInt isPromise isRegExp memoize ms noop promisify query random sleep throttle unescape waitUntil linkify
 * 
 */

(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory();
    } else { root._ = factory(); }
}(this, function () {
    var _ = {};

    /* ------------------------------ inherits ------------------------------ */

    var inherits = _.inherits = (function (exports) {
        /* Inherit the prototype methods from one constructor into another.
         *
         * |Name      |Type    |Desc       |
         * |----------|--------|-----------|
         * |Class     |function|Child Class|
         * |SuperClass|function|Super Class|
         */

        /* example
         * function People(name) {
         *     this._name = name;
         * }
         * People.prototype = {
         *     getName: function () {
         *         return this._name;
         *     }
         * };
         * function Student(name) {
         *     this._name = name;
         * }
         * inherits(Student, People);
         * const s = new Student('RedHood');
         * s.getName(); // -> 'RedHood'
         */

        /* typescript
         * export declare function inherits(Class: Function, SuperClass: Function): void;
         */
        exports = function(Class, SuperClass) {
            if (objCreate) return (Class.prototype = objCreate(SuperClass.prototype));
            noop.prototype = SuperClass.prototype;
            Class.prototype = new noop();
        };

        var objCreate = Object.create;

        function noop() {}

        return exports;
    })({});

    /* ------------------------------ has ------------------------------ */

    var has = _.has = (function (exports) {
        /* Checks if key is a direct property.
         *
         * |Name  |Type   |Desc                            |
         * |------|-------|--------------------------------|
         * |obj   |object |Object to query                 |
         * |key   |string |Path to check                   |
         * |return|boolean|True if key is a direct property|
         */

        /* example
         * has({one: 1}, 'one'); // -> true
         */

        /* typescript
         * export declare function has(obj: {}, key: string): boolean;
         */
        var hasOwnProp = Object.prototype.hasOwnProperty;

        exports = function(obj, key) {
            return hasOwnProp.call(obj, key);
        };

        return exports;
    })({});

    /* ------------------------------ slice ------------------------------ */

    var slice = _.slice = (function (exports) {
        /* Create slice of source array or array-like object.
         *
         * |Name              |Type  |Desc                      |
         * |------------------|------|--------------------------|
         * |array             |array |Array to slice            |
         * |[start=0]         |number|Start position            |
         * |[end=array.length]|number|End position, not included|
         */

        /* example
         * slice([1, 2, 3, 4], 1, 2); // -> [2]
         */

        /* typescript
         * export declare function slice(array: any[], start?: number, end?: number): any[];
         */
        exports = function(arr, start, end) {
            var len = arr.length;

            if (start == null) {
                start = 0;
            } else if (start < 0) {
                start = Math.max(len + start, 0);
            } else {
                start = Math.min(start, len);
            }

            if (end == null) {
                end = len;
            } else if (end < 0) {
                end = Math.max(len + end, 0);
            } else {
                end = Math.min(end, len);
            }

            var ret = [];

            while (start < end) {
                ret.push(arr[start++]);
            }

            return ret;
        };

        return exports;
    })({});

    /* ------------------------------ isUndef ------------------------------ */

    var isUndef = _.isUndef = (function (exports) {
        /* Check if value is undefined.
         *
         * |Name  |Type   |Desc                      |
         * |------|-------|--------------------------|
         * |val   |*      |Value to check            |
         * |return|boolean|True if value is undefined|
         */

        /* example
         * isUndef(void 0); // -> true
         * isUndef(null); // -> false
         */

        /* typescript
         * export declare function isUndef(val: any): boolean;
         */
        exports = function(val) {
            return val === void 0;
        };

        return exports;
    })({});

    /* ------------------------------ isObj ------------------------------ */

    var isObj = _.isObj = (function (exports) {
        /* Check if value is the language type of Object.
         *
         * |Name  |Type   |Desc                      |
         * |------|-------|--------------------------|
         * |val   |*      |Value to check            |
         * |return|boolean|True if value is an object|
         *
         * [Language Spec](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
         */

        /* example
         * isObj({}); // -> true
         * isObj([]); // -> true
         */

        /* typescript
         * export declare function isObj(val: any): boolean;
         */
        exports = function(val) {
            var type = typeof val;
            return !!val && (type === 'function' || type === 'object');
        };

        return exports;
    })({});

    /* ------------------------------ nextTick ------------------------------ */

    var nextTick = _.nextTick = (function (exports) {
        /* Next tick for both node and browser.
         *
         * |Name|Type    |Desc            |
         * |----|--------|----------------|
         * |cb  |function|Function to call|
         *
         * Use process.nextTick if available.
         *
         * Otherwise setImmediate or setTimeout is used as fallback.
         */

        /* example
         * nextTick(function () {
         *     // Do something...
         * });
         */

        /* typescript
         * export declare function nextTick(cb: Function): void;
         */
        if (typeof process === 'object' && process.nextTick) {
            exports = process.nextTick;
        } else if (typeof setImmediate === 'function') {
            exports = function(cb) {
                setImmediate(ensureCallable(cb));
            };
        } else {
            exports = function(cb) {
                setTimeout(ensureCallable(cb), 0);
            };
        }

        function ensureCallable(fn) {
            if (typeof fn !== 'function')
                throw new TypeError(fn + ' is not a function');
            return fn;
        }

        return exports;
    })({});

    /* ------------------------------ noop ------------------------------ */

    var noop = _.noop = (function (exports) {
        /* A no-operation function.
         */

        /* example
         * noop(); // Does nothing
         */

        /* typescript
         * export declare function noop(): void;
         */
        exports = function() {};

        return exports;
    })({});

    /* ------------------------------ isBrowser ------------------------------ */

    var isBrowser = _.isBrowser = (function (exports) {
        /* Check if running in a browser.
         */

        /* example
         * console.log(isBrowser); // -> true if running in a browser
         */

        /* typescript
         * export declare const isBrowser: boolean;
         */
        exports =
            typeof window === 'object' &&
            typeof document === 'object' &&
            document.nodeType === 9;

        return exports;
    })({});

    /* ------------------------------ before ------------------------------ */

    var before = _.before = (function (exports) {
        /* Create a function that invokes less than n times.
         *
         * |Name  |Type    |Desc                                            |
         * |------|--------|------------------------------------------------|
         * |n     |number  |Number of calls at which fn is no longer invoked|
         * |fn    |function|Function to restrict                            |
         * |return|function|New restricted function                         |
         *
         * Subsequent calls to the created function return the result of the last fn invocation.
         */

        /* example
         * const fn = before(5, function() {});
         * fn(); // Allow function to be call 4 times at last.
         */

        /* typescript
         * export declare function before(n: number, fn: Function): Function;
         */
        exports = function(n, fn) {
            var memo;
            return function() {
                if (--n > 0) memo = fn.apply(this, arguments);
                if (n <= 1) fn = null;
                return memo;
            };
        };

        return exports;
    })({});

    /* ------------------------------ restArgs ------------------------------ */

    var restArgs = _.restArgs = (function (exports) {
        /* This accumulates the arguments passed into an array, after a given index.
         *
         * |Name        |Type    |Desc                                   |
         * |------------|--------|---------------------------------------|
         * |function    |function|Function that needs rest parameters    |
         * |[startIndex]|number  |The start index to accumulates         |
         * |return      |function|Generated function with rest parameters|
         */

        /* example
         * const paramArr = restArgs(function (rest) { return rest });
         * paramArr(1, 2, 3, 4); // -> [1, 2, 3, 4]
         */

        /* typescript
         * export declare function restArgs(fn: Function, startIndex?: number): Function;
         */
        exports = function(fn, startIdx) {
            startIdx = startIdx == null ? fn.length - 1 : +startIdx;
            return function() {
                var len = Math.max(arguments.length - startIdx, 0);
                var rest = new Array(len);
                var i;

                for (i = 0; i < len; i++) {
                    rest[i] = arguments[i + startIdx];
                } // Call runs faster than apply.

                switch (startIdx) {
                    case 0:
                        return fn.call(this, rest);

                    case 1:
                        return fn.call(this, arguments[0], rest);

                    case 2:
                        return fn.call(this, arguments[0], arguments[1], rest);
                }

                var args = new Array(startIdx + 1);

                for (i = 0; i < startIdx; i++) {
                    args[i] = arguments[i];
                }

                args[startIdx] = rest;
                return fn.apply(this, args);
            };
        };

        return exports;
    })({});

    /* ------------------------------ bind ------------------------------ */

    var bind = _.bind = (function (exports) {
        /* Create a function bound to a given object.
         *
         * |Name   |Type    |Desc                    |
         * |-------|--------|------------------------|
         * |fn     |function|Function to bind        |
         * |ctx    |*       |This binding of given fn|
         * |...rest|*       |Optional arguments      |
         * |return |function|New bound function      |
         */

        /* example
         * const fn = bind(function (msg) {
         *     console.log(this.name + ':' + msg);
         * }, {name: 'eustia'}, 'I am a utility library.');
         * fn(); // -> 'eustia: I am a utility library.'
         */

        /* typescript
         * export declare function bind(fn: Function, ctx: any, ...rest: any[]): Function;
         */

        /* dependencies
         * restArgs 
         */

        exports = restArgs(function(fn, ctx, rest) {
            return restArgs(function(callArgs) {
                return fn.apply(ctx, rest.concat(callArgs));
            });
        });

        return exports;
    })({});

    /* ------------------------------ clamp ------------------------------ */

    _.clamp = (function (exports) {
        /* Clamp number within the inclusive lower and upper bounds.
         *
         * |Name   |Type  |Desc           |
         * |-------|------|---------------|
         * |n      |number|Number to clamp|
         * |[lower]|number|Lower bound    |
         * |upper  |number|Upper bound    |
         * |return |number|Clamped number |
         */

        /* example
         * clamp(-10, -5, 5); // -> -5
         * clamp(10, -5, 5); // -> 5
         * clamp(2, -5, 5); // -> 2
         * clamp(10, 5); // -> 5
         * clamp(2, 5); // -> 2
         */

        /* typescript
         * export declare function clamp(n: number, lower: number, upper: number): number;
         * export declare function clamp(n: number, upper: number): number;
         */

        /* dependencies
         * isUndef 
         */

        exports = function(n, lower, upper) {
            if (isUndef(upper)) {
                upper = lower;
                lower = undefined;
            }

            if (!isUndef(lower) && n < lower) return lower;
            if (n > upper) return upper;
            return n;
        };

        return exports;
    })({});

    /* ------------------------------ max ------------------------------ */

    var max = _.max = (function (exports) {
        /* Get maximum value of given numbers.
         *
         * |Name  |Type  |Desc                |
         * |------|------|--------------------|
         * |...num|number|Numbers to calculate|
         * |return|number|Maximum value       |
         */

        /* example
         * max(2.3, 1, 4.5, 2); // 4.5
         */

        /* typescript
         * export declare function max(...num: number[]): number;
         */
        exports = function() {
            var arr = arguments;
            var ret = arr[0];

            for (var i = 1, len = arr.length; i < len; i++) {
                if (arr[i] > ret) ret = arr[i];
            }

            return ret;
        };

        return exports;
    })({});

    /* ------------------------------ combine ------------------------------ */

    _.combine = (function (exports) {
        /* Create an array by using one array for keys and another for its values.
         *
         * |Name  |Type  |Desc             |
         * |------|------|-----------------|
         * |keys  |array |Keys to be used  |
         * |values|array |Values to be used|
         * |return|object|Created object   |
         */

        /* example
         * combine(['a', 'b', 'c'], [1, 2, 3]); // -> {a: 1, b: 2, c: 3}
         */

        /* typescript
         * export declare function combine(keys: string[], values: any[]): any;
         */
        exports = function(keys, values) {
            var ret = {};

            for (var i = 0, len = keys.length; i < len; i++) {
                ret[keys[i]] = values[i];
            }

            return ret;
        };

        return exports;
    })({});

    /* ------------------------------ toStr ------------------------------ */

    var toStr = _.toStr = (function (exports) {
        /* Convert value to a string.
         *
         * |Name  |Type  |Desc            |
         * |------|------|----------------|
         * |val   |*     |Value to convert|
         * |return|string|Result string   |
         */

        /* example
         * toStr(null); // -> ''
         * toStr(1); // -> '1'
         * toStr(false); // -> 'false'
         * toStr([1, 2, 3]); // -> '1,2,3'
         */

        /* typescript
         * export declare function toStr(val: any): string;
         */
        exports = function(val) {
            return val == null ? '' : val.toString();
        };

        return exports;
    })({});

    /* ------------------------------ debounce ------------------------------ */

    var debounce = _.debounce = (function (exports) {
        /* Return a new debounced version of the passed function.
         *
         * |Name  |Type    |Desc                           |
         * |------|--------|-------------------------------|
         * |fn    |function|Function to debounce           |
         * |wait  |number  |Number of milliseconds to delay|
         * |return|function|New debounced function         |
         */

        /* example
         * const calLayout = debounce(function () {}, 300);
         * // $(window).resize(calLayout);
         */

        /* typescript
         * export declare function debounce(fn: Function, wait: number): Function;
         */
        exports = function(fn, wait, immediate) {
            var timeout;
            return function() {
                var ctx = this;
                var args = arguments;

                var throttler = function() {
                    timeout = null;
                    fn.apply(ctx, args);
                };

                if (!immediate) clearTimeout(timeout);
                if (!immediate || !timeout) timeout = setTimeout(throttler, wait);
            };
        };

        return exports;
    })({});

    /* ------------------------------ ucs2 ------------------------------ */

    var ucs2 = _.ucs2 = (function (exports) {
        /* UCS-2 encoding and decoding.
         *
         * ### encode
         *
         * Create a string using an array of code point values.
         *
         * |Name  |Type  |Desc                |
         * |------|------|--------------------|
         * |arr   |array |Array of code points|
         * |return|string|Encoded string      |
         *
         * ### decode
         *
         * Create an array of code point values using a string.
         *
         * |Name  |Type  |Desc                |
         * |------|------|--------------------|
         * |str   |string|Input string        |
         * |return|array |Array of code points|
         */

        /* example
         * ucs2.encode([0x61, 0x62, 0x63]); // -> 'abc'
         * ucs2.decode('abc'); // -> [0x61, 0x62, 0x63]
         * '𝌆'.length; // -> 2
         * ucs2.decode('𝌆').length; // -> 1
         */

        /* typescript
         * export declare const ucs2: {
         *     encode(arr: number[]): string;
         *     decode(str: string): number[];
         * };
         */
        // https://mathiasbynens.be/notes/javascript-encoding
        exports = {
            encode: function(arr) {
                return String.fromCodePoint.apply(String, arr);
            },
            decode: function(str) {
                var ret = [];
                var i = 0;
                var len = str.length;

                while (i < len) {
                    var c = str.charCodeAt(i++); // A high surrogate

                    if (c >= 0xd800 && c <= 0xdbff && i < len) {
                        var tail = str.charCodeAt(i++); // nextC >= 0xDC00 && nextC <= 0xDFFF

                        if ((tail & 0xfc00) === 0xdc00) {
                            // C = (H - 0xD800) * 0x400 + L - 0xDC00 + 0x10000
                            ret.push(((c & 0x3ff) << 10) + (tail & 0x3ff) + 0x10000);
                        } else {
                            ret.push(c);
                            i--;
                        }
                    } else {
                        ret.push(c);
                    }
                }

                return ret;
            }
        };

        return exports;
    })({});

    /* ------------------------------ utf8 ------------------------------ */

    var utf8 = _.utf8 = (function (exports) {
        /* UTF-8 encoding and decoding.
         *
         * ### encode
         *
         * Turn any UTF-8 decoded string into UTF-8 encoded string.
         *
         * |Name  |Type  |Desc            |
         * |------|------|----------------|
         * |str   |string|String to encode|
         * |return|string|Encoded string  |
         *
         * ### decode
         *
         * Turn any UTF-8 encoded string into UTF-8 decoded string.
         *
         * |Name      |Type   |Desc                  |
         * |----------|-------|----------------------|
         * |str       |string |String to decode      |
         * |safe=false|boolean|Suppress error if true|
         * |return    |string |Decoded string        |
         */

        /* example
         * utf8.encode('\uD800\uDC00'); // ->  '\xF0\x90\x80\x80'
         * utf8.decode('\xF0\x90\x80\x80'); // -> '\uD800\uDC00'
         */

        /* typescript
         * export declare const utf8: {
         *     encode(str: string): string;
         *     decode(str: string, safe?: boolean): string;
         * };
         */

        /* dependencies
         * ucs2 
         */ // https://encoding.spec.whatwg.org/#utf-8

        exports = {
            encode: function(str) {
                var codePoints = ucs2.decode(str);
                var byteArr = '';

                for (var i = 0, len = codePoints.length; i < len; i++) {
                    byteArr += encodeCodePoint(codePoints[i]);
                }

                return byteArr;
            },
            decode: function decode(str, safe) {
                byteArr = ucs2.decode(str);
                byteIdx = 0;
                byteCount = byteArr.length;
                codePoint = 0;
                bytesSeen = 0;
                bytesNeeded = 0;
                lowerBoundary = 0x80;
                upperBoundary = 0xbf;
                var codePoints = [];
                var tmp;

                while ((tmp = decodeCodePoint(safe)) !== false) {
                    codePoints.push(tmp);
                }

                return ucs2.encode(codePoints);
            }
        };
        var fromCharCode = String.fromCharCode;

        function encodeCodePoint(codePoint) {
            // U+0000 to U+0080, ASCII code point
            if ((codePoint & 0xffffff80) === 0) {
                return fromCharCode(codePoint);
            }

            var ret = '',
                count,
                offset; // U+0080 to U+07FF, inclusive

            if ((codePoint & 0xfffff800) === 0) {
                count = 1;
                offset = 0xc0;
            } else if ((codePoint & 0xffff0000) === 0) {
                // U+0800 to U+FFFF, inclusive
                count = 2;
                offset = 0xe0;
            } else if ((codePoint & 0xffe00000) == 0) {
                // U+10000 to U+10FFFF, inclusive
                count = 3;
                offset = 0xf0;
            }

            ret += fromCharCode((codePoint >> (6 * count)) + offset);

            while (count > 0) {
                var tmp = codePoint >> (6 * (count - 1));
                ret += fromCharCode(0x80 | (tmp & 0x3f));
                count--;
            }

            return ret;
        }

        var byteArr,
            byteIdx,
            byteCount,
            codePoint,
            bytesSeen,
            bytesNeeded,
            lowerBoundary,
            upperBoundary;

        function decodeCodePoint(safe) {
            /* eslint-disable no-constant-condition */
            while (true) {
                if (byteIdx >= byteCount && bytesNeeded) {
                    if (safe) return goBack();
                    throw new Error('Invalid byte index');
                }

                if (byteIdx === byteCount) return false;
                var byte = byteArr[byteIdx];
                byteIdx++;

                if (!bytesNeeded) {
                    // 0x00 to 0x7F
                    if ((byte & 0x80) === 0) {
                        return byte;
                    } // 0xC2 to 0xDF

                    if ((byte & 0xe0) === 0xc0) {
                        bytesNeeded = 1;
                        codePoint = byte & 0x1f;
                    } else if ((byte & 0xf0) === 0xe0) {
                        // 0xE0 to 0xEF
                        if (byte === 0xe0) lowerBoundary = 0xa0;
                        if (byte === 0xed) upperBoundary = 0x9f;
                        bytesNeeded = 2;
                        codePoint = byte & 0xf;
                    } else if ((byte & 0xf8) === 0xf0) {
                        // 0xF0 to 0xF4
                        if (byte === 0xf0) lowerBoundary = 0x90;
                        if (byte === 0xf4) upperBoundary = 0x8f;
                        bytesNeeded = 3;
                        codePoint = byte & 0x7;
                    } else {
                        if (safe) return goBack();
                        throw new Error('Invalid UTF-8 detected');
                    }

                    continue;
                }

                if (byte < lowerBoundary || byte > upperBoundary) {
                    if (safe) {
                        byteIdx--;
                        return goBack();
                    }

                    throw new Error('Invalid continuation byte');
                }

                lowerBoundary = 0x80;
                upperBoundary = 0xbf;
                codePoint = (codePoint << 6) | (byte & 0x3f);
                bytesSeen++;
                if (bytesSeen !== bytesNeeded) continue;
                var tmp = codePoint;
                codePoint = 0;
                bytesNeeded = 0;
                bytesSeen = 0;
                return tmp;
            }
        }

        function goBack() {
            var start = byteIdx - bytesSeen - 1;
            byteIdx = start + 1;
            codePoint = 0;
            bytesNeeded = 0;
            bytesSeen = 0;
            lowerBoundary = 0x80;
            upperBoundary = 0xbf;
            return byteArr[start];
        }

        return exports;
    })({});

    /* ------------------------------ root ------------------------------ */

    var root = _.root = (function (exports) {
        /* Root object reference, `global` in nodeJs, `window` in browser. */

        /* typescript
         * export declare const root: any;
         */

        /* dependencies
         * isBrowser 
         */

        exports = isBrowser ? window : global;

        return exports;
    })({});

    /* ------------------------------ detectMocha ------------------------------ */

    var detectMocha = _.detectMocha = (function (exports) {
        /* Detect if mocha is running.
         */

        /* example
         * detectMocha(); // -> True if mocha is running.
         */

        /* typescript
         * export declare function detectMocha(): boolean;
         */

        /* dependencies
         * root 
         */

        exports = function() {
            for (var i = 0, len = methods.length; i < len; i++) {
                var method = methods[i];
                if (typeof root[method] !== 'function') return false;
            }

            return true;
        };

        var methods = ['afterEach', 'after', 'beforeEach', 'before', 'describe', 'it'];

        return exports;
    })({});

    /* ------------------------------ keys ------------------------------ */

    var keys = _.keys = (function (exports) {
        /* Create an array of the own enumerable property names of object.
         *
         * |Name  |Type  |Desc                   |
         * |------|------|-----------------------|
         * |obj   |object|Object to query        |
         * |return|array |Array of property names|
         */

        /* example
         * keys({a: 1}); // -> ['a']
         */

        /* typescript
         * export declare function keys(obj: any): string[];
         */

        /* dependencies
         * has detectMocha 
         */

        if (Object.keys && !detectMocha()) {
            exports = Object.keys;
        } else {
            exports = function(obj) {
                var ret = [];

                for (var key in obj) {
                    if (has(obj, key)) ret.push(key);
                }

                return ret;
            };
        }

        return exports;
    })({});

    /* ------------------------------ freeze ------------------------------ */

    var freeze = _.freeze = (function (exports) {
        /* Shortcut for Object.freeze.
         *
         * Use Object.defineProperties if Object.freeze is not supported.
         *
         * |Name  |Type  |Desc            |
         * |------|------|----------------|
         * |obj   |object|Object to freeze|
         * |return|object|Object passed in|
         */

        /* example
         * const a = {b: 1};
         * freeze(a);
         * a.b = 2;
         * console.log(a); // -> {b: 1}
         */

        /* typescript
         * export declare function freeze<T>(obj: T): T;
         */

        /* dependencies
         * keys 
         */

        exports = function(obj) {
            if (Object.freeze) return Object.freeze(obj);
            keys(obj).forEach(function(prop) {
                if (!Object.getOwnPropertyDescriptor(obj, prop).configurable) return;
                Object.defineProperty(obj, prop, {
                    writable: false,
                    configurable: false
                });
            });
            return obj;
        };

        return exports;
    })({});

    /* ------------------------------ optimizeCb ------------------------------ */

    var optimizeCb = _.optimizeCb = (function (exports) {
        /* Used for function context binding.
         */

        /* typescript
         * export declare function optimizeCb(fn: Function, ctx: any, argCount?: number): Function;
         */

        /* dependencies
         * isUndef 
         */

        exports = function(fn, ctx, argCount) {
            if (isUndef(ctx)) return fn;

            switch (argCount == null ? 3 : argCount) {
                case 1:
                    return function(val) {
                        return fn.call(ctx, val);
                    };

                case 3:
                    return function(val, idx, collection) {
                        return fn.call(ctx, val, idx, collection);
                    };

                case 4:
                    return function(accumulator, val, idx, collection) {
                        return fn.call(ctx, accumulator, val, idx, collection);
                    };
            }

            return function() {
                return fn.apply(ctx, arguments);
            };
        };

        return exports;
    })({});

    /* ------------------------------ types ------------------------------ */

    var types = _.types = (function (exports) {
        /* Used for typescript definitions only.
         */

        /* typescript
         * export declare namespace types {
         *     interface Collection<T> {}
         *     interface List<T> extends Collection<T> {
         *         [index: number]: T;
         *         length: number;
         *     }
         *     interface ListIterator<T, TResult> {
         *         (value: T, index: number, list: List<T>): TResult;
         *     }
         *     interface Dictionary<T> extends Collection<T> {
         *         [index: string]: T;
         *     }
         *     interface ObjectIterator<T, TResult> {
         *         (element: T, key: string, list: Dictionary<T>): TResult;
         *     }
         *     interface MemoIterator<T, TResult> {
         *         (prev: TResult, curr: T, index: number, list: List<T>): TResult;
         *     }
         *     interface MemoObjectIterator<T, TResult> {
         *         (prev: TResult, curr: T, key: string, list: Dictionary<T>): TResult;
         *     }
         * }
         * export declare const types: {}
         */
        exports = {};

        return exports;
    })({});

    /* ------------------------------ escape ------------------------------ */

    var escape = _.escape = (function (exports) {
        /* Escapes a string for insertion into HTML, replacing &, <, >, ", `, and ' characters.
         *
         * |Name  |Type  |Desc            |
         * |------|------|----------------|
         * |str   |string|String to escape|
         * |return|string|Escaped string  |
         */

        /* example
         * escape('You & Me'); // -> 'You &amp; Me'
         */

        /* typescript
         * export declare function escape(str: string): string;
         */

        /* dependencies
         * keys 
         */

        exports = function(str) {
            return regTest.test(str) ? str.replace(regReplace, replaceFn) : str;
        };

        var map = (exports.map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            '`': '&#x60;'
        });
        var regSrc = '(?:' + keys(map).join('|') + ')';
        var regTest = new RegExp(regSrc);
        var regReplace = new RegExp(regSrc, 'g');

        function replaceFn(match) {
            return map[match];
        }

        return exports;
    })({});

    /* ------------------------------ escapeJsStr ------------------------------ */

    _.escapeJsStr = (function (exports) {
        /* Escape string to be a valid JavaScript string literal between quotes.
         *
         * http://www.ecma-international.org/ecma-262/5.1/#sec-7.8.4
         *
         * |Name  |Type  |Desc            |
         * |------|------|----------------|
         * |str   |string|String to escape|
         * |return|string|Escaped string  |
         */

        /* example
         * escapeJsStr('\"\n'); // -> '\\"\\\\n'
         */

        /* typescript
         * export declare function escapeJsStr(str: string): string;
         */

        /* dependencies
         * toStr 
         */

        exports = function(str) {
            return toStr(str).replace(regEscapeChars, function(char) {
                switch (char) {
                    case '"':
                    case "'":
                    case '\\':
                        return '\\' + char;

                    case '\n':
                        return '\\n';

                    case '\r':
                        return '\\r';
                    // Line separator

                    case '\u2028':
                        return '\\u2028';
                    // Paragraph separator

                    case '\u2029':
                        return '\\u2029';
                }
            });
        };

        var regEscapeChars = /["'\\\n\r\u2028\u2029]/g;

        return exports;
    })({});

    /* ------------------------------ escapeRegExp ------------------------------ */

    var escapeRegExp = _.escapeRegExp = (function (exports) {
        /* Escape special chars to be used as literals in RegExp constructors.
         *
         * |Name  |Type  |Desc            |
         * |------|------|----------------|
         * |str   |string|String to escape|
         * |return|string|Escaped string  |
         */

        /* example
         * escapeRegExp('[licia]'); // -> '\\[licia\\]'
         */

        /* typescript
         * export declare function escapeRegExp(str: string): string;
         */
        exports = function(str) {
            return str.replace(/\W/g, '\\$&');
        };

        return exports;
    })({});

    /* ------------------------------ identity ------------------------------ */

    var identity = _.identity = (function (exports) {
        /* Return the first argument given.
         *
         * |Name  |Type|Desc       |
         * |------|----|-----------|
         * |val   |*   |Any value  |
         * |return|*   |Given value|
         */

        /* example
         * identity('a'); // -> 'a'
         */

        /* typescript
         * export declare function identity<T>(val: T): T;
         */
        exports = function(val) {
            return val;
        };

        return exports;
    })({});

    /* ------------------------------ objToStr ------------------------------ */

    var objToStr = _.objToStr = (function (exports) {
        /* Alias of Object.prototype.toString.
         *
         * |Name  |Type  |Desc                                |
         * |------|------|------------------------------------|
         * |val   |*     |Source value                        |
         * |return|string|String representation of given value|
         */

        /* example
         * objToStr(5); // -> '[object Number]'
         */

        /* typescript
         * export declare function objToStr(val: any): string;
         */
        var ObjToStr = Object.prototype.toString;

        exports = function(val) {
            return ObjToStr.call(val);
        };

        return exports;
    })({});

    /* ------------------------------ isArgs ------------------------------ */

    var isArgs = _.isArgs = (function (exports) {
        /* Check if value is classified as an arguments object.
         *
         * |Name  |Type   |Desc                                |
         * |------|-------|------------------------------------|
         * |val   |*      |Value to check                      |
         * |return|boolean|True if value is an arguments object|
         */

        /* example
         * (function () {
         *     isArgs(arguments); // -> true
         * })();
         */

        /* typescript
         * export declare function isArgs(val: any): boolean;
         */

        /* dependencies
         * objToStr 
         */

        exports = function(val) {
            return objToStr(val) === '[object Arguments]';
        };

        return exports;
    })({});

    /* ------------------------------ isArr ------------------------------ */

    var isArr = _.isArr = (function (exports) {
        /* Check if value is an `Array` object.
         *
         * |Name  |Type   |Desc                              |
         * |------|-------|----------------------------------|
         * |val   |*      |Value to check                    |
         * |return|boolean|True if value is an `Array` object|
         */

        /* example
         * isArr([]); // -> true
         * isArr({}); // -> false
         */

        /* typescript
         * export declare function isArr(val: any): boolean;
         */

        /* dependencies
         * objToStr 
         */

        exports =
            Array.isArray ||
            function(val) {
                return objToStr(val) === '[object Array]';
            };

        return exports;
    })({});

    /* ------------------------------ castPath ------------------------------ */

    var castPath = _.castPath = (function (exports) {
        /* Cast value into a property path array.
         *
         * |Name  |Type        |Desc               |
         * |------|------------|-------------------|
         * |path  |string array|Value to inspect   |
         * |[obj] |object      |Object to query    |
         * |return|array       |Property path array|
         */

        /* example
         * castPath('a.b.c'); // -> ['a', 'b', 'c']
         * castPath(['a']); // -> ['a']
         * castPath('a[0].b'); // -> ['a', '0', 'b']
         * castPath('a.b.c', {'a.b.c': true}); // -> ['a.b.c']
         */

        /* typescript
         * export declare function castPath(path: string | string[], obj?: any): string[];
         */

        /* dependencies
         * has isArr 
         */

        exports = function(str, obj) {
            if (isArr(str)) return str;
            if (obj && has(obj, str)) return [str];
            var ret = [];
            str.replace(regPropName, function(match, number, quote, str) {
                ret.push(quote ? str.replace(regEscapeChar, '$1') : number || match);
            });
            return ret;
        }; // Lodash _stringToPath

        var regPropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
        var regEscapeChar = /\\(\\)?/g;

        return exports;
    })({});

    /* ------------------------------ safeGet ------------------------------ */

    var safeGet = _.safeGet = (function (exports) {
        /* Get object property, don't throw undefined error.
         *
         * |Name  |Type        |Desc                     |
         * |------|------------|-------------------------|
         * |obj   |object      |Object to query          |
         * |path  |array string|Path of property to get  |
         * |return|*           |Target value or undefined|
         */

        /* example
         * const obj = {a: {aa: {aaa: 1}}};
         * safeGet(obj, 'a.aa.aaa'); // -> 1
         * safeGet(obj, ['a', 'aa']); // -> {aaa: 1}
         * safeGet(obj, 'a.b'); // -> undefined
         */

        /* typescript
         * export declare function safeGet(obj: any, path: string | string[]): any;
         */

        /* dependencies
         * isUndef castPath 
         */

        exports = function(obj, path) {
            path = castPath(path, obj);
            var prop;
            prop = path.shift();

            while (!isUndef(prop)) {
                obj = obj[prop];
                if (obj == null) return;
                prop = path.shift();
            }

            return obj;
        };

        return exports;
    })({});

    /* ------------------------------ isDate ------------------------------ */

    var isDate = _.isDate = (function (exports) {
        /* Check if value is classified as a Date object.
         *
         * |Name  |Type   |Desc                          |
         * |------|-------|------------------------------|
         * |val   |*      |value to check                |
         * |return|boolean|True if value is a Date object|
         */

        /* example
         * isDate(new Date()); // -> true
         */

        /* typescript
         * export declare function isDate(val: any): boolean;
         */

        /* dependencies
         * objToStr 
         */

        exports = function(val) {
            return objToStr(val) === '[object Date]';
        };

        return exports;
    })({});

    /* ------------------------------ isFn ------------------------------ */

    var isFn = _.isFn = (function (exports) {
        /* Check if value is a function.
         *
         * |Name  |Type   |Desc                       |
         * |------|-------|---------------------------|
         * |val   |*      |Value to check             |
         * |return|boolean|True if value is a function|
         *
         * Generator function is also classified as true.
         */

        /* example
         * isFn(function() {}); // -> true
         * isFn(function*() {}); // -> true
         * isFn(async function() {}); // -> true
         */

        /* typescript
         * export declare function isFn(val: any): boolean;
         */

        /* dependencies
         * objToStr 
         */

        exports = function(val) {
            var objStr = objToStr(val);
            return (
                objStr === '[object Function]' ||
                objStr === '[object GeneratorFunction]' ||
                objStr === '[object AsyncFunction]'
            );
        };

        return exports;
    })({});

    /* ------------------------------ getProto ------------------------------ */

    var getProto = _.getProto = (function (exports) {
        /* Get prototype of an object.
         *
         * |Name  |Type|Desc                                         |
         * |------|----|---------------------------------------------|
         * |obj   |*   |Target object                                |
         * |return|*   |Prototype of given object, null if not exists|
         */

        /* example
         * const a = {};
         * getProto(Object.create(a)); // -> a
         */

        /* typescript
         * export declare function getProto(obj: any): any;
         */

        /* dependencies
         * isObj isFn 
         */

        var getPrototypeOf = Object.getPrototypeOf;
        var ObjectCtr = {}.constructor;

        exports = function(obj) {
            if (!isObj(obj)) return null;
            if (getPrototypeOf) return getPrototypeOf(obj);
            var proto = obj.__proto__;
            if (proto || proto === null) return proto;
            if (isFn(obj.constructor)) return obj.constructor.prototype;
            if (obj instanceof ObjectCtr) return ObjectCtr.prototype;
            return null;
        };

        return exports;
    })({});

    /* ------------------------------ isMiniProgram ------------------------------ */

    var isMiniProgram = _.isMiniProgram = (function (exports) {
        /* Check if running in wechat mini program.
         */

        /* example
         * console.log(isMiniProgram); // -> true if running in mini program.
         */

        /* typescript
         * export declare const isMiniProgram: boolean;
         */

        /* dependencies
         * isFn 
         */
        /* eslint-disable no-undef */

        exports = typeof wx !== 'undefined' && isFn(wx.openLocation);

        return exports;
    })({});

    /* ------------------------------ isNum ------------------------------ */

    var isNum = _.isNum = (function (exports) {
        /* Check if value is classified as a Number primitive or object.
         *
         * |Name  |Type   |Desc                                 |
         * |------|-------|-------------------------------------|
         * |val   |*      |Value to check                       |
         * |return|boolean|True if value is correctly classified|
         */

        /* example
         * isNum(5); // -> true
         * isNum(5.1); // -> true
         * isNum({}); // -> false
         */

        /* typescript
         * export declare function isNum(val: any): boolean;
         */

        /* dependencies
         * objToStr 
         */

        exports = function(val) {
            return objToStr(val) === '[object Number]';
        };

        return exports;
    })({});

    /* ------------------------------ isArrLike ------------------------------ */

    var isArrLike = _.isArrLike = (function (exports) {
        /* Check if value is array-like.
         *
         * |Name  |Type   |Desc                       |
         * |------|-------|---------------------------|
         * |val   |*      |Value to check             |
         * |return|boolean|True if value is array like|
         *
         * Function returns false.
         */

        /* example
         * isArrLike('test'); // -> true
         * isArrLike(document.body.children); // -> true;
         * isArrLike([1, 2, 3]); // -> true
         */

        /* typescript
         * export declare function isArrLike(val: any): boolean;
         */

        /* dependencies
         * isNum isFn 
         */

        var MAX_ARR_IDX = Math.pow(2, 53) - 1;

        exports = function(val) {
            if (!val) return false;
            var len = val.length;
            return isNum(len) && len >= 0 && len <= MAX_ARR_IDX && !isFn(val);
        };

        return exports;
    })({});

    /* ------------------------------ each ------------------------------ */

    var each = _.each = (function (exports) {
        /* Iterate over elements of collection and invokes iterator for each element.
         *
         * |Name    |Type        |Desc                          |
         * |--------|------------|------------------------------|
         * |obj     |object array|Collection to iterate over    |
         * |iterator|function    |Function invoked per iteration|
         * |[ctx]   |*           |Function context              |
         */

        /* example
         * each({'a': 1, 'b': 2}, function (val, key) {});
         */

        /* typescript
         * export declare function each<T>(
         *     list: types.List<T>,
         *     iterator: types.ListIterator<T, void>,
         *     ctx?: any
         * ): types.List<T>;
         * export declare function each<T>(
         *     object: types.Dictionary<T>,
         *     iterator: types.ObjectIterator<T, void>,
         *     ctx?: any
         * ): types.Collection<T>;
         */

        /* eslint-disable no-unused-vars */

        /* dependencies
         * isArrLike keys optimizeCb types 
         */

        exports = function(obj, iterator, ctx) {
            iterator = optimizeCb(iterator, ctx);
            var i, len;

            if (isArrLike(obj)) {
                for (i = 0, len = obj.length; i < len; i++) {
                    iterator(obj[i], i, obj);
                }
            } else {
                var _keys = keys(obj);

                for (i = 0, len = _keys.length; i < len; i++) {
                    iterator(obj[_keys[i]], _keys[i], obj);
                }
            }

            return obj;
        };

        return exports;
    })({});

    /* ------------------------------ createAssigner ------------------------------ */

    var createAssigner = _.createAssigner = (function (exports) {
        /* Used to create extend, extendOwn and defaults.
         *
         * |Name    |Type    |Desc                          |
         * |--------|--------|------------------------------|
         * |keysFn  |function|Function to get object keys   |
         * |defaults|boolean |No override when set to true  |
         * |return  |function|Result function, extend...    |
         */

        /* typescript
         * export declare function createAssigner(keysFn: Function, defaults: boolean): Function;
         */

        /* dependencies
         * isUndef each 
         */

        exports = function(keysFn, defaults) {
            return function(obj) {
                each(arguments, function(src, idx) {
                    if (idx === 0) return;
                    var keys = keysFn(src);
                    each(keys, function(key) {
                        if (!defaults || isUndef(obj[key])) obj[key] = src[key];
                    });
                });
                return obj;
            };
        };

        return exports;
    })({});

    /* ------------------------------ extendOwn ------------------------------ */

    var extendOwn = _.extendOwn = (function (exports) {
        /* Like extend, but only copies own properties over to the destination object.
         *
         * |Name       |Type  |Desc              |
         * |-----------|------|------------------|
         * |destination|object|Destination object|
         * |...sources |object|Sources objects   |
         * |return     |object|Destination object|
         */

        /* example
         * extendOwn({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
         */

        /* typescript
         * export declare function extendOwn(destination: any, ...sources: any[]): any;
         */

        /* dependencies
         * keys createAssigner 
         */

        exports = createAssigner(keys);

        return exports;
    })({});

    /* ------------------------------ invert ------------------------------ */

    var invert = _.invert = (function (exports) {
        /* Create an object composed of the inverted keys and values of object.
         *
         * |Name  |Type  |Desc               |
         * |------|------|-------------------|
         * |obj   |object|Object to invert   |
         * |return|object|New inverted object|
         *
         * If object contains duplicate values, subsequent values overwrite property assignments of previous values.
         */

        /* example
         * invert({a: 'b', c: 'd', e: 'f'}); // -> {b: 'a', d: 'c', f: 'e'}
         */

        /* typescript
         * export declare function invert(obj: any): any;
         */

        /* dependencies
         * each 
         */

        exports = function(obj) {
            var ret = {};
            each(obj, function(val, key) {
                ret[val] = key;
            });
            return ret;
        };

        return exports;
    })({});

    /* ------------------------------ isStr ------------------------------ */

    var isStr = _.isStr = (function (exports) {
        /* Check if value is a string primitive.
         *
         * |Name  |Type   |Desc                               |
         * |------|-------|-----------------------------------|
         * |val   |*      |Value to check                     |
         * |return|boolean|True if value is a string primitive|
         */

        /* example
         * isStr('licia'); // -> true
         */

        /* typescript
         * export declare function isStr(val: any): boolean;
         */

        /* dependencies
         * objToStr 
         */

        exports = function(val) {
            return objToStr(val) === '[object String]';
        };

        return exports;
    })({});

    /* ------------------------------ className ------------------------------ */

    _.className = (function (exports) {
        /* Utility for conditionally joining class names.
         *
         * |Name    |Type               |Desc              |
         * |--------|-------------------|------------------|
         * |...class|string object array|Class names       |
         * |return  |string             |Joined class names|
         */

        /* example
         * className('a', 'b', 'c'); // -> 'a b c'
         * className('a', false, 'b', 0, 1, 'c'); // -> 'a b 1 c'
         * className('a', ['b', 'c']); // -> 'a b c'
         * className('a', {b: false, c: true}); // -> 'a c'
         * className('a', ['b', 'c', {d: true, e: false}]); // -> 'a b c d';
         */

        /* typescript
         * export declare function className(...arr: any[]): string;
         */

        /* dependencies
         * each isStr isNum isArr isObj 
         */

        exports = function() {
            var ret = [];
            each(arguments, function(arg) {
                if (!arg) return;
                if (isStr(arg) || isNum(arg)) return ret.push(arg);
                if (isArr(arg)) return ret.push(exports.apply(null, arg));
                if (!isObj(arg)) return;
                each(arg, function(val, key) {
                    if (val) ret.push(key);
                });
            });
            return ret.join(' ');
        };

        return exports;
    })({});

    /* ------------------------------ isEmpty ------------------------------ */

    var isEmpty = _.isEmpty = (function (exports) {
        /* Check if value is an empty object or array.
         *
         * |Name  |Type   |Desc                  |
         * |------|-------|----------------------|
         * |val   |*      |Value to check        |
         * |return|boolean|True if value is empty|
         */

        /* example
         * isEmpty([]); // -> true
         * isEmpty({}); // -> true
         * isEmpty(''); // -> true
         */

        /* typescript
         * export declare function isEmpty(val: any): boolean;
         */

        /* dependencies
         * isArrLike isArr isStr isArgs keys 
         */

        exports = function(val) {
            if (val == null) return true;

            if (isArrLike(val) && (isArr(val) || isStr(val) || isArgs(val))) {
                return val.length === 0;
            }

            return keys(val).length === 0;
        };

        return exports;
    })({});

    /* ------------------------------ isEqual ------------------------------ */

    _.isEqual = (function (exports) {
        /* Performs an optimized deep comparison between the two objects, to determine if they should be considered equal.
         *
         * |Name  |Type   |Desc                         |
         * |------|-------|-----------------------------|
         * |val   |*      |Value to compare             |
         * |other |*      |Other value to compare       |
         * |return|boolean|True if values are equivalent|
         */

        /* example
         * isEqual([1, 2, 3], [1, 2, 3]); // -> true
         */

        /* typescript
         * export declare function isEqual(val: any, other: any): boolean;
         */

        /* dependencies
         * isFn has keys 
         */

        exports = function(a, b) {
            return eq(a, b);
        };

        function deepEq(a, b, aStack, bStack) {
            var className = toString.call(a);
            if (className !== toString.call(b)) return false;

            switch (className) {
                case '[object RegExp]':
                case '[object String]':
                    return '' + a === '' + b;

                case '[object Number]':
                    if (+a !== +a) return +b !== +b;
                    return +a === 0 ? 1 / +a === 1 / b : +a === +b;

                case '[object Date]':
                case '[object Boolean]':
                    return +a === +b;
            }

            var areArrays = className === '[object Array]';

            if (!areArrays) {
                if (typeof a != 'object' || typeof b != 'object') return false;
                var aCtor = a.constructor;
                var bCtor = b.constructor;
                if (
                    aCtor !== bCtor &&
                    !(
                        isFn(aCtor) &&
                        aCtor instanceof aCtor &&
                        isFn(bCtor) &&
                        bCtor instanceof bCtor
                    ) &&
                    'constructor' in a &&
                    'constructor' in b
                )
                    return false;
            }

            aStack = aStack || [];
            bStack = bStack || [];
            var length = aStack.length;

            while (length--) {
                if (aStack[length] === a) return bStack[length] === b;
            }

            aStack.push(a);
            bStack.push(b);

            if (areArrays) {
                length = a.length;
                if (length !== b.length) return false;

                while (length--) {
                    if (!eq(a[length], b[length], aStack, bStack)) return false;
                }
            } else {
                var _keys = keys(a);

                var key;
                length = _keys.length;
                if (keys(b).length !== length) return false;

                while (length--) {
                    key = _keys[length];
                    if (!(has(b, key) && eq(a[key], b[key], aStack, bStack)))
                        return false;
                }
            }

            aStack.pop();
            bStack.pop();
            return true;
        }

        function eq(a, b, aStack, bStack) {
            if (a === b) return a !== 0 || 1 / a === 1 / b;
            if (a == null || b == null) return a === b;
            if (a !== a) return b !== b;
            var type = typeof a;
            if (type !== 'function' && type !== 'object' && typeof b != 'object')
                return false;
            return deepEq(a, b, aStack, bStack);
        }

        return exports;
    })({});

    /* ------------------------------ isErr ------------------------------ */

    _.isErr = (function (exports) {
        /* Check if value is an error.
         *
         * |Name  |Type   |Desc                     |
         * |------|-------|-------------------------|
         * |val   |*      |Value to check           |
         * |return|boolean|True if value is an error|
         */

        /* example
         * isErr(new Error()); // -> true
         */

        /* typescript
         * export declare function isErr(val: any): boolean;
         */

        /* dependencies
         * objToStr 
         */

        exports = function(val) {
            return objToStr(val) === '[object Error]';
        };

        return exports;
    })({});

    /* ------------------------------ isInt ------------------------------ */

    _.isInt = (function (exports) {
        /* Checks if value is classified as a Integer.
         *
         * |Name  |Type   |Desc                                 |
         * |------|-------|-------------------------------------|
         * |val   |*      |Value to check                       |
         * |return|boolean|True if value is correctly classified|
         */

        /* example
         * isInt(5); // -> true
         * isInt(5.1); // -> false
         * isInt({}); // -> false
         */

        /* typescript
         * export declare function isInt(val: any): boolean;
         */

        /* dependencies
         * isNum 
         */

        exports = function(val) {
            return isNum(val) && val % 1 === 0;
        };

        return exports;
    })({});

    /* ------------------------------ isMatch ------------------------------ */

    var isMatch = _.isMatch = (function (exports) {
        /* Check if keys and values in src are contained in obj.
         *
         * |Name  |Type   |Desc                              |
         * |------|-------|----------------------------------|
         * |obj   |object |Object to inspect                 |
         * |src   |object |Object of property values to match|
         * |return|boolean|True if object is match           |
         */

        /* example
         * isMatch({a: 1, b: 2}, {a: 1}); // -> true
         */

        /* typescript
         * export declare function isMatch(obj: any, src: any): boolean;
         */

        /* dependencies
         * keys 
         */

        exports = function(obj, src) {
            var _keys = keys(src);

            var len = _keys.length;
            if (obj == null) return !len;
            obj = Object(obj);

            for (var i = 0; i < len; i++) {
                var key = _keys[i];
                if (src[key] !== obj[key] || !(key in obj)) return false;
            }

            return true;
        };

        return exports;
    })({});

    /* ------------------------------ isPromise ------------------------------ */

    _.isPromise = (function (exports) {
        /* Check if value looks like a promise.
         *
         * |Name  |Type   |Desc                              |
         * |------|-------|----------------------------------|
         * |val   |*      |Value to check                    |
         * |return|boolean|True if value looks like a promise|
         */

        /* example
         * isPromise(new Promise(function () {})); // -> true
         * isPromise({}); // -> false
         */

        /* typescript
         * export declare function isPromise(val: any): boolean;
         */

        /* dependencies
         * isObj isFn 
         */

        exports = function(val) {
            return isObj(val) && isFn(val.then);
        };

        return exports;
    })({});

    /* ------------------------------ isRegExp ------------------------------ */

    _.isRegExp = (function (exports) {
        /* Check if value is a regular expression.
         *
         * |Name  |Type   |Desc                                 |
         * |------|-------|-------------------------------------|
         * |val   |*      |Value to check                       |
         * |return|boolean|True if value is a regular expression|
         */

        /* example
         * isRegExp(/a/); // -> true
         */

        /* typescript
         * export declare function isRegExp(val: any): boolean;
         */

        /* dependencies
         * objToStr 
         */

        exports = function(val) {
            return objToStr(val) === '[object RegExp]';
        };

        return exports;
    })({});

    /* ------------------------------ repeat ------------------------------ */

    var repeat = _.repeat = (function (exports) {
        /* Repeat string n-times.
         *
         * |Name  |Type  |Desc            |
         * |------|------|----------------|
         * |str   |string|String to repeat|
         * |n     |number|Repeat times    |
         * |return|string|Repeated string |
         */

        /* example
         * repeat('a', 3); // -> 'aaa'
         * repeat('ab', 2); // -> 'abab'
         * repeat('*', 0); // -> ''
         */

        /* typescript
         * export declare function repeat(str: string, n: number): string;
         */
        exports = function(str, n) {
            var ret = '';
            if (n < 1) return '';

            while (n > 0) {
                if (n & 1) ret += str;
                n >>= 1;
                str += str;
            }

            return ret;
        };

        return exports;
    })({});

    /* ------------------------------ lpad ------------------------------ */

    var lpad = _.lpad = (function (exports) {
        /* Pad string on the left side if it's shorter than length.
         *
         * |Name   |Type  |Desc                  |
         * |-------|------|----------------------|
         * |str    |string|String to pad         |
         * |len    |number|Padding length        |
         * |[chars]|string|String used as padding|
         * |return |string|Result string         |
         */

        /* example
         * lpad('a', 5); // -> '    a'
         * lpad('a', 5, '-'); // -> '----a'
         * lpad('abc', 3, '-'); // -> 'abc'
         * lpad('abc', 5, 'ab'); // -> 'ababc'
         */

        /* typescript
         * export declare function lpad(str: string, len: number, chars?: string): string;
         */

        /* dependencies
         * repeat toStr 
         */

        exports = function(str, len, chars) {
            str = toStr(str);
            var strLen = str.length;
            chars = chars || ' ';
            if (strLen < len) str = (repeat(chars, len - strLen) + str).slice(-len);
            return str;
        };

        return exports;
    })({});

    /* ------------------------------ dateFormat ------------------------------ */

    _.dateFormat = (function (exports) {
        /* Simple but extremely useful date format function.
         *
         * |Name         |Type   |Desc                 |
         * |-------------|-------|---------------------|
         * |date=new Date|Date   |Date object to format|
         * |mask         |string |Format mask          |
         * |utc=false    |boolean|UTC or not           |
         * |gmt=false    |boolean|GMT or not           |
         *
         * |Mask|Description                                                      |
         * |----|-----------------------------------------------------------------|
         * |d   |Day of the month as digits; no leading zero for single-digit days|
         * |dd  |Day of the month as digits; leading zero for single-digit days   |
         * |ddd |Day of the week as a three-letter abbreviation                   |
         * |dddd|Day of the week as its full name                                 |
         * |m   |Month as digits; no leading zero for single-digit months         |
         * |mm  |Month as digits; leading zero for single-digit months            |
         * |mmm |Month as a three-letter abbreviation                             |
         * |mmmm|Month as its full name                                           |
         * |yy  |Year as last two digits; leading zero for years less than 10     |
         * |yyyy|Year represented by four digits                                  |
         * |h   |Hours; no leading zero for single-digit hours (12-hour clock)    |
         * |hh  |Hours; leading zero for single-digit hours (12-hour clock)       |
         * |H   |Hours; no leading zero for single-digit hours (24-hour clock)    |
         * |HH  |Hours; leading zero for single-digit hours (24-hour clock)       |
         * |M   |Minutes; no leading zero for single-digit minutes                |
         * |MM  |Minutes; leading zero for single-digit minutes                   |
         * |s   |Seconds; no leading zero for single-digit seconds                |
         * |ss  |Seconds; leading zero for single-digit seconds                   |
         * |l L |Milliseconds. l gives 3 digits. L gives 2 digits                 |
         * |t   |Lowercase, single-character time marker string: a or p           |
         * |tt  |Lowercase, two-character time marker string: am or pm            |
         * |T   |Uppercase, single-character time marker string: A or P           |
         * |TT  |Uppercase, two-character time marker string: AM or PM            |
         * |Z   |US timezone abbreviation, e.g. EST or MDT                        |
         * |o   |GMT/UTC timezone offset, e.g. -0500 or +0230                     |
         * |S   |The date's ordinal suffix (st, nd, rd, or th)                    |
         * |UTC:|Must be the first four characters of the mask                    |
         */

        /* example
         * dateFormat('isoDate'); // -> 2016-11-19
         * dateFormat('yyyy-mm-dd HH:MM:ss'); // -> 2016-11-19 19:00:04
         * dateFormat(new Date(), 'yyyy-mm-dd'); // -> 2016-11-19
         */

        /* typescript
         * export declare function dateFormat(
         *     date: Date,
         *     mask: string,
         *     utc?: boolean,
         *     gmt?: boolean
         * ): string;
         * export declare function dateFormat(
         *     mask: string,
         *     utc?: boolean,
         *     gmt?: boolean
         * ): string;
         */

        /* dependencies
         * isStr isDate toStr lpad 
         */

        exports = function(date, mask, utc, gmt) {
            if (arguments.length === 1 && isStr(date) && !regNum.test(date)) {
                mask = date;
                date = undefined;
            }

            date = date || new Date();
            if (!isDate(date)) date = new Date(date);
            mask = toStr(exports.masks[mask] || mask || exports.masks['default']);
            var maskSlice = mask.slice(0, 4);

            if (maskSlice === 'UTC:' || maskSlice === 'GMT:') {
                mask = mask.slice(4);
                utc = true;
                if (maskSlice === 'GMT:') gmt = true;
            }

            var prefix = utc ? 'getUTC' : 'get';
            var d = date[prefix + 'Date']();
            var D = date[prefix + 'Day']();
            var m = date[prefix + 'Month']();
            var y = date[prefix + 'FullYear']();
            var H = date[prefix + 'Hours']();
            var M = date[prefix + 'Minutes']();
            var s = date[prefix + 'Seconds']();
            var L = date[prefix + 'Milliseconds']();
            var o = utc ? 0 : date.getTimezoneOffset();
            var flags = {
                d: d,
                dd: padZero(d),
                ddd: exports.i18n.dayNames[D],
                dddd: exports.i18n.dayNames[D + 7],
                m: m + 1,
                mm: padZero(m + 1),
                mmm: exports.i18n.monthNames[m],
                mmmm: exports.i18n.monthNames[m + 12],
                yy: toStr(y).slice(2),
                yyyy: y,
                h: H % 12 || 12,
                hh: padZero(H % 12 || 12),
                H: H,
                HH: padZero(H),
                M: M,
                MM: padZero(M),
                s: s,
                ss: padZero(s),
                l: padZero(L, 3),
                L: padZero(Math.round(L / 10)),
                t: H < 12 ? 'a' : 'p',
                tt: H < 12 ? 'am' : 'pm',
                T: H < 12 ? 'A' : 'P',
                TT: H < 12 ? 'AM' : 'PM',
                Z: gmt
                    ? 'GMT'
                    : utc
                    ? 'UTC'
                    : (toStr(date).match(regTimezone) || [''])
                          .pop()
                          .replace(regTimezoneClip, ''),
                o:
                    (o > 0 ? '-' : '+') +
                    padZero(Math.floor(Math.abs(o) / 60) * 100 + (Math.abs(o) % 60), 4),
                S: ['th', 'st', 'nd', 'rd'][
                    d % 10 > 3 ? 0 : (((d % 100) - (d % 10) != 10) * d) % 10
                ]
            };
            return mask.replace(regToken, function(match) {
                if (match in flags) return flags[match];
                return match.slice(1, match.length - 1);
            });
        };

        function padZero(str, len) {
            return lpad(toStr(str), len || 2, '0');
        }

        var regToken = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZWN]|'[^']*'|'[^']*'/g;
        var regTimezone = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g;
        var regNum = /\d/;
        var regTimezoneClip = /[^-+\dA-Z]/g;
        exports.masks = {
            default: 'ddd mmm dd yyyy HH:MM:ss',
            shortDate: 'm/d/yy',
            mediumDate: 'mmm d, yyyy',
            longDate: 'mmmm d, yyyy',
            fullDate: 'dddd, mmmm d, yyyy',
            shortTime: 'h:MM TT',
            mediumTime: 'h:MM:ss TT',
            longTime: 'h:MM:ss TT Z',
            isoDate: 'yyyy-mm-dd',
            isoTime: 'HH:MM:ss',
            isoDateTime: "yyyy-mm-dd'T'HH:MM:sso",
            isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'",
            expiresHeaderFormat: 'ddd, dd mmm yyyy HH:MM:ss Z'
        };
        exports.i18n = {
            dayNames: [
                'Sun',
                'Mon',
                'Tue',
                'Wed',
                'Thu',
                'Fri',
                'Sat',
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ],
            monthNames: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ]
        };

        return exports;
    })({});

    /* ------------------------------ ltrim ------------------------------ */

    var ltrim = _.ltrim = (function (exports) {
        /* Remove chars or white-spaces from beginning of string.
         *
         * |Name   |Type        |Desc              |
         * |-------|------------|------------------|
         * |str    |string      |String to trim    |
         * |[chars]|string array|Characters to trim|
         * |return |string      |Trimmed string    |
         */

        /* example
         * ltrim(' abc  '); // -> 'abc  '
         * ltrim('_abc_', '_'); // -> 'abc_'
         * ltrim('_abc_', ['a', '_']); // -> 'bc_'
         */

        /* typescript
         * export declare function ltrim(str: string, chars?: string | string[]): string;
         */
        var regSpace = /^\s+/;

        exports = function(str, chars) {
            if (chars == null) return str.replace(regSpace, '');
            var start = 0;
            var len = str.length;
            var charLen = chars.length;
            var found = true;
            var i;
            var c;

            while (found && start < len) {
                found = false;
                i = -1;
                c = str.charAt(start);

                while (++i < charLen) {
                    if (c === chars[i]) {
                        found = true;
                        start++;
                        break;
                    }
                }
            }

            return start >= len ? '' : str.substr(start, len);
        };

        return exports;
    })({});

    /* ------------------------------ matcher ------------------------------ */

    var matcher = _.matcher = (function (exports) {
        /* Return a predicate function that checks if attrs are contained in an object.
         *
         * |Name  |Type    |Desc                              |
         * |------|--------|----------------------------------|
         * |attrs |object  |Object of property values to match|
         * |return|function|New predicate function            |
         */

        /* example
         * const filter = require('licia/filter');
         *
         * const objects = [
         *     {a: 1, b: 2, c: 3 },
         *     {a: 4, b: 5, c: 6 }
         * ];
         * filter(objects, matcher({a: 4, c: 6 })); // -> [{a: 4, b: 5, c: 6}]
         */

        /* typescript
         * export declare function matcher(attrs: any): Function;
         */

        /* dependencies
         * extendOwn isMatch 
         */

        exports = function(attrs) {
            attrs = extendOwn({}, attrs);
            return function(obj) {
                return isMatch(obj, attrs);
            };
        };

        return exports;
    })({});

    /* ------------------------------ safeCb ------------------------------ */

    var safeCb = _.safeCb = (function (exports) {
        /* Create callback based on input value.
         */

        /* typescript
         * export declare function safeCb(val?: any, ctx?: any, argCount?: number): Function;
         */

        /* dependencies
         * isFn isObj optimizeCb matcher identity 
         */

        exports = function(val, ctx, argCount) {
            if (val == null) return identity;
            if (isFn(val)) return optimizeCb(val, ctx, argCount);
            if (isObj(val)) return matcher(val);
            return function(key) {
                return function(obj) {
                    return obj == null ? undefined : obj[key];
                };
            };
        };

        return exports;
    })({});

    /* ------------------------------ filter ------------------------------ */

    var filter = _.filter = (function (exports) {
        /* Iterates over elements of collection, returning an array of all the values that pass a truth test.
         *
         * |Name     |Type    |Desc                                   |
         * |---------|--------|---------------------------------------|
         * |obj      |array   |Collection to iterate over             |
         * |predicate|function|Function invoked per iteration         |
         * |[ctx]    |*       |Predicate context                      |
         * |return   |array   |Array of all values that pass predicate|
         */

        /* example
         * filter([1, 2, 3, 4, 5], function (val) {
         *     return val % 2 === 0;
         * }); // -> [2, 4]
         */

        /* typescript
         * export declare function filter<T>(
         *     list: types.List<T>,
         *     iterator: types.ListIterator<T, boolean>,
         *     context?: any
         * ): T[];
         * export declare function filter<T>(
         *     object: types.Dictionary<T>,
         *     iterator: types.ObjectIterator<T, boolean>,
         *     context?: any
         * ): T[];
         */

        /* eslint-disable no-unused-vars */

        /* dependencies
         * safeCb each types 
         */

        exports = function(obj, predicate, ctx) {
            var ret = [];
            predicate = safeCb(predicate, ctx);
            each(obj, function(val, idx, list) {
                if (predicate(val, idx, list)) ret.push(val);
            });
            return ret;
        };

        return exports;
    })({});

    /* ------------------------------ compact ------------------------------ */

    _.compact = (function (exports) {
        /* Return a copy of the array with all falsy values removed.
         *
         * The values false, null, 0, "", undefined, and NaN are falsey.
         *
         * |Name  |Type |Desc                        |
         * |------|-----|----------------------------|
         * |arr   |array|Array to compact            |
         * |return|array|New array of filtered values|
         */

        /* example
         * compact([0, 1, false, 2, '', 3]); // -> [1, 2, 3]
         */

        /* typescript
         * export declare function compact(arr: any[]): any[];
         */

        /* dependencies
         * filter 
         */

        exports = function(arr) {
            return filter(arr, function(val) {
                return !!val;
            });
        };

        return exports;
    })({});

    /* ------------------------------ unique ------------------------------ */

    var unique = _.unique = (function (exports) {
        /* Create duplicate-free version of an array.
         *
         * |Name     |Type    |Desc                         |
         * |---------|--------|-----------------------------|
         * |arr      |array   |Array to inspect             |
         * |[compare]|function|Function for comparing values|
         * |return   |array   |New duplicate free array     |
         */

        /* example
         * unique([1, 2, 3, 1]); // -> [1, 2, 3]
         */

        /* typescript
         * export declare function unique(
         *     arr: any[],
         *     compare?: (a: any, b: any) => boolean | number
         * ): any[];
         */

        /* dependencies
         * filter 
         */

        exports = function(arr, compare) {
            compare = compare || isEqual;
            return filter(arr, function(item, idx, arr) {
                var len = arr.length;

                while (++idx < len) {
                    if (compare(item, arr[idx])) return false;
                }

                return true;
            });
        };

        function isEqual(a, b) {
            return a === b;
        }

        return exports;
    })({});

    /* ------------------------------ allKeys ------------------------------ */

    var allKeys = _.allKeys = (function (exports) {
        /* Retrieve all the names of object's own and inherited properties.
         *
         * |Name     |Type  |Desc                       |
         * |---------|------|---------------------------|
         * |obj      |object|Object to query            |
         * |[options]|object|Options                    |
         * |return   |array |Array of all property names|
         *
         * Available options:
         *
         * |Name              |Type   |Desc                     |
         * |------------------|-------|-------------------------|
         * |prototype=true    |boolean|Include prototype keys   |
         * |unenumerable=false|boolean|Include unenumerable keys|
         * |symbol=false      |boolean|Include symbol keys      |
         *
         * Members of Object's prototype won't be retrieved.
         */

        /* example
         * const obj = Object.create({zero: 0});
         * obj.one = 1;
         * allKeys(obj) // -> ['zero', 'one']
         */

        /* typescript
         * export declare namespace allKeys {
         *     interface IOptions {
         *         prototype?: boolean;
         *         unenumerable?: boolean;
         *     }
         * }
         * export declare function allKeys(
         *     obj: any,
         *     options: { symbol: true } & allKeys.IOptions
         * ): Array<string | Symbol>;
         * export declare function allKeys(
         *     obj: any,
         *     options?: ({ symbol: false } & allKeys.IOptions) | allKeys.IOptions
         * ): string[];
         */

        /* dependencies
         * keys getProto unique 
         */

        var getOwnPropertyNames = Object.getOwnPropertyNames;
        var getOwnPropertySymbols = Object.getOwnPropertySymbols;

        exports = function(obj) {
            var _ref =
                    arguments.length > 1 && arguments[1] !== undefined
                        ? arguments[1]
                        : {},
                _ref$prototype = _ref.prototype,
                prototype = _ref$prototype === void 0 ? true : _ref$prototype,
                _ref$unenumerable = _ref.unenumerable,
                unenumerable = _ref$unenumerable === void 0 ? false : _ref$unenumerable,
                _ref$symbol = _ref.symbol,
                symbol = _ref$symbol === void 0 ? false : _ref$symbol;

            var ret = [];

            if ((unenumerable || symbol) && getOwnPropertyNames) {
                var getKeys = keys;
                if (unenumerable && getOwnPropertyNames) getKeys = getOwnPropertyNames;

                do {
                    ret = ret.concat(getKeys(obj));

                    if (symbol && getOwnPropertySymbols) {
                        ret = ret.concat(getOwnPropertySymbols(obj));
                    }
                } while (
                    prototype &&
                    (obj = getProto(obj)) &&
                    obj !== Object.prototype
                );

                ret = unique(ret);
            } else {
                if (prototype) {
                    for (var key in obj) {
                        ret.push(key);
                    }
                } else {
                    ret = keys(obj);
                }
            }

            return ret;
        };

        return exports;
    })({});

    /* ------------------------------ extend ------------------------------ */

    var extend = _.extend = (function (exports) {
        /* Copy all of the properties in the source objects over to the destination object.
         *
         * |Name       |Type  |Desc              |
         * |-----------|------|------------------|
         * |destination|object|Destination object|
         * |...sources |object|Sources objects   |
         * |return     |object|Destination object|
         */

        /* example
         * extend({name: 'RedHood'}, {age: 24}); // -> {name: 'RedHood', age: 24}
         */

        /* typescript
         * export declare function extend(destination: any, ...sources: any[]): any;
         */

        /* dependencies
         * createAssigner allKeys 
         */

        exports = createAssigner(allKeys);

        return exports;
    })({});

    /* ------------------------------ clone ------------------------------ */

    var clone = _.clone = (function (exports) {
        /* Create a shallow-copied clone of the provided plain object.
         *
         * Any nested objects or arrays will be copied by reference, not duplicated.
         *
         * |Name  |Type|Desc          |
         * |------|----|--------------|
         * |val   |*   |Value to clone|
         * |return|*   |Cloned value  |
         */

        /* example
         * clone({name: 'eustia'}); // -> {name: 'eustia'}
         */

        /* typescript
         * export declare function clone<T>(val: T): T;
         */

        /* dependencies
         * isObj isArr extend 
         */

        exports = function(obj) {
            if (!isObj(obj)) return obj;
            return isArr(obj) ? obj.slice() : extend({}, obj);
        };

        return exports;
    })({});

    /* ------------------------------ map ------------------------------ */

    var map = _.map = (function (exports) {
        /* Create an array of values by running each element in collection through iteratee.
         *
         * |Name     |Type        |Desc                          |
         * |---------|------------|------------------------------|
         * |object   |array object|Collection to iterate over    |
         * |iterator |function    |Function invoked per iteration|
         * |[context]|*           |Function context              |
         * |return   |array       |New mapped array              |
         */

        /* example
         * map([4, 8], function (n) { return n * n; }); // -> [16, 64]
         */

        /* typescript
         * export declare function map<T, TResult>(
         *     list: types.List<T>,
         *     iterator: types.ListIterator<T, TResult>,
         *     context?: any
         * ): TResult[];
         * export declare function map<T, TResult>(
         *     object: types.Dictionary<T>,
         *     iterator: types.ObjectIterator<T, TResult>,
         *     context?: any
         * ): TResult[];
         */

        /* eslint-disable no-unused-vars */

        /* dependencies
         * safeCb keys isArrLike types 
         */

        exports = function(obj, iterator, ctx) {
            iterator = safeCb(iterator, ctx);

            var _keys = !isArrLike(obj) && keys(obj);

            var len = (_keys || obj).length;
            var results = Array(len);

            for (var i = 0; i < len; i++) {
                var curKey = _keys ? _keys[i] : i;
                results[i] = iterator(obj[curKey], curKey, obj);
            }

            return results;
        };

        return exports;
    })({});

    /* ------------------------------ decodeUriComponent ------------------------------ */

    _.decodeUriComponent = (function (exports) {
        /* Better decodeURIComponent that does not throw if input is invalid.
         *
         * |Name  |Type  |Desc            |
         * |------|------|----------------|
         * |str   |string|String to decode|
         * |return|string|Decoded string  |
         */

        /* example
         * decodeUriComponent('%%25%'); // -> '%%%'
         * decodeUriComponent('%E0%A4%A'); // -> '\xE0\xA4%A'
         */

        /* typescript
         * export declare function decodeUriComponent(str: string): string;
         */

        /* dependencies
         * each ucs2 map utf8 
         */

        exports = function(str) {
            try {
                return decodeURIComponent(str);
            } catch (e) {
                var matches = str.match(regMatcher);

                if (!matches) {
                    return str;
                }

                each(matches, function(match) {
                    str = str.replace(match, decode(match));
                });
                return str;
            }
        };

        function decode(str) {
            str = str.split('%').slice(1);
            var bytes = map(str, hexToInt);
            str = ucs2.encode(bytes);
            str = utf8.decode(str, true);
            return str;
        }

        function hexToInt(numStr) {
            return +('0x' + numStr);
        }

        var regMatcher = /(%[a-f0-9]{2})+/gi;

        return exports;
    })({});

    /* ------------------------------ toArr ------------------------------ */

    var toArr = _.toArr = (function (exports) {
        /* Convert value to an array.
         *
         * |Name  |Type |Desc            |
         * |------|-----|----------------|
         * |val   |*    |Value to convert|
         * |return|array|Converted array |
         */

        /* example
         * toArr({a: 1, b: 2}); // -> [{a: 1, b: 2}]
         * toArr('abc'); // -> ['abc']
         * toArr(1); // -> [1]
         * toArr(null); // -> []
         */

        /* typescript
         * export declare function toArr(val: any): any[];
         */

        /* dependencies
         * isArrLike map isArr isStr 
         */

        exports = function(val) {
            if (!val) return [];
            if (isArr(val)) return val;
            if (isArrLike(val) && !isStr(val)) return map(val);
            return [val];
        };

        return exports;
    })({});

    /* ------------------------------ Class ------------------------------ */

    var Class = _.Class = (function (exports) {
        /* Create JavaScript class.
         *
         * |Name     |Type    |Desc                             |
         * |---------|--------|---------------------------------|
         * |methods  |object  |Public methods                   |
         * |[statics]|object  |Static methods                   |
         * |return   |function|Function used to create instances|
         */

        /* example
         * const People = Class({
         *     initialize: function People(name, age) {
         *         this.name = name;
         *         this.age = age;
         *     },
         *     introduce: function () {
         *         return 'I am ' + this.name + ', ' + this.age + ' years old.';
         *     }
         * });
         *
         * const Student = People.extend({
         *     initialize: function Student(name, age, school) {
         *         this.callSuper(People, 'initialize', arguments);
         *
         *         this.school = school;
         *     },
         *     introduce: function () {
         *         return this.callSuper(People, 'introduce') + '\n I study at ' + this.school + '.';
         *     }
         * }, {
         *     is: function (obj) {
         *         return obj instanceof Student;
         *     }
         * });
         *
         * const a = new Student('allen', 17, 'Hogwarts');
         * a.introduce(); // -> 'I am allen, 17 years old. \n I study at Hogwarts.'
         * Student.is(a); // -> true
         */

        /* typescript
         * export declare namespace Class {
         *     class Base {
         *         toString(): string;
         *     }
         *     class IConstructor extends Base {
         *         constructor(...args: any[]);
         *         static extend(methods: any, statics: any): IConstructor;
         *         static inherits(Class: Function): void;
         *         static methods(methods: any): IConstructor;
         *         static statics(statics: any): IConstructor;
         *         [method: string]: any;
         *     }
         * }
         * export declare function Class(methods: any, statics?: any): Class.IConstructor;
         */

        /* dependencies
         * extend toArr inherits safeGet isMiniProgram 
         */

        exports = function(methods, statics) {
            return Base.extend(methods, statics);
        };

        function makeClass(parent, methods, statics) {
            statics = statics || {};
            var className =
                methods.className || safeGet(methods, 'initialize.name') || '';
            delete methods.className;
            var ctor;

            if (isMiniProgram) {
                ctor = function() {
                    var args = toArr(arguments);
                    return this.initialize
                        ? this.initialize.apply(this, args) || this
                        : this;
                };
            } else {
                ctor = new Function(
                    'toArr',
                    'return function ' +
                        className +
                        '()' +
                        '{' +
                        'var args = toArr(arguments);' +
                        'return this.initialize ? this.initialize.apply(this, args) || this : this;' +
                        '};'
                )(toArr);
            }

            inherits(ctor, parent);
            ctor.prototype.constructor = ctor;

            ctor.extend = function(methods, statics) {
                return makeClass(ctor, methods, statics);
            };

            ctor.inherits = function(Class) {
                inherits(ctor, Class);
            };

            ctor.methods = function(methods) {
                extend(ctor.prototype, methods);
                return ctor;
            };

            ctor.statics = function(statics) {
                extend(ctor, statics);
                return ctor;
            };

            ctor.methods(methods).statics(statics);
            return ctor;
        }

        var Base = (exports.Base = makeClass(Object, {
            className: 'Base',
            callSuper: function(parent, name, args) {
                var superMethod = parent.prototype[name];
                return superMethod.apply(this, args);
            },
            toString: function() {
                return this.constructor.name;
            }
        }));

        return exports;
    })({});

    /* ------------------------------ Enum ------------------------------ */

    var Enum = _.Enum = (function (exports) {
        /* Enum type implementation.
         *
         * ### constructor
         *
         * |Name|Type |Desc            |
         * |----|-----|----------------|
         * |arr |array|Array of strings|
         *
         * |Name|Type  |Desc                  |
         * |----|------|----------------------|
         * |obj |object|Pairs of key and value|
         */

        /* example
         * const importance = new Enum([
         *     'NONE', 'TRIVIAL', 'REGULAR', 'IMPORTANT', 'CRITICAL'
         * ]);
         * const val = 1;
         * if (val === importance.CRITICAL) {
         *     // Do something.
         * }
         */

        /* typescript
         * export declare class Enum {
         *     size: number;
         *     constructor(map: string[] | { [member: string]: any });
         *     [key: string]: any;
         * }
         */

        /* dependencies
         * Class freeze isArr each keys 
         */

        exports = Class({
            initialize: function Enum(map) {
                if (isArr(map)) {
                    this.size = map.length;
                    each(
                        map,
                        function(member, val) {
                            this[member] = val;
                        },
                        this
                    );
                } else {
                    this.size = keys(map).length;
                    each(
                        map,
                        function(val, member) {
                            this[member] = val;
                        },
                        this
                    );
                }

                freeze(this);
            }
        });

        return exports;
    })({});

    /* ------------------------------ mapObj ------------------------------ */

    var mapObj = _.mapObj = (function (exports) {
        /* Map for objects.
         *
         * |Name     |Type    |Desc                          |
         * |---------|--------|------------------------------|
         * |object   |object  |Object to iterate over        |
         * |iterator |function|Function invoked per iteration|
         * |[context]|*       |Function context              |
         * |return   |object  |New mapped object             |
         */

        /* example
         * mapObj({a: 1, b: 2}, function (val, key) { return val + 1 }); // -> {a: 2, b: 3}
         */

        /* typescript
         * export declare function mapObj<T, TResult>(
         *     object: types.Dictionary<T>,
         *     iterator: types.ObjectIterator<T, TResult>,
         *     context?: any
         * ): types.Dictionary<TResult>;
         */

        /* eslint-disable no-unused-vars */

        /* dependencies
         * safeCb keys types 
         */

        exports = function(obj, iterator, ctx) {
            iterator = safeCb(iterator, ctx);

            var _keys = keys(obj);

            var len = _keys.length;
            var ret = {};

            for (var i = 0; i < len; i++) {
                var curKey = _keys[i];
                ret[curKey] = iterator(obj[curKey], curKey, obj);
            }

            return ret;
        };

        return exports;
    })({});

    /* ------------------------------ cloneDeep ------------------------------ */

    _.cloneDeep = (function (exports) {
        /* Recursively clone value.
         *
         * |Name  |Type|Desc             |
         * |------|----|-----------------|
         * |val   |*   |Value to clone   |
         * |return|*   |Deep cloned Value|
         */

        /* example
         * const obj = [{a: 1}, {a: 2}];
         * const obj2 = cloneDeep(obj);
         * console.log(obj[0] === obj2[1]); // -> false
         */

        /* typescript
         * export declare function cloneDeep<T>(val: T): T;
         */

        /* dependencies
         * isObj isFn isArr mapObj 
         */

        exports = function(obj) {
            if (isArr(obj)) {
                return obj.map(function(val) {
                    return exports(val);
                });
            }

            if (isObj(obj) && !isFn(obj)) {
                return mapObj(obj, function(val) {
                    return exports(val);
                });
            }

            return obj;
        };

        return exports;
    })({});

    /* ------------------------------ some ------------------------------ */

    var some = _.some = (function (exports) {
        /* Check if predicate return truthy for any element.
         *
         * |Name     |Type        |Desc                                          |
         * |---------|------------|----------------------------------------------|
         * |obj      |array object|Collection to iterate over                    |
         * |predicate|function    |Function to invoked per iteration             |
         * |ctx      |*           |Predicate context                             |
         * |return   |boolean     |True if any element passes the predicate check|
         */

        /* example
         * some([2, 5], function (val) {
         *     return val % 2 === 0;
         * }); // -> true
         */

        /* typescript
         * export declare function some<T>(
         *     list: types.List<T>,
         *     iterator?: types.ListIterator<T, boolean>,
         *     context?: any
         * ): boolean;
         * export declare function some<T>(
         *     object: types.Dictionary<T>,
         *     iterator?: types.ObjectIterator<T, boolean>,
         *     context?: any
         * ): boolean;
         */

        /* eslint-disable no-unused-vars */

        /* dependencies
         * safeCb isArrLike keys types 
         */

        exports = function(obj, predicate, ctx) {
            predicate = safeCb(predicate, ctx);

            var _keys = !isArrLike(obj) && keys(obj);

            var len = (_keys || obj).length;

            for (var i = 0; i < len; i++) {
                var key = _keys ? _keys[i] : i;
                if (predicate(obj[key], key, obj)) return true;
            }

            return false;
        };

        return exports;
    })({});

    /* ------------------------------ memoize ------------------------------ */

    _.memoize = (function (exports) {
        /* Memoize a given function by caching the computed result.
         *
         * |Name    |Type    |Desc                                |
         * |--------|--------|------------------------------------|
         * |fn      |function|Function to have its output memoized|
         * |[hashFn]|function|Function to create cache key        |
         * |return  |function|New memoized function               |
         */

        /* example
         * const fibonacci = memoize(function(n) {
         *     return n < 2 ? n : fibonacci(n - 1) + fibonacci(n - 2);
         * });
         */

        /* typescript
         * export declare function memoize(fn: Function, hashFn?: Function): Function;
         */

        /* dependencies
         * has 
         */

        exports = function(fn, hashFn) {
            var memoize = function(key) {
                var cache = memoize.cache;
                var address = '' + (hashFn ? hashFn.apply(this, arguments) : key);
                if (!has(cache, address)) cache[address] = fn.apply(this, arguments);
                return cache[address];
            };

            memoize.cache = {};
            return memoize;
        };

        return exports;
    })({});

    /* ------------------------------ toNum ------------------------------ */

    var toNum = _.toNum = (function (exports) {
        /* Convert value to a number.
         *
         * |Name  |Type  |Desc            |
         * |------|------|----------------|
         * |val   |*     |Value to process|
         * |return|number|Result number   |
         */

        /* example
         * toNum('5'); // -> 5
         */

        /* typescript
         * export declare function toNum(val: any): number;
         */

        /* dependencies
         * isNum isObj isFn isStr 
         */

        exports = function(val) {
            if (isNum(val)) return val;

            if (isObj(val)) {
                var temp = isFn(val.valueOf) ? val.valueOf() : val;
                val = isObj(temp) ? temp + '' : temp;
            }

            if (!isStr(val)) return val === 0 ? val : +val;
            return +val;
        };

        return exports;
    })({});

    /* ------------------------------ ms ------------------------------ */

    _.ms = (function (exports) {
        /* Convert time string formats to milliseconds.
         *
         * Turn time string into milliseconds.
         *
         * |Name  |Type  |Desc         |
         * |------|------|-------------|
         * |str   |string|String format|
         * |return|number|Milliseconds |
         *
         * Turn milliseconds into time string.
         *
         * |Name  |Type  |Desc         |
         * |------|------|-------------|
         * |num   |number|Milliseconds |
         * |return|string|String format|
         */

        /* example
         * ms('1s'); // -> 1000
         * ms('1m'); // -> 60000
         * ms('1.5h'); // -> 5400000
         * ms('1d'); // -> 86400000
         * ms('1y'); // -> 31557600000
         * ms('1000'); // -> 1000
         * ms(1500); // -> '1.5s'
         * ms(60000); // -> '1m'
         */

        /* typescript
         * export declare function ms(str: string): number;
         * export declare function ms(num: number): string;
         */

        /* dependencies
         * toNum isStr 
         */

        exports = function(str) {
            if (isStr(str)) {
                var match = str.match(regStrTime);
                if (!match) return 0;
                return toNum(match[1]) * factor[match[2] || 'ms'];
            } else {
                var num = str;
                var suffix = 'ms';

                for (var i = 0, len = suffixList.length; i < len; i++) {
                    if (num >= factor[suffixList[i]]) {
                        suffix = suffixList[i];
                        break;
                    }
                }

                return +(num / factor[suffix]).toFixed(2) + suffix;
            }
        };

        var factor = {
            ms: 1,
            s: 1000
        };
        factor.m = factor.s * 60;
        factor.h = factor.m * 60;
        factor.d = factor.h * 24;
        factor.y = factor.d * 365.25;
        var suffixList = ['y', 'd', 'h', 'm', 's'];
        var regStrTime = /^((?:\d+)?\.?\d+) *(s|m|h|d|y)?$/;

        return exports;
    })({});

    /* ------------------------------ toInt ------------------------------ */

    var toInt = _.toInt = (function (exports) {
        /* Convert value to an integer.
         *
         * |Name  |Type  |Desc             |
         * |------|------|-----------------|
         * |val   |*     |Value to convert |
         * |return|number|Converted integer|
         */

        /* example
         * toInt(1.1); // -> 1
         * toInt(undefined); // -> 0
         */

        /* typescript
         * export declare function toInt(val: any): number;
         */

        /* dependencies
         * toNum 
         */

        exports = function(val) {
            if (!val) return val === 0 ? val : 0;
            val = toNum(val);
            return val - (val % 1);
        };

        return exports;
    })({});

    /* ------------------------------ cmpVersion ------------------------------ */

    _.cmpVersion = (function (exports) {
        /* Compare version strings.
         *
         * |Name  |Type  |Desc              |
         * |------|------|------------------|
         * |v1    |string|Version to compare|
         * |v2    |string|Version to compare|
         * |return|number|Comparison result |
         */

        /* example
         * cmpVersion('1.1.8', '1.0.4'); // -> 1
         * cmpVersion('1.0.2', '1.0.2'); // -> 0
         * cmpVersion('2.0', '2.0.0'); // -> 0
         * cmpVersion('3.0.1', '3.0.0.2'); // -> 1
         * cmpVersion('1.1.1', '1.2.3'); // -> -1
         */

        /* typescript
         * export declare function cmpVersion(v1: string, v2: string): number;
         */

        /* dependencies
         * toInt max 
         */

        exports = function(v1, v2) {
            v1 = v1.split('.');
            v2 = v2.split('.');
            var len = max(v1.length, v2.length);

            for (var i = 0; i < len; i++) {
                var num1 = toInt(v1[i]);
                var num2 = toInt(v2[i]);
                if (num1 > num2) return 1;
                if (num1 < num2) return -1;
            }

            return 0;
        };

        return exports;
    })({});

    /* ------------------------------ detectBrowser ------------------------------ */

    _.detectBrowser = (function (exports) {
        /* Detect browser info using ua.
         *
         * |Name                  |Type  |Desc                              |
         * |----------------------|------|----------------------------------|
         * |ua=navigator.userAgent|string|Browser userAgent                 |
         * |return                |object|Object containing name and version|
         *
         * Browsers supported: ie, chrome, edge, firefox, opera, safari, ios(mobile safari), android(android browser)
         */

        /* example
         * const browser = detectBrowser();
         * if (browser.name === 'ie' && browser.version < 9) {
         *     // Do something about old IE...
         * }
         */

        /* typescript
         * export declare namespace detectBrowser {
         *     interface IBrowser {
         *         name: string;
         *         version: number;
         *     }
         * }
         * export declare function detectBrowser(ua?: string): detectBrowser.IBrowser;
         */

        /* dependencies
         * isBrowser toInt keys 
         */

        exports = function(ua) {
            ua = ua || (isBrowser ? navigator.userAgent : '');
            ua = ua.toLowerCase();
            var ieVer = getVer(ua, 'msie ');
            if (ieVer)
                return {
                    version: ieVer,
                    name: 'ie'
                };
            if (regIe11.test(ua))
                return {
                    version: 11,
                    name: 'ie'
                };

            for (var i = 0, len = browsers.length; i < len; i++) {
                var name = browsers[i];
                var match = ua.match(regBrowsers[name]);
                if (match == null) continue;
                var version = toInt(match[1].split('.')[0]);
                if (name === 'opera') version = getVer(ua, 'version/') || version;
                return {
                    name: name,
                    version: version
                };
            }

            return {
                name: 'unknown',
                version: -1
            };
        };

        var regBrowsers = {
            edge: /edge\/([0-9._]+)/,
            firefox: /firefox\/([0-9.]+)(?:\s|$)/,
            opera: /opera\/([0-9.]+)(?:\s|$)/,
            android: /android\s([0-9.]+)/,
            ios: /version\/([0-9._]+).*mobile.*safari.*/,
            safari: /version\/([0-9._]+).*safari/,
            chrome: /(?!chrom.*opr)chrom(?:e|ium)\/([0-9.]+)(:?\s|$)/
        };
        var regIe11 = /trident\/7\./;
        var browsers = keys(regBrowsers);

        function getVer(ua, mark) {
            var idx = ua.indexOf(mark);
            if (idx > -1)
                return toInt(ua.substring(idx + mark.length, ua.indexOf('.', idx)));
        }

        return exports;
    })({});

    /* ------------------------------ now ------------------------------ */

    var now = _.now = (function (exports) {
        /* Gets the number of milliseconds that have elapsed since the Unix epoch.
         */

        /* example
         * now(); // -> 1468826678701
         */

        /* typescript
         * export declare function now(): number;
         */
        exports =
            Date.now ||
            function() {
                return new Date().getTime();
            };

        return exports;
    })({});

    /* ------------------------------ partial ------------------------------ */

    var partial = _.partial = (function (exports) {
        /* Partially apply a function by filling in given arguments.
         *
         * |Name       |Type    |Desc                                    |
         * |-----------|--------|----------------------------------------|
         * |fn         |function|Function to partially apply arguments to|
         * |...partials|*       |Arguments to be partially applied       |
         * |return     |function|New partially applied function          |
         */

        /* example
         * const sub5 = partial(function (a, b) { return b - a }, 5);
         * sub5(20); // -> 15
         */

        /* typescript
         * export declare function partial(fn: Function, ...partials: any[]): Function;
         */

        /* dependencies
         * restArgs toArr 
         */

        exports = restArgs(function(fn, partials) {
            return function() {
                var args = [];
                args = args.concat(partials);
                args = args.concat(toArr(arguments));
                return fn.apply(this, args);
            };
        });

        return exports;
    })({});

    /* ------------------------------ once ------------------------------ */

    var once = _.once = (function (exports) {
        /* Create a function that invokes once.
         *
         * |Name  |Type    |Desc                   |
         * |------|--------|-----------------------|
         * |fn    |function|Function to restrict   |
         * |return|function|New restricted function|
         */

        /* example
         * function init() {};
         * const initOnce = once(init);
         * initOnce();
         * initOnce(); // -> init is invoked once
         */

        /* typescript
         * export declare function once(fn: Function): Function;
         */

        /* dependencies
         * partial before 
         */

        exports = partial(before, 2);

        return exports;
    })({});

    /* ------------------------------ Emitter ------------------------------ */

    var Emitter = _.Emitter = (function (exports) {
        /* Event emitter class which provides observer pattern.
         *
         * ### on
         *
         * Bind event.
         *
         * ### off
         *
         * Unbind event.
         *
         * ### once
         *
         * Bind event that trigger once.
         *
         * |Name    |Type    |Desc          |
         * |--------|--------|--------------|
         * |event   |string  |Event name    |
         * |listener|function|Event listener|
         *
         * ### emit
         *
         * Emit event.
         *
         * |Name   |Type  |Desc                        |
         * |-------|------|----------------------------|
         * |event  |string|Event name                  |
         * |...args|*     |Arguments passed to listener|
         *
         * ### mixin
         *
         * [static] Mixin object class methods.
         *
         * |Name|Type  |Desc           |
         * |----|------|---------------|
         * |obj |object|Object to mixin|
         */

        /* example
         * const event = new Emitter();
         * event.on('test', function () { console.log('test') });
         * event.emit('test'); // Logs out 'test'.
         * Emitter.mixin({});
         */

        /* typescript
         * export declare namespace Emitter {
         *     function mixin(obj: any): any;
         * }
         * export declare class Emitter {
         *     on(event: string, listener: Function): Emitter;
         *     off(event: string, listener: Function): Emitter;
         *     once(event: string, listener: Function): Emitter;
         *     emit(event: string): Emitter;
         * }
         */

        /* dependencies
         * Class has each slice once 
         */

        exports = Class(
            {
                initialize: function Emitter() {
                    this._events = this._events || {};
                },
                on: function(event, listener) {
                    this._events[event] = this._events[event] || [];

                    this._events[event].push(listener);

                    return this;
                },
                off: function(event, listener) {
                    if (!has(this._events, event)) return;

                    this._events[event].splice(
                        this._events[event].indexOf(listener),
                        1
                    );

                    return this;
                },
                once: function(event, listener) {
                    this.on(event, once(listener));
                    return this;
                },
                emit: function(event) {
                    if (!has(this._events, event)) return;
                    var args = slice(arguments, 1);
                    each(
                        this._events[event],
                        function(val) {
                            val.apply(this, args);
                        },
                        this
                    );
                    return this;
                }
            },
            {
                mixin: function(obj) {
                    each(['on', 'off', 'once', 'emit'], function(val) {
                        obj[val] = exports.prototype[val];
                    });
                    obj._events = obj._events || {};
                }
            }
        );

        return exports;
    })({});

    /* ------------------------------ Logger ------------------------------ */

    _.Logger = (function (exports) {
        /* Simple logger with level filter.
         *
         * ### constructor
         *
         * |Name       |Type  |Desc        |
         * |-----------|------|------------|
         * |name       |string|Logger name |
         * |level=DEBUG|number|Logger level|
         *
         * ### setLevel
         *
         * Set level.
         *
         * |Name |Type         |Desc        |
         * |-----|-------------|------------|
         * |level|number string|Logger level|
         *
         * ### getLevel
         *
         * Get current level.
         *
         * ### trace, debug, info, warn, error
         *
         * Logging methods.
         *
         * ### Log Levels
         *
         * TRACE, DEBUG, INFO, WARN, ERROR and SILENT.
         */

        /* example
         * const logger = new Logger('licia', Logger.level.ERROR);
         * logger.trace('test');
         *
         * // Format output.
         * logger.formatter = function (type, argList) {
         *     argList.push(new Date().getTime());
         *
         *     return argList;
         * };
         *
         * logger.on('all', function (type, argList) {
         *     // It's not affected by log level.
         * });
         *
         * logger.on('debug', function (argList) {
         *     // Affected by log level.
         * });
         */

        /* typescript
         * export declare class Logger extends Emitter {
         *     name: string;
         *     formatter(type: string, argList: any[]): any[];
         *     constructor(name: string, level?: string | number);
         *     setLevel(level: string | number): Logger;
         *     getLevel(): number;
         *     trace(...args: any[]): Logger;
         *     debug(...args: any[]): Logger;
         *     info(...args: any[]): Logger;
         *     warn(...args: any[]): Logger;
         *     error(...args: any[]): Logger;
         *     static level: Enum;
         * }
         */

        /* dependencies
         * Emitter Enum toArr isUndef clone isStr isNum 
         */

        exports = Emitter.extend(
            {
                initialize: function Logger(name, level) {
                    this.name = name;
                    this.setLevel(isUndef(level) ? exports.level.DEBUG : level);
                    this.callSuper(Emitter, 'initialize', arguments);
                },
                setLevel: function(level) {
                    if (isStr(level)) {
                        level = exports.level[level.toUpperCase()];
                        if (level) this._level = level;
                        return this;
                    }

                    if (isNum(level)) this._level = level;
                    return this;
                },
                getLevel: function() {
                    return this._level;
                },
                formatter: function(type, argList) {
                    return argList;
                },
                trace: function() {
                    return this._log('trace', arguments);
                },
                debug: function() {
                    return this._log('debug', arguments);
                },
                info: function() {
                    return this._log('info', arguments);
                },
                warn: function() {
                    return this._log('warn', arguments);
                },
                error: function() {
                    return this._log('error', arguments);
                },
                _log: function(type, argList) {
                    argList = toArr(argList);
                    if (argList.length === 0) return this;
                    this.emit('all', type, clone(argList));
                    if (exports.level[type.toUpperCase()] < this._level) return this;
                    this.emit(type, clone(argList));
                    /* eslint-disable no-console */

                    var consoleMethod = type === 'debug' ? console.log : console[type];
                    consoleMethod.apply(console, this.formatter(type, argList));
                    return this;
                }
            },
            {
                level: new Enum({
                    TRACE: 0,
                    DEBUG: 1,
                    INFO: 2,
                    WARN: 3,
                    ERROR: 4,
                    SILENT: 5
                })
            }
        );

        return exports;
    })({});

    /* ------------------------------ State ------------------------------ */

    var State = _.State = (function (exports) {
        /* Simple state machine.
         *
         * Extend from Emitter.
         *
         * ### constructor
         *
         * |Name   |Type  |Desc                  |
         * |-------|------|----------------------|
         * |initial|string|Initial state         |
         * |events |object|Events to change state|
         *
         * ### is
         *
         * Check current state.
         *
         * |Name  |Type   |Desc                                    |
         * |------|-------|----------------------------------------|
         * |value |string |State to check                          |
         * |return|boolean|True if current state equals given value|
         */

        /* example
         * const state = new State('empty', {
         *     load: {from: 'empty', to: 'pause'},
         *     play: {from: 'pause', to: 'play'},
         *     pause: {from: ['play', 'empty'], to: 'pause'},
         *     unload: {from: ['play', 'pause'], to: 'empty'}
         * });
         *
         * state.is('empty'); // -> true
         * state.load();
         * state.is('pause'); // -> true
         * state.on('play', function (src) {
         *     console.log(src); // -> 'eustia'
         * });
         * state.on('error', function (err, event) {
         *     // Error handler
         * });
         * state.play('eustia');
         */

        /* typescript
         * export declare class State extends Emitter {
         *     constructor(initial: string, events: any);
         *     is(state: string): boolean;
         *     [event: string]: any;
         * }
         */

        /* dependencies
         * Emitter each some toArr 
         */

        exports = Emitter.extend({
            className: 'State',
            initialize: function(initial, events) {
                this.callSuper(Emitter, 'initialize');
                this.current = initial;
                var self = this;
                each(events, function(event, key) {
                    self[key] = buildEvent(key, event);
                });
            },
            is: function(state) {
                return this.current === state;
            }
        });

        function buildEvent(name, event) {
            var from = toArr(event.from);
            var to = event.to;
            return function() {
                var args = toArr(arguments);
                args.unshift(name);
                var hasEvent = some(
                    from,
                    function(val) {
                        return this.current === val;
                    },
                    this
                );

                if (hasEvent) {
                    this.current = to;
                    this.emit.apply(this, args);
                } else {
                    this.emit(
                        'error',
                        new Error(this.current + ' => ' + to + ' error'),
                        name
                    );
                }
            };
        }

        return exports;
    })({});

    /* ------------------------------ Promise ------------------------------ */

    var Promise = _.Promise = (function (exports) {
        /* Lightweight Promise implementation.
         *
         * [Promises spec](https://github.com/promises-aplus/promises-spec)
         */

        /* example
         * function get(url) {
         *     return new Promise(function (resolve, reject) {
         *         const req = new XMLHttpRequest();
         *         req.open('GET', url);
         *         req.onload = function () {
         *             req.status == 200 ? resolve(req.response) : reject(Error(req.statusText));
         *         };
         *         req.onerror = function () { reject(Error('Network Error')) };
         *         req.send();
         *     });
         * }
         *
         * get('test.json').then(function (result) {
         *     // Do something...
         * });
         */

        /* typescript
         */

        /* dependencies
         * Class isObj isFn State bind nextTick noop toArr 
         */

        var Promise = (exports = Class(
            {
                initialize: function Promise(fn) {
                    if (!isObj(this))
                        throw new TypeError('Promises must be constructed via new');
                    if (!isFn(fn)) throw new TypeError(fn + ' is not a function');
                    var self = this;
                    this._state = new State('pending', {
                        fulfill: {
                            from: 'pending',
                            to: 'fulfilled'
                        },
                        reject: {
                            from: 'pending',
                            to: 'rejected'
                        },
                        adopt: {
                            from: 'pending',
                            to: 'adopted'
                        }
                    })
                        .on('fulfill', assignVal)
                        .on('reject', assignVal)
                        .on('adopt', assignVal);

                    function assignVal(val) {
                        self._value = val;
                    }

                    this._handled = false;
                    this._value = undefined;
                    this._deferreds = [];
                    doResolve(fn, this);
                },
                catch: function(onRejected) {
                    return this.then(null, onRejected);
                },
                then: function(onFulfilled, onRejected) {
                    var promise = new Promise(noop);
                    handle(this, new Handler(onFulfilled, onRejected, promise));
                    return promise;
                }
            },
            {
                all: function(arr) {
                    var args = toArr(arr);
                    return new Promise(function(resolve, reject) {
                        if (args.length === 0) return resolve([]);
                        var remaining = args.length;

                        function res(i, val) {
                            try {
                                if (val && (isObj(val) || isFn(val))) {
                                    var then = val.then;

                                    if (isFn(then)) {
                                        then.call(
                                            val,
                                            function(val) {
                                                res(i, val);
                                            },
                                            reject
                                        );
                                        return;
                                    }
                                }

                                args[i] = val;
                                if (--remaining === 0) resolve(args);
                            } catch (e) {
                                reject(e);
                            }
                        }

                        for (var i = 0; i < args.length; i++) {
                            res(i, args[i]);
                        }
                    });
                },
                resolve: function(val) {
                    if (val && isObj(val) && val.constructor === Promise) return val;
                    return new Promise(function(resolve) {
                        resolve(val);
                    });
                },
                reject: function(val) {
                    return new Promise(function(resolve, reject) {
                        reject(val);
                    });
                },
                race: function(values) {
                    return new Promise(function(resolve, reject) {
                        for (var i = 0, len = values.length; i < len; i++) {
                            values[i].then(resolve, reject);
                        }
                    });
                }
            }
        ));
        var Handler = Class({
            initialize: function Handler(onFulfilled, onRejected, promise) {
                this.onFulfilled = isFn(onFulfilled) ? onFulfilled : null;
                this.onRejected = isFn(onRejected) ? onRejected : null;
                this.promise = promise;
            }
        });

        function reject(self, err) {
            self._state.reject(err);

            finale(self);
        }

        function resolve(self, val) {
            try {
                if (val === self)
                    throw new TypeError('A promise cannot be resolved with itself');

                if (val && (isObj(val) || isFn(val))) {
                    var then = val.then;

                    if (val instanceof Promise) {
                        self._state.adopt(val);

                        return finale(self);
                    }

                    if (isFn(then)) return doResolve(bind(then, val), self);
                }

                self._state.fulfill(val);

                finale(self);
            } catch (e) {
                reject(self, e);
            }
        }

        function finale(self) {
            for (var i = 0, len = self._deferreds.length; i < len; i++) {
                handle(self, self._deferreds[i]);
            }

            self._deferreds = null;
        }

        function handle(self, deferred) {
            while (self._state.is('adopted')) {
                self = self._value;
            }

            if (self._state.is('pending')) return self._deferreds.push(deferred);
            self._handled = true;
            nextTick(function() {
                var isFulfilled = self._state.is('fulfilled');

                var cb = isFulfilled ? deferred.onFulfilled : deferred.onRejected;
                if (cb === null)
                    return (isFulfilled ? resolve : reject)(
                        deferred.promise,
                        self._value
                    );
                var ret;

                try {
                    ret = cb(self._value);
                } catch (e) {
                    return reject(deferred.promise, e);
                }

                resolve(deferred.promise, ret);
            });
        }

        function doResolve(fn, self) {
            var done = false;

            try {
                fn(
                    function(val) {
                        if (done) return;
                        done = true;
                        resolve(self, val);
                    },
                    function(reason) {
                        if (done) return;
                        done = true;
                        reject(self, reason);
                    }
                );
            } catch (e) {
                if (done) return;
                done = true;
                reject(self, e);
            }
        }

        return exports;
    })({});

    /* ------------------------------ promisify ------------------------------ */

    _.promisify = (function (exports) {
        /* Convert callback based functions into Promises.
         *
         * |Name           |Type    |Desc                                  |
         * |---------------|--------|--------------------------------------|
         * |fn             |function|Callback based function               |
         * |multiArgs=false|boolean |If callback has multiple success value|
         * |return         |function|Result function                       |
         *
         * If multiArgs is set to true, the resulting promise will always fulfill with an array of the callback's success values.
         */

        /* example
         * const fs = require('fs');
         *
         * const readFile = promisify(fs.readFile);
         * readFile('test.js', 'utf-8').then(function (data) {
         *     // Do something with file content.
         * });
         */

        /* typescript
         * export declare function promisify(fn: Function, multiArgs?: boolean): Function;
         */

        /* dependencies
         * restArgs root Promise 
         */

        exports = function(fn, multiArgs) {
            return restArgs(function(args) {
                return new exports.Promise(function(resolve, reject) {
                    args.push(
                        restArgs(function callback(err, values) {
                            if (err) return reject(err);
                            if (!multiArgs) return resolve(values[0]);
                            resolve(values);
                        })
                    );
                    fn.apply(this, args);
                });
            });
        };

        exports.Promise = root.Promise || Promise;

        return exports;
    })({});

    /* ------------------------------ random ------------------------------ */

    _.random = (function (exports) {
        /* Produces a random number between min and max(inclusive).
         *
         * |Name          |Type   |Desc                  |
         * |--------------|-------|----------------------|
         * |min           |number |Minimum possible value|
         * |max           |number |Maximum possible value|
         * |floating=false|boolean|Float or not          |
         * |return        |number |Random number         |
         */

        /* example
         * random(1, 5); // -> an integer between 0 and 5
         * random(5); // -> an integer between 0 and 5
         * random(1.2, 5.2, true); /// -> a floating-point number between 1.2 and 5.2
         */

        /* typescript
         * export declare function random(min: number, max?: number, floating?: boolean): number;
         */
        exports = function(min, max, floating) {
            if (max == null) {
                max = min;
                min = 0;
            }

            var rand = Math.random();

            if (floating || min % 1 || max % 1) {
                return Math.min(
                    min +
                        rand *
                            (max - min + parseFloat('1e-' + ((rand + '').length - 1))),
                    max
                );
            }

            return min + Math.floor(rand * (max - min + 1));
        };

        return exports;
    })({});

    /* ------------------------------ rtrim ------------------------------ */

    var rtrim = _.rtrim = (function (exports) {
        /* Remove chars or white-spaces from end of string.
         *
         * |Name   |Type        |Desc              |
         * |-------|------------|------------------|
         * |str    |string      |String to trim    |
         * |[chars]|string array|Characters to trim|
         * |return |string      |Trimmed string    |
         */

        /* example
         * rtrim(' abc  '); // -> ' abc'
         * rtrim('_abc_', '_'); // -> '_abc'
         * rtrim('_abc_', ['c', '_']); // -> '_ab'
         */

        /* typescript
         * export declare function rtrim(str: string, chars?: string | string[]): string;
         */
        var regSpace = /\s+$/;

        exports = function(str, chars) {
            if (chars == null) return str.replace(regSpace, '');
            var end = str.length - 1;
            var charLen = chars.length;
            var found = true;
            var i;
            var c;

            while (found && end >= 0) {
                found = false;
                i = -1;
                c = str.charAt(end);

                while (++i < charLen) {
                    if (c === chars[i]) {
                        found = true;
                        end--;
                        break;
                    }
                }
            }

            return end >= 0 ? str.substring(0, end + 1) : '';
        };

        return exports;
    })({});

    /* ------------------------------ trim ------------------------------ */

    var trim = _.trim = (function (exports) {
        /* Remove chars or white-spaces from beginning end of string.
         *
         * |Name  |Type        |Desc              |
         * |------|------------|------------------|
         * |str   |string      |String to trim    |
         * |chars |string array|Characters to trim|
         * |return|string      |Trimmed string    |
         */

        /* example
         * trim(' abc  '); // -> 'abc'
         * trim('_abc_', '_'); // -> 'abc'
         * trim('_abc_', ['a', 'c', '_']); // -> 'b'
         */

        /* typescript
         * export declare function trim(str: string, chars?: string | string[]): string;
         */

        /* dependencies
         * ltrim rtrim 
         */

        var regSpace = /^\s+|\s+$/g;

        exports = function(str, chars) {
            if (chars == null) return str.replace(regSpace, '');
            return ltrim(rtrim(str, chars), chars);
        };

        return exports;
    })({});

    /* ------------------------------ extractUrls ------------------------------ */

    var extractUrls = _.extractUrls = (function (exports) {
        /* Extract urls from plain text.
         *
         * |Name  |Type  |Desc           |
         * |------|------|---------------|
         * |str   |string|Text to extract|
         * |return|array |Url list       |
         */

        /* example
         * const str = '[Official site: http://eustia.liriliri.io](http://eustia.liriliri.io)';
         * extractUrls(str); // -> ['http://eustia.liriliri.io']
         */

        /* typescript
         * export declare function extractUrls(str: string): string[];
         */

        /* dependencies
         * unique trim map toArr 
         */

        exports = function(str) {
            var urlList = toArr(str.match(regUrl));
            return unique(
                map(urlList, function(url) {
                    return trim(url);
                })
            );
        };

        var regUrl = /((https?)|(ftp)):\/\/[\w.]+[^ \f\n\r\t\v"\\<>[\]\u2100-\uFFFF(),]*/gi;

        return exports;
    })({});

    /* ------------------------------ linkify ------------------------------ */

    _.linkify = (function (exports) {
        /* Hyperlink urls in a string.
         *
         * |Name       |Type    |Desc                     |
         * |-----------|--------|-------------------------|
         * |str        |string  |String to hyperlink      |
         * |[hyperlink]|function|Function to hyperlink url|
         * |return     |string  |Result string            |
         */

        /* example
         * const str = 'Official site: http://eustia.liriliri.io'
         * linkify(str); // -> 'Official site: <a href="http://eustia.liriliri.io">http://eustia.liriliri.io</a>'
         * linkify(str, function (url) {
         *     return '<a href="' + url + '" target="_blank">' + url + '</a>';
         * });
         */

        /* typescript
         * export declare function linkify(str: string, hyperlink?: Function): string;
         */

        /* dependencies
         * extractUrls each escapeRegExp 
         */

        exports = function(str, hyperlink) {
            hyperlink = hyperlink || defHyperlink;
            var urlList = extractUrls(str);
            each(urlList, function(url) {
                str = str.replace(new RegExp(escapeRegExp(url), 'g'), hyperlink);
            });
            return str;
        };

        function defHyperlink(url) {
            return '<a href="' + url + '">' + url + '</a>';
        }

        return exports;
    })({});

    /* ------------------------------ query ------------------------------ */

    var query = _.query = (function (exports) {
        /* Parse and stringify url query strings.
         *
         * ### parse
         *
         * Parse a query string into an object.
         *
         * |Name  |Type  |Desc        |
         * |------|------|------------|
         * |str   |string|Query string|
         * |return|object|Query object|
         *
         * ### stringify
         *
         * Stringify an object into a query string.
         *
         * |Name  |Type  |Desc        |
         * |------|------|------------|
         * |obj   |object|Query object|
         * |return|string|Query string|
         */

        /* example
         * query.parse('foo=bar&eruda=true'); // -> {foo: 'bar', eruda: 'true'}
         * query.stringify({foo: 'bar', eruda: 'true'}); // -> 'foo=bar&eruda=true'
         * query.parse('name=eruda&name=eustia'); // -> {name: ['eruda', 'eustia']}
         */

        /* typescript
         * export declare const query: {
         *     parse(str: string): any;
         *     stringify(object: any): string;
         * };
         */

        /* dependencies
         * trim each isUndef isArr map isEmpty filter isObj 
         */

        exports = {
            parse: function(str) {
                var ret = {};
                str = trim(str).replace(regIllegalChars, '');
                each(str.split('&'), function(param) {
                    var parts = param.split('=');
                    var key = parts.shift(),
                        val = parts.length > 0 ? parts.join('=') : null;
                    key = decodeURIComponent(key);
                    val = decodeURIComponent(val);

                    if (isUndef(ret[key])) {
                        ret[key] = val;
                    } else if (isArr(ret[key])) {
                        ret[key].push(val);
                    } else {
                        ret[key] = [ret[key], val];
                    }
                });
                return ret;
            },
            stringify: function(obj, arrKey) {
                return filter(
                    map(obj, function(val, key) {
                        if (isObj(val) && isEmpty(val)) return '';
                        if (isArr(val)) return exports.stringify(val, key);
                        return (
                            (arrKey
                                ? encodeURIComponent(arrKey)
                                : encodeURIComponent(key)) +
                            '=' +
                            encodeURIComponent(val)
                        );
                    }),
                    function(str) {
                        return str.length > 0;
                    }
                ).join('&');
            }
        };
        var regIllegalChars = /^(\?|#|&)/g;

        return exports;
    })({});

    /* ------------------------------ Url ------------------------------ */

    var Url = _.Url = (function (exports) {
        /* Simple url manipulator.
         *
         * ### constructor
         *
         * |Name        |Type  |Desc      |
         * |------------|------|----------|
         * |url=location|string|Url string|
         *
         * ### setQuery
         *
         * Set query value.
         *
         * |Name  |Type  |Desc       |
         * |------|------|-----------|
         * |name  |string|Query name |
         * |value |string|Query value|
         * |return|Url   |this       |
         *
         * |Name  |Type  |Desc        |
         * |------|------|------------|
         * |query |object|query object|
         * |return|Url   |this        |
         *
         * ### rmQuery
         *
         * Remove query value.
         *
         * |Name  |Type        |Desc      |
         * |------|------------|----------|
         * |name  |string array|Query name|
         * |return|Url         |this      |
         *
         * ### parse
         *
         * [static] Parse url into an object.
         *
         * |Name  |Type  |Desc      |
         * |------|------|----------|
         * |url   |string|Url string|
         * |return|object|Url object|
         *
         * ### stringify
         *
         * [static] Stringify url object into a string.
         *
         * |Name  |Type  |Desc      |
         * |------|------|----------|
         * |url   |object|Url object|
         * |return|string|Url string|
         *
         * An url object contains the following properties:
         *
         * |Name    |Desc                                                                                  |
         * |--------|--------------------------------------------------------------------------------------|
         * |protocol|The protocol scheme of the URL (e.g. http:)                                           |
         * |slashes |A boolean which indicates whether the protocol is followed by two forward slashes (//)|
         * |auth    |Authentication information portion (e.g. username:password)                           |
         * |hostname|Host name without port number                                                         |
         * |port    |Optional port number                                                                  |
         * |pathname|URL path                                                                              |
         * |query   |Parsed object containing query string                                                 |
         * |hash    |The "fragment" portion of the URL including the pound-sign (#)                        |
         */

        /* example
         * const url = new Url('http://example.com:8080?eruda=true');
         * console.log(url.port); // -> '8080'
         * url.query.foo = 'bar';
         * url.rmQuery('eruda');
         * url.toString(); // -> 'http://example.com:8080/?foo=bar'
         */

        /* typescript
         * export declare namespace Url {
         *     interface IUrl {
         *         protocol: string;
         *         auth: string;
         *         hostname: string;
         *         hash: string;
         *         query: any;
         *         port: string;
         *         pathname: string;
         *         slashes: boolean;
         *     }
         * }
         * export declare class Url {
         *     protocol: string;
         *     auth: string;
         *     hostname: string;
         *     hash: string;
         *     query: any;
         *     port: string;
         *     pathname: string;
         *     slashes: boolean;
         *     constructor(url?: string);
         *     setQuery(name: string, value: string): Url;
         *     setQuery(query: { [name: string]: string }): Url;
         *     rmQuery(name: string | string[]): Url;
         *     toString(): string;
         *     static parse(url: string): Url.IUrl;
         *     static stringify(object: Url.IUrl): string;
         * }
         */

        /* dependencies
         * Class extend trim query isEmpty each isArr toArr isBrowser isObj 
         */

        exports = Class(
            {
                className: 'Url',
                initialize: function(url) {
                    if (!url && isBrowser) url = window.location.href;
                    extend(this, exports.parse(url || ''));
                },
                setQuery: function(name, val) {
                    var query = this.query;

                    if (isObj(name)) {
                        each(name, function(val, key) {
                            query[key] = val;
                        });
                    } else {
                        query[name] = val;
                    }

                    return this;
                },
                rmQuery: function(name) {
                    var query = this.query;
                    if (!isArr(name)) name = toArr(name);
                    each(name, function(key) {
                        delete query[key];
                    });
                    return this;
                },
                toString: function() {
                    return exports.stringify(this);
                }
            },
            {
                parse: function(url) {
                    var ret = {
                        protocol: '',
                        auth: '',
                        hostname: '',
                        hash: '',
                        query: {},
                        port: '',
                        pathname: '',
                        slashes: false
                    };
                    var rest = trim(url);
                    var slashes = false;
                    var proto = rest.match(regProto);

                    if (proto) {
                        proto = proto[0];
                        ret.protocol = proto.toLowerCase();
                        rest = rest.substr(proto.length);
                    }

                    if (proto) {
                        slashes = rest.substr(0, 2) === '//';

                        if (slashes) {
                            rest = rest.slice(2);
                            ret.slashes = true;
                        }
                    }

                    if (slashes) {
                        var host = rest;
                        var hostEnd = -1;

                        for (var i = 0, len = hostEndingChars.length; i < len; i++) {
                            var pos = rest.indexOf(hostEndingChars[i]);
                            if (pos !== -1 && (hostEnd === -1 || pos < hostEnd))
                                hostEnd = pos;
                        }

                        if (hostEnd > -1) {
                            host = rest.slice(0, hostEnd);
                            rest = rest.slice(hostEnd);
                        }

                        var atSign = host.lastIndexOf('@');

                        if (atSign !== -1) {
                            ret.auth = decodeURIComponent(host.slice(0, atSign));
                            host = host.slice(atSign + 1);
                        }

                        ret.hostname = host;
                        var port = host.match(regPort);

                        if (port) {
                            port = port[0];
                            if (port !== ':') ret.port = port.substr(1);
                            ret.hostname = host.substr(0, host.length - port.length);
                        }
                    }

                    var hash = rest.indexOf('#');

                    if (hash !== -1) {
                        ret.hash = rest.substr(hash);
                        rest = rest.slice(0, hash);
                    }

                    var queryMark = rest.indexOf('?');

                    if (queryMark !== -1) {
                        ret.query = query.parse(rest.substr(queryMark + 1));
                        rest = rest.slice(0, queryMark);
                    }

                    ret.pathname = rest || '/';
                    return ret;
                },
                stringify: function(obj) {
                    var ret =
                        obj.protocol +
                        (obj.slashes ? '//' : '') +
                        (obj.auth ? encodeURIComponent(obj.auth) + '@' : '') +
                        obj.hostname +
                        (obj.port ? ':' + obj.port : '') +
                        obj.pathname;
                    if (!isEmpty(obj.query)) ret += '?' + query.stringify(obj.query);
                    if (obj.hash) ret += obj.hash;
                    return ret;
                }
            }
        );
        var regProto = /^([a-z0-9.+-]+:)/i;
        var regPort = /:[0-9]*$/;
        var hostEndingChars = ['/', '?', '#'];

        return exports;
    })({});

    /* ------------------------------ getUrlParam ------------------------------ */

    _.getUrlParam = (function (exports) {
        /* Get url param.
         *
         * |Name        |Type  |Desc            |
         * |------------|------|----------------|
         * |name        |string|Param name      |
         * |url=location|string|Url to get param|
         * |return      |string|Param value     |
         */

        /* example
         * getUrlParam('test', 'http://example.com/?test=true'); // -> 'true'
         */

        /* typescript
         * export declare function getUrlParam(name: string, url?:string): string | undefined;
         */

        /* dependencies
         * Url 
         */

        exports = function(name, url) {
            return new Url(url).query[name];
        };

        return exports;
    })({});

    /* ------------------------------ sleep ------------------------------ */

    _.sleep = (function (exports) {
        /* Resolve a promise after a specified timeout.
         *
         * |Name   |Type   |Desc         |
         * |-------|-------|-------------|
         * |timeout|number |Sleep timeout|
         */

        /* example
         * ;(async function () {
         *     await sleep(2000);
         * })();
         */

        /* typescript
         * export declare function sleep(timeout: number): Promise<void>;
         */
        exports = function(timeout) {
            return new Promise(function(resolve) {
                return setTimeout(resolve, timeout);
            });
        };

        return exports;
    })({});

    /* ------------------------------ throttle ------------------------------ */

    _.throttle = (function (exports) {
        /* Return a new throttled version of the passed function.
         *
         * |Name  |Type    |Desc                           |
         * |------|--------|-------------------------------|
         * |fn    |function|Function to throttle           |
         * |wait  |number  |Number of milliseconds to delay|
         * |return|function|New throttled function         |
         */

        /* example
         * const updatePos = throttle(function () {}, 100);
         * // $(window).scroll(updatePos);
         */

        /* typescript
         * export declare function throttle(fn: Function, wait: number): Function;
         */

        /* dependencies
         * debounce 
         */

        exports = function(fn, wait) {
            return debounce(fn, wait, true);
        };

        return exports;
    })({});

    /* ------------------------------ unescape ------------------------------ */

    _.unescape = (function (exports) {
        /* Convert HTML entities back, the inverse of escape.
         *
         * |Name  |Type  |Desc              |
         * |------|------|------------------|
         * |str   |string|String to unescape|
         * |return|string|unescaped string  |
         */

        /* example
         * unescape('You &amp; Me'); // -> 'You & Me'
         */

        /* typescript
         * export declare function unescape(str: string): string;
         */

        /* dependencies
         * escape keys invert 
         */

        exports = function(str) {
            return regTest.test(str) ? str.replace(regReplace, replaceFn) : str;
        };

        var map = invert(escape.map);
        var regSrc = '(?:' + keys(map).join('|') + ')';
        var regTest = new RegExp(regSrc);
        var regReplace = new RegExp(regSrc, 'g');

        function replaceFn(match) {
            return map[match];
        }

        return exports;
    })({});

    /* ------------------------------ waitUntil ------------------------------ */

    _.waitUntil = (function (exports) {
        /* Wait until function returns a truthy value.
         *
         * |Name          |Type    |Desc              |
         * |--------------|--------|------------------|
         * |condition     |function|Condition function|
         * |[timeout=0]   |number  |Timeout           |
         * |[interval=250]|number  |Wait interval     |
         */

        /* example
         * let a = 5;
         * setTimeout(() => a = 10, 500);
         * waitUntil(() => a === 10).then(() => {
         *     console.log(a); // -> 10
         * });
         */

        /* typescript
         * export declare function waitUntil(
         *     condition: Function,
         *     timeout?: number,
         *     interval?: number
         * ): Promise<any>;
         */

        /* dependencies
         * now 
         */

        exports = function(condition) {
            var timeout =
                arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var interval =
                arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 250;

            function evalCondition() {
                return new Promise(function(resolve, reject) {
                    try {
                        resolve(condition());
                    } catch (e) {
                        reject(e);
                    }
                });
            }

            return new Promise(function(resolve, reject) {
                var startTime = now();

                var pollCondition = function() {
                    evalCondition().then(function(val) {
                        var elapsed = now() - startTime;

                        if (val) {
                            resolve(val);
                        } else if (timeout && elapsed >= timeout) {
                            reject(
                                Error('Wait timed out after '.concat(elapsed, ' ms'))
                            );
                        } else {
                            setTimeout(pollCondition, interval);
                        }
                    }, reject);
                };

                pollCondition();
            });
        };

        return exports;
    })({});

    return _;
}));