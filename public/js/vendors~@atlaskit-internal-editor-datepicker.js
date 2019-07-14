(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ 1145:
/***/ (function(module, exports) {

/**
 * Calendar constructor
 *
 * @param   {Object}  options               Calendar options
 *   @param {Object}  options.startDate     Date object indicating the selected start date
 *   @param {Object}  options.endDate       Date object indicating the selected end date
 *   @param {Boolean} options.siblingMonths Calculate dates from sibling months (before and after the current month, based on weekStart)
 *   @param {Boolean} options.weekNumbers   Caclulate the week days
 *   @param {Number}  options.weekStart     Day of the week to start the calendar, respects `Date.prototype.getDay` (defaults to `0`, Sunday)
 */
function Calendar (options) {
	options = options || {};

	this.startDate = options.startDate;
	this.endDate = options.endDate;
	this.siblingMonths = options.siblingMonths;
	this.weekNumbers = options.weekNumbers;
	this.weekStart = options.weekStart;

	if (this.weekStart === undefined) {
		this.weekStart = 0;
	}
}

/**
 * Calculate a calendar month
 *
 * @param  {Number} year  Year
 * @param  {Number} month Month [0-11]
 * @return {Array}        Calendar days
 */
Calendar.prototype.getCalendar = function (year, month) {
	var date = new Date(Date.UTC(year, month, 1, 0, 0, 0, 0));

	year = date.getUTCFullYear();
	month = date.getUTCMonth();

	var calendar = [],
		firstDay = date.getUTCDay(),

		firstDate = - (((7 - this.weekStart) + firstDay) % 7),
		lastDate = Calendar.daysInMonth(year, month),
		lastDay = ((lastDate - firstDate) % 7),
		lastDatePreviousMonth = Calendar.daysInMonth(year, month - 1),
		i = firstDate,
		max = (lastDate - i) + (lastDay != 0 ? 7 - lastDay : 0) + firstDate,
		currentDay,
		currentDate,
		currentDateObject,
		currentWeekNumber = null,
		otherMonth,
		otherYear;

	while (i < max) {
		currentDate = i + 1;
		currentDay = ((i < 1 ? 7 + i : i) + firstDay) % 7;
		if (currentDate < 1 || currentDate > lastDate) {
			if (this.siblingMonths) {
				if (currentDate < 1) {
					otherMonth = month - 1;
					otherYear = year;
					if (otherMonth < 0) {
						otherMonth = 11;
						otherYear --;
					}
					currentDate = lastDatePreviousMonth + currentDate;
				}
				else if (currentDate > lastDate) {
					otherMonth = month + 1;
					otherYear = year;
					if (otherMonth > 11) {
						otherMonth = 0;
						otherYear ++;
					}
					currentDate = i - lastDate + 1;
				}
				currentDateObject = {
					day: currentDate,
					weekDay: currentDay,
					month: otherMonth,
					year: otherYear,
					siblingMonth: true
				};
			}
			else {
				currentDateObject = false;
			}
		}
		else {
			currentDateObject = {
				day: currentDate,
				weekDay: currentDay,
				month: month,
				year: year
			};
		}

		if (currentDateObject && this.weekNumbers) {
			if (currentWeekNumber === null) {
				currentWeekNumber = Calendar.calculateWeekNumber(currentDateObject);
			}
			else if (currentDay == 1 && currentWeekNumber == 52) {
				currentWeekNumber = 1;
			}
			else if (currentDay == 1) {
				currentWeekNumber ++;
			}
			currentDateObject.weekNumber = currentWeekNumber;
		}

		if (currentDateObject && this.startDate) {
			currentDateObject.selected = this.isDateSelected(currentDateObject);
		}

		calendar.push(currentDateObject);
		i ++;
	}

	return calendar;
};

/**
 * Checks if a date is selected
 *
 * @param  {Object}  date Date object
 * @return {Boolean}      Selected status of the date
 */
Calendar.prototype.isDateSelected = function (date) {
	if (date.year == this.startDate.year && date.month == this.startDate.month && date.day == this.startDate.day) {
		return true;
	}
	else if (this.endDate) {
		if (date.year == this.startDate.year && date.month == this.startDate.month && date.day < this.startDate.day) {
			return false;
		}
		else if (date.year == this.endDate.year && date.month == this.endDate.month && date.day > this.endDate.day) {
			return false;
		}
		else if (date.year == this.startDate.year && date.month < this.startDate.month) {
			return false;
		}
		else if (date.year == this.endDate.year && date.month > this.endDate.month) {
			return false;
		}
		else if (date.year < this.startDate.year) {
			return false;
		}
		else if (date.year > this.endDate.year) {
			return false;
		}
		return true;
	}
	return false;
};

/**
 * Sets the selected period start
 *
 * @param {Object} date Date object
 */
Calendar.prototype.setStartDate = function (date) {
	this.startDate = date;
};

/**
 * Sets the selected period end
 *
 * @param {Object} date Date object
 */
Calendar.prototype.setEndDate = function (date) {
	this.endDate = date;
};

/**
 * Sets one selected date
 *
 * @param {Object} date Date object
 */
Calendar.prototype.setDate = Calendar.prototype.setStartDate;

/**
 * Calculates the difference between two dates (date1 - date2), in days
 *
 * @param  {Object} date1 Date object
 * @param  {Object} date2 Date object
 * @return {Number}       Days between the dates
 */
Calendar.diff = function (date1, date2) {
	date1 = new Date(Date.UTC(date1.year, date1.month, date1.day, 0, 0, 0, 0));
	date2 = new Date(Date.UTC(date2.year, date2.month, date2.day, 0, 0, 0, 0));
	return Math.ceil((date1.getTime() - date2.getTime()) / 86400000);
};

/**
 * Calculates the interval between two dates
 *
 * @param  {Object} date1 Date object
 * @param  {Object} date2 Date object
 * @return {Number}       Number of days
 */
Calendar.interval = function (date1, date2) {
	return Math.abs(Calendar.diff(date1, date2)) + 1;
};

/**
 * Quickly compare two dates
 *
 * @param  {Object} leftDate  Left date
 * @param  {Object} rightDate Right date
 * @return {Number}           Comparison result: -1 (left < right), 0 (equal) or 1 (left > right)
 */
Calendar.compare = function (leftDate, rightDate) {
	if (typeof leftDate != 'object' || typeof rightDate != 'object' || leftDate === null || rightDate === null) {
		throw new TypeError('dates must be objects');
	}

	if (leftDate.year < rightDate.year) {
		return -1;
	} else if (leftDate.year > rightDate.year) {
		return 1;
	} else if (leftDate.month < rightDate.month) {
		return -1;
	} else if (leftDate.month > rightDate.month) {
		return 1;
	} else if (leftDate.day < rightDate.day) {
		return -1;
	} else if (leftDate.day > rightDate.day) {
		return 1;
	}

	return 0;
}

/**
 * Calculates the number of days in a month
 *
 * @param  {Number} year  Year
 * @param  {Number} month Month [0-11]
 * @return {Number}       Length of the month
 */
Calendar.daysInMonth = function (year, month) {
	return new Date(year, month + 1, 0).getDate();
};

/**
 * Calculates if a given year is a leap year
 *
 * @param  {Number}  year Year
 * @return {Boolean}      Leap year or not
 */
Calendar.isLeapYear = function (year) {
	return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
}

/**
 * Calculates the week number for a given date
 *
 * @param  {Object} date Date object
 * @return {Number}      Week number
 */
// Adapted from http://techblog.procurios.nl/k/news/view/33796/14863/calculate-iso-8601-week-and-year-in-javascript.html
Calendar.calculateWeekNumber = function (date) {
	// Creates the requested date
	var current = new Date(Date.UTC(date.year, date.month, date.day, 0, 0, 0, 0));

	// Create a copy of the object
	var target = new Date(current.valueOf());

	// ISO week date weeks start on monday so correct the day number
	var dayNr = (current.getUTCDay() + 6) % 7;

	// ISO 8601 states that week 1 is the week with the first thursday of that
	// year. Set the target date to the thursday in the target week.
	target.setUTCDate(target.getUTCDate() - dayNr + 3);

	// Store the millisecond value of the target date
	var firstThursday = target.valueOf();

	// Set the target to the first thursday of the year

	// First set the target to january first
	target.setUTCMonth(0, 1);

	// Not a thursday? Correct the date to the next thursday
	if (target.getUTCDay() != 4) {
		target.setUTCMonth(0, 1 + ((4 - target.getUTCDay()) + 7) % 7);
	}

	// The weeknumber is the number of weeks between the  first thursday of the
	// year and the thursday in the target week.
	// 604800000 = 7 * 24 * 3600 * 1000
	return 1 + Math.ceil((firstThursday - target) / 604800000);
}

/**
 * Exports the Calendar
 */
module.exports = { Calendar: Calendar };


/***/ }),

/***/ 1146:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0,
    MAX_SAFE_INTEGER = 9007199254740991;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    symbolTag = '[object Symbol]';

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array ? array.length : 0,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol,
    propertyIsEnumerable = objectProto.propertyIsEnumerable,
    spreadableSymbol = Symbol ? Symbol.isConcatSpreadable : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * The base implementation of `_.flatten` with support for restricting flattening.
 *
 * @private
 * @param {Array} array The array to flatten.
 * @param {number} depth The maximum recursion depth.
 * @param {boolean} [predicate=isFlattenable] The function invoked per iteration.
 * @param {boolean} [isStrict] Restrict to values that pass `predicate` checks.
 * @param {Array} [result=[]] The initial result value.
 * @returns {Array} Returns the new flattened array.
 */
function baseFlatten(array, depth, predicate, isStrict, result) {
  var index = -1,
      length = array.length;

  predicate || (predicate = isFlattenable);
  result || (result = []);

  while (++index < length) {
    var value = array[index];
    if (depth > 0 && predicate(value)) {
      if (depth > 1) {
        // Recursively flatten arrays (susceptible to call stack limits).
        baseFlatten(value, depth - 1, predicate, isStrict, result);
      } else {
        arrayPush(result, value);
      }
    } else if (!isStrict) {
      result[result.length] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.pick` without support for individual
 * property identifiers.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick.
 * @returns {Object} Returns the new object.
 */
function basePick(object, props) {
  object = Object(object);
  return basePickBy(object, props, function(value, key) {
    return key in object;
  });
}

/**
 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The source object.
 * @param {string[]} props The property identifiers to pick from.
 * @param {Function} predicate The function invoked per property.
 * @returns {Object} Returns the new object.
 */
function basePickBy(object, props, predicate) {
  var index = -1,
      length = props.length,
      result = {};

  while (++index < length) {
    var key = props[index],
        value = object[key];

    if (predicate(value, key)) {
      result[key] = value;
    }
  }
  return result;
}

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = array;
    return apply(func, this, otherArgs);
  };
}

/**
 * Checks if `value` is a flattenable `arguments` object or array.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is flattenable, else `false`.
 */
function isFlattenable(value) {
  return isArray(value) || isArguments(value) ||
    !!(spreadableSymbol && value && value[spreadableSymbol]);
}

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
function isArguments(value) {
  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.
  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
}

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 8-9 which returns 'object' for typed array and other constructors.
  var tag = isObject(value) ? objectToString.call(value) : '';
  return tag == funcTag || tag == genTag;
}

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Creates an object composed of the picked `object` properties.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The source object.
 * @param {...(string|string[])} [props] The property identifiers to pick.
 * @returns {Object} Returns the new object.
 * @example
 *
 * var object = { 'a': 1, 'b': '2', 'c': 3 };
 *
 * _.pick(object, ['a', 'c']);
 * // => { 'a': 1, 'c': 3 }
 */
var pick = baseRest(function(object, props) {
  return object == null ? {} : basePick(object, arrayMap(baseFlatten(props, 1), toKey));
});

module.exports = pick;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(105)))

/***/ }),

/***/ 1147:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ChevronLeftLargeIcon = function ChevronLeftLargeIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M9.005 10.995l4.593-4.593a.99.99 0 1 1 1.4 1.4l-3.9 3.9 3.9 3.9a.99.99 0 0 1-1.4 1.4L9.005 12.41a1 1 0 0 1 0-1.414z\"/></svg>"
  }, props));
};

ChevronLeftLargeIcon.displayName = 'ChevronLeftLargeIcon';
var _default = ChevronLeftLargeIcon;
exports.default = _default;

/***/ }),

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _Icon = _interopRequireDefault(__webpack_require__(28));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var ChevronRightLargeIcon = function ChevronRightLargeIcon(props) {
  return _react.default.createElement(_Icon.default, _extends({
    dangerouslySetGlyph: "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" focusable=\"false\" role=\"presentation\"><path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M14.995 10.995a1 1 0 0 1 0 1.414l-4.593 4.593a.99.99 0 0 1-1.4-1.4l3.9-3.9-3.9-3.9a.99.99 0 0 1 1.4-1.4l4.593 4.593z\"/></svg>"
  }, props));
};

ChevronRightLargeIcon.displayName = 'ChevronRightLargeIcon';
var _default = ChevronRightLargeIcon;
exports.default = _default;

/***/ }),

/***/ 1149:
/***/ (function(module) {

module.exports = {"a":"@atlaskit/calendar","b":"8.0.3"};

/***/ }),

/***/ 1201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/tslib/tslib.es6.js
var tslib_es6 = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/react-dom/index.js
var react_dom = __webpack_require__(48);

// EXTERNAL MODULE: ./node_modules/@atlaskit/editor-common/ui/Popup/index.js
var Popup = __webpack_require__(559);

// EXTERNAL MODULE: ./node_modules/@atlaskit/editor-common/utils/date.js
var utils_date = __webpack_require__(828);

// EXTERNAL MODULE: ./node_modules/@atlaskit/editor-common/styles/consts.js
var consts = __webpack_require__(19);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/extends.js
var helpers_extends = __webpack_require__(35);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/toConsumableArray.js
var toConsumableArray = __webpack_require__(87);
var toConsumableArray_default = /*#__PURE__*/__webpack_require__.n(toConsumableArray);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread.js
var objectSpread = __webpack_require__(52);
var objectSpread_default = /*#__PURE__*/__webpack_require__.n(objectSpread);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(21);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(22);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(23);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(20);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/assertThisInitialized.js
var assertThisInitialized = __webpack_require__(10);
var assertThisInitialized_default = /*#__PURE__*/__webpack_require__.n(assertThisInitialized);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(24);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/defineProperty.js
var defineProperty = __webpack_require__(6);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/calendar-base/lib/calendar-base.js
var calendar_base = __webpack_require__(1145);

// EXTERNAL MODULE: ./node_modules/lodash.pick/index.js
var lodash_pick = __webpack_require__(1146);
var lodash_pick_default = /*#__PURE__*/__webpack_require__.n(lodash_pick);

// EXTERNAL MODULE: ./node_modules/react-uid/dist/es2015/index.js + 1 modules
var es2015 = __webpack_require__(265);

// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/createAndFireEvent.js
var createAndFireEvent = __webpack_require__(905);

// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/withAnalyticsContext.js
var withAnalyticsContext = __webpack_require__(909);

// EXTERNAL MODULE: ./node_modules/@atlaskit/analytics-next/withAnalyticsEvents.js
var withAnalyticsEvents = __webpack_require__(824);

// EXTERNAL MODULE: ./node_modules/@atlaskit/calendar/version.json
var version = __webpack_require__(1149);

// CONCATENATED MODULE: ./node_modules/@atlaskit/calendar/util/index.js
var i18n = {
  'en-au': {
    months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  }
};

function getI18n() {
  return i18n['en-au'];
}

function pad(num) {
  return num < 10 ? "0".concat(num) : num;
}

function getShortDayName(i) {
  return getI18n().weekdays[i].substring(0, 3);
}
function getMonthName(i) {
  return getI18n().months[i - 1];
}
function dateToString(date) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      fixMonth = _ref.fixMonth;

  return "".concat(date.year, "-").concat(pad(date.month + (fixMonth ? 1 : 0)), "-").concat(pad(date.day));
}
function makeArrayFromNumber(i) {
  var arr = [];

  for (var a = 0; a < i; a += 1) {
    arr.push(a);
  }

  return arr;
}
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.browser.esm.js
var styled_components_browser_esm = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/utils/themed.js
var themed = __webpack_require__(40);

// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/index.js + 6 modules
var theme = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/@atlaskit/calendar/styled/Date.js
/* eslint no-confusing-arrow: 0 */


var getTransparent = Object(themed["a" /* default */])({
  light: 'transparent',
  dark: 'transparent'
});
var selectedBackground = Object(themed["a" /* default */])({
  light: theme["colors"].N500,
  dark: theme["colors"].N0
});
var prevSelectedBackground = Object(themed["a" /* default */])({
  light: theme["colors"].B50,
  dark: theme["colors"].B50
});
var textDisabled = Object(themed["a" /* default */])({
  light: theme["colors"].N40,
  dark: theme["colors"].N40
});
var textHoverSelected = Object(themed["a" /* default */])({
  light: theme["colors"].N600,
  dark: theme["colors"].N600
});
var textPreviouslySelected = Object(themed["a" /* default */])({
  light: theme["colors"].N600,
  dark: theme["colors"].N600
});
var textSelected = Object(themed["a" /* default */])({
  light: theme["colors"].N0,
  dark: theme["colors"].N700
});
var textSibling = Object(themed["a" /* default */])({
  light: theme["colors"].N200,
  dark: theme["colors"].N200
});
var hoverPreviouslySelectedBackground = Object(themed["a" /* default */])({
  light: theme["colors"].B50,
  dark: theme["colors"].B50
});
var isActiveBackground = Object(themed["a" /* default */])({
  light: theme["colors"].B50,
  dark: theme["colors"].B50
});
var hoverBackground = Object(themed["a" /* default */])({
  light: theme["colors"].N30,
  dark: theme["colors"].N800
});
var getBackgroundColorSelectedAfter = Object(themed["a" /* default */])({
  light: theme["colors"].N700,
  dark: theme["colors"].N700
});

var Date_getBackgroundColorsAfter = function getBackgroundColorsAfter(props) {
  return props.selected ? getBackgroundColorSelectedAfter(props) : theme["colors"].primary(props);
};

var getBorderColorFocused = Object(themed["a" /* default */])({
  light: theme["colors"].B100,
  dark: theme["colors"].B75
});

var getBorderColors = function getBorderColors(props) {
  return props.focused ? getBorderColorFocused(props) : getTransparent(props);
};

function getBackgroundColor(props) {
  if (props.selected) return selectedBackground(props);
  if (props.previouslySelected) return prevSelectedBackground(props);
  return getTransparent(props);
}

function getColor(props) {
  if (props.disabled) return textDisabled(props);
  if (props.selected) return textSelected(props);
  if (props.previouslySelected) return textPreviouslySelected(props);
  if (props.isToday) return theme["colors"].primary(props);
  if (props.sibling) return textSibling(props);
  return theme["colors"].text(props);
}

var getCursor = function getCursor(_ref) {
  var disabled = _ref.disabled;
  return disabled ? 'not-allowed' : 'pointer';
};

function getHoverBackgroundColor(props) {
  if (props.disabled) return getTransparent(props);
  if (props.previouslySelected) return hoverPreviouslySelectedBackground(props);
  if (props.isActive) return isActiveBackground(props);
  return hoverBackground(props);
}

var Date_getHoverColor = function getHoverColor(props) {
  if (props.sibling) return textSibling(props);
  if (props.disabled) return textDisabled(props);
  if (props.selected || props.previouslySelected || props.isActive) return textHoverSelected(props);
  return theme["colors"].text(props);
};

var DateDiv = styled_components_browser_esm["default"].div.withConfig({
  displayName: "Date__DateDiv",
  componentId: "sc-1h7o82l-0"
})(["\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: 3px;\n  color: ", ";\n  cursor: ", ";\n  font-size: 14px;\n  padding: 4px 9px;\n  position: relative;\n  text-align: center;\n\n  ", " &:hover {\n    background-color: ", ";\n    color: ", ";\n  }\n"], getBackgroundColor, getBorderColors, getColor, getCursor, function (props) {
  return props.isToday ? Object(styled_components_browser_esm["css"])(["\n          font-weight: bold;\n          &::after {\n            background-color: ", ";\n            bottom: 2px;\n            content: '';\n            display: block;\n            height: 2px;\n            left: 2px;\n            position: absolute;\n            right: 2px;\n          }\n        "], Date_getBackgroundColorsAfter(props)) : '';
}, getHoverBackgroundColor, Date_getHoverColor);
var DateTd = styled_components_browser_esm["default"].td.withConfig({
  displayName: "Date__DateTd",
  componentId: "sc-1h7o82l-1"
})(["\n  border: 0;\n  padding: 0;\n  text-align: center;\n"]);
// CONCATENATED MODULE: ./node_modules/@atlaskit/calendar/components/Date.js










var Date_default =
/*#__PURE__*/
function (_Component) {
  inherits_default()(_default, _Component);

  function _default() {
    var _getPrototypeOf2;

    var _this;

    classCallCheck_default()(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = possibleConstructorReturn_default()(this, (_getPrototypeOf2 = getPrototypeOf_default()(_default)).call.apply(_getPrototypeOf2, [this].concat(args)));

    defineProperty_default()(assertThisInitialized_default()(_this), "props", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "state", {
      isActive: false
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onMouseDown", function (e) {
      // Prevent mousedown triggering an ancestor onBlur event in IE11 resulting
      // in dates not being selectable.
      e.preventDefault();

      _this.setState({
        isActive: true
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onMouseUp", function () {
      _this.setState({
        isActive: false
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "onClick", function () {
      var _this$props = _this.props,
          day = _this$props.children,
          month = _this$props.month,
          onClick = _this$props.onClick,
          year = _this$props.year,
          disabled = _this$props.disabled;

      if (!disabled && onClick) {
        onClick({
          year: year,
          month: month,
          day: day
        });
      }
    });

    return _this;
  }

  createClass_default()(_default, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          disabled = _this$props2.disabled,
          focused = _this$props2.focused,
          isToday = _this$props2.isToday,
          previouslySelected = _this$props2.previouslySelected,
          selected = _this$props2.selected,
          sibling = _this$props2.sibling;
      return react_default.a.createElement(DateTd, {
        "aria-selected": selected ? 'true' : 'false',
        role: "gridcell",
        onClick: this.onClick,
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp
      }, react_default.a.createElement(DateDiv, {
        disabled: disabled,
        focused: focused,
        isToday: isToday,
        previouslySelected: previouslySelected,
        selected: selected,
        sibling: sibling,
        isActive: this.state.isActive
      }, children));
    }
  }]);

  return _default;
}(react["Component"]);

defineProperty_default()(Date_default, "defaultProps", {
  disabled: false,
  focused: false,
  isToday: false,
  onClick: function onClick() {},
  previouslySelected: false,
  selected: false,
  sibling: false,
  today: ''
});


// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/chevron-left-large.js
var chevron_left_large = __webpack_require__(1147);
var chevron_left_large_default = /*#__PURE__*/__webpack_require__.n(chevron_left_large);

// EXTERNAL MODULE: ./node_modules/@atlaskit/icon/glyph/chevron-right-large.js
var chevron_right_large = __webpack_require__(1148);
var chevron_right_large_default = /*#__PURE__*/__webpack_require__.n(chevron_right_large);

// EXTERNAL MODULE: ./node_modules/@atlaskit/button/components/Button.js + 4 modules
var Button = __webpack_require__(829);

// CONCATENATED MODULE: ./node_modules/@atlaskit/calendar/components/Btn.js


/* harmony default export */ var Btn = (function (props) {
  return react_default.a.createElement(Button["a" /* default */], {
    appearance: "subtle",
    onClick: props.onClick,
    spacing: "none",
    tabIndex: -1,
    iconBefore: props.children
  });
});
// CONCATENATED MODULE: ./node_modules/@atlaskit/calendar/styled/Heading.js


var Heading = styled_components_browser_esm["default"].div.withConfig({
  displayName: "Heading",
  componentId: "kci65o-0"
})(["\n  display: flex;\n  padding: 0 0 8px 0;\n  font-weight: bold;\n  color: ", ";\n"], theme["colors"].N800);
var MonthAndYear = styled_components_browser_esm["default"].div.withConfig({
  displayName: "Heading__MonthAndYear",
  componentId: "kci65o-1"
})(["\n  flex-basis: 100%;\n  text-align: center;\n"]);
// CONCATENATED MODULE: ./node_modules/@atlaskit/calendar/components/Heading.js








var ArrowLeft = styled_components_browser_esm["default"].div.withConfig({
  displayName: "Heading__ArrowLeft",
  componentId: "sc-1wqpjt8-0"
})(["\n  margin-left: 8px;\n"]);
var ArrowRight = styled_components_browser_esm["default"].div.withConfig({
  displayName: "Heading__ArrowRight",
  componentId: "sc-1wqpjt8-1"
})(["\n  margin-right: 8px;\n"]);
/* harmony default export */ var components_Heading = (function (props) {
  return react_default.a.createElement(Heading, {
    "aria-hidden": "true"
  }, react_default.a.createElement(ArrowLeft, null, react_default.a.createElement(Btn, {
    onClick: props.handleClickPrev
  }, react_default.a.createElement(chevron_left_large_default.a, {
    label: "Last month",
    size: "medium",
    primaryColor: theme["colors"].N70
  }))), react_default.a.createElement(MonthAndYear, null, "".concat(getMonthName(props.month), " ").concat(props.year)), react_default.a.createElement(ArrowRight, null, react_default.a.createElement(Btn, {
    onClick: props.handleClickNext
  }, react_default.a.createElement(chevron_right_large_default.a, {
    label: "Next month",
    size: "medium",
    primaryColor: theme["colors"].N70
  }))));
});
// CONCATENATED MODULE: ./node_modules/@atlaskit/calendar/styled/Calendar.js
/* eslint no-confusing-arrow: 0 */


var wrapperBackgroundColor = Object(themed["a" /* default */])({
  light: theme["colors"].N0,
  dark: theme["colors"].N700
});
var getCalendarThColor = Object(themed["a" /* default */])({
  light: theme["colors"].N200,
  dark: theme["colors"].N200
});
var Announcer = styled_components_browser_esm["default"].div.withConfig({
  displayName: "Calendar__Announcer",
  componentId: "sc-3j1sll-0"
})(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n"]);
var CalendarTable = styled_components_browser_esm["default"].table.withConfig({
  displayName: "Calendar__CalendarTable",
  componentId: "sc-3j1sll-1"
})(["\n  display: inline-block;\n  margin: 0;\n  text-align: center;\n"]);
var CalendarTbody = styled_components_browser_esm["default"].tbody.withConfig({
  displayName: "Calendar__CalendarTbody",
  componentId: "sc-3j1sll-2"
})(["\n  border: 0;\n"]); // FIXME: first-child
// @atlaskit/css-reset should adjust default behaviours

var thSpacing = Object(styled_components_browser_esm["css"])(["\n  padding: 8px 8px;\n  min-width: 40px;\n  box-sizing: border-box;\n"]);
var CalendarTh = styled_components_browser_esm["default"].th.withConfig({
  displayName: "Calendar__CalendarTh",
  componentId: "sc-3j1sll-3"
})(["\n  border: 0;\n  color: ", ";\n  font-size: 11px;\n  ", ";\n  text-transform: uppercase;\n  text-align: center;\n\n  &:last-child,\n  &:first-child {\n    ", ";\n  }\n"], getCalendarThColor, thSpacing, thSpacing);
var CalendarThead = styled_components_browser_esm["default"].thead.withConfig({
  displayName: "Calendar__CalendarThead",
  componentId: "sc-3j1sll-4"
})(["\n  border: 0;\n"]);
var Wrapper = styled_components_browser_esm["default"].div.withConfig({
  displayName: "Calendar__Wrapper",
  componentId: "sc-3j1sll-5"
})(["\n  background-color: ", ";\n  color: ", ";\n  display: inline-block;\n  padding: 16px;\n  user-select: none;\n  box-sizing: border-box;\n  outline: none;\n"], wrapperBackgroundColor, theme["colors"].text);
// CONCATENATED MODULE: ./node_modules/@atlaskit/calendar/components/Calendar.js




















var arrowKeys = {
  ArrowDown: 'down',
  ArrowLeft: 'left',
  ArrowRight: 'right',
  ArrowUp: 'up'
};
var daysPerWeek = 7;
var monthsPerYear = 12;

function getUniqueId(prefix) {
  return "".concat(prefix, "-").concat(Object(es2015["a" /* uid */])({
    id: prefix
  }));
}

function padToTwo(number) {
  return number <= 99 ? "0".concat(number).slice(-2) : "".concat(number);
}

var Calendar_Calendar =
/*#__PURE__*/
function (_Component) {
  inherits_default()(Calendar, _Component);

  function Calendar(props) {
    var _this;

    classCallCheck_default()(this, Calendar);

    _this = possibleConstructorReturn_default()(this, getPrototypeOf_default()(Calendar).call(this, props));

    defineProperty_default()(assertThisInitialized_default()(_this), "calendar", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "container", void 0);

    defineProperty_default()(assertThisInitialized_default()(_this), "getState", function () {
      return objectSpread_default()({}, _this.state, lodash_pick_default()(_this.props, ['day', 'disabled', 'selected', 'month', 'previouslySelected', 'year', 'today']));
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleContainerKeyDown", function (e) {
      var key = e.key;
      var arrowKey = arrowKeys[key];

      if (key === 'Enter' || key === ' ') {
        var _this$getState = _this.getState(),
            selectDay = _this$getState.day,
            selectMonth = _this$getState.month,
            selectYear = _this$getState.year;

        e.preventDefault();

        _this.triggerOnSelect({
          day: selectDay,
          year: selectYear,
          month: selectMonth
        });
      } else if (arrowKey) {
        e.preventDefault();

        _this.navigate(arrowKey);
      }
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClickDay", function (_ref) {
      var year = _ref.year,
          month = _ref.month,
          day = _ref.day;

      _this.triggerOnSelect({
        year: year,
        month: month,
        day: day
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClickNext", function () {
      var _this$getState$_this$ = objectSpread_default()({}, _this.getState(), _this.getNextMonth()),
          day = _this$getState$_this$.day,
          month = _this$getState$_this$.month,
          year = _this$getState$_this$.year;

      _this.triggerOnChange({
        day: day,
        month: month,
        year: year,
        type: 'next'
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleClickPrev", function () {
      var _this$getState$_this$2 = objectSpread_default()({}, _this.getState(), _this.getPrevMonth()),
          day = _this$getState$_this$2.day,
          month = _this$getState$_this$2.month,
          year = _this$getState$_this$2.year;

      _this.triggerOnChange({
        day: day,
        month: month,
        year: year,
        type: 'prev'
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleContainerBlur", function () {
      _this.setState({
        day: 0
      });

      _this.props.onBlur();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "handleContainerFocus", function () {
      _this.setState({
        day: _this.getState().day || 1
      });

      _this.props.onFocus();
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "refContainer", function (e) {
      _this.container = e;
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "triggerOnChange", function (_ref2) {
      var year = _ref2.year,
          month = _ref2.month,
          day = _ref2.day,
          type = _ref2.type;
      var iso = dateToString({
        year: year,
        month: month,
        day: day
      });

      _this.props.onChange({
        day: day,
        month: month,
        year: year,
        iso: iso,
        type: type
      });

      _this.setState({
        day: day,
        month: month,
        year: year
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "triggerOnSelect", function (_ref3) {
      var year = _ref3.year,
          month = _ref3.month,
          day = _ref3.day;
      var iso = dateToString({
        year: year,
        month: month,
        day: day
      });

      _this.props.onSelect({
        day: day,
        month: month,
        year: year,
        iso: iso
      });

      _this.setState({
        previouslySelected: _this.getState().selected,
        selected: [iso]
      });
    });

    defineProperty_default()(assertThisInitialized_default()(_this), "getCalendarWeeks", function (mappedState) {
      var day = mappedState.day,
          year = mappedState.year,
          month = mappedState.month,
          disabled = mappedState.disabled,
          previouslySelected = mappedState.previouslySelected,
          selected = mappedState.selected,
          today = mappedState.today;

      var calendar = _this.calendar.getCalendar(year, month - 1);

      var weeks = [];
      var shouldDisplaySixthWeek = calendar.length % 6; // Some months jump between 5 and 6 weeks to display. In some cases 4 (Feb
      // with the 1st on a Monday etc). This ensures the UI doesn't jump around by
      // catering to always showing 6 weeks.

      if (shouldDisplaySixthWeek) {
        var lastDayIsSibling = calendar[calendar.length - 1].siblingMonth;
        var sliceStart = lastDayIsSibling ? daysPerWeek : 0;
        calendar.push.apply(calendar, toConsumableArray_default()(_this.calendar.getCalendar(year, month).slice(sliceStart, sliceStart + daysPerWeek).map(function (e) {
          return objectSpread_default()({}, e, {
            siblingMonth: true
          });
        })));
      }

      calendar.forEach(function (date) {
        var dateAsString = dateToString(date, {
          fixMonth: true
        });
        var week;

        if (date.weekDay === 0) {
          week = {
            key: dateAsString,
            components: []
          };
          weeks.push(week);
        } else {
          week = weeks[weeks.length - 1];
        }

        var isDisabled = disabled.indexOf(dateAsString) > -1;
        var isFocused = day === date.day && !date.siblingMonth;
        var isPreviouslySelected = !isDisabled && previouslySelected.indexOf(dateAsString) > -1;
        var isSelected = !isDisabled && selected.indexOf(dateAsString) > -1;
        var isSiblingMonth = date.siblingMonth;
        var isToday = today === dateAsString;
        week.components.push(react_default.a.createElement(Date_default, {
          disabled: isDisabled,
          focused: isFocused,
          isToday: isToday,
          key: dateAsString,
          month: date.month + 1,
          onClick: _this.handleClickDay,
          previouslySelected: isPreviouslySelected,
          selected: isSelected,
          sibling: isSiblingMonth,
          year: date.year
        }, date.day));
      });
      return weeks;
    });

    var now = new Date();
    var thisDay = now.getDate();
    var thisMonth = now.getMonth() + 1;
    var thisYear = now.getFullYear();
    _this.state = {
      day: _this.props.defaultDay || thisDay,
      disabled: _this.props.defaultDisabled,
      selected: _this.props.defaultSelected,
      month: _this.props.defaultMonth || thisMonth,
      previouslySelected: _this.props.defaultPreviouslySelected,
      year: _this.props.defaultYear || thisYear,
      today: _this.props.today || "".concat(thisYear, "-").concat(padToTwo(thisMonth), "-").concat(padToTwo(thisDay))
    };
    _this.calendar = new calendar_base["Calendar"]({
      siblingMonths: true,
      weekNumbers: true
    });
    return _this;
  } // All state needs to be accessed via this function so that the state is mapped from props
  // correctly to allow controlled/uncontrolled usage.


  createClass_default()(Calendar, [{
    key: "getNextMonth",
    value: function getNextMonth() {
      var _this$getState2 = this.getState(),
          month = _this$getState2.month,
          year = _this$getState2.year;

      if (month === monthsPerYear) {
        month = 1;
        year += 1;
      } else {
        month += 1;
      }

      return {
        month: month,
        year: year
      };
    }
  }, {
    key: "getPrevMonth",
    value: function getPrevMonth() {
      var _this$getState3 = this.getState(),
          month = _this$getState3.month,
          year = _this$getState3.year;

      if (month === 1) {
        month = monthsPerYear;
        year -= 1;
      } else {
        month -= 1;
      }

      return {
        month: month,
        year: year
      };
    }
  }, {
    key: "focus",
    value: function focus() {
      if (this.container) {
        this.container.focus();
      }
    }
  }, {
    key: "navigate",
    value: function navigate(type) {
      var _this$getState4 = this.getState(),
          day = _this$getState4.day,
          month = _this$getState4.month,
          year = _this$getState4.year;

      if (type === 'down') {
        var next = day + daysPerWeek;
        var daysInMonth = calendar_base["Calendar"].daysInMonth(year, month - 1);

        if (next > daysInMonth) {
          var _this$getNextMonth = this.getNextMonth(),
              nextMonth = _this$getNextMonth.month,
              nextYear = _this$getNextMonth.year;

          this.triggerOnChange({
            year: nextYear,
            month: nextMonth,
            day: next - daysInMonth,
            type: type
          });
        } else {
          this.triggerOnChange({
            year: year,
            month: month,
            day: next,
            type: type
          });
        }
      } else if (type === 'left') {
        var prev = day - 1;

        if (prev < 1) {
          var _this$getPrevMonth = this.getPrevMonth(),
              prevMonth = _this$getPrevMonth.month,
              prevYear = _this$getPrevMonth.year;

          var prevDay = calendar_base["Calendar"].daysInMonth(prevYear, prevMonth - 1);
          this.triggerOnChange({
            year: prevYear,
            month: prevMonth,
            day: prevDay,
            type: type
          });
        } else {
          this.triggerOnChange({
            year: year,
            month: month,
            day: prev,
            type: type
          });
        }
      } else if (type === 'right') {
        var _next = day + 1;

        var _daysInMonth = calendar_base["Calendar"].daysInMonth(year, month - 1);

        if (_next > _daysInMonth) {
          var _this$getNextMonth2 = this.getNextMonth(),
              _nextMonth = _this$getNextMonth2.month,
              _nextYear = _this$getNextMonth2.year;

          this.triggerOnChange({
            year: _nextYear,
            month: _nextMonth,
            day: 1,
            type: type
          });
        } else {
          this.triggerOnChange({
            year: year,
            month: month,
            day: _next,
            type: type
          });
        }
      } else if (type === 'up') {
        var _prev = day - daysPerWeek;

        if (_prev < 1) {
          var _this$getPrevMonth2 = this.getPrevMonth(),
              _prevMonth = _this$getPrevMonth2.month,
              _prevYear = _this$getPrevMonth2.year;

          var _prevDay = calendar_base["Calendar"].daysInMonth(_prevYear, _prevMonth - 1) + _prev;

          this.triggerOnChange({
            year: _prevYear,
            month: _prevMonth,
            day: _prevDay,
            type: type
          });
        } else {
          this.triggerOnChange({
            year: year,
            month: month,
            day: _prev,
            type: type
          });
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var mappedState = this.getState();
      var innerProps = this.props.innerProps;
      var announceId = getUniqueId('announce');
      return react_default.a.createElement("div", extends_default()({}, innerProps, {
        onBlur: this.handleContainerBlur,
        onFocus: this.handleContainerFocus,
        onKeyDown: this.handleContainerKeyDown,
        role: "presentation"
      }), react_default.a.createElement(Announcer, {
        id: announceId,
        "aria-live": "assertive",
        "aria-relevant": "text"
      }, new Date(mappedState.year, mappedState.month, mappedState.day).toString()), react_default.a.createElement(Wrapper, {
        "aria-describedby": announceId,
        "aria-label": "calendar",
        innerRef: this.refContainer,
        role: "grid",
        tabIndex: 0
      }, react_default.a.createElement(components_Heading, {
        month: mappedState.month,
        year: mappedState.year,
        handleClickNext: this.handleClickNext,
        handleClickPrev: this.handleClickPrev
      }), react_default.a.createElement(CalendarTable, {
        role: "presentation"
      }, react_default.a.createElement(CalendarThead, null, react_default.a.createElement("tr", null, makeArrayFromNumber(daysPerWeek).map(function (i) {
        return react_default.a.createElement(CalendarTh, {
          key: i
        }, getShortDayName(i));
      }))), react_default.a.createElement(CalendarTbody, null, this.getCalendarWeeks(mappedState).map(function (week) {
        return react_default.a.createElement("tr", {
          key: week.key
        }, week.components);
      })))));
    }
  }]);

  return Calendar;
}(react["Component"]);

defineProperty_default()(Calendar_Calendar, "defaultProps", {
  onBlur: function onBlur() {},
  onChange: function onChange() {},
  onFocus: function onFocus() {},
  onSelect: function onSelect() {},
  innerProps: {},
  defaultDay: 0,
  defaultDisabled: [],
  defaultSelected: [],
  defaultPreviouslySelected: []
});


var createAndFireEventOnAtlaskit = Object(createAndFireEvent["a" /* default */])('atlaskit');
/* harmony default export */ var components_Calendar = (Object(withAnalyticsContext["a" /* default */])({
  componentName: 'calendar',
  packageName: version["a" /* name */],
  packageVersion: version["b" /* version */]
})(Object(withAnalyticsEvents["a" /* default */])({
  onChange: createAndFireEventOnAtlaskit({
    action: 'changed',
    actionSubject: 'calendarDate',
    attributes: {
      componentName: 'calendar',
      packageName: version["a" /* name */],
      packageVersion: version["b" /* version */]
    }
  }),
  onSelect: createAndFireEventOnAtlaskit({
    action: 'selected',
    actionSubject: 'calendarDate',
    attributes: {
      componentName: 'calendar',
      packageName: version["a" /* name */],
      packageVersion: version["b" /* version */]
    }
  })
})(Calendar_Calendar)));
// EXTERNAL MODULE: ./node_modules/@atlaskit/theme/constants.js
var constants = __webpack_require__(17);

// EXTERNAL MODULE: ./node_modules/@atlaskit/editor-core/ui/with-outer-listeners.js
var with_outer_listeners = __webpack_require__(188);

// CONCATENATED MODULE: ./node_modules/@atlaskit/editor-core/plugins/date/ui/DatePicker/index.js







var PopupWithListeners = Object(with_outer_listeners["a" /* default */])(Popup["a" /* default */]);
var calendarStyle = {
    padding: Object(constants["f" /* borderRadius */])(),
    borderRadius: Object(constants["f" /* borderRadius */])(),
    boxShadow: "0 4px 8px -2px " + theme["colors"].N60A + ", 0 0 1px " + theme["colors"].N60A,
    backgroundColor: theme["colors"].N0,
};
var DatePicker_DatePicker = /** @class */ (function (_super) {
    tslib_es6["__extends"](DatePicker, _super);
    function DatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.handleChange = function (_a) {
            var day = _a.day, month = _a.month, year = _a.year;
            _this.setState({
                day: day,
                month: month,
                year: year,
            });
        };
        _this.handleRef = function (ref) {
            var elm = ref && react_dom["findDOMNode"](ref);
            if (elm) {
                elm.focus();
            }
        };
        var timestamp = props.element.getAttribute('timestamp');
        if (timestamp) {
            var _a = Object(utils_date["e" /* timestampToUTCDate */])(timestamp), day = _a.day, month = _a.month, year = _a.year;
            _this.state = {
                selected: [Object(utils_date["b" /* timestampToIsoFormat */])(timestamp)],
                day: day,
                month: month,
                year: year,
            };
        }
        return _this;
    }
    DatePicker.prototype.render = function () {
        var _a = this.props, element = _a.element, closeDatePicker = _a.closeDatePicker, onSelect = _a.onSelect;
        var timestamp = element.getAttribute('timestamp');
        if (!timestamp) {
            return null;
        }
        return (react["createElement"](PopupWithListeners, { target: element, offset: [0, 8], fitHeight: 327, fitWidth: 340, handleClickOutside: closeDatePicker, handleEscapeKeydown: closeDatePicker, zIndex: consts["i" /* akEditorFloatingDialogZIndex */] },
            react["createElement"](components_Calendar, tslib_es6["__assign"]({ onChange: this.handleChange, onSelect: onSelect }, this.state, { ref: this.handleRef, innerProps: { style: calendarStyle } }))));
    };
    return DatePicker;
}(react["Component"]));
/* harmony default export */ var ui_DatePicker = __webpack_exports__["default"] = (DatePicker_DatePicker);
//# sourceMappingURL=index.js.map

/***/ })

}]);